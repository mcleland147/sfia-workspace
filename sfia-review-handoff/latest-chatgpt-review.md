# Cycle 8 Standard — FinOps T7 Target-Binding Option B — Thin Fail-Closed Identity Check — Review Pack

**Date/heure (CEST):** 2026-08-09 13:28:58 CEST
**Date/heure (UTC):** 2026-08-09 11:28:58 UTC
**Baseline:** SFIA v2.6

## Décision Morris

```text
GO TARGET-BINDING OPTION B —
T7 SHADOW OPERATOR —
IMPLEMENT THIN FAIL-CLOSED ENVIRONMENT IDENTITY CHECK —
NO SHADOW ACTIVATION.
```

## Git Truth

```text
base HEAD = origin/main = 7421fa86b1f22c0184e9fdc8b20657b9a3e0205b
branch (local only) = delivery/sfia-studio-finops-t7-target-binding-option-b
remote homonym = ABSENT
tracked/staged before work = clean (.tmp only)
project commit/push = NO
```

## Handoff entrant

```text
tip  = c6f262a6d14f3c5b36416d43d945c9ed8b72ccf0
blob = 132f1581009fc019868eec0fd161b039483773cd
confirms NO ELIGIBLE REAL TARGET / OPTION B RECOMMENDED / SHADOW NOT ACTIVATED = YES
```

## Sources consultées

- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- sfia-review-handoff/latest-chatgpt-review.md
- finops-t7-shadow-rollout.ts (pre/post)
- operateFinOpsT7ShadowRollout.ts (unchanged)
- postgresFinOpsRolloutStore.ts (unchanged)
- t7.shadow-activation-operator.unit.test.ts / integration
- 160 execution record (unchanged)
- package.json (unchanged)

## Exact 4-path subject

```text
CREATE  projects/sfia-studio/app/lib/oa/finops/server/finOpsT7TargetIdentity.ts
CREATE  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-target-binding-option-b.unit.test.ts
CREATE  projects/sfia-studio/161-assistant-sfia-native-openai-finops-t7-target-binding-option-b-execution.md
MODIFY  projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts
```

## Canonical identity / fingerprint

```text
host=<hostname>
port=<port>
database=<database>
SHA-256 hex lowercase UTF-8 of canonical
--expected-target-fingerprint mandatory dry-run+apply
Pool only after MATCH
```

## CLI contract

```text
npm run finops:t7:rollout --
  --project sfia-studio-ops1
  --mode SHADOW|OFF
  --expected-mode OFF|SHADOW
  --target <explicit-label>
  --expected-target-fingerprint <64-hex-sha256>
  [--apply]
```

## Preuve verification avant Pool

Mismatch probe with --apply + wrong fingerprint + unreachable synthetic URL:
exit=1, TARGET_FINGERPRINT_MISMATCH, no ECONNREFUSED, fake credentials absent from stdout/stderr.

## Validations

### TB01–TB18
18/18 PASS (TB01–TB18)

 Test Files  1 passed (1)
      Tests  18 passed (18)
   Start at  13:27:07
   Duration  267ms (transform 27ms, setup 57ms, collect 18ms, tests 3ms, environment 0ms, prepare 41ms)


### Existing operator units
9/9 PASS

 Test Files  1 passed (1)
      Tests  9 passed (9)
   Start at  13:27:12
   Duration  237ms (transform 22ms, setup 43ms, collect 15ms, tests 3ms, environment 0ms, prepare 36ms)


### test:db
12 files / 116 tests PASS
 ✓ __tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts (23 tests) 3174ms
 ✓ __tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts (8 tests) 2750ms

 Test Files  12 passed (12)
      Tests  116 passed (116)
   Start at  13:27:46
   Duration  7.52s (transform 5.20s, setup 4.98s, collect 9.61s, tests 27.92s, environment 9ms, prepare 3.72s)


### typecheck/lint/build
typecheck EXIT=0; lint EXIT=0 (No ESLint warnings); build EXIT=0

### Mismatch probe
MISMATCH_EXIT=1
---stderr---
npm warn exec The following package was not found and will be installed: tsx@4.23.11
{
  "ok": false,
  "code": "TARGET_FINGERPRINT_MISMATCH",
  "message": "FinOps T7 target identity refused: fingerprint mismatch (actual=b438bea6f57d496822f68ef08b4f76fdd0ddf1fd72a9b0f5caa7ff42d6e93b1d expected=0000000000000000000000000000000000000000000000000000000000000000)"
}

secret leak of fake credentials = NO; ECONNREFUSED = absent; exit=1

### Positive dry-run
DRY_EXIT=0
{
  "ok": true,
  "targetLabel": "ephemeral-option-b-validation",
  "projectId": "sfia-studio-ops1",
  "requestedMode": "SHADOW",
  "expectedMode": "OFF",
  "beforeEffectiveMode": "OFF",
  "beforeRevision": null,
  "afterMode": "OFF",
  "afterRevision": null,
  "updatedAt": null,
  "applied": false,
  "result": "dry_run"
}

safe ephemeral identity: host=127.0.0.1 port=55449 database=sfia_studio_finops_t7_optb
EPHEMERAL_FP=7bd319b9f6b2da1033679f2e9b9f3f732e693d76e8fab9278b12206cdda1c94d
container destroyed after test

### Secret leak check
No real connection strings in helper/CLI/doc. Unit fixtures use synthetic example.com credentials for TB06/TB17 only.

