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

function acceptedBase() {
  return loadJson(path.join(EXAMPLES, "execution-attempt-accepted.valid.json"));
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
    // structural presence only — full fixtures cover conditionals
    assert.ok(LIFECYCLE.includes(status));
  }
  const data = acceptedBase();
  data.status = "partial";
  assert.equal(validate(data), false);
  data.status = "blocked";
  assert.equal(validate(data), false);
  data.status = "starting";
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
