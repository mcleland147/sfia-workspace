# Review Pack — Mandat 2, complément de nommage

Date : 28 novembre 2026, Europe/Paris.
Cycle : 08 Delivery / implémentation. Profil : Standard. Typologie : INC.
Branche produit : sfia/next-ml5-integrated-delivery-20261123.
Pack réinitialisé en début de cycle. Mono-cycle. Pas de rapport précédent concaténé.

## Git

Initial : HEAD 7bd37c0e85ccd940ac54d44202f47526c8c94879, tree ef04d660f47fa9d7c9aeec8b955fb83eb2ba7019, parent aa04daba2d7591d8d28da1dc04901de142e274a3.
origin/main et merge-base : 997897fd7cf914771e7d08e8030dc7123fab7d25.
État initial conforme. Aucun reset, stash, rebase ou force push.

Final : HEAD 5b9fcfd0ed5b1037a7b4224da24a84aeebed9502, tree b91e6306145c4fbbbd981107fa94509079702ba9.
Parent immédiat : 460c0a22df0518ba9e0f8a9dc5ecdbf605f54b6f.
Parent du complément : 7bd37c0e85ccd940ac54d44202f47526c8c94879.
Push fast-forward : 7bd37c0e..460c0a22 puis 460c0a22..5b9fcfd0.
Aucune PR. Aucun workflow déclenché : les workflows n'écoutent que main et les pull requests vers main. gh run list sur la branche ne retourne aucun run.

## Sources

Processus déjà appliqué au HEAD d'entrée. Contrats 5008d51d, PF-30, PF-31, PF-34, PF-A04, non-régression A01/07/08. Suivi d9e7e3e2. Handoff d'entrée e8df1874.
Code relu : space-naming, durable-qualification, turn-command, semantic-qualification, service, portfolio, portfolio-labels, PersonalPortfolio, routes de nom, SasCreateProgressPopup, project-projection-sync, tokens.css de l'anneau SAS06.
Figma file itgvCulInEnFY6DvgIegvP, session 42a57f8f-98f4-4e1e-9c28-87a236ce31fe, lecture seule.
14.10 1420:2539 déjà extraite au cycle précédent et conservée.
14.23 1421:4659 lue : « Renommer le projet », identité, documents et conversation inchangés, « Le renommage ne modifie pas le dépôt Git associé », champ NOM DU PROJET, Annuler / Enregistrer.
14.28 1422:4336 lue : « Titre proposé par Nora », champ TITRE CONTEXTUEL. Ce cadre confirme un titre déjà proposé. Il n'est pas transposé en second dialogue : le premier titre reste appliqué par le propriétaire, comme Morris l'a validé.
SAS06 1022:164 lue : 702 px de large, quatre repères réels, accès au projet disponible pendant le chargement. Le composant et l'arrêt de l'anneau en prefers-reduced-motion étaient déjà conformes. Aucune modification de SasCreateProgressPopup.tsx.

## G2 / G3

G2 : seul l'écart de copie du dialogue projet a été corrigé, dans le composant existant. Pas de nouvelle direction graphique.
G3 : la qualification durable reste dans result_json.semanticQualification, préservée par commitTurnTerminal. Aucune nouvelle table, aucune migration. Le schéma LIVE reste un ZodObject sans ZodEffects. Allowlist figée avant édition et respectée. create-project.ts et le popup SAS06 non modifiés.

## Allowlist réelle

Modifiés : space-naming.ts, semantic-qualification.ts, service.ts, portfolio-labels.ts, portfolio.ts, PersonalPortfolio.tsx, title/route.ts, name/route.ts, preparation-title.test.ts, portfolio-organization.test.ts, space-naming.pg.test.ts, preparation-title-continuity.spec.ts, as-built portefeuille, ensemble-07, delivery-history.
Non modifiés malgré l'autorisation conditionnelle : create-project.ts, SasCreateProgressPopup.tsx, page de préparation, schema.ts, migrations, db-migrate.sh.
Créations fonctionnelles : aucune.

## Corrections

C01. applyFirstPreparationTitle, sous le verrou de la préparation, relit conversation_turn_commands et conversations. Le titre n'est écrit que si la commande existe, est COMPLETE, a le même Pilote, la même préparation, aucune rattachement de conversation, et si le titre normalisé est celui de la qualification durable. Un identifiant fictif ne suffit plus. L'échec retourne applied false et ne défait pas le tour.

C02. suggestedPreparationTitle est une chaîne facultative sans plafond de schéma. Une valeur non textuelle est retirée avant l'analyse, et le reste de la qualification reste valide. Le plafond de 80 points de code reste celui du propriétaire : une chaîne trop longue n'est pas tronquée. Le catch d'application émet d2.preparation_title.apply_failed avec la catégorie PREPARATION_TITLE_APPLY_FAILED, l'identifiant de préparation et aucun texte de titre.

C03. L'intention conserve le libellé demandé. L'accusé doit porter la même identité, la même clé, la version connue ou la suivante, et le libellé attendu. Un simple 200 ne confirme pas. Un écart de casse de nom de projet déjà normalisé reste un no-op. Confirmer le titre Nora déjà affiché passe la source à PILOT et avance la révision. Le dialogue reste ouvert après un refus, un conflit ou un résultat incertain, conserve la saisie, montre la valeur relue, et la confirmation suivante est une nouvelle intention. Aucun rejeu automatique.

C04. Les courses sont de vraies transactions concurrentes : création contre renommage vers le même nom, deux projets vers le même nom, deux renommages du même projet, suggestion Nora contre renommage manuel, titrage contre rattachement. Une seule ligne porte le nom disputé. La dernière clé seule est mémorisée : un rejeu plus ancien ne réécrit pas l'état plus récent. La page historique des préparations expose title, calculé depuis preparations.title, sans remplacer previewName. Aucun consommateur d'écran n'affiche cette page comme titre ; le portefeuille personnel reste la surface active.

C05. SAS06 non modifié. Quatre repères liés aux états réels. Anneau arrêté si prefers-reduced-motion. Le projet créé reste accessible. La réouverture ne rejoue pas le popup. Le dialogue projet reprend la phrase de 14.23 sur l'absence d'effet Git.

## Contrats

D2 reste propriétaire du titre et du nom. D3 fournit la suggestion et la preuve, sans écrire le titre hors du service D2. Pas de second appel fournisseur, pas de nouveau tour, pas de création implicite, pas d'effet Git. Schéma 029 inchangé.

## Tests

Unitaires : preparation-title, portfolio-organization, nora-live-output-schema, portfolio-cursor. 4 fichiers, 27 tests, exit 0.
PostgreSQL sfia_next_e2e : space-naming.pg.test.ts, 5 tests, exit 0, dont les courses Promise.all.
Navigateur isolé Turbopack 3101, base sfia_next_e2e : preparation-title-continuity.spec.ts, 2 tests, 29,8 s, exit 0. Le second exerce le refus, la saisie conservée, le focus, Échap, le conflit de version, la valeur relue et la confirmation suivante.
TypeScript : 34 diagnostics, identiques à la baseline du mandat 2. Exit 2 historique. Aucun diagnostic nouveau.
eslint sur les fichiers touchés : 0 erreur, 3 avertissements préexistants.
next build : exit 0. BUILD_ID servi 0r_zGyPhn_RjvxaUX-wM0.
git diff --check : exit 0.

## Fake / Real

Fixture Nora, PostgreSQL réel, HTTP réel, navigateur réel sur l'isolé. Même schéma, même terminalisation, même service, même CAS. Qualité cognitive LIVE non exercée. DETERMINISTIC PROVEN sur les résiduels exercés. Pas READY FOR REAL. Pas LIVE PROVEN. F2 NOT PROVEN.

## Candidat DEV

