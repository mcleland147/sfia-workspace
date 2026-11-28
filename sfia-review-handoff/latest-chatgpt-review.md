# Review Pack — Mandat 3, surfaces projet, documents et connaissance

Date : 2026-11-28 17:43 CET
Cycle : 08 Delivery / implémentation
Profil : Standard
Typologie : EVOL
Périmètre : M3-01 à M3-05, projection des surfaces existantes
Mono-cycle : oui

## Git

Initial :
- branche `sfia/next-ml5-integrated-delivery-20261123`
- HEAD `5b9fcfd0ed5b1037a7b4224da24a84aeebed9502`
- tree `b91e6306145c4fbbbd981107fa94509079702ba9`
- parent `460c0a22df0518ba9e0f8a9dc5ecdbf605f54b6f`
- origin/main et merge-base `997897fd7cf914771e7d08e8030dc7123fab7d25`
- aucun changement versionné avant le commit de ce cycle

Final :
- HEAD `87a25c5eed65a1b30c6f608dcccb57f0c5992eff`
- tree `df79a2b3338b280ddef0a83f91e25ca38eb155e6`
- parent `5b9fcfd0ed5b1037a7b4224da24a84aeebed9502`
- push fast-forward `5b9fcfd0..87a25c5e` vers `origin/sfia/next-ml5-integrated-delivery-20261123`
- message `fix(next): restate recent work, purposes, and document identity`
- 19 fichiers, +255 / −28
- aucune migration, aucun workflow, aucune PR, aucune Action observée sur la branche

Suivi lu, non modifié :
- `docs/next-openai-studio-convergence-20261126` à `7415a1acf204e5869bae61b6d7f48a4146203f4f`
- blob `5a5549dc34f651785b013a63e4c226fa205144a0`
- §33.3

Contrats portefeuille lus comme non-régression, non modifiés :
- `5008d51d85bb12ffd37f61c1706c36d62afa8e38`

Handoff précédent attendu :
- `1a08928c888ff32036901549d1862c285fd3a3b2`

## Sources

Processus au HEAD d'entrée : routage 1.4, template 2.6, modèle opératoire, règles. CKC 08 version 0.1.0, guidance seulement. SEF v0.2. Aucune réouverture de la vision fondatrice. Aucune modification Figma. Aucune émission fournisseur.

## G2

Session Figma `cf3c5d58-1def-455c-8cda-b11c57a9eef6`, fichier `itgvCulInEnFY6DvgIegvP`, lecture seule.

Nœuds lus :
- `1036:114` — complément Travail 05.17. Il décrit le shell, le fil et le panneau « En bref ». Il ne fournit pas une liste peuplée d'éléments récents.
- `1405:1569` — contenu du panneau de contexte. États vides lus : « Aucun cycle actif », « Trajectoire à définir », « Aucun élément consulté pour le moment. », « Aucun point ouvert pour le moment. », lien « Voir tous les points ouverts ».

Aucune pictothèque par type n'est spécifiée sur ce nœud. Les glyphes ajoutés sont de courtes marques distinctes dans le cadre existant de 30 px. Aucune ressource Figma n'est importée. F2 non mesuré : le cadre validé est un état vide, pas un rectangle peuplé apparié.

## G3 et allowlist

Propriétaires réutilisés :
- récents : cache local, filtré par les allowlists document / dépôt / tentative ; le cache n'est pas une autorité
- connaissance : journal D4 existant, `parentSubjectId` pour le badge enfant
- finalité : `displayableCycleObjective` ; la persistance n'est pas réécrite
- document : `documents.title` canonique, `reviseDocument` inchangé sur le titre, refus avant `stashDocumentCommandBinding`

Allowlist effectivement modifiée :
- `web/src/app/projects/[projectId]/page.tsx`
- `web/src/lib/project-recent-consultation.ts`
- `web/src/lib/project-recent-items.ts`
- `web/src/domains/pilotage/cycle-objective-display.ts`
- `web/src/components/figma/ProjectJournal.tsx`
- `web/src/components/figma/tokens.css` — seule règle `.journal-child-badge`
- `web/src/components/figma/CursorRealizationSurface.tsx` — lecture du paramètre `focus` déjà porté par l'URL
- `web/src/domains/conversation/document-act.ts`
- `web/src/domains/conversation/document-command.ts`
- `web/src/domains/conversation/nora-adapter.ts` — une phrase d'instruction de titre
- tests unitaires et `ml4c-document-command.pg.test.ts`
- trois as-built et `construction/delivery-history.md`

Non modifiés : schéma, migrations, portefeuille, conducteur, protocole de digest, `reviseDocument` pour le titre, projections `project-projection-sync.ts`.

## Corrections

M3-01. Cinq éléments, scope pilote/projet, dédoublonnage par identité exacte conservés. Une révision documentaire différente reste une identité différente. `rev:` et `v:` techniques ne sont plus affichés. `vN` s'affiche « Version N ». Un commit hexadécimal s'affiche comme commit ; une branche s'affiche « réf. ». Un dépôt sans chemin n'est pas exposé. Un résultat, un bilan ou une preuve ne s'ouvre que si `attemptId` est connu. L'URL ajoute `focus` et le bilan sélectionne l'onglet existant : livrables, synthèse ou git. Aucun fichier de preuve précis n'est ciblé.

