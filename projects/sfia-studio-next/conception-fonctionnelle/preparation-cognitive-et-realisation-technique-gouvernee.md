# SFIA Studio Next — Préparation cognitive transverse de Nora et réalisation technique gouvernée

## Contrat fonctionnel consolidé — trajectoire ML5

| Champ | Valeur |
| --- | --- |
| Document | Contrat fonctionnel consolidé : investigation cognitive transverse, activité Nora, contrats et réalisation Cursor |
| Version | v0.3 — consolidation du 22 novembre 2026 |
| Autorité du contenu | Morris — validation explicite du fond et du caractère transverse dans la conversation du 22/11/2026 |
| Statut | **D2 VALIDATED IN CONTENT BY MORRIS / GIT CANDIDATE — NOT MERGED** ; ne remplace pas les spécifications R2 propriétaires |
| Dépôt et référence de vérification | mcleland147/sfia-workspace ; main@997897fd7cf914771e7d08e8030dc7123fab7d25 |
| Branche de contribution | sfia/next-nora-cognition-cursor-contract-candidate |
| Périmètre de conception | SFIA Studio Next ; ML5 comme macro-lot intégrateur, **capacités cognitives communes à toutes les situations où Nora travaille** |
| État du produit | D3/D4/Git déjà partiellement implémentés ; recherche web Nora non disponible dans les outils du code inspecté ; ML5 Cursor **NON IMPLÉMENTÉ / NON PROUVÉ** |
| État du programme | Roadmap Git : Ensemble 08 intégré, Gate C OPEN ; aucun GO R5 ML5, aucune promotion, release, adoption ou décision d'architecture issue de ce document |
| Git local | **NON OBSERVÉ** — aucun constat sur worktree, fichiers staged ou non suivis |

> **Portée de la validation.** Morris valide le contenu fonctionnel et autorise la contribution de **ce seul document sur une nouvelle branche Git**. Ce GO documentaire D2 ne vaut ni révision des normes R2 existantes, ni PR, merge, lancement Cursor, modification du code, changement de données, adoption, ni autorisation de construction ML5. Les détails techniques et les preuves restent à qualifier.

---

# 1. Finalité, résultat Pilote et logique de macro-lot

## 1.1. Résultat utilisateur

Le Pilote doit pouvoir exprimer naturellement une intention, être accompagné par Nora au moyen d'investigations pertinentes et fiables, puis — lorsque la réalisation technique est justifiée — inspecter un contrat précis avant de déclencher lui-même Cursor. Studio doit rendre l'exécution compréhensible, retrouver ses traces et donner accès aux résultats, à leur niveau de preuve et à l'avis argumenté de Nora.

Chaîne cible :

**Intention du Pilote → qualification par Nora → investigation multi-sources → contrat versionné → inspection 50/50 → Exécuter / confirmation Oui-Non → tentative Cursor → suivi observable → bilan D8 → avis Nora → échange et décision éventuelle du Pilote → continuité.**

La qualité du contrat est une condition majeure de fiabilité de la chaîne, **pas une certification automatique de l'exécution ou de sa conformité**.

## 1.2. Extension transverse validée

La préparation du contrat révèle trois besoins plus larges :

1. **Investigation cognitive séquencée, approfondie, contextualisée et fidèle aux sources.**
2. **Recherche et consultation de ressources web publiques, sourcées, récentes et en lecture seule.**
3. **Activité fonctionnelle de Nora visible pendant le travail, rattachée à des événements réels ou à des étapes explicitement déclarées, sans divulguer de raisonnement privé.**

Ces trois capacités ne doivent **pas** être limitées à Cursor, au sas, à la conversation dans un projet ni à la création documentaire. Elles sont mobilisables **dans l'ensemble des activités cognitives de Nora**, selon les besoins, les droits, le coût et l'impact de chaque demande.

ML5 reste le **macro-lot intégrateur cohérent** qui doit les faire progresser et les éprouver sur des travaux exigeants. Cela ne justifie ni un second moteur cognitif réservé à ML5, ni une réécriture gratuite de toutes les surfaces Studio. La conception doit qualifier le blast radius transverse avant code.

## 1.3. Approche de construction

Le travail est conduit comme une capacité bout en bout : compréhension, investigation, contrat, UX, autorité, exécution, preuve, continuité et qualification. Code, tests, documentation et revue correspondants appartiennent au même lot ou à des sous-ensembles intégrés avec critères communs.

Les sous-travaux ne sont séparés que lorsqu'une frontière de responsabilité, un risque, une dépendance ou un gate réel le justifie. Aucun micro-cycle documentaire ni moteur concurrent n'est introduit par principe.

# 2. Responsabilités, frontières et vérité des états

