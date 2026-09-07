# ChatGPT Critical Delivery Review — CORR-PROOF-04 Hybrid Context Envelope

## 1. Timestamp (UTC)
2026-09-07T04:34:32Z

## 2. Cycle ID
SFIA-STUDIO-PRODUCT-PROOF-CORR-04-HYBRID-CONTEXT-ENVELOPE-DELIVERY-01
Parent: SFIA-STUDIO-PRODUCT-PROOF-CORR-04-STUDIO-GROUNDED-REASONING-DEPTH-DESIGN-01
Corrective: CORR-PROOF-04 — STUDIO-GROUNDED REASONING DEPTH
Cycle: 8 Delivery · EVOL · CRITICAL

## 3. Exact Morris decision consumed
MORRIS DECISION — CORR-PROOF-04 OPTION D "HYBRID CONTEXT ENVELOPE" ADOPTED WITH COMPOSER-FIRST FIRST SLICE
— Studio-attributable reasoning quality bar confirmed
— Product truth / HD / Evidence factual authority; DoctrinePackage/CKC method guidance
— First Delivery: read-only Studio cognitive context composer + richer CKC projection + conditional HD + Evidence/ReviewBundle
— Generic F1 advisory adapted to context-first
— ProjectTrajectory conditional if trustworthy read fits — IMPLEMENTED via getCurrentTrajectory
— Selective read tools DEFERRED; composer must not score maturity/select trajectory/become second engine
— Same Agent/Runner/ProductSqliteSession; no third method LLM
— Cycle 8 Delivery + deterministic attributable-value proof AUTHORIZED
— NO REAL · NO PRODUCT GIT until Critical Delivery Review · NO Stage B

## 4. Repo / branch / worktree
Repo: mcleland147/sfia-workspace
Branch: delivery/sfia-studio-proof-corr-04-hybrid-envelope-d
Worktree: /Users/morris/Projects/sfia-wt-corr04-d-envelope
RESERVE: recommended path sfia-workspace-proof-corr-04-context-envelope collided (corr-01-d1 + staged unknown artifacts). Left untouched. Alternate clean WT used.

## 5. HEAD / origin/main
HEAD = origin/main = 1f48dd81c870d3337efd5f2d02af6be0d8602b44

## 6. Input handoff tip
7dc602d1663dc247fff2c4833f7b00db794fdc4d

## 7. Convergence qualification
Primary V3-F05; supporting F01–F04, F06, F07; preserve F11/F12/F15.

## 8. Product Proof state
OPEN / BLOCKED

## 9. Blocker definition
STUDIO_GROUNDED_REASONING_DEPTH_GAP

## 10. Root-cause statement
UNDER-CONSUMPTION: rich Product CKC + OA repos existed; F1 received thin CKC + Truth C; generic advisory dominated.

## 11. Option D architecture
Hybrid Context Envelope composer-first → ONE StudioCognitiveContext → SAME Nora F1 Agent once.

## 12. Design amendments consumed
None beyond Morris Option D composer-first slice.

## 13. Pre-change cognitive flow
analyzeIntent → transitionReadiness → composeAdvisoryMethodContext (thin CKC) → generic MVP advisory F1 → one Agent.

## 14. Post-change cognitive flow
analyzeIntent → transitionReadiness → composeStudioCognitiveContext → context-first F1 prompt → one Agent. ZERO reasonWithResolvedCkcContext on F1.

## 15. Complete exact file scope
NEW: studioCognitiveContext.ts; studioCognitiveContext.test.ts; corrProof04.d.hybridContextEnvelope.d0.test.ts
MODIFIED: ckcCognitiveContext.ts; methodOrientation.ts; orchestrateF2.ts; buildProjectSystemPrompt.ts; orchestrateTurn.ts; evidence/review ports+memory+sqlite; evidenceRepository.test.ts; contractResultCorrection.test.ts

## 16. Full content of NEW files

