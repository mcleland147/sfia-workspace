# SFIA Studio Next — Spécification fonctionnelle R2
## Décisions, mandats et gouvernance du Pilote

| Métadonnée | Qualification |
| --- | --- |
| Version / date | **v0.1 — VALIDATED SPEC (Morris, 2026-11-02), interfaces réservées** |
| Domaine propriétaire | **6 — Décisions et gouvernance** · vision R1 §§2.7, 2.25, 2.29, 2.34–2.36 |
| Résultat pour le Pilote | Décider naturellement, conserver des arbitrages fiables, autoriser ou suspendre des effets **dans une portée claire**, sans confirmations redondantes, sans transfert d'autorité et sans état fictif |
| Sources Git examinées | `mcleland147/sfia-workspace` : `main@8751775edc314e8fc7f0855104e5000290be9839` ; `sfia/next-r2-functional-specs@ca9e5a8781a15b0789206b60b071f8d24e68f3f6` |
| Contrats R2 existants | Nora v0.4 — **VALIDATED SPEC** ; Connaissance v0.1 — **VALIDATED SPEC** ; Trajectoire/cycles/guidance CKI v0.1 — **VALIDATED SPEC**, avec réserves d'interface |
| Guidance spécialisée examinée | CKI Next v0.2 **CANDIDATE** (15 spécialités) et matrice de 50 relations orientées non contraignantes |
| État produit / preuve | **N/A — NON IMPLÉMENTÉ** ; aucune règle ci-dessous n'est démontrée en runtime Next |
| Portée de cette version | Conception fonctionnelle du domaine 6 et contrôle de compatibilité ; **contenu approuvé par Morris** et publication documentaire autorisée sur branche R2 ; aucune PR, aucun merge `main`, aucune décision d’architecture ni adoption |

## 1. Finalité, capacité et périmètre

**Capacité utilisateur.** Le Pilote peut exprimer une préférence, décider d'une orientation métier, autoriser une étape, inspecter puis autoriser un travail technique, suspendre ou révoquer une action et accepter ou refuser un résultat. Studio conserve les décisions qui ont une portée durable et **applique effectivement** les restrictions applicables ; Nora demeure une partenaire d'analyse et ne devient jamais l'autorité métier.

**IN — propriétaire du domaine 6 :** qualification de la nature d'un acte humain lorsqu'il devient opposable ; identité de l'auteur et sa compétence pour le projet/objet ; référence de décision et historique de ses modifications ; portée et conditions de validité ; restrictions, suspensions, révocations et levées humaines ; vérification des mandats et autorisations au moment pertinent ; refus d'une opération interdite ; distinction accord métier / autorisation d'effet / acceptation ; contrôle de cohérence en cas de décisions concurrentes ou contradictoires ; restitution véridique de l'autorité applicable aux autres domaines.

**OUT — à ne pas redéfinir :** compréhension et formulation conversationnelles par Nora (domaine 3) ; identité des sujets, mémoire et récupération des sources (domaine 4) ; trajectoire, état effectif des cycles, association du CKI et état durable de méthode (domaine 5) ; préparation détaillée, déclenchement, suivi, arrêt technique et contrats d'exécution (domaine 7) ; appréciation des preuves, conformité et résultats d'exécution (domaine 8) ; identité Git/Cursor effective, habilitations Git et mutations de dépôt (domaine 9) ; authentification de session/projet (domaine 1). Le domaine 6 **consomme et vérifie** leurs attestations et actes pertinents, sans créer leur double.

**Invariants R1 :** projets Studio individuels par Pilote, collaboration via Git sous droits réels, aucun partage implicite des mandats et décisions ; aucun cycle ni méthode préalable pour obtenir une aide cognitive ; GO conversationnel possible pour un cycle ; « Créer le projet » et « Exécuter » restent des actes explicites propres à leurs effets ; décision et observation technique sont deux réalités distinctes.

### 1.1. Vocabulaire fonctionnel (sans schéma technique décidé)