M3-02. Les points à clarifier de Travail sont une liste à puces. Les liens et « Voir tous les points ouverts » restent. Si la connaissance n'est pas chargée, le texte est « Points ouverts indisponibles. » Le badge « Sous-sujet » n'est posé que sur un enfant déjà présent dans l'arbre `parentSubjectId`. Aucune connaissance n'est créée. La provenance existante du journal n'est pas réattribuée.

M3-03. « Finalité métier à préciser… » n'est plus affichée comme une finalité formulée. Le libellé d'attente existant la remplace. Aucun objectif stocké n'est réécrit. Aucun statut D5 ou D6 n'est modifié.

M3-04. `documentRevisionTitleAgrees` compare les titres normalisés. Un titre qui contient déjà « V1 » reste valide s'il est le titre canonique. Une révision dont le titre contredit le document est refusée avant scellement, motif `TITLE_IDENTITY_MISMATCH`, sans écriture et sans modification du digest. L'instruction Nora demande de ne pas ajouter un suffixe de révision. Aucun titre historique n'est réécrit.

M3-05. La navigation reste dans le même projet et le même shell. Une révision refusée ne crée pas un document. Le test CREATE puis REVISE au même titre continue de sceller. Le snapshot d'un autre projet n'est pas introduit : le mécanisme de fraîcheur n'est pas modifié.

## Preuves

Unitaires, exit 0 : 6 fichiers, 82 tests. Inclus : récents, filtre sans chemin, finalité non affichable, accord de titre, commande documentaire, synchronisation de projection.

PostgreSQL isolé, exit 0 : `ml4c-document-command.pg.test.ts`, 9 tests. Le nouveau test refuse le titre contradictoire, laisse une seule révision et conserve le titre canonique. Le parcours CREATE puis REVISE au même titre reste vert.

`tsc --noEmit` exit 2 : 16 diagnostics `error TS`, aucun dans les fichiers de ce commit.

Build production exit 0. `BUILD_ID` `M1QIBC8QThGWkn3jqhvBy`.

Smoke non mutative : `GET /login` 200, `POST /api/dev/login` pilote A 200, `GET /api/portfolio` 200.

Non exécuté : parcours navigateur des 18 étapes, captures F2 appariées, campagne e2e webpack, Git LIVE, émission fournisseur.

## Matrices

| Bloc | Résultat | Limite |
|---|---|---|
| M3-01 | IMPLEMENTED | focus d'une preuve = onglet du bilan, pas un fichier |
| M3-02 | IMPLEMENTED | listes Journal et Trajectoire non réécrites |
| M3-03 | IMPLEMENTED | objectifs stockés inchangés |
| M3-04 | IMPLEMENTED | pas de réécriture historique |
| M3-05 | IMPLEMENTED | fraîcheur L2 non reconstruite |

| Référence | Verdict |
|---|---|
| MP08 | projection des récents, pas clôture du MP |
| MP03 / MP10 | projection seulement |
| MP12 | restitution des finalités |
| DOC-D | titre canonique protégé avant scellement |
| MP17 | shell et retour existants conservés |
| L1 / L2 | suite documentaire existante verte ; pas de PROJ-REC PASS |
| Mandats 1 et 2 | non rouverts ; R-M2-PF34-REREAD ouvert |

## Fake / Real

DETERMINISTIC PROVEN sur les tests exécutés. HTTP BEHAVIOR PROVEN sur login et lecture du portefeuille. BROWSER BEHAVIOR PROVEN : non. REAL BOUNDARY PROVEN : non. DETERMINISTIC PROVEN n'implique pas READY FOR REAL.

## Candidat DEV

- branche `sfia/next-ml5-integrated-delivery-20261123`
- SHA `87a25c5eed65a1b30c6f608dcccb57f0c5992eff`
- tree `df79a2b3338b280ddef0a83f91e25ca38eb155e6`
- parent `5b9fcfd0ed5b1037a7b4224da24a84aeebed9502`
- BUILD_ID `M1QIBC8QThGWkn3jqhvBy`
- PID 87192, port 3100, base `sfia_next_dev`, port 5433, schéma fichier 029
- build précédent conservé dans `/tmp/sfia-next-dev-build-5b9fcfd0`
- RECETTE PID 58965, port 3200, inchangée
- NO RELEASE, STABLE NOT AVAILABLE, NOT ADOPTED

## Réserves

- R-M3-PROOF-FOCUS : l'ouverture d'une preuve sélectionne l'onglet Git du bilan de la tentative. Elle ne démontre pas un fichier de preuve.
- R-M3-BROWSER : le parcours navigateur intégré des 18 étapes n'a pas été rejoué.
- R-M3-F2 : F2 NOT PROVEN. REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED.
- R-M2-PF34-REREAD : connu, non traité, non clos.
- Réserves transportées des mandats 1 et 2 : R-A04-WINDOW, R-A06-ATTACH, R-E2E-WEBPACK, R-B-F2, R-B-PF34-BROWSER, R-B-KEYBOARD, dernière clé d'intention, qualité Nora LIVE, F2, SAS06.
- 17 contrôles RECETTE préexistants et 17 MP restent ouverts.

