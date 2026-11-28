# SFIA Studio Next — Cahier de recette métier intégrée après correctif ML5
## Nouvelle campagne de bout en bout — Equipéo (nom de travail proposé)

| Champ | Valeur |
| --- | --- |
| Date / version | 28 novembre 2026 — v0.2 (plan v0.1 du 27/11 conservé ; PV exécuté §9) |
| Nature | Cahier opérationnel D1, non normatif ; plan historique §§1–8 et PV exécuté §9 |
| Décision Morris | Nouvelle recette depuis un projet neuf, sans reprise ni modification de MaintiPlan ; publication documentaire demandée explicitement le 27/11 |
| Autorités | Morris = Pilote et verdict métier ; ChatGPT = accompagnement, analyse, tenue du PV ; Cursor = diagnostic technique sous mandat SFIA v2.6 |
| Programme | R5 IN PROGRESS / ML5 OPEN / LIVRAISON 1 NOT ACCEPTED / 17 MP OPEN RECETTE / R6 NOT STARTED / NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED |
| Candidat produit | 0ae9e1f7aaee3658eb3e9a135523e83a72631b31 |
| Tree / BUILD | 842537274c3ad0b2f672c9ebe2e9e0f54c55d968 / p0S18hfVdGrMjGeNMGlbV |
| Lane | RECETTE http://127.0.0.1:3200 ; PG :5434 sfia_next_recette_ml4 ; schéma 027 |
| Base main | 997897fd7cf914771e7d08e8030dc7123fab7d25 |
| Statut courant | CAMPAIGN STOPPED AFTER T09 BIS — PARTIAL UAT — LIVRAISON 1 NOT ACCEPTED ; voir §9 |
| Statut initial | RECETTE AVAILABLE — TECHNICAL SMOKE PASS rapporté ; READY WITH RESERVES ; aucune preuve métier sur le nouveau projet |
| Nouveau projet | Equipéo (créé pendant la campagne par le Pilote) ; plan initial §§1–8 ; preuves et limites §9 |
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

---

## 9. PV exécuté — Equipéo, 28 novembre 2026 (Europe/Paris)

**Statut courant, prioritaire sur le plan historique §§1–8 : CAMPAIGN STOPPED BY MORRIS AFTER T09 BIS / PARTIAL UAT / LIVRAISON 1 NOT ACCEPTED.** T01–T07 et T09 exécutés, T09 répété pour V3 ; T08 DEFERRED JUSTIFIÉ, T10–T13 NOT RUN. R00 partiel. Le présent addendum historise les observations et les arbitrages exprimés ; il ne réécrit pas les oracles initiaux, ne clôt pas les MP, ne valide pas les réserves et ne vaut ni nouveau GO LIVE ni adoption.

### 9.1 Identité, mandat et limites probatoires

| Champ | Constat |
| --- | --- |
| Date | 28/11/2026 ; heures visibles dans Journal : 06:32–06:33, 06:48, 06:53–06:54, 07:14–07:16, 07:26–07:27 ; pas de chronométrage exhaustif |
| Projet métier | Equipéo, projet neuf synthétique, deux sites / douze agents, un seul site pilote envisagé ; conversation et écrans effectivement montrés |
| Candidat de référence | Produit 0ae9e1f7aaee3658eb3e9a135523e83a72631b31 / tree 842537274c3ad0b2f672c9ebe2e9e0f54c55d968 / BUILD p0S18hfVdGrMjGeNMGlbV selon handoff du 27/11 ; SHA/BUILD réellement servis pendant chaque tour non revérifiés indépendamment |
| Lane | RECETTE :3200, PG :5434 schéma 027 selon handoff ; données PG et configuration effective NON OBSERVÉES par ChatGPT ; projet fournisseur RECETTE et projet DEV affichés dans les captures OpenAI |
| Git pré-check | main 997897fd7cf914771e7d08e8030dc7123fab7d25 ; produit sfia/next-ml5-integrated-delivery-20261123 @ 0ae9e1f7aaee3658eb3e9a135523e83a72631b31 ; docs/next-openai-studio-convergence-20261126 @ bc1409d933de8059a036f4a0c2b9b27b2c4afce1 avant publication ; sfia/review-handoff @ c74f99bb382939e12e79fb429cf1a6407bbc37f1. Compare docs/main : 79 commits ahead, 0 behind, merge-base main précité. Git local NON OBSERVÉ ; aucune assertion staged/untracked. |
| Mandat | GO explicite Morris du 28/11 dans la conversation de campagne : arrêter, consolider les résultats et anomalies dans le cahier actuel, publier directement sur Git ; D1, mise à jour mono-fichier sur branche documentaire existante, aucun effet normatif ni runtime. Pas de modification des contrats, roadmap, SEF, décision, code, DB, CI ou branches produit/handoff. |
| Preuve | Captures runtime et constats directs du Pilote (conversation de recette du 28/11), réponses visibles, captures fournisseur. Les captures ne sont pas incluses comme fichiers Git dans ce mandat ; inventaire textuel §9.8. Pas d'ID non attesté, pas de dump, secret ni chaîne de raisonnement privée. |
| Sources relues | SEF v0.2 §10, Roadmap main et candidate, SEM, R4/DATA-01, ENV-01, P1/P2/P3/F1/F2, nommage, contrat continuité §7, CA, CT-04, conducteur D3, contrat convergence, PV MaintiPlan, suivi correctif v0.19, handoff et extraits code exact candidat (voir §9.7). Figma non rouvert ; écarts Figma rapportés par Morris, pas de mesure F2. |

