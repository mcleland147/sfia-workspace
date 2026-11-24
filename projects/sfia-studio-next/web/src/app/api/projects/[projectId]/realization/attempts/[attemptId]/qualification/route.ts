import { NextResponse } from "next/server";
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { effectAttempts, realizationHandoffs, realizationQualifications } from "@/db/schema";
import { getCursorAttempt } from "@/domains/execution/cursor-attempt-service";
import { getTechnicalContract } from "@/domains/execution/technical-contract";
import type { HandoffManifest } from "@/domains/execution/handoff-integrity";
import {
  buildDeterministicDossierSynthesis,
  buildNoraCognitiveAnalysisPrompt,
  buildNoraFinalAnalysisBrief,
  classifyAttachedNoraPayload,
  qualifyCursorRealization,
} from "@/domains/proofs/cursor-qualify";
import { generateNoraReply } from "@/domains/conversation/nora-adapter";
import { runNoraCognitiveTurn } from "@/domains/conversation/run-nora-cognitive-turn";
import {
  collectManifestRefs,
  verifyNewProofRef,
} from "@/domains/proofs/proof-ref-verify";
import { listEvidenceCapturesForAttempt } from "@/domains/proofs/evidence-captures";
import { requireStudioSession } from "@/domains/identity/session";
import { newId } from "@/lib/ids";
import { studioErrorResponse, StudioError } from "@/lib/http-errors";

