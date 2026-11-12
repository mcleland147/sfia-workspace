# SFIA Studio Next — Cahier de recette utilisateur ML4C

**Version :** 0.1 — validée en contenu par Morris le 12 novembre 2026\
**Date :** 12 novembre 2026\
**Statut :** VALIDATED CONTENT BY MORRIS — RECETTE UTILISATEUR NOT RUN\
**Programme :** R5 — ML4C, convergence fonctionnelle intégrée\
**Responsable de la réception :** Morris\
**Périmètre :** Capacités ML1–ML4, scénarios S01–S07 du contrat CP2\
**Git :** branche documentaire candidate `docs/next-r5-ml4c-cp2-preparation-20261111` ; **non mergée dans main**.

---

## 1. Objet et objectif de réception

Ce cahier organise la réception fonctionnelle de SFIA Studio Next sur le candidat ML4C.

Il cherche à déterminer si le Pilote peut effectivement :

1. Accéder à ses projets, les retrouver et naviguer sans ambiguïté.
2. Créer un projet et reprendre une opération interrompue sans doublon.
3. Produire et réviser des documents avec Nora, en obtenant une restitution fidèle des effets réalisés.
4. Bénéficier d'une mémoire et d'un raisonnement pertinents, respectant la provenance des connaissances et les décisions actuelles.
5. Continuer à dialoguer pendant une opération en attente, sans perdre ni contourner celle-ci.
6. Préparer, autoriser et publier un document dans GitHub avec des preuves réelles et une gouvernance humaine.
7. Réaliser un parcours cohérent de bout en bout dans une application utilisable.

Les sept familles de scénarios forment **une seule réception ML4C**.

Une réussite technique isolée ne vaut pas acceptation fonctionnelle du produit.

## 2. Identité du candidat

| Élément | Référence |
|---|---|
| Produit | SFIA Studio Next |
| Environnement | RECETTE existante |
| Adresse | http://127.0.0.1:3200 |
| Git produit | `mcleland147/sfia-workspace` |
| PR | #676 — non fusionnée |
| Commit candidat | `2416e2ee25662821b015407346c64ec204f67488` |
| Tree | `88c05766afa04355f5fbb63dcda603686a3f11a6` |
| BUILD_ID | `qB8JvXfdL7FMOFYMf31kL` |
| PostgreSQL RECETTE | `sfia_next_recette_ml4` — port 5434 |
| Schéma | `012_auth_concurrency_safety` |
| Nora | OpenAI Agents SDK LIVE — deux échanges de smoke réussis |
| GitHub | App RECETTE 5677465 / installation 180092114 |
| Dépôt Git autorisé | `mcleland147/chantiers360` |
| Git REAL READ | PROVEN |
| Git REAL documentary WRITE | CONFIGURED — NOT RUN |
| OAuth navigateur | CONFIGURED — nouveau callback interactif NOT RUN |
| Version | `0.0.0-dev` — NO RELEASE |

**Règle de campagne :** tous les résultats doivent concerner ce même candidat. Une modification du code ou une nouvelle bascule de build impose de requalifier les preuves affectées.

## 3. Préconditions et règles d'exécution

### 3.1 Avant la première session

- Utiliser le profil navigateur RECETTE dédié.
- Vérifier que l'adresse et le build correspondent au manifeste.
- Effectuer la connexion GitHub OAuth interactive avec le compte de test autorisé.
- Vérifier l'identité du Pilote et le portefeuille réellement accessible.
- Choisir un projet existant de référence et créer un projet de recette dédié pour les scénarios mutatifs.
- Relever l'état initial des projets, documents, décisions et cycles concernés.
- Ne pas réutiliser les données DEV ou les identités d'un autre Pilote comme fixtures.

### 3.2 Actions LIVE et REAL

Nora doit être sollicitée en **LIVE** pendant les tests cognitifs et documentaires. Les réponses scriptées ou fixtures ne constituent pas des preuves de ces scénarios.

La lecture Git s'effectue via le fournisseur **REAL**.

Toute écriture documentaire Git REAL exige, avant exécution, un GO Morris spécifique précisant le dépôt, la branche de test, les chemins et les opérations autorisées. Les contrôles applicatifs HumanDecision restent obligatoires et ne sont jamais remplacés par ce GO externe.

La création d'une branche, d'un commit ou d'une PR de test n'autorise jamais son merge.

### 3.3 Données et opérations protégées

