/**
 * Modeled-only ExecutionAttempt / AgentDescriptor governance validation (T-A5).
 * Uses ajv@6 from projects/sfia-studio/app/node_modules — no package.json changes.
 * Forbidden: app/lib/oa/** runtime, app/__tests__/oa/**, SQL, UI, shell adapters.
 */
import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import test from "node:test";
import { createRequire } from "node:module";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const PACK = path.resolve(__dirname, "..");
const SCHEMA_ROOT = path.join(PACK, "schemas");
const EXAMPLES = path.join(PACK, "examples");
const APP_REQUIRE = createRequire(
  path.join(PACK, "../../app/package.json"),
);
const Ajv = APP_REQUIRE("ajv");

function loadJson(p) {
  return JSON.parse(fs.readFileSync(p, "utf8"));
}

function collectSchemas(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, ent.name);
    if (ent.isDirectory()) collectSchemas(full, out);
    else if (ent.name.endsWith(".schema.json")) out.push(full);
  }
  return out;
}

function buildAjv() {
  const ajv = new Ajv({
    allErrors: true,
    schemaId: "auto",
    meta: true,
  });
  for (const file of collectSchemas(SCHEMA_ROOT)) {
    const schema = loadJson(file);
    if (schema.$id) ajv.addSchema(schema);
  }
  return ajv;
}

const ATTEMPT_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/execution/execution-attempt.schema.json";
const AGENT_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/execution/agent-descriptor.schema.json";

const VALID_ATTEMPTS = [
  "execution-attempt-accepted.valid.json",
  "execution-attempt-running.valid.json",
  "execution-attempt-result-pending.valid.json",
  "execution-attempt-succeeded.valid.json",
  "execution-attempt-failed.valid.json",
  "execution-attempt-timeout.valid.json",
  "execution-attempt-cancelled.valid.json",
  "execution-attempt-retry.valid.json",
  "execution-attempt-critical-selection.valid.json",
  "execution-attempt-noncritical-capabilities.valid.json",
  "execution-attempt-launch-fail.valid.json",
];

const INVALID_ATTEMPTS = [
  "invalid/execution-attempt.additional-properties.invalid.json",
  "invalid/execution-attempt.bad-schema-version.invalid.json",
  "invalid/execution-attempt.partial-status.invalid.json",
  "invalid/execution-attempt.missing-required.invalid.json",
  "invalid/execution-attempt.succeeded-without-result.invalid.json",
  "invalid/execution-attempt.result-pending-without-ts.invalid.json",
  "invalid/execution-attempt.critical-capabilities.invalid.json",
  "invalid/execution-attempt.human-confirm-running-without-cnf.invalid.json",
  "invalid/execution-attempt.timeout-without-timedOutAt.invalid.json",
  "invalid/execution-attempt.failed-without-failedAt.invalid.json",
  "invalid/execution-attempt.cancelled-without-cancelledAt.invalid.json",
  "invalid/execution-attempt.running-without-launchedAt.invalid.json",
  "invalid/execution-attempt.accepted-without-selection.invalid.json",
  "invalid/execution-attempt.capabilities-on-critical-profile.invalid.json",
  "invalid/execution-attempt.capabilities-without-profile.invalid.json",
  "invalid/execution-attempt.legacy-contractId.invalid.json",
  "invalid/execution-attempt.legacy-agentRef.invalid.json",
  "invalid/execution-attempt.blocked-status.invalid.json",
  "invalid/execution-attempt.starting-status.invalid.json",
  "invalid/execution-attempt.planned-status.invalid.json",
  "invalid/execution-attempt.ta6-claimId.invalid.json",
  "invalid/execution-attempt.retry-index-without-retryOf.invalid.json",
  "invalid/execution-attempt.failed-without-error-or-stop.invalid.json",
];

const LIFECYCLE = [
  "accepted",
  "running",
  "result_pending",
  "succeeded",
  "failed",
  "timeout",
  "cancelled",
];

