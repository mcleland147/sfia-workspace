# SFIA Studio Next — ML5 C17 Review Pack FULL

**Cycle:** C17 — Convergence fonctionnelle verticale du conducteur cognitif Nora
**Date/heure UTC:** 2026-11-24T06:59:08Z
**Profil:** Critical
**Classe:** NO RELEASE
**Review Pack:** FULL · mono-cycle · réinitialisé · non-stub

## 1. Objectif et qualification

Terminer fonctionnellement le lot de convergence 1 via quatre parcours verticaux exécutés dans Studio Next (P1–P4), observer, corriger, rejouer, prouver.

## 2. Git Truth

| Champ | Valeur |
| --- | --- |
| Dépôt | mcleland147/sfia-workspace |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| HEAD initial/final | `6cf33e9923796974b9ee540a9c6ff27110342950` (inchangé — aucun commit projet) |
| origin/main | `997897fd7cf914771e7d08e8030dc7123fab7d25` (vérifié cycle) |
| Handoff remote before | `2a05d551c14e8140af20d085e9df81892c79153b` |
| État | DIRTY — 114 entrées (67 untracked) ; C1–C17 conservés |
| Push projet | NONE |

## 3. Sources lues

- Handoff C16 `2a05d551` / blob `3a987a0b` — NOT READY (lifecycle/business production incomplete)
- Conception ML5 `017a77e9` ; conformité `975a8d5f` ; main `997897fd`
- `conducteur-cognitif-et-production-nora.md` ; contrat acceptation ; registre ; ENV-01 ; product-versioning
- Options B/C/C inchangées

## 4. Héritage C1–C16 vs diff C17

**Héritage:** conducteur C15, raccordement C16, cognitive_works, WEB egress, ownership lease/CAS, bridge DRAFT.

**C17 propre (fonctionnel):**
- Attachment sémantique (fin de `forceNewWork: true` systématique)
- Merge investigation riche + productionInstruction/acceptanceCriteria
- SEGMENT_INVOCATION_LIMIT ≠ BUDGET_EXHAUSTED sticky
- Enveloppe globale défaut 24 segments DEV
- Filiation contrat↔cognitive_work (migration 021)
- READY serveur : statut COMPLETE + envelope + production basis
- Reclaim COMPLETE pour clarification
- Campagne LIVE P1–P4

## 5. Architecture as-built (C17)

```
Pilote → /api/preparations/:id/messages
  → service.ts runNoraCognitiveTurn
    → resolveCognitiveWorkAttachment (continue / new / technical resume)
    → runCognitiveConductor (segments, heartbeat, checkpoint, lease)
      → generateNoraReply (Agents SDK LIVE)
      → mergeInvestigationFromReply
    → bridgeNoraTurnToContractPreparation (DRAFT + filiation)
    → D4 document fence (CREATE) si qualification documentaire
  → /contracts/:id/ready (filiation + sufficiency + envelope)
  → /attempts/prepare → /authorize confirmed:false (refus D6, CANCELLED)
```

PostgreSQL = vérité transactionnelle. D3 conduit. D4 documents. D6 HumanDecision. D7 contrats/effets.

## 6. Parcours P1–P4

### Tableau synthèse

| Parcours | Résultat attendu | Résultat observé | Niveau de preuve | Verdict |
| --- | --- | --- | --- | --- |
| P1 Conversation | Simple proportionné + complexe investigué | P1-A 1 segment COMPLETE LIVE ; P1-B multi-seg+tools puis SEGMENT_LIMIT / FAILED partiel | DEV LIVE | **PARTIAL** |
| P2 Continuité | Même work après clarification ; indépendant séparé ; restart | Même workId repris ; indépendant distinct ; reclaim COMPLETE OK ; restart serveur mid-work non rejoué ce cycle | DEV LIVE | **PARTIAL** (continuité PASS) |
| P3 Production | Document D4 + contrat instruction | Document `doc_111a96f8` AVAILABLE contenu sections ; contrat instruction 7593 chars / critères présents ; seuil 24k non atteint | DEV LIVE | **PARTIAL** (doc simple PASS) |
| P4 Gouverné | DRAFT inspectable ; READY légitime ; refus sans effet | DRAFT+filiation ; READY `tctr_fe67799d` ; attempt CANCELLED refused:true dec_1de50b41 ; invalidation matérielle non rejouée | DEV LIVE | **PARTIAL** (READY+refus PASS) |

### Preuves identifiants clés

- P1-A: work `cgw_c6e20907…` gen `gen_b10c3c4a…` COMPLETE 1 seg
- P1-B/P2: work `cgw_e20beb24…` resumed same ; independent `cgw_7511f3a1…`
- P3: prep `prep_90af8660…` doc `doc_111a96f8…` rev `drev_e63fd50b…`
- P4: contract READY `tctr_fe67799d…` fp `d8850899…` work `cgw_9ae4e469…` r15 ; attempt `efx_1b0e2509…` CANCELLED

### P0 traités C17

| P0 | Statut |
| --- | --- |
| forceNewWork systématique | CORRIGÉ |
| merge investigation incomplet | CORRIGÉ (base) |
| suspend→false COMPLETE | CORRIGÉ (INTERRUPTED) |
| SEGMENT marqué BUDGET sticky | CORRIGÉ |
| filiation READY workId | CORRIGÉ + migration 021 |
| production métier absente | PARTIEL (D4 simple + contrat DRAFT/READY) |
| WEB P0 | héritage C16 conservé ; campagne WEB non re-focalisée C17 |

## 7. Build / validations

- Typecheck: PASS (fin cycle)
- Build Next: PASS (cycle antérieur + corrections prefer-const)
- DEV :3100: démarré / redémarré plusieurs fois ; smoke auto-session 200
- PG :5433 sfia_next_dev / e2e ; migration 021
- Tests: investigation 8 PASS ; C16 unit 5 ; PG ownership 5
- Fake/Real: LIVE OpenAI Agents SDK utilisé ; WEB non central C17 ; aucun GitHub REAL

## 8. Non-régressions

Interfaces touchées D3/D4/D6/D7 préservées sur chemins propriétaires. Pas de claim F2. Pas RECETTE/STABLE. Ownership PG tests PASS.

## 9. Exigences / dette / exit

Registre 99: pas de % global inventé. Écarts C16 ouverts sur investigation complexe longue, invalidation READY, instruction ≥24k, restart serveur mid-work.

**Prochaine capacité:** Lot de convergence 2 — non engagé.
**Morris:** décide sortie lot 1 après revue indépendante.

## 10. Verdict cycle

**NOT READY** — convergence verticale partielle prouvée LIVE ; sortie lot 1 non atteinte.

## 11. Diff stat (périmètre projet, DIRTY total)

```
.../construction/delivery-history.md               | 241 ++++++++++++
 .../ml5-as-built-cursor-realization.md             | 104 ++---
 ...5-registre-couverture-et-revue-developpement.md | 252 ++++++++++--
 projects/sfia-studio-next/web/next.config.ts       |   6 +
 .../sfia-studio-next/web/scripts/db-migrate.sh     |   5 +-
 .../preparations/[preparationId]/messages/route.ts |   4 +
 .../turns/by-key/[clientTurnKey]/route.ts          |   1 +
 .../attempts/[attemptId]/authorize/route.ts        |  15 +-
 .../attempts/[attemptId]/handoff/route.ts          |  31 +-
 .../attempts/[attemptId]/qualification/route.ts    | 400 +++++++++++++++++--
 .../contracts/[contractId]/ready/route.ts          |  22 +-
 .../[projectId]/realization/contracts/route.ts     |  31 +-
 .../sfia-studio-next/web/src/app/login/page.tsx    |  11 +-
 .../web/src/app/projects/[projectId]/page.tsx      | 416 ++++++++++++++++++-
 .../web/src/components/figma/ContractViewer.tsx    |   5 +-
 .../components/figma/CursorRealizationSurface.tsx  | 438 +++++++++++++++------
 .../web/src/components/figma/NoraConversation.tsx  |  42 ++
 .../web/src/components/figma/ProjectChrome.tsx     |  11 +-
 .../web/src/components/figma/RealizationBilan.tsx  | 119 ++++--
 .../web/src/components/figma/tokens.css            | 275 +++++++++++++
 .../web/src/components/shell/StudioShell.tsx       |  16 +-
 .../web/src/components/shell/studio-rail.ts        |  12 +-
 projects/sfia-studio-next/web/src/db/schema.ts     |  63 ++-
 .../src/domains/conversation/cognitive-policy.ts   |  31 +-
 .../web/src/domains/conversation/d4-read-tools.ts  |  36 +-
 .../src/domains/conversation/intent-conduction.ts  |  10 +-
 .../conversation/investigation-persistence.ts      | 159 ++++++--
 .../domains/conversation/investigation-state.ts    | 133 ++++---
 .../web/src/domains/conversation/nora-adapter.ts   | 132 ++++++-
 .../domains/conversation/semantic-qualification.ts |  11 +
 .../web/src/domains/conversation/service.ts        | 140 ++++++-
 .../src/domains/conversation/turn-projection.ts    |   4 +-
 .../src/domains/conversation/visual-composition.ts |   3 +-
 .../domains/execution/cursor-attempt-service.ts    | 434 +++++++++++++++++++-
 .../web/src/domains/execution/cursor-claim.ts      |  66 +++-
 .../web/src/domains/execution/cursor-handoff.ts    |  18 +
 .../src/domains/execution/cursor-sdk-adapter.ts    | 289 +++++++++++++-
 .../web/src/domains/execution/handoff-integrity.ts |  49 +++
 .../src/domains/execution/technical-contract.ts    |  18 +-
 .../web/src/domains/execution/types.ts             |   2 +
 .../web/src/domains/identity/session.ts            |  71 ++++
 .../web/src/domains/proofs/cursor-qualify.ts       | 180 ++++++++-
 projects/sfia-studio-next/web/src/lib/auth.ts      |  18 +
 .../integration/ml5-cursor-dispatch.pg.test.ts     | 146 ++++++-
 .../web/tests/unit/ml5-cursor-qualify.test.ts      |  23 ++
 .../web/tests/unit/ml5-investigation-state.test.ts |  50 ++-
 46 files changed, 4086 insertions(+), 457 deletions(-)
```

Untracked majeurs C17/héritage: `67` (voir git status). Diff C17 ≠ seul cumul depuis HEAD.

## 12. Contenu intégral — fichiers créés C17 / conducteur


### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts`

Blob: `e19fdb47ff59aa992d29b64a043b8651afa6e2f1` · 283 lines

```
/**
 * Adaptive D3 cognitive conductor (Option B) — one or more provider segments
 * for the same cognitive work. Reuses OpenAI Agents SDK via nora-adapter.
 * No second cognitive engine. No lexical depth routing.
 */

import {
  buildCognitivePolicy,
  type CognitivePolicy,
} from "./cognitive-policy";
import {
  accumulateResources,
  checkpointCognitiveWork,
  evaluateGlobalResourceEnvelope,
  heartbeatCognitiveWork,
  openOrResumeCognitiveWork,
  releaseCognitiveWorkLease,
  type CognitiveProductionState,
  type CognitiveResources,
  type CognitiveWorkRow,
} from "./cognitive-work";
import {
  evaluateContractReadiness,
  type InvestigationState,
} from "./investigation-state";
import type { NoraTurnQualification } from "./semantic-qualification";

export type ConductorSegmentResult = {
  replyText: string;
  qualification: NoraTurnQualification | null;
  investigation: InvestigationState;
  generationId?: string | null;
  resourcesDelta: Partial<CognitiveResources>;
  /** Semantic signal: more read-only work remains useful. */
  continueWork: boolean;
  production?: Partial<CognitiveProductionState>;
};

export type ConductorRunInput = {
  pilotId: string;
  preparationId: string;
  projectId?: string | null;
  conversationId?: string | null;
  objective: string;
  expectedOutcome?: string;
  workId?: string | null;
  forceNewWork?: boolean;
  turnCommandId?: string | null;
  ownerTokenTurn?: string | null;
  /** Execute one provider segment; conductor decides whether to continue. */
  runSegment: (ctx: {
    work: CognitiveWorkRow;
    segmentIndex: number;
    policy: CognitivePolicy;
  }) => Promise<ConductorSegmentResult>;
  /** Optional semantic policy resolver — must not use message length. */
  resolvePolicy?: (work: CognitiveWorkRow, segmentIndex: number) => CognitivePolicy;
  maxSegmentsThisInvocation?: number;
};

export type ConductorRunResult = {
  work: CognitiveWorkRow;
  ownerToken: string;
  resumed: boolean;
  segmentsRun: number;
  replyText: string;
  qualification: NoraTurnQualification | null;
  investigation: InvestigationState;
  suspended: boolean;
  suspendReason: string | null;
  production: CognitiveProductionState;
};

/**
 * Run adaptive conductor for one user-facing invocation.
 * May execute several segments until done, suspended, or local max reached.
 * Global resource counters accumulate across segments and invocations.
 */
export async function runCognitiveConductor(
  input: ConductorRunInput,
): Promise<ConductorRunResult> {
  const opened = await openOrResumeCognitiveWork({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    projectId: input.projectId,
    conversationId: input.conversationId,
    objective: input.objective,
    expectedOutcome: input.expectedOutcome,
    workId: input.workId,
    forceNew: input.forceNewWork,
  });

  let work = opened.work;
  const ownerToken = opened.ownerToken;
  let revision = work.revision;
  let resources: CognitiveResources = { ...work.resources };
  let production: CognitiveProductionState = { ...work.production };
  let investigation = evaluateContractReadiness(work.state);
  let replyText = "";
  let qualification: NoraTurnQualification | null = null;
  let suspended = false;
  let suspendReason: string | null = null;
  let segmentsRun = 0;

  const maxLocal = Math.max(1, input.maxSegmentsThisInvocation ?? 3);

  for (let i = 0; i < maxLocal; i++) {
    const envelope = evaluateGlobalResourceEnvelope(resources);
    if (!envelope.ok) {
      suspended = true;
      suspendReason = envelope.reason ?? "GLOBAL_BUDGET_EXHAUSTED";
      investigation = {
        ...investigation,
        sufficiency: "BUDGET_EXHAUSTED",
        contractReady: false,
        contractReadyBlockedReason: suspendReason,
      };
      break;
    }

    const policy =
      input.resolvePolicy?.(work, i) ??
      buildCognitivePolicy(work.objective || input.objective);

    await heartbeatCognitiveWork({ workId: work.id, ownerToken });

    const started = Date.now();
    const segment = await input.runSegment({ work, segmentIndex: i, policy });
    segmentsRun += 1;

    resources = accumulateResources(resources, {
      ...segment.resourcesDelta,
      segmentCalls: 1,
      durationMs: Date.now() - started,
    });
    investigation = evaluateContractReadiness(segment.investigation);
    replyText = segment.replyText || replyText;
    qualification = segment.qualification ?? qualification;
    if (segment.production) {
      production = {
        ...production,
        ...segment.production,
        parts: segment.production.parts ?? production.parts,
      };
    }

    work = await checkpointCognitiveWork({
      pilotId: input.pilotId,
      workId: work.id,
      ownerToken,
      expectedRevision: revision,
      cause: segment.continueWork ? "SEGMENT_CONTINUE" : "SEGMENT_COMPLETE",
      state: investigation,
      resources,
      production,
      status: "RUNNING",
      turnCommandId: input.turnCommandId,
      generationId: segment.generationId,
      objective: investigation.intentSummary || work.objective,
      expectedOutcome: investigation.desiredOutcome || work.expectedOutcome,
    });
    revision = work.revision;

    if (!segment.continueWork) {
      break;
    }

    const again = evaluateGlobalResourceEnvelope(resources);
    if (!again.ok) {
      suspended = true;
      suspendReason = again.reason ?? "GLOBAL_BUDGET_EXHAUSTED";
      break;
    }

    // C16: local invocation segment cap is technical, not a business COMPLETE.
    if (i === maxLocal - 1) {
      suspended = true;
      suspendReason = "SEGMENT_INVOCATION_LIMIT";
      investigation = {
        ...investigation,
        contractReady: false,
        contractReadyBlockedReason: suspendReason,
        remainingWork:
          investigation.remainingWork.length > 0
            ? investigation.remainingWork
            : ["Continuation requise — limite de segments de cette invocation"],
      };
      work = await checkpointCognitiveWork({
        pilotId: input.pilotId,
        workId: work.id,
        ownerToken,
        expectedRevision: revision,
        cause: "BUDGET",
        state: investigation,
        resources,
        production,
        status: "SUSPENDED",
        interruptCause: suspendReason,
        turnCommandId: input.turnCommandId,
      });
      revision = work.revision;
      break;
    }
  }

  // C17: only a real global envelope exhaustion poisons sufficiency as BUDGET_EXHAUSTED.
  // SEGMENT_INVOCATION_LIMIT is a technical local cap — suspend honestly, stay resumable,
  // and never block later READY as if the global budget were spent.
  const isGlobalBudget =
    Boolean(suspendReason) &&
    (suspendReason === "GLOBAL_BUDGET_EXHAUSTED" ||
      suspendReason === "GLOBAL_SEGMENT_BUDGET_EXHAUSTED" ||
      suspendReason === "GLOBAL_TOKEN_BUDGET_EXHAUSTED" ||
      (suspendReason?.startsWith("GLOBAL_") === true &&
        suspendReason.includes("BUDGET")));
  if (suspended && isGlobalBudget) {
    investigation = {
      ...investigation,
      sufficiency: "BUDGET_EXHAUSTED",
      contractReady: false,
      contractReadyBlockedReason: suspendReason,
    };
  } else if (suspended && suspendReason === "SEGMENT_INVOCATION_LIMIT") {
    investigation = {
      ...investigation,
      sufficiency:
        investigation.sufficiency === "BUDGET_EXHAUSTED"
          ? "UNKNOWN"
          : investigation.sufficiency,
      contractReady: false,
      contractReadyBlockedReason: suspendReason,
    };
  } else if (!suspended && investigation.sufficiency === "BUDGET_EXHAUSTED") {
    // Resume completed after a prior false budget poison (segment cap) — re-evaluate.
    investigation = evaluateContractReadiness({
      ...investigation,
      sufficiency: "UNKNOWN",
      contractReadyBlockedReason: null,
    });
  }

  const terminalStatus = suspended
    ? "SUSPENDED"
    : production.status === "PARTIAL" || production.status === "FAILED"
      ? "SUSPENDED"
      : "COMPLETE";

  // Persist terminal investigation while ownership still holds (READY reads this state).
  work = await checkpointCognitiveWork({
    pilotId: input.pilotId,
    workId: work.id,
    ownerToken,
    expectedRevision: revision,
    cause: suspended ? "BUDGET" : "SEGMENT_COMPLETE",
    state: investigation,
    resources,
    production,
    status: terminalStatus === "COMPLETE" ? "COMPLETE" : "SUSPENDED",
    interruptCause: suspendReason,
    turnCommandId: input.turnCommandId,
  });
  revision = work.revision;

  await releaseCognitiveWorkLease({
    workId: work.id,
    ownerToken,
    status: terminalStatus,
    interruptCause: suspendReason,
  });

  return {
    work: { ...work, status: terminalStatus, resources, production, state: investigation },
    ownerToken,
    resumed: opened.resumed,
    segmentsRun,
    replyText,
    qualification,
    investigation,
    suspended,
    suspendReason,
    production,
  };
}

```

