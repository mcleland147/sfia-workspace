import { describe, expect, it } from "vitest";
import {
  assertPermissionMap,
  normalizePermissionLevel,
  permissionSatisfies,
} from "@/domains/execution/permission-level";

describe("permission levels (B1)", () => {
  it("read never satisfies write", () => {
    expect(permissionSatisfies("read", "write")).toBe(false);
    expect(permissionSatisfies("write", "write")).toBe(true);
    expect(permissionSatisfies("admin", "write")).toBe(true);
    expect(permissionSatisfies("write", "read")).toBe(true);
    expect(permissionSatisfies("none", "read")).toBe(false);
    expect(permissionSatisfies(undefined, "read")).toBe(false);
    expect(permissionSatisfies("weird", "read")).toBe(false);
  });

  it("normalizes GitHub pull/push aliases", () => {
    expect(normalizePermissionLevel("pull")).toBe("read");
    expect(normalizePermissionLevel("push")).toBe("write");
    expect(normalizePermissionLevel("")).toBe(null);
  });

  it("blocking fixture: contents=read + pull_requests=write refuses documentary write", () => {
    expect(() =>
      assertPermissionMap(
        { contents: "read", pull_requests: "write" },
        [
          { key: "contents", level: "write" },
          { key: "pull_requests", level: "write" },
        ],
      ),
    ).toThrow(/contents exige write/);
  });

  it("unknown or malformed permission refuses", () => {
    expect(() =>
      assertPermissionMap({ contents: "banana" }, [{ key: "contents", level: "read" }]),
    ).toThrow(/Permission insuffisante/);
    expect(() =>
      assertPermissionMap({}, [{ key: "contents", level: "read" }]),
    ).toThrow(/absent/);
  });
});