### git diff --check
PASS (no whitespace errors)

### SHA256 4/4
```text
aa22fa82632544b4e2eccf28e7884c23f422897dc44581f6241e034d318d518f  projects/sfia-studio/app/lib/oa/finops/server/finOpsT7TargetIdentity.ts
db942972da149092a7eb4ee6a3f2569ed67ef200041306e1ae5c15747be1f425  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-target-binding-option-b.unit.test.ts
619c73099fa5ae6e29043b108ca79876f408b935312f0f7016c03e4c5659d0f6  projects/sfia-studio/161-assistant-sfia-native-openai-finops-t7-target-binding-option-b-execution.md
78b38dc677191fe7c413f0ff5001ed806daeba502def109f8a5e2f196a27eb5b  projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts
```

## Réserves

```text
R-T7-OP-TARGET-BINDING-01 =
OPEN — OPTION B IMPLEMENTED LOCALLY — REAL TARGET NOT SELECTED — REMOTE/MERGE VALIDATION PENDING.

R-QA-T7-C08-SCENARIO-01 = OPEN MINOR
R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR
```

## Anti-claims

```text
SHADOW = NOT ACTIVATED
POLICY VALUES = NOT SELECTED
ACTIVATION TARGET = NOT SELECTED
REAL DATABASE TARGET = NONE
REAL DB WRITES = ZERO
REAL --apply = ZERO
MONITOR = NOT ACTIVATED
E1 = NOT AUTHORIZED
migration = NONE
registry = NONE
project commit/push/PR = NO
```

## Next Morris gate

```text
GO TARGETED CYCLE 9 QA —
T7 TARGET-BINDING OPTION B —
EXACT 4-PATH SUBJECT —
FAIL-CLOSED FINGERPRINT CHECK —
NO REAL TARGET —
NO SHADOW ACTIVATION.
```

## Verdict

```text
T7 TARGET-BINDING OPTION B DELIVERED LOCALLY —
CYCLE 8 STANDARD —
EXACT 4-PATH SUBJECT —
SAFE POSTGRES IDENTITY = HOST/PORT/DATABASE —
SHA-256 TARGET FINGERPRINT IMPLEMENTED —
EXPECTED TARGET FINGERPRINT REQUIRED —
FINGERPRINT CHECK BEFORE POOL/DB ACCESS —
MISMATCH FAIL-CLOSED VERIFIED —
POSITIVE DRY-RUN VERIFIED —
NO REGISTRY —
NO MIGRATION —
NO NEW DEPENDENCY —
EXISTING T7 OPERATOR CORE UNCHANGED —
T7 TESTS PASS —
POSTGRES REGRESSION PASS —
TYPECHECK/LINT/BUILD PASS —
NO SECRET LEAK —
R-T7-OP-TARGET-BINDING-01 OPEN — OPTION B IMPLEMENTED LOCALLY / REAL TARGET NOT SELECTED —
SHADOW NOT ACTIVATED —
POLICY VALUES NOT SELECTED —
ACTIVATION TARGET NOT SELECTED —
NO PROJECT COMMIT/PUSH/PR —
READY FOR MORRIS GO TARGETED CYCLE 9 QA —
HANDOFF REMOTE VERIFIED
```

---

## COMPLETE FILE 1/3 — finOpsT7TargetIdentity.ts

