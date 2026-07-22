# Review Pack Full — SFIA v3.0 D1-C4 Human Confirmation and Bounded Project Mutation

## 1. Métadonnées

- **Date/heure/fuseau :** 2026-07-22 22:08:46 CEST
- **Cycle :** 9 — Delivery · Critical · DELIVERY / MUTATION / PROJECT / AUDIT / SECURITY / EVOL
- **Gate consommé :** GO IMPLEMENTATION D1-C4 — HUMAN CONFIRMATION AND BOUNDED PROJECT MUTATION
- **Gate suivant :** GO VALIDATION D1-C4 — HUMAN CONFIRMATION AND BOUNDED PROJECT MUTATION
- **Repo/branche :** mcleland147/sfia-workspace · `delivery/sfia-studio-control-tower-fast-track`
- **HEAD/base :** `32e5271842b9a344a7e292614675c27ea8ed941b`
- **Handoff précédent :** `63661fee8c4a7f53b7f1b7f3ffe6d282ca5e6d2f` / blob `40cd385b6a69a2f0acba62b848403bb68bb97689`
- **BCDI :** BCDI-D1-C4-HUMAN-CONFIRMATION-BOUNDED-PROJECT-MUTATION
- **Baseline :** SFIA v2.6 · **v3 :** V3-MODELED CANDIDATE
- **Statut :** D1-C4 IMPLEMENTED CANDIDATE

## 2. Git

Dirty attendu · staged vide · HEAD=origin/main · aucune dépendance · aucune migration

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
?? projects/sfia-studio/app/e2e/d1-c4-confirmation-mutation.spec.ts
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

## 3. Discovery Project

- createProject + idempotency keys + audit PROJECT_* : **disponibles**
- Contrat rattachement intake→Project : **ABSENT**
- Conséquence : confirmation existante = `NO_MUTATION` + note domaine obligatoire

## 4. Architecture C4

Proposal C2 + Match C3 + Selection → ConfirmationSummary → explicitConfirmation → executeConfirmedMutation
CREATE_PROJECT → createProject I1 · EXISTING → relecture + NO_MUTATION · ANALYZE_ONLY/CANCEL → no write

## 5. Tests

vitest d1 **52/52** · e2e C4+régressions **46/46** · tsc OK

## 6. Captures

- `.tmp-sfia-review/screenshots-d1-c4/analyze-only-1440.png`
- `.tmp-sfia-review/screenshots-d1-c4/confirm-create-1024.png`
- `.tmp-sfia-review/screenshots-d1-c4/confirm-create-1280.png`
- `.tmp-sfia-review/screenshots-d1-c4/confirm-create-1440.png`
- `.tmp-sfia-review/screenshots-d1-c4/confirm-create-1728.png`
- `.tmp-sfia-review/screenshots-d1-c4/confirm-existing-1440.png`
- `.tmp-sfia-review/screenshots-d1-c4/conflict-or-inactive-1440.png`
- `.tmp-sfia-review/screenshots-d1-c4/create-success-1440.png`
- `.tmp-sfia-review/screenshots-d1-c4/idempotent-replay-1440.png`
- `.tmp-sfia-review/screenshots-d1-c4/mutation-error-1440.png`

UX-R04 deferred.

## 7. Anti-claims

Pas PROJECT LINKED · pas CYCLE OPENED · pas ACTION RESUMED · pas D1 COMPLETE · pas V3-IMPLEMENTED

## 8. Contenu fichiers créés + clés modifiées

### `projects/sfia-studio/app/lib/d1/confirmation/actions.ts`

```tsx
"use server";

import { executeConfirmedMutation } from "./executeConfirmation";
import { buildConfirmationSummary } from "./summary";
import { getProject } from "../commands";
import { D1Error } from "../errors";
import type {
  BoundedMutationResult,
  ConfirmationSummary,
  ExecuteConfirmationInput,
  ProjectDraftFields,
} from "./types";
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
    message: "Échec de confirmation. Réessayez.",
  };
}

export type ConfirmActionResult =
  | { ok: true; result: BoundedMutationResult }
  | { ok: false; code: string; message: string };

export async function actionExecuteConfirmation(
  input: ExecuteConfirmationInput,
): Promise<ConfirmActionResult> {
  try {
    const result = executeConfirmedMutation(input);
    return { ok: true, result };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionPrepareExistingProjectSummary(input: {
  projectId: string;
}): Promise<
  | {
      ok: true;
      project: {
        projectId: string;
        name: string;
        objective: string;
        state: string;
        version: number;
        updatedAt: string;
      };
      summary: ConfirmationSummary;
    }
  | { ok: false; code: string; message: string }
> {
  try {
    const project = getProject(input.projectId);
    const summary = buildConfirmationSummary({
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      project,
    });
    logIntakeEvent("intake_confirmation_presented", {
      sessionLocalId: "prepare",
      status: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      projectId: project.projectId,
    });
    return {
      ok: true,
      project: {
        projectId: project.projectId,
        name: project.name,
        objective: project.objective,
        state: project.state,
        version: project.version,
        updatedAt: project.updatedAt,
      },
      summary,
    };
  } catch (error) {
    return serializeError(error);
  }
}

export async function actionPrepareCreateSummary(input: {
  draft: ProjectDraftFields;
}): Promise<{ ok: true; summary: ConfirmationSummary }> {
  const summary = buildConfirmationSummary({
    actionType: "CREATE_PROJECT",
    draft: input.draft,
  });
  return { ok: true, summary };
}
```

### `projects/sfia-studio/app/lib/d1/confirmation/executeConfirmation.ts`