| Terme | Portée utile | À ne pas confondre avec |
| --- | --- | --- |
| **Préférence / clarification** | Choix d'orientation ou de présentation pour le travail, souvent local et révisable | Décision durable, permission ou mandat |
| **Décision structurante** | Arbitrage réel du Pilote, opposable dans une portée déterminée ; historique nécessaire | Proposition Nora, simple document contenant « validé » |
| **GO de transition** | Autorisation humaine explicite d'ouvrir/clore un cycle identifié ; vérification avant changement d'état | Preuve que le cycle a changé ; autorisation de code |
| **Mandat d'effet / autorisation opérationnelle** | Permission spécifique d'accomplir un effet borné, selon identité, objet, contrat inspecté et état actuel | Décision d'architecture, consentement permanent ou droits d'outil |
| **Restriction non dérogeable** | Interdiction/contrôle applicable quelle que soit la préférence du Pilote ou la guidance CKI | Simple réserve méthodologique susceptible d'être écartée |
| **Suspension humaine** | Interdiction opposable dans sa portée jusqu'à levée humaine valable | Pause technique/incident, fin d'un cycle, écoulement du temps |
| **Révocation / révision** | Modification d'applicabilité pour l'avenir, avec conservation des effets et décisions historiques | Effacement rétroactif d'un fait ou rollback technique |
| **Acceptation métier** | Décision du Pilote sur un résultat connu et ses éventuelles réserves dans sa compétence | Verdict de tests, fin d'ExecutionAttempt, commit ou `ADOPTED` global |
| **État technique observé** | Fait rapporté par le domaine propriétaire avec limites de preuve | Déclaration de Nora, décision ou autorisation |

### 1.2. Contrats d'information à protéger

**Acte de décision durable, minimum fonctionnel lorsque nécessaire :** Pilote/identité compétente ; projet propriétaire ; objet, choix, portée (cycle, activité, ressource, durée/condition si pertinent), statut courant et date/événement d'effet ; expression/source réelle ; restrictions et décisions liées ; historique des changements et motif utile. Il ne s'agit ni d'une obligation de créer une fiche à chaque « OK », ni d'une prescription de classe `HumanDecision`/table DB.

**Autorisation d'effet, minimum fonctionnel :** auteur habilité ; projet ; opération et ressource ciblées ; contrat ou état inspecté **identifiable et non substitué** ; effets, limites, conditions et restrictions applicables ; moment d'autorisation et état courant. La disponibilité de la capacité et des accès réels est vérifiée avec les domaines 7/9, jamais déduite du seul acte humain.

**Suspension ou révocation :** acte humain et source ; périmètre explicite ou interprétable sans risque ; état courant et conditions de levée ; effets déjà constatés et ceux restant interdits ; référence au mandat/cycle/activité touchés. En cas de doute, limiter les effets potentiellement touchés sans étendre arbitrairement le STOP à tout le projet.

**Acceptation avec réserves :** objet et version du résultat considéré, information de qualification réellement disponible (domaine 8), réserves connues, décision et portée du Pilote ; **aucune** adoption, publication, levée de restriction ou autorisation corrective implicite.

## 2. Responsabilités et contrats d'interface

| Domaine | Propriétaire d'un fait ou d'un effet | Contrat d'interface du domaine 6 |
| --- | --- | --- |
| **1 / 2 — Accès et création** | Identité de session fiable, projet personnel, acte explicite « Créer le projet » | Vérifier l'auteur et les permissions ; **ne pas créer le projet à la place du domaine 2** |
| **3 — Conduite Pilote–Nora** | Compréhension, investigation, reconnaissance du sens des expressions et présentation | Reçoit la qualification de validité d'un arbitrage ; ne délivre pas d'autorité par son interprétation |
| **4 — Connaissance** | Sujets, sources, contexte, points ouverts, restitution entre sessions | Références aux décisions/mandats courants et à leur histoire ; aucune réédition d'un registre d'autorité |
| **5 — Trajectoire et cycles** | Trajectoire, état des cycles, CKI, état durable de méthode | Le domaine 6 valide le GO, une suspension ou une révision applicable ; le domaine 5 réalise/vérifie et conserve **l'état du cycle/méthode**, pas le domaine 6 |
| **6 — Décisions/gouvernance** | **Validité, état et historique des actes humains opposables, restrictions, suspensions et autorisations** | Propriétaire de cette spécification et des règles `RG-GOV-*` |
| **7 — Réalisation gouvernée** | Contrat préparé, instructions techniques, tentatives, effets observés et contrôles d'exécution | Reçoit l'acte d'autorisation applicable, applique les restrictions ; ne crée pas son propre registre décisionnel concurrent |
| **8 — Résultats et preuves** | Preuves, qualification de conformité, écarts et réserves | Fournit le résultat réel à considérer ; reçoit l'acceptation humaine, sans en déduire un verdict probatoire nouveau |
| **9 — Intégration Git** | Permissions Git/Cursor effectives, références/état des dépôts et interventions | Distingue droits techniques réels et GO du Pilote ; les deux sont nécessaires à l'effet concerné |

**Chaîne conceptuelle, pas une architecture :** intention comprise par Nora → acte humain identifié et validé par le domaine 6 → effet demandé à son propriétaire (2, 5 ou 7/9) sous contrôle de l'état courant → observation réelle du propriétaire → qualification de résultat par 8 si applicable → décision d'acceptation ou de suite par le Pilote. **Aucune autorité ne découle de la seule existence de la chaîne.**

