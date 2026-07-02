import { describe, expect, it } from "vitest";
import { getApiErrorDetails } from "./apiErrorParsing";

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
});
