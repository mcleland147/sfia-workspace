import { NextResponse } from "next/server";
import { preparePublication } from "@/domains/execution/effect-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST(req: Request, ctx: { params: Promise<{ projectId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { projectId } = await ctx.params;
    const body = (await req.json()) as {
      documentId?: string;
      revisionId?: string;
      repositoryId?: string;
      targetPath?: string;
      targetBranch?: string;
      correlationKey?: string;
      steps?: Array<"CREATE_BRANCH" | "PUBLISH_FILE" | "OPEN_PR"> | null;
    };
    if (
      !body.documentId ||
      !body.revisionId ||
      !body.repositoryId ||
      !body.targetPath ||
      !body.targetBranch ||
      !body.correlationKey
    ) {
      return NextResponse.json({ error: "INVALID_REQUEST" }, { status: 400 });
    }
    const result = await preparePublication({
      pilotId: session.pilotId,
      projectId,
      documentId: body.documentId,
      revisionId: body.revisionId,
      repositoryId: body.repositoryId,
      targetPath: body.targetPath,
      targetBranch: body.targetBranch,
      correlationKey: body.correlationKey,
      steps: body.steps,
    });
    return NextResponse.json(result);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
