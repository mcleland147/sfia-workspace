# ChatGPT Review Pack — SFIA Studio MW3 Critical Correction after Recovery

| Field | Value |
| --- | --- |
| **Timestamp (Europe/Paris)** | 2026-09-02 20:02:00 CEST |
| **Timestamp (UTC)** | 2026-09-02T18:02:00Z |
| **Cycle** | Delivery projet — Critical Review Correction |
| **Type** | RUN |
| **Profile** | CRITICAL |
| **Repository** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-mw3-correction` |
| **Correction branch** | `cursor/mw3-cognitive-correction-post-recovery` · **LOCAL ONLY** |
| **Entry substrate** | `c76ae54f2aba6d40d0082f6f93775e72cbaa2ff2` |
| **MW3_CORRECTION_IMPLEMENTATION_ANCHOR** | `4e123fc5699232cc976faaf5e1a63057b09e4369` |
| **Review Pack docs commit** | `d36a4f3a4bb6582971ea91f16b83a7b4e9b85e4e` |
| **Final local tip at pack pin** | `d36a4f3a4bb6582971ea91f16b83a7b4e9b85e4e` (LOCAL GIT TRUTH WINS after pin) |
| **origin/main** | `c352441c2a6ab012aecae7606e0bb9af8fc9e7e7` |
| **Recovery Handoff** | `969585c6c55b1e9c991e00b1a89284e01ba25ce5` |
| **Recovery Handoff blob** | `1ed1e881ce250dcbf08be320398c9e4bbe7779a4` |
| **Historical implementation** | `806e814420bd4049297edc910920d93fb6fc8037` — **LOST / provenance-only** |
| **source_handoff_commit (historical)** | `ab61c18a041b639cbaf1654980de3f7b87e060c8` |

---

## A. Metadata

LOCAL GIT TRUTH WINS.

Correction worktree created from exact substrate `c76ae54f` (recovery implementation anchor). Recovery branch `recovery/mw3-delivery-rematerialization-ab61c18a` remains at docs-only `db3a9b71` with empty app diff vs `c76ae54f`.

`move_agent_to_root` aborted (local-only branch). All edits used the persistent correction worktree path.

---

## B. Authority

**Recovery-1 GO:** rematerialize without inference — STOP.
**Recovery-2 GO:** bounded inference of 5 glue files — FUNCTIONAL D0 rematerialization.
**ChatGPT Recovery Review:** PASS on substrate `c76ae54f` / Recovery Handoff `969585c6`.
**This GO consumed:** GO MW3 CRITICAL CORRECTION — correct BLK-MW3-CRIT-01, CORR-MW3-CRIT-02, CORR-MW3-CRIT-03.

**NOT performed:** REAL OpenAI · MW3 closure · Cognitive Completion proof · runtime v3 · MW4 · Hosted Search · production routing · Responses compaction · package/SDK upgrade · new persistence · new provider · generic contradiction engine · Roadmap/C1/C5/doctrine · project push/PR/merge · force.

---

## C. Sources read

Process: cycle execution template · routing guide (contract via GO) · operating model (contract via GO) · rules and guardrails.

Studio at substrate: Build Doctrine · Roadmap · Product Completion cadrage.

MW3: C5 `05-nora-source-locked-cognitive-backlog.md` MW3-S01/S02 · doc08 trajectory.

v3 33/34/35 (validation only, not mutated).

Correction entry: `969585c6:sfia-review-handoff/latest-chatgpt-review.md`.

Code inspected: `package.json` openai `^6.48.0` / `@openai/agents` `^0.17.0`; `runNoraAgentsTurn.ts`; `providerAgentsModel.ts`; `runNoraCognitiveTurn.ts`; `intentAnalysis.ts`; `orchestrateF2.ts`; `orchestrateTurn.ts`; `actions.ts`; `collectToolTelemetry.ts`; OA Evidence types/reader; Fake provider; recovered `contradictionDisposition.ts` / `cognitiveStop.ts`.

---

## D. Convergence

Capability remains MW3-S01 (candidate vs evidence-backed) and MW3-S02 (Cognitive STOP honesty).

Trajectory: MW0 → MW1 Option C / Memory B → MW2 CWP → **MW3 contradiction + STOP (this correction)** → MW4 later.

**MW4 NOT AUTHORIZED.**

KEEP: Option C / Agents SDK Runner; F1/F2 orchestration; source/tool loop; Evidence seams; MW0 harness; Memory B; CWP; recovered disposition/STOP controllers.

ADAPT: F2 structured intent schema (optional `contradictionCandidate`); Cognitive STOP precedence; existing MW3 UI surface.

COMPLETE: standard-path derivation; fail-closed governing STOP; visible anatomy; C01–C16 public-entry proof.

REJECT: second engine; Hosted Search; new persistence; new provider; MW4.

---

## E. OpenAI Capability Fit

Installed primitives: OpenAI SDK + Agents SDK already present. F2 already uses `completeStructured` + `F2_INTENT_JSON_SCHEMA`. F1 already uses `runNoraAgentsTurn` / Fake `completeRound`. OA Evidence already has `repository.findById`.

**Chosen disposition:** COMBINE native candidate cognition (structured intent field) + SFIA evidence qualification (`disposeContradiction`) + existing STOP controller.

Why no second engine: candidate is an extra JSON field on the existing F2 structured call; qualification reuses recovered controllers.

Why no Hosted Search: C5 MW3 does not select it; claimed Evidence IDs are resolved against existing OA Evidence / Fake catalog only.

Hard separations honored: model candidate ≠ evidence_backed; model confidence ≠ Evidence; tool trace ≠ Evidence automatically; OpenAI HITL ≠ Cognitive STOP; `trustedSfiaProfile` remains null on product path.

---

## F. Pre-correction seam map

| Seam | Rec | Role after correction |
| --- | --- | --- |
| `projectAssistantSendAction` | **KEEP** | Thin `{projectId,content,history}` — **no client epistemic fields** |
| `orchestrateAssistantSend` | **COMPLETE** | Derives assessment from intent candidate + available Evidence |
| `analyzeIntent` / schema | **ADAPT** | Optional untrusted `contradictionCandidate` |
| `orchestrateProjectAssistantTurn` | **KEEP** | Still accepts assessment (historical injection + product derivation) |
| `runNoraCognitiveTurn` / `withMw3Fields` | **KEEP** | Disposition + STOP after Agents turn |
| `disposeContradiction` | **KEEP** | Unchanged fail-closed promotion |
| `decideCognitiveStop` | **ADAPT** | Governing invalidation precedence (CRIT-02) |
| `collectToolTelemetry` | **KEEP** | Not treated as Evidence |
| `mw3AvailableEvidence` | **COMPLETE** | Resolve claimed IDs vs Fake catalog / OA `findById` |
| `deriveMw3Assessment` | **COMPLETE** | Candidate + available pointers → assessment input (not final disposition) |
| Panel | **ADAPT** | Visible anatomy (CRIT-03) |
| Eval harness | **KEEP** | `d0Runner` type-only `contradictionCandidate: null` |

**Candidate signal origin:** F2 `analyzeIntent` structured `contradictionCandidate` (untrusted).
**Evidence qualification location:** `deriveMw3ContradictionAssessment` then `disposeContradiction` inside `withMw3Fields`.
**STOP location:** `decideCognitiveStop` in `withMw3Fields`.
**UI:** `toMw3Surface` → `ProjectAssistantPanel` `project-assistant-mw3-surface`.

---

## G. BLK-MW3-CRIT-01

**Root cause:** public `projectAssistantSendAction` → `orchestrateAssistantSend` never derived/passed `contradictionAssessment`. MW3 ran only when tests injected it into `orchestrateProjectAssistantTurn`.

**Correction:** On the informative F1 product path, `orchestrateAssistantSend` derives assessment from the untrusted intent candidate and resolved Evidence pointers, then passes it into the same `orchestrateProjectAssistantTurn` → `runNoraCognitiveTurn` → `disposeContradiction` / `decideCognitiveStop` chain.

**Client cannot author epistemic truth:** `projectAssistantSendAction` signature unchanged.

**C01/C04 proof** starts at `projectAssistantSendAction` with Fake provider via `setConversationProviderForTests` (sendAction cannot take a provider argument; this is the real public server entry). Tests do **not** pass `contradictionAssessment`.

Primary public-path proof does **not** manually inject final disposition, accepted Evidence IDs, or STOP decision.

---

## H. CORR-MW3-CRIT-02

**Old:** `localImpactOnly===true OR governingPremiseInvalidated!==true` → continue. Hostile pair continued.

**Corrected:** if `governingPremiseInvalidated===true` → COGNITIVE_STOP even when `localImpactOnly===true`. Else continue (`F_*`).

**Hostile proof C07:** unit + product path PASS (`cognitiveStop=true`, `outcome=COGNITIVE_STOP`, product SUCCESS impossible).

---

## I. CORR-MW3-CRIT-03

**Old visible:** pill + reason + nextAction.

**New visible anatomy (existing surface only):** reason; governing premise; Evidence IDs; Source IDs; blocked impact; next governed action; candidate insufficiency; may-continue; STOP ≠ provider failure. Meaning is textual, not color-only.

DTO optionally extended with `blockedImpact` / `mayContinue` / `notTechnicalFailure` derived from `CognitiveStopDecision`.

---

## J. Files created/modified

Created:
- `deriveMw3Assessment.ts`
- `mw3AvailableEvidence.ts`
- `mw3.correction.c01-c16.d0.test.ts`
- `mw3.correction.panel.ux.d0.test.tsx`

Modified: cognitiveStop, intentAnalysis, orchestrateF2, types (f2 + product), orchestrateTurn, Panel, runtime index, d0Runner (type-only null field), f2.orchestrate.test (type-only null field).

Full contents of created files and complete unified diff vs `c76ae54f` are appended below.

---

## K. C01–C16

| Case | Result | Proof level |
| --- | --- | --- |
| C01 | PASS | `projectAssistantSendAction` — candidate, no injected assessment |
| C02 | PASS | public path insufficient proof — candidate, no STOP |
| C03 | PASS | Fake Evidence catalog — evidence_backed |
| C04 | PASS | `projectAssistantSendAction` — STOP, progress ≠ SUCCESS |
| C05 | PASS | evidence-backed non-governing continues |
| C06 | PASS | Fake provider error → `provider_error` ≠ cognitive_stop |
| C07 | PASS | hostile flags → STOP (unit + product) |
| C08 | PASS | model candidate, no evidence → candidate |
| C09 | PASS | fabricated/stale/wrong-domain stay candidate |
| C10 | PASS | panel STOP anatomy |
| C11 | PASS | panel candidate insufficient proof, no STOP pill |
| C12 | PASS | panel may continue |
| C13 | PASS | no candidate → `mw3` null, normal F1 |
| C14 | PASS | `trustedSfiaProfile` null, not invented |
| C15 | PASS | CWP/strategy variation same disposition |
| C16 | PASS | low sourceBreadth cannot promote under required coverage |

Proof ceiling: **DETERMINISTIC PRODUCT WIRING**. ZERO REAL.

---

## L. Historical D0 / regressions

Historical MW3 D0: **5 files / 28 tests PASS** (unchanged files).

Regression `nora-cognitive-runtime` + `mw2*` + `orchestrateTurn`: **25 files / 198 tests PASS**.

MW0 D0: **9 PASS**.

F2 orchestrate: **14 PASS**.

`npm run typecheck` PASS.

`npm run lint` PASS.

---

## M. MW2 carried reserves

MW2-R01 / MW2-R02 / MW2-R03 remain **OPEN / NON-BLOCKING / CARRIED**.

C15/C16/C14 add regression evidence; they do **not** close the original MW2 reserve scope.

---

## N. Architecture

FA = NO
TA = NO

No second loop, no generic engine, no new persistence schema, no Hosted Search, no package upgrade, no client epistemic authority.

---

## O. Fake/Real

ZERO REAL
REAL NOT EXECUTED — MORRIS REAL GO REQUIRED

Fake substituted: OpenAI/model boundary; Evidence lookup catalog (test source boundary).

Fake did **not** substitute: disposeContradiction, decideCognitiveStop, product orchestration, UI mapping.

Realism gaps: live model variability; live source/Evidence variability.

---

## P. Recovery provenance

MW3 HISTORICAL IMPLEMENTATION SHA LOST
HISTORICAL BYTE/CODE PARITY NOT PROVEN
Recovery substrate `c76ae54f` accepted by ChatGPT Recovery Review

---

## Q. Git lifecycle

Implementation commit `4e123fc5` on local-only `cursor/mw3-cognitive-correction-post-recovery`.
Review Pack `d36a4f3a`. No project push / PR / merge.

---

## R. Reservations

ROADMAP TRUTH-SYNC PENDING
MW2-R01 / MW2-R02 / MW2-R03 CARRIED
Live OpenAI / live Evidence not executed
F2 `contradictionCandidate` is a structured-schema ADAPT; live model must emit it for REAL (not this cycle)

---

## S. Verdict

**MW3 CORRECTION COMPLETE — READY FOR CHATGPT CRITICAL RE-REVIEW**

Does NOT mean READY FOR REAL · MW3 COMPLETE/CLOSED · Cognitive Completion PROVEN · runtime v3 ADOPTED · MW4 authorized.

---

## Mandatory statements

REAL NOT EXECUTED — MORRIS REAL GO REQUIRED
MW3 NOT COMPLETE / NOT CLOSED
COGNITIVE COMPLETION NOT PROVEN
RUNTIME V3 NON ADOPTED
ROADMAP TRUTH-SYNC PENDING
PROJECT PUSH / PR / MERGE NOT PERFORMED
MW3 HISTORICAL IMPLEMENTATION SHA LOST
HISTORICAL BYTE/CODE PARITY NOT PROVEN
MW2-R01 / MW2-R02 / MW2-R03 CARRIED

---

## Created-file full contents


### `projects/sfia-studio/app/lib/nora-cognitive-runtime/deriveMw3Assessment.ts`

```typescript
/**
 * MW3 — derive contradictionAssessment from an untrusted cognitive candidate
 * plus actual available Evidence/source pointers.
 *
 * Model/candidate assertions NEVER self-promote to evidence_backed.
 * Promotion remains exclusive to disposeContradiction.
 */