La Roadmap candidate décrit encore les checkpoints précédents ; le suivi correctif v0.19, le handoff final et ce PV documentent les états plus récents, sans modifier la Roadmap ni le statut de baseline. Aucun nouveau cycle SFIA externe exécuté : contribution documentaire directe, pas de pack Cursor à générer par ChatGPT.

### 9.2 Bilan par tour (résultats réellement observés)

| Tour | Action et résultat cognitif | Effets, UX et limites | Verdict / MP |
| --- | --- | --- | --- |
| R00 | Accès au sas, micro visible et paramètres/navigation accessibles au périmètre montré. | Identité exacte du build, isolation, contrôles droits/rollback et viewport réduit non démontrés indépendamment. | PARTIAL ; MP01/02/17 |
| T01 | Expression libre du besoin : organise les inspections/interventions, fichiers et mails, perte de trace ; Nora propose de rejouer deux cas, tester un suivi minimal puis choisir l'outil, sans imposer une application. | Aperçu intention/résultat/question contextualisé. Micro : PROVIDER_ERROR dès le premier essai, aucune dictée exploitable ; Morris décide poursuite clavier, pas de nouvel essai. | PASS cognition / FAIL audio / PARTIAL global ; MP01/02/05/06/07/11/15/16 |
| T02 | Douze agents sur deux sites, inspection décalée par urgence, remplaçant non habilité, planning inchangé ; nom Equipéo, un site pilote. Nora identifie responsabilité du report, contrôle d'habilitation, preuve de réalisation et choix du site. | Aperçu « Base suffisante », nom, périmètre, quatre questions de suite ; création proposée, non automatique. Un message annonce capitalisation dans Journal. Compositeur partagé et croissance/reprise exhaustive non prouvés. | PASS métier ; MP02/03/05/10 |
| T03 | Clic Créer le projet. Proposition séquentielle cadrage sur un site puis conception fonctionnelle, justifiée par le cas réel ; aucun cycle automatiquement ouvert. | Projet accessible, fil du sas conservé ; modal projet créé/identification cycles/première réponse. Spinner statique selon Pilote (vidéo rapportée, pas de preuve dynamique indépendante). Journal : un sujet « Suivi des reports d'inspection », synthèse initialement absente, 0 point ouvert malgré les questions du sas ; Projet 1 sujet, 0 décision, 0 document ; Travail et Trajectoire sans cycle. | PARTIAL ; création et continuité du fil PASS, continuité structurée et animation FAIL/PARTIAL ; MP03/04/05/10/12/13/17 |
| T04 | Clarification validation métier vs recette d'application : Nora distingue éprouver les règles sur le terrain, décider si outil utile, puis recetter l'outil ; garde trajectoire. | Nouveau point ouvert sur critères de validation des règles de report, visible Journal et Travail ; enrichissement du sujet. Pas de nouvelle tentative audio (report décidé), pas de cycle ouvert. | PASS métier / audio NOT RUN ; MP03/06/07/10/11/12 |
| T05 | Demande combinée de retenir trajectoire, ouvrir cadrage et travailler le parcours d'inspection. Nora décrit planifier, affecter/préparer, gérer imprévu, constater issue, produire/transmettre CR. | Trajectoire retenue, cadrage ACTIVE, conception fonctionnelle envisagée ; deux décisions applicables (trajectoire et ouverture, distinctes malgré impression de doublon), nouveau sujet « Parcours d'une inspection », CKI accessible. Aucun second cycle actif visible. La restitution juxtapose « ouverture reste une décision distincte » et « cycle demandé maintenant ouvert » ; titre décision trajectoire = identifiant technique trj_…, finalité reprend l'ordre d'ouverture au lieu du résultat métier ; acquis cycle vides ; provenance Pilote étiquetée Contribution Nora. Panneau droit points à clarifier en liens plutôt qu'en puces prévues selon Morris. | PASS nominal multi-intentions, réserves restitution/UX/finalité ; MP09/10/11/12/13/08 |
| T06 | Exploration habilitations et urgences sans arrêter règle d'autorité : trois organisations possibles, distingue habilitation non vérifiée/non valide, référence stable inspection, historique du prévu/réalisé, CR attendu distinct de non-réalisation. | Première hiérarchie naturelle observée : sujet parent « Parcours d'une inspection » + sous-sujet « Habilitations des agents » ; synthèses enrichies sans duplication apparente. Point ouvert précédent conservé, autres questions structurantes non capitalisées ; badge « Sujet autonome » sur enfant et provenance inversée. Trois confirmations identiques de Journal dans la réponse ; historique limité à Orientation du travail. | PASS métier et hiérarchie / PARTIAL continuité / FAIL restitution ; MP03/09/10/11/12 |
| T07 | Retenir validation des réaffectations par responsable d'exploitation et habilitation valide au démarrage ; vue hebdomadaire provisoire ; demander V1 du cadrage. Nora réutilise cas sas, périmètre, règles et hypothèses, décrit six familles de questions et cinq scénarios. | Activité : cinq sources identifiées dont trois sujets du Journal, deux sans titre utile ; identification ≠ lecture. V1 réellement disponible, bibliothèque un document, lecture dans Documents et visionneuse ; contenu cohérent, signale ancien message non relu intégralement. Repère récent après consultation. Visionneuse : V1 « historique » et version plus récente disponible alors que V1 courante ; icône récent peu documentaire, quatre confirmations répétitives, liste mal formatée, lien générique. Projet affiche 2 sujets/2 décisions/0 document puis après reload 3/2/1. Journal toujours un point ouvert, acquis habilitation visible, règle de réaffectation intégrée à synthèse (acquis distinct non vérifié). Deux décisions seulement : conforme à arbitrage Morris §9.3, écart à oracle initial conservé. | PARTIAL PASS ; MP03/05/08/09/10/11/12/13 |
| T08 | Investigation Git approfondie chantiers360 non lancée : Morris préfère éviter coût et répétition MaintiPlan avant diagnostic allocation. | Pas de lecture Git LIVE par Nora, pas d'enveloppe T08 consommée, pas de comparatif de performance ni d'asynchronisme long Equipéo. | DEFERRED JUSTIFIÉ ; MP14/15/16 et couverture asynchronisme non acquise |
| T09 | Révision du même document : contrôles habilitation à affectation/réaffectation et démarrage, inspection sans date visible jusqu'à replanification, vue dédiée à tester, site pilote inchangé. Nora annonce V2 pertinente. | Avant conservation : proposition non enregistrée, bouton de conservation, visionneuse montre V1 (question sur contrôle à l'affectation encore ouverte) au lieu du brouillon V2. Après clic explicite de conservation, à titre de test et non validation métier : V2 réellement consultable, 6 scénarios, modifications intégrées ; historique V1 conservée et V2 courante. Compteur Projet reste 1 document selon Pilote. Visionneuse V2 encore « historique »/version plus récente disponible ; nom externe V1 et titre interne V2 ; proposition désormais « expirée » au lieu de conservée ; Markdown brut dans historique. Pas de comparaison UI manuelle V1/V2 exhaustivement démontrée ni intégrité hash vérifiée. | PARTIAL PASS — révision nominale observée, inspection préalable FAIL ; MP08/10/11/13 |
| T09 bis | Répétition naturelle depuis V2, sans mention du défaut précédent : après validation exploitation, chargé planning met à jour et conserve trace ; trois situations de suivi (réalisée + CR, réalisée CR attendu, non réalisée à replanifier) ; notification mail hypothèse ; V3 du même document. Nora reformule correctement et annonce V3, reprend double contrôle et reports sans date. | Activité LIVE affiche comparaison +17/−14 lignes, 1 source/2 consultations ; paire exacte et usage non vérifiés. Résultat applicatif : « Aucun enregistrement documentaire n'a été effectué sur ce tour. Une confirmation de la base historique est requise avant toute révision. » Pas de bouton de conservation ni V3 inspectable/enregistrée dans les preuves ; V2 de référence citée, V2 précédemment courante. Nouveau point ouvert « Information des agents lors d'un changement de planning » visible dans Travail ; résultat partiel pour un sujet, cause inconnue. Historique terminal revient à Orientation du travail ; confirmations répétitives. Morris arrête campagne, aucun nouvel essai/confirmation forcée. | FAIL révision reproductible / PASS compréhension / PARTIAL continuité ; MP03/08/10/11/13 |
| T10 | Réorganisation et trajectoire évolutive. | Non exécuté. | NOT RUN |
| T11 | Navigation/récents multitypes et reprise complète. | Non exécuté ; quelques consultations documentaires observées dans T07/T09 ne valent pas le parcours entier. | NOT RUN |
| T12 | Préparation de réalisation sans exécution. | Non exécuté ; aucun D7/Cursor/Git write autorisé. | NOT RUN |
| T13 | Vérification globale finale et synthèse Nora. | Non exécuté ; PV ChatGPT ne vaut pas exécution du scénario. | NOT RUN |

