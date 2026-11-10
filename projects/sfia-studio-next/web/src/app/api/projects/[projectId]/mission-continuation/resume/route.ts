import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { recoverPendingMissionContinuation } from "@/domains/conversation/intent-conduction";

/**
 * G2 — nominal COMMAND recovery for interrupted D2→… continuation.
 * Protected, idempotent; never mounted on GET/listMessages.
 * UI may invoke once on project open without requiring the Pilot to reformulate.
 */
export async function POST(_: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const result = await recoverPendingMissionContinuation({
      pilotId: session.pilotId,
      projectId,
    });
    return NextResponse.json(result, { status: 200 });
  } catch (e) {
    const code = (e as { code?: string }).code;
    if (code === "SESSION_INVALID") {
      return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
    }
    return NextResponse.json({ error: "INTERNAL" }, { status: 500 });
  }
}
