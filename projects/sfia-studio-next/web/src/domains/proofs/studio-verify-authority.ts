/**
 * C24 reprise — Studio-owned verification authority, distinct from Cursor workspace FS.
 *
 * Workspace JSON with verifiedBy=STUDIO_ISOLATED_SUBPROCESS is NOT certifying by itself:
 * an executor can write that file. Certifying records live in this Studio-side registry
 * keyed by attempt + contract + verifyId, with HMAC integrity.
 *
 * Durability (C24 qualify): when SFIA_D8_VERIFY_HMAC_SECRET is set (or a Studio-owned
 * secret file under .sfia-evidence/), records persist to a Studio-owned JSON file
 * outside the Cursor workspace so restart does not silently lose authority.
 *
 * Product path must not execute untrusted workspace code unless
 * SFIA_D8_ISOLATED_VERIFY_PROVEN=1 AND an explicit Studio verification plan
 * (never package.json alone as authorization).
 */

import {
  createHmac,
  randomBytes,
  timingSafeEqual,
} from "node:crypto";
import {
  existsSync,
  mkdirSync,
  readFileSync,
  writeFileSync,
} from "node:fs";
import { dirname, join } from "node:path";

export type StudioVerifyRecord = {
  attemptId: string;
  contractFingerprint: string;
  verifyId: string;
  ok: boolean;
  exitCode: number | null;
  observedAt: string;
  contentVersionSha256: string | null;
  argvDigest: string | null;
  hmac: string;
};

const store = new Map<string, StudioVerifyRecord>();
let hydrated = false;

function storeKey(
  attemptId: string,
  contractFingerprint: string,
  verifyId: string,
): string {
  return `${attemptId}::${contractFingerprint}::${verifyId}`;
}

function authorityDir(): string {
  const fromEnv = (process.env.SFIA_D8_VERIFY_AUTHORITY_DIR || "").trim();
  if (fromEnv) return fromEnv;
  // Studio-owned evidence dir next to web package — never under Cursor workspace cwd.
  return join(process.cwd(), ".sfia-evidence");
}

function persistPath(): string {
  return join(authorityDir(), "studio-verify-authority.json");
}

function hmacSecret(): string {
  const fromEnv = (process.env.SFIA_D8_VERIFY_HMAC_SECRET || "").trim();
  if (fromEnv.length >= 16) return fromEnv;
  // Durable Studio-owned secret file (qualify:start writes this).
  try {
    const secretFile = join(authorityDir(), "d8-verify-hmac.secret");
    if (existsSync(secretFile)) {
      const s = readFileSync(secretFile, "utf8").trim();
      if (s.length >= 16) return s;
    }
    mkdirSync(dirname(secretFile), { recursive: true });
    const minted = randomBytes(32).toString("hex");
    writeFileSync(secretFile, minted, { mode: 0o600 });
    return minted;
  } catch {
    /* fall through to ephemeral */
  }
  const g = globalThis as { __sfiaD8VerifySecret?: string };
  if (!g.__sfiaD8VerifySecret) {
    g.__sfiaD8VerifySecret = randomBytes(32).toString("hex");
  }
  return g.__sfiaD8VerifySecret;
}

function sign(payload: Omit<StudioVerifyRecord, "hmac">): string {
  const body = JSON.stringify({
    attemptId: payload.attemptId,
    contractFingerprint: payload.contractFingerprint,
    verifyId: payload.verifyId,
    ok: payload.ok,
    exitCode: payload.exitCode,
    observedAt: payload.observedAt,
    contentVersionSha256: payload.contentVersionSha256,
    argvDigest: payload.argvDigest,
  });
  return createHmac("sha256", hmacSecret()).update(body).digest("hex");
}

function hydrateFromDisk(): void {
  if (hydrated) return;
  hydrated = true;
  try {
    const p = persistPath();
    if (!existsSync(p)) return;
    const raw = JSON.parse(readFileSync(p, "utf8")) as {
      records?: StudioVerifyRecord[];
    };
    for (const rec of raw.records ?? []) {
      if (!rec?.attemptId || !rec.verifyId || !rec.hmac) continue;
      store.set(
        storeKey(rec.attemptId, rec.contractFingerprint, rec.verifyId),
        rec,
      );
    }
  } catch {
    /* corrupt file — start empty; limits surface on read */
  }
}

function flushToDisk(): void {
  try {
    const dir = authorityDir();
    mkdirSync(dir, { recursive: true });
    const records = [...store.values()];
    writeFileSync(
      persistPath(),
      JSON.stringify(
        {
          version: 1,
          updatedAt: new Date().toISOString(),
          records,
        },
        null,
        2,
      ),
      { mode: 0o600 },
    );
  } catch {
    /* durable write failure — in-memory still authoritative for this process */
  }
}

