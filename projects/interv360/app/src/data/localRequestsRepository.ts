import type {
  ApplyTransitionOptions,
  DemoTransitionAction,
  RequestsRepository,
} from "./requestsRepository.types";
import {
  cancelDemoRequest,
  closeDemoRequest,
  completeDemoIntervention,
  getDemoWorkflowEvents,
  getRequestById,
  getRequests,
  planDemoIntervention,
  putDemoRequestOnHold,
  qualifyDemoRequest,
  requalifyDemoRequest,
  resetDemoData,
  resumeDemoRequest,
  type TransitionAuditContext,
} from "./requestsRepository";

function toAuditContext(
  action: DemoTransitionAction,
  options?: ApplyTransitionOptions,
): TransitionAuditContext {
  return {
    action,
    actorUserId: options?.actorUserId,
    actorDisplayName: options?.actorDisplayName,
    actorRole: options?.actorRole,
  };
}

function applyLocalTransition(
  id: string,
  action: DemoTransitionAction,
  options?: ApplyTransitionOptions,
) {
  const audit = toAuditContext(action, options);

  switch (action) {
    case "qualify":
      return qualifyDemoRequest(id, audit);
    case "plan":
      return planDemoIntervention(id, audit);
    case "complete_intervention":
      return completeDemoIntervention(id, audit);
    case "close_report":
      return closeDemoRequest(id, audit);
    case "put_on_hold":
      return putDemoRequestOnHold(id, audit);
    case "resume":
      return resumeDemoRequest(id, audit);
    case "cancel":
      return cancelDemoRequest(id, audit);
    case "requalify":
      return requalifyDemoRequest(id, audit);
    default:
      return undefined;
  }
}

export const localRequestsRepository: RequestsRepository = {
  listRequests: async () => getRequests(),
  getRequestById: async (id) => getRequestById(id),
  listEventsForRequest: async (id) => getDemoWorkflowEvents(id),
  applyTransition: async (id, action, options) =>
    applyLocalTransition(id, action, options),
  resetDemo: async () => {
    resetDemoData();
  },
};
