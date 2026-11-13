# SFIA Studio Next — Cadrage du correctif intégré : continuité Pilote–Nora et documents

**Version :** 0.1 — 13 novembre 2026  
**Statut :** DRAFT / DOCUMENTED — à approfondir et valider par Morris  
**Programme :** R5 — ML4C, convergence fonctionnelle intégrée  
**Nature :** cadrage correctif avant contrat technique d'exécution  
**Autorité produit :** Morris  
**Périmètre :** SFIA Studio Next exclusivement  
**Référentiel Git :** `mcleland147/sfia-workspace`  
**Candidat RECETTE de référence :** `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0`  
**Environnement de référence :** RECETTE — Intervencia  
**État d'exécution :** aucune nouvelle construction autorisée ; aucun mandat Cursor émis

---

## 1. Objet et justification

### 1.1 Contexte

La recette utilisateur ML4C, conduite les 12 et 13 novembre 2026, a permis de qualifier 53 scénarios :

| Statut | Nombre |
|---|---:|
| PASS | 17 |
| FAIL | 6 |
| BLOCKED | 30 |
| NOT RUN | 0 |

La campagne est entièrement qualifiée, mais **ML4C n'est pas acceptée**.

Les principales défaillances concernent la continuité du travail entre le Pilote, Nora et les capacités documentaires de Studio.

Trois anomalies concentrent les défauts fonctionnels prioritaires :

- `ML4C-A-010` : rupture entre proposition documentaire, confirmation du Pilote et enregistrement D4 ;
- `ML4C-A-011` : perte ou récupération insuffisante de contraintes métier, recommandations, sources et contexte historique ;
- `ML4C-A-003` : compositeur de conversation partiellement masqué, avec commande Envoyer non immédiatement accessible.

Les deux premières compromettent directement la capacité de Nora à accompagner durablement un projet. La troisième affecte l'utilisation de l'interface principale Pilote–Nora.

### 1.2 Finalité du correctif

**Permettre au Pilote de conduire un travail avec Nora dans la durée, sans perdre les informations utiles, sans devoir recopier des productions antérieures et sans ambiguïté entre proposition, autorisation et effet réellement enregistré.**

Le parcours doit pouvoir traverser plusieurs tours, plusieurs sujets, des interruptions et des reprises, tout en préservant la cohérence du projet.

### 1.3 Positionnement

Ce correctif reste **dans ML4C**.

Il n'ouvre pas un nouveau chantier produit autonome, ne remplace pas les responsabilités D1–D9 et ne modifie pas la trajectoire ML4C → ML4D → Gate C.

Il vise la consolidation d'une capacité de bout en bout, pas la création de nouveaux moteurs techniques par défaut.

---

## 2. Résultat utilisateur attendu

Le Pilote doit pouvoir :

1. Exprimer librement une intention, une contrainte, un besoin ou une question à Nora.
2. Construire progressivement avec elle un raisonnement, une recommandation ou un document.
3. Interrompre la conversation ou changer momentanément de sujet.
4. Reprendre son projet sans devoir restituer manuellement les informations précédentes.
5. Retrouver les propositions exactes de Nora, avec leur provenance et leur statut.
6. Examiner et autoriser explicitement les actions qui nécessitent son accord.
7. Obtenir un résultat applicatif vérifiable lorsqu'une capacité Studio réalise une opération.
8. Continuer le travail sur la base de ce résultat, sans contradiction ni succès inventé.

**Critère de réussite global :** le Pilote conserve la maîtrise de son projet et Nora assure une continuité cognitive utile, tandis que Studio garantit les droits, les effets, les états et les preuves.

---

## 3. Périmètre fonctionnel du correctif

### 3.1 Capacité A — Continuité cognitive de Nora

**Anomalie principale : `ML4C-A-011`**

#### Problèmes observés

La recette a mis en évidence quatre comportements défaillants.

| Cas | Défaillance |
|---|---|
| S04-01 | Contrainte métier comprise initialement, puis insuffisamment retrouvée après rafraîchissement |
| S04-02 | Alternatives et recommandation antérieure de Nora non récupérées |
| S04-04 | Impossibilité de confronter correctement deux sources communiquées à des tours différents |
| S04-06 | Difficulté à retrouver les véritables points ouverts du cadrage initial |

