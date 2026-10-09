# SFIA Review Pack — FULL CRITICAL
# P6 Chat-First First Framing E2E Delivery (Option 1)

## Meta
- Date / heure : 2026-10-09 22:14:47 CEST
- Macro : STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
- Milestone : P6 — GLOBAL INTEGRATED PRODUCT QA
- Campagne : P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
- Chantier : P6 Human QA — First Framing / Governed Lifecycle Continuity
- Cycle type : 8 — Delivery / implémentation
- Profil SFIA : Critical
- Typologie : INC / EVOL
- GO Morris consommé : Delivery end-to-end Option 1 AUTORISÉ ; contrat UX Figma P3-native VALIDÉ VISUELLEMENT ; REAL provider NON ; push projet / PR / merge NON ; doctrine/Roadmap/C1 NON ; pivot architecture NON
- Capacité principale : V3-F05 (conversation → décision → exécution gouvernée)
- Capacités contributrices : V3-F02, V3-F06, V3-F11/F12
- Lien Roadmap : P6 QA existant — pas de nouvelle vague Product

## Git truth (entrée)
- Repository : /Users/morris/Projects/sfia-workspace
- Branche : qa/sfia-studio-p6-global-integrated-product-qa
- HEAD : db45e9c4c17cbe35dff543eee0f366af81026c55
- origin/main : 60247eb21074c5e7be76e09bcb66d850926ded1e
- Dernier handoff distant (avant ce cycle) : sfia/review-handoff @ 805ed390d676847adbedd6a17495007fd0d4e624
- Status entrée (exact, non inventé) :
```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
 M projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md
(+ delivery mods below; untracked campaign/tmp preserved)
?? projects/.tmp-sfia-review/
?? projects/sfia-studio/app/__tests__/p6-campaign/
(+ nouveaux fichiers Delivery listés ci-dessous)
```
- Préservation : CANDIDATE — artefacts campagne / C14 / tmp / p6-campaign / SQLite Human QA NON touchés
- PR #573 (REC-01 prompt) : présent sur origin/main (60247eb21074c5e7be76e09bcb66d850926ded1e) ; fichiers locaux `buildProjectSystemPrompt.ts` + `qualToGovernedCycle.presentation.d0.test.ts` préexistants / hors scope Delivery framing — préservés, non inventés ici

## Sources chargées / qualifiées
- Template cycle, Routing Guide, Operating Model, Rules, v2.5 cycles — contextual process
- Build Doctrine / Roadmap / C1 — READ-ONLY, non modifiés
- Doctrine v3 F05/F02/F06/F11/F12 + CKC Delivery — VALIDATED cognitive, no extra exec authority
- Product Simplification P1/P2/P3/P6 — cadence
- Review handoff précédent : ROOT CAUSE CONFIRMED — E2E CORRECTION PROPOSAL READY (805ed390)
- Figma file m4g8j0gNbEzfIuH6S9AZJF — screenshots MCP 378:2 / 380:2 capturés sous `.tmp-sfia-review/figma/`

## Chemin critique raccordé (Option 1 — réutilisation OA)
```
LifecycleRecommendation CURRENT NEXT_CYCLE
  → projectAssistantAdvanceFramingContinuity(prepare_candidate)
  → ApprovalPresentation + server digest
  → FramingContinuityCard / conversation (explicit HD CTA)
  → approve_candidate (digest required; never invented)
  → prepareCycleFromValidatedTrajectory (deterministic follow-up)
  → ready_to_start
  → start_prepared (UI card) OR existing F01 chat gate (orchestrateF2 leaves ready_to_start to F01)
  → LPS / CycleInstance re-read → active
  → Nora resume on Framing
```

## Fichiers Delivery
### Nouveaux
1. `projects/sfia-studio/app/features/project-assistant/f2/chatFirstFramingContinuity.ts`
2. `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/FramingContinuityCard.tsx`
3. `projects/sfia-studio/app/__tests__/project-assistant/chatFirstFramingContinuity.d0.test.ts`
4. `projects/sfia-studio/app/__tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx`

### Modifiés (scope Delivery)
5. `preCycleCandidateTrajectoryActions.ts` — Read/Advance framing continuity actions
6. `orchestrateF2.ts` — early bridge Rec→prepare / refuse auto-HD / prepare_cycle ; **ne vole pas** ready_to_start à F01
7. `useProductConversation.ts` — state + refresh/advance + handlers
8. `ConversationSurface.tsx` — inline slot + FramingContinuityCard

### Hors Delivery (préservés)
- `buildProjectSystemPrompt.ts`, `qualToGovernedCycle.presentation.d0.test.ts` (REC-01 / PR573)
- `p6-qa-integration-state-and-reserves.md` (C14)
- `.tmp-sfia-review/*`, `p6-campaign/*`

## Contenu modifié exploitable

### NEW FILE — chatFirstFramingContinuity.ts
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

