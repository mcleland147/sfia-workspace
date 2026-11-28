# Review Pack — Lot 1, ajustement du contexte documentaire

Cycle 08 — Delivery. Profil Critical. Revue Full. Mono-cycle.
Ce pack remplace le pack précédent. Il ne l'étend pas.
Cycle précédent, immuable : handoff `c186d99932b15402af01704748e0dd613ae378ac`, blob `8609af4367f33d283f0252fd5ae8f792eff159f6`.

Date du pack : 2026-11-28T10:05+01:00.

## 1. Identité et mandat

Projet : SFIA Studio Next. Racine : `projects/sfia-studio-next/`.
Mandat : trois ajustements du contexte documentaire, sans reprendre le cycle V1 → V2 → V3.
Morris autorise le correctif, les validations proportionnées, le commit, le push DEV et ce handoff.
Aucun autre lot. Aucune recette. Aucun LIVE.

Programme inchangé : R5 IN PROGRESS, ML5 OPEN, LIVRAISON 1 NOT ACCEPTED, 17 MP OPEN, R6 NOT STARTED, NO RELEASE, STABLE NOT AVAILABLE, NOT ADOPTED.

Arbitrage de qualification retenu : les règles techniques sont prouvées en déterministe. Les courses navigateur difficiles à reproduire sans harness nouveau sont qualifiées DEFERRED TO RECETTE. Ce report n'est pas un PASS.

## 2. Git Truth Check

Repository : `mcleland147/sfia-workspace`.
Worktree : `/Users/morris/Projects/sfia-wt-next-ml5-20261123`.
Branche : `sfia/next-ml5-integrated-delivery-20261123`.

Entrée : HEAD local = origin = `30d598515766781d987f8dba3348f6fa9e659a80`.
Tree d'entrée : `29f61e767b37a44c54c3e75818b96496fd1b6624`.
`origin/main` : `997897fd7cf914771e7d08e8030dc7123fab7d25`. Merge-base = cette main.
Branche documentaire après fetch : `1e49602a4ad8eba5079ad9240b3b2fba5e7af348`.
Suivi blob : `8cc5dc70203ee9a56c960d533533cc4c6c32061a`.
État produit à l'entrée : aucun changement non committé. Seuls les dossiers temporaires de revue étaient présents.

Sortie :

- Commit : `96c0129f6dce61cd1f545d1b07821ea6d6e67e9b`
- Message : `fix(next): guard stale documentary context updates`
- Tree : `8b320ccaa383fa14cf296e7e3b0255eb9254397b`
- Push fast-forward : `30d59851..96c0129f`
- HEAD local = HEAD distant
- URL : https://github.com/mcleland147/sfia-workspace/commit/96c0129f6dce61cd1f545d1b07821ea6d6e67e9b
- Diff : 5 fichiers, 175 insertions, 10 suppressions
- `gh run list` pour ce SHA : aucune exécution
- Statut CI : REMOTE CI NOT RUN — DEV REVIEW SNAPSHOT

RECETTE : processus 77113 toujours sur le port 3200. DEV métier : processus 55011 sur le port 3100. Port 3101 libre. Aucun redémarrage.

## 3. Sources lues

Dans ce cycle :

