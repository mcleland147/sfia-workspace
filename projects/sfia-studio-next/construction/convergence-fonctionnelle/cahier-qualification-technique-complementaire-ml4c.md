# SFIA Studio Next — Cahier de qualification et de recette technique complémentaire ML4C

| Champ | Valeur |
| --- | --- |
| Date | 15 novembre 2026 (Europe/Paris) |
| Version | v0.1 — contenu validé par Morris le 15/11/2026 |
| Statut | **VALIDATED IN CONTENT BY MORRIS / DOCUMENTED** ; qualification et exécution **NOT RUN** |
| Périmètre | R5 — ML4C, qualification technique intégrée finale |
| Nature | Cahier complémentaire au cahier UAT validé ; aucune modification de ses 53 scénarios |
| Responsable des arbitrages | Morris |
| Exécuteur envisagé | Cursor, sous SFIA v2.6 et mandat ultérieur |
| Mode de publication | Document unique sur la branche documentaire UAT existante, sans PR ni merge |
| Finalité | Qualifier les moyens existants, exécuter les vérifications réalisables, instruire l'acceptation ML4C puis ML4D |

> **Statut précis :** Morris valide ce cahier et autorise sa publication documentaire bornée. Il **n'autorise pas encore** un cycle de tests Cursor, des mutations Git REAL, un correctif, une intégration dans main, l'acceptation ML4C, Gate C ou une promotion produit.

## 1. Objet, résultat et principes

Ce cahier cadre **un seul macro-lot de qualification technique complémentaire ML4C** pour les scénarios restés sans preuve UAT suffisante. Il ne constitue **ni une nouvelle campagne utilisateur complète, ni un chantier de développement ou de création d'outillage**.

Le résultat attendu est un dossier cohérent de preuves, de verdicts et de risques résiduels permettant à Morris de choisir entre :

- acceptation ML4C ;
- acceptation ML4C avec réserves explicitement assumées et conditions de sortie ;
- remédiation fonctionnelle prioritaire puis reprise ciblée.

**Principe directeur :** Cursor utilise uniquement les capacités, accès, contrats, suites de tests et environnements **déjà disponibles et autorisés**. Il ne développe pas de simulateur, moteur, administrateur, fixture, injecteur de panne, endpoint ni technologie supplémentaire pour rendre un test exécutable. Un test impossible en l'état reçoit **NON EXECUTABLE AS-IS / NOT PROVEN**, avec justification et qualification du risque. Cette limite ne supprime pas automatiquement l'exigence fonctionnelle.

La recette doit prouver les invariants et effets réels à hauteur des outils existants, **sans transformer une simulation SCRIPTED/DETERMINISTIC en preuve BROWSER/LIVE/REAL**.

## 2. Sources de vérité et références

### 2.1 Référentiel Git

Dépôt : **mcleland147/sfia-workspace**.

Sources à consulter et confronter depuis Git :

- projects/sfia-studio-next/governance/SEF.md ;
- projects/sfia-studio-next/governance/roadmap.md ;
- projects/sfia-studio-next/governance/decisions/ — trajectoire R5/ML4C/ML4D, Gate B, qualification sémantique Nora et autres décisions applicables ;
- projects/sfia-studio-next/construction/convergence-fonctionnelle/contrat-convergence-fonctionnelle-integree.md ;
- projects/sfia-studio-next/construction/convergence-fonctionnelle/cahier-recette-utilisateur-ml4c.md — **53 scénarios et oracles UAT d'origine** ;
- projects/sfia-studio-next/construction/convergence-fonctionnelle/journal-recette-utilisateur-ml4c.md — **observations, réserves et matrice vivante**, sur la branche documentaire dédiée ;
- code, architecture, tests, as-built et preuves du **candidat produit réellement qualifié** ;
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md et prompts/templates/sfia-cycle-execution-template.md — SFIA v2.6 ;
- Review Handoffs et packs existants, avec leur SHA et leur portée exacte.

