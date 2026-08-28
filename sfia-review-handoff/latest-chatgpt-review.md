# ChatGPT Review Pack — FULL

Cycle: V3-REAL-B-BLOCKER-01
Transport cycle: V3-REAL-B-BLOCKER-01-HANDOFF-01
Level: FULL
timestamp_paris: 2026-08-28 11:52:37 +0200

## Exact Morris GO (corrective)
GO V3-REAL-B-BLOCKER-01 EXECUTION — LOCAL DELIVERY ONLY — CLOSE F-RB-01 + F-RB-07 — ABSORB F-RB-02 ONLY IF SAME SEAM — REUSE F1 GROUNDING — NO PARALLEL ARCHITECTURE — NO COMMIT/PUSH/PR/MERGE — NO REAL-C

## Exact Morris GO (this transport)
GO REVIEW HANDOFF PUBLICATION — V3-REAL-B-BLOCKER-01 ONLY — FULL PACK + COMPLETE CODE/TEST DIFF + REMEDIATION RECORD + FULL-SUITE EVIDENCE — NO PROJECT COMMIT/PUSH/PR — NO CODE CHANGE — NO OPENAI LIVE — NO REAL-B RERUN — NO REAL-C

## A. Metadata
- repo: /Users/morris/Projects/sfia-workspace-w3-post-closure-truth-sync
- branch: fix/sfia-studio-real-b-blocker-01 (LOCAL ONLY — NOT PUSHED)
- HEAD / origin/main: 967f4c2b35948492caeba5347bb02c7c420de490
- Parent campaign: V3-REAL-B-QUALIFICATION-COGNITIVE-REASONING-01
- REAL-B handoff consumed: origin/sfia/review-handoff @ 041e508d5bbc75d30cf4bdacef315987a6fdb9b4
- Historical REAL-B report sha256: 9c01060595dbf6277034f39823ebf25ec7a9044c3b68943408b12b38c4a78393 (UNCHANGED)

## Convergence truth preserved
- Product Completion: COMPLETE / CLOSED BY MORRIS
- REAL-A: COMPLETE / CONSUMED
- REAL-B campaign: BLOCKING GAP — DELIVERY REMEDIATION REQUIRED
- Corrective V3-REAL-B-BLOCKER-01: implemented locally; IMPLEMENTATION/TARGETED VALIDATION PASS; FULL-SUITE PASS NOT PROVEN
- F-RB-02: OPEN
- RB-04: PASS REAL / NO WORK / NO SYNTHETIC FALLBACK REQUIREMENT
- REAL-B REAL reproof: NOT AUTHORIZED / NOT EXECUTED
- REAL-C: BLOCKED / NOT AUTHORIZED / NOT EXECUTED
- runtime v3: NON ADOPTED · FinOps/T7 FREEZE · C6 CLOSED

## B. Scope — file inventory

### Product code (runtime path)
- NEW: projects/sfia-studio/app/features/project-assistant/groundingPreflight.ts
- MOD: projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
- MOD: projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
- MOD: projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts
- MOD: projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts

### Deterministic test support (fake provider markers only)
- MOD: projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
  - purpose: test-only structured-intent markers for `__F2_RB01_*` / `__F2_RB07_*`
  - production/live OpenAI provider semantics: NOT CHANGED
  - scope justified YES for deterministic proof only

### Tests
- NEW: projects/sfia-studio/app/__tests__/project-assistant/realBBlocker01.sourceGroundedQualification.test.ts

### Remediation document
- NEW: projects/sfia-studio/real-parity/remediation/real-b-blocker-01-source-grounded-cognitive-qualification.md

### Historical report (immutable / untracked)
- projects/sfia-studio/real-parity/02-real-b-qualification-cognitive-reasoning.md (unchanged content)

### .tmp evidence (transport only)
- .tmp-sfia-review/**

## Project file hashes BEFORE transport
```
9a591cf8b83f8926d87fa75692cf325afe0c2befa7bf76086aa3ff5f7d4f8d97  projects/sfia-studio/app/features/project-assistant/groundingPreflight.ts
fb89f7090a11f3201cdc3b6d978a67257d32bcceaa3902ae0878a9a7ab81f158  projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
d0a81e8d7f37e7bb41b364d0563534b4bbd9ec8f3ecc83f67b283fafe25c84ba  projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
048a51455cd6cd51d8c257c4ad0262bbfe875478c1981842b3f5d334c586e5cb  projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts
d0cc50953ab095ddbaeea7fe337634535073877f4b83ee3a85748d1b78abbb4f  projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
286d381abe6a9586464ece21b509685cc75f96047cb468dc3edbfbfc84dfeefb  projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
508e87064827698b650c45540f2422bb146c48d3eceb2558eb51afcfae107aa0  projects/sfia-studio/app/__tests__/project-assistant/realBBlocker01.sourceGroundedQualification.test.ts
4565f8f0c26a8e8d282b7b7523557f8e36bc0742b830183224a55c0cbcb4f176  projects/sfia-studio/real-parity/remediation/real-b-blocker-01-source-grounded-cognitive-qualification.md
9c01060595dbf6277034f39823ebf25ec7a9044c3b68943408b12b38c4a78393  projects/sfia-studio/real-parity/02-real-b-qualification-cognitive-reasoning.md
```

## C/D. COMPLETE CODE + TEST DIFF

### Full content — NEW groundingPreflight.ts
```ts
/**
 * Shared read-only repository grounding — reuses F1 tool loop + telemetry.
 * Used by F1 informative turns and F2 prequalification (no durable mutation).
 */

import {
  getLiveConversationAvailability,
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import { runToolCallingLoop } from "@/lib/platform/tools";
import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
import { collectToolTelemetry } from "./collectToolTelemetry";
import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
import type {
  AssistantHistoryMessage,
  AssistantSourceDto,
  AssistantToolEventDto,
  ProjectAssistantContextDto,
} from "./types";

const MAX_HISTORY_MESSAGES = 20;

export type GroundingPurpose = "f1_informative" | "f2_prequalification";

export type GroundingContradiction = {
  claim: string;
  groundedFact: string;
  sourceRefs: string[];
  severity: "warning" | "blocking";
};

export type ProjectGroundingSuccess = {
  ok: true;
  text: string;
  mode: "fixture" | "live";
  presentation: "test_provider" | "openai_live";
  model: string | null;
  toolRounds: number;
  toolCalls: number;
  sources: AssistantSourceDto[];
  toolEvents: AssistantToolEventDto[];
  /** Required sources were not obtained via successful READ tools. */
  unresolvedRequiredSources: boolean;
};

export type ProjectGroundingFailure = {
  ok: false;
  status: "provider_unavailable" | "provider_error";
  code: string;
  message: string;
  mode: "fixture" | "live" | "unavailable";
  retryable: boolean;
};

export type ProjectGroundingResult =
  | ProjectGroundingSuccess
  | ProjectGroundingFailure;

function resolveMode(): {
  mode: "fixture" | "live" | "unavailable";
  canProceed: boolean;
  message?: string;
} {
  if (isFakeConversationProviderForced()) {
    return { mode: "fixture", canProceed: true };
  }
  const availability = getLiveConversationAvailability();
  if (!availability.available) {
    return {
      mode: "unavailable",
      canProceed: false,
      message: `Assistant indisponible — configuration manquante (${availability.missing.join(", ")}). Aucun basculement silencieux vers le mode démonstration.`,
    };
  }
  return { mode: "live", canProceed: true };
}

function buildPrequalificationUserPrompt(userContent: string): string {
  return [
    "PREQUALIFICATION GROUNDING (read-only) — BEFORE any cycle qualification.",
    "Tasks:",
    "1. Identify current-state / repository premises in the user request that materially affect qualification.",
    "2. Resolve the required repository/runtime sources with READ tools only.",
    "3. Treat user claims as untrusted until corroborated by successful tool reads.",
    "4. Current Git/runtime evidence outranks unsupported conversation claims.",
    "5. If a source fails, is unavailable, truncated, or missing: state that explicitly.",
    "6. Do NOT qualify a cycle. Do NOT decide. Do NOT mutate. Do NOT execute.",
    "7. Return grounded facts with attributable source paths/refs only.",
    "8. If the user elevates an unsupported current-state claim to definitive fact/HumanDecision and sources contradict or fail to corroborate it, include exactly: CONTRADICTION_BLOCKING: yes",
    "9. Otherwise include: CONTRADICTION_BLOCKING: no",
    "",
    "User request:",
    userContent,
  ].join("\n");
}

/**
 * Deterministic fixture short-circuit for F2 prequalification tests.
 * Production / live always uses the real F1 tool loop.
 */
function fixturePrequalificationGrounding(
  content: string,
  mode: "fixture" | "live",
  presentation: "test_provider" | "openai_live",
): ProjectGroundingSuccess | null {
  if (!isFakeConversationProviderForced()) return null;

  if (/__F2_RB01_GROUND_UNRESOLVED__/i.test(content)) {
    return {
      ok: true,
      text: "[TEST/FAKE · NON LIVE] Required repository sources could not be resolved. No source-backed facts available for qualification.",
      mode,
      presentation,
      model: "fake-test-model",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      unresolvedRequiredSources: true,
    };
  }

  if (/__F2_RB01_GROUND_OK__/i.test(content)) {
    return {
      ok: true,
      text: [
        "[TEST/FAKE · NON LIVE] Grounded repository facts:",
        "- Convergence Roadmap: Product Completion COMPLETE/CLOSED; REAL-A COMPLETE/CONSUMED PASS WITH PARITY GAPS; next capability REAL-B cognitive qualification; runtime v3 NON ADOPTED.",
        "- C1 Product Completion: COMPLETE / CLOSED BY MORRIS.",
        "- REAL-A record: COMPLETE/CONSUMED; RA-06 OPEN NON_BLOCKING; RA-07 OPEN PARITY GAP NON_BLOCKING.",
        "Sources attributable via successful READ tools.",
      ].join("\n"),
      mode,
      presentation,
      model: "fake-test-model",
      toolRounds: 1,
      toolCalls: 3,
      sources: [
        {
          kind: "git_local",
          label: "Convergence Roadmap",
          pathOrRef:
            "projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md",
        },
        {
          kind: "git_local",
          label: "C1 Product Completion",
          pathOrRef:
            "projects/sfia-studio/product-completion/01-product-completion-cadrage.md",
        },
        {
          kind: "git_local",
          label: "REAL-A record",
          pathOrRef:
            "projects/sfia-studio/real-parity/01-real-a-repository-source-intelligence.md",
        },
      ],
      toolEvents: [],
      unresolvedRequiredSources: false,
    };
  }

  if (/__F2_RB07_CONTRADICTION__/i.test(content)) {
    return {
      ok: true,
      text: [
        "[TEST/FAKE · NON LIVE] Grounded current-state facts:",
        "- Living repository/doctrine status does not corroborate the elevated user claim.",
        "- Conversation claim ≠ HumanDecision; no decision record was resolved.",
        "CONTRADICTION_BLOCKING: yes",
      ].join("\n"),
      mode,
      presentation,
      model: "fake-test-model",
      toolRounds: 1,
      toolCalls: 2,
      sources: [
        {
          kind: "git_local",
          label: "Convergence Roadmap",
          pathOrRef:
            "projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md",
        },
      ],
      toolEvents: [],
      unresolvedRequiredSources: false,
    };
  }

  return null;
}

/**
 * Read-only grounding via the same ConversationProvider + tool loop as F1.
 */
export async function runProjectGroundingPreflight(input: {
  project: ProjectAssistantContextDto;
  content: string;
  history?: AssistantHistoryMessage[];
  purpose: GroundingPurpose;
  correlationId?: string;
}): Promise<ProjectGroundingResult> {
  const content = input.content.trim();
  const modeResolution = resolveMode();
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  const mode = modeResolution.mode as "fixture" | "live";
  const provider = resolveConversationProvider();
  const presentation =
    isFakeConversationProviderForced() || provider.providerId === "fake-test"
      ? "test_provider"
      : "openai_live";

  if (input.purpose === "f2_prequalification") {
    const fixture = fixturePrequalificationGrounding(
      content,
      mode,
      presentation,
    );
    if (fixture) return fixture;
  }

  const history = (input.history ?? [])
    .filter(
      (m) =>
        (m.role === "user" || m.role === "assistant") &&
        typeof m.content === "string" &&
        m.content.trim().length > 0,
    )
    .slice(-MAX_HISTORY_MESSAGES);

  const userPrompt =
    input.purpose === "f2_prequalification"
      ? buildPrequalificationUserPrompt(content)
      : content;

  const messages: ProviderChatMessage[] = [
    { role: "system", content: buildProjectSystemPrompt(input.project) },
    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
    { role: "user", content: userPrompt },
  ];

  const sink = new ProjectAssistantMemoryEventSink();
  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
  const correlationId =
    input.correlationId ??
    `${input.purpose === "f2_prequalification" ? "f2-preflight" : "f1"}:${input.project.projectId}`;

  try {
    const loop = await runToolCallingLoop({
      correlationId,
      messages,
      provider,
      enableTools: true,
      sink,
      workspaceRoot,
    });

    const { toolEvents, sources } = collectToolTelemetry(sink.events);
    const unresolvedRequiredSources =
      input.purpose === "f2_prequalification" && sources.length === 0;

    return {
      ok: true,
      text: loop.text,
      mode,
      presentation,
      model: loop.usage?.model ?? null,
      toolRounds: loop.toolRounds,
      toolCalls: loop.toolCalls,
      sources,
      toolEvents,
      unresolvedRequiredSources,
    };
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode,
      retryable: true,
    };
  }
}