export function framingContinuityPilotMessage(
  phase: FramingContinuityPhase,
  catalogLabel: string | null,
): string {
  const cycle = (catalogLabel ?? "").trim() || "Cadrage";
  switch (phase) {
    case "recommendation_ready":
      return `Une recommandation CURRENT pour « ${cycle} » est disponible. Préparez la trajectoire initiale dans la conversation, puis décidez explicitement avant tout démarrage.`;
    case "awaiting_trajectory_decision":
      return `La trajectoire candidate pour « ${cycle} » est prête. Validez-la explicitement (HumanDecision) — un simple « ok go » ne constitue pas une décision.`;
    case "trajectory_decided_prepare_cycle":
      return `La trajectoire pour « ${cycle} » est décidée. Préparez le cycle lié, puis démarrez sous le gate F01.`;
    case "ready_to_start":
      return `Le cycle « ${cycle} » est préparé et lié à la trajectoire. Vous pouvez le démarrer dans la conversation.`;
    case "active":
      return `Le cycle « ${cycle} » est actif. Nora peut reprendre le travail de cadrage.`;
    case "blocked_no_recommendation":
      return `Aucune Recommendation CURRENT NEXT_CYCLE n'est disponible pour préparer le premier cycle. Reformulez avec Nora — aucune valeur de qualification n'est inventée.`;
    case "blocked_stale_or_incomplete":
      return `La recommandation ou la trajectoire n'est pas dans un état préparable (stale / incomplet). Aucun démarrage n'est engagé.`;
    case "idle":
    default:
      return "";
  }
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

### NEW FILE — FramingContinuityCard.tsx
```tsx
"use client";

/**
 * P6 chat-first Framing continuity card — inline ConversationSurface.
 * Pure projection + authorized callbacks. Does not invent HD / START.
 * Visual language aligns with P3 GovernedDecisionCard / Recommendation frames.
 */

import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import styles from "./GovernedDecisionCard.module.css";

export type FramingContinuityCardProps = {
  readonly continuity: FramingContinuitySnapshot;
  readonly busy: boolean;
  readonly error: string | null;
  readonly onPrepareCandidate: () => void;
  readonly onApproveCandidate: () => void;
  readonly onPrepareCycle: () => void;
  readonly onStartPrepared: () => void;
  readonly onKeepExploring?: () => void;
};

export function FramingContinuityCard({
  continuity,
  busy,
  error,
  onPrepareCandidate,
  onApproveCandidate,
  onPrepareCycle,
  onStartPrepared,
  onKeepExploring,
}: FramingContinuityCardProps) {
  const cycle = (continuity.catalogLabel ?? "").trim() || "Cadrage";
  const phase = continuity.phase;

  if (phase === "idle" || phase === "active") {
    return null;
  }

  const title =
    phase === "recommendation_ready"
      ? `Poursuivre vers « ${cycle} »`
      : phase === "awaiting_trajectory_decision"
        ? `Décider la trajectoire pour « ${cycle} »`
        : phase === "trajectory_decided_prepare_cycle"
          ? `Préparer le cycle « ${cycle} »`
          : phase === "ready_to_start"
            ? `Démarrer « ${cycle} »`
            : continuity.message || "État de cadrage";

  const optionBody =
    phase === "awaiting_trajectory_decision"
      ? continuity.approvalOptionLabel?.trim() ||
        `Valider la trajectoire initiale recommandée pour « ${cycle} ».`
      : continuity.message;

  const primaryLabel =
    phase === "recommendation_ready"
      ? busy
        ? "Préparation…"
        : "Préparer la trajectoire"
      : phase === "awaiting_trajectory_decision"
        ? busy
          ? "Enregistrement…"
          : "Valider cette trajectoire"
        : phase === "trajectory_decided_prepare_cycle"
          ? busy
            ? "Préparation…"
            : "Préparer le cycle"
          : phase === "ready_to_start"
            ? busy
              ? "Démarrage…"
              : "Démarrer le cycle"
            : null;

  const primaryDisabled =
    busy ||
    (phase === "awaiting_trajectory_decision" &&
      !continuity.presentationDigest) ||
    phase === "blocked_no_recommendation" ||
    phase === "blocked_stale_or_incomplete";

  function onPrimary() {
    if (phase === "recommendation_ready") onPrepareCandidate();
    else if (phase === "awaiting_trajectory_decision") onApproveCandidate();
    else if (phase === "trajectory_decided_prepare_cycle") onPrepareCycle();
    else if (phase === "ready_to_start") onStartPrepared();
  }

  return (
    <section
      className={styles.card}
      data-testid="framing-continuity-card"
      data-phase={phase}
      aria-labelledby="framing-continuity-title"
    >
      <p className={styles.label}>
        {phase === "awaiting_trajectory_decision" ? "Décision" : "Recommandation"}
      </p>
      <h3
        id="framing-continuity-title"
        className={styles.title}
        data-testid="framing-continuity-title"
      >
        {title}
      </h3>
      <p className={styles.youDecide} data-testid="framing-continuity-authority">
        Recommendation ≠ HumanDecision ≠ START
      </p>
      <div className={styles.optionBlock}>
        <p className={styles.optionEyebrow}>Prochaine étape gouvernée</p>
        <p className={styles.optionBody} data-testid="framing-continuity-body">
          {optionBody}
        </p>
      </div>
      {error ? (
        <p
          className={styles.error}
          role="alert"
          data-testid="framing-continuity-error"
        >
          {error}
        </p>
      ) : null}
      <div className={styles.actions}>
        {primaryLabel ? (
          <button
            type="button"
            className={styles.primary}
            data-testid="framing-continuity-primary"
            disabled={primaryDisabled}
            onClick={onPrimary}
          >
            {primaryLabel}
          </button>
        ) : null}
        {onKeepExploring &&
        (phase === "recommendation_ready" ||
          phase === "awaiting_trajectory_decision") ? (
          <button
            type="button"
            className={styles.tertiary}
            data-testid="framing-continuity-keep-exploring"
            disabled={busy}
            onClick={onKeepExploring}
          >
            Continuer à explorer
          </button>
        ) : null}
      </div>
    </section>
  );
}

```

### NEW FILE — chatFirstFramingContinuity.d0.test.ts
```ts
/** @vitest-environment node */
/**
 * P6 chat-first Framing continuity — pure phase + OA front-door reuse.
 * ZERO REAL / ZERO provider.
 */
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import {
  materializeLifecycleRecommendationFromStructuredOutput,
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR,
  resolveTrajectoryBootstrapPresence,
} from "@/lib/oa/cycle";
import { PRE_CYCLE_ROUTING_ASSESSMENT_READY_TO_EMIT } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { Digest, DoctrinePackagePin } from "@/lib/oa/doctrine";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";
import type { LocalProjectIdSource } from "@/lib/vertical-slice-core";
import {
  classifyFramingContinuityPhase,
  framingContinuityPilotMessage,
} from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import {
  projectAssistantAdvanceFramingContinuityAction,
  projectAssistantReadFramingContinuityAction,
} from "@/features/project-assistant/preCycleCandidateTrajectoryActions";

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

const VALID_DIGEST =
  "sha256:3b4507505ddad333cd16730fcddf466aae24bc123b48e6a8c956c2e5cd9ac622" as Digest;

const VALID_PIN: DoctrinePackagePin = {
  doctrinePackageId: "pkg:studio-v3-oa",
  version: "1.0.0",
  digest: VALID_DIGEST,
};

const tempDirs: string[] = [];
let previousPilot: string | undefined;

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

function nextCycleLr(targetCycleTypeId: string, statement: string) {
  return {
    intent: "NEXT_CYCLE" as const,
    statement,
    subjectCycleInstanceId: null,
    targetCycleInstanceId: null,
    targetCycleTypeId,
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
  };
}

async function bootWithCurrentFramingRec(suffix: string) {
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
  process.env.SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY = "1";
  process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  resetRuntimeApplicationServiceForTests();
  const dir = fs.mkdtempSync(path.join(os.tmpdir(), "framing-cont-"));
  tempDirs.push(dir);
  const runtime = getRuntimeApplicationService({
    registryRoot: FIXTURES,
    schemasRoot: SCHEMAS,
    nowIso: "2026-09-09T20:00:00.000Z",
    idSource: new FixedIdSource(`frm-${suffix}`),
    auditMode: "noop",
    productDbPath: path.join(dir, `${suffix}.sqlite`),
  });
  if (!runtime.oa) throw new Error("oa missing");
  const created = await runtime.createProject({
    name: `Framing continuity ${suffix}`,
    objective: "gestion de tâches",
    context: "application web personnelle",
    criticality: "STANDARD",
    constraints: [],
    shortReference: `FRM${suffix}`,
    idempotencyKey: `idem:frm-${suffix}`,
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
      lifecycleRecommendation: nextCycleLr(
        "cyc:framing",
        "Envisager un Cadrage.",
      ),
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
  return { runtime, projectId };
}

describe("classifyFramingContinuityPhase", () => {
  it("orders active > prepared > decided > awaiting > recommendation", () => {
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: "cyc:1",
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: true,
        candidateProvenanceResolved: true,
        awaitingDecisionPresentation: true,
        decidedTrajectoryPresent: true,
        preparedCompletePresent: true,
      }),
    ).toBe("active");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: true,
        candidateProvenanceResolved: true,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: true,
      }),
    ).toBe("ready_to_start");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: false,
        candidateProvenanceResolved: false,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: true,
        preparedCompletePresent: false,
      }),
    ).toBe("trajectory_decided_prepare_cycle");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: true,
        candidateProvenanceResolved: true,
        awaitingDecisionPresentation: true,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: false,
      }),
    ).toBe("awaiting_trajectory_decision");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: true,
        candidatePresent: false,
        candidateProvenanceResolved: false,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: false,
      }),
    ).toBe("recommendation_ready");
    expect(
      classifyFramingContinuityPhase({
        activeCycleInstanceId: null,
        hasCurrentNextCycleRecommendation: false,
        candidatePresent: false,
        candidateProvenanceResolved: false,
        awaitingDecisionPresentation: false,
        decidedTrajectoryPresent: false,
        preparedCompletePresent: false,
      }),
    ).toBe("blocked_no_recommendation");
  });

  it("messages never claim HD or START from prose alone", () => {
    const msg = framingContinuityPilotMessage(
      "awaiting_trajectory_decision",
      "Cadrage",
    );
    expect(msg).toMatch(/HumanDecision/);
    expect(msg).toMatch(/ok go/);
    expect(msg).not.toMatch(/cycle « Cadrage » est actif/i);
  });
});

describe("chat-first Framing continuity OA bridge", () => {
  beforeEach(() => {
    previousPilot = process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
  });

  afterEach(() => {
    resetRuntimeApplicationServiceForTests();
    while (tempDirs.length) {
      const d = tempDirs.pop();
      if (d) fs.rmSync(d, { recursive: true, force: true });
    }
    if (previousPilot === undefined) {
      delete process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY;
    } else {
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = previousPilot;
    }
  });

  it("Rec CURRENT → prepare candidate → awaiting decision (no auto HD)", async () => {
    const { projectId } = await bootWithCurrentFramingRec("prep");
    const before = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(before.ok).toBe(true);
    expect(before.continuity?.phase).toBe("recommendation_ready");
    expect(before.continuity?.hasCurrentNextCycleRecommendation).toBe(true);

    const prepared = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "prepare_candidate",
    });
    expect(prepared.ok).toBe(true);
    expect(prepared.continuity?.phase).toBe("awaiting_trajectory_decision");
    expect(prepared.continuity?.presentationDigest).toBeTruthy();

    const noDigest = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
    });
    expect(noDigest.ok).toBe(false);
    expect(noDigest.code).toBe("PRESENTATION_DIGEST_REQUIRED");
  });

  it("stale digest refuses HD; opening read does not mutate", async () => {
    const { projectId } = await bootWithCurrentFramingRec("stale");
    const r1 = await projectAssistantReadFramingContinuityAction({ projectId });
    const r2 = await projectAssistantReadFramingContinuityAction({ projectId });
    expect(r1.continuity?.phase).toBe(r2.continuity?.phase);
    expect(r1.continuity?.phase).toBe("recommendation_ready");

    await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "prepare_candidate",
    });
    const stale = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: "sha256:deadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeefdeadbeef",
    });
    expect(stale.ok).toBe(false);
  });

  it("approve digest → prepare cycle → ready_to_start → START → active", async () => {
    const { projectId } = await bootWithCurrentFramingRec("e2e");
    const prepared = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "prepare_candidate",
    });
    expect(prepared.ok).toBe(true);
    const digest = prepared.continuity?.presentationDigest;
    expect(digest).toBeTruthy();

    const approved = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "approve_candidate",
      presentationDigest: digest!,
    });
    expect(approved.ok).toBe(true);
    expect(
      approved.continuity?.phase === "ready_to_start" ||
        approved.continuity?.phase === "trajectory_decided_prepare_cycle",
    ).toBe(true);

    if (approved.continuity?.phase === "trajectory_decided_prepare_cycle") {
      const cyclePrep = await projectAssistantAdvanceFramingContinuityAction({
        projectId,
        step: "prepare_cycle",
      });
      expect(cyclePrep.ok).toBe(true);
      expect(cyclePrep.continuity?.phase).toBe("ready_to_start");
    }

    const started = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "start_prepared",
    });
    expect(started.ok).toBe(true);
    expect(started.activeCycleInstanceId).toBeTruthy();

    const after = await projectAssistantReadFramingContinuityAction({
      projectId,
    });
    expect(after.continuity?.phase).toBe("active");
    expect(after.continuity?.activeCycleInstanceId).toBe(
      started.activeCycleInstanceId,
    );

    // Idempotent second START must not invent a second active cycle
    const again = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "start_prepared",
    });
    expect(again.ok === false || again.activeCycleInstanceId === started.activeCycleInstanceId).toBe(
      true,
    );
  });

  it("START without prepared cycle fails closed", async () => {
    const { projectId } = await bootWithCurrentFramingRec("noprep");
    const started = await projectAssistantAdvanceFramingContinuityAction({
      projectId,
      step: "start_prepared",
    });
    expect(started.ok).toBe(false);
  });
});

```

### NEW FILE — framingContinuityCard.ui.test.tsx
```tsx
/** @vitest-environment jsdom */
/**
 * P6 FramingContinuityCard — presentation only. No OA mutations.
 */
import { describe, expect, it, vi } from "vitest";
import { cleanup, fireEvent, render, screen } from "@testing-library/react";
import { afterEach } from "vitest";
import { FramingContinuityCard } from "@/features/pre-m6-product-ui/surfaces/FramingContinuityCard";
import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";

afterEach(() => {
  cleanup();
});

function snap(
  partial: Partial<FramingContinuitySnapshot> &
    Pick<FramingContinuitySnapshot, "phase">,
): FramingContinuitySnapshot {
  return {
    catalogLabel: "Cadrage",
    targetCycleTypeId: "cyc:framing",
    recommendationId: "rec:1",
    semanticKey: "sk:1",
    trajectoryId: "trj:1",
    trajectoryVersion: 1,
    presentationDigest: "sha256:abc",
    approvalOptionLabel: "Valider la trajectoire initiale Cadrage.",
    preparedCycleInstanceId: null,
    activeCycleInstanceId: null,
    hasCurrentNextCycleRecommendation: true,
    message: "message",
    ...partial,
  };
}

describe("FramingContinuityCard", () => {
  it("recommendation_ready exposes prepare CTA without inventing HD", () => {
    const onPrepare = vi.fn();
    render(
      <FramingContinuityCard
        continuity={snap({ phase: "recommendation_ready" })}
        busy={false}
        error={null}
        onPrepareCandidate={onPrepare}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
      />,
    );
    expect(screen.getByTestId("framing-continuity-card")).toHaveAttribute(
      "data-phase",
      "recommendation_ready",
    );
    expect(screen.getByTestId("framing-continuity-authority").textContent).toMatch(
      /Recommendation ≠ HumanDecision ≠ START/,
    );
    fireEvent.click(screen.getByTestId("framing-continuity-primary"));
    expect(onPrepare).toHaveBeenCalledTimes(1);
  });

  it("awaiting_trajectory_decision requires digest; keep exploring is non-mutating", () => {
    const onApprove = vi.fn();
    const onKeep = vi.fn();
    const { rerender } = render(
      <FramingContinuityCard
        continuity={snap({
          phase: "awaiting_trajectory_decision",
          presentationDigest: null,
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={onApprove}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
        onKeepExploring={onKeep}
      />,
    );
    expect(screen.getByTestId("framing-continuity-primary")).toBeDisabled();
    fireEvent.click(screen.getByTestId("framing-continuity-keep-exploring"));
    expect(onKeep).toHaveBeenCalledTimes(1);
    expect(onApprove).not.toHaveBeenCalled();

    rerender(
      <FramingContinuityCard
        continuity={snap({ phase: "awaiting_trajectory_decision" })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={onApprove}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
        onKeepExploring={onKeep}
      />,
    );
    fireEvent.click(screen.getByTestId("framing-continuity-primary"));
    expect(onApprove).toHaveBeenCalledTimes(1);
  });

  it("ready_to_start exposes START CTA; active renders nothing", () => {
    const onStart = vi.fn();
    const { rerender } = render(
      <FramingContinuityCard
        continuity={snap({
          phase: "ready_to_start",
          preparedCycleInstanceId: "cyc:prep",
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={onStart}
      />,
    );
    fireEvent.click(screen.getByTestId("framing-continuity-primary"));
    expect(onStart).toHaveBeenCalledTimes(1);

    rerender(
      <FramingContinuityCard
        continuity={snap({
          phase: "active",
          activeCycleInstanceId: "cyc:live",
        })}
        busy={false}
        error={null}
        onPrepareCandidate={vi.fn()}
        onApproveCandidate={vi.fn()}
        onPrepareCycle={vi.fn()}
        onStartPrepared={vi.fn()}
      />,
    );
    expect(screen.queryByTestId("framing-continuity-card")).toBeNull();
  });
});

```

### ADDED TAIL — preCycleCandidateTrajectoryActions.ts (from framing read/advance)
```ts
    trajectoryVersion: result.trajectoryVersion,
    stepId: result.stepId,
    activeCycleInstanceId: result.activeCycleInstanceId,
    lpsVersionAfter: result.lpsVersionAfter,
  };
}

/**
 * P6 chat-first Framing — read-only continuity snapshot for ConversationSurface.
 * Reuses prepare/read/approval/start readers. Never invents CURRENT or digests.
 */
export async function projectAssistantReadFramingContinuityAction(input: {
  projectId: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  continuity?: import("./f2/chatFirstFramingContinuity").FramingContinuitySnapshot;
}> {
  const {
    classifyFramingContinuityPhase,
    framingContinuityPilotMessage,
  } = await import("./f2/chatFirstFramingContinuity");

  const pre = await projectAssistantReadPreCycleCandidateTrajectoryAction({
    projectId: input.projectId,
  });
  if (!pre.ok) {
    return { ok: false, code: pre.code, message: pre.message };
  }

  const approval =
    await projectAssistantReadCandidateTrajectoryApprovalPresentationAction({
      projectId: input.projectId,
    });

  const prepared = await readPreparedTrajectoryCycleAction({
    projectId: input.projectId,
  });

  const hasCurrent = pre.hasCurrentNextCycleRecommendation === true;
  const candidate = pre.candidate ?? null;
  const presentation =
    approval.ok && approval.presentation ? approval.presentation : null;
  const alreadyDecided =
    approval.ok && approval.alreadyDecided ? approval.alreadyDecided : null;
  const preparedCycle =
    prepared.ok && prepared.prepared ? prepared.prepared : null;

  const phase = classifyFramingContinuityPhase({
    activeCycleInstanceId: pre.activeCycleInstanceId,
    hasCurrentNextCycleRecommendation: hasCurrent,
    candidatePresent: candidate != null,
    candidateProvenanceResolved: candidate?.provenanceStatus === "RESOLVED",
    awaitingDecisionPresentation: presentation != null,
    decidedTrajectoryPresent:
      alreadyDecided != null &&
      alreadyDecided.prepareBlockedReason !== "cycle_type_already_completed",
    preparedCompletePresent: preparedCycle != null,
  });

  const catalogLabel =
    presentation?.catalogLabel ??
    alreadyDecided?.catalogLabel ??
    preparedCycle?.catalogLabel ??
    candidate?.catalogLabel ??
    null;
  const targetCycleTypeId =
    presentation?.targetCycleTypeId ??
    alreadyDecided?.targetCycleTypeId ??
    preparedCycle?.cycleTypeId ??
    candidate?.targetCycleTypeId ??
    null;

  return {
    ok: true,
    continuity: {
      phase,
      catalogLabel,
      targetCycleTypeId,
      recommendationId:
        presentation?.recommendationId ?? candidate?.recommendationId ?? null,
      semanticKey: presentation?.semanticKey ?? candidate?.semanticKey ?? null,
      trajectoryId:
        presentation?.trajectoryId ??
        alreadyDecided?.trajectoryId ??
        preparedCycle?.trajectoryId ??
        candidate?.trajectoryId ??
        null,
      trajectoryVersion:
        presentation?.displayCandidateVersionHint ??
        alreadyDecided?.version ??
        preparedCycle?.trajectoryVersion ??
        candidate?.version ??
        null,
      presentationDigest: presentation?.presentationDigest ?? null,
      approvalOptionLabel: presentation?.approvalOptionLabel ?? null,
      preparedCycleInstanceId: preparedCycle?.cycleInstanceId ?? null,
      activeCycleInstanceId: pre.activeCycleInstanceId ?? null,
      hasCurrentNextCycleRecommendation: hasCurrent,
      message: framingContinuityPilotMessage(phase, catalogLabel),
    },
  };
}

/**
 * One deterministic advancement step for chat-first Framing continuity.
 * - prepare candidate from CURRENT Rec (no HD)
 * - prepare cycle from decided trajectory (no HD)
 * - start prepared cycle (Pilote authority via existing START facade)
 * Never auto-approves HumanDecision.
 */
export async function projectAssistantAdvanceFramingContinuityAction(input: {
  projectId: string;
  /**
   * Explicit step. Client must not invent digests.
   * approve requires presentationDigest from server presentation.
   */
  step:
    | "prepare_candidate"
    | "approve_candidate"
    | "prepare_cycle"
    | "start_prepared";
  presentationDigest?: string;
}): Promise<{
  ok: boolean;
  code?: string;
  message?: string;
  continuity?: import("./f2/chatFirstFramingContinuity").FramingContinuitySnapshot;
  decisionId?: string;
  cycleInstanceId?: string;
  activeCycleInstanceId?: string | null;
}> {
  if (input.step === "prepare_candidate") {
    const prepared = await projectAssistantPrepareCandidateTrajectoryAction({
      projectId: input.projectId,
    });
    if (!prepared.ok) {
      return {
        ok: false,
        code: prepared.code,
        message: prepared.message ?? "Préparation de trajectoire refusée.",
      };
    }
  } else if (input.step === "approve_candidate") {
    const digest = (input.presentationDigest ?? "").trim();
    if (!digest) {
      return {
        ok: false,
        code: "PRESENTATION_DIGEST_REQUIRED",
        message:
          "Digest d'approbation manquant — aucune HumanDecision n'a été inventée.",
      };
    }
    const approved =
      await projectAssistantApprovePreCycleCandidateTrajectoryAction({
        projectId: input.projectId,
        presentationDigest: digest,
      });
    if (!approved.ok) {
      return {
        ok: false,
        code: approved.code,
        message: approved.message ?? "Décision de trajectoire refusée.",
      };
    }
    // Deterministic follow-up: prepare cycle when trajectory is decided.
    const cyclePrep = await prepareCycleFromValidatedTrajectoryAction({
      projectId: input.projectId,
    });
    if (!cyclePrep.ok) {
      const snap = await projectAssistantReadFramingContinuityAction({
        projectId: input.projectId,
      });
      return {
        ok: true,
        code: "DECISION_RECORDED_PREPARE_PENDING",
        message:
          cyclePrep.message ??
          "Décision enregistrée — préparation du cycle encore requise.",
        continuity: snap.ok ? snap.continuity : undefined,
        decisionId: approved.decisionId,
      };
    }
  } else if (input.step === "prepare_cycle") {
    const cyclePrep = await prepareCycleFromValidatedTrajectoryAction({
      projectId: input.projectId,
    });
    if (!cyclePrep.ok) {
      return {
        ok: false,
        code: cyclePrep.code,
        message: cyclePrep.message ?? "Préparation du cycle refusée.",
      };
    }
  } else if (input.step === "start_prepared") {
    const started = await startPreparedTrajectoryCycleAction({
      projectId: input.projectId,
    });
    if (!started.ok) {
      return {
        ok: false,
        code: started.code,
        message: started.message ?? "Démarrage refusé.",
      };
    }
    const snap = await projectAssistantReadFramingContinuityAction({
      projectId: input.projectId,
    });
    return {
      ok: true,
      continuity: snap.ok ? snap.continuity : undefined,
      cycleInstanceId: started.cycleInstanceId,
      activeCycleInstanceId: started.activeCycleInstanceId ?? null,
      message:
        started.catalogLabel != null
          ? `Cycle « ${started.catalogLabel} » démarré.`
          : "Cycle démarré.",
    };
  } else {
    return { ok: false, code: "UNKNOWN_STEP", message: "Étape inconnue." };
  }

  const snap = await projectAssistantReadFramingContinuityAction({
    projectId: input.projectId,
  });
  return {
    ok: true,
    continuity: snap.ok ? snap.continuity : undefined,
    message: snap.continuity?.message,
    activeCycleInstanceId: snap.continuity?.activeCycleInstanceId ?? null,
  };
}
```

### FULL DELIVERY DIFF (modified tracked Product files)
```diff
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
index 73225dc7..7aad28c8 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
@@ -47,6 +47,7 @@ import type {
   ActiveDecisionSubjectReadResult,
   CurrentGovernedExecutionContinuityResult,
 } from "@/features/project-assistant/w2/types";
+import type { FramingContinuitySnapshot } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
 
 export type ProductDecisionSubjectContinuity =
   | { readonly status: "pending" }
@@ -165,6 +166,13 @@ export function useProductConversation({
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
@@ -371,6 +379,90 @@ export function useProductConversation({
     };
   }, [projectId, durableRefreshSignal]);
 
+  async function refreshFramingContinuity() {
+    try {
+      const { projectAssistantReadFramingContinuityAction } = await import(
+        "@/features/project-assistant/preCycleCandidateTrajectoryActions"
+      );
+      const result = await projectAssistantReadFramingContinuityAction({
+        projectId,
+      });
+      if (!result.ok || !result.continuity) {
+        setFramingContinuity(null);
+        return;
+      }
+      const phase = result.continuity.phase;
+      if (
+        phase === "idle" ||
+        phase === "blocked_no_recommendation" ||
+        phase === "active"
+      ) {
+        // Keep active briefly visible via null (conversation + LPS surfaces).
+        setFramingContinuity(
+          phase === "active" ? result.continuity : null,
+        );
+        if (phase !== "active") setFramingContinuityError(null);
+        return;
+      }
+      setFramingContinuity(result.continuity);
+    } catch {
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
+        setMessages((prev) => [
+          ...prev,
+          {
+            id: nextId("system"),
+            role: "system",
+            content:
+              result.message ??
+              "Cycle démarré — l'état actif a été vérifié sur le LPS.",
+          },
+        ]);
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
@@ -397,6 +489,7 @@ export function useProductConversation({
       } else {
         setGovernedExecutionContinuity(continuity);
       }
+      await refreshFramingContinuity();
     } catch {
       setGovernedMomentError("Impossible de relire le moment gouverné.");
     }
@@ -931,6 +1024,12 @@ export function useProductConversation({
         }),
       );
       setLrMaterializeCode(result.lifecycleRecommendationCode ?? null);
+      if (
+        result.lifecycleRecommendationMaterialized === true ||
+        result.lifecycleRecommendationCode
+      ) {
+        void refreshFramingContinuity();
+      }
       setToolEvents((prev) => [...prev, ...result.toolEvents]);
       setMessages((prev) => [
         ...prev,
@@ -1244,6 +1343,22 @@ export function useProductConversation({
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
diff --git a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
index 7cfbcf82..3e0da9d2 100644
--- a/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
+++ b/projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
@@ -35,6 +35,7 @@ import {
   GovernedDecisionCard,
   presentGovernedDecisionNoraPreface,
 } from "./GovernedDecisionCard";
+import { FramingContinuityCard } from "./FramingContinuityCard";
 import { GovernedConfirmationCard } from "./GovernedConfirmationCard";
 import styles from "./ConversationSurface.module.css";
 
@@ -201,6 +202,13 @@ export function ConversationSurface({
     revealGovernedDecisionAlternate,
     inspectGovernedContract,
     confirmGovernedContract,
+    framingContinuity,
+    framingContinuityBusy,
+    framingContinuityError,
+    prepareFramingCandidate,
+    approveFramingCandidate,
+    prepareFramingCycle,
+    startFramingPrepared,
     reservesText,
     setReservesText,
     f3Prepare,
@@ -834,6 +842,36 @@ export function ConversationSurface({
           </p>
         </aside>
       ) : null}
+      {framingContinuity &&
+      framingContinuity.phase !== "idle" &&
+      framingContinuity.phase !== "blocked_no_recommendation" &&
+      !(
+        framingContinuity.phase === "active" &&
+        !framingContinuity.message
+      ) ? (
+        <div
+          className={styles.governedMomentSlot}
+          data-testid="framing-continuity-slot"
+        >
+          <p className={styles.noraMomentLabel}>Nora</p>
+          <p className={styles.noraMomentBody}>
+            {framingContinuity.message ||
+              "Poursuivez le cadrage sous les gates Product existants."}
+          </p>
+          <FramingContinuityCard
+            continuity={framingContinuity}
+            busy={framingContinuityBusy}
+            error={framingContinuityError}
+            onPrepareCandidate={prepareFramingCandidate}
+            onApproveCandidate={approveFramingCandidate}
+            onPrepareCycle={prepareFramingCycle}
+            onStartPrepared={startFramingPrepared}
+            onKeepExploring={() => {
+              composerInputRef.current?.focus();
+            }}
+          />
+        </div>
+      ) : null}
       {boundAwaitingDecision ? (
         <div
           className={styles.governedMomentSlot}
diff --git a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
index b8823e65..6cf80970 100644
--- a/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
+++ b/projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
@@ -84,6 +84,7 @@ import {
   resolveChatFirstCycleStartGate,
   resolveChatFirstStartRouting,
 } from "./resolveChatFirstCycleStartGate";
+import { interpretPilotNarrativeStance } from "./composeF2PilotFacingNarrative";
 import { resolveTrajectoryDecisionSupportProjection } from "../w2/resolveTrajectoryDecisionSupportProjection";
 import {
   parseReservationInteractionContextInput,
@@ -1493,6 +1494,110 @@ export async function orchestrateAssistantSend(input: {
     }
   }
 
+  // P6 chat-first Framing continuity — progress Rec→prepare/start WITHOUT inventing HD.
+  // Runs before F1 advisory so « ok go démarrer » is not stranded on Nora prose alone.
+  {
+    const framingCycleLabel =
+      (analysis.candidateCycleTypeId
+        ? getCycleTypeById(analysis.candidateCycleTypeId)?.label
+        : null) ??
+      analysis.candidateCycleTypeId ??
+      null;
+    const framingStance = interpretPilotNarrativeStance({
+      userContent: content,
+      cycleLabel: framingCycleLabel,
+      pilotDecisionCandidate: analysis.pilotDecisionCandidate,
+    });
+    const wantsFramingProgress =
+      framingStance.kind === "accept_start" ||
+      framingStance.kind === "accept_recommendation";
+    if (wantsFramingProgress && getRuntimeApplicationService().oa) {
+      const {
+        projectAssistantReadFramingContinuityAction,
+        projectAssistantAdvanceFramingContinuityAction,
+      } = await import("../preCycleCandidateTrajectoryActions");
+      const snap = await projectAssistantReadFramingContinuityAction({
+        projectId: project.projectId,
+      });
+      if (snap.ok && snap.continuity) {
+        const phase = snap.continuity.phase;
+        // ready_to_start / active: leave START to the existing F01 gate below.
+        // This bridge only closes the Rec→candidate→HD→prepare gap.
+        if (phase === "recommendation_ready") {
+          const advanced = await projectAssistantAdvanceFramingContinuityAction({
+            projectId: project.projectId,
+            step: "prepare_candidate",
+          });
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: [
+              presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+              advanced.ok
+                ? (advanced.continuity?.message ??
+                  "Trajectoire candidate préparée — une HumanDecision explicite est encore requise avant START.")
+                : (advanced.message ??
+                  "Préparation de trajectoire refusée — aucune décision inventée."),
+              "Utilisez la carte de décision dans la conversation pour valider la trajectoire.",
+            ].join(" "),
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            reinstructionOfProposalId,
+            executionBlocked: true,
+            turnKind: "f2_clarification",
+          });
+        }
+        if (phase === "awaiting_trajectory_decision") {
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: [
+              presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+              snap.continuity.message,
+              "Validez explicitement la trajectoire dans la carte de décision — « ok go » n'est pas une HumanDecision.",
+            ].join(" "),
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            reinstructionOfProposalId,
+            executionBlocked: true,
+            turnKind: "f2_clarification",
+          });
+        }
+        if (phase === "trajectory_decided_prepare_cycle") {
+          const advanced = await projectAssistantAdvanceFramingContinuityAction({
+            projectId: project.projectId,
+            step: "prepare_cycle",
+          });
+          return await completeF2Turn({
+            userText: content,
+            sessionDbPath: input.sessionDbPath,
+            text: [
+              presentation === "test_provider" ? "[Mode test]" : "[Mode réel]",
+              advanced.ok
+                ? (advanced.continuity?.message ??
+                  "Cycle préparé — vous pouvez démarrer sous le gate F01.")
+                : (advanced.message ?? "Préparation du cycle refusée."),
+            ].join(" "),
+            mode: modeResolution.mode as "fixture" | "live",
+            presentation,
+            model,
+            project,
+            intentClass: analysis.intentClass,
+            reinstructionOfProposalId,
+            executionBlocked: true,
+            turnKind: "f2_clarification",
+          });
+        }
+      }
+    }
+  }
+
   // Repository read/search/Git-truth without mutation → F1 (no Cycle/LPS mutation).
   // Deterministic override when the classifier drifts to ambiguous/actionable for pure reads.
   const forceRepoInformative =
diff --git a/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts b/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
index 8abd5f05..4e6ddd63 100644
--- a/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
+++ b/projects/sfia-studio/app/features/project-assistant/preCycleCandidateTrajectoryActions.ts
@@ -514,3 +514,230 @@ export async function startPreparedTrajectoryCycleAction(input: {
     lpsVersionAfter: result.lpsVersionAfter,
   };
 }
+
+/**
+ * P6 chat-first Framing — read-only continuity snapshot for ConversationSurface.
+ * Reuses prepare/read/approval/start readers. Never invents CURRENT or digests.
+ */
+export async function projectAssistantReadFramingContinuityAction(input: {
+  projectId: string;
+}): Promise<{
+  ok: boolean;
+  code?: string;
+  message?: string;
+  continuity?: import("./f2/chatFirstFramingContinuity").FramingContinuitySnapshot;
+}> {
+  const {
+    classifyFramingContinuityPhase,
+    framingContinuityPilotMessage,
+  } = await import("./f2/chatFirstFramingContinuity");
+
+  const pre = await projectAssistantReadPreCycleCandidateTrajectoryAction({
+    projectId: input.projectId,
+  });
+  if (!pre.ok) {
+    return { ok: false, code: pre.code, message: pre.message };
+  }
+
+  const approval =
+    await projectAssistantReadCandidateTrajectoryApprovalPresentationAction({
+      projectId: input.projectId,
+    });
+
+  const prepared = await readPreparedTrajectoryCycleAction({
+    projectId: input.projectId,
+  });
+
+  const hasCurrent = pre.hasCurrentNextCycleRecommendation === true;
+  const candidate = pre.candidate ?? null;
+  const presentation =
+    approval.ok && approval.presentation ? approval.presentation : null;
+  const alreadyDecided =
+    approval.ok && approval.alreadyDecided ? approval.alreadyDecided : null;
+  const preparedCycle =
+    prepared.ok && prepared.prepared ? prepared.prepared : null;
+
+  const phase = classifyFramingContinuityPhase({
+    activeCycleInstanceId: pre.activeCycleInstanceId,
+    hasCurrentNextCycleRecommendation: hasCurrent,
+    candidatePresent: candidate != null,
+    candidateProvenanceResolved: candidate?.provenanceStatus === "RESOLVED",
+    awaitingDecisionPresentation: presentation != null,
+    decidedTrajectoryPresent:
+      alreadyDecided != null &&
+      alreadyDecided.prepareBlockedReason !== "cycle_type_already_completed",
+    preparedCompletePresent: preparedCycle != null,
+  });
+
+  const catalogLabel =
+    presentation?.catalogLabel ??
+    alreadyDecided?.catalogLabel ??
+    preparedCycle?.catalogLabel ??
+    candidate?.catalogLabel ??
+    null;
+  const targetCycleTypeId =
+    presentation?.targetCycleTypeId ??
+    alreadyDecided?.targetCycleTypeId ??
+    preparedCycle?.cycleTypeId ??
+    candidate?.targetCycleTypeId ??
+    null;
+
+  return {
+    ok: true,
+    continuity: {
+      phase,
+      catalogLabel,
+      targetCycleTypeId,
+      recommendationId:
+        presentation?.recommendationId ?? candidate?.recommendationId ?? null,
+      semanticKey: presentation?.semanticKey ?? candidate?.semanticKey ?? null,
+      trajectoryId:
+        presentation?.trajectoryId ??
+        alreadyDecided?.trajectoryId ??
+        preparedCycle?.trajectoryId ??
+        candidate?.trajectoryId ??
+        null,
+      trajectoryVersion:
+        presentation?.displayCandidateVersionHint ??
+        alreadyDecided?.version ??
+        preparedCycle?.trajectoryVersion ??
+        candidate?.version ??
+        null,
+      presentationDigest: presentation?.presentationDigest ?? null,
+      approvalOptionLabel: presentation?.approvalOptionLabel ?? null,
+      preparedCycleInstanceId: preparedCycle?.cycleInstanceId ?? null,
+      activeCycleInstanceId: pre.activeCycleInstanceId ?? null,
+      hasCurrentNextCycleRecommendation: hasCurrent,
+      message: framingContinuityPilotMessage(phase, catalogLabel),
+    },
+  };
+}
+
+/**
+ * One deterministic advancement step for chat-first Framing continuity.
+ * - prepare candidate from CURRENT Rec (no HD)
+ * - prepare cycle from decided trajectory (no HD)
+ * - start prepared cycle (Pilote authority via existing START facade)
+ * Never auto-approves HumanDecision.
+ */
+export async function projectAssistantAdvanceFramingContinuityAction(input: {
+  projectId: string;
+  /**
+   * Explicit step. Client must not invent digests.
+   * approve requires presentationDigest from server presentation.
+   */
+  step:
+    | "prepare_candidate"
+    | "approve_candidate"
+    | "prepare_cycle"
+    | "start_prepared";
+  presentationDigest?: string;
+}): Promise<{
+  ok: boolean;
+  code?: string;
+  message?: string;
+  continuity?: import("./f2/chatFirstFramingContinuity").FramingContinuitySnapshot;
+  decisionId?: string;
+  cycleInstanceId?: string;
+  activeCycleInstanceId?: string | null;
+}> {
+  if (input.step === "prepare_candidate") {
+    const prepared = await projectAssistantPrepareCandidateTrajectoryAction({
+      projectId: input.projectId,
+    });
+    if (!prepared.ok) {
+      return {
+        ok: false,
+        code: prepared.code,
+        message: prepared.message ?? "Préparation de trajectoire refusée.",
+      };
+    }
+  } else if (input.step === "approve_candidate") {
+    const digest = (input.presentationDigest ?? "").trim();
+    if (!digest) {
+      return {
+        ok: false,
+        code: "PRESENTATION_DIGEST_REQUIRED",
+        message:
+          "Digest d'approbation manquant — aucune HumanDecision n'a été inventée.",
+      };
+    }
+    const approved =
+      await projectAssistantApprovePreCycleCandidateTrajectoryAction({
+        projectId: input.projectId,
+        presentationDigest: digest,
+      });
+    if (!approved.ok) {
+      return {
+        ok: false,
+        code: approved.code,
+        message: approved.message ?? "Décision de trajectoire refusée.",
+      };
+    }
+    // Deterministic follow-up: prepare cycle when trajectory is decided.
+    const cyclePrep = await prepareCycleFromValidatedTrajectoryAction({
+      projectId: input.projectId,
+    });
+    if (!cyclePrep.ok) {
+      const snap = await projectAssistantReadFramingContinuityAction({
+        projectId: input.projectId,
+      });
+      return {
+        ok: true,
+        code: "DECISION_RECORDED_PREPARE_PENDING",
+        message:
+          cyclePrep.message ??
+          "Décision enregistrée — préparation du cycle encore requise.",
+        continuity: snap.ok ? snap.continuity : undefined,
+        decisionId: approved.decisionId,
+      };
+    }
+  } else if (input.step === "prepare_cycle") {
+    const cyclePrep = await prepareCycleFromValidatedTrajectoryAction({
+      projectId: input.projectId,
+    });
+    if (!cyclePrep.ok) {
+      return {
+        ok: false,
+        code: cyclePrep.code,
+        message: cyclePrep.message ?? "Préparation du cycle refusée.",
+      };
+    }
+  } else if (input.step === "start_prepared") {
+    const started = await startPreparedTrajectoryCycleAction({
+      projectId: input.projectId,
+    });
+    if (!started.ok) {
+      return {
+        ok: false,
+        code: started.code,
+        message: started.message ?? "Démarrage refusé.",
+      };
+    }
+    const snap = await projectAssistantReadFramingContinuityAction({
+      projectId: input.projectId,
+    });
+    return {
+      ok: true,
+      continuity: snap.ok ? snap.continuity : undefined,
+      cycleInstanceId: started.cycleInstanceId,
+      activeCycleInstanceId: started.activeCycleInstanceId ?? null,
+      message:
+        started.catalogLabel != null
+          ? `Cycle « ${started.catalogLabel} » démarré.`
+          : "Cycle démarré.",
+    };
+  } else {
+    return { ok: false, code: "UNKNOWN_STEP", message: "Étape inconnue." };
+  }
+
+  const snap = await projectAssistantReadFramingContinuityAction({
+    projectId: input.projectId,
+  });
+  return {
+    ok: true,
+    continuity: snap.ok ? snap.continuity : undefined,
+    message: snap.continuity?.message,
+    activeCycleInstanceId: snap.continuity?.activeCycleInstanceId ?? null,
+  };
+}

```

## Contrat visuel Figma (préalable)
- File : m4g8j0gNbEzfIuH6S9AZJF
- 378:2 Recommendation ouverte — 1440×1024 — shell P3 (rail + conversation + panneau), carte inline Recommandation, CTA primaire + Continuer à explorer
- 380:2 Décision inline — même shell, label Décision, CTA Valider + Continuer
- Implémentation : réutilise `GovernedDecisionCard.module.css` ; slot `governedMomentSlot` existant ; pas d'écran parallèle
- Captures Figma locales : `.tmp-sfia-review/figma/p6-378-2-recommendation.png`, `p6-380-2-decision.png`
- Runtime screenshot navigateur : NON disponible (:3020 down) → **REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED** pour PASS visuel fort
- Validation Morris = proposition visuelle ; conformité runtime non prouvée ici

## Tests exécutés
Commandes :
```
cd projects/sfia-studio/app
npx vitest run \
  __tests__/project-assistant/chatFirstFramingContinuity.d0.test.ts \
  __tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx \
  __tests__/project-assistant/p6.hqa.f01.chatFirstCycleStartGate.d0.test.ts \
  __tests__/project-assistant/candidateTrajectoryBridge.d0.test.ts \
  __tests__/project-assistant/candidateTrajectoryHumanDecision.d0.test.ts \
  __tests__/project-assistant/candidateTrajectoryCycleStart.d0.test.ts \
  __tests__/pre-m6-product-ui/chatFirstGovernedDecisionLoop.ui.test.tsx
```
Résultat : **7 files / 86 tests PASS**

Couverture déterministe clé :
- phase ordering + messages anti-prose-HD
- Rec CURRENT → prepare → awaiting (no auto HD)
- stale digest refuse ; read non-mutant
- approve → prepare → START → active + idempotence
- START sans préparé fail-closed
- UI CTA phases + keep exploring non-mutant
- Non-régression F01 / bridge / HD / cycle start / governed decision UI

Typecheck : erreurs uniquement dans untracked `p6-campaign/*` (préexistant) — **aucune erreur Delivery**
`git diff --check` : PASS (aucune whitespace error)

## Preuves autorité / currentness / provenance / idempotence
- Digest serveur requis pour approve (`PRESENTATION_DIGEST_REQUIRED` si absent)
- Stale digest refuse HD
- `ok go` / accept_recommendation en phase awaiting → clarification, **pas** HD
- prepare_candidate / prepare_cycle / start_prepared réutilisent facades OA existantes
- F01 START path inchangé pour `ready_to_start` (régression F01 corrigée en ne pas intercepter)
- Double START : fail ou même active id
- Ouverture / read : aucune mutation durable

## Fake / Real qualification
- Applicable : OUI
- Tests : mocks/fakes déterministes à frontières externes ; même seam OA Product
- REAL provider : **aucun nouvel appel**
- SFIA_STUDIO_CURSOR_REAL : **non modifié**
- Niveau atteint : **DETERMINISTIC E2E PROVEN** (services + UI card)
- Hors scope : REAL BOUNDARY PROVEN / END-TO-END REAL PROVEN / P6 PASS
- REC-01 persistence CURRENT : **non indépendamment revalidée** dans ce Delivery (gap documenté)

## Chaîne E2E réellement raccordée
| Étape | Seam | Statut |
|---|---|---|
| Rec CURRENT | selectCurrent / readPreCycle | REUSE |
| Prepare candidate | prepareCandidateTrajectoryFromCurrentRecommendation | REUSE via Advance |
| Present decision | ApprovalPresentation + FramingContinuityCard | REUSE+ADAPT |
| HumanDecision | approveCandidateTrajectory + digest | REUSE |
| Prepare cycle | prepareCycleFromValidatedTrajectory | REUSE |
| START | startPreparedTrajectoryCycle + F01 gate | REUSE |
| LPS verify | getCurrentLivingProjectState / read continuity | REUSE |
| Nora resume | post-active conversation | KEEP |

## Réserves
1. Runtime screenshot vs Figma manquant (:3020 down)
2. REC-01 CURRENT persistence non revalidée indépendamment
3. Human QA REAL browser journey non rejoué
4. Provider Nora REAL non revalidé post-Delivery
5. Artefacts campagne locaux non commités (intentionnel)

## Dette / exit
- Aucune architecture parallèle
- Aucune UI provisoire sans cible (carte inline P3-native)
- Ne résout pas télémétrie Cursor ni couverture terminale Synthèses

## Capacité suivante
Human QA REAL bornée du premier Cadrage — **GO Morris distinct requis**
Puis consolidation P6

## Gates Morris
1. Revue Critical de cette candidate locale
2. GO distinct Human QA REAL
3. Décision séparée intégration Git éventuelle (push projet / PR / merge **non** faits ici)

## Verdict
**LOCAL E2E DELIVERY CANDIDATE — READY FOR CRITICAL REVIEW**

Statut : READY WITH RESERVES (visuel runtime + REC-01 + REAL)
Interdit déclaré : P6 PASS / REC-01 CLOSED / REAL E2E PASS / Runtime v3 ADOPTED / READY FOR MERGE

## Instruction ChatGPT finale (§9.1)
Lire exclusivement le handoff distant `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` au SHA publié ci-après.
Qualifier la candidate Delivery Option 1 (autorité, currentness, F01 non contourné, absence d'architecture parallèle).
Ne pas merger, ne pas ouvrir PR, ne pas appeler REAL sans nouveau GO Morris.
Décision attendue : accepter / rejeter / demander correctifs de la candidate locale Critical.