### `projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts`

Blob: `c76820e983e06ddf6ed806b516e5d3be0a103ac9` · 563 lines

```
/**
 * C16/C17 — product entry into the adaptive D3 cognitive conductor.
 * generateNoraReply remains the provider adapter; this module orchestrates
 * cognitive work attachment, multi-segment continuation, and investigation merge.
 */

import {
  runCognitiveConductor,
  type ConductorRunResult,
} from "./cognitive-conductor";
import { buildCognitivePolicy } from "./cognitive-policy";
import {
  listCognitiveWorksForPreparation,
  type CognitiveProductionState,
  type CognitiveWorkRow,
} from "./cognitive-work";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
  type DeterminingQuestion,
  type InvestigationState,
} from "./investigation-state";
import {
  generateNoraReply,
  type NoraGenerateInput,
  type NoraGenerateResult,
} from "./nora-adapter";
import type { NoraTurnQualification } from "./semantic-qualification";

export type NoraCognitiveTurnInput = NoraGenerateInput & {
  pilotId: string;
  preparationId: string;
  projectId?: string | null;
  conversationId?: string | null;
  turnCommandId?: string | null;
  /** Explicit continuation of a prior suspended/open work. */
  workId?: string | null;
  /** When true, always open a new cognitive work (independent request). */
  forceNewWork?: boolean;
  objective?: string;
  expectedOutcome?: string;
  maxSegmentsThisInvocation?: number;
};

export type NoraCognitiveTurnResult = NoraGenerateResult & {
  conductor: {
    workId: string;
    revision: number;
    segmentsRun: number;
    resumed: boolean;
    suspended: boolean;
    suspendReason: string | null;
    investigation: InvestigationState;
    production: CognitiveProductionState;
  };
};

/** Extract usage when the adapter exposes it; otherwise UNKNOWN (null). */
function usageFromReply(reply: NoraGenerateResult): {
  inputTokens: number | null;
  outputTokens: number | null;
} {
  const anyReply = reply as NoraGenerateResult & {
    usage?: { inputTokens?: number; outputTokens?: number; totalTokens?: number };
    inputTokens?: number | null;
    outputTokens?: number | null;
  };
  const input =
    anyReply.usage?.inputTokens ?? anyReply.inputTokens ?? null;
  const output =
    anyReply.usage?.outputTokens ?? anyReply.outputTokens ?? null;
  return {
    inputTokens: typeof input === "number" ? input : null,
    outputTokens: typeof output === "number" ? output : null,
  };
}

function mergeQuestions(
  prior: DeterminingQuestion[],
  clarifications: string[] | undefined,
  answeredHints: string[],
): DeterminingQuestion[] {
  const byId = new Map(prior.map((q) => [q.id, { ...q }]));
  let i = 0;
  for (const text of clarifications ?? []) {
    const trimmed = text.trim();
    if (!trimmed) continue;
    i += 1;
    const id = `q-clar-${i}`;
    const existing = [...byId.values()].find((q) => q.text === trimmed);
    if (existing) continue;
    byId.set(id, {
      id,
      text: trimmed,
      status: "OPEN",
      importance: "DETERMINANT",
    });
  }
  // Mark prior open questions as ANSWERED when Pilot provided complementary text
  // and Nora no longer lists them as clarifications (semantic consolidation).
  if ((clarifications?.length ?? 0) === 0 && answeredHints.length > 0) {
    for (const q of byId.values()) {
      if (q.status === "OPEN" && q.importance === "DETERMINANT" && !q.answerSummary) {
        q.status = "ANSWERED";
        q.answerSummary = answeredHints[0]!.slice(0, 500);
      }
    }
  }
  return [...byId.values()];
}

/**
 * C17 — consolidate full investigation facts from qualification + tools.
 * Not limited to intent/outcome/sources.
 */
export function mergeInvestigationFromReply(
  prior: InvestigationState,
  reply: NoraGenerateResult,
  userText: string,
): InvestigationState {
  const q = reply.qualification;
  const goal =
    q && q.status !== "UNAVAILABLE" ? q.goal?.trim() || "" : "";
  const outcome =
    q && q.status !== "UNAVAILABLE" ? q.desiredOutcome?.trim() || "" : "";
  const scope =
    q && q.status !== "UNAVAILABLE" ? q.initialScope?.trim() || "" : "";

  const sources = [...prior.sources];
  for (const s of reply.observedToolSources ?? []) {
    const idx = sources.findIndex((p) => p.ref === s.ref && p.kind === s.kind);
    if (idx < 0) sources.push(s);
    else {
      const prev = sources[idx]!;
      sources[idx] = {
        ...prev,
        ...s,
        notes: [prev.notes, prev.coverage !== s.coverage ? `${prev.coverage}->${s.coverage}` : null, s.notes]
          .filter(Boolean)
          .join("; "),
      };
    }
  }

  const clarifications =
    q && q.status !== "UNAVAILABLE" ? q.clarifications : undefined;
  const questions = mergeQuestions(
    prior.questions,
    clarifications,
    [userText.trim()].filter(Boolean),
  );

  const remainingWork = [...prior.remainingWork];
  if (clarifications && clarifications.length > 0) {
    for (const c of clarifications) {
      const item = `Clarifier: ${c}`;
      if (!remainingWork.includes(item)) remainingWork.push(item);
    }
  }
  if (q && q.status === "NEEDS_CLARIFICATION" && remainingWork.length === 0) {
    remainingWork.push("Informations déterminantes manquantes");
  }

  const constraints = [...prior.constraints];
  if (scope && !constraints.includes(scope)) constraints.push(scope);

  const wantsPrepare =
    q &&
    q.status !== "UNAVAILABLE" &&
    q.intents.some(
      (i) =>
        i.capabilityId === "d7.prepare_cursor_contract" &&
        (i.mode === "PREPARE" || i.mode === "REQUEST_EFFECT"),
    );

  // Dedicated technical instruction — never substitute replyDraft alone.
  let productionInstruction = prior.productionInstruction ?? null;
  let acceptanceCriteria = [...(prior.acceptanceCriteria ?? [])];
  if (wantsPrepare && reply.content.trim()) {
    // Prefer fenced technical body if Nora produced one; else keep prior.
    const fence = reply.content.match(
      /```(?:sfia-technical|technical-contract|instruction)[\s\S]*?```/i,
    );
    if (fence) {
      productionInstruction = fence[0]!.replace(/```[^\n]*\n?/, "").replace(/```$/, "").trim();
    } else if (!productionInstruction && reply.content.length > 800) {
      // Structured prepare reply may carry the instruction draft — provisional until bridge.
      productionInstruction = reply.content.trim();
    }
    if (acceptanceCriteria.length === 0) {
      const lines = reply.content
        .split("\n")
        .map((l) => l.replace(/^\s*(?:[-*]\s+|\d+[.)]\s+)/, "").trim())
        .filter((l) => l.length > 12 && /critère|accepter|vérif|README|fichier|test/i.test(l));
      if (lines.length >= 2) acceptanceCriteria = lines.slice(0, 12);
    }
  }

  const profileHint: InvestigationState["profileHint"] =
    q && q.status === "NEEDS_CLARIFICATION"
      ? "investigation"
      : wantsPrepare
        ? "investigation"
        : prior.profileHint === "simple"
          ? "analyse"
          : prior.profileHint;

  // C17: prepare paths must carry an explicit desiredOutcome for positive READY basis.
  const desiredOutcome =
    outcome ||
    prior.desiredOutcome ||
    (wantsPrepare
      ? goal ||
        "Contrat technique Cursor DRAFT inspectable (instruction + critères) sans dispatch"
      : "");

  return evaluateContractReadiness({
    ...prior,
    intentSummary: goal || prior.intentSummary || userText.slice(0, 800),
    desiredOutcome,
    sources,
    questions,
    remainingWork,
    constraints,
    profileHint,
    productionInstruction,
    acceptanceCriteria,
  });
}

/**
 * Semantic continuation — never message-length or lexical routing.
 */
export function semanticContinueWork(
  qualification: NoraTurnQualification | null,
  investigation: InvestigationState,
  reply: NoraGenerateResult,
): boolean {
  if (reply.status !== "COMPLETE") return false;
  // True global exhaustion only — sticky false budget is no longer used.
  if (
    investigation.contractReadyBlockedReason === "GLOBAL_BUDGET_EXHAUSTED" ||
    (investigation.contractReadyBlockedReason ?? "").startsWith("GLOBAL_")
  ) {
    return false;
  }
  if (investigation.contractReady) {
    return false;
  }
  // C17: stop only when production basis exists AND prepare intent was emitted —
  // otherwise keep going so Nora can still emit d7.prepare_cursor_contract.
  const productionBasis =
    Boolean(investigation.productionInstruction?.trim()) &&
    Array.isArray(investigation.acceptanceCriteria) &&
    investigation.acceptanceCriteria.some((c) => Boolean(c?.trim()));
  const openDeterminant = investigation.questions.some(
    (q) => q.importance === "DETERMINANT" && q.status !== "ANSWERED",
  );
  const prepareIntentEmitted = Boolean(
    qualification?.intents.some(
      (i) =>
        i.capabilityId === "d7.prepare_cursor_contract" &&
        (i.mode === "PREPARE" || i.mode === "REQUEST_EFFECT"),
    ),
  );
  if (productionBasis && prepareIntentEmitted && !openDeterminant) {
    return false;
  }
  if (qualification && qualification.status === "NEEDS_CLARIFICATION") {
    return true;
  }
  if (qualification && qualification.status !== "UNAVAILABLE") {
    const wantsExploreOrPrepare = qualification.intents.some(
      (i) => i.mode === "EXPLORE" || i.mode === "PREPARE",
    );
    if (wantsExploreOrPrepare && !investigation.contractReady && !productionBasis) {
      return true;
    }
    // Keep one more segment if prepare intent is still missing despite draft prose.
    if (wantsExploreOrPrepare && !prepareIntentEmitted) return true;
    if ((qualification.clarifications?.length ?? 0) > 0) return true;
  }
  if (investigation.remainingWork.length > 0 && !productionBasis) {
    return true;
  }
  if (openDeterminant && (reply.observedToolSources?.length ?? 0) > 0) {
    return true;
  }
  return false;
}

/**
 * C17 — resolve work attachment without systematic forceNew.
 * Server validates identity/scope via openOrResumeCognitiveWork.
 * Technical segment-limit suspensions are resumable; unrelated SUSPENDED works are not auto-merged.
 */
export async function resolveCognitiveWorkAttachment(input: {
  pilotId: string;
  preparationId: string;
  workId?: string | null;
  forceNewWork?: boolean;
}): Promise<{ workId?: string | null; forceNew: boolean; reason: string }> {
  if (input.forceNewWork === true) {
    return { forceNew: true, reason: "FORCE_NEW_EXPLICIT" };
  }
  if (input.workId) {
    return { workId: input.workId, forceNew: false, reason: "EXPLICIT_WORK_ID" };
  }
  const works = await listCognitiveWorksForPreparation({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
  });
  const open = works.filter((w) => w.status === "OPEN");
  if (open.length === 1) {
    return { workId: open[0]!.id, forceNew: false, reason: "SINGLE_OPEN_CONTINUE" };
  }
  const segmentSuspended = works.filter(
    (w) =>
      w.status === "SUSPENDED" &&
      (w.interruptCause === "SEGMENT_INVOCATION_LIMIT" ||
        w.interruptCause === "GLOBAL_BUDGET_EXHAUSTED" ||
        (w.interruptCause ?? "").startsWith("SEGMENT")),
  );
  if (segmentSuspended.length === 1) {
    return {
      workId: segmentSuspended[0]!.id,
      forceNew: false,
      reason: "TECHNICAL_SUSPEND_RESUME",
    };
  }
  // Ambiguous or none — new work (semantic independence).
  return { forceNew: true, reason: "NEW_OR_AMBIGUOUS" };
}

function documentProductionFromReply(
  work: CognitiveWorkRow,
  reply: NoraGenerateResult,
  segmentIndex: number,
  continueWork: boolean,
): CognitiveProductionState | undefined {
  const extracted = reply.content.match(
    /```sfia-document\b([\s\S]*?)```/i,
  );
  if (!extracted) {
    if (!reply.content.trim()) return undefined;
    return {
      kind: work.production.kind === "DOCUMENT" ? "DOCUMENT" : "REPLY",
      status: continueWork ? "IN_PROGRESS" : "COMPLETE",
      objectRef: reply.generationId,
      parts: [
        ...work.production.parts.filter((p) => p.id !== `seg-${segmentIndex}`),
        {
          id: `seg-${segmentIndex}`,
          title: reply.generationId,
          complete: !continueWork,
        },
      ],
      // Durable content for resume — not merely metadata.
      contentMarkdown:
        (work.production as CognitiveProductionState & { contentMarkdown?: string })
          .contentMarkdown && segmentIndex > 0
          ? `${(work.production as CognitiveProductionState & { contentMarkdown?: string }).contentMarkdown ?? ""}\n\n${reply.content}`
          : reply.content,
      limits: continueWork ? ["PRODUCTION_IN_PROGRESS"] : undefined,
    } as CognitiveProductionState;
  }
  const body = extracted[1]!.trim();
  const prev =
    (work.production as CognitiveProductionState & { contentMarkdown?: string })
      .contentMarkdown ?? "";
  const merged = segmentIndex === 0 ? body : `${prev}\n\n${body}`.trim();
  return {
    kind: "DOCUMENT",
    status: continueWork ? "IN_PROGRESS" : "COMPLETE",
    objectRef: reply.generationId,
    parts: [
      ...work.production.parts.filter((p) => p.id !== `seg-${segmentIndex}`),
      {
        id: `seg-${segmentIndex}`,
        title: `document-part-${segmentIndex + 1}`,
        complete: !continueWork,
      },
    ],
    contentMarkdown: merged,
  } as CognitiveProductionState;
}

/**
 * Run Nora through the cognitive conductor for a product turn.
 */
export async function runNoraCognitiveTurn(
  input: NoraCognitiveTurnInput,
): Promise<NoraCognitiveTurnResult> {
  const segmentBox: { reply: NoraGenerateResult | null } = { reply: null };
  const attachment = await resolveCognitiveWorkAttachment({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    workId: input.workId,
    forceNewWork: input.forceNewWork,
  });

  const conductor: ConductorRunResult = await runCognitiveConductor({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    projectId: input.projectId,
    conversationId: input.conversationId,
    objective: input.objective ?? input.userText.slice(0, 2000),
    expectedOutcome: input.expectedOutcome,
    workId: attachment.workId,
    forceNewWork: attachment.forceNew,
    turnCommandId: input.turnCommandId,
    // C17: local cap remains technical; default raised for investigation depth.
    // SEGMENT_INVOCATION_LIMIT still suspends honestly when exhausted.
    maxSegmentsThisInvocation: input.maxSegmentsThisInvocation ?? 5,
    resolvePolicy: (work, segmentIndex) => {
      // Adaptive policy from consolidated objective — not a fixed analyse/medium mask.
      const seed =
        work.state.intentSummary ||
        work.objective ||
        input.userText;
      const base = buildCognitivePolicy(seed);
      if (segmentIndex > 0 && work.state.profileHint === "investigation") {
        return buildCognitivePolicy(
          `${seed}\nRésultat: ${work.state.desiredOutcome}\nQuestions ouvertes`,
        );
      }
      return input.policyOverride ?? base;
    },
    runSegment: async ({ work, segmentIndex, policy }) => {
      const continuationHint =
        segmentIndex === 0
          ? ""
          : [
              "",
              "[Continuation du même travail cognitif — segment suivant]",
              `workId=${work.id} revision=${work.revision}`,
              `Objectif: ${work.objective}`,
              work.state.intentSummary
                ? `Intention consolidée: ${work.state.intentSummary}`
                : null,
              work.state.desiredOutcome
                ? `Résultat attendu: ${work.state.desiredOutcome}`
                : null,
              work.state.remainingWork.length
                ? `Travail restant: ${work.state.remainingWork.join("; ")}`
                : null,
              work.state.questions
                .filter((q) => q.status !== "ANSWERED")
                .map((q) => `Q[${q.importance}]: ${q.text}`)
                .join("\n") || null,
              work.state.constraints.length
                ? `Contraintes: ${work.state.constraints.join("; ")}`
                : null,
            ]
              .filter(Boolean)
              .join("\n");

      const reply = await generateNoraReply({
        userText:
          segmentIndex === 0
            ? input.userText
            : `${input.userText}${continuationHint}`,
        contextSnippets: [
          ...input.contextSnippets,
          ...(segmentIndex > 0
            ? [
                `Checkpoint cognitif ${work.id} r${work.revision}`,
                work.state.intentSummary || "",
                `attachment=${attachment.reason}`,
              ].filter(Boolean)
            : [`attachment=${attachment.reason}`]),
        ],
        knowledgeSnippets: input.knowledgeSnippets,
        pilotageSnippets: input.pilotageSnippets,
        levelASignals: input.levelASignals,
        ckiDelivery: input.ckiDelivery,
        onProvisionalChunk: input.onProvisionalChunk,
        toolScope: input.toolScope,
        policyOverride: policy,
      });
      segmentBox.reply = reply;
      const investigation = mergeInvestigationFromReply(
        work.state.intentSummary
          ? work.state
          : createEmptyInvestigation(input.userText),
        reply,
        input.userText,
      );
      // Stamp filiation on investigation for READY/DRAFT consumers.
      investigation.cognitiveWorkId = work.id;
      investigation.cognitiveRevision = work.revision;
      const continueWork = semanticContinueWork(
        reply.qualification,
        investigation,
        reply,
      );
      const usage = usageFromReply(reply);
      const production = documentProductionFromReply(
        work,
        reply,
        segmentIndex,
        continueWork,
      );
      return {
        replyText: reply.content,
        qualification: reply.qualification,
        investigation,
        generationId: reply.generationId,
        continueWork,
        resourcesDelta: {
          inputTokens: usage.inputTokens,
          outputTokens: usage.outputTokens,
          modelRequested: reply.modelRequested,
          modelApplied: reply.modelApplied,
          effortRequested: reply.effortRequested,
          effortApplied: reply.effortApplied,
          webCalls: (reply.observedToolSources ?? []).filter((s) => s.kind === "WEB")
            .length,
          limits:
            usage.inputTokens == null
              ? ["USAGE_TOKENS_UNKNOWN"]
              : undefined,
        },
        production,
      };
    },
  });

  const lastReply = segmentBox.reply;
  if (!lastReply) {
    throw new Error("CONDUCTOR_NO_SEGMENT");
  }

  // C17: align lifecycle — suspended conductor must not claim COMPLETE reply.
  const alignedStatus: NoraGenerateResult["status"] = conductor.suspended
    ? "INTERRUPTED"
    : lastReply.status;

  const reply: NoraGenerateResult = {
    ...lastReply,
    content: conductor.replyText || lastReply.content,
    qualification: conductor.qualification ?? lastReply.qualification,
    status: alignedStatus,
  };

  return {
    ...reply,
    conductor: {
      workId: conductor.work.id,
      revision: conductor.work.revision,
      segmentsRun: conductor.segmentsRun,
      resumed: conductor.resumed,
      suspended: conductor.suspended,
      suspendReason: conductor.suspendReason,
      investigation: {
        ...conductor.investigation,
        cognitiveWorkId: conductor.work.id,
        cognitiveRevision: conductor.work.revision,
      },
      production: conductor.production,
    },
  };
}

```

### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-work.ts`

Blob: `40569c72f4da5d36aab8f53d41ca7c9a21cacbd4` · 523 lines

```
/**
 * D3 cognitive work — durable identity distinct from conversation turns.
 * Option C (C15): PostgreSQL checkpoints + ownership fencing.
 * Never hold a DB transaction open across a provider call.
 */

import { and, desc, eq, sql } from "drizzle-orm";
import { randomUUID } from "node:crypto";
import { db } from "@/db/client";
import { cognitiveWorkCheckpoints, cognitiveWorks, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { StudioError } from "@/lib/http-errors";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
  type InvestigationState,
} from "./investigation-state";

export type CognitiveWorkStatus =
  | "OPEN"
  | "RUNNING"
  | "SUSPENDED"
  | "COMPLETE"
  | "FAILED"
  | "ABANDONED";

export type CognitiveResources = {
  segmentCalls: number;
  inputTokens?: number | null;
  outputTokens?: number | null;
  cacheTokens?: number | null;
  reasoningTokens?: number | null;
  estimatedCostUsd?: number | null;
  modelRequested?: string | null;
  modelApplied?: string | null;
  effortRequested?: string | null;
  effortApplied?: string | null;
  webCalls?: number;
  durationMs?: number;
  limits?: string[];
};

export type CognitiveProductionState = {
  kind: "NONE" | "REPLY" | "DOCUMENT" | "CONTRACT" | "SYNTHESIS" | "ADVICE";
  status: "IDLE" | "IN_PROGRESS" | "COMPLETE" | "PARTIAL" | "FAILED";
  parts: Array<{ id: string; title?: string; complete: boolean }>;
  objectRef?: string | null;
  limits?: string[];
  /** Durable produced content for resume (document/contract body). */
  contentMarkdown?: string | null;
};

export type CognitiveWorkRow = {
  id: string;
  ownerPilotId: string;
  preparationId: string;
  projectId: string | null;
  conversationId: string | null;
  status: CognitiveWorkStatus;
  revision: number;
  ownerToken: string | null;
  leaseUntil: Date | null;
  objective: string;
  expectedOutcome: string;
  state: InvestigationState;
  resources: CognitiveResources;
  production: CognitiveProductionState;
  interruptCause: string | null;
};

export const COGNITIVE_LEASE_MS = 20 * 60 * 1000;

export const cognitiveClock = {
  nowMs: (): number => Date.now(),
};

function parseJson<T>(raw: string, fallback: T): T {
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function emptyResources(): CognitiveResources {
  return { segmentCalls: 0, webCalls: 0, durationMs: 0, limits: [] };
}

function emptyProduction(): CognitiveProductionState {
  return { kind: "NONE", status: "IDLE", parts: [] };
}

function mapRow(row: typeof cognitiveWorks.$inferSelect): CognitiveWorkRow {
  const state = evaluateContractReadiness(
    parseJson<InvestigationState>(row.stateJson, createEmptyInvestigation(row.objective)),
  );
  return {
    id: row.id,
    ownerPilotId: row.ownerPilotId,
    preparationId: row.preparationId,
    projectId: row.projectId,
    conversationId: row.conversationId,
    status: row.status as CognitiveWorkStatus,
    revision: row.revision,
    ownerToken: row.ownerToken,
    leaseUntil: row.leaseUntil,
    objective: row.objective,
    expectedOutcome: row.expectedOutcome,
    state,
    resources: parseJson<CognitiveResources>(row.resourcesJson, emptyResources()),
    production: parseJson<CognitiveProductionState>(row.productionJson, emptyProduction()),
    interruptCause: row.interruptCause,
  };
}

async function assertPrepOwnership(pilotId: string, preparationId: string) {
  const prep = (
    await db.select().from(preparations).where(eq(preparations.id, preparationId)).limit(1)
  )[0];
  if (!prep) throw new StudioError("NOT_FOUND", "Préparation introuvable");
  if (prep.ownerPilotId !== pilotId) {
    throw new StudioError("ACCESS_DENIED", "Préparation d'un autre Pilote");
  }
  return prep;
}

/** Open a new cognitive work or resume an existing OPEN/SUSPENDED work when continuationKey matches. */
export async function openOrResumeCognitiveWork(input: {
  pilotId: string;
  preparationId: string;
  projectId?: string | null;
  conversationId?: string | null;
  objective: string;
  expectedOutcome?: string;
  /** When set, resume this work id if owned and eligible. */
  workId?: string | null;
  /** Independent new demand — never overwrite another work. */
  forceNew?: boolean;
}): Promise<{ work: CognitiveWorkRow; resumed: boolean; ownerToken: string }> {
  await assertPrepOwnership(input.pilotId, input.preparationId);

  async function claimExisting(existing: typeof cognitiveWorks.$inferSelect) {
    if (existing.ownerPilotId !== input.pilotId) {
      throw new StudioError("ACCESS_DENIED", "Travail cognitif d'un autre Pilote");
    }
    if (existing.preparationId !== input.preparationId) {
      throw new StudioError("ACCESS_DENIED", "Travail hors préparation");
    }
    const now = cognitiveClock.nowMs();
    const leaseActive =
      existing.status === "RUNNING" &&
      existing.leaseUntil != null &&
      existing.leaseUntil.getTime() > now;
    if (leaseActive) {
      throw new StudioError(
        "CONFLICT",
        "Lease cognitif actif — reprise refusée tant que le propriétaire détient le travail",
      );
    }
    // C16: claim bumps revision (fencing) — never silent takeover of same revision.
    const ownerToken = randomUUID();
    const leaseUntil = new Date(now + COGNITIVE_LEASE_MS);
    const nextRevision = existing.revision + 1;
    const nowIso = new Date(now).toISOString();
    const updated = await db.transaction(async (tx) => {
      const rows = await tx
        .update(cognitiveWorks)
        .set({
          status: "RUNNING",
          ownerToken,
          leaseUntil,
          revision: nextRevision,
          updatedAt: new Date(),
          interruptCause: null,
        })
        .where(
          and(
            eq(cognitiveWorks.id, existing.id),
            eq(cognitiveWorks.revision, existing.revision),
            // C17: explicit claim may reopen COMPLETE for clarification / prepare completion
            // (same work identity). Never claim FAILED/ABANDONED.
            sql`(
              ${cognitiveWorks.status} IN ('OPEN', 'SUSPENDED', 'COMPLETE')
              OR (
                ${cognitiveWorks.status} = 'RUNNING'
                AND (
                  ${cognitiveWorks.leaseUntil} IS NULL
                  OR ${cognitiveWorks.leaseUntil} <= ${nowIso}::timestamptz
                )
              )
            )`,
          ),
        )
        .returning();
      if (!rows[0]) {
        throw new StudioError("CONFLICT", "Lease/revision cognitive concurrente");
      }
      await tx.insert(cognitiveWorkCheckpoints).values({
        id: newId("cgcp"),
        workId: existing.id,
        revision: nextRevision,
        parentRevision: existing.revision,
        cause: "CLAIM",
        payloadJson: rows[0].stateJson,
        resourcesJson: rows[0].resourcesJson,
      });
      return rows[0];
    });
    return { work: mapRow(updated), resumed: true as const, ownerToken };
  }

  if (input.workId && !input.forceNew) {
    const existing = (
      await db.select().from(cognitiveWorks).where(eq(cognitiveWorks.id, input.workId)).limit(1)
    )[0];
    if (!existing) throw new StudioError("NOT_FOUND", "Travail cognitif introuvable");
    return claimExisting(existing);
  }

  // C16: without explicit workId, do NOT auto-resume SUSPENDED (semantic attachment required).
  // Only a single OPEN work may be continued implicitly; otherwise create new.
  if (!input.forceNew) {
    const candidates = await db
      .select()
      .from(cognitiveWorks)
      .where(
        and(
          eq(cognitiveWorks.preparationId, input.preparationId),
          eq(cognitiveWorks.ownerPilotId, input.pilotId),
          eq(cognitiveWorks.status, "OPEN"),
        ),
      )
      .orderBy(desc(cognitiveWorks.updatedAt))
      .limit(2);
    if (candidates.length === 1) {
      return claimExisting(candidates[0]!);
    }
  }

  const ownerToken = randomUUID();
  const leaseUntil = new Date(cognitiveClock.nowMs() + COGNITIVE_LEASE_MS);
  const state = createEmptyInvestigation(input.objective);
  if (input.expectedOutcome) state.desiredOutcome = input.expectedOutcome;
  const id = newId("cgw");
  const [row] = await db
    .insert(cognitiveWorks)
    .values({
      id,
      ownerPilotId: input.pilotId,
      preparationId: input.preparationId,
      projectId: input.projectId ?? null,
      conversationId: input.conversationId ?? null,
      status: "RUNNING",
      revision: 1,
      ownerToken,
      leaseUntil,
      objective: input.objective.trim(),
      expectedOutcome: (input.expectedOutcome ?? "").trim(),
      stateJson: JSON.stringify(state),
      resourcesJson: JSON.stringify(emptyResources()),
      productionJson: JSON.stringify(emptyProduction()),
    })
    .returning();
  return { work: mapRow(row!), resumed: false, ownerToken };
}

export async function getCognitiveWork(input: {
  pilotId: string;
  workId: string;
}): Promise<CognitiveWorkRow> {
  const row = (
    await db.select().from(cognitiveWorks).where(eq(cognitiveWorks.id, input.workId)).limit(1)
  )[0];
  if (!row) throw new StudioError("NOT_FOUND", "Travail cognitif introuvable");
  if (row.ownerPilotId !== input.pilotId) {
    throw new StudioError("ACCESS_DENIED", "Travail cognitif d'un autre Pilote");
  }
  return mapRow(row);
}

export async function listCognitiveWorksForPreparation(input: {
  pilotId: string;
  preparationId: string;
}): Promise<CognitiveWorkRow[]> {
  await assertPrepOwnership(input.pilotId, input.preparationId);
  const rows = await db
    .select()
    .from(cognitiveWorks)
    .where(
      and(
        eq(cognitiveWorks.preparationId, input.preparationId),
        eq(cognitiveWorks.ownerPilotId, input.pilotId),
      ),
    )
    .orderBy(desc(cognitiveWorks.updatedAt));
  return rows.map(mapRow);
}

/**
 * Checkpoint + CAS bump. Requires live ownerToken.
 * Does not open a long-lived transaction around provider I/O.
 */
export async function checkpointCognitiveWork(input: {
  pilotId: string;
  workId: string;
  ownerToken: string;
  expectedRevision: number;
  cause: string;
  state: InvestigationState;
  resources?: CognitiveResources;
  production?: CognitiveProductionState;
  status?: CognitiveWorkStatus;
  interruptCause?: string | null;
  turnCommandId?: string | null;
  generationId?: string | null;
  objective?: string;
  expectedOutcome?: string;
}): Promise<CognitiveWorkRow> {
  const evaluated = evaluateContractReadiness(input.state);
  const nextRevision = input.expectedRevision + 1;
  const leaseUntil = new Date(cognitiveClock.nowMs() + COGNITIVE_LEASE_MS);

  const result = await db.transaction(async (tx) => {
    // C16: absent field ≠ empty replacement — load current row first.
    const current = (
      await tx
        .select()
        .from(cognitiveWorks)
        .where(
          and(
            eq(cognitiveWorks.id, input.workId),
            eq(cognitiveWorks.ownerPilotId, input.pilotId),
            eq(cognitiveWorks.ownerToken, input.ownerToken),
            eq(cognitiveWorks.revision, input.expectedRevision),
          ),
        )
        .limit(1)
    )[0];
    if (!current) {
      throw new StudioError(
        "CONFLICT",
        "Checkpoint cognitif refusé — ownership ou révision concurrente",
      );
    }
    const resources =
      input.resources ??
      parseJson<CognitiveResources>(current.resourcesJson, emptyResources());
    const production =
      input.production ??
      parseJson<CognitiveProductionState>(current.productionJson, emptyProduction());
    const patch: Record<string, unknown> = {
      revision: nextRevision,
      status: input.status ?? "RUNNING",
      stateJson: JSON.stringify(evaluated),
      resourcesJson: JSON.stringify(resources),
      productionJson: JSON.stringify(production),
      interruptCause: input.interruptCause ?? null,
      leaseUntil,
      updatedAt: new Date(),
    };
    if (input.objective?.trim()) patch.objective = input.objective.trim();
    if (input.expectedOutcome?.trim()) patch.expectedOutcome = input.expectedOutcome.trim();
    const updated = await tx
      .update(cognitiveWorks)
      .set(patch)
      .where(
        and(
          eq(cognitiveWorks.id, input.workId),
          eq(cognitiveWorks.ownerPilotId, input.pilotId),
          eq(cognitiveWorks.ownerToken, input.ownerToken),
          eq(cognitiveWorks.revision, input.expectedRevision),
        ),
      )
      .returning();
    if (!updated[0]) {
      throw new StudioError(
        "CONFLICT",
        "Checkpoint cognitif refusé — ownership ou révision concurrente",
      );
    }
    await tx.insert(cognitiveWorkCheckpoints).values({
      id: newId("cgcp"),
      workId: input.workId,
      revision: nextRevision,
      parentRevision: input.expectedRevision,
      cause: input.cause,
      turnCommandId: input.turnCommandId ?? null,
      generationId: input.generationId ?? null,
      payloadJson: JSON.stringify(evaluated),
      resourcesJson: JSON.stringify(resources),
    });
    return updated[0];
  });

  return mapRow(result);
}

/** Heartbeat lease while RUNNING — no revision bump. */
export async function heartbeatCognitiveWork(input: {
  workId: string;
  ownerToken: string;
}): Promise<boolean> {
  const leaseUntil = new Date(cognitiveClock.nowMs() + COGNITIVE_LEASE_MS);
  const updated = await db
    .update(cognitiveWorks)
    .set({ leaseUntil, updatedAt: new Date() })
    .where(
      and(
        eq(cognitiveWorks.id, input.workId),
        eq(cognitiveWorks.ownerToken, input.ownerToken),
        eq(cognitiveWorks.status, "RUNNING"),
      ),
    )
    .returning({ id: cognitiveWorks.id });
  return Boolean(updated[0]);
}

/** Release ownership after segment; keep state durable. */
export async function releaseCognitiveWorkLease(input: {
  workId: string;
  ownerToken: string;
  status: CognitiveWorkStatus;
  interruptCause?: string | null;
}): Promise<void> {
  await db
    .update(cognitiveWorks)
    .set({
      status: input.status,
      ownerToken: null,
      leaseUntil: null,
      interruptCause: input.interruptCause ?? null,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(cognitiveWorks.id, input.workId),
        eq(cognitiveWorks.ownerToken, input.ownerToken),
      ),
    );
}

export async function loadLatestCheckpoint(input: {
  pilotId: string;
  workId: string;
}): Promise<{
  revision: number;
  cause: string;
  state: InvestigationState;
  resources: CognitiveResources;
  createdAt: Date;
} | null> {
  await getCognitiveWork(input);
  const row = (
    await db
      .select()
      .from(cognitiveWorkCheckpoints)
      .where(eq(cognitiveWorkCheckpoints.workId, input.workId))
      .orderBy(desc(cognitiveWorkCheckpoints.revision))
      .limit(1)
  )[0];
  if (!row) return null;
  return {
    revision: row.revision,
    cause: row.cause,
    state: evaluateContractReadiness(
      parseJson(row.payloadJson, createEmptyInvestigation("")),
    ),
    resources: parseJson(row.resourcesJson, emptyResources()),
    createdAt: row.createdAt,
  };
}

/** Accumulate global resource counters — never reset between segments. */
export function accumulateResources(
  current: CognitiveResources,
  delta: Partial<CognitiveResources>,
): CognitiveResources {
  return {
    segmentCalls: (current.segmentCalls ?? 0) + (delta.segmentCalls ?? 0),
    inputTokens: sumOpt(current.inputTokens, delta.inputTokens),
    outputTokens: sumOpt(current.outputTokens, delta.outputTokens),
    cacheTokens: sumOpt(current.cacheTokens, delta.cacheTokens),
    reasoningTokens: sumOpt(current.reasoningTokens, delta.reasoningTokens),
    estimatedCostUsd: sumOpt(current.estimatedCostUsd, delta.estimatedCostUsd),
    modelRequested: delta.modelRequested ?? current.modelRequested ?? null,
    modelApplied: delta.modelApplied ?? current.modelApplied ?? null,
    effortRequested: delta.effortRequested ?? current.effortRequested ?? null,
    effortApplied: delta.effortApplied ?? current.effortApplied ?? null,
    webCalls: (current.webCalls ?? 0) + (delta.webCalls ?? 0),
    durationMs: (current.durationMs ?? 0) + (delta.durationMs ?? 0),
    limits: [...(current.limits ?? []), ...(delta.limits ?? [])].slice(-40),
  };
}

function sumOpt(a?: number | null, b?: number | null): number | null {
  if (a == null && b == null) return null;
  return (a ?? 0) + (b ?? 0);
}

/**
 * Global envelope — administrative safety, not a cognitive depth oracle.
 * Exceeding suspends the work honestly.
 */
export function evaluateGlobalResourceEnvelope(
  resources: CognitiveResources,
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
): { ok: boolean; reason?: string } {
  // C17: default raised — local invocation caps (≈5) must leave headroom for honest resume
  // without immediately tripping a false global exhaustion on simple prepare+continue paths.
  const maxSegments = Number(env.SFIA_COGNITIVE_MAX_SEGMENTS || "24");
  const maxTokens = Number(env.SFIA_COGNITIVE_MAX_TOKENS || "200000");
  if (Number.isFinite(maxSegments) && resources.segmentCalls >= maxSegments) {
    return { ok: false, reason: "GLOBAL_SEGMENT_BUDGET_EXHAUSTED" };
  }
  const used =
    (resources.inputTokens ?? 0) +
    (resources.outputTokens ?? 0) +
    (resources.reasoningTokens ?? 0);
  if (Number.isFinite(maxTokens) && used >= maxTokens) {
    return { ok: false, reason: "GLOBAL_TOKEN_BUDGET_EXHAUSTED" };
  }
  return { ok: true };
}

```

### `projects/sfia-studio-next/web/src/domains/conversation/nora-contract-bridge.ts`

Blob: `df4d675a7402895099a22788332dc6f7738d511d` · 504 lines

```
/**
 * CA-01 / C14 bridge — after a Nora turn, persist investigation facts and optionally
 * prepare a DRAFT technical contract. Reuses nora-contract-prepare + investigation
 * persistence — no second preparation engine.
 *
 * C14: contract-prepare intent is semantic (qualification intents), never lexical.
 */

import { prepareTechnicalContractFromNora } from "@/domains/execution/nora-contract-prepare";
import type { TechnicalContractBody } from "@/domains/execution/types";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
  type InvestigationSourceRef,
  type InvestigationState,
} from "./investigation-state";
import {
  loadInvestigationSnapshot,
  saveInvestigationSnapshot,
} from "./investigation-persistence";
import { appendActivityEvent } from "./activity-projection";
import type { NoraTurnQualification } from "./semantic-qualification";

/** C16 — current observation wins for same ref; history kept as notes, not authority. */
function mergeSourcesPreferCurrent(
  prior: InvestigationSourceRef[],
  observed: InvestigationSourceRef[],
): InvestigationSourceRef[] {
  const byKey = new Map<string, InvestigationSourceRef>();
  for (const s of prior) {
    byKey.set(`${s.kind}:${s.ref}`, { ...s });
  }
  for (const s of observed) {
    const key = `${s.kind}:${s.ref}`;
    const prev = byKey.get(key);
    if (!prev) {
      byKey.set(key, { ...s });
      continue;
    }
    const noteBits = [prev.notes, prev.coverage !== s.coverage ? `${prev.coverage}->${s.coverage}` : null, s.notes]
      .filter(Boolean)
      .join("; ");
    byKey.set(key, {
      ...prev,
      ...s,
      notes: noteBits || s.notes,
      versionOrSha: s.versionOrSha ?? prev.versionOrSha,
    });
  }
  return [...byKey.values()];
}


/** C14 — semantic prepare signal from structured qualification (not user-text regex). */
export function semanticWantsCursorContractPrepare(
  qualification: NoraTurnQualification | null | undefined,
): boolean {
  if (!qualification || qualification.status === "UNAVAILABLE") return false;
  return qualification.intents.some(
    (i) =>
      i.capabilityId === "d7.prepare_cursor_contract" &&
      (i.mode === "PREPARE" || i.mode === "REQUEST_EFFECT"),
  );
}

/** C14 — corrective draft within existing mandate (A04); never implies dispatch. */
export function semanticWantsCorrectiveDraft(
  qualification: NoraTurnQualification | null | undefined,
): boolean {
  if (!qualification || qualification.status === "UNAVAILABLE") return false;
  return qualification.intents.some(
    (i) =>
      i.capabilityId === "d7.prepare_cursor_contract" &&
      (i.parameters?.correctiveDraft === "true" ||
        // legacy boolean if ever present in persisted JSON
        (i.parameters as { correctiveDraft?: unknown })?.correctiveDraft === true),
  );
}

/**
 * @deprecated C14 — lexical detectors removed. Kept as always-false stubs so any
 * residual import fails closed (no contract from keywords). Prefer semanticWants*.
 */
export function detectsTechnicalContractIntent(text: string): boolean {
  void text;
  return false;
}

/** @deprecated C14 — see detectsTechnicalContractIntent. */
export function detectsCorrectiveDraftIntent(text: string): boolean {
  void text;
  return false;
}

export function draftBodyFromInvestigation(
  inv: InvestigationState,
  opts?: {
    title?: string;
    instructionExtra?: string;
    /** Full assistant prose when available — not silently truncated to a toy budget. */
    instructionFromNora?: string;
    businessCriteria?: string[];
  },
): TechnicalContractBody {
  const title =
    opts?.title?.trim() ||
    inv.desiredOutcome.trim() ||
    inv.intentSummary.trim().slice(0, 120) ||
    "Contrat technique préparé par Nora";
  const consulted = inv.sources.filter(
    (s) => s.coverage === "CONSULTED" || s.coverage === "VERIFIED",
  );
  const sources = consulted.map((s) => `${s.kind}:${s.ref}`).join(", ");
  const openQs = inv.questions
    .filter((q) => q.status === "OPEN" || q.status === "BLOCKED")
    .map((q) => `[${q.importance}] ${q.text}`)
    .join("\n- ");
  const contradictions = inv.contradictions
    .map((c) => `${c.a} ↔ ${c.b}: ${c.detail}`)
    .join("\n- ");
  // C15: no silent 24k truncation of Nora technical elaboration.
  // Transport/security limits remain elsewhere; business instruction stays integral.
  const noraInstruction =
    opts?.instructionFromNora?.trim() || opts?.instructionExtra?.trim() || "";

  const instruction = [
    `# Instruction technique (issue de l'investigation Nora)`,
    ``,
    `## Mission`,
    inv.intentSummary || "(intention non résumée)",
    inv.desiredOutcome ? `\n## Résultat attendu\n${inv.desiredOutcome}` : null,
    inv.constraints.length
      ? `\n## Contraintes / restrictions\n- ${inv.constraints.join("\n- ")}`
      : null,
    inv.exclusions.length
      ? `\n## Exclusions (OUT)\n- ${inv.exclusions.join("\n- ")}`
      : null,
    inv.risks.length ? `\n## Risques\n- ${inv.risks.join("\n- ")}` : null,
    sources
      ? `\n## Sources consultées (CONSULTED/VERIFIED)\n${sources}`
      : `\n## Sources\nAucune source CONSULTED/VERIFIED au moment de la préparation.`,
    openQs ? `\n## Questions encore ouvertes\n- ${openQs}` : null,
    contradictions ? `\n## Contradictions non résolues\n- ${contradictions}` : null,
    noraInstruction
      ? `\n## Élaboration Nora (contexte technique)\n${noraInstruction}`
      : null,
    `\n## Exécuteur`,
    `Cursor SDK local — aucune publication Git sans mandat D6/D9 distinct.`,
    `Préparer ≠ autoriser. Aucun dispatch sans HumanDecision D6.`,
  ]
    .filter(Boolean)
    .join("\n");

  // C15: keep all business criteria — no artificial cap of 8.
  const businessCriteria =
    opts?.businessCriteria?.filter((c) => c.trim()) ??
    inv.remainingWork.filter((w) => w.trim());

  return {
    title,
    engagements: {
      willDo: inv.desiredOutcome || inv.intentSummary,
      willNotDo: inv.exclusions.join("; ") || "Hors périmètre non listé",
      expectedResult: inv.desiredOutcome || "Livrables conformes au contrat",
      pilotControl: "HumanDecision D6 avant dispatch ; STOP observé ≠ rollback",
    },
    volets: {
      mission: inv.intentSummary,
      perimeter: inv.constraints.join("; ") || "Périmètre à confirmer",
      capabilitiesAuthority: "CURSOR_SDK_LOCAL — permissions effectives uniquement",
      stopConditions:
        "STOP demandé / observé ; interruption → AMBIGUOUS si effet possible",
      proofsSources: sources || "Preuves à établir dans le handoff",
      integrity: "Fingerprint contrat + instruction exacte ; pas de troncature",
    },
    instructionText: instruction,
    risks: inv.risks.length ? inv.risks : ["Effets externes possibles via Cursor"],
    exclusions: inv.exclusions,
    acceptance: {
      criteria: businessCriteria.length
        ? businessCriteria
        : [
            "Comportements métier du résultat attendu vérifiés",
            "Handoff RECEIVED avec inventaire observé (complément, pas substitut métier)",
          ],
      expectedProofs: [
        "rapport markdown",
        "manifeste inventaire (fichiers observés)",
        "sorties de tests capturées lorsque des tests sont annoncés",
      ],
    },
    executor: {
      kind: "CURSOR_SDK_LOCAL",
      capabilities: ["file_edit", "shell_test"],
      permissionsNeeded: [],
    },
    stopConditions: ["STOP", "claim fence invalid"],
    reversibilityLimits: ["Pas de rollback automatique des effets Cursor"],
    gitScope: null,
  };
}

