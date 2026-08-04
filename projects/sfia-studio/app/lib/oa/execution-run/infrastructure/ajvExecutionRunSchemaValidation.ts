/**
 * AJV Draft-07 boundary validation for D2-D1 — infrastructure only.
 * Domain/application must not import this module.
 */
import fs from "node:fs";
import path from "node:path";
import Ajv from "ajv";
import type {
  ExecutionRunSchemaName,
  ExecutionRunSchemaValidationPort,
  ExecutionRunSchemaValidationResult,
} from "../ports/executionRunSchemaValidation";

const MAX_ERRORS = 20;

const SCHEMA_FILES: Record<ExecutionRunSchemaName, string> = {
  "execution-intent": "execution-intent.schema.json",
  "execution-context": "execution-context.schema.json",
  "provider-capability-descriptor": "provider-capability-descriptor.schema.json",
  "validation-outcome": "validation-outcome.schema.json",
  "execution-run": "execution-run.schema.json",
  "external-result": "external-result.schema.json",
  "execution-evidence": "execution-evidence.schema.json",
  "source-disclosure": "source-disclosure.schema.json",
  "human-decision-gate": "human-decision-gate.schema.json",
  "usage-summary": "usage-summary.schema.json",
  "normalized-failure": "normalized-failure.schema.json",
  "create-execution-run-input": "create-execution-run-input.schema.json",
  "transition-execution-run-input": "transition-execution-run-input.schema.json",
};

const SCHEMA_IDS: Record<ExecutionRunSchemaName, string> = {
  "execution-intent":
    "https://sfia.local/schemas/d2-d1/execution-intent.schema.json",
  "execution-context":
    "https://sfia.local/schemas/d2-d1/execution-context.schema.json",
  "provider-capability-descriptor":
    "https://sfia.local/schemas/d2-d1/provider-capability-descriptor.schema.json",
  "validation-outcome":
    "https://sfia.local/schemas/d2-d1/validation-outcome.schema.json",
  "execution-run": "https://sfia.local/schemas/d2-d1/execution-run.schema.json",
  "external-result":
    "https://sfia.local/schemas/d2-d1/external-result.schema.json",
  "execution-evidence":
    "https://sfia.local/schemas/d2-d1/execution-evidence.schema.json",
  "source-disclosure":
    "https://sfia.local/schemas/d2-d1/source-disclosure.schema.json",
  "human-decision-gate":
    "https://sfia.local/schemas/d2-d1/human-decision-gate.schema.json",
  "usage-summary": "https://sfia.local/schemas/d2-d1/usage-summary.schema.json",
  "normalized-failure":
    "https://sfia.local/schemas/d2-d1/normalized-failure.schema.json",
  "create-execution-run-input":
    "https://sfia.local/schemas/d2-d1/create-execution-run-input.schema.json",
  "transition-execution-run-input":
    "https://sfia.local/schemas/d2-d1/transition-execution-run-input.schema.json",
};

/** Deterministic load order: leaves before composites that $ref them. */
const LOAD_ORDER: readonly ExecutionRunSchemaName[] = [
  "normalized-failure",
  "execution-intent",
  "execution-context",
  "provider-capability-descriptor",
  "validation-outcome",
  "external-result",
  "execution-evidence",
  "source-disclosure",
  "human-decision-gate",
  "usage-summary",
  "execution-run",
  "create-execution-run-input",
  "transition-execution-run-input",
];

export class AjvExecutionRunSchemaValidation
  implements ExecutionRunSchemaValidationPort
{
  private readonly ajv: Ajv.Ajv;
  private ready = false;
  private readonly schemasDir: string;

  constructor(schemasDir?: string) {
    this.schemasDir = schemasDir ?? path.join(__dirname, "../schemas");
    this.ajv = new Ajv({
      allErrors: true,
      schemaId: "auto",
      meta: true,
      validateSchema: true,
      format: "full",
      unknownFormats: "ignore",
    });
  }

  private ensureLoaded(): void {
    if (this.ready) return;
    for (const name of LOAD_ORDER) {
      const file = SCHEMA_FILES[name];
      const full = path.join(this.schemasDir, file);
      const raw = JSON.parse(fs.readFileSync(full, "utf8")) as object;
      this.ajv.addSchema(raw);
    }
    this.ready = true;
  }

  /** Test helper: confirms every named schema compiled and resolves. */
  listLoadedSchemaIds(): string[] {
    this.ensureLoaded();
    return LOAD_ORDER.map((name) => SCHEMA_IDS[name]);
  }

  async validate(
    schema: ExecutionRunSchemaName,
    value: unknown,
  ): Promise<ExecutionRunSchemaValidationResult> {
    try {
      if (value === null || value === undefined) {
        return { ok: false, errors: ["value_null_or_undefined"] };
      }
      this.ensureLoaded();
      const validate = this.ajv.getSchema(SCHEMA_IDS[schema]);
      if (!validate) {
        return { ok: false, errors: ["schema_not_loaded"] };
      }
      const ok = validate(value) as boolean;
      if (ok) return { ok: true };
      const errors = (validate.errors ?? [])
        .slice(0, MAX_ERRORS)
        .map((e) => `${e.dataPath || "/"} ${e.message ?? "invalid"}`.trim());
      return { ok: false, errors: errors.length ? errors : ["schema_invalid"] };
    } catch {
      return { ok: false, errors: ["schema_validation_internal_failure"] };
    }
  }
}
