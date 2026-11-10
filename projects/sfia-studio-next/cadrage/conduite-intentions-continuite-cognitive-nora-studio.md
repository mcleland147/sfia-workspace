# SFIA Studio Next — Conduite des intentions et continuité cognitive Nora/Studio

**Nature :** cadrage produit complémentaire — référence d'exigences pour la conception architecturale\
**Date :** 10 novembre 2026\
**Statut :** VALIDATED IN CONTENT BY MORRIS — 2026-11-10 ; publication sur branche documentaire candidate, non mergée sur main\
**Périmètre :** relation Pilote ↔ Nora ↔ capacités SFIA Studio Next, domaines D1–D9\
**Objet :** expliciter le comportement produit attendu, sans prescrire les mécanismes techniques de réalisation.

**Sources de cohérence :** [vision produit R1](vision-produit.md), [conduite gouvernée de Nora R2](../conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md), [création de projet R2](../conception-fonctionnelle/creation-de-projet-et-continuite-du-sas.md), [décisions et gouvernance R2](../conception-fonctionnelle/decisions-et-gouvernance-du-pilote.md), [réalisation gouvernée R2](../conception-fonctionnelle/realisation-operationnelle-gouvernee.md), [intégration Git R2](../conception-fonctionnelle/integration-git-gouvernee.md). Ces références conservent leur autorité respective ; le présent texte n'annule pas leurs contrats.

---

## 1. Finalité et principe fondateur

SFIA Studio Next est un environnement dans lequel le Pilote exprime naturellement ses intentions à Nora.

**Nora constitue l'interlocutrice principale du Pilote et conduit cognitivement le travail nécessaire à la réalisation de son intention.**

Le Pilote n'a pas à connaître la répartition interne des responsabilités entre Nora, Studio, ses domaines métier et ses outils techniques.

Il exprime un résultat attendu. Nora prend en charge la qualification, l'organisation, la conduite et le suivi du travail nécessaire pour y parvenir, dans les limites des décisions et autorisations applicables.

**Exigence centrale : une intention du Pilote doit pouvoir être conduite de bout en bout, y compris lorsqu'elle nécessite plusieurs capacités applicatives, plusieurs étapes dépendantes, des autorisations humaines et des reprises différées.**

Le comportement attendu ne peut pas être réduit à la production d'une réponse textuelle ou à la réalisation isolée d'une première opération.

## 2. Conduite du travail par Nora

### 2.1. Qualification initiale

Lorsqu'une intention est exprimée, Nora doit en comprendre :

- Le résultat recherché.
- Le périmètre et les contraintes exprimés.
- Les informations disponibles et celles réellement manquantes.
- Les opérations nécessaires et leurs dépendances.
- Les capacités mobilisables et les responsabilités correspondantes.
- Les décisions et autorisations nécessaires.
- Les conditions de réussite, d'attente, d'arrêt ou d'échec.

Cette qualification doit être proportionnée à la demande.

Une question simple ne nécessite pas de plan de travail artificiel. Une intention comportant plusieurs actions nécessite une conduite cohérente de ces actions.

Nora doit respecter les étapes imposées par le Pilote lorsqu'elles sont explicites.

### 2.2. Organisation et séquencement

Nora organise le travail selon les dépendances réelles.

Elle identifie ce qui doit être effectué avant de pouvoir poursuivre et ne présume jamais qu'une opération demandée a été réalisée.

Lorsqu'une étape dépend d'un résultat applicatif, Nora doit disposer de ce résultat pour déterminer la suite.

Elle peut adapter sa démarche en fonction des observations obtenues, dans le périmètre de l'intention et des autorisations applicables.

**Le séquencement du travail fait partie de la conduite cognitive de Nora ; l'exécution et la validation des effets restent sous la responsabilité des domaines compétents.**

## 3. Interaction entre Nora et Studio

### 3.1. Un service cohérent du point de vue du Pilote

Le Pilote doit pouvoir s'adresser naturellement à Nora :

« Nora, crée ce document. »

« Nora, crée ce projet. »

« Nora, prépare cette publication Git. »

« Nora, réalise ce travail et présente-moi les résultats. »

Ces formulations expriment une intention adressée au produit à travers Nora. Elles n'impliquent pas nécessairement que Nora possède personnellement le mécanisme technique réalisant l'opération.

Nora doit distinguer :

1. Les travaux cognitifs qu'elle réalise directement.
2. Les capacités applicatives qu'elle peut mobiliser par l'intermédiaire de Studio.
3. Les opérations nécessitant une décision ou une autorisation du Pilote.
4. Les capacités effectivement indisponibles ou non implémentées.

