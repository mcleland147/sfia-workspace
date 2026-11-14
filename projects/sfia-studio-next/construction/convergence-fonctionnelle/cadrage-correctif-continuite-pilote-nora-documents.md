# SFIA Studio Next — Cadrage du correctif intégré : continuité Pilote–Nora et documents

**Version :** 0.7 — 14 novembre 2026  
**Statut :** VALIDATED IN CONTENT BY MORRIS — O-01/O-02/O-03/O-04 ; O-05/O-06 CONCEPTION TECHNIQUE CONSOLIDÉE SOUS ORIENTATION MORRIS ; G2 OPEN — EXECUTABILITY NOT YET PROVEN  
**Programme :** R5 — ML4C, convergence fonctionnelle intégrée  
**Nature :** cadrage fonctionnel et conception corrective candidate, avant contrat d'exécution  
**Autorité produit :** Morris  
**Dépôt :** `mcleland147/sfia-workspace`  
**Candidat RECETTE de référence :** `67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0`  
**Projet de recette :** Intervencia  
**Gate C :** OPEN — ML4C NOT ACCEPTED

> **Historique des validations du 13/11/2026 :** (1) Morris valide la V0.2 et autorise sa publication sur branche documentaire dédiée ; (2) Morris valide ensuite O-01 (interfaces de récupération historique, portée, provenance, pagination, couverture et tests) ; (3) Morris valide O-02 (confrontation sémantique, temporalité et autorité) et autorise leur intégration Git. La V0.3 consigne ces deux validations **en contenu de conception**. (4) Morris valide O-03 — identité, provenance, intégrité, résolution et autorité séparée des propositions documentaires — et autorise son intégration dans la V0.4. (5) Morris valide ensuite O-04 — mobilisation D4 sous admission canonique, acte USER distinct, proposition vérifiée, garde et absence de doublon — et autorise son intégration en V0.5. (6) Morris demande à ChatGPT d'assumer l'instruction des contrats techniques restants sans micro-arbitrages, puis autorise leur **intégration documentaire Git directe**. La V0.6 intègre les propositions détaillées O-05 et O-06 **DRAFT/DOCUMENTED** ; cette autorisation de publication ne vaut ni validation d'architecture structurante, ni preuve d'exécutabilité, ni GO Cursor. Les signatures exactes, les tests et tout pivot de persistance restent soumis aux gates applicables : **NOT YET VALIDATED SPEC**. (7) Le 14/11, Morris confirme l'orientation produit, confie à ChatGPT la consolidation technique et autorise explicitement son intégration documentaire Git dans la V0.7 (§5.11), sans pivot architecture/DB. Aucun GO Cursor/code/DB, PR, merge, promotion, acceptation ML4C ou Gate C n'en découle.

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

Ces contrats seront stabilisés avant le mandat de réalisation. Les responsabilités et oracles O-01/O-02 ont été validés en contenu par Morris et sont détaillés ci-dessous ; cette validation **ne fige pas** les choix d'algorithme, d'API, de budget ou de persistance.


### 4.7 O-01 — Contrat de récupération historique (VALIDÉ EN CONTENU PAR MORRIS)

**Objet.** Permettre à Nora de retrouver toute information conservée et autorisée, y compris au-delà de 200 ou 300 messages, sans dépendance exclusive aux derniers échanges ni à une expression lexicale identique. Les limites techniques éventuelles portent sur une page ou une requête ; elles ne constituent pas un plafond permanent de messages explorables.

**Contexte réel du candidat** (`67bf6b0`) : `messages` conserve identifiant, `conversationId`, `role`, `content`, `status`, `ordinal`, `createdAt` et `generationId`. `conversation/service.ts` sait lire une conversation ordonnée, mais assemble les six derniers messages `COMPLETE` avec 200 caractères par message dans le prompt de Nora. `preparationProjectLinks` rattache une préparation à un projet ; ces liens, l'identité du Pilote et les autorisations effectives doivent être contrôlés au serveur. Les outils D4 de lecture existants proposent déjà un précédent pour les budgets, la pagination et les indications de couverture, sans constituer à eux seuls une recherche de messages.

#### O-01-A — Rechercher dans l'historique (interface logique, nom technique non arrêté)

| Dimension | Contrat de conception validé |
|---|---|
| Entrées logiques | Intention de recherche en langage naturel, éventuelles références de sources et pagination ; la cible effective reste construite par le serveur |
| Identité et périmètre | Pilote authentifié et préparation/projet effectivement autorisés ; aucun `pilotId`, `projectId` ou élargissement de portée choisi librement par le modèle |
| Recherche | Accès progressif aux messages historiques, pertinence sémantique, nouvelles lectures possibles si premiers résultats insuffisants |
| Résultats | Références stables de messages candidats, rôle/auteur, chronologie, statut, indication de pertinence et portée exacte de la recherche |
| Pagination | Ordre et frontières reproductibles, continuation explicite, aucune page vide annoncée comme poursuivable indéfiniment |
| Couverture | `COMPLETE`, `PARTIAL`, `EMPTY`, `DENIED` ou `STALE` lorsque pertinents, avec motif d'échec/indisponibilité explicite |
| Effet | **Lecture seule** ; jamais de D4 write, HumanDecision ou mise à jour implicite de connaissance |

#### O-01-B — Lire les messages sources (interface logique, nom technique non arrêté)

| Dimension | Contrat de conception validé |
|---|---|
| Entrées logiques | Références de messages/plages déjà localisées et pagination de contenu si nécessaire |
| Contrôle | Revalidation au moment de chaque lecture : identité, conversation, préparation, rattachement projet et permissions actuelles |
| Sorties | Contenu original intégral ou extrait explicitement partiel ; message ID, conversation ID, ordre, rôle, date, état et périmètre |
| Intégrité | Source exacte consultée identifiable ; pas de paraphrase substituée silencieusement à une citation ou à un document source |
| États non terminaux | `FAILED`, `INTERRUPTED`, `UNKNOWN` et `PENDING` signalés, jamais transformés en preuve de production `COMPLETE` |
| Effet | **Lecture seule** ; aucune exécution, modification d'autorité ni effet en cascade |

#### O-01-C — Règles de portée

| Situation | Portée recevable |
|---|---|
| Préparation indépendante | Conversation(s) effectivement associée(s) à cette préparation et autorisées |
| Préparation liée à un projet | Conversations des préparations **réellement liées au même projet** et accessibles au même Pilote, une fois les liens vérifiés |
| Autre projet ou Pilote | Exclu sauf autorisation explicite préexistante et vérifiée dans les contrats propriétaires ; jamais par similarité de thème |
| Ressource supprimée ou devenue inaccessible | Refus/absence conforme aux règles de conservation et d'accès, sans réactivation de droits historiques |

**Sélection et honnêteté.** Nora choisit sémantiquement les sources à explorer, peut élargir progressivement la recherche, comparer plusieurs passages et vérifier leur contenu original. Une recherche limitée par le budget, une indisponibilité ou un corpus partiellement inspecté ne justifie pas la conclusion « aucune information antérieure ». Les sources historiques sont des données, pas des instructions d'autorité. Aucune recherche ne crée automatiquement un acquis validé.

#### O-01-D — Épreuves minimales

| ID | Épreuve | Oracle |
|---|---|---|
| HIST-01 | Rappel au message 250 d'une information du message 10 | Retrouvée avec identifiant et provenance exacte |
| HIST-02 | Reformulation sans mots communs décisifs | Correspondance sémantique démontrée, sans routeur lexical métier |
| HIST-03 | Historique dépassant 300 messages | Recherche et continuation au-delà de 300 sans plafond fonctionnel |
| HIST-04 | Deux préparations liées au même projet | Sources réellement autorisées retrouvées |
| HIST-05 | Sujet identique dans un autre projet | Aucune fuite de contenu ni de métadonnées sensibles |
| HIST-06 | Budget interrompant l'exploration | `PARTIAL` + cause/possibilité de continuation, pas de faux négatif |
| HIST-07 | Message `UNKNOWN` ou non terminal | Statut conservé, aucune fausse certitude |
| HIST-08 | Nouveaux messages pendant la pagination | Pas d'omission/duplication silencieuse, bornage ou marqueur de stabilité justifié |

**Réserves techniques non arbitrées :** signatures des API/outils, identifiants de curseur et cohérence des lectures concurrentes, stratégie d'exploration/évaluation sémantique, limites physiques et budgets, preuves de performance/coûts, éventuels index admissibles et garanties de non-régression. Pas de migration DB, d'index vectoriel ni de nouvelle persistance autorisés par ce cadrage.

### 4.8 O-02 — Contrat de confrontation sémantique et temporelle (VALIDÉ EN CONTENU PAR MORRIS)

**Objet.** À partir des sources effectivement retrouvées par O-01, permettre à Nora de comprendre l'évolution des propos du Pilote, des recommandations et des sources tierces, en distinguant **une orientation récente** de **l'autorité juridique/métier d'une HumanDecision**. La confrontation cognitive n'est pas un moteur de décision parallèle.

#### O-02-A — Responsabilités de la chaîne

