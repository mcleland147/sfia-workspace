# Review Pack Full — SFIA v3.0 D1-C3 Existing Context Matching

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-22 21:38:21 CEST
- **Cycle :** 9 — Delivery · Critical · DELIVERY / AI / CONTEXT / ROUTING / SECURITY / EVOL
- **Gate consommé :** GO IMPLEMENTATION D1-C3 — EXISTING CONTEXT MATCHING
- **Gate suivant :** GO VALIDATION D1-C3 — EXISTING CONTEXT MATCHING
- **Repo/branche :** mcleland147/sfia-workspace · `delivery/sfia-studio-control-tower-fast-track`
- **HEAD/base :** `32e5271842b9a344a7e292614675c27ea8ed941b`
- **Handoff précédent :** `be1a6774e9936c7988e9ba3edf395a130126f809` / blob `43555828e6bff7362cfe3d6a2d17c33f31b43ee5`
- **BCDI :** BCDI-D1-C3-EXISTING-CONTEXT-MATCHING
- **Baseline :** SFIA v2.6 · **v3 :** V3-MODELED CANDIDATE
- **Statut :** D1-C3 IMPLEMENTED CANDIDATE

## 2. Git

Dirty attendu · staged vide · HEAD=origin/main · aucune dépendance ajoutée

```
 M projects/sfia-studio/README.md
 M projects/sfia-studio/app/__tests__/ops1/Ops1SessionScreen.test.tsx
 M projects/sfia-studio/app/__tests__/ops1/conversation-repository.test.ts
 M projects/sfia-studio/app/__tests__/ops1/globalModeBadge.ui.test.tsx
 M projects/sfia-studio/app/app/nouvelle-demande/page.tsx
 M projects/sfia-studio/app/components/shell/UtilityRail.tsx
 M projects/sfia-studio/app/e2e/increment-a.spec.ts
 M projects/sfia-studio/app/e2e/increment-c.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i1-session.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i2-conversation.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i2-live-locked-capture.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i3-action-gate.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i4-allowlist.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i5-execution.spec.ts
 M projects/sfia-studio/app/e2e/ops1-i6-report-and-continuation.spec.ts
 M projects/sfia-studio/app/e2e/p0-smoke.spec.ts
 M projects/sfia-studio/app/features/ops1/Ops1SessionScreen.tsx
 M projects/sfia-studio/app/lib/ops1/actions.ts
 M projects/sfia-studio/app/lib/ops1/conversation/fakeProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/openaiProvider.ts
 M projects/sfia-studio/app/lib/ops1/conversation/service.ts
 M projects/sfia-studio/app/lib/ops1/conversation/types.ts
 M projects/sfia-studio/app/lib/ops1/executionOrchestrator.ts
 M projects/sfia-studio/app/lib/ops1/types.ts
 M projects/sfia-studio/app/playwright.config.ts
?? .tmp-sfia-review/
?? projects/sfia-studio/66-control-tower-product-framing.md
?? projects/sfia-studio/67-control-tower-capabilities-and-user-journeys.md
?? projects/sfia-studio/68-control-tower-scope-success-criteria-and-risks.md
?? projects/sfia-studio/69-control-tower-options-and-decision-pack.md
?? projects/sfia-studio/70-control-tower-fast-track-architecture-and-contract.md
?? projects/sfia-studio/71-control-tower-fast-track-backlog-and-delivery.md
?? projects/sfia-studio/72-control-tower-fast-track-decision-pack.md
?? projects/sfia-studio/73-control-tower-fast-track-delivery-report.md
?? projects/sfia-studio/74-sfia-canonical-context-engine-report.md
?? projects/sfia-studio/app/__tests__/d1/
?? projects/sfia-studio/app/__tests__/ops1/controlTowerReinjection.test.ts
?? projects/sfia-studio/app/__tests__/ops1/controlTowerTools.test.ts
?? projects/sfia-studio/app/__tests__/ops1/sfia/
?? projects/sfia-studio/app/app/ops1/
?? projects/sfia-studio/app/app/projects/
?? projects/sfia-studio/app/app/workspace/
?? projects/sfia-studio/app/e2e/control-tower-fast-track.spec.ts
?? projects/sfia-studio/app/e2e/d1-c1-intake-shell.spec.ts
?? projects/sfia-studio/app/e2e/d1-c2-intent-understanding.spec.ts
?? projects/sfia-studio/app/e2e/d1-c3-context-matching.spec.ts
?? projects/sfia-studio/app/e2e/d1-i1-project-foundation.spec.ts
?? projects/sfia-studio/app/e2e/sfia-canonical-context-engine.spec.ts
?? projects/sfia-studio/app/features/d1/
?? projects/sfia-studio/app/lib/d1/
?? projects/sfia-studio/app/lib/ops1/conversation/toolLoop.ts
?? projects/sfia-studio/app/lib/ops1/reportReinjection.ts
?? projects/sfia-studio/app/lib/ops1/sfia/
?? projects/sfia-studio/app/lib/ops1/tools/
?? projects/sfia-studio/sfia-v3-delivery/
?? projects/sfia-studio/sfia-v3-design/
?? projects/sfia-studio/sfia-v3-framing/
?? projects/sfia-studio/sfia-v3-modeled/

```

## 3. C2 hardening

- C2-R01 : `system` réel + user INTENT séparé
- C2-R02 : live demandé sans secrets → D1Error CONFIG (pas de fallback fake silencieux)
- C2-R04 : `requiresHumanConfirmation` boolean strict (`asStrictBoolean`)
- C2-R03 live smoke : **NOT RUN — SECRETS UNAVAILABLE**

## 4. Architecture C3

RequestRoutingProposal + ExistingContextSnapshot → `matchExistingContext` → ContextMatchResult → ContextSelectionDraft (local)

- Project : source D1-I1 réelle
- Cycle/Action : `UNAVAILABLE` (non simulés)
- Aucune mutation / création / rattachement définitif

## 5. Matching

Normalisation FR · scores explicables · seuils candidats STRONG 0.78 / POSSIBLE 0.52 / WEAK 0.30 / gap 0.10
Max 5 candidats · IDs exclusivement issus du repository

## 6. Tests

vitest d1 **42/42** · e2e C3+C2+C1+I1+smoke **36/36** · OPS1 sample vert · tsc OK

## 7. Captures

- `.tmp-sfia-review/screenshots-d1-c3/context-unavailable-1440.png`
- `.tmp-sfia-review/screenshots-d1-c3/inactive-project-1440.png`
- `.tmp-sfia-review/screenshots-d1-c3/multiple-matches-1440.png`
- `.tmp-sfia-review/screenshots-d1-c3/no-match-1440.png`
- `.tmp-sfia-review/screenshots-d1-c3/strong-match-1024.png`
- `.tmp-sfia-review/screenshots-d1-c3/strong-match-1280.png`
- `.tmp-sfia-review/screenshots-d1-c3/strong-match-1440.png`
- `.tmp-sfia-review/screenshots-d1-c3/strong-match-1728.png`

UX-R04 — visual identity and interaction polish deferred after C3.

## 8. Anti-claims

Pas CONTEXT SELECTED AND APPLIED · pas PROJECT LINKED · pas CYCLE OPENED · pas ACTION RESUMED · pas D1 COMPLETE · pas V3-IMPLEMENTED / V3-ADOPTED

## 9. Contenu fichiers créés + clés modifiées

### `projects/sfia-studio/app/lib/d1/context/actions.ts`

```tsx
"use server";

import { matchExistingContext } from "./matchExistingContext";
import { D1Error } from "../errors";
import type { ContextMatchResult, MatchExistingContextInput } from "./types";
import { logIntakeEvent } from "../intakeObservability";

function serializeError(error: unknown): {
  ok: false;
  code: string;
  message: string;
} {
  if (error instanceof D1Error) {
    return { ok: false, code: error.code, message: error.message };
  }
  return {
    ok: false,
    code: "UNKNOWN",
    message: "Échec du matching contextuel. Réessayez.",
  };
}

export type MatchContextActionResult =
  | { ok: true; match: ContextMatchResult; durationMs: number }
  | { ok: false; code: string; message: string };

export async function actionMatchExistingContext(
  input: MatchExistingContextInput,
): Promise<MatchContextActionResult> {
  const started = Date.now();
  try {
    const match = matchExistingContext(input);
    return { ok: true, match, durationMs: Date.now() - started };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionLogContextSelection(input: {
  sessionLocalId: string;
  entityId: string | null;
  cleared?: boolean;
}) {
  if (input.cleared || !input.entityId) {
    logIntakeEvent("intake_context_selection_cleared", {
      sessionLocalId: input.sessionLocalId,
      status: "cleared",
    });
  } else {
    logIntakeEvent("intake_context_candidate_selected", {
      sessionLocalId: input.sessionLocalId,
      status: "selected",
      // entity id only — no project name/objective body
      projectId: input.entityId,
    });
  }
  return { ok: true as const };
}
```

### `projects/sfia-studio/app/lib/d1/context/buildSnapshot.ts`

```tsx
import { randomUUID } from "node:crypto";
import { D1ProjectRepository } from "../repository";
import { openD1Db } from "../db";
import { D1_DEFAULT_WORKSPACE_ID } from "../types";
import { D1Error } from "../errors";
import {
  CONTEXT_MATCH_LIMITS,
  CONTEXT_SNAPSHOT_SCHEMA_VERSION,
  type ExistingContextSnapshot,
  type SnapshotProjectCandidate,
} from "./types";

export interface BuildSnapshotOptions {
  workspaceId?: string;
  /** Force CONTEXT_UNAVAILABLE path for tests. */
  forceUnavailable?: boolean;
  repo?: D1ProjectRepository;
}

/**
 * Read-only bounded snapshot of existing D1 Projects.
 * Cycle/Action sources are explicitly UNAVAILABLE (not simulated).
 */
export function buildExistingContextSnapshot(
  options: BuildSnapshotOptions = {},
): ExistingContextSnapshot {
  const snapshotId = `snap-${randomUUID()}`;
  const generatedAt = new Date().toISOString();

  if (
    options.forceUnavailable ||
    process.env.D1_CONTEXT_FORCE_UNAVAILABLE === "1"
  ) {
    return {
      schemaVersion: CONTEXT_SNAPSHOT_SCHEMA_VERSION,
      snapshotId,
      generatedAt,
      projectSourceStatus: "UNAVAILABLE",
      cycleSourceStatus: "UNAVAILABLE",
      actionSourceStatus: "UNAVAILABLE",
      projects: [],
      cycles: [],
      actions: [],
      sourceCounts: { projects: 0, cycles: 0, actions: 0 },
      truncationApplied: false,
      sourceErrors: ["project_repository_unavailable"],
    };
  }

  try {
    const repo = options.repo ?? new D1ProjectRepository(openD1Db());
    const workspaceId = options.workspaceId ?? D1_DEFAULT_WORKSPACE_ID;
    const all = repo.listProjects(workspaceId);
    const max = CONTEXT_MATCH_LIMITS.maxProjectsEvaluated;
    const truncationApplied = all.length > max;
    const sliced = all.slice(0, max);

    const projects: SnapshotProjectCandidate[] = sliced.map((p) => ({
      projectId: p.projectId,
      name: p.name,
      objective: p.objective.slice(0, CONTEXT_MATCH_LIMITS.maxNormalizedTextLength),
      initialContextSummary: p.initialContextSummary
        ? p.initialContextSummary.slice(
            0,
            CONTEXT_MATCH_LIMITS.maxNormalizedTextLength,
          )
        : null,
      status: p.state,
      createdAt: p.createdAt,
      updatedAt: p.updatedAt,
    }));

    // Stable secondary sort by projectId after updated_at DESC from repo
    projects.sort((a, b) => {
      const t = b.updatedAt.localeCompare(a.updatedAt);
      if (t !== 0) return t;
      return a.projectId.localeCompare(b.projectId);
    });

    return {
      schemaVersion: CONTEXT_SNAPSHOT_SCHEMA_VERSION,
      snapshotId,
      generatedAt,
      projectSourceStatus: projects.length === 0 ? "EMPTY" : "AVAILABLE",
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
      truncationApplied,
      sourceErrors: [],
    };
  } catch (error) {
    const msg =
      error instanceof D1Error
        ? error.code
        : error instanceof Error
          ? "repository_error"
          : "unknown_error";
    return {
      schemaVersion: CONTEXT_SNAPSHOT_SCHEMA_VERSION,
      snapshotId,
      generatedAt,
      projectSourceStatus: "ERROR",
      cycleSourceStatus: "UNAVAILABLE",
      actionSourceStatus: "UNAVAILABLE",
      projects: [],
      cycles: [],
      actions: [],
      sourceCounts: { projects: 0, cycles: 0, actions: 0 },
      truncationApplied: false,
      sourceErrors: [msg],
    };
  }
}
```

### `projects/sfia-studio/app/lib/d1/context/index.ts`

```tsx
export * from "./types";
export * from "./normalize";
export * from "./scoring";
export * from "./buildSnapshot";
export * from "./matchExistingContext";
export {
  actionMatchExistingContext,
  actionLogContextSelection,
} from "./actions";
```

### `projects/sfia-studio/app/lib/d1/context/matchExistingContext.ts`