- Les tests doivent privilégier des projets et documents synthétiques identifiables.
- Les suppressions, révocations et modifications de droits doivent être testées uniquement avec des identités et ressources de recette maîtrisées.
- Les scénarios de perte réseau ou d'ACK nécessitant une injection de panne doivent utiliser un dispositif de test explicitement autorisé ; ils ne doivent pas perturber arbitrairement un parcours utilisateur.
- Aucun nettoyage de la base DEV, de la RECETTE existante ou du dépôt Git n'est implicite.
- Chaque anomalie est conservée avec son contexte, sans correction silencieuse pendant la campagne.

## 4. Format de preuve et verdict

Pour chaque cas, consigner :

| Champ | Contenu |
|---|---|
| ID scénario | Identifiant stable du cas |
| Date et Pilote | Session de recette |
| Build / SHA | Version réellement testée |
| Projet / ressource | Identifiant ou référence non sensible |
| Demande / geste | Action exacte effectuée |
| Attendu | Comportement contractuel |
| Observé | Comportement réel |
| Preuve | Capture, extrait non secret, ID d'effet, révision, réponse API ou référence Git |
| Verdict | PASS / FAIL / BLOCKED / NOT RUN |
| Anomalie | Référence, sévérité, propriétaire et condition de sortie |

**PASS** signifie que l'attendu a été observé avec une preuve suffisante. **BLOCKED** signifie que le test n'a pas pu être mené à terme pour une cause documentée. **NOT RUN** signifie qu'il n'a pas été exécuté.

Un résultat `UNKNOWN` dans l'application n'est pas automatiquement un FAIL : il faut vérifier s'il est correctement signalé et récupérable.

---

## 5. S01 — Accès, cockpit et portefeuille

**Objectif :** accéder uniquement aux projets autorisés et retrouver le bon contexte avec des informations fiables.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S01-01 | Ouvrir Studio en RECETTE et se connecter avec GitHub OAuth | Authentification effective, identité correcte, aucun contournement de session |
| S01-02 | Consulter le portefeuille des projets et préparations | Éléments autorisés uniquement ; intitulés et états correspondant aux données réelles |
| S01-03 | Ouvrir un projet existant, changer de vue, revenir et rafraîchir | Même projet retrouvé ; contexte et conversation conservés |
| S01-04 | Revenir sur un sas de création encore ouvert | Préparation retrouvée sans projet artificiellement déclaré créé |
| S01-05 | Examiner les états d'erreur : session expirée, accès interdit, panne technique | Messages distincts et cohérents ; pas de faux `401` ou faux succès |
| S01-06 | Vérifier un accès croisé avec une autre identité de recette autorisée | Aucun accès indu aux projets personnels d'un autre Pilote |

**Preuves attendues :** capture navigateur, identité de session non sensible, données portefeuille, identifiant du projet, actualisation réussie et refus d'accès contrôlé.

**Critère de sortie S01 :** le Pilote sait où il se trouve, ce à quoi il a droit et quel projet est réellement ouvert.

**Statut initial : NOT RUN.**

---

## 6. S02 — Sas et création de projet récupérable

**Objectif :** créer un projet unique à partir d'une décision explicite, sans perdre les éléments préparatoires ni démarrer d'autres opérations par effet de bord.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S02-01 | Décrire à Nora un projet de recette et avancer dans le sas | Intention et informations préparatoires conservées |
| S02-02 | Demander et autoriser explicitement la création | Un seul projet réel créé ; ouverture du bon projet |
| S02-03 | Vérifier le projet immédiatement après création | Aucun cycle, dépôt Git ou travail Cursor démarré automatiquement |
| S02-04 | Rafraîchir et revenir au projet créé | Conversation, proposition et informations conservées |
| S02-05 | Simuler une perte d'ACK après création effective, via un dispositif contrôlé | Même intention réconciliée ; projet existant retrouvé ; aucun doublon |
| S02-06 | Provoquer un refus ou conflit maîtrisé | Résultat exact présenté, sans création fictive ni nouvelle mutation silencieuse |

**Preuves attendues :** ID projet, identité de l'intention, état du sas, nombre de créations, traces d'idempotence, screenshots avant/après.

**Critère de sortie S02 :** une action interrompue peut être reprise sans perdre ses informations et sans créer un deuxième projet.

**Statut initial : NOT RUN.**

---

## 7. S03 — Production documentaire et vérité des effets