Une analyse isolée peut être correcte alors que la restitution historique est insuffisante. Le PASS borné de S04-05 n'infirme pas cette problématique.

#### Exigences fonctionnelles

**COG-01 — Conservation des contraintes métier**

Une contrainte explicite du Pilote doit rester récupérable après plusieurs tours, un changement de sujet et un rafraîchissement.

La source, l'auteur, la portée et le statut doivent être préservés.

**COG-02 — Récupération des recommandations**

Nora doit pouvoir retrouver une recommandation antérieure, les options considérées, les motivations et les conditions associées.

Une recommandation ne doit jamais être transformée automatiquement en décision du Pilote.

**COG-03 — Provenance et contradiction**

Deux sources contradictoires communiquées successivement doivent pouvoir être confrontées.

Nora doit distinguer le contenu de chaque source, ses dates et sa provenance, puis exposer la contradiction et les arbitrages nécessaires sans inventer une vérité ou une décision.

**COG-04 — Reprise du cadrage réel**

Après plusieurs échanges, Nora doit pouvoir distinguer le cadrage métier véritable des exercices hypothétiques réalisés dans la conversation.

Elle doit restituer les points ouverts effectivement connus, sans inventer ceux qu'elle ne retrouve pas.

**COG-05 — Limites et incertitudes**

Si une information nécessaire n'est réellement pas disponible, Nora doit le signaler.

La correction recherchée n'autorise ni fausse mémoire, ni reconstitution fictive, ni attribution erronée à un acteur.

#### Frontières à préserver

Le contenu conversationnel ne devient pas automatiquement une connaissance établie. Une hypothèse, une source fournie, une proposition et une HumanDecision doivent rester des objets sémantiquement distincts.

Le mécanisme de récupération doit respecter les droits, la portée du projet et la provenance, sans rendre accessibles les données d'un autre Pilote.

---

### 3.2 Capacité B — Continuité documentaire et enregistrement D4

**Anomalie principale : `ML4C-A-010`**

#### Problèmes observés

Dans S03-01, Nora a rédigé une proposition documentaire pertinente pour Intervencia, mais n'a pas réussi à retrouver cette proposition après confirmation du Pilote. Aucun document D4 enregistré n'a été démontré.

Un diagnostic complémentaire, avec contenu et demande de création dans le même tour, a produit `UNKNOWN / NO_EFFECT_OBSERVED`, sans identifiant ni révision documentaire disponibles.

La cause exacte n'est pas établie.

#### Exigences fonctionnelles

**DOC-01 — Identification de la proposition**

Une proposition documentaire produite par Nora doit posséder une référence permettant de retrouver le contenu effectivement présenté au Pilote.

La stratégie d'identification et de conservation reste à concevoir.

**DOC-02 — Stabilité entre proposition et accord**

Lorsqu'un document est présenté au tour N puis autorisé au tour N+1, Studio doit retrouver la proposition concernée sans obliger le Pilote à la recopier.

Le contenu enregistré doit correspondre au contenu autorisé, ou toute modification matérielle doit être rendue inspectable et soumise à l'autorisation applicable.

**DOC-03 — Respect de l'autorité**

Une proposition documentaire n'est pas une autorisation d'enregistrement.

La demande du Pilote, son identité, la cible, l'opération et les autres préconditions doivent être vérifiées selon le contrat D4 applicable.

Une formulation de Nora ne doit pas créer une autorité humaine implicite.

**DOC-04 — Enregistrement vérifiable**

Une création réussie doit produire un document D4 réellement enregistré, avec identifiant et révision vérifiables.

La réponse conversationnelle `COMPLETE` de Nora ne peut pas, à elle seule, attester que D4 a enregistré le document.

**DOC-05 — Révision et historique**

Une version existante doit pouvoir être récupérée et révisée conformément au contrat documentaire.

L'historique et les références des révisions doivent rester cohérents.

**DOC-06 — Erreurs et reprise**

Les résultats `AVAILABLE`, `FAILED`, `CONFLICT`, `UNKNOWN` et `NOT_EXECUTED` doivent être distingués selon leurs véritables contrats d'opération.

En particulier, un résultat `UNKNOWN` exige une réconciliation de l'effet avant toute nouvelle tentative susceptible de dupliquer une écriture.

