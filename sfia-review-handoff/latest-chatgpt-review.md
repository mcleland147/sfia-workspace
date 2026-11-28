# Review Pack — SFIA Studio Next — Lot 5 FinOps ciblé

Cycle: 08 — Delivery / implémentation
Profil: Standard
Typologie: EVOL — correctif compatible borné
Jalon: R5 / ML5
Review level: Light
Mono-cycle: oui
Stub: non
Date: 2026-11-28T12:05+01:00

## 1. Identité et mandat

Trois corrections utiles, sans refonte FinOps.

A. Rattacher la consommation d'un probe réellement consommé au travail validé.
B. Rendre les compteurs et le ratio honnêtes.
C. Distinguer coût connu, partiel, inconnu, non attribué, et estimation Studio.

Pas de migration, pas de backfill, pas de LIVE, pas de promotion, pas de lot 6.

## 2. Git Truth Check

Worktree: /Users/morris/Projects/sfia-wt-next-ml5-20261123
Branche: sfia/next-ml5-integrated-delivery-20261123
HEAD de départ = origin: 9bc9f3462f1e0eb91122bb6060efc23a08b71a7a
Tree de départ: 5e7e8822e3e34b1c7df2f060a305e140a824d748
origin/main = merge-base: 997897fd7cf914771e7d08e8030dc7123fab7d25
Suivi: 37f23f7b099bb73c7108e6c2e7875ab982dffb97, blob 62da6845e39b7a98fbab014b05f8e45e908d9173, v0.14 §3 L5, §9.1, §19
Diagnostic: 515561e7e5bf395907bf4ec0f4c9990a36dc4aa7 §6
Handoff précédent: 5f8770a221cd5ec156de7aa3a9e4c93a05f01212
Untracked conservés: .tmp-sfia-review/ et web/.tmp-sfia-review/
Aucune divergence. main non synchronisé.

## 3. Cause

Confirmée sur le chemin actuel, sans l'étendre aux 44 observations historiques.

Le probe de qualification appelle generateNoraReply avant la résolution du travail, sans cognitiveWorkId. S'il est réutilisé comme premier segment, son coût est déjà parti en écriture asynchrone avec un travail vide. La clé d'idempotence contient ce travail. Une seconde insertion avec le travail résolu créerait une autre clé et un double comptage. Le tour n'était pas transmis à cet enregistrement.

Les 44 lignes Equipéo et la capture MaintiPlan restent des observations historiques. Elles ne sont pas réécrites. AWAIT_PILOT n'est pas forcé à COMPLETE.

## 4. Corrections

A. Quand le probe est réellement réutilisé, attributeConsumedProbeUsage met à jour les lignes déjà écrites de cette génération. La clé d'idempotence ne change pas. Les tokens et le coût non plus. Le companion HTTP de la même génération suit le même travail et reste hors des agrégats facturables. L'écriture en cours est attendue avant la mise à jour. Une écriture qui arrive après reçoit le même travail, toujours sans nouvelle clé. Un autre projet, un autre Pilote ou une ligne déjà rattachée ailleurs est refusé. Une qualification sans travail reste non rattachée. Le tour est maintenant transmis. Aucun travail n'est créé pour l'occasion.

B. Le nombre de travaux aboutis est celui des travaux liés aux observations facturables du même filtre. S'il reste des observations non attribuées, le décompte est partiel et le dit : aboutis observés, en cours, non attribuées. Le ratio coût global / travail abouti n'est affiché que lorsque ce décompte est complet. Il reste un coût global divisé par les travaux aboutis observés, pas le coût moyen de ces seuls travaux. Les filtres de période, de projet et de modèle sont ceux de la lecture existante, partagés par le résumé et la liste.

C. Le catalogue tarifaire est inchangé. totalTokens prime, sinon entrée + sortie. Le cache et le raisonnement ne sont pas ajoutés une seconde fois. 100 % de couverture reste la part des requêtes recensées. Le sous-texte distingue les coûts partiels ou inconnus et rappelle que les émissions ne sont pas toutes établies. UNVERIFIED n'est pas affiché comme un modèle ou un effort appliqué. L'estimation Studio reste distincte d'une facture. Les libellés tiennent dans les cartes existantes. Figma n'est pas modifié.

## 5. Candidat

HEAD: 9e2f9911e0ba18f77ddbe3b6431b4e4ebe6eaf1b
Tree: 85c1eb14e76ad5a654e7c5e8063b140eed68f832
URL: https://github.com/mcleland147/sfia-workspace/commit/9e2f9911e0ba18f77ddbe3b6431b4e4ebe6eaf1b
Fast-forward 9bc9f346..9e2f9911. Local = origin.
10 fichiers, +882 / −53. Une création : le test PG d'attribution. CI non exécutée.

## 6. Validations

46 PASS sur 5 fichiers, dont le nouveau test PostgreSQL isolé :

- probe enregistré puis rattaché : 2 lignes, mêmes tokens, même coût, rejeu sans insertion
- écriture et rattachement concurrents : une seule observation, 34 tokens
- autre projet, autre Pilote, ligne déjà attribuée : refus, aucune mutation
- résumé et liste sur le même filtre : décompte partiel, ratio non affiché, travail ouvert conservé
- projection : compteur partiel, ratio global, modèle demandé non confirmé
- corrélation HTTP et idempotence existantes rejouées
- attribution de projet du test e2 rejouée

Build isolé STUDIO_E2E=1 exit 0, .next-e2e 0w2QvFs8BbSfGwGfiNl5j.
.next DEV inchangé, 31044BhyAFqJ_OpeQJS_K. Lint ciblé sans erreur nouvelle. git diff --check propre.
DEV :3100 PID 55011 et RECETTE :3200 PID 58965 inchangés.

## 7. Limites et reports

Les observations historiques sans génération identifiable ne sont pas rattachées. Un probe qui n'est pas réutilisé comme segment reste non attribué. Ce n'est pas un oubli de clôture : AWAIT_PILOT reste ouvert.

FIN-REC-01 — DEFERRED TO RECETTE. Scénario : un tour Nora réel dont le probe est réutilisé. Attendu : les observations de cette génération portent le travail, sans doublon de tokens. Preuve : extrait des observations et du travail, sans donnée sensible. Gate : requis avant acceptation Livraison 1, non bloquant pour cette sortie technique.

FIN-REC-02 — DEFERRED TO RECETTE. Scénario : plusieurs travaux réels, filtres de période, projet et modèle, avec au moins une mesure partielle. Attendu : le ratio disparaît si des observations restent non attribuées ; la couverture n'est pas présentée comme une facture. Preuve : captures du résumé et de la liste sur les mêmes filtres. Même gate.

