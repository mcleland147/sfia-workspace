# SFIA Studio Next — Ensemble 07
## Dossier d'architecture fonctionnelle et technique — Projet, Trajectoire et conduite conversationnelle de Nora

| Métadonnée | Valeur |
| --- | --- |
| Objet | Dossier AS-IS / TO-BE et contrat de réalisation candidat de l'Ensemble 07 |
| Jalon | R5 / ML4D — convergence UX/UI, avec impacts fonctionnels transverses à instruire |
| Statut | **CONTENU DU DOSSIER VALIDÉ PAR MORRIS — 20/11/2026** ; options techniques candidates, non ADOPTED, contrats propriétaires R2 non amendés |
| Date de cadrage | 20 novembre 2026 |
| Git de référence du code | main@6e93a33d64dfeea2eab88fb7896d733b34053f97 |
| Contrat UX étudié | [Ensemble 07 — conception fonctionnelle et contrat UX, branche candidate](ensemble-07-projet-trajectoire-conception-fonctionnelle-contrat-ux.md) |
| Figma | [Neuf écrans 09.01–09.09](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=983-46), [SAS 06](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1022-112), [Travail 05.17](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1036-114), [Trajectoire 09.10](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1034-480) et [09.11](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1034-505) |
| Validation UX | **13 maquettes / variantes validées par Morris**, distincte de la validation du présent dossier |
| Sources normatives | SEF v0.2 ; Roadmap Next ; vision R1 ; conception R2 D2/D3/D4/D5/D6 ; architecture R4 ; décisions de convergence R5 |
| Périmètre de contribution | **Document candidat exclusivement** ; aucune spécification propriétaire modifiée, aucun code, migration, PR, merge ou GO Cursor |
| État local et runtime | **NON OBSERVÉS** ; lecture Git distante uniquement, aucune exécution de tests ou preuve navigateur dans ce travail |

> **Précédence :** faits et preuves Git main constatés > décisions Morris applicables > sources propriétaires R1–R4 > contrat UX validé pour l'expérience cible > hypothèses/solutions proposées ici. Une conception nouvelle approuvée en conversation n'amende pas automatiquement les règles R2. Les options techniques de ce dossier **ne sont ni des ADR ni des décisions d'architecture adoptées**. Morris a validé le contenu de ce dossier le 20/11/2026 ; les options techniques restent ouvertes jusqu'aux gates applicables, et Cursor précisera les moyens sous contrat autorisé. Aucun état local staged/untracked ou comportement LIVE n'est inféré.

## 0. Synthèse de décision à préparer

**Résultat attendu :** après la création explicite d'un projet dans le SAS, Nora prépare de sa propre initiative une **trajectoire prévisionnelle séquentielle fondée sur les types de cycles et les références CKI réellement applicables** ; elle présente spontanément sa proposition ou les clarifications utiles dans **le même fil de conversation**. Le projet reste créé, accessible et récupérable, même si l'analyse est interrompue. Pendant la qualification, l'espace projet est consultable, mais le compositeur de Travail reste visiblement et effectivement désactivé. Travail et Trajectoire se synchronisent automatiquement sur le **même état durable**. Après restitution, Nora prend l'initiative de la progression, de l'appréciation de maturité et des recommandations de transition, tandis que le Pilote conserve **chaque décision métier d'ouverture, clôture, réorientation ou méthode durable**.

**L'Ensemble 07 ne doit donc pas être traité comme une simple refonte de deux pages.** Il comprend une expérience Projet et Trajectoire et les capacités fonctionnelles indispensables à leur vérité : création et continuation, qualification initiale, proposition de cycles, restitution, gouvernance conversationnelle, bilan historique et navigation.

**Position architecturale recommandée, soumise à validation :** prolonger les propriétaires D2/D3/D4/D5/D6 et leurs mécanismes durables ; construire des **projections de lecture dédiées** pour les vues ; coordonner une seule qualification initiale et une seule restitution dans le fil ; utiliser les contrôles de cycle et de décision existants ; ne pas créer de moteur de workflow, de moteur d'autorité, de mémoire, d'ordonnanceur général ou de bus événementiel supplémentaire sans preuve de nécessité.

**Points bloquants avant réalisation :** réconciliation normative R2 ; preuve de faisabilité de la continuation indépendante après création ; sémantique et versionnement de la trajectoire séquentielle ; restitution historique fiable du cycle ; conservation des actions D5/D6 derrière la conversation avant retrait du panneau administratif. Ces points figurent comme écarts **à qualifier**, et non comme architecture déjà décidée.

## 1. Périmètre, capacité et sources

### 1.1. Capacité et valeur utilisateur

Le Pilote doit savoir, à tout moment :
1. **Pourquoi et comment avancer** : la direction proposée, retenue ou encore inconnue, et le cycle pertinent pour le résultat recherché.
2. **Ce qui se passe actuellement** : projet créé, qualification initiale en cours, proposition disponible, premier cycle ouvert, cycle terminé, suite en attente.
3. **Ce qui est acquis et ce qui reste ouvert** : sujets, décisions applicables, documents, résultats et réserves conservés chez leurs propriétaires.
4. **Ce que Nora recommande** : démarrer, poursuivre, approfondir, réorienter ou clôturer un cycle sur des raisons explicites.
5. **Ce que lui seul décide** : orientation retenue, ouverture/clôture du cycle, choix durable de méthode, levée/restriction, acceptation des risques.
6. **Ce qui a été réellement fait** : état, historique, sources, décisions et preuves sans confusion entre un texte de Nora, une opération demandée et son résultat.

Une trajectoire est une **séquence révisable de cycles de haut niveau** : par exemple « Cadrage → Conception fonctionnelle → Conception UX ». Elle ne constitue **pas** trois options concurrentes pour sélectionner le premier cycle, ni une décomposition en micro-lots/tâches, ni un chemin obligatoire. Un premier cycle suffit lorsque les suivants sont inconnus ; aucun quota de trois cycles n'est imposé au modèle.

### 1.2. IN — résultat cohérent

- Vue Projet : identité/contextualisation, carte de cycle courant ou absence de cycle, trois cartes d'activité, accès vers les sources propriétaires.
- Vue Trajectoire : cycles clos, actif et envisagés ; proposition initiale non retenue ; états d'analyse, absence et incident ; bilan historique ; vue d'étape envisagée ; CKI/méthode.
- Sortie SAS : création indépendante de la qualification ; fenêtre de préparation ; restitution initiale Nora proactive dans le fil SAS→Projet ; reprise en cas de fermeture/échec.
- Travail : progression partagée, lien Trajectoire, compositeur indisponible tant que la qualification initiale n'est pas terminale ; déverrouillage cohérent.
- Conduite continue Nora : surveillance proportionnée des progrès utiles, appréciation de maturité, recommandation de clôture et de suite, interprétation des GO humains dans le fil.
- Lecture durable et vérifiable : propositions versionnées, décisions D6, cycles D5, CKI effectif, connaissances D4, documents, bilan à clôture, provenance, erreurs/reprises.
- Intégration tests unitaires, PostgreSQL, navigateur, Figma/runtime, documentation as-built et revue dans un **macro-lot unique**, avec éventuelle séparation seulement si un gate réel l'impose.

### 1.3. OUT — anti-surarchitecture et anti-débordement

- Nouveau moteur conversationnel, moteur de décision HumanDecision, registre de sujets/documents, moteur CKI ou workflow universel ; aucune règle d'ordre de cycles fixée globalement.
- Ouverture/fermeture automatique de cycle, adoption d'une méthode par Nora, pouvoir de déroger à une restriction du Pilote, confirmation administrative additionnelle après un GO naturel clair.
- Création d'un « dossier de maturité » ou d'une console de pilotage, dixième module ou page de supervision autonome : les maquettes supplémentaires sont des **variantes UX** de surfaces existantes.
- Réécriture de D2/D3/D4/D5/D6 ou nouvelle architecture physique imposée par le présent dossier ; aucune migration, API, ordonnanceur, file de messages, SSE ou worker spécifique **pré-approuvé**.
- Capacités ML5 Cursor, publication Git métier, release, STABLE, ADOPTED ou Gate C prétendument franchi.

### 1.4. Jalon et dépendances

