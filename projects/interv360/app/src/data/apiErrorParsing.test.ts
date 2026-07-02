import { describe, expect, it } from "vitest";
import { getApiErrorDetails, readApiErrorFromResponse } from "./apiErrorParsing";

describe("apiErrorParsing", () => {
  it("uses API error message and code when present", () => {
    expect(
      getApiErrorDetails(
        {
          error: {
            code: "ROUTE_NOT_FOUND",
            message: "API route not found.",
          },
        },
        "Request failed",
        "UNKNOWN_ERROR",
      ),
    ).toEqual({
      code: "ROUTE_NOT_FOUND",
      message: "API route not found.",
    });
  });

  it("falls back to code when message is absent", () => {
    expect(
      getApiErrorDetails(
        {
          error: {
            code: "INVALID_TRANSITION_ACTION",
          },
        },
        "Request failed",
        "UNKNOWN_ERROR",
      ),
    ).toEqual({
      code: "INVALID_TRANSITION_ACTION",
      message: "INVALID_TRANSITION_ACTION",
    });
  });

  it("falls back to defaults when payload is unexpected", () => {
    expect(getApiErrorDetails({}, "Request failed", "UNKNOWN_ERROR")).toEqual({
      code: "UNKNOWN_ERROR",
      message: "Request failed",
    });
  });

  it("readApiErrorFromResponse maps structured API errors", async () => {
    const error = await readApiErrorFromResponse(
      {
        json: async () => ({
          error: {
            code: "INVALID_ACTOR_USER",
            message: "Actor user is invalid or inactive.",
          },
        }),
      } as unknown as Response,
      "Request failed",
      "UNKNOWN_ERROR",
    );

    expect(error).toMatchObject({
      code: "INVALID_ACTOR_USER",
      message: "Actor user is invalid or inactive.",
    });
  });

  it("readApiErrorFromResponse falls back when error body is not JSON", async () => {
    const error = await readApiErrorFromResponse(
      {
        json: async () => {
          throw new SyntaxError("Unexpected token");
        },
      } as unknown as Response,
      "Unable to load users: 503",
      "USERS_UNAVAILABLE",
    );

    expect(error).toMatchObject({
      code: "USERS_UNAVAILABLE",
      message: "Unable to load users: 503",
    });
  });
});
