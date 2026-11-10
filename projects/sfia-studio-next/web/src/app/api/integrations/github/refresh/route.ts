import { NextResponse } from "next/server";
import { refreshRepositories } from "@/domains/integrations/authorization-service";
import { requireStudioSession } from "@/domains/identity/session";
import { studioErrorResponse } from "@/lib/http-errors";

export async function POST() {
  try {
    const session = await requireStudioSession();
    const status = await refreshRepositories(session.pilotId);
    return NextResponse.json(status);
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