La Roadmap main du 20/11 atteste l'intégration de l'Ensemble 06 sur main avec CI post-merge ; **Gate C reste ouvert**. Le découpage R5 place la convergence UX/UI en ML4D, distincte des évolutions fonctionnelles qui doivent recevoir leur propre qualification. Le présent dossier **remonte explicitement les extensions transverses D2/D3/D5** découvertes pendant Ensemble 07 : elles ne doivent pas être cachées sous une retouche graphique. Le prochain résultat est le contrat de réalisation borné, après validation du dossier, réconciliation des propriétaires et GO Morris.

## 2. Architecture actuelle (AS-IS) — code inspecté sur main

Cette section décrit **ce que les fichiers prouvent**, pas un comportement browser ou LIVE démontré. Les chemins sont relatifs à projects/sfia-studio-next/web/. Les tests présents démontrent des couvertures ciblées, non leur exécution pendant cette étude.

### 2.1. SAS, création D2 et continuité de conversation

| Élément inspecté | Mécanisme réellement présent | Limite face à la cible |
| --- | --- | --- |
| src/domains/preparation/create-project.ts | createProjectCommand ; transaction DB ; locks ; fingerprint/idempotencyKey ; résultat CREATED / ALREADY_CREATED / CONFLICT ; rattache projet, préparation, conversation et documents | **Bon socle à préserver**, mais aucune qualification initiale de trajectoire systématique n'est attestée par cette commande |
| src/app/api/preparations/[preparationId]/create-project/route.ts | Après succès D2, appelle éventuellement continueAfterProjectCreated lorsque l'intention est liée à une mission ; retourne missionContinue dans la réponse | La continuation **est conditionnelle**, orientée vers la mission existante ; l'appel attend aujourd'hui potentiellement sa fin **dans la requête de création**, ce qui ne satisfait pas directement la séparation de latence et de disponibilité prévue pour la nouvelle qualification |
| src/domains/conversation/intent-conduction.ts | Continuation de mission par clé, protection de concurrence, restitution durable ; recoverPendingMissionContinuation via contexte de projet et intention liée | **Réutilisable à examiner** pour reprise/déduplication ; la continuation observée vise surtout les étapes D2→D4 documentaires et un ACK de mission, **pas** une proposition séquentielle D5 + premier message de trajectoire |
| src/app/preparations/[preparationId]/page.tsx | createProject, reconcileCreateAfterAckLoss, préservation de la même clé et redirection après projet obtenu | Pas de fenêtre 3 étapes ni d'état opérationnel de trajectoire exposé ; redirection immédiate possible ; le navigateur ne détient pas la vérité métier |
| src/db/schema.ts | create_project_commands, preparation_project_links, conversations et messages | Propriétaires durables utiles ; aucune preuve d'un état **initial trajectory qualification** spécifique dans les tables inspectées |

**Constat important :** la création D2 est déjà conçue de manière idempotente. Il serait injustifié de la réimplémenter. Le découplage de la **réponse de création** et de la **qualification de trajectoire** reste néanmoins à concevoir : un projet peut être committé alors que la requête HTTP, la continuation ou le navigateur se coupe.

### 2.2. Nora / Travail D3

| Élément | AS-IS | Écart |
| --- | --- | --- |
| src/domains/conversation/service.ts | Fil de messages, qualification sémantique durable, reprise de tours, contexte de projet et continuation de mission | Déclencheur post-création de trajectoire **non attesté** ; aucun premier message de trajectoire proprement corrélé à un résultat D5 dans le périmètre observé |
| src/domains/conversation/intent-conduction.ts et mission-continuity.ts | Conduite d'intentions, messages de continuation et preuves d'unicité sur des opérations existantes | Capitalisation utile, **sans preuve de couverture automatique du nouveau scénario** ; éviter de réutiliser un résultat de mission D2→D4 comme s'il était une trajectoire |
| src/components/figma/NoraConversation.tsx | Fil, activité, brouillon, pending/reconcile, compositeur avec textarea et envoi désactivé sur busy ; UI conditionnelle | **Pas de prop/contrat explicite de verrou initial de trajectoire** dans la version inspectée ; textarea pas désactivée pour ce cas et message d'explication absent |
| src/app/projects/[projectId]/page.tsx | Charge contexte/messages ; sendMessage ; états busy/unresolvedPending ; différentes surfaces sous un même projet | La disponibilité du compositeur n'est pas actuellement dérivée de la **qualification de trajectoire post-création** ; la synchronisation cross-surface 05.17/09.10/09.11 n'est pas prouvée |

**Frontière à respecter :** un verrou de saisie local ne suffit pas : l'admission côté serveur doit aussi empêcher un **nouveau tour utilisateur** concurrent pendant la qualification initiale, sans bloquer la consultation. Les reprises et envois ordinaires existants ne doivent pas être régressés.

### 2.3. Trajectoire, cycles, CKI et gouvernance D5/D6

| Élément | AS-IS | Écart |
| --- | --- | --- |
| src/domains/pilotage/service.ts / types.ts | getPilotageProjection expose révision D5, trajectoire PROPOSED/RETAINED, cycle actif, CKI, méthode, restrictions ; commandes de proposition, rétention, ouverture, clôture, transition, méthode et restrictions | Projection de trajet en **orientation textuelle** ; pas de liste typée et fiable de cycles successifs clos/actif/futurs ni de statut de préparation initiale |
| src/db/schema.ts, trajectory_revisions | Numéro, statut PROPOSED/RETAINED/SUPERSEDED, orientation texte, source et décision | Ne prouve pas un modèle de **1 à N étapes prévisionnelles typées** avec source, finalité, ordre et versions ; parser de simples textes ne garantit pas la fidélité |
| src/db/schema.ts, project_cycles | Cycle réel, type, objectif, ACTIVE/CLOSED, openedAt/closedAt, décisions ouverture/clôture, CKI épinglé, balanceNote ; index unique partiel pour **au plus un ACTIVE/projet** | Données historiques de cycle disponibles mais pas une **fiche de bilan complète reconstructible** avec états D4/documents à la clôture |
| src/domains/pilotage/cki-resolve.ts | Catalogue de types, correspondance type→CKI, manifeste et versions ; niveaux ASSOCIATED, RESOLVED, UNAVAILABLE ; DELIVERED est distinct | Référence CKI consultable avant premier cycle, mais **consultation catalogue ≠ activation CKI principal** et délivrance réelle à prouver |
| src/components/PilotagePanel.tsx | Panneau d'administration visible : proposition, rétention, ouverture/fermeture/transition, méthode, restrictions, réconciliation | **AS-IS divergent de l'UX cible** : le Pilote ne doit pas devoir administrer les cycles ; conserver les contrôles et effets, remplacer la façade technique par des lectures et la conduite conversationnelle |
| src/app/projects/[projectId]/page.tsx | Surface pilotage affiche le PilotagePanel actuel | Pas encore de mini-roadmap ni des états 09.07/09.10/09.11 ciblés |

Les commandes D5 présentent déjà des statuts APPLIED / ALREADY_APPLIED / REJECTED / CONFLICT / UNKNOWN et une exigence de décision appropriée. **Ne pas créer un second propriétaire d'effets pour les flux conversationnels.**

### 2.4. D4, Documents, Journal, Projet

| Élément | AS-IS | Écart |
| --- | --- | --- |
| src/db/schema.ts et domaines D4 | knowledge_subjects, knowledge_acquis, knowledge_open_points, événements, synthèses/révisions ; rattachement projet | Sources disponibles pour les cartes Projet ; **« sujet ouvert » ≠ « point ouvert »** et « acquis » n'est pas un compteur de sujets terminés |
| Documents et document_revisions | Documents et versions conservés, états de disponibilité technique ; surface Documents Ensemble 06 intégrée | « Documents en cours » nécessite une définition de sélection métier ; révisions conservées ne prouvent pas à elles seules l'état exact des documents à une clôture donnée |
| src/components/figma/ProjectOverview.tsx | Identité, métriques conversation/documents, sujets et acquis, points à préciser, liens Travail/Journal/Documents/Pilotage | Recomposition 09.01/09.06 nécessaire : carte cycle/absence, trois cartes d'activité, identité/description qualifiées et comptes sans mélange des statuts |
| Journal/Décisions D6 | Journal et accès décisions applicables de l'Ensemble 06 ; gouvernance propriétaire D6 | Projet/Trajectoire doivent projeter ces références sans créer de journal ni registre d'autorité supplémentaire |

**Historique :** les événements D4, les dates et les versions documentaires sont des éléments de preuve potentiels ; les relations fiables **sujet/document/révision ↔ cycle ↔ état à clôture** ne sont pas établies pour tous les objets par la seule lecture du schéma. Toute prétention à un bilan historique exhaustif serait prématurée.