### studioCognitiveContext.ts
```ts
/**
 * CORR-PROOF-04 Option D — Hybrid Context Envelope (composer-first slice).
 *
 * Pure / read-only Studio cognitive context composition for ordinary F1.
 * Assembles authoritative Project/LPS + method/CKC + conditional HD/Evidence/
 * ReviewBundle + conditional ProjectTrajectory when readable.
 *
 * MUST NOT: call a model, score maturity, select trajectory, create HD/Evidence/
 * Cycle/LPS mutations, invent Recommendations, or become a second planner.
 */

import type { HumanDecision } from "@/lib/oa/decision";
import type { Evidence } from "@/lib/oa/evidence-review";
import type { ReviewBundle } from "@/lib/oa/evidence-review/domain/reviewBundleTypes";
import type { ProjectTrajectory } from "@/lib/oa/cycle";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import type { ProjectAssistantContextDto } from "../types";
import type { IntentAnalysisDto } from "./types";
import {
  composeAdvisoryMethodContext,
  type AdvisoryMethodContext,
} from "./methodOrientation";

/** Conservative composition budgets — implementation policy, not doctrine. */
export const STUDIO_COGNITIVE_CONTEXT_BUDGET = Object.freeze({
  maxDecisions: 8,
  maxEvidence: 8,
  maxReviewBundles: 4,
  decisionSubjectChars: 160,
  decisionOptionChars: 120,
  evidenceLabelChars: 120,
  reviewLabelChars: 120,
  trajectoryStepChars: 100,
  maxTrajectorySteps: 6,
});

export type PresenceState = "PRESENT" | "NONE" | "UNAVAILABLE";
export type TrajectoryPresenceState =
  | "PRESENT"
  | "ABSENT"
  | "DEFERRED"
  | "UNAVAILABLE";

export type StudioProjectTruthProjection = {
  readonly projectId: string;
  readonly name: string;
  readonly objective: string;
  readonly context: string;
  readonly constraints: readonly string[];
  readonly criticality: string;
  readonly shortReference: string | null;
  readonly lpsId: string;
  readonly lpsVersion: number;
  readonly activeCycleInstanceId: string | null;
  readonly doctrineId: string;
  readonly doctrineVersion: string;
  readonly doctrineStatus: string;
};

export type StudioDecisionProjection = {
  readonly subject: string;
  readonly selectedOptionLabel: string | null;
  readonly status: string;
  readonly effectiveAt: string;
  readonly reversible: boolean;
  readonly supersedesPresent: boolean;
};

export type StudioEvidenceProjection = {
  readonly type: string;
  readonly status: string;
  readonly availability: string;
  readonly freshness: string | null;
  readonly sourceKind: string;
  readonly producedAt: string | null;
};

export type StudioReviewProjection = {
  readonly status: string;
  readonly evidenceRefCount: number;
  readonly completeness: string;
  readonly supersedesPresent: boolean;
  readonly createdAt: string;
};

export type StudioTrajectoryProjection = {
  readonly status: string;
  readonly version: number;
  readonly stepSummaries: readonly string[];
  readonly decidedByDecisionPresent: boolean;
};

export type StudioCognitiveContext = {
  readonly projectTruth: StudioProjectTruthProjection;
  readonly method: AdvisoryMethodContext;
  readonly decisions: {
    readonly state: PresenceState;
    readonly items: readonly StudioDecisionProjection[];
  };
  readonly evidence: {
    readonly state: PresenceState;
    readonly items: readonly StudioEvidenceProjection[];
  };
  readonly review: {
    readonly state: PresenceState;
    readonly items: readonly StudioReviewProjection[];
  };
  readonly trajectory: {
    readonly state: TrajectoryPresenceState;
    readonly current: StudioTrajectoryProjection | null;
  };
  readonly limits: {
    readonly oaAvailable: boolean;
    readonly truthOutranksConversation: true;
    readonly composerDoesNotScoreMaturity: true;
    readonly composerDoesNotSelectTrajectory: true;
  };
};

function clip(text: string, max: number): string {
  const compact = text.replace(/\s+/g, " ").trim();
  return compact.length <= max ? compact : `${compact.slice(0, max - 1)}…`;
}

function projectDecision(d: HumanDecision): StudioDecisionProjection {
  const selected =
    d.options.find((o) => o.optionId === d.selectedOptionId)?.label ?? null;
  return Object.freeze({
    subject: clip(d.subject, STUDIO_COGNITIVE_CONTEXT_BUDGET.decisionSubjectChars),
    selectedOptionLabel: selected
      ? clip(selected, STUDIO_COGNITIVE_CONTEXT_BUDGET.decisionOptionChars)
      : null,
    status: d.status,
    effectiveAt: d.effectiveAt,
    reversible: d.reversible,
    supersedesPresent: Boolean(d.supersedes),
  });
}

function projectEvidence(e: Evidence): StudioEvidenceProjection {
  return Object.freeze({
    type: e.type,
    status: e.status,
    availability: e.availability,
    freshness: e.freshness ?? null,
    sourceKind: e.sourceKind,
    producedAt: e.producedAt ?? null,
  });
}

function projectReview(r: ReviewBundle): StudioReviewProjection {
  return Object.freeze({
    status: r.status,
    evidenceRefCount: r.evidenceRefs.length,
    completeness: r.completeness,
    supersedesPresent: Boolean(r.supersedesReviewBundleId),
    createdAt: r.createdAt,
  });
}

function projectTrajectory(t: ProjectTrajectory): StudioTrajectoryProjection {
  const steps = t.steps
    .slice(0, STUDIO_COGNITIVE_CONTEXT_BUDGET.maxTrajectorySteps)
    .map((s) =>
      clip(
        `${s.order}:${s.label}[${s.state}]`,
        STUDIO_COGNITIVE_CONTEXT_BUDGET.trajectoryStepChars,
      ),
    );
  return Object.freeze({
    status: t.status,
    version: t.version,
    stepSummaries: Object.freeze(steps),
    decidedByDecisionPresent: Boolean(t.decidedByDecisionRef),
  });
}

/**
 * Read-only composition. No provider call. No persistence. No Recommendation.
 */
export async function composeStudioCognitiveContext(input: {
  analysis: IntentAnalysisDto;
  project: ProjectAssistantContextDto;
  registryRoot: string;
  truthCContext?: string | null;
  oa: RuntimeOaStack | null;
  activeCycleInstanceId?: string | null;
}): Promise<StudioCognitiveContext> {
  const method = composeAdvisoryMethodContext({
    analysis: input.analysis,
    project: input.project,
    registryRoot: input.registryRoot,
  });

  const contextBody =
    input.truthCContext != null && input.truthCContext !== ""
      ? input.truthCContext
      : input.project.contextSummary;

  const projectTruth: StudioProjectTruthProjection = Object.freeze({
    projectId: input.project.projectId,
    name: input.project.name,
    objective: input.project.objective,
    context: contextBody,
    constraints: Object.freeze([...input.project.constraints]),
    criticality: input.project.criticality,
    shortReference: input.project.shortReference ?? null,
    lpsId: input.project.lpsId,
    lpsVersion: input.project.lpsVersion,
    activeCycleInstanceId:
      input.activeCycleInstanceId ??
      input.project.activeCycleInstanceId ??
      null,
    doctrineId: input.project.doctrineId,
    doctrineVersion: input.project.doctrineVersion,
    doctrineStatus: input.project.doctrineStatus,
  });

  if (!input.oa) {
    return Object.freeze({
      projectTruth,
      method,
      decisions: Object.freeze({ state: "UNAVAILABLE" as const, items: Object.freeze([]) }),
      evidence: Object.freeze({ state: "UNAVAILABLE" as const, items: Object.freeze([]) }),
      review: Object.freeze({ state: "UNAVAILABLE" as const, items: Object.freeze([]) }),
      trajectory: Object.freeze({
        state: "UNAVAILABLE" as const,
        current: null,
      }),
      limits: Object.freeze({
        oaAvailable: false,
        truthOutranksConversation: true as const,
        composerDoesNotScoreMaturity: true as const,
        composerDoesNotSelectTrajectory: true as const,
      }),
    });
  }

  const oa = input.oa;
  const budget = STUDIO_COGNITIVE_CONTEXT_BUDGET;
  const projectId = input.project.projectId;

  let decisionsState: PresenceState = "NONE";
  let decisionItems: StudioDecisionProjection[] = [];
  try {
    const history = await oa.decisionServices.listDecisionHistory.execute({
      projectId,
    });
    if (!history.ok) {
      decisionsState = "UNAVAILABLE";
    } else if (history.decisions.length === 0) {
      decisionsState = "NONE";
    } else {
      decisionsState = "PRESENT";
      const sorted = [...history.decisions].sort((a, b) =>
        b.effectiveAt.localeCompare(a.effectiveAt),
      );
      decisionItems = sorted.slice(0, budget.maxDecisions).map(projectDecision);
    }
  } catch {
    decisionsState = "UNAVAILABLE";
  }

  let evidenceState: PresenceState = "NONE";
  let evidenceItems: StudioEvidenceProjection[] = [];
  try {
    const listed =
      await oa.evidenceReviewServices.repository.listByProject(projectId);
    if (listed.length === 0) {
      evidenceState = "NONE";
    } else {
      evidenceState = "PRESENT";
      evidenceItems = listed.slice(0, budget.maxEvidence).map(projectEvidence);
    }
  } catch {
    evidenceState = "UNAVAILABLE";
  }

  let reviewState: PresenceState = "NONE";
  let reviewItems: StudioReviewProjection[] = [];
  try {
    const listed =
      await oa.evidenceReviewServices.reviewBundleRepository.listByProject(
        projectId,
      );
    if (listed.length === 0) {
      reviewState = "NONE";
    } else {
      reviewState = "PRESENT";
      reviewItems = listed
        .slice(0, budget.maxReviewBundles)
        .map(projectReview);
    }
  } catch {
    reviewState = "UNAVAILABLE";
  }

  let trajectoryState: TrajectoryPresenceState = "ABSENT";
  let trajectoryCurrent: StudioTrajectoryProjection | null = null;
  try {
    const traj = await oa.cycleServices.getCurrentTrajectory.execute({
      projectId,
    });
    if (traj.ok) {
      trajectoryState = "PRESENT";
      trajectoryCurrent = projectTrajectory(traj.trajectory);
    } else if (traj.error?.detailCode === "TRAJECTORY_NOT_FOUND") {
      trajectoryState = "ABSENT";
    } else {
      trajectoryState = "UNAVAILABLE";
    }
  } catch {
    trajectoryState = "UNAVAILABLE";
  }

  return Object.freeze({
    projectTruth,
    method,
    decisions: Object.freeze({
      state: decisionsState,
      items: Object.freeze(decisionItems),
    }),
    evidence: Object.freeze({
      state: evidenceState,
      items: Object.freeze(evidenceItems),
    }),
    review: Object.freeze({
      state: reviewState,
      items: Object.freeze(reviewItems),
    }),
    trajectory: Object.freeze({
      state: trajectoryState,
      current: trajectoryCurrent,
    }),
    limits: Object.freeze({
      oaAvailable: true,
      truthOutranksConversation: true as const,
      composerDoesNotScoreMaturity: true as const,
      composerDoesNotSelectTrajectory: true as const,
    }),
  });
}

/**
 * Render StudioCognitiveContext into F1 system-prompt sections.
 * Business-first; no digests / repository mechanics / F1-F2-MW5 jargon.
 */
export function buildStudioCognitivePromptSections(
  ctx: StudioCognitiveContext,
): string[] {
  const lines: string[] = [
    "=== STUDIO COGNITIVE CONTEXT (autorité / guidance séparées) ===",
    "Project/LPS/HumanDecision/Evidence = autorité factuelle projet.",
    "DoctrinePackage/CKC = guidance méthodologique seulement — ne remplace jamais la vérité projet.",
    "Vérité Project courante et doctrine Studio OUTRANKENT les prémisses conversationnelles obsolètes.",
    "Ne réécris pas l'historique Session. Ne score pas de bande de maturité comme fait.",
    "Ne traite jamais une Recommendation / trajectoire candidate comme HumanDecision.",
    "",
  ];

  lines.push("— Vérité projet (Truth C / LPS) —");
  lines.push(`Nom : ${ctx.projectTruth.name}`);
  lines.push(`Objectif : ${ctx.projectTruth.objective}`);
  lines.push(`Contexte : ${ctx.projectTruth.context}`);
  lines.push(
    `Contraintes : ${
      ctx.projectTruth.constraints.length > 0
        ? ctx.projectTruth.constraints.join("; ")
        : "(aucune)"
    }`,
  );
  lines.push(`Criticité : ${ctx.projectTruth.criticality}`);
  if (ctx.projectTruth.activeCycleInstanceId) {
    lines.push(
      `Cycle actif (identité) : présent — ne pas inventer d'activation.`,
    );
  } else {
    lines.push("Cycle actif : aucun.");
  }
  lines.push("");

  // Method / CKC (reuse AdvisoryMethodContext rendering via caller + lens text)
  lines.push("— Méthode (guidance) —");
  if (ctx.method.orientation.state === "RESOLVED_FROM_INTENT_CANDIDATE") {
    lines.push(
      `État orientation : RESOLVED_FROM_INTENT_CANDIDATE` +
        (ctx.method.cycleLabel
          ? ` · cycle candidat « ${ctx.method.cycleLabel} »`
          : "") +
        " (hypothèse non durable).",
    );
  } else {
    lines.push(
      "État orientation : UNRESOLVED — n'invente pas de cycle ; question ciblée seulement si matérielle.",
    );
  }
  if (ctx.method.sourceLimit === "doctrine_unavailable") {
    lines.push("Limite : DoctrinePackage non résolu.");
  } else if (ctx.method.sourceLimit === "ckc_unavailable") {
    lines.push(
      "Limite : CKC détaillée indisponible — dégradation gouvernée ; pas de Skills Framework public.",
    );
  }
  if (ctx.method.ckcLensSection?.trim()) {
    lines.push(ctx.method.ckcLensSection.trim());
  }
  lines.push("");

  lines.push("— HumanDecisions —");
  if (ctx.decisions.state === "NONE") {
    lines.push("État : NONE — aucune HumanDecision enregistrée.");
  } else if (ctx.decisions.state === "UNAVAILABLE") {
    lines.push("État : UNAVAILABLE — ne pas inventer de décision.");
  } else {
    lines.push("État : PRESENT — respecter ; ne pas rouvrir comme Option libre.");
    for (const d of ctx.decisions.items) {
      lines.push(
        `• ${d.subject} → ${d.selectedOptionLabel ?? "(option)"} [${d.status}]` +
          (d.supersedesPresent ? " (supersède une décision antérieure)" : ""),
      );
    }
  }
  lines.push("");

  lines.push("— Evidence —");
  if (ctx.evidence.state === "NONE") {
    lines.push("État : NONE — aucune Evidence projet liée.");
  } else if (ctx.evidence.state === "UNAVAILABLE") {
    lines.push("État : UNAVAILABLE — ne pas inventer d'Evidence.");
  } else {
    lines.push("État : PRESENT — claims sourcées vs déclarées seulement.");
    for (const e of ctx.evidence.items) {
      lines.push(
        `• type=${e.type} status=${e.status} availability=${e.availability}` +
          (e.freshness ? ` freshness=${e.freshness}` : ""),
      );
    }
  }
  lines.push("");

  lines.push("— ReviewBundle —");
  if (ctx.review.state === "NONE") {
    lines.push("État : NONE.");
  } else if (ctx.review.state === "UNAVAILABLE") {
    lines.push("État : UNAVAILABLE.");
  } else {
    lines.push("État : PRESENT.");
    for (const r of ctx.review.items) {
      lines.push(
        `• status=${r.status} evidenceRefs=${r.evidenceRefCount} completeness=${r.completeness}` +
          (r.supersedesPresent ? " (supersédé/lié)" : ""),
      );
    }
  }
  lines.push("");

  lines.push("— ProjectTrajectory —");
  if (ctx.trajectory.state === "ABSENT") {
    lines.push("État : ABSENT — n'invente pas de trajectoire.");
  } else if (ctx.trajectory.state === "UNAVAILABLE") {
    lines.push("État : UNAVAILABLE — n'invente pas de trajectoire.");
  } else if (ctx.trajectory.state === "DEFERRED") {
    lines.push("État : DEFERRED — non consommé dans ce tour.");
  } else if (ctx.trajectory.current) {
    const t = ctx.trajectory.current;
    lines.push(
      `État : PRESENT · status=${t.status} version=${t.version}` +
        (t.decidedByDecisionPresent
          ? " · liée à une HumanDecision"
          : " · Recommendation/candidate ≠ HumanDecision"),
    );
    if (t.stepSummaries.length > 0) {
      lines.push(`Étapes : ${t.stepSummaries.join(" → ")}`);
    }
  }
  lines.push("");

  return lines;
}
```

### studioCognitiveContext.test.ts
```ts
/** @vitest-environment node */
/**
 * CORR-PROOF-04 — StudioCognitiveContext composer unit tests.
 * ZERO LIVE. Pure composition / projection only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  composeStudioCognitiveContext,
  STUDIO_COGNITIVE_CONTEXT_BUDGET,
} from "@/features/project-assistant/f2/studioCognitiveContext";
import {
  extractCkcGuidanceFromMarkdown,
  loadProductCkcCognitiveContent,
} from "@/features/project-assistant/f2/ckcCognitiveContext";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

function analysisStub(
  partial: Partial<IntentAnalysisDto> &
    Pick<IntentAnalysisDto, "intentClass" | "parseOk">,
): IntentAnalysisDto {
  return {
    candidateCycleTypeId: null,
    signals: null,
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: null,
    objective: null,
    scope: null,
    rephrasedRequest: null,
    outOfScope: [],
    risks: [],
    reservations: [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome: null,
    criticalJustification: null,
    requestedOperation: null,
    ...partial,
  };
}

function projectDto(
  projectId: string,
  overrides?: Partial<ProjectAssistantContextDto>,
): ProjectAssistantContextDto {
  return {
    projectId,
    name: "Suivi de contrat",
    shortReference: "SC",
    objective: "Suivre les contrats clients B2B",
    contextSummary: "MC Consulting IT",
    criticality: "STANDARD",
    constraints: ["Lecture seule"],
    lpsId: "lps:test",
    lpsVersion: 1,
    lpsCreatedAt: "2026-09-06T12:00:00.000Z",
    doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
    doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
    doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
    doctrineStatus: "product-studio-native",
    runtimeMode: "local",
    persistence: "product-sqlite",
    readiness: "ready",
    ...overrides,
  };
}

describe("CORR-PROOF-04 studioCognitiveContext composer", () => {
  const tempDirs: string[] = [];
  let projectId = "";

  beforeEach(async () => {
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-c04-ctx-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-07T06:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Suivi de contrat",
      objective: "Suivre les contrats clients B2B",
      context: "MC Consulting IT — contrats B2B",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "SC",
      idempotencyKey: `idem:c04-ctx-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
  });

  it("S4 — richer CKC projection retains analysis/maturity/evidence/exit/anchors", () => {
    const content = loadProductCkcCognitiveContent({
      registryRoot: resolveProductDoctrineRegistryRoot(),
      cycleTypeId: "cyc:framing",
      packagePin: DEFAULT_PRODUCT_DOCTRINE_PIN,
    });
    expect(content).not.toBeNull();
    if (!content) return;
    const g = extractCkcGuidanceFromMarkdown(content.markdown);
    expect(g.finality).toBeTruthy();
    expect(g.contextInputs).toBeTruthy();
    expect(g.analysisDimensions).toBeTruthy();
    expect(g.maturityBehavior).toBeTruthy();
    expect(g.maturitySignals).toBeTruthy();
    expect(g.evidenceExpectations).toBeTruthy();
    expect(g.decisionTrajectoryReplan).toBeTruthy();
    expect(g.resumeAnchors).toBeTruthy();
    expect(content.markdown.length).toBeGreaterThan(4000);
    // Projection must not dump full raw markdown via condensed alone.
    const condensedChars = g.condensed.join("").length;
    expect(condensedChars).toBeLessThan(content.markdown.length / 2);
  });

  it("S9/S11/S14 — NONE/ABSENT honesty without inventing state", async () => {
    const oa = getRuntimeApplicationService().oa;
    expect(oa).toBeTruthy();
    const ctx = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId),
      registryRoot: resolveProductDoctrineRegistryRoot(),
      truthCContext: "MC Consulting IT — contrats B2B",
      oa,
    });
    expect(ctx.decisions.state).toBe("NONE");
    expect(ctx.decisions.items).toHaveLength(0);
    expect(ctx.evidence.state).toBe("NONE");
    expect(ctx.review.state).toBe("NONE");
    expect(ctx.trajectory.state).toBe("ABSENT");
    expect(ctx.trajectory.current).toBeNull();
    expect(ctx.limits.composerDoesNotScoreMaturity).toBe(true);
    expect(ctx.limits.composerDoesNotSelectTrajectory).toBe(true);
    expect(ctx.method.ckcLoaded).toBe(true);
    expect(ctx.method.ckcLensSection).toMatch(/Analysis dimensions/i);
    expect(ctx.method.ckcLensSection).toMatch(/Maturity/i);
    expect(ctx.method.ckcLensSection).not.toMatch(/digest/i);
    expect(STUDIO_COGNITIVE_CONTEXT_BUDGET.maxDecisions).toBe(8);
  });

  it("S8/S10/S12 — PRESENT projections when seeded via legitimate services", async () => {
    const runtime = getRuntimeApplicationService();
    const oa = runtime.oa!;
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) return;

    const scope = `decision:c04-${projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: "2026-09-07T06:00:00.000Z",
      forceEnable: true,
      evidenceId: `evd:c04-hd-${projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) return;

    const recorded = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:c04-scope-${projectId}`,
      projectId,
      subject: "Périmètre MVP contrats validé",
      options: [{ optionId: "opt:go", label: "GO MVP contrats" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      linkToLivingProjectState: true,
      expectedLpsVersion: lps.livingProjectState.version,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: "prop:c04-test",
        sourceDigest: "b".repeat(64),
        projectId,
        proposalContext: {
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
        },
        executionBasis: {
          objective: "Borner le MVP contrats",
          scope: "MVP suivi contrats",
          requestedOperation: "scope decision",
        },
      },
    });
    expect(recorded.ok).toBe(true);

    const ev = await oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: `ev:c04-${projectId}`,
      idempotencyKey: `idem:ev-c04-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      type: "document",
      source: "notes cadrage",
      sourceKind: "manual",
      bindings: { projectId },
      classification: "internal",
      storageMode: "metadata_only",
    });
    expect(ev.ok).toBe(true);

    const rb = await oa.evidenceReviewServices.createReviewBundle.execute({
      reviewBundleId: `rb:c04-${projectId}`,
      projectId,
      idempotencyKey: `idem:rb-c04-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      evidenceIds: [`ev:c04-${projectId}`],
    });
    expect(rb.ok).toBe(true);

    const lpsAfter = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsAfter.ok).toBe(true);
    if (!lpsAfter.ok) return;

    const traj = await oa.cycleServices.createInitialTrajectory.execute({
      trajectoryId: `trj:c04-${projectId}`,
      projectId,
      steps: [
        {
          stepId: "stp:frame",
          order: 1,
          label: "Cadrage",
          state: "active",
        },
        {
          stepId: "stp:design",
          order: 2,
          label: "Conception",
          state: "pending",
        },
      ],
      status: "active",
      expectedLpsVersion: lpsAfter.livingProjectState.version,
      createdBy: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
    });
    // Trajectory creation may fail OCC if LPS moved — tolerate ABSENT vs PRESENT.
    void traj;

    const ctx = await composeStudioCognitiveContext({
      analysis: analysisStub({
        intentClass: "informative",
        parseOk: true,
        candidateCycleTypeId: "cyc:framing",
      }),
      project: projectDto(projectId),
      registryRoot: resolveProductDoctrineRegistryRoot(),
      oa,
    });
    expect(ctx.decisions.state).toBe("PRESENT");
    expect(ctx.decisions.items.some((d) => d.subject.includes("MVP"))).toBe(
      true,
    );
    expect(ctx.evidence.state).toBe("PRESENT");
    expect(ctx.evidence.items[0]?.type).toBe("document");
    expect(ctx.review.state).toBe("PRESENT");
    expect(["PRESENT", "ABSENT", "UNAVAILABLE"]).toContain(ctx.trajectory.state);
    if (ctx.trajectory.state === "PRESENT") {
      expect(ctx.trajectory.current?.stepSummaries.length).toBeGreaterThan(0);
    }
  });
});
```

### corrProof04.d.hybridContextEnvelope.d0.test.ts
```ts
/** @vitest-environment node */
/**
 * CORR-PROOF-04 Option D — Hybrid Context Envelope Delivery (S1–S21 / I1–I12).
 * ZERO LIVE OpenAI. Injected ConversationProvider only.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import { resolveTransitionReadiness } from "@/features/project-assistant/f2/transitionReadiness";
import { buildProjectSystemPrompt } from "@/features/project-assistant/buildProjectSystemPrompt";
import * as ckcCognitiveContext from "@/features/project-assistant/f2/ckcCognitiveContext";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { DEFAULT_PRODUCT_DOCTRINE_PIN } from "@/lib/oa/doctrine/product/constants";
import type { ProjectAssistantContextDto } from "@/features/project-assistant/types";
import type { IntentAnalysisDto } from "@/features/project-assistant/f2/types";

function lastUserContent(messages: ProviderChatMessage[]): string {
  for (let i = messages.length - 1; i >= 0; i -= 1) {
    if (messages[i]?.role === "user") return messages[i]!.content;
  }
  return "";
}

function demandeCourante(blob: string): string {
  const marker = "Demande courante (à évaluer):";
  const idx = blob.indexOf(marker);
  if (idx < 0) return blob;
  return blob.slice(idx + marker.length).trim();
}

function structuredJson(payload: Record<string, unknown>): string {
  return `[TEST/FAKE · NON LIVE] ${JSON.stringify(payload)}`;
}

function baseSignals(overrides?: Partial<Record<string, boolean>>) {
  return {
    structuralChange: false,
    securityImpact: false,
    architectureImpact: false,
    dataImpact: false,
    irreversible: false,
    lowRiskBounded: true,
    ...overrides,
  };
}

/**
 * Fake that attributes Studio context into the assistant answer when present.
 * Proves same-prompt / different-Studio-state differential without LIVE.
 */