```typescript
/**
 * FinOps T7 — thin fail-closed target identity (Option B).
 *
 * Derives a safe PostgreSQL identity from DATABASE_URL_DIRECT without I/O:
 * host + effective port + database → canonical LF lines → SHA-256 fingerprint.
 *
 * Never includes username, password, query params, or the raw connection string
 * in errors or returned identity fields.
 */

import { createHash } from "node:crypto";

export type FinOpsT7SafeTargetIdentity = {
  readonly hostname: string;
  readonly port: number;
  readonly database: string;
  /** Exact canonical representation used for fingerprinting. */
  readonly canonical: string;
  /** SHA-256 hex lowercase (64 chars) of canonical UTF-8. */
  readonly fingerprint: string;
};

export type FinOpsT7TargetIdentityErrorCode =
  | "INVALID_TARGET_CONNECTION_IDENTITY"
  | "INVALID_EXPECTED_TARGET_FINGERPRINT"
  | "TARGET_FINGERPRINT_MISMATCH";

export class FinOpsT7TargetIdentityError extends Error {
  readonly code: FinOpsT7TargetIdentityErrorCode;
  readonly technicalDetailsRedacted = true as const;

  constructor(code: FinOpsT7TargetIdentityErrorCode, message: string) {
    super(message);
    this.name = "FinOpsT7TargetIdentityError";
    this.code = code;
  }
}

const FINGERPRINT_HEX_RE = /^[0-9a-f]{64}$/;
const FINGERPRINT_HEX_LOOSE_RE = /^[0-9a-fA-F]{64}$/;

function buildCanonical(
  hostname: string,
  port: number,
  database: string,
): string {
  return `host=${hostname}\nport=${port}\ndatabase=${database}`;
}

function fingerprintCanonical(canonical: string): string {
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

/**
 * Derive safe identity + fingerprint from a PostgreSQL connection string.
 * Pure: no network I/O.
 */
export function deriveFinOpsT7TargetIdentity(
  connectionString: string,
): FinOpsT7SafeTargetIdentity {
  const raw =
    typeof connectionString === "string" ? connectionString.trim() : "";
  if (!raw) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: connection string is empty",
    );
  }

  let url: URL;
  try {
    url = new URL(raw);
  } catch {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: connection string is not a valid URL",
    );
  }

  const protocol = url.protocol.toLowerCase();
  if (protocol !== "postgres:" && protocol !== "postgresql:") {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: protocol must be postgres or postgresql",
    );
  }

  const hostname = url.hostname.trim().toLowerCase();
  if (!hostname) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: hostname is required",
    );
  }

  let port: number;
  if (url.port) {
    port = Number(url.port);
    if (!Number.isInteger(port) || port < 1 || port > 65535) {
      throw new FinOpsT7TargetIdentityError(
        "INVALID_TARGET_CONNECTION_IDENTITY",
        "FinOps T7 target identity refused: port is invalid",
      );
    }
  } else {
    port = 5432;
  }

  // pathname is "/dbname" or possibly encoded; strip leading slash only.
  const path = url.pathname ?? "";
  const withoutSlash = path.startsWith("/") ? path.slice(1) : path;
  if (!withoutSlash || withoutSlash.includes("/")) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: database name is required",
    );
  }

  let database: string;
  try {
    database = decodeURIComponent(withoutSlash);
  } catch {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: database name is not decodable",
    );
  }
  if (!database.trim()) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: database name is required",
    );
  }

  const canonical = buildCanonical(hostname, port, database);
  const fingerprint = fingerprintCanonical(canonical);

  return {
    hostname,
    port,
    database,
    canonical,
    fingerprint,
  };
}

/**
 * Normalize/validate an expected fingerprint.
 * Valid 64-char hex is lowercased; anything else is rejected.
 */
export function normalizeExpectedTargetFingerprint(expected: string): string {
  const raw = typeof expected === "string" ? expected.trim() : "";
  if (!FINGERPRINT_HEX_LOOSE_RE.test(raw)) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_EXPECTED_TARGET_FINGERPRINT",
      "FinOps T7 target identity refused: expected fingerprint must be 64 hex characters",
    );
  }
  const normalized = raw.toLowerCase();
  if (!FINGERPRINT_HEX_RE.test(normalized)) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_EXPECTED_TARGET_FINGERPRINT",
      "FinOps T7 target identity refused: expected fingerprint must be 64 hex characters",
    );
  }
  return normalized;
}

/**
 * Fail-closed exact match between actual and expected fingerprints.
 * Expected may be mixed-case hex; it is normalized first.
 */
export function assertExpectedTargetFingerprintMatch(
  actualFingerprint: string,
  expectedFingerprint: string,
): void {
  const actual =
    typeof actualFingerprint === "string"
      ? actualFingerprint.trim().toLowerCase()
      : "";
  if (!FINGERPRINT_HEX_RE.test(actual)) {
    throw new FinOpsT7TargetIdentityError(
      "INVALID_TARGET_CONNECTION_IDENTITY",
      "FinOps T7 target identity refused: actual fingerprint is not a valid SHA-256 hex digest",
    );
  }
  const expected = normalizeExpectedTargetFingerprint(expectedFingerprint);
  if (actual !== expected) {
    throw new FinOpsT7TargetIdentityError(
      "TARGET_FINGERPRINT_MISMATCH",
      `FinOps T7 target identity refused: fingerprint mismatch (actual=${actual} expected=${expected})`,
    );
  }
}
```

## COMPLETE FILE 2/3 — t7.shadow-target-binding-option-b.unit.test.ts

