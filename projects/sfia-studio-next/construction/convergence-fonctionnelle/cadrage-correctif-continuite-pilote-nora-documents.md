# SFIA Studio Next — Cadrage du correctif intégré : continuité Pilote–Nora et documents

**Version :** 0.2 — 13 novembre 2026  
**Statut :** VALIDATED IN CONTENT BY MORRIS — cadrage fonctionnel ; conception technique candidate à qualifier  
**Programme :** R5 — ML4C, convergence fonctionnelle intégrée  
**Nature :** cadrage fonctionnel et conception corrective candidate, avant contrat d'exécution  
**Autorité produit :** Morris  
**Dépôt :** `mcleland147/sfia-workspace`  
**Candidat RECETTE de référence :** `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0`  
**Projet de recette :** Intervencia  
**Gate C :** OPEN — ML4C NOT ACCEPTED

> **Validation du 13/11/2026 :** Morris valide le contenu de la V0.2 et autorise sa publication documentaire sur une branche dédiée. Les orientations fonctionnelles sont retenues ; les contrats techniques et leur exécutabilité ne deviennent pas pour autant VALIDATED SPEC. Aucun GO Cursor, code, migration, PR, merge, promotion ou Gate C n'en découle.

---

## 1. Finalité

### 1.1 Contexte de recette

La campagne ML4C a qualifié 53 scénarios :

| Verdict | Nombre |
|---|---:|
| PASS | 17 |
| FAIL | 6 |
| BLOCKED | 30 |
| NOT RUN | 0 |

Les principaux écarts sont :

- `ML4C-A-011` — continuité cognitive insuffisante de Nora ;
- `ML4C-A-010` — rupture du parcours documentaire D4 ;
- `ML4C-A-003` — commandes essentielles de conversation partiellement masquées.

Le correctif doit restaurer la capacité du Pilote à **construire, poursuivre, retrouver et concrétiser un travail avec Nora dans la durée**.

### 1.2 Vision produit précisée par Morris

Nora ne doit pas être limitée fonctionnellement à quelques messages récents.

Une conversation peut contenir **200, 300 messages ou davantage**. Nora doit pouvoir rechercher une information ancienne, même si elle n'a pas été rappelée récemment, et l'utiliser pour comprendre une demande actuelle.

Le coût des appels API n'est pas un critère prioritaire face à la continuité effective du travail. Les optimisations techniques restent souhaitables lorsqu'elles ne dégradent pas cette capacité.

Le Pilote n'a pas à choisir le mécanisme technique. La conception doit répondre au comportement attendu, respecter les domaines propriétaires de Studio et rester évolutive.

---

## 2. Résultat utilisateur de bout en bout

Le Pilote doit pouvoir :

1. Exprimer une intention libre, une contrainte ou une demande.
2. Développer un sujet avec Nora sur de nombreux échanges.
3. Introduire de nouvelles informations susceptibles de compléter, modifier ou contredire les précédentes.
4. Changer de sujet, rafraîchir ou reprendre ultérieurement son travail.
5. Interroger Nora sur un élément ancien sans devoir le recopier.
6. Obtenir une restitution fidèle des faits, recommandations, contradictions et décisions applicables.
7. Demander une création ou modification documentaire.
8. Faire enregistrer l'opération par le domaine compétent sous l'autorité applicable.
9. Retrouver ensuite le document, sa version et l'état réel de l'opération.

**Objectif central : continuité conversationnelle, continuité sémantique, continuité documentaire et vérité des effets.**

---

## 3. Capacité A — Continuité cognitive sur historique long

**Anomalie principale : `ML4C-A-011`**

### 3.1 Principe fonctionnel

Nora doit pouvoir retrouver et exploiter l'historique autorisé d'un projet, indépendamment de la distance en nombre de messages entre une information ancienne et une demande nouvelle.

Les 200 ou 300 messages constituent des scénarios de référence, **pas une limite supérieure à implémenter**.

L'historique accessible doit comprendre les conversations pertinentes de la préparation ou du projet, dans les limites des associations réellement autorisées. Il ne doit jamais s'étendre silencieusement à d'autres projets ou Pilotes.

### 3.2 Exemple canonique — Rouge puis bleu

