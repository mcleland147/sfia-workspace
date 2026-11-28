# Review Pack FULL — Complément M6 — Suppression définitive sans blocage métier

- date et heure : 2026-11-28 19:45 Europe/Paris
- cycle : 08 — Delivery / implémentation
- profil : Critical
- typologie : EVOL
- niveau : FULL
- mono-cycle : oui, complément du mandat 6 seulement
- réinitialisation : oui, le pack précédent a été remplacé depuis `RESET`
- autorisation : GO MORRIS 28/11/2026, complément correctif
- arbitrage : SUPPRIMER = SUPPRIMER DÉFINITIVEMENT. Le Pilote propriétaire confirme. Aucun état métier ne bloque. L'identité, le périmètre et l'intégrité technique restent.
- créations : aucune

## Local Git Truth Check

- dépôt : `/Users/morris/Projects/sfia-wt-next-ml5-20261123`, remote `mcleland147/sfia-workspace`
- branche : `sfia/next-ml5-integrated-delivery-20261123`
- HEAD d'entrée : `081d39d0d221bf0a027b3351d41f672fdc9e7236`
- parent d'entrée : `8acc05b7db41a4db3bd5fceff4c238b0cb89ccbd`
- tree d'entrée : `3c3b70a5488db51b6a9494a94c04a8831ab4e25f`
- origin de la branche : `87a25c5eed65a1b30c6f608dcccb57f0c5992eff`
- origin/main et merge-base : `997897fd7cf914771e7d08e8030dc7123fab7d25`
- avance à l'entrée : 3, retard : 0
- HEAD final : `ca6f47a17427218f6b01effdda570cdd78e8d901`
- parent final : `081d39d0d221bf0a027b3351d41f672fdc9e7236`
- tree final : `acd58221f695d8e6b32eb7baf71be6992ca1e8d8`
- message : `fix(studio-next): simplify and secure permanent space deletion`
- avance finale : 4, retard : 0
- commits conservés : M4 `fff5ebd9`, M5 `8acc05b7`, M6 `081d39d0`, complément `ca6f47a1`
- reset, rebase, amend : non
- push produit : non
- non suivis exclus : `.tmp-sfia-review/` et `projects/sfia-studio-next/web/.tmp-sfia-review/`
- `git diff --check` : propre

## Sources lues

- contrat fonctionnel v0.4, commit `6fc186bc867758b0a75ae4548a76694ac0b3c743`, blob `45c70440c44721b715fcbaa45efa039e4ec27288` : PF-33, PF-34, PF-A06, PF-A07, PF-A08
- contrat technique v0.5, blob `6bf4c8a5aaa547d30f50eb9b4ff969778e0bba19`, §5 et §7.6
- contrat UX v0.5, blob `32661149b2dec367efb28abe9317e47ea0f6a917`, §5.1
- suivi v0.33, commit `4d9818b5ae5d1693e44407c847a9cef6d5309587`, blob `a3f5d9633ed0f76f786a5d90e20235ff1f95e50c`, §38
- handoff M6 initial : `898fac13bcd8b8f16b5245829d0f3bb3a5444667`, blob `ef9a07297bf86b031051634ca23ce9ad0f6336d6`
- service `deleteOwnedSpace` et son test PostgreSQL au HEAD `081d39d0`
- ENV-01 blob `14b61f0d1265cf85fcca09b028dd09bd8c71597f`
- product-versioning blob `8bc93e0fafac0f981c446e978a37f5f93d183875`
- ces documents ne sont pas modifiés
- Figma non modifié. F2 : NOT PROVEN

## A. Suppression de assertIdle

`assertIdle` est retiré. La suppression réussit avec un tour `RUNNING` ou `UNKNOWN`, une révision `SAVING` ou `UNKNOWN`, une qualification `PENDING`, un travail `RUNNING`, des tentatives `PREPARED`, `AUTHORIZED`, `DISPATCHED`, `AMBIGUOUS` et `REQUIRES_REQUALIFICATION`, et une restriction `ACTIVE`.

Les frontières d'identité restent :

- le projet appartient au Pilote de la session ;
- une préparation autonome doit être `OPEN` et non rattachée ;
- une préparation rattachée est refusée comme cible autonome et disparaît avec son projet.

Le moteur d'autorité D6 n'est pas modifié. Aucune HumanDecision n'est créée pour la suppression.

## B. Verrous, exclusivité et traitements tardifs

Ordre dans la transaction :

1. Verrouiller la racine et les préparations liées.
2. `LOCK TABLE ... IN SHARE ROW EXCLUSIVE MODE` sur `document_revisions`, `cognitive_works`, `knowledge_subjects`, `knowledge_acquis` et `technical_contracts`. Ces tables portent des pointeurs textuels sans clé étrangère.
3. Verrouiller les conversations, documents, travaux, révisions, travaux parents et observations qui référencent le périmètre.
4. Contrôler l'exclusivité.
5. Supprimer les données exclusivement propres, puis la racine.
6. Toute exception annule la transaction. Le seam d'interruption avant le retour est conservé.

Le verrou de table empêche, pendant la transaction, une nouvelle révision, un nouveau travail ou un nouveau pointeur logique sur ces tables. Le verrou de la racine empêche une insertion d'enfant liée par clé étrangère. Le test ouvre cette fenêtre : une conversation insérée pendant que les verrous sont tenus échoue après le commit, et aucune ligne ne reste.

Après le commit, `dispatchPublication` sur la tentative supprimée répond `NOT_FOUND` avant `resolveGitHubProvider`. Le fournisseur simulé n'est pas appelé. Une exécution qui aurait déjà dépassé cet appel n'est pas annulée : la suppression ne contacte ni GitHub, ni Cursor, ni un fournisseur.

Un tour `RUNNING` validé avant que la suppression obtienne le verrou de racine est ensuite effacé avec le projet. Il ne reste pas orphelin.

## C. Références extérieures

Une observation est supprimée seulement si son projet est la cible ou sa préparation est dans le périmètre, et si elle ne porte pas un autre projet ou une autre préparation. Une observation avec `project_id` nul, une préparation d'un autre espace et le travail de la cible refuse toute la transaction. Ses tokens restent.

