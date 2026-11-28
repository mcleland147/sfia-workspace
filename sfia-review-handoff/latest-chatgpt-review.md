# SFIA Review Pack — Full — Lot 1 intégrité du cycle documentaire

## 0. Identité

| Champ | Valeur |
|---|---|
| Date | 2026-11-28T09:20:09+0100 |
| Cycle | 08 — Delivery / implémentation |
| Profil | Critical |
| Projet | SFIA Studio Next · R5 IN PROGRESS · ML5 OPEN |
| Lot | 1 uniquement — DOC-A / DOC-B / DOC-C |
| Livraison | LIVRAISON 1 NOT ACCEPTED · NO RELEASE · NOT ADOPTED |
| Base produit | `0ae9e1f7aaee3658eb3e9a135523e83a72631b31` |
| Tree | `842537274c3ad0b2f672c9ebe2e9e0f54c55d968` |
| Main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
| Worktree | `/Users/morris/Projects/sfia-wt-next-ml5-20261123` |
| Docs | `b93cf033dc906c35ff5aecd949590c9d5d46d11b` (lue, non mergée) |
| Handoff d'entrée | `515561e7e5bf395907bf4ec0f4c9990a36dc4aa7` blob `7dddb39b87405de30d997f2e8a6d4900ae56b1d2` |
| Delivery | `DELIV-2026-11-28-ML5-DOCUMENTARY-LIFECYCLE-DEV` |
| SHA final | non attribué — diff local non committé |
| Content coverage | N/A — aucune couverture de contenu produit |
| CKC 08 | absent. Fallback `02-fifteen-cycles-synthetic-map.md` blob `aa574926dc6c597675f9fe9257f2820c2a11ed5e` · method-candidate · guidance seulement |
| Verdict | READY WITH RESERVES |

## 1. Mandat

Rendre le parcours naturel V1 → proposition V2 inspectée → conservation V2 → proposition V3 depuis V2 → conservation V3 fiable, sous une seule identité documentaire et dans le même fil. Ne pas reconstruire D4. Ne pas engager les lots 2 à 7. Pas de commit, push, PR, merge, ni promotion RECETTE.

## 2. Git Truth Check

Contrôle du 2026-11-28T09:01+01, reconfirmé à 09:20+01.

- Remote `origin` = `mcleland147/sfia-workspace`.
- HEAD local = HEAD distant produit = `0ae9e1f7aaee3658eb3e9a135523e83a72631b31`.
- Tree inchangé `84253727…`. Merge-base avec main = `997897fd…`.
- Au départ : aucun fichier staged, aucune modification produit. Seuls des fichiers `.tmp-sfia-review/` non suivis.
- Worktree RECETTE détaché `…/sfia-workspace-next-ml5-recette-build-0ae9e1f7aaee` toujours sur `0ae9e1f7`.
- Worktree handoff `…/sfia-review-handoff-m5a-gi-20261023` sur `sfia/review-handoff`.
- Aucun stash, reset, ni nettoyage. La branche documentaire n'a pas été mergée.

## 3. Environnements

| Lane | Identité observée |
|---|---|
| DEV | next PID 55011, cwd de ce worktree, `:3100`. PostgreSQL `sfia-next-dev-pg` `:5433`. Non utilisé pour les tests mutatifs. |
| RECETTE | next PID 77113, cwd du worktree `0ae9e1f7`, `:3200`, BUILD `p0S18hf` encore servi à 09:20. Aucun restart, aucune écriture. |
| Tests | Vitest réécrit la cible vers `sfia_next_e2e` sur `:5433` et refuse l'autre nom. Playwright isolé `:3101` / `sfia_next_e2e`. `OPENAI_API_KEY` vidé pour ce processus. Serveur `:3101` arrêté après la preuve. |

## 4. Sources lues

- Diagnostic `515561e7` §§3, 9, 10, 11, 12, 13.
- PV `ed38685a` blob `88474002` : T09, T09 bis, DOC-A à DOC-F.
- Suivi `b93cf033` blob `ea10bc2f` (v0.1), lu par `git show`, non modifié.
- Code d'entrée aux points cités : `page.tsx` focus après `AVAILABLE`, `resolveReviseTarget`, `sourceIsHistorical`, `revisionCurrencyLabel`, bannière `versionSource === "exact"`.
- Tests existants : `documents-nora-v2-v4.spec.ts` (sas puis historique V2→V4, pas deux révisions naturelles), `ml5-pending-proposal-viewer.test.ts` (logique de bannière sans course navigateur), `documents-historical-revise.pg.test.ts`, `documents-proposal-candidate.pg.test.ts`, `documents-p0-hauth-pdoc.pg.test.ts`, `ml5-conserve-only-nominal.pg.test.ts`, `ml5-documentary-autonomy.pg.test.ts`, `documents-surfaces-projection.test.ts`.
- `ml5-documentary-boundary-browser.spec.ts` lu comme qualification LIVE, non exécuté.
- Contrats visuels réutilisés : lecture, Travail/visionneuse, historique, révision historique, proposition. Aucune maquette reconstruite. Pas de verdict F2.

