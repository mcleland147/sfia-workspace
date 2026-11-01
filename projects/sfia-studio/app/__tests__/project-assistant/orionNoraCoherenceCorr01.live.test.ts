/**
 * ORION-NORA-COHERENCE-CORR-01 — bounded LIVE counter-proof (gated).
 * Requires ORION_COHERENCE_LIVE=1 + campaign DBs + OPENAI_API_KEY.
 * Does not rewrite historical turns; emits one new turn.
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
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "@/lib/vertical-slice-runtime";

const LIVE = process.env.ORION_COHERENCE_LIVE === "1";
const ORION_PROJECT_ID = "prj:b0883ca8-2411-493d-94ff-e386d176956a";
const PROOF_DIR =
  "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/akg-m5-l3s2-fresh-live-qa-01/proofs/orion-nora-coherence-corr-01";
const APP_ROOT = path.resolve(__dirname, "../..");
const FIXTURES = path.join(APP_ROOT, "lib/oa/doctrine/fixtures");
const SCHEMAS = path.resolve(
  APP_ROOT,
  "../sfia-v3-modeled/v3-native-option-a/schemas",
);

function loadDotEnvLocal(forceKeys: readonly string[] = []): void {
  const envPath = path.join(APP_ROOT, ".env.local");
  if (!fs.existsSync(envPath)) return;
  const force = new Set(forceKeys);
  for (const line of fs.readFileSync(envPath, "utf8").split("\n")) {
    const t = line.trim();
    if (!t || t.startsWith("#")) continue;
    const i = t.indexOf("=");
    if (i <= 0) continue;
    const k = t.slice(0, i).trim();
    let v = t.slice(i + 1).trim();
    if (
      (v.startsWith('"') && v.endsWith('"')) ||
      (v.startsWith("'") && v.endsWith("'"))
    ) {
      v = v.slice(1, -1);
    }
    if (force.has(k) || process.env[k] == null || process.env[k] === "") {
      process.env[k] = v;
    }
  }
}

(LIVE ? describe : describe.skip)(
  "ORION-NORA-COHERENCE-CORR-01 LIVE counter-proof",
  () => {
    beforeAll(() => {
      // Vitest setup.ts assigns a temp Nora session DB — force campaign pair.
      loadDotEnvLocal([
        "SFIA_STUDIO_PRODUCT_DB_PATH",
        "SFIA_STUDIO_NORA_SESSION_DB_PATH",
        "OPENAI_API_KEY",
        "OPENAI_MODEL",
      ]);
      delete process.env.SFIA_STUDIO_FAKE_CONVERSATION_PROVIDER;
      delete process.env.SFIA_STUDIO_FORCE_FAKE_PROVIDER;
      process.env.SFIA_STUDIO_CURSOR_REAL = "0";
      process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";
      process.env.SFIA_STUDIO_LOCAL_PILOT_AUTHORITY = "1";
      process.env.SFIA_STUDIO_LOCAL_MORRIS_GATE_AUTHORITY = "1";
      fs.mkdirSync(PROOF_DIR, { recursive: true });
      resetRuntimeApplicationServiceForTests();
      const productDb = process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
      if (!productDb) throw new Error("SFIA_STUDIO_PRODUCT_DB_PATH missing");
      if (!process.env.OPENAI_API_KEY?.trim()) {
        throw new Error("OPENAI_API_KEY missing");
      }
      getRuntimeApplicationService({
        registryRoot: FIXTURES,
        schemasRoot: SCHEMAS,
        productDbPath: productDb,
        auditMode: "noop",
      });
    });

    afterAll(() => {
      resetRuntimeApplicationServiceForTests();
    });

    it(
      "FramingContinuity shows Conception; new LIVE turn is A1 without jargon",
      async () => {
        const sessionDb = process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
        expect(sessionDb).toBeTruthy();

        const before = await projectAssistantReadFramingContinuityAction({
          projectId: ORION_PROJECT_ID,
        });
        expect(before.ok).toBe(true);
        expect(before.continuity?.catalogLabel).toBe("Conception fonctionnelle");
        expect(before.continuity?.targetCycleTypeId).toBe(
          "cyc:functional-design",
        );
        const beforeTitle = framingContinuityRecommendationReadyTitle({
          catalogLabel: before.continuity?.catalogLabel ?? null,
          targetCycleTypeId: before.continuity?.targetCycleTypeId ?? null,
        });
        expect(beforeTitle).toBe(
          "Commencer par un « Conception fonctionnelle »",
        );
        expect(beforeTitle).not.toMatch(/Cadrage/);

        const prompt =
          "Contre-épreuve cohérence ORION (CORR-01) : confirme en une restitution " +
          "unique et structurée la différence entre Cadrage exploratoire et Conception " +
          "fonctionnelle pour ORION, et indique clairement quelle est la recommandation " +
          "Product courante versus toute nouvelle proposition. Ne démarre aucun cycle.";

        const turn = await sendProjectAssistantTurn({
          projectId: ORION_PROJECT_ID,
          content: prompt,
          sessionDbPath: sessionDb!,
        });

        expect(turn.ok).toBe(true);
        if (!turn.ok) return;
        expect(turn.presentation).toBe("openai_live");
        expect(turn.text).not.toMatch(/Les versions structurée et narrative/);
        expect(turn.text).not.toMatch(/CONTRADICTION CANDIDATE/);
        expect(turn.text).toMatch(/Conception fonctionnelle/i);
        expect(turn.text.length).toBeGreaterThan(200);

        const after = await projectAssistantReadFramingContinuityAction({
          projectId: ORION_PROJECT_ID,
        });
        expect(after.ok).toBe(true);
        expect(after.continuity?.catalogLabel).toBe("Conception fonctionnelle");
        const afterTitle = framingContinuityRecommendationReadyTitle({
          catalogLabel: after.continuity?.catalogLabel ?? null,
          targetCycleTypeId: after.continuity?.targetCycleTypeId ?? null,
        });
        expect(afterTitle).not.toMatch(/Cadrage/);

        const proof = {
          at: new Date().toISOString(),
          framingBefore: {
            catalogLabel: before.continuity?.catalogLabel,
            targetCycleTypeId: before.continuity?.targetCycleTypeId,
            recommendationId: before.continuity?.recommendationId,
            phase: before.continuity?.phase,
            title: beforeTitle,
          },
          turn: {
            ok: turn.ok,
            status: turn.status,
            presentation: turn.presentation,
            model: turn.model ?? null,
            contentLen: turn.text.length,
            contentHead: turn.text.slice(0, 600),
            usedAdaptive: Boolean(turn.adaptivePresentation),
            studioControlNotices: turn.studioControlNotices ?? [],
          },
          framingAfter: {
            catalogLabel: after.continuity?.catalogLabel,
            targetCycleTypeId: after.continuity?.targetCycleTypeId,
            recommendationId: after.continuity?.recommendationId,
            phase: after.continuity?.phase,
            title: afterTitle,
          },
        };
        fs.writeFileSync(
          path.join(PROOF_DIR, "live-counterproof.json"),
          JSON.stringify(proof, null, 2),
        );
        fs.writeFileSync(
          path.join(PROOF_DIR, "live-assistant-content.txt"),
          turn.text,
        );
      },
      180_000,
    );
  },
);
