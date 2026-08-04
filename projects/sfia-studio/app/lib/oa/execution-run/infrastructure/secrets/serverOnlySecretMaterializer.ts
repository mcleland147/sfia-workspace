/**
 * Server-only secret materialization — NOT exported from the public root barrel.
 * Domain/application must never import this module.
 */
import { assertServerOnly } from "../../server/serverOnly";

export interface ServerOnlySecretMaterializer {
  /**
   * Returns the secret string for infrastructure adapters only.
   * Must never enter events, evidence, fixtures, domain results, or public ports.
   */
  materialize(secretId: string): string | undefined;
}

export function assertServerOnlySecretMaterializer(
  value: unknown,
): asserts value is ServerOnlySecretMaterializer {
  assertServerOnly("oa/execution-run/infrastructure/secrets/serverOnlySecretMaterializer");
  if (
    !value ||
    typeof value !== "object" ||
    typeof (value as ServerOnlySecretMaterializer).materialize !== "function"
  ) {
    throw new Error("Invalid server-only secret materializer");
  }
}