## 5. Reproduction avant correction

Cause de code confirmée par lecture, puis par un test qui fige le comportement de `resolveReviseTarget` :

- Un focus dont `sourceRevisionId` et `observedHeadRevisionId` restent sur la révision précédente, alors que D4 a déjà une tête plus récente, fait choisir cette ancienne source comme base. Le serveur applique alors, légitimement, la garde historique.
- La projection de proposition posait `versionSource: "exact"` et l'identifiant de la révision source sur la visionneuse, sans incrémenter le numéro de requête. Une lecture D4 encore en vol pouvait remplacer le corps du candidat par celui de la source. Le bandeau « version plus récente » suivait `exact`, y compris quand la révision citée était déjà la tête, et quand la tête était inconnue (`revisionCurrencyLabel(n, null)` valait « Historique »).
- Le payload HTTP exact de T09 bis n'est toujours pas archivé. Le lien transactionnel avec ce tour reste probable. Le mécanisme, lui, est confirmé et maintenant corrigé sur le chemin client.

## 6. Contrat technique retenu

- D4 reste le seul propriétaire. Aucune garde `BASE_STALE`, conflit de tête, autorisation historique, empreinte ou isolation n'est retirée.
- `focusAfterAvailableConservation` ne rebase que si le résultat est `AVAILABLE`, porte le même `documentId`, et fournit un `revisionId`. La source et la tête observée deviennent cette révision. Le candidat et l'autorisation historique sont retirés.
- Une réponse de tour plus ancienne que le tour courant ne réécrit ni le focus ni la visionneuse.
- Une proposition n'a pas de `revisionId` durable. Son corps est celui du candidat scellé. Une lecture D4 antérieure est ignorée parce que le numéro de requête a avancé.
- Corps de proposition absent : visionneuse indisponible, pas de substitution par V1.
- Consultation d'une autre version pendant qu'une proposition existe : bannière « autre version », action « Revenir à la proposition ».
- Monnaie : identifiants D4. Référence exacte égale à la tête = courante. Tête absente = non vérifiée. Le mode `exact` reste visible comme « révision citée », sans impliquer l'historique.
- ACK perdu avant persistance du nouveau focus : pas de rebase automatique vers une tête qu'on ne peut pas attribuer à cette conservation. La garde historique reste. C'est voulu.

## 7. Changements

Fichiers modifiés, non commités :

- `web/src/app/projects/[projectId]/page.tsx`
- `web/src/components/figma/DocumentSurfaces.tsx`
- `web/src/components/figma/TravailViewer.tsx`
- `web/src/domains/conversation/fixture-semantic-qualify.ts` — extension de lane de test seulement : une seconde proposition distincte, « Je souhaite préciser le suivi entre les centres. » La conservation continue d'enregistrer le candidat scellé, pas ce texte fixe.
- `web/tests/unit/documents-surfaces-projection.test.ts`
- `web/tests/e2e/document-revision-lifecycle.spec.ts` (nouveau, non suivi)
- `construction/delivery-history.md`
- `construction/as-built-ensemble-06-journal-documents-20261120.md` — section datée ajoutée, preuves historiques laissées en place

Les fonctions pures vivent dans `DocumentSurfaces.tsx`, déjà importé par la page. Un import de `document-act.ts` depuis la page client a été retiré : il tirait `document-command` puis le client PostgreSQL (`fs`) dans le bundle navigateur. Le premier essai navigateur l'a montré par une erreur de build. `document-act.ts` et `service.ts` ne sont pas modifiés. Les gardes serveur restent celles de `0ae9e1f7`.

DOC-D reporté. Le titre est le titre métier produit par Nora. Retirer « V1 » par une règle de caractères serait aveugle et hors du contrat sémantique. Aucun renommage d'Equipéo, aucune migration.

DOC-E reporté. « Propositions expirées » est le libellé de tout groupe de choix devenu non actionnable. Distinguer « conservée » exigerait un état de projection que ce lot ne crée pas.

## 8. Preuves

