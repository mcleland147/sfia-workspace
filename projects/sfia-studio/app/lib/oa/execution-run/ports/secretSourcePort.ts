/**
 * SECRET-B — secrets by opaque handle only; never return serializable secret values
 * into domain/application results/events/evidence.
 *
 * Materialization is NOT part of this public port.
 */
export type SecretHandle = {
  readonly id: string;
  readonly present: boolean;
};

export type SecretResolveResult =
  | { readonly ok: true; readonly handle: SecretHandle }
  | {
      readonly ok: false;
      readonly reason: "absent" | "expired" | "revoked" | "invalid_id";
      readonly handle: SecretHandle;
    };

export interface SecretSourcePort {
  /** Resolve metadata only — never expose the secret string through this port. */
  resolve(secretId: string): Promise<SecretResolveResult>;
}
