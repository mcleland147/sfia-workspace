/**
 * AJV Draft-07 SchemaValidationPort — consumes modeled Option A schemas.
 * Runtime depends on direct dependency ajv@6 (Draft-07).
 */
import fs from "node:fs";
import path from "node:path";
import Ajv from "ajv";
import type {
  SchemaValidationPort,
  SchemaValidationResult,
} from "../ports/schemaValidationPort";

const MANIFEST_SCHEMA_ID =
  "https://sfia.local/schemas/v3-modeled/v3-native-option-a/doctrine/doctrine-package-manifest.schema.json";

const MAX_ERRORS = 20;

export type AjvSchemaValidationAdapterOptions = {
  /** Absolute path to …/sfia-v3-modeled/v3-native-option-a/schemas */
  schemasRoot: string;
};

function loadJson(filePath: string): object {
  return JSON.parse(fs.readFileSync(filePath, "utf8")) as object;
}

export class AjvSchemaValidationAdapter implements SchemaValidationPort {
  private readonly ajv: Ajv.Ajv;
  private ready = false;

  constructor(private readonly options: AjvSchemaValidationAdapterOptions) {
    this.ajv = new Ajv({
      allErrors: true,
      schemaId: "auto",
      meta: true,
      validateSchema: true,
      // Draft-07 format support for date-time
      format: "full",
      unknownFormats: "ignore",
    });
  }

  private ensureLoaded(): void {
    if (this.ready) return;
    const root = path.resolve(this.options.schemasRoot);
    const commonDir = path.join(root, "common");
    const doctrineDir = path.join(root, "doctrine");

    const commonFiles = [
      "digest.schema.json",
      "identifier.schema.json",
      "timestamp.schema.json",
      "actor-reference.schema.json",
      "provenance-record.schema.json",
    ];
    for (const file of commonFiles) {
      this.ajv.addSchema(loadJson(path.join(commonDir, file)));
    }
    this.ajv.addSchema(
      loadJson(path.join(doctrineDir, "doctrine-package-manifest.schema.json")),
    );
    this.ajv.addSchema(
      loadJson(path.join(doctrineDir, "doctrine-package-ref.schema.json")),
    );
    this.ready = true;
  }

  async validateDoctrinePackageManifest(
    value: unknown,
  ): Promise<SchemaValidationResult> {
    this.ensureLoaded();
    const validate = this.ajv.getSchema(MANIFEST_SCHEMA_ID);
    if (!validate) {
      return { ok: false, errors: ["manifest_schema_not_loaded"] };
    }
    const ok = validate(value) as boolean;
    if (ok) return { ok: true };
    const errors = (validate.errors ?? [])
      .slice(0, MAX_ERRORS)
      .map((e) => `${e.dataPath || "/"} ${e.message ?? "invalid"}`.trim());
    return { ok: false, errors: errors.length ? errors : ["schema_invalid"] };
  }
}
