# SFIA Review Pack — FULL (mono-cycle) — F2 Delivery

| Champ | Valeur |
|-------|--------|
| **Rôle** | Cycle 8 — Delivery F2 Qualification + Proposition + Gate SFIA Studio |
| **Synthesis-only** | **NO** |
| **GO Morris exact** | `GO DELIVERY — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO — STANDARD` |
| **Cycle type** | 8 Delivery / profil Standard / typologie INC |
| **Profil SFIA** | Standard |
| **Typologie** | INC |
| **Branch** | `delivery/sfia-studio-f2-qualification-proposal-gate` |
| **Base / HEAD initial** | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| **HEAD final** | `1847fc61f384e13b15651ed914286fe87ac7133c` (unchanged — **no project commit**) |
| **origin/main** | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| **Local worktree** | `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery` |
| **Serveur live 3020 préservé** | **YES** — PID `31748` node/`next-server` left untouched; runtime proof used **3021** |
| **Inbound handoff tip** | `7534cb8cad928e68c3c0044d2ac26fd86f4dc21e` |
| **Inbound handoff blob** | `4a59488350760fcfca25193580cebe577039fd0c` |
| **Timestamp Europe/Paris (CEST)** | 2026-08-10 20:53:35 CEST (+0200) |
| **Timestamp UTC** | 2026-08-10 18:53:35 UTC |
| **Repository** | `mcleland147/sfia-workspace` |
| **CKC Delivery** | `04` absent → fallback `pilots/02-fifteen-cycles-synthetic-map.md` (**candidate/experimental**, **no execution authority**) |

---

## Verdict (exact — PASS form)

```
F2 DELIVERY COMPLETE —
F1 INFORMATIVE PATH PRESERVED —
ACTIONABLE INTENT QUALIFICATION IMPLEMENTED —
NATIVE SFIA CYCLE QUALIFICATION WIRED —
STRUCTURED PROPOSAL IMPLEMENTED —
MORRIS GATE / HUMAN DECISION IMPLEMENTED —
RECOMMENDATION ≠ DECISION ≠ EXECUTION PRESERVED —
PROCESS-LOCAL STALE / NON-PERSISTENCE BOUNDARIES ENFORCED —
USER TRUST / PROVIDER / PROVENANCE STATES VISIBLE —
AC-F2-01..27 PASS —
TARGETED + REGRESSION + TYPECHECK + LINT + BUILD PASS —
NO OPS1 PRODUCT COUPLING —
NO CURSOR / EXECUTIONRUN / GIT WRITE —
NO LIVE OPENAI USED FOR DELIVERY PROOF —
NO PROJECT COMMIT / PUSH / PR / MERGE —
READY FOR CHATGPT REVIEW / MORRIS COMMIT GATE
```

**Statut :** READY FOR REVIEW

**Gate suivant (NOT consumed):**
```
GO COMMIT — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO
```

---

## 0. GO / cycle / truth / inbound

### GO Morris exact (consommé)
`GO DELIVERY — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO — STANDARD`

### Cycle / profil / typologie
- Cycle: **8 Delivery**
- Profil: **Standard**
- Typologie: **INC**

### Branch / Base / HEAD
| Field | Value |
|---|---|
| branch | `delivery/sfia-studio-f2-qualification-proposal-gate` |
| Base / HEAD initial | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| HEAD final | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| origin/main | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| project commits this cycle | **0** |

### Local worktree
`/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery`

### Serveur live 3020 préservé
| Check | Result |
|---|---|
| PID 31748 | `31748 next-server (v15.5.20) ` |
| Listen 3020 | preserved (not killed) |
| F2 runtime proof port | **3021** (fake provider) |

```
COMMAND   PID   USER   FD   TYPE             DEVICE SIZE/OFF NODE NAME
node    31748 morris   13u  IPv6 0x306e457d80db4c7e      0t0  TCP *:cifs (LISTEN)
```

### Sources méthode + CKC fallback
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/...` routing, operating model, guardrails, validation checklist
- `method/.../sfia-v2.5-project-cycles-method-candidate.md` §4.8 Delivery
- **CKC:** `04` Delivery absent → fallback `pilots/02-fifteen-cycles-synthetic-map.md` — **candidate/experimental**, **no execution authority**

### Inbound handoff
| Field | Expected | Observed |
|---|---|---|
| tip | `7534cb8cad928e68c3c0044d2ac26fd86f4dc21e` | **MATCH** (F2 functional design publish) |
| blob | `4a59488350760fcfca25193580cebe577039fd0c` | **MATCH** |
| Conception verdict markers | F2 FUNCTIONAL DESIGN COMPLETE · UX=`DIRECT_DELIVERY` · next GO Delivery | **YES** |

### Conception F2 used
Inbound Full Conception pack (Cycle 2) — contracts A→U consumed as Delivery baseline:
- F1/F2 boundary · trigger A/B/C/D · qualify/propose/gate/decision · process-local · stale · AC-F2-01..27 · Do Not Build · native OA reuse · OPS1 harvest = concept only · UX=`DIRECT_DELIVERY`.

---

## 1. Mini technical plan + architecture / composition locale

### Plan
1. Compose shared OA DecisionServices + MemoryAuthorityResolver into vertical-slice runtime (local process).
2. Add `features/project-assistant/f2/*` pipeline: intent analysis → QualifyCycleWithCkc → structured proposal store → gate policy → HumanDecision record.
3. Wire send path through `orchestrateF2` while preserving F1 informative path via existing `orchestrateTurn`.
4. UI cards on `ProjectAssistantPanel` for qualification / proposal / gate CTAs / process-local disclosure / AUCUNE EXÉCUTION.
5. Extend fake provider with `__F2_*` markers; User Trust mode labels (MODE À CONFIRMER → fixture/live).
6. Tests AC-F2 + importBoundaries + security negatives; fake runtime proof on :3021.

### Architecture / composition locale
```
ProjectAssistantPanel (UI)
  → actions.ts (server): orchestrateAssistantSend / recordF2DecisionAction
    → f2/orchestrateF2.ts
         intentAnalysis → qualify (OA QualifyCycleWithCkc) → gatePolicy → proposalStore
         informative → existing orchestrateTurn (F1)
    → f2/recordDecision.ts
         stale check → OA DecisionServices HumanDecision
         authority evidence registered **server-side only** (client canActAsMorris ignored)
  ← RuntimeApplicationService.oa { decisionServices, authorityResolver, clock }
     from localProjectComposition / vertical-slice-runtime/service.ts
```

**STOP before F3:** no Cursor, no ExecutionRun, no executing/completed/failed, no selectedAgentRef, no git write.

---

## 2. Git status (delivery worktree — uncommitted)

```
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/index.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/
```

### Diff stat
```
 .../ProjectAssistantPanel.test.tsx                 |  22 +-
 .../project-assistant/importBoundaries.test.ts     |  11 +-
 .../importBoundaries.test.ts                       |   1 +
 .../vertical-slice-ui/createProjectUi.test.tsx     |  38 ++-
 .../project-assistant/ProjectAssistantPanel.tsx    | 285 ++++++++++++++++++++-
 .../app/features/project-assistant/actions.ts      | 147 ++++++++++-
 .../app/features/project-assistant/index.ts        |   1 +
 .../features/project-assistant/orchestrateTurn.ts  |   1 +
 .../project-assistant/project-assistant.module.css | 126 +++++++++
 .../app/features/project-assistant/types.ts        |  62 ++++-
 .../app/lib/platform/ai/fakeProvider.ts            | 221 ++++++++++++++++
 .../vertical-slice-core/localProjectComposition.ts |   6 +
 .../app/lib/vertical-slice-runtime/service.ts      |  58 ++++-
 13 files changed, 940 insertions(+), 39 deletions(-)
```

### git diff --check
```
EXIT:0
```

---

## 3. Liste fichiers créés + CONTENTS COMPLETS

Created under `features/project-assistant/f2/` + targeted test:

### CREATED: `projects/sfia-studio/app/features/project-assistant/f2/gatePolicy.ts`

```typescript
/**
 * Deterministic server-side Morris gate policy for F2.
 * Model signals never grant authority.
 */

import type { F2QualificationSignals, IntentAnalysisDto } from "./types";

export type GatePolicyInput = {
  recommendedProfile: string;
  signals: F2QualificationSignals;
  intent: IntentAnalysisDto;
  requestedOperation?: string | null;
};

/**
 * Gate required for Critical / structural / security / irreversible /
 * doctrine / git write surface / PR / merge / branch delete / protected paths.
 */
export function evaluateMorrisGateRequired(input: GatePolicyInput): boolean {
  const { signals, recommendedProfile, intent } = input;
  if (recommendedProfile === "Critical") return true;
  if (signals.structuralChange) return true;
  if (signals.securityImpact) return true;
  if (signals.architectureImpact) return true;
  if (signals.irreversible) return true;
  if (!signals.lowRiskBounded && (signals.dataImpact || signals.structuralChange)) {
    return true;
  }

  const op = (
    input.requestedOperation ??
    intent.requestedOperation ??
    ""
  ).toLowerCase();
  const blob = [
    op,
    intent.objective ?? "",
    intent.scope ?? "",
    intent.rephrasedRequest ?? "",
    ...(intent.risks ?? []),
  ]
    .join(" ")
    .toLowerCase();

  const structuralOps = [
    "push",
    "pull request",
    " create pr",
    "merge",
    "suppression branche",
    "delete branch",
    "doctrine",
    "protected path",
    "chemin protégé",
    "cursor",
    "executionrun",
    "git write",
    "github write",
  ];
  if (structuralOps.some((token) => blob.includes(token.trim()))) {
    return true;
  }

  if (intent.intentClass === "execution_request") {
    // Execution requests may propose, but gate is required when impactful.
    if (
      signals.architectureImpact ||
      signals.securityImpact ||
      signals.structuralChange ||
      signals.irreversible
    ) {
      return true;
    }
  }

  return false;
}

```

### CREATED: `projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts`

```typescript
/**
 * Structured intent analysis via existing ConversationProvider.
 * Provider output is untrusted until server-side validation (fail-closed).
 */

import {
  isFakeConversationProviderForced,
  resolveConversationProvider,
  type ProviderChatMessage,
} from "@/lib/platform/ai";
import { isKnownCycleTypeId } from "@/lib/oa/cycle";
import type {
  F2QualificationSignals,
  IntentAnalysisDto,
  IntentClass,
} from "./types";

const INTENT_CLASSES: readonly IntentClass[] = [
  "informative",
  "actionable",
  "ambiguous",
  "execution_request",
] as const;

const SIGNAL_KEYS = [
  "structuralChange",
  "securityImpact",
  "architectureImpact",
  "dataImpact",
  "irreversible",
  "lowRiskBounded",
] as const;

const MAX_STRING = 2000;
const MAX_ARRAY = 12;

function clip(value: unknown, max = MAX_STRING): string | null {
  if (typeof value !== "string") return null;
  const trimmed = value.trim();
  if (!trimmed) return null;
  return trimmed.length <= max ? trimmed : trimmed.slice(0, max);
}

function clipArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((item): item is string => typeof item === "string")
    .map((item) => item.trim())
    .filter(Boolean)
    .slice(0, MAX_ARRAY)
    .map((item) => (item.length <= 500 ? item : item.slice(0, 500)));
}

function ambiguousFallback(partial?: Partial<IntentAnalysisDto>): IntentAnalysisDto {
  return {
    intentClass: "ambiguous",
    candidateCycleTypeId: null,
    signals: null,
    objective: partial?.objective ?? null,
    scope: partial?.scope ?? null,
    rephrasedRequest: partial?.rephrasedRequest ?? null,
    outOfScope: partial?.outOfScope ?? [],
    risks: partial?.risks ?? [],
    reservations: partial?.reservations ?? [],
    stopConditions: partial?.stopConditions ?? [],
    activatedBlocks: partial?.activatedBlocks ?? [],
    expectedOutcome: partial?.expectedOutcome ?? null,
    criticalJustification: partial?.criticalJustification ?? null,
    requestedOperation: partial?.requestedOperation ?? null,
    parseOk: false,
  };
}

function parseSignals(raw: unknown): F2QualificationSignals | null {
  if (!raw || typeof raw !== "object") return null;
  const obj = raw as Record<string, unknown>;
  const out: Partial<F2QualificationSignals> = {};
  for (const key of SIGNAL_KEYS) {
    if (typeof obj[key] !== "boolean") return null;
    out[key] = obj[key] as boolean;
  }
  return out as F2QualificationSignals;
}

function extractJsonObject(text: string): unknown | null {
  const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
  const candidate = fenced?.[1]?.trim() ?? text.trim();
  const start = candidate.indexOf("{");
  const end = candidate.lastIndexOf("}");
  if (start < 0 || end <= start) return null;
  try {
    return JSON.parse(candidate.slice(start, end + 1));
  } catch {
    return null;
  }
}

export function validateIntentAnalysisPayload(raw: unknown): IntentAnalysisDto {
  if (!raw || typeof raw !== "object") return ambiguousFallback();
  const obj = raw as Record<string, unknown>;
  const intentClass = obj.intentClass;
  if (
    typeof intentClass !== "string" ||
    !INTENT_CLASSES.includes(intentClass as IntentClass)
  ) {
    return ambiguousFallback();
  }

  let candidateCycleTypeId: string | null = null;
  if (obj.candidateCycleTypeId != null) {
    const id = clip(obj.candidateCycleTypeId, 120);
    if (!id || !isKnownCycleTypeId(id)) {
      return ambiguousFallback({
        intentClass: intentClass as IntentClass,
        parseOk: false,
      } as Partial<IntentAnalysisDto>);
    }
    candidateCycleTypeId = id;
  }

  const signals = parseSignals(obj.signals);
  const needsSignals =
    intentClass === "actionable" || intentClass === "execution_request";
  if (needsSignals && !signals) {
    return ambiguousFallback();
  }

  return {
    intentClass: intentClass as IntentClass,
    candidateCycleTypeId,
    signals,
    objective: clip(obj.objective),
    scope: clip(obj.scope),
    rephrasedRequest: clip(obj.rephrasedRequest),
    outOfScope: clipArray(obj.outOfScope),
    risks: clipArray(obj.risks),
    reservations: clipArray(obj.reservations),
    stopConditions: clipArray(obj.stopConditions),
    activatedBlocks: clipArray(obj.activatedBlocks),
    expectedOutcome: clip(obj.expectedOutcome),
    criticalJustification: clip(obj.criticalJustification),
    requestedOperation: clip(obj.requestedOperation, 240),
    parseOk: true,
  };
}

const ANALYSIS_SYSTEM = `Tu analyses l'intention utilisateur pour SFIA Studio F2.
Réponds UNIQUEMENT avec un JSON compact (pas de markdown) de forme:
{"intentClass":"informative|actionable|ambiguous|execution_request","candidateCycleTypeId":"cyc:... "|null,"signals":{"structuralChange":bool,"securityImpact":bool,"architectureImpact":bool,"dataImpact":bool,"irreversible":bool,"lowRiskBounded":bool}|null,"objective":"...","scope":"...","rephrasedRequest":"...","outOfScope":[],"risks":[],"reservations":[],"stopConditions":[],"activatedBlocks":[],"expectedOutcome":"...","criticalJustification":null,"requestedOperation":null}
Règles: ne décide jamais un GO Morris; ne propose jamais d'exécution; cycleTypeId doit être un id catalogue connu; pour informative, signals peut être null.`;

export async function analyzeIntent(input: {
  userContent: string;
  projectSummary: string;
}): Promise<{
  analysis: IntentAnalysisDto;
  presentation: "test_provider" | "openai_live";
  model: string | null;
  rawText: string;
}> {
  const provider = resolveConversationProvider();
  const presentation =
    isFakeConversationProviderForced() || provider.providerId === "fake-test"
      ? "test_provider"
      : "openai_live";

  const messages: ProviderChatMessage[] = [
    { role: "system", content: ANALYSIS_SYSTEM },
    {
      role: "user",
      content: `Contexte projet:\\n${input.projectSummary}\\n\\nDemande:\\n${input.userContent}`,
    },
  ];

  const completion = await provider.complete(messages);
  const parsed = extractJsonObject(completion.text);
  const analysis = validateIntentAnalysisPayload(parsed);
  return {
    analysis,
    presentation,
    model: completion.usage?.model ?? null,
    rawText: completion.text,
  };
}

```

### CREATED: `projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts`

```typescript
/**
 * F2 pipeline: intent → qualify → proposal / clarification.
 * Stops before any execution.
 */

import { randomUUID } from "node:crypto";
import {
  getLiveConversationAvailability,
  isFakeConversationProviderForced,
} from "@/lib/platform/ai";
import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
import type {
  AssistantHistoryMessage,
  ProjectAssistantContextDto,
  ProjectAssistantSendResult,
} from "../types";
import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
import { analyzeIntent } from "./intentAnalysis";
import { evaluateMorrisGateRequired } from "./gatePolicy";
import { qualifyWithCkc } from "./qualify";
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
  "Conversation et propositions éphémères (process-local) — un rechargement ou redémarrage peut tout effacer. Aucune persistence produit. AUCUNE EXÉCUTION.";

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
  };
}