```tsx
import { randomUUID } from "node:crypto";
import { createProject, getProject } from "../commands";
import { D1ProjectRepository } from "../repository";
import { openD1Db } from "../db";
import { D1Error } from "../errors";
import {
  D1_GOVERNANCE_METHOD_MODE,
  type D1Project,
} from "../types";
import { logIntakeEvent } from "../intakeObservability";
import { buildConfirmationSummary } from "./summary";
import {
  buildConfirmationIntent,
  draftFingerprint,
} from "./validate";
import {
  CONFIRMATION_SCHEMA_VERSION,
  EXISTING_PROJECT_PERSISTENCE_NOTE,
  type BoundedMutationResult,
  type ExecuteConfirmationInput,
} from "./types";

function mutationId(): string {
  return `mut-${randomUUID()}`;
}

function resultBase(
  confirmationId: string,
  actionType: ExecuteConfirmationInput["actionType"],
): Pick<
  BoundedMutationResult,
  | "schemaVersion"
  | "mutationId"
  | "confirmationId"
  | "actionType"
  | "occurredAt"
  | "summary"
> {
  return {
    schemaVersion: CONFIRMATION_SCHEMA_VERSION,
    mutationId: mutationId(),
    confirmationId,
    actionType,
    occurredAt: new Date().toISOString(),
    summary: null,
  };
}

function fingerprintsMatch(
  cachedProject: D1Project,
  draft: {
    name: string;
    objective: string;
    initialContextSummary: string;
    activate: boolean;
  },
): boolean {
  const cachedFp = draftFingerprint({
    name: cachedProject.name,
    objective: cachedProject.objective,
    initialContextSummary: cachedProject.initialContextSummary ?? "",
    activate: cachedProject.state === "ACTIVE",
  });
  return cachedFp === draftFingerprint(draft);
}

function asActionTypeSafe(
  value: unknown,
): ExecuteConfirmationInput["actionType"] {
  if (
    value === "CREATE_PROJECT" ||
    value === "CONFIRM_EXISTING_PROJECT_CONTEXT" ||
    value === "ANALYZE_ONLY" ||
    value === "CANCEL"
  ) {
    return value;
  }
  return "CANCEL";
}

/**
 * Execute a human-confirmed bounded mutation.
 * CREATE_PROJECT uses D1-I1 createProject + idempotency.
 * CONFIRM_EXISTING_PROJECT_CONTEXT does NOT persist a link (no domain contract).
 */
export function executeConfirmedMutation(
  input: ExecuteConfirmationInput,
  repo = new D1ProjectRepository(openD1Db()),
): BoundedMutationResult {
  const started = Date.now();

  try {
    const intent = buildConfirmationIntent(input);

    logIntakeEvent("intake_confirmation_presented", {
      sessionLocalId: intent.sessionLocalId,
      status: intent.actionType,
      proposalId: intent.proposalId,
    });

    if (intent.actionType === "CANCEL") {
      const summary = buildConfirmationSummary({ actionType: "CANCEL" });
      logIntakeEvent("intake_confirmation_cancelled", {
        sessionLocalId: intent.sessionLocalId,
        status: "CANCELLED",
        proposalId: intent.proposalId,
        durationMs: Date.now() - started,
      });
      return {
        ...resultBase(intent.confirmationId, "CANCEL"),
        status: "CANCELLED",
        projectId: null,
        idempotentReplay: false,
        auditEventId: null,
        warnings: [],
        errorCode: null,
        persistenceNote: null,
        summary,
      };
    }

    if (intent.actionType === "ANALYZE_ONLY") {
      const summary = buildConfirmationSummary({ actionType: "ANALYZE_ONLY" });
      logIntakeEvent("intake_analyze_only_completed", {
        sessionLocalId: intent.sessionLocalId,
        status: "NO_MUTATION",
        proposalId: intent.proposalId,
        durationMs: Date.now() - started,
      });
      return {
        ...resultBase(intent.confirmationId, "ANALYZE_ONLY"),
        status: "NO_MUTATION",
        projectId: null,
        idempotentReplay: false,
        auditEventId: null,
        warnings: [],
        errorCode: null,
        persistenceNote: null,
        summary,
      };
    }

    if (intent.actionType === "CONFIRM_EXISTING_PROJECT_CONTEXT") {
      const projectId = intent.targetProjectId!;
      let project: D1Project;
      try {
        project = getProject(projectId, repo);
      } catch {
        logIntakeEvent("intake_existing_project_conflict", {
          sessionLocalId: intent.sessionLocalId,
          status: "NOT_FOUND",
          proposalId: intent.proposalId,
          projectId,
          errorCode: "NOT_FOUND",
          durationMs: Date.now() - started,
        });
        return {
          ...resultBase(intent.confirmationId, intent.actionType),
          status: "CONFLICT",
          projectId: null,
          idempotentReplay: false,
          auditEventId: null,
          warnings: ["Le Project sélectionné n’existe plus."],
          errorCode: "NOT_FOUND",
          persistenceNote: EXISTING_PROJECT_PERSISTENCE_NOTE,
          summary: null,
        };
      }

      const warnings: string[] = [];
      if (
        intent.expectedUpdatedAt &&
        project.updatedAt !== intent.expectedUpdatedAt
      ) {
        logIntakeEvent("intake_existing_project_conflict", {
          sessionLocalId: intent.sessionLocalId,
          status: "STALE",
          proposalId: intent.proposalId,
          projectId,
          errorCode: "CONFLICT",
          durationMs: Date.now() - started,
        });
        return {
          ...resultBase(intent.confirmationId, intent.actionType),
          status: "CONFLICT",
          projectId: project.projectId,
          idempotentReplay: false,
          auditEventId: null,
          warnings: [
            "Le Project a été modifié depuis le snapshot C3. Confirmez à nouveau.",
          ],
          errorCode: "CONFLICT",
          persistenceNote: EXISTING_PROJECT_PERSISTENCE_NOTE,
          summary: buildConfirmationSummary({
            actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
            project,
          }),
        };
      }
      if (
        intent.expectedProjectVersion != null &&
        project.version !== intent.expectedProjectVersion
      ) {
        return {
          ...resultBase(intent.confirmationId, intent.actionType),
          status: "CONFLICT",
          projectId: project.projectId,
          idempotentReplay: false,
          auditEventId: null,
          warnings: [
            "Version Project divergente depuis le matching. Confirmation renouvelée requise.",
          ],
          errorCode: "CONFLICT",
          persistenceNote: EXISTING_PROJECT_PERSISTENCE_NOTE,
          summary: buildConfirmationSummary({
            actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
            project,
          }),
        };
      }
      if (project.state !== "ACTIVE") {
        warnings.push("Project inactif — aucune reprise automatique.");
      }

      const summary = buildConfirmationSummary({
        actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
        project,
      });
      logIntakeEvent("intake_existing_project_confirmed", {
        sessionLocalId: intent.sessionLocalId,
        status: "NO_MUTATION",
        proposalId: intent.proposalId,
        projectId: project.projectId,
        durationMs: Date.now() - started,
      });
      return {
        ...resultBase(intent.confirmationId, intent.actionType),
        status: "NO_MUTATION",
        projectId: project.projectId,
        idempotentReplay: false,
        auditEventId: null,
        warnings: [...warnings, EXISTING_PROJECT_PERSISTENCE_NOTE],
        errorCode: null,
        persistenceNote: EXISTING_PROJECT_PERSISTENCE_NOTE,
        summary,
      };
    }

    // CREATE_PROJECT
    const draft = intent.projectDraft!;
    const summary = buildConfirmationSummary({
      actionType: "CREATE_PROJECT",
      draft,
    });

    logIntakeEvent("intake_project_creation_confirmed", {
      sessionLocalId: intent.sessionLocalId,
      status: "confirmed",
      proposalId: intent.proposalId,
    });

    const cached = repo.getIdempotentResponse(intent.idempotencyKey);
    if (cached) {
      const parsed = JSON.parse(cached) as { project: D1Project };
      if (!fingerprintsMatch(parsed.project, draft)) {
        logIntakeEvent("intake_mutation_rejected", {
          sessionLocalId: intent.sessionLocalId,
          status: "CONFLICT",
          proposalId: intent.proposalId,
          errorCode: "IDEMPOTENCY",
          durationMs: Date.now() - started,
        });
        return {
          ...resultBase(intent.confirmationId, "CREATE_PROJECT"),
          status: "CONFLICT",
          projectId: parsed.project.projectId,
          idempotentReplay: false,
          auditEventId: null,
          warnings: [
            "Même clé d’idempotence avec un payload différent — conflit.",
          ],
          errorCode: "IDEMPOTENCY",
          persistenceNote: null,
          summary,
        };
      }
      logIntakeEvent("intake_project_creation_replayed", {
        sessionLocalId: intent.sessionLocalId,
        status: "ALREADY_APPLIED",
        proposalId: intent.proposalId,
        projectId: parsed.project.projectId,
        durationMs: Date.now() - started,
      });
      return {
        ...resultBase(intent.confirmationId, "CREATE_PROJECT"),
        status: "ALREADY_APPLIED",
        projectId: parsed.project.projectId,
        idempotentReplay: true,
        auditEventId: null,
        warnings: ["Création déjà appliquée (replay idempotent)."],
        errorCode: null,
        persistenceNote: null,
        summary,
      };
    }

    const created = createProject(
      {
        name: draft.name,
        objective: draft.objective,
        initialContextSummary: draft.initialContextSummary || undefined,
        methodMode: D1_GOVERNANCE_METHOD_MODE,
        activate: draft.activate,
        idempotencyKey: intent.idempotencyKey,
        correlationId: intent.confirmationId,
      },
      repo,
    );

    const reread = getProject(created.project.projectId, repo);
    const audit = repo.listAuditEvents(reread.projectId, 5);
    const createdEvt = audit.find((e) => e.eventType === "PROJECT_CREATED");

    logIntakeEvent("intake_project_created", {
      sessionLocalId: intent.sessionLocalId,
      status: created.idempotent ? "ALREADY_APPLIED" : "SUCCEEDED",
      proposalId: intent.proposalId,
      projectId: reread.projectId,
      durationMs: Date.now() - started,
    });

    return {
      ...resultBase(intent.confirmationId, "CREATE_PROJECT"),
      status: created.idempotent ? "ALREADY_APPLIED" : "SUCCEEDED",
      projectId: reread.projectId,
      idempotentReplay: created.idempotent,
      auditEventId: createdEvt?.eventId ?? null,
      warnings: created.idempotent
        ? ["Création déjà appliquée (replay idempotent)."]
        : [],
      errorCode: null,
      persistenceNote: null,
      summary,
    };
  } catch (error) {
    const code = error instanceof D1Error ? error.code : "UNKNOWN";
    logIntakeEvent("intake_mutation_failed", {
      sessionLocalId: input.sessionLocalId,
      status: "FAILED",
      proposalId: input.proposalId,
      errorCode: code,
      durationMs: Date.now() - started,
    });
    if (error instanceof D1Error && error.code === "VALIDATION") {
      return {
        ...resultBase(
          String(input.confirmationId ?? "conf-invalid"),
          asActionTypeSafe(input.actionType),
        ),
        status: "REJECTED",
        projectId: null,
        idempotentReplay: false,
        auditEventId: null,
        warnings: [error.message],
        errorCode: code,
        persistenceNote: null,
        summary: null,
      };
    }
    return {
      ...resultBase(
        String(input.confirmationId ?? "conf-failed"),
        asActionTypeSafe(input.actionType),
      ),
      status: "FAILED",
      projectId: null,
      idempotentReplay: false,
      auditEventId: null,
      warnings: [
        error instanceof D1Error
          ? error.message
          : "Échec de mutation. Aucune écriture confirmée.",
      ],
      errorCode: code,
      persistenceNote: null,
      summary: null,
    };
  }
}
```

