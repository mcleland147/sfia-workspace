# SFIA Studio Next — Cahier de recette métier intégrée après correctif ML5
## Nouvelle campagne de bout en bout — Equipéo (nom de travail proposé)

| Champ | Valeur |
| --- | --- |
| Date / version | 27 novembre 2026 — v0.1 |
| Nature | Cahier opérationnel D1, non normatif, campagne à exécuter ; aucun résultat anticipé |
| Décision Morris | Nouvelle recette depuis un projet neuf, sans reprise ni modification de MaintiPlan ; publication documentaire demandée explicitement le 27/11 |
| Autorités | Morris = Pilote et verdict métier ; ChatGPT = accompagnement, analyse, tenue du PV ; Cursor = diagnostic technique sous mandat SFIA v2.6 |
| Programme | R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED / 17 MP OPEN RECETTE / R6 NOT STARTED / NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED |
| Candidat produit | 0ae9e1f7aaee3658eb3e9a135523e83a72631b31 |
| Tree / BUILD | 842537274c3ad0b2f672c9ebe2e9e0f54c55d968 / p0S18hfVdGrMjGeNMGlbV |
| Lane | RECETTE http://127.0.0.1:3200 ; PG :5434 sfia_next_recette_ml4 ; schéma 027 |
| Base main | 997897fd7cf914771e7d08e8030dc7123fab7d25 |
| Statut initial | RECETTE AVAILABLE — TECHNICAL SMOKE PASS rapporté ; READY WITH RESERVES ; aucune preuve métier sur le nouveau projet |
| Nouveau projet | Nom proposé Equipéo ; unicité, ID et identité Pilote à constater lors de l'exécution ; aucun projet créé par ce document |
| Git documentaire | Branche docs/next-openai-studio-convergence-20261126, base b4f43925def4ed5fe91b11ade372cc7f0f77a63c ; non mergée |

## 1. Pourquoi cette campagne

Studio Next est reconstruit autour de la relation Pilote–Nora : un cockpit unique, compréhension sémantique du besoin, mobilisation gouvernée des capacités, mémoire de projet et continuité entre cadrage, conception, décision et réalisation. Nora comprend, conseille, coordonne et interprète ; Studio contrôle les droits, états, effets et preuves ; le Pilote arbitre et décide. Une sortie IA n'est pas une HumanDecision. D3 reste le conducteur unique ; D4/D5/D6 et les autres propriétaires conservent leurs objets. PostgreSQL est la référence métier ; aucun second moteur ou registre concurrent n'est attendu.

### 1.1 Convergence OpenAI–Studio (26–27 novembre)
Orientation native d'abord si équivalence/supériorité démontrée, pas de remplacement par effet de mode ni de baisse de qualité pour réduire les coûts. Trois macro-lots internes :
- Socle fournisseur : Frontier, admission, allocation modèle/effort, observations, FinOps local et collecteur Admin isolé ; D3 conservé. Admin et WEB LIVE différés.
- Cognition spécialisée : Responses/qualification sémantique conservées, Decisions bornées sans autorité D6, recherche hybride lexicale + embeddings dérivés PostgreSQL (027), droits/version/provenance, Vision ponctuelle. Pas de Vector Store permanent concurrent.
- Audio : dictée Realtime FR avec capture navigateur et transport contrôlé Studio ; brouillon éditable, envoi volontaire, pas de clé longue navigateur, pas de voix bidirectionnelle. Intégration des résiduels du deuxième lot.

Première mise à disposition sur e8e6e069 / BUILD rpEczSp61evIZ7d6fnIWR. MaintiPlan a exercé T01–T08 : compréhension métier et recommandations jugées solides, création et fil conservés, ouverture simple du cycle, V1 disponible, investigation Git aboutie et navigation pendant travail. Mais 17 MP ouverts, notamment dictée réelle échouée, multi-intentions non appliquées, Journal vide, projections, UX et allocation/FinOps. T08 : 909844 tokens cumulés (884132 entrée, 25712 sortie, cache 514456 inclus dans entrée), 40 requêtes/observations non nulles rapportées (pas nécessairement 40 HTTP indépendamment prouvés), 6 segments Sol medium observés, ~13m33 mesurées / ~15 min perçues, estimation 1,05 USD, pas coût facturé. T09 révision V2 non envoyé. MaintiPlan reste le témoin historique et ne doit pas être altéré par cette campagne.