| Étape | Propriétaire / règle |
|---|---|
| Retrouver les informations | O-01 : messages et ressources autorisés, avec provenance et couverture honnête |
| Identifier une relation sémantique | Nora / D3 : même objet malgré reformulation, auteur, chronologie, portée et modalité |
| Qualifier le lien | Nora / D3 : complément, correction explicite, contradiction, exception de portée, hypothèse/simulation, recommandation ou ambiguïté |
| Vérifier les acquis conservés | D4 : `CURRENT` / `SUPERSEDED`, provenance et éventuel `supersedesAcquisId` ; le modèle ne change pas leur état de sa propre initiative |
| Vérifier les décisions formelles | D5/D6 : états applicables réels, `effectiveAt` et liens `supersedesDecisionId` / `revokesDecisionId` selon les contrats propriétaires |
| Restituer | Nora : sources consultées, état connu, divergence, incertitude et arbitrage réellement nécessaire |
| Exécuter un changement métier | Domaine propriétaire seulement, avec autorité et contrôle au point d'effet |

#### O-02-B — Typologie de confrontation cognitive (pas de nouveaux états persistants)

| Situation | Interprétation et restitution exigées |
|---|---|
| Déclaration complémentaire | Compléter l'information existante sans la révoquer |
| Correction explicite par le même Pilote sur le même objet/portée | Retracer avant/après et signaler la dernière orientation exprimée ; ne pas inventer une HumanDecision |
| Deux déclarations incompatibles sans remplacement explicite | Exposer divergence, sources et clarification utile, sans choix arbitraire « plus récent gagne » |
| Règle générale et exception locale | Distinguer clairement leurs portées ; ne pas réécrire la règle globale |
| Hypothèse, test ou scénario fictif | Exclure de l'état applicable réel, tout en conservant sa source historique |
| Recommandation de Nora | La retrouver comme recommandation, même si elle est répétée, sans la convertir en acte du Pilote |
| HumanDecision formelle applicable | Vérifier dans D6 ; un message ultérieur isolé ne la remplace/révoque pas sans opération gouvernée |
| Information incomplète, ambiguë ou refusée | Présenter cette limite et demander clarification ou poursuite de lecture plutôt qu'inventer |

**Cas canonique rouge → bleu :** au message 10 le Pilote demande rouge pour X ; au message 110 il dit « finalement bleu pour ce même X » ; au message 250 il interroge Nora. Elle doit retrouver les deux sources, expliquer l'orientation initiale et sa correction explicite, et conclure que bleu est **la dernière orientation exprimée** à portée identique. Si rouge constitue une HumanDecision applicable, Nora vérifie l'état D6 et ne prétend jamais qu'une révocation a déjà eu lieu. Si bleu est limité à un écran, rouge peut rester valable ailleurs.

**Séparation Level A / Level B.** Les divergences sémantiques détectées par Nora sont des **signaux cognitifs** (Level A), jamais des conflits matériels opposables. Les incompatibilités et refus nécessitant un verdict déterministe (Level B) restent aux domaines compétents, au point d'effet. Le mécanisme actuel `divergence-assist.ts` peut fournir des signaux, mais sa fenêtre cognitive de 12 décisions et ses heuristiques lexicales ne peuvent constituer l'algorithme principal de confrontation historique longue. L'ensemble des décisions applicables doit rester accessible aux résolveurs d'autorité, sans bornage cognitif indu.

#### O-02-C — Contrat de confrontation (interface logique, non finalisée)

- **Entrées :** intention ou question courante, références des sources O-01 lues, éléments D4/D5/D6 autorisés et leurs statuts propriétaires.
- **Analyse D3 :** identité sémantique de l'objet, auteur de chaque déclaration, référence historique, ordre et date, portée, modalité, certitude/contradiction, éventuelle correction explicite.
- **Sortie cognitive :** sources retenues, qualification de la relation, orientation conversationnelle la plus récente **lorsqu'établie**, vérité formelle séparée, limites et besoin éventuel d'arbitrage.
- **Interdiction :** aucune écriture D4, changement `human_decisions`, `trajectory_revisions` ou `knowledge_acquis` à partir de cette seule sortie cognitive.
- **Fidélité :** les citations historiques doivent pointer vers des messages réellement lus ; une recherche `PARTIAL` interdit une affirmation d'exhaustivité.

#### O-02-D — Épreuves minimales

| ID | Épreuve | Oracle |
|---|---|---|
| TEMP-01 | Rouge message 10 → bleu message 110 | Remplacement explicitement exprimé, sources et chronologie restituées |
| TEMP-02 | Rouge global → bleu pour une page spécifique | Exception locale distincte ; aucune généralisation |
| TEMP-03 | Sources externes contradictoires | Deux provenances et divergence visibles, sans faux arbitrage |
| TEMP-04 | Recommandation Nora puis refus Pilote | Recommandation non transformée en décision |
| TEMP-05 | HumanDecision applicable puis déclaration ultérieure | État D6 respecté, aucune révocation implicite |
| TEMP-06 | Scénario fictif entre deux consignes réelles | Hypothèse non promue en état courant |
| TEMP-07 | Sources espacées de plus de 300 messages | Comparaison correcte sur preuves de récupération historique |
| TEMP-08 | Recherche partielle ou source inaccessible | Incertitude/limite explicite, pas de conclusion définitive |

**Réserves techniques non arbitrées :** signature de l'interface de confrontation, niveau de structuration des relations, articulation exacte avec `nora-context.ts` et D6, observabilité/traçabilité, stratégie de sélection des sources et budget réel, acceptabilité LIVE multi-tours. Aucune nouvelle table de décision, aucune invalidation automatique de source historique ni nouveau moteur déterministe de compréhension n'est décidée.

**Statut O-01/O-02 :** principes, responsabilités logiques, couverture attendue et oracles **VALIDÉS EN CONTENU PAR MORRIS**. Les interfaces TS/API précises, algorithmes, traitements concurrents, limites opérationnelles et preuves d'exécutabilité restent **À QUALIFIER** avant mandat Cursor.

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

Ces contrats doivent être validés en conception avant de figer les fichiers à modifier. La résolution d'O-03, validée en contenu, est détaillée au §5.7 ; l'acheminement D4, les effets et la reprise restent à concevoir en O-04/O-05.


### 5.7 O-03 — Proposition documentaire récupérable (VALIDÉ EN CONTENU PAR MORRIS)

**Résultat utilisateur.** Nora peut retrouver **le contenu exact** d'une proposition documentaire produite des dizaines ou centaines de messages auparavant, sans demander sa recopie au Pilote, puis la présenter à la capacité D4 compétente **sans confondre proposition, demande USER et effet enregistré**.

**Diagnostic candidat `67bf6b0` — constats, non causes prouvées.** Le journal `messages` conserve le contenu, le rôle, l'ordre, le statut et la génération, mais le message assistant n'est généralement persisté qu'au commit terminal du tour (`turn-command.ts`), alors qu'une tentative D4 peut avoir lieu plus tôt (`conversation/service.ts`). Le parseur `extractContractualDocumentProposal` exige une unique fence `sfia-document` et calcule un `proposalDigest16`. D4 possède déjà une empreinte SHA-256 du titre et du contenu pour ses effets idempotents. Le champ de qualification `replyDraft` est plafonné à 12 000 caractères, là où D4 accepte jusqu'à 100 000 caractères : leur compatibilité effective et l'absence de troncature restent à démontrer. **S03-01 FAIL** prouve la perte de continuité proposition → accord ; le test complémentaire avec contenu et accord **dans le même tour** a aussi produit `UNKNOWN / NO_EFFECT_OBSERVED`. O-03 ne prétend donc pas résoudre seul `ML4C-A-010`.

#### O-03-A — Identité de la proposition, sans registre concurrent

Source prioritaire : **message assistant source complet, réellement durable et admissible**, relu dans la conversation existante. Un simple résumé, une régénération par Nora, un texte tronqué ou une référence D4 inventée ne sont pas recevables. Chaque version différente constitue une proposition différente.

| Champ logique provisoire | Garantie |
|---|---|
| `assistantMessageId` | Message Nora source effectivement enregistré |
| `conversationId` | Conversation d'origine |
| `generationId` | Génération reliée au message |
| `preparationId` | Périmètre source dérivé des liens propriétaires, non déclaré librement par Nora |
| `proposalDigest` | Empreinte robuste du **titre et contenu exact** ; l'actuel digest court ne suffit pas seul à garantir l'intégrité |
| `proposalStatus` | Admissibilité logique de cette proposition ; **pas** un statut d'enregistrement documentaire D4 |

La référence doit être vérifiable depuis les sources propriétaires. Un pointeur de lecture dérivé est admissible ; **aucune nouvelle table de brouillons, migration ou seconde vérité documentaire n'est décidée**.

#### O-03-B — Résolution et admissibilité