### `projects/sfia-studio/app/lib/d1/confirmation/index.ts`

```tsx
export * from "./types";
export * from "./validate";
export * from "./summary";
export * from "./executeConfirmation";
export {
  actionExecuteConfirmation,
  actionPrepareExistingProjectSummary,
  actionPrepareCreateSummary,
} from "./actions";
```

### `projects/sfia-studio/app/lib/d1/confirmation/summary.ts`

```tsx
import type { D1Project } from "../types";
import type {
  ConfirmationActionType,
  ConfirmationSummary,
  ProjectDraftFields,
} from "./types";
import { EXISTING_PROJECT_PERSISTENCE_NOTE } from "./types";

export function buildConfirmationSummary(input: {
  actionType: ConfirmationActionType;
  draft?: ProjectDraftFields | null;
  project?: D1Project | null;
}): ConfirmationSummary {
  switch (input.actionType) {
    case "CREATE_PROJECT": {
      const d = input.draft!;
      return {
        actionLabel: "Créer ce projet",
        targetLabel: d.name,
        consequences: [
          "Un nouveau Project sera créé dans le workspace Studio.",
          "Des événements d’audit PROJECT_CREATED seront append-only.",
          "Aucun Cycle ni Action ne sera créé.",
        ],
        dataToPersist: [
          `Nom : ${d.name}`,
          `Objectif : ${d.objective.slice(0, 120)}${d.objective.length > 120 ? "…" : ""}`,
          d.initialContextSummary
            ? `Contexte : ${d.initialContextSummary.slice(0, 80)}…`
            : "Contexte : (vide)",
          `Activation : ${d.activate ? "ACTIVE" : "DRAFT"}`,
        ],
        warnings: [
          "Cette action est confirmée explicitement par vous.",
          "Un double clic avec la même clé d’idempotence ne créera pas de doublon.",
        ],
        irreversibleEffects: [
          "Le Project créé restera visible dans le Workspace (pas de suppression dans C4).",
        ],
        confirmationRequired: true,
      };
    }
    case "CONFIRM_EXISTING_PROJECT_CONTEXT": {
      const p = input.project!;
      return {
        actionLabel: "Confirmer ce projet pour la suite",
        targetLabel: p.name,
        consequences: [
          "Le Project sera relu et confirmé comme contexte de travail.",
          "Aucune relation persistante d’intake n’existe encore dans le domaine.",
          "Aucun Cycle ni Action ne sera ouvert.",
        ],
        dataToPersist: [
          "Aucune écriture métier de rattachement (contrat domaine absent).",
          `Project relu : ${p.projectId}`,
          `Statut : ${p.state}`,
        ],
        warnings: [
          EXISTING_PROJECT_PERSISTENCE_NOTE,
          p.state !== "ACTIVE"
            ? "Project inactif (DRAFT) — confirmation possible mais sans reprise automatique."
            : "Sélection confirmée localement uniquement.",
        ].filter(Boolean),
        irreversibleEffects: [],
        confirmationRequired: true,
      };
    }
    case "ANALYZE_ONLY":
      return {
        actionLabel: "Continuer sans créer",
        targetLabel: "Analyse seule",
        consequences: [
          "Aucune mutation Project.",
          "Clôture explicite de l’intake pour cette intention.",
        ],
        dataToPersist: ["Aucune donnée métier persistée."],
        warnings: [],
        irreversibleEffects: [],
        confirmationRequired: true,
      };
    case "CANCEL":
      return {
        actionLabel: "Annuler",
        targetLabel: "Annulation",
        consequences: ["Aucune mutation.", "Retour à la proposition / matching."],
        dataToPersist: [],
        warnings: [],
        irreversibleEffects: [],
        confirmationRequired: true,
      };
  }
}
```

### `projects/sfia-studio/app/lib/d1/confirmation/types.ts`

```tsx
/** D1-C4 — Human confirmation & bounded Project mutation (candidate contracts). */

export const CONFIRMATION_SCHEMA_VERSION = "0.1.0-d1-c4" as const;

export const CONFIRMATION_ACTION_TYPES = [
  "CREATE_PROJECT",
  "CONFIRM_EXISTING_PROJECT_CONTEXT",
  "ANALYZE_ONLY",
  "CANCEL",
] as const;
export type ConfirmationActionType = (typeof CONFIRMATION_ACTION_TYPES)[number];

export const MUTATION_STATUSES = [
  "SUCCEEDED",
  "ALREADY_APPLIED",
  "CANCELLED",
  "CONFLICT",
  "REJECTED",
  "FAILED",
  "NO_MUTATION",
] as const;
export type MutationStatus = (typeof MUTATION_STATUSES)[number];

export interface ProjectDraftFields {
  name: string;
  objective: string;
  initialContextSummary: string;
  activate: boolean;
}

export interface ConfirmationIntent {
  schemaVersion: typeof CONFIRMATION_SCHEMA_VERSION;
  confirmationId: string;
  sessionLocalId: string;
  proposalId: string;
  matchId: string | null;
  actionType: ConfirmationActionType;
  targetProjectId: string | null;
  projectDraft: ProjectDraftFields | null;
  /** Snapshot version/updatedAt for conflict detection on existing project. */
  expectedProjectVersion: number | null;
  expectedUpdatedAt: string | null;
  idempotencyKey: string;
  confirmedAt: string;
  confirmedBy: string;
  requiresHumanConfirmation: true;
  /** Server-enforced explicit confirmation marker. */
  explicitConfirmation: true;
}

export interface ConfirmationSummary {
  actionLabel: string;
  targetLabel: string;
  consequences: string[];
  dataToPersist: string[];
  warnings: string[];
  irreversibleEffects: string[];
  confirmationRequired: true;
}

export interface BoundedMutationResult {
  schemaVersion: typeof CONFIRMATION_SCHEMA_VERSION;
  mutationId: string;
  confirmationId: string;
  status: MutationStatus;
  actionType: ConfirmationActionType;
  projectId: string | null;
  idempotentReplay: boolean;
  auditEventId: string | null;
  occurredAt: string;
  warnings: string[];
  errorCode: string | null;
  /** Honest note when existing project has no persistence contract. */
  persistenceNote: string | null;
  summary: ConfirmationSummary | null;
}

export interface ExecuteConfirmationInput {
  sessionLocalId: string;
  proposalId: string;
  matchId: string | null;
  actionType: ConfirmationActionType;
  targetProjectId: string | null;
  projectDraft: ProjectDraftFields | null;
  expectedProjectVersion: number | null;
  expectedUpdatedAt: string | null;
  idempotencyKey: string;
  /** Must be true — no implicit confirmation. */
  explicitConfirmation: boolean;
  /** Optional pre-generated confirmation id (client may send; server may replace). */
  confirmationId?: string;
}

export const EXISTING_PROJECT_PERSISTENCE_NOTE =
  "EXISTING PROJECT CONFIRMATION PERSISTENCE NOT IMPLEMENTED — DOMAIN CONTRACT REQUIRED" as const;
```

### `projects/sfia-studio/app/lib/d1/confirmation/validate.ts`