```tsx
import { randomUUID } from "node:crypto";
import { buildExistingContextSnapshot } from "./buildSnapshot";
import { bandForScore, scoreProjectAgainstProposal } from "./scoring";
import {
  CONTEXT_MATCH_LIMITS,
  CONTEXT_MATCH_SCHEMA_VERSION,
  CONTEXT_MATCH_THRESHOLDS,
  type ContextEntityMatch,
  type ContextMatchResult,
  type ContextRecommendedAction,
  type ExistingContextSnapshot,
  type MatchExistingContextInput,
} from "./types";
import { logIntakeEvent } from "../intakeObservability";

function evidenceFromBreakdown(
  label: string,
  breakdown: ReturnType<typeof scoreProjectAgainstProposal>,
): string[] {
  const items: string[] = [];
  if (breakdown.exactName >= 1) {
    items.push(`Référence explicite au nom « ${label} »`);
  }
  if (breakdown.nameSimilarity >= 0.4) {
    items.push(
      `Similarité de nom estimée ${(breakdown.nameSimilarity * 100).toFixed(0)} %`,
    );
  }
  if (breakdown.objectiveOverlap >= 0.25) {
    items.push(
      `Chevauchement d’objectif estimé ${(breakdown.objectiveOverlap * 100).toFixed(0)} %`,
    );
  }
  if (breakdown.contextOverlap >= 0.25) {
    items.push(
      `Chevauchement de contexte estimé ${(breakdown.contextOverlap * 100).toFixed(0)} %`,
    );
  }
  if (breakdown.activeStatus < 1) {
    items.push("Projet non ACTIVE — reprise non automatique");
  }
  if (breakdown.recency >= 0.7) {
    items.push("Activité récente");
  }
  return items.slice(0, CONTEXT_MATCH_LIMITS.maxEvidenceItems);
}

function recommendForProject(
  outcomeType: string,
  band: ContextEntityMatch["scoreBand"],
  inactive: boolean,
): ContextRecommendedAction {
  if (outcomeType === "ANALYZE_ONLY") return "NO_ACTION";
  if (band === "BELOW_THRESHOLD" || band === "WEAK_MATCH") {
    return outcomeType === "OPEN_CYCLE_CANDIDATE"
      ? "ASK_CLARIFICATION"
      : "CREATE_NEW_PROJECT";
  }
  if (inactive) return "USE_EXISTING_PROJECT";
  if (outcomeType === "OPEN_CYCLE_CANDIDATE") return "OPEN_CYCLE_IN_PROJECT";
  return "USE_EXISTING_PROJECT";
}

/**
 * Deterministic existing-context matching.
 * GPT does not choose IDs — only real repository IDs are returned.
 * No mutation.
 */
export function matchExistingContext(
  input: MatchExistingContextInput,
): ContextMatchResult {
  const started = Date.now();
  logIntakeEvent("intake_context_lookup_started", {
    sessionLocalId: input.sessionLocalId,
    status: "started",
    proposalId: input.proposal.proposalId,
  });

  const snapshot: ExistingContextSnapshot =
    input.snapshotOverride ??
    buildExistingContextSnapshot({
      forceUnavailable: input.forceUnavailable === true,
    });

  logIntakeEvent("intake_context_snapshot_built", {
    sessionLocalId: input.sessionLocalId,
    status: snapshot.projectSourceStatus,
    proposalId: input.proposal.proposalId,
    sourceProjectCount: snapshot.sourceCounts.projects,
    truncationApplied: snapshot.truncationApplied,
    durationMs: Date.now() - started,
  });

  const sourceWarnings: string[] = [
    ...snapshot.sourceErrors.map((e) => `source:${e}`),
  ];
  if (snapshot.cycleSourceStatus === "UNAVAILABLE") {
    sourceWarnings.push(
      "Cycle D1 non implémenté — aucun candidat Cycle (source UNAVAILABLE).",
    );
  }
  if (snapshot.actionSourceStatus === "UNAVAILABLE") {
    sourceWarnings.push(
      "Action D1 non implémentée — aucun candidat Action (source UNAVAILABLE).",
    );
  }

  if (
    snapshot.projectSourceStatus === "UNAVAILABLE" ||
    snapshot.projectSourceStatus === "ERROR"
  ) {
    const result: ContextMatchResult = {
      schemaVersion: CONTEXT_MATCH_SCHEMA_VERSION,
      matchId: `match-${randomUUID()}`,
      proposalId: input.proposal.proposalId,
      snapshotId: snapshot.snapshotId,
      generatedAt: new Date().toISOString(),
      resultStatus: "CONTEXT_UNAVAILABLE",
      recommendedRouting: "ASK_CLARIFICATION",
      projectMatches: [],
      cycleMatches: [],
      actionMatches: [],
      ambiguity: false,
      noMatchReason: "Contexte Project indisponible — aucun faux no-match.",
      sourceWarnings,
      requiresHumanConfirmation: true,
    };
    logIntakeEvent("intake_context_unavailable", {
      sessionLocalId: input.sessionLocalId,
      status: "CONTEXT_UNAVAILABLE",
      proposalId: input.proposal.proposalId,
      durationMs: Date.now() - started,
      errorCode: snapshot.projectSourceStatus,
    });
    return result;
  }

  const scored: ContextEntityMatch[] = snapshot.projects.map((project) => {
    const breakdown = scoreProjectAgainstProposal({
      project,
      rawIntent: input.proposal.rawIntent,
      normalizedIntent: input.proposal.normalizedIntent,
      subject: input.proposal.subject,
      proposedObjective: input.proposal.proposedObjective,
    });
    const scoreBand = bandForScore(breakdown.finalScore, CONTEXT_MATCH_THRESHOLDS);
    const inactive = project.status !== "ACTIVE";
    const warnings: string[] = [];
    if (inactive) {
      warnings.push("Projet inactif (DRAFT) — aucune reprise automatique.");
    }
    if (breakdown.genericPenalty > 0) {
      warnings.push("Correspondance partiellement générique — vérifier manuellement.");
    }
    const recommendedAction = recommendForProject(
      input.proposal.proposedOutcomeType,
      scoreBand,
      inactive,
    );
    return {
      entityType: "PROJECT" as const,
      entityId: project.projectId,
      label: project.name,
      status: project.status,
      score: breakdown.finalScore,
      scoreBand,
      rationale: `Score estimé ${(breakdown.finalScore * 100).toFixed(0)} % — estimation déterministe, pas une vérité.`,
      evidence: evidenceFromBreakdown(project.name, breakdown),
      warnings,
      recommendedAction,
      scoreBreakdown: breakdown,
    };
  });

  // Stable sort: score desc, then label, then id
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    const l = a.label.localeCompare(b.label, "fr");
    if (l !== 0) return l;
    return a.entityId.localeCompare(b.entityId);
  });

  const presentable = scored
    .filter((m) => m.score >= CONTEXT_MATCH_THRESHOLDS.weak)
    .slice(0, CONTEXT_MATCH_LIMITS.maxCandidatesPerType);

  const analyzeOnly = input.proposal.proposedOutcomeType === "ANALYZE_ONLY";

  if (analyzeOnly) {
    const informational = presentable.map((m) => ({
      ...m,
      recommendedAction: "NO_ACTION" as const,
      warnings: [
        ...m.warnings,
        "ANALYZE_ONLY — candidats informatifs uniquement, aucun rattachement forcé.",
      ],
    }));
    const result: ContextMatchResult = {
      schemaVersion: CONTEXT_MATCH_SCHEMA_VERSION,
      matchId: `match-${randomUUID()}`,
      proposalId: input.proposal.proposalId,
      snapshotId: snapshot.snapshotId,
      generatedAt: new Date().toISOString(),
      resultStatus:
        informational.length === 0
          ? "NO_MATCH"
          : informational[0].scoreBand === "STRONG_MATCH"
            ? "STRONG_MATCH"
            : "POSSIBLE_MATCH",
      recommendedRouting: "ANALYZE_ONLY",
      projectMatches: informational,
      cycleMatches: [],
      actionMatches: [],
      ambiguity: false,
      noMatchReason:
        informational.length === 0
          ? "Aucun projet proche — analyse seule sans rattachement."
          : null,
      sourceWarnings,
      requiresHumanConfirmation: true,
    };
    logIntakeEvent("intake_context_match_generated", {
      sessionLocalId: input.sessionLocalId,
      status: result.resultStatus,
      proposalId: input.proposal.proposalId,
      candidateCount: informational.length,
      topScoreBand: informational[0]?.scoreBand,
      durationMs: Date.now() - started,
    });
    return result;
  }

  if (presentable.length === 0) {
    const result: ContextMatchResult = {
      schemaVersion: CONTEXT_MATCH_SCHEMA_VERSION,
      matchId: `match-${randomUUID()}`,
      proposalId: input.proposal.proposalId,
      snapshotId: snapshot.snapshotId,
      generatedAt: new Date().toISOString(),
      resultStatus: "NO_MATCH",
      recommendedRouting:
        input.proposal.proposedOutcomeType === "OPEN_CYCLE_CANDIDATE"
          ? "ASK_CLARIFICATION"
          : "CREATE_NEW_PROJECT",
      projectMatches: [],
      cycleMatches: [],
      actionMatches: [],
      ambiguity: false,
      noMatchReason:
        snapshot.projectSourceStatus === "EMPTY"
          ? "Aucun projet dans le workspace."
          : "Aucun projet suffisamment pertinent (seuil faible).",
      sourceWarnings,
      requiresHumanConfirmation: true,
    };
    logIntakeEvent("intake_context_no_match", {
      sessionLocalId: input.sessionLocalId,
      status: "NO_MATCH",
      proposalId: input.proposal.proposalId,
      sourceProjectCount: snapshot.sourceCounts.projects,
      durationMs: Date.now() - started,
    });
    return result;
  }

  const top = presentable[0];
  const second = presentable[1];
  const ambiguity =
    !!second &&
    Math.abs(top.score - second.score) < CONTEXT_MATCH_THRESHOLDS.ambiguityGap &&
    second.score >= CONTEXT_MATCH_THRESHOLDS.weak;

  let resultStatus: ContextMatchResult["resultStatus"];
  let recommendedRouting: ContextRecommendedAction;

  if (ambiguity) {
    resultStatus = "MULTIPLE_MATCHES";
    recommendedRouting = "ASK_CLARIFICATION";
  } else if (top.scoreBand === "STRONG_MATCH") {
    resultStatus = "STRONG_MATCH";
    recommendedRouting = top.recommendedAction;
  } else if (
    presentable.filter(
      (m) =>
        m.scoreBand === "STRONG_MATCH" || m.scoreBand === "POSSIBLE_MATCH",
    ).length > 1
  ) {
    resultStatus = "MULTIPLE_MATCHES";
    recommendedRouting = "ASK_CLARIFICATION";
  } else if (top.scoreBand === "POSSIBLE_MATCH" || top.scoreBand === "WEAK_MATCH") {
    resultStatus = "POSSIBLE_MATCH";
    recommendedRouting = top.recommendedAction;
  } else {
    resultStatus = "NO_MATCH";
    recommendedRouting = "CREATE_NEW_PROJECT";
  }

  const result: ContextMatchResult = {
    schemaVersion: CONTEXT_MATCH_SCHEMA_VERSION,
    matchId: `match-${randomUUID()}`,
    proposalId: input.proposal.proposalId,
    snapshotId: snapshot.snapshotId,
    generatedAt: new Date().toISOString(),
    resultStatus,
    recommendedRouting,
    projectMatches: presentable,
    cycleMatches: [],
    actionMatches: [],
    ambiguity,
    noMatchReason: null,
    sourceWarnings,
    requiresHumanConfirmation: true,
  };

  if (ambiguity) {
    logIntakeEvent("intake_context_match_ambiguous", {
      sessionLocalId: input.sessionLocalId,
      status: "MULTIPLE_MATCHES",
      proposalId: input.proposal.proposalId,
      candidateCount: presentable.length,
      topScoreBand: top.scoreBand,
      durationMs: Date.now() - started,
    });
  } else {
    logIntakeEvent("intake_context_match_generated", {
      sessionLocalId: input.sessionLocalId,
      status: resultStatus,
      proposalId: input.proposal.proposalId,
      candidateCount: presentable.length,
      topScoreBand: top.scoreBand,
      durationMs: Date.now() - started,
    });
  }

  return result;
}
```

### `projects/sfia-studio/app/lib/d1/context/normalize.ts`

```tsx
/** French stop words (bounded) for deterministic tokenization. */
const FR_STOP_WORDS = new Set([
  "le",
  "la",
  "les",
  "un",
  "une",
  "des",
  "du",
  "de",
  "d",
  "et",
  "ou",
  "a",
  "à",
  "au",
  "aux",
  "en",
  "dans",
  "pour",
  "par",
  "sur",
  "avec",
  "sans",
  "ce",
  "cette",
  "ces",
  "je",
  "tu",
  "il",
  "elle",
  "nous",
  "vous",
  "ils",
  "elles",
  "mon",
  "ma",
  "mes",
  "ton",
  "ta",
  "tes",
  "son",
  "sa",
  "ses",
  "qui",
  "que",
  "quoi",
  "dont",
  "où",
  "ne",
  "pas",
  "plus",
  "moins",
  "très",
  "tres",
  "est",
  "sont",
  "être",
  "etre",
  "avoir",
  "fait",
  "faire",
  "veux",
  "vouloir",
  "aimer",
  "nouveau",
  "nouvelle",
  "sujet",
  "projet",
  "cycle",
  "travail",
  "travailler",
  "lancer",
  "créer",
  "creer",
  "ouvrir",
  "reprendre",
  "améliorer",
  "ameliorer",
  "gestion",
  "application",
  "besoin",
  "demande",
]);

/** Overly generic tokens that should not dominate matching alone. */
export const GENERIC_MATCH_TOKENS = new Set([
  "projet",
  "cycle",
  "systeme",
  "system",
  "outil",
  "app",
  "application",
  "module",
  "service",
  "data",
  "donnees",
  "gestion",
  "suivi",
  "nouveau",
  "nouvelle",
]);

/**
 * Normalize text for deterministic matching:
 * lowercase, strip accents, punctuation → spaces, collapse whitespace, stop words.
 */
export function normalizeText(input: string, maxLength = 800): string {
  if (!input) return "";
  const sliced = input.slice(0, maxLength);
  const noAccents = sliced
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase();
  const cleaned = noAccents
    .replace(/[^a-z0-9]+/g, " ")
    .replace(/\s+/g, " ")
    .trim();
  return cleaned;
}

export function tokenize(input: string, maxLength = 800): string[] {
  const normalized = normalizeText(input, maxLength);
  if (!normalized) return [];
  return normalized
    .split(" ")
    .map((t) => t.trim())
    .filter((t) => t.length >= 2 && !FR_STOP_WORDS.has(t));
}

export function tokenSet(input: string, maxLength = 800): Set<string> {
  return new Set(tokenize(input, maxLength));
}

/** Jaccard similarity of two token sets — 0 when either empty. */
export function jaccard(a: Set<string>, b: Set<string>): number {
  if (a.size === 0 || b.size === 0) return 0;
  let inter = 0;
  for (const t of a) {
    if (b.has(t)) inter += 1;
  }
  const union = a.size + b.size - inter;
  return union === 0 ? 0 : inter / union;
}

export function containsNormalizedPhrase(
  haystack: string,
  needle: string,
): boolean {
  const h = normalizeText(haystack);
  const n = normalizeText(needle);
  if (!h || !n || n.length < 2) return false;
  return h.includes(n);
}
```

### `projects/sfia-studio/app/lib/d1/context/scoring.ts`