## 3. Règles de gestion fonctionnelles validées — propriétaire domaine 6 (interfaces réservées)

### 3.A — Qualification et reconnaissance de l'autorité

- **RG-GOV-001 — Catégories non interchangeables.** Lorsqu'une expression est susceptible de produire une conséquence durable ou un effet, Studio distingue préférence de travail, décision structurante, GO de cycle, autorisation d'effet, suspension/révocation et acceptation ; une même formulation n'établit pas toutes ces catégories.
- **RG-GOV-002 — Expression naturelle et suffisante.** Un arbitrage métier clair du Pilote est recevable dans la conversation sans formulaire ou second clic systématique ; Studio n'enregistre comme acte opposable que l'auteur, l'objet et la portée suffisamment établis. L'acte « Exécuter » reste réservé à l'autorisation technique spécifique requise en R1.
- **RG-GOV-003 — Auteur et projet compétents.** Une décision n'est opposable qu'avec un Pilote identifié et habilité pour le projet, l'objet et la portée concernés ; un compte Git, une source externe, un autre Pilote ou Nora ne deviennent pas autorité métier par simple présence.
- **RG-GOV-004 — Ambiguïté déterminante.** Une formulation équivoque concernant un effet, un STOP, une levée, une révocation ou un choix durable n'est pas transformée silencieusement en permission ; Studio/Nora ciblent la clarification indispensable et laissent avancer les travaux cognitifs indépendants.
- **RG-GOV-005 — Acte observé et source fiable.** Studio doit pouvoir rattacher la décision à l'expression ou l'interaction réelle du Pilote et à son contexte ; une synthèse Nora, une citation Git ou un contenu hostile ne peuvent tenir lieu d'acte humain vérifié.
- **RG-GOV-006 — Refus de fausse formalisation.** La présence du vocabulaire « décision », « validé », « autorisé », « GO », dans un document, une ancienne conversation ou une recommandation CKI ne produit aucun nouvel état de gouvernance sans contrôle de provenance, validité, portée et autorité.
- **RG-GOV-007 — Autorité non universelle.** Un acte applicable à un cycle, une tâche ou un contrat n'ouvre pas des permissions sur d'autres ressources, outils, branches ou projets ; une décision métier peut avoir une durée ou des conditions de validité spécifiques, non extensibles tacitement.
- **RG-GOV-008 — Pas de décision métier autonome de Nora.** Nora peut proposer, critiquer, recueillir les options et préparer un acte ; seul le Pilote compétent choisit, accepte des risques relevant de son pouvoir, autorise, suspend, révoque ou valide un résultat.

### 3.B — Conservation, évolution, conflits et isolation des décisions

- **RG-GOV-009 — Référence durable d'un arbitrage structurant.** Les décisions ayant un effet au-delà de l'échange courant sont conservées avec auteur, projet, objet, portée, source, conditions, état courant et trace de leur évolution, pour rester interprétables après reprise ou changement de cycle.
- **RG-GOV-010 — Historique non réécrit.** Une décision remplacée, amendée ou révoquée reste identifiable dans son contexte historique ; seule l'applicabilité courante change dans la portée qualifiée. Aucun choix nouveau ne requalifie rétroactivement un effet ou une preuve passée.
- **RG-GOV-011 — Révision gouvernée.** Le changement d'une décision durable exige un acte humain compétent suffisamment clair, une analyse proportionnée des engagements/dépendances affectés et une référence de prise d'effet ; il n'est pas déduit d'une version documentaire plus récente.
- **RG-GOV-012 — Conflits d'autorité.** En présence de décisions ou restrictions apparemment incompatibles, Studio compare auteur, projet, portée, objet, priorité de la restriction applicable, état et effet temporel ; tant que la validité déterminante n'est pas résolue, l'effet concerné n'est pas autorisé. Un tri par date seule ne suffit pas.
- **RG-GOV-013 — Délimitation et propagation bornées.** Une décision contraint seulement les objets, activités et effets dans sa portée effective ; les activités réellement indépendantes peuvent se poursuivre lorsque l'indépendance est étayée. L'incertitude sur une dépendance critique suspend l'effet potentiellement touché, pas le raisonnement général.
- **RG-GOV-014 — Isolation des projets individuels.** Les actes d'un projet Studio restent propres à son Pilote et à son projet ; un dépôt ou document Git partagé ne fusionne ni les états d'autorité, ni les mandats, ni les suspensions, ni les acceptations entre deux projets.
- **RG-GOV-015 — Contrainte supérieure applicable.** Le Pilote ne peut déroger par préférence, décision ou CKI à une restriction non dérogeable effectivement applicable ; l'acceptation d'un risque ne vaut pas contournement d'une interdiction de sécurité ou d'un contrôle légal/produit.
- **RG-GOV-016 — Reprise sans autorité inventée.** Après nouvelle session, interruption, indisponibilité d'une source ou changement de cycle, l'autorité courante doit pouvoir être requalifiée avant tout effet ; une mémoire reconstruite ou un message ancien ne justifient pas la reprise d'un mandat suspendu.