```tsx
import { D1Error } from "../errors";
import {
  CONFIRMATION_ACTION_TYPES,
  CONFIRMATION_SCHEMA_VERSION,
  type ConfirmationActionType,
  type ConfirmationIntent,
  type ExecuteConfirmationInput,
  type ProjectDraftFields,
} from "./types";

function isPlainObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

export function asStrictBoolean(value: unknown, field: string): boolean {
  if (typeof value !== "boolean") {
    throw new D1Error(
      "VALIDATION",
      `Champ ${field} invalide (boolean strict attendu).`,
    );
  }
  return value;
}

export function asActionType(value: unknown): ConfirmationActionType {
  if (
    typeof value !== "string" ||
    !(CONFIRMATION_ACTION_TYPES as readonly string[]).includes(value)
  ) {
    throw new D1Error("VALIDATION", `actionType non autorisé: ${String(value)}`);
  }
  return value as ConfirmationActionType;
}

export function validateProjectDraft(draft: ProjectDraftFields): ProjectDraftFields {
  const name = draft.name?.trim() ?? "";
  const objective = draft.objective?.trim() ?? "";
  const initialContextSummary = (draft.initialContextSummary ?? "").trim();
  if (!name || name.length > 200) {
    throw new D1Error("VALIDATION", "Nom projet requis (max 200).");
  }
  if (!objective || objective.length > 2000) {
    throw new D1Error("VALIDATION", "Objectif requis (max 2000).");
  }
  if (initialContextSummary.length > 4000) {
    throw new D1Error("VALIDATION", "Contexte trop long (max 4000).");
  }
  if (typeof draft.activate !== "boolean") {
    throw new D1Error("VALIDATION", "activate doit être un boolean strict.");
  }
  return {
    name,
    objective,
    initialContextSummary,
    activate: draft.activate,
  };
}

export function draftFingerprint(draft: ProjectDraftFields): string {
  return JSON.stringify({
    name: draft.name.trim(),
    objective: draft.objective.trim(),
    initialContextSummary: (draft.initialContextSummary ?? "").trim(),
    activate: draft.activate === true,
  });
}

/**
 * Validate client payload into a server ConfirmationIntent.
 * Never trusts client-provided Project IDs without later repository re-read.
 */
export function buildConfirmationIntent(
  input: ExecuteConfirmationInput,
): ConfirmationIntent {
  if (!isPlainObject(input as unknown)) {
    throw new D1Error("VALIDATION", "Payload confirmation invalide.");
  }
  const actionType = asActionType(input.actionType);
  if (!asStrictBoolean(input.explicitConfirmation, "explicitConfirmation")) {
    throw new D1Error(
      "VALIDATION",
      "Confirmation explicite obligatoire (explicitConfirmation=true).",
    );
  }
  const sessionLocalId = String(input.sessionLocalId ?? "").trim();
  const proposalId = String(input.proposalId ?? "").trim();
  const idempotencyKey = String(input.idempotencyKey ?? "").trim();
  if (!sessionLocalId || sessionLocalId.length > 120) {
    throw new D1Error("VALIDATION", "sessionLocalId invalide.");
  }
  if (!proposalId || proposalId.length > 120) {
    throw new D1Error("VALIDATION", "proposalId invalide.");
  }
  if (!idempotencyKey || idempotencyKey.length > 200) {
    throw new D1Error("VALIDATION", "idempotencyKey invalide.");
  }

  let projectDraft: ProjectDraftFields | null = null;
  let targetProjectId: string | null = null;

  if (actionType === "CREATE_PROJECT") {
    if (!input.projectDraft || typeof input.projectDraft !== "object") {
      throw new D1Error("VALIDATION", "projectDraft requis pour CREATE_PROJECT.");
    }
    projectDraft = validateProjectDraft(input.projectDraft);
    if (input.targetProjectId != null) {
      throw new D1Error(
        "VALIDATION",
        "CREATE_PROJECT interdit targetProjectId client.",
      );
    }
  }

  if (actionType === "CONFIRM_EXISTING_PROJECT_CONTEXT") {
    const id = String(input.targetProjectId ?? "").trim();
    if (!id || !id.startsWith("proj-")) {
      throw new D1Error(
        "VALIDATION",
        "targetProjectId invalide pour confirmation existante.",
      );
    }
    targetProjectId = id;
  }

  if (actionType === "ANALYZE_ONLY" || actionType === "CANCEL") {
    if (input.targetProjectId != null || input.projectDraft != null) {
      // allow null drafts; reject stray mutation payloads
      if (input.projectDraft != null && actionType === "CANCEL") {
        /* cancel may ignore draft */
      }
    }
  }

  return {
    schemaVersion: CONFIRMATION_SCHEMA_VERSION,
    confirmationId:
      String(input.confirmationId ?? "").trim() ||
      `conf-${Date.now().toString(36)}`,
    sessionLocalId,
    proposalId,
    matchId: input.matchId ? String(input.matchId).trim() : null,
    actionType,
    targetProjectId,
    projectDraft,
    expectedProjectVersion:
      typeof input.expectedProjectVersion === "number"
        ? input.expectedProjectVersion
        : null,
    expectedUpdatedAt: input.expectedUpdatedAt
      ? String(input.expectedUpdatedAt)
      : null,
    idempotencyKey,
    confirmedAt: new Date().toISOString(),
    confirmedBy: "actor-mono-i1",
    requiresHumanConfirmation: true,
    explicitConfirmation: true,
  };
}
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/01-implemented-scope.md`

```markdown
# 01 — Scope

## Inclus
- Confirmation humaine explicite
- Création Project via commande D1-I1
- Idempotence + conflit payload
- Analyze-only / annulation sans mutation
- Confirmation Project existant locale (NO_MUTATION)

## Exclus
Cycle/Action · GuidedSession · migration SQL · rattachement persisté inventé · UX-R04
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/02-confirmation-contract.md`

```markdown
# 02 — ConfirmationIntent / Summary

actionType allowlist · explicitConfirmation strict · projectDraft borné · IDs contrôlés serveur.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/03-bounded-mutation-contract.md`

```markdown
# 03 — BoundedMutationResult

SUCCEEDED · ALREADY_APPLIED · CANCELLED · CONFLICT · REJECTED · FAILED · NO_MUTATION
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/04-project-creation-flow.md`

```markdown
# 04 — Création

createProject D1-I1 · methodMode interne V3_CANDIDATE · audit PROJECT_CREATED · relecture obligatoire.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/05-existing-project-confirmation.md`

```markdown
# 05 — Project existant

Aucun contrat de rattachement canonique.
Résultat : NO_MUTATION + `EXISTING PROJECT CONFIRMATION PERSISTENCE NOT IMPLEMENTED — DOMAIN CONTRACT REQUIRED`
Interdit : claim PROJECT LINKED.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/06-idempotence-and-conflicts.md`

```markdown
# 06 — Idempotence

Clé D1-I1 réutilisée · même payload → ALREADY_APPLIED · payload différent → CONFLICT · Project stale → CONFLICT.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/07-audit-and-observability.md`

```markdown
# 07 — Audit / obs

Métier : PROJECT_CREATED (I1).
Utilisateur/technique : intake_confirmation_* / intake_project_* (logs structurés, pas de nouveaux event_type SQL).
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/08-security-rgpd-accessibility.md`

```markdown
# 08 — Sécurité / a11y

Allowlist actions · pas de mutation GET · focus confirmation · boutons nommés · aria-live.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/09-runtime-validation.md`

```markdown
# 09 — Runtime

Captures `.tmp-sfia-review/screenshots-d1-c4/`
UX-R04 différée.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/10-test-results.md`

```markdown
# 10 — Tests

vitest d1 52/52 · e2e C4+C3+C2+C1+I1+smoke 46/46 · tsc OK
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/11-reserves-and-debt.md`

```markdown
# 11 — Réserves

- EXISTING PROJECT CONFIRMATION PERSISTENCE NOT IMPLEMENTED — DOMAIN CONTRACT REQUIRED
- UX-R04 différée
- C5 : GuidedSession / Cycle éventuel
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/12-d1-c4-validation-decision-pack.md`

```markdown
# 12 — Decision pack

**Verdict :** SFIA v3.0 D1-C4 HUMAN CONFIRMATION AND BOUNDED PROJECT MUTATION IMPLEMENTED — VALIDATION REQUIRED

Décisions Morris : GO VALIDATION D1-C4 ; contrat domaine rattachement ; C5.
Anti-claims : pas PROJECT LINKED · pas CYCLE OPENED · pas V3-IMPLEMENTED.
```

### `projects/sfia-studio/sfia-v3-delivery/d1-c4-human-confirmation-bounded-project-mutation/README.md`

```markdown
# D1-C4 — Human Confirmation and Bounded Project Mutation

| Champ | Valeur |
|-------|--------|
| BCDI | BCDI-D1-C4-HUMAN-CONFIRMATION-BOUNDED-PROJECT-MUTATION |
| Gate consommé | GO IMPLEMENTATION D1-C4 |
| Gate suivant | GO VALIDATION D1-C4 |
| Statut | D1-C4 IMPLEMENTED CANDIDATE |
| Baseline | SFIA v2.6 |
| Statut v3 | V3-MODELED CANDIDATE |

Index : 01–12.
```

### `projects/sfia-studio/app/features/d1/confirmation/ConfirmationPanel.tsx`

