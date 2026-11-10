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
      /** Hint only — server verifies against durable awaiting mission. */
      clientIntentKey?: string;
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
          projectName: body.projectName,
          clientIntentKey: body.clientIntentKey ?? null,
        });
        // Explicit mismatch/ambiguity — do not silently continue another mission.
        if (
          missionContinue.reason === "MISSION_KEY_MISMATCH" ||
          missionContinue.reason === "AMBIGUOUS_AWAITING"
        ) {
          const status =
            result.status === "CREATED" ? 201 : result.status === "ALREADY_CREATED" ? 200 : 400;
          return NextResponse.json(
            {
              ...result,
              sideEffects,
              missionContinue,
              missionBindingError: missionContinue.reason,
            },
            { status },
          );
        }
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
