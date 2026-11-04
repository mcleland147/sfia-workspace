import { describe, expect, it } from "vitest";
import {
  assertApprovedOperatorDatabaseUrl,
  assertContainerLoopbackPortMapping,
  buildE2eDatabaseUrl,
  E2ePgGateError,
} from "@/lib/e2e-pg-gate";

const good =
  "postgres://sfia_next_dev:local-only@127.0.0.1:5433/sfia_next_dev";

function expectCode(fn: () => unknown, code: string) {
  try {
    fn();
    expect.unreachable("expected throw");
  } catch (e) {
    expect(e).toBeInstanceOf(E2ePgGateError);
    expect((e as E2ePgGateError).code).toBe(code);
  }
}

describe("E2E Postgres preflight gate (no writes)", () => {
  it("accepts approved operator URL and builds distinct e2e URL", () => {
    const u = assertApprovedOperatorDatabaseUrl(good);
    expect(u.hostname).toBe("127.0.0.1");
    expect(u.port).toBe("5433");
    const built = buildE2eDatabaseUrl(good);
    expect(built.operatorDatabase).toBe("sfia_next_dev");
    expect(built.e2eDatabase).toBe("sfia_next_e2e");
    expect(built.e2eDatabaseUrl).toContain("/sfia_next_e2e");
    expect(built.e2eDatabaseUrl).not.toMatch(/\/sfia_next_dev$/);
  });

  it("rejects missing / invalid / remote / wrong port / wrong source DB", () => {
    expectCode(() => assertApprovedOperatorDatabaseUrl(undefined), "E2E_PG_URL_MISSING");
    expectCode(() => assertApprovedOperatorDatabaseUrl("not-a-url"), "E2E_PG_URL_INVALID");
    expectCode(
      () => assertApprovedOperatorDatabaseUrl("postgres://u:p@db.example.com:5433/sfia_next_dev"),
      "E2E_PG_HOST_FORBIDDEN",
    );
    expectCode(
      () => assertApprovedOperatorDatabaseUrl("postgres://u:p@127.0.0.1:5432/sfia_next_dev"),
      "E2E_PG_PORT_FORBIDDEN",
    );
    expectCode(
      () => assertApprovedOperatorDatabaseUrl("postgres://u:p@127.0.0.1:5433/sfia_next_e2e"),
      "E2E_PG_SOURCE_DB_FORBIDDEN",
    );
    expectCode(
      () => assertApprovedOperatorDatabaseUrl("postgres://u:p@127.0.0.1:5433/other_db"),
      "E2E_PG_SOURCE_DB_FORBIDDEN",
    );
    expectCode(
      () => assertApprovedOperatorDatabaseUrl("mysql://u:p@127.0.0.1:5433/sfia_next_dev"),
      "E2E_PG_PROTOCOL_FORBIDDEN",
    );
  });

  it("rejects non-approved target DB name", () => {
    expectCode(() => buildE2eDatabaseUrl(good, "sfia_next_dev"), "E2E_PG_TARGET_FORBIDDEN");
    expectCode(() => buildE2eDatabaseUrl(good, "recette_db"), "E2E_PG_TARGET_FORBIDDEN");
  });

  it("accepts loopback docker port mapping and rejects 0.0.0.0 / wrong port", () => {
    expect(() => assertContainerLoopbackPortMapping("127.0.0.1:5433\n")).not.toThrow();
    expect(() => assertContainerLoopbackPortMapping("localhost:5433")).not.toThrow();
    expectCode(() => assertContainerLoopbackPortMapping("0.0.0.0:5433"), "E2E_PG_CONTAINER_MAPPING_FORBIDDEN");
    expectCode(() => assertContainerLoopbackPortMapping("127.0.0.1:5432"), "E2E_PG_CONTAINER_MAPPING_FORBIDDEN");
    expectCode(() => assertContainerLoopbackPortMapping(""), "E2E_PG_CONTAINER_MAPPING_FORBIDDEN");
  });
});