### 3.C — Suspensions, reprises et changements en cours de travail

- **RG-GOV-017 — Suspension humaine durable.** Une suspension explicitement décidée par le Pilote demeure opposable dans sa portée jusqu'à une levée humaine valable, même si Nora estime l'obstacle résolu, qu'un cycle change ou qu'une session redémarre.
- **RG-GOV-018 — Levée humaine contextualisée.** Une levée ou reprise après suspension nécessite un acte du Pilote compétent qui identifie suffisamment l'interdiction et l'objet levés ; elle ne rétablit pas mécaniquement les droits, contrats, accès ou conditions techniques devenus invalides.
- **RG-GOV-019 — Suspension humaine vs pause technique.** Une pause technique peut permettre une reprise sous mandat toujours valide après vérification ; elle ne lève jamais une suspension humaine. Le domaine 6 ne se substitue pas au domaine 7 pour constater la pause, le STOP effectif ou la reprise de l'exécuteur.
- **RG-GOV-020 — Interdiction des confirmations d'arrêt fictives.** Le domaine 6 conserve la demande humaine de STOP/revocation et applique l'interdiction aux effets encore contrôlables ; il ne prétend pas que l'exécuteur s'est arrêté ni que les effets produits ont été annulés sans retour effectif des domaines concernés.
- **RG-GOV-021 — Changement significatif de besoin.** Quand une décision modifie portée, risque ou dépendances, les effets affectés sont requalifiés avant poursuite ; les travaux indépendants n'exigent pas une nouvelle autorisation par principe. L'indépendance d'un effet risqué doit pouvoir être justifiée.
- **RG-GOV-022 — Révocation et opérations en cours.** Une révocation interdit les nouveaux effets concernés et est transmise aux responsabilités d'exécution ; l'état des opérations déjà engagées, leur interruptibilité et les compensations éventuelles sont déterminés séparément, sans rollback implicite.

### 3.D — Mandats d'effet et actes spécifiques

- **RG-GOV-023 — Proposition n'est pas permission.** Préparer une solution, un CKI, un contrat d'exécution ou une instruction technique n'autorise aucun effet ; une décision d'architecture ou de méthode ne remplace pas un mandat opérationnel.
- **RG-GOV-024 — Contrat inspecté et « Exécuter ».** Pour déclencher le travail technique délégué prévu par R1, le Pilote autorise explicitement via **« Exécuter »** un contrat compréhensible, inspecté et encore applicable, avec l'instruction technique exacte consultable. Le domaine 6 statue sur la validité de l'acte ; le domaine 7 possède le contrat, sa présentation fonctionnelle/technique et le déclenchement.
- **RG-GOV-025 — Liaison au bon périmètre.** L'autorisation d'exécution est reliée à l'identité du Pilote, au projet, à l'opération/ressource et à une version identifiable du contrat inspecté ; elle ne confère ni mandat illimité à Cursor ni droits Git déduits de la connexion Studio.
- **RG-GOV-026 — Requalification des changements matériels.** Si, entre inspection et effet, le contrat, son instruction, le risque, la cible, la portée ou les restrictions ont matériellement changé, l'autorisation précédente ne couvre pas le changement. Le domaine 7 sollicite le nouvel acte « Exécuter » lorsque la nouvelle opération doit être lancée ; le domaine 6 réévalue la validité et la portée du mandat.
- **RG-GOV-027 — Vérification actuelle avant effet.** Une autorisation humaine ne suffit pas : Studio réévalue restrictions, suspension, identité, mandat et conditions au moment de l'effet, avec attestations de capacités et permissions des propriétaires (7/9). Une lecture autorisée ne devient pas écriture autorisée.
- **RG-GOV-028 — Rejeu sans élargissement d'autorité.** Un clic doublé, une commande répétée ou une réponse perdue ne doivent pas autoriser un deuxième lancement ni élargir le mandat ; l'identité de l'acte et son applicabilité sont vérifiées avec le domaine 7, sans présumer l'état réel de la tentative.
- **RG-GOV-029 — GO de cycle distinct du contrat technique.** Une expression claire peut autoriser ouverture, clôture ou transition de cycle, y compris un GO combiné ; elle n'autorise pas par elle-même le déclenchement Cursor ni une mutation Git. Le domaine 5 possède l'état et les effets de transition.
- **RG-GOV-030 — Création de projet à acte explicite propre.** Une intention exprimée dans le sas ne crée pas automatiquement un projet : l'acte **« Créer le projet »** demeure requis conformément à R1, sous les conditions de compétence. Le domaine 2 exécute et vérifie l'effet de création.

