/**
 * ORION-NORA-COHERENCE-CORR-01 — bounded LIVE counter-proof.
 * - Reads FramingContinuity against campaign Product DB.
 * - Emits ONE new Nora turn (does not rewrite historical turns).
 * - Cursor REAL remains OFF.
 *
 * Usage (from app/): npx tsx scripts/orion-coherence-corr-01-live-proof.ts
 */
import fs from "node:fs";
import path from "node:path";
import { framingContinuityRecommendationReadyTitle } from "../features/project-assistant/f2/chatFirstFramingContinuity";
import { projectAssistantReadFramingContinuityAction } from "../features/project-assistant/preCycleCandidateTrajectoryActions";
import { sendProjectAssistantTurn } from "../features/project-assistant/sendProjectAssistantTurn";
import {
  getRuntimeApplicationService,
  resetRuntimeApplicationServiceForTests,
} from "../lib/vertical-slice-runtime";

const ORION_PROJECT_ID = "prj:b0883ca8-2411-493d-94ff-e386d176956a";
const PROOF_DIR =
  "/Users/morris/Projects/sfia-workspace/projects/sfia-studio/.sfia-exec/akg-m5-l3s2-fresh-live-qa-01/proofs/orion-nora-coherence-corr-01";

function loadDotEnvLocal(): void {
  const envPath = path.join(process.cwd(), ".env.local");
  if (!fs.existsSync(envPath)) return;
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
    if (process.env[k] == null || process.env[k] === "") {
      process.env[k] = v;
    }
  }
}

async function main(): Promise<void> {
  loadDotEnvLocal();
  delete process.env.SFIA_STUDIO_FAKE_CONVERSATION_PROVIDER;
  delete process.env.SFIA_STUDIO_FORCE_FAKE_PROVIDER;
  process.env.SFIA_STUDIO_CURSOR_REAL = "0";
  process.env.SFIA_V2_RUNTIME_ALLOW_RESET = "1";

  const productDb = process.env.SFIA_STUDIO_PRODUCT_DB_PATH;
  const sessionDb = process.env.SFIA_STUDIO_NORA_SESSION_DB_PATH;
  if (!productDb || !sessionDb) {
    throw new Error("Campaign DB paths missing");
  }
  if (!process.env.OPENAI_API_KEY?.trim()) {
    throw new Error("OPENAI_API_KEY missing — LIVE Nora required");
  }

  fs.mkdirSync(PROOF_DIR, { recursive: true });

  const appRoot = process.cwd();
  const fixtures = path.join(appRoot, "lib/oa/doctrine/fixtures");
  const schemas = path.resolve(
    appRoot,
    "../sfia-v3-modeled/v3-native-option-a/schemas",
  );

  resetRuntimeApplicationServiceForTests();
  const runtime = getRuntimeApplicationService({
    registryRoot: fixtures,
    schemasRoot: schemas,
    productDbPath: productDb,
    auditMode: "noop",
  });
  if (!runtime.oa) throw new Error("OA unavailable");

  const before = await projectAssistantReadFramingContinuityAction({
    projectId: ORION_PROJECT_ID,
  });
  const beforeTitle = before.ok
    ? framingContinuityRecommendationReadyTitle({
        catalogLabel: before.continuity?.catalogLabel ?? null,
        targetCycleTypeId: before.continuity?.targetCycleTypeId ?? null,
      })
    : null;

  const prompt =
    "Contre-épreuve cohérence ORION (CORR-01) : confirme en une restitution " +
    "unique et structurée la différence entre Cadrage exploratoire et Conception " +
    "fonctionnelle pour ORION, et indique clairement quelle est la recommandation " +
    "Product courante versus toute nouvelle proposition. Ne démarre aucun cycle.";

  const turn = await sendProjectAssistantTurn({
    projectId: ORION_PROJECT_ID,
    content: prompt,
    sessionDbPath: sessionDb,
  });

  const after = await projectAssistantReadFramingContinuityAction({
    projectId: ORION_PROJECT_ID,
  });
  const afterTitle = after.ok
    ? framingContinuityRecommendationReadyTitle({
        catalogLabel: after.continuity?.catalogLabel ?? null,
        targetCycleTypeId: after.continuity?.targetCycleTypeId ?? null,
      })
    : null;

  const assistantText = turn.ok ? turn.text : "";

  const proof = {
    cycle: "ORION-NORA-COHERENCE-CORR-01",
    at: new Date().toISOString(),
    cursorReal: process.env.SFIA_STUDIO_CURSOR_REAL,
    projectId: ORION_PROJECT_ID,
    framingBefore: {
      ok: before.ok,
      phase: before.continuity?.phase ?? null,
      catalogLabel: before.continuity?.catalogLabel ?? null,
      targetCycleTypeId: before.continuity?.targetCycleTypeId ?? null,
      recommendationId: before.continuity?.recommendationId ?? null,
      title: beforeTitle,
      message: before.continuity?.message ?? null,
    },
    turn: {
      ok: turn.ok,
      status: (turn as { status?: string }).status ?? null,
      code: (turn as { code?: string }).code ?? null,
      contentHead: assistantText.slice(0, 500),
      contentLen: assistantText.length,
      hasDivergenceNotice: assistantText.includes(
        "Les versions structurée et narrative",
      ),
      hasContradictionJargon: /CONTRADICTION CANDIDATE/i.test(assistantText),
      hasConception: /Conception fonctionnelle/i.test(assistantText),
      hasCadrageExploratoireTitleOnlyAsComparison:
        /Cadrage exploratoire/i.test(assistantText),
    },
    framingAfter: {
      ok: after.ok,
      phase: after.continuity?.phase ?? null,
      catalogLabel: after.continuity?.catalogLabel ?? null,
      targetCycleTypeId: after.continuity?.targetCycleTypeId ?? null,
      recommendationId: after.continuity?.recommendationId ?? null,
      title: afterTitle,
      message: after.continuity?.message ?? null,
    },
    checks: {
      cardNotFakeCadrage:
        beforeTitle != null &&
        !/Cadrage/i.test(beforeTitle) &&
        /Conception fonctionnelle/i.test(beforeTitle ?? ""),
      cardAlignedAfter:
        afterTitle != null &&
        !/Cadrage/i.test(afterTitle) &&
        /Conception fonctionnelle/i.test(afterTitle ?? ""),
      turnOk: turn.ok === true,
      noDivergenceNotice: !assistantText.includes(
        "Les versions structurée et narrative",
      ),
      noContradictionJargon: !/CONTRADICTION CANDIDATE/i.test(assistantText),
    },
  };

  const out = path.join(PROOF_DIR, "live-counterproof.json");
  fs.writeFileSync(out, JSON.stringify(proof, null, 2));
  fs.writeFileSync(
    path.join(PROOF_DIR, "live-assistant-content.txt"),
    assistantText,
  );
  console.log(JSON.stringify(proof, null, 2));
  console.log("PROOF_DIR", PROOF_DIR);

  const failed = Object.entries(proof.checks).filter(([, v]) => v !== true);
  if (failed.length > 0) {
    console.error("LIVE CHECKS FAILED", failed.map(([k]) => k));
    process.exitCode = 2;
  }
}

main().catch((err) => {
  console.error(err);
  process.exitCode = 1;
});
