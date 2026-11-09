import { NextResponse } from "next/server";
import { prepareMerge } from "@/domains/execution/effect-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const body = (await req.json()) as {
      publicationAttemptId?: string;
      correlationKey?: string;
      /** @deprecated arbitrary PR merge removed — B3 */
      repositoryId?: string;
      prNumber?: number;
    };
    if (!body.publicationAttemptId || !body.correlationKey) {
      return NextResponse.json(
        {
          error: "INVALID_REQUEST",
          message: "publicationAttemptId et correlationKey requis (merge borné à une publication ML4)",
        },
        { status: 400 },
      );
    }
    const result = await prepareMerge({
      pilotId: session.pilotId,
      projectId,
      publicationAttemptId: body.publicationAttemptId,
      correlationKey: body.correlationKey,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
