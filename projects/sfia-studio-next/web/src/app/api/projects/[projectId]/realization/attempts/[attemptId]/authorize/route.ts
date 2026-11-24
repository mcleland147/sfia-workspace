import { NextResponse } from "next/server";
import {
  authorizeCursorExecution,
  dispatchCursorExecution,
} from "@/domains/execution/cursor-attempt-service";
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
      /** Explicit Oui/Non — must be boolean. Absent/null/invalid = no HumanDecision. */
      confirmed?: unknown;
    };
    if (!body.statement || !body.inspectedFingerprint) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    // C10 / T-02 — confirmed must be an explicit boolean.
    // Absent, null, or non-boolean → reject without HumanDecision / mutation.
    if (typeof body.confirmed !== "boolean") {
      return NextResponse.json(
        {
          error: "CONFIRMATION_REQUIRED",
          message:
            "confirmed doit être true (Oui) ou false (Non) — absence/null/invalide = aucun acte D6",
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
      confirmed: body.confirmed,
    });
    // C24 — D6 Oui must not leave AUTHORIZED orphaned when the browser navigates
    // away before a second /dispatch fetch. Same-request dispatch after authorize.
    if (body.confirmed === true && result.status === "AUTHORIZED") {
      try {
        const dispatched = await dispatchCursorExecution({
          pilotId: session.pilotId,
          projectId,
          attemptId,
        });
        return NextResponse.json({
          ...result,
          status: dispatched.status,
          dispatch: {
            status: dispatched.status,
            idempotent: "idempotent" in dispatched ? dispatched.idempotent : false,
            limits: "limits" in dispatched ? dispatched.limits : undefined,
          },
        });
      } catch (dispatchErr) {
        const mapped = studioErrorResponse(dispatchErr);
        return NextResponse.json(
          {
            ...result,
            status: "AUTHORIZED",
            dispatch: {
              status: "FAILED",
              error: mapped.body.error ?? "DISPATCH_FAILED",
              message: mapped.body.message ?? String((dispatchErr as Error)?.message ?? ""),
            },
          },
          // Authorize succeeded — surface dispatch failure without undoing D6.
          { status: 200 },
        );
      }
    }
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