### 1.2 Macro-lot correctif intégré E1–E5
- E1 : capitalisation sélective des apports du Pilote et résultats de Nora, sujets/sous-sujets, réorganisation et consolidation, points ouverts, décisions et trajectoire, réutilisation et projections Travail/Projet/Journal/Trajectoire. R-REC-E1-01/02 acceptées comme reports de preuve naturelle.
- E2 : option C allocation multi-modèles gouvernée par environnement, admission versionnée ; option B conduite uniforme des intentions D4/D5/D6 par dépendances et résultats propriétaires dans D3, lecture/reprise, UNKNOWN honnête, recherche hybride et cohérence FinOps. Pas de moteur générique ajouté.
- E3 : lisibilité, activité, restitution métier, cinq récents multitypes, points ouverts et pied du rail global, accès direct et versions.
- E4 : compositeur partagé sas/projet, croissance et brouillons isolés, handshake audio, onde issue du signal, annulation/finalisation, erreurs/usage.
- E5 : qualification intégrée (26 sous-ensembles, 18 oracles, 25 parcours, 17 MP). 1531 unit PASS, 8 PG dictée et 13 tests E2 mixtes, 3 browser E5 + 5 antérieurs rapportés. Dernier cutover : 33 unit et 17 PG PASS, lint/build exit 0 rapportés, commit final et smoke technique. Ces résultats ne sont pas une preuve d'autonomie naturelle ni d'usage fournisseur réel.

Candidat actuel publié, RECETTE basculée sans CI/PR/merge ni émission LIVE rapportée. MaintiPlan préservé (1 conversation, 15 messages, 1 document, 1 décision humaine, T09=0). Ancien build conservé pour rollback, sauvegarde dump lisible rapportée, pas de restauration indépendante constatée. Le nouveau projet est un choix de recette du Pilote, pas un remplacement de MaintiPlan.

## 2. Sources de vérité et préconditions

Toutes les sources documentaires historiques ci-dessous sont à lire à b4f43925def4ed5fe91b11ade372cc7f0f77a63c, sauf refs précisées. Elles sont candidates et non mergées ; le code produit est au SHA 0ae9e1f7. Les checkpoints récents du suivi et le manifeste servi priment sur les mentions anciennes dans la Roadmap, sans modifier celle-ci.

