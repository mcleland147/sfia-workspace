# Review Pack — Mandat 5, fiabilité des projections de consommation

- date_heure: 2026-11-28 18:44 CET
- cycle: 08 Delivery / implémentation
- profil: Standard
- typologie: EVOL
- review_pack: FULL
- mono_cycle: oui
- autorisation: Morris, 28/11/2026, trois défauts résiduels FinOps seulement
- verdict_cursor: READY WITH RESERVES

## Autorisation

Morris autorise exclusivement le nettoyage des claims de rattachement, la cohérence entre les indicateurs et la liste des travaux, et la fiabilité des filtres. Aucun nouveau chantier FinOps. Le commit M4 fff5ebd9 est conservé et n'est pas poussé. Aucun push produit, aucune PR, aucun merge, aucune release, aucune migration, aucun appel fournisseur.

## Pré-check Git

- dépôt: mcleland147/sfia-workspace
- branche: sfia/next-ml5-integrated-delivery-20261123
- HEAD initial: fff5ebd9db873c186b71469c4d6957f18831c3cb
- parent initial: 87a25c5eed65a1b30c6f608dcccb57f0c5992eff
- tree initial: ddc407cf76675b9cd542391010900ce67aac8865
- origin de la branche au départ et à l'arrivée: 87a25c5eed65a1b30c6f608dcccb57f0c5992eff
- origin/main et merge-base: 997897fd7cf914771e7d08e8030dc7123fab7d25
- avance initiale: 1 (M4 local). Avance finale: 2. Retard: 0
- HEAD final: 8acc05b7db41a4db3bd5fceff4c238b0cb89ccbd
- parent final: fff5ebd9db873c186b71469c4d6957f18831c3cb
- tree final: 8c072c89322f5f2f0deb9749181160c247bd36ee
- message: fix(studio-next): harden consumption attribution and projections
- fichiers non suivis laissés hors commit: .tmp-sfia-review/ et projects/sfia-studio-next/web/.tmp-sfia-review/
- worktree produit inchangé de branche. RECETTE PID 58965 non arrêtée.

## Sources lues

- method/sfia-fast-track déjà contractuelle pour ce cycle v2.6. Le suivi opérationnel a été lu depuis Git, commit fe3defb8, sans modification: §19, §20, §26.1 (repéré), §34.3, §35.
- §20.3 décrit les trois dettes: claim sans nettoyage, liste qui groupe les companions, réponse de filtre périmée et liste en erreur présentée comme vide.
- §35 confirme M4 ACCEPTED WITH RESERVES et le GO M5 borné sur le HEAD local fff5ebd9.
- Code lu: usage-accounting.ts, usage-read-service.ts loadFinOpsWorks, usage-projection.ts filterBillableFinOpsRows et agrégats, FinOpsConsumptionPanel.tsx, tests d'attribution existants.
- As-built S4 et delivery-history. Politique d'environnement et de version rappelées par le mandat: NO RELEASE, schéma 029 inchangé, product-version.ts non modifié.
- Handoff M4 90a10a7c, blob 6bb7b972, confirmé comme base distante avant publication.

## Qualification

Les trois défauts étaient présents sur fff5ebd9. M4 ne touche pas FinOps. Aucun n'était déjà corrigé. Le lot reste local: pas de nouvelle persistance, pas de changement de tarif, de jeton, de clé d'idempotence, de conducteur, ni d'état métier.

## Constat initial

A. attributeConsumedProbeUsage pose probeClaims puis, si aucune observation n'est trouvée après l'attente de usageWriteInflight, retourne sans retirer la claim. Une exception après la pose laisse aussi l'entrée. Les refus d'appartenance surviennent avant la pose.

B. loadFinOpsSummary filtre déjà par filterBillableFinOpsRows. loadFinOpsWorks groupait toute observation portant un cognitiveWorkId, y compris un companion HTTP_ATTEMPT_CORRELATION_ONLY. Un travail uniquement companion pouvait apparaître dans la liste sans entrer dans les indicateurs.

C. refresh lançait summary et works en parallèle sans numéro de requête. Une réponse tardive pouvait écraser le filtre courant. Une erreur de la liste faisait setWorks([]) et la phrase « Aucun travail cognitif lié sur la période. »

## Corrections

A. La claim n'est pas une autorité durable. Après l'attente de l'écriture déjà en cours, une écriture apparue pendant la lecture est attendue une fois de plus. Si des lignes existent, le rattachement ou le refus de conflit retire la claim immédiatement. Si aucune ligne n'existe, ou si la lecture échoue après la pose, la claim reste pendant PROBE_CLAIM_GRACE_MS = 500, uniquement pour qu'une écriture qui démarre dans cet intervalle puisse encore la lire. Le timer n'efface pas la claim tant qu'une écriture de la même génération est en cours, et il n'efface pas une claim remplacée. Aucune observation n'est inventée.