- Routage Next, `method/sfia-fast-track/core/sfia-cycle-routing-guide.md` §4.3.0b, ref `997897fd`. Priorité Next, ENV-01 et versioning obligatoires, pas de template concurrent.
- Template v2.6, ancres §2.0.H, §7.10–§7.11 et §9.1, même ref. Publication publish-in-cycle, mono-fichier.
- `scripts/sfia/README.md`, blob `e0c5894b`, présence du publisher canonique.
- SEF v0.2, blob `ef85ba1e`, en-tête et primauté Morris. Non modifié.
- Roadmap sur main, en-tête du 22 novembre 2026 : Ensemble 08, NO RELEASE, ML5 non ouvert par cette page. Le mandat Morris de ce cycle porte le lot 1. La roadmap n'a pas été modifiée.
- ENV-01 v0.1, blob `14b61f0d`. Lanes DEV 3100 et RECETTE 3200. STABLE NOT AVAILABLE.
- Versioning v1.0, blob `8bc93e0f`. NO RELEASE. Cinq objets distincts : version, SHA, build, schéma, environnement.
- Nomenclature, blob `9cdd253d`. Vision cible, blob `3854bf75`, en-tête seulement. Aucun changement de nom ni de parcours.
- Suivi v0.3 §8.3, ref `1e49602a`, blob `8cc5dc70`. Les trois réserves y sont formulées.
- Handoff précédent `c186d999`, blob `8609af43`, comme cycle immuable.
- Code publié `30d59851` : restauration L2225–2303, `focusAfterAvailableConservation`, `resumeNoraWithDocumentRevision`.
- Contrat de réponse D4 : `documentSave.revisionNumber` est optionnel dans le type de `service.ts`. Le chemin AVAILABLE nominal le renseigne quand la révision est écrite. Le client ne doit pas le déduire.

Non relus en entier : décisions R4, P2 et SEM, contrats documentaires historiques, PV Equipéo. Ils ne sont pas modifiés et ne portent pas ces trois branches.

## 4. Constats

Confirmé. Les branches HTTP, candidat non PENDING et `catch` de la restauration appelaient `setPendingProposal(null)` sans la garde utilisée par le succès. Une erreur ancienne pouvait effacer une proposition plus récente et poser un statut de tête sur le nouveau contexte.

Confirmé. `focusAfterAvailableConservation` recopié `focus.sourceRevisionNumber` quand `save.revisionNumber` est absent, puis l'associait au nouvel identifiant.

Confirmé. `resumeNoraWithDocumentRevision` attend la tête, puis remplace le focus, ouvre la visionneuse et, pour une base historique, envoie la demande de confirmation. Aucune génération n'était vérifiée au retour. Une sélection plus récente, un changement de projet ou une fermeture pouvaient être écrasés. La demande historique partait aussi pour une sélection abandonnée.

Le service D4 n'a pas été modifié. Les gardes serveur restent celles du candidat `30d59851`.

## 5. Corrections

`pendingCandidateRestoreOwnsContext` exige le même projet, la même génération de visionneuse, le même document et le même candidat. Les retours d'erreur et l'exception l'utilisent avant toute modification. Si le contexte a changé, la proposition, le focus, la visionneuse et le statut restent intacts. Si l'erreur concerne encore le candidat actif, la proposition est retirée et le message de tête déplacée n'est posé que dans ce cas.

`pendingCandidateRestoreIsCurrent` réutilise cette garde, puis exige le corps et le document renvoyés par le serveur. Le succès n'affiche toujours pas un candidat sans contenu.

`focusAfterAvailableConservation` n'écrit un numéro que si D4 le fournit. Sinon le numéro de source et le numéro de tête observée restent inconnus. L'identifiant de la révision écrite est conservé. Aucun ancien numéro n'est réutilisé.

`resumeNoraWithDocumentRevision` réserve une génération avant l'attente de la tête. Au retour, `documentSelectionResolveIsCurrent` refuse l'application si le projet a changé, si une sélection ou une fermeture plus récente a avancé la génération, ou si la visionneuse ouverte au départ a été fermée. Dans ce cas, ni le focus, ni la visionneuse, ni la demande de confirmation historique ne sont émis. La sélection encore courante conserve le comportement nominal, y compris la demande historique quand la base n'est pas la tête.

## 6. Fichiers

Modifiés, aucun fichier créé :

- `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`
- `projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx`
- `projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts`
- `projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md`
- `projects/sfia-studio-next/construction/delivery-history.md`

Le diff complet depuis `30d59851` est l'annexe. Le commit distant est la source de revue du code.

## 7. Validations