**Ordre :** Git/preuves > décisions > documents > mémoire > hypothèses. Une observation n'est pas une décision ; un test sur main n'est pas une preuve sur un candidat local plus récent.

### 2.2 Situation contrôlée au cadrage

| Élément | Référence ou statut |
| --- | --- |
| main distant | 6cda86bde4aa450abb1d23eedd370a9004ddcbc1 |
| Branche de recette documentaire | docs/next-ml4c-uat-journal-20261112 |
| HEAD de branche lors du cadrage | ade6b6b0213b81b193d14a5688f74d824fe49bc8 |
| Candidat RECETTE Q4 déclaré | 11f7077edd08f1a0c680b6b920f20dbaf76c7bed |
| Build RECETTE Q4 déclaré | 0mTcR_VTrO_j6sIlW9Wdb |
| Runtime RECETTE déclaré | 127.0.0.1:3200 |
| PR produit #676 | OPEN / NON MERGED lors du dernier contrôle |
| Git local / worktrees / staged / untracked | **NON OBSERVÉ** ; à contrôler par Cursor |
| Runtime, session, ENV, secrets, DB actuellement disponibles | **NON OBSERVÉS** ; à contrôler par Cursor, sans divulguer les secrets |
| GitHub REAL mutations RECETTE | Déclarées désactivées dans le handoff Q4 ; à revérifier en lecture seule |

Les références ci-dessus identifient **un instantané**. Cursor devra établir le SHA/tree effectivement exécuté et l'absence de divergence avant de mobiliser les preuves.

## 3. Réconciliation des 53 cas du cahier UAT

| Qualification au 15/11 | Nombre | Portée |
| --- | ---: | --- |
| PASS Q4 | **12** | Tests sur 11f7077e, avec réserves explicites |
| PASS uniquement historiques | **16** | Tests antérieurs non rejoués Q4 |
| BLOCKED Q4 | **4** | Pas de PASS suffisant sur Q4 |
| BLOCKED historiques non rejoués Q4 | **21** | Pas de PASS suffisant consolidé |
| **Total** | **53** | **28 avec PASS UAT ; 25 à qualifier techniquement** |

**Les six FAIL historiques ont reçu un retest UAT Q4 positif** : S03-01, S04-01, S04-02, S04-04, S04-06 et S07-06. Ces retests ne ferment pas automatiquement les anomalies transverses ni les réserves de preuve. Aucun rejeu mécanique des 53 cas n'est demandé.

### 3.1 Liste fermée des 25 cas

- **S01 (1) :** S01-05.
- **S02 (1) :** S02-05.
- **S03 (2) :** S03-06, S03-07.
- **S04 (2) :** S04-03, S04-07.
- **S05 (7) :** S05-01, S05-02, S05-03, S05-05, S05-06, S05-07, S05-08.
- **S06 (8) :** S06-03, S06-04, S06-05, S06-06, S06-08, S06-09, S06-10, S06-11.
- **S07 (4) :** S07-01, S07-04, S07-05, S07-07.

Ces 25 identifiants sont une **matrice de qualification**, non l'obligation de réaliser 25 injections distinctes. Une même preuve peut étayer plusieurs scénarios, uniquement si chaque oracle est démontré séparément et que la traçabilité du candidat est conservée.

## 4. Frontières IN / OUT et responsabilités

### 4.1 IN

- Lire les sources, code et tests applicables, sans modifier le produit.
- Cartographier chaque cas vers les outils et preuves déjà existants.
- Qualifier l'exécutabilité **avant** la campagne.
- Exécuter seulement les scénarios préalablement qualifiés et autorisés.
- Réutiliser UNIT, PostgreSQL, API, navigateur et dispositifs déterministes existants à leur portée réelle.
- Tester les erreurs, conflits, currentness, droits, idempotence, ACK/rejeu et reprise seulement par des mécanismes disponibles et sûrs.
- Qualifier le niveau de preuve, les lacunes, les réserves et le risque résiduel.
- Préparer une recommandation d'acceptation ML4C argumentée pour Morris.