**DOC-07 — Restitution fidèle**

Nora doit restituer le résultat réellement fourni par D4, sans annoncer une sauvegarde inexistante ni nier une écriture confirmée.

#### Frontières à préserver

D4 demeure propriétaire des documents, révisions, validations, effets persistés et résultats documentaires.

Nora prépare et mobilise la capacité ; elle n'invente pas son résultat.

Les mécanismes existants d'idempotence, de corrélation, de contrôle d'accès et de reprise doivent être réutilisés ou adaptés après vérification, plutôt que dupliqués.

---

### 3.3 Capacité C — Accessibilité fonctionnelle du dialogue

**Anomalie principale : `ML4C-A-003`**

#### Défaut observé

Sur la capture RECETTE d'Intervencia, le compositeur « Écrire à Nora » est partiellement hors de la zone visible et le bouton Envoyer n'est pas directement accessible.

Morris confirme également un écart avec les maquettes Figma.

#### Exigences

**UX-01 — Disponibilité de la saisie**

Le compositeur doit rester entièrement accessible lorsque la conversation devient longue.

**UX-02 — Disponibilité de l'envoi**

La commande Envoyer doit être accessible sans défilement de la page pour l'atteindre.

**UX-03 — Défilement maîtrisé**

Le comportement de défilement du fil de conversation doit être compatible avec la présence permanente des commandes essentielles.

**UX-04 — Non-régression**

Les états d'envoi, de chargement, d'erreur et de reprise ne doivent pas rendre ces commandes inutilisables.

#### Frontière ML4C / ML4D

Le correctif ML4C porte sur **l'accessibilité et l'utilisabilité fonctionnelles**.

La fidélité visuelle exhaustive aux maquettes Figma, l'esthétique générale et la refonte globale des composants restent dans ML4D.

La comparaison avec la frame Figma correspondante sera nécessaire avant de déclarer une conformité visuelle forte.

---

## 4. Chaîne fonctionnelle cible

Le parcours de référence est :

**Pilote → Nora → qualification → proposition → autorité applicable → capacité Studio → résultat observé → restitution → continuation.**

| Étape | Responsable | Obligation |
|---|---|---|
| Formulation du besoin | Pilote | Exprime intentions, contraintes et décisions |
| Compréhension et conduite | Nora / D3 | Comprend le contexte et propose les suites pertinentes |
| Récupération du contexte | D3 et services de connaissance autorisés | Fournissent des informations récupérables avec provenance et portée |
| Préparation documentaire | Nora avec D4 selon contrat | Produit une proposition identifiable et inspectable |
| Autorisation | Pilote et domaine propriétaire | Vérifie les actes humains applicables |
| Enregistrement | D4 | Contrôle cible, droits, version, idempotence et effet |
| Restitution | D3 à partir des résultats propriétaires | Distingue succès, échec, conflit et incertitude |
| Reprise | D3 et propriétaires concernés | Continue à partir des informations et effets réellement conservés |

**Invariant central : aucune étape ne doit transformer une intention, une proposition ou une interprétation en effet autorisé sans le contrôle de son propriétaire.**

---

## 5. Première analyse technique — faits et hypothèses

### 5.1 Faits observés dans le candidat Git

La lecture du candidat `67bf6b0` met notamment en évidence :

| Source | Constat |
|---|---|
| `conversation/service.ts` | Contexte conversationnel récent construit avec six messages complets, chacun limité à 200 caractères |
| `conversation/nora-adapter.ts` | Assemblage du contexte, mobilisation de l'agent Nora et des outils de lecture |
| `knowledge/service.ts` | Sélection de connaissances et informations contextuelles selon les mécanismes actuels |
| `conversation/document-act.ts` | Extraction structurelle de propositions documentaires et résolution de cibles |
| `conversation/turn-command.ts` | Réservation et reprise des tours, résultat durable, contrôle d'ownership |
| `document/service.ts` | Persistance documentaire, opérations et contrats de résultat |
| `intent-conduction.ts` / `mission-continuity.ts` | Projections et continuations d'intentions traversant plusieurs capacités |

Cette cartographie est une **liste de points d'analyse**, pas une liste de fichiers autorisés à modifier.

### 5.2 Hypothèses à instruire