Couverture : 8/13 tours planifiés exercés (T01–T07 + T09), dont T09 répété une fois ; 1 report, 4 non exécutés. R00 à part. Ce n'est pas un taux de réussite. Les formulations du plan restent indicatives ; le tableau décrit les actions réellement rapportées et n'invente pas les textes complets ou durées manquants.

### 9.3 Arbitrages Morris intervenus pendant la campagne

- Poursuite clavier après PROVIDER_ERROR ; aucune qualification de la dictée/onde en déduire.
- Continuité sas → projet : proposer une étape visible de constitution initiale de la continuité, fondée sur une compréhension de l'ensemble des échanges du sas, et non simple remplissage de champs. Construire/enrichir sujets, acquis, questions significatives et liens/provenance, alimenter les projections Travail/Projet/Journal/Trajectoire à partir des mêmes objets. À approfondir en Capacité 2, pas de nouveau moteur, pas de deuxième vérité, pas de choix d'architecture arrêté. Préserver V-A et l'acte de création explicite ; ne pas bloquer artificiellement accès au projet ou créer des décisions non autorisées. Reprise, idempotence, échec partiel, état et budget à instruire.
- Gouvernance sélective : les deux règles métier de T07 relèvent prioritairement des acquis des sujets, pas du registre de gouvernance. Celui-ci n'est pas un inventaire de toutes les exigences validées. Les décisions structurantes, GO de transition et actes d'autorité restent distincts. Absence de deux nouvelles HumanDecisions n'est pas considérée comme défaut par Morris. **Écart d'oracle** : T07 initial et contrat continuité §7 citent ces règles comme décisions durables possibles ; ne pas réécrire rétroactivement l'attendu ni convertir les acquis par backfill. Réconciliation D2 ultérieure sous validation de contenu et GO dédié ; aucune modification normative ici.
- Points ouverts : défaut confirmé, Nora sait les identifier mais les capitalise insuffisamment. Investigation approfondie en Capacité 2 ; couverture sémantique et cycle de vie, non quota de points.
- Activité : confirmations d'opérations et résultats techniques à restituer dans activité/historique plutôt que parasiter l'échange métier. Restitution contextualisée, proportionnée et véridique ; laisser visibles dans conversation les échecs, choix et résultats nécessitant l'attention. Ne pas exposer chaîne privée ni inventer d'étapes. Investissement accru demandé.
- Documents : nom métier stable, sans suffixe V1/V2/V3, versionnement/référencement gérés par Studio ; préserver référence exacte lorsqu'il s'agit d'une version citée. Gestion autonome de la base courante ; conserver les protections d'une base réellement ancienne/concurrente et l'autorité humaine de conservation lorsqu'exigée. Pas de changement de nom rétroactif exécuté.
- T08 reporté, diagnostic allocation avant nouveaux tests coûteux, divergence DEV/RECETTE à vérifier d'abord. T09 adapté sans acquis T08 ; répétition V3 autorisée ; arrêt après T09 bis, restitution Git puis diagnostic Cursor. Aucune acceptation de Livraison 1, aucun nouveau mandat technique, aucune promotion.
- Lots correctifs futurs : Morris demande d'éviter l'accumulation d'intentions hétérogènes dans un seul mandat Cursor. Regrouper deux ou trois tâches cohérentes d'un même sous-ensemble quand pertinent (préférence, pas seuil artificiel) ; intégrateur et preuves communs, revues intermédiaires, pas de découpage documentaire gratuit.