| Propriétaire | Responsabilité | Ne doit jamais se voir attribuer |
| --- | --- | --- |
| **Pilote** | Intention, arbitrages métier, mandat, acte Exécuter, validation/acceptation lorsqu'elle est nécessaire | Investigation manuelle imposée de toutes les sources ; validation automatique prétendue |
| **Nora / D3** | Analyse, initiative cognitive proportionnée, sélection et confrontation de sources, préparation et explication du contrat, avis sur les résultats | Autorité métier, droits d'effet par inférence, certification de sa propre conformité |
| **Connaissance / D4** | Sources, documents, versions, sujets, acquis et continuité ; provenance des références exploitables | Second registre d'autorité D6 ou des tentatives D7 |
| **Trajectoire / D5** | Cycle éventuel, méthode et guidance réellement applicables | Passage obligé vers Cursor, autorisation par CKI |
| **Gouvernance / D6** | Auteur, objet, version, portée et validité des autorisations ; décisions, suspensions et acceptations du Pilote | Attestation technique que Cursor s'est exécuté ou arrêté |
| **Réalisation / D7** | Contrat unique, instruction exacte, tentative et observations de l'exécuteur | Verdict D8, décision D6, moteur Git concurrent |
| **Résultats / D8** | Confrontation attentes/observations/preuves, force probatoire, conformité bornée, réserves | Nouveau lancement, décision métier autonome, certification fictive |
| **Git / D9** | Ressources, références, droits et effets Git effectivement connus | Permission implicite depuis une conversation ou un GO de cycle |
| **Cursor** | Réalisation technique dans le mandat effectivement reçu ; retours et rapports déclarés | Arbitrage de portée, merge/push non autorisé, auto-certification du produit |

**Invariants :** projet identifié ; cycle actif facultatif ; un propriétaire canonique pour chaque fait ; inspection distincte de l'autorisation ; autorisation distincte du droit technique ; rapport distinct de preuve ; conformité distincte de validation humaine ; préparation distincte de réalisation ; construction distincte d'adoption.

Une même information peut être affichée dans Travail, Exécution et Résultats sans créer trois vérités concurrentes.

# 3. Capacités cognitives communes à tous les travaux de Nora

## 3.1. Disponibilité contextuelle générale

Les trois capacités transverses doivent être disponibles, lorsque pertinentes, notamment pour :

| Situation Nora | Exemples d'utilisation légitime |
| --- | --- |
| **Sas / avant création de projet** | Recherche d'informations métier publiques, cadrage multi-étapes, activité intelligible ; aucun projet fictif |
| **Travail conversationnel ordinaire** | Investigation d'une question complexe, vérification d'une information actuelle, comparaison de sources |
| **Cadrage et conception** | Confronter vision, spécifications, décisions et documentation technique ; expliciter les contradictions |
| **Création et révision documentaire** | Examiner les sources requises, rédiger et contrôler un document, rendre compte des consultations utiles |
| **Trajectoire, décisions et arbitrages** | Fournir une analyse contextualisée ; aucune preuve ou autorité inventée |
| **Consultation Git** | Recherche ciblée, version/branche/commit, historique et contenu vraiment accessible |
| **Préparation de contrats Cursor** | Investiguer les antécédents et les contraintes, générer un mandat techniquement précis |
| **Revue de résultats et preuves** | Examiner les rapports, écarts, références externes pertinentes, formuler un avis étayé |
| **Correction, reprise et capitalisation** | Retrouver causes, historiques et acquis, puis recommander une suite appropriée |

La disponibilité est **conditionnelle à la demande, à la capacité réelle et aux permissions**, non une lecture exhaustive, une recherche web automatique ou un affichage d'étapes artificielles pour chaque message.

## 3.2. Principe d'usage

Nora détermine les moyens cognitifs pertinents : travail direct, recherche, confrontation, consultation documentaire, Git, web ou préparation de réalisation. Elle doit pouvoir challenger une délégation inutile : une rédaction cognitive qu'elle peut accomplir dans ses droits ne doit pas être envoyée à Cursor artificiellement.

Une recherche nécessitant une ressource indisponible ne bloque que la partie qui en dépend ; elle ne transforme pas tous les travaux indépendants en échec global.

## 3.3. Architecture fonctionnelle commune, sans décision physique anticipée

Ces capacités doivent se rattacher aux responsabilités cognitives, documentaires et d'observation existantes de Nora. La solution technique exacte (services, outils, persistance, événements, SDK et fournisseurs) sera qualifiée à partir du code et des preuves, sans imposer une abstraction nouvelle ni dupliquer les états D3/D4/D7/D8.

# 4. Initiative Nora et GO de préparation

## 4.1. Initiative proportionnée

Nora peut enquêter, questionner, comparer, créer du contenu cognitif autorisé et proposer une suite sans GO pour chaque étape intellectuelle. En revanche, elle ne prépare pas spontanément des contrats techniques à chaque échange.

La **préparation d'un nouveau contrat** relève normalement d'une demande claire ou d'un accord préalable du Pilote. Les exceptions sont liées à un **mandat de travail déjà borné**.

## 4.2. Cas nominaux

- **Exploration d'un sujet nouveau :** Nora analyse et challenge. Elle peut proposer de passer à un contrat si le besoin devient mûr, sans le créer automatiquement.
- **Besoin mûr sans mandat de préparation :** Nora propose de préparer le contrat ; le Pilote donne son GO.
- **Demande explicite du Pilote :** Nora prépare sans confirmation cognitive rituelle. Elle peut signaler qu'une réalisation directe par Nora serait plus appropriée.
- **Échec ou résultat insatisfaisant dans un chantier déjà borné :** si la cause est comprise et qu'une correction reste dans le périmètre initial sans nouvel arbitrage, Nora **peut préparer spontanément un brouillon correctif**. Elle rattache ce brouillon au contrat et au bilan antérieurs, explique cause, écarts et correction envisagée.
- **Correction hors périmètre ou affectant autorité/risque/cible :** Nora revient vers le Pilote pour qualifier le nouveau mandat.
- **Cause inconnue, preuves absentes, échecs répétés :** Nora investige et ne fabrique pas une chaîne automatique de nouveaux brouillons.

## 4.3. Frontière d'exécution

