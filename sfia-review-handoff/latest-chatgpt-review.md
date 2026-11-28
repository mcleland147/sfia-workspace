# Review Pack — SFIA Studio Next — Lot 4 activité et restitution Nora

Cycle: 08 — Delivery / implémentation
Profil: Critical
Typologie: EVOL — correctif et convergence UX
Jalon: R5 / ML5
Review level: Full
Mono-cycle: oui
Stub: non
Date: 2026-11-28T11:40+01:00

## 1. Identité et mandat

Morris a accepté la sortie technique du lot 3, réserve COG-REC-01 maintenue, et a donné le GO du lot 4.

Résultat visé : le Pilote comprend ce que Nora réalise pendant le travail, retrouve les opérations du tour exact, et lit une conversation centrée sur le métier.

Intentions :

- A. Activité contextualisée, uniquement à partir de faits déjà produits.
- B. Historique durable du même journal, rattaché au tour.
- C. Confirmations opérationnelles sorties du corps conversationnel, sans perdre le résultat métier.

Pas de nouveau moteur, pas de nouvelle persistance, pas de migration, pas d'appel IA supplémentaire, pas de LIVE, pas de promotion RECETTE, pas de lot 5.

## 2. Git Truth Check

Repository: mcleland147/sfia-workspace
Worktree: /Users/morris/Projects/sfia-wt-next-ml5-20261123
Branche: sfia/next-ml5-integrated-delivery-20261123
HEAD initial = origin initial: 017487581c317f957ef7a96ff2f3d95450fcf9ab
Tree initial: b398725b2bbef59c295dbc3093f23a767f433994
origin/main: 997897fd7cf914771e7d08e8030dc7123fab7d25
merge-base avec origin/main: origin/main (la branche produit contient main)
Docs: docs/next-openai-studio-convergence-20261126 @ 97b1825e0f24d1fe3c9090f3f7a8333abec8a98f
Suivi blob: b29b2eaa8bc66b5bc0127cdd1dc96d317bda08c1 (v0.11, §3 L4, §9.1, §16)
Handoff précédent: 8445752f0b881cd01a97b96d16f472befe105c27
Untracked préexistants non commités: .tmp-sfia-review/ et web/.tmp-sfia-review/
Aucune divergence de mandat. main non synchronisé. Rien n'a été stashé, restauré ou supprimé.

## 3. Sources consultées

Suivi v0.11, blob b29b2eaa :

- §3 L4 — activité contextualisée, historique, confirmations hors du fil, DOC-F borné à la comparaison déjà observée.
- §9.1 — preuve proportionnée ; un report n'est pas un PASS.
- §16 — arbitrage Morris et pré-check (RUNNING dominant, route projet sans projectId, composition déterministe).

Code lu avant édition :

- activity-labels.ts — authoritativeState, correlation, buildActivityGroups, titres.
- activity-projection.ts — appendActivityEvent, listActivityEvents.
- route projet et route sas d'activité.
- knowledge-effect-restitution.ts, pilotage-effect-restitution.ts.
- service.ts — annonce d'objectif, clôture, composition post-effet.
- document-act.ts appendDocumentEffectAck et mission-continuity.ts appendMissionAck (lus, non réécrits : le premier porte le résultat documentaire, le second est un no-op).
- NoraConversation.tsx, NoraLiveActivity.tsx (consommateur des groupes, non modifié).
- pollers projet et préparation.
- cognitive-conductor.ts — événement d'investigation déjà structuré ; conducteur non modifié.
- as-built activité du 25 novembre et delivery-history.md.
- fixtures visuelles page 12 : 12.01 node 1210:233, 12.10 node 1212:895.

Figma distant non modifié et non réextrait dans ce cycle. Les identifiants ci-dessus sont ceux déjà portés par le harness produit. Aucune évolution visuelle nouvelle : le bloc NoraLiveActivity existant consomme les groupes corrigés.

## 4. Causes confirmées

1. buildActivityGroups calculait l'état du groupe en regardant chaque événement. Un RUNNING ancien maintenait le groupe « en cours » après un COMPLETED de la même opération. NoraLiveActivity en déduisait alors « Suspendu » à l'arrêt.
2. Le titre d'orientation restait « Orientation du travail » même quand un événement portait metierTitle ou objective structuré non générique.
3. GET /api/projects/{projectId}/turns/{turnCommandId}/activity ignorait projectId. listActivityEvents ne vérifiait que le Pilote du tour.
4. composeKnowledgeEffectRestitution ajoutait « enregistrée dans le Journal » au corps. composePilotageEffectRestitution ajoutait la ligne Journal des décisions et « L'état du projet a été mis à jour ».
5. « Activité de cette réponse » n'affichait que le résumé de turnProjection, en mémoire de session.

## 5. Répartition conversation / activité

Conversation, conservée :

- résultat explicitement produit : cycle ouvert, cycle clos, trajectoire retenue, « La décision a bien été enregistrée » ;
- refus, conflit, déjà appliqué, partiel, UNKNOWN, non exécuté ;
- proposition documentaire et accusés documentaires existants (appendDocumentEffectAck inchangé) ;
- publication (résultat demandé, composer inchangé).

Activité, via appendActivityEvent sur le journal existant :

- lignes opérationnelles de connaissance (AVAILABLE / APPLIED / CREATED / UPDATED) ;
- ligne Journal des décisions et « L'état du projet a été mis à jour » ;
- le même fait de résultat, pour que l'historique reste lisible sans le corps.

phase: nora.effect.knowledge ou nora.effect.pilotage. detail.effectId et detail.ownerRef portent l'identité. Un échec d'append est avalé : il ne défait pas un effet propriétaire déjà confirmé.

Pas de regex sur le texte final. Pas de second appel au modèle.

## 6. Activité contextualisée

Objectif : le titre du groupe understand prend le dernier metierTitle ou objective qui n'est pas la formule générique « Orientation du travail… » et qui n'est pas technique. Sinon le titre reste « Orientation du travail ». Le prompt Pilote n'est pas recopié par ce projecteur. Le conducteur cognitif n'a pas été modifié.

Corrélation : une opération est identifiée par operationId, effectId ou ownerRef, sinon par sourceRef, sinon par la phase d'objectif. Un événement terminal plus récent remplace le RUNNING ouvert de la même identité. Deux sources distinctes restent distinctes. Un UNKNOWN ou un LIMITED restant empêche de marquer le groupe réussi.

