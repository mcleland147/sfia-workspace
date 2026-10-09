# SFIA Review Pack — FULL CRITICAL
# P6 Chat-First First Framing — Continuity Complement (CC-01 / CC-02 / CC-03)

## Meta
- Date / heure : 2026-10-09 22:50:26 CEST
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone : P6 — GLOBAL INTEGRATED PRODUCT QA
- Chantier : P6 Human QA — First Framing / Governed Lifecycle Continuity
- Cycle type : 8 — Delivery / implémentation
- Profil SFIA : Critical
- Typologie : INC / EVOL
- GO Morris consommé : Complément local CC-01/02/03 AUTORISÉ ; REAL / HQA REAL / push projet / PR / merge / Figma / doctrine NON
- Handoff parent : 74320685ff7f3d960dbe2a074cc21a0a730b9cf2
- Capacité : V3-F05 (+ F02 / F06)
- Lien Roadmap : P6 QA — pas de nouvelle vague

## Git truth
- Branche : qa/sfia-studio-p6-global-integrated-product-qa
- HEAD : db45e9c4c17cbe35dff543eee0f366af81026c55
- origin/main : 60247eb21074c5e7be76e09bcb66d850926ded1e
- Handoff connu : 74320685ff7f3d960dbe2a074cc21a0a730b9cf2
- Préservation : candidate Delivery + CP-01/02/03 + PR573 + C14 + p6-campaign + tmp — OUI
- Aucun staged projet

## Diagnostic
### CC-01 Réhydratation (confirmé puis corrigé)
- `refreshFramingContinuity` existait mais **n'était pas appelée au montage**.
- L'effet `[projectId, durableRefreshSignal]` ne chargeait que W2 subject/EC.
- **FIX** : nouvel effet Product-read au mount / project change / durableRefresh, avec `cancelled` + ignore réponse stale cross-project.

### CC-02 Sync post-START chat (confirmé puis corrigé)
- START carte → `refreshFramingContinuity` + clear.
- START message → succès `projectAssistantSendAction` **sans** relecture framing.
- **FIX** : après succès Send, si `result.project.activeCycleInstanceId` ou `qualification.cycleStatus==="active"` → `refreshFramingContinuity()` + `notifyDurableFactsChanged()` si activation nouvelle. Source : DTO Product / LPS, pas parsing prose.

### CC-03 Preuves
- Front-door **cyc:framing** (Cadrage catalogue + CKC product) via `projectAssistantSendAction`.
- Reprise Nora : corpus provider contient `activeCycleInstanceId`.
- Env `SFIA_STUDIO_CURSOR_REAL` capturée/restaurée.
- UI rehydrate harness + display projection.

## Findings
| ID | Statut |
|---|---|
| CC-01 | CORRIGÉ + PROUVÉ |
| CC-02 | CORRIGÉ + PROUVÉ |
| CC-03 | CORRIGÉ + PROUVÉ — **CADRAGE FRONT-DOOR E2E PROVEN** |

CP-01/02/03 : non refaits ; conservés fonctionnels.

## Fichiers
### Modifiés
- `useProductConversation.ts` — CC-01 effet + CC-02 sync Send
- `chatFirstFramingContinuity.ts` — `framingContinuityForConversationDisplay`

### Tests
- `chatFirstFramingContinuity.frontDoor.d0.test.ts` — Cadrage + env + Nora corpus
- `chatFirstFramingContinuity.d0.test.ts` — display helper
- `framingContinuityRehydrate.ui.test.tsx` — NEW CC-01/02 UI

### Non touchés
- orchestrateF2 / F01 gate / transitionReadiness / OA services
- ConversationSurface / FramingContinuityCard (déjà conformes)

## Contenu modifié exploitable

### chatFirstFramingContinuity.ts (FULL)
```ts
/**
 * P6 chat-first first Framing continuity — pure phase classification.
 * Does not mutate Product. Does not invent HumanDecision / START.
 *
 * Phases map Rec CURRENT → candidate → decision → prepared → active
 * using existing OA objects only.
 */

export type FramingContinuityPhase =
  | "idle"
  | "recommendation_ready"
  | "awaiting_trajectory_decision"
  | "trajectory_decided_prepare_cycle"
  | "ready_to_start"
  | "active"
  | "blocked_no_recommendation"
  | "blocked_stale_or_incomplete";

export type FramingContinuitySnapshot = {
  readonly phase: FramingContinuityPhase;
  readonly catalogLabel: string | null;
  readonly targetCycleTypeId: string | null;
  readonly recommendationId: string | null;
  readonly semanticKey: string | null;
  readonly trajectoryId: string | null;
  readonly trajectoryVersion: number | null;
  readonly presentationDigest: string | null;
  readonly approvalOptionLabel: string | null;
  readonly preparedCycleInstanceId: string | null;
  readonly activeCycleInstanceId: string | null;
  readonly hasCurrentNextCycleRecommendation: boolean;
  readonly message: string;
};

/** Pilot-facing copy — no internal governance jargon. */
export function framingContinuityPilotMessage(
  phase: FramingContinuityPhase,
  catalogLabel: string | null,
): string {
  const cycle = (catalogLabel ?? "").trim() || "Cadrage";
  switch (phase) {
    case "recommendation_ready":
      return `Je recommande de commencer par un « ${cycle} » exploratoire. Vous pouvez préparer cette direction, puis la valider avant tout démarrage.`;
    case "awaiting_trajectory_decision":
      return `La trajectoire proposée pour « ${cycle} » est prête à examiner. Validez cette direction pour continuer — un simple « ok » ne suffit pas.`;
    case "trajectory_decided_prepare_cycle":
      return `La direction pour « ${cycle} » est validée. Préparez le cycle, puis démarrez-le quand vous serez prêt.`;
    case "ready_to_start":
      return `Le cycle « ${cycle} » est prêt. Vous pouvez le démarrer dans la conversation.`;
    case "active":
      return `Le « ${cycle} » est maintenant actif.`;
    case "blocked_no_recommendation":
      return `Aucune recommandation courante n'est disponible pour préparer le premier cycle. Reformulez avec Nora.`;
    case "blocked_stale_or_incomplete":
      return `La recommandation ou la trajectoire n'est plus à jour. Aucun démarrage n'est engagé.`;
    case "idle":
    default:
      return "";
  }
}

