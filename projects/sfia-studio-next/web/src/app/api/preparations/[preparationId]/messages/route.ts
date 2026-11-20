import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { listMessages, postUserMessageAndNora } from "@/domains/conversation/service";
import { studioErrorResponse } from "@/lib/http-errors";
import { emitObs, newRequestId } from "@/lib/observability";

export async function GET(_: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  const requestId = newRequestId();
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const messages = await listMessages(session.pilotId, preparationId);
    return NextResponse.json({ messages, requestId });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    emitObs({
      event_name: "api.messages.get_error",
      component: "api.messages",
      request_id: requestId,
      outcome: "FAILED",
      error_category: mapped.body.errorCategory,
    });
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

export async function POST(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  const requestId = newRequestId();
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as {
      content?: string;
      correlationKey?: string;
      clientTurnKey?: string;
      unresolvedPendingClientTurnKey?: string;
      documentFocus?: {
        documentId: string;
        sourceRevisionId: string;
        sourceRevisionNumber?: number;
        /** Client body ignored by server drafting authority (R1). */
        sourceContentMarkdown?: string;
        observedHeadRevisionId: string;
        observedHeadRevisionNumber?: number;
        confirmedHistoricalSource?: boolean;
        historicalConfirmation?: {
          documentId: string;
          sourceRevisionId: string;
          observedHeadRevisionId: string;
          choice: "USE_SOURCE" | "USE_HEAD" | "REFUSED";
        };
        historicalAuthorizationId?: string;
        conserveProposal?: boolean;
        pendingCandidateId?: string;
        pendingCandidateContentSha256?: string;
      } | null;
    };
    if (!body.content?.trim()) {
      return NextResponse.json(
        { error: "INVALID_REQUEST", errorCategory: "INVALID_REQUEST" },
        { status: 400 },
      );
    }
    const result = await postUserMessageAndNora(
      session.pilotId,
      preparationId,
      body.content.trim(),
      {
        correlationKey: body.correlationKey,
        clientTurnKey: body.clientTurnKey ?? body.correlationKey,
        unresolvedPendingClientTurnKey: body.unresolvedPendingClientTurnKey,
        documentFocus: body.documentFocus ?? null,
        requestId,
      },
    );
    const messages = await listMessages(session.pilotId, preparationId);
    // Pass through factual flags from the turn — never force humanDecisionCreated=false.
    return NextResponse.json({
      ...result,
      messages,
      humanDecisionCreated: Boolean(result.humanDecisionCreated),
      pilotageEffect: result.pilotageEffect ?? null,
      requestId,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    emitObs({
      event_name: "api.messages.post_error",
      component: "api.messages",
      request_id: requestId,
      outcome: "FAILED",
      error_category: mapped.body.errorCategory,
    });
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
