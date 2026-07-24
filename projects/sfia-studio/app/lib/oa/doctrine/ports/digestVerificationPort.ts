import type { Digest } from "../domain/types";

export interface DigestVerificationPort {
  computeManifestDigest(manifestWithoutDigestOrFull: unknown): Digest;
  verify(expected: Digest, observed: Digest): boolean;
}
