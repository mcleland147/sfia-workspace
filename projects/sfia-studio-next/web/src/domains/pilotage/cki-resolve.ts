import { createHash } from "crypto";
import { existsSync, readFileSync, readdirSync } from "fs";
import { resolve } from "path";

/** Initial catalogue: one cycle type, one CKI specialty. Files live in projects/sfia-studio-next/cki. */
export const CYCLE_TYPES = [
  "CADRAGE",
  "CONCEPTION_FONCTIONNELLE",
  "ARCHITECTURE_FONCTIONNELLE",
  "UX_UI",
  "BACKLOG",
  "ARCHITECTURE_TECHNIQUE",
  "INTEGRATION_DEVOPS",
  "DELIVERY",
  "QA_VALIDATION",
  "SECURITE",
  "DEPLOIEMENT_RELEASE",
  "OBSERVABILITE",
  "PR_READINESS",
  "POST_MERGE",
  "CAPITALISATION",
] as const;

export type CycleType = (typeof CYCLE_TYPES)[number];

export const CYCLE_CKI: Record<CycleType, string> = {
  CADRAGE: "01-cadrage",
  CONCEPTION_FONCTIONNELLE: "02-conception-fonctionnelle",
  ARCHITECTURE_FONCTIONNELLE: "03-architecture-fonctionnelle",
  UX_UI: "04-ux-ui",
  BACKLOG: "05-backlog-user-stories",
  ARCHITECTURE_TECHNIQUE: "06-architecture-technique",
  INTEGRATION_DEVOPS: "07-integration-devops",
  DELIVERY: "08-delivery-implementation",
  QA_VALIDATION: "09-qa-validation",
  SECURITE: "10-securite-rssi",
  DEPLOIEMENT_RELEASE: "11-deploiement-release",
  OBSERVABILITE: "12-observabilite-run-readiness",
  PR_READINESS: "13-pr-readiness",
  POST_MERGE: "14-post-merge",
  CAPITALISATION: "15-capitalisation-rex",
};

/** Corpus marker validated in the CKI files. Pin only when the bytes match the approved manifest. */
export const CKI_CORPUS_VERSION = "0.2.0";

export const CKI_MANIFEST_FILE = "manifest.v0.2.0.json";

export type CkiManifestEntry = {
  ckiId: string;
  file: string;
  version: string;
  sha256: string;
};

export type CkiManifest = {
  version: string;
  specialties: CkiManifestEntry[];
};

/** ASSOCIATED = specialty linked. RESOLVED = pinned bytes checked. DELIVERED is not produced here. */
export type CkiAvailability = "ASSOCIATED" | "RESOLVED" | "UNAVAILABLE";

export type CkiDelivery = CkiAvailability | "DELIVERED";

export type CkiPin = {
  ckiId: string;
  pinnedVersion: string | null;
  contentDigest: string | null;
  manifestRef: string | null;
  pinOrigin: "OPEN_PIN" | "UNRESOLVED" | null;
  availability: CkiAvailability;
};

export function isCycleType(value: string): value is CycleType {
  return (CYCLE_TYPES as readonly string[]).includes(value);
}

export function resolveCkiDirectory(): string {
  if (process.env.SFIA_CKI_ROOT) return process.env.SFIA_CKI_ROOT;
  const candidates = [
    resolve(process.cwd(), "../cki"),
    resolve(process.cwd(), "cki"),
    resolve(process.cwd(), "projects/sfia-studio-next/cki"),
  ];
  for (const dir of candidates) {
    if (existsSync(resolve(dir, "01-cadrage.md"))) return dir;
  }
  return candidates[0];
}

export function listCkiSpecialtyFiles(dir = resolveCkiDirectory()): string[] {
  if (!existsSync(dir)) return [];
  return readdirSync(dir)
    .filter((name) => /^\d{2}-.+\.md$/.test(name))
    .sort();
}

type ReadBytes = { digest: string; version: string | null; text: string };

function readSpecialty(ckiId: string): ReadBytes | null {
  const path = resolve(resolveCkiDirectory(), `${ckiId}.md`);
  if (!existsSync(path)) return null;
  try {
    const buf = readFileSync(path);
    const text = buf.toString("utf8");
    const digest = createHash("sha256").update(buf).digest("hex");
    const version = text.includes(CKI_CORPUS_VERSION) ? CKI_CORPUS_VERSION : null;
    return { digest, version, text };
  } catch {
    return null;
  }
}

/** Approved specialty catalogue. Missing or unreadable manifest → no pin. */
export function loadCkiManifest(dir = resolveCkiDirectory()): CkiManifest | null {
  const path = resolve(dir, CKI_MANIFEST_FILE);
  if (!existsSync(path)) return null;
  try {
    const parsed = JSON.parse(readFileSync(path, "utf8")) as CkiManifest;
    if (!parsed || parsed.version !== CKI_CORPUS_VERSION || !Array.isArray(parsed.specialties)) return null;
    return parsed;
  } catch {
    return null;
  }
}