| Contrôle | Résultat |
| --- | --- |
| Unitaires `documents-surfaces-projection` | 25 passed, dont les trois règles nouvelles et le cas nominal de rebasement avec numéro |
| Lint des fichiers modifiés | exit 0. Avertissements préexistants de `page.tsx` seulement |
| `next build` isolé `.next-e2e` | exit 0. Compilation et contrôle de types du build passés |
| PostgreSQL | non rejoué. `service.ts` et les gardes D4 sont inchangés depuis les 10 PASS du candidat `30d59851`. Ce n'est pas une nouvelle exécution |
| Playwright | non rejoué. La spec existante n'est pas modifiée. Sa preuve reste attachée à `30d59851` |
| `git diff --check` | propre |
| Webpack `/login` 500 et `tsc --noEmit` hors lot | réserves d'outillage inchangées, non retraitées |
| CI distante | aucune exécution |

## 8. Preuves déterministes

1. Erreur de restauration dont le document ou le candidat n'est plus sélectionné : `pendingCandidateRestoreOwnsContext` retourne faux. Le code client retourne avant `setPendingProposal`, `applyDocumentFocus` et `setStatusHint`.
2. Erreur encore applicable : même projet, même document, même candidat, même génération : la garde retourne vrai. Le code retire alors cette proposition et peut poser le statut de tête déplacée.
3. Conservation AVAILABLE sans `revisionNumber` : nouvel identifiant conservé, les deux numéros restent `undefined`.
4. Résolution dont la génération a avancé, ou dont la visionneuse a été fermée : `documentSelectionResolveIsCurrent` retourne faux. Le code retourne avant focus, visionneuse et `sendMessage` historique.
5. Génération inchangée, même projet, visionneuse non fermée : la garde autorise le chemin nominal.

Ces fonctions sont importées et appelées par `page.tsx`.

## 9. DEFERRED TO RECETTE

Ce ne sont pas des PASS. Les défauts de code cités au §4 sont corrigés. Les contrôles ci-dessous qualifient le comportement visible.

### Erreur de restauration après un autre choix

Raison : reproduire le rechargement, la requête candidat retardée et un changement de sélection exige un harness de session que ce mandat interdit de créer.
Conditions : projet RECETTE avec une proposition en attente, rechargement, puis sélection d'un autre document avant l'échec de l'ancienne requête. Réseau ralenti ou requête candidat interrompue.
Résultat attendu : la proposition, le focus, la visionneuse et le statut du nouveau contexte restent. Si l'erreur concerne encore le candidat affiché, la proposition est retirée et le message de requalification peut apparaître.
Preuve : capture du fil et journal réseau. Contrôle manuel.
Bloquant pour l'acceptation finale de Livraison 1 : oui, comme observation de non-régression. Non bloquant pour la sortie technique de ce candidat DEV, la règle étant démontrée et branchée.

### Sélection A puis B pendant la résolution de tête

Raison : le retard de `loadDocHistory` n'est pas injectable sans nouvel outillage.
Conditions : historique ouvert, réseau ralenti, demande Nora sur une révision puis immédiatement sur une autre révision ou un autre document, puis fermeture de la visionneuse avant la première réponse.
Résultat attendu : seul le dernier contexte reste. Aucune demande « confirme la base » pour la sélection abandonnée. Une visionneuse fermée reste fermée.
Preuve : capture de conversation et chronologie réseau. Contrôle manuel.
Même classification : observation requise avant acceptation finale, non bloquante pour ce candidat technique.

### Reports déjà ouverts

Accusé de conservation perdu, anciens liens exacts de conversation, Nora LIVE, et transitions navigateur A→B non couvertes par la spec existante. Ils restent à qualifier en RECETTE, manuellement pour les courses et avec Nora réelle seulement sous un GO LIVE distinct. Ils ne sont pas requalifiés PASS. Ils ne sont pas des défauts laissés sans correctif dans ce mandat : les gardes correspondantes du candidat précédent demeurent.