export type NoraContractBridgeInput = {
  pilotId: string;
  projectId: string;
  preparationId: string;
  conversationId: string;
  turnCommandId: string;
  ownerToken?: string | null;
  userText: string;
  assistantText?: string;
  /** C14 — structured qualification drives prepare/corrective (required for intent). */
  qualification?: NoraTurnQualification | null;
  observedSources?: InvestigationSourceRef[];
  attemptPrepare?: boolean;
  contractKey?: string;
  sourceTurnCommandId?: string | null;
  /** C17 — exact cognitive work filiation (server-resolved). */
  workId?: string | null;
  workRevision?: number | null;
  investigationOverride?: InvestigationState | null;
  productionInstruction?: string | null;
  acceptanceCriteria?: string[] | null;
};

export type NoraContractBridgeResult = {
  intentDetected: boolean;
  correctiveIntent: boolean;
  investigation: InvestigationState | null;
  prepared: {
    contractId: string;
    contractKey: string;
    version: number;
    fingerprint: string;
    status: string;
  } | null;
  blockedReason: string | null;
  cursorRedispatch: false;
};

/**
 * Persist investigation progress and optionally prepare a DRAFT contract.
 * READY is never granted here. A04 corrective drafts never dispatch Cursor.
 */
export async function bridgeNoraTurnToContractPreparation(
  input: NoraContractBridgeInput,
): Promise<NoraContractBridgeResult> {
  const intentDetected = semanticWantsCursorContractPrepare(input.qualification);
  const correctiveIntent = semanticWantsCorrectiveDraft(input.qualification);
  if (!intentDetected && !correctiveIntent && !(input.observedSources?.length)) {
    return {
      intentDetected: false,
      correctiveIntent: false,
      investigation: null,
      prepared: null,
      blockedReason: null,
      cursorRedispatch: false,
    };
  }

  const prior =
    input.investigationOverride ??
    (await loadInvestigationSnapshot({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      intentFallback: input.userText,
      workId: input.workId,
    })) ??
    createEmptyInvestigation(input.userText);

  const q = input.qualification;
  const merged: InvestigationState = {
    ...prior,
    intentSummary:
      (q?.goal?.trim() || prior.intentSummary || input.userText).slice(0, 800),
    desiredOutcome:
      (q?.desiredOutcome?.trim() || prior.desiredOutcome || "").slice(0, 800),
    sources: mergeSourcesPreferCurrent(prior.sources, input.observedSources ?? []),
    constraints: correctiveIntent
      ? [
          ...prior.constraints.filter((c) => !c.startsWith("A04:")),
          "A04: brouillon correctif dans mandat existant — aucun nouveau dispatch Cursor",
        ]
      : prior.constraints,
    exclusions: prior.exclusions,
    profileHint:
      prior.profileHint === "simple" && (intentDetected || correctiveIntent)
        ? "investigation"
        : prior.profileHint === "simple"
          ? "analyse"
          : prior.profileHint,
  };
  const evaluated = evaluateContractReadiness({
    ...merged,
    cognitiveWorkId: input.workId ?? merged.cognitiveWorkId ?? null,
    cognitiveRevision: input.workRevision ?? merged.cognitiveRevision ?? null,
    productionInstruction:
      input.productionInstruction?.trim() ||
      merged.productionInstruction ||
      null,
    acceptanceCriteria:
      input.acceptanceCriteria?.filter((c) => c.trim()) ??
      merged.acceptanceCriteria ??
      [],
  });
  await saveInvestigationSnapshot({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    state: evaluated,
    workId: input.workId,
    projectId: input.projectId,
    conversationId: input.conversationId,
  });

  try {
    await appendActivityEvent({
      conversationId: input.conversationId,
      turnCommandId: input.turnCommandId,
      ownerPilotId: input.pilotId,
      phase: "nora.investigation",
      nature: "OBSERVED",
      status: evaluated.contractReady ? "COMPLETED" : "LIMITED",
      summary: evaluated.contractReady
        ? "Investigation suffisante pour préparer un contrat DRAFT"
        : evaluated.contractReadyBlockedReason ?? "Investigation en cours",
      detail: {
        sufficiency: evaluated.sufficiency,
        sourceCount: evaluated.sources.length,
        contractReady: evaluated.contractReady,
        semanticPrepare: intentDetected,
        semanticCorrective: correctiveIntent,
      },
      ownerToken: input.ownerToken,
    });
  } catch {
    /* observational */
  }

  // C16: DRAFT may be prepared incomplete (inspectable). READY stays blocked elsewhere.
  // remainingWork is NOT acceptance criteria — never slice(0,8) into businessCriteria.
  if (!input.attemptPrepare || !intentDetected) {
    return {
      intentDetected,
      correctiveIntent,
      investigation: evaluated,
      prepared: null,
      blockedReason: null,
      cursorRedispatch: false,
    };
  }
  const hasConsultedSource = evaluated.sources.some(
    (s) => s.coverage === "CONSULTED" || s.coverage === "VERIFIED",
  );

  // C17: acceptanceCriteria ≠ remainingWork.
  const acceptanceCriteria =
    (evaluated.acceptanceCriteria?.filter((c) => c.trim()).length
      ? evaluated.acceptanceCriteria.filter((c) => c.trim())
      : null) ??
    (input.acceptanceCriteria?.filter((c) => c.trim()).length
      ? input.acceptanceCriteria.filter((c) => c.trim())
      : null) ?? [
      "Comportements métier du résultat attendu vérifiés",
      "Sources CONSULTED/VERIFIED alignées sur le fingerprint",
      "Aucune restriction déterminante ouverte",
    ];
  const productionInstruction =
    evaluated.productionInstruction?.trim() ||
    input.productionInstruction?.trim() ||
    "";
  // C17: persist production basis on investigation (≠ remainingWork; ≠ DRAFT_INCOMPLETE marker).
  // Do not force SUFFICIENT here — READY re-evaluates after the work actually completes.
  // Strip false BUDGET_EXHAUSTED left by a technical SEGMENT_INVOCATION_LIMIT only.
  evaluated.acceptanceCriteria = acceptanceCriteria;
  evaluated.productionInstruction =
    productionInstruction || evaluated.productionInstruction || null;
  if (!evaluated.desiredOutcome?.trim()) {
    evaluated.desiredOutcome =
      evaluated.intentSummary?.trim() ||
      "Contrat technique Cursor DRAFT inspectable sans dispatch";
  }
  const blocked = evaluated.contractReadyBlockedReason ?? "";
  if (
    evaluated.sufficiency === "BUDGET_EXHAUSTED" &&
    (blocked === "SEGMENT_INVOCATION_LIMIT" || blocked.includes("SEGMENT_INVOCATION"))
  ) {
    evaluated.sufficiency = "UNKNOWN";
    evaluated.contractReady = false;
    evaluated.contractReadyBlockedReason = "SEGMENT_INVOCATION_LIMIT";
  }
  await saveInvestigationSnapshot({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    state: evaluated,
    workId: input.workId,
    projectId: input.projectId,
    conversationId: input.conversationId,
  });
  const body = draftBodyFromInvestigation(evaluated, {
    instructionFromNora: productionInstruction || undefined,
    instructionExtra: productionInstruction
      ? undefined
      : input.assistantText
        ? `[Contexte conversationnel — non instruction technique canonique]\n${input.assistantText}`
        : undefined,
    businessCriteria: acceptanceCriteria,
  });
  // Incomplete markers stay on contract exclusions — never as permanent acceptance criteria
  // that would block later legitimate requalification after the investigation completes.
  if (!evaluated.contractReady || !hasConsultedSource) {
    body.exclusions = [
      ...body.exclusions,
      "DRAFT_INCOMPLETE — qualification positive non établie; READY interdit",
      ...(!hasConsultedSource && !productionInstruction
        ? ["DRAFT_INCOMPLETE — aucune source CONSULTED/VERIFIED au moment du brouillon"]
        : []),
    ];
  }
  const key =
    input.contractKey ??
    `nora-${input.preparationId.slice(-8)}-${Date.now().toString(36)}`;

  try {
    await appendActivityEvent({
      conversationId: input.conversationId,
      turnCommandId: input.turnCommandId,
      ownerPilotId: input.pilotId,
      phase: "nora.contract.prepare",
      nature: "ANNOUNCED",
      status: "RUNNING",
      summary: "Nora prépare un contrat technique DRAFT",
      ownerToken: input.ownerToken,
    });
  } catch {
    /* observational */
  }

  try {
    const created = await prepareTechnicalContractFromNora({
      pilotId: input.pilotId,
      projectId: input.projectId,
      preparationId: input.preparationId,
      contractKey: key,
      body,
      sourceTurnCommandId: input.sourceTurnCommandId ?? input.turnCommandId,
      investigationOverride: evaluated,
      cognitiveWorkId: input.workId ?? evaluated.cognitiveWorkId ?? null,
      cognitiveRevision: input.workRevision ?? evaluated.cognitiveRevision ?? null,
    });
    try {
      await appendActivityEvent({
        conversationId: input.conversationId,
        turnCommandId: input.turnCommandId,
        ownerPilotId: input.pilotId,
        phase: "nora.contract.prepare",
        nature: "COMPLETED",
        status: "COMPLETED",
        summary: `Contrat DRAFT ${created.contractKey} v${created.version} préparé`,
        sourceRef: created.contractId,
        ownerToken: input.ownerToken,
      });
    } catch {
      /* observational */
    }
    return {
      intentDetected,
      correctiveIntent,
      investigation: evaluated,
      prepared: {
        contractId: created.contractId,
        contractKey: created.contractKey,
        version: created.version,
        fingerprint: created.fingerprint,
        status: created.status,
      },
      blockedReason: null,
      cursorRedispatch: false,
    };
  } catch (e) {
    const msg = e instanceof Error ? e.message : "Préparation contrat refusée";
    try {
      await appendActivityEvent({
        conversationId: input.conversationId,
        turnCommandId: input.turnCommandId,
        ownerPilotId: input.pilotId,
        phase: "nora.contract.prepare",
        nature: "UNCERTAIN",
        status: "FAILED",
        summary: msg.slice(0, 200),
        ownerToken: input.ownerToken,
      });
    } catch {
      /* observational */
    }
    return {
      intentDetected,
      correctiveIntent,
      investigation: evaluated,
      prepared: null,
      blockedReason: msg,
      cursorRedispatch: false,
    };
  }
}