/**
 * Projection for ConversationSurface — hide idle / blocked / already-active.
 * Pure; does not invent CURRENT. Active cycle is shown via LPS surfaces.
 */
export function framingContinuityForConversationDisplay(
  snap: FramingContinuitySnapshot | null | undefined,
): FramingContinuitySnapshot | null {
  if (!snap) return null;
  const phase = snap.phase;
  if (
    phase === "idle" ||
    phase === "blocked_no_recommendation" ||
    phase === "blocked_stale_or_incomplete" ||
    phase === "active"
  ) {
    return null;
  }
  return snap;
}

/**
 * Deterministic phase from already-loaded Product facts.
 * Callers must not invent CURRENT / digest / prepared ids.
 */
export function classifyFramingContinuityPhase(input: {
  readonly activeCycleInstanceId: string | null | undefined;
  readonly hasCurrentNextCycleRecommendation: boolean;
  readonly candidatePresent: boolean;
  readonly candidateProvenanceResolved: boolean;
  readonly awaitingDecisionPresentation: boolean;
  readonly decidedTrajectoryPresent: boolean;
  readonly preparedCompletePresent: boolean;
}): FramingContinuityPhase {
  const active = (input.activeCycleInstanceId ?? "").trim();
  if (active) return "active";
  if (input.preparedCompletePresent) return "ready_to_start";
  if (input.decidedTrajectoryPresent) return "trajectory_decided_prepare_cycle";
  if (input.awaitingDecisionPresentation) return "awaiting_trajectory_decision";
  if (input.candidatePresent && !input.candidateProvenanceResolved) {
    return "blocked_stale_or_incomplete";
  }
  if (input.hasCurrentNextCycleRecommendation) return "recommendation_ready";
  return "blocked_no_recommendation";
}

