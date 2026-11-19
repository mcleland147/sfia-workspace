/**
 * DEV/E2E-only Journal scenario seed for Ensemble 06 BROWSER proofs.
 * Uses real D4/D6 domain paths. Never LIVE Nora / REAL Git.
 */
import { NextResponse } from "next/server";
import { resolveStudioSession } from "@/domains/identity/session";
import { getOwnedProjectContext } from "@/domains/preparation/project-context";
import { seedJournalE2EScenario } from "@/domains/knowledge/journal-e2e-seed";
import { e2eFixtureMutationsAllowed } from "@/lib/e2e-fixture-gate";

export async function POST(req: Request) {
  const gate = e2eFixtureMutationsAllowed();
  if (!gate.ok) {
    return NextResponse.json(
      { error: "E2E_FIXTURE_FORBIDDEN", reason: gate.reason },
      { status: 403 },
    );
  }
  const session = await resolveStudioSession();
  if (!session) return NextResponse.json({ error: "UNAUTHORIZED" }, { status: 401 });

  const body = (await req.json().catch(() => ({}))) as {
    projectId?: string;
    longThreadCount?: number;
  };
  const projectId = (body.projectId ?? "").trim();
  if (!projectId) {
    return NextResponse.json({ error: "projectId required" }, { status: 400 });
  }

  let ctx: Awaited<ReturnType<typeof getOwnedProjectContext>>;
  try {
    ctx = await getOwnedProjectContext(session.pilotId, projectId);
  } catch {
    return NextResponse.json({ error: "project not found or not owned" }, { status: 404 });
  }
  if (!ctx.preparation?.id) {
    return NextResponse.json({ error: "preparation missing" }, { status: 404 });
  }

  try {
    const seed = await seedJournalE2EScenario({
      pilotId: session.pilotId,
      preparationId: ctx.preparation.id,
      projectId,
      longThreadCount: body.longThreadCount,
    });
    return NextResponse.json({ status: "AVAILABLE", seed });
  } catch (e) {
    return NextResponse.json(
      {
        error: "SEED_FAILED",
        reason: e instanceof Error ? e.message : "unknown",
      },
      { status: 500 },
    );
  }
}