### 2.5. Tests et preuves préexistants

- tests/integration/create-project.pg.test.ts : création concurrente, idempotence, perte d'ACK, liens de conversation, isolement de Pilotes ; aucun verdict de tests exécutés ici.
- tests/integration/ml3-pilotage.pg.test.ts : proposition/retenue D5, un seul cycle ACTIVE, transition et rollback, restrictions, GO, CKI et réconciliation ciblés.
- tests/e2e/g4-chat-first-sas.spec.ts : parcours conversation SAS → création, dans le cadre couvert par ce test.
- tests/e2e/ml3-pilotage.spec.ts et project-surface-nav-intent.spec.ts : navigation et pilotage actuel, **pas la conformité visuelle et temporelle** de treize maquettes.
- tests/e2e/ml4c-long-thread-composer.spec.ts : compositeur utilisable sur un fil long ; ne couvre pas le verrou temporaire d'analyse initiale.

**Niveau de preuve de ce dossier :** chemins et comportements déduits de code Git distant + références de tests présents. **PAS DE TEST EXÉCUTÉ, PAS DE BROWSER, PAS DE LIVE/REAL, PAS DE WORKTREE LOCAL OBSERVÉ**.

## 3. Matrice AS-IS → TO-BE et criticité de traitement

| Réf. UX / capacité | AS-IS exploitable | Écart TO-BE | Orientation / criticité |
| --- | --- | --- | --- |
| **SAS 06** — création / progression | D2 createProjectCommand et continuation conditionnelle | UI 3 étapes, décorrélation du succès D2 et de l'analyse, retour après coupure | **Structurant** : garantir un projet durable avant qualification |
| **Travail 05.17** | NoraConversation, pending/reconciliation | Progression qualification partagée, compositeur grisé avec motif survol/clavier, admission serveur, déblocage cohérent | **Structurant** : état commun et garde d'envoi |
| **09.01 Projet** | ProjectOverview, D4/Documents | Carte cycle et trois cartes Sujets ouverts / Décisions applicables / Documents en cours | Projection de lecture ; sémantique des comptes à qualifier |
| **09.02 Trajectoire** | PilotageProjection D5 | Mini-roadmap passé/actif/futur + acquis/points/maturité contextualisés | **Structurant** : projection révisée, historique et pertinence |
| **09.03 Bilan clos** | project_cycles + D4 events + documents revisions | Situation **au moment de la clôture**, liens sujets/réserves/documents/versions, trous explicites | **Critique** : historique fiable, pas de reconstruction fictive |
| **09.04 Étape envisagée** | Orientation D5 textuelle | Consulter cycle futur réellement proposé, sans ouvrir de cycle | Lecture de la proposition typée, pas de générateur de tâches |
| **09.05 CKI/méthode** | CKI manifest/pin ; methodApplications D5 | Fiche éditoriale source/version, méthode distincte, états absents | Réutiliser catalogue vérifié, pas de méthode par défaut |
| **09.06 Projet sans cycle** | Cycle absent dans D5, objets D4 durables | Vue Projet adéquate et non bloquante | Variante, pas un second composant métier |
| **09.07 Trajectoire initiale** | Trajectoire absente dans D5 | Qualification non disponible / insuffisante clairement motivée | Variante du même état de lecture |
| **09.08 Entre deux cycles** | Cycle clos durable, aucun actif | Consulter bilan antérieur, suite éventuelle, initiative Nora | Projection historique + futur, sans ouverture implicite |
| **09.09 Premier actif** | Un cycle ACTIVE vérifiable | Roadmap sans antécédent fictif, acquis adaptés au premier cycle | Réutiliser le même composant |
| **09.10 Qualification en cours** | Aucun statut D5 spécifique attesté | Voir progression 2/3 puis 3/3, sans refresh/navigation | **Structurant** : lecture état durable + notification |
| **09.11 Proposition initiale** | Trajectoire PROPOSED texte | Séquence type cycle 1 → éventuels 2/3, non retenue, message Nora cohérent | **Structurant** : contrat de proposition structurée |
| **Conduite de cycle conversationnelle** | Commandes D5/D6 et qualification sémantique | Nora propose/relance/clôture recommandée ; GO naturel → effet propriétaire | **Critique** : maintenir autorité sans panneau d'administration |
| **Synchronisation UX** | GET et états React par surface | Même opération, même version, rafraîchissement sans action utilisateur | **Structurant** : publication cohérente, stratégie réactive minimale |
| **Traçabilité complète** | Commandes, révisions, décisions, événements multiples | Corrélation préparation→proposition→message→décision→cycle→CKI→bilan | **Critique** : pas de journal concurrent ni traces de raisonnement privé |

**Lecture :** les colonnes « écart » sont des travaux à instruire, pas un verdict d'absence absolue de toute capacité. L'audit détaillé Cursor du HEAD local devra confirmer les réutilisations et signaler tout code plus récent que cette baseline.

## 4. Architecture fonctionnelle TO-BE et frontières de responsabilité

### 4.1. Chaîne métier de référence

1. **SAS / D2** : préparation intelligible ; le Pilote clique Créer le projet ; D2 vérifie l'acte, les droits et le résultat du commit.
2. **Après création confirmée / D2→D3** : enregistrement ou découverte **durable et idempotente** du besoin de qualification initiale, lié au projet et à sa préparation.
3. **Qualification / D3 + données D4/D5/CKI** : Nora examine intention, éléments sourcés, inconnues, catalogue de types et références CKI ; elle produit une proposition séquentielle **au niveau des cycles**, une clarification ciblée ou un échec technique qualifié.
4. **Publication / D3+D5** : le résultat proposé et la première intervention Nora sont conservés avec une corrélation de version. La vue 09.11 ne peut pas annoncer une proposition « prête » sans restitution cohérente et durable.
5. **UX** : SAS/Travail/Trajectoire suivent l'opération ; pendant l'analyse, Travail verrouille l'envoi ; à l'issue vérifiée, l'interface se met à jour automatiquement.
6. **Décision / D6** : le Pilote accepte, modifie ou refuse la trajectoire et autorise le premier cycle ; Nora challenge sans imposer sa recommandation.
7. **Effet D5** : ouverture vérifiée, un seul cycle actif, CKI principal associé selon type et version ; réponse Nora fondée sur l'effet constaté.
8. **Cycle actif** : Nora conduit le travail, mobilise D4 et la guidance CKI réellement disponible, apprécie la maturité lors d'événements significatifs et recommande une clôture ou une réorientation proportionnée.
9. **Transition** : GO explicite contextualisé du Pilote ; D6 vérifie ; D5 clôture, ouvre si autorisé et conserve bilan, version de trajectoire et références ; Nora relance la suite sans nouveau formulaire.
10. **Historique / UX** : consulter tout cycle clôturé avec état véritable à clôture, réserver les données en cours aux vues courantes.

### 4.2. Matrice RACI fonctionnelle (autorité et données)

| Objet / acte | Propriétaire de vérité | Contributeurs / consommateur | Interdit |
| --- | --- | --- | --- |
| Identité projet et création | D2 avec contrôle d'accès D1 | SAS, D3, portefeuille | Déduire une création du chargement UI |
| Opération initiale de qualification | Responsabilité de continuation D3 intégrée au déclencheur D2, selon architecture approuvée | D4, D5, UI | Deux états concurrents de qualification ou deux projets |
| Raisonnement/recommandation Nora | D3 | D4, D5/CKI, D6 en lecture | Transformer un avis en GO |
| Trajectoire proposée/retenue | D5 | Nora D3, autorité D6, UI | Textes contradictoires avec une proposition D5 réelle |
| Cycles et CKI courant | D5 | D3, D4, UX | Ouvrir au clic de lecture, deuxième ACTIVE |
| Sujets/acquis/points ouverts | D4 | D3, D5 en lecture, Journal/Projet | Déplacer les objets dans un stockage « Trajectoire » concurrent |
| Décisions, restrictions et GO | D6 | D3, D5, Journal/UX | Réémettre une décision depuis un résumé de Nora |
| Documents et versions | D4/surface Documents et ses contrats | Bilan, Projet, Journal | Perdre provenance ou version historique |
| Résultats/preuves | D8 et domaines producteurs | Nora, UX, qualité | Déclarer ADOPTED ou LIVE à partir d'une intention |
| UI | Projection de lecture du contexte projet et états propriétaires | Navigation, indicateurs, liens | Mutation métier à la consultation d'un écran |