| Moment | Information |
|---|---|
| Message 10 | Le Pilote indique que l'élément X doit être rouge |
| Message 110 | Le Pilote indique que l'élément X doit finalement être bleu |
| Message 250 | Le Pilote demande à Nora de reprendre le sujet X |

**Comportement attendu :**

Nora retrouve les deux déclarations, reconnaît qu'elles concernent le même élément, conserve leur chronologie et distingue leurs statuts.

Si la deuxième déclaration constitue clairement une modification de la première par la même autorité, Nora doit comprendre que **bleu est la dernière orientation exprimée**, sans présenter rouge et bleu comme deux décisions simultanément applicables.

Si les déclarations proviennent de sources concurrentes ou si leur autorité est incertaine, Nora doit exposer la contradiction et demander l'arbitrage nécessaire.

Si X relève d'une HumanDecision formelle, une simple phrase ultérieure ne doit pas modifier silencieusement la décision enregistrée : le mécanisme de décision applicable doit être respecté.

### 3.3 Exigences fonctionnelles

**COG-01 — Historique intégral récupérable**

L'intégralité des messages conservés et autorisés doit pouvoir être recherchée, pas seulement les derniers tours inclus dans le prompt courant.

**COG-02 — Recherche contextualisée**

Nora doit pouvoir retrouver une information à partir de son sens, de son sujet, de ses relations ou de sa référence, sans dépendre d'une formulation lexicale exacte.

**COG-03 — Provenance**

Les informations restituées doivent rester associées à leurs sources réelles : message, auteur, conversation, document, révision, acquis ou décision.

**COG-04 — Évolution temporelle**

Nora doit pouvoir rapprocher plusieurs déclarations successives, reconnaître les modifications explicites, identifier les contradictions et distinguer l'état historique de l'état applicable.

**COG-05 — Recommandations antérieures**

Nora doit pouvoir retrouver ses propres recommandations, les alternatives étudiées et les conditions associées, sans transformer ces recommandations en décisions humaines.

**COG-06 — Sources contradictoires**

Deux sources apportées à des moments distincts doivent rester identifiables et comparables. Nora ne doit pas fusionner artificiellement leurs conclusions.

**COG-07 — Reprise après interruption**

Un rafraîchissement, une reprise ultérieure ou un changement de sujet ne doivent pas faire disparaître les informations durables nécessaires.

**COG-08 — Portée et confidentialité**

Toutes les lectures historiques doivent respecter l'identité du Pilote, le rattachement au projet, les permissions et les éventuelles restrictions de ressource.

**COG-09 — Couverture honnête**

Si la recherche ne peut pas couvrir l'ensemble des sources pertinentes, Nora doit conserver cette limite explicite. Une lecture partielle ne peut pas être annoncée comme exhaustive.

**COG-10 — Évolutivité**

Le mécanisme doit rester utilisable lorsque l'historique s'allonge au-delà de 300 messages, sans réintroduire une limite fonctionnelle fixe à quelques tours.

---

## 4. Conception candidate — Récupération historique et sélection du contexte

### 4.1 Constat dans le code candidat

Les messages sont stockés dans le domaine conversation et peuvent être relus par ordre de message.

Cependant, `conversation/service.ts` fournit actuellement à la génération Nora les **six derniers messages complets, tronqués individuellement à 200 caractères**.

Le domaine connaissance apporte des acquis et points ouverts sous forme de sélection bornée. Le domaine documentaire ajoute une liste limitée de références.

Ces mécanismes constituent des sources de contexte, mais leur assemblage ne démontre pas la récupération pertinente de n'importe quel événement ancien.

### 4.2 Principe de conception recommandé

**Séparer la conservation historique de la quantité de contexte injectée à chaque appel au modèle.**

Le système doit conserver ou rendre accessibles les sources complètes, tandis que Nora peut recevoir initialement un contexte sélectionné et rechercher ensuite les éléments complémentaires nécessaires.

Cette approche évite deux extrêmes :

- la mémoire réduite artificiellement aux derniers messages ;
- l'injection exhaustive et systématique de toutes les conversations dans chaque requête.

**La quantité injectée peut être bornée ; la profondeur historique recherchable ne doit pas être artificiellement limitée.**

### 4.3 Architecture candidate à instruire

La conception privilégiera les composants existants, avec quatre responsabilités distinctes :