**HYP-01 — Contexte conversationnel insuffisant.** La limitation de l'historique récent peut contribuer à la perte de contraintes, recommandations et sources.

**HYP-02 — Récupération sémantique incomplète.** Les mécanismes de sélection des informations durables peuvent ne pas restituer les éléments pertinents dans toutes les situations observées.

**HYP-03 — Proposition documentaire non récupérable.** Le contenu présenté au Pilote peut ne pas être durablement identifié ou suffisamment accessible au moment d'une autorisation ultérieure.

**HYP-04 — Rupture de mobilisation D4.** Une intention documentaire peut ne pas conduire à une invocation D4 admissible, ou à une restitution correctement réconciliée.

**HYP-05 — Combinaison de facteurs.** Certains FAIL peuvent provenir de plusieurs mécanismes distincts.

Aucune de ces hypothèses n'est une cause racine validée.

### 5.3 Contraintes techniques déjà établies

La conception doit respecter la décision Morris du 12 novembre 2026 relative à la qualification sémantique de Nora.

Cela implique notamment :

- ne pas réintroduire de routeurs lexicaux métier comme source principale d'interprétation ;
- ne pas ajouter un second moteur autonome de mémoire, d'intentions, d'autorité ou d'effets sans décision structurante ;
- préserver les validations déterministes, droits, contrats et règles d'idempotence ;
- réutiliser les objets persistants existants lorsque leurs contrats le permettent ;
- ne pas présumer qu'une nouvelle table, un index vectoriel ou une autre forme de persistance est indispensable ;
- soumettre toute modification structurante de schéma, d'autorité ou de persistance à un gate Morris distinct.

---

## 6. Contrats techniques restant à concevoir

Cette section constitue le principal travail de raffinement avant tout mandat Cursor.

| Référence | Contrat à stabiliser | Questions à résoudre |
|---|---|---|
| CT-01 | Source de vérité du contexte conversationnel | Où retrouver le contenu complet d'un tour et comment garantir sa disponibilité ? |
| CT-02 | Sélection des informations utiles | Comment choisir les contraintes, sources et recommandations pertinentes sans perdre la provenance ? |
| CT-03 | Continuité durable | Quels objets existants conservent les éléments du projet au-delà du contexte immédiat ? |
| CT-04 | Proposition documentaire | Quelle identité stable relie le document présenté, le contenu exact et la confirmation ultérieure ? |
| CT-05 | Autorité documentaire | Quel acte humain est recevable, comment sa portée est-elle vérifiée et comment la cible est-elle figée ? |
| CT-06 | Effets D4 | Comment corréler opération, tentative, document, révision et résultat terminal ? |
| CT-07 | Réconciliation et reprise | Comment éviter une seconde écriture après interruption ou résultat inconnu ? |
| CT-08 | Restitution Nora | Quel résultat propriétaire exact Nora reçoit-elle et comment éviter toute contradiction ? |
| CT-09 | Budgets cognitifs | Comment maintenir une continuité utile avec des limites mesurées de coût, latence et volume ? |
| CT-10 | Interface du dialogue | Quel contrat de hauteur, de scroll et d'accessibilité garantit l'utilisation du compositeur ? |

**Règle : ces contrats devront être explicitement résolus ou faire l'objet d'une décision avant émission du mandat d'implémentation.** Cursor pourra vérifier leur faisabilité dans l'environnement réel, mais ne devra pas sélectionner seul une nouvelle architecture en cas d'ambiguïté.

---

## 7. Critères d'acceptation et preuves attendues

| Test | Résultat attendu | Preuve minimale |
|---|---|---|
| COG-01 | Retrouver une contrainte après plusieurs échanges et un rafraîchissement | Test déterministe + Nora LIVE |
| COG-02 | Restituer des options et une recommandation avec leurs conditions | Comparaison aux messages sources + Nora LIVE |
| COG-03 | Confronter deux sources reçues à des tours distincts | Test multi-tours avec provenance et analyse de contradiction |
| COG-04 | Retrouver le cadrage initial réel après plusieurs exercices fictifs | Reprise réelle du projet + vérification utilisateur |
| DOC-01 | Retrouver la proposition au tour N+1 | Référence et contenu exact confrontés |
| DOC-02 | Créer réellement un document après autorisation | API/DB + ID/révision + bibliothèque navigateur |
| DOC-03 | Réviser sans perdre l'historique | Vérification des révisions et du contenu |
| DOC-04 | Réconcilier un effet incertain sans duplication | Tests d'interruption/idempotence avec traces durables |
| AUTH-01 | Refuser une écriture non autorisée | Contrôle au point d'effet, zéro mutation |
| UX-01 | Garder le compositeur et Envoyer accessibles | Capture navigateur avec conversation longue |
| REG-01 | Préserver les parcours auparavant conformes | Régression ciblée ML1–ML4 et ML4C |

