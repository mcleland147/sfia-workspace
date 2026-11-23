# SFIA Review Pack FULL — ML5 Cycle 11

- **Date/heure:** 2026-11-23T21:19:37+01:00
- **Cycle:** C11 — DEV LIVE Nora + Cursor SDK
- **Profil:** CRITICAL / Delivery / NO RELEASE / ENV-01 DEV
- **Verdict:** `ML5 END-TO-END DEV LIVE PROVEN — QUALIFICATION IN PROGRESS`

## 1. Git Truth Check

- Worktree: `/Users/morris/Projects/sfia-wt-next-ml5-20261123`
- Branche: `sfia/next-ml5-integrated-delivery-20261123`
- HEAD: `6cf33e9923796974b9ee540a9c6ff27110342950`
- merge-base origin/main: `997897fd7cf914771e7d08e8030dc7123fab7d25`
- DIRTY entries: **70** (C3–C11 non publiés)
- Push code projet: **NONE**
- Handoff tip pré-pub: `76199b38` (C10)

## 2. Sources Git (SHA)

- main@997897fd… — gouvernance ENV-01 / versioning
- 1e6929c5… — DÉC-ML5-GIT A / DEV
- 5a4e4405… — R-003 / CA / Q / T
- 76199b38… blob 69102af2… — handoff C10
- Code local DIRTY = vérité d’exécution

## 3. Blast radius C11

- cursor-sdk-adapter.ts — FileCredentialStore, modelId, observeLiveCursorRun
- cursor-attempt-service.ts — LIVE wait + reconcile observe
- qualification/route.ts — attachNoraCognitive → generateNoraReply
- CursorRealizationSurface.tsx — lecture ≠ requalify silencieux
- types.ts — modelId plan optionnel
- scripts ml5-c11-*; registre; delivery-history
- OUT: SEF/roadmap, push projet, RECETTE/STABLE, GitHub mutatif

## 4. Configuration DEV (sans secrets)

| Clé | Valeur |
|---|---|
| STUDIO_LANE | DEV |
| App | 127.0.0.1:3100 |
| PG | 127.0.0.1:5433 / sfia_next_dev |
| SFIA_CURSOR_EFFECT_MODE | LIVE |
| SFIA_CURSOR_LIVE_WAIT | 1 |
| SFIA_CURSOR_MODEL_ID | composer-2.5 |
| SFIA_CURSOR_WORKSPACE_ROOT | /tmp/sfia-c11-cursor-live-ws |
| SFIA_COG_PROFILE_TYPE | OPERATIONAL_PROVISIONAL |
| CURSOR_API_KEY env | absent → FileCredentialStore |
| OPENAI_API_KEY | présent (non affiché) |
| @cursor/sdk | 1.4.2 |
| @openai/agents | 0.21.0 |

## 5. Scénario & identités

```json
{
  "scenarioId": "ml5-c11-live-20261123",
  "at": "2026-11-23T20:10:14.432Z",
  "creationMechanism": "DOMAIN_SEED_PROJECT_DATA_ONLY",
  "honesty": "Seed = projet + documents. Aucun contrat technique injecté. Contrat attendu de Nora LIVE.",
  "pilotId": "pilot_b8d7e5a2-8075-4050-ab97-3969b29235d9",
  "projectId": "proj_c08249f9-9348-49fb-b33b-016c6430aec5",
  "projectName": "ML5-C11-LIVE-2026-11-23-55290c",
  "preparationId": "prep_1af13e8c-4135-4cad-90e2-2f69bf6f737e",
  "documents": [
    {
      "title": "Besoin technique C11 — DEMO_C11.txt",
      "status": "AVAILABLE",
      "documentId": "doc_570ec731-565b-489c-b40b-854896e05ef0"
    },
    {
      "title": "Contexte et décisions C11",
      "status": "AVAILABLE",
      "documentId": "doc_3b132926-d8b6-4821-a455-26e4a730f5b1"
    }
  ],
  "workspaceRoot": "/tmp/sfia-c11-cursor-live-ws",
  "witnessFile": "DEMO_C11.txt",
  "witnessContent": "SFIA-C11-CURSOR-LIVE-OK",
  "frontier": "LIVE_TARGET",
  "contractId": "tctr_d306deb6-4c08-4184-9e5b-89350e220c97",
  "contractKey": "nora-bf6f737e-mwtphndh",
  "contractVersion": 1,
  "fingerprint": "694bd3f9122dcb2606dcc1b3ec870ec53a7088b5b5cb1b2a6f80f1c1364ab046",
  "attemptIdYes": "efx_306b2b49-b6e3-4b4e-97aa-e2103e9c0af4",
  "attemptIdRefuse": "efx_90d04297-285c-457d-aba9-5233064f7c41",
  "agentId": "agent-29c4c0f4-dea2-4637-836e-85e7d1db9d0e",
  "runId": "run-51c77f21-b429-4b82-aff0-a493977b65d2",
  "handoffId": "rhf_90ccccb6-0bfc-42d2-b2f3-e0938101a21e",
  "qualificationVerdict": "PARTIAL",
  "noraAnalysisKind": "NORA_COGNITIVE",
  "witnessVerified": true
}
```

## 6–14. Traces LIVE

- **A-preflight-mode**: PASS — SFIA_CURSOR_EFFECT_MODE=LIVE
- **B-nora-live-turn**: PASS — POST messages — Nora prepare contract
- **B-contract-ready**: PASS — Server READY qualification
- **C-d6-non**: PASS — Authorize confirmed:false
- **C-d6-oui**: PASS — Authorize confirmed:true
- **C-cursor-sdk-live**: PASS — Dispatch + observe LIVE run + witness file
- **D-handoff-ingest**: PASS — POST handoff from observed LIVE facts
- **D-d8-qualify**: PASS — POST qualification
- **E-nora-final-analysis**: PASS — attachNoraCognitive on qualification
- **F-web-live**: N/A — B09 WEB LIVE _(réserve: Non requis pour mission C11 primaire — B09 remains NOT_IMPL until LIVE provider wired)_
- **F-git-real**: N/A — GitHub REAL mutatif _(réserve: Pas de dépôt de test nommé / mandat mutation — skip push)_
- **F-mcp**: N/A — MCP conditional _(réserve: Mission C11 sans MCP requis)_
- **R-no-double-dispatch**: PASS — Second dispatch same attempt

### Cursor SDK LIVE
- agentId `agent-29c4c0f4-dea2-4637-836e-85e7d1db9d0e`
- runId `run-51c77f21-b429-4b82-aff0-a493977b65d2`
- workspaceCwd `/private/tmp/sfia-c11-cursor-live-ws/27550354a2f5ad3d/54885c7d59f2c8b2/default`
- Témoin DEMO_C11.txt = SFIA-C11-CURSOR-LIVE-OK
- SHA-256 `f197c2dc76ae28491128d5355a513d83b519f1a18fc1c9c48a905b3d92929e6a`
- API key source FILE_CREDENTIAL_STORE; model composer-2.5

### Nora LIVE prepare
- mode `openai-agents-sdk-live` status `COMPLETE` http 200 ms 64238
- contract `tctr_d306deb6-4c08-4184-9e5b-89350e220c97` fingerprint `694bd3f9122dcb2606dcc1b3ec870ec53a7088b5b5cb1b2a6f80f1c1364ab046`

### Handoff D8
- handoff `rhf_90ccccb6-0bfc-42d2-b2f3-e0938101a21e` RECEIVED
- verdict **PARTIAL**; kind **NORA_COGNITIVE**

### Analyse cognitive finale (extrait)

```markdown
[ANALYSE COGNITIVE NORA (D3)]

## Avis final

**La réalisation locale est rapportée comme réussie, mais sa conformité complète n’est pas démontrée par les pièces accessibles. Le dossier est incomplet.** Le verdict D8 **PARTIAL** est cohérent avec cette limite probatoire ; cet avis ne le remplace pas et ne constitue aucune réception D6.

### Sources effectivement examinées
- **[S1]** Dossier fourni : contrat, section « Prévu » et critères annoncés.
- **[S2]** Messages récents : extrait du rapport Cursor, inventaire et test local.
- **[S3]** Synthèse D8 : « Évaluation », « Impact », « Réserves » et « Recommandations ».

Ces sources sont les extraits transmis dans votre message. Le fichier, le rapport intégral, le manifeste et la capture du test n’ont pas été inspectés directement. La rubrique « Sources prises en compte » ne liste pas les pièces originales.

## Confrontation de la mission aux éléments disponibles

| Exigence ou signal | Élément accessible | Portée réelle |
|---|---|---|
| Créer `DEMO_C11.txt` | Le rapport annonce sa création ; l’inventaire agrégé indique `+1`. [S2, S3] | Indice concordant, sans accès au fichier ni au manifeste original. |
| Contenir exactement la ligne `SFIA-C11-CURSOR-LIVE-OK` | Cette chaîne est présentée comme le contenu observé. [S2] | L’extrait rapporte une observation, mais ne permet pas de contrôler l’intégralité du contenu ni d’exclure des lignes supplémentaires. |
| Réaliser l’opération dans le workspace de test | Le rapport mentionne un « workspace DEV ». [S1, S2] | L’identité entre ce workspace et la cible contractuelle n’est pas établie dans les extraits. Ce n’est pas, à ce stade, un écart prouvé. |
| Vérifier le contenu | Une lecture filesystem locale est annoncée « PASS » ; D8 indique un test exécuté et capturé, mais aucun PASS certifié. [S2, S3] | Vérification rapportée, dont la trace complète et le rattachement à la cible restent à examiner. |

Le handoff `RECEIVED` et le statut SDK `finished` attestent respectivement d’une réception et d’une fin d’exécution rapportées ; **ils ne démontrent pas, à eux seuls, la réussite fonctionnelle**. De même, les deux critères annoncés — handoff reçu et inventaire présent — ne suffisent pas à prouver l’exactitude du contenu demandé. [S1–S3]

## Limites déterminantes

- **Les écarts sont inconnus, pas réputés absents** : ils ne sont pas inventoriés. [S3]
- L’empreinte du contrat est fournie, mais le contrat intégral et ses pièces probantes ne sont pas accessibles ici pour con

… [+1013 chars: browser/c11/nora-final-analysis.md] …
```

## 15. Erreurs / reprises / négatifs

- D6 Non PASS; double dispatch idempotent PASS
- Journey1: witness path root vs cwd → corrigé
- Smoke: model obligatoire pour Agent.create
- openBilan: requalify silencieux retiré

## 16. WEB / MCP / Git

- B09 NOT_IMPL; MCP N/A; GitHub REAL N/A (pas de remote test); option A inchangée

## 17. Fake / Real

