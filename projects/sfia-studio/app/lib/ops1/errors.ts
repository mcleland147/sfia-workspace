export type Ops1ErrorCode =
  | "VALIDATION"
  | "NOT_FOUND"
  | "PERSISTENCE"
  | "CONFLICT"
  | "CONFIG"
  | "PROVIDER"
  | "INTERNAL";

export class Ops1Error extends Error {
  readonly code: Ops1ErrorCode;
  readonly safeMessage: string;

  constructor(code: Ops1ErrorCode, safeMessage: string, cause?: unknown) {
    super(safeMessage);
    this.name = "Ops1Error";
    this.code = code;
    this.safeMessage = safeMessage;
    if (cause !== undefined) {
      (this as Error & { cause?: unknown }).cause = cause;
    }
  }
}

export function toSafeClientError(error: unknown): {
  code: Ops1ErrorCode;
  message: string;
} {
  if (error instanceof Ops1Error) {
    return { code: error.code, message: error.safeMessage };
  }
  return {
    code: "INTERNAL",
    message: "Une erreur technique est survenue. Réessayez ou contactez Morris.",
  };
}
