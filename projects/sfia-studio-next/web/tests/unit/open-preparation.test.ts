import { beforeEach, describe, expect, it, vi } from "vitest";
import {
  isOpenPreparationBusy,
  openPreparationForTest,
  runOpenPreparation,
  subscribeOpenPreparationBusy,
} from "@/lib/open-preparation";

describe("openPreparation POST classification (D2 client)", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("returns opened with preparationId on successful POST", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        new Response(JSON.stringify({ preparationId: "prep-1" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }),
      ),
    );
    const r = await openPreparationForTest();
    expect(r).toEqual({ kind: "opened", preparationId: "prep-1" });
    expect(fetch).toHaveBeenCalledTimes(1);
    expect(fetch).toHaveBeenCalledWith("/api/preparations", { method: "POST" });
  });

  it("returns refused without second POST", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () =>
        new Response(JSON.stringify({ error: "NOPE" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }),
      ),
    );
    const r = await openPreparationForTest();
    expect(r.kind).toBe("refused");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("returns unauthorized on 401", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => new Response(JSON.stringify({ error: "auth" }), { status: 401 })),
    );
    const r = await openPreparationForTest();
    expect(r).toEqual({ kind: "unauthorized" });
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("on empty ACK body stays UNCERTAIN without confirming via portfolio ids", async () => {
    const fetchMock = vi.fn(async (url: RequestInfo | URL, init?: RequestInit) => {
      if (typeof url === "string" && url.includes("/api/portfolio")) {
        return new Response(
          JSON.stringify({
            portfolio: {
              preparations: { items: [{ id: "prep-preexisting" }], nextCursor: null },
            },
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        );
      }
      return new Response("{}", {
        status: 200,
        headers: { "Content-Type": "application/json" },
      });
    });
    vi.stubGlobal("fetch", fetchMock);
    const r = await openPreparationForTest();
    expect(r.kind).toBe("uncertain");
    if (r.kind === "uncertain") {
      expect(r.message).toMatch(/incertaine|peut-être/i);
      expect(r.message).not.toMatch(/confirmée/i);
      expect("discoveredId" in r).toBe(false);
    }
    expect(fetchMock.mock.calls.filter((c) => c[1]?.method === "POST")).toHaveLength(1);
    // No portfolio GET required for classification — never invent OPENED from list diff.
    expect(fetchMock.mock.calls.filter((c) => String(c[0]).includes("/api/portfolio"))).toHaveLength(
      0,
    );
  });

  it("network failure stays UNCERTAIN without second POST", async () => {
    vi.stubGlobal(
      "fetch",
      vi.fn(async () => {
        throw new Error("network down");
      }),
    );
    const r = await openPreparationForTest();
    expect(r.kind).toBe("uncertain");
    expect(fetch).toHaveBeenCalledTimes(1);
  });
});

describe("runOpenPreparation single-flight", () => {
  beforeEach(() => {
    vi.restoreAllMocks();
  });

  it("serializes concurrent callers to a single POST", async () => {
    let resolvePost!: (v: Response) => void;
    const postGate = new Promise<Response>((r) => {
      resolvePost = r;
    });
    const fetchMock = vi.fn(async (_url: RequestInfo | URL, init?: RequestInit) => {
      if (init?.method === "POST") return postGate;
      throw new Error("unexpected fetch");
    });
    vi.stubGlobal("fetch", fetchMock);

    const busyStates: boolean[] = [];
    const unsub = subscribeOpenPreparationBusy((b) => busyStates.push(b));

    const navigations: string[] = [];
    const first = runOpenPreparation(async (result) => {
      if (result.kind === "opened") navigations.push(result.preparationId);
    });
    // Let first acquire the lock.
    await Promise.resolve();
    expect(isOpenPreparationBusy()).toBe(true);

    const second = runOpenPreparation(async (result) => {
      if (result.kind === "opened") navigations.push(`second:${result.preparationId}`);
    });

    resolvePost(
      new Response(JSON.stringify({ preparationId: "prep-only" }), {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }),
    );

    const [a, b] = await Promise.all([first, second]);
    expect(a).toEqual({ kind: "opened", preparationId: "prep-only" });
    expect(b).toEqual({ kind: "busy" });
    expect(navigations).toEqual(["prep-only"]);
    expect(fetchMock.mock.calls.filter((c) => c[1]?.method === "POST")).toHaveLength(1);
    expect(isOpenPreparationBusy()).toBe(false);
    expect(busyStates).toContain(true);
    unsub();
  });

  it("releases lock after refused so a later call can POST", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ error: "NOPE" }), {
          status: 500,
          headers: { "Content-Type": "application/json" },
        }),
      )
      .mockResolvedValueOnce(
        new Response(JSON.stringify({ preparationId: "prep-2" }), {
          status: 200,
          headers: { "Content-Type": "application/json" },
        }),
      );
    vi.stubGlobal("fetch", fetchMock);

    const first = await runOpenPreparation(async () => undefined);
    expect(first.kind).toBe("refused");
    expect(isOpenPreparationBusy()).toBe(false);

    const second = await runOpenPreparation(async () => undefined);
    expect(second).toEqual({ kind: "opened", preparationId: "prep-2" });
    expect(fetchMock.mock.calls.filter((c) => c[1]?.method === "POST")).toHaveLength(2);
  });
});