### 3.E — Résultats, acceptation et frontières avec la méthode

- **RG-GOV-031 — Acceptation humaine distincte de conformité.** Le Pilote peut accepter, refuser, différer ou accepter des réserves dans sa compétence sur un résultat identifié ; cette décision ne certifie pas à elle seule la conformité, la preuve de tests, un merge Git ou `ADOPTED`.
- **RG-GOV-032 — Décision informée et résultat qualifié.** Une acceptation significative réfère à l'état du résultat et aux réserves réellement disponibles auprès du domaine 8 ; preuve absente ou incertaine doit être signalée. Le domaine 6 conserve l'acte humain, sans inventer les éléments probatoires.
- **RG-GOV-033 — Correction sous nouveau mandat.** Une correction spontanément préparée par Nora après revue reste **une proposition** ; toute nouvelle réalisation technique demande un contrat inspecté, l'acte « Exécuter » et les permissions applicables, même si elle semble rester dans la portée initiale.
- **RG-GOV-034 — Méthode et CKI non autorisants.** Une technique du CKI actif, une relation de la matrice, une estimation de maturité, un REX ou une nouvelle version de méthode ne deviennent jamais décision, gate ou autorisation. Le domaine 5 conserve l'état de méthode/cycle ; le domaine 6 n'impose aucun nouvel ordre de cycles.
- **RG-GOV-035 — Choix durable de méthode et autorité.** Un changement durable de méthode appliquée au projet n'est valide qu'après décision applicable du Pilote dans la portée concernée ; le domaine 5 conserve l'état versionné et l'historique. Une technique locale utilisée par Nora n'est pas une décision de méthode.
- **RG-GOV-036 — Interdiction de fabriquer une adoption.** Aucun acte de clôture de cycle, acceptation locale, résultat de tests, commit, merge, décision de méthode ou publication CKI ne signifie automatiquement adoption globale du produit ou levée de gates de gouvernance externes.

## 4. Parcours et scénarios fonctionnels de référence

Chaque cas propose un résultat observable à démontrer ultérieurement. Les identifiants sont **spécifiques à cette spec** et ne créent pas de nouveaux scénarios E2E R1.

### 4.A — Nominal et alternatives

| ID | Situation / événement | Résultat attendu | Règles couvertes |
| --- | --- | --- | --- |
| **PF-GOV-01** | Le Pilote dit « préfère un tableau » | Préférence prise en compte sans acte d'autorité durable ou droit technique | 001, 002, 006 |
| **PF-GOV-02** | « Je valide cette architecture pour ce projet » avec portée claire | Décision structurante attribuée au Pilote et au projet, historisée ; aucune exécution | 002, 003, 005, 009, 023 |
| **PF-GOV-03** | Le Pilote corrige un arbitrage antérieur | Nouvelle portée/prise d'effet conservées, ancienne décision traçable ; impacts qualifiés | 009, 010, 011, 013, 021 |
| **PF-GOV-04** | Le Pilote autorise oralement une ouverture de cycle identifiable | GO applicable reconnu ; domaine 5 vérifie/enregistre l'ouverture réelle ; pas de « Exécuter » | 002, 007, 029 |
| **PF-GOV-05** | GO combiné « clos le cadrage et ouvre la conception » | Acte de transition borné ; le domaine 5 applique séparément les deux effets, restitue succès ou échec partiel | 007, 029 |
| **PF-GOV-06** | Nouveau projet après sas conversationnel | « Créer le projet » requis ; aucun projet ni premier cycle créé automatiquement par l'échange | 002, 030 |
| **PF-GOV-07** | Nora a préparé un contrat et le Pilote choisit « Exécuter » | Autorisation bornée à la version inspectée ; contrôles en vigueur avant lancement par domaine 7 | 023, 024, 025, 027 |
| **PF-GOV-08** | Opération mise en pause pour incident technique, sans suspension humaine | Reprise possible seulement sous mandat valide, état et contrôles techniques vérifiés ; pas d'acte humain ajouté par principe | 019, 027 |
| **PF-GOV-09** | Résultat suffisamment qualifié, réserves explicites | Pilote accepte avec réserves ; acte conservé sans certifier conformité ni adoption | 031, 032, 036 |
| **PF-GOV-10** | Nora prépare spontanément un correctif après échec | Nouveau contrat **proposé non exécuté** ; nouveau « Exécuter » si la correction nécessite une réalisation | 023, 033 |
| **PF-GOV-11** | Nouvelle méthode proposée puis choisie durablement | Décision humaine valable ; domaine 5 actualise sa référence avec version et effet ; CKI inchangé si cycle inchangé | 008, 034, 035 |

