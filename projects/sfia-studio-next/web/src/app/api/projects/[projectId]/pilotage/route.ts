import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { executePilotageCommand, getPilotageProjection } from "@/domains/pilotage/service";
import { pilotageCommandHttpStatus, type PilotageRequestBody } from "@/domains/pilotage/types";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(_: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const pilotage = await getPilotageProjection(session.pilotId, projectId);
    return NextResponse.json({ pilotage });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

export async function POST(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const body = (await req.json()) as PilotageRequestBody;
    if (!body.clientCommandKey) {
      const headerKey = req.headers.get("idempotency-key");
      if (headerKey) body.clientCommandKey = headerKey;
    }
    const result = await executePilotageCommand(session.pilotId, projectId, body);
    return NextResponse.json(result, { status: pilotageCommandHttpStatus(result) });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