### 4.2 OUT — interdits sans nouveau GO

- Modifier le code, les schémas DB, migrations, tests produit, CI, architecture ou documentation normative.
- Créer un simulateur, moteur d'injection, proxy de panne, faux administrateur, fixture ad hoc, nouvelle API ou nouvelle infrastructure de test.
- Installer une technologie, ajouter un compte à privilèges, un fournisseur, des secrets ou modifier des permissions.
- Manipuler les données de la RECETTE utilisateur ou provoquer des effets métier non explicitement autorisés.
- Désactiver les gardes d'authentification, D6, pending, currentness, idempotence, Git ou isolation.
- Activer STUDIO_GITHUB_ALLOW_MUTATIONS ou produire des écritures GitHub REAL.
- Créer un commit/une PR produit, merger, modifier main, promouvoir, publier STABLE ou ADOPTED.
- Corriger un défaut découvert ou masquer un échec pour rendre la campagne « verte ».

**Responsabilités :** Morris décide des gates, permissions et acceptations ; ChatGPT cadre et revoit ; Cursor qualifie/exécute sous contrat SFIA v2.6 ; Studio et ses domaines conservent l'autorité et les effets ; le Pilote prend les décisions produit HumanDecision.

## 5. Déroulé du macro-lot et gates

### Phase A — Préflight d'exécutabilité, lecture seule

Cursor inspecte sans mutation :

1. repo/ref/base/HEAD/tree, worktrees, local staged/untracked et divergence avec main et la PR ;
2. candidat produit, build et runtime effectivement servis ;
3. état des suites UNIT/PG/API/Playwright existantes, fixtures et mécanismes de replay autorisés ;
4. accès et isolation des environnements DEV/E2E/RECETTE ;
5. capacité de constater les états persistés, IDs, clés, versions et résultats ;
6. couverture des contrôles d'accès, sessions, erreur, concurrence, supersession D6 et CKI ;
7. disponibilité des capacités Nora LIVE et Git REAL, **sans les déclencher** ;
8. présence de preuves antérieures et validité de leur SHA, lane, oracle et version ;
9. nettoyage/restauration possible par les mécanismes existants ;
10. limites de sécurité, d'accès et d'autorité.

Chaque cas reçoit une classe d'exécutabilité :

| Classe | Condition |
| --- | --- |
| **REUSE EXISTING PROOF** | Preuve suffisante déjà disponible et traçable |
| **EXECUTABLE AS-IS** | Outils, données isolées, permissions et oracle existants |
| **CONDITIONAL / GATE REQUIRED** | Faisable seulement après une précondition ou autorisation distincte |
| **NON EXECUTABLE AS-IS** | Nécessite un mécanisme nouveau, des droits absents ou une mutation interdite |
| **NOT QUALIFIED** | Sources ou situation insuffisantes pour conclure |

**Livrable de Phase A :** matrice exhaustive des 25 cas avec préconditions, dispositif actuel, preuve existante, lacune, oracle, faisabilité, risques, nettoyage et niveau atteignable. Ajouter l'impact potentiel sur les PASS UAT historiques.

**STOP absolu en fin de Phase A.** Remettre le rapport et demander un **GO Morris distinct** avant toute exécution de la Phase B. Ne pas transformer ce préflight en campagne technique anticipée.

### Phase B — Campagne technique intégrée, après GO

Exécuter dans **le même macro-lot** les preuves qualifiées, par familles mutualisées. Ne pas redécouper en 25 cycles, ne pas créer d'outillage et s'arrêter sur dépassement de mandat.

