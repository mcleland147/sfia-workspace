import { describe, expect, it } from "vitest";
import {
  StudioError,
  isDependencyFailure,
  studioErrorResponse,
  toStudioError,
} from "@/lib/http-errors";

describe("http error classification", () => {
  it("maps SESSION_INVALID to 401 and DEPENDENCY to 503", () => {
    expect(studioErrorResponse(new StudioError("SESSION_INVALID", "x")).status).toBe(401);
    expect(
      studioErrorResponse(new StudioError("DEPENDENCY_UNAVAILABLE", "db", { httpStatus: 503 }))
        .status,
    ).toBe(503);
    expect(studioErrorResponse(new StudioError("CONFLICT", "c")).status).toBe(409);
  });

  it("detects connection failures as dependency, not session", () => {
    expect(isDependencyFailure(new Error("connect ECONNREFUSED 127.0.0.1:5433"))).toBe(true);
    expect(isDependencyFailure(new Error("SESSION_INVALID"))).toBe(false);
    const mapped = toStudioError(Object.assign(new Error("postgres connection terminated"), { code: "57P01" }));
    expect(mapped.code).toBe("DEPENDENCY_UNAVAILABLE");
    expect(mapped.httpStatus).toBe(503);
  });

  it("never exposes internal message for INTERNAL", () => {
    const body = studioErrorResponse(new Error("secret stack pg://user:pass@host/db")).body;
    expect(body.error).toBe("INTERNAL");
    expect(body.message).toBeUndefined();
  });
});
