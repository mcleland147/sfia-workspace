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