**Architecture de responsabilité, non diagramme de services physiques.** Le choix de fichiers, fonctions, tables et endpoints relève de la conception Cursor, avec contrôle du blast radius.

## 5. Contrats de réalisation intégrés — exigences vérifiables

### AC-01 — Création durable et qualification distincte

- **Précondition :** préparation SAS qualifiée, Pilote authentifié, acte Créer le projet explicite et unique.
- **Succès D2 :** projet réellement présent et appartenant au Pilote, même si le navigateur ferme ou si l'analyse échoue.
- **Suites :** la qualification initiale est engagée **après confirmation réelle** ; le traitement ne doit pas retenir indéfiniment l'accusé D2 ou une navigation nécessaire pour retrouver le projet.
- **Fenêtre d'incertitude :** si commit D2 confirmé mais signal de préparation non encore posé, la reprise doit **retrouver ou créer une seule opération initiale**, pas un deuxième projet. L'identité de cette opération est stable et liée au projet.
- **Non-effets :** aucun cycle, CKI principal, méthode, autorisation externe ou ressource Git créé par ce passage.
- **Erreurs :** CONFLICT/UNKNOWN D2 se réconcilient avec la même clé ; rejet/ACK perdu ne valent ni création ni absence de création sans preuve.

### AC-02 — Qualification initiale utile

- **Entrées :** intention SAS, résultat et contraintes, acquis, questions non résolues, sources et versions qualifiées, catalogue des types de cycles et références CKI réellement disponibles.
- **Sortie cognitive A :** premier cycle recommandé, raisons/finalité, et zéro à deux suites **si réellement qualifiées**. La projection exprime la séquence prospective, pas des alternatives de premier cycle.
- **Sortie cognitive B :** informations insuffisantes et clarification ciblée. Aucune trajectoire inventée pour remplir trois cartes.
- **Sortie technique C :** erreur ou UNKNOWN distinct de l'insuffisance cognitive ; projet conservé ; état observable et reprise.
- **Contraintes :** ne pas supposer automatiquement Cadrage au premier rang ; répondre au choix explicite d'un autre type si autorisé. Le catalogue sert à **informer la proposition**, pas à activer un CKI.

### AC-03 — Première restitution proactive cohérente

- **Initiative :** un premier message Nora doit être produit dans le fil SAS→Projet sans nouveau message Pilote, après qualification réussie ou constat de manque d'informations.
- **Unicité :** double clic, retry, perte réseau, deux onglets, reprise, crash entre proposition et message → **une seule restitution effective cohérente**, sans duplication ni attribution fictive au Pilote.
- **Cohérence :** le résultat D5 proposé et le message Nora sont liés à la **même qualification/version** ; un résultat calculé mais non publié n'est pas présentable comme complet.
- **Technique C :** incident système affiché au nom de Studio, non comme une conclusion cognitive de Nora.
- **Si contexte évolue avant publication :** protection contre une réponse périmée ; l'UX initiale verrouillée évite un nouveau tour du Pilote pendant l'analyse, sans empêcher les mises à jour de droits/état serveur qui doivent être revalidées au commit.

### AC-04 — État partagé, compositeur et réactivité

- **Source unique :** SAS, Travail 05.17 et Trajectoire 09.10/09.11/09.07 consomment un état serveur corrélé au projet, pas trois automates de façade.
- **En cours, étape 2 ou étape 3 non publiée :** compositeur présent, grisé, non focusable en saisie, envoi et raccourcis ; texte de cause et info-bulle accessibles au survol et au clavier ; l'API d'envoi refuse aussi le tour concurrent.
- **Déblocage :** proposition D5 + message Nora durable et cohérent, ou clarification durable, ou **incident technique confirmé** ; pas à la seule disparition d'un spinner.
- **UNKNOWN :** verrou seulement le temps d'une réconciliation effectivement pilotée, sans boucle infinie. Reprise contrôlée et information intelligible si la situation ne se résout pas.
- **Actualisation :** un Pilote sur 09.10 voit la proposition 09.11 apparaître **sur place**, sans recharger ni changer d'onglet ; Travail reçoit le même événement et affiche message et déblocage cohérents.
- **Transport :** solution compatible avec l'architecture existante (push déjà disponible ou lecture périodique mesurée) ; ne pas imposer SSE/WebSocket ni nouveau bus avant preuve de nécessité. Indiquer l'étape connue, jamais un pourcentage IA inventé.
- **Navigation :** consulter Projet, Journal, Documents, Trajectoire est autorisé pendant le verrou ; aucun accès en lecture ne redéclenche la qualification ou la conversation.

### AC-05 — Projet, informations d'activité et état sans cycle

- **09.01/09.06 :** identité réelle, résumé de projet si durablement qualifié, cycle actif **ou absence explicite** ; cartes Sujets ouverts, Décisions applicables, Documents en cours avec provenance et compte exact.
- **Définitions à fixer :** ACTIVE d'un sujet D4 ne signifie pas point OPEN ; documents disponibles ne signifient pas forcément « en cours » ; décisions applicables viennent de D6. Aucun compteur déduit d'une catégorie incorrecte.
- **Cartes :** deux éléments représentatifs plus « + N autres » selon données réelles ; zéro/état absent sans titres inventés ; accès aux surfaces propriétaires, conservant projectId et contexte.
- **Description :** la table projects ne prouve pas un champ description dédié ; privilégier une projection provenant d'un résumé autorisé/qualifié avant d'introduire de la persistance redondante.

### AC-06 — Trajectoire vivante et guidage des cycles

- **D5 :** distinguer clairement PROPOSED, RETAINED, CLOSED/ACTIVE et étapes FUTURES seulement envisagées ; ne pas montrer un cycle futur comme ouvert.
- **Révisions :** proposition initiale, amendement du Pilote, choix d'un premier cycle différent, réorientation, changement de suite → conserver origine/version, ancienne proposition et lien aux actes humains quand ils existent.
- **Nora :** sans trajectoire, le Pilote peut discuter et clarifier, mais Nora conserve comme objectif **la qualification d'une direction structurée** ; pas de blocage global de travail cognitif.
- **GO :** ouvrir un cycle, clôturer, transiter, retenir/modifier une méthode durable nécessitent expression humaine compétente D6 ; en cas d'ambiguïté, clarification ciblée ; en cas de refus/contrainte, pas d'effet.
- **Transitions :** une expression conversationnelle autorisant explicitement clôture puis ouverture peut être traitée comme une transition D5 sous contrôle de concurrence, version et atomicité lorsque applicable ; aucun formulaire supplémentaire par défaut.
- **CKI :** lire le catalogue pour proposer n'est pas activer le CKI principal ; après ouverture effective, conserver association, version/pin, availability et **délivrance** réellement observée ; méthode D5 distincte.
- **Maturité :** appréciation contextuelle sur acquis, risques, résultat du cycle et changements significatifs ; pas de calcul systématique à chaque tour ni score universel ; recommander la clôture **sans l'effectuer**. Après clôture, Nora propose la suite utile ou une clarification.

### AC-07 — Bilan historique du cycle, sans fiction

- **09.03 :** afficher identité/objectif/date et résultat **à la clôture**, travaux réellement réalisés, acquis, réserves/différés, décisions structurantes applicables **alors**, documents et **révisions concernées**, avec références.
- **Provenance :** distinguer contribution réellement liée au cycle, simple coexistence temporelle, projet actuel et état historique à date. Ne pas attribuer un sujet au cycle depuis sa seule date de création si le rattachement n'est pas établi.
- **Évolution :** un sujet corrigé ou un document révisé après clôture ne réécrit pas la restitution historique du cycle.
- **Données anciennes :** si un rattachement ou un état ne peut être prouvé rétrospectivement, présenter une lacune explicitement, pas un bilan exhaustif inventé.
- **Historique versionné :** évaluer la disponibilité des événements D4, des versions documentaires et des cycles avant de choisir entre projection reconstruite et photographie bornée. Une future évolution D4/DB exige blast radius et gate distinct, pas de migration imposée par ce dossier.

### AC-08 — Conformité visuelle et navigation