Branche sfia/next-ml5-integrated-delivery-20261123.
HEAD 5b9fcfd0ed5b1037a7b4224da24a84aeebed9502.
Tree b91e6306145c4fbbbd981107fa94509079702ba9.
Parent 460c0a22df0518ba9e0f8a9dc5ecdbf605f54b6f.
BUILD_ID 0r_zGyPhn_RjvxaUX-wM0.
PID 67545, port 3100, base sfia_next_dev, colonne title présente, schéma 029.
RECETTE port 3200, PID 58965, inchangé. Login DEV 200, portefeuille 200.
Aucune migration. Aucune donnée historique DEV modifiée par les tests.

## Matrices

C01 | preuve durable au point d'effet | tests PG de commande absente, RUNNING, FAILED, autre Pilote, autre préparation, titre différent, rejeu | la qualité sémantique LIVE n'est pas exercée | PASS
C02 | suggestion détachée et événement borné | test unitaire de nombre, chaîne de 4000, ZodObject | l'émission fournisseur réelle n'est pas rejouée | PASS
C03 | intention, accusé et relecture confrontés, saisie conservée | unitaire et navigateur | pas de mesure F2 | PASS
C04 | courses réelles et dernière intention | PostgreSQL concurrent, exit 0 | pas de déduplication historique illimitée | PASS
C05 | SAS06 déjà conforme, copie projet alignée | lecture 1022:164 et 1421:4659, code inchangé pour le popup | pas de capture runtime appariée | PASS au niveau exercé

M2-01 à M2-06 : preuves du candidat 7bd37c0e encore valides pour le parcours nominal. Ce complément ne les invalide pas. Les nouvelles preuves portent sur la provenance, la qualification, PF34, la concurrence et SAS06. NOT RUN : campagne complète du mandat 1, F2 apparié, LIVE.

PF-30 : titre canonique ou « Nouvelle préparation ». Preuve antérieure encore valide, projection historique complétée. PASS
PF-31 : nom de projet distinct. Preuve antérieure et course création/renommage. PASS
PF-34 : accusé corrélé au libellé demandé, dialogue conservé. Preuve nouvelle. PASS
PF-A04 : fenêtre de navigation non rouverte. N/A pour ce complément. Réserve R-A04-WINDOW transportée.
A01/07/08 : création explicite, même identité, même fil. Le parcours navigateur du premier test repasse. PASS
MP04 / SAS06 : popup non modifié, quatre repères réels. PASS au niveau exercé.
Figma 14.10 : dialogue préparation conservé. Preuve antérieure. PASS
Figma 14.23 : phrase et absence d'effet Git reprises. PASS
Figma 14.28 : lue, non transposée en second dialogue. N/A comme nouvelle surface.

## Réserves

R-A04-WINDOW, R-A06-ATTACH, R-E2E-WEBPACK, R-B-F2, R-B-PF34-BROWSER, R-B-KEYBOARD : transportées, non rouvertes.
F2 NOT PROVEN. La revue qualitative Morris reste favorable et n'est pas un F2 PASS.
La déduplication d'intention couvre la dernière clé seulement.
La qualité sémantique naturelle Nora LIVE n'est pas exercée.

## Décisions Morris

Aucune nouvelle décision structurante. Pas de migration. Réception du mandat 2 non prononcée. Mandat 3 non engagé.

## Verdict

READY WITH RESERVES — MANDAT 2.
Verdict visuel : F2 NOT PROVEN. La revue qualitative de Morris est favorable. Le cadre 14.23 a été aligné après lecture. Aucune capture runtime appariée n'est produite dans ce pack.
Mandat 2 non ACCEPTED. Livraison 1 non ACCEPTED. ML5 non CLOSED. Gate C non PASS. R6 non STARTED. NO RELEASE. NOT ADOPTED.

## Diff intégral 7bd37c0e..5b9fcfd0

diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
index f7888433..76914b4b 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
@@ -1,6 +1,6 @@
 # Ensemble 07 — As-built (qualification initiale Projet / Trajectoire / Nora)

-Le popup de création SAS06 reste celui déjà livré, à 702×823, et ses repères suivent la création, le contexte et la qualification réellement établis. Un titre de préparation, même proposé par Nora, ne crée pas le projet et ne remplace pas le nom inspecté. La reprise d'un projet existant ne rejoue pas ce popup.
+Le popup de création SAS06 reste celui déjà livré, à 702×823, et ses repères suivent la création, le contexte et la qualification réellement établis. Un titre de préparation, même proposé par Nora, ne crée pas le projet et ne remplace pas le nom inspecté. La reprise d'un projet existant ne rejoue pas ce popup. Le complément de nommage ne modifie pas ce popup : les quatre repères restent liés aux états réels, et l'anneau s'arrête déjà lorsque le mouvement réduit est demandé.

 **Statut:** Morris UAT accepté (21/11) · réserve Acquis/À clarifier **techniquement levée** · RECETTE · NO RELEASE · prêt revue intégration Git
 **Base Git figée RECETTE antérieure:** `09a935bc71a3ab77eb063e9425b6f07ca1162417` · tree `5809a0bb707822eadde898b477e341125b746971`
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
index ca3ea497..287d4caa 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille/as-built-portefeuille-personnel.md
@@ -4,8 +4,10 @@

 Le titre d'une préparation est une donnée propre. Sans titre, le portefeuille affiche « Nouvelle préparation ». Le premier titre accepté vient de la qualification structurée déjà produite par Nora, après un tour terminé, et une seule fois. Le renommage manuel du Pilote devient la valeur durable. Une suggestion ultérieure ne la remplace pas.
 Le nom officiel reste `projects.name`. Le créer et le renommer réutilisent la même unicité et le même verrou. Le titre de la préparation ne devient pas ce nom. Une préparation rattachée n'est plus renommable comme espace autonome et disparaît de la projection autonome.
-Le dialogue de renommage reprend le cadre déjà utilisé par le portefeuille. Préparation : « Renommer la préparation », source `1420:2539`. Projet : « Renommer le projet ». Supprimer reste indisponible. La géométrie du menu, de la synthèse, de la reprise, des lignes et des tuiles n'est pas reprise dans ce chantier.
+Le dialogue de renommage reprend le cadre déjà utilisé par le portefeuille. Préparation : « Renommer la préparation », source `1420:2539`. Projet : « Renommer le projet », source `1421:4659`, avec la précision que le dépôt Git n'est pas modifié. Le cadre `1422:4336` confirme un titre déjà proposé ; il n'ajoute pas un second dialogue, le premier titre restant appliqué par le propriétaire. Supprimer reste indisponible. La géométrie du menu, de la synthèse, de la reprise, des lignes et des tuiles n'est pas reprise dans ce chantier.
 La migration `029_preparation_title_and_project_name` ajoute les colonnes. Elle ne réécrit aucun titre ni aucun nom déjà présent.
+Le premier titre n'est enregistré que si la commande de tour existe, est terminée, appartient au même Pilote, à la même conversation et à la même préparation, et si le titre normalisé est celui attesté dans la qualification durable. Une suggestion absente, non textuelle ou trop longue est ignorée sans invalider le reste de la qualification. Le schéma de sortie Nora reste un objet Zod simple.
+Le dialogue compare le libellé demandé à l'accusé et à la relecture. Un refus ou un conflit le laisse ouvert, conserve la saisie et, après conflit, présente la valeur relue. Une confirmation ultérieure est une nouvelle intention. Confirmer le titre déjà affiché par Nora le place sous la source manuelle. Seule la dernière clé d'intention est mémorisée : un rejeu plus ancien ne réécrit pas un nom plus récent. Les courses de création et de renommage restent sous le verrou de nom déjà partagé. La page historique des préparations expose aussi le titre canonique ; les libellés d'aperçu ne sont pas remplacés. SAS06 n'est pas modifié : ses quatre repères et l'arrêt de l'animation en mouvement réduit étaient déjà en place.

 ## Finitions après revue visuelle

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 2aca4639..f555e2b2 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,15 @@
+## delivery_id: DELIV-2026-11-28-ML5-NAMING-INTEGRITY-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — complément de provenance, de réconciliation et de concurrence du nommage
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `7bd37c0e85ccd940ac54d44202f47526c8c94879`
+- **commit**: `fix(next): prove the preparation title and the rename`
+- **schema_revision**: inchangé, `029_preparation_title_and_project_name`
+- **scope**: preuve durable du titre, suggestion non bloquante, réconciliation du renommage, courses de noms, qualification SAS06 sans modification
+- **classe**: NO RELEASE · compatible corrective · LIVE NOT RUN · CI NOT RUN · F2 non mesuré
+- **reserves**: réserves du mandat 1 transportées ; F2 non mesuré ; déduplication limitée à la dernière intention
+
 ## delivery_id: DELIV-2026-11-28-ML5-PREPARATION-NAMING-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/title/route.ts b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/title/route.ts
