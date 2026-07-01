import type { CorsOptions } from "cors";

export const DEFAULT_LOCAL_CORS_ORIGINS = [
  "http://localhost:5173",
  "http://localhost:5174",
  "http://localhost:5175",
  "http://127.0.0.1:5173",
  "http://127.0.0.1:5174",
  "http://127.0.0.1:5175",
] as const;

function parseOriginList(value: string): string[] {
  return value
    .split(",")
    .map((part) => part.trim())
    .filter((part) => part.length > 0);
}

export function resolveCorsOrigins(): string[] {
  const configuredList = process.env.INTERV360_CORS_ORIGINS;
  if (configuredList) {
    return parseOriginList(configuredList);
  }

  const legacySingle = process.env.CORS_ORIGIN;
  if (legacySingle) {
    return [legacySingle.trim()];
  }

  return [...DEFAULT_LOCAL_CORS_ORIGINS];
}

export function createLocalCorsOptions(): CorsOptions {
  const allowedOrigins = resolveCorsOrigins();

  return {
    origin(origin, callback) {
      if (!origin || allowedOrigins.includes(origin)) {
        callback(null, true);
        return;
      }

      callback(null, false);
    },
  };
}
