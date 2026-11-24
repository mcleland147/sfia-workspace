# SFIA Studio Next — Préparation cognitive transverse de Nora et réalisation technique gouvernée

> **Suivi courant ML5 — 24/11/2026 (candidat documentaire) :** [journal UAT](../construction/recette-utilisateur-ml5-pilotage-360-20261124.md). Etats historiques conservés à leur SHA ; aucune nouvelle acceptation ni règle normative.


> **Lecture courante post-C22 :** [revue indépendante §12](https://github.com/mcleland147/sfia-workspace/blob/ea74688a2ac2643a157dc680d4b2f5fa1fa0b517/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md), addendum factuel en fin de document ; pas de changement normatif.

> **Lecture courante post-C20 :** [synthèse globale](https://github.com/mcleland147/sfia-workspace/blob/978e42648aa0149e4f2f2bab03b4483a5bbfd496/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md#11-revue-globale-post-c20--état-de-travail-au-24112026-d1-factuel), addendum factuel en fin de document. Exigences et décisions antérieures conservées ; aucune adoption ni GO lot 2.

> **Lecture prioritaire — revue approfondie post-C14 (24/11/2026) : ML5 TARGET ARCHITECTURE COHERENT — IMPLEMENTATION CONFORMITY PARTIAL — FUNCTIONAL COMPLETION REQUIRED.** [Revue complète](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md) ; [registre](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md) ; [acceptation](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md). Morris valide la consolidation et les trois lots de convergence comme base de travail, pas une adoption ni un GO C15. Les sections R-004 et les instantanés préconstruction restent historiques pour l'état, opposables pour les exigences. Code reproduit dans snapshot consulté, worktree NON OBSERVÉ, aucune publication projet.

> **Lecture prioritaire — consolidation R-004 du 24/11/2026.** Morris confirme la poursuite de ML5 (R5), la primauté de la complétude fonctionnelle et l'arbitrage de conduite sémantique de Nora ci-dessous. Les constats antérieurs à la construction sont historiques. Les handoffs C11–C13 établissent des frontières DEV LIVE bornées, pas une acceptation globale. Le candidat code C3–C13 reste local, non publié et NON OBSERVÉ directement par ChatGPT. Aucun GO de publication code, PR, merge, RECETTE, release ou adoption ; aucun changement de la décision Git A. La fidélité Figma reste une exigence reportée à la recette UX, non un gate de la consolidation fonctionnelle actuelle.

## Contrat fonctionnel consolidé — trajectoire ML5

| Champ | Valeur |
| --- | --- |
| Document | Contrat fonctionnel consolidé : investigation cognitive transverse, activité Nora, contrats et réalisation Cursor |
| Version | **v0.6 candidate — consolidation R-004 du 24 novembre 2026 ; v0.5 historique** : LIVE, Git, handoff, vérification finale et outillage MCP Cursor |
| Autorité du contenu | Morris — **v0.3 validée en contenu le 22/11/2026** ; **compléments v0.4 exprimés le 23/11 et intégrés à sa demande**, détails de réalisation encore candidats |
| Statut | **D2 — BASE v0.3 VALIDATED IN CONTENT ; v0.4 PARCOURS CONFIRMÉ ; v0.5 INTERFACES CANDIDATES — NOT MERGED** ; détails techniques et preuves non validés ; ne remplace pas les R2 propriétaires |
| Dépôt et référence de vérification | mcleland147/sfia-workspace ; main@997897fd7cf914771e7d08e8030dc7123fab7d25 |
| Branche de contribution | sfia/next-nora-cognition-cursor-contract-candidate |
| Périmètre de conception | SFIA Studio Next ; ML5 comme macro-lot intégrateur, **capacités cognitives communes à toutes les situations où Nora travaille** |
| État du produit | D3/D4/Git déjà partiellement implémentés ; recherche web Nora non disponible dans les outils du code inspecté ; ML5 Cursor **NON IMPLÉMENTÉ / NON PROUVÉ** |
| État du programme | Roadmap Git : Ensemble 08 intégré, Gate C OPEN ; aucun GO R5 ML5, aucune promotion, release, adoption ou décision d'architecture issue de ce document |
| Git local | **NON OBSERVÉ** — aucun constat sur worktree, fichiers staged ou non suivis |

> **Portée des validations.** La v0.3 conserve son état de validation en contenu. La v0.4 documente la précision fonctionnelle demandée le 23/11 : **activité LIVE informative pendant le run ; analyse globale Nora uniquement après clôture ou interruption**, sur rapport et éléments vérifiables. L'écriture Git est autorisée pour ces deux documents candidats et **ne vaut** ni modification de doctrine/R2 propriétaires, ni PR/merge, ni exécution Cursor, ni adoption ni GO construction. Les détails techniques restent à qualifier.

> **Arbitrages Morris ultérieurs du 23/11/2026 — priorité de lecture :** la décision [Git direct Cursor / auto-session DEV](https://github.com/mcleland147/sfia-workspace/blob/b411e3276e987e93627348de266e0b383419eab9/projects/sfia-studio-next/governance/decisions/2026-11-23-ml5-cursor-git-direct-et-session-dev-automatique.md) et le **§20** ci-dessous valident **l'option A** (Cursor publie directement le code autorisé ; Studio lit et vérifie Git) et l'auto-session Pilote de test sur DEV local. Les passages antérieurs présentant B comme option recommandée sont désormais historiques. Cette décision **n'autorise aucun push de code, PR, merge, WEB LIVE ou SDK LIVE**.

---

# 1. Finalité, résultat Pilote et logique de macro-lot

## 1.1. Résultat utilisateur

Le Pilote doit pouvoir exprimer naturellement une intention, être accompagné par Nora au moyen d'investigations pertinentes et fiables, puis — lorsque la réalisation technique est justifiée — inspecter un contrat précis avant de déclencher lui-même Cursor. Studio doit rendre l'exécution compréhensible, retrouver ses traces et donner accès aux résultats, à leur niveau de preuve et à l'avis argumenté de Nora.

Chaîne cible :

**Intention du Pilote → investigation Nora → contrat versionné et inspection 50/50 → HumanDecision / Exécuter → Cursor sous D7 avec états LIVE informatifs et travail Git référencé → fin ou interruption de la tentative → dossier de réalisation Cursor (complet ou partiel) → vérification D8/D9 → une analyse globale Nora → décision éventuelle du Pilote → continuité.**

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

**Niveau d'information pendant le run :** affichage **sobre**, orienté Pilote : état courant, dernière activité réellement observée, étape fonctionnelle, erreur ou attente éventuelle, dernière publication Git confirmée si utile. Pas de console technique exhaustive, de pourcentage déduit, de chaîne de pensée ni de génération d'un bilan critique à chaque événement. Un événement Cursor annoncé n'est pas automatiquement une action terminée ou vérifiée.

## 9.4. Résilience

La fiche demeure accessible après fermeture du chat, changement d'onglet ou reconnexion. Une demande d'arrêt n'est pas un arrêt observé. Une réponse réseau perdue ne prouve ni que Cursor a travaillé, ni qu'il n'a pas travaillé. Toute reprise/réconciliation interdit la duplication aveugle d'effets.

La télémétrie de Cursor et sa capacité d'interruption doivent être **réellement établies** pour la voie d'intégration choisie. Les publications intermédiaires servent à **préserver l'accès aux réalisations** et à la reprise, **sans déclencher une analyse Nora en cours d'exécution**. Un état SDK terminal, une absence de réponse, un rapport absent et une fin de travail vérifiée restent des faits distincts.

# 10. Résultats & preuves : consultation et avis de Nora

## 10.1. Fonction principale

Résultats & preuves est un **espace de consultation** du bilan, des observations, des écarts et des suites recommandées. Il ne contient pas de boutons d'autorité « Accepter / Refuser / Reporter » dans le parcours retenu.

Le Pilote peut y comprendre les travaux réalisés, les preuves et le degré de conformité, y compris longtemps après la tentative.

## 10.2. Quatre niveaux à ne pas confondre

1. Déclarations de Cursor et éventuels rapports reçus.
2. Faits effectivement observés ou vérifiés par les moyens disponibles.
3. Qualification D8 : conforme sur un périmètre vérifié, non conforme, partiel, non démontré ou incertain selon les cas.
4. Décision métier du Pilote lorsqu'elle existe, relevant exclusivement de D6.

Une tentative terminée, un commit ou un test « vert » déclaré ne certifie pas tout le contrat. **La revue approfondie de Nora intervient une fois à la fin de la tentative (succès, échec ou arrêt) sur les éléments disponibles**, pas après chaque publication Git ni pendant le flux d'événements.

## 10.3. Analyse de Nora

Le bilan met en avant un avis de Nora : **favorable, réservé, défavorable ou indéterminé**, avec justification, sources et prochaine suite.

Nora confronte contrat, critères, documents pertinents, décisions applicables, déclarations Cursor et preuves effectivement disponibles. Elle peut estimer que « le travail est conforme aux attentes sur le périmètre vérifié ».

**Nora ne valide ni n'accepte à la place du Pilote.** Un avis favorable n'est pas un acte HumanDecision, pas une adoption, pas une levée de restriction.

La validation métier, lorsqu'elle est utile, reste exprimable naturellement dans la conversation. D6 la reconnaît et la conserve selon son contrat, sans la rendre obligatoire pour chaque simple consultation.

## 10.4. Navigation bidirectionnelle

Depuis Exécution, accès au bilan de la tentative lorsqu'un bilan existe. Depuis Résultats, accès à l'intervention, au contrat et à la tentative d'origine.

L'absence de rapport ne donne pas lieu à un faux bilan de succès. Un rapport partiel ou un arrêt peut produire un bilan limité si des éléments authentiques existent. **Aucune nouvelle exécution Cursor ne doit être lancée automatiquement pour compléter un handoff défaillant** ; toute suite relevant de la réalisation technique respecte à nouveau le mandat applicable.

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
- **Supervision Cursor :** LIVE limité à l'état et aux faits de travail utiles ; aucune revue continue Nora, aucun affichage inventé en cas de perte du flux.
- **Publication :** branche Git de travail distante vérifiée avant les changements techniques ; commits/pushes intermédiaires seulement aux jalons autorisés ; aucun PR/merge induit.
- **Remise :** handoff final adaptable + inventaire complet du périmètre réalisé + références accessibles à leurs versions exactes ; absence de contenu ou capture non lisible signalée.
- **Preuves :** D8 vérifie les références et la couverture en fin de tentative ; ne pas faire passer l'auto-description Cursor pour une preuve.
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
| Q-41 — LIVE sobre | Statut, dernières actions observées et erreurs utiles seulement ; pas de synthèse cognitive intermédiaire |
| Q-42 — Branche de travail | Ref distante vérifiée avant réalisation, publications intermédiaires bornées, sans PR/merge implicite |
| Q-43 — Handoff adaptatif | Rapport contextualisé + inventaire exhaustif des créations/modifications/suppressions/lectures/actions, références immuables |
| Q-44 — Captures et pièces | Accès réel aux captures UX, références Figma et autres artefacts nécessaires, ou limite explicite |
| Q-45 — Fin interrompue | Événements/Git encore consultables ; rapport complet, partiel ou absent correctement qualifié |
| Q-46 — D8 couverture finale | Vérification indépendante des changements, références et résultats de tests ; écarts remontés |
| Q-47 — Revue finale seule | Aucune analyse Nora automatique par événement/commit ; bilan global sur tentative finie ou interrompue |
| Q-48 — Réutilisation sur contrats successifs | Historique des tentatives et SHA conservés ; nouveau contrat part d'une référence vérifiée |

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
- **Sécurité et ressources :** budgets de contexte/outils de Nora, isolation de projet, fuite de secrets, contenu web non fiable ; **aucun tableau de bord FinOps Cursor autonome demandé dans Next** (usage suivi dans le compte Cursor).
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
9. **Cursor SDK local privilégié en contenu par Morris**, sous qualification du comportement réel (DEV sur son poste, production sur serveur secondaire) ; CLI/Cloud seulement si obstacle démontré. Le coût d'utilisation est piloté par le compte Cursor, sans outil FinOps Next dédié.
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

Ce document consigne **la base v0.3 validée en contenu** ainsi que les exigences complémentaires exprimées par Morris le 23/11 : Cursor comme service transparent ; **LIVE informatif pendant, restitution complète et analyse Nora après** ; publication et traçabilité du travail sur une branche distante sous mandat. Les modalités de transport, les permissions techniques exactes et les preuves LIVE restent candidates. Publication documentaire **sur branche candidate uniquement**, sans promotion.

**Conception ≠ implémentation ≠ preuve ≠ ADOPTED.**

# 17. Complément fonctionnel du 23/11 — Supervision proportionnée et revue globale finale de Cursor

> **Lecture prioritaire pour la réalisation Cursor :** le présent complément précise les §§7, 9 et 10. Il ne change ni la cognition transverse de Nora (§§3–6), ni les choix UX déjà validés. **Deux temps uniquement : suivi LIVE factuel pendant le run ; examen global à la fin.** Les publications Git intermédiaires sont un moyen de conservation et d'accès, **pas** un troisième moment de revue.

## 17.1. Expérience Pilote et autonomie technique de Cursor

Le Pilote utilise **Studio**, pas l'interface Cursor : il dialogue principalement avec Nora, inspecte le contrat et autorise explicitement l'intervention. Cursor intervient **comme un outil de réalisation** soumis à un périmètre et à des conditions d'arrêt. Cursor peut prendre les décisions techniques ordinaires nécessaires **dans ce mandat**, mais ne décide ni d'une évolution majeure du contrat, ni d'une promotion, ni de la conformité ou de l'acceptation.

Pendant l'exécution, la page **Exécution** présente des états lisibles : en attente, lancé, action observée, test en cours/terminé si connu, publication Git constatée, erreur, absence de signal, STOP demandé/constaté, fin de run. **Aucune analyse automatique Nora** ni relecture critique du code ou des captures à chaque étape ; aucune obligation d'ouvrir Cursor. Le Pilote peut consulter un détail raisonnable des derniers faits observés, mais ne reçoit pas le flux brut des arguments d'outils, des secrets ou du raisonnement privé.

**À la fin seulement**, après réussite, échec ou interruption réconciliée, Studio rassemble ce qui peut être retrouvé ; Nora effectue **une synthèse globale** des réalisations, écarts, preuves et suites possibles. Une fin non constatée reste un état inconnu, pas une fin fictive autorisant une conclusion définitive.

## 17.2. Continuité Git à travers plusieurs contrats

Toute réalisation technique qui modifie un dépôt Git commence **sur une branche de travail identifiée, distante et vérifiée** avant les changements. La copie locale reste nécessaire au travail de Cursor ; elle n'est pas l'unique source consultable par Studio. Les étapes significatives donnent lieu à des commits/pushes **bornés par le mandat D6**, afin que les productions puissent être récupérées en cas d'arrêt. Il ne s'agit ni d'un commit par commande, ni d'une validation intermédiaire, ni d'un droit automatique au PR/merge.

Chaque intervention et chaque tentative conservent le dépôt, la branche, la base SHA, les publications confirmées et leur lien avec le contrat original. Un contrat ultérieur réutilise une **référence vérifiée et autorisée** : ne pas dépendre uniquement de la mémoire conversationnelle SDK ou d'un fichier local non publié. Les contenus non committés ou le travail impossible à publier sont signalés comme tels et peuvent faire l'objet d'une récupération contrôlée, **jamais d'une accessibilité Git inventée**.

## 17.3. Handoff final complet, adaptable et retrouvable

À la clôture normale, le contrat demande à Cursor un **Review Handoff propre à la tentative**, qui permet à Nora de comprendre ce qui a été réellement entrepris. **Socle obligatoire**, présentation adaptée au métier :

- **Identités et état** : projet, contrat/révision, mandat, tentative, environnement, branche, base et dernier SHA connus ; exécution réussie/partielle/échouée ou interrompue, réserves et raisons.
- **Travail effectué ou non** : objectifs, opérations, changements de configuration, commandes significatives, actions Git, décisions purement techniques prises dans le contrat, tests effectués/non effectués et résultats **déclarés vs attestés**.
- **Sources consultées** : documents et fichiers déterminants lus, rôle dans la mission, versions/chemins si connus ; pas de copie intégrale exigée pour une simple lecture.
- **Productions** : **inventaire couvrant les fichiers créés, modifiés, déplacés et supprimés**, y compris code, documentation, scripts, tests, données non sensibles et artefacts. Les références doivent permettre la lecture exacte de la version produite : repo/branche/commit/chemin/empreinte selon le cas.
- **Contenus non accessibles par référence** : contenu texte exploitable dans le handoff lorsque possible et sûr, sinon réserve explicite. **Une liste de noms ou un simple résumé ne suffit pas.**
- **Preuves spécialisées** : captures UX et application exécutée, référence Figma/version/frame, logs de tests pertinents, sorties de build, traces et pièces utiles, avec fichiers réellement consultables ; ne pas supposer que le SDK local télécharge automatiquement ces artefacts.
- **Écarts et suite** : tâches inachevées, incidents, limites de vérification, dettes, besoin d'arbitrage Morris et proposition de prochaine étape.

Le **canal de remise reste à qualifier** : handoff et pièces référencés dans la **branche Git de l'intervention**, ou autre stockage durable contrôlé par Studio si le contenu ne convient pas à Git. Un mécanisme mixte est admissible. Le texte de réponse finale SDK **n'est pas supposé constituer à lui seul le handoff**. Rapport/manifestes de plusieurs tentatives doivent rester distincts, non écrasés par un unique `latest`.

## 17.4. Contrôle automatique final et analyse de Nora

À réception ou reconstitution après fin/interruption, **D7** rattache le rapport et les références à la tentative. **D9** relit les versions Git effectives ; **D8** vérifie au minimum l'accès aux références, la correspondance avec les fichiers et modifications effectivement constatés, la présence des preuves attendues et les écarts entre déclarations et faits. Cela peut être déterministe ; ce n'est **pas une revue Nora répétée pendant l'exécution**.

Nora reçoit ensuite le contrat exact, le handoff, les ressources réellement accessibles, les événements de diagnostic pertinents et la qualification D8 pour une **évaluation unique et approfondie de fin de tentative**, proportionnée au travail. Son avis reste **consultatif** ; une suite technique nécessite un nouveau mandat/contrat si le périmètre change. Un rapport incomplet, une capture manquante ou des fichiers non accessibles produisent une revue bornée avec réserves.

**Distinction impérative :** un état LIVE, un commit, une capture ou une déclaration Cursor ne vaut ni conformité D8 ni GO Morris. L'absence de handoff final ne doit pas effacer les traces indépendantes disponibles.

## 17.5. Conditions de qualification et exclusions

**IN :** UX sobre Exécution, états factuels, historique durable, branche Git de travail vérifiée, publications intermédiaires sous autorisation, handoff adaptatif, pièces accessibles, contrôle de couverture final, avis Nora final.

**OUT du parcours courant :** analyse Nora automatique sur chaque événement/commit, micro-gates au fil du développement, recopie systématique de tous les fichiers consultés, streaming de raisonnement privé, dashboard de facturation Cursor dans Studio, PR ou merge implicite, acceptation automatique.

**À qualifier avant construction :** états/erreurs et streaming réellement disponibles dans `@cursor/sdk`, cohérence d'un run long après perte de connexion, modèle de conservation/transport du handoff et des captures, Git branche/fingerprint/permissions, isolation des workspaces, compatibilité future avec serveur secondaire, sécurité des artefacts, test d'accès réel par Nora. Décliner les preuves DETERMINISTIC/BROWSER/LIVE/REAL dans le macro-lot intégrateur, sans en déduire un GO ML5.

**Autorité :** principes de parcours exprimés par Morris le 23/11 et transcrits à sa demande ; détails de mise en œuvre candidats, non normatifs et non éprouvés. **Aucune construction ni adoption déduite.**

# 18. Contrats fonctionnels candidats — suivi Cursor, remise finale et capacités MCP

> **Complément du 23/11/2026 à la demande Morris.** Conserve la trajectoire **deux temps** du §17 : **états LIVE sobres pendant la tentative ; une analyse globale Nora après clôture ou interruption**. Les objets et valeurs ci-dessous ne sont pas des API, tables ou enums implémentés.

## 18.1. Suivi LIVE et résilience sans micro-revues

- **Exécution** : Studio affiche le dernier état réellement connu (préparée/autorisée, lancement demandé, run identifié, activité observée, erreur, arrêt demandé ou confirmé, terminé, état inconnu), la dernière activité fonctionnelle et la dernière publication Git distante confirmée. Les détails d'outil restent consultables de manière proportionnée, jamais comme une chaîne de pensée, un pourcentage arbitraire ou une console brute.
- **Vérité** : `send()` demandé ≠ run observé ; outil commencé ≠ outil terminé ; `finished` ≠ rapport reçu ; silence/timeout ≠ absence d'effet ; STOP demandé ≠ STOP confirmé. D7 rattache les observations à la tentative et les conserve après reconnexion.
- **Incidents** : une fermeture de navigateur ne doit pas terminer le run ; processus muet/crash et perte d'ACK → état incertain et réconciliation avant toute relance. Aucun autre contrat ni second lancement n'est déduit du seul défaut de réponse.
- **Consommation** : pas d'activation automatique de Nora ni d'analyse du code après chaque événement ou commit. D7 observe, D8/Nora évaluent **une fois à la fin**.

## 18.2. Publication Git comme continuité et preuve accessible

- **Avant mutations** : dépôt, branche distante de travail et base SHA vérifiés, rattachement au contrat/mandat, espace de travail local isolé. La branche distante seule ne publie pas des fichiers locaux.
- **Pendant** : Cursor produit fichiers, tests, captures, commits ; des **pushes significatifs, bornés par D6**, rendent les résultats lisibles par Studio. Pas de commit par action, pas de revue Nora intermédiaire, pas de PR ou merge implicites.
- **Contrôle des droits** : l'exécuteur peut préparer des commits, mais le mécanisme de push (direct sous restrictions ou publication gouvernée D7/D9) est un **arbitrage technique ouvert**. D6 autorise les effets ; D9 constate refs, droits et SHA ; aucun modèle parallèle d'effets.
- **Après interruption** : les derniers commits effectivement publiés restent consultables, tout changement local non poussé est déclaré **non disponible sur GitHub**. La suite d'un projet reprend une référence Git vérifiée plutôt qu'une mémoire de session SDK.

## 18.3. Revue finale : dossier adaptable, inventaire systématique

Le **Review Handoff de chaque tentative** comprend un rapport Markdown adapté au travail et un inventaire exploitable : contrat exact, tentative, auteur/exécuteur, état final connu, branche/base/SHAs, **fichiers créés/modifiés/déplacés/supprimés**, code et documents, sources déterminantes consultées et rôle, commandes/actions Git, tests réalisés/non réalisés, erreurs, réserves, tâches inachevées, références UX/Figma, captures et autres pièces utiles. La restitution doit permettre **la consultation réelle des contenus**, et pas seulement de leurs noms.

**Canal nominal candidat** : handoff et pièces de taille/risque adaptés sur **la branche distante de l'intervention**, avec références figées sur SHA ; autre stockage sous droits Studio pour artefacts volumineux/sensibles/inadaptés à Git. Texte non accessible ailleurs → fournir le contenu dans le rapport si sûr/autorisé, sinon signaler le manque. Les archives de tentatives ne sont pas écrasées par un `latest` global.

**Contrôle final** : D7 reçoit et rattache, D9 vérifie commits/paths/accès, D8 recoupe diff réel, manifeste, captures, sorties de tests **effectivement capturées** et restrictions. Déclaration Cursor ≠ observation ≠ conformité ≠ décision Pilote. Nora formule ensuite **une seule analyse globale**, sourcée et bornée ; un run terminé sans rapport ou un crash peut donner un dossier **partiel** sans succès fictif ni relance technique automatique.

## 18.4. MCP Figma, Canva et autres — disponibilité et permissions

Le SDK local peut utiliser les serveurs MCP pertinents pour le contrat, **mais un MCP configuré dans Figma/Canva ou dans Cursor Desktop n'est pas automatiquement une capacité accessible sur tous les runtimes**. L'exécuteur doit charger la bonne configuration et posséder une authentification valide. Le préflight vérifie disponibilité réelle, capacité et droits ; si une source obligatoire manque, STOP ou requalification.

**DEV aujourd'hui** : Mac Morris, Cursor Desktop + SDK sur le même hôte/profil, éventuelle réutilisation des configurations MCP utilisateur/projet et de sessions OAuth déjà établies. **PROD visée** : serveur secondaire, configuration et authentification propres ; ne pas supposer le partage des fichiers ou sessions OAuth du Mac. Les outils MCP autorisés sont **limités au besoin du contrat** : lecture Figma ne donne pas droit à mutation Figma ; ne pas hériter silencieusement de tous les MCP personnels. Toute mutation MCP externe reste soumise à D6 et à une barrière technique effective.

Studio n'a pas besoin d'un deuxième gestionnaire MCP généraliste dès ML5 ; il doit seulement rendre explicites **les outils nécessaires/autorises, leur disponibilité, et les limites observées**. Les sources consultées par MCP et les modifications pertinentes doivent être référencées dans le handoff.

## 18.5. Critères de vérification futurs

| Situation | Attendu |
| --- | --- |
| Run normal | Dernière activité fonctionnelle fiable, sans bilan Nora pendant le run |
| Erreur/crash/annulation | Statut correct, effets partiels, état inconnu et reprise sûrs |
| Branche + commits | SHA distant vérifié ; aucune PR/fusion induite |
| Handoff complet | Inventaire couvrant les changements et références lisibles |
| Handoff manquant | Dossier partiel, lacunes déclarées, revue Nora bornée |
| UX/Figma | Captures originales accessibles et référence exacte des maquettes |
| MCP local | Configuration chargée et OAuth opérationnel prouvés dans un run SDK |
| MCP sur serveur | Mise en place autonome et droits validés sans héritage tacite du Mac |
| MCP lecture seule | Outil de mutation indisponible/techniquement refusé hors mandat |
| Contrats successifs | Même historique projet, continuité par versions Git et tentatives |

**Statut** : exigences de parcours portées par Morris ; interfaces, permissions et modes de transport **CANDIDATS, NON IMPLÉMENTÉS, NON PROUVÉS**. Aucun GO code/DB/PR/merge/adoption.

# 19. Recentrage du périmètre ML5 — transmission des contrats et administration Cursor

**Date :** 23 novembre 2026  
**Statut :** complément fonctionnel candidat, validé en contenu par Morris et intégré sur branche de conception ; NOT MERGED  
**Portée :** clarification des §§7–10, 17 et 18 ; aucune modification des propriétaires D3/D6/D7/D8/D9.

## 19.1. Résultat utilisateur prioritaire

L'objectif central de l'intégration Cursor dans SFIA Studio Next est de **supprimer le transfert manuel des prompts entre Studio et Cursor**.

Le Pilote dialogue avec Nora, examine le contrat technique et autorise son exécution. Studio transmet automatiquement à Cursor SDK **l'instruction exacte, complète et versionnée** correspondant au contrat autorisé.

La réalisation demeure confiée à Cursor. Studio conserve les informations nécessaires pour suivre l'exécution, récupérer les résultats, en vérifier les références et permettre une analyse globale de Nora.

Le parcours nominal ne doit exiger aucun copier-coller, aucune ressaisie du prompt ni aucune ouverture manuelle d'une conversation Cursor pour chaque mission.

## 19.2. Cursor reste un environnement administrable

ML5 ne vise pas à supprimer Cursor Desktop ni à rendre son administration inaccessible ou entièrement automatique.

Le Pilote ou l'administrateur peut, hors du parcours nominal :

- installer et maintenir Cursor Desktop et Cursor SDK ;
- laisser Cursor Desktop ouvert sur le Mac ou le serveur ;
- configurer les comptes, modèles, MCP et intégrations ;
- établir les authentifications et autorisations requises ;
- effectuer une opération de maintenance ou résoudre un blocage exceptionnel.

L'absence d'intervention humaine **pendant le parcours nominal de transmission** est un objectif d'usage ; elle ne constitue pas une interdiction générale d'intervenir dans Cursor.

Une instance Cursor Desktop ouverte ne représente toutefois pas, en elle-même, une preuve que les approbations interactives du SDK seront disponibles.

## 19.3. Frontière minimale de Studio

Studio doit assurer :

1. La préparation et l'inspection du contrat et de son instruction exacte.
2. La vérification du mandat D6 et de ses conditions au point d'exécution.
3. La transmission à Cursor SDK, avec identité de tentative et protection contre les doublons.
4. La présentation d'états LIVE sobres et fidèles.
5. La récupération des résultats, fichiers, références Git et preuves accessibles.
6. Le contrôle final D8/D9, puis une seule analyse globale de Nora.
7. La continuité du projet et des tentatives successives.

Studio ne doit pas construire par défaut un gestionnaire généraliste de Cursor Desktop, des MCP, des connexions OAuth ou des demandes d'approbation d'outils.

La configuration et l'administration de l'environnement Cursor restent des responsabilités d'exploitation, potentiellement exercées manuellement par Morris.

## 19.4. MCP et permissions

Les outils MCP nécessaires à une mission peuvent être installés, configurés et authentifiés au préalable dans l'environnement Cursor.

Au lancement, Studio doit seulement établir que les capacités indispensables à la mission sont disponibles dans l'environnement réellement utilisé par le SDK et que les droits applicables ne sont pas dépassés.

Un MCP indisponible ou bloqué par une approbation non satisfaite produit une indisponibilité ou un STOP explicite. Studio ne doit ni fabriquer une autorisation ni désactiver silencieusement les protections du SDK.

Les essais Figma, Canva et autres MCP spécialisés sont **conditionnels aux missions qui les nécessitent**. Ils ne sont pas des conditions de fonctionnement universelles de ML5.

## 19.5. Git, rapport et revue finale

Le mécanisme Git doit réutiliser les responsabilités D7/D9. Le choix entre publication directe techniquement bornée et publication contrôlée reste à qualifier selon les effets réellement nécessaires.

La modalité B, où Cursor réalise les changements et où leur publication est vérifiée par un mécanisme gouverné, constitue une orientation candidate. Elle ne justifie pas à elle seule la création d'un nouveau moteur Git.

Pour les travaux sur dépôt, les versions effectivement publiées assurent une continuité vérifiable entre missions. Les éléments locaux non publiés restent explicitement distingués des éléments accessibles sur Git.

Pendant l'exécution, aucune revue cognitive intermédiaire obligatoire. Après fin ou interruption réconciliée, D8/D9 confrontent les preuves disponibles et Nora produit une analyse globale unique.

## 19.6. Scénarios d'acceptation complémentaires

| Scénario | Résultat observable attendu |
| --- | --- |
| **Q-49 — Transmission sans copier-coller** | Un contrat autorisé dans Studio produit un run Cursor SDK sans intervention manuelle de transfert d'instruction. |
| **Q-50 — Fidélité du contrat** | L'instruction reçue correspond exactement à la version inspectée et autorisée ; aucune troncature ou substitution silencieuse. |
| **Q-51 — Administration externe** | L'administrateur peut configurer Cursor Desktop, les comptes et MCP sans gestionnaire équivalent requis dans Studio. |
| **Q-52 — Dépendance MCP** | Une mission disposant de ses capacités requises peut s'exécuter ; une capacité obligatoire indisponible entraîne une erreur ou une requalification explicite. |
| **Q-53 — Reconnexion** | La fermeture de Studio ne provoque pas de nouvelle tentative Cursor et ne fait pas perdre les faits durables observés. |
| **Q-54 — Remise finale** | Studio retrouve des résultats et références vérifiables, ou expose les manques ; la réponse finale SDK ne suffit pas à prouver l'exhaustivité. |
| **Q-55 — Revue unique** | Nora analyse le dossier après fin ou interruption réconciliée, sans réévaluer chaque événement ni chaque commit. |
| **Q-56 — Périmètre proportionné** | Une mission ne nécessite pas d'outils MCP, de publication Git ou d'administration Cursor supplémentaires lorsqu'ils sont sans rapport avec le travail demandé. |

## 19.7. Limites et condition de sortie de préparation

Cette clarification fixe la frontière fonctionnelle. Elle ne constitue ni un contrat physique d'API SDK, ni une décision de migration DB, ni une preuve d'intégration dans Studio Next.

La préparation fonctionnelle est suffisamment cadrée pour une revue de clôture avec réserves. Les choix d'implémentation et preuves de comportement appartiennent au futur macro-lot de construction, sous les gates Morris applicables.

**Statut : DOCUMENTED CANDIDATE — NOT IMPLEMENTED / NOT BEHAVIOR PROVEN / NOT ADOPTED.**

## 19.8. Alignement UX final — instruction intégrale et couverture D8

**Revue de cohérence du 23 novembre 2026, candidate sur la branche de conception et validée en contenu par Morris.** Les numéros de frames Figma restent des repères UX, pas des noms de composants de code.

- **Contrat D7** : 12.02 et 12.05 permettent d'inspecter le contrat puis d'ouvrir **12.14 — instruction technique intégrale en lecture défilante**, rattachée à la même version/empreinte. Les courtes descriptions restent de simples aperçus : au runtime, l'intégralité de l'instruction réellement transmise doit pouvoir être inspectée avant l'autorisation, sans troncature ni copier-coller. La frame 12.14 utilise un exemple fictif et ne prouve aucune transmission SDK.
- **Bilan D8** : quatre onglets cohérents, **12.08 Synthèse**, **12.11 Livrables et tests**, **12.12 Git et pièces**, **12.13 Écarts**. Ensemble, ces vues doivent rendre accessibles les **neuf rubriques D8 §8.2** : résumé ; prévu ; réalisé ; évaluation ; écarts ; impact sur le projet ; verdict D8 ; recommandation/suite ; éléments vérifiés et sources. Le verdict D8, l'avis de Nora et une réception D6 restent distincts. Aucun cinquième onglet n'est créé.
- **Cohérence illustratrice** : l'exemple fictif RES-007/EX-007 montre deux fichiers modifiés, deux créés, deux tests déclarés PASS sans preuves suffisantes et un essai navigateur non effectué. Les références et comptes entre vues ne doivent pas diverger. Ces faits **illustratifs** n'attestent aucune réalisation.
- **Git et MCP proportionnés** : branche, base SHA et droits Git seulement si la mission vise un dépôt ; accès MCP seulement si l'outil est indispensable à la mission. La configuration/administration Cursor par Morris reste possible hors Studio.
- **Transposition UX** : source Figma validée ≠ implémentation. Extraction L0/L1/L2, composants, assets, états, scroll, navigation et capture-source hashée avant le code concerné ; comparaison BROWSER/runtime et preuves après construction sous gate distinct.

**Verdict de conception : ALIGNEMENT DOCUMENTÉ — NOT IMPLEMENTED / NOT BEHAVIOR PROVEN / GATE C OPEN.**

# 20. Décisions Morris du 23/11/2026 — Git Cursor direct et session de test DEV

**Statut : D2 VALIDATED IN CONTENT / GIT CANDIDATE / NOT MERGED.** Ce complément exprime deux arbitrages Morris qui **priment sur les options A/B non tranchées** des §§17–19. Référence de décision : [Git direct Cursor / auto-session DEV](https://github.com/mcleland147/sfia-workspace/blob/b411e3276e987e93627348de266e0b383419eab9/projects/sfia-studio-next/governance/decisions/2026-11-23-ml5-cursor-git-direct-et-session-dev-automatique.md).

## 20.1. Git Cursor : option A retenue, Studio en lecture des réalisations techniques

- **Morris administrateur Cursor** fournit les permissions Git et gère Cursor Desktop/SDK et ses outils, sans confondre disponibilité des credentials et autorisation métier.
- **Pilote D6** inspecte le contrat et autorise distinctement la tentative et les opérations Git permises sur un dépôt et une branche déterminés.
- **Cursor** développe sur un workspace Git isolé et une branche dédiée ; il exécute ses tests, commits et **pushes directs** aux jalons significatifs autorisés. Il peut techniquement créer une PR ou réaliser un merge **uniquement sous mandat séparé** ; aucun droit de merge/force-push/promotion ne découle du mandat de développement.
- **Studio Next D7** conserve contrat, droits vérifiables, tentative, état, STOP et références de travail ; **D9 lit le dépôt et la branche distants**, vérifie les permissions et les SHA effectivement publiés ; D8 vérifie les preuves et Nora réalise une analyse finale unique.
- **Studio Next ne publie pas le code de Cursor dans ML5** et conserve son circuit ML4 de publication documentaire. Il n'y a ni publisher code Studio, ni second moteur Git D7.
- Un commit local non poussé n'est **pas consultable depuis GitHub**. Crash, divergence, perte d'ACK et révocation imposent réconciliation, pas push/redispatch aveugle.

**Critères de sortie F01–F09 :** préflight dépôt/branch/base/droits, workspace isolé, commits/pushes sous mandat, publication distante réelle vérifiée par ref/SHA, lecture des contenus, distinction local/distant, continuité entre deux contrats et absence de PR/merge implicite. Les essais mutatifs GitHub REAL restent sous un GO spécifique.

## 20.2. BROWSER : auto-session Pilote de test exclusivement dans DEV local

En DEV, le testeur Cursor peut accéder directement aux surfaces de Studio **sans franchir la mire `/login`**, au moyen d'une identité Pilote de test **établie côté serveur**, tout en conservant la session et les contrôles d'autorité D1/D6.

Le mode doit être explicitement activé, réservé à une lane DEV isolée, limitée à loopback ou à une restriction équivalente vérifiée. RECETTE/STABLE et tout runtime exposé conservent le login habituel. La sélection arbitraire d'un Pilote réel, l'utilisation de secrets hors DEV et l'ouverture d'effets externes sont interdites. Les scénarios T-12 utilisent des identités de test séparées et autorisées.

**Exit :** tests positifs de navigation DEV, tests négatifs hors DEV et de droits, login normal non régressé, Figma L0/L1/L2 et BROWSER/F2 12.01–12.14 avec captures runtime originales. Aucune preuve BROWSER ne vaut preuve Nora/WEB/Cursor LIVE.

## 20.3. Dépendances et autorisations non incluses

Le développement technique se poursuit dans **le même ML5**, sous Cursor et SFIA v2.6. Le présent GO concerne uniquement l'intégration documentaire des décisions ; les effets code/Git distants, PR, merge, migration RECETTE/STABLE, activations WEB LIVE/SDK LIVE, promotion et adoption restent distincts.

**Verdict : FONCTIONNEL VALIDATED IN CONTENT / IMPLEMENTATION AND BROWSER NOT YET PROVEN / NOT ADOPTED.**

# 21. Consolidation R-004 — décision Morris et cible fonctionnelle après C13 (24/11/2026)

**Autorité :** Morris, décision explicite en conversation et GO Git documentaire du 24/11/2026. **D2 — VALIDATED IN CONTENT** pour l'interdiction des déclencheurs lexicaux décisionnels et la priorité fonctionnelle ; **DOCUMENTED / CANDIDATE / NOT MERGED** pour la consolidation et les conditions de vérification. Aucun choix physique de persistance, modèle ou topologie supplémentaire adopté. Le présent complément prime sur les constats historiques de non-implémentation et précise les §§3–7, 10–13 et 20 sans annuler les exigences ni réécrire leur historique.

## 21.1. Arbitrage ferme — Nora comprend l'intention, elle ne la détecte pas par mots-clés

Nora qualifie **sémantiquement** l'intention, le contexte, le résultat, la complexité, les risques et les contraintes, puis choisit les moyens proportionnés. La décision de répondre directement, approfondir, rechercher une source, préparer un contrat, proposer une correction ou demander une clarification relève du conducteur cognitif D3 et de sa qualification structurée, validée par les contrats existants.

- Aucun regex, dictionnaire/liste de mots-clés, matching de phrases, comptage de mots ou seuil de longueur ne décide de l'intention, de la profondeur cognitive, du recours à un outil ou du déclenchement de préparation d'un contrat ; aucun fallback lexical équivalent, y compris lorsque le modèle est indisponible.
- Les expressions régulières et contrôles déterministes restent légitimes pour parsing, formats, détection de secrets, sécurité, permissions, budgets, identité/version/empreinte, validation de schéma et invariants. Une recherche lexicale peut fournir un **indice de découverte de source**, jamais établir l'intention, la suffisance, l'absence d'un fait ou l'autorité.
- Si la qualification sémantique est incertaine, incomplète ou indisponible : clarification proportionnée, résultat partiel ou refus de préparation READY selon le risque ; aucun effet ni mandat inféré. Les contrôles opposables D6/D7/D9 restent déterministes et indépendants de l'avis IA.
- Le comportement doit tenir pour paraphrases, demandes courtes complexes, négations, citations de termes techniques, demandes sans vocabulaire attendu, contextes ambigus et conversation simple. Il ne doit pas créer de contrat pour une simple discussion sur Cursor.

## 21.2. Conditions de complétude fonctionnelle

- **A — cognition :** questions déterminantes explicites, sélection et consultation des bonnes versions, suivi de renvois, contradictions et restrictions, réouverture ciblée, suffisance qualitative et reprise avec droits/versions recontrôlés. Le contrat est élaboré sur les faits et le résultat métier, pas par un assemblage générique d'extraits. Critères d'acceptation propres à la mission ; pas de troncature silencieuse de l'instruction ni de READY fondé sur un simple compteur de sources. L'initiative cognitive n'est jamais un droit d'effet.
- **B — web :** capacité publique LIVE réelle, déclenchée sur besoin sémantique, recherche et consultation attestées selon les signaux disponibles, citations accessibles et confrontation aux sources privées côté D3. Isolation au point de sortie et traitement des contenus non fiables restent impératifs. B09 est déclaré NOT_IMPL après C13 ; l'implémentation de la frontière seule ne satisfait pas la capacité.
- **C — activité :** projection du travail réel Nora pendant RUNNING, pour sas, projet, documents et revue ; provenance des événements, reprise et ordre, aucune chaîne de pensée ni progrès inventé. Conserver une réponse simple sans surcharge.
- **D — réalisation :** conserver contrat unique, autorisation D6, tentative D7 et exécution SDK LIVE. Après terminaison ou interruption réconciliée, le produit doit constituer ou recevoir le dossier automatiquement dans le circuit propriétaire, qualifier D8 puis rendre disponible l'unique avis global Nora sur preuves accessibles, sans dépendre d'un script de test appelant manuellement les routes de handoff/qualification. L'absence de rapport produit un dossier honnête PARTIAL/UNKNOWN ; pièces tardives gouvernées sans réécriture ni redispatch. Git option A et MCP sont conditionnels ; nouveau contrat et nouvel Exécuter pour une nouvelle tentative.

## 21.3. Qualification et priorités

C11 et C12 rapportent des missions locales réelles Nora/SDK/D8/Nora ; C13 rapporte une mission longue sans navigateur et STOP LIVE observé. Cela ne prouve ni investigation transverse complexe, ni génération de contrats sans raccourci lexical, ni restitution autonome, ni WEB LIVE, ni reprise autonome après redémarrage serveur. Les résultats historiques restent bornés à leurs scénarios. La revue R-004 cible d'abord A/B/C et D01–D02, puis restitution autonome et sécurité/intégrité D7/D8, puis continuité et non-régression consolidées. Les vérifications UI fonctionnelles minimales sont nécessaires ; Figma F2 reste à traiter en recette UX sans exclusion du contrat.

**État de suivi proposé et accepté comme consolidation de travail :** ML5 ARCHITECTURAL ALIGNMENT CONFIRMED — FUNCTIONAL COMPLETION REQUIRED. Ne vaut pas validation exhaustive du code, acceptation produit, GO de publication ou mise à disposition. R-004 se trouve dans le registre vivant, à synchroniser dans le même lot que le code lors du prochain cycle Cursor. Sources : [C11](https://github.com/mcleland147/sfia-workspace/blob/f9dfcaaad90470e046d95a9d0a93115341a750d3/sfia-review-handoff/latest-chatgpt-review.md), [C12](https://github.com/mcleland147/sfia-workspace/blob/45311f75dad80e19f76ae09adfb1da387514531f/sfia-review-handoff/latest-chatgpt-review.md), [C13](https://github.com/mcleland147/sfia-workspace/blob/e3ed518b55ecda9430c862cda063052f94da8e7c/sfia-review-handoff/latest-chatgpt-review.md).

# 22. Consolidation de conformité post-C14 — résultat fonctionnel et trajectoire (24/11/2026)

**Statut : consolidation documentaire validée comme base de travail par Morris, CANDIDATE / NOT MERGED / NOT ADOPTED.** [Revue approfondie intégrale](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md), [registre courant](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md), [contrat d'acceptation](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md), [snapshot code post-C14](https://github.com/mcleland147/sfia-workspace/blob/78f60e40f466b520ac0381d5d27e212bd2fa5695/sfia-review-handoff/latest-chatgpt-review.md). Ce complément rend explicite la complétude attendue des exigences déjà établies aux §§3–7, 10–13, 17–21 ; il ne crée ni nouvelle capacité hors ML5, ni adoption d'architecture physique, ni GO de construction C15. Les contenus antérieurs sont préservés. Les preuves C11–C14 sont bornées à leurs scénarios, le code courant local reste non publié.

## 22.1. Conduite cognitive adaptative commune

Le Pilote ne doit pas devoir relancer Nora parce qu'une limite technique de segment est atteinte. Nora qualifie sémantiquement intention, contexte, résultat, complexité, risques et moyens nécessaires. Elle peut répondre simplement, ou former et réviser les questions déterminantes, choisir les sources pertinentes, suivre les renvois utiles et réconcilier faits, décisions, restrictions, contradictions et inconnues. Elle ajuste ses ressources en cours de travail en fonction du besoin restant et de la valeur informative marginale, et consolide ses acquis et sa couverture pour continuer ou reprendre le même travail logique. L'allocation n'est pas décidée par mots-clés, regex, longueur ni profil fixe arbitraire. Aucun fallback lexical décisionnel. Les règles techniques, de sécurité et d'autorité restent opposables.

Distinguer allocation cognitive initiale/réallocation, limite technique d'un appel ou d'une fenêtre de contexte, limite financière/sécurité globale définie par le propriétaire et validation de structure Zod. Le budget de segment ne constitue pas un critère métier de clôture. Pas de consommation illimitée : si impossibilité ou limite globale, préserver un état partiel/suspendu et les acquis, expliquer honnêtement la limite et permettre reprise sans rejouer d'effet. Mesure de consommation réelle si exposée (tokens, appels, coût, durée, modèle/effort), calibration proportionnée simple/complexe. Aucun plafond métier arbitraire ni troncature silencieuse des livrables. La réponse conversationnelle n'est pas le contenant obligatoire de l'intégralité d'un objet métier long.

Cette capacité est **transverse** : sas, projet, connaissances/documents, décisions, préparation technique et bilan. Elle ne se réduit pas au cas Cursor. La complétude n'est pas une auto-déclaration ni absence de marqueur bloquant : les questions indispensables et restrictions doivent être positivement étayées, ou le résultat non prêt/partiel est explicite. Le contrat inspectable et READY sont distingués ; READY lié au travail et à la version exacts, requalification ciblée si dépendance matérielle change. Critères d'acceptation spécifiques, instruction complète, sources, contraintes, exclusions, capacités, permissions, Git/MCP conditionnels et STOP réellement issus de la mission ; pas assemblage générique substituant le jugement.

## 22.2. Recherche, transparence et restitution

Le fournisseur WEB LIVE a été raccordé au C14 ; cela ne prouve pas l'investigation intégrée Nora, la profondeur de consultation ou la confidentialité complète. Préserver B1 ; sécurité au point de sortie, consultation réellement utile, provenance et distinction découverte/ouverture/extrait/couverture/fait, confrontation sémantique et applicabilité versionnée. Ne transmettre aucune donnée privée au fournisseur public ; WEB avec données fictives/publiques DEV uniquement tant que la frontière n'est pas qualifiée. Activité réelle, sobre, corrélée au bon travail, sans progression fictive ni chaîne privée ; enrichir C1 avec les observations de la conduite cognitive, pas d'infrastructure parallèle par défaut.

Conserver HumanDecision D6 et réalisation D7 Cursor SDK. Une fois la tentative terminale/interruption réconciliée, le produit enchaîne automatiquement la remise/collecte des pièces, la qualification D8 et l'observation D9 si applicable, puis l'avis global unique Nora sur le dossier versionné. Le Pilote peut consulter le dossier et en discuter dans le fil avec la référence retirable, sans envoi automatique. Aucun script de test ne doit simuler les étapes manquantes du produit. Rapport, inventaire, preuves accessibles/vérifiées/évaluées par critère, verdict technique, avis Nora et réception D6 restent distincts. Pièces tardives, rapport absent/incomplet, reprise et STOP conservent une vérité honnête, sans redispatch ni rollback présumé. Git A demeure l'arbitrage ; administration MCP et Cursor hors Studio, vérification seulement si la mission l'exige.

## 22.3. Trois lots de convergence au sein de ML5

1. **Conducteur cognitif Nora complet** : cognition adaptative, questions, sources, contexte et reprise, WEB sûr, activité et production contractuelle spécifique intégrale avec READY fiable. Résultat : investigation simple/complexe proportionnée, capable de continuer après limite de segment, contrat fondé sur des acquis traçables, ou suspension honnête.
2. **Réalisation et restitution autonomes** : D6/D7 permissions effectives, confinement, résilience/STOP, terminal→handoff→preuves D8/D9→avis Nora, version et concurrence. Résultat : une mission autorisée produit automatiquement un bilan exploitable, même après interruption réconciliée.
3. **Qualification intégrée ML5** : continuité entre missions, vérification des 99 exigences et CA/T/Q/PF, non-régression, preuves LIVE proportionnées, cohérence code/architecture/as-built/registre. Résultat : dossier permettant à Morris de décider des conditions de ses essais utilisateur ; pas de mise à disposition automatique.

Le détail IN/OUT, risques, responsabilités, oracles, dette/exit et dépendances est dans la [revue §9](https://github.com/mcleland147/sfia-workspace/blob/37edb41329526d07134a802f8f73e7371c941c16/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md). Corriger les risques P0 dès la frontière concernée. F2 reste attendu en recette UX, utilisabilité fonctionnelle minimale maintenant. DEV LIVE isolé existant, pas nouveau moteur ni lane par défaut ; GitHub REAL et MCP mutatifs seulement si mission et mandat réels. Morris a demandé de ne pas publier actuellement le code ; modalités ultérieures à décider. Aucun PR, merge, publication code, cutover, release, ADOPTED ou GO C15 découlant de cette consolidation.

**Verdict courant : ML5 TARGET ARCHITECTURE COHERENT — IMPLEMENTATION CONFORMITY PARTIAL — FUNCTIONAL COMPLETION REQUIRED.**

## 23. Point de réalisation post-C20 — constat fonctionnel (24/11/2026)

**Nature :** addendum de suivi D1 strictement factuel sous GO Morris du 24/11/2026 pour synchroniser les documents ML5 publiés ; aucune modification normative, aucun nouvel arbitrage, aucun GO lot 2, pas de réception/adoption. Références opposables pour l'état courant : [revue globale §11](https://github.com/mcleland147/sfia-workspace/blob/978e42648aa0149e4f2f2bab03b4483a5bbfd496/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md#11-revue-globale-post-c20--état-de-travail-au-24112026-d1-factuel), [registre §9](https://github.com/mcleland147/sfia-workspace/blob/f649776bc2da1be1a0ba77486675b76891a31cb3/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md), [conception du conducteur §13](https://github.com/mcleland147/sfia-workspace/blob/141faa488a72d9164678e927b5785370da67146a/projects/sfia-studio-next/architecture-technique/conducteur-cognitif-et-production-nora.md), [suivi des preuves §9](https://github.com/mcleland147/sfia-workspace/blob/af589c6949a26a197bbc30f43925d8267a3994c1/projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md), [handoff C20](https://github.com/mcleland147/sfia-workspace/blob/51cbadf26b8ce2f0b0ce52b3ebebd136ce4b6bef/sfia-review-handoff/latest-chatgpt-review.md). Code candidat local rapporté DIRTY C1–C20 @6cf33e99, NON OBSERVÉ directement, NO RELEASE ; main inchangé. Cursor READY WITH RESERVES ; ChatGPT : socle exploitable, sortie lot 1 non qualifiée, lot 2 conditionnel recommandé et non décidé.

- **Comprendre et préparer :** qualification structurée, travail cognitif durable, clarification ambiguë C20, contrat long C18, READY et refus D6 LIVE bornés ; capacité disponible dans ses scénarios, pas validation générale de tous les besoins.
- **Produire :** D4 relié à production cognitive (C20 document simple AVAILABLE) ; consolidation longue/multi-segments autonome et reprise complète à qualifier. WEB B1 P0 confidentialité ouvert ; usage non sûr à bloquer.
- **Réaliser :** SDK LIVE, claim/ACK, STOP, supervision et premiers écrans existent. Le raccordement de l'autorité au point d'effet est renforcé C20, mais preuve après autorisation et changement d'une dépendance avant SDK reste attendue. Confinement réel du fournisseur à garantir.
- **Restituer :** dossier, qualification D8, avis Nora et retour au fil existent partiellement ; la chaîne automatique après terminal sans sollicitation ni script externe reste à construire. Le lot 2 n'est pas seulement QA.
- **Qualifer :** lot 3 = parcours intégrés, non-régression, couverture et préparation des essais utilisateur ; F2 sous gate recette UX. Préserver les règles de décision, les quatre engagements et six volets, la distinction avis/qualification/autorisation et Git A.

Les scénarios intégrateurs proposés dans la revue globale composent les exigences déjà approuvées ; pas de nouvel oracle normatif. Le report/confinement des risques résiduels, la sortie lot 1 et l'engagement lot 2 restent des décisions Morris distinctes. Les constats historiques §§1–22 restent préservés ; ce point met seulement à jour l'état connu.

## 24. Situation fonctionnelle post-C22 — lecture courante

**Portée :** actualisation D1 factuelle sous GO Morris du 24/11/2026. [Revue globale §12](https://github.com/mcleland147/sfia-workspace/blob/ea74688a2ac2643a157dc680d4b2f5fa1fa0b517/projects/sfia-studio-next/construction/ml5-revue-approfondie-conformite-post-c14.md) ; [registre des 99 exigences §10](https://github.com/mcleland147/sfia-workspace/blob/eec09fdcabcf4299d3c57b4cf612a3d67c8a1718/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md) ; [handoff C22](https://github.com/mcleland147/sfia-workspace/blob/075d085628e5062b2fd17301f6347195fd25c53a/sfia-review-handoff/latest-chatgpt-review.md). Candidat DIRTY C1–C22 @6cf33e99 rapporté, NON OBSERVÉ directement. GO lot 2 et C22 acquis. Cursor READY WITH RESERVES ; ChatGPT NOT READY FOR LOT 2 EXIT — LIVE DOWNSTREAM OBSERVED / D8 EVIDENCE INTEGRITY AND RESTITUTION FENCING OPEN. NO RELEASE. Aucun changement de cible, exigences, décisions ou gates.

La cible reste besoin naturel du Pilote → investigation et production Nora → contrat inspectable → autorisation D6 → réalisation Cursor → collecte D7 → qualification D8/D9 → avis Nora → décision/suite. C22 démontre en DEV LIVE un parcours aval à partir d'un contrat préparé par la campagne : authorize/dispatch, agent/run SDK, rapport RECEIVED, verdict D8 CONFORMING observé, avis cognitif D3 après reprise. Le contrat n'est pas produit naturellement par Nora dans ce scénario ; reconcile est appelé en boucle. Le fichier add.exit=0 est demandé comme création et ne démontre pas un test exécuté. La qualification sémantique des critères et le fencing complet restent à terminer.

| Résultat utilisateur | Acquis | Reste |
|---|---|---|
| Nora comprend et prépare | C18 production structurée longue, C20 ambiguïté, C22 mergeMode | Investigation naturelle et consolidation sans perte, activité BROWSER |
| Recherche utile et sûre | C22 refuse free-form non autorisé | Provenance publique réellement alimentée, WEB LIVE autorisé ; garder deny tant que non sûr |
| Pilote autorise et suit | D6/D7 SDK LIVE, supervision et hook boot | Inspection exacte et refus obsolète, confinement fournisseur, supervision/restart sans appel intermédiaire |
| Studio restitue | collecte confinée et avis via conducteur avec outils D8 | Qualification réelle par critère, rapport lié, ownership et versions, avis unique et parcours UI |
| Pilote décide ensuite | bilan/retour contextualisé historique | Qualification BROWSER du bilan réel et suite, aucun auto-dispatch |

Préserver les quatre engagements, six volets, séparation autorité/avis, Git A. Le lot 3 non engagé vise la convergence intégrée et les corrections résiduelles, pas une nouvelle conception. Les états des §§1–23 sont historiques quant à la réalisation. Aucun passage de lot déduit de cette synchronisation.

## 25. Suivi factuel de réalisation UAT — 24/11/2026

[Journal UAT](../construction/recette-utilisateur-ml5-pilotage-360-20261124.md). Compréhension, Journal, rétention/OPEN, v1, lecture Git bornée, DRAFT/READY, D6 et LIVE SDK observés. WEB directe non aboutie, révision non conservée, mission préparation au lieu de réalisation, rapport reçu mais prototype non déclaré, preuves incomplètes, avis Nora LIVE absent et rapport inaccessible. UAT30 discussion seule mais DRAFT annoncé. 56 Q, règles, UX et autorités inchangées. Aucun nouveau statut validé ; journal §6 couverture et §7 proposition de stratégie.

**ML5 PRIMARY FLOW PARTIALLY OBSERVED — BUSINESS END-TO-END NOT ACHIEVED; OPEN / NO RELEASE / NOT ADOPTED.**
