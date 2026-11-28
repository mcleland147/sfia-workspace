# Review Pack — Lot 1, finalisation du cycle documentaire

Cycle 08 — Delivery. Profil Critical. Revue Full. Mono-cycle.
Ce pack remplace le pack local précédent. Il ne l'étend pas.
Cycle précédent, immuable : handoff `451e9179f0f5a608a47c92a06796552438374eae`, blob `a4fe170bde6db3120e0ebafe395d376e70136731`. Verdict ChatGPT de ce cycle : NOT READY — sortie du lot.

Date du pack : 2026-11-28T09:52+01:00.

## 1. Identité et mandat

Projet : SFIA Studio Next. Racine : `projects/sfia-studio-next/`.
Mandat : finaliser le lot 1 déjà construit. Ne pas le recommencer. Ne pas ouvrir le lot 2.
Morris autorise la finalisation ciblée, la fixture de test, le report DOC-D/E au lot 7, les validations locales, le commit et le push du candidat DEV, puis ce Review Handoff.
La publication DEV n'est ni une acceptation, ni une promotion RECETTE, ni une release.

Programme inchangé : R5 IN PROGRESS, ML5 OPEN, LIVRAISON 1 NOT ACCEPTED, 17 MP OPEN, R6 NOT STARTED, NO RELEASE, STABLE NOT AVAILABLE, NOT ADOPTED.

## 2. Git Truth Check

### Entrée

Repository : `mcleland147/sfia-workspace`.
Worktree DEV : `/Users/morris/Projects/sfia-wt-next-ml5-20261123`.
Branche : `sfia/next-ml5-integrated-delivery-20261123`.
HEAD local = origin = `0ae9e1f7aaee3658eb3e9a135523e83a72631b31`.
Tree d'entrée : `842537274c3ad0b2f672c9ebe2e9e0f54c55d968`.
Main : `997897fd7cf914771e7d08e8030dc7123fab7d25`. Merge-base = main.
Branche documentaire : `docs/next-openai-studio-convergence-20261126` à `18997b8d452115d7296a8e76f0baa571c89a6576`.
Le diff local attendu était présent : 7 fichiers modifiés et le test navigateur non suivi. Aucun travail étranger n'y était mêlé. Il n'a pas été nettoyé.

### Sortie

Commit : `30d598515766781d987f8dba3348f6fa9e659a80`.
Message : `fix(next): stabilize documentary revision lifecycle`.
Tree : `29f61e767b37a44c54c3e75818b96496fd1b6624`.
Push fast-forward : `0ae9e1f7..30d59851` vers `origin/sfia/next-ml5-integrated-delivery-20261123`.
HEAD local = HEAD distant = `30d598515766781d987f8dba3348f6fa9e659a80`.
URL : https://github.com/mcleland147/sfia-workspace/commit/30d598515766781d987f8dba3348f6fa9e659a80
Diff depuis la base : 8 fichiers, 1102 insertions, 143 suppressions.
Worktree produit après push : seuls restent les dossiers temporaires `.tmp-sfia-review/` et `web/.tmp-sfia-review/`. Ils ne sont pas publiés.
RECETTE : processus 77113 toujours sur le port 3200, worktree de build `0ae9e1f7`. Aucun redémarrage, aucun cutover.
DEV métier : processus 55011 toujours sur le port 3100. Le serveur de test 3101 a été arrêté après la preuve.

CI distante : les workflows `sfia-studio-next-ci.yml` et `sfia-studio-ci.yml` partent sur une pull request vers `main` ou un push sur `main`. `gh run list` pour `30d59851` ne retourne aucune exécution.
Statut : REMOTE CI NOT RUN — DEV REVIEW SNAPSHOT. Ce n'est pas un CI PASS.

## 3. Sources lues pour cette finalisation

Lues dans ce cycle :

- Suivi v0.2, ref `18997b8d`, blob `7389799078cf436c31af04dc4d12134267853232`. Sections 3 et 7 en entier, sections 4 à 6 dans le même extrait. Le contrat du lot 1 et les réserves 7.3 sont la source du complément.
- Code client repris : `resolveTravailDocumentPresentation`, `focusAfterAvailableConservation`, le retour de tour dans `page.tsx`, la restauration de session, `reconcileRevisionByCorrelation`.
- Garde de fixture : `fixtureLaneActive` / `assertFixtureLane`, et `mustUseNoraFixture` dans `nora-adapter.ts` (DEV et `STUDIO_E2E=1` ou `STUDIO_FORCE_NORA_FIXTURE=1`, avant tout appel LIVE).
- Persistance lue, non modifiée : `listDocumentRevisions`, `getDocumentRevision`, `contentFingerprint` (titre, octet nul, markdown).
- `scripts/e2e-web-server.sh`, `next.config.ts`, `playwright.config.ts`.
- Déclencheurs de `.github/workflows/sfia-studio-next-ci.yml` et `sfia-studio-ci.yml`.
- As-built Ensemble 06, section du 28 novembre, et l'entrée `DELIV-2026-11-28-ML5-DOCUMENTARY-LIFECYCLE-DEV`.

Non relues intégralement dans ce cycle, déjà tenues par le cycle `451e9179` : SEF, roadmap, politique d'environnements, versioning produit, décisions R4/UX/SEM, PV Equipéo, contrats de continuité. Aucune de ces sources n'a été modifiée. CKC du cycle 08 : toujours absent. Fallback inchangé, blob `aa574926dc6c597675f9fe9257f2820c2a11ed5e`, guidance expérimentale.

## 4. Risques confirmés ou infirmés

Confirmé, puis corrigé. `resolveTravailDocumentPresentation` traitait une proposition dès que les deux markdown étaient égaux. Une révision durable du même texte pouvait être étiquetée proposition. La reconnaissance exige maintenant l'identifiant du candidat, le même document, l'absence d'identifiant de révision durable, et l'égalité du corps.

Confirmé, puis corrigé. Le retour `AVAILABLE` effaçait le candidat en cours même pour un autre document, et le `else` nettoyait le focus affiché quand le rebasement était refusé. Le garde de `focusAfterAvailableConservation` ne couvrait pas cette chaîne. Le résultat documentaire n'est appliqué que si le tour possède encore la sélection et si l'effet concerne ce document. Une visionneuse fermée pendant la requête n'est pas rouverte. Le focus du document concerné peut quand même suivre la révision écrite.

Confirmé, puis corrigé. Le candidat pouvait reprendre le focus d'un autre document lorsque `documentFocusRef` ne portait pas son `documentId`. Le focus n'est réutilisé que s'il désigne déjà ce document. Sinon le focus est créé pour le document du candidat, jamais en copiant un autre.

Confirmé, puis corrigé. La restauration après rechargement appliquait le candidat sans vérifier que le projet, le document, le candidat et la génération de visionneuse étaient encore ceux capturés avant la réponse. `pendingCandidateRestoreIsCurrent` refuse cette restauration.

Confirmé pour le fil, puis isolé. `documentTurnGenRef` entourait tout le corps `res.ok`. Une réponse plus ancienne qui arrive après une réponse plus récente ne remplace plus le fil. Une réponse qui arrive avant la suivante met encore à jour messages, pilotage, projection et rafraîchissement. Seuls le focus et la visionneuse documentaires exigent que ce tour soit encore le dernier et que la sélection n'ait pas changé. Aucun moteur de tour nouveau.

Infirmé comme défaut à corriger par une nouvelle tête. `reconcileRevisionByCorrelation` sert l'éditeur manuel et cherche une révision par sa clé de corrélation. Le chemin Nora, en cas d'accusé perdu ou de réseau coupé, gèle le choix et ne sélectionne pas une tête. Une conservation `AVAILABLE` sans `revisionId` ne rebase pas et ne retire pas le candidat. L'incertitude reste visible : « Conservation non confirmée — aucune révision identifiée. »

Non modifié, à dessein. Les gardes serveur `BASE_STALE`, `CONFLICT`, autorisation historique, empreinte, idempotence et ownership. DOC-D et DOC-E. Le lot 2. `@cursor/sdk`. Les workflows.

## 5. Contrat de transition retenu

Une proposition est une ressource de candidat : `proposalCandidateId`, document, corps. Elle n'a pas de `revisionId` durable.
Une révision est une ressource D4 : `revisionId`, numéro seulement s'il est fourni, actualité Courante, Historique ou Non vérifiée.
Deux ressources de même texte restent distinctes.
Un effet documentaire tardif ne traverse pas un changement de document ni une visionneuse fermée par le Pilote.
Le fil et les effets de pilotage ne sont pas jetés avec le contexte documentaire.
Une conservation non identifiée ou un accusé perdu ne devient pas un succès et ne choisit pas une autre tête.

## 6. Fichiers du commit

Modifiés :

- `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`
- `projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx`
- `projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx`
- `projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts`
- `projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts`
- `projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md`
- `projects/sfia-studio-next/construction/delivery-history.md`

Créé :

- `projects/sfia-studio-next/web/tests/e2e/document-revision-lifecycle.spec.ts`

Le diff complet depuis `0ae9e1f7` est l'annexe de ce pack. Le commit distant est la source de revue du code. Cette annexe évite de recopier les sources inchangées.

## 7. Validations

| Contrôle | Résultat |
| --- | --- |
| Unitaires documentaires | 30 passed. `documents-surfaces-projection`, `document-act`, `ml5-pending-proposal-viewer`. |
| PostgreSQL isolé `sfia_next_e2e` | 10 passed. Historique 4, autonomie 3, conserve-only 1, candidat 1, hauth/pdoc 1. |
| Playwright | 2 passed, 40,1 s. `:3101`, base `sfia_next_e2e`, Nora substituée, `OPENAI_API_KEY` vide. |
| Lint des fichiers du lot | exit 0. Avertissements préexistants de `page.tsx` seulement. |
| `next build` | exit 0. Compilation, contrôle de types du build, 18,8 s de compilation. Sortie isolée `.next-e2e` (`STUDIO_E2E=1`) pour ne pas remplacer le `.next` du serveur DEV 3100. |
| `tsc --noEmit` | exit 2. Aucune erreur dans les huit fichiers. Erreurs préexistantes dans des tests hors lot (dictée, FinOps, activité, SDK). |
| `git diff --check` | propre avant commit. |
| Webpack canonique | `/login` HTTP 500. `Module parse failed` sur `node_modules/@cursor/sdk/dist/esm/agent.d.ts.map`. Trace : `cursor-sdk-adapter` → `cursor-attempt-service` → `cursor-live-supervisor`. Fichiers non touchés par le lot. Non corrigé. |
| CI distante | aucune exécution pour `30d59851`. |

## 8. Preuves

Parcours nominal, navigateur, sans rechargement entre V2 et V3 :

