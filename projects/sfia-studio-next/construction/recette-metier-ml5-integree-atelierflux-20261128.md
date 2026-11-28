# SFIA Studio Next — Campagne de recette métier intégrée ML5
## AtelierFlux — du besoin à la préparation d'une réalisation, sans exécution

| Champ | Valeur |
| --- | --- |
| Date / version | 28 novembre 2026 — v0.1 |
| Nature | Cahier opérationnel D1, non normatif, campagne proposée ; PREPARED — NOT EXECUTED |
| Mandat Morris | Préparer une nouvelle campagne fictive couvrant les travaux ML5 et les corrections transverses, hors exécution et résultat de réalisation ; GO création/publication du dossier Git donné en conversation |
| Pilote / accompagnement | Morris joue le métier et décide ; ChatGPT accompagne un échange à la fois, constate et tient le PV sous mandat ; Cursor uniquement pour diagnostic/proof gap sous GO séparé |
| Candidat produit | `785253fd7003b95af631248da6bdff6279b2e541`, tree `6f22ebae5e8a2780ee20d12bf30b747918096997`, publié |
| Runtime de référence | RECETTE :3200, BUILD `1vUakgaqdIX7rRYMZIJQE`, PG :5434 sfia_next_recette_ml4, schéma 029 ; rapporté, NON OBSERVÉ localement par ChatGPT |
| Base main | `997897fd7cf914771e7d08e8030dc7123fab7d25` |
| Git documentaire | `docs/next-openai-studio-convergence-20261126` ; base `3bbae31f949599a765466891a74f14a1e3fc60bd` ; non mergée |
| État programme | R5 IN PROGRESS / ML5 OPEN / L7 CONSTRUCTION ET QUALIFICATION TECHNIQUE ACCEPTED WITH RESERVES / USER QUALIFICATION OPEN / LIVRAISON 1 NOT ACCEPTED / 17 MP OPEN / Gate C OPEN / R6 NOT STARTED / NO RELEASE / STABLE NOT AVAILABLE / NOT ADOPTED |
| Données | Nouveau projet synthétique AtelierFlux (nom proposé, non créé). Equipéo et MaintiPlan préservés ; pas de reprise de leur campagne. |
| Autorisation LIVE | NON DONNÉE par la création de ce cahier. G0 avant toute émission. |

## 1. Finalité et frontières

Évaluer le service rendu par Nora et la cohérence du produit depuis le portefeuille jusqu'à un projet prêt à être confié à une réalisation : compréhension, profondeur adaptée, investigation, continuité cognitive, capitalisation sélective, pilotage gouverné, documents exacts, consultation et reprise, allocation, consommation et UX. Le Pilote doit pouvoir travailler normalement, sans connaître les noms de capacités ou les structures internes. Le fil rouge n'est pas une simulation de Cursor.

IN : convergence OpenAI–Studio, travaux E1–E5, L1–L5 et les six mandats de L7, non-régression des fondations ML1–ML4 mobilisées dans le parcours. La préparation et l'inspection d'une proposition de mission sont un dernier contrôle amont facultatif (CA-01/04), sans accord d'exécution. Les réponses et productions intellectuelles de Nora sont bien IN : le « résultat » exclu est le résultat de réalisation technique et sa restitution post-exécution.

OUT : dispatch, exécution, arrêt/reprise Cursor SDK en REAL, écriture/publication/merge Git, dossier de résultat, rapport, bilan et qualification D8 post-exécution, Capacité 2, benchmark long T08, activation WEB LIVE/Admin, dictée LIVE L6 différée, nouvelle fonctionnalité, Figma write, configuration, migration, correction code. Les entrées ou représentations d'exécution non alimentées doivent être honnêtes ; leur comportement peuplé reste NOT RUN. R-M3-PROOF-FOCUS, R-REC-BOOT-01 dans sa dimension de restitution, CA-05–08 et parties correspondantes D/E/F/G/H du registre ne sont pas clos. Ne pas créer de données de réalisation pour remplir un écran.

Le produit peut présenter des capacités incomplètes ; les constater (PARTIAL, FAIL, BLOCKED ou DEFERRED) plutôt que contourner, forcer, ou prétendre qu'elles fonctionnent. Aucun nouveau registre normatif ni nouvelle liste de MP : cette campagne instancie les sources existantes sur un nouveau projet.

## 2. Sources de référence et capitalisation