const NARRATIVES = [
  [
    "execution-attempt-selection-expired.narrative.md",
    ["AGENT_SELECTION_EXPIRED", "selectionExpiresAt"],
  ],
  [
    "execution-attempt-ttl-expired.narrative.md",
    ["AGENT_SELECTION_EXPIRED", "selectionExpiresAt"],
  ],
  [
    "execution-attempt-morris-displayname-spoof.narrative.md",
    ["displayName", "AUTHORITY_DENIED", "canActAsMorris"],
  ],
  [
    "execution-attempt-n3-without-canActAsMorris.narrative.md",
    ["N3 ≠ Morris", "canActAsMorris", "AUTHORITY_DENIED"],
  ],
  [
    "execution-attempt-wrong-agent-confirmation.narrative.md",
    ["agentConfirmationRef", "agent_selection"],
  ],
  [
    "execution-attempt-launch-then-persist.forbidden.narrative.md",
    ["launch-then-persist", "persist-then-launch", "FORBIDDEN"],
  ],
  [
    "execution-attempt-adapter-foreign-attempt.narrative.md",
    ["foreign", "AUTHORITY_DENIED", "RecordExecutionResult"],
  ],
  [
    "execution-attempt-result-pending-no-direct-completed.narrative.md",
    ["result_pending", "stays `executing`", "speculative"],
  ],
  [
    "execution-attempt-retry-budget-exhausted.narrative.md",
    ["RETRY_BUDGET_EXHAUSTED", "retryOfAttemptId"],
  ],
];

function acceptedBase() {
  return loadJson(path.join(EXAMPLES, "execution-attempt-accepted.valid.json"));
}

function runningBase() {
  return loadJson(path.join(EXAMPLES, "execution-attempt-running.valid.json"));
}

test("ExecutionAttempt schema compiles with resolved $refs", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  assert.ok(validate, "schema registered");
  assert.equal(typeof validate, "function");
});

test("AgentDescriptor schema compiles with resolved $refs", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(AGENT_SCHEMA_ID);
  assert.ok(validate, "schema registered");
});

test("ExecutionAttempt schemaVersion is 0.2.0-oa breaking bump", () => {
  const schema = loadJson(
    path.join(SCHEMA_ROOT, "execution/execution-attempt.schema.json"),
  );
  assert.equal(schema.properties.schemaVersion.const, "0.2.0-oa");
  assert.equal(schema.additionalProperties, false);
  assert.deepEqual(schema.properties.status.enum, LIFECYCLE);
  assert.ok(!schema.properties.status.enum.includes("partial"));
  assert.ok(!schema.properties.contractId);
  assert.ok(!schema.properties.agentRef);
  assert.ok(schema.properties.executionContractId);
  assert.ok(schema.properties.selectedAgentRef);
  assert.ok(
    /BREAKING|breaking/i.test(schema.description),
    "breaking documented in description",
  );
  assert.ok(Array.isArray(schema.allOf) && schema.allOf.length >= 10);
});

test("valid Attempt examples accept under 0.2.0-oa schema", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  for (const rel of VALID_ATTEMPTS) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(
      validate(data),
      true,
      `${rel} should validate: ${JSON.stringify(validate.errors)}`,
    );
  }
});

test("invalid Attempt examples reject", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  for (const rel of INVALID_ATTEMPTS) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(validate(data), false, `${rel} should be invalid`);
  }
});

test("agent-descriptor.valid.json accepts; additionalProperties fails", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(AGENT_SCHEMA_ID);
  const ok = loadJson(path.join(EXAMPLES, "agent-descriptor.valid.json"));
  assert.equal(validate(ok), true, JSON.stringify(validate.errors));
  const bad = loadJson(
    path.join(
      EXAMPLES,
      "invalid/agent-descriptor.additional-properties.invalid.json",
    ),
  );
  assert.equal(validate(bad), false);
});

test("lifecycle status enum closed; partial rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  for (const status of LIFECYCLE) {
    assert.ok(LIFECYCLE.includes(status));
  }
  const data = acceptedBase();
  data.status = "partial";
  assert.equal(validate(data), false);
  data.status = "blocked";
  assert.equal(validate(data), false);
  data.status = "starting";
  assert.equal(validate(data), false);
  data.status = "planned";
  assert.equal(validate(data), false);
  data.status = "completed";
  assert.equal(validate(data), false);
});

