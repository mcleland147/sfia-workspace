/**
 * Honest Product text when mission maxTurns is exhausted without extractable
 * assistant synthesis. Never invents document content from reasoning/tools.
 */
import {
  parseGitLocalReadCoverageSignals,
  unionReturnedLineSpans,
  type ReadCoverageFact,
} from "./readCoverage";

export const MODEL_TURN_BUDGET_REACHED_STOCK =
  "Model-turn budget reached (maxTurns).";

type ToolLikeItem = {
  type?: string;
  name?: string;
  rawItem?: { name?: string; type?: string };
  output?: unknown;
};

function asRecord(value: unknown): Record<string, unknown> | null {
  return value && typeof value === "object"
    ? (value as Record<string, unknown>)
    : null;
}

function extractToolResultPayload(item: ToolLikeItem): {
  summary?: string;
  data?: Record<string, unknown>;
} | null {
  const output = item.output;
  if (typeof output === "string") {
    try {
      const parsed = JSON.parse(output) as Record<string, unknown>;
      return {
        summary: typeof parsed.summary === "string" ? parsed.summary : undefined,
        data: asRecord(parsed.data) ?? undefined,
      };
    } catch {
      return null;
    }
  }
  const outObj = asRecord(output);
  if (!outObj) return null;
  if (typeof outObj.text === "string") {
    try {
      const parsed = JSON.parse(outObj.text) as Record<string, unknown>;
      return {
        summary: typeof parsed.summary === "string" ? parsed.summary : undefined,
        data: asRecord(parsed.data) ?? undefined,
      };
    } catch {
      return { summary: outObj.text.slice(0, 240) };
    }
  }
  return {
    summary: typeof outObj.summary === "string" ? outObj.summary : undefined,
    data: asRecord(outObj.data) ?? outObj,
  };
}

/**
 * Build coverage facts from Runner newItems / Session-like tool results.
 */
export function collectReadFactsFromRunItems(
  items: unknown[],
): ReadCoverageFact[] {
  const facts: ReadCoverageFact[] = [];
  for (const raw of items) {
    const item = asRecord(raw) as ToolLikeItem | null;
    if (!item) continue;
    const name =
      item.name ??
      item.rawItem?.name ??
      (typeof (item as { toolName?: string }).toolName === "string"
        ? (item as { toolName?: string }).toolName
        : undefined);
    const type = item.type ?? item.rawItem?.type;
    const isResult =
      type === "function_call_result" ||
      type === "tool_call_output_item" ||
      type === "function_call_output";
    if (!isResult && name !== "git_local_read_file") continue;
    if (name && name !== "git_local_read_file") continue;
    if (name !== "git_local_read_file" && !isResult) continue;

    const payload = extractToolResultPayload(item);
    if (!payload) continue;
    const data = payload.data ?? {};
    const summary =
      payload.summary ??
      (typeof data.summary === "string" ? data.summary : undefined);
    const path =
      (typeof data.path === "string" && data.path) ||
      (summary ? parseGitLocalReadCoverageSignals({ summary })?.documentPath : null);
    if (!path && !summary) continue;

    const parsed = parseGitLocalReadCoverageSignals({
      summary: summary ?? null,
      pathOrRef:
        typeof data.returnedStartLine === "number" &&
        typeof data.returnedEndLine === "number"
          ? `${path}#L${data.returnedStartLine}-${data.returnedEndLine}`
          : path,
    });
    if (!parsed) continue;

    const truncated =
      data.truncated === true || parsed.truncated === true;
    const documentHasMore =
      data.documentHasMore === true || parsed.documentHasMore === true;
    const returnedStartLine =
      typeof data.returnedStartLine === "number"
        ? data.returnedStartLine
        : parsed.returnedStartLine;
    const returnedEndLine =
      typeof data.returnedEndLine === "number"
        ? data.returnedEndLine
        : parsed.returnedEndLine;

    facts.push({
      pathOrRef: `${parsed.documentPath}#L${returnedStartLine}-${returnedEndLine}`,
      documentPath: parsed.documentPath,
      // Budget-exhausted disclosure never promotes FULL from tool crumbs alone.
      coverage: "partial",
      startLine: parsed.startLine,
      endLine: parsed.endLine,
      returnedStartLine,
      returnedEndLine,
      totalLines: parsed.totalLines,
      hasMore: truncated || documentHasMore || parsed.hasMore,
      truncated,
      documentHasMore,
      nextStartLineHint:
        typeof data.nextStartLineHint === "number"
          ? data.nextStartLineHint
          : parsed.nextStartLineHint,
      signals: [
        truncated ? "truncated" : null,
        documentHasMore ? "documentHasMore" : null,
      ].filter(Boolean) as string[],
      origin: "current_turn",
    });
  }
  return facts;
}

/**
 * Honest incomplete narrative — never fabricates document synthesis.
 */
export function buildDocumentaryBudgetExhaustedText(input: {
  items: unknown[];
  stockMessage?: string;
}): string {
  const stock = input.stockMessage ?? MODEL_TURN_BUDGET_REACHED_STOCK;
  const facts = collectReadFactsFromRunItems(input.items);
  if (facts.length === 0) {
    return stock;
  }

  const unions = unionReturnedLineSpans(facts);
  const lines: string[] = [
    stock,
    "",
    "Analyse documentaire inachevée — budget model-turn atteint avant une synthèse finalisée.",
    "Périmètre réellement remis par l'outil (plages retournées, pas le contenu inventé) :",
  ];

  for (const u of unions) {
    const spanTxt = u.spans
      .map((s) => `L${s.start}-${s.end}`)
      .join(", ");
    const total =
      typeof u.totalLines === "number" ? ` / ${u.totalLines}` : "";
    lines.push(
      `- ${u.documentPath}: ${spanTxt}${total}${u.provenFull ? " (couverture intégrale prouvée)" : " (couverture partielle)"}`,
    );
  }

  const hints = facts
    .map((f) => f.nextStartLineHint)
    .filter((n): n is number => typeof n === "number");
  if (hints.length > 0) {
    lines.push(
      `Reprise possible depuis la ligne ${Math.min(...hints)} (nextStartLineHint observé) — aucune HumanDecision ni Deliverable inventés.`,
    );
  } else {
    lines.push(
      "Aucune HumanDecision ni Deliverable inventés ; statut Product incomplete.",
    );
  }

  return lines.join("\n");
}