```

### useProductConversation.ts (diff CC)
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index 73225dc7..d485db6c 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -47,6 +47,8 @@ import type {
   ActiveDecisionSubjectReadResult,
   CurrentGovernedExecutionContinuityResult,
 } from "@/features/project-assistant/w2/types";
+import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
+import { framingContinuityForConversationDisplay } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
 
 export type ProductDecisionSubjectContinuity =
   | { readonly status: "pending" }
@@ -165,6 +167,13 @@ export function useProductConversation({
   const [governedMomentError, setGovernedMomentError] = useState<string | null>(
     null,
   );
+  /** P6 chat-first Framing continuity (Rec → traj decision → prepare → START). */
+  const [framingContinuity, setFramingContinuity] =
+    useState<FramingContinuitySnapshot | null>(null);
+  const [framingContinuityBusy, setFramingContinuityBusy] = useState(false);
+  const [framingContinuityError, setFramingContinuityError] = useState<
+    string | null
+  >(null);
   const [reservesText, setReservesText] = useState("");
   const [f3Prepare, setF3Prepare] = useState<F3PreparePayload | null>(null);
   const [f3M3Resolved, setF3M3Resolved] = useState<F3M3ResolvedPayload | null>(
@@ -221,6 +230,8 @@ export function useProductConversation({
 
   const listRef = useRef<HTMLDivElement | null>(null);
   const f3InFlightRef = useRef(false);
+  const projectIdRef = useRef(projectId);
+  projectIdRef.current = projectId;
   const onDurableFactsChangedRef = useRef(onDurableFactsChanged);
   const onDurableEvidenceOutcomeChangeRef = useRef(
     onDurableEvidenceOutcomeChange,
@@ -371,6 +382,122 @@ export function useProductConversation({
     };
   }, [projectId, durableRefreshSignal]);
 
+  // CC-01 — rehydrate Framing continuity from Product on mount / project change /
+  // durable refresh. Stale async responses for a prior projectId are ignored.
+  useEffect(() => {
+    let cancelled = false;
+    const requestProjectId = projectId;
+    setFramingContinuity(null);
+    setFramingContinuityError(null);
+    void (async () => {
+      try {
+        const { projectAssistantReadFramingContinuityAction } = await import(
+          "@/features/project-assistant/preCycleCandidateTrajectoryActions"
+        );
+        const result = await projectAssistantReadFramingContinuityAction({
+          projectId: requestProjectId,
+        });
+        if (cancelled || requestProjectId !== projectId) return;
+        if (!result.ok || !result.continuity) {
+          setFramingContinuity(null);
+          return;
+        }
+        setFramingContinuity(
+          framingContinuityForConversationDisplay(result.continuity),
+        );
+        setFramingContinuityError(null);
+      } catch {
+        if (cancelled || requestProjectId !== projectId) return;
+        setFramingContinuity(null);
+      }
+    })();
+    return () => {
+      cancelled = true;
+    };
+  }, [projectId, durableRefreshSignal]);
+
+  async function refreshFramingContinuity() {
+    const requestProjectId = projectId;
+    try {
+      const { projectAssistantReadFramingContinuityAction } = await import(
+        "@/features/project-assistant/preCycleCandidateTrajectoryActions"
+      );
+      const result = await projectAssistantReadFramingContinuityAction({
+        projectId: requestProjectId,
+      });
+      if (requestProjectId !== projectIdRef.current) return;
+      if (!result.ok || !result.continuity) {
+        setFramingContinuity(null);
+        return;
+      }
+      setFramingContinuity(
+        framingContinuityForConversationDisplay(result.continuity),
+      );
+      setFramingContinuityError(null);
+    } catch {
+      if (requestProjectId !== projectIdRef.current) return;
+      setFramingContinuity(null);
+    }
+  }
+
+  async function advanceFramingContinuity(
+    step:
+      | "prepare_candidate"
+      | "approve_candidate"
+      | "prepare_cycle"
+      | "start_prepared",
+  ) {
+    if (framingContinuityBusy) return;
+    setFramingContinuityBusy(true);
+    setFramingContinuityError(null);
+    try {
+      const { projectAssistantAdvanceFramingContinuityAction } = await import(
+        "@/features/project-assistant/preCycleCandidateTrajectoryActions"
+      );
+      const digest =
+        step === "approve_candidate"
+          ? (framingContinuity?.presentationDigest ?? undefined)
+          : undefined;
+      const result = await projectAssistantAdvanceFramingContinuityAction({
+        projectId,
+        step,
+        presentationDigest: digest,
+      });
+      if (!result.ok) {
+        setFramingContinuityError(
+          result.message ?? result.code ?? "Action refusée.",
+        );
+        await refreshFramingContinuity();
+        return;
+      }
+      if (result.continuity) setFramingContinuity(result.continuity);
+      else await refreshFramingContinuity();
+      notifyDurableFactsChanged();
+      await refreshGovernedMoments();
+      if (result.activeCycleInstanceId) {
+        const label =
+          result.continuity?.catalogLabel?.trim() ||
+          framingContinuity?.catalogLabel?.trim() ||
+          "Cadrage";
+        setMessages((prev) => [
+          ...prev,
+          {
+            id: nextId("system"),
+            role: "system",
+            content:
+              result.message?.trim() ||
+              `Le « ${label} » est maintenant actif. Vous pouvez poursuivre dans la conversation.`,
+          },
+        ]);
+        setFramingContinuity(null);
+      }
+    } catch {
+      setFramingContinuityError("Impossible d'avancer la continuité de cadrage.");
+    } finally {
+      setFramingContinuityBusy(false);
+    }
+  }
+
   async function refreshGovernedMoments() {
     try {
       const {
@@ -397,6 +524,7 @@ export function useProductConversation({
       } else {
         setGovernedExecutionContinuity(continuity);
       }
+      await refreshFramingContinuity();
     } catch {
       setGovernedMomentError("Impossible de relire le moment gouverné.");
     }
@@ -931,6 +1059,26 @@ export function useProductConversation({
         }),
       );
       setLrMaterializeCode(result.lifecycleRecommendationCode ?? null);
+      if (
+        result.lifecycleRecommendationMaterialized === true ||
+        result.lifecycleRecommendationCode
+      ) {
+        void refreshFramingContinuity();
+      }
+      // CC-02 — after chat START (or already-active), re-read Product continuity
+      // so the obsolete START card disappears. Driven by LPS/project DTO, not prose.
+      const resultActiveId = (
+        result.project.activeCycleInstanceId ?? ""
+      ).trim();
+      const priorActiveId = (activeCycleInstanceId ?? "").trim();
+      const cycleMarkedActive =
+        result.f2?.qualification?.cycleStatus === "active";
+      if (resultActiveId || cycleMarkedActive) {
+        void refreshFramingContinuity();
+        if (!priorActiveId || priorActiveId !== resultActiveId) {
+          notifyDurableFactsChanged();
+        }
+      }
       setToolEvents((prev) => [...prev, ...result.toolEvents]);
       setMessages((prev) => [
         ...prev,
@@ -1244,6 +1392,22 @@ export function useProductConversation({
     inspectGovernedContract,
     confirmGovernedContract,
     refreshGovernedMoments,
+    framingContinuity,
+    framingContinuityBusy,
+    framingContinuityError,
+    refreshFramingContinuity,
+    prepareFramingCandidate: () => {
+      void advanceFramingContinuity("prepare_candidate");
+    },
+    approveFramingCandidate: () => {
+      void advanceFramingContinuity("approve_candidate");
+    },
+    prepareFramingCycle: () => {
+      void advanceFramingContinuity("prepare_cycle");
+    },
+    startFramingPrepared: () => {
+      void advanceFramingContinuity("start_prepared");
+    },
     reservesText,
     setReservesText,
     f3Prepare,
```