- V1 créée, une seule identité documentaire.
- Proposition V2 inspectée avant conservation. `data-revision-id` vide. `data-proposal-candidate-id` présent.
- Le corps API du candidat est celui qui est ensuite enregistré. L'empreinte scellée dans `provenanceJson.contentSha256` est celle du candidat.
- Aucune V2 durable avant le bouton Conserver.
- V2 devient courante. V1 inchangée, corps et empreinte.
- Proposition V3 depuis cette V2, autre candidat, `sourceRevisionId` égal à la révision V2.
- V3 enregistrée égale au corps inspecté. V1 et V2 inchangées après V3.
- V1 historique demande « Repartir de la v1 ». Aucune V4 sans ce choix.
- Après rechargement, V3 reste la courante.

Concurrence navigateur : une conservation dont la réponse est retenue, puis une fermeture de visionneuse, n'ouvre pas à nouveau la visionneuse. La V2 est bien écrite. Après rechargement elle est courante et la visionneuse reste absente.

Concurrence déterministe, pas rejouée comme second document dans le navigateur :

- résultat du document A refusé quand le focus et la visionneuse sont sur B ;
- tour plus ancien refusé pour le document ;
- visionneuse fermée par le Pilote : focus mis à jour, visionneuse non rouverte ;
- restauration refusée si le document ou la génération de visionneuse a changé ;
- même markdown avec un `revisionId` : bannière « autre version », actualité de la révision, pas « proposition ».

Captures locales, non publiées, sha256 :

- `01-proposition-v2.png` `5b5a47fbf3aeefd60514d1698652c1952814be8456362e2e076703dd068b970b`
- `02-v2-courante.png` `52fca320fb468690468a0aa36d5d1c4216f37e665083a95bca5cf1fb7b1aa965`
- `03-proposition-v3.png` `7bc92a4554d38365fe54c90440afcd2429db05ec43fa920a5d89107e5234c378`
- `04-v3-courante.png` `f563ef16eb989c3b849b24755d9e4d4089daf6e3dcb66fb0c99e00ffa90dabf4`
- `05-historique-v1-v2-v3.png` `cb67d80313ad95d10e8833332dab2cb024fc967ed1c3756921e528304bbe6cc5`
- `06-revision-historique-gouvernee.png` `6a5028f644d09564b1dab1a3ecc99f2bc573731192e113db2b1f0f5aa560b9d2`

Pas de verdict F2. Le contrat visuel page 08 est réutilisé. Aucune maquette nouvelle.

## 9. Couverture des oracles

| Oracle | Niveau |
| --- | --- |
| Une identité, V1 V2 V3, V3 courante, V1 et V2 intactes | BROWSER + comparaison API intégrale et empreinte |
| Base V2 transmise à la proposition V3 | BROWSER, `sourceRevisionId` du candidat V3 |
| Candidat distinct d'une révision de même texte | DET |
| Retour tardif A vers une sélection B | DET, branche client réelle |
| Visionneuse fermée pendant la conservation | BROWSER |
| Restauration de session devenue obsolète | DET |
| Accusé perdu | lecture du chemin : pas de tête inventée. Pas de coupure réseau simulée dans le navigateur |
| Historique, conflit, candidat consommé, autre pilote | PG rejoué, 10 passed |
| Fixture hors lane LIVE | lecture de `mustUseNoraFixture` et `assertFixtureLane`. Non modifiée hors de l'énoncé V3 déjà présent |

## 10. Fake / Real

DET : identité, focus, bannières, portée du tour. Prouvé.
PG : intégrité, historique, idempotence, ownership, candidat. Prouvé sur `sfia_next_e2e`.
BROWSER : parcours réel des composants, Nora substituée. Prouvé.
LIVE : NOT RUN. Aucune émission OpenAI.

Claims tenus : IMPLEMENTED, COVERAGE VERIFIED, BEHAVIOR PROVEN — DET/PG/BROWSER.
Claims refusés : END-TO-END REAL PROVEN, READY FOR REAL, MP CLOSED, LIVRAISON 1 ACCEPTED, ADOPTED.

## 11. Blast radius, dette, réserves

Blast radius : client documentaire du projet, fixture de test, deux documents de construction, un test navigateur. Aucune migration. Schéma 027 inchangé. Serveur D4 inchangé.

Dette : aucune nouvelle structure. DOC-D et DOC-E restent au lot 7. Le correctif général de `@cursor/sdk` reste hors lot. Sortie : un loader ou une externalisation qui empêche Webpack de parser `agent.d.ts.map`, sous un mandat distinct.

Réserves :

1. Le navigateur ne rejoue pas le changement de document A→B, une lecture D4 volontairement retardée, ni une restauration de session. La décision est testée et branchée. La fermeture pendant la requête est, elle, prouvée dans le navigateur.
2. L'accusé perdu n'est pas simulé. Le code ne choisit pas de tête. Cette absence de simulation reste une réserve de preuve, pas une réserve de comportement observé.
3. Le serveur Webpack canonique répond 500 sur `/login` à cause de `@cursor/sdk`. Défaut préexistant. Le build de production passe. La preuve navigateur utilise Turbopack, même port, même base, mêmes drapeaux de fixture.
4. `tsc --noEmit` échoue sur des tests hors lot, préexistants. Le contrôle de types du `next build` passe.
5. DOC-D et DOC-E ne sont pas traités.
6. Le SHA de ce commit n'est pas recopié dans `delivery-history.md`, pour ne pas publier un second commit dont le seul objet serait son propre identifiant. Il est ici.

## 12. Verdict Cursor

READY WITH RESERVES.

Le résultat central est démontré sur le candidat publié : une identité, trois versions, le corps inspecté est le corps enregistré, une révision n'est pas une proposition, une conservation tardive ne rouvre pas la visionneuse, les protections D4 rejouées tiennent. Les réserves ci-dessus sont des limites de preuve et un défaut d'outillage préexistant. Elles ne retirent pas le résultat central. Elles empêchent READY FOR REVIEW sans réserve.

PUBLISHED DEV est vrai. REVIEWED, ACCEPTED et PROMOTED ne le sont pas.

## Annexe — diff utile

Diff complet `0ae9e1f7aaee3658eb3e9a135523e83a72631b31..30d598515766781d987f8dba3348f6fa9e659a80`. Il contient le fichier créé en entier et toutes les sections modifiées. Les sources inchangées ne sont pas recopiées.



~~~~diff
diff --git a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md
index 792a0bd6..2809b940 100644
--- a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md
+++ b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md
@@ -29,3 +29,14 @@ DOC-TECH-15 NOT RUN · DOC-TECH-16 PARTIAL · Journal R-01…R-11 · Sas KNOWN G

 - As-built Journal historique : `as-built-ensemble-06-journal-20261119.md` (ne pas réécrire).
 - Handoff RECETTE : `sfia/review-handoff@3bc3af40` blob `3724604c…`.
+
+## 2026-11-28 — cycle documentaire reproductible (lot 1, DEV local)
+
+Section factuelle du candidat de finalisation. Elle ne remplace pas les preuves historiques ci-dessus. Base `0ae9e1f7aaee3658eb3e9a135523e83a72631b31`. Pas de migration. RECETTE non touchée.
+
+1. Après une conservation `AVAILABLE` qui renvoie l'identifiant de révision, le focus de travail aligne la source et la tête observée sur cette révision, et retire le candidat ainsi que l'autorisation historique. Une sauvegarde sans identifiant, un autre document, ou un statut autre que `AVAILABLE` ne rebasent pas le focus.
+2. La visionneuse d'une proposition affiche le corps du candidat, sans identifiant de révision durable, et invalide une lecture D4 encore en vol. Si le corps manque, l'ancienne version n'est pas affichée à la place. Une proposition n'est reconnue que si l'identifiant du candidat, le document et le corps affiché correspondent. Un texte identique porté par une révision durable reste une révision.
+3. Le bandeau « version plus récente » ne s'appuie plus sur le seul mode `exact`. Une référence exacte qui est la tête D4 est courante. Une tête inconnue est « non vérifiée ». Une autre version consultée pendant qu'une proposition existe reste distincte, et la proposition peut être réaffichée.
+4. Un résultat documentaire tardif ne met à jour que le document encore sélectionné par ce tour. Il ne remplace pas le focus ou la visionneuse d'un autre document, et ne rouvre pas une visionneuse fermée par le Pilote. Les messages, le pilotage et les autres effets du tour restent appliqués. Une restauration de candidat abandonne si le projet, le document, le candidat ou la génération de visionneuse ont changé. Une conservation dont l'identifiant de révision manque, ou dont l'accusé est perdu, ne choisit pas une tête.
+5. Une vraie base historique continue d'exiger la confirmation serveur. `BASE_STALE`, le conflit de tête et l'idempotence de conservation ne sont pas assouplis.
+6. Le titre métier n'est pas réécrit, et Equipéo n'est pas renommé. Une proposition déjà consommée n'a pas de nouvel état durable : le libellé générique « propositions expirées » des choix non actionnables reste hors de ce lot.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 026bc170..fc2106ae 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -5562,3 +5562,17 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
 - **WEB**: OFF
 - **NO RELEASE** · RECETTE protégée · livraison 2 non engagée