DOC-REC-01 à 06, PROJ-REC-01/02/03, COG-REC-01 et ACT-01 à ACT-05 restent ouverts. MP16 et MP14 restent OPEN.

## 8. Fake/Real

DET : fonctions de clé, de projection et de rattachement réellement appelées.
PG : sfia_next_e2e, observations et travaux créés pour le test puis les observations et travaux de test sont supprimés. Aucun projet historique modifié. Aucune émission fournisseur.
BROWSER : non joué. La page n'a pas changé de structure.
LIVE : NOT RUN.

## 9. Content coverage

Les 10 fichiers sont dans le diff intégral ci-dessous, y compris le test créé.

## 10. Diff intégral 9bc9f346..9e2f9911

```
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index cae1a7bb..ae7e3680 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,14 @@
+## delivery_id: DELIV-2026-11-28-ML5-FINOPS-ATTRIBUTION-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — lot 5, fiabilisation ciblée du FinOps
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `9bc9f3462f1e0eb91122bb6060efc23a08b71a7a`
+- **commit**: `fix(next): improve FinOps work attribution`
+- **schema_revision**: unchanged
+- **scope**: rattachement du probe consommé par mise à jour de l'observation existante ; compteurs et ratio honnêtes lorsqu'une observation n'est pas attribuée ; libellés de coût, de couverture et de modèle demandé
+- **classe**: NO RELEASE · compatible corrective · LIVE NOT RUN · CI NOT RUN · pas de backfill historique
+
 ## delivery_id: DELIV-2026-11-28-ML5-NORA-ACTIVITY-INTEGRITY-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx b/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
index 77d79b50..39313626 100644
--- a/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
@@ -45,6 +45,7 @@ type SummaryResponse = {

 function kpiSubCost(metric: FinOpsSummaryDto["kpis"]["estimatedCostUsd"]): string {
   if (metric.kind === "unknown") return "Estimation Studio indisponible";
+  if (metric.kind === "partial") return metric.note ?? "Estimation Studio partielle";
   return "USD · estimation Studio";
 }

@@ -54,9 +55,15 @@ function kpiSubTokens(metric: FinOpsSummaryDto["kpis"]["totalTokens"]): string {
 }

 function kpiSubCompleted(
+  completed: FinOpsSummaryDto["kpis"]["completedWorks"],
   costPer: FinOpsSummaryDto["kpis"]["costPerCompletedWorkUsd"],
 ): string {
-  if (costPer.kind === "known" || costPer.kind === "partial") {
+  if (completed.kind === "partial") return completed.note ?? "Décompte partiel";
+  if (completed.kind === "unknown") return completed.reason ?? "Travaux non établis";
+  if (costPer.kind === "partial") {
+    return `Coût global / travail abouti : ${formatMeasuredUsd(costPer)} · estimation partielle`;
+  }
+  if (costPer.kind === "known") {
     return `Coût global / travail abouti : ${formatMeasuredUsd(costPer)}`;
   }
   if (costPer.kind === "unknown") return costPer.reason ?? "Ratio indisponible";
@@ -136,9 +143,11 @@ export function FinOpsConsumptionPanel() {
   const maxModel =
     summary?.modelBreakdown.reduce((m, d) => Math.max(m, d.costUsd ?? 0), 0) ?? 1;

+  const completedMetric = summary?.kpis.completedWorks;
   const completedDisplay =
-    summary?.kpis.completedWorks.kind === "known"
-      ? formatIntegerFr(summary.kpis.completedWorks.value)
+    completedMetric &&
+    (completedMetric.kind === "known" || completedMetric.kind === "partial")
+      ? formatIntegerFr(completedMetric.value)
       : "—";

   return (
@@ -246,7 +255,10 @@ export function FinOpsConsumptionPanel() {
                 <p className="finops-1306-kpi-label">Travaux aboutis</p>
                 <p className="finops-1306-kpi-value">{completedDisplay}</p>
                 <p className="finops-1306-kpi-sub">
-                  {kpiSubCompleted(summary.kpis.costPerCompletedWorkUsd)}
+                  {kpiSubCompleted(
+                    summary.kpis.completedWorks,
+                    summary.kpis.costPerCompletedWorkUsd,
+                  )}
                 </p>
               </article>
               <article className="finops-1306-kpi">
diff --git a/projects/sfia-studio-next/web/src/components/finops/FinOpsWorkDetailPanel.tsx b/projects/sfia-studio-next/web/src/components/finops/FinOpsWorkDetailPanel.tsx
index 071d3ef8..35251bf1 100644
--- a/projects/sfia-studio-next/web/src/components/finops/FinOpsWorkDetailPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/finops/FinOpsWorkDetailPanel.tsx
@@ -4,7 +4,7 @@ import Link from "next/link";
 import { useCallback, useEffect, useState } from "react";
 import type { FinOpsWorkDetailDto } from "@/domains/finops/usage-read-service";
 import {
-  displayModelShort,
+  finOpsShortModelLabel,
   formatIntegerFr,
   formatMeasuredTokens,
   formatMeasuredUsd,
@@ -113,7 +113,7 @@ export function FinOpsWorkDetailPanel({ workId }: { workId: string }) {
                 <p className="finops-1306-kpi-value">
                   {formatMeasuredTokens(detail.kpis.totalTokens)}
                 </p>
-                <p className="finops-1306-kpi-sub">Entrée + sortie</p>
+                <p className="finops-1306-kpi-sub">Entrée + sortie · cache inclus dans l&apos;entrée</p>
               </article>
               <article className="finops-1306-kpi">
                 <p className="finops-1306-kpi-label">Requêtes</p>
@@ -142,7 +142,7 @@ export function FinOpsWorkDetailPanel({ workId }: { workId: string }) {
                       <span>{String(s.segmentIndex + 1).padStart(2, "0")}</span>
                       <span>{s.label}</span>
                       <span>
-                        {displayModelShort(s.model) ?? "—"}
+                        {finOpsShortModelLabel(s.model) ?? "—"}
                         {s.effort ? ` · ${s.effort}` : ""}
                       </span>
                       <span>{formatMeasuredTokens(s.tokens)}</span>
@@ -174,7 +174,7 @@ export function FinOpsWorkDetailPanel({ workId }: { workId: string }) {
                       <span className="finops-1306-timeline-op">
                         {ev.operation?.trim() || "Observation fournisseur"}
                       </span>
-                      <span>{displayModelShort(ev.model) ?? "—"}</span>
+                      <span>{finOpsShortModelLabel(ev.model) ?? "—"}</span>
                       <span className="finops-1306-timeline-coverage">
                         {mapCostCoverageLabel(ev.costCoverage)}
                       </span>
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 99ee7f03..9d74b517 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -97,6 +97,17 @@ export type NoraGenerateInput = {
   /** E03/E04 FinOps attribution when running inside a cognitive work segment. */
   cognitiveWorkId?: string | null;
   segmentIndex?: number | null;
+  /**
+   * Identities already known for the usage row.
+   * Does not enable tools and does not decide the cognitive work.
+   */
+  usageIdentity?: {
+    ownerPilotId?: string | null;
+    projectId?: string | null;
+    preparationId?: string | null;
+    conversationId?: string | null;
+    turnId?: string | null;
+  };
   /**
    * D3 continuity snapshot owned by the cognitive conductor.
    * Bound into the provider frontier ALS; native chain stays OFF by default.
@@ -1313,6 +1324,7 @@ async function runLiveWithToolsInner(

       providerUsage = extractProviderUsageFromRunResult(result);
       // E03/E04 — durable FinOps observation (idempotent; never invents zeros).
+      const usageIdentity = input.usageIdentity;
       void recordNoraProviderUsageWithHttpCorrelation({
         runResult: result,
         status: "succeeded",
@@ -1321,10 +1333,19 @@ async function runLiveWithToolsInner(
         generationId,
         cognitiveWorkId: input.cognitiveWorkId ?? null,
         segmentIndex: input.segmentIndex ?? null,
-        conversationId: input.toolScope?.activityContext?.conversationId ?? null,
-        projectId: input.toolScope?.projectId ?? null,
-        preparationId: input.toolScope?.preparationId ?? null,
+        conversationId:
+          usageIdentity?.conversationId ??
+          input.toolScope?.activityContext?.conversationId ??
+          null,
+        turnId:
+          usageIdentity?.turnId ??
+          input.toolScope?.activityContext?.turnCommandId ??
+          null,
+        projectId: usageIdentity?.projectId ?? input.toolScope?.projectId ?? null,
+        preparationId:
+          usageIdentity?.preparationId ?? input.toolScope?.preparationId ?? null,
         ownerPilotId:
+          usageIdentity?.ownerPilotId ??
           input.toolScope?.pilotId ??
           input.toolScope?.activityContext?.ownerPilotId ??
           null,
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
index b6c45c86..562f533c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/run-nora-cognitive-turn.ts
@@ -33,6 +33,7 @@ import {
   type NoraGenerateInput,
   type NoraGenerateResult,
 } from "./nora-adapter";
+import { attributeConsumedProbeUsage } from "./usage-accounting";
 import { buildStudioContinuityFromWork } from "./provider-response-continuity";
 import { resolvePublicWebRegistry } from "./public-web-registry";
 import {
@@ -1025,6 +1026,13 @@ export async function runNoraCognitiveTurn(
       onProvisionalChunk: input.onProvisionalChunk,
       toolScope: input.toolScope,
       policyOverride: probePolicy,
+      usageIdentity: {
+        ownerPilotId: input.pilotId,
+        preparationId: input.preparationId,
+        projectId: input.projectId ?? null,
+        conversationId: input.conversationId ?? null,
+        turnId: input.turnCommandId ?? null,
+      },
     });
     segmentBox.reply = probeReply;
     attachment = await resolveCognitiveWorkAttachment({
@@ -1525,6 +1533,19 @@ export async function runNoraCognitiveTurn(
       if (probeReply && segmentIndex === 0 && !probeConsumed && !hasPriorAcquis) {
         probeConsumed = true;
         reply = probeReply;
+        try {
+          await attributeConsumedProbeUsage({
+            generationId: probeReply.generationId,
+            ownerPilotId: input.pilotId,
+            preparationId: input.preparationId,
+            projectId: input.projectId ?? null,
+            conversationId: input.conversationId ?? null,
+            turnId: input.turnCommandId ?? null,
+            cognitiveWorkId: work.id,
+          });
+        } catch {
+          /* a missed attribution must not cancel the consumed reply */
+        }
       } else {
         // FinOps / reallocation trace: use work-level ordinal (segmentCalls), not the
         // per-invocation local segmentIndex which resets to 0 on each product turn.
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts b/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
index 5efdbe21..a5019be5 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
@@ -1,6 +1,7 @@
 import { createHash, randomUUID } from "node:crypto";
+import { and, eq, isNull, sql } from "drizzle-orm";
 import { db } from "@/db/client";
-import { providerUsageObservations } from "@/db/schema";
+import { cognitiveWorks, providerUsageObservations } from "@/db/schema";
 import type { CognitiveModelId } from "./cognitive-resources/resource-catalog";
 import {
   LONG_CONTEXT_INPUT_THRESHOLD_TOKENS,
@@ -284,6 +285,167 @@ export type RecordProviderUsageObservationResult = {
   id: string;
 };

+export type ProbeUsageClaim = {
+  generationId: string;
+  ownerPilotId: string;
+  preparationId: string;
+  projectId?: string | null;
+  conversationId?: string | null;
+  turnId?: string | null;
+  cognitiveWorkId: string;
+};
+
+const probeClaims = new Map<string, ProbeUsageClaim>();
+const usageWriteInflight = new Map<string, Promise<void>>();
+
+function textOrEmpty(value: string | null | undefined): string {
+  return value?.trim() ?? "";
+}
+
+function claimMatchesObservation(
+  claim: ProbeUsageClaim,
+  input: Pick<
+    ProviderUsageObservationInput,
+    "ownerPilotId" | "preparationId" | "projectId" | "conversationId" | "turnId"
+  >,
+): boolean {
+  if (textOrEmpty(input.ownerPilotId) !== claim.ownerPilotId) return false;
+  if (textOrEmpty(input.preparationId) !== claim.preparationId) return false;
+  const obsProject = textOrEmpty(input.projectId);
+  const claimProject = textOrEmpty(claim.projectId);
+  if (obsProject && claimProject && obsProject !== claimProject) return false;
+  const obsTurn = textOrEmpty(input.turnId);
+  const claimTurn = textOrEmpty(claim.turnId);
+  if (obsTurn && claimTurn && obsTurn !== claimTurn) return false;
+  const obsConversation = textOrEmpty(input.conversationId);
+  const claimConversation = textOrEmpty(claim.conversationId);
+  if (obsConversation && claimConversation && obsConversation !== claimConversation) {
+    return false;
+  }
+  return true;
+}
+
+/** Apply a validated claim onto a row that is still unattributed. The idempotency key stays unchanged. */
+function claimedWorkId(input: ProviderUsageObservationInput): string | null {
+  if (textOrEmpty(input.cognitiveWorkId)) return null;
+  const generationId = textOrEmpty(input.generationId);
+  if (!generationId) return null;
+  const claim = probeClaims.get(generationId);
+  if (!claim || !claimMatchesObservation(claim, input)) return null;
+  return claim.cognitiveWorkId;
+}
+
+/**
+ * Attach an already recorded probe to the work that actually consumed it.
+ * Updates the existing rows. Does not insert a second observation.
+ */
+export async function attributeConsumedProbeUsage(
+  claim: ProbeUsageClaim,
+): Promise<{ updated: number; refused: boolean }> {
+  const generationId = textOrEmpty(claim.generationId);
+  const cognitiveWorkId = textOrEmpty(claim.cognitiveWorkId);
+  const ownerPilotId = textOrEmpty(claim.ownerPilotId);
+  const preparationId = textOrEmpty(claim.preparationId);
+  if (!generationId || !cognitiveWorkId || !ownerPilotId || !preparationId) {
+    return { updated: 0, refused: true };
+  }
+  const normalized: ProbeUsageClaim = {
+    generationId,
+    cognitiveWorkId,
+    ownerPilotId,
+    preparationId,
+    projectId: textOrEmpty(claim.projectId) || null,
+    conversationId: textOrEmpty(claim.conversationId) || null,
+    turnId: textOrEmpty(claim.turnId) || null,
+  };
+  const work = (
+    await db
+      .select({
+        id: cognitiveWorks.id,
+        ownerPilotId: cognitiveWorks.ownerPilotId,
+        preparationId: cognitiveWorks.preparationId,
+        projectId: cognitiveWorks.projectId,
+      })
+      .from(cognitiveWorks)
+      .where(eq(cognitiveWorks.id, cognitiveWorkId))
+      .limit(1)
+  )[0];
+  if (
+    !work ||
+    work.ownerPilotId !== ownerPilotId ||
+    work.preparationId !== preparationId ||
+    (normalized.projectId && work.projectId && normalized.projectId !== work.projectId)
+  ) {
+    return { updated: 0, refused: true };
+  }
+  probeClaims.set(generationId, normalized);
+  const inflight = usageWriteInflight.get(generationId);
+  if (inflight) await inflight;
+
+  const lane = process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN";
+  const found = await db
+    .select({
+      id: providerUsageObservations.id,
+      cognitiveWorkId: providerUsageObservations.cognitiveWorkId,
+      projectId: providerUsageObservations.projectId,
+      conversationId: providerUsageObservations.conversationId,
+      turnId: providerUsageObservations.turnId,
+    })
+    .from(providerUsageObservations)
+    .where(
+      and(
+        eq(providerUsageObservations.generationId, generationId),
+        eq(providerUsageObservations.ownerPilotId, ownerPilotId),
+        eq(providerUsageObservations.preparationId, preparationId),
+        sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
+      ),
+    );
+  if (found.length === 0) return { updated: 0, refused: false };
+
+  const conflicts = found.some((row) => {
+    if (row.cognitiveWorkId && row.cognitiveWorkId !== cognitiveWorkId) return true;
+    if (row.projectId && work.projectId && row.projectId !== work.projectId) return true;
+    if (
+      normalized.projectId &&
+      row.projectId &&
+      row.projectId !== normalized.projectId
+    ) {
+      return true;
+    }
+    if (normalized.turnId && row.turnId && row.turnId !== normalized.turnId) return true;
+    if (
+      normalized.conversationId &&
+      row.conversationId &&
+      row.conversationId !== normalized.conversationId
+    ) {
+      return true;
+    }
+    return false;
+  });
+  if (conflicts) {
+    probeClaims.delete(generationId);
+    return { updated: 0, refused: true };
+  }
+
+  let updated = 0;
+  for (const row of found) {
+    if (row.cognitiveWorkId) continue;
+    const written = await db
+      .update(providerUsageObservations)
+      .set({ cognitiveWorkId })
+      .where(
+        and(
+          eq(providerUsageObservations.id, row.id),
+          isNull(providerUsageObservations.cognitiveWorkId),
+        ),
+      )
+      .returning({ id: providerUsageObservations.id });
+    updated += written.length;
+  }
+  probeClaims.delete(generationId);
+  return { updated, refused: false };
+}
+
 /** Insert one durable observation; duplicate idempotency_key is a no-op. */
 export async function recordProviderUsageObservation(
   input: ProviderUsageObservationInput,
@@ -317,6 +479,7 @@ export async function recordProviderUsageObservation(

   const mergedLimits = [...new Set([...(input.limits ?? []), ...cost.limits])];
   const id = randomUUID();
+  const cognitiveWorkId = claimedWorkId(input) ?? input.cognitiveWorkId ?? null;

   const inserted = await db
     .insert(providerUsageObservations)
@@ -331,7 +494,7 @@ export async function recordProviderUsageObservation(
       preparationId: input.preparationId ?? null,
       conversationId: input.conversationId ?? null,
       turnId: input.turnId ?? null,
-      cognitiveWorkId: input.cognitiveWorkId ?? null,
+      cognitiveWorkId,
       segmentIndex: input.segmentIndex ?? null,
       generationId: input.generationId ?? null,
       operation: input.operation ?? null,
@@ -563,6 +726,25 @@ export async function recordNoraProviderUsageFromRunResult(
  */
 export async function recordNoraProviderUsageWithHttpCorrelation(
   input: NoraProviderUsageHookInput,
+): Promise<RecordProviderUsageObservationResult> {
+  const generationId = input.generationId?.trim() ?? "";
+  let release: () => void = () => {};
+  const gate = new Promise<void>((resolve) => {
+    release = resolve;
+  });
+  if (generationId) usageWriteInflight.set(generationId, gate);
+  try {
+    return await recordNoraProviderUsageWithHttpCorrelationBody(input);
+  } finally {
+    release();
+    if (generationId && usageWriteInflight.get(generationId) === gate) {
+      usageWriteInflight.delete(generationId);
+    }
+  }
+}
+
+async function recordNoraProviderUsageWithHttpCorrelationBody(
+  input: NoraProviderUsageHookInput,
 ): Promise<RecordProviderUsageObservationResult> {
   const httpAttempts = getHttpAttemptsSnapshot();
   const sdkAttemptId = input.attemptId?.trim() ?? "";
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
index b05402d6..2d18be8e 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
@@ -142,17 +142,118 @@ export function finOpsMeasureCoverageSubtext(kpis: {
   totalRequests: number;
   measuredRequests: number;
   estimationCompletenessPercent: MeasuredValue<number>;
+  measureCoveragePercent?: MeasuredValue<number>;
 }): string {
   if (kpis.totalRequests <= 0) return "Requêtes non recensées";
   const observed = `${formatIntegerFr(kpis.measuredRequests)} / ${formatIntegerFr(kpis.totalRequests)} requêtes recensées`;
+  const census =
+    kpis.measureCoveragePercent?.kind === "partial"
+      ? " · observations recensées, pas toutes les émissions"
+      : "";
   const est = kpis.estimationCompletenessPercent;
   if (est.kind === "partial" && est.value === 0) {
-    return `${observed} · coûts entièrement PARTIAL ou inconnus`;
+    return `${observed} · coûts entièrement PARTIAL ou inconnus${census}`;
   }
   if (est.kind === "known" || est.kind === "partial") {
-    return `${observed} · estimation connue ${est.value} %`;
+    return `${observed} · estimation connue ${est.value} %${census}`;
   }
-  return observed;
+  return `${observed}${census}`;
+}
+
+const OPEN_WORK_STATUSES = new Set(["OPEN", "RUNNING", "SUSPENDED"]);
+
+/**
+ * Completed-work count from observations actually linked in the same filter.
+ * Unattributed billable rows make the count partial. They do not invent a work.
+ */
+export function classifyObservedWorkCounts(input: {
+  statuses: string[];
+  unattributedBillable: number;
+  hasAnyObservation: boolean;
+}): { completed: MeasuredValue<number>; openCount: number } {
+  const openCount = input.statuses.filter((status) =>
+    OPEN_WORK_STATUSES.has(status.toUpperCase()),
+  ).length;
+  const complete = input.statuses.filter((status) => status.toUpperCase() === "COMPLETE").length;
+  if (input.unattributedBillable > 0 && input.statuses.length === 0) {
+    return {
+      completed: { kind: "unknown", reason: "Observations non attribuées" },
+      openCount,
+    };
+  }
+  if (input.unattributedBillable > 0) {
+    return {
+      completed: {
+        kind: "partial",
+        value: complete,
+        note: `Travaux aboutis observés : ${complete}. En cours : ${openCount}. Observations non attribuées : ${input.unattributedBillable}.`,
+      },
+      openCount,
+    };
+  }
+  if (input.statuses.length === 0) {
+    return {
+      completed: input.hasAnyObservation
+        ? { kind: "unknown", reason: "Travaux non liés" }
+        : { kind: "empty" },
+      openCount,
+    };
+  }
+  return { completed: { kind: "known", value: complete }, openCount };
+}
+
+/**
+ * Global estimated cost divided by observed completed works.
+ * This is not the average cost of those works alone.
+ * Hidden when the completed-work count is partial or unknown.
+ */
+export function costPerObservedCompletedWork(input: {
+  cost: MeasuredValue<number>;
+  completed: MeasuredValue<number>;
+}): MeasuredValue<number> {
+  if (input.completed.kind === "partial" || input.completed.kind === "unknown") {
+    return {
+      kind: "unknown",
+      reason: "Ratio non affiché : décompte des travaux incomplet",
+    };
+  }
+  if (input.completed.kind !== "known" || input.completed.value <= 0) {
+    if (input.completed.kind === "known") {
+      return { kind: "unknown", reason: "Aucun travail abouti observé" };
+    }
+    return { kind: "empty" };
+  }
+  if (input.cost.kind !== "known" && input.cost.kind !== "partial") {
+    return { kind: "empty" };
+  }
+  return {
+    kind: input.cost.kind === "partial" ? "partial" : "known",
+    value: input.cost.value / input.completed.value,
+    note: "Coût estimé global / travaux aboutis observés",
+  };
+}
+
+export function finOpsConfirmedValueLabel(input: {
+  applied?: string | null;
+  requested?: string | null;
+}): string | null {
+  const applied = input.applied?.trim() || "";
+  const requested = input.requested?.trim() || "";
+  if (applied && applied.toUpperCase() !== "UNVERIFIED") return applied;
+  if (requested) return `${requested} (demandé)`;
+  if (applied.toUpperCase() === "UNVERIFIED") return "non vérifié";
+  return null;
+}
+
+export function finOpsShortModelLabel(label: string | null | undefined): string | null {
+  if (!label) return null;
+  if (label === "non vérifié") return label;
+  const suffix = " (demandé)";
+  if (label.endsWith(suffix)) {
+    const short = displayModelShort(label.slice(0, -suffix.length)) ?? label;
+    return `${short}${suffix}`;
+  }
+  return displayModelShort(label);
 }

 export function sumBillableProviderRequests(
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
index c0cb101a..6e104383 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
@@ -9,11 +9,14 @@ import { StudioError } from "@/lib/http-errors";
 import {
   aggregateEstimatedCost,
   aggregateTokenTotal,
+  classifyObservedWorkCounts,
   computeEstimationCompletenessPercent,
   computeMeasureCoveragePercent,
+  costPerObservedCompletedWork,
   effectiveFinOpsProjectId,
   effectiveFinOpsProjectIdForWork,
   filterBillableFinOpsRows,
+  finOpsConfirmedValueLabel,
   finOpsModelDisplayLabel,
   isFinOpsWorkAttributionConflict,
   sumBillableProviderRequests,
@@ -368,43 +371,35 @@ export async function loadFinOpsSummary(
   const estimationCompletenessPercent =
     computeEstimationCompletenessPercent(rows);

+  const billable = filterBillableFinOpsRows(rows);
+  const unattributedBillable = billable.filter((r) => !r.cognitiveWorkId).length;
   const workIds = [
-    ...new Set(rows.map((r) => r.cognitiveWorkId).filter((id): id is string => Boolean(id))),
+    ...new Set(
+      billable.map((r) => r.cognitiveWorkId).filter((id): id is string => Boolean(id)),
+    ),
   ];
-  let completedWorks: MeasuredValue<number> = { kind: "empty" };
-  if (workIds.length > 0) {
-    const works = await db
-      .select({ id: cognitiveWorks.id, status: cognitiveWorks.status })
-      .from(cognitiveWorks)
-      .where(
-        and(
-          inArray(cognitiveWorks.id, workIds),
-          eq(cognitiveWorks.ownerPilotId, pilotId),
-        ),
-      );
-    const completeCount = works.filter((w) => w.status === "COMPLETE").length;
-    completedWorks =
-      completeCount > 0
-        ? { kind: "known", value: completeCount }
-        : { kind: "known", value: 0 };
-  } else if (rows.length > 0) {
-    completedWorks = { kind: "unknown", reason: "Travaux non liés" };
-  }
-
-  let costPerCompletedWorkUsd: MeasuredValue<number> = { kind: "empty" };
-  if (
-    completedWorks.kind === "known" &&
-    completedWorks.value > 0 &&
-    (estimatedCostUsd.kind === "known" || estimatedCostUsd.kind === "partial")
-  ) {
-    costPerCompletedWorkUsd = {
-      kind: estimatedCostUsd.kind === "partial" ? "partial" : "known",
-      value: estimatedCostUsd.value / completedWorks.value,
-      note: estimatedCostUsd.kind === "partial" ? estimatedCostUsd.note : undefined,
-    };
-  } else if (rows.length > 0 && completedWorks.kind === "known" && completedWorks.value === 0) {
-    costPerCompletedWorkUsd = { kind: "unknown", reason: "Aucun travail abouti" };
-  }
+  const linkedWorks =
+    workIds.length === 0
+      ? []
+      : await db
+          .select({ id: cognitiveWorks.id, status: cognitiveWorks.status })
+          .from(cognitiveWorks)
+          .where(
+            and(
+              inArray(cognitiveWorks.id, workIds),
+              eq(cognitiveWorks.ownerPilotId, pilotId),
+            ),
+          );
+  const observedWorks = classifyObservedWorkCounts({
+    statuses: linkedWorks.map((work) => work.status),
+    unattributedBillable,
+    hasAnyObservation: rows.length > 0,
+  });
+  const completedWorks = observedWorks.completed;
+  const costPerCompletedWorkUsd = costPerObservedCompletedWork({
+    cost: estimatedCostUsd,
+    completed: completedWorks,
+  });

   const totalRequests = sumBillableProviderRequests(rows);
   const measuredRequests = sumBillableProviderRequests(rows, {
@@ -901,8 +896,14 @@ export async function loadFinOpsWorkDetail(
       return {
         segmentIndex,
         label: head?.operation?.trim() || `Segment ${String(segmentIndex + 1).padStart(2, "0")}`,
-        model: head?.modelApplied ?? head?.modelRequested ?? null,
-        effort: head?.effortApplied ?? head?.effortRequested ?? null,
+        model: finOpsModelDisplayLabel({
+          modelApplied: head?.modelApplied,
+          modelRequested: head?.modelRequested,
+        }),
+        effort: finOpsConfirmedValueLabel({
+          applied: head?.effortApplied,
+          requested: head?.effortRequested,
+        }),
         tokens,
         estimatedCostUsd: aggregateEstimatedCost(slice),
       };
diff --git a/projects/sfia-studio-next/web/tests/integration/finops-probe-attribution.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/finops-probe-attribution.pg.test.ts
new file mode 100644
index 00000000..ae9be152
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/finops-probe-attribution.pg.test.ts
@@ -0,0 +1,423 @@
+/**
+ * Probe consumption is attached to the work that consumed it.
+ * The existing observation is updated. It is not inserted again.
+ */
+import { afterAll, beforeAll, describe, expect, it } from "vitest";
+import { config } from "dotenv";
+config({ path: ".env.local" });
+
+import { eq } from "drizzle-orm";
+import { db, sql as pgSql } from "@/db/client";
+import {
+  cognitiveWorks,
+  pilots,
+  preparations,
+  projects,
+  providerUsageObservations,
+} from "@/db/schema";
+import { newId } from "@/lib/ids";
+import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
+import { createProjectCommand } from "@/domains/preparation/create-project";
+import {
+  attributeConsumedProbeUsage,
+  buildIdempotencyKey,
+  recordNoraProviderUsageWithHttpCorrelation,
+  recordProviderUsageObservation,
+} from "@/domains/conversation/usage-accounting";
+import { loadFinOpsSummary, loadFinOpsWorks } from "@/domains/finops/usage-read-service";
+
+async function seedPilot() {
+  const pilotId = newId("pilot");
+  await db.insert(pilots).values({
+    id: pilotId,
+    displayName: "finops-probe",
+    githubUserId: `gh-${pilotId}`,
+  });
+  const prep = await openOrCreatePreparation(pilotId);
+  return { pilotId, preparationId: prep.id };
+}
+
+describe("FinOps probe attribution (PG)", () => {
+  let pilotId = "";
+  let preparationId = "";
+  let projectA = "";
+  let projectB = "";
+  let workComplete = "";
+  let workOpen = "";
+  let workOther = "";
+  const observationIds: string[] = [];
+
+  beforeAll(async () => {
+    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
+    process.env.STUDIO_LANE = "DEV";
+    const seeded = await seedPilot();
+    pilotId = seeded.pilotId;
+    preparationId = seeded.preparationId;
+    const projectName = `finops-${newId("p").slice(-6)}`;
+    await updatePreview(pilotId, preparationId, projectName, "probe");
+    const refreshed = (
+      await db.select().from(preparations).where(eq(preparations.id, preparationId))
+    )[0]!;
+    const created = await createProjectCommand({
+      pilotId,
+      preparationId,
+      expectedCreationRevision: refreshed.creationRevision,
+      projectName,
+      previewSummary: "probe",
+      idempotencyKey: newId("idem"),
+    });
+    if (created.status !== "CREATED" || !created.projectId) {
+      throw new Error(`project seed failed: ${created.status}`);
+    }
+    projectA = created.projectId;
+    projectB = newId("proj");
+    await db.insert(projects).values({
+      id: projectB,
+      ownerPilotId: pilotId,
+      name: `finops-b-${projectB.slice(-6)}`,
+    });
+    workComplete = newId("cgw");
+    workOpen = newId("cgw");
+    workOther = newId("cgw");
+    await db.insert(cognitiveWorks).values([
+      {
+        id: workComplete,
+        ownerPilotId: pilotId,
+        preparationId,
+        projectId: projectA,
+        status: "COMPLETE",
+        objective: "travail abouti",
+        revision: 1,
+      },
+      {
+        id: workOpen,
+        ownerPilotId: pilotId,
+        preparationId,
+        projectId: projectA,
+        status: "OPEN",
+        interruptCause: "AWAIT_PILOT",
+        objective: "attente du pilote",
+        revision: 1,
+      },
+      {
+        id: workOther,
+        ownerPilotId: pilotId,
+        preparationId,
+        projectId: projectB,
+        status: "COMPLETE",
+        objective: "autre projet",
+        revision: 1,
+      },
+    ]);
+  });
+
+  afterAll(async () => {
+    if (observationIds.length) {
+      await pgSql`DELETE FROM provider_usage_observations WHERE id = ANY(${observationIds})`;
+    }
+    await pgSql`DELETE FROM cognitive_works WHERE id = ANY(${[workComplete, workOpen, workOther]})`;
+    if (projectB) await pgSql`DELETE FROM projects WHERE id = ${projectB}`;
+  });
+
+  async function remember(generationId: string) {
+    const rows = await db
+      .select({ id: providerUsageObservations.id })
+      .from(providerUsageObservations)
+      .where(eq(providerUsageObservations.generationId, generationId));
+    for (const row of rows) observationIds.push(row.id);
+    return rows.length;
+  }
+
+  it("attaches a recorded probe without duplicating tokens or cost", async () => {
+    const generationId = newId("gen");
+    const key = buildIdempotencyKey({
+      granularity: "REQUEST",
+      projectId: projectA,
+      preparationId,
+      cognitiveWorkId: null,
+      operation: "nora.generate_reply",
+      generationId,
+      attemptId: "attempt-probe",
+      callOrdinal: 0,
+    });
+    const first = await recordProviderUsageObservation({
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      generationId,
+      operation: "nora.generate_reply",
+      attemptId: "attempt-probe",
+      cognitiveWorkId: null,
+      modelRequested: "gpt-test",
+      modelApplied: "UNVERIFIED",
+      effortRequested: "medium",
+      effortApplied: "UNVERIFIED",
+      inputTokens: 100,
+      outputTokens: 20,
+      cachedInputTokens: 5,
+      reasoningTokens: 7,
+      totalTokens: 120,
+      providerRequests: 1,
+      estimatedCostUsd: 0.42,
+      costCoverage: "PARTIAL",
+      status: "succeeded",
+      granularity: "REQUEST",
+      idempotencyKey: key,
+      lane: "DEV",
+    });
+    expect(first.inserted).toBe(true);
+    const companion = await recordProviderUsageObservation({
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      generationId,
+      operation: "nora.generate_reply",
+      attemptId: "http-1",
+      cognitiveWorkId: null,
+      inputTokens: null,
+      outputTokens: null,
+      totalTokens: null,
+      providerRequests: null,
+      estimatedCostUsd: null,
+      costCoverage: "PARTIAL",
+      status: "succeeded",
+      granularity: "REQUEST",
+      idempotencyKey: `${key}:http`,
+      limits: ["HTTP_ATTEMPT_CORRELATION_ONLY"],
+      lane: "DEV",
+    });
+    expect(companion.inserted).toBe(true);
+    const before = await remember(generationId);
+    expect(before).toBe(2);
+
+    const attached = await attributeConsumedProbeUsage({
+      generationId,
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      cognitiveWorkId: workComplete,
+    });
+    expect(attached.refused).toBe(false);
+    expect(attached.updated).toBe(2);
+
+    const again = await attributeConsumedProbeUsage({
+      generationId,
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      cognitiveWorkId: workComplete,
+    });
+    expect(again).toEqual({ updated: 0, refused: false });
+
+    const replay = await recordProviderUsageObservation({
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      generationId,
+      operation: "nora.generate_reply",
+      attemptId: "attempt-probe",
+      cognitiveWorkId: workComplete,
+      totalTokens: 999,
+      estimatedCostUsd: 9,
+      costCoverage: "KNOWN",
+      status: "succeeded",
+      granularity: "REQUEST",
+      idempotencyKey: key,
+      lane: "DEV",
+    });
+    expect(replay.inserted).toBe(false);
+
+    const rows = await db
+      .select()
+      .from(providerUsageObservations)
+      .where(eq(providerUsageObservations.generationId, generationId));
+    expect(rows).toHaveLength(2);
+    expect(rows.every((row) => row.cognitiveWorkId === workComplete)).toBe(true);
+    const billable = rows.find((row) => row.attemptId === "attempt-probe")!;
+    expect(billable.totalTokens).toBe(120);
+    expect(Number(billable.estimatedCostUsd)).toBeCloseTo(0.42);
+    expect(billable.cachedInputTokens).toBe(5);
+    expect(billable.idempotencyKey).toBe(key);
+    const http = rows.find((row) => row.attemptId === "http-1")!;
+    expect(http.providerRequests).toBeNull();
+    expect(http.totalTokens).toBeNull();
+  });
+
+  it("keeps an in-flight write and its later attachment as one observation", async () => {
+    const generationId = newId("gen");
+    const writing = recordNoraProviderUsageWithHttpCorrelation({
+      runResult: {
+        state: {
+          usage: { inputTokens: 30, outputTokens: 4, totalTokens: 34, requests: 1 },
+        },
+      },
+      status: "succeeded",
+      operation: "nora.generate_reply",
+      attemptId: "attempt-race",
+      generationId,
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      cognitiveWorkId: null,
+      modelRequested: "gpt-test",
+      modelApplied: "UNVERIFIED",
+      effortRequested: "medium",
+      effortApplied: "UNVERIFIED",
+    });
+    const attaching = attributeConsumedProbeUsage({
+      generationId,
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      cognitiveWorkId: workComplete,
+    });
+    const [, attached] = await Promise.all([writing, attaching]);
+    expect(attached.refused).toBe(false);
+    const count = await remember(generationId);
+    expect(count).toBe(1);
+    const row = (
+      await db
+        .select()
+        .from(providerUsageObservations)
+        .where(eq(providerUsageObservations.generationId, generationId))
+    )[0]!;
+    expect(row.cognitiveWorkId).toBe(workComplete);
+    expect(row.totalTokens).toBe(34);
+  });
+
+  it("refuses a cross-project or already attributed observation", async () => {
+    const foreignGeneration = newId("gen");
+    await recordProviderUsageObservation({
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      generationId: foreignGeneration,
+      operation: "nora.generate_reply",
+      cognitiveWorkId: null,
+      totalTokens: 8,
+      estimatedCostUsd: 0.01,
+      costCoverage: "KNOWN",
+      status: "succeeded",
+      granularity: "REQUEST",
+      idempotencyKey: `foreign-${foreignGeneration}`,
+      lane: "DEV",
+    });
+    await remember(foreignGeneration);
+    const foreign = await attributeConsumedProbeUsage({
+      generationId: foreignGeneration,
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      cognitiveWorkId: workOther,
+    });
+    expect(foreign).toEqual({ updated: 0, refused: true });
+
+    const takenGeneration = newId("gen");
+    await recordProviderUsageObservation({
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      generationId: takenGeneration,
+      operation: "nora.generate_reply",
+      cognitiveWorkId: workOpen,
+      modelRequested: "gpt-test",
+      modelApplied: "UNVERIFIED",
+      totalTokens: 9,
+      estimatedCostUsd: 0.02,
+      costCoverage: "KNOWN",
+      status: "succeeded",
+      granularity: "REQUEST",
+      idempotencyKey: `taken-${takenGeneration}`,
+      lane: "DEV",
+    });
+    await remember(takenGeneration);
+    const taken = await attributeConsumedProbeUsage({
+      generationId: takenGeneration,
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      cognitiveWorkId: workComplete,
+    });
+    expect(taken).toEqual({ updated: 0, refused: true });
+    const still = (
+      await db
+        .select({ workId: providerUsageObservations.cognitiveWorkId })
+        .from(providerUsageObservations)
+        .where(eq(providerUsageObservations.generationId, takenGeneration))
+    )[0]!;
+    expect(still.workId).toBe(workOpen);
+
+    const otherPilot = newId("pilot");
+    await db.insert(pilots).values({
+      id: otherPilot,
+      displayName: "other-probe",
+      githubUserId: `gh-${otherPilot}`,
+    });
+    const denied = await attributeConsumedProbeUsage({
+      generationId: takenGeneration,
+      ownerPilotId: otherPilot,
+      preparationId,
+      projectId: projectA,
+      cognitiveWorkId: workComplete,
+    });
+    expect(denied.refused).toBe(true);
+    expect(denied.updated).toBe(0);
+  });
+
+  it("reports linked, open and unattributed observations without a false ratio", async () => {
+    const loose = newId("gen");
+    await recordProviderUsageObservation({
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      generationId: loose,
+      operation: "nora.generate_reply",
+      cognitiveWorkId: null,
+      modelRequested: "gpt-test",
+      modelApplied: "UNVERIFIED",
+      totalTokens: 11,
+      providerRequests: 1,
+      estimatedCostUsd: 0.03,
+      costCoverage: "KNOWN",
+      status: "succeeded",
+      granularity: "REQUEST",
+      idempotencyKey: `loose-${loose}`,
+      lane: "DEV",
+    });
+    await remember(loose);
+
+    const summary = await loadFinOpsSummary(pilotId, {
+      period: "30",
+      projectId: projectA,
+      model: "gpt-test",
+    });
+    const works = await loadFinOpsWorks(pilotId, {
+      period: "30",
+      projectId: projectA,
+      model: "gpt-test",
+    });
+    expect(summary.kpis.completedWorks.kind).toBe("partial");
+    if (summary.kpis.completedWorks.kind === "partial") {
+      expect(summary.kpis.completedWorks.value).toBeGreaterThanOrEqual(1);
+      expect(summary.kpis.completedWorks.note).toContain("non attribuées");
+      expect(summary.kpis.completedWorks.note).toContain("En cours");
+    }
+    expect(summary.kpis.costPerCompletedWorkUsd.kind).toBe("unknown");
+    expect(works.items.some((item) => item.cognitiveWorkId === workComplete)).toBe(true);
+    expect(works.items.some((item) => item.cognitiveWorkId === workOpen)).toBe(true);
+    expect(works.items.some((item) => item.cognitiveWorkId === workOther)).toBe(false);
+
+    const otherModel = await loadFinOpsSummary(pilotId, {
+      period: "30",
+      projectId: projectA,
+      model: "model-absent-from-this-fixture",
+    });
+    const otherWorks = await loadFinOpsWorks(pilotId, {
+      period: "30",
+      projectId: projectA,
+      model: "model-absent-from-this-fixture",
+    });
+    expect(otherModel.hasObservations).toBe(false);
+    expect(otherWorks.items).toHaveLength(0);
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
index 9926704a..2a87488a 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
@@ -1,6 +1,10 @@
 import { describe, expect, it } from "vitest";
 import {
   aggregateEstimatedCost,
+  classifyObservedWorkCounts,
+  costPerObservedCompletedWork,
+  finOpsConfirmedValueLabel,
+  finOpsShortModelLabel,
   aggregateTokenTotal,
   computeEstimationCompletenessPercent,
   computeMeasureCoveragePercent,
@@ -57,6 +61,59 @@ describe("ML5 E06 — FinOps usage projection", () => {
     expect(tokenTotalForRow({ totalTokens: 5, inputTokens: 1, outputTokens: 1 })).toBe(5);
     expect(tokenTotalForRow({ totalTokens: null, inputTokens: 3, outputTokens: 4 })).toBe(7);
     expect(tokenTotalForRow({ totalTokens: null, inputTokens: 3, outputTokens: null })).toBeNull();
+    expect(
+      tokenTotalForRow({
+        totalTokens: 12,
+        inputTokens: 10,
+        outputTokens: 4,
+      }),
+    ).toBe(12);
+  });
+
+  it("keeps an unattributed observation from turning the completed count into a known zero", () => {
+    const mixed = classifyObservedWorkCounts({
+      statuses: ["COMPLETE", "OPEN"],
+      unattributedBillable: 3,
+      hasAnyObservation: true,
+    });
+    expect(mixed.completed.kind).toBe("partial");
+    if (mixed.completed.kind === "partial") {
+      expect(mixed.completed.value).toBe(1);
+      expect(mixed.completed.note).toContain("Observations non attribuées : 3");
+      expect(mixed.completed.note).toContain("En cours : 1");
+    }
+    expect(
+      costPerObservedCompletedWork({
+        cost: { kind: "known", value: 1.2 },
+        completed: mixed.completed,
+      }).kind,
+    ).toBe("unknown");
+  });
+
+  it("keeps the global ratio only when every billable observation is linked", () => {
+    const completed = classifyObservedWorkCounts({
+      statuses: ["COMPLETE", "COMPLETE"],
+      unattributedBillable: 0,
+      hasAnyObservation: true,
+    }).completed;
+    const ratio = costPerObservedCompletedWork({
+      cost: { kind: "partial", value: 2 },
+      completed,
+    });
+    expect(completed).toEqual({ kind: "known", value: 2 });
+    expect(ratio.kind).toBe("partial");
+    if (ratio.kind === "partial") {
+      expect(ratio.value).toBe(1);
+      expect(ratio.note).toContain("global");
+    }
+  });
+
+  it("does not present a requested model or effort as confirmed", () => {
+    expect(
+      finOpsConfirmedValueLabel({ applied: "UNVERIFIED", requested: "medium" }),
+    ).toBe("medium (demandé)");
+    expect(finOpsShortModelLabel("gpt-6.1-terra (demandé)")).toBe("Terra (demandé)");
+    expect(finOpsShortModelLabel("non vérifié")).toBe("non vérifié");
   });

   it("computeMeasureCoveragePercent handles empty", () => {
```

## 11. Verdict

READY WITH RESERVES

Les trois corrections sont en place et couvertes par des tests ciblés. Les parcours naturels restent reportés. Aucune acceptation produit, aucune promotion, aucune CI.
