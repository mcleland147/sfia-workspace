import { describe, expect, it } from "vitest";
import { assertPublicDnsEgress, fetchPublicHttpsPinned } from "@/domains/conversation/web-egress-guard";

/**
 * Node ≥18 https.request lookup often uses options.all=true.
 * Returning (err, address, family) then yields "Invalid IP address: undefined".
 */
describe("ML5 web egress pinned lookup (options.all)", () => {
  it("fetches a public HTTPS page with DNS pin under options.all=true", async () => {
    const url = "https://www.postgresql.org/docs/current/index.html";
    const dns = await assertPublicDnsEgress(url);
    expect(dns.ok).toBe(true);
    if (!dns.ok) return;
    const ctrl = new AbortController();
    const timer = setTimeout(() => ctrl.abort(), 15_000);
    try {
      const pinned = await fetchPublicHttpsPinned({
        url,
        addresses: dns.addresses,
        signal: ctrl.signal,
      });
      expect(pinned.status).toBeGreaterThanOrEqual(200);
      expect(pinned.status).toBeLessThan(400);
      expect(pinned.pinnedAddress).toBeTruthy();
      expect(pinned.pinnedAddress).not.toBe("undefined");
    } finally {
      clearTimeout(timer);
    }
  }, 20_000);
});
