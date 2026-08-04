export type ExecutionRunSchemaValidationSuccess = { ok: true };
export type ExecutionRunSchemaValidationFailure = {
  ok: false;
  errors: string[];
};
export type ExecutionRunSchemaValidationResult =
  | ExecutionRunSchemaValidationSuccess
  | ExecutionRunSchemaValidationFailure;

export type ExecutionRunSchemaName =
  | "execution-intent"
  | "execution-context"
  | "provider-capability-descriptor"
  | "validation-outcome"
  | "execution-run"
  | "external-result"
  | "execution-evidence"
  | "source-disclosure"
  | "human-decision-gate"
  | "usage-summary"
  | "normalized-failure"
  | "create-execution-run-input"
  | "transition-execution-run-input";

export interface ExecutionRunSchemaValidationPort {
  /**
   * Fail-closed validation before any metadata exploitation.
   * Must not throw raw AJV exceptions to callers.
   */
  validate(
    schema: ExecutionRunSchemaName,
    value: unknown,
  ): Promise<ExecutionRunSchemaValidationResult>;
}