**L'accord initial sur un chantier peut couvrir la préparation d'un nouveau brouillon dans sa portée. Il ne couvre jamais automatiquement une nouvelle tentative Cursor.**

Chaque nouvelle exécution technique nécessite un contrat applicable, une version inspectée et un **nouvel acte explicite Exécuter**, sous contrôles D6/D7/D9. Les corrections internes autorisées au sein de la même tentative relèvent de son mandat effectif ; elles ne sont pas confondues avec une nouvelle intervention.

# 5. Sources, investigation séquencée et recherche web

## 5.1. Sources mobilisables

Selon la demande, Nora peut exploiter :

- Échange courant et historique conversationnel pertinent.
- Intentions, sujets, acquis, connaissances et points ouverts du projet.
- Décisions, suspensions, restrictions et mandats applicables.
- Documents Studio, leurs révisions et liens entre objets.
- Ressources Git accessibles : dépôts, fichiers, code, branches, commits, PR, comparaisons, contrôles disponibles.
- Contrats et instructions précédents, interventions et tentatives associées.
- Rapports Cursor, observations D7, bilans et preuves D8.
- Guides de conception, exigences UX, méthodes et CKI réellement applicables.
- Documents externes autorisés et pièces communiquées par le Pilote.
- **Recherche web et pages publiques réellement consultées : documentations officielles, API/SDK, guides, notes de version, compatibilités, limitations, normes et retours d'expérience qualifiés.**

Une référence connue ou un résultat de recherche **n'est pas** une source effectivement lue. Une source ancienne n'est pas une observation actuelle. Une documentation fournisseur ne prouve pas que la capacité existe dans la session de Studio.

## 5.2. Sélection intelligente et profondeur

Nora commence par déterminer **quelles informations sont nécessaires à la réponse ou au contrat**, pas combien de documents sont disponibles.

Elle cible les sources déterminantes par résultat attendu, risque, décision, composant, interface, portée temporelle, antécédent ou contradiction. Elle approfondit au fur et à mesure des découvertes utiles, par exemple : décision initiale → document de conception → référence Git → rapport d'exécution → preuve → éventuelle documentation externe.

La consultation exhaustive de dizaines de documents par défaut est exclue. La complétude recherchée est celle **des informations réellement nécessaires**, pas celle du dépôt entier ou d'un nombre arbitraire de pages.

## 5.3. Discipline séquencée et adaptable

La conduite cognitive doit pouvoir :

1. Qualifier l'intention, le résultat recherché, le périmètre et les sources initialement nécessaires.
2. Examiner les sources prioritaires dans leur bonne version et portée.
3. Repérer les dépendances, renvois, contradictions et questions nouvelles.
4. Suivre les références découvertes lorsque leur examen change matériellement le travail.
5. Confronter faits, décisions, hypothèses, historiques et observations.
6. Consolider les acquis déterminants, restrictions et incertitudes.
7. Réinvestiguer les manques importants ; ne pas perdre les contraintes d'un cycle de consultation à l'autre.
8. Construire la réponse, le document, l'avis ou le contrat demandé.
9. Contrôler fidélité, exhaustivité pertinente, provenance, cohérence et limites avant restitution.

C'est une **méthode de travail cognitive**, pas un workflow rigide de neuf écrans ni neuf passes imposées à chaque question simple. Nora doit adapter le nombre de consultations et d'étapes à la mission.

## 5.4. Grandes investigations et ressources

Un travail complexe peut nécessiter plusieurs séquences de récupération et de consolidation. Il ne doit pas exiger l'injection brute et simultanée de tous les documents, conversations, rapports et pages dans une seule requête modèle.

Les limites réelles existent : fenêtre de contexte, taille des sorties, budget d'outils, disponibilité, latence et coût. Elles doivent être qualifiées, calibrées et rendues observables, jamais prétendues infinies.

Les acquis intermédiaires conservés doivent inclure, au niveau utile : objectif, portée, sources/version, faits déterminants, exclusions, décisions, contradictions, réserves, parties déjà produites et reste à examiner. Une synthèse ne doit pas effacer silencieusement une exception ou une restriction.

Lorsque les limites sont atteintes, poursuivre ou reprendre uniquement sous garanties de conservation et d'autorité adaptées. Si la source indispensable ne peut pas être examinée, le résultat qui en dépend reste **incomplet / non prêt** et sa limite est expliquée. Une source secondaire indisponible ne bloque pas le travail indépendant.

## 5.5. Recherche et consultation web — exigence transverse

**Constat du code main examiné :** la politique cognitive de Nora autorise la recherche documentaire D4, l'historique et la lecture Git, mais **aucun outil de recherche web** ; la configuration de l'agent ne lui fournit pas encore cette capacité. La recherche web est donc **à construire et à prouver**, et non une capacité LIVE déjà acquise.

La capacité cible permet, au besoin et en lecture seule :

- Découverte de pages publiques pertinentes.
- Ouverture et consultation du contenu réel des pages/documents.
- Consultation des références suivies lorsqu'elles sont nécessaires.
- Confrontation de plusieurs sources et versions, avec préférence pour la documentation officielle appropriée.
- Identification d'une date de publication, version, fournisseur, URL ou réserve de fraîcheur lorsqu'ils sont vérifiables.
- Explication de la différence entre résultat trouvé, page lue, information comprise et fait vérifié.
- Signalement des pages non disponibles, tronquées, non lisibles, obsolètes ou contradictoires.
- Utilisation des informations obtenues sans les convertir en droit d'action.