+## DELIV-2026-11-28-ML5-DOCUMENTARY-LIFECYCLE-DEV
+
+- **Date** : 2026-11-28T09:20+01:00, finalisé le même jour
+- **Cycle** : 08 Delivery / Critical · lot 1 uniquement
+- **Base** : `0ae9e1f7aaee3658eb3e9a135523e83a72631b31` · tree `842537274c3ad0b2f672c9ebe2e9e0f54c55d968`
+- **SHA final** : publié sur `sfia/next-ml5-integrated-delivery-20261123` et reporté dans le Review Pack. Il n'est pas inscrit dans ce commit, pour éviter une seconde publication dont le seul objet serait son propre identifiant.
+- **Nature** : correctif de fiabilité du cycle documentaire, compatible avec les invariants D4. Le complément distingue le candidat d'une révision de même texte et borne les retours tardifs au document encore sélectionné.
+- **Schéma** : aucun changement · 027 inchangé
+- **Build DEV de production** : voir le Review Pack du candidat publié
+- **Preuve navigateur** : Playwright isolé `:3101` / `sfia_next_e2e`, Nora substituée. Le serveur webpack canonique n'a pas démarré (parse préexistant de `@cursor/sdk` `agent.d.ts.map`) ; le parcours a été exécuté sur le même port et la même base avec Turbopack.
+- **Limites** : pas de fournisseur réel ; pas de promotion RECETTE ; DOC-D et DOC-E reportés au lot 7 ; lots 2 à 7 non engagés
+- **Versioning** : NO RELEASE · STABLE NOT AVAILABLE · aucune version sémantique officielle
+- **Statut** : DEV PUBLIÉ POUR REVUE — NOT ACCEPTED — NOT ADOPTED
+
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index a33f573e..05228281 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -34,7 +34,11 @@ import {
   DocumentCompareSurface,
   DocumentHistorySurface,
   DocumentReadSurface,
+  documentTurnMayApply,
+  focusAfterAvailableConservation,
   formatPilotFacingProvenance,
+  pendingCandidateRestoreIsCurrent,
+  resolveTravailDocumentPresentation,
   type DocumentComparePayload,
   type RevisionRow,
   revisionCurrencyLabel,
@@ -413,7 +417,15 @@ export default function ProjectPage() {
   const pendingDocumentOpenIdRef = useRef<string | null>(null);
   /** C1 — ignore stale async viewer responses after A→B / close / project change. */
   const viewerRequestSeqRef = useRef(0);
+  /** Increments at each send. A late response must not restore an older document focus. */
+  const documentTurnGenRef = useRef(0);
+  const lastAppliedTurnGenRef = useRef(0);
+  const viewerRef = useRef<TravailViewerResource | null>(null);
   const viewerOpenRef = useRef(false);
+  function commitViewer(next: TravailViewerResource | null) {
+    viewerRef.current = next;
+    setViewer(next);
+  }
   /** Invalidates in-flight Journal→Travail deep-links when the user navigates away. */
   const surfaceNavGenRef = useRef(0);
   const docViewRef = useRef<DocView>("library");
@@ -633,7 +645,7 @@ export default function ProjectPage() {
     // Invalidate in-flight viewer fetches when project changes.
     viewerRequestSeqRef.current += 1;
     viewerOpenRef.current = false;
-    setViewer(null);
+    commitViewer(null);
     setViewerEnlarged(false);
   }, [params.projectId]);

@@ -656,7 +668,7 @@ export default function ProjectPage() {
   function closeViewer() {
     viewerRequestSeqRef.current += 1;
     viewerOpenRef.current = false;
-    setViewer(null);
+    commitViewer(null);
     setViewerEnlarged(false);
     setContractViewer(null);
     setContractInstructionExpanded(false);
@@ -670,7 +682,7 @@ export default function ProjectPage() {
     if (seq !== viewerRequestSeqRef.current) return;
     if (!viewerOpenRef.current) return;
     if (projectIdRef.current !== projectIdAtStart) return;
-    setViewer(next);
+    commitViewer(next);
     setViewerEnlarged(false);
   }

@@ -706,6 +718,7 @@ export default function ProjectPage() {
     seq: number;
     projectIdAtStart: string;
     revisionNumber?: number | null;
+    knownHeadRevisionId?: string | null;
   }) {
     // Consultation is recorded only after a successful D4 read (available content).
     const prepId = preparationIdRef.current;
@@ -868,6 +881,9 @@ export default function ProjectPage() {
           revisionId: resolvedRevisionId,
           revisionNumber: resolvedRevisionNumber,
           versionSource: input.versionSource,
+          knownHeadRevisionId:
+            input.knownHeadRevisionId ??
+            (input.versionSource === "current" ? resolvedRevisionId : null),
           markdown,
           available: Boolean(markdown),
           unavailableReason: markdown
@@ -915,7 +931,7 @@ export default function ProjectPage() {
     const seq = ++viewerRequestSeqRef.current;
     viewerOpenRef.current = true;
     // Placeholder while rights + current revision are revalidated.
-    setViewer({
+    commitViewer({
       kind: "document",
       documentId: doc.document.id,
       title: doc.document.title,
@@ -1012,7 +1028,7 @@ export default function ProjectPage() {
         setStatus("Contrat introuvable pour la visionneuse Travail");
         return;
       }
-      setViewer(null);
+      commitViewer(null);
       setViewerEnlarged(false);
       setContractInstructionExpanded(false);
       setReadyContracts(
@@ -1627,7 +1643,7 @@ export default function ProjectPage() {
     const seq = ++viewerRequestSeqRef.current;
     viewerOpenRef.current = true;
     selectSurface("travail");
-    setViewer({
+    commitViewer({
       kind: "document",
       documentId: input.doc.document.id,
       title: input.doc.document.title,
@@ -1649,6 +1665,7 @@ export default function ProjectPage() {
       titleHint: input.doc.document.title,
       revisionId: historical ? input.sourceRevisionId : null,
       versionSource: historical ? "exact" : "current",
+      knownHeadRevisionId: head.id,
       seq,
       projectIdAtStart,
     });
@@ -2184,6 +2201,8 @@ export default function ProjectPage() {
             setDocumentFocus(restored);
             documentFocusRef.current = restored;
             if (restored.pendingCandidateId) {
+              const restoreSeq = ++viewerRequestSeqRef.current;
+              const projectIdAtRestore = params.projectId;
               void (async () => {
                 try {
                   const q = restored.pendingCandidateContentSha256
@@ -2232,7 +2251,20 @@ export default function ProjectPage() {
                     return;
                   }
                   const headNum = restored.observedHeadRevisionNumber ?? null;
-                  const md = cj.candidate.contentMarkdown;
+                  const md = cj.candidate.contentMarkdown ?? null;
+                  const stillCurrent = pendingCandidateRestoreIsCurrent({
+                    projectIdAtStart: projectIdAtRestore,
+                    projectIdNow: projectIdRef.current,
+                    documentId: restored.documentId,
+                    candidateId: restored.pendingCandidateId!,
+                    focusDocumentId: documentFocusRef.current?.documentId ?? null,
+                    focusCandidateId: documentFocusRef.current?.pendingCandidateId,
+                    requestSeqAtStart: restoreSeq,
+                    requestSeqNow: viewerRequestSeqRef.current,
+                    candidateDocumentId: cj.candidate.documentId ?? null,
+                    candidateMarkdown: md,
+                  });
+                  if (!stillCurrent) return;
                   setPendingProposal({
                     candidateId: restored.pendingCandidateId!,
                     contentSha256: cj.candidate.contentSha256 ?? restored.pendingCandidateContentSha256 ?? "",
@@ -2243,15 +2275,22 @@ export default function ProjectPage() {
                     revisionNumberHint: headNum != null ? headNum + 1 : null,
                   });
                   setStatusHint("Examiner une proposition de Nora");
-                  setViewer({
+                  viewerOpenRef.current = true;
+                  commitViewer({
                     kind: "document",
                     documentId: restored.documentId,
                     title: cj.candidate.title ?? "Document",
-                    revisionId: restored.sourceRevisionId,
-                    revisionNumber: headNum != null ? headNum + 1 : null,
-                    versionSource: "exact",
-                    markdown: md,
-                    available: true,
+                    revisionId: null,
+                    revisionNumber: null,
+                    proposalCandidateId: restored.pendingCandidateId,
+                    knownHeadRevisionId: restored.observedHeadRevisionId,
+                    baseRevisionNumber: restored.sourceRevisionNumber ?? null,
+                    markdown: typeof md === "string" && md.length > 0 ? md : null,
+                    available: typeof md === "string" && md.length > 0,
+                    unavailableReason:
+                      typeof md === "string" && md.length > 0
+                        ? undefined
+                        : "Proposition indisponible — l'ancienne version n'est pas affichée à sa place.",
                   });
                   // Re-bind focus with server hash; never set conserveProposal.
                   applyDocumentFocus({
@@ -2713,6 +2752,9 @@ export default function ProjectPage() {
     const raw = (overrideText ?? draft).trim();
     const text = mergeDraftWithDossierAttachment(raw, dossierAttachment).trim();
     if (!text || !preparationId) return;
+    const turnGen = ++documentTurnGenRef.current;
+    const focusDocumentAtSend = documentFocusRef.current?.documentId ?? null;
+    const viewerOpenAtSend = viewerOpenRef.current;
     const fromChoice = opts?.fromChoice === true;
     const sentVersion = fromChoice ? null : draftVersionRef.current;
     const pendingMeta: Pick<
@@ -2853,7 +2895,22 @@ export default function ProjectPage() {
       } catch {
         j = { errorCategory: "RESPONSE_PARSE_FAILED" };
       }
-      if (res.ok) {
+      if (res.ok && turnGen < lastAppliedTurnGenRef.current) {
+        // An older response arrived after a newer turn was painted.
+        // Leave the thread, owner results and document state as they are.
+      } else if (res.ok) {
+        lastAppliedTurnGenRef.current = turnGen;
+        const documentEffect = (effectDocumentId: string | null) =>
+          documentTurnMayApply({
+            turnGen,
+            latestTurnGen: documentTurnGenRef.current,
+            focusDocumentAtSend,
+            focusDocumentNow: documentFocusRef.current?.documentId ?? null,
+            viewerClosedByPilot: viewerOpenAtSend && !viewerOpenRef.current,
+            viewerDocumentId:
+              viewerRef.current?.kind === "document" ? viewerRef.current.documentId : null,
+            effectDocumentId,
+          });
         const prepared = j.preparedContract as
           | {
               contractId: string;
@@ -2908,7 +2965,13 @@ export default function ProjectPage() {
           }
         }
         const save = j.documentSave as
-          | { status?: string; reason?: string; documentId?: string; revisionNumber?: number }
+          | {
+              status?: string;
+              reason?: string;
+              documentId?: string;
+              revisionId?: string;
+              revisionNumber?: number;
+            }
           | null
           | undefined;
         const pendingCand = j.pendingDocumentCandidate as
@@ -2933,7 +2996,11 @@ export default function ProjectPage() {
             }
           | null
           | undefined;
-        if (histAuth?.authorizationId && documentFocusRef.current) {
+        if (
+          histAuth?.authorizationId &&
+          documentFocusRef.current &&
+          documentEffect(histAuth.documentId ?? documentFocusRef.current.documentId).focus
+        ) {
           if (histAuth.choice === "USE_SOURCE") {
             applyDocumentFocus({
               ...documentFocusRef.current,
@@ -2970,105 +3037,143 @@ export default function ProjectPage() {
           typeof pendingCand.contentMarkdown === "string" &&
           pendingCand.contentMarkdown.length > 0
         ) {
-          const headNum =
-            documentFocusRef.current?.observedHeadRevisionNumber ??
-            documentsRef.current.find((d) => d.document.id === (pendingCand.documentId || save.documentId))
-              ?.latestRevision?.revisionNumber ??
-            null;
-          const docId =
-            pendingCand.documentId ||
-            save.documentId ||
-            documentFocusRef.current?.documentId ||
-            "";
+          const docId = pendingCand.documentId || save.documentId || "";
+          const apply = documentEffect(docId);
+          if (!apply.focus && !apply.viewer) {
+            // The pilot moved to another document or a newer turn owns the selection.
+          } else {
           const match = documentsRef.current.find((d) => d.document.id === docId);
+          const headNum = match?.latestRevision?.revisionNumber ?? null;
           const title = pendingCand.title || match?.document.title || "Document";
           const revisionHint = headNum != null ? headNum + 1 : null;
-          // Single coherent object — Candidate badge only with this exact markdown.
-          setPendingProposal({
-            candidateId: pendingCand.candidateId,
-            contentSha256: pendingCand.contentSha256 || "",
-            documentId: docId,
-            title,
-            contentMarkdown: pendingCand.contentMarkdown,
-            sourceRevisionId: documentFocusRef.current?.sourceRevisionId ?? null,
-            revisionNumberHint: revisionHint,
-          });
-          if (documentFocusRef.current) {
-            applyDocumentFocus({
-              ...documentFocusRef.current,
-              conserveProposal: false,
-              pendingCandidateId: pendingCand.candidateId,
-              pendingCandidateContentSha256: pendingCand.contentSha256,
+          const focusForDoc =
+            documentFocusRef.current?.documentId === docId ? documentFocusRef.current : null;
+          const baseRevisionNumber = focusForDoc?.sourceRevisionNumber ?? headNum;
+          const knownHeadId =
+            pendingCand.observedHeadRevisionId ?? match?.latestRevision?.id ?? null;
+          if (apply.focus) {
+            setPendingProposal({
+              candidateId: pendingCand.candidateId,
+              contentSha256: pendingCand.contentSha256 || "",
+              documentId: docId,
+              title,
+              contentMarkdown: pendingCand.contentMarkdown,
+              sourceRevisionId: pendingCand.sourceRevisionId ?? focusForDoc?.sourceRevisionId ?? null,
+              revisionNumberHint: revisionHint,
             });
-          } else if (docId) {
-            // No prior focus — still bind identities so conserve / reopen stay coherent.
-            const head = match?.latestRevision;
-            applyDocumentFocus({
+            if (focusForDoc) {
+              applyDocumentFocus({
+                ...focusForDoc,
+                conserveProposal: false,
+                pendingCandidateId: pendingCand.candidateId,
+                pendingCandidateContentSha256: pendingCand.contentSha256,
+              });
+            } else if (docId) {
+              const head = match?.latestRevision;
+              applyDocumentFocus({
+                documentId: docId,
+                sourceRevisionId: pendingCand.sourceRevisionId ?? head?.id ?? docId,
+                sourceRevisionNumber: head?.revisionNumber,
+                observedHeadRevisionId: pendingCand.observedHeadRevisionId ?? head?.id ?? docId,
+                observedHeadRevisionNumber: head?.revisionNumber,
+                conserveProposal: false,
+                pendingCandidateId: pendingCand.candidateId,
+                pendingCandidateContentSha256: pendingCand.contentSha256,
+              });
+            }
+            setStatusHint("Examiner une proposition de Nora");
+          }
+          if (apply.viewer && docId) {
+            viewerRequestSeqRef.current += 1;
+            viewerOpenRef.current = true;
+            commitViewer({
+              kind: "document",
               documentId: docId,
-              sourceRevisionId: head?.id ?? docId,
-              sourceRevisionNumber: head?.revisionNumber,
-              observedHeadRevisionId: head?.id ?? docId,
-              observedHeadRevisionNumber: head?.revisionNumber,
-              conserveProposal: false,
-              pendingCandidateId: pendingCand.candidateId,
-              pendingCandidateContentSha256: pendingCand.contentSha256,
+              title,
+              revisionId: null,
+              revisionNumber: null,
+              proposalCandidateId: pendingCand.candidateId,
+              knownHeadRevisionId: knownHeadId,
+              baseRevisionNumber: baseRevisionNumber ?? null,
+              markdown: pendingCand.contentMarkdown,
+              available: true,
             });
           }
-          // Always project the candidate body — never leave V1 under a Candidate badge.
-          setViewer({
-            kind: "document",
-            documentId: docId || match?.document.id || "document",
-            title,
-            revisionId: documentFocusRef.current?.sourceRevisionId ?? match?.latestRevision?.id ?? null,
-            revisionNumber: revisionHint,
-            versionSource: "exact",
-            markdown: pendingCand.contentMarkdown,
-            available: true,
-          });
-          setStatusHint("Examiner une proposition de Nora");
-        } else if (save?.status === "AVAILABLE") {
-          setPendingProposal(null);
-          if (documentFocusRef.current) {
-            applyDocumentFocus({
-              ...documentFocusRef.current,
-              conserveProposal: false,
-              pendingCandidateId: undefined,
-              pendingCandidateContentSha256: undefined,
-              confirmedHistoricalSource: false,
-              historicalConfirmation: undefined,
-              historicalAuthorizationId: undefined,
+          }
+        } else if (
+          save?.reason === "PROPOSAL_PENDING_CONSERVATION" &&
+          pendingCand?.candidateId
+        ) {
+          const docId = pendingCand.documentId || save.documentId || "";
+          const apply = documentEffect(docId);
+          if (apply.viewer && docId) {
+            viewerRequestSeqRef.current += 1;
+            viewerOpenRef.current = true;
+            commitViewer({
+              kind: "document",
+              documentId: docId,
+              title: pendingCand.title || "Document",
+              revisionId: null,
+              revisionNumber: null,
+              proposalCandidateId: pendingCand.candidateId,
+              markdown: null,
+              available: false,
+              unavailableReason:
+                "Proposition indisponible — l'ancienne version n'est pas affichée à sa place.",
             });
+            setStatusHint("Proposition indisponible");
           }
-          if (typeof save.revisionNumber === "number") {
-            setStatusHint(`Version v${save.revisionNumber} conservée.`);
+        } else if (save?.status === "AVAILABLE" && save.documentId) {
+          const apply = documentEffect(save.documentId);
+          if (!save.revisionId) {
+            if (apply.focus) {
+              setStatusHint("Conservation non confirmée — aucune révision identifiée.");
+            }
+          } else if (apply.focus) {
+            const conserved = focusAfterAvailableConservation(documentFocusRef.current, {
+              status: save.status,
+              documentId: save.documentId,
+              revisionId: save.revisionId,
+              revisionNumber: save.revisionNumber,
+            });
+            if (conserved.rebased && conserved.focus) {
+              applyDocumentFocus(conserved.focus);
+            }
+            setPendingProposal((prev) =>
+              !prev || prev.documentId === save.documentId ? null : prev,
+            );
+            if (typeof save.revisionNumber === "number") {
+              setStatusHint(`Version v${save.revisionNumber} conservée.`);
+            }
           }
-          // Refresh viewer to the newly conserved revision (no longer a pending proposal).
-          if (
-            viewer?.kind === "document" &&
-            typeof save.documentId === "string" &&
-            typeof (save as { revisionId?: string }).revisionId === "string"
-          ) {
-            const newRevId = (save as { revisionId: string }).revisionId;
+          if (apply.viewer && save.revisionId) {
+            const newRevId = save.revisionId;
             const newRevNum =
               typeof save.revisionNumber === "number" ? save.revisionNumber : null;
             const seq = ++viewerRequestSeqRef.current;
             const projectIdAtStart = params.projectId;
-            setViewer((prev) => {
-              if (!prev || prev.kind !== "document") return prev;
-              return {
-                ...prev,
+            const currentViewer = viewerRef.current;
+            const titleHint =
+              currentViewer?.kind === "document" ? currentViewer.title : "Document";
+            if (currentViewer?.kind === "document" && currentViewer.documentId === save.documentId) {
+              commitViewer({
+                ...currentViewer,
                 revisionId: newRevId,
                 revisionNumber: newRevNum,
                 versionSource: "current",
+                proposalCandidateId: null,
+                knownHeadRevisionId: newRevId,
+                baseRevisionNumber: null,
                 available: false,
                 unavailableReason: "Chargement de la version enregistrée…",
-              };
-            });
+              });
+            }
             void fetchDocumentViewerViaD4({
               documentId: save.documentId,
-              titleHint: viewer.title,
+              titleHint,
               revisionId: newRevId,
-              versionSource: "exact",
+              versionSource: "current",
+              knownHeadRevisionId: newRevId,
               seq,
               projectIdAtStart,
             });
@@ -3163,7 +3268,8 @@ export default function ProjectPage() {
         }
       }
     } catch {
-      // Network loss after click: fail closed — freeze until reconcile proves outcome.
+      // Network loss after click: fail closed. Do not select a head from another
+      // operation and do not replay a conservation whose result is unknown.
       setChoiceFrozen(true);
       rememberPending(buildPending());
       setNoraActivity("error");
@@ -3227,7 +3333,7 @@ export default function ProjectPage() {
   const readCurrency =
     readingRevisionNumber != null
       ? revisionCurrencyLabel(readingRevisionNumber, headRevisionNumber)
-      : "Courante";
+      : "Non vérifiée";

   const documentHero =
     surface !== "document"
@@ -3252,14 +3358,30 @@ export default function ProjectPage() {
                 sub: "Deux documents côte à côte, avec un résumé des différences en lecture seule.",
               };

-  const travailDocumentFocusBanner =
-    pendingProposal &&
-    viewer?.kind === "document" &&
-    viewer.markdown === pendingProposal.contentMarkdown
-      ? ("proposal" as const)
-      : viewer?.kind === "document" && viewer.versionSource === "exact"
-        ? ("historical" as const)
-        : null;
+  const viewerHead =
+    viewer?.kind === "document"
+      ? documents.find((d) => d.document.id === viewer.documentId)?.latestRevision ?? null
+      : null;
+  const travailPresentation =
+    viewer?.kind === "document"
+      ? resolveTravailDocumentPresentation({
+          proposalActive: Boolean(
+            pendingProposal && pendingProposal.documentId === viewer.documentId,
+          ),
+          proposalCandidateId: pendingProposal?.candidateId ?? null,
+          viewerProposalCandidateId: viewer.proposalCandidateId ?? null,
+          proposalDocumentId: pendingProposal?.documentId ?? null,
+          viewerDocumentId: viewer.documentId,
+          proposalMarkdown: pendingProposal?.contentMarkdown ?? null,
+          viewerMarkdown: viewer.markdown,
+          revisionId: viewer.revisionId ?? null,
+          revisionNumber: viewer.revisionNumber ?? null,
+          headRevisionId: viewerHead?.id ?? null,
+          headRevisionNumber: viewerHead?.revisionNumber ?? null,
+          knownHeadRevisionId: viewer.knownHeadRevisionId ?? null,
+        })
+      : null;
+  const travailDocumentFocusBanner = travailPresentation?.banner ?? null;

   const qualificationLockActive =
     initialQualification?.status === "PENDING" ||
@@ -3404,6 +3526,28 @@ export default function ProjectPage() {
                 resource={viewer}
                 enlarged={viewerEnlarged}
                 documentFocusBanner={travailDocumentFocusBanner}
+                documentCurrency={travailPresentation?.currency ?? null}
+                onRestoreProposal={
+                  pendingProposal
+                    ? () => {
+                        viewerRequestSeqRef.current += 1;
+                        viewerOpenRef.current = true;
+                        commitViewer({
+                          kind: "document",
+                          documentId: pendingProposal.documentId,
+                          title: pendingProposal.title,
+                          revisionId: null,
+                          revisionNumber: null,
+                          proposalCandidateId: pendingProposal.candidateId,
+                          knownHeadRevisionId:
+                            documentFocus?.observedHeadRevisionId ?? null,
+                          baseRevisionNumber: documentFocus?.sourceRevisionNumber ?? null,
+                          markdown: pendingProposal.contentMarkdown,
+                          available: true,
+                        });
+                      }
+                    : undefined
+                }
                 onEnlarge={() => setViewerEnlarged(true)}
                 onReduce={() => setViewerEnlarged(false)}
                 onClose={closeViewer}
@@ -3556,7 +3700,7 @@ export default function ProjectPage() {
                               const projectIdAtStart = params.projectId;
                               const seq = ++viewerRequestSeqRef.current;
                               viewerOpenRef.current = true;
-                              setViewer({
+                              commitViewer({
                                 kind: "document",
                                 documentId,
                                 title: item.title,
@@ -4070,7 +4214,7 @@ export default function ProjectPage() {
               documents.find((d) => d.document.id === documentId)?.document.title ?? "Document";
             const seq = ++viewerRequestSeqRef.current;
             viewerOpenRef.current = true;
-            setViewer({
+            commitViewer({
               kind: "document",
               documentId,
               title: titleHint,
diff --git a/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx b/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
index 950313ba..0c91a4dd 100644
--- a/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
@@ -41,15 +41,231 @@ export type DocumentComparePayload = {
   note?: string;
 };

-/** Projection UI only — Courante = max AVAILABLE revision number. */
+/** Projection UI only. Missing head is unverified, never a false Historique. */
+export type RevisionCurrencyLabel = "Courante" | "Historique" | "Non vérifiée";
+
 export function revisionCurrencyLabel(
   revisionNumber: number,
   headRevisionNumber: number | null | undefined,
-): "Courante" | "Historique" {
-  if (headRevisionNumber != null && revisionNumber === headRevisionNumber) return "Courante";
+): RevisionCurrencyLabel {
+  if (headRevisionNumber == null) return "Non vérifiée";
+  if (revisionNumber === headRevisionNumber) return "Courante";
   return "Historique";
 }

+export function revisionCurrencyBadgeClass(currency: RevisionCurrencyLabel): string {
+  if (currency === "Courante") return "doc-badge doc-badge-current";
+  if (currency === "Historique") return "doc-badge doc-badge-historical";
+  return "doc-badge";
+}
+
+export type DocumentarySaveIdentity = {
+  status?: string;
+  documentId?: string;
+  revisionId?: string;
+  revisionNumber?: number;
+};
+
+/** Client-safe working focus. Kept out of document-act so the page bundle stays free of the DB client. */
+export type WorkingDocumentFocus = {
+  documentId: string;
+  sourceRevisionId: string;
+  sourceRevisionNumber?: number;
+  sourceContentMarkdown?: string;
+  observedHeadRevisionId: string;
+  observedHeadRevisionNumber?: number;
+  confirmedHistoricalSource?: boolean;
+  historicalConfirmation?: {
+    documentId: string;
+    sourceRevisionId: string;
+    observedHeadRevisionId: string;
+    choice: "USE_SOURCE" | "USE_HEAD" | "REFUSED";
+  };
+  historicalAuthorizationId?: string;
+  conserveProposal?: boolean;
+  pendingCandidateId?: string;
+  pendingCandidateContentSha256?: string;
+};
+
+/**
+ * After D4 reports AVAILABLE, the working focus follows the revision just written.
+ * Does not move another document, and does not invent a head when the revision id is missing.
+ */
+export function focusAfterAvailableConservation<T extends WorkingDocumentFocus>(
+  focus: T | null,
+  save: DocumentarySaveIdentity,
+): { focus: T | null; rebased: boolean } {
+  if (!focus) return { focus, rebased: false };
+  if (save.status !== "AVAILABLE") return { focus, rebased: false };
+  if (!save.documentId || !save.revisionId) return { focus, rebased: false };
+  if (focus.documentId !== save.documentId) return { focus, rebased: false };
+  const revisionNumber =
+    typeof save.revisionNumber === "number" ? save.revisionNumber : focus.sourceRevisionNumber;
+  return {
+    rebased: true,
+    focus: {
+      ...focus,
+      sourceRevisionId: save.revisionId,
+      sourceRevisionNumber: revisionNumber,
+      sourceContentMarkdown: undefined,
+      observedHeadRevisionId: save.revisionId,
+      observedHeadRevisionNumber: revisionNumber,
+      confirmedHistoricalSource: false,
+      historicalConfirmation: undefined,
+      historicalAuthorizationId: undefined,
+      conserveProposal: false,
+      pendingCandidateId: undefined,
+      pendingCandidateContentSha256: undefined,
+    },
+  };
+}
+
+/** Exact resolution is not currency. A missing head stays unverified. */
+export function revisionCurrencyFromIdentity(input: {
+  revisionId?: string | null;
+  revisionNumber?: number | null;
+  headRevisionId?: string | null;
+  headRevisionNumber?: number | null;
+  knownHeadRevisionId?: string | null;
+}): RevisionCurrencyLabel {
+  const revisionId = input.revisionId ?? null;
+  const known = input.knownHeadRevisionId ?? null;
+  const listed = input.headRevisionId ?? null;
+  if (revisionId && known && revisionId === known) {
+    if (!listed || listed === known) return "Courante";
+    const listedIsOlder =
+      input.headRevisionNumber != null &&
+      input.revisionNumber != null &&
+      input.headRevisionNumber < input.revisionNumber;
+    if (listedIsOlder) return "Courante";
+  }
+  if (revisionId && listed) {
+    return revisionId === listed ? "Courante" : "Historique";
+  }
+  if (revisionId && known) {
+    return revisionId === known ? "Courante" : "Historique";
+  }
+  if (
+    input.revisionNumber != null &&
+    input.headRevisionNumber != null &&
+    input.revisionNumber === input.headRevisionNumber
+  ) {
+    return "Courante";
+  }
+  if (
+    input.revisionNumber != null &&
+    input.headRevisionNumber != null &&
+    input.revisionNumber !== input.headRevisionNumber
+  ) {
+    return "Historique";
+  }
+  return "Non vérifiée";
+}
+
+/**
+ * A late document effect may update only the document the turn still owns.
+ * A closed viewer stays closed. Another document's focus and viewer stay put.
+ * Thread and owner results are decided separately by the caller.
+ */
+export function documentTurnMayApply(input: {
+  turnGen: number;
+  latestTurnGen: number;
+  focusDocumentAtSend: string | null;
+  focusDocumentNow: string | null;
+  viewerClosedByPilot: boolean;
+  viewerDocumentId: string | null;
+  effectDocumentId: string | null;
+}): { focus: boolean; viewer: boolean } {
+  const selectionUnchanged =
+    input.focusDocumentAtSend == null ||
+    input.focusDocumentNow == null ||
+    input.focusDocumentAtSend === input.focusDocumentNow;
+  const turnStillOwnsSelection = input.turnGen === input.latestTurnGen && selectionUnchanged;
+  const effectDoc = input.effectDocumentId;
+  const focus =
+    turnStillOwnsSelection &&
+    typeof effectDoc === "string" &&
+    effectDoc.length > 0 &&
+    (input.focusDocumentNow == null || input.focusDocumentNow === effectDoc);
+  const viewer =
+    focus &&
+    !input.viewerClosedByPilot &&
+    (input.viewerDocumentId == null || input.viewerDocumentId === effectDoc);
+  return { focus, viewer };
+}
+
+/**
+ * A restored candidate is shown only if the project, document, candidate and
+ * viewer generation are still the ones captured before the request returned.
+ */
+export function pendingCandidateRestoreIsCurrent(input: {
+  projectIdAtStart: string;
+  projectIdNow: string | null;
+  documentId: string;
+  candidateId: string;
+  focusDocumentId: string | null;
+  focusCandidateId: string | null | undefined;
+  requestSeqAtStart: number;
+  requestSeqNow: number;
+  candidateDocumentId: string | null;
+  candidateMarkdown: string | null;
+}): boolean {
+  if (!input.projectIdNow || input.projectIdNow !== input.projectIdAtStart) return false;
+  if (input.requestSeqNow !== input.requestSeqAtStart) return false;
+  if (input.focusDocumentId !== input.documentId) return false;
+  if (input.focusCandidateId !== input.candidateId) return false;
+  if (!input.candidateDocumentId || input.candidateDocumentId !== input.documentId) return false;
+  return typeof input.candidateMarkdown === "string" && input.candidateMarkdown.length > 0;
+}
+
+export function resolveTravailDocumentPresentation(input: {
+  proposalActive: boolean;
+  proposalCandidateId?: string | null;
+  viewerProposalCandidateId?: string | null;
+  proposalDocumentId?: string | null;
+  viewerDocumentId?: string | null;
+  proposalMarkdown?: string | null;
+  viewerMarkdown?: string | null;
+  revisionId?: string | null;
+  revisionNumber?: number | null;
+  headRevisionId?: string | null;
+  headRevisionNumber?: number | null;
+  knownHeadRevisionId?: string | null;
+}): {
+  banner: "proposal" | "historical" | "other-version" | null;
+  currency: RevisionCurrencyLabel | "Proposition";
+} {
+  const sameDocument =
+    !input.proposalDocumentId ||
+    !input.viewerDocumentId ||
+    input.proposalDocumentId === input.viewerDocumentId;
+  const showingProposal =
+    input.proposalActive &&
+    sameDocument &&
+    !input.revisionId &&
+    typeof input.proposalCandidateId === "string" &&
+    input.proposalCandidateId.length > 0 &&
+    input.viewerProposalCandidateId === input.proposalCandidateId &&
+    typeof input.proposalMarkdown === "string" &&
+    input.proposalMarkdown.length > 0 &&
+    input.viewerMarkdown === input.proposalMarkdown;
+  if (showingProposal) {
+    return { banner: "proposal", currency: "Proposition" };
+  }
+  const currency = revisionCurrencyFromIdentity(input);
+  if (
+    input.proposalActive &&
+    typeof input.proposalMarkdown === "string" &&
+    input.proposalMarkdown.length > 0
+  ) {
+    return { banner: "other-version", currency };
+  }
+  return {
+    banner: currency === "Historique" ? "historical" : null,
+    currency,
+  };
+}
+
 /**
  * R4 — pilot-facing provenance only. Never invents Git commits or sources from titles.
  * Never surfaces correlationKey / requestId / raw provenanceJson / debug ids.
@@ -565,7 +781,7 @@ export function DocumentReadSurface(props: {
   markdown: string | null;
   missing?: string | null;
   revisionLabel: string;
-  currency: "Courante" | "Historique";
+  currency: "Courante" | "Historique" | "Non vérifiée";
   loading?: boolean;
   onRequestRevision: () => void;
   onHistory: () => void;
@@ -700,13 +916,7 @@ export function DocumentHistorySurface(props: {
                   >
                     <div className="doc-version-row-top">
                       <span className="doc-version-title">Version {r.revisionNumber}</span>
-                      <span
-                        className={
-                          currency === "Courante"
-                            ? "doc-badge doc-badge-current"
-                            : "doc-badge doc-badge-historical"
-                        }
-                      >
+                      <span className={revisionCurrencyBadgeClass(currency)}>
                         {currency.toUpperCase()}
                       </span>
                     </div>
@@ -733,12 +943,9 @@ export function DocumentHistorySurface(props: {
           <>
             <h3 className="doc-aside-title">Version {selected.revisionNumber}</h3>
             <span
-              className={
-                revisionCurrencyLabel(selected.revisionNumber, props.headRevisionNumber) ===
-                "Courante"
-                  ? "doc-badge doc-badge-current"
-                  : "doc-badge doc-badge-historical"
-              }
+              className={revisionCurrencyBadgeClass(
+                revisionCurrencyLabel(selected.revisionNumber, props.headRevisionNumber),
+              )}
             >
               {revisionCurrencyLabel(
                 selected.revisionNumber,
@@ -751,7 +958,10 @@ export function DocumentHistorySurface(props: {
                 revisionCurrencyLabel(selected.revisionNumber, props.headRevisionNumber) ===
                 "Courante"
                   ? "Version courante"
-                  : "Version précédente conservée"
+                  : revisionCurrencyLabel(selected.revisionNumber, props.headRevisionNumber) ===
+                      "Historique"
+                    ? "Version précédente conservée"
+                    : "Actualité non vérifiée"
               }
             />
             <div className="doc-aside-divider" />
diff --git a/projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx b/projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx
index db0d0b84..2ae1666b 100644
--- a/projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/TravailViewer.tsx
@@ -12,6 +12,12 @@ export type TravailViewerResource =
       revisionNumber?: number | null;
       /** Explicit when no revisionId was requested — never silent latest substitution. */
       versionSource?: "exact" | "current";
+      /** Set only while the body is the unsealed candidate. Not a durable revision id. */
+      proposalCandidateId?: string | null;
+      /** Head known when this view was produced (save or current resolution). */
+      knownHeadRevisionId?: string | null;
+      /** Documentary base of a proposal — display only. */
+      baseRevisionNumber?: number | null;
       markdown: string | null;
       available: boolean;
       unavailableReason?: string;
@@ -48,8 +54,11 @@ export type TravailViewerResource =
 export function TravailViewer(props: {
   resource: TravailViewerResource;
   enlarged: boolean;
-  /** When Nora works from a non-current revision — informational only. */
-  documentFocusBanner?: "historical" | "proposal" | null;
+  /** Informational only — does not authorize a write. */
+  documentFocusBanner?: "historical" | "proposal" | "other-version" | null;
+  /** D4 currency. Exact resolution alone never implies Historique. */
+  documentCurrency?: "Courante" | "Historique" | "Non vérifiée" | "Proposition" | null;
+  onRestoreProposal?: () => void;
   onEnlarge: () => void;
   onReduce: () => void;
   onClose: () => void;
@@ -77,34 +86,44 @@ export function TravailViewer(props: {
           : "VISIONNEUSE  /  SOURCE GIT";
   const currencyBadge =
     resource.kind === "document"
-      ? props.documentFocusBanner === "proposal"
+      ? props.documentCurrency === "Proposition" || props.documentFocusBanner === "proposal"
         ? "PROPOSITION"
-        : resource.versionSource === "exact"
+        : props.documentCurrency === "Historique"
           ? "HISTORIQUE"
-          : "COURANTE"
+          : props.documentCurrency === "Non vérifiée"
+            ? "NON VÉRIFIÉE"
+            : props.documentCurrency === "Courante"
+              ? "COURANTE"
+              : resource.versionSource === "current"
+                ? "COURANTE"
+                : "NON VÉRIFIÉE"
       : resource.kind === "web"
         ? resource.consulted
           ? "CONSULTÉE"
           : "DÉCOUVERTE"
         : null;
-  // Journal V4 accepted label ("Version N · révision citée") preserved;
-  // Documents adds proposal candidate wording + currency badge separately.
   const versionLine =
-    resource.kind === "document" && resource.revisionNumber != null
-      ? props.documentFocusBanner === "proposal"
-        ? `Version ${resource.revisionNumber} · Candidate`
-        : [
+    resource.kind === "document" &&
+    (props.documentFocusBanner === "proposal" || props.documentCurrency === "Proposition")
+      ? [
+          "Proposition non enregistrée",
+          resource.baseRevisionNumber != null ? `base v${resource.baseRevisionNumber}` : null,
+        ]
+          .filter(Boolean)
+          .join(" · ")
+      : resource.kind === "document" && resource.revisionNumber != null
+        ? [
             `Version ${resource.revisionNumber}`,
-            resource.revisionId ? resource.revisionId.slice(0, 8) : null,
-            resource.versionSource === "current"
-              ? "version courante"
-              : resource.versionSource === "exact"
-                ? "révision citée"
-                : null,
+            resource.versionSource === "exact" ? "révision citée" : null,
+            props.documentCurrency === "Historique"
+              ? "version historique"
+              : props.documentCurrency === "Non vérifiée"
+                ? "actualité non vérifiée"
+                : "version courante",
           ]
             .filter(Boolean)
             .join(" · ")
-      : null;
+        : null;

   return (
     <div
@@ -114,6 +133,10 @@ export function TravailViewer(props: {
       data-viewer-pdf={isPdf ? "1" : "0"}
       data-viewer-enlarged={props.enlarged ? "1" : "0"}
       data-focus-banner={props.documentFocusBanner ?? ""}
+      data-proposal-candidate-id={
+        resource.kind === "document" ? resource.proposalCandidateId ?? "" : ""
+      }
+      data-revision-id={resource.kind === "document" ? resource.revisionId ?? "" : ""}
     >
       <header className="fig-travail-viewer-head">
         <div>
@@ -128,7 +151,9 @@ export function TravailViewer(props: {
                   ? "doc-badge doc-badge-current"
                   : currencyBadge === "PROPOSITION"
                     ? "doc-badge doc-badge-proposal"
-                    : "doc-badge doc-badge-historical"
+                    : currencyBadge === "HISTORIQUE"
+                      ? "doc-badge doc-badge-historical"
+                      : "doc-badge"
               }
               data-testid="travail-viewer-currency"
             >
@@ -206,6 +231,20 @@ export function TravailViewer(props: {
           <div className="fig-alert" data-testid="document-focus-banner" role="status">
             PROPOSITION NON ENREGISTRÉE · Pas de publication Git automatique
           </div>
+        ) : props.documentFocusBanner === "other-version" ? (
+          <div className="fig-alert" data-testid="document-focus-banner" role="status">
+            AUTRE VERSION CONSULTÉE · La proposition non enregistrée reste disponible
+            {props.onRestoreProposal ? (
+              <button
+                type="button"
+                className="btn secondary"
+                data-testid="document-restore-proposal"
+                onClick={props.onRestoreProposal}
+              >
+                Revenir à la proposition
+              </button>
+            ) : null}
+          </div>
         ) : null}
         {!resource.available ? (
           <div className="fig-alert" role="alert" data-testid="travail-viewer-unavailable">
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
index b5ebecd9..85a19871 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/fixture-semantic-qualify.ts
@@ -2047,6 +2047,46 @@ register(
   },
 );

+/**
+ * Test lane only — second distinct revise body so V2→V3 can be exercised
+ * through the same orchestration as the first proposal. Not a product route.
+ */
+register(
+  "Je souhaite préciser le suivi entre les centres.",
+  {
+    ...effect(
+      "Réviser document — proposition V3",
+      "Je propose une formulation de suivi. Elle reste une proposition tant que tu n’as pas demandé la conservation.\n\n```sfia-document\n# Parcours de réservation et responsabilités\n\n## Suivi\n\nLe suivi V3 discriminant est assuré par le coordinateur.\n```\n",
+      [
+        {
+          capabilityId: "d4.revise_document",
+          mode: "REQUEST_EFFECT",
+          summary: "Préciser le suivi",
+          parameters: { sectionHint: "Suivi" },
+          constraints: [],
+          dependsOn: [],
+          sourceEvidence: [],
+        },
+      ],
+      {
+        continueChoices: [
+          {
+            id: "conserve",
+            label: "Conserver comme nouvelle version",
+            transmitText:
+              "Conserver comme nouvelle version la proposition documentaire préparée.",
+          },
+        ],
+      },
+    ),
+    documentProposal: {
+      title: "Parcours de réservation et responsabilités",
+      contentMarkdown:
+        "# Parcours de réservation et responsabilités\n\n## Suivi\n\nLe suivi V3 discriminant est assuré par le coordinateur.\n",
+    },
+  },
+);
+
 register(
   "Conserver comme nouvelle version la proposition documentaire préparée.",
   {
diff --git a/projects/sfia-studio-next/web/tests/e2e/document-revision-lifecycle.spec.ts b/projects/sfia-studio-next/web/tests/e2e/document-revision-lifecycle.spec.ts
new file mode 100644
index 00000000..20ccf27d
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/e2e/document-revision-lifecycle.spec.ts
@@ -0,0 +1,283 @@
+import { expect, test, type Page } from "@playwright/test";
+import { mkdir } from "node:fs/promises";
+import path from "node:path";
+import { constituteAndCreateProject, openNewPreparation } from "./helpers/g4-chat-first";
+
+async function projectDocument(page: Page): Promise<{
+  projectId: string;
+  preparationId: string;
+  documentId: string;
+}> {
+  const projectId = new URL(page.url()).pathname.split("/").filter(Boolean)[1] ?? "";
+  const project = (await (await page.request.get(`/api/projects/${projectId}`)).json()) as {
+    preparation?: { id?: string };
+    documents?: Array<{ document?: { id?: string } }>;
+  };
+  const preparationId = project.preparation?.id ?? "";
+  const documentId = project.documents?.[0]?.document?.id ?? "";
+  expect(preparationId).not.toBe("");
+  expect(documentId).not.toBe("");
+  return { projectId, preparationId, documentId };
+}
+
+async function inspectCandidate(page: Page, preparationId: string, candidateId: string) {
+  const res = await page.request.get(
+    `/api/preparations/${preparationId}/document-candidates/${encodeURIComponent(candidateId)}`,
+  );
+  expect(res.ok()).toBeTruthy();
+  const body = (await res.json()) as {
+    status?: string;
+    candidate?: {
+      candidateId?: string;
+      documentId?: string;
+      sourceRevisionId?: string;
+      contentMarkdown?: string;
+      contentSha256?: string;
+    };
+  };
+  expect(body.status).toBe("PENDING");
+  const markdown = body.candidate?.contentMarkdown ?? "";
+  expect(markdown.length).toBeGreaterThan(0);
+  expect(body.candidate?.contentSha256).toMatch(/^[a-f0-9]{64}$/);
+  return body.candidate!;
+}
+
+async function storedRevisions(page: Page, preparationId: string, documentId: string) {
+  const res = await page.request.get(
+    `/api/preparations/${preparationId}/documents/${documentId}`,
+  );
+  expect(res.ok()).toBeTruthy();
+  const body = (await res.json()) as {
+    revisions?: Array<{
+      id: string;
+      revisionNumber: number;
+      contentMarkdown: string;
+      provenanceJson: string;
+    }>;
+  };
+  return body.revisions ?? [];
+}
+
+function sealedSha(revision: { provenanceJson: string }): string {
+  const parsed = JSON.parse(revision.provenanceJson) as { contentSha256?: string };
+  return parsed.contentSha256 ?? "";
+}
+
+/**
+ * Lot 1 — natural V1 → inspected V2 → V3 in one Nora thread.
+ * Fixture Nora (STUDIO_E2E), isolated :3101 / sfia_next_e2e. No provider call.
+ * The second revise utterance exists only in the fixture lane.
+ */
+test("cycle documentaire V1 → V2 inspectée → V3 sans faux historique", async ({ page }) => {
+  test.setTimeout(240_000);
+  const shots = path.resolve(process.cwd(), "../../../.tmp-sfia-review/lot1-captures");
+  await mkdir(shots, { recursive: true });
+
+  await page.goto("/login");
+  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+  await page.waitForURL("**/portfolio");
+  await openNewPreparation(page);
+  await constituteAndCreateProject(page, {
+    name: `CycleDoc ${Date.now()}`,
+    summary: "v1-v2-v3",
+  });
+  await page.waitForURL("**/projects/**");
+
+  const composer = page.getByTestId("thread-draft");
+  await expect(composer).toBeEnabled({ timeout: 20000 });
+  await composer.fill("Rédige un document de synthèse sur les options A et B");
+  await page.getByTestId("thread-send").click();
+  await expect(page.getByText(/Options A et B/i).first()).toBeVisible({ timeout: 45000 });
+
+  await page.getByTestId("nav-documents").click();
+  await expect(page.getByTestId("document-bibliotheque")).toBeVisible({ timeout: 15000 });
+  await expect(page.locator('[data-testid^="doc-open-"]')).toHaveCount(1);
+  await page.locator('[data-testid^="doc-open-"]').first().click();
+  await page.getByTestId("doc-action-open").click();
+  await expect(page.getByTestId("document-read-body")).toContainText(/Options A et B/i, {
+    timeout: 15000,
+  });
+  await page.getByTestId("doc-action-request-revision").click();
+  await expect(page).toHaveURL(/surface=travail/);
+  await expect(composer).toBeEnabled({ timeout: 20000 });
+
+  await composer.fill("Je souhaite clarifier les responsabilités entre les trois centres.");
+  await page.getByTestId("thread-send").click();
+  const viewer = page.getByTestId("travail-viewer");
+  await expect(viewer).toBeVisible({ timeout: 45000 });
+  await expect(page.getByTestId("travail-viewer-body")).toContainText(/coordinateur consolide/i);
+  await expect(page.getByTestId("travail-viewer-body")).not.toContainText(/Options A et B/i);
+  await expect(page.getByTestId("document-focus-banner")).toContainText(/PROPOSITION NON ENREGISTRÉE/i);
+  await expect(page.getByTestId("travail-viewer-currency")).toHaveText("PROPOSITION");
+  await expect(viewer).toHaveAttribute("data-revision-id", "");
+  const candidateIdV2 = await viewer.getAttribute("data-proposal-candidate-id");
+  expect(candidateIdV2).toBeTruthy();
+  const ids = await projectDocument(page);
+  const inspectedV2 = await inspectCandidate(page, ids.preparationId, candidateIdV2!);
+  expect(inspectedV2.documentId).toBe(ids.documentId);
+  expect(inspectedV2.contentMarkdown).toContain("coordinateur consolide");
+  const v1Before = await storedRevisions(page, ids.preparationId, ids.documentId);
+  expect(v1Before).toHaveLength(1);
+  expect(inspectedV2.sourceRevisionId).toBe(v1Before[0]?.id);
+  await expect(page.getByRole("button", { name: /Repartir de la v/i })).toHaveCount(0);
+  await page.screenshot({ path: path.join(shots, "01-proposition-v2.png"), fullPage: true });
+
+  await page.getByTestId("nav-documents").click();
+  await page.locator('[data-testid^="doc-open-"]').first().click();
+  await page.getByTestId("doc-action-versions").click();
+  await expect(page.getByTestId("doc-rev-1")).toBeVisible();
+  await expect(page.getByTestId("doc-rev-2")).toHaveCount(0);
+
+  await page.getByTestId("studio-rail").getByTestId("nav-travail").click();
+  await page.getByRole("button", { name: /Conserver comme nouvelle version/i }).click();
+  await expect(page.getByText(/Version v2 conservée|Nouvelle version disponible\s*:\s*v2/i).first()).toBeVisible({
+    timeout: 45000,
+  });
+  await expect(page.getByTestId("travail-viewer-body")).toContainText(/coordinateur consolide/i, {
+    timeout: 15000,
+  });
+  await expect(page.getByTestId("travail-viewer-currency")).toHaveText("COURANTE");
+  await expect(page.getByTestId("document-focus-banner")).toHaveCount(0);
+  await expect(viewer).toHaveAttribute("data-proposal-candidate-id", "");
+  const afterV2 = await storedRevisions(page, ids.preparationId, ids.documentId);
+  expect(afterV2).toHaveLength(2);
+  expect(afterV2[1]?.contentMarkdown).toBe(inspectedV2.contentMarkdown);
+  expect(sealedSha(afterV2[1]!)).toBe(inspectedV2.contentSha256);
+  expect(afterV2[0]?.contentMarkdown).toBe(v1Before[0]?.contentMarkdown);
+  expect(sealedSha(afterV2[0]!)).toBe(sealedSha(v1Before[0]!));
+  await page.screenshot({ path: path.join(shots, "02-v2-courante.png"), fullPage: true });
+
+  await expect(composer).toBeEnabled({ timeout: 20000 });
+  await composer.fill("Je souhaite préciser le suivi entre les centres.");
+  await page.getByTestId("thread-send").click();
+  await expect(page.getByRole("button", { name: /Repartir de la v/i })).toHaveCount(0);
+  await expect(page.getByTestId("travail-viewer-body")).toContainText(/suivi V3 discriminant/i, {
+    timeout: 45000,
+  });
+  await expect(page.getByTestId("travail-viewer-body")).not.toContainText(/coordinateur consolide/i);
+  await expect(page.getByTestId("document-focus-banner")).toContainText(/PROPOSITION NON ENREGISTRÉE/i);
+  await expect(viewer).toHaveAttribute("data-revision-id", "");
+  const candidateIdV3 = await viewer.getAttribute("data-proposal-candidate-id");
+  expect(candidateIdV3).toBeTruthy();
+  expect(candidateIdV3).not.toBe(candidateIdV2);
+  const inspectedV3 = await inspectCandidate(page, ids.preparationId, candidateIdV3!);
+  expect(inspectedV3.sourceRevisionId).toBe(afterV2[1]?.id);
+  expect(inspectedV3.contentMarkdown).toContain("suivi V3 discriminant");
+  expect(inspectedV3.contentMarkdown).not.toBe(inspectedV2.contentMarkdown);
+  await page.screenshot({ path: path.join(shots, "03-proposition-v3.png"), fullPage: true });
+
+  await page.getByRole("button", { name: /Conserver comme nouvelle version/i }).last().click();
+  await expect(page.getByText(/Version v3 conservée|Nouvelle version disponible\s*:\s*v3/i).first()).toBeVisible({
+    timeout: 45000,
+  });
+  await expect(page.getByTestId("travail-viewer-currency")).toHaveText("COURANTE");
+  await expect(page.getByTestId("travail-viewer-body")).toContainText(/suivi V3 discriminant/i);
+  const afterV3 = await storedRevisions(page, ids.preparationId, ids.documentId);
+  expect(afterV3).toHaveLength(3);
+  expect(afterV3[2]?.contentMarkdown).toBe(inspectedV3.contentMarkdown);
+  expect(sealedSha(afterV3[2]!)).toBe(inspectedV3.contentSha256);
+  expect(afterV3[0]?.contentMarkdown).toBe(v1Before[0]?.contentMarkdown);
+  expect(sealedSha(afterV3[0]!)).toBe(sealedSha(v1Before[0]!));
+  expect(afterV3[1]?.contentMarkdown).toBe(inspectedV2.contentMarkdown);
+  expect(sealedSha(afterV3[1]!)).toBe(inspectedV2.contentSha256);
+  await page.screenshot({ path: path.join(shots, "04-v3-courante.png"), fullPage: true });
+
+  await page.getByTestId("nav-documents").click();
+  await expect(page.locator('[data-testid^="doc-open-"]')).toHaveCount(1);
+  await page.locator('[data-testid^="doc-open-"]').first().click();
+  await page.getByTestId("doc-action-versions").click();
+  await expect(page.getByTestId("doc-rev-1")).toBeVisible();
+  await expect(page.getByTestId("doc-rev-2")).toBeVisible();
+  await expect(page.getByTestId("doc-rev-3")).toBeVisible();
+  await expect(page.getByTestId("doc-rev-3")).toContainText(/COURANTE/i);
+  await expect(page.getByTestId("doc-rev-1")).toContainText(/HISTORIQUE/i);
+  await page.screenshot({ path: path.join(shots, "05-historique-v1-v2-v3.png"), fullPage: true });
+
+  await page.getByTestId("doc-rev-1").click();
+  await page.getByTestId("doc-action-read-version").click();
+  await expect(page.getByTestId("document-read-body")).toContainText(/Options A et B/i);
+  await expect(page.getByTestId("document-read-body")).not.toContainText(/suivi V3 discriminant/i);
+
+  await page.getByTestId("doc-action-history").click();
+  await page.getByTestId("doc-rev-2").click();
+  await page.getByTestId("doc-action-read-version").click();
+  await expect(page.getByTestId("document-read-body")).toContainText(/coordinateur consolide/i);
+  await expect(page.getByTestId("document-read-body")).not.toContainText(/suivi V3 discriminant/i);
+
+  await page.getByTestId("doc-action-history").click();
+  await page.getByTestId("doc-rev-1").click();
+  await page.getByTestId("doc-action-rework-nora").click();
+  await expect(page.getByRole("button", { name: /Repartir de la v1/i })).toBeVisible({
+    timeout: 45000,
+  });
+  await page.screenshot({ path: path.join(shots, "06-revision-historique-gouvernee.png"), fullPage: true });
+  await page.getByTestId("nav-documents").click();
+  await page.locator('[data-testid^="doc-open-"]').first().click();
+  await page.getByTestId("doc-action-versions").click();
+  await expect(page.getByTestId("doc-rev-4")).toHaveCount(0);
+
+  await page.reload();
+  await page.getByTestId("nav-documents").click();
+  await expect(page.locator('[data-testid^="doc-open-"]')).toHaveCount(1);
+  await page.locator('[data-testid^="doc-open-"]').first().click();
+  await page.getByTestId("doc-action-versions").click();
+  await expect(page.getByTestId("doc-rev-3")).toContainText(/COURANTE/i);
+});
+
+test("une conservation tardive ne rouvre pas une visionneuse fermée", async ({ page }) => {
+  test.setTimeout(180_000);
+  await page.goto("/login");
+  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
+  await page.waitForURL("**/portfolio");
+  await openNewPreparation(page);
+  await constituteAndCreateProject(page, {
+    name: `CycleDoc fermeture ${Date.now()}`,
+    summary: "fermeture pendant conservation",
+  });
+  await page.waitForURL("**/projects/**");
+  const composer = page.getByTestId("thread-draft");
+  await expect(composer).toBeEnabled({ timeout: 20000 });
+  await composer.fill("Rédige un document de synthèse sur les options A et B");
+  await page.getByTestId("thread-send").click();
+  await expect(page.getByText(/Options A et B/i).first()).toBeVisible({ timeout: 45000 });
+  await page.getByTestId("nav-documents").click();
+  await page.locator('[data-testid^="doc-open-"]').first().click();
+  await page.getByTestId("doc-action-open").click();
+  await page.getByTestId("doc-action-request-revision").click();
+  await expect(composer).toBeEnabled({ timeout: 20000 });
+  await composer.fill("Je souhaite clarifier les responsabilités entre les trois centres.");
+  await page.getByTestId("thread-send").click();
+  const viewer = page.getByTestId("travail-viewer");
+  await expect(viewer).toBeVisible({ timeout: 45000 });
+  await expect(page.getByTestId("travail-viewer-currency")).toHaveText("PROPOSITION");
+
+  let release: () => void = () => {};
+  const gate = new Promise<void>((resolve) => {
+    release = resolve;
+  });
+  await page.route("**/api/preparations/*/messages", async (route) => {
+    if (route.request().method() !== "POST") {
+      await route.continue();
+      return;
+    }
+    await gate;
+    await route.continue();
+  });
+  await page.getByRole("button", { name: /Conserver comme nouvelle version/i }).click();
+  await page.getByTestId("travail-viewer-close").click();
+  await expect(viewer).toBeHidden();
+  release();
+  await expect(page.getByText(/Version v2 conservée|Nouvelle version disponible\s*:\s*v2/i).first()).toBeVisible({
+    timeout: 45000,
+  });
+  await expect(viewer).toBeHidden();
+  const ids = await projectDocument(page);
+  const revisions = await storedRevisions(page, ids.preparationId, ids.documentId);
+  expect(revisions.map((r) => r.revisionNumber)).toEqual([1, 2]);
+  await page.reload();
+  await page.getByTestId("nav-documents").click();
+  await page.locator('[data-testid^="doc-open-"]').first().click();
+  await page.getByTestId("doc-action-versions").click();
+  await expect(page.getByTestId("doc-rev-2")).toContainText(/COURANTE/i);
+  await expect(page.getByTestId("travail-viewer")).toHaveCount(0);
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts
index 7c470ab6..0dcf8ebc 100644
--- a/projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts
@@ -1,6 +1,11 @@
 import { describe, expect, it } from "vitest";
 import {
+  documentTurnMayApply,
+  focusAfterAvailableConservation,
   formatPilotFacingProvenance,
+  pendingCandidateRestoreIsCurrent,
+  resolveTravailDocumentPresentation,
+  revisionCurrencyFromIdentity,
   revisionCurrencyLabel,
 } from "@/components/figma/DocumentSurfaces";
 import {
@@ -22,7 +27,220 @@ describe("revisionCurrencyLabel", () => {
   it("marks head as Courante and others Historique", () => {
     expect(revisionCurrencyLabel(3, 3)).toBe("Courante");
     expect(revisionCurrencyLabel(2, 3)).toBe("Historique");
-    expect(revisionCurrencyLabel(1, null)).toBe("Historique");
+    expect(revisionCurrencyLabel(1, null)).toBe("Non vérifiée");
+  });
+});
+
+describe("documentary focus after conservation", () => {
+  const docs: DocumentListItem[] = [
+    {
+      document: { id: "doc-1", title: "Parcours" },
+      latestRevision: {
+        id: "rev-2",
+        revisionNumber: 2,
+        status: "AVAILABLE",
+        contentMarkdown: "# V2\n",
+      },
+    },
+  ];
+  const stale: DocumentReviseFocus = {
+    documentId: "doc-1",
+    sourceRevisionId: "rev-1",
+    sourceRevisionNumber: 1,
+    observedHeadRevisionId: "rev-1",
+    observedHeadRevisionNumber: 1,
+    pendingCandidateId: "pdoc-old",
+    pendingCandidateContentSha256: "abc",
+  };
+
+  it("reproduces the stale focus: the next revise still targets the previous source", () => {
+    const target = resolveReviseTarget(docs, null, stale);
+    expect(target.ok).toBe(true);
+    if (!target.ok) return;
+    expect(target.baseRevisionId).toBe("rev-1");
+  });
+
+  it("rebases source and observed head onto the revision D4 just wrote", () => {
+    const next = focusAfterAvailableConservation(stale, {
+      status: "AVAILABLE",
+      documentId: "doc-1",
+      revisionId: "rev-2",
+      revisionNumber: 2,
+    });
+    expect(next.rebased).toBe(true);
+    expect(next.focus?.sourceRevisionId).toBe("rev-2");
+    expect(next.focus?.observedHeadRevisionId).toBe("rev-2");
+    expect(next.focus?.pendingCandidateId).toBeUndefined();
+    const target = resolveReviseTarget(docs, null, next.focus);
+    expect(target.ok).toBe(true);
+    if (!target.ok) return;
+    expect(target.baseRevisionId).toBe("rev-2");
+  });
+
+  it("does not rebase another document or a save without a revision id", () => {
+    expect(
+      focusAfterAvailableConservation(stale, {
+        status: "AVAILABLE",
+        documentId: "doc-other",
+        revisionId: "rev-9",
+        revisionNumber: 9,
+      }).rebased,
+    ).toBe(false);
+    expect(
+      focusAfterAvailableConservation(stale, {
+        status: "AVAILABLE",
+        documentId: "doc-1",
+      }).rebased,
+    ).toBe(false);
+    expect(
+      focusAfterAvailableConservation(stale, {
+        status: "CONFLICT",
+        documentId: "doc-1",
+        revisionId: "rev-2",
+      }).rebased,
+    ).toBe(false);
+  });
+});
+
+describe("viewer currency is not inferred from exact resolution", () => {
+  it("treats an exact reference of the current head as Courante", () => {
+    const view = resolveTravailDocumentPresentation({
+      proposalActive: false,
+      revisionId: "rev-2",
+      revisionNumber: 2,
+      headRevisionId: "rev-2",
+      headRevisionNumber: 2,
+      knownHeadRevisionId: "rev-2",
+    });
+    expect(view.currency).toBe("Courante");
+    expect(view.banner).toBeNull();
+    expect(
+      revisionCurrencyFromIdentity({
+        revisionId: "rev-2",
+        revisionNumber: 2,
+        knownHeadRevisionId: "rev-2",
+        headRevisionId: "rev-3",
+        headRevisionNumber: 3,
+      }),
+    ).toBe("Historique");
+  });
+
+  it("does not call an unknown head historical", () => {
+    const view = resolveTravailDocumentPresentation({
+      proposalActive: false,
+      revisionId: "rev-2",
+      revisionNumber: 2,
+    });
+    expect(view.currency).toBe("Non vérifiée");
+    expect(view.banner).toBeNull();
+  });
+
+  it("shows the candidate body as a proposal and keeps it distinct from another version", () => {
+    const candidate = "# V2 candidate\n";
+    const shown = resolveTravailDocumentPresentation({
+      proposalActive: true,
+      proposalCandidateId: "cand-2",
+      viewerProposalCandidateId: "cand-2",
+      proposalDocumentId: "doc-1",
+      viewerDocumentId: "doc-1",
+      proposalMarkdown: candidate,
+      viewerMarkdown: candidate,
+      revisionId: null,
+    });
+    expect(shown.banner).toBe("proposal");
+    expect(shown.currency).toBe("Proposition");
+    const sameTextRevision = resolveTravailDocumentPresentation({
+      proposalActive: true,
+      proposalCandidateId: "cand-2",
+      viewerProposalCandidateId: null,
+      proposalDocumentId: "doc-1",
+      viewerDocumentId: "doc-1",
+      proposalMarkdown: candidate,
+      viewerMarkdown: candidate,
+      revisionId: "rev-2",
+      revisionNumber: 2,
+      headRevisionId: "rev-2",
+      headRevisionNumber: 2,
+      knownHeadRevisionId: "rev-2",
+    });
+    expect(sameTextRevision.banner).toBe("other-version");
+    expect(sameTextRevision.currency).toBe("Courante");
+    const other = resolveTravailDocumentPresentation({
+      proposalActive: true,
+      proposalMarkdown: candidate,
+      viewerMarkdown: "# V1\n",
+      revisionId: "rev-1",
+      headRevisionId: "rev-1",
+      revisionNumber: 1,
+      headRevisionNumber: 1,
+    });
+    expect(other.banner).toBe("other-version");
+    expect(other.currency).toBe("Courante");
+  });
+});
+
+describe("document turn scope and candidate restore", () => {
+  const base = {
+    turnGen: 2,
+    latestTurnGen: 2,
+    focusDocumentAtSend: "doc-a",
+    focusDocumentNow: "doc-a",
+    viewerClosedByPilot: false,
+    viewerDocumentId: "doc-a",
+    effectDocumentId: "doc-a",
+  };
+
+  it("does not move document B when a late result belongs to document A", () => {
+    const late = documentTurnMayApply({
+      ...base,
+      focusDocumentNow: "doc-b",
+      viewerDocumentId: "doc-b",
+    });
+    expect(late.focus).toBe(false);
+    expect(late.viewer).toBe(false);
+  });
+
+  it("does not reopen a viewer the pilot closed", () => {
+    const closed = documentTurnMayApply({ ...base, viewerClosedByPilot: true });
+    expect(closed.focus).toBe(true);
+    expect(closed.viewer).toBe(false);
+  });
+
+  it("does not apply an older document result after a newer turn", () => {
+    const older = documentTurnMayApply({ ...base, turnGen: 1, latestTurnGen: 2 });
+    expect(older.focus).toBe(false);
+    expect(older.viewer).toBe(false);
+  });
+
+  it("does not restore a candidate over a newer selection", () => {
+    expect(
+      pendingCandidateRestoreIsCurrent({
+        projectIdAtStart: "proj-1",
+        projectIdNow: "proj-1",
+        documentId: "doc-a",
+        candidateId: "cand-a",
+        focusDocumentId: "doc-b",
+        focusCandidateId: "cand-a",
+        requestSeqAtStart: 4,
+        requestSeqNow: 4,
+        candidateDocumentId: "doc-a",
+        candidateMarkdown: "# A",
+      }),
+    ).toBe(false);
+    expect(
+      pendingCandidateRestoreIsCurrent({
+        projectIdAtStart: "proj-1",
+        projectIdNow: "proj-1",
+        documentId: "doc-a",
+        candidateId: "cand-a",
+        focusDocumentId: "doc-a",
+        focusCandidateId: "cand-a",
+        requestSeqAtStart: 4,
+        requestSeqNow: 5,
+        candidateDocumentId: "doc-a",
+        candidateMarkdown: "# A",
+      }),
+    ).toBe(false);
   });
 });

~~~~