### frontDoor test (FULL)
```ts
/** @vitest-environment node */
/**
 * P6 CP-02 — Chat-first Framing continuity via projectAssistantSendAction front-door.
 * Proves Rec → prepare → HD (server digest) → prepare cycle → START (F01) → LPS active
 * → next turn sees active cycle. ZERO REAL provider.
 *
 * Intentional: START analysis omits candidateCycleTypeId/signals so CP-01 is proven
 * (transitionReadiness alone would strand the turn).
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  setConversationProviderForTests,
  type ConversationProvider,
  type ProviderChatMessage,
  type ProviderCompletionResult,
  type ProviderInputItem,
  type ProviderRoundResult,
} from "@/lib/platform/ai";
import { projectAssistantSendAction } from "@/features/project-assistant/actions";
import {
  projectAssistantAdvanceFramingContinuityAction,
  projectAssistantReadFramingContinuityAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import { resetF2ProposalStoreForTests } from "@/features/project-assistant/f2/proposalStore";
import { resetMw5ChallengeStoreForTests } from "@/features/project-assistant/f2/mw5ChallengeSessionStore";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  resolveTrajectoryBootstrapPresence,
  classifyTrajectoryBinding,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import { W2_REGISTRY_ROOT, W2_SCHEMAS_ROOT } from "./w2Harness";
const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;
const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];
let previousPilot: string | undefined;
let previousMorris: string | undefined;
let previousCursorReal: string | undefined;

class FixedIdSource implements LocalProjectIdSource {
  private n = 0;
  constructor(private readonly prefix: string) {}
  nextProjectId(): string {
    this.n += 1;
    return `prj:${this.prefix}-${this.n}`;
  }
  nextLpsVersionId(): string {
    return `lps:${this.prefix}-${this.n}`;
  }
  nextCorrelationId(): string {
    return `cor:${this.prefix}-${this.n}`;
  }
}

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

/**
 * Fake Nora — for START utterances deliberately omits cycle/signals
 * so formalization readiness fails and CP-01 early F01 path is required.
 */
class FramingFrontDoorFakeProvider implements ConversationProvider {
  readonly providerId = "fake-test";
  private n = 0;
  lastUserBlobs: string[] = [];
  /** Full message blobs seen by the provider (for Nora context assertions). */
  lastMessageCorpus: string[] = [];

  async completeStructured(input: {
    messages: ProviderChatMessage[];
    schemaName: string;
    jsonSchema: Record<string, unknown>;
  }): Promise<ProviderCompletionResult> {
    void input.schemaName;
    void input.jsonSchema;
    return this.complete(input.messages);
  }

  async complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult> {
    this.n += 1;
    const current = demandeCourante(lastUserContent(messages));
    this.lastUserBlobs.push(current);
    this.lastMessageCorpus.push(
      messages.map((m) => `${m.role}:${m.content}`).join("\n"),
    );
    const usage = {
      inputTokens: 10,
      outputTokens: 5,
      totalTokens: 15,
      model: "fake-test-model",
      providerResponseId: `frm-fd-${this.n}`,
    };

    const isStart =
      /\b(je\s+(veux|souhaite)\s+(d[eé]marrer|lancer)|je\s+confirm\w*.*d[eé]marr)/i.test(
        current,
      );
    const isRefuse =
      /\b(refuse|finalement\s+je\s+refuse|ne\s+d[eé]marre)\b/i.test(current);
    const isMaybe = /\b(peut[- ]?être|éventuellement)\b/i.test(current);
    const isQuestion = /\?/.test(current) || /\b(est[- ]ce|quel\s+est)\b/i.test(current);

    // CP-01 proof: START without formalization fields.
    if (isStart && !isRefuse) {
      return {
        text: `[TEST/FAKE · NON LIVE] ${JSON.stringify({
          intentClass: "actionable",
          candidateCycleTypeId: null,
          signals: null,
          cognitiveWorkload: null,
          contradictionCandidate: null,
          challengeResponseAssessment: null,
          objective: null,
          scope: null,
          rephrasedRequest: current.slice(0, 120),
          outOfScope: [],
          risks: [],
          reservations: [],
          stopConditions: [],
          activatedBlocks: [],
          expectedOutcome: null,
          criticalJustification: null,
          requestedOperation: null,
          executionIntent: null,
          continuationKind: null,
          artifactMaterializationOperation: null,
          pilotDecisionCandidate: null,
        })}`,
        usage,
      };
    }

    const actionable = {
      intentClass: isQuestion ? "informative" : "actionable",
      // Product catalog Cadrage — CKC ckc:studio:framing in W2 product doctrine.
      candidateCycleTypeId: isQuestion ? null : "cyc:framing",
      signals: isQuestion
        ? null
        : {
            structuralChange: false,
            securityImpact: false,
            architectureImpact: false,
            dataImpact: false,
            irreversible: false,
            lowRiskBounded: true,
          },
      cognitiveWorkload: null,
      contradictionCandidate: null,
      challengeResponseAssessment: null,
      objective: "Explorer le cadrage",
      scope: "Sans exécution",
      rephrasedRequest: current.slice(0, 120),
      outOfScope: ["Cursor"],
      risks: [],
      reservations: [],
      stopConditions: ["AUCUNE EXÉCUTION"],
      activatedBlocks: ["qualification"],
      expectedOutcome: "Recommandation",
      criticalJustification: null,
      requestedOperation: null,
      executionIntent: null,
      continuationKind: null,
      artifactMaterializationOperation: null,
      pilotDecisionCandidate: isRefuse
        ? {
            disposition: "refuse",
            targetKind: "current_recommendation",
            rationale: "refuse",
          }
        : isMaybe
          ? {
              disposition: "ambiguous",
              targetKind: "current_recommendation",
              rationale: "maybe",
            }
          : {
              disposition: "accept",
              targetKind: "current_recommendation",
              rationale: "ok",
            },
    };
    return {
      text: `[TEST/FAKE · NON LIVE] ${JSON.stringify(actionable)}`,
      usage,
    };
  }

  async completeRound(input: {
    items: ProviderInputItem[];
    tools: unknown[];
  }): Promise<ProviderRoundResult> {
    void input.tools;
    return {
      kind: "message",
      text: "[TEST/FAKE · NON LIVE] framing-fd",
      usage: {
        inputTokens: 1,
        outputTokens: 1,
        totalTokens: 2,
        model: "fake-test-model",
        providerResponseId: "frm-fd-round",
      },
    };
  }
}

async function bootWithCurrentFramingRec(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  resetF2ProposalStoreForTests();
  resetMw5ChallengeStoreForTests();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "frm-fd-"));
  tempDirs.push(dir);
  const runtime = getRuntimeApplicationService({
    // Product doctrine registry — required for post-START Nora resume CKC.
    registryRoot: W2_REGISTRY_ROOT,
    schemasRoot: W2_SCHEMAS_ROOT,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`fd-${suffix}`),
    auditMode: "noop",
    productDbPath: path.join(dir, `${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Framing FD ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `FD${suffix}`,
    idempotencyKey: `idem:fd-${suffix}`,
  });
  if (!created.ok) throw new Error("create failed");
  const projectId = created.projectId;
  const oa = runtime.oa;
  const cycles = await oa.cycleServices.cycles.listByProject(projectId);
  const decisions = await oa.decisionServices.decisions.listByProject(projectId);
  const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
    projectId,
  });
  if (!lps.ok) throw new Error("lps missing");
  const presence = await resolveTrajectoryBootstrapPresence(
    oa.cycleServices.trajectories,
    projectId,
  );
  const project = await oa.projectServices.getProject.execute({ projectId });
  const doctrine =
    (project.ok ? project.project.doctrinePackageRef : null) ?? VALID_PIN;
  const mat = await materializeLifecycleRecommendationFromStructuredOutput({
    projectId,
    structuredOutput: {
      narrative: "Narrative Cadrage recommandée.",
      preCycleRoutingAssessment: {
        ...PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT,
      },
      lifecycleRecommendation: {
        intent: "NEXT_CYCLE" as const,
        statement: "Envisager un Cadrage.",
        subjectCycleInstanceId: null,
        targetCycleInstanceId: null,
        targetCycleTypeId: "cyc:framing",
        rationale: "Prochain travail gouverné supportable.",
        authority: "none" as const,
        isHumanDecision: false as const,
        qualificationSignals: {
          structuralChange: false,
          securityImpact: false,
          architectureImpact: false,
          dataImpact: false,
          irreversible: false,
          lowRiskBounded: true,
        },
      },
    },
    updateEpistemicState: oa.cycleServices.updateEpistemicState,
    facts: {
      cycles,
      lpsActiveCycleInstanceId: lps.livingProjectState.activeCycleInstanceId,
      lpsVersion: lps.livingProjectState.version,
      doctrinePackageId: doctrine.doctrinePackageId,
      doctrinePackageVersion: doctrine.version,
      doctrinePackageDigest: doctrine.digest,
      trajectory: null,
      trajectoryBootstrapPresence: presence,
      decisions,
      evidence: [],
      epistemicItems: await oa.cycleServices.epistemic.listByProject(projectId),
    },
    producedAt: "2026-09-09T20:01:00.000Z",
    createdBy: NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  });
  expect(mat.materialization?.ok).toBe(true);
  return {
    runtime,
    projectId,
    sessionDbPath: path.join(dir, `${suffix}-session.sqlite`),
  };
}