| Situation | Exigence de traitement |
|---|---|
| Une proposition précisément identifiable | Lire le message complet, extraire la bonne proposition, contrôler identité, statut, droits et empreinte |
| Plusieurs propositions compatibles | Clarifier la version visée ; pas de sélection arbitraire par ancienneté ou récence |
| Désignation d'une ancienne version | Retrouver **cette** version, même si une nouvelle rédaction existe |
| Message `PENDING`, `FAILED`, `INTERRUPTED`, `UNKNOWN` ou contenu incomplet | Ne pas le déclarer comme proposition définitive confirmée ; vérifier les sources durables et qualifier la limite |
| Fence `sfia-document` bien formée | Réutiliser les validations structurelles d'extraction (unicité, clôture, titre, contenu) |
| Texte hors format documentaire contractuel | Ne pas convertir implicitement en commande d'écriture ; préparer si nécessaire une version structurée **inspectable**, puis soumettre à l'autorisation applicable |
| Divergence de titre, contenu, empreinte ou cible | Aucune substitution silencieuse ; présenter la divergence et obtenir l'acte adéquat |
| Autre projet ou autre Pilote | Refuser la lecture non autorisée et toute divulgation |
| Contenu long | Pas de troncature silencieuse ; version intégrale réellement transportée ou limitation explicite |

La recherche O-01 peut localiser le message et O-02 l'identifier sémantiquement, mais **le contenu à transmettre à D4 doit être celui de la source vérifiée**, pas la paraphrase issue du raisonnement.

#### O-03-C — Acte humain et sortie vers O-04

1. **Rédaction sans demande positive d'enregistrement = zéro écriture.** Hypothèse, négation, question ou lecture ne valent pas autorisation.
2. La proposition Nora n'est ni HumanDecision, ni autorisation, ni document D4 `AVAILABLE`.
3. La demande d'enregistrement doit être rattachée à un **message USER authentifié et durable**, à la version retenue et à la cible.
4. D4 conserve le contrôle des permissions, de l'opération, de la préparation, de la cible, de l'idempotence et de l'effet **au point d'écriture**.
5. O-01 peut lire plusieurs préparations d'un projet ; cela **n'étend pas** les droits d'écriture D4, aujourd'hui contrôlés notamment par préparation.
6. Toute modification matérielle du document après l'accord exige une autorisation adaptée : jamais de substitution par Nora.

**Sortie logique vers O-04 :** référence exacte de proposition + contenu vérifié + cible documentaire candidate + acte USER authentifié + intention d'opération qualifiée. Les signatures TS et la voie canonique d'admission restent à arrêter dans O-04. La réponse cognitive Nora ne vaut jamais commande auto-autorisée.

#### O-03-D — Durabilité, interruption et frontière O-05

La proposition doit rester retrouvable après rafraîchissement et reprises autorisées **lorsqu'une source durable existe**. Une interruption du tour peut laisser une tentative D4 à réconcilier sans message assistant terminal : ce cas **ne doit ni inventer une proposition disponible ni faire disparaître un effet possible**. Le traitement de l'ordre pré-effet/commit, des clés de corrélation, d'une perte d'ACK et du rejeu sans doublon appartient à O-04/O-05 et nécessite une inspection technique avant implémentation. Le simple rappel d'une proposition ne déclenche aucune écriture.

#### O-03-E — Oracles de validation

| Cas | Scénario | Attendu |
|---|---|---|
| PROP-01 | Proposition puis enregistrement demandé au tour N+1 | Identité et texte exact retrouvés |
| PROP-02 | Accord demandé 100 messages après | Source, empreinte et version exactes retrouvées |
| PROP-03 | Trois versions proposées | Version précise sélectionnée ou clarification |
| PROP-04 | Nouvelle variante après accord initial | Aucune substitution silencieuse |
| PROP-05 | Simple rédaction sans demande d'enregistrement | Aucune écriture D4 |
| PROP-06 | Source incomplète ou non terminale | Refus d'admissibilité et statut fidèle |
| PROP-07 | Source d'un autre projet/Pilote | Aucun accès non autorisé |
| PROP-08 | Rafraîchissement/interruption | Source durable accessible ; incertitudes distinguées |
| PROP-09 | Document plus long que `replyDraft` | Aucune troncature silencieuse ; transport vérifié ou refus explicite |
| PROP-10 | Confirmer ou rejouer une proposition | Même identité et acte ; aucune opération D4 supplémentaire non autorisée |

**Statut : VALIDÉ EN CONTENU par Morris.** À qualifier avant Cursor : signatures API, moment de durabilité, récupération d'un contenu hors fence, empreinte robuste et compatibilité de longueur, cible inter-préparations, validation USER, intégration à l'écriture gouvernée et preuves LIVE. **O-03 n'est pas une preuve de création D4 et ne ferme pas `ML4C-A-010`.**


### 5.8 O-04 — Mobilisation gouvernée des opérations documentaires D4 (VALIDÉ EN CONTENU PAR MORRIS)

**Résultat utilisateur.** Nora doit pouvoir mobiliser **réellement** la création et la modification documentaire à partir du langage naturel. Une rédaction sans acte d'enregistrement reste une proposition ; une demande positive autorisée doit conduire à une tentative D4 gouvernée, puis à une restitution véridique de l'effet observé. Le Pilote n'a pas à reconstituer la procédure interne ni à recopier une proposition antérieure.

**Diagnostic sur le candidat figé `67bf6b0`, non preuve de cause.** Le catalogue sémantique inclut `d4.create_document` et `d4.revise_document`, avec modes `EXPLAIN / EXPLORE / PREPARE / REQUEST_EFFECT` ; `projectStudioEffects` convertit les intentions en `CREATE` ou `REVISE`. Les outils fournis au Runner Nora sont aujourd'hui surtout `search_project_resources` et `read_project_document_revision` (lecture), alors que `conversation/service.ts` appelle directement `savePreparationDocument` / `reviseDocument` à partir de l'extraction de la **réponse courante**. Cette articulation ne démontre pas la résolution O-03 d'une proposition antérieure. D4 conserve déjà des contrôles de propriété/préparation, d'intégrité, de révision et de corrélation. Le chemin `CREATE` passe un `turnFence` au propriétaire D4 ; la signature `reviseDocument` n'expose actuellement pas ce même paramètre : **écart de contrat à qualifier**, sans conclure à un défaut de sécurité exploitable. La RECETTE S03-01 et le diagnostic du même tour n'ont confirmé aucune écriture D4 ; la panne précise n'est pas attribuée arbitrairement à D4.

#### O-04-A — Architecture logique et voie canonique

**Une seule admission applicative et une seule voie propriétaire d'effet D4**, utilisables pour les demandes conversationnelles et, lorsqu'ils existent, les autres consommateurs autorisés. Les interfaces du modèle ne doivent jamais devenir une seconde autorité transactionnelle.

| Étape | Responsabilité et contrat |
|---|---|
| 1. Demande du Pilote | Message `USER` authentifié, conservé et interprété dans son contexte |
| 2. Qualification Nora (D3) | Identifier sémantiquement la capacité, l'opération, la cible et les dépendances ; `REQUEST_EFFECT` seulement pour une demande positive d'effet |
| 3. Résolution O-03 | Récupérer la proposition précise, complète, admissible et vérifiée ; ne pas régénérer son contenu par mémoire |
| 4. Admission serveur | Lier l'acte `USER`, la proposition, l'opération et la cible ; vérifier permissions, préconditions, version de base, corrélation et idempotence |
| 5. Propriétaire D4 | Exécuter `CREATE` ou `REVISE` sous ses propres contrôles transactionnels, sans effet hors autorisation |
| 6. Restitution | Communiquer à Nora et au Pilote **le verdict propriétaire**, les références D4 réellement présentes et l'incertitude si elle subsiste |

La modalité finale de mobilisation reste ouverte : consolidation de la qualification/commande serveur existante, interface d'outil gouvernée, ou présentation d'une capacité d'action au Runner **qui appelle exactement la même admission**. Aucune API de mutation directe librement paramétrée par le modèle, aucune seconde voie d'écriture, aucun nouveau moteur d'autorité.

#### O-04-B — Parcours fonctionnels et négatifs

| Demande du Pilote | Exigence |
|---|---|
| « Rédige un document de cadrage » | Proposer un texte ; zéro `CREATE` tant qu'aucun acte d'enregistrement n'est recevable |
| « Rédige et enregistre ce document » | Qualifier l'intention positive et demander l'admission D4, sans confirmation redondante si l'acte initial suffit au contrat |
| « Enregistre la note proposée hier » | Réutiliser **la proposition exacte O-03**, vérifier sa cible et l'acte ultérieur, puis solliciter D4 |
| « Modifie la section Risques du document X » | Vérifier document et base `AVAILABLE`, résoudre la section et préserver les sections hors portée ; révision gouvernée |
| « Montre la dernière version » | Lecture uniquement ; aucun acte D4 d'écriture |
| « Comment pourrais-tu enregistrer une note ? » | Explication sans effet |
| « Ne sauvegarde pas encore » | Qualification négative ; aucune écriture |
| Plusieurs intentions `CREATE` et `REVISE` | Préserver dépendances et ordre contractuel ; ne pas choisir arbitrairement `REVISE` ou `CREATE` |