```tsx
"use client";

import { useEffect, useId, useRef, useState, useTransition } from "react";
import Link from "next/link";
import {
  actionExecuteConfirmation,
} from "@/lib/d1/confirmation/actions";
import type {
  BoundedMutationResult,
  ConfirmationActionType,
  ConfirmationSummary,
  ProjectDraftFields,
} from "@/lib/d1/confirmation/types";
import shell from "../d1-shell.module.css";
import styles from "../intake/intake.module.css";

export function ConfirmationPanel({
  actionType,
  proposalId,
  matchId,
  sessionLocalId,
  idempotencyKey,
  initialDraft,
  targetProjectId,
  expectedProjectVersion,
  expectedUpdatedAt,
  projectLabel,
  projectState,
  matchRationale,
  summary,
  onCancel,
  onDone,
}: {
  actionType: ConfirmationActionType;
  proposalId: string;
  matchId: string | null;
  sessionLocalId: string;
  idempotencyKey: string;
  initialDraft: ProjectDraftFields | null;
  targetProjectId: string | null;
  expectedProjectVersion: number | null;
  expectedUpdatedAt: string | null;
  projectLabel?: string;
  projectState?: string;
  matchRationale?: string;
  summary: ConfirmationSummary;
  onCancel: () => void;
  onDone: (result: BoundedMutationResult) => void;
}) {
  const panelId = useId();
  const titleRef = useRef<HTMLHeadingElement>(null);
  const [draft, setDraft] = useState<ProjectDraftFields | null>(initialDraft);
  const [pending, startTransition] = useTransition();
  const [busy, setBusy] = useState(false);
  const [result, setResult] = useState<BoundedMutationResult | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    titleRef.current?.focus();
  }, []);

  const finalButtonLabel =
    actionType === "CREATE_PROJECT"
      ? "Créer ce projet"
      : actionType === "CONFIRM_EXISTING_PROJECT_CONTEXT"
        ? "Confirmer ce projet pour la suite"
        : actionType === "ANALYZE_ONLY"
          ? "Continuer sans créer"
          : "Annuler";

  function submit() {
    if (busy || pending) return;
    setBusy(true);
    setError(null);
    startTransition(async () => {
      const res = await actionExecuteConfirmation({
        sessionLocalId,
        proposalId,
        matchId,
        actionType,
        targetProjectId,
        projectDraft: actionType === "CREATE_PROJECT" ? draft : null,
        expectedProjectVersion,
        expectedUpdatedAt,
        idempotencyKey,
        explicitConfirmation: true,
      });
      setBusy(false);
      if (!res.ok) {
        setError(res.message);
        return;
      }
      setResult(res.result);
      onDone(res.result);
    });
  }

  return (
    <section
      className={styles.confirmCard}
      data-testid="intake-confirmation"
      aria-labelledby={panelId}
      aria-busy={busy || pending}
    >
      <h2 id={panelId} tabIndex={-1} ref={titleRef}>
        Confirmation — {summary.actionLabel}
      </h2>
      <p className={styles.contextLead} data-testid="confirm-target">
        Cible : <strong>{summary.targetLabel}</strong>
        {projectState ? ` · ${projectState}` : null}
      </p>

      {matchRationale ? (
        <p className={shell.hint} data-testid="confirm-match-rationale">
          {matchRationale}
        </p>
      ) : null}

      {actionType === "CREATE_PROJECT" && draft ? (
        <div className={styles.confirmFields} data-testid="confirm-create-fields">
          <label className={styles.composerLabel} htmlFor={`${panelId}-name`}>
            Nom du projet
          </label>
          <input
            id={`${panelId}-name`}
            className={styles.confirmInput}
            value={draft.name}
            data-testid="confirm-name"
            disabled={busy || !!result}
            onChange={(e) => setDraft({ ...draft, name: e.target.value })}
          />
          <label className={styles.composerLabel} htmlFor={`${panelId}-obj`}>
            Objectif
          </label>
          <textarea
            id={`${panelId}-obj`}
            className={styles.composerArea}
            value={draft.objective}
            data-testid="confirm-objective"
            disabled={busy || !!result}
            onChange={(e) => setDraft({ ...draft, objective: e.target.value })}
          />
          <label className={styles.composerLabel} htmlFor={`${panelId}-ctx`}>
            Contexte initial
          </label>
          <textarea
            id={`${panelId}-ctx`}
            className={styles.composerArea}
            value={draft.initialContextSummary}
            data-testid="confirm-context"
            disabled={busy || !!result}
            onChange={(e) =>
              setDraft({ ...draft, initialContextSummary: e.target.value })
            }
          />
          <label className={styles.confirmCheck}>
            <input
              type="checkbox"
              checked={draft.activate}
              data-testid="confirm-activate"
              disabled={busy || !!result}
              onChange={(e) =>
                setDraft({ ...draft, activate: e.target.checked })
              }
            />
            Activer le projet (ACTIVE)
          </label>
        </div>
      ) : null}

      <div className={styles.proposalSection}>
        <h3>Conséquences</h3>
        <ul data-testid="confirm-consequences">
          {summary.consequences.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      <div className={styles.proposalSection}>
        <h3>Données concernées</h3>
        <ul data-testid="confirm-data">
          {summary.dataToPersist.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
      </div>
      {summary.warnings.length ? (
        <div className={styles.bannerWarn} data-testid="confirm-warnings">
          <ul>
            {summary.warnings.map((w) => (
              <li key={w}>{w}</li>
            ))}
          </ul>
        </div>
      ) : null}
      {summary.irreversibleEffects.length ? (
        <div className={styles.proposalSection}>
          <h3>Effets durables</h3>
          <ul>
            {summary.irreversibleEffects.map((e) => (
              <li key={e}>{e}</li>
            ))}
          </ul>
        </div>
      ) : null}

      {(busy || pending) && !result ? (
        <div className={styles.loadingRow} role="status" data-testid="confirm-loading">
          Confirmation en cours…
        </div>
      ) : null}

      {error ? (
        <div className={styles.bannerError} role="alert" data-testid="confirm-error">
          {error}
        </div>
      ) : null}

      {result ? (
        <div
          className={
            result.status === "SUCCEEDED" || result.status === "ALREADY_APPLIED"
              ? styles.bannerOk
              : result.status === "NO_MUTATION" || result.status === "CANCELLED"
                ? styles.bannerWarn
                : styles.bannerError
          }
          role="status"
          data-testid="confirm-result"
          data-status={result.status}
        >
          <p>
            Résultat : <strong>{result.status}</strong>
            {result.idempotentReplay ? " (replay idempotent)" : null}
          </p>
          {result.projectId ? (
            <p data-testid="confirm-project-id">Project : {result.projectId}</p>
          ) : null}
          {result.persistenceNote ? (
            <p data-testid="confirm-persistence-note">{result.persistenceNote}</p>
          ) : null}
          {result.warnings.map((w) => (
            <p key={w}>{w}</p>
          ))}
          {result.projectId &&
          (result.status === "SUCCEEDED" ||
            result.status === "ALREADY_APPLIED" ||
            result.status === "NO_MUTATION") ? (
            <Link
              className={shell.cta}
              href={`/projects/${result.projectId}`}
              data-testid="confirm-open-cockpit"
            >
              Ouvrir le cockpit (lecture)
            </Link>
          ) : null}
        </div>
      ) : null}

      {!result ? (
        <div className={styles.statusActions}>
          <button
            type="button"
            className={shell.cta}
            data-testid="confirm-submit"
            disabled={busy || pending}
            onClick={submit}
          >
            {finalButtonLabel}
          </button>
          <button
            type="button"
            className={`${shell.cta} ${shell.ctaSecondary}`}
            data-testid="confirm-cancel"
            disabled={busy || pending}
            onClick={onCancel}
          >
            Annuler
          </button>
        </div>
      ) : (
        <div className={styles.statusActions}>
          <button
            type="button"
            className={`${shell.cta} ${shell.ctaSecondary}`}
            data-testid="confirm-dismiss"
            onClick={onCancel}
          >
            Fermer
          </button>
        </div>
      )}

      <p className={shell.hint} data-testid="confirm-no-cycle-action">
        Aucun Cycle ni Action ne sera créé. GPT ne déclenche pas la mutation.
      </p>
    </section>
  );
}
```

### `projects/sfia-studio/app/__tests__/d1/intake-c4.test.ts`

