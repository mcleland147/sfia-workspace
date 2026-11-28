# Review Pack — SFIA Studio Next — Complément lot 4, intégrité de l'activité

Cycle: 08 — Delivery / implémentation
Profil: Critical
Typologie: EVOL — complément correctif borné
Jalon: R5 / ML5
Review level: Full
Mono-cycle: oui
Stub: non
Date: 2026-11-28T11:47+01:00

Entrée: NOT READY — complément correctif ciblé, revue ChatGPT du candidat 7c2cd338.

## 1. Identité et mandat

Corriger uniquement ACT-F1, ACT-F2 et ACT-F3. Ne pas reconstruire le lot 4. Conserver la séparation conversation/activité, le contrôle d'accès projet et le journal existant.

Pas de nouvelle persistance, pas de LIVE, pas de promotion, pas de lot 5, pas de CI distante.

## 2. Git Truth Check

Worktree: /Users/morris/Projects/sfia-wt-next-ml5-20261123
Branche: sfia/next-ml5-integrated-delivery-20261123
HEAD de départ = origin: 7c2cd338ab9c6932c491fb8baf5c4e6390d757b8
Tree de départ: cda1dcd95eebf54ed419dea60fc6a00b77829632
origin/main = merge-base: 997897fd7cf914771e7d08e8030dc7123fab7d25
Suivi: 66b5360657e351f0577ff9bb3f98207105fd3761, blob 9b6ff5affb063babadc00ddddd221872e02069ab, v0.12 §17
Handoff précédent: 4433f9e3a59135bbcf1f62e0f64bfd570d8fe6ea, blob aae58378290bcf2a36ae5c11f0d417f20ac60568
Untracked préexistants conservés: .tmp-sfia-review/ et web/.tmp-sfia-review/
Aucune divergence. main non synchronisé.

## 3. Sources lues

Suivi v0.12 §17.1 à §17.3, et le rappel §9.1 / §16 déjà portés par ce suivi.
Code du candidat 7c2cd338 aux lignes citées par la revue: activity-labels.ts (slice, fold, titres), preparations/page.tsx et projects/page.tsx (époque, curseur, finally), NoraConversation.tsx (loaded), service.ts (catch de la boucle).
NoraLiveActivity.tsx, pagination existante de 40.
As-built et delivery-history du lot 4.
Frames produit déjà connues: 12.01 node 1210:233, 12.10 node 1212:895. Figma non modifié.

## 4. Matrice

FINDING ACT-F1 — projection tronquée et annonce ouverte
CAUSE: buildActivitySteps se terminait par slice(-8), et buildActivityGroups comptait et détaillait ce sous-ensemble. foldOperationStates ne gardait qu'un index ouvert: un second RUNNING écrasait l'index et laissait le premier courant. Une seule comparaison, la dernière, alimentait le résumé.
CORRECTION: plus de troncature. Le compteur et le détail portent sur toutes les opérations. L'affichage pagine par 40. Une annonce répétée de la même identité établie se ferme avec le terminal. Sans identité d'opération, aucune corrélation n'est inventée à partir du seul sourceRef. Chaque comparaison attestée est un détail. Une limite reste une limite.
PREUVE: ml5-activity-hierarchy.test.ts — 10 opérations, RUNNING répété puis terminal, deux comparaisons, opération partielle conservée. activity-labels et granularité des sources PASS.
VERDICT: corrigé.

FINDING ACT-F2 — lecture terminale neutralisée ou partielle
CAUSE: le sas invalide l'époque avant finally, donc la lecture finale retourne tout de suite. Le projet vide les événements puis relit avec afterSequence déjà avancé. Le garde d'époque s'arrêtait avant res.json(). L'attente de cette lecture bloquait setBusy sans borne.
CORRECTION: arrêt de l'intervalle, instantané complet du tour si la lecture aboutit dans les 500 ms, contrôle d'époque, de périmètre et de tour après chaque await y compris le corps JSON, puis invalidation de l'époque. Les événements ne sont plus vidés avant cette lecture. Un GET tardif ne s'applique pas. setBusy(false) suit la borne, pas la disponibilité du réseau. Une erreur de lecture ne recrée pas d'intention pending.
PREUVE: activityReadStillApplies couvre époque, projet et tour. Le câblage est dans les deux pages. Le parcours navigateur d'un tour réel reste reporté.
VERDICT: corrigé dans le code, preuve navigateur reportée.

FINDING ACT-F3 — historique non relisable, perte d'inscription, titre d'opération
CAUSE: loaded.current restait vrai après un échec. Un corps sans tableau events devenait un historique vide. Un catch entourait toute la boucle d'append. projectMissionHeadline et resolveActivityDisplayHeadline privilégiaient la comparaison, une source ou le titre reçu du poller.
CORRECTION: une erreur HTTP, réseau ou payload invalide reste une erreur et autorise Relire. Un tableau vide est le seul historique vide. Une réponse tardive dont l'URL a changé est ignorée. turnStatus est affiché tel quel. Chaque fait est inscrit séparément; ceux qui échouent reviennent dans la réponse, sans recréer l'effet. Le titre de niveau 1 est l'objectif structuré, sinon « Orientation du travail ». ownerRef n'est persisté que s'il existe; aucun effectId synthétique.
PREUVE: interpretActivityHistoryPayload, resolveActivityDisplayHeadline, appendActivityFactsSafely (2 enregistrés, 1 manqué). Les restitutions de cycle, refus et Journal du lot 4 restent couvertes par les tests rejoués.
VERDICT: corrigé.

## 5. Fonctionnement final

Niveau 1: objectif structuré, ou orientation générique. Pas le dernier fichier, pas la dernière comparaison.
Niveau 2: groupes issus des phases réellement émises. L'état ne reste pas courant à cause d'une annonce déjà fermée, et ne devient pas réussi si une opération identifiée reste limitée ou inconnue.
Niveau 3: toutes les opérations et toutes les comparaisons, paginées à l'affichage.
Historique: lecture à la demande du tour, reprise après échec, pas de polling permanent.
Conversation: le résultat métier, les refus et les UNKNOWN restent. Une confirmation qui n'a pas pu être inscrite dans l'activité est dite indisponible dans l'activité et reste lisible dans la réponse.

## 6. Git Review Index

Base: 7c2cd338ab9c6932c491fb8baf5c4e6390d757b8
HEAD: 9bc9f3462f1e0eb91122bb6060efc23a08b71a7a
Tree: 5e7e8822e3e34b1c7df2f060a305e140a824d748
URL: https://github.com/mcleland147/sfia-workspace/commit/9bc9f3462f1e0eb91122bb6060efc23a08b71a7a
Fast-forward 7c2cd338..9bc9f346. Local = origin.
14 fichiers, +510 / −173. Aucune création. CI non exécutée.

## 7. Tests

Réexécutés sur ce delta, 81 PASS / 10 fichiers, dont 29 rejoués après le correctif de typage du résumé de comparaison:

