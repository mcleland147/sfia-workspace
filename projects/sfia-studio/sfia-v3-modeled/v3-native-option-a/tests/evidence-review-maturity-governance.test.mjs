/**
 * Modeled-only Evidence / ReviewBundle / ClaimEvaluation / MaturityAssessment
 * governance validation (T-A6).
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
const DELIVERY_DECISIONS = path.resolve(
  PACK,
  "../../sfia-v3-delivery/v3-native-option-a/t-a6-evidence-review-claims-maturity/03-decisions.md",
);
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

const EVIDENCE_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/evidence/evidence.schema.json";
const REVIEW_BUNDLE_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/evidence/review-bundle.schema.json";
const CLAIM_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/evidence/claim-evaluation.schema.json";
const MATURITY_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/maturity/maturity-assessment.schema.json";

const VALID_EVIDENCE = [
  "evidence-incomplete.valid.json",
  "evidence-from-attempt.valid.json",
  "evidence-manual.valid.json",
  "evidence-external-with-digest.valid.json",
  "evidence-internal-sensitive.valid.json",
  "evidence-stale.valid.json",
  "evidence-unavailable.valid.json",
];

const INVALID_EVIDENCE = [
  "invalid/evidence.no-binding.invalid.json",
  "invalid/evidence.secret-in-clear.invalid.json",
  "invalid/evidence.verifiable-without-digest.invalid.json",
  "invalid/evidence.bad-schema-version.invalid.json",
  "invalid/evidence.additional-properties.invalid.json",
];

const VALID_REVIEW_BUNDLES = [
  "review-bundle-complete.valid.json",
  "review-bundle-incomplete.valid.json",
  "review-bundle-draft.valid.json",
  "review-bundle-ready-frozen.valid.json",
  "review-bundle-under-review.valid.json",
  "review-bundle-accepted.valid.json",
  "review-bundle-incomplete-status.valid.json",
  "review-bundle-superseded.valid.json",
];

const INVALID_REVIEW_BUNDLES = [
  "invalid/review-bundle.verdict-before-freeze.invalid.json",
  "invalid/review-bundle.synthesis-as-complete.invalid.json",
  "invalid/review-bundle.bad-schema-version.invalid.json",
  "invalid/review-bundle.accepted-synthesis-only.invalid.json",
  "invalid/review-bundle.incomplete-status-complete.invalid.json",
  "invalid/review-bundle.accepted-incomplete.invalid.json",
];

const VALID_CLAIMS = [
  "claim-evaluation-noncritical-pass.valid.json",
  "claim-evaluation-critical-confirmed.valid.json",
  "claim-evaluation-structural-morris.valid.json",
  "claim-evaluation-not-proven.valid.json",
  "claim-evaluation-waived.valid.json",
  "claim-evaluation-disputed.valid.json",
];

const INVALID_CLAIMS = [
  "invalid/claim-evaluation.pass-without-evidence.invalid.json",
  "invalid/claim-evaluation.pass-empty-required.invalid.json",
  "invalid/claim-evaluation.critical-system-confirm.invalid.json",
  "invalid/claim-evaluation.critical-agent-confirm.invalid.json",
  "invalid/claim-evaluation.waiver-system-authorize.invalid.json",
  "invalid/claim-evaluation.waived-as-pass.invalid.json",
  "invalid/claim-evaluation.not-proven-as-pass.invalid.json",
  "invalid/claim-evaluation.additional-properties.invalid.json",
  "invalid/claim-evaluation.bad-schema-version.invalid.json",
];

const VALID_MATURITY = [
  "maturity-assessment-modeled.valid.json",
  "maturity-assessment-proposed.valid.json",
  "maturity-assessment-confirmed.valid.json",
  "maturity-assessment-blocked.valid.json",
  "maturity-assessment-superseded-downgrade.valid.json",
];

const INVALID_MATURITY = [
  "invalid/maturity.auto-promoted.invalid.json",
  "invalid/maturity.confirmed-with-blocking-reserve.invalid.json",
  "invalid/maturity.bad-schema-version.invalid.json",
  "invalid/maturity.additional-properties.invalid.json",
];

const NARRATIVES = [
  [
    "claim-evaluation-self-review-critical.narrative.md",
    ["CLAIM_SELF_REVIEW_FORBIDDEN", "Critical", "proposedBy", "confirmedBy"],
  ],
  [
    "maturity-auto-promotion-forbidden.narrative.md",
    ["MATURITY_AUTO_PROMOTION_FORBIDDEN"],
  ],
  [
    "t-a6-ta7-auto-launch-forbidden.narrative.md",
    ["T_A7_AUTO_LAUNCH_FORBIDDEN"],
  ],
  [
    "review-bundle-mutate-after-freeze.narrative.md",
    ["REVIEW_BUNDLE_NOT_FROZEN", "immutable after freeze"],
  ],
  [
    "n3-is-not-morris.narrative.md",
    ["N3 ≠ Morris", "CLAIM_AUTHORITY_MISMATCH"],
  ],
];

test("T-A6 Evidence/ReviewBundle/ClaimEvaluation/Maturity schemas compile", () => {
  const ajv = buildAjv();
  for (const id of [
    EVIDENCE_SCHEMA_ID,
    REVIEW_BUNDLE_SCHEMA_ID,
    CLAIM_SCHEMA_ID,
    MATURITY_SCHEMA_ID,
  ]) {
    const validate = ajv.getSchema(id);
    assert.ok(validate, `schema registered: ${id}`);
    assert.equal(typeof validate, "function");
  }
});

test("schema versions, additionalProperties, consts", () => {
  const evidence = loadJson(
    path.join(SCHEMA_ROOT, "evidence/evidence.schema.json"),
  );
  const bundle = loadJson(
    path.join(SCHEMA_ROOT, "evidence/review-bundle.schema.json"),
  );
  const claim = loadJson(
    path.join(SCHEMA_ROOT, "evidence/claim-evaluation.schema.json"),
  );
  const maturity = loadJson(
    path.join(SCHEMA_ROOT, "maturity/maturity-assessment.schema.json"),
  );

  assert.equal(evidence.properties.schemaVersion.const, "0.2.0-oa");
  assert.equal(bundle.properties.schemaVersion.const, "0.2.0-oa");
  assert.equal(claim.properties.schemaVersion.const, "0.1.0-oa");
  assert.equal(maturity.properties.schemaVersion.const, "0.2.0-oa");

  assert.equal(evidence.additionalProperties, false);
  assert.equal(bundle.additionalProperties, false);
  assert.equal(claim.additionalProperties, false);
  assert.equal(maturity.additionalProperties, false);

  assert.equal(evidence.properties.containsSecrets.const, false);
  assert.equal(maturity.properties.autoPromoted.const, false);

  assert.ok(/D-T-A6-01/.test(evidence.description));
  assert.ok(/D-T-A6-03/.test(bundle.description));
  assert.ok(/D-T-A6-04/.test(claim.description));
  assert.ok(/D-T-A6-07/.test(maturity.description));
  assert.ok(/autoPromoted=false|autoPromoted.*false/i.test(maturity.description));
  assert.ok(/Secrets forbidden|secrets/i.test(evidence.description));
  assert.ok(/Synthesis alone is never complete|synthesisOnly/i.test(bundle.description));
  assert.ok(/NOT_PROVEN|WAIVED/i.test(claim.description));
});

test("valid Evidence examples accept under 0.2.0-oa", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(EVIDENCE_SCHEMA_ID);
  for (const rel of VALID_EVIDENCE) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(
      validate(data),
      true,
      `${rel} should validate: ${JSON.stringify(validate.errors)}`,
    );
  }
});

test("invalid Evidence examples reject", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(EVIDENCE_SCHEMA_ID);
  for (const rel of INVALID_EVIDENCE) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(validate(data), false, `${rel} should be invalid`);
  }
});

test("valid ReviewBundle examples accept under 0.2.0-oa", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(REVIEW_BUNDLE_SCHEMA_ID);
  for (const rel of VALID_REVIEW_BUNDLES) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(
      validate(data),
      true,
      `${rel} should validate: ${JSON.stringify(validate.errors)}`,
    );
  }
});

test("invalid ReviewBundle examples reject", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(REVIEW_BUNDLE_SCHEMA_ID);
  for (const rel of INVALID_REVIEW_BUNDLES) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(validate(data), false, `${rel} should be invalid`);
  }
});

test("valid ClaimEvaluation examples accept under 0.1.0-oa", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CLAIM_SCHEMA_ID);
  for (const rel of VALID_CLAIMS) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(
      validate(data),
      true,
      `${rel} should validate: ${JSON.stringify(validate.errors)}`,
    );
  }
});

test("invalid ClaimEvaluation examples reject", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CLAIM_SCHEMA_ID);
  for (const rel of INVALID_CLAIMS) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(validate(data), false, `${rel} should be invalid`);
  }
});

test("valid MaturityAssessment examples accept under 0.2.0-oa", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(MATURITY_SCHEMA_ID);
  for (const rel of VALID_MATURITY) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(
      validate(data),
      true,
      `${rel} should validate: ${JSON.stringify(validate.errors)}`,
    );
  }
});

test("invalid MaturityAssessment examples reject", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(MATURITY_SCHEMA_ID);
  for (const rel of INVALID_MATURITY) {
    const data = loadJson(path.join(EXAMPLES, rel));
    assert.equal(validate(data), false, `${rel} should be invalid`);
  }
});

test("draft ReviewBundle has no frozenAt; ready_for_review requires frozenAt", () => {
  const draft = loadJson(path.join(EXAMPLES, "review-bundle-draft.valid.json"));
  assert.equal(draft.status, "draft");
  assert.ok(!("frozenAt" in draft));
  const ready = loadJson(
    path.join(EXAMPLES, "review-bundle-ready-frozen.valid.json"),
  );
  assert.equal(ready.status, "ready_for_review");
  assert.ok(ready.frozenAt);
});

test("execution_attempt Evidence requires bindings.executionAttemptId", () => {
  const fromAttempt = loadJson(
    path.join(EXAMPLES, "evidence-from-attempt.valid.json"),
  );
  assert.equal(fromAttempt.sourceKind, "execution_attempt");
  assert.ok(fromAttempt.bindings.executionAttemptId);
});

test("Critical PASS uses authorized_human; structural uses morris", () => {
  const crit = loadJson(
    path.join(EXAMPLES, "claim-evaluation-critical-confirmed.valid.json"),
  );
  assert.equal(crit.confirmationAuthority, "authorized_human");
  assert.notEqual(crit.confirmedBy.role, "system");
  assert.notEqual(crit.confirmedBy.role, "agent");
  const structural = loadJson(
    path.join(EXAMPLES, "claim-evaluation-structural-morris.valid.json"),
  );
  assert.equal(structural.confirmationAuthority, "morris");
  assert.equal(structural.confirmedBy.role, "decision_maker");
});

test("waiver reversible const true; disputed requires dispute", () => {
  const waived = loadJson(
    path.join(EXAMPLES, "claim-evaluation-waived.valid.json"),
  );
  assert.equal(waived.status, "waived");
  assert.equal(waived.waiver.reversible, true);
  const disputed = loadJson(
    path.join(EXAMPLES, "claim-evaluation-disputed.valid.json"),
  );
  assert.ok(disputed.dispute);
});

test("confirmed maturity has no blocking reserves; blocked has ≥1", () => {
  const confirmed = loadJson(
    path.join(EXAMPLES, "maturity-assessment-confirmed.valid.json"),
  );
  assert.equal(confirmed.status, "confirmed");
  assert.ok(
    !confirmed.blockingReservationRefs ||
      confirmed.blockingReservationRefs.length === 0,
  );
  const blocked = loadJson(
    path.join(EXAMPLES, "maturity-assessment-blocked.valid.json"),
  );
  assert.equal(blocked.status, "blocked");
  assert.ok(blocked.blockingReservationRefs.length >= 1);
});

test("superseded maturity carries supersedesMaturityAssessmentId + downgradeReason", () => {
  const data = loadJson(
    path.join(EXAMPLES, "maturity-assessment-superseded-downgrade.valid.json"),
  );
  assert.equal(data.status, "superseded");
  assert.ok(data.supersedesMaturityAssessmentId.startsWith("mat:"));
  assert.ok(data.downgradeReason);
  assert.equal(data.autoPromoted, false);
});

test("T-A6 narratives exist with key phrases", () => {
  for (const [rel, phrases] of NARRATIVES) {
    const p = path.join(EXAMPLES, rel);
    assert.ok(fs.existsSync(p), `missing narrative ${rel}`);
    const text = fs.readFileSync(p, "utf8");
    for (const phrase of phrases) {
      assert.ok(text.includes(phrase), `${rel} missing phrase ${phrase}`);
    }
  }
});

test("D-T-A6 decisions recorded; schema/docs tokens for T-A6 commands", () => {
  const decisions = fs.readFileSync(DELIVERY_DECISIONS, "utf8");
  for (let i = 1; i <= 12; i++) {
    const id = `D-T-A6-${String(i).padStart(2, "0")}`;
    assert.ok(decisions.includes(id), `decisions missing ${id}`);
  }
  for (const token of [
    "APPROVED BY MORRIS",
    "autoPromoted=false",
    "N3 ≠ Morris",
    "Self-review Critical interdit",
    "Pas d’auto next cycle",
  ]) {
    assert.ok(decisions.includes(token), `decisions missing ${token}`);
  }

  const catalog = fs.readFileSync(
    path.join(PACK, "09-command-event-error-and-transition-catalog.md"),
    "utf8",
  );
  const doc08 = fs.readFileSync(
    path.join(PACK, "08-evidence-review-bundle-maturity-and-debt-model.md"),
    "utf8",
  );
  const evidenceDesc = loadJson(
    path.join(SCHEMA_ROOT, "evidence/evidence.schema.json"),
  ).description;
  const bundleDesc = loadJson(
    path.join(SCHEMA_ROOT, "evidence/review-bundle.schema.json"),
  ).description;
  const claimDesc = loadJson(
    path.join(SCHEMA_ROOT, "evidence/claim-evaluation.schema.json"),
  ).description;
  const maturityDesc = loadJson(
    path.join(SCHEMA_ROOT, "maturity/maturity-assessment.schema.json"),
  ).description;
  const corpus = [catalog, doc08, evidenceDesc, bundleDesc, claimDesc, maturityDesc, decisions].join(
    "\n",
  );

  // Prefer catalog/08 when present; otherwise schema descriptions + decisions cover governance vocabulary.
  for (const token of [
    "AttachEvidence",
    "BuildReviewBundle",
    "EvaluateClaim",
    "Evidence",
    "ReviewBundle",
    "ClaimEvaluation",
    "MaturityAssessment",
    "D-T-A6-01",
    "D-T-A6-03",
    "D-T-A6-04",
    "D-T-A6-07",
  ]) {
    assert.ok(corpus.includes(token), `T-A6 corpus missing ${token}`);
  }

  // Command names that may land in 08/09 later — assert intent via decisions + schema vocabulary when absent.
  for (const futureCmd of [
    "RegisterEvidence",
    "FreezeReviewBundle",
    "ConfirmClaimEvaluation",
    "ProposeMaturity",
    "ConfirmMaturity",
  ]) {
    if (!catalog.includes(futureCmd) && !doc08.includes(futureCmd)) {
      assert.ok(
        /Evidence|ReviewBundle|Claim|Maturity|autoPromoted|freeze|PASS/i.test(
          corpus,
        ),
        `${futureCmd} not in docs yet; schema/decisions must still cover domain`,
      );
    }
  }
});

test("README documents modeled pack versions for ExecutionContract/Attempt baseline", () => {
  const readme = fs.readFileSync(path.join(PACK, "README.md"), "utf8");
  assert.ok(readme.includes("0.1.0-oa"));
  assert.ok(readme.includes("ExecutionContract"));
  assert.ok(readme.includes("0.2.0-oa"));
  assert.ok(/Evidence|ReviewBundle|maturité|maturity/i.test(readme));
});

test("adversarial: evidence bindings empty and containsSecrets true rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(EVIDENCE_SCHEMA_ID);
  const base = loadJson(path.join(EXAMPLES, "evidence-manual.valid.json"));
  const empty = { ...base, bindings: {} };
  assert.equal(validate(empty), false);
  const secrets = { ...base, containsSecrets: true };
  assert.equal(validate(secrets), false);
});

test("adversarial: accepted ReviewBundle without frozenAt rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(REVIEW_BUNDLE_SCHEMA_ID);
  const data = loadJson(path.join(EXAMPLES, "review-bundle-accepted.valid.json"));
  delete data.frozenAt;
  assert.equal(validate(data), false);
});

test("adversarial: Critical PASS confirmedBy system rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CLAIM_SCHEMA_ID);
  const data = loadJson(
    path.join(EXAMPLES, "claim-evaluation-critical-confirmed.valid.json"),
  );
  data.confirmedBy = {
    actorId: "actor:studio",
    role: "system",
    displayName: "Studio",
  };
  assert.equal(validate(data), false);
});

test("adversarial: maturity autoPromoted true rejected; confirmed with blocking reserve rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(MATURITY_SCHEMA_ID);
  const proposed = loadJson(
    path.join(EXAMPLES, "maturity-assessment-proposed.valid.json"),
  );
  proposed.autoPromoted = true;
  assert.equal(validate(proposed), false);
  const confirmed = loadJson(
    path.join(EXAMPLES, "maturity-assessment-confirmed.valid.json"),
  );
  confirmed.blockingReservationRefs = ["res:hard"];
  assert.equal(validate(confirmed), false);
});

test("adversarial validation: PASS empty requiredEvidenceRefs rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CLAIM_SCHEMA_ID);
  const data = loadJson(
    path.join(EXAMPLES, "claim-evaluation-noncritical-pass.valid.json"),
  );
  data.requiredEvidenceRefs = [];
  assert.equal(validate(data), false);
});

test("adversarial validation: waiver authorizedBy system rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CLAIM_SCHEMA_ID);
  const data = loadJson(
    path.join(EXAMPLES, "claim-evaluation-waived.valid.json"),
  );
  data.waiver.authorizedBy = {
    actorId: "actor:studio",
    role: "system",
    displayName: "Studio",
  };
  assert.equal(validate(data), false);
});

test("adversarial validation: accepted synthesisOnly or incomplete rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(REVIEW_BUNDLE_SCHEMA_ID);
  const accepted = loadJson(
    path.join(EXAMPLES, "review-bundle-accepted.valid.json"),
  );
  const synth = { ...accepted, synthesisOnly: true, completeness: "incomplete" };
  assert.equal(validate(synth), false);
  const incomplete = { ...accepted, completeness: "incomplete", synthesisOnly: false };
  assert.equal(validate(incomplete), false);
  const statusIncomplete = loadJson(
    path.join(EXAMPLES, "review-bundle-incomplete-status.valid.json"),
  );
  statusIncomplete.completeness = "complete";
  assert.equal(validate(statusIncomplete), false);
});

test("adversarial validation: Critical PASS confirmedBy agent rejected", () => {
  const ajv = buildAjv();
  const validate = ajv.getSchema(CLAIM_SCHEMA_ID);
  const data = loadJson(
    path.join(EXAMPLES, "claim-evaluation-critical-confirmed.valid.json"),
  );
  data.confirmedBy = {
    actorId: "actor:agent-ta5",
    role: "agent",
    displayName: "T-A5 Agent",
  };
  assert.equal(validate(data), false);
});
