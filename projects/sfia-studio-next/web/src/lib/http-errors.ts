/**
 * HTTP / domain error classification for Studio Next APIs.
 * Never map dependency failures to SESSION_INVALID.
 */

export type StudioErrorCode =
  | "SESSION_INVALID"
  | "AUTH_UNAUTHENTICATED"
  | "ACCESS_DENIED"
  | "NOT_FOUND"
  | "INVALID_REQUEST"
  | "CONFLICT"
  | "DEPENDENCY_UNAVAILABLE"
  | "INTERNAL"
  | "TURN_IN_PROGRESS"
  | "PAYLOAD_MISMATCH"
  | "NOT_CONFIGURED"
  | "REQUIRES_REQUALIFICATION"
  | "AMBIGUOUS";

export class StudioError extends Error {
  readonly code: StudioErrorCode;
  readonly httpStatus: number;
  readonly exposeMessage: boolean;

  constructor(
    code: StudioErrorCode,
    message: string,
    opts?: { httpStatus?: number; exposeMessage?: boolean; cause?: unknown },
  ) {
    super(message, opts?.cause !== undefined ? { cause: opts.cause } : undefined);
    this.name = "StudioError";
    this.code = code;
    this.httpStatus = opts?.httpStatus ?? defaultStatus(code);
    this.exposeMessage = opts?.exposeMessage ?? code !== "INTERNAL";
  }
}

function defaultStatus(code: StudioErrorCode): number {
  switch (code) {
    case "SESSION_INVALID":
    case "AUTH_UNAUTHENTICATED":
      return 401;
    case "ACCESS_DENIED":
      return 403;
    case "NOT_FOUND":
      return 404;
    case "INVALID_REQUEST":
      return 400;
    case "CONFLICT":
    case "TURN_IN_PROGRESS":
    case "PAYLOAD_MISMATCH":
      return 409;
    case "DEPENDENCY_UNAVAILABLE":
      return 503;
    case "NOT_CONFIGURED":
      return 503;
    case "REQUIRES_REQUALIFICATION":
      return 409;
    case "AMBIGUOUS":
      return 409;
    default:
      return 500;
  }
}

export function isStudioError(e: unknown): e is StudioError {
  return e instanceof StudioError;
}

/** Detect likely DB / driver dependency failures without leaking internals. */
export function isDependencyFailure(e: unknown): boolean {
  if (!e || typeof e !== "object") return false;
  const msg = e instanceof Error ? e.message : String(e);
  const code = "code" in e ? String((e as { code: unknown }).code) : "";
  if (/ECONNREFUSED|ETIMEDOUT|ENOTFOUND|ECONNRESET|connection.*(refused|terminated|closed)/i.test(msg)) {
    return true;
  }
  if (/^(57P|08|53|53300|53400)/.test(code)) return true; // Postgres class
  if (/postgres|drizzle|neon|pg\b/i.test(msg) && /fail|error|unavailable|timeout/i.test(msg)) {
    return true;
  }
  return false;
}

export function toStudioError(e: unknown): StudioError {
  if (isStudioError(e)) return e;
  if (e && typeof e === "object" && "code" in e) {
    const code = String((e as { code: unknown }).code);
    if (code === "SESSION_INVALID") {
      return new StudioError("SESSION_INVALID", "Session invalide");
    }
    if (code === "NOT_FOUND") {
      return new StudioError("NOT_FOUND", "Ressource introuvable", { httpStatus: 404 });
    }
    if (code === "FORBIDDEN" || code === "ACCESS_DENIED") {
      return new StudioError("ACCESS_DENIED", "Accès refusé", { httpStatus: 403 });
    }
    if (code === "CONFLICT" || code === "PAYLOAD_MISMATCH" || code === "TURN_IN_PROGRESS") {
      return new StudioError(
        code === "TURN_IN_PROGRESS" ? "TURN_IN_PROGRESS" : "CONFLICT",
        e instanceof Error ? e.message : "Conflit",
        { httpStatus: 409 },
      );
    }
  }
  if (isDependencyFailure(e)) {
    return new StudioError("DEPENDENCY_UNAVAILABLE", "Dépendance indisponible", {
      httpStatus: 503,
      exposeMessage: false,
      cause: e,
    });
  }
  return new StudioError("INTERNAL", "Erreur interne", {
    httpStatus: 500,
    exposeMessage: false,
    cause: e,
  });
}

export function studioErrorResponse(e: unknown): {
  status: number;
  body: { error: string; errorCategory: string; message?: string };
} {
  const err = toStudioError(e);
  return {
    status: err.httpStatus,
    body: {
      error: err.code,
      errorCategory: err.code,
      ...(err.exposeMessage ? { message: err.message } : {}),
    },
  };
}