test("additionalProperties rejected on Attempt", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const data = acceptedBase();
  data.runtimeShell = "forbidden";
  assert.equal(validate(data), false);
  assert.ok(
    (validate.errors || []).some((e) => e.keyword === "additionalProperties"),
  );
});

test("schemaVersion 0.1.0-oa rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  for (const ver of ["0.1.0-oa", "0.2.0-OA", "0.2.0", ""]) {
    const data = acceptedBase();
    data.schemaVersion = ver;
    assert.equal(
      validate(data),
      false,
      `schemaVersion=${JSON.stringify(ver)} must fail`,
    );
  }
});

test("multiple Attempts same executionContractId are schema-valid", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const a = acceptedBase();
  const b = acceptedBase();
  b.attemptId = "xat:oa-002";
  b.idempotencyKey = "idem-xat-oa-002";
  assert.equal(a.executionContractId, b.executionContractId);
  assert.equal(validate(a), true, JSON.stringify(validate.errors));
  assert.equal(validate(b), true, JSON.stringify(validate.errors));
});

test("retryOfAttemptId requires retryIndex and maxRetriesBudget", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const ok = loadJson(
    path.join(EXAMPLES, "execution-attempt-retry.valid.json"),
  );
  assert.equal(validate(ok), true, JSON.stringify(validate.errors));
  const bad = acceptedBase();
  bad.retryOfAttemptId = "xat:oa-fail-001";
  assert.equal(validate(bad), false);
});

test("Critical selection requires human_confirmed_proposal", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const bad = loadJson(
    path.join(
      EXAMPLES,
      "invalid/execution-attempt.critical-capabilities.invalid.json",
    ),
  );
  assert.equal(validate(bad), false);
  const ok = loadJson(
    path.join(EXAMPLES, "execution-attempt-critical-selection.valid.json"),
  );
  assert.equal(validate(ok), true, JSON.stringify(validate.errors));
  assert.equal(ok.selectionStrategy, "human_confirmed_proposal");
  assert.ok(ok.agentConfirmationRef);
});

test("human_confirmed_proposal beyond accepted requires agentConfirmationRef", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const bad = loadJson(
    path.join(
      EXAMPLES,
      "invalid/execution-attempt.human-confirm-running-without-cnf.invalid.json",
    ),
  );
  assert.equal(validate(bad), false);
});

test("result_pending requires resultPendingAt; succeeded requires resultRef", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  assert.equal(
    validate(
      loadJson(
        path.join(
          EXAMPLES,
          "invalid/execution-attempt.result-pending-without-ts.invalid.json",
        ),
      ),
    ),
    false,
  );
  assert.equal(
    validate(
      loadJson(
        path.join(
          EXAMPLES,
          "invalid/execution-attempt.succeeded-without-result.invalid.json",
        ),
      ),
    ),
    false,
  );
  assert.equal(
    validate(
      loadJson(
        path.join(EXAMPLES, "execution-attempt-result-pending.valid.json"),
      ),
    ),
    true,
  );
});

test("catalog documents T-A5 commands events errors and persist-then-launch", () => {
  const catalog = fs.readFileSync(
    path.join(PACK, "09-command-event-error-and-transition-catalog.md"),
    "utf8",
  );
  for (const token of [
    "SelectExecutionAgent",
    "StartExecution",
    "CancelExecutionAttempt",
    "RecordExecutionResult",
    "RecordExecutionFailure",
    "RetryExecutionAttempt",
    "GetExecutionAttempt",
    "ListExecutionAttempts",
    "CheckAttemptAuthorization",
    "ExecutionAgentProposed",
    "ExecutionAgentSelected",
    "ExecutionAttemptAccepted",
    "ExecutionStarted",
    "ExecutionResultPending",
    "ExecutionSucceeded",
    "ExecutionFailed",
    "ExecutionTimedOut",
    "ExecutionCancellationRequested",
    "ExecutionCancelled",
    "ExecutionCancellationFailed",
    "ExecutionAuthorizationDenied",
    "ExecutionRetryAuthorized",
    "result_pending",
    "persist-then-launch",
    "launch-then-persist",
    "AGENT_SELECTION_EXPIRED",
    "RESULT_RECORDING_FAILED",
    "RETRY_BUDGET_EXHAUSTED",
    "N3 ≠ Morris",
    "canActAsMorris",
    "selectedAgentRef?",
    "Matrice d'autorité T-A5",
    "Emergency stop Morris",
    "auto-safety",
    "accepted` | StartExecution (launch fail",
    "`*→planned`",
  ]) {
    assert.ok(catalog.includes(token), `missing ${token}`);
  }
  assert.ok(
    catalog.includes("contract stays executing") ||
      catalog.includes("reste executing") ||
      catalog.includes("stays `executing`") ||
      catalog.includes("reste `executing`"),
    "result_pending must not complete contract",
  );
  assert.ok(
    !catalog.includes("`agentRef?`") ||
      catalog.includes("Legacy `agentRef?` retiré"),
    "payload must prefer selectedAgentRef",
  );
});