```typescript
/**
 * @vitest-environment node
 *
 * FinOps T7 — Target-Binding Option B unit tests (TB01..TB18).
 */
import { createHash } from "node:crypto";
import { describe, expect, it } from "vitest";
import {
  FinOpsT7TargetIdentityError,
  assertExpectedTargetFingerprintMatch,
  deriveFinOpsT7TargetIdentity,
  normalizeExpectedTargetFingerprint,
} from "@/lib/oa/finops/server/finOpsT7TargetIdentity";

function expectedFp(host: string, port: number, database: string): string {
  const canonical = `host=${host}\nport=${port}\ndatabase=${database}`;
  return createHash("sha256").update(canonical, "utf8").digest("hex");
}

describe("T7 target-binding Option B — unit", () => {
  it("TB01 postgres:// accepted", () => {
    const id = deriveFinOpsT7TargetIdentity(
      "postgres://u:p@example.com:5432/sfia",
    );
    expect(id.hostname).toBe("example.com");
    expect(id.port).toBe(5432);
    expect(id.database).toBe("sfia");
    expect(id.fingerprint).toBe(expectedFp("example.com", 5432, "sfia"));
  });

  it("TB02 postgresql:// accepted", () => {
    const id = deriveFinOpsT7TargetIdentity(
      "postgresql://u:p@example.com:5432/sfia",
    );
    expect(id.fingerprint).toBe(expectedFp("example.com", 5432, "sfia"));
  });

  it("TB03 absent port → 5432", () => {
    const id = deriveFinOpsT7TargetIdentity("postgres://u:p@example.com/sfia");
    expect(id.port).toBe(5432);
    expect(id.fingerprint).toBe(expectedFp("example.com", 5432, "sfia"));
  });

  it("TB04 explicit 5432 same fingerprint as implicit", () => {
    const a = deriveFinOpsT7TargetIdentity(
      "postgres://u:p@example.com:5432/sfia",
    );
    const b = deriveFinOpsT7TargetIdentity("postgres://u:p@example.com/sfia");
    expect(a.fingerprint).toBe(b.fingerprint);
  });

  it("TB05 hostname lowercased", () => {
    const id = deriveFinOpsT7TargetIdentity(
      "postgres://u:p@Example.COM:5432/sfia",
    );
    expect(id.hostname).toBe("example.com");
    expect(id.fingerprint).toBe(expectedFp("example.com", 5432, "sfia"));
  });

  it("TB06 different credentials → same fingerprint", () => {
    const a = deriveFinOpsT7TargetIdentity(
      "postgres://alice:secret1@example.com:5432/sfia",
    );
    const b = deriveFinOpsT7TargetIdentity(
      "postgres://bob:secret2@example.com:5432/sfia",
    );
    expect(a.fingerprint).toBe(b.fingerprint);
  });

  it("TB07 different query params → same fingerprint", () => {
    const a = deriveFinOpsT7TargetIdentity(
      "postgres://u:p@example.com:5432/sfia?sslmode=require",
    );
    const b = deriveFinOpsT7TargetIdentity(
      "postgres://u:p@example.com:5432/sfia?sslmode=disable&application_name=x",
    );
    expect(a.fingerprint).toBe(b.fingerprint);
  });

  it("TB08 different host → different fingerprint", () => {
    const a = deriveFinOpsT7TargetIdentity(
      "postgres://u:p@host-a.example:5432/sfia",
    );
    const b = deriveFinOpsT7TargetIdentity(
      "postgres://u:p@host-b.example:5432/sfia",
    );
    expect(a.fingerprint).not.toBe(b.fingerprint);
  });

  it("TB09 different port → different fingerprint", () => {
    const a = deriveFinOpsT7TargetIdentity(
      "postgres://u:p@example.com:5432/sfia",
    );
    const b = deriveFinOpsT7TargetIdentity(
      "postgres://u:p@example.com:5433/sfia",
    );
    expect(a.fingerprint).not.toBe(b.fingerprint);
  });

  it("TB10 different database → different fingerprint", () => {
    const a = deriveFinOpsT7TargetIdentity(
      "postgres://u:p@example.com:5432/db_a",
    );
    const b = deriveFinOpsT7TargetIdentity(
      "postgres://u:p@example.com:5432/db_b",
    );
    expect(a.fingerprint).not.toBe(b.fingerprint);
  });

  it("TB11 non-PostgreSQL protocol → reject", () => {
    expect(() =>
      deriveFinOpsT7TargetIdentity("mysql://u:p@example.com:3306/sfia"),
    ).toThrow(FinOpsT7TargetIdentityError);
    try {
      deriveFinOpsT7TargetIdentity("mysql://u:p@example.com:3306/sfia");
    } catch (e) {
      expect(e).toMatchObject({ code: "INVALID_TARGET_CONNECTION_IDENTITY" });
    }
  });

  it("TB12 empty database → reject", () => {
    expect(() =>
      deriveFinOpsT7TargetIdentity("postgres://u:p@example.com:5432/"),
    ).toThrow(
      expect.objectContaining({ code: "INVALID_TARGET_CONNECTION_IDENTITY" }),
    );
  });

  it("TB13 malformed expected fingerprint → reject", () => {
    expect(() => normalizeExpectedTargetFingerprint("abc")).toThrow(
      expect.objectContaining({
        code: "INVALID_EXPECTED_TARGET_FINGERPRINT",
      }),
    );
    expect(() => normalizeExpectedTargetFingerprint("g".repeat(64))).toThrow(
      expect.objectContaining({
        code: "INVALID_EXPECTED_TARGET_FINGERPRINT",
      }),
    );
  });

  it("TB14 uppercase expected fingerprint normalized to lowercase", () => {
    const fp = expectedFp("example.com", 5432, "sfia");
    const upper = fp.toUpperCase();
    expect(normalizeExpectedTargetFingerprint(upper)).toBe(fp);
  });

  it("TB15 fingerprint match → PASS", () => {
    const id = deriveFinOpsT7TargetIdentity(
      "postgres://u:p@example.com:5432/sfia",
    );
    expect(() =>
      assertExpectedTargetFingerprintMatch(id.fingerprint, id.fingerprint),
    ).not.toThrow();
    expect(() =>
      assertExpectedTargetFingerprintMatch(
        id.fingerprint,
        id.fingerprint.toUpperCase(),
      ),
    ).not.toThrow();
  });

  it("TB16 fingerprint mismatch → TARGET_FINGERPRINT_MISMATCH", () => {
    const id = deriveFinOpsT7TargetIdentity(
      "postgres://u:p@example.com:5432/sfia",
    );
    const other = expectedFp("other.example", 5432, "sfia");
    expect(() =>
      assertExpectedTargetFingerprintMatch(id.fingerprint, other),
    ).toThrow(
      expect.objectContaining({ code: "TARGET_FINGERPRINT_MISMATCH" }),
    );
  });

  it("TB17 errors do not leak username/password/connection string", () => {
    const secretUser = "leaky_user_tb17";
    const secretPass = "leaky_pass_tb17_SECRET";
    const cs = `postgres://${secretUser}:${secretPass}@example.com:5432/sfia`;
    const id = deriveFinOpsT7TargetIdentity(cs);
    const other = expectedFp("other.example", 5432, "sfia");
    let message = "";
    let code = "";
    try {
      assertExpectedTargetFingerprintMatch(id.fingerprint, other);
    } catch (e) {
      message = e instanceof Error ? e.message : String(e);
      code = e && typeof e === "object" && "code" in e ? String((e as { code: unknown }).code) : "";
    }
    expect(code).toBe("TARGET_FINGERPRINT_MISMATCH");
    expect(message).not.toContain(secretUser);
    expect(message).not.toContain(secretPass);
    expect(message).not.toContain(cs);
    expect(message).not.toContain("postgres://");

    let invalidMsg = "";
    try {
      deriveFinOpsT7TargetIdentity(
        `mysql://${secretUser}:${secretPass}@example.com/sfia`,
      );
    } catch (e) {
      invalidMsg = e instanceof Error ? e.message : String(e);
    }
    expect(invalidMsg).not.toContain(secretUser);
    expect(invalidMsg).not.toContain(secretPass);
    expect(invalidMsg).not.toContain("mysql://");
  });

  it("TB18 fingerprint deterministic across calls", () => {
    const cs = "postgres://u:p@Example.COM:5432/sfia?sslmode=require";
    const a = deriveFinOpsT7TargetIdentity(cs);
    const b = deriveFinOpsT7TargetIdentity(cs);
    expect(a.fingerprint).toBe(b.fingerprint);
    expect(a.canonical).toBe("host=example.com\nport=5432\ndatabase=sfia");
  });
});
```

## COMPLETE FILE 3/3 — 161 execution record

```markdown
# 161 — FinOps T7 Target-Binding Option B — Thin Fail-Closed Identity Check — Execution Record