**Exemple Cursor :** Nora peut rechercher les documentations actuelles des possibilités CLI, API et agents cloud afin de déterminer les interfaces disponibles, mécanismes de déclenchement, retours, limites, authentification et conditions de suivi. Elle confronte ensuite ces sources à l'architecture réelle de Next, aux droits et aux décisions. Aucun choix CLI/API/Cloud n'est décidé par l'existence de cette documentation.

**Sécurité :** une page web reste une source non fiable contenant des données, pas une autorité. Injection d'instructions, exfiltration, contenu trompeur et liens privés doivent être contrôlés. Aucune navigation authentifiée arbitraire, commande issue d'une page, mutation web ou navigateur automatique généraliste n'est déduit de cette exigence. Fournisseur et moyen technique à décider ultérieurement.

# 6. Activité Nora : transparence fonctionnelle transverse

## 6.1. Finalité

Le Pilote ne doit pas rester face au seul « Nora prépare une réponse… » lorsqu'une investigation dure longtemps. Il doit comprendre **ce que Nora fait fonctionnellement pour produire la réponse** et quels obstacles elle rencontre, sans devoir attendre le résultat final pour découvrir que certaines sources n'ont pas été consultées.

Cette activité est **commune aux tâches cognitives de Nora**, dans le sas, le projet, les documents, les recherches, la préparation de réalisation et l'analyse de résultats.

## 6.2. Contenu utile au Pilote

Exemples d'étapes affichables, seulement lorsqu'elles correspondent au travail engagé :

- « Je vérifie les décisions applicables à cette modification. »
- « Consultation des sources Git du projet. »
- « Je confronte les documents de cadrage et de conception. »
- « Je consulte la documentation officielle du fournisseur. »
- « Je recherche les résultats de la précédente tentative. »
- « Je consolide les contradictions et les contraintes. »
- « Je prépare l'instruction technique et ses limites. »
- « Je vérifie la couverture des critères attendus. »

La formulation peut être naturelle et explicative, comme un commentaire fonctionnel du travail. **Elle n'est pas une retranscription du raisonnement privé du modèle**, ni une promesse d'accès à toutes ses opérations internes.

## 6.3. Conditions de véracité

Quatre natures sont distinguées :

- **Événement effectivement observé :** appel/retour d'un outil, page réellement ouverte, fichier lu, document récupéré, limite/échec technique connu.
- **Étape annoncée ou déclarée par Nora :** ce qu'elle est en train d'essayer d'accomplir ; ne constitue pas une preuve d'exécution d'outil ou de raisonnement effectivement achevé.
- **Étape terminée avec observation adéquate :** consultation ou opération effectivement confirmée, dans sa portée.
- **État incertain ou inaccessible :** résultat partiel, attente, timeout, refus, absence d'accusé, source non vérifiée.

« Git consulté » exige une consultation observée, ou « référence Git déjà disponible réutilisée » si aucune nouvelle lecture n'a été faite. « Documentation web consultée » exige l'ouverture effective, pas uniquement une liste de liens. Un statut d'attente ne devient pas un pourcentage inventé.

## 6.4. UX et conservation

- Affichage **dans le fil Nora**, attaché à la réponse ou au travail concerné.
- Résumé compact visible pendant l'activité, détail repliable pour les étapes significatives.
- Information orientée résultat : type d'investigation, raison fonctionnelle, issue/limite.
- Après achèvement, historique proportionné accessible lorsqu'il aide à comprendre la restitution.
- Pas de duplication de console technique dans tous les espaces, pas de journal d'arguments internes, de secrets ou de chaînes de pensée brutes.
- L'instrumentation doit permettre de distinguer les événements observés des formulations de Nora, même après reprise.

## 6.5. Interactivité retenue

**Transparence uniquement.** Morris ne demande pas, pour cette capacité, de commandes pour interrompre ou micro-piloter les étapes cognitives depuis le widget d'activité. Les contrôles généraux applicables dans Studio ne sont pas modifiés.

L'activité ne doit pas induire une capacité LIVE non prouvée. Le runtime existant fournit déjà une attente générique et quelques résumés après réponse, mais pas encore un suivi fonctionnel détaillé continu démontré de bout en bout.

# 7. Qualité et préparation du contrat Cursor

## 7.1. Conditions avant contrat « prêt »

Nora exploite les sources nécessaires, les acquis et les résultats antérieurs, qualifie les contradictions, dépendances et risques et vérifie que les informations déterminantes sont présentes.

Si une source indispensable reste inaccessible, si la cible/autorité ne peut pas être établie ou si une contradiction matérielle demeure, **le contrat ne doit pas être présenté comme prêt à être exécuté**. Les éléments indépendants peuvent rester exploitables.

La préparation ne consomme aucun mandat d'effet par elle-même.

## 7.2. Longueur proportionnée, sans plafond métier

Un contrat de 250 lignes peut être plus fiable qu'un contrat de 2 500 lignes ; l'objectif est la précision, pas le volume. Si une mission exige 1 500, 2 000 ou 3 000 lignes, aucun plafond fonctionnel arbitraire n'est retenu.

Les limitations techniques réelles de génération, stockage, restitution et transmission devront être qualifiées. **Aucune troncature silencieuse ni substitution de mandat** n'est admissible.

## 7.3. Contrat canonique unique et deux représentations

Le Pilote inspecte une lecture intelligible et l'instruction technique **exacte** visée. Il ne s'agit pas de deux contrats divergents.

Les quatre engagements synthétiques :

1. Ce qui sera fait.
2. Ce qui ne sera pas fait.
3. Le résultat attendu.
4. Le contrôle du Pilote.