La suppression est aussi refusée, sans modifier la ligne extérieure, lorsque :

- `document_revisions.base_revision_id` d'un autre document pointe vers une révision de la cible ;
- `cognitive_works.parent_work_id` d'un autre espace pointe vers un travail de la cible ;
- un contrat, un acquis, un sujet ou une décision extérieurs référence encore la cible ;
- une ligne du périmètre appartient à un autre Pilote.

Le motif est technique. Il ne cite pas l'activité du projet.

Les autres projets, Pilotes, préférences, autorisations, dépôts, liens Git des autres projets et snapshots administrateur restent. Les montants et tokens des observations conservées ne sont pas réécrits.

## Allowlist

- `projects/sfia-studio-next/web/src/domains/preparation/delete-owned-space.ts`
- `projects/sfia-studio-next/web/tests/integration/space-deletion.pg.test.ts`
- `projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md`
- `projects/sfia-studio-next/construction/delivery-history.md`

La route, le composant et le test unitaire du portefeuille ne changent pas. Le dialogue existant affiche déjà le motif renvoyé par le serveur. Les messages d'activité ne sont plus produits.

## Diff utile complet

```
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
index a9dd21fd..71dcfb84 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
@@ -4,7 +4,7 @@

 Le titre d'une préparation est une donnée propre. Sans titre, le portefeuille affiche « Nouvelle préparation ». Le premier titre accepté vient de la qualification structurée déjà produite par Nora, après un tour terminé, et une seule fois. Le renommage manuel du Pilote devient la valeur durable. Une suggestion ultérieure ne la remplace pas.
 Le nom officiel reste `projects.name`. Le créer et le renommer réutilisent la même unicité et le même verrou. Le titre de la préparation ne devient pas ce nom. Une préparation rattachée n'est plus renommable comme espace autonome et disparaît de la projection autonome.
-Le dialogue de renommage reprend le cadre déjà utilisé par le portefeuille. Préparation : « Renommer la préparation », source `1420:2539`. Projet : « Renommer le projet », source `1421:4659`, avec la précision que le dépôt Git n'est pas modifié. Le cadre `1422:4336` confirme un titre déjà proposé ; il n'ajoute pas un second dialogue, le premier titre restant appliqué par le propriétaire. La suppression reprend ce même cadre de confirmation. Le texte dit que les données de l'espace sont effacées définitivement. Une préparation rattachée ne se supprime pas seule : elle disparaît avec son projet. La géométrie du menu, de la synthèse, de la reprise, des lignes et des tuiles n'est pas reprise dans ce chantier.
+Le dialogue de renommage reprend le cadre déjà utilisé par le portefeuille. Préparation : « Renommer la préparation », source `1420:2539`. Projet : « Renommer le projet », source `1421:4659`, avec la précision que le dépôt Git n'est pas modifié. Le cadre `1422:4336` confirme un titre déjà proposé ; il n'ajoute pas un second dialogue, le premier titre restant appliqué par le propriétaire. La suppression reprend ce même cadre de confirmation. Le texte dit que les données de l'espace sont effacées définitivement. Aucun état métier ni restriction active ne bloque cette confirmation. Une préparation rattachée ne se supprime pas seule : elle disparaît avec son projet. Un conflit technique d'intégrité refuse toute la transaction sans effacer une donnée extérieure. La géométrie du menu, de la synthèse, de la reprise, des lignes et des tuiles n'est pas reprise dans ce chantier.
 La migration `029_preparation_title_and_project_name` ajoute les colonnes. Elle ne réécrit aucun titre ni aucun nom déjà présent.
 Le premier titre n'est enregistré que si la commande de tour existe, est terminée, appartient au même Pilote, à la même conversation et à la même préparation, et si le titre normalisé est celui attesté dans la qualification durable. Une suggestion absente, non textuelle ou trop longue est ignorée sans invalider le reste de la qualification. Le schéma de sortie Nora reste un objet Zod simple.
 Le dialogue compare le libellé demandé à l'accusé et à la relecture. Un refus ou un conflit le laisse ouvert, conserve la saisie et, après conflit, présente la valeur relue. Une confirmation ultérieure est une nouvelle intention. Confirmer le titre déjà affiché par Nora le place sous la source manuelle. Seule la dernière clé d'intention est mémorisée : un rejeu plus ancien ne réécrit pas un nom plus récent. Les courses de création et de renommage restent sous le verrou de nom déjà partagé. La page historique des préparations expose aussi le titre canonique ; les libellés d'aperçu ne sont pas remplacés. SAS06 n'est pas modifié : ses quatre repères et l'arrêt de l'animation en mouvement réduit étaient déjà en place.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index fa934e50..f86cea6a 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,15 @@
+## delivery_id: DELIV-2026-11-28-ML5-SPACE-DELETION-CORRECTIVE-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — complément de la suppression définitive, sans veto métier
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `081d39d0d221bf0a027b3351d41f672fdc9e7236`
+- **commit**: `fix(studio-next): simplify and secure permanent space deletion`
+- **schema_revision**: inchangé, `029`
+- **scope**: retrait des refus liés à l'activité ou à une restriction ; contrôles d'exclusivité après verrouillage ; conservation des références extérieures
+- **classe**: NO RELEASE · compatible évolutive · LIVE NOT RUN · CI NOT RUN · push produit non inclus
+- **reserves**: F2 non mesuré ; un appel externe déjà engagé n'est pas annulé ; les réserves des mandats 1 à 5 sont transportées
+
 ## delivery_id: DELIV-2026-11-28-ML5-SPACE-DELETION-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/delete-owned-space.ts b/projects/sfia-studio-next/web/src/domains/preparation/delete-owned-space.ts
index 313b81f5..0a8430c1 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/delete-owned-space.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/delete-owned-space.ts
@@ -6,12 +6,18 @@ export type OwnedSpaceType = "project" | "preparation";
 const NONE = "__none__";

 let interruptBeforeCommit = false;
+let pauseAfterLocks: { entered: () => void; gate: Promise<void> } | null = null;

 /** One-shot test seam. The transaction has already deleted rows and must roll them back. */
 export function failNextSpaceDeletionBeforeCommitForTests() {
   interruptBeforeCommit = true;
 }

+/** One-shot test seam. Locks are held; the caller releases the gate. */
+export function pauseNextSpaceDeletionAfterLocksForTests(entered: () => void, gate: Promise<void>) {
+  pauseAfterLocks = { entered, gate };
+}
+
 function blocked(message: string): never {
   throw new StudioError("CONFLICT", message, { httpStatus: 409 });
 }
@@ -28,6 +34,8 @@ export async function deleteOwnedSpace(
 ): Promise<{ deleted: true; spaceType: OwnedSpaceType; spaceId: string }> {
   const interrupt = interruptBeforeCommit;
   interruptBeforeCommit = false;
+  const pause = pauseAfterLocks;
+  pauseAfterLocks = null;
   return sql.begin(async (tx) => {
     const preps: string[] = [];
     let projectId = NONE;
@@ -67,12 +75,55 @@ export async function deleteOwnedSpace(
     }

     const scope = preps.length ? preps : [NONE];
-    await assertExclusive(tx as unknown as typeof sql, scope, projectId);
-    await assertIdle(tx as unknown as typeof sql, scope, projectId);
-
+    await tx`
+      LOCK TABLE document_revisions, cognitive_works, knowledge_subjects, knowledge_acquis, technical_contracts
+      IN SHARE ROW EXCLUSIVE MODE
+    `;
     await tx`SELECT id FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId} FOR UPDATE`;
     await tx`SELECT id FROM documents WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId} FOR UPDATE`;
     await tx`SELECT id FROM cognitive_works WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId} FOR UPDATE`;
+    await tx`
+      SELECT id FROM document_revisions
+      WHERE document_id IN (
+        SELECT id FROM documents WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
+      )
+      OR base_revision_id IN (
+        SELECT revision.id FROM document_revisions revision
+        JOIN documents document ON document.id = revision.document_id
+        WHERE document.preparation_id = ANY(${scope}) OR document.project_id = ${projectId}
+      )
+      FOR UPDATE
+    `;
+    await tx`
+      SELECT id FROM cognitive_works
+      WHERE parent_work_id IN (
+        SELECT id FROM cognitive_works
+        WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
+      )
+      FOR UPDATE
+    `;
+    await tx`
+      SELECT id FROM provider_usage_observations
+      WHERE project_id = ${projectId}
+         OR preparation_id = ANY(${scope})
+         OR cognitive_work_id IN (
+           SELECT id FROM cognitive_works WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
+         )
+         OR conversation_id IN (
+           SELECT id FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
+         )
+         OR turn_id IN (
+           SELECT turn.id FROM conversation_turn_commands turn
+           JOIN conversations conversation ON conversation.id = turn.conversation_id
+           WHERE conversation.preparation_id = ANY(${scope}) OR conversation.project_id = ${projectId}
+         )
+      FOR UPDATE
+    `;
+    await assertExclusive(tx as unknown as typeof sql, scope, projectId, ownerPilotId);
+    if (pause) {
+      pause.entered();
+      await pause.gate;
+    }

     await tx`
       UPDATE document_revisions SET base_revision_id = NULL