### 9.4 Réconciliation des 17 MP historiques

Les identifiants restent ceux de MaintiPlan ; **17 OPEN** au registre, même si certains comportements sont désormais positivement observés. Les priorités suivantes sont des propositions de travail, non acceptation de réserve ni clôture. Les anomalies documentaires nouvelles sont isolées comme sous-constats de MP-08/10/11/13 pour éviter un registre concurrent ; le diagnostic pourra justifier une nouvelle identité canonique si nécessaire.

| MP | État après Equipéo | Constat favorable / écart restant | Suite et preuve attendue |
| --- | --- | --- | --- |
| MP-01 | PASS visuel ; OPEN | Micro disponible sas et Travail ; disponibilité réelle du fournisseur non prouvée. | Conserver accès et scope ; preuve LIVE avec MP06. |
| MP-02 | PARTIAL | Compositeur présent sur deux surfaces ; croissance, brouillons, retour, annulation et cas limites pas complètement exercés. | Contrôles BROWSER sur mêmes interactions, isolation et absence de perte. |
| MP-03 | FAIL PARTIEL ; haute | 0 point initial malgré questions sas ; 1 à T04–T09 ; deuxième visible T09 bis ; questions importantes dans synthèses/V1/V2 mais non matérialisées. | D4 : qualification, création/rattachement, consolidation, résolution/réouverture et projections communes ; preuve naturelle, pas quota ni doublon. |
| MP-04 | FAIL rapporté ; moyenne | Modal et phases présentes ; animation toujours statique selon Morris. | Contrôle dynamique réel, arrêt terminal, reduced-motion ; distinguer activité réelle de décor. |
| MP-05 | PASS partiel ; OPEN | Lisibilité générale appréciée ; tableaux et document lisibles ; règles concaténées, Markdown brut historique, libellés/grammaire, densité et scroll restent à vérifier. | Comparaison Figma/DOM à états appariés, Markdown et accessibilité ; F2 non prouvé. |
| MP-06 | FAIL critique audio | PROVIDER_ERROR premier test sas ; pas de dictée exploitable. | Diagnostic DEV/RECETTE de configuration/admission, protocole, transport, erreur, cleanup et usage ; LIVE court FR sous GO, ne pas répéter à l'aveugle. |
| MP-07 | NON QUALIFIÉ | Onde réelle impossible à juger après échec audio. | Connexion/silence/parole, signal réel, stop ; couplé MP06. |
| MP-08 | PARTIAL / FAIL sous-parcours docs | Panneau utile, récents v1/v2 visibles, accès visionneuse ; puces vs liens Figma, icône document, version courante affichée historique, brouillon V2 non visible, V3 bloquée. | Réconcilier modèle de vue, droits, identités exactes, état courant/historique/proposition ; accès multitypes, 5 max, tri et dédoublonnage restent à prouver. |
| MP-09 | PASS nominal ; OPEN | GO combiné T05 réellement suivi de deux effets distincts et travail métier, un cycle actif ; plus de défaut MaintiPlan nominal. Règles T07 = acquis selon arbitrage. | Tests négatifs, autorité, idempotence, reprise, effets partiels ; ne pas réintroduire mots-clés. |
| MP-10 | PARTIAL significatif | Journal vivant, sujets et enfant naturels, synthèses et acquis, identification de sources, V1/V2 fidèles ; initialisation et questions insuffisantes, provenance inversée, badge autonome, résultat partiel T09 bis et historique de base. | Continuité complète et cumulative, D4 sources exactes, identité/version, provenance, résolution et réutilisation ciblée ; réorganisation et V3 restent non prouvées. |
| MP-11 | FAIL partiel ; haute | Activité spécialisée identification/comparaison visible en cours ; activité cognitive trop générique, historique terminal perd le détail, confirmations répétées/grammaire, résultat applicatif non contextualisé, statut expiré après conservation. | D3/OBS + effets propriétaires : activité LIVE et historique corrélés, distinction identifié/lu/comparé, résultat réel/partiel/échec, réponse métier propre ; aucune étape fictive. |
| MP-12 | PARTIAL | Trajectoire proposée puis retenue, cadrage actif et conception envisagée cohérents ; finalité = ordre d'ouverture, identifiants/ACTIVE et synthèses cycle peu contextualisés. | Finalité métier, libellés, acquis/questions pertinents sans copies ; évolution trajectoire T10 non testée. |
| MP-13 | FAIL fraîcheur ; priorité moyenne proposée | Compteurs 2/2/0 deviennent 3/2/1 après reload ; après V2 un seul document rapporté. Calcul nominal et distinction identité/révision favorables. | Actualisation commune après effets, sans reload ; cohérence Travail/Projet/Journal/Trajectoire/Bibliothèque ; persistance serveur non indépendamment vérifiée. |
| MP-14 | NON QUALIFIÉ / DEFERRED | T08 non lancé, activité de comparaison signalée, usage cumulé disponible mais aucun comparatif de travail équivalent. | Après MP15/16, contrôles courts puis mission comparable ; qualité d'abord, pas de ratio entre workloads différents. |
| MP-15 | FAIL au périmètre RECETTE observé ; haute | Sol seul modèle génératif visible fournisseur RECETTE ; Luna/Terra visibles DEV. | Diagnostic comparatif admission/config/routing/fallback/code effectif et traces ; tests ciblés modèle/effort sous GO, pas alternance artificielle. |
| MP-16 | PARTIAL / FAIL corrélation ; haute | Usage et estimation visibles ; coûts partiels/inconnus, 100 % couverture requêtes ≠ couverture coûts, 0 travail abouti et travail T06 encore en cours ; comparaison fournisseur indisponible (Admin OFF). | Corrélation travail/tour/génération/usage, finalisation, inconnues, périmètres et cache, détail utilisable ; ne pas ouvrir Admin sans GO. |
| MP-17 | PASS accès nominal ; OPEN | Paramètres et navigation accessibles au périmètre exercé ; récents et rail fonctionnels sur les captures. | Navigation exhaustive, reprise, accès/droits, viewport réduit, shell partagé et F2 restent à prouver. |

