import { afterEach, describe, expect, it } from "vitest";
import {
  beginCampaignEnvelope,
  getCampaignEnvelopeMetrics,
  runWithProviderEmissionStore,
  __resetProviderEmissionFrontierForTests,
} from "@/domains/conversation/provider-emission-frontier";

describe("getCampaignEnvelopeMetrics deep-clones familyHttp", () => {
  afterEach(() => {
    __resetProviderEmissionFrontierForTests();
  });

  it("before/after snapshots do not alias family counters", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({
        campaignId: "camp-metrics-clone",
        maxHttpAttempts: 10,
        required: true,
        familyHttpLimits: { embeddings: 5, responses: 5 },
      });
      const before = getCampaignEnvelopeMetrics();
      expect(before).toBeTruthy();
      const fam = before!.familyHttp as Record<
        string,
        { committed: number; reserved: number }
      >;
      expect(fam.embeddings.committed).toBe(0);
      // Mutate the snapshot — must NOT affect live envelope.
      fam.embeddings.committed = 99;
      const again = getCampaignEnvelopeMetrics();
      const fam2 = again!.familyHttp as Record<
        string,
        { committed: number }
      >;
      expect(fam2.embeddings.committed).toBe(0);
    });
  });
});
