import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import {
  listKnowledge,
  mergeSubjects,
  renameSubject,
  splitSubject,
} from "@/domains/knowledge/service";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(_: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const knowledge = await listKnowledge(session.pilotId, preparationId);
    return NextResponse.json({ knowledge });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

export async function POST(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const body = (await req.json()) as {
      action?: "rename" | "merge" | "split";
      subjectId?: string;
      newTitle?: string;
      targetSubjectId?: string;
      sourceSubjectId?: string;
      acquisIds?: string[];
      openPointIds?: string[];
    };

    if (body.action === "rename" && body.subjectId && body.newTitle) {
      const result = await renameSubject(
        session.pilotId,
        preparationId,
        body.subjectId,
        body.newTitle,
      );
      return NextResponse.json(result);
    }
    if (body.action === "merge" && body.targetSubjectId && body.sourceSubjectId) {
      const result = await mergeSubjects(
        session.pilotId,
        preparationId,
        body.targetSubjectId,
        body.sourceSubjectId,
      );
      return NextResponse.json(result);
    }
    if (body.action === "split" && body.subjectId && body.newTitle) {
      const result = await splitSubject(session.pilotId, preparationId, body.subjectId, {
        newTitle: body.newTitle,
        acquisIds: body.acquisIds ?? [],
        openPointIds: body.openPointIds ?? [],
      });
      return NextResponse.json(result);
    }
    return NextResponse.json(
      { error: "INVALID_REQUEST", errorCategory: "INVALID_REQUEST" },
      { status: 400 },
    );
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