describe("chat-first Framing continuity — projectAssistantSendAction front-door", () => {
  const provider = new FramingFrontDoorFakeProvider();

  beforeEach(() => {
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    previousMorris = process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    previousCursorReal = process.env.SFIA_STUDIO_CURSOR_REAL;
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
    process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
    process.env.SFIA_STUDIO_CURSOR_REAL = "0";
    setConversationProviderForTests(provider);
    provider.lastUserBlobs = [];
    provider.lastMessageCorpus = [];
  });

  afterEach(() => {
    setConversationProviderForTests(null);
    resetRuntimeApplicationServiceForTests();
    resetF2ProposalStoreForTests();
    resetMw5ChallengeStoreForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
    if (previousMorris === undefined) {
      delete process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = previousMorris;
    }
    if (previousCursorReal === undefined) {
      delete process.env.SFIA_STUDIO_CURSOR_REAL;
    } else {
      process.env.SFIA_STUDIO_CURSOR_REAL = previousCursorReal;
    }
  });

  it("Rec CURRENT → prepare → HD → prepare → START via send (no signals) → LPS + Nora resume context", async () => {
    const { runtime, projectId, sessionDbPath } =
      await bootWithCurrentFramingRec("e2e");
    const oa = runtime.oa!;

    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.continuity?.phase).toBe("recommendation_ready");
    expect(before.continuity?.hasCurrentNextCycleRecommendation).toBe(true);

    // Progress intent — prepare candidate (no HD)
    const progress = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation de Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(progress.ok).toBe(true);
    const afterPrep = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterPrep.continuity?.phase).toBe("awaiting_trajectory_decision");
    expect(afterPrep.continuity?.presentationDigest).toBeTruthy();

    // Accept recommendation again must NOT invent HD / START
    const okRec = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation.",
      sessionDbPath,
      provider,
    });
    expect(okRec.ok).toBe(true);
    if (okRec.ok) {
      expect(okRec.text).not.toMatch(/est maintenant actif/i);
    }
    const lpsIdle = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lpsIdle.ok).toBe(true);
    if (lpsIdle.ok) {
      expect(lpsIdle.livingProjectState.activeCycleInstanceId ?? null).toBeNull();
    }

    // Explicit HD via Product server action (same seam as the card) — digest from server
    const approved = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: afterPrep.continuity!.presentationDigest!,
    });
    expect(approved.ok).toBe(true);
    expect(
      approved.continuity?.phase === "ready_to_start" ||
        approved.continuity?.phase === "trajectory_decided_prepare_cycle",
    ).toBe(true);
    if (approved.continuity?.phase === "trajectory_decided_prepare_cycle") {
      const prep = await projectAssistantAdvanceFramingContinuityAction({
        projectId,
        step: "prepare_cycle",
      });
      expect(prep.ok).toBe(true);
      expect(prep.continuity?.phase).toBe("ready_to_start");
    }

    const ready = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(ready.continuity?.phase).toBe("ready_to_start");
    expect(ready.continuity?.preparedCycleInstanceId).toBeTruthy();

    // Adversarial: recommendation accept while ready → no START
    const noStartFromRec = await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation.",
      sessionDbPath,
      provider,
    });
    expect(noStartFromRec.ok).toBe(true);
    if (noStartFromRec.ok) {
      expect(noStartFromRec.text).not.toMatch(/est maintenant actif/i);
    }

    // Adversarial: hypothetical
    const maybe = await projectAssistantSendAction({
      projectId,
      content: "Démarre peut-être le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(maybe.ok).toBe(true);
    if (maybe.ok) {
      expect(maybe.text).not.toMatch(/est maintenant actif/i);
    }

    // Adversarial: late refuse
    const refuse = await projectAssistantSendAction({
      projectId,
      content: "Je confirme, mais finalement je refuse.",
      sessionDbPath,
      provider,
    });
    expect(refuse.ok).toBe(true);
    if (refuse.ok) {
      expect(refuse.text).not.toMatch(/est maintenant actif/i);
    }

    // Adversarial: question
    const question = await projectAssistantSendAction({
      projectId,
      content: "Quel est l'état du Cadrage ?",
      sessionDbPath,
      provider,
    });
    expect(question.ok).toBe(true);
    if (question.ok) {
      expect(question.text).not.toMatch(/est maintenant actif/i);
    }

    const stillReady = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(stillReady.continuity?.phase).toBe("ready_to_start");

    // CP-01 / CP-02 — explicit START through front-door with missing signals
    const start = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (!start.ok) throw new Error("start failed");
    expect(start.text).toMatch(/est maintenant actif/i);
    expect(start.project.activeCycleInstanceId).toBeTruthy();
    expect(start.f2?.turnKind).toBe("f1_informative");

    const lps = await oa.projectServices.getCurrentLivingProjectState.execute({
      projectId,
    });
    expect(lps.ok).toBe(true);
    if (!lps.ok) throw new Error("lps");
    expect(lps.livingProjectState.activeCycleInstanceId).toBe(
      start.project.activeCycleInstanceId,
    );

    const cycles = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cycles).toHaveLength(1);
    expect(cycles[0]!.status).toBe("active");
    expect(classifyTrajectoryBinding(cycles[0]!)).toBe(
      "COMPLETE_TRAJECTORY_BOUND",
    );
    expect(classifyTrajectoryBinding(cycles[0]!)).not.toBe("LEGACY_UNBOUND");

    // Idempotent second START
    const again = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    if (!again.ok) {
      throw new Error(
        `second START unexpected failure: ${again.code ?? ""} ${again.message ?? again.status}`,
      );
    }
    expect(again.text).toMatch(/déjà actif|maintenant actif/i);
    const cyclesFinal = await oa.cycleServices.cycles.listByProject(projectId);
    expect(cyclesFinal).toHaveLength(1);

    // CP-03 — next deterministic turn consumes active cycle context
    const resume = await projectAssistantSendAction({
      projectId,
      content: "Quel est l'état du Cadrage ?",
      sessionDbPath,
      provider,
    });
    if (!resume.ok) {
      throw new Error(
        `resume turn unexpected failure: ${resume.code ?? ""} ${resume.message ?? resume.status}`,
      );
    }
    expect(resume.project.activeCycleInstanceId).toBe(
      lps.livingProjectState.activeCycleInstanceId,
    );
    // Nora resume: provider corpus for the resume turn must see the active cycle.
    const resumeCorpus = provider.lastMessageCorpus.at(-1) ?? "";
    expect(resumeCorpus.length).toBeGreaterThan(0);
    expect(resumeCorpus).toMatch(
      new RegExp(
        (lps.livingProjectState.activeCycleInstanceId ?? "").replace(
          /[.*+?^${}()|[\]\\]/g,
          "\\$&",
        ),
      ),
    );
    // Display projection: active → no START card
    const afterActive = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(afterActive.continuity?.phase).toBe("active");
    const { framingContinuityForConversationDisplay } = await import(
      "@/features/project-assistant/f2/chatFirstFramingContinuity"
    );
    expect(
      framingContinuityForConversationDisplay(afterActive.continuity),
    ).toBeNull();
  });

  it("START without prepared cycle fails closed via front-door", async () => {
    const { projectId, sessionDbPath } = await bootWithCurrentFramingRec("noprep");
    const start = await projectAssistantSendAction({
      projectId,
      content: "Je souhaite démarrer le Cadrage.",
      sessionDbPath,
      provider,
    });
    expect(start.ok).toBe(true);
    if (start.ok) {
      expect(start.text).not.toMatch(/est maintenant actif/i);
      expect(start.project.activeCycleInstanceId).toBeFalsy();
    }
  });

  it("stale digest never records HD", async () => {
    const { projectId, sessionDbPath } = await bootWithCurrentFramingRec("stale");
    await projectAssistantSendAction({
      projectId,
      content: "OK, poursuivons la recommandation de Cadrage.",
      sessionDbPath,
      provider,
    });
    const stale = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest:
        "sha256:deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    });
    expect(stale.ok).toBe(false);
    const snap = await projectAssistantReadFramingContinuityAction({ projectId });
    expect(snap.continuity?.phase).toBe("awaiting_trajectory_decision");
  });
});

