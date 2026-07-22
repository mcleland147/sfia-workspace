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