### 9.5 Sous-constats prioritaires de gestion documentaire (MP-08/10/11/13, P2)

| Sous-constat | Attendu | Observé / reproductibilité / impact |
| --- | --- | --- |
| DOC-A — prévisualisation proposition | Nouveau contenu inspectable AVANT conservation, base et version explicites. | T09 : V1 affichée à la place du brouillon V2 ; V2 modifiée seulement visible après conservation de test. Empêche revue informée. FAIL ; priorité haute. |
| DOC-B — état de version | Révision citée peut être courante ; historique seulement si non courante ; comparaison disponible seulement si paire pertinente. | T07 V1 et T09 V2 courantes dans bibliothèque/historique mais « HISTORIQUE » et « version plus récente disponible / aucun changement enregistré » dans Travail. Reproduit. FAIL ; impact confiance et potentiellement sélection de base. |
| DOC-C — base de révision | V2 courante sélectionnée naturellement ; confirmation seulement si base réellement historique, ambiguë ou périmée ; contrôle serveur conservé. | T09 bis : annonce V3 mais aucun enregistrement, confirmation historique exigée, pas de bouton de conservation. Aucune V3 démontrée. FAIL bloquant pour parcours de révision ; priorité haute. Relation DOC-B suspectée, non démontrée. |
| DOC-D — identité/titre | Un document « Equipéo — Cadrage fonctionnel », versions gérées séparément et références exactes. | Titre externe V1 même pour V2, H1 interne V2, repères v1/v2 même titre V1 ; confusion éditoriale. Compteur 1 correct rapporté. |
| DOC-E — proposition consommée | Distinguer proposée, conservée, refusée, expirée ; accès résultat exact et action non rejouable. | Après conservation V2, ancienne proposition « expirée », bouton désactivé ; non-rejeu serveur pas démontré. |
| DOC-F — lecture et comparaison | Historique lisible, comparaison V1/V2/V3 et accès version précise, pas d'altération. | Markdown brut dans aperçu ; action comparaison proposée avec une seule version ; comparaison LIVE +17/−14 sans paire explicite, historique terminal perd le détail. Comparaison manuelle non exécutée. |