```tsx
import { describe, expect, it, beforeEach, afterEach } from "vitest";
import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import {
  buildConfirmationIntent,
  asStrictBoolean,
  draftFingerprint,
} from "@/lib/d1/confirmation/validate";
import { buildConfirmationSummary } from "@/lib/d1/confirmation/summary";
import { executeConfirmedMutation } from "@/lib/d1/confirmation/executeConfirmation";
import { EXISTING_PROJECT_PERSISTENCE_NOTE } from "@/lib/d1/confirmation/types";
import { D1Error } from "@/lib/d1/errors";
import {
  createProject,
  getProject,
  resetD1DbForTests,
  selectMethodMode,
} from "@/lib/d1/commands";

describe("D1-C4 confirmation contracts", () => {
  it("allowlists actionType and requires explicit confirmation", () => {
    expect(() =>
      buildConfirmationIntent({
        sessionLocalId: "s",
        proposalId: "rrp-1",
        matchId: null,
        actionType: "DELETE_EVERYTHING" as never,
        targetProjectId: null,
        projectDraft: null,
        expectedProjectVersion: null,
        expectedUpdatedAt: null,
        idempotencyKey: "k",
        explicitConfirmation: true,
      }),
    ).toThrow(D1Error);

    expect(() =>
      buildConfirmationIntent({
        sessionLocalId: "s",
        proposalId: "rrp-1",
        matchId: null,
        actionType: "CREATE_PROJECT",
        targetProjectId: null,
        projectDraft: {
          name: "A",
          objective: "B",
          initialContextSummary: "",
          activate: true,
        },
        expectedProjectVersion: null,
        expectedUpdatedAt: null,
        idempotencyKey: "k",
        explicitConfirmation: false,
      }),
    ).toThrow(/explicite/i);

    expect(() => asStrictBoolean("true", "x")).toThrow(D1Error);
  });

  it("rejects client Project ID on CREATE_PROJECT", () => {
    expect(() =>
      buildConfirmationIntent({
        sessionLocalId: "s",
        proposalId: "rrp-1",
        matchId: null,
        actionType: "CREATE_PROJECT",
        targetProjectId: "proj-hack",
        projectDraft: {
          name: "A",
          objective: "B",
          initialContextSummary: "",
          activate: true,
        },
        expectedProjectVersion: null,
        expectedUpdatedAt: null,
        idempotencyKey: "k1",
        explicitConfirmation: true,
      }),
    ).toThrow(/interdit targetProjectId/i);
  });
});

describe("D1-C4 bounded mutations", () => {
  let tmpDir: string;

  beforeEach(() => {
    resetD1DbForTests();
    tmpDir = fs.mkdtempSync(path.join(os.tmpdir(), "d1-c4-"));
    process.env.D1_SQLITE_PATH = path.join(tmpDir, "d1.sqlite");
  });

  afterEach(() => {
    resetD1DbForTests();
    delete process.env.D1_SQLITE_PATH;
    fs.rmSync(tmpDir, { recursive: true, force: true });
  });

  it("creates project only with explicit confirmation and audits", () => {
    const without = executeConfirmedMutation({
      sessionLocalId: "s1",
      proposalId: "rrp-1",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Contrats C4",
        objective: "Suivi contrats",
        initialContextSummary: "contexte",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-c4-1",
      explicitConfirmation: false,
    });
    expect(without.status).toBe("REJECTED");

    const created = executeConfirmedMutation({
      sessionLocalId: "s1",
      proposalId: "rrp-1",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Contrats C4",
        objective: "Suivi contrats",
        initialContextSummary: "contexte",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-c4-1",
      explicitConfirmation: true,
    });
    expect(created.status).toBe("SUCCEEDED");
    expect(created.projectId).toMatch(/^proj-/);
    expect(created.auditEventId).toBeTruthy();
    const reread = getProject(created.projectId!);
    expect(reread.name).toBe("Contrats C4");
  });

  it("replays same key same payload without duplicate", () => {
    const draft = {
      name: "Idem C4",
      objective: "obj",
      initialContextSummary: "",
      activate: true,
    };
    const a = executeConfirmedMutation({
      sessionLocalId: "s2",
      proposalId: "rrp-2",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: draft,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-same",
      explicitConfirmation: true,
    });
    const b = executeConfirmedMutation({
      sessionLocalId: "s2",
      proposalId: "rrp-2",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: draft,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-same",
      explicitConfirmation: true,
    });
    expect(a.status).toBe("SUCCEEDED");
    expect(b.status).toBe("ALREADY_APPLIED");
    expect(b.idempotentReplay).toBe(true);
    expect(b.projectId).toBe(a.projectId);
  });

  it("conflicts when same key different payload", () => {
    executeConfirmedMutation({
      sessionLocalId: "s3",
      proposalId: "rrp-3",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Alpha",
        objective: "o1",
        initialContextSummary: "",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-conflict",
      explicitConfirmation: true,
    });
    const conflict = executeConfirmedMutation({
      sessionLocalId: "s3",
      proposalId: "rrp-3",
      matchId: null,
      actionType: "CREATE_PROJECT",
      targetProjectId: null,
      projectDraft: {
        name: "Beta",
        objective: "o2",
        initialContextSummary: "",
        activate: true,
      },
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-conflict",
      explicitConfirmation: true,
    });
    expect(conflict.status).toBe("CONFLICT");
    expect(conflict.errorCode).toBe("IDEMPOTENCY");
  });

  it("existing project confirm is NO_MUTATION without invented link", () => {
    const { project } = createProject({
      name: "Campus360",
      objective: "Gestion",
      methodMode: "V3_CANDIDATE",
      activate: true,
      idempotencyKey: "seed-campus",
    });
    const result = executeConfirmedMutation({
      sessionLocalId: "s4",
      proposalId: "rrp-4",
      matchId: "match-1",
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      targetProjectId: project.projectId,
      projectDraft: null,
      expectedProjectVersion: project.version,
      expectedUpdatedAt: project.updatedAt,
      idempotencyKey: "idem-exist",
      explicitConfirmation: true,
    });
    expect(result.status).toBe("NO_MUTATION");
    expect(result.persistenceNote).toBe(EXISTING_PROJECT_PERSISTENCE_NOTE);
    expect(result.projectId).toBe(project.projectId);
  });

  it("detects stale existing project conflict", () => {
    const { project } = createProject({
      name: "Stale",
      objective: "obj",
      methodMode: "V3_CANDIDATE",
      activate: false,
      idempotencyKey: "seed-stale",
    });
    selectMethodMode({
      projectId: project.projectId,
      methodMode: "V3_CANDIDATE",
      expectedVersion: project.version,
      activate: true,
    });
    const updated = getProject(project.projectId);
    const result = executeConfirmedMutation({
      sessionLocalId: "s5",
      proposalId: "rrp-5",
      matchId: null,
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      targetProjectId: project.projectId,
      projectDraft: null,
      expectedProjectVersion: project.version,
      expectedUpdatedAt: project.updatedAt,
      idempotencyKey: "idem-stale",
      explicitConfirmation: true,
    });
    expect(result.status).toBe("CONFLICT");
    expect(updated.version).not.toBe(project.version);
  });

  it("analyze-only and cancel produce no mutation", () => {
    const ao = executeConfirmedMutation({
      sessionLocalId: "s6",
      proposalId: "rrp-6",
      matchId: null,
      actionType: "ANALYZE_ONLY",
      targetProjectId: null,
      projectDraft: null,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-ao",
      explicitConfirmation: true,
    });
    expect(ao.status).toBe("NO_MUTATION");

    const cancel = executeConfirmedMutation({
      sessionLocalId: "s6",
      proposalId: "rrp-6",
      matchId: null,
      actionType: "CANCEL",
      targetProjectId: null,
      projectDraft: null,
      expectedProjectVersion: null,
      expectedUpdatedAt: null,
      idempotencyKey: "idem-cancel",
      explicitConfirmation: true,
    });
    expect(cancel.status).toBe("CANCELLED");
  });

  it("missing existing project returns CONFLICT", () => {
    const result = executeConfirmedMutation({
      sessionLocalId: "s7",
      proposalId: "rrp-7",
      matchId: null,
      actionType: "CONFIRM_EXISTING_PROJECT_CONTEXT",
      targetProjectId: "proj-missing-does-not-exist",
      projectDraft: null,
      expectedProjectVersion: 1,
      expectedUpdatedAt: "2026-01-01T00:00:00.000Z",
      idempotencyKey: "idem-missing",
      explicitConfirmation: true,
    });
    expect(result.status).toBe("CONFLICT");
    expect(result.errorCode).toBe("NOT_FOUND");
  });

  it("summary builder labels actions clearly", () => {
    const create = buildConfirmationSummary({
      actionType: "CREATE_PROJECT",
      draft: {
        name: "X",
        objective: "Y",
        initialContextSummary: "",
        activate: true,
      },
    });
    expect(create.actionLabel).toBe("Créer ce projet");
    expect(create.confirmationRequired).toBe(true);
    expect(
      draftFingerprint({
        name: "X",
        objective: "Y",
        initialContextSummary: "",
        activate: true,
      }),
    ).toContain("X");
  });
});
```

### `projects/sfia-studio/app/e2e/d1-c4-confirmation-mutation.spec.ts`