Sources : la distinction déjà présente (identifiée, consultée, partielle, inaccessible, comparaison documentaire avec le libellé déjà produit par l'événement) est conservée. Aucun nouvel outil de diff. DOC-F n'est pas reconstruit : la paire et le résultat restent ceux de l'événement nora.source.d4 déjà persisté.

## 7. Historique et accès

À l'ouverture de « Activité de cette réponse », le fil projet charge uniquement GET /api/projects/{projectId}/turns/{turnCommandId}/activity. Le tour vient de la projection du message (turnCommandId), pas du dernier tour en mémoire.

assertProjectTurnActivityAccess exige :

- le projet existe et appartient au Pilote ;
- le tour existe et appartient au même Pilote ;
- la conversation du tour a ce projectId.

Même Pilote, autre projet : ACCESS_DENIED. Autre Pilote : ACCESS_DENIED. Tour inconnu : NOT_FOUND. Conversation sans ce projet : ACCESS_DENIED.

La route sas est inchangée.

Les pollers projet et sas font une lecture après l'arrêt de l'intervalle, avant d'invalider l'époque côté projet. Le dédoublonnage par sequence existait déjà.

## 8. Contrat UX

Structure déjà rendue par NoraLiveActivity : niveau 1 objectif et état, niveau 2 groupes, niveau 3 détails. L'historique du message réutilise buildActivityGroups. details/summary fournit aria-expanded. Pas de panneau latéral. Pas de pourcentage.

Le bandeau de qualification initiale ne prétend plus que des sources ont été consultées. Il dit qu'aucune consultation n'est encore attestée.

Captures du build isolé .next-e2e (BUILD rztDRVTTeYow4LByzVmfw) sur 127.0.0.1:3101, puis serveur arrêté :

- /dev/ml5-page12-visual/12.01 (node produit 1210:233) : fil intact, attente « Attente réelle — aucune étape inventée ».
- /dev/ml5-page12-visual/12.10 (node produit 1212:895) : même attente honnête dans le sas visuel.

Ces captures ne sont pas un tour Nora réel. Le harness ne passe pas turnCommandId. Voir les reports.

## 9. Fichiers

Créé :

- web/tests/integration/ml5-activity-project-access.pg.test.ts

Modifiés : voir le diff intégral ci-dessous. Aucun fichier hors allowlist.

## 10. Git Review Index

Base: 017487581c317f957ef7a96ff2f3d95450fcf9ab
HEAD: 7c2cd338ab9c6932c491fb8baf5c4e6390d757b8
Tree: cda1dcd95eebf54ed419dea60fc6a00b77829632
URL: https://github.com/mcleland147/sfia-workspace/commit/7c2cd338ab9c6932c491fb8baf5c4e6390d757b8
Avance: 01748758..7c2cd338, fast-forward vérifié.
15 fichiers, +633 / −50.
Local = origin. CI distante non exécutée.

## 11. Tests et résultats

Unitaires, 2026-11-28, vitest, 74 PASS / 10 fichiers :

- activity-labels, ml5-activity-hierarchy (dont RUNNING puis COMPLETED, et groupe non réussi si une opération reste inconnue), ml5-activity-sources-granularity, nora-activity-error-banner, ensemble05-turn-projection
- knowledge-effect-restitution : le corps ne contient plus « Journal » pour un AVAILABLE ; la ligne d'activité la contient ; UNKNOWN reste dans le corps
- ensemble07 et mp09 pilotage : le résultat de cycle reste ; la ligne Journal d'une décision quitte le corps et reste dans les faits d'activité
- publication-effect-restitution : non régressé

PG isolé sfia_next_e2e, ml5-activity-project-access.pg.test.ts, 1 PASS :

- tour du projet demandé lu, une séquence, afterSequence vide
- même Pilote autre projet ACCESS_DENIED
- autre Pilote ACCESS_DENIED
- tour inconnu NOT_FOUND

Lint ciblé des fichiers touchés : exit 0.
tsc --noEmit : exit 2, erreurs préexistantes hors du delta (tests documentaires, FinOps, SDK). Aucune erreur tsc dans les fichiers source modifiés. L'erreur historique de ml5-activity-hierarchy.test.ts L68 (union ANNOUNCED/OBSERVED du test des 45 opérations) est antérieure à ce lot.
Build de production isolé STUDIO_E2E=1 : exit 0, distDir .next-e2e, BUILD rztDRVTTeYow4LByzVmfw. .next DEV inchangé (BUILD 31044BhyAFqJ_OpeQJS_K, mtime 27 nov 22:38).
git diff --check : propre.

## 12. Reports RECETTE

ACT-01 à ACT-05 : DEFERRED TO RECETTE.

Raison : un tour Nora réel, ou une simulation de conducteur, de sources et d'effets multiples, dépasse une preuve raisonnable en DEV. Le harness visuel ne porte pas turnCommandId.

Scénario : travail simple ; travail avec sources ou comparaison ; plusieurs effets ; historique du premier tour après une seconde réponse et un reload ; limite ou échec partiel.

Reproduction : candidat RECETTE figé sous GO, projet de qualification isolé, Nora selon le GO LIVE du moment, ou Nora substituée si le GO l'autorise. Ouvrir « Activité de cette réponse » du tour concerné.

Résultat attendu : objectif structuré ou attente générique ; seuls les événements attestés ; comparaison V1/V2 encore lisible si l'opération l'a produite ; confirmations Journal absentes du corps et présentes dans l'historique ; refus et UNKNOWN visibles ; aucun succès global si une opération reste inconnue.

Preuve : captures du fil et de l'historique déplié, identité turnCommandId, extrait d'événements expurgé.

Gate : requis avant acceptation Livraison 1, non bloquant pour la sortie technique de ce lot. Ce report n'est pas un PASS.

Restent ouverts, non rejoués : DOC-REC-01 à 06, PROJ-REC-01/02/03, COG-REC-01.

## 13. Risques, dette, réserves

Risques maîtrisés dans le diff : pas de nouvelle table, pas de nouvelle autorité, append best-effort, fencing ownerToken conservé, corrélations turnCommandId / generationId / effectId conservées pour le lot 5.

Dette : l'historique du fil sas (PreparationConversation) n'a pas le dépliage à la demande ajouté au fil projet. Le poller sas a la lecture terminale. Exit : même disclosure si un parcours sas le demande, sans second journal.

Réserves : browser des cinq scénarios reporté ; tsc global exit 2 hors lot ; webpack/@cursor/sdk hors lot ; LIVE NOT RUN ; CI NOT RUN ; Figma non réextrait ; pas de verdict F2.

## 14. Fake/Real

DET sur les fonctions réelles de projection et de restitution.
PG sur données isolées sfia_next_e2e, aucun effet métier créé pour la démo.
BROWSER : harness visuel du build isolé, Nora non invoquée. Activité simulée non assimilée à une activité cognitive observée.
LIVE : NOT RUN.
ENV : DEV :3100 PID 55011 inchangé. RECETTE :3200 PID 58965 inchangé. 3101 arrêté après les deux captures. Policy RECETTE v0.2 non touchée.

## 15. Content coverage

Chaque fichier modifié est couvert par le diff intégral suivant. Aucune couverture N/A.

## 16. Diff intégral 01748758..7c2cd338

```
diff --git a/projects/sfia-studio-next/construction/as-built-ml5-activite-live-hierarchisee-20261125.md b/projects/sfia-studio-next/construction/as-built-ml5-activite-live-hierarchisee-20261125.md
index 427e98db..2fdb6bfa 100644
--- a/projects/sfia-studio-next/construction/as-built-ml5-activite-live-hierarchisee-20261125.md
+++ b/projects/sfia-studio-next/construction/as-built-ml5-activite-live-hierarchisee-20261125.md
@@ -18,3 +18,13 @@
 - Unit : `ml5-activity-hierarchy.test.ts` (regroupement + 45 ops).
 - DETERMINISTIC/BROWSER : `.tmp-sfia-review/browser/activity-45-{collapsed,expanded}.png`.
 - LIVE : events git EquipLoans (`11-git-activity.json`) — objective + 3 consultations + generate.
+
+## Évolution 2026-11-28 — lot 4
+
+Les preuves du 25 novembre ci-dessus restent inchangées. Ajout factuel :
+
+- Un événement RUNNING ne maintient plus le groupe en cours lorsque la même opération (phase d'objectif, référence de source, ou identifiant d'effet) a un événement terminal plus récent.
+- Le titre du groupe d'orientation utilise `metierTitle` ou `objective` structuré lorsqu'il n'est pas la formule générique. Sinon le titre reste « Orientation du travail ».
+- Les confirmations d'enregistrement au Journal et « L'état du projet a été mis à jour » quittent le corps conversationnel et sont appendues dans `nora_activity_events` (`nora.effect.knowledge`, `nora.effect.pilotage`). Les refus, conflits, résultats partiels et UNKNOWN restent dans la réponse.
+- L'historique d'une réponse charge `GET /api/projects/{projectId}/turns/{turnCommandId}/activity` à l'ouverture. La route vérifie Pilote → projet → conversation → tour avant la lecture.
+- Le polling d'activité fait une lecture terminale après l'arrêt de l'intervalle.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index b1b07b4d..87ccd4fd 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,14 @@
+## delivery_id: DELIV-2026-11-28-ML5-NORA-ACTIVITY-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — lot 4 activité et restitution Nora
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `017487581c317f957ef7a96ff2f3d95450fcf9ab`
+- **commit**: `fix(next): contextualize Nora activity and restitution`
+- **schema_revision**: unchanged (no migration, no new activity store)
+- **scope**: objectif métier quand une qualification structurée existe ; état de groupe corrélé par opération ; confirmations Journal hors du corps conversationnel ; historique du tour exact ; lecture d'activité bornée au projet
+- **classe**: NO RELEASE · compatible corrective · LIVRAISON 1 NOT ACCEPTED · LIVE NOT RUN · CI NOT RUN
+
 ## delivery_id: DELIV-2026-11-27-ML5-INTEGRATED-CONTINUITY-RELIABILITY-DEV

 ### E5 — Finalisation + publication candidat + mise à disposition RECETTE (2026-11-27 Cycle 11)
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/turns/[turnCommandId]/activity/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/turns/[turnCommandId]/activity/route.ts
index d3476b96..bc46cddd 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/turns/[turnCommandId]/activity/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/turns/[turnCommandId]/activity/route.ts
@@ -1,5 +1,8 @@
 import { NextResponse } from "next/server";
-import { listActivityEvents } from "@/domains/conversation/activity-projection";
+import {
+  assertProjectTurnActivityAccess,
+  listActivityEvents,
+} from "@/domains/conversation/activity-projection";
 import { requireStudioSession } from "@/domains/identity/session";
 import { studioErrorResponse } from "@/lib/http-errors";

@@ -10,7 +13,12 @@ export async function GET(
 ) {
   try {
     const session = await requireStudioSession();
-    const { turnCommandId } = await ctx.params;
+    const { projectId, turnCommandId } = await ctx.params;
+    await assertProjectTurnActivityAccess({
+      ownerPilotId: session.pilotId,
+      projectId,
+      turnCommandId,
+    });
     const url = new URL(req.url);
     const afterRaw = url.searchParams.get("afterSequence");
     const afterSequence = afterRaw != null ? Number(afterRaw) : undefined;
diff --git a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
index 1a5e0178..cf3ab260 100644
--- a/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/preparations/[preparationId]/page.tsx
@@ -620,6 +620,7 @@ export default function PreparationPage() {
       setStatus("échec réseau — intention de tour conservée");
     } finally {
       window.clearInterval(activityPollTimer);
+      await pollLiveActivity();
       setBusy(false);
     }
   }
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 7fde3860..baad7193 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -3488,6 +3488,7 @@ export default function ProjectPage() {
       }
     } finally {
       if (activityPollTimer != null) window.clearInterval(activityPollTimer);
+      await pollLiveActivity();
       activityPollEpochRef.current += 1;
       setBusy(false);
     }
@@ -3699,6 +3700,7 @@ export default function ProjectPage() {
             persistDraft(v);
           }}
           projectId={params.projectId}
+          activityHistoryBase={`/api/projects/${params.projectId}/turns`}
           dictationEnabled={dictationEnabled}
           dossierAttachment={dossierAttachment}
           onRemoveDossierAttachment={() => setDossierAttachment(null)}
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index 48af1c5c..d316bc2c 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -1,6 +1,6 @@
 "use client";

-import { useEffect, useRef } from "react";
+import { useEffect, useRef, useState } from "react";
 import { SafeMarkdown } from "@/components/SafeMarkdown";
 import { NoraComposition } from "@/components/figma/NoraComposition";
 import { useNoraThreadScroll } from "@/hooks/useNoraThreadScroll";
@@ -15,6 +15,7 @@ import {
   compositionAnchorsReferences,
 } from "@/domains/conversation/visual-composition";
 import { NoraLiveActivity } from "@/components/figma/NoraLiveActivity";
+import { buildActivityGroups } from "@/domains/conversation/activity-labels";
 import { NoraSharedComposer } from "@/components/figma/NoraSharedComposer";

 export type NoraMsg = {
@@ -75,6 +76,8 @@ export function NoraConversation(props: {
   onRemoveDossierAttachment?: () => void;
   /** ML3 — project id for dictation session admission. */
   projectId?: string;
+  /** Base for on-demand history, e.g. `/api/projects/{id}/turns`. */
+  activityHistoryBase?: string;
   /** ML3 — SFIA_COMPOSER_DICTATION mirrored from server (optional). */
   dictationEnabled?: boolean;
 }) {
@@ -269,7 +272,14 @@ export function NoraConversation(props: {
                 ) : (
                   <div className="fig-msg-body whitespace-pre-wrap">{m.content}</div>
                 )}
-                {proj?.activity && proj.activity.kind !== "wait" ? (
+                {proj?.turnCommandId && props.activityHistoryBase ? (
+                  <NoraTurnActivityHistory
+                    href={`${props.activityHistoryBase}/${encodeURIComponent(proj.turnCommandId)}/activity`}
+                    fallback={
+                      proj.activity && proj.activity.kind !== "wait" ? proj.activity.label : null
+                    }
+                  />
+                ) : proj?.activity && proj.activity.kind !== "wait" ? (
                   <details className="fig-nora-activity-history" data-testid="nora-activity-history">
                     <summary>Activité de cette réponse</summary>
                     <p>
@@ -341,8 +351,7 @@ export function NoraConversation(props: {
                 Nora prépare sa réponse
               </p>
               <div className="space-y-2 text-sm text-[#a3b0c7]">
-                <p>✓ Sources et intention du projet consultées</p>
-                <p>○ Préparation de la première orientation de trajectoire…</p>
+                <p>Qualification initiale en cours. Aucune consultation n&apos;est encore attestée.</p>
               </div>
               {props.onOpenTrajectoire ? (
                 <button
@@ -442,3 +451,86 @@ export function NoraConversation(props: {
     </div>
   );
 }
+
+const ACTIVITY_STATE_LABEL: Record<string, string> = {
+  done: "Terminé",
+  current: "En cours",
+  pending: "En attente",
+  limited: "Limité",
+  failed: "Non abouti",
+};
+
+function NoraTurnActivityHistory(props: { href: string; fallback?: string | null }) {
+  const [events, setEvents] = useState<
+    Array<{
+      sequence: number;
+      nature: string;
+      status: string;
+      summary: string;
+      phase: string;
+      sourceRef?: string | null;
+      detail?: Record<string, unknown> | null;
+    }> | null
+  >(null);
+  const [error, setError] = useState<string | null>(null);
+  const loaded = useRef(false);
+
+  async function load() {
+    if (loaded.current) return;
+    loaded.current = true;
+    try {
+      const res = await fetch(props.href);
+      if (!res.ok) {
+        setError("Lecture de l'activité indisponible pour ce tour.");
+        return;
+      }
+      const body = (await res.json()) as { events?: typeof events };
+      setEvents(body.events ?? []);
+    } catch {
+      setError("Lecture de l'activité indisponible pour ce tour.");
+    }
+  }
+
+  const groups = events
+    ? buildActivityGroups(
+        events.map((ev) => ({
+          ...ev,
+          detail: ev.detail ?? undefined,
+        })),
+      )
+    : [];
+
+  return (
+    <details
+      className="fig-nora-activity-history"
+      data-testid="nora-activity-history"
+      onToggle={(event) => {
+        if ((event.currentTarget as HTMLDetailsElement).open) void load();
+      }}
+    >
+      <summary>Activité de cette réponse</summary>
+      {error ? <p>{error}</p> : null}
+      {!events && props.fallback ? <p>{props.fallback}</p> : null}
+      {events && groups.length === 0 ? (
+        <p>Aucun événement durable pour ce tour.</p>
+      ) : null}
+      {groups.map((group) => (
+        <div key={group.key} data-testid={`nora-activity-group-${group.key}`}>
+          <p>
+            {group.title} — {ACTIVITY_STATE_LABEL[group.state] ?? group.state}
+          </p>
+          {group.resultSummary ? <p>{group.resultSummary}</p> : null}
+          {group.details.length > 0 ? (
+            <ul>
+              {group.details.map((detail) => (
+                <li key={detail.key}>
+                  {detail.title} · {detail.coverage}
+                </li>
+              ))}
+            </ul>
+          ) : null}
+        </div>
+      ))}
+    </details>
+  );
+}
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts b/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
index 4593288b..aa8e5842 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/activity-labels.ts
@@ -307,6 +307,57 @@ function authoritativeState(
   return "current";
 }

+/**
+ * Identity of one operation across its announced and terminal events.
+ * A later terminal event retires the earlier RUNNING of the same operation.
+ * Distinct sources and distinct effect ids stay distinct.
+ */
+function correlationRef(
+  ev: ActivityLabelInput & { sequence: number; nature: string },
+): string | null {
+  const op =
+    detailString(ev.detail, "operationId") ||
+    detailString(ev.detail, "effectId") ||
+    detailString(ev.detail, "ownerRef") ||
+    "";
+  if (op) return `op:${op}`;
+  const ref = (ev.sourceRef || detailString(ev.detail, "ref") || "").trim();
+  if (ref) return `ref:${ref}`;
+  if (/objective|investigation\.engaged/i.test(ev.phase || "")) return `phase:${ev.phase}`;
+  return null;
+}
+
+function foldOperationStates(
+  list: Array<ActivityLabelInput & { sequence: number; nature: string }>,
+): ActivityStepState[] {
+  const sorted = [...list].sort((a, b) => a.sequence - b.sequence);
+  const open = new Map<string, number>();
+  const states: ActivityStepState[] = [];
+  for (const ev of sorted) {
+    const st = authoritativeState(ev);
+    const ref = correlationRef(ev);
+    if (ref && open.has(ref) && (st === "done" || st === "failed" || st === "limited")) {
+      states[open.get(ref)!] = st;
+      open.delete(ref);
+      continue;
+    }
+    states.push(st);
+    if (ref && st === "current") open.set(ref, states.length - 1);
+  }
+  return states;
+}
+
+function worstFoldedState(states: ActivityStepState[]): ActivityStepState {
+  let worst: ActivityStepState = states.length === 0 ? "pending" : "done";
+  for (const st of states) {
+    if (st === "failed") worst = "failed";
+    else if (st === "limited" && worst !== "failed") worst = "limited";
+    else if (st === "current" && (worst === "done" || worst === "pending")) worst = "current";
+    else if (st === "pending" && worst === "done") worst = "pending";
+  }
+  return worst;
+}
+
 function identityKey(ev: ActivityLabelInput & { sequence: number; nature: string }): string {
   const kind = kindFromDetail(ev.detail) || ev.phase || "step";
   const ref = (ev.sourceRef || detailString(ev.detail, "ref") || "").trim();
@@ -478,7 +529,9 @@ export type ActivityGroupView = {
 function groupKeyForPhase(phase: string): string {
   if (/objective|investigation\.engaged/i.test(phase)) return "understand";
   if (/source\.(git|d4|web|history)/i.test(phase)) return "sources";
-  if (/contract\.prepare|document|d4\.|pending|conserv/i.test(phase)) return "produce";
+  if (/effect\.(knowledge|pilotage|publication)|contract\.prepare|document|d4\.|pending|conserv/i.test(phase)) {
+    return "produce";
+  }
   if (/generate|restitution|complete/i.test(phase)) return "restitute";
   return "work";
 }
@@ -569,14 +622,7 @@ export function buildActivityGroups(
     const list = byGroup.get(key);
     if (!list?.length) continue;
     const meta = GROUP_META[key] || GROUP_META.work!;
-    let worst: ActivityStepState = "done";
-    for (const ev of list) {
-      const st = authoritativeState(ev);
-      if (st === "failed") worst = "failed";
-      else if (st === "limited" && worst !== "failed") worst = "limited";
-      else if (st === "current" && worst === "done") worst = "current";
-      else if (st === "pending" && worst === "done") worst = "pending";
-    }
+    const worst = worstFoldedState(foldOperationStates(list));
     let resultSummary: string | null = null;
     let details: ActivityGroupView["details"] = [];
     if (key === "sources") {
@@ -645,9 +691,20 @@ export function buildActivityGroups(
         kind: "STEP",
       }));
     }
+    const metierObjective = [...list]
+      .reverse()
+      .map(
+        (e) =>
+          detailString(e.detail, "metierTitle") ||
+          detailString(e.detail, "objective") ||
+          "",
+      )
+      .find((s) => s && !isGenericOrientationSummary(s) && !looksTechnical(s));
     const title =
       key === "understand"
-        ? meta.title
+        ? metierObjective
+          ? metierObjective.slice(0, 120)
+          : meta.title
         : key === "sources" && resultSummary && /^Comparaison documentaire\b/i.test(resultSummary)
           ? meta.title
           : contextualGroupTitle(key, list, meta.title);
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/activity-projection.ts b/projects/sfia-studio-next/web/src/domains/conversation/activity-projection.ts
index d288a5b0..87f79beb 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/activity-projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/activity-projection.ts
@@ -1,6 +1,6 @@
 import { and, asc, eq, gt, sql } from "drizzle-orm";
 import { db } from "@/db/client";
-import { conversationTurnCommands, noraActivityEvents } from "@/db/schema";
+import { conversationTurnCommands, conversations, noraActivityEvents, projects } from "@/db/schema";
 import { StudioError } from "@/lib/http-errors";
 import { newId } from "@/lib/ids";

@@ -84,6 +84,43 @@ export async function appendActivityEvent(input: ActivityEventInput) {
   });
 }

+/**
+ * Pilot → project → conversation → turn.
+ * ownerPilotId alone is not enough: the same Pilote must not read another project's turn.
+ */
+export async function assertProjectTurnActivityAccess(input: {
+  ownerPilotId: string;
+  projectId: string;
+  turnCommandId: string;
+}): Promise<void> {
+  const project = (
+    await db.select().from(projects).where(eq(projects.id, input.projectId)).limit(1)
+  )[0];
+  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");
+  if (project.ownerPilotId !== input.ownerPilotId) {
+    throw new StudioError("ACCESS_DENIED", "Projet d'un autre Pilote");
+  }
+
+  const turn = (
+    await db
+      .select()
+      .from(conversationTurnCommands)
+      .where(eq(conversationTurnCommands.id, input.turnCommandId))
+      .limit(1)
+  )[0];
+  if (!turn) throw new StudioError("NOT_FOUND", "Tour introuvable");
+  if (turn.ownerPilotId !== input.ownerPilotId) {
+    throw new StudioError("ACCESS_DENIED", "Tour d'un autre Pilote");
+  }
+
+  const conv = (
+    await db.select().from(conversations).where(eq(conversations.id, turn.conversationId)).limit(1)
+  )[0];
+  if (!conv || conv.projectId !== input.projectId) {
+    throw new StudioError("ACCESS_DENIED", "Tour hors projet");
+  }
+}
+
 export async function listActivityEvents(input: {
   ownerPilotId: string;
   turnCommandId: string;
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/knowledge-effect-restitution.ts b/projects/sfia-studio-next/web/src/domains/conversation/knowledge-effect-restitution.ts
index 500f1c73..167295e5 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/knowledge-effect-restitution.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/knowledge-effect-restitution.ts
@@ -21,10 +21,17 @@ function proposalLabel(kind: string | null | undefined): string {
   }
 }

+const OPERATIONAL_SUCCESS = new Set(["AVAILABLE", "APPLIED", "CREATED", "UPDATED"]);
+
+function isOperationalKnowledgeSuccess(effect: TurnKnowledgeEffect): boolean {
+  const st = (effect.status ?? "UNKNOWN").toUpperCase();
+  return Boolean(effect.attempted) && OPERATIONAL_SUCCESS.has(st);
+}
+
 /**
- * Natural lines for non-success or partial knowledge outcomes.
- * Successful AVAILABLE outcomes are usually already covered by Nora prose + Journal;
- * we still confirm APPLIED/AVAILABLE briefly when ownerRef is present.
+ * Natural lines for knowledge outcomes.
+ * Success lines are operational confirmations (Journal). They stay available
+ * for the activity history and are omitted from the conversational body.
  */
 export function knowledgeEffectFactLines(
   effects: TurnKnowledgeEffect[],
@@ -98,11 +105,54 @@ export function knowledgeEffectFactLines(
   return lines;
 }

+/** Operational confirmations — activity and history, not the conversational body. */
+export function knowledgeEffectActivityLines(effects: TurnKnowledgeEffect[]): string[] {
+  return knowledgeEffectFactLines(effects.filter(isOperationalKnowledgeSuccess));
+}
+
+/** Failures, refusals, partials and UNKNOWN stay in the conversation. */
+export function knowledgeEffectConversationLines(effects: TurnKnowledgeEffect[]): string[] {
+  return knowledgeEffectFactLines(effects.filter((k) => !isOperationalKnowledgeSuccess(k)));
+}
+
+export type KnowledgeActivityFact = {
+  summary: string;
+  status: "COMPLETED" | "FAILED" | "LIMITED" | "UNKNOWN";
+  effectId: string;
+  ownerRef: string | null;
+};
+
+export function knowledgeEffectActivityFacts(
+  effects: TurnKnowledgeEffect[],
+): KnowledgeActivityFact[] {
+  return effects.flatMap((effect, index) => {
+    const lines = knowledgeEffectFactLines([effect]);
+    if (lines.length === 0) return [];
+    const st = (effect.status ?? "UNKNOWN").toUpperCase();
+    const status: KnowledgeActivityFact["status"] = OPERATIONAL_SUCCESS.has(st)
+      ? "COMPLETED"
+      : st === "FAILED" || st === "REJECTED" || st === "FORBIDDEN"
+        ? "FAILED"
+        : st === "PARTIAL" || st === "NOT_EXECUTED" || st === "SKIPPED"
+          ? "LIMITED"
+          : "UNKNOWN";
+    const effectId =
+      effect.ownerRef?.trim() ||
+      `${effect.proposalKind ?? "knowledge"}:${effect.semanticIntentId ?? index}:${st}`;
+    return lines.map((summary) => ({
+      summary,
+      status,
+      effectId,
+      ownerRef: effect.ownerRef ?? null,
+    }));
+  });
+}
+
 export function composeKnowledgeEffectRestitution(input: {
   priorContent: string;
   effects: TurnKnowledgeEffect[];
 }): string {
-  const lines = knowledgeEffectFactLines(input.effects);
+  const lines = knowledgeEffectConversationLines(input.effects);
   if (lines.length === 0) return input.priorContent;
   const base = input.priorContent.trimEnd();
   return base ? `${base}\n\n${lines.join("\n")}` : lines.join("\n");
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
index 3ed43812..c9c3452e 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/pilotage-effect-restitution.ts
@@ -50,7 +50,10 @@ function stripPreEffectHedges(text: string): string {
  * Natural métier restitution (MP-11 / Morris 2026-11-27).
  * Confirm only after Studio owner outcome; avoid technical « Résultat Studio » blocks.
  */
-function effectFactLines(effect: NonNullable<PilotageEffectView>): string[] {
+function effectSplit(effect: NonNullable<PilotageEffectView>): {
+  conversation: string[];
+  activity: string[];
+} {
   const op = operationLabel(effect.operation);
   const status = (effect.status ?? "").toUpperCase();
   const reason = (effect.reason ?? effect.clarification ?? "").trim();
@@ -58,41 +61,50 @@ function effectFactLines(effect: NonNullable<PilotageEffectView>): string[] {
   switch (status) {
     case "APPLIED":
       if (effect.operation === "OPEN_CYCLE") {
-        return [
+        const lines = [
           `Le cycle demandé est maintenant ouvert (${op}).`,
           "La guidance spécialisée associée est disponible sur Trajectoire / CKI. On peut enchaîner sur le fond du travail.",
         ];
+        return { conversation: lines, activity: [lines[0]!] };
       }
       if (effect.operation === "CLOSE_CYCLE") {
-        return [
+        const lines = [
           `Le cycle est maintenant clos.`,
           "L'historique et la trajectoire conservent cet état. Dis-moi si tu veux ouvrir un cycle suivant.",
         ];
+        return { conversation: lines, activity: [lines[0]!] };
       }
       if (effect.operation === "RETAIN_TRAJECTORY") {
-        return [
+        const lines = [
           "L'orientation de trajectoire est retenue.",
           "L'ouverture d'un cycle reste une décision distincte lorsque tu seras prêt.",
         ];
+        return { conversation: lines, activity: [lines[0]!] };
       }
       if (effect.operation === "RECORD_DECISION" || effect.operation === "REVISE_DECISION") {
-        return [
-          `La décision a bien été enregistrée.`,
-          effect.decisionId
-            ? "Elle figure désormais dans le Journal (Décisions) avec sa portée et sa provenance."
-            : "Elle figure désormais dans le Journal avec sa portée et sa provenance.",
-        ];
+        const journal = effect.decisionId
+          ? "Elle figure désormais dans le Journal (Décisions) avec sa portée et sa provenance."
+          : "Elle figure désormais dans le Journal avec sa portée et sa provenance.";
+        return {
+          conversation: ["La décision a bien été enregistrée."],
+          activity: ["La décision a bien été enregistrée.", journal],
+        };
       }
-      return [
-        `C'est fait : la ${op} a bien été prise en compte.`,
-        "L'état du projet a été mis à jour en conséquence.",
-      ];
-    case "ALREADY_APPLIED":
-      return [
+      return {
+        conversation: [`C'est fait : la ${op} a bien été prise en compte.`],
+        activity: [
+          `C'est fait : la ${op} a bien été prise en compte.`,
+          "L'état du projet a été mis à jour en conséquence.",
+        ],
+      };
+    case "ALREADY_APPLIED": {
+      const lines = [
         `Cette ${op} était déjà en place — aucun nouvel effet n'a été créé.`,
       ];
-    case "REJECTED":
-      return [
+      return { conversation: lines, activity: lines };
+    }
+    case "REJECTED": {
+      const lines = [
         `Je n'ai pas pu appliquer la ${op}.`,
         reason
           ? `Motif : ${reason}.`
@@ -100,33 +112,72 @@ function effectFactLines(effect: NonNullable<PilotageEffectView>): string[] {
         // Per-effect wording only — never deny sibling outcomes on the same turn (MP-09).
         `Cet effet (${op}) n'a pas créé de cycle ni de décision. Tu peux reformuler ou préciser le type de cycle reconnu.`,
       ];
-    case "CONFLICT":
-      return [
+      return { conversation: lines, activity: lines };
+    }
+    case "CONFLICT": {
+      const lines = [
         `Il y a un conflit d'état sur la ${op}.`,
         reason ? `Détail : ${reason}.` : "Recharge l'état du projet puis réessaie si pertinent.",
       ];
-    case "UNKNOWN":
-      return [
+      return { conversation: lines, activity: lines };
+    }
+    case "UNKNOWN": {
+      const lines = [
         `L'issue de la ${op} est encore en vérification.`,
         "Je ne confirme ni le succès ni le refus tant que Studio n'a pas consolidé l'état.",
       ];
-    default:
+      return { conversation: lines, activity: lines };
+    }
+    default: {
       if (effect.intentClarity === "AMBIGUOUS") {
-        return [
+        const lines = [
           "Aucune commande n'a été exécutée — intention ambiguë.",
           reason ? `Précision utile : ${reason}.` : "Peux-tu préciser le cycle et l'acte souhaités ?",
         ];
+        return { conversation: lines, activity: lines };
       }
       if (effect.attempted === false) {
-        return [];
+        return { conversation: [], activity: [] };
       }
-      return [
+      const lines = [
         `Statut « ${status || "indéterminé"} » pour la ${op}.`,
         reason ? `Information : ${reason}.` : "",
       ].filter(Boolean);
+      return { conversation: lines, activity: lines };
+    }
   }
 }

+export type PilotageActivityFact = {
+  summary: string;
+  status: "COMPLETED" | "FAILED" | "LIMITED" | "UNKNOWN";
+  effectId: string;
+};
+
+export function pilotageEffectActivityFacts(
+  effects: Array<PilotageEffectView | null | undefined>,
+): PilotageActivityFact[] {
+  const out: PilotageActivityFact[] = [];
+  effects.forEach((effect, index) => {
+    if (!effect?.attempted) return;
+    const split = effectSplit(effect);
+    const st = (effect.status ?? "UNKNOWN").toUpperCase();
+    const status: PilotageActivityFact["status"] =
+      st === "APPLIED"
+        ? "COMPLETED"
+        : st === "REJECTED"
+          ? "FAILED"
+          : st === "CONFLICT" || st === "ALREADY_APPLIED"
+            ? "LIMITED"
+            : "UNKNOWN";
+    const effectId = `${effect.operation ?? "pilotage"}:${effect.decisionId ?? index}:${st}`;
+    for (const summary of split.activity) {
+      out.push({ summary, status, effectId });
+    }
+  });
+  return out;
+}
+
 /**
  * Compose final assistant text: keep useful prior narrative, remove contradictory
  * pre-effect hedges, append durable Studio outcome in métier language.
@@ -146,7 +197,7 @@ export function composePilotageEffectRestitution(input: {
   }
   const sections: string[] = [];
   for (const effect of ordered) {
-    const facts = effectFactLines(effect);
+    const facts = effectSplit(effect).conversation;
     if (facts.length > 0) {
       sections.push(facts.join("\n\n"));
     }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 71c84c01..1fc89b1c 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -77,9 +77,13 @@ import { assertPilotTurnNotBlockedByQualification } from "@/domains/pilotage/ini
 import {
   composePilotageEffectRestitution,
   isTechnicalMissionAssistantContent,
+  pilotageEffectActivityFacts,
   projectMetierMissionMessage,
 } from "@/domains/conversation/pilotage-effect-restitution";
-import { composeKnowledgeEffectRestitution } from "@/domains/conversation/knowledge-effect-restitution";
+import {
+  composeKnowledgeEffectRestitution,
+  knowledgeEffectActivityFacts,
+} from "@/domains/conversation/knowledge-effect-restitution";
 import {
   ambiguousPilotageEffectRecord,
   crossCapOutcomeFromCapitalisations,
@@ -5020,6 +5024,52 @@ export async function postUserMessageAndNora(
     });
   }

+  // Operational confirmations stay in the durable activity, not the conversational body.
+  // A failed append must not cancel an owner result already confirmed.
+  if (!ownershipLostBeforeD4) {
+    try {
+      const { appendActivityEvent } = await import("./activity-projection");
+      const facts = [
+        ...knowledgeEffectActivityFacts(knowledgeEffectRecords).map((fact) => ({
+          ...fact,
+          phase: "nora.effect.knowledge",
+          kind: "KNOWLEDGE_EFFECT",
+        })),
+        ...pilotageEffectActivityFacts(pilotageEffectRecords).map((fact) => ({
+          ...fact,
+          phase: "nora.effect.pilotage",
+          kind: "PILOTAGE_EFFECT",
+          ownerRef: null as string | null,
+        })),
+      ];
+      for (const fact of facts) {
+        await appendActivityEvent({
+          conversationId: reserved.conversationId,
+          turnCommandId: reserved.commandId,
+          ownerPilotId: pilotId,
+          generationId: reply.generationId ?? null,
+          phase: fact.phase,
+          nature:
+            fact.status === "UNKNOWN"
+              ? "UNCERTAIN"
+              : fact.status === "COMPLETED"
+                ? "COMPLETED"
+                : "OBSERVED",
+          status: fact.status,
+          summary: fact.summary.slice(0, 240),
+          detail: {
+            effectId: fact.effectId,
+            ownerRef: fact.ownerRef,
+            kind: fact.kind,
+          },
+          ownerToken: reserved.ownerToken,
+        });
+      }
+    } catch {
+      /* activity is observational */
+    }
+  }
+
   // E08 POST-UAT — publication outcome after Studio owners; strip pre-effect hedges.
   if (!ownershipLostBeforeD4 && publicationEffectView?.attempted) {
     assistantBody = composePublicationEffectRestitution({
diff --git a/projects/sfia-studio-next/web/tests/integration/ml5-activity-project-access.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml5-activity-project-access.pg.test.ts
new file mode 100644
index 00000000..57060bbc
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/integration/ml5-activity-project-access.pg.test.ts
@@ -0,0 +1,138 @@
+/**
+ * Lot 4 — project activity read is bound to pilot → project → conversation → turn.
+ * Isolated e2e data. No métier effect is created.
+ */
+import { afterAll, describe, expect, it } from "vitest";
+import { eq } from "drizzle-orm";
+import { db } from "@/db/client";
+import {
+  conversationTurnCommands,
+  conversations,
+  noraActivityEvents,
+  preparations,
+  projects,
+  pilots,
+} from "@/db/schema";
+import {
+  appendActivityEvent,
+  assertProjectTurnActivityAccess,
+  listActivityEvents,
+} from "@/domains/conversation/activity-projection";
+import { newId } from "@/lib/ids";
+import { StudioError } from "@/lib/http-errors";
+
+const pilotA = newId("pilot");
+const pilotB = newId("pilot");
+const prepA = newId("prep");
+const projectA = newId("proj");
+const projectB = newId("proj");
+const convA = newId("conv");
+const turnA = newId("turn");
+
+async function expectDenied(run: () => Promise<unknown>) {
+  await expect(run()).rejects.toMatchObject({ code: "ACCESS_DENIED" });
+}
+
+describe("project activity access", () => {
+  afterAll(async () => {
+    await db.delete(noraActivityEvents).where(eq(noraActivityEvents.turnCommandId, turnA));
+    await db.delete(conversationTurnCommands).where(eq(conversationTurnCommands.id, turnA));
+    await db.delete(conversations).where(eq(conversations.id, convA));
+    await db.delete(projects).where(eq(projects.ownerPilotId, pilotA));
+    await db.delete(preparations).where(eq(preparations.id, prepA));
+    await db.delete(pilots).where(eq(pilots.id, pilotA));
+    await db.delete(pilots).where(eq(pilots.id, pilotB));
+  });
+
+  it("reads the turn of the requested project and refuses the others", async () => {
+    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
+    await db.insert(pilots).values([
+      { id: pilotA, displayName: "lot4-a" },
+      { id: pilotB, displayName: "lot4-b" },
+    ]);
+    await db.insert(preparations).values({
+      id: prepA,
+      ownerPilotId: pilotA,
+      status: "ATTACHED",
+    });
+    await db.insert(projects).values([
+      { id: projectA, ownerPilotId: pilotA, name: "lot4-a" },
+      { id: projectB, ownerPilotId: pilotA, name: "lot4-b" },
+    ]);
+    await db.insert(conversations).values({
+      id: convA,
+      preparationId: prepA,
+      projectId: projectA,
+      ownerPilotId: pilotA,
+    });
+    await db.insert(conversationTurnCommands).values({
+      id: turnA,
+      conversationId: convA,
+      ownerPilotId: pilotA,
+      clientTurnKey: `key-${turnA}`,
+      requestFingerprint: "fp-lot4",
+      operationId: newId("op"),
+      status: "COMPLETE",
+      ownerToken: "tok-lot4",
+    });
+    await appendActivityEvent({
+      conversationId: convA,
+      turnCommandId: turnA,
+      ownerPilotId: pilotA,
+      phase: "nora.objective",
+      nature: "COMPLETED",
+      status: "COMPLETED",
+      summary: "Analyse des règles d'habilitation",
+      detail: { objective: "Analyse des règles d'habilitation" },
+      ownerToken: "tok-lot4",
+    });
+
+    await assertProjectTurnActivityAccess({
+      ownerPilotId: pilotA,
+      projectId: projectA,
+      turnCommandId: turnA,
+    });
+    const listed = await listActivityEvents({
+      ownerPilotId: pilotA,
+      turnCommandId: turnA,
+    });
+    expect(listed.events.map((e) => e.summary)).toEqual(["Analyse des règles d'habilitation"]);
+    expect(listed.events.map((e) => e.sequence)).toEqual([1]);
+
+    const again = await listActivityEvents({
+      ownerPilotId: pilotA,
+      turnCommandId: turnA,
+      afterSequence: 1,
+    });
+    expect(again.events).toEqual([]);
+
+    await expectDenied(() =>
+      assertProjectTurnActivityAccess({
+        ownerPilotId: pilotA,
+        projectId: projectB,
+        turnCommandId: turnA,
+      }),
+    );
+    await expectDenied(() =>
+      assertProjectTurnActivityAccess({
+        ownerPilotId: pilotB,
+        projectId: projectA,
+        turnCommandId: turnA,
+      }),
+    );
+    await expect(
+      assertProjectTurnActivityAccess({
+        ownerPilotId: pilotA,
+        projectId: projectA,
+        turnCommandId: newId("turn"),
+      }),
+    ).rejects.toBeInstanceOf(StudioError);
+    await expect(
+      assertProjectTurnActivityAccess({
+        ownerPilotId: pilotA,
+        projectId: projectA,
+        turnCommandId: newId("turn"),
+      }),
+    ).rejects.toMatchObject({ code: "NOT_FOUND" });
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts b/projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts
index 5fb2d139..bfd2aca0 100644
--- a/projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ensemble07-pilotage-effect-restitution.test.ts
@@ -2,6 +2,7 @@ import { describe, expect, it } from "vitest";
 import {
   composePilotageEffectRestitution,
   isTechnicalMissionAssistantContent,
+  pilotageEffectActivityFacts,
   projectMetierMissionMessage,
 } from "@/domains/conversation/pilotage-effect-restitution";

@@ -72,6 +73,24 @@ describe("E07 post-effect métier restitution", () => {
     ).toBe(prior);
   });

+  it("keeps the decision result and moves the Journal line to activity", () => {
+    const effect = {
+      attempted: true,
+      operation: "RECORD_DECISION",
+      status: "APPLIED",
+      decisionId: "dec_1",
+    };
+    const out = composePilotageEffectRestitution({
+      priorContent: "Je retiens cette décision.",
+      effect,
+    });
+    expect(out).toMatch(/décision a bien été enregistrée/i);
+    expect(out).not.toMatch(/Journal/);
+    const activity = pilotageEffectActivityFacts([effect]);
+    expect(activity.map((f) => f.summary).join(" ")).toMatch(/Journal \(Décisions\)/);
+    expect(out).not.toMatch(/état du projet a été mis à jour/i);
+  });
+
   it("backward-compatible single effect via effect prop", () => {
     const out = composePilotageEffectRestitution({
       priorContent: "ok",
diff --git a/projects/sfia-studio-next/web/tests/unit/knowledge-effect-restitution.test.ts b/projects/sfia-studio-next/web/tests/unit/knowledge-effect-restitution.test.ts
index 238bd2ec..d3a0129e 100644
--- a/projects/sfia-studio-next/web/tests/unit/knowledge-effect-restitution.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/knowledge-effect-restitution.test.ts
@@ -1,6 +1,7 @@
 import { describe, expect, it } from "vitest";
 import {
   composeKnowledgeEffectRestitution,
+  knowledgeEffectActivityLines,
   knowledgeEffectFactLines,
 } from "@/domains/conversation/knowledge-effect-restitution";
 import type { TurnKnowledgeEffect } from "@/domains/conversation/pilotage-effect-aggregate";
@@ -47,8 +48,13 @@ describe("knowledge-effect-restitution (E3 D.3)", () => {
       ],
     });
     expect(out).toContain("Voici ce que je retiens.");
-    expect(out).toContain("Journal");
+    expect(out).not.toContain("Journal");
+    expect(out).toMatch(/reste à confirmer/i);
     expect(out).not.toMatch(/Résultat Studio/i);
     expect(out).not.toMatch(/Je transmets/i);
+    const activity = knowledgeEffectActivityLines([
+      ke({ status: "AVAILABLE", ownerRef: "acq_1", proposalKind: "ACQUIS" }),
+    ]);
+    expect(activity.join(" ")).toContain("Journal");
   });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-activity-hierarchy.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-activity-hierarchy.test.ts
index 27e536ca..f3d29f5f 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-activity-hierarchy.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-activity-hierarchy.test.ts
@@ -78,5 +78,56 @@ describe("ML5 LIVE activity hierarchy", () => {
     expect(sources.details.length).toBe(45);
     expect(projectMissionHeadline(events)).toBe("Investigation ciblée");
   });
+
+  it("retires a RUNNING objective once the same operation is completed", () => {
+    const groups = buildActivityGroups([
+      {
+        sequence: 1,
+        phase: "nora.objective",
+        nature: "ANNOUNCED",
+        status: "RUNNING",
+        summary: "Orientation du travail à partir de la demande du Pilote",
+        detail: {
+          objective: "Orientation du travail à partir de la demande du Pilote",
+          kind: "OBJECTIVE",
+        },
+      },
+      {
+        sequence: 2,
+        phase: "nora.objective",
+        nature: "COMPLETED",
+        status: "COMPLETED",
+        summary: "Orientation du travail terminée",
+        detail: { objective: "Analyse des règles d'habilitation", metierTitle: "Analyse des règles d'habilitation" },
+      },
+    ]);
+    const understand = groups.find((g) => g.key === "understand");
+    expect(understand?.state).toBe("done");
+    expect(understand?.title).toBe("Analyse des règles d'habilitation");
+  });
+
+  it("does not mark a group done while another operation stays unknown", () => {
+    const groups = buildActivityGroups([
+      {
+        sequence: 1,
+        phase: "nora.source.git",
+        nature: "COMPLETED",
+        status: "COMPLETED",
+        summary: "Consultation Git — a.ts",
+        sourceRef: "git:a",
+        detail: { kind: "GIT", coverage: "CONSULTED", title: "a.ts" },
+      },
+      {
+        sequence: 2,
+        phase: "nora.source.git",
+        nature: "UNCERTAIN",
+        status: "UNKNOWN",
+        summary: "Consultation Git — b.ts",
+        sourceRef: "git:b",
+        detail: { kind: "GIT", coverage: "UNKNOWN", title: "b.ts" },
+      },
+    ]);
+    expect(groups.find((g) => g.key === "sources")?.state).not.toBe("done");
+  });
 });

```

## 17. Verdict

READY WITH RESERVES

Le mécanisme central est démontré : objectif structuré ou attente générique, état corrélé, confirmations opérationnelles hors du corps, historique du tour, accès refusé hors projet. Les publications sont à vérifier dans la section handoff du rapport. Les parcours navigateur ACT-01 à ACT-05 sont reportés, pas passés. Aucune acceptation produit, aucune promotion, aucune CI.