```

### framingContinuityRehydrate.ui.test.tsx (FULL)
```tsx
/** @vitest-environment jsdom */
/**
 * CC-01 / CC-02 — Framing continuity rehydration + post-START display sync.
 * Mirrors the Product-read → display projection used by useProductConversation.
 */
import React, { useEffect, useState } from "react";
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { cleanup, render, screen, waitFor } from "@testing-library/react";
import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import { framingContinuityForConversationDisplay } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import { FramingContinuityCard } from "@/features/pre-m6-product-ui/surfaces/FramingContinuityCard";

const readFraming = vi.fn();

vi.mock(
  "@/features/project-assistant/preCycleCandidateTrajectoryActions",
  () => ({
    projectAssistantReadFramingContinuityAction: (...args: unknown[]) =>
      readFraming(...args),
    projectAssistantAdvanceFramingContinuityAction: vi.fn(),
  }),
);

function snap(
  phase: FramingContinuitySnapshot["phase"],
): FramingContinuitySnapshot {
  return {
    phase,
    catalogLabel: "Cadrage",
    targetCycleTypeId: "cyc:framing",
    recommendationId: "rec:1",
    semanticKey: "sk:1",
    trajectoryId: "trj:1",
    trajectoryVersion: 1,
    presentationDigest:
      phase === "awaiting_trajectory_decision" ? "sha256:abc" : null,
    approvalOptionLabel: "Valider cette direction pour « Cadrage ».",
    preparedCycleInstanceId: phase === "ready_to_start" ? "cyc:prep" : null,
    activeCycleInstanceId: phase === "active" ? "cyc:live" : null,
    hasCurrentNextCycleRecommendation: true,
    message: `phase:${phase}`,
  };
}