Le démarrage de Phase B requiert :
- revue du résultat Phase A ;
- périmètre, lane, candidats et jeux de données approuvés ;
- protections et remise en état qualifiées ;
- GO d'exécution Morris ;
- mandat **distinct et explicite** si un effet Git REAL était envisagé.

### Phase C — Consolidation et décision

Réconcilier les 25 cas et les preuves historiques des 53, qualifier les anomalies et risques, produire Review Pack/Handoff SFIA v2.6 puis proposer le gate d'acceptation **ML4C** à Morris. **ML4D** vient ensuite ; le **Gate C programme** reste ultérieur.

## 6. Catalogue détaillé des 25 cas

Les protocoles sont des **oracles candidats** rattachés au cahier UAT ; ils **ne prétendent pas** que les préconditions ou mécanismes sont disponibles. Cursor doit d'abord confronter chaque ligne aux sources et à l'implémentation réelle.

### S01 — Identité, session, refus, panne

#### S01-05 — Session expirée, accès refusé, panne technique

- **Préconditions :** authentification et contrôles de session existants, identités de test autorisées, observabilité serveur sans accès à des données privées.
- **Déroulé :** inventorier les cas déjà automatisés ; contrôler absence de session, expiration, accès à un projet étranger et panne de dépendance seulement quand un dispositif existant le permet.
- **Oracle :** données protégées non exposées ; réponse 401/403/404 appropriée selon le contrat ; panne technique non présentée comme défaut d'authentification ; absence de faux succès ou divulgation ; rendu UI cohérent lorsque testé.
- **Preuves :** réponse HTTP, statut fonctionnel, identité anonymisée, logs expurgés, absence de données, capture éventuelle.
- **NON EXÉCUTABLE :** si expiration/panne nécessite manipulation horloge, cookie fabriqué, sabotage infrastructure, compte administrateur ou injection inexistante.
- **Réserves :** A-001/A-002/A-004/A-005, ENV-R09 ; ne pas inférer leur clôture.

### S02 — D2 et idempotence

#### S02-05 — Perte d'ACK après création

- **Préconditions :** préparation/projet de test isolé, clé d'idempotence et résultat persisté observables, tests de rejeu déjà présents.
- **Déroulé :** reprendre le contrôle existant de commit réussi/réponse perdue ; rejouer la même clé par le mécanisme déjà offert.
- **Oracle :** un seul projet créé, ID stable, intention réconciliée, aucun doublon ni mutation parasite ; UNKNOWN traité honnêtement si applicable.
- **Preuves :** identifiants, clé, comptage DB avant/après, réponse réconciliée, assertion d'unicité.
- **NON EXÉCUTABLE :** si exige nouveau proxy de coupure ou injecteur d'ACK.

### S03 — Documents D4

#### S03-06 — AVAILABLE, FAILED, CONFLICT, UNKNOWN, NOT_EXECUTED

- **Préconditions :** tests du domaine D4 et moyens existants de produire/observer ces états sans modifier RECETTE.
- **Déroulé :** rapprocher branches testées et oracle UAT ; contrôler création, échec, version stale, non-exécution et réconciliation uniquement sur les états accessibles.
- **Oracle :** aucun document/révision fantôme, aucun faux AVAILABLE, conflit de version refusé, UNKNOWN jamais converti automatiquement en succès, réponse et état durable cohérents.
- **Preuves :** IDs, version, résultat, persistance, absence d'effet pour les cas négatifs, trace corrélée.
- **NON EXÉCUTABLE :** si un état nécessite modification DB artificielle ou ajout d'outil.

#### S03-07 — Continuum D2 → D4 sur un même candidat

- **Préconditions :** parcours API/E2E existant et isolé, création D2 explicite, action documentaire D4 prise en charge.
- **Déroulé :** conduire une intention jusqu'à l'unique projet autorisé, créer un document relié à ce projet, lire sa révision, reprendre.
- **Oracle :** un projet, bon rattachement D4, IDs distincts D2/D4, version persistée, pas d'effet automatique hors mandat et restitution honnête.
- **Preuves :** corrélation projet/document/révision, états avant/après, absence de double effet, résultat serveur et navigateur s'il existe.
- **NON EXÉCUTABLE :** si la chaîne requiert fixture RECETTE ou action non supportée.