**Objectif :** vérifier que Nora et Studio présentent exactement ce qui a été réalisé dans les documents persistés.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S03-01 | Demander à Nora de rédiger un document de cadrage à partir du projet | Contenu pertinent ; document enregistré uniquement selon le contrat applicable |
| S03-02 | Ouvrir le document dans la bibliothèque | Document réel, identifiant et version consultables |
| S03-03 | Demander une révision explicite du document | Nouvelle révision enregistrée ; historique cohérent |
| S03-04 | Comparer la réponse Nora avec la bibliothèque après écriture | Aucune contradiction entre narration, effet enregistré et état du document |
| S03-05 | Interrompre puis reprendre après une écriture confirmée | Aucune réécriture inutile ; résultat initial retrouvé |
| S03-06 | Examiner un échec, conflit ou résultat inconnu contrôlé | Distinction correcte entre AVAILABLE, FAILED, CONFLICT, UNKNOWN et NOT_EXECUTED |
| S03-07 | Créer un projet puis demander un document dans sa continuité | D2 et D4 correctement distingués ; la création du projet ne prouve pas à elle seule la réussite du document |

**Preuves attendues :** ID document, ID révision, contenu enregistré, état D4, message Nora durable, corrélation avec l'effet et captures navigateur.

**Critère de sortie S03 :** Nora ne doit ni nier un enregistrement effectivement confirmé, ni annoncer comme enregistré un document dont l'effet ne l'est pas.

**Statut initial : NOT RUN.**

---

## 8. S04 — Mémoire, raisonnement et pertinence cognitive

**Objectif :** évaluer Nora comme véritable partenaire de conduite du projet, et non comme un moteur de recherche fondé uniquement sur la proximité lexicale.

La réserve S04 demeure **DOCUMENTED / INCOMPLETE**. Ces tests visent précisément à mesurer la qualité réellement obtenue.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S04-01 | Établir une contrainte importante, traiter plusieurs autres sujets, puis la reformuler | Nora retrouve l'information utile malgré le changement de vocabulaire |
| S04-02 | Demander pourquoi une orientation antérieure a été retenue | Réponse fondée sur les éléments effectivement présents et sur leur contexte |
| S04-03 | Enregistrer une décision, puis une décision ultérieure qui la remplace dans un périmètre maîtrisé | Nora distingue l'ancienne orientation de la décision actuellement applicable |
| S04-04 | Fournir deux sources contradictoires | Nora expose la contradiction, les dates, la provenance et l'incertitude |
| S04-05 | Demander une recommandation sur un choix complexe | Nora compare des options, expose des risques et évite de présenter sa recommandation comme une décision |
| S04-06 | Réouvrir le projet après interruption et interroger Nora sur les points ouverts | Continuité utile sans obligation de répéter tout l'historique |
| S04-07 | Demander un conseil méthodologique associé au cycle réellement actif | CKI pertinent au contexte, sans décision, gate ou mandat automatique |
| S04-08 | Interroger Nora sur un document ou contexte auquel le Pilote n'a pas accès | Aucun contenu interdit restitué ni réutilisé comme source autorisée |

**Critères d'évaluation qualitative :**

- Pertinence des informations sélectionnées.
- Compréhension des reformulations.
- Fraîcheur et autorité des décisions.
- Capacité de raisonnement et de contradiction constructive.
- Exactitude des sources et transparence des incertitudes.
- Continuité entre plusieurs échanges.
- Clarté et utilité de la réponse pour décider ou progresser.

**Preuves attendues :** demandes exactes, réponses complètes, références de sources, décisions et dates, analyse qualitative Morris. Ne pas transformer une réponse plausible sans source en résultat prouvé.

**Critère de sortie S04 :** le Pilote constate une aide cognitive réellement pertinente sur des cas représentatifs. Les limites doivent être identifiées, pas masquées.

**Statut initial : NOT RUN.**

---

## 9. S05 — Continuité pendant une action en attente

**Objectif :** autoriser le dialogue indépendant sans perdre une action métier ni contourner les protections de concurrence et d'autorité.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S05-01 | Placer une opération métier A en attente d'une décision ou d'une reprise | Pending identifiable et conservé |
| S05-02 | Pendant A, poser une question indépendante B à Nora | Nora peut répondre à B si l'indépendance est établie ; A reste intact |
| S05-03 | Pendant A, demander une autre mutation incompatible | Nouvelle action refusée ou différée explicitement |
| S05-04 | Employer une formulation ambiguë ou un impératif non reconnu | Aucune assimilation automatique à un dialogue indépendant autorisant un contournement |
| S05-05 | Rafraîchir le navigateur pendant A | A demeure récupérable avec ses identifiants et clés |
| S05-06 | Reprendre A après réponse COMPLETE à B | A reprend ou se réconcilie sans duplication d'effet |
| S05-07 | Rejouer CR-02 avec ACK perdu après OPEN_CYCLE, via injection maîtrisée | Bannière de reprise, même clé, un seul cycle réellement ouvert |
| S05-08 | Refuser ou révoquer une autorisation en attente | Aucun effet interdit exécuté ; état correctement restitué |

