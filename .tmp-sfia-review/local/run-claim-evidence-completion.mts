/**
 * LOCAL campaign runner — PRODUCT-JOURNEY-CLAIM-EVIDENCE-COMPLETION-01 Phase 12.
 * Canonical Product services only. ZERO REAL. No Attempt 4. No SQL writes.
 *
 * Usage:
 *   cd projects/sfia-studio/app
 *   SFIA_CEC_CAMPAIGN_DB=... SFIA_CEC_ARTIFACT=... npx tsx ../../.tmp-sfia-review/local/run-claim-evidence-completion.mts
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { SqliteProductStore } from "@/lib/oa/project/infrastructure/sqlite/sqliteProductStore";
import { createSqliteEvidenceReviewServices } from "@/lib/oa/evidence-review";
import { resolveCurrentContractResultClaimEvaluation } from "@/lib/oa/evidence-review";
import { completeDocsWriteClaimEvidenceCompletion } from "@/features/project-assistant/w2/completeDocsWriteClaimEvidenceCompletion";
import type { ExecutionAttempt } from "@/lib/oa/execution-attempt";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import { SystemClock } from "@/lib/oa/doctrine";

const DB = process.env.SFIA_CEC_CAMPAIGN_DB;
const ARTIFACT = process.env.SFIA_CEC_ARTIFACT;
const ATTEMPT_ID = "xat:w3a:c4c5670edb4658cc";
const EC_ID = "xct:m3-res:dec:w2-trj:e00839c5-5022-4bd8-8243-f0a2dd6e79cb";
/** Current after first evidence-completion pass — immutable historical v1 PASS. */
const EXPECTED_PRE_CE =
  "clm:docs-write:evidence-completion-v1:xat:w3a:c4c5670edb4658cc";
const EXPECTED_PRE_STATUS = "pass";
/** Successor correction after CR-CEC-01/02/03. */
const EXPECTED_POST_CE =
  "clm:docs-write:evidence-completion-v2:xat:w3a:c4c5670edb4658cc";
const EXPECTED_POST_STATUS = "pass";

function fail(msg: string): never {
  console.error(JSON.stringify({ ok: false, error: msg }, null, 2));
  process.exit(2);
}

if (!DB || !fs.existsSync(DB)) fail("SFIA_CEC_CAMPAIGN_DB missing");
if (!ARTIFACT || !fs.existsSync(ARTIFACT)) fail("SFIA_CEC_ARTIFACT missing");

const preSha = createHash("sha256").update(fs.readFileSync(DB)).digest("hex");
console.log(JSON.stringify({ phase: "pre", db: DB, sha256: preSha }, null, 2));

const store = new SqliteProductStore(DB);
const services = createSqliteEvidenceReviewServices({
  productStore: store,
  clock: new SystemClock(),
});

const attemptRow = store.db
  .prepare("SELECT payload_json FROM oa_execution_attempts WHERE attempt_id = ?")
  .get(ATTEMPT_ID) as { payload_json: string } | undefined;
const ecRow = store.db
  .prepare(
    "SELECT payload_json, semantic_fingerprint FROM oa_execution_contracts WHERE execution_contract_id = ?",
  )
  .get(EC_ID) as
  | { payload_json: string; semantic_fingerprint: string }
  | undefined;
if (!attemptRow || !ecRow) fail("attempt or EC missing");

const attempt = JSON.parse(attemptRow.payload_json) as ExecutionAttempt;
const contract = JSON.parse(ecRow.payload_json) as ExecutionContract;

if (attempt.status !== "succeeded") fail(`attempt status ${attempt.status}`);
if (attempt.attemptId !== ATTEMPT_ID) fail("attempt id mismatch");

