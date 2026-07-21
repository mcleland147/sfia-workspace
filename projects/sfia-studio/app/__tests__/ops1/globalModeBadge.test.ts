import { describe, expect, it } from "vitest";
import {
  mapGlobalModeBadge,
  mapGlobalModeBadgeLabel,
  resolveGlobalModePresentation,
} from "@/lib/ops1/globalModeBadge";

describe("globalModeBadge mapping", () => {
  it("maps fixture presentation", () => {
    expect(mapGlobalModeBadgeLabel("fixture")).toBe("MODE FIXTURE / NON LIVE");
    expect(
      mapGlobalModeBadge({
        hasSession: true,
        createMode: "live",
        presentation: "fixture",
        testProvider: false,
        liveAvailable: true,
      }).label,
    ).toBe("MODE FIXTURE / NON LIVE");
  });

  it("maps test provider presentation", () => {
    expect(mapGlobalModeBadgeLabel("test_provider")).toBe(
      "TEST PROVIDER / NON LIVE",
    );
    expect(
      mapGlobalModeBadge({
        hasSession: true,
        createMode: "live",
        presentation: "test_provider",
        testProvider: true,
        liveAvailable: true,
      }).label,
    ).toBe("TEST PROVIDER / NON LIVE");
  });

  it("maps openai live presentation", () => {
    expect(mapGlobalModeBadgeLabel("openai_live")).toBe("MODE GPT LIVE");
    expect(
      mapGlobalModeBadge({
        hasSession: true,
        createMode: "live",
        presentation: "openai_live",
        testProvider: false,
        liveAvailable: true,
      }).tone,
    ).toBe("green");
  });

  it("empty screen uses createMode fixture", () => {
    expect(
      resolveGlobalModePresentation({
        hasSession: false,
        createMode: "fixture",
        presentation: "openai_live",
        testProvider: false,
        liveAvailable: true,
      }),
    ).toBe("fixture");
  });

  it("empty screen live + real availability → openai_live", () => {
    expect(
      resolveGlobalModePresentation({
        hasSession: false,
        createMode: "live",
        presentation: "fixture",
        testProvider: false,
        liveAvailable: true,
      }),
    ).toBe("openai_live");
  });

  it("empty screen live + test provider → test_provider", () => {
    expect(
      resolveGlobalModePresentation({
        hasSession: false,
        createMode: "live",
        presentation: "fixture",
        testProvider: true,
        liveAvailable: true,
      }),
    ).toBe("test_provider");
  });
});