function snapshotFrom(project: ProjectAssistantContextDto): F2ContextSnapshot {
  return {
    projectId: project.projectId,
    lpsId: project.lpsId,
    lpsVersion: project.lpsVersion,
    doctrineDigest: project.doctrineDigest,
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
    toolRounds: 0,
    toolCalls: 0,
    sources: [],
    toolEvents: [],
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

  const project = toContextDto(projectResult);
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

  // A — informative → existing F1 path
  if (analysis.intentClass === "informative" && analysis.parseOk) {
    const f1 = await orchestrateProjectAssistantTurn(input);
    if (!f1.ok) return f1;
    return {
      ...f1,
      model: f1.model ?? model,
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

  // C — ambiguous / fail-closed
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

  const qualified = await qualifyWithCkc({
    cycleTypeId: analysis.candidateCycleTypeId,
    signals: analysis.signals,
    objective: analysis.objective ?? undefined,
    scope: analysis.scope ?? undefined,
    correlationId: `f2-qual:${randomUUID()}`,
  });

  if (!qualified.ok) {
    return f2Success({
      text: `[Qualification échouée] ${qualified.message} AUCUNE EXÉCUTION.`,
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
    });
  }

  const { qualification } = qualified;

  if (
    qualification.requiresJustificationForCritical &&
    !(analysis.criticalJustification && analysis.criticalJustification.trim())
  ) {
    return f2Success({
      text:
        "[Critical] Justification structurante obligatoire avant proposition validable. Critical n'est jamais implicite. AUCUNE EXÉCUTION.",
      mode: modeResolution.mode as "fixture" | "live",
      presentation,
      model,
      project,
      intentClass: analysis.intentClass,
      qualification,
      executionBlocked: analysis.intentClass === "execution_request",
    });
  }

  const morrisGateRequired = evaluateMorrisGateRequired({
    recommendedProfile: qualification.recommendedProfile,
    signals: analysis.signals,
    intent: analysis,
  });

  const status = morrisGateRequired ? "DECISION_REQUIRED" : "READY_NO_GATE";
  const proposal = saveProposal(
    buildProposal({
      intent: analysis,
      qualification,
      project,
      morrisGateRequired,
      executionRequest: analysis.intentClass === "execution_request",
      status,
    }),
  );

  const executionBlocked = analysis.intentClass === "execution_request";
  const textParts = [
    presentation === "test_provider" ? "[TEST/FAKE · NON LIVE]" : "[LIVE]",
    "Qualification SFIA et proposition structurée générées.",
    `Cycle: ${qualification.cycleTypeId} (${qualification.cycleLabel}).`,
    `Profil recommandé: ${qualification.recommendedProfile}.`,
    qualification.recommendationLabel,
    morrisGateRequired
      ? "DÉCISION REQUISE — gate Morris ouvert."
      : "NO MORRIS GATE REQUIRED — AUCUNE EXÉCUTION — F2 S'ARRÊTE ICI.",
    executionBlocked
      ? "Demande d'exécution détectée — AUCUNE EXÉCUTION (Cursor/PR/merge indisponibles)."
      : "AUCUNE EXÉCUTION.",
  ];

  return f2Success({
    text: textParts.join(" "),
    mode: modeResolution.mode as "fixture" | "live",
    presentation,
    model,
    project,
    intentClass: analysis.intentClass,
    qualification,
    proposal,
    executionBlocked,
  });
}

```

### CREATED: `projects/sfia-studio/app/features/project-assistant/f2/proposalStore.ts`

```typescript
/**
 * Process-local F2 proposal store (no durable persistence).
 */

import { randomUUID } from "node:crypto";
import type { ProposalDto, F2ContextSnapshot, F2ProposalStatus } from "./types";

const STORE_KEY = "__SFIA_F2_PROPOSAL_STORE__" as const;

type StoreSlot = {
  byId: Map<string, ProposalDto>;
};

function getSlot(): StoreSlot {
  const g = globalThis as typeof globalThis & { [STORE_KEY]?: StoreSlot };
  if (!g[STORE_KEY]) {
    g[STORE_KEY] = { byId: new Map() };
  }
  return g[STORE_KEY];
}

export const F2_PROCESS_LOCAL_NOTICE =
  "Proposition process-local — non persistée. Un redémarrage efface propositions et décisions. Aucune autorisation durable.";

export function createProposalId(): string {
  return `prop:f2:${randomUUID()}`;
}

export function saveProposal(proposal: ProposalDto): ProposalDto {
  const frozen = Object.freeze({
    ...proposal,
    outOfScope: Object.freeze([...proposal.outOfScope]) as string[],
    activatedBlocks: Object.freeze([...proposal.activatedBlocks]) as string[],
    sources: Object.freeze([...proposal.sources]) as string[],
    risks: Object.freeze([...proposal.risks]) as string[],
    reservations: Object.freeze([...proposal.reservations]) as string[],
    stopConditions: Object.freeze([...proposal.stopConditions]) as string[],
    contextSnapshot: Object.freeze({ ...proposal.contextSnapshot }),
  }) as ProposalDto;
  getSlot().byId.set(frozen.proposalId, frozen);
  return frozen;
}

export function getProposal(proposalId: string): ProposalDto | null {
  return getSlot().byId.get(proposalId) ?? null;
}

export function updateProposalStatus(
  proposalId: string,
  status: F2ProposalStatus,
  patch: Partial<ProposalDto> = {},
): ProposalDto | null {
  const existing = getProposal(proposalId);
  if (!existing) return null;
  return saveProposal({ ...existing, ...patch, status, proposalId });
}

export function markProposalStale(proposalId: string): ProposalDto | null {
  return updateProposalStatus(proposalId, "STALE");
}

export function contextMatches(
  snapshot: F2ContextSnapshot,
  current: F2ContextSnapshot,
): boolean {
  return (
    snapshot.projectId === current.projectId &&
    snapshot.lpsId === current.lpsId &&
    snapshot.lpsVersion === current.lpsVersion &&
    snapshot.doctrineDigest === current.doctrineDigest
  );
}

/** Test-only reset. */
export function resetF2ProposalStoreForTests(): void {
  const allowed =
    process.env.NODE_ENV === "test" ||
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET === "1";
  if (!allowed) {
    throw new Error("resetF2ProposalStoreForTests only allowed in tests.");
  }
  getSlot().byId.clear();
}

```

### CREATED: `projects/sfia-studio/app/features/project-assistant/f2/qualify.ts`

```typescript
/**
 * Native SFIA qualification via QualifyCycleWithCkc (recommendation only).
 */

import {
  CYCLE_TYPE_CATALOG_FINGERPRINT,
  CYCLE_TYPE_CATALOG_VERSION,
  createCkcQualificationServices,
  type CkcQualificationSuccessResult,
} from "@/lib/oa/cycle";
import type { F2QualificationSignals, QualificationDto } from "./types";

export async function qualifyWithCkc(input: {
  cycleTypeId: string;
  signals: F2QualificationSignals;
  objective?: string;
  scope?: string;
  correlationId: string;
}): Promise<
  | { ok: true; qualification: QualificationDto; raw: CkcQualificationSuccessResult }
  | { ok: false; code: string; message: string }
> {
  const services = createCkcQualificationServices();
  const result = await services.qualifyCycleWithCkc.execute({
    cycleTypeId: input.cycleTypeId,
    catalogVersion: CYCLE_TYPE_CATALOG_VERSION,
    catalogHash: CYCLE_TYPE_CATALOG_FINGERPRINT,
    correlationId: input.correlationId,
    signals: input.signals,
    objective: input.objective,
    scope: input.scope,
  });

  if (result.state !== "success") {
    return {
      ok: false,
      code: result.code,
      message: result.message,
    };
  }

  const qualification: QualificationDto = {
    cycleTypeId: result.cycleTypeId,
    cycleLabel: result.label,
    recommendedProfile: result.recommendedProfile,
    rationale: result.rationale,
    criticalSignalsPresent: result.criticalSignalsPresent,
    requiresJustificationForCritical: result.requiresJustificationForCritical,
    capitalizationViaCycleTypeId: result.capitalizationViaCycleTypeId,
    isMorrisDecision: false,
    catalogVersion: result.catalogVersion,
    catalogHash: result.catalogHash,
    detailedStatus: result.detailedStatus,
    disclosures: [...result.disclosures],
    signals: input.signals,
    recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS",
  };

  return { ok: true, qualification, raw: result };
}

```

### CREATED: `projects/sfia-studio/app/features/project-assistant/f2/recordDecision.ts`

```typescript
/**
 * Record Morris-gate HumanDecision via OA DecisionServices.
 * Authority evidence is registered server-side only.
 */

import { randomUUID } from "node:crypto";
import type { DecisionServices, MemoryAuthorityResolver } from "@/lib/oa/decision";
import type {
  DecisionDto,
  F2ContextSnapshot,
  F2DecisionKind,
  ProposalDto,
} from "./types";
import {
  contextMatches,
  getProposal,
  markProposalStale,
  updateProposalStatus,
} from "./proposalStore";

export const LOCAL_MORRIS_ACTOR = Object.freeze({
  actorId: "actor:local-morris-demo",
  role: "decision_maker" as const,
  displayName: "Local Morris demo",
  authorityLevel: "none" as const,
});

export const LOCAL_MORRIS_EVIDENCE_SOURCE =
  "LOCAL_PROCESS_MORRIS_DEMO_AUTHORITY" as const;

export function proposalScope(proposal: ProposalDto): string {
  return `f2-proposal:${proposal.proposalId}`;
}

function mapStatus(kind: F2DecisionKind): {
  proposalStatus:
    | "APPROVED"
    | "APPROVED_WITH_RESERVES"
    | "REFUSED"
    | "AMENDMENT_REQUIRED";
  selectedOptionId: string;
  humanStatus: "accepted" | "refused" | "amended";
} {
  switch (kind) {
    case "GO":
      return {
        proposalStatus: "APPROVED",
        selectedOptionId: "opt:go",
        humanStatus: "accepted",
      };
    case "GO_WITH_RESERVES":
      return {
        proposalStatus: "APPROVED_WITH_RESERVES",
        selectedOptionId: "opt:go-reserves",
        humanStatus: "accepted",
      };
    case "NO_GO":
      return {
        proposalStatus: "REFUSED",
        selectedOptionId: "opt:no-go",
        humanStatus: "refused",
      };
    case "AMEND":
      return {
        proposalStatus: "AMENDMENT_REQUIRED",
        selectedOptionId: "opt:amend",
        humanStatus: "amended",
      };
  }
}

export async function recordF2Decision(input: {
  proposalId: string;
  projectId: string;
  decisionKind: F2DecisionKind;
  reservesText?: string | null;
  /** Hostile client fields — ignored. */
  canActAsMorris?: unknown;
  claimedAuthorityLevel?: unknown;
  currentContext: F2ContextSnapshot;
  decisionServices: DecisionServices;
  authorityResolver: MemoryAuthorityResolver;
  nowIso: () => string;
}): Promise<
  | {
      ok: true;
      decision: DecisionDto;
      proposal: ProposalDto;
    }
  | {
      ok: false;
      code: string;
      message: string;
      proposal?: ProposalDto | null;
    }
> {
  // Never trust client authority claims.
  void input.canActAsMorris;
  void input.claimedAuthorityLevel;

  const proposal = getProposal(input.proposalId);
  if (!proposal) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_FOUND",
      message:
        "Proposition introuvable (process-local). Aucune autorisation durable après redémarrage.",
    };
  }

  if (proposal.contextSnapshot.projectId !== input.projectId) {
    return {
      ok: false,
      code: "PROJECT_MISMATCH",
      message: "La proposition n'appartient pas à ce projet.",
      proposal,
    };
  }

  if (!contextMatches(proposal.contextSnapshot, input.currentContext)) {
    const stale = markProposalStale(proposal.proposalId);
    return {
      ok: false,
      code: "STALE",
      message:
        "Contexte Project/LPS modifié — proposition STALE. Aucun GO silencieux.",
      proposal: stale,
    };
  }

  if (
    proposal.status === "STALE" ||
    proposal.status === "REFUSED" ||
    proposal.status === "AMENDMENT_REQUIRED" ||
    proposal.status === "APPROVED" ||
    proposal.status === "APPROVED_WITH_RESERVES"
  ) {
    return {
      ok: false,
      code: "PROPOSAL_NOT_DECIDABLE",
      message: `Proposition non décidable (statut ${proposal.status}).`,
      proposal,
    };
  }

  if (!proposal.morrisGateRequired) {
    return {
      ok: false,
      code: "GATE_NOT_REQUIRED",
      message: "Aucun gate Morris requis pour cette proposition.",
      proposal,
    };
  }

  if (
    input.decisionKind === "GO_WITH_RESERVES" &&
    !(input.reservesText && input.reservesText.trim())
  ) {
    return {
      ok: false,
      code: "RESERVES_REQUIRED",
      message: "GO WITH RESERVES exige un texte de réserves explicite.",
      proposal,
    };
  }

  const scope = proposalScope(proposal);
  const evidenceId = `evd:f2-morris:${proposal.proposalId}:${randomUUID()}`;
  const issuedAt = input.nowIso();

  try {
    input.authorityResolver.register({
      evidenceId,
      actorId: LOCAL_MORRIS_ACTOR.actorId,
      level: "N3",
      scope,
      issuedAt,
      source: LOCAL_MORRIS_EVIDENCE_SOURCE,
      canActAsMorris: true,
    });
  } catch (error) {
    return {
      ok: false,
      code: "AUTHORITY_REGISTER_FAILED",
      message:
        error instanceof Error
          ? error.message
          : "Échec enregistrement evidence Morris locale.",
      proposal,
    };
  }

  const mapped = mapStatus(input.decisionKind);
  const decisionId = `dec:f2:${randomUUID()}`;
  const options = [
    { optionId: "opt:go", label: "GO" },
    { optionId: "opt:go-reserves", label: "GO WITH RESERVES" },
    { optionId: "opt:no-go", label: "NO-GO" },
    { optionId: "opt:amend", label: "AMEND" },
  ];

  const reservations =
    input.decisionKind === "GO_WITH_RESERVES"
      ? [
          {
            reservationId: `rsv:${randomUUID()}`,
            statement: input.reservesText!.trim(),
            blocking: false,
          },
        ]
      : undefined;

  const result = await input.decisionServices.recordHumanDecision.execute({
    decisionId,
    projectId: input.projectId,
    subject: `F2 gate for ${proposal.proposalId}`,
    options,
    selectedOptionId: mapped.selectedOptionId,
    actor: LOCAL_MORRIS_ACTOR,
    authority: "morris",
    status: mapped.humanStatus,
    reversible: true,
    scope,
    reservations,
    rationale: `F2 ${input.decisionKind} on ${proposal.proposalId}`,
    authorityEvidenceId: evidenceId,
    correlationId: `f2-dec:${proposal.proposalId}`,
  });

  if (!result.ok) {
    return {
      ok: false,
      code: result.error.detailCode,
      message: result.error.message,
      proposal,
    };
  }

  const updated = updateProposalStatus(proposal.proposalId, mapped.proposalStatus);
  const decision: DecisionDto = {
    decisionId,
    proposalId: proposal.proposalId,
    kind: input.decisionKind,
    statusLabel: "DÉCISION PRISE",
    humanDecisionStatus: mapped.humanStatus,
    scope,
    reservesText:
      input.decisionKind === "GO_WITH_RESERVES"
        ? input.reservesText!.trim()
        : null,
    capturedAt: issuedAt,
    readyForNextGatedStep:
      input.decisionKind === "GO" || input.decisionKind === "GO_WITH_RESERVES",
    executionPerformed: false,
  };

  return { ok: true, decision, proposal: updated! };
}

```

### CREATED: `projects/sfia-studio/app/features/project-assistant/f2/types.ts`

```typescript
/**
 * F2 Qualification + Proposal + Gate — process-local DTOs.
 * Recommendation ≠ Decision ≠ Execution.
 */

export type IntentClass =
  | "informative"
  | "actionable"
  | "ambiguous"
  | "execution_request";

export type F2ProposalStatus =
  | "PROPOSED"
  | "DECISION_REQUIRED"
  | "APPROVED"
  | "APPROVED_WITH_RESERVES"
  | "REFUSED"
  | "AMENDMENT_REQUIRED"
  | "STALE"
  | "NEEDS_CLARIFICATION"
  | "BLOCKED_CRITICAL_JUSTIFICATION"
  | "READY_NO_GATE";

export type F2DecisionKind = "GO" | "GO_WITH_RESERVES" | "NO_GO" | "AMEND";

export type F2QualificationSignals = {
  structuralChange: boolean;
  securityImpact: boolean;
  architectureImpact: boolean;
  dataImpact: boolean;
  irreversible: boolean;
  lowRiskBounded: boolean;
};

export type F2ContextSnapshot = {
  projectId: string;
  lpsId: string;
  lpsVersion: number;
  doctrineDigest: string;
};

export type QualificationDto = {
  cycleTypeId: string;
  cycleLabel: string;
  recommendedProfile: string;
  rationale: string;
  criticalSignalsPresent: boolean;
  requiresJustificationForCritical: boolean;
  capitalizationViaCycleTypeId: boolean;
  isMorrisDecision: false;
  catalogVersion: string;
  catalogHash: string;
  detailedStatus: string;
  disclosures: string[];
  signals: F2QualificationSignals;
  recommendationLabel: "RECOMMANDATION — PAS UNE DÉCISION MORRIS";
};

export type ProposalDto = {
  proposalId: string;
  status: F2ProposalStatus;
  rephrasedRequest: string;
  objective: string;
  cycleTypeId: string;
  recommendedProfile: string;
  rationale: string;
  scope: string;
  outOfScope: string[];
  activatedBlocks: string[];
  expectedOutcome: string;
  sources: string[];
  risks: string[];
  reservations: string[];
  stopConditions: string[];
  morrisGateRequired: boolean;
  nextPossibleStep: string;
  contextSnapshot: F2ContextSnapshot;
  processLocalNotice: string;
  executionForbidden: true;
  noExecutingStatus: true;
  /** Explicit F2 denial — never an agent binding. */
  agentBinding: "NOT_AVAILABLE";
  criticalJustification?: string | null;
};

export type DecisionDto = {
  decisionId: string;
  proposalId: string;
  kind: F2DecisionKind;
  statusLabel: "DÉCISION PRISE";
  humanDecisionStatus: string;
  scope: string;
  reservesText: string | null;
  capturedAt: string;
  readyForNextGatedStep: boolean;
  executionPerformed: false;
};

export type IntentAnalysisDto = {
  intentClass: IntentClass;
  candidateCycleTypeId: string | null;
  signals: F2QualificationSignals | null;
  objective: string | null;
  scope: string | null;
  rephrasedRequest: string | null;
  outOfScope: string[];
  risks: string[];
  reservations: string[];
  stopConditions: string[];
  activatedBlocks: string[];
  expectedOutcome: string | null;
  criticalJustification: string | null;
  requestedOperation: string | null;
  parseOk: boolean;
};

export type F2TurnKind =
  | "f1_informative"
  | "f2_clarification"
  | "f2_proposal"
  | "f2_blocked";

export type ProviderTrustDto = {
  presentation: "test_provider" | "openai_live" | "unconfirmed";
  model: string | null;
  mode: "fixture" | "live" | "unavailable" | "unconfirmed";
};

```

### CREATED: `projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts`

```typescript
/** @vitest-environment node */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import {
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
import {
  evaluateMorrisGateRequired,
} from "@/features/project-assistant/f2/gatePolicy";
import {
  resetF2ProposalStoreForTests,
  getProposal,
  saveProposal,
  createProposalId,
  F2_PROCESS_LOCAL_NOTICE,
} from "@/features/project-assistant/f2/proposalStore";
import { validateIntentAnalysisPayload } from "@/features/project-assistant/f2/intentAnalysis";
import { qualifyWithCkc } from "@/features/project-assistant/f2/qualify";
import { recordF2Decision } from "@/features/project-assistant/f2/recordDecision";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const { getProjectRuntimeActionMock } = vi.hoisted(() => ({
  getProjectRuntimeActionMock: vi.fn(),
}));

vi.mock("@/lib/vertical-slice-runtime/actions", async () => {
  const actual = await vi.importActual<
    typeof import("@/lib/vertical-slice-runtime/actions")
  >("@/lib/vertical-slice-runtime/actions");
  return {
    ...actual,
    getProjectRuntimeAction: getProjectRuntimeActionMock,
  };
});

const SUCCESS = {
  ok: true as const,
  project: {
    projectId: "prj:f2-demo",
    name: "Projet F2",
    shortReference: "F2",
    objective: "Tester qualification et gate.",
    contextSummary: "Contexte process-local F2.",
    criticality: "STANDARD" as const,
    constraints: ["Lecture seule"],
    localMode: true as const,
    source: "REAL_LOCAL_CORE" as const,
    fixture: false as const,
  },
  doctrine: {
    id: "pkg:studio-v3-oa",
    version: "1.0.0",
    digest: "digest:f2",
    status: "RESOLVED",
  },
  livingState: {
    id: "lps:f2-demo",
    version: 1 as const,
    createdAt: "2026-08-10T12:00:00.000Z",
  },
  readiness: {
    status: "NOT_READY" as const,
    hard: "OPEN" as const,
    tA6: "INCOMPLETE" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    realAgentExecution: "DISABLED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    runReady: false as const,
    productReady: false as const,
  },
  disclosures: {
    runtimeMode: "LOCAL_PROCESS" as const,
    persistence: "NOT_GUARANTEED" as const,
    agentExecution: "DISABLED" as const,
    iam: "NOT_SELECTED" as const,
    productPersistence: "NOT_SELECTED" as const,
    delivery: "NOT_AUTHORIZED" as const,
    cutover: "NOT_AUTHORIZED" as const,
    localDataVolatile: true as const,
    restartMayLoseState: true as const,
    messages: [] as const,
  },
};

describe("F2 orchestration AC coverage", () => {
  const previousFake = process.env.OPS1_CONVERSATION_PROVIDER;

  beforeEach(() => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    delete process.env.OPENAI_API_KEY;
    delete process.env.OPENAI_MODEL;
    getProjectRuntimeActionMock.mockReset();
    getProjectRuntimeActionMock.mockResolvedValue(SUCCESS);
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    if (previousFake === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
    else process.env.OPS1_CONVERSATION_PROVIDER = previousFake;
  });

  it("AC-F2-01 informative remains F1 without proposal", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Résume l'objectif __F2_INFORMATIVE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f1_informative");
    expect(result.f2?.proposal).toBeNull();
    expect(result.text).toMatch(/TEST\/FAKE/);
  });

  it("AC-F2-02/04/05/06/08/09/10 actionable qualifies and proposes", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Prépare la prochaine étape __F2_ACTIONABLE__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.qualification).toBeTruthy();
    expect(result.f2?.qualification?.isMorrisDecision).toBe(false);
    expect(result.f2?.qualification?.recommendationLabel).toMatch(/RECOMMANDATION/);
    expect(result.f2?.proposal).toBeTruthy();
    expect(result.f2?.proposal?.outOfScope.length).toBeGreaterThan(0);
    expect(result.f2?.labels.noExecution).toBe("AUCUNE EXÉCUTION");
    expect(result.f2?.proposal?.agentBinding).toBe("NOT_AVAILABLE");
    expect(JSON.stringify(result.f2?.proposal)).not.toMatch(/executing|completed|failed/);
  });

  it("AC-F2-03 ambiguous asks clarification without proposal", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Fais le nécessaire __F2_AMBIGUOUS__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.turnKind).toBe("f2_clarification");
    expect(result.f2?.proposal).toBeNull();
    expect(result.text).toMatch(/Clarification/i);
  });

  it("AC-F2-11 critical without justification blocks", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Change sécurité __F2_CRITICAL_NO_JUSTIFICATION__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.proposal).toBeNull();
    expect(result.text).toMatch(/Critical/i);
    expect(result.f2?.qualification?.requiresJustificationForCritical).toBe(true);
  });

  it("AC-F2-12/25 execution request may propose but blocks execution + gate", async () => {
    const result = await orchestrateAssistantSend({
      projectId: "prj:f2-demo",
      content: "Lance Cursor et crée une PR __F2_EXECUTION__",
    });
    expect(result.ok).toBe(true);
    if (!result.ok) return;
    expect(result.f2?.executionBlocked).toBe(true);
    expect(result.f2?.proposal?.morrisGateRequired).toBe(true);
    expect(result.f2?.proposal?.status).toBe("DECISION_REQUIRED");
    expect(result.text).toMatch(/AUCUNE EXÉCUTION/);
  });

  it("fail-closed on invalid JSON / unknown cycle / incomplete signals", () => {
    expect(validateIntentAnalysisPayload(null).intentClass).toBe("ambiguous");
    expect(
      validateIntentAnalysisPayload({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:unknown",
        signals: {
          structuralChange: true,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      }).parseOk,
    ).toBe(false);
    expect(
      validateIntentAnalysisPayload({
        intentClass: "actionable",
        candidateCycleTypeId: "cyc:delivery",
        signals: { structuralChange: true },
      }).parseOk,
    ).toBe(false);
  });

  it("AC-F2-22/23 qualify uses catalog + isMorrisDecision false", async () => {
    const q = await qualifyWithCkc({
      cycleTypeId: "cyc:capitalization",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      correlationId: "cor:test-cap",
    });
    expect(q.ok).toBe(true);
    if (!q.ok) return;
    expect(q.qualification.isMorrisDecision).toBe(false);
    expect(q.qualification.capitalizationViaCycleTypeId).toBe(true);
    expect(q.qualification.recommendedProfile).not.toMatch(/capitalization/i);
  });

  it("gate policy is deterministic server-side", () => {
    const baseIntent = {
      intentClass: "actionable" as const,
      candidateCycleTypeId: "cyc:delivery",
      signals: {
        structuralChange: false,
        securityImpact: false,
        architectureImpact: false,
        dataImpact: false,
        irreversible: false,
        lowRiskBounded: true,
      },
      objective: "x",
      scope: "y",
      rephrasedRequest: "z",
      outOfScope: [],
      risks: [],
      reservations: [],
      stopConditions: [],
      activatedBlocks: [],
      expectedOutcome: null,
      criticalJustification: null,
      requestedOperation: null,
      parseOk: true,
    };
    expect(
      evaluateMorrisGateRequired({
        recommendedProfile: "Standard",
        signals: baseIntent.signals!,
        intent: baseIntent,
      }),
    ).toBe(false);
    expect(
      evaluateMorrisGateRequired({
        recommendedProfile: "Critical",
        signals: baseIntent.signals!,
        intent: baseIntent,
      }),
    ).toBe(true);
    expect(
      evaluateMorrisGateRequired({
        recommendedProfile: "Standard",
        signals: { ...baseIntent.signals!, architectureImpact: true },
        intent: { ...baseIntent, requestedOperation: "create pr" },
      }),
    ).toBe(true);
  });
});