Une demande explicitement autorisante peut suffire si le contrat propriétaire le prévoit : **pas de confirmation systématique inventée**. Une demande ambiguë, hypothétique ou négative ne vaut pas acte d'écriture. Un résultat Nora `COMPLETE` ne constitue **pas** une preuve D4 `AVAILABLE`.

#### O-04-C — Contrats techniques de conception

| ID | Invariant à réaliser et prouver |
|---|---|
| D4-CMD-01 | Admission canonique unique pour `CREATE` et `REVISE`, depuis les intentions sémantiques structurées et validées, sans routeur lexical métier concurrent |
| D4-CMD-02 | Acte positif `USER` authentifié et durable, séparé de la proposition Nora ; preuve de la cible et de l'opération demandées |
| D4-CMD-03 | Référence et empreinte O-03 de la proposition exacte avant écriture ; refus/clarification si ambiguïté, troncature ou divergence |
| D4-CMD-04 | Contrôles D4 au point d'effet : droits, préparation, document, statut et révision de base, portée de la modification |
| D4-CMD-05 | Identités stables reliant demande, proposition, opération, tentative et effet, avec absence de mutation de payload sous une clé existante |
| D4-CMD-06 | Rejeu ou interruption sans nouvelle écriture non autorisée ; protection de propriété du tour, perte d'ownership et maintien de la même identité d'opération |
| D4-CMD-07 | Restitution issue du propriétaire D4 : `NOT_EXECUTED`, `AVAILABLE`, `FAILED`, `CONFLICT` ou `UNKNOWN` non confondus |
| D4-CMD-08 | Respect des opérations multi-intentions, dépendances D2→D4 et coexistence des demandes sans priorité silencieuse |

**Durabilité pré-effet.** La référence d'une proposition, son contenu admissible/empreinte et l'acte `USER` doivent être récupérables avant toute mutation autorisée. Le candidat peut aujourd'hui tenter D4 avant le commit terminal assistant : il faut examiner si le journal `conversationTurnCommands` et les messages existants permettent un gel pré-effet, un rattachement durable et une reprise cohérente **sans** inventer une nouvelle table par défaut. Ce principe ne fige ni l'ordre exact des transactions ni un mécanisme de persistance nouveau ; ces choix seront qualifiés à la jonction O-04/O-05.

**Garde de révision.** Le parcours `REVISE` doit disposer de protections d'ownership/concurrence proportionnées au `CREATE` et conserver l'intégrité des sections non ciblées. Le cas d'une base périmée reste un `CONFLICT` propriétaire, pas un arbitrage Nora.

#### O-04-D — États, reprise et séparation O-05

| État d'effet | Lecture attendue pour le Pilote |
|---|---|
| `NOT_EXECUTED` | Aucune transaction D4 tentée ; ni refus propriétaire inventé ni faux succès |
| `AVAILABLE` | Document/révision confirmés et inspectables, avec identifiants et numéro de révision |
| `FAILED` | Refus ou échec confirmé au périmètre et à l'étape réellement observés |
| `CONFLICT` | Conflit de base, d'intégrité de commande ou de précondition ; aucune nouvelle version prétendue |
| `UNKNOWN` | Effet non établi : contrôle/réconciliation nécessaires avant toute nouvelle émission |

**Frontière :** O-04 fixe les obligations d'admission et d'invocation ; **O-05** établira le protocole détaillé de réconciliation, d'ACK perdu, d'UNKNOWN, de reprise et de restitution terminale. Une action confirmée par le modèle mais non par D4 ne vaut pas enregistrement. Une absence d'ACK ne prouve pas l'absence d'effet.

#### O-04-E — Épreuves minimales

| ID | Scénario | Oracle |
|---|---|---|
| D4-CMD-T01 | Demande explicite de rédaction + enregistrement | Un seul `CREATE`, document/révision vérifiables |
| D4-CMD-T02 | Accord ultérieur sur une proposition antérieure | Exact contenu O-03 enregistré sous l'autorité du message `USER` |
| D4-CMD-T03 | Simple rédaction ou consultation | Zéro mutation D4 |
| D4-CMD-T04 | Modification d'une section déterminée | Une nouvelle révision, hors-périmètre inchangé |
| D4-CMD-T05 | Révision sur base obsolète | `CONFLICT`, aucune révision concurrente indue |
| D4-CMD-T06 | Négation, hypothèse ou autorité insuffisante | Pas d'écriture ; motif fidèle |
| D4-CMD-T07 | Perte d'ownership avant mutation | Aucun effet tardif non admis ; preuve de la garde |
| D4-CMD-T08 | Rejeu de la même opération et même payload | Idempotence, aucune duplication |
| D4-CMD-T09 | Commandes `CREATE` et `REVISE` liées | Dépendances et ordre respectés, ou clarification sans effet |
| D4-CMD-T10 | Document créé mais réponse interrompue | Résultat réel récupérable via O-05, jamais de faux échec |

**Preuves attendues au futur macro-lot :** déterministes pour l'admission, les négations, la sélection et l'autorité ; PostgreSQL pour l'unicité, les versions, la corrélation et la reprise ; navigateur pour l'état utilisateur ; **Nora LIVE → D4 → PostgreSQL → bibliothèque navigateur** pour le comportement métier. Tests `FAKE` ≠ preuve `LIVE/REAL`. Les essais avec effet doivent respecter l'isolation ENV-01 ; la RECETTE existante reste figée sans mandat distinct.

**Statut :** **VALIDÉ EN CONTENU PAR MORRIS** pour la voie gouvernée unique, les rôles, les obligations d'admission, la durabilité pré-effet et les dix oracles. **NON VALIDATED SPEC** pour la signature API, le transport du document, l'extension exacte des gardes de révision, l'implémentation du journal, la stratégie de reprise O-05 et les preuves d'exécutabilité. Aucune écriture technique, migration ou nouveau gate n'est autorisé.


### 5.9 O-05 — Vérité de l'effet, corrélation, réconciliation et reprise (CONCEPTION CANDIDATE CHATGPT)

**Mandat de conception :** Morris délègue l'instruction technique à ChatGPT et autorise la publication documentaire de ce travail. Le présent contrat est **DOCUMENTED — NOT YET VALIDATED SPEC** ; il ne modifie ni code, ni autorité, ni schéma. O-05 complète O-03 (identité de la proposition) et O-04 (admission canonique), sans introduire un second moteur transactionnel.

#### O-05-A — Analyse du candidat, séparer les preuves des hypothèses

- `conversation_turn_commands` possède déjà `clientTurnKey`, `requestFingerprint`, `operationId`, `ownerToken`, `userMessageId`, `generationId` et `resultJson`. `reserveTurnCommand` assure l'unicité de `(conversationId,clientTurnKey)` et refuse le même identifiant avec empreinte de requête divergente. La qualification Nora est persistée pré-effet par `stashTurnQualification`.
- Le terminal du tour est écrit par `commitTurnTerminal` avec une transaction et contrôle CAS d'ownership. `reconcileRunningCommand` peut révoquer un propriétaire devenu stale, avec statut `UNKNOWN`. Le replay d'un tour `FAILED/UNKNOWN` sollicite `reconstituteConfirmedD4Effects` : **mécanismes existants à réutiliser**, non preuve que tous les chemins D4 sont sûrs en production.
- `savePreparationDocument` prend une clé de corrélation, compare un SHA-256 de **titre + contenu** et sait retrouver une première révision de création. La ligne `documents` peut cependant être insérée **avant** la transaction de la première révision : une interruption peut laisser une ligne sans révision disponible. Le schéma source inspecté déclare un index de préparation pour `documents` mais **ne montre pas de contrainte d'unicité sur `creationCorrelationKey`**. La prévention effective des doublons en concurrence est donc **NON PROUVÉE** ; vérifier toutes les migrations/contraintes déployées avant de choisir le remède.
- `reviseDocument` contrôle la propriété, la préparation et la version de base, puis sérialise sur le document. Son replay sur clé de corrélation renvoie la révision antérieure, **sans comparaison explicite du contenu/empreinte** dans ce chemin ; sa signature n'expose pas encore le `turnFence` de la création. Ce sont des écarts contractuels à instruire, **pas** une preuve de comportement LIVE incorrect.
- `formatDocumentEffectAck` distingue les effets documentaires ; le message conversationnel Nora `COMPLETE` et le succès documentaire `AVAILABLE` demeurent deux faits différents. Les UAT S03-01 et le diagnostic adjoint ne prouvent pas la cause des `UNKNOWN / NO_EFFECT_OBSERVED` observés.

#### O-05-B — Identités et séquence pré-effet recommandées

**Séquence canonique candidate, sans second registre métier :**