### S04 — Décisions et CKI

#### S04-03 — Supersession D6

- **Préconditions :** mécanisme de décision D6 existant, autorité de test et contexte isolé.
- **Déroulé :** inspecter puis, si déjà faisable, enregistrer une décision applicable et une décision ultérieure remplaçante.
- **Oracle :** historique conservé, seule nouvelle décision applicable, ancienne décision non réactivée, restitution conforme au statut.
- **Preuves :** IDs, versions, relation de remplacement, résolution d'applicabilité, trace d'autorité.
- **NON EXÉCUTABLE :** s'il faut injecter artificiellement HumanDecision ou inventer un cycle.

#### S04-07 — CKI d'un cycle réellement actif

- **Préconditions :** cycle valide actif dans une lane autorisée et CKI consultable.
- **Déroulé :** relever cycle/état/CKI, interroger le chemin méthodologique existant, comparer conseil et source.
- **Oracle :** conseil applicable et sourcé, aucune fiche inventée, aucun gate ou HumanDecision automatique.
- **Preuves :** cycle/CKI, source, réponse Nora le cas échéant et absence d'effet.
- **NON EXÉCUTABLE :** si aucune instance active/CKI n'est accessible sans créer un dispositif nouveau.

### S05 — Pending et continuité (7 cas intégrés)

**Préconditions communes :** capacité pending réellement existante, action A de test isolée, identité/clé/état observables et contrôle d'autorité disponible. Distinguer une simple proposition conversationnelle d'un pending persistant.

#### S05-01 — A en attente

- **Déroulé :** engager A jusqu'au point d'attente par un chemin existant ; inspecter l'état durable.
- **Oracle :** A identifiable, pending non exécuté, valeur/version et identité récupérables.

#### S05-02 — B indépendant pendant A

- **Déroulé :** soumettre un échange indépendant B puis revenir à A.
- **Oracle :** B peut être traité sans modifier, autoriser, écraser ou perdre A.

#### S05-03 — Demande incompatible pendant A

- **Déroulé :** utiliser un cas existant de conflit de commande/intention.
- **Oracle :** refus, attente ou clarification explicite selon contrat ; aucun effet concurrent interdit.

#### S05-05 — Rafraîchissement pendant A

- **Déroulé :** recharger/reprendre par les interfaces déjà disponibles.
- **Oracle :** même ID, clé, currentness et état en attente ; aucune réinitialisation silencieuse.

#### S05-06 — Reprise de A après B

- **Déroulé :** revenir à A après traitement de B, puis poursuivre seulement avec l'autorité applicable.
- **Oracle :** A non dupliquée, contexte correct, absence d'autorisation implicitement accordée par B.

#### S05-07 — ACK perdu après OPEN_CYCLE

- **Déroulé :** utiliser exclusivement un test de lost ACK/replay déjà présent, avec clé d'origine.
- **Oracle :** un seul cycle ouvert, résultat réconcilié sans deuxième effet.
- **NON EXÉCUTABLE :** si injecteur réseau absent ou si l'état n'est pas observable.

#### S05-08 — Refus ou révocation de A

- **Déroulé :** utiliser le mécanisme autorisé de refus/révocation dans la lane de test.
- **Oracle :** interdiction d'exécution, état durable exact, restitution cohérente.

**Preuves communes S05 :** identités A/B, clés, versions, traces applicatives, éventuels comptages PG, assertions d'effet unique, état après refresh/reprise.

**STOP S05 :** aucune création de moteur pending, scheduler, compte de décision simulé ou dispositif artificiel d'ACK. Si A ne peut pas être constituée avec les contrats existants, qualifier chaque cas dépendant comme tel.