| Preuve | Résultat |
|---|---|
| Unit `documents-surfaces-projection.test.ts` | 18 passed, dont reproduction du focus périmé et rebase vers la tête écrite |
| Unit `document-act.test.ts` + `ml5-pending-proposal-viewer.test.ts` | 8 passed (avant déplacement des fonctions pures ; le fichier `document-act` n'a plus ces fonctions, les assertions sont dans le test de projection rejoué après) |
| PG `documents-historical-revise` | 4 passed — historique, conflit, base stale |
| PG `ml5-documentary-autonomy` | 3 passed |
| PG `ml5-conserve-only-nominal` | 1 passed |
| PG `documents-proposal-candidate` | 1 passed |
| PG `documents-p0-hauth-pdoc` | 1 passed |
| BROWSER `document-revision-lifecycle.spec.ts` | 1 passed (24,2 s) |
| Lint `next lint` sur les fichiers touchés | exit 0, avertissements préexistants de `page.tsx`, aucune nouvelle erreur |
| `git diff --check` | clean |
| Fournisseur | aucune émission. Clé vidée sur le processus `:3101`. |

Le lanceur webpack de `scripts/e2e-web-server.sh` n'a pas servi `/login` : `Module parse failed` sur `node_modules/@cursor/sdk/dist/esm/agent.d.ts.map`, indépendant de ce lot. La preuve navigateur a été prise sur `:3101`, base `sfia_next_e2e`, `STUDIO_E2E=1`, `STUDIO_FORCE_NORA_FIXTURE=1`, avec Turbopack. Ce n'est pas le lanceur canonique. Le parcours client, D4 et PostgreSQL de test sont réels. Nora est substituée.

Captures locales, non accessibles sur Git :

| Fichier | SHA-256 |
|---|---|
| `.tmp-sfia-review/lot1-captures/01-proposition-v2.png` | `58d4d95bd240298233e141eb7b942b942c884179f6b04e93b3e4bebdbf0c9fac` |
| `02-v2-courante.png` | `39e57da2c1e57672c260f34b7a7a1e5356746a77bc65afc9e023f67f01d37e6a` |
| `03-proposition-v3.png` | `9d2913adf3cc70ca5cc69180a6e765f2bbd9149d76cd8621013af05f223f5184` |
| `04-v3-courante.png` | `770e7d9b40a5d472e3a3974c20b36f8e1bfd62b8e1f10df9ca381615d563b511` |
| `05-historique-v1-v2-v3.png` | `8a69e9d2056d6b49c047a97f7ff4bef010fc3df31a556084638658965e2265d1` |
| `06-revision-historique-gouvernee.png` | `d27ff2c25fe059ccc1b51fa07d6ddd2182eda06463ed75e905bc82633e992399` |

## 9. Oracles

| Oracle | Couvert par |
|---|---|
| A01–A08 création, inspection V2, pas de V2 durable avant conservation, conservation | BROWSER |
| A09 pas de faux historique après V2 | BROWSER, badge COURANTE, bannière absente |
| A10–A15 V3 depuis le même fil, sans reload ni injection d'identifiant, un document, trois révisions | BROWSER |
| A16 V1 et V2 relues intactes | BROWSER |
| A17 liens exacts | partiel : la lecture historique ouvre le corps V1 ou V2 cité. Pas de second fil de citations Nora rejoué. |
| A18 reload | BROWSER, V3 toujours courante |
| B empreinte et identité | le serveur conserve le candidat scellé (chemin inchangé, PG conserve-only passed). Le navigateur compare les textes distinctifs V1 / V2 / V3. L'empreinte n'est pas recalculée dans le spec. |
| C01 lecture sans mutation | BROWSER, pas de V4 pendant les lectures |
| C02 vraie base historique | BROWSER, bouton « Repartir de la v1 » exigé |
| C03 refus | pas de bouton de refus dans le fixture. Sans clic, aucune V4. Le refus explicite reste couvert par les tests PG historiques. |
| C04 autorisation valide | PG historique, non rejoué dans le nouveau spec |
| C05–C07 concurrence, autorisation obsolète, double conservation | PG existants passed, code serveur non modifié |
| C08 candidat consommé / hash | PG conserve-only (traces `CANDIDATE_CONSUMED`, `CANDIDATE_CLIENT_HASH_MISMATCH`) |
| C09 corps absent | code : visionneuse indisponible. Pas de spec navigateur dédié. |
| C10 autre projet | non rejoué ici ; garde D4 préexistante, non modifiée |
| C11 exacte et courante | unit + BROWSER après conservation |
| C12 tête inconnue | unit `Non vérifiée`, bannière nulle |
| C13 autre version pendant une proposition | unit `other-version`. Le spec navigateur ne clique pas ce retour. |
| C14 réponse tardive | le tour porte un numéro ; une réponse plus ancienne ne réapplique pas le focus. Pas de course réelle injectée dans le navigateur. |
| D non-régression | PG documentaires ci-dessus. Le spec `documents-nora-v2-v4` n'a pas été rejoué. |

## 10. Fake / Real

- DET : focus, monnaie, bannière.
- PG : PostgreSQL de test `sfia_next_e2e`, gardes réelles.
- BROWSER : vrai navigateur, vraie orchestration, Nora fixture.
- LIVE : non exécuté. Claim interdit : END-TO-END REAL PROVEN, READY FOR REAL, recette acceptée, MP closes, ADOPTED.

Claims retenus : IMPLEMENTED sur le focus, la visionneuse de proposition et la monnaie. COVERAGE VERIFIED pour les tests listés. BEHAVIOR PROVEN pour le parcours fixture V1→V2→V3 et pour les gardes PG rejouées.

## 11. Réserves

1. Le lanceur webpack canonique `:3101` est bloqué par le parse de `@cursor/sdk`. La preuve utilise Turbopack sur la même base et le même port.
2. DOC-D et DOC-E reportés au lot UX, avec la raison ci-dessus.
3. Le payload T09 bis n'est pas rejoué ; le mécanisme l'est.
4. C03, C04, C10, C13 navigateur et C14 en course réelle ne sont pas tous rejoués dans le nouveau spec.
5. Aucun commit. Le diff peut encore changer avant un GO de publication produit.

## 12. Décisions Morris

- Relire le diff local avant tout commit ou push produit.
- Laisser DOC-D et DOC-E au lot 7, sauf arbitrage contraire.
- Ne pas promouvoir RECETTE sur ce diff.
- Ne pas ouvrir le lot 2 tant que cette revue n'est pas acceptée.
- Ne clôturer aucune MP. Ne pas accepter la Livraison 1.

## 13. Hors lot, signalé et non corrigé

Compteurs Projet, allocation RECETTE, FinOps, dictée, activité transverse, capitalisation, comparaison enrichie, navigation, Figma global.

## 14. Verdict

READY WITH RESERVES

Le parcours central V1 → V2 inspectée → V3 est démontré dans le navigateur de test, et les gardes historiques PG restent vertes. Les réserves portent sur le lanceur webpack, les oracles négatifs non tous rejoués dans le nouveau spec, et DOC-D/E reportés. Ce n'est pas une autorisation de commit, de push, ni de RECETTE.

## 15. Diff local et fichier nouveau

Le diff `git diff` et le spec nouveau suivent. Ils sont la source de revue tant que le produit n'est pas publié.

## Annexe A — git diff projects/sfia-studio-next

```diff
diff --git a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md
index 792a0bd6..eadc24f3 100644
--- a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md
+++ b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-documents-20261120.md
@@ -29,3 +29,13 @@ DOC-TECH-15 NOT RUN · DOC-TECH-16 PARTIAL · Journal R-01…R-11 · Sas KNOWN G

 - As-built Journal historique : `as-built-ensemble-06-journal-20261119.md` (ne pas réécrire).
 - Handoff RECETTE : `sfia/review-handoff@3bc3af40` blob `3724604c…`.
+
+## 2026-11-28 — cycle documentaire reproductible (lot 1, DEV local)
+
+Section factuelle du candidat local non committé. Elle ne remplace pas les preuves historiques ci-dessus. Base `0ae9e1f7aaee3658eb3e9a135523e83a72631b31`. Pas de migration. RECETTE non touchée.
+
+1. Après une conservation `AVAILABLE` qui renvoie l'identifiant de révision, le focus de travail aligne la source et la tête observée sur cette révision, et retire le candidat ainsi que l'autorisation historique. Une sauvegarde sans identifiant, un autre document, ou un statut autre que `AVAILABLE` ne rebasent pas le focus.
+2. La visionneuse d'une proposition affiche le corps du candidat, sans identifiant de révision durable, et invalide une lecture D4 encore en vol. Si le corps manque, l'ancienne version n'est pas affichée à la place.
+3. Le bandeau « version plus récente » ne s'appuie plus sur le seul mode `exact`. Une référence exacte qui est la tête D4 est courante. Une tête inconnue est « non vérifiée ». Une autre version consultée pendant qu'une proposition existe reste distincte, et la proposition peut être réaffichée.
+4. Une vraie base historique continue d'exiger la confirmation serveur. `BASE_STALE`, le conflit de tête et l'idempotence de conservation ne sont pas assouplis.
+5. Le titre métier n'est pas réécrit, et Equipéo n'est pas renommé. Une proposition déjà consommée n'a pas de nouvel état durable : le libellé générique « propositions expirées » des choix non actionnables reste hors de ce lot.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 026bc170..e7f0c1ea 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -5562,3 +5562,17 @@ Cette synchronisation ne modifie ni code ni RECETTE/STABLE, ne clôt pas les ré
 - **WEB**: OFF
 - **NO RELEASE** · RECETTE protégée · livraison 2 non engagée

+## DELIV-2026-11-28-ML5-DOCUMENTARY-LIFECYCLE-DEV
+
+- **Date** : 2026-11-28T09:20+01:00
+- **Cycle** : 08 Delivery / Critical · lot 1 uniquement
+- **Base** : `0ae9e1f7aaee3658eb3e9a135523e83a72631b31` · tree `842537274c3ad0b2f672c9ebe2e9e0f54c55d968`
+- **SHA final** : non attribué — changements locaux non committés, non poussés
+- **Nature** : correctif de fiabilité du cycle documentaire, compatible avec les invariants D4
+- **Schéma** : aucun changement · 027 inchangé
+- **Build DEV de production** : non produit
+- **Preuve navigateur** : Playwright isolé `:3101` / `sfia_next_e2e`, Nora substituée, `document-revision-lifecycle.spec.ts` 1 passed. Le serveur webpack canonique n'a pas démarré (parse préexistant de `@cursor/sdk` `agent.d.ts.map`) ; le parcours a été exécuté sur le même port et la même base avec Turbopack.
+- **Limites** : pas de fournisseur réel ; pas de promotion RECETTE ; DOC-D et DOC-E reportés ; lots 2 à 7 non engagés
+- **Versioning** : NO RELEASE · STABLE NOT AVAILABLE · aucune version sémantique officielle
+- **Statut** : DEV LOCAL — REVIEW REQUIRED — NOT ADOPTED
+
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index a33f573e..5d6996eb 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -34,7 +34,9 @@ import {
   DocumentCompareSurface,
   DocumentHistorySurface,
   DocumentReadSurface,
+  focusAfterAvailableConservation,
   formatPilotFacingProvenance,
+  resolveTravailDocumentPresentation,
   type DocumentComparePayload,
   type RevisionRow,
   revisionCurrencyLabel,
@@ -413,6 +415,8 @@ export default function ProjectPage() {
   const pendingDocumentOpenIdRef = useRef<string | null>(null);
   /** C1 — ignore stale async viewer responses after A→B / close / project change. */
   const viewerRequestSeqRef = useRef(0);
+  /** Increments at each send. A late response must not restore an older document focus. */
+  const documentTurnGenRef = useRef(0);
   const viewerOpenRef = useRef(false);
   /** Invalidates in-flight Journal→Travail deep-links when the user navigates away. */
   const surfaceNavGenRef = useRef(0);
@@ -706,6 +710,7 @@ export default function ProjectPage() {
     seq: number;
     projectIdAtStart: string;
     revisionNumber?: number | null;
+    knownHeadRevisionId?: string | null;
   }) {
     // Consultation is recorded only after a successful D4 read (available content).
     const prepId = preparationIdRef.current;
@@ -868,6 +873,9 @@ export default function ProjectPage() {
           revisionId: resolvedRevisionId,
           revisionNumber: resolvedRevisionNumber,
           versionSource: input.versionSource,
+          knownHeadRevisionId:
+            input.knownHeadRevisionId ??
+            (input.versionSource === "current" ? resolvedRevisionId : null),
           markdown,
           available: Boolean(markdown),
           unavailableReason: markdown
@@ -1649,6 +1657,7 @@ export default function ProjectPage() {
       titleHint: input.doc.document.title,
       revisionId: historical ? input.sourceRevisionId : null,
       versionSource: historical ? "exact" : "current",
+      knownHeadRevisionId: head.id,
       seq,
       projectIdAtStart,
     });
@@ -2243,15 +2252,23 @@ export default function ProjectPage() {
                     revisionNumberHint: headNum != null ? headNum + 1 : null,
                   });
                   setStatusHint("Examiner une proposition de Nora");
+                  viewerRequestSeqRef.current += 1;
+                  viewerOpenRef.current = true;
                   setViewer({
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
@@ -2713,6 +2730,7 @@ export default function ProjectPage() {
     const raw = (overrideText ?? draft).trim();
     const text = mergeDraftWithDossierAttachment(raw, dossierAttachment).trim();
     if (!text || !preparationId) return;
+    const turnGen = ++documentTurnGenRef.current;
     const fromChoice = opts?.fromChoice === true;
     const sentVersion = fromChoice ? null : draftVersionRef.current;
     const pendingMeta: Pick<
@@ -2853,7 +2871,9 @@ export default function ProjectPage() {
       } catch {
         j = { errorCategory: "RESPONSE_PARSE_FAILED" };
       }
-      if (res.ok) {
+      if (res.ok && turnGen !== documentTurnGenRef.current) {
+        // A newer turn started. Do not restore this response's focus or viewer.
+      } else if (res.ok) {
         const prepared = j.preparedContract as
           | {
               contractId: string;
@@ -2908,7 +2928,13 @@ export default function ProjectPage() {
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
@@ -2983,6 +3009,9 @@ export default function ProjectPage() {
           const match = documentsRef.current.find((d) => d.document.id === docId);
           const title = pendingCand.title || match?.document.title || "Document";
           const revisionHint = headNum != null ? headNum + 1 : null;
+          const baseRevisionNumber = documentFocusRef.current?.sourceRevisionNumber ?? headNum;
+          const knownHeadId =
+            documentFocusRef.current?.observedHeadRevisionId ?? match?.latestRevision?.id ?? null;
           // Single coherent object — Candidate badge only with this exact markdown.
           setPendingProposal({
             candidateId: pendingCand.candidateId,
@@ -2990,7 +3019,8 @@ export default function ProjectPage() {
             documentId: docId,
             title,
             contentMarkdown: pendingCand.contentMarkdown,
-            sourceRevisionId: documentFocusRef.current?.sourceRevisionId ?? null,
+            sourceRevisionId:
+              pendingCand.sourceRevisionId ?? documentFocusRef.current?.sourceRevisionId ?? null,
             revisionNumberHint: revisionHint,
           });
           if (documentFocusRef.current) {
@@ -3014,21 +3044,55 @@ export default function ProjectPage() {
               pendingCandidateContentSha256: pendingCand.contentSha256,
             });
           }
-          // Always project the candidate body — never leave V1 under a Candidate badge.
+          // Drop any in-flight D4 read of the source revision so it cannot replace the candidate.
+          viewerRequestSeqRef.current += 1;
+          viewerOpenRef.current = true;
           setViewer({
             kind: "document",
             documentId: docId || match?.document.id || "document",
             title,
-            revisionId: documentFocusRef.current?.sourceRevisionId ?? match?.latestRevision?.id ?? null,
-            revisionNumber: revisionHint,
-            versionSource: "exact",
+            revisionId: null,
+            revisionNumber: null,
+            proposalCandidateId: pendingCand.candidateId,
+            knownHeadRevisionId: knownHeadId,
+            baseRevisionNumber: baseRevisionNumber ?? null,
             markdown: pendingCand.contentMarkdown,
             available: true,
           });
           setStatusHint("Examiner une proposition de Nora");
+        } else if (
+          save?.reason === "PROPOSAL_PENDING_CONSERVATION" &&
+          pendingCand?.candidateId
+        ) {
+          viewerRequestSeqRef.current += 1;
+          viewerOpenRef.current = true;
+          setViewer({
+            kind: "document",
+            documentId:
+              pendingCand.documentId ||
+              save.documentId ||
+              documentFocusRef.current?.documentId ||
+              "document",
+            title: pendingCand.title || "Document",
+            revisionId: null,
+            revisionNumber: null,
+            markdown: null,
+            available: false,
+            unavailableReason:
+              "Proposition indisponible — l'ancienne version n'est pas affichée à sa place.",
+          });
+          setStatusHint("Proposition indisponible");
         } else if (save?.status === "AVAILABLE") {
           setPendingProposal(null);
-          if (documentFocusRef.current) {
+          const conserved = focusAfterAvailableConservation(documentFocusRef.current, {
+            status: save.status,
+            documentId: save.documentId,
+            revisionId: save.revisionId,
+            revisionNumber: save.revisionNumber,
+          });
+          if (conserved.rebased && conserved.focus) {
+            applyDocumentFocus(conserved.focus);
+          } else if (documentFocusRef.current) {
             applyDocumentFocus({
               ...documentFocusRef.current,
               conserveProposal: false,
@@ -3046,9 +3110,9 @@ export default function ProjectPage() {
           if (
             viewer?.kind === "document" &&
             typeof save.documentId === "string" &&
-            typeof (save as { revisionId?: string }).revisionId === "string"
+            typeof save.revisionId === "string"
           ) {
-            const newRevId = (save as { revisionId: string }).revisionId;
+            const newRevId = save.revisionId;
             const newRevNum =
               typeof save.revisionNumber === "number" ? save.revisionNumber : null;
             const seq = ++viewerRequestSeqRef.current;
@@ -3060,6 +3124,9 @@ export default function ProjectPage() {
                 revisionId: newRevId,
                 revisionNumber: newRevNum,
                 versionSource: "current",
+                proposalCandidateId: null,
+                knownHeadRevisionId: newRevId,
+                baseRevisionNumber: null,
                 available: false,
                 unavailableReason: "Chargement de la version enregistrée…",
               };
@@ -3068,7 +3135,8 @@ export default function ProjectPage() {
               documentId: save.documentId,
               titleHint: viewer.title,
               revisionId: newRevId,
-              versionSource: "exact",
+              versionSource: "current",
+              knownHeadRevisionId: newRevId,
               seq,
               projectIdAtStart,
             });
@@ -3227,7 +3295,7 @@ export default function ProjectPage() {
   const readCurrency =
     readingRevisionNumber != null
       ? revisionCurrencyLabel(readingRevisionNumber, headRevisionNumber)
-      : "Courante";
+      : "Non vérifiée";

   const documentHero =
     surface !== "document"
@@ -3252,14 +3320,26 @@ export default function ProjectPage() {
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
@@ -3404,6 +3484,28 @@ export default function ProjectPage() {
                 resource={viewer}
                 enlarged={viewerEnlarged}
                 documentFocusBanner={travailDocumentFocusBanner}
+                documentCurrency={travailPresentation?.currency ?? null}
+                onRestoreProposal={
+                  pendingProposal
+                    ? () => {
+                        viewerRequestSeqRef.current += 1;
+                        viewerOpenRef.current = true;
+                        setViewer({
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
diff --git a/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx b/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
index 950313ba..33c87041 100644
--- a/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/DocumentSurfaces.tsx
@@ -41,15 +41,162 @@ export type DocumentComparePayload = {
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
+export function resolveTravailDocumentPresentation(input: {
+  proposalActive: boolean;
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
+  const showingProposal =
+    input.proposalActive &&
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
@@ -565,7 +712,7 @@ export function DocumentReadSurface(props: {
   markdown: string | null;
   missing?: string | null;
   revisionLabel: string;
-  currency: "Courante" | "Historique";
+  currency: "Courante" | "Historique" | "Non vérifiée";
   loading?: boolean;
   onRequestRevision: () => void;
   onHistory: () => void;
@@ -700,13 +847,7 @@ export function DocumentHistorySurface(props: {
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
@@ -733,12 +874,9 @@ export function DocumentHistorySurface(props: {
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
@@ -751,7 +889,10 @@ export function DocumentHistorySurface(props: {
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
index db0d0b84..665c6387 100644
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
@@ -128,7 +147,9 @@ export function TravailViewer(props: {
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
@@ -206,6 +227,20 @@ export function TravailViewer(props: {
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
diff --git a/projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts
index 7c470ab6..c5e22da1 100644
--- a/projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/documents-surfaces-projection.test.ts
@@ -1,6 +1,9 @@
 import { describe, expect, it } from "vitest";
 import {
+  focusAfterAvailableConservation,
   formatPilotFacingProvenance,
+  resolveTravailDocumentPresentation,
+  revisionCurrencyFromIdentity,
   revisionCurrencyLabel,
 } from "@/components/figma/DocumentSurfaces";
 import {
@@ -22,7 +25,135 @@ describe("revisionCurrencyLabel", () => {
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
+      proposalMarkdown: candidate,
+      viewerMarkdown: candidate,
+      revisionId: null,
+    });
+    expect(shown.banner).toBe("proposal");
+    expect(shown.currency).toBe("Proposition");
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
   });
 });
```

## Annexe B — document-revision-lifecycle.spec.ts

```ts
import { expect, test } from "@playwright/test";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { constituteAndCreateProject, openNewPreparation } from "./helpers/g4-chat-first";

/**
 * Lot 1 — natural V1 → inspected V2 → V3 in one Nora thread.
 * Fixture Nora (STUDIO_E2E), isolated :3101 / sfia_next_e2e. No provider call.
 * The second revise utterance exists only in the fixture lane.
 */
test("cycle documentaire V1 → V2 inspectée → V3 sans faux historique", async ({ page }) => {
  test.setTimeout(240_000);
  const shots = path.resolve(process.cwd(), "../../../.tmp-sfia-review/lot1-captures");
  await mkdir(shots, { recursive: true });

  await page.goto("/login");
  await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
  await page.waitForURL("**/portfolio");
  await openNewPreparation(page);
  await constituteAndCreateProject(page, {
    name: `CycleDoc ${Date.now()}`,
    summary: "v1-v2-v3",
  });
  await page.waitForURL("**/projects/**");

  const composer = page.getByTestId("thread-draft");
  await expect(composer).toBeEnabled({ timeout: 20000 });
  await composer.fill("Rédige un document de synthèse sur les options A et B");
  await page.getByTestId("thread-send").click();
  await expect(page.getByText(/Options A et B/i).first()).toBeVisible({ timeout: 45000 });

  await page.getByTestId("nav-documents").click();
  await expect(page.getByTestId("document-bibliotheque")).toBeVisible({ timeout: 15000 });
  await expect(page.locator('[data-testid^="doc-open-"]')).toHaveCount(1);
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-open").click();
  await expect(page.getByTestId("document-read-body")).toContainText(/Options A et B/i, {
    timeout: 15000,
  });
  await page.getByTestId("doc-action-request-revision").click();
  await expect(page).toHaveURL(/surface=travail/);
  await expect(composer).toBeEnabled({ timeout: 20000 });

  await composer.fill("Je souhaite clarifier les responsabilités entre les trois centres.");
  await page.getByTestId("thread-send").click();
  const viewer = page.getByTestId("travail-viewer");
  await expect(viewer).toBeVisible({ timeout: 45000 });
  await expect(page.getByTestId("travail-viewer-body")).toContainText(/coordinateur consolide/i);
  await expect(page.getByTestId("travail-viewer-body")).not.toContainText(/Options A et B/i);
  await expect(page.getByTestId("document-focus-banner")).toContainText(/PROPOSITION NON ENREGISTRÉE/i);
  await expect(page.getByTestId("travail-viewer-currency")).toHaveText("PROPOSITION");
  await expect(page.getByRole("button", { name: /Repartir de la v/i })).toHaveCount(0);
  await page.screenshot({ path: path.join(shots, "01-proposition-v2.png"), fullPage: true });

  await page.getByTestId("nav-documents").click();
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-versions").click();
  await expect(page.getByTestId("doc-rev-1")).toBeVisible();
  await expect(page.getByTestId("doc-rev-2")).toHaveCount(0);

  await page.getByTestId("studio-rail").getByTestId("nav-travail").click();
  await page.getByRole("button", { name: /Conserver comme nouvelle version/i }).click();
  await expect(page.getByText(/Version v2 conservée|Nouvelle version disponible\s*:\s*v2/i).first()).toBeVisible({
    timeout: 45000,
  });
  await expect(page.getByTestId("travail-viewer-body")).toContainText(/coordinateur consolide/i, {
    timeout: 15000,
  });
  await expect(page.getByTestId("travail-viewer-currency")).toHaveText("COURANTE");
  await expect(page.getByTestId("document-focus-banner")).toHaveCount(0);
  await page.screenshot({ path: path.join(shots, "02-v2-courante.png"), fullPage: true });

  await expect(composer).toBeEnabled({ timeout: 20000 });
  await composer.fill("Je souhaite préciser le suivi entre les centres.");
  await page.getByTestId("thread-send").click();
  await expect(page.getByRole("button", { name: /Repartir de la v/i })).toHaveCount(0);
  await expect(page.getByTestId("travail-viewer-body")).toContainText(/suivi V3 discriminant/i, {
    timeout: 45000,
  });
  await expect(page.getByTestId("travail-viewer-body")).not.toContainText(/coordinateur consolide/i);
  await expect(page.getByTestId("document-focus-banner")).toContainText(/PROPOSITION NON ENREGISTRÉE/i);
  await page.screenshot({ path: path.join(shots, "03-proposition-v3.png"), fullPage: true });

  await page.getByRole("button", { name: /Conserver comme nouvelle version/i }).last().click();
  await expect(page.getByText(/Version v3 conservée|Nouvelle version disponible\s*:\s*v3/i).first()).toBeVisible({
    timeout: 45000,
  });
  await expect(page.getByTestId("travail-viewer-currency")).toHaveText("COURANTE");
  await expect(page.getByTestId("travail-viewer-body")).toContainText(/suivi V3 discriminant/i);
  await page.screenshot({ path: path.join(shots, "04-v3-courante.png"), fullPage: true });

  await page.getByTestId("nav-documents").click();
  await expect(page.locator('[data-testid^="doc-open-"]')).toHaveCount(1);
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-versions").click();
  await expect(page.getByTestId("doc-rev-1")).toBeVisible();
  await expect(page.getByTestId("doc-rev-2")).toBeVisible();
  await expect(page.getByTestId("doc-rev-3")).toBeVisible();
  await expect(page.getByTestId("doc-rev-3")).toContainText(/COURANTE/i);
  await expect(page.getByTestId("doc-rev-1")).toContainText(/HISTORIQUE/i);
  await page.screenshot({ path: path.join(shots, "05-historique-v1-v2-v3.png"), fullPage: true });

  await page.getByTestId("doc-rev-1").click();
  await page.getByTestId("doc-action-read-version").click();
  await expect(page.getByTestId("document-read-body")).toContainText(/Options A et B/i);
  await expect(page.getByTestId("document-read-body")).not.toContainText(/suivi V3 discriminant/i);

  await page.getByTestId("doc-action-history").click();
  await page.getByTestId("doc-rev-2").click();
  await page.getByTestId("doc-action-read-version").click();
  await expect(page.getByTestId("document-read-body")).toContainText(/coordinateur consolide/i);
  await expect(page.getByTestId("document-read-body")).not.toContainText(/suivi V3 discriminant/i);

  await page.getByTestId("doc-action-history").click();
  await page.getByTestId("doc-rev-1").click();
  await page.getByTestId("doc-action-rework-nora").click();
  await expect(page.getByRole("button", { name: /Repartir de la v1/i })).toBeVisible({
    timeout: 45000,
  });
  await page.screenshot({ path: path.join(shots, "06-revision-historique-gouvernee.png"), fullPage: true });
  await page.getByTestId("nav-documents").click();
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-versions").click();
  await expect(page.getByTestId("doc-rev-4")).toHaveCount(0);

  await page.reload();
  await page.getByTestId("nav-documents").click();
  await expect(page.locator('[data-testid^="doc-open-"]')).toHaveCount(1);
  await page.locator('[data-testid^="doc-open-"]').first().click();
  await page.getByTestId("doc-action-versions").click();
  await expect(page.getByTestId("doc-rev-3")).toContainText(/COURANTE/i);
});
```