1. Recevoir et **persister le message USER** sous une commande de tour identifiée par session/fil, `clientTurnKey` et empreinte de requête. Conserver `operationId` stable pour tout rejeu de la même commande.
2. Laisser Nora qualifier sémantiquement l'acte ; valider la sortie et **conserver durablement la qualification** dans le journal de commande avant tout effet. Refuser une requalification libre d'un tour déjà engagé.
3. Résoudre la proposition O-03 (message assistant antérieur durable, ou **instantané immuable pré-effet** de la production du même tour), sa cible, sa révision de base éventuelle et son empreinte robuste. **Conserver dans le journal existant** les références et, si nécessaire pour reprendre après crash, le contenu exact borné de cet instantané avant D4 ; ceci n'est ni un nouveau document D4, ni un moteur mémoire.
4. Lier de façon **immuable** la commande documentaire à : `operationId`, acte USER, action `CREATE/REVISE`, proposition/empreinte, titre/cible, préparation, document/baseRev et corrélation. Construire la clé à partir d'identités **stables de commande et d'étape**, **pas exclusivement d'un generationId susceptible de changer en cas de nouvelle génération**.
5. Admettre la commande selon O-04 ; recontrôler les droits, la cible et la propriété du tour **dans la transaction qui réalise l'effet**. Même clé + payload différent : `CONFLICT` sans mutation ni changement de contenu associé.
6. Exécuter le seul propriétaire D4, recueillir et persister les références/verdicts effectifs ; construire ensuite la restitution utilisateur, le message assistant et l'ACK applicatif. Le commit terminal de la narration peut être distinct d'un effet D4 déjà confirmé ; un échec tardif de ce commit n'annule pas l'effet propriétaire.
7. En reprise, **réutiliser le même identifiant de commande et les mêmes références pré-effet**, réconcilier D4 et reconstruire la restitution ; ne jamais repartir d'une nouvelle génération ou d'une nouvelle clé pour « retenter ».

Le journal `conversation_turn_commands.resultJson` est l'option **candidate** pour le binding/instantané immuable pré-effet, sous contrôle de taille et d'intégrité, car il existe déjà et est écrit avant la mutation. La faisabilité doit être prouvée face aux limites SDK/`replyDraft`, aux contenus longs, aux écritures concurrentes et aux données déjà persistées ; si une nouvelle persistance ou migration s'avère indispensable, **STOP + gate Morris d'architecture/DB avant Cursor**, et exit de la dette explicitée.

#### O-05-C — Matrice des verdicts (deux axes indépendants)

| État documentaire / origine | Vérité à restituer |
|---|---|
| `NOT_EXECUTED` — admission/qualification refusée ou non-engagée | Aucune transaction D4 déclenchée, motif de non-exécution ; ne pas inventer `FAILED` |
| `AVAILABLE` — révision propriétaire vérifiée | Effet confirmé : documentId, revisionId, numéro, cible et intégrité admissible, relisibles sous droits |
| `FAILED` — refus ou échec du propriétaire établi | Échec à l'étape observée ; distinguer validation/refus, rollback et éventuelle ligne sans révision |
| `CONFLICT` — base stale, identité/empreinte/cible divergente | Conflit sans nouvelle révision autorisée sous cette commande ; ne pas écraser la version courante |
| `UNKNOWN` — ACK perdu, en vol, transaction/lecture non concluante | Ni succès ni échec définitif ; reprendre la **réconciliation** avant toute tentative de nouvelle écriture |
| `SAVING` / absence de révision finale | État interne transitoire ou incomplet, **jamais** une preuve de `AVAILABLE` |

**Axes indépendants :** `conversationTurnCommand.status = COMPLETE` signifie que le **tour** est clos ; `message.status = COMPLETE` signifie que la **réponse Nora** est terminée ; `documentRevisions.status = AVAILABLE` signifie que **D4** a rendu une révision disponible. Aucun de ces trois succès n'implique automatiquement les autres. Un document confirmé doit rester identifiable même si le tour devient `UNKNOWN`.

#### O-05-D — Protocole de réconciliation et non-duplication

- **Démarrage :** identifier la commande durable et son binding pré-effet à partir de la même identité d'intention, sans accepter une nouvelle proposition ou clé opaque fournie par Nora.
- **Lecture sous droits actuels :** consulter D4 par clé de corrélation/cible, révisions, propriétaire et empreinte ; distinguer absence prouvée, document sans révision, révision `SAVING/UNKNOWN`, `AVAILABLE`, `FAILED` et version contradictoire. Ne pas considérer « aucun document affiché dans l'UI » comme preuve d'absence transactionnelle.
- **Si `AVAILABLE` :** valider l'identité de commande et de payload, retourner la **même** révision, reconstruire l'ACK et ne pas écrire à nouveau.
- **Si `CONFLICT/FAILED` établi :** retourner le résultat propriétaire sans nouvelle écriture implicite ; une autre intention, version ou autorisation exige une **nouvelle commande**.
- **Si incertitude persistante :** conserver `UNKNOWN`, identité d'origine et état de consultation ; la reprise peut être répétée sans mutation, y compris après rafraîchissement ou changement de tour.
- **Si absence d'effet réellement démontrée :** une réémission éventuelle ne peut réutiliser que **la même commande/binding/clé et les mêmes contrôles de garde**, après avoir établi qu'elle ne peut pas créer de doublon. Le mécanisme de relance exact est soumis à preuve de concurrence, non présumé sûr.
- **Concurrence :** aucun worker détenteur d'un `ownerToken` révoqué ne doit écrire après réconciliation. Étendre les protections nécessaires au chemin `REVISE` et vérifier les courses `CREATE` où la ligne document précède sa première révision.
- **Lecture simple :** consultation des messages, de la bibliothèque ou des révisions ne déclenche jamais de commande/replay d'écriture. Une reprise effectrice passe par le contrat de **commande gouvernée**, pas par une route de lecture.

**Point bloquant potentiel :** s'il n'existe pas de garantie DB prouvable d'unicité du CREATE par corrélation en cas de courses réelles, il faut concevoir une garantie transactionnelle minimale réutilisant le propriétaire D4. Toute contrainte/migration structurelle non évitable est un **arbitrage Morris explicite** ; ne pas masquer le problème derrière un retry applicatif.

#### O-05-E — Erreurs, observabilité et sortie

La chaîne de preuve doit permettre de corréler sans divulguer le contenu sensible : `requestId`, `operationId`, `clientTurnKey` (empreinte si exposée aux logs), `userMessageId`, `generationId`, référence de proposition/empreinte, action D4, cible, `correlationKey`, `documentId/revisionId`, statut propriétaire, tentative et résultat de réconciliation, sans journaliser les corps intégraux inutilement. Les erreurs d'accès et d'identité doivent rester non révélatrices ; le corps source n'est lu qu'après autorisation.

La restitution doit rester stable après replay : **un seul verdict applicatif**, distinct de la narration Nora, avec mention de « non exécuté », « confirmé », « refusé/conflit » ou « résultat encore incertain ». Les messages contradictoires (« document créé » + « aucune révision ») sont interdits.

#### O-05-F — Oracles minimaux

| ID | Scénario | Résultat attendu |
|---|---|---|
| REC-01 | ACK perdu après commit D4 `AVAILABLE` | Même ID/révision retrouvés, aucun second CREATE |
| REC-02 | Crash après ligne `documents` et avant première révision | Ligne incomplète reconnue, pas de faux succès/doublon |
| REC-03 | Deux CREATE concurrents avec même corrélation | Un seul document/révision admissible ; contrainte/concurrence prouvées |
| REC-04 | Même commande, contenu ou titre différent | `CONFLICT`, aucun payload divergent appliqué |
| REC-05 | Même clé REVISE, contenu/base différents | `CONFLICT`, replay jamais présenté comme succès de l'autre contenu |
| REC-06 | Base de révision obsolète | `CONFLICT` sans nouvelle révision |
| REC-07 | Perte d'ownership avant/pendant D4 CREATE et REVISE | Pas d'effet tardif non autorisé, course lock/CAS prouvée |
| REC-08 | Échec du commit terminal après D4 `AVAILABLE` | Effet D4 conservé, réponse reconstruite depuis propriétaire |
| REC-09 | `UNKNOWN` prolongé sur plusieurs reprises | Même opération, état honnête, aucune nouvelle écriture aveugle |
| REC-10 | Consultation de bibliothèque/fil pendant `UNKNOWN` | Aucune écriture déclenchée par simple lecture |
| REC-11 | Échec/rollback D4 réellement prouvé | `FAILED` exact, pas de success narration ni d'absence inventée |
| REC-12 | Réponse Nora `COMPLETE` mais aucun D4 engagé | `NOT_EXECUTED` distinct de `AVAILABLE` |

**Niveau de preuve :** DET pour les gardes/états, PostgreSQL concurrent pour unicité, versionnement et crash/rollback, BROWSER pour reprise utilisateur ; Nora LIVE + D4 + PG pour la vérité end-to-end. Aucun verdict RECETTE avant un nouveau candidat figé.

### 5.10 O-06 — Architecture intégrée, blast radius et preuve de sortie (CONCEPTION CANDIDATE CHATGPT)

**Résultat :** un macro-lot correctif unique, traversant cognition, mémoire historique, propositions documentaires, admission D4, révisions, reprise, UX indispensable et preuve utilisateur. **Aucun nouveau sous-produit, moteur parallèle, POC, fixture de production ou registre documentaire autonome.**

#### O-06-A — Chaîne end-to-end candidate

