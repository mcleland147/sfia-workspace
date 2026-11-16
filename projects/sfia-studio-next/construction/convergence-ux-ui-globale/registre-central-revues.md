# SFIA Studio Next — Registre central de revue et convergence UX/UI (ML4D)

| Métadonnée | Valeur |
|---|---|
| Version | **v0.4 — revue Sas Nora / création de projet et recette post-correctifs, 16/11/2026** · registre D1 factuel évolutif |
| Finalité | Piloter les revues écran par écran, les décisions Morris, les ensembles de travaux et les preuves de recette, au fil de l'eau |
| Cadre | **Un macro-lot ML4D** ; séquences de revue ≠ neuf macro-lots ou neuf cycles Cursor |
| Référence Git contrôlée | `mcleland147/sfia-workspace` · `main@997d4c4e8204993de7107552898c8cc08cd3b0ed` |
| État programme à cette référence | Sur `main@997d4c4e` : ML4C **CLOSED WITH RESERVES** ; ML4D **NOT STARTED — NEXT** (état historique de la Roadmap `main`, non resynchronisé avec les livraisons locales) ; Gate C **OPEN**. Depuis : **UX-003 et UX-004** reçus par Morris avec réserves ; **UX-005 Sas Nora** développé, déployé sur RECETTE et parcouru de bout en bout par Morris, **recette observée avec une réserve mineure**, mais **sans décision formelle distincte de clôture ML4D/Gate C**. Aucun push produit, PR, merge, STABLE ni release établi. |
| Autorité | Morris arbitre le produit, la cible UX, les gates et les GO techniques ; ChatGPT documente et qualifie ; Cursor exécute sous contrat SFIA v2.6 |
| Publication | **v0.4 sur `docs/next-ml4d-registre-revues-20261116`**, mise à jour factuelle D1 du **même registre** (aucune structure concurrente) ; branche documentaire candidate, **non intégrée à `main`**, sans PR/merge ni nouveau gate ; les constats de RECETTE ne constituent pas une validation normative implicite. |

## 1. Règles de fonctionnement

1. **Revue écran par écran.** Morris ouvre l'application de recette et partage captures, parcours, contexte, appréciation et attentes. Comparer à Figma et aux contrats applicables avant d'arrêter une cible.
2. **Un écran = une entrée de parcours, pas nécessairement un composant ou un lot de code.** Les variantes (vide, chargement, erreur, confirmation, mobile, droits, etc.) sont rattachées à leur surface mère. On ne crée pas une ligne par frame Figma sans raison.
3. **Deux registres complémentaires dans ce fichier :** une vue d'avancement des 9 ensembles (§2) et un journal des observations/décisions/actions (§3). Ajouter des sous-écrans au besoin sans imposer une cartographie complète dès le départ.
4. **Décision explicite.** Capturer séparément : constat observable, référence applicable, proposition de cible, **décision Morris**, travaux nécessaires, preuve de recette et statut. Une proposition ChatGPT n'est pas une décision.
5. **Développement regroupé.** Consolider les corrections en ensembles cohérents, selon composants partagés, interfaces et risques. Une revue peut entraîner une correction transversale ; ne pas programmer automatiquement un cycle Cursor par écran.
6. **Frontière ML4D.** Les évolutions UX/UI des capacités déjà construites ML1–ML4 sont IN. Toute modification métier/API/données/autorité ou fonctionnalité non construite est signalée et soumise à arbitrage avant prise en charge. Ne pas anticiper ML5.
7. **Preuves proportionnées.** Comparaison datée Figma ↔ runtime sur viewport et état comparables ; navigation, interaction, responsive et accessibilité vérifiés selon la portée. Les exigences F1/F2 validées restent applicables ; aucun taux universel de diff image n'est présumé.
8. **Contrôle continu.** Réexaminer tôt la navigation et les variantes transverses, même si la revue de synthèse transversale est positionnée en étape 9. Revue faite ≠ code livré ≠ recette vérifiée ≠ Gate C accepté.

## 2. Plan directeur — ordre des revues

**États de revue :** `À ouvrir` · `En revue` · `Cible à arbitrer` · `Cible décidée` · `En réalisation` · `À recetter` · `Vérifié avec réserves` · `Accepté par Morris`.