## 10. Fake / Real

DET : les trois règles et le nominal de rebasement. Prouvé sur ce diff.
PG : non rejoué, service inchangé. Preuve historique du `30d59851`, non présentée comme nouvelle.
BROWSER : non rejoué. Preuve historique du parcours nominal, non présentée comme nouvelle.
LIVE : NOT RUN.

Claims tenus : IMPLEMENTED pour les trois gardes, COVERAGE VERIFIED en déterministe.
Claims refusés : END-TO-END REAL PROVEN, READY FOR REAL, MP CLOSED, LIVRAISON 1 ACCEPTED, ADOPTED.

## 11. Réserves

1. Les deux courses du §9 ne sont pas exercées dans le navigateur DEV.
2. Les 10 tests PostgreSQL et les 2 tests Playwright du candidat précédent ne sont pas rejoués ici.
3. Webpack canonique et `tsc --noEmit` hors lot restent des réserves d'outillage.
4. DOC-D et DOC-E restent au lot 7.
5. Le SHA `96c0129f` est dans ce pack. Il n'est pas recopié dans `delivery-history.md`.

Aucun défaut des trois chemins n'est laissé sans correction.

## 12. Verdict Cursor

READY WITH RESERVES.

Les trois corrections sont dans le candidat publié et couvertes par des tests déterministes branchés au client. Les invariants D4 ne sont pas touchés. La qualification visible des deux courses est explicitement reportée en RECETTE, selon l'arbitrage Morris. PUBLISHED DEV n'est ni REVIEWED, ni ACCEPTED, ni PROMOTED.

## Annexe — diff utile

Diff complet `30d598515766781d987f8dba3348f6fa9e659a80..96c0129f6dce61cd1f545d1b07821ea6d6e67e9b`. Aucun fichier créé. Toutes les sections modifiées sont dans ce diff.

~~~~diff
diff --git a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md
index 2809b940..c4a128e6 100644
--- a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md
+++ b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md
@@ -40,3 +40,4 @@ Section factuelle du candidat de finalisation. Elle ne remplace pas les preuves
 4. Un résultat documentaire tardif ne met à jour que le document encore sélectionné par ce tour. Il ne remplace pas le focus ou la visionneuse d'un autre document, et ne rouvre pas une visionneuse fermée par le Pilote. Les messages, le pilotage et les autres effets du tour restent appliqués. Une restauration de candidat abandonne si le projet, le document, le candidat ou la génération de visionneuse ont changé. Une conservation dont l'identifiant de révision manque, ou dont l'accusé est perdu, ne choisit pas une tête.
 5. Une vraie base historique continue d'exiger la confirmation serveur. `BASE_STALE`, le conflit de tête et l'idempotence de conservation ne sont pas assouplis.
 6. Le titre métier n'est pas réécrit, et Equipéo n'est pas renommé. Une proposition déjà consommée n'a pas de nouvel état durable : le libellé générique « propositions expirées » des choix non actionnables reste hors de ce lot.
+7. Complément du 28 novembre, après le candidat `30d59851`. Une restauration de candidat en erreur ou en exception ne modifie la proposition, le focus et le statut que si elle vise encore le même projet, le même document et le même candidat. Une conservation sans numéro de révision conserve l'identifiant écrit et laisse le numéro inconnu. Une résolution de tête arrivée après une autre sélection, un autre projet ou une fermeture ne remplace pas le contexte le plus récent et n'envoie pas la demande de confirmation historique.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index fc2106ae..3464e2d6 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -5575,4 +5575,5 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
 - **Limites** : pas de fournisseur réel ; pas de promotion RECETTE ; DOC-D et DOC-E reportés au lot 7 ; lots 2 à 7 non engagés
 - **Versioning** : NO RELEASE · STABLE NOT AVAILABLE · aucune version sémantique officielle
 - **Statut** : DEV PUBLIÉ POUR REVUE — NOT ACCEPTED — NOT ADOPTED
