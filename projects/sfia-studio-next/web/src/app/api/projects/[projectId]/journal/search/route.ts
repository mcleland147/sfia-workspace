import { NextResponse } from "next/server";
import {
  searchJournalDecisions,
  searchJournalSubjects,
} from "@/domains/knowledge/journal";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

/** J-C08 / J-C11 — tab-scoped Journal search (subjects vs decisions). */
export async function GET(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const url = new URL(req.url);
    const q = url.searchParams.get("q") ?? "";
    const tab = url.searchParams.get("tab") === "decisions" ? "decisions" : "subjects";
    const openPointsOnly = url.searchParams.get("openPointsOnly") === "1";
    if (tab === "decisions") {
      const result = await searchJournalDecisions(session.pilotId, projectId, q);
      return NextResponse.json(result);
    }
    let queryVector: number[] | null = null;
    try {
      const {
        derivedEmbeddingSearchEnabled,
        embedQueryText,
      } = await import("@/domains/knowledge/derived-embedding-service");
      if (derivedEmbeddingSearchEnabled() && q.trim()) {
        const emb = await embedQueryText(q);
        queryVector = emb?.vector ?? null;
      }
    } catch {
      queryVector = null;
    }
    const result = await searchJournalSubjects(session.pilotId, projectId, q, {
      openPointsOnly,
      queryVector,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
