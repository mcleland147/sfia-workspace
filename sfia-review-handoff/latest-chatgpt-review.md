# Review Pack — Lot 2 complément — Coordination, erreurs de lecture, SAS06

Mono-cycle. Full. Candidat produit distant = source de revue.

## 1. Identité

- Date : 2026-11-28T10:50+01:00
- Cycle 08 Delivery, Critical, complément EVOL du lot 2
- Base : 953a4af445f3d29b730909d0854981ff40065424, tree 3c7cddb4680fd508156a6557836c3ba403146413
- Candidat : 017487581c317f957ef7a96ff2f3d95450fcf9ab
- Tree : b398725b2bbef59c295dbc3093f23a767f433994
- URL : https://github.com/mcleland147/sfia-workspace/commit/017487581c317f957ef7a96ff2f3d95450fcf9ab
- Handoff précédent, immuable : cf0519159a9c0f324e88c1e9a287818c47389d1e, blob dfb097a70fd84c6f2c5eb1eab3a19d1ea9f4ab88
- Suivi lu : origin/docs 72293b82, blob 36be182e, §11.3 et §11.4
- Figma lu : fichier itgvCulInEnFY6DvgIegvP, nœud 1022:164, session 951c39b3-483d-4fa4-8491-5b41a0e7bbbd. Fenêtre 702 de large, état « contexte en chargement ». Les icônes locales existantes correspondent aux pictogrammes de la frame. Aucun asset Figma temporaire n'est référencé.
- Statuts maintenus. Lot 3 non engagé. CI non exécutée.

## 2. Git Truth Check

Entrée égale au distant 953a4af4. Seuls les dossiers temporaires de revue étaient non suivis. origin/main 997897fd. merge-base = origin/main. Ports 3100 PID 55011 et 3200 PID 77113 inchangés. 3101 utilisé pour une preuve isolée puis arrêté.

Sortie : HEAD local = origin = 01748758. Push fast-forward. Aucune exécution Actions pour ce SHA.

## 3. Constats confirmés

Les trois constats de §11.3 sont confirmés dans 953a4af4 avant correction :

- refreshDurablePilotage comparait la génération de navigation et params.projectId capturé par la closure.
- refreshJournalContinuity et le GET projet pouvaient rejeter, et send traitait toute exception comme un ACK perdu.
- La prélecture SAS06 passait à ready sur HTTP OK seul. Le titre « Préparation terminée » suivait la qualification même si le contexte n'était pas chargé, et un statut absent devenait PROPOSED. La carte faisait 816 px avec un padding calé sur 124 px.

## 4. Corrections

A. Chaque relecture durable ouvre une génération propre via openProjectionRead. L'application compare cette génération à la dernière, et le projet à projectIdRef, mis à jour pendant le rendu. Une lecture plus récente, même échouée, retire le droit d'appliquer une réponse plus ancienne. Le Journal est relu après reprise de mission, après qualification terminale, après réconciliation, et au retour sur Journal. Une lecture documentaire ciblée met à jour l'activité seulement si aucune relecture plus récente n'a commencé. Elle ne remplace pas la connaissance projet par le payload Journal.

B. refreshDurablePilotage, refreshJournalContinuity, refreshProjectThreadSnapshot et le chargement initial absorbent réseau, HTTP et parsing. Après un tour confirmé, une exception de relecture ne crée pas de pending et ne gèle pas les choix. Le résultat métier reste. La fraîcheur passe à non confirmée ou indisponible. Un ACK perdu avant confirmation métier conserve rememberPending. ProjectOverview n'affiche un zéro que pour un snapshot présent. unavailable n'est plus un chargement perpétuel. ProjectJournal signale une lecture indisponible même si des sujets existent, distingue les décisions non confirmées, et propose Relire.

C. La fenêtre fait 702×823 et se centre verticalement : à 1680×970 le padding haut est (970−823)/2 = 73,5 px. Tant que le contexte charge, le kicker, le titre et le lead sont ceux de la frame 1022:164. « Préparation terminée » exige un contexte validé, une qualification PROPOSED et la fin du délai d'affichage déjà existant. Un statut absent n'est pas converti en PROPOSED. La prélecture lit le corps et n'est ready que si l'identité projet correspond et que connaissance et activité sont présentes. Cette prélecture n'hydrate pas les surfaces du projet.

## 5. Fichiers

Aucun fichier créé. 11 fichiers modifiés, liste dans le diff ci-dessous. Routes API et services propriétaires inchangés.

## 6. Preuves

- Unitaires project-projection-sync et durable-refresh-guard : 16 tests PASS.
- Build isolé STUDIO_E2E=1 : PASS, types de l'application inclus.
- Playwright project-context-load.spec.ts sur :3101 / sfia_next_e2e, Turbopack, Nora substituée : PASS en 13,7 s. Le repère de contexte atteint done et l'accès au projet reste disponible.
- git diff --check : PASS.
- Le test sas06-responsive a été aligné sur 823 px et le centrage. Il n'a pas été rejoué : son helper attend encore le badge « deterministic-fixture », absent de l'UI. Ce n'est pas un PASS géométrique.
- CI : aucune exécution.
- PG : non requis, services inchangés. Preuves PG historiques non rejouées.
- LIVE : NOT RUN.

## 7. Reports RECETTE

PROJ-REC-01, PROJ-REC-02 et PROJ-REC-03 restent ouverts. Ils ne sont pas des PASS. Les six DOC-REC du lot 1 restent ouverts.

## 8. Réserves

- Pas de parcours navigateur d'un projet déjà peuplé, ni d'un GET en échec après un POST acquitté. La séparation est couverte par turnProjectionRefreshOutcome et par le catch de send, qui appelle cette fonction.
- Pas de F2. La géométrie 823 px et le centrage sont dans le composant et dans le test, le test n'a pas été exécuté.
- Webpack canonique et tsc global hors lot, non revendiqués.

## 9. Fake/Real

Règles déterministes sur les fonctions branchées. Navigateur en fixture, base sfia_next_e2e. RECETTE non mutée.

## 10. Content coverage

Le diff complet du commit, depuis 953a4af4, est reproduit ci-dessous. Aucun fichier modifié n'est laissé en N/A.

## 11. Verdict

READY WITH RESERVES

Les trois défauts de sortie technique sont corrigés et publiés. La qualification comportementale d'un projet riche, d'une course réelle et de la géométrie SAS06 rejouée reste en RECETTE.

## 12. Diff utile


