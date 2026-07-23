/** Platform technical errors — domain-agnostic. */
export type TechnicalErrorCode =
  | "CONFIG"
  | "PROVIDER"
  | "TIMEOUT"
  | "VALIDATION"
  | "INTERNAL";

export class TechnicalError extends Error {
  readonly code: TechnicalErrorCode;
  readonly safeMessage: string;

  constructor(code: TechnicalErrorCode, safeMessage: string, cause?: unknown) {
    super(safeMessage);
    this.name = "TechnicalError";
    this.code = code;
    this.safeMessage = safeMessage;
    if (cause !== undefined) {
      (this as Error & { cause?: unknown }).cause = cause;
    }
  }
}