import type { ContradictionEvidencePointer } from "./contradictionDisposition";
import type { Mw3ContradictionAssessmentInput } from "./runNoraCognitiveTurn";
import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";

/** Untrusted cognitive candidate — not Evidence, not Truth C, not a final STOP. */
export type Mw3ContradictionCandidateSignal = {
  conflictPresent: boolean;
  claimedEvidenceIds: string[];
  requiredDomains?: string[];
  requiredSourceCount?: number;
  freshnessMatters?: boolean;
  governingPremise?: string | null;
  governingPremiseInvalidated?: boolean;
  localImpactOnly?: boolean;
  fabricationAttempt?: boolean;
};

export function deriveMw3ContradictionAssessment(input: {
  candidate: Mw3ContradictionCandidateSignal;
  availablePointers: ContradictionEvidencePointer[];
  sourceBreadth?: "low" | "medium" | "high" | "unknown" | null;
  trustedSfiaProfile?: string | null;
  strategyClass?: CognitiveStrategyClass | null;
}): Mw3ContradictionAssessmentInput | null {
  if (input.candidate.conflictPresent !== true) {
    return null;
  }

  const availableById = new Map(
    input.availablePointers.map((p) => [p.evidenceId, p]),
  );
  const claimed = uniqueStrings(input.candidate.claimedEvidenceIds);
  const evidencePointers: ContradictionEvidencePointer[] = [];

  if (input.candidate.fabricationAttempt === true) {
    return {
      conflict: {
        conflictPresent: true,
        evidencePointers: [],
        requiredDomains: input.candidate.requiredDomains,
        requiredSourceCount: input.candidate.requiredSourceCount,
        freshnessMatters: input.candidate.freshnessMatters,
        fabricationAttempt: true,
        sourceBreadth: input.sourceBreadth ?? null,
        trustedSfiaProfile: input.trustedSfiaProfile ?? null,
        strategyClass: input.strategyClass ?? null,
      },
      governingPremiseInvalidated:
        input.candidate.governingPremiseInvalidated === true,
      governingPremise: input.candidate.governingPremise ?? undefined,
      localImpactOnly: input.candidate.localImpactOnly === true,
    };
  }

  for (const evidenceId of claimed) {
    const found = availableById.get(evidenceId);
    if (found) {
      evidencePointers.push({ ...found });
      continue;
    }
    evidencePointers.push({
      evidenceId,
      sourceId: "unresolved",
      domain: "unknown",
      freshness: "unknown",
      attributable: false,
      fabricated: true,
    });
  }

  return {
    conflict: {
      conflictPresent: true,
      evidencePointers,
      requiredDomains: input.candidate.requiredDomains,
      requiredSourceCount: input.candidate.requiredSourceCount,
      freshnessMatters: input.candidate.freshnessMatters,
      sourceBreadth: input.sourceBreadth ?? null,
      trustedSfiaProfile: input.trustedSfiaProfile ?? null,
      strategyClass: input.strategyClass ?? null,
    },
    governingPremiseInvalidated:
      input.candidate.governingPremiseInvalidated === true,
    governingPremise: input.candidate.governingPremise ?? undefined,
    localImpactOnly: input.candidate.localImpactOnly === true,
  };
}

function uniqueStrings(items: string[]): string[] {
  const out: string[] = [];
  const seen = new Set<string>();
  for (const raw of items) {
    const id = raw.trim();
    if (!id || seen.has(id)) continue;
    seen.add(id);
    out.push(id);
  }
  return out;
}
```


### `projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts`

```typescript
/**
 * MW3 — resolve claimed Evidence IDs against actual available metadata.
 *
 * Fake/tests may substitute the source/Evidence lookup boundary.
 * SFIA still qualifies via disposeContradiction — this module does not
 * decide candidate vs evidence_backed.
 */
import type { ContradictionEvidencePointer } from "@/lib/nora-cognitive-runtime";
import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";

let testCatalog: ContradictionEvidencePointer[] | null = null;

/** Test-only Fake source/Evidence boundary. Never a client DTO field. */
export function setMw3AvailableEvidenceForTests(
  pointers: ContradictionEvidencePointer[] | null,
): void {
  testCatalog = pointers;
}

export async function resolveAvailableContradictionPointers(input: {
  claimedEvidenceIds: string[];
}): Promise<ContradictionEvidencePointer[]> {
  const claimed = input.claimedEvidenceIds
    .map((id) => id.trim())
    .filter(Boolean);
  if (claimed.length === 0) return [];

  const resolved: ContradictionEvidencePointer[] = [];
  for (const evidenceId of claimed) {
    const fromTest = testCatalog?.find((p) => p.evidenceId === evidenceId);
    if (fromTest) {
      resolved.push({ ...fromTest });
      continue;
    }
    const fromOa = await lookupOaEvidence(evidenceId);
    if (fromOa) resolved.push(fromOa);
  }
  return resolved;
}

async function lookupOaEvidence(
  evidenceId: string,
): Promise<ContradictionEvidencePointer | null> {
  const oa = getRuntimeApplicationService().oa;
    const repository = oa?.evidenceReviewServices?.repository;
    if (!repository) return null;
    try {
      const evidence = await repository.findById(evidenceId);
    if (!evidence) return null;
    return mapOaEvidence(evidence);
  } catch {
    return null;
  }
}

function mapOaEvidence(evidence: Evidence): ContradictionEvidencePointer {
  const attributable =
    Boolean(evidence.source?.trim()) &&
    (evidence.status === "available" || evidence.status === "verified");
  return {
    evidenceId: evidence.evidenceId,
    sourceId: evidence.source,
    domain: evidence.bindings.projectId ? "project" : "unknown",
    freshness: evidence.freshness ?? "unknown",
    attributable,
    fabricated: false,
  };
}
```


### `projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.c01-c16.d0.test.ts`

```typescript
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
  type ContradictionEvidencePointer,
} from "@/lib/nora-cognitive-runtime";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { SemanticCognitiveWorkloadAssessment } from "@/features/project-assistant/f2/types";
import type { Mw3ContradictionCandidateSignal } from "@/lib/nora-cognitive-runtime/deriveMw3Assessment";

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

