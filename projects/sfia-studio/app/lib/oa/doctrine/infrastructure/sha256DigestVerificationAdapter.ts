import {
  computeManifestDigest,
  digestsEqual,
  isDigestFormat,
} from "../domain/digest";
import type { Digest } from "../domain/types";
import type { DigestVerificationPort } from "../ports/digestVerificationPort";

export class Sha256DigestVerificationAdapter implements DigestVerificationPort {
  computeManifestDigest(manifestWithoutDigestOrFull: unknown): Digest {
    if (
      !manifestWithoutDigestOrFull ||
      typeof manifestWithoutDigestOrFull !== "object"
    ) {
      throw new Error("digest_input_invalid");
    }
    return computeManifestDigest(
      manifestWithoutDigestOrFull as Parameters<typeof computeManifestDigest>[0],
    );
  }

  verify(expected: Digest, observed: Digest): boolean {
    if (!isDigestFormat(expected) || !isDigestFormat(observed)) {
      return false;
    }
    return digestsEqual(expected, observed);
  }
}