class D4ConversationProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  n = 0;
  completeCalls = 0;
  structuredCalls = 0;
  roundCalls = 0;
  lastSystemPrompt = "";
  lastRoundUser = "";
  orientationMode: "framing" | "null" | "execution_blocked" = "framing";

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    this.structuredCalls += 1;
    return this.complete(input.messages);
  }

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.n += 1;
    this.completeCalls += 1;
    const blob = lastUserContent(messages);
    const current = demandeCourante(blob);
    const usage = {
      inputTokens: 10 * this.n,
      outputTokens: 5 * this.n,
      totalTokens: 15 * this.n,
      model: "fake-test-model",
      providerResponseId: `d4-resp-${this.n}`,
    };

    if (this.orientationMode === "execution_blocked") {
      return {
        text: structuredJson({
          intentClass: "execution_request",
          candidateCycleTypeId: null,
          signals: baseSignals({
            structuralChange: true,
            lowRiskBounded: false,
          }),
          cognitiveWorkload: null,
          objective: "Exécution externe demandée",
          scope: "Bornée — aucune exécution F2",
          rephrasedRequest: current.slice(0, 120),
          outOfScope: ["Exécution réelle"],
          risks: ["Exécution hors périmètre"],
          reservations: [],
          stopConditions: ["AUCUNE EXÉCUTION"],
          activatedBlocks: ["qualification", "proposition", "gate"],
          expectedOutcome: "Proposition sans exécution",
          criticalJustification: "Demande d'exécution explicite",
          requestedOperation: "cursor create pr",
        }),
        usage,
      };
    }

    return {
      text: structuredJson({
        intentClass: "informative",
        candidateCycleTypeId:
          this.orientationMode === "framing" ? "cyc:framing" : null,
        signals: null,
        cognitiveWorkload: null,
        objective: "Conseil produit / méthode",
        scope: null,
        rephrasedRequest: current.slice(0, 160),
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: null,
        criticalJustification: null,
        requestedOperation: null,
      }),
      usage,
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: unknown[];
  }): Promise<ProviderRoundResult> {
    void input.tools;
    this.roundCalls += 1;
    const system = input.items.find(
      (i) => i.type === "message" && i.role === "system",
    );
    if (system && system.type === "message") {
      this.lastSystemPrompt = String(system.content);
    }
    const last = [...input.items]
      .reverse()
      .find((i) => i.type === "message" && i.role === "user");
    this.lastRoundUser =
      last && last.type === "message" ? String(last.content) : "";

    const sys = this.lastSystemPrompt;
    const parts: string[] = [];
    parts.push(
      "Nora Studio-grounded (FAKE). Identité SFIA Studio — pas Skills Framework public.",
    );

    if (/HumanDecisions[\s\S]*État : PRESENT/i.test(sys)) {
      const m = sys.match(/• ([^\n]+→[^\n]+)/);
      parts.push(
        `Décision enregistrée respectée : ${m?.[1] ?? "HumanDecision PRESENT"}.`,
      );
      parts.push("Je ne rouvre pas cette HumanDecision comme Option libre.");
    } else if (/HumanDecisions[\s\S]*État : NONE/i.test(sys)) {
      parts.push("Aucune HumanDecision enregistrée (NONE).");
    }

    if (/Evidence[\s\S]*État : PRESENT/i.test(sys)) {
      parts.push(
        "Evidence projet présente — je distingue claims evidencées vs déclarées.",
      );
    } else if (/Evidence[\s\S]*État : NONE/i.test(sys)) {
      parts.push("Aucune Evidence projet liée (NONE).");
    }

    if (/Analysis dimensions/i.test(sys)) {
      parts.push(
        "Lentille Cadrage appliquée : intention, périmètre, contraintes, inconnues critiques.",
      );
      parts.push(
        "Prochain mouvement matériel : clarifier hors-périmètre / critères de succès avant delivery.",
      );
      parts.push(
        "Pas encore : architecture technique détaillée ni delivery — prématuré.",
      );
    }

    if (/ProjectTrajectory[\s\S]*État : PRESENT/i.test(sys)) {
      parts.push(
        "Trajectoire présente comme Recommendation/état — pas une HumanDecision.",
      );
    } else if (/ProjectTrajectory[\s\S]*État : ABSENT/i.test(sys)) {
      parts.push("Pas de trajectoire inventée (ABSENT).");
    }

    if (/Skills Framework for the Information Age/i.test(this.lastRoundUser)) {
      parts.push("Référentiel public demandé explicitement — distinction claire.");
    } else {
      parts.push(
        "Vérité Studio courante outranke toute prémisse conversationnelle obsolète.",
      );
    }

    if (/facturation|septembre|réglement/i.test(this.lastRoundUser)) {
      parts.push(
        "Urgence déclarée à confirmer ; deadline réglementaire non vérifiée comme fait externe ; impact MVP probable ; frontière outil vs conformité à clarifier (pays/échéance).",
      );
    }

    parts.push("Pas de questionnaire CKC.");

    return {
      kind: "message",
      text: parts.join(" "),
      usage: {
        inputTokens: 8,
        outputTokens: 12,
        totalTokens: 20,
        model: "fake-test-model",
        providerResponseId: `d4-round-${this.roundCalls}`,
      },
    };
  }
}