| Responsabilité | Principe |
|---|---|
| Conservation | Les messages, documents et états demeurent dans leurs sources propriétaires |
| Accès historique | Une interface de lecture vérifie identité, préparation/projet, autorisations et références |
| Recherche et sélection | Nora identifie les sources utiles à l'intention courante et peut approfondir ses recherches |
| Raisonnement | Nora confronte les sources retrouvées, leur chronologie et leur statut avant de répondre |

Une **capacité de recherche historique en lecture seule**, mobilisable à la demande par Nora et adossée au stockage existant, constitue l'option privilégiée à étudier.

Elle devra permettre une lecture progressive, une pagination ou reprise par curseur, des références stables et une indication de couverture.

La manière exacte de réaliser la sélection sémantique reste à qualifier : interrogation structurée, parcours progressif, sélection assistée par modèle ou autre capacité existante. Aucun index vectoriel ou stockage supplémentaire n'est présumé nécessaire.

### 4.4 Politique de recherche attendue

Pour répondre à une demande, Nora devra pouvoir :

1. Exploiter les informations déjà disponibles et pertinentes.
2. Identifier un besoin de rappel historique supplémentaire.
3. Rechercher dans les sources autorisées au-delà des derniers messages.
4. Lire les passages pertinents avec leur provenance.
5. Étendre la recherche lorsque les résultats sont insuffisants, contradictoires ou incomplets.
6. Confronter les sources et restituer leur état.
7. Reconnaître explicitement les limites non levées.

Le mécanisme ne doit pas imposer une liste de mots-clés métier pour déclencher le rappel.

Les contraintes opérationnelles — latence, budgets, volume, pagination et nombre d'appels — devront être mesurées et qualifiées, **sans devenir un prétexte pour inventer une réponse ou ignorer silencieusement une source ancienne**.

### 4.5 Invariants

- Une source conversationnelle reste une source, pas une autorité.
- Une recommandation n'est pas une HumanDecision.
- Une information plus récente n'annule pas automatiquement une décision formelle.
- Un historique récupéré ne doit pas divulguer un autre projet.
- Une information tronquée doit être identifiable comme partielle.
- Aucun résumé ne doit remplacer silencieusement la preuve source lorsqu'une restitution exacte est exigée.
- La recherche et les lectures ne doivent provoquer aucun effet documentaire ou métier.

### 4.6 Choix techniques encore ouverts

**CT-01 — Périmètre historique :** délimiter précisément conversations, préparations, projets et transitions accessibles.

**CT-02 — Accès complet :** identifier les interfaces de lecture existantes réutilisables et les garanties de conservation des messages.

**CT-03 — Sélection :** définir la stratégie de recherche permettant d'atteindre les sources anciennes sans dépendance à des mots-clés exacts.

**CT-04 — Couverture :** définir les états de recherche complète, partielle, interrompue, refusée ou indisponible.

**CT-05 — Continuité sémantique :** définir comment relier faits successifs, corrections, recommandations et décisions sans second moteur d'autorité.

**CT-06 — Performance :** établir les budgets techniques et la stratégie de recherche progressive à partir de mesures réelles.

Ces contrats seront stabilisés avant le mandat de réalisation.

---

## 5. Capacité B — Mobilisation documentaire D4

**Anomalie principale : `ML4C-A-010`**

### 5.1 Vision fonctionnelle

Nora doit disposer d'une capacité opérationnelle de mobilisation des services documentaires de Studio.

Elle doit pouvoir :

- rechercher les documents accessibles ;
- consulter un document ou une révision ;
- proposer un nouveau document ;
- demander sa création et son enregistrement sous l'autorité requise ;
- proposer et réaliser une modification admissible ;
- retrouver et restituer les effets enregistrés ;
- poursuivre le travail documentaire sur une révision identifiée.

L'utilisateur ne doit pas connaître les mécanismes internes D4 ni reformuler artificiellement ses demandes pour déclencher un service.

### 5.2 État technique observé

Le candidat expose au Runner Nora les outils D4 suivants :

- `search_project_resources` ;
- `read_project_document_revision`.

Ces outils servent à rechercher et lire des ressources autorisées.

Les écritures D4 passent actuellement par une qualification sémantique, une extraction contractuelle et des appels applicatifs à `savePreparationDocument` ou `reviseDocument`.

Le mécanisme d'extraction utilise notamment un bloc `sfia-document`, tandis que le traitement d'écriture est distinct de l'invocation des outils de lecture dans le Runner.