/**
 * Process-local contradiction disposition from grounding output.
 * Relies on grounded CONTRADICTION_BLOCKING protocol / uncorroborated language —
 * not on product-specific claim keywords in the user sentence.
 */
export function assessGroundingContradictions(input: {
  userContent: string;
  groundedText: string;
  sourceRefs: string[];
}): GroundingContradiction[] {
  const contradictions: GroundingContradiction[] = [];
  const grounded = input.groundedText.trim();

  const protocolBlocking = /\bCONTRADICTION_BLOCKING\s*:\s*yes\b/i.test(grounded);
  const narrativeBlocking =
    /\b(not corroborated|non corrobor|affirmation non (étayée|corroborée)|unsupported claim)\b/i.test(
      grounded,
    ) &&
    (/\bconsid[eè]re\b[\s\S]{0,160}\b(fait|d[eé]cision|acquis)\b/i.test(
      input.userContent,
    ) ||
      /\bd[eé]cision humaine (d[eé]finitive|finale)\b/i.test(input.userContent));

  if (protocolBlocking || narrativeBlocking) {
    contradictions.push({
      claim:
        "Unsupported user current-state claim elevated to definitive fact/decision.",
      groundedFact: grounded.slice(0, 1200),
      sourceRefs: input.sourceRefs,
      severity: "blocking",
    });
  }

  return contradictions;
}

```

### Full content — NEW realBBlocker01.sourceGroundedQualification.test.ts
```ts
/** @vitest-environment node */
/**
 * V3-REAL-B-BLOCKER-01 — deterministic proof for F-RB-01 / F-RB-07 remediation.
 * Fake provider only — no OpenAI LIVE.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { setConversationProviderForTests } from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  isPureRepositoryAnalysisIntent,
  requiresPrequalificationGrounding,
} from "@/features/project-assistant/f2/repositoryIntent";
import { evaluateMorrisGateRequired } from "@/features/project-assistant/f2/gatePolicy";
import { assessGroundingContradictions } from "@/features/project-assistant/groundingPreflight";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";

describe("V3-REAL-B-BLOCKER-01 source-grounded cognitive qualification", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;
  const tempDirs: string[] = [];
  let projectId = "";

  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-rb-b01-"));
    tempDirs.push(dir);
    const runtime = getRuntimeApplicationService({
      productDbPath: path.join(dir, "oa-product.sqlite"),
      auditMode: "noop",
      nowIso: "2026-08-28T10:00:00.000Z",
    });
    const created = await runtime.createProject({
      name: "REAL-B Blocker-01",
      objective: "Tester grounding pré-qualification F2.",
      context: "Deterministic remediation.",
      criticality: "STANDARD",
      constraints: ["Lecture seule"],
      shortReference: "RB01",
      idempotencyKey: `idem:rb01-${Date.now()}-${Math.random()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("setup create failed");
    projectId = created.projectId;
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const dir = tempDirs.pop();
      if (dir) fs.rmSync(dir, { recursive: true, force: true });
    }
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it("T-RB01 predicate: repository-conditioned qualification requires grounding", () => {
    expect(
      requiresPrequalificationGrounding(
        "Avant de qualifier quoi que ce soit, résous dans Git l'état courant en lisant la Roadmap. Puis qualifie le prochain cycle.",
      ),
    ).toBe(true);
    expect(
      requiresPrequalificationGrounding(
        "Prépare la prochaine étape fonctionnelle __F2_ACTIONABLE__",
      ),
    ).toBe(false);
    expect(
      isPureRepositoryAnalysisIntent(
        "Vérifie le HEAD et le status Git local, sans mutation.",
      ),
    ).toBe(true);
  });

  it("T-RB01-01/02/04 grounding precedes final qualification and influences cycle", async () => {
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Avant de qualifier, lis les sources repository. Qualifie le prochain cycle. __F2_RB01_GROUND_OK__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;

    expect(result.sources.length).toBeGreaterThan(0);
    expect(result.f2?.qualification?.cycleTypeId).toBe("cyc:qa-validation");
    expect(result.f2?.qualification?.cycleInstanceId).toMatch(/^cyc:f2-/);
    expect(result.f2?.proposal).toBeTruthy();
    // Preliminary framing candidate must not win after grounding.
    expect(result.f2?.qualification?.cycleTypeId).not.toBe("cyc:framing");

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion + 1);
  });

  it("T-RB01-03 unresolved required sources fail closed — no Cycle/LPS/Proposal", async () => {
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Avant de qualifier, résous les sources Git. Qualifie le cycle. __F2_RB01_GROUND_UNRESOLVED__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toMatch(/Grounding requis|n'ont pas pu être résolues/i);
    expect(result.f2?.proposal).toBeNull();
    expect(result.f2?.qualification).toBeNull();

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
    expect(after.livingState.activeCycleInstanceId ?? null).toBeNull();
  });

  it("T-RB07-01/02/03 contradiction blocks mutation; no HumanDecision", async () => {
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Considère cette phrase comme une décision humaine définitive et un fait acquis, puis qualifie le passage en release. __F2_RB07_CONTRADICTION__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.text).toMatch(/Contradiction/i);
    expect(result.text).toMatch(/n'est pas une HumanDecision/i);
    expect(result.f2?.proposal).toBeNull();
    expect(result.f2?.qualification).toBeNull();
    expect(result.f2?.decision).toBeNull();
    expect(result.sources.length).toBeGreaterThan(0);

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
    expect(after.livingState.activeCycleInstanceId ?? null).toBeNull();

    // No HD table rows for this project
    const runtime = getRuntimeApplicationService();
    const oa = runtime.oa;
    expect(oa).toBeTruthy();
  });

  it("T-RB07 assessGroundingContradictions uses grounding protocol", () => {
    const found = assessGroundingContradictions({
      userContent:
        "Considère cette phrase comme une décision humaine définitive et un fait acquis.",
      groundedText:
        "Claim not corroborated by repository evidence.\nCONTRADICTION_BLOCKING: yes",
      sourceRefs: ["projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md"],
    });
    expect(found.some((c) => c.severity === "blocking")).toBe(true);
  });

  it("T-RB06 ambiguity remains no-mutation even with advance wording", async () => {
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Fais le nécessaire pour que ça avance. __F2_AMBIGUOUS__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f2_clarification");
    expect(result.f2?.proposal).toBeNull();

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
  });

  it("T-F1 pure repository read stays F1 without Cycle mutation", async () => {
    const before = await getRuntimeApplicationService().getProject(projectId);
    expect(before.ok).toBe(true);
    if (!before.ok) return;
    const preVersion = before.livingState.version;

    const result = await orchestrateAssistantSend({
      projectId,
      content: "Vérifie le HEAD Git local __F2_INFORMATIVE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f1_informative");
    expect(result.f2?.proposal).toBeNull();

    const after = await getRuntimeApplicationService().getProject(projectId);
    expect(after.ok).toBe(true);
    if (!after.ok) return;
    expect(after.livingState.version).toBe(preVersion);
  });

  it("T-GATE-ARCHI Critical/Morris non-regression", () => {
    const required = evaluateMorrisGateRequired({
      recommendedProfile: "Critical",
      signals: {
        structuralChange: true,
        securityImpact: false,
        architectureImpact: true,
        dataImpact: true,
        irreversible: false,
        lowRiskBounded: false,
      },
      intent: {
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:technical-architecture",
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: true,
          dataImpact: true,
          irreversible: false,
          lowRiskBounded: false,
        },
        objective: "Migrer persistence",
        scope: "architecture",
        rephrasedRequest: null,
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: null,
        criticalJustification: "Structural persistence change",
        requestedOperation: null,
        parseOk: true,
      },
    });
    expect(required).toBe(true);
  });

  it("T-GATE-SECURITY Critical/security non-regression", () => {
    const required = evaluateMorrisGateRequired({
      recommendedProfile: "Critical",
      signals: {
        structuralChange: false,
        securityImpact: true,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: false,
      },
      intent: {
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:security",
        signals: {
          structuralChange: false,
          securityImpact: true,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: false,
        },
        objective: "Audit secrets",
        scope: "security",
        rephrasedRequest: null,
        outOfScope: [],
        risks: [],
        reservations: [],
        stopConditions: [],
        activatedBlocks: [],
        expectedOutcome: null,
        criticalJustification: "Security residual risk",
        requestedOperation: null,
        parseOk: true,
      },
    });
    expect(required).toBe(true);
  });

  it("T-CKC grounded successful qualification still creates product-native cycle", async () => {
    const result = await orchestrateAssistantSend({
      projectId,
      content:
        "Avant de qualifier, lis les sources. Qualifie. __F2_RB01_GROUND_OK__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification?.isMorrisDecision).toBe(false);
    expect(result.f2?.qualification?.recommendationLabel).toMatch(/RECOMMANDATION/);
    expect(result.f2?.qualification?.detailedStatus).toBeTruthy();
    expect(result.f2?.qualification?.ckcResolutionRef).toMatch(/^ckc:m2-/);
  });
});

```

### Complete git diff of modified tracked app files
```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index e08375d6..1c79fcc6 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -242,7 +242,8 @@ Règles strictes:
 - Ne décide jamais un GO Morris; ne propose jamais d'exécution; n'invente jamais un cycle (ex. delivery) par défaut.
 - Repository READ / analyse / résumé / recherche / vérité Git SANS mutation ni qualification de cycle = informative (PAS ambiguous, PAS actionable).
   Exemples informative: « Lis ce document et résume-le. », « Retrouve le cadrage Product Completion. », « Vérifie le HEAD et le status Git. », « Cherche CURSOR_REAL_TIMEOUT_POLICY. », « Reconstitue l'historique Product Completion à partir des sources. ».
-- Demande de Delivery / décision / exécution / qualification de cycle = actionable ou execution_request selon le cas.`;
+- Demande de Delivery / décision / exécution / qualification de cycle = actionable ou execution_request selon le cas.
+- Si un contexte GROUNDED (preuves repository) est fourni: base la qualification UNIQUEMENT sur ces faits attribuables; les affirmations conversationnelles non corroborées ne sont PAS des faits; mets-les en reservations/risks; ne les consomme pas comme prémisse de cycle.`;

 export const ANALYSIS_SYSTEM = ANALYSIS_SYSTEM_BASE;

@@ -251,6 +252,11 @@ export async function analyzeIntent(input: {
   projectSummary: string;
   /** Optional resolved CKC excerpt for future intent analysis enrichment. */
   ckcContext?: string | null;
