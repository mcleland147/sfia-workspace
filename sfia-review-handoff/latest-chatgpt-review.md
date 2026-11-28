# Review Pack FULL — Correctif résiduel M6 — Intégrité de la suppression

- date et heure : 2026-11-28 19:52 Europe/Paris
- cycle : 08 — Delivery / implémentation
- profil : Critical
- typologie : EVOL
- Review Pack : FULL, mono-cycle, correctif résiduel uniquement
- autorisation : GO Morris 28/11/2026, dernier correctif M6
- décision fonctionnelle conservée : SUPPRIMER = SUPPRIMER DÉFINITIVEMENT ; aucun état métier ne bloque
- commit : 785253fd7003b95af631248da6bdff6279b2e541
- parent : ca6f47a17427218f6b01effdda570cdd78e8d901
- tree : 6f22ebae5e8a2780ee20d12bf30b747918096997
- message : fix(studio-next): close deletion integrity gaps
- avance : 5 ; retard : 0 ; origine produit : 87a25c5eed65a1b30c6f608dcccb57f0c5992eff
- push produit : non

## Local Git Truth Check

Correspondance avant édition. Branche sfia/next-ml5-integrated-delivery-20261123. HEAD ca6f47a17427218f6b01effdda570cdd78e8d901. Parent 081d39d0d221bf0a027b3351d41f672fdc9e7236. Tree acd58221f695d8e6b32eb7baf71be6992ca1e8d8. Origine de branche 87a25c5eed65a1b30c6f608dcccb57f0c5992eff. origin/main et merge-base 997897fd7cf914771e7d08e8030dc7123fab7d25. Avance 4, retard 0. Index propre. Non suivis limités à .tmp-sfia-review. Aucun reset, amend ou rebase. Les quatre commits locaux précédents sont conservés. Après le commit : avance 5.

## Sources lues pour ce correctif

- Suivi v0.34, commit e833003c906123572d28542600996cf990d34555, blob c5e1e1b8d778fda5323011651297fe8704ffd0bd, §39 lu intégralement.
- delete-owned-space.ts et space-deletion.pg.test.ts au HEAD d'entrée.
- usage-accounting.ts : ownerPilotId absent est enregistré null. Ce null n'est pas un autre Pilote.
- postgres/src/query.js : la requête taguée ne part qu'à then, catch, finally ou execute.
- Contrats déjà établis au commit 6fc186bc : fonctionnel v0.4 blob 45c70440, technique v0.5 blob 6bf4c8a5, UX v0.5 blob 32661149. Non modifiés.
- Handoff précédent 408657d6f786f9b4a336074106140145aa062357, blob c3de10c86bfc9377c9b753d9cd411ac8ea013ab5, relu comme base distante avant publication.

## R-M6-01 — avant / après

Avant : outsideWork excluait une ligne par `NOT (preparation_id = ANY(preps) OR project_id = projectId)`. Pour une autre préparation dont project_id est NULL, la comparaison vaut UNKNOWN et la référence parent_work_id échappait au contrôle.

Après : la ligne extérieure est retenue si sa préparation n'est pas dans le périmètre, y compris quand elle est NULL, et si son projet est NULL ou différent de la cible. Le périmètre effacé n'est pas élargi.

Preuve PostgreSQL : projet cible avec un travail ; préparation autonome extérieure ; travail extérieur à project_id NULL dont parent_work_id vise le travail cible. Refus CONFLICT « Un travail d'un autre espace référence encore cet espace. » Projet, travail cible et travail extérieur conservés, pointeur inchangé. Après remise du pointeur à NULL, la suppression du projet réussit et le travail extérieur reste, sans parent. La préparation extérieure est ensuite retirée par sa propre suppression.

## R-M6-02 — avant / après

Avant : le contrôle de propriétaire couvrait six tables. provider_usage_observations était effacé sur le seul rattachement à l'espace.

Après : avant toute mutation destructive, une observation du périmètre dont owner_pilot_id est un autre Pilote non nul est refusée. Une observation du périmètre dont owner_pilot_id est NULL est refusée séparément, sans être qualifiée d'appartenance étrangère. Le DELETE n'enlève que les observations dont owner_pilot_id est exactement le Pilote de session. Une observation globale, hors prédicat de périmètre, n'est pas sélectionnée. Tarifs, coûts, attribution, projections, facturation et schéma sont inchangés.