Le rapport de sortie doit distinguer systématiquement :

**DETERMINISTIC / PostgreSQL / BROWSER / LIVE / REAL.**

Un test sur fixture ne remplace pas un comportement LIVE, et un texte indiquant qu'une opération a réussi ne constitue pas une preuve de persistance.

Les tests doivent être reproductibles sur un candidat identifié par SHA, build, environnement et jeu de données.

---

## 8. Impacts, dépendances et risques

| Dimension | Risque ou dépendance | Mesure attendue |
|---|---|---|
| Autorité | Nora interprète une demande comme une autorisation | Vérification par le domaine propriétaire et provenance USER |
| Données | Duplication de documents ou perte de révision | Corrélation, idempotence, réconciliation |
| Mémoire | Restitution incomplète ou fausse provenance | Sources identifiées, récupération contrôlée, tests multi-tours |
| Architecture | Création d'un moteur concurrent | Réutilisation prioritaire des domaines et états existants |
| Performance | Coût et latence excessifs du contexte | Budgets mesurés et comportement dégradé explicite |
| Sécurité | Contexte d'un autre Pilote exposé | Isolation par identité et projet |
| UX | Correctif fonctionnel incompatible avec la transposition Figma | Contrat de layout et capture runtime |
| Environnements | Tests contaminant RECETTE ou des données opérateur | Application ENV-01 et préflight effectif |
| Compatibilité | Régression des parcours D2, D5, D6 ou Git | Matrice d'impact et tests de non-régression |
| Git | Confusion entre branche candidate et baseline | SHA/base/HEAD vérifiés, gates explicites |

**Dette et sortie :** aucune nouvelle abstraction provisoire ne doit rester sans responsable, justification, limite d'utilisation et condition de suppression. Les mécanismes transitoires ne doivent pas devenir des propriétaires permanents concurrents.

---

## 9. Périmètre exclu

Sauf arbitrage ultérieur de Morris, ce correctif n'autorise pas :

- la refonte UX/UI complète ML4D ;
- la création d'un moteur mémoire autonome ou d'une nouvelle plateforme de connaissance ;
- une nouvelle source d'autorité concurrente des domaines existants ;
- une migration ou restructuration DB non validée ;
- la modification du processus externe SFIA v2.6 ;
- la publication Git REAL, la création de PR ou le merge ;
- la suppression des projets ou préparations ;
- la clôture automatique des anomalies, des réserves ou des scénarios BLOCKED ;
- la promotion d'un candidat vers STABLE ;
- la déclaration de ML4C comme ACCEPTED ou ADOPTED.

Les autres réserves ML4C restent dans le registre. Elles ne sont ni implicitement résolues ni automatiquement incluses dans les modifications de ce correctif.

---

## 10. Organisation et intégration

Le travail est envisagé comme **un macro-lot correctif cohérent**, dont l'intégration associe :

1. Qualification causale ciblée des écarts UAT.
2. Stabilisation des contrats fonctionnels et techniques CT-01 à CT-10.
3. Vérification du blast radius réel sur le candidat Git.
4. Réalisation corrective des mécanismes admissibles.
5. Intégration des tests déterministes, PostgreSQL et navigateur.
6. Preuves Nora LIVE adaptées et reprise utilisateur.
7. Synchronisation de l'architecture Next, des contrats applicables, des tests et de la documentation as-built.
8. Review Pack consolidé, revue ChatGPT et arbitrage Morris.

Ces activités ne constituent pas automatiquement huit cycles Cursor distincts.

La frontière de livraison et les éventuels sous-travaux parallélisables seront décidés à partir des interfaces et dépendances stabilisées, avec **un intégrateur responsable de la cohérence de bout en bout**.

---

## 11. Gates

