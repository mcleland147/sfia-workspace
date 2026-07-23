import { TechnicalError } from "@/lib/platform/ai/errors";

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
  if (error instanceof TechnicalError) {
    const code =
      error.code === "CONFIG" || error.code === "PROVIDER"
        ? error.code
        : "INTERNAL";
    return { code, message: error.safeMessage };
  }
  return {
    code: "INTERNAL",
    message: "Une erreur technique est survenue. Réessayez ou contactez Morris.",
  };
}

/** Map platform TechnicalError into OPS1 error when crossing domain boundary. */
export function fromTechnicalError(error: unknown): Ops1Error | null {
  if (error instanceof TechnicalError) {
    const code: Ops1ErrorCode =
      error.code === "CONFIG" || error.code === "PROVIDER"
        ? error.code
        : error.code === "VALIDATION"
          ? "VALIDATION"
          : "INTERNAL";
    return new Ops1Error(code, error.safeMessage, error);
  }
  return null;
}