index a0a9a77f..dcdf763d 100644
--- a/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/title/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/preparations/[preparationId]/title/route.ts
@@ -24,7 +24,10 @@ export async function PUT(req: Request, ctx: { params: Promise<{ preparationId:
       expectedRevision: body.expectedRevision,
       intentionKey: body.intentionKey,
     });
-    return NextResponse.json(result, { headers: { "cache-control": "private, no-store" } });
+    return NextResponse.json(
+      { ...result, spaceType: "preparation", spaceId: preparationId },
+      { headers: { "cache-control": "private, no-store" } },
+    );
   } catch (error) {
     const mapped = studioErrorResponse(error);
     return NextResponse.json(mapped.body, { status: mapped.status });
diff --git a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/name/route.ts b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/name/route.ts
index 0bc0fb07..ebb4fada 100644
--- a/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/name/route.ts
+++ b/projects/sfia-studio-next/web/src/app/api/projects/[projectId]/name/route.ts
@@ -24,7 +24,10 @@ export async function PUT(req: Request, ctx: { params: Promise<{ projectId: stri
       expectedRevision: body.expectedRevision,
       intentionKey: body.intentionKey,
     });
-    return NextResponse.json(result, { headers: { "cache-control": "private, no-store" } });
+    return NextResponse.json(
+      { ...result, spaceType: "project", spaceId: projectId },
+      { headers: { "cache-control": "private, no-store" } },
+    );
   } catch (error) {
     const mapped = studioErrorResponse(error);
     return NextResponse.json(mapped.body, { status: mapped.status });
diff --git a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
index db13411f..11dd31e6 100644
--- a/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
+++ b/projects/sfia-studio-next/web/src/components/portfolio/PersonalPortfolio.tsx
@@ -3,7 +3,9 @@
 import { useCallback, useEffect, useRef, useState } from "react";
 import { useRouter, useSearchParams } from "next/navigation";
 import { runOpenPreparation, subscribeOpenPreparationBusy } from "@/lib/open-preparation";
+import { normalizePreparationTitle } from "@/domains/identity/portfolio-labels";
 import type { PersonalBoard, PersonalSpace, PortfolioFilter, PortfolioSort, PortfolioView } from "@/domains/identity/portfolio-organization";
+import { normalizeProjectNameKey } from "@/domains/preparation/projection";
 import { notePersonalSpaceEntry } from "./PersonalSpaceOpenSignal";
 import { notifyPortfolioChanged } from "./PersonalRailFavorites";
 import "./personal-portfolio.css";
@@ -29,6 +31,8 @@ export type PortfolioIntention = {
   sort?: string;
   knownVersion: number;
   knownPosition?: number | null;
+  /** Raw value submitted with this rename. Compared with the acknowledgement and the reread. */
+  requestedLabel?: string;
 };

 export type OwnerSpaceRecord = {
@@ -113,6 +117,22 @@ export function ownerSpaceRecord(
   };
 }

+/** The returned label must be the requested one, or the unchanged stored spelling of the same name. */
+export function acknowledgedNameMatches(
+  intention: PortfolioIntention,
+  label: string,
+  changed: boolean,
+): boolean {
+  const requested = intention.requestedLabel ?? "";
+  if (intention.spaceType === "project") {
+    if (normalizeProjectNameKey(label) !== normalizeProjectNameKey(requested)) return false;
+    if (!changed) return true;
+    return label === requested.normalize("NFC").replace(/\s+/g, " ").trim();
+  }
+  const normalized = normalizePreparationTitle(requested);
+  return normalized !== null && label === normalized;
+}
+
 /** The acknowledgement must answer this intention, not merely carry a newer version. */
 export function correlatedAcknowledgement(
   intention: PortfolioIntention,
@@ -133,9 +153,13 @@ export function correlatedAcknowledgement(
   }
   if (intention.kind === "rename") {
     return body.intentionKey === intention.intentionKey
+      && body.spaceType === intention.spaceType
+      && body.spaceId === intention.spaceId
       && typeof body.revision === "number"
       && typeof body.label === "string"
-      && (body.revision === intention.knownVersion || body.revision === intention.knownVersion + 1);
+      && typeof body.changed === "boolean"
+      && (body.revision === intention.knownVersion || body.revision === intention.knownVersion + 1)
+      && acknowledgedNameMatches(intention, body.label, body.changed === true);
   }
   return false;
 }
@@ -191,10 +215,14 @@ export function reconcileOwnerEffect(input: {
     if (typeof primary.displayLabel !== "string" || typeof primary.nameRevision !== "number") return "unproven";
     const named = board.items.find((entry) => entry.spaceType === primary.spaceType && entry.id === primary.id) as { label?: string } | undefined;
     if (named && typeof named.label === "string" && named.label !== primary.displayLabel) return "unproven";
-    if (primary.displayLabel === acknowledgement.label && primary.nameRevision === acknowledgement.revision) {
-      return acknowledgement.changed === false ? "unchanged" : "confirmed";
+    if (
+      !acknowledgedNameMatches(intention, primary.displayLabel, acknowledgement.changed === true)
+      || primary.displayLabel !== acknowledgement.label
+      || primary.nameRevision !== acknowledgement.revision
+    ) {
+      return "current";
     }
-    return "current";
+    return acknowledgement.changed === false ? "unchanged" : "confirmed";
   }
   if (intention.kind === "order") {
     if (acknowledgement.moved !== true) return "unchanged";
@@ -313,6 +341,7 @@ export function PersonalPortfolio() {
   const [confirmRestore, setConfirmRestore] = useState<PersonalSpace | null>(null);
   const [renameTarget, setRenameTarget] = useState<PersonalSpace | null>(null);
   const [renameValue, setRenameValue] = useState("");
+  const [renameNotice, setRenameNotice] = useState("");
   const requestSeq = useRef(0);

   useEffect(() => subscribeOpenPreparationBusy(setCreating), []);
@@ -493,7 +522,7 @@ export function PersonalPortfolio() {
     intention: PortfolioIntention,
     outcome: PortfolioMutationOutcome,
     acknowledgement: Record<string, unknown> | null,
-  ): Promise<{ reread: PortfolioReread; effect: OwnerEffect }> {
+  ): Promise<{ reread: PortfolioReread; effect: OwnerEffect; record: OwnerSpaceRecord | null }> {
     try {
       const ids = [
         { type: intention.spaceType, id: intention.spaceId },
@@ -501,13 +530,13 @@ export function PersonalPortfolio() {
       ].filter((item): item is { type: PersonalSpace["spaceType"]; id: string } => Boolean(item.type && item.id));
       let records: Array<OwnerSpaceRecord | "absent"> = [];
       if (intention.kind !== "preference") {
-        if (ids.length === 0) return { reread: "failed", effect: "unproven" };
+        if (ids.length === 0) return { reread: "failed", effect: "unproven", record: null };
         const reads = await Promise.all(ids.map((item) => readTargetedRecord(item.type, item.id)));
-        if (reads.some((item) => item === null)) return { reread: "failed", effect: "unproven" };
+        if (reads.some((item) => item === null)) return { reread: "failed", effect: "unproven", record: null };
         records = reads.filter((item): item is OwnerSpaceRecord | "absent" => item !== null);
       }
       const refreshed = await loadRef.current();
-      if (!refreshed) return { reread: "failed", effect: "unproven" };
+      if (!refreshed) return { reread: "failed", effect: "unproven", record: null };
       const effect = reconcileOwnerEffect({
         intention,
         outcome,
@@ -515,9 +544,14 @@ export function PersonalPortfolio() {
         records,
         board: refreshed,
       });
-      return { reread: effect === "unproven" ? "failed" : "reviewed", effect };
+      const primary = records[0];
+      return {
+        reread: effect === "unproven" ? "failed" : "reviewed",
+        effect,
+        record: primary && primary !== "absent" ? primary : null,
+      };
     } catch {
-      return { reread: "failed", effect: "unproven" };
+      return { reread: "failed", effect: "unproven", record: null };
     }
   }

@@ -528,6 +562,7 @@ export function PersonalPortfolio() {
     setPending(path);
     setUncertain("");
     setNotice("");
+    let retainRename = false;
     try {
       const response = await fetch(path, {
         method,
@@ -541,10 +576,30 @@ export function PersonalPortfolio() {
       acknowledgementRef.current = body;
       if (outcome === "refused") {
         settleMutation("refused", "not-attempted", "current", "");
-        setNotice(typeof body.message === "string" ? body.message : typeof body.error === "string" ? body.error : "La modification n'a pas abouti.");
+        const message = typeof body.message === "string" ? body.message : typeof body.error === "string" ? body.error : "La modification n'a pas abouti.";
+        setNotice(message);
+        if (intention.kind === "rename") {
+          retainRename = true;
+          setRenameNotice(message);
+        }
         return;
       }
       const probed = await probeIntention(intention, outcome, body);
+      if (intention.kind === "rename" && probed.effect !== "confirmed" && probed.effect !== "unchanged") {
+        retainRename = true;
+        if (probed.record && typeof probed.record.nameRevision === "number") {
+          const currentLabel = probed.record.displayLabel;
+          setRenameTarget((current) => current ? {
+            ...current,
+            nameRevision: probed.record?.nameRevision ?? current.nameRevision,
+            label: currentLabel ?? current.label,
+          } : current);
+        }
+        const message = outcome === "conflict"
+          ? (typeof body.message === "string" ? body.message : "Le nom a changé. La valeur actuelle est affichée ; confirmez à nouveau.")
+          : "Le résultat n'est pas confirmé. La valeur actuelle a été relue ; aucune nouvelle tentative n'est envoyée.";
+        setRenameNotice(message);
+      }
       if (outcome === "confirmed" && probed.effect === "confirmed") notifyPortfolioChanged();
       settleMutation(
         outcome,
@@ -560,14 +615,28 @@ export function PersonalPortfolio() {
       const current = intentionRef.current;
       const probed = current
         ? await probeIntention(current, "unknown", null)
-        : { reread: "failed" as const, effect: "unproven" as const };
+        : { reread: "failed" as const, effect: "unproven" as const, record: null };
+      if (current?.kind === "rename") {
+        retainRename = true;
+        if (probed.record && typeof probed.record.nameRevision === "number") {
+          setRenameTarget((open) => open ? {
+            ...open,
+            nameRevision: probed.record?.nameRevision ?? open.nameRevision,
+            label: probed.record?.displayLabel ?? open.label,
+          } : open);
+        }
+        setRenameNotice("Le résultat n'est pas confirmé. La valeur actuelle a été relue ; aucune nouvelle tentative n'est envoyée.");
+      }
       settleMutation("unknown", probed.reread, probed.effect, "");
     } finally {
       busy.current = false;
       setPending("");
       setConfirm(null);
       setConfirmRestore(null);
-      setRenameTarget(null);
+      if (!retainRename) {
+        setRenameTarget(null);
+        setRenameNotice("");
+      }
     }
   }

@@ -747,7 +816,7 @@ export function PersonalPortfolio() {
             <small>{space.spaceType === "project" ? "Projet" : "Préparation"}</small>
             <div className="personal-portfolio-menu-rule" role="separator" />
             <a role="menuitem" href={hrefFor(space)} onClick={() => notePersonalSpaceEntry(space.spaceType, space.id)}><Mark name="arrow" />{space.spaceType === "project" ? "Ouvrir le projet" : "Reprendre avec Nora"}</a>
-            <button type="button" role="menuitem" disabled={locked} onClick={() => { setRenameTarget(space); setRenameValue(space.label); setMenu(null); }}><Mark name="edit" />Renommer</button>
+            <button type="button" role="menuitem" disabled={locked} onClick={() => { setRenameTarget(space); setRenameValue(space.label); setRenameNotice(""); setMenu(null); }}><Mark name="edit" />Renommer</button>
             <button type="button" role="menuitem" disabled={locked} onClick={() => void mutate(`/api/portfolio/spaces/${space.spaceType}/${space.id}/favorite`, "PUT", { favorite: !space.favorite, expectedVersion: space.rowVersion }, { kind: "favorite", spaceType: space.spaceType, spaceId: space.id, desired: !space.favorite, knownVersion: space.rowVersion })}><Mark name="star" />{space.favorite ? "Retirer des favoris" : "Ajouter aux favoris"}</button>
             <button type="button" role="menuitem" aria-label="Monter" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => { const neighbor = board!.items[board!.items.findIndex((item) => item.id === space.id && item.spaceType === space.spaceType) - 1]; void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "up", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "up", beforeSpaceType: neighbor?.spaceType, beforeSpaceId: neighbor?.id, knownVersion: board!.preferences.version, knownPosition: space.customPosition }); }}><Mark name="grip" />Monter</button>
             <button type="button" role="menuitem" aria-label="Descendre" disabled={locked || !canReorder} title={canReorder ? undefined : "Disponible lorsque l'ordre personnalisé est le tri enregistré, sans filtre."} onClick={() => { const neighbor = board!.items[board!.items.findIndex((item) => item.id === space.id && item.spaceType === space.spaceType) + 1]; void mutate("/api/portfolio/order", "POST", { spaceType: space.spaceType, spaceId: space.id, direction: "down", expectedVersion: board!.preferences.version, context: orderContext }, { kind: "order", spaceType: space.spaceType, spaceId: space.id, direction: "down", beforeSpaceType: neighbor?.spaceType, beforeSpaceId: neighbor?.id, knownVersion: board!.preferences.version, knownPosition: space.customPosition }); }}><Mark name="grip" />Descendre</button>
@@ -943,14 +1012,17 @@ export function PersonalPortfolio() {
         <div className="personal-portfolio-overlay" onClick={() => { if (!locked) setRenameTarget(null); }}>
           <div ref={dialogRef} className="personal-portfolio-modal" role="dialog" aria-modal="true" aria-label={renameTarget.spaceType === "preparation" ? "Renommer la préparation" : "Renommer le projet"} data-testid="portfolio-rename" onClick={(event) => event.stopPropagation()}>
             <h2>{renameTarget.spaceType === "preparation" ? "Renommer la préparation" : "Renommer le projet"}</h2>
-            <p>{renameTarget.spaceType === "preparation" ? "Le titre sert à retrouver votre échange. Il ne modifie pas le nom du futur projet." : "Le nom officiel change. L’identité du projet, son fil et ses ressources restent les mêmes."}</p>
+            <p>{renameTarget.spaceType === "preparation" ? "Le titre sert à retrouver votre échange. Il ne modifie pas le nom du futur projet." : "Le nom du projet sera mis à jour sans modifier son identité, ses documents ni sa conversation."}</p>
+            {renameTarget.spaceType === "project" ? <p>Le renommage ne modifie pas le dépôt Git associé.</p> : null}
             <label className="personal-portfolio-rename-field">
               <span>{renameTarget.spaceType === "preparation" ? "TITRE DE LA PRÉPARATION" : "NOM DU PROJET"}</span>
               <input data-testid="portfolio-rename-input" value={renameValue} onChange={(event) => setRenameValue(event.target.value)} />
             </label>
             {renameTarget.spaceType === "preparation" ? <p>Un titre manuel ne sera plus écrasé par Nora.</p> : null}
+            {renameNotice ? <p role="alert" data-testid="portfolio-rename-message">{renameNotice}</p> : null}
+            {renameNotice && renameTarget.label !== renameValue.trim() ? <p>Valeur actuelle : {renameTarget.label}</p> : null}
             <div className="personal-portfolio-modal-actions">
-              <button type="button" onClick={() => setRenameTarget(null)}>Annuler</button>
+              <button type="button" onClick={() => { if (!locked) { setRenameTarget(null); setRenameNotice(""); } }}>Annuler</button>
               <button type="button" className="personal-portfolio-primary" disabled={locked || !renameValue.trim()} onClick={() => {
                 const intentionKey = crypto.randomUUID();
                 const path = renameTarget.spaceType === "preparation"
@@ -959,7 +1031,14 @@ export function PersonalPortfolio() {
                 const payload = renameTarget.spaceType === "preparation"
                   ? { title: renameValue, expectedRevision: renameTarget.nameRevision, intentionKey }
                   : { name: renameValue, expectedRevision: renameTarget.nameRevision, intentionKey };
-                void mutate(path, "PUT", payload, { kind: "rename", spaceType: renameTarget.spaceType, spaceId: renameTarget.id, knownVersion: renameTarget.nameRevision, intentionKey });
+                void mutate(path, "PUT", payload, {
+                  kind: "rename",
+                  spaceType: renameTarget.spaceType,
+                  spaceId: renameTarget.id,
+                  knownVersion: renameTarget.nameRevision,
+                  intentionKey,
+                  requestedLabel: renameValue,
+                });
               }}>Enregistrer</button>
             </div>
           </div>
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
index e027da30..43f77c9d 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/semantic-qualification.ts
@@ -277,7 +277,11 @@ export const NoraTurnQualificationSchema = z.object({
    * It is not the future official project name. An unusable value is ignored
    * by the owner and must not invalidate the rest of the qualification.
    */
-  suggestedPreparationTitle: z.string().max(2000).optional(),
+  /**
+   * Secondary enrichment. A plain string so the Agents SDK schema stays a ZodObject.
+   * A non-string is detached before parse; length is judged by the title owner, not here.
+   */
+  suggestedPreparationTitle: z.string().optional(),
   intents: z.array(QualifiedIntentItemSchema).max(12).default([]),
   /**
    * Questions encore ouvertes APRÈS ce tour.
@@ -472,8 +476,18 @@ const PILOTAGE_CAPS = new Set<StudioCapabilityId>([
   "d6.human_decision",
 ]);

+/** A bad title suggestion must not fail an otherwise valid qualification. */
+export function detachUnusablePreparationTitle(raw: unknown): unknown {
+  if (!raw || typeof raw !== "object" || Array.isArray(raw)) return raw;
+  const record = { ...(raw as Record<string, unknown>) };
+  if (record.suggestedPreparationTitle !== undefined && typeof record.suggestedPreparationTitle !== "string") {
+    delete record.suggestedPreparationTitle;
+  }
+  return record;
+}
+
 export function validateNoraTurnQualification(raw: unknown): QualificationValidation {
-  const parsed = NoraTurnQualificationSchema.safeParse(raw);
+  const parsed = NoraTurnQualificationSchema.safeParse(detachUnusablePreparationTitle(raw));
   if (!parsed.success) {
     return { ok: false, reason: `SCHEMA_INVALID:${parsed.error.issues[0]?.message ?? "unknown"}` };
   }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 5a23cb41..9fa6b6a4 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -5437,7 +5437,17 @@ export async function postUserMessageAndNora(
         suggested: qualification.suggestedPreparationTitle ?? "",
       });
     } catch {
-      // The confirmed turn stays confirmed. A title is never worth another provider call.
+      emitObs({
+        event_name: "d2.preparation_title.apply_failed",
+        component: "d3.conversation",
+        request_id: requestId,
+        operation_id: reserved.operationId,
+        generation_id: reply.generationId,
+        outcome: "FAILED",
+        error_category: "PREPARATION_TITLE_APPLY_FAILED",
+        resource_ref: preparationId,
+        meta: { kind: "first_title", status: "FAILED" },
+      });
     }
   }

diff --git a/projects/sfia-studio-next/web/src/domains/identity/portfolio-labels.ts b/projects/sfia-studio-next/web/src/domains/identity/portfolio-labels.ts
index abb444f5..fb34551b 100644
--- a/projects/sfia-studio-next/web/src/domains/identity/portfolio-labels.ts
+++ b/projects/sfia-studio-next/web/src/domains/identity/portfolio-labels.ts
@@ -1,3 +1,14 @@
+const TITLE_MAX_CODE_POINTS = 80;
+
+/** Owner spelling of a preparation title. Null means the suggestion is unusable. */
+export function normalizePreparationTitle(value: string): string | null {
+  const single = value.normalize("NFC").replace(/[\t\f\v]+/g, " ").replace(/ {2,}/g, " ").trim();
+  if (!single || /[\r\n]/.test(single)) return null;
+  if ([...single].length > TITLE_MAX_CODE_POINTS) return null;
+  if (/[<>]/.test(single)) return null;
+  return single;
+}
+
 export type PreparationLabelInput = {
   id: string;
   previewName?: string;
diff --git a/projects/sfia-studio-next/web/src/domains/identity/portfolio.ts b/projects/sfia-studio-next/web/src/domains/identity/portfolio.ts
index 9cf031fb..44fe5d5f 100644
--- a/projects/sfia-studio-next/web/src/domains/identity/portfolio.ts
+++ b/projects/sfia-studio-next/web/src/domains/identity/portfolio.ts
@@ -7,11 +7,13 @@ import {
   decodePreparationsCursor,
   encodePreparationsCursor,
 } from "./portfolio-cursor";
+import { preparationDisplayLabel } from "./portfolio-labels";

 export type PreparationSummary = {
   id: string;
   previewName: string;
   previewSummary: string;
+  title: string;
   createdAt: string;
   status: "OPEN";
 };
@@ -74,6 +76,7 @@ async function loadPreparationsPage(
   const rows = await db
     .select({
       id: preparations.id,
+      title: preparations.title,
       previewName: preparations.previewName,
       previewSummary: preparations.previewSummary,
       createdAt: preparations.createdAt,
@@ -103,6 +106,12 @@ async function loadPreparationsPage(
       id: r.id,
       previewName: r.previewName,
       previewSummary: r.previewSummary,
+      title: preparationDisplayLabel({
+        id: r.id,
+        title: r.title,
+        previewName: r.previewName,
+        previewSummary: r.previewSummary,
+      }),
       createdAt: r.createdAt.toISOString(),
       status: "OPEN" as const,
     })),
diff --git a/projects/sfia-studio-next/web/src/domains/preparation/space-naming.ts b/projects/sfia-studio-next/web/src/domains/preparation/space-naming.ts
index 9b706d15..f7993ba6 100644
--- a/projects/sfia-studio-next/web/src/domains/preparation/space-naming.ts
+++ b/projects/sfia-studio-next/web/src/domains/preparation/space-naming.ts
@@ -1,17 +1,30 @@
 import { sql } from "@/db/client";
+import { validateNoraTurnQualification } from "@/domains/conversation/semantic-qualification";
+import { normalizePreparationTitle } from "@/domains/identity/portfolio-labels";
 import { namesConflictForSamePilot, normalizeProjectNameKey } from "@/domains/preparation/projection";
 import { StudioError } from "@/lib/http-errors";

 export type PreparationTitleSource = "NONE" | "NORA" | "PILOT";

-const TITLE_MAX_CODE_POINTS = 80;
+export { normalizePreparationTitle };

-export function normalizePreparationTitle(value: string): string | null {
-  const single = value.normalize("NFC").replace(/[\t\f\v]+/g, " ").replace(/ {2,}/g, " ").trim();
-  if (!single || /[\r\n]/.test(single)) return null;
-  if ([...single].length > TITLE_MAX_CODE_POINTS) return null;
-  if (/[<>]/.test(single)) return null;
-  return single;
+/** The title persisted by D2 must be the suggestion attested on this durable turn. */
+function attestedSuggestedTitle(resultJson: string | null): string | null {
+  if (!resultJson) return null;
+  let raw: unknown;
+  try {
+    raw = JSON.parse(resultJson);
+  } catch {
+    return null;
+  }
+  if (!raw || typeof raw !== "object") return null;
+  const validated = validateNoraTurnQualification(
+    (raw as { semanticQualification?: unknown }).semanticQualification,
+  );
+  if (!validated.ok) return null;
+  const suggested = validated.value.suggestedPreparationTitle;
+  if (typeof suggested !== "string") return null;
+  return normalizePreparationTitle(suggested);
 }

 function displayProjectName(value: string): string {
@@ -59,6 +72,29 @@ export async function applyFirstPreparationTitle(input: {
       SELECT preparation_id FROM preparation_project_links WHERE preparation_id = ${input.preparationId} LIMIT 1
     `;
     if (linked[0]) return { applied: false };
+    const turns = await tx<{
+      status: string;
+      owner_pilot_id: string;
+      result_json: string | null;
+      preparation_id: string;
+      project_id: string | null;
+    }[]>`
+      SELECT c.status, c.owner_pilot_id, c.result_json, conv.preparation_id, conv.project_id
+      FROM conversation_turn_commands c
+      JOIN conversations conv ON conv.id = c.conversation_id
+      WHERE c.id = ${input.turnCommandId}
+    `;
+    const turn = turns[0];
+    if (
+      !turn
+      || turn.status !== "COMPLETE"
+      || turn.owner_pilot_id !== input.pilotId
+      || turn.preparation_id !== input.preparationId
+      || turn.project_id
+      || attestedSuggestedTitle(turn.result_json) !== title
+    ) {
+      return { applied: false };
+    }
     const updated = await tx`
       UPDATE preparations
       SET title = ${title},
@@ -93,11 +129,12 @@ export async function renamePreparation(input: {
   return sql.begin(async (tx) => {
     const rows = await tx<{
       title: string | null;
+      title_source: string;
       title_revision: number;
       title_intention_key: string | null;
       status: string;
     }[]>`
-      SELECT title, title_revision, title_intention_key, status
+      SELECT title, title_source, title_revision, title_intention_key, status
       FROM preparations
       WHERE id = ${input.preparationId} AND owner_pilot_id = ${input.pilotId}
       FOR UPDATE
@@ -124,12 +161,24 @@ export async function renamePreparation(input: {
       throw new StudioError("CONFLICT", "Le titre a changé. Relisez-le avant de confirmer.");
     }
     if (row.title === title) {
+      if (row.title_source === "PILOT") {
+        await tx`
+          UPDATE preparations
+          SET title_intention_key = ${intentionKey}, updated_at = now()
+          WHERE id = ${input.preparationId}
+        `;
+        return { label: title, revision, intentionKey, changed: false };
+      }
+      const adopted = revision + 1;
       await tx`
         UPDATE preparations
-        SET title_intention_key = ${intentionKey}, updated_at = now()
-        WHERE id = ${input.preparationId}
+        SET title_source = 'PILOT',
+            title_revision = ${adopted},
+            title_intention_key = ${intentionKey},
+            updated_at = now()
+        WHERE id = ${input.preparationId} AND title_revision = ${revision}
       `;
-      return { label: title, revision, intentionKey, changed: false };
+      return { label: title, revision: adopted, intentionKey, changed: true };
     }
     const next = revision + 1;
     await tx`
diff --git a/projects/sfia-studio-next/web/tests/e2e/preparation-title-continuity.spec.ts b/projects/sfia-studio-next/web/tests/e2e/preparation-title-continuity.spec.ts
index e86a0be8..2f2f7986 100644
--- a/projects/sfia-studio-next/web/tests/e2e/preparation-title-continuity.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/preparation-title-continuity.spec.ts
@@ -78,3 +78,47 @@ test("preparation title stays independent of the official project name", async (
   await expect(page.getByText(renamed)).toHaveCount(0);
   await expect(page.getByTestId(`open-project-${projectId}`)).toHaveCount(0);
 });
+
+test("rename keeps the typed value when validation fails or the version is stale", async ({ page }) => {
+  await page.goto("/login");
+  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+  await page.waitForURL("**/portfolio");
+  const preparationId = await openNewPreparation(page);
+  await page.goto("/portfolio");
+  const row = page.getByTestId(`resume-prep-${preparationId}`);
+  await row.getByRole("button", { name: "Actions de l'espace" }).click();
+  await page.getByRole("menuitem", { name: "Renommer" }).click();
+  const dialog = page.getByTestId("portfolio-rename");
+  const input = page.getByTestId("portfolio-rename-input");
+  await expect(input).toBeFocused();
+  await input.fill("<titre refusé>");
+  await dialog.getByRole("button", { name: "Enregistrer" }).click();
+  await expect(dialog).toBeVisible();
+  await expect(page.getByTestId("portfolio-rename-message")).toBeVisible();
+  await expect(input).toHaveValue("<titre refusé>");
+  await page.keyboard.press("Escape");
+  await expect(dialog).toHaveCount(0);
+
+  await row.getByRole("button", { name: "Actions de l'espace" }).click();
+  await page.getByRole("menuitem", { name: "Renommer" }).click();
+  const current = await page.request.get(`/api/portfolio/spaces/preparation/${preparationId}`);
+  expect(current.ok()).toBeTruthy();
+  const record = await current.json() as { nameRevision: number };
+  const ahead = await page.request.put(`/api/preparations/${preparationId}/title`, {
+    data: {
+      title: "Titre déjà enregistré",
+      expectedRevision: record.nameRevision,
+      intentionKey: `ahead-${crypto.randomUUID()}`,
+    },
+  });
+  expect(ahead.ok()).toBeTruthy();
+  await input.fill("Titre proposé ensuite");
+  await dialog.getByRole("button", { name: "Enregistrer" }).click();
+  await expect(dialog).toBeVisible();
+  await expect(page.getByTestId("portfolio-rename-message")).toBeVisible();
+  await expect(input).toHaveValue("Titre proposé ensuite");
+  await expect(dialog).toContainText("Titre déjà enregistré");
+  await dialog.getByRole("button", { name: "Enregistrer" }).click();
+  await expect(dialog).toHaveCount(0);
+  await expect(row).toContainText("Titre proposé ensuite", { timeout: 15000 });
+});
diff --git a/projects/sfia-studio-next/web/tests/integration/space-naming.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/space-naming.pg.test.ts
index fa74bd7c..91ce2903 100644
--- a/projects/sfia-studio-next/web/tests/integration/space-naming.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/space-naming.pg.test.ts
@@ -4,7 +4,8 @@ config({ path: ".env.local" });

 import { eq } from "drizzle-orm";
 import { db } from "@/db/client";
-import { pilots, preparations, projects, preparationProjectLinks } from "@/db/schema";
+import { pilots, preparations, projects, preparationProjectLinks, conversations, conversationTurnCommands } from "@/db/schema";
+import { SEMANTIC_QUALIFICATION_SCHEMA_VERSION } from "@/domains/conversation/semantic-qualification";
 import { newId } from "@/lib/ids";
 import { createProjectCommand } from "@/domains/preparation/create-project";
 import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
@@ -22,6 +23,40 @@ async function seedPilot(label: string) {
   return id;
 }

+async function attestTurn(input: {
+  pilotId: string;
+  preparationId: string;
+  title?: string;
+  status?: string;
+  projectId?: string | null;
+}) {
+  const conversationId = newId("conv");
+  const commandId = newId("tcmd");
+  await db.insert(conversations).values({
+    id: conversationId,
+    preparationId: input.preparationId,
+    projectId: input.projectId ?? null,
+    ownerPilotId: input.pilotId,
+  });
+  await db.insert(conversationTurnCommands).values({
+    id: commandId,
+    conversationId,
+    ownerPilotId: input.pilotId,
+    clientTurnKey: `key-${commandId}`,
+    requestFingerprint: "fp-title",
+    operationId: newId("op"),
+    status: input.status ?? "COMPLETE",
+    resultJson: JSON.stringify({
+      semanticQualification: {
+        schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+        status: "QUALIFIED",
+        ...(input.title !== undefined ? { suggestedPreparationTitle: input.title } : {}),
+      },
+    }),
+  });
+  return commandId;
+}
+
 describe("preparation title and project name", () => {
   beforeAll(() => {
     if (!process.env.DATABASE_URL?.includes("sfia_next_e2e")) {
@@ -42,8 +77,11 @@ describe("preparation title and project name", () => {
       pilotId, preparationId: prep.id, turnCommandId: "turn-1", suggested: "a".repeat(90),
     })).toEqual({ applied: false });

+    const attested = await attestTurn({
+      pilotId, preparationId: prep.id, title: "  Analyse   documentaire ",
+    });
     const applied = await applyFirstPreparationTitle({
-      pilotId, preparationId: prep.id, turnCommandId: "turn-2", suggested: "  Analyse   documentaire ",
+      pilotId, preparationId: prep.id, turnCommandId: attested, suggested: "  Analyse   documentaire ",
     });
     expect(applied.applied).toBe(true);
     expect((await applyFirstPreparationTitle({
@@ -54,7 +92,7 @@ describe("preparation title and project name", () => {
     expect(titled.title).toBe("Analyse documentaire");
     expect(titled.titleSource).toBe("NORA");
     expect(titled.titleRevision).toBe(1);
-    expect(titled.titleSourceTurnId).toBe("turn-2");
+    expect(titled.titleSourceTurnId).toBe(attested);
     expect(titled.previewName).toBe("apercu");
     expect(titled.previewSummary).toBe("resume");
     expect(titled.creationRevision).toBe(before.creationRevision);
@@ -85,8 +123,9 @@ describe("preparation title and project name", () => {
   it("projects the title and refuses a rename after attachment", async () => {
     const pilotId = await seedPilot("attach");
     const prep = await openOrCreatePreparation(pilotId);
+    const attested = await attestTurn({ pilotId, preparationId: prep.id, title: "Préparation visible" });
     await applyFirstPreparationTitle({
-      pilotId, preparationId: prep.id, turnCommandId: "turn-a", suggested: "Préparation visible",
+      pilotId, preparationId: prep.id, turnCommandId: attested, suggested: "Préparation visible",
     });
     const board = await loadPersonalBoard(pilotId, { scope: "current", filter: "all", query: "" });
     expect(board.items.some((item) => item.id === prep.id && item.label === "Préparation visible")).toBe(true);
@@ -160,4 +199,154 @@ describe("preparation title and project name", () => {
     });
     expect(distinct.label).toBe("Été");
   });
+
+  it("accepts only a complete turn that proposed this title for this preparation", async () => {
+    const pilotId = await seedPilot("proof");
+    const other = await seedPilot("proof-other");
+    const prep = await openOrCreatePreparation(pilotId);
+    const elsewhere = await openOrCreatePreparation(pilotId);
+    expect((await applyFirstPreparationTitle({
+      pilotId, preparationId: prep.id, turnCommandId: "turn-missing", suggested: "Titre absent",
+    })).applied).toBe(false);
+
+    const running = await attestTurn({ pilotId, preparationId: prep.id, title: "Titre course", status: "RUNNING" });
+    expect((await applyFirstPreparationTitle({
+      pilotId, preparationId: prep.id, turnCommandId: running, suggested: "Titre course",
+    })).applied).toBe(false);
+    const failed = await attestTurn({ pilotId, preparationId: prep.id, title: "Titre échec", status: "FAILED" });
+    expect((await applyFirstPreparationTitle({
+      pilotId, preparationId: prep.id, turnCommandId: failed, suggested: "Titre échec",
+    })).applied).toBe(false);
+
+    const foreign = await attestTurn({ pilotId: other, preparationId: prep.id, title: "Titre étranger" });
+    expect((await applyFirstPreparationTitle({
+      pilotId, preparationId: prep.id, turnCommandId: foreign, suggested: "Titre étranger",
+    })).applied).toBe(false);
+    const otherPrep = await attestTurn({ pilotId, preparationId: elsewhere.id, title: "Autre préparation" });
+    expect((await applyFirstPreparationTitle({
+      pilotId, preparationId: prep.id, turnCommandId: otherPrep, suggested: "Autre préparation",
+    })).applied).toBe(false);
+    const mismatched = await attestTurn({ pilotId, preparationId: prep.id, title: "Titre attesté" });
+    expect((await applyFirstPreparationTitle({
+      pilotId, preparationId: prep.id, turnCommandId: mismatched, suggested: "Titre différent",
+    })).applied).toBe(false);
+
+    const matching = await attestTurn({ pilotId, preparationId: prep.id, title: "Titre attesté" });
+    expect((await applyFirstPreparationTitle({
+      pilotId, preparationId: prep.id, turnCommandId: matching, suggested: "Titre attesté",
+    })).applied).toBe(true);
+    expect((await applyFirstPreparationTitle({
+      pilotId, preparationId: prep.id, turnCommandId: matching, suggested: "Titre attesté",
+    })).applied).toBe(false);
+
+    const adopted = await renamePreparation({
+      pilotId, preparationId: prep.id, title: "Titre attesté", expectedRevision: 1, intentionKey: "adopt-key1",
+    });
+    expect(adopted).toMatchObject({ changed: true, revision: 2, label: "Titre attesté" });
+    const source = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
+    expect(source.titleSource).toBe("PILOT");
+  });
+
+  it("serializes concurrent names and does not let a late intention overwrite a newer one", async () => {
+    const pilotId = await seedPilot("race");
+    const existing = newId("proj");
+    const left = newId("proj");
+    const right = newId("proj");
+    await db.insert(projects).values([
+      { id: existing, ownerPilotId: pilotId, name: "Ancien stable" },
+      { id: left, ownerPilotId: pilotId, name: "Gauche" },
+      { id: right, ownerPilotId: pilotId, name: "Droite" },
+    ]);
+    const prep = await openOrCreatePreparation(pilotId);
+    await updatePreview(pilotId, prep.id, "Nom disputé", "résumé");
+    const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
+    const raced = await Promise.allSettled([
+      createProjectCommand({
+        pilotId,
+        preparationId: prep.id,
+        expectedCreationRevision: refreshed.creationRevision,
+        projectName: "Nom disputé",
+        previewSummary: "résumé",
+        idempotencyKey: newId("idem"),
+      }),
+      renameProject({
+        pilotId, projectId: existing, name: "Nom disputé", expectedRevision: 0, intentionKey: "race-create1",
+      }),
+    ]);
+    const named = await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId));
+    expect(named.filter((row) => row.name === "Nom disputé")).toHaveLength(1);
+    expect(raced.filter((item) => item.status === "fulfilled")).toHaveLength(1);
+
+    const pair = await Promise.allSettled([
+      renameProject({ pilotId, projectId: left, name: "Nom commun", expectedRevision: 0, intentionKey: "race-left01" }),
+      renameProject({ pilotId, projectId: right, name: "Nom commun", expectedRevision: 0, intentionKey: "race-right1" }),
+    ]);
+    expect(pair.filter((item) => item.status === "fulfilled")).toHaveLength(1);
+    const shared = await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId));
+    expect(shared.filter((row) => row.name === "Nom commun")).toHaveLength(1);
+
+    const leftNow = (await db.select().from(projects).where(eq(projects.id, left)))[0];
+    const same = await Promise.allSettled([
+      renameProject({ pilotId, projectId: left, name: "Alpha course", expectedRevision: leftNow.nameRevision, intentionKey: "race-alpha1" }),
+      renameProject({ pilotId, projectId: left, name: "Bêta course", expectedRevision: leftNow.nameRevision, intentionKey: "race-beta01" }),
+    ]);
+    expect(same.filter((item) => item.status === "fulfilled")).toHaveLength(1);
+    const winner = (await db.select().from(projects).where(eq(projects.id, left)))[0];
+    expect(["Alpha course", "Bêta course"]).toContain(winner.name);
+    expect(winner.nameRevision).toBe(leftNow.nameRevision + 1);
+
+    const rightNow = (await db.select().from(projects).where(eq(projects.id, right)))[0];
+    const firstWrite = await renameProject({
+      pilotId, projectId: right, name: "Premier", expectedRevision: rightNow.nameRevision, intentionKey: "late-first1",
+    });
+    await renameProject({
+      pilotId, projectId: right, name: "Second", expectedRevision: firstWrite.revision, intentionKey: "late-second",
+    });
+    await expect(renameProject({
+      pilotId, projectId: right, name: "Premier", expectedRevision: firstWrite.revision, intentionKey: "late-first1",
+    })).rejects.toMatchObject({ code: "CONFLICT" });
+    const kept = (await db.select().from(projects).where(eq(projects.id, right)))[0];
+    expect(kept.name).toBe("Second");
+
+    const titled = await attestTurn({ pilotId, preparationId: prep.id, title: "Titre Nora" });
+    const manualPrep = await openOrCreatePreparation(pilotId);
+    const manualTurn = await attestTurn({ pilotId, preparationId: manualPrep.id, title: "Titre Nora" });
+    const titleRace = await Promise.allSettled([
+      applyFirstPreparationTitle({
+        pilotId, preparationId: manualPrep.id, turnCommandId: manualTurn, suggested: "Titre Nora",
+      }),
+      renamePreparation({
+        pilotId, preparationId: manualPrep.id, title: "Titre manuel", expectedRevision: 0, intentionKey: "race-manual",
+      }),
+    ]);
+    const manualRow = (await db.select().from(preparations).where(eq(preparations.id, manualPrep.id)))[0];
+    expect(["NORA", "PILOT"]).toContain(manualRow.titleSource);
+    expect(titleRace.filter((item) => item.status === "rejected").length).toBeLessThanOrEqual(1);
+    if (manualRow.titleSource === "PILOT") expect(manualRow.title).toBe("Titre manuel");
+    if (manualRow.titleSource === "NORA") expect(manualRow.title).toBe("Titre Nora");
+
+    const attachPrep = await openOrCreatePreparation(pilotId);
+    await updatePreview(pilotId, attachPrep.id, "Projet attaché", "résumé");
+    const attachRevision = (await db.select().from(preparations).where(eq(preparations.id, attachPrep.id)))[0];
+    const attachTurn = await attestTurn({ pilotId, preparationId: attachPrep.id, title: "Avant rattachement" });
+    await Promise.allSettled([
+      applyFirstPreparationTitle({
+        pilotId, preparationId: attachPrep.id, turnCommandId: attachTurn, suggested: "Avant rattachement",
+      }),
+      createProjectCommand({
+        pilotId,
+        preparationId: attachPrep.id,
+        expectedCreationRevision: attachRevision.creationRevision,
+        projectName: "Projet attaché",
+        previewSummary: "résumé",
+        idempotencyKey: newId("idem"),
+      }),
+    ]);
+    const links = await db.select().from(preparationProjectLinks).where(eq(preparationProjectLinks.preparationId, attachPrep.id));
+    expect(links).toHaveLength(1);
+    const attachedProject = (await db.select().from(projects).where(eq(projects.ownerPilotId, pilotId)))
+      .find((row) => row.name === "Projet attaché");
+    expect(attachedProject?.id).toBeTruthy();
+    expect(titled).toBeTruthy();
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
index 475f2c21..dd3e1911 100644
--- a/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/portfolio-organization.test.ts
@@ -149,16 +149,26 @@ describe("portfolio organization rules", () => {
       board: { ...board, preferences: { ...board.preferences, view: "grouped", version: 9 } },
     })).toBe("current");
     const renamed = { ...record, displayLabel: "Nouveau nom", nameRevision: 1 };
-    const rename: PortfolioIntention = { kind: "rename", spaceType: "project", spaceId: "prj_1", knownVersion: 0, intentionKey: "intent-01" };
-    expect(classifyPortfolioResponse(200, { label: "Nouveau nom", revision: 1, intentionKey: "intent-01", changed: true }, "rename")).toBe("confirmed");
+    const rename: PortfolioIntention = {
+      kind: "rename", spaceType: "project", spaceId: "prj_1", knownVersion: 0, intentionKey: "intent-01", requestedLabel: "Nouveau nom",
+    };
+    const ack = { label: "Nouveau nom", revision: 1, intentionKey: "intent-01", changed: true, spaceType: "project", spaceId: "prj_1" };
+    expect(classifyPortfolioResponse(200, ack, "rename")).toBe("confirmed");
     expect(classifyPortfolioResponse(200, { ok: true }, "rename")).toBe("unknown");
     expect(reconcileOwnerEffect({
       intention: rename,
       outcome: "confirmed",
-      acknowledgement: { label: "Nouveau nom", revision: 1, intentionKey: "intent-01", changed: true },
+      acknowledgement: ack,
       records: [renamed],
       board: { ...board, items: [{ ...board.items[0], label: "Nouveau nom" }] },
     })).toBe("confirmed");
+    expect(reconcileOwnerEffect({
+      intention: rename,
+      outcome: "confirmed",
+      acknowledgement: { ...ack, label: "Ancien nom" },
+      records: [{ ...renamed, displayLabel: "Ancien nom" }],
+      board: { ...board, items: [{ ...board.items[0], label: "Ancien nom" }] },
+    })).toBe("current");
     expect(reconcileOwnerEffect({
       intention: rename,
       outcome: "confirmed",
diff --git a/projects/sfia-studio-next/web/tests/unit/preparation-title.test.ts b/projects/sfia-studio-next/web/tests/unit/preparation-title.test.ts
index 17f85bc3..e2d72fd5 100644
--- a/projects/sfia-studio-next/web/tests/unit/preparation-title.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/preparation-title.test.ts
@@ -1,7 +1,10 @@
 import { describe, expect, it } from "vitest";
+import { ZodObject, ZodOptional, ZodString } from "zod";
 import {
+  NoraTurnQualificationLiveOutputSchema,
   NoraTurnQualificationSchema,
   SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+  validateNoraTurnQualification,
 } from "@/domains/conversation/semantic-qualification";
 import { normalizePreparationTitle } from "@/domains/preparation/space-naming";

@@ -32,4 +35,23 @@ describe("preparation title", () => {
     expect(normalizePreparationTitle("<script>")).toBeNull();
     expect(normalizePreparationTitle("")).toBeNull();
   });
+
+  it("ignores a non-textual or very long suggestion without losing the qualification", () => {
+    expect(NoraTurnQualificationLiveOutputSchema).toBeInstanceOf(ZodObject);
+    const field = NoraTurnQualificationLiveOutputSchema.shape.suggestedPreparationTitle;
+    expect(field).toBeInstanceOf(ZodOptional);
+    expect(field.unwrap()).toBeInstanceOf(ZodString);
+    const base = {
+      schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
+      status: "QUALIFIED" as const,
+      goal: "Comprendre le sujet",
+    };
+    const numeric = validateNoraTurnQualification({ ...base, suggestedPreparationTitle: 12 });
+    expect(numeric.ok).toBe(true);
+    if (numeric.ok) expect(numeric.value.suggestedPreparationTitle).toBeUndefined();
+    const huge = validateNoraTurnQualification({ ...base, suggestedPreparationTitle: "a".repeat(4000) });
+    expect(huge.ok).toBe(true);
+    if (huge.ok) expect(normalizePreparationTitle(huge.value.suggestedPreparationTitle ?? "")).toBeNull();
+    expect(validateNoraTurnQualification({ ...base, goal: 4 }).ok).toBe(false);
+  });
 });