## Verdict du pack

READY WITH RESERVES — MANDAT 3
Verdict visuel : REVIEW INCONCLUSIVE — RUNTIME SCREENSHOT REQUIRED
F2 NOT PROVEN
Mandat 3 non accepté. Mandat 4 non engagé.

## Couverture

| Fichier | État | Couverture |
|---|---|---|
| page.tsx | modifié | diff intégral |
| project-recent-consultation.ts | modifié | diff intégral |
| project-recent-items.ts | modifié | diff intégral |
| cycle-objective-display.ts | modifié | diff intégral |
| ProjectJournal.tsx | modifié | diff intégral |
| tokens.css | modifié | diff intégral |
| CursorRealizationSurface.tsx | modifié | diff intégral |
| document-act.ts | modifié | diff intégral |
| document-command.ts | modifié | diff intégral |
| nora-adapter.ts | modifié | diff intégral |
| quatre tests | modifié | diff intégral |
| trois as-built | modifié | diff intégral |
| delivery-history.md | modifié | diff intégral |

Créations : aucune.
Synthesis only : non.

## Diff utile

diff --git a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
index 3b99f2bd..1a7bf3bc 100644
--- a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
+++ b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
@@ -1,5 +1,9 @@
 # As-built — Ensemble 06 / Journal V4

+Complément 28/11/2026, base `5b9fcfd0`. Le badge « Sous-sujet » n'apparaît que sur un enfant déjà rattaché par `parentSubjectId`. Les listes, compteurs et sources du journal ne sont pas réécrits. Aucune connaissance n'est créée.
+
+# As-built — Ensemble 06 / Journal V4
+
 | Métadonnée | Valeur |
 |---|---|
 | Date | 19/11/2026 — LIVE prose soft-target + hard max 2000 |
diff --git a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md
index c4a128e6..63fe670a 100644
--- a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md
+++ b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md
@@ -1,5 +1,9 @@
 # As-built — Ensemble 06 / Journal V4 + Bibliothèque Documents

+Complément 28/11/2026, base `5b9fcfd0`. Une révision dont le titre contredit le titre canonique est refusée avant scellement (`TITLE_IDENTITY_MISMATCH`). Le titre déjà conservé n'est pas réécrit. Le numéro de révision reste celui attribué par le propriétaire. Les titres historiques, y compris un « V1 » métier, restent affichés tels quels.
+
+# As-built — Ensemble 06 / Journal V4 + Bibliothèque Documents
+
 | Métadonnée | Valeur |
 |---|---|
 | Date | 20/11/2026 |
diff --git a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
index 76914b4b..25ac18f5 100644
--- a/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
+++ b/projects/sfia-studio-next/construction/convergence-ux-ui-globale/ensemble-07-as-built-initial-qualification.md
@@ -1,5 +1,9 @@
 # Ensemble 07 — As-built (qualification initiale Projet / Trajectoire / Nora)

