import { StudioError } from "@/lib/http-errors";

export const PREPARATIONS_PAGE_SIZE = 25;

export type CursorPayload = { createdAt: string; id: string };

export function encodePreparationsCursor(row: { createdAt: Date; id: string }): string {
  const payload: CursorPayload = {
    createdAt: row.createdAt.toISOString(),
    id: row.id,
  };
  return Buffer.from(JSON.stringify(payload), "utf8").toString("base64url");
}

export function decodePreparationsCursor(raw: string): CursorPayload {
  try {
    const json = Buffer.from(raw, "base64url").toString("utf8");
    const parsed = JSON.parse(json) as CursorPayload;
    if (
      typeof parsed?.createdAt !== "string" ||
      typeof parsed?.id !== "string" ||
      Number.isNaN(Date.parse(parsed.createdAt)) ||
      !parsed.id
    ) {
      throw new Error("bad cursor shape");
    }
    return parsed;
  } catch {
    throw new StudioError("INVALID_REQUEST", "INVALID_CURSOR", { httpStatus: 400 });
  }
}