L'absence d'un outil directement exposé au modèle ne doit pas être assimilée automatiquement à l'impossibilité pour Studio de réaliser l'opération.

Une limitation technique interne ne doit pas être présentée comme un refus global de capacité lorsqu'un service applicatif autorisé peut satisfaire le besoin.

### 3.2. Responsabilités

**Le Pilote** exprime l'intention, précise ses contraintes, décide les arbitrages métier et accorde les autorisations nécessaires.

**Nora** qualifie, raisonne, prépare, organise, mobilise les capacités, interprète les résultats, adapte la progression et restitue les conclusions.

**Studio et ses domaines** réalisent les opérations applicatives, contrôlent leurs préconditions, appliquent les autorisations, conservent leurs états et produisent les résultats vérifiables.

Cette répartition ne doit pas fragmenter l'expérience conversationnelle du Pilote.

Aucune capacité technique ou cognitive ne se substitue à une décision humaine requise. La création d'un projet, notamment, conserve le contrat d'acte explicite du Pilote applicable au domaine D2.

## 4. Continuité cognitive après chaque résultat

Lorsqu'une opération est réalisée par Studio, son résultat doit pouvoir être exploité par Nora pour poursuivre le travail.

Le comportement attendu suit le principe :

**Intention → qualification → préparation → opération applicative → résultat observé → continuation cognitive → étape suivante ou restitution.**

Cette progression peut se répéter autant que nécessaire, de manière proportionnée et gouvernée.

Le résultat d'une opération peut notamment être :

- Une ressource créée ou modifiée, avec son identité et sa version.
- Une préparation effectuée et consultable.
- Une décision humaine obtenue, refusée ou encore attendue.
- Une opération externe confirmée.
- Un échec explicite ou un état incertain nécessitant réconciliation.

Nora ne doit pas tirer de conclusion sur une opération avant que son résultat effectif soit connu ou que son incertitude soit qualifiée.

**La restitution finale doit être construite à partir des faits observés, et non à partir d'hypothèses formulées avant l'exécution.**

## 5. Exemple de référence — Mission documentaire et publication Git

**Intention du Pilote :**

« Nora, crée ce document, publie-le dans mon dépôt GitHub et présente-moi le résultat. »

### Étape 1 — Qualification

Nora comprend l'objectif, identifie le document à produire, la cible de publication, les contraintes, les dépendances et les autorisations applicables.

### Étape 2 — Création documentaire

Nora prépare le document et mobilise le service documentaire compétent.

Studio effectue la création, contrôle son résultat et retourne les références de la ressource réellement enregistrée.

Nora exploite ce résultat pour poursuivre.

### Étape 3 — Préparation de publication

Nora mobilise les capacités de préparation Git applicables, à partir du document effectivement créé.

Studio vérifie les préconditions et produit un résultat de préparation inspectable.

Nora intègre ce résultat dans la suite du travail.

### Étape 4 — Autorisation

Si l'opération de publication nécessite une HumanDecision, le travail attend cette décision.

Nora présente au Pilote l'information nécessaire à l'autorisation.

L'attente ne clôture pas artificiellement l'intention initiale.

### Étape 5 — Publication et vérification

Après autorisation applicable, Studio réalise l'effet gouverné.

Nora exploite le résultat de l'opération et les informations de vérification disponibles.

Si l'autorisation est refusée, absente ou révoquée, l'effet ne doit pas être exécuté.

### Étape 6 — Restitution

Nora fournit une synthèse cohérente du travail :

- Ce qui a réellement été créé.
- Ce qui a été préparé.
- Ce qui a été autorisé ou refusé.
- Ce qui a effectivement été publié.
- Les références permettant de consulter les résultats.
- Les opérations non réalisées, réserves et suites éventuelles.

**L'ensemble constitue une même intention de travail, même si sa réalisation implique plusieurs services, plusieurs interactions ou une attente différée.**

Le Pilote ne doit pas être obligé de reconstruire manuellement les dépendances entre les étapes.

## 6. Attente, interruption, échec et reprise

La continuité cognitive doit fonctionner au-delà du seul tour conversationnel immédiat.

Lorsqu'une opération nécessite une décision humaine, un retour externe ou une information complémentaire, le travail doit pouvoir être suspendu puis repris à partir de son état réel.

Une reprise doit conserver les acquis pertinents, les opérations déjà réalisées, les références obtenues et les contraintes toujours applicables.

En cas d'échec partiel, Nora doit distinguer les résultats acquis de ceux qui n'ont pas été obtenus.

Une opération déjà confirmée ne doit pas être exécutée une seconde fois uniquement parce que Nora n'a pas pu terminer sa restitution.

Un résultat incertain nécessite une vérification auprès de son propriétaire applicatif avant tout nouvel effet susceptible de produire un doublon.

