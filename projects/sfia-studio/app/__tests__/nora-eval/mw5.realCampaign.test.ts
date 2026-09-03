/** @vitest-environment node */
/**
 * MW5-R2-REAL-03 — gated REAL campaign via Vitest (CSS-safe import of F2 path).
 * Run: MW5_RUN_REAL=1 npx vitest run __tests__/nora-eval/mw5.realCampaign.test.ts
 */
import { describe, expect, it } from "vitest";
import { runMw5RealCampaign } from "./runMw5RealCampaign";

const runReal = process.env.MW5_RUN_REAL === "1";

describe.runIf(runReal)("MW5-R2-REAL-03 bounded REAL campaign", () => {
  it(
    "R1 structured smoke + complete post-DLV05 R2 matrix under call/budget caps",
    async () => {
      const result = await runMw5RealCampaign();
      expect(result.evidencePath).toBeTruthy();
      expect(result.sha256).toMatch(/^[a-f0-9]{64}$/);
      expect(result.actualCalls).toBeLessThanOrEqual(50);
      expect(result.estimatedSpendUsd).toBeLessThanOrEqual(5);
      console.log("MW5_REAL_03_RESULT", result);
      expect(result.verdict).toBe("PASS CANDIDATE");
    },
    900_000,
  );
});