function freshGovernancePointers(): ContradictionEvidencePointer[] {
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

function candidateConflict(
  overrides: Partial<Mw3ContradictionCandidateSignal> = {},
): Mw3ContradictionCandidateSignal {
  return {
    conflictPresent: true,
    claimedEvidenceIds: [],
    requiredDomains: ["governance"],
    requiredSourceCount: 2,
    freshnessMatters: true,
    governingPremise: "FinOps freeze must hold",
    governingPremiseInvalidated: false,
    localImpactOnly: true,
    fabricationAttempt: false,
    ...overrides,
  };
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
    setMw3AvailableEvidenceForTests(freshGovernancePointers());
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
    setMw3AvailableEvidenceForTests(freshGovernancePointers());
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
    setMw3AvailableEvidenceForTests(freshGovernancePointers());
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
      evidencePointers: freshGovernancePointers(),
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
    setMw3AvailableEvidenceForTests(freshGovernancePointers());
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
    setMw3AvailableEvidenceForTests([]);
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
    setMw3AvailableEvidenceForTests([
      {
        evidenceId: "ev:stale",
        sourceId: "src:a",
        domain: "governance",
        freshness: "stale",
        attributable: true,
      },
      {
        evidenceId: "ev:wrong",
        sourceId: "src:b",
        domain: "other",
        freshness: "fresh",
        attributable: true,
      },
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
      trustedSfiaProfile: null,
    });
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
    setMw3AvailableEvidenceForTests(freshGovernancePointers());
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
    setMw3AvailableEvidenceForTests([freshGovernancePointers()[0]!]);
    setConversationProviderForTests(
      fakeFor(
        candidateConflict({
          claimedEvidenceIds: ["ev:1"],
          requiredSourceCount: 2,
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
```


### `projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx`

```tsx
/**
 * MW3 correction UX — C10–C12 visible STOP / candidate / continue anatomy.
 * Fake send action only — ZERO REAL OpenAI.
 * @vitest-environment jsdom
 */
import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { ProjectAssistantPanel } from "@/features/project-assistant/ProjectAssistantPanel";

const {
  projectAssistantSendActionMock,
  projectAssistantRehydrateEvidenceOutcomeActionMock,
} = vi.hoisted(() => ({
  projectAssistantSendActionMock: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
}));

vi.mock("@/features/project-assistant/actions", () => ({
  projectAssistantSendAction: (...args: unknown[]) =>
    projectAssistantSendActionMock(...args),
  projectAssistantDecideAction: vi.fn(),
  projectAssistantPrepareF3FixtureAction: vi.fn(),
  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
  projectAssistantPrepareResolvedM3Action: vi.fn(),
  projectAssistantConfirmAndExecuteResolvedM3Action: vi.fn(),
  projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
    projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
}));

vi.mock("next/link", () => ({
  default: ({
    children,
    href,
    ...props
  }: {
    children: React.ReactNode;
    href: string;
  }) => (
    <a href={href} {...props}>
      {children}
    </a>
  ),
}));

const PROJECT = {
  projectId: "prj:mw3-corr-ui",
  name: "Projet MW3 correction UI",
  shortReference: "MW3CUI",
  objective: "Surface anatomy",
  contextSummary: "MW3 UX correction",
  criticality: "STANDARD" as const,
  constraints: [] as string[],
  lpsId: "lps:mw3-corr-ui",
  lpsVersion: 1,
  lpsCreatedAt: "2026-09-02T12:00:00.000Z",
  doctrineId: "pkg:studio-v3-oa",
  doctrineVersion: "1.0.0",
  doctrineDigest: "digest:mw3-corr-ui",
  doctrineStatus: "RESOLVED",
  runtimeMode: "LOCAL_PROCESS" as const,
  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
  readiness: "NOT_READY" as const,
};

describe("MW3 correction — panel anatomy C10–C12", () => {
  beforeEach(() => {
    projectAssistantSendActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue({
      ok: false,
      status: "error",
      code: "NO_EVIDENCE_OUTCOME_REFS",
      message: "none",
      mode: "fixture",
      retryable: false,
    });
  });

  afterEach(() => {
    cleanup();
  });

  it("C10 — STOP UX renders reason, premise, Evidence, Sources, blocked impact, next action", async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "cognitive_stop",
      text: "[TEST/FAKE] blocked by Cognitive STOP.",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: PROJECT,
      ephemeralNotice: "ARRÊT COGNITIF (≠ erreur technique).",
      cognitiveRuntime: "agents",
      sessionId: "sess:mw3-c10",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
      mw3: {
        disposition: "evidence_backed",
        progression: "COGNITIVE_STOP",
        cognitiveStop: true,
        reason:
          "Evidence-backed contradiction invalidates governing premise: FinOps freeze",
        evidenceIds: ["ev:1", "ev:2"],
        sourceIds: ["src:a", "src:b"],
        governingPremise: "FinOps freeze",
        nextAction: "Cognitive STOP — replan/recovery as recommendation.",
        insufficiencyReasons: [],
        allowsSilentSuccess: false,
        blockedImpact:
          "Progression bloquée — prémisse gouvernante invalidée (FinOps freeze).",
        mayContinue: false,
        notTechnicalFailure: true,
      },
    });

    render(<ProjectAssistantPanel projectId="prj:mw3-corr-ui" />);
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Évalue la contradiction gouvernante." },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
    });
    const surface = screen.getByTestId("project-assistant-mw3-surface");
    expect(surface.textContent).toMatch(/Arrêt cognitif/i);
    expect(screen.getByTestId("project-assistant-mw3-reason").textContent).toMatch(
      /FinOps freeze/,
    );
    expect(screen.getByTestId("project-assistant-mw3-premise").textContent).toMatch(
      /Prémisse gouvernante/,
    );
    expect(screen.getByTestId("project-assistant-mw3-evidence").textContent).toMatch(
      /ev:1/,
    );
    expect(screen.getByTestId("project-assistant-mw3-sources").textContent).toMatch(
      /src:a/,
    );
    expect(screen.getByTestId("project-assistant-mw3-blocked").textContent).toMatch(
      /Impact bloqué/,
    );
    expect(screen.getByTestId("project-assistant-mw3-next").textContent).toMatch(
      /Suite gouvernée/,
    );
    expect(
      screen.getByTestId("project-assistant-mw3-not-technical").textContent,
    ).toMatch(/pas une panne provider/i);
  });

  it("C11 — candidate UX shows insufficient proof and no STOP", async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "[TEST/FAKE] candidate retained.",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: PROJECT,
      ephemeralNotice: "Session Memory B unavailable.",
      cognitiveRuntime: "agents",
      sessionId: "sess:mw3-c11",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
      mw3: {
        disposition: "candidate",
        progression: "PROGRESS_WITH_CONTRADICTION",
        cognitiveStop: false,
        reason: "Possible conflict retained as candidate.",
        evidenceIds: [],
        sourceIds: [],
        governingPremise: null,
        nextAction: "Verify sources.",
        insufficiencyReasons: ["insufficient_evidence_pointers"],
        allowsSilentSuccess: false,
        blockedImpact: null,
        mayContinue: true,
        notTechnicalFailure: true,
      },
    });

    render(<ProjectAssistantPanel projectId="prj:mw3-corr-ui" />);
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Conflit possible ?" },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
    });
    const surface = screen.getByTestId("project-assistant-mw3-surface");
    expect(surface.getAttribute("data-mw3-cognitive-stop")).toBe("false");
    expect(surface.textContent).toMatch(/Contradiction candidate/i);
    expect(screen.getByTestId("project-assistant-mw3-insufficiency").textContent).toMatch(
      /Preuve insuffisante/,
    );
    expect(surface.textContent).not.toMatch(/Arrêt cognitif/i);
    expect(screen.queryByTestId("project-assistant-mw3-blocked")).toBeNull();
  });

  it("C12 — evidence-backed non-governing UX shows progression may continue", async () => {
    projectAssistantSendActionMock.mockResolvedValue({
      ok: true,
      status: "ok",
      text: "[TEST/FAKE] evidence-backed continue.",
      mode: "fixture",
      presentation: "test_provider",
      toolRounds: 0,
      toolCalls: 0,
      sources: [],
      toolEvents: [],
      project: PROJECT,
      ephemeralNotice: "Session Memory B unavailable.",
      cognitiveRuntime: "agents",
      sessionId: "sess:mw3-c12",
      memoryBAvailability: "unavailable",
      memoryBCompactionState: "none",
      mw3: {
        disposition: "evidence_backed",
        progression: "PROGRESS_WITH_CONTRADICTION",
        cognitiveStop: false,
        reason: "Evidence-backed contradiction surfaced.",
        evidenceIds: ["ev:1", "ev:2"],
        sourceIds: ["src:a", "src:b"],
        governingPremise: "Local claim only",
        nextAction: "Correct recommendation path if needed; no Cognitive STOP.",
        insufficiencyReasons: [],
        allowsSilentSuccess: false,
        blockedImpact: null,
        mayContinue: true,
        notTechnicalFailure: true,
      },
    });

    render(<ProjectAssistantPanel projectId="prj:mw3-corr-ui" />);
    fireEvent.change(screen.getByTestId("project-assistant-input"), {
      target: { value: "Contradiction locale." },
    });
    fireEvent.click(screen.getByTestId("project-assistant-send"));

    await waitFor(() => {
      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
    });
    expect(screen.getByTestId("project-assistant-mw3-continue").textContent).toMatch(
      /Progression possible/,
    );
    expect(
      screen.getByTestId("project-assistant-mw3-surface").getAttribute(
        "data-mw3-cognitive-stop",
      ),
    ).toBe("false");
  });
});
```


---

## Complete unified diff vs substrate `c76ae54f`

```diff