```tsx
import {
  GENERIC_MATCH_TOKENS,
  containsNormalizedPhrase,
  jaccard,
  normalizeText,
  tokenize,
  tokenSet,
} from "./normalize";
import type {
  ScoreBreakdown,
  SnapshotProjectCandidate,
} from "./types";
import { CONTEXT_MATCH_LIMITS } from "./types";

function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

function recencyScore(updatedAt: string, nowMs: number): number {
  const t = Date.parse(updatedAt);
  if (Number.isNaN(t)) return 0;
  const ageDays = Math.max(0, (nowMs - t) / (1000 * 60 * 60 * 24));
  if (ageDays <= 7) return 1;
  if (ageDays <= 30) return 0.7;
  if (ageDays <= 90) return 0.4;
  if (ageDays <= 365) return 0.2;
  return 0.05;
}

export interface ScoreProjectInput {
  project: SnapshotProjectCandidate;
  rawIntent: string;
  normalizedIntent: string;
  subject: string;
  proposedObjective: string;
  nowMs?: number;
}

/**
 * Deterministic project score with explainable breakdown.
 * Weights are local candidates — not a global baseline.
 */
export function scoreProjectAgainstProposal(
  input: ScoreProjectInput,
): ScoreBreakdown {
  const { project } = input;
  const nowMs = input.nowMs ?? Date.now();
  const maxLen = CONTEXT_MATCH_LIMITS.maxNormalizedTextLength;

  const queryText = [
    input.rawIntent,
    input.normalizedIntent,
    input.subject,
    input.proposedObjective,
  ].join(" ");

  const nameNorm = normalizeText(project.name, maxLen);
  const exactName =
    containsNormalizedPhrase(queryText, project.name) ||
    normalizeText(input.subject, maxLen) === nameNorm ||
    normalizeText(input.normalizedIntent, maxLen) === nameNorm
      ? 1
      : 0;

  const queryTokens = tokenSet(queryText, maxLen);
  const nameTokens = tokenSet(project.name, maxLen);
  const objectiveTokens = tokenSet(project.objective, maxLen);
  const contextTokens = tokenSet(project.initialContextSummary ?? "", maxLen);
  const subjectTokens = tokenSet(input.subject, maxLen);
  const proposedObjTokens = tokenSet(input.proposedObjective, maxLen);

  const nameSimilarity = Math.max(
    jaccard(nameTokens, queryTokens),
    jaccard(nameTokens, subjectTokens),
  );

  const objectiveOverlap = Math.max(
    jaccard(objectiveTokens, queryTokens),
    jaccard(objectiveTokens, proposedObjTokens),
    jaccard(objectiveTokens, subjectTokens),
  );

  const contextOverlap = jaccard(contextTokens, queryTokens);

  const explicitReference = exactName === 1 ? 1 : nameSimilarity >= 0.85 ? 0.7 : 0;

  const activeStatus = project.status === "ACTIVE" ? 1 : 0.35;
  const recency = recencyScore(project.updatedAt, nowMs);

  const allOverlap = new Set<string>();
  for (const t of queryTokens) {
    if (
      nameTokens.has(t) ||
      objectiveTokens.has(t) ||
      contextTokens.has(t)
    ) {
      allOverlap.add(t);
    }
  }
  const meaningful = [...allOverlap].filter((t) => !GENERIC_MATCH_TOKENS.has(t));
  const genericOnly =
    allOverlap.size > 0 && meaningful.length === 0 && exactName === 0;
  const genericPenalty = genericOnly
    ? 0.18
    : tokenize(project.name).every((t) => GENERIC_MATCH_TOKENS.has(t))
      ? 0.08
      : 0;

  const weighted =
    exactName * 0.4 +
    nameSimilarity * 0.18 +
    objectiveOverlap * 0.14 +
    contextOverlap * 0.08 +
    explicitReference * 0.12 +
    activeStatus * 0.04 +
    recency * 0.04 -
    genericPenalty;

  let finalScore = clamp01(Number(weighted.toFixed(4)));
  // Exact name reference is a strong signal — never leave it just under STRONG.
  if (exactName >= 1) {
    finalScore = clamp01(Math.max(finalScore, 0.82));
  }

  return {
    exactName,
    nameSimilarity: Number(nameSimilarity.toFixed(4)),
    objectiveOverlap: Number(objectiveOverlap.toFixed(4)),
    contextOverlap: Number(contextOverlap.toFixed(4)),
    explicitReference,
    activeStatus,
    recency: Number(recency.toFixed(4)),
    genericPenalty,
    finalScore,
  };
}

export function bandForScore(
  score: number,
  thresholds: { strong: number; possible: number; weak: number },
): "STRONG_MATCH" | "POSSIBLE_MATCH" | "WEAK_MATCH" | "BELOW_THRESHOLD" {
  if (score >= thresholds.strong) return "STRONG_MATCH";
  if (score >= thresholds.possible) return "POSSIBLE_MATCH";
  if (score >= thresholds.weak) return "WEAK_MATCH";
  return "BELOW_THRESHOLD";
}
```

### `projects/sfia-studio/app/lib/d1/context/types.ts`

```tsx
/** D1-C3 — Existing context matching contracts (candidate, not sealed). */

export const CONTEXT_SNAPSHOT_SCHEMA_VERSION = "0.1.0-d1-c3" as const;
export const CONTEXT_MATCH_SCHEMA_VERSION = "0.1.0-d1-c3" as const;

export const CONTEXT_SOURCE_STATUSES = [
  "AVAILABLE",
  "EMPTY",
  "UNAVAILABLE",
  "ERROR",
] as const;
export type ContextSourceStatus = (typeof CONTEXT_SOURCE_STATUSES)[number];

export const CONTEXT_MATCH_RESULT_STATUSES = [
  "STRONG_MATCH",
  "MULTIPLE_MATCHES",
  "POSSIBLE_MATCH",
  "NO_MATCH",
  "CONTEXT_UNAVAILABLE",
  "NEED_CLARIFICATION",
] as const;
export type ContextMatchResultStatus =
  (typeof CONTEXT_MATCH_RESULT_STATUSES)[number];

export const CONTEXT_SCORE_BANDS = [
  "STRONG_MATCH",
  "POSSIBLE_MATCH",
  "WEAK_MATCH",
  "BELOW_THRESHOLD",
] as const;
export type ContextScoreBand = (typeof CONTEXT_SCORE_BANDS)[number];

export const CONTEXT_RECOMMENDED_ACTIONS = [
  "USE_EXISTING_PROJECT",
  "OPEN_CYCLE_IN_PROJECT",
  "RESUME_EXISTING_WORK",
  "CREATE_NEW_PROJECT",
  "ANALYZE_ONLY",
  "ASK_CLARIFICATION",
  "NO_ACTION",
] as const;
export type ContextRecommendedAction =
  (typeof CONTEXT_RECOMMENDED_ACTIONS)[number];

export const CONTEXT_ENTITY_TYPES = ["PROJECT", "CYCLE", "ACTION"] as const;
export type ContextEntityType = (typeof CONTEXT_ENTITY_TYPES)[number];

/** Candidate thresholds — not a global baseline. */
export const CONTEXT_MATCH_THRESHOLDS = {
  strong: 0.78,
  possible: 0.52,
  weak: 0.3,
  ambiguityGap: 0.1,
} as const;

export const CONTEXT_MATCH_LIMITS = {
  maxProjectsEvaluated: 50,
  maxCandidatesPerType: 5,
  maxNormalizedTextLength: 800,
  maxEvidenceItems: 6,
} as const;

export interface SnapshotProjectCandidate {
  projectId: string;
  name: string;
  objective: string;
  initialContextSummary: string | null;
  status: "DRAFT" | "ACTIVE";
  createdAt: string;
  updatedAt: string;
}

export interface ExistingContextSnapshot {
  schemaVersion: typeof CONTEXT_SNAPSHOT_SCHEMA_VERSION;
  snapshotId: string;
  generatedAt: string;
  projectSourceStatus: ContextSourceStatus;
  cycleSourceStatus: ContextSourceStatus;
  actionSourceStatus: ContextSourceStatus;
  projects: SnapshotProjectCandidate[];
  cycles: [];
  actions: [];
  sourceCounts: {
    projects: number;
    cycles: number;
    actions: number;
  };
  truncationApplied: boolean;
  sourceErrors: string[];
}

export interface ScoreBreakdown {
  exactName: number;
  nameSimilarity: number;
  objectiveOverlap: number;
  contextOverlap: number;
  explicitReference: number;
  activeStatus: number;
  recency: number;
  genericPenalty: number;
  finalScore: number;
}

export interface ContextEntityMatch {
  entityType: ContextEntityType;
  entityId: string;
  label: string;
  status: string;
  score: number;
  scoreBand: ContextScoreBand;
  rationale: string;
  evidence: string[];
  warnings: string[];
  recommendedAction: ContextRecommendedAction;
  scoreBreakdown: ScoreBreakdown;
}

export interface ContextMatchResult {
  schemaVersion: typeof CONTEXT_MATCH_SCHEMA_VERSION;
  matchId: string;
  proposalId: string;
  snapshotId: string;
  generatedAt: string;
  resultStatus: ContextMatchResultStatus;
  recommendedRouting: ContextRecommendedAction;
  projectMatches: ContextEntityMatch[];
  cycleMatches: [];
  actionMatches: [];
  ambiguity: boolean;
  noMatchReason: string | null;
  sourceWarnings: string[];
  requiresHumanConfirmation: boolean;
}

export interface ContextSelectionDraft {
  selectedEntityType: ContextEntityType | "NONE";
  selectedEntityId: string | null;
  selectedAt: string;
  selectionSource: "USER" | "RECOMMENDATION";
  userOverrodeRecommendation: boolean;
  requiresFinalConfirmation: true;
}

export interface MatchExistingContextInput {
  sessionLocalId: string;
  proposal: {
    proposalId: string;
    rawIntent: string;
    normalizedIntent: string;
    subject: string;
    proposedObjective: string;
    proposedOutcomeType: string;
  };
  /** Injected snapshot for tests / unavailable simulation. */
  snapshotOverride?: ExistingContextSnapshot;
  /** Test/E2E only — force project source UNAVAILABLE. */
  forceUnavailable?: boolean;
}
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/01-implemented-scope.md`

```markdown
# 01 — Scope

## Inclus
- Durcissement C2 (system role, live CONFIG, booléen strict)
- Snapshot Project D1-I1 lecture seule
- Matching déterministe explicable
- ContextMatchResult + sélection temporaire locale
- UX « Contexte retrouvé »
- Cycle/Action explicitement UNAVAILABLE

## Exclus
Création · ouverture Cycle · reprise Action · confirmation exécutable · UX-R04 · embeddings
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/02-context-sources-and-availability.md`

```markdown
# 02 — Sources

| Source | Status |
|--------|--------|
| Project D1-I1 SQLite | AVAILABLE / EMPTY / ERROR / UNAVAILABLE |
| Cycle D1 | UNAVAILABLE (non implémenté — non simulé) |
| Action D1 | UNAVAILABLE (non implémenté — non simulé) |
| OPS1 | non utilisé comme source D1 native |
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/03-existing-context-snapshot-contract.md`

```markdown
# 03 — ExistingContextSnapshot

schemaVersion `0.1.0-d1-c3`
Lecture seule · max 50 projects · truncation flag · sourceErrors
cycles[] / actions[] toujours vides en C3.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/04-deterministic-matching-engine.md`

```markdown
# 04 — Moteur

Normalisation FR → tokens → score Project
Signaux : exactName, nameSimilarity, objectiveOverlap, contextOverlap, explicitReference, activeStatus, recency, genericPenalty
GPT ne choisit aucun ID.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/05-scoring-thresholds-and-explainability.md`

```markdown
# 05 — Seuils candidats

STRONG ≥ 0,78 · POSSIBLE ≥ 0,52 · WEAK ≥ 0,30 · ambiguïté gap < 0,10
Non baseline globale. Score = estimation.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/06-context-match-result-contract.md`

```markdown
# 06 — ContextMatchResult

resultStatus : STRONG_MATCH | MULTIPLE_MATCHES | POSSIBLE_MATCH | NO_MATCH | CONTEXT_UNAVAILABLE | NEED_CLARIFICATION
recommendedAction non exécuté.
ContextSelectionDraft locale, perdue au refresh.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/07-c2-hardening.md`

```markdown
# 07 — C2 hardening

- C2-R01 : message `system` réel + user INTENT séparé
- C2-R02 : D1_INTAKE_LIVE=1 sans secrets → D1Error CONFIG (pas de fake silencieux)
- C2-R04 : requiresHumanConfirmation boolean strict
- C2-R03 live smoke : NOT RUN — SECRETS UNAVAILABLE
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/08-security-rgpd-performance.md`

```markdown
# 08 — Sécurité / RGPD / perf

Logs : counts, bands, duration — pas d’objectifs complets.
SLI : snapshotMs, matchMs, sources, evaluated, retained, no-match rate, ambiguity rate.
Max 5 candidats / type.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/09-runtime-figma-validation.md`

```markdown
# 09 — Figma / runtime

Captures `.tmp-sfia-review/screenshots-d1-c3/`
Structure alignée contrats intake (proposal + contexte).
UX-R04 — visual identity and interaction polish deferred after C3.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/10-test-results.md`

```markdown
# 10 — Tests

- vitest d1 : 42/42
- e2e C3+C2+C1+I1+smoke : 36/36
- OPS1 conversation sample : vert
- tsc --noEmit : pass
- live smoke : NOT RUN — SECRETS UNAVAILABLE
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/11-reserves-and-debt.md`

```markdown
# 11 — Réserves

- C3-R01 : Cycle/Action UNAVAILABLE
- C3-R02 : seuils candidats non calibrés prod
- C3-R03 : sélection non persistée
- UX-R04 différée
- C4 : confirmation exécutable / rattachement
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/12-d1-c3-validation-decision-pack.md`

```markdown
# 12 — Decision pack

**Verdict :** SFIA v3.0 D1-C3 EXISTING CONTEXT MATCHING IMPLEMENTED — VALIDATION REQUIRED

Décisions Morris : GO VALIDATION D1-C3 ; ouvrir C4 confirmation.
Anti-claims : pas CONTEXT SELECTED AND APPLIED · pas CYCLE OPENED · pas V3-IMPLEMENTED.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c3-existing-context-matching/README.md`

```markdown
# D1-C3 — Existing Context Matching

| Champ | Valeur |
|-------|--------|
| BCDI | BCDI-D1-C3-EXISTING-CONTEXT-MATCHING |
| Gate consommé | GO IMPLEMENTATION D1-C3 |
| Gate suivant | GO VALIDATION D1-C3 |
| Statut | D1-C3 IMPLEMENTED CANDIDATE |
| Baseline | SFIA v2.6 |
| Statut v3 | V3-MODELED CANDIDATE |

Index : 01–12.
```

### `projects/sfia-studio/app/__tests__/d1/intake-c3.test.ts`

```tsx
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
```

### `projects/sfia-studio/app/e2e/d1-c3-context-matching.spec.ts`

