/**
 * C14 debug — dump isolated LIVE web search raw output for parser hardening.
 */
import { config } from "dotenv";
config({ path: ".env.local", override: true });

async function main() {
  process.env.SFIA_WEB_SEARCH_ENABLED = "1";
  process.env.SFIA_WEB_SEARCH_LIVE = "1";
  const { Agent, run, webSearchTool } = await import("@openai/agents");
  const agent = new Agent({
    name: "sfia-public-web-isolated",
    instructions: [
      "You are an isolated public-web search worker.",
      "Use web search, then reply with a compact JSON array (max 5) of",
      '{ "url": "https://...", "title": "...", "snippet": "..." }.',
      "No markdown fences. No commentary.",
    ].join(" "),
    tools: [webSearchTool({ searchContextSize: "medium" })],
    model: (process.env.SFIA_WEB_SEARCH_MODEL || "gpt-4.1-mini").trim(),
  });
  const query = "MDN Array.prototype.map JavaScript site:developer.mozilla.org";
  const result = await run(agent, query, { maxTurns: 6 });
  const hist = (result as { history?: unknown }).history;
  const state = (result as { state?: { _generatedItems?: unknown } }).state;
  const out = {
    finalType: typeof result.finalOutput,
    finalSlice:
      typeof result.finalOutput === "string"
        ? result.finalOutput.slice(0, 2000)
        : JSON.stringify(result.finalOutput)?.slice(0, 2000),
    historyType: Array.isArray(hist) ? `array:${hist.length}` : typeof hist,
    historySlice: Array.isArray(hist)
      ? JSON.stringify(hist).slice(0, 4000)
      : null,
    generatedItemsSlice: state?._generatedItems
      ? JSON.stringify(state._generatedItems).slice(0, 4000)
      : null,
  };
  console.log(JSON.stringify(out, null, 2));
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