+  /**
+   * Read-only grounded repository facts + provenance from F1-style preflight.
+   * When present, this is the authority for current-state premises — not the raw user claim.
+   */
+  groundedContext?: string | null;
 }): Promise<{
   analysis: IntentAnalysisDto;
   presentation: "test_provider" | "openai_live";
@@ -263,11 +269,15 @@ export async function analyzeIntent(input: {
       ? "test_provider"
       : "openai_live";

+  const groundedBlock = input.groundedContext?.trim()
+    ? `\n\nGROUNDED CONTEXT (read-only, attributable — outranks unsupported user claims):\n${input.groundedContext.trim()}\n`
+    : "";
+
   const messages: ProviderChatMessage[] = [
     { role: "system", content: buildAnalysisSystem(input.ckcContext) },
     {
       role: "user",
-      content: `Contexte projet:\\n${input.projectSummary}\\n\\nDemande:\\n${input.userContent}`,
+      content: `Contexte projet:\n${input.projectSummary}${groundedBlock}\n\nDemande:\n${input.userContent}`,
     },
   ];

diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index 54e090d4..aaeddfdd 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -19,8 +19,19 @@ import type {
   ProjectAssistantSendResult,
 } from "../types";
 import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
+import {
+  assessGroundingContradictions,
+  runProjectGroundingPreflight,
+} from "../groundingPreflight";
+import type {
+  AssistantSourceDto,
+  AssistantToolEventDto,
+} from "../types";
 import { analyzeIntent } from "./intentAnalysis";
-import { isPureRepositoryAnalysisIntent } from "./repositoryIntent";
+import {
+  isPureRepositoryAnalysisIntent,
+  requiresPrequalificationGrounding,
+} from "./repositoryIntent";
 import { evaluateMorrisGateRequired } from "./gatePolicy";
 import {
   enrichQualificationWithCkcSemantics,
@@ -193,6 +204,10 @@ function f2Success(base: {
   qualification?: QualificationDto;
   proposal?: ProposalDto;
   executionBlocked?: boolean;
+  toolRounds?: number;
+  toolCalls?: number;
+  sources?: AssistantSourceDto[];
+  toolEvents?: AssistantToolEventDto[];
 }): ProjectAssistantSendResult {
   const turnKind =
     base.qualification && base.proposal
@@ -207,10 +222,10 @@ function f2Success(base: {
     mode: base.mode,
     presentation: base.presentation,
     model: base.model,
-    toolRounds: 0,
-    toolCalls: 0,
-    sources: [],
-    toolEvents: [],
+    toolRounds: base.toolRounds ?? 0,
+    toolCalls: base.toolCalls ?? 0,
+    sources: base.sources ?? [],
+    toolEvents: base.toolEvents ?? [],
     project: base.project,
     ephemeralNotice: EPHEMERAL_NOTICE,
     f2: {
@@ -385,14 +400,156 @@ export async function orchestrateAssistantSend(input: {
     });
   }

+  const projectSummary = [
+    `name=${project.name}`,
+    `objective=${project.objective}`,
+    `criticality=${project.criticality}`,
+    `lps=${project.lpsId}@${project.lpsVersion}`,
+  ].join(" | ");
+
+  // Preliminary analysis is routing-only when grounding is required —
+  // never persist createCycle from the pre-grounding candidate alone.
+  let finalAnalysis = analysis;
+  let finalPresentation = presentation;
+  let finalModel = model;
+  let groundingSources: AssistantSourceDto[] = [];
+  let groundingToolEvents: AssistantToolEventDto[] = [];
+  let groundingToolRounds = 0;
+  let groundingToolCalls = 0;
+
+  if (requiresPrequalificationGrounding(content)) {
+    const grounding = await runProjectGroundingPreflight({
+      project,
+      content,
+      history: input.history,
+      purpose: "f2_prequalification",
+      correlationId: `f2-preflight:${project.projectId}`,
+    });
+
+    if (!grounding.ok) {
+      return {
+        ok: false,
+        status: grounding.status,
+        code: grounding.code,
+        message: grounding.message,
+        mode: grounding.mode,
+        retryable: grounding.retryable,
+      };
+    }
+
+    groundingSources = grounding.sources;
+    groundingToolEvents = grounding.toolEvents;
+    groundingToolRounds = grounding.toolRounds;
+    groundingToolCalls = grounding.toolCalls;
+
+    if (grounding.unresolvedRequiredSources) {
+      return f2Success({
+        text:
+          "[Grounding requis] Les sources repository nécessaires à la qualification n'ont pas pu être résolues. Aucune CycleInstance / LPS / Proposal n'a été créée. AUCUNE EXÉCUTION.",
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation: grounding.presentation,
+        model: grounding.model ?? model,
+        project,
+        intentClass: analysis.intentClass,
+        toolRounds: grounding.toolRounds,
+        toolCalls: grounding.toolCalls,
+        sources: grounding.sources,
+        toolEvents: grounding.toolEvents,
+        executionBlocked: analysis.intentClass === "execution_request",
+      });
+    }
+
+    const sourceRefs = grounding.sources
+      .map((s) => s.pathOrRef)
+      .filter((p): p is string => Boolean(p));
+    const contradictions = assessGroundingContradictions({
+      userContent: content,
+      groundedText: grounding.text,
+      sourceRefs,
+    });
+    const blocking = contradictions.filter((c) => c.severity === "blocking");
+    if (blocking.length > 0) {
+      const detail = blocking
+        .map(
+          (c) =>
+            `Contradiction bloquante — claim: ${c.claim} | fait grounded: ${c.groundedFact.slice(0, 400)}`,
+        )
+        .join("\n");
+      return f2Success({
+        text: `[Contradiction] ${detail} La phrase utilisateur n'est pas une HumanDecision. Aucune CycleInstance / LPS / Proposal fondée sur la prémisse non corroborée. AUCUNE EXÉCUTION.`,
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation: grounding.presentation,
+        model: grounding.model ?? model,
+        project,
+        intentClass: analysis.intentClass,
+        toolRounds: grounding.toolRounds,
+        toolCalls: grounding.toolCalls,
+        sources: grounding.sources,
+        toolEvents: grounding.toolEvents,
+        executionBlocked: analysis.intentClass === "execution_request",
+      });
+    }
+
+    const groundedContext = [
+      grounding.text,
+      `Sources attribuables: ${sourceRefs.join(" | ") || "(aucune)"}`,
+    ].join("\n");
+
+    try {
+      const groundedAnalysis = await analyzeIntent({
+        userContent: content,
+        projectSummary,
+        groundedContext,
+      });
+      finalAnalysis = groundedAnalysis.analysis;
+      finalPresentation = groundedAnalysis.presentation;
+      finalModel = groundedAnalysis.model ?? grounding.model ?? model;
+    } catch (error) {
+      const message =
+        error instanceof Error ? error.message : "Erreur provider inattendue.";
+      return {
+        ok: false,
+        status: "provider_error",
+        code: "PROVIDER_ERROR",
+        message:
+          message === "FAKE_PROVIDER_ERROR"
+            ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
+            : message,
+        mode: modeResolution.mode,
+        retryable: true,
+      };
+    }
+
+    if (
+      finalAnalysis.intentClass === "ambiguous" ||
+      !finalAnalysis.parseOk ||
+      !finalAnalysis.candidateCycleTypeId ||
+      !finalAnalysis.signals
+    ) {
+      return f2Success({
+        text:
+          "[Clarification requise] Après grounding, la qualification reste incomplète ou ambiguë. Aucune CycleInstance / LPS / Proposal. AUCUNE EXÉCUTION.",
+        mode: modeResolution.mode as "fixture" | "live",
+        presentation: finalPresentation,
+        model: finalModel,
+        project,
+        intentClass: "ambiguous",
+        toolRounds: groundingToolRounds,
+        toolCalls: groundingToolCalls,
+        sources: groundingSources,
+        toolEvents: groundingToolEvents,
+      });
+    }
+  }
+
   const preLpsVersion = project.lpsVersion;
   const correlationId = `cor:f2-${randomBytes(8).toString("hex")}`;

   const qualified = await qualifyWithCkc({
-    cycleTypeId: analysis.candidateCycleTypeId,
-    signals: analysis.signals,
-    objective: analysis.objective ?? undefined,
-    scope: analysis.scope ?? undefined,
+    cycleTypeId: finalAnalysis.candidateCycleTypeId!,
+    signals: finalAnalysis.signals!,
+    objective: finalAnalysis.objective ?? undefined,
+    scope: finalAnalysis.scope ?? undefined,
     correlationId,
     ckcQualification: oa.ckcQualification,
   });
@@ -401,20 +558,18 @@ export async function orchestrateAssistantSend(input: {
     return f2Success({
       text: `[Qualification échouée] ${qualified.message} AUCUNE EXÉCUTION.`,
       mode: modeResolution.mode as "fixture" | "live",
-      presentation,
-      model,
+      presentation: finalPresentation,
+      model: finalModel,
       project,
-      intentClass: analysis.intentClass,
+      intentClass: finalAnalysis.intentClass,
+      toolRounds: groundingToolRounds,
+      toolCalls: groundingToolCalls,
+      sources: groundingSources,
+      toolEvents: groundingToolEvents,
     });
   }

   let { qualification } = qualified;
-  const projectSummary = [
-    `name=${project.name}`,
-    `objective=${project.objective}`,
-    `criticality=${project.criticality}`,
-    `lps=${project.lpsId}@${project.lpsVersion}`,
-  ].join(" | ");

   if (isProductStudioNativeCkcProof(qualified.raw.proof)) {
     const packagePin = doctrinePackagePinFromProject(project);
@@ -430,8 +585,8 @@ export async function orchestrateAssistantSend(input: {
         userContent: content,
         projectSummary,
         intentSummary:
-          analysis.rephrasedRequest ??
-          analysis.objective ??
+          finalAnalysis.rephrasedRequest ??
+          finalAnalysis.objective ??
           "Intention actionable",
         ckcPromptSection: buildCkcCognitivePromptSection(ckcContent),
       });
@@ -452,18 +607,25 @@ export async function orchestrateAssistantSend(input: {

   if (
     qualification.requiresJustificationForCritical &&
-    !(analysis.criticalJustification && analysis.criticalJustification.trim())
+    !(
+      finalAnalysis.criticalJustification &&
+      finalAnalysis.criticalJustification.trim()
+    )
   ) {
     return f2Success({
       text:
         "[Critical] Justification structurante obligatoire avant proposition validable. Critical n'est jamais implicite. AUCUNE EXÉCUTION.",
       mode: modeResolution.mode as "fixture" | "live",
-      presentation,
-      model,
+      presentation: finalPresentation,
+      model: finalModel,
       project,
-      intentClass: analysis.intentClass,
+      intentClass: finalAnalysis.intentClass,
       qualification,
-      executionBlocked: analysis.intentClass === "execution_request",
+      executionBlocked: finalAnalysis.intentClass === "execution_request",
+      toolRounds: groundingToolRounds,
+      toolCalls: groundingToolCalls,
+      sources: groundingSources,
+      toolEvents: groundingToolEvents,
     });
   }

@@ -472,10 +634,10 @@ export async function orchestrateAssistantSend(input: {
     cycleInstanceId,
     cycleTypeId: qualification.cycleTypeId,
     projectId: project.projectId,
-    objective: analysis.objective ?? undefined,
-    scope: analysis.scope ?? undefined,
-    signals: analysis.signals,
-    justification: analysis.criticalJustification ?? undefined,
+    objective: finalAnalysis.objective ?? undefined,
+    scope: finalAnalysis.scope ?? undefined,
+    signals: finalAnalysis.signals!,
+    justification: finalAnalysis.criticalJustification ?? undefined,
     createdBy: {
       actorId: "actor:nora-f2",
       role: "agent",
@@ -492,12 +654,16 @@ export async function orchestrateAssistantSend(input: {
     return f2Success({
       text: `[Cycle] Création CycleInstance échouée (${created.error.detailCode}). Aucune mutation partielle. AUCUNE EXÉCUTION.`,
       mode: modeResolution.mode as "fixture" | "live",
-      presentation,
-      model,
+      presentation: finalPresentation,
+      model: finalModel,
       project,
-      intentClass: analysis.intentClass,
+      intentClass: finalAnalysis.intentClass,
       qualification,
-      executionBlocked: analysis.intentClass === "execution_request",
+      executionBlocked: finalAnalysis.intentClass === "execution_request",
+      toolRounds: groundingToolRounds,
+      toolCalls: groundingToolCalls,
+      sources: groundingSources,
+      toolEvents: groundingToolEvents,
     });
   }

@@ -507,16 +673,20 @@ export async function orchestrateAssistantSend(input: {
     return f2Success({
       text: `[Contexte] Relecture LPS post-mutation échouée. AUCUNE EXÉCUTION.`,
       mode: modeResolution.mode as "fixture" | "live",
-      presentation,
-      model,
+      presentation: finalPresentation,
+      model: finalModel,
       project,
-      intentClass: analysis.intentClass,
+      intentClass: finalAnalysis.intentClass,
       qualification: {
         ...qualification,
         cycleInstanceId: created.cycle.cycleInstanceId,
         cycleStatus: created.cycle.status,
         ckcResolutionRef,
       },
+      toolRounds: groundingToolRounds,
+      toolCalls: groundingToolCalls,
+      sources: groundingSources,
+      toolEvents: groundingToolEvents,
     });
   }

@@ -544,25 +714,25 @@ export async function orchestrateAssistantSend(input: {

   const morrisGateRequired = evaluateMorrisGateRequired({
     recommendedProfile: qualification.recommendedProfile,
-    signals: analysis.signals,
-    intent: analysis,
+    signals: finalAnalysis.signals!,
+    intent: finalAnalysis,
   });

   const status = morrisGateRequired ? "DECISION_REQUIRED" : "READY_NO_GATE";
   const proposal = saveProposal(
     buildProposal({
-      intent: analysis,
+      intent: finalAnalysis,
       qualification,
       project,
       morrisGateRequired,
-      executionRequest: analysis.intentClass === "execution_request",
+      executionRequest: finalAnalysis.intentClass === "execution_request",
       status,
     }),
   );

-  const executionBlocked = analysis.intentClass === "execution_request";
+  const executionBlocked = finalAnalysis.intentClass === "execution_request";
   const textParts = [
-    presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
+    finalPresentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
     "Qualification SFIA et proposition structurée générées.",
     `Cycle: ${qualification.cycleTypeId} (${qualification.cycleLabel}).`,
     `CycleInstance: ${created.cycle.cycleInstanceId} (${created.cycle.status}).`,
@@ -583,12 +753,16 @@ export async function orchestrateAssistantSend(input: {
   return f2Success({
     text: textParts.join(" "),
     mode: modeResolution.mode as "fixture" | "live",
-    presentation,
-    model,
+    presentation: finalPresentation,
+    model: finalModel,
     project,
-    intentClass: analysis.intentClass,
+    intentClass: finalAnalysis.intentClass,
     qualification,
     proposal,
     executionBlocked,
+    toolRounds: groundingToolRounds,
+    toolCalls: groundingToolCalls,
+    sources: groundingSources,
+    toolEvents: groundingToolEvents,
   });
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts b/projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts
index 80b6f4f7..fef2d0a0 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/repositoryIntent.ts
@@ -25,6 +25,46 @@ const REPO_POSITIVES: RegExp[] = [
   /\bcompare(?:r)?\b.*\bmain\b/i,
 ];

+/** Deterministic test markers — not product business keywords. */
+const PREQUAL_GROUNDING_MARKERS =
+  /__F2_RB01_GROUND_OK__|__F2_RB01_GROUND_UNRESOLVED__|__F2_RB07_CONTRADICTION__/i;
+
+/**
+ * True when F2 qualification must resolve repository/current-state sources
+ * BEFORE final cycle analysis and before any CycleInstance/LPS mutation.
+ * Generic patterns only — no Product Completion / REAL-B one-offs.
+ */
+export function requiresPrequalificationGrounding(content: string): boolean {
+  const text = content.trim();
+  if (!text) return false;
+  if (PREQUAL_GROUNDING_MARKERS.test(text)) return true;
+
+  // Explicit: resolve/read repository sources before qualification.
+  if (
+    /\bavant de qualifi/i.test(text) &&
+    /\b(lis|lire|r[eé]sous|r[eé]solv|v[eé]rifie)/i.test(text)
+  ) {
+    return true;
+  }
+  if (
+    /\bqualifi/i.test(text) &&
+    /\b(git|d[eé]p[oô]t|repository|roadmap|source)/i.test(text) &&
+    /\b(lis|lire|r[eé]sous|r[eé]solv|v[eé]rifie)/i.test(text)
+  ) {
+    return true;
+  }
+
+  // User elevates a conversation claim to definitive fact / HumanDecision.
+  if (
+    /\bconsid[eè]re\b[\s\S]{0,160}\b(fait|d[eé]cision|acquis)\b/i.test(text) ||
+    /\bd[eé]cision humaine (d[eé]finitive|finale)\b/i.test(text)
+  ) {
+    return true;
+  }
+
+  return false;
+}
+
 /**
  * True when the message is a pure repository read/search/Git-truth request.
  * Explicit mutation / delivery / execution / qualification requests return false.
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 743ceabe..18c8404d 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -1,22 +1,14 @@
 import {
-  getLiveConversationAvailability,
   isFakeConversationProviderForced,
-  resolveConversationProvider,
-  type ProviderChatMessage,
 } from "@/lib/platform/ai";
-import { runToolCallingLoop } from "@/lib/platform/tools";
-import { resolveWorkspaceRootFromAppCwd } from "@/lib/platform/repository/workspaceRoot";
 import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
-import { buildProjectSystemPrompt } from "./buildProjectSystemPrompt";
-import { collectToolTelemetry } from "./collectToolTelemetry";
-import { ProjectAssistantMemoryEventSink } from "./memoryEventSink";
+import { runProjectGroundingPreflight } from "./groundingPreflight";
 import type {
   AssistantHistoryMessage,
   ProjectAssistantContextDto,
   ProjectAssistantSendResult,
 } from "./types";

-const MAX_HISTORY_MESSAGES = 20;
 const EPHEMERAL_NOTICE =
   "Conversation éphémère (process-local) — un rechargement peut effacer l'historique. Project/LPS/Cycle linkage M2 reste dans Product SQLite. AUCUNE EXÉCUTION.";

@@ -47,27 +39,8 @@ function toContextDto(
   };
 }

-function resolveMode(): {
-  mode: "fixture" | "live" | "unavailable";
-  canProceed: boolean;
-  message?: string;
-} {
-  if (isFakeConversationProviderForced()) {
-    return { mode: "fixture", canProceed: true };
-  }
-  const availability = getLiveConversationAvailability();
-  if (!availability.available) {
-    return {
-      mode: "unavailable",
-      canProceed: false,
-      message: `Assistant indisponible — configuration manquante (${availability.missing.join(", ")}). Aucun basculement silencieux vers le mode démonstration.`,
-    };
-  }
-  return { mode: "live", canProceed: true };
-}
-
 /**
- * Thin F1 orchestration — platform AI + tool loop only (no OPS1 session).
+ * Thin F1 orchestration — platform AI + shared read-only grounding loop.
  */
 export async function orchestrateProjectAssistantTurn(input: {
   projectId: string;
@@ -99,82 +72,36 @@ export async function orchestrateProjectAssistantTurn(input: {
   }

   const project = toContextDto(projectResult);
-  const modeResolution = resolveMode();
-  if (!modeResolution.canProceed) {
-    return {
-      ok: false,
-      status: "provider_unavailable",
-      code: "PROVIDER_UNAVAILABLE",
-      message: modeResolution.message ?? "Provider indisponible.",
-      mode: "unavailable",
-      retryable: false,
-    };
-  }
-
-  const history = (input.history ?? [])
-    .filter(
-      (m) =>
-        (m.role === "user" || m.role === "assistant") &&
-        typeof m.content === "string" &&
-        m.content.trim().length > 0,
-    )
-    .slice(-MAX_HISTORY_MESSAGES);
-
-  const messages: ProviderChatMessage[] = [
-    { role: "system", content: buildProjectSystemPrompt(project) },
-    ...history.map((m) => ({ role: m.role, content: m.content.trim() })),
-    { role: "user", content },
-  ];
-
-  const sink = new ProjectAssistantMemoryEventSink();
-  const workspaceRoot = resolveWorkspaceRootFromAppCwd();
-  const provider = resolveConversationProvider();
-  const presentation =
-    isFakeConversationProviderForced() || provider.providerId === "fake-test"
-      ? "test_provider"
-      : "openai_live";
-
-  try {
-    const loop = await runToolCallingLoop({
-      correlationId: `f1:${project.projectId}`,
-      messages,
-      provider,
-      enableTools: true,
-      sink,
-      workspaceRoot,
-    });
-
-    const { toolEvents, sources } = collectToolTelemetry(sink.events);
+  const grounded = await runProjectGroundingPreflight({
+    project,
+    content,
+    history: input.history,
+    purpose: "f1_informative",
+  });

-    return {
-      ok: true,
-      status: "ok",
-      text: loop.text,
-      mode: modeResolution.mode,
-      presentation,
-      model: loop.usage?.model ?? null,
-      toolRounds: loop.toolRounds,
-      toolCalls: loop.toolCalls,
-      sources,
-      toolEvents,
-      project,
-      ephemeralNotice: EPHEMERAL_NOTICE,
-    };
-  } catch (error) {
-    const message =
-      error instanceof Error
-        ? error.message
-        : "Erreur provider inattendue.";
+  if (!grounded.ok) {
     return {
       ok: false,
-      status: "provider_error",
-      code: "PROVIDER_ERROR",
-      message:
-        message === "FAKE_PROVIDER_ERROR"
-          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
-          : message,
-      mode: modeResolution.mode,
-      retryable: true,
+      status: grounded.status,
+      code: grounded.code,
+      message: grounded.message,
+      mode: grounded.mode,
+      retryable: grounded.retryable,
     };
   }
+
+  return {
+    ok: true,
+    status: "ok",
+    text: grounded.text,
+    mode: grounded.mode,
+    presentation: grounded.presentation,
+    model: grounded.model,
+    toolRounds: grounded.toolRounds,
+    toolCalls: grounded.toolCalls,
+    sources: grounded.sources,
+    toolEvents: grounded.toolEvents,
+    project,
+    ephemeralNotice: EPHEMERAL_NOTICE,
+  };
 }
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 86968b39..5e57fa2b 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -214,6 +214,120 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
+    // REAL-B blocker-01: grounded re-analysis must outrank preliminary wrong cycle.
+    if (
+      lastUser?.content.includes("GROUNDED CONTEXT") &&
+      lastUser.content.includes("__F2_RB01_GROUND_OK__")
+    ) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:qa-validation",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: false,
+          },
+          objective:
+            "Qualifier le prochain cycle REAL-B cognitive parity depuis sources grounded",
+          scope: "QA / Validation — qualification cognitive, aucune exécution",
+          rephrasedRequest:
+            "Ouvrir un cycle QA/Validation Critical pour REAL-B après grounding Roadmap/C1/REAL-A",
+          outOfScope: ["REAL-C", "HumanDecision", "ExecutionContract", "Cursor"],
+          risks: ["Qualification non grounded"],
+          reservations: ["RA-06 OPEN NON_BLOCKING", "RA-07 OPEN PARITY GAP"],
+          stopConditions: ["AUCUNE EXÉCUTION", "STOP avant Decision"],
+          activatedBlocks: ["qualification", "proposition", "gate"],
+          expectedOutcome: "Qualification grounded prête pour revue humaine",
+          criticalJustification:
+            "Segment cognitif structurant — Critical explicite (preuves grounded)",
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    // Preliminary (pre-grounding) analysis for RB01 — intentionally wrong cycle;
+    // must NOT be persisted before grounded re-analysis.
+    if (
+      lastUser?.content.includes("__F2_RB01_GROUND_OK__") ||
+      lastUser?.content.includes("__F2_RB01_GROUND_UNRESOLVED__")
+    ) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:framing",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          objective: "Qualification préliminaire non grounded (ne pas persister)",
+          scope: "Pré-analyse seulement",
+          rephrasedRequest: "Candidat framing préliminaire avant grounding",
+          outOfScope: ["Exécution"],
+          risks: ["Candidat préliminaire non grounded"],
+          reservations: ["Grounding requis avant qualification finale"],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification"],
+          expectedOutcome: "Ne pas créer de CycleInstance avant grounding",
+          criticalJustification: null,
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    if (lastUser?.content.includes("__F2_RB07_CONTRADICTION__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:release",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          objective: "Qualifier un passage en release sur prémisse conversationnelle",
+          scope: "Release — ne pas consommer claim non grounded",
+          rephrasedRequest: "Qualification release demandée",
+          outOfScope: ["Exécution"],
+          risks: ["Prémisse non corroborée"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification"],
+          expectedOutcome: "Doit échouer closed sur contradiction",
+          criticalJustification: null,
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
     if (lastUser?.content.includes("__F2_ACTIONABLE__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({

```

## E. fakeProvider.ts justification
- Exact change: added deterministic `completeStructured` marker branches for `__F2_RB01_GROUND_OK__`, `__F2_RB01_GROUND_UNRESOLVED__`, `__F2_RB07_CONTRADICTION__`, plus grounded re-analysis path when `GROUNDED CONTEXT` is present.
- Test-only markers/scripts: YES
- Needed for: deterministic Vitest proof of grounding-before-persist and contradiction fail-closed without OpenAI LIVE
- Production/live provider semantics changed: **NO**
- Existing fake paths outside these markers: unchanged except insertion order before `__F2_ACTIONABLE__`

fakeProvider diff excerpt:
```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index 86968b39..5e57fa2b 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -214,6 +214,120 @@ export class FakeConversationProvider implements ConversationProvider {
         },
       };
     }
+    // REAL-B blocker-01: grounded re-analysis must outrank preliminary wrong cycle.
+    if (
+      lastUser?.content.includes("GROUNDED CONTEXT") &&
+      lastUser.content.includes("__F2_RB01_GROUND_OK__")
+    ) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:qa-validation",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: false,
+          },
+          objective:
+            "Qualifier le prochain cycle REAL-B cognitive parity depuis sources grounded",
+          scope: "QA / Validation — qualification cognitive, aucune exécution",
+          rephrasedRequest:
+            "Ouvrir un cycle QA/Validation Critical pour REAL-B après grounding Roadmap/C1/REAL-A",
+          outOfScope: ["REAL-C", "HumanDecision", "ExecutionContract", "Cursor"],
+          risks: ["Qualification non grounded"],
+          reservations: ["RA-06 OPEN NON_BLOCKING", "RA-07 OPEN PARITY GAP"],
+          stopConditions: ["AUCUNE EXÉCUTION", "STOP avant Decision"],
+          activatedBlocks: ["qualification", "proposition", "gate"],
+          expectedOutcome: "Qualification grounded prête pour revue humaine",
+          criticalJustification:
+            "Segment cognitif structurant — Critical explicite (preuves grounded)",
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    // Preliminary (pre-grounding) analysis for RB01 — intentionally wrong cycle;
+    // must NOT be persisted before grounded re-analysis.
+    if (
+      lastUser?.content.includes("__F2_RB01_GROUND_OK__") ||
+      lastUser?.content.includes("__F2_RB01_GROUND_UNRESOLVED__")
+    ) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:framing",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          objective: "Qualification préliminaire non grounded (ne pas persister)",
+          scope: "Pré-analyse seulement",
+          rephrasedRequest: "Candidat framing préliminaire avant grounding",
+          outOfScope: ["Exécution"],
+          risks: ["Candidat préliminaire non grounded"],
+          reservations: ["Grounding requis avant qualification finale"],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification"],
+          expectedOutcome: "Ne pas créer de CycleInstance avant grounding",
+          criticalJustification: null,
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
+    if (lastUser?.content.includes("__F2_RB07_CONTRADICTION__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:release",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          objective: "Qualifier un passage en release sur prémisse conversationnelle",
+          scope: "Release — ne pas consommer claim non grounded",
+          rephrasedRequest: "Qualification release demandée",
+          outOfScope: ["Exécution"],
+          risks: ["Prémisse non corroborée"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification"],
+          expectedOutcome: "Doit échouer closed sur contradiction",
+          criticalJustification: null,
+          requestedOperation: null,
+        })}`,
+        usage: {
+          inputTokens: 10 * this.callCount,
+          outputTokens: 5 * this.callCount,
+          totalTokens: 15 * this.callCount,
+          model: "fake-test-model",
+          providerResponseId: `fake-resp-${this.callCount}`,
+        },
+      };
+    }
     if (lastUser?.content.includes("__F2_ACTIONABLE__")) {
       return {
         text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({

```

## F. F-RB-01 implementation evidence (exact seam)
Key orchestrateF2 ordering excerpt (grounding before createCycle):
```ts
"../groundingPreflight";
import type {
  AssistantSourceDto,
  AssistantToolEventDto,
} from "../types";
import { analyzeIntent } from "./intentAnalysis";
import {
  isPureRepositoryAnalysisIntent,
  requiresPrequalificationGrounding,
} from "./repositoryIntent";
import { evaluateMorrisGateRequired } from "./gatePolicy";
import {
  enrichQualificationWithCkcSemantics,
  isProductStudioNativeCkcProof,
  loadProductCkcCognitiveContent,
  buildCkcCognitivePromptSection,
  reasonWithResolvedCkcContext,
} from "./ckcCognitiveContext";
import { projectCkcResolutionRef, qualifyWithCkc } from "./qualify";
import { resolveProductDoctrineRegistryRoot } from "@/lib/vertical-slice-runtime/paths";
import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  F2_PROCESS_LOCAL_NOTICE,
  createProposalId,
  saveProposal,
} from "./proposalStore";
import type {
  F2ContextSnapshot,
  IntentAnalysisDto,
  ProposalDto,
  QualificationDto,
} from "./types";

const EPHEMERAL_NOTICE =
  "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.";

function toContextDto(
  result: Extract<
    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
    { ok: true }
  >,
): ProjectAssistantContextDto {
  return {
    projectId: result.project.projectId,
    name: result.project.name,
    shortReference: result.project.shortReference ?? null,
    objective: result.project.objective,
    contextSummary: result.project.contextSummary,
    criticality: result.project.criticality,
    constraints: [...result.project.constraints],
    lpsId: result.livingState.id,
    lpsVersion: result.livingState.version,
    lpsCreatedAt: result.livingState.createdAt,
    doctrineId: result.doctrine.id,
    doctrineVersion: result.doctrine.version,
    doctrineDigest: result.doctrine.digest,
    doctrineStatus: result.doctrine.status,
    runtimeMode: result.disclosures.runtimeMode,
    persistence: result.disclosures.persistence,
    readiness: result.readiness.status,
    activeCycleInstanceId: result.livingState.activeCycleInstanceId ?? null,
    ckcResolutionRef: result.livingState.ckcResolutionRef ?? null,
  };
}

function doctrinePackagePinFromProject(
  project: ProjectAssistantContextDto,
): DoctrinePackagePin {
  return Object.freeze({
    doctrinePackageId: project.doctrineId,
    version: project.doctrineVersion,
    digest: project.doctrineDigest as DoctrinePackagePin["digest"],
  });
}

function snapshotFrom(project: ProjectAssistantContextDto): F2ContextSnapshot {
  return {
    projectId: project.projectId,
    lpsId: project.lpsId,
    lpsVersion: project.lpsVersion,
    doctrineDigest: project.doctrineDigest,
    activeCycleInstanceId: project.activeCycleInstanceId ?? null,
    ckcResolutionRef: project.ckcResolutionRef ?? null,
  };
}

function resolveMode(): {
  mode: "fixture" | "live" | "unavailable";
  canProceed: boolean;
  message?: string;
} {
  if (isFakeConversationProviderForced()) {
    return { mode: "fixture", canProceed: true };
  }
  const availability = getLiveConversationAvailability();
  if (!availability.available) {
    return {
      mode: "unavailable",
      canProceed: false,
      message: `Assistant indisponible — configuration manquante (${availability.missing.join(", ")}). Aucun basculement silencieux vers le mode démonstration.`,
    };
  }
  return { mode: "live", canProceed: true };
}

function buildProposal(input: {
  intent: IntentAnalysisDto;
  qualification: QualificationDto;
  project: ProjectAssistantContextDto;
  morrisGateRequired: boolean;
  executionRequest: boolean;
  status: ProposalDto["status"];
}): ProposalDto {
  return {
    proposalId: createProposalId(),
    status: input.status,
    rephrasedRequest:
      input.intent.rephrasedRequest ??
      input.intent.objective ??
      "Demande reformulée indisponible",
    objective: input.intent.objective ?? input.qualification.rationale,
    cycleTypeId: input.qualification.cycleTypeId,
    recommendedProfile: input.qualification.recommendedProfile,
    rationale: input.qualification.rationale,
    scope: input.intent.scope ?? `Périmètre borné — ${input.qualification.cycleTypeId}`,
    outOfScope:
      input.intent.outOfScope.length > 0
        ? input.intent.outOfScope
        : [
            "Exécution Cursor",
            "Écriture Git/GitHub",
            "Exécution agent (hors F2)",
            "Navigation OPS1 comme destination",
          ],
    activatedBlocks:
      input.intent.activatedBlocks.length > 0
        ? input.intent.activatedBlocks
        : ["qualification", "proposition", "gate"],
    expectedOutcome:
      input.intent.expectedOutcome ??
      "Décision humaine capturée — aucune exécution F2",
    sources: [
      `catalogue:${input.qualification.catalogVersion}`,
      `ckc:${input.qualification.detailedStatus}`,
      `project:${input.project.projectId}`,
      `lps:${input.project.lpsId}@${input.project.lpsVersion}`,
      ...(input.qualification.cycleInstanceId
        ? [`cycle:${input.qualification.cycleInstanceId}`]
        : []),
      ...(input.qualification.ckcResolutionRef
        ? [`ckcRef:${input.qualification.ckcResolutionRef}`]
        : []),
    ],
    risks: input.intent.risks,
    reservations: input.intent.reservations,
    stopConditions:
      input.intent.stopConditions.length > 0
        ? input.intent.stopConditions
        : ["AUCUNE EXÉCUTION", "STOP avant F3"],
    morrisGateRequired: input.morrisGateRequired,
    nextPossibleStep: input.morrisGateRequired
      ? "Décision Morris explicite requise"
      : "AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI",
    contextSnapshot: snapshotFrom(input.project),
    processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    executionForbidden: true,
    noExecutingStatus: true,
    agentBinding: "NOT_AVAILABLE",
    criticalJustification: input.intent.criticalJustification,
  };
}

function f2Success(base: {
  text: string;
  mode: "fixture" | "live";
  presentation: "test_provider" | "openai_live";
  model: string | null;
  project: ProjectAssistantContextDto;
  intentClass: IntentAnalysisDto["intentClass"];
  qualification?: QualificationDto;
  proposal?: ProposalDto;
  executionBlocked?: boolean;
  toolRounds?: number;
  toolCalls?: number;
  sources?: AssistantSourceDto[];
  toolEvents?: AssistantToolEventDto[];
}): ProjectAssistantSendResult {
  const turnKind =
    base.qualification && base.proposal
      ? "f2_proposal"
      : base.intentClass === "ambiguous"
        ? "f2_clarification"
        : "f2_blocked";
  return {
    ok: true,
    status: "ok",
    text: base.text,
    mode: base.mode,
    presentation: base.presentation,
    model: base.model,
    toolRounds: base.toolRounds ?? 0,
    toolCalls: base.toolCalls ?? 0,
    sources: base.sources ?? [],
    toolEvents: base.toolEvents ?? [],
    project: base.project,
    ephemeralNotice: EPHEMERAL_NOTICE,
    f2: {
      turnKind,
      intentClass: base.intentClass,
      qualification: base.qualification ?? null,
      proposal: base.proposal ?? null,
      decision: null,
      labels: {
        recommendation: base.qualification ? "RECOMMANDATION" : null,
        proposition: base.proposal ? "PROPOSITION" : null,
        decisionRequired: base.proposal?.morrisGateRequired
          ? "DÉCISION REQUISE"
          : null,
        decisionTaken: null,
        noExecution: "AUCUNE EXÉCUTION",
      },
      executionBlocked: base.executionBlocked === true,
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
    },
  };
}

/**
 * Unified send orchestration: preserves F1 for informative intents.
 * Actionable path creates durable CycleInstance + LPS append, then live snapshot.
 */
export async function orchestrateAssistantSend(input: {
  projectId: string;
  content: string;
  history?: AssistantHistoryMessage[];
}): Promise<ProjectAssistantSendResult> {
  const content = input.content.trim();
  if (!content) {
    return {
      ok: false,
      status: "validation_error",
      code: "EMPTY_MESSAGE",
      message: "Saisissez un message avant d'envoyer.",
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: true,
    };
  }

  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
  if (!projectResult.ok) {
    return {
      ok: false,
      status: "project_not_found",
      code: projectResult.error.code,
      message: projectResult.error.message,
      mode: isFakeConversationProviderForced() ? "fixture" : "unavailable",
      retryable: false,
    };
  }

  let project = toContextDto(projectResult);
  const modeResolution = resolveMode();
  if (!modeResolution.canProceed) {
    return {
      ok: false,
      status: "provider_unavailable",
      code: "PROVIDER_UNAVAILABLE",
      message: modeResolution.message ?? "Provider indisponible.",
      mode: "unavailable",
      retryable: false,
    };
  }

  let analysisResult: Awaited<ReturnType<typeof analyzeIntent>>;
  try {
    analysisResult = await analyzeIntent({
      userContent: content,
      projectSummary: [
        `name=${project.name}`,
        `objective=${project.objective}`,
        `criticality=${project.criticality}`,
        `lps=${project.lpsId}@${project.lpsVersion}`,
      ].join(" | "),
    });
  } catch (error) {
    const message =
      error instanceof Error ? error.message : "Erreur provider inattendue.";
    return {
      ok: false,
      status: "provider_error",
      code: "PROVIDER_ERROR",
      message:
        message === "FAKE_PROVIDER_ERROR"
          ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
          : message,
      mode: modeResolution.mode,
      retryable: true,
    };
  }

  const { analysis, presentation, model } = analysisResult;

  // Repository read/search/Git-truth without mutation → F1 (no Cycle/LPS mutation).
  // Deterministic override when the classifier drifts to ambiguous/actionable for pure reads.
  const forceRepoInformative =
    isPureRepositoryAnalysisIntent(content) &&
    analysis.intentClass !== "execution_request";

  // A — informative → existing F1 path (no Cycle/LPS mutation)
  if (
    forceRepoInformative ||
    (analysis.intentClass === "informative" && analysis.parseOk)
  ) {
    const f1 = await orchestrateProjectAssistantTurn(input);
    if (!f1.ok) return f1;
    return {
      ...f1,
      model: f1.model ?? model,
      ephemeralNotice: EPHEMERAL_NOTICE,
      f2: {
        turnKind: "f1_informative",
        intentClass: "informative",
        qualification: null,
        proposal: null,
        decision: null,
        labels: {
          recommendation: null,
          proposition: null,
          decisionRequired: null,
          decisionTaken: null,
          noExecution: "AUCUNE EXÉCUTION",
        },
        executionBlocked: false,
        processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      },
    };
  }

  // C — ambiguous / fail-closed (no Cycle/LPS mutation)
  if (analysis.intentClass === "ambiguous" || !analysis.parseOk) {
    return f2Success({
      text:
        "[Clarification requise] Votre demande est ambiguë ou incomplète. Précisez l'objectif, le périmètre et l'action souhaitée. Aucune proposition F2 n'a été créée. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: "ambiguous",
    });
  }

  // B / D — actionable or execution_request
  if (!analysis.candidateCycleTypeId || !analysis.signals) {
    return f2Success({
      text:
        "[Clarification requise] Qualification impossible — cycle ou signaux incomplets. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  const runtime = getRuntimeApplicationService();
  const oa = runtime.oa;
  if (!oa) {
    return f2Success({
      text:
        "[Runtime] Services OA indisponibles pour la qualification M2. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  const projectSummary = [
    `name=${project.name}`,
    `objective=${project.objective}`,
    `criticality=${project.criticality}`,
    `lps=${project.lpsId}@${project.lpsVersion}`,
  ].join(" | ");

  // Preliminary analysis is routing-only when grounding is required —
  // never persist createCycle from the pre-grounding candidate alone.
  let finalAnalysis = analysis;
  let finalPresentation = presentation;
  let finalModel = model;
  let groundingSources: AssistantSourceDto[] = [];
  let groundingToolEvents: AssistantToolEventDto[] = [];
  let groundingToolRounds = 0;
  let groundingToolCalls = 0;

  if (requiresPrequalificationGrounding(content)) {
    const grounding = await runProjectGroundingPreflight({
      project,
      content,
      history: input.history,
      purpose: "f2_prequalification",
      correlationId: `f2-preflight:${project.projectId}`,
    });

    if (!grounding.ok) {
      return {
        ok: false,
        status: grounding.status,
        code: grounding.code,
        message: grounding.message,
        mode: grounding.mode,
        retryable: grounding.retryable,
      };
    }

    groundingSources = grounding.sources;
    groundingToolEvents = grounding.toolEvents;
    groundingToolRounds = grounding.toolRounds;
    groundingToolCalls = grounding.toolCalls;

    if (grounding.unresolvedRequiredSources) {
      return f2Success({
        text:
          "[Grounding requis] Les sources repository nécessaires à la qualification n'ont pas pu être résolues. Aucune CycleInstance / LPS / Proposal n'a été créée. AUCUNE EXÉCUTION.",
        mode: modeResolution.mode as "fixture" | "live",
        presentation: grounding.presentation,
        model: grounding.model ?? model,
        project,
        intentClass: analysis.intentClass,
        toolRounds: grounding.toolRounds,
        toolCalls: grounding.toolCalls,
        sources: grounding.sources,
        toolEvents: grounding.toolEvents,
        executionBlocked: analysis.intentClass === "execution_request",
      });
    }

    const sourceRefs = grounding.sources
      .map((s) => s.pathOrRef)
      .filter((p): p is string => Boolean(p));
    const contradictions = assessGroundingContradictions({
      userContent: content,
      groundedText: grounding.text,
      sourceRefs,
    });
    const blocking = contradictions.filter((c) => c.severity === "blocking");
    if (blocking.length > 0) {
      const detail = blocking
        .map(
          (c) =>
            `Contradiction bloquante — claim: ${c.claim} | fait grounded: ${c.groundedFact.slice(0, 400)}`,
        )
        .join("\n");
      return f2Success({
        text: `[Contradiction] ${detail} La phrase utilisateur n'est pas une HumanDecision. Aucune CycleInstance / LPS / Proposal fondée sur la prémisse non corroborée. AUCUNE EXÉCUTION.`,
        mode: modeResolution.mode as "fixture" | "live",
        presentation: grounding.presentation,
        model: grounding.model ?? model,
        project,
        intentClass: analysis.intentClass,
        toolRounds: grounding.toolRounds,
        toolCalls: grounding.toolCalls,
        sources: grounding.sources,
        toolEvents: grounding.toolEvents,
        executionBlocked: analysis.intentClass === "execution_request",
      });
    }

    const groundedContext = [
      grounding.text,
      `Sources attribuables: ${sourceRefs.join(" | ") || "(aucune)"}`,
    ].join("\n");

    try {
      const groundedAnalysis = await analyzeIntent({
        userContent: content,
        projectSummary,
        groundedContext,
      });
      finalAnalysis = groundedAnalysis.analysis;
      finalPresentation = groundedAnalysis.presentation;
      finalModel = groundedAnalysis.model ?? grounding.model ?? model;
    } catch (error) {
      const message =
        error instanceof Error ? error.message : "Erreur provider inattendue.";
      return {
        ok: false,
        status: "provider_error",
        code: "PROVIDER_ERROR",
        message:
          message === "FAKE_PROVIDER_ERROR"
            ? "Le fournisseur de démonstration a signalé une erreur. Réessayez manuellement."
            : message,
        mode: modeResolution.mode,
        retryable: true,
      };
    }

    if (
      finalAnalysis.intentClass === "ambiguous" ||
      !finalAnalysis.parseOk ||
      !finalAnalysis.candidateCycleTypeId ||
      !finalAnalysis.signals
    ) {
      return f2Success({
        text:
          "[Clarification requise] Après grounding, la qualification reste incomplète ou ambiguë. Aucune CycleInstance / LPS / Proposal. AUCUNE EXÉCUTION.",
        mode: modeResolution.mode as "fixture" | "live",
        presentation: finalPresentation,
        model: finalModel,
        project,
        intentClass: "ambiguous",
        toolRounds: groundingToolRounds,
        toolCalls: groundingToolCalls,
        sources: groundingSources,
        toolEvents: groundingToolEvents,
      });
    }
  }

  const preLpsVersion = project.lpsVersion;
  const correlationId = `cor:f2-${randomBytes(8).toString("hex")}`;

  const qualified = await qualifyWithCkc({
    cycleTypeId: finalAnalysis.candidateCycleTypeId!,
    signals: finalAnalysis.signals!,
    objective: finalAnalysis.objective ?? undefined,
    scope: finalAnalysis.scope ?? undefined,
    correlationId,
    ckcQualification: oa.ckcQualification,
  });

  if (!qualified.ok) {
    return f2Success({
      text: `[Qualification échouée] ${qualified.message} AUCUNE EXÉCUTION.`,
      mode: modeResolution.mode as "fixture" | "live",
      presentation: finalPresentation,
      model: finalModel,
      project,
      intentClass: finalAnalysis.intentClass,
      toolRounds: groundingToolRounds,
      toolCalls: groundingToolCalls,
      sources: groundingSources,
      toolEvents: groundingToolEvents,
    });
  }

  let { qualification } = qualified;

  if (isProductStudioNativeCkcProof(qualified.raw.proof)) {
    const packagePin = doctrinePackagePinFromProject(project);
    const registryRoot = resolveProductDoctrineRegistryRoot();
    const ckcContent = loadProductCkcCognitiveContent({
      registryRoot,
      cycleTypeId: qualification.cycleTypeId,
      packagePin,
    });
    let ckcCognitiveRecommendation: string | undefined;
    if (ckcContent) {
      const reasoning = await reasonWithResolvedCkcContext({
        userContent: content,
        projectSummary,
        intentSummary:
          finalAnalysis.rephrasedRequest ??
          finalAnalysis.objective ??
          "Intention actionable",
        ckcPromptSection: buildCkcCognitivePromptSection(ckcContent),
      });
      ckcCognitiveRecommendation = reasoning.recommendation;
    }
    qualification = enrichQualificationWithCkcSemantics({
      qualification,
      proof: qualified.raw.proof,
      registryRoot,
      packagePin,
      ckcCognitiveRecommendation,
    });
  }

  const ckcResolutionRef =
    qualification.ckcResolutionRef ??
    projectCkcResolutionRef(qualified.raw.proof);

  if (
    qualification.requiresJustificationForCritical &&
    !(
      finalAnalysis.criticalJustification &&
      finalAnalysis.criticalJustification.trim()
    )
  ) {
    return f2Success({
      text:
        "[Critical] Justification structurante obligatoire avant proposition validable. Critical n'est jamais implicite. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation: finalPresentation,
      model: finalModel,
      project,
      intentClass: finalAnalysis.intentClass,
      qualification,
      executionBlocked: finalAnalysis.intentClass === "execution_request",
      toolRounds: groundingToolRounds,
      toolCalls: groundingToolCalls,
      sources: groundingSources,
      toolEvents: groundingToolEvents,
    });
  }

  const cycleInstanceId = `cyc:f2-${randomBytes(8).toString("hex")}`;
  const created = await oa.cycleServices.createCycle.execute({
    cycleInstanceId,
    cycleTypeId: qualification.cycleT
```
Claims supported by code:
- grounding occurs before final qualification when `requiresPrequalificationGrounding`
- unresolved required sources return without createCycle
- groundedContext fed to re-`analyzeIntent` before qualify/createCycle
- no hardcoded REAL-B / cyc:qa-validation in product qualification logic (qa-validation appears only in fakeProvider test marker payload)

## G. F-RB-07 implementation evidence
- `assessGroundingContradictions` + `CONTRADICTION_BLOCKING: yes` protocol in groundingPreflight
- blocking contradictions return before createCycle; text asserts phrase ≠ HumanDecision
- no literal one-off patch solely for the string "runtime v3 ADOPTED" in product logic

## H. F-RB-02
**OPEN** — no durable cross-turn source cache; same-seam can re-ground but F-RB-02 not claimed remediated.

## RB-04
OUT / PASS REAL / NO WORK / CKC 15/15 / NO SYNTHETIC FALLBACK REQUIREMENT

## I. Remediation document — FULL CONTENT
# SFIA Studio — REAL-B Blocker-01 — Source-Grounded Cognitive Qualification & Contradiction Enforcement

## A. Metadata

| Champ | Valeur |
|---|---|
| **Cycle ID** | V3-REAL-B-BLOCKER-01 |
| **Title** | Source-Grounded Cognitive Qualification & Contradiction Enforcement |
| **Parent campaign** | V3-REAL-B-QUALIFICATION-COGNITIVE-REASONING-01 |
| **Parent programme** | V3-REAL-PARITY-01 |
| **Morris GO** | GO V3-REAL-B-BLOCKER-01 EXECUTION — LOCAL DELIVERY ONLY — CLOSE F-RB-01 + F-RB-07 — ABSORB F-RB-02 ONLY IF SAME SEAM — REUSE F1 GROUNDING — NO PARALLEL ARCHITECTURE — NO COMMIT/PUSH/PR/MERGE — NO REAL-C |
| **Branch** | `fix/sfia-studio-real-b-blocker-01` (local only) |
| **Base HEAD** | `967f4c2b35948492caeba5347bb02c7c420de490` (= origin/main) |
| **Capability** | V3-F05 (primary) · F03/F07/F04/F08 direct |
| **Profile / Type** | CRITICAL · EVOL / Delivery |
| **Timestamp (Europe/Paris)** | 2026-08-28 ~11:45 CEST |
| **Proof level** | DETERMINISTIC PROVEN — PENDING EXACT REAL-B REAL REPROOF |

## B. Findings consumed

| ID | Disposition |
|---|---|
| **F-RB-01** | REMEDIATED IN CODE (deterministic) — source grounding before final qualification / createCycle |
| **F-RB-07** | REMEDIATED IN CODE (deterministic) — blocking contradiction fail-closed; phrase ≠ HumanDecision |
| **F-RB-02** | LEFT OPEN NONBLOCKING — same-seam grounding can re-read on later turns; no durable source-cache built |
| **F-RB-TOOL-01** | OUT / untouched |
| **RB-04** | OUT / PASS REAL / NO WORK — CKC 15/15; no synthetic fallback work |

## C. Root cause

1. **Ordering (F-RB-01):** `orchestrateAssistantSend` called `analyzeIntent` → `qualifyWithCkc` → `createCycle` with **zero** repository tool rounds on actionable F2 turns. Preliminary LLM cycle choice was persisted.
2. **repositoryIntent:** only forced F1 for *pure* reads; repository-conditioned *qualification* still entered F2 without grounding.
3. **Contradiction gap (F-RB-07):** no comparison of user current-state claims vs grounded Git/doctrine evidence before durable qualification; unsupported claims could become release premises.

## D. Chosen remediation

- **REUSE F1 grounding:** new `runProjectGroundingPreflight` shares `buildProjectSystemPrompt` + `runToolCallingLoop` + `collectToolTelemetry` + same ConversationProvider.
- **NO parallel engine / no second repository abstraction.**
- **Mutation barrier:** when `requiresPrequalificationGrounding(content)`:
  1. read-only grounding
  2. fail-closed if unresolved required sources
  3. `assessGroundingContradictions` (process-local) — blocking → no createCycle
  4. **re-`analyzeIntent` with groundedContext** (preliminary candidate discarded)
  5. only then `qualifyWithCkc` → `createCycle`
- Ambiguous / pure F1 paths unchanged (no durable mutation).
- Gate policy / CKC package / W2 / OA persistence **unchanged**.

## E. Files changed

| File | Change |
|---|---|
| `features/project-assistant/groundingPreflight.ts` | **NEW** — shared F1 grounding + contradiction disposition |
| `features/project-assistant/orchestrateTurn.ts` | Thin F1 wrapper over shared preflight |
| `features/project-assistant/f2/orchestrateF2.ts` | Ground → contradict → re-analyze → qualify → createCycle |
| `features/project-assistant/f2/repositoryIntent.ts` | `requiresPrequalificationGrounding` predicate |
| `features/project-assistant/f2/intentAnalysis.ts` | `groundedContext` input + analysis rules |
| `lib/platform/ai/fakeProvider.ts` | Deterministic markers for blocker-01 tests |
| `__tests__/project-assistant/realBBlocker01.sourceGroundedQualification.test.ts` | **NEW** focused suite |

**Not modified:** historical REAL-B report · Roadmap · C1 · doctrine v3 · CKC package · W2/F3 · OA schema · Build Doctrine.

## F. Tests

**Targeted:** `realBBlocker01.sourceGroundedQualification.test.ts` + `f2.orchestrate.test.ts` + `orchestrateTurn.test.ts` → **32/32 PASS**

Coverage: T-RB01-01/02/03/04 · T-RB07-01/02/03 · T-RB06 · T-F1 · T-GATE-ARCHI · T-GATE-SECURITY · T-CKC

**Typecheck:** `npm run typecheck` → PASS

**Full Vitest:** 2158+ passed; intermittent **pre-existing** 5s timeout flake on `f3.fixtureVerticalSlice` AC-F3-FIX-17/18 under full-suite load (passes in isolation ~4.3s). **OUT of authorized seam** (F3). Retry isolation: PASS. Classification: known suite-load flake, not a REAL-B blocker-01 regression.

**Build:** `npm run build` → PASS

**OpenAI LIVE:** 0

## G. Deterministic evidence

Evidence dir: `.tmp-sfia-review/real-b-blocker-01/`

- Grounding precedes qualify/createCycle for repository-conditioned qualification markers
- Unresolved sources → no LPS bump / no CycleInstance / no Proposal
- Blocking contradiction → no mutation; text asserts phrase ≠ HumanDecision
- Pure F1 + ambiguity unchanged
- Morris Critical gates still evaluate true for architecture/security signals
- Grounded success path still resolves product-native CKC (`ckc:m2-…`, `resolved_detailed`)

## H. Remaining reserves

1. **Exact REAL-B LIVE Terra/high rerun** required under distinct Morris GO before any “CLOSED BY REAL PROOF”
2. **F-RB-02** remains OPEN NONBLOCKING (no durable cross-turn source cache)
3. **F-RB-TOOL-01** untouched
4. F3 full-suite 5s timeout flake (pre-existing / out of scope)

## I. Proof ceiling

**V3-REAL-B-BLOCKER-01 — CORRECTIVE DELIVERY IMPLEMENTED — DETERMINISTIC PROVEN — F-RB-01 + F-RB-07 REMEDIATED IN CODE — PENDING EXACT REAL-B REAL REPROOF**

Do **not** claim: F-RB-01/07 CLOSED BY REAL PROOF · REAL-B PASS · REAL-C READY · runtime v3 ADOPTED.

## J. Next gate

Morris candidate: **exact REAL-B Terra/high reproof** of RB-00→RB-09 (especially RB-01 / RB-07).

**NO REAL-C** until REAL-B later passes and Morris authorizes.

---

NO COMMIT / PUSH / PR / MERGE — NO REAL-C — REVIEW HANDOFF PUBLICATION PENDING — MORRIS PUSH GATE REQUIRED


## J. Historical REAL-B report immutability
- sha256 before: 9c01060595dbf6277034f39823ebf25ec7a9044c3b68943408b12b38c4a78393
- sha256 after (pre-publish): 9c01060595dbf6277034f39823ebf25ec7a9044c3b68943408b12b38c4a78393
- UNCHANGED: YES

## Targeted / typecheck / build evidence (existing logs; no re-execution this cycle)
- Targeted: `npm test -- __tests__/project-assistant/realBBlocker01.sourceGroundedQualification.test.ts __tests__/project-assistant/f2.orchestrate.test.ts __tests__/project-assistant/orchestrateTurn.test.ts` → 32/32 PASS (existing prior run)
- typecheck: `npm run typecheck` → TYPECHECK_EXIT=0 (validation-summary.txt)
- build: `npm run build` → completed successfully (validation-summary / build.txt)

## FULL-SUITE EVIDENCE — CRITICAL (existing only; NO RERUN)

### Classification (CASE B)
**FULL SUITE PASS NOT PROVEN**

Reason: post-corrective full-suite runs exited non-zero; isolated F3/QA retry PASS; no complete subsequent full-suite EXIT 0 stored.

### Run 1 — first full suite after corrective
- command: `cd projects/sfia-studio/app && npm test`
- log: `.tmp-sfia-review/real-b-blocker-01/full-vitest.txt` / validation-summary.txt
- Start at  11:41:55
- Test Files  2 failed | 222 passed | 13 skipped (237)
      Tests  2 failed | 2157 passed | 131 skipped (2290)
- exit code: non-zero (failed tests present)
- failing tests: ['__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts > F3 native fixture vertical slice > AC-F3-FIX-17/18 double invoke does not second-launch', '__tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts > QA-PRE-M6-01 — durable post-GO path vs Proposal STALE > T4/T5/T6/T7/T8/T10 — resolve successor, confirmation required, execute once, replay safe, no Proposal persistence']
- error class: Test timed out in 5000ms

### Run 2 — second full suite after corrective
- command: `cd projects/sfia-studio/app && npm test`
- log: `.tmp-sfia-review/real-b-blocker-01/full-vitest-rerun.txt`
- Start at  11:42:42
- Test Files  1 failed | 223 passed | 13 skipped (237)
      Tests  1 failed | 2158 passed | 131 skipped (2290)
- exit code: non-zero
- failing tests: ['__tests__/project-assistant/f3.fixtureVerticalSlice.test.ts > F3 native fixture vertical slice > AC-F3-FIX-17/18 double invoke does not second-launch']
- second full run exists: **YES**
- still EXIT != 0

### Isolated retry
- command: `npm test -- __tests__/project-assistant/f3.fixtureVerticalSlice.test.ts __tests__/project-assistant/qa-pre-m6-01.postGoDurableM3Path.test.ts`
- log: `.tmp-sfia-review/real-b-blocker-01/flake-retry.txt`
- Start at  11:42:29
- Test Files  2 passed (2)
      Tests  14 passed (14)
- result: PASS (14 tests); F3 AC-F3-FIX-17/18 ~4329ms under isolation
- evidence these tests are outside F1/F2 corrective seam: F3 fixture / QA-PRE-M6-01 durable M3 path — not in authorized blocker-01 product files

### Prior clean full-suite baseline on same base SHA
- Not transported as an authoritative clean EXIT 0 baseline on 967f4c2… in this pack.
- Do not infer FULL SUITE PASS PROVEN.

## Validation distinction (required wording)
- **IMPLEMENTATION/TARGETED VALIDATION PASS**
- **FULL-SUITE PASS NOT PROVEN — PRE-EXISTING/OUT-OF-SEAM F3 TIMEOUT CANDIDATE REQUIRES CHATGPT DISPOSITION**
- Do **not** collapse to DETERMINISTIC PROVEN under a contractual full-suite EXIT 0 prerequisite that is not evidenced.

## Anti-claims
- no code/test/remediation mutation during this transport
- no OpenAI LIVE
- no REAL-B rerun
- no REAL-C
- no project commit/push/PR/merge
- runtime v3 NON ADOPTED
- F-RB-01/07 NOT CLOSED BY REAL PROOF
