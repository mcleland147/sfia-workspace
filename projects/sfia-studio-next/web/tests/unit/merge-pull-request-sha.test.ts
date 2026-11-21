import { describe, expect, it, vi } from "vitest";
import { mergePullRequestRemote } from "@/domains/integrations/github-app-auth";
import { isStudioError } from "@/lib/http-errors";

const HEAD = "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";
const MERGE = "bbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbbb";
const OTHER = "cccccccccccccccccccccccccccccccccccccccc";

function jsonResponse(status: number, body: unknown) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

describe("P0-02 mergePullRequestRemote SHA proof", () => {
  it("returns observed merge_commit_sha when PR already merged (idempotent)", async () => {
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (url.includes("/pulls/7") && method === "GET" && !url.endsWith("/merge")) {
        return jsonResponse(200, {
          number: 7,
          title: "doc",
          state: "closed",
          html_url: "https://github.com/o/r/pull/7",
          merged: true,
          merge_commit_sha: MERGE,
          head: { sha: HEAD, ref: "studio/pub" },
          base: { sha: OTHER, ref: "main" },
        });
      }
      return jsonResponse(500, { message: "unexpected " + url });
    });

    const result = await mergePullRequestRemote({
      token: "t",
      fullName: "o/r",
      prNumber: 7,
      expectedHeadSha: HEAD,
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    expect(result.merged).toBe(true);
    expect(result.sha).toBe(MERGE);
    expect(result.sha).not.toBe(HEAD);
  });

  it("AMBIGUOUS when already merged but merge_commit_sha missing", async () => {
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (url.includes("/pulls/8") && method === "GET") {
        return jsonResponse(200, {
          number: 8,
          title: "doc",
          state: "closed",
          html_url: "https://github.com/o/r/pull/8",
          merged: true,
          merge_commit_sha: null,
          head: { sha: HEAD, ref: "studio/pub" },
          base: { sha: OTHER, ref: "main" },
        });
      }
      return jsonResponse(500, { message: "no" });
    });

    await expect(
      mergePullRequestRemote({
        token: "t",
        fullName: "o/r",
        prNumber: 8,
        expectedHeadSha: HEAD,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toSatisfy(
      (e: unknown) => isStudioError(e) && e.code === "AMBIGUOUS" && /fusion/.test(e.message),
    );
  });

  it("CONFLICT when already merged with divergent HEAD", async () => {
    const fetchImpl = vi.fn(async () =>
      jsonResponse(200, {
        number: 9,
        title: "doc",
        state: "closed",
        html_url: "https://github.com/o/r/pull/9",
        merged: true,
        merge_commit_sha: MERGE,
        head: { sha: OTHER, ref: "studio/pub" },
        base: { sha: HEAD, ref: "main" },
      }),
    );

    await expect(
      mergePullRequestRemote({
        token: "t",
        fullName: "o/r",
        prNumber: 9,
        expectedHeadSha: HEAD,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "CONFLICT");
  });

  it("returns merge API sha on fresh merge — never head", async () => {
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (url.includes("/pulls/10") && method === "GET" && !url.endsWith("/merge")) {
        return jsonResponse(200, {
          number: 10,
          title: "doc",
          state: "open",
          html_url: "https://github.com/o/r/pull/10",
          merged: false,
          head: { sha: HEAD, ref: "studio/pub" },
          base: { sha: OTHER, ref: "main" },
        });
      }
      if (url.endsWith("/merge") && method === "PUT") {
        return jsonResponse(200, { merged: true, sha: MERGE });
      }
      return jsonResponse(500, { message: "unexpected" });
    });

    const result = await mergePullRequestRemote({
      token: "t",
      fullName: "o/r",
      prNumber: 10,
      expectedHeadSha: HEAD,
      expectedBaseSha: OTHER,
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    expect(result.sha).toBe(MERGE);
  });

  it("CONFLICT on HEAD drift before merge", async () => {
    const fetchImpl = vi.fn(async () =>
      jsonResponse(200, {
        number: 11,
        title: "doc",
        state: "open",
        html_url: "https://github.com/o/r/pull/11",
        merged: false,
        head: { sha: OTHER, ref: "studio/pub" },
        base: { sha: HEAD, ref: "main" },
      }),
    );

    await expect(
      mergePullRequestRemote({
        token: "t",
        fullName: "o/r",
        prNumber: 11,
        expectedHeadSha: HEAD,
        fetchImpl: fetchImpl as unknown as typeof fetch,
      }),
    ).rejects.toSatisfy((e: unknown) => isStudioError(e) && e.code === "CONFLICT");
  });

  it("does not PUT merge a second time when already merged", async () => {
    const fetchImpl = vi.fn(async (input: RequestInfo | URL, init?: RequestInit) => {
      const url = String(input);
      const method = (init?.method ?? "GET").toUpperCase();
      if (method === "PUT") {
        return jsonResponse(500, { message: "should not merge again" });
      }
      return jsonResponse(200, {
        number: 12,
        title: "doc",
        state: "closed",
        html_url: "https://github.com/o/r/pull/12",
        merged: true,
        merge_commit_sha: MERGE,
        head: { sha: HEAD, ref: "studio/pub" },
        base: { sha: OTHER, ref: "main" },
      });
    });

    await mergePullRequestRemote({
      token: "t",
      fullName: "o/r",
      prNumber: 12,
      expectedHeadSha: HEAD,
      fetchImpl: fetchImpl as unknown as typeof fetch,
    });
    const puts = fetchImpl.mock.calls.filter(
      (c) => ((c[1] as RequestInit | undefined)?.method ?? "GET").toUpperCase() === "PUT",
    );
    expect(puts).toHaveLength(0);
  });
});
