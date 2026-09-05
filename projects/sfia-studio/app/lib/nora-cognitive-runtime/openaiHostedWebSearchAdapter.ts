/**
 * MW6 — Thin OpenAI hosted web_search adapter (provider primitive only).
 *
 * Debt: provider-specific mapping isolated here.
 * Exit: another source adapter can be added without replacing Nora
 * cognition / grounding / authority logic.
 *
 * Does NOT route through routeToolCall / ControlTowerToolName.
 */

import { webSearchTool, type HostedTool } from "@openai/agents";
import {
  normalizeHostedWebSearchCall,
  type HostedWebSearchCallLike,
} from "./externalSourceNormalization";
import type { SourceObservationFact } from "./sourceIntelligenceContract";

export type NoraHostedWebSearchToolOptions = {
  searchContextSize?: "low" | "medium" | "high";
  allowedDomains?: string[] | null;
  externalWebAccess?: boolean;
};

/**
 * Create the SDK hosted web_search tool for the existing Option C Agent.
 */
export function createNoraHostedWebSearchTool(
  options: NoraHostedWebSearchToolOptions = {},
): HostedTool {
  return webSearchTool({
    searchContextSize: options.searchContextSize ?? "medium",
    ...(options.allowedDomains
      ? { filters: { allowedDomains: options.allowedDomains } }
      : {}),
    ...(options.externalWebAccess !== undefined
      ? { externalWebAccess: options.externalWebAccess }
      : {}),
  });
}

/**
 * Extract hosted web_search calls from Runner newItems (public RunItem surface).
 */
export function extractHostedWebSearchCallsFromRunItems(
  newItems: readonly unknown[] | null | undefined,
): HostedWebSearchCallLike[] {
  if (!newItems || newItems.length === 0) return [];
  const out: HostedWebSearchCallLike[] = [];
  for (const item of newItems) {
    if (!item || typeof item !== "object") continue;
    const anyItem = item as {
      type?: string;
      rawItem?: HostedWebSearchCallLike;
    };
    if (anyItem.type !== "tool_call_item") continue;
    const raw = anyItem.rawItem;
    if (!raw || typeof raw !== "object") continue;
    if (raw.type !== "hosted_tool_call") continue;
    const name = String(raw.name ?? "");
    const pdType = String(
      (raw.providerData as { type?: string } | undefined)?.type ?? "",
    );
    if (
      name === "web_search" ||
      name === "web_search_call" ||
      pdType === "web_search_call" ||
      pdType === "web_search"
    ) {
      out.push(raw);
    }
  }
  return out;
}

/**
 * Normalize OpenAI hosted (or deterministic fixture) calls via the shared path.
 */
export function normalizeOpenAiHostedWebSearchObservations(
  calls: readonly HostedWebSearchCallLike[],
  opts?: {
    deterministic?: boolean;
    nowIso?: string | null;
    stale?: boolean;
  },
): SourceObservationFact[] {
  const provider = opts?.deterministic
    ? "deterministic_fixture"
    : "openai_hosted_web_search";
  return calls.flatMap((call) =>
    normalizeHostedWebSearchCall(call, {
      provider,
      nowIso: opts?.nowIso,
      stale: opts?.stale,
    }),
  );
}

/** Public signature probe for capability-fit tests (no network). */
export function describeNoraHostedWebSearchPublicSurface(): {
  toolFactory: "webSearchTool";
  hostedToolType: "hosted_tool";
  defaultName: "web_search";
  statusEnum: readonly string[];
  actionTypesDocumented: readonly string[];
  includableSources: "web_search_call.action.sources";
  includableResults: "web_search_call.results";
} {
  const tool = createNoraHostedWebSearchTool();
  return {
    toolFactory: "webSearchTool",
    hostedToolType: tool.type,
    defaultName: "web_search",
    statusEnum: ["in_progress", "completed", "searching", "failed"],
    actionTypesDocumented: ["search", "open_page", "find_in_page"],
    includableSources: "web_search_call.action.sources",
    includableResults: "web_search_call.results",
  };
}