diff --git a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
index a3f77f81..cc766c5f 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/f2.orchestrate.test.ts
@@ -371,6 +371,7 @@ describe("F2 orchestration AC coverage", () => {
       criticalJustification: null,
       requestedOperation: null,
       cognitiveWorkload: null,
+      contradictionCandidate: null,
       parseOk: true,
     };
     expect(
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.c01-c16.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.c01-c16.d0.test.ts
new file mode 100644
index 00000000..142b44a4
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.c01-c16.d0.test.ts
@@ -0,0 +1,483 @@
+/** @vitest-environment node */
+/**
+ * MW3 Critical Correction — C01–C09 / C13–C16 deterministic product path.
+ * Fake provider + Fake Evidence catalog only. ZERO REAL OpenAI.
+ */
+import fs from "node:fs";
+import os from "node:os";
+import path from "node:path";
+import { afterEach, beforeEach, describe, expect, it } from "vitest";
+import { FakeConversationProvider } from "@/lib/platform/ai/fakeProvider";
+import {
+  setConversationProviderForTests,
+} from "@/lib/platform/ai";
+import { projectAssistantSendAction } from "@/features/project-assistant/actions";
+import { orchestrateAssistantSend } from "@/features/project-assistant/f2/orchestrateF2";
+import { setMw3AvailableEvidenceForTests } from "@/features/project-assistant/mw3AvailableEvidence";
+import {
+  decideCognitiveStop,
+  disposeContradiction,
+  deriveMw3ContradictionAssessment,
+  type ContradictionEvidencePointer,
+} from "@/lib/nora-cognitive-runtime";
+import {
+  getRuntimeApplicationService,
+  resetRuntimeApplicationServiceForTests,
+} from "@/lib/vertical-slice-runtime";
+import type { SemanticCognitiveWorkloadAssessment } from "@/features/project-assistant/f2/types";
+import type { Mw3ContradictionCandidateSignal } from "@/lib/nora-cognitive-runtime/deriveMw3Assessment";
+
+const tempDirs: string[] = [];
+
+function knownLowCwp(): SemanticCognitiveWorkloadAssessment {
+  return {
+    ambiguity: "low",
+    reasoningDepth: "low",
+    sourceBreadth: "low",
+    toolDependency: "low",
+    contradictionRisk: "low",
+    verificationNeed: "low",
+  };
+}
+
+function mediumCwp(
+  sourceBreadth: SemanticCognitiveWorkloadAssessment["sourceBreadth"] = "medium",
+): SemanticCognitiveWorkloadAssessment {
+  return {
+    ambiguity: "medium",
+    reasoningDepth: "high",
+    sourceBreadth,
+    toolDependency: "medium",
+    contradictionRisk: "high",
+    verificationNeed: "high",
+  };
+}
+
+function intentJson(input: {
+  cognitiveWorkload: SemanticCognitiveWorkloadAssessment | null;
+  contradictionCandidate?: Mw3ContradictionCandidateSignal | null;
+}): string {
+  return JSON.stringify({
+    intentClass: "informative",
+    candidateCycleTypeId: null,
+    signals: null,
+    cognitiveWorkload: input.cognitiveWorkload,
+    contradictionCandidate: input.contradictionCandidate ?? null,
+    objective: "Analyse contradiction",
+    scope: null,
+    rephrasedRequest: "Évaluer le conflit annoncé",
+    outOfScope: [],
+    risks: [],
+    reservations: [],
+    stopConditions: [],
+    activatedBlocks: [],
+    expectedOutcome: null,
+    criticalJustification: null,
+    requestedOperation: null,
+  });
+}
+
+function freshGovernancePointers(): ContradictionEvidencePointer[] {
+  return [
+    {
+      evidenceId: "ev:1",
+      sourceId: "src:a",
+      domain: "governance",
+      freshness: "fresh",
+      attributable: true,
+    },
+    {
+      evidenceId: "ev:2",
+      sourceId: "src:b",
+      domain: "governance",
+      freshness: "fresh",
+      attributable: true,
+    },
+  ];
+}
+
+function candidateConflict(
+  overrides: Partial<Mw3ContradictionCandidateSignal> = {},
+): Mw3ContradictionCandidateSignal {
+  return {
+    conflictPresent: true,
+    claimedEvidenceIds: [],
+    requiredDomains: ["governance"],
+    requiredSourceCount: 2,
+    freshnessMatters: true,
+    governingPremise: "FinOps freeze must hold",
+    governingPremiseInvalidated: false,
+    localImpactOnly: true,
+    fabricationAttempt: false,
+    ...overrides,
+  };
+}
+
+describe("MW3 correction — public product path C01–C16 (subset)", () => {
+  const prevReset = process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
+  const prevProvider = process.env.OPS1_CONVERSATION_PROVIDER;
+  const prevKey = process.env.OPENAI_API_KEY;
+  const prevModel = process.env.OPENAI_MODEL;
+
+  beforeEach(() => {
+    process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
+    process.env.OPS1_CONVERSATION_PROVIDER = "fake";
+    process.env.OPENAI_MODEL = "gpt-5.6-luna";
+    delete process.env.OPENAI_API_KEY;
+    resetRuntimeApplicationServiceForTests();
+    setConversationProviderForTests(null);
+    setMw3AvailableEvidenceForTests(null);
+  });
+
+  afterEach(() => {
+    setConversationProviderForTests(null);
+    setMw3AvailableEvidenceForTests(null);
+    if (prevReset === undefined) delete process.env.SFIA_V2_RUNTIME_ALLOW_RESET;
+    else process.env.SFIA_V2_RUNTIME_ALLOW_RESET = prevReset;
+    if (prevProvider === undefined) delete process.env.OPS1_CONVERSATION_PROVIDER;
+    else process.env.OPS1_CONVERSATION_PROVIDER = prevProvider;
+    if (prevKey === undefined) delete process.env.OPENAI_API_KEY;
+    else process.env.OPENAI_API_KEY = prevKey;
+    if (prevModel === undefined) delete process.env.OPENAI_MODEL;
+    else process.env.OPENAI_MODEL = prevModel;
+    resetRuntimeApplicationServiceForTests();
+    while (tempDirs.length) {
+      const d = tempDirs.pop();
+      if (d) fs.rmSync(d, { recursive: true, force: true });
+    }
+  });
+
+  async function createProject(): Promise<string> {
+    const dir = fs.mkdtempSync(path.join(os.tmpdir(), "sfia-mw3-corr-"));
+    tempDirs.push(dir);
+    const runtime = getRuntimeApplicationService({
+      productDbPath: path.join(dir, "oa-product.sqlite"),
+      auditMode: "noop",
+    });
+    const created = await runtime.createProject({
+      name: "MW3 correction",
+      objective: "Contradiction product path",
+      context: "Deterministic Fake only",
+      criticality: "STANDARD",
+      constraints: ["LECTURE SEULE"],
+      shortReference: "MW3C",
+      idempotencyKey: `idem:mw3c-${Date.now()}-${Math.random()}`,
+    });
+    expect(created.ok).toBe(true);
+    if (!created.ok) throw new Error("setup failed");
+    return created.projectId;
+  }
+
+  function fakeFor(candidate: Mw3ContradictionCandidateSignal | null, cwp = mediumCwp()) {
+    return new FakeConversationProvider({
+      scripted: [
+        intentJson({
+          cognitiveWorkload: cwp,
+          contradictionCandidate: candidate,
+        }),
+      ],
+      toolScript: [
+        {
+          kind: "message",
+          text: "[TEST/FAKE] Nora informative reply. AUCUNE EXÉCUTION.",
+        },
+      ],
+    });
+  }
+
+  it("C01 — projectAssistantSendAction derives candidate without injected contradictionAssessment", async () => {
+    const projectId = await createProject();
+    const provider = fakeFor(candidateConflict());
+    setConversationProviderForTests(provider);
+
+    const result = await projectAssistantSendAction({
+      projectId,
+      content: "Réconcilie le conflit annoncé entre les sources.",
+    });
+
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C01 failed");
+    expect(result.f2?.turnKind).toBe("f1_informative");
+    expect(result.mw3).toBeTruthy();
+    expect(result.mw3?.disposition).toBe("candidate");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+    expect(result.status).toBe("ok");
+    expect(result.mw3?.insufficiencyReasons.length).toBeGreaterThan(0);
+  });
+
+  it("C02 — apparent conflict + insufficient proof stays candidate, no STOP", async () => {
+    const projectId = await createProject();
+    setConversationProviderForTests(fakeFor(candidateConflict()));
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Conflit possible sans preuve.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C02 failed");
+    expect(result.mw3?.disposition).toBe("candidate");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+    expect(result.status).not.toBe("cognitive_stop");
+  });
+
+  it("C03 — sufficient fresh attributable in-domain evidence → evidence_backed", async () => {
+    const projectId = await createProject();
+    setMw3AvailableEvidenceForTests(freshGovernancePointers());
+    setConversationProviderForTests(
+      fakeFor(
+        candidateConflict({
+          claimedEvidenceIds: ["ev:1", "ev:2"],
+        }),
+      ),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Conflit evidence-backed non gouvernant.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C03 failed");
+    expect(result.mw3?.disposition).toBe("evidence_backed");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+    expect(result.mw3?.evidenceIds).toEqual(["ev:1", "ev:2"]);
+  });
+
+  it("C04 — public sendAction: evidence_backed + governing invalidation → COGNITIVE_STOP", async () => {
+    const projectId = await createProject();
+    setMw3AvailableEvidenceForTests(freshGovernancePointers());
+    setConversationProviderForTests(
+      fakeFor(
+        candidateConflict({
+          claimedEvidenceIds: ["ev:1", "ev:2"],
+          governingPremiseInvalidated: true,
+          localImpactOnly: false,
+        }),
+      ),
+    );
+    const result = await projectAssistantSendAction({
+      projectId,
+      content: "La prémisse gouvernante est invalidée.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C04 failed");
+    expect(result.status).toBe("cognitive_stop");
+    expect(result.mw3?.disposition).toBe("evidence_backed");
+    expect(result.mw3?.cognitiveStop).toBe(true);
+    expect(result.mw3?.progression).toBe("COGNITIVE_STOP");
+    expect(result.mw3?.allowsSilentSuccess).toBe(false);
+  });
+
+  it("C05 — evidence-backed non-governing continues honestly", async () => {
+    const projectId = await createProject();
+    setMw3AvailableEvidenceForTests(freshGovernancePointers());
+    setConversationProviderForTests(
+      fakeFor(
+        candidateConflict({
+          claimedEvidenceIds: ["ev:1", "ev:2"],
+          governingPremiseInvalidated: false,
+          localImpactOnly: true,
+        }),
+      ),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Contradiction locale evidence-backed.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C05 failed");
+    expect(result.mw3?.disposition).toBe("evidence_backed");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+    expect(result.mw3?.mayContinue).toBe(true);
+    expect(result.status).toBe("ok");
+  });
+
+  it("C06 — technical/provider failure ≠ Cognitive STOP", async () => {
+    const projectId = await createProject();
+    setConversationProviderForTests(
+      new FakeConversationProvider({ failOnCall: 1 }),
+    );
+    const result = await projectAssistantSendAction({
+      projectId,
+      content: "Déclenche une panne provider.",
+    });
+    expect(result.ok).toBe(false);
+    if (result.ok) throw new Error("C06 expected failure");
+    expect(result.status).toBe("provider_error");
+    expect(result.status).not.toBe("cognitive_stop");
+  });
+
+  it("C07 — hostile localImpactOnly + governing invalidation → STOP", async () => {
+    const disposition = disposeContradiction({
+      conflictPresent: true,
+      requiredSourceCount: 2,
+      requiredDomains: ["governance"],
+      evidencePointers: freshGovernancePointers(),
+    });
+    const stop = decideCognitiveStop({
+      disposition,
+      governingPremiseInvalidated: true,
+      localImpactOnly: true,
+      governingPremise: "FinOps freeze must hold",
+    });
+    expect(disposition.disposition).toBe("evidence_backed");
+    expect(stop.cognitiveStop).toBe(true);
+    expect(stop.outcome).toBe("COGNITIVE_STOP");
+
+    const projectId = await createProject();
+    setMw3AvailableEvidenceForTests(freshGovernancePointers());
+    setConversationProviderForTests(
+      fakeFor(
+        candidateConflict({
+          claimedEvidenceIds: ["ev:1", "ev:2"],
+          governingPremiseInvalidated: true,
+          localImpactOnly: true,
+        }),
+      ),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Flags contradictoires hostile.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C07 failed");
+    expect(result.mw3?.cognitiveStop).toBe(true);
+    expect(result.status).toBe("cognitive_stop");
+  });
+
+  it("C08 — model candidate with no valid evidence stays candidate", async () => {
+    const projectId = await createProject();
+    setMw3AvailableEvidenceForTests([]);
+    setConversationProviderForTests(
+      fakeFor(
+        candidateConflict({
+          claimedEvidenceIds: [],
+          governingPremiseInvalidated: true,
+        }),
+      ),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Le modèle affirme un conflit.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C08 failed");
+    expect(result.mw3?.disposition).toBe("candidate");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+  });
+
+  it("C09 — fabricated / stale / wrong-domain cannot promote evidence-backed", async () => {
+    const projectId = await createProject();
+    setMw3AvailableEvidenceForTests([
+      {
+        evidenceId: "ev:stale",
+        sourceId: "src:a",
+        domain: "governance",
+        freshness: "stale",
+        attributable: true,
+      },
+      {
+        evidenceId: "ev:wrong",
+        sourceId: "src:b",
+        domain: "other",
+        freshness: "fresh",
+        attributable: true,
+      },
+    ]);
+    setConversationProviderForTests(
+      fakeFor(
+        candidateConflict({
+          claimedEvidenceIds: ["ev:invented", "ev:stale", "ev:wrong"],
+        }),
+      ),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Pointeurs hostiles.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C09 failed");
+    expect(result.mw3?.disposition).toBe("candidate");
+    expect(result.mw3?.cognitiveStop).toBe(false);
+  });
+
+  it("C13 — no contradiction preserves normal product behavior", async () => {
+    const projectId = await createProject();
+    setConversationProviderForTests(fakeFor(null, knownLowCwp()));
+    const result = await projectAssistantSendAction({
+      projectId,
+      content: "Quel est le nom du projet ?",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C13 failed");
+    expect(result.status).toBe("ok");
+    expect(result.mw3 ?? null).toBeNull();
+    expect(result.f2?.turnKind).toBe("f1_informative");
+  });
+
+  it("C14 — trustedSfiaProfile remains null / is not invented", async () => {
+    const derived = deriveMw3ContradictionAssessment({
+      candidate: candidateConflict(),
+      availablePointers: [],
+      trustedSfiaProfile: null,
+    });
+    expect(derived).toBeTruthy();
+    const disposition = disposeContradiction(derived!.conflict);
+    expect(disposition.trustedSfiaProfile).toBeNull();
+
+    const projectId = await createProject();
+    setConversationProviderForTests(fakeFor(candidateConflict()));
+    const result = await projectAssistantSendAction({
+      projectId,
+      content: "Conflit sans profil.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C14 failed");
+    expect(result.mw3?.disposition).toBe("candidate");
+    expect(JSON.stringify(result)).not.toMatch(/"trustedSfiaProfile":\s*"[A-Za-z]/);
+  });
+
+  it("C15 — strategy/reasoning variation cannot change truth disposition", async () => {
+    const projectId = await createProject();
+    setMw3AvailableEvidenceForTests(freshGovernancePointers());
+    const candidate = candidateConflict({
+      claimedEvidenceIds: ["ev:1", "ev:2"],
+    });
+    setConversationProviderForTests(fakeFor(candidate, mediumCwp("high")));
+    const deep = await orchestrateAssistantSend({
+      projectId,
+      content: "Deep strategy conflict.",
+    });
+    setConversationProviderForTests(fakeFor(candidate, knownLowCwp()));
+    const focused = await orchestrateAssistantSend({
+      projectId,
+      content: "Focused strategy conflict.",
+    });
+    expect(deep.ok && focused.ok).toBe(true);
+    if (!deep.ok || !focused.ok) throw new Error("C15 failed");
+    expect(deep.mw3?.disposition).toBe(focused.mw3?.disposition);
+    expect(deep.mw3?.disposition).toBe("evidence_backed");
+    expect(deep.mw3?.cognitiveStop).toBe(focused.mw3?.cognitiveStop);
+  });
+
+  it("C16 — low sourceBreadth cannot promote evidence-backed under required coverage", async () => {
+    const projectId = await createProject();
+    setMw3AvailableEvidenceForTests([freshGovernancePointers()[0]!]);
+    setConversationProviderForTests(
+      fakeFor(
+        candidateConflict({
+          claimedEvidenceIds: ["ev:1"],
+          requiredSourceCount: 2,
+        }),
+        mediumCwp("low"),
+      ),
+    );
+    const result = await orchestrateAssistantSend({
+      projectId,
+      content: "Couverture source insuffisante.",
+    });
+    expect(result.ok).toBe(true);
+    if (!result.ok) throw new Error("C16 failed");
+    expect(result.mw3?.disposition).toBe("candidate");
+    expect(result.mw3?.insufficiencyReasons).toContain(
+      "insufficient_source_coverage",
+    );
+  });
+});
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
new file mode 100644
index 00000000..93172998
--- /dev/null
+++ b/projects/sfia-studio/app/__tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx
@@ -0,0 +1,258 @@
+/**
+ * MW3 correction UX — C10–C12 visible STOP / candidate / continue anatomy.
+ * Fake send action only — ZERO REAL OpenAI.
+ * @vitest-environment jsdom
+ */
+import { cleanup, fireEvent, render, screen, waitFor } from "@testing-library/react";
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { ProjectAssistantPanel } from "@/features/project-assistant/ProjectAssistantPanel";
+
+const {
+  projectAssistantSendActionMock,
+  projectAssistantRehydrateEvidenceOutcomeActionMock,
+} = vi.hoisted(() => ({
+  projectAssistantSendActionMock: vi.fn(),
+  projectAssistantRehydrateEvidenceOutcomeActionMock: vi.fn(),
+}));
+
+vi.mock("@/features/project-assistant/actions", () => ({
+  projectAssistantSendAction: (...args: unknown[]) =>
+    projectAssistantSendActionMock(...args),
+  projectAssistantDecideAction: vi.fn(),
+  projectAssistantPrepareF3FixtureAction: vi.fn(),
+  projectAssistantConfirmAndExecuteF3FixtureAction: vi.fn(),
+  projectAssistantPrepareResolvedM3Action: vi.fn(),
+  projectAssistantConfirmAndExecuteResolvedM3Action: vi.fn(),
+  projectAssistantRehydrateEvidenceOutcomeAction: (...args: unknown[]) =>
+    projectAssistantRehydrateEvidenceOutcomeActionMock(...args),
+}));
+
+vi.mock("next/link", () => ({
+  default: ({
+    children,
+    href,
+    ...props
+  }: {
+    children: React.ReactNode;
+    href: string;
+  }) => (
+    <a href={href} {...props}>
+      {children}
+    </a>
+  ),
+}));
+
+const PROJECT = {
+  projectId: "prj:mw3-corr-ui",
+  name: "Projet MW3 correction UI",
+  shortReference: "MW3CUI",
+  objective: "Surface anatomy",
+  contextSummary: "MW3 UX correction",
+  criticality: "STANDARD" as const,
+  constraints: [] as string[],
+  lpsId: "lps:mw3-corr-ui",
+  lpsVersion: 1,
+  lpsCreatedAt: "2026-09-02T12:00:00.000Z",
+  doctrineId: "pkg:studio-v3-oa",
+  doctrineVersion: "1.0.0",
+  doctrineDigest: "digest:mw3-corr-ui",
+  doctrineStatus: "RESOLVED",
+  runtimeMode: "LOCAL_PROCESS" as const,
+  persistence: "PARTIAL_PROJECT_LPS_CYCLE_DECISION_CONTRACT_DURABLE" as const,
+  readiness: "NOT_READY" as const,
+};
+
+describe("MW3 correction — panel anatomy C10–C12", () => {
+  beforeEach(() => {
+    projectAssistantSendActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockReset();
+    projectAssistantRehydrateEvidenceOutcomeActionMock.mockResolvedValue({
+      ok: false,
+      status: "error",
+      code: "NO_EVIDENCE_OUTCOME_REFS",
+      message: "none",
+      mode: "fixture",
+      retryable: false,
+    });
+  });
+
+  afterEach(() => {
+    cleanup();
+  });
+
+  it("C10 — STOP UX renders reason, premise, Evidence, Sources, blocked impact, next action", async () => {
+    projectAssistantSendActionMock.mockResolvedValue({
+      ok: true,
+      status: "cognitive_stop",
+      text: "[TEST/FAKE] blocked by Cognitive STOP.",
+      mode: "fixture",
+      presentation: "test_provider",
+      toolRounds: 0,
+      toolCalls: 0,
+      sources: [],
+      toolEvents: [],
+      project: PROJECT,
+      ephemeralNotice: "ARRÊT COGNITIF (≠ erreur technique).",
+      cognitiveRuntime: "agents",
+      sessionId: "sess:mw3-c10",
+      memoryBAvailability: "unavailable",
+      memoryBCompactionState: "none",
+      mw3: {
+        disposition: "evidence_backed",
+        progression: "COGNITIVE_STOP",
+        cognitiveStop: true,
+        reason:
+          "Evidence-backed contradiction invalidates governing premise: FinOps freeze",
+        evidenceIds: ["ev:1", "ev:2"],
+        sourceIds: ["src:a", "src:b"],
+        governingPremise: "FinOps freeze",
+        nextAction: "Cognitive STOP — replan/recovery as recommendation.",
+        insufficiencyReasons: [],
+        allowsSilentSuccess: false,
+        blockedImpact:
+          "Progression bloquée — prémisse gouvernante invalidée (FinOps freeze).",
+        mayContinue: false,
+        notTechnicalFailure: true,
+      },
+    });
+
+    render(<ProjectAssistantPanel projectId="prj:mw3-corr-ui" />);
+    fireEvent.change(screen.getByTestId("project-assistant-input"), {
+      target: { value: "Évalue la contradiction gouvernante." },
+    });
+    fireEvent.click(screen.getByTestId("project-assistant-send"));
+
+    await waitFor(() => {
+      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
+    });
+    const surface = screen.getByTestId("project-assistant-mw3-surface");
+    expect(surface.textContent).toMatch(/Arrêt cognitif/i);
+    expect(screen.getByTestId("project-assistant-mw3-reason").textContent).toMatch(
+      /FinOps freeze/,
+    );
+    expect(screen.getByTestId("project-assistant-mw3-premise").textContent).toMatch(
+      /Prémisse gouvernante/,
+    );
+    expect(screen.getByTestId("project-assistant-mw3-evidence").textContent).toMatch(
+      /ev:1/,
+    );
+    expect(screen.getByTestId("project-assistant-mw3-sources").textContent).toMatch(
+      /src:a/,
+    );
+    expect(screen.getByTestId("project-assistant-mw3-blocked").textContent).toMatch(
+      /Impact bloqué/,
+    );
+    expect(screen.getByTestId("project-assistant-mw3-next").textContent).toMatch(
+      /Suite gouvernée/,
+    );
+    expect(
+      screen.getByTestId("project-assistant-mw3-not-technical").textContent,
+    ).toMatch(/pas une panne provider/i);
+  });
+
+  it("C11 — candidate UX shows insufficient proof and no STOP", async () => {
+    projectAssistantSendActionMock.mockResolvedValue({
+      ok: true,
+      status: "ok",
+      text: "[TEST/FAKE] candidate retained.",
+      mode: "fixture",
+      presentation: "test_provider",
+      toolRounds: 0,
+      toolCalls: 0,
+      sources: [],
+      toolEvents: [],
+      project: PROJECT,
+      ephemeralNotice: "Session Memory B unavailable.",
+      cognitiveRuntime: "agents",
+      sessionId: "sess:mw3-c11",
+      memoryBAvailability: "unavailable",
+      memoryBCompactionState: "none",
+      mw3: {
+        disposition: "candidate",
+        progression: "PROGRESS_WITH_CONTRADICTION",
+        cognitiveStop: false,
+        reason: "Possible conflict retained as candidate.",
+        evidenceIds: [],
+        sourceIds: [],
+        governingPremise: null,
+        nextAction: "Verify sources.",
+        insufficiencyReasons: ["insufficient_evidence_pointers"],
+        allowsSilentSuccess: false,
+        blockedImpact: null,
+        mayContinue: true,
+        notTechnicalFailure: true,
+      },
+    });
+
+    render(<ProjectAssistantPanel projectId="prj:mw3-corr-ui" />);
+    fireEvent.change(screen.getByTestId("project-assistant-input"), {
+      target: { value: "Conflit possible ?" },
+    });
+    fireEvent.click(screen.getByTestId("project-assistant-send"));
+
+    await waitFor(() => {
+      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
+    });
+    const surface = screen.getByTestId("project-assistant-mw3-surface");
+    expect(surface.getAttribute("data-mw3-cognitive-stop")).toBe("false");
+    expect(surface.textContent).toMatch(/Contradiction candidate/i);
+    expect(screen.getByTestId("project-assistant-mw3-insufficiency").textContent).toMatch(
+      /Preuve insuffisante/,
+    );
+    expect(surface.textContent).not.toMatch(/Arrêt cognitif/i);
+    expect(screen.queryByTestId("project-assistant-mw3-blocked")).toBeNull();
+  });
+
+  it("C12 — evidence-backed non-governing UX shows progression may continue", async () => {
+    projectAssistantSendActionMock.mockResolvedValue({
+      ok: true,
+      status: "ok",
+      text: "[TEST/FAKE] evidence-backed continue.",
+      mode: "fixture",
+      presentation: "test_provider",
+      toolRounds: 0,
+      toolCalls: 0,
+      sources: [],
+      toolEvents: [],
+      project: PROJECT,
+      ephemeralNotice: "Session Memory B unavailable.",
+      cognitiveRuntime: "agents",
+      sessionId: "sess:mw3-c12",
+      memoryBAvailability: "unavailable",
+      memoryBCompactionState: "none",
+      mw3: {
+        disposition: "evidence_backed",
+        progression: "PROGRESS_WITH_CONTRADICTION",
+        cognitiveStop: false,
+        reason: "Evidence-backed contradiction surfaced.",
+        evidenceIds: ["ev:1", "ev:2"],
+        sourceIds: ["src:a", "src:b"],
+        governingPremise: "Local claim only",
+        nextAction: "Correct recommendation path if needed; no Cognitive STOP.",
+        insufficiencyReasons: [],
+        allowsSilentSuccess: false,
+        blockedImpact: null,
+        mayContinue: true,
+        notTechnicalFailure: true,
+      },
+    });
+
+    render(<ProjectAssistantPanel projectId="prj:mw3-corr-ui" />);
+    fireEvent.change(screen.getByTestId("project-assistant-input"), {
+      target: { value: "Contradiction locale." },
+    });
+    fireEvent.click(screen.getByTestId("project-assistant-send"));
+
+    await waitFor(() => {
+      expect(screen.getByTestId("project-assistant-mw3-surface")).toBeTruthy();
+    });
+    expect(screen.getByTestId("project-assistant-mw3-continue").textContent).toMatch(
+      /Progression possible/,
+    );
+    expect(
+      screen.getByTestId("project-assistant-mw3-surface").getAttribute(
+        "data-mw3-cognitive-stop",
+      ),
+    ).toBe("false");
+  });
+});
diff --git a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
index ab54f5f2..22d561b0 100644
--- a/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
+++ b/projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
@@ -594,10 +594,50 @@ export function ProjectAssistantPanel({
             <StatusPill tone="muted">Pas de contradiction</StatusPill>
           )}
           {mw3Surface.reason ? (
-            <p className={styles.ephemeral}>{mw3Surface.reason}</p>
+            <p className={styles.ephemeral} data-testid="project-assistant-mw3-reason">
+              {mw3Surface.reason}
+            </p>
+          ) : null}
+          {mw3Surface.governingPremise ? (
+            <p className={styles.ephemeral} data-testid="project-assistant-mw3-premise">
+              Prémisse gouvernante : {mw3Surface.governingPremise}
+            </p>
+          ) : null}
+          {mw3Surface.evidenceIds.length > 0 ? (
+            <p className={styles.ephemeral} data-testid="project-assistant-mw3-evidence">
+              Evidence : {mw3Surface.evidenceIds.join(", ")}
+            </p>
+          ) : null}
+          {mw3Surface.sourceIds.length > 0 ? (
+            <p className={styles.ephemeral} data-testid="project-assistant-mw3-sources">
+              Sources : {mw3Surface.sourceIds.join(", ")}
+            </p>
+          ) : null}
+          {mw3Surface.blockedImpact ? (
+            <p className={styles.ephemeral} data-testid="project-assistant-mw3-blocked">
+              Impact bloqué : {mw3Surface.blockedImpact}
+            </p>
+          ) : null}
+          {mw3Surface.disposition === "candidate" &&
+          mw3Surface.insufficiencyReasons.length > 0 ? (
+            <p className={styles.ephemeral} data-testid="project-assistant-mw3-insufficiency">
+              Preuve insuffisante : {mw3Surface.insufficiencyReasons.join(", ")}. Non evidence-backed.
+            </p>
+          ) : null}
+          {mw3Surface.mayContinue && !mw3Surface.cognitiveStop ? (
+            <p className={styles.ephemeral} data-testid="project-assistant-mw3-continue">
+              Progression possible : la contradiction est affichée ; le parcours peut continuer.
+            </p>
           ) : null}
           {mw3Surface.nextAction ? (
-            <p className={styles.ephemeral}>Suite : {mw3Surface.nextAction}</p>
+            <p className={styles.ephemeral} data-testid="project-assistant-mw3-next">
+              Suite gouvernée : {mw3Surface.nextAction}
+            </p>
+          ) : null}
+          {mw3Surface.cognitiveStop && mw3Surface.notTechnicalFailure !== false ? (
+            <p className={styles.ephemeral} data-testid="project-assistant-mw3-not-technical">
+              Distinction : arrêt cognitif, pas une panne provider.
+            </p>
           ) : null}
         </div>
       ) : null}
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
index 2755a3a4..bd940300 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/intentAnalysis.ts
@@ -18,6 +18,7 @@ import type {
   SemanticCognitiveWorkloadAssessment,
   SemanticCognitiveWorkloadLevel,
 } from "./types";
+import type { Mw3ContradictionCandidateSignal } from "@/lib/nora-cognitive-runtime/deriveMw3Assessment";

 const INTENT_CLASSES: readonly IntentClass[] = [
   "informative",
@@ -60,6 +61,38 @@ const STRING_ARRAY = {
   items: { type: "string" },
 } as const;

+const CANDIDATE_POINTER_ARRAY = {
+  type: "array",
+  items: { type: "string" },
+} as const;
+
+const CONTRADICTION_CANDIDATE_OBJECT_SCHEMA = {
+  type: "object",
+  additionalProperties: false,
+  properties: {
+    conflictPresent: { type: "boolean" },
+    claimedEvidenceIds: CANDIDATE_POINTER_ARRAY,
+    requiredDomains: CANDIDATE_POINTER_ARRAY,
+    requiredSourceCount: { type: "integer" },
+    freshnessMatters: { type: "boolean" },
+    governingPremise: NULLABLE_STRING,
+    governingPremiseInvalidated: { type: "boolean" },
+    localImpactOnly: { type: "boolean" },
+    fabricationAttempt: { type: "boolean" },
+  },
+  required: [
+    "conflictPresent",
+    "claimedEvidenceIds",
+    "requiredDomains",
+    "requiredSourceCount",
+    "freshnessMatters",
+    "governingPremise",
+    "governingPremiseInvalidated",
+    "localImpactOnly",
+    "fabricationAttempt",
+  ],
+} as const;
+
 const SIGNALS_OBJECT_SCHEMA = {
   type: "object",
   additionalProperties: false,
@@ -120,6 +153,9 @@ export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
     cognitiveWorkload: {
       anyOf: [COGNITIVE_WORKLOAD_OBJECT_SCHEMA, { type: "null" }],
     },
+    contradictionCandidate: {
+      anyOf: [CONTRADICTION_CANDIDATE_OBJECT_SCHEMA, { type: "null" }],
+    },
     objective: NULLABLE_STRING,
     scope: NULLABLE_STRING,
     rephrasedRequest: NULLABLE_STRING,
@@ -137,6 +173,7 @@ export const F2_INTENT_JSON_SCHEMA: Record<string, unknown> = {
     "candidateCycleTypeId",
     "signals",
     "cognitiveWorkload",
+    "contradictionCandidate",
     "objective",
     "scope",
     "rephrasedRequest",
@@ -187,6 +224,7 @@ function ambiguousFallback(partial?: Partial<IntentAnalysisDto>): IntentAnalysis
     expectedOutcome: partial?.expectedOutcome ?? null,
     criticalJustification: partial?.criticalJustification ?? null,
     requestedOperation: partial?.requestedOperation ?? null,
+    contradictionCandidate: null,
     parseOk: false,
   };
 }
@@ -223,6 +261,36 @@ export function parseCognitiveWorkload(
   return out;
 }

+export function parseContradictionCandidate(
+  raw: unknown,
+): Mw3ContradictionCandidateSignal | null {
+  if (raw == null) return null;
+  if (typeof raw !== "object" || Array.isArray(raw)) return null;
+  const obj = raw as Record<string, unknown>;
+  if (typeof obj.conflictPresent !== "boolean") return null;
+  return {
+    conflictPresent: obj.conflictPresent,
+    claimedEvidenceIds: clipArray(obj.claimedEvidenceIds),
+    requiredDomains: Array.isArray(obj.requiredDomains)
+      ? clipArray(obj.requiredDomains)
+      : undefined,
+    requiredSourceCount:
+      typeof obj.requiredSourceCount === "number" &&
+      Number.isFinite(obj.requiredSourceCount)
+        ? Math.max(1, Math.floor(obj.requiredSourceCount))
+        : undefined,
+    freshnessMatters:
+      typeof obj.freshnessMatters === "boolean"
+        ? obj.freshnessMatters
+        : undefined,
+    governingPremise: clip(obj.governingPremise),
+    governingPremiseInvalidated:
+      obj.governingPremiseInvalidated === true ? true : undefined,
+    localImpactOnly: obj.localImpactOnly === true ? true : undefined,
+    fabricationAttempt: obj.fabricationAttempt === true ? true : undefined,
+  };
+}
+
 function extractJsonObject(text: string): unknown | null {
   const fenced = text.match(/```(?:json)?\s*([\s\S]*?)```/i);
   const candidate = fenced?.[1]?.trim() ?? text.trim();
@@ -268,12 +336,16 @@ export function validateIntentAnalysisPayload(raw: unknown): IntentAnalysisDto {

   // Malformed CWP must not crash an otherwise-valid informative analysis.
   const cognitiveWorkload = parseCognitiveWorkload(obj.cognitiveWorkload);
+  const contradictionCandidate = parseContradictionCandidate(
+    obj.contradictionCandidate,
+  );

   return {
     intentClass: intentClass as IntentClass,
     candidateCycleTypeId,
     signals,
     cognitiveWorkload,
+    contradictionCandidate,
     objective: clip(obj.objective),
     scope: clip(obj.scope),
     rephrasedRequest: clip(obj.rephrasedRequest),
@@ -303,6 +375,7 @@ intentClass (informative|actionable|ambiguous|execution_request),
 candidateCycleTypeId (id catalogue cyc:… OU null),
 signals ({structuralChange,securityImpact,architectureImpact,dataImpact,irreversible,lowRiskBounded} tous booléens OU null),
 cognitiveWorkload ({ambiguity,reasoningDepth,sourceBreadth,toolDependency,contradictionRisk,verificationNeed} chacun low|medium|high|unknown OU null),
+contradictionCandidate (objet candidat cognitif OU null — PAS Evidence, PAS evidence_backed, PAS Cognitive STOP),
 objective, scope, rephrasedRequest, outOfScope[], risks[], reservations[], stopConditions[], activatedBlocks[],
 expectedOutcome, criticalJustification, requestedOperation (strings ou null pour les scalaires).

@@ -369,6 +442,13 @@ verificationNeed —
 low: réponse bornée déjà supportée par le contexte de confiance.
 medium/high: claims matériels nécessitent vérification / réconciliation / evidence avant assertion forte.

+=== contradictionCandidate (interne, non autoritaire) ===
+Signal CANDIDAT seulement. Ne s'auto-promouvoit JAMAIS en evidence_backed. Ne décide JAMAIS un Cognitive STOP.
+conflictPresent=true seulement si un conflit apparent est identifié.
+claimedEvidenceIds: identifiants Evidence déjà existants éventuellement cités — ne PAS inventer d'Evidence.
+Si aucune Evidence réelle n'est identifiable: claimedEvidenceIds=[] et conserver le candidat.
+contradictionRisk CWP n'est PAS une preuve et n'implique PAS contradictionCandidate.
+
 === AUTORITÉ ===
 - Ne décide jamais un GO Morris ; ne propose jamais d'exécution ; n'invente jamais un cycle (ex. delivery) par défaut.
 - actionable et execution_request: candidateCycleTypeId DOIT être un id catalogue connu ET signals DOIT contenir exactement les 6 booléens (aucun défaut inventé).
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index bc216d0d..dce956d1 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -21,6 +21,11 @@ import type {
 import { orchestrateProjectAssistantTurn } from "../orchestrateTurn";
 import { resolveAssistantMode } from "../resolveAssistantMode";
 import { analyzeIntent } from "./intentAnalysis";
+import { resolveAvailableContradictionPointers } from "../mw3AvailableEvidence";
+import {
+  deriveMw3ContradictionAssessment,
+  type Mw3ContradictionAssessmentInput,
+} from "@/lib/nora-cognitive-runtime";
 import { isPureRepositoryAnalysisIntent } from "./repositoryIntent";
 import { evaluateMorrisGateRequired } from "./gatePolicy";
 import {
@@ -48,6 +53,22 @@ import type {
 const EPHEMERAL_NOTICE =
   "Conversation et Proposal F2 restent process-local ; Project/LPS/Cycle linkage M2 est persisté dans Product SQLite. AUCUNE EXÉCUTION.";

+async function deriveProductPathMw3Assessment(
+  analysis: IntentAnalysisDto,
+): Promise<Mw3ContradictionAssessmentInput | null> {
+  const candidate = analysis.contradictionCandidate;
+  if (!candidate || candidate.conflictPresent !== true) return null;
+  const availablePointers = await resolveAvailableContradictionPointers({
+    claimedEvidenceIds: candidate.claimedEvidenceIds,
+  });
+  return deriveMw3ContradictionAssessment({
+    candidate,
+    availablePointers,
+    sourceBreadth: analysis.cognitiveWorkload?.sourceBreadth ?? null,
+    trustedSfiaProfile: null,
+  });
+}
+
 function toContextDto(
   result: Extract<
     Awaited<ReturnType<typeof loadProjectRuntimeForAssistant>>,
@@ -444,6 +465,7 @@ export async function orchestrateAssistantSend(input: {

   const { analysis, model } = analysisResult;
   const presentation = modeResolution.presentation;
+  const contradictionAssessment = await deriveProductPathMw3Assessment(analysis);

   // Repository read/search/Git-truth without mutation → F1 (no Cycle/LPS mutation).
   // Deterministic override when the classifier drifts to ambiguous/actionable for pure reads.
@@ -461,6 +483,7 @@ export async function orchestrateAssistantSend(input: {
       provider: input.provider,
       semanticCognitiveWorkload: analysis.cognitiveWorkload,
       truthCContext: truthCContextForF1,
+      contradictionAssessment,
     });
     if (!f1.ok) return f1;
     return {
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/types.ts b/projects/sfia-studio/app/features/project-assistant/f2/types.ts
index 3e7897bf..cc427df0 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/types.ts
@@ -3,6 +3,8 @@
  * Recommendation ≠ Decision ≠ Execution.
  */

+import type { Mw3ContradictionCandidateSignal } from "@/lib/nora-cognitive-runtime/deriveMw3Assessment";
+
 export type IntentClass =
   | "informative"
   | "actionable"
@@ -147,6 +149,11 @@ export type IntentAnalysisDto = {
    * Never serialized on ProjectAssistantSendResult.
    */
   cognitiveWorkload: SemanticCognitiveWorkloadAssessment | null;
+  /**
+   * INTERNAL untrusted contradiction candidate from structured cognition.
+   * Never Evidence; never a client-authored STOP.
+   */
+  contradictionCandidate?: Mw3ContradictionCandidateSignal | null;
   objective: string | null;
   scope: string | null;
   rephrasedRequest: string | null;
diff --git a/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts b/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
new file mode 100644
index 00000000..3e393e01
--- /dev/null
+++ b/projects/sfia-studio/app/features/project-assistant/mw3AvailableEvidence.ts
@@ -0,0 +1,69 @@
+/**
+ * MW3 — resolve claimed Evidence IDs against actual available metadata.
+ *
+ * Fake/tests may substitute the source/Evidence lookup boundary.
+ * SFIA still qualifies via disposeContradiction — this module does not
+ * decide candidate vs evidence_backed.
+ */
+import type { ContradictionEvidencePointer } from "@/lib/nora-cognitive-runtime";
+import type { Evidence } from "@/lib/oa/evidence-review/domain/types";
+import { getRuntimeApplicationService } from "@/lib/vertical-slice-runtime";
+
+let testCatalog: ContradictionEvidencePointer[] | null = null;
+
+/** Test-only Fake source/Evidence boundary. Never a client DTO field. */
+export function setMw3AvailableEvidenceForTests(
+  pointers: ContradictionEvidencePointer[] | null,
+): void {
+  testCatalog = pointers;
+}
+
+export async function resolveAvailableContradictionPointers(input: {
+  claimedEvidenceIds: string[];
+}): Promise<ContradictionEvidencePointer[]> {
+  const claimed = input.claimedEvidenceIds
+    .map((id) => id.trim())
+    .filter(Boolean);
+  if (claimed.length === 0) return [];
+
+  const resolved: ContradictionEvidencePointer[] = [];
+  for (const evidenceId of claimed) {
+    const fromTest = testCatalog?.find((p) => p.evidenceId === evidenceId);
+    if (fromTest) {
+      resolved.push({ ...fromTest });
+      continue;
+    }
+    const fromOa = await lookupOaEvidence(evidenceId);
+    if (fromOa) resolved.push(fromOa);
+  }
+  return resolved;
+}
+
+async function lookupOaEvidence(
+  evidenceId: string,
+): Promise<ContradictionEvidencePointer | null> {
+  const oa = getRuntimeApplicationService().oa;
+    const repository = oa?.evidenceReviewServices?.repository;
+    if (!repository) return null;
+    try {
+      const evidence = await repository.findById(evidenceId);
+    if (!evidence) return null;
+    return mapOaEvidence(evidence);
+  } catch {
+    return null;
+  }
+}
+
+function mapOaEvidence(evidence: Evidence): ContradictionEvidencePointer {
+  const attributable =
+    Boolean(evidence.source?.trim()) &&
+    (evidence.status === "available" || evidence.status === "verified");
+  return {
+    evidenceId: evidence.evidenceId,
+    sourceId: evidence.source,
+    domain: evidence.bindings.projectId ? "project" : "unknown",
+    freshness: evidence.freshness ?? "unknown",
+    attributable,
+    fabricated: false,
+  };
+}
diff --git a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
index 4312ec8b..eb34ca6a 100644
--- a/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
+++ b/projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
@@ -69,6 +69,16 @@ function toMw3Surface(
     nextAction: stop.anatomy?.nextAction ?? null,
     insufficiencyReasons: [...disposition.insufficiencyReasons],
     allowsSilentSuccess: false,
+    blockedImpact: stop.cognitiveStop
+      ? `Progression bloquée — prémisse gouvernante invalidée${
+          stop.anatomy?.governingPremise
+            ? ` (${stop.anatomy.governingPremise})`
+            : ""
+        }.`
+      : null,
+    mayContinue:
+      stop.cognitiveStop !== true && stop.progression === "continue",
+    notTechnicalFailure: stop.progression !== "technical_failure",
   };
 }

diff --git a/projects/sfia-studio/app/features/project-assistant/types.ts b/projects/sfia-studio/app/features/project-assistant/types.ts
index b91c0ee4..dcf6a664 100644
--- a/projects/sfia-studio/app/features/project-assistant/types.ts
+++ b/projects/sfia-studio/app/features/project-assistant/types.ts
@@ -55,6 +55,12 @@ export type Mw3CognitiveSurfaceDto = {
   insufficiencyReasons: string[];
   /** Anti-claim: never a silent SUCCESS when cognitiveStop. */
   allowsSilentSuccess: false;
+  /** Visible blocked impact when Cognitive STOP; null otherwise. */
+  blockedImpact?: string | null;
+  /** Honest continue when contradiction is surfaced without STOP. */
+  mayContinue?: boolean;
+  /** Explicit: this surface is not a technical/provider failure. */
+  notTechnicalFailure?: boolean;
 };

 export type AssistantHistoryMessage = {
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveStop.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveStop.ts
index 9b410dc5..0c245ff3 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveStop.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/cognitiveStop.ts
@@ -121,20 +121,28 @@ export function decideCognitiveStop(
     };
   }

-  // evidence_backed
-  if (input.localImpactOnly === true || input.governingPremiseInvalidated !== true) {
+  // evidence_backed — governing invalidation takes precedence over localImpactOnly.
+  // Conflicting flags (localImpactOnly=true AND governingPremiseInvalidated=true)
+  // fail closed to Cognitive STOP. Do not silently prefer local impact.
+  if (input.governingPremiseInvalidated === true) {
+    const premise =
+      typeof input.governingPremise === "string" &&
+      input.governingPremise.trim().length > 0
+        ? input.governingPremise.trim()
+        : "Indispensable governing premise";
+
     return {
-      progression: "continue",
-      outcome: "PROGRESS_WITH_CONTRADICTION",
-      cognitiveStop: false,
+      progression: "cognitive_stop",
+      outcome: "COGNITIVE_STOP",
+      cognitiveStop: true,
       anatomy: {
-        caseCode: "F_evidence_backed_contradiction",
-        reason:
-          "Evidence-backed contradiction surfaced — governing premise still holds; progression may continue honestly.",
+        caseCode: "G_governing_premise_contradiction",
+        reason: `Evidence-backed contradiction invalidates governing premise: ${premise}`,
         contradictionEvidenceIds: [...input.disposition.acceptedEvidenceIds],
         sourceIds: [...input.disposition.acceptedSourceIds],
-        governingPremise: input.governingPremise ?? "",
-        nextAction: "Correct recommendation path if needed; no Cognitive STOP.",
+        governingPremise: premise,
+        nextAction:
+          "Cognitive STOP — replan/recovery as recommendation; Pilote HumanDecision if structural.",
         notTechnicalError: true,
         notHumanDecision: true,
       },
@@ -143,24 +151,18 @@ export function decideCognitiveStop(
     };
   }

-  const premise =
-    typeof input.governingPremise === "string" &&
-    input.governingPremise.trim().length > 0
-      ? input.governingPremise.trim()
-      : "Indispensable governing premise";
-
   return {
-    progression: "cognitive_stop",
-    outcome: "COGNITIVE_STOP",
-    cognitiveStop: true,
+    progression: "continue",
+    outcome: "PROGRESS_WITH_CONTRADICTION",
+    cognitiveStop: false,
     anatomy: {
-      caseCode: "G_governing_premise_contradiction",
-      reason: `Evidence-backed contradiction invalidates governing premise: ${premise}`,
+      caseCode: "F_evidence_backed_contradiction",
+      reason:
+        "Evidence-backed contradiction surfaced — governing premise still holds; progression may continue honestly.",
       contradictionEvidenceIds: [...input.disposition.acceptedEvidenceIds],
       sourceIds: [...input.disposition.acceptedSourceIds],
-      governingPremise: premise,
-      nextAction:
-        "Cognitive STOP — replan/recovery as recommendation; Pilote HumanDecision if structural.",
+      governingPremise: input.governingPremise ?? "",
+      nextAction: "Correct recommendation path if needed; no Cognitive STOP.",
       notTechnicalError: true,
       notHumanDecision: true,
     },
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/deriveMw3Assessment.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/deriveMw3Assessment.ts
new file mode 100644
index 00000000..04e381db
--- /dev/null
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/deriveMw3Assessment.ts
@@ -0,0 +1,106 @@
+/**
+ * MW3 — derive contradictionAssessment from an untrusted cognitive candidate
+ * plus actual available Evidence/source pointers.
+ *
+ * Model/candidate assertions NEVER self-promote to evidence_backed.
+ * Promotion remains exclusive to disposeContradiction.
+ */
+import type { ContradictionEvidencePointer } from "./contradictionDisposition";
+import type { Mw3ContradictionAssessmentInput } from "./runNoraCognitiveTurn";
+import type { CognitiveStrategyClass } from "./cognitiveWorkloadPolicy";
+
+/** Untrusted cognitive candidate — not Evidence, not Truth C, not a final STOP. */
+export type Mw3ContradictionCandidateSignal = {
+  conflictPresent: boolean;
+  claimedEvidenceIds: string[];
+  requiredDomains?: string[];
+  requiredSourceCount?: number;
+  freshnessMatters?: boolean;
+  governingPremise?: string | null;
+  governingPremiseInvalidated?: boolean;
+  localImpactOnly?: boolean;
+  fabricationAttempt?: boolean;
+};
+
+export function deriveMw3ContradictionAssessment(input: {
+  candidate: Mw3ContradictionCandidateSignal;
+  availablePointers: ContradictionEvidencePointer[];
+  sourceBreadth?: "low" | "medium" | "high" | "unknown" | null;
+  trustedSfiaProfile?: string | null;
+  strategyClass?: CognitiveStrategyClass | null;
+}): Mw3ContradictionAssessmentInput | null {
+  if (input.candidate.conflictPresent !== true) {
+    return null;
+  }
+
+  const availableById = new Map(
+    input.availablePointers.map((p) => [p.evidenceId, p]),
+  );
+  const claimed = uniqueStrings(input.candidate.claimedEvidenceIds);
+  const evidencePointers: ContradictionEvidencePointer[] = [];
+
+  if (input.candidate.fabricationAttempt === true) {
+    return {
+      conflict: {
+        conflictPresent: true,
+        evidencePointers: [],
+        requiredDomains: input.candidate.requiredDomains,
+        requiredSourceCount: input.candidate.requiredSourceCount,
+        freshnessMatters: input.candidate.freshnessMatters,
+        fabricationAttempt: true,
+        sourceBreadth: input.sourceBreadth ?? null,
+        trustedSfiaProfile: input.trustedSfiaProfile ?? null,
+        strategyClass: input.strategyClass ?? null,
+      },
+      governingPremiseInvalidated:
+        input.candidate.governingPremiseInvalidated === true,
+      governingPremise: input.candidate.governingPremise ?? undefined,
+      localImpactOnly: input.candidate.localImpactOnly === true,
+    };
+  }
+
+  for (const evidenceId of claimed) {
+    const found = availableById.get(evidenceId);
+    if (found) {
+      evidencePointers.push({ ...found });
+      continue;
+    }
+    evidencePointers.push({
+      evidenceId,
+      sourceId: "unresolved",
+      domain: "unknown",
+      freshness: "unknown",
+      attributable: false,
+      fabricated: true,
+    });
+  }
+
+  return {
+    conflict: {
+      conflictPresent: true,
+      evidencePointers,
+      requiredDomains: input.candidate.requiredDomains,
+      requiredSourceCount: input.candidate.requiredSourceCount,
+      freshnessMatters: input.candidate.freshnessMatters,
+      sourceBreadth: input.sourceBreadth ?? null,
+      trustedSfiaProfile: input.trustedSfiaProfile ?? null,
+      strategyClass: input.strategyClass ?? null,
+    },
+    governingPremiseInvalidated:
+      input.candidate.governingPremiseInvalidated === true,
+    governingPremise: input.candidate.governingPremise ?? undefined,
+    localImpactOnly: input.candidate.localImpactOnly === true,
+  };
+}
+
+function uniqueStrings(items: string[]): string[] {
+  const out: string[] = [];
+  const seen = new Set<string>();
+  for (const raw of items) {
+    const id = raw.trim();
+    if (!id || seen.has(id)) continue;
+    seen.add(id);
+    out.push(id);
+  }
+  return out;
+}
diff --git a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
index 8fa24cfb..1836bfd2 100644
--- a/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
+++ b/projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
@@ -113,6 +113,10 @@ export {
   cognitiveStopAllowsProductSuccess,
   formatCognitiveStopPiloteNotice,
 } from "./cognitiveStop";
+export {
+  deriveMw3ContradictionAssessment,
+  type Mw3ContradictionCandidateSignal,
+} from "./deriveMw3Assessment";
 export {
   decideCognitiveStrategy,
   normalizeCognitiveWorkloadSignals,
diff --git a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
index 03e41520..0e0c3bb0 100644
--- a/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
+++ b/projects/sfia-studio/app/lib/nora-eval/d0Runner.ts
@@ -74,6 +74,7 @@ async function observationForScenario(
         criticalJustification: "Critical",
         requestedOperation: "merge",
         cognitiveWorkload: null,
+        contradictionCandidate: null,
         parseOk: true,
       };
       return {

```