**La recette ne démontre pas que cette composition permet une création documentaire fiable à travers plusieurs tours.**

### 5.3 Principe cible

**Nora doit pouvoir solliciter les opérations D4 de manière explicite et gouvernée, sans devenir propriétaire de leur exécution.**

Il faudra déterminer si cela s'obtient en consolidant la voie de qualification/commande existante, en exposant une interface d'outil gouvernée réutilisant cette même voie, ou en combinant les deux sans double admission.

La solution choisie doit préserver **un seul chemin canonique d'autorisation et d'effet**, quel que soit le mode de sollicitation de Nora.

### 5.4 Contrats fonctionnels

**DOC-01 — Rédaction sans écriture implicite**

Une demande de rédaction simple peut produire une proposition sans enregistrer automatiquement le document.

**DOC-02 — Demande explicite d'enregistrement**

Lorsqu'un Pilote demande positivement de créer et enregistrer un document, Nora doit pouvoir mobiliser le domaine D4 selon le contrôle d'autorité applicable.

Une confirmation supplémentaire ne doit pas être inventée si le contrat propriétaire permet déjà l'acte explicite ; inversement, les confirmations réellement requises ne peuvent pas être supprimées.

**DOC-03 — Proposition antérieure récupérable**

Si Nora a produit un document au tour N et que le Pilote demande son enregistrement au tour N+1, ou plus tard, le contenu exact doit pouvoir être retrouvé.

**DOC-04 — Liaison exacte**

La proposition, l'acte du Pilote, la cible documentaire et la commande d'enregistrement doivent pouvoir être corrélés de manière vérifiable.

**DOC-05 — Modification ciblée**

Lorsqu'une section déterminée d'un document est modifiée, les sections hors périmètre doivent rester inchangées, sauf autorisation applicable.

**DOC-06 — Version et révision**

D4 vérifie la version de base, les conflits, les droits et les conditions d'écriture. Les révisions doivent demeurer identifiables et récupérables.

**DOC-07 — Résultat réel**

Une sauvegarde réussie doit produire un document ou une révision réellement disponible, avec identifiant et numéro de révision vérifiés.

**DOC-08 — Incertitude et reprise**

Un résultat `UNKNOWN` ne doit pas déclencher une nouvelle écriture avant réconciliation. Les refus et conflits doivent être restitués fidèlement.

**DOC-09 — Aucune duplication des voies d'effet**

Le modèle ne doit pas disposer d'une voie directe non gouvernée qui contournerait les validations D4 existantes.

### 5.5 Parcours de référence

**Scénario A — Rédaction puis enregistrement**

1. Le Pilote demande une note.
2. Nora rédige et présente la proposition.
3. Plus tard, le Pilote demande l'enregistrement de cette note.
4. Studio retrouve la proposition exacte.
5. Le propriétaire D4 vérifie cible, droits et acte utilisateur.
6. D4 enregistre et renvoie son résultat.
7. Nora restitue le résultat réel, avec référence documentaire vérifiable.

**Scénario B — Modification d'un document**

1. Le Pilote demande de modifier une section du document X.
2. Nora récupère le document et sa révision actuelle.
3. Nora prépare la modification demandée.
4. D4 vérifie les conditions d'autorité, de portée et de version.
5. D4 produit une nouvelle révision si l'opération est admissible.
6. Nora confirme uniquement le résultat effectivement établi.

**Scénario C — Interruption**

1. Une tentative D4 débute.
2. Le résultat devient incertain.
3. Le système conserve les références de corrélation.
4. La reprise réconcilie l'état avant toute relance.
5. L'utilisateur ne reçoit jamais un faux succès ni deux copies silencieuses.

### 5.6 Contrats techniques à résoudre

**CT-07 — Proposition stable :** identifier comment conserver ou retrouver le contenu exact produit, si possible depuis les messages existants avec identité et empreinte vérifiables.

**CT-08 — Sollicitation D4 :** sélectionner la voie canonique et clarifier l'interface de mobilisation par Nora.

**CT-09 — Autorité :** rattacher l'acte authentifié du Pilote au contenu et à l'opération concernés.

**CT-10 — Effet et réconciliation :** réutiliser la corrélation et l'idempotence des services existants, y compris après interruption.

**CT-11 — Restitution :** garantir un résultat conversationnel construit à partir du verdict D4 réellement obtenu.