**Project:** SFIA Studio — Assistant SFIA natif OpenAI
**Document:** `projects/sfia-studio/161-assistant-sfia-native-openai-finops-t7-target-binding-option-b-execution.md`
**Cycle:** 8 — Delivery / implémentation
**Profile:** Standard
**Typology:** EVOL / CODE / TEST / DOC
**Baseline:** SFIA v2.6
**Date (CEST):** 2026-08-09 13:28:58 CEST
**Date (UTC):** 2026-08-09 11:28:58 UTC

---

## Décision Morris

```text
GO TARGET-BINDING OPTION B —
T7 SHADOW OPERATOR —
IMPLEMENT THIN FAIL-CLOSED ENVIRONMENT IDENTITY CHECK —
NO SHADOW ACTIVATION.
```

Authorized: local Option B implementation + local validation only.
Not authorized: real target selection, Neon/shared provisioning, SHADOW activation,
real `--apply`, policy values, MONITOR, E1, project commit/push/PR/merge.

---

## Problème initial

`--target` was an audit label only. `DATABASE_URL_DIRECT` selected the effective database.
There was no intrinsic proof that `--target pilot-A` matched the DB behind `DATABASE_URL_DIRECT`.

Current binding before this delivery: **AUDIT LABEL ONLY**.

---

## Option B retenue

Thin fail-closed binding at the CLI entrypoint:

`DATABASE_URL_DIRECT` → safe PostgreSQL identity → SHA-256 fingerprint → compare to
`--expected-target-fingerprint` → Pool only on MATCH.

No registry, no migration, no global mapping, no hardcoded target, no Neon/Vercel dependency,
no new npm dependency, core operator unchanged.

---

## Architecture exacte

| Path | Role |
|------|------|
| `app/lib/oa/finops/server/finOpsT7TargetIdentity.ts` | Pure helper (URL + crypto SHA-256) |
| `app/scripts/finops-t7-shadow-rollout.ts` | CLI: fingerprint check before Pool |
| `app/__tests__/oa/finops/t7.shadow-target-binding-option-b.unit.test.ts` | TB01–TB18 |
| `161-…-option-b-execution.md` | This execution record |

**Unchanged:** `operateFinOpsT7ShadowRollout.ts`, store, pool factory, migrations, package.json, workflows.

---

## Canonical identity

Exactly three LF-separated lines, no trailing blank line:

```text
host=<hostname>
port=<port>
database=<database>
```

Rules:

- protocol: `postgres:` or `postgresql:` only
- hostname: trim + lowercase
- port: explicit URL port, else `5432`
- database: pathname without leading slash, `decodeURIComponent`, non-empty
- excluded: username, password, query, fragment, SSL credentials, raw URL

---

## Fingerprint contract

- Algorithm: SHA-256 over canonical UTF-8
- Encoding: lowercase hex
- Length: 64
- Expected fingerprint: valid 64-hex, normalized to lowercase
- Match: exact string equality after normalization

Error codes:

- `INVALID_TARGET_CONNECTION_IDENTITY`
- `INVALID_EXPECTED_TARGET_FINGERPRINT`
- `TARGET_FINGERPRINT_MISMATCH`

Errors never include connection string, username, or password. Fingerprints may appear.

---

## CLI contract

```text
npm run finops:t7:rollout -- \
  --project sfia-studio-ops1 \
  --mode SHADOW|OFF \
  --expected-mode OFF|SHADOW \
  --target <explicit-label> \
  --expected-target-fingerprint <64-hex-sha256> \
  [--apply]
```

`--expected-target-fingerprint` is **mandatory** for dry-run and apply.

Future Morris target selection GO must carry:

```text
TARGET <label>
FINGERPRINT <sha256>
```

---

## Ordre fail-closed

1. parse args
2. require mandatory args (including expected fingerprint)
3. read `DATABASE_URL_DIRECT`
4. derive safe identity + actual fingerprint
5. validate expected fingerprint
6. assert actual == expected
7. **only after MATCH:** create Pool
8. create rollout store
9. call `operateFinOpsT7ShadowRollout`
10. close Pool

