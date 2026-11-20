import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { loadPendingDocumentCandidate } from "@/domains/conversation/document-candidate";
import { studioErrorResponse } from "@/lib/http-errors";
import { emitObs, newRequestId } from "@/lib/observability";

/**
 * P0-C — authorized read of a sealed pending document candidate (no D4 mutation).
 * Client may pass expectedSha as a pointer check; markdown authority is server-side.
 */
export async function GET(
  req: Request,
  ctx: { params: Promise<{ preparationId: string; candidateId: string }> },
) {
  const requestId = newRequestId();
  try {
    const session = await requireStudioSession();
    const { preparationId, candidateId } = await ctx.params;
    const url = new URL(req.url);
    const expectedSha = url.searchParams.get("expectedSha")?.trim() || undefined;
    const loaded = await loadPendingDocumentCandidate({
      pilotId: session.pilotId,
      preparationId,
      candidateId,
      expectedContentSha256: expectedSha,
    });
    if (!loaded.ok) {
      return NextResponse.json(
        {
          status: "NOT_AVAILABLE",
          reason: loaded.reason,
          requestId,
        },
        { status: loaded.reason === "CANDIDATE_DENIED" ? 403 : 404 },
      );
    }
    const c = loaded.candidate;
    return NextResponse.json({
      status: "PENDING",
      candidate: {
        candidateId: c.id,
        documentId: c.documentId,
        sourceRevisionId: c.sourceRevisionId,
        observedHeadRevisionId: c.observedHeadRevisionId,
        title: c.title,
        contentMarkdown: c.contentMarkdown,
        contentSha256: c.contentSha256,
        historicalAuthorizationId: c.historicalAuthorizationId ?? null,
        createdAt: c.createdAt,
      },
      requestId,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    emitObs({
      event_name: "api.document_candidate.get_error",
      component: "api.document_candidate",
      request_id: requestId,
      outcome: "FAILED",
      error_category: mapped.body.errorCategory,
    });
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
