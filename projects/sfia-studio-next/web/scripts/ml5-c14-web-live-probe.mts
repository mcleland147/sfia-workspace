/**
 * C14 — WEB LIVE frontier probe (isolated agent + optional open) + isolation assert.
 */
import { config } from "dotenv";
config({ path: ".env.local", override: true });

import { mkdirSync, writeFileSync } from "fs";
import { join } from "path";
import {
  assertOutboundHasNoPrivateLeak,
  executePublicWebOpenPage,
  executePublicWebSearch,
  __getPublicWebOutboundLogForTests,
  __resetPublicWebOutboundLogForTests,
} from "../src/domains/conversation/public-web-search-frontier";

const OUT = join(process.cwd(), "../../../.tmp-sfia-review/browser/c14");

async function main() {
  mkdirSync(OUT, { recursive: true });
  process.env.SFIA_WEB_SEARCH_ENABLED = "1";
  process.env.SFIA_WEB_SEARCH_LIVE = "1";
  __resetPublicWebOutboundLogForTests();
  const markers = ["PILOT_PRIVATE_C14", "sk-proj-FAKESECRET", "doc/internal/c14.md"];
  const search = await executePublicWebSearch({
    rawQuery: "MDN JavaScript Array map method documentation",
    privateContextMarkers: markers,
  });
  const outbound = __getPublicWebOutboundLogForTests();
  const leak = outbound[0]
    ? assertOutboundHasNoPrivateLeak(outbound[0].outboundFields, markers)
    : { ok: false as const, leaked: ["NO_OUTBOUND"] };
  let open = null as Awaited<ReturnType<typeof executePublicWebOpenPage>> | null;
  // Prefer a stable public URL for open proof if search empty
  const url =
    search.items[0]?.url ?? "https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map";
  open = await executePublicWebOpenPage({ url });
  const out = {
    at: new Date().toISOString(),
    search: {
      status: search.status,
      mode: search.mode,
      items: search.items.slice(0, 3),
      limits: search.limits,
    },
    isolationOk: leak.ok === true,
    outboundFields: outbound[0]?.outboundFields ?? null,
    open: {
      status: open.status,
      coverage: open.coverage,
      url: open.url,
      excerptChars: open.excerpt?.length ?? 0,
      limits: open.limits,
      hasHostileStrip: /hostile-marker/i.test(open.excerpt || ""),
    },
  };
  writeFileSync(join(OUT, "web-live-probe.json"), JSON.stringify(out, null, 2));
  console.log(JSON.stringify(out, null, 2));
  if (!out.isolationOk) process.exit(2);
  if (out.open.coverage !== "PAGE_OPENED" && out.open.coverage !== "PARTIAL") {
    process.exit(3);
  }
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