- [SEF v0.2](../governance/SEF.md), [Roadmap](../governance/roadmap.md), [vision fondatrice et trois schémas](../cadrage/vision-cible/README.md), [SEM](../governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md), [R4/DATA-01](../governance/decisions/2026-11-04-r4-architecture-exit.md), [P1–P3/F1/F2](../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md).
- [ENV-01](https://github.com/mcleland147/sfia-workspace/blob/997897fd7cf914771e7d08e8030dc7123fab7d25/projects/sfia-studio-next/governance/environnements-recette-et-promotions.md) et [versioning](https://github.com/mcleland147/sfia-workspace/blob/997897fd7cf914771e7d08e8030dc7123fab7d25/projects/sfia-studio-next/governance/product-versioning.md) sur main.
- [Cadrage convergence](convergence-openai-studio/cadrage.md), [bilan intégré](convergence-openai-studio/bilan-integre-20261127.md), [CONV fonctionnel](convergence-openai-studio/contrat-fonctionnel.md), [CONV technique](convergence-openai-studio/contrat-technique.md), [cahier historique R01–08](cahier-recette-integree-ml5-convergence-20261127.md).
- [PV MaintiPlan T01–08 et 17 MP](recette-utilisateur-ml5-maintiplan-20261127.md), [suivi correctif v0.19](suivi-macro-lot-correctif-continuite-fiabilite-ml5.md) §§3–6, 11, 17–27, [contrat continuité §9–10](../conception-fonctionnelle/continuite-cognitive-et-fonctionnelle-du-projet.md), [contrat acceptation CA](contrat-acceptation-cognition-et-realisation-gouvernee.md).
- [Candidat produit exact](https://github.com/mcleland147/sfia-workspace/tree/0ae9e1f7aaee3658eb3e9a135523e83a72631b31/projects/sfia-studio-next), [Handoff cutover final](https://github.com/mcleland147/sfia-workspace/blob/c74f99bb382939e12e79fb429cf1a6407bbc37f1/sfia-review-handoff/latest-chatgpt-review.md) §§9–14 (manifest réellement servi), [plan E5 LIVE](https://github.com/mcleland147/sfia-workspace/blob/0ae9e1f7aaee3658eb3e9a135523e83a72631b31/projects/sfia-studio-next/construction/evidence/ml5-e5-20261127/plan-rejeu-recette-live.md), [plan audio historique](convergence-openai-studio/ml3-audio-live-proof-plan-20261127.md).
- Figma page 05 : [Travail 700:39](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=700-39), [panneau nominal 1405:610](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1405-610), [initial 1405:696](https://www.figma.com/design/itgvCulInEnFY6DvgIegvP?node-id=1405-696), dictée 05.18–30, page 13 rail. Les captures UX ne prouvent pas F2 si viewport/état non appariés.

### G0 — entrée de recette (à constater avant émission)
Vérifier SHA/BUILD réellement servi, lane et identité, aucun fixture/auto-session DEV, DB/volume/sessions isolés, rollback, état et historique MaintiPlan inchangés. Confirmer configuration et frontières d'émission effectives avec preuves non sensibles. Ne pas déduire du HTML 200 une authentification ou une disponibilité fournisseur. Pas de donnée réelle confidentielle dans le corpus. Aucun changement de code/config sans GO.

**GO LIVE distinct de la publication de ce cahier.** Confirmer avec Morris avant premier envoi à Nora ou ouverture de micro : opérations admises (Responses et dépendances cognitives nécessaires, embeddings/Decisions/Vision seulement si admission et données autorisées, lecture Git sous droit, Realtime), projet/lane, enveloppe et conditions d'arrêt. Le précédent plan audio de 6 sessions / 8 minutes / estimation historique 0,14 USD avait RECETTE en STOP ; il faut le requalifier explicitement pour cette lane. Proposition de plafond conservateur : au plus 6 sessions et 8 minutes cumulées pour les deux surfaces ; confirmer tarif/config et budget avant émission, arrêt immédiat si erreur auth, retour silencieux, capture persistante ou auto-send. Pas d'essais répétés à l'aveugle. Pour cognition, commencer par un tour à la fois, relever coût estimé et tokens après chaque tour ; faire fixer une enveloppe cumulée par Morris, avec limites fournisseur réellement appliquées et arrêt avant nouveau tour en cas d'inconnu ou dépassement. Préparer l'investigation T08 avec plafond distinct adapté à la mission, pas de répétition automatique. Aucun budget monétaire présenté comme plafond technique garanti sans contrôle effectif. Option C : vérifier admission effective versionnée qualified-v0.x ; pas d'activation implicite, pas de changement de modèle ou d'effort pour forcer un test. WEB LIVE OFF, Admin OFF ; aucun Cursor REAL, écriture Git externe, modèles.list, indexation globale, accès non autorisé ou nouvelle activation. Les lectures Git de recette sont bornées et en lecture seule.

Réserves avant G0 : R-E5-PG-HIST (suite PG globale non rejouée), R-E5-TSC-TESTS, MP06 LIVE, F2 global non prouvé, org/projet OpenAI non vérifiés, localhost trust, Admin OFF. Revue §27 : allowlists récents améliorées mais notePilotConsultation peut réinjecter liste brute ; ACL Git fichier et preuve individuelle non démontrées. Contrôler cette frontière ciblée avant manipulation de données sensibles ou révocation ; rester sur corpus synthétique et ressources autorisées, aucun test de fuite sur données d'autrui. Si défaut d'autorité/droits/intégrité confirmé, STOP et diagnostic DEV, pas de report comme réserve naturelle. Acceptation explicite par Morris des réserves admissibles pour la recette ; pas de clôture par défaut.

## 3. Fil rouge métier — Equipéo (proposition adaptable par le Pilote)

Entreprise fictive de contrôle et maintenance d'équipements techniques : deux sites, douze agents, une responsable d'exploitation. Des inspections périodiques et interventions urgentes sont planifiées dans des fichiers partagés ; changements mal transmis, habilitations parfois non vérifiées et suivi de réalisation incertain. Première version : visibilité fiable des affectations, dates, statuts et preuves d'intervention sur un site pilote. Pas de gestion des stocks, facturation ou géolocalisation. Pas de donnée personnelle réelle. Le choix de l'outil reste ouvert ; ne pas imposer une solution avant le cadrage.

Incidents et évolutions à dévoiler progressivement : déplacement d'une inspection pour urgence, remplaçant non habilité, compte rendu non saisi ; différence entre intervention planifiée/réalisée ; arbitrage sur l'autorité de réaffectation ; correction ultérieure d'une hypothèse de périmètre ; besoin d'historique et d'une validation métier avant conception technique. L'intérêt est de donner à Nora une matière comparable à MaintiPlan, mais pas de copier ses réponses. Le nom est modifiable avant création si déjà utilisé. Ne jamais ouvrir MaintiPlan pour poursuivre ce nouveau travail.

## 4. Mode opératoire : un tour, une observation, une décision

Les étapes R00 puis T01–T13 sont des identifiants de campagne, pas des messages système ni des commandes à Nora. Les formulations ci-dessous sont des exemples métier à adapter à la réponse précédente. Ne transmettre à Nora que la demande métier du tour courant, jamais les oracles, le suivi, les MP, les prompts de recette, les identifiants internes ou les résultats attendus. Ne pas alimenter manuellement le Journal pour faire apparaître la preuve. Laisser Nora choisir la profondeur, les sujets et les capacités pertinentes. Ne pas imposer de nombre de sujets ou une alternance Luna/Terra/Sol. Une recommandation pertinente peut être différente de la proposition initiale.

Après chaque tour, Morris partage texte/captures, temps et constat ; ChatGPT distingue qualité cognitive, effet réel, UX et mesures observées. Vérifier les surfaces utiles au bon moment (pas quatre captures systématiques par message). Les preuves serveur ne sont requises que pour trancher un état durable, une consommation, une erreur ou une ambiguïté ; Cursor peut lire localement sous mandat borné sans nouvelle émission ni mutation. Les étapes non exécutées restent NOT RUN. Un défaut non bloquant peut être tracé puis la campagne poursuivre si Morris l'autorise. STOP sur fuite, effet non autorisé, perte de données/brouillon grave, duplication, candidat/lane incorrect, plafond atteint, échec LIVE empêchant la suite ; diagnostiquer sans modifier RECETTE. Toute correction produit en DEV sous mandat, nouvelle preuve et nouveau SHA/cutover sous GO.

## 5. Scénarios exécutables

### R00 — contrôles non émissifs et état initial
Action : ouvrir RECETTE, vérifier identité/BUILD, portefeuille, paramètres/consommation, nouvelle préparation ; vérifier que le sas n'a pas déjà un projet associé. Ne pas envoyer de message avant G0. Relever état du compositeur, micro, liste des préparations, rail et absence d'objets fictifs. Vérifier largeur/hauteur réduite si utile (1280×720) et navigation réelle. Attendu : identité correcte, pas de mutation métier par consultation, micro accessible si admis, aucune donnée d'un autre projet ; paramètres accessibles. MP01/02/17 ; ENV, P1/P3. Preuves : capture état initial et identités non sensibles ; verdict G0 par Morris.

### T01 — exprimer le besoin librement dans le sas
Proposition à Nora : « J'aimerais réfléchir à une application pour organiser les inspections et les interventions sur des équipements techniques. Aujourd'hui on utilise surtout des fichiers partagés et des mails, et on perd parfois la trace des changements de planning et de ce qui a réellement été fait. Je n'ai pas encore arrêté la solution. Comment aborderais-tu le sujet ? »
Action : sous GO audio, dicter tout ou partie en français (sans données réelles), observer connexion/silence/parole, afficher/masquer transcription si disponible, arrêter, corriger une phrase ; vérifier que rien n'est envoyé avant clic explicite. Si échec, conserver le brouillon, tracer erreur et décider du STOP ou poursuite clavier avec réserve. Envoyer une seule fois après choix du Pilote.
Attendus : écoute réelle, texte fidèle et éditable, aucune création projet ou D3 avant envoi ; compréhension de la problématique, questions utiles, hypothèses séparées, pas de solution imposée. Observer durée d'ouverture, fin de dictée, éventuel coût audio séparé du travail cognitif. MP01/02/05/06/07/11/15/16.

### T02 — apporter le cas concret et préparer le projet
Proposition : « Nous avons douze agents sur deux sites. La semaine dernière, une inspection a été décalée parce qu'un agent a été envoyé sur une urgence. Son remplaçant n'avait pas l'habilitation requise et personne n'a mis à jour le planning. On a découvert ensuite que l'inspection n'avait pas été faite. Je veux d'abord un outil simple sur un site pilote. On pourrait appeler ce projet Equipéo. Qu'est-ce qu'il faut encore clarifier ? »
Action : rédiger un brouillon long, vérifier croissance et scroll, navigation/reprise de préparation avant envoi si possible. Envoyer. Attendus : aperçu enrichi, questions restantes identifiables, cadrage raisonnable, pas de création anticipée, reprise du même sas. Ne pas exiger une question artificielle si Nora dispose déjà des éléments. MP02/03/05/10.

### T03 — créer explicitement le projet
Action : cliquer Créer le projet après avoir jugé le cadrage suffisant. Observer animation réelle, phases et arrêt terminal. Relever ID projet et conversation si disponibles. Inspecter Travail/Projet/Journal/Trajectoire (premier état). Attendus : un seul projet, fil et matière du sas conservés, identité correcte, trajectoire proposée contextualisée, pas de cycle actif sans autorité, pas de sujets fictifs. Distinguer proposition vs trajectoire retenue. MP03/04/05/10/12/13/17. **G1 :** projet et continuité initiale valides ; pas de poursuite si création dupliquée ou mauvais projet.

### T04 — clarifier la trajectoire, dictée dans Travail et échange léger
Proposition : « Avant de démarrer, je voudrais comprendre la différence entre vérifier nos règles de fonctionnement et recetter une application déjà construite. Comment organiserais-tu la suite pour qu'on puisse avancer jusqu'à la réalisation ? »
Action : dictée dans Travail sous même enveloppe ; effectuer aussi un essai d'annulation avant envoi si utile (pas une session supplémentaire obligatoire). Observer onde seulement après écoute, texte provisoire/final, absence de retour silencieux, brouillon préservé, un envoi volontaire. Une courte question de clarification ou remerciement sans apport durable peut suivre si pertinent : vérifier absence de bruit de capitalisation, pas de cycle créé. MP05/06/07/10/11/12/16. **G2 audio :** MP06/07 évalués sur les deux surfaces ou PARTIAL ; si échec, diagnostic et arbitrage, pas de répétition incontrôlée.

### T05 — demande combinée : retenir le cycle et travailler
Seulement si Nora a proposé un cycle pertinent. Proposition : « D'accord pour commencer par [cycle effectivement proposé]. On retient cette approche et on ouvre ce cycle. J'aimerais en même temps qu'on définisse le parcours d'une inspection, de sa planification jusqu'au compte rendu, y compris les urgences et le changement d'agent. »
Attendus : reconnaissance de l'acte humain, effets D5/D6 effectivement réalisés sous autorité, travail métier associé, pas de second GO imposé si le premier suffit, résultat honnête de chaque intention, pas de deuxième cycle actif. Vérifier Travail/Trajectoire/Journal et finalité métier. Nora peut demander une clarification si l'autorité ou la cible est réellement ambiguë. Si effet absent, ne pas effacer l'échec par répétition ; T06 est conditionnel. MP09/10/11/12/13.

### T06 — approfondir sujets, règles et points ouverts
Proposition : « Creusons les habilitations et les urgences. Un agent peut être habilité pour certains équipements seulement. L'habilitation doit être valide au moment de l'intervention ; une urgence ne doit pas faire disparaître une inspection planifiée. Qui devrait pouvoir changer une affectation et comment garder la trace ? Pour l'instant, on explore les options, on ne décide pas encore de cette règle d'autorité. »
Attendus : hiérarchie pertinente sujets/sous-sujets lorsque justifiée, faits vs propositions, point(s) ouverts utiles, aucune décision durable inventée, aucune réouverture de cycle. Si T05 n'a pas effectivement ouvert le cycle, demander une clarification puis éventuellement GO simple explicite après constat, tracer les deux comportements séparément. MP03/09/10/11/12.

### T07 — arbitrages, consolidation et document V1
Proposition (adapter aux questions réellement ouvertes) : « Je décide que la responsable d'exploitation valide une réaffectation, et qu'un agent non habilité ne peut pas commencer l'intervention. Pour la présentation du planning, on peut partir provisoirement sur une vue hebdomadaire, sans en faire une règle définitive. Prépare une première version du cadrage fonctionnel avec les règles, les points encore à décider et des scénarios d'acceptation. »
Attendus : décisions durables reconnues avec provenance et portée ; option locale non transformée en décision globale ; points réellement résolus retirés des listes ouvertes mais historique conservé ; V1 créée une fois, références exactes et visionneuse 50/50/agrandissement/retour, bibliothèque compte 1 document disponible, compteurs cohérents. Vérifier réutilisation des apports sas/T06. Ne pas imposer une structure documentaire arbitraire. MP03/05/08/09/10/11/12/13.

### T08 — investigation de référence en lecture seule, comparabilité et asynchronisme
Précondition : GO spécifique pour lecture Git et enveloppe de l'investigation ; choisir un dépôt autorisé, sans donnée sensible. Proposition pour comparaison : rattacher manuellement mcleland147/chantiers360, en lecture seule, viser le commit de référence 8c398c494dd918272aab5b2653777c6c21d2e76e si réellement accessible, sinon consigner le nouveau ref/SHA et limiter la comparaison. Ne pas modifier le dépôt. Ne pas attacher un projet existant comme contexte.
Proposition : « Avant d'envisager de développer Equipéo, peux-tu examiner les mécanismes de planification et de suivi déjà présents dans le dépôt rattaché, les confronter à nos règles d'affectation, d'habilitation, de déplacement et de traçabilité, puis me dire ce qu'on pourrait réutiliser et ce qu'il faudrait adapter ? Je veux distinguer ce qui est réellement implémenté de ce qui est seulement documenté. Ne modifie rien. »
Attendus : lecture réelle des sources, citations repo/commit/chemin exactes, distinction code/stub/doc/test déclaré/exécution, réutilisation V1 et acquis, conclusion argumentée et limites, aucun effet technique. Pendant travail : navigation, retour sans relance/duplication, activité réelle et résultat final. Observer temps, tokens entrée/sortie/cache, observations et HTTP si disponibles, segments, modèle demandé/appliqué, effort, lectures répétées, coût estimé, qualité. Comparer à T08 MaintiPlan seulement à corpus/ref/mission/profondeur comparables ; pas de cible arbitraire de réduction, pas de ratio si non comparable. MP05/08/10/11/14/15/16/17.
**G3 :** bilan intermédiaire T01–T08 analogues, anomalies et réserves, décision Morris de dépasser ce seuil. Si T08 ne peut pas être exécuté dans le budget ou sans accès, le noter BLOCKED/DEFERRED et décider si T09 peut être utile sans ses acquis.

### T09 — réviser V1 en V2 à partir des acquis
Il s'agit du T09 de cette nouvelle campagne, jamais du T09 MaintiPlan. Proposition : « À partir de notre cadrage et de ton analyse de l'existant, je veux réviser le document. Le pilote reste limité à un site, mais les habilitations doivent être vérifiées également lors de toute réaffectation. Intègre les enseignements utiles de l'investigation, distingue ce qu'on sait de ce qu'il faut encore valider, et conserve la première version. »
Attendus : base V1 exacte, V2 distincte et fidèle, V1 toujours consultable, pas de document supplémentaire si révision du même objet, compteur bibliothèque stable, références exactes ; réutilisation cognitive observable sans reconstruction systématique du fil. Vérifier contradictions et version courante. MP08/10/11/13/14/16 ; P2, oracle continuité 16, CONV-F25.

### T10 — évolution du besoin, réorganisation et trajectoire
Proposition : « En échangeant avec l'exploitation, on s'aperçoit qu'il faut distinguer les règles d'habilitation des règles d'affectation. Le compte rendu doit aussi être un sujet à part entière. Avant d'arrêter la conception, j'aimerais qu'on envisage un atelier avec des utilisateurs sur des maquettes Figma, puis une validation des scénarios métier. Comment adapterais-tu notre organisation ? »
Attendus : Nora rapproche, déplace, renomme ou sépare les sujets uniquement si utile ; provenance et liens conservés, synthèse actuelle vs historique, trajectoire envisagée sans ouverture implicite. Ne pas exiger une opération particulière de réorganisation si non pertinente. Après discussion, décision distincte du Pilote si la trajectoire proposée est retenue. Pas de modification Figma réelle. MP03/09/10/12/13.

### T11 — navigation, réutilisation et panneau droit nominal
Action : consulter des ressources réellement disponibles depuis les liens Nora, visionneuse, bibliothèque et Git autorisé ; viser six consultations d'objets/version distincts si disponibles, revisiter la plus ancienne, revenir Travail puis reprendre session. Contrôler cinq récents max, tri, déduplication et identité de la révision/commit, accès direct, points ouverts max cinq et accès exact, disparition d'un point résolu, absence de blocs redondants. Comparer état initial vide à nominal peuplé. Tester le rail et paramètres dans contexte projet, scroll à hauteur réduite et conservation du brouillon/position de lecture. Demander ensuite : « On revient sur le problème du remplacement d'un agent : rappelle-moi la règle retenue, ce qu'on avait laissé ouvert et les éléments qui la justifient. »
Attendus : reprise naturelle du bon contexte et références, aucune mutation au clic, aucun affichage d'objet non autorisé. Les types exécution/résultat/bilan/preuve absents sur un projet non réalisé restent NOT RUN, pas d'exécution créée juste pour remplir la liste. Une vérification propriétaire de droits/révocation se fait sur données synthétiques autorisées sous mandat, pas sur un autre utilisateur. MP03/05/08/10/11/13/17.

### T12 — préparation de réalisation, sans exécution
Proposition : « Si nous devions maintenant faire réaliser cette première version, quelles seraient les tâches nécessaires, les critères d'acceptation, les dépendances et les risques ? Prépare une proposition de mission exploitable, mais ne lance aucune réalisation et ne modifie aucun dépôt. »
Attendus : cadrage suffisamment précis et cohérent avec V2, mission/contrat inspectable si la capacité est disponible, sources et versions, critères spécifiques et risques, séparation entre proposition, READY admissible et autorisation humaine ; pas de D7/Cursor/Git write déclenché. Ne pas déclarer READY si préconditions manquantes. Si Nora ne peut pas construire un contrat, consigner le manque. CA-04, D6/D7/D8, seuil Livraison 1. **G4 :** arrêt avant toute réalisation, verdict Morris. La Livraison 2 nécessite un mandat distinct.

### T13 — bilan et vérification de continuité finale
Action : revenir au portefeuille puis au projet, comparer Travail/Projet/Journal/Trajectoire/Documents/Consommation ; vérifier qu'une demande de synthèse du chemin parcouru (si GO et budget restant) ne fabrique pas d'effet ni d'acquis. Relever décisions applicables, points ouverts, documents/version, cycle et suite, consommation cumulée et inconnues. Évaluer la qualité de Nora, la cohérence, l'efficience et le confort. Aucun T09 MaintiPlan envoyé. Produire PV de recette et proposition de verdict Livraison 1, sans acceptation automatique.

## 6. Matrice de couverture des 17 MP

Correspondance avec les identifiants historiques, jamais nouveau registre d'anomalies parallèle. Tous OPEN initialement. Une preuve nouvelle sur Equipéo peut qualifier le comportement corrigé si équivalente, sans réécrire le résultat historique MaintiPlan.

| MP | Sujet / oracle | Scénarios | État initial |
| --- | --- | --- | --- |
| 01 | Micro sas accessible | R00/T01 | OPEN |
| 02 | Compositeur partagé et extensible | T01–02/T04/T11 | OPEN |
| 03 | Points ouverts pertinents et résolution | T02–03/T06–07/T10–11 | OPEN |
| 04 | Animation préparation réelle | T03 | OPEN |
| 05 | Lisibilité, Markdown et confort | T01–08/T11 | OPEN |
| 06 | Dictée LIVE FR, arrêt/brouillon/erreurs | T01/T04 | OPEN CRITIQUE |
| 07 | Onde réelle, états audio | T01/T04 | OPEN |
| 08 | Panneau utile, récents multitypes/versions/droits | T07–09/T11 | OPEN |
| 09 | Multi-intentions, effets gouvernés | T05–07/T10 | OPEN |
| 10 | Capitalisation, hiérarchie, consolidation et réutilisation | T02–03/T06–11 | OPEN |
| 11 | Restitution Nora et activité réelle | T04–09/T12 | OPEN |
| 12 | Finalité, trajectoire et libellés | T03–06/T10/T12 | OPEN |
| 13 | Compteurs et projections | T03/T07/T09/T13 | OPEN |
| 14 | Efficience investigation à qualité comparable | T08–09 | OPEN |
| 15 | Allocation pertinente, appliqué vérifié ou inconnu | T01–13, focus T08 | OPEN |
| 16 | FinOps, finalisation, corrélation et inconnues | T01/T04/T08–09/T13 | OPEN |
| 17 | Paramètres globaux, rail et navigation | R00/T03/T08/T11 | OPEN |

Compléments de continuité : oracles §10 n°1–18 du contrat répartis T01–03 (1), T06/T10 (2–3), T06–09 (4–5), T07/T11 (6), T05–07 (7–8), T10 (9), T05/T12 (10), T07/T09/T13 (11), T11 (12–13), T03/T08/T11 (14), T08–11 (15), T09 (16), T04 (17), G0/T05/T11 et contrôles propriétaire dédiés (18). Ne pas déclarer couverture complète si un état ou type manque. Les 25 parcours et 26 sous-ensembles restent référencés au suivi v0.19 ; les preuves DET sont capitalisées et non assimilées à LIVE. Les autres UAT historiques ne sont pas automatiquement clos.

## 7. Fiche de constat et comparaison

Pour chaque étape consigner dans le futur PV (document de recette exécutée distinct ou addendum historisé sous mandat) :

| Champ | Valeur à renseigner |
| --- | --- |
| Tour / date / heure | ID, ordre réel, durée mesurée/perçue distinguée |
| Candidat / lane / contexte | SHA, BUILD, projet, conversation si accessible |
| Action | Texte réellement envoyé ou clic, différence avec proposition |
| Résultat cognitif | Pertinence, profondeur, hypothèses, qualité des recommandations |
| Effets métier | Demandés, autorisés, réalisés/refusés/UNKNOWN ; preuve exacte |
| UX | Observation et capture expurgée, état nominal/erreur |
| Consommation | Work/segment si disponible, tokens, cache inclus, modèle demandé/appliqué, effort, estimation et inconnues |
| Verdict | PASS / PARTIAL / FAIL / BLOCKED / NOT RUN / DEFERRED JUSTIFIÉ |
| MP/oracle | Identifiant(s), niveau de preuve, reste à vérifier |
| Décision suivante | Continuer / STOP / diagnostic ciblé / réserve proposée |

Ne pas inventer d'ID ni de donnée non affichée. Une capture de réponse ne prouve pas automatiquement une mutation PG. Aucune chaîne de raisonnement privée. Conserver texte visible et captures expurgées ; ne publier ni secret, audio brut, dump, donnée d'identité sensible ni contenu privé superflu. Pour une anomalie : attendu/observé, scénario, candidat, impact, reproductibilité, propriétaire pressenti (hypothèse), preuve, contournement éventuel et décision. En cas d'incertitude technique, faire un diagnostic groupé et proportionné, pas un correctif improvisé.

Mesure T08 : tableau baseline MaintiPlan vs Equipéo à renseigner (ref/mission/corpus, qualité et limites, temps, tokens input/output/cached, appels/observations, segments, allocation et coût estimé). Si non comparable, exposer les deux valeurs sans prétendre à un gain causal. Admin OFF : coût facturé indisponible. Ne pas additionner cache à input. Un coût estimé inconnu n'est pas zéro.

## 8. Gates et sortie de campagne

| Gate | Conditions | Autorité |
| --- | --- | --- |
| G0 | Identité candidat, lane, droits, réserves admissibles, autorisations LIVE et enveloppes explicites | Morris |
| G1 | Création neuve et continuité initiale réelle | Morris |
| G2 | Audio prioritaire évalué ou report explicitement arbitré | Morris |
| G3 | Bilan T01–08, absence de blocage critique, conditions pour V2 | Morris |
| G4 | V2, continuité, trajectoire et seuil de réalisation ; aucune exécution | Morris |
| Gate Livraison 1 | PV, 17 MP réconciliés, réserves et risques explicitement acceptés ou refusés ; contrôles techniques non confondus avec preuve métier | Morris |

Le cahier est PREPARED — NOT EXECUTED. Aucune acceptation implicite des réserves E5. Aucun GO LIVE ou lancement de projet par sa publication. Aucun commit/push projet, PR, merge, CI, migration, modification RECETTE hors actions métier expressément autorisées, promotion, release, R6 ou adoption. Ne pas relancer un lot de construction général : les anomalies constatées seront groupées par cause et impact. MaintiPlan reste suspendu après T08 et T09 historique NOT SENT. Le nouveau projet n'a pas pour but de reproduire chaque phrase de MaintiPlan, mais de démontrer que Nora permet désormais de travailler naturellement, efficacement et avec une continuité fiable, jusqu'au seuil de réalisation.