Refs figées : produit [785253fd](https://github.com/mcleland147/sfia-workspace/tree/785253fd7003b95af631248da6bdff6279b2e541/projects/sfia-studio-next), main [997897fd](https://github.com/mcleland147/sfia-workspace/tree/997897fd7cf914771e7d08e8030dc7123fab7d25/projects/sfia-studio-next), suivi [v0.37 §42](https://github.com/mcleland147/sfia-workspace/blob/3bbae31f949599a765466891a74f14a1e3fc60bd/projects/sfia-studio-next/construction/suivi-trajectoire-corrective-post-recette-equipeo.md), [handoff cutover](https://github.com/mcleland147/sfia-workspace/blob/9abac5c3823109e3859af01d5302f2b6331b9437/sfia-review-handoff/latest-chatgpt-review.md), [handoff qualification](https://github.com/mcleland147/sfia-workspace/blob/141f71fcaaaa52af7bef1bbec16fdeee593c3b8d/sfia-review-handoff/latest-chatgpt-review.md).

- SEF v0.2, Roadmap et ENV-01 sur main ; décision du 12/11 sur qualification sémantique et autorité du Pilote. Roadmap ne décrit pas encore le runtime de ce soir ; suivi et manifeste font foi pour l'état de candidat, pas pour l'adoption.
- [Equipéo : cahier et PV §9](https://github.com/mcleland147/sfia-workspace/blob/3bbae31f949599a765466891a74f14a1e3fc60bd/projects/sfia-studio-next/construction/recette-metier-ml5-e2e-post-correctif-20261127.md) : création et cognition métier utiles, défauts de continuité, projections, activité répétitive, proposition V2 mal inspectée puis V3 non produite, dictée FAIL ; arrêt T09 bis, T08 différé, T10–13 non exécutés. MaintiPlan : constats historiques repris dans §1.1, pas de relecture directe de son PV autonome dans la rédaction présente.
- [Cahier R01–R08](https://github.com/mcleland147/sfia-workspace/blob/785253fd7003b95af631248da6bdff6279b2e541/projects/sfia-studio-next/construction/cahier-recette-integree-ml5-convergence-20261127.md), [contrat convergence](https://github.com/mcleland147/sfia-workspace/blob/785253fd7003b95af631248da6bdff6279b2e541/projects/sfia-studio-next/construction/convergence-openai-studio/contrat-fonctionnel.md), [contrat CA](https://github.com/mcleland147/sfia-workspace/blob/785253fd7003b95af631248da6bdff6279b2e541/projects/sfia-studio-next/construction/contrat-acceptation-cognition-et-realisation-gouvernee.md), [registre ML5](https://github.com/mcleland147/sfia-workspace/blob/785253fd7003b95af631248da6bdff6279b2e541/projects/sfia-studio-next/construction/ml5-registre-couverture-et-revue-developpement.md). Réutiliser A01–A12, C01–C08, CA-01/03/04 amont/09/10, CONV-F01–08/11–14/21–26 au périmètre disponible ; B et audio limités par les gates.
- [Contrats portefeuille v0.4/v0.5/v0.5](https://github.com/mcleland147/sfia-workspace/tree/6fc186bc867758b0a75ae4548a76694ac0b3c743/projects/sfia-studio-next/construction/convergence-ux-ui-globale/portefeuille), PF-A01–08. Figma historique pages 05, 13 et 14 : consulter si mesure appariée ; aucune lecture native ni mesure F2 réalisée pour cette rédaction.
- Suivi v0.37 : §11.4 PROJ-REC, §9 DOC-REC, §15 COG-REC, §18 ACT, §20 et §36 FIN, §26 et §§27–42 portefeuille/mandats/réserves. Les 292 tests de qualification et preuves cumulatives sont capitalisés ; ne pas les convertir en UAT.
- Pré-check documentaire : refs Git vérifiées, sources ci-dessus relues au périmètre utile ; état local NON OBSERVÉ. Aucun changement de code ni de runtime requis.

## 3. Projet fictif : AtelierFlux

Un réseau associatif fictif gère deux fablabs, Nord et Sud. Douze animateurs accompagnent les adhérents ; trois familles de machines (impression 3D, découpe laser, fraiseuse). Les demandes de fabrication passent aujourd'hui par des mails, tableaux et échanges informels. Le besoin est de fiabiliser la prise en charge : savoir qui traite quoi, quelles demandes sont prêtes, quelles pièces manquent, quelle machine est disponible, pourquoi une demande est bloquée et ce qui doit être validé avant lancement.

**Objectif métier :** concevoir un processus simple et un futur outil de suivi des demandes de fabrication, avec un pilote sur l'atelier Nord avant extension. Ne pas présupposer qu'il faut développer une application : laisser Nora challenger l'organisation, proposer un périmètre réaliste et des options. Pas d'usinage réel, de personne réelle, de donnée personnelle ni de décision industrielle réelle.

Acteurs fictifs : demandeur, animateur, référent technique, responsable d'atelier. Le Pilote arbitre le périmètre, pas Nora. Les rôles métier fictifs ne sont pas des comptes ou autorisations Studio.

### 3.1 Corpus à révéler progressivement (ne pas coller toute cette section dans le sas)

| Cas | Situation initiale | Question métier |
| --- | --- | --- |
| AF-01 | Pièce imprimée 3D, fichier fourni, matière disponible, demande standard | Circuit nominal et responsabilités |
| AF-02 | Découpe laser, plan incomplet, demandeur attend une réponse | Traitement d'une demande incomplète |
| AF-03 | Deux demandes de même priorité sur la même machine, indisponibilité imprévue | Arbitrage, report et traçabilité |
| AF-04 | Demande urgente, machine disponible mais créneau et référent non confirmés | Qui peut accorder une exception ? |
| AF-05 | Demande replanifiée après indisponibilité, fichier révisé | Version exacte et nouvelle validation |
| AF-06 | Demandeur souhaite annuler une demande encore en attente | Conservation de la trace et fin de traitement |

Source A — note fictive du responsable Nord (à introduire T04) : « Nous acceptons une demande standard quand son fichier est exploitable et la matière disponible. Le référent confirme la compatibilité machine. Les urgences sont à traiter en priorité si possible. Nous ne savons pas encore qui décide d'une dérogation. »

Source B — retour fictif atelier Sud (à introduire T06 seulement) : « Une urgence ne doit pas passer avant une demande déjà engagée sans arbitrage du responsable. Une révision du fichier après validation impose un nouveau contrôle de compatibilité. On ne sait pas si le demandeur doit être averti automatiquement ou manuellement. »

Ces extraits sont des entrées conversationnelles, pas des fichiers Git/PDF ni des preuves de lecture documentaire. Ils sont volontairement incomplets et partiellement divergents. Le Pilote clarifiera progressivement les règles ; Nora doit expliciter ce qui est connu, proposé, contradictoire ou ouvert.

### 3.2 Cibles de production

- Un projet unique AtelierFlux, une continuité sas/travail, un cadrage limité à Nord.
- Un Journal vivant : sujets et sous-sujets utiles (flux des demandes, recevabilité, priorisation, version des fichiers, notifications), acquis et points ouverts pertinents, pas de quota ni arborescence imposée.
- Une trajectoire discutée puis retenue, cycle de cadrage ouvert sur décision explicite ; éventuelle adaptation sans lancement implicite de cycle suivant.
- Un document métier principal « Cadrage fonctionnel AtelierFlux », V1 puis V2 puis V3, même identité et titre ; un second document « Scénarios de validation métier » si utile à l'investigation multi-sources.
- Des règles stabilisées, une proposition de périmètre et des critères d'acceptation ; préparation de mission facultative, aucun dispatch.

## 4. Entrée de campagne G0 / R00 (aucune émission Nora)

1. Ouvrir le profil navigateur RECETTE distinct de DEV (cookies même host) ; [portefeuille](http://127.0.0.1:3200/portfolio), vérifier session habituelle, identité du candidat et build, pas d'auto-session ni de fixture.
2. Constater compteurs et accès, recherche rapide, paramètres/consommation, archives et favoris ; comparer baseline visible sans imposer les comptages PG globaux à un Pilote. Vérifier présence historique en lecture seule, ne pas ouvrir Equipéo/MaintiPlan si l'ouverture produit une reprise ; ne pas modifier leur organisation.
3. Vérifier WEB LIVE/Admin OFF, policy v0.2, qualified-v0.2, mode operational ; Terra medium attendu par défaut, Luna low/medium et Sol low/medium/high admis. Configuration rapportée, résolution post-cutover non exercée ; ne pas affirmer l'environnement mémoire du PID. SFIA_BOOT_DEFER_NORA=0 conservé, pas de reprise d'avis historique attendue dans cette campagne. R-REC-LOG-01 surveiller erreur b.mask si elle se reproduit, R-REC-ISO-01 aucun serveur de test improvisé.
4. Capturer état initial, viewport et consommation (périmètre/filtres), avant le premier envoi. Aucun secret ni donnée d'un autre Pilote.
5. Obtenir **GO LIVE Morris explicite** pour Nora texte et dépendances cognitives admises sur le seul projet AtelierFlux, ainsi que l'enveloppe de campagne. Préparation sas incluse dans l'enveloppe, pas seulement les messages après création. Proposition à arbitrer : un envoi à la fois ; 12–16 tours utiles au maximum pour le fil rouge hors reprises décidées ; deux investigations courtes ciblées au plus ; revue de consommation après création, V1, V3 et sortie ; pause immédiate si erreur fournisseur, blocage ou coût/latence inhabituel. Fixer avec Morris les seuils de tokens, durée et coût estimé avant envoi. Ce nombre de tours n'est pas un plafond d'appels HTTP et les plafonds cognitifs 120/1M/2M ne garantissent pas le coût total. Les guards de campagne stricts historiques sont DEV-only : pas de contournement, aucun plafond financier garanti prétendu. Si plafond dur demandé mais non applicable en RECETTE, STOP pour arbitrage.
6. Git read, embeddings/Vision éventuels et audio exigent leur autorisation et disponibilité explicites. Le GO texte ne vaut ni GO WEB LIVE, ni GO dictée L6, ni GO intégrations mutatives, ni GO exécution.

G0 initial : PENDING GO LIVE. R00 : NOT RUN. Pas d'envoi de la totalité du dossier à Nora.

## 5. Parcours principal — jouer un échange à la fois

Les formulations proposées sont des intentions humaines, adaptables selon réponse de Nora. Les « contrôles » sont pour le Pilote/ChatGPT uniquement, jamais injectés dans le texte envoyé. Ne pas demander une liste de capacités à Nora, des identifiants techniques, des effets D4/D6 ou des logs privés. Ne pas rejouer en boucle si une étape échoue. Chaque étape est NOT RUN.

### T01 — Exprimer librement le besoin dans le sas

**À dire :** « Je voudrais améliorer la façon dont on gère les demandes de fabrication dans nos ateliers associatifs. Aujourd'hui les gens nous envoient des mails ou des messages, et on perd parfois la trace de ce qui a été accepté, de ce qui manque et de qui s'en occupe. J'aimerais qu'on réfléchisse à une organisation plus fiable, sans forcément partir tout de suite sur un outil. Tu en penses quoi ? »

**Geste :** ouvrir une nouvelle préparation, observer compositeur et activité, saisir puis envoyer après G0. Observer l'état avant et après qualification : titre initial puis contextuel, pas de création automatique, pas de faux titre technique. Une demande simple doit rester proportionnée. Contrôles MP01/02/03/05/11/15/16, PF-A04, ACT-01. Micro visible seulement ; L6 LIVE différé.

### T02 — Concrétiser, nommer, reprendre la préparation

**À dire :** « On a deux ateliers, Nord et Sud, avec douze animateurs. Imagine une demande d'impression 3D complète et une demande de découpe dont le plan manque. On a aussi deux personnes qui veulent le même créneau de machine. Je pense commencer seulement par Nord et appeler le projet AtelierFlux. Qu'est-ce qu'on doit clarifier avant de se lancer ? »

**Gestes :** observer le titre proposé, l'aperçu et les questions. Quitter vers portefeuille, rechercher la préparation, la mettre en favori si possible, la renommer volontairement en « AtelierFlux — préparation », rouvrir ; conserver un brouillon non envoyé et vérifier sa reprise selon contrat. Vérifier que le nom de projet proposé et le titre personnel restent distincts, priorité de l'édition Pilote et absence de doublon. Les questions pertinentes doivent pouvoir être retrouvées ; pas d'exigence arbitraire de nombre de points. MP02/03/10, PF-A01/04, R-A06-ATTACH, R-M2-PF34-REREAD (nominal).

### T03 — Créer le projet explicitement

**Geste :** valider la création uniquement si aperçu suffisant, sinon répondre aux questions utiles. Observer le sas de création : quatre repères SAS06, états réels du contexte et de qualification, CTA et animation. Ne pas double-cliquer ou simuler un faux succès.

**Contrôles :** une préparation rattachée, un projet et même fil ; pas de favori fantôme ni préparation autonome supplémentaire ; continuité des éléments structurés observables, provenance Pilote/Nora, compteurs et reprise cohérents sans F5 ; Projet/Journal/Travail/Trajectoire disponibles, qualification distincte de création. Un cycle proposé n'est pas ouvert sans décision. MP03/04/10/12/13/17, PROJ-REC-01/03, PF-A01/04/06. Toute faiblesse de capitalisation initiale est constatée ; pas de Capacité 2 construite.

### T04 — Explorer le fonctionnement avant décision

**À dire :** « Le responsable de Nord me dit qu'une demande standard peut être acceptée si le fichier est exploitable et la matière disponible ; le référent confirme la compatibilité de la machine. Les urgences passent en priorité si possible, mais on n'a pas arrêté qui valide les dérogations. Comment verrais-tu le parcours, depuis la demande jusqu'à sa prise en charge ? »

**Contrôles :** Nora distingue règle connue, suggestion, question ouverte ; capitalisation des sujets, acquis et points utiles, sans transformer toute règle en HumanDecision ; activité contextualisée distincte du texte métier, projection sans F5, pas de faux objectif. Ouvrir Journal et Projet après réponse, comparer. MP03/05/09/10/11/13, ACT-01/03, PROJ-REC-01.

### T05 — Retenir la trajectoire, ouvrir le cadrage et travailler

**À dire (adapter à la trajectoire réellement proposée) :** « Retenons d'abord un cadrage sur Nord, puis une conception fonctionnelle, avant d'envisager la réalisation. Je valide l'ouverture du cadrage et j'aimerais qu'on commence à détailler les étapes de traitement d'une demande, notamment le rôle des animateurs et du référent. »

**Contrôles :** distinguer décision de trajectoire et ouverture de cycle, une seule ouverture active, état/finalité/libellé métier exacts, CKI si prévu, pas de décision inventée ni effet répété. Vérifier en Travail, Trajectoire et Journal. Si Nora demande une confirmation nécessaire, la traiter normalement, ne pas forcer une mutation. MP09/10/11/12/13, ACT-03, CA-01/10.

### T06 — Introduire une divergence et plusieurs intentions

**À dire :** « J'ai un retour de Sud : ils disent qu'une urgence ne doit pas dépasser une demande déjà engagée sans arbitrage du responsable. Si le fichier change après validation, ils veulent vérifier à nouveau la compatibilité. Ils ne savent pas encore comment prévenir le demandeur. Est-ce qu'on peut comparer les deux façons de faire et identifier ce qu'il nous reste à décider ? »

**Contrôles :** distinguer source A, source B, contradiction réelle et hypothèse, réutiliser les éléments du sas et de T04 ; sujets/sous-sujets si utiles, absence de doublon, points ouverts explicites et réutilisables, provenance et limites de lecture. Observer activité, puis ouvrir le détail historique du tour. Ne pas exiger une source effectivement lue si elle n'a été qu'identifiée. MP03/09/10/11/15, ACT-02/03, CONV-F02/21 au niveau observable.

### T07 — Stabiliser les règles et produire le cadrage V1

**À dire :** « Pour notre pilote Nord, je retiens que seul le responsable peut arbitrer une urgence qui bouscule une demande engagée, et que tout fichier révisé doit être recontrôlé par le référent. La notification reste à discuter. Prépare-moi un document de cadrage fonctionnel AtelierFlux, avec le périmètre, le processus, les responsabilités, les règles, les points ouverts et quelques cas de validation. »

**Contrôles :** projet bien compris ; règles en acquis et synthèses, décisions de gouvernance sélectives. Observer proposition avant conservation si applicable, contenu complet, titre métier stable, vraie version V1, origine, bouton et statut, choix Pilote. Conserver explicitement si document acceptable (conservation ≠ validation de toutes les règles). Vérifier bibliothèque, Journal, Projet et compteur, ouvrir depuis fil et bibliothèque. Noter temps, usage, modèle/effort si exposés. MP03/05/08/09/10/11/13/15/16, DOC-REC-03, ACT-02/03/05, PROJ-REC-01. Si proposition ou sauvegarde incohérente, constater et ne pas enchaîner aveuglément.

### T08 — Investigation courte, multi-sources, reprise

**À dire :** « Reviens sur notre cadrage et les deux retours des ateliers. Dans le cas AF-03, si une machine devient indisponible alors qu'une autre demande urgente arrive, comment éviter de perdre la trace de la priorité et du report ? Propose-moi deux options et les risques, sans modifier le document pour l'instant. »

**Gestes :** si travail suffisamment long, quitter vers portefeuille ou second espace de test puis revenir et relire le tour ; observer continuité, activité et résultat réellement disponible, sans forcer une interruption d'émission. Si travail court, ne pas artificiellement l'allonger. Comparer sources réellement consultées, exactitude de V1, distinction identifié/lu/partiel, contexte, usage et absence de nouvelle mutation documentaire. Une lecture partielle doit être annoncée. MP08/10/11/14 partiel/15/16, ACT-02/04/05, CONV-F11/12/22/25. Ce T08 de la nouvelle campagne n'est **pas** le benchmark historique T08 MaintiPlan/Equipéo, qui reste différé ; aucun comparatif causal ni plafond garanti.

### T09 — Révision V2 du même document

**À dire :** « Retenons finalement qu'une demande reportée reste visible dans une file à replanifier, avec motif et responsable. La priorité initiale doit être conservée dans l'historique. Mets à jour notre document de cadrage en tenant compte de cette règle, sans changer le reste du périmètre. »

**Contrôles :** V1 identifiée comme base courante ; inspecter le contenu de la proposition V2 avant conservation, comparer attendu/observé, ne pas confondre brouillon et version conservée ; décision Pilote de conservation. Une seule identité documentaire, titre stable, V1 inchangée, V2 courante, statut proposition consommée/conservée et non expirée par erreur. Vérifier version ouverte depuis ancien lien, compteurs sans F5, historique lisible. MP05/08/10/11/13, DOC-REC-03/05, R-M3-DOC-TITLE, ACT-02/05.

### T10 — Révision V3 sans rechargement intermédiaire

**À dire :** « On vient de décider que le demandeur doit être informé lorsqu'un créneau est reporté, mais pour le pilote on garde une notification manuelle par l'animateur. L'annulation reste possible tant qu'aucune fabrication n'a commencé. Peux-tu intégrer ces deux règles dans le même cadrage, en gardant les règles de priorité et de recontrôle déjà retenues ? »

**Contrôles :** enchaîner depuis V2 réellement conservée, sans F5 ni confirmation historique artificielle. V3 inspectable et conservation explicite, trois révisions une identité, V1/V2 intactes, pas de suffixe V1/V2/V3 dans nom métier, comparaison exacte, pas de faux BASE_STALE. Si demande volontaire sur V1 historique ultérieure, protéger la base et demander confirmation si nécessaire ; ne pas écraser V3. Revenir aux anciens liens V1/V2. Le défaut Equipéo T09 bis est le discriminant majeur. MP05/08/10/11/13, DOC-REC-03/05, R-M3-DOC-TITLE.

### T11 — Enrichir les scénarios, adapter la trajectoire et réorganiser

**À dire :** « Avant de passer à la conception, j'aimerais qu'on fasse un atelier avec deux animateurs sur les cas de demande incomplète, report et annulation. Il faudrait aussi séparer les questions de priorité des règles de validation des fichiers. Prépare une fiche de scénarios de validation métier et propose comment adapter notre trajectoire. »

**Contrôles :** second document distinct si réellement proposé, inspecter et conserver si souhaité ; sujets réorganisés seulement si utile, acquis et provenance conservés, notification résolue si règle retenue et autres inconnues maintenues, trajectoire proposée sans ouverture du cycle suivant. Décision distincte du Pilote si adoption de la proposition. Observer plusieurs effets sur un même objet, activité non répétitive, réutilisation V3 plutôt que reconstruction intégrale. MP03/09/10/11/12/13, ACT-03/05, PROJ-REC-01.

### T12 — Reprise naturelle et contrôle des surfaces

**Gestes :** consulter V1/V2/V3, fiche de validation et d'autres ressources réellement disponibles, revenir au plus ancien récent ; observer max cinq récents, ordre, type, identité de version et liens exacts. Si moins de six ressources accessibles, noter limite de preuve, pas de fixture créée juste pour remplir. Contrôler points ouverts, navigation Travail/Projet/Journal/Trajectoire/Documents, rail et paramètres, position de lecture, clavier, brouillon et rechargement. Comparer consommation filtrée par projet, travaux et modèles. Retour portefeuille puis même projet.

**À dire :** « Si je reprends ce dossier demain, qu'est-ce qui est acquis, quelles questions sont encore ouvertes, et sur quels éléments devons-nous nous appuyer pour préparer la conception ? »

**Contrôles :** synthèse fidèle sans nouvel effet non demandé, références exactes et inconnues, rappel du contexte Nord. MP02/03/05/08/10/11/12/13/16/17, DOC-REC-05, PROJ-REC-01, ACT-04, PF-A01/08. Le bilan conversationnel de projet est IN, le bilan de réalisation est OUT.

### T13 — Frontière de préparation de réalisation (facultative, dernier tour)

**À dire :** « Sur la base de ce que nous avons défini, quels seraient les travaux nécessaires pour réaliser une première version ? Donne-moi une proposition de mission, ses limites, ses critères d'acceptation et les informations manquantes. Je ne veux lancer aucune réalisation ni modifier de dépôt. »

**Contrôles :** proposition utile et inspectable si disponible, cohérente avec V3 et décisions, sources et versions, limites, critères, état READY non inventé si préconditions manquantes. Pas de HumanDecision d'exécution, pas d'approbation/dispatch, pas d'écriture Git. Si un contrat nécessite une étape supplémentaire, s'arrêter à l'inspection et ne pas accepter le lancement. CA-01/04 amont, A03/09. Exécution et résultat explicitement OUT.

**G4 : STOP avant exécution.** La campagne ne doit pas être prolongée pour remplir les panneaux de résultats.

## 6. Contrôles transverses complémentaires (hors fil naturel, ciblés)

Ces contrôles sont à planifier en fonction du résultat des tours. Pas de seconde campagne exhaustive ni de multiplication d'appels payants. Toute manipulation instrumentée doit rester sur le nouveau projet ou une fixture isolée ; accès d'un autre Pilote uniquement sous mandat technique distinct, jamais via données réelles non autorisées.

| Bloc | Action / oracle | Condition / preuve |
| --- | --- | --- |
| P1 — Portefeuille | Sur AtelierFlux et une préparation secondaire dédiée : liste/grille/groupée, filtres, recherche, favoris, tri et ordre personnalisé, navigation de reprise, persistance refresh, clavier/focus. Compteurs du Pilote, pas des totaux DB ; reprendre même ID. | PF-A01–04/08 ; capturer avant/après ; >25/>99 ou conflit deux sessions uniquement si jeu autorisé existant ou E2E isolé. |
| P2 — Nommage | Renommer projet sans changer identité, fil, documents et liens ; vérifier titre préparation manuel vs réponse tardive, collision avec un nom déjà pris uniquement sur espaces synthétiques ; relecture après ACK. | PF-A04/07 ; R-M2-PF34-REREAD ; conflit/UNKNOWN instrumenté sous mandat si non reproductible naturellement. |
| P3 — Archive | Archiver puis restaurer AtelierFlux après travaux terminés, observer compteurs, favori, reprise, rang, lien direct et même fil ; annulation de confirmation sans mutation. | PF-A05 ; aucune clôture ni suppression. Archive d'un travail actif si état naturel admissible, sinon preuve PG capitalisée. |
| P4 — Suppression | Créer une préparation secondaire jetable sans données historiques ; supprimer après double geste de confirmation, vérifier disparition, ancien lien et absence d'effet sur AtelierFlux. Si besoin d'un projet jetable, GO explicite de création/suppression et budget éventuel. | PF-A06 ; jamais supprimer le projet principal ni un espace historique ; la suppression avec état actif, ownership, FK et concurrence relève des preuves PG déjà produites et d'éventuels compléments isolés, pas de destruction improvisée. |
| P5 — UX | Observer sas et projet peuplés : repères, panneaux, éditeur partagé, Markdown, listes, tableaux, historique, boutons, états vides/erreur, clavier, desktop et viewport court/mobile. | F1 qualitatif ; F2 uniquement après lecture native des frames et capture appariée avec mesures contractuelles ; sinon NOT PROVEN. |
| P6 — Sources documentaires | Comparer les deux documents D4 et révisions disponibles ; poser une question lexicale puis une paraphrase ciblée si utile, vérifier référence exacte, limite, usage et version courante. | CONV-F22–26 ; hybrid/embeddings/Decisions seulement si effectivement observés et admis. Ne pas déduire leur emploi de la qualité d'une réponse. |
| P7 — Git/PDF/Vision | Si un dépôt de test autorisé et un corpus fictif pertinent existent, demander une courte consultation en lecture seule de deux sources, suivre un renvoi, ouvrir un PDF textuel puis un schéma si disponible. Confronter à l'oracle connu ; vérifier fichier/commit/page, accès récent et refus honnête si source absente. | GO Git read/embeddings/Vision distinct ou inclus explicitement ; aucun dépôt inventé, aucun lien privé réel dans un appel externe non autorisé ; pas de push ni d'indexation massive. Si corpus absent ou accès non disponible : DEFERRED/BLOCKED, pas de fabrication de preuve. |
| P8 — WEB indisponible | Si pertinent et sous GO Nora texte, demander une information nécessitant une source publique non fournie ; le produit doit signaler la frontière WEB OFF et ne pas inventer de lecture ou citation. | CONV-F15/CA-02 : contrôle de limite uniquement ; aucun WEB LIVE ni requête réseau publique. Si non maîtrisable, NOT RUN. |
| P9 — Audio | Vérifier accessibilité du micro et continuité clavier, ne pas ouvrir de session Realtime. | MP01 observable, MP06/07 et CONV-F31–34 DEFERRED L6 ; pas de réactivation implicite. |
| P10 — FinOps | Comparer avant/après et filtres projet/modèle/travail, liste et résumé même scope ; usage partiel/inconnu ≠ zéro ; ouvrir un détail si disponible, actualiser rapidement sans réponses obsolètes. | FIN-REC-01/02 : preuve d'attribution précise et clés originales nécessite traces ou lecture propriétaire autorisées ; UI seule ne prouve pas PG. Coût facturé indisponible Admin OFF ; cache inclus dans input. |

P1–P10 sont des étapes de cette campagne, pas de nouveaux identifiants d'anomalies ou de contrats.

## 7. Matrice historique des 17 MP (état initial)

| MP | Sujet | Où observer | Initial |
| --- | --- | --- | --- |
| 01 | Micro sas | R00/T01/P9 | NOT RUN |
| 02 | Compositeur partagé et extensible | T01–03/T12/P5 | NOT RUN |
| 03 | Points ouverts pertinents et résolution | T02–04/T06–07/T10–12 | NOT RUN |
| 04 | Animation préparation réelle | T03 | NOT RUN |
| 05 | Lisibilité, Markdown et confort | T01–12/P5 | NOT RUN |
| 06 | Dictée LIVE FR, arrêt/brouillon/erreurs | L6 distinct, P9 clavier seulement | DEFERRED |
| 07 | Onde réelle, états audio | L6 distinct | DEFERRED |
| 08 | Panneau utile, récents multitypes/versions/droits | T07–12/P6–7 ; types résultat OUT | NOT RUN / couverture partielle attendue |
| 09 | Multi-intentions, effets gouvernés | T04–07/T11 | NOT RUN |
| 10 | Capitalisation, hiérarchie, consolidation et réutilisation | T02–12 | NOT RUN |
| 11 | Restitution Nora et activité réelle | T01/T04–12 | NOT RUN |
| 12 | Finalité, trajectoire et libellés | T03–05/T11–13 | NOT RUN |
| 13 | Compteurs et projections | T03/T04/T07/T09–12/P1–4 | NOT RUN |
| 14 | Efficience investigation à qualité comparable | T08 court, P10 ; benchmark historique différé | PARTIELLEMENT PLANIFIÉ, benchmark DEFERRED |
| 15 | Allocation pertinente, appliqué vérifié ou inconnu | T01/T05/T07/T08/T10/P10 | NOT RUN |
| 16 | FinOps, finalisation, corrélation et inconnues | T01/T07–10/T12/P10 | NOT RUN |
| 17 | Paramètres globaux, rail et navigation | R00/T03/T12/P1/P5 | NOT RUN |

Tous restent OPEN dans le registre tant qu'un verdict de clôture n'est pas explicitement prononcé. NOT RUN / DEFERRED décrivent le plan de la présente campagne et non un nouvel état normatif.

## 8. Matrice des 17 contrôles RECETTE différés (distincte des MP)

| Contrôle | Parcours ou exercice discriminant | Initial |
| --- | --- | --- |
| DOC-REC-01 | Proposition en attente, reload et ancienne erreur retardée après changement document/candidat ; isoler erreur courante. | NOT RUN instrumenté |
| DOC-REC-02 | Révision A puis B avec lecture retardée ou fermeture ; dernière sélection seule applicable, pas de confirmation obsolète. | NOT RUN instrumenté |
| DOC-REC-03 | T07/T09/T10 : V1→V2→V3, inspecter/conserver sans reload, identité/titre stables et révisions intactes. | NOT RUN |
| DOC-REC-04 | ACK conservation perdu après effet ; réconciliation sans duplication ni nouvelle base supposée. | NOT RUN instrumenté |
| DOC-REC-05 | T09/T10/T12 : anciens liens exacts V1/V2 après V3, historique/courant et lecture non mutative. | NOT RUN |
| DOC-REC-06 | Lecture A tardive, changement B pendant conservation, retour A ; effet A conservé sans contaminer B. | NOT RUN instrumenté |
| PROJ-REC-01 | T03–07/T09–12 : état peuplé, cartes/Journal et effets confirmés actualisés sans F5, une identité doc. | NOT RUN |
| PROJ-REC-02 | T08/T12/P2 : navigation A→B, lectures retardées/échec GET post-effet, reprise Journal sans faux ACK perdu. | NOT RUN ; variante instrumentée |
| PROJ-REC-03 | T03/P5 : SAS06 quatre repères réels, partiel/échec, CTA clavier, desktop/viewport court, appariement Figma si possible. | NOT RUN |
| COG-REC-01 | T01/T05/T07/T08/T10 : policy, modèles/efforts demandés/admis/appliqués si confirmés, reasonCodes, usage, latence, qualité. | NOT RUN LIVE |
| ACT-01 | T01/T04 : objectif contextualisé, dernier objectif valide, pas de progression fictive. | NOT RUN |
| ACT-02 | T06/T08/T09 : une source lue plusieurs fois et une seulement identifiée, opérations distinctes, comparaison exacte. | NOT RUN |
| ACT-03 | T05–07/T11 : plusieurs effets, même objet, journal durable et confirmations hors conversation métier sauf nécessaires. | NOT RUN |
| ACT-04 | T08/T12 : changement scope, tour suivant/reload, retard/timeout, historique du tour exact et pas de contamination. | NOT RUN |
| ACT-05 | T07–11 : limites, échec/partiel, historique fidèle et effets confirmés conservés. | NOT RUN |
| FIN-REC-01 | T07/T08/T10/P10 : probe consommé/extrait corrélé, clés et montants préservés, pas de double insertion ni réattribution ; timer claims successives/écriture tardive sous preuve technique si nécessaire. | NOT RUN |
| FIN-REC-02 | P10 : liste/résumé, companion-only, filtres rapides, erreur réseau/HTTP distincte du vide, partiel/inconnu. | NOT RUN |

Les courses et ACK perdus instrumentés ne doivent pas être provoqués sur les projets historiques ni en rejouant à l'aveugle des opérations payantes. Si une preuve discriminante manque, la garder ouverte et préparer, sous GO technique, le plus petit test isolé utile. Les défauts statiques d'identité/reread/timer déjà identifiés ne deviennent pas PASS par simple réussite du parcours nominal.

## 9. Réserves cumulatives et sortie

| Groupe | Traitement prévu |
| --- | --- |
| Portefeuille M1/M2 | R-A04-WINDOW (limite acceptée, pas de rejouage massif), R-A06-ATTACH, R-B-PF34-BROWSER, R-B-KEYBOARD, R-M2-PF34-REREAD : P1–4 et T02/03, variantes instrumentées si nécessaire. |
| M3 | R-M3-DOC-TITLE : T09/T10 ; R-M3-RECENT-IDENTITY : T12/P7 ; R-M3-PROOF-FOCUS : résultat de réalisation OUT ; R-M3-BROWSER/F2/icônes : P5 au niveau réel de preuve. |
| M4/L4 | Compositeur, Markdown, historique, ACT-01–05, DOC-E/F : T01–12 ; dette historique du sas non réécrite. |
| M5/L5 | FIN-REC-01/02 et limites timer/race, erreurs transport : P10 ; pas de backfill ni nouvelle mesure fournisseur imposée. |
| M6 | P4 nominal et annulation ; intégrité/concurrence prouvées au niveau PG rapporté, ACK perdu/403/503/asynchronisme/impact verrous non exhaustifs ; pas de suppression historique. |
| Déploiement | R-REC-ISO-01 (DSN fail-closed), R-REC-LOG-01 (attribuer erreur si reproduite), R-REC-BOOT-01 (avis différés historiques désactivés, restitution OUT), COG-REC-01. |
| F2 et tooling | R-B-F2, R-M3-F2, R-E2E-WEBPACK, R-E5-PG-HIST, diagnostics TS historiques : aucune clôture par UAT. |
| Différés | L6, T08 historique, Capacité 2, WEB/Admin, exécution/résultat : hors présente campagne, pas de PASS. |

### 9.1 Constat par étape (PV à compléter au fil de l'eau)

| Champ | Valeur |
| --- | --- |
| Tour, date/heure, projet, SHA/BUILD, lane | À relever |
| Action réellement effectuée / texte envoyé | À relever |
| Attendu et observé | Faits séparés ; capture ou référence exacte si disponible |
| Qualité cognitive | Compréhension, profondeur adaptée, source, hypothèses/contradictions, recommandation |
| Effets métier et autorité | Demandés, autorisés, effectués/refusés/UNKNOWN ; preuve propriétaire si disponible |
| Continuité et UX | Journal, activité, identité, projections, navigation, persistance |
| Usage / durée | Modèle/effort demandé, admis, appliqué si confirmé (sinon UNVERIFIED) ; tokens input/output/cached, estimation ou inconnu, temps perçu vs mesuré |
| Verdict | PASS / PARTIAL / FAIL / BLOCKED / NOT RUN / DEFERRED JUSTIFIÉ |
| MP/contrôles/réserves | Références historiques ; état restant |
| Suite | Continuer, pause, arrêt, diagnostic groupé, décision Morris |

Pas de capture de données sensibles, de secret, dump, audio brut ou chaîne de pensée privée. Les preuves UI, PG, DET, BROWSER et LIVE restent distinctes. Le PV futur peut être historisé en addendum de ce dossier sous mandat D1 ; ne pas modifier les attendus initiaux rétroactivement.

### 9.2 Gates

| Gate | Conditions de passage |
| --- | --- |
| G0 — entrée | Session, identité, lane, configuration, autorisation LIVE et enveloppe validées par Morris. |
| G1 — création | T01–03 : projet unique, contexte repris ; anomalie critique = STOP. |
| G2 — travail | T04–08 : compréhension, gouvernance, connaissance, activité et V1 ; bilan consommation et poursuite. |
| G3 — documents et continuité | T09–12 : V2/V3 inspectées et conservées, références, projections, navigation, contrôles complémentaires prioritaires ; toute corruption/perte/effet non autorisé bloque. |
| G4 — frontière | T13 facultatif, proposition de mission inspectée sans autorisation ni dispatch ; clôturer la session. |
| Sortie UAT | PV réconcilié avec MP, 17 contrôles et réserves, verdict Morris sur périmètre effectivement exercé ; anomalies groupées et correction éventuelle sous mandat distinct. |

**STOP immédiat** si mauvaise lane, fuite/croisement de données, mutation non autorisée, perte de document/version, duplication d'effet, exécution involontaire, politique cognitive incohérente, impossibilité de maîtriser une émission ou dépassement des limites convenues, erreur bloquante. Une question métier ou une limitation annoncée n'est pas automatiquement bloquante ; Morris arbitre. Ne pas retenter automatiquement un appel échoué.

**Règle de sortie :** réussite de la campagne n'implique pas réception globale de ML5 ou Livraison 1, Gate C, adoption, R6, release, ni preuve exécution/résultat. État de chaque item à décider après observation. La campagne vise une expérience naturelle de travail de bout en bout jusqu'au seuil de réalisation ; aucun mandat Cursor de construction ou de déploiement n'est émis ici.