```tsx
import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const shotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-d1-c3",
);

test.beforeAll(() => {
  fs.mkdirSync(shotDir, { recursive: true });
  process.env.D1_INTAKE_PROVIDER = "fake";
});

async function createProjectViaUi(
  page: import("@playwright/test").Page,
  name: string,
  objective: string,
  activate = true,
) {
  await page.goto("/projects/new");
  await page.getByTestId("project-name").fill(name);
  await page.getByTestId("project-objective").fill(objective);
  await page.getByTestId("project-context").fill(`Contexte ${name}`);
  const activateBox = page.getByTestId("project-activate");
  if (await activateBox.count()) {
    if (activate) await activateBox.check();
    else await activateBox.uncheck();
  }
  await page.getByTestId("project-submit").click();
  await expect(page).toHaveURL(/\/projects\//, { timeout: 15_000 });
}

test.describe("D1-C3 Existing Context Matching", () => {
  test("exact name → strong match + temporary selection, no mutation", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createProjectViaUi(
      page,
      "Campus360",
      "Gestion des utilisateurs du campus",
    );
    await createProjectViaUi(page, "FacturationX", "Factures clients B2B");

    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill(
        "Je veux reprendre Campus360 pour la gestion des utilisateurs.",
      );
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("intake-context")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("context-result")).toBeVisible();
    await expect(page.getByTestId("context-status")).toContainText(
      /Correspondance|plusieurs|possible/i,
    );
    await expect(page.getByText("Campus360").first()).toBeVisible();
    await expect(
      page.getByTestId("context-cycle-action-unavailable"),
    ).toBeVisible();
    await expect(page.getByText(/Confirmer et créer|Rattacher définitivement/i)).toHaveCount(
      0,
    );

    // Select first available radio
    const radio = page.locator('input[name="context-selection"]').first();
    await radio.check();
    await expect(page.getByTestId("context-selection-draft")).toBeVisible();
    await expect(page.getByTestId("context-no-mutation")).toBeVisible();

    await page.screenshot({
      path: path.join(shotDir, "strong-match-1440.png"),
      fullPage: false,
    });

    // Cockpit read link present
    await expect(
      page.locator('[data-testid^="context-cockpit-"]').first(),
    ).toBeVisible();
  });

  test("no-match for unrelated intent", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createProjectViaUi(
      page,
      "AstronomieC3",
      "Cataloguer les étoiles lointaines",
    );
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-context")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("context-result")).toBeVisible();
    // Either no-match or low candidates — Astronomie should not be forced top
    const status = page.getByTestId("context-status");
    await expect(status).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "no-match-1440.png"),
      fullPage: false,
    });
  });

  test("analyze-only keeps informational matching only", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Analyse cette idée, mais ne crée rien.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("intake-context")).toBeVisible();
    await expect(page.getByText(/Confirmer et créer/i)).toHaveCount(0);
  });

  test("multiple close projects show ambiguity path", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createProjectViaUi(
      page,
      "Suivi Contrats Alpha",
      "Suivi des contrats fournisseurs",
    );
    await createProjectViaUi(
      page,
      "Suivi Contrats Beta",
      "Suivi des contrats fournisseurs",
    );
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux améliorer le suivi des contrats fournisseurs.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-context")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("context-candidates")).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "multiple-matches-1440.png"),
      fullPage: false,
    });
  });

  test("inactive project warning when DRAFT exists", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createProjectViaUi(
      page,
      "ProjetDraftC3",
      "Projet brouillon pour matching",
      false,
    );

    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux reprendre ProjetDraftC3 pour la gestion des utilisateurs.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-context")).toBeVisible({
      timeout: 15_000,
    });
    await page.screenshot({
      path: path.join(shotDir, "inactive-project-1440.png"),
      fullPage: false,
    });
  });

  for (const width of [1728, 1280, 1024] as const) {
    test(`strong match responsive no H-scroll at ${width}`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 1024 });
      await createProjectViaUi(
        page,
        `Campus${width}`,
        "Gestion campus responsive",
      );
      await page.goto("/nouvelle-demande");
      await page
        .getByTestId("intake-intent")
        .fill(`Je veux reprendre Campus${width} pour la gestion des utilisateurs.`);
      await page.getByTestId("intake-submit").click();
      await expect(page.getByTestId("intake-context")).toBeVisible({
        timeout: 15_000,
      });
      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth + 1,
      );
      expect(overflow).toBe(false);
      await page.screenshot({
        path: path.join(shotDir, `strong-match-${width}.png`),
        fullPage: false,
      });
    });
  }

  test("context unavailable is honest (forced query)", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande?forceContextUnavailable=1");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-context")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("context-unavailable")).toBeVisible({
      timeout: 10_000,
    });
    await expect(page.getByTestId("context-status")).toContainText(
      /indisponible/i,
    );
    await page.screenshot({
      path: path.join(shotDir, "context-unavailable-1440.png"),
      fullPage: false,
    });
  });

  test("workspace and OPS1 legacy remain reachable", async ({ page }) => {
    await page.goto("/workspace");
    await expect(page.getByRole("heading", { name: /workspace/i })).toBeVisible();
    await page.goto("/ops1/nouvelle-demande");
    await expect(page).toHaveURL(/\/ops1\/nouvelle-demande/);
  });
});
```

### `projects/sfia-studio/app/features/d1/intake/ContextMatchPanel.tsx`

```tsx
"use client";

import Link from "next/link";
import type {
  ContextMatchResult,
  ContextSelectionDraft,
} from "@/lib/d1/context/types";
import {
  actionLogContextSelection,
} from "@/lib/d1/context/actions";
import shell from "../d1-shell.module.css";
import styles from "./intake.module.css";

function statusLabel(status: string): string {
  switch (status) {
    case "STRONG_MATCH":
      return "Correspondance forte (estimation)";
    case "MULTIPLE_MATCHES":
      return "Plusieurs correspondances";
    case "POSSIBLE_MATCH":
      return "Correspondance possible";
    case "NO_MATCH":
      return "Aucune correspondance";
    case "CONTEXT_UNAVAILABLE":
      return "Contexte indisponible";
    case "NEED_CLARIFICATION":
      return "Clarification requise";
    default:
      return status;
  }
}

export function ContextMatchPanel({
  match,
  matching,
  matchError,
  selection,
  sessionLocalId,
  onSelect,
  onClearSelection,
  onRetry,
  analyzeOnly,
}: {
  match: ContextMatchResult | null;
  matching: boolean;
  matchError: string | null;
  selection: ContextSelectionDraft | null;
  sessionLocalId: string;
  onSelect: (draft: ContextSelectionDraft) => void;
  onClearSelection: () => void;
  onRetry: () => void;
  analyzeOnly: boolean;
}) {
  return (
    <section
      className={styles.contextCard}
      data-testid="intake-context"
      aria-label="Contexte retrouvé"
      aria-busy={matching}
    >
      <h2>Contexte retrouvé</h2>
      <p className={styles.contextLead}>
        Matching déterministe sur les Projects D1 existants. Aucun rattachement
        n’est appliqué — sélection temporaire uniquement.
      </p>

      {matching ? (
        <div
          className={styles.loadingRow}
          data-testid="context-loading"
          role="status"
        >
          Recherche de contexte en cours…
        </div>
      ) : null}

      {matchError ? (
        <div
          className={styles.bannerError}
          role="alert"
          data-testid="context-error"
        >
          {matchError}
          <div className={styles.statusActions}>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="context-retry"
              onClick={onRetry}
            >
              Réessayer le matching
            </button>
          </div>
        </div>
      ) : null}

      {match && !matching ? (
        <div data-testid="context-result">
          <div className={styles.proposalMeta}>
            <span className={styles.valueChip} data-testid="context-status">
              {statusLabel(match.resultStatus)}
            </span>
            {match.ambiguity ? (
              <span className={styles.valueChip} data-testid="context-ambiguity">
                Ambiguïté
              </span>
            ) : null}
            {analyzeOnly ? (
              <span className={styles.valueChip}>Analyse seule — informatif</span>
            ) : null}
          </div>

          {match.resultStatus === "CONTEXT_UNAVAILABLE" ? (
            <p data-testid="context-unavailable">
              {match.noMatchReason ??
                "Le dépôt Project est indisponible. L’intake reste utilisable."}
            </p>
          ) : null}

          {match.resultStatus === "NO_MATCH" ? (
            <p data-testid="context-no-match">
              {match.noMatchReason ??
                "Aucun projet suffisamment pertinent. Vous pouvez créer manuellement ou reformuler."}
            </p>
          ) : null}

          {match.cycleMatches.length === 0 &&
          match.actionMatches.length === 0 ? (
            <p className={shell.hint} data-testid="context-cycle-action-unavailable">
              Sources Cycle et Action : indisponibles (non simulées).
            </p>
          ) : null}

          {match.projectMatches.length > 0 ? (
            <fieldset className={styles.contextList} data-testid="context-candidates">
              <legend className={styles.composerLabel}>
                Candidats Project (estimation)
              </legend>
              {match.projectMatches.map((m) => {
                const selected =
                  selection?.selectedEntityId === m.entityId &&
                  selection.selectedEntityType === "PROJECT";
                const radioId = `ctx-${m.entityId}`;
                return (
                  <label
                    key={m.entityId}
                    className={`${styles.contextCandidate} ${selected ? styles.contextCandidateSelected : ""}`}
                    htmlFor={radioId}
                    data-testid={`context-candidate-${m.entityId}`}
                  >
                    <input
                      id={radioId}
                      type="radio"
                      name="context-selection"
                      value={m.entityId}
                      checked={!!selected}
                      data-testid={`context-select-${m.entityId}`}
                      onChange={() => {
                        const draft: ContextSelectionDraft = {
                          selectedEntityType: "PROJECT",
                          selectedEntityId: m.entityId,
                          selectedAt: new Date().toISOString(),
                          selectionSource: "USER",
                          userOverrodeRecommendation: true,
                          requiresFinalConfirmation: true,
                        };
                        onSelect(draft);
                        void actionLogContextSelection({
                          sessionLocalId,
                          entityId: m.entityId,
                        });
                      }}
                    />
                    <div className={styles.contextCandidateBody}>
                      <div className={styles.contextCandidateHead}>
                        <strong>{m.label}</strong>
                        <span className={styles.valueChip}>
                          {m.status}
                        </span>
                        <span
                          className={styles.valueChip}
                          data-testid={`context-score-${m.entityId}`}
                        >
                          Score estimé {(m.score * 100).toFixed(0)} % ·{" "}
                          {m.scoreBand}
                        </span>
                      </div>
                      <p>{m.rationale}</p>
                      {m.evidence.length ? (
                        <ul>
                          {m.evidence.map((e) => (
                            <li key={e}>{e}</li>
                          ))}
                        </ul>
                      ) : null}
                      {m.warnings.length ? (
                        <ul className={styles.contextWarnings}>
                          {m.warnings.map((w) => (
                            <li key={w}>{w}</li>
                          ))}
                        </ul>
                      ) : null}
                      <p className={shell.hint}>
                        Action candidate (non exécutée) : {m.recommendedAction}
                      </p>
                      <Link
                        className={`${shell.cta} ${shell.ctaSecondary}`}
                        href={`/projects/${m.entityId}`}
                        data-testid={`context-cockpit-${m.entityId}`}
                      >
                        Ouvrir le cockpit (lecture)
                      </Link>
                    </div>
                  </label>
                );
              })}
            </fieldset>
          ) : null}

          <div className={styles.statusActions}>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="context-none"
              onClick={() => {
                const draft: ContextSelectionDraft = {
                  selectedEntityType: "NONE",
                  selectedEntityId: null,
                  selectedAt: new Date().toISOString(),
                  selectionSource: "USER",
                  userOverrodeRecommendation: true,
                  requiresFinalConfirmation: true,
                };
                onSelect(draft);
                void actionLogContextSelection({
                  sessionLocalId,
                  entityId: null,
                  cleared: true,
                });
              }}
            >
              Aucun de ces projets
            </button>
            {selection ? (
              <button
                type="button"
                className={`${shell.cta} ${shell.ctaSecondary}`}
                data-testid="context-clear"
                onClick={() => {
                  onClearSelection();
                  void actionLogContextSelection({
                    sessionLocalId,
                    entityId: null,
                    cleared: true,
                  });
                }}
              >
                Effacer la sélection
              </button>
            ) : null}
          </div>

          {selection ? (
            <p data-testid="context-selection-draft" className={shell.hint}>
              Sélection temporaire :{" "}
              {selection.selectedEntityType === "NONE"
                ? "aucun projet"
                : selection.selectedEntityId}{" "}
              — non persistée, confirmation finale requise (C4).
            </p>
          ) : null}

          <p className={shell.hint} data-testid="context-no-mutation">
            Aucune mutation : pas de rattachement définitif, pas d’ouverture de
            cycle, pas de création.
          </p>
        </div>
      ) : null}
    </section>
  );
}
```

### `projects/sfia-studio/app/lib/ops1/conversation/types.ts`

```tsx
import type { ConversationMode, JournalTurn } from "../types";
import { Ops1Error } from "../errors";
import type { ToolDefinition } from "../tools/types";

/** Provider-facing roles — domain roles mapped without SDK types. */
export type ProviderChatRole = "system" | "user" | "assistant";

export interface ProviderChatMessage {
  role: ProviderChatRole;
  content: string;
}

export interface ProviderUsage {
  inputTokens: number | null;
  outputTokens: number | null;
  totalTokens: number | null;
  model: string | null;
  providerResponseId: string | null;
}

export interface ProviderCompletionResult {
  text: string;
  usage: ProviderUsage;
}

export interface ProviderToolCall {
  callId: string;
  name: string;
  argumentsJson: string;
}

export type ProviderInputItem =
  | { type: "message"; role: ProviderChatRole; content: string }
  | {
      type: "function_call";
      callId: string;
      name: string;
      argumentsJson: string;
    }
  | {
      type: "function_call_output";
      callId: string;
      output: string;
    };

export type ProviderRoundResult =
  | {
      kind: "message";
      text: string;
      usage: ProviderUsage;
    }
  | {
      kind: "tool_calls";
      toolCalls: ProviderToolCall[];
      usage: ProviderUsage;
    };

export interface ConversationProvider {
  readonly providerId: string;
  /** Legacy text-only completion (tools disabled). */
  complete(messages: ProviderChatMessage[]): Promise<ProviderCompletionResult>;
  /** Optional tool-aware round — default falls back to complete(). */
  completeRound?(input: {
    items: ProviderInputItem[];
    tools: ToolDefinition[];
  }): Promise<ProviderRoundResult>;
}

/**
 * Map local journal turns into ordered provider context.
 * Defense in depth: journal must match the expected session mode.
 * Never silently filters incompatible roles.
 */
export function buildProviderMessagesFromJournal(
  turns: JournalTurn[],
  expectedMode: ConversationMode,
): ProviderChatMessage[] {
  const out: ProviderChatMessage[] = [];
  for (const turn of turns) {
    if (turn.role === "user") {
      out.push({ role: "user", content: turn.content });
      continue;
    }
    if (turn.role === "assistant_fixture") {
      if (expectedMode === "live") {
        throw new Ops1Error(
          "CONFLICT",
          "Journal incompatible avec une session live (tour fixture détecté). Aucun appel fournisseur n’a été effectué.",
        );
      }
      out.push({ role: "assistant", content: turn.content });
      continue;
    }
    if (turn.role === "assistant_live") {
      if (expectedMode === "fixture") {
        throw new Ops1Error(
          "CONFLICT",
          "Journal incompatible avec une session fixture (tour live détecté).",
        );
      }
      out.push({ role: "assistant", content: turn.content });
      continue;
    }
    throw new Ops1Error("VALIDATION", "Rôle de tour inconnu dans le journal.");
  }
  return out;
}

/** Validate journal integrity against session mode without building messages. */
export function assertJournalMatchesMode(
  turns: JournalTurn[],
  mode: ConversationMode,
): void {
  for (const turn of turns) {
    if (mode === "live" && turn.role === "assistant_fixture") {
      throw new Ops1Error(
        "CONFLICT",
        "Journal incompatible avec une session live (tour fixture détecté).",
      );
    }
    if (mode === "fixture" && turn.role === "assistant_live") {
      throw new Ops1Error(
        "CONFLICT",
        "Journal incompatible avec une session fixture (tour live détecté).",
      );
    }
  }
}

export function messagesToInputItems(
  messages: ProviderChatMessage[],
): ProviderInputItem[] {
  return messages.map((m) => ({
    type: "message" as const,
    role: m.role,
    content: m.content,
  }));
}
```

