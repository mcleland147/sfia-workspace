/**
 * ORION-NORA-COHERENCE-CORR-01 — bounded LIVE counter-proof (opt-in only).
 *
 * Disabled by default. Default CI never calls OpenAI.
 * Requires deliberate LIVE_PROVIDER_OPT_IN=1 (or ORION_COHERENCE_LIVE=1) plus:
 *   TEST_PROJECT_ID, TEST_PRODUCT_DB_PATH, TEST_NORA_DB_PATH, OPENAI_API_KEY
 * Optional: TEST_PROOF_DIR
 *
 * No hardcoded ORION id / machine paths.
 * No .env.local parsing. No reset flag. No Pilot/Morris authority switches.
 * Cursor REAL forced OFF. Does not create missing DB files.
 *
 * This campaign does NOT execute a new LIVE counter-proof.
 *
 * @vitest-environment node
 */
import fs from "node:fs";
import path from "node:path";
import { afterAll, beforeAll, describe, expect, it } from "vitest";
import { framingContinuityRecommendationReadyTitle } from "@/features/project-assistant/f2/chatFirstFramingContinuity";
import { projectAssistantReadFramingContinuityAction } from "@/features/project-assistant/preCycleCandidateTrajectoryActions";
import { sendProjectAssistantTurn } from "@/features/project-assistant/sendProjectAssistantTurn";
import {
  applyLiveProofSafeRuntimeEnv,
  isLiveProviderOptIn,
  resolveOrionCoherenceLiveProofBoundary,
} from "@/lib/project-assistant-qa/orionCoherenceLiveProofBoundary";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const LIVE = isLiveProviderOptIn();
const boundary = LIVE ? resolveOrionCoherenceLiveProofBoundary() : null;
const RUN_LIVE = Boolean(LIVE && boundary?.ok);

const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

(RUN_LIVE ? describe : describe.skip)(
  "ORION-NORA-COHERENCE-CORR-01 LIVE counter-proof (opt-in)",
  () => {
    const config = boundary && boundary.ok ? boundary : null;

    beforeAll(() => {
      if (!config) {
        throw new Error(
          LIVE && boundary && !boundary.ok
            ? `LIVE opt-in present but boundary failed: ${boundary.reason}`
            : "LIVE boundary config missing",
        );
      }
      applyLiveProofSafeRuntimeEnv(config);
      resetRuntimeApplicationServiceForTests();
      getRuntimeApplicationService({
        registryRoot: FIXTURES,
        schemasRoot: SCHEMAS,
        productDbPath: config.productDbPath,
        auditMode: "noop",
      });
    });

    afterAll(() => {
      resetRuntimeApplicationServiceForTests();
    });

    it(
      "FramingContinuity + one LIVE turn (explicit targets only)",
      async () => {
        if (!config) throw new Error("LIVE config missing");

        const before = await projectAssistantReadFramingContinuityAction({
          projectId: config.projectId,
        });
        expect(before.ok).toBe(true);
        expect(before.continuity?.catalogLabel).toBeTruthy();
        const beforeTitle = framingContinuityRecommendationReadyTitle({
          catalogLabel: before.continuity?.catalogLabel ?? null,
          targetCycleTypeId: before.continuity?.targetCycleTypeId ?? null,
        });
        expect(beforeTitle).not.toMatch(/Cadrage/);

        const prompt =
          "Contre-épreuve cohérence (opt-in LIVE) : confirme en une restitution " +
          "unique et structurée la différence entre Cadrage exploratoire et Conception " +
          "fonctionnelle, et indique clairement quelle est la recommandation " +
          "Product courante versus toute nouvelle proposition. Ne démarre aucun cycle.";

        const turn = await sendProjectAssistantTurn({
          projectId: config.projectId,
          content: prompt,
          sessionDbPath: config.noraDbPath,
        });

        expect(turn.ok).toBe(true);
        if (!turn.ok) return;
        expect(turn.presentation).toBe("openai_live");
        expect(turn.text).not.toMatch(/Les versions structurée et narrative/);
        expect(turn.text).not.toMatch(/CONTRADICTION CANDIDATE/);
        expect(turn.text.length).toBeGreaterThan(200);

        const after = await projectAssistantReadFramingContinuityAction({
          projectId: config.projectId,
        });
        expect(after.ok).toBe(true);
        const afterTitle = framingContinuityRecommendationReadyTitle({
          catalogLabel: after.continuity?.catalogLabel ?? null,
          targetCycleTypeId: after.continuity?.targetCycleTypeId ?? null,
        });
        expect(afterTitle).not.toMatch(/Cadrage/);

        if (config.proofDir) {
          fs.mkdirSync(config.proofDir, { recursive: true });
          const proof = {
            at: new Date().toISOString(),
            projectId: config.projectId,
            framingBefore: {
              catalogLabel: before.continuity?.catalogLabel,
              targetCycleTypeId: before.continuity?.targetCycleTypeId,
              title: beforeTitle,
            },
            turn: {
              ok: turn.ok,
              status: turn.status,
              presentation: turn.presentation,
              model: turn.model ?? null,
              contentLen: turn.text.length,
              contentHead: turn.text.slice(0, 600),
              studioControlNotices: turn.studioControlNotices ?? [],
            },
            framingAfter: {
              catalogLabel: after.continuity?.catalogLabel,
              targetCycleTypeId: after.continuity?.targetCycleTypeId,
              title: afterTitle,
            },
          };
          fs.writeFileSync(
            path.join(config.proofDir, "live-counterproof.json"),
            JSON.stringify(proof, null, 2),
          );
        }
      },
      180_000,
    );
  },
);

describe("ORION-NORA-COHERENCE-CORR-01 LIVE harness — default skip contract", () => {
  it("skips LIVE body when opt-in is absent (CI-safe)", () => {
    if (!LIVE) {
      expect(RUN_LIVE).toBe(false);
      return;
    }
    // Opt-in present in this process: boundary must still be explicit/ok to run.
    expect(boundary).not.toBeNull();
    if (boundary && !boundary.ok) {
      expect(RUN_LIVE).toBe(false);
      expect(boundary.reason.length).toBeGreaterThan(0);
    }
  });
});