```

### `projects/sfia-studio-next/web/src/domains/execution/technical-contract-server-ready.ts`

Blob: `86376ac0f2c25d9cba711deeee3aa87719781d8f` · 234 lines

```
/**
 * CF-02 — READY qualification is server-owned.
 * Client `sourcesSufficient` / `unknownRestrictions` are never authoritative.
 */

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { technicalContracts } from "@/db/schema";
import { StudioError } from "@/lib/http-errors";
import {
  evaluateGlobalResourceEnvelope,
  getCognitiveWork,
} from "@/domains/conversation/cognitive-work";
import { loadInvestigationSnapshot } from "@/domains/conversation/investigation-persistence";
import { evaluateContractReadiness as evaluateInvestigation } from "@/domains/conversation/investigation-state";
import {
  evaluateContractReadiness,
  getTechnicalContract,
  technicalContractFingerprint,
} from "./technical-contract";

export async function qualifyTechnicalContractReadyServerSide(input: {
  pilotId: string;
  projectId: string;
  contractId: string;
  preparationId?: string | null;
  /** C16 — exact cognitive work filiation when known. */
  workId?: string | null;
}) {
  const row = await getTechnicalContract(input);
  // C16: existing READY never skips positive requalification of current conditions.
  const wasReady = row.status === "READY";

  // C17: filiation exacte — contrat lié à un travail cognitif précis.
  const boundWorkId = row.cognitiveWorkId ?? null;
  const effectiveWorkId = boundWorkId ?? input.workId ?? null;
  if (boundWorkId && input.workId && boundWorkId !== input.workId) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "workId client ≠ filiation du contrat — READY refusé",
      { exposeMessage: true },
    );
  }
  if (!effectiveWorkId) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Filiation cognitive_work absente — READY serveur impossible",
      { exposeMessage: true },
    );
  }

  let unknownRestrictions: string[] = [];
  let sourcesSufficient = false;

  if (input.preparationId) {
    // C17: READY only when the bound cognitive work is durably COMPLETE (not suspended mid-segment).
    const boundWork = await getCognitiveWork({
      pilotId: input.pilotId,
      workId: effectiveWorkId,
    });
    if (boundWork.status === "SUSPENDED" || boundWork.status === "RUNNING") {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        `Travail cognitif ${boundWork.status}${boundWork.interruptCause ? ` (${boundWork.interruptCause})` : ""} — READY refusé`,
        { exposeMessage: true },
      );
    }
    if (boundWork.status !== "COMPLETE" && boundWork.status !== "OPEN") {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        `Travail cognitif non terminé (${boundWork.status}) — READY refusé`,
        { exposeMessage: true },
      );
    }
    const envelope = evaluateGlobalResourceEnvelope(boundWork.resources);
    if (!envelope.ok) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        envelope.reason ?? "Budget cognitif global épuisé",
        { exposeMessage: true },
      );
    }
    const snap = await loadInvestigationSnapshot({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      intentFallback: row.body.title,
      workId: effectiveWorkId,
    });
    if (!snap) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        "Investigation absente ou ambiguë (multi-travaux) — READY serveur impossible",
        { exposeMessage: true },
      );
    }
    const inv = evaluateInvestigation(snap);
    if (inv.cognitiveWorkId && inv.cognitiveWorkId !== effectiveWorkId) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        "Investigation d'un autre travail cognitif — READY refusé",
        { exposeMessage: true },
      );
    }
    if (
      row.cognitiveRevision != null &&
      inv.cognitiveRevision != null &&
      inv.cognitiveRevision < row.cognitiveRevision
    ) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        "Révision cognitive antérieure au contrat — READY refusé",
        { exposeMessage: true },
      );
    }
    // C15 positive sufficiency — empty/UNKNOWN/BUDGET never READY.
    if (
      inv.sufficiency === "UNKNOWN" ||
      inv.sufficiency === "BUDGET_EXHAUSTED" ||
      inv.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION"
    ) {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        inv.contractReadyBlockedReason ?? `Suffisance ${inv.sufficiency} — READY refusé`,
        { exposeMessage: true },
      );
    }
    if (!inv.contractReady || inv.sufficiency !== "SUFFICIENT") {
      throw new StudioError(
        "REQUIRES_REQUALIFICATION",
        inv.contractReadyBlockedReason ?? "Investigation non prête",
        { exposeMessage: true },
      );
    }
    sourcesSufficient = inv.sufficiency === "SUFFICIENT";
    unknownRestrictions = inv.questions
      .filter((q) => q.importance === "DETERMINANT" && q.status !== "ANSWERED")
      .map((q) => q.id);
  } else {
    // Without preparation linkage, refuse READY — no client substitute.
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "preparationId requis pour qualification READY serveur",
      { exposeMessage: true },
    );
  }

  const readiness = evaluateContractReadiness({
    body: row.body,
    unknownRestrictions,
    sourcesSufficient,
  });
  if (!readiness.ready) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      `Promotion READY refusée: ${readiness.blockedReasons.join("; ")}`,
      { exposeMessage: true },
    );
  }

  const recomputed = technicalContractFingerprint(row.body);
  if (recomputed !== row.fingerprint) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Empreinte ≠ représentation persistée — nouvelle version requise",
      { exposeMessage: true },
    );
  }

  const readinessWithFiliation = {
    ...readiness,
    cognitiveFiliation: {
      preparationId: input.preparationId ?? null,
      workId: effectiveWorkId,
      revision: row.cognitiveRevision ?? null,
      contractId: input.contractId,
      fingerprint: row.fingerprint,
      requalifiedAt: new Date().toISOString(),
    },
  };

  if (wasReady) {
    // Conditions still hold — refresh readiness proof; keep READY.
    await db
      .update(technicalContracts)
      .set({
        readinessJson: JSON.stringify(readinessWithFiliation),
        updatedAt: new Date(),
      })
      .where(
        and(
          eq(technicalContracts.id, input.contractId),
          eq(technicalContracts.projectId, input.projectId),
          eq(technicalContracts.pilotId, input.pilotId),
          eq(technicalContracts.status, "READY"),
        ),
      );
    return {
      contractId: input.contractId,
      status: "READY" as const,
      idempotent: true as const,
      fingerprint: row.fingerprint,
      readiness: readinessWithFiliation,
    };
  }

  const updated = await db
    .update(technicalContracts)
    .set({
      status: "READY",
      readinessJson: JSON.stringify(readinessWithFiliation),
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(technicalContracts.id, input.contractId),
        eq(technicalContracts.projectId, input.projectId),
        eq(technicalContracts.pilotId, input.pilotId),
        eq(technicalContracts.status, "DRAFT"),
      ),
    )
    .returning({ id: technicalContracts.id });

  if (!updated[0]) {
    throw new StudioError("CONFLICT", "Promotion READY concurrente ou statut non DRAFT");
  }

  return {
    contractId: input.contractId,
    status: "READY" as const,
    idempotent: false as const,
    fingerprint: row.fingerprint,
    readiness: readinessWithFiliation,
  };
}