/** Minimal rehydrate harness mirroring CC-01 effect in useProductConversation. */
function FramingRehydrateHarness({
  projectId,
  refreshSignal = 0,
}: {
  projectId: string;
  refreshSignal?: number;
}) {
  const [continuity, setContinuity] =
    useState<FramingContinuitySnapshot | null>(null);

  useEffect(() => {
    let cancelled = false;
    const requestProjectId = projectId;
    setContinuity(null);
    void (async () => {
      const result = await readFraming({ projectId: requestProjectId });
      if (cancelled) return;
      if (!result.ok || !result.continuity) {
        setContinuity(null);
        return;
      }
      setContinuity(framingContinuityForConversationDisplay(result.continuity));
    })();
    return () => {
      cancelled = true;
    };
  }, [projectId, refreshSignal]);

  if (!continuity) {
    return <div data-testid="framing-empty">empty</div>;
  }
  return (
    <div data-testid="framing-slot">
      <FramingContinuityCard
        continuity={continuity}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
      />
    </div>
  );
}

afterEach(() => {
  cleanup();
  readFraming.mockReset();
});

describe("Framing continuity rehydrate / post-START sync", () => {
  beforeEach(() => {
    readFraming.mockReset();
  });

  it("CC-01 — mounts with ready_to_start card from Product read (no prior action)", async () => {
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("ready_to_start"),
    });
    render(<FramingRehydrateHarness projectId="prj:a" />);
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
        "data-phase",
        "ready_to_start",
      );
    });
    expect(readFraming).toHaveBeenCalledWith({ projectId: "prj:a" });
    expect(screen.getByTestId("framing-continuity-primary").textContent).toMatch(
      /Démarrer/,
    );
  });

  it("CC-01 — remount / refreshSignal rebuilds awaiting decision from Product", async () => {
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("awaiting_trajectory_decision"),
    });
    const { rerender } = render(
      <FramingRehydrateHarness projectId="prj:a" refreshSignal={0} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
        "data-phase",
        "awaiting_trajectory_decision",
      );
    });
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("recommendation_ready"),
    });
    rerender(<FramingRehydrateHarness projectId="prj:a" refreshSignal={1} />);
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
        "data-phase",
        "recommendation_ready",
      );
    });
  });

  it("CC-02 — active Product phase clears START card after sync", async () => {
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("ready_to_start"),
    });
    const { rerender } = render(
      <FramingRehydrateHarness projectId="prj:a" refreshSignal={0} />,
    );
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toBeTruthy();
    });
    readFraming.mockResolvedValue({
      ok: true,
      continuity: snap("active"),
    });
    rerender(<FramingRehydrateHarness projectId="prj:a" refreshSignal={1} />);
    await waitFor(() => {
      expect(screen.getByTestId("framing-empty")).toBeTruthy();
    });
    expect(screen.queryByTestId("framing-continuity-card")).toBeNull();
  });

  it("CC-01 — project change ignores stale late response from prior project", async () => {
    let resolveA: (v: unknown) => void = () => {};
    const pendingA = new Promise((resolve) => {
      resolveA = resolve;
    });
    readFraming.mockImplementation(({ projectId }: { projectId: string }) => {
      if (projectId === "prj:a") return pendingA;
      return Promise.resolve({
        ok: true,
        continuity: snap("ready_to_start"),
      });
    });
    const { rerender } = render(<FramingRehydrateHarness projectId="prj:a" />);
    rerender(<FramingRehydrateHarness projectId="prj:b" />);
    await waitFor(() => {
      expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
        "data-phase",
        "ready_to_start",
      );
    });
    resolveA({
      ok: true,
      continuity: {
        ...snap("awaiting_trajectory_decision"),
        catalogLabel: "STALE-A",
      },
    });
    await new Promise((r) => setTimeout(r, 30));
    expect(
      screen.getByTestId("framing-continuity-title").textContent,
    ).not.toMatch(/STALE-A/);
  });
});

