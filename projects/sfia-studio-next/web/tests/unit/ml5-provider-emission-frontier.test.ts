import { createHash } from "node:crypto";
import { afterEach, describe, expect, it } from "vitest";
import {
  beginCampaignEnvelope,
  campaignSlotsRemaining,
  commitProviderEmission,
  getActiveCampaignEnvelope,
  getEmissionsObservedForTests,
  releaseProviderEmission,
  reserveProviderEmission,
  runWithProviderEmissionStore,
  suspendCampaignEnvelope,
  __resetProviderEmissionFrontierForTests,
} from "@/domains/conversation/provider-emission-frontier";

const TEST_KEY = "sk-test-frontier-aaaaaaaaaaaaaaaa";
const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);
const laneEnv = {
  STUDIO_LANE: "DEV",
  OPENAI_API_KEY: TEST_KEY,
  SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
} as unknown as NodeJS.ProcessEnv;

function reserve(kind: Parameters<typeof reserveProviderEmission>[0]["kind"]) {
  return reserveProviderEmission({
    kind,
    skipModelAdmission: true,
    env: laneEnv,
  });
}

describe("S1 — provider emission frontier / campaign envelope", () => {
  afterEach(() => {
    __resetProviderEmissionFrontierForTests();
  });

  it("refuses N+1 emission when campaign max is N", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ campaignId: "camp-test", maxAttempts: 2 });
      const a = reserve("campaign.probe");
      expect(a.ok).toBe(true);
      if (!a.ok) throw new Error("a");
      commitProviderEmission(a);

      const b = reserve("campaign.probe");
      expect(b.ok).toBe(true);
      if (!b.ok) throw new Error("b");
      commitProviderEmission(b);

      const c = reserve("campaign.probe");
      expect(c.ok).toBe(false);
      if (c.ok) throw new Error("c");
      expect(c.reasonCode).toBe("CAMPAIGN_ENVELOPE_EXHAUSTED");
      expect(getEmissionsObservedForTests()).toBe(2);
      expect(campaignSlotsRemaining()).toBe(0);
    });
  });

  it("releases unused reservation so a later attempt can proceed", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ maxAttempts: 1 });
      const a = reserve("nora.generate_reply");
      expect(a.ok).toBe(true);
      if (!a.ok) throw new Error("a");
      releaseProviderEmission({ ...a, contacted: false });
      expect(campaignSlotsRemaining()).toBe(1);
      const b = reserve("nora.generate_reply");
      expect(b.ok).toBe(true);
      if (!b.ok) throw new Error("b");
      commitProviderEmission(b);
      expect(getEmissionsObservedForTests()).toBe(1);
    });
  });

  it("blocks after suspend even if slots remain", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ maxAttempts: 5 });
      suspendCampaignEnvelope("TEST_SUSPEND");
      const r = reserve("public_web.isolated_search");
      expect(r.ok).toBe(false);
      if (r.ok) throw new Error("r");
      expect(r.reasonCode).toBe("CAMPAIGN_SUSPENDED");
      expect(getActiveCampaignEnvelope()?.suspendReason).toBe("TEST_SUSPEND");
    });
  });

  it("oracle counts committed emissions, not maxTurns", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ maxAttempts: 3 });
      for (let i = 0; i < 3; i++) {
        const r = reserve("other");
        expect(r.ok).toBe(true);
        if (!r.ok) throw new Error("r");
        commitProviderEmission(r);
      }
      expect(getEmissionsObservedForTests()).toBe(3);
      const blocked = reserve("other");
      expect(blocked.ok).toBe(false);
    });
  });

  it("refuses incorrect lane configuration before emission", () => {
    runWithProviderEmissionStore(() => {
      const r = reserveProviderEmission({
        kind: "nora.generate_reply",
        skipModelAdmission: true,
        env: { STUDIO_LANE: "DEV" } as unknown as NodeJS.ProcessEnv,
      });
      expect(r.ok).toBe(false);
      if (r.ok) throw new Error("r");
      expect(r.reasonCode).toBe("LANE_GUARD_FAILED");
    });
  });
});