- 10 opérations visibles et comptées
- annonces répétées puis terminal: groupe terminé
- deux comparaisons conservées, lecture partielle non devenue réussite
- objectif stable malgré un titre de consultation
- payload invalide distinct d'un historique vide
- lecture refusée si l'époque ou le projet a changé
- un append en échec n'empêche pas les autres
- accès projet du lot 4 rejoué: bon projet, autre projet, autre Pilote, tour inconnu
- connaissance, pilotage, publication, granularité des sources: PASS

Preuve réutilisée sans nouveau parcours: le test PG d'isolation du lot 4, SHA de première exécution 7c2cd338, rejoué ici avec le cas d'append ajouté.
Build isolé STUDIO_E2E=1: exit 0, .next-e2e BUILD 7Z10s14AWOUPYgc2tQqSG. .next DEV inchangé, BUILD 31044BhyAFqJ_OpeQJS_K. Lint ciblé sans erreur nouvelle. git diff --check propre.
tsc global hors lot non retraité.

## 8. Reports RECETTE

ACT-01 à ACT-05 restent DEFERRED TO RECETTE. Ce ne sont pas des PASS.

ACT-01 Travail simple. Objectif structuré ou « Orientation du travail ». Pas de fichier comme titre. Conversation sur le résultat.
ACT-02 Sources et comparaison. Sources distinctes, consultations, et chaque paire V1/V2 encore lisible dans le détail après la fin du tour.
ACT-03 Effets multiples. Plus de huit confirmations accessibles. Le corps ne les répète pas, sauf celles qui n'ont pas pu être inscrites.
ACT-04 Historique. Après un second tour et un rechargement, le premier tour se relit en entier. Une erreur de lecture propose Relire et n'affiche pas un vide.
ACT-05 Limite. Une opération partielle ou UNKNOWN reste visible à côté d'une opération réussie. Pas de succès global.

Reproduction: candidat RECETTE figé sous GO, projet isolé, Nora selon le GO du moment. Preuve: captures du fil et de l'historique déplié, turnCommandId, extrait d'événements. Gate: requis avant acceptation Livraison 1, non bloquant pour cette sortie technique.

DOC-REC-01 à 06, PROJ-REC-01/02/03 et COG-REC-01 restent ouverts.

## 9. Risques et dette

Le dépliage historique du sas reste hors de ce complément. Sa lecture terminale est corrigée. Dette déjà identifiée, sans second journal.
La lecture terminale est abandonnée après 500 ms. Les événements déjà reçus restent; l'historique serveur reste la lecture complète. Ce n'est pas un historique partiel présenté comme complet.
Pas de nouvelle table. Pas d'identifiant synthétique persisté comme corrélation FinOps.

## 10. Fake/Real

DET: fonctions de projection, de lecture et d'inscription réellement appelées.
PG: sfia_next_e2e, données isolées, aucun effet métier créé.
BROWSER: non rejoué. Le harness 12.01/12.10 du candidat précédent n'a pas de turnCommandId. LIVE NOT RUN.
DEV :3100 PID 55011 et RECETTE :3200 PID 58965 inchangés. Policy RECETTE non touchée.

## 11. Content coverage

Les 14 fichiers modifiés sont dans le diff intégral. Aucune création. Aucune couverture N/A.

## 12. Diff intégral 7c2cd338..9bc9f346

