import { describe, expect, it } from "vitest";
import { acceptNavigationKey, destinationIndex } from "@/domains/identity/portfolio-organization";

describe("portfolio organization rules", () => {
  it("places an item before its target in either direction", () => {
    expect(destinationIndex(3, 0, 2)).toBe(1);
    expect(destinationIndex(3, 2, 0)).toBe(0);
    expect(destinationIndex(3, 1, 1)).toBe(1);
    expect(destinationIndex(3, 0, 9)).toBeNull();
  });

  it("ignores a replayed navigation key from the same tab", () => {
    const tab = "aaaaaaaa-bbbb-cccc-dddd-eeeeeeeeeeee";
    expect(acceptNavigationKey(null, `${tab}:1`)).toBe(true);
    expect(acceptNavigationKey(`${tab}:2`, `${tab}:2`)).toBe(false);
    expect(acceptNavigationKey(`${tab}:2`, `${tab}:1`)).toBe(false);
    expect(acceptNavigationKey(`${tab}:2`, `${tab}:3`)).toBe(true);
    expect(acceptNavigationKey(`${tab}:2`, "bbbbbbbb-bbbb-cccc-dddd-eeeeeeeeeeee:1")).toBe(true);
  });
});