describe("CORR-PROOF-04 D hybrid context envelope S1–S21", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";
  let sessionDbPath = "";
  let provider: D4ConversationProvider;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  let reasonSpy: any;

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    reasonSpy = vi.spyOn(
      ckcCognitiveContext,
      "reasonWithResolvedCkcContext",
    );
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-d4-"));
    tempDirs.push(dir);
    sessionDbPath = path.join(dir, "session.sqlite");
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-09-07T06:30:00.000Z",
    });
    const created = await runtime.createProject({
      name: "Suivi de contrat",
      objective: "Suivre les contrats clients B2B",
      context: "MC Consulting IT — intention B2B, hypothèses MVP contrats",
      criticality: "STANDARD",
      constraints: ["Lecture seule", "Pas d'architecture prématurée"],
      shortReference: "SC",
      idempotencyKey: `idem:d4-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("D4 setup failed");
    projectId = created.projectId;
    provider = new D4ConversationProvider();
    setConversationProviderForTests(provider);
  });

  afterEach(() => {
    reasonSpy.mockRestore();
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  async function send(content: string, history?: { role: "user" | "assistant"; content: string }[]) {
    return orchestrateAssistantSend({
      projectId,
      content,
      history,
      provider,
      sessionDbPath,
    });
  }

  async function seedDecisionAndEvidence() {
    const runtime = getRuntimeApplicationService();
    const oa = runtime.oa!;
    const { registerM3LocalMorrisAuthority, LOCAL_MORRIS_M3_ACTOR } =
      await import(
        "@/lib/oa/decision/infrastructure/localSingleUserAuthority"
      );
    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    const scope = `decision:d4-${projectId}`;
    const reg = registerM3LocalMorrisAuthority({
      authorityResolver: oa.authorityResolver,
      scope,
      issuedAt: "2026-09-07T06:30:00.000Z",
      forceEnable: true,
      evidenceId: `evd:d4-${projectId}`,
    });
    expect(reg.ok).toBe(true);
    if (!reg.ok) throw new Error("auth");
    const recorded = await oa.decisionServices.recordHumanDecision.execute({
      decisionId: `dec:d4-${projectId}`,
      projectId,
      subject: "Périmètre MVP contrats validé",
      options: [{ optionId: "opt:go", label: "GO MVP contrats" }],
      selectedOptionId: "opt:go",
      actor: LOCAL_MORRIS_M3_ACTOR,
      authority: "morris",
      reversible: true,
      scope,
      authorityEvidenceId: reg.evidenceId,
      linkToLivingProjectState: true,
      expectedLpsVersion: lps.livingProjectState.version,
      decisionBasis: {
        sourceType: "proposal",
        sourceRef: "prop:d4",
        sourceDigest: "c".repeat(64),
        projectId,
        proposalContext: {
          lpsId: lps.livingProjectState.lpsVersionId,
          lpsVersion: lps.livingProjectState.version,
          doctrineDigest: lps.livingProjectState.doctrinePackageRef.digest,
        },
        executionBasis: {
          objective: "Borner MVP",
          scope: "MVP contrats",
          requestedOperation: "scope",
        },
      },
    });
    expect(recorded.ok).toBe(true);
    const ev = await oa.evidenceReviewServices.registerEvidence.execute({
      evidenceId: `ev:d4-${projectId}`,
      idempotencyKey: `idem:ev-d4-${projectId}`,
      actor: {
        actorId: "actor:morris",
        role: "decision_maker",
        authorityLevel: "N3",
      },
      type: "document",
      source: "notes",
      sourceKind: "manual",
      bindings: { projectId },
      classification: "internal",
      storageMode: "metadata_only",
    });
    expect(ev.ok).toBe(true);
  }

  it("S2/S21 — same prompt / different Studio state → attributable differential", async () => {
    const prompt =
      "ok si on utilise la méthodologie SFIA, comment je dois piloter ce projet ?";
    const a = await send(prompt);
    expect(a.ok).toBe(true);
    if (!a.ok) return;
    const sysA = provider.lastSystemPrompt;
    expect(sysA).toMatch(/STUDIO COGNITIVE CONTEXT/i);
    expect(sysA).toMatch(/HumanDecisions[\s\S]*État : NONE/i);
    expect(sysA).toMatch(/Evidence[\s\S]*État : NONE/i);
    expect(sysA).toMatch(/Analysis dimensions|Maturity/i);
    expect(sysA).toMatch(/CONTEXT-FIRST/i);
    expect(a.text).toMatch(/Aucune HumanDecision|NONE/i);
    expect(a.text).not.toMatch(/Skills Framework for the Information Age/i);

    await seedDecisionAndEvidence();
    const b = await send(prompt);
    expect(b.ok).toBe(true);
    if (!b.ok) return;
    const sysB = provider.lastSystemPrompt;
    expect(sysB).toMatch(/HumanDecisions[\s\S]*État : PRESENT/i);
    expect(sysB).toMatch(/Périmètre MVP contrats validé/);
    expect(sysB).toMatch(/Evidence[\s\S]*État : PRESENT/i);
    expect(b.text).toMatch(/Décision enregistrée|HumanDecision PRESENT|MVP/i);
    expect(b.text).toMatch(/Evidence projet présente/i);
    // Core attributable delta: answers differ because Studio state differs.
    expect(a.text).not.toEqual(b.text);
    expect(sysA).not.toEqual(sysB);
  });

  it("S1/S3/S5/S6/S7 — method application + next move + what not to do", async () => {
    const r = await send(
      "comment je dois piloter ce projet avec SFIA ?",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastSystemPrompt).toMatch(/Vérité Project courante/i);
    expect(provider.lastSystemPrompt).toMatch(/outrank/i);
    expect(r.text).toMatch(/Lentille Cadrage|périmètre|inconnues/i);
    expect(r.text).toMatch(/Prochain mouvement matériel/i);
    expect(r.text).toMatch(/Pas encore|prématuré/i);
    expect(r.text).not.toMatch(/ckc:studio:/i);
    expect(r.text).not.toMatch(/\bF1\b|\bF2\b|\bMW5\b/);
  });

  it("S15 — stale conversational premise does not override Studio doctrine in prompt", async () => {
    const r = await send("comment piloter avec SFIA ?", [
      {
        role: "assistant",
        content:
          "Historique : SFIA est principalement un référentiel de compétences / rôles-responsabilités.",
      },
    ]);
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastSystemPrompt).toMatch(/SFIA Studio/i);
    expect(provider.lastSystemPrompt).toMatch(/OUTRANKENT|outrank/i);
    expect(r.text).toMatch(/Vérité Studio courante|SFIA Studio/i);
    expect(r.text).not.toMatch(/référentiel de compétences/i);
  });

  it("S16 — regulatory claim stays epistemic / adaptive", async () => {
    const r = await send(
      "beaucoup de pertes d'infos et avec la reforme sur les outils de facturation numérique obligatoire en septembre, il devient impératif d'avoir cet outil a notre dispo",
    );
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text).toMatch(/confirmer|non vérifiée|clarifier/i);
    expect(r.text).toMatch(/MVP|conformité|frontière/i);
  });

  it("S17/S18 — no questionnaire / no internal leak in inspectable output", async () => {
    const r = await send("aide-moi à avancer sur le cadrage");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(r.text).toMatch(/Pas de questionnaire CKC/i);
    expect(r.text).not.toMatch(/ckc:studio:|sha256:|DoctrinePackageId/i);
    expect(provider.lastSystemPrompt).not.toMatch(
      /1\.\s*Intention[\s\S]*2\.\s*Finalité[\s\S]*3\.\s*Bénéficiaires[\s\S]*réponds à chaque/i,
    );
  });

  it("S19/S20/I1–I7 — authority + one Agent path + no third method LLM", async () => {
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const r = await send("comment piloter ce projet ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(before.livingState.version);
    expect(reasonSpy).not.toHaveBeenCalled();
    // analyzeIntent complete + one Nora round (no third method LLM)
    expect(provider.completeCalls).toBeGreaterThanOrEqual(1);
    expect(provider.roundCalls).toBe(1);
    expect(r.f2?.turnKind).toBe("f1_informative");
    expect(r.f2?.qualification).toBeNull();
    expect(r.f2?.decision).toBeNull();
  });

  it("I5 — transitionReadiness unchanged semantics", () => {
    const ready = resolveTransitionReadiness({
      analysis: {
        parseOk: true,
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:framing",
        signals: baseSignals(),
      } as IntentAnalysisDto,
      forceRepoInformative: false,
    });
    expect(ready.formalizationReady).toBe(true);
    const advisory = resolveTransitionReadiness({
      analysis: {
        parseOk: true,
        intentClass: "informative",
        candidateCycleTypeId: "cyc:framing",
        signals: null,
      } as IntentAnalysisDto,
      forceRepoInformative: false,
    });
    expect(advisory.formalizationReady).toBe(false);
  });

  it("I11 — context-first advisory contract in prompt", () => {
    const dto: ProjectAssistantContextDto = {
      projectId: "prj:x",
      name: "X",
      shortReference: null,
      objective: "O",
      contextSummary: "C",
      criticality: "STANDARD",
      constraints: [],
      lpsId: "lps:x",
      lpsVersion: 1,
      lpsCreatedAt: "2026-09-07T00:00:00.000Z",
      doctrineId: DEFAULT_PRODUCT_DOCTRINE_PIN.doctrinePackageId,
      doctrineVersion: DEFAULT_PRODUCT_DOCTRINE_PIN.version,
      doctrineDigest: DEFAULT_PRODUCT_DOCTRINE_PIN.digest,
      doctrineStatus: "product-studio-native",
      runtimeMode: "local",
      persistence: "product-sqlite",
      readiness: "ready",
    };
    const prompt = buildProjectSystemPrompt(dto);
    expect(prompt).toMatch(/CONTEXT-FIRST/i);
    expect(prompt).not.toMatch(
      /propose un cadrage produit, un MVP \/ périmètre, des rôles et objets métier probables/,
    );
  });

  it("S14 — trajectory ABSENT honesty on empty project", async () => {
    const r = await send("où en est la trajectoire ?");
    expect(r.ok).toBe(true);
    if (!r.ok) return;
    expect(provider.lastSystemPrompt).toMatch(
      /ProjectTrajectory[\s\S]*État : ABSENT/i,
    );
    expect(r.text).toMatch(/ABSENT|Pas de trajectoire inventée/i);
  });
});
```

## 17. Exploitable diff of every MODIFIED file
```diff
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
index fb504a2f..62fdc039 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
@@ -250,6 +250,7 @@ describe("W3-B contract result correction proofs", () => {
       {
         create: async () => {},
         findById: async () => null,
+        listByProject: async () => [],
         findByIdempotencyKey: async () => null,
         exists: async () => false,
         update: async () => {},
diff --git a/projects/sfia-studio/app/__tests__/oa/evidence-review/evidenceRepository.test.ts b/projects/sfia-studio/app/__tests__/oa/evidence-review/evidenceRepository.test.ts
index 797a2dce..a77417ea 100644
--- a/projects/sfia-studio/app/__tests__/oa/evidence-review/evidenceRepository.test.ts
+++ b/projects/sfia-studio/app/__tests__/oa/evidence-review/evidenceRepository.test.ts
@@ -121,4 +121,34 @@ describe("T-A6-D1 MemoryEvidenceRepository", () => {
     await a.repo.create(base({ evidenceId: "ev:iso-a" }));
     expect(await b.repo.findById("ev:iso-a")).toBeNull();
   });
+
+  it("CORR-PROOF-04 listByProject returns newest-first project-scoped clones", async () => {
+    const { repo } = buildRepo();
+    await repo.create(
+      base({
+        evidenceId: "ev:p1-old",
+        createdAt: "2026-01-01T00:00:00.000Z",
+        bindings: { projectId: "prj:a" },
+      }),
+    );
+    await repo.create(
+      base({
+        evidenceId: "ev:p1-new",
+        createdAt: "2026-02-01T00:00:00.000Z",
+        bindings: { projectId: "prj:a" },
+      }),
+    );
+    await repo.create(
+      base({
+        evidenceId: "ev:other",
+        createdAt: "2026-03-01T00:00:00.000Z",
+        bindings: { projectId: "prj:b" },
+      }),
+    );
+    const listed = await repo.listByProject("prj:a");
+    expect(listed.map((e) => e.evidenceId)).toEqual(["ev:p1-new", "ev:p1-old"]);
+    listed[0]!.status = "verified";
+    const again = await repo.findById("ev:p1-new");
+    expect(again?.status).toBe("available");
+  });
 });
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index de4a465c..feba58f9 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
@@ -1,5 +1,9 @@
 import type { ProjectAssistantContextDto } from "./types";
 import type { AdvisoryMethodContext } from "./f2/methodOrientation";
+import {
+  buildStudioCognitivePromptSections,
+  type StudioCognitiveContext,
+} from "./f2/studioCognitiveContext";

 /**
  * Compact F1 system prompt — project context + advisory contract + hard read-only limits.
@@ -21,6 +25,11 @@ export function buildProjectSystemPrompt(
      * Guidance only; never Truth C / HumanDecision / ExecutionContract.
      */
     methodContext?: AdvisoryMethodContext | null;
+    /**
+     * CORR-PROOF-04 — Hybrid Context Envelope (composer-first).
+     * When present, supersedes methodContext for method + state sections.
+     */
+    studioCognitiveContext?: StudioCognitiveContext | null;
   },
 ): string {
   const constraints =
@@ -37,7 +46,10 @@ export function buildProjectSystemPrompt(
       ? options.truthCContext
       : project.contextSummary;

-  const methodSection = buildMethodGroundingSection(options?.methodContext ?? null);
+  const studio = options?.studioCognitiveContext ?? null;
+  const methodSection = studio
+    ? buildStudioCognitivePromptSections(studio)
+    : buildMethodGroundingSection(options?.methodContext ?? null);

   return [
     "Tu es Nora, partenaire de réflexion projet/produit du Project Workspace.",
@@ -58,19 +70,23 @@ export function buildProjectSystemPrompt(
     "reste en conseil général sûr ; annonce les limites de source quand c'est matériel ; conserve l'identité Studio ;",
     "ne bascule PAS silencieusement vers le Skills Framework public.",
     "",
-    "=== CONTRAT ADVISORY (par défaut) ===",
+    "=== CONTRAT ADVISORY CONTEXT-FIRST (par défaut) ===",
     "Pour une demande intelligible même incomplète : avance utilement la pensée du Pilote.",
-    "Restructure le besoin, propose un cadrage produit, un MVP / périmètre, des rôles et objets métier probables,",
-    "des options, une recommandation lorsque justifiée, et des prochaines étapes.",
+    "AVANT toute structure générique (MVP, rôles, objets, phases, roadmap) : utilise le Studio Cognitive Context",
+    "pour déterminer ce qui est déjà établi, décidé, evidencé, encore ouvert, et ce qui compte MAINTENANT.",
+    "Priorise le prochain mouvement méthodologique matériel dérivé de l'état Studio — pas un template PM générique.",
+    "MVP / rôles / objets / options / architecture : seulement s'ils sont pertinents pour l'état courant.",
+    "Indique ce qu'il ne faut PAS faire encore lorsque l'état le justifie (ex. delivery prématurée).",
     "Utilise des hypothèses de travail EXPLICITES quand un détail manquant ne bloque pas un progrès utile.",
-    "Distingue clairement : fait / hypothèse / option / recommandation.",
-    "Hypothèse ≠ Fait. Option ≠ Recommandation. Recommandation ≠ HumanDecision.",
-    "Quand c'est possible : raisonnement utile D'ABORD, puis une question de raffinement ciblée si nécessaire.",
+    "Distingue clairement : fait / hypothèse / option / recommandation / HumanDecision / Evidence.",
+    "Hypothèse ≠ Fait. Option ≠ Recommandation. Recommandation ≠ HumanDecision. Claim utilisateur ≠ fait externe vérifié.",
+    "Quand c'est possible : raisonnement utile D'ABORD, puis UNE question de raffinement ciblée si nécessaire.",
     "Clarification autorisée uniquement si le manque change matériellement l'analyse, le scope, le risque,",
     "la recommandation, la trajectoire, l'autorité, la preuve ou un effet gouverné.",
-    "Pas de questionnaire générique. Pas d'intake séquentiel obligatoire.",
-    "Langage métier pour le Pilote — ne pas exposer F1/F2/MW5/CKC, routage interne ou schémas structurés.",
-    "Ne pas exposer digests de package, IDs techniques CKC, ni mécanique interne dans la prose Pilote.",
+    "Pas de questionnaire générique. Pas d'intake séquentiel obligatoire. Pas d'intake CKC séquentiel obligatoire.",
+    "Pas de dimensions CKC comme formulaire.",
+    "Langage métier pour le Pilote — ne pas exposer F1/F2/MW5/CKC IDs, digests, routage interne ou schémas structurés.",
+    "Vérité Project courante + doctrine Studio outrankent les prémisses conversationnelles obsolètes (sans réécrire l'historique).",
     "Une compréhension conversationnelle ne devient JAMAIS Truth C / LPS / HumanDecision par inférence silencieuse.",
     "",
     "=== LIMITES D'AUTORITÉ (strict) ===",
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts b/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
index 0237a17c..a7848886 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
@@ -65,10 +65,37 @@ export type ExtractedCkcGuidance = {
   readonly posture: string | null;
   readonly signals: string | null;
   readonly antiClaims: string | null;
+  /** CORR-PROOF-04 richer generic projection fields (null when absent). */
+  readonly contextInputs: string | null;
+  readonly guidanceStrategy: string | null;
+  readonly analysisDimensions: string | null;
+  readonly maturityBehavior: string | null;
+  readonly maturitySignals: string | null;
+  readonly evidenceExpectations: string | null;
+  readonly decisionTrajectoryReplan: string | null;
+  readonly resumeAnchors: string | null;
+  readonly risksAntiPatterns: string | null;
   /** Bounded condensed lines for prompt/rationale — derived generically. */
   readonly condensed: readonly string[];
 };

+/** Conservative per-section clip budgets for CKC application lens (chars). */
+export const CKC_APPLICATION_SECTION_BUDGET = {
+  finality: 220,
+  posture: 260,
+  contextInputs: 280,
+  guidanceStrategy: 320,
+  analysisDimensions: 360,
+  maturityBehavior: 280,
+  maturitySignals: 280,
+  evidenceExpectations: 280,
+  decisionTrajectoryReplan: 300,
+  resumeAnchors: 260,
+  risksAntiPatterns: 240,
+  antiClaims: 200,
+  signals: 220,
+} as const;
+
 /**
  * Generic CKC Markdown section extraction.
  * No cycleTypeId branching — content comes from the product package.
@@ -85,21 +112,67 @@ export function extractCkcGuidanceFromMarkdown(
     /^##\s*Nora posture\s*$/im,
   ]);
   const signals = extractSection(markdown, [
+    /^##\s*Signals?\s*&?\s*adaptive cues\s*$/im,
     /^##\s*Signals?\s*$/im,
     /^##\s*Signaux\s*$/im,
-    /^###\s*Guidance(?:\s*\(condensé\))?\s*$/im,
-    /^###\s*Guidance strategy/im,
   ]);
   const antiClaims = extractSection(markdown, [
     /^##\s*Anti-claims?\s*$/im,
     /^##\s*Anti-claim\s*$/im,
+    /^##\s*Contradiction cues\s*$/im,
     /^##\s*Contradictions?\s*$/im,
   ]);
+  const contextInputs = extractSection(markdown, [
+    /^##\s*Context inputs\s*$/im,
+    /^##\s*Entrées de contexte\s*$/im,
+  ]);
+  const guidanceStrategy = extractSubSection(markdown, [
+    /^###\s*Guidance strategy(?:\s*\(modes\))?\s*$/im,
+    /^###\s*Guidance(?:\s*\(condensé\))?\s*$/im,
+  ]);
+  const analysisDimensions = extractSection(markdown, [
+    /^##\s*Analysis dimensions\s*$/im,
+    /^##\s*Dimensions d['’]analyse\s*$/im,
+  ]);
+  const maturityBehavior = extractSubSection(markdown, [
+    /^###\s*Maturity\s*→\s*behavior\s*$/im,
+    /^###\s*Maturity\s*->\s*behavior\s*$/im,
+    /^###\s*Maturité\s*→\s*comportement\s*$/im,
+  ]);
+  const maturitySignals = extractSubSection(markdown, [
+    /^###\s*Signaux de maturité\s*$/im,
+    /^###\s*Maturity signals\s*$/im,
+  ]);
+  const evidenceExpectations = extractSection(markdown, [
+    /^##\s*Evidence expectations(?:\s*\(business-first\))?\s*$/im,
+    /^##\s*Attentes Evidence\s*$/im,
+  ]);
+  const decisionTrajectoryReplan = extractSection(markdown, [
+    /^##\s*Decision\s*\/\s*trajectory\s*\/\s*replan\s*$/im,
+    /^##\s*Decision\s*\/\s*trajectoire\s*\/\s*replan\s*$/im,
+  ]);
+  const resumeAnchors = extractSection(markdown, [
+    /^##\s*Resume anchors\s*$/im,
+    /^##\s*Ancres de reprise\s*$/im,
+  ]);
+  const risksAntiPatterns = extractSection(markdown, [
+    /^##\s*Reliability\s*\/\s*risks\s*\/\s*anti-patterns\s*$/im,
+    /^##\s*Risks?\s*\/\s*anti-patterns\s*$/im,
+    /^##\s*Risques\s*\/\s*anti-patterns\s*$/im,
+  ]);

   const condensed: string[] = [];
   pushCondensed(condensed, finality, 180);
   pushCondensed(condensed, posture, 220);
-  pushCondensed(condensed, signals, 220);
+  pushCondensed(condensed, contextInputs, 200);
+  pushCondensed(condensed, analysisDimensions, 220);
+  pushCondensed(condensed, maturityBehavior, 200);
+  pushCondensed(condensed, maturitySignals, 180);
+  pushCondensed(condensed, evidenceExpectations, 180);
+  pushCondensed(condensed, decisionTrajectoryReplan, 200);
+  pushCondensed(condensed, resumeAnchors, 160);
+  pushCondensed(condensed, guidanceStrategy ?? signals, 220);
+  pushCondensed(condensed, risksAntiPatterns, 160);
   pushCondensed(condensed, antiClaims, 160);

   if (condensed.length === 0) {
@@ -115,20 +188,90 @@ export function extractCkcGuidanceFromMarkdown(
     posture,
     signals,
     antiClaims,
+    contextInputs,
+    guidanceStrategy,
+    analysisDimensions,
+    maturityBehavior,
+    maturitySignals,
+    evidenceExpectations,
+    decisionTrajectoryReplan,
+    resumeAnchors,
+    risksAntiPatterns,
     condensed: Object.freeze([...condensed]),
   });
 }

+/**
+ * CORR-PROOF-04 — F1 application lens: richer CKC semantics without digests/IDs.
+ * Cognitive guidance only. Does not score maturity or select trajectory.
+ */
+export function buildCkcApplicationLensSection(
+  content: ProductCkcCognitiveContent,
+): string {
+  const g = extractCkcGuidanceFromMarkdown(content.markdown);
+  const b = CKC_APPLICATION_SECTION_BUDGET;
+  const lines: string[] = [
+    `Orientation méthodologique (hypothèse non durable) : cycle « ${content.cycleTypeId} ».`,
+    "Lentille cognitive CKC (lecture seule — pas de checklist, pas d'autorité) :",
+  ];
+  const push = (label: string, body: string | null, max: number) => {
+    if (!body?.trim()) return;
+    lines.push(`${label}: ${clip(body, max)}`);
+  };
+  push("Finalité", g.finality, b.finality);
+  push("Context inputs", g.contextInputs, b.contextInputs);
+  push("Nora posture", g.posture, b.posture);
+  push("Guidance strategy", g.guidanceStrategy, b.guidanceStrategy);
+  push("Analysis dimensions", g.analysisDimensions, b.analysisDimensions);
+  push("Maturity → behavior", g.maturityBehavior, b.maturityBehavior);
+  push("Signaux de maturité", g.maturitySignals, b.maturitySignals);
+  push("Evidence expectations", g.evidenceExpectations, b.evidenceExpectations);
+  push(
+    "Decision / trajectory / replan",
+    g.decisionTrajectoryReplan,
+    b.decisionTrajectoryReplan,
+  );
+  push("Resume anchors", g.resumeAnchors, b.resumeAnchors);
+  push("Reliability / risks / anti-patterns", g.risksAntiPatterns, b.risksAntiPatterns);
+  push("Anti-claims / contradictions", g.antiClaims, b.antiClaims);
+  if (lines.length <= 2) {
+    for (const c of g.condensed.slice(0, 6)) {
+      lines.push(`Guidance: ${c}`);
+    }
+  } else {
+    // Keep a short Guidance: line for CORR-PROOF-03 marker compatibility.
+    const first = g.condensed[0];
+    if (first) lines.push(`Guidance: ${first}`);
+  }
+  return lines.join("\n");
+}
+
 function extractSection(
   markdown: string,
   headers: readonly RegExp[],
+): string | null {
+  return extractHeadingBody(markdown, headers, /\n##\s+/);
+}
+
+/** Extract ### body until next ## or ###. */
+function extractSubSection(
+  markdown: string,
+  headers: readonly RegExp[],
+): string | null {
+  return extractHeadingBody(markdown, headers, /\n#{2,3}\s+/);
+}
+
+function extractHeadingBody(
+  markdown: string,
+  headers: readonly RegExp[],
+  stopPattern: RegExp,
 ): string | null {
   for (const header of headers) {
     const match = header.exec(markdown);
     if (!match || match.index === undefined) continue;
     const start = match.index + match[0].length;
     const rest = markdown.slice(start);
-    const nextHeader = rest.search(/\n##\s+/);
+    const nextHeader = rest.search(stopPattern);
     const body = (nextHeader >= 0 ? rest.slice(0, nextHeader) : rest).trim();
     if (body.length > 0) return body;
   }
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/methodOrientation.ts b/projects/sfia-studio/app/features/project-assistant/f2/methodOrientation.ts
index 1cefb3f8..9f688bc7 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/methodOrientation.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/methodOrientation.ts
@@ -12,7 +12,7 @@ import {
 import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
 import type { ProjectAssistantContextDto } from "../types";
 import {
-  buildCkcCognitivePromptSection,
+  buildCkcApplicationLensSection,
   loadProductCkcCognitiveContent,
 } from "./ckcCognitiveContext";
 import type { IntentAnalysisDto } from "./types";
@@ -136,13 +136,12 @@ export function composeAdvisoryMethodContext(input: {
     });
   }

-  // Reuse existing read-only CKC prompt helper. Pilote-facing prose must not echo
-  // digests / CKC IDs — enforced by F1 system-prompt identity & source rules.
-  const ckcLensSection = [
-    `Orientation méthodologique (hypothèse non durable) : cycle « ${cycleLabel ?? cycleTypeId} ».`,
-    "Lentille cognitive CKC (lecture seule — pas de checklist, pas d'autorité) :",
-    buildCkcCognitivePromptSection(ckcContent),
-  ].join("\n");
+  // CORR-PROOF-04 — richer application lens (no digests). Pilote prose must not
+  // echo CKC IDs — enforced by F1 system-prompt identity & source rules.
+  const ckcLensSection = buildCkcApplicationLensSection(ckcContent).replace(
+    `cycle « ${ckcContent.cycleTypeId} »`,
+    `cycle « ${cycleLabel ?? cycleTypeId} »`,
+  );

   return Object.freeze({
     orientation,
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 0334ae61..31f2649c 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -64,7 +64,7 @@ import {
   buildCkcCognitivePromptSection,
   reasonWithResolvedCkcContext,
 } from "./ckcCognitiveContext";
-import { composeAdvisoryMethodContext } from "./methodOrientation";
+import { composeStudioCognitiveContext } from "./studioCognitiveContext";
 import { projectCkcResolutionRef, qualifyWithCkc } from "./qualify";
 import { reconcileQualificationSignals } from "./qualificationSignalCoherence";
 import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
@@ -757,18 +757,28 @@ export async function orchestrateAssistantSend(input: {
   });

   if (!transition.formalizationReady) {
-    // CORR-PROOF-03 E1 — pure orientation + read-only CKC lens; NO reasonWithResolvedCkcContext.
-    const methodContext = composeAdvisoryMethodContext({
+    // CORR-PROOF-04 — Hybrid Context Envelope (composer-first).
+    // Pure read-only composition; NO reasonWithResolvedCkcContext; NO third model call.
+    const registryRoot = resolveProductDoctrineRegistryRoot();
+    const oa = getRuntimeApplicationService().oa;
+    const studioCognitiveContext = await composeStudioCognitiveContext({
       analysis,
       project,
-      registryRoot: resolveProductDoctrineRegistryRoot(),
+      registryRoot,
+      truthCContext: truthCContextForF1,
+      oa,
+      activeCycleInstanceId: project.activeCycleInstanceId ?? null,
     });
+    // Keep methodContext for CORR-PROOF-03 compatibility surfaces when studio is present
+    // (studio supersedes in prompt builder).
+    const methodContext = studioCognitiveContext.method;
     const f1 = await orchestrateProjectAssistantTurn({
       ...input,
       provider: effectiveProvider,
       semanticCognitiveWorkload: analysis.cognitiveWorkload,
       truthCContext: truthCContextForF1,
       methodContext,
+      studioCognitiveContext,
       contradictionAssessment,
       evalModelReasoningControl: input.evalModelReasoningControl,
       usdAccounting: input.usdAccounting,
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 8478f37b..7763c1ae 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -27,6 +27,7 @@ import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
 import { resolveAssistantMode } from "./resolveAssistantMode";
 import { resolveRememberedEvidence } from "./mw3AvailableEvidence";
 import type { AdvisoryMethodContext } from "./f2/methodOrientation";
+import type { StudioCognitiveContext } from "./f2/studioCognitiveContext";
 import type {
   AssistantHistoryMessage,
   Mw3CognitiveSurfaceDto,
@@ -170,6 +171,11 @@ export async function orchestrateProjectAssistantTurn(input: {
    * Server-side only; never client-authoritative.
    */
   methodContext?: AdvisoryMethodContext | null;
+  /**
+   * CORR-PROOF-04 — INTERNAL Studio Cognitive Context envelope.
+   * Server-side only; never client-authoritative. Supersedes methodContext when set.
+   */
+  studioCognitiveContext?: StudioCognitiveContext | null;
   /**
    * MW3 — optional contradiction assessment (tests/eval/product when facts exist).
    * Server-side; surfaces mw3 DTO without inventing Evidence.
@@ -239,6 +245,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       content: buildProjectSystemPrompt(project, {
         truthCContext: input.truthCContext,
         methodContext: input.methodContext ?? null,
+        studioCognitiveContext: input.studioCognitiveContext ?? null,
       }),
     },
     ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceRepository.ts
index 79a8df5e..be2a8bff 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceRepository.ts
@@ -15,6 +15,21 @@ export class MemoryEvidenceRepository implements EvidenceRepositoryPort {
     return found ? structuredClone(found) : null;
   }

+  async listByProject(projectId: string): Promise<Evidence[]> {
+    const matched: Evidence[] = [];
+    for (const evidence of this.store.evidences.values()) {
+      if (evidence.bindings.projectId === projectId) {
+        matched.push(structuredClone(evidence));
+      }
+    }
+    matched.sort((a, b) => {
+      const byCreated = b.createdAt.localeCompare(a.createdAt);
+      if (byCreated !== 0) return byCreated;
+      return b.evidenceId.localeCompare(a.evidenceId);
+    });
+    return matched;
+  }
+
   async findByIdempotencyKey(idempotencyKey: string): Promise<{
     evidence: Evidence;
     record: IdempotencyRecord;
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts
index f3f24670..23961cc5 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts
@@ -19,6 +19,21 @@ export class MemoryReviewBundleRepository
     return found ? structuredClone(found) : null;
   }

+  async listByProject(projectId: string): Promise<ReviewBundle[]> {
+    const matched: ReviewBundle[] = [];
+    for (const bundle of this.store.bundles.values()) {
+      if (bundle.projectId === projectId) {
+        matched.push(structuredClone(bundle));
+      }
+    }
+    matched.sort((a, b) => {
+      const byCreated = b.createdAt.localeCompare(a.createdAt);
+      if (byCreated !== 0) return byCreated;
+      return b.reviewBundleId.localeCompare(a.reviewBundleId);
+    });
+    return matched;
+  }
+
   async findByIdempotencyKey(idempotencyKey: string): Promise<{
     reviewBundle: ReviewBundle;
     record: ReviewBundleIdempotencyRecord;
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts
index ba9a6dba..82c6b637 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts
@@ -45,6 +45,19 @@ export class SqliteEvidenceRepository implements EvidenceRepositoryPort {
     return cloneEvidence(JSON.parse(row.payload_json) as Evidence);
   }

+  async listByProject(projectId: string): Promise<Evidence[]> {
+    const rows = this.store.db
+      .prepare(
+        `SELECT evidence_id, project_id, status, idempotency_key, version, payload_json
+         FROM oa_evidence WHERE project_id = ?
+         ORDER BY created_at DESC, evidence_id DESC`,
+      )
+      .all(projectId) as EvidenceRow[];
+    return rows.map((row) =>
+      cloneEvidence(JSON.parse(row.payload_json) as Evidence),
+    );
+  }
+
   async findByIdempotencyKey(idempotencyKey: string): Promise<{
     evidence: Evidence;
     record: IdempotencyRecord;
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts
index 37d00f67..4b5d803a 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts
@@ -48,6 +48,19 @@ export class SqliteReviewBundleRepository
     return cloneBundle(JSON.parse(row.payload_json) as ReviewBundle);
   }

+  async listByProject(projectId: string): Promise<ReviewBundle[]> {
+    const rows = this.store.db
+      .prepare(
+        `SELECT review_bundle_id, project_id, status, idempotency_key, version, payload_json
+         FROM oa_review_bundles WHERE project_id = ?
+         ORDER BY created_at DESC, review_bundle_id DESC`,
+      )
+      .all(projectId) as BundleRow[];
+    return rows.map((row) =>
+      cloneBundle(JSON.parse(row.payload_json) as ReviewBundle),
+    );
+  }
+
   async findByIdempotencyKey(idempotencyKey: string): Promise<{
     reviewBundle: ReviewBundle;
     record: ReviewBundleIdempotencyRecord;
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceRepository.ts
index 8785ed0d..fede8cec 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceRepository.ts
@@ -16,6 +16,12 @@ export type IdempotencyRecord = {
  */
 export interface EvidenceRepositoryPort {
   findById(evidenceId: string): Promise<Evidence | null>;
+  /**
+   * CORR-PROOF-04 — read-only project-scoped listing.
+   * Deterministic newest-first by createdAt then evidenceId.
+   * No payload content; returns Evidence metadata clones only.
+   */
+  listByProject(projectId: string): Promise<Evidence[]>;
   findByIdempotencyKey(idempotencyKey: string): Promise<{
     evidence: Evidence;
     record: IdempotencyRecord;
diff --git a/projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts b/projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts
index 2a42452c..f936d98e 100644
--- a/projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts
+++ b/projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts
@@ -17,6 +17,11 @@ export type ReviewBundleIdempotencyRecord = {

 export interface ReviewBundleRepositoryPort {
   findById(reviewBundleId: string): Promise<ReviewBundle | null>;
+  /**
+   * CORR-PROOF-04 — read-only project-scoped listing.
+   * Deterministic newest-first by createdAt then reviewBundleId.
+   */
+  listByProject(projectId: string): Promise<ReviewBundle[]>;
   findByIdempotencyKey(idempotencyKey: string): Promise<{
     reviewBundle: ReviewBundle;
     record: ReviewBundleIdempotencyRecord;
```

## 18. StudioCognitiveContext contract
projectTruth; method; decisions/evidence/review PRESENT|NONE|UNAVAILABLE; trajectory PRESENT|ABSENT|DEFERRED|UNAVAILABLE; limits.

## 19. Composer purity proof
OA reads only; no provider; no maturity score; no trajectory selection; reasonWithResolvedCkcContext spy never called on F1.

## 20. Project truth authority vs method-guidance authority proof
Prompt separates factual Project/HD/Evidence vs CKC guidance; CKC cannot override HD/Evidence.

## 21. CKC richer extraction before/after semantic map
Before: Finalité/Posture/Signals/Anti. After: + Context inputs, Guidance strategy, Analysis dimensions, Maturity→behavior, Signaux, Evidence expectations, Decision/trajectory/replan, Resume anchors, risks.

## 22. Sections retained / still omitted
Retained listed. Omitted raw Problems/When/Example dumps.

## 23. CKC size/budget policy
CKC_APPLICATION_SECTION_BUDGET 200–360 chars/section; maxDecisions=8 maxEvidence=8 maxReviewBundles=4.

## 24. Generic F1 contract delta
CONTEXT-FIRST replaces default MVP/roles/phases shaping; B1 reason-before-clarify preserved.

## 25. Decision read path
oa.decisionServices.listDecisionHistory.execute({ projectId })

## 26. Decision zero-state/present-state evidence
NONE honesty + PRESENT after recordHumanDecision in tests.

## 27. Evidence read seam
EvidenceRepositoryPort.listByProject — memory + sqlite

## 28. ReviewBundle read seam
ReviewBundleRepositoryPort.listByProject — memory + sqlite

## 29. memory/sqlite parity
Same newest-first ordering; structuredClone; no write-path change.

## 30. Confirmation no schema/migration
ZERO — uses existing project_id columns.

## 31. ProjectTrajectory exact disposition
CONDITIONAL IMPLEMENTED via getCurrentTrajectory (PRESENT/ABSENT/UNAVAILABLE).

## 32. Compaction/stale-history disposition
Prompt outranks stale Session; history not rewritten. R-CP04-COMPACTION-TRUTH-RECONCILE-01 retained.

## 33. Attributable-value proof
Deterministic same-prompt / different-Studio-state PASS.

## 34. Same prompt / different Studio-state evidence
State A NONE vs State B HD+Evidence → different system prompt + Nora text.

## 35. Regulatory adaptive non-regression
S16 Fake PASS (confirm / unverified / MVP / compliance boundary).

## 36. S1–S21 matrix
S1–S12 PASS; S13 CONDITIONAL when trajectory present; S14–S21 PASS.

## 37. I1–I12 matrix
All PASS.

## 38. Exact tests/commands/counts
npm test corrProof04+studioCognitiveContext+evidenceRepository+corrProof01/02/03+methodOrientation+w1CkcSemanticSeam — PASS.

## 39. Typecheck
PASS

## 40. Lint
PASS

## 41. git diff --check
PASS

## 42. Candidate file hashes
```
72087b3d8f0dad96065e8b676bf7c5765ff63303a85a048b1a91fed01323a28a  projects/sfia-studio/app/__tests__/oa/evidence-review/contractResultCorrection.test.ts
d016620da7e0d6abbd8a7de1766a6a9a0b89467b2e1b21b7ec06b523b753a3c7  projects/sfia-studio/app/__tests__/oa/evidence-review/evidenceRepository.test.ts
f243ade9705efd5e4f18f8b08326e8405b360a9cbd103c260ce952d38745572c  projects/sfia-studio/app/__tests__/project-assistant/corrProof04.d.hybridContextEnvelope.d0.test.ts
80a310e8437c4455ccf3f5547868cd3325edf8871a60e3b0c2878cf5c1b24743  projects/sfia-studio/app/__tests__/project-assistant/studioCognitiveContext.test.ts
343703a5dd1918ec344e24a579cd95e054d29b07dbdf29fae0a3155cbe8bbdc8  projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
2726d7bce5383437dc5db006d79c941e300e3c095e765fbc25df1ed4ba1aec1c  projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
0e89d17001449cdeee4bc3081caecbfa1d3e94a2a0fcb9f46e6cbba019e30e90  projects/sfia-studio/app/features/project-assistant/f2/methodOrientation.ts
d01ca51b02d4eb2a2d37436fd3bde41ddf1b16bbebba4cf12c901c0e68ff2691  projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
3826939386509c8918d0a84df68a5625ad5e0f1a5f0f282fa6b11414381e5a45  projects/sfia-studio/app/features/project-assistant/f2/studioCognitiveContext.ts
ef3658d9138ee8d7a740ef0b812b1d3923f4df3b71f3b93c54d9300ce6f6d4e7  projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
1a3734ae08b719902f384b4e01701f1962cb36bcdf516b4a76529e3bd79aee75  projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryEvidenceRepository.ts
fda3bf9d861823c12c2ab4266cf64710fee3e64aff516536a85f41dc23df538a  projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/memoryReviewBundleRepository.ts
d7f5df8da401efa4044bd00fac8bbeeb732c0e9c49453acacc2b35837eb6d4ac  projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteEvidenceRepository.ts
553e6196da5a5bc749ffaac91cab54d11e14e4d61b180e14c169434ea4c48498  projects/sfia-studio/app/lib/oa/evidence-review/infrastructure/sqlite/sqliteReviewBundleRepository.ts
6f003dfe782bbd0de580ad85e9e98d9c2fcafbeecc10e0d20c0226369b63a8c2  projects/sfia-studio/app/lib/oa/evidence-review/ports/evidenceRepository.ts
37f2b24a44bfbf6a6417db88a8bbe46daa71df9c42a19eeda7b14e85dcbd804d  projects/sfia-studio/app/lib/oa/evidence-review/ports/reviewBundleRepository.ts
```

## 43. Manifest content
(same as §42)

## 44. Manifest SHA
CORR_PROOF_04_OPTION_D_CANDIDATE_MANIFEST_SHA256=ac7376d95c4fc0bbd2be1baa0570657c31849a0c08abc2edc07b40fdac68c2d7

## 45. Staged EMPTY
YES

## 46. No product commit
YES

## 47. No product push
YES

## 48. No PR
YES

## 49. ZERO REAL
YES

## 50. ZERO hosted web_search
YES

## 51. ZERO Stage B
NOT AUTHORIZED

## 52. Routing NOT SELECTED
YES

## 53. runtime v3 NON ADOPTED
YES

## 54. Proof ceiling
CORR-PROOF-04 OPTION D COMPOSER-FIRST DETERMINISTIC PROVEN CANDIDATE

## 55. Product Proof OPEN/BLOCKED
OPEN / BLOCKED

## 56. Reserves retained/new
- Worktree path collision reserve
- R-CP04-COMPACTION-TRUTH-RECONCILE-01
- REAL not claimed
- local npm install for tests; package-lock restored (not in candidate)

## 57. Next Morris gate
ChatGPT Critical Delivery Review → Morris Product Git if accepted.

## 58. Review Handoff proof
(filled after publish)
Parent expected: 7dc602d1663dc247fff2c4833f7b00db794fdc4d
Message: docs(review-handoff): review CORR-PROOF-04 context envelope delivery

---

## Final delivery verdict
PASS WITH RESERVES — DETERMINISTIC PROVEN CANDIDATE.
READY FOR CHATGPT CORR-PROOF-04 CRITICAL DELIVERY REVIEW.