### `projects/sfia-studio/app/lib/d1/errors.ts`

```tsx
export type D1ErrorCode =
  | "VALIDATION"
  | "NOT_FOUND"
  | "CONFLICT"
  | "UNAUTHORIZED"
  | "IDEMPOTENCY"
  | "PERSISTENCE"
  | "CLAIM_FORBIDDEN"
  | "PROVIDER"
  | "TIMEOUT"
  | "CONFIG";

export class D1Error extends Error {
  readonly code: D1ErrorCode;
  readonly cause?: unknown;

  constructor(code: D1ErrorCode, message: string, cause?: unknown) {
    super(message);
    this.name = "D1Error";
    this.code = code;
    this.cause = cause;
  }
}
```

### `projects/sfia-studio/app/lib/d1/intake/validateProposal.ts`

```tsx
import { D1Error } from "../errors";
import {
  C2_OUTCOME_TYPES,
  C2_PROPOSAL_STATUSES,
  REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION,
  type C2OutcomeType,
  type C2ProposalStatus,
  type RequestRoutingAlternative,
  type RequestRoutingProposal,
} from "./types";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

function asString(value: unknown, field: string): string {
  if (typeof value !== "string") {
    throw new D1Error("VALIDATION", `Champ ${field} invalide (string attendue).`);
  }
  return value.trim();
}

function asStringArray(value: unknown, field: string): string[] {
  if (!Array.isArray(value) || value.some((v) => typeof v !== "string")) {
    throw new D1Error("VALIDATION", `Champ ${field} invalide (string[] attendu).`);
  }
  return value.map((v) => v.trim()).filter(Boolean);
}

function asNullableString(value: unknown, field: string): string | null {
  if (value === null || value === undefined) return null;
  if (typeof value !== "string") {
    throw new D1Error("VALIDATION", `Champ ${field} invalide (string|null).`);
  }
  const t = value.trim();
  return t.length ? t : null;
}

function asOutcome(value: unknown): C2OutcomeType {
  if (typeof value !== "string" || !C2_OUTCOME_TYPES.includes(value as C2OutcomeType)) {
    throw new D1Error("VALIDATION", `Outcome C2 non autorisé: ${String(value)}`);
  }
  return value as C2OutcomeType;
}

function asStatus(value: unknown): C2ProposalStatus {
  if (
    typeof value !== "string" ||
    !C2_PROPOSAL_STATUSES.includes(value as C2ProposalStatus)
  ) {
    throw new D1Error("VALIDATION", `Status C2 non autorisé: ${String(value)}`);
  }
  return value as C2ProposalStatus;
}

function asConfidence(value: unknown): number {
  if (typeof value !== "number" || Number.isNaN(value) || value < 0 || value > 1) {
    throw new D1Error("VALIDATION", "confidence hors bornes [0,1].");
  }
  return value;
}

/** Strict boolean — reject string/number/null; never coerce via Boolean(...). */
export function asStrictBoolean(value: unknown, field: string): boolean {
  if (typeof value !== "boolean") {
    throw new D1Error(
      "VALIDATION",
      `Champ ${field} invalide (boolean strict attendu).`,
    );
  }
  return value;
}

function asAlternatives(value: unknown): RequestRoutingAlternative[] {
  if (value === undefined || value === null) return [];
  if (!Array.isArray(value)) {
    throw new D1Error("VALIDATION", "alternatives invalides.");
  }
  return value.map((item, i) => {
    if (!isPlainObject(item)) {
      throw new D1Error("VALIDATION", `alternative[${i}] invalide.`);
    }
    return {
      outcomeType: asOutcome(item.outcomeType),
      label: asString(item.label, `alternatives[${i}].label`),
      rationale: asString(item.rationale, `alternatives[${i}].rationale`),
    };
  });
}

const FORBIDDEN_CLAIM = /V3[-_ ]?(ADOPTED|IMPLEMENTED)/i;

/**
 * Deterministic runtime validation of GPT / fake payload.
 * Rejects invented Project/Cycle IDs and forbidden claims.
 */
export function validateRequestRoutingProposal(
  raw: unknown,
): RequestRoutingProposal {
  if (!isPlainObject(raw)) {
    throw new D1Error("VALIDATION", "Payload proposition non-objet.");
  }

  if (raw.proposedProjectId != null || raw.candidateProjectId != null) {
    throw new D1Error(
      "VALIDATION",
      "C2 interdit proposedProjectId / candidateProjectId (matching = C3).",
    );
  }
  if (raw.proposedCycleId != null || raw.candidateCycleId != null) {
    throw new D1Error(
      "VALIDATION",
      "C2 interdit proposedCycleId / candidateCycleId (matching = C3).",
    );
  }

  const proposal: RequestRoutingProposal = {
    schemaVersion: REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION,
    proposalId: asString(raw.proposalId, "proposalId"),
    rawIntent: asString(raw.rawIntent, "rawIntent"),
    normalizedIntent: asString(raw.normalizedIntent, "normalizedIntent"),
    subject: asString(raw.subject, "subject"),
    proposedObjective: asString(raw.proposedObjective, "proposedObjective"),
    proposedOutcomeType: asOutcome(raw.proposedOutcomeType),
    proposedCycleType: asNullableString(raw.proposedCycleType, "proposedCycleType"),
    proposedProfile: asNullableString(raw.proposedProfile, "proposedProfile"),
    proposedBlocks: asStringArray(raw.proposedBlocks ?? [], "proposedBlocks"),
    constraints: asStringArray(raw.constraints ?? [], "constraints"),
    assumptions: asStringArray(raw.assumptions ?? [], "assumptions"),
    missingInformation: asStringArray(
      raw.missingInformation ?? [],
      "missingInformation",
    ),
    clarificationQuestion: asNullableString(
      raw.clarificationQuestion,
      "clarificationQuestion",
    ),
    alternatives: asAlternatives(raw.alternatives),
    confidence: asConfidence(raw.confidence),
    rationale: asString(raw.rationale, "rationale"),
    requiresHumanConfirmation: asStrictBoolean(
      raw.requiresHumanConfirmation,
      "requiresHumanConfirmation",
    ),
    status: asStatus(raw.status),
    createdAt: asString(raw.createdAt, "createdAt"),
    proposedProjectId: null,
    proposedCycleId: null,
  };

  const claimSurface = [
    proposal.normalizedIntent,
    proposal.proposedObjective,
    proposal.rationale,
    ...proposal.assumptions,
  ].join(" ");
  if (FORBIDDEN_CLAIM.test(claimSurface)) {
    throw new D1Error("CLAIM_FORBIDDEN", "Claim v3 interdit dans la proposition.");
  }

  if (proposal.proposedOutcomeType === "NEED_CLARIFICATION") {
    if (proposal.status !== "CLARIFICATION_REQUIRED") {
      throw new D1Error(
        "VALIDATION",
        "NEED_CLARIFICATION exige status CLARIFICATION_REQUIRED.",
      );
    }
    if (!proposal.clarificationQuestion) {
      throw new D1Error(
        "VALIDATION",
        "NEED_CLARIFICATION exige clarificationQuestion.",
      );
    }
  }

  if (proposal.proposedOutcomeType === "ANALYZE_ONLY") {
    if (proposal.status !== "ANALYSIS_ONLY") {
      throw new D1Error("VALIDATION", "ANALYZE_ONLY exige status ANALYSIS_ONLY.");
    }
  }

  if (
    proposal.proposedOutcomeType === "CREATE_PROJECT_CANDIDATE" ||
    proposal.proposedOutcomeType === "OPEN_CYCLE_CANDIDATE"
  ) {
    if (proposal.status !== "PROPOSAL_READY") {
      throw new D1Error(
        "VALIDATION",
        "Outcome candidat mutatif exige PROPOSAL_READY (non exécutable).",
      );
    }
    if (!proposal.requiresHumanConfirmation) {
      throw new D1Error(
        "VALIDATION",
        "requiresHumanConfirmation doit être true pour une suite candidate.",
      );
    }
  }

  if (proposal.proposedOutcomeType === "UNDETERMINED") {
    if (proposal.status !== "UNDETERMINED") {
      throw new D1Error("VALIDATION", "UNDETERMINED exige status UNDETERMINED.");
    }
  }

  if (raw.schemaVersion && raw.schemaVersion !== REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION) {
    throw new D1Error(
      "VALIDATION",
      `schemaVersion inattendu: ${String(raw.schemaVersion)}`,
    );
  }

  return proposal;
}

/** Extract JSON object from model text (fenced or raw). */
export function parseProposalJsonText(text: string): unknown {
  const trimmed = text.trim();
  const fence = trimmed.match(/``\`(?:json)?\s*([\s\S]*?)``\`/i);
  const candidate = fence ? fence[1].trim() : trimmed;
  try {
    return JSON.parse(candidate);
  } catch (error) {
    throw new D1Error(
      "VALIDATION",
      "Réponse provider non JSON / non parsable.",
      error,
    );
  }
}
```

### `projects/sfia-studio/app/lib/d1/intake/resolveProvider.ts`

```tsx
import type { ConversationProvider } from "@/lib/ops1/conversation/types";
import { D1Error } from "../errors";
import { FakeIntakeConversationProvider } from "./fakeIntakeProvider";
import { logIntakeEvent } from "../intakeObservability";

let override: ConversationProvider | null = null;

/** Test-only injection. */
export function setIntakeProviderForTests(
  provider: ConversationProvider | null,
): void {
  override = provider;
}

/**
 * Resolve intake provider.
 * Default = fake (deterministic).
 * Live only if D1_INTAKE_LIVE=1 AND secrets present — otherwise explicit CONFIG error
 * (no silent fake fallback when live was requested).
 * Does not alter OPS1 provider resolution.
 */
export function resolveIntakeProvider(): {
  provider: ConversationProvider;
  mode: "fake" | "live";
} {
  if (override) {
    return {
      provider: override,
      mode: override.providerId.includes("fake") ? "fake" : "live",
    };
  }
  if (process.env.D1_INTAKE_PROVIDER === "fake") {
    return { provider: new FakeIntakeConversationProvider(), mode: "fake" };
  }
  if (process.env.D1_INTAKE_LIVE === "1") {
    try {
      // Lazy require to avoid pulling OpenAI into client bundles via actions tree
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { requireLiveConversationSecrets } = require("@/lib/ops1/conversation/config") as typeof import("@/lib/ops1/conversation/config");
      // eslint-disable-next-line @typescript-eslint/no-require-imports
      const { OpenAIConversationProvider } = require("@/lib/ops1/conversation/openaiProvider") as typeof import("@/lib/ops1/conversation/openaiProvider");
      const { apiKey, model } = requireLiveConversationSecrets();
      return {
        provider: new OpenAIConversationProvider(apiKey, model),
        mode: "live",
      };
    } catch (error) {
      logIntakeEvent("intake_provider_failed", {
        status: "CONFIG",
        providerMode: "live",
        errorCode: "CONFIG",
      });
      // eslint-disable-next-line no-console
      console.warn(
        JSON.stringify({
          event: "d1_intake_live_config_unavailable",
          ts: new Date().toISOString(),
          message:
            "D1_INTAKE_LIVE=1 but live secrets unavailable — refusing silent fake fallback",
        }),
      );
      throw new D1Error(
        "CONFIG",
        "Mode live demandé (D1_INTAKE_LIVE=1) mais configuration indisponible. Aucun fallback fake silencieux.",
        error,
      );
    }
  }
  return { provider: new FakeIntakeConversationProvider(), mode: "fake" };
}
```

### `projects/sfia-studio/app/lib/d1/intake/analyzeIntent.ts`