```

### `projects/sfia-studio-next/web/src/domains/execution/nora-contract-prepare.ts`

Blob: `4d69b3f1f18703f83cd3b21a09aab0ec4f10b8c2` · 107 lines

```
/**
 * CA-01 — Nora prepares a technical contract from a durable investigation.
 * Reuses D3 investigation + D7 technical_contracts — no second preparation engine.
 */

import { StudioError } from "@/lib/http-errors";
import {
  loadInvestigationSnapshot,
  saveInvestigationSnapshot,
} from "@/domains/conversation/investigation-persistence";
import {
  evaluateContractReadiness as evaluateInvestigationReadiness,
  type InvestigationState,
} from "@/domains/conversation/investigation-state";
import {
  createTechnicalContract,
  evaluateContractReadiness,
} from "./technical-contract";
import type { TechnicalContractBody } from "./types";

export type NoraContractPrepareInput = {
  pilotId: string;
  projectId: string;
  preparationId: string;
  contractKey: string;
  body: TechnicalContractBody;
  sourceTurnCommandId?: string | null;
  /** Server-owned: never trust client "sourcesSufficient". */
  investigationOverride?: InvestigationState | null;
  cognitiveWorkId?: string | null;
  cognitiveRevision?: number | null;
};

/**
 * Persist a DRAFT technical contract when investigation is sufficient.
 * READY is never granted here — markReady requires separate server qualification.
 */
export async function prepareTechnicalContractFromNora(
  input: NoraContractPrepareInput,
) {
  const investigation =
    input.investigationOverride ??
    (await loadInvestigationSnapshot({
      pilotId: input.pilotId,
      preparationId: input.preparationId,
      intentFallback: input.body.title || input.body.volets.mission,
    }));

  if (!investigation) {
    throw new StudioError(
      "REQUIRES_REQUALIFICATION",
      "Aucune investigation durable — Nora doit qualifier les sources avant contrat",
      { exposeMessage: true },
    );
  }

  const evaluated = evaluateInvestigationReadiness(investigation);
  await saveInvestigationSnapshot({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    state: evaluated,
  });

  // C16: incomplete DRAFT is allowed and inspectable; READY remains blocked.
  // contractReady=false → sourcesSufficient=false so status stays DRAFT.
  const unknownFromInvestigation = [
    ...evaluated.questions
      .filter((q) => q.importance === "DETERMINANT" && q.status === "BLOCKED")
      .map((q) => q.id),
    ...(evaluated.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION"
      ? ["UNKNOWN_RESTRICTION"]
      : []),
    ...(!evaluated.contractReady
      ? [evaluated.contractReadyBlockedReason ?? "INVESTIGATION_INCOMPLETE"]
      : []),
  ];

  const docReadiness = evaluateContractReadiness({
    body: input.body,
    unknownRestrictions: unknownFromInvestigation,
    // Sources judged from investigation, never from client boolean.
    sourcesSufficient: evaluated.contractReady && evaluated.sufficiency === "SUFFICIENT",
  });

  const created = await createTechnicalContract({
    pilotId: input.pilotId,
    projectId: input.projectId,
    preparationId: input.preparationId,
    contractKey: input.contractKey,
    body: input.body,
    sourceTurnCommandId: input.sourceTurnCommandId,
    markReady: false, // always DRAFT from Nora prepare — READY is a separate server act
    unknownRestrictions: unknownFromInvestigation,
    sourcesSufficient: docReadiness.sourcesSufficient,
    cognitiveWorkId:
      input.cognitiveWorkId ?? evaluated.cognitiveWorkId ?? null,
    cognitiveRevision:
      input.cognitiveRevision ?? evaluated.cognitiveRevision ?? null,
  });

  return {
    ...created,
    investigationSufficiency: evaluated.sufficiency,
    contractReady: evaluated.contractReady,
    readiness: docReadiness,
  };
}

```

### `projects/sfia-studio-next/web/src/db/migrations/021_cognitive_contract_filiation.sql`

Blob: `91873fe22acacbce1d0706eeb3100981e5f9eaa3` · 12 lines

```
-- ML5 C17 — additive filiation cognitive work ↔ technical contract (DEV).
-- No destructive rewrite. RECETTE/STABLE untouched.

ALTER TABLE technical_contracts
  ADD COLUMN IF NOT EXISTS cognitive_work_id text REFERENCES cognitive_works(id);

ALTER TABLE technical_contracts
  ADD COLUMN IF NOT EXISTS cognitive_revision integer;

CREATE INDEX IF NOT EXISTS technical_contracts_cognitive_work_idx
  ON technical_contracts (cognitive_work_id)
  WHERE cognitive_work_id IS NOT NULL;

