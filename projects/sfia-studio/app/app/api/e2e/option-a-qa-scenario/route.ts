/**
 * E2E-ONLY Option A QA scenario control surface.
 * Inactive by default — returns opaque 404 when gates fail.
 */

import { NextResponse } from "next/server";
import {
  armTerminalScenario,
  getOptionAQaRuntime,
  isKnownOptionAQaScenario,
  isOptionAQaControlEnabled,
  rejectUnknownOptionAQaFields,
  resetOptionAQaRuntime,
  runRecommendationStaleScenario,
  runRehydrateReadFailureScenario,
  type OptionAQaControlResult,
} from "@/lib/vertical-slice-runtime/e2eOptionAQaScenarioControl";
import { validateResolvedM3ExecutionBoundary } from "@/features/project-assistant/f3/validateResolvedM3ExecutionBoundary";

export const dynamic = "force-dynamic";

function opaqueNotFound(): NextResponse {
  return new NextResponse(null, { status: 404 });
}

export async function POST(request: Request): Promise<NextResponse> {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return opaqueNotFound();
  }

  if (!isOptionAQaControlEnabled()) {
    return opaqueNotFound();
  }

  const runtime = getOptionAQaRuntime();
  if (
    runtime.oa &&
    runtime.oa.fixtureAdapter.externalEffects !== false
  ) {
    return opaqueNotFound();
  }

  const unknown = rejectUnknownOptionAQaFields(body);
  if (unknown) {
    return NextResponse.json(
      {
        ok: false,
        code: "UNKNOWN_FIELD",
        message: `Unknown field rejected: ${unknown}`,
      } satisfies OptionAQaControlResult,
      { status: 400 },
    );
  }

  const scenarioRaw = body.scenario;
  if (
    typeof scenarioRaw !== "string" ||
    !isKnownOptionAQaScenario(scenarioRaw)
  ) {
    return NextResponse.json(
      {
        ok: false,
        code: "UNKNOWN_SCENARIO",
        message: "Scenario not in closed enum.",
      } satisfies OptionAQaControlResult,
      { status: 400 },
    );
  }

  if (scenarioRaw === "reset") {
    return NextResponse.json(resetOptionAQaRuntime());
  }

  const projectId =
    typeof body.projectId === "string" ? body.projectId : undefined;
  const decisionId =
    typeof body.decisionId === "string" ? body.decisionId : undefined;
  const executionContractId =
    typeof body.executionContractId === "string"
      ? body.executionContractId
      : undefined;

  if (scenarioRaw === "recommendation_stale") {
    if (!projectId) {
      return NextResponse.json(
        {
          ok: false,
          code: "PROJECT_ID_REQUIRED",
          message: "projectId required",
        } satisfies OptionAQaControlResult,
        { status: 400 },
      );
    }
    return NextResponse.json(
      await runRecommendationStaleScenario(runtime, projectId),
    );
  }

  if (scenarioRaw === "rehydrate_read_failure") {
    if (!projectId) {
      return NextResponse.json(
        {
          ok: false,
          code: "PROJECT_ID_REQUIRED",
          message: "projectId required",
        } satisfies OptionAQaControlResult,
        { status: 400 },
      );
    }
    return NextResponse.json(
      await runRehydrateReadFailureScenario(runtime, projectId),
    );
  }

  if (
    scenarioRaw === "attempt_failed" ||
    scenarioRaw === "attempt_timeout" ||
    scenarioRaw === "attempt_cancelled" ||
    scenarioRaw === "evidence_missing"
  ) {
    if (!projectId || !decisionId || !executionContractId) {
      return NextResponse.json(
        {
          ok: false,
          code: "IDS_REQUIRED",
          message: "projectId, decisionId, executionContractId required",
        } satisfies OptionAQaControlResult,
        { status: 400 },
      );
    }
    if (!runtime.oa) {
      return NextResponse.json(
        {
          ok: false,
          code: "OA_STACK_UNAVAILABLE",
          message: "OA missing",
        } satisfies OptionAQaControlResult,
        { status: 400 },
      );
    }

    const boundary = await validateResolvedM3ExecutionBoundary({
      projectId,
      decisionId,
      executionContractId,
      deps: {
        decisionServices: runtime.oa.decisionServices,
        executionContractServices: runtime.oa.executionContractServices,
        authorityResolver: runtime.oa.authorityResolver,
      },
    });
    if (!boundary.ok) {
      return NextResponse.json(
        {
          ok: false,
          code: boundary.code,
          message: boundary.message,
        } satisfies OptionAQaControlResult,
        { status: 400 },
      );
    }

    armTerminalScenario({
      scenario: scenarioRaw,
      projectId,
      decisionId,
      executionContractId,
    });

    return NextResponse.json({
      ok: true,
      scenario: scenarioRaw,
      detail:
        "Armed for next product Confirm — terminal outcome via existing Attempt use-cases.",
      armedForConfirm: true,
    } satisfies OptionAQaControlResult);
  }

  return NextResponse.json(
    {
      ok: false,
      code: "UNHANDLED_SCENARIO",
      message: "Scenario not handled.",
    } satisfies OptionAQaControlResult,
    { status: 400 },
  );
}