1. **Entrée D1/D2 :** identité USER authentifiée, préparation/projet courants et accès déterminés par Studio ; aucun élargissement sémantique implicite.
2. **D3/Nora :** comprendre la demande libre, mobiliser O-01 pour rechercher les sources historiques, O-02 pour confronter les versions et leur autorité, O-03 pour identifier le contenu exact de la proposition.
3. **Admission O-04 :** qualifier une demande d'effet uniquement si positive, lier de manière durable les éléments d'autorité et de payload, appliquer l'unique garde serveur.
4. **D4 :** conserver les connaissances/documents propriétaires ; réaliser CREATE/REVISE, versions, permissions, idempotence et résultats observés ; **D5/D6** conservent les seules HumanDecision.
5. **Réconciliation O-05 :** vérifier la vérité D4, permettre la reprise d'un tour ou d'un effet incomplet sans doublon ni mutation sur une route READ.
6. **UX D3/produit :** afficher source, proposition, état réel et référence vérifiable ; zone de saisie et commande Envoyer restent accessibles même avec 300+ messages.
7. **Qualification :** tests unitaires/déterministes, PG concurrence, navigateur et Nora LIVE sur un même candidat, preuves raccordées aux scénarios UAT.

#### O-06-B — Contrats et responsables intégrateurs

| Frontière | Contrat à stabiliser avant Cursor | Source/candidat à examiner |
|---|---|---|
| D1/D2 → D3 lecture | Scope USER/préparation/projet autorisé, accès inter-préparations, pagination stable | `preparation/service.ts`, `db/schema.ts`, `conversation/service.ts` |
| D3 → Nora | O-01/O-02 : recherche sémantique sans routeur lexical métier, provenance et couverture ; limites affichées | `conversation/nora-adapter.ts`, `cognitive-policy.ts`, `knowledge/service.ts`, `d4-read-tools.ts` |
| D3 → proposition | O-03 : message source, génération, identité, format `sfia-document`, intégrité et taille | `conversation/document-act.ts`, `turn-command.ts` |
| Nora → commande | O-04 : qualifications typées, dépendances, consentement USER, une seule admission D4 | `conversation/semantic-qualification.ts`, `conversation/service.ts` |
| D3 ↔ D4 effecteur | O-05 : pré-effet durable, garde d'ownership, clé/corps immuables, révision de base, réponse propriétaire | `conversation/turn-command.ts`, `document/service.ts`, `db/schema.ts` |
| D4 → restitution/UX | Statuts exacts, réconciliation après perte d'ACK, consultation et bibliothèque cohérentes | `conversation/document-act.ts`, `conversation/mission-continuity.ts`, surfaces projet/Document |
| D5/D6 autorité | HumanDecision jamais déduite du modèle ni d'une nouvelle déclaration ; accès et état gouvernés | `pilotage/service.ts`, `decisions/service.ts` et leurs contrats |
| UX minimum indispensable | Composeur et Envoyer accessibles sur fil long, état `UNKNOWN` non masqué | Écrans de conversation du projet, tests BROWSER, captures runtime |

**Le contrat d'acceptation du macro-lot est transversal**, pas une collection de petits correctifs indépendants. Les responsabilités propriétaires sont conservées ; un changement de fonctionnement implique la synchronisation du contrat technique, de l'architecture, de l'as-built et des tests **dans le même cycle de réalisation**.

#### O-06-C — Blast radius et décisions de conception

| Risque / dépendance | Mesure retenue ou condition |
|---|---|
| Contexte Nora limité à six messages tronqués | Conserver le journal complet, ajouter la récupération historique gouvernée O-01 ; pas de « tout mettre dans le prompt » systématique |
| Contradictions et HumanDecision | Séparer interprétation O-02 des décisions propriétaires D5/D6 |
| Proposition ancienne et contenu long | Source O-03 vérifiée, extrait complet et identité robuste ; pas de régénération silencieuse |
| Deux voies de mutation D4 | Unifier l'admission O-04 ; aucune écriture autonome du modèle |
| Doc créé sans révision, duplication CREATE | Verrou/garantie d'unicité et réconciliation à prouver O-05 ; **gate Morris si nouvelle contrainte DB indispensable** |
| REVISE sans garde symétrique/digest de replay | Converger protection de ownership et comparaison du payload avec CREATE |
| Crash ou ACK perdu | Relecture propriétaire, même commande et même clé, réponse honnête ; pas de retry aveugle |
| Sécurité multi-projets | Périmètre serveur et vérification à chaque lecture/écriture, pas de références client faisant autorité |
| SDK et coûts/latence | Démontrer compatibilité `@openai/agents`, sorties typées, streaming, outils, gros contenus, budgets et recherche longue ; aucun seuil de coût fixé sans mesure |
| État UX et RECETTE | Captures runtime, build/lane/DB isolés, nouveau SHA de candidat pour tout correctif ; pas de modification du candidat RECETTE figé |

**Choix prioritaire :** réutiliser le journal D3 et D4 existants, et compléter les garanties là où elles sont absentes. **Choix non autorisés sans Morris :** nouvelle table ou pivot de persistance, changement des responsabilités D1–D9, nouvelle HumanDecision implicite, PR/merge, publication Git REAL, promotion, clôture Gate C. Si un impératif technique démontre l'un de ces besoins, fournir un arbitrage borné : motif, alternatives, blast radius, migration/rollback, dette/exit et preuve.

#### O-06-D — Contrat d'acceptation macro-lot

| Bloc de preuve | Oracle de sortie |
|---|---|
| COG/HIST/TEMP | Réponse Nora correcte et sourcée à partir de messages espacés de 200–300+, contradiction rouge/bleu et source de projet correctement isolée |
| PROP | Document Nora complet exact retrouvé plusieurs tours après, même titre/empreinte, sans recopie |
| D4-CMD | Création puis révision ciblée réellement réalisées par les services D4, sans autorisation fictive |
| REC | Crash/ACK/replay/concurrence résolus sans duplication, statuts OWNER fidèles |
| UX | Fil long utilisable, bouton Envoyer toujours accessible, résultats documentaires inspectables |
| REG | Tous les tests déjà PASS impactés rejoués ; les scénarios BLOCKED ne sont pas transformés en PASS par déduction |

**Gates de preuve :**
- **G2 conception exécutable :** signatures, schémas logiques, flux de données, opérations SQL/contraintes réellement déployées, algorithmes sémantiques, budgets mesurables, politique de reprise et plan de tests documentés ; revue des impacts et dette/exit. Le présent texte **ne clôt pas G2**.
- **G3 mandat Cursor :** possible **seulement après** pré-check Git SFIA v2.6, lecture template/routing depuis Git et GO Morris spécifique. Un seul macro-lot document/code/tests/UX nécessaire, STOP pour besoin de migration ou pivot non autorisés.
- **G4 couverture :** unit/DET + PG + BROWSER avec statistiques et SHA du candidat ; ni local ni FAKE ne prouvent Nora LIVE.
- **G5 usage réel :** journal RECETTE sur un **nouveau candidat figé** : S03-01 proposition/consentement/enregistrement et S03-02 lecture/revision, S04 mémoire, et tests négatifs/régression. Distinguer LIVE provider, D4 PostgreSQL réel et publication Git REAL hors périmètre.
- **Gate C :** demeure **OPEN** jusqu'à arbitrage Morris à partir des preuves utilisateur complètes, y compris les autres anomalies et BLOCKED pertinents.

#### O-06-E — Dette et exit

**Dette acceptée implicitement : aucune.** Optimisation d'indexation/recherche sémantique, stockage pré-effet d'un contenu long, migration d'unicité et ajustements d'admission ne sont pas des choix déjà arbitrés. Les tests et observabilités peuvent réutiliser les interfaces existantes ; pas de contournement temporaire promis comme fonctionnement cible. Toute réduction volontaire de couverture doit être marquée **KNOWN GAP** avec propriétaire, risque, déclencheur et condition d'exit soumise à Morris, et ne peut servir à accepter ML4C.

**Statut global :** O-05 et O-06 sont **DOCUMENTED / CANDIDATE TECHNICAL DESIGN** sous mandat Git Morris. La conception intégrée est suffisamment structurée pour instruire la qualification d'exécutabilité, **pas encore VALIDATED SPEC, IMPLEMENTED, BEHAVIOR PROVEN ni ADOPTED**.


### 5.11 Consolidation G2 — Contrat technique intégré O-01 à O-06 (14 novembre 2026)

**Statut : CONCEPTION TECHNIQUE CONSOLIDÉE PAR CHATGPT — ORIENTATION VALIDÉE PAR MORRIS ; G2 OPEN / EXECUTABILITY NOT YET PROVEN.** Les contrats ci-dessous précisent les §4.7–4.8 et §5.7–5.10, sans les remplacer, sans nouvelle doctrine ni nouvelle autorité. Ce sont des interfaces cibles, pas du code implémenté ni une preuve LIVE.

