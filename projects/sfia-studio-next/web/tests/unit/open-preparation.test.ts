import { beforeEach, describe, expect, it, vi } from "vitest";
import { openPreparation } from "@/lib/open-preparation";

describe("openPreparation (D2 client)", () => {
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
    const r = await openPreparation();
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
    const r = await openPreparation();
    expect(r.kind).toBe("refused");
    expect(fetch).toHaveBeenCalledTimes(1);
  });

  it("on uncertain empty body, reloads portfolio once and never retries POST", async () => {
    const fetchMock = vi
      .fn()
      .mockResolvedValueOnce(
        new Response("{}", { status: 200, headers: { "Content-Type": "application/json" } }),
      )
      .mockResolvedValueOnce(
        new Response(
          JSON.stringify({
            portfolio: {
              preparations: { items: [{ id: "prep-new" }], nextCursor: null },
            },
          }),
          { status: 200, headers: { "Content-Type": "application/json" } },
        ),
      );
    vi.stubGlobal("fetch", fetchMock);
    const r = await openPreparation({ knownPreparationIds: [] });
    expect(r.kind).toBe("uncertain");
    if (r.kind === "uncertain") expect(r.discoveredId).toBe("prep-new");
    expect(fetchMock).toHaveBeenCalledTimes(2);
    expect(fetchMock.mock.calls.filter((c) => c[1]?.method === "POST")).toHaveLength(1);
  });
});