Preuve PostgreSQL : projet du Pilote A, observation du projet appartenant au Pilote B. Refus « Une observation de cet espace appartient à un autre Pilote. » Projet conservé. Propriétaire, 18 jetons, coût 3.2500000000 et idempotency_key inchangés. Observation sans propriétaire : refus distinct, propriétaire NULL et 4 jetons conservés. Observation du Pilote A : suppression nominale, ligne absente ensuite.

## R-M6-03 — attente réelle

Avant : `const insert = sql\`...\`` créait une requête postgres-js non déclenchée. Elle n'était attendue qu'après la libération du verrou. Le délai de 200 ms ne prouvait rien.

Après : la suppression démarre, le seam confirme les verrous, une seconde connexion nommée m6_lock_probe exécute réellement l'insertion par then(). pg_stat_activity joint à pg_locks observe wait_event_type Lock et granted false, avec une borne de 5 secondes. Le seam est alors libéré. Le commit réussit. L'insertion échoue en 23503. Aucune conversation orpheline. finally libère le seam et ferme la connexion.

Le test a réussi dans la suite de 909 ms. L'assertion d'attente a donc été satisfaite avant l'échéance, et non par un simple délai. La stratégie de verrouillage n'est pas modifiée.

## Résultats

- space-deletion.pg.test.ts : 15 tests PASS, dont les trois preuves et la suite existante, base sfia_next_e2e, port 5433.
- portfolio-organization.test.ts : 4 tests PASS.
- eslint ciblé : 0.
- tsc --noEmit : 16 diagnostics historiques, aucun dans les fichiers du correctif.
- git diff --check : propre.
- build production : réussi. BUILD_ID ocqwE2XKIzLKTSuHGRNxf.
- smoke : /login, /portfolio, /settings/consumption en 200 ; DELETE sans session en 401 SESSION_INVALID.
- build d'entrée conservé : /tmp/sfia-next-dev-build-ca6f47a1, BUILD_ID 4Ffjc9gLKXGXlUk14Q61L.
- DEV : http://127.0.0.1:3100, PID 95074, lane DEV, base sfia_next_dev, schéma 029 non migré.
- RECETTE : port 3200, PID 58965, inchangé.
- F2 : NOT PROVEN, réserve transportée. Aucune nouvelle campagne navigateur. Le composant UX n'est pas modifié.

## Limites

Aucune migration. Aucun veto métier rétabli. assertIdle reste absent. La suppression malgré une activité ou une restriction ACTIVE reste couverte par la suite existante, non réécrite. 403 et 503 ne sont pas produits. L'accusé perdu n'est pas injecté dans le navigateur. Un appel externe déjà engagé n'est pas annulé. WEB LIVE OUT. Pas de push produit, de CI distante, de PR, de release.

## Diff utile