```diff
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-projet-trajectoire-conception-fonctionnelle-contrat-ux.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-projet-trajectoire-conception-fonctionnelle-contrat-ux.md
index 90ae4961..c3894ea9 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-projet-trajectoire-conception-fonctionnelle-contrat-ux.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-projet-trajectoire-conception-fonctionnelle-contrat-ux.md
@@ -368,4 +368,6 @@ Ce travail a un **blast radius D2/D3/D4/D5/D6** et dépasse une pure transpositi

 ### 10.3. Écart autorisé — chargement du contexte, 28 novembre 2026

-Morris autorise, pour le lot 2, un quatrième repère dans l'écran de préparation existant : chargement du contexte et de la continuité projet. Cet écart ne remplace pas la maquette trois étapes et ne prétend pas à une fidélité géométrique F2 de la carte 702×726. Le repère est lié à la lecture réelle du projet déjà créé. Il ne retarde pas la qualification, ne bloque pas « Accéder au projet », et ne constitue pas une nouvelle connaissance. La réouverture d'un projet existant reste un chargement, pas une nouvelle création.
+Morris autorise, pour le lot 2, un quatrième repère dans l'écran de préparation existant : chargement du contexte et de la continuité projet. Le repère est lié à la lecture réelle du projet déjà créé. Il ne retarde pas la qualification, ne bloque pas « Accéder au projet », et ne constitue pas une nouvelle connaissance. La réouverture d'un projet existant reste un chargement, pas une nouvelle création.
+
+Complément du 28 novembre 2026 : la frame Figma 1022:164 a été mise à jour. La fenêtre de référence observée est 702×823, centrée verticalement dans un viewport 1680×970. L'état affiché par cette frame est le chargement du contexte, avec le titre « Projet créé. Préparation de ton espace de travail. » « Préparation terminée » n'est annoncé que si le contexte est validé et la qualification proposée. Ce n'est pas un verdict F2.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index f51bfad1..b1b07b4d 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -5587,4 +5587,5 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
 - **Schéma** : aucun changement · aucune migration
 - **Versioning** : NO RELEASE · STABLE NOT AVAILABLE · aucune version sémantique officielle
 - **Statut** : DEV CANDIDATE — NOT ACCEPTED — NOT ADOPTED
+- **Complément** : relectures coordonnées par génération et identité courante, erreur de relecture séparée d'un effet déjà confirmé, fenêtre SAS06 alignée sur la frame 1022:164 (702×823, état de chargement du contexte). Le SHA de ce complément est reporté dans le Review Pack.

diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 3e1cc5d4..1a5e0178 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -6,6 +6,7 @@ import { SafeMarkdown } from "@/components/SafeMarkdown";
 import { PreparationConversation } from "@/components/figma/PreparationConversation";
 import { PreparationProposal } from "@/components/figma/PreparationProposal";
 import { SasCreateProgressPopup } from "@/components/figma/SasCreateProgressPopup";
+import { contextPreloadVerdict } from "@/lib/project-projection-sync";
 import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";
 import { ProjectJournal } from "@/components/figma/ProjectJournal";
 import {
@@ -128,9 +129,9 @@ export default function PreparationPage() {
   const [createProgressQualification, setCreateProgressQualification] =
     useState<InitialQualificationProjection | null>(null);
   const [pendingNavigateProjectId, setPendingNavigateProjectId] = useState<string | null>(null);
-  const [createContextLoad, setCreateContextLoad] = useState<"loading" | "ready" | "failed">(
-    "loading",
-  );
+  const [createContextLoad, setCreateContextLoad] = useState<
+    "loading" | "ready" | "partial" | "failed"
+  >("loading");
   /** RB-06 — UX min presentation for steps 2 and 3 (backend not delayed). Documented: 1200 ms. */
   const SAS_STEP_MIN_MS = 1200;
   const createProgressEnteredAtRef = useRef<number>(0);
@@ -175,9 +176,26 @@ export default function PreparationPage() {
     let cancelled = false;
     setCreateContextLoad("loading");
     void fetch(`/api/projects/${pendingNavigateProjectId}`)
-      .then((res) => {
+      .then(async (res) => {
+        if (cancelled) return;
+        let body: {
+          project?: { id?: string | null } | null;
+          knowledge?: unknown;
+          activity?: unknown;
+        } | null = null;
+        try {
+          body = (await res.json()) as typeof body;
+        } catch {
+          body = null;
+        }
         if (cancelled) return;
-        setCreateContextLoad(res.ok ? "ready" : "failed");
+        setCreateContextLoad(
+          contextPreloadVerdict({
+            expectedProjectId: pendingNavigateProjectId,
+            httpOk: res.ok,
+            body,
+          }),
+        );
       })
       .catch(() => {
         if (!cancelled) setCreateContextLoad("failed");
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 604649a7..7fde3860 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -45,10 +45,14 @@ import {
   type RevisionRow,
   revisionCurrencyLabel,
 } from "@/components/figma/DocumentSurfaces";
-import { shouldApplyDurableRefresh } from "@/lib/durable-refresh-guard";
+import {
+  openProjectionRead,
+  projectionReadApplies,
+} from "@/lib/durable-refresh-guard";
 import {
   activityAfterProjectRead,
   journalMayReplaceProjectKnowledge,
+  turnProjectionRefreshOutcome,
   type ActivityFreshness,
   type ActivitySnapshot,
 } from "@/lib/project-projection-sync";
@@ -367,6 +371,7 @@ export default function ProjectPage() {
     openPointsCount: number;
   } | null>(null);
   const [activityFreshness, setActivityFreshness] = useState<ActivityFreshness>("loading");
+  const projectActivityRef = useRef<ActivitySnapshot>(null);
   const [journalContinuity, setJournalContinuity] = useState<"loading" | "ready" | "unavailable">(
     "loading",
   );
@@ -413,6 +418,8 @@ export default function ProjectPage() {
   const pilotIdRef = useRef<string | null>(null);
   const preparationIdRef = useRef<string | null>(null);
   const projectIdRef = useRef(params.projectId);
+  projectIdRef.current = params.projectId;
+  const projectionReadGenRef = useRef(0);
   const messageTurnKeyRef = useRef<{ content: string; key: string } | null>(null);
   /** L1.5 — invalidate in-flight activity polls when a new send starts or ends. */
   const activityPollEpochRef = useRef(0);
@@ -587,6 +594,7 @@ export default function ProjectPage() {

   async function refreshJournalContinuity(projectId: string) {
     const gen = ++journalReqRef.current;
+    try {
     const res = await fetch(`/api/projects/${projectId}/journal`);
     if (gen !== journalReqRef.current || projectIdRef.current !== projectId) return;
     if (!res.ok) {
@@ -649,6 +657,16 @@ export default function ProjectPage() {
     setJournalSources(body.sourceLinks ?? []);
     setJournalContradictions(body.contradictions ?? []);
     setJournalContinuity("ready");
+    } catch {
+      if (gen !== journalReqRef.current || projectIdRef.current !== projectId) return;
+      setJournalContinuity("unavailable");
+    }
+  }
+
+  async function revalidateOwnedProjections(projectId?: string) {
+    const id = projectId ?? projectIdRef.current;
+    await refreshDurablePilotage({ projectId: id });
+    await refreshJournalContinuity(id);
   }

   useEffect(() => {
@@ -1442,7 +1460,6 @@ export default function ProjectPage() {

   function selectSurface(next: Surface) {
     surfaceNavGenRef.current += 1;
-    const navGen = surfaceNavGenRef.current;
     const projectIdAtNav = params.projectId;
     pendingSurfaceRef.current = next;
     noteProjectSurfaceNavIntent(params.projectId, next as StudioSurface);
@@ -1465,9 +1482,12 @@ export default function ProjectPage() {
     }
     // E07 — revalidate durable pilotage on surface change (GET only, no métier mutation).
     // Stale-response guard lives inside refreshDurablePilotage (before setState).
-    void refreshDurablePilotage({ generation: navGen, projectId: projectIdAtNav }).catch(() => {
+    void refreshDurablePilotage({ projectId: projectIdAtNav }).catch(() => {
       /* best-effort — navigation must stay non-blocking */
     });
+    if (next === "journal") {
+      void refreshJournalContinuity(projectIdAtNav);
+    }
   }

   function headRevisionFromRows(rows: RevisionRow[]): RevisionRow | null {
@@ -1808,83 +1828,80 @@ export default function ProjectPage() {
     }
   }

-  async function refreshDurablePilotage(opts?: { generation?: number; projectId?: string }) {
-    const request = {
-      generation: opts?.generation ?? surfaceNavGenRef.current,
-      projectId: opts?.projectId ?? params.projectId,
-    };
+  async function refreshDurablePilotage(opts?: { projectId?: string }) {
+    const projectId = opts?.projectId ?? projectIdRef.current;
+    const opened = openProjectionRead({
+      currentGeneration: projectionReadGenRef.current,
+      projectId,
+    });
+    projectionReadGenRef.current = opened.generation;
     const stillApplicable = () =>
-      shouldApplyDurableRefresh({
-        request,
-        currentGeneration: surfaceNavGenRef.current,
-        currentProjectId: params.projectId,
+      projectionReadApplies({
+        request: opened.request,
+        latestGeneration: projectionReadGenRef.current,
+        currentProjectId: projectIdRef.current,
       });
+    const markUnread = () => {
+      if (!stillApplicable()) return;
+      setActivityFreshness(
+        activityAfterProjectRead({
+          previous: projectActivityRef.current,
+          incoming: undefined,
+          httpOk: false,
+          snapshotPresent: false,
+        }).freshness,
+      );
+    };

-    // Prefer full project GET so surfaces (Projet / Trajectoire / CKI) share one durable snapshot.
-    const projRes = await fetch(`/api/projects/${request.projectId}`);
-    // Guard BEFORE any React mutation — out-of-order GETs must not clobber newer state.
-    if (!stillApplicable()) return;
-
-    if (projRes.ok) {
-      const pj = (await projRes.json()) as {
-        pilotage?: PilotageProjection | null;
-        messages?: Msg[];
-        documents?: Doc[];
-        knowledge?: Knowledge | null;
-        activity?: ActivitySnapshot | null;
-      };
+    try {
+      const projRes = await fetch(`/api/projects/${projectId}`);
       if (!stillApplicable()) return;
-      if (pj.pilotage) {
-        setPilotageProjection(pj.pilotage);
-      }
-      if (Array.isArray(pj.messages)) {
-        setMessages(pj.messages);
-      }
-      if (Array.isArray(pj.documents)) setDocuments(pj.documents);
-      if (pj.knowledge !== undefined) setKnowledge(pj.knowledge ?? null);
-      const hasActivity = Object.prototype.hasOwnProperty.call(pj, "activity");
-      const applied = activityAfterProjectRead({
-        previous: projectActivity,
-        incoming: hasActivity ? (pj.activity ?? null) : projectActivity,
-        httpOk: true,
-      });
-      setProjectActivity(applied.activity);
-      setActivityFreshness(applied.freshness);
-      const cycle = pj.pilotage?.cycle;
-      if (cycle?.status === "ACTIVE") {
-        setPilotageStatus((prev) =>
-          prev.includes("OPEN_CYCLE") || prev.includes("ACTIVE")
-            ? prev
-            : `cycle ${cycle.cycleType} ACTIVE (relecture durable)`,
-        );
+      if (projRes.ok) {
+        const pj = (await projRes.json()) as {
+          pilotage?: PilotageProjection | null;
+          messages?: Msg[];
+          documents?: Doc[];
+          knowledge?: Knowledge | null;
+          activity?: ActivitySnapshot | null;
+        };
+        if (!stillApplicable()) return;
+        if (pj.pilotage) setPilotageProjection(pj.pilotage);
+        if (Array.isArray(pj.messages)) setMessages(pj.messages);
+        if (Array.isArray(pj.documents)) setDocuments(pj.documents);
+        if (pj.knowledge !== undefined) setKnowledge(pj.knowledge ?? null);
+        const hasActivity =
+          Object.prototype.hasOwnProperty.call(pj, "activity") && pj.activity != null;
+        const applied = activityAfterProjectRead({
+          previous: projectActivityRef.current,
+          incoming: hasActivity ? pj.activity : undefined,
+          httpOk: true,
+          snapshotPresent: hasActivity,
+        });
+        if (hasActivity) {
+          projectActivityRef.current = applied.activity;
+          setProjectActivity(applied.activity);
+        }
+        setActivityFreshness(applied.freshness);
+        const cycle = pj.pilotage?.cycle;
+        if (cycle?.status === "ACTIVE") {
+          setPilotageStatus((prev) =>
+            prev.includes("OPEN_CYCLE") || prev.includes("ACTIVE")
+              ? prev
+              : `cycle ${cycle.cycleType} ACTIVE (relecture durable)`,
+          );
+        }
+        return;
       }
-      return;
-    }
-
-    setActivityFreshness(
-      activityAfterProjectRead({
-        previous: projectActivity,
-        incoming: undefined,
-        httpOk: false,
-      }).freshness,
-    );
-
-    // Fallback: dedicated pilotage route (same applicability gate)
-    const only = await fetch(`/api/projects/${request.projectId}/pilotage`);
-    if (!stillApplicable()) return;
-    if (only.ok) {
+      markUnread();
+      const only = await fetch(`/api/projects/${projectId}/pilotage`);
+      if (!stillApplicable()) return;
+      if (!only.ok) return;
       const pj = await only.json();
       if (!stillApplicable()) return;
       const pilotage = (pj.pilotage ?? pj) as PilotageProjection;
       setPilotageProjection(pilotage);
-      const cycle = pilotage?.cycle;
-      if (cycle?.status === "ACTIVE") {
-        setPilotageStatus((prev) =>
-          prev.includes("OPEN_CYCLE") || prev.includes("ACTIVE")
-            ? prev
-            : `cycle ${cycle.cycleType} ACTIVE (relecture durable)`,
-        );
-      }
+    } catch {
+      markUnread();
     }
   }

@@ -1966,14 +1983,36 @@ export default function ProjectPage() {
   }

   async function refreshProjectThreadSnapshot(): Promise<Msg[]> {
-    const proj = await fetch(`/api/projects/${params.projectId}`);
-    if (!proj.ok) return [];
-    const pj = await proj.json();
-    setDocuments(pj.documents ?? []);
-    setKnowledge(pj.knowledge ?? null);
-    const msgs = Array.isArray(pj.messages) ? (pj.messages as Msg[]) : [];
-    if (msgs.length) setMessages(msgs);
-    return msgs;
+    const projectId = projectIdRef.current;
+    const opened = openProjectionRead({
+      currentGeneration: projectionReadGenRef.current,
+      projectId,
+    });
+    projectionReadGenRef.current = opened.generation;
+    const still = () =>
+      projectionReadApplies({
+        request: opened.request,
+        latestGeneration: projectionReadGenRef.current,
+        currentProjectId: projectIdRef.current,
+      });
+    try {
+      const proj = await fetch(`/api/projects/${projectId}`);
+      if (!still() || !proj.ok) return [];
+      const pj = await proj.json();
+      if (!still()) return [];
+      setDocuments(pj.documents ?? []);
+      setKnowledge(pj.knowledge ?? null);
+      if (pj.activity) {
+        projectActivityRef.current = pj.activity;
+        setProjectActivity(pj.activity);
+        setActivityFreshness("ready");
+      }
+      const msgs = Array.isArray(pj.messages) ? (pj.messages as Msg[]) : [];
+      if (msgs.length) setMessages(msgs);
+      return msgs;
+    } catch {
+      return [];
+    }
   }

   async function tryClearOrphanPendingFromThread(
@@ -1991,7 +2030,7 @@ export default function ProjectPage() {
       pending,
       noraMode: "thread-orphan-recovery",
     });
-    await refreshDurablePilotage();
+    await revalidateOwnedProjections();
     return true;
   }

@@ -2033,7 +2072,7 @@ export default function ProjectPage() {
           setChoiceFrozen(true);
           setNoraActivity("error");
         }
-        await refreshDurablePilotage();
+        await revalidateOwnedProjections();
         return;
       }

@@ -2063,7 +2102,7 @@ export default function ProjectPage() {
           noraMode: body.noraMode,
         });
         await refreshProjectThreadSnapshot();
-        await refreshDurablePilotage();
+        await revalidateOwnedProjections();
         if (cleared || status.toUpperCase() === "RUNNING" || status.toUpperCase() === "ACCEPTED") {
           if (status.toUpperCase() === "RUNNING" || status.toUpperCase() === "ACCEPTED") {
             setNoraActivity("preparing");
@@ -2106,7 +2145,7 @@ export default function ProjectPage() {
           noraMode: String(j.noraMode ?? ""),
         });
         await refreshProjectThreadSnapshot();
-        await refreshDurablePilotage();
+        await revalidateOwnedProjections();
       } else {
         const cat = String(j.errorCategory ?? "");
         if (retry.status === 409 && cat.toUpperCase() === "TURN_IN_PROGRESS") {
@@ -2133,6 +2172,7 @@ export default function ProjectPage() {
   useEffect(() => {
     let cancelled = false;
     setProjectLoadState("loading");
+    projectActivityRef.current = null;
     setProjectActivity(null);
     setActivityFreshness("loading");
     setUnavailableKind(null);
@@ -2148,6 +2188,7 @@ export default function ProjectPage() {
     });

     async function load() {
+      try {
       const res = await fetch(`/api/projects/${params.projectId}`);
       if (cancelled) return;
       if (res.status === 401) {
@@ -2238,8 +2279,10 @@ export default function ProjectPage() {
       setKnowledge(j.knowledge ?? null);
       setPilotageProjection((j.pilotage as PilotageProjection) ?? null);
       setInitialQualification((j.initialQualification as InitialQualificationProjection) ?? null);
-      setProjectActivity(j.activity ?? null);
-      setActivityFreshness("ready");
+      const loadedActivity = j.activity ?? null;
+      projectActivityRef.current = loadedActivity;
+      setProjectActivity(loadedActivity);
+      setActivityFreshness(loadedActivity ? "ready" : "unavailable");
       const nextPrepId = j.preparation?.id ?? null;
       setPreparationId(nextPrepId);
       preparationIdRef.current = nextPrepId;
@@ -2499,17 +2542,26 @@ export default function ProjectPage() {
             documentSave?: { documentId?: string; status?: string } | null;
           };
           if (resume.recovered) {
+            const readGen = projectionReadGenRef.current;
             const refreshed = await fetch(`/api/projects/${params.projectId}`);
             if (refreshed.ok) {
               const rj = await refreshed.json();
-              if (cancelled) return;
-              setMessages(rj.messages ?? []);
-              setDocuments(rj.documents ?? []);
-              setKnowledge(rj.knowledge ?? null);
+              if (cancelled || projectIdRef.current !== params.projectId) return;
+              if (projectionReadGenRef.current === readGen) {
+                setMessages(rj.messages ?? []);
+                setDocuments(rj.documents ?? []);
+                setKnowledge(rj.knowledge ?? null);
+                if (rj.activity) {
+                  projectActivityRef.current = rj.activity;
+                  setProjectActivity(rj.activity);
+                  setActivityFreshness("ready");
+                }
+              }
               if (resume.documentSave?.documentId) {
                 setStatusHint("Fil durable · reprise de mission documentée");
               }
             }
+            await refreshJournalContinuity(params.projectId);
           }
         }
       } catch {
@@ -2518,6 +2570,13 @@ export default function ProjectPage() {

       // Mark ready only after surface sync from this load has been applied.
       if (!cancelled) setProjectLoadState("ready");
+      } catch {
+        if (cancelled || projectIdRef.current !== params.projectId) return;
+        setActivityFreshness("unavailable");
+        setJournalContinuity("unavailable");
+        setUnavailableKind("temporary");
+        setProjectLoadState("ready");
+      }
     }
     void load();
     return () => {
@@ -2570,15 +2629,28 @@ export default function ProjectPage() {
           setInitialQualification(body.initialQualification);
         }
       }
+      const readGen = projectionReadGenRef.current;
       const res = await fetch(`/api/projects/${params.projectId}`);
-      if (!res.ok || cancelled) return;
+      if (!res.ok || cancelled || projectIdRef.current !== params.projectId) return;
       const j = await res.json();
+      if (projectionReadGenRef.current !== readGen) return;
       setPilotageProjection((j.pilotage as PilotageProjection) ?? null);
       if (j.initialQualification) {
         missingQualificationAttemptsRef.current = 0;
         setInitialQualification(j.initialQualification as InitialQualificationProjection);
       }
       setMessages((j.messages ?? []) as Msg[]);
+      if (j.activity) {
+        projectActivityRef.current = j.activity;
+        setProjectActivity(j.activity);
+        setActivityFreshness("ready");
+      }
+      const qStatus = String(
+        (j.initialQualification as InitialQualificationProjection | null)?.status ?? "",
+      );
+      if (qStatus === "PROPOSED" || qStatus === "CLARIFICATION" || qStatus === "FAILED") {
+        await refreshJournalContinuity(params.projectId);
+      }
     };
     intervalId = window.setInterval(() => void tick(), 2000);
     void tick();
@@ -2593,7 +2665,6 @@ export default function ProjectPage() {
   // + generation bump so concurrent/stale project GETs cannot clobber a newer surface.
   useEffect(() => {
     surfaceNavGenRef.current += 1;
-    const navGen = surfaceNavGenRef.current;
     const projectIdAtNav = params.projectId;
     const qSurface = parseSurface(searchParams.get("surface"));
     const qDocId = searchParams.get("documentId");
@@ -2604,9 +2675,12 @@ export default function ProjectPage() {
     if (qSurface && peekProjectSurfaceNavIntent(params.projectId) === qSurface) {
       clearProjectSurfaceNavIntent(params.projectId, qSurface);
     }
-    void refreshDurablePilotage({ generation: navGen, projectId: projectIdAtNav }).catch(() => {
+    void refreshDurablePilotage({ projectId: projectIdAtNav }).catch(() => {
       /* best-effort — URL surface sync must stay non-blocking */
     });
+    if (qSurface === "journal") {
+      void refreshJournalContinuity(projectIdAtNav);
+    }
     // eslint-disable-next-line react-hooks/exhaustive-deps
   }, [searchParams]);

@@ -2682,11 +2756,21 @@ export default function ProjectPage() {
           `${j.reason ?? "BASE_STALE"} — nouvelle base présentée ; brouillon conservé. Rebasage explicite requis.`,
         );
         // Refresh inspect (new base) but DO NOT overwrite reviseDraft.
+        const docReadGen = projectionReadGenRef.current;
         const proj = await fetch(`/api/projects/${params.projectId}`);
         if (proj.ok) {
           const pj = await proj.json();
           const docs = (pj.documents ?? []) as Doc[];
           setDocuments(docs);
+          if (
+            pj.activity &&
+            docReadGen === projectionReadGenRef.current &&
+            projectIdRef.current === params.projectId
+          ) {
+            projectActivityRef.current = pj.activity;
+            setProjectActivity(pj.activity);
+            setActivityFreshness("ready");
+          }
           const fresh = docs.find((d) => d.document.id === inspect.document.id);
           if (fresh) {
             setInspect(fresh);
@@ -2697,11 +2781,21 @@ export default function ProjectPage() {
       }

       if (resultStatus === "AVAILABLE") {
+        const docReadGen = projectionReadGenRef.current;
         const proj = await fetch(`/api/projects/${params.projectId}`);
         if (proj.ok) {
           const pj = await proj.json();
           const docs = (pj.documents ?? []) as Doc[];
           setDocuments(docs);
+          if (
+            pj.activity &&
+            docReadGen === projectionReadGenRef.current &&
+            projectIdRef.current === params.projectId
+          ) {
+            projectActivityRef.current = pj.activity;
+            setProjectActivity(pj.activity);
+            setActivityFreshness("ready");
+          }
           const fresh = docs.find((d) => d.document.id === inspect.document.id);
           if (fresh) {
             setInspect(fresh);
@@ -2723,11 +2817,21 @@ export default function ProjectPage() {
           correlationKey,
         );
         if (recon.found && recon.status === "AVAILABLE") {
+          const docReadGen = projectionReadGenRef.current;
           const proj = await fetch(`/api/projects/${params.projectId}`);
           if (proj.ok) {
             const pj = await proj.json();
             const docs = (pj.documents ?? []) as Doc[];
             setDocuments(docs);
+            if (
+              pj.activity &&
+              docReadGen === projectionReadGenRef.current &&
+              projectIdRef.current === params.projectId
+            ) {
+              projectActivityRef.current = pj.activity;
+              setProjectActivity(pj.activity);
+              setActivityFreshness("ready");
+            }
             const fresh = docs.find((d) => d.document.id === inspect.document.id);
             if (fresh) {
               setInspect(fresh);
@@ -2964,6 +3068,7 @@ export default function ProjectPage() {
     if (!fromChoice) {
       setDraft("");
     }
+    let metierConfirmed = false;
     try {
       const res = await fetch(`/api/preparations/${preparationId}/messages`, {
         method: "POST",
@@ -3305,8 +3410,6 @@ export default function ProjectPage() {
             );
           }
         }
-        await refreshDurablePilotage();
-        await refreshJournalContinuity(params.projectId);
         setNoraActivity(
           j.status === "UNKNOWN" || j.status === "FAILED" || j.status === "INTERRUPTED"
             ? "error"
@@ -3322,6 +3425,21 @@ export default function ProjectPage() {
         } else {
           setChoiceFrozen(false);
         }
+        metierConfirmed = true;
+        try {
+          await revalidateOwnedProjections();
+        } catch {
+          if (
+            turnProjectionRefreshOutcome({ metierConfirmed: true, projectionFailed: true }) ===
+            "preserve-metier"
+          ) {
+            setActivityFreshness((prev) => (prev === "ready" ? "stale" : prev));
+            setJournalContinuity((prev) => (prev === "loading" ? "unavailable" : prev));
+            setStatus(
+              "Effet enregistré. La relecture du projet n’a pas abouti — vous pouvez relire sans relancer Nora.",
+            );
+          }
+        }
       } else {
         // ACK lost / HTTP error — KEEP choices frozen (server may have applied).
         // TURN_IN_PROGRESS: this clientTurnKey was NOT reserved — never orphan-remember it.
@@ -3351,12 +3469,23 @@ export default function ProjectPage() {
         }
       }
     } catch {
-      // Network loss after click: fail closed. Do not select a head from another
-      // operation and do not replay a conservation whose result is unknown.
-      setChoiceFrozen(true);
-      rememberPending(buildPending());
-      setNoraActivity("error");
-      setStatus("échec réseau — intention de tour conservée");
+      if (
+        metierConfirmed &&
+        turnProjectionRefreshOutcome({ metierConfirmed: true, projectionFailed: true }) ===
+          "preserve-metier"
+      ) {
+        setActivityFreshness((prev) => (prev === "ready" ? "stale" : prev));
+        setJournalContinuity((prev) => (prev === "loading" ? "unavailable" : prev));
+        setStatus(
+          "Effet enregistré. La relecture du projet n’a pas abouti — vous pouvez relire sans relancer Nora.",
+        );
+      } else {
+        // Network loss before a confirmed turn: fail closed.
+        setChoiceFrozen(true);
+        rememberPending(buildPending());
+        setNoraActivity("error");
+        setStatus("échec réseau — intention de tour conservée");
+      }
     } finally {
       if (activityPollTimer != null) window.clearInterval(activityPollTimer);
       activityPollEpochRef.current += 1;
@@ -4187,6 +4316,9 @@ export default function ProjectPage() {
           openPoints={knowledge?.openPoints ?? []}
           continuityLoading={journalContinuity === "loading" || activityFreshness === "loading"}
           continuityUnavailable={journalContinuity === "unavailable"}
+          onRetryContinuity={() => {
+            void refreshJournalContinuity(projectIdRef.current);
+          }}
           decisions={journalDecisions}
           restrictions={journalRestrictions}
           sourceLinks={journalSources}
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
index ba67f5eb..bf820a41 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
@@ -301,6 +301,7 @@ export function ProjectJournal(props: {
   /** True while the project continuity read has not completed. Empty is not unloaded. */
   continuityLoading?: boolean;
   continuityUnavailable?: boolean;
+  onRetryContinuity?: () => void;
   /** Sas-only mutation affordance — project Journal stays read-oriented. */
   onRenameSubject?: (id: string, title: string) => void;
   splitSlot?: React.ReactNode;
@@ -639,6 +640,17 @@ export function ProjectJournal(props: {
           </div>
         )}

+        {props.continuityUnavailable ? (
+          <p className="journal-empty-copy" data-testid="journal-continuity-unconfirmed">
+            Lecture du Journal non confirmée. Les dernières données de ce projet restent affichées.{" "}
+            {props.onRetryContinuity ? (
+              <button type="button" className="btn secondary" onClick={props.onRetryContinuity}>
+                Relire
+              </button>
+            ) : null}
+          </p>
+        ) : null}
+
         {tab === "subjects" ? (
           emptySubjects ? (
             <div className="journal-hierarchy journal-empty" data-testid="journal-empty-structure">
@@ -714,7 +726,13 @@ export function ProjectJournal(props: {
             decisions={filteredDecisions}
             selectedId={selectedDecisionId}
             showEmpty={showDecisionSearchEmpty}
-            emptyCopy={COPY.emptyDecisions}
+            emptyCopy={
+              props.continuityLoading
+                ? "Chargement des décisions."
+                : props.continuityUnavailable
+                  ? "Décisions non confirmées par la dernière lecture."
+                  : COPY.emptyDecisions
+            }
             searchEmptyCopy={COPY.searchEmptyDecisions}
             onSelect={pickDecision}
           />
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
index 5e8916df..6d74cdb0 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectOverview.tsx
@@ -67,8 +67,17 @@ export function ProjectOverview(props: {
 }) {
   const cycle = props.pilotage?.cycle;
   const activity = props.activity;
-  const activityLoaded = (props.activityFreshness ?? "ready") === "ready" || activity !== null;
-  const activityUnconfirmed = props.activityFreshness === "stale";
+  const freshness = props.activityFreshness ?? "loading";
+  const hasSnapshot = activity !== null;
+  const showCounts = hasSnapshot && (freshness === "ready" || freshness === "stale");
+  const activityUnconfirmed = freshness === "stale" && hasSnapshot;
+  const freshnessLabel = activityUnconfirmed
+    ? "Dernière lecture conservée — fraîcheur non confirmée"
+    : showCounts
+      ? "Vue synthétique des espaces du projet"
+      : freshness === "loading"
+        ? "Chargement des compteurs"
+        : "Lecture indisponible";
   // Prefer a durable project description; never invent illustrative copy.
   // Proposed orientation is a trajectory artifact — only use as fallback when no description.
   const description = props.description?.trim() || null;
@@ -194,11 +203,7 @@ export function ProjectOverview(props: {
         <div className="flex flex-wrap items-end justify-between gap-2" style={{ minHeight: 32 }}>
           <h3 className="text-[22px] font-semibold leading-8 text-[#f3f5ff]">Activité du projet</h3>
           <p className="text-xs text-[#7787a4]" data-testid="project-activity-freshness">
-            {activityUnconfirmed
-              ? "Dernière lecture conservée — fraîcheur non confirmée"
-              : activityLoaded
-                ? "Vue synthétique des espaces du projet"
-                : "Chargement des compteurs"}
+            {freshnessLabel}
           </p>
         </div>
         <div
@@ -215,7 +220,8 @@ export function ProjectOverview(props: {
             title="Sujets ouverts"
             source="Journal"
             count={activity?.openSubjects.count ?? 0}
-            loaded={activityLoaded}
+            loaded={showCounts}
+            pendingLabel={freshness === "loading" ? "Compteur non chargé." : "Lecture indisponible."}
             empty="Aucun sujet actif capitalisé."
             examples={activity?.openSubjects.examples.map((e) => e.title) ?? []}
             href={`/projects/${props.projectId}?surface=journal`}
@@ -225,7 +231,8 @@ export function ProjectOverview(props: {
             title="Décisions applicables"
             source="Gouvernance"
             count={activity?.applicableDecisions.count ?? 0}
-            loaded={activityLoaded}
+            loaded={showCounts}
+            pendingLabel={freshness === "loading" ? "Compteur non chargé." : "Lecture indisponible."}
             empty="Aucune décision applicable."
             examples={activity?.applicableDecisions.examples.map((e) => e.statement) ?? []}
             href={`/projects/${props.projectId}?surface=journal`}
@@ -235,7 +242,8 @@ export function ProjectOverview(props: {
             title="Documents du projet"
             source="Bibliothèque"
             count={activity?.documentsInProgress.count ?? 0}
-            loaded={activityLoaded}
+            loaded={showCounts}
+            pendingLabel={freshness === "loading" ? "Compteur non chargé." : "Lecture indisponible."}
             empty="Aucun document en cours de rédaction."
             examples={activity?.documentsInProgress.examples.map((e) => e.title) ?? []}
             href={`/projects/${props.projectId}?surface=document`}
@@ -252,6 +260,7 @@ function ActivityCard(props: {
   source: string;
   count: number;
   loaded: boolean;
+  pendingLabel?: string;
   empty: string;
   examples: string[];
   href: string;
@@ -284,7 +293,9 @@ function ActivityCard(props: {
       <div className="my-4 h-px shrink-0 bg-[#2b3850]" data-testid={`${props.testId}-sep-top`} />
       <div className="min-h-[72px] flex-1">
         {!props.loaded ? (
-          <p className="text-sm leading-relaxed text-[#a3b0c7]">Compteur non chargé.</p>
+          <p className="text-sm leading-relaxed text-[#a3b0c7]">
+            {props.pendingLabel ?? "Compteur non chargé."}
+          </p>
         ) : props.count === 0 ? (
           <p className="text-sm leading-relaxed text-[#a3b0c7]">{props.empty}</p>
         ) : (
diff --git a/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx b/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
index 91ac59bf..c35bff1c 100644
--- a/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/SasCreateProgressPopup.tsx
@@ -2,6 +2,7 @@

 import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";
 import {
+  preparationAnnouncement,
   preparationContinuityMarks,
   type ContextLoadState,
   type PrepMark,
@@ -9,7 +10,7 @@ import {

 /**
  * Figma SAS06 (1022:164) — Création et qualification initiale.
- * Dimensions : 702×726 · assets SVG natifs sous /public/figma/sas06/ (download_assets MCP).
+ * Frame 1022:164, référence 702×823. Assets locaux identiques aux icônes de la frame.
  */
 const ASSET = {
   halo: "/figma/sas06/icone-halo.svg",
@@ -35,55 +36,26 @@ export function SasCreateProgressPopup(props: {
 }) {
   if (!props.visible) return null;

-  const complete = props.complete === true;
   const iqStatus = props.qualification?.status ?? null;
-  /** AT-03 — terminal ≠ always « trajectoire prête ». */
-  const outcome: "PROPOSED" | "CLARIFICATION" | "FAILED" | "RUNNING" =
-    !complete
-      ? "RUNNING"
-      : iqStatus === "PROPOSED"
-        ? "PROPOSED"
-        : iqStatus === "FAILED"
-          ? "FAILED"
-          : iqStatus === "CLARIFICATION"
-            ? "CLARIFICATION"
-            : "PROPOSED";
-
-  const kicker =
-    outcome === "RUNNING"
-      ? "PROJET CRÉÉ / TRAJECTOIRE EN PRÉPARATION"
-      : outcome === "PROPOSED"
-        ? "PROJET CRÉÉ / TRAJECTOIRE PROPOSÉE"
-        : outcome === "CLARIFICATION"
-          ? "PROJET CRÉÉ / CLARIFICATION NÉCESSAIRE"
-          : "PROJET CRÉÉ / REPRISE NÉCESSAIRE";
-
-  const titleText =
-    outcome === "RUNNING"
-      ? "Projet créé. Nora prépare la suite."
-      : outcome === "PROPOSED"
-        ? "Préparation terminée. Accède au projet quand tu veux."
-        : outcome === "CLARIFICATION"
-          ? "Projet créé. Nora a besoin d’une précision avant de proposer la trajectoire."
-          : "Projet créé. La qualification initiale n’a pas abouti.";
-
-  const leadText =
-    outcome === "RUNNING"
-      ? props.projectName
-        ? `Nora analyse l’intention de « ${props.projectName} » pour proposer une première trajectoire.`
-        : "Nora analyse ton intention pour proposer une première trajectoire."
-      : outcome === "PROPOSED"
-        ? props.projectName
-          ? `La première proposition de trajectoire pour « ${props.projectName} » est disponible dans le fil. Aucun cycle ne démarre sans ton accord.`
-          : "La première proposition de trajectoire est disponible dans le fil. Aucun cycle ne démarre sans ton accord."
-        : outcome === "CLARIFICATION"
-          ? "Une clarification est dans le fil du projet. Réponds-y pour que Nora propose une trajectoire. Aucun cycle n’est ouvert."
-          : "Tu peux accéder au projet et reprendre la conversation. Aucun cycle n’a été ouvert.";
+  const contextLoad = props.contextLoad ?? "loading";
+  const announcement = preparationAnnouncement({
+    context: contextLoad,
+    qualificationStatus: iqStatus,
+    dwellComplete: props.complete === true,
+    projectName: props.projectName,
+  });
+  const kicker = announcement.kicker;
+  const titleText = announcement.title;
+  const leadText = announcement.lead;
+  const outcome =
+    iqStatus === "PROPOSED" || iqStatus === "CLARIFICATION" || iqStatus === "FAILED"
+      ? iqStatus
+      : "RUNNING";

   const marks = preparationContinuityMarks({
     projectCreated: true,
-    context: props.contextLoad ?? "loading",
-    qualificationStatus: complete ? (iqStatus ?? "PROPOSED") : iqStatus,
+    context: contextLoad,
+    qualificationStatus: iqStatus,
   });
   const steps: Array<{
     n: 1 | 2 | 3 | 4;
@@ -95,19 +67,19 @@ export function SasCreateProgressPopup(props: {
       n: 1,
       key: "project",
       title: "Projet créé",
-      detail: "Il reste accessible, même si tu quittes Studio.",
+      detail: "Ton projet est enregistré et reste accessible.",
     },
     {
       n: 2,
       key: "context",
       title: "Chargement du contexte et de la continuité projet",
-      detail: "Sujets, acquis, points ouverts, documents et pilotage déjà disponibles.",
+      detail: "Récupération des sujets, acquis, points ouverts, documents et informations de pilotage.",
     },
     {
       n: 3,
       key: "cycles",
       title: "Identification des cycles pertinents",
-      detail: "Analyse des cycles pertinents et des références CKI.",
+      detail: "Qualification initiale de la trajectoire et des références CKI.",
     },
     {
       n: 4,
@@ -118,7 +90,9 @@ export function SasCreateProgressPopup(props: {
           ? "Clarification dans le fil — pas encore de proposition de trajectoire."
           : outcome === "FAILED"
             ? "La qualification n’a pas abouti ; tu peux reprendre dans le projet."
-            : "Une proposition de trajectoire dans le fil du projet.",
+            : outcome === "PROPOSED"
+              ? "Une proposition de trajectoire dans le fil du projet."
+              : "Une proposition ou une clarification dans le fil du projet.",
     },
   ];

@@ -131,7 +105,7 @@ export function SasCreateProgressPopup(props: {
         // Short viewports (e.g. PW 1280×720): shrink top padding (floor 16px) so the
         // 702×726 card can scroll and "Accéder au projet" stays reachable.
         // Four markers. Desktop padding shrinks when the card no longer fits 124px.
-        padding: "clamp(16px, calc(100vh - 816px - 24px), 124px) 16px 24px",
+        padding: "clamp(16px, calc((100vh - 823px) / 2), 240px) 16px 24px",
       }}
       role="dialog"
       aria-modal="true"
@@ -143,7 +117,7 @@ export function SasCreateProgressPopup(props: {
         style={{
           width: 702,
           // Morris 2026-11-28: fourth real context step. Height follows the added row.
-          height: 816,
+          height: 823,
           maxHeight: "calc(100vh - 40px)",
           maxWidth: "calc(100vw - 32px)",
           background: "#1b2639",
@@ -195,7 +169,7 @@ export function SasCreateProgressPopup(props: {
         <div style={{ padding: "24px 35px 0" }}>
           <h2
             id="sas-create-progress-title"
-            className="text-[28px] font-semibold leading-tight"
+            className="text-[26px] font-semibold leading-tight"
           >
             {titleText}
           </h2>
@@ -233,7 +207,7 @@ export function SasCreateProgressPopup(props: {
             const statusColor =
               mark === "done" ? "#6cdbba" : mark === "running" ? "#7477ed" : mark === "failed" ? "#e2a36b" : "#7787a4";
             const borderColor = current ? "#7477ed" : "#2b3850";
-            const minH = current ? 96 : 72;
+            const minH = current ? 104 : item.n === 1 ? 79 : 86;

             return (
               <li
@@ -268,7 +242,7 @@ export function SasCreateProgressPopup(props: {
                         width={35}
                         height={35}
                         className="fig-sas-progress-ring-spin"
-                        data-terminal={complete ? "1" : "0"}
+                        data-terminal={announcement.announceComplete ? "1" : "0"}
                         aria-hidden
                       />
                       <span className="absolute inset-0 flex items-center justify-center">
@@ -326,7 +300,7 @@ export function SasCreateProgressPopup(props: {
             />
           </span>
           <p className="text-[12px] leading-relaxed text-[#a3b0c7]">
-            Tu peux quitter Studio : cette préparation sera retrouvée à ton retour.
+            Tu peux accéder au projet dès maintenant ou quitter Studio : la préparation sera retrouvée à ton retour.
           </p>
         </div>

diff --git a/projects/sfia-studio-next/web/src/lib/durable-refresh-guard.ts b/projects/sfia-studio-next/web/src/lib/durable-refresh-guard.ts
index f2d121f7..b51255b8 100644
--- a/projects/sfia-studio-next/web/src/lib/durable-refresh-guard.ts
+++ b/projects/sfia-studio-next/web/src/lib/durable-refresh-guard.ts
@@ -25,3 +25,27 @@ export function shouldApplyDurableRefresh(input: {
   if (input.request.generation !== input.currentGeneration) return false;
   return true;
 }
+
+/** One generation per read. A newer read, even a failed one, retires older responses. */
+export function openProjectionRead(input: {
+  currentGeneration: number;
+  projectId: string;
+}): { generation: number; request: DurableRefreshRequestIdentity } {
+  const generation = input.currentGeneration + 1;
+  return {
+    generation,
+    request: { generation, projectId: input.projectId },
+  };
+}
+
+export function projectionReadApplies(input: {
+  request: DurableRefreshRequestIdentity;
+  latestGeneration: number;
+  currentProjectId: string;
+}): boolean {
+  return shouldApplyDurableRefresh({
+    request: input.request,
+    currentGeneration: input.latestGeneration,
+    currentProjectId: input.currentProjectId,
+  });
+}
diff --git a/projects/sfia-studio-next/web/src/lib/project-projection-sync.ts b/projects/sfia-studio-next/web/src/lib/project-projection-sync.ts
index 38fa0186..a947727d 100644
--- a/projects/sfia-studio-next/web/src/lib/project-projection-sync.ts
+++ b/projects/sfia-studio-next/web/src/lib/project-projection-sync.ts
@@ -17,8 +17,11 @@ export function activityAfterProjectRead(input: {
   previous: ActivitySnapshot;
   incoming: ActivitySnapshot | undefined;
   httpOk: boolean;
+  /** True only when the payload contains an activity object. Null is not an empty snapshot. */
+  snapshotPresent?: boolean;
 }): { activity: ActivitySnapshot; freshness: ActivityFreshness } {
-  if (!input.httpOk) {
+  const present = input.snapshotPresent ?? input.incoming != null;
+  if (!input.httpOk || !present) {
     return {
       activity: input.previous,
       freshness: input.previous ? "stale" : "unavailable",
@@ -27,6 +30,37 @@ export function activityAfterProjectRead(input: {
   return { activity: input.incoming ?? null, freshness: "ready" };
 }

+/**
+ * A confirmed turn stays confirmed when the following projection read fails.
+ * Lost ACK remains the outcome only when the métier result itself is unknown.
+ */
+export function turnProjectionRefreshOutcome(input: {
+  metierConfirmed: boolean;
+  projectionFailed: boolean;
+}): "preserve-metier" | "metier-unconfirmed" {
+  if (input.metierConfirmed && input.projectionFailed) return "preserve-metier";
+  return "metier-unconfirmed";
+}
+
+export type ProjectPreloadBody = {
+  project?: { id?: string | null } | null;
+  knowledge?: unknown;
+  activity?: unknown;
+};
+
+/** Popup preload. Validating the body is not the same as hydrating project surfaces. */
+export function contextPreloadVerdict(input: {
+  expectedProjectId: string;
+  httpOk: boolean;
+  body: ProjectPreloadBody | null;
+}): "ready" | "partial" | "failed" {
+  if (!input.httpOk || !input.body) return "failed";
+  const id = input.body.project?.id;
+  if (!id || id !== input.expectedProjectId) return "failed";
+  if (input.body.knowledge == null || input.body.activity == null) return "partial";
+  return "ready";
+}
+
 /** Journal GET carries richer provenance. It must not replace project knowledge. */
 export function journalMayReplaceProjectKnowledge(): false {
   return false;
@@ -34,7 +68,7 @@ export function journalMayReplaceProjectKnowledge(): false {

 export type PrepMark = "pending" | "running" | "done" | "incomplete" | "failed";

-export type ContextLoadState = "loading" | "ready" | "failed";
+export type ContextLoadState = "loading" | "ready" | "partial" | "failed";

 /**
  * Four preparation markers. Context load and trajectory qualification are
@@ -53,7 +87,13 @@ export function preparationContinuityMarks(input: {
   return {
     project: input.projectCreated ? "done" : "pending",
     context:
-      input.context === "ready" ? "done" : input.context === "failed" ? "failed" : "running",
+      input.context === "ready"
+        ? "done"
+        : input.context === "failed"
+          ? "failed"
+          : input.context === "partial"
+            ? "incomplete"
+            : "running",
     cycles: !input.projectCreated
       ? "pending"
       : failed
@@ -66,3 +106,62 @@ export function preparationContinuityMarks(input: {
     reply: !terminal ? "pending" : failed ? "failed" : clarification ? "incomplete" : "done",
   };
 }
+
+export function preparationAnnouncement(input: {
+  context: ContextLoadState;
+  qualificationStatus: string | null;
+  dwellComplete: boolean;
+  projectName: string;
+}): { kicker: string; title: string; lead: string; announceComplete: boolean } {
+  const name = input.projectName.trim();
+  if (input.context === "loading" || input.context === "partial") {
+    return {
+      kicker: "PROJET CRÉÉ  /  CONTEXTE EN CHARGEMENT",
+      title: "Projet créé. Préparation de ton espace de travail.",
+      lead: "Studio récupère le contexte et les connaissances existantes du projet. Nora prépare la trajectoire initiale.",
+      announceComplete: false,
+    };
+  }
+  if (input.context === "failed") {
+    return {
+      kicker: "PROJET CRÉÉ / CONTEXTE INDISPONIBLE",
+      title: "Projet créé. Le contexte n’a pas pu être relu.",
+      lead: "Tu peux accéder au projet. La lecture sera reprise à l’entrée. Aucun cycle n’a été ouvert.",
+      announceComplete: false,
+    };
+  }
+  if (input.qualificationStatus === "FAILED") {
+    return {
+      kicker: "PROJET CRÉÉ / REPRISE NÉCESSAIRE",
+      title: "Projet créé. La qualification initiale n’a pas abouti.",
+      lead: "Tu peux accéder au projet et reprendre la conversation. Aucun cycle n’a été ouvert.",
+      announceComplete: false,
+    };
+  }
+  if (input.qualificationStatus === "CLARIFICATION") {
+    return {
+      kicker: "PROJET CRÉÉ / CLARIFICATION NÉCESSAIRE",
+      title: "Projet créé. Nora a besoin d’une précision avant de proposer la trajectoire.",
+      lead: "Une clarification est dans le fil du projet. Réponds-y pour que Nora propose une trajectoire. Aucun cycle n’est ouvert.",
+      announceComplete: false,
+    };
+  }
+  if (input.qualificationStatus === "PROPOSED" && input.dwellComplete) {
+    return {
+      kicker: "PROJET CRÉÉ / TRAJECTOIRE PROPOSÉE",
+      title: "Préparation terminée. Accède au projet quand tu veux.",
+      lead: name
+        ? `La première proposition de trajectoire pour « ${name} » est disponible dans le fil. Aucun cycle ne démarre sans ton accord.`
+        : "La première proposition de trajectoire est disponible dans le fil. Aucun cycle ne démarre sans ton accord.",
+      announceComplete: true,
+    };
+  }
+  return {
+    kicker: "PROJET CRÉÉ / TRAJECTOIRE EN PRÉPARATION",
+    title: "Projet créé. Nora prépare la suite.",
+    lead: name
+      ? `Nora analyse l’intention de « ${name} » pour proposer une première trajectoire.`
+      : "Nora analyse ton intention pour proposer une première trajectoire.",
+    announceComplete: false,
+  };
+}
diff --git a/projects/sfia-studio-next/web/tests/e2e/sas06-responsive-viewports.spec.ts b/projects/sfia-studio-next/web/tests/e2e/sas06-responsive-viewports.spec.ts
index 3f4c9469..b212a853 100644
--- a/projects/sfia-studio-next/web/tests/e2e/sas06-responsive-viewports.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/sas06-responsive-viewports.spec.ts
@@ -3,7 +3,8 @@ import { test, expect, type Page } from "@playwright/test";

 /**
  * Ensemble 07 SAS06 — responsive contract:
- * - 1680×970: card 702×816 after the authorized fourth context step (F2 726 no longer claimed)
+ * - 1680×970: card 702×823, top padding equals vertical centering of that card.
+ *   This is a geometry check of the implemented window, not an F2 verdict.
  * - 1280×720: CTA reachable via scroll; click navigates to project
  */
 async function openSas06Popup(page: Page, seed: string) {
@@ -27,7 +28,7 @@ async function openSas06Popup(page: Page, seed: string) {
   await expect(page.getByTestId("sas-create-progress-popup")).toBeVisible({ timeout: 30000 });
 }

-test("SAS06 desktop 1680×970 matches Figma geometry (F2 ≤2px)", async ({ page }) => {
+test("SAS06 desktop 1680×970 uses the 823px window and centered padding", async ({ page }) => {
   await page.setViewportSize({ width: 1680, height: 970 });
   await openSas06Popup(page, "SAS06 desktop geometry seed");

@@ -41,9 +42,9 @@ test("SAS06 desktop 1680×970 matches Figma geometry (F2 ≤2px)", async ({ page
   expect(cardBox).toBeTruthy();

   const padTop = (cardBox!.y - (overlayBox!.y ?? 0));
-  expect(Math.abs(padTop - 124)).toBeLessThanOrEqual(2);
+  expect(Math.abs(padTop - (970 - 823) / 2)).toBeLessThanOrEqual(2);
   expect(Math.abs(cardBox!.width - 702)).toBeLessThanOrEqual(2);
-  expect(Math.abs(cardBox!.height - 816)).toBeLessThanOrEqual(2);
+  expect(Math.abs(cardBox!.height - 823)).toBeLessThanOrEqual(2);

   await expect(dismiss).toBeVisible();
   const dismissBox = await dismiss.boundingBox();
@@ -71,9 +72,8 @@ test("SAS06 short 1280×720 CTA reachable with scroll and click", async ({ page
   const cardBox = await card.boundingBox();
   expect(overlayBox).toBeTruthy();
   expect(cardBox).toBeTruthy();
-  // Short viewport must shrink top padding below Figma 124 so content fits/scrolls.
   const padTop = cardBox!.y - (overlayBox!.y ?? 0);
-  expect(padTop).toBeLessThan(124);
+  expect(padTop).toBeLessThan(73.5);
   expect(padTop).toBeGreaterThanOrEqual(14);

   await dismiss.scrollIntoViewIfNeeded();
diff --git a/projects/sfia-studio-next/web/tests/unit/project-projection-sync.test.ts b/projects/sfia-studio-next/web/tests/unit/project-projection-sync.test.ts
index 3cb38106..4112f46c 100644
--- a/projects/sfia-studio-next/web/tests/unit/project-projection-sync.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/project-projection-sync.test.ts
@@ -2,10 +2,13 @@ import { describe, expect, it } from "vitest";
 import { countProjectLibraryDocuments } from "@/domains/preparation/project-activity-projection";
 import {
   activityAfterProjectRead,
+  contextPreloadVerdict,
   journalMayReplaceProjectKnowledge,
+  preparationAnnouncement,
   preparationContinuityMarks,
+  turnProjectionRefreshOutcome,
 } from "@/lib/project-projection-sync";
-import { shouldApplyDurableRefresh } from "@/lib/durable-refresh-guard";
+import { openProjectionRead, projectionReadApplies, shouldApplyDurableRefresh } from "@/lib/durable-refresh-guard";

 const activity = {
   openSubjects: { count: 2, examples: [{ id: "s1", title: "Sujet" }] },
@@ -115,4 +118,103 @@ describe("project projection sync", () => {
     expect(failedContext.cycles).toBe("incomplete");
     expect(failedContext.reply).toBe("incomplete");
   });
+
+  it("does not treat a missing activity object as a confirmed zero", () => {
+    const next = activityAfterProjectRead({
+      previous: null,
+      incoming: undefined,
+      httpOk: true,
+      snapshotPresent: false,
+    });
+    expect(next.activity).toBeNull();
+    expect(next.freshness).toBe("unavailable");
+  });
+
+  it("keeps a confirmed turn when the projection read fails", () => {
+    expect(
+      turnProjectionRefreshOutcome({ metierConfirmed: true, projectionFailed: true }),
+    ).toBe("preserve-metier");
+    expect(
+      turnProjectionRefreshOutcome({ metierConfirmed: false, projectionFailed: true }),
+    ).toBe("metier-unconfirmed");
+  });
+
+  it("rejects a preload that is only an HTTP success", () => {
+    expect(
+      contextPreloadVerdict({
+        expectedProjectId: "p1",
+        httpOk: true,
+        body: { project: { id: "p2" }, knowledge: {}, activity: {} },
+      }),
+    ).toBe("failed");
+    expect(
+      contextPreloadVerdict({
+        expectedProjectId: "p1",
+        httpOk: true,
+        body: { project: { id: "p1" } },
+      }),
+    ).toBe("partial");
+    expect(
+      contextPreloadVerdict({
+        expectedProjectId: "p1",
+        httpOk: true,
+        body: { project: { id: "p1" }, knowledge: null, activity: null },
+      }),
+    ).toBe("partial");
+    expect(
+      contextPreloadVerdict({
+        expectedProjectId: "p1",
+        httpOk: true,
+        body: { project: { id: "p1" }, knowledge: { subjects: [] }, activity: { openPointsCount: 0 } },
+      }),
+    ).toBe("ready");
+  });
+
+  it("does not announce preparation complete while context is unfinished or qualification is absent", () => {
+    const loading = preparationAnnouncement({
+      context: "loading",
+      qualificationStatus: "PROPOSED",
+      dwellComplete: true,
+      projectName: "Atlas",
+    });
+    expect(loading.announceComplete).toBe(false);
+    expect(loading.kicker).toContain("CONTEXTE EN CHARGEMENT");
+    const absent = preparationAnnouncement({
+      context: "ready",
+      qualificationStatus: null,
+      dwellComplete: true,
+      projectName: "Atlas",
+    });
+    expect(absent.announceComplete).toBe(false);
+    expect(absent.title).not.toContain("Préparation terminée");
+  });
+
+  it("rejects an older read after a newer one has been opened, including on another project", () => {
+    const first = openProjectionRead({ currentGeneration: 0, projectId: "p1" });
+    const second = openProjectionRead({
+      currentGeneration: first.generation,
+      projectId: "p1",
+    });
+    expect(
+      projectionReadApplies({
+        request: first.request,
+        latestGeneration: second.generation,
+        currentProjectId: "p1",
+      }),
+    ).toBe(false);
+    expect(
+      projectionReadApplies({
+        request: second.request,
+        latestGeneration: second.generation,
+        currentProjectId: "p2",
+      }),
+    ).toBe(false);
+    expect(
+      shouldApplyDurableRefresh({
+        request: second.request,
+        currentGeneration: second.generation,
+        currentProjectId: "p1",
+      }),
+    ).toBe(true);
+  });
 });
```