test("doc 07 documents Attempt 0.2.0-oa ownership and T-A5/T-A6 boundary", () => {
  const doc07 = fs.readFileSync(
    path.join(PACK, "07-execution-contract-attempt-and-agent-model.md"),
    "utf8",
  );
  for (const token of [
    "0.2.0-oa",
    "0.1.0-oa",
    "accepted",
    "result_pending",
    "persist-then-launch",
    "T-A6",
    "partial",
    "AgentDescriptor",
    "not a live registry",
  ]) {
    assert.ok(doc07.includes(token), `07 missing ${token}`);
  }
  assert.ok(
    !/MODELED VALIDATED/.test(doc07) ||
      /Pas MODELED VALIDATED|not MODELED VALIDATED|Anti-claims/i.test(doc07),
    "must not claim MODELED VALIDATED without anti-claim",
  );
});

test("T-A5 modeled docs do not own Evidence/Claim maturity", () => {
  const doc07 = fs.readFileSync(
    path.join(PACK, "07-execution-contract-attempt-and-agent-model.md"),
    "utf8",
  );
  assert.ok(/T-A6/.test(doc07));
  assert.ok(
    /Evidence|Claim|maturité|maturity/i.test(doc07),
    "boundary must mention Evidence/Claim/maturity as out of T-A5",
  );
  const attemptSchema = fs.readFileSync(
    path.join(SCHEMA_ROOT, "execution/execution-attempt.schema.json"),
    "utf8",
  );
  assert.ok(!/"claimId"/.test(attemptSchema));
  assert.ok(!/"evidenceId"/.test(attemptSchema));
  assert.ok(!/"maturity"/.test(attemptSchema));
});

test("anti-runtime strings present on AgentDescriptor and Attempt descriptions", () => {
  const agent = loadJson(
    path.join(SCHEMA_ROOT, "execution/agent-descriptor.schema.json"),
  );
  const attempt = loadJson(
    path.join(SCHEMA_ROOT, "execution/execution-attempt.schema.json"),
  );
  assert.ok(/NOT an operational|not a live registry|NOT.*live registry/i.test(agent.description));
  assert.ok(/not operational runtime|Anti-claims/i.test(attempt.description));
});

test("attemptId and executionContractId prefixes enforced", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const badId = acceptedBase();
  badId.attemptId = "att:oa-001";
  assert.equal(validate(badId), false);
  const badXct = acceptedBase();
  badXct.executionContractId = "contract:oa-001";
  assert.equal(validate(badXct), false);
});

test("expired selection narrative documents runtime Start refuse", () => {
  const narrative = fs.readFileSync(
    path.join(EXAMPLES, "execution-attempt-selection-expired.narrative.md"),
    "utf8",
  );
  assert.ok(narrative.includes("AGENT_SELECTION_EXPIRED"));
  assert.ok(narrative.includes("selectionExpiresAt"));
});

test("adversarial C1: timeout without timedOutAt rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const data = loadJson(
    path.join(EXAMPLES, "execution-attempt-timeout.valid.json"),
  );
  assert.equal(validate(data), true);
  delete data.timedOutAt;
  assert.equal(validate(data), false);
});