```

## Tests
```
cd projects/sfia-studio/app
npx vitest run \
  __tests__/project-assistant/chatFirstFramingContinuity.d0.test.ts \
  __tests__/project-assistant/chatFirstFramingContinuity.frontDoor.d0.test.ts \
  __tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx \
  __tests__/pre-m6-product-ui/framingContinuityRehydrate.ui.test.tsx \
  __tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts \
  __tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts \
  __tests__/project-assistant/candidateTrajectoryHumanDecision.d0.test.ts \
  __tests__/project-assistant/candidateTrajectoryCycleStart.d0.test.ts \
  __tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
```
Résultat : **9 files / 94 tests PASS**

Typecheck Delivery : 0 erreur ; p6-campaign untracked : 4 erreurs baseline

## Preuves
- **PERSISTENT CONTINUITY DETERMINISTIC PROVEN** (mount / refresh / stale race)
- **START CHAT/UI SYNC PROVEN** (active → card null ; notifyDurable)
- **CADRAGE FRONT-DOOR E2E PROVEN** (cyc:framing + « Je souhaite démarrer le Cadrage »)
- Nora resume : activeCycleInstanceId dans corpus provider du tour suivant
- Env isolation : CURSOR_REAL / PILOT / MORRIS restored

## Figma / runtime
- Captures Figma locales antérieures conservées sous `.tmp-sfia-review/figma/`
- Runtime :3020 down → **REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED** (visuel fort seulement)

## Fake / Real
- Niveau : PERSISTENT CONTINUITY + START CHAT/UI SYNC + CADRAGE FRONT-DOOR DETERMINISTIC
- REAL provider : aucun
- SFIA_STUDIO_CURSOR_REAL config réelle : inchangée
- REC-01 CURRENT REAL : OPEN
- Hors scope : REAL BOUNDARY / E2E REAL / P6 PASS / Runtime v3 ADOPTED

## Réserves
1. Screenshot runtime manquant
2. REC-01 REAL OPEN
3. Human QA navigateur non rejoué
4. Provider Nora REAL non rejoué

## Dette / exit
Aucune architecture parallèle. Aucune persistence cliente nouvelle.

## Gates Morris
1. Revue Critical de cette candidate
2. GO Human QA REAL distinct
3. Intégration Git distincte

## Verdict
**LOCAL FRAMING CONTINUITY CANDIDATE — READY FOR CRITICAL REVIEW**

READY WITH RESERVES (visuel runtime + REC-01 + REAL)

## Instruction ChatGPT (§9.1)
Lire exclusivement `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` au SHA publié.
Qualifier CC-01/02/03, CADRAGE front-door, sync START chat/UI, absence d'architecture parallèle.
Pas de merge/PR/REAL sans nouveau GO Morris.
