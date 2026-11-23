import { NextResponse } from "next/server";
import {
  getRealizationHandoff,
  ingestRealizationHandoff,
  type HandoffManifest,
} from "@/domains/execution/cursor-handoff";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;
    const result = await getRealizationHandoff({
      pilotId: session.pilotId,
      projectId,
      attemptId,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;
    const body = (await req.json()) as {
      reportMarkdown?: string;
      manifest?: HandoffManifest;
      expectedContractFingerprint?: string;
    };
    if (
      typeof body.reportMarkdown !== "string" ||
      !body.manifest ||
      !body.expectedContractFingerprint
    ) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    const result = await ingestRealizationHandoff({
      pilotId: session.pilotId,
      projectId,
      attemptId,
      reportMarkdown: body.reportMarkdown,
      manifest: body.manifest,
      expectedContractFingerprint: body.expectedContractFingerprint,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