```
diff --git a/projects/sfia-studio-next/construction/as-built-ml5-activite-live-hierarchisee-20261125.md b/projects/sfia-studio-next/construction/as-built-ml5-activite-live-hierarchisee-20261125.md
index 2fdb6bfa..46d64bde 100644
--- a/projects/sfia-studio-next/construction/as-built-ml5-activite-live-hierarchisee-20261125.md
+++ b/projects/sfia-studio-next/construction/as-built-ml5-activite-live-hierarchisee-20261125.md
@@ -28,3 +28,12 @@ Les preuves du 25 novembre ci-dessus restent inchangées. Ajout factuel :
 - Les confirmations d'enregistrement au Journal et « L'état du projet a été mis à jour » quittent le corps conversationnel et sont appendues dans `nora_activity_events` (`nora.effect.knowledge`, `nora.effect.pilotage`). Les refus, conflits, résultats partiels et UNKNOWN restent dans la réponse.
 - L'historique d'une réponse charge `GET /api/projects/{projectId}/turns/{turnCommandId}/activity` à l'ouverture. La route vérifie Pilote → projet → conversation → tour avant la lecture.
 - Le polling d'activité fait une lecture terminale après l'arrêt de l'intervalle.
+
+## Complément 2026-11-28 — intégrité de la projection
+
+- Le détail d'activité n'est plus limité aux huit dernières opérations. Le compteur porte sur l'ensemble. L'affichage pagine par 40, comme la carte déjà en place.
+- Chaque comparaison documentaire attestée reste dans le détail. Le résumé compte les comparaisons lorsqu'il y en a plusieurs.
+- Une annonce répétée de la même opération se ferme avec son événement terminal. Deux opérations identifiées sur une même source restent distinctes. Une limite antérieure n'est pas convertie en réussite.
+- Le titre de premier niveau est l'objectif structuré, ou « Orientation du travail ». Une consultation, un fichier ou la dernière ligne reçue par le poller ne prend pas cette place.
+- La lecture terminale du sas et du projet est un instantané du tour, borné à 500 ms, contrôlé après la lecture du corps, puis l'époque est invalidée. Elle ne vide plus les événements avant de relire seulement la fin du tour.
+- Un échec de lecture de l'historique n'est pas un historique vide et peut être relancé. Un échec d'inscription d'une confirmation n'empêche pas les suivantes ; les lignes non inscrites restent dans la réponse.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 87ccd4fd..cae1a7bb 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,14 @@
+## delivery_id: DELIV-2026-11-28-ML5-NORA-ACTIVITY-INTEGRITY-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — complément lot 4, intégrité de l'activité
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `7c2cd338ab9c6932c491fb8baf5c4e6390d757b8`
+- **commit**: `fix(next): preserve complete Nora activity history`
+- **schema_revision**: unchanged
+- **scope**: détail complet et compteurs sur l'ensemble, corrélation des annonces répétées, lecture terminale bornée, historique relisable, confirmations non perdues en silence, objectif distinct des opérations
+- **classe**: NO RELEASE · compatible corrective · LIVE NOT RUN · CI NOT RUN
+
 ## delivery_id: DELIV-2026-11-28-ML5-NORA-ACTIVITY-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index cf3ab260..48525afa 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -23,7 +23,7 @@ import {
   resolveSasPresentationStage,
   sasPresentationCopy,
 } from "@/components/figma/sas-presentation";
-import { projectActivityLabel } from "@/domains/conversation/activity-labels";
+import { activityReadStillApplies } from "@/domains/conversation/activity-labels";
 import {
   clearPrepComposerDraft,
   readPrepComposerDraft,
@@ -487,26 +487,39 @@ export default function PreparationPage() {
     let lastActivitySeq = 0;
     let knownTurnCommandId: string | null = null;
     const pollEpoch = ++activityPollEpochRef.current;
-    const pollLiveActivity = async () => {
+    const pollLiveActivity = async (opts?: { terminal?: boolean }) => {
+      const scopeId = preparationId;
+      const still = (turnReceived: string | null) =>
+        activityReadStillApplies({
+          epochAtStart: pollEpoch,
+          epochNow: activityPollEpochRef.current,
+          scopeAtStart: scopeId,
+          scopeNow: preparationId,
+          turnExpected: knownTurnCommandId,
+          turnReceived,
+        });
       try {
-        if (pollEpoch !== activityPollEpochRef.current) return;
+        if (!still(null)) return;
         if (!knownTurnCommandId) {
           const look = await fetch(
             `/api/preparations/${preparationId}/turns/by-key/${encodeURIComponent(clientTurnKey)}`,
           );
+          if (!still(null)) return;
           if (look.ok) {
             const lj = (await look.json()) as { turnCommandId?: string | null };
+            if (!still(null)) return;
             if (lj.turnCommandId) knownTurnCommandId = lj.turnCommandId;
           }
         }
         if (!knownTurnCommandId) return;
-        if (pollEpoch !== activityPollEpochRef.current) return;
-        const q = lastActivitySeq > 0 ? `?afterSequence=${lastActivitySeq}` : "";
+        if (!still(null)) return;
+        const q =
+          opts?.terminal || lastActivitySeq <= 0 ? "" : `?afterSequence=${lastActivitySeq}`;
         const act = await fetch(
           `/api/preparations/${preparationId}/turns/${knownTurnCommandId}/activity${q}`,
         );
+        if (!still(null)) return;
         if (!act.ok) return;
-        if (pollEpoch !== activityPollEpochRef.current) return;
         const aj = (await act.json()) as {
           events?: Array<{
             sequence: number;
@@ -519,10 +532,13 @@ export default function PreparationPage() {
           }>;
           turnCommandId?: string;
         };
-        if (aj.turnCommandId && knownTurnCommandId && aj.turnCommandId !== knownTurnCommandId) {
+        if (!still(aj.turnCommandId ?? null)) return;
+        if (!Array.isArray(aj.events)) return;
+        if (opts?.terminal) {
+          setLiveActivityEvents(aj.events);
           return;
         }
-        const batch = aj.events ?? [];
+        const batch = aj.events;
         if (batch.length === 0) return;
         setLiveActivityEvents((prev) => {
           const seen = new Set(prev.map((e) => e.sequence));
@@ -534,9 +550,8 @@ export default function PreparationPage() {
         });
         const last = batch[batch.length - 1]!;
         lastActivitySeq = Math.max(lastActivitySeq, last.sequence);
-        setLiveActivityHeadline(projectActivityLabel(last).slice(0, 160));
       } catch {
-        /* observational poll */
+        /* observational poll — does not change the turn result */
       }
     };
     const activityPollTimer = window.setInterval(() => {
@@ -559,13 +574,10 @@ export default function PreparationPage() {
       } catch {
         j = { errorCategory: "RESPONSE_PARSE_FAILED" };
       }
-      // RB-01/02 — fence late polls before terminal clear (do not re-hydrate idle card).
-      activityPollEpochRef.current += 1;
       if (res.ok) {
         messageTurnKeyRef.current = null;
         setMessages((j.messages as typeof messages) ?? []);
         setNoraActivity("idle");
-        setLiveActivityEvents([]);
         setLiveActivityHeadline("");
         const mp = j.missionProjection as
           | { clientIntentKey?: string; status?: string }
@@ -620,7 +632,13 @@ export default function PreparationPage() {
       setStatus("échec réseau — intention de tour conservée");
     } finally {
       window.clearInterval(activityPollTimer);
-      await pollLiveActivity();
+      await Promise.race([
+        pollLiveActivity({ terminal: true }),
+        new Promise((resolve) => window.setTimeout(resolve, 500)),
+      ]);
+      if (activityPollEpochRef.current === pollEpoch) {
+        activityPollEpochRef.current += 1;
+      }
       setBusy(false);
     }
   }
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index baad7193..5b5d60fb 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -56,7 +56,7 @@ import {
   type ActivityFreshness,
   type ActivitySnapshot,
 } from "@/lib/project-projection-sync";
-import { projectActivityLabel } from "@/domains/conversation/activity-labels";
+import { activityReadStillApplies } from "@/domains/conversation/activity-labels";
 import {
   conversationalClientCommandKey,
   mayClearComposerDraftOnReconcile,
@@ -2991,26 +2991,39 @@ export default function ProjectPage() {
     let knownTurnCommandId: string | null = null;
     // L1.5 — fence late polls from a previous turn after this send ends.
     const pollEpoch = ++activityPollEpochRef.current;
-    const pollLiveActivity = async () => {
+    const pollLiveActivity = async (opts?: { terminal?: boolean }) => {
+      const scopeId = params.projectId;
+      const still = (turnReceived: string | null) =>
+        activityReadStillApplies({
+          epochAtStart: pollEpoch,
+          epochNow: activityPollEpochRef.current,
+          scopeAtStart: scopeId,
+          scopeNow: params.projectId,
+          turnExpected: knownTurnCommandId,
+          turnReceived,
+        });
       try {
-        if (pollEpoch !== activityPollEpochRef.current) return;
+        if (!still(null)) return;
         if (!knownTurnCommandId) {
           const look = await fetch(
             `/api/preparations/${preparationId}/turns/by-key/${encodeURIComponent(clientTurnKey)}`,
           );
+          if (!still(null)) return;
           if (look.ok) {
             const lj = (await look.json()) as { turnCommandId?: string | null };
+            if (!still(null)) return;
             if (lj.turnCommandId) knownTurnCommandId = lj.turnCommandId;
           }
         }
         if (!knownTurnCommandId) return;
-        if (pollEpoch !== activityPollEpochRef.current) return;
-        const q = lastActivitySeq > 0 ? `?afterSequence=${lastActivitySeq}` : "";
+        if (!still(null)) return;
+        const q =
+          opts?.terminal || lastActivitySeq <= 0 ? "" : `?afterSequence=${lastActivitySeq}`;
         const act = await fetch(
           `/api/projects/${params.projectId}/turns/${knownTurnCommandId}/activity${q}`,
         );
+        if (!still(null)) return;
         if (!act.ok) return;
-        if (pollEpoch !== activityPollEpochRef.current) return;
         const aj = (await act.json()) as {
           events?: Array<{
             sequence: number;
@@ -3023,10 +3036,13 @@ export default function ProjectPage() {
           }>;
           turnCommandId?: string;
         };
-        if (aj.turnCommandId && knownTurnCommandId && aj.turnCommandId !== knownTurnCommandId) {
+        if (!still(aj.turnCommandId ?? null)) return;
+        if (!Array.isArray(aj.events)) return;
+        if (opts?.terminal) {
+          setLiveActivityEvents(aj.events);
           return;
         }
-        const batch = aj.events ?? [];
+        const batch = aj.events;
         if (batch.length === 0) return;
         setLiveActivityEvents((prev) => {
           const seen = new Set(prev.map((e) => e.sequence));
@@ -3038,9 +3054,8 @@ export default function ProjectPage() {
         });
         const last = batch[batch.length - 1]!;
         lastActivitySeq = Math.max(lastActivitySeq, last.sequence);
-        setLiveActivityHeadline(projectActivityLabel(last).slice(0, 160));
       } catch {
-        /* observational poll */
+        /* observational poll — does not change the turn result */
       }
     };
     const activityPollTimer = window.setInterval(() => {
@@ -3117,7 +3132,6 @@ export default function ProjectPage() {
         if (prepared?.contractId) {
           void openContractViewer(prepared.contractId);
         }
-        void pollLiveActivity();
         const serverKind = (j.nextTurnKind as ThreadTurnKind | undefined) ?? "INCERTAIN";
         const independent = serverKind === "DIALOGUE_INDEPENDANT";
         const effectBlocked = Boolean(j.pendingEffectBlocked);
@@ -3132,7 +3146,6 @@ export default function ProjectPage() {
         const preserveMetierPending =
           (independent || effectBlocked || distinctFromUnresolved) && Boolean(pendingBefore);
         setMessages((j.messages as Msg[]) ?? []);
-        setLiveActivityEvents([]);
         setLiveActivityHeadline("");
         {
           const mode = String(j.noraMode ?? "").trim();
@@ -3488,8 +3501,13 @@ export default function ProjectPage() {
       }
     } finally {
       if (activityPollTimer != null) window.clearInterval(activityPollTimer);
-      await pollLiveActivity();
-      activityPollEpochRef.current += 1;
+      await Promise.race([
+        pollLiveActivity({ terminal: true }),
+        new Promise((resolve) => window.setTimeout(resolve, 500)),
+      ]);
+      if (activityPollEpochRef.current === pollEpoch) {
+        activityPollEpochRef.current += 1;
+      }
       setBusy(false);
     }
   }
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index d316bc2c..8af3d7d3 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -15,7 +15,10 @@ import {
   compositionAnchorsReferences,
 } from "@/domains/conversation/visual-composition";
 import { NoraLiveActivity } from "@/components/figma/NoraLiveActivity";
-import { buildActivityGroups } from "@/domains/conversation/activity-labels";
+import {
+  buildActivityGroups,
+  interpretActivityHistoryPayload,
+} from "@/domains/conversation/activity-labels";
 import { NoraSharedComposer } from "@/components/figma/NoraSharedComposer";

 export type NoraMsg = {
@@ -460,45 +463,78 @@ const ACTIVITY_STATE_LABEL: Record<string, string> = {
   failed: "Non abouti",
 };

+type HistoryEvent = {
+  sequence: number;
+  nature: string;
+  status: string;
+  summary: string;
+  phase: string;
+  sourceRef?: string | null;
+  detail?: Record<string, unknown> | null;
+};
+
 function NoraTurnActivityHistory(props: { href: string; fallback?: string | null }) {
-  const [events, setEvents] = useState<
-    Array<{
-      sequence: number;
-      nature: string;
-      status: string;
-      summary: string;
-      phase: string;
-      sourceRef?: string | null;
-      detail?: Record<string, unknown> | null;
-    }> | null
-  >(null);
+  const [events, setEvents] = useState<HistoryEvent[] | null>(null);
+  const [turnStatus, setTurnStatus] = useState<string | null>(null);
   const [error, setError] = useState<string | null>(null);
-  const loaded = useRef(false);
+  const [phase, setPhase] = useState<"idle" | "loading" | "ready" | "empty" | "error">("idle");
+  const [visible, setVisible] = useState(40);
+  const hrefRef = useRef(props.href);
+  hrefRef.current = props.href;
+
+  useEffect(() => {
+    setEvents(null);
+    setTurnStatus(null);
+    setError(null);
+    setPhase("idle");
+    setVisible(40);
+  }, [props.href]);

   async function load() {
-    if (loaded.current) return;
-    loaded.current = true;
+    if (phase === "loading" || phase === "ready" || phase === "empty") return;
+    const requested = props.href;
+    setPhase("loading");
+    setError(null);
     try {
-      const res = await fetch(props.href);
+      const res = await fetch(requested);
+      if (hrefRef.current !== requested) return;
       if (!res.ok) {
+        setPhase("error");
         setError("Lecture de l'activité indisponible pour ce tour.");
         return;
       }
-      const body = (await res.json()) as { events?: typeof events };
-      setEvents(body.events ?? []);
+      const body = (await res.json()) as unknown;
+      if (hrefRef.current !== requested) return;
+      const read = interpretActivityHistoryPayload(body);
+      if (read.kind === "invalid") {
+        setPhase("error");
+        setError("Lecture de l'activité indisponible — réponse inexploitable.");
+        return;
+      }
+      setTurnStatus(read.turnStatus);
+      if (read.kind === "empty") {
+        setEvents([]);
+        setPhase("empty");
+        return;
+      }
+      setEvents(read.events as HistoryEvent[]);
+      setPhase("ready");
     } catch {
+      if (hrefRef.current !== requested) return;
+      setPhase("error");
       setError("Lecture de l'activité indisponible pour ce tour.");
     }
   }

-  const groups = events
-    ? buildActivityGroups(
-        events.map((ev) => ({
-          ...ev,
-          detail: ev.detail ?? undefined,
-        })),
-      )
-    : [];
+  const groups =
+    phase === "ready" && events
+      ? buildActivityGroups(
+          events.map((ev) => ({
+            ...ev,
+            detail: ev.detail ?? undefined,
+          })),
+        )
+      : [];

   return (
     <details
@@ -509,11 +545,17 @@ function NoraTurnActivityHistory(props: { href: string; fallback?: string | null
       }}
     >
       <summary>Activité de cette réponse</summary>
-      {error ? <p>{error}</p> : null}
-      {!events && props.fallback ? <p>{props.fallback}</p> : null}
-      {events && groups.length === 0 ? (
-        <p>Aucun événement durable pour ce tour.</p>
+      {turnStatus ? <p>Issue du tour : {turnStatus}</p> : null}
+      {error ? (
+        <p>
+          {error}{" "}
+          <button type="button" onClick={() => void load()}>
+            Relire
+          </button>
+        </p>
       ) : null}
+      {phase === "idle" && props.fallback ? <p>{props.fallback}</p> : null}
+      {phase === "empty" ? <p>Aucun événement durable pour ce tour.</p> : null}
       {groups.map((group) => (
         <div key={group.key} data-testid={`nora-activity-group-${group.key}`}>
           <p>
@@ -522,7 +564,7 @@ function NoraTurnActivityHistory(props: { href: string; fallback?: string | null
           {group.resultSummary ? <p>{group.resultSummary}</p> : null}
           {group.details.length > 0 ? (
             <ul>
-              {group.details.map((detail) => (
+              {group.details.slice(0, visible).map((detail) => (
                 <li key={detail.key}>
                   {detail.title} · {detail.coverage}
                 </li>
@@ -531,6 +573,11 @@ function NoraTurnActivityHistory(props: { href: string; fallback?: string | null
           ) : null}
         </div>
       ))}
+      {groups.some((group) => group.details.length > visible) ? (
+        <button type="button" onClick={() => setVisible((count) => count + 40)}>
+          Afficher la suite
+        </button>
+      ) : null}
     </details>
   );
 }
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
index b36c2c44..54d72739 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraLiveActivity.tsx
@@ -209,6 +209,8 @@ export function NoraLiveActivity(props: {
                         <span className="fig-nora-live-activity-source-cov">
                           {d.coverage === "DISCOVERED"
                             ? "Identifiée"
+                            : d.coverage === "COMPARE"
+                              ? "Comparaison"
                             : d.coverage === "CONSULTED" ||
                                 d.coverage === "VERIFIED" ||
                                 d.coverage === "COMPLETE" ||
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts b/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
index aa8e5842..a19247a3 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
@@ -319,10 +319,10 @@ function correlationRef(
     detailString(ev.detail, "operationId") ||
     detailString(ev.detail, "effectId") ||
     detailString(ev.detail, "ownerRef") ||
+    detailString(ev.detail, "operation") ||
     "";
   if (op) return `op:${op}`;
-  const ref = (ev.sourceRef || detailString(ev.detail, "ref") || "").trim();
-  if (ref) return `ref:${ref}`;
+  // One orientation stream per phase. A source reference alone is not an operation identity.
   if (/objective|investigation\.engaged/i.test(ev.phase || "")) return `phase:${ev.phase}`;
   return null;
 }
@@ -336,11 +336,16 @@ function foldOperationStates(
   for (const ev of sorted) {
     const st = authoritativeState(ev);
     const ref = correlationRef(ev);
-    if (ref && open.has(ref) && (st === "done" || st === "failed" || st === "limited")) {
+    const terminal = st === "done" || st === "failed" || st === "limited";
+    if (ref && terminal && open.has(ref)) {
       states[open.get(ref)!] = st;
       open.delete(ref);
       continue;
     }
+    if (ref && st === "current" && open.has(ref)) {
+      // Repeated announcement of the same operation — do not leave an extra current.
+      continue;
+    }
     states.push(st);
     if (ref && st === "current") open.set(ref, states.length - 1);
   }
@@ -489,7 +494,7 @@ export function buildActivitySteps(
       byId.get(id)!.sequence = prev.sequence;
     }
   }
-  return [...byId.values()].sort((a, b) => a.sequence - b.sequence).slice(-8);
+  return [...byId.values()].sort((a, b) => a.sequence - b.sequence);
 }

 /** Compact API used by pollers — replaces technical `NATURE: summary` headlines. */
@@ -648,33 +653,40 @@ export function buildActivityGroups(
       if (discovered && !consulted && consultations === 0) {
         bits.push(`${discovered} identifiée${discovered > 1 ? "s" : ""}`);
       }
-      const compareLabel = [...list]
-        .reverse()
-        .map((e) => (e.summary || "").trim())
-        .find((s) => /^Comparaison documentaire\b/i.test(s) && !looksTechnical(s));
+      const comparisons = list
+        .filter((e) => /^Comparaison documentaire\b/i.test((e.summary || "").trim()) && !looksTechnical(e.summary || ""))
+        .sort((a, b) => a.sequence - b.sequence);
       const bitsLine = bits.join(" · ");
-      resultSummary = compareLabel
-        ? [compareLabel.slice(0, 110), bitsLine].filter(Boolean).join(" · ")
-        : bitsLine || null;
+      const compareLine =
+        comparisons.length > 1
+          ? `${comparisons.length} comparaisons`
+          : (comparisons[0]?.summary ?? "").trim().slice(0, 110);
+      resultSummary = [compareLine, bitsLine].filter(Boolean).join(" · ") || null;
       details = sources.map((s) => ({
         key: s.key,
         title: s.title,
         coverage: s.coverage,
         kind: s.kind,
       }));
-      // Keep each consultation operation visible when multiple reads of one source.
       if (consultations > sources.length) {
         const steps = buildActivitySteps(list).filter(
           (s) => !isGenericOrientationSummary(s.label),
         );
-        if (steps.length > details.length) {
-          details = steps.map((s) => ({
-            key: s.key,
-            title: s.label,
-            coverage: s.state.toUpperCase(),
-            kind: "STEP",
-          }));
-        }
+        details = steps.map((step) => ({
+          key: step.key,
+          title: step.label,
+          coverage: step.state.toUpperCase(),
+          kind: "STEP",
+        }));
+      }
+      for (const comparison of comparisons) {
+        const title = (comparison.summary || "").trim();
+        details.push({
+          key: `compare:${comparison.sequence}`,
+          title,
+          coverage: "COMPARE",
+          kind: "COMPARE",
+        });
       }
     } else if (key === "understand") {
       // IT-01 — keep a single group title; do not echo ANNOUNCED/COMPLETED orientation blurbs.
@@ -683,7 +695,7 @@ export function buildActivityGroups(
     } else {
       const steps = buildActivitySteps(list).filter((s) => !isGenericOrientationSummary(s.label));
       resultSummary =
-        steps.length > 1 ? `${steps.length} opérations observées` : steps[0]?.label || null;
+        steps.length > 1 ? `${steps.length} opérations` : steps[0]?.label || null;
       details = steps.map((s) => ({
         key: s.key,
         title: s.label,
@@ -720,86 +732,97 @@ export function buildActivityGroups(
   return groups;
 }

+function isOperationHeadline(text: string): boolean {
+  return /^(Consultation Git|Comparaison documentaire|Document consulté|Source web)\b/i.test(
+    text.trim(),
+  );
+}
+
 /**
- * Mission-level headline: prefer objective events; never last filename alone.
- * When richer source/compare activity exists, prefer it over generic orientation
- * so the LIVE card does not only repeat « Orientation du travail ».
+ * Level-1 title: the structured objective, or an honest generic orientation.
+ * A consultation, a file, a comparison or the last polled event is not the objective.
  */
 export function projectMissionHeadline(
   events: Array<ActivityLabelInput & { sequence: number; nature: string }>,
 ): string {
-  const compareOrSource = [...events]
-    .reverse()
-    .find((e) => {
-      const s = (e.summary || "").trim();
-      if (/^Comparaison documentaire\b/i.test(s)) return true;
-      // Never promote a single Git file consultation into the mission title.
-      if (/^Consultation Git\b/i.test(s)) return false;
-      if (
-        /source\./i.test(e.phase || "") &&
-        s &&
-        !looksTechnical(s) &&
-        !isGenericOrientationSummary(s)
-      ) {
-        return e.nature === "OBSERVED" || e.nature === "COMPLETED";
-      }
-      return false;
-    });
-  if (compareOrSource?.summary && !looksTechnical(compareOrSource.summary)) {
-    return compareOrSource.summary.slice(0, 160);
-  }
-  const objective = [...events]
-    .reverse()
-    .find(
-      (e) =>
-        /objective|investigation\.engaged/i.test(e.phase || "") ||
-        detailString(e.detail, "objective"),
+  const objective = [...events].reverse().find((e) => {
+    const titled = detailString(e.detail, "metierTitle") || detailString(e.detail, "objective");
+    return (
+      Boolean(titled) || /objective|investigation\.engaged/i.test(e.phase || "")
     );
+  });
   if (objective) {
-    const o = detailString(objective.detail, "objective") || objective.summary;
-    if (o && !looksTechnical(o) && !/^Prise en charge/i.test(o)) {
-      // Collapse generic orientation blurbs to the stable group title (IT-01).
-      if (isGenericOrientationSummary(o)) return "Orientation du travail";
+    const o =
+      detailString(objective.detail, "metierTitle") ||
+      detailString(objective.detail, "objective") ||
+      "";
+    if (
+      o &&
+      !looksTechnical(o) &&
+      !isGenericOrientationSummary(o) &&
+      !isOperationHeadline(o) &&
+      !/^Prise en charge/i.test(o)
+    ) {
       return o.slice(0, 160);
     }
   }
-  const last = events[events.length - 1];
-  if (last) {
-    const headline = projectActivityLabel(last).slice(0, 160);
-    if (headline && !/Consultation Git —/i.test(headline)) {
-      if (isGenericOrientationSummary(headline)) return "Orientation du travail";
-      return headline;
-    }
-  }
-  return "Activité Nora";
+  return "Orientation du travail";
 }

-/** Idle card: drop headline when it only repeats a group title or orientation blurb. */
+/** Level-1 title. A polled operation must not replace the objective. */
 export function resolveActivityDisplayHeadline(input: {
   active: boolean;
   propsHeadline?: string | null;
   events: Array<ActivityLabelInput & { sequence: number; nature: string }>;
   groupTitles: string[];
 }): string | null {
+  void input.groupTitles;
+  const mission = input.events.length ? projectMissionHeadline(input.events) : "";
+  if (mission && mission !== "Orientation du travail") return mission.slice(0, 160);
   const fromProps = (input.propsHeadline || "").trim();
-  const fromMission = input.events.length
-    ? projectMissionHeadline(input.events)
-    : input.active
-      ? "Activité en cours"
-      : "Activité";
-  let headline = fromProps || fromMission;
-  if (fromProps && isGenericOrientationSummary(fromProps)) {
-    headline = fromMission;
+  if (
+    input.events.length === 0 &&
+    fromProps &&
+    !isOperationHeadline(fromProps) &&
+    !isGenericOrientationSummary(fromProps)
+  ) {
+    return fromProps.slice(0, 160);
   }
-  if (!input.active) {
-    if (isGenericOrientationSummary(headline) || headline === "Orientation du travail") {
-      const richer = input.groupTitles.find(
-        (t) => t && t !== "Orientation du travail" && !isGenericOrientationSummary(t),
-      );
-      if (richer) return richer.slice(0, 160);
-      return null;
-    }
-    if (input.groupTitles.some((t) => t === headline)) return null;
+  if (input.active) return "Orientation du travail";
+  return null;
+}
+
+export function activityReadStillApplies(input: {
+  epochAtStart: number;
+  epochNow: number;
+  scopeAtStart: string;
+  scopeNow: string;
+  turnExpected: string | null;
+  turnReceived: string | null;
+}): boolean {
+  if (input.epochAtStart !== input.epochNow) return false;
+  if (input.scopeAtStart !== input.scopeNow) return false;
+  if (
+    input.turnExpected &&
+    input.turnReceived &&
+    input.turnExpected !== input.turnReceived
+  ) {
+    return false;
   }
-  return headline || null;
+  return true;
+}
+
+export type ActivityHistoryRead =
+  | { kind: "ready"; events: unknown[]; turnStatus: string | null }
+  | { kind: "empty"; turnStatus: string | null }
+  | { kind: "invalid" };
+
+/** Distinguish a real empty history from an unusable payload. */
+export function interpretActivityHistoryPayload(body: unknown): ActivityHistoryRead {
+  if (!body || typeof body !== "object" || Array.isArray(body)) return { kind: "invalid" };
+  const record = body as { events?: unknown; turnStatus?: unknown };
+  if (!Array.isArray(record.events)) return { kind: "invalid" };
+  const turnStatus = typeof record.turnStatus === "string" ? record.turnStatus : null;
+  if (record.events.length === 0) return { kind: "empty", turnStatus };
+  return { kind: "ready", events: record.events, turnStatus };
 }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/activity-projection.ts b/projects/sfia-studio-next/web/src/domains/conversation/activity-projection.ts
index 87f79beb..0348b6e9 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/activity-projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/activity-projection.ts
@@ -27,6 +27,27 @@ export type ActivityEventInput = {
  * GET-side consumers must treat ANNOUNCED ≠ OBSERVED.
  * Sequence is allocated under turn lock to survive concurrent writers (unique turn+seq).
  */
+/**
+ * Record each activity fact on its own. One failure must not drop the facts that follow.
+ * Missed lines stay available to the caller; this function does not invent a confirmation.
+ */
+export async function appendActivityFactsSafely<T>(
+  facts: T[],
+  append: (fact: T) => Promise<void>,
+): Promise<{ recorded: number; missed: T[] }> {
+  const missed: T[] = [];
+  let recorded = 0;
+  for (const fact of facts) {
+    try {
+      await append(fact);
+      recorded += 1;
+    } catch {
+      missed.push(fact);
+    }
+  }
+  return { recorded, missed };
+}
+
 export async function appendActivityEvent(input: ActivityEventInput) {
   return db.transaction(async (tx) => {
     await tx.execute(
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/knowledge-effect-restitution.ts b/projects/sfia-studio-next/web/src/domains/conversation/knowledge-effect-restitution.ts
index 167295e5..9de91dfd 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/knowledge-effect-restitution.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/knowledge-effect-restitution.ts
@@ -118,14 +118,14 @@ export function knowledgeEffectConversationLines(effects: TurnKnowledgeEffect[])
 export type KnowledgeActivityFact = {
   summary: string;
   status: "COMPLETED" | "FAILED" | "LIMITED" | "UNKNOWN";
-  effectId: string;
+  /** Present only when the owner returned a reference. */
   ownerRef: string | null;
 };

 export function knowledgeEffectActivityFacts(
   effects: TurnKnowledgeEffect[],
 ): KnowledgeActivityFact[] {
-  return effects.flatMap((effect, index) => {
+  return effects.flatMap((effect) => {
     const lines = knowledgeEffectFactLines([effect]);
     if (lines.length === 0) return [];
     const st = (effect.status ?? "UNKNOWN").toUpperCase();
@@ -136,14 +136,10 @@ export function knowledgeEffectActivityFacts(
         : st === "PARTIAL" || st === "NOT_EXECUTED" || st === "SKIPPED"
           ? "LIMITED"
           : "UNKNOWN";
-    const effectId =
-      effect.ownerRef?.trim() ||
-      `${effect.proposalKind ?? "knowledge"}:${effect.semanticIntentId ?? index}:${st}`;
     return lines.map((summary) => ({
       summary,
       status,
-      effectId,
-      ownerRef: effect.ownerRef ?? null,
+      ownerRef: effect.ownerRef?.trim() || null,
     }));
   });
 }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
index c9c3452e..ca5b30aa 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
@@ -151,14 +151,15 @@ function effectSplit(effect: NonNullable<PilotageEffectView>): {
 export type PilotageActivityFact = {
   summary: string;
   status: "COMPLETED" | "FAILED" | "LIMITED" | "UNKNOWN";
-  effectId: string;
+  /** Present only when Studio returned a decision id. Not a FinOps correlation. */
+  ownerRef: string | null;
 };

 export function pilotageEffectActivityFacts(
   effects: Array<PilotageEffectView | null | undefined>,
 ): PilotageActivityFact[] {
   const out: PilotageActivityFact[] = [];
-  effects.forEach((effect, index) => {
+  effects.forEach((effect) => {
     if (!effect?.attempted) return;
     const split = effectSplit(effect);
     const st = (effect.status ?? "UNKNOWN").toUpperCase();
@@ -170,9 +171,9 @@ export function pilotageEffectActivityFacts(
           : st === "CONFLICT" || st === "ALREADY_APPLIED"
             ? "LIMITED"
             : "UNKNOWN";
-    const effectId = `${effect.operation ?? "pilotage"}:${effect.decisionId ?? index}:${st}`;
+    const ownerRef = effect.decisionId?.trim() || null;
     for (const summary of split.activity) {
-      out.push({ summary, status, effectId });
+      out.push({ summary, status, ownerRef });
     }
   });
   return out;
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 1fc89b1c..cf3524b6 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -5027,22 +5027,26 @@ export async function postUserMessageAndNora(
   // Operational confirmations stay in the durable activity, not the conversational body.
   // A failed append must not cancel an owner result already confirmed.
   if (!ownershipLostBeforeD4) {
+    const facts = [
+      ...knowledgeEffectActivityFacts(knowledgeEffectRecords).map((fact) => ({
+        ...fact,
+        phase: "nora.effect.knowledge",
+        kind: "KNOWLEDGE_EFFECT",
+        ownerRef: fact.ownerRef,
+      })),
+      ...pilotageEffectActivityFacts(pilotageEffectRecords).map((fact) => ({
+        ...fact,
+        phase: "nora.effect.pilotage",
+        kind: "PILOTAGE_EFFECT",
+      })),
+    ];
+    let missed = facts;
     try {
-      const { appendActivityEvent } = await import("./activity-projection");
-      const facts = [
-        ...knowledgeEffectActivityFacts(knowledgeEffectRecords).map((fact) => ({
-          ...fact,
-          phase: "nora.effect.knowledge",
-          kind: "KNOWLEDGE_EFFECT",
-        })),
-        ...pilotageEffectActivityFacts(pilotageEffectRecords).map((fact) => ({
-          ...fact,
-          phase: "nora.effect.pilotage",
-          kind: "PILOTAGE_EFFECT",
-          ownerRef: null as string | null,
-        })),
-      ];
-      for (const fact of facts) {
+      const { appendActivityEvent, appendActivityFactsSafely } = await import(
+        "./activity-projection"
+      );
+      const result = await appendActivityFactsSafely(facts, async (fact) => {
+        const ownerRef = fact.ownerRef?.trim() || "";
         await appendActivityEvent({
           conversationId: reserved.conversationId,
           turnCommandId: reserved.commandId,
@@ -5058,15 +5062,24 @@ export async function postUserMessageAndNora(
           status: fact.status,
           summary: fact.summary.slice(0, 240),
           detail: {
-            effectId: fact.effectId,
-            ownerRef: fact.ownerRef,
             kind: fact.kind,
+            ...(ownerRef ? { ownerRef } : {}),
           },
           ownerToken: reserved.ownerToken,
         });
-      }
+      });
+      missed = result.missed;
     } catch {
-      /* activity is observational */
+      missed = facts;
+    }
+    if (missed.length > 0) {
+      const note = [
+        "Certaines confirmations opérationnelles n'ont pas pu être inscrites dans l'activité.",
+        ...missed.map((fact) => fact.summary),
+      ].join("\n");
+      assistantBody = assistantBody.trim()
+        ? `${assistantBody.trimEnd()}\n\n${note}`
+        : note;
     }
   }

diff --git a/projects/sfia-studio-next/web/tests/integration/ml5-activity-project-access.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml5-activity-project-access.pg.test.ts
index 57060bbc..446aa922 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml5-activity-project-access.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml5-activity-project-access.pg.test.ts
@@ -15,6 +15,7 @@ import {
 } from "@/db/schema";
 import {
   appendActivityEvent,
+  appendActivityFactsSafely,
   assertProjectTurnActivityAccess,
   listActivityEvents,
 } from "@/domains/conversation/activity-projection";
@@ -135,4 +136,15 @@ describe("project activity access", () => {
       }),
     ).rejects.toMatchObject({ code: "NOT_FOUND" });
   });
+
+  it("keeps recording later facts when one append fails", async () => {
+    const result = await appendActivityFactsSafely(
+      ["première confirmation", "deuxième confirmation", "troisième confirmation"],
+      async (fact) => {
+        if (fact.startsWith("deuxième")) throw new Error("append failed");
+      },
+    );
+    expect(result.recorded).toBe(2);
+    expect(result.missed).toEqual(["deuxième confirmation"]);
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/activity-labels.test.ts b/projects/sfia-studio-next/web/tests/unit/activity-labels.test.ts
index 03d88674..79d3473c 100644
--- a/projects/sfia-studio-next/web/tests/unit/activity-labels.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/activity-labels.test.ts
@@ -5,6 +5,8 @@ import {
   compactActivitySummary,
   formatSourceActivitySummary,
   projectActivityLabel,
+  activityReadStillApplies,
+  interpretActivityHistoryPayload,
   projectMissionHeadline,
   resolveActivityDisplayHeadline,
 } from "@/domains/conversation/activity-labels";
@@ -145,8 +147,15 @@ describe("activity-labels functional completion", () => {
     expect(understand?.resultSummary).toBeNull();
     const sources = groups.find((g) => g.key === "sources");
     expect(sources?.resultSummary).toMatch(/consultée/i);
-    // Prefer significant source activity over repeating orientation.
-    expect(projectMissionHeadline(events)).toMatch(/Document consulté|StockTrack/i);
+    expect(projectMissionHeadline(events)).toBe("Orientation du travail");
+    expect(
+      resolveActivityDisplayHeadline({
+        active: true,
+        propsHeadline: "Document consulté — StockTrack",
+        events,
+        groupTitles: groups.map((g) => g.title),
+      }),
+    ).toBe("Orientation du travail");
   });

   it("projects compare_document_proposal with +/− line counters", () => {
@@ -232,4 +241,76 @@ describe("activity-labels functional completion", () => {
       }),
     ).toBeNull();
   });
+
+  it("keeps a structured objective when the poller headline is an operation", () => {
+    const events = [
+      {
+        sequence: 1,
+        nature: "COMPLETED" as const,
+        status: "COMPLETED",
+        phase: "nora.objective",
+        summary: "Orientation du travail terminée",
+        detail: { objective: "Analyse des règles d'habilitation" },
+      },
+      {
+        sequence: 2,
+        nature: "OBSERVED" as const,
+        status: "COMPLETED",
+        phase: "nora.source.git",
+        summary: "Consultation Git — rules.ts",
+        sourceRef: "git:rules",
+        detail: { kind: "GIT", coverage: "CONSULTED", title: "rules.ts" },
+      },
+    ];
+    expect(
+      resolveActivityDisplayHeadline({
+        active: false,
+        propsHeadline: "Consultation Git — rules.ts",
+        events,
+        groupTitles: ["Analyse des règles d'habilitation"],
+      }),
+    ).toBe("Analyse des règles d'habilitation");
+  });
+
+  it("does not treat an invalid history payload as an empty history", () => {
+    expect(interpretActivityHistoryPayload(null).kind).toBe("invalid");
+    expect(interpretActivityHistoryPayload({ turnStatus: "COMPLETE" }).kind).toBe("invalid");
+    expect(interpretActivityHistoryPayload({ events: [], turnStatus: "COMPLETE" }).kind).toBe(
+      "empty",
+    );
+    expect(interpretActivityHistoryPayload({ events: [{ sequence: 1 }] }).kind).toBe("ready");
+  });
+
+  it("drops a late activity read when the turn or scope changed", () => {
+    expect(
+      activityReadStillApplies({
+        epochAtStart: 2,
+        epochNow: 2,
+        scopeAtStart: "proj_a",
+        scopeNow: "proj_a",
+        turnExpected: "turn_a",
+        turnReceived: "turn_a",
+      }),
+    ).toBe(true);
+    expect(
+      activityReadStillApplies({
+        epochAtStart: 2,
+        epochNow: 3,
+        scopeAtStart: "proj_a",
+        scopeNow: "proj_a",
+        turnExpected: "turn_a",
+        turnReceived: "turn_a",
+      }),
+    ).toBe(false);
+    expect(
+      activityReadStillApplies({
+        epochAtStart: 2,
+        epochNow: 2,
+        scopeAtStart: "proj_a",
+        scopeNow: "proj_b",
+        turnExpected: "turn_a",
+        turnReceived: "turn_a",
+      }),
+    ).toBe(false);
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-activity-hierarchy.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-activity-hierarchy.test.ts
index f3d29f5f..ea5167dd 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-activity-hierarchy.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-activity-hierarchy.test.ts
@@ -1,6 +1,7 @@
 import { describe, expect, it } from "vitest";
 import {
   buildActivityGroups,
+  buildActivitySteps,
   projectMissionHeadline,
 } from "@/domains/conversation/activity-labels";

@@ -129,5 +130,89 @@ describe("ML5 LIVE activity hierarchy", () => {
     ]);
     expect(groups.find((g) => g.key === "sources")?.state).not.toBe("done");
   });
+
+  it("keeps every effect in the detail and the counter", () => {
+    const events = Array.from({ length: 10 }, (_, i) => ({
+      sequence: i + 1,
+      phase: "nora.effect.knowledge",
+      nature: "COMPLETED" as const,
+      status: "COMPLETED",
+      summary: `Connaissance ${i + 1} enregistrée`,
+      detail: { ownerRef: `acq_${i + 1}` },
+    }));
+    const group = buildActivityGroups(events).find((g) => g.key === "produce");
+    expect(group?.details).toHaveLength(10);
+    expect(group?.resultSummary).toBe("10 opérations");
+    expect(buildActivitySteps(events)).toHaveLength(10);
+  });
+
+  it("closes repeated announcements of the same operation", () => {
+    const groups = buildActivityGroups([
+      {
+        sequence: 1,
+        phase: "nora.objective",
+        nature: "ANNOUNCED",
+        status: "RUNNING",
+        summary: "Orientation du travail à partir de la demande du Pilote",
+        detail: { objective: "Orientation du travail à partir de la demande du Pilote" },
+      },
+      {
+        sequence: 2,
+        phase: "nora.objective",
+        nature: "ANNOUNCED",
+        status: "RUNNING",
+        summary: "Orientation du travail à partir de la demande du Pilote",
+        detail: { objective: "Orientation du travail à partir de la demande du Pilote" },
+      },
+      {
+        sequence: 3,
+        phase: "nora.objective",
+        nature: "COMPLETED",
+        status: "COMPLETED",
+        summary: "Orientation du travail terminée",
+        detail: { objective: "Analyse des règles d'habilitation" },
+      },
+    ]);
+    expect(groups.find((g) => g.key === "understand")?.state).toBe("done");
+  });
+
+  it("keeps two operations on the same source and every comparison", () => {
+    const groups = buildActivityGroups([
+      {
+        sequence: 1,
+        phase: "nora.source.d4",
+        nature: "OBSERVED",
+        status: "LIMITED",
+        summary: "Lecture partielle — Cadrage",
+        sourceRef: "document:doc_x/revision:v1",
+        detail: { kind: "D4", coverage: "PARTIAL", title: "Cadrage", operation: "read-v1" },
+      },
+      {
+        sequence: 2,
+        phase: "nora.source.d4",
+        nature: "COMPLETED",
+        status: "COMPLETED",
+        summary: "Comparaison documentaire — V1 → V2 — +3 lignes / −1 ligne",
+        sourceRef: "document:doc_x/revision:v1",
+        detail: { kind: "D4", coverage: "COMPLETE", title: "Cadrage", operation: "compare-v1-v2" },
+      },
+      {
+        sequence: 3,
+        phase: "nora.source.d4",
+        nature: "COMPLETED",
+        status: "COMPLETED",
+        summary: "Comparaison documentaire — V2 → V3 — +1 ligne / −4 lignes",
+        sourceRef: "document:doc_x/revision:v2",
+        detail: { kind: "D4", coverage: "COMPLETE", title: "Cadrage", operation: "compare-v2-v3" },
+      },
+    ]);
+    const sources = groups.find((g) => g.key === "sources");
+    expect(sources?.state).not.toBe("done");
+    expect(sources?.resultSummary).toMatch(/2 comparaisons/);
+    const titles = sources?.details.map((d) => d.title) ?? [];
+    expect(titles.some((t) => t.includes("V1 → V2"))).toBe(true);
+    expect(titles.some((t) => t.includes("V2 → V3"))).toBe(true);
+    expect(projectMissionHeadline(groups.flatMap(() => []))).toBe("Orientation du travail");
+  });
 });

```

## 13. Verdict

READY WITH RESERVES

Les trois findings sont corrigés et couverts par des tests ciblés. Les parcours navigateur ACT-01 à ACT-05 restent reportés. Aucune acceptation produit, aucune promotion, aucune CI.