- Réutiliser le shell, rail et les composants sobres de l'application et les design tokens pertinents ; ne pas ajouter de module « Maturité » ou « Administration ».
- **Neuf écrans 09.01–09.09** validés restent le contrat de présentation ; les **quatre compléments** SAS 06, Travail 05.17, Trajectoire 09.10 et 09.11 sont également validés UX.
- Navigation vers Travail, Journal, Documents, CKI/méthode, passé et futur : **consultation sans mutation** ; liens retours préservent l'identité de projet.
- Clôturé/Actif/Envisagé : forme, libellé et contraste distincts, pas couleur seule ; focus et clavier accessibles, reflow/responsive, longs textes, zéro élément et erreurs prises en charge.
- Écran technique PilotagePanel : ne pas conserver ses boutons comme tâche du Pilote dans la cible. Mais **NE PAS RETIRER** les commandes ni leurs accès fonctionnels avant démonstration de leur déclenchement conversationnel autorisé, du diagnostic et des tests.

## 6. Contrat logique d'états et de synchronisation

### 6.1. États à distinguer (vocabulaire conceptuel, pas table imposée)

| Famille | États/conditions utiles | Conséquence métier / UI |
| --- | --- | --- |
| **Création** | Non confirmée ; CREATED ; ALREADY_CREATED ; CONFLICT/UNKNOWN | D2 arbitre l'existence ; seule CREATED ou ALREADY_CREATED vérifiée donne accès au projet |
| **Qualification initiale** | Non engagée à découvrir ; PENDING ; RUNNING ; résultat calculé non publié ; QUALIFIED ; NEEDS_CLARIFICATION ; FAILED ; UNKNOWN | Un seul projet/opération ; suivi 1/3, 2/3, 3/3 ; terminal cohérent requis pour déverrouiller |
| **Trajectoire D5** | ABSENT ; PROPOSED ; RETAINED ; SUPERSEDED | Proposition ≠ décision de rétention ≠ cycle ouvert |
| **Cycle D5** | Aucun actif ; ACTIVE ; CLOSED | Un seul ACTIVE maximum ; historique des CLOSED maintenu |
| **CKI** | Catalogue connu ; associé ; résolu ; délivré si attesté ; indisponible | Pas de guidance spécialisée prétendument active avant cycle réellement ouvert |
| **Conversation D3** | Fil lié ; traitement initial en attente ; message Nora terminal publié ; incident ; reprise | Pas de nouveau tour pendant qualification initiale, pas de message dupliqué |
| **Gouvernance D6** | Choix/GO absent, ambigu, autorisé, interdit, révoqué | L'effet dépend de l'autorité et des restrictions réelles, pas d'un texte Nora |

Ces familles peuvent être **des projections de structures existantes** ; ne pas créer une machine à états globale pour chaque ligne. Un état global d'interface est une **lecture dérivée**.

### 6.2. Invariants de cohérence

- **I-01** : commit du projet vérifié avant « Projet créé », analyse subséquente non nécessaire à la validité du projet.
- **I-02** : une création confirmée peut avoir une qualification en cours/échouée, mais jamais un cycle ouvert par cette seule qualification.
- **I-03** : une seule qualification initiale **logiquement active** par projet et intention de création, avec version d'entrée et corrélation durable.
- **I-04** : une proposition D5 et un message initial Nora terminal ne sont exposés comme prêts que s'ils sont tous deux persistés et cohérents ; retry ne crée pas une seconde proposition contradictoire.
- **I-05** : toutes les surfaces lisent le même projectId et les mêmes révisions ; pas de recalcul IA déclenché par GET/navigation.
- **I-06** : compositeur verrouillé pour l'étape initiale en cours **y compris côté serveur** ; déverrouillage seulement sur issue réconciliée.
- **I-07** : le Pilote conserve les décisions de cycles, de méthode et d'orientation ; D6 vérifie au point d'effet ; Nora recommande.
- **I-08** : au plus un cycle ACTIVE/projet ; transition reprise sans doublon, même en concurrence.
- **I-09** : CKI DELIVERED seulement si réellement mobilisé ; l'association ou consultation de catalogue ne suffit pas.
- **I-10** : bilan historique non réécrit par une évolution courante ; provenance et réserves conservées.
- **I-11** : fermeture, changement d'onglet, réseau coupé et retry n'entraînent ni deuxième projet ni deuxième premier message.
- **I-12** : les incidents UNKNOWN ne sont pas classés automatiquement en succès/échec ; une voie de réconciliation et une fin de blocage sont définies.

### 6.3. États utilisateur de bout en bout

| Phase | Travail | Trajectoire | Décision permise |
| --- | --- | --- | --- |
| Après création D2, préparation engagée | 05.17, compositeur verrouillé, statut compact | 09.10, analyse 2/3 ou publication 3/3 | Lire/naviguer ; pas de nouveau tour |
| Trajectoire proposable + restitution durable | Premier message Nora présent, compositeur ouvert | 09.11, 1er cycle recommandé et suites envisagées | Accepter, contester, changer l'orientation et GO sur un cycle |
| Insuffisamment qualifiée + restitution durable | Question ciblée Nora ; compositeur ouvert | 09.07, absence de trajectoire expliquée | Poursuivre l'investigation |
| Incident confirmé | Message Studio ; reprise possible ; compositeur ouvert | État d'incident dans 09.07 | Clarifier / relancer selon état réel, sans refaire projet |
| Cycle ouvert | Nora conduit avec CKI disponible | 09.02/09.09, ACTIVE + futur éventuel | Travailler et autoriser transitions |
| Cycle clos et suite non ouverte | Nora propose la suite ou clarifie | 09.08, dernier clos et futur éventuel | Nouveau GO sur ouverture, ou autre orientation |

## 7. Reprise, concurrence, erreurs : scénarios obligatoires

| Cas | Résultat fonctionnel obligatoire | Point technique à vérifier |
| --- | --- | --- |
| Double clic Créer projet | Un projet, un lien SAS, une opération initiale | D2 fingerprint, commandes, corrélation |
| Crash avant commit projet | Aucune création fictive ; réconciliation avec la même intention | D2 reconcileCreateProject, idempotence |
| Commit confirmé, ACK perdu | Projet accessible au retour, même projectId | Séparation de réponse D2 et continuation |
| Projet créé, analyse jamais engagée | Reprise/découverte **une seule fois** | Fenêtre entre commit et enregistrement d'opération |
| Analyse en cours, navigateur fermé | Travail retrouvé, état réel lu au serveur, pas de double analyse | Durée de vie serveur, claim, lease/fence, reprise |
| Deux onglets ouverts | Même état ; pas de deux premières réponses | Concurrence, cache, invalidation, event/revalidation |
| Résultat IA calculé, pas de D5 publié | Ne pas montrer de proposition prête, compositeur encore verrouillé | Publication idempotente et version d'entrée |
| D5 écrit, message Nora pas encore enregistré | Réconcilier publication, pas de message concurrent | Corrélation D5/fil, replay exact |
| Message publié, ACK de publication perdu | Relecture de la même réponse ; aucun doublon | Message stable ID et clé de restitution |
| Analyse conclut manque d'information | Question Nora durable, compositeur disponible, 09.07 honnête | Classification cognitive vs panne |
| Analyse échoue/timeout de calcul | Projet intact, incident visible, reprise bornée, compositeur disponible après échec confirmé | Différencier FAILED/UNKNOWN et reprise |
| UNKNOWN durable | Aucune prétention de fin, pas de verrou éternel | Réconciliation déterministe, plan de récupération |
| Tentative d'envoi pendant verrou | Champ réellement inaccessible et API refuse le tour concurrent | Admission serveur + accessibilité |
| Changement de page pendant analyse | Aucune nouvelle génération ; même version et statut | GET read-only, invalidation d'état client |
| Fin d'analyse en restant sur 09.10 | Transition UI automatique sur place | Notification/rélecture, reflow sans focus forcé |
| Refus du cycle recommandé | Proposition reste proposée/remplacée, Nora challenge, décision humaine réelle | D5 revisions + D6 |
| Deux GO concurrents d'ouverture | Maximum un ACTIVE, conflits/rejeux correctement qualifiés | Index unique, révisions et transactions D5 |
| Clôture suivie de nouveau cycle | Bilan conservé ; pas de faux ouvert ; CKI mis à jour si ouverture confirmée | TRANSITION_CYCLE et rollback/reconcile |
| Révision D4 après clôture | Bilan ancien stable ; état courant visible dans Journal | Time-validity, version/provenance |
| CKI indisponible pendant cycle | Nora reste générale sur ce point, aucune fausse DELIVERED | Résolveur, disponibilité, logs utiles |
| Autre Pilote/projet | Aucune fuite, analyse/trajectoire/messages cloisonnés | Contrôles D1/D2/D3/D5/D6 à chaque accès |