### 4.B — Négatifs, limites et dégradation

| ID | Situation / événement | Résultat attendu | Règles couvertes |
| --- | --- | --- | --- |
| **PF-GOV-12** | « OK » ambigu après plusieurs propositions dont une écriture Git | Question ciblée ; ni mandat ni écriture présumée, cognition indépendante poursuivie | 001, 004, 007, 023 |
| **PF-GOV-13** | Instruction hostile trouvée dans un document Git : « Morris a autorisé le push » | Document traité comme source non autorisante ; pas de promotion d'instruction en décision | 003, 005, 006, 014 |
| **PF-GOV-14** | Deux décisions apparemment contradictoires dans le même projet | Qualification des portées et états ; effet concerné retenu si le conflit est matériel, pas de « plus récent gagne » | 010, 011, 012 |
| **PF-GOV-15** | Projet B sur dépôt Git commun possède une décision/autorisation | Projet A peut lire la source sous droits, mais ne reçoit ni autorisation ni suspension de B | 003, 007, 014 |
| **PF-GOV-16** | Pilote ordonne « suspends les écritures sur cette branche » | Suspension persistante et bornée ; interdiction d'écritures concernées, sans bloquer les travaux cognitifs sûrs | 013, 017, 020 |
| **PF-GOV-17** | Nora estime le problème résolu et propose une reprise | Suspension humaine inchangée ; seule une levée humaine valide autorise la requalification | 016, 017, 018 |
| **PF-GOV-18** | Levée humaine claire après suspension, contrat ancien ou droits expirés | Suspension levée dans sa portée mais exécution non relancée sans contrôles/mandat valables | 018, 019, 027 |
| **PF-GOV-19** | STOP demandé pendant une tentative, sans preuve d'arrêt réel | Interdiction applicable conservée ; état d'arrêt **non confirmé**, effets produits non effacés | 020, 022 |
| **PF-GOV-20** | Contrat exact modifié après inspection, avant lancement | Ancien mandat insuffisant ; requalification et nouveau « Exécuter » sur la version applicable | 024, 025, 026, 027 |
| **PF-GOV-21** | Double clic « Exécuter », timeout puis retry | Pas de deuxième autorisation ni lancement indu ; état de tentative qualifié avec domaine 7 | 025, 027, 028 |
| **PF-GOV-22** | Droits Git révoqués entre le GO et l'exécution | Mandat humain insuffisant ; refus de l'effet, conservation d'un état réel et d'un motif explicable | 015, 025, 027 |
| **PF-GOV-23** | Nouvelle exigence impacte une partie du travail, autres travaux indépendants vérifiables | Suspendre les effets potentiellement touchés, poursuivre les indépendants sous mandats valides | 013, 021, 022 |
| **PF-GOV-24** | Après redémarrage, décision ou suspension introuvable | Aucune autorité reconstruite de mémoire ; effets concernés limités, enquête ciblée, cognition non dépendante maintenue | 005, 016, 017, 027 |
| **PF-GOV-25** | CKI Sécurité, QA ou Release prescrit « doit être validé » | Guidance non substitutive ; vérifier seulement les obligations réelles provenant de règles/contrats compétents | 006, 015, 034, 036 |
| **PF-GOV-26** | Pilote accepte un résultat non prouvé ou demande « ADOPTED » | Distinguer acceptation de risque autorisée, preuve absente et gate produit éventuel ; pas de conformité ou adoption inventée | 008, 015, 031, 032, 036 |
| **PF-GOV-27** | Un document récent semble remplacer un choix durable du Pilote | Pas d'upgrade/autorité tacite ; révision seulement après acte valable, conservation historique | 005, 010, 011, 035 |
| **PF-GOV-28** | Un Pilote propose d'autoriser les effets d'un autre Pilote sur dépôt commun | Pas de transfert d'identité/projet/mandat ; vérifier les permissions propres et les autorisations séparées | 003, 007, 014, 025 |

### 4.C — Couverture et critères d'acceptation du domaine 6

- Chaque règle `RG-GOV-001..036` possède au moins un cas dans `PF-GOV-01..28` ; le contrôle mécanique de couverture figure dans le pack de revue locale.
- **R1 E2E 02 / 05 / 06 / 07** : GO de cycle vs lancement technique, acceptation de résultat vs preuve, ressources Git communes vs autorité individuelle ; **E2E 01** : « Créer le projet » sans cycle automatique ; **E2E 03/04** : travail cognitif naturel et mémoire non autorisante.
- Démontrer plus tard absence de permission implicite, de double lancement, de perte de suspension après reprise, de transfert d'autorité interprojets, de faux STOP et d'adoption fictive ; la preuve technique et la conception UX relèvent de R3–R6.
- Le domaine 6 ne transforme jamais ses décisions en mutations techniques sans contrôles actuels des domaines 2/5/7/9 ; ses registres d'autorité ne dupliquent pas la mémoire ni les événements d'exécution.