```diff
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
index 71dcfb84..81fe88ec 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
@@ -4,7 +4,7 @@

 Le titre d'une préparation est une donnée propre. Sans titre, le portefeuille affiche « Nouvelle préparation ». Le premier titre accepté vient de la qualification structurée déjà produite par Nora, après un tour terminé, et une seule fois. Le renommage manuel du Pilote devient la valeur durable. Une suggestion ultérieure ne la remplace pas.
 Le nom officiel reste `projects.name`. Le créer et le renommer réutilisent la même unicité et le même verrou. Le titre de la préparation ne devient pas ce nom. Une préparation rattachée n'est plus renommable comme espace autonome et disparaît de la projection autonome.
-Le dialogue de renommage reprend le cadre déjà utilisé par le portefeuille. Préparation : « Renommer la préparation », source `1420:2539`. Projet : « Renommer le projet », source `1421:4659`, avec la précision que le dépôt Git n'est pas modifié. Le cadre `1422:4336` confirme un titre déjà proposé ; il n'ajoute pas un second dialogue, le premier titre restant appliqué par le propriétaire. La suppression reprend ce même cadre de confirmation. Le texte dit que les données de l'espace sont effacées définitivement. Aucun état métier ni restriction active ne bloque cette confirmation. Une préparation rattachée ne se supprime pas seule : elle disparaît avec son projet. Un conflit technique d'intégrité refuse toute la transaction sans effacer une donnée extérieure. La géométrie du menu, de la synthèse, de la reprise, des lignes et des tuiles n'est pas reprise dans ce chantier.
+Le dialogue de renommage reprend le cadre déjà utilisé par le portefeuille. Préparation : « Renommer la préparation », source `1420:2539`. Projet : « Renommer le projet », source `1421:4659`, avec la précision que le dépôt Git n'est pas modifié. Le cadre `1422:4336` confirme un titre déjà proposé ; il n'ajoute pas un second dialogue, le premier titre restant appliqué par le propriétaire. La suppression reprend ce même cadre de confirmation. Le texte dit que les données de l'espace sont effacées définitivement. Aucun état métier ni restriction active ne bloque cette confirmation. Une préparation rattachée ne se supprime pas seule : elle disparaît avec son projet. Un conflit technique d'intégrité refuse toute la transaction sans effacer une donnée extérieure. Un travail extérieur sans projet, une observation d'un autre Pilote et une observation sans propriétaire exclusif restent en place. La géométrie du menu, de la synthèse, de la reprise, des lignes et des tuiles n'est pas reprise dans ce chantier.
 La migration `029_preparation_title_and_project_name` ajoute les colonnes. Elle ne réécrit aucun titre ni aucun nom déjà présent.
 Le premier titre n'est enregistré que si la commande de tour existe, est terminée, appartient au même Pilote, à la même conversation et à la même préparation, et si le titre normalisé est celui attesté dans la qualification durable. Une suggestion absente, non textuelle ou trop longue est ignorée sans invalider le reste de la qualification. Le schéma de sortie Nora reste un objet Zod simple.
 Le dialogue compare le libellé demandé à l'accusé et à la relecture. Un refus ou un conflit le laisse ouvert, conserve la saisie et, après conflit, présente la valeur relue. Une confirmation ultérieure est une nouvelle intention. Confirmer le titre déjà affiché par Nora le place sous la source manuelle. Seule la dernière clé d'intention est mémorisée : un rejeu plus ancien ne réécrit pas un nom plus récent. Les courses de création et de renommage restent sous le verrou de nom déjà partagé. La page historique des préparations expose aussi le titre canonique ; les libellés d'aperçu ne sont pas remplacés. SAS06 n'est pas modifié : ses quatre repères et l'arrêt de l'animation en mouvement réduit étaient déjà en place.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index f86cea6a..cf93955c 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,15 @@
+## delivery_id: DELIV-2026-11-28-ML5-SPACE-DELETION-RESIDUAL-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — correctif résiduel d'intégrité de la suppression définitive
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `ca6f47a17427218f6b01effdda570cdd78e8d901`
+- **commit**: `fix(studio-next): close deletion integrity gaps`
+- **schema_revision**: inchangé, `029`
+- **scope**: référence inverse d'un travail sans projet ; observation d'un autre Pilote ou sans propriétaire ; preuve d'attente réelle sous verrou
+- **classe**: NO RELEASE · compatible évolutive · LIVE NOT RUN · CI NOT RUN · push produit non inclus
+- **reserves**: F2 non mesuré ; les réserves des mandats 1 à 5 sont transportées
+
 ## delivery_id: DELIV-2026-11-28-ML5-SPACE-DELETION-CORRECTIVE-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/delete-owned-space.ts b/projects/sfia-studio-next/web/src/domains/preparation/delete-owned-space.ts
index 0a8430c1..89c12cea 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/delete-owned-space.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/delete-owned-space.ts
@@ -163,6 +163,7 @@ export async function deleteOwnedSpace(
       WHERE (project_id = ${projectId} OR preparation_id = ANY(${scope}))
         AND (project_id IS NULL OR project_id = ${projectId})
         AND (preparation_id IS NULL OR preparation_id = ANY(${scope}))
+        AND owner_pilot_id = ${ownerPilotId}
     `;
     await tx`
       DELETE FROM cognitive_work_checkpoints
@@ -295,6 +296,27 @@ async function assertExclusive(tx: typeof sql, preps: string[], projectId: strin
   if ((foreignObservation[0]?.n ?? 0) > 0) {
     blocked("Une observation d'un autre espace référence encore cet espace.");
   }
+  const foreignObservationOwner = await tx<{ n: number }[]>`
+    SELECT count(*)::int AS n FROM provider_usage_observations
+    WHERE (project_id = ${projectId} OR preparation_id = ANY(${preps}))
+      AND (project_id IS NULL OR project_id = ${projectId})
+      AND (preparation_id IS NULL OR preparation_id = ANY(${preps}))
+      AND owner_pilot_id IS NOT NULL
+      AND owner_pilot_id <> ${ownerPilotId}
+  `;
+  if ((foreignObservationOwner[0]?.n ?? 0) > 0) {
+    blocked("Une observation de cet espace appartient à un autre Pilote.");
+  }
+  const unownedObservation = await tx<{ n: number }[]>`
+    SELECT count(*)::int AS n FROM provider_usage_observations
+    WHERE (project_id = ${projectId} OR preparation_id = ANY(${preps}))
+      AND (project_id IS NULL OR project_id = ${projectId})
+      AND (preparation_id IS NULL OR preparation_id = ANY(${preps}))
+      AND owner_pilot_id IS NULL
+  `;
+  if ((unownedObservation[0]?.n ?? 0) > 0) {
+    blocked("Une observation rattachée à cet espace n'a pas de propriétaire exclusif.");
+  }
   const outsideRevision = await tx<{ n: number }[]>`
     SELECT count(*)::int AS n FROM document_revisions other
     WHERE other.base_revision_id IN (
@@ -316,7 +338,8 @@ async function assertExclusive(tx: typeof sql, preps: string[], projectId: strin
       SELECT id FROM cognitive_works
       WHERE preparation_id = ANY(${preps}) OR project_id = ${projectId}
     )
-    AND NOT (other.preparation_id = ANY(${preps}) OR other.project_id = ${projectId})
+    AND (other.preparation_id IS NULL OR NOT (other.preparation_id = ANY(${preps})))
+    AND (other.project_id IS NULL OR other.project_id <> ${projectId})
   `;
   if ((outsideWork[0]?.n ?? 0) > 0) {
     blocked("Un travail d'un autre espace référence encore cet espace.");
diff --git a/projects/sfia-studio-next/web/tests/integration/space-deletion.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/space-deletion.pg.test.ts
index f698d009..2b6777e4 100644
--- a/projects/sfia-studio-next/web/tests/integration/space-deletion.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/space-deletion.pg.test.ts
@@ -3,6 +3,7 @@
  * Runs on the isolated e2e database. Historical DEV projects are not used.
  */
 import { readFileSync } from "node:fs";
+import postgres from "postgres";
 import { afterAll, beforeAll, describe, expect, it, vi } from "vitest";
 import { config } from "dotenv";
 config({ path: ".env.local" });
@@ -622,23 +623,57 @@ describe("permanent space deletion (PG)", () => {
     await sql`INSERT INTO preparations (id, owner_pilot_id, status) VALUES (${lockedPrep}, ${pilotA}, 'OPEN')`;
     await sql`INSERT INTO projects (id, owner_pilot_id, name) VALUES (${lockedProject}, ${pilotA}, ${`m6-space-held-${stamp}`})`;
     await sql`INSERT INTO preparation_project_links (preparation_id, project_id) VALUES (${lockedPrep}, ${lockedProject})`;
+    const inserter = postgres(process.env.DATABASE_URL!, {
+      max: 1,
+      connection: { application_name: "m6_lock_probe" },
+    });
+    let release = () => {};
+    const releaseGate = new Promise<void>((resolve) => { release = resolve; });
     let entered!: () => void;
     const enteredGate = new Promise<void>((resolve) => { entered = resolve; });
-    let release!: () => void;
-    const releaseGate = new Promise<void>((resolve) => { release = resolve; });
+    let insertResult: { ok: true } | { ok: false; error: { code?: string } } | undefined;
     pauseNextSpaceDeletionAfterLocksForTests(entered, releaseGate);
     const pending = deleteOwnedSpace(pilotA, "project", lockedProject);
-    await enteredGate;
-    const insert = sql`
-      INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id)
-      VALUES (${id("held_conv")}, ${lockedPrep}, ${lockedProject}, ${pilotA})
-    `;
-    await new Promise((resolve) => setTimeout(resolve, 200));
-    release();
-    await expect(pending).resolves.toEqual({ deleted: true, spaceType: "project", spaceId: lockedProject });
-    await expect(insert).rejects.toThrow();
-    const leftover = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM conversations WHERE id = ${id("held_conv")}`;
-    expect(leftover[0]?.n).toBe(0);
+    try {
+      await enteredGate;
+      const query = inserter`
+        INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id)
+        VALUES (${id("held_conv")}, ${lockedPrep}, ${lockedProject}, ${pilotA})
+      `;
+      void query.then(
+        () => { insertResult = { ok: true }; },
+        (error: { code?: string }) => { insertResult = { ok: false, error }; },
+      );
+      let waiting = 0;
+      const deadline = Date.now() + 5000;
+      while (Date.now() < deadline) {
+        const rows = await sql<{ n: number }[]>`
+          SELECT count(*)::int AS n
+          FROM pg_stat_activity activity
+          JOIN pg_locks lock ON lock.pid = activity.pid
+          WHERE activity.application_name = 'm6_lock_probe'
+            AND activity.wait_event_type = 'Lock'
+            AND lock.granted = false
+        `;
+        waiting = rows[0]?.n ?? 0;
+        if (waiting > 0) break;
+        await new Promise((resolve) => setTimeout(resolve, 50));
+      }
+      expect(waiting).toBeGreaterThan(0);
+      release();
+      await expect(pending).resolves.toEqual({ deleted: true, spaceType: "project", spaceId: lockedProject });
+      const settledAt = Date.now() + 5000;
+      while (!insertResult && Date.now() < settledAt) {
+        await new Promise((resolve) => setTimeout(resolve, 50));
+      }
+      expect(insertResult?.ok).toBe(false);
+      if (insertResult && !insertResult.ok) expect(insertResult.error.code).toBe("23503");
+      const leftover = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM conversations WHERE id = ${id("held_conv")}`;
+      expect(leftover[0]?.n).toBe(0);
+    } finally {
+      release();
+      await inserter.end({ timeout: 1 });
+    }
   });

   it("does not admit a new external step after the project is gone", async () => {
@@ -664,6 +699,118 @@ describe("permanent space deletion (PG)", () => {
     expect(attempts[0]?.n).toBe(0);
   });

+  it("refuses an external work whose project is null", async () => {
+    const target = id("null_project");
+    const targetPrep = id("null_prep");
+    const outsidePrep = id("null_outside_prep");
+    await sql`INSERT INTO preparations (id, owner_pilot_id, status) VALUES (${targetPrep}, ${pilotA}, 'OPEN'), (${outsidePrep}, ${pilotA}, 'OPEN')`;
+    await sql`INSERT INTO projects (id, owner_pilot_id, name) VALUES (${target}, ${pilotA}, ${`m6-space-null-${stamp}`})`;
+    await sql`INSERT INTO preparation_project_links (preparation_id, project_id) VALUES (${targetPrep}, ${target})`;
+    await sql`INSERT INTO conversations (id, preparation_id, project_id, owner_pilot_id) VALUES (${id("null_conv")}, ${targetPrep}, ${target}, ${pilotA})`;
+    await sql`
+      INSERT INTO cognitive_works (id, owner_pilot_id, preparation_id, project_id, conversation_id, status, objective)
+      VALUES (${id("null_work")}, ${pilotA}, ${targetPrep}, ${target}, ${id("null_conv")}, 'COMPLETE', 'cible')
+    `;
+    await sql`
+      INSERT INTO cognitive_works (id, owner_pilot_id, preparation_id, status, objective, parent_work_id)
+      VALUES (${id("null_outside_work")}, ${pilotA}, ${outsidePrep}, 'COMPLETE', 'extérieur', ${id("null_work")})
+    `;
+    await expect(deleteOwnedSpace(pilotA, "project", target)).rejects.toMatchObject({
+      code: "CONFLICT",
+      message: "Un travail d'un autre espace référence encore cet espace.",
+    });
+    const kept = await sql<{ projects: number; target_work: number; outside_work: number; parent_work_id: string }[]>`
+      SELECT
+        (SELECT count(*)::int FROM projects WHERE id = ${target}) AS projects,
+        (SELECT count(*)::int FROM cognitive_works WHERE id = ${id("null_work")}) AS target_work,
+        (SELECT count(*)::int FROM cognitive_works WHERE id = ${id("null_outside_work")}) AS outside_work,
+        (SELECT parent_work_id FROM cognitive_works WHERE id = ${id("null_outside_work")}) AS parent_work_id
+    `;
+    expect(kept[0]).toEqual({
+      projects: 1,
+      target_work: 1,
+      outside_work: 1,
+      parent_work_id: id("null_work"),
+    });
+    await sql`UPDATE cognitive_works SET parent_work_id = NULL WHERE id = ${id("null_outside_work")}`;
+    await expect(deleteOwnedSpace(pilotA, "project", target)).resolves.toEqual({
+      deleted: true,
+      spaceType: "project",
+      spaceId: target,
+    });
+    const outside = await sql<{ n: number; parent_work_id: string | null }[]>`
+      SELECT count(*)::int AS n, max(parent_work_id) AS parent_work_id
+      FROM cognitive_works WHERE id = ${id("null_outside_work")}
+    `;
+    expect(outside[0]).toEqual({ n: 1, parent_work_id: null });
+    await deleteOwnedSpace(pilotA, "preparation", outsidePrep);
+  });
+
+  it("refuses an observation owned by another pilot and one without an owner", async () => {
+    const target = id("owner_project");
+    const targetPrep = id("owner_prep");
+    await sql`INSERT INTO preparations (id, owner_pilot_id, status) VALUES (${targetPrep}, ${pilotA}, 'OPEN')`;
+    await sql`INSERT INTO projects (id, owner_pilot_id, name) VALUES (${target}, ${pilotA}, ${`m6-space-owner-${stamp}`})`;
+    await sql`INSERT INTO preparation_project_links (preparation_id, project_id) VALUES (${targetPrep}, ${target})`;
+    await sql`
+      INSERT INTO provider_usage_observations (
+        id, owner_pilot_id, project_id, tariff_version, estimated_cost_usd, cost_coverage, status,
+        granularity, idempotency_key, input_tokens
+      ) VALUES (
+        ${crypto.randomUUID()}::uuid, ${pilotB}, ${target}, 'v-test', 3.25, 'ESTIMATED', 'COMPLETE',
+        'REQUEST', ${id("foreign_owner_usage")}, 18
+      )
+    `;
+    await expect(deleteOwnedSpace(pilotA, "project", target)).rejects.toMatchObject({
+      code: "CONFLICT",
+      message: "Une observation de cet espace appartient à un autre Pilote.",
+    });
+    const foreign = await sql<{ owner_pilot_id: string; tokens: string; cost: string; key: string; projects: number }[]>`
+      SELECT owner_pilot_id, input_tokens::text AS tokens, estimated_cost_usd::text AS cost,
+        idempotency_key AS key,
+        (SELECT count(*)::int FROM projects WHERE id = ${target}) AS projects
+      FROM provider_usage_observations WHERE idempotency_key = ${id("foreign_owner_usage")}
+    `;
+    expect(foreign[0]).toEqual({
+      owner_pilot_id: pilotB,
+      tokens: "18",
+      cost: "3.2500000000",
+      key: id("foreign_owner_usage"),
+      projects: 1,
+    });
+    await sql`DELETE FROM provider_usage_observations WHERE idempotency_key = ${id("foreign_owner_usage")}`;
+    await sql`
+      INSERT INTO provider_usage_observations (
+        id, project_id, tariff_version, estimated_cost_usd, cost_coverage, status, granularity, idempotency_key, input_tokens
+      ) VALUES (
+        ${crypto.randomUUID()}::uuid, ${target}, 'v-test', 1, 'ESTIMATED', 'COMPLETE', 'REQUEST', ${id("null_owner_usage")}, 4
+      )
+    `;
+    await expect(deleteOwnedSpace(pilotA, "project", target)).rejects.toMatchObject({
+      message: "Une observation rattachée à cet espace n'a pas de propriétaire exclusif.",
+    });
+    const unowned = await sql<{ owner_pilot_id: string | null; tokens: string }[]>`
+      SELECT owner_pilot_id, input_tokens::text AS tokens
+      FROM provider_usage_observations WHERE idempotency_key = ${id("null_owner_usage")}
+    `;
+    expect(unowned[0]).toEqual({ owner_pilot_id: null, tokens: "4" });
+    await sql`DELETE FROM provider_usage_observations WHERE idempotency_key = ${id("null_owner_usage")}`;
+    await sql`
+      INSERT INTO provider_usage_observations (
+        id, owner_pilot_id, project_id, tariff_version, cost_coverage, status, granularity, idempotency_key, input_tokens
+      ) VALUES (
+        ${crypto.randomUUID()}::uuid, ${pilotA}, ${target}, 'v-test', 'ESTIMATED', 'COMPLETE', 'REQUEST', ${id("owned_usage")}, 5
+      )
+    `;
+    await expect(deleteOwnedSpace(pilotA, "project", target)).resolves.toEqual({
+      deleted: true,
+      spaceType: "project",
+      spaceId: target,
+    });
+    const owned = await sql<{ n: number }[]>`SELECT count(*)::int AS n FROM provider_usage_observations WHERE idempotency_key = ${id("owned_usage")}`;
+    expect(owned[0]?.n).toBe(0);
+  });
+
   it("keeps an observation that points at the target from another preparation", async () => {
     const target = id("obs_project");
     const targetPrep = id("obs_prep");
```