Les six volets d'inspection :

1. Mission et résultats.
2. Périmètre et effets.
3. Exécuteur, capacités et autorité.
4. Limites, STOP et réversibilité.
5. Vérifications, preuves et sources.
6. Identité, version et intégrité.

L'instruction Cursor contient au besoin : projet et identité, dépôt/ref/branche/HEAD/base connus, cible exacte, IN/OUT, sources pertinentes, travaux, effets autorisés, contraintes de sécurité, permissions, dépendances, erreurs, STOP, reprise/idempotence, tests, rapport et conditions d'arrêt.

Aucun template concurrent à SFIA v2.6 n'est inventé pour le processus externe. Le produit Next construit son contrat opérationnel D7 selon sa responsabilité réelle ; la capitalisation du processus externe ne s'applique que si justifiée.

## 7.4. Version, source et mutation

Chaque contrat possède une identité et une version inspectable, rattachées au Pilote, projet, éventuel cycle d'origine, sources déterminantes, décisions et restrictions applicables, tentative et futurs résultats.

Un changement matériel de cible, portée, risque ou instruction invalide l'autorisation antérieure pour un nouveau lancement. Secrets et données sensibles ne sont pas exposés par l'inspection ; leur résolution ne masque aucune mutation matérielle.

# 8. Parcours UX : Travail et visionneuse 50/50

## 8.1. Structure retenue

- Rail gauche de navigation permanent.
- Conversation avec Nora dans le panneau central.
- Visionneuse du contrat à droite, **en 50/50 horizontal réel**.
- Nora reste utilisable pendant la préparation et la lecture.
- Le modèle visuel de référence est la convergence UX Next, notamment Travail, Documents et Exécution ; **wireframe v0.4 retenu comme base D0** dans le brainstorming, sans modification Figma.

## 8.2. Entrée conversationnelle

Nora présente une carte de contrat avec titre, version, contexte et lien « Voir le contrat ». La carte ne déclenche jamais Cursor directement.

La visionneuse affiche les engagements, six volets et instruction technique complète, avec fermeture et bouton **« Ouvrir dans Exécution »**. Le bouton « Agrandir » ne présente pas d'utilité pour la lecture verticale retenue et n'est pas prévu.

## 8.3. Déclenchement et confirmation

Le bouton **Exécuter** se trouve sur le contrat inspectable, lorsqu'il est lançable. Le clic ouvre une confirmation générique, sans récapitulatif personnalisé :

> Êtes-vous sûr de vouloir lancer l'exécution ?

Réponses : **Oui / Non**. Non ferme la confirmation et ne lance rien. Oui demande l'exécution de la version inspectée, sous recontrôle des autorisations, restrictions, capacités et droits effectifs.

Ce garde-fou UX évite le clic accidentel ; il ne remplace jamais les contrôles D6/D7/D9. Double clic, réponse perdue et changement de version n'autorisent ni nouveau lancement injustifié ni effet hors mandat.

## 8.4. Navigation

Après Oui, Studio ouvre **la fiche exacte de la tentative dans l'espace Exécution**. Si l'accusé Cursor manque, l'interface reflète « lancement demandé / état à vérifier », pas « en cours » inventé.

La visionneuse ne devient pas une deuxième console d'exécution dans le chat.

# 9. Exécution : contrats, historique et tentatives

## 9.1. Espace propriétaire

Exécution est un espace autonome, durable, accessible depuis le rail. Il permet de parcourir les interventions, retrouver contrats, versions et tentatives, suivre l'état connu et rejoindre les résultats associés.

Une recherche/filtres proportionnés permettent de retrouver les interventions par date, statut, contrat, contexte/cycle et objets associés. Plusieurs interventions le même jour restent distinctes.

## 9.2. Informations essentielles

Une fiche expose : projet, Pilote, contrat et version, cycle d'origine si existant, statut d'autorisation, cible, exécutant réel, tentative, événements disponibles, rapports et liens de résultat.

Le rattachement au cycle est historique : si un cycle était actif à l'autorisation, sa référence demeure ; sinon **hors cycle**, sans cycle fictif.

## 9.3. Suivi d'une tentative

La composition UX candidate suit une présentation en deux zones **sans chat ni compositeur** :

- **À gauche :** situation actuelle, mandat, informations de l'intervention, prochaine étape, réserves et limites.
- **À droite :** rapports et résultats observables, déclarations Cursor, niveau de qualification disponible et accès au bilan.

Les états fonctionnels distincts incluent : prêt, autorisé, lancement demandé, prise en charge confirmée, activité observée, rapport reçu, erreur, STOP demandé, arrêt confirmé, état inconnu et effets partiels.

Ce ne sont pas des états automatiquement attestés ni une machine à états physique déjà adoptée.

## 9.4. Résilience

La fiche demeure accessible après fermeture du chat, changement d'onglet ou reconnexion. Une demande d'arrêt n'est pas un arrêt observé. Une réponse réseau perdue ne prouve ni que Cursor a travaillé, ni qu'il n'a pas travaillé. Toute reprise/réconciliation interdit la duplication aveugle d'effets.

La télémétrie de Cursor et sa capacité d'interruption doivent être **réellement établies** pour la voie d'intégration choisie.

# 10. Résultats & preuves : consultation et avis de Nora

## 10.1. Fonction principale

Résultats & preuves est un **espace de consultation** du bilan, des observations, des écarts et des suites recommandées. Il ne contient pas de boutons d'autorité « Accepter / Refuser / Reporter » dans le parcours retenu.