Le résultat T09 montre que la chaîne de révision peut produire une vraie nouvelle version sans dupliquer l'identité. Le résultat T09 bis interdit de conclure à une capacité fiable/reproductible. Ne pas confondre annonce V3, brouillon réellement stocké, proposition admissible et version durable. Cause technique, baseRevisionId réellement transmis, état/provenance de la proposition et PG restent à constater. Préserver les deux versions existantes et les protections BASE_STALE/ownership/autorisation/idempotence ; aucun backfill, suppression ou révision automatique de la campagne arrêtée.

### 9.6 FinOps et allocation : mesures effectivement disponibles

| Source/périmètre | Tokens | Requêtes | Coût / état |
| --- | ---: | ---: | --- |
| Studio Equipéo checkpoint antérieur (après T05, selon suivi de conversation), 30 jours | 54 150 | 4 recensées | 0,11 USD estimé ; couverture 4/4, coût partiel/inconnu, aucun travail lié affiché |
| Studio Equipéo après T07, 30 jours | 336 831 | 21 recensées | 0,58 USD estimé, Sol seul coût connu, Small/Transcribe inconnu, 0 travail abouti ; un travail T06 encore « En cours », 109 327 tokens / 0,18 USD estimé |
| OpenAI projet RECETTE, 27–28/11, génération visible gpt-6.2-sol | 2 245 091 | 118 | entrée 2 153 544, sortie 91 547 ; text-embedding-3-small présent dans filtres ; coût facturé non relevé |
| OpenAI projet DEV, même période, gpt-6.1-terra | 692 830 | 71 | entrée 661 909, sortie 30 921 |
| OpenAI projet DEV, même période, gpt-6-luna | 32 224 | 16 | entrée 29 903, sortie 2 321 |
| OpenAI DEV total génération visible | 725 054 | 87 | embeddings et websearch présents dans filtres, usages correspondants non quantifiés |

Divergence observée : modèles génératifs Terra/Luna réellement recensés en DEV, Sol seul visible en RECETTE. Ce n'est pas une preuve d'allocation optimale en DEV ni une preuve de cause de la divergence. Périmètres et workloads différents ; période fournisseur couvre deux jours, Studio filtre Equipéo 30 jours, total fin de campagne non relevé. Ne pas soustraire pour déduire une fuite, ne pas comparer coût par tour ou gain causal, ne pas additionner cache à entrée, coût inconnu ≠ zéro. Couverture 100 % signifie requêtes recensées, pas coûts complets. Admin OFF et comparaison facturation indisponible sont des frontières connues. Aucun nouveau test T08 ni émission supplémentaire pour diagnostic dans ce mandat.

### 9.7 Pistes techniques déjà repérées et diagnostic à préparer (pas de cause confirmée)