`TARGET_FINGERPRINT_MISMATCH` → no Pool, no DB query, no upsert, no apply.

---

## Preuves tests

(Filled after local validation.)

### Unit TB01–TB18

18/18 PASS (TB01–TB18)
 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/projects/sfia-studio/app
 ✓ __tests__/oa/finops/t7.shadow-target-binding-option-b.unit.test.ts (18 tests) 3ms
 Test Files  1 passed (1)
      Tests  18 passed (18)
   Start at  13:27:07
   Duration  267ms (transform 27ms, setup 57ms, collect 18ms, tests 3ms, environment 0ms, prepare 41ms)

### Existing T7 activation operator units

9/9 PASS
 RUN  v3.2.7 /Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/projects/sfia-studio/app
 ✓ __tests__/oa/finops/t7.shadow-activation-operator.unit.test.ts (9 tests) 3ms
 Test Files  1 passed (1)
      Tests  9 passed (9)
   Start at  13:27:12
   Duration  237ms (transform 22ms, setup 43ms, collect 15ms, tests 3ms, environment 0ms, prepare 36ms)

### test:db

12 files / 116 tests PASS
   ✓ FinOps T7 foundation runtime composition integration > T7-R01 composeFinOpsT7Runtime → resolve no config → OFF  2110ms
   ✓ FinOps T7 foundation runtime composition integration > T7-R04 reconcileProjectPeriodAndRefresh → T2 success → T4 refreshed exactly once  331ms
 ✓ __tests__/oa/finops/postgres/t7.shadow-option-a.wiring.integration.test.ts (23 tests) 3174ms
 ✓ __tests__/oa/finops/postgres/t7.shadow-activation-operator.integration.test.ts (8 tests) 2750ms
 Test Files  12 passed (12)
      Tests  116 passed (116)
   Start at  13:27:46
   Duration  7.52s (transform 5.20s, setup 4.98s, collect 9.61s, tests 27.92s, environment 9ms, prepare 3.72s)

### typecheck / lint / build

typecheck EXIT=0; lint EXIT=0 (No ESLint warnings); build EXIT=0

### CLI mismatch pre-connection probe

MISMATCH_EXIT=1
---stderr---
npm warn exec The following package was not found and will be installed: tsx@4.23.11
{
  "ok": false,
  "code": "TARGET_FINGERPRINT_MISMATCH",
  "message": "FinOps T7 target identity refused: fingerprint mismatch (actual=b438bea6f57d496822f68ef08b4f76fdd0ddf1fd72a9b0f5caa7ff42d6e93b1d expected=0000000000000000000000000000000000000000000000000000000000000000)"
}
secret leak of fake credentials = NO; ECONNREFUSED = absent; exit=1

### Positive dry-run (ephemeral local)

DRY_EXIT=0
{
  "ok": true,
  "targetLabel": "ephemeral-option-b-validation",
  "projectId": "sfia-studio-ops1",
  "requestedMode": "SHADOW",
  "expectedMode": "OFF",
  "beforeEffectiveMode": "OFF",
  "beforeRevision": null,
  "afterMode": "OFF",
  "afterRevision": null,
  "updatedAt": null,
  "applied": false,
  "result": "dry_run"
}
rollout row count after dry-run = 0; applied=false; result=dry_run
EPHEMERAL_FP=7bd319b9f6b2da1033679f2e9b9f3f732e693d76e8fab9278b12206cdda1c94d
safe identity: host=127.0.0.1 port=55449 database=sfia_studio_finops_t7_optb (destroyed after test)

### Secret leak check

No real connection strings in helper/CLI/doc. Unit fixtures use synthetic example.com credentials for TB06/TB17 only.

### git diff --check

PASS (no whitespace errors)

### SHA256 of exact 4 paths

Captured in review pack after freeze (avoid self-hash recursion in this record).
Code/test/CLI SHAs at write time:

aa22fa82632544b4e2eccf28e7884c23f422897dc44581f6241e034d318d518f  projects/sfia-studio/app/lib/oa/finops/server/finOpsT7TargetIdentity.ts
db942972da149092a7eb4ee6a3f2569ed67ef200041306e1ae5c15747be1f425  projects/sfia-studio/app/__tests__/oa/finops/t7.shadow-target-binding-option-b.unit.test.ts
78b38dc677191fe7c413f0ff5001ed806daeba502def109f8a5e2f196a27eb5b  projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts

---

## Réserves

```text
R-T7-OP-TARGET-BINDING-01 =
OPEN —
OPTION B IMPLEMENTED LOCALLY —
REAL TARGET NOT SELECTED —
REMOTE/MERGE VALIDATION PENDING.

R-QA-T7-C08-SCENARIO-01 = OPEN MINOR
R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR
```

---

## Anti-claims

```text
SHADOW = NOT ACTIVATED
POLICY VALUES = NOT SELECTED
ACTIVATION TARGET = NOT SELECTED
REAL DATABASE TARGET = NONE
REAL DB WRITES = ZERO
REAL --apply = ZERO
MONITOR = NOT ACTIVATED
E1 = NOT AUTHORIZED
OPTION B LOCAL IMPLEMENTATION ≠ TARGET SELECTED
OPTION B LOCAL IMPLEMENTATION ≠ SHADOW ACTIVATION READY
DELIVERY PASS ≠ QA PASS
DELIVERY PASS ≠ PR READY
migration = NONE
registry = NONE
```