**Références Git vérifiées le 14/11 :** main à 6cda86bde4aa450abb1d23eedd370a9004ddcbc1 ; branche produit build/next-ml4c-functional-convergence à 67bf6b0b49cd5da64c1e10e872b8f80f4a64efd0 (PR #676 OPEN et non mergée) ; V0.6 sur branche documentaire dédiée. Les 3 commits supplémentaires de main depuis la base commune de la PR doivent être pris en compte au futur contrat Cursor. État Git local, PostgreSQL déployé, BROWSER et Nora LIVE : **NON OBSERVÉS**.

#### 5.11.1 Architecture et responsabilités

| Interface logique cible | Responsable | Entrées / sorties contractuelles |
|---|---|---|
| resolveAuthorizedHistoryScope | D1/D2 + D3 serveur | Session USER, préparation active ; conversations accessibles selon liens propriétaire ; aucun scope librement choisi par le modèle |
| searchConversationHistory | D3 lecture | Scope autorisé, requête, curseur, taille de page → références historiques, couverture, continuation ou motif |
| readConversationMessages | D3 lecture | Scope, références, pagination de contenu → texte exact, offsets, auteur, état et provenance |
| Confrontation temporelle Nora | D3 cognition | Sources lues et statuts D4/D6 → interprétation sourcée ; aucun changement métier |
| sealDocumentCommand | D3 admission serveur | Acte USER, qualification, proposition source, cible et version → binding complet durable pré-effet |
| applyDocumentCommand | D4 propriétaire | Commande immuable, identité, garde, permissions et corrélation → CREATE/REVISE transactionnel |
| reconcileDocumentCommand | D3/D4 lecture | Identité/corrélation d'origine → résultat D4 vérifié, sans retry automatique |

**Une seule voie d'effet D4** : réutiliser conversation/service.ts, turn-command.ts, document/service.ts et les services de lecture propriétaires. Aucun second orchestrateur, registre de brouillons indépendant, moteur parallèle de décision ni autorité implicite pour Nora.

#### 5.11.2 O-01 — Recherche longue, autorisations et pagination

1. Le serveur reconstruit le scope à partir de la session et des préparations accessibles. Pour un projet, il ne lit les autres conversations que si leurs préparations sont réellement liées au même projet et autorisées au Pilote. Les droits sont revalidés à chaque recherche/relecture.
2. Une recherche progressive couvre potentiellement tout le journal conservé ; **200 ou 300 messages ne constituent pas un plafond**. Des limites sont permises par page, outil et budget, pas comme horizon historique définitif.
3. Un parcours commence avec des bornes de lecture cohérentes par conversation (conversationId, maxOrdinal). Le curseur opaque doit être validé côté serveur, lié au périmètre, aux bornes et à un ordre déterministe incluant ordinal et messageId. Des messages nouveaux ne sont pas mélangés silencieusement à une pagination en cours ; droits modifiés → DENIED/STALE et nouvelle évaluation.
4. Nora choisit les pistes de recherche et confronte sémantiquement les résultats. Un filtre lexical peut servir d'accélérateur technique, jamais de routeur exclusif supprimant la possibilité de parcourir des résultats non lexicaux. Les sources pertinentes doivent ensuite être relues intégralement ou par fragments à offsets fidèles.
5. COMPLETE ne signifie exhaustive que dans le périmètre réellement exploré ; budget ou interruption → PARTIAL et reprise. EMPTY ne prouve pas l'absence hors du parcours effectivement couvert. Les messages PENDING/FAILED/INTERRUPTED/UNKNOWN ne deviennent jamais des sources assistant COMPLETE.

**Oracle :** HIST-01…HIST-08, TEMP-07, corpus 300+, isolement inter-projets, pagination concurrente ; mesurer pages, latence, volume et coûts, sans seuil arbitraire excluant le besoin produit.

#### 5.11.3 O-02 — Confrontation sémantique et temporelle

À partir des références réellement lues, Nora représente au minimum auteur/rôle, ordre/date, objet, portée, modalité (réel, hypothèse, recommandation, refus), relation (complément, correction explicite, exception, contradiction, ambiguïté), provenance et limites.

L'exemple rouge → bleu établit la **dernière orientation exprimée** lorsque l'objet et la portée sont identiques et la correction explicite. Il ne révise aucune HumanDecision D6 par conversation. D4/D5/D6 restent les seuls propriétaires de leurs états formels et sont consultés quand applicables. Une comparaison cognitive n'est ni une commande D4 ni un arbitrage métier autonome.

**Oracle :** TEMP-01…TEMP-08 ; aucune hallucination de source ou d'autorité, aucune promotion automatique d'un scénario fictif.

#### 5.11.4 O-03 — Proposition source exacte et transport documentaire

**Ancienne proposition :** message assistant réellement durable, état admissible, assistantMessageId, conversationId, generationId, préparation serveur, titre et contenu exacts. L'unique proposition contractuelle sfia-document est extraite après relecture et vérification. Calculer une empreinte SHA-256 sur la représentation canonique du titre et du contenu ; le digest court actuel n'est qu'un diagnostic. Une proposition ambiguë, tronquée, non close ou non terminale n'est pas transformée en écriture.

**Même tour :** séparer, dans la sortie Nora validée, replyDraft (narration plafonnée actuellement à 12 000 caractères) et un champ documentaire typé distinct contenant titre et Markdown intégral. Le snapshot complet est scellé dans conversation_turn_commands avant tout effet D4 ; au commit terminal, matérialiser la même proposition en fence sfia-document intacte dans le message assistant. Ce sont deux étapes de durabilité de **la même** proposition, pas deux autorités documentaires. Un accord ultérieur utilise la source exacte déjà conservée, jamais une régénération.

La limite propriétaire D4 actuelle est MAX_DOC_CHARS = 100 000 ; le fonctionnement réel du package @openai/agents, de son schéma Zod, des budgets et du streaming finalOutput avec documents longs est à démontrer. Si le contenu intégral ne transite pas sans perte, renvoyer NOT_EXECUTED/refus explicite, et **STOP** si une nouvelle persistance devient nécessaire. Aucun fallback tronqué.

**Oracle :** PROP-01…PROP-10, dont ancienne proposition à 100 tours, trois versions et document dépassant la limite actuelle de replyDraft.

#### 5.11.5 O-04 — Une admission de commande D4

Le binding logique complet, durable **avant tout effet**, doit au minimum porter :

| Champ | Règle |
|---|---|
| commandId, operationId, userMessageId, qualifiedIntentId | Identité stable du message USER et de chaque intention qualifiée |
| action | CREATE ou REVISE, jamais déduite d'un mot-clé métier |
| source | assistantMessageId durable OU snapshot same-turn lié au même commandId |
| preparationId, documentId, baseRevisionId | Cible serveur et base de révision, null uniquement si non applicable |
| title, contentSha256, payloadSha256 | Texte exact vérifiable ; payload couvrant aussi action, source, cible, base et portée |
| correlationKey | Déduite de l'identité de commande/intention/action/cible ; **identique lors du replay** |
| fullContent | Contenu intégral conservé dans le journal ou référence durable vérifiable, jamais uniquement son empreinte |

L'admission exige simultanément : acte USER positif et durable ; qualification sémantique validée REQUEST_EFFECT ; proposition complète, exacte et admissible ; droits actuels, cible et préconditions. Une simple rédaction, une lecture, une négation ou une hypothèse → NOT_EXECUTED ; une demande explicite « rédige et enregistre » peut être exécutée dans le même tour si toutes les gardes passent.

Écrire le binding par CAS sous ownerToken dans conversation_turn_commands.resultJson, en reprenant le mécanisme existant de stashTurnQualification et en préservant ces champs lors de commitTurnTerminal. Ne jamais remplacer le payload d'une commande existante par un nouveau contenu lors de la reprise. Les intentions multiples ont des identités distinctes et leurs dépendances sont respectées ; cible ambiguë → clarification sans effet.

#### 5.11.6 O-05 — Transaction, concurrence, idempotence et vérité

**Écarts confirmés dans le candidat :**
- CREATE : insertion dans documents aujourd'hui **avant**, et hors, la transaction de première révision ; le turnFence y est vérifié trop tard pour empêcher une ligne documentaire incomplète en cas de crash/perte d'ownership.
- REVISE : verrou du document existant, mais pas de paramètre turnFence symétrique et retour d'un replay sur corrélation sans vérification du fingerprint intégral.
- Migrations SQL 003/004 : les index de corrélation document_revisions_corr_uidx et documents_prep_owner_corr_uidx sont définis dans les sources. Leur existence **dans la DB cible** reste non observée ; absence de mapping ORM ne vaut pas absence d'index SQL.

**Transaction cible :**
1. Ordre de verrouillage cohérent, contrôle de la commande et de ownerToken **avant** verrou du document ; droits et cible revalidés au point d'effet.
2. CREATE : insertion du document et de sa première révision dans **une transaction atomique**. Aucun document orphelin créé par cette voie ; statut AVAILABLE seulement si la révision est réellement committée.
3. REVISE : même garde, verrou du document, base AVAILABLE et encore courante, portée de section et octets hors portée préservés, nouvelle révision transactionnelle.
4. Corrélation existante : comparer identité complète, cible, base et payloadSha256 à la commande d'origine (et provenance de révision). Même contenu → même référence ; divergence → CONFLICT et aucune écriture. Un faux replay AVAILABLE est interdit.
5. ACK perdu ou commit terminal échoué après effet : la révision D4 conserve sa vérité propriétaire ; relire par clé originale et restituer documentId/revisionId réellement confirmés. L'état du tour peut rester UNKNOWN, indépendamment de D4.
6. UNKNOWN prolongé : réconciliation en lecture seule, aucune nouvelle corrélation et aucun retry aveugle. Une relance effectrice éventuelle nécessite preuve d'absence sûre et nouvelle garde de la **même commande**.
7. Les éventuelles lignes documentaires historiques incomplètes sont diagnostiquées séparément ; aucune réparation destructive implicite.

**Deux axes non interchangeables :** COMPLETE de la réponse Nora ou du tour ne prouve pas AVAILABLE d'une révision D4. Le verdict applicatif est NOT_EXECUTED, AVAILABLE, FAILED, CONFLICT ou UNKNOWN selon l'étape et les preuves réellement observées.

**Oracle :** REC-01…REC-12, incluant CREATE concurrents, REVISE sur base stale, payload divergent, ownerToken révoqué, rollback, ACK perdu et relecture de vérité.

#### 5.11.7 O-06 — UX minimale, préflight et contrat de preuve

**ML4C inclut l'UX indispensable :** fil long, composeur et Envoyer accessibles avec 300+ messages, source/proposition vérifiables, version déterminée ou clarification, état UNKNOWN fidèle, document/révision inspectables. Le rebranding et la convergence géométrique globale restent à ML4D.

**Préflight bloquant dans le futur contrat Cursor :**

| Réf. | Contrôle à démontrer sur la lane appropriée | Verdict attendu |
|---|---|---|
| PG-01 | Index et schéma PostgreSQL **réellement déployés** sur DEV isolé, contrainte UNIQUE, lock/CAS, CREATE atomique, REVISE concurrent, rollback | Preuve SQL + tests PG ; STOP si une migration structurante s'avère indispensable |
| SDK-01 | Version effectivement installée de @openai/agents, outputType Zod, fin du streaming et finalOutput, champ documentaire complet, interruptions, taille et budget/latence mesurés | Preuve exécutable ; package.json déclare ^0.21.0, sans prouver l'installation runtime |
| REC-01 | Binding durable pré-effet, conservation au commit terminal, perte d'ownership, crash, ACK perdu, réconciliation sur même corrélation | Tests déterministes et PostgreSQL, sans doublon ni faux succès |

**Même macro-lot :** code, tests, UX nécessaire, architecture/as-built Next, documentation et observations transversales. Vérifier HIST/TEMP/PROP/D4-CMD/REC en DET, PostgreSQL concurrence, BROWSER et Nora **LIVE + D4 + PG + bibliothèque**, avec SHA, lane, DB, captures, performances et états d'autorité. Ne pas transformer FAKE, NOT RUN, BLOCKED ou UNKNOWN en PASS. La campagne UAT de 53 scénarios reste historiquement **17 PASS / 6 FAIL / 30 BLOCKED**, notamment ML4C-A-010/A-011 ouverts, jusqu'à nouvelle RECETTE réellement exécutée.

**STOP/gate Morris :** nouvelle table, migration structurante, pivot de persistance, nouvelle autorité, doctrine ou changement de périmètre. ChatGPT qualifie l'alternative, risques, dette/exit, impact/rollback et demande un arbitrage borné. Cursor exécute la technique sous contrat SFIA v2.6, sans arbitrage produit ou architecture.

**Suite :** présent document sur branche candidate → contrat Cursor unique depuis routing + template v2.6 après pré-check et GO spécifique → préflight PG-01/SDK-01/REC-01 → intégration/tests/docs/revue → nouvelle RECETTE → Gate C Morris. La publication de ce document n'autorise ni Cursor, ni PR, ni merge, ni promotion, ni ADOPTED.

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
| HIST-01 à HIST-08 | Couverture historique, pagination, isolement, statut et stabilité (§4.7) | Tests déterministes de lecture et sécurité + preuve Nora LIVE de rappel sémantique |
| TEMP-01 à TEMP-08 | Corrections, contradictions, portée, fiction et HumanDecision (§4.8) | Vérification des sources et états propriétaires + Nora LIVE, aucune autorité inventée |
| PROP-01 à PROP-10 | Identité et intégrité d'une proposition antérieure, droits et séparation des actes (§5.7) | Sources et gardes vérifiées ; effet D4 uniquement démontré en O-04/O-05 |
| D4-CMD-T01 à T10 | Admission gouvernée, droits, création/révision, non-régression et reprise (§5.8) | Tests DET/PG/BROWSER et parcours LIVE ; effets et réconciliation détaillés en O-05 |
| REC-01 à REC-12 | ACK perdu, effet partiel, payload divergent, concurrence, tour UNKNOWN (§5.9) | PG concurrence/crash + restitution LIVE/BROWSER, sans doublon |
| O-06 E2E | Continuité conversationnelle → proposition → admission → effet → reprise → restitution (§5.10) | Nouveau SHA de candidat et traces cross-domain, RECETTE utilisateur distincte des fixtures |
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
| G1 | Cadrage fonctionnel du correctif | V0.7 — O-01/O-02/O-03/O-04 VALIDÉS EN CONTENU ; O-05/O-06 CONCEPTION CONSOLIDÉE §5.11 (orientation Morris) |
| G2 | Conception technique détaillée CT-01 à CT-11 | Contrats cibles consolidés §5.11 ; préflight PG-01 / SDK-01 / REC-01, preuves PG/LIVE et mesures restantes — OPEN |
| G3 | GO d'exécution Cursor | NON DONNÉ |
| G4 | Qualification technique | NON ACQUISE |
| G5 | Nouvelle RECETTE et correction des écarts | NON ENGAGÉE |
| Gate C | Acceptation ML4C | OPEN |

---

## 13. Questions restantes de conception

La vision fonctionnelle et la voie technique cible sont consolidées §5.11. Les éléments restants sont des conditions d'exécutabilité et de preuve, pas des micro-arbitrages produit.

Les sujets ouverts prioritaires sont :

**O-01 — Récupération historique de Nora : VALIDÉ EN CONTENU.** Deux responsabilités logiques de lecture, portées autorisées, pagination, références et couverture §4.7. À finir : signatures TS/API, traitement des lectures concurrentes, algorithme sémantique, budgets/latence et preuves LIVE.

**O-02 — Continuité sémantique et temporelle : VALIDÉ EN CONTENU.** Confrontation Nora des sources O-01, chronologie, portée, corrections, fiction, recommandations et D6 propriétaire §4.8. À finir : interface précise, intégration D4/D5/D6, observabilité, tests LIVE et autorité au point d'effet.

**O-03 — Proposition documentaire récupérable : VALIDÉ EN CONTENU.** Source exacte et durable, empreinte robuste, version identifiable, droits, acte USER séparé, test PROP-01…PROP-10 (§5.7). Reste à qualifier : interfaces, ordre de persistance, source hors format, contenus longs et jonction O-04/O-05.

**O-04 — Mobilisation D4 par Nora : VALIDÉ EN CONTENU.** Une admission/écriture canonique, proposition O-03 et acte USER distingués, gardes et résultat propriétaire, tests D4-CMD-T01…T10 (§5.8). À qualifier : signature API, ordre durable, ownership `REVISE` et reprise O-05.

**O-05 — Résultat et reprise : CONCEPTION CONSOLIDÉE (§5.9, §5.11).** Identité stable, binding pré-effet, garde en transaction, états indépendants, réconciliation sans doublon et douze tests REC. À prouver : contraintes DB réelles, crash et contrats exacts ; gate Morris si migration nécessaire.

**O-06 — Architecture et validation : CONCEPTION CONSOLIDÉE (§5.10, §5.11).** Chaîne intégrée O-01→O-05, responsabilités, blast radius, preuves DET/PG/BROWSER/LIVE et gates. À prouver : exécutabilité, APIs finalisées et comportement réel sous nouveau candidat.

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

## 15. Statut V0.7

**O-01/O-02/O-03/O-04 VALIDATED IN CONTENT BY MORRIS ; O-05/O-06 CONSOLIDATED TECHNICAL DESIGN UNDER MORRIS ORIENTATION — G2 OPEN / EXECUTABILITY NOT YET PROVEN.**

La vision fonctionnelle longue durée Pilote–Nora et la mobilisation documentaire D4 sont clarifiées.

La conception recommandée repose sur une récupération historique progressive, une sélection sémantique sous contrôle de Nora et une mobilisation gouvernée des services documentaires existants.

**O-01, O-02, O-03 et O-04** restent validés en contenu. **O-05 et O-06** sont consolidés dans le contrat cible §5.11, sous orientation approuvée par Morris. Restent à prouver : index PG réellement déployés, transport SDK long, binding pré-effet, concurrence, coût/latence et comportement LIVE. Pas de migration ni d'autorité nouvelle validée. **Suite : contrat Cursor SFIA v2.6 unique après GO spécifique, comportant préflight PG-01 / SDK-01 / REC-01 bloquant**, puis qualification et nouvelle RECETTE.

**Aucun mandat Cursor, GO code, migration, PR, merge, clôture Gate C ou ADOPTED n'est autorisé par ce document.**
