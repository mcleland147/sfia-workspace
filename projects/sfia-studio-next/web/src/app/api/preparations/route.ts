import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { openOrCreatePreparation } from "@/domains/preparation/service";

export async function POST() {
  try {
    const session = await requireStudioSession();
    const prep = await openOrCreatePreparation(session.pilotId);
    return NextResponse.json({ preparationId: prep.id, status: prep.status, creationRevision: prep.creationRevision });
  } catch {
    return NextResponse.json({ error: "SESSION_INVALID" }, { status: 401 });
  }
}