+Complément 28/11/2026, base `5b9fcfd0`. Une finalité persistée comme « Finalité métier à préciser » n'est plus affichée comme un objectif formulé. Le libellé d'attente existant la remplace à l'écran. Aucun objectif stocké n'est réécrit, et aucun statut D5 ou D6 n'est modifié.
+
+# Ensemble 07 — As-built (qualification initiale Projet / Trajectoire / Nora)
+
 Le popup de création SAS06 reste celui déjà livré, à 702×823, et ses repères suivent la création, le contexte et la qualification réellement établis. Un titre de préparation, même proposé par Nora, ne crée pas le projet et ne remplace pas le nom inspecté. La reprise d'un projet existant ne rejoue pas ce popup. Le complément de nommage ne modifie pas ce popup : les quatre repères restent liés aux états réels, et l'anneau s'arrête déjà lorsque le mouvement réduit est demandé.

 **Statut:** Morris UAT accepté (21/11) · réserve Acquis/À clarifier **techniquement levée** · RECETTE · NO RELEASE · prêt revue intégration Git
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index f555e2b2..2ad46c04 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -1,3 +1,15 @@
+## delivery_id: DELIV-2026-11-28-ML5-PROJECT-SURFACES-DEV
+
+- **date_local**: 2026-11-28 (Europe/Paris)
+- **lane**: DEV only — restitution des surfaces projet, documents et connaissance
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_base**: `5b9fcfd0ed5b1037a7b4224da24a84aeebed9502`
+- **commit**: `fix(next): restate recent work, purposes, and document identity`
+- **schema_revision**: inchangé, `029`
+- **scope**: récents consultés, points ouverts, finalité affichée, titre documentaire distinct du numéro de révision
+- **classe**: NO RELEASE · compatible corrective · LIVE NOT RUN · CI NOT RUN · F2 non mesuré
+- **reserves**: réserves des mandats 1 et 2 transportées ; R-M2-PF34-REREAD non clos ; F2 non mesuré ; focus fin d'une preuve limité au bilan de la tentative
+
 ## delivery_id: DELIV-2026-11-28-ML5-NAMING-INTEGRITY-DEV

 - **date_local**: 2026-11-28 (Europe/Paris)
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index fb1dc9d4..3905a245 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -103,6 +103,8 @@ import {
   recentItemFromAttemptConsultation,
   recentItemFromDocumentConsultation,
   recentItemFromTurnReference,
+  recentItemGlyph,
+  recentItemMetaLabel,
 } from "@/lib/project-recent-consultation";
 import {
   openPointShortTitle,
@@ -1431,12 +1433,17 @@ export default function ProjectPage() {
   function openRealizationFocus(
     next: "execution" | "publication",
     attemptId?: string | null,
+    focus?: "result" | "bilan" | "proof" | null,
   ) {
     surfaceNavGenRef.current += 1;
     pendingSurfaceRef.current = next;
     noteProjectSurfaceNavIntent(params.projectId, next as StudioSurface);
     setSurface(next);
-    syncSurfaceUrl(next, null, "push", attemptId ?? null);
+    const href = buildSurfaceUrl(next, null, attemptId ?? null);
+    const url = new URL(href, "http://127.0.0.1");
+    if (focus && attemptId) url.searchParams.set("focus", focus);
+    const nextHref = `${url.pathname}${url.search}`;
+    router.push(nextHref, { scroll: false });
   }

   function resetDocumentBibliothequeState() {
@@ -3915,14 +3922,8 @@ export default function ProjectPage() {
                                     : item.kind === "proof"
                                       ? "Preuve"
                                       : item.kind;
-                      const kindGlyph =
-                        item.kind === "document_nora" || item.kind === "document_git"
-                          ? "☰"
-                          : item.kind === "file_git"
-                            ? "⎇"
-                            : item.kind === "execution"
-                              ? "▶"
-                              : "▦";
+                      const kindGlyph = recentItemGlyph(item.kind);
+                      const meta = recentItemMetaLabel(item);
                       return (
                       <li key={item.id}>
                         <button
@@ -3990,21 +3991,19 @@ export default function ProjectPage() {
                               item.kind === "bilan" ||
                               item.kind === "proof"
                             ) {
-                              openRealizationFocus(
-                                "publication",
-                                item.attemptId ?? item.resultId ?? null,
-                              );
+                              if (!item.attemptId) return;
+                              openRealizationFocus("publication", item.attemptId, item.kind);
                             }
                           }}
                         >
-                          <span className="fig-recent-item-glyph" aria-hidden>
+                          <span className="fig-recent-item-glyph" aria-hidden data-recent-glyph={item.kind}>
                             {kindGlyph}
                           </span>
                           <span className="fig-recent-item-text">
                             <span className="fig-recent-item-title">{item.title}</span>
                             <span className="fig-recent-item-meta">
                               {kindLabel}
-                              {item.refLabel ? ` · ${item.refLabel}` : ""}
+                              {meta ? ` · ${meta}` : ""}
                             </span>
                           </span>
                         </button>
@@ -4016,7 +4015,7 @@ export default function ProjectPage() {
               </div>
               <div className="fig-inspector-rule" aria-hidden />
               <p className="fig-inspector-section">Points à clarifier</p>
-              <div data-testid="travail-aside-clarifier">
+              <ul className="list-disc pl-4" data-testid="travail-aside-clarifier">
                 {travailAsideOpenPoints(knowledge?.openPoints ?? [], 5).map((o) => {
                     const short =
                       "shortTitle" in o && typeof o.shortTitle === "string"
@@ -4025,8 +4024,8 @@ export default function ProjectPage() {
                     const subjectId =
                       "subjectId" in o && typeof o.subjectId === "string" ? o.subjectId : null;
                     return (
+                      <li key={o.id}>
                       <button
-                        key={o.id}
                         type="button"
                         className="fig-inspector-link mb-2 block text-left"
                         data-testid={`travail-open-point-${o.id}`}
@@ -4046,9 +4045,15 @@ export default function ProjectPage() {
                       >
                         {short}
                       </button>
+                      </li>
                     );
                   })}
-                {(knowledge?.openPoints ?? []).filter((o) => o.status === "OPEN").length === 0 ? (
+              </ul>
+                {knowledge == null ? (
+                  <p className="fig-inspector-card-body">
+                    Points ouverts indisponibles.
+                  </p>
+                ) : knowledge.openPoints.filter((o) => o.status === "OPEN").length === 0 ? (
                   <p className="fig-inspector-card-body">
                     Aucun point ouvert pour le moment.
                   </p>
@@ -4073,7 +4078,6 @@ export default function ProjectPage() {
                     Voir tous les points ouverts
                   </button>
                 )}
-              </div>
             </div>
             )
           }
diff --git a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
index d9d089df..a02a3478 100644
--- a/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/CursorRealizationSurface.tsx
@@ -132,12 +132,17 @@ export function CursorRealizationSurface(props: {
   const deepLinkedAttemptRef = useRef<string | null>(null);
   useEffect(() => {
     if (typeof window === "undefined") return;
-    const id = new URLSearchParams(window.location.search).get("attempt");
+    const params = new URLSearchParams(window.location.search);
+    const id = params.get("attempt");
     if (!id || attempts.length === 0) return;
     if (deepLinkedAttemptRef.current === id) return;
     const hit = attempts.find((a) => a.attemptId === id);
     if (!hit) return;
     deepLinkedAttemptRef.current = id;
+    const focus = params.get("focus");
+    if (focus === "result") setBilanTab("livrables");
+    else if (focus === "proof") setBilanTab("git");
+    else if (focus === "bilan") setBilanTab("synthese");
     if (mode === "results") {
       void openBilan(hit);
     } else {
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
index bf820a41..59f38a21 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
@@ -1485,6 +1485,7 @@ function SubjectHierarchyBlock(props: {
                 >
                   <span className="journal-group-text">
                     <span className="journal-child-title">{c.title}</span>
+                    <span className="journal-child-badge">Sous-sujet</span>
                     {cBlurb ? <span className="journal-row-desc">{cBlurb}</span> : null}
                     {cMatch ? (
                       <span className="journal-match" data-testid={`journal-match-${c.id}`}>
@@ -1512,6 +1513,7 @@ function SubjectHierarchyBlock(props: {
                           onClick={() => props.onSelect(g.id)}
                         >
                           <span className="journal-child-title">{g.title}</span>
+                          <span className="journal-child-badge">Sous-sujet</span>
                           <span className="journal-open-arrow" aria-hidden>
                             ↗
                           </span>
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index 490dc078..15a2cae7 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -5234,6 +5234,13 @@
 .journal-child-title {
   color: var(--journal-ink);
 }
+.journal-child-badge {
+  display: inline-block;
+  margin-left: 8px;
+  font-size: 11px;
+  font-weight: 500;
+  color: var(--journal-muted);
+}
 .journal-row-desc {
   display: block;
   font-size: 12px;
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
index a6b2bc62..fc190e90 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-act.ts
@@ -177,6 +177,11 @@ export function stripNonAuthoritativeSpans(text: string): string {
     .replace(/'[^']*'/g, " ");
 }

+/** A revision may keep the canonical title. It may not replace it. */
+export function documentRevisionTitleAgrees(canonical: string, proposed: string): boolean {
+  return normalizeDocumentTitle(canonical) === normalizeDocumentTitle(proposed) && normalizeDocumentTitle(canonical).length > 0;
+}
+
 /** Normalize titles for non-destructive comparison. */
 export function normalizeDocumentTitle(title: string): string {
   return title
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts b/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
index bdd4afda..ef1c52db 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/document-command.ts
@@ -5,8 +5,9 @@
 import { createHash } from "node:crypto";
 import { and, eq } from "drizzle-orm";
 import { db } from "@/db/client";
-import { conversationTurnCommands, conversations, messages } from "@/db/schema";
+import { conversationTurnCommands, conversations, documents, messages } from "@/db/schema";
 import {
+  documentRevisionTitleAgrees,
   extractContractualDocumentProposal,
   LEGACY_UNTITLED_DOCUMENT_TITLE,
 } from "@/domains/conversation/document-act";
@@ -629,6 +630,28 @@ export async function sealAndApplyDocumentCommand(input: {
     | Awaited<ReturnType<typeof reviseDocument>>
     | { status: "NOT_EXECUTED"; reason: string };
 }> {
+  if (input.binding.action === "REVISE" && input.binding.documentId) {
+    const owned = (
+      await db
+        .select({ title: documents.title })
+        .from(documents)
+        .where(
+          and(
+            eq(documents.id, input.binding.documentId),
+            eq(documents.ownerPilotId, input.pilotId),
+            eq(documents.preparationId, input.binding.preparationId),
+          ),
+        )
+        .limit(1)
+    )[0];
+    if (owned && !documentRevisionTitleAgrees(owned.title, input.binding.title)) {
+      return {
+        sealApplied: false,
+        effect: { status: "NOT_EXECUTED", reason: "TITLE_IDENTITY_MISMATCH" },
+      };
+    }
+  }
+
   const sealed = await stashDocumentCommandBinding({
     commandId: input.fence.commandId,
     ownerToken: input.fence.ownerToken,
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 68925a7b..d27d7b70 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -1140,7 +1140,7 @@ async function runLiveWithToolsInner(
     "- Pour d2.create_project, parameters.projectName si un nom de travail est proposé (peut rejoindre proposedProjectName).",
     "- parameters.notes = complément court (cible ~500 ; plafond 2000). N'y mets PAS une motivation longue de décision ni une synthèse : place-les dans replyDraft / knowledgeStatement / decisionHint.",
     "- PLAFONDS PROSE SECONDAIRES (cible souple → plafond dur 2000) : goal/projectIntention/desiredOutcome/initialScope/preparationAssessmentExplanation/transmitText ~800 ; clarifications[]/documentProposal.title ~400 ; summary/statement ~500 ; decisionHint/documentHint ~200 ; sectionHint ~80 ; pathHint/publicationPath/continuityReason/constraints[]/sourceEvidence[] ~240 ; resourceReferences.path ~400 ; resourceReferences.href ~800. Le long texte Pilote reste dans replyDraft (≤20k) ou knowledgeStatement (≤5k) ou documentProposal.contentMarkdown. IDs, enums, labels UI (continueChoices.label, resourceReferences.label) et noms (projectName/subjectTitle) restent courts — ne pas les allonger.",
-    "- documentProposal (optionnel) = { title métier, contentMarkdown } distinct de replyDraft pour un document intégral ≤100000. title = titre documentaire réel (jamais document-part-N).",
+    "- documentProposal (optionnel) = { title métier, contentMarkdown } distinct de replyDraft pour un document intégral ≤100000. title = titre documentaire réel (jamais document-part-N). N'ajoute pas de suffixe de révision (V1, V2, version 3) : Studio attribue le numéro. Un titre qui contient déjà ces mots pour une raison métier reste valide.",
     "- documentSource (optionnel) = { kind: PRIOR_ASSISTANT_MESSAGE, assistantMessageId } pour réutiliser une proposition déjà rédigée — acquis, pas seconde autorité concurrente du contenu courant.",
     "- Ne combine jamais documentSource et documentProposal dans le même tour.",
     "- intents[] = 0..N intentions séparées ; mode EXPLAIN/EXPLORE/PREPARE/REQUEST_EFFECT.",
diff --git a/projects/sfia-studio-next/web/src/domains/pilotage/cycle-objective-display.ts b/projects/sfia-studio-next/web/src/domains/pilotage/cycle-objective-display.ts
index 753eea25..3eb3b957 100644
--- a/projects/sfia-studio-next/web/src/domains/pilotage/cycle-objective-display.ts
+++ b/projects/sfia-studio-next/web/src/domains/pilotage/cycle-objective-display.ts
@@ -20,6 +20,7 @@ const OPERATIONAL_OBJECTIVE = new RegExp(
 export function isOperationalCycleObjective(raw: string | null | undefined): boolean {
   const t = (raw ?? "").trim();
   if (!t) return true;
+  if (/^finalité métier à préciser\b/i.test(t)) return true;
   return OPERATIONAL_OBJECTIVE.test(t);
 }

diff --git a/projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts b/projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts
index adf497af..c5b07374 100644
--- a/projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts
+++ b/projects/sfia-studio-next/web/src/lib/project-recent-consultation.ts
@@ -6,6 +6,53 @@
 import type { TurnReference } from "@/domains/conversation/turn-projection";
 import type { ProjectRecentItem, ProjectRecentItemKind } from "@/lib/project-recent-items";

+/** Hide a truncated technical revision id. A known version number stays a version. */
+export function displayableRecentRef(refLabel?: string | null): string | null {
+  const raw = refLabel?.trim() ?? "";
+  if (!raw) return null;
+  if (/^v\d+$/.test(raw)) return raw;
+  if (/^rev:/i.test(raw) || /^v:/i.test(raw)) return null;
+  return raw;
+}
+
+export function recentItemGlyph(kind: ProjectRecentItemKind): string {
+  switch (kind) {
+    case "document_nora":
+      return "Doc";
+    case "document_git":
+      return "PDF";
+    case "file_git":
+      return "Git";
+    case "execution":
+      return "Exé";
+    case "result":
+      return "Rés";
+    case "bilan":
+      return "Bil";
+    case "proof":
+      return "Prv";
+    default:
+      return "•";
+  }
+}
+
+export function recentItemMetaLabel(item: {
+  kind: ProjectRecentItemKind;
+  refLabel?: string | null;
+  commit?: string | null;
+  gitRef?: string | null;
+}): string | null {
+  if (item.kind === "file_git" || item.kind === "document_git") {
+    if (item.commit && /^[0-9a-f]{7,64}$/i.test(item.commit)) {
+      return `commit ${item.commit.slice(0, 12)}`;
+    }
+    if (item.gitRef) return `réf. ${item.gitRef}`;
+  }
+  const shown = displayableRecentRef(item.refLabel);
+  if (shown && /^v\d+$/.test(shown)) return `Version ${shown.slice(1)}`;
+  return shown;
+}
+
 export function recentItemFromDocumentConsultation(
   documentId: string,
   title: string,
@@ -20,7 +67,7 @@ export function recentItemFromDocumentConsultation(
     id: rev ? `doc:${documentId}:rev:${rev}` : `doc:${documentId}`,
     kind: "document_nora",
     title: title.slice(0, 160),
-    refLabel: refLabel ?? (rev ? `rev:${rev.slice(0, 8)}` : null),
+    refLabel: displayableRecentRef(refLabel),
     documentId,
     revisionId: rev,
   };
@@ -48,7 +95,9 @@ export function recentItemFromGitConsultation(input: {
     id: `git:${input.repositoryId}:${input.path}@${input.ref}`,
     kind: (isPdf ? "document_git" : "file_git") as ProjectRecentItemKind,
     title: input.title.slice(0, 160),
-    refLabel: (input.commit?.slice(0, 12) ?? input.ref).slice(0, 40),
+    refLabel: input.commit?.trim()
+      ? `commit ${input.commit.trim().slice(0, 12)}`
+      : `réf. ${input.ref}`.slice(0, 40),
     repositoryId: input.repositoryId,
     path: input.path,
     gitRef: input.ref,
@@ -89,11 +138,10 @@ export function recentItemFromTurnReference(
 ): ReturnType<typeof recentItemFromDocumentConsultation> | ReturnType<typeof recentItemFromGitConsultation> | null {
   if (ref.kind === "document" && ref.resourceId) {
     const rev = ref.revisionId ?? null;
-    const label = rev ? `v:${rev.slice(0, 8)}` : null;
     return recentItemFromDocumentConsultation(
       ref.resourceId,
       titleOverride ?? ref.label,
-      label,
+      null,
       rev,
     );
   }
diff --git a/projects/sfia-studio-next/web/src/lib/project-recent-items.ts b/projects/sfia-studio-next/web/src/lib/project-recent-items.ts
index 126c97ba..7b351d72 100644
--- a/projects/sfia-studio-next/web/src/lib/project-recent-items.ts
+++ b/projects/sfia-studio-next/web/src/lib/project-recent-items.ts
@@ -166,7 +166,7 @@ export function filterProjectRecentItemsForExposure(
     if (!allow.accessListsReady) return false;
     if (item.kind === "file_git" || item.kind === "document_git") {
       const repo = item.repositoryId?.trim() || "";
-      return Boolean(repo) && allow.repositoryIds.has(repo);
+      return Boolean(repo) && Boolean(item.path?.trim()) && allow.repositoryIds.has(repo);
     }
     if (
       item.kind === "execution" ||
diff --git a/projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts b/projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts
index ef79f7cf..9731d7b6 100644
--- a/projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts
+++ b/projects/sfia-studio-next/web/tests/integration/ml4c-document-command.pg.test.ts
@@ -243,6 +243,60 @@ describe("ML4C document command (PG)", () => {
     expect(conflict.status).toBe("CONFLICT");
   });

+  it("refuses a revision title that contradicts the document before sealing", async () => {
+    const pilotId = await seedPilot("ml4c-doc-title");
+    const prep = await openOrCreatePreparation(pilotId);
+    const title = "Dossier de conception fonctionnelle";
+    const v1 = await savePreparationDocument(pilotId, prep.id, title, `# ${title}\n\nCorps.\n`);
+    expect(v1.status).toBe("AVAILABLE");
+    if (v1.status !== "AVAILABLE") throw new Error("v1");
+    const convId = await getConversationId(pilotId, prep.id);
+    const reserved = await reserveTurnCommand({
+      conversationId: convId!,
+      ownerPilotId: pilotId,
+      clientTurnKey: `ml4c-title-${Date.now()}`,
+      content: "Révise le dossier.",
+    });
+    expect(reserved.kind).toBe("fresh");
+    if (reserved.kind !== "fresh") throw new Error("expected fresh turn");
+    const other = "Autre dossier";
+    const body = `# ${other}\n\nCorps révisé.\n`;
+    const admitted = admitDocumentCommand({
+      commandId: reserved.commandId,
+      operationId: reserved.operationId,
+      userMessageId: reserved.userMessageId,
+      qualifiedIntentId: "i-d4-revise",
+      action: "REVISE",
+      preparationId: prep.id,
+      documentId: v1.documentId,
+      baseRevisionId: v1.revisionId,
+      sourceRevisionId: v1.revisionId,
+      observedHeadRevisionId: v1.revisionId,
+      source: { kind: "SAME_TURN_SNAPSHOT", commandId: reserved.commandId },
+      title: other,
+      contentMarkdown: body,
+    });
+    expect(admitted.ok).toBe(true);
+    if (!admitted.ok) throw new Error(admitted.reason);
+    const sealed = await sealAndApplyDocumentCommand({
+      pilotId,
+      fence: { commandId: reserved.commandId, ownerToken: reserved.ownerToken },
+      binding: admitted.binding,
+    });
+    expect(sealed.sealApplied).toBe(false);
+    expect(sealed.effect).toMatchObject({
+      status: "NOT_EXECUTED",
+      reason: "TITLE_IDENTITY_MISMATCH",
+    });
+    const list = await listDocumentRevisions(pilotId, prep.id, v1.documentId);
+    expect(list.revisions).toHaveLength(1);
+    const kept = await db
+      .select({ title: documents.title })
+      .from(documents)
+      .where(eq(documents.id, v1.documentId));
+    expect(kept[0]?.title).toBe(title);
+  });
+
   it("resolveAssistantProposal extracts sfia-document; denies other pilot", async () => {
     const pilotA = await seedPilot("ml4c-prop-a");
     const prepA = await openOrCreatePreparation(pilotA);
diff --git a/projects/sfia-studio-next/web/tests/unit/cycle-objective-display.test.ts b/projects/sfia-studio-next/web/tests/unit/cycle-objective-display.test.ts
index 32423bba..7bc2a053 100644
--- a/projects/sfia-studio-next/web/tests/unit/cycle-objective-display.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/cycle-objective-display.test.ts
@@ -29,5 +29,6 @@ describe("cycle objective display boundary", () => {
     expect(p).toMatch(/Finalité métier à préciser/);
     expect(p).not.toMatch(/OPEN_CYCLE|sans doublon/i);
     expect(CYCLE_OBJECTIVE_PENDING_LABEL.length).toBeGreaterThan(10);
+    expect(displayableCycleObjective(p)).toBeNull();
   });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
index 9c0841bb..9257f953 100644
--- a/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/document-act.test.ts
@@ -2,6 +2,7 @@ import { describe, expect, it } from "vitest";
 import {
   explicitDocumentIntent,
   hasDocumentaryWriteSignal,
+  documentRevisionTitleAgrees,
   qualifyDocumentAct,
   extractContractualDocumentProposal,
 } from "@/domains/conversation/document-act";
@@ -12,6 +13,26 @@ import {
   serializeProposalFence,
 } from "@/domains/conversation/document-command";

+describe("document revision title identity", () => {
+  it("accepts the same business title, including a legitimate V1", () => {
+    expect(
+      documentRevisionTitleAgrees(
+        "Dossier de conception V1",
+        "  Dossier de conception V1 ",
+      ),
+    ).toBe(true);
+  });
+
+  it("refuses a revision that replaces the canonical title", () => {
+    expect(
+      documentRevisionTitleAgrees(
+        "Dossier de conception fonctionnelle",
+        "Dossier de conception fonctionnelle V2",
+      ),
+    ).toBe(false);
+  });
+});
+
 describe("document-act SEM-02 — lexical router retired", () => {
   it("qualifyDocumentAct is fail-closed stub", () => {
     expect(qualifyDocumentAct("Crée un document intitulé Compte rendu.").kind).toBe("NONE");
diff --git a/projects/sfia-studio-next/web/tests/unit/project-recent-consultation.test.ts b/projects/sfia-studio-next/web/tests/unit/project-recent-consultation.test.ts
index 5180b54b..2a2d809c 100644
--- a/projects/sfia-studio-next/web/tests/unit/project-recent-consultation.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/project-recent-consultation.test.ts
@@ -1,9 +1,12 @@
 import { describe, expect, it } from "vitest";
 import {
+  displayableRecentRef,
   recentItemFromAttemptConsultation,
   recentItemFromDocumentConsultation,
   recentItemFromGitConsultation,
   recentItemFromTurnReference,
+  recentItemGlyph,
+  recentItemMetaLabel,
 } from "@/lib/project-recent-consultation";
 import { mergeProjectRecentItems } from "@/lib/project-recent-items";

@@ -34,7 +37,7 @@ describe("B.8 — pilot consultation identities (MP-08)", () => {
     });
     expect(git.id).toBe("git:repo1:docs/readme.md@main");
     expect(git.kind).toBe("file_git");
-    expect(git.refLabel).toBe("abc123def456");
+    expect(git.refLabel).toBe("commit abc123def456");
     expect(git.repositoryId).toBe("repo1");
     expect(git.path).toBe("docs/readme.md");
     expect(git.gitRef).toBe("main");
@@ -113,4 +116,22 @@ describe("B.8 — pilot consultation identities (MP-08)", () => {
     expect(a[0]?.title).toBe("A");
     expect(b[0]?.title).toBe("B");
   });
+
+  it("keeps a known version and hides a truncated revision id", () => {
+    expect(displayableRecentRef("v3")).toBe("v3");
+    expect(displayableRecentRef("rev:abc12345")).toBeNull();
+    expect(recentItemFromDocumentConsultation("d1", "Plan", "rev:abc12345", "rev_abc").refLabel).toBeNull();
+    expect(
+      recentItemMetaLabel({ kind: "document_nora", refLabel: "v3" }),
+    ).toBe("Version 3");
+    const branch = recentItemFromGitConsultation({
+      repositoryId: "repo1",
+      path: "docs/readme.md",
+      ref: "main",
+      title: "README",
+    });
+    expect(branch.refLabel).toBe("réf. main");
+    expect(recentItemGlyph("proof")).not.toBe(recentItemGlyph("document_nora"));
+    expect(recentItemGlyph("execution")).not.toBe(recentItemGlyph("file_git"));
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/project-recent-items.test.ts b/projects/sfia-studio-next/web/tests/unit/project-recent-items.test.ts
index de0a8335..2d23b412 100644
--- a/projects/sfia-studio-next/web/tests/unit/project-recent-items.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/project-recent-items.test.ts
@@ -84,5 +84,16 @@ describe("project-recent-items (MP-08)", () => {
         accessListsReady: false,
       }).map((x) => x.id),
     ).toEqual(["doc:d1"]);
+    const pathless = filterProjectRecentItemsForExposure(
+      [{ ...mixed[1]!, path: "  " }],
+      {
+        loadReady: true,
+        documentIds: new Set(),
+        repositoryIds: new Set(["r1"]),
+        attemptIds: new Set(),
+        accessListsReady: true,
+      },
+    );
+    expect(pathless).toEqual([]);
   });
 });
