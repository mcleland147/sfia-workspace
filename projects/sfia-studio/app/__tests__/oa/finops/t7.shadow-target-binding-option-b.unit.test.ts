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
