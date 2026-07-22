import { D1ProjectRepository } from "./repository";
import { openD1Db, nowIso, resetD1DbForTests } from "./db";
import { createAuditEventId, createCorrelationId, createProjectId } from "./ids";
import { validateCreateProjectInput, assertMethodMode } from "./domain";
import { requireMonoOperator } from "./authz";
import { D1Error } from "./errors";
import {
  D1_DEFAULT_WORKSPACE_ID,
  D1_MONO_OPERATOR_ACTOR_ID,
  type CreateProjectInput,
  type D1Project,
  type SelectMethodModeInput,
} from "./types";
import { logD1 } from "./observability";

export { resetD1DbForTests };

export interface CreateProjectResult {
  project: D1Project;
  idempotent: boolean;
}

export function createProject(
  input: CreateProjectInput,
  repo = new D1ProjectRepository(openD1Db()),
): CreateProjectResult {
  const started = Date.now();
  try {
    validateCreateProjectInput(input);
    const actorId = requireMonoOperator();

    const cached = repo.getIdempotentResponse(input.idempotencyKey.trim());
    if (cached) {
      const parsed = JSON.parse(cached) as { project: D1Project };
      logD1("project_create", {
        status: "idempotent",
        projectId: parsed.project.projectId,
        durationMs: Date.now() - started,
      });
      return { project: parsed.project, idempotent: true };
    }

    const correlationId = input.correlationId?.trim() || createCorrelationId();
    const ts = nowIso();
    const projectId = createProjectId();
    const state = input.activate ? "ACTIVE" : "DRAFT";
    const project: D1Project = {
      projectId,
      workspaceId: D1_DEFAULT_WORKSPACE_ID,
      name: input.name.trim(),
      objective: input.objective.trim(),
      initialContextSummary: input.initialContextSummary?.trim() || null,
      methodMode: input.methodMode,
      state,
      ownerActorId: actorId,
      createdAt: ts,
      updatedAt: ts,
      version: 1,
    };

    const events: Array<{
      eventId: string;
      eventType: "PROJECT_CREATED" | "PROJECT_MODE_SELECTED" | "PROJECT_ACTIVATED";
      actorId: string;
      correlationId: string;
      payload: Record<string, unknown>;
    }> = [
      {
        eventId: createAuditEventId(),
        eventType: "PROJECT_CREATED",
        actorId,
        correlationId,
        payload: {
          name: project.name,
          methodMode: project.methodMode,
          state: project.state,
          monoOperator: true,
        },
      },
      {
        eventId: createAuditEventId(),
        eventType: "PROJECT_MODE_SELECTED",
        actorId,
        correlationId,
        payload: { methodMode: project.methodMode },
      },
    ];
    if (state === "ACTIVE") {
      events.push({
        eventId: createAuditEventId(),
        eventType: "PROJECT_ACTIVATED",
        actorId,
        correlationId,
        payload: { from: "DRAFT", to: "ACTIVE" },
      });
    }

    const responseJson = JSON.stringify({ project });
    const outcome = repo.createProjectAtomic({
      project,
      assignments: [
        {
          principalId: actorId,
          projectId,
          role: "project_owner",
          createdAt: ts,
        },
        {
          principalId: actorId,
          projectId,
          role: "decision_maker",
          createdAt: ts,
        },
      ],
      events,
      idempotencyKey: input.idempotencyKey.trim(),
      responseJson,
    });

    if (outcome.kind === "idempotent") {
      const parsed = JSON.parse(outcome.responseJson) as { project: D1Project };
      logD1("project_create", {
        status: "idempotent",
        projectId: parsed.project.projectId,
        durationMs: Date.now() - started,
      });
      return { project: parsed.project, idempotent: true };
    }

    logD1("project_create", {
      status: "ok",
      projectId,
      durationMs: Date.now() - started,
    });
    return { project, idempotent: false };
  } catch (error) {
    logD1("project_create", {
      status: "failed",
      durationMs: Date.now() - started,
      errorCode: error instanceof D1Error ? error.code : "UNKNOWN",
    });
    throw error;
  }
}

export function selectMethodMode(
  input: SelectMethodModeInput,
  repo = new D1ProjectRepository(openD1Db()),
): D1Project {
  const started = Date.now();
  try {
    const actorId = requireMonoOperator();
    assertMethodMode(input.methodMode);
    const current = repo.getProject(input.projectId);
    if (!current) {
      throw new D1Error("NOT_FOUND", "Projet introuvable.");
    }
    if (current.ownerActorId !== actorId) {
      throw new D1Error("UNAUTHORIZED", "Acteur non propriétaire.");
    }

    const activate = input.activate !== false;
    const nextState =
      activate && input.methodMode ? "ACTIVE" : current.state === "ACTIVE" ? "ACTIVE" : "DRAFT";

    const updated = repo.selectMethodModeAtomic({
      projectId: input.projectId,
      methodMode: input.methodMode,
      expectedVersion: input.expectedVersion,
      nextState,
      actorId,
      correlationId: input.correlationId?.trim() || createCorrelationId(),
      eventIds: {
        mode: createAuditEventId(),
        activated:
          nextState === "ACTIVE" && current.state !== "ACTIVE"
            ? createAuditEventId()
            : undefined,
      },
    });

    logD1("method_mode_selected", {
      status: "ok",
      projectId: updated.projectId,
      durationMs: Date.now() - started,
    });
    return updated;
  } catch (error) {
    logD1("method_mode_selected", {
      status: "failed",
      durationMs: Date.now() - started,
      errorCode: error instanceof D1Error ? error.code : "UNKNOWN",
    });
    throw error;
  }
}

export function listWorkspaceProjects(
  workspaceId = D1_DEFAULT_WORKSPACE_ID,
  repo = new D1ProjectRepository(openD1Db()),
): D1Project[] {
  requireMonoOperator();
  return repo.listProjects(workspaceId);
}

export function getProject(
  projectId: string,
  repo = new D1ProjectRepository(openD1Db()),
): D1Project {
  requireMonoOperator();
  const project = repo.getProject(projectId);
  if (!project) {
    throw new D1Error("NOT_FOUND", "Projet introuvable.");
  }
  return project;
}

export function listProjectAudit(
  projectId: string,
  repo = new D1ProjectRepository(openD1Db()),
) {
  requireMonoOperator();
  return repo.listAuditEvents(projectId);
}

export { D1_MONO_OPERATOR_ACTOR_ID };
