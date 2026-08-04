import type {
  SecretResolveResult,
  SecretSourcePort,
} from "../../ports/secretSourcePort";
import type { ServerOnlySecretMaterializer } from "./serverOnlySecretMaterializer";

/** Controlled local env adapter — presence via process.env without leaking into domain DTOs. */
export class EnvSecretSourceAdapter
  implements SecretSourcePort, ServerOnlySecretMaterializer
{
  async resolve(secretId: string): Promise<SecretResolveResult> {
    if (!secretId || !/^[A-Z][A-Z0-9_]*$/.test(secretId)) {
      return { ok: false, reason: "invalid_id", handle: { id: String(secretId), present: false } };
    }
    const present = typeof process.env[secretId] === "string" && process.env[secretId]!.length > 0;
    if (!present) {
      return { ok: false, reason: "absent", handle: { id: secretId, present: false } };
    }
    return { ok: true, handle: { id: secretId, present: true } };
  }

  /** Server-only — not part of SecretSourcePort. */
  materialize(secretId: string): string | undefined {
    if (!/^[A-Z][A-Z0-9_]*$/.test(secretId)) return undefined;
    const v = process.env[secretId];
    return typeof v === "string" && v.length > 0 ? v : undefined;
  }
}