**Preuves attendues :** ID de l'action A, clé de commande, état avant/après B, captures, événements serveur, nombre d'effets et état après rafraîchissement.

**Critère de sortie S05 :** Nora peut poursuivre une discussion sans effacer ni exécuter une action incompatible. Une ambiguïté ne devient jamais une autorisation implicite.

**Statut initial : NOT RUN.**

---

## 10. S06 — Publication documentaire Git gouvernée

**Objectif :** vérifier le parcours réel document Studio → inspection → décision humaine → opération Git → preuve → restitution.

**Gate préalable obligatoire :** GO Morris REAL documentaire, borné à une branche de test, des chemins et des opérations explicitement définis.

Le dépôt autorisé `mcleland147/chantiers360` ne doit pas être considéré automatiquement comme un dépôt jetable. Identifier une branche et un chemin d'essai sans risque pour ses travaux existants.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S06-01 | Connecter et consulter le dépôt autorisé | Identité du dépôt, permissions, branche et HEAD réels correctement lus |
| S06-02 | Sélectionner un document Studio et préparer une publication | Document et révision exacts ; cible et diff inspectables |
| S06-03 | Demander une publication sans HumanDecision applicable | Refus de l'effet ; aucune mutation Git |
| S06-04 | Examiner le diff puis autoriser précisément l'opération | Décision humaine applicable à la révision, à la cible et au geste proposé |
| S06-05 | Exécuter la publication documentaire autorisée | Branche, commit et éventuellement PR réels, avec références relues auprès de GitHub |
| S06-06 | Modifier le document, la cible ou la base après l'autorisation | Réévaluation et nouvelle autorisation lorsque la matérialité du geste change |
| S06-07 | Utiliser un dépôt étranger, une permission insuffisante ou révoquée | ACCESS_DENIED / refus approprié, aucune mutation interdite |
| S06-08 | Introduire une divergence HEAD ou un conflit maîtrisé | Pas de publication silencieuse sur une base obsolète |
| S06-09 | Simuler une perte d'ACK après une publication réelle autorisée, avec dispositif validé | Réconciliation sans deuxième publication non autorisée |
| S06-10 | Demander à Studio de fusionner une PR GitHub | Refus effectif ; merge REAL toujours interdit |
| S06-11 | Demander à Nora de restituer le résultat de publication | Branche, commit, PR, statut et limites annoncés conformément aux preuves |

**Preuves attendues :** ID document/révision, diff inspecté, HumanDecision, autorité effective, SHA base, SHA commit, référence branche/PR, relecture GitHub, captures de l'interface, résultat Nora.

**Critère de sortie S06 :** une publication Git réelle peut être effectuée sous mandat borné, sans permission implicite, sans double effet et avec une restitution fidèle.

**Statut initial : NOT RUN.**

---

## 11. S07 — Régression intégrée et expérience utilisateur

**Objectif :** vérifier une application cohérente de bout en bout, au-delà des validations locales de chaque domaine.

| ID | Scénario et action Pilote | Résultat attendu |
|---|---|---|
| S07-01 | Effectuer le parcours complet : connexion → projet → Nora → document → décision → publication gouvernée | Continuité des informations, identités et résultats entre toutes les étapes effectivement disponibles |
| S07-02 | Naviguer entre cockpit, projet, conversation, documents, décisions et trajectoire | Écrans cohérents, liens fonctionnels, états non contradictoires |
| S07-03 | Revenir après fermeture de session ou rafraîchissement | Bon projet, bon contexte, documents et décisions retrouvés |
| S07-04 | Examiner les états loading, refus, conflit, erreur, UNKNOWN et reprise | Messages compréhensibles, actions possibles et absence de faux succès |
| S07-05 | Vérifier les droits entre deux identités de test | Isolation des projets personnels et accès aux dépôts Git selon permissions réelles |
| S07-06 | Examiner les écrans fonctionnels modifiés pendant ML4C | Pas de régression UX bloquante ; écarts visuels notés séparément pour ML4D |
| S07-07 | Reprendre une action incomplète après avoir effectué un autre parcours | Conservation de l'état durable, absence de doublon et continuité métier |

**Preuves attendues :** parcours navigateur, observations Pilote, états persistés, captures ciblées, traces applicatives et références Git éventuelles.

**Critère de sortie S07 :** l'application fonctionne comme un ensemble cohérent et les limitations encore présentes sont clairement identifiées.

**Statut initial : NOT RUN.**

---

## 12. Ordre de campagne recommandé