---

## Prochaine étape

```text
GO TARGETED CYCLE 9 QA —
T7 TARGET-BINDING OPTION B —
EXACT 4-PATH SUBJECT —
FAIL-CLOSED FINGERPRINT CHECK —
NO REAL TARGET —
NO SHADOW ACTIVATION.
```
```

## COMPLETE MODIFY — finops-t7-shadow-rollout.ts (full post-change)

```typescript
/**
 * FinOps T7 SHADOW — thin CLI adapter for bounded pilot rollout operator.
 *
 * Usage:
 *   npm run finops:t7:rollout -- \
 *     --project sfia-studio-ops1 \
 *     --mode SHADOW|OFF \
 *     --expected-mode OFF|SHADOW \
 *     --target <explicit-label> \
 *     --expected-target-fingerprint <64-hex-sha256> \
 *     [--apply]
 *
 * Without --apply: dry-run (default), zero mutation.
 * With --apply: mutates via createPostgresFinOpsRolloutStore only.
 *
 * Fail-closed Option B: derive safe identity from DATABASE_URL_DIRECT,
 * require --expected-target-fingerprint, MATCH before Pool creation.
 *
 * Never prints DATABASE_URL_DIRECT or credentials.
 * Pool is always closed in finally (only if created).
 */

import { Pool } from "pg";
import { T7_SHADOW_PILOT_PROJECT_ID } from "../lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
import { createPostgresFinOpsRolloutStore } from "../lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
import {
  FinOpsT7TargetIdentityError,
  assertExpectedTargetFingerprintMatch,
  deriveFinOpsT7TargetIdentity,
} from "../lib/oa/finops/server/finOpsT7TargetIdentity";
import {
  OperateFinOpsT7ShadowRolloutError,
  operateFinOpsT7ShadowRollout,
} from "../lib/oa/finops/server/operateFinOpsT7ShadowRollout";

type ParsedArgs = {
  projectId: string | null;
  mode: string | null;
  expectedMode: string | null;
  targetLabel: string | null;
  expectedTargetFingerprint: string | null;
  apply: boolean;
};

function parseArgs(argv: ReadonlyArray<string>): ParsedArgs {
  const out: ParsedArgs = {
    projectId: null,
    mode: null,
    expectedMode: null,
    targetLabel: null,
    expectedTargetFingerprint: null,
    apply: false,
  };
  for (let i = 0; i < argv.length; i += 1) {
    const arg = argv[i];
    if (arg === "--apply") {
      out.apply = true;
      continue;
    }
    const next = argv[i + 1];
    if (arg === "--project" && next) {
      out.projectId = next;
      i += 1;
      continue;
    }
    if (arg === "--mode" && next) {
      out.mode = next;
      i += 1;
      continue;
    }
    if (arg === "--expected-mode" && next) {
      out.expectedMode = next;
      i += 1;
      continue;
    }
    if (arg === "--target" && next) {
      out.targetLabel = next;
      i += 1;
      continue;
    }
    if (arg === "--expected-target-fingerprint" && next) {
      out.expectedTargetFingerprint = next;
      i += 1;
      continue;
    }
  }
  return out;
}

function usage(): string {
  return [
    "Usage: npm run finops:t7:rollout -- --project <id> --mode OFF|SHADOW --expected-mode OFF|SHADOW --target <label> --expected-target-fingerprint <64-hex-sha256> [--apply]",
    "Dry-run is the default (omit --apply).",
    "Fingerprint check is mandatory for dry-run and apply; Pool is created only after MATCH.",
  ].join("\n");
}

async function main(): Promise<void> {
  const parsed = parseArgs(process.argv.slice(2));
  if (
    !parsed.projectId ||
    !parsed.mode ||
    !parsed.expectedMode ||
    !parsed.targetLabel ||
    !parsed.expectedTargetFingerprint
  ) {
    process.stderr.write(`${usage()}\n`);
    process.exitCode = 2;
    return;
  }

  const connectionString = process.env.DATABASE_URL_DIRECT?.trim() ?? "";
  if (!connectionString) {
    process.stderr.write(
      "FinOps T7 operator refused: DATABASE_URL_DIRECT is required (value never logged)\n",
    );
    process.exitCode = 2;
    return;
  }

  // Fail-closed Option B: identity + fingerprint BEFORE Pool.
  let actualFingerprint: string;
  try {
    const identity = deriveFinOpsT7TargetIdentity(connectionString);
    actualFingerprint = identity.fingerprint;
    assertExpectedTargetFingerprintMatch(
      actualFingerprint,
      parsed.expectedTargetFingerprint,
    );
  } catch (error) {
    if (error instanceof FinOpsT7TargetIdentityError) {
      process.stderr.write(
        `${JSON.stringify({ ok: false, code: error.code, message: error.message }, null, 2)}\n`,
      );
      process.exitCode = 1;
      return;
    }
    throw error;
  }

  const pool = new Pool({ connectionString, max: 2 });
  try {
    const store = createPostgresFinOpsRolloutStore(pool);
    const result = await operateFinOpsT7ShadowRollout(store, {
      allowedProjectId: T7_SHADOW_PILOT_PROJECT_ID,
      projectId: parsed.projectId,
      requestedMode: parsed.mode,
      expectedMode: parsed.expectedMode,
      targetLabel: parsed.targetLabel,
      apply: parsed.apply,
      nowIso: () => new Date().toISOString(),
    });
    process.stdout.write(`${JSON.stringify(result, null, 2)}\n`);
  } catch (error) {
    if (error instanceof OperateFinOpsT7ShadowRolloutError) {
      process.stderr.write(
        `${JSON.stringify({ ok: false, code: error.code, message: error.message }, null, 2)}\n`,
      );
      process.exitCode = 1;
      return;
    }
    const message =
      error && typeof error === "object" && "message" in error
        ? String((error as { message: unknown }).message)
        : "FinOps T7 operator failed";
    const redacted = message
      .replace(/postgres(ql)?:\/\/[^\s]+/gi, "postgres://[redacted]")
      .replace(/DATABASE_URL(_DIRECT)?/gi, "[redacted_env]");
    process.stderr.write(
      `${JSON.stringify({ ok: false, code: "STORE_FAILED", message: redacted }, null, 2)}\n`,
    );
    process.exitCode = 1;
  } finally {
    await pool.end().catch(() => undefined);
  }
}

