import { NextResponse } from "next/server";
import { authorizeCursorExecution } from "@/domains/execution/cursor-attempt-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;
    const body = (await req.json()) as {
      statement?: string;
      inspectedFingerprint?: string;
      /** Explicit Oui — required. Missing / false = no HumanDecision, no effect. */
      confirmed?: boolean;
    };
    if (!body.statement || !body.inspectedFingerprint) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    if (body.confirmed !== true) {
      return NextResponse.json(
        {
          error: "CONFIRMATION_REFUSED",
          message: "Confirmation Non ou absente — aucun acte D6, aucun dispatch",
        },
        { status: 400 },
      );
    }
    const result = await authorizeCursorExecution({
      pilotId: session.pilotId,
      projectId,
      attemptId,
      statement: body.statement,
      inspectedFingerprint: body.inspectedFingerprint,
      confirmed: true,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