| Séquence | Famille | Raison |
|---|---|---|
| 0 | Préflight RECETTE, build, identité et données de test | Établir une référence fiable |
| 1 | S01 | Confirmer l'accès et le contexte utilisateur |
| 2 | S02 | Créer un projet de travail maîtrisé |
| 3 | S03 | Produire des documents réels avec Nora |
| 4 | S04 | Tester mémoire, raisonnement et décisions |
| 5 | S05 | Tester la continuité sous attente et interruption |
| 6 | S06 | Tester Git REAL sous GO documentaire distinct |
| 7 | S07 | Rejouer le parcours intégré et qualifier l'UX |

Cet ordre est une trajectoire de réception, pas sept validations de développement indépendantes. Un blocage avéré peut conduire à réordonner des cas sûrs, sans transformer les tests non exécutés en PASS.

## 13. Gestion des anomalies

Chaque anomalie est enregistrée avec :

**Identifiant — scénario — gravité — constat — attendu — preuve — SHA/build — propriétaire — impact — condition de correction — retest.**

Classes :

- **Bloquante :** impossibilité de poursuivre un parcours essentiel, perte de données, autorité contournée, effet interdit ou reprise irrécupérable.
- **Majeure :** résultat métier erroné, contradiction entre effet et restitution, erreur de continuité, défaut cognitif significatif.
- **Mineure :** problème localisé sans rupture essentielle, avec contournement acceptable.
- **Amélioration UX :** préférence ou défaut visuel non bloquant à qualifier pour ML4D.

Les anomalies ne sont corrigées ni masquées pendant la recette sans décision explicite sur le candidat et le périmètre de correction.

## 14. Matrice initiale de réception

| Famille | État avant campagne | Verdict Morris |
|---|---|---|
| S01 — Accès et portefeuille | NOT RUN | PENDING |
| S02 — Création et reprise | NOT RUN | PENDING |
| S03 — Documents et vérité des effets | NOT RUN | PENDING |
| S04 — Cognition et mémoire | NOT RUN ; réserve INCOMPLETE | PENDING |
| S05 — Pending et dialogue indépendant | NOT RUN | PENDING |
| S06 — Git documentaire REAL | WRITE NOT RUN | PENDING |
| S07 — End-to-end et UX fonctionnelle | NOT RUN ; couverture globale PARTIAL | PENDING |

**Verdicts possibles de campagne :**

- ACCEPTED — au périmètre effectivement démontré.
- ACCEPTED WITH RESERVES — réserves explicites, non bloquantes et gouvernées.
- NOT ACCEPTED — écart bloquant pour le résultat utilisateur.
- INCOMPLETE — preuves insuffisantes ou cas essentiels non exécutés.

Le jugement appartient exclusivement à Morris.

## 15. Réserves et décisions non consommées

Ce cahier ne ferme pas les réserves suivantes :

- S04 : qualité cognitive intégrée encore à évaluer.
- S06 : publication Git documentaire REAL à démontrer.
- S07 : preuve end-to-end globale à produire.
- OAuth : nouveau callback navigateur interactif à exécuter pendant la campagne.
- CP2 : contrat validé en contenu sur une branche documentaire non fusionnée.
- ML4D : convergence visuelle globale et fidélité Figma hors réception ML4C.
- ML5 : exécution technique Cursor dans Studio hors périmètre.
- ENV-01 : isolation et absence de contamination entre lanes maintenues.
- PR #676 : aucun GO merge.
- RECETTE : aucune promotion STABLE.
- Version : NO RELEASE `0.0.0-dev`.
- Produit : aucun statut ADOPTED global.

## 16. Références de gouvernance et preuves

**Repository :** `mcleland147/sfia-workspace`

**Processus :** SFIA v2.6, routing Next et template canonique.

**Méthode :** `projects/sfia-studio-next/governance/SEF.md`

**Environnements :** `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md`

**Roadmap et contrat CP2 :** branche `docs/next-r5-ml4c-cp2-preparation-20261111` à `ab0c2ba3affc1556d2e5a57d863af20685509de1` (référence source pré-publication du présent cahier).

**Contrat principal :** `construction/convergence-fonctionnelle/contrat-convergence-fonctionnelle-integree.md`

**Candidat produit :** PR #676, commit `2416e2ee25662821b015407346c64ec204f67488`

**Handoff LIVE/REAL readiness :** `sfia/review-handoff@cb66fad61ea7162aa21497d99f0b73ee071c2034`, blob `b3f148c7e0c730579b9ce4234cec16d72e9ae832`

**Statut final du présent document :** VALIDATED CONTENT BY MORRIS / PROJECT GIT DOCUMENTARY CANDIDATE — recette utilisateur non exécutée.
