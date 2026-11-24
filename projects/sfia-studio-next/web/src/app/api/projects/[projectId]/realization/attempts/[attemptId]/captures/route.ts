import { NextResponse } from "next/server";
import { getCursorAttempt } from "@/domains/execution/cursor-attempt-service";
import {
  listEvidenceCapturesForAttempt,
  storeEvidenceCapture,
} from "@/domains/proofs/evidence-captures";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse, StudioError } from "@/lib/http-errors";

/** G07 — list / store original evidence captures for an attempt (DEV). */
export async function GET(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;
    await getCursorAttempt({
      pilotId: session.pilotId,
      projectId,
      attemptId,
    });
    const captures = listEvidenceCapturesForAttempt(attemptId).filter(
      (c) => c.pilotId === session.pilotId && c.projectId === projectId,
    );
    return NextResponse.json({ captures });
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
    await getCursorAttempt({
      pilotId: session.pilotId,
      projectId,
      attemptId,
    });
    const body = (await req.json().catch(() => ({}))) as {
      /** Base64 PNG/JPEG — DEV fixtures only; no secrets. */
      dataBase64?: string;
      label?: string;
      mimeType?: string;
      viewport?: { w: number; h: number };
    };
    if (!body.dataBase64 || !body.label) {
      throw new StudioError("INVALID_REQUEST", "dataBase64 et label requis", {
        exposeMessage: true,
      });
    }
    if (body.dataBase64.length > 2_500_000) {
      throw new StudioError("INVALID_REQUEST", "capture trop volumineuse", {
        exposeMessage: true,
      });
    }
    const bytes = Buffer.from(body.dataBase64, "base64");
    const meta = storeEvidenceCapture({
      attemptId,
      projectId,
      pilotId: session.pilotId,
      bytes,
      label: body.label,
      mimeType: body.mimeType,
      viewport: body.viewport ?? null,
      source: "BROWSER",
      environment: "DEV",
      buildSha: process.env.SFIA_BUILD_SHA ?? null,
    });
    return NextResponse.json({ capture: meta });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
