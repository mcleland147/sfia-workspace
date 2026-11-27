# SFIA Studio Next — Continuité cognitive et fonctionnelle du projet
## Complément au contrat fonctionnel de connaissance, sujets et continuité

| Métadonnée | Valeur |
| --- | --- |
| Date | 27 novembre 2026 |
| Nature | Complément fonctionnel transverse D3/D4/D5/D6 et contrat de restitution des surfaces projet ; capitalisation des arbitrages de Morris après diagnostic MaintiPlan |
| Statut | DOCUMENTED — orientations explicitement validées en conversation par Morris ; modalités complémentaires de réalisation et oracles candidats à vérifier ; aucun nouveau statut ADOPTED |
| Jalon | R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED |
| Autorité | Morris : arbitrages et gates ; ChatGPT : conception, formalisation et revue ; Cursor : réalisation technique sous contrat SFIA v2.6 ; Pilote : décisions métier dans Studio |
| Mandat | GO explicite Morris du 27/11 : mise à jour ciblée Figma page 05, puis création de ce seul complément fonctionnel directement sur Git pour préparer le macro-lot correctif |
| Git | `mcleland147/sfia-workspace` ; branche documentaire candidate `docs/next-openai-studio-convergence-20261126` ; base avant contribution `8acc3074fba244d217b0249d5839ef2ea0321402` ; main observé `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Candidat produit | RECETTE `e8e6e06961fa0a7224db3badb3b591b8be8046ac`, BUILD `rpEczSp61evIZ7d6fnIWR` rapportés par Cursor ; code local NON OBSERVÉ directement par ChatGPT ; preuves du handoff ci-dessous |
| Frontières | Ce document ne remplace ni D3, ni D4, ni D5, ni D6, ni les contrats UX existants ; ne modifie pas le SEF ou la doctrine ; ne vaut pas GO technique, cutover, PR, merge, acceptation Livraison 1, R6 ou adoption |

## 1. Objet et sources de référence

Ce complément précise comment rendre réellement opérante une capacité déjà conçue et partiellement implémentée : la continuité d'un projet piloté par conversation avec Nora. Il n'introduit ni nouveau domaine, ni seconde mémoire, ni moteur de pilotage indépendant. La vision fondatrice reste celle d'un cockpit unique et d'une Nora interlocutrice naturelle, capable de mobiliser les capacités Studio. Les schémas de vision ne sont pas une spécification exhaustive ; leur README a été repéré, les PNG n'ont pas été réinspectés dans cette contribution.

Références applicables (sur la base documentaire candidate ci-dessus, sauf référence immuable précisée) :

- [SEF v0.2](../governance/SEF.md), notamment SEF-01/02/03/05/06/07/09/10 et §10 ; [Roadmap vivante](../governance/roadmap.md) ; [convention de nommage](../governance/product-naming-conventions.md).
- [Vision cible](../cadrage/vision-cible/README.md) et [vision produit R1](../cadrage/vision-produit.md).
- [D3 — Contexte et conduite gouvernée de Nora](contexte-et-conduite-gouvernee-de-nora.md), RG-CONV, RG-CTX-006, RG-AUTH, RG-APP et lecture contextuelle.
- [D4 — Connaissance, sujets et continuité du projet](connaissance-sujets-et-continuite-du-projet.md), RG-KNOW-001..023, PF-KNOW-01..17 ; notamment capitalisation sélective, sujets vivants, points ouverts transversaux, provenance, résolution, reprise et documents versionnés. Blob observé `4636d088cccec8e05470148f8566395fb262d3b1`.
- [D5 — Trajectoire, cycles et guidance CKI](trajectoire-cycles-et-guidance-cki.md), RG-TRJ-001..016, 033/034 et contrat minimal d'ouverture ; [D6 — Décisions et gouvernance du Pilote](decisions-et-gouvernance-du-pilote.md), RG-GOV-001..016, 023..030.
- [Décision SEM du 12/11](../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md) : compréhension sémantique, pas de routeur lexical ni de fallback concurrent.
- [Conducteur cognitif et production Nora](../architecture-technique/conducteur-cognitif-et-production-nora.md), [allocation cognitive et FinOps](allocation-cognitive-recherche-web-et-finops.md), [observabilité transverse](../architecture-technique/contrat-observabilite-transverse.md).
- [UX espace projet R3](../ux-ui/espace-projet-interaction-pilote-nora.md), [conception Travail](../construction/convergence-ux-ui-globale/conception-ux-travail-avec-nora.md), [contrat technique Travail](../construction/convergence-ux-ui-globale/contrat-technique-travail-avec-nora.md).
- [PV MaintiPlan T01–T08](../construction/recette-utilisateur-ml5-maintiplan-20261127.md), [bilan intégré convergence](../construction/convergence-openai-studio/bilan-integre-20261127.md), [contrat d'acceptation cognition et réalisation gouvernée](../construction/contrat-acceptation-cognition-et-realisation-gouvernee.md), [registre de couverture](../construction/ml5-registre-couverture-et-revue-de-developpement.md).
- [Review Handoff diagnostic](https://github.com/mcleland147/sfia-workspace/blob/f6999c97abc6a1fd01c18e2ff441d66189ff9a33/sfia-review-handoff/latest-chatgpt-review.md), blob `6e9ac6a6c910bf1b04fa3e97e3a133e3a46de461`, READY WITH RESERVES ; extraits candidat et données PG rapportées, causes racines non exhaustives.
- Captures fournies par Morris le 27/11 : MaintiPlan (Travail, Journal, Trajectoire, bibliothèque) ; CampusNova (Journal Sujets, visionneuse sujet, Points ouverts, Décisions). Observations visuelles conversationnelles, pas de lien Git fictif ni de preuve de la version qui a initialement créé les objets CampusNova.
- [Figma page 05](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=700-38), [écran nominal 05.01](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=700-39), panneau [702:123](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=702-123), mis à jour dans ce mandat (§9).

## 2. Résultat utilisateur et périmètre

**Double finalité indissociable, exprimée et validée par Morris :**

1. Pilote : vision à 360 degrés de la vie réelle du projet, de la réflexion à la décision et aux travaux, sans gestion administrative de la mémoire, sans relecture intégrale du fil et sans nécessité de tenir une documentation de pilotage parallèle pour retrouver ce qui a été traité.
2. Nora : connaissance structurée, hiérarchisée, actualisée et sourcée qui l'aide à se repérer, qualifier une nouvelle demande, retrouver les informations et les messages exacts, sélectionner ses lectures et réutiliser les acquis sans reconstruire systématiquement tout le contexte.

Les interfaces sont des projections et des accès à cette capacité ; elles ne sont pas son unique résultat. La qualité de pilotage, la fiabilité des échanges et la réduction des traitements redondants doivent être démontrées conjointement. Le fil unique demeure le point naturel d'interaction. Les données, sources et décisions restent sous les responsabilités propriétaires existantes.

IN : qualification sémantique de l'apport des échanges et des résultats Nora ; capitalisation autonome et sélective ; sujets/sous-sujets et historique ; synthèses, acquis et points ouverts ; décisions durables ; évolution de trajectoire ; exploitation cognitive des connaissances ; projections Travail/Projet/Journal/Trajectoire ; compteur documentaire ; panneau droit et accès récents ; preuves, reprise et intégration transverse.

OUT : nouveau moteur D3, deuxième mémoire, workflow de pilotage rigide, classification lexicale, nouveau système de chats, deuxième registre de décisions, nouvelle vérité financière, refonte générale du Journal ou du shell, reconstitution massive de l'historique, migration ou modèle de données imposé par ce document, validation automatique des arbitrages, exécution D7 (Livraison 2), activation WEB/Admin, changement des plafonds, promotion RECETTE ou STABLE. Toute extension technique structurante requiert qualification et arbitrage distincts.

## 3. État de départ : capitaliser l'existant sans le surestimer

| Capacité | CampusNova (captures du 27/11) | MaintiPlan (PV et diagnostic) | Écart à traiter |
| --- | --- | --- | --- |
| Sujets | Deux sujets autonomes : parcours de réservation et responsabilités ; accompagnement et déploiement des utilisateurs | 0 sujet en PG rapporté | Mobilisation et persistance D4, organisation progressive |
| Hiérarchie | Contrôles de navigation visibles ; aucun arbre parent/enfant effectivement démontré par ces captures ; Morris indique ne pas avoir obtenu de hiérarchie correcte | Aucune hiérarchie visible | Exigence indispensable : démontrer une arborescence réelle, pertinente et évolutive |
| Synthèses | Une synthèse lisible ; « Synthèse non encore disponible » sur l'autre sujet ; aperçu parfois tronqué | Pas de sujet à restituer | Synthèse courante proportionnée, fraîcheur et absence honnêtes |
| Acquis | Plusieurs acquis sur le parc de Lille, dont répétitions sur 12 portables/2 en maintenance/10 opérationnels ; 9 mobilisables lors d'un incident | 4 acquis CURRENT rapportés après T07/T08, non visibles dans les projections attendues | Consolider sans perdre les distinctions temporelles ; rattacher et restituer |
| Points ouverts | Vue sujet et vue transverse existantes ; libellés souvent longs et questions proches sur prêts/retours | 0 open_points rapporté | Détection, consolidation, résolution, intitulé court et navigation |
| Historique | Échanges Pilote/Nora et lien « Ouvrir ce message exact » ; extraits avec marqueurs Markdown bruts | Fil disponible ; liens sujet absents | Conserver provenance exacte, améliorer présentation si nécessaire, prouver réutilisation cognitive |
| Décisions | Une décision structurante sur la confirmation d'une réservation, avec choix, justification, autorité, portée et historique ; la source demandait explicitement de formaliser | Une HumanDecision OPEN_CYCLE applicable ; arbitrages T07 capitalisés en acquis, matérialisation D6 métier non démontrée | Reconnaissance sémantique d'actes durables sans formule magique ; distinguer D4/D6 |
| Trajectoire | Non observée ici | Cycle fonctionnel actif, QA envisagée, finalité générique et enums exposés ; acquis et points ouverts absents des projections | Finalité contextualisée, évolution et liens vers D4 |
| Documents | Non observés ici | V1 disponible dans bibliothèque ; compteur 0 car SAVING seulement | Compter les identités documentaires présentes dans bibliothèque |
| Réutilisation cognitive | Non démontrée par les captures | Investigation T08 aboutie, 909844 tokens cumulés, 6 segments émetteurs, 40 observations non nulles ; détail des relectures non établi | Prouver sélection/recherche ciblée et bénéfice sans sacrifier la qualité |

Ces constats établissent que des fonctionnalités existent et ont produit des résultats antérieurs. Ils ne démontrent ni leur conformité complète, ni une régression de code datée, ni la cause exacte de l'écart CampusNova/MaintiPlan. Cursor devra examiner le candidat, les parcours réellement raccordés, les conditions d'admission, les données et les preuves avant de corriger. Préserver les données historiques des deux projets.

## 4. Responsabilités et autorité

| Acteur / domaine | Responsabilité | Frontière |
| --- | --- | --- |
| Pilote | Exprime besoins, clarifie, arbitre, décide, autorise, peut rectifier la connaissance | Ne doit pas administrer la mémoire, déclencher une mise à jour manuelle ou utiliser des mots imposés |
| Nora / D3 | Comprend l'intention et les apports du travail, sélectionne le contexte, qualifie les évolutions utiles, organise la connaissance, mobilise les propriétaires, restitue les résultats réels | Pas d'autorité métier autonome ; pas de compteur inventé ; pas de décision par simple synthèse |
| Studio / D4 | Contrôle, conserve, actualise, versionne, retrouve et restitue Sujets, Acquis, Points ouverts, Documents et liens | Pas de décision D6, pas de seconde mémoire, pas d'invention de synthèse par projection |
| Studio / D5 | Possède la trajectoire, l'état réel du cycle, sa finalité, le CKI principal et la méthode retenue | Un seul cycle actif ; projection future distincte de l'effet autorisé |
| Studio / D6 | Vérifie et conserve les actes humains applicables, leur source, portée, historique et restrictions | Une recommandation, une source ou une préférence ne confère aucune autorité |
| Studio / D7/D8/D9 | Possède les exécutions, résultats/preuves et références Git selon les contrats existants | Les vues et liens récents référencent ces objets sans les dupliquer ni autoriser un effet |
| Studio / projections | Calcule les compteurs, observe les consultations effectives, contrôle les accès et restitue les états propriétaires | Pas de génération IA pour une information déterministe disponible en base |

Nora intervient sur le sens ; Studio sur le contrôle, la persistance et l'état effectif ; le Pilote sur l'autorité. Une même donnée peut être visible sous plusieurs angles, jamais maintenue comme plusieurs vérités indépendantes. PostgreSQL demeure l'autorité transactionnelle du produit selon DATA-01. Une recherche dérivée, une synthèse ou un index ne remplace pas l'objet propriétaire ni son état d'autorité.

## 5. Conduite sémantique de la continuité

### 5.1. Principe validé

L'analyse cognitive de Nora ne doit pas se limiter à répondre à la dernière demande du Pilote. Elle doit également considérer ce que cet échange apporte à la vie du projet : **à la fois l'apport du Pilote et les résultats significatifs de son propre travail.**

La qualification est régulière ; les mutations sont autonomes, sélectives et proportionnées. Une conversation sans apport durable ne déclenche pas d'écriture inutile. Une demande qui modifie plusieurs dimensions peut mobiliser plusieurs capacités, sans perdre une intention ni imposer un second GO lorsqu'un acte humain clair et recevable existe déjà.

Séquence fonctionnelle (pas un algorithme ni une prescription d'appels) :

1. Comprendre la demande, le contexte réellement pertinent et les éventuelles évolutions apportées par le Pilote.
2. Sélectionner les connaissances, décisions, sujets, points ouverts et sources utiles à ce travail ; lire davantage seulement si nécessaire.
3. Réaliser le travail cognitif ; identifier les résultats significatifs en cours de travail ou à sa consolidation.
4. Qualifier les changements utiles : création, rapprochement, enrichissement, rectification, résolution, réorientation, référence d'une ressource ou acte humain durable.
5. Mobiliser les propriétaires sous leurs contrôles et les droits en vigueur ; obtenir le résultat effectif.
6. Restituer naturellement au Pilote, sans exposer de mécanismes internes inutiles ; rendre les mutations réellement persistées disponibles pour les prochaines missions et les projections.

Questions indicatives de qualification, non checklist de dix opérations : qu'est-ce qui est nouveau, utile ou modifié ? Un sujet existe-t-il ? Faut-il le créer, enrichir, hiérarchiser ou rapprocher ? Un acquis contredit-il un état courant ? Un point ouvert est-il apparu ou résolu ? Un arbitrage humain est-il durable et applicable ? La trajectoire évolue-t-elle ? Quelles ressources et sources exactes sont utiles ? Qu'est-ce qui ne mérite aucune mutation ?

Ne pas relire tous les sujets, toutes les décisions et toute la trajectoire à chaque tour ; ne pas imposer une chaîne d'appels de classification, une taxonomie figée, des mots-clés ou un agent mémoire indépendant. Un même appel ou segment peut suffire. Le choix technique doit s'intégrer au conducteur D3 unique, à son allocation adaptive modèle/effort gouvernée par environnement (option C validée) et à ses mécanismes de reprise.

### 5.2. Fiabilité des mutations

Les effets D4/D5/D6 restent distincts de la réponse cognitive. Une réponse qui annonce une mise à jour ne prouve pas sa persistance. Ne pas faire disparaître silencieusement une intention, un effet échoué ou une mutation importante à reprendre. Respecter l'idempotence, les identités, les versions, les contrôles d'autorité et la cohérence en présence de concurrence, d'interruption ou de reprise. Les travaux indépendants peuvent continuer ; une ambiguïté déterminante sur l'autorité nécessite une clarification ciblée. Le détail technique de reprise doit être qualifié par Cursor, pas décidé arbitrairement ici.

Les contributions de Nora (analyse, hypothèse, recommandation, résultat sourcé) ne deviennent pas des faits prouvés ou des actes humains par capitalisation. Les traces techniques et coûts ne sont pas des acquis métier. Garder les distinctions de provenance et de niveau de preuve.

## 6. Journal : arborescence vivante, connaissance et réutilisation

### 6.1. Arborescence — exigence centrale explicitement réaffirmée par Morris

Le Journal est la représentation thématique de la vie du projet. Nora construit et entretient naturellement une arborescence de **Sujets et Sous-sujets**, selon le sens des échanges et la maturité du projet. Elle doit pouvoir créer un sujet autonome, le rattacher à un parent pertinent, approfondir un thème, réorganiser, renommer, déplacer, regrouper ou séparer lorsque cela apporte de la valeur. Studio maintient des identités et relations cohérentes, empêche les relations invalides et conserve les liens, l'historique, les sources et états d'autorité lors d'une réorganisation. Aucun sujet, sous-sujet ou profondeur artificielle n'est imposé ; la pertinence doit être démontrée sur un scénario qui justifie réellement une hiérarchie.

Le sujet n'est ni un message, ni une tâche, ni un cycle, ni nécessairement une fonctionnalité à développer. Un sujet peut traverser plusieurs cycles. Une information transverse peut être référencée depuis plusieurs sujets sans duplication de sa vérité. Ne pas fabriquer un arbre pour remplir un écran.

Exemple non prescriptif CampusNova :

- Parcours de réservation et responsabilités
  - Confirmation des réservations
  - Disponibilité des salles et des équipements
  - Gestion des prêts et retours
  - Responsabilités et arbitrages
- Accompagnement et déploiement des utilisateurs
  - Formation des utilisateurs
  - Référents locaux
  - Organisation du support

Cet exemple illustre une hiérarchie pertinente possible, pas un arbre réellement observé ni un modèle obligatoire.

### 6.2. Contenu utile d'un sujet

Préserver les composants existants : intitulé, aperçu, synthèse, « Ce qu'on retient », « À éclaircir », échanges de référence, lien au message exact, consultation et action « Poursuivre ce sujet avec Nora ». La capacité doit permettre les sous-sujets et, selon les données utiles, les références aux décisions applicables, documents/version, sources et résultats. Ne pas multiplier les rubriques vides ou inventer de champs métier sans besoin. La structure détaillée de restitution doit respecter les contrats UX et être qualifiée avant modification visible.

- Intitulé compréhensible et distinct ; synthèse courante fidèle, contextualisée, mise à jour quand la matière évolue, sans imposer une synthèse exhaustive à chaque message.
- Acquis utiles et sourcés : faits, règles retenues, contraintes, résultats, hypothèses explicitement qualifiées ; rapprocher l'existant avant ajout, actualiser les informations devenues obsolètes, préserver la version/source/historique.
- Points ouverts : question ou réserve réellement significative, état, contexte, provenance, condition de résolution. Prévoir un intitulé court canonique réutilisable dans le panneau droit, et le détail complet dans le Journal. Le rapprochement sémantique doit éviter les doublons sans fusionner des problèmes distincts.
- Échanges de référence : identité du message, auteur, date, contribution, accès au message exact ; conserver les sources nécessaires lors des transformations de l'arbre. Corriger la restitution de marqueurs Markdown bruts si confirmée, sans modifier le contenu d'origine.
- État : conserver les sujets et points ouverts courants et leur historique selon le contrat existant ; ne pas déduire qu'un sujet est clos du seul fait qu'un cycle se termine ou qu'un point est résolu.
- Ressources : références aux documents et versions, sources Git et résultats réellement connus et autorisés ; pas de duplication du document dans le Journal.

Exemple de consolidation : à Lille, inventaire de 12 ordinateurs, 2 en maintenance et 10 opérationnels ; lors d'un incident donné, 1 déjà prêté et donc 9 mobilisables. Préserver la distinction entre stock, état et disponibilité lors de l'incident, la provenance de chaque constat et l'évolution ; ne pas conserver quatre copies quasi identiques du même acquis ni présenter les 9 comme une vérité permanente.

### 6.3. Cycle de vie des points ouverts

Nora identifie et enrichit une question utile, rapproche les formulations équivalentes, conserve son contexte et peut qualifier sa résolution factuelle à partir d'une source suffisante. Un arbitrage gouverné, une restriction ou une acceptation ne se résout pas par simple inférence : D6 reste propriétaire. Un point résolu ne reste pas indéfiniment dans la vue des points ouverts ; son historique et sa provenance demeurent accessibles selon les contrats. Une réserve incertaine n'est pas déclarée résolue pour nettoyer l'écran.

La vue transverse « Points ouverts » du Journal reste la référence de consultation de toutes les questions significatives encore ouvertes du projet, quel que soit leur sujet/cycle. Le panneau Travail et Trajectoire présentent des sous-ensembles issus de ces mêmes objets, pas de listes autonomes. Aucun score de priorité artificiel.

### 6.4. Réutilisation cognitive et efficacité

Avant un nouveau travail, Nora doit pouvoir identifier les sujets pertinents et retrouver directement leur synthèse, acquis, décisions référencées, questions ouvertes, ressources et échanges d'origine. Elle peut approfondir par lecture ciblée et recherche hybride existante si pertinente ; les résultats de recherche ne sont pas des actes d'autorité. Une synthèse est une aide à la navigation et à la compréhension, pas un substitut à une source exacte lorsqu'une décision ou un résultat l'exige.

Le bénéfice est double : moins d'effort pour le Pilote et meilleure orientation des recherches de Nora. Ne pas injecter tout l'arbre et tous les contenus à chaque appel, ni remplacer une relecture exhaustive du fil par une relecture exhaustive du Journal. Préserver le périmètre du projet, les droits courants, la fraîcheur, les versions et les limites de lecture. En cas d'information manquante ou contradictoire, approfondir de manière ciblée et signaler la réserve.

Pour MaintiPlan T09, le résultat attendu est de retrouver V1, les arbitrages applicables, les sujets utiles, les résultats T08 et références Git exactes, et les questions ouvertes, puis préparer une révision V2 fidèle, sans recommencer l'intégralité de l'investigation T08 si les sources conservées suffisent. T09 reste non envoyé ; ce document n'autorise ni sa génération ni la mutation de MaintiPlan.

## 7. Décisions durables et arbitrages de travail

Morris confirme une gouvernance proportionnée : le Journal Décisions ne doit pas enregistrer tous les « OK », préférences de présentation ou choix locaux. La qualification repose sur la portée, la durée, les conséquences et l'autorité, pas sur les mots employés.

| Nature | Exemple | Traitement |
| --- | --- | --- |
| Préférence ponctuelle | Présenter une réponse sous forme de tableau | Conversation, pas de HumanDecision |
| Arbitrage de travail | Approfondir les habilitations avant les urgences | Sujet/acquis si utile, pas automatiquement D6 |
| Décision structurante durable | Autorité de déplacement d'une intervention confirmée ; politique cognitive option C | D6 si acte humain clair, auteur, objet et portée établis ; D4 référence la décision |
| GO transition | Ouvrir/clore un cycle identifié | D6 autorise et D5 réalise/constate l'effet |
| Autorisation opérationnelle | Acte « Exécuter » sur contrat inspecté et applicable | D6/D7 selon contrat ; jamais déduite d'un choix d'architecture |
| Restriction, révocation, acceptation | Suspendre un effet ou retenir un résultat avec réserves | D6 selon portée et autorité ; état historique et actuel distincts |

Une décision structurante doit pouvoir être identifiée sans demande explicite « formalise cette décision » si l'acte humain est suffisamment clair. Ne pas multiplier les confirmations rituelles ni convertir les recommandations Nora en décisions. La structure de la fiche existante (choix retenu, justification, autorité/portée, histoire, cheminement et sources) est à préserver.

Exemples T07, qualification à vérifier contre les expressions originales : autorité de déplacement, habilitation bloquante et conflit bloquant sont de bons cas de décisions durables si leur portée est établie ; compte rendu simple peut être une règle initiale ou une orientation de travail selon sa portée ; les cas nécessitant validation supplémentaire restent ouverts. Le rapport montre 4 acquis et une seule HumanDecision OPEN_CYCLE ; ne pas transformer ces acquis en décisions rétroactivement par backfill ou déduction. Une nouvelle preuve d'autorité nécessite la source réelle et les contrôles D6.

Compter les décisions actuellement applicables à partir des états et de la portée réelle D6 ; distinguer une décision historique, remplacée/révoquée et une autorisation consommée. Ne jamais en déduire un droit de rejouer un effet.

## 8. Trajectoire et projections des surfaces

### 8.1. Trajectoire vivante

La trajectoire n'est pas un plan statique généré à la création. Nora comprend les évolutions sémantiques de l'orientation du projet et mobilise D5 lorsqu'une projection doit évoluer. Exemple : après conception fonctionnelle, « préparons plutôt un atelier Figma avant les tests » peut signifier une étape de conception UX/UI avant QA ; qualifier l'intention réelle et le type canonique disponible, sans mapper mécaniquement le mot Figma à un cycle. Une simple possibilité reste envisagée ; une orientation effectivement retenue par le Pilote permet la révision admissible. Préserver les cycles passés et leurs décisions, et ne jamais ouvrir ou clore un cycle sans GO recevable. Aucun deuxième cycle actif ni CKI principal concurrent.

La finalité du cycle doit être contextualisée dès que suffisamment intelligible : pour MaintiPlan, définir le fonctionnement de la planification à la clôture en tenant compte des habilitations, responsabilités et conflits. Ne pas afficher un enum brut ou « Finalité métier à préciser » lorsqu'une finalité réelle existe. Les acquis et questions du cycle sont des références pertinentes aux objets D4 et D6, pas un nouveau registre par cycle. L'absence réelle de méthode retenue est un état valable.

### 8.2. Responsabilités des surfaces

| Surface | Rôle | Données et interactions |
| --- | --- | --- |
| Travail | Interaction et production principale avec Nora | Fil unique ; activité fidèle ; repères contextuels ; cycle courant et parcours ; accès récents ; index compact de points ouverts |
| Projet | Tableau de bord synthétique et état réel | Indicateurs calculés par Studio sur les domaines propriétaires ; contexte et état courant ; liens utiles |
| Journal | Mémoire thématique et accès à la gouvernance | Arborescence sujets/sous-sujets, synthèses, acquis, questions, sources, historique, reprise ; onglet Décisions ; vue transverse points ouverts |
| Trajectoire | Parcours évolutif et étapes du projet | Projection envisagée/retenue, cycle actif, finalité, guidance CKI et méthode réelle, liens vers acquis et points ouverts pertinents |

Toutes les surfaces concernées sont actualisées dès qu'une évolution pertinente a été enregistrée, sans action administrative du Pilote. Les états vides, indisponibles, partiels ou en cours doivent être honnêtes ; ne pas assimiler une absence de données à un résultat exhaustif. Les permissions courantes restent contrôlées dans chaque accès. Pas de nouvel appel IA nécessaire pour recalculer une projection déterministe.

### 8.3. Compteur documentaire — arbitrage Morris

Tout document présent dans la bibliothèque du projet doit être compté dans les documents de travail du projet, y compris un document déjà sauvegardé et disponible. L'unité est l'identité documentaire accessible, pas chaque révision. MaintiPlan V1 doit donc compter pour 1 même avec le statut AVAILABLE ; le filtre actuel SAVING n'est pas l'oracle voulu. Libellé recommandé « Documents du projet » plutôt que « Documents en cours » pour refléter cette population ; formulation finale à synchroniser avec les surfaces concernées. Aucun nouveau cycle de vie, statut de finalisation ou mécanisme de validation documentaire n'est induit. Le statut technique de sauvegarde reste distinct. Compteurs sujets et décisions issus de D4/D6, sans sollicitation cognitive.

## 9. Panneau droit Travail — contrat fonctionnel et référence Figma

Morris valide explicitement le panneau proposé le 27/11, avec une modification : **cinq éléments récents, pas trois**, aussi bien dans la représentation nominale que dans la règle applicative.

### 9.1. Contenu

- En bref : identité et état du projet ; cycle actif réel et trajectoire envisagée/retenue selon D5. Conserver cette information rapide.
- Repères : uniquement « Éléments récents ». Retirer le bloc statique Continuité (son texte décrit une capacité permanente et ne constitue pas un repère évolutif), les contrats techniques permanents et le dossier du projet redondant avec la navigation. Les contrats et documents restent accessibles selon leurs parcours propriétaires ; aucune suppression fonctionnelle.
- Points à clarifier : index compact des points ouverts issus du Journal, avec intitulés courts, liens vers le point/sujet et accès « Voir tous les points ouverts ». Le panneau ne reproduit pas les descriptions longues. La maquette validée est dimensionnée pour cinq ; afficher au maximum cinq points ouverts, sans priorité inventée, en privilégiant la date de création/actualisation significative (modalité de tri à vérifier avec les données existantes). Moins si la population est inférieure ; état vide réel.

### 9.2. Éléments récents — règle des cinq

Population : objets effectivement consultés par le Pilote dans ce projet : document Nora (version identifiable), fichier/document/source Git, exécution, résultat/rapport et preuve, y compris une ressource ouverte depuis un lien de Nora dans la visionneuse. Ce sont cinq **liens rapides multi-types**, non cinq documents Nora. Une mention, citation ou lecture par Nora seule ne constitue pas une consultation du Pilote. Une consultation effective met à jour la récence ; ordonner par dernière consultation décroissante avec traitement déterministe des égalités ; dédupliquer par identité canonique adaptée au type et conserver la référence précise de l'objet/version consulté. Le choix d'une clé technique et la durée de conservation doivent être qualifiés selon le contrat existant, sans nouveau registre de connaissance.

Chaque ligne : icône de type, titre compact lisible, type/source ou version utile, accès direct à l'objet selon le parcours de consultation autorisé. Respecter le contrat de visionneuse (50/50, agrandissement, retour, conservation de la position de lecture) et le comportement de la surface propriétaire. Ne pas déclencher une exécution, modifier un contrat ou contourner des permissions au clic. Filtrer les ressources devenues inaccessibles ; ne pas exposer leur contenu. En cas d'accès indisponible, signaler honnêtement la limite selon le contrat existant. La liste n'est ni un historique exhaustif, ni un menu de navigation, ni une projection générée par IA. Au plus 5, aucun remplissage fictif. La persistance de la récence et le rattachement au Pilote/projet doivent permettre la reprise de session, sans fusion interprojets.

### 9.3. Référence visuelle effectivement actualisée

Fichier Figma `itgvCulInEnFY6DvgIegvP`, page 05 `700:38`. 20 panneaux existants modifiés directement, IDs des écrans et panneaux conservés, dimensions du panneau 367 × 832, contenu actualisé 323 × 585, position locale (22,214), fin du contenu à 799 < 832. Police Inter vérifiée. Composants réutilisables [nominal 1405:610](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1405-610) et [initial 1405:696](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1405-696) créés sur la même page ; 19 instances nominales avec cinq récents et cinq points ; une instance initiale sans fausses données. Palette locale existante réutilisée, icônes de type. Rendu du panneau nominal contrôlé par capture Figma ; pas de preuve navigateur ou F2 runtime.

| Écran | Frame | Panneau |
| --- | --- | --- |
| 05.01 | 700:39 | 702:123 |
| 05.02 | 701:62 | 703:123 |
| 05.03 | 701:105 | 703:167 |
| 05.04 | 701:148 | 703:211 |
| 05.05 | 701:191 | 703:255 |
| 05.06 | 701:234 | 703:299 |
| 05.07 | 701:277 | 703:343 |
| 05.08 | 701:320 | 703:387 |
| 05.15 | 708:98 | 708:165 |
| 05.16 | 708:199 | 708:266 |
| 05.17 (initial, Projet Horizon) | 1036:114 | 1036:183 |
| 05.18 | 1382:156 | 1382:223 |
| 05.19 | 1382:243 | 1382:310 |
| 05.20 | 1382:330 | 1382:397 |
| 05.21 | 1382:417 | 1382:480 |
| 05.22 | 1382:500 | 1382:567 |
| 05.23 | 1382:587 | 1382:650 |
| 05.24 | 1382:670 | 1382:737 |
| 05.25 | 1382:757 | 1382:824 |
| 05.26 | 1382:844 | 1382:907 |

Les variantes sans panneau (05.09–14 et 05.27–30) et les planches de dictée n'ont pas été modifiées. Les exemples CampusFlow (documents, source, exécution, résultat, points) sont des données de maquette, pas des consultations réellement constatées. La variante initiale est une déclinaison technique honnête du principe validé. Le contrat visuel de cette modification ne requalifie pas les anciens états audio ni l'ensemble F1/F2. La page 12 n'a pas été modifiée : vérifier cohérence éventuelle lors de l'intégration sans élargir automatiquement le mandat.

## 10. Contrat d'acceptation du futur correctif

Ces oracles candidats complètent les PF et CA existants, sans les remplacer. Les noms ci-dessous désignent des scénarios, pas des composants ou nouveaux identifiants normatifs.

| Scénario | Oracle utilisateur | Preuve technique et cognitive attendue |
| --- | --- | --- |
| Exploration libre puis création projet | Thèmes pertinents émergent naturellement ; continuité sas→projet | Identité, sources, rattachement, aucune duplication ni mutation hors autorité |
| Approfondissement d'un sujet complexe | Des sous-sujets apparaissent avec une hiérarchie pertinente et navigable | Arbre persistant parent/enfant, liens corrects et test de reprise ; pas seulement deux sujets autonomes |
| Réorganisation | Nora rapproche, déplace, renomme, regroupe/sépare si utile | Identités et provenance conservées ; absence de cycles invalides, doublons et perte de liens |
| Apport du Pilote puis investigation Nora | Informations et résultats utiles capitalisés, hypothèses et recommandations distinguées | Corrélation message/travail/source/mutation ; effets réellement persistés ; pas de faux fait ou décision |
| Correction ou nouvel élément sur un acquis | Synthèse à jour et état courant distinct de l'historique | Version, provenance, contradiction ou obsolescence traitées sans effacement destructif |
| Résolution de question | Point ouvert actualisé/résolu et retiré des listes ouvertes si justifié | Source suffisante, état propriétaire, vues synchronisées ; négatif réserve gouvernée non levée |
| Arbitrage local vs durable | Local conservé si utile dans sujet ; durable reconnu dans D6 sans formule administrative | Acte humain réel, portée, autorité et provenance ; négatifs recommandation Nora, citation hostile, « OK » ambigu |
| Demande combinée de type T05/T06 | Toutes les intentions utiles prises en compte ; résultat de chaque effet honnête | Qualification et orchestration corrélées, idempotence, autorité D5/D6, aucune perte de sibling |
| Réorientation sémantique atelier Figma | Parcours actualisé selon caractère envisagé/retenu ; pas d'ouverture implicite | D5 persistant et projection cohérente ; négatifs simple mention Figma et deuxième cycle actif |
| Finalité d'un cycle | Finalité contextualisée et libellé métier ; acquis/points pertinents | État D5, liens D4, pas de copie parallèle ; absence de méthode honnête |
| Compteurs Projet | Documents, sujets, décisions reflètent les objets accessibles | PG→API→DOM sur même population ; V1 AVAILABLE compte 1, révision V2 ne compte pas 2, état D6 exact |
| Consultations multitypes | 5 récents max, dernier consulté en tête ; répétition sans doublon | 6 consultations, revisite, accès visionneuse, reprise de session, droits retirés, projet différent, état vide |
| Points du panneau | 5 titres compacts max, détail accessible, résolution répercutée | Références mêmes points que Journal, actualisation réelle, navigation exacte, sans priorité fictive |
| Navigation et interruption | Travail/Projet/Journal/Trajectoire cohérents, reprise sans manipulation | Persistance, fraîcheur, reprise et idempotence après erreur ; pas de faux succès |
| Réutilisation après longue conversation | Nora trouve le bon sujet, ses acquis, sources et messages exacts, sans reconstruire systématiquement le fil | Traces de lectures, références versions, volume de contexte, usage et qualité comparables ; lecture complémentaire ciblée si nécessaire |
| Révision V1→V2 de MaintiPlan (T09 futur) | Réemploi des acquis et de T08, V1 préservée, nouvelle version fidèle | Références et changements réels ; éviter relecture complète injustifiée ; uniquement sous GO recette ultérieur |
| Échange sans intérêt durable | Réponse naturelle, sans bruit de capitalisation | Aucune mutation artificielle, aucune classification indépendante systématique |
| Isolation et échec | Pas de fuite interprojet, connaissance ou effet non persisté non annoncé comme acquis | Tests négatifs droits/référence obsolète, concurrence, reprise, absence d'autorité |

Preuves graduées : tests déterministes des invariants et projections, parcours navigateur sur candidat DEV, puis preuve LIVE/REAL bornée de qualification sémantique, hiérarchie et réutilisation sous mandat spécifique. Une fixture ou un arbre injecté manuellement ne démontre pas l'organisation autonome par Nora. Montrer notamment un parent avec au moins un sous-sujet réellement pertinent généré dans un scénario naturel, puis son enrichissement/réorganisation et son exploitation lors d'une demande ultérieure. Le seuil ne prescrit pas un nombre arbitraire de sujets pour chaque projet.

Mesurer les requêtes et lectures réellement effectuées, le contexte utile, les répétitions, les allocations modèle/effort, les usages observables et la latence de bout en bout. Comparer à un corpus et une qualité équivalents, avec limites explicites ; ne pas promettre un pourcentage d'économie ni déduire que les 909844 tokens T08 étaient tous évitables. La performance ne justifie pas une perte de connaissances, la baisse de qualité ou la fabrication de preuves.

## 11. Intégration dans le macro-lot correctif

Le 27/11, Morris a retenu l'option C (politique multi-modèles gouvernée par environnement, qualité/calibration avant admission RECETTE) et un seul macro-lot intégré couvrant les 17 remontées MaintiPlan. Les axes internes sont conduite cognitive/observabilité, continuité, audio/compositeur, expérience utilisateur. Ce document précise le résultat de continuité et la partie du panneau droit ; il ne constitue pas un contrat d'exécution Cursor et ne clôt aucun MP.

| Ensemble de responsabilité (organisation de travail, pas nom de composant) | Couverture / dépendances |
| --- | --- |
| Qualification sémantique et mobilisation | MP-09/10, dépend du conducteur D3 et des effets D4/D5/D6 ; traiter input et résultat, cas multi-intentions |
| Arborescence, consolidation, provenance et résolution | MP-03/10 ; préserver mécanismes D4 et démontrer pertinence, profondeur utile et reprise |
| Décisions et trajectoire | MP-09/12/13 ; D5/D6, frontière arbitrage local/durable, finalité, révision gouvernée |
| Exploitation cognitive | MP-10/14/15/16 ; continuité D3/D4, recherche et observabilité sans inflation du contexte |
| Projections et panneau droit | MP-03/08/12/13 ; cohérence des quatre surfaces, ressources récentes et points courts, Figma §9 |
| Interface avec les autres axes | MP-04/05/11/17 UX et shell, audio MP-01/02/06/07 : préserver contrats, intégration et non-régression |

Cursor devra disposer d'une matrice de couverture des 17 MP, d'un intégrateur, de dépendances et d'oracles par capacité. Poursuivre les diagnostics résiduels dans le macro-lot avant modification concernée, notamment cause racine T05, finalisation/attribution, persistance des sujets et points, provenance des synthèses absentes, réutilisation réelle et compteurs. Ne pas confondre problème d'alimentation, problème de projection et évolution UX. Examiner code/architecture/DB/observabilité existants, blast radius API/données/autorité/UX/sécurité/consommation/reprise/tests, puis aligner les sources propriétaires et le registre dans le même lot ; pas de micro-cycle documentaire ni dette sans exit. Une éventuelle migration, nouvelle politique de conservation ou modification structurante exige arbitrage et garde-fous adaptés, non présumés ici.

Trajectoire : contrat correctif à préparer après les arbitrages de conception restants ; GO distinct construction DEV, preuves et revue, LIVE borné si autorisé, nouveau candidat sous ENV-01 et GO cutover distinct, rejeu ciblé des 17 MP, reprise T09 et poursuite jusqu'au seuil de préparation de réalisation, puis décision Livraison 1. Aucune Livraison 2 engagée dans cette campagne.

## 12. Statut de sortie et réserves

- Orientations validées : double finalité ; autonomie sélective ; qualification sémantique des apports du Pilote et de Nora ; arborescence sujets/sous-sujets indispensable ; réutilisation cognitive ; frontières Nora/Studio/Pilote ; continuité des surfaces ; trajectoire vivante ; population du compteur documentaire ; panneau droit et règle cinq éléments récents.
- Précisions candidates de réalisation : modalités techniques d'identité/dédoublonnage, reprise et fraîcheur, tri stable et conservation des consultations, formulation finale des libellés, classification effective des actes T07, oracles de preuve et stratégie d'intégration. Elles sont à vérifier dans les contrats existants et le candidat, et à arbitrer si elles modifient une responsabilité ou une politique. Aucun statut métier supplémentaire n'est décidé.
- Réserves : hiérarchie et réutilisation cognitive NON PROUVÉES ; CampusNova preuve visuelle partielle uniquement ; MaintiPlan capitalisation partielle et causes résiduelles ; permissions fournisseur et efficacité comparative à qualifier ; Figma modifié et rendu nominal vérifié, pas de qualification runtime/F2 ni d'approbation générale de la page. Local Git/runtime NON OBSERVÉS directement.
- Contribution bornée : un fichier documentaire nouveau, branche candidate seulement ; aucun document propriétaire existant réécrit, aucun code/runtime/DB/CI, aucune PR/merge, aucune mutation RECETTE ni adoption. Synchronisation des contrats propriétaires et Roadmap dans le futur lot sous mandat adapté.

**R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED / MAINTIPLAN SUSPENDED AFTER T08 / T09 NOT SENT / 17 MP OPEN / R6 NOT STARTED / NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED.**