Inspection distante ciblée au SHA produit 0ae9e1f7aaee3658eb3e9a135523e83a72631b31 :
- [Projection activité Projet](https://github.com/mcleland147/sfia-workspace/blob/0ae9e1f7aaee3658eb3e9a135523e83a72631b31/projects/sfia-studio-next/web/src/domains/preparation/project-activity-projection.ts) : comptage d'identités documentaires sans inflation par révisions. [page projet](https://github.com/mcleland147/sfia-workspace/blob/0ae9e1f7aaee3658eb3e9a135523e83a72631b31/projects/sfia-studio-next/web/src/app/projects/%5BprojectId%5D/page.tsx#L2169) : projection assignée au chargement ; bloc de refresh après tour autour de L3115 à rapprocher du défaut. Reload rétablit les compteurs ; hypothèse de fraîcheur renforcée, pas preuve de la cause exacte.
- Même page L1600–1656 : distinction sourceRevisionId vs head.id, focus exact/current et autorisation historique. [service conversation](https://github.com/mcleland147/sfia-workspace/blob/0ae9e1f7aaee3658eb3e9a135523e83a72631b31/projects/sfia-studio-next/web/src/domains/conversation/service.ts#L3819) : sourceIsHistorical calculé par comparaison de base et head réel. Inspecter provenance/transport de la base V2 et état réellement chargé, contrôle propriétaire D4 et UI ; ne pas supprimer la barrière sur simple suspicion.
- Même service L5009–5031 : compositions des restitutions d'effets pilotage/connaissance/publication dans assistantBody ; piste concrète de mélange conversation/effets. Vérifier corrélation et historique des événements, pas simple masquage de texte.
- Contrats : [P2](../governance/decisions/2026-11-07-convergence-ux-parcours-fondations-fidelite.md), [continuité](../conception-fonctionnelle/continuite-cognitive-et-fonctionnelle-du-projet.md), [CT-04](convergence-ux-ui-globale/contrat-technique-travail-avec-nora.md), [conducteur D3](../architecture-technique/conducteur-cognitif-et-production-nora.md), [allocation/FinOps](../architecture-technique/allocation-cognitive-recherche-web-et-finops.md), [CA](contrat-acceptation-cognition-et-realisation-gouvernee.md). Aucun test ni inspection locale effectué par ChatGPT.

**Diagnostic Cursor suivant : à qualifier par pré-check SFIA v2.6 après publication et GO distinct.** Read-only d'abord ; aucun correctif, émission LIVE, changement config, migration, cutover, push produit, PR ou merge. Relever Git local et distant, build/lanes et versions effectives ; retracer causes avec preuves non sensibles, distinguer écart de config vs code vs données/projection, cartographier blast radius, dépendances, couverture existante, risque/dette/exit. Préserver MaintiPlan et Equipéo, aucune mutation de recette pour « réparer » l'historique. Diagnostic reproductible sur preuves déjà disponibles/lectures autorisées, données minimisées ; si preuve manque, proposer un test précis et son GO, ne pas le lancer.

Proposition de regroupement (ordre et découpage non arrêtés, à challenger après diagnostic) :

| Ensemble cohérent | Périmètre / résultat utilisateur | Frontière, dépendance et preuve de sortie envisagée |
| --- | --- | --- |
| A — intégrité du cycle documentaire | DOC-A/B/C/D/E/F, MP08/10/11/13 concernés : inspecter, conserver, retrouver et réviser V1→V2→V3, nom et états fiables. | Propriétaire D4 + D3/projection UI ; conserver contrôle de concurrence/idempotence ; BROWSER et LIVE borné, versions et contenu exact, aucun doublon. Priorité fonctionnelle haute. |
| B — fournisseur et audio RECETTE | MP06/07/15, admission et divergences DEV/RECETTE ; allocation appropriée et dictée réelle. | Diagnostic commun d'environnement d'abord ; séparer correctifs audio et allocation si causes distinctes, aucune permission/modèle forcés ; tests ciblés avec GO et preuve fournisseur. |
| C — continuité cognitive / Capacité 2 | MP03/10/12, initialisation sas→projet et entretien des acquis/questions, provenance, réutilisation ; gouvernance proportionnée. | Concevoir et valider cible, réconcilier D2 §7 séparément ; D4 unique, D5/D6 propriétaires ; preuve naturelle couvrant création, enrichissement, résolution et projections. |
| D — activité et observabilité | MP11/16, restitution conversationnelle, activité contextualisée/historique, finalisation et corrélation des usages. | D3/OBS existants ; aucune chaîne privée ni moteur concurrent ; preuves réelles, état terminal et coût/inconnues corrects, MP15 dépendance pour détail modèle. |
| E — cohérence des surfaces | MP02/04/05/08/12/13/17, rafraîchissement commun, repères/icônes/puces, finalité et animation. | Corrections par responsabilité et Figma/DOM appariés ; coordonner avec A/C/D, éviter double modification de mêmes composants sans intégration ; BROWSER nominal/négatif. |
| F — qualification et efficience | MP14 et reliquats ; contrôle régression après correctifs, allocation/FinOps stabilisés avant mission coûteuse, reprises T08/T10–T13 selon valeur et GO. | Pas de relecture coûteuse ni comparatif non comparable ; tests déterministes, PG, BROWSER et LIVE/REAL distincts ; seuil Livraison 1, puis Livraison 2 sur gate distinct. |

Ne pas traiter cette table comme mandat de six lots à exécuter. Le diagnostic peut révéler des causes communes ou imposer des frontières différentes ; prioriser un sous-ensemble cohérent et une revue à la fois, sans macro-lot omnibus ni micro-cycles artificiels. Les corrections doivent synchroniser contrat/as-built/tests avec code dans leur propre lot. Aucune reprise d'ancien Studio par inertie.

### 9.8 Inventaire des preuves de conversation (non matérialisées dans Git)

| Réf. de constat dans ce PV | Capture/observation à retrouver dans la conversation de recette du 28/11 |
| --- | --- |
| T01-a/b | Sas première intention, bandeau PROVIDER_ERROR ; micro visible ; écran sans erreur ensuite |
| T01-c / T02 | Clarification de besoin ; aperçu enrichi ; « Base suffisante », Equipéo et questions de suite |
| T03 | Modal création et préparation, spinner statique rapporté ; Travail, Projet, Journal, Trajectoire avant GO |
| T04 | Réponse validation métier vs recette ; point ouvert dans Travail/Journal |
| T05 | Cycle cadrage actif, trajectoire retenue, deux décisions, deux sujets, panneau droit/CKI |
| T06 | Réponse responsabilités/habilitations, triple confirmation ; arbre parent/enfant et synthèses, activité Orientation du travail |
| T07 | Activité 5 sources identifiées ; V1 dans visionneuse et bibliothèque, sections 1–5 ; Projet 0 doc ; Journal acquis habilitation, 2 décisions, 1 point ouvert ; reload Projet 3/2/1 |
| F-01/02 | Studio consommation 54 150 puis 336 831 tokens ; OpenAI Analytics RECETTE 118 Sol / DEV 71 Terra +16 Luna sur 27–28/11 |
| T09-a | Proposition V2, visionneuse V1, historique une version |
| T09-b | Après conservation : V2 nouvelle révision, contenu modifié, historique deux versions et V1 lisible ; compteur 1 rapporté |
| T09-bis-a | Activité en cours : comparaison +17/−14 lignes, 1 source/2 consultations |
| T09-bis-b | Réponse annonce V3 ; résultat applicatif aucun enregistrement et confirmation historique ; deux points ouverts visibles, historique générique |

Les références ci-dessus sont des repères descriptifs du PV et non des IDs de stockage ni des preuves immuables. La collecte/archivage des captures expurgées et corrélations serveur sera à instruire si requis pour trancher ; pas d'upload de capture implicite.

### 9.9 Gates, verdict et prochaine capacité

| Gate | Résultat |
| --- | --- |
| G0 | Campagne effectivement lancée par le Pilote, contrôles préalables exacts/enveloppe non intégralement documentés dans les éléments disponibles ; pas de certification rétrospective complète. |
| G1 | Création et fil conservés observés ; continuité initiale partielle, poursuite décidée par Morris. |
| G2 | Audio FAIL / onde NOT QUALIFIED, poursuite clavier explicitement décidée. |
| G3 | T08 DEFERRED et poursuite T09 sans investigation explicitement arbitrées par Morris. Pas de PASS d'efficience/asynchronisme. |
| G4 | NON ATTEINT : T12 non exécuté, V3 bloquée, continuité incomplète. Aucun lancement de réalisation. |
| Gate Livraison 1 | NOT ACCEPTED, 17 MP OPEN ; aucune acceptation de réserve par défaut ; pas de nouveau GO de promotion, de merge ou de clôture ML5. |

**Appréciation intégrée :** progrès réels depuis MaintiPlan : compréhension et qualité documentaire maintenues, multi-intentions au nominal, Journal hiérarchique naturel, acquis, points ouverts au moins ponctuels, repères, V2 versionnée sous identité unique, cohérence compteurs après reload. Les défauts dominants sont désormais continuité fiable, cycle documentaire reproductible, allocation fournisseur en RECETTE, activité/FinOps et fraîcheur des projections. Le produit est plus proche d'une expérience cohérente, sans constituer une preuve globale LIVE/REAL ni une adoption.

**Suite décidée :** publication du présent PV, puis préparation d'un diagnostic Cursor distinct, revue de ses causes et propositions, GO correctifs bornés par sous-ensemble, preuves et nouveau candidat RECETTE selon ENV-01 ; reprise ciblée des scénarios, pas relance systématique de toute la campagne. Livraison 2 (réalisation gouvernée et résultats) reste suivante après acceptation Livraison 1 ; R6 NOT STARTED, NO RELEASE, STABLE NOT AVAILABLE, NOT ADOPTED. Aucun chantier correctif n'est démarré par le présent document.
