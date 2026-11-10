import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { createProjectCommand } from "@/domains/preparation/create-project";
import { probeCreateProjectSideEffects } from "@/domains/boundaries/non-effects";
import { continueAfterProjectCreated } from "@/domains/conversation/intent-conduction";

export async function POST(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as {
      expectedCreationRevision?: number;
      projectName?: string;
      previewSummary?: string;
      idempotencyKey?: string;
    };
    if (
      typeof body.expectedCreationRevision !== "number" ||
      !body.projectName ||
      !body.idempotencyKey
    ) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    const result = await createProjectCommand({
      pilotId: session.pilotId,
      preparationId,
      expectedCreationRevision: body.expectedCreationRevision,
      projectName: body.projectName,
      previewSummary: body.previewSummary ?? "",
      idempotencyKey: body.idempotencyKey,
    });
    const sideEffects = probeCreateProjectSideEffects();

    // GAP-01/06: after D2 confirms create, continue same intention (COMMAND path only).
    let missionContinue: Awaited<ReturnType<typeof continueAfterProjectCreated>> | null = null;
    if (
      (result.status === "CREATED" || result.status === "ALREADY_CREATED") &&
      "projectId" in result &&
      result.projectId
    ) {
      try {
        missionContinue = await continueAfterProjectCreated({
          pilotId: session.pilotId,
          preparationId,
          projectId: result.projectId,
        });
      } catch {
        missionContinue = {
          continued: false,
          missionProjection: null,
          documentSave: null,
          assistantMessageId: null,
          reason: "CONTINUE_FAILED",
        };
      }
    }

    const status =
      result.status === "CREATED"
        ? 201
        : result.status === "ALREADY_CREATED"
          ? 200
          : result.status === "CONFLICT"
            ? 409
            : result.status === "FORBIDDEN"
              ? 403
              : 400;
    return NextResponse.json({ ...result, sideEffects, missionContinue }, { status });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