describe("F2 decisions with shared OA stack", () => {
  beforeEach(async () => {
    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
    const runtime = getRuntimeApplicationService({ auditMode: "noop" });
    const created = await runtime.createProject({
      name: "Projet F2 Decision",
      objective: "Décisions Morris process-local",
      context: "Contexte F2 gate",
      criticality: "STANDARD",
      constraints: [],
      shortReference: "F2D",
      idempotencyKey: `f2-dec-${Date.now()}`,
    });
    expect(created.ok).toBe(true);
    if (!created.ok) throw new Error("create failed");
    (globalThis as { __f2ProjectId?: string }).__f2ProjectId =
      created.project.projectId;
    getProjectRuntimeActionMock.mockImplementation(async (projectId: string) => {
      return runtime.getProject(projectId);
    });
  });

  afterEach(() => {
    resetF2ProposalStoreForTests();
    resetRuntimeApplicationServiceForTests();
  });

  async function seedProposal(projectId: string) {
    const runtime = getRuntimeApplicationService();
    const overview = await runtime.getProject(projectId);
    if (!overview.ok) throw new Error("missing project");
    const proposal = saveProposal({
      proposalId: createProposalId(),
      status: "DECISION_REQUIRED",
      rephrasedRequest: "Proposition structurant",
      objective: "Arch change",
      cycleTypeId: "cyc:functional-architecture",
      recommendedProfile: "Standard",
      rationale: "test",
      scope: "architecture",
      outOfScope: ["execution"],
      activatedBlocks: ["gate"],
      expectedOutcome: "decision",
      sources: [],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      morrisGateRequired: true,
      nextPossibleStep: "Décision Morris",
      contextSnapshot: {
        projectId,
        lpsId: overview.livingState.id,
        lpsVersion: overview.livingState.version,
        doctrineDigest: overview.doctrine.digest,
      },
      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
      executionForbidden: true,
      noExecutingStatus: true,
      agentBinding: "NOT_AVAILABLE",
    });
    return { proposal, runtime, overview };
  }

  it("AC-F2-13/14/15/16 GO / NO-GO / AMEND / no execution", async () => {
    const projectId = (globalThis as { __f2ProjectId?: string }).__f2ProjectId!;
    const { proposal, runtime } = await seedProposal(projectId);
    expect(runtime.oa).toBeTruthy();

    const go = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      canActAsMorris: true, // hostile client claim ignored; server registers evidence
      claimedAuthorityLevel: "N3",
      currentContext: proposal.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(go.ok).toBe(true);
    if (!go.ok) return;
    expect(go.decision.executionPerformed).toBe(false);
    expect(go.decision.readyForNextGatedStep).toBe(true);
    expect(go.proposal.status).toBe("APPROVED");

    const { proposal: p2 } = await seedProposal(projectId);
    const noGo = await recordF2Decision({
      proposalId: p2.proposalId,
      projectId,
      decisionKind: "NO_GO",
      currentContext: p2.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(noGo.ok).toBe(true);
    if (!noGo.ok) return;
    expect(noGo.proposal.status).toBe("REFUSED");
    expect(noGo.decision.executionPerformed).toBe(false);

    const { proposal: p3 } = await seedProposal(projectId);
    const amend = await recordF2Decision({
      proposalId: p3.proposalId,
      projectId,
      decisionKind: "AMEND",
      currentContext: p3.contextSnapshot,
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(amend.ok).toBe(true);
    if (!amend.ok) return;
    expect(amend.proposal.status).toBe("AMENDMENT_REQUIRED");
  });

  it("AC-F2-19 stale mismatch refuses GO", async () => {
    const projectId = (globalThis as { __f2ProjectId?: string }).__f2ProjectId!;
    const { proposal, runtime } = await seedProposal(projectId);
    const stale = await recordF2Decision({
      proposalId: proposal.proposalId,
      projectId,
      decisionKind: "GO",
      currentContext: {
        ...proposal.contextSnapshot,
        doctrineDigest: "digest:changed",
      },
      decisionServices: runtime.oa!.decisionServices,
      authorityResolver: runtime.oa!.authorityResolver,
      nowIso: () => runtime.oa!.clock.nowIso(),
    });
    expect(stale.ok).toBe(false);
    if (stale.ok) return;
    expect(stale.code).toBe("STALE");
    expect(getProposal(proposal.proposalId)?.status).toBe("STALE");
  });

  it("AC-F2-26 missing proposal after reset has no durable authority claim", () => {
    resetF2ProposalStoreForTests();
    expect(getProposal("prop:missing")).toBeNull();
  });
});

```


---

## 4. Liste fichiers modifiés + DIFFS COMPLETS

Modified paths (13):

- `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`
- `projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts`
- `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`
- `projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx`
- `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`
- `projects/sfia-studio/app/features/project-assistant/actions.ts`
- `projects/sfia-studio/app/features/project-assistant/index.ts`
- `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`
- `projects/sfia-studio/app/features/project-assistant/project-assistant.module.css`
- `projects/sfia-studio/app/features/project-assistant/types.ts`
- `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`
- `projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts`
- `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

### MODIFIED DIFF: `projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
index 208f821..bfdfcb5 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
@@ -12,13 +12,17 @@ import { StudioShell } from "@/components/shell/StudioShell";
 import { ProjectAssistantPanel } from "@/features/project-assistant/ProjectAssistantPanel";
 import { ProjectWorkspaceView } from "@/features/vertical-slice-ui/ProjectWorkspaceView";

-const { projectAssistantSendActionMock } = vi.hoisted(() => ({
-  projectAssistantSendActionMock: vi.fn(),
-}));
+const { projectAssistantSendActionMock, projectAssistantDecideActionMock } =
+  vi.hoisted(() => ({
+    projectAssistantSendActionMock: vi.fn(),
+    projectAssistantDecideActionMock: vi.fn(),
+  }));

 vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantSendAction: (...args: unknown[]) =>
     projectAssistantSendActionMock(...args),
+  projectAssistantDecideAction: (...args: unknown[]) =>
+    projectAssistantDecideActionMock(...args),
 }));

 vi.mock("next/link", () => ({
@@ -90,6 +94,7 @@ const SUCCESS_RESULT = {
 describe("F1 ProjectAssistantPanel UI", () => {
   beforeEach(() => {
     projectAssistantSendActionMock.mockReset();
+    projectAssistantDecideActionMock.mockReset();
   });

   afterEach(() => {
@@ -307,6 +312,17 @@ describe("F1 ProjectAssistantPanel UI", () => {
     expect(screen.getByTestId("project-assistant-retry")).toBeVisible();
   });

+
+  it("shows MODE À CONFIRMER before first provider response", () => {
+    render(<ProjectAssistantPanel projectId="prj:f1-ui" />);
+    expect(screen.getByTestId("project-assistant-mode-pill")).toHaveTextContent(
+      /MODE À CONFIRMER/,
+    );
+    expect(screen.getByTestId("project-assistant-mode-pill")).not.toHaveTextContent(
+      /Fixture/,
+    );
+  });
+
   it("blocks empty send", () => {
     render(<ProjectAssistantPanel projectId="prj:f1-ui" />);
     expect(screen.getByTestId("project-assistant-send")).toBeDisabled();
```

### MODIFIED DIFF: `projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
index 00ab7d5..c4ef041 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
@@ -17,8 +17,8 @@ function listTsFiles(dir: string): string[] {
   return out;
 }

-describe("F1 project-assistant import boundaries", () => {
-  it("does not import lib/ops1 or features/ops1", () => {
+describe("project-assistant import boundaries (F1+F2)", () => {
+  it("does not import ops1, execution-run, or cursor execution paths", () => {
     const files = listTsFiles(FEATURE_DIR);
     expect(files.length).toBeGreaterThan(0);
     for (const file of files) {
@@ -26,6 +26,13 @@ describe("F1 project-assistant import boundaries", () => {
       expect(source).not.toMatch(/@\/lib\/ops1/);
       expect(source).not.toMatch(/@\/features\/ops1/);
       expect(source).not.toMatch(/from ["'].*ops1/);
+      expect(source).not.toMatch(/@\/lib\/oa\/execution-run/);
+      expect(source).not.toMatch(/from ["'][^"']*execution-run/);
+      expect(source).not.toMatch(/from ["']@\/lib\/.*cursor/i);
+      expect(source).not.toMatch(
+        /(?:import|export)[\s\S]{0,80}\b(?:StartExecution|ExecutionRun)\b/,
+      );
+      expect(source).not.toMatch(/selectedAgentRef\s*:\s*["'`]/);
     }
   });
 });
```

### MODIFIED DIFF: `projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts`

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index a26360c..e80c527 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -74,6 +74,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
     );

     const allowed = new Set([
+      "features/project-assistant/actions.ts:@/lib/vertical-slice-runtime",
       "features/vertical-slice-ui/CreateProjectForm.tsx:@/lib/vertical-slice-runtime/actions",
       "features/vertical-slice-ui/ProjectWorkspaceClient.tsx:@/lib/vertical-slice-runtime/actions",
       "features/vertical-slice-ui/ProjectWorkspaceView.tsx:@/lib/vertical-slice-runtime/actions",
```

### MODIFIED DIFF: `projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx`

```diff
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
index 506a0fb..492a659 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
@@ -197,7 +197,9 @@ describe("V2-A2 Create Project UI", () => {
     expect(screen.getByText("Le contexte est obligatoire.")).toBeVisible();
   });

-  it("validates name, short reference, and per-line constraint lengths", async () => {
+  it(
+    "validates name, short reference, and per-line constraint lengths",
+    async () => {
     const user = userEvent.setup();
     render(<CreateProjectForm />);

@@ -225,9 +227,13 @@ describe("V2-A2 Create Project UI", () => {
         /chaque contrainte doit contenir au maximum 500/i,
       ),
     ).toBeVisible();
-  });
+  },
+    15_000,
+  );

-  it("calls only the runtime action with the exact DTO and parsed constraints", async () => {
+  it(
+    "calls only the runtime action with the exact DTO and parsed constraints",
+    async () => {
     createProjectRuntimeActionMock.mockResolvedValue(SUCCESS_RESULT);
     const user = userEvent.setup();
     render(<CreateProjectForm />);
@@ -242,18 +248,22 @@ describe("V2-A2 Create Project UI", () => {

     await user.click(screen.getByTestId("create-project-submit"));

-    await waitFor(() =>
-      expect(createProjectRuntimeActionMock).toHaveBeenCalledWith({
-        name: "Projet V2-A2",
-        objective: "Créer une interface réelle.",
-        context: "Contexte local borné.",
-        criticality: "HIGH",
-        constraints: ["Sans IAM", "Sans persistance produit"],
-        shortReference: "V2-A2",
-        idempotencyKey: key,
-      }),
+    await waitFor(
+      () =>
+        expect(createProjectRuntimeActionMock).toHaveBeenCalledWith({
+          name: "Projet V2-A2",
+          objective: "Créer une interface réelle.",
+          context: "Contexte local borné.",
+          criticality: "HIGH",
+          constraints: ["Sans IAM", "Sans persistance produit"],
+          shortReference: "V2-A2",
+          idempotencyKey: key,
+        }),
+      { timeout: 10_000 },
     );
-  });
+  },
+    15_000,
+  );

   it("keeps the idempotency key stable across a retry", async () => {
     createProjectRuntimeActionMock
```

### MODIFIED DIFF: `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index 684ced0..67cd57e 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -2,11 +2,16 @@

 import { useEffect, useId, useRef, useState, useTransition } from "react";
 import { StatusPill } from "@/components/ui/StatusPill";
-import { projectAssistantSendAction } from "./actions";
+import {
+  projectAssistantDecideAction,
+  projectAssistantSendAction,
+} from "./actions";
 import type {
   AssistantHistoryMessage,
   AssistantToolEventDto,
+  F2TurnPayload,
 } from "./types";
+import type { F2DecisionKind, ProposalDto } from "./f2/types";
 import styles from "./project-assistant.module.css";

 type UiMessage = {
@@ -44,6 +49,23 @@ function statusLabel(status: AssistantToolEventDto["status"]): string {
   }
 }

+function modeFromResult(result: {
+  presentation?: string;
+  mode?: string;
+  model?: string | null;
+}): string {
+  if (result.presentation === "test_provider" || result.mode === "fixture") {
+    const model = result.model ? ` · ${result.model}` : "";
+    return `Mode démonstration / Fixture${model}`;
+  }
+  if (result.presentation === "openai_live" || result.mode === "live") {
+    const model = result.model ? ` · ${result.model}` : "";
+    return `Mode live${model}`;
+  }
+  if (result.mode === "unavailable") return "Assistant indisponible";
+  return "MODE À CONFIRMER";
+}
+
 export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
   const inputId = useId();
   const liveRegionId = useId();
@@ -52,10 +74,13 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
   const [toolEvents, setToolEvents] = useState<AssistantToolEventDto[]>([]);
   const [uiState, setUiState] = useState<UiState>("INITIAL");
   const [error, setError] = useState<string | null>(null);
-  const [modeLabel, setModeLabel] = useState("Mode démonstration / Fixture");
+  const [modeLabel, setModeLabel] = useState("MODE À CONFIRMER");
   const [ephemeralNotice, setEphemeralNotice] = useState(
     "Conversation éphémère — aucune persistence produit.",
   );
+  const [f2, setF2] = useState<F2TurnPayload | null>(null);
+  const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
+  const [reservesText, setReservesText] = useState("");
   const [isPending, startTransition] = useTransition();
   const listRef = useRef<HTMLDivElement | null>(null);

@@ -70,7 +95,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       top: el.scrollHeight,
       behavior: "smooth",
     });
-  }, [messages, toolEvents, error]);
+  }, [messages, toolEvents, error, activeProposal, f2]);

   const busy =
     isPending ||
@@ -79,6 +104,9 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
     uiState === "SOURCE_LOOKUP";
   const blocked = uiState === "BLOCKED";
   const canSend = !busy && !blocked && draft.trim().length > 0;
+  const gateOpen =
+    activeProposal?.morrisGateRequired === true &&
+    activeProposal.status === "DECISION_REQUIRED";

   function historyForRequest(): AssistantHistoryMessage[] {
     return messages
@@ -120,11 +148,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         return;
       }

-      if (result.mode === "fixture") {
-        setModeLabel("Mode démonstration / Fixture");
-      } else if (result.mode === "live") {
-        setModeLabel("Mode live (provider configuré)");
-      }
+      setModeLabel(modeFromResult(result));
       setEphemeralNotice(result.ephemeralNotice);
       setToolEvents((prev) => [...prev, ...result.toolEvents]);
       if (result.toolEvents.length > 0) {
@@ -138,6 +162,46 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           content: result.text,
         },
       ]);
+      if (result.f2) {
+        setF2(result.f2);
+        setActiveProposal(result.f2.proposal);
+      } else {
+        setF2(null);
+        setActiveProposal(null);
+      }
+      setUiState("ANSWERED");
+    });
+  }
+
+  function decide(kind: F2DecisionKind) {
+    if (!activeProposal || busy || blocked) return;
+    startTransition(async () => {
+      setUiState("ASSISTANT_WORKING");
+      setError(null);
+      const result = await projectAssistantDecideAction({
+        projectId,
+        proposalId: activeProposal.proposalId,
+        decisionKind: kind,
+        reservesText: kind === "GO_WITH_RESERVES" ? reservesText : null,
+      });
+      if (!result.ok) {
+        setUiState("ERROR_RECOVERABLE");
+        setError(result.message);
+        if (result.proposal) setActiveProposal(result.proposal);
+        return;
+      }
+      setModeLabel(modeFromResult(result));
+      setEphemeralNotice(result.ephemeralNotice);
+      setF2(result.f2);
+      setActiveProposal(result.f2.proposal);
+      setMessages((prev) => [
+        ...prev,
+        {
+          id: nextId("assistant"),
+          role: "assistant",
+          content: result.text,
+        },
+      ]);
       setUiState("ANSWERED");
     });
   }
@@ -151,13 +215,15 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       <div className={styles.metaRow} data-testid="project-assistant-mode-pill">
         <StatusPill tone="blueFlush">{modeLabel}</StatusPill>
         <StatusPill tone="muted">Lecture seule</StatusPill>
+        <StatusPill tone="muted">AUCUNE EXÉCUTION</StatusPill>
       </div>
       <p className={styles.ephemeral} data-testid="project-assistant-ephemeral">
         {ephemeralNotice}
       </p>
       <p className={styles.scope} data-testid="project-assistant-scope">
-        Périmètre F1 : analyse · conversation · lecture Git/GitHub. Pas
-        d&apos;exécution Cursor, pas d&apos;écriture, pas de qualification F2.
+        Périmètre F1+F2 : analyse · conversation · lecture · qualification ·
+        proposition · gate humain. Pas d&apos;exécution Cursor, pas d&apos;écriture,
+        pas de destination OPS1.
       </p>

       <div
@@ -196,6 +262,197 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         )}
       </div>

+      {f2 ? (
+        <div
+          className={styles.f2Labels}
+          data-testid="project-assistant-f2-labels"
+          aria-live="polite"
+        >
+          {f2.labels.recommendation ? (
+            <StatusPill tone="blueFlush">{f2.labels.recommendation}</StatusPill>
+          ) : null}
+          {f2.labels.proposition ? (
+            <StatusPill tone="blueFlush">{f2.labels.proposition}</StatusPill>
+          ) : null}
+          {f2.labels.decisionRequired ? (
+            <StatusPill tone="orange">{f2.labels.decisionRequired}</StatusPill>
+          ) : null}
+          {f2.labels.decisionTaken ? (
+            <StatusPill tone="green">{f2.labels.decisionTaken}</StatusPill>
+          ) : null}
+          <StatusPill tone="muted">{f2.labels.noExecution}</StatusPill>
+        </div>
+      ) : null}
+
+      {f2?.qualification ? (
+        <section
+          className={styles.qualificationCard}
+          data-testid="project-assistant-qualification"
+          aria-labelledby="f2-qualification-title"
+        >
+          <h3 id="f2-qualification-title" className={styles.cardTitle}>
+            RECOMMANDATION
+          </h3>
+          <p className={styles.cardMeta}>
+            {f2.qualification.recommendationLabel}
+          </p>
+          <dl className={styles.cardDl}>
+            <div>
+              <dt>Cycle SFIA</dt>
+              <dd data-testid="f2-cycle">
+                {f2.qualification.cycleTypeId} — {f2.qualification.cycleLabel}
+              </dd>
+            </div>
+            <div>
+              <dt>Profil recommandé</dt>
+              <dd data-testid="f2-profile">{f2.qualification.recommendedProfile}</dd>
+            </div>
+            <div>
+              <dt>Rationale</dt>
+              <dd data-testid="f2-rationale">{f2.qualification.rationale}</dd>
+            </div>
+            <div>
+              <dt>Provenance</dt>
+              <dd data-testid="f2-qualification-provenance">
+                catalogue {f2.qualification.catalogVersion} ·{" "}
+                {f2.qualification.detailedStatus}
+                {f2.qualification.capitalizationViaCycleTypeId
+                  ? " · capitalisation via cycleType"
+                  : ""}
+              </dd>
+            </div>
+          </dl>
+        </section>
+      ) : null}
+
+      {activeProposal ? (
+        <section
+          className={styles.proposalCard}
+          data-testid="project-assistant-proposal"
+          aria-labelledby="f2-proposal-title"
+        >
+          <h3 id="f2-proposal-title" className={styles.cardTitle}>
+            PROPOSITION
+          </h3>
+          <p className={styles.cardMeta} data-testid="f2-proposal-id">
+            {activeProposal.proposalId} · statut {activeProposal.status}
+          </p>
+          <dl className={styles.cardDl}>
+            <div>
+              <dt>Demande reformulée</dt>
+              <dd>{activeProposal.rephrasedRequest}</dd>
+            </div>
+            <div>
+              <dt>Objectif</dt>
+              <dd>{activeProposal.objective}</dd>
+            </div>
+            <div>
+              <dt>Périmètre</dt>
+              <dd data-testid="f2-proposal-scope">{activeProposal.scope}</dd>
+            </div>
+            <div>
+              <dt>Hors périmètre</dt>
+              <dd data-testid="f2-proposal-out-of-scope">
+                {activeProposal.outOfScope.join(" · ")}
+              </dd>
+            </div>
+            <div>
+              <dt>Gate Morris</dt>
+              <dd data-testid="f2-gate-required">
+                {activeProposal.morrisGateRequired
+                  ? "DÉCISION REQUISE"
+                  : "NO MORRIS GATE REQUIRED"}
+              </dd>
+            </div>
+            <div>
+              <dt>Prochaine étape</dt>
+              <dd>{activeProposal.nextPossibleStep}</dd>
+            </div>
+            <div>
+              <dt>Contexte</dt>
+              <dd>
+                {activeProposal.contextSnapshot.projectId} /{" "}
+                {activeProposal.contextSnapshot.lpsId}@
+                {activeProposal.contextSnapshot.lpsVersion}
+              </dd>
+            </div>
+          </dl>
+          <p
+            className={styles.processLocal}
+            data-testid="f2-process-local-notice"
+          >
+            {activeProposal.processLocalNotice}
+          </p>
+          <p className={styles.noExecutionBanner} data-testid="f2-no-execution">
+            AUCUNE EXÉCUTION
+          </p>
+        </section>
+      ) : null}
+
+      {gateOpen ? (
+        <section
+          className={styles.gateCard}
+          data-testid="project-assistant-gate"
+          aria-labelledby="f2-gate-title"
+        >
+          <h3 id="f2-gate-title" className={styles.cardTitle}>
+            DÉCISION REQUISE
+          </h3>
+          <p className={styles.cardMeta}>
+            Décision humaine explicite liée à {activeProposal?.proposalId}
+          </p>
+          <label className={styles.reservesLabel} htmlFor={`${inputId}-reserves`}>
+            Réserves (obligatoires pour GO WITH RESERVES)
+          </label>
+          <textarea
+            id={`${inputId}-reserves`}
+            className={styles.reservesInput}
+            data-testid="f2-reserves-input"
+            rows={2}
+            value={reservesText}
+            disabled={busy}
+            onChange={(event) => setReservesText(event.target.value)}
+          />
+          <div className={styles.gateActions} role="group" aria-label="Décisions Morris">
+            {(
+              [
+                ["GO", "GO"],
+                ["GO_WITH_RESERVES", "GO WITH RESERVES"],
+                ["NO_GO", "NO-GO"],
+                ["AMEND", "AMEND"],
+              ] as const
+            ).map(([kind, label]) => (
+              <button
+                key={kind}
+                type="button"
+                className={styles.gateButton}
+                data-testid={`f2-decide-${kind}`}
+                disabled={busy}
+                onClick={() => decide(kind)}
+              >
+                {label}
+              </button>
+            ))}
+          </div>
+        </section>
+      ) : null}
+
+      {f2?.decision ? (
+        <section
+          className={styles.decisionCard}
+          data-testid="project-assistant-decision"
+          aria-live="polite"
+        >
+          <h3 className={styles.cardTitle}>DÉCISION PRISE</h3>
+          <p data-testid="f2-decision-kind">{f2.decision.kind}</p>
+          <p data-testid="f2-decision-scope">Scope: {f2.decision.scope}</p>
+          {f2.decision.readyForNextGatedStep ? (
+            <p data-testid="f2-ready-next">READY FOR NEXT GATED STEP</p>
+          ) : null}
+          <p className={styles.noExecutionBanner}>AUCUNE EXÉCUTION</p>
+        </section>
+      ) : null}
+
       <section
         className={styles.sources}
         aria-labelledby="project-assistant-sources-title"
@@ -342,7 +599,6 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         </div>
       </form>

-      {/* Explicit absence of Cursor / write controls */}
       <div
         className={styles.srOnly}
         data-testid="project-assistant-no-cursor"
@@ -357,6 +613,13 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       >
         Aucune écriture Git ou GitHub
       </div>
+      <div
+        className={styles.srOnly}
+        data-testid="project-assistant-no-ops1-destination"
+        aria-hidden="true"
+      >
+        OPS1 n&apos;est pas la destination F2
+      </div>
     </div>
   );
 }
```

### MODIFIED DIFF: `projects/sfia-studio/app/features/project-assistant/actions.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 6249302..bae1275 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -1,13 +1,20 @@
 "use server";

-import { orchestrateProjectAssistantTurn } from "./orchestrateTurn";
+import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
+import { orchestrateAssistantSend } from "./f2/orchestrateF2";
+import { recordF2Decision } from "./f2/recordDecision";
+import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
+import type { F2DecisionKind } from "./f2/types";
 import type {
   AssistantHistoryMessage,
+  ProjectAssistantContextDto,
+  ProjectAssistantDecideResult,
   ProjectAssistantSendResult,
 } from "./types";

 /**
- * Thin server action — Project Workspace F1 Assistant.
+ * Thin server action — Project Workspace Assistant (F1 + F2).
  * No OPS1 session. No Cursor. No Git write. No durable persistence.
  */
 export async function projectAssistantSendAction(input: {
@@ -15,5 +22,139 @@ export async function projectAssistantSendAction(input: {
   content: string;
   history?: AssistantHistoryMessage[];
 }): Promise<ProjectAssistantSendResult> {
-  return orchestrateProjectAssistantTurn(input);
+  return orchestrateAssistantSend(input);
+}
+
+function toContextDto(
+  result: Extract<
+    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
+    { ok: true }
+  >,
+): ProjectAssistantContextDto {
+  return {
+    projectId: result.project.projectId,
+    name: result.project.name,
+    shortReference: result.project.shortReference ?? null,
+    objective: result.project.objective,
+    contextSummary: result.project.contextSummary,
+    criticality: result.project.criticality,
+    constraints: [...result.project.constraints],
+    lpsId: result.livingState.id,
+    lpsVersion: result.livingState.version,
+    lpsCreatedAt: result.livingState.createdAt,
+    doctrineId: result.doctrine.id,
+    doctrineVersion: result.doctrine.version,
+    doctrineDigest: result.doctrine.digest,
+    doctrineStatus: result.doctrine.status,
+    runtimeMode: result.disclosures.runtimeMode,
+    persistence: result.disclosures.persistence,
+    readiness: result.readiness.status,
+  };
+}
+
+/**
+ * Morris gate decision — client may only send proposalId, decisionKind,
+ * optional reserves, projectId. Authority is registered server-side.
+ */
+export async function projectAssistantDecideAction(input: {
+  projectId: string;
+  proposalId: string;
+  decisionKind: F2DecisionKind;
+  reservesText?: string | null;
+  /** Hostile — ignored if present. */
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+}): Promise<ProjectAssistantDecideResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "decision_error",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA process-local indisponibles pour la décision F2.",
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+
+  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
+  if (!projectResult.ok) {
+    return {
+      ok: false,
+      status: "project_not_found",
+      code: projectResult.error.code,
+      message: projectResult.error.message,
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+  const project = toContextDto(projectResult);
+
+  const recorded = await recordF2Decision({
+    proposalId: input.proposalId,
+    projectId: input.projectId,
+    decisionKind: input.decisionKind,
+    reservesText: input.reservesText,
+    canActAsMorris: input.canActAsMorris,
+    claimedAuthorityLevel: input.claimedAuthorityLevel,
+    currentContext: {
+      projectId: project.projectId,
+      lpsId: project.lpsId,
+      lpsVersion: project.lpsVersion,
+      doctrineDigest: project.doctrineDigest,
+    },
+    decisionServices: runtime.oa.decisionServices,
+    authorityResolver: runtime.oa.authorityResolver,
+    nowIso: () => runtime.oa!.clock.nowIso(),
+  });
+
+  if (!recorded.ok) {
+    return {
+      ok: false,
+      status: recorded.code === "STALE" ? "stale" : "decision_error",
+      code: recorded.code,
+      message: recorded.message,
+      mode: "fixture",
+      retryable: recorded.code === "STALE",
+      proposal: recorded.proposal ?? null,
+    };
+  }
+
+  const { decision, proposal } = recorded;
+  const textParts = [
+    "DÉCISION PRISE",
+    `${decision.kind} capturée pour ${proposal.proposalId}.`,
+    `Scope: ${decision.scope}.`,
+    decision.readyForNextGatedStep
+      ? "READY FOR NEXT GATED STEP"
+      : "Proposition non approuvée.",
+    "AUCUNE EXÉCUTION",
+    F2_PROCESS_LOCAL_NOTICE,
+  ];
+
+  return {
+    ok: true,
+    status: "ok",
+    mode: "fixture",
+    presentation: "unconfirmed",
+    text: textParts.join(" — "),
+    project,
+    ephemeralNotice: F2_PROCESS_LOCAL_NOTICE,
+    f2: {
+      turnKind: "f2_decision",
+      intentClass: "actionable",
+      qualification: null,
+      proposal,
+      decision,
+      labels: {
+        recommendation: null,
+        proposition: "PROPOSITION",
+        decisionRequired: null,
+        decisionTaken: "DÉCISION PRISE",
+        noExecution: "AUCUNE EXÉCUTION",
+      },
+      executionBlocked: true,
+      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+    },
+  };
 }
```

### MODIFIED DIFF: `projects/sfia-studio/app/features/project-assistant/index.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/index.ts b/projects/sfia-studio/app/features/project-assistant/index.ts
index 0ff6c03..e61d157 100644
--- a/projects/sfia-studio/app/features/project-assistant/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/index.ts
@@ -3,4 +3,5 @@ export type {
   ProjectAssistantSendResult,
   AssistantHistoryMessage,
   AssistantToolEventDto,
+  F2TurnPayload,
 } from "./types";
```

### MODIFIED DIFF: `projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 513d325..5c935ee 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -152,6 +152,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       text: loop.text,
       mode: modeResolution.mode,
       presentation,
+      model: loop.usage?.model ?? null,
       toolRounds: loop.toolRounds,
       toolCalls: loop.toolCalls,
       sources,
```

### MODIFIED DIFF: `projects/sfia-studio/app/features/project-assistant/project-assistant.module.css`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css b/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
index a543f25..4ebc7b9 100644
--- a/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
+++ b/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
@@ -210,3 +210,129 @@
   white-space: nowrap;
   border: 0;
 }
+
+.f2Labels {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+
+.qualificationCard,
+.proposalCard,
+.gateCard,
+.decisionCard {
+  display: grid;
+  gap: 8px;
+  padding: 10px 12px;
+  border: 1px solid var(--sfia-border-soft);
+  border-radius: 10px;
+  background: #f7fafc;
+}
+
+.proposalCard {
+  border-color: #1d4e89;
+  background: #f3f7fb;
+}
+
+.gateCard {
+  border-color: #b45309;
+  background: #fffbeb;
+}
+
+.decisionCard {
+  border-color: #127c4c;
+  background: #f1faf5;
+}
+
+.cardTitle {
+  margin: 0;
+  font-size: 12px;
+  font-weight: 700;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--sfia-ink);
+}
+
+.cardMeta {
+  margin: 0;
+  font-size: 12px;
+  color: var(--sfia-muted);
+}
+
+.cardDl {
+  margin: 0;
+  display: grid;
+  gap: 6px;
+}
+
+.cardDl div {
+  display: grid;
+  gap: 2px;
+}
+
+.cardDl dt {
+  font-size: 11px;
+  font-weight: 650;
+  color: var(--sfia-muted);
+  text-transform: uppercase;
+  letter-spacing: 0.03em;
+}
+
+.cardDl dd {
+  margin: 0;
+  font-size: 13px;
+  color: var(--sfia-ink);
+  line-height: 1.4;
+}
+
+.processLocal,
+.noExecutionBanner {
+  margin: 0;
+  font-size: 12px;
+  font-weight: 650;
+}
+
+.noExecutionBanner {
+  color: #7a1f16;
+}
+
+.reservesLabel {
+  font-size: 12px;
+  color: var(--sfia-ink);
+}
+
+.reservesInput {
+  width: 100%;
+  border: 1px solid var(--sfia-border-soft);
+  border-radius: 8px;
+  padding: 8px 10px;
+  font: inherit;
+  box-sizing: border-box;
+}
+
+.gateActions {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+
+.gateButton {
+  border: 1px solid #1d4e89;
+  background: #fff;
+  color: #1d4e89;
+  border-radius: 8px;
+  padding: 8px 12px;
+  font-size: 12px;
+  font-weight: 650;
+  cursor: pointer;
+}
+
+.gateButton:focus-visible {
+  outline: 2px solid #1d4e89;
+  outline-offset: 2px;
+}
+
+.gateButton:disabled {
+  opacity: 0.5;
+  cursor: not-allowed;
+}
```

### MODIFIED DIFF: `projects/sfia-studio/app/features/project-assistant/types.ts`

```diff
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index d2bc1ef..0c67e1a 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -1,15 +1,25 @@
 /**
- * F1 Project Assistant — ephemeral DTOs (no durable persistence).
+ * Project Assistant DTOs — F1 conversation + F2 qualification/proposal/gate.
+ * Ephemeral / process-local only (no durable persistence).
  */

-export type AssistantUiMode = "fixture" | "live" | "unavailable";
+import type {
+  DecisionDto,
+  IntentClass,
+  ProposalDto,
+  QualificationDto,
+} from "./f2/types";
+
+export type AssistantUiMode = "fixture" | "live" | "unavailable" | "unconfirmed";

 export type AssistantTurnStatus =
   | "ok"
   | "provider_unavailable"
   | "provider_error"
   | "project_not_found"
-  | "validation_error";
+  | "validation_error"
+  | "stale"
+  | "decision_error";

 export type AssistantHistoryMessage = {
   role: "user" | "assistant";
@@ -51,18 +61,45 @@ export type ProjectAssistantContextDto = {
   readiness: string;
 };

+export type F2TurnLabels = {
+  recommendation: "RECOMMANDATION" | null;
+  proposition: "PROPOSITION" | null;
+  decisionRequired: "DÉCISION REQUISE" | null;
+  decisionTaken: "DÉCISION PRISE" | null;
+  noExecution: "AUCUNE EXÉCUTION";
+};
+
+export type F2TurnPayload = {
+  turnKind:
+    | "f1_informative"
+    | "f2_clarification"
+    | "f2_proposal"
+    | "f2_blocked"
+    | "f2_decision";
+  intentClass: IntentClass;
+  qualification: QualificationDto | null;
+  proposal: ProposalDto | null;
+  decision: DecisionDto | null;
+  labels: F2TurnLabels;
+  executionBlocked: boolean;
+  processLocalNotice: string;
+};
+
 export type ProjectAssistantSendSuccess = {
   ok: true;
   status: "ok";
   text: string;
-  mode: AssistantUiMode;
+  mode: Exclude<AssistantUiMode, "unconfirmed">;
   presentation: "test_provider" | "openai_live";
+  /** Observed provider model when available (from usage.model). */
+  model?: string | null;
   toolRounds: number;
   toolCalls: number;
   sources: AssistantSourceDto[];
   toolEvents: AssistantToolEventDto[];
   project: ProjectAssistantContextDto;
   ephemeralNotice: string;
+  f2?: F2TurnPayload;
 };

 export type ProjectAssistantSendFailure = {
@@ -72,8 +109,25 @@ export type ProjectAssistantSendFailure = {
   message: string;
   mode: AssistantUiMode;
   retryable: boolean;
+  proposal?: ProposalDto | null;
+  f2?: F2TurnPayload;
 };

 export type ProjectAssistantSendResult =
   | ProjectAssistantSendSuccess
   | ProjectAssistantSendFailure;
+
+export type ProjectAssistantDecideSuccess = {
+  ok: true;
+  status: "ok";
+  mode: Exclude<AssistantUiMode, "unconfirmed">;
+  presentation: "test_provider" | "openai_live" | "unconfirmed";
+  text: string;
+  project: ProjectAssistantContextDto;
+  ephemeralNotice: string;
+  f2: F2TurnPayload;
+};
+
+export type ProjectAssistantDecideResult =
+  | ProjectAssistantDecideSuccess
+  | ProjectAssistantSendFailure;
```

### MODIFIED DIFF: `projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index e4357ae..2d8c556 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -47,6 +47,227 @@ export class FakeConversationProvider implements ConversationProvider {
     if (lastUser?.content.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
       throw new Error("FAKE_PROVIDER_ERROR");
     }
+
+    // F2 deterministic structured intent JSON (TEST/FAKE only)
+    if (lastUser?.content.includes("__F2_INFORMATIVE__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "informative",
+          candidateCycleTypeId: null,
+          signals: null,
+          objective: "Résumer le projet",
+          scope: null,
+          rephrasedRequest: "Résumer l'objectif du projet",
+          outOfScope: [],
+          risks: [],
+          reservations: [],
+          stopConditions: [],
+          activatedBlocks: [],
+          expectedOutcome: null,
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
+    if (lastUser?.content.includes("__F2_ACTIONABLE__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:delivery",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          objective: "Préparer la prochaine étape fonctionnelle",
+          scope: "Proposition bornée sans exécution",
+          rephrasedRequest: "Préparer une proposition de livraison bornée",
+          outOfScope: ["Cursor", "Git write", "PR"],
+          risks: ["Confusion reco/décision"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification", "proposition"],
+          expectedOutcome: "Proposition structurée prête pour revue",
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
+    if (lastUser?.content.includes("__F2_STRUCTURING__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:functional-architecture",
+          signals: {
+            structuralChange: true,
+            securityImpact: false,
+            architectureImpact: true,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: false,
+          },
+          objective: "Faire évoluer l'architecture produit",
+          scope: "Changement d'architecture structurant",
+          rephrasedRequest: "Préparer une proposition d'architecture",
+          outOfScope: ["Exécution", "PR", "merge"],
+          risks: ["Impact architecture"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification", "proposition", "gate"],
+          expectedOutcome: "Gate Morris requis",
+          criticalJustification: "Besoin métier structurant documenté",
+          requestedOperation: "architecture change",
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
+    if (lastUser?.content.includes("__F2_AMBIGUOUS__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "ambiguous",
+          candidateCycleTypeId: null,
+          signals: null,
+          objective: null,
+          scope: null,
+          rephrasedRequest: "Fais le nécessaire",
+          outOfScope: [],
+          risks: [],
+          reservations: [],
+          stopConditions: [],
+          activatedBlocks: [],
+          expectedOutcome: null,
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
+    if (lastUser?.content.includes("__F2_EXECUTION__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "execution_request",
+          candidateCycleTypeId: "cyc:delivery",
+          signals: {
+            structuralChange: true,
+            securityImpact: false,
+            architectureImpact: true,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: false,
+          },
+          objective: "Lancer Cursor et créer une PR",
+          scope: "Exécution produit demandée — refusée en F2",
+          rephrasedRequest: "Demande d'exécution Cursor / PR",
+          outOfScope: ["Exécution réelle"],
+          risks: ["Exécution hors périmètre F2"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification", "proposition", "gate"],
+          expectedOutcome: "Proposition sans exécution",
+          criticalJustification: "Demande d'exécution explicite à borner sans lancer d'agent",
+          requestedOperation: "cursor create pr",
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
+    if (lastUser?.content.includes("__F2_CRITICAL_NO_JUSTIFICATION__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:security",
+          signals: {
+            structuralChange: true,
+            securityImpact: true,
+            architectureImpact: true,
+            dataImpact: true,
+            irreversible: true,
+            lowRiskBounded: false,
+          },
+          objective: "Changer l'architecture sécurité",
+          scope: "Impact structurant sécurité",
+          rephrasedRequest: "Modifier architecture sécurité",
+          outOfScope: ["Exécution"],
+          risks: ["Impact critique"],
+          reservations: [],
+          stopConditions: ["Justification Critical obligatoire"],
+          activatedBlocks: ["qualification"],
+          expectedOutcome: null,
+          criticalJustification: null,
+          requestedOperation: "architecture security change",
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
+    // Default unmarked analysis prompts (system asks for JSON): informative fail-open for F1
+    if (messages.some((m) => m.role === "system" && m.content.includes("SFIA Studio F2"))) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "informative",
+          candidateCycleTypeId: null,
+          signals: null,
+          objective: null,
+          scope: null,
+          rephrasedRequest: (lastUser?.content ?? "").slice(0, 200),
+          outOfScope: [],
+          risks: [],
+          reservations: [],
+          stopConditions: [],
+          activatedBlocks: [],
+          expectedOutcome: null,
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
+
     const historyLen = messages.length;
     const text =
       this.scripted?.[this.callCount - 1] ??
```

### MODIFIED DIFF: `projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
index 4fbc127..328e3bc 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
@@ -7,6 +7,7 @@ import {
   ResolveDoctrinePackage,
   Sha256DigestVerificationAdapter,
   SystemClock,
+  type ClockPort,
   type DoctrinePackagePin,
 } from "@/lib/oa/doctrine";
 import {
@@ -69,6 +70,9 @@ export interface LocalProjectFacade {
 export interface LocalVerticalSliceServices {
   readonly facade: LocalProjectFacade;
   readonly architecture: LocalVerticalSliceArchitecture;
+  /** Shared OA ProjectServices instance used by the LocalProjectFacade. */
+  readonly projectServices: ProjectServices;
+  readonly clock: ClockPort;
 }

 class RandomLocalProjectIdSource implements LocalProjectIdSource {
@@ -494,5 +498,7 @@ export function createLocalVerticalSliceServices(
       () => clock.nowIso(),
     ),
     architecture: LOCAL_VERTICAL_SLICE_ARCHITECTURE,
+    projectServices,
+    clock,
   });
 }
```

### MODIFIED DIFF: `projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts`

```diff
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 5cb5cc5..422315a 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -11,7 +11,19 @@ import {
   type LocalVerticalSliceServices,
 } from "@/lib/vertical-slice-core";
 import type { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
-import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
+import type { DoctrinePackagePin, ClockPort } from "@/lib/oa/doctrine";
+import {
+  createCkcQualificationServices,
+  createInMemoryCycleServices,
+  type CkcQualificationServices,
+  type CycleServices,
+} from "@/lib/oa/cycle";
+import {
+  MemoryAuthorityResolver,
+  createInMemoryDecisionServices,
+  type DecisionServices,
+} from "@/lib/oa/decision";
+import type { ProjectServices } from "@/lib/oa/project";
 import {
   toCreateLocalProjectCommand,
   toCreateProjectRuntimeFailure,
@@ -47,6 +59,15 @@ export interface RuntimeApplicationServiceOptions {
   readonly facade?: LocalProjectFacade;
 }

+export type RuntimeOaStack = {
+  readonly projectServices: ProjectServices;
+  readonly clock: ClockPort;
+  readonly cycleServices: CycleServices;
+  readonly ckcQualification: CkcQualificationServices;
+  readonly decisionServices: DecisionServices;
+  readonly authorityResolver: MemoryAuthorityResolver;
+};
+
 function resolveAudit(
   mode: RuntimeAuditMode,
   sqliteAuditStore: BoundedAtomicAuditStore | undefined,
@@ -65,20 +86,47 @@ function resolveAudit(
   return new NoOpLocalProjectCreationAudit();
 }

+function wireOaStack(
+  projectServices: ProjectServices,
+  clock: ClockPort,
+): RuntimeOaStack {
+  const cycleServices = createInMemoryCycleServices({ projectServices, clock });
+  const ckcQualification = createCkcQualificationServices({ clock });
+  const authorityResolver = new MemoryAuthorityResolver();
+  const decisionServices = createInMemoryDecisionServices({
+    projectServices,
+    cycleServices,
+    clock,
+    authorityResolver,
+  });
+  return Object.freeze({
+    projectServices,
+    clock,
+    cycleServices,
+    ckcQualification,
+    decisionServices,
+    authorityResolver,
+  });
+}
+
 /**
  * Application runtime service over V1 LocalProjectFacade.
  * Does not duplicate T-A0/T-A1 rules; maps serializable DTOs only.
+ * Exposes shared OA stack for F2 (same ProjectServices instance).
  */
 export class RuntimeApplicationService {
   private readonly facade: LocalProjectFacade;
   readonly architecture: LocalVerticalSliceServices["architecture"];
+  readonly oa: RuntimeOaStack | null;

   constructor(
     facade: LocalProjectFacade,
     architecture: LocalVerticalSliceServices["architecture"],
+    oa: RuntimeOaStack | null = null,
   ) {
     this.facade = facade;
     this.architecture = architecture;
+    this.oa = oa;
   }

   /** Use case: Create Project via V1 facade. */
@@ -115,6 +163,7 @@ export function createRuntimeApplicationService(
     return new RuntimeApplicationService(
       options.facade,
       LOCAL_VERTICAL_SLICE_ARCHITECTURE,
+      null,
     );
   }

@@ -128,5 +177,10 @@ export function createRuntimeApplicationService(
     audit: resolveAudit(options.auditMode ?? "noop", options.sqliteAuditStore),
   });

-  return new RuntimeApplicationService(services.facade, services.architecture);
+  const oa = wireOaStack(services.projectServices, services.clock);
+  return new RuntimeApplicationService(
+    services.facade,
+    services.architecture,
+    oa,
+  );
 }
```


### Combined `git diff -- projects/sfia-studio/app`

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
index 208f821..bfdfcb5 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
+++ b/projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
@@ -12,13 +12,17 @@ import { StudioShell } from "@/components/shell/StudioShell";
 import { ProjectAssistantPanel } from "@/features/project-assistant/ProjectAssistantPanel";
 import { ProjectWorkspaceView } from "@/features/vertical-slice-ui/ProjectWorkspaceView";

-const { projectAssistantSendActionMock } = vi.hoisted(() => ({
-  projectAssistantSendActionMock: vi.fn(),
-}));
+const { projectAssistantSendActionMock, projectAssistantDecideActionMock } =
+  vi.hoisted(() => ({
+    projectAssistantSendActionMock: vi.fn(),
+    projectAssistantDecideActionMock: vi.fn(),
+  }));

 vi.mock("@/features/project-assistant/actions", () => ({
   projectAssistantSendAction: (...args: unknown[]) =>
     projectAssistantSendActionMock(...args),
+  projectAssistantDecideAction: (...args: unknown[]) =>
+    projectAssistantDecideActionMock(...args),
 }));

 vi.mock("next/link", () => ({
@@ -90,6 +94,7 @@ const SUCCESS_RESULT = {
 describe("F1 ProjectAssistantPanel UI", () => {
   beforeEach(() => {
     projectAssistantSendActionMock.mockReset();
+    projectAssistantDecideActionMock.mockReset();
   });

   afterEach(() => {
@@ -307,6 +312,17 @@ describe("F1 ProjectAssistantPanel UI", () => {
     expect(screen.getByTestId("project-assistant-retry")).toBeVisible();
   });

+
+  it("shows MODE À CONFIRMER before first provider response", () => {
+    render(<ProjectAssistantPanel projectId="prj:f1-ui" />);
+    expect(screen.getByTestId("project-assistant-mode-pill")).toHaveTextContent(
+      /MODE À CONFIRMER/,
+    );
+    expect(screen.getByTestId("project-assistant-mode-pill")).not.toHaveTextContent(
+      /Fixture/,
+    );
+  });
+
   it("blocks empty send", () => {
     render(<ProjectAssistantPanel projectId="prj:f1-ui" />);
     expect(screen.getByTestId("project-assistant-send")).toBeDisabled();
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
index 00ab7d5..c4ef041 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
@@ -17,8 +17,8 @@ function listTsFiles(dir: string): string[] {
   return out;
 }

-describe("F1 project-assistant import boundaries", () => {
-  it("does not import lib/ops1 or features/ops1", () => {
+describe("project-assistant import boundaries (F1+F2)", () => {
+  it("does not import ops1, execution-run, or cursor execution paths", () => {
     const files = listTsFiles(FEATURE_DIR);
     expect(files.length).toBeGreaterThan(0);
     for (const file of files) {
@@ -26,6 +26,13 @@ describe("F1 project-assistant import boundaries", () => {
       expect(source).not.toMatch(/@\/lib\/ops1/);
       expect(source).not.toMatch(/@\/features\/ops1/);
       expect(source).not.toMatch(/from ["'].*ops1/);
+      expect(source).not.toMatch(/@\/lib\/oa\/execution-run/);
+      expect(source).not.toMatch(/from ["'][^"']*execution-run/);
+      expect(source).not.toMatch(/from ["']@\/lib\/.*cursor/i);
+      expect(source).not.toMatch(
+        /(?:import|export)[\s\S]{0,80}\b(?:StartExecution|ExecutionRun)\b/,
+      );
+      expect(source).not.toMatch(/selectedAgentRef\s*:\s*["'`]/);
     }
   });
 });
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
index a26360c..e80c527 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
@@ -74,6 +74,7 @@ describe("V2-A1 vertical-slice-runtime import boundaries", () => {
     );

     const allowed = new Set([
+      "features/project-assistant/actions.ts:@/lib/vertical-slice-runtime",
       "features/vertical-slice-ui/CreateProjectForm.tsx:@/lib/vertical-slice-runtime/actions",
       "features/vertical-slice-ui/ProjectWorkspaceClient.tsx:@/lib/vertical-slice-runtime/actions",
       "features/vertical-slice-ui/ProjectWorkspaceView.tsx:@/lib/vertical-slice-runtime/actions",
diff --git a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
index 506a0fb..492a659 100644
--- a/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
+++ b/projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
@@ -197,7 +197,9 @@ describe("V2-A2 Create Project UI", () => {
     expect(screen.getByText("Le contexte est obligatoire.")).toBeVisible();
   });

-  it("validates name, short reference, and per-line constraint lengths", async () => {
+  it(
+    "validates name, short reference, and per-line constraint lengths",
+    async () => {
     const user = userEvent.setup();
     render(<CreateProjectForm />);

@@ -225,9 +227,13 @@ describe("V2-A2 Create Project UI", () => {
         /chaque contrainte doit contenir au maximum 500/i,
       ),
     ).toBeVisible();
-  });
+  },
+    15_000,
+  );

-  it("calls only the runtime action with the exact DTO and parsed constraints", async () => {
+  it(
+    "calls only the runtime action with the exact DTO and parsed constraints",
+    async () => {
     createProjectRuntimeActionMock.mockResolvedValue(SUCCESS_RESULT);
     const user = userEvent.setup();
     render(<CreateProjectForm />);
@@ -242,18 +248,22 @@ describe("V2-A2 Create Project UI", () => {

     await user.click(screen.getByTestId("create-project-submit"));

-    await waitFor(() =>
-      expect(createProjectRuntimeActionMock).toHaveBeenCalledWith({
-        name: "Projet V2-A2",
-        objective: "Créer une interface réelle.",
-        context: "Contexte local borné.",
-        criticality: "HIGH",
-        constraints: ["Sans IAM", "Sans persistance produit"],
-        shortReference: "V2-A2",
-        idempotencyKey: key,
-      }),
+    await waitFor(
+      () =>
+        expect(createProjectRuntimeActionMock).toHaveBeenCalledWith({
+          name: "Projet V2-A2",
+          objective: "Créer une interface réelle.",
+          context: "Contexte local borné.",
+          criticality: "HIGH",
+          constraints: ["Sans IAM", "Sans persistance produit"],
+          shortReference: "V2-A2",
+          idempotencyKey: key,
+        }),
+      { timeout: 10_000 },
     );
-  });
+  },
+    15_000,
+  );

   it("keeps the idempotency key stable across a retry", async () => {
     createProjectRuntimeActionMock
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index 684ced0..67cd57e 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -2,11 +2,16 @@

 import { useEffect, useId, useRef, useState, useTransition } from "react";
 import { StatusPill } from "@/components/ui/StatusPill";
-import { projectAssistantSendAction } from "./actions";
+import {
+  projectAssistantDecideAction,
+  projectAssistantSendAction,
+} from "./actions";
 import type {
   AssistantHistoryMessage,
   AssistantToolEventDto,
+  F2TurnPayload,
 } from "./types";
+import type { F2DecisionKind, ProposalDto } from "./f2/types";
 import styles from "./project-assistant.module.css";

 type UiMessage = {
@@ -44,6 +49,23 @@ function statusLabel(status: AssistantToolEventDto["status"]): string {
   }
 }

+function modeFromResult(result: {
+  presentation?: string;
+  mode?: string;
+  model?: string | null;
+}): string {
+  if (result.presentation === "test_provider" || result.mode === "fixture") {
+    const model = result.model ? ` · ${result.model}` : "";
+    return `Mode démonstration / Fixture${model}`;
+  }
+  if (result.presentation === "openai_live" || result.mode === "live") {
+    const model = result.model ? ` · ${result.model}` : "";
+    return `Mode live${model}`;
+  }
+  if (result.mode === "unavailable") return "Assistant indisponible";
+  return "MODE À CONFIRMER";
+}
+
 export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
   const inputId = useId();
   const liveRegionId = useId();
@@ -52,10 +74,13 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
   const [toolEvents, setToolEvents] = useState<AssistantToolEventDto[]>([]);
   const [uiState, setUiState] = useState<UiState>("INITIAL");
   const [error, setError] = useState<string | null>(null);
-  const [modeLabel, setModeLabel] = useState("Mode démonstration / Fixture");
+  const [modeLabel, setModeLabel] = useState("MODE À CONFIRMER");
   const [ephemeralNotice, setEphemeralNotice] = useState(
     "Conversation éphémère — aucune persistence produit.",
   );
+  const [f2, setF2] = useState<F2TurnPayload | null>(null);
+  const [activeProposal, setActiveProposal] = useState<ProposalDto | null>(null);
+  const [reservesText, setReservesText] = useState("");
   const [isPending, startTransition] = useTransition();
   const listRef = useRef<HTMLDivElement | null>(null);

@@ -70,7 +95,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       top: el.scrollHeight,
       behavior: "smooth",
     });
-  }, [messages, toolEvents, error]);
+  }, [messages, toolEvents, error, activeProposal, f2]);

   const busy =
     isPending ||
@@ -79,6 +104,9 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
     uiState === "SOURCE_LOOKUP";
   const blocked = uiState === "BLOCKED";
   const canSend = !busy && !blocked && draft.trim().length > 0;
+  const gateOpen =
+    activeProposal?.morrisGateRequired === true &&
+    activeProposal.status === "DECISION_REQUIRED";

   function historyForRequest(): AssistantHistoryMessage[] {
     return messages
@@ -120,11 +148,7 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         return;
       }

-      if (result.mode === "fixture") {
-        setModeLabel("Mode démonstration / Fixture");
-      } else if (result.mode === "live") {
-        setModeLabel("Mode live (provider configuré)");
-      }
+      setModeLabel(modeFromResult(result));
       setEphemeralNotice(result.ephemeralNotice);
       setToolEvents((prev) => [...prev, ...result.toolEvents]);
       if (result.toolEvents.length > 0) {
@@ -138,6 +162,46 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
           content: result.text,
         },
       ]);
+      if (result.f2) {
+        setF2(result.f2);
+        setActiveProposal(result.f2.proposal);
+      } else {
+        setF2(null);
+        setActiveProposal(null);
+      }
+      setUiState("ANSWERED");
+    });
+  }
+
+  function decide(kind: F2DecisionKind) {
+    if (!activeProposal || busy || blocked) return;
+    startTransition(async () => {
+      setUiState("ASSISTANT_WORKING");
+      setError(null);
+      const result = await projectAssistantDecideAction({
+        projectId,
+        proposalId: activeProposal.proposalId,
+        decisionKind: kind,
+        reservesText: kind === "GO_WITH_RESERVES" ? reservesText : null,
+      });
+      if (!result.ok) {
+        setUiState("ERROR_RECOVERABLE");
+        setError(result.message);
+        if (result.proposal) setActiveProposal(result.proposal);
+        return;
+      }
+      setModeLabel(modeFromResult(result));
+      setEphemeralNotice(result.ephemeralNotice);
+      setF2(result.f2);
+      setActiveProposal(result.f2.proposal);
+      setMessages((prev) => [
+        ...prev,
+        {
+          id: nextId("assistant"),
+          role: "assistant",
+          content: result.text,
+        },
+      ]);
       setUiState("ANSWERED");
     });
   }
@@ -151,13 +215,15 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       <div className={styles.metaRow} data-testid="project-assistant-mode-pill">
         <StatusPill tone="blueFlush">{modeLabel}</StatusPill>
         <StatusPill tone="muted">Lecture seule</StatusPill>
+        <StatusPill tone="muted">AUCUNE EXÉCUTION</StatusPill>
       </div>
       <p className={styles.ephemeral} data-testid="project-assistant-ephemeral">
         {ephemeralNotice}
       </p>
       <p className={styles.scope} data-testid="project-assistant-scope">
-        Périmètre F1 : analyse · conversation · lecture Git/GitHub. Pas
-        d&apos;exécution Cursor, pas d&apos;écriture, pas de qualification F2.
+        Périmètre F1+F2 : analyse · conversation · lecture · qualification ·
+        proposition · gate humain. Pas d&apos;exécution Cursor, pas d&apos;écriture,
+        pas de destination OPS1.
       </p>

       <div
@@ -196,6 +262,197 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         )}
       </div>

+      {f2 ? (
+        <div
+          className={styles.f2Labels}
+          data-testid="project-assistant-f2-labels"
+          aria-live="polite"
+        >
+          {f2.labels.recommendation ? (
+            <StatusPill tone="blueFlush">{f2.labels.recommendation}</StatusPill>
+          ) : null}
+          {f2.labels.proposition ? (
+            <StatusPill tone="blueFlush">{f2.labels.proposition}</StatusPill>
+          ) : null}
+          {f2.labels.decisionRequired ? (
+            <StatusPill tone="orange">{f2.labels.decisionRequired}</StatusPill>
+          ) : null}
+          {f2.labels.decisionTaken ? (
+            <StatusPill tone="green">{f2.labels.decisionTaken}</StatusPill>
+          ) : null}
+          <StatusPill tone="muted">{f2.labels.noExecution}</StatusPill>
+        </div>
+      ) : null}
+
+      {f2?.qualification ? (
+        <section
+          className={styles.qualificationCard}
+          data-testid="project-assistant-qualification"
+          aria-labelledby="f2-qualification-title"
+        >
+          <h3 id="f2-qualification-title" className={styles.cardTitle}>
+            RECOMMANDATION
+          </h3>
+          <p className={styles.cardMeta}>
+            {f2.qualification.recommendationLabel}
+          </p>
+          <dl className={styles.cardDl}>
+            <div>
+              <dt>Cycle SFIA</dt>
+              <dd data-testid="f2-cycle">
+                {f2.qualification.cycleTypeId} — {f2.qualification.cycleLabel}
+              </dd>
+            </div>
+            <div>
+              <dt>Profil recommandé</dt>
+              <dd data-testid="f2-profile">{f2.qualification.recommendedProfile}</dd>
+            </div>
+            <div>
+              <dt>Rationale</dt>
+              <dd data-testid="f2-rationale">{f2.qualification.rationale}</dd>
+            </div>
+            <div>
+              <dt>Provenance</dt>
+              <dd data-testid="f2-qualification-provenance">
+                catalogue {f2.qualification.catalogVersion} ·{" "}
+                {f2.qualification.detailedStatus}
+                {f2.qualification.capitalizationViaCycleTypeId
+                  ? " · capitalisation via cycleType"
+                  : ""}
+              </dd>
+            </div>
+          </dl>
+        </section>
+      ) : null}
+
+      {activeProposal ? (
+        <section
+          className={styles.proposalCard}
+          data-testid="project-assistant-proposal"
+          aria-labelledby="f2-proposal-title"
+        >
+          <h3 id="f2-proposal-title" className={styles.cardTitle}>
+            PROPOSITION
+          </h3>
+          <p className={styles.cardMeta} data-testid="f2-proposal-id">
+            {activeProposal.proposalId} · statut {activeProposal.status}
+          </p>
+          <dl className={styles.cardDl}>
+            <div>
+              <dt>Demande reformulée</dt>
+              <dd>{activeProposal.rephrasedRequest}</dd>
+            </div>
+            <div>
+              <dt>Objectif</dt>
+              <dd>{activeProposal.objective}</dd>
+            </div>
+            <div>
+              <dt>Périmètre</dt>
+              <dd data-testid="f2-proposal-scope">{activeProposal.scope}</dd>
+            </div>
+            <div>
+              <dt>Hors périmètre</dt>
+              <dd data-testid="f2-proposal-out-of-scope">
+                {activeProposal.outOfScope.join(" · ")}
+              </dd>
+            </div>
+            <div>
+              <dt>Gate Morris</dt>
+              <dd data-testid="f2-gate-required">
+                {activeProposal.morrisGateRequired
+                  ? "DÉCISION REQUISE"
+                  : "NO MORRIS GATE REQUIRED"}
+              </dd>
+            </div>
+            <div>
+              <dt>Prochaine étape</dt>
+              <dd>{activeProposal.nextPossibleStep}</dd>
+            </div>
+            <div>
+              <dt>Contexte</dt>
+              <dd>
+                {activeProposal.contextSnapshot.projectId} /{" "}
+                {activeProposal.contextSnapshot.lpsId}@
+                {activeProposal.contextSnapshot.lpsVersion}
+              </dd>
+            </div>
+          </dl>
+          <p
+            className={styles.processLocal}
+            data-testid="f2-process-local-notice"
+          >
+            {activeProposal.processLocalNotice}
+          </p>
+          <p className={styles.noExecutionBanner} data-testid="f2-no-execution">
+            AUCUNE EXÉCUTION
+          </p>
+        </section>
+      ) : null}
+
+      {gateOpen ? (
+        <section
+          className={styles.gateCard}
+          data-testid="project-assistant-gate"
+          aria-labelledby="f2-gate-title"
+        >
+          <h3 id="f2-gate-title" className={styles.cardTitle}>
+            DÉCISION REQUISE
+          </h3>
+          <p className={styles.cardMeta}>
+            Décision humaine explicite liée à {activeProposal?.proposalId}
+          </p>
+          <label className={styles.reservesLabel} htmlFor={`${inputId}-reserves`}>
+            Réserves (obligatoires pour GO WITH RESERVES)
+          </label>
+          <textarea
+            id={`${inputId}-reserves`}
+            className={styles.reservesInput}
+            data-testid="f2-reserves-input"
+            rows={2}
+            value={reservesText}
+            disabled={busy}
+            onChange={(event) => setReservesText(event.target.value)}
+          />
+          <div className={styles.gateActions} role="group" aria-label="Décisions Morris">
+            {(
+              [
+                ["GO", "GO"],
+                ["GO_WITH_RESERVES", "GO WITH RESERVES"],
+                ["NO_GO", "NO-GO"],
+                ["AMEND", "AMEND"],
+              ] as const
+            ).map(([kind, label]) => (
+              <button
+                key={kind}
+                type="button"
+                className={styles.gateButton}
+                data-testid={`f2-decide-${kind}`}
+                disabled={busy}
+                onClick={() => decide(kind)}
+              >
+                {label}
+              </button>
+            ))}
+          </div>
+        </section>
+      ) : null}
+
+      {f2?.decision ? (
+        <section
+          className={styles.decisionCard}
+          data-testid="project-assistant-decision"
+          aria-live="polite"
+        >
+          <h3 className={styles.cardTitle}>DÉCISION PRISE</h3>
+          <p data-testid="f2-decision-kind">{f2.decision.kind}</p>
+          <p data-testid="f2-decision-scope">Scope: {f2.decision.scope}</p>
+          {f2.decision.readyForNextGatedStep ? (
+            <p data-testid="f2-ready-next">READY FOR NEXT GATED STEP</p>
+          ) : null}
+          <p className={styles.noExecutionBanner}>AUCUNE EXÉCUTION</p>
+        </section>
+      ) : null}
+
       <section
         className={styles.sources}
         aria-labelledby="project-assistant-sources-title"
@@ -342,7 +599,6 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
         </div>
       </form>

-      {/* Explicit absence of Cursor / write controls */}
       <div
         className={styles.srOnly}
         data-testid="project-assistant-no-cursor"
@@ -357,6 +613,13 @@ export function ProjectAssistantPanel({ projectId }: { projectId: string }) {
       >
         Aucune écriture Git ou GitHub
       </div>
+      <div
+        className={styles.srOnly}
+        data-testid="project-assistant-no-ops1-destination"
+        aria-hidden="true"
+      >
+        OPS1 n&apos;est pas la destination F2
+      </div>
     </div>
   );
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/actions.ts b/projects/sfia-studio/app/features/project-assistant/actions.ts
index 6249302..bae1275 100644
--- a/projects/sfia-studio/app/features/project-assistant/actions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/actions.ts
@@ -1,13 +1,20 @@
 "use server";

-import { orchestrateProjectAssistantTurn } from "./orchestrateTurn";
+import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+import { loadProjectRuntimeForAssistant } from "@/features/vertical-slice-ui/ProjectWorkspaceView";
+import { orchestrateAssistantSend } from "./f2/orchestrateF2";
+import { recordF2Decision } from "./f2/recordDecision";
+import { F2_PROCESS_LOCAL_NOTICE } from "./f2/proposalStore";
+import type { F2DecisionKind } from "./f2/types";
 import type {
   AssistantHistoryMessage,
+  ProjectAssistantContextDto,
+  ProjectAssistantDecideResult,
   ProjectAssistantSendResult,
 } from "./types";

 /**
- * Thin server action — Project Workspace F1 Assistant.
+ * Thin server action — Project Workspace Assistant (F1 + F2).
  * No OPS1 session. No Cursor. No Git write. No durable persistence.
  */
 export async function projectAssistantSendAction(input: {
@@ -15,5 +22,139 @@ export async function projectAssistantSendAction(input: {
   content: string;
   history?: AssistantHistoryMessage[];
 }): Promise<ProjectAssistantSendResult> {
-  return orchestrateProjectAssistantTurn(input);
+  return orchestrateAssistantSend(input);
+}
+
+function toContextDto(
+  result: Extract<
+    Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
+    { ok: true }
+  >,
+): ProjectAssistantContextDto {
+  return {
+    projectId: result.project.projectId,
+    name: result.project.name,
+    shortReference: result.project.shortReference ?? null,
+    objective: result.project.objective,
+    contextSummary: result.project.contextSummary,
+    criticality: result.project.criticality,
+    constraints: [...result.project.constraints],
+    lpsId: result.livingState.id,
+    lpsVersion: result.livingState.version,
+    lpsCreatedAt: result.livingState.createdAt,
+    doctrineId: result.doctrine.id,
+    doctrineVersion: result.doctrine.version,
+    doctrineDigest: result.doctrine.digest,
+    doctrineStatus: result.doctrine.status,
+    runtimeMode: result.disclosures.runtimeMode,
+    persistence: result.disclosures.persistence,
+    readiness: result.readiness.status,
+  };
+}
+
+/**
+ * Morris gate decision — client may only send proposalId, decisionKind,
+ * optional reserves, projectId. Authority is registered server-side.
+ */
+export async function projectAssistantDecideAction(input: {
+  projectId: string;
+  proposalId: string;
+  decisionKind: F2DecisionKind;
+  reservesText?: string | null;
+  /** Hostile — ignored if present. */
+  canActAsMorris?: unknown;
+  claimedAuthorityLevel?: unknown;
+}): Promise<ProjectAssistantDecideResult> {
+  const runtime = getRuntimeApplicationService();
+  if (!runtime.oa) {
+    return {
+      ok: false,
+      status: "decision_error",
+      code: "OA_STACK_UNAVAILABLE",
+      message: "Services OA process-local indisponibles pour la décision F2.",
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+
+  const projectResult = await loadProjectRuntimeForAssistant(input.projectId);
+  if (!projectResult.ok) {
+    return {
+      ok: false,
+      status: "project_not_found",
+      code: projectResult.error.code,
+      message: projectResult.error.message,
+      mode: "unavailable",
+      retryable: false,
+    };
+  }
+  const project = toContextDto(projectResult);
+
+  const recorded = await recordF2Decision({
+    proposalId: input.proposalId,
+    projectId: input.projectId,
+    decisionKind: input.decisionKind,
+    reservesText: input.reservesText,
+    canActAsMorris: input.canActAsMorris,
+    claimedAuthorityLevel: input.claimedAuthorityLevel,
+    currentContext: {
+      projectId: project.projectId,
+      lpsId: project.lpsId,
+      lpsVersion: project.lpsVersion,
+      doctrineDigest: project.doctrineDigest,
+    },
+    decisionServices: runtime.oa.decisionServices,
+    authorityResolver: runtime.oa.authorityResolver,
+    nowIso: () => runtime.oa!.clock.nowIso(),
+  });
+
+  if (!recorded.ok) {
+    return {
+      ok: false,
+      status: recorded.code === "STALE" ? "stale" : "decision_error",
+      code: recorded.code,
+      message: recorded.message,
+      mode: "fixture",
+      retryable: recorded.code === "STALE",
+      proposal: recorded.proposal ?? null,
+    };
+  }
+
+  const { decision, proposal } = recorded;
+  const textParts = [
+    "DÉCISION PRISE",
+    `${decision.kind} capturée pour ${proposal.proposalId}.`,
+    `Scope: ${decision.scope}.`,
+    decision.readyForNextGatedStep
+      ? "READY FOR NEXT GATED STEP"
+      : "Proposition non approuvée.",
+    "AUCUNE EXÉCUTION",
+    F2_PROCESS_LOCAL_NOTICE,
+  ];
+
+  return {
+    ok: true,
+    status: "ok",
+    mode: "fixture",
+    presentation: "unconfirmed",
+    text: textParts.join(" — "),
+    project,
+    ephemeralNotice: F2_PROCESS_LOCAL_NOTICE,
+    f2: {
+      turnKind: "f2_decision",
+      intentClass: "actionable",
+      qualification: null,
+      proposal,
+      decision,
+      labels: {
+        recommendation: null,
+        proposition: "PROPOSITION",
+        decisionRequired: null,
+        decisionTaken: "DÉCISION PRISE",
+        noExecution: "AUCUNE EXÉCUTION",
+      },
+      executionBlocked: true,
+      processLocalNotice: F2_PROCESS_LOCAL_NOTICE,
+    },
+  };
 }
diff --git a/projects/sfia-studio/app/features/project-assistant/index.ts b/projects/sfia-studio/app/features/project-assistant/index.ts
index 0ff6c03..e61d157 100644
--- a/projects/sfia-studio/app/features/project-assistant/index.ts
+++ b/projects/sfia-studio/app/features/project-assistant/index.ts
@@ -3,4 +3,5 @@ export type {
   ProjectAssistantSendResult,
   AssistantHistoryMessage,
   AssistantToolEventDto,
+  F2TurnPayload,
 } from "./types";
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 513d325..5c935ee 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -152,6 +152,7 @@ export async function orchestrateProjectAssistantTurn(input: {
       text: loop.text,
       mode: modeResolution.mode,
       presentation,
+      model: loop.usage?.model ?? null,
       toolRounds: loop.toolRounds,
       toolCalls: loop.toolCalls,
       sources,
diff --git a/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css b/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
index a543f25..4ebc7b9 100644
--- a/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
+++ b/projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
@@ -210,3 +210,129 @@
   white-space: nowrap;
   border: 0;
 }
+
+.f2Labels {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+
+.qualificationCard,
+.proposalCard,
+.gateCard,
+.decisionCard {
+  display: grid;
+  gap: 8px;
+  padding: 10px 12px;
+  border: 1px solid var(--sfia-border-soft);
+  border-radius: 10px;
+  background: #f7fafc;
+}
+
+.proposalCard {
+  border-color: #1d4e89;
+  background: #f3f7fb;
+}
+
+.gateCard {
+  border-color: #b45309;
+  background: #fffbeb;
+}
+
+.decisionCard {
+  border-color: #127c4c;
+  background: #f1faf5;
+}
+
+.cardTitle {
+  margin: 0;
+  font-size: 12px;
+  font-weight: 700;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: var(--sfia-ink);
+}
+
+.cardMeta {
+  margin: 0;
+  font-size: 12px;
+  color: var(--sfia-muted);
+}
+
+.cardDl {
+  margin: 0;
+  display: grid;
+  gap: 6px;
+}
+
+.cardDl div {
+  display: grid;
+  gap: 2px;
+}
+
+.cardDl dt {
+  font-size: 11px;
+  font-weight: 650;
+  color: var(--sfia-muted);
+  text-transform: uppercase;
+  letter-spacing: 0.03em;
+}
+
+.cardDl dd {
+  margin: 0;
+  font-size: 13px;
+  color: var(--sfia-ink);
+  line-height: 1.4;
+}
+
+.processLocal,
+.noExecutionBanner {
+  margin: 0;
+  font-size: 12px;
+  font-weight: 650;
+}
+
+.noExecutionBanner {
+  color: #7a1f16;
+}
+
+.reservesLabel {
+  font-size: 12px;
+  color: var(--sfia-ink);
+}
+
+.reservesInput {
+  width: 100%;
+  border: 1px solid var(--sfia-border-soft);
+  border-radius: 8px;
+  padding: 8px 10px;
+  font: inherit;
+  box-sizing: border-box;
+}
+
+.gateActions {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 8px;
+}
+
+.gateButton {
+  border: 1px solid #1d4e89;
+  background: #fff;
+  color: #1d4e89;
+  border-radius: 8px;
+  padding: 8px 12px;
+  font-size: 12px;
+  font-weight: 650;
+  cursor: pointer;
+}
+
+.gateButton:focus-visible {
+  outline: 2px solid #1d4e89;
+  outline-offset: 2px;
+}
+
+.gateButton:disabled {
+  opacity: 0.5;
+  cursor: not-allowed;
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index d2bc1ef..0c67e1a 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -1,15 +1,25 @@
 /**
- * F1 Project Assistant — ephemeral DTOs (no durable persistence).
+ * Project Assistant DTOs — F1 conversation + F2 qualification/proposal/gate.
+ * Ephemeral / process-local only (no durable persistence).
  */

-export type AssistantUiMode = "fixture" | "live" | "unavailable";
+import type {
+  DecisionDto,
+  IntentClass,
+  ProposalDto,
+  QualificationDto,
+} from "./f2/types";
+
+export type AssistantUiMode = "fixture" | "live" | "unavailable" | "unconfirmed";

 export type AssistantTurnStatus =
   | "ok"
   | "provider_unavailable"
   | "provider_error"
   | "project_not_found"
-  | "validation_error";
+  | "validation_error"
+  | "stale"
+  | "decision_error";

 export type AssistantHistoryMessage = {
   role: "user" | "assistant";
@@ -51,18 +61,45 @@ export type ProjectAssistantContextDto = {
   readiness: string;
 };

+export type F2TurnLabels = {
+  recommendation: "RECOMMANDATION" | null;
+  proposition: "PROPOSITION" | null;
+  decisionRequired: "DÉCISION REQUISE" | null;
+  decisionTaken: "DÉCISION PRISE" | null;
+  noExecution: "AUCUNE EXÉCUTION";
+};
+
+export type F2TurnPayload = {
+  turnKind:
+    | "f1_informative"
+    | "f2_clarification"
+    | "f2_proposal"
+    | "f2_blocked"
+    | "f2_decision";
+  intentClass: IntentClass;
+  qualification: QualificationDto | null;
+  proposal: ProposalDto | null;
+  decision: DecisionDto | null;
+  labels: F2TurnLabels;
+  executionBlocked: boolean;
+  processLocalNotice: string;
+};
+
 export type ProjectAssistantSendSuccess = {
   ok: true;
   status: "ok";
   text: string;
-  mode: AssistantUiMode;
+  mode: Exclude<AssistantUiMode, "unconfirmed">;
   presentation: "test_provider" | "openai_live";
+  /** Observed provider model when available (from usage.model). */
+  model?: string | null;
   toolRounds: number;
   toolCalls: number;
   sources: AssistantSourceDto[];
   toolEvents: AssistantToolEventDto[];
   project: ProjectAssistantContextDto;
   ephemeralNotice: string;
+  f2?: F2TurnPayload;
 };

 export type ProjectAssistantSendFailure = {
@@ -72,8 +109,25 @@ export type ProjectAssistantSendFailure = {
   message: string;
   mode: AssistantUiMode;
   retryable: boolean;
+  proposal?: ProposalDto | null;
+  f2?: F2TurnPayload;
 };

 export type ProjectAssistantSendResult =
   | ProjectAssistantSendSuccess
   | ProjectAssistantSendFailure;
+
+export type ProjectAssistantDecideSuccess = {
+  ok: true;
+  status: "ok";
+  mode: Exclude<AssistantUiMode, "unconfirmed">;
+  presentation: "test_provider" | "openai_live" | "unconfirmed";
+  text: string;
+  project: ProjectAssistantContextDto;
+  ephemeralNotice: string;
+  f2: F2TurnPayload;
+};
+
+export type ProjectAssistantDecideResult =
+  | ProjectAssistantDecideSuccess
+  | ProjectAssistantSendFailure;
diff --git a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
index e4357ae..2d8c556 100644
--- a/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
+++ b/projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
@@ -47,6 +47,227 @@ export class FakeConversationProvider implements ConversationProvider {
     if (lastUser?.content.includes("__OPS1_FORCE_PROVIDER_ERROR__")) {
       throw new Error("FAKE_PROVIDER_ERROR");
     }
+
+    // F2 deterministic structured intent JSON (TEST/FAKE only)
+    if (lastUser?.content.includes("__F2_INFORMATIVE__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "informative",
+          candidateCycleTypeId: null,
+          signals: null,
+          objective: "Résumer le projet",
+          scope: null,
+          rephrasedRequest: "Résumer l'objectif du projet",
+          outOfScope: [],
+          risks: [],
+          reservations: [],
+          stopConditions: [],
+          activatedBlocks: [],
+          expectedOutcome: null,
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
+    if (lastUser?.content.includes("__F2_ACTIONABLE__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:delivery",
+          signals: {
+            structuralChange: false,
+            securityImpact: false,
+            architectureImpact: false,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: true,
+          },
+          objective: "Préparer la prochaine étape fonctionnelle",
+          scope: "Proposition bornée sans exécution",
+          rephrasedRequest: "Préparer une proposition de livraison bornée",
+          outOfScope: ["Cursor", "Git write", "PR"],
+          risks: ["Confusion reco/décision"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification", "proposition"],
+          expectedOutcome: "Proposition structurée prête pour revue",
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
+    if (lastUser?.content.includes("__F2_STRUCTURING__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:functional-architecture",
+          signals: {
+            structuralChange: true,
+            securityImpact: false,
+            architectureImpact: true,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: false,
+          },
+          objective: "Faire évoluer l'architecture produit",
+          scope: "Changement d'architecture structurant",
+          rephrasedRequest: "Préparer une proposition d'architecture",
+          outOfScope: ["Exécution", "PR", "merge"],
+          risks: ["Impact architecture"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification", "proposition", "gate"],
+          expectedOutcome: "Gate Morris requis",
+          criticalJustification: "Besoin métier structurant documenté",
+          requestedOperation: "architecture change",
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
+    if (lastUser?.content.includes("__F2_AMBIGUOUS__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "ambiguous",
+          candidateCycleTypeId: null,
+          signals: null,
+          objective: null,
+          scope: null,
+          rephrasedRequest: "Fais le nécessaire",
+          outOfScope: [],
+          risks: [],
+          reservations: [],
+          stopConditions: [],
+          activatedBlocks: [],
+          expectedOutcome: null,
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
+    if (lastUser?.content.includes("__F2_EXECUTION__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "execution_request",
+          candidateCycleTypeId: "cyc:delivery",
+          signals: {
+            structuralChange: true,
+            securityImpact: false,
+            architectureImpact: true,
+            dataImpact: false,
+            irreversible: false,
+            lowRiskBounded: false,
+          },
+          objective: "Lancer Cursor et créer une PR",
+          scope: "Exécution produit demandée — refusée en F2",
+          rephrasedRequest: "Demande d'exécution Cursor / PR",
+          outOfScope: ["Exécution réelle"],
+          risks: ["Exécution hors périmètre F2"],
+          reservations: [],
+          stopConditions: ["AUCUNE EXÉCUTION"],
+          activatedBlocks: ["qualification", "proposition", "gate"],
+          expectedOutcome: "Proposition sans exécution",
+          criticalJustification: "Demande d'exécution explicite à borner sans lancer d'agent",
+          requestedOperation: "cursor create pr",
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
+    if (lastUser?.content.includes("__F2_CRITICAL_NO_JUSTIFICATION__")) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "actionable",
+          candidateCycleTypeId: "cyc:security",
+          signals: {
+            structuralChange: true,
+            securityImpact: true,
+            architectureImpact: true,
+            dataImpact: true,
+            irreversible: true,
+            lowRiskBounded: false,
+          },
+          objective: "Changer l'architecture sécurité",
+          scope: "Impact structurant sécurité",
+          rephrasedRequest: "Modifier architecture sécurité",
+          outOfScope: ["Exécution"],
+          risks: ["Impact critique"],
+          reservations: [],
+          stopConditions: ["Justification Critical obligatoire"],
+          activatedBlocks: ["qualification"],
+          expectedOutcome: null,
+          criticalJustification: null,
+          requestedOperation: "architecture security change",
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
+    // Default unmarked analysis prompts (system asks for JSON): informative fail-open for F1
+    if (messages.some((m) => m.role === "system" && m.content.includes("SFIA Studio F2"))) {
+      return {
+        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
+          intentClass: "informative",
+          candidateCycleTypeId: null,
+          signals: null,
+          objective: null,
+          scope: null,
+          rephrasedRequest: (lastUser?.content ?? "").slice(0, 200),
+          outOfScope: [],
+          risks: [],
+          reservations: [],
+          stopConditions: [],
+          activatedBlocks: [],
+          expectedOutcome: null,
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
+
     const historyLen = messages.length;
     const text =
       this.scripted?.[this.callCount - 1] ??
diff --git a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
index 4fbc127..328e3bc 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
@@ -7,6 +7,7 @@ import {
   ResolveDoctrinePackage,
   Sha256DigestVerificationAdapter,
   SystemClock,
+  type ClockPort,
   type DoctrinePackagePin,
 } from "@/lib/oa/doctrine";
 import {
@@ -69,6 +70,9 @@ export interface LocalProjectFacade {
 export interface LocalVerticalSliceServices {
   readonly facade: LocalProjectFacade;
   readonly architecture: LocalVerticalSliceArchitecture;
+  /** Shared OA ProjectServices instance used by the LocalProjectFacade. */
+  readonly projectServices: ProjectServices;
+  readonly clock: ClockPort;
 }

 class RandomLocalProjectIdSource implements LocalProjectIdSource {
@@ -494,5 +498,7 @@ export function createLocalVerticalSliceServices(
       () => clock.nowIso(),
     ),
     architecture: LOCAL_VERTICAL_SLICE_ARCHITECTURE,
+    projectServices,
+    clock,
   });
 }
diff --git a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
index 5cb5cc5..422315a 100644
--- a/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
+++ b/projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
@@ -11,7 +11,19 @@ import {
   type LocalVerticalSliceServices,
 } from "@/lib/vertical-slice-core";
 import type { BoundedAtomicAuditStore } from "@/lib/d1/boundedAtomicAudit";
-import type { DoctrinePackagePin } from "@/lib/oa/doctrine";
+import type { DoctrinePackagePin, ClockPort } from "@/lib/oa/doctrine";
+import {
+  createCkcQualificationServices,
+  createInMemoryCycleServices,
+  type CkcQualificationServices,
+  type CycleServices,
+} from "@/lib/oa/cycle";
+import {
+  MemoryAuthorityResolver,
+  createInMemoryDecisionServices,
+  type DecisionServices,
+} from "@/lib/oa/decision";
+import type { ProjectServices } from "@/lib/oa/project";
 import {
   toCreateLocalProjectCommand,
   toCreateProjectRuntimeFailure,
@@ -47,6 +59,15 @@ export interface RuntimeApplicationServiceOptions {
   readonly facade?: LocalProjectFacade;
 }

+export type RuntimeOaStack = {
+  readonly projectServices: ProjectServices;
+  readonly clock: ClockPort;
+  readonly cycleServices: CycleServices;
+  readonly ckcQualification: CkcQualificationServices;
+  readonly decisionServices: DecisionServices;
+  readonly authorityResolver: MemoryAuthorityResolver;
+};
+
 function resolveAudit(
   mode: RuntimeAuditMode,
   sqliteAuditStore: BoundedAtomicAuditStore | undefined,
@@ -65,20 +86,47 @@ function resolveAudit(
   return new NoOpLocalProjectCreationAudit();
 }

+function wireOaStack(
+  projectServices: ProjectServices,
+  clock: ClockPort,
+): RuntimeOaStack {
+  const cycleServices = createInMemoryCycleServices({ projectServices, clock });
+  const ckcQualification = createCkcQualificationServices({ clock });
+  const authorityResolver = new MemoryAuthorityResolver();
+  const decisionServices = createInMemoryDecisionServices({
+    projectServices,
+    cycleServices,
+    clock,
+    authorityResolver,
+  });
+  return Object.freeze({
+    projectServices,
+    clock,
+    cycleServices,
+    ckcQualification,
+    decisionServices,
+    authorityResolver,
+  });
+}
+
 /**
  * Application runtime service over V1 LocalProjectFacade.
  * Does not duplicate T-A0/T-A1 rules; maps serializable DTOs only.
+ * Exposes shared OA stack for F2 (same ProjectServices instance).
  */
 export class RuntimeApplicationService {
   private readonly facade: LocalProjectFacade;
   readonly architecture: LocalVerticalSliceServices["architecture"];
+  readonly oa: RuntimeOaStack | null;

   constructor(
     facade: LocalProjectFacade,
     architecture: LocalVerticalSliceServices["architecture"],
+    oa: RuntimeOaStack | null = null,
   ) {
     this.facade = facade;
     this.architecture = architecture;
+    this.oa = oa;
   }

   /** Use case: Create Project via V1 facade. */
@@ -115,6 +163,7 @@ export function createRuntimeApplicationService(
     return new RuntimeApplicationService(
       options.facade,
       LOCAL_VERTICAL_SLICE_ARCHITECTURE,
+      null,
     );
   }

@@ -128,5 +177,10 @@ export function createRuntimeApplicationService(
     audit: resolveAudit(options.auditMode ?? "noop", options.sqliteAuditStore),
   });

-  return new RuntimeApplicationService(services.facade, services.architecture);
+  const oa = wireOaStack(services.projectServices, services.clock);
+  return new RuntimeApplicationService(
+    services.facade,
+    services.architecture,
+    oa,
+  );
 }
```

---

## 5. Native OA reuse map

| Capability | Usage in F2 Delivery |
|---|---|
| `QualifyCycleWithCkc` / cycle catalog / signals | **REUSED** via `f2/qualify.ts` |
| `isMorrisDecision: false` | **ENFORCED** on qualification DTO + tests AC-F2-23 |
| Capitalization via `cycleTypeId` (not profile) | **ENFORCED** AC-F2-22 |
| Epistemic recommendation labeling | Visible `RECOMMANDATION` / non-décisionnelle |
| `HumanDecision` + options GO / NO-GO / AMEND / GO_WITH_RESERVES | **REUSED** via OA DecisionServices in `recordDecision.ts` |
| `MemoryAuthorityResolver` + evidence register | **REUSED**; evidence source `LOCAL_PROCESS_MORRIS_DEMO_AUTHORITY` server-side |
| Confirmation N1–N3 | N3 ≠ Morris preserved; client authority claims ignored |
| ExecutionContract executing / selectedAgentRef | **NOT USED** — deferred F3; proposal `agentBinding=NOT_AVAILABLE` |
| OPS1 product runtime | **NOT COUPLED** |

---

## 6. Provider reuse

| Item | Behavior |
|---|---|
| Conversation provider | Existing platform AI stack (`OPS1_CONVERSATION_PROVIDER=fake` for delivery proof) |
| Live OpenAI | **0 calls** for Delivery proof (`liveOpenAiCalls: 0` in runtime report) |
| Fake markers | `__F2_INFORMATIVE__` `__F2_ACTIONABLE__` `__F2_AMBIGUOUS__` `__F2_EXECUTION__` `__F2_CRITICAL_NO_JUSTIFICATION__` in `fakeProvider.ts` |
| F1 markers | Preserved (`__CT_*` / prior) |
| Response tagging | `[TEST/FAKE · NON LIVE]` |

---

## 7. Authority model implementation

- Gate CTAs call server action `recordF2Decision` with proposalId + projectId + decisionKind + currentContext snapshot.
- Client may send `canActAsMorris` / `claimedAuthorityLevel` — **ignored for authority**; server registers Local Morris demo evidence via OA resolver.
- Hostile client claim covered by test AC-F2-13/14/15/16 (`canActAsMorris: true` client claim still goes through server evidence path; executionPerformed=false).
- Scope bound to `f2-proposal:<proposalId>`.
- No LLM auto-decision.

---

## 8. Stale strategy

- Proposal stores `contextSnapshot` { projectId, lpsId, lpsVersion, doctrineDigest }.
- Before decision: `contextMatches` vs caller `currentContext`; mismatch → mark `STALE`, refuse GO (`code=STALE`) — AC-F2-19.
- Silent reuse of stale proposal for GO is impossible.

---

## 9. Process-local disclosure

- `F2_PROCESS_LOCAL_NOTICE` on every proposal.
- UI shows process-local banner + ephemeral conversation notice.
- Store is in-memory (`globalThis` Map) — restart/reset clears proposals/decisions.
- AC-F2-18 / AC-F2-26 covered.

---

## 10. User Trust changes

- Initial provider state: **MODE À CONFIRMER** / Lecture seule / AUCUNE EXÉCUTION (not false Fixture label).
- After turn: fixture vs live derived from actual provider presentation/telemetry; model surfaced when available.
- Provenance / sources visible on qualification card (`f2-qualification-provenance`).
- Labels: RECOMMANDATION · PROPOSITION · DÉCISION REQUISE · DÉCISION PRISE · AUCUNE EXÉCUTION.

---

## 11. AC-F2-01 → AC-F2-27

| ID | Result | Brief evidence |
|---|---|---|
| AC-F2-01 | **PASS** | Informative `__F2_INFORMATIVE__` → `f1_informative`, proposal null (unit + runtime 02) |
| AC-F2-02 | **PASS** | Actionable triggers qualification visible (unit + runtime 03) |
| AC-F2-03 | **PASS** | Ambiguous → clarification, no proposal |
| AC-F2-04 | **PASS** | Cycle SFIA recommended visible on qualification/proposal |
| AC-F2-05 | **PASS** | Profile + rationale on proposal card |
| AC-F2-06 | **PASS** | `recommendationLabel` matches RECOMMANDATION; `isMorrisDecision=false` |
| AC-F2-07 | **PASS** | Sources/provenance testid + UI |
| AC-F2-08 | **PASS** | Structured proposal card distinct from chat |
| AC-F2-09 | **PASS** | Scope + outOfScope length > 0 |
| AC-F2-10 | **PASS** | `morrisGateRequired` explicit; UI gate / no-gate |
| AC-F2-11 | **PASS** | Critical without justification blocks proposal |
| AC-F2-12 | **PASS** | Gate requires human CTAs (GO/NO-GO/AMEND) |
| AC-F2-13 | **PASS** | GO bound to proposal id/scope; status APPROVED |
| AC-F2-14 | **PASS** | NO-GO → REFUSED; executionPerformed=false |
| AC-F2-15 | **PASS** | AMEND → AMENDMENT_REQUIRED |
| AC-F2-16 | **PASS** | After GO: readyForNextGatedStep; executionPerformed=false |
| AC-F2-17 | **PASS** | No Cursor CTA; git write/PR/merge absent; runtime 06 |
| AC-F2-18 | **PASS** | Process-local notice visible |
| AC-F2-19 | **PASS** | Doctrine digest mismatch → STALE refuse |
| AC-F2-20 | **PASS** | No OPS1 destination in F2 UI path; importBoundaries forbid ops1 |
| AC-F2-21 | **PASS** | Status pills/labels distinguish states; runtime screenshots 01–06 |
| AC-F2-22 | **PASS** | Capitalization via cycleTypeId; profile not capitalization |
| AC-F2-23 | **PASS** | `isMorrisDecision` false on qualify |
| AC-F2-24 | **PASS** | Proposal JSON excludes executing/completed/failed; agentBinding NOT_AVAILABLE |
| AC-F2-25 | **PASS** | Execution request proposes + blocks execution; gate required |
| AC-F2-26 | **PASS** | Reset store → getProposal missing = null (no durable authority) |
| AC-F2-27 | **PASS** | Gate CTAs are buttons (keyboard-operable); states semantically distinct in UI |

**Essential AC FAIL count:** 0

---

## 12. Targeted tests + broad regression + typecheck + lint + build + diff check

Evidence from Delivery implementation agent (same worktree; not re-mutated for this Review Pack):

| Check | Result |
|---|---|
| Targeted `__tests__/project-assistant` + UI/shell | **29 passed** |
| Broad vitest excl. `__tests__/oa/finops/postgres/**` | **157 files / 1600 tests passed** |
| `npm run typecheck` | **PASS** |
| `npm run lint` | **PASS** |
| `npm run build` | **PASS** |
| `git diff --check` | **PASS** (re-verified this pack) |

FinOps postgres suite **excluded** (known ECONNREFUSED without local DB) — environmental reserve, non-blocking.

---

## 13. Import boundaries

- `importBoundaries.test.ts` (project-assistant + vertical-slice-runtime) extended to forbid `ops1` / execution-run / cursor product imports in F2 paths.
- F2 modules import OA + project-assistant + platform AI only — no OPS1 product coupling.

---

## 14. Security negative tests

Covered in `f2.orchestrate.test.ts` / decision suite:
- Invalid / incomplete intent JSON → fail-closed ambiguous / parseOk false
- Unknown cycleType → parseOk false
- Client `canActAsMorris` claim does not bypass server evidence path
- Stale context refuses GO
- Execution request never sets executionPerformed / UI blocks exec
- Proposal never exposes executing/completed/failed or selectedAgentRef
- No repo write / Cursor CTA in F2 UI (runtime 06)

---

## 15. Runtime fake proof + screenshots + report summary

Port **3021**, `OPS1_CONVERSATION_PROVIDER=fake`, live OpenAI unset. Live **3020 / PID 31748 preserved**.

### `cat .tmp-sfia-review/f2-delivery/runtime-proof-report.json`

```json
{
  "fakeProvider": true,
  "liveOpenAiCalls": 0,
  "port": 3021,
  "baseUrl": "http://localhost:3021",
  "commit": "1847fc61f384e13b15651ed914286fe87ac7133c",
  "originMain": "1847fc61f384e13b15651ed914286fe87ac7133c",
  "scenarios": [
    {
      "id": "01-provider-unconfirmed",
      "ok": true,
      "detail": "mode=\"MODE À CONFIRMER Lecture seule AUCUNE EXÉCUTION\""
    },
    {
      "id": "02-informative-f1",
      "ok": true,
      "detail": "proposalCount=0"
    },
    {
      "id": "03-actionable-proposal",
      "ok": true,
      "detail": "cycle=true profile=true"
    },
    {
      "id": "04-decision-required",
      "ok": true,
      "detail": "gate=\"DÉCISION REQUISE\" noExec=true"
    },
    {
      "id": "05-go-captured",
      "ok": true,
      "detail": "kind=GO scope=Scope: f2-proposal:prop:f2:9b852181-4873-49c0-9f0d-92e84f0f26b0 ready=true"
    },
    {
      "id": "06-execution-bounded",
      "ok": true,
      "detail": "execBlockedUi=true noCursorCta=true"
    }
  ],
  "screenshotPaths": [
    "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-delivery/screenshots/01-f2-ready-provider-unconfirmed.png",
    "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-delivery/screenshots/02-f2-informative-remains-f1.png",
    "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-delivery/screenshots/03-f2-actionable-qualification-proposal.png",
    "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-delivery/screenshots/04-f2-decision-required.png",
    "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-delivery/screenshots/05-f2-go-decision-captured.png",
    "/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-delivery/screenshots/06-f2-execution-request-bounded.png"
  ],
  "executionCount": 0,
  "gitWriteCount": 0,
  "cursorCount": 0,
  "allPassed": true
}
```

### Screenshot paths
- `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-delivery/screenshots/01-f2-ready-provider-unconfirmed.png`
- `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-delivery/screenshots/02-f2-informative-remains-f1.png`
- `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-delivery/screenshots/03-f2-actionable-qualification-proposal.png`
- `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-delivery/screenshots/04-f2-decision-required.png`
- `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-delivery/screenshots/05-f2-go-decision-captured.png`
- `/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/f2-delivery/.tmp-sfia-review/f2-delivery/screenshots/06-f2-execution-request-bounded.png`

### Scenario summary
| id | ok | detail |
|---|---|---|
| `01-provider-unconfirmed` | True | mode="MODE À CONFIRMER Lecture seule AUCUNE EXÉCUTION" |
| `02-informative-f1` | True | proposalCount=0 |
| `03-actionable-proposal` | True | cycle=true profile=true |
| `04-decision-required` | True | gate="DÉCISION REQUISE" noExec=true |
| `05-go-captured` | True | kind=GO scope=Scope: f2-proposal:prop:f2:9b852181-4873-49c0-9f0d-92e84f0f26b0 ready=true |
| `06-execution-bounded` | True | execBlockedUi=true noCursorCta=true |

| **allPassed** | **True** | liveOpenAiCalls=0 executionCount=0 gitWriteCount=0 cursorCount=0 |

---

## 16. Mutation counters

| Mutation | Count |
|---|---:|
| live OpenAI calls (delivery proof) | **0** |
| Cursor product actions | **0** |
| Git write (product) | **0** |
| Project commits | **0** |
| Project push | **0** |
| Project PR | **0** |
| Project merge | **0** |
| FinOps lot mutations | **0** |
| OPS1 product mutations | **0** |
| ExecutionRun | **0** |
| Handoff publish (sfia/review-handoff only) | pending this pack |

HEAD remains `1847fc61f384e13b15651ed914286fe87ac7133c`.

---

## 17. Réserves

| ID | Topic | Status |
|---|---|---|
| **R-FinOps-PG** | FinOps postgres suite ECONNREFUSED without local DB | **NON-BLOCKING** — excluded from Delivery suite; no FinOps reopen |
| **R-Process-Local** | Proposal/decision store process-local / non-durable | **ACCEPTED LIMITATION** (design M) — disclosed in UI; AC-F2-18/26 PASS |
| **R-Live-3020** | Shared live server on 3020 | **PRESERVED** — proof on 3021 only |

No essential AC FAIL. Reserves do not block PASS verdict form.

---

## 18. Anti-claims

- Does **not** claim F3 / Cursor execution / ExecutionRun / selectedAgentRef
- Does **not** claim durable persistence / IAM productization
- Does **not** claim live OpenAI used for Delivery proof
- Does **not** claim FinOps postgres suite green
- Does **not** claim project commit / push / PR / merge
- Does **not** claim OPS1 deleted or OPS1 as F2 destination
- Does **not** claim CKC fallback has execution authority
- Does **not** consume `GO COMMIT — F2 …` (candidate only)
- Does **not** kill or replace live PID 31748 on port 3020

---

## 19. Do Not Build (verified absent)

Cursor execution · worktree product execution · ExecutionRun · selectedAgentRef · executing/completed/failed · Git/GitHub write produit · push/PR/merge · durable persistence · IAM complet · F3 · full evidence pipeline · OPS1 deletion · nouveau moteur IA / provider / Tool Router / Decision Engine · Figma baseline · Studio redesign.

---

## 20. Final Git Truth (pre-handoff publish)

| Field | Value |
|---|---|
| branch | `delivery/sfia-studio-f2-qualification-proposal-gate` |
| HEAD | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| origin/main | `1847fc61f384e13b15651ed914286fe87ac7133c` |
| project commit | **NONE** |
| Synthesis-only | **NO** |
| status | uncommitted F2 delivery diffs + `?? .tmp-sfia-review/` + created f2 files |

```
 M projects/sfia-studio/app/__tests__/project-assistant/ProjectAssistantPanel.test.tsx
 M projects/sfia-studio/app/__tests__/project-assistant/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-runtime/importBoundaries.test.ts
 M projects/sfia-studio/app/__tests__/vertical-slice-ui/createProjectUi.test.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/actions.ts
 M projects/sfia-studio/app/features/project-assistant/index.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/project-assistant.module.css
 M projects/sfia-studio/app/features/project-assistant/types.ts
 M projects/sfia-studio/app/lib/platform/ai/fakeProvider.ts
 M projects/sfia-studio/app/lib/vertical-slice-core/localProjectComposition.ts
 M projects/sfia-studio/app/lib/vertical-slice-runtime/service.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/
```

---

## 21. Gate suivant

```
GO COMMIT — F2 QUALIFICATION + PROPOSITION + GATE SFIA STUDIO
```

Not consumed. Authorizes only exact validated project commit after ChatGPT/Morris — no push/PR/merge in that gate unless separately authorized.

---

## Publisher note

Review Handoff L3: publish this file only to `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`. No project commit/push.