### S06 — Git documentaire gouverné (8 cas)

**Précondition générale :** séparer trois niveaux : inspection/préparation, preuves déterministes SCRIPTED, effet fournisseur GitHub REAL. Aucun des deux premiers ne prouve le troisième. Les garde-fous D6 sont impératifs.

#### S06-03 — Tentative sans HumanDecision applicable

- **Déroulé :** vérifier par tests existants le refus serveur d'un effet non autorisé.
- **Oracle :** aucune mutation Git, aucune fausse référence, refus explicite.
- **Preuves :** décision absente/non applicable, refus et absence d'effet.

#### S06-04 — Autorisation précise du geste

- **Déroulé :** comparer diff, document, révision, cible, branche et base au périmètre exact d'une HumanDecision de test existante.
- **Oracle :** autorisation bornée, aucune dérive du geste autorisé ; PREPARED ≠ EXECUTED.
- **Preuves :** empreinte inspection, IDs, HumanDecision, opération permise.

#### S06-05 — Publication documentaire REAL

- **Phase A :** vérifier uniquement sa faisabilité, les droits, l'isolation et les prérequis par lecture.
- **Phase B :** exécution REAL **interdite par défaut** ; elle réclamerait un GO Morris **distinct** désignant repo, branche, chemins, données, opérations, preuve et remise en état.
- **Oracle REAL si et seulement si autorisé :** branche, commit, PR éventuelle réellement produits et relus depuis GitHub, effet unique et aucune fusion.
- **Verdict sans mandat REAL :** **CONDITIONAL / GATE REQUIRED ; REAL NOT EXECUTED / NOT PROVEN**, même si des tests SCRIPTED passent.
- **Interdiction :** ne pas activer la variable de mutations ni créer de sandbox de sa propre initiative.

#### S06-06 — Changement matériel après autorisation

- **Déroulé :** dans les tests existants, varier la révision, cible ou HEAD après décision.
- **Oracle :** décision devenue inapplicable quand le geste change, requalification exigée, aucun effet silencieux.
- **Preuves :** avant/après de l'empreinte, refus et absence de mutation.

#### S06-08 — Conflit ou divergence HEAD

- **Déroulé :** reprendre la couverture existante stale-head/conflit.
- **Oracle :** refus/reconciliation conforme, aucune publication sur base obsolète.
- **Preuves :** SHAs comparés et état du geste refusé.

#### S06-09 — Lost ACK après publication

- **Déroulé :** réutiliser uniquement les tests idempotents déjà présents ; distinguer reproduction SCRIPTED et effet REAL.
- **Oracle :** aucune double publication, état réconcilié sous une même clé, références exactes.
- **Verdict REAL :** non prouvé sans mandat fournisseur et dispositif déjà disponible.

#### S06-10 — Merge GitHub interdit

- **Déroulé :** examiner l'interdiction dans code et tests, réexécuter uniquement les refus sans effet REAL.
- **Oracle :** jamais de merge autorisé, aucune mutation GitHub ; refus serveur plutôt que simple texte conversationnel.
- **Interdiction :** ne pas appeler un merge fournisseur réel pour « prouver » le refus.

#### S06-11 — Restitution fidèle des résultats

- **Déroulé :** comparer état du geste, trace provider et réponse Nora/application pour les chemins accessibles.
- **Oracle :** distinguer PREPARED, autorisé, EXECUTED, UNKNOWN, refusé ; aucun commit ou PR inventé ; réserve explicite si fournisseur non vérifié.
- **Preuves :** IDs, statut, référence Git vérifiable seulement lorsqu'elle existe, texte de restitution.

**STOP transversal S06 :** pas de changement des permissions, secrets, providers, branches ni flag REAL pour compléter les assertions. Les preuves SCRIPTED restent qualifiées comme telles.