+- **Complément** : gardes de contexte documentaire. Une erreur de restauration obsolète ne retire plus la proposition active. Un numéro de révision absent n'hérite plus de l'ancien numéro. Une tête résolue après un changement de sélection n'écrase plus le focus. Le SHA de ce complément est reporté dans le Review Pack, pas dans un second commit destiné à l'y inscrire.

diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 05228281..14d6593c 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -34,10 +34,12 @@ import {
   DocumentCompareSurface,
   DocumentHistorySurface,
   DocumentReadSurface,
+  documentSelectionResolveIsCurrent,
   documentTurnMayApply,
   focusAfterAvailableConservation,
   formatPilotFacingProvenance,
   pendingCandidateRestoreIsCurrent,
+  pendingCandidateRestoreOwnsContext,
   resolveTravailDocumentPresentation,
   type DocumentComparePayload,
   type RevisionRow,
@@ -1617,7 +1619,18 @@ export default function ProjectPage() {
   }) {
     const prepId = preparationIdRef.current;
     if (!prepId) return;
+    const projectIdAtStart = params.projectId;
+    const selectionSeq = ++viewerRequestSeqRef.current;
+    const viewerOpenAtStart = viewerOpenRef.current;
     const head = await resolveObservedHead(prepId, input.doc.document.id);
+    const selectionStillCurrent = documentSelectionResolveIsCurrent({
+      projectIdAtStart,
+      projectIdNow: projectIdRef.current,
+      requestSeqAtStart: selectionSeq,
+      requestSeqNow: viewerRequestSeqRef.current,
+      viewerClosedDuringResolve: viewerOpenAtStart && !viewerOpenRef.current,
+    });
+    if (!selectionStillCurrent) return;
     if (!head) {
       setStatusHint("Aucune révision courante AVAILABLE — reprise Nora impossible.");
       return;
@@ -1639,8 +1652,7 @@ export default function ProjectPage() {
       pendingCandidateId: undefined,
       pendingCandidateContentSha256: undefined,
     });
-    const projectIdAtStart = params.projectId;
-    const seq = ++viewerRequestSeqRef.current;
+    const seq = selectionSeq;
     viewerOpenRef.current = true;
     selectSurface("travail");
     commitViewer({
@@ -2224,8 +2236,24 @@ export default function ProjectPage() {
                     };
                   };
                   if (!cres.ok || cj.status !== "PENDING" || !cj.candidate?.contentMarkdown) {
-                    // SUPERSEDED / denied / missing — clear pending UI, keep focus identities for requalify.
-                    setPendingProposal(null);
+                    // An older error must not clear a newer proposal or its status.
+                    if (
+                      !pendingCandidateRestoreOwnsContext({
+                        projectIdAtStart: projectIdAtRestore,
+                        projectIdNow: projectIdRef.current,
+                        documentId: restored.documentId,
+                        candidateId: restored.pendingCandidateId!,
+                        focusDocumentId: documentFocusRef.current?.documentId ?? null,
+                        focusCandidateId: documentFocusRef.current?.pendingCandidateId,
+                        requestSeqAtStart: restoreSeq,
+                        requestSeqNow: viewerRequestSeqRef.current,
+                      })
+                    ) {
+                      return;
+                    }
+                    setPendingProposal((prev) =>
+                      !prev || prev.candidateId === restored.pendingCandidateId ? null : prev,
+                    );
                     const curFocus = documentFocusRef.current;
                     if (
                       curFocus &&
@@ -2299,7 +2327,23 @@ export default function ProjectPage() {
                     conserveProposal: false,
                   });
                 } catch {
-                  setPendingProposal(null);
+                  if (
+                    !pendingCandidateRestoreOwnsContext({
+                      projectIdAtStart: projectIdAtRestore,
+                      projectIdNow: projectIdRef.current,
+                      documentId: restored.documentId,
+                      candidateId: restored.pendingCandidateId!,
+                      focusDocumentId: documentFocusRef.current?.documentId ?? null,
+                      focusCandidateId: documentFocusRef.current?.pendingCandidateId,
+                      requestSeqAtStart: restoreSeq,
+                      requestSeqNow: viewerRequestSeqRef.current,
+                    })
+                  ) {
+                    return;
+                  }
+                  setPendingProposal((prev) =>
+                    !prev || prev.candidateId === restored.pendingCandidateId ? null : prev,
+                  );
                 }
               })();
             }