Ces contrats doivent être validés en conception avant de figer les fichiers à modifier.

---

## 6. Capacité C — Accessibilité du dialogue

**Anomalie principale : `ML4C-A-003`**

Le correctif fonctionnel doit garantir que le compositeur et la commande Envoyer restent visibles et utilisables avec une conversation longue.

Exigences :

- zone de saisie entièrement accessible ;
- bouton Envoyer visible sans défilement global de page ;
- défilement interne du fil maîtrisé ;
- comportement correct après chargement, erreur, reprise et rafraîchissement ;
- vérification sur un viewport navigateur identifié.

La fidélité Figma globale et le restylage complet restent affectés à ML4D.

---

## 7. Responsabilités et frontières d'architecture

| Domaine | Responsabilité |
|---|---|
| D1 | Identité, sessions et contrôle d'accès applicable |
| D2 | Préparations et projets, rattachement des conversations |
| D3 / Nora | Compréhension, conduite cognitive, recherche contextuelle, propositions et mobilisation |
| D4 | Connaissances, documents, révisions, opérations et résultats propriétaires |
| D5 / D6 | Pilotage, décisions humaines et autorité selon les contrats existants |
| D7 / D9 | Préparation et opérations Git gouvernées lorsqu'applicables |

La cible reste :

**Pilote → Nora → capacité compétente → autorité applicable → effet réel → preuve → continuation.**

Il ne doit pas exister deux moteurs concurrents de mémoire, deux propriétaires de document ou deux voies d'autorisation incompatibles.

---

## 8. Matrice d'acceptation

| ID | Test | Résultat exigé |
|---|---|---|
| COG-01 | Information au message 10, rappel au message 250 | Source ancienne retrouvée et correctement restituée |
| COG-02 | Rouge au message 10, bleu au message 110 | Chronologie et évolution correctement expliquées |
| COG-03 | Deux sources contradictoires espacées de 100 messages | Contradiction et provenances conservées |
| COG-04 | Plusieurs sujets successifs puis reprise | Contraintes et recommandations antérieures récupérées |
| COG-05 | Rafraîchissement et nouvelle session autorisée | Historique du projet pertinent retrouvé |
| COG-06 | Information ancienne dans un autre projet | Aucun accès non autorisé |
| COG-07 | Recherche dépassant la sélection initiale | Approfondissement ou limite explicite, jamais oubli silencieux |
| DOC-01 | Rédaction seule | Aucun enregistrement implicite |
| DOC-02 | Création demandée explicitement | D4 réellement invoqué et document disponible |
| DOC-03 | Proposition au tour N, enregistrement ultérieur | Contenu exact retrouvé et enregistré |
| DOC-04 | Révision partielle | Version correcte, sections hors portée préservées |
| DOC-05 | Échec, conflit et UNKNOWN | Résultat fidèle et reprise sans doublon |
| AUTH-01 | Demande sans autorité recevable | Aucun effet non autorisé |
| UX-01 | Fil long | Saisie et Envoyer immédiatement accessibles |
| REG-01 | Parcours antérieurement PASS | Aucune régression induite par le correctif |

Les tests de continuité doivent utiliser des conversations longues et variées, pas uniquement un historique artificiel composé de messages identiques.

Les preuves doivent être classées **DETERMINISTIC / PostgreSQL / BROWSER / LIVE / REAL**, sans les considérer comme interchangeables.

---

## 9. Blast radius et risques

Les impacts à qualifier concernent notamment :

- le stockage et la relecture des messages ;
- les associations conversation–préparation–projet ;
- la récupération des acquis et sources historiques ;
- la sélection de contexte pour le Runner Nora ;
- les contraintes de coût, latence et appels au modèle ;
- la qualification sémantique ;
- les propositions documentaires ;
- les commandes et révisions D4 ;
- l'autorité et l'idempotence ;
- les restitutions conversationnelles ;
- les composants de dialogue ;
- les régressions D2, D5/D6 et Git.

**La solution devra privilégier la réutilisation des propriétaires, contrats, tables et services existants.**

Une migration DB ou un nouveau mécanisme de persistance ne peut être présumé nécessaire. S'il devient indispensable, il nécessite analyse d'impact et décision Morris.

---

## 10. Périmètre exclu

Sans décision complémentaire, le correctif n'inclut pas :

