import type {
  SecretResolveResult,
  SecretSourcePort,
} from "../../ports/secretSourcePort";
import type { ServerOnlySecretMaterializer } from "./serverOnlySecretMaterializer";

/**
 * Fake secret source — resolves presence only on the public port.
 * Materialization is a separate server-only surface (not on SecretSourcePort).
 */
export class FakeSecretSourceAdapter
  implements SecretSourcePort, ServerOnlySecretMaterializer
{
  constructor(private readonly presentIds: ReadonlySet<string> = new Set(["TEST_SECRET"])) {}

  async resolve(secretId: string): Promise<SecretResolveResult> {
    if (!secretId || typeof secretId !== "string") {
      return { ok: false, reason: "invalid_id", handle: { id: String(secretId), present: false } };
    }
    if (!this.presentIds.has(secretId)) {
      return { ok: false, reason: "absent", handle: { id: secretId, present: false } };
    }
    return { ok: true, handle: { id: secretId, present: true } };
  }

  /** Server-only — not part of SecretSourcePort. */
  materialize(secretId: string): string | undefined {
    if (!this.presentIds.has(secretId)) return undefined;
    return `__FAKE_OPAQUE_${secretId}__`;
  }
}