test("adversarial C1: failed without failedAt rejected; launch-fail without launchedAt accepted", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const post = loadJson(
    path.join(EXAMPLES, "execution-attempt-failed.valid.json"),
  );
  assert.equal(validate(post), true);
  delete post.failedAt;
  assert.equal(validate(post), false);

  const launchFail = loadJson(
    path.join(EXAMPLES, "execution-attempt-launch-fail.valid.json"),
  );
  assert.equal(validate(launchFail), true, JSON.stringify(validate.errors));
  assert.ok(!("launchedAt" in launchFail));

  const badLaunch = { ...launchFail };
  badLaunch.stopReason = "adapter_error";
  assert.equal(validate(badLaunch), false);
});

test("adversarial C1: cancelled without cancelledAt; running without launchedAt", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const cancelled = loadJson(
    path.join(EXAMPLES, "execution-attempt-cancelled.valid.json"),
  );
  delete cancelled.cancelledAt;
  assert.equal(validate(cancelled), false);
  const running = runningBase();
  delete running.launchedAt;
  assert.equal(validate(running), false);
  delete running.startedAt;
  assert.equal(validate(running), false);
});

test("adversarial C1: accepted requires selection fields; capabilities forbids critical", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const data = acceptedBase();
  delete data.selectionStrategy;
  assert.equal(validate(data), false);
  const data2 = acceptedBase();
  delete data2.selectionProfile;
  assert.equal(validate(data2), false);
  const data3 = acceptedBase();
  delete data3.selectionExpiresAt;
  assert.equal(validate(data3), false);
  const crit = acceptedBase();
  crit.selectionStrategy = "capabilities_deterministic";
  crit.selectionProfile = "critical";
  assert.equal(validate(crit), false);
});

test("adversarial C1: retryIndex requires retryOfAttemptId; failed needs errorRef or stopReason", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const retry = acceptedBase();
  retry.retryIndex = 1;
  retry.maxRetriesBudget = 2;
  assert.equal(validate(retry), false);
  const failed = loadJson(
    path.join(EXAMPLES, "execution-attempt-failed.valid.json"),
  );
  delete failed.errorRef;
  delete failed.stopReason;
  assert.equal(validate(failed), false);
});

test("adversarial: legacy contractId/agentRef and ta6 claimId rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(ATTEMPT_SCHEMA_ID);
  const legC = acceptedBase();
  delete legC.executionContractId;
  legC.contractId = "xct:oa-001";
  assert.equal(validate(legC), false);
  const legA = acceptedBase();
  delete legA.selectedAgentRef;
  legA.agentRef = "agent:cursor-docs";
  assert.equal(validate(legA), false);
  const ta6 = acceptedBase();
  ta6.claimId = "clm:x";
  assert.equal(validate(ta6), false);
  ta6.evidenceId = "evd:x";
  delete ta6.claimId;
  assert.equal(validate(ta6), false);
});

test("§25 narratives exist with key phrases (runtime-only coverage)", () => {
  for (const [rel, phrases] of NARRATIVES) {
    const p = path.join(EXAMPLES, rel);
    assert.ok(fs.existsSync(p), `missing narrative ${rel}`);
    const text = fs.readFileSync(p, "utf8");
    for (const phrase of phrases) {
      assert.ok(text.includes(phrase), `${rel} missing phrase ${phrase}`);
    }
  }
});

test("catalog authority matrix rows cover Select Start Cancel Morris auto-safety Record Retry", () => {
  const catalog = fs.readFileSync(
    path.join(PACK, "09-command-event-error-and-transition-catalog.md"),
    "utf8",
  );
  const section = catalog.split("## Matrice d'autorité T-A5")[1];
  assert.ok(section, "authority matrix section missing");
  const head = section.split("## Matrice transitions")[0];
  for (const row of [
    "SelectExecutionAgent",
    "StartExecution",
    "CancelExecutionAttempt",
    "Emergency stop Morris",
    "auto-safety",
    "RecordExecutionResult",
    "RetryExecutionAttempt",
  ]) {
    assert.ok(head.includes(row), `authority matrix missing ${row}`);
  }
});
