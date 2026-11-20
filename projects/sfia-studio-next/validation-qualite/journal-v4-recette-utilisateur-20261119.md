# SFIA Studio Next — Ensemble 06 / Journal V4
## Dossier de recette utilisateur — Sujets et Décisions

| Champ | Valeur |
|---|---|
| Version | 0.1 — 19 novembre 2026 |
| Autorité d'acceptation | Morris — décision utilisateur exprimée le 19/11/2026 |
| Statut | **MORRIS USER ACCEPTANCE WITH RESERVES** — décision utilisateur consignée ; dossier documentaire intégré sur une branche candidate, non fusionné |
| Nature | Trace de recette et des réserves ; **pas** une nouvelle décision d'architecture, de doctrine, de Gate C ou de promotion |
| Périmètre | R5 / Ensemble 06, **Journal uniquement** — onglets Sujets et Décisions |
| Projet de recette | CampusNova, projet fictif de réservation de salles et de matériel pour les centres de Lyon, Lille et Bordeaux |
| Gouvernance | SEF v0.2 ; processus externe SFIA v2.6 ; Morris décide, ChatGPT qualifie/revoit, Cursor exécute la technique |
| Base distante vérifiée au pré-check | `mcleland147/sfia-workspace` — `main@d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Branche documentaire Journal distincte | `sfia/next-journal-conception-fonctionnelle-ux-20261119@f0d2d03311680e6e54e5a14fb8f07b0868164cdd` — **non mergée** |
| Branche du présent dossier | `docs/next-journal-v4-recette-20261119` — **aucune PR ni merge implicites** |

> **Précédence des faits :** le dernier Review Handoff Cursor conclut « MORRIS UAT PENDING » au moment de sa production technique. L'acceptation Morris exprimée **ensuite**, le 19/11/2026, est enregistrée ici. Cela ne modifie rétroactivement ni les résultats des tests, ni l'état Git, ni le niveau de preuve REAL/LIVE.

## 1. Objet, résultat utilisateur et décision d'acceptation

Le Journal vise à donner au Pilote une compréhension sélective, structurée et durable de son projet, sans relire la totalité des échanges avec Nora. Il associe une mémoire de **Sujets** à la consultation des actes de **Décision** tout en conservant la provenance conversationnelle et l'autorité D6.

**Décision Morris du 19 novembre 2026 :** le **Journal V4 est accepté en RECETTE dans son état actuel, avec réserves, pour Sujets et Décisions**. L'expérience de liste, lecture 40/60, agrandissement, navigation, restitution éditoriale et continuité observée est jugée suffisante pour poursuivre l'Ensemble 06.

La décision implique de **ne pas prolonger les corrections du Journal à ce stade**. Les limites non bloquantes identifiées demeurent tracées et peuvent faire l'objet d'un lot ultérieur selon leur impact ; elles ne génèrent aucun GO correctif automatique.

L'acceptation **n'est pas** : couverture exhaustive des exigences, validation de tout comportement cognitif, acceptation globale de l'Ensemble 06, certification LIVE/REAL exhaustive, Git PR/merge, Gate C, STABLE, RELEASE ou ADOPTED.

## 2. Références de conception et frontières

Sources documentaires validées/candidates du Journal, **non fusionnées sur `main`** au pré-check :

- [Contrat fonctionnel/UX Journal v1.0, VALIDATED SPEC](https://github.com/mcleland147/sfia-workspace/blob/f0d2d03311680e6e54e5a14fb8f07b0868164cdd/projects/sfia-studio-next/construction/convergence-ux-ui-globale/journal-contrat-fonctionnel-ux-candidat.md).
- [Contrat technique Journal v0.3, candidat](https://github.com/mcleland147/sfia-workspace/blob/f0d2d03311680e6e54e5a14fb8f07b0868164cdd/projects/sfia-studio-next/construction/convergence-ux-ui-globale/contrat-technique-journal.md).
- [Matrice de convergence v0.7 — état historique à réconcilier](https://github.com/mcleland147/sfia-workspace/blob/f0d2d03311680e6e54e5a14fb8f07b0868164cdd/projects/sfia-studio-next/construction/convergence-ux-ui-globale/journal-matrice-convergence-vision-realisation.md).
- Figma V4 : fichier `itgvCulInEnFY6DvgIegvP`, page `828:2`, onze maquettes validées en conception.
- [SEF v0.2](https://github.com/mcleland147/sfia-workspace/blob/d3d199adb782462b93467934f5f1e8a0c98fb492/projects/sfia-studio-next/governance/SEF.md), [Roadmap Next](https://github.com/mcleland147/sfia-workspace/blob/d3d199adb782462b93467934f5f1e8a0c98fb492/projects/sfia-studio-next/governance/roadmap.md), décisions R1–R4 et R5 applicables.

**Responsabilités à préserver :** D3/Nora analyse, propose et restitue ; D4 conserve/versionne connaissances, sujets, synthèses et explications documentaires ; D6 porte exclusivement l'acte et l'autorité de décision ; D8 porte les preuves ; D9 les opérations Git gouvernées. Une projection éditoriale ne doit pas réécrire silencieusement D6. Aucun registre parallèle D4/D6, second chat ou éditeur dans la visionneuse rapide de Travail.

## 3. Environnement et identification de la RECETTE

Le dernier [Review Handoff canonique du correctif Décisions](https://github.com/mcleland147/sfia-workspace/blob/a70a63411ccb65392ad428ef7a8d1fd4273f3130/sfia-review-handoff/latest-chatgpt-review.md) rapporte :

| Élément | Identité rapportée |
|---|---|
| URL RECETTE | `http://127.0.0.1:3200` |
| SOURCE_SHA | `5f6e2f3860993acd35d176f60e6a7f0ca69d3a3d` |
| BUILD_ID | `tE1TFcAqSGfCVuglJygA` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` |
| Base | `sfia_next_recette_ml4` |
| Branche Delivery déclarée | `sfia/next-journal-delivery-20261119` |
| Tree Delivery déclaré | `9f077b3b10b752974d94f7f33e633c384d0c5101` |
| Handoff commit / blob | `a70a63411ccb65392ad428ef7a8d1fd4273f3130` / `3703fa888b88ee9c94b62b31713ab79e8ef26a80` |

**Limite :** ces identités sont rapportées par Cursor ; le processus et les données RECETTE actuels ne sont pas directement observés ici. Le SHA du candidat n'a pas été retrouvé en commit distant lors de la lecture GitHub ; la branche Delivery n'a pas été retrouvée sur le remote. Préserver CampusNova, ses historiques, les autres données de RECETTE et le rollback.

## 4. Scénarios et résultats — niveau de preuve strict

| Parcours / objet | Résultat | Nature de la preuve / portée |
|---|---|---|
| Liste structurée des Sujets, sélection et retour | **PASS observé Morris** | RECETTE CampusNova, périmètre testé |
| Lecture 40/60 et vue agrandie des Sujets | **PASS observé Morris** | UX/UI acceptée |
| Capitalisation sélective d'un sujet | **PASS observé Morris** | Nora a créé des sujets après correction de l'absence initiale de `d4.record_knowledge` |
| Enrichissement d'un sujet existant | **PASS observé Morris** | Rattachement de nouveaux acquis observé ; continuité longue non exhaustive |
| Émergence d'un deuxième sujet | **PASS observé Morris** | « Parcours de réservation et responsabilités » ; « Accompagnement et déploiement des utilisateurs » |
| Acquis et points ouverts | **PASS visuel / PARTIAL comportement** | Présentation acceptée ; résolution et contradictions complètes non prouvées |
| Synthèse de sujet | **PARTIAL** | Synthèse sur « Accompagnement... » ; absence persistante sur le sujet historique « Parcours... » |
| Références Pilote/Nora et provenance | **PASS visuel / PARTIAL stabilité** | Auteur, date/heure, extrait et ouverture ; réserve focus conservée |
| Recherche et navigation avancées | **IMPLEMENTED / COVERAGE PARTIAL** | Fonctions rapportées ; pas de revendication de campagne utilisateur exhaustive |
| Liste des Décisions et statut « EN VIGUEUR » | **PASS observé Morris** | CampusNova, acte issu d'un arbitrage explicite |
| Titre, résumé, choix, motivation, autorité, histoire et provenance | **PASS visuel observé Morris** | Rendu final accepté le 19/11 |
| Lecture Décisions 40/60 et agrandie | **PASS observé Morris** | Captures finales acceptées |
| Acte D6 préservé | **PASS technique rapporté Cursor** | `statement`, `state`, `scope` inchangés au correctif ; pas de modification D6 revendiquée |
| `DecisionExplanation` D4 durable générée automatiquement | **NOT PROVEN / NOT DELIVERED** | `decisionHint` → `appendDecisionExplanationRevision` non raccordé dans le dernier cycle |
| Tests unitaires éditoriaux (7), PG Journal (19), Playwright ciblés, TypeScript | **PASS rapportés Cursor** | Pas de réexécution indépendante par ChatGPT |
| Régressions transverses ML2/ML4C/Ensemble 05 sur chaque correctif | **NOT FULLY RUN** | Gate d'intégration à dimensionner |
| LIVE manuel CampusNova | **Observations utilisateur réelles** | Ne vaut pas qualification LIVE globale |
| Campagne LIVE automatisée nouvelle | **NOT RUN — interdite au titre de la décision de poursuite actuelle** | Aucun scénario complémentaire exigé pour clôturer l'acceptation Journal |

## 5. Décision métier CampusNova utilisée pour les Décisions

Le Pilote a arbitré qu'une réservation n'est confirmée que lorsque les ressources indispensables sont vérifiées, que l'engagement figure dans le planning de référence et que son statut est clairement communiqué. Accord oral, e-mail ou accord de principe ne suffisent pas seuls.

La décision est apparue dans le Journal avec le statut **EN VIGUEUR**. Le titre affiché « Conditions de confirmation d'une réservation », le résumé, le choix officiel intégral, la motivation contextualisée, les repères d'autorité, l'histoire et les liens sources ont été acceptés visuellement.

Le dernier correctif est une **projection display-only** de D6. L'explication produite à partir d'un extrait conversationnel marqué « Motivation » ne doit pas être confondue avec une révision `DecisionExplanation` D4 persistée.

## 6. Réserves héritées et décisions de disposition

Les niveaux de gravité sont des **propositions de qualification pour le suivi**, non des arbitrages supplémentaires de Morris. « Acceptée » signifie que la réserve ne bloque pas la poursuite produit, pas que le mécanisme est devenu prouvé.

| ID | Réserve | Gravité proposée | Disposition / condition de reprise |
|---|---|---|---|
| **R-01** | Synthèse historique absente sur « Parcours de réservation et responsabilités » malgré des acquis enrichis | Modérée | Acceptée ; réévaluer si défaut récurrent ou impact Documents ; ne pas déclarer les synthèses pleinement prouvées |
| **R-02** | Densité de capitalisation, répétitions, condensation, fusion et obsolescence des acquis | Modérée | Conserver comme amélioration cognitive possible, sans nouveau lot immédiat |
| **R-03** | Révisions, remplacements, contradiction et résolution des points ouverts incomplètement prouvés ; scénario inventaire de Lille | Modérée | Couverture conditionnelle selon l'impact ; aucune preuve exhaustive inférée |
| **R-04** | Focus des références Journal→Travail anciennement instable ; corrections livrées, flakiness Playwright lourde rapportée | Modérée | Surveiller ; reprendre en cas de régression réellement bloquante |
| **R-05** | `DecisionExplanation` D4 durable non systématiquement créée en production | Modérée | Dette de raccordement explicite ; ne pas prétendre à une explication D4 persistée |
| **R-06** | Densité du choix officiel intégral et raisonnement parfois long | Mineure | Acceptée sans nouvelle correction rédactionnelle |
| **R-07** | Détection des contradictions devenue plus sélective, non requalifiée exhaustivement après correction | Mineure à modérée | Réserve de couverture, sans réouverture automatique |
| **R-08** | Régression technique intégrale non rejouée à chaque correctif | Gate d'intégration | Définir contrôles consolidés proportionnés à l'intégration, sans campagne LIVE nouvelle |
| **R-09** | LIVE/REAL globale non exhaustive ; campagnes automatisées arrêtées par Morris | Limite de preuve | Conserver NOT RUN ; ne pas lancer de nouvelle campagne LIVE Journal |
| **R-10** | Dernier Review Pack canonique sans diffs/sections complètes de code nécessaires à une revue indépendante SFIA v2.6 | Importante pour la readiness Git | Régulariser la matière de revue sur le candidat exact, sans corriger le runtime par défaut |
| **R-11** | Écarts décoratifs visuels mineurs / variations de contenus naturels | Mineure | Acceptée ; pas de nouveau chantier pixel-perfect |

**Pas de double comptage :** les anomalies antérieures corrigées (Journal initialement vide, panneaux disproportionnés, titres techniques, présentation Décisions répétitive) ne deviennent pas des défauts ouverts au seul motif qu'elles apparaissent dans des rapports historiques. Les réserves R-01 à R-11 couvrent la situation de sortie et les limites de preuve.

## 7. Revue de conformité des preuves et écarts de traçabilité

| ID | Constat Git / preuve | Effet |
|---|---|---|
| **E-01** | Roadmap `main` présente encore un état courant daté du 15/11 (ML4D non démarré) | **KNOWN DOCUMENTATION GAP** à synchroniser sous gate D2 distinct, sans réécrire l'histoire |
| **E-02** | Matrice Journal v0.7 sur branche documentaire conserve un état de correctif non reçu, antérieur aux dernières corrections | Actualisation documentaire nécessaire avec nouvelle preuve, sans supprimer les snapshots |
| **E-03** | Candidat code `5f6e2f38` et worktree Delivery non observables dans Git distant | Inventaire Git local, base/HEAD, fichiers et migrations avant PR readiness |
| **E-04** | Handoff `a70a6341` confirmé avec résultats, mais Review Pack incomplet pour revue indépendante des modifications | **REVIEW PACK INCOMPLETE — MODIFIED CONTENT MISSING** ; régularisation ciblée attendue |
| **E-05** | Acceptation Morris était exprimée dans la conversation mais non encore dans un dossier Git | Le présent document enregistre cette décision utilisateur sur branche candidate ; cela ne vaut ni merge ni promotion |

## 8. Intégration Git et limites du présent mandat

L'acceptation utilisateur est **déjà exprimée**. Elle ne nécessite pas un nouveau vote Morris.

La présente publication documentaire ne donne **aucun GO** pour le code, la correction de la Roadmap, la synchronisation d'une décision normative, la création de PR, le merge, la promotion RECETTE→STABLE, la release ou l'adoption.

La future qualification du candidat Journal devra vérifier : branche/base/HEAD et état local par Cursor ; inventaire complet des modifications et migrations ; cohérence contrat fonctionnel/technique/architecture CURRENT ; traçabilité du runtime réellement testé ; versionnage ; preuves ciblées ; Review Pack exploitable ; réserves et gates Morris appropriés. Aucune nouvelle campagne LIVE automatisée ni refonte UX n'est demandée.

## 9. Sortie de capacité et suite

**Journal V4 :** `MORRIS USER ACCEPTANCE WITH RESERVES`.

**Dossier de recette :** `DOCUMENTED ON CANDIDATE BRANCH` après vérification du commit et du blob distant.

**Code Journal :** `LOCAL CANDIDATE REPORTED / PROJECT GIT INTEGRATION NOT YET AUTHORIZED / NOT MERGED`.

**Ensemble 06 global :** `IN PROGRESS — DOCUMENTS REMAINING`.

**Gate C / STABLE / RELEASE / ADOPTED :** `NOT ACQUIRED`.

**Capacité suivante : Bibliothèque Documents.** À qualifier à partir des sources R1–R4, de l'UX Figma, des capacités D4 déjà construites, de l'architecture CURRENT et des preuves observées. Conserver les frontières de la visionneuse rapide de Travail ; pas de deuxième éditeur, de conversation, de moteur d'autorité ou de mémoire.