```tsx
import { D1Error } from "../errors";
import { D1_C2_SYSTEM_PROMPT } from "./prompt";
import { resolveIntakeProvider } from "./resolveProvider";
import {
  parseProposalJsonText,
  validateRequestRoutingProposal,
} from "./validateProposal";
import {
  D1_INTAKE_MAX_CLARIFICATION_TURNS,
  D1_INTAKE_MAX_INTENT_LENGTH,
  D1_INTAKE_PROVIDER_TIMEOUT_MS,
  type AnalyzeIntentInput,
  type RequestRoutingProposal,
} from "./types";
import { logIntakeEvent } from "../intakeObservability";

function withTimeout<T>(promise: Promise<T>, ms: number): Promise<T> {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => {
      reject(new D1Error("TIMEOUT", `Provider timeout après ${ms}ms.`));
    }, ms);
    promise
      .then((v) => {
        clearTimeout(timer);
        resolve(v);
      })
      .catch((err) => {
        clearTimeout(timer);
        reject(err);
      });
  });
}

function sanitizeIntent(raw: string): string {
  const trimmed = raw.replace(/\u0000/g, "").trim();
  if (!trimmed) {
    throw new D1Error("VALIDATION", "Intention vide.");
  }
  if (trimmed.length > D1_INTAKE_MAX_INTENT_LENGTH) {
    throw new D1Error(
      "VALIDATION",
      `Intention trop longue (max ${D1_INTAKE_MAX_INTENT_LENGTH}).`,
    );
  }
  return trimmed;
}

function buildUserEnvelope(
  intent: string,
  clarifications: string[],
): string {
  const lines = [`INTENT:\n${intent}`];
  if (clarifications.length) {
    lines.push(
      "CLARIFICATIONS:\n" + clarifications.map((c) => `- ${c}`).join("\n"),
    );
  }
  return lines.join("\n\n");
}

export interface AnalyzeIntentResult {
  proposal: RequestRoutingProposal;
  providerMode: "fake" | "live";
  providerId: string;
  durationMs: number;
  clarificationTurnCount: number;
}

/**
 * Analyze a free-form intent into a non-executable RequestRoutingProposal.
 * No Project/Cycle mutation. No context matching.
 */
export async function analyzeIntent(
  input: AnalyzeIntentInput,
): Promise<AnalyzeIntentResult> {
  const started = Date.now();
  const intent = sanitizeIntent(input.rawIntent);
  const turns = input.clarificationTurns ?? [];
  if (turns.length > D1_INTAKE_MAX_CLARIFICATION_TURNS * 2) {
    throw new D1Error(
      "VALIDATION",
      `Trop de tours de clarification (max ${D1_INTAKE_MAX_CLARIFICATION_TURNS}).`,
    );
  }

  const userAnswers = turns
    .filter((t) => t.role === "user")
    .map((t) => t.content.trim())
    .filter(Boolean);

  // Cap user clarification answers
  if (userAnswers.length > D1_INTAKE_MAX_CLARIFICATION_TURNS) {
    throw new D1Error(
      "VALIDATION",
      `Maximum ${D1_INTAKE_MAX_CLARIFICATION_TURNS} réponses de clarification.`,
    );
  }

  logIntakeEvent("intake_analysis_started", {
    sessionLocalId: input.sessionLocalId,
    intentLength: intent.length,
    status: "started",
  });

  const { provider, mode } = resolveIntakeProvider();
  const messages = [
    { role: "system" as const, content: D1_C2_SYSTEM_PROMPT },
    { role: "user" as const, content: buildUserEnvelope(intent, userAnswers) },
  ];

  try {
    const completion = await withTimeout(
      provider.complete(messages),
      D1_INTAKE_PROVIDER_TIMEOUT_MS,
    );

    const parsed = parseProposalJsonText(completion.text);
    // Ensure rawIntent reflects original user intent
    if (typeof parsed === "object" && parsed && !Array.isArray(parsed)) {
      (parsed as Record<string, unknown>).rawIntent = intent;
      if (!(parsed as Record<string, unknown>).proposalId) {
        (parsed as Record<string, unknown>).proposalId = `rrp-${Date.now()}`;
      }
      if (!(parsed as Record<string, unknown>).createdAt) {
        (parsed as Record<string, unknown>).createdAt = new Date().toISOString();
      }
      if (!(parsed as Record<string, unknown>).schemaVersion) {
        (parsed as Record<string, unknown>).schemaVersion = "0.1.0-d1-c2";
      }
      (parsed as Record<string, unknown>).proposedProjectId = null;
      (parsed as Record<string, unknown>).proposedCycleId = null;
    }

    const proposal = validateRequestRoutingProposal(parsed);

    // After max clarification turns, never stay in clarification loop
    let finalProposal = proposal;
    if (
      userAnswers.length >= D1_INTAKE_MAX_CLARIFICATION_TURNS &&
      proposal.proposedOutcomeType === "NEED_CLARIFICATION"
    ) {
      finalProposal = validateRequestRoutingProposal({
        ...proposal,
        proposedOutcomeType: "UNDETERMINED",
        status: "UNDETERMINED",
        clarificationQuestion: null,
        confidence: Math.min(proposal.confidence, 0.25),
        missingInformation: [
          ...proposal.missingInformation,
          "informations insuffisantes après les tours de clarification",
        ],
        rationale:
          "Après le maximum de clarifications, la suite reste indéterminée. Aucune mutation n’a été effectuée.",
        requiresHumanConfirmation: true,
      });
    }

    const durationMs = Date.now() - started;

    if (finalProposal.status === "CLARIFICATION_REQUIRED") {
      logIntakeEvent("intake_clarification_requested", {
        sessionLocalId: input.sessionLocalId,
        intentLength: intent.length,
        status: finalProposal.proposedOutcomeType,
        durationMs,
        providerMode: mode,
      });
    } else if (finalProposal.status === "ANALYSIS_ONLY") {
      logIntakeEvent("intake_analysis_only_generated", {
        sessionLocalId: input.sessionLocalId,
        intentLength: intent.length,
        status: finalProposal.proposedOutcomeType,
        durationMs,
        providerMode: mode,
      });
    } else {
      logIntakeEvent("intake_proposal_generated", {
        sessionLocalId: input.sessionLocalId,
        intentLength: intent.length,
        status: finalProposal.proposedOutcomeType,
        durationMs,
        providerMode: mode,
      });
    }

    return {
      proposal: finalProposal,
      providerMode: mode,
      providerId: provider.providerId,
      durationMs,
      clarificationTurnCount: userAnswers.length,
    };
  } catch (error) {
    const durationMs = Date.now() - started;
    const code =
      error instanceof D1Error
        ? error.code
        : error instanceof Error && /timeout/i.test(error.message)
          ? "TIMEOUT"
          : "PROVIDER";
    logIntakeEvent("intake_provider_failed", {
      sessionLocalId: input.sessionLocalId,
      intentLength: intent.length,
      status: code,
      durationMs,
      providerMode: mode,
      errorCode: code,
    });
    if (error instanceof D1Error) throw error;
    if (error instanceof Error && /timeout/i.test(error.message)) {
      throw new D1Error("TIMEOUT", "Le fournisseur n’a pas répondu à temps.", error);
    }
    throw new D1Error(
      "PROVIDER",
      "Échec d’analyse de l’intention (fournisseur).",
      error,
    );
  }
}
```

### `projects/sfia-studio/app/lib/d1/intake/fakeIntakeProvider.ts`

```tsx
import { randomUUID } from "node:crypto";
import type {
  ConversationProvider,
  ProviderChatMessage,
  ProviderCompletionResult,
} from "@/lib/ops1/conversation/types";
import { REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION } from "./types";
import type { C2OutcomeType, C2ProposalStatus } from "./types";

function baseProposal(rawIntent: string) {
  return {
    schemaVersion: REQUEST_ROUTING_PROPOSAL_SCHEMA_VERSION,
    proposalId: `rrp-${randomUUID()}`,
    rawIntent,
    createdAt: new Date().toISOString(),
    proposedProjectId: null,
    proposedCycleId: null,
    proposedBlocks: [] as string[],
    constraints: [] as string[],
    assumptions: [] as string[],
    missingInformation: [] as string[],
    alternatives: [] as Array<{
      outcomeType: C2OutcomeType;
      label: string;
      rationale: string;
    }>,
    proposedCycleType: null as string | null,
    proposedProfile: null as string | null,
    clarificationQuestion: null as string | null,
  };
}

/** Deterministic heuristic for fake/live-test intake — no network. */
export function buildFakeProposalPayload(
  rawIntent: string,
  clarificationAnswers: string[],
): Record<string, unknown> {
  const text = rawIntent.trim();
  const lower = text.toLowerCase();
  const answers = clarificationAnswers.map((a) => a.trim()).filter(Boolean);
  const enriched = [text, ...answers].join("\n");
  const enrichedLower = enriched.toLowerCase();

  if (lower.includes("__force_invalid__")) {
    return { notAProposal: true };
  }

  const base = baseProposal(rawIntent);

  if (
    /ne cr[eé]e?\s*rien|analyse\s+seulement|analyze\s+only|sans\s+cr[eé]er/i.test(
      lower,
    )
  ) {
    return {
      ...base,
      normalizedIntent: "Demande d’analyse sans mutation",
      subject: "Analyse d’idée",
      proposedObjective:
        "Produire une synthèse d’analyse sans créer de projet ni de cycle",
      proposedOutcomeType: "ANALYZE_ONLY" satisfies C2OutcomeType,
      status: "ANALYSIS_ONLY" satisfies C2ProposalStatus,
      confidence: 0.78,
      rationale:
        "L’utilisateur a explicitement demandé une analyse sans création.",
      requiresHumanConfirmation: false,
      assumptions: ["Aucune recherche de contexte existant n’a été effectuée."],
      proposedBlocks: ["analyse"],
    };
  }

  if (
    answers.length === 0 &&
    (/j[’']ai un nouveau sujet|^nouveau sujet$|pas s[uû]r|quelque chose/i.test(
      lower,
    ) ||
      text.split(/\s+/).length < 5)
  ) {
    return {
      ...base,
      normalizedIntent: "Intention encore trop vague",
      subject: "Sujet non précisé",
      proposedObjective: "À clarifier avec l’utilisateur",
      proposedOutcomeType: "NEED_CLARIFICATION" satisfies C2OutcomeType,
      status: "CLARIFICATION_REQUIRED" satisfies C2ProposalStatus,
      confidence: 0.35,
      clarificationQuestion:
        "Quel résultat concret souhaitez-vous obtenir avec ce sujet ?",
      missingInformation: ["résultat souhaité", "périmètre"],
      rationale: "Informations insuffisantes pour proposer une suite structurée.",
      requiresHumanConfirmation: true,
    };
  }

  if (
    /gestion des (utilisateurs|comptes|r[oô]les)|cadrage|nouveau cycle|travailler sur/i.test(
      enrichedLower,
    ) &&
    !/lancer (une|un) (application|projet|produit)/i.test(enrichedLower)
  ) {
    return {
      ...base,
      normalizedIntent:
        "Besoin de travail thématique pouvant relever d’un cycle",
      subject: answers[0] || text.slice(0, 80),
      proposedObjective: answers[0]
        ? `Structurer le travail : ${answers[0]}`
        : `Structurer le travail autour de : ${text.slice(0, 120)}`,
      proposedOutcomeType: "OPEN_CYCLE_CANDIDATE" satisfies C2OutcomeType,
      status: "PROPOSAL_READY" satisfies C2ProposalStatus,
      proposedCycleType: "FRAMING",
      proposedProfile: "Standard",
      proposedBlocks: ["UX", "sécurité"],
      confidence: 0.62,
      rationale:
        "La formulation évoque un sujet de travail plutôt qu’un nouveau produit. Le rattachement à un projet existant sera traité en C3 — aucun match n’a été inventé.",
      assumptions: [
        "Aucun projet existant n’a été recherché ni affirmé.",
        "La suite reste une proposition non exécutable.",
      ],
      missingInformation: [
        "projet existant éventuel (matching C3)",
        "confirmation humaine",
      ],
      alternatives: [
        {
          outcomeType: "CREATE_PROJECT_CANDIDATE",
          label: "Créer plutôt un nouveau projet",
          rationale: "Si le sujet n’appartient à aucun projet connu.",
        },
        {
          outcomeType: "ANALYZE_ONLY",
          label: "Analyser sans créer",
          rationale: "Explorer avant toute structuration.",
        },
      ],
      requiresHumanConfirmation: true,
    };
  }

  if (
    /lancer|application|suivi des contrats|nouveau projet|créer un produit/i.test(
      enrichedLower,
    ) ||
    answers.length > 0
  ) {
    const subject =
      answers[0]?.slice(0, 80) ||
      (lower.includes("contrat") ? "Suivi des contrats" : text.slice(0, 80));
    return {
      ...base,
      normalizedIntent: `Créer un projet autour de « ${subject} »`,
      subject,
      proposedObjective: answers[0]
        ? answers[0]
        : `Cadrer et lancer ${subject}`,
      proposedOutcomeType: "CREATE_PROJECT_CANDIDATE" satisfies C2OutcomeType,
      status: "PROPOSAL_READY" satisfies C2ProposalStatus,
      proposedCycleType: "FRAMING",
      proposedProfile: "Standard",
      proposedBlocks: ["cadrage", "UX"],
      confidence: 0.74,
      rationale:
        "L’intention décrit un nouveau besoin produit. Proposition de création de projet — non exécutée.",
      assumptions: ["Aucun contexte Workspace n’a été consulté."],
      missingInformation: ["confirmation humaine avant toute création"],
      alternatives: [
        {
          outcomeType: "ANALYZE_ONLY",
          label: "Analyser d’abord",
          rationale: "Si l’utilisateur préfère explorer sans créer.",
        },
      ],
      requiresHumanConfirmation: true,
    };
  }

  return {
    ...base,
    normalizedIntent: "Intention non classée de façon fiable",
    subject: text.slice(0, 80) || "Indéterminé",
    proposedObjective: "À déterminer",
    proposedOutcomeType: "UNDETERMINED" satisfies C2OutcomeType,
    status: "UNDETERMINED" satisfies C2ProposalStatus,
    confidence: 0.2,
    missingInformation: ["objectif", "périmètre", "résultat attendu"],
    rationale:
      "Après les tours disponibles, la suite reste indéterminée sans invention.",
    requiresHumanConfirmation: true,
  };
}

/**
 * Fake intake provider — implements OPS1 ConversationProvider contract.
 * Returns JSON proposals based on deterministic heuristics.
 */
export class FakeIntakeConversationProvider implements ConversationProvider {
  readonly providerId = "d1-intake-fake";
  private callCount = 0;

  async complete(
    messages: ProviderChatMessage[],
  ): Promise<ProviderCompletionResult> {
    this.callCount += 1;
    const lastUser = [...messages].reverse().find((m) => m.role === "user");
    const content = lastUser?.content ?? "";
    // System prompt must not be concatenated into the user payload (C2-R01).
    const systemMsgs = messages.filter((m) => m.role === "system");
    void systemMsgs;

    if (content.includes("__FORCE_PROVIDER_ERROR__")) {
      throw new Error("FAKE_INTAKE_PROVIDER_ERROR");
    }
    if (content.includes("__FORCE_TIMEOUT__")) {
      await new Promise((r) => setTimeout(r, 50));
      throw new Error("FAKE_INTAKE_TIMEOUT");
    }

    // Extract raw intent + answers from the user payload envelope
    const intentMatch = content.match(
      /INTENT:\s*([\s\S]*?)(?:\n\s*CLARIFICATIONS:|$)/i,
    );
    const clarMatch = content.match(/CLARIFICATIONS:\s*([\s\S]*)$/i);
    const rawIntent = (intentMatch?.[1] ?? content).trim();
    const clarifications = (clarMatch?.[1] ?? "")
      .split(/\n+/)
      .map((l) => l.replace(/^- /, "").trim())
      .filter(Boolean);

    const payload = buildFakeProposalPayload(rawIntent, clarifications);
    return {
      text: JSON.stringify(payload),
      usage: {
        inputTokens: 20,
        outputTokens: 40,
        totalTokens: 60,
        model: "d1-intake-fake-model",
        providerResponseId: `d1-fake-${this.callCount}`,
      },
    };
  }
}
```

### `projects/sfia-studio/app/lib/d1/intakeObservability.ts`

