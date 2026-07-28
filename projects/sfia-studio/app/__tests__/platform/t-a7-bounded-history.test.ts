/** @vitest-environment node */
import { describe, expect, it } from "vitest";
import {
  BOUNDED_HISTORY_MAX_ITEMS,
  DEFAULT_BOUNDED_HISTORY_GIT_SHA,
  assertBoundedHistoryImmutable,
  assertGitCanonicalSha,
  createDocumentaryBoundedHistoryProvider,
  createUnavailableBoundedHistoryProvider,
  BoundedHistoryMutationError,
} from "@/lib/platform/t-a7/boundedHistoryRead";
import { queryOperationalReadiness } from "@/lib/d1/operationalReadiness";
import { resetMethodModeHoldForTests } from "@/lib/d1/methodModeHold.test-only";

const ALT_SHA = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

describe("T-A7 L-F11F13 F13.4 bounded history foundation", () => {
  it("reads a bounded immutable documentary page with Git canonical SHA", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const page = provider.read({ limit: 2 });
    expect(page.gitCanonical).toBe(true);
    expect(page.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
    expect(page.mutable).toBe(false);
    expect(page.availability).toBe("PARTIAL");
    expect(page.returned).toBe(2);
    expect(page.truncated).toBe(true);
    expect(page.limit).toBe(2);
    expect(page.paginationMode).toBe("PREFIX_ONLY");
    expect(page.pagination.mode).toBe("PREFIX_ONLY");
    expect(page.pagination.nextCursor).toBeNull();
    expect(page.pagination.hasMore).toBe(true);
    expect(page.retention).toBe("GIT_ONLY");
    expect(page.audit.status).toBe("DEFERRED_EXPLICITLY");
    expect(page.completeness).toBe("BOUNDED_L_F11F13");
    assertBoundedHistoryImmutable(page);
  });

  it("enforces PREFIX_ONLY max prefix length", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const page = provider.read({ limit: 10_000 });
    expect(page.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(page.pagination.prefixLength).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(page.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
  });

  it("accepts prefixLength alias and keeps stable order", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    const a = provider.read({ prefixLength: 3 });
    const b = provider.read({ limit: 3 });
    expect(a.items.map((i) => i.id)).toEqual(b.items.map((i) => i.id));
    expect(a.items[0]?.id).toBe("hist-t-a7-f03-f11-f13");
    expect(a.pagination.nextCursor).toBeNull();
  });

  it("covers volume bounds 0/1/max/max+1 semantics", () => {
    const provider = createDocumentaryBoundedHistoryProvider();
    expect(() => provider.read({ limit: 0 })).toThrow(/positive/);
    const one = provider.read({ limit: 1 });
    expect(one.returned).toBe(1);
    const max = provider.read({ limit: BOUNDED_HISTORY_MAX_ITEMS });
    expect(max.returned).toBeLessThanOrEqual(BOUNDED_HISTORY_MAX_ITEMS);
    expect(max.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    const over = provider.read({ limit: BOUNDED_HISTORY_MAX_ITEMS + 1 });
    expect(over.limit).toBe(BOUNDED_HISTORY_MAX_ITEMS);
    expect(over.returned).toBe(max.returned);
  });

  it("ties page to injected gitCanonicalSha and rejects invalid SHA", () => {
    const provider = createDocumentaryBoundedHistoryProvider({
      gitCanonicalSha: ALT_SHA,
    });
    const page = provider.read({ limit: 1 });
    expect(page.gitCanonicalSha).toBe(ALT_SHA);
    expect(() =>
      createDocumentaryBoundedHistoryProvider({ gitCanonicalSha: "not-a-sha" }),
    ).toThrow(/40-character/);
    expect(() =>
      createDocumentaryBoundedHistoryProvider({ gitCanonicalSha: "abcd" }),
    ).toThrow(/40-character/);
    expect(() => assertGitCanonicalSha("zzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzzz")).toThrow();
  });

  it("enriches seed with lot-1 main tip reference", () => {
    const page = createDocumentaryBoundedHistoryProvider().read({
      limit: BOUNDED_HISTORY_MAX_ITEMS,
    });
    const tip = page.items.find((i) => i.id === "hist-t-a7-lot1-merged-main");
    expect(tip).toBeDefined();
    expect(tip?.gitProvenance.ref).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);
    expect(tip?.metadata.pr).toBe("287");
  });

  it("supports unavailable provider without claiming full archive", () => {
    const page = createUnavailableBoundedHistoryProvider().read();
    expect(page.availability).toBe("NOT_AVAILABLE");
    expect(page.items).toEqual([]);
    expect(page.gitCanonical).toBe(true);
    expect(page.retention).toBe("GIT_ONLY");
    expect(page.paginationMode).toBe("PREFIX_ONLY");
    expect(page.gitCanonicalSha).toMatch(/^[0-9a-f]{40}$/);
  });

  it("refuses mutation semantics via contract helper", () => {
    const page = createDocumentaryBoundedHistoryProvider().read({ limit: 1 });
    expect(() => assertBoundedHistoryImmutable(page)).not.toThrow(
      BoundedHistoryMutationError,
    );
  });

  it("integrates with F11.2 readiness without circular product writes", () => {
    resetMethodModeHoldForTests();
    const snap = queryOperationalReadiness({
      historyProvider: createDocumentaryBoundedHistoryProvider({
        gitCanonicalSha: ALT_SHA,
      }),
      historyLimit: 1,
    });
    expect(snap.observed.history.returned).toBe(1);
    expect(snap.observed.history.availability).toBe("PARTIAL");
    expect(snap.observed.history.gitCanonicalSha).toBe(ALT_SHA);
    expect(snap.observed.history.paginationMode).toBe("PREFIX_ONLY");
    expect(snap.writeCommands).toBe(false);
    expect(snap.accessSurface).toBe("INTERNAL_ONLY");
  });

  it("preserves back-compat seed-array and options overloads", () => {
    const fromArray = createDocumentaryBoundedHistoryProvider([]).read({
      limit: 5,
    });
    expect(fromArray.availability).toBe("EMPTY");
    expect(fromArray.returned).toBe(0);
    expect(fromArray.gitCanonicalSha).toBe(DEFAULT_BOUNDED_HISTORY_GIT_SHA);

    const fromOptions = createDocumentaryBoundedHistoryProvider({
      seed: [],
      gitCanonicalSha: ALT_SHA,
    }).read({ limit: 5 });
    expect(fromOptions.availability).toBe("EMPTY");
    expect(fromOptions.gitCanonicalSha).toBe(ALT_SHA);
  });
});