## 5. Revue de cohérence R1 / R2 / CKI et suivi des écarts

### 5.1. Matrice de compatibilité avec les contrats existants

| Source canonique | Sujet vérifié | Verdict documentaire / responsable de la suite |
| --- | --- | --- |
| **R1 §§2.7, 2.25, 2.29 ; E2E 01–07** | Pilote décide, Nora conseille, Studio applique, projet individuel, effet ≠ décision, GO cycle conversationnel ≠ « Exécuter » | **COMPATIBLE** : R1 ne prescrit ni runtime `HumanDecision` historique ni moteur d'autorité concurrent |
| **Nora v0.4 `RG-CONV-001..006`, `RG-APP-001..008`** | Compréhension cognitive et applicabilité contextuelle vs état de décision et contrôle opposable | **COMPATIBLE / propriétaire distinct** : Nora identifie, recommande et explique ; D6 statue sur identité/portée/validité ; pas de seconde validation systématique |
| **Nora v0.4 `RG-AUTH-001..005`** | Limite cognitive de l'autorisation, persistance humaine, changement de besoin, STOP observé | **COMPATIBLE** : D6 conserve/applique les actes, D7/8 observent l'état technique ; pas de duplicate de règles Nora |
| **Nora v0.4 `RG-METH-009..016`** | Choix durable, historique, version, révision et CKI | **COMPATIBLE** : D6 possède validité de la décision ; D5 conserve la méthode ; CKI n'impose aucune nouvelle méthode |
| **Connaissance v0.1 `RG-KNOW-001..015`** | Source, restitution, point ouvert, contradictions, reprise, accès à un autre projet | **COMPATIBLE** : D4 expose références/état ; D6 conserve autorité/mandat ; pas de deuxième registre « décisions » |
| **Trajectoire/cycles/CKI v0.1 `RG-TRJ-001..040`** | Un cycle actif, GO de transition, méthode persistée, CKI unique, maturité ≠ gate | **COMPATIBLE** : D6 valide GO/restrictions, D5 enregistre états de cycle/méthode, D3 recommande la maturité |
| **CKI Next v0.2 et matrice — CANDIDATE** | 15 spécialités autonomes, 50 relations informatives, exigences parfois formulées en impératifs | **COMPATIBLE SOUS FRONTIÈRE** : conseil spécialisé ≠ obligation, gate ou permission ; les fiches demeurent candidates, sans adoption runtime |
| **Domaines 1–2, 7–9 — futures specs** | Identité, création, contrat de lancement, permissions Git/Cursor, preuve et acceptation | **NON ÉVALUÉ** contre leurs specs inexistantes ; vérifier systématiquement en rédaction ultérieure |

### 5.2. Points de vigilance et actions de résolution

| Réserve | Qualification actuelle | Propriétaire et moment de résolution | Sortie attendue |
| --- | --- | --- | --- |
| **D6-01 — Acte décisionnel vs interprétation de Nora** | Frontière fonctionnelle définie ; pas de mécanisme technique adopté | **D1/D3/D6** en R2/R4 ; tests R5/R6 | Vérifier auteur réel, portée, état, extraction prudente et absence de décision fabriquée |
| **D6-02 — Suspension persistante vs arrêt technique** | Distinction fonctionnelle définie ; arrêt réel non observé | **D7** lors de sa spécification ; **R4–R6** | Contrats d'interruption/reprise, états partiels, impossibilité d'annoncer un arrêt non confirmé |
| **D6-03 — Autorisation « Exécuter » et contrat inspecté** | Règle R1 reprise ; format/identité d'artefact et atomicité non décidés | **D7** et **D9** en R2, UX R3, R4–R6 | Même contrat inspecté, instruction exacte, contrôle actualisé, pas de doublon ni élargissement |
| **D6-04 — Acceptation, réserves et obligations de preuve** | Frontière D6/D8 définie ; pas de verdict d'exécution Next | **D8** pendant R2, tests R5/R6 | Décision humaine visible, niveau probatoire indépendant, aucun `ADOPTED` tacite |
| **D6-05 — Identité GitHub / exécuteur / multi-Pilotes** | Isolation validée en R1 ; compatibilité implémentation non établie | **D1/D9/D7** en R2/R4, tests adversariaux R5/R6 | Permissions réelles, révocation, isolation des sessions Cursor, conflits Git sans transfert de droits |
| **D6-06 — Harmonisation CKC/CKI et légitimité de la guidance** | Terminologie historique dans R1/Nora ; corpus Next candidat | **D3/D5 + revue R2**, puis R4–R6 | Un seul concept cible, aucune régression des specs déjà validées ni mutation de contenu CKI en règle opposable |
| **D6-07 — Roadmap `main` historiquement obsolète** | **KNOWN GAP documentaire**, indépendant de cette spec | **Gouvernance du programme + Morris — mandat D2 séparé** | Mise à jour cohérente avec PR #639 et branche R2, sans anticiper PR/merge ou adoption |
| **D6-08 — Pouvoir d'accepter un risque et contraintes externes** | Limite conservatrice documentée : le Pilote n'annule pas les règles non dérogeables | **D6/D8/D9**, qualification des risques applicables en R2/R4 ; **Morris** si arbitrage nouveau | Distinguer acceptation métier autorisée, risque résiduel, contrôle obligatoire et droit d'effet ; pas de « GO universel » |