| Frontière | Niveau |
|---|---|
| Nora prepare | REAL BOUNDARY PROVEN |
| Cursor SDK + fichier | REAL BOUNDARY PROVEN |
| Handoff + D8 | REAL BOUNDARY PROVEN (PARTIAL) |
| Nora analyse | REAL BOUNDARY PROVEN |
| Chaîne D3→D6→D7→SDK→D8→D3 | END-TO-END REAL PROVEN (DEV) |
| WEB/GitHub/MCP | NOT PROVEN / N/A |

## 18. Tests

- seed + live journey → 10 PASS / 0 FAIL / 3 N/A
- vitest unit ciblés → 11 PASS

## 19. Artefacts

- browser/c11/scenario-ids.json, journey-steps.json, nora-final-analysis.md, c11-code.diff, PNG
- scripts/ml5-c11-seed-project.mts, ml5-c11-live-journey.mts

## 20. Diffs utiles C11

```diff
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
index a8780713..7374aa31 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
@@ -1,14 +1,23 @@
 import { NextResponse } from "next/server";
-import { and, eq } from "drizzle-orm";
+import { and, eq, sql } from "drizzle-orm";
 import { db } from "@/db/client";
 import { effectAttempts, realizationHandoffs, realizationQualifications } from "@/db/schema";
 import { getCursorAttempt } from "@/domains/execution/cursor-attempt-service";
+import { getTechnicalContract } from "@/domains/execution/technical-contract";
 import type { HandoffManifest } from "@/domains/execution/handoff-integrity";
 import {
+  buildDeterministicDossierSynthesis,
+  buildNoraCognitiveAnalysisPrompt,
   buildNoraFinalAnalysisBrief,
   classifyAttachedNoraPayload,
   qualifyCursorRealization,
 } from "@/domains/proofs/cursor-qualify";
+import { generateNoraReply } from "@/domains/conversation/nora-adapter";
+import {
+  collectManifestRefs,
+  verifyNewProofRef,
+} from "@/domains/proofs/proof-ref-verify";
+import { listEvidenceCapturesForAttempt } from "@/domains/proofs/evidence-captures";
 import { requireStudioSession } from "@/domains/identity/session";
 import { newId } from "@/lib/ids";
 import { studioErrorResponse, StudioError } from "@/lib/http-errors";
@@ -39,15 +48,25 @@ export async function GET(
         .limit(1)
     )[0];
     if (!row) return NextResponse.json({ status: "MISSING", qualification: null });
+    const markdown = row.noraAnalysisMarkdown;
+    let history: unknown[] = [];
+    try {
+      history = JSON.parse(row.historyJson || "[]") as unknown[];
+    } catch {
+      history = [];
+    }
     return NextResponse.json({
       status: row.status,
       qualification: {
         id: row.id,
         verdict: row.verdict,
         rubrics: JSON.parse(row.rubricsJson || "{}"),
-        noraAnalysisMarkdown: row.noraAnalysisMarkdown,
+        noraAnalysisMarkdown: markdown,
+        noraAnalysisKind: classifyAttachedNoraPayload(markdown),
         noraAnalysisAt: row.noraAnalysisAt?.toISOString() ?? null,
         limits: JSON.parse(row.limitsJson || "[]"),
+        history,
+        updatedAt: row.updatedAt?.toISOString() ?? null,
       },
     });
   } catch (e) {
@@ -65,6 +84,15 @@ export async function POST(
     const { projectId, attemptId } = await ctx.params;
     const body = (await req.json().catch(() => ({}))) as {
       attachNoraAnalysis?: boolean;
+      /** Prefer cognitive analysis (CA-08). Technical brief remains available. */
+      attachNoraCognitive?: boolean;
+      /** G15 — dated requalification on new proofs; never re-dispatches Cursor. */
+      requalify?: boolean;
+      reason?: string;
+      /** Optional optimistic concurrency — ISO updatedAt from GET. */
+      expectedUpdatedAt?: string;
+      /** Optional — correlate requalify to new proof artifact id/ref. */
+      newProofRef?: string;
     };
     const attempt = await getCursorAttempt({
       pilotId: session.pilotId,
@@ -81,22 +109,23 @@ export async function POST(
     const manifest = handoff
       ? (JSON.parse(handoff.manifestJson || "{}") as HandoffManifest)
       : null;
-    const q = qualifyCursorRealization({
-      contractFingerprint: attempt.fingerprint,
-      handoffStatus: handoff?.status ?? null,
-      reportMarkdown: handoff?.reportMarkdown ?? null,
-      manifest,
-      terminalStatus: attempt.live.terminalStatus ?? null,
-    });
-    // attachNoraAnalysis stores a deterministic technical brief only — not a Nora run.
-    const technicalBrief = body.attachNoraAnalysis ? buildNoraFinalAnalysisBrief(q) : null;
-    const noraKind = classifyAttachedNoraPayload(technicalBrief);
-    const limits = [
-      ...q.limits,
-      ...(noraKind === "TECHNICAL_BRIEF"
-        ? ["NORA_ATTACHMENT_IS_TECHNICAL_BRIEF — avis cognitif Nora non exécuté"]
-        : []),
-    ];
+
+    let contractTitle: string | null = null;
+    let acceptanceCriteria: string[] = [];
+    let expectedProofs: string[] = [];
+    try {
+      const contract = await getTechnicalContract({
+        pilotId: session.pilotId,
+        projectId,
+        contractId: attempt.plan.contractId,
+      });
+      contractTitle = contract.body.title;
+      acceptanceCriteria = contract.body.acceptance?.criteria ?? [];
+      expectedProofs = contract.body.acceptance?.expectedProofs ?? [];
+    } catch {
+      /* contract may be missing — qualify with fingerprint only */
+    }
+
     const existing = (
       await db
         .select()
@@ -104,19 +133,291 @@ export async function POST(
         .where(eq(realizationQualifications.attemptId, attemptId))
         .limit(1)
     )[0];
-    if (existing) {
+    const requalify =
+      Boolean(body.requalify) && Boolean((body.reason ?? "").trim());
+    if (existing && !requalify) {
       throw new StudioError("CONFLICT", "Qualification déjà enregistrée pour cette tentative", {
         exposeMessage: true,
       });
     }
-    // Ensure attempt exists for FK
+    if (existing && body.requalify && !(body.reason ?? "").trim()) {
+      throw new StudioError("INVALID_REQUEST", "requalify exige une raison datée", {
+        exposeMessage: true,
+      });
+    }
     const efx = (
-      await db.select({ id: effectAttempts.id }).from(effectAttempts).where(eq(effectAttempts.id, attemptId)).limit(1)
+      await db
+        .select({ id: effectAttempts.id })
+        .from(effectAttempts)
+        .where(eq(effectAttempts.id, attemptId))
+        .limit(1)
     )[0];
     if (!efx) throw new StudioError("NOT_FOUND", "Tentative introuvable");
 
-    const id = newId("rqual");
     const now = new Date();
+
+    /** CP-03 — build qualification from currently observed dossier (handoff + captures). */
+    function evaluateQualificationOnly() {
+      return qualifyCursorRealization({
+        contractFingerprint: attempt.fingerprint,
+        acceptanceCriteria,
+        expectedProofs,
+        handoffStatus: handoff?.status ?? null,
+        reportMarkdown: handoff?.reportMarkdown ?? null,
+        manifest,
+        terminalStatus: attempt.live.terminalStatus ?? null,
+      });
+    }
+
+    /**
+     * CA-08 — real D3 Nora cognitive analysis when attachNoraCognitive.
+     * Never invent NORA_COGNITIVE from the deterministic synthesis alone.
+     * Provider failure → deterministic fallback with explicit limit (not silent success).
+     */
+    async function attachNoraAnalysisMarkdown(
+      q: ReturnType<typeof qualifyCursorRealization>,
+    ): Promise<{ finalMarkdown: string | null; noraKind: ReturnType<typeof classifyAttachedNoraPayload>; limits: string[] }> {
+      const dossierIncomplete =
+        q.verdict === "INDETERMINATE" || !handoff || handoff.status !== "RECEIVED";
+      const limits: string[] = [...q.limits];
+
+      if (body.attachNoraCognitive) {
+        const prompt = buildNoraCognitiveAnalysisPrompt({
+          qualification: q,
+          contractTitle,
+          attemptId,
+          sourcesAccessible: manifest?.sourcesConsulted,
+        });
+        try {
+          const reply = await generateNoraReply({
+            userText: prompt,
+            contextSnippets: [
+              `attemptId=${attemptId}`,
+              `contractTitle=${contractTitle ?? ""}`,
+              `handoffStatus=${handoff?.status ?? "NONE"}`,
+              `verdict=${q.verdict}`,
+              `terminalStatus=${attempt.live.terminalStatus ?? "null"}`,
+              `agentId=${attempt.live.agentId ?? "null"}`,
+              `runId=${attempt.live.runId ?? "null"}`,
+              `reportExcerpt=${(handoff?.reportMarkdown ?? "").slice(0, 4000)}`,
+            ],
+          });
+          const raw = (reply.content ?? "").trim();
+          const prefixed = raw.includes("ANALYSE COGNITIVE NORA (D3)")
+            ? raw
+            : `[ANALYSE COGNITIVE NORA (D3)]\n\n${raw}`;
+          const liveOk =
+            reply.mode === "openai-agents-sdk-live" &&
+            reply.status === "COMPLETE" &&
+            raw.length > 0;
+          if (liveOk) {
+            limits.push(
+              "NORA_COGNITIVE — run D3 post-tentative",
+              `NORA_MODE_${reply.mode}`,
+              reply.modelApplied
+                ? `NORA_MODEL_${reply.modelApplied}`
+                : "NORA_MODEL_UNVERIFIED",
+            );
+            return {
+              finalMarkdown: prefixed,
+              noraKind: "NORA_COGNITIVE",
+              limits,
+            };
+          }
+          limits.push(
+            `NORA_COGNITIVE_UNAVAILABLE — mode=${reply.mode} status=${reply.status}`,
+            "FALLBACK_DETERMINISTIC_SYNTHESIS",
+          );
+        } catch (e) {
+          limits.push(
+            `NORA_COGNITIVE_ERROR:${String((e as Error)?.message ?? e).slice(0, 80)}`,
+            "FALLBACK_DETERMINISTIC_SYNTHESIS",
+          );
+        }
+        const syn = buildDeterministicDossierSynthesis({
+          qualification: q,
+          contractTitle,
+          attemptId,
+          sourcesAccessible: manifest?.sourcesConsulted,
+          dossierIncomplete,
+        });
+        return {
+          finalMarkdown: syn,
+          noraKind: classifyAttachedNoraPayload(syn),
+          limits: [
+            ...limits,
+            "DETERMINISTIC_SYNTHESIS — pas un run cognitif Nora D3 ; CA-08 LIVE encore ouvert",
+          ],
+        };
+      }
+
+      if (body.attachNoraAnalysis) {
+        const brief = buildNoraFinalAnalysisBrief(q);
+        return {
+          finalMarkdown: brief,
+          noraKind: classifyAttachedNoraPayload(brief),
+          limits: [
+            ...limits,
+            "NORA_ATTACHMENT_IS_TECHNICAL_BRIEF — avis cognitif Nora non exécuté",
+          ],
+        };
+      }
+
+      return { finalMarkdown: null, noraKind: "UNAVAILABLE", limits };
+    }
+
+    async function evaluateFromObserved() {
+      const q = evaluateQualificationOnly();
+      const attached = await attachNoraAnalysisMarkdown(q);
+      return { q, ...attached };
+    }
+
+    if (existing && requalify) {
+      const reason = (body.reason ?? "").trim().slice(0, 500);
+      const newProofRef = (body.newProofRef ?? "").trim().slice(0, 200);
+      const requalifyMode =
+        (body as { requalifyMode?: string }).requalifyMode === "judgment_correction"
+          ? ("judgment_correction" as const)
+          : ("new_proof" as const);
+      if (requalifyMode === "new_proof" && !newProofRef) {
+        throw new StudioError(
+          "INVALID_REQUEST",
+          "requalify new_proof exige newProofRef explicite — pas de fallback handoff",
+          { exposeMessage: true },
+        );
+      }
+      const captures = listEvidenceCapturesForAttempt(attemptId).filter(
+        (c) => c.pilotId === session.pilotId && c.projectId === projectId,
+      );
+      const proofCheck = verifyNewProofRef({
+        newProofRef: newProofRef || (requalifyMode === "judgment_correction" ? handoff?.id || "" : ""),
+        attemptId,
+        handoffId: handoff?.id ?? null,
+        handoffIntegrityHash: handoff?.integrityHash ?? null,
+        manifestRefs: collectManifestRefs(manifest),
+        captureIds: captures.map((c) => c.id),
+        mode: requalifyMode,
+        priorHandoffId: existing.handoffId,
+      });
+      if (!proofCheck.ok) {
+        throw new StudioError(
+          "INVALID_REQUEST",
+          `requalify preuve non vérifiée: ${proofCheck.reason}`,
+          { exposeMessage: true },
+        );
+      }
+      // G15 + CP-03 — lock first, then evaluate from observed dossier, then write.
+      const txResult = await db.transaction(async (tx) => {
+        await tx.execute(
+          sql`select id from realization_qualifications where id = ${existing.id} for update`,
+        );
+        const locked = (
+          await tx
+            .select()
+            .from(realizationQualifications)
+            .where(eq(realizationQualifications.id, existing.id))
+            .limit(1)
+        )[0];
+        if (!locked) throw new StudioError("NOT_FOUND", "Qualification introuvable");
+        if (
+          body.expectedUpdatedAt &&
+          locked.updatedAt.toISOString() !== body.expectedUpdatedAt
+        ) {
+          throw new StudioError(
+            "CONFLICT",
+            "REQUALIFY_VERSION_CONFLICT — relire puis réessayer",
+            { exposeMessage: true },
+          );
+        }
+        // Re-evaluate qualification inside TX after lock (Nora call stays outside TX).
+        const q = evaluateQualificationOnly();
+        let history: unknown[] = [];
+        try {
+          history = JSON.parse(locked.historyJson || "[]") as unknown[];
+        } catch {
+          history = [];
+        }
+        if (!Array.isArray(history)) history = [];
+        const previousVerdict = locked.verdict;
+        history.push({
+          at: locked.updatedAt.toISOString(),
+          verdict: locked.verdict,
+          rubrics: JSON.parse(locked.rubricsJson || "{}"),
+          limits: JSON.parse(locked.limitsJson || "[]"),
+          noraAnalysisKind: classifyAttachedNoraPayload(locked.noraAnalysisMarkdown),
+          authorPilotId: locked.pilotId,
+          supersededAt: now.toISOString(),
+          requalifyReason: reason,
+          newProofRef: proofCheck.candidate.ref,
+          proofKind: proofCheck.candidate.kind,
+          handoffId: handoff?.id ?? locked.handoffId,
+        });
+        // Persist rubrics/verdict first; Nora markdown filled after TX.
+        await tx
+          .update(realizationQualifications)
+          .set({
+            handoffId: handoff?.id ?? locked.handoffId,
+            status: "REQUALIFIED",
+            rubricsJson: JSON.stringify(q.rubrics),
+            verdict: q.verdict,
+            limitsJson: JSON.stringify([
+              ...q.limits,
+              `REQUALIFIED_AT:${now.toISOString()}`,
+              `PREVIOUS_VERDICT:${previousVerdict}`,
+              `PROOF_VERIFIED:${proofCheck.candidate.kind}`,
+              `NEW_PROOF_REF:${proofCheck.candidate.ref}`,
+            ]),
+            historyJson: JSON.stringify(history),
+            updatedAt: now,
+          })
+          .where(eq(realizationQualifications.id, locked.id));
+        return {
+          previousVerdict,
+          history,
+          qualificationId: locked.id,
+          q,
+        };
+      });
+      const attached = await attachNoraAnalysisMarkdown(txResult.q);
+      if (attached.finalMarkdown) {
+        await db
+          .update(realizationQualifications)
+          .set({
+            noraAnalysisMarkdown: attached.finalMarkdown,
+            noraAnalysisAt: now,
+            limitsJson: JSON.stringify([
+              ...attached.limits,
+              `REQUALIFIED_AT:${now.toISOString()}`,
+              `PREVIOUS_VERDICT:${txResult.previousVerdict}`,
+              `PROOF_VERIFIED:${proofCheck.candidate.kind}`,
+              `NEW_PROOF_REF:${proofCheck.candidate.ref}`,
+            ]),
+            updatedAt: new Date(),
+          })
+          .where(eq(realizationQualifications.id, txResult.qualificationId));
+      }
+      return NextResponse.json({
+        qualificationId: txResult.qualificationId,
+        requalified: true,
+        previousVerdict: txResult.previousVerdict,
+        verdict: txResult.q.verdict,
+        rubrics: txResult.q.rubrics,
+        limits: attached.limits,
+        history: txResult.history,
+        noraAnalysisMarkdown: attached.finalMarkdown,
+        noraAnalysisKind: attached.noraKind,
+        testsPass: txResult.q.testsPass,
+        conformityProven: txResult.q.conformityProven,
+        morrisAcceptance: txResult.q.morrisAcceptance,
+        adopted: txResult.q.adopted,
+        proofVerified: proofCheck.candidate,
+        cursorRedispatch: false,
+      });
+    }
+
+    const { q, finalMarkdown, noraKind, limits } = await evaluateFromObserved();
+
+    const id = newId("rqual");
     await db.insert(realizationQualifications).values({
       id,
       attemptId,
@@ -126,23 +427,26 @@ export async function POST(
       status: "RECORDED",
       rubricsJson: JSON.stringify(q.rubrics),
       verdict: q.verdict,
-      noraAnalysisMarkdown: technicalBrief,
-      noraAnalysisAt: technicalBrief ? now : null,
+      noraAnalysisMarkdown: finalMarkdown,
+      noraAnalysisAt: finalMarkdown ? now : null,
       limitsJson: JSON.stringify(limits),
+      historyJson: "[]",
       createdAt: now,
       updatedAt: now,
     });
     return NextResponse.json({
       qualificationId: id,
+      requalified: false,
       verdict: q.verdict,
       rubrics: q.rubrics,
       limits,
-      noraAnalysisMarkdown: technicalBrief,
+      noraAnalysisMarkdown: finalMarkdown,
       noraAnalysisKind: noraKind,
       testsPass: q.testsPass,
       conformityProven: q.conformityProven,
       morrisAcceptance: q.morrisAcceptance,
       adopted: q.adopted,
+      cursorRedispatch: false,
     });
   } catch (e) {
     const mapped = studioErrorResponse(e);
diff --git a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
index 7cdacec9..2b56d691 100644
--- a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
@@ -1,14 +1,15 @@
 "use client";
 
 /**
- * ML5 — parcours Exécution / Résultats raccordé (frames 12.02–12.08 / 12.11–12.14).
+ * ML5 — parcours Exécution (12.04–12.07 / 12.14) et Résultats (12.08 / 12.11–12.13).
  * Mounted on existing project page — no parallel shell.
  * Reading never authorizes; Non confirmation = no dispatch.
  */
 
 import { useCallback, useEffect, useState } from "react";
 import { ContractViewer, type ContractViewerModel } from "./ContractViewer";
-import { RealizationBilan } from "./RealizationBilan";
+import { D6ConfirmLaunch } from "./D6ConfirmLaunch";
+import { RealizationBilan, type BilanTab } from "./RealizationBilan";
 import type { D8Rubric } from "@/domains/proofs/cursor-qualify";
 
 type AttemptRow = {
@@ -41,7 +42,7 @@ type ContractRow = {
   version: number;
   fingerprint: string;
   status: string;
-  body: ContractViewerModel extends never ? never : {
+  body: {
     title: string;
     engagements: ContractViewerModel["engagements"];
     volets: ContractViewerModel["volets"];
@@ -53,8 +54,11 @@ type ContractRow = {
 
 export function CursorRealizationSurface(props: {
   projectId: string;
+  /** Figma: execution vs résultats — same shell, distinct responsibility. */
+  mode?: "execution" | "results";
   onDiscussWithNora?: (draft: string) => void;
 }) {
+  const mode = props.mode ?? "execution";
   const [contracts, setContracts] = useState<ContractRow[]>([]);
   const [attempts, setAttempts] = useState<AttemptRow[]>([]);
   const [selectedContract, setSelectedContract] = useState<ContractRow | null>(null);
@@ -67,12 +71,16 @@ export function CursorRealizationSurface(props: {
     rubrics: D8Rubric[];
     limits: string[];
     noraAnalysisMarkdown?: string | null;
+    noraAnalysisKind?: string | null;
   } | null>(null);
-  const [bilanTab, setBilanTab] = useState<"synthese" | "evaluation" | "verdict" | "sources">(
-    "synthese",
-  );
+  const [bilanTab, setBilanTab] = useState<BilanTab>("synthese");
   const [status, setStatus] = useState("");
   const [busy, setBusy] = useState(false);
+  const [pendingRequalify, setPendingRequalify] = useState<{
+    attemptId: string;
+    handoffId: string;
+    expectedUpdatedAt: string | null;
+  } | null>(null);
 
   const reload = useCallback(async () => {
     const [cRes, aRes] = await Promise.all([
@@ -83,7 +91,6 @@ export function CursorRealizationSurface(props: {
       const j = (await cRes.json()) as { contracts?: ContractRow[] };
       setContracts(j.contracts ?? []);
     }
-    // attempts list via dedicated route if present; else empty
     if (aRes && aRes.ok) {
       const j = (await aRes.json()) as { attempts?: AttemptRow[] };
       setAttempts(j.attempts ?? []);
@@ -94,20 +101,49 @@ export function CursorRealizationSurface(props: {
     void reload();
   }, [reload]);
 
-  async function loadAttemptsFallback() {
-    // Prefer list endpoint; if 404, keep empty (API may only expose per-id GET).
-    const res = await fetch(`/api/projects/${props.projectId}/realization/attempts`);
-    if (res.ok) {
-      const j = (await res.json()) as { attempts?: AttemptRow[] };
-      setAttempts(j.attempts ?? []);
+  /** E05 — poll DISPATCHED attempts beyond ACK; reconcile is observational, not a second dispatch. */
+  useEffect(() => {
+    const dispatched = attempts.filter(
+      (a) => a.status === "DISPATCHED" && !a.live.terminalStatus,
+    );
+    if (dispatched.length === 0) return;
+    let ticks = 0;
+    const id = window.setInterval(() => {
+      ticks += 1;
+      void reload();
+      if (ticks % 5 === 0) {
+        for (const a of dispatched.slice(0, 3)) {
+          void fetch(
+            `/api/projects/${props.projectId}/realization/attempts/${a.attemptId}/reconcile`,
+            { method: "POST" },
+          ).catch(() => {
+            /* observational */
+          });
+        }
+      }
+    }, 3000);
+    return () => window.clearInterval(id);
+  }, [attempts, props.projectId, reload]);
+
+  async function reconcileAttempt(attemptId: string) {
+    setBusy(true);
+    try {
+      const res = await fetch(
+        `/api/projects/${props.projectId}/realization/attempts/${attemptId}/reconcile`,
+        { method: "POST" },
+      );
+      const j = (await res.json().catch(() => ({}))) as { error?: string; message?: string; status?: string };
+      setStatus(
+        res.ok
+          ? `Réconciliation: ${j.status ?? "ok"} — pas de second dispatch`
+          : j.message ?? j.error ?? "Réconciliation refusée",
+      );
+      await reload();
+    } finally {
+      setBusy(false);
     }
   }
 
-  useEffect(() => {
-    void loadAttemptsFallback();
-    // eslint-disable-next-line react-hooks/exhaustive-deps
-  }, [props.projectId]);
-
   async function prepareFromContract(contract: ContractRow) {
     setBusy(true);
     setStatus("");
@@ -179,35 +215,107 @@ export function CursorRealizationSurface(props: {
     }
   }
 
-  function confirmNo() {
-    setConfirmOpen(false);
-    setPendingAttemptId(null);
-    setStatus("Confirmation Non — aucun acte D6, aucun dispatch");
+  async function confirmNo() {
+    if (!pendingAttemptId || !selectedContract) {
+      setConfirmOpen(false);
+      setPendingAttemptId(null);
+      setStatus("Confirmation Non — dialogue fermé sans acte");
+      return;
+    }
+    setBusy(true);
+    try {
+      const auth = await fetch(
+        `/api/projects/${props.projectId}/realization/attempts/${pendingAttemptId}/authorize`,
+        {
+          method: "POST",
+          headers: { "Content-Type": "application/json" },
+          body: JSON.stringify({
+            statement: "Refus explicite D6 — pas d'exécution Cursor du contrat inspecté",
+            inspectedFingerprint: selectedContract.fingerprint,
+            confirmed: false,
+          }),
+        },
+      );
+      const aj = (await auth.json().catch(() => ({}))) as {
+        error?: string;
+        message?: string;
+        status?: string;
+        decisionId?: string;
+        refused?: boolean;
+      };
+      if (!auth.ok) {
+        setStatus(aj.message ?? aj.error ?? "Refus D6 non enregistré");
+      } else {
+        setStatus(
+          `Refus D6 enregistré (${aj.status ?? "CANCELLED"}) — décision ${aj.decisionId ?? "—"} — aucun dispatch`,
+        );
+      }
+      setConfirmOpen(false);
+      setPendingAttemptId(null);
+      await reload();
+    } finally {
+      setBusy(false);
+    }
+  }
+
+  function resumeMissing(rubrics: D8Rubric[] | undefined): boolean {
+    const resume = (rubrics ?? []).find((r) => r.key === "resume");
+    return (
+      !resume ||
+      resume.coverage === "MISSING" ||
+      /^rapport manquant$/i.test((resume.content ?? "").trim())
+    );
   }
 
   async function openBilan(attempt: AttemptRow) {
     setSelectedAttempt(attempt);
     setBusy(true);
     try {
+      const handoffRes = await fetch(
+        `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/handoff`,
+      );
+      const handoffJ = (await handoffRes.json().catch(() => ({}))) as {
+        handoff?: { id?: string; status?: string; reportMarkdown?: string | null };
+        status?: string;
+      };
+      const handoff = handoffJ.handoff ?? null;
+      const handoffReceived =
+        handoffRes.ok &&
+        handoff?.status === "RECEIVED" &&
+        Boolean(handoff.reportMarkdown && String(handoff.reportMarkdown).trim());
+
       let res = await fetch(
         `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/qualification`,
       );
       let j = (await res.json().catch(() => ({}))) as {
         status?: string;
         qualification?: {
+          id?: string;
           verdict: string;
           rubrics: D8Rubric[];
           limits: string[];
           noraAnalysisMarkdown?: string | null;
+          noraAnalysisKind?: string | null;
+          updatedAt?: string | null;
         };
       };
-      if (j.status === "MISSING" || !j.qualification) {
+
+      // C11 — lecture ≠ requalification durable silencieuse.
+      // Première création (MISSING) reste autorisée ; requalify après handoff exige un acte explicite.
+      const needsFirstCreate = j.status === "MISSING" || !j.qualification;
+      const needsExplicitRequalify =
+        Boolean(j.qualification) &&
+        handoffReceived &&
+        resumeMissing(j.qualification?.rubrics);
+
+      if (needsFirstCreate) {
+        const payload = { attachNoraCognitive: true };
         res = await fetch(
           `/api/projects/${props.projectId}/realization/attempts/${attempt.attemptId}/qualification`,
           {
             method: "POST",
             headers: { "Content-Type": "application/json" },
-            body: JSON.stringify({ attachNoraAnalysis: true }),
+            body: JSON.stringify(payload),
           },
         );
         const created = (await res.json().catch(() => ({}))) as {
@@ -215,6 +323,9 @@ export function CursorRealizationSurface(props: {
           rubrics?: D8Rubric[];
           limits?: string[];
           noraAnalysisMarkdown?: string | null;
+          noraAnalysisKind?: string | null;
+          error?: string;
+          message?: string;
         };
         if (res.ok && created.rubrics) {
           setBilan({
@@ -222,17 +333,39 @@ export function CursorRealizationSurface(props: {
             rubrics: created.rubrics,
             limits: created.limits ?? [],
             noraAnalysisMarkdown: created.noraAnalysisMarkdown,
+            noraAnalysisKind: created.noraAnalysisKind,
           });
+          setStatus("Bilan D8 créé");
           return;
         }
-        setStatus("Qualification indisponible");
+        setStatus(created.message ?? created.error ?? "Qualification indisponible");
+        return;
+      }
+
+      if (needsExplicitRequalify && j.qualification) {
+        setBilan({
+          verdict: j.qualification.verdict,
+          rubrics: j.qualification.rubrics,
+          limits: j.qualification.limits,
+          noraAnalysisMarkdown: j.qualification.noraAnalysisMarkdown,
+          noraAnalysisKind: j.qualification.noraAnalysisKind,
+        });
+        setPendingRequalify({
+          attemptId: attempt.attemptId,
+          handoffId: handoff?.id ?? "",
+          expectedUpdatedAt: j.qualification.updatedAt ?? null,
+        });
+        setStatus(
+          "Handoff RECEIVED après qualification initiale — requalification explicite requise (pas de POST silencieux à l'ouverture)",
+        );
         return;
       }
       setBilan({
-        verdict: j.qualification.verdict,
-        rubrics: j.qualification.rubrics,
-        limits: j.qualification.limits,
-        noraAnalysisMarkdown: j.qualification.noraAnalysisMarkdown,
+        verdict: j.qualification!.verdict,
+        rubrics: j.qualification!.rubrics,
+        limits: j.qualification!.limits,
+        noraAnalysisMarkdown: j.qualification!.noraAnalysisMarkdown,
+        noraAnalysisKind: j.qualification!.noraAnalysisKind,
       });
     } finally {
       setBusy(false);
@@ -251,6 +384,57 @@ export function CursorRealizationSurface(props: {
     }
   }
 
+  /** C11 — requalify is an explicit Pilot act, never silent on openBilan. */
+  async function confirmRequalify() {
+    if (!pendingRequalify?.handoffId) {
+      setStatus("Impossible de requalifier — handoffId manquant");
+      return;
+    }
+    setBusy(true);
+    try {
+      const res = await fetch(
+        `/api/projects/${props.projectId}/realization/attempts/${pendingRequalify.attemptId}/qualification`,
+        {
+          method: "POST",
+          headers: { "Content-Type": "application/json" },
+          body: JSON.stringify({
+            attachNoraCognitive: true,
+            requalify: true,
+            reason:
+              "C11 — requalification explicite après handoff RECEIVED (correction de jugement)",
+            requalifyMode: "judgment_correction",
+            newProofRef: pendingRequalify.handoffId,
+            expectedUpdatedAt: pendingRequalify.expectedUpdatedAt ?? undefined,
+          }),
+        },
+      );
+      const created = (await res.json().catch(() => ({}))) as {
+        verdict?: string;
+        rubrics?: D8Rubric[];
+        limits?: string[];
+        noraAnalysisMarkdown?: string | null;
+        noraAnalysisKind?: string | null;
+        message?: string;
+        error?: string;
+      };
+      if (res.ok && created.rubrics) {
+        setBilan({
+          verdict: created.verdict ?? "INDETERMINATE",
+          rubrics: created.rubrics,
+          limits: created.limits ?? [],
+          noraAnalysisMarkdown: created.noraAnalysisMarkdown,
+          noraAnalysisKind: created.noraAnalysisKind,
+        });
+        setPendingRequalify(null);
+        setStatus("Bilan D8 requalifié explicitement après handoff RECEIVED");
+      } else {
+        setStatus(created.message ?? created.error ?? "Requalification refusée");
+      }
+    } finally {
+      setBusy(false);
+    }
+  }
+
   const viewerModel: ContractViewerModel | null = selectedContract
     ? {
         contractId: selectedContract.id,
@@ -266,59 +450,87 @@ export function CursorRealizationSurface(props: {
       }
     : null;
 
+  const showExecutionChrome = mode === "execution";
+  const showResultsChrome = mode === "results";
+
   return (
-    <div className="fig-cursor-realization" data-testid="cursor-realization-surface">
+    <div
+      className="fig-cursor-realization"
+      data-testid="cursor-realization-surface"
+      data-mode={mode}
+    >
       <header>
-        <p className="fig-kicker !mb-0">EXÉCUTION CURSOR  /  RÉSULTATS</p>
-        <h2 className="fig-inspector-title">Réalisation gouvernée</h2>
+        <p className="fig-kicker !mb-0">
+          {showExecutionChrome ? "EXÉCUTION CURSOR" : "RÉSULTATS ET PREUVES  /  D8"}
+        </p>
+        <h2 className="fig-inspector-title">
+          {showExecutionChrome ? "Interventions et observations" : "Bilans de réalisation"}
+        </h2>
         <p className="fig-travail-viewer-meta">
-          Inspection → confirmation D6 → une tentative → observations → D8. Lecture ≠ autorisation.
+          {showExecutionChrome
+            ? "Inspection → confirmation D6 → une tentative → observations. Lecture ≠ autorisation."
+            : "Neuf rubriques D8 dans quatre onglets Figma. Verdict ≠ avis Nora ≠ réception D6."}
         </p>
         {status ? (
           <p role="status" data-testid="realization-status">
             {status}
           </p>
         ) : null}
+        {pendingRequalify ? (
+          <p>
+            <button
+              type="button"
+              className="btn"
+              data-testid="d8-explicit-requalify"
+              disabled={busy}
+              onClick={() => void confirmRequalify()}
+            >
+              Requalifier le bilan (acte explicite)
+            </button>
+          </p>
+        ) : null}
       </header>
 
-      <section data-testid="realization-contracts">
-        <h3>Contrats techniques</h3>
-        {contracts.length === 0 ? (
-          <p className="muted">Aucun contrat — Nora peut en préparer depuis Travail.</p>
-        ) : (
-          <ul>
-            {contracts.map((c) => (
-              <li key={c.id}>
-                <button
-                  type="button"
-                  className="btn secondary"
-                  data-testid={`contract-select-${c.id}`}
-                  disabled={busy}
-                  onClick={() => {
-                    setSelectedContract(c);
-                    setInstructionExpanded(false);
-                  }}
-                >
-                  {c.body.title} · {c.status} · v{c.version}
-                </button>
-                {c.status === "READY" ? (
+      {showExecutionChrome ? (
+        <section data-testid="realization-contracts">
+          <h3>Contrats techniques</h3>
+          {contracts.length === 0 ? (
+            <p className="muted">Aucun contrat — Nora peut en préparer depuis Travail.</p>
+          ) : (
+            <ul>
+              {contracts.map((c) => (
+                <li key={c.id}>
                   <button
                     type="button"
-                    className="btn"
-                    data-testid={`contract-prepare-${c.id}`}
+                    className="btn secondary"
+                    data-testid={`contract-select-${c.id}`}
                     disabled={busy}
-                    onClick={() => void prepareFromContract(c)}
+                    onClick={() => {
+                      setSelectedContract(c);
+                      setInstructionExpanded(false);
+                    }}
                   >
-                    Préparer exécution
+                    {c.body.title} · {c.status} · v{c.version}
                   </button>
-                ) : null}
-              </li>
-            ))}
-          </ul>
-        )}
-      </section>
+                  {c.status === "READY" ? (
+                    <button
+                      type="button"
+                      className="btn"
+                      data-testid={`contract-prepare-${c.id}`}
+                      disabled={busy}
+                      onClick={() => void prepareFromContract(c)}
+                    >
+                      Préparer exécution
+                    </button>
+                  ) : null}
+                </li>
+              ))}
+            </ul>
+          )}
+        </section>
+      ) : null}
 
-      {viewerModel ? (
+      {showExecutionChrome && viewerModel ? (
         <ContractViewer
           contract={viewerModel}
           instructionExpanded={instructionExpanded}
@@ -334,41 +546,25 @@ export function CursorRealizationSurface(props: {
         />
       ) : null}
 
-      {confirmOpen ? (
-        <div
-          role="dialog"
-          aria-modal="true"
-          data-testid="d6-confirm-launch"
-          className="fig-d6-confirm"
-        >
-          <h3>Confirmer le lancement</h3>
-          <p>
-            Vous avez inspecté le contrat {selectedContract?.contractKey} v
-            {selectedContract?.version}. Confirmez-vous l&apos;exécution Cursor ?
-          </p>
-          <button
-            type="button"
-            className="btn"
-            data-testid="d6-confirm-yes"
-            disabled={busy}
-            onClick={() => void confirmYes()}
-          >
-            Oui
-          </button>
-          <button
-            type="button"
-            className="btn secondary"
-            data-testid="d6-confirm-no"
-            disabled={busy}
-            onClick={confirmNo}
-          >
-            Non
-          </button>
-        </div>
+      {confirmOpen && selectedContract ? (
+        <D6ConfirmLaunch
+          contractKey={selectedContract.contractKey}
+          version={selectedContract.version}
+          fingerprint={selectedContract.fingerprint}
+          title={selectedContract.body.title}
+          busy={busy}
+          onYes={() => void confirmYes()}
+          onNo={() => void confirmNo()}
+          onCancel={() => {
+            setConfirmOpen(false);
+            setPendingAttemptId(null);
+            setStatus("Dialogue D6 annulé — aucun acte");
+          }}
+        />
       ) : null}
 
       <section data-testid="realization-attempts">
-        <h3>Tentatives</h3>
+        <h3>{showExecutionChrome ? "Historique des interventions" : "Tentatives à bilanter"}</h3>
         {attempts.length === 0 ? (
           <p className="muted">Aucune tentative Cursor pour ce projet.</p>
         ) : (
@@ -378,16 +574,37 @@ export function CursorRealizationSurface(props: {
                 <span>
                   {a.status} · {a.live.terminalStatus ?? "—"} ·{" "}
                   {a.live.lastActivitySummary ?? "pas d'observation"}
+                  {a.live.agentId ? ` · agent ${a.live.agentId.slice(0, 8)}` : ""}
+                  {a.live.runId ? ` · run ${a.live.runId.slice(0, 8)}` : ""}
+                  {a.status === "AMBIGUOUS" ? " · à réconcilier" : ""}
                 </span>
-                <button
-                  type="button"
-                  className="btn secondary"
-                  data-testid={`attempt-bilan-${a.attemptId}`}
-                  onClick={() => void openBilan(a)}
-                >
-                  Bilan D8
-                </button>
-                {a.status === "DISPATCHED" ? (
+                {showResultsChrome ||
+                a.status === "COMPLETED" ||
+                a.status === "FAILED" ||
+                a.status === "AMBIGUOUS" ? (
+                  <button
+                    type="button"
+                    className="btn secondary"
+                    data-testid={`attempt-bilan-${a.attemptId}`}
+                    onClick={() => void openBilan(a)}
+                  >
+                    Bilan D8
+                  </button>
+                ) : null}
+                {showExecutionChrome &&
+                (a.status === "DISPATCHED" || a.status === "AMBIGUOUS") ? (
+                  <button
+                    type="button"
+                    className="btn secondary"
+                    data-testid="cursor-reconcile"
+                    data-attempt-id={a.attemptId}
+                    disabled={busy}
+                    onClick={() => void reconcileAttempt(a.attemptId)}
+                  >
+                    Réconcilier
+                  </button>
+                ) : null}
+                {showExecutionChrome && a.status === "DISPATCHED" ? (
                   <button
                     type="button"
                     className="btn secondary"
@@ -403,17 +620,16 @@ export function CursorRealizationSurface(props: {
         )}
       </section>
 
-      {bilan && selectedAttempt ? (
+      {bilan && selectedAttempt && (showResultsChrome || mode === "execution") ? (
         <RealizationBilan
           attemptId={selectedAttempt.attemptId}
           verdict={bilan.verdict}
           rubrics={bilan.rubrics}
           limits={bilan.limits}
           noraAnalysisMarkdown={bilan.noraAnalysisMarkdown}
+          noraAnalysisKind={bilan.noraAnalysisKind}
           activeTab={bilanTab}
-          onTabChange={(tab) =>
-            setBilanTab(tab as "synthese" | "evaluation" | "verdict" | "sources")
-          }
+          onTabChange={setBilanTab}
           onDiscussWithNora={() =>
             props.onDiscussWithNora?.(
               `Reprendre à propos de la tentative ${selectedAttempt.attemptId} (verdict D8: ${bilan.verdict}).`,
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
index 638f719f..bfc47d5b 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
@@ -108,6 +108,69 @@ export async function prepareCursorExecution(input: {
   )[0];
 
   const mode = resolveCursorAdapterMode();
+  const gitScope = contract.gitScopeJson
+    ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
+    : null;
+  // DÉC-ML5-GIT Option A — CP-01 independent Git observations (never contract SHA echo).
+  if (gitScope?.required) {
+    const {
+      buildCursorGitMandateFromScope,
+      observeWorkspaceGitFacts,
+      preflightCursorGitOptionA,
+    } = await import("./cursor-git-option-a");
+    const mandate = buildCursorGitMandateFromScope(gitScope);
+    const authorized =
+      process.env.SFIA_CURSOR_GIT_AUTHORIZED_REPOS?.split(",")
+        .map((s) => s.trim())
+        .filter(Boolean) ?? [];
+    // DEV SCRIPTED: allow the declared repo name when authorized list empty and mode SCRIPTED.
+    const repos =
+      authorized.length > 0
+        ? authorized
+        : mode === "SCRIPTED" && gitScope.repositoryFullName
+          ? [gitScope.repositoryFullName]
+          : [];
+    const observations = observeWorkspaceGitFacts(
+      workspace.workspaceCwd,
+      gitScope.baseRef ?? "main",
+      gitScope.workBranch ?? "cursor/work",
+    );
+    const pre = preflightCursorGitOptionA({
+      mandate,
+      workspacePath: workspace.workspaceCwd,
+      authorizedRepos: repos,
+      observations,
+    });
+    if (!pre.ok) {
+      throw new StudioError(
+        "INVALID_REQUEST",
+        `Préflight Git Cursor option A refusé: ${pre.reason}`,
+        { exposeMessage: true },
+      );
+    }
+  }
+  // E12 / C8 A3 — MCP fail-closed: UNKNOWN blocks; SCRIPTED may simulate explicitly.
+  const mcpRequired = input.mcpRequired ?? [];
+  if (mcpRequired.length > 0) {
+    const { assertMcpReadyForDispatch, checkRequiredMcpCapabilities } = await import(
+      "./mcp-capability-check"
+    );
+    const scriptedSimulation = mode === "SCRIPTED";
+    const mcpResults = checkRequiredMcpCapabilities(mcpRequired, process.env, {
+      scriptedSimulation,
+    });
+    const mcpGate = assertMcpReadyForDispatch(mcpResults, {
+      allowScriptedSimulation: scriptedSimulation,
+    });
+    if (!mcpGate.ok) {
+      throw new StudioError(
+        "INVALID_REQUEST",
+        `Préflight MCP refusé: ${mcpGate.reason}`,
+        { exposeMessage: true },
+      );
+    }
+  }
+  const modelId = (process.env.SFIA_CURSOR_MODEL_ID || "").trim() || undefined;
   const plan: CursorExecutionPlan = {
     kind: "CURSOR_EXECUTION",
     contractId: contract.id,
@@ -118,10 +181,9 @@ export async function prepareCursorExecution(input: {
     workspaceCwd: workspace.workspaceCwd,
     workspaceKey: workspace.workspaceKey,
     effectProviderMode: mode,
-    gitScope: contract.gitScopeJson
-      ? (JSON.parse(contract.gitScopeJson) as CursorExecutionPlan["gitScope"])
-      : null,
-    mcpRequired: input.mcpRequired ?? [],
+    ...(modelId ? { modelId } : {}),
+    gitScope,
+    mcpRequired,
   };
   const fingerprint = contract.fingerprint;
   const planFp = planFingerprintPayload(plan);
@@ -177,6 +239,96 @@ export async function prepareCursorExecution(input: {
   };
 }
 
+/**
+ * Authenticated D6 Non — records an explicit HumanDecision refusal.
+ * No AUTHORIZED transition, no dispatch, no Cursor effect.
+ * Attempt moves PREPARED → CANCELLED (still the same attemptId).
+ */
+export async function refuseCursorExecution(input: {
+  pilotId: string;
+  projectId: string;
+  attemptId: string;
+  statement: string;
+  inspectedFingerprint: string;
+}) {
+  return db.transaction(async (tx) => {
+    const row = (
+      await tx
+        .select()
+        .from(effectAttempts)
+        .where(
+          and(
+            eq(effectAttempts.id, input.attemptId),
+            eq(effectAttempts.projectId, input.projectId),
+            eq(effectAttempts.pilotId, input.pilotId),
+          ),
+        )
+        .limit(1)
+    )[0];
+    if (!row) throw new StudioError("NOT_FOUND", "Tentative introuvable");
+    if (row.kind !== "CURSOR_EXECUTION") {
+      throw new StudioError("INVALID_REQUEST", "Tentative non Cursor");
+    }
+    if (row.status === "CANCELLED" && row.decisionId) {
+      return {
+        attemptId: row.id,
+        status: "CANCELLED" as const,
+        decisionId: row.decisionId,
+        idempotent: true as const,
+        fingerprint: row.fingerprint,
+        refused: true as const,
+      };
+    }
+    if (row.status !== "PREPARED") {
+      throw new StudioError(
+        "CONFLICT",
+        `Refus D6 impossible depuis statut ${row.status}`,
+        { exposeMessage: true },
+      );
+    }
+    if (input.inspectedFingerprint !== row.fingerprint) {
+      throw new StudioError(
+        "REQUIRES_REQUALIFICATION",
+        "Empreinte inspectée ≠ tentative — relire le contrat",
+        { exposeMessage: true },
+      );
+    }
+    const effectConditions = JSON.stringify({
+      fingerprint: row.fingerprint,
+      kind: "CURSOR_EXECUTION_REFUSAL",
+      attemptId: row.id,
+    });
+    const decisionId = await insertHumanDecision(tx, {
+      projectId: input.projectId,
+      pilotId: input.pilotId,
+      sourceKind: "CURSOR_EXECUTION",
+      sourceRef: row.id,
+      kind: "CURSOR_EXECUTION_REFUSAL",
+      objectRef: row.id,
+      statement: (input.statement || "Refus explicite D6 — pas d'exécution Cursor").slice(0, 500),
+      effectConditions,
+    });
+    const now = new Date();
+    await tx
+      .update(effectAttempts)
+      .set({
+        status: "CANCELLED",
+        decisionId,
+        effectConditions,
+        updatedAt: now,
+      })
+      .where(eq(effectAttempts.id, row.id));
+    return {
+      attemptId: row.id,
+      status: "CANCELLED" as const,
+      decisionId,
+      idempotent: false as const,
+      fingerprint: row.fingerprint,
+      refused: true as const,
+    };
+  });
+}
+
 export async function authorizeCursorExecution(input: {
   pilotId: string;
   projectId: string;
@@ -187,8 +339,12 @@ export async function authorizeCursorExecution(input: {
   confirmed: boolean;
 }) {
   if (!input.confirmed) {
-    throw new StudioError("INVALID_REQUEST", "Confirmation refusée — aucun effet", {
-      exposeMessage: true,
+    return refuseCursorExecution({
+      pilotId: input.pilotId,
+      projectId: input.projectId,
+      attemptId: input.attemptId,
+      statement: input.statement,
+      inspectedFingerprint: input.inspectedFingerprint,
     });
   }
   return db.transaction(async (tx) => {
@@ -377,7 +533,19 @@ export async function dispatchCursorExecution(input: {
   }
 
   const fromStatus = row.status as "AUTHORIZED" | "AMBIGUOUS";
-  const claimed = await claimCursorAttempt(row.id, fromStatus);
+  if (fromStatus === "AMBIGUOUS") {
+    const { priorSendMayHaveOccurred } = await import("./cursor-claim");
+    if (priorSendMayHaveOccurred(row.resultJson)) {
+      throw new StudioError(
+        "CONFLICT",
+        "AMBIGUOUS avec envoi antérieur possible — pas de redispatch ; réconcilier ou conserver UNKNOWN",
+        { exposeMessage: true },
+      );
+    }
+  }
+  // P0: claim + sendRequestedAt in one durable write BEFORE any external SDK call.
+  // Crash between this point and SDK ⇒ priorSendMayHaveOccurred ⇒ no blind redispatch.
+  const claimed = await claimCursorAttempt(row.id, fromStatus, { stampSendIntent: true });
   if (!claimed) {
     const again = (
       await db.select().from(effectAttempts).where(eq(effectAttempts.id, row.id)).limit(1)
@@ -387,24 +555,45 @@ export async function dispatchCursorExecution(input: {
         exposeMessage: true,
       });
     }
+    const { priorSendMayHaveOccurred } = await import("./cursor-claim");
+    if (fromStatus === "AMBIGUOUS" && priorSendMayHaveOccurred(again?.resultJson)) {
+      throw new StudioError(
+        "CONFLICT",
+        "Claim refusé — effet externe possible après ACK perdu ; pas de second envoi",
+        { exposeMessage: true },
+      );
+    }
     throw new StudioError("CONFLICT", "Claim atomique échoué — pas de dispatch", {
       exposeMessage: true,
     });
   }
 
   const claimToken = claimed.claim.claimToken;
-  const sendRequestedAt = new Date().toISOString();
+  const sendRequestedAt =
+    claimed.sendRequestedAt ?? new Date().toISOString();
 
   let dispatched;
   try {
+    const { isScriptedPhasedMode } = await import("./cursor-sdk-adapter");
+    const scriptedPhased =
+      plan.effectProviderMode === "SCRIPTED" && isScriptedPhasedMode();
+    const liveWait =
+      plan.effectProviderMode === "LIVE" &&
+      (process.env.SFIA_CURSOR_LIVE_WAIT || "").trim() === "1";
     dispatched = await dispatchCursorRun({
       attemptId: row.id,
       instructionText: contract.instructionText,
       instructionFingerprint: plan.instructionFingerprint,
       workspaceCwd: plan.workspaceCwd,
       idempotencyKey: row.id,
-      /** LIVE: return after ACK/first observation — do not block HTTP on full wait. */
-      waitForTerminal: plan.effectProviderMode === "SCRIPTED",
+      modelId: plan.modelId,
+      /**
+       * LIVE default: return after ACK — reconcile observes terminal without resend.
+       * SFIA_CURSOR_LIVE_WAIT=1: block until terminal (DEV worker-style, C11).
+       * SCRIPTED default: finish immediately unless SFIA_CURSOR_SCRIPTED_PHASED=1.
+       */
+      waitForTerminal:
+        liveWait || (plan.effectProviderMode === "SCRIPTED" && !scriptedPhased),
     });
   } catch (e) {
     const failLive: CursorLiveProjection = {
@@ -424,7 +613,7 @@ export async function dispatchCursorExecution(input: {
   }
 
   const nextLive: CursorLiveProjection = {
-    sendRequestedAt: dispatched.sendRequestedAt,
+    sendRequestedAt: dispatched.sendRequestedAt ?? sendRequestedAt,
     ackReceivedAt: dispatched.ackReceivedAt,
     runObservedAt: dispatched.runObservedAt,
     agentId: dispatched.agentId,
@@ -534,6 +723,149 @@ export async function reconcileCursorExecution(input: {
   const live = parseLive(row.resultJson);
   const claim = readClaim(row.resultJson);
   const limits = [...(live.limits ?? [])];
+  const plan = JSON.parse(row.planJson) as CursorExecutionPlan;
+
+  // SCRIPTED phased: advance in-memory run → COMPLETED without a second send.
+  if (
+    row.status === "DISPATCHED" &&
+    plan.effectProviderMode === "SCRIPTED" &&
+    !live.terminalStatus
+  ) {
+    const { advanceScriptedRunToFinished } = await import("./cursor-sdk-adapter");
+    const advanced = advanceScriptedRunToFinished(row.id);
+    if (advanced) {
+      const nextLive: CursorLiveProjection = {
+        ...live,
+        agentId: advanced.agentId,
+        runId: advanced.runId,
+        terminalStatus: "finished",
+        lastActivitySummary: advanced.lastActivitySummary,
+        reportStatus: "RECEIVED",
+        limits: [
+          ...limits,
+          "SCRIPTED_MODE",
+          "SCRIPTED_PHASED_RECONCILED",
+          "NO_REAL_SIDE_EFFECT",
+        ],
+      };
+      if (claim && isClaimActive(claim)) {
+        await persistCursorOwnedResult({
+          attemptId: row.id,
+          claimToken: claim.claimToken,
+          resultJson: JSON.stringify({
+            ...nextLive,
+            reportMarkdown: advanced.resultText,
+          }),
+          status: "COMPLETED",
+          release: true,
+        });
+      } else {
+        await db
+          .update(effectAttempts)
+          .set({
+            status: "COMPLETED",
+            resultJson: JSON.stringify({
+              ...nextLive,
+              reportMarkdown: advanced.resultText,
+            }),
+            updatedAt: new Date(),
+          })
+          .where(eq(effectAttempts.id, row.id));
+      }
+      return {
+        attemptId: row.id,
+        status: "COMPLETED" as const,
+        live: nextLive,
+        limits: nextLive.limits ?? [],
+        scriptedReportMarkdown: advanced.resultText,
+      };
+    }
+  }
+
+  // LIVE: observe existing run — never a second send.
+  if (
+    row.status === "DISPATCHED" &&
+    plan.effectProviderMode === "LIVE" &&
+    !live.terminalStatus &&
+    live.runId
+  ) {
+    const { observeLiveCursorRun } = await import("./cursor-sdk-adapter");
+    const observed = await observeLiveCursorRun({
+      runId: live.runId,
+      agentId: live.agentId,
+      workspaceCwd: plan.workspaceCwd,
+    });
+    const nextLive: CursorLiveProjection = {
+      ...live,
+      terminalStatus: observed.terminalStatus ?? live.terminalStatus,
+      lastActivitySummary:
+        observed.lastActivitySummary ?? live.lastActivitySummary,
+      reportStatus:
+        observed.terminalStatus === "finished" ? "EXPECTED" : live.reportStatus,
+      limits: [...new Set([...limits, ...(observed.limits ?? [])])],
+    };
+    const terminal =
+      nextLive.terminalStatus === "finished" ||
+      nextLive.terminalStatus === "error" ||
+      nextLive.terminalStatus === "cancelled";
+    if (terminal) {
+      const payload = {
+        ...nextLive,
+        ...(observed.resultText
+          ? { reportMarkdown: observed.resultText }
+          : {}),
+      };
+      if (claim && isClaimActive(claim)) {
+        await persistCursorOwnedResult({
+          attemptId: row.id,
+          claimToken: claim.claimToken,
+          resultJson: JSON.stringify(payload),
+          status: "COMPLETED",
+          release: true,
+        });
+      } else {
+        await db
+          .update(effectAttempts)
+          .set({
+            status: "COMPLETED",
+            resultJson: JSON.stringify(payload),
+            updatedAt: new Date(),
+          })
+          .where(
+            and(
+              eq(effectAttempts.id, row.id),
+              eq(effectAttempts.status, "DISPATCHED"),
+            ),
+          );
+      }
+      return {
+        attemptId: row.id,
+        status: "COMPLETED" as const,
+        live: nextLive,
+        limits: nextLive.limits ?? [],
+        scriptedReportMarkdown: observed.resultText,
+      };
+    }
+    // Non-terminal observation — persist activity, stay DISPATCHED.
+    await db
+      .update(effectAttempts)
+      .set({
+        resultJson: JSON.stringify(nextLive),
+        updatedAt: new Date(),
+      })
+      .where(
+        and(
+          eq(effectAttempts.id, row.id),
+          eq(effectAttempts.status, "DISPATCHED"),
+        ),
+      );
+    return {
+      attemptId: row.id,
+      status: "DISPATCHED" as const,
+      live: nextLive,
+      limits: nextLive.limits ?? [],
+    };
+  }
 
   if (row.status === "DISPATCHED" && !isClaimActive(claim)) {
     if (!live.runId && !live.agentId) {
diff --git a/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts b/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
index 86ed9d13..ec9bedb4 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
@@ -61,6 +61,121 @@ export function resolveCursorAdapterMode(
   return "SCRIPTED";
 }
 
+/**
+ * Resolve Cursor SDK API key: env first, then FileCredentialStore (~/.cursor/sdk/auth.json).
+ * Never logs or returns the secret to callers beyond Agent.create.
+ */
+export async function resolveCursorApiKey(
+  env: NodeJS.ProcessEnv = process.env,
+): Promise<{ apiKey: string | null; source: "ENV" | "FILE_CREDENTIAL_STORE" | "NONE" }> {
+  const fromEnv = (env.CURSOR_API_KEY || "").trim();
+  if (fromEnv) return { apiKey: fromEnv, source: "ENV" };
+  try {
+    const { FileCredentialStore } = await import("@cursor/sdk");
+    const store = new FileCredentialStore();
+    const creds = await store.load();
+    const key = typeof creds?.apiKey === "string" ? creds.apiKey.trim() : "";
+    if (key) return { apiKey: key, source: "FILE_CREDENTIAL_STORE" };
+  } catch {
+    /* store unavailable */
+  }
+  return { apiKey: null, source: "NONE" };
+}
+
+/** Default model when plan omits modelId — SDK rejects create without a model. */
+export function resolveCursorModelId(
+  modelId: string | undefined,
+  env: NodeJS.ProcessEnv = process.env,
+): string {
+  const fromInput = (modelId || "").trim();
+  if (fromInput) return fromInput;
+  const fromEnv = (env.SFIA_CURSOR_MODEL_ID || "").trim();
+  if (fromEnv) return fromEnv;
+  return "composer-2.5";
+}
+
+export type CursorObserveResult = {
+  terminalStatus: CursorLiveProjection["terminalStatus"];
+  lastActivitySummary: string | null;
+  resultText: string | null;
+  limits: string[];
+};
+
+/**
+ * Observational LIVE reconcile — never sends a second instruction.
+ * Uses Agent.getRun + wait when a runId is known.
+ */
+export async function observeLiveCursorRun(input: {
+  runId: string;
+  agentId: string | null;
+  workspaceCwd: string;
+  waitMs?: number;
+}): Promise<CursorObserveResult> {
+  const limits: string[] = ["LIVE_SDK", "OBSERVE_NO_RESEND"];
+  try {
+    const { Agent } = await import("@cursor/sdk");
+    const run = await Agent.getRun(input.runId, {
+      runtime: "local",
+      cwd: input.workspaceCwd,
+    });
+    if (!run) {
+      return {
+        terminalStatus: "unknown",
+        lastActivitySummary: "SDK_GET_RUN_EMPTY",
+        resultText: null,
+        limits: [...limits, "GET_RUN_EMPTY — AMBIGUOUS possible"],
+      };
+    }
+    const statusNow =
+      typeof run.status === "string" ? run.status : null;
+    if (
+      statusNow === "finished" ||
+      statusNow === "error" ||
+      statusNow === "cancelled"
+    ) {
+      return {
+        terminalStatus: statusNow,
+        lastActivitySummary: `SDK_OBSERVED_${statusNow.toUpperCase()}`,
+        resultText: typeof run.result === "string" ? run.result : null,
+        limits,
+      };
+    }
+    if (typeof run.wait === "function") {
+      const waited = await run.wait();
+      const terminal =
+        waited.status === "finished" ||
+        waited.status === "error" ||
+        waited.status === "cancelled"
+          ? waited.status
+          : "unknown";
+      return {
+        terminalStatus: terminal,
+        lastActivitySummary: `SDK_WAIT_${String(waited.status).toUpperCase()}`,
+        resultText: typeof waited.result === "string" ? waited.result : null,
+        limits: [...limits, "WAIT_COMPLETED_IN_OBSERVE"],
+      };
+    }
+    return {
+      terminalStatus: null,
+      lastActivitySummary: statusNow
+        ? `SDK_STATUS_${statusNow.toUpperCase()}`
+        : "SDK_STATUS_UNKNOWN_NON_TERMINAL",
+      resultText: null,
+      limits: [...limits, "NON_TERMINAL_NO_WAIT"],
+    };
+  } catch (e) {
+    return {
+      terminalStatus: "unknown",
+      lastActivitySummary: "SDK_OBSERVE_FAILED",
+      resultText: null,
+      limits: [
+        ...limits,
+        `OBSERVE_FAILED:${String((e as Error)?.message ?? e).slice(0, 80)}`,
+      ],
+    };
+  }
+}
+
 /** In-memory scripted runs for DETERMINISTIC tests — not a parallel business path. */
 const scriptedRuns = new Map<
   string,
@@ -77,6 +192,60 @@ export function __resetScriptedCursorRunsForTests(): void {
   scriptedRuns.clear();
 }
 
+/** When true, SCRIPTED returns DISPATCHED/RUNNING first; reconcile advances to finished. */
+export function isScriptedPhasedMode(env: NodeJS.ProcessEnv = process.env): boolean {
+  return (env.SFIA_CURSOR_SCRIPTED_PHASED || "").trim() === "1";
+}
+
+export function getScriptedRun(attemptId: string) {
+  return scriptedRuns.get(attemptId) ?? null;
+}
+
+/** Advance a phased SCRIPTED run to finished — used by reconcile, never a second send. */
+export function advanceScriptedRunToFinished(attemptId: string): {
+  agentId: string;
+  runId: string;
+  resultText: string;
+  lastActivitySummary: string;
+} | null {
+  const existing = scriptedRuns.get(attemptId);
+  if (!existing) return null;
+  if (existing.status === "finished") {
+    return {
+      agentId: existing.agentId,
+      runId: existing.runId,
+      resultText: existing.resultText,
+      lastActivitySummary: "SCRIPTED_ALREADY_FINISHED",
+    };
+  }
+  if (existing.status !== "running") return null;
+  existing.status = "finished";
+  return {
+    agentId: existing.agentId,
+    runId: existing.runId,
+    resultText: existing.resultText,
+    lastActivitySummary: "SCRIPTED_OBSERVATION_FINISHED",
+  };
+}
+
+function buildScriptedReport(attemptId: string, instructionFingerprint: string): string {
+  return [
+    `# Rapport de réalisation (SCRIPTED)`,
+    ``,
+    `attemptId: ${attemptId}`,
+    `instructionFingerprint: ${instructionFingerprint}`,
+    ``,
+    `## Inventaire`,
+    `- Aucun fichier modifié (mode scripted)`,
+    ``,
+    `## Tests`,
+    `- Non exécutés (SCRIPTED)`,
+    ``,
+    `## Réserves`,
+    `- Preuve LIVE SDK non produite`,
+  ].join("\n");
+}
+
 export async function dispatchCursorRun(
   input: CursorDispatchInput,
   mode = resolveCursorAdapterMode(),
@@ -100,28 +269,35 @@ export async function dispatchCursorRun(
     }
     const agentId = `scripted-agent-${input.attemptId}`;
     const runId = `scripted-run-${input.attemptId}`;
-    const resultText = [
-      `# Rapport de réalisation (SCRIPTED)`,
-      ``,
-      `attemptId: ${input.attemptId}`,
-      `instructionFingerprint: ${input.instructionFingerprint}`,
-      ``,
-      `## Inventaire`,
-      `- Aucun fichier modifié (mode scripted)`,
-      ``,
-      `## Tests`,
-      `- Non exécutés (SCRIPTED)`,
-      ``,
-      `## Réserves`,
-      `- Preuve LIVE SDK non produite`,
-    ].join("\n");
+    const resultText = buildScriptedReport(input.attemptId, input.instructionFingerprint);
+    const phased =
+      isScriptedPhasedMode() || input.waitForTerminal === false;
     scriptedRuns.set(input.idempotencyKey, {
       agentId,
       runId,
-      status: "finished",
+      status: phased ? "running" : "finished",
       instructionFingerprint: input.instructionFingerprint,
       resultText,
     });
+    if (phased) {
+      return {
+        mode,
+        sendRequestedAt,
+        ackReceivedAt: sendRequestedAt,
+        runObservedAt: sendRequestedAt,
+        agentId,
+        runId,
+        terminalStatus: null,
+        lastActivitySummary: "SCRIPTED_OBSERVATION_RUNNING",
+        resultText: null,
+        limits: [
+          "SCRIPTED_MODE",
+          "SCRIPTED_PHASED",
+          "NO_REAL_SIDE_EFFECT",
+          "REQUIRES_RECONCILE_TO_FINISH",
+        ],
+      };
+    }
     return {
       mode,
       sendRequestedAt,
@@ -137,10 +313,17 @@ export async function dispatchCursorRun(
   }
 
   // LIVE path — dynamic import so unit tests without entitlement still load.
+  const keyResolved = await resolveCursorApiKey();
+  if (!keyResolved.apiKey) {
+    throw new Error(
+      "CURSOR_SDK_UNAVAILABLE — ni CURSOR_API_KEY ni FileCredentialStore",
+    );
+  }
+  const modelId = resolveCursorModelId(input.modelId);
   const { Agent } = await import("@cursor/sdk");
   const agent = await Agent.create({
-    apiKey: process.env.CURSOR_API_KEY,
-    model: input.modelId ? { id: input.modelId } : undefined,
+    apiKey: keyResolved.apiKey,
+    model: { id: modelId },
     local: { cwd: input.workspaceCwd },
   });
   let ackReceivedAt: string | null = null;
@@ -171,6 +354,8 @@ export async function dispatchCursorRun(
       limits: [
         "LIVE_SDK",
         "DISPATCH_ACCEPTED_WITHOUT_WAIT",
+        `API_KEY_SOURCE_${keyResolved.source}`,
+        `MODEL_${modelId}`,
         "REPORT_MUST_BE_INGESTED_SEPARATELY",
         "SUPERVISION_REQUIRES_RECONCILE_OR_WORKER",
       ],
@@ -194,7 +379,13 @@ export async function dispatchCursorRun(
     terminalStatus: terminal,
     lastActivitySummary: lastActivitySummary ?? `SDK_${String(waited.status).toUpperCase()}`,
     resultText: typeof waited.result === "string" ? waited.result : null,
-    limits: ["LIVE_SDK", "REPORT_MUST_BE_INGESTED_SEPARATELY", "WAIT_COMPLETED_IN_ADAPTER"],
+    limits: [
+      "LIVE_SDK",
+      `API_KEY_SOURCE_${keyResolved.source}`,
+      `MODEL_${modelId}`,
+      "REPORT_MUST_BE_INGESTED_SEPARATELY",
+      "WAIT_COMPLETED_IN_ADAPTER",
+    ],
   };
 }
 
@@ -229,10 +420,12 @@ export async function stopCursorRun(input: {
     };
   }
   try {
+    const keyResolved = await resolveCursorApiKey();
     const { Agent } = await import("@cursor/sdk");
     const run = await Agent.getRun(input.runId, {
       runtime: "local",
       cwd: input.workspaceCwd,
+      ...(keyResolved.apiKey ? { apiKey: keyResolved.apiKey } : {}),
     });
     if (run && typeof run.cancel === "function") {
       await run.cancel();
diff --git a/projects/sfia-studio-next/web/src/domains/execution/types.ts b/projects/sfia-studio-next/web/src/domains/execution/types.ts
index a7b8da73..c256703e 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/types.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/types.ts
@@ -68,6 +68,8 @@ export type CursorExecutionPlan = {
   /** Short key used to resolve workspaceCwd; browser may only send this. */
   workspaceKey?: string;
   effectProviderMode: "SCRIPTED" | "LIVE";
+  /** Optional SDK model id — resolved at prepare from SFIA_CURSOR_MODEL_ID when omitted. */
+  modelId?: string;
   gitScope?: TechnicalContractBody["gitScope"];
   mcpRequired: string[];
 };

```

## 21. Inventaire DIRTY

```
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/construction/ml5-as-built-cursor-realization.md
 M projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md
 M projects/sfia-studio-next/web/next.config.ts
 M projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/turns/by-key/[clientTurnKey]/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/authorize/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/handoff/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/qualification/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/[contractId]/ready/route.ts
 M projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/contracts/route.ts
 M projects/sfia-studio-next/web/src/app/login/page.tsx
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/ContractViewer.tsx
 M projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/RealizationBilan.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
 M projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
 M projects/sfia-studio-next/web/src/db/schema.ts
 M projects/sfia-studio-next/web/src/domains/conversation/d4-read-tools.ts
 M projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
 M projects/sfia-studio-next/web/src/domains/conversation/service.ts
 M projects/sfia-studio-next/web/src/domains/conversation/turn-projection.ts
 M projects/sfia-studio-next/web/src/domains/conversation/visual-composition.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-attempt-service.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-claim.ts
 M projects/sfia-studio-next/web/src/domains/execution/cursor-sdk-adapter.ts
 M projects/sfia-studio-next/web/src/domains/execution/technical-contract.ts
 M projects/sfia-studio-next/web/src/domains/execution/types.ts
 M projects/sfia-studio-next/web/src/domains/identity/session.ts
 M projects/sfia-studio-next/web/src/domains/proofs/cursor-qualify.ts
 M projects/sfia-studio-next/web/src/lib/auth.ts
 M projects/sfia-studio-next/web/tests/integration/ml5-cursor-dispatch.pg.test.ts
 M projects/sfia-studio-next/web/tests/unit/ml5-cursor-qualify.test.ts
?? projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md
?? projects/sfia-studio-next/web/.sfia-evidence/
?? projects/sfia-studio-next/web/scripts/ml5-c10-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c10-seed-scenario.mts
?? projects/sfia-studio-next/web/scripts/ml5-c11-live-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c11-seed-project.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-e2e-journey.mts
?? projects/sfia-studio-next/web/scripts/ml5-c9-seed-scenario.mts
?? projects/sfia-studio-next/web/src/app/api/dev/auto-session/
?? projects/sfia-studio-next/web/src/app/api/projects/[projectId]/realization/attempts/[attemptId]/captures/
?? projects/sfia-studio-next/web/src/components/figma/D6ConfirmLaunch.tsx
?? projects/sfia-studio-next/web/src/db/migrations/019_ml5_qualification_history.sql
?? projects/sfia-studio-next/web/src/domains/conversation/nora-contract-bridge.ts
?? projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
?? projects/sfia-studio-next/web/src/domains/conversation/tool-source-journal.ts
?? projects/sfia-studio-next/web/src/domains/conversation/web-source-citation.ts
?? projects/sfia-studio-next/web/src/domains/execution/cursor-git-option-a.ts
?? projects/sfia-studio-next/web/src/domains/execution/mcp-capability-check.ts
?? projects/sfia-studio-next/web/src/domains/execution/nora-contract-prepare.ts
?? projects/sfia-studio-next/web/src/domains/execution/technical-contract-server-ready.ts
?? projects/sfia-studio-next/web/src/domains/identity/dev-listen-probe.ts
?? projects/sfia-studio-next/web/src/domains/proofs/evidence-captures.ts
?? projects/sfia-studio-next/web/src/domains/proofs/proof-ref-verify.ts
?? projects/sfia-studio-next/web/tests/integration/ml5-qualification-requalify.pg.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c10-d6-confirmed-required.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-c9-d6-refuse-phased.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-claim-anti-duplicat.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-cursor-git-option-a.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-dev-auto-session.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-nora-contract-bridge.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-proof-ref-verify.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-public-web-frontier.test.ts
?? projects/sfia-studio-next/web/tests/unit/ml5-qualification-requalify.test.ts

```

## 22. Matrice CA-01…CA-10

| CA | Résultat | Preuve |
|---|---|---|
| CA-01 | PASS | Nora LIVE prepare contract + bridge |
| CA-02 | PARTIAL | Investigation depth partial |
| CA-03 | PASS | Sources seeded; Nora LIVE path |
| CA-04 | PASS | Server READY after Nora DRAFT |
| CA-05 | PASS | Cursor SDK LIVE + witness |
| CA-06 | N/A | No authorized GitHub test remote |
| CA-07 | PASS | Handoff RECEIVED + D8 PARTIAL |
| CA-08 | PASS | NORA_COGNITIVE LIVE |
| CA-09 | PARTIAL | Non D6 + no blind redispatch PASS |
| CA-10 | PARTIAL | Registre updated; B09/F2 open |

## 23. Couverture 99 exigences

- Présence: IMPLEMENTED 1 / PARTIAL 97 / NOT_IMPL 1 (B09) — pas de promotion artificielle
- Conformité LIVE: A03/D01/D07/E01/E04/E05/E10/G12 améliorées (registre v0.6)

## 24. R-003 / Git A

- Option A conservée; aucun push GitHub REAL; CF-10 G12 exercé LIVE

## 25. Risques / dette

- B09; provenance CLIENT_DECLARED; D8 PARTIAL sans D9 complet; F2 hors gate; code non poussé

## 26. ENV-01 / NO RELEASE

- DEV only; RECETTE/STABLE N/A; aucun tag

## 27. Verdict

**`ML5 END-TO-END DEV LIVE PROVEN — QUALIFICATION IN PROGRESS`**

| Capacité | Code | LIVE | Résultat | Preuve | Réserve |
|---|---|---|---|---|---|
| Nora investigation | Oui | Oui | PASS | openai-agents-sdk-live | — |
| Nora prépare contrat | Oui | Oui | PASS | tctr_d306deb6-4c08-4184-9e5b-89350e220c97 | READY |
| D6 | Oui | Oui | PASS | refuse efx_90d04297-285c-457d-aba9-5233064f7c41 / oui efx_306b2b49-b6e3-4b4e-97aa-e2103e9c0af4 | confirmed boolean |
| Cursor SDK | Oui | Oui | PASS | agent-29c4c0f4-dea2-4637-836e-85e7d1db9d0e / run-51c77f21-b429-4b82-aff0-a493977b65d2 | composer-2.5 |
| Handoff D8 | Oui | Oui | PASS | rhf_90ccccb6-0bfc-42d2-b2f3-e0938101a21e | RECEIVED PARTIAL |
| Nora analyse bilan | Oui | Oui | PASS | NORA_COGNITIVE | generateNoraReply |
| WEB LIVE | Oui | Non | N/A | B09 | NOT_IMPL |
| Git REAL test | Oui | Non | N/A | — | pas de remote test |
| MCP | Oui | Non | N/A | — | hors mission |

## 28. Review Handoff

- Branche `sfia/review-handoff`
- Fichier `sfia-review-handoff/latest-chatgpt-review.md`
- Commit `docs(review-handoff): publish ML5 cycle 11 DEV LIVE integration review`