Le Pilote peut y comprendre les travaux réalisés, les preuves et le degré de conformité, y compris longtemps après la tentative.

## 10.2. Quatre niveaux à ne pas confondre

1. Déclarations de Cursor et éventuels rapports reçus.
2. Faits effectivement observés ou vérifiés par les moyens disponibles.
3. Qualification D8 : conforme sur un périmètre vérifié, non conforme, partiel, non démontré ou incertain selon les cas.
4. Décision métier du Pilote lorsqu'elle existe, relevant exclusivement de D6.

Une tentative terminée, un commit ou un test « vert » déclaré ne certifie pas tout le contrat.

## 10.3. Analyse de Nora

Le bilan met en avant un avis de Nora : **favorable, réservé, défavorable ou indéterminé**, avec justification, sources et prochaine suite.

Nora confronte contrat, critères, documents pertinents, décisions applicables, déclarations Cursor et preuves effectivement disponibles. Elle peut estimer que « le travail est conforme aux attentes sur le périmètre vérifié ».

**Nora ne valide ni n'accepte à la place du Pilote.** Un avis favorable n'est pas un acte HumanDecision, pas une adoption, pas une levée de restriction.

La validation métier, lorsqu'elle est utile, reste exprimable naturellement dans la conversation. D6 la reconnaît et la conserve selon son contrat, sans la rendre obligatoire pour chaque simple consultation.

## 10.4. Navigation bidirectionnelle

Depuis Exécution, accès au bilan de la tentative lorsqu'un bilan existe. Depuis Résultats, accès à l'intervention, au contrat et à la tentative d'origine.

L'absence de rapport ne donne pas lieu à un faux bilan de succès. Un rapport partiel ou un arrêt peut produire un bilan limité si des éléments authentiques existent.

# 11. « En discuter avec Nora » : reprise contextualisée

Depuis un bilan, le bouton **En discuter avec Nora** revient au fil du projet et attache visiblement **la référence du bilan sélectionné au prochain message en préparation**.

Comportement cible :

1. Le Pilote ouvre Résultats et choisit un bilan.
2. Il clique « En discuter avec Nora ».
3. Studio ouvre la conversation avec une référence identifiable : projet, bilan, intervention d'origine et contrat/version nécessaires.
4. Le Pilote peut modifier librement son message, retirer la référence ou ne pas envoyer.
5. **Aucun message ni analyse n'est déclenché automatiquement par le clic.**
6. À l'envoi, Nora récupère l'objet et ses informations dans les permissions actuelles ; si la source est inaccessible ou devenue non valable, elle le signale.

Aucun mot-clé manuel n'est demandé. Cette référence légère exploite les objets D3/D4/D7/D8 existants, sans moteur parallèle de « focus » ML5.

# 12. Sécurité, erreurs, limites et non-régressions

- **Droits :** accès au projet, documents, Git et ressources web déterminé par les droits réels ; consultation n'accorde aucun droit de mutation.
- **Sources externes :** documents et pages web ne constituent pas des instructions ou autorisations ; défense contre injection, exfiltration et confusion de provenance.
- **Multi-sources :** désaccords distingués par nature, version, branche, période et autorité ; pas de consolidation trompeuse.
- **Contexte :** limite atteinte ou document essentiel indisponible → conclusion bornée, pas « prêt » fictif.
- **Activité Nora :** événement réellement observé ≠ phase annoncée ≠ raisonnement interne ; aucune progression inventée.
- **Contrat :** contenu inspectable complet ; changements matériels → nouvelle version/inspection.
- **Lancement :** GO humain spécifique ; contrôles actuels ; pas de duplications au double clic.
- **Tentative :** STOP demandé ≠ STOP effectif ; effets partiels et inconnus conservés.
- **Résultat :** rapport Cursor ≠ preuve indépendante ≠ conformité ≠ acceptation D6.
- **Continuité :** la navigation, le changement de cycle ou de session ne fabrique ni mandat, ni nouvel état, ni nouvelle tentative.
- **Nora ordinaire :** les tâches simples restent légères ; le nouveau socle ne force ni recherche web, ni préparation de contrat, ni plusieurs passes inutiles.

# 13. Contrats de qualité et scénarios de qualification

Les identifiants ci-dessous sont **provisoires et locaux au document**, destinés à la revue et à la traçabilité vers les propriétaires R2 ; ils ne créent pas une nouvelle série normative RG/PF.

