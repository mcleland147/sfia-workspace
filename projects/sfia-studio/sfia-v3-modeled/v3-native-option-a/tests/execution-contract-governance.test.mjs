/**
 * Modeled-only ExecutionContract governance validation (T-A4 rework).
 * Uses ajv@6 from projects/sfia-studio/app/node_modules — no package.json changes.
 * Forbidden: app/lib/oa/** runtime, app/__tests__/oa/**.
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
  // Draft-07 $id
  for (const file of collectSchemas(SCHEMA_ROOT)) {
    const schema = loadJson(file);
    if (schema.$id) ajv.addSchema(schema);
  }
  return ajv;
}

const CONTRACT_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/execution/execution-contract.schema.json";

const VALID_FILES = [
  "execution-contract-draft.valid.json",
  "execution-contract.valid.json",
  "execution-contract-morris.valid.json",
  "execution-contract-superseding.valid.json",
  "execution-contract-superseded.valid.json",
];

const INVALID_MUST_FAIL = [
  "invalid/execution-contract.missing-authority.invalid.json",
  "invalid/execution-contract.arbitrary-authority.invalid.json",
  "invalid/execution-contract.superseded-without-reason.invalid.json",
  "invalid/execution-contract.supersedes-without-reason.invalid.json",
];

test("ExecutionContract schema compiles with resolved $refs", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CONTRACT_SCHEMA_ID);
  assert.ok(validate, "schema registered");
  assert.equal(typeof validate, "function");
});

test("ExecutionContract schemaVersion is 0.2.0-oa breaking bump", () => {
  const schema = loadJson(
    path.join(SCHEMA_ROOT, "execution/execution-contract.schema.json"),
  );
  assert.equal(schema.properties.schemaVersion.const, "0.2.0-oa");
  assert.equal(schema.additionalProperties, false);
  assert.deepEqual(schema.properties.requiredAuthority.enum, [
    "N1",
    "N2",
    "N3",
    "MORRIS",
  ]);
  assert.ok(schema.properties.supersedesExecutionContractId);
  assert.ok(schema.properties.supersessionReason);
});

test("valid examples accept under ExecutionContract schema", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CONTRACT_SCHEMA_ID);
  for (const rel of VALID_FILES) {
    const data = loadJson(path.join(EXAMPLES, rel));
    const ok = validate(data);
    assert.equal(
      ok,
      true,
      `${rel} should validate: ${JSON.stringify(validate.errors)}`,
    );
  }
});

test("invalid examples reject under ExecutionContract schema", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CONTRACT_SCHEMA_ID);
  for (const rel of INVALID_MUST_FAIL) {
    const data = loadJson(path.join(EXAMPLES, rel));
    const ok = validate(data);
    assert.equal(ok, false, `${rel} should be invalid`);
  }
});

test("arbitrary authority string morris-N3 is rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CONTRACT_SCHEMA_ID);
  const data = loadJson(
    path.join(
      EXAMPLES,
      "invalid/execution-contract.arbitrary-authority.invalid.json",
    ),
  );
  assert.equal(validate(data), false);
  const codes = (validate.errors || []).map((e) => e.message + " " + e.dataPath);
  assert.ok(
    (validate.errors || []).some(
      (e) => e.keyword === "enum" || String(e.message).includes("enum"),
    ),
    `expected enum error, got ${JSON.stringify(validate.errors)} / ${codes}`,
  );
});

test("MORRIS enum value accepted", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CONTRACT_SCHEMA_ID);
  const data = loadJson(
    path.join(EXAMPLES, "execution-contract-morris.valid.json"),
  );
  assert.equal(validate(data), true, JSON.stringify(validate.errors));
});

test("supersessionReason required with supersedesExecutionContractId", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CONTRACT_SCHEMA_ID);
  const data = loadJson(
    path.join(
      EXAMPLES,
      "invalid/execution-contract.supersedes-without-reason.invalid.json",
    ),
  );
  assert.equal(validate(data), false);
});

test("status=superseded requires supersessionReason", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CONTRACT_SCHEMA_ID);
  const data = loadJson(
    path.join(
      EXAMPLES,
      "invalid/execution-contract.superseded-without-reason.invalid.json",
    ),
  );
  assert.equal(validate(data), false);
});

test("self-supersession is schema-accepted; runtime must reject (documented)", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CONTRACT_SCHEMA_ID);
  const data = loadJson(
    path.join(
      EXAMPLES,
      "invalid/execution-contract.self-supersession.invalid.json",
    ),
  );
  // Draft-07 cannot compare executionContractId === supersedesExecutionContractId
  assert.equal(
    validate(data),
    true,
    "schema gap expected; runtime invariant owns rejection",
  );
});

test("catalog documents ConfirmExecutionContract and SupersedeExecutionContract", () => {
  const catalog = fs.readFileSync(
    path.join(PACK, "09-command-event-error-and-transition-catalog.md"),
    "utf8",
  );
  for (const token of [
    "ConfirmExecutionContract",
    "SupersedeExecutionContract",
    "ExecutionContractSuperseded",
    "ExecutionContractValidated",
    "ExecutionContractConfirmationRequired",
    "ExecutionContractCancelled",
  ]) {
    assert.ok(catalog.includes(token), `missing ${token}`);
  }
});