```

### `projects/sfia-studio-next/web/scripts/c17-functional-campaign.mjs`

Blob: `fcafaa7b6249f151ed9bd824d2f47fc5dccb6636` · 274 lines

```
/**
 * C17 — functional campaign driver (product API, not internal injection).
 * Observes P1–P4 via HTTP against DEV 127.0.0.1:3100.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { randomUUID } from "node:crypto";

const BASE = process.env.SFIA_C17_BASE || "http://127.0.0.1:3100";
const outDir = "/tmp/sfia-c17-campaign";
mkdirSync(outDir, { recursive: true });

const jar = new Map();
function storeCookies(res) {
  const raw = res.headers.getSetCookie?.() || [];
  for (const c of raw) {
    const [pair] = c.split(";");
    const i = pair.indexOf("=");
    if (i > 0) jar.set(pair.slice(0, i), pair.slice(i + 1));
  }
}
function cookieHeader() {
  return [...jar.entries()].map(([k, v]) => `${k}=${v}`).join("; ");
}
async function api(path, opts = {}) {
  const res = await fetch(`${BASE}${path}`, {
    ...opts,
    headers: {
      ...(opts.body ? { "content-type": "application/json" } : {}),
      cookie: cookieHeader(),
      ...(opts.headers || {}),
    },
  });
  storeCookies(res);
  const text = await res.text();
  let json = null;
  try {
    json = text ? JSON.parse(text) : null;
  } catch {
    json = { raw: text.slice(0, 2000) };
  }
  return { status: res.status, json, text };
}

const report = {
  startedAt: new Date().toISOString(),
  base: BASE,
  steps: [],
  verdicts: {},
};

function step(name, data) {
  report.steps.push({ name, at: new Date().toISOString(), ...data });
  console.log(`STEP ${name}`, data.status ?? "", data.note ?? "");
}

async function main() {
  // Auth
  let auth = await api("/api/dev/auto-session", { method: "POST" });
  if (auth.status >= 400) {
    auth = await api("/api/dev/login", { method: "POST", body: "{}" });
  }
  step("auth", { status: auth.status, note: auth.json?.authMode || auth.json?.error || "ok" });
  if (auth.status >= 400) {
    report.verdicts.env = "FAIL_AUTH";
    writeFileSync(`${outDir}/report.json`, JSON.stringify(report, null, 2));
    process.exit(2);
  }

  // Open preparation
  const prep = await api("/api/preparations", { method: "POST", body: "{}" });
  step("create_preparation", { status: prep.status, id: prep.json?.preparationId || prep.json?.id });
  const preparationId = prep.json?.preparationId || prep.json?.id;
  if (!preparationId) {
    report.verdicts.p1 = "FAIL_NO_PREP";
    writeFileSync(`${outDir}/report.json`, JSON.stringify(report, null, 2));
    process.exit(2);
  }

  // Seed long document for complex investigation (D4)
  const longDoc = [
    "# Politique TVA export fictive C17",
    "",
    "## Section 1 — Introduction",
    "Document de test public/fictif pour campagne C17.",
    ...Array.from({ length: 40 }, (_, i) => `Paragraphe filler ${i + 1}.`),
    "",
    "## Section 2 — Régime applicable",
    "Le régime export 0% s'applique uniquement si le client est hors UE et la preuve d'export est archivée.",
    "",
    "## Section 3 — Contradiction",
    "Note interne fictive: certains flux UK post-Brexit restent à 20% — à confronter avec Section 2.",
    "",
    "## Section 4 — Référence croisée",
    "Voir aussi le document Annexe Preuves (si présent) pour les conditions de reprise.",
  ].join("\n");

  const doc = await api(`/api/preparations/${preparationId}/documents`, {
    method: "POST",
    body: JSON.stringify({
      title: "Politique TVA export C17",
      contentMarkdown: longDoc,
    }),
  });
  step("seed_document", {
    status: doc.status,
    documentId: doc.json?.documentId || doc.json?.id,
    note: doc.json?.error || doc.json?.reason,
  });

  // P1-A simple
  const simpleKey = `c17-simple-${randomUUID()}`;
  const simple = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: JSON.stringify({
      content: "Bonjour Nora, peux-tu me rappeler en une phrase ce qu'est un sas de préparation dans Studio Next ?",
      clientTurnKey: simpleKey,
      forceNewCognitiveWork: true,
    }),
  });
  step("p1a_simple", {
    status: simple.status,
    noraMode: simple.json?.noraMode,
    replyStatus: simple.json?.status,
    segments: simple.json?.cognitiveWork?.segmentsRun,
    workId: simple.json?.cognitiveWork?.workId,
    suspended: simple.json?.cognitiveWork?.suspended,
    generationId: simple.json?.generationId,
    assistantPreview: (simple.json?.messages || [])
      .filter((m) => m.role === "ASSISTANT" || m.authorRole === "ASSISTANT")
      .slice(-1)[0]?.content?.slice?.(0, 240),
  });
  const workA = simple.json?.cognitiveWork?.workId;

  // P1-B complex
  const complexKey = `c17-complex-${randomUUID()}`;
  const complex = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: JSON.stringify({
      content:
        "Analyse la politique TVA export du projet: détermine le régime applicable, confronte la contradiction éventuelle, et produis une synthèse structurée avec les conditions de preuve. Consulte les documents disponibles.",
      clientTurnKey: complexKey,
      forceNewCognitiveWork: true,
    }),
  });
  step("p1b_complex", {
    status: complex.status,
    noraMode: complex.json?.noraMode,
    replyStatus: complex.json?.status,
    segments: complex.json?.cognitiveWork?.segmentsRun,
    workId: complex.json?.cognitiveWork?.workId,
    suspended: complex.json?.cognitiveWork?.suspended,
    suspendReason: complex.json?.cognitiveWork?.suspendReason,
    toolCalls: complex.json?.toolCallsObserved,
    generationId: complex.json?.generationId,
  });
  const workB = complex.json?.cognitiveWork?.workId;

  // P2-A continuity with complementary info
  const contKey = `c17-cont-${randomUUID()}`;
  const cont = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: JSON.stringify({
      content:
        "Complément: le client est hors UE et la preuve d'export est déjà archivée dans le dossier fictif. Poursuis la même analyse.",
      clientTurnKey: contKey,
      cognitiveWorkId: workB || null,
    }),
  });
  step("p2a_continue", {
    status: cont.status,
    workId: cont.json?.cognitiveWork?.workId,
    resumed: cont.json?.cognitiveWork?.resumed,
    sameAsComplex: cont.json?.cognitiveWork?.workId === workB,
    segments: cont.json?.cognitiveWork?.segmentsRun,
  });

  // P2 independent request
  const indepKey = `c17-indep-${randomUUID()}`;
  const indep = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: JSON.stringify({
      content: "Question indépendante: quelle est la météo à Paris demain ? (ne mélange pas avec la TVA)",
      clientTurnKey: indepKey,
      forceNewCognitiveWork: true,
    }),
  });
  step("p2_independent", {
    status: indep.status,
    workId: indep.json?.cognitiveWork?.workId,
    distinctFromB: indep.json?.cognitiveWork?.workId !== workB,
    distinctFromA: indep.json?.cognitiveWork?.workId !== workA,
  });

  // P3 document production request
  const docProdKey = `c17-docprod-${randomUUID()}`;
  const docProd = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: JSON.stringify({
      content:
        "Produis maintenant un document de cadrage TVA (titre + corps en fence sfia-document) résumant régime, contradictions et preuves requises, à enregistrer dans le projet/préparation.",
      clientTurnKey: docProdKey,
      forceNewCognitiveWork: true,
    }),
  });
  step("p3a_document", {
    status: docProd.status,
    documentSave: docProd.json?.documentSave,
    productionKind: null,
    workId: docProd.json?.cognitiveWork?.workId,
    hasFence: JSON.stringify(docProd.json).includes("sfia-document"),
  });

  // P3/P4 contract prepare if project exists — create project if needed
  let projectId = prep.json?.projectId || null;
  if (!projectId) {
    const created = await api(`/api/preparations/${preparationId}/create-project`, {
      method: "POST",
      body: JSON.stringify({ proposedName: `C17 Campagne ${Date.now().toString(36)}` }),
    });
    projectId = created.json?.projectId || created.json?.id || null;
    step("create_project", { status: created.status, projectId, note: created.json?.error });
  }

  const contractKey = `c17-contract-${randomUUID()}`;
  const contractMsg = await api(`/api/preparations/${preparationId}/messages`, {
    method: "POST",
    body: JSON.stringify({
      content:
        "Prépare un contrat technique Cursor pour implémenter un contrôle de conformité TVA export fictif: instruction détaillée, plus de huit critères d'acceptation spécifiques, exclusions, STOP et preuves. Ne dispatch pas.",
      clientTurnKey: contractKey,
      forceNewCognitiveWork: true,
    }),
  });
  step("p3b_p4_contract_turn", {
    status: contractMsg.status,
    preparedContract: contractMsg.json?.preparedContract,
    workId: contractMsg.json?.cognitiveWork?.workId,
    suspended: contractMsg.json?.cognitiveWork?.suspended,
  });

  report.preparationId = preparationId;
  report.projectId = projectId;
  report.finishedAt = new Date().toISOString();

  // Heuristic verdicts from observations
  report.verdicts.p1a =
    simple.status === 200 && simple.json?.status && simple.json?.cognitiveWork?.segmentsRun <= 2
      ? "PASS_OR_PARTIAL"
      : "FAIL_OR_INCOMPLETE";
  report.verdicts.p1b =
    complex.status === 200 && complex.json?.cognitiveWork
      ? "OBSERVED"
      : "FAIL";
  report.verdicts.p2 =
    cont.json?.cognitiveWork?.workId === workB || cont.json?.cognitiveWork?.resumed
      ? "PASS_OR_PARTIAL"
      : "PARTIAL";
  report.verdicts.p3 = docProd.json?.documentSave || JSON.stringify(docProd.json).includes("sfia-document")
    ? "OBSERVED"
      : "PARTIAL";
  report.verdicts.p4 = contractMsg.json?.preparedContract ? "OBSERVED" : "PARTIAL";

  writeFileSync(`${outDir}/report.json`, JSON.stringify(report, null, 2));
  writeFileSync(`${outDir}/simple.json`, JSON.stringify(simple.json, null, 2));
  writeFileSync(`${outDir}/complex.json`, JSON.stringify(complex.json, null, 2));
  writeFileSync(`${outDir}/contract.json`, JSON.stringify(contractMsg.json, null, 2));
  console.log("REPORT", `${outDir}/report.json`);
  console.log(JSON.stringify(report.verdicts, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});

```

## 13. Sections modifiées C17 (contenu utile)

### DIFF `projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts b/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
index 30923e28..e42e47bb 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/investigation-state.ts
@@ -51,6 +51,13 @@ export type InvestigationState = {
     | "UNKNOWN";
   contractReady: boolean;
   contractReadyBlockedReason?: string | null;
+  /** C17 — dedicated technical instruction (≠ conversational reply). */
+  productionInstruction?: string | null;
+  /** C17 — acceptance criteria distinct from remainingWork. */
+  acceptanceCriteria?: string[];
+  /** C17 — filiation to exact cognitive work / revision. */
+  cognitiveWorkId?: string | null;
+  cognitiveRevision?: number | null;
 };

 export function createEmptyInvestigation(intent: string): InvestigationState {
@@ -59,7 +66,8 @@ export function createEmptyInvestigation(intent: string): InvestigationState {
     desiredOutcome: "",
     constraints: [],
     risks: [],
-    profileHint: intent.trim().length < 80 ? "simple" : "analyse",
+    // C14: never derive profileHint from message length.
+    profileHint: "analyse",
     questions: [],
     sources: [],
     contradictions: [],
@@ -72,30 +80,15 @@ export function createEmptyInvestigation(intent: string): InvestigationState {
 }

 /**
- * Une restriction déterminante inconnue ou une source critique partielle
- * interdit le statut « contrat prêt ».
+ * C15 — positive sufficiency for contract READY.
+ * Absence of open questions / contradictions on an empty or UNKNOWN state
+ * must NEVER imply SUFFICIENT / contractReady.
  */
 export function evaluateContractReadiness(state: InvestigationState): InvestigationState {
-  const determinantOpen = state.questions.filter(
-    (q) => q.importance === "DETERMINANT" && q.status !== "ANSWERED",
-  );
-  const criticalPartial = state.sources.some(
-    (s) =>
-      (s.coverage === "PARTIAL" ||
-        s.coverage === "DENIED" ||
-        s.coverage === "UNKNOWN" ||
-        s.coverage === "STALE") &&
-      state.questions.some(
-        (q) =>
-          q.importance === "DETERMINANT" &&
-          q.status !== "ANSWERED" &&
-          (q.sourceRefs ?? []).includes(s.ref),
-      ),
-  );
-  const hasContradiction = state.contradictions.length > 0;
-  const blockedRestriction = state.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION";
-
-  if (blockedRestriction) {
+  // C17: BUDGET_EXHAUSTED is not a sticky poison across re-evaluation.
+  // Only an explicit global envelope decision (conductor) may re-assert it after
+  // checking resources; a technical SEGMENT_INVOCATION_LIMIT must not block READY forever.
+  if (state.sufficiency === "BLOCKED_BY_UNKNOWN_RESTRICTION") {
     return {
       ...state,
       contractReady: false,
@@ -103,32 +96,82 @@ export function evaluateContractReadiness(state: InvestigationState): Investigat
       sufficiency: "BLOCKED_BY_UNKNOWN_RESTRICTION",
     };
   }
-  if (determinantOpen.length > 0) {
-    return {
-      ...state,
-      contractReady: false,
-      contractReadyBlockedReason: `Questions déterminantes ouvertes: ${determinantOpen
-        .map((q) => q.id)
-        .join(", ")}`,
-      sufficiency: "INSUFFICIENT",
-    };
+
+  const intentOk = Boolean(state.intentSummary?.trim());
+  const outcomeOk = Boolean(state.desiredOutcome?.trim());
+  const consulted = state.sources.filter(
+    (s) => s.coverage === "CONSULTED" || s.coverage === "VERIFIED",
+  );
+  const determinantOpen = state.questions.filter(
+    (q) => q.importance === "DETERMINANT" && q.status !== "ANSWERED",
+  );
+  const hasDeterminantQuestions = state.questions.some((q) => q.importance === "DETERMINANT");
+  // C16: ANSWERED without exploitable answer is not positive sufficiency.
+  const answeredHollow = state.questions.filter(
+    (q) =>
+      q.importance === "DETERMINANT" &&
+      q.status === "ANSWERED" &&
+      !(q.answerSummary && q.answerSummary.trim()),
+  );
+  // Determinant / material source degradation reopens READY even if questions stay ANSWERED.
+  const determinantDegraded = state.sources.some((s) => {
+    if (s.coverage === "STALE" || s.coverage === "DENIED" || s.coverage === "CONTRADICTORY") {
+      return true;
+    }
+    if (s.coverage !== "PARTIAL" && s.coverage !== "UNKNOWN") return false;
+    const linked = state.questions.some(
+      (q) =>
+        q.importance === "DETERMINANT" &&
+        (q.sourceRefs ?? []).includes(s.ref),
+    );
+    // Unlinked PARTIAL/UNKNOWN on the only consulted path still blocks when no VERIFIED remains.
+    return linked || consulted.length === 0;
+  });
+  const hasContradiction = state.contradictions.length > 0;
+
+  const fail = (reason: string, sufficiency: InvestigationState["sufficiency"] = "INSUFFICIENT") => ({
+    ...state,
+    contractReady: false as const,
+    contractReadyBlockedReason: reason,
+    sufficiency,
+  });
+
+  if (!intentOk) return fail("Intention non établie", "UNKNOWN");
+  if (!outcomeOk) return fail("Résultat attendu non spécifié", "INSUFFICIENT");
+
+  // C17: do not artificially require determinant questions / external sources when
+  // the mission does not need them — but demand an explicit positive basis.
+  const productionBasis =
+    Boolean(state.productionInstruction?.trim()) &&
+    Array.isArray(state.acceptanceCriteria) &&
+    state.acceptanceCriteria.some((c) => Boolean(c?.trim()));
+  if (consulted.length === 0 && !productionBasis) {
+    return fail(
+      "Aucune base positive (sources CONSULTED/VERIFIED ou production métier) — insuffisant",
+      "INSUFFICIENT",
+    );
   }
-  if (criticalPartial) {
-    return {
-      ...state,
-      contractReady: false,
-      contractReadyBlockedReason: "Source critique partielle, refusée ou non vérifiable",
-      sufficiency: "INSUFFICIENT",
-    };
+  if (hasDeterminantQuestions) {
+    if (determinantOpen.length > 0) {
+      return fail(
+        `Questions déterminantes ouvertes: ${determinantOpen.map((q) => q.id).join(", ")}`,
+      );
+    }
+    if (answeredHollow.length > 0) {
+      return fail(
+        `Réponses déterminantes non étayées: ${answeredHollow.map((q) => q.id).join(", ")}`,
+      );
+    }
+  }
+  if (determinantDegraded) {
+    return fail(
+      "Source déterminante dégradée (STALE/DENIED/UNKNOWN/PARTIAL/CONTRADICTORY) — requalification requise",
+    );
   }
   if (hasContradiction) {
-    return {
-      ...state,
-      contractReady: false,
-      contractReadyBlockedReason: "Contradictions non résolues entre sources",
-      sufficiency: "INSUFFICIENT",
-    };
+    return fail("Contradictions non résolues entre sources");
   }
+
   return {
     ...state,
     contractReady: true,
```

### DIFF `projects/sfia-studio-next/web/src/domains/conversation/investigation-persistence.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/investigation-persistence.ts b/projects/sfia-studio-next/web/src/domains/conversation/investigation-persistence.ts
index 1e82b934..73c3186a 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/investigation-persistence.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/investigation-persistence.ts
@@ -1,13 +1,21 @@
 /**
- * Durable investigation snapshot — resume after process restart.
- * Stored under preparations.projection_json.ml5InvestigationSnapshot.
- * Not an authority register; D3 conductor consumes it.
+ * Investigation persistence facade.
+ * C15: cognitive_works is the active D3 truth.
+ * Legacy preparations.projection_json.ml5InvestigationSnapshot is read-compat only
+ * (ambiguous bindings never feed READY). Exit: stop writing the legacy snapshot.
  */

 import { eq } from "drizzle-orm";
 import { db } from "@/db/client";
 import { preparations } from "@/db/schema";
 import { StudioError } from "@/lib/http-errors";
+import {
+  getCognitiveWork,
+  listCognitiveWorksForPreparation,
+  openOrResumeCognitiveWork,
+  checkpointCognitiveWork,
+  releaseCognitiveWorkLease,
+} from "./cognitive-work";
 import {
   evaluateContractReadiness,
   resumeInvestigation,
@@ -16,43 +24,139 @@ import {

 const SNAPSHOT_KEY = "ml5InvestigationSnapshot";

+/** @deprecated C15 — legacy key retained for read-compat / migration diagnostics only. */
+export const LEGACY_INVESTIGATION_SNAPSHOT_KEY = SNAPSHOT_KEY;
+
 /**
- * Persist evaluated investigation state for a preparation (pilot-owned).
+ * Persist investigation into dedicated cognitive work (active truth).
+ * Optionally keep a non-authoritative legacy mirror for transition diagnostics.
  */
 export async function saveInvestigationSnapshot(input: {
   pilotId: string;
   preparationId: string;
   state: InvestigationState;
-}): Promise<{ savedAt: string }> {
-  const prep = (
-    await db.select().from(preparations).where(eq(preparations.id, input.preparationId)).limit(1)
-  )[0];
-  if (!prep) throw new StudioError("NOT_FOUND", "Préparation introuvable");
-  if (prep.ownerPilotId !== input.pilotId) {
-    throw new StudioError("ACCESS_DENIED", "Préparation d'un autre Pilote");
+  workId?: string | null;
+  projectId?: string | null;
+  conversationId?: string | null;
+}): Promise<{ savedAt: string; workId: string; revision: number }> {
+  // C17: never re-evaluate with a sticky BUDGET_EXHAUSTED left by SEGMENT_INVOCATION_LIMIT.
+  let incoming = input.state;
+  const blocked = incoming.contractReadyBlockedReason ?? "";
+  if (
+    incoming.sufficiency === "BUDGET_EXHAUSTED" &&
+    (blocked === "SEGMENT_INVOCATION_LIMIT" || blocked.includes("SEGMENT_INVOCATION"))
+  ) {
+    incoming = {
+      ...incoming,
+      sufficiency: "UNKNOWN",
+      contractReady: false,
+      contractReadyBlockedReason: "SEGMENT_INVOCATION_LIMIT",
+    };
   }
-  const evaluated = evaluateContractReadiness(input.state);
-  const savedAt = new Date().toISOString();
-  const base =
-    prep.projectionJson && typeof prep.projectionJson === "object"
-      ? { ...(prep.projectionJson as Record<string, unknown>) }
-      : {};
-  const next = {
-    ...base,
-    [SNAPSHOT_KEY]: { state: evaluated, savedAt },
+  const evaluated = evaluateContractReadiness(incoming);
+  const opened = await openOrResumeCognitiveWork({
+    pilotId: input.pilotId,
+    preparationId: input.preparationId,
+    projectId: input.projectId,
+    conversationId: input.conversationId,
+    objective: evaluated.intentSummary || "investigation",
+    expectedOutcome: evaluated.desiredOutcome,
+    workId: input.workId,
+  });
+  // Preserve COMPLETE — do not downgrade a finished work to SUSPENDED on bridge save.
+  const priorStatus = opened.work.status;
+  const persistStatus =
+    priorStatus === "COMPLETE" ? "COMPLETE" : priorStatus === "FAILED" ? "FAILED" : "OPEN";
+  const saved = await checkpointCognitiveWork({
+    pilotId: input.pilotId,
+    workId: opened.work.id,
+    ownerToken: opened.ownerToken,
+    expectedRevision: opened.work.revision,
+    cause: "INVESTIGATION_SAVE",
+    state: evaluated,
+    status: persistStatus,
+    interruptCause: persistStatus === "COMPLETE" ? null : opened.work.interruptCause,
+  });
+  await releaseCognitiveWorkLease({
+    workId: opened.work.id,
+    ownerToken: opened.ownerToken,
+    status: persistStatus,
+    interruptCause: persistStatus === "COMPLETE" ? null : opened.work.interruptCause,
+  });
+
+  // Transitional diagnostic mirror — NOT authoritative for READY (C15 exit path).
+  if ((process.env.SFIA_COGNITIVE_LEGACY_MIRROR || "").trim() === "1") {
+    const prep = (
+      await db.select().from(preparations).where(eq(preparations.id, input.preparationId)).limit(1)
+    )[0];
+    if (prep && prep.ownerPilotId === input.pilotId) {
+      const savedAt = new Date().toISOString();
+      const base =
+        prep.projectionJson && typeof prep.projectionJson === "object"
+          ? { ...(prep.projectionJson as Record<string, unknown>) }
+          : {};
+      await db
+        .update(preparations)
+        .set({
+          projectionJson: {
+            ...base,
+            [SNAPSHOT_KEY]: {
+              state: evaluated,
+              savedAt,
+              cognitiveWorkId: saved.id,
+              authority: "LEGACY_MIRROR_NON_AUTHORITATIVE",
+            },
+          },
+          updatedAt: new Date(),
+        })
+        .where(eq(preparations.id, input.preparationId));
+    }
+  }
+
+  return {
+    savedAt: new Date().toISOString(),
+    workId: saved.id,
+    revision: saved.revision,
   };
-  await db
-    .update(preparations)
-    .set({ projectionJson: next, updatedAt: new Date() })
-    .where(eq(preparations.id, input.preparationId));
-  return { savedAt };
 }

 export async function loadInvestigationSnapshot(input: {
   pilotId: string;
   preparationId: string;
   intentFallback?: string;
+  workId?: string | null;
 }): Promise<InvestigationState | null> {
+  // Prefer dedicated cognitive work.
+  if (input.workId) {
+    const work = await getCognitiveWork({
+      pilotId: input.pilotId,
+      workId: input.workId,
+    });
+    return resumeInvestigation(
+      work.state,
+      input.intentFallback ?? work.state.intentSummary ?? "",
+    );
+  }
+  const works = await listCognitiveWorksForPreparation({
+    pilotId: input.pilotId,
+    preparationId: input.preparationId,
+  });
+  if (works.length === 1) {
+    return resumeInvestigation(
+      works[0]!.state,
+      input.intentFallback ?? works[0]!.state.intentSummary ?? "",
+    );
+  }
+  if (works.length > 1) {
+    // Ambiguous multi-work — do not guess for READY.
+    return null;
+  }
+
+  // C16: legacy snapshot is never READY authority and is not returned on the
+  // authoritative load path. Compatibility diagnostics remain opt-in via env.
+  if ((process.env.SFIA_COGNITIVE_LEGACY_READ || "").trim() !== "1") {
+    return null;
+  }
   const prep = (
     await db.select().from(preparations).where(eq(preparations.id, input.preparationId)).limit(1)
   )[0];
@@ -64,7 +168,10 @@ export async function loadInvestigationSnapshot(input: {
     prep.projectionJson && typeof prep.projectionJson === "object"
       ? (prep.projectionJson as Record<string, unknown>)
       : {};
-  const snap = base[SNAPSHOT_KEY] as { state?: InvestigationState } | undefined;
+  const snap = base[SNAPSHOT_KEY] as
+    | { state?: InvestigationState; cognitiveWorkId?: string; authority?: string }
+    | undefined;
   if (!snap?.state) return null;
+  // Explicit non-authoritative — callers must not promote READY from this alone.
   return resumeInvestigation(snap.state, input.intentFallback ?? snap.state.intentSummary ?? "");
 }
```

### DIFF `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index e2ada8bb..e2dcf274 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -15,7 +15,7 @@ import {
 } from "@/db/schema";
 // db still used by getConversationId / listMessages
 import { newId } from "@/lib/ids";
-import { generateNoraReply } from "./nora-adapter";
+import { runNoraCognitiveTurn } from "./run-nora-cognitive-turn";
 import {
   applyPreparationProjection,
   getPreparationContext,
@@ -472,6 +472,7 @@ export async function lookupDurableTurnByClientKey(
   clientTurnKey: string,
 ): Promise<{
   found: boolean;
+  turnCommandId: string | null;
   status: string | null;
   generationId: string | null;
   operationId: string | null;
@@ -484,6 +485,7 @@ export async function lookupDurableTurnByClientKey(
   const key = clientTurnKey.trim();
   const empty = {
     found: false as const,
+    turnCommandId: null,
     status: null,
     generationId: null,
     operationId: null,
@@ -501,6 +503,7 @@ export async function lookupDurableTurnByClientKey(
   const row = (
     await db
       .select({
+        id: conversationTurnCommands.id,
         status: conversationTurnCommands.status,
         generationId: conversationTurnCommands.generationId,
         operationId: conversationTurnCommands.operationId,
@@ -544,6 +547,7 @@ export async function lookupDurableTurnByClientKey(

   return {
     found: true,
+    turnCommandId: row.id,
     status: row.status,
     generationId: row.generationId,
     operationId: row.operationId,
@@ -761,6 +765,25 @@ export type TurnResult = {
     effects?: Array<{ effectKind: string; targetRef: string }>;
   } | null;
   reconciled?: boolean;
+  /** Durable turn id — available for mid-turn activity polling (C01/C07). */
+  turnCommandId?: string | null;
+  /** CA-01 — DRAFT contract prepared this turn (never READY / never D6). */
+  preparedContract?: {
+    contractId: string;
+    contractKey: string;
+    version: number;
+    fingerprint: string;
+    status: string;
+  } | null;
+  /** C17 — cognitive work filiation for continuity / READY. */
+  cognitiveWork?: {
+    workId: string;
+    revision: number;
+    segmentsRun: number;
+    resumed: boolean;
+    suspended: boolean;
+    suspendReason: string | null;
+  } | null;
   /** Refs-only mission projection — never owner truth for D4/D6/D7. */
   missionProjection?: MissionProjection | null;
   /** S05 — server-derived turn kind from Nora qualification (not client lexical). */
@@ -875,6 +898,9 @@ export async function postUserMessageAndNora(
       pendingCandidateId?: string;
       pendingCandidateContentSha256?: string;
     } | null;
+    /** C17 — continue an explicit cognitive work when the Pilote resumes. */
+    cognitiveWorkId?: string | null;
+    forceNewCognitiveWork?: boolean;
   },
 ): Promise<TurnResult> {
   const requestId = opts?.requestId ?? newRequestId();
@@ -1085,6 +1111,8 @@ export async function postUserMessageAndNora(
   }

   let reply;
+  let preparedContract: TurnResult["preparedContract"] = null;
+  let cognitiveWorkMeta: TurnResult["cognitiveWork"] = null;
   try {
     // C1 — announce Nora work (ANNOUNCED ≠ OBSERVED). Best-effort; never blocks the turn.
     try {
@@ -1107,8 +1135,18 @@ export async function postUserMessageAndNora(
     const leasePulse = setInterval(() => {
       void touchTurnLease(reserved.commandId, reserved.ownerToken);
     }, 60_000);
+    // C16/C17 — cognitive conductor with semantic/technical work attachment.
+    let cognitiveWorkId: string | null = null;
     try {
-      reply = await generateNoraReply({
+      const turn = await runNoraCognitiveTurn({
+        pilotId,
+        preparationId,
+        projectId: ctx.project?.id ?? null,
+        conversationId: reserved.conversationId,
+        turnCommandId: reserved.commandId,
+        forceNewWork: opts?.forceNewCognitiveWork === true,
+        workId: opts?.cognitiveWorkId ?? null,
+        objective: content.slice(0, 2000),
         userText: content,
         contextSnippets,
         knowledgeSnippets: [
@@ -1117,17 +1155,31 @@ export async function postUserMessageAndNora(
           ...publicationOwnerSnippets,
         ],
         pilotageSnippets: pilotageCtx.snippets,
-        // C01: same structured Level A contract for fixture and LIVE — never authority.
         levelASignals: pilotageCtx.levelASignals,
-        // Requested level only. The adapter emits DELIVERED after a real generate.
         ckiDelivery: pilotageCtx.ckiDelivery,
         toolScope: {
           pilotId,
           preparationId,
           operationId: reserved.operationId,
           projectId: ctx.project?.id,
+          activityContext: {
+            conversationId: reserved.conversationId,
+            turnCommandId: reserved.commandId,
+            ownerPilotId: pilotId,
+            ownerToken: reserved.ownerToken,
+          },
         },
       });
+      reply = turn;
+      cognitiveWorkId = turn.conductor.workId;
+      cognitiveWorkMeta = {
+        workId: turn.conductor.workId,
+        revision: turn.conductor.revision,
+        segmentsRun: turn.conductor.segmentsRun,
+        resumed: turn.conductor.resumed,
+        suspended: turn.conductor.suspended,
+        suspendReason: turn.conductor.suspendReason,
+      };
       try {
         const { appendActivityEvent } = await import("./activity-projection");
         await appendActivityEvent({
@@ -1136,16 +1188,67 @@ export async function postUserMessageAndNora(
           ownerPilotId: pilotId,
           generationId: reply.generationId ?? null,
           phase: "nora.generate",
-          nature: "COMPLETED",
-          status: "COMPLETED",
-          summary: "Réponse Nora disponible",
+          nature: turn.conductor.suspended ? "UNCERTAIN" : "COMPLETED",
+          status: turn.conductor.suspended ? "LIMITED" : "COMPLETED",
+          summary: turn.conductor.suspended
+            ? `Travail cognitif suspendu (${turn.conductor.suspendReason ?? "LIMIT"})`
+            : "Réponse Nora disponible",
           ownerToken: reserved.ownerToken,
         });
+        // Dedup: mid-turn onRecord already emitted OBSERVED; keep a compact post-hoc
+        // summary only when no mid-turn events were produced (fixture without sink).
       } catch {
         /* activity observational */
       }
+      // CA-01 / C14 — bridge investigation → DRAFT when semantic qualification asks for it.
+      // Never READY here; never lexical intent; never a second preparation engine.
+      if (ctx.project?.id && reply.qualification) {
+        try {
+          const {
+            bridgeNoraTurnToContractPreparation,
+            semanticWantsCursorContractPrepare,
+            semanticWantsCorrectiveDraft,
+          } = await import("./nora-contract-bridge");
+          const wantsPrepare =
+            semanticWantsCursorContractPrepare(reply.qualification) ||
+            semanticWantsCorrectiveDraft(reply.qualification);
+          if (wantsPrepare) {
+            const observedSources = Array.isArray(reply.observedToolSources)
+              ? reply.observedToolSources
+              : [];
+            const bridge = await bridgeNoraTurnToContractPreparation({
+              pilotId,
+              projectId: ctx.project.id,
+              preparationId,
+              conversationId: reserved.conversationId,
+              turnCommandId: reserved.commandId,
+              ownerToken: reserved.ownerToken,
+              userText: content,
+              assistantText: reply.content,
+              qualification: reply.qualification,
+              observedSources,
+              attemptPrepare: true,
+              sourceTurnCommandId: reserved.commandId,
+              workId: turn.conductor.workId,
+              workRevision: turn.conductor.revision,
+              investigationOverride: turn.conductor.investigation,
+              productionInstruction:
+                turn.conductor.investigation.productionInstruction ??
+                (turn.conductor.production.kind === "DOCUMENT" ||
+                turn.conductor.production.kind === "CONTRACT"
+                  ? turn.conductor.production.contentMarkdown
+                  : null),
+            });
+            preparedContract = bridge.prepared;
+          }
+        } catch {
+          /* bridge observational / qualification — turn continues */
+        }
+      }
     } finally {
       clearInterval(leasePulse);
+      // Conductor owns claim/checkpoint/release; no systematic SUSPENDED here.
+      void cognitiveWorkId;
     }
   } catch {
     // SEM order: Nora runs before same-turn D5/D6, so a provider failure here
@@ -1702,7 +1805,17 @@ export async function postUserMessageAndNora(
     d4Effect: null,
   });

-  if (reply.status === "COMPLETE" && allowOwnerEffects) {
+  // C17: segment-limit suspension keeps work SUSPENDED (honest) but may still
+  // carry a complete document fence for D4 — do not require conversational COMPLETE.
+  const interruptedWithDocument =
+    reply.status === "INTERRUPTED" &&
+    Boolean(cognitiveWorkMeta?.suspended) &&
+    extractContractualDocumentProposal(reply.content).ok;
+  const replyAllowsOwnerEffects =
+    allowOwnerEffects &&
+    (reply.status === "COMPLETE" || interruptedWithDocument);
+
+  if (replyAllowsOwnerEffects) {
     if (turnRaceHooks.beforeD4Effect) {
       await turnRaceHooks.beforeD4Effect();
     }
@@ -3437,9 +3550,11 @@ export async function postUserMessageAndNora(
       ? "UNKNOWN"
       : reply.status === "COMPLETE"
         ? "COMPLETE"
-        : reply.status === "UNKNOWN"
-          ? "UNKNOWN"
-          : "FAILED";
+        : reply.status === "INTERRUPTED"
+          ? "UNKNOWN" // suspended cognitive work — not a failed turn fabrication
+          : reply.status === "UNKNOWN"
+            ? "UNKNOWN"
+            : "FAILED";

   if (
     !ownershipLostBeforeD4 &&
@@ -3478,6 +3593,9 @@ export async function postUserMessageAndNora(
     assistantMessageId: ownershipLostBeforeD4 ? null : assistantId,
     operationId: reserved.operationId,
     requestId,
+    turnCommandId: reserved.commandId,
+    preparedContract,
+    cognitiveWork: cognitiveWorkMeta,
     noraMode: reply.mode,
     status: turnStatus === "COMPLETE" ? reply.status : turnStatus,
     generationId: reply.generationId,
```

### DIFF `projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts b/projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
index e78e569e..d7e4f2ef 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
@@ -107,6 +107,8 @@ export async function createTechnicalContract(input: {
   markReady?: boolean;
   unknownRestrictions?: string[];
   sourcesSufficient?: boolean;
+  cognitiveWorkId?: string | null;
+  cognitiveRevision?: number | null;
 }) {
   await assertProject(input.pilotId, input.projectId);
   assertContractBodyComplete(input.body);
@@ -165,9 +167,18 @@ export async function createTechnicalContract(input: {
     stopConditionsJson: JSON.stringify(input.body.stopConditions),
     reversibilityLimitsJson: JSON.stringify(input.body.reversibilityLimits ?? []),
     gitScopeJson: input.body.gitScope ? JSON.stringify(input.body.gitScope) : null,
-    readinessJson: JSON.stringify(readiness),
+    readinessJson: JSON.stringify({
+      ...readiness,
+      cognitiveFiliation: {
+        workId: input.cognitiveWorkId ?? null,
+        revision: input.cognitiveRevision ?? null,
+        preparationId: input.preparationId ?? null,
+      },
+    }),
     sourceTurnCommandId: input.sourceTurnCommandId ?? null,
     supersedesContractId: input.supersedesContractId ?? null,
+    cognitiveWorkId: input.cognitiveWorkId ?? null,
+    cognitiveRevision: input.cognitiveRevision ?? null,
     createdAt: now,
     updatedAt: now,
   });
@@ -180,6 +191,8 @@ export async function createTechnicalContract(input: {
     instructionFingerprint: instructionFp,
     status: status as "READY" | "DRAFT",
     readiness,
+    cognitiveWorkId: input.cognitiveWorkId ?? null,
+    cognitiveRevision: input.cognitiveRevision ?? null,
   };
 }

@@ -307,6 +320,9 @@ function rowToContract(row: typeof technicalContracts.$inferSelect) {
     fingerprint: row.fingerprint,
     instructionFingerprint: instructionFingerprint(row.instructionText),
     status: row.status,
+    preparationId: row.preparationId,
+    cognitiveWorkId: row.cognitiveWorkId ?? null,
+    cognitiveRevision: row.cognitiveRevision ?? null,
     body,
     readiness,
     createdAt: row.createdAt.toISOString(),
```

### DIFF `projects/sfia-studio-next/web/src/db/schema.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/db/schema.ts b/projects/sfia-studio-next/web/src/db/schema.ts
index ac87e8a3..ad3113e3 100644
--- a/projects/sfia-studio-next/web/src/db/schema.ts
+++ b/projects/sfia-studio-next/web/src/db/schema.ts
@@ -939,6 +939,9 @@ export const technicalContracts = pgTable(
     sourceTurnCommandId: text("source_turn_command_id"),
     supersedesContractId: text("supersedes_contract_id"),
     readinessJson: text("readiness_json"),
+    /** C17 — filiation to exact cognitive work (additive). */
+    cognitiveWorkId: text("cognitive_work_id"),
+    cognitiveRevision: integer("cognitive_revision"),
     createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
     updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
   },
@@ -950,6 +953,7 @@ export const technicalContracts = pgTable(
     ),
     index("technical_contracts_project_idx").on(t.projectId),
     index("technical_contracts_fingerprint_idx").on(t.fingerprint),
+    index("technical_contracts_cognitive_work_idx").on(t.cognitiveWorkId),
   ],
 );

@@ -1009,6 +1013,8 @@ export const realizationQualifications = pgTable(
     noraAnalysisMarkdown: text("nora_analysis_markdown"),
     noraAnalysisAt: timestamp("nora_analysis_at", { withTimezone: true }),
     limitsJson: text("limits_json").notNull().default("[]"),
+    /** G15 — append-only prior qualification snapshots (JSON array). */
+    historyJson: text("history_json").notNull().default("[]"),
     createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
     updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
   },
@@ -1049,4 +1055,59 @@ export const noraActivityEvents = pgTable(
   ],
 );

-export const schemaRevision = "018_ml5_contract_reversibility";
+/** D3 — cognitive work distinct from conversation turn commands (ML5 C15 Option C). */
+export const cognitiveWorks = pgTable(
+  "cognitive_works",
+  {
+    id: text("id").primaryKey(),
+    ownerPilotId: text("owner_pilot_id")
+      .notNull()
+      .references(() => pilots.id),
+    preparationId: text("preparation_id")
+      .notNull()
+      .references(() => preparations.id),
+    projectId: text("project_id").references(() => projects.id),
+    conversationId: text("conversation_id").references(() => conversations.id),
+    status: text("status").notNull(),
+    revision: integer("revision").notNull().default(1),
+    ownerToken: text("owner_token"),
+    leaseUntil: timestamp("lease_until", { withTimezone: true }),
+    objective: text("objective").notNull().default(""),
+    expectedOutcome: text("expected_outcome").notNull().default(""),
+    stateJson: text("state_json").notNull().default("{}"),
+    resourcesJson: text("resources_json").notNull().default("{}"),
+    productionJson: text("production_json").notNull().default("{}"),
+    interruptCause: text("interrupt_cause"),
+    parentWorkId: text("parent_work_id"),
+    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
+    updatedAt: timestamp("updated_at", { withTimezone: true }).notNull().defaultNow(),
+  },
+  (t) => [
+    index("cognitive_works_prep_idx").on(t.preparationId),
+    index("cognitive_works_pilot_status_idx").on(t.ownerPilotId, t.status),
+  ],
+);
+
+export const cognitiveWorkCheckpoints = pgTable(
+  "cognitive_work_checkpoints",
+  {
+    id: text("id").primaryKey(),
+    workId: text("work_id")
+      .notNull()
+      .references(() => cognitiveWorks.id),
+    revision: integer("revision").notNull(),
+    parentRevision: integer("parent_revision"),
+    cause: text("cause").notNull(),
+    turnCommandId: text("turn_command_id"),
+    generationId: text("generation_id"),
+    payloadJson: text("payload_json").notNull().default("{}"),
+    resourcesJson: text("resources_json").notNull().default("{}"),
+    createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
+  },
+  (t) => [
+    uniqueIndex("cognitive_work_checkpoints_work_rev_uidx").on(t.workId, t.revision),
+    index("cognitive_work_checkpoints_work_idx").on(t.workId),
+  ],
+);
+
+export const schemaRevision = "020_cognitive_work";
```

### DIFF `projects/sfia-studio-next/web/tests/unit/ml5-investigation-state.test.ts`

```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-investigation-state.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-investigation-state.test.ts
index c73f9fbe..13a916cd 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-investigation-state.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-investigation-state.test.ts
@@ -11,7 +11,9 @@ describe("ML5 A — investigation-state", () => {
   it("blocks contract ready when determinant questions remain open", () => {
     const state: InvestigationState = {
       ...createEmptyInvestigation("Préparer un contrat Cursor"),
+      desiredOutcome: "contrat inspectable",
       profileHint: "investigation",
+      sources: [{ kind: "D4", ref: "doc:spec", coverage: "CONSULTED" }],
       questions: [
         {
           id: "q1",
@@ -38,9 +40,10 @@ describe("ML5 A — investigation-state", () => {
     expect(next.sufficiency).toBe("BLOCKED_BY_UNKNOWN_RESTRICTION");
   });

-  it("allows ready only when determinants answered and no contradictions", () => {
+  it("allows ready only with positive sufficiency (outcome + consulted + determinants)", () => {
     const state: InvestigationState = {
       ...createEmptyInvestigation("mission"),
+      desiredOutcome: "module sandbox livré",
       questions: [
         {
           id: "q1",
@@ -65,6 +68,51 @@ describe("ML5 A — investigation-state", () => {
     expect(next.sufficiency).toBe("SUFFICIENT");
   });

+  it("C17: production basis can READY without artificial determinant questions", () => {
+    const next = evaluateContractReadiness({
+      ...createEmptyInvestigation("Préparer contrat README"),
+      desiredOutcome: "contrat DRAFT inspectable",
+      questions: [],
+      sources: [],
+      productionInstruction: "# Instruction\nAjouter README.md fictif",
+      acceptanceCriteria: [
+        "README.md créé",
+        "Contenu non vide",
+        "Aucun dispatch",
+      ],
+      sufficiency: "UNKNOWN",
+    });
+    expect(next.contractReady).toBe(true);
+    expect(next.sufficiency).toBe("SUFFICIENT");
+  });
+
+  it("refuses READY on empty investigation (C15 positive sufficiency)", () => {
+    const next = evaluateContractReadiness(createEmptyInvestigation("mission"));
+    expect(next.contractReady).toBe(false);
+    expect(next.sufficiency).not.toBe("SUFFICIENT");
+  });
+
+  it("C17: prior BUDGET_EXHAUSTED does not sticky-block positive re-evaluation", () => {
+    const next = evaluateContractReadiness({
+      ...createEmptyInvestigation("mission"),
+      desiredOutcome: "x",
+      sufficiency: "BUDGET_EXHAUSTED",
+      contractReadyBlockedReason: "Budget cognitif global épuisé",
+      sources: [{ kind: "D4", ref: "doc:1", coverage: "CONSULTED" }],
+      questions: [
+        {
+          id: "q1",
+          text: "ok?",
+          status: "ANSWERED",
+          importance: "DETERMINANT",
+          answerSummary: "yes",
+        },
+      ],
+    });
+    expect(next.contractReady).toBe(true);
+    expect(next.sufficiency).toBe("SUFFICIENT");
+  });
+
   it("does not treat lexical miss as demonstrated absence", () => {
     expect(qualifySearchMiss("LEXICAL_MISS")).toBe("UNKNOWN");
     expect(qualifySearchMiss("DEMONSTRATED_ABSENCE")).toBe("VERIFIED");
```

### DIFF `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index cc1c771f..a26f1717 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,247 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-24-ML5-CYCLE17-VERTICAL-COGNITIVE-CONVERGENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-24 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 17 convergence fonctionnelle verticale (lot convergence 1) |
+| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C17 non poussés) |
+| Contenu | Parcours P1–P4 LIVE ; forceNew corrigé ; merge investigation riche ; SEGMENT≠BUDGET global ; filiation READY migration 021 ; production basis ; D4 document LIVE ; contrat DRAFT→READY→refus D6 LIVE |
+| Migration DEV | `021_cognitive_contract_filiation.sql` additive sur DEV |
+| Preuves LIVE | P1-A PASS ; P1-B PARTIAL ; P2 continuité PASS ; P3 document D4 PASS ; P4 DRAFT+READY+refus PASS ; invalidation matérielle / restart serveur / instruction ≥24k non clos |
+| Tests | investigation 8 PASS ; C16 integration 5 PASS ; PG ownership 5 PASS ; tsc PASS ; build Next PASS (cycle) |
+| Push projet | **NONE** |
+| Verdict | **NOT READY** — lot 1 non sorti (réserves P1-B/P2-C/P3 long/P4 invalidation) ; convergence fonctionnelle partielle DEV LIVE démontrée |
+
+## delivery_id: DELIV-2026-11-24-ML5-CYCLE16-INTEGRATED-CONDUCTOR
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-24 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 16 finalisation fonctionnelle + qualification intégrée du conducteur |
+| Type | CONSTRUCTION DEV · **NO RELEASE** · INC Critical |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C1–C16 non poussés) |
+| Contenu | Raccordement produit `runNoraCognitiveTurn` → conducteur D3 ; claim/lease/fencing ; READY positif + requalification ; DRAFT incomplet sans slice(0,8) ; WEB DNS+connect pinned+timeout lecture ; multi-entrées service/intent/D8 |
+| Tests | units C16 5 PASS ; C15 5 PASS ; PG ownership C16 5 PASS ; PG C15 2 PASS |
+| Push projet | **NONE** |
+| Verdict | **READY WITH RESERVES** — raccordement + P0 ownership/READY/WEB démontrés DETERMINISTIC/INTEGRATION ; LIVE E2E product path encore PARTIAL (Next offline au moment des preuves) |
+
+## delivery_id: DELIV-2026-11-24-ML5-CYCLE15-COGNITIVE-CONDUCTOR
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-24 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 15 conducteur cognitif Nora (lot convergence 1) |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C15 non poussés) |
+| Contenu | Persistance D3 `cognitive_works` ; conducteur multi-segments ; READY positif ; journal non monotone ; contrat sans plafonds 24k/8 ; WEB egress DNS+stream |
+| Migration DEV | `020_cognitive_work.sql` sur `sfia_next_dev` + `sfia_next_e2e` |
+| Tests | units C15 + investigation/bridge ; PG cognitive work 2 PASS |
+| Push projet | **NONE** |
+| Verdict | **READY WITH RESERVES** — infrastructure + invariants discriminants ; LIVE intégré lot 1 encore PARTIAL |
+
+## delivery_id: DELIV-2026-11-24-ML5-CYCLE14-COGNITIVE-CONVERGENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-24 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 14 conduite cognitive Nora + WEB LIVE + contrats |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C14 non poussés) |
+| Contenu | Suppression routage lexical TECH_INTENT ; profil sans longueur ; capability `d7.prepare_cursor_contract` ; WEB LIVE isolé + fetch + parse navigation ; critères métier contrat |
+| WEB LIVE | Isolation outbound query-only **PASS** ; search LIVE items **DISCOVERED** (MDN) ; open MDN **PAGE_OPENED** + citation ; hosted tool détaché de Nora privée |
+| Scénarios | S2 négation sans contrat ; S5 contrat DRAFT instruction ≥6k ; S4 WEB LIVE ; S8 dispatch sans READY → 400 ; units C14 **31 PASS** |
+| Push projet | **NONE** |
+| Verdict | **ML5 NORA COGNITIVE CONVERGENCE PROVEN — FUNCTIONAL COMPLETION IN PROGRESS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE13-RESILIENCE-CANDIDATE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 13 confinement D8 + supervision durable + STOP LIVE + candidat |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C13 non poussés) |
+| Contenu | `d8-path-confine` + journal D8 ; `cursor-live-supervisor` ; STOP LIVE ; handoff honesty ; inventaire candidat |
+| STOP LIVE | `efx_03b99d0f…` agent `agent-c6b4acd1…` run `run-1a115791…` — BEFORE_STOP OK ; `LIVE_CANCEL_OBSERVED` ; terminal `cancelled` ; AFTER_STOP absent |
+| Long-run T-05 | `efx_53198bd9…` agent `agent-b339a662…` run `run-7159ad8b…` — browser closed 90s → COMPLETED finished ; identities stable ; double-dispatch idempotent |
+| D8 security | unit confine 12 PASS ; PG real reader 8 PASS (symlink/traversal/pilot/project) |
+| Push projet | **NONE** — `PROJECT CANDIDATE READY FOR MORRIS GIT REVIEW` |
+| Verdict | **ML5 DEV LIVE RESILIENCE PROVEN — QUALIFICATION IN PROGRESS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE12-LIVE-RESILIENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 12 LIVE resilience + D8 evidence + candidat |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C12 non poussés) |
+| Contenu | LIVE_WAIT=0 ACK-first; observeLiveCursorRun+apiKey; DROP_ACK fault T-04; D8 evidence tools Nora; STOP SCRIPTED; inventaire candidat |
+| Scénario LIVE | `ml5-c12-live-20261123` — `efx_6ef408be…` agent `agent-f1b001a0…` run `run-66b05967…` COMPLETED; RESULT_C12.txt OK |
+| Incident T-04 | DROP_ACK → AMBIGUOUS + priorSend + refus second dispatch (**PASS**) |
+| Nora D8 | `NORA_D8_TOOLS_OBSERVED` (11 tool calls) |
+| Push projet | **NONE** — `PROJECT CANDIDATE PREPARED — PUSH REQUIRES MORRIS GO` |
+| Verdict | **ML5 DEV LIVE PARTIAL — GOVERNED RESILIENCE GAPS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE11-DEV-LIVE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 11 activation DEV LIVE Nora + Cursor SDK |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C11 non poussés) |
+| Contenu | FileCredentialStore + model `composer-2.5` ; observeLiveCursorRun ; attachNoraCognitive→generateNoraReply ; openBilan sans requalify silencieux ; env LIVE DEV |
+| Scénario | `ml5-c11-live-20261123` — project `proj_c08249f9…` — Oui `efx_306b2b49…` — agent `agent-29c4c0f4…` — run `run-51c77f21…` — handoff `rhf_90ccccb6…` — témoin DEMO_C11.txt |
+| Frontier | **END-TO-END DEV LIVE** — Nora LIVE + Cursor SDK LIVE + D8 + Nora COGNITIVE ; B09/GitHub REAL/MCP N/A |
+| Tests | Journey C11 **10 PASS / 0 FAIL / 3 N/A** ; unit ciblés 11 PASS ; D8 verdict PARTIAL (honnête) |
+| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) — conformité LIVE améliorée, présence inchangée |
+| Push projet | **NONE** |
+| Verdict | **ML5 END-TO-END DEV LIVE PROVEN — QUALIFICATION IN PROGRESS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE10-UX-D8-QUAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 10 convergence UX, D6, D8 et qualification visuelle |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C10 non poussés) |
+| Contenu | CSS contrat/D6/D8 ; Travail 50/50 + D6 ; `confirmed` boolean strict ; bilan requalify après handoff ; pièce nouvelle G15 ; viewport 1680×970 |
+| Scénario | `ml5-c10-mono-20261123` — project `proj_d54a9443…` — Oui `efx_d4617b21…` — handoff `rhf_cc411abd…` |
+| Tests | Unit ML5 **73 PASS** ; Playwright C10 **15 PASS / 0 FAIL** ; F2 **0 PASS / NOT PROVEN** |
+| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) |
+| Push projet | **NONE** |
+| Verdict | **ML5 INTEGRATED — QUALIFICATION IN PROGRESS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE9-E2E-MONO-ATTEMPT
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 9 démonstration fonctionnelle intégrée mono-tentative |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — C3–C9 non poussés) |
+| Contenu | D6 Non authentifié (CANCELLED+decisionId) ; D6 Oui+fingerprint ; SCRIPTED_PHASED RUNNING→reconcile COMPLETED ; bilan D8 4 onglets ; retour Nora brouillon ; 14 captures + manifeste mono-tentative |
+| Scénario | `ml5-c9-mono-20261123` — project `proj_a4525a4a…` — attempt Oui `efx_1e86bf8c…` — refus `efx_b70c69ef…` |
+| Frontier | SCRIPTED / DEV — ≠ Nora LIVE, ≠ Cursor SDK LIVE, ≠ WEB LIVE |
+| Tests | Unit C9 phased 3 PASS ; unit ML5 ciblés 15+ PASS ; Playwright E2E 15 PASS / 1 PARTIAL (handoff re-ingéré) ; F2 global NOT PROVEN |
+| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) — conformité BROWSER améliorée, présence inchangée |
+| Push projet | **NONE** |
+| Verdict | **ML5 INTEGRATED — QUALIFICATION IN PROGRESS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE8-INVARIANTS-INTEGRATED
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 8 fermeture invariants + parcours intégré |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
+| Contenu | A1 origin/ls-remote/REMOTE_VERIFIED ; A2 listen probe ; A3 MCP fail-closed UNKNOWN ; B1 proof exact + no handoff fallback ; G07 PNG magic ; BROWSER intégré SCRIPTED |
+| Tests | Unit+PG ML5 **79 PASS** ; tsc PASS ; Playwright C8 ; F2 global NOT PROVEN |
+| Inventaire | **1 / 97 / 1** (B09 NOT_IMPL) — conformité ≠ présence |
+| Push projet | **NONE** |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE7-INTEGRATED-CONVERGENCE
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 7 convergence fonctionnelle, sécurisation, qualification |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
+| Checkpoint | R-003 @ `5a4e4405` · handoff C6 `b5466dd7` |
+| Contenu | CP-01 observeWorkspaceGitFacts ; CP-02 STUDIO_DEV_BIND ; CP-03 proof-ref + qualify-in-TX ; G07 evidence-captures ; B04 citations ; E12 MCP check ; Playwright runtime PNG ; fixture SCRIPTED BROWSER |
+| Tests | Unit+PG ML5 **75 PASS** ; tsc PASS ; Playwright 4 captures ; F2 global **NOT PROVEN** |
+| Inventaire | **1 / 97 / 1** (B09 reste NOT_IMPL) |
+| Push projet | **NONE** |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE6-GIT-A-DEV-BROWSER
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 6 Git Cursor option A + DEV auto-session + fermeture |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
+| Décision | `1e6929c543a88606488094be2f5dfe7fc34a0cb9` — DÉC-ML5-GIT A + DÉC-ML5-DEV |
+| Lane | DEV `sfia_next_dev` :5433 — mig **019** ; RECETTE/STABLE inchangées |
+| Contenu | Auto-session Pilote DEV fail-closed ; Git option A preflight/observe/bare harness (Studio non publisher) ; G15 FOR UPDATE + PG concurrent ; activityFlushQueue await ; A04 corrective intent ; next.config serverExternalPackages `@cursor/sdk` ; BROWSER Travail/Exécution/Résultats/sas |
+| Tests | Unit+PG ciblés **34 PASS** ; tsc PASS ; BROWSER snapshots OK ; F2 PNG **NOT PROVEN** (capture timeout) ; LIVE/REAL **NOT** |
+| Inventaire | **1 / 92 / 6** (was 1/81/17) |
+| Push projet | **NONE** |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CYCLE5-INTEGRATED-COMPLETION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Cycle 5 finalisation fonctionnelle intégrée |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY) |
+| Lane | DEV `sfia_next_dev` :5433 — mig **019** history_json |
+| Contenu | Travail ContractViewer 50/50 ; activité poll RUNNING ; mid-turn OBSERVED ; B1 assertPublicHttpsUrl+confront ; G15 requalify ; Cursor poll/reconcile UI ; preparedContract sur TurnResult |
+| Tests | Unit ciblés **22 PASS** ; PG dispatch **9 PASS** ; tsc PASS ; BROWSER/F2/LIVE **NOT PROVEN** |
+| Push projet | **NONE** |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-FUNCTIONAL-COMPLETION
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Complétude fonctionnelle, sécurisation et stabilisation |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` (DIRTY — cycles 3+4 non commités) |
+| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
+| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
+| Lane | DEV `sfia_next_dev` :5433 — RECETTE/STABLE inchangées |
+| Contenu | Inventaire Impl **1/74/24** (réconcilié explore) ; sendIntent pre-SDK ; tool-source-journal ; READY prepId persisté ; B1 public-web-search-frontier SCRIPTED ; activité OBSERVED sources ; DETERMINISTIC_SYNTHESIS ≠ NORA_COGNITIVE ; D8 critères sans preuve lexicale |
+| Tests | Unit ML5 **53 PASS** ; PG dispatch **9 PASS** ; tsc PASS ; BROWSER/F2/LIVE/REAL **NOT PROVEN** |
+| Push projet / PR / merge | **NONE** |
+| STABLE | NOT AVAILABLE |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |
+
+## delivery_id: DELIV-2026-11-23-ML5-CONVERGENCE-CONFORMITY
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-23 (Europe/Paris) |
+| Macro-lot | ML5 — Convergence fonctionnelle et conformité intégrée |
+| Type | CONSTRUCTION DEV · **NO RELEASE** |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD entrée | `6cf33e9923796974b9ee540a9c6ff27110342950` |
+| Base | `0f1d37c3b055371c84c1f30e9bebe3d0efee41b2` |
+| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
+| Lane | DEV only (`sfia_next_dev` :5433) — RECETTE/STABLE inchangées |
+| Contenu | CF-03 anti-duplicat ACK-lost ; CF-02 READY serveur ; provenance handoff ; Nora→contrat DRAFT bridge ; surfaces `execution`/`publication` ; onglets D8 Figma ; analyse cognitive Nora (dossier) ; docs acceptation/registre |
+| Tests | Unit ML5 **25 PASS** (fichiers ciblés) ; PG dispatch **8 PASS** incl. T-04 ACK-lost ; tsc PASS ; BROWSER/F2/LIVE/REAL **NOT PROVEN** |
+| Push projet / PR / merge | **NONE** |
+| STABLE | NOT AVAILABLE |
+| Verdict | **ML5 PARTIAL — GOVERNED GAPS** |
+
 ## delivery_id: DELIV-2026-11-23-ML5-INTEGRATION-CONSOLIDATION

 | Field | Value |
```

## 14. Review Handoff (à compléter après publish)

- Décision: required / publish-in-cycle
- Branche: sfia/review-handoff
- Fichier: sfia-review-handoff/latest-chatgpt-review.md
- Message: docs(review-handoff): publish Next ML5 C17 vertical cognitive convergence delivery

## 15. Instruction ChatGPT

Relire le fichier distant canonique `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` (SHA/blob post-publish) avant de statuer sur C17. Ne pas se fier uniquement à ce pack local. Vérifier cohérence cycle/HEAD et les quatre parcours. Verdict attendu côté revue indépendante.