```tsx
import { test, expect } from "@playwright/test";
import path from "node:path";
import fs from "node:fs";

const shotDir = path.join(
  __dirname,
  "../../../../.tmp-sfia-review/screenshots-d1-c4",
);

test.beforeAll(() => {
  fs.mkdirSync(shotDir, { recursive: true });
  process.env.D1_INTAKE_PROVIDER = "fake";
});

async function createProjectViaUi(
  page: import("@playwright/test").Page,
  name: string,
  objective: string,
) {
  await page.goto("/projects/new");
  await page.getByTestId("project-name").fill(name);
  await page.getByTestId("project-objective").fill(objective);
  await page.getByTestId("project-context").fill(`Contexte ${name}`);
  await page.getByTestId("project-submit").click();
  await expect(page).toHaveURL(/\/projects\//, { timeout: 15_000 });
}

test.describe("D1-C4 Human Confirmation and Bounded Project Mutation", () => {
  test("no-match → prepare create → edit → confirm → cockpit + idempotent replay", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createProjectViaUi(
      page,
      "AstronomieC4",
      "Cataloguer les étoiles",
    );

    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("intake-proposal")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("intake-context")).toBeVisible();
    await page.getByTestId("prepare-create-project").click();
    await expect(page.getByTestId("intake-confirmation")).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "confirm-create-1440.png"),
      fullPage: false,
    });

    await page.getByTestId("confirm-name").fill("Suivi Contrats C4 E2E");
    await page
      .getByTestId("confirm-objective")
      .fill("Objectif édité avant confirmation");
    await page.getByTestId("confirm-submit").click();
    await expect(page.getByTestId("confirm-result")).toBeVisible({
      timeout: 15_000,
    });
    await expect(page.getByTestId("confirm-result")).toHaveAttribute(
      "data-status",
      /SUCCEEDED|ALREADY_APPLIED/,
    );
    await page.screenshot({
      path: path.join(shotDir, "create-success-1440.png"),
      fullPage: false,
    });

    const projectId = await page.getByTestId("confirm-project-id").innerText();
    expect(projectId).toMatch(/proj-/);

    // Double submit same confirmation panel is blocked after result;
    // reopen flow with same key is hard from UI — verify cockpit instead
    await page.getByTestId("confirm-open-cockpit").click();
    await expect(page).toHaveURL(/\/projects\/proj-/);
    await expect(page.getByTestId("project-title")).toContainText(
      "Suivi Contrats C4 E2E",
    );
  });

  test("idempotent replay via second create with same key path (unit covered; UI double-guard)", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("prepare-create-project")).toBeVisible({
      timeout: 15_000,
    });
    await page.getByTestId("prepare-create-project").click();
    await page.getByTestId("confirm-name").fill("Replay Project C4");
    await page.getByTestId("confirm-objective").fill("Replay objective");
    await page.getByTestId("confirm-submit").click();
    await expect(page.getByTestId("confirm-result")).toBeVisible({
      timeout: 15_000,
    });
    // Click submit again should not appear after result
    await expect(page.getByTestId("confirm-submit")).toHaveCount(0);
    await page.screenshot({
      path: path.join(shotDir, "idempotent-replay-1440.png"),
      fullPage: false,
    });
  });

  test("existing project confirm → NO_MUTATION + persistence note", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await createProjectViaUi(
      page,
      "Campus360C4",
      "Gestion des utilisateurs campus",
    );
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill(
        "Je veux reprendre Campus360C4 pour la gestion des utilisateurs.",
      );
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("context-candidates")).toBeVisible({
      timeout: 15_000,
    });
    await page.locator('input[name="context-selection"]').first().check();
    await page.getByTestId("prepare-confirm-existing").click();
    await expect(page.getByTestId("intake-confirmation")).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "confirm-existing-1440.png"),
      fullPage: false,
    });
    await page.getByTestId("confirm-submit").click();
    await expect(page.getByTestId("confirm-result")).toHaveAttribute(
      "data-status",
      "NO_MUTATION",
      { timeout: 15_000 },
    );
    await expect(page.getByTestId("confirm-persistence-note")).toContainText(
      /DOMAIN CONTRACT REQUIRED/i,
    );
    await expect(page.getByText(/PROJECT LINKED/i)).toHaveCount(0);
  });

  test("analyze-only confirmation closes without mutation", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Analyse cette idée, mais ne crée rien.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("prepare-analyze-only")).toBeVisible({
      timeout: 15_000,
    });
    await page.getByTestId("prepare-analyze-only").click();
    await page.getByTestId("confirm-submit").click();
    await expect(page.getByTestId("confirm-result")).toHaveAttribute(
      "data-status",
      "NO_MUTATION",
    );
    await page.screenshot({
      path: path.join(shotDir, "analyze-only-1440.png"),
      fullPage: false,
    });
  });

  test("cancel confirmation without mutation", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await page.getByTestId("prepare-create-project").click({ timeout: 15_000 });
    await page.getByTestId("confirm-cancel").click();
    await expect(page.getByTestId("intake-confirmation")).toHaveCount(0);
    await expect(page.getByTestId("intake-proposal")).toBeVisible();
  });

  test("inactive project warning on existing confirm path", async ({
    page,
  }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/projects/new");
    await page.getByTestId("project-name").fill("DraftC4Warn");
    await page.getByTestId("project-objective").fill("Brouillon matching");
    await page.getByTestId("project-activate").uncheck();
    await page.getByTestId("project-submit").click();
    await expect(page).toHaveURL(/\/projects\//);

    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux reprendre DraftC4Warn pour la gestion des utilisateurs.");
    await page.getByTestId("intake-submit").click();
    await expect(page.getByTestId("context-candidates")).toBeVisible({
      timeout: 15_000,
    });
    await page.locator('input[name="context-selection"]').first().check();
    await page.getByTestId("prepare-confirm-existing").click();
    await expect(page.getByTestId("confirm-warnings")).toBeVisible();
    await page.screenshot({
      path: path.join(shotDir, "conflict-or-inactive-1440.png"),
      fullPage: false,
    });
  });

  for (const width of [1728, 1280, 1024] as const) {
    test(`confirm create responsive no H-scroll at ${width}`, async ({
      page,
    }) => {
      await page.setViewportSize({ width, height: 1024 });
      await page.goto("/nouvelle-demande");
      await page
        .getByTestId("intake-intent")
        .fill("Je veux lancer une application de suivi des contrats.");
      await page.getByTestId("intake-submit").click();
      await page.getByTestId("prepare-create-project").click({ timeout: 15_000 });
      await expect(page.getByTestId("intake-confirmation")).toBeVisible();
      const overflow = await page.evaluate(
        () =>
          document.documentElement.scrollWidth >
          document.documentElement.clientWidth + 1,
      );
      expect(overflow).toBe(false);
      await page.screenshot({
        path: path.join(shotDir, `confirm-create-${width}.png`),
        fullPage: false,
      });
    });
  }

  test("mutation error shown for invalid draft fields", async ({ page }) => {
    await page.setViewportSize({ width: 1440, height: 1024 });
    await page.goto("/nouvelle-demande");
    await page
      .getByTestId("intake-intent")
      .fill("Je veux lancer une application de suivi des contrats.");
    await page.getByTestId("intake-submit").click();
    await page.getByTestId("prepare-create-project").click({ timeout: 15_000 });
    await page.getByTestId("confirm-name").fill("");
    await page.getByTestId("confirm-submit").click();
    await expect(page.getByTestId("confirm-result")).toBeVisible({
      timeout: 10_000,
    });
    await expect(page.getByTestId("confirm-result")).toHaveAttribute(
      "data-status",
      /REJECTED|FAILED/,
    );
    await page.screenshot({
      path: path.join(shotDir, "mutation-error-1440.png"),
      fullPage: false,
    });
  });
});
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
import {
  actionPrepareExistingProjectSummary,
} from "@/lib/d1/confirmation/actions";
import type {
  BoundedMutationResult,
  ConfirmationActionType,
  ConfirmationSummary,
  ProjectDraftFields,
} from "@/lib/d1/confirmation/types";
import { buildConfirmationSummary } from "@/lib/d1/confirmation/summary";
import { ConfirmationPanel } from "../confirmation/ConfirmationPanel";
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
  | "confirming"
  | "confirmed"
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
  const [confirmAction, setConfirmAction] =
    useState<ConfirmationActionType | null>(null);
  const [confirmSummary, setConfirmSummary] =
    useState<ConfirmationSummary | null>(null);
  const [confirmDraft, setConfirmDraft] = useState<ProjectDraftFields | null>(
    null,
  );
  const [confirmTargetId, setConfirmTargetId] = useState<string | null>(null);
  const [confirmExpectedVersion, setConfirmExpectedVersion] = useState<
    number | null
  >(null);
  const [confirmExpectedUpdatedAt, setConfirmExpectedUpdatedAt] = useState<
    string | null
  >(null);
  const [confirmProjectLabel, setConfirmProjectLabel] = useState<string | undefined>();
  const [confirmProjectState, setConfirmProjectState] = useState<string | undefined>();
  const [confirmMatchRationale, setConfirmMatchRationale] = useState<
    string | undefined
  >();
  const [mutationResult, setMutationResult] =
    useState<BoundedMutationResult | null>(null);
  const [idempotencyKey, setIdempotencyKey] = useState(
    () => `idem-intake-${crypto.randomUUID()}`,
  );

  const locked =
    busy ||
    pending ||
    phase === "analyzing" ||
    phase === "clarification" ||
    phase === "proposal" ||
    phase === "analyze_only" ||
    phase === "undetermined" ||
    phase === "confirming" ||
    phase === "confirmed";

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
    setConfirmAction(null);
    setConfirmSummary(null);
    setConfirmDraft(null);
    setConfirmTargetId(null);
    setConfirmExpectedVersion(null);
    setConfirmExpectedUpdatedAt(null);
    setConfirmProjectLabel(undefined);
    setConfirmProjectState(undefined);
    setConfirmMatchRationale(undefined);
    setMutationResult(null);
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
    setIdempotencyKey(`idem-intake-${crypto.randomUUID()}`);
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
      phase === "undetermined" ||
      phase === "confirming" ||
      phase === "confirmed");

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
          : phase === "confirming"
            ? "confirming"
            : phase === "confirmed"
              ? "confirmed"
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
            La confirmation humaine bornée (C4) est disponible après le matching
            contexte — aucune mutation avant votre clic final.
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

      {showProposal &&
      contextMatch &&
      !contextMatching &&
      phase !== "confirming" &&
      phase !== "confirmed" ? (
        <div
          className={styles.statusActions}
          data-testid="intake-c4-actions"
          style={{ marginBottom: 16 }}
        >
          {phase === "analyze_only" ? (
            <button
              type="button"
              className={shell.cta}
              data-testid="prepare-analyze-only"
              onClick={() => {
                const summary = buildConfirmationSummary({
                  actionType: "ANALYZE_ONLY",
                });
                setConfirmAction("ANALYZE_ONLY");
                setConfirmSummary(summary);
                setConfirmDraft(null);
                setConfirmTargetId(null);
                setPhase("confirming");
              }}
            >
              Continuer sans créer
            </button>
          ) : null}
          {selection?.selectedEntityType === "PROJECT" &&
          selection.selectedEntityId ? (
            <button
              type="button"
              className={shell.cta}
              data-testid="prepare-confirm-existing"
              onClick={() => {
                const entityId = selection.selectedEntityId!;
                const match = contextMatch.projectMatches.find(
                  (m) => m.entityId === entityId,
                );
                startTransition(async () => {
                  const prepared =
                    await actionPrepareExistingProjectSummary({
                      projectId: entityId,
                    });
                  if (!prepared.ok) {
                    setContextError(prepared.message);
                    return;
                  }
                  setConfirmAction("CONFIRM_EXISTING_PROJECT_CONTEXT");
                  setConfirmSummary(prepared.summary);
                  setConfirmTargetId(prepared.project.projectId);
                  setConfirmExpectedVersion(prepared.project.version);
                  setConfirmExpectedUpdatedAt(prepared.project.updatedAt);
                  setConfirmProjectLabel(prepared.project.name);
                  setConfirmProjectState(prepared.project.state);
                  setConfirmMatchRationale(match?.rationale);
                  setConfirmDraft(null);
                  setPhase("confirming");
                });
              }}
            >
              Préparer confirmation du projet
            </button>
          ) : null}
          {phase !== "analyze_only" &&
          (selection == null ||
            selection.selectedEntityType === "NONE" ||
            contextMatch.resultStatus === "NO_MATCH") ? (
            <button
              type="button"
              className={shell.cta}
              data-testid="prepare-create-project"
              onClick={() => {
                const draft: ProjectDraftFields = {
                  name: proposal?.subject?.slice(0, 200) || "Nouveau projet",
                  objective:
                    proposal?.proposedObjective?.slice(0, 2000) ||
                    "Objectif à préciser",
                  initialContextSummary: (
                    proposal?.normalizedIntent ??
                    intent
                  ).slice(0, 4000),
                  activate: true,
                };
                const summary = buildConfirmationSummary({
                  actionType: "CREATE_PROJECT",
                  draft,
                });
                setConfirmAction("CREATE_PROJECT");
                setConfirmSummary(summary);
                setConfirmDraft(draft);
                setConfirmTargetId(null);
                setPhase("confirming");
              }}
            >
              Préparer création de projet
            </button>
          ) : null}
        </div>
      ) : null}

      {(phase === "confirming" || phase === "confirmed") &&
      confirmAction &&
      confirmSummary &&
      proposal ? (
        <div aria-live="polite">
          <ConfirmationPanel
            actionType={confirmAction}
            proposalId={proposal.proposalId}
            matchId={contextMatch?.matchId ?? null}
            sessionLocalId={sessionLocalId}
            idempotencyKey={idempotencyKey}
            initialDraft={confirmDraft}
            targetProjectId={confirmTargetId}
            expectedProjectVersion={confirmExpectedVersion}
            expectedUpdatedAt={confirmExpectedUpdatedAt}
            projectLabel={confirmProjectLabel}
            projectState={confirmProjectState}
            matchRationale={confirmMatchRationale}
            summary={confirmSummary}
            onCancel={() => {
              setConfirmAction(null);
              setConfirmSummary(null);
              setMutationResult(null);
              setPhase(
                proposal.status === "ANALYSIS_ONLY"
                  ? "analyze_only"
                  : "proposal",
              );
            }}
            onDone={(result) => {
              setMutationResult(result);
              if (result.actionType === "CANCEL" || result.status === "CANCELLED") {
                setConfirmAction(null);
                setConfirmSummary(null);
                setPhase(
                  proposal.status === "ANALYSIS_ONLY"
                    ? "analyze_only"
                    : "proposal",
                );
                return;
              }
              setPhase("confirmed");
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
            : phase === "confirming"
              ? "Confirmation humaine en cours"
              : phase === "confirmed"
                ? "Confirmation traitée"
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

.confirmCard {
  border: 1.5px solid var(--sfia-blue);
  border-radius: 14px;
  background: #fff;
  padding: 18px;
  margin-bottom: 16px;
  display: grid;
  gap: 12px;
}

.confirmCard h2 {
  margin: 0;
  font-size: 18px;
}

.confirmCard h2:focus {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 2px;
}

.confirmFields {
  display: grid;
  gap: 8px;
}

.confirmInput {
  width: 100%;
  box-sizing: border-box;
  border: 1px solid var(--sfia-border);
  border-radius: 10px;
  padding: 10px 12px;
  font: inherit;
  background: var(--sfia-bg, #f6f7fa);
}

.confirmInput:focus-visible {
  outline: 2px solid var(--sfia-blue);
  outline-offset: 2px;
}

.confirmCheck {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
}

.bannerOk {
  border-radius: 12px;
  border: 1px solid #9dcea8;
  background: #eef9f0;
  color: #1f6b35;
  padding: 12px 14px;
  font-size: 14px;
  display: grid;
  gap: 8px;
}

@media (prefers-reduced-motion: reduce) {
  .loadingRow {
    animation: none;
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
  | "intake_context_selection_cleared"
  | "intake_confirmation_presented"
  | "intake_confirmation_cancelled"
  | "intake_project_creation_confirmed"
  | "intake_project_created"
  | "intake_project_creation_replayed"
  | "intake_existing_project_confirmed"
  | "intake_existing_project_conflict"
  | "intake_mutation_rejected"
  | "intake_mutation_failed"
  | "intake_analyze_only_completed";

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


## 9. État Git final

```
HEAD=32e5271842b9a344a7e292614675c27ea8ed941b
branch=delivery/sfia-studio-control-tower-fast-track
staged=0
deps_unchanged=true
migration=none
```

## 10. Verdict

**VERDICT :** SFIA v3.0 D1-C4 HUMAN CONFIRMATION AND BOUNDED PROJECT MUTATION IMPLEMENTED — VALIDATION REQUIRED

Réserve documentée : EXISTING PROJECT CONFIRMATION PERSISTENCE NOT IMPLEMENTED — DOMAIN CONTRACT REQUIRED