## 8. Options d'architecture à instruire (aucune n'est imposée)

### 8.1. Après création : comment garantir l'opération initiale ?

**Option A — événement/intention durable rattaché au commit de création, puis reprise par les points d'entrée existants.** Avantage : ferme la fenêtre « projet créé, analyse jamais engagée » si l'intention est consignée dans un acte cohérent ; inconvénient : impact transaction/DB potentiellement supérieur. À privilégier si les structures D2 existantes permettent une corrélation simple et la reprise sans scheduler général.

**Option B — opération idempotente découverte/reconstituée à partir du projet créé et de la préparation liée.** Avantage : réutilisation forte de D2 et recovery D3 ; inconvénient : prouver que les points d'entrée sont exécutés même si le Pilote ferme et ne revient pas avant longtemps, et que le résultat n'est pas annoncé en cours sans exécution réelle.

**Option C — traitement serveur indépendant avec signal/worker durable dédié.** À n'utiliser que si A/B ne satisfont pas les exigences de survie/latence/reprise et les garanties souhaitées ; blast radius exploitation et tests plus important. **Pas de queue/ordonnanceur généralisé par défaut.**

**Décision différée à Cursor + revue d'architecture :** démontrer le chemin minimum qui garantit une qualification durable indépendamment du navigateur, sans faire attendre indéfiniment l'API de création. Un POST de création qui exécute tout le calcul jusqu'à la première réponse ne garantit pas la séparation attendue.

### 8.2. Proposition macro : structure minimale ou texte libre ?

**Option recommandée à évaluer :** conserver le propriétaire et le versionnement D5 existants et lui adjoindre, si nécessaire, **une représentation lisible par machine des étapes candidates** : ordre, type de cycle reconnu, finalité, justification, incertitude, source et version. La forme physique est ouverte (payload contrôlé, relation bornée ou projection robuste).

**Non conforme :** parser de manière fragile les titres d'un paragraphe libre pour déclarer les types de cycles, inventer systématiquement trois étapes ou traiter une proposition comme un premier cycle déjà ouvert. La lecture des cycles CLOSED/ACTIVE doit venir de l'état effectif D5, pas du plan prévisionnel.

### 8.3. Restitution Nora + D5 : atomicité et recovery

Évaluer une **publication corrélée et rejouable** : la même opération et version de qualification portent le résultat de proposition et le message de Nora. La disponibilité UX survient lorsque les deux faits sont établis. Si une transaction DB commune est accessible et sûre, elle peut simplifier ; sinon, la reprise doit compléter une écriture partielle sans la dupliquer. Les lectures GET restent sans mutation.

Ne pas introduire un deuxième fil, une table « messages Trajectoire » ni des handlers de proposition indépendants de la conversation propriétaire.

### 8.4. Rafraîchissement : quelles notifications ?

Préférer le mécanisme **déjà présent dans le runtime** si une lecture/notification authentifiée est disponible. Sinon, lecture périodique **bornée, cohérente et interrompue à terminal**, revalidation sur focus/reconnexion et version de projection ; un push dédié n'est motivé que par mesure de fluidité, charge ou latence. L'UX ne choisit pas la topologie physique.

Ne pas afficher « étape 2/3 terminée » sans fait observé ; 3/3 correspond à la restitution durable, pas à un spinner IA décoratif.

### 8.5. Bilan historique : reconstruction ou capture ?

- **Reconstruction à partir de références/événements/versionnements existants** : bonne si tous les objets pertinents possèdent des identités stables, provenance et état temporel suffisants ; l'absence de liens doit rester visible.
- **Capture bornée au moment de clôture + liens vers sources/version** : pertinente si les événements historiques ne permettent pas de reconstituer certains états, à condition de ne pas créer une copie concurrente des décisions/documents et de conserver la provenance.
- **Combinaison minimale** : références temporelles vérifiables pour données existantes + complément à clôture pour réserves/résultat spécifique.

**Stop technique :** tout changement de persistance sur D4/D5/Document nécessite analyse de migration, compatibilité anciennes données, coût, reprise, confidentialité et revue Morris, même s'il sert une maquette UX déjà validée.

### 8.6. Commandes de Pilotage : invisibilité UX, contrôles préservés

La convergence visée n'est **ni** de conserver à l'identique la console administrative **ni** de supprimer les commandes du produit. Les capacités D5/D6 doivent être invocables à partir de l'intention conversationnelle durablement qualifiée ; les effets restent vérifiés et traçables. Le retrait du panneau est conditionné à la preuve des ouvertures, clôtures, transitions, choix de méthode et restrictions par l'expérience conversationnelle. Un chemin de diagnostic autorisé peut demeurer pour exploitation, **sans en faire le parcours principal du Pilote**.

## 9. Impacts et risques (blast radius)

| Domaine touché | Impacts envisageables | Risque principal / contrôle |
| --- | --- | --- |
| D1 / portefeuille | Projet accessible pendant qualification, statut vrai après reprise | Ne pas faire dépendre le portefeuille d'une analyse IA |
| D2 / SAS | Dédoublement création/analyse, commit→reprise, modal, API et idempotence | Projet double, ACK perdu ou latence masquant un commit |
| D3 / Nora | Déclencheur proactif, corrélation message, garde d'admission, conduite des cycles | Deux réponses concurrentes, initiative inexistante ou texte non fondé |
| D4 / Journal / Documents | Projections de sujets/acquis/points/docs, provenance et historique | Copies d'autorité, attribution de cycle non prouvée, faux comptes |
| D5 / CKI / méthode | Versionnement trajectoire séquentielle, cycles, bilan, disponibilité CKI | Cycle fantôme, double ACTIVE, CKI activé avant GO |
| D6 / Gouvernance | GO conversationnel, choix du Pilote, restrictions/ambiguïtés | Transition non autorisée ou confiance abusive dans le texte IA |
| UX / routes / shell | SAS modal, Travail verrouillé, Projet, Trajectoire dynamique, détails/retours | États contradictoires, refresh forcé, accessibilité insuffisante |
| Données / DB / API | Évolution possible de projections, contraintes, opérations et historiques | Migration régressive, rupture de compatibilité, reprise incertaine |
| Tests / preuves | PG, navigateur, interprojet, réseau, responsive, références Figma | « IMPLEMENTED » déclaré sans comportement prouvé |
| Exploitation / observabilité | Durée de qualification, échecs, reprises, corrélations anonymisées | Verrous permanents, journalisation excessive, absence de diagnostic |