function approvedEntry(ckiId: string, version: string | null): CkiManifestEntry | null {
  if (!version) return null;
  const manifest = loadCkiManifest();
  if (!manifest) return null;
  return (
    manifest.specialties.find(
      (entry) => entry.ckiId === ckiId && entry.version === version && entry.file === `${ckiId}.md`,
    ) ?? null
  );
}

function unresolvedPin(ckiId: string, availability: CkiAvailability): CkiPin {
  return {
    ckiId,
    pinnedVersion: null,
    contentDigest: null,
    manifestRef: null,
    pinOrigin: "UNRESOLVED",
    availability,
  };
}

/**
 * Pin at cycle open only when the file digest matches the approved manifest entry
 * for that specialty and corpus version. No silent substitution or migration.
 * Unreadable specialty → ASSOCIATED. Readable but unapproved → UNAVAILABLE.
 */
export function resolveForOpen(cycleType: CycleType): CkiPin {
  const ckiId = CYCLE_CKI[cycleType];
  const bytes = readSpecialty(ckiId);
  if (!bytes) return unresolvedPin(ckiId, "ASSOCIATED");
  const entry = approvedEntry(ckiId, CKI_CORPUS_VERSION);
  if (!entry || entry.sha256 !== bytes.digest || bytes.version !== CKI_CORPUS_VERSION) {
    return unresolvedPin(ckiId, "UNAVAILABLE");
  }
  return {
    ckiId,
    pinnedVersion: entry.version,
    contentDigest: bytes.digest,
    manifestRef: `cki/${CKI_MANIFEST_FILE}#${ckiId}@${entry.version}`,
    pinOrigin: "OPEN_PIN",
    availability: "RESOLVED",
  };
}

/**
 * Re-read a pin. RESOLVED only when the stored digest still matches the file
 * and the approved manifest entry for that ckiId+version. Divergent bytes → UNAVAILABLE.
 * No stored digest → stay ASSOCIATED (do not silent-pin or migrate on a later read).
 */
export function resolvePinnedCki(pin: {
  ckiId: string | null;
  contentDigest: string | null;
  pinnedVersion: string | null;
  manifestRef?: string | null;
  pinOrigin?: string | null;
}): CkiPin {
  if (!pin.ckiId) {
    return {
      ckiId: "",
      pinnedVersion: null,
      contentDigest: null,
      manifestRef: null,
      pinOrigin: null,
      availability: "ASSOCIATED",
    };
  }
  if (!pin.contentDigest) {
    return {
      ckiId: pin.ckiId,
      pinnedVersion: null,
      contentDigest: null,
      manifestRef: pin.manifestRef ?? null,
      pinOrigin: (pin.pinOrigin as CkiPin["pinOrigin"]) ?? "UNRESOLVED",
      availability: "ASSOCIATED",
    };
  }
  const bytes = readSpecialty(pin.ckiId);
  const entry = approvedEntry(pin.ckiId, pin.pinnedVersion);
  const approved =
    !!bytes &&
    bytes.digest === pin.contentDigest &&
    !!entry &&
    entry.sha256 === pin.contentDigest &&
    entry.version === pin.pinnedVersion;
  if (!approved || !bytes) {
    return {
      ckiId: pin.ckiId,
      pinnedVersion: pin.pinnedVersion,
      contentDigest: pin.contentDigest,
      manifestRef: pin.manifestRef ?? null,
      pinOrigin: (pin.pinOrigin as CkiPin["pinOrigin"]) ?? "OPEN_PIN",
      availability: "UNAVAILABLE",
    };
  }
  return {
    ckiId: pin.ckiId,
    pinnedVersion: pin.pinnedVersion,
    contentDigest: bytes.digest,
    manifestRef: pin.manifestRef ?? `cki/${CKI_MANIFEST_FILE}#${pin.ckiId}@${pin.pinnedVersion}`,
    pinOrigin: "OPEN_PIN",
    availability: "RESOLVED",
  };
}

/**
 * DELIVERED only when a caller has actually attached RESOLVED guidance to Nora's context.
 * This module never sets that flag by itself.
 */
export function deliveryState(availability: CkiAvailability, contentAttachedToNora: boolean): CkiDelivery {
  if (contentAttachedToNora && availability === "RESOLVED") return "DELIVERED";
  return availability;
}

/** Bytes of a pinned specialty. Null when the digest does not match — no fallback corpus. */
export function loadVerifiedCkiText(ckiId: string, expectedDigest: string): string | null {
  const bytes = readSpecialty(ckiId);
  if (!bytes || bytes.digest !== expectedDigest) return null;
  return bytes.text;
}