### S07 — Cohérence intégrée (4 cas)

#### S07-01 — Parcours complet identité → projet → Nora → D4 → décision → Git

- **Préconditions :** chaîne existante, lane et données isolées, autorité applicable.
- **Déroulé :** raccorder les preuves E2E déjà disponibles, exécuter les jonctions réellement possibles.
- **Oracle :** continuité des identités et corrélations, pas de faux succès, décisions/gardes respectées, preuve de chaque effet.
- **Limite :** parcours Git déterministe ne vaut pas publication REAL ; sans GO, l'E2E REAL demeure NOT PROVEN.

#### S07-04 — États négatifs et reprise

- **Déroulé :** réutiliser les preuves S01/S03/S05/S06 et parcours erreurs déjà présents.
- **Oracle :** loading, refus, conflit, erreur, UNKNOWN et reprise distingués ; aucune mutation cachée ni succès inventé.
- **Limite :** pas d'injection ad hoc de panne.

#### S07-05 — Isolation de deux Pilotes

- **Préconditions :** identités de test et données compartimentées, droits applicables.
- **Déroulé :** vérifier l'accès croisé aux projets, documents, décisions et dépôts par les suites existantes.
- **Oracle :** aucune fuite, aucun accès ou mandat inter-Pilote, refus appropriés.
- **Limite :** tests PG/SCRIPTED ne prouvent pas à eux seuls les droits GitHub REAL.

#### S07-07 — Reprise d'action après autre parcours

- **Déroulé :** mutualiser un cas pending S05, effectuer une autre activité autorisée puis revenir à l'action.
- **Oracle :** même action, même clé, currentness et autorité préservées, reprise transactionnelle sans doublon.
- **Preuves :** IDs corrélés, états durables, traces de replay et effet unique.

## 7. Stratégie de couverture et ordonnancement de Phase B

L'ordonnancement proposé, à confirmer par Cursor en Phase A :

| Bloc | Scénarios principaux | Contrat transverse |
| --- | --- | --- |
| A — identité | S01-05, S07-05 | sessions, refus, isolation |
| B — D2/D4 | S02-05, S03-06/07 | transactions, versions, ACK, vérité |
| C — D6/CKI | S04-03/07 | décision applicable, source et non-autorité Nora |
| D — pending | S05-01/02/03/05/06/07/08, S07-07 | continuité, conflit, replay, révocation |
| E — Git | S06-03/04/05/06/08/09/10/11 | D6, permissions, courant, fournisseur |
| F — E2E/erreurs | S07-01/04 | cohérence et absence de faux succès |

Les preuves peuvent être mutualisées **sans confondre** leurs oracles. Les retests historiques sont préservés sur leur SHA et leur lane ; aucun objectif artificiel de 53 PASS n'est imposé.

## 8. Format de preuve et verdicts

Pour chaque scénario, inscrire au minimum :

| Champ | Contenu requis |
| --- | --- |
| ID et source | Scénario UAT, référence de contrat et oracle exact |
| Candidat | Git SHA/tree, BUILD_ID lorsqu'applicable |
| Lane/fournisseur | UNIT, PG, API, DEV BROWSER, RECETTE, LIVE, SCRIPTED ou REAL |
| Préconditions | Vérifiées / non vérifiées et source du constat |
| Méthode | Test/parcours existant, commande et autorisation |
| Assertions | États avant/après, versions, IDs, clés, nombre d'effets |
| Verdict technique | PASS, FAIL, BLOCKED, NOT RUN ; portée explicitée |
| Niveau de preuve | SOURCE REVIEWED, COVERAGE VERIFIED, DETERMINISTIC BEHAVIOR PROVEN, BROWSER PROVEN ou LIVE/REAL PROVEN selon preuve |
| Trace | Sortie de test, logs expurgés, référence de commit, preuve navigateur |
| Risque et dette | Réserve, gravité, dépendance, condition d'exit |