B. loadFinOpsWorks ne groupe plus que filterBillableFinOpsRows. Un travail companion-only sort de la liste. Un travail mixte reste une fois, agrégé sur les lignes facturables. Les lignes companions restent en base. Une ligne facturable dont le coût est UNKNOWN reste dans la liste avec un coût unknown, pas un zéro.

C. Un compteur de requête ignore la réponse, l'erreur et la fin de chargement d'un filtre plus ancien. L'échec de la liste pose un message explicite et le bouton Réessayer, sans la phrase de liste vide. Une liste réellement vide conserve cette phrase. La synthèse disponible reste affichée quand seule la liste échoue. Le bouton reprend le style de lien existant.

## Fichiers

Créations: aucune.

Modifications, 8 fichiers, +464 / -67:

- projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
- projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
- projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
- projects/sfia-studio-next/web/src/components/finops/finops-consumption.css
- projects/sfia-studio-next/web/tests/integration/finops-probe-attribution.pg.test.ts
- projects/sfia-studio-next/web/tests/unit/ml5-finops-consumption-panel-compare.test.ts
- projects/sfia-studio-next/construction/as-built-ml5-cognitive-foundation-conformance-20261126.md
- projects/sfia-studio-next/construction/delivery-history.md

## Preuves

A. PostgreSQL isolé sfia_next_e2e, tests/integration/finops-probe-attribution.pg.test.ts, 7 tests, exit 0.

- rattachement nominal: 2 lignes, rejeu inserted false, tokens 120, coût 0,42, clé inchangée
- course nominale: une observation, 34 tokens, work id du travail consommateur
- refus inter-projet, rattachement déjà pris, autre Pilote
- absence d'observation: claim présente puis absente après 500 ms + 250 ms
- écriture démarrée dans la grâce: work id posé à l'insertion, tokens 17, coût 0,07, clé conservée, rejeu inserted false, claim retirée ensuite
- exception après la pose: claim présente puis retirée, aucune ligne créée

B. Même fichier, même base. Travail companion-only absent de la liste. Travail mixte présent une fois, tokens known 40, coût partial 0,11 (modèle UNVERIFIED, comportement déjà existant). Travail au coût UNKNOWN présent, tokens known 10, coût unknown. Les deux lignes du travail mixte restent en base. e2-final-finops-attribution.pg.test.ts: 3 tests, exit 0.

C. Navigateur headless contre Next Turbopack 127.0.0.1:3101, base sfia_next_e2e, réponses HTTP contrôlées. Ce ne sont pas des consommations facturées.

- filtre 7 lent puis filtre 90 rapide: FILTRE_90 reste, FILTRE_7 absent, période 90
- erreur tardive du filtre 7: FILTRE_APRES_ERREUR reste, aucun finops-error
- synthèse 200 et liste 500: message « La liste des travaux n’a pas pu être chargée. », KPI présent, phrase de liste vide absente
- liste réellement vide: « Aucun travail cognitif lié sur la période. », alerte de liste absente
- Réessayer après erreur: FILTRE_RETRY affiché, alerte retirée

Contrôles communs:

- git diff --check: exit 0
- eslint ciblé sur les cinq fichiers TypeScript touchés: exit 0
- tsc --noEmit: exit 2, 16 error TS historiques, aucune dans les fichiers du delta
- unitaires: ml5-finops-usage-projection 22, ml5-e03-usage-accounting 14, ml5-a6-finops-read-attribution 3, ml5-finops-consumption-panel-compare 3, tous exit 0
- build de production du SHA 8acc05b7: exit 0

## Préservation

Les tests d'insertion et de rejeu comparent la clé, les tokens et le coût avant et après rattachement. Le companion n'est pas supprimé. Le ratio coût global / travaux aboutis n'est pas redéfini. Aucun tarif, aucune migration, aucun recalcul historique.

## Identité DEV

- URL: http://127.0.0.1:3100
- PID: 36204
- BUILD_ID: yt7pArlgBRNZApeOhgE7t
- lane: DEV
- PostgreSQL: 127.0.0.1:5433
- base: sfia_next_dev
- schéma: 029, colonne preparations.title présente, lecture seule
- smoke: login 200, /settings/consumption 200, /portfolio 200
- push produit: non fait
- CI distante: non déclenchée
- PR: aucune
- RECETTE: http://127.0.0.1:3200 PID 58965, login 200. Le compte DEV n'authentifie pas la base RECETTE; le processus n'a pas été remplacé et aucune requête d'écriture n'y a été envoyée.
- rollback: le BUILD_ID précédemment servi 6rtSk-97s2iQjXoeXlRby n'était plus sur disque, le serveur de preuve ayant réutilisé .next. Un build neuf du commit fff5ebd9 est conservé dans /tmp/sfia-next-dev-build-fff5ebd9, BUILD_ID AxLEQDNKvLNIvbVrZthpD. Même source, identifiant de build différent.