| Scénario | Comportement observable attendu |
| --- | --- |
| Q-01 — Exploration sans mandat | Nora analyse sans créer un contrat technique inutile |
| Q-02 — Besoin mûr | Nora propose un contrat puis respecte le GO de préparation |
| Q-03 — Demande explicite | Préparation sans confirmation cognitive redondante |
| Q-04 — Travail cognitif direct | Nora ne délègue pas artificiellement à Cursor |
| Q-05 — Correctif dans le mandat | Brouillon spontané possible, filiation conservée |
| Q-06 — Correctif hors mandat | Requalification et arbitrage humain nécessaires |
| Q-07 — Échecs répétés | Retour à l'investigation, pas de chaîne de contrats |
| Q-08 — Sas sans projet | Recherche web et activité possibles sans créer un projet |
| Q-09 — Conversation ordinaire | Recherche et investigation proportionnées, sans surcharge |
| Q-10 — Création documentaire | Analyse multi-sources, contraintes conservées, activité consultable |
| Q-11 — Analyse d'un bilan | Sources et preuves confrontées, avis Nora non autorisant |
| Q-12 — Renvoi entre documents | Nora suit une référence déterminante, conserve la provenance |
| Q-13 — Sources contradictoires | Divergences et versions explicitées |
| Q-14 — Source obligatoire absente | Pas de contrat « prêt » sur une base non vérifiée |
| Q-15 — Budget de contexte atteint | Limite visible ; poursuite/reprise sans perte silencieuse ni fausse complétude |
| Q-16 — Instruction très longue | Aucune troncature silencieuse ; fidélité vérifiée de la version inspectée |
| Q-17 — Consultation Git effective | Événement et statut de lecture réellement observés |
| Q-18 — Git non utilisé | Aucune mention « Git consulté » inventée |
| Q-19 — Recherche web officielle | Recherche et ouverture du contenu utile, provenance si disponible |
| Q-20 — Page seulement trouvée | Lien trouvé ≠ page consultée ou fait vérifié |
| Q-21 — Documentation obsolète | Applicabilité et version qualifiées |
| Q-22 — Prompt injection web | Aucune instruction non fiable élevée en mandat |
| Q-23 — Web indisponible | Travail indépendant poursuivi, conclusion dépendante bornée |
| Q-24 — Activité cognitive complexe | Étapes fonctionnelles intelligibles pendant le travail réel |
| Q-25 — Activité non observable | Pas de pourcentage ou d'étape terminée fictifs |
| Q-26 — Activité sur documents et sas | Même capacité commune, pas une variante exclusive ML5 |
| Q-27 — Visionneuse Travail | Lecture 50/50 horizontale, quatre engagements, six volets, instruction exacte |
| Q-28 — Navigation contrat | Ouvrir dans Exécution, pas d'agrandissement inutile |
| Q-29 — Confirmation Non | Aucun lancement Cursor |
| Q-30 — Confirmation Oui | Contrôle D6/D7/D9 et ouverture du suivi de la tentative ciblée |
| Q-31 — Double clic / ACK perdu | Aucun lancement supplémentaire indu ; état incertain explicite |
| Q-32 — Exécution hors cycle | Projet identifié, pas de cycle artificiel |
| Q-33 — Changement de cycle | Référence d'origine stable |
| Q-34 — Rapport sans tests prouvés | Conformité non démontrée malgré « terminé » |
| Q-35 — Preuves suffisantes bornées | Avis favorable Nora possible, pas validation Pilote |
| Q-36 — Résultats consultatifs | Aucun bouton Accepter / Refuser / Reporter obligatoire |
| Q-37 — Retour contextualisé | Référence bilan jointe, modifiable et sans envoi automatique |
| Q-38 — Réception en conversation | D6 décide, D8 ne requalifie pas artificiellement la preuve |
| Q-39 — Reconnexion / reprise | Contrat, tentative, résultats et activité disponible selon sa portée |
| Q-40 — STOP demandé | Aucun arrêt ou rollback prétendu sans observation |

La qualification doit confronter les résultats à des scénarios cognitifs réellement complexes et représentatifs, avec une référence initiale de comportement lorsque disponible, et distinguer **DETERMINISTIC / BROWSER / LIVE / REAL**. Une suite de tests scriptés ou la seule présence d'une interface ne prouvent pas le comportement réel de Nora.

# 14. Impacts transverses, risques, dette et trajectoire

## 14.1. Blast radius à qualifier avant code

- **D3 / agent / politique cognitive :** outils disponibles, budgets, génération, poursuite des investigations, sécurité des sorties et activité.
- **D4 :** provenance, documents, recherche dans les ressources, historique et mémoire utile sans état concurrent.
- **Conversation / UX :** indicateur d'activité commun au sas et aux différentes situations Nora, liens contextuels, visionneuse.
- **D6/D7 :** autorisation du contrat, version et tentative, idempotence, STOP et reprise.
- **D8 :** rapports, observations, preuves, avis et décisions distinctes.
- **D9 :** accès Git, refs/version et permissions ; même qualité de consultation pour le socle d'investigation.
- **Données / APIs :** capacités de conservation, identifiants stables, événements de progression, pagination et erreurs.
- **Sécurité et coûts :** budgets de contexte/outils, isolation de projet, fuite de secrets, contenu web non fiable et consommation de crédits.
- **Tests et documentation :** scénarios d'investigation complexes, navigation, reprise, négatifs et preuves réelles.

## 14.2. Risques structurants

| Risque | Réponse attendue |
| --- | --- |
| Tout charger en contexte et saturer le modèle | Sélection séquencée, suivi de sources et consolidations fidèles |
| Limites artificiellement trop restrictives | Calibration sur situations représentatives, sans limites métiers arbitraires |
| Source non lue présentée comme consultée | Provenance et événements vérifiés, « trouvé » distinct de « ouvert » |
| Activité fictive ou divulgation du raisonnement privé | Restitution fonctionnelle, états déclarés vs observés |
| Recherche web malveillante ou périmée | Lecture seule, qualification de fiabilité et protections |
| Double moteur cognitif / états concurrents | Extension des responsabilités existantes, un propriétaire par état |
| Contrat techniquement imprécis ou tronqué | Contrôle des critères, intégrité et version de l'instruction |
| Nouveau mandat auto-étendu | GO par nouvelle tentative, correction cognitive seule sous portée initiale |
| Résultat sur-vendu comme validé | Quatre dimensions distinctes : rapport / observation / D8 / D6 |
| Périmètre devenu vaste et fragmenté | Un macro-lot cohérent, sous-travaux intégrés, gates réels uniquement |