**Traitement obligatoire au fil de R2 :** ouvrir chaque future spec propriétaire en relevant les réserves dont elle porte l'interface ; les résoudre ou les qualifier avec source, action et propriétaire avant la consolidation R2. Pas de micro-cycle documentaire sans valeur. Une décision Morris n'est demandée que si deux comportements réellement incompatibles nécessitent un arbitrage produit ; une simple ambiguïté de documentation se corrige sous mandat adapté.

### 5.3. Conflits écartés et contradictions encore ouvertes

**Contradictions conceptuelles écartées au regard des sources examinées :** (1) GO conversationnel de transition vs « Exécuter » technique ; (2) Nora comprend une décision vs Studio l'applique ; (3) « un CKI par cycle » vs liberté cognitive sans cycle ; (4) matrice CKI vs trajectoire effective ; (5) suspension humaine vs pause technique ; (6) preuve technique vs acceptation humaine ; (7) projet individuel vs dépôt Git partagé. Ces frontières sont **cohérentes au niveau documentaire**, pas démontrées en runtime.

**Questions non closes :** mécanismes de reconnaissance/attribution et permissions, atomicité/reprise des effets techniques, état exact des tentatives, isolation multi-exécuteurs, contrôles d'acceptation de risque selon l'environnement, interfaces avec domaines 1–2 et 7–9 futurs. Elles ne constituent **pas** des contradictions entre deux specs validées tant que leur contrat propriétaire n'existe pas ; verdict d'interface : **NON ÉVALUÉ**.

## 6. Transfert R3–R6 et gate de validation

| Jalon | Conception ou preuve attendue, sans décision prématurée |
| --- | --- |
| **R2 — suite** | **Validation du contenu acquise et publication sur branche R2 autorisée par Morris** ; confronter aux domaines 7, 8, 9 puis 1/2 selon la trajectoire, résoudre les interfaces D6-01..08 |
| **R3 UX** | Rendre distincts accord de travail, arbitrage durable, acte « Créer le projet », contrat « Exécuter », suspensions, décision d'acceptation et échecs partiels, sans rituels multiples ni interfaces internes imposées |
| **R4 architecture** | Concevoir l'identité de l'acte, la portée, la persistance des états opposables, version du contrat inspecté, contrôles au moment de l'effet, idempotence, révocation, concurrence et limites des intégrations, sans moteur décisionnel parallèle |
| **R5 construction** | Intégrer avec contrats D5/D7/D8/D9 dans un lot vertical, synchroniser architecture/documentation, prouver les cas négatifs ciblés, vérifier reprise après perte de session et changement de droits |
| **R6 qualification** | Cas de conversation réels avec Nora, contrôle d'effet réel, arrêt demandé/confirmé, double clic, projets sur dépôt commun et permission révoquée ; différencier tests déterministes, navigateur et LIVE/REAL ; adoption uniquement sous décision dédiée |

**Critère de validation de contenu :** Morris valide le domaine 6 et ses frontières, en connaissance des réserves D6-01..08. Une `VALIDATED SPEC` n'implique ni la fermeture de toutes les interfaces futures, ni PR/merge, ni `BEHAVIOR PROVEN`/`ADOPTED`.

**Verdict : `DOMAINE 6 — DÉCISIONS ET GOUVERNANCE — v0.1 VALIDATED SPEC (Morris, 2026-11-02)` ; 36 règles `RG-GOV-001..036`, 28 scénarios `PF-GOV-01..28`, conformité R1/Nora/Connaissance/Trajectoire/CKI analysée, futures interfaces D1/D2/D7–D9 `NON ÉVALUÉES`, Next `N/A — NON IMPLÉMENTÉ`.**