- la refonte UX/UI complète ML4D ;
- un nouveau moteur mémoire autonome ;
- une nouvelle autorité applicative ;
- une refonte générale du modèle documentaire ;
- des routeurs lexicaux métier ;
- la suppression des projets et préparations ;
- la publication Git REAL ;
- les migrations structurantes non validées ;
- la modification du processus SFIA v2.6 ;
- la clôture implicite des autres réserves ML4C ;
- l'acceptation, le merge ou l'adoption du produit.

---

## 11. Organisation du macro-lot

Le correctif sera intégré en une capacité cohérente réunissant :

1. Conception technique finalisée et validée.
2. Implémentation bornée des mécanismes nécessaires.
3. Tests des propriétaires et consommateurs.
4. Validation des scénarios multi-tours et documentaires.
5. Vérification de l'autorité et de l'absence d'effets indus.
6. Synchronisation de l'architecture Next et de l'as-built.
7. Review Pack exploitable et Critical Review.
8. Nouvelle RECETTE utilisateur.

Aucune fragmentation en micro-cycles documentaires n'est recherchée.

L'exécution Cursor restera soumise à un mandat SFIA v2.6 détaillé, avec fichiers, invariants, tests, gates et STOP explicites.

---

## 12. Gates

| Gate | Objet | État |
|---|---|---|
| G0 | Orientation corrective ML4C | Accord de principe Morris |
| G1 | Cadrage fonctionnel du correctif | V0.2 — VALIDATED IN CONTENT BY MORRIS ; contrats techniques candidats |
| G2 | Conception technique détaillée CT-01 à CT-11 | À poursuivre |
| G3 | GO d'exécution Cursor | NON DONNÉ |
| G4 | Qualification technique | NON ACQUISE |
| G5 | Nouvelle RECETTE et correction des écarts | NON ENGAGÉE |
| Gate C | Acceptation ML4C | OPEN |

---

## 13. Questions restantes de conception

La vision fonctionnelle est maintenant suffisamment claire pour approfondir le mécanisme technique.

Les sujets ouverts prioritaires sont :

**O-01 — Récupération historique de Nora.** Définir l'accès à l'ensemble des sources autorisées, la stratégie de sélection, les références et le traitement des limites.

**O-02 — Continuité sémantique et temporelle.** Définir comment rapprocher informations anciennes et nouvelles sans confondre correction, recommandation et décision.

**O-03 — Proposition documentaire récupérable.** Définir l'identité du contenu exact, sa durée de disponibilité et son rattachement à la demande ultérieure.

**O-04 — Mobilisation D4 par Nora.** Arrêter une voie de commande canonique réutilisant les services de D4 et les contrôles d'autorité applicables.

**O-05 — Résultat et reprise.** Définir la corrélation entre tentative, effet, révision et restitution, y compris en cas d'incertitude.

**O-06 — Architecture et validation.** Qualifier précisément les interfaces, les fichiers, les impacts, les scénarios d'évolutivité et les preuves de sortie.

Aucun de ces sujets ne doit être abandonné à l'interprétation de Cursor.

---

## 14. Sources de référence

Sous `projects/sfia-studio-next/` :

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
- `governance/product-naming-conventions.md`

Code candidat examiné :

- `web/src/domains/conversation/service.ts`
- `web/src/domains/conversation/nora-adapter.ts`
- `web/src/domains/conversation/document-act.ts`
- `web/src/domains/conversation/d4-read-tools.ts`
- `web/src/domains/conversation/turn-command.ts`
- `web/src/domains/knowledge/service.ts`
- `web/src/domains/document/service.ts`

---

## 15. Statut V0.2

**VALIDATED IN CONTENT BY MORRIS — FUNCTIONAL FRAMING ; TECHNICAL CONTRACTS NOT YET VALIDATED SPEC.**

La vision fonctionnelle longue durée Pilote–Nora et la mobilisation documentaire D4 sont clarifiées.

La conception recommandée repose sur une récupération historique progressive, une sélection sémantique sous contrôle de Nora et une mobilisation gouvernée des services documentaires existants.

Ces principes ne constituent pas encore une validation de l'architecture détaillée ou de l'interface d'implémentation.

**Aucun mandat Cursor, GO code, migration, PR, merge, clôture Gate C ou ADOPTED n'est autorisé par ce document.**