diff --git a/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx b/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
index 0c91a4dd..66b581ae 100644
--- a/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
@@ -99,8 +99,9 @@ export function focusAfterAvailableConservation<T extends WorkingDocumentFocus>(
   if (save.status !== "AVAILABLE") return { focus, rebased: false };
   if (!save.documentId || !save.revisionId) return { focus, rebased: false };
   if (focus.documentId !== save.documentId) return { focus, rebased: false };
+  // A missing owner number stays unknown. Never label the new revision with the previous number.
   const revisionNumber =
-    typeof save.revisionNumber === "number" ? save.revisionNumber : focus.sourceRevisionNumber;
+    typeof save.revisionNumber === "number" ? save.revisionNumber : undefined;
   return {
     rebased: true,
     focus: {
@@ -194,6 +195,44 @@ export function documentTurnMayApply(input: {
   return { focus, viewer };
 }

+/**
+ * An in-flight candidate restore may change pending state, focus or status
+ * only while it still refers to the selected project, document and candidate.
+ */
+export function pendingCandidateRestoreOwnsContext(input: {
+  projectIdAtStart: string;
+  projectIdNow: string | null;
+  documentId: string;
+  candidateId: string;
+  focusDocumentId: string | null;
+  focusCandidateId: string | null | undefined;
+  requestSeqAtStart: number;
+  requestSeqNow: number;
+}): boolean {
+  if (!input.projectIdNow || input.projectIdNow !== input.projectIdAtStart) return false;
+  if (input.requestSeqNow !== input.requestSeqAtStart) return false;
+  if (input.focusDocumentId !== input.documentId) return false;
+  if (input.focusCandidateId !== input.candidateId) return false;
+  return true;
+}
+
+/**
+ * A head resolved for one revision may be applied only if that selection
+ * is still the latest one, in the same project, and the pilot did not close it.
+ */
+export function documentSelectionResolveIsCurrent(input: {
+  projectIdAtStart: string;
+  projectIdNow: string | null;
+  requestSeqAtStart: number;
+  requestSeqNow: number;
+  viewerClosedDuringResolve: boolean;
+}): boolean {
+  if (!input.projectIdNow || input.projectIdNow !== input.projectIdAtStart) return false;
+  if (input.requestSeqNow !== input.requestSeqAtStart) return false;
+  if (input.viewerClosedDuringResolve) return false;
+  return true;
+}
+
 /**
  * A restored candidate is shown only if the project, document, candidate and
  * viewer generation are still the ones captured before the request returned.
@@ -210,10 +249,20 @@ export function pendingCandidateRestoreIsCurrent(input: {
   candidateDocumentId: string | null;
   candidateMarkdown: string | null;
 }): boolean {
-  if (!input.projectIdNow || input.projectIdNow !== input.projectIdAtStart) return false;
-  if (input.requestSeqNow !== input.requestSeqAtStart) return false;
-  if (input.focusDocumentId !== input.documentId) return false;
-  if (input.focusCandidateId !== input.candidateId) return false;
+  if (
+    !pendingCandidateRestoreOwnsContext({
+      projectIdAtStart: input.projectIdAtStart,
+      projectIdNow: input.projectIdNow,
+      documentId: input.documentId,
+      candidateId: input.candidateId,
+      focusDocumentId: input.focusDocumentId,
+      focusCandidateId: input.focusCandidateId,
+      requestSeqAtStart: input.requestSeqAtStart,
+      requestSeqNow: input.requestSeqNow,
+    })
+  ) {
+    return false;
+  }
   if (!input.candidateDocumentId || input.candidateDocumentId !== input.documentId) return false;
   return typeof input.candidateMarkdown === "string" && input.candidateMarkdown.length > 0;
 }
diff --git a/projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts
index 0dcf8ebc..08b4e0b7 100644
--- a/projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts
@@ -1,9 +1,11 @@
 import { describe, expect, it } from "vitest";
 import {
+  documentSelectionResolveIsCurrent,
   documentTurnMayApply,
   focusAfterAvailableConservation,
   formatPilotFacingProvenance,
   pendingCandidateRestoreIsCurrent,
+  pendingCandidateRestoreOwnsContext,
   resolveTravailDocumentPresentation,
   revisionCurrencyFromIdentity,
   revisionCurrencyLabel,
@@ -100,6 +102,19 @@ describe("documentary focus after conservation", () => {
       }).rebased,
     ).toBe(false);
   });
+
+  it("does not attach the previous revision number when D4 omits the new one", () => {
+    const next = focusAfterAvailableConservation(stale, {
+      status: "AVAILABLE",
+      documentId: "doc-1",
+      revisionId: "rev-2",
+    });
+    expect(next.rebased).toBe(true);
+    expect(next.focus?.sourceRevisionId).toBe("rev-2");
+    expect(next.focus?.observedHeadRevisionId).toBe("rev-2");
+    expect(next.focus?.sourceRevisionNumber).toBeUndefined();
+    expect(next.focus?.observedHeadRevisionNumber).toBeUndefined();
+  });
 });

 describe("viewer currency is not inferred from exact resolution", () => {
@@ -242,6 +257,61 @@ describe("document turn scope and candidate restore", () => {
       }),
     ).toBe(false);
   });
+
+  it("lets a stale restore error leave a newer candidate untouched", () => {
+    const newer = {
+      projectIdAtStart: "proj-1",
+      projectIdNow: "proj-1",
+      documentId: "doc-a",
+      candidateId: "cand-old",
+      focusDocumentId: "doc-b",
+      focusCandidateId: "cand-new",
+      requestSeqAtStart: 4,
+      requestSeqNow: 6,
+    };
+    expect(pendingCandidateRestoreOwnsContext(newer)).toBe(false);
+    expect(
+      pendingCandidateRestoreOwnsContext({
+        ...newer,
+        documentId: "doc-b",
+        candidateId: "cand-new",
+        focusDocumentId: "doc-b",
+        focusCandidateId: "cand-new",
+        requestSeqAtStart: 6,
+        requestSeqNow: 6,
+      }),
+    ).toBe(true);
+  });
+
+  it("drops a head resolved after the pilot selected another revision", () => {
+    expect(
+      documentSelectionResolveIsCurrent({
+        projectIdAtStart: "proj-1",
+        projectIdNow: "proj-1",
+        requestSeqAtStart: 3,
+        requestSeqNow: 4,
+        viewerClosedDuringResolve: false,
+      }),
+    ).toBe(false);
+    expect(
+      documentSelectionResolveIsCurrent({
+        projectIdAtStart: "proj-1",
+        projectIdNow: "proj-1",
+        requestSeqAtStart: 4,
+        requestSeqNow: 4,
+        viewerClosedDuringResolve: true,
+      }),
+    ).toBe(false);
+    expect(
+      documentSelectionResolveIsCurrent({
+        projectIdAtStart: "proj-1",
+        projectIdNow: "proj-1",
+        requestSeqAtStart: 4,
+        requestSeqNow: 4,
+        viewerClosedDuringResolve: false,
+      }),
+    ).toBe(true);
+  });
 });

 describe("R1/F1 resolveReviseTarget — client markdown never authoritative", () => {
~~~~