**Garde-fous :** contrôle d'identité sur chaque lecture/écriture ; cloisonnement Pilote/projet ; source externe et contenu CKI jamais source d'autorité ; ne pas stocker ni divulguer le raisonnement privé ; logs synthétiques (id d'opération, état, références, durées, erreurs), pas de secrets ni de transcript intégral par défaut ; budgets de réessai, annulation/reprise et rétention raisonnables à qualifier ; séparation des niveaux de preuve.

## 10. Réconciliation normative proposée — non publiée comme modification R2

Les écarts ci-dessous doivent être instruits dans leurs **documents propriétaires** après validation Morris du présent dossier. Ne pas remplacer les règles actuelles par ce texte ni créer une deuxième vérité doctrinale.

| Contrat actuel | Invariant à préserver | Complément de spécification à arbitrer |
| --- | --- | --- |
| **D2 RG-CRE-004/005** | Intention suffisante pour créer ; trajectoire et premier cycle non imposés pour la création | **Après** création vérifiée, engagement systématique d'une qualification initiale et restitution proactive, sans cycle induit |
| **D2 RG-CRE-010/011/013/017/019/021/024/025** | Création vraie, idempotence, SAS→projet même fil, reprise, projet accessible, conversation possible sans cycle | Découpler cycle de vie **création D2** et **analyse D3/D5**, expliciter états d'attente/reprise et compositeur temporairement verrouillé sans bloquer les autres lectures |
| **D3 conduite et RG-CONV / RG-CTX** | Initiative cognitive dans le mandat, contextualisation, restitution vraie, pas de décision Nora | Déclencheur post-création, utilisation catalogue cycles/CKI pour proposer, première réponse unique, maturité/continuité, publication et reprise cohérentes avec D5 |
| **D5 RG-TRJ-001/002/003/008/009/010** | Pas de trajectoire obligatoire pour l'exploration cognitive ; futur ≠ ouverture ; GO pour cycle | **Pré-requis conditionnel pour progression structurée** et proposition macro initiale séquentielle ; version/status/étapes candidates traçables |
| **D5 RG-TRJ-012…016 et 030…040** | Un cycle actif, guidance CKI conditionnelle, méthode distincte, maturité qualitative, non-automatisme de clôture | Initiative de recommandation de clôture/suite, sortie historique fidèle, projection des cycles clos/actifs/futurs, traçabilité CKI réellement délivré |
| **D4 sources, sujets, documents** | Connaissances propriétaires, provenance, versions, historique non réécrit | Qualification de rattachement au cycle et de restitution à date de clôture sans second registre |
| **D6 RG-GOV-002/004/005/008** | Pilote seul auteur de décision, GO naturel possible, ambiguïté = clarification, interdictions opposables | **Aucun transfert d'autorité** ; démontrer que les opérations restent réalisables conversationnellement après disparition de l'UI administrative |
| **R4 architecture et observabilité** | Propriétaire unique des effets, transaction/reconciliation, absence de moteurs concurrents | Évaluer la meilleure réutilisation des commandes existantes, de la continuation et des faits historiques ; définir preuves de synchronisation et reprise |

**Évolution normative = mandat D2 distinct.** Le présent dossier est une **proposition structurée pour relecture**, non une modification des specs R2 et non une autorisation de migration. Après arbitrage du contenu, publier les ajustements normatifs uniquement sous le GO Git adapté, sans paralléliser arbitrairement la révision documentaire et le code.

## 11. Macro-lot de réalisation candidat et séquencement utile

**Intégrateur :** Cursor sous SFIA v2.6 après GO technique Morris borné ; ChatGPT prépare/revoit le contrat et les preuves ; Morris arbitre. Un seul macro-lot « Projet, Trajectoire et conduite continue » avec sous-ensembles intégrés, **pas un cycle Cursor par écran**.

### Contrat d'entrée

- Dossier d'architecture relu/validé ou ajusté par Morris.
- Propriétaires D2/D3/D4/D5/D6 réconciliés sur les évolutions normatives nécessaires ; pas de contradiction bloquante.
- Baseline de code et branche candidate Cursor vérifiées à HEAD ; tests/CI présents ; environnement local inspecté par Cursor.
- Inventaire des 13 références Figma/variantes et de leurs interactions, plus état du code de l'Ensemble 06.
- Choix technique des points ouverts (durabilité de préparation, proposition structurée, historique à clôture) borné selon les critères du §8 ; impacts/migrations explicitement autorisés si nécessaires.
- Contrat SFIA v2.6 instancié **depuis les sources Git courantes** au moment du GO ; pas de prompt généré sur une hypothèse de branche.

### Sous-travaux cohérents au sein du lot

1. **Frontières et contrats de lecture/écriture** : qualifier états, identités/version, owner D2/D3/D5, D6, D4, API et cohérence ; ne changer que ce qui manque.
2. **Création → qualification initiale → restitution** : continuité récupérable, proposition D5, message Nora et admission concurrente ; tests idempotence/crash/reprise.
3. **Trajectoire vivante / cycles / CKI** : projections passé/actif/envisagé et recommandations Nora au bon moment ; bilan historique vrai ; preuve d'autorité.
4. **UX et navigation** : 13 variantes, shell, états, liens, compositeur réellement verrouillé, synchronisation automatique, accessibilité, responsive.
5. **Qualification commune** : PG, navigateur, Figma-runtime, scénarios erreurs/concurrence, doc as-built, Review Pack/Handoff, gate de recette Morris.

Ces sous-travaux ne sont pas automatiquement des branches ou PR séparées. **Scinder seulement** si une nouvelle migration/règle de gouvernance impose un gate réel ou si les interfaces s'avèrent non maîtrisables.

### Preuves minimales attendues

- **Déterministe/PG** : D2 création + ACK perdu ; opération unique ; proposition D5 et message corrélés ; cycle unique ; transition atomique ; historiques et D6 ; isolement interprojet.
- **Navigateur réel** : étapes 1–3, fermeture/reprise et deux onglets, verrou/tooltip clavier, progression visible, passage 09.10→09.11 sans refresh, premier message unique.
- **Figma/runtime** : treize maquettes/variantes comparées à viewport pertinent, visuel, navigation, responsive, focus, vides, erreurs et longueurs de contenu.
- **Nora** : au minimum qualification initiale utile, manque d'information, premier cycle alternatif décidé, recommandation de clôture, GO et résultat vérifié ; distinguer FAKE/déterministe de LIVE/REAL.
- **Gouvernance et persistance** : référence de chaque proposition, décision, cycle, CKI/pin et bilan ; refus et restrictions ; aucune autorisation inventée.
- **Documentation et livraison** : architecture as-built synchronisée avec code, réserves/exit, tests et niveaux de preuve, Review Pack mono-cycle conforme, handoff SFIA requis, gates et UAT Morris distincts.

## 12. Questions ouvertes soumises à la relecture (pas de prétexte à retarder la conception)

| Réf. | Question à résoudre en qualification technique | Proposition de traitement |
| --- | --- | --- |
| Q-01 | Comment garantir un lancement de qualification après commit D2 sans attendre le navigateur ? | Comparer reprise à partir de D2 avec opération durable corrélée ; mesure et preuve avant choix |
| Q-02 | Le même mécanisme D3 de continuation de mission peut-il porter l'analyse sans devenir un second moteur ? | Réutilisation favorisée ; vérification des frontières et de la restitution |
| Q-03 | Où conserver des étapes de trajectoire typées et révisables alors que orientation est du texte ? | Compléter minimalement D5 ; interdire parsing fragile comme source de vérité |
| Q-04 | Quel critère fiable distingue un document « en cours » et un sujet « ouvert » ? | Définir la sémantique avec D4/D6/Docs à partir d'états existants |
| Q-05 | Comment lier les contributions D4/Docs à un cycle clôturé et à leur état historique ? | Audit événement/version d'abord ; option capture bornée seulement pour lacunes réelles |
| Q-06 | Quelle conservation suffisante de la dernière appréciation Nora datée ? | Réutiliser les résultats/synthèses existants si prouvés ; ne pas imposer table nouvelle |
| Q-07 | Quels faits marquent réellement 2/3, 3/3 et le terminal visible ? | Définir transitions vérifiées et version de projection ; pas de progression factice |
| Q-08 | Quelle option de refresh offre une UX réactive sans bus nouveau ? | Mesurer/favoriser le mécanisme existant, sinon revalidation périodique maîtrisée |
| Q-09 | Comment lever un verrou UNKNOWN sans exposer un deuxième tour incohérent ? | Règle de réconciliation et récupération bornées, avec signal d'incident |
| Q-10 | Comment retirer PilotagePanel sans perdre les mutations gouvernées ? | Contractualiser et prouver d'abord les chemins D3→D6→D5 en chat |
| Q-11 | Quelle fraction des bilans des anciens cycles est reconstructible ? | Indiquer les limites réelles ; pas de rétro-remplissage fictif |
| Q-12 | Quel coût/latence d'une qualification IA initiale et quel traitement d'indisponibilité ? | Timeout/échec honnête, circuit de reprise proportionné, UX non bloquante au-delà du compositeur |

Les options ne sont **pas** des demandes de douze validations utilisateur. Cursor doit instruire les détails d'implémentation compatibles avec le contrat ; **Morris n'arbitre que les frontières structurantes, les impacts protégés, les dérogations et les gates**.

## 13. Grille de recette proposée — couverture fonctionnelle et UX

| ID | Scénario | Critère observable |
| --- | --- | --- |
| E07-A01 | Créer projet depuis un SAS qualifié | Une fiche projet confirmée, même préparation et fil, zéro cycle automatique |
| E07-A02 | Analyse démarrée après commit | Opération durable traçable, état réel visible, API D2 non dépendante de l'issue IA |
| E07-A03 | Double clic / lost ACK / navigateur fermé | Un seul projet et une seule qualification logique retrouvés |
| E07-A04 | Trajectoire proposable | 09.11 séquence macro 1 à 3 cycles, version D5, premier message unique dans Travail |
| E07-A05 | Informations insuffisantes | 09.07 honnête, Nora pose une question déterminante, compositeur disponible |
| E07-A06 | Erreur technique confirmée | Incident Studio et reprise, aucun faux message Nora ni projet perdu |
| E07-A07 | Qualification en cours | 05.17 + 09.10 identiques sur état/version, compositeur inactif et message d'explication |
| E07-A08 | Fin sur Trajectoire | 09.10 se met à jour sur place, sans navigation/rechargement, puis accès au fil |
| E07-A09 | Échec pendant publication D5/message | Reprise corrélée, pas de proposition prête isolée ni duplicata |
| E07-A10 | Réouverture du projet, plusieurs onglets | Même projet, version, réponse et verrou, sans relancement GET |
| E07-B01 | Projet avec cycle et activité | 09.01 compteurs véridiques, propriétaire et cycle exact |
| E07-B02 | Projet sans cycle | 09.06 présent, consultation des objets D4/D6/Docs intacte |
| E07-B03 | Trajectoire clos/actif/futur | 09.02 contraste, états et navigation sans effet |
| E07-B04 | Premier cycle actif | 09.09 sans passé inventé, CKI seulement associé après effet |
| E07-B05 | Cycle clos consulté | 09.03 résultat/réserves/documents/versions à clôture, lacunes signalées |
| E07-B06 | Suite envisagée | 09.04 non ouverte, lien Travail sans message injecté |
| E07-B07 | CKI/méthode | 09.05 référence/version pertinentes, absence honnête, méthode non imposée |
| E07-B08 | Entre deux cycles | 09.08 cycle clos et suite éventuelle, Nora recommande sans créer |
| E07-C01 | Pilote préfère un autre type initial | Nora challenge sans imposer, GO reconnu si autorisé, D5 vrai |
| E07-C02 | Nora recommande clôture sur maturité | Bilan/réserves présentés, aucun changement D5 sans GO |
| E07-C03 | GO conversationnel de transition | D6 valide, D5 effectue ou rejette, un seul ACTIVE, reprise contrôlée |
| E07-C04 | Restrictions et GO ambigus | Aucun effet illégitime, explication contextualisée, travail cognitif sûr possible |
| E07-C05 | Évolution après clôture | Journal actuel évolue, bilan historique ne se réécrit pas |
| E07-C06 | Accès autre projet/Pilote | Isolation des données, historique, qualification, messages et décisions |
| E07-U01 | Figma et accessibilité | 13 variantes, responsive, états négatifs, clavier, focus, navigation, contraste |
| E07-U02 | Régressions Ensemble 06/Travail | Journal, Documents, brouillon, fil long et commandes antérieures toujours fonctionnels |

## 14. Risques, dette et critères d'exit

| Risque | Gravité / réponse attendue | Exit |
| --- | --- | --- |
| R-01 — Nouvel automatisme cognitif mal déclenché | Élevée : plusieurs opérations/commandes réelles ; empêcher double lancement et faux GO | Rejeu et interruption PG + browser, corrélations prouvées |
| R-02 — Contrat D5 textuel insuffisant | Élevée : affichage 09.11 trompeur | Représentation fiable et versionnée, round-trip/projection prouvés |
| R-03 — Historique inféré fictivement | Critique : atteinte à la vérité du projet | Preuve à clôture ou lacunes honnêtes, tests d'évolution post-clôture |
| R-04 — Verrou composer régressif | Élevée : UX bloquée ou envoi concurrent | Admission serveur, accessibilité, réconciliation, déverrouillage après terminal |
| R-05 — Interface administrative supprimée trop tôt | Critique : perte de gouvernance/opérations | Toutes commandes nécessaires prouvées en parcours conversationnel |
| R-06 — CKI/méthode confondus | Moyenne/élevée : recommandation devenue autorité | Tests ASSOCIATED/RESOLVED/DELIVERED et GO humain |
| R-07 — Trop de mécanismes de suivi | Élevée sur maintenance ; privilégier projections et état source unique | Pas de moteur/registre/worker additionnel sans justification |
| R-08 — Preuves uniquement déterministes | Élevée si revendication LIVE | Capture browser réelle, niveau de preuve qualifié, réserves tracées |

Une dette ne se justifie que par **un besoin démontré, un propriétaire, une conséquence et une condition de sortie**. Ne pas transformer un défaut de restitution historique en « acceptable » par défaut ; l'acceptabilité et la portée des réserves appartiennent à Morris.

## 15. Sources et contrôles de traçabilité

### Sources produit et gouvernance sur main

- [SEF v0.2](../../governance/SEF.md), notamment §10 — contribution D0/D1/D2/D3 et autorisations Git.
- [Roadmap Next](../../governance/roadmap.md), état courant 20/11 — Ensemble 06 intégré, Gate C encore ouvert.
- [Nommage produit VALIDATED](../../governance/product-naming-conventions.md) — concepts durables par responsabilité, non par numéro de chantier.
- [Vision R1](../../cadrage/vision-produit.md), notamment §§2.16–2.20 — cycles, CKI, maturité proactive, trajectoire, SAS.
- [Conduite des intentions et continuité cognitive](../../cadrage/conduite-intentions-continuite-cognitive-nora-studio.md) — une intention conduite de bout en bout.
- [D2 — Création](../../conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md) ; [D3 — Nora](../../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md) ; [D4 — Connaissance](../../conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md) ; [D5 — Cycles/CKI](../../conception-fonctionnelle/trajectoire-cycles-et-guidance-cki.md) ; [D6 — Autorité](../../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md).
- [Architecture R4](../../architecture-technique/cadrage-r4.md), notamment macro-lot B, et [observabilité](../../architecture-technique/contrat-observabilite-transverse.md).
- [Décision R5 ML4C/ML4D](../../governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md) — exigences de convergence et gate.
- [Contrat Travail avec Nora](contrat-technique-travail-avec-nora.md) — ne pas régresser le fil/compositeur.
- [Contrat Projet & Trajectoire UX validé](ensemble-07-projet-trajectoire-conception-fonctionnelle-contrat-ux.md), branche documentaire candidate.

### Points de code main consultés

- web/src/domains/preparation/create-project.ts ; web/src/app/api/preparations/[preparationId]/create-project/route.ts ; web/src/app/preparations/[preparationId]/page.tsx.
- web/src/domains/conversation/intent-conduction.ts ; mission-continuity.ts ; service.ts ; web/src/components/figma/NoraConversation.tsx.
- web/src/domains/pilotage/service.ts ; types.ts ; cki-resolve.ts ; web/src/components/PilotagePanel.tsx.
- web/src/db/schema.ts ; web/src/components/figma/ProjectOverview.tsx ; web/src/app/projects/[projectId]/page.tsx.
- web/tests/integration/create-project.pg.test.ts ; ml3-pilotage.pg.test.ts ; web/tests/e2e/g4-chat-first-sas.spec.ts ; ml3-pilotage.spec.ts ; ml4c-long-thread-composer.spec.ts.

### Statuts de sortie de cette rédaction

| Dimension | Verdict |
| --- | --- |
| Références UX | **13 maquettes/variantes VALIDÉES PAR MORRIS** |
| Vision cible | **DOCUMENTED** — accord en conversation, transcript fonctionnel/UX versionné |
| Présent dossier | **CONTENU VALIDÉ PAR MORRIS (20/11/2026)** — options d'architecture toujours candidates, aucune architecture adoptée |
| Spécifications D2/D3/D5 | **VALIDATED SPEC existantes**, écarts de réconciliation décrits, **non amendées ici** |
| AS-IS | **OBSERVÉ SUR GIT DISTANT** à main@6e93a33d64dfeea2eab88fb7896d733b34053f97 |
| Runtime, tests, migrations locales, navigateur, LIVE/REAL | **NON OBSERVÉS** |
| GO Cursor, PR, merge, Gate C, ADOPTED | **NON ACQUIS** |

**Décision acquise :** Morris a validé le contenu du dossier le 20/11/2026. **Prochain gate distinct :** instruire, approuver puis autoriser la publication des amendements normatifs propriétaires D2/D3/D5 et, ensuite seulement, préparer un contrat Cursor SFIA v2.6 depuis Git à HEAD vérifié, avec périmètre, STOP, preuves et gates. La validation de ce dossier n'est pas un GO Git sur les spécifications propriétaires ni un GO technique.

**ARCHITECTURE PROPOSÉE ≠ SPEC VALIDÉE ≠ IMPLEMENTED ≠ BEHAVIOR PROVEN ≠ ADOPTED.**