| Gate | Objet | Statut |
|---|---|---|
| G0 — Orientation corrective ML4C | Maintien dans ML4C, priorité continuité Nora/D4 | Accord de principe Morris |
| G1 — Cadrage et périmètre | Validation de ce document après itérations | **À valider** |
| G2 — Contrats techniques | Résolution CT-01 à CT-10, impacts, responsabilités et éventuels arbitrages structurants | **À instruire** |
| G3 — Exécution Cursor | GO technique précis sous SFIA v2.6 | **Non donné** |
| G4 — Qualification technique | Tests, preuves, revue d'intégration et compatibilité | **Non acquise** |
| G5 — Nouvelle RECETTE | Retest utilisateur des FAIL et des BLOCKED rendus exécutables | **Non engagée** |
| Gate C — Acceptation ML4C | Décision Morris selon preuves et réserves | **OPEN** |

Tout changement de persistance, de droits, d'autorité, d'architecture structurante ou de périmètre protégé nécessite l'arbitrage correspondant avant son exécution.

---

## 12. Points ouverts pour les prochaines itérations

| ID | Sujet | Décision attendue |
|---|---|---|
| O-01 | Source canonique des informations durables de la conversation | Définir comment récupérer messages, contraintes, recommandations et sources sans double vérité |
| O-02 | Mécanisme de sélection du contexte | Définir pertinence, priorités, provenance, limites et comportement en insuffisance |
| O-03 | Nature et durée de vie d'une proposition documentaire | Définir identité, stockage ou référence réutilisable, expiration et modification |
| O-04 | Autorisation D4 au tour suivant | Définir les preuves admissibles de l'accord du Pilote et leur liaison au contenu exact |
| O-05 | Réconciliation D4 | Définir le traitement effectif d'UNKNOWN, des interruptions et des rejouements |
| O-06 | Couverture de la qualification sémantique validée | Déterminer quelles interfaces existantes peuvent être réutilisées sans mécanisme parallèle |
| O-07 | Frontière UX ML4C/ML4D | Arrêter le correctif minimal fonctionnel et les critères visuels associés |
| O-08 | Périmètre définitif du macro-lot | Déterminer les fichiers admissibles, sous-travaux, dépendances, preuves et gates techniques |
| O-09 | Protocole de retest | Sélectionner les FAIL et les BLOCKED à rejouer, avec conditions d'environnement et preuves |
| O-10 | Résultat de sortie acceptable | Fixer les critères de réception corrective et le traitement des réserves résiduelles |

Chaque point sera marqué **DOCUMENTED**, puis **VALIDATED SPEC** uniquement après arbitrage ou vérification suffisante. Aucun choix hypothétique ne sera transmis à Cursor comme une instruction technique déjà décidée.

---

## 13. Références de travail

Sources principales, sous `projects/sfia-studio-next/` :

- `governance/SEF.md`
- `governance/roadmap.md`
- `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md`
- `governance/decisions/2026-11-12-qualification-semantique-nora-mobilisation-capacites.md`
- `construction/convergence-fonctionnelle/contrat-convergence-fonctionnelle-integree.md`
- `construction/convergence-fonctionnelle/design-correctif-verite-effets-continuite.md`
- `construction/convergence-fonctionnelle/contrat-technique-qualification-semantique-mobilisation-gouvernee.md`
- `construction/convergence-fonctionnelle/cahier-recette-utilisateur-ml4c.md`
- `construction/convergence-fonctionnelle/journal-recette-utilisateur-ml4c.md`
- `governance/environnements-recette-et-promotions.md`
- `governance/product-versioning.md`
- `governance/product-naming-conventions.md`

La vérité des comportements demeure subordonnée au code et aux preuves du candidat effectivement testé.

---

## 14. Statut de cette version

**V0.1 — CADRAGE INITIAL, NON VALIDÉ EN CONTENU.**

Les besoins et les défauts de recette sont identifiés. Les contrats techniques ne sont pas tous stabilisés.

Ce document est destiné à évoluer par révisions successives avec Morris jusqu'à ce qu'il constitue un périmètre suffisamment précis pour générer un mandat Cursor sans arbitrages implicites.

**Aucun GO Cursor, Git, DB, déploiement, PR, merge, Gate C ou promotion n'est accordé par cette version.**
