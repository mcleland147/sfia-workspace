/**
 * Explicit server entrypoint for D2-D1 execution-run concrete composition.
 * Client surfaces must not import this module.
 */
export {
  composeExecutionRunMemory,
  type ExecutionRunServerComposition,
} from "./composeExecutionRunMemory";
export { assertServerOnly } from "./serverOnly";