| Ordre | Ensemble de surfaces | Points à examiner / variantes candidates | État initial | Dernière revue | Réception / preuve |
|---|---|---|---|---|---|
| **01** | **Connexion et accès** | Connexion, retour de session, états d'attente/refus/erreur, déconnexion si attendue ; présentation et responsive | **Accepté par Morris — avec réserves de preuve** | **16/11/2026** | **UX-003** : captures utilisateur desktop nominal + session expirée ; mobile accepté verbalement sans capture comparative ; OAuth LIVE / expiration réelle non prouvés ; voir §3.1 |
| **02** | **Portefeuille / cockpit** | Vue personnelle, liste/cartes projets, préparations ouvertes, accès rapides, états vide/chargement/erreur | **Accepté par Morris — avec réserves de preuve et techniques** | **16/11/2026** | **UX-004** : maquettes Figma validées ; captures RECETTE desktop, rail fixe et défilement examinés ; « Nouveau projet » → sas et fil d'Ariane Intégrations vérifiés par Morris sur le candidat final `b05dacf…` ; voir §3.2 |
| **03** | **Sas / préparation projet** | Ouverture/reprise, dialogue Nora, projection vivante, maturation, nomination, création explicite, passage au projet, continuité | **Vérifié avec réserves — parcours T1→T7 réussi ; acceptation formelle du lot non déclarée** | **16/11/2026** | **UX-005** : code `bd8e1672`, RECETTE `bURdIMEzv8pRSJCzgsiDf`, scénarios Morris conversationnels + création + rafraîchissement PASS ; **UX-005-R01** périmètre résumé appauvri après renommage ; voir §3.3 |
| **04** | **Espace projet — structure commune** | Rail projet, en-tête, navigation entre surfaces, contexte et droits visibles, états d'activation et retours | À ouvrir | — | — |
| **05** | **Travail avec Nora** | Fil, compositeur, réponses et actions, continuité/reprise, scroll, inspection contextuelle, longs échanges | À ouvrir | — | — |
| **06** | **Documents et journal** | Bibliothèque, inspection, versions/révisions, sujets et décisions, points ouverts et états documentaires | À ouvrir | — | — |
| **07** | **Pilotage du projet** | Trajectoire, cycles, CKI, décisions, informations et états disponibles selon les capacités réellement construites | À ouvrir | — | — |
| **08** | **Git, publication et intégrations** | Surfaces Git, inspection/préparation, autorisation/états, paramètres intégrations, erreurs et refus, sans effet réel non autorisé | À ouvrir | — | — |
| **09** | **Variantes et cohérence transverses** | Responsive, clavier/focus, accessibilité, typographie, densité, rail/shell, états vides/attente/erreur, non-régression | À ouvrir | — | — |

> Les surfaces ci-dessus sont des familles de revue, **pas un engagement que toutes leurs variantes sont actuellement implémentées**. Pour chaque entrée, identifier le Figma exact et vérifier la disponibilité réelle dans la version de recette. L'ordre est privilégié mais adaptable par décision Morris.

## 3. Registre des observations, décisions et travaux

**Règle d'identification :** `UX-001`, `UX-002`… identifient uniquement des entrées de suivi documentaire, et **non** des composants du produit.

| ID | Ensemble / écran | Observation et source | Cible / référence | Décision Morris | Travaux / rattachement | État et preuve |
|---|---|---|---|---|---|---|
| `UX-001` | 06 — Documents / inspection | Réserve UAT `S03-02-R01` (15/11) : confort de lecture insuffisant dans l'inspecteur de document pour les contenus longs. **À reproduire sur la recette courante.** | Référence Figma précise et largeur utilisable à confronter en revue | **Non décidée** | À définir après revue ; candidat ergonomie / disposition de l'inspecteur | **Signalement hérité — non requalifié ML4D** ; capture et viewport à associer |
| `UX-002` | 05 — Travail avec Nora / reprise | Réserve UAT `S07-06-R01` (15/11) : retour à Travail repositionné au premier message, plutôt qu'à l'emplacement récent. **À reproduire sur la recette courante.** | Définir le comportement attendu selon reprise, navigation et rafraîchissement | **Non décidée** | À définir après revue ; vérifier impact comportement/état de navigation | **Signalement hérité — non requalifié ML4D** ; scénario de retour à documenter |
| `UX-003` | 01 — Connexion et accès / entrée unifiée | Ancien login avec rail et messages techniques ; besoin de réunir présentation Studio et connexion, sans page vitrine séparée. Incident de RECETTE : LaunchAgent ML4C servait l'ancien écran sur `:3200`, depuis corrigé sans changer le code UX-003. | **Figma validé Morris** : desktop `574:425`, mobile `574:466`, session expirée `574:490` ; une entrée directe Studio/Nora + CTA GitHub. | **Conception validée**, puis **réception UX acceptée** par Morris le 16/11 ; pastille GitHub sombre explicitement acceptée ; desktop non prioritaire pour son usage. | Livraison Cursor locale candidate `a77a3a2bf7b942038d771fdcdd2e7a6410330784`, build `vYeNRRzvLN03N73wmcKkR` ; RECETTE `:3200` rétablie ; **aucun nouveau correctif demandé**. | **Accepté par Morris avec réserves de preuve** : desktop et expiration simulée vus en capture ; mobile accepté par déclaration sans capture ; OAuth callback LIVE et détection réelle d'expiration **NON PROUVÉS**. Voir §3.1. |
| `UX-004` | 02 — Portefeuille / cockpit et rail personnel | Portefeuille initialement trop dispersé, rail non fixe, navigation redondante ; correction du lien « Nouveau projet » qui renvoyait sur le bouton du portefeuille et du breadcrumb « Portefeuille » sur Intégrations. | **Cinq frames Figma validées** (desktop nominal/défilé/vide, mobile nominal/défilé), rail personnel fixe 246 px ; démarrage de préparation D2 direct via le rail, sans création de projet implicite. | **Cible visuelle et réception utilisateur acceptées par Morris le 16/11**, après vérification des deux derniers parcours ; mobile explicitement non prioritaire et sans campagne visuelle Morris. | Candidat local final `b05dacf47983ed8d914c92619ede5ffe65ce9264`, tree web `467a46216d45651063c7fdfe328f15abec9fd2fc` ; RECETTE `:3200` build `20blGylSEta7201PgVvlw` ; création D2 `UNCERTAIN` honnête et single-flight document-scoped. | **Accepté par Morris avec réserves**, BROWSER 4 scénarios PASS selon Cursor, captures utilisateur desktop et confirmation directe des deux interactions ; F2/G5 mobile et OAuth LIVE non prouvés, pas d'idempotence multi-onglet/serveur. Voir §3.2. |
| `UX-005` | 03 — Sas Nora / préparation, aperçu, création et continuité | Première recette : création et reprise fonctionnelles, mais intention métier écrasée par le renommage, question résolue persistante, état « Première intention » et hauteur limitée, bouton « Ajuster l'aperçu ». Après correctifs : conversation et projection cohérentes, création explicite et fil durable. | Figma Sas `607:3` / `607:62` / `607:131` / `607:203` / `607:277` ; conversation-first, pas de correction manuelle de l'aperçu, décision de créer réservée au Pilote. | **Morris a explicitement décidé la suppression du bouton et du formulaire « Ajuster l'aperçu »** et a autorisé les correctifs puis la bascule RECETTE. Scénario utilisateur achevé ; **proposition d'acceptation avec réserves, pas de décision formelle distincte de clôture globale**. | C1–C4 dans `6798219f`, R1/R2 dans `bd8e1672` ; pas de migration ; build RECETTE `bURdIMEzv8pRSJCzgsiDf` ; reserve `UX-005-R01` ; D4 global hors Sas. | **Parcours RECETTE T1→T7 + rafraîchissement PASS observés**, UNIT 419, PG 484, BROWSER FAKE 5 et S01–S07 PASS rapportés par Cursor ; LIVE observé par Morris sur les échanges du Sas, sans qualification exhaustive de frontière provider ; voir §3.3. |

