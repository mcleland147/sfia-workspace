import { describe, expect, it } from "vitest";
import {
  dispatchButtonLabel,
  effectProviderLabel,
  mergeDispatchButtonLabel,
  publicationStatusBanner,
} from "@/components/integrations/publication-effect-labels";

describe("publication effect labels (R7)", () => {
  it("maps provider modes without inventing REAL from absence", () => {
    expect(effectProviderLabel("REAL")).toBe("REAL");
    expect(effectProviderLabel("SCRIPTED")).toBe("SCRIPTED");
    expect(effectProviderLabel(undefined)).toBe("UNKNOWN");
    expect(effectProviderLabel("CONNECTED")).toBe("UNKNOWN");
  });

  it("COMPLETED banner reflects REAL effect provider", () => {
    expect(
      publicationStatusBanner({ status: "COMPLETED", effectProviderMode: "REAL" }),
    ).toContain("(REAL)");
    expect(
      publicationStatusBanner({ status: "COMPLETED", effectProviderMode: "REAL" }),
    ).not.toContain("SCRIPTED");
  });

  it("COMPLETED banner reflects SCRIPTED when fixture provider", () => {
    expect(
      publicationStatusBanner({ status: "COMPLETED", effectProviderMode: "SCRIPTED" }),
    ).toContain("(SCRIPTED)");
  });

  it("does not upgrade AMBIGUOUS or UNKNOWN to success", () => {
    expect(
      publicationStatusBanner({ status: "AMBIGUOUS", effectProviderMode: "REAL" }),
    ).toContain("AMBIGUOUS");
    expect(
      publicationStatusBanner({ status: "COMPLETED", effectProviderMode: undefined }),
    ).toContain("non établi");
  });

  it("dispatch labels follow effect provider", () => {
    expect(dispatchButtonLabel("REAL")).toContain("REAL");
    expect(dispatchButtonLabel("SCRIPTED")).toContain("SCRIPTED");
    expect(mergeDispatchButtonLabel("REAL")).toContain("REAL");
  });
});
