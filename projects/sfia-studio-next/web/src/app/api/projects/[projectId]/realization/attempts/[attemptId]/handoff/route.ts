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
      provenance?: {
        acquisition?: "CLIENT_DECLARED" | "SCRIPTED_ADAPTER" | "RUNTIME_COLLECTED" | "UNKNOWN";
        declaredExecutorId?: string | null;
        observedAgentId?: string | null;
        observedRunId?: string | null;
      };
    };
    if (
      typeof body.reportMarkdown !== "string" ||
      !body.manifest ||
      !body.expectedContractFingerprint
    ) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    // Client may never self-attest RUNTIME_COLLECTED (CF-09).
    const clientAcquisition = body.provenance?.acquisition;
    if (clientAcquisition === "RUNTIME_COLLECTED") {
      return NextResponse.json(
        {
          error: "INVALID_REQUEST",
          message: "RUNTIME_COLLECTED réservé au runtime serveur — pas au client",
        },
        { status: 400 },
      );
    }
    const acquisition =
      clientAcquisition === "SCRIPTED_ADAPTER" ||
      clientAcquisition === "CLIENT_DECLARED" ||
      clientAcquisition === "UNKNOWN"
        ? clientAcquisition
        : "CLIENT_DECLARED";
    const result = await ingestRealizationHandoff({
      pilotId: session.pilotId,
      projectId,
      attemptId,
      reportMarkdown: body.reportMarkdown,
      manifest: body.manifest,
      expectedContractFingerprint: body.expectedContractFingerprint,
      provenance: {
        acquisition,
        declaredExecutorId: body.provenance?.declaredExecutorId,
        observedAgentId: body.provenance?.observedAgentId,
        observedRunId: body.provenance?.observedRunId,
      },
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