Une suspension ou une révocation décidée par le Pilote reste opposable conformément aux contrats de gouvernance.

**Une interruption conversationnelle ne doit ni effacer un effet confirmé, ni autoriser sa répétition automatique, ni faire perdre le sens de l'intention initiale.**

## 7. Exigence de cohérence conversationnelle

Nora doit présenter au Pilote une représentation fidèle du fonctionnement global de Studio.

Elle ne doit pas annoncer qu'une action est impossible uniquement parce qu'elle ne dispose pas directement de son outil d'exécution, lorsque Studio possède une capacité applicable.

Elle ne doit pas annoncer une réussite avant la confirmation de l'effet.

Elle ne doit pas annoncer un échec lorsque le résultat applicatif confirme une réussite, ni transformer un échec en succès.

Les états de génération cognitive, d'opération applicative et de réalisation globale du travail doivent rester distinguables.

La conversation doit refléter la réalité du service rendu.

## 8. Couverture transverse

Ces principes ne concernent pas uniquement les documents ou les publications Git.

Ils s'appliquent aux capacités pertinentes de SFIA Studio Next :

- D1 — identité, accès et contexte du Pilote.
- D2 — préparation et création de projets.
- D3 — conduite cognitive Nora.
- D4 — connaissance, documents et révisions.
- D5 — trajectoire, cycles et méthode.
- D6 — décisions, autorisations et gouvernance.
- D7 — préparation et réalisation opérationnelle.
- D8 — résultats, preuves et qualification.
- D9 — ressources Git et intégrations.

L'architecture doit permettre à Nora de conduire les intentions impliquant ces domaines, sans dupliquer leurs responsabilités ou leurs mécanismes d'autorité.

## 9. Liberté de conception et obligations de résultat

Le présent cadrage **ne prescrit aucune architecture technique particulière**.

Il n'impose ni un nombre d'appels au modèle, ni une file technique, ni un moteur d'orchestration, ni une technologie de persistance, ni un modèle particulier d'exposition des outils.

Ces choix doivent être déterminés à partir de l'examen de l'architecture existante, des capacités effectives, des risques, des exigences de sécurité et des preuves attendues.

Toute solution candidate doit toutefois démontrer sa capacité à satisfaire **l'intégralité du comportement décrit dans ce document**.

Une correction limitée à la narration d'une sauvegarde documentaire ne constitue pas, à elle seule, la réalisation de cette exigence.

Une solution qui oblige le Pilote à enchaîner manuellement des opérations que Nora devrait conduire ne satisfait pas non plus l'objectif de continuité.

La construction peut être organisée de manière progressive pour maîtriser les risques, à condition que la conception couvre le résultat de bout en bout, que les limites temporaires soient explicites et qu'aucune livraison partielle ne soit présentée comme une capacité complète.

## 10. Contrat d'évaluation de la future architecture

La revue d'architecture doit :

1. Vérifier la compréhension et la couverture de toutes les exigences de comportement précédentes.
2. Confronter ces exigences au code, aux capacités et aux contrats réellement existants.
3. Identifier les dysfonctionnements, leurs causes, leurs conditions de reproduction et leurs impacts.
4. Déterminer comment Nora peut conduire une intention à travers plusieurs résultats et autorisations.
5. Proposer l'architecture technique la plus cohérente avec le produit existant, sans duplication injustifiée de responsabilités ou de moteurs.
6. Définir les scénarios de validation, notamment la mission documentaire et Git de bout en bout, les échecs partiels et les reprises.
7. Qualifier les modifications nécessaires, les risques de régression, les preuves attendues et les conditions de retour arrière.

**Critère déterminant :** la proposition architecturale doit expliquer comment obtenir le comportement demandé dans son intégralité. Les alternatives techniques peuvent être étudiées, mais elles ne peuvent pas remplacer ou réduire silencieusement l'exigence produit.

## 11. Autorité et statut

Ce document consolide les exigences de comportement exprimées par Morris dans le cadre de SFIA Studio Next.

Il complète la vision produit R1 et les spécifications fonctionnelles R2 applicables. Il ne remplace pas les décisions de gouvernance, les contrats d'autorisation ou les ADR existants.

En cas d'incompatibilité identifiée, la revue doit expliciter le conflit et les arbitrages nécessaires, sans modifier implicitement une décision déjà validée.

**Statut du présent document : VALIDATED IN CONTENT BY MORRIS — 2026-11-10 / ON DOCUMENTARY CANDIDATE BRANCH — NOT MERGED.**

Aucune architecture technique, implémentation ou adoption du fonctionnement cible n'est déclarée par sa rédaction.