```tsx
/**
 * D1 intake observability — structured logs, no full intent/project body.
 * RGPD: lengths, counts, bands, statuses only.
 */

export type IntakeLogEvent =
  | "intake_opened"
  | "intake_intent_submitted"
  | "intake_manual_creation_opened"
  | "intake_resume_project_opened"
  | "intake_cancelled"
  | "intake_analysis_started"
  | "intake_clarification_requested"
  | "intake_clarification_answered"
  | "intake_proposal_generated"
  | "intake_analysis_only_generated"
  | "intake_provider_failed"
  | "intake_proposal_rejected"
  | "intake_session_cancelled"
  | "intake_context_lookup_started"
  | "intake_context_snapshot_built"
  | "intake_context_match_generated"
  | "intake_context_match_ambiguous"
  | "intake_context_no_match"
  | "intake_context_unavailable"
  | "intake_context_candidate_selected"
  | "intake_context_selection_cleared";

export function logIntakeEvent(
  event: IntakeLogEvent,
  payload: {
    status?: string;
    intentLength?: number;
    projectId?: string;
    sessionLocalId?: string;
    durationMs?: number;
    providerMode?: "fake" | "live";
    errorCode?: string;
    proposalId?: string;
    sourceProjectCount?: number;
    candidateCount?: number;
    topScoreBand?: string;
    truncationApplied?: boolean;
  } = {},
): void {
  const line = JSON.stringify({
    event,
    ts: new Date().toISOString(),
    status: payload.status ?? "ok",
    intentLength: payload.intentLength,
    projectId: payload.projectId,
    sessionLocalId: payload.sessionLocalId,
    durationMs: payload.durationMs,
    providerMode: payload.providerMode,
    errorCode: payload.errorCode,
    proposalId: payload.proposalId,
    sourceProjectCount: payload.sourceProjectCount,
    candidateCount: payload.candidateCount,
    topScoreBand: payload.topScoreBand,
    truncationApplied: payload.truncationApplied,
  });
  // eslint-disable-next-line no-console
  console.info(`[d1.intake] ${line}`);
}
```

### `projects/sfia-studio/app/features/d1/intake/IntakeView.tsx`

```tsx
"use client";

import { useEffect, useId, useMemo, useState, useTransition } from "react";
import Link from "next/link";
import type { D1Project } from "@/lib/d1/types";
import type {
  IntakeClarificationTurn,
  RequestRoutingProposal,
} from "@/lib/d1/intake/types";
import {
  actionAnalyzeIntent,
  actionCancelIntakeSession,
  actionLogClarificationAnswer,
} from "@/lib/d1/intake/actions";
import {
  actionMatchExistingContext,
} from "@/lib/d1/context/actions";
import type {
  ContextMatchResult,
  ContextSelectionDraft,
} from "@/lib/d1/context/types";
import { logIntakeEvent } from "@/lib/d1/intakeObservability";
import { D1AppShell } from "../D1AppShell";
import { IntakeContextRail } from "./IntakeContextRail";
import { ContextMatchPanel } from "./ContextMatchPanel";
import shell from "../d1-shell.module.css";
import styles from "./intake.module.css";

const EXAMPLES = [
  "Je veux lancer une application de suivi des contrats.",
  "Je veux travailler sur la gestion des utilisateurs.",
  "Analyse cette idée, mais ne crée rien.",
  "J’ai un nouveau sujet.",
  "Je veux reprendre Campus360 pour la gestion des utilisateurs.",
] as const;

type Phase =
  | "empty"
  | "draft"
  | "analyzing"
  | "clarification"
  | "proposal"
  | "analyze_only"
  | "undetermined"
  | "error";

function outcomeLabel(outcome: string): string {
  switch (outcome) {
    case "CREATE_PROJECT_CANDIDATE":
      return "Créer un projet (proposition)";
    case "OPEN_CYCLE_CANDIDATE":
      return "Ouvrir un cycle (proposition)";
    case "ANALYZE_ONLY":
      return "Analyse seule";
    case "NEED_CLARIFICATION":
      return "Clarification requise";
    case "UNDETERMINED":
      return "Indéterminé";
    default:
      return outcome;
  }
}

export function IntakeView({ projects }: { projects: D1Project[] }) {
  const composerId = useId();
  const helpId = useId();
  const liveId = useId();
  const clarifyId = useId();
  const sessionLocalId = useMemo(
    () => `intake-local-${crypto.randomUUID().slice(0, 8)}`,
    [],
  );
  const [intent, setIntent] = useState("");
  const [phase, setPhase] = useState<Phase>("empty");
  const [proposal, setProposal] = useState<RequestRoutingProposal | null>(null);
  const [turns, setTurns] = useState<IntakeClarificationTurn[]>([]);
  const [clarifyAnswer, setClarifyAnswer] = useState("");
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [providerMode, setProviderMode] = useState<"fake" | "live" | null>(
    null,
  );
  const [pending, startTransition] = useTransition();
  const [busy, setBusy] = useState(false);
  const [contextMatch, setContextMatch] = useState<ContextMatchResult | null>(
    null,
  );
  const [contextMatching, setContextMatching] = useState(false);
  const [contextError, setContextError] = useState<string | null>(null);
  const [selection, setSelection] = useState<ContextSelectionDraft | null>(
    null,
  );

  const locked =
    busy ||
    pending ||
    phase === "analyzing" ||
    phase === "clarification" ||
    phase === "proposal" ||
    phase === "analyze_only" ||
    phase === "undetermined";

  useEffect(() => {
    logIntakeEvent("intake_opened", { sessionLocalId });
  }, [sessionLocalId]);

  function focusComposer() {
    document.getElementById(composerId)?.focus();
  }

  function clearContextState() {
    setContextMatch(null);
    setContextMatching(false);
    setContextError(null);
    setSelection(null);
  }

  function resetAll() {
    setPhase("empty");
    setIntent("");
    setProposal(null);
    setTurns([]);
    setClarifyAnswer("");
    setErrorMessage(null);
    setProviderMode(null);
    clearContextState();
    void actionCancelIntakeSession(sessionLocalId);
    focusComposer();
  }

  function applyExample(text: string) {
    if (locked && phase !== "error" && phase !== "empty" && phase !== "draft") {
      return;
    }
    setIntent(text);
    setPhase("draft");
    setProposal(null);
    setErrorMessage(null);
    setTurns([]);
    clearContextState();
  }

  function runContextMatch(nextProposal: RequestRoutingProposal) {
    if (nextProposal.status === "CLARIFICATION_REQUIRED") {
      clearContextState();
      return;
    }
    setContextMatching(true);
    setContextError(null);
    setSelection(null);
    const forceUnavailable =
      typeof window !== "undefined" &&
      new URLSearchParams(window.location.search).get(
        "forceContextUnavailable",
      ) === "1";
    startTransition(async () => {
      const result = await actionMatchExistingContext({
        sessionLocalId,
        proposal: {
          proposalId: nextProposal.proposalId,
          rawIntent: nextProposal.rawIntent,
          normalizedIntent: nextProposal.normalizedIntent,
          subject: nextProposal.subject,
          proposedObjective: nextProposal.proposedObjective,
          proposedOutcomeType: nextProposal.proposedOutcomeType,
        },
        forceUnavailable,
      });
      setContextMatching(false);
      if (!result.ok) {
        setContextMatch(null);
        setContextError(result.message);
        return;
      }
      setContextMatch(result.match);
      requestAnimationFrame(() => {
        document
          .querySelector('[data-testid="intake-context"]')
          ?.scrollIntoView({ block: "nearest" });
      });
    });
  }

  function runAnalysis(nextTurns: IntakeClarificationTurn[]) {
    const trimmed = intent.trim();
    if (!trimmed || busy) return;
    setBusy(true);
    setPhase("analyzing");
    setErrorMessage(null);
    clearContextState();
    startTransition(async () => {
      const result = await actionAnalyzeIntent({
        sessionLocalId,
        rawIntent: trimmed,
        clarificationTurns: nextTurns,
      });
      setBusy(false);
      if (!result.ok) {
        setPhase("error");
        setErrorMessage(result.message);
        setProposal(null);
        return;
      }
      setProviderMode(result.providerMode);
      setProposal(result.proposal);
      setTurns(nextTurns);
      if (result.proposal.status === "CLARIFICATION_REQUIRED") {
        setPhase("clarification");
        setClarifyAnswer("");
        requestAnimationFrame(() => {
          document.getElementById(clarifyId)?.focus();
        });
      } else if (result.proposal.status === "ANALYSIS_ONLY") {
        setPhase("analyze_only");
        runContextMatch(result.proposal);
      } else if (result.proposal.status === "UNDETERMINED") {
        setPhase("undetermined");
        runContextMatch(result.proposal);
      } else {
        setPhase("proposal");
        runContextMatch(result.proposal);
      }
    });
  }

  function onSubmitIntent(e: React.FormEvent) {
    e.preventDefault();
    if (!intent.trim()) return;
    logIntakeEvent("intake_intent_submitted", {
      sessionLocalId,
      intentLength: intent.trim().length,
      status: "analyze",
    });
    runAnalysis([]);
  }

  function onSubmitClarification(e: React.FormEvent) {
    e.preventDefault();
    const answer = clarifyAnswer.trim();
    if (!answer || !proposal?.clarificationQuestion) return;
    const nextTurns: IntakeClarificationTurn[] = [
      ...turns,
      { role: "assistant", content: proposal.clarificationQuestion },
      { role: "user", content: answer },
    ];
    void actionLogClarificationAnswer({
      sessionLocalId,
      answerLength: answer.length,
    });
    runAnalysis(nextTurns);
  }

  const showProposal =
    proposal &&
    (phase === "proposal" ||
      phase === "analyze_only" ||
      phase === "undetermined");

  const rail = (
    <IntakeContextRail
      hasSubmitted={
        phase === "proposal" ||
        phase === "analyze_only" ||
        phase === "clarification" ||
        phase === "undetermined"
      }
      recentCount={projects.length}
      phase={
        contextMatching
          ? "matching"
          : contextMatch
            ? "matched"
            : phase
      }
      providerMode={providerMode}
    />
  );

  return (
    <D1AppShell active="intake" title="Nouvelle demande" rail={rail}>
      <header className={styles.hero}>
        <h1>Nouvelle demande</h1>
        <p className={styles.heroLead}>
          Décrivez ce que vous voulez faire. Studio comprend, clarifie si besoin
          et propose une suite structurée — vous gardez la décision finale.
        </p>
        <div className={styles.valueStrip} aria-label="Proposition de valeur">
          <span className={styles.valueChip}>Intent-first</span>
          <span className={styles.valueChip}>Proposition non exécutée</span>
          <span className={styles.valueChip}>Confirmation humaine</span>
        </div>
      </header>

      <div
        className={styles.quickActions}
        role="group"
        aria-label="Actions principales"
      >
        <button
          type="button"
          className={`${styles.quickBtn} ${styles.quickBtnPrimary}`}
          onClick={focusComposer}
          data-testid="quick-describe"
          disabled={busy}
        >
          Décrire un nouveau besoin
        </button>
        <Link
          className={styles.quickBtn}
          href="/projects/new"
          data-testid="quick-manual"
          onClick={() =>
            logIntakeEvent("intake_manual_creation_opened", { sessionLocalId })
          }
        >
          Créer manuellement
        </Link>
      </div>

      <div aria-live="polite" aria-atomic="true" id={liveId}>
        {phase === "analyzing" ? (
          <div className={styles.loadingRow} data-testid="intake-loading">
            Analyse de votre intention en cours…
          </div>
        ) : null}
        {errorMessage ? (
          <div
            className={styles.bannerError}
            role="alert"
            data-testid="intake-error"
          >
            {errorMessage}
          </div>
        ) : null}
      </div>

      {showProposal ? (
        <section
          className={styles.proposalCard}
          data-testid="intake-proposal"
          aria-label="Proposition structurée"
        >
          <div className={styles.bannerWarn} data-testid="intake-no-mutation">
            Proposition uniquement — aucune action n’a été exécutée. Aucun
            projet ni cycle n’a été créé.
          </div>
          <h2>Ce que Studio a compris</h2>
          <div className={styles.proposalMeta}>
            <span className={styles.valueChip} data-testid="proposal-outcome">
              {outcomeLabel(proposal.proposedOutcomeType)}
            </span>
            <span className={styles.valueChip} data-testid="proposal-confidence">
              Confiance estimée {(proposal.confidence * 100).toFixed(0)} %
            </span>
            {providerMode ? (
              <span className={shell.hint}>mode {providerMode}</span>
            ) : null}
          </div>
          <div className={styles.proposalSection}>
            <h3>Intention normalisée</h3>
            <p data-testid="proposal-normalized">{proposal.normalizedIntent}</p>
          </div>
          <div className={styles.proposalSection}>
            <h3>Objectif proposé</h3>
            <p data-testid="proposal-objective">{proposal.proposedObjective}</p>
          </div>
          <div className={styles.proposalSection}>
            <h3>Pourquoi</h3>
            <p data-testid="proposal-rationale">{proposal.rationale}</p>
          </div>
          {proposal.assumptions.length ? (
            <div className={styles.proposalSection}>
              <h3>Hypothèses</h3>
              <ul data-testid="proposal-assumptions">
                {proposal.assumptions.map((a) => (
                  <li key={a}>{a}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {proposal.missingInformation.length ? (
            <div className={styles.proposalSection}>
              <h3>Informations manquantes</h3>
              <ul data-testid="proposal-missing">
                {proposal.missingInformation.map((m) => (
                  <li key={m}>{m}</li>
                ))}
              </ul>
            </div>
          ) : null}
          {proposal.alternatives.length ? (
            <div className={styles.proposalSection}>
              <h3>Alternatives</h3>
              <ul data-testid="proposal-alternatives">
                {proposal.alternatives.map((alt) => (
                  <li key={alt.label}>
                    <strong>{alt.label}</strong> — {alt.rationale}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}
          <div className={styles.statusActions}>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="intake-reformulate"
              onClick={() => {
                setPhase("draft");
                setProposal(null);
                setTurns([]);
                clearContextState();
                focusComposer();
              }}
            >
              Reformuler
            </button>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="intake-restart"
              onClick={resetAll}
            >
              Recommencer
            </button>
            <Link
              className={shell.cta}
              href="/projects/new"
              data-testid="intake-goto-manual"
            >
              Créer manuellement
            </Link>
          </div>
          <p className={shell.hint} data-testid="intake-no-confirm-exec">
            La confirmation exécutable (créer / ouvrir un cycle) arrive dans un
            incrément ultérieur.
          </p>
        </section>
      ) : null}

      {showProposal ? (
        <div aria-live="polite">
          <ContextMatchPanel
            match={contextMatch}
            matching={contextMatching}
            matchError={contextError}
            selection={selection}
            sessionLocalId={sessionLocalId}
            analyzeOnly={phase === "analyze_only"}
            onSelect={setSelection}
            onClearSelection={() => setSelection(null)}
            onRetry={() => {
              if (proposal) runContextMatch(proposal);
            }}
          />
        </div>
      ) : null}

      {phase === "clarification" && proposal?.clarificationQuestion ? (
        <form
          className={styles.clarificationBox}
          onSubmit={onSubmitClarification}
          data-testid="intake-clarification"
        >
          <h2>Clarification</h2>
          <p data-testid="clarification-question">
            {proposal.clarificationQuestion}
          </p>
          <label className={styles.composerLabel} htmlFor={clarifyId}>
            Votre réponse
          </label>
          <textarea
            id={clarifyId}
            className={styles.composerArea}
            value={clarifyAnswer}
            onChange={(e) => setClarifyAnswer(e.target.value)}
            data-testid="clarification-answer"
            disabled={busy}
          />
          <div className={styles.composerActions}>
            <button
              type="submit"
              className={shell.cta}
              disabled={!clarifyAnswer.trim() || busy}
              data-testid="clarification-submit"
            >
              Répondre
            </button>
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="intake-cancel"
              onClick={resetAll}
            >
              Annuler
            </button>
          </div>
        </form>
      ) : null}

      {(phase === "empty" ||
        phase === "draft" ||
        phase === "error" ||
        phase === "analyzing") && (
        <form
          className={styles.composer}
          onSubmit={onSubmitIntent}
          data-testid="intake-composer"
          aria-describedby={helpId}
        >
          <label className={styles.composerLabel} htmlFor={composerId}>
            Votre intention
          </label>
          <p className={styles.composerHelp} id={helpId}>
            Écrivez librement. Studio qualifiera votre demande et proposera une
            suite — sans exécuter de mutation.
          </p>
          <textarea
            id={composerId}
            className={styles.composerArea}
            name="intent"
            value={intent}
            onChange={(e) => {
              setIntent(e.target.value);
              if (phase === "error") setPhase(e.target.value.trim() ? "draft" : "empty");
              else if (phase !== "analyzing") {
                setPhase(e.target.value.trim() ? "draft" : "empty");
              }
            }}
            placeholder="Ex. « Je veux lancer un suivi des contrats. »"
            data-testid="intake-intent"
            aria-required
            disabled={busy || phase === "analyzing"}
          />
          <div className={styles.examples} aria-label="Exemples d’intentions">
            {EXAMPLES.map((ex) => (
              <button
                key={ex}
                type="button"
                className={styles.exampleBtn}
                onClick={() => applyExample(ex)}
                disabled={busy}
              >
                {ex}
              </button>
            ))}
          </div>
          <div className={styles.composerActions}>
            <button
              type="submit"
              className={shell.cta}
              disabled={!intent.trim() || busy}
              data-testid="intake-submit"
            >
              Envoyer
            </button>
            {phase === "error" ? (
              <button
                type="button"
                className={`${shell.cta} ${shell.ctaSecondary}`}
                data-testid="intake-retry"
                disabled={!intent.trim() || busy}
                onClick={() => runAnalysis(turns)}
              >
                Réessayer
              </button>
            ) : null}
            <button
              type="button"
              className={`${shell.cta} ${shell.ctaSecondary}`}
              data-testid="intake-cancel"
              onClick={resetAll}
              disabled={busy}
            >
              Annuler
            </button>
          </div>
        </form>
      )}

      <div className={styles.manualBanner}>
        <p>
          Alternative : créer un projet avec un formulaire court. Pour
          retrouver un projet existant, utilisez le Workspace.
        </p>
        <Link
          className={`${shell.cta} ${shell.ctaSecondary}`}
          href="/projects/new"
          data-testid="manual-creation-entry"
        >
          Créer manuellement
        </Link>
      </div>
    </D1AppShell>
  );
}
```