export function putStudioVerifyRecord(
  input: Omit<StudioVerifyRecord, "hmac" | "observedAt"> & {
    observedAt?: string;
  },
): StudioVerifyRecord {
  hydrateFromDisk();
  const base: Omit<StudioVerifyRecord, "hmac"> = {
    attemptId: input.attemptId,
    contractFingerprint: input.contractFingerprint,
    verifyId: input.verifyId,
    ok: input.ok,
    exitCode: input.exitCode,
    observedAt: input.observedAt ?? new Date().toISOString(),
    contentVersionSha256: input.contentVersionSha256,
    argvDigest: input.argvDigest,
  };
  const rec: StudioVerifyRecord = { ...base, hmac: sign(base) };
  store.set(
    storeKey(rec.attemptId, rec.contractFingerprint, rec.verifyId),
    rec,
  );
  flushToDisk();
  return rec;
}

export function getStudioVerifyRecord(input: {
  attemptId: string;
  contractFingerprint: string;
  verifyId: string;
  /**
   * When provided, must equal the contentVersionSha256 sealed in the authority
   * record. An older valid HMAC must not certify a modified content version.
   */
  expectedContentVersionSha256?: string | null;
}): { ok: boolean; record: StudioVerifyRecord | null; limits: string[] } {
  hydrateFromDisk();
  const rec = store.get(
    storeKey(input.attemptId, input.contractFingerprint, input.verifyId),
  );
  if (!rec) {
    return {
      ok: false,
      record: null,
      limits: ["STUDIO_VERIFY_AUTHORITY_ABSENT"],
    };
  }
  const expected = sign({
    attemptId: rec.attemptId,
    contractFingerprint: rec.contractFingerprint,
    verifyId: rec.verifyId,
    ok: rec.ok,
    exitCode: rec.exitCode,
    observedAt: rec.observedAt,
    contentVersionSha256: rec.contentVersionSha256,
    argvDigest: rec.argvDigest,
  });
  try {
    const a = Buffer.from(expected, "hex");
    const b = Buffer.from(rec.hmac, "hex");
    if (a.length !== b.length || !timingSafeEqual(a, b)) {
      return {
        ok: false,
        record: null,
        limits: ["STUDIO_VERIFY_HMAC_MISMATCH"],
      };
    }
  } catch {
    return {
      ok: false,
      record: null,
      limits: ["STUDIO_VERIFY_HMAC_ERROR"],
    };
  }
  if (
    rec.attemptId !== input.attemptId ||
    rec.contractFingerprint !== input.contractFingerprint ||
    rec.verifyId !== input.verifyId
  ) {
    return {
      ok: false,
      record: null,
      limits: ["STUDIO_VERIFY_BINDING_MISMATCH"],
    };
  }
  const want = (input.expectedContentVersionSha256 || "").trim();
  if (want) {
    const sealed = (rec.contentVersionSha256 || "").trim();
    if (!sealed || sealed !== want) {
      return {
        ok: false,
        record: rec,
        limits: [
          "STUDIO_VERIFY_CONTENT_VERSION_MISMATCH — sealed HMAC does not certify current content",
        ],
      };
    }
  }
  return {
    ok: rec.ok && rec.exitCode === 0,
    record: rec,
    limits: ["STUDIO_VERIFY_AUTHORITY_READ"],
  };
}

/** Clear authority store — tests only. */
export function __resetStudioVerifyAuthorityForTests(): void {
  store.clear();
  hydrated = true;
  try {
    if (existsSync(persistPath())) {
      writeFileSync(persistPath(), JSON.stringify({ version: 1, records: [] }));
    }
  } catch {
    /* ignore */
  }
}

/** Simulate process restart: drop memory, keep durable file — tests only. */
export function __unloadStudioVerifyAuthorityForTests(): void {
  store.clear();
  hydrated = false;
}

/**
 * Effective isolation gate. Subprocess+cwd+scrubbed env alone is NOT proven isolation.
 * Default: disabled → TOOLING GAP / INSUFFICIENT (no CONFORMING via exec path).
 */
export function isStudioIsolatedVerifyExecutionEnabled(
  env: Record<string, string | undefined> = process.env,
): { enabled: boolean; limits: string[] } {
  if ((env.SFIA_D8_ISOLATED_VERIFY_PROVEN || "").trim() !== "1") {
    return {
      enabled: false,
      limits: [
        "ISOLATED_VERIFY_EXECUTION_DISABLED_C24 — subprocess/cwd/scrubbed-env ≠ system isolation; set SFIA_D8_ISOLATED_VERIFY_PROVEN=1 only when a real isolate is available",
      ],
    };
  }
  if ((env.SFIA_D8_VERIFY_PLAN_SOURCE || "").trim() !== "STUDIO_EXPLICIT") {
    return {
      enabled: false,
      limits: [
        "ISOLATED_VERIFY_PLAN_NOT_STUDIO_EXPLICIT — package.json alone is not authorization",
      ],
    };
  }
  return { enabled: true, limits: ["ISOLATED_VERIFY_EXECUTION_ENABLED"] };
}
