import type { DemoTransitionAction, RequestsRepository } from "./requestsRepository.types";
import {
  closeDemoRequest,
  completeDemoIntervention,
  getDemoWorkflowEvents,
  getRequestById,
  getRequests,
  planDemoIntervention,
  qualifyDemoRequest,
  resetDemoData,
} from "./requestsRepository";

function applyLocalTransition(
  id: string,
  action: DemoTransitionAction,
) {
  switch (action) {
    case "qualify":
      return qualifyDemoRequest(id);
    case "plan":
      return planDemoIntervention(id);
    case "complete_intervention":
      return completeDemoIntervention(id);
    case "close_report":
      return closeDemoRequest(id);
    default:
      return undefined;
  }
}

export const localRequestsRepository: RequestsRepository = {
  listRequests: async () => getRequests(),
  getRequestById: async (id) => getRequestById(id),
  listEventsForRequest: async (id) => getDemoWorkflowEvents(id),
  applyTransition: async (id, action) => applyLocalTransition(id, action),
  resetDemo: async () => {
    resetDemoData();
  },
};