const current = await resolveCurrentContractResultClaimEvaluation({
  repo: services.claimEvaluationRepository,
  projectId: contract.projectId,
  executionAttemptId: ATTEMPT_ID,
});
if (current.status !== "one") fail(`current CE status ${current.status}`);
if (current.claimEvaluation.claimEvaluationId !== EXPECTED_PRE_CE) {
  fail(`unexpected current CE ${current.claimEvaluation.claimEvaluationId}`);
}
if (current.claimEvaluation.status !== EXPECTED_PRE_STATUS) {
  fail(`unexpected CE status ${current.claimEvaluation.status}`);
}

const attemptCount = store.db
  .prepare("SELECT COUNT(*) AS c FROM oa_execution_attempts")
  .get() as { c: number };
console.log(
  JSON.stringify(
    {
      phase: "pre-verified",
      attempts: attemptCount?.c,
      currentCe: current.claimEvaluation.claimEvaluationId,
      currentStatus: current.claimEvaluation.status,
    },
    null,
    2,
  ),
);

const result = await completeDocsWriteClaimEvidenceCompletion({
  evidenceReviewServices: services,
  attempt,
  contract,
  artifactAbsolutePath: path.resolve(ARTIFACT),
  correlationId: "cor:cec-01-campaign",
});

if (!result.ok) {
  console.error(JSON.stringify({ ok: false, result }, null, 2));
  process.exit(3);
}

const postCurrent = await resolveCurrentContractResultClaimEvaluation({
  repo: services.claimEvaluationRepository,
  projectId: contract.projectId,
  executionAttemptId: ATTEMPT_ID,
});

const postSha = createHash("sha256").update(fs.readFileSync(DB)).digest("hex");
const postAttempts = store.db
  .prepare("SELECT COUNT(*) AS c FROM oa_execution_attempts")
  .get() as { c: number };

const out = {
  ok: true,
  zeroReal: true,
  noNewAttempt: postAttempts?.c === attemptCount?.c,
  attemptsBefore: attemptCount?.c,
  attemptsAfter: postAttempts?.c,
  preSha,
  postSha,
  oldCe: EXPECTED_PRE_CE,
  oldCeStatus: EXPECTED_PRE_STATUS,
  newCe: result.claimEvaluation.claimEvaluationId,
  newCeStatus: result.claimEvaluation.status,
  expectedNewCe: EXPECTED_POST_CE,
  expectedNewStatus: EXPECTED_POST_STATUS,
  newCeMatchesExpected:
    result.claimEvaluation.claimEvaluationId === EXPECTED_POST_CE &&
    result.claimEvaluation.status === EXPECTED_POST_STATUS,
  supersedes: result.claimEvaluation.supersedesClaimEvaluationId,
  reviewBundleId: result.reviewBundle.reviewBundleId,
  frozenVersion: result.reviewBundle.frozenVersion,
  conformityEvidenceId: result.conformityEvidence.evidenceId,
  conformityTechnicalResultRef: result.conformityEvidence.technicalResultRef,
  oracleFingerprint: result.oracleFingerprint,
  matchedHeadings: result.verifierMatchedHeadings,
  eoAssessments: result.claimEvaluation.expectedOutputAssessments,
  erAssessments: result.claimEvaluation.evidenceRequirementAssessments,
  currentAfter:
    postCurrent.status === "one"
      ? {
          id: postCurrent.claimEvaluation.claimEvaluationId,
          status: postCurrent.claimEvaluation.status,
        }
      : postCurrent,
  v1Immutable:
    (
      await services.claimEvaluationReader.findById(EXPECTED_PRE_CE)
    )?.status === "pass",
};

fs.mkdirSync(
  path.resolve(
    "/Users/morris/Projects/sfia-studio-product-journey-claim-evidence-completion-01/.tmp-sfia-review",
  ),
  { recursive: true },
);
fs.writeFileSync(
  "/Users/morris/Projects/sfia-studio-product-journey-claim-evidence-completion-01/.tmp-sfia-review/phase12-campaign-result.json",
  JSON.stringify(out, null, 2),
);
console.log(JSON.stringify(out, null, 2));