@@ -109,19 +160,9 @@ export async function deleteOwnedSpace(
     `;
     await tx`
       DELETE FROM provider_usage_observations
-      WHERE project_id = ${projectId}
-         OR preparation_id = ANY(${scope})
-         OR conversation_id IN (
-           SELECT id FROM conversations WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
-         )
-         OR cognitive_work_id IN (
-           SELECT id FROM cognitive_works WHERE preparation_id = ANY(${scope}) OR project_id = ${projectId}
-         )
-         OR turn_id IN (
-           SELECT turn.id FROM conversation_turn_commands turn
-           JOIN conversations conversation ON conversation.id = turn.conversation_id
-           WHERE conversation.preparation_id = ANY(${scope}) OR conversation.project_id = ${projectId}
-         )
+      WHERE (project_id = ${projectId} OR preparation_id = ANY(${scope}))
+        AND (project_id IS NULL OR project_id = ${projectId})
+        AND (preparation_id IS NULL OR preparation_id = ANY(${scope}))
     `;
     await tx`
       DELETE FROM cognitive_work_checkpoints
@@ -193,7 +234,7 @@ export async function deleteOwnedSpace(
   });
 }

-async function assertExclusive(tx: typeof sql, preps: string[], projectId: string) {
+async function assertExclusive(tx: typeof sql, preps: string[], projectId: string, ownerPilotId: string) {
   const tables = [
     "conversations",
     "documents",
@@ -226,29 +267,104 @@ async function assertExclusive(tx: typeof sql, preps: string[], projectId: strin
       }
     }
   }
-  const sharedObservation = await tx<{ n: number }[]>`
-    SELECT count(*)::int AS n FROM provider_usage_observations
-    WHERE project_id IS NOT NULL
-      AND project_id <> ${projectId}
+  const foreignObservation = await tx<{ n: number }[]>`
+    SELECT count(*)::int AS n FROM provider_usage_observations obs
+    WHERE (
+      obs.project_id = ${projectId}
+      OR obs.preparation_id = ANY(${preps})
+      OR obs.cognitive_work_id IN (
+        SELECT id FROM cognitive_works
+        WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
+      )
+      OR obs.conversation_id IN (
+        SELECT id FROM conversations
+        WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
+      )
+      OR obs.turn_id IN (
+        SELECT turn.id FROM conversation_turn_commands turn
+        JOIN conversations conversation ON conversation.id = turn.conversation_id
+        WHERE conversation.preparation_id = ANY(${preps}) OR conversation.project_id = ${projectId}
+      )
+    )
+    AND NOT (
+      (obs.project_id = ${projectId} OR obs.preparation_id = ANY(${preps}))
+      AND (obs.project_id IS NULL OR obs.project_id = ${projectId})
+      AND (obs.preparation_id IS NULL OR obs.preparation_id = ANY(${preps}))
+    )
+  `;
+  if ((foreignObservation[0]?.n ?? 0) > 0) {
+    blocked("Une observation d'un autre espace référence encore cet espace.");
+  }
+  const outsideRevision = await tx<{ n: number }[]>`
+    SELECT count(*)::int AS n FROM document_revisions other
+    WHERE other.base_revision_id IN (
+      SELECT revision.id FROM document_revisions revision
+      JOIN documents document ON document.id = revision.document_id
+      WHERE document.preparation_id = ANY(${preps}) OR document.project_id = ${projectId}
+    )
+    AND other.document_id NOT IN (
+      SELECT id FROM documents
+      WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
+    )
+  `;
+  if ((outsideRevision[0]?.n ?? 0) > 0) {
+    blocked("Une révision d'un autre document référence encore cet espace.");
+  }
+  const outsideWork = await tx<{ n: number }[]>`
+    SELECT count(*)::int AS n FROM cognitive_works other
+    WHERE other.parent_work_id IN (
+      SELECT id FROM cognitive_works
+      WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
+    )
+    AND NOT (other.preparation_id = ANY(${preps}) OR other.project_id = ${projectId})
+  `;
+  if ((outsideWork[0]?.n ?? 0) > 0) {
+    blocked("Un travail d'un autre espace référence encore cet espace.");
+  }
+  const outsideContract = await tx<{ n: number }[]>`
+    SELECT count(*)::int AS n FROM technical_contracts other
+    WHERE other.project_id <> ${projectId}
       AND (
-        cognitive_work_id IN (
+        other.cognitive_work_id IN (
           SELECT id FROM cognitive_works
           WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
         )
-        OR conversation_id IN (
-          SELECT id FROM conversations
-          WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
+        OR other.supersedes_contract_id IN (
+          SELECT id FROM technical_contracts
+          WHERE project_id = ${projectId} OR preparation_id = ANY(${preps})
         )
-        OR turn_id IN (
+        OR other.source_turn_command_id IN (
           SELECT turn.id FROM conversation_turn_commands turn
           JOIN conversations conversation ON conversation.id = turn.conversation_id
           WHERE conversation.preparation_id = ANY(${preps}) OR conversation.project_id = ${projectId}
         )
       )
   `;
-  if ((sharedObservation[0]?.n ?? 0) > 0) {
+  if ((outsideContract[0]?.n ?? 0) > 0) {
+    blocked("Une donnée de cet espace est aussi rattachée à un autre projet.");
+  }
+  const outsideAcquis = await tx<{ n: number }[]>`
+    SELECT count(*)::int AS n FROM knowledge_acquis other
+    WHERE NOT (other.preparation_id = ANY(${preps}))
+      AND (other.project_id IS NULL OR other.project_id <> ${projectId})
+      AND other.supersedes_acquis_id IN (
+        SELECT id FROM knowledge_acquis
+        WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
+      )
+  `;
+  if ((outsideAcquis[0]?.n ?? 0) > 0) {
     blocked("Une donnée de cet espace est aussi rattachée à un autre projet.");
   }
+  for (const table of ["conversations", "documents", "cognitive_works", "knowledge_subjects", "knowledge_acquis", "knowledge_open_points"]) {
+    const foreignOwner = await tx<{ n: number }[]>`
+      SELECT count(*)::int AS n FROM ${tx(table)}
+      WHERE (preparation_id = ANY(${preps}) OR project_id = ${projectId})
+        AND owner_pilot_id <> ${ownerPilotId}
+    `;
+    if ((foreignOwner[0]?.n ?? 0) > 0) {
+      blocked("Une donnée de cet espace appartient à un autre Pilote.");
+    }
+  }
   const foreignWork = await tx<{ n: number }[]>`
     SELECT count(*)::int AS n FROM cognitive_works
     WHERE conversation_id IN (
@@ -302,36 +418,3 @@ async function assertExclusive(tx: typeof sql, preps: string[], projectId: strin
     blocked("Une décision d'un autre projet référence encore cet espace.");
   }
 }
-
-async function assertIdle(tx: typeof sql, preps: string[], projectId: string) {
-  const turns = await tx<{ n: number }[]>`
-    SELECT count(*)::int AS n
-    FROM conversation_turn_commands turn
-    JOIN conversations conversation ON conversation.id = turn.conversation_id
-    WHERE (conversation.preparation_id = ANY(${preps}) OR conversation.project_id = ${projectId})
-      AND turn.status IN ('RUNNING', 'ACCEPTED', 'UNKNOWN')
-  `;
-  if ((turns[0]?.n ?? 0) > 0) blocked("Un échange Nora est encore en cours.");
-  const effects = await tx<{ n: number }[]>`
-    SELECT count(*)::int AS n FROM effect_attempts
-    WHERE project_id = ${projectId} AND status IN ('AUTHORIZED', 'DISPATCHED', 'AMBIGUOUS')
-  `;
-  if ((effects[0]?.n ?? 0) > 0) blocked("Une opération externe n'est pas terminée.");
-  const qualification = await tx<{ n: number }[]>`
-    SELECT count(*)::int AS n FROM trajectory_qualification_operations
-    WHERE (project_id = ${projectId} OR preparation_id = ANY(${preps}))
-      AND status IN ('PENDING', 'RUNNING', 'UNKNOWN')
-  `;
-  if ((qualification[0]?.n ?? 0) > 0) blocked("Une qualification est encore en cours.");
-  const works = await tx<{ n: number }[]>`
-    SELECT count(*)::int AS n FROM cognitive_works
-    WHERE (preparation_id = ANY(${preps}) OR project_id = ${projectId})
-      AND status = 'RUNNING'
-  `;
-  if ((works[0]?.n ?? 0) > 0) blocked("Un travail Nora est encore en cours.");
-  const restrictions = await tx<{ n: number }[]>`
-    SELECT count(*)::int AS n FROM governance_restrictions
-    WHERE project_id = ${projectId} AND status = 'ACTIVE'
-  `;
-  if ((restrictions[0]?.n ?? 0) > 0) blocked("Une restriction active empêche cette suppression.");
-}
diff --git a/projects/sfia-studio-next/web/tests/integration/space-deletion.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/space-deletion.pg.test.ts
index b597a4c4..f698d009 100644
--- a/projects/sfia-studio-next/web/tests/integration/space-deletion.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/space-deletion.pg.test.ts
@@ -12,6 +12,7 @@ import { newId } from "@/lib/ids";
 import {
   deleteOwnedSpace,
   failNextSpaceDeletionBeforeCommitForTests,
+  pauseNextSpaceDeletionAfterLocksForTests,
 } from "@/domains/preparation/delete-owned-space";
 import { createProjectCommand } from "@/domains/preparation/create-project";
 import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
@@ -20,6 +21,16 @@ vi.mock("@/domains/identity/session", () => ({
   requireStudioSession: vi.fn(),
 }));

+vi.mock("@/domains/integrations/github-provider", async () => {
+  const actual = await vi.importActual<Record<string, unknown>>("@/domains/integrations/github-provider");
+  return {
+    ...actual,
+    resolveGitHubProvider: vi.fn(() => {
+      throw new Error("provider called");
+    }),
+  };
+});
+
 import { requireStudioSession } from "@/domains/identity/session";
 import { DELETE, GET as GET_SPACE } from "@/app/api/portfolio/spaces/[type]/[id]/route";
 import { GET as GET_PROJECT } from "@/app/api/projects/[projectId]/route";
@@ -392,22 +403,14 @@ describe("permanent space deletion (PG)", () => {
   it("contains no external call", () => {
     const source = readFileSync(new URL("../../src/domains/preparation/delete-owned-space.ts", import.meta.url), "utf8");
     expect(source).not.toMatch(/from ["']@\/domains\/execution|from ["']@\/domains\/integrations|openai|fetch\(/);
+    expect(source).not.toMatch(/assertIdle/);
   });

-  it("refuses an attached preparation, another pilot, and an active operation", async () => {
+  it("refuses an attached preparation and another pilot", async () => {
     await expect(deleteOwnedSpace(pilotA, "preparation", prep)).rejects.toMatchObject({ code: "CONFLICT" });
     await expect(deleteOwnedSpace(pilotB, "project", project)).rejects.toMatchObject({ code: "NOT_FOUND" });
-    await sql`
-      INSERT INTO governance_restrictions (id, project_id, target_kind, origin_decision_id, status)
-      VALUES (${id("active")}, ${project}, 'PROJECT', ${id("decision")}, 'ACTIVE')
-    `;
-    await expect(deleteOwnedSpace(pilotA, "project", project)).rejects.toMatchObject({
-      code: "CONFLICT",
-      message: "Une restriction active empêche cette suppression.",
-    });
     const still = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${project}`;
     expect(still[0]?.n).toBe(1);
-    await sql`DELETE FROM governance_restrictions WHERE id = ${id("active")}`;
   });

   it("rolls the whole deletion back when commit is interrupted", async () => {
@@ -421,31 +424,35 @@ describe("permanent space deletion (PG)", () => {
     expect(decisionRows[0]?.n).toBe(1);
   });

-  it("blocks when a concurrent turn is admitted before commit", async () => {
+  it("deletes a turn admitted before the deletion lock is acquired", async () => {
+    const raceProject = id("race_project");
+    const racePrep = id("race_prep");
+    await sql`INSERT INTO preparations (id, owner_pilot_id, status) VALUES (${racePrep}, ${pilotA}, 'OPEN')`;
+    await sql`INSERT INTO projects (id, owner_pilot_id, name) VALUES (${raceProject}, ${pilotA}, ${`m6-space-race-${stamp}`})`;
+    await sql`INSERT INTO preparation_project_links (preparation_id, project_id) VALUES (${racePrep}, ${raceProject})`;
+    await sql`INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id) VALUES (${id("race_conv")}, ${racePrep}, ${raceProject}, ${pilotA})`;
     let locked!: () => void;
     const lockedGate = new Promise<void>((resolve) => { locked = resolve; });
     let release!: () => void;
     const releaseGate = new Promise<void>((resolve) => { release = resolve; });
     const holder = sql.begin(async (tx) => {
-      await tx`SELECT id FROM projects WHERE id = ${project} FOR UPDATE`;
+      await tx`SELECT id FROM projects WHERE id = ${raceProject} FOR UPDATE`;
       locked();
       await releaseGate;
       await tx`
         INSERT INTO conversation_turn_commands (
           id, conversation_id, owner_pilot_id, client_turn_key, request_fingerprint, operation_id, status
         ) VALUES (
-          ${id("race")}, ${id("conv")}, ${pilotA}, ${id("racekey")}, 'fp', ${id("raceop")}, 'RUNNING'
+          ${id("race")}, ${id("race_conv")}, ${pilotA}, ${id("racekey")}, 'fp', ${id("raceop")}, 'RUNNING'
         )
       `;
     });
     await lockedGate;
-    const pending = deleteOwnedSpace(pilotA, "project", project);
+    const pending = deleteOwnedSpace(pilotA, "project", raceProject);
     release();
     await holder;
-    await expect(pending).rejects.toMatchObject({ message: "Un échange Nora est encore en cours." });
-    const projectRows = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${project}`;
-    expect(projectRows[0]?.n).toBe(1);
-    await sql`DELETE FROM conversation_turn_commands WHERE id = ${id("race")}`;
+    await expect(pending).resolves.toEqual({ deleted: true, spaceType: "project", spaceId: raceProject });
+    expect(await countOwned(raceProject, [racePrep])).toEqual([]);
   });

   it("deletes the project graph and keeps the other spaces and shared resources", async () => {
@@ -557,6 +564,187 @@ describe("permanent space deletion (PG)", () => {
     await sql`DELETE FROM preparations WHERE id = ${sharedPrep}`;
   });

+  it("deletes a project while business activity and an active restriction are present", async () => {
+    const busy = id("busy");
+    const busyPrep = id("busy_prep");
+    await sql`INSERT INTO preparations (id, owner_pilot_id, status) VALUES (${busyPrep}, ${pilotA}, 'OPEN')`;
+    await sql`INSERT INTO projects (id, owner_pilot_id, name) VALUES (${busy}, ${pilotA}, ${`m6-space-busy-${stamp}`})`;
+    await sql`INSERT INTO preparation_project_links (preparation_id, project_id) VALUES (${busyPrep}, ${busy})`;
+    await sql`INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id) VALUES (${id("busy_conv")}, ${busyPrep}, ${busy}, ${pilotA})`;
+    await sql`
+      INSERT INTO conversation_turn_commands (
+        id, conversation_id, owner_pilot_id, client_turn_key, request_fingerprint, operation_id, status
+      ) VALUES
+        (${id("busy_run")}, ${id("busy_conv")}, ${pilotA}, ${id("busy_run_key")}, 'fp', ${id("busy_run_op")}, 'RUNNING'),
+        (${id("busy_unknown")}, ${id("busy_conv")}, ${pilotA}, ${id("busy_unknown_key")}, 'fp', ${id("busy_unknown_op")}, 'UNKNOWN')
+    `;
+    await sql`INSERT INTO documents (id, preparation_id, project_id, owner_pilot_id, title) VALUES (${id("busy_doc")}, ${busyPrep}, ${busy}, ${pilotA}, 'Note')`;
+    await sql`
+      INSERT INTO document_revisions (id, document_id, revision_number, content_markdown, status) VALUES
+        (${id("busy_saving")}, ${id("busy_doc")}, 1, 'en cours', 'SAVING'),
+        (${id("busy_unknown_rev")}, ${id("busy_doc")}, 2, 'inconnu', 'UNKNOWN')
+    `;
+    await sql`
+      INSERT INTO trajectory_qualification_operations (id, project_id, preparation_id, pilot_id, status, phase)
+      VALUES (${id("busy_qual")}, ${busy}, ${busyPrep}, ${pilotA}, 'PENDING', 'open')
+    `;
+    await sql`
+      INSERT INTO cognitive_works (id, owner_pilot_id, preparation_id, project_id, conversation_id, status, objective)
+      VALUES (${id("busy_work")}, ${pilotA}, ${busyPrep}, ${busy}, ${id("busy_conv")}, 'RUNNING', 'actif')
+    `;
+    await sql`
+      INSERT INTO human_decisions (id, project_id, pilot_id, source_kind, source_ref, kind, statement, state)
+      VALUES (${id("busy_decision")}, ${busy}, ${pilotA}, 'pilot', 'm6', 'RETAIN', 'garder', 'APPLICABLE')
+    `;
+    await sql`
+      INSERT INTO governance_restrictions (id, project_id, target_kind, origin_decision_id, status)
+      VALUES (${id("busy_restriction")}, ${busy}, 'PROJECT', ${id("busy_decision")}, 'ACTIVE')
+    `;
+    for (const status of ["PREPARED", "AUTHORIZED", "DISPATCHED", "AMBIGUOUS", "REQUIRES_REQUALIFICATION"]) {
+      await sql`
+        INSERT INTO effect_attempts (id, pilot_id, project_id, kind, status, correlation_key, fingerprint)
+        VALUES (${id(`busy_${status}`)}, ${pilotA}, ${busy}, 'GIT_PUBLICATION', ${status}, ${id(`busy_corr_${status}`)}, 'fp')
+      `;
+    }
+    await expect(deleteOwnedSpace(pilotA, "project", busy)).resolves.toEqual({
+      deleted: true,
+      spaceType: "project",
+      spaceId: busy,
+    });
+    expect(await countOwned(busy, [busyPrep])).toEqual([]);
+    const siblingRows = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${sibling}`;
+    expect(siblingRows[0]?.n).toBe(1);
+  });
+
+  it("rejects a conversation inserted while the deletion locks are held", async () => {
+    const lockedProject = id("held");
+    const lockedPrep = id("held_prep");
+    await sql`INSERT INTO preparations (id, owner_pilot_id, status) VALUES (${lockedPrep}, ${pilotA}, 'OPEN')`;
+    await sql`INSERT INTO projects (id, owner_pilot_id, name) VALUES (${lockedProject}, ${pilotA}, ${`m6-space-held-${stamp}`})`;
+    await sql`INSERT INTO preparation_project_links (preparation_id, project_id) VALUES (${lockedPrep}, ${lockedProject})`;
+    let entered!: () => void;
+    const enteredGate = new Promise<void>((resolve) => { entered = resolve; });
+    let release!: () => void;
+    const releaseGate = new Promise<void>((resolve) => { release = resolve; });
+    pauseNextSpaceDeletionAfterLocksForTests(entered, releaseGate);
+    const pending = deleteOwnedSpace(pilotA, "project", lockedProject);
+    await enteredGate;
+    const insert = sql`
+      INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id)
+      VALUES (${id("held_conv")}, ${lockedPrep}, ${lockedProject}, ${pilotA})
+    `;
+    await new Promise((resolve) => setTimeout(resolve, 200));
+    release();
+    await expect(pending).resolves.toEqual({ deleted: true, spaceType: "project", spaceId: lockedProject });
+    await expect(insert).rejects.toThrow();
+    const leftover = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM conversations WHERE id = ${id("held_conv")}`;
+    expect(leftover[0]?.n).toBe(0);
+  });
+
+  it("does not admit a new external step after the project is gone", async () => {
+    const target = id("effect_project");
+    const targetPrep = id("effect_prep");
+    await sql`INSERT INTO preparations (id, owner_pilot_id, status) VALUES (${targetPrep}, ${pilotA}, 'OPEN')`;
+    await sql`INSERT INTO projects (id, owner_pilot_id, name) VALUES (${target}, ${pilotA}, ${`m6-space-effect-${stamp}`})`;
+    await sql`INSERT INTO preparation_project_links (preparation_id, project_id) VALUES (${targetPrep}, ${target})`;
+    await sql`
+      INSERT INTO effect_attempts (id, pilot_id, project_id, kind, status, correlation_key, fingerprint)
+      VALUES (${id("late_attempt")}, ${pilotA}, ${target}, 'GIT_PUBLICATION', 'AUTHORIZED', ${id("late_corr")}, 'fp')
+    `;
+    await deleteOwnedSpace(pilotA, "project", target);
+    const provider = await import("@/domains/integrations/github-provider");
+    const { dispatchPublication } = await import("@/domains/execution/effect-service");
+    await expect(dispatchPublication({
+      pilotId: pilotA,
+      projectId: target,
+      attemptId: id("late_attempt"),
+    })).rejects.toMatchObject({ code: "NOT_FOUND" });
+    expect(provider.resolveGitHubProvider).not.toHaveBeenCalled();
+    const attempts = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM effect_attempts WHERE id = ${id("late_attempt")}`;
+    expect(attempts[0]?.n).toBe(0);
+  });
+
+  it("keeps an observation that points at the target from another preparation", async () => {
+    const target = id("obs_project");
+    const targetPrep = id("obs_prep");
+    await sql`INSERT INTO preparations (id, owner_pilot_id, status) VALUES (${targetPrep}, ${pilotA}, 'OPEN')`;
+    await sql`INSERT INTO projects (id, owner_pilot_id, name) VALUES (${target}, ${pilotA}, ${`m6-space-obs-${stamp}`})`;
+    await sql`INSERT INTO preparation_project_links (preparation_id, project_id) VALUES (${targetPrep}, ${target})`;
+    await sql`INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id) VALUES (${id("obs_conv")}, ${targetPrep}, ${target}, ${pilotA})`;
+    await sql`
+      INSERT INTO cognitive_works (id, owner_pilot_id, preparation_id, project_id, conversation_id, status, objective)
+      VALUES (${id("obs_work")}, ${pilotA}, ${targetPrep}, ${target}, ${id("obs_conv")}, 'COMPLETE', 'cible')
+    `;
+    await sql`
+      INSERT INTO provider_usage_observations (
+        id, owner_pilot_id, preparation_id, cognitive_work_id, tariff_version, estimated_cost_usd,
+        cost_coverage, status, granularity, idempotency_key, input_tokens
+      ) VALUES (
+        ${crypto.randomUUID()}::uuid, ${pilotA}, ${prepSibling}, ${id("obs_work")},
+        'v-test', 2.5, 'ESTIMATED', 'COMPLETE', 'REQUEST', ${id("obs_foreign")}, 12
+      )
+    `;
+    await expect(deleteOwnedSpace(pilotA, "project", target)).rejects.toMatchObject({
+      code: "CONFLICT",
+      message: "Une observation d'un autre espace référence encore cet espace.",
+    });
+    const kept = await sql<{ tokens: string; n: number }[]>`
+      SELECT input_tokens::text AS tokens, count(*)::int AS n
+      FROM provider_usage_observations WHERE idempotency_key = ${id("obs_foreign")} GROUP BY input_tokens
+    `;
+    expect(kept[0]).toEqual({ tokens: "12", n: 1 });
+    const targetRows = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM projects WHERE id = ${target}`;
+    expect(targetRows[0]?.n).toBe(1);
+    await sql`DELETE FROM provider_usage_observations WHERE idempotency_key = ${id("obs_foreign")}`;
+    await deleteOwnedSpace(pilotA, "project", target);
+  });
+
+  it("refuses when another document or work still points at the target", async () => {
+    const target = id("ref_project");
+    const targetPrep = id("ref_prep");
+    await sql`INSERT INTO preparations (id, owner_pilot_id, status) VALUES (${targetPrep}, ${pilotA}, 'OPEN')`;
+    await sql`INSERT INTO projects (id, owner_pilot_id, name) VALUES (${target}, ${pilotA}, ${`m6-space-ref-${stamp}`})`;
+    await sql`INSERT INTO preparation_project_links (preparation_id, project_id) VALUES (${targetPrep}, ${target})`;
+    await sql`INSERT INTO documents (id, preparation_id, project_id, owner_pilot_id, title) VALUES (${id("ref_doc")}, ${targetPrep}, ${target}, ${pilotA}, 'Cible')`;
+    await sql`INSERT INTO document_revisions (id, document_id, revision_number, content_markdown, status) VALUES (${id("ref_rev")}, ${id("ref_doc")}, 1, 'cible', 'AVAILABLE')`;
+    await sql`INSERT INTO documents (id, preparation_id, project_id, owner_pilot_id, title) VALUES (${id("ref_other_doc")}, ${prepSibling}, ${sibling}, ${pilotA}, 'Frère')`;
+    await sql`INSERT INTO document_revisions (id, document_id, revision_number, content_markdown, status, base_revision_id) VALUES (${id("ref_other_rev")}, ${id("ref_other_doc")}, 1, 'frère', 'AVAILABLE', ${id("ref_rev")})`;
+    await sql`INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id) VALUES (${id("ref_conv")}, ${targetPrep}, ${target}, ${pilotA})`;
+    await sql`
+      INSERT INTO cognitive_works (id, owner_pilot_id, preparation_id, project_id, conversation_id, status, objective)
+      VALUES (${id("ref_work")}, ${pilotA}, ${targetPrep}, ${target}, ${id("ref_conv")}, 'COMPLETE', 'cible')
+    `;
+    await sql`
+      INSERT INTO cognitive_works (id, owner_pilot_id, preparation_id, project_id, status, objective, parent_work_id)
+      VALUES (${id("ref_other_work")}, ${pilotA}, ${prepSibling}, ${sibling}, 'COMPLETE', 'frère', ${id("ref_work")})
+    `;
+    await expect(deleteOwnedSpace(pilotA, "project", target)).rejects.toMatchObject({
+      message: "Une révision d'un autre document référence encore cet espace.",
+    });
+    const pointer = await sql<{ base_revision_id: string }[]>`SELECT base_revision_id FROM document_revisions WHERE id = ${id("ref_other_rev")}`;
+    expect(pointer[0]?.base_revision_id).toBe(id("ref_rev"));
+    await sql`UPDATE document_revisions SET base_revision_id = NULL WHERE id = ${id("ref_other_rev")}`;
+    await expect(deleteOwnedSpace(pilotA, "project", target)).rejects.toMatchObject({
+      message: "Un travail d'un autre espace référence encore cet espace.",
+    });
+    const parent = await sql<{ parent_work_id: string }[]>`SELECT parent_work_id FROM cognitive_works WHERE id = ${id("ref_other_work")}`;
+    expect(parent[0]?.parent_work_id).toBe(id("ref_work"));
+    await sql`UPDATE cognitive_works SET parent_work_id = NULL WHERE id = ${id("ref_other_work")}`;
+    await sql`
+      INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id)
+      VALUES (${id("foreign_owner_conv")}, ${targetPrep}, ${target}, ${pilotB})
+    `;
+    await expect(deleteOwnedSpace(pilotA, "project", target)).rejects.toMatchObject({
+      message: "Une donnée de cet espace appartient à un autre Pilote.",
+    });
+    await sql`DELETE FROM conversations WHERE id = ${id("foreign_owner_conv")}`;
+    await deleteOwnedSpace(pilotA, "project", target);
+    const siblingWork = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM cognitive_works WHERE id = ${id("ref_other_work")}`;
+    expect(siblingWork[0]?.n).toBe(1);
+    const siblingRevision = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM document_revisions WHERE id = ${id("ref_other_rev")}`;
+    expect(siblingRevision[0]?.n).toBe(1);
+  });
+
   it("serves the deletion over HTTP and closes the old routes", async () => {
     const httpPrep = id("prep_http");
     const httpProject = id("project_http");
```

## Preuves

Base `sfia_next_e2e`, port `5433`. Exécution du 2026-11-28 19:36:56 :

- `space-deletion.pg.test.ts` : 13 tests passés
- `portfolio-organization.test.ts` : 4 tests passés

Les 13 tests couvrent l'identité, le rollback injecté, le tour admis avant le verrou puis effacé, le graphe complet, la préparation autonome et le nom libéré, l'observation ambiguë déjà connue, l'activité métier et la restriction active, l'insertion concurrente sous verrou, le refus d'une nouvelle publication après suppression sans appel du fournisseur simulé, l'observation d'un autre espace, la révision et le travail extérieurs, le propriétaire étranger, puis la matrice HTTP déjà en place.

TypeScript : 16 diagnostics historiques. Aucun dans `delete-owned-space.ts` ni dans le test. Lint ciblé : propre. Build de production : code de sortie 0. Les avertissements lint sont historiques.

Navigateur sur `http://127.0.0.1:3101`, base `sfia_next_e2e`, projet isolé `m6c-actif` porteur d'un tour `RUNNING` :

- la confirmation affiche le nom et la phrase irréversible, sans motif d'activité ;
- Annuler laisse le projet, les compteurs restent à 03 projets et 02 favoris ;
- Supprimer définitivement passe par `Modification en cours…`, le bouton est désactivé, la ligne n'est pas retirée avant l'accusé ;
- après l'accusé, les compteurs passent à 02 projets et 01 favori, le lien du rail disparaît ;
- `GET /projects/proj_m6c_browser` affiche `Projet introuvable` ;
- `m6c-archive` reste dans les archives ; la restauration reprend le texte existant et ramène le compteur de projets à 03 ;
- cet espace de test restauré est ensuite effacé par la même opération, sur la base E2E seulement.

F2 : NOT PROVEN. Aucune comparaison appariée.

## Identité DEV

- branche : `sfia/next-ml5-integrated-delivery-20261123`
- HEAD initial : `081d39d0d221bf0a027b3351d41f672fdc9e7236`
- HEAD final : `ca6f47a17427218f6b01effdda570cdd78e8d901`
- parent : `081d39d0d221bf0a027b3351d41f672fdc9e7236`
- tree : `acd58221f695d8e6b32eb7baf71be6992ca1e8d8`
- BUILD_ID : `4Ffjc9gLKXGXlUk14Q61L`
- processus : `next-server` PID `85997`
- port : `3100`
- lane : DEV
- base : `sfia_next_dev`
- PostgreSQL : `127.0.0.1:5433`
- schéma : `029`, inchangé
- build d'entrée conservé : `/tmp/sfia-next-dev-build-081d39d0`, BUILD_ID `c3Tia81F76vSnS3CmYSj7`
- smoke : `/login` 200, `/portfolio` 200, `/settings/consumption` 200
- suppression non authentifiée : 401 `SESSION_INVALID`
- aucun projet historique DEV supprimé
- RECETTE : PID `58965`, port `3200`, inchangée
- push produit : non
- CI distante : non exécutée
- PR : aucune
- URL : `http://127.0.0.1:3100/portfolio`
- classe : NO RELEASE. STABLE NOT AVAILABLE. NOT ADOPTED.

## PF-A06 / PF-A07 / PF-A08

PF-A06 prouvé pour ce complément : suppression malgré l'activité et la restriction, refus limité à l'identité et à l'intégrité, atomicité, rollback, concurrence sous verrou, traitement tardif sans recréation ni nouvel appel fournisseur, références extérieures conservées.

PF-A07 : 401, 400, 404 et 409 restent couverts par le test HTTP rejoué. 403 et 503 ne sont pas produits. Le conflit technique est un message explicite.

PF-A08 : F2 NOT PROVEN. Le clavier et le responsive ne sont pas remesurés. La confirmation existante est conservée.

## Réserves

- F2 NOT PROVEN.
- Un appel GitHub déjà engagé, au-delà de `resolveGitHubProvider`, n'est pas arrêté. Aucune nouvelle étape n'est admise après la suppression.
- 403 et 503 ne sont pas produits.
- L'accusé perdu reste prouvé par le réconciliateur unitaire, pas par une coupure réseau dans le navigateur.
- Les réserves des mandats 1 à 5, FIN-REC-01, FIN-REC-02, 17 MP, 17 contrôles RECETTE, L6, la Capacité 2 et T08 restent ouverts.
- R5 IN PROGRESS. ML5 OPEN. L7 OPEN. Livraison 1 NOT ACCEPTED. Gate C OPEN. R6 NOT STARTED.
- NO RELEASE. STABLE NOT AVAILABLE. NOT ADOPTED.

Ces réserves ne couvrent pas une suppression partielle, un orphelin, un veto métier réintroduit ou une donnée extérieure effacée.

## Verdict Cursor

READY WITH RESERVES

La réception n'est pas prononcée. La qualification intégrée et la promotion RECETTE ne sont pas engagées.