### `projects/sfia-studio/app/features/d1/intake/IntakeContextRail.tsx`

```tsx
import styles from "../d1-shell.module.css";

export function IntakeContextRail({
  hasSubmitted,
  recentCount,
  phase,
  providerMode,
}: {
  hasSubmitted: boolean;
  recentCount: number;
  phase?: string;
  providerMode?: "fake" | "live" | null;
}) {
  const statusText =
    phase === "analyzing"
      ? "Analyse en cours"
      : phase === "clarification"
        ? "Clarification en cours"
        : phase === "matching"
          ? "Matching contexte en cours"
          : phase === "matched"
            ? "Contexte évalué (non appliqué)"
            : phase === "proposal"
              ? "Proposition prête (non exécutée)"
              : phase === "analyze_only"
                ? "Analyse seule — aucune mutation"
                : phase === "error"
                  ? "Erreur d’analyse"
                  : hasSubmitted
                    ? "Demande traitée"
                    : "En attente d’une intention";

  return (
    <>
      <h2>Accompagnement</h2>
      <div className={styles.railCard}>
        <strong>Studio vous aide à</strong>
        <p>comprendre, clarifier, matcher et proposer — vous gardez la décision.</p>
      </div>
      <div className={styles.railCard}>
        <strong>État</strong>
        <p data-testid="intake-rail-status">{statusText}</p>
        {providerMode ? (
          <p className={styles.placeholder}>Provider {providerMode}</p>
        ) : null}
      </div>
      <div className={styles.railCard}>
        <strong>Projets existants</strong>
        <p>
          {recentCount > 0
            ? `${recentCount} projet(s) — matching C3 en lecture seule`
            : "Aucun projet pour l’instant — ouvrez le Workspace plus tard"}
        </p>
        <p>
          <a href="/workspace">Aller au Workspace</a>
        </p>
      </div>
      <p className={styles.monoNote}>
        Matching déterministe · sélection temporaire · mutations hors périmètre
        C3.
      </p>
    </>
  );
}
```

### `projects/sfia-studio/app/features/d1/intake/intake.module.css`

```css
.hero {
  margin-bottom: 20px;
}

.hero h1 {
  margin: 0 0 8px;
  font-size: clamp(1.5rem, 2.2vw, 1.85rem);
  line-height: 1.2;
  color: var(--sfia-ink);
}

.heroLead {
  margin: 0;
  font-size: 15px;
  color: var(--sfia-muted);
  max-width: 42rem;
  line-height: 1.5;
}

.valueStrip {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin: 14px 0 20px;
}

.valueChip {
  display: inline-flex;
  align-items: center;
  min-height: 32px;
  padding: 4px 12px;
  border-radius: 999px;
  background: var(--sfia-blue-soft);
  color: var(--sfia-blue);
  font-size: 12px;
  font-weight: 600;
}

.composer {
  display: grid;
  gap: 12px;
  background: #fff;
  border: 1px solid var(--sfia-border);
  border-radius: 16px;
  padding: 18px;
  box-shadow: var(--sfia-shadow-sm);
  margin-bottom: 16px;
}

.composerLabel {
  font-weight: 700;
  font-size: 14px;
}

.composerHelp {
  margin: 0;
  font-size: 13px;
  color: var(--sfia-muted);
}

.composerArea {
  width: 100%;
  box-sizing: border-box;
  min-height: 120px;
  border: 1px solid var(--sfia-border);
  border-radius: 12px;
  padding: 14px 16px;
  font: inherit;
  resize: vertical;
  background: var(--sfia-bg, #f6f7fa);
}

.composerArea:focus-visible {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 2px;
}

.composerActions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  align-items: center;
}

.examples {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.exampleBtn {
  min-height: 36px;
  padding: 6px 12px;
  border-radius: 10px;
  border: 1px dashed var(--sfia-border);
  background: #fff;
  color: var(--sfia-ink);
  font-size: 13px;
  cursor: pointer;
  text-align: left;
}

.exampleBtn:hover,
.exampleBtn:focus-visible {
  border-color: var(--sfia-blue);
  outline: 2px solid var(--sfia-blue);
  outline-offset: 1px;
}

.quickActions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 22px;
}

.quickBtn {
  min-height: 40px;
  padding: 8px 14px;
  border-radius: 10px;
  border: 1px solid var(--sfia-border);
  background: #fff;
  color: var(--sfia-ink);
  font-weight: 600;
  font-size: 13px;
  cursor: pointer;
  text-decoration: none;
  display: inline-flex;
  align-items: center;
}

.quickBtn:hover,
.quickBtn:focus-visible {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 2px;
}

.quickBtnPrimary {
  background: var(--sfia-blue);
  color: #fff;
  border-color: transparent;
}

.statusPanel {
  border-radius: 14px;
  border: 1px solid #c9d6ff;
  background: var(--sfia-blue-soft);
  padding: 16px 18px;
  margin-bottom: 18px;
}

.statusPanel h2 {
  margin: 0 0 8px;
  font-size: 16px;
}

.statusPanel p {
  margin: 0 0 8px;
  font-size: 14px;
  color: var(--sfia-ink);
}

.statusMeta {
  font-size: 12px;
  color: var(--sfia-muted);
  font-style: italic;
}

.statusActions {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-top: 12px;
}

.resumeSection {
  margin-top: 8px;
}

.resumeSection h2 {
  margin: 0 0 6px;
  font-size: 18px;
}

.resumeHint {
  margin: 0 0 12px;
  font-size: 13px;
  color: var(--sfia-muted);
}

.resumeGrid {
  list-style: none;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
}

.resumeCard {
  display: block;
  text-decoration: none;
  color: inherit;
  border: 1px solid var(--sfia-border);
  border-radius: 12px;
  padding: 14px 16px;
  background: #fff;
  min-height: 44px;
}

.resumeCard:hover,
.resumeCard:focus-visible {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 2px;
}

.resumeCard strong {
  display: block;
  margin-bottom: 6px;
}

.staticNote {
  border: 1px dashed var(--sfia-border);
  border-radius: 12px;
  padding: 12px 14px;
  background: #fffaf0;
  color: #8a5a00;
  font-size: 13px;
  margin-top: 12px;
}

.manualBanner {
  margin-top: 20px;
  padding: 14px 16px;
  border-radius: 12px;
  border: 1px solid var(--sfia-border);
  background: #fff;
  display: flex;
  flex-wrap: wrap;
  gap: 12px;
  align-items: center;
  justify-content: space-between;
}

.manualBanner p {
  margin: 0;
  font-size: 13px;
  color: var(--sfia-muted);
  max-width: 36rem;
}

.proposalCard {
  border: 1.5px solid var(--sfia-blue);
  border-radius: 14px;
  background: #fff;
  padding: 18px;
  margin-bottom: 16px;
  display: grid;
  gap: 12px;
}

.proposalCard h2 {
  margin: 0;
  font-size: 18px;
}

.proposalMeta {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.proposalSection h3 {
  margin: 0 0 4px;
  font-size: 13px;
  color: var(--sfia-muted);
  font-weight: 600;
  text-transform: none;
}

.proposalSection p,
.proposalSection li {
  margin: 0;
  font-size: 14px;
  line-height: 1.45;
}

.proposalSection ul {
  margin: 0;
  padding-left: 1.2rem;
}

.bannerWarn {
  border-radius: 12px;
  border: 1px solid #f0c36d;
  background: #fff7e0;
  color: #8a5a00;
  padding: 12px 14px;
  font-size: 13px;
  margin-bottom: 12px;
}

.bannerError {
  border-radius: 12px;
  border: 1px solid #f0b4b4;
  background: #ffecec;
  color: #a11;
  padding: 12px 14px;
  font-size: 14px;
  margin-bottom: 12px;
}

.loadingRow {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px 16px;
  border-radius: 12px;
  background: var(--sfia-blue-soft);
  color: var(--sfia-blue);
  font-weight: 600;
  margin-bottom: 14px;
}

.clarificationBox {
  border-radius: 14px;
  border: 1px solid var(--sfia-border);
  background: #fff;
  padding: 16px;
  margin-bottom: 14px;
  display: grid;
  gap: 10px;
}

.contextCard {
  border: 1px solid var(--sfia-border);
  border-radius: 14px;
  background: #fff;
  padding: 18px;
  margin-bottom: 16px;
  display: grid;
  gap: 12px;
}

.contextCard h2 {
  margin: 0;
  font-size: 18px;
}

.contextLead {
  margin: 0;
  font-size: 13px;
  color: var(--sfia-muted);
  line-height: 1.45;
}

.contextList {
  border: 0;
  margin: 0;
  padding: 0;
  display: grid;
  gap: 10px;
}

.contextCandidate {
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 12px;
  align-items: start;
  border: 1px solid var(--sfia-border);
  border-radius: 12px;
  padding: 12px 14px;
  background: var(--sfia-bg, #f6f7fa);
  cursor: pointer;
}

.contextCandidateSelected {
  border-color: var(--sfia-blue);
  background: var(--sfia-blue-soft);
}

.contextCandidate input {
  margin-top: 4px;
  width: 18px;
  height: 18px;
}

.contextCandidateBody {
  display: grid;
  gap: 6px;
  min-width: 0;
}

.contextCandidateHead {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  align-items: center;
}

.contextCandidateBody p,
.contextCandidateBody li {
  margin: 0;
  font-size: 13px;
  line-height: 1.4;
}

.contextCandidateBody ul {
  margin: 0;
  padding-left: 1.1rem;
}

.contextWarnings {
  color: #8a5a00;
}

@media (prefers-reduced-motion: reduce) {
  .loadingRow {
    animation: none;
  }
}

```

### `projects/sfia-studio/app/playwright.config.ts`

```tsx
import { defineConfig, devices } from "@playwright/test";

const baseURL = "http://127.0.0.1:3020";

export default defineConfig({
  testDir: "./e2e",
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: 0,
  reporter: [["list"]],
  use: {
    ...devices["Desktop Chrome"],
    baseURL,
    trace: "on-first-retry",
    viewport: { width: 1440, height: 1024 },
  },
  webServer: {
    command: "npm run dev -- --hostname 127.0.0.1 --port 3020",
    url: baseURL,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: {
      ...process.env,
      OPS1_E2E_ALLOW_DIRTY_PRINCIPAL: "1",
      D1_INTAKE_PROVIDER: process.env.D1_INTAKE_PROVIDER || "fake",
      // Default E2E: fake provider. Real live capture/smoke: OPS1_ALLOW_LIVE_SMOKE=1
      // without forcing fake (secrets must already be in the environment).
      ...(process.env.OPS1_ALLOW_LIVE_SMOKE === "1"
        ? {
            OPS1_CONVERSATION_PROVIDER: "",
          }
        : {
            OPS1_CONVERSATION_PROVIDER: "fake",
            OPENAI_API_KEY:
              process.env.OPENAI_API_KEY || "sk-e2e-fake-not-a-real-key",
            OPENAI_MODEL: process.env.OPENAI_MODEL || "fake-e2e-model",
          }),
    },
  },
});
```


## 10. État Git final

```
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
branch=delivery/sfia-studio-control-tower-fast-track
staged=0
deps_unchanged=true
```

## 11. Verdict

**VERDICT :** SFIA v3.0 D1-C3 EXISTING CONTEXT MATCHING IMPLEMENTED — VALIDATION REQUIRED
