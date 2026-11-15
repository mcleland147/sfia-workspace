import { NextResponse } from "next/server";
import { requireStudioSession } from "@/domains/identity/session";
import { reconcileCreateProject } from "@/domains/preparation/create-project";
import {
  loadSealedDocumentBinding,
  reconcileDocumentCommandFromBinding,
} from "@/domains/conversation/document-command";
import { studioErrorResponse } from "@/lib/http-errors";

/**
 * GET reconcile — D2 create-project by default.
 * Optional `documentCommandId` selects C-01 read-only D4 document-command reconcile.
 * Never mutates D4.
 */
export async function GET(req: Request, ctx: { params: Promise<{ preparationId: string }> }) {
  try {
    const session = await requireStudioSession();
    const { preparationId } = await ctx.params;
    const url = new URL(req.url);
    const documentCommandId = url.searchParams.get("documentCommandId")?.trim() || undefined;

    if (documentCommandId) {
      const loaded = await loadSealedDocumentBinding({
        pilotId: session.pilotId,
        preparationId,
        commandId: documentCommandId,
        correlationKey: url.searchParams.get("correlationKey"),
      });
      if (!loaded.ok) {
        const httpStatus =
          loaded.reason === "COMMAND_DENIED"
            ? 403
            : loaded.reason === "BINDING_SELECTOR_REQUIRED"
              ? 409
              : 404;
        return NextResponse.json(
          { status: "NOT_EXECUTED", reason: loaded.reason, kind: "document_command" },
          { status: httpStatus },
        );
      }
      const truth = await reconcileDocumentCommandFromBinding({
        pilotId: session.pilotId,
        preparationId,
        binding: loaded.binding,
      });
      return NextResponse.json({
        kind: "document_command",
        commandId: loaded.commandId,
        correlationKey: loaded.binding.correlationKey,
        action: loaded.binding.action,
        ...truth,
      });
    }

    const key = url.searchParams.get("idempotencyKey") ?? undefined;
    const result = await reconcileCreateProject(session.pilotId, preparationId, key);
    return NextResponse.json(result);
  } catch (e) {
    // ML4C S02 — preserve real error taxonomy (401 only for session).
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
