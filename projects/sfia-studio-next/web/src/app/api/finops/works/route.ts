import { NextResponse } from "next/server";
import { loadFinOpsWorks } from "@/domains/finops/usage-read-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function GET(req: Request) {
  try {
    const session = await requireStudioSession();
    const url = new URL(req.url);
    const works = await loadFinOpsWorks(session.pilotId, {
      period: url.searchParams.get("period"),
      projectId: url.searchParams.get("projectId"),
      model: url.searchParams.get("model"),
      limit: url.searchParams.has("limit")
        ? Number(url.searchParams.get("limit"))
        : undefined,
    });
    return NextResponse.json(works);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}