**Ajout d'une nouvelle ligne :** une observation peut produire zéro modification (déjà conforme), une correction locale, une correction transverse, ou un sujet **hors périmètre ML4D à arbitrer**. Ne pas inscrire « résolu » avant la re-recette.

### 3.1. Revue UX-003 — décision Morris et limites (16/11/2026)

| Objet | État / preuve |
|---|---|
| Cible | **VALIDATED SPEC par Morris** : entrée unifiée Studio/Nora + authentification ; pas de vitrine autonome. [Figma desktop](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=574-425), [mobile](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=574-466), [session expirée](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=574-490). |
| Candidat | Branche de construction **locale non publiée** `feat/next-ml4d-ux003-unified-entry-20261116` ; SHA `a77a3a2bf7b942038d771fdcdd2e7a6410330784` ; build `vYeNRRzvLN03N73wmcKkR`. Ces éléments ont été rapportés par Cursor et recoupés dans le handoff, **pas relus dans un commit projet distant**. |
| Environnement | RECETTE locale `http://127.0.0.1:3200` ; processus UX-003 rétabli après conflit avec le LaunchAgent ML4C. [Handoff incident `63ab5a73`](https://github.com/mcleland147/sfia-workspace/blob/63ab5a731ebdf173fefab2e7152744bf617f9229/sfia-review-handoff/latest-chatgpt-review.md) ; serveur local non inspectable directement par ChatGPT. |
| Desktop nominal | Capture utilisateur de RECETTE examinée le 16/11 : en-tête et deux zones Studio/Nora + GitHub conformes en première lecture, sans rail. **Accepté visuellement par Morris** ; pastille `GH` sombre acceptée comme écart esthétique mineur. **F2 géométrique non certifié** sur cette capture (viewport/zoom non étalonnés). |
| Desktop session expirée | Capture utilisateur de `?reason=session_expired` examinée le 16/11 ; message « Retrouvons votre session » et CTA de reconnexion affichés. Morris : **« c'est ok »**. Ce contrôle est une **simulation par paramètre**, pas une preuve du mécanisme réel d'expiration ni du callback OAuth. |
| Mobile | Figma 390 × 844 disponible ; Morris indique ensuite **« finito c'est good »** et accepte l'ensemble sans nouvelle capture mobile versée à cette revue. **Acceptation utilisateur déclarative**, non comparaison visuelle F2/mobile ni preuve de navigation/accessibilité en contexte mobile. Cette préférence d'usage exprimée pendant UX-003 a été **révisée lors d'UX-004** : le mobile n'est plus prioritaire et Morris ne demande pas de recette visuelle mobile à ce stade. |
| Accès de test | Bandeau Pilote A/B **test / non OAuth** maintenu hors Figma en RECETTE, sous contrôle de configuration déclaré par Cursor. Ne pas assimiler sa réussite à un OAuth LIVE. |
| Réserves maintenues | OAuth GitHub callback LIVE non rejoué ; véritable expiration de session non prouvée ; isolation cookies sur `127.0.0.1` par port insuffisante (profil navigateur dédié) ; preuve comparative mobile non apportée ; G5 global et Gate C ouverts. |
| Arbitrage de sortie | **UX-003 : revue utilisateur close / ACCEPTÉ AVEC RÉSERVES**, sans correctif Cursor supplémentaire décidé. Ne vaut pas `ADOPTED`, promotion STABLE, preuve exhaustive F2 ou acceptation globale ML4D. |

**Traçabilité des captures Morris :** captures partagées dans la conversation de revue du 16/11/2026 (desktop nominal puis état expiré). Elles ne sont pas publiées comme artefacts Git dans ce registre ; ne pas inventer un lien fichier ni une preuve mobile absente.

### 3.2. Revue UX-004 — décision Morris et limites (16/11/2026)

| Objet | État / preuve |
|---|---|
| Résultat et cible | Portefeuille personnel **sobre, épuré et fonctionnel** ; cartes projets, liste compacte des préparations, rail fixe de 246 px, navigation personnelle réduite à « Portefeuille » et « Nouveau projet ». **VALIDATED SPEC par Morris**. |
| Figma | Fichier `itgvCulInEnFY6DvgIegvP` : [desktop nominal](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=591-425) (`591:425`), [desktop défilé](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=591-543) (`591:543`), [desktop vide](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=591-661) (`591:661`), [mobile nominal](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=591-721) (`591:721`), [mobile défilé](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=592-435) (`592:435`). Aucune réouverture Figma décidée. |
| Observation et arbitrage | Morris a examiné les captures du portefeuille initial, de la page défilée et des paramètres Intégrations ; a **validé le rail fixe, les cartes, les préparations et le menu**. Accordéon des préparations non retenu. Seules deux corrections regroupées ont été demandées : « Nouveau projet » ouvre directement le sas D2 ; breadcrumb « SFIA Studio / Intégrations » selon la route. |
| Chaîne candidat local | Branche projet **non poussée** `feat/next-ml4d-ux004-portfolio-20261116`, base UX-003 `a77a3a2bf7b942038d771fdcdd2e7a6410330784`, UX-004 initial `bc8785683c30430aa99bc76e138ba10f49c71c39`, correctif navigation `fb0ac5c865f1d562a3778e207e5e8729165c5c4d`, **candidat final** `b05dacf47983ed8d914c92619ede5ffe65ce9264`. Ascendance rapportée par Cursor, **commit projet local non inspectable directement sur GitHub**. |
| RECETTE finale | `http://127.0.0.1:3200` ; tree web `467a46216d45651063c7fdfe328f15abec9fd2fc` ; build servi `20blGylSEta7201PgVvlw` ; LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004`. [Handoff de déploiement distant](https://github.com/mcleland147/sfia-workspace/blob/8c2160477809b79a74914f9e360b72d314ee3d54/sfia-review-handoff/latest-chatgpt-review.md), blob `62a2c0c480d62220ddb006153d4c91cd404c5069`. SHA/build/processus observés et rapportés par Cursor, **pas inspectés directement sur le Mac par ChatGPT**. |
| Preuves techniques | D'après Cursor : 20 UNIT PASS + 20 Playwright UX-003/UX-004 PASS (BROWSER/FAKE) sur le correctif D2, puis 4 scénarios smoke RECETTE PASS (BROWSER) sur le SHA final ; « Nouveau projet » depuis Intégrations → 1 POST → sas ; fil d'Ariane route-aware ; concurrence et ACK incertain testés avec fixtures ; reprise GET sans POST quand applicable. Les captures ops sont locales (`/tmp/ux004-recette-d2-smoke/`), **non publiées comme preuves Git vérifiables par ChatGPT**. |
| Réception Morris | Après livraison sur `b05dacf…`, Morris confirme expressément : **« tout est nickel, c'est bon. Ça fonctionne »**, le 16/11/2026. Cette réception concerne les deux interactions finales et confirme la validation visuelle du portefeuille précédemment exprimée. **Verdict : UX-004 ACCEPTÉ PAR MORRIS AVEC RÉSERVES**, sans changement visuel supplémentaire. |
| Mobile | Arbitrage Morris le 16/11 : application **non destinée à un usage mobile prioritaire** ; aucune revue visuelle mobile spécifique exigée pour UX-004. Smoke technique Cursor rapporté ; **aucune conformité F2/G5 mobile complète revendiquée**. Cet arbitrage UX-004 ne réécrit pas les critères normatifs F1/F2 de ML4D. |
| Réserves à porter | Single-flight frontend limité au **document navigateur**, pas d'idempotence prouvée multi-onglet/multi-session/serveur ; `router.push()` ne garantit pas, à lui seul, la fin effective de navigation avant libération du verrou ; OAuth callback LIVE et expiration authentique non rééprouvés ; isolation des cookies sur le même host par port insuffisante (profil RECETTE dédié) ; rollback `bc878568` préparé mais non rejoué après cutover ; F2/G5 mobile et comparaison géométrique exhaustive non certifiés. |
| Frontières / gates | **Revue utilisateur UX-004 reçue**, pas une réception globale ML4D ; pas de push projet, PR, merge, STABLE, release ou `ADOPTED` ; Gate C **OPEN**, ML5 non autorisé. Une décision et une opération Git distinctes seront nécessaires pour toute intégration future. |

**Traçabilité des captures Morris :** trois captures du portefeuille / défilement / Intégrations ont été partagées dans la conversation du 16/11/2026 ; la validation finale a été exprimée par Morris après remplacement de RECETTE. Aucun lien Git fictif vers ces captures. La recette utilisateur est distincte des preuves techniques Cursor, et l'état de `main` reste inchangé.


### 3.3. Revue UX-005 — Sas Nora, création de projet et continuité (16/11/2026)

**Périmètre et autorité.** Revue de l'ensemble **03 — Sas / préparation projet**, menée à partir de conversations utilisateur réelles en RECETTE ; entrée depuis le portefeuille, échange Nora, maturation de l'aperçu, choix du nom, création sur clic du Pilote et reprise du fil dans l'espace projet. La décision Morris du 16/11 supprime **« Ajuster l'aperçu » et le formulaire manuel**, au profit de corrections exclusivement conversationnelles ; **« Créer le projet » reste un acte humain explicite**. Le périmètre du présent suivi n'inclut pas l'évaluation fonctionnelle et UX globale de l'espace projet ou de la capitalisation D4.

| Élément | État / preuve / frontière |
|---|---|
| Figma de référence | Fichier `itgvCulInEnFY6DvgIegvP`, frames Sas : [première intention](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-3) `607:3`, [clarification](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-62) `607:62`, [proposition](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-131) `607:131`, [base suffisante](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-203) `607:203` et [reprise](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=607-277) `607:277`. Références de conception, pas preuve d'une conformité F2/G5 exhaustive. |
| Première recette avant corrections | Projet **« Cockpit Réunions Projet — Test 16-11 »** : maturation conversationnelle, nom proposé, création explicite, redirection, fil conservé et persistance fonctionnels sur `ec7405f323f86a0533dc507a1bfffc60ca1e5d0e` / `67akzrr6bFEp4YOh7aHD7`. Anomalies constatées : intention devenue « Retenir le nom… », question « manuel ou automatique » restée ouverte malgré la décision, progression visuelle tardive, bande vide inférieure, bouton d'ajustement manuel. |
| C1 — Intention durable | `projectIntention` séparé de `goal` local ; le renommage ne remplace plus l'intention du projet. |
| C2 — Questions ouvertes | Le courant reflète les clarifications réévaluées ; la question résolue n'est plus recopiée depuis le merge historique / catalogue D4 affiché. |
| C3 — Présentation et hauteur | Clarification affichée dès la première interaction substantielle ; espace conversationnel, composer et aperçu occupent la hauteur utile, sans le plafond `655px`, avec défilement interne. |
| C4 — Interaction | Bouton **« Ajuster l'aperçu »** et formulaire retirés du Sas ; l'API PATCH technique subsiste par compatibilité, **sans parcours manuel utilisateur**. |
| R1 — Demande ponctuelle | Le `goal` du tour ne peut initialiser l'intention que si aucune intention n'existe encore (`allowGoalIntentionBootstrap`) ; les demandes de conseil ordinaires ne la remplacent plus. |
| R2 — Absence et résolution | `clarifications` omises = pas de réévaluation, conserver le courant ; liste explicite `[]` = aucune question encore ouverte ; liste explicite non vide = nouveau courant ; `UNAVAILABLE` n'applique pas de nouvelle projection. |
| Candidat correctif C1–C4 | Commit produit **local** `6798219fdb37af1b463326dc7015901b43b04acd`, tree web `b3d001f212387349fc1af135046ee4dad2321aea` ; [handoff FULL 26/26 diffs](https://github.com/mcleland147/sfia-workspace/blob/3ec1f37d887363ef9f4b6ea4a68e965a0ba773bf/sfia-review-handoff/latest-chatgpt-review.md). Revue ChatGPT : deux réserves R1/R2 ensuite corrigées. |
| Candidat final R1/R2 | Commit produit **local, non poussé** `bd8e16728f3c2a726a49be4c94565a2d85fc41a9`, parent `6798219f` ; tree web `1abe4103eb16e4dc899a352206472753bbe9fb04` ; DEV `GIa-3DQDG_kcmC9uzzgbG` ; [handoff FULL 11/11 diffs](https://github.com/mcleland147/sfia-workspace/blob/10e6c9784de4ba03bb132e9b88bbea32e6879a75/sfia-review-handoff/latest-chatgpt-review.md). Critical Review ChatGPT **PASS avec réserves non bloquantes**, éligible RECETTE. |
| Tests techniques candidat | Selon Cursor : **419 UNIT PASS**, **484 PG PASS** (29 fichiers), **5 BROWSER FAKE PASS** sur `T1→T7` enrichi (dont R1-B/R2-C), build et lint PASS. La suite BROWSER FAKE n'est pas une preuve LIVE. |
| Bascule sous GO Morris | RECETTE `http://127.0.0.1:3200`, source `bd8e16728f3c2a726a49be4c94565a2d85fc41a9`, build réellement servi rapporté `bURdIMEzv8pRSJCzgsiDf`, service `com.sfia.studio.next.recette.ml4d-ux004`, DB `sfia_next_recette_ml4` port `5434`, schéma 013 conservé, aucune migration. [Handoff déploiement](https://github.com/mcleland147/sfia-workspace/blob/f2bf090d03f4d075eef18d6b17c4c0e6437f7f26/sfia-review-handoff/latest-chatgpt-review.md). |
| Contrôles de lane | Cursor rapporte S01–S07 PASS, sauvegarde préalable et rollback **code** disponible vers `ec7405f3` / `67akzrr6bFEp4YOh7aHD7` ; 21 projets et 474 messages préservés ; 2 préparations créées par les smoke tests (189→191), aucun nouveau projet de smoke. Aucune restauration DB exécutée. |
| Recette Morris sur candidat | Nouvelle préparation et dialogue Nora réellement observés dans l'application : progression, questions utiles, conservation d'intention, clôture de la question manuelle/automatique, nom choisi, création, redirection, fil conservé et **rafraîchissement confirmé « ok »**. Les captures sont dans la conversation du 16/11, pas dans Git ; qualification provider LIVE exhaustive/logs internes non auditée depuis cette revue. |
| Réception et limites | **Parcours T1→T7 fonctionnel et UX vérifié avec réserve par Morris**. L'assistant a recommandé `SAS NORA — USER RECETTE ACCEPTED WITH RESERVES` ; **aucune décision formelle distincte de clôture ML4D/Gate C, merge, STABLE ou ADOPTED n'est établie**. |

**Scénario de recette du candidat final — preuves utilisateur observées (16/11/2026)**

| Étape | Message / action Pilote | Attendu et constat |
|---|---|---|
| **T1** | Idée floue : application pour aider les chefs de projet à s'organiser | Nora identifie une intention sans inventer le périmètre, distingue hypothèses et besoins, pose des questions utiles ; **« Clarification en cours » immédiat**, colonnes étendues et pas de bouton manuel. |
| **T2 — R1** | Demande de conseil : « trois prochaines étapes pour mieux cadrer cette idée » | Nora propose des étapes sans modifier l'intention métier ; résultat visé et questions en cours conservés. **PASS utilisateur**. L'omission technique brute de `clarifications` reste prouvée par tests déterministes, non par seule capture LIVE. |
| **T3** | Cible : chefs de projet informatiques ; décisions, blocages, actions dispersés | Intention enrichie, ancienne question sur le public retirée, nouvelle question adaptée. Résultat encore générique à ce stade, puis **enrichi à T4**. |
| **T4** | Cas précis : après réunions de suivi ; Teams, Outlook, Word, Excel | Résultat devenu concret, premier périmètre identifié, question décisive **alimentation manuelle ou récupération automatique** affichée comme ouverte. |
| **T5 — R2** | V1 avec saisie/copier-coller manuels, trois rubriques ; intégrations reportées | Périmètre enrichi, **« Aucun point ouvert listé »**, passage à **« Création envisageable / Base suffisante »** ; aucun projet créé automatiquement. **PASS utilisateur**. |
| **T6 — C1/R1** | Nom choisi : **« Cockpit Réunions Projet — Recette R2 16-11 »** et confirmation du périmètre | Nom correctement proposé, intention et résultat durables préservés, ancienne question non réintroduite, CTA « Créer le projet » disponible. **PASS avec réserve UX-005-R01**. |
| **T7** | Clic explicite **« Créer le projet »** | Redirection vers espace projet, rail Travail/Pilotage/Documents/Journal, conversation Nora reprise, composer actif. Morris confirme ensuite **rafraîchissement OK**. Aucun test d'unicité de nom concurrent ou qualification D4 globale revendiqué. |

**Réserves et transmission à la suite**

| ID / portée | Observation fondée | Qualification / exit |
|---|---|---|
| **UX-005-R01 — Sas / projection structurée** | Entre T5 et T6, le champ **« Premier périmètre »** perd la mention explicite des **trois rubriques** (décisions, points bloquants, prochaines actions), alors que le dialogue Nora et le champ d'intention les conservent ; pas de perte démontrée du besoin global. | **Réserve fonctionnelle mineure observée**, non corrigée, non bloquante pour le parcours recetté. Éviter l'appauvrissement d'une projection déjà plus précise ; instruire son rattachement à un **lot cohérent**, sans micro-cycle correctif automatique. |
| **Observation UX mineure non arbitrée** | Avant nomination, **« Nom proposé : Projet envisagé »** est affiché comme s'il s'agissait d'une proposition, malgré l'absence de véritable nom. Disparaît après choix du nom. | Placeholder sémantiquement ambigu ; **aucun correctif ni GO décidé**. À garder pour revue transverse uniquement si confirmé utile. |
| **D4 / espace projet — hors revue 03** | Après création, panneau projet « Acquis : 0 · Ouverts : 0 » et « Aucun point ouvert capitalisé » ; le fil reste disponible. | **Ne pas conclure à une perte D4** : les compteurs peuvent mesurer une capitalisation distincte du fil/projection. Examiner propriétaire, contrats et preuves lors des revues **04/05/06**, sans détourner le Sas vers une refonte D4. |
| **Preuves non exhaustives** | Conversation RECETTE réellement observée, mais pas de traçabilité exhaustive du fournisseur, comparaison Figma/runtime calibrée sur toutes les variantes, responsive mobile, états négatifs, unicité concurrente ou couverture REAL globale de cette revue. | Hors verdict fort F2/G5, R6 et Gate C. Les preuves déterministes et l'observation utilisateur ne sont pas interchangeables. |

**État de sortie de l'ensemble 03 :** parcours **vérifié avec réserves**, création et continuité attestées sur la session utilisateur, **proposition d'acceptation Sas avec UX-005-R01** ; une réception formelle globale ML4D et les promotions Git demeurent des décisions ultérieures de Morris. **Ne pas relancer un cycle Cursor Sas par inertie.**

**Traçabilité :** les captures Morris du 16/11 montrent T1, conseil R1, clarification métier, arbitrage R2, nom, création et écran projet ; l'affirmation de persistance provient du « refresh ok » de Morris. Ces captures ne sont **pas** des artefacts Git de ce registre, et les handoffs historiques prouvent d'abord les opérations Cursor à leur date (la recette utilisateur est postérieure au handoff de bascule).

## 4. Fiche légère à renseigner pendant chaque revue

Copier ce bloc uniquement lorsqu'un sous-écran ou une variante mérite un suivi détaillé ; sinon une ligne dans le registre suffit.

```text
Parcours / écran :
Date et version de recette (URL/environnement, commit si connu) :
État testé / action réalisée / viewport :
Capture(s) runtime :
Référence Figma (page, frame, état, date/version si disponible) :
Observation factuelle :
Attendu / proposition UX (non décidée) :
Décision Morris (date / option retenue / réserve éventuelle) :
Impact (UI / navigation / fonctionnel / API-données / autorité / sécurité) :
Travaux regroupés (composant ou ensemble de surfaces concernés) :
Preuve après correction (capture + interaction + navigateur/viewport) :
Statut :
```

## 5. Regroupement des réalisations et réception

Les **ensembles de réalisation** ne sont créés qu'à partir des observations arbitrées. Ne pas les confondre avec les neuf ensembles de revue.

| Ensemble de réalisation | Écrans / observations liés | Résultat attendu | Frontières / risques | Preuves exigées | Statut / GO |
|---|---|---|---|---|---|
| **Entrée unifiée / UX-003** | 01 — Connexion et accès ; `UX-003` | Entrée Studio/Nora + GitHub, desktop/mobile et état session expirée | OAuth et sessions inchangés ; DEV test contrôlé ; isolation RECETTE ; LIVE non prouvé | Contrat Figma, tests Cursor, captures navigateur desktop/expiré, décision Morris ; F2 mobile non apportée | **Livré en candidat local ; recette UX Morris acceptée avec réserves le 16/11** ; aucun push projet / PR / merge / STABLE |
| **Portefeuille / UX-004** | 02 — Portefeuille et rail personnel ; `UX-004` | Portefeuille accessible, lisible, rail fixe et entrée directe vers le sas D2 ; breadcrumb cohérent | D1/D2 sans création de projet implicite ; garde single-flight document seulement ; aucun API/DB modifié ; F2 mobile non réceptionné | Cinq frames Figma, captures et validation utilisateur, 20 UNIT + 20 Playwright BROWSER/FAKE + 4 scénarios smoke RECETTE rapportés ; handoff distant | **RECETTE UX acceptée par Morris avec réserves le 16/11**, candidat local `b05dacf…` servi sur `:3200` ; sans push projet/PR/merge ni clôture ML4D |
| **Sas Nora conversationnel / UX-005** | 03 — Préparation de projet, aperçu, création, reprise ; `UX-005`, `UX-005-R01` | Évoluer librement d'une intention vague vers un périmètre nommé et un projet créé par acte explicite, sans formulaire d'ajustement | Propriétés D2/D3 séparées ; qualifications structurées, currentness et provenance ; R1/R2 ; aucun second moteur Nora ni migration ; D4 global hors périmètre | C1–C4 `6798219f` puis R1/R2 `bd8e1672` ; UNIT 419, PG 484, BROWSER FAKE 5 rapportés ; S01–S07 PASS ; recette Morris T1→T7 et refresh OK sur RECETTE `bURdIMEzv8pRSJCzgsiDf` | **Livré en RECETTE, vérifié avec réserves le 16/11** ; correction `UX-005-R01` à rattacher à un lot pertinent ; **pas de décision formelle de clôture ML4D ou Gate C** ; aucun push produit, PR, merge ni STABLE. |
| *Ensembles suivants à constituer après arbitrages* | 03–09 | — | — | — | **Aucun GO supplémentaire implicite** |

**Avant tout contrat Cursor :** consolider la cible décidée, la portée IN/OUT, les dépendances, le blast radius, les tests/navigateurs, les sources Figma applicables, les preuves de sortie, les réserves et le gate Morris ; relire depuis Git les sources applicables et le routage/template **SFIA v2.6**.

**Pour la réception globale ML4D :** couvrir les surfaces/états applicables réellement construits, arbitrer les écarts/réserves et obtenir un verdict Morris sur la convergence UX/UI. **Gate C demeure distinct et ouvert**, même après la réception d'un écran.

## 6. Prochaine action — à arbitrer avec Morris

**État acquis au 16/11/2026 :** revues **01 Connexion / UX-003** et **02 Portefeuille / UX-004** acceptées par Morris avec réserves ; **03 Sas Nora / UX-005** parcourue jusqu'à la création et reprise, **vérifiée avec `UX-005-R01`**, recette utilisateur complète. Les statuts du présent registre décrivent des observations et ne modifient pas la Roadmap `main`.

**Prochaine famille de revue proposée : 04 — Espace projet / structure commune**, à confirmer dans l'échange suivant avec Morris : rail projet, navigation, contextualisation, états/erreurs, persistance et articulation avec le fil Nora. Les surfaces **05 Travail avec Nora**, **06 Documents/Journal** puis **07–09** restent à qualifier sans présumer leur implémentation ni multiplier des cycles indépendants. Le cas **D4 Acquis/Ouverts = 0** sera traité au moment pertinent de l'espace projet, sans en faire une anomalie Sas acquise.

**Réserve Sas `UX-005-R01`** à conserver dans le registre : la correction ne se déclenche pas automatiquement ; elle doit être appréciée au regard du prochain lot intégré et de son blast radius. Aucune nouvelle décision métier, GO de code, PR/merge, STABLE ou Gate C n'est inférée de cette actualisation documentaire.

## 7. Sources de cadrage (Git au SHA de référence)

- `projects/sfia-studio-next/governance/SEF.md` — macro-lots, valeur produit, preuves graduées, autonomie et gates.
- `projects/sfia-studio-next/governance/roadmap.md` — ML4D NEXT, Gate C OPEN et réserves héritées.
- `projects/sfia-studio-next/governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` — périmètre ML4D, Figma, variantes, F1/F2, frontière ML5 et réception G5.
- `projects/sfia-studio-next/governance/product-naming-conventions.md` — nommage par responsabilité produit.
- `projects/sfia-studio-next/construction/convergence-fonctionnelle/journal-recette-utilisateur-ml4c.md` — signalements UAT `S03-02-R01` et `S07-06-R01` (constats datés, non preuves de l'état actuel de ML4D).
- Figma R3 — frames `574:425`, `574:466`, `574:490` : spécifications UX-003 validées par Morris, sans effet Git normatif.
- [Review Handoff UX-003 / restauration RECETTE](https://github.com/mcleland147/sfia-workspace/blob/63ab5a731ebdf173fefab2e7152744bf617f9229/sfia-review-handoff/latest-chatgpt-review.md) — candidat local et incident de lane ; capture Morris et acceptation constatées dans la conversation du 16/11, **distinctes de ce handoff technique**.
- Figma UX-004 : cinq frames `591:425`, `591:543`, `591:661`, `591:721`, `592:435` ; conception validée Morris, les preuves runtime sont distinguées des frames.
- [Review Handoff UX-004 D2 Guards](https://github.com/mcleland147/sfia-workspace/blob/17d837af61a99202dbaacb2f7084c4f393326c8a/sfia-review-handoff/latest-chatgpt-review.md) — contenu du correctif et tests BROWSER/FAKE sur le candidat local `b05dacf…`.
- [Review Handoff UX-004 / déploiement RECETTE final](https://github.com/mcleland147/sfia-workspace/blob/8c2160477809b79a74914f9e360b72d314ee3d54/sfia-review-handoff/latest-chatgpt-review.md) — manifeste, build, smoke et rollback ; **la réception Morris est postérieure au rapport Cursor** et établie dans la présente revue conversationnelle.
- `conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md` — contrat R2 D2, distinction préparation/projet, création explicite, continuité, refus/incertitude ; source de la prochaine revue Sas.

- Figma Sas Nora — cinq frames de conception `607:3`, `607:62`, `607:131`, `607:203` et `607:277` ; sans preuve de conformité F2/G5 exhaustive.
- [Review Pack Sas C1–C4, FULL 26 diffs](https://github.com/mcleland147/sfia-workspace/blob/3ec1f37d887363ef9f4b6ea4a68e965a0ba773bf/sfia-review-handoff/latest-chatgpt-review.md) — candidat local `6798219f`, corrections de projection, questions, hauteur et suppression du formulaire manuel.
- [Review Pack Sas R1/R2, FULL 11 diffs](https://github.com/mcleland147/sfia-workspace/blob/10e6c9784de4ba03bb132e9b88bbea32e6879a75/sfia-review-handoff/latest-chatgpt-review.md) — candidat local `bd8e1672`, discriminants absence de `clarifications` vs `[]`, bootstrap intention.
- [Review Handoff — bascule RECETTE Sas](https://github.com/mcleland147/sfia-workspace/blob/f2bf090d03f4d075eef18d6b17c4c0e6437f7f26/sfia-review-handoff/latest-chatgpt-review.md) — build `bURdIMEzv8pRSJCzgsiDf` servi, schéma 013 conservé, S01–S07, inventaire et rollback ; capture/validation utilisateur Morris postérieures.
- `construction/as-built-ml4d-sas-nora-convergence-20261116.md` et `construction/delivery-history.md` — documents as-built/historique du **candidat produit local**, non réinterprétés comme baseline `main`.