**Règles :**
- Un test existant mais **non exécuté** sur le candidat n'est pas un PASS du candidat.
- Un test SCRIPTED ne démontre pas l'effet fournisseur REAL.
- Un verdict UAT historique ne devient pas rétroactivement un PASS Q4.
- Une lecture statique ne prouve pas un comportement runtime.
- Une erreur réellement observée demeure FAIL, sans changement opportuniste de l'oracle.
- Une preuve manquante demeure NOT PROVEN, même si le comportement paraît probable.

## 9. Non-exécutabilité, risques et anomalies

Si un cas n'est pas démontrable sans nouveau dispositif :

1. citer la précondition manquante et le mécanisme tenté ou inspecté ;
2. montrer qu'aucun outil existant ne satisfait l'oracle ;
3. classer **NON EXECUTABLE AS-IS / NOT PROVEN** ;
4. préserver les preuves partielles sans les surclasser ;
5. qualifier l'impact utilisateur, sécurité, intégrité ou gouvernance ;
6. proposer un exit sans implémenter de solution ;
7. soumettre l'acceptation du risque à Morris.

Une condition d'exit peut relever d'un lot ultérieur si le risque est acceptable ; elle peut aussi bloquer l'acceptation si elle porte sur une garantie critique. L'impossibilité d'exécuter un test ne signifie ni défaut produit prouvé, ni conformité acquise.

Le registre A-001 à A-014 et les réserves complémentaires restent ouverts/clos **uniquement selon les preuves et décisions existantes**. En particulier :

- A-002 : expiration de session non suffisamment prouvée ;
- A-004 : contrôles DEV visibles en RECETTE ; ne pas inférer un bypass ;
- A-005 : doute sur comportement cross-user ;
- A-011 : mémoire/provenance malgré retests partiels positifs ;
- A-014 : marqueurs et duplication de titre dans une révision D4 ; inspection possible, **publication du contenu concerné à arbitrer avant écriture** ;
- S06-01/S06-07 : droits et preuves REAL avec réserves ;
- ENV-R09 : isolation cookies/sessions multi-lanes non vérifiée.

**Aucun correctif ne fait partie de la campagne de qualification.** Un défaut découvert reçoit : scénario, version, attendu/observé, reproductibilité, sévérité, risque, blast radius, hypothèse distincte de la cause démontrée et recommandation de gate.

## 10. Livrables et critères de sortie

La sortie du **macro-lot unique** requiert :

1. Préflight de Phase A, matrix 25/25, classement et justification de faisabilité.
2. GO Morris consigné avant Phase B.
3. Résultats exécutables selon dispositifs existants, preuve par SHA/lane.
4. Non-exécutables identifiés avec raisons et risques.
5. Réconciliation des 25 avec les 28 PASS historiques, donc vue complète des **53 cas** sans addition abusive de versions.
6. Contrôles transverses autorité/sécurité/idempotence et absence de faux succès.
7. Synthèse des anomalies, réserves, niveaux de preuve, dette et exits.
8. Review Pack et Review Handoff SFIA v2.6 selon le contrat d'exécution choisi.
9. Revue ChatGPT puis recommandation motivée d'acceptation à Morris.

**Gate final ML4C : décision Morris**, non décision Cursor. Un FAIL majeur, un défaut de sécurité ou une absence de preuve critique peut entraîner un report ou une correction ciblée. Des BLOCKED non critiques peuvent être assumés comme réserves explicites.

### Trajectoire programme

**ML4C qualification → acceptation éventuelle par Morris → ML4D convergence UX/UI → Gate C programme → ML5 Cursor → R6.**

**Aucun GO produit, modification Git REAL, promotion STABLE, release ou statut ADOPTED n'est contenu dans ce cahier.**

---

**Fin — Cahier complémentaire ML4C v0.1, contenu validé par Morris, campagne NON EXÉCUTÉE.**