## Fake / Real

Les réponses du navigateur et les observations PostgreSQL de test sont des fixtures. La frontière réelle reste l'écriture fournisseur, le rattachement et la projection. LIVE et mesure fournisseur: OUT. DETERMINISTIC PROVEN n'est pas une consommation facturée. F2 NOT PROVEN: aucune mesure appariée à une maquette. FIN-REC-01 et FIN-REC-02 restent ouverts.

## Réserves

- la grâce de 500 ms borne la mémoire; une écriture qui démarre après ce délai n'hérite plus de la claim
- la non-réattribution concurrente contradictoire sur plusieurs lignes reste la limite déjà ouverte en FIN-REC-01
- F2 non mesuré
- réserves M1 à M4, 17 MP, 17 contrôles RECETTE, MP14, MP16, L6 DEFERRED, Capacité 2 OUT et T08 DEFERRED transportés
- mandat 6 non engagé

## Review Handoff

- décision: required
- justification: revue indépendante ChatGPT
- mode: publish-in-cycle
- push L3: borné au fichier canonique sfia-review-handoff/latest-chatgpt-review.md
- source: .tmp-sfia-review/chatgpt-review.md
- branche: sfia/review-handoff
- remote avant: 90a10a7c512f59bdf796668912d7c46e5d80d26b
- message: docs(review-handoff): publish FinOps residual fixes review

## Verdict

READY WITH RESERVES

Diff utile complet:

```
diff --git a/projects/sfia-studio-next/construction/as-built-ml5-cognitive-foundation-conformance-20261126.md b/projects/sfia-studio-next/construction/as-built-ml5-cognitive-foundation-conformance-20261126.md
index 02a3da27..8b6876a0 100644
--- a/projects/sfia-studio-next/construction/as-built-ml5-cognitive-foundation-conformance-20261126.md
+++ b/projects/sfia-studio-next/construction/as-built-ml5-cognitive-foundation-conformance-20261126.md
@@ -29,6 +29,7 @@ Classe : **NO RELEASE** · Lane : **DEV** · Cutover RECETTE : **NON APPLIQUÉ**
 - Couverture / complétude restent relatives à l'ensemble d'**observations recensées**.
 - Sans recensement d'émissions HTTP indépendant → `kind: "partial"` (pas de 100 % « known » trompeur).
 - Source unique : `provider_usage_observations`.
+- 2026-11-28, mandat 5 : la liste des travaux utilise la même population facturable que les indicateurs (`filterBillableFinOpsRows`). Une observation companion reste persistée et ne crée pas un travail facturable. Un claim de rattachement n'est plus conservé sans limite : il suit l'écriture en cours, puis une grâce de 500 ms, puis il est retiré. L'écran Consommation n'applique que la réponse du dernier filtre et distingue une liste vide d'un échec de chargement.

 ## S5 — Autorité WEB D6

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 9398a2a2..407f0b36 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,15 @@
+## delivery_id: DELIV-2026-11-28-ML5-FINOPS-PROJECTION-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — fiabilité des projections de consommation
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `fff5ebd9db873c186b71469c4d6957f18831c3cb`
+- **commit**: `fix(studio-next): harden consumption attribution and projections`
+- **schema_revision**: inchangé, `029`
+- **scope**: cycle de vie borné des claims de rattachement ; liste des travaux alignée sur les observations facturables ; réponses de filtre périmées ignorées ; erreur de liste distincte d'une liste vide
+- **classe**: NO RELEASE · compatible corrective · LIVE NOT RUN · CI NOT RUN · push produit non inclus
+- **reserves**: FIN-REC-01 et FIN-REC-02 ouverts ; F2 non mesuré ; grâce mémoire de 500 ms, pas un registre durable ; réserves des mandats 1 à 4 transportées
+
 ## delivery_id: DELIV-2026-11-28-ML5-SHARED-COMPOSER-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx b/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
index 39313626..0c4c96b9 100644
--- a/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
+++ b/projects/sfia-studio-next/web/src/components/finops/FinOpsConsumptionPanel.tsx
@@ -1,7 +1,7 @@
 "use client";

 import Link from "next/link";
-import { useCallback, useEffect, useMemo, useState } from "react";
+import { useCallback, useEffect, useMemo, useRef, useState } from "react";
 import type {
   FinOpsProviderReconciliationDto,
   FinOpsSummaryDto,
@@ -87,9 +87,11 @@ export function FinOpsConsumptionPanel() {
   const [model, setModel] = useState("");
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);
+  const [worksError, setWorksError] = useState<string | null>(null);
   const [summary, setSummary] = useState<FinOpsSummaryDto | null>(null);
   const [filterOptions, setFilterOptions] = useState<FilterOptions | null>(null);
   const [works, setWorks] = useState<FinOpsWorkListItem[]>([]);
+  const requestSeq = useRef(0);

   const query = useMemo(() => {
     const p = new URLSearchParams();
@@ -100,33 +102,42 @@ export function FinOpsConsumptionPanel() {
   }, [period, projectId, model]);

   const refresh = useCallback(async () => {
+    const seq = ++requestSeq.current;
     setLoading(true);
     setError(null);
+    setWorksError(null);
     try {
       const [sumRes, worksRes] = await Promise.all([
         fetch(`/api/finops/summary?${query}`),
         fetch(`/api/finops/works?${query}`),
       ]);
+      if (seq !== requestSeq.current) return;
       if (!sumRes.ok) {
         const j = await sumRes.json().catch(() => ({}));
         throw new Error(j.message ?? "Chargement impossible");
       }
       const sumBody = (await sumRes.json()) as SummaryResponse;
+      if (seq !== requestSeq.current) return;
       setSummary(sumBody.summary);
       setFilterOptions(sumBody.filterOptions);

       if (worksRes.ok) {
         const w = (await worksRes.json()) as { items: FinOpsWorkListItem[] };
+        if (seq !== requestSeq.current) return;
         setWorks(w.items ?? []);
+        setWorksError(null);
       } else {
         setWorks([]);
+        setWorksError("La liste des travaux n’a pas pu être chargée.");
       }
     } catch (e) {
+      if (seq !== requestSeq.current) return;
       setError(e instanceof Error ? e.message : "Erreur de chargement");
       setSummary(null);
       setWorks([]);
+      setWorksError(null);
     } finally {
-      setLoading(false);
+      if (seq === requestSeq.current) setLoading(false);
     }
   }, [query]);

@@ -219,7 +230,19 @@ export function FinOpsConsumptionPanel() {

         {error ? (
           <p className="finops-1306-state" role="alert" data-testid="finops-error">
-            {error}
+            {error}{" "}
+            <button type="button" className="finops-1306-link" onClick={() => void refresh()}>
+              Réessayer
+            </button>
+          </p>
+        ) : null}
+
+        {!loading && !error && worksError ? (
+          <p className="finops-1306-state" role="alert" data-testid="finops-works-error">
+            {worksError}{" "}
+            <button type="button" className="finops-1306-link" onClick={() => void refresh()}>
+              Réessayer
+            </button>
           </p>
         ) : null}

@@ -341,7 +364,7 @@ export function FinOpsConsumptionPanel() {
               </section>
             </div>

-            <WorksTable works={works} />
+            {worksError ? null : <WorksTable works={works} />}
           </>
         ) : null}
       </div>
@@ -427,7 +450,9 @@ function WorksTable({ works }: { works: FinOpsWorkListItem[] }) {
     <div className="finops-1306-table-wrap" data-testid="finops-works-table">
       <h2 className="finops-1306-table-title">Travaux récents</h2>
       {works.length === 0 ? (
-        <p className="finops-1306-state">Aucun travail cognitif lié sur la période.</p>
+        <p className="finops-1306-state" data-testid="finops-works-empty">
+          Aucun travail cognitif lié sur la période.
+        </p>
       ) : (
         <table className="finops-1306-table">
           <thead>
diff --git a/projects/sfia-studio-next/web/src/components/finops/finops-consumption.css b/projects/sfia-studio-next/web/src/components/finops/finops-consumption.css
index 7b6870fe..d4164472 100644
--- a/projects/sfia-studio-next/web/src/components/finops/finops-consumption.css
+++ b/projects/sfia-studio-next/web/src/components/finops/finops-consumption.css
@@ -361,6 +361,14 @@
   text-decoration: none;
 }

+button.finops-1306-link {
+  background: none;
+  border: 0;
+  padding: 0;
+  font: inherit;
+  cursor: pointer;
+}
+
 .finops-1306-link:hover {
   text-decoration: underline;
 }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts b/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
index a5019be5..f846c8e0 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
@@ -297,6 +297,55 @@ export type ProbeUsageClaim = {

 const probeClaims = new Map<string, ProbeUsageClaim>();
 const usageWriteInflight = new Map<string, Promise<void>>();
+const probeClaimReleases = new Map<string, ReturnType<typeof setTimeout>>();
+let probeClaimReadFailure: Error | null = null;
+
+/** One-shot test seam. Throws after the claim is registered and before the observation read. */
+export function failNextProbeClaimReadForTests(error: Error | null) {
+  probeClaimReadFailure = error;
+}
+
+/**
+ * A claim is only a handoff for a write that has not landed yet.
+ * It is not a durable register. Once the lookup finds nothing and no write
+ * is in flight, the claim stays only for this grace so a write that starts
+ * immediately afterwards can still read it, then it is dropped.
+ */
+export const PROBE_CLAIM_GRACE_MS = 500;
+
+export function probeUsageClaimHeld(generationId: string): boolean {
+  return probeClaims.has(generationId.trim());
+}
+
+function dropProbeClaim(generationId: string, claim: ProbeUsageClaim) {
+  const pending = probeClaimReleases.get(generationId);
+  if (pending) {
+    clearTimeout(pending);
+    probeClaimReleases.delete(generationId);
+  }
+  if (probeClaims.get(generationId) === claim) probeClaims.delete(generationId);
+}
+
+function releaseProbeClaimWhenIdle(generationId: string, claim: ProbeUsageClaim) {
+  const pending = probeClaimReleases.get(generationId);
+  if (pending) clearTimeout(pending);
+  const timer = setTimeout(() => {
+    probeClaimReleases.delete(generationId);
+    void (async () => {
+      const inflight = usageWriteInflight.get(generationId);
+      if (inflight) await inflight;
+      if (usageWriteInflight.has(generationId)) {
+        if (probeClaims.get(generationId) === claim) {
+          releaseProbeClaimWhenIdle(generationId, claim);
+        }
+        return;
+      }
+      if (probeClaims.get(generationId) === claim) probeClaims.delete(generationId);
+    })();
+  }, PROBE_CLAIM_GRACE_MS);
+  timer.unref?.();
+  probeClaimReleases.set(generationId, timer);
+}

 function textOrEmpty(value: string | null | undefined): string {
   return value?.trim() ?? "";
@@ -379,71 +428,92 @@ export async function attributeConsumedProbeUsage(
     return { updated: 0, refused: true };
   }
   probeClaims.set(generationId, normalized);
-  const inflight = usageWriteInflight.get(generationId);
-  if (inflight) await inflight;
-
-  const lane = process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN";
-  const found = await db
-    .select({
-      id: providerUsageObservations.id,
-      cognitiveWorkId: providerUsageObservations.cognitiveWorkId,
-      projectId: providerUsageObservations.projectId,
-      conversationId: providerUsageObservations.conversationId,
-      turnId: providerUsageObservations.turnId,
-    })
-    .from(providerUsageObservations)
-    .where(
-      and(
-        eq(providerUsageObservations.generationId, generationId),
-        eq(providerUsageObservations.ownerPilotId, ownerPilotId),
-        eq(providerUsageObservations.preparationId, preparationId),
-        sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
-      ),
-    );
-  if (found.length === 0) return { updated: 0, refused: false };
-
-  const conflicts = found.some((row) => {
-    if (row.cognitiveWorkId && row.cognitiveWorkId !== cognitiveWorkId) return true;
-    if (row.projectId && work.projectId && row.projectId !== work.projectId) return true;
-    if (
-      normalized.projectId &&
-      row.projectId &&
-      row.projectId !== normalized.projectId
-    ) {
-      return true;
+  try {
+    if (probeClaimReadFailure) {
+      const error = probeClaimReadFailure;
+      probeClaimReadFailure = null;
+      throw error;
     }
-    if (normalized.turnId && row.turnId && row.turnId !== normalized.turnId) return true;
-    if (
-      normalized.conversationId &&
-      row.conversationId &&
-      row.conversationId !== normalized.conversationId
-    ) {
-      return true;
+    const lane = process.env.STUDIO_LANE?.trim().toUpperCase() || "UNKNOWN";
+    const readRows = () =>
+      db
+        .select({
+          id: providerUsageObservations.id,
+          cognitiveWorkId: providerUsageObservations.cognitiveWorkId,
+          projectId: providerUsageObservations.projectId,
+          conversationId: providerUsageObservations.conversationId,
+          turnId: providerUsageObservations.turnId,
+        })
+        .from(providerUsageObservations)
+        .where(
+          and(
+            eq(providerUsageObservations.generationId, generationId),
+            eq(providerUsageObservations.ownerPilotId, ownerPilotId),
+            eq(providerUsageObservations.preparationId, preparationId),
+            sql`(${providerUsageObservations.lane} IS NULL OR ${providerUsageObservations.lane} = ${lane})`,
+          ),
+        );
+    const inflight = usageWriteInflight.get(generationId);
+    if (inflight) await inflight;
+    let found = await readRows();
+    if (found.length === 0) {
+      const late = usageWriteInflight.get(generationId);
+      if (late && late !== inflight) {
+        await late;
+        found = await readRows();
+      }
+    }
+    if (found.length === 0) {
+      releaseProbeClaimWhenIdle(generationId, normalized);
+      return { updated: 0, refused: false };
+    }
+
+    const conflicts = found.some((row) => {
+      if (row.cognitiveWorkId && row.cognitiveWorkId !== cognitiveWorkId) return true;
+      if (row.projectId && work.projectId && row.projectId !== work.projectId) return true;
+      if (
+        normalized.projectId &&
+        row.projectId &&
+        row.projectId !== normalized.projectId
+      ) {
+        return true;
+      }
+      if (normalized.turnId && row.turnId && row.turnId !== normalized.turnId) return true;
+      if (
+        normalized.conversationId &&
+        row.conversationId &&
+        row.conversationId !== normalized.conversationId
+      ) {
+        return true;
+      }
+      return false;
+    });
+    if (conflicts) {
+      dropProbeClaim(generationId, normalized);
+      return { updated: 0, refused: true };
     }
-    return false;
-  });
-  if (conflicts) {
-    probeClaims.delete(generationId);
-    return { updated: 0, refused: true };
-  }

-  let updated = 0;
-  for (const row of found) {
-    if (row.cognitiveWorkId) continue;
-    const written = await db
-      .update(providerUsageObservations)
-      .set({ cognitiveWorkId })
-      .where(
-        and(
-          eq(providerUsageObservations.id, row.id),
-          isNull(providerUsageObservations.cognitiveWorkId),
-        ),
-      )
-      .returning({ id: providerUsageObservations.id });
-    updated += written.length;
+    let updated = 0;
+    for (const row of found) {
+      if (row.cognitiveWorkId) continue;
+      const written = await db
+        .update(providerUsageObservations)
+        .set({ cognitiveWorkId })
+        .where(
+          and(
+            eq(providerUsageObservations.id, row.id),
+            isNull(providerUsageObservations.cognitiveWorkId),
+          ),
+        )
+        .returning({ id: providerUsageObservations.id });
+      updated += written.length;
+    }
+    dropProbeClaim(generationId, normalized);
+    return { updated, refused: false };
+  } catch (error) {
+    releaseProbeClaimWhenIdle(generationId, normalized);
+    throw error;
   }
-  probeClaims.delete(generationId);
-  return { updated, refused: false };
 }

 /** Insert one durable observation; duplicate idempotency_key is a no-op. */
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
index 6e104383..0656bd51 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
@@ -708,7 +708,7 @@ export async function loadFinOpsWorks(
   };
   const rows = await loadObservations(pilotId, input);
   const byWork = new Map<string, ObservationRow[]>();
-  for (const r of rows) {
+  for (const r of filterBillableFinOpsRows(rows)) {
     if (!r.cognitiveWorkId) continue;
     const list = byWork.get(r.cognitiveWorkId) ?? [];
     list.push(r);
diff --git a/projects/sfia-studio-next/web/tests/integration/finops-probe-attribution.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/finops-probe-attribution.pg.test.ts
index ae9be152..cf6f3c2c 100644
--- a/projects/sfia-studio-next/web/tests/integration/finops-probe-attribution.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/finops-probe-attribution.pg.test.ts
@@ -21,6 +21,9 @@ import { createProjectCommand } from "@/domains/preparation/create-project";
 import {
   attributeConsumedProbeUsage,
   buildIdempotencyKey,
+  failNextProbeClaimReadForTests,
+  PROBE_CLAIM_GRACE_MS,
+  probeUsageClaimHeld,
   recordNoraProviderUsageWithHttpCorrelation,
   recordProviderUsageObservation,
 } from "@/domains/conversation/usage-accounting";
@@ -420,4 +423,267 @@ describe("FinOps probe attribution (PG)", () => {
     expect(otherModel.hasObservations).toBe(false);
     expect(otherWorks.items).toHaveLength(0);
   });
+
+  it("drops a claim when no observation arrives, and still attaches a write that starts inside the grace", async () => {
+    const absent = newId("gen");
+    const missing = await attributeConsumedProbeUsage({
+      generationId: absent,
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      cognitiveWorkId: workComplete,
+    });
+    expect(missing).toEqual({ updated: 0, refused: false });
+    expect(probeUsageClaimHeld(absent)).toBe(true);
+    await new Promise((resolve) => setTimeout(resolve, PROBE_CLAIM_GRACE_MS + 250));
+    expect(probeUsageClaimHeld(absent)).toBe(false);
+
+    const lateId = newId("gen");
+    const lateKey = `late-${lateId}`;
+    const claimed = attributeConsumedProbeUsage({
+      generationId: lateId,
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      cognitiveWorkId: workComplete,
+    });
+    const attached = await claimed;
+    expect(attached).toEqual({ updated: 0, refused: false });
+    expect(probeUsageClaimHeld(lateId)).toBe(true);
+    const late = await recordProviderUsageObservation({
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      generationId: lateId,
+      operation: "nora.generate_reply",
+      attemptId: "attempt-late",
+      cognitiveWorkId: null,
+      modelRequested: "gpt-test",
+      modelApplied: "UNVERIFIED",
+      totalTokens: 17,
+      providerRequests: 1,
+      estimatedCostUsd: 0.07,
+      costCoverage: "KNOWN",
+      status: "succeeded",
+      granularity: "REQUEST",
+      idempotencyKey: lateKey,
+      lane: "DEV",
+    });
+    expect(late.inserted).toBe(true);
+    await remember(lateId);
+    const row = (
+      await db
+        .select()
+        .from(providerUsageObservations)
+        .where(eq(providerUsageObservations.generationId, lateId))
+    )[0]!;
+    expect(row.cognitiveWorkId).toBe(workComplete);
+    expect(row.totalTokens).toBe(17);
+    expect(Number(row.estimatedCostUsd)).toBeCloseTo(0.07);
+    expect(row.idempotencyKey).toBe(lateKey);
+    const replay = await recordProviderUsageObservation({
+      ownerPilotId: pilotId,
+      preparationId,
+      projectId: projectA,
+      generationId: lateId,
+      operation: "nora.generate_reply",
+      attemptId: "attempt-late",
+      cognitiveWorkId: workComplete,
+      totalTokens: 999,
+      estimatedCostUsd: 9,
+      costCoverage: "KNOWN",
+      status: "succeeded",
+      granularity: "REQUEST",
+      idempotencyKey: lateKey,
+      lane: "DEV",
+    });
+    expect(replay.inserted).toBe(false);
+    const still = (
+      await db
+        .select()
+        .from(providerUsageObservations)
+        .where(eq(providerUsageObservations.generationId, lateId))
+    )[0]!;
+    expect(still.totalTokens).toBe(17);
+    expect(still.cognitiveWorkId).toBe(workComplete);
+    await new Promise((resolve) => setTimeout(resolve, PROBE_CLAIM_GRACE_MS + 250));
+    expect(probeUsageClaimHeld(lateId)).toBe(false);
+  });
+
+  it("releases a claim after a read failure without deleting it while the grace is open", async () => {
+    const generationId = newId("gen");
+    failNextProbeClaimReadForTests(new Error("probe read failed"));
+    await expect(
+      attributeConsumedProbeUsage({
+        generationId,
+        ownerPilotId: pilotId,
+        preparationId,
+        projectId: projectA,
+        cognitiveWorkId: workComplete,
+      }),
+    ).rejects.toThrow("probe read failed");
+    expect(probeUsageClaimHeld(generationId)).toBe(true);
+    await new Promise((resolve) => setTimeout(resolve, PROBE_CLAIM_GRACE_MS + 250));
+    expect(probeUsageClaimHeld(generationId)).toBe(false);
+    expect(await remember(generationId)).toBe(0);
+  });
+
+  it("lists only works that have a billable observation on the same filters", async () => {
+    const workCompanion = newId("cgw");
+    const workMixed = newId("cgw");
+    const workUnknown = newId("cgw");
+    await db.insert(cognitiveWorks).values([
+      {
+        id: workCompanion,
+        ownerPilotId: pilotId,
+        preparationId,
+        projectId: projectA,
+        status: "COMPLETE",
+        objective: "companion only",
+        revision: 1,
+      },
+      {
+        id: workMixed,
+        ownerPilotId: pilotId,
+        preparationId,
+        projectId: projectA,
+        status: "COMPLETE",
+        objective: "mixed observations",
+        revision: 1,
+      },
+      {
+        id: workUnknown,
+        ownerPilotId: pilotId,
+        preparationId,
+        projectId: projectA,
+        status: "OPEN",
+        interruptCause: "AWAIT_PILOT",
+        objective: "coût non calculable",
+        revision: 1,
+      },
+    ]);
+    try {
+      const companionGen = newId("gen");
+      await recordProviderUsageObservation({
+        ownerPilotId: pilotId,
+        preparationId,
+        projectId: projectA,
+        generationId: companionGen,
+        operation: "nora.generate_reply",
+        attemptId: "http-only",
+        cognitiveWorkId: workCompanion,
+        modelRequested: "gpt-test",
+        modelApplied: "UNVERIFIED",
+        inputTokens: null,
+        outputTokens: null,
+        totalTokens: null,
+        providerRequests: null,
+        estimatedCostUsd: null,
+        costCoverage: "PARTIAL",
+        status: "succeeded",
+        granularity: "REQUEST",
+        idempotencyKey: `companion-${companionGen}`,
+        limits: ["HTTP_ATTEMPT_CORRELATION_ONLY"],
+        lane: "DEV",
+      });
+      await remember(companionGen);
+
+      const mixedGen = newId("gen");
+      const mixedKey = `mixed-${mixedGen}`;
+      await recordProviderUsageObservation({
+        ownerPilotId: pilotId,
+        preparationId,
+        projectId: projectA,
+        generationId: mixedGen,
+        operation: "nora.generate_reply",
+        attemptId: "attempt-mixed",
+        cognitiveWorkId: workMixed,
+        modelRequested: "gpt-test",
+        modelApplied: "UNVERIFIED",
+        inputTokens: 30,
+        outputTokens: 10,
+        totalTokens: 40,
+        providerRequests: 1,
+        estimatedCostUsd: 0.11,
+        costCoverage: "KNOWN",
+        status: "succeeded",
+        granularity: "REQUEST",
+        idempotencyKey: mixedKey,
+        lane: "DEV",
+      });
+      await recordProviderUsageObservation({
+        ownerPilotId: pilotId,
+        preparationId,
+        projectId: projectA,
+        generationId: mixedGen,
+        operation: "nora.generate_reply",
+        attemptId: "http-mixed",
+        cognitiveWorkId: workMixed,
+        modelRequested: "gpt-test",
+        modelApplied: "UNVERIFIED",
+        totalTokens: null,
+        providerRequests: null,
+        estimatedCostUsd: null,
+        costCoverage: "PARTIAL",
+        status: "succeeded",
+        granularity: "REQUEST",
+        idempotencyKey: `${mixedKey}:http`,
+        limits: ["HTTP_ATTEMPT_CORRELATION_ONLY"],
+        lane: "DEV",
+      });
+      expect(await remember(mixedGen)).toBe(2);
+
+      const unknownGen = newId("gen");
+      await recordProviderUsageObservation({
+        ownerPilotId: pilotId,
+        preparationId,
+        projectId: projectA,
+        generationId: unknownGen,
+        operation: "nora.generate_reply",
+        attemptId: "attempt-unknown",
+        cognitiveWorkId: workUnknown,
+        modelRequested: "gpt-test",
+        modelApplied: "UNVERIFIED",
+        inputTokens: 8,
+        outputTokens: 2,
+        totalTokens: 10,
+        providerRequests: 1,
+        estimatedCostUsd: null,
+        costCoverage: "UNKNOWN",
+        status: "succeeded",
+        granularity: "REQUEST",
+        idempotencyKey: `unknown-${unknownGen}`,
+        lane: "DEV",
+      });
+      await remember(unknownGen);
+
+      const filter = { period: "30", projectId: projectA, model: "gpt-test" };
+      const summary = await loadFinOpsSummary(pilotId, filter);
+      const works = await loadFinOpsWorks(pilotId, filter);
+      const ids = works.items.map((item) => item.cognitiveWorkId);
+      expect(ids).not.toContain(workCompanion);
+      expect(ids).toContain(workMixed);
+      expect(ids).toContain(workUnknown);
+      expect(ids.filter((id) => id === workMixed)).toHaveLength(1);
+      const mixed = works.items.find((item) => item.cognitiveWorkId === workMixed)!;
+      expect(mixed.tokens).toEqual({ kind: "known", value: 40 });
+      expect(mixed.estimatedCostUsd.kind).toBe("partial");
+      if (mixed.estimatedCostUsd.kind === "partial") {
+        expect(mixed.estimatedCostUsd.value).toBeCloseTo(0.11);
+      }
+      const unknown = works.items.find((item) => item.cognitiveWorkId === workUnknown)!;
+      expect(unknown.estimatedCostUsd.kind).toBe("unknown");
+      expect(unknown.tokens).toEqual({ kind: "known", value: 10 });
+      expect(summary.hasObservations).toBe(true);
+      expect(summary.kpis.estimatedCostUsd.kind === "empty").toBe(false);
+      const stored = await db
+        .select()
+        .from(providerUsageObservations)
+        .where(eq(providerUsageObservations.generationId, mixedGen));
+      expect(stored).toHaveLength(2);
+    } finally {
+      await pgSql`DELETE FROM provider_usage_observations WHERE cognitive_work_id = ANY(${[workCompanion, workMixed, workUnknown]})`;
+      await pgSql`DELETE FROM cognitive_works WHERE id = ANY(${[workCompanion, workMixed, workUnknown]})`;
+    }
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-finops-consumption-panel-compare.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-finops-consumption-panel-compare.test.ts
index 6e623ff3..247f879e 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-finops-consumption-panel-compare.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-finops-consumption-panel-compare.test.ts
@@ -19,6 +19,21 @@ describe("FinOpsConsumptionPanel cost comparison transpose", () => {
     expect(src).not.toMatch(/ownership/i);
   });

+  it("ignores a stale filter response and keeps a works failure distinct from an empty list", () => {
+    expect(src).toContain("requestSeq");
+    expect(src).toContain("if (seq !== requestSeq.current) return;");
+    expect(src).toContain("if (seq === requestSeq.current) setLoading(false);");
+    expect(src).toContain('data-testid="finops-works-error"');
+    expect(src).toContain('data-testid="finops-works-empty"');
+    expect(src).toContain("La liste des travaux n’a pas pu être chargée.");
+    expect(src).not.toContain("setWorks([]);\n      }");
+    const empty = src.indexOf('data-testid="finops-works-empty"');
+    const failure = src.indexOf('data-testid="finops-works-error"');
+    expect(empty).toBeGreaterThan(-1);
+    expect(failure).toBeGreaterThan(-1);
+    expect(failure).not.toBe(empty);
+  });
+
   it("places CostComparisonBanner between KPIs and charts in JSX", () => {
     const kpis = src.indexOf('data-testid="finops-kpis"');
     const call = src.indexOf("<CostComparisonBanner");
```
