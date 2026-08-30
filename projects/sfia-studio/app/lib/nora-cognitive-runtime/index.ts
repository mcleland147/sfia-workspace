/**
 * Nora Option C cognitive runtime — public surface.
 * OD-04: Runner + Product SQLite Session + callModelInputFilter + routeToolCall.
 * Single Agents path (Fake + target). No Nora runtime selector.
 */

export type {
  NoraCognitiveRuntimeKind,
  NoraCognitiveTurnResult,
} from "./types";
export { ProductSqliteSession, userTextItem, assistantTextItem } from "./productSqliteSession";
export type { ProductSqliteSessionOptions } from "./productSqliteSession";
export { resolveNoraSessionSqlitePath } from "./sessionPaths";
export {
  sfiaBoundaryInstructions,
  createSfiaRouteToolAdapters,
  invokeSfiaToolViaRoute,
  assertRawJsonObjectSchema,
  sdkToolParametersOf,
} from "./sfiaAgentsTools";
export type { SfiaJsonObjectSchema, SfiaAgentsToolOptions } from "./sfiaAgentsTools";
export {
  createSfiaCallModelInputFilter,
  preserveStructuralRoles,
} from "./callModelInputFilter";
export {
  createNoraTurnBudget,
  claimToolSlot,
  markModelTurn,
  toolRoundsFromBudget,
  TOOL_TURN_BUDGET_EXCEEDED_RESULT,
} from "./turnBudget";
export type { NoraTurnBudget } from "./turnBudget";
export {
  createProviderAgentsModel,
  isFakeConversationProvider,
  agentInputToProviderItems,
  toolDefinitionsFromModelRequest,
} from "./providerAgentsModel";
export {
  createNoraAgentsRunner,
  runNoraAgentsTurn,
} from "./runNoraAgentsTurn";
export type { RunNoraAgentsTurnInput } from "./runNoraAgentsTurn";
export { runNoraCognitiveTurn } from "./runNoraCognitiveTurn";
export type { RunNoraCognitiveTurnInput } from "./runNoraCognitiveTurn";
