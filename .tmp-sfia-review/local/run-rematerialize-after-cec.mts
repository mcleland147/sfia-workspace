/**
 * LOCAL — rematerialize Product/W3-C/LPS after evidence-completion CE PASS.
 * FakeConversationProvider only. ZERO REAL.
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import {
  FakeConversationProvider,
  setConversationProviderForTests,
} from "@/lib/platform/ai";
import { createRuntimeApplicationService } from "@/lib/vertical-slice-runtime/service";
import { materializeW3bProductTerminal } from "@/features/project-assistant/w2/materializeW3bProductTerminal";

const DB = process.env.SFIA_CEC_CAMPAIGN_DB;
const PROJECT_ID = "prj:e3fe8a45-5c9e-4651-bd2c-bde1cdf77c38";
const ATTEMPT_ID = "xat:w3a:c4c5670edb4658cc";

if (!DB || !fs.existsSync(DB)) {
  console.error("SFIA_CEC_CAMPAIGN_DB missing");
  process.exit(2);
}

const preSha = createHash("sha256").update(fs.readFileSync(DB)).digest("hex");

setConversationProviderForTests(
  new FakeConversationProvider({
    scripted: Array(32).fill(
      "[TEST/FAKE · NON LIVE] CEC rematerialize — claim gap closed by durable evidence completion. RECOMMANDATION — PAS UNE DÉCISION HUMAINE.",
    ),
  }),
);

const runtime = createRuntimeApplicationService({
  productDbPath: DB,
  auditMode: "noop",
});

if (!runtime.oa) {
  console.error("OA stack unavailable on runtime");
  process.exit(2);
}

const result = await materializeW3bProductTerminal({
  oa: runtime.oa,
  projectId: PROJECT_ID,
  attemptId: ATTEMPT_ID,
});

const postSha = createHash("sha256").update(fs.readFileSync(DB)).digest("hex");

const pe = result.postEvidence;
const out = {
  ok: result.ok,
  preSha,
  postSha,
  product: result.ok
    ? {
        outcome: (result.product as { outcome?: string }).outcome,
        claimEvaluationId: result.product.claimEvaluationId,
        evidenceId: result.product.evidenceId,
        reviewBundleId: result.product.reviewBundleId,
        claimStatus: (result.product as { claimStatus?: string }).claimStatus,
      }
    : undefined,
  error: result.ok ? undefined : { code: result.code, message: result.message },
  postEvidence: pe
    ? pe.ok
      ? {
          ok: true,
          recommendationKind: pe.recommendationKind,
          nextStep: pe.nextStep,
          lpsVersion: pe.lpsVersion,
          epistemicItemId: pe.epistemicItemId,
          claimEvaluationId: pe.claimEvaluationId,
          productOutcome: pe.productOutcome,
        }
      : {
          ok: false,
          code: pe.code,
          message: pe.message,
        }
    : null,
  zeroReal: true,
};

fs.writeFileSync(
  "/Users/morris/Projects/sfia-studio-product-journey-claim-evidence-completion-01/.tmp-sfia-review/phase14-rematerialize.json",
  JSON.stringify(out, null, 2),
);
console.log(JSON.stringify(out, null, 2));

setConversationProviderForTests(null);
if (typeof runtime.dispose === "function") {
  await runtime.dispose();
}

process.exit(result.ok ? 0 : 3);
