export type SchemaValidationSuccess = {
  ok: true;
};

export type SchemaValidationFailure = {
  ok: false;
  errors: string[];
};

export type SchemaValidationResult =
  | SchemaValidationSuccess
  | SchemaValidationFailure;

export interface SchemaValidationPort {
  validateDoctrinePackageManifest(
    value: unknown,
  ): Promise<SchemaValidationResult>;
}