void main();
```

## Useful diff — finops-t7-shadow-rollout.ts

```diff
diff --git a/projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts b/projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts
index 613b1c0..59a776b 100644
--- a/projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts
+++ b/projects/sfia-studio/app/scripts/finops-t7-shadow-rollout.ts
@@ -7,18 +7,27 @@
  *     --mode SHADOW|OFF \
  *     --expected-mode OFF|SHADOW \
  *     --target <explicit-label> \
+ *     --expected-target-fingerprint <64-hex-sha256> \
  *     [--apply]
  *
  * Without --apply: dry-run (default), zero mutation.
  * With --apply: mutates via createPostgresFinOpsRolloutStore only.
  *
+ * Fail-closed Option B: derive safe identity from DATABASE_URL_DIRECT,
+ * require --expected-target-fingerprint, MATCH before Pool creation.
+ *
  * Never prints DATABASE_URL_DIRECT or credentials.
- * Pool is always closed in finally.
+ * Pool is always closed in finally (only if created).
  */

 import { Pool } from "pg";
 import { T7_SHADOW_PILOT_PROJECT_ID } from "../lib/oa/execution-run/server/composeExecutionRunD2D3T7ShadowPilot";
 import { createPostgresFinOpsRolloutStore } from "../lib/oa/finops/infrastructure/postgres/postgresFinOpsRolloutStore";
+import {
+  FinOpsT7TargetIdentityError,
+  assertExpectedTargetFingerprintMatch,
+  deriveFinOpsT7TargetIdentity,
+} from "../lib/oa/finops/server/finOpsT7TargetIdentity";
 import {
   OperateFinOpsT7ShadowRolloutError,
   operateFinOpsT7ShadowRollout,
@@ -29,6 +38,7 @@ type ParsedArgs = {
   mode: string | null;
   expectedMode: string | null;
   targetLabel: string | null;
+  expectedTargetFingerprint: string | null;
   apply: boolean;
 };

@@ -38,6 +48,7 @@ function parseArgs(argv: ReadonlyArray<string>): ParsedArgs {
     mode: null,
     expectedMode: null,
     targetLabel: null,
+    expectedTargetFingerprint: null,
     apply: false,
   };
   for (let i = 0; i < argv.length; i += 1) {
@@ -67,14 +78,20 @@ function parseArgs(argv: ReadonlyArray<string>): ParsedArgs {
       i += 1;
       continue;
     }
+    if (arg === "--expected-target-fingerprint" && next) {
+      out.expectedTargetFingerprint = next;
+      i += 1;
+      continue;
+    }
   }
   return out;
 }

 function usage(): string {
   return [
-    "Usage: npm run finops:t7:rollout -- --project <id> --mode OFF|SHADOW --expected-mode OFF|SHADOW --target <label> [--apply]",
+    "Usage: npm run finops:t7:rollout -- --project <id> --mode OFF|SHADOW --expected-mode OFF|SHADOW --target <label> --expected-target-fingerprint <64-hex-sha256> [--apply]",
     "Dry-run is the default (omit --apply).",
+    "Fingerprint check is mandatory for dry-run and apply; Pool is created only after MATCH.",
   ].join("\n");
 }

@@ -84,7 +101,8 @@ async function main(): Promise<void> {
     !parsed.projectId ||
     !parsed.mode ||
     !parsed.expectedMode ||
-    !parsed.targetLabel
+    !parsed.targetLabel ||
+    !parsed.expectedTargetFingerprint
   ) {
     process.stderr.write(`${usage()}\n`);
     process.exitCode = 2;
@@ -100,6 +118,26 @@ async function main(): Promise<void> {
     return;
   }

+  // Fail-closed Option B: identity + fingerprint BEFORE Pool.
+  let actualFingerprint: string;
+  try {
+    const identity = deriveFinOpsT7TargetIdentity(connectionString);
+    actualFingerprint = identity.fingerprint;
+    assertExpectedTargetFingerprintMatch(
+      actualFingerprint,
+      parsed.expectedTargetFingerprint,
+    );
+  } catch (error) {
+    if (error instanceof FinOpsT7TargetIdentityError) {
+      process.stderr.write(
+        `${JSON.stringify({ ok: false, code: error.code, message: error.message }, null, 2)}\n`,
+      );
+      process.exitCode = 1;
+      return;
+    }
+    throw error;
+  }
+
   const pool = new Pool({ connectionString, max: 2 });
   try {
     const store = createPostgresFinOpsRolloutStore(pool);
```