export async function GET(
  _req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;
    await getCursorAttempt({
      pilotId: session.pilotId,
      projectId,
      attemptId,
    });
    const row = (
      await db
        .select()
        .from(realizationQualifications)
        .where(
          and(
            eq(realizationQualifications.attemptId, attemptId),
            eq(realizationQualifications.projectId, projectId),
            eq(realizationQualifications.pilotId, session.pilotId),
          ),
        )
        .limit(1)
    )[0];
    if (!row) return NextResponse.json({ status: "MISSING", qualification: null });
    const markdown = row.noraAnalysisMarkdown;
    let history: unknown[] = [];
    try {
      history = JSON.parse(row.historyJson || "[]") as unknown[];
    } catch {
      history = [];
    }
    const handoff = (
      await db
        .select()
        .from(realizationHandoffs)
        .where(eq(realizationHandoffs.attemptId, attemptId))
        .limit(1)
    )[0];
    let manifest: HandoffManifest | null = null;
    try {
      manifest = handoff
        ? (JSON.parse(handoff.manifestJson || "{}") as HandoffManifest)
        : null;
    } catch {
      manifest = null;
    }
    const attemptRow = (
      await db
        .select()
        .from(effectAttempts)
        .where(eq(effectAttempts.id, attemptId))
        .limit(1)
    )[0];
    let live: Record<string, unknown> = {};
    let planContractId: string | null = null;
    try {
      live = JSON.parse(attemptRow?.resultJson || "{}") as Record<string, unknown>;
    } catch {
      live = {};
    }
    try {
      const plan = JSON.parse(attemptRow?.planJson || "{}") as {
        contractId?: string;
      };
      planContractId = plan.contractId ?? null;
    } catch {
      planContractId = null;
    }
    const dossierVersion =
      typeof live.restitutionDossierVersion === "number"
        ? live.restitutionDossierVersion
        : null;
    return NextResponse.json({
      status: row.status,
      qualification: {
        id: row.id,
        verdict: row.verdict,
        rubrics: JSON.parse(row.rubricsJson || "{}"),
        noraAnalysisMarkdown: markdown,
        noraAnalysisKind: classifyAttachedNoraPayload(markdown),
        noraAnalysisAt: row.noraAnalysisAt?.toISOString() ?? null,
        limits: JSON.parse(row.limitsJson || "[]"),
        history,
        updatedAt: row.updatedAt?.toISOString() ?? null,
        // C23 — structured dossier projection for Figma 12.08–12.13 (honest MISSING/N/A).
        dossier: {
          attemptId,
          contractId: planContractId,
          handoffId: handoff?.id ?? null,
          handoffStatus: handoff?.status ?? "MISSING",
          dossierVersion,
          integrityHash: handoff?.integrityHash ?? null,
          filesCreated: manifest?.filesCreated ?? [],
          filesModified: manifest?.filesModified ?? [],
          filesObserved: manifest?.filesObserved ?? [],
          filesConsulted: manifest?.filesConsulted ?? [],
          testsDeclared: manifest?.testsDeclared ?? [],
          testsCaptured: manifest?.testsCaptured ?? [],
          gaps: manifest?.gaps ?? [],
          sourcesConsulted: manifest?.sourcesConsulted ?? [],
          git: manifest?.git ?? null,
          terminalStatus:
            typeof live.terminalStatus === "string" ? live.terminalStatus : null,
          pipelineStatus:
            typeof live.restitutionPipelineStatus === "string"
              ? live.restitutionPipelineStatus
              : null,
        },
      },
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}

export async function POST(
  req: Request,
  ctx: { params: Promise<{ projectId: string; attemptId: string }> },
) {
  try {
    const session = await requireStudioSession();
    const { projectId, attemptId } = await ctx.params;
    const body = (await req.json().catch(() => ({}))) as {
      attachNoraAnalysis?: boolean;
      /** Prefer cognitive analysis (CA-08). Technical brief remains available. */
      attachNoraCognitive?: boolean;
      /** G15 — dated requalification on new proofs; never re-dispatches Cursor. */
      requalify?: boolean;
      reason?: string;
      /** Optional optimistic concurrency — ISO updatedAt from GET. */
      expectedUpdatedAt?: string;
      /** Optional — correlate requalify to new proof artifact id/ref. */
      newProofRef?: string;
    };
    const attempt = await getCursorAttempt({
      pilotId: session.pilotId,
      projectId,
      attemptId,
    });
    const handoff = (
      await db
        .select()
        .from(realizationHandoffs)
        .where(eq(realizationHandoffs.attemptId, attemptId))
        .limit(1)
    )[0];
    const manifest = handoff
      ? (JSON.parse(handoff.manifestJson || "{}") as HandoffManifest)
      : null;

    let contractTitle: string | null = null;
    let acceptanceCriteria: string[] = [];
    let expectedProofs: string[] = [];
    let preparationId: string | null = null;
    try {
      const contract = await getTechnicalContract({
        pilotId: session.pilotId,
        projectId,
        contractId: attempt.plan.contractId,
      });
      contractTitle = contract.body.title;
      acceptanceCriteria = contract.body.acceptance?.criteria ?? [];
      expectedProofs = contract.body.acceptance?.expectedProofs ?? [];
      preparationId = contract.preparationId ?? null;
    } catch {
      /* contract may be missing — qualify with fingerprint only */
    }

    const existing = (
      await db
        .select()
        .from(realizationQualifications)
        .where(eq(realizationQualifications.attemptId, attemptId))
        .limit(1)
    )[0];
    const requalify =
      Boolean(body.requalify) && Boolean((body.reason ?? "").trim());
    if (existing && !requalify) {
      throw new StudioError("CONFLICT", "Qualification déjà enregistrée pour cette tentative", {
        exposeMessage: true,
      });
    }
    if (existing && body.requalify && !(body.reason ?? "").trim()) {
      throw new StudioError("INVALID_REQUEST", "requalify exige une raison datée", {
        exposeMessage: true,
      });
    }
    const efx = (
      await db
        .select({ id: effectAttempts.id })
        .from(effectAttempts)
        .where(eq(effectAttempts.id, attemptId))
        .limit(1)
    )[0];
    if (!efx) throw new StudioError("NOT_FOUND", "Tentative introuvable");

    const now = new Date();

    /** CP-03 — build qualification from currently observed dossier (handoff + captures). */
    function evaluateQualificationOnly() {
      return qualifyCursorRealization({
        contractFingerprint: attempt.fingerprint,
        acceptanceCriteria,
        expectedProofs,
        handoffStatus: handoff?.status ?? null,
        reportMarkdown: handoff?.reportMarkdown ?? null,
        manifest,
        terminalStatus: attempt.live.terminalStatus ?? null,
      });
    }

    /**
     * CA-08 — real D3 Nora cognitive analysis when attachNoraCognitive.
     * Never invent NORA_COGNITIVE from the deterministic synthesis alone.
     * Provider failure → deterministic fallback with explicit limit (not silent success).
     */
    async function attachNoraAnalysisMarkdown(
      q: ReturnType<typeof qualifyCursorRealization>,
    ): Promise<{ finalMarkdown: string | null; noraKind: ReturnType<typeof classifyAttachedNoraPayload>; limits: string[] }> {
      const dossierIncomplete =
        q.verdict === "INDETERMINATE" || !handoff || handoff.status !== "RECEIVED";
      const limits: string[] = [...q.limits];

      if (body.attachNoraCognitive) {
        const prompt = [
          buildNoraCognitiveAnalysisPrompt({
            qualification: q,
            contractTitle,
            attemptId,
            sourcesAccessible: manifest?.sourcesConsulted,
          }),
          "",
          "OUTILS D8 OBLIGATOIRES pour cette analyse:",
          "- list_realization_evidence",
          "- read_realization_handoff_report (rapport intégral, pas un extrait fourni)",
          "- read_attempt_workspace_file pour tout fichier témoin cité (chemin relatif)",
          "Distingue explicitement: pièce CONSULTÉE vs métadonnée vs déclaration Cursor vs inaccessible.",
          "N'affirme jamais avoir lu un fichier sans l'avoir ouvert via outil.",
        ].join("\n");
        try {
          const reply = preparationId
            ? await runNoraCognitiveTurn({
                pilotId: session.pilotId,
                preparationId,
                projectId,
                forceNewWork: true,
                objective: `Qualification D8 attempt ${attemptId}`,
                userText: prompt,
                contextSnippets: [
                  `attemptId=${attemptId}`,
                  `contractTitle=${contractTitle ?? ""}`,
                  `handoffStatus=${handoff?.status ?? "NONE"}`,
                  `verdict=${q.verdict}`,
                  `terminalStatus=${attempt.live.terminalStatus ?? "null"}`,
                  `agentId=${attempt.live.agentId ?? "null"}`,
                  `runId=${attempt.live.runId ?? "null"}`,
                  `reportExcerptHint=${(handoff?.reportMarkdown ?? "").slice(0, 500)}`,
                  `workspaceHint=${attempt.plan.workspaceCwd ?? ""}`,
                ],
                toolScope: {
                  pilotId: session.pilotId,
                  preparationId,
                  operationId: `d8-nora-${attemptId}`,
                  projectId,
                  attemptId,
                },
                maxSegmentsThisInvocation: 2,
              })
            : await generateNoraReply({
                userText: prompt,
                contextSnippets: [
                  `attemptId=${attemptId}`,
                  `contractTitle=${contractTitle ?? ""}`,
                  `handoffStatus=${handoff?.status ?? "NONE"}`,
                  `verdict=${q.verdict}`,
                  `terminalStatus=${attempt.live.terminalStatus ?? "null"}`,
                  `agentId=${attempt.live.agentId ?? "null"}`,
                  `runId=${attempt.live.runId ?? "null"}`,
                  `reportExcerptHint=${(handoff?.reportMarkdown ?? "").slice(0, 500)}`,
                  `workspaceHint=${attempt.plan.workspaceCwd ?? ""}`,
                ],
              });
          const raw = (reply.content ?? "").trim();
          const prefixed = raw.includes("ANALYSE COGNITIVE NORA (D3)")
            ? raw
            : `[ANALYSE COGNITIVE NORA (D3)]\n\n${raw}`;
          const liveOk =
            reply.mode === "openai-agents-sdk-live" &&
            reply.status === "COMPLETE" &&
            raw.length > 0;
          const toolsUsed = reply.toolCallsObserved ?? 0;
          if (liveOk) {
            limits.push(
              "NORA_COGNITIVE — run D3 post-tentative",
              `NORA_MODE_${reply.mode}`,
              reply.modelApplied
                ? `NORA_MODEL_${reply.modelApplied}`
                : "NORA_MODEL_UNVERIFIED",
              `NORA_TOOL_CALLS_${toolsUsed}`,
              toolsUsed > 0
                ? "NORA_D8_TOOLS_OBSERVED"
                : "NORA_D8_TOOLS_NOT_OBSERVED — consultation originale non prouvée par toolCalls",
            );
            return {
              finalMarkdown: prefixed,
              noraKind: "NORA_COGNITIVE",
              limits,
            };
          }
          limits.push(
            `NORA_COGNITIVE_UNAVAILABLE — mode=${reply.mode} status=${reply.status}`,
            "FALLBACK_DETERMINISTIC_SYNTHESIS",
          );
        } catch (e) {
          limits.push(
            `NORA_COGNITIVE_ERROR:${String((e as Error)?.message ?? e).slice(0, 80)}`,
            "FALLBACK_DETERMINISTIC_SYNTHESIS",
          );
        }
        const syn = buildDeterministicDossierSynthesis({
          qualification: q,
          contractTitle,
          attemptId,
          sourcesAccessible: manifest?.sourcesConsulted,
          dossierIncomplete,
        });
        return {
          finalMarkdown: syn,
          noraKind: classifyAttachedNoraPayload(syn),
          limits: [
            ...limits,
            "DETERMINISTIC_SYNTHESIS — pas un run cognitif Nora D3 ; CA-08 LIVE encore ouvert",
          ],
        };
      }

      if (body.attachNoraAnalysis) {
        const brief = buildNoraFinalAnalysisBrief(q);
        return {
          finalMarkdown: brief,
          noraKind: classifyAttachedNoraPayload(brief),
          limits: [
            ...limits,
            "NORA_ATTACHMENT_IS_TECHNICAL_BRIEF — avis cognitif Nora non exécuté",
          ],
        };
      }

      return { finalMarkdown: null, noraKind: "UNAVAILABLE", limits };
    }

    async function evaluateFromObserved() {
      const q = evaluateQualificationOnly();
      const attached = await attachNoraAnalysisMarkdown(q);
      return { q, ...attached };
    }

    if (existing && requalify) {
      const reason = (body.reason ?? "").trim().slice(0, 500);
      const newProofRef = (body.newProofRef ?? "").trim().slice(0, 200);
      const requalifyMode =
        (body as { requalifyMode?: string }).requalifyMode === "judgment_correction"
          ? ("judgment_correction" as const)
          : ("new_proof" as const);
      if (requalifyMode === "new_proof" && !newProofRef) {
        throw new StudioError(
          "INVALID_REQUEST",
          "requalify new_proof exige newProofRef explicite — pas de fallback handoff",
          { exposeMessage: true },
        );
      }
      const captures = listEvidenceCapturesForAttempt(attemptId).filter(
        (c) => c.pilotId === session.pilotId && c.projectId === projectId,
      );
      const proofCheck = verifyNewProofRef({
        newProofRef: newProofRef || (requalifyMode === "judgment_correction" ? handoff?.id || "" : ""),
        attemptId,
        handoffId: handoff?.id ?? null,
        handoffIntegrityHash: handoff?.integrityHash ?? null,
        manifestRefs: collectManifestRefs(manifest),
        captureIds: captures.map((c) => c.id),
        mode: requalifyMode,
        priorHandoffId: existing.handoffId,
      });
      if (!proofCheck.ok) {
        throw new StudioError(
          "INVALID_REQUEST",
          `requalify preuve non vérifiée: ${proofCheck.reason}`,
          { exposeMessage: true },
        );
      }
      // G15 + CP-03 — lock first, then evaluate from observed dossier, then write.
      const txResult = await db.transaction(async (tx) => {
        await tx.execute(
          sql`select id from realization_qualifications where id = ${existing.id} for update`,
        );
        const locked = (
          await tx
            .select()
            .from(realizationQualifications)
            .where(eq(realizationQualifications.id, existing.id))
            .limit(1)
        )[0];
        if (!locked) throw new StudioError("NOT_FOUND", "Qualification introuvable");
        if (
          body.expectedUpdatedAt &&
          locked.updatedAt.toISOString() !== body.expectedUpdatedAt
        ) {
          throw new StudioError(
            "CONFLICT",
            "REQUALIFY_VERSION_CONFLICT — relire puis réessayer",
            { exposeMessage: true },
          );
        }
        // Re-evaluate qualification inside TX after lock (Nora call stays outside TX).
        const q = evaluateQualificationOnly();
        let history: unknown[] = [];
        try {
          history = JSON.parse(locked.historyJson || "[]") as unknown[];
        } catch {
          history = [];
        }
        if (!Array.isArray(history)) history = [];
        const previousVerdict = locked.verdict;
        history.push({
          at: locked.updatedAt.toISOString(),
          verdict: locked.verdict,
          rubrics: JSON.parse(locked.rubricsJson || "{}"),
          limits: JSON.parse(locked.limitsJson || "[]"),
          noraAnalysisKind: classifyAttachedNoraPayload(locked.noraAnalysisMarkdown),
          authorPilotId: locked.pilotId,
          supersededAt: now.toISOString(),
          requalifyReason: reason,
          newProofRef: proofCheck.candidate.ref,
          proofKind: proofCheck.candidate.kind,
          handoffId: handoff?.id ?? locked.handoffId,
        });
        // Persist rubrics/verdict first; Nora markdown filled after TX.
        await tx
          .update(realizationQualifications)
          .set({
            handoffId: handoff?.id ?? locked.handoffId,
            status: "REQUALIFIED",
            rubricsJson: JSON.stringify(q.rubrics),
            verdict: q.verdict,
            limitsJson: JSON.stringify([
              ...q.limits,
              `REQUALIFIED_AT:${now.toISOString()}`,
              `PREVIOUS_VERDICT:${previousVerdict}`,
              `PROOF_VERIFIED:${proofCheck.candidate.kind}`,
              `NEW_PROOF_REF:${proofCheck.candidate.ref}`,
            ]),
            historyJson: JSON.stringify(history),
            updatedAt: now,
          })
          .where(eq(realizationQualifications.id, locked.id));
        return {
          previousVerdict,
          history,
          qualificationId: locked.id,
          q,
        };
      });
      const attached = await attachNoraAnalysisMarkdown(txResult.q);
      if (attached.finalMarkdown) {
        await db
          .update(realizationQualifications)
          .set({
            noraAnalysisMarkdown: attached.finalMarkdown,
            noraAnalysisAt: now,
            limitsJson: JSON.stringify([
              ...attached.limits,
              `REQUALIFIED_AT:${now.toISOString()}`,
              `PREVIOUS_VERDICT:${txResult.previousVerdict}`,
              `PROOF_VERIFIED:${proofCheck.candidate.kind}`,
              `NEW_PROOF_REF:${proofCheck.candidate.ref}`,
            ]),
            updatedAt: new Date(),
          })
          .where(eq(realizationQualifications.id, txResult.qualificationId));
      }
      return NextResponse.json({
        qualificationId: txResult.qualificationId,
        requalified: true,
        previousVerdict: txResult.previousVerdict,
        verdict: txResult.q.verdict,
        rubrics: txResult.q.rubrics,
        limits: attached.limits,
        history: txResult.history,
        noraAnalysisMarkdown: attached.finalMarkdown,
        noraAnalysisKind: attached.noraKind,
        testsPass: txResult.q.testsPass,
        conformityProven: txResult.q.conformityProven,
        morrisAcceptance: txResult.q.morrisAcceptance,
        adopted: txResult.q.adopted,
        proofVerified: proofCheck.candidate,
        cursorRedispatch: false,
      });
    }

    const { q, finalMarkdown, noraKind, limits } = await evaluateFromObserved();

    const id = newId("rqual");
    await db.insert(realizationQualifications).values({
      id,
      attemptId,
      handoffId: handoff?.id ?? null,
      projectId,
      pilotId: session.pilotId,
      status: "RECORDED",
      rubricsJson: JSON.stringify(q.rubrics),
      verdict: q.verdict,
      noraAnalysisMarkdown: finalMarkdown,
      noraAnalysisAt: finalMarkdown ? now : null,
      limitsJson: JSON.stringify(limits),
      historyJson: "[]",
      createdAt: now,
      updatedAt: now,
    });
    return NextResponse.json({
      qualificationId: id,
      requalified: false,
      verdict: q.verdict,
      rubrics: q.rubrics,
      limits,
      noraAnalysisMarkdown: finalMarkdown,
      noraAnalysisKind: noraKind,
      testsPass: q.testsPass,
      conformityProven: q.conformityProven,
      morrisAcceptance: q.morrisAcceptance,
      adopted: q.adopted,
      cursorRedispatch: false,
    });
  } catch (e) {
    const mapped = studioErrorResponse(e);
    return NextResponse.json(mapped.body, { status: mapped.status });
  }
}
