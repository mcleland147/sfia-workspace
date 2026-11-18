import { describe, expect, it } from "vitest";
import {
  resolveUnifiedEntryVariant,
  UNIFIED_ENTRY_COPY,
} from "@/components/entry/unified-entry-variant";

describe("resolveUnifiedEntryVariant", () => {
  it("defaults to nominal when reason is absent", () => {
    expect(resolveUnifiedEntryVariant(null)).toBe("nominal");
    expect(resolveUnifiedEntryVariant(undefined)).toBe("nominal");
    expect(resolveUnifiedEntryVariant("")).toBe("nominal");
  });

  it("activates session_expired only on explicit reason", () => {
    expect(resolveUnifiedEntryVariant("session_expired")).toBe("session_expired");
    expect(resolveUnifiedEntryVariant("expired")).toBe("nominal");
    expect(resolveUnifiedEntryVariant("SESSION_EXPIRED")).toBe("nominal");
  });

  it("keeps distinct copy for expired vs nominal", () => {
    expect(UNIFIED_ENTRY_COPY.nominal.ctaLabel).toBe("Continuer avec GitHub");
    expect(UNIFIED_ENTRY_COPY.session_expired.ctaLabel).toBe(
      "Se reconnecter avec GitHub",
    );
    expect(UNIFIED_ENTRY_COPY.session_expired.panelEyebrow).toBe("SESSION EXPIRÉE");
  });
});