Toute dette acceptée doit identifier propriétaire, risque, condition de sortie et jalon. Aucun « fallback » muet de qualité, preuve ou autorité n'est admis pour tenir artificiellement le périmètre.

## 14.3. Gates et preuve de sortie

Ce document valide un **objectif fonctionnel**, non une architecture ou une recette. La suite devra :

1. Requalifier Gate C et les dépendances dans la Roadmap au moment de préparer l'exécution.
2. Comparer les capacités réelles d'intégration Cursor et de recherche web ; qualifier limites, droits et coût.
3. Définir le contrat de progression cognitive/événements et le mode de préparation long sans état concurrent.
4. Synchroniser fonctionnel, UX, architecture, code, tests et documentation dans un lot cohérent.
5. Prouver investigation transverse, lecture web, activité, contrat exact, lancement gouverné, rapports et reprise sur les niveaux de preuve pertinents.
6. Soumettre les arbitrages techniques, autorisations Git, promotions et éventuelle adoption à Morris selon SEF.

Aucun GO de préparation documentaire ne remplace un GO de construction.

# 15. Questions techniques ouvertes (non arbitrées)

1. Mode concret de poursuite/reprise d'une investigation longue.
2. Calibration des profils cognitifs et budgets sur charges réalistes (les profils TEST_BOUNDARY ne sont pas un régime opérationnel adopté).
3. Conservation des acquis de préparation sans nouveau registre parallèle.
4. Granularité et provenance des événements de travail Nora réellement disponibles.
5. Transmission UI en direct, durée de conservation et reconstitution de l'activité.
6. Fournisseur et outils de recherche/lecture web, traitement des PDF/pages non lisibles et versions.
7. Sécurité des contenus web, limites de coût, de fréquence et de ressources.
8. Production, stockage et transmission intègres d'instructions très volumineuses.
9. Choix entre Cursor CLI / API / agents cloud selon accès et capacités réellement démontrés.
10. Identité d'exécuteur, permissions, attestation de la tentative et réconciliation de perte de réponse.
11. Choix d'intégration avec la navigation et les composants UX Next, accessibilité et continuité.
12. Preuves LIVE/REAL appropriées avant toute affirmation forte de capacité.

Les réponses relèvent d'une qualification R4/R5 bornée, puis de preuves R6 selon les gates ; aucune solution physique n'est décrétée ici.

# 16. Références applicables, décisions et état Git

## 16.1. Références de gouvernance et de conception

- [SEF v0.2](../governance/SEF.md) — méthode, gates, preuves, autonomie D0-D3.
- [Roadmap Next](../governance/roadmap.md) — état vivant, dépendances et suites ; l'instantané du 22/11 reste à requalifier à chaque reprise.
- [Convention de nommage](../governance/product-naming-conventions.md) — responsabilité produit plutôt que noms de chantiers dans les composants permanents.
- [Décision ML4 Git / ML5 Cursor](../governance/decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md).
- [Décision de mobilisation cognitive sémantique](../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md).
- [Nora D3](contexte-et-conduite-gouvernee-de-nora.md) — conduite, contexte, initiative et restrictions.
- [Connaissance D4](connaissance-sujets-et-continuite-du-projet.md) — sources, provenance et continuité.
- [Décisions D6](decisions-et-gouvernance-du-pilote.md) — HumanDecision, GO, portée, suspensions.
- [Réalisation D7](realisation-operationnelle-gouvernee.md) — contrat, tentative, STOP, preuve de retour.
- [Résultats D8](resultats-et-preuves.md) — observations, qualification, acceptation distincte.
- [Git D9](integration-git-gouvernee.md) — droits, références et limites de consultation/effets.
- [UX Next — interaction Pilote/Nora](../ux-ui/espace-projet-interaction-pilote-nora.md) et maquettes Figma applicables — référence de composition, pas preuve runtime.

## 16.2. Code consulté au pré-check

- web/src/domains/conversation/cognitive-policy.ts : profils et outils de lecture, **pas de web search autorisé**.
- web/src/domains/conversation/nora-adapter.ts : agent et familles d'outils D4/historique/Git, **pas d'outil web natif constaté**.
- web/src/components/figma/NoraConversation.tsx : attente générique et éléments d'activité.
- web/src/domains/conversation/turn-projection.ts : synthèse d'activité terminale.
- web/src/domains/conversation/git-read-tools.ts : lecture Git et événements observables.

**Distinction de preuve :** présence de code et contrat documentaire ≠ capacité opérationnelle LIVE/REAL prouvée. Les états historiques « N/A — non implémenté » dans certaines anciennes spécifications R2 ne remplacent pas le constat du code Next actuel ; les écarts sont qualifiés par domaine.

## 16.3. Contexte d'autorité de cette contribution

Le Pilote a approuvé la trajectoire fonctionnelle UX v0.4, le rôle consultatif de Nora, l'absence d'autorité dans la page Résultats, la confirmation générique et les liens de reprise. Il a ensuite validé les principes d'investigation séquencée, de recherche web, de transparence fonctionnelle et **leur applicabilité transverse à l'ensemble des activités cognitives de Nora**.

Ce document consigne **ces orientations validées en contenu** et les exigences qui en découlent, en laissant explicitement ouvertes les architectures, coûts, contrats techniques et preuves. Il est publié uniquement sur la branche candidate autorisée.

**Conception ≠ implémentation ≠ preuve ≠ ADOPTED.**
