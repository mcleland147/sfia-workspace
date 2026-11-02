# CKI Next — Matrice des relations méthodologiques (candidate v0.2)

| Champ | Qualification |
| --- | --- |
| Nature | **Carte d’opportunités de raisonnement**, non graphe de dépendances ni workflow |
| Statut | **D0 CANDIDATE**, dérivée des arbitrages de Morris du 2026-11-02 ; pas une spécification propriétaire de cycles |
| Corpus couvert | 15 CKI Next candidats `0.2.0-candidate` ; catalogue extensible, aucun plafond à 15 |
| Rattachement fonctionnel proposé | Domaine 5 — Trajectoire et cycles, à confirmer dans sa future spécification ; contenu CKI distinct |
| État Git | **Publiée sur branche candidate R2** ; aucune PR ni merge `main` |

## 1. Sémantique de la matrice

La matrice explique **quand une spécialité peut enrichir le travail d’une autre**. Elle ne déclare jamais qu’un cycle source ou cible a été ouvert, exécuté ou achevé. Le sens `A → B` représente une opportunité *depuis la perspective A* ; la relation inverse doit être explicitée séparément si elle apporte une valeur différente.

| Code | Relation | Usage cognitif |
| --- | --- | --- |
| `T` | **Transmission d’acquis** | Réutiliser les éléments pertinents déjà établis, même sans cycle B antérieur ou futur |
| `A` | **Approfondissement conseillé** | Identifier une exploration spécialisée susceptible d’apporter de la valeur ; pas d’ouverture implicite |
| `R` | **Retour / requalification** | Signaler qu’un acquis doit être examiné dans la responsabilité propriétaire ; aucune réouverture automatique |
| `E` | **Éclairage transversal** | Mobiliser des angles d’analyse d’une autre discipline sans charger son CKI |

**Invariants non négociables de ce contenu :**

- **Autonomie :** chaque CKI fonctionne seul ; une relation absente ne limite jamais Nora, une relation présente n’est jamais requise.
- **Un seul CKI principal :** celui du type de cycle réellement actif ; la matrice ne charge pas un autre CKI et ne crée pas de composition dynamique.
- **Contexte avant carte :** Nora tient compte de la finalité actuelle, de l’état réel du projet, des acquis, de l’incertitude, des réserves et de la valeur de la suite avant toute suggestion.
- **Sans cycle :** Nora conserve ses connaissances et sa capacité d’analyse. La matrice n’impose pas la création d’un cycle pour une question ponctuelle.
- **Aucune contrainte normative nouvelle :** droits, suspensions, décisions, contrats, preuves et véritables gates viennent des responsabilités Next applicables, jamais du lien CKI.
- **Aucun parcours standard obligatoire :** `Cadrage → Conception → UX → Delivery → QA` est un cas possible, pas une séquence à exécuter.
- **Spécialités transversales hors catalogue :** FinOps et GreenOps ne sont pas incluses dans les 15 CKI initiaux. Nora peut mobiliser ces connaissances lorsqu’elles sont pertinentes ; leur éventuelle introduction comme types de cycle/CKI dédiés relève d’un futur arbitrage.

## 2. Relations orientées et contextuelles

Les suggestions ci-dessous sont **candidates** : elles indiquent un contexte de pertinence et un apport intellectuel, pas un passage requis vers le CKI cible.

### Vue synthétique (liens potentiels, pas de dépendances)

| CKI actif de référence | `T` Transmission | `A` Approfondir | `R` Retour | `E` Éclairage transversal |
| --- | --- | --- | --- | --- |
| **01 — Cadrage** | [02](02-conception-fonctionnelle.md) | [04](04-ux-ui.md), [06](06-architecture-technique.md) | — | [10](10-securite-rssi.md) |
| **02 — Conception fonctionnelle** | [03](03-architecture-fonctionnelle.md), [04](04-ux-ui.md) | [09](09-qa-validation.md) | — | — |
| **03 — Architecture fonctionnelle** | [06](06-architecture-technique.md), [04](04-ux-ui.md) | — | [02](02-conception-fonctionnelle.md) | — |
| **04 — UX/UI** | [08](08-delivery-implementation.md) | [09](09-qa-validation.md) | [02](02-conception-fonctionnelle.md) | — |
| **05 — Backlog / user stories** | [08](08-delivery-implementation.md), [09](09-qa-validation.md) | — | [02](02-conception-fonctionnelle.md) | — |
| **06 — Architecture technique** | [08](08-delivery-implementation.md) | [07](07-integration-devops.md) | — | [10](10-securite-rssi.md), [12](12-observabilite-run-readiness.md) |
| **07 — Intégration / DevOps** | [11](11-deploiement-release.md) | — | [08](08-delivery-implementation.md) | [09](09-qa-validation.md) |
| **08 — Delivery / implémentation** | [09](09-qa-validation.md) | [07](07-integration-devops.md), [13](13-pr-readiness.md) | [06](06-architecture-technique.md) | — |
| **09 — QA / validation** | [11](11-deploiement-release.md) | — | [08](08-delivery-implementation.md), [02](02-conception-fonctionnelle.md) | — |
| **10 — Sécurité / RSSI** | — | — | — | [06](06-architecture-technique.md), [08](08-delivery-implementation.md), [11](11-deploiement-release.md), [01](01-cadrage.md) |
| **11 — Déploiement / release** | [12](12-observabilite-run-readiness.md) | [14](14-post-merge.md) | [09](09-qa-validation.md) | — |
| **12 — Observabilité / RUN** | — | [11](11-deploiement-release.md) | [06](06-architecture-technique.md) | [08](08-delivery-implementation.md) |
| **13 — PR readiness** | [14](14-post-merge.md) | [09](09-qa-validation.md) | [08](08-delivery-implementation.md) | — |
| **14 — Post-merge** | [15](15-capitalisation-rex.md) | — | [08](08-delivery-implementation.md), [13](13-pr-readiness.md) | — |
| **15 — Capitalisation / REX** | — | [01](01-cadrage.md), [02](02-conception-fonctionnelle.md), [06](06-architecture-technique.md), [08](08-delivery-implementation.md) | — | — |

Cette vue est un index de possibilités, pas un ordre de priorité, une whitelist ou un graphe d’exécution. Les conditions et bénéfices précis sont détaillés plus bas.

### Relations documentées avec conditions et apports

| CKI de perspective | Relation | Spécialité liée | Condition indicative | Apport possible de Nora |
| --- | :---: | --- | --- | --- |
| [01 — Cadrage](01-cadrage.md) | `T` | [02 — Conception fonctionnelle](02-conception-fonctionnelle.md) | Le besoin et ses frontières sont suffisamment éclairés | Transmettre objectifs, acteurs, exceptions majeures et décisions de périmètre. |
| [01 — Cadrage](01-cadrage.md) | `A` | [04 — UX/UI](04-ux-ui.md) | Une incertitude sur les usages ou l’expérience influence la valeur | Recommander une investigation des tâches et parcours utilisateurs. |
| [01 — Cadrage](01-cadrage.md) | `A` | [06 — Architecture technique](06-architecture-technique.md) | La faisabilité ou un compromis technique peut influer sur le cadrage | Proposer une étude d’options techniques bornée, non un choix de stack implicite. |
| [01 — Cadrage](01-cadrage.md) | `E` | [10 — Sécurité / RSSI](10-securite-rssi.md) | Des données sensibles ou des impacts réglementaires apparaissent | Attirer l’attention sur actifs, menaces et risques structurants dès le cadrage. |
| [02 — Conception fonctionnelle](02-conception-fonctionnelle.md) | `T` | [03 — Architecture fonctionnelle](03-architecture-fonctionnelle.md) | Les règles et responsabilités doivent être distribuées entre capacités | Fournir invariants, objets et flux fonctionnels à articuler. |
| [02 — Conception fonctionnelle](02-conception-fonctionnelle.md) | `T` | [04 — UX/UI](04-ux-ui.md) | Les comportements métier doivent devenir des interactions compréhensibles | Fournir parcours, états, refus et décisions à rendre visibles. |
| [02 — Conception fonctionnelle](02-conception-fonctionnelle.md) | `A` | [09 — QA / validation](09-qa-validation.md) | Des règles critiques ou ambiguës demandent une stratégie de vérification | Suggérer oracles, scénarios négatifs et preuves d’acceptation. |
| [03 — Architecture fonctionnelle](03-architecture-fonctionnelle.md) | `T` | [06 — Architecture technique](06-architecture-technique.md) | Les frontières fonctionnelles sont assez claires pour étudier des solutions | Transmettre responsabilités, invariants et contraintes d’interface. |
| [03 — Architecture fonctionnelle](03-architecture-fonctionnelle.md) | `R` | [02 — Conception fonctionnelle](02-conception-fonctionnelle.md) | La séparation des responsabilités révèle une règle conflictuelle | Recommander de consolider la règle auprès de son propriétaire. |
| [03 — Architecture fonctionnelle](03-architecture-fonctionnelle.md) | `T` | [04 — UX/UI](04-ux-ui.md) | Le découpage fonctionnel influence les parcours et la navigation | Exposer flux, dépendances et surfaces d’interaction. |
| [04 — UX/UI](04-ux-ui.md) | `T` | [08 — Delivery / implémentation](08-delivery-implementation.md) | Le contrat d’interaction est suffisamment défini pour une réalisation | Transmettre états UI, erreurs, accessibilité et conditions d’observation. |
| [04 — UX/UI](04-ux-ui.md) | `R` | [02 — Conception fonctionnelle](02-conception-fonctionnelle.md) | Un parcours révèle une règle difficile à expliquer ou appliquer | Signaler l’écart entre expérience et comportement métier. |
| [04 — UX/UI](04-ux-ui.md) | `A` | [09 — QA / validation](09-qa-validation.md) | L’utilisabilité ou les états critiques doivent être éprouvés | Suggérer tests de tâches et cas d’échec représentatifs. |
| [05 — Backlog / user stories](05-backlog-user-stories.md) | `T` | [08 — Delivery / implémentation](08-delivery-implementation.md) | Des incréments de valeur et critères observables sont bornés | Fournir périmètre, dépendances et conditions d’acceptation du slice. |
| [05 — Backlog / user stories](05-backlog-user-stories.md) | `T` | [09 — QA / validation](09-qa-validation.md) | Les résultats d’un incrément demandent vérification | Fournir critères et scénarios adaptés au risque. |
| [05 — Backlog / user stories](05-backlog-user-stories.md) | `R` | [02 — Conception fonctionnelle](02-conception-fonctionnelle.md) | Les découpages révèlent une règle métier ou frontière manquante | Recommander consolidation fonctionnelle avant engagement. |
| [06 — Architecture technique](06-architecture-technique.md) | `T` | [08 — Delivery / implémentation](08-delivery-implementation.md) | Les contrats techniques nécessaires à la réalisation sont clarifiés | Fournir choix, compromis, frontières, NFR et risques résiduels. |
| [06 — Architecture technique](06-architecture-technique.md) | `A` | [07 — Intégration / DevOps](07-integration-devops.md) | Un choix dépend fortement des environnements ou de la livraison | Proposer une étude de promotion, récupération et reproductibilité. |
| [06 — Architecture technique](06-architecture-technique.md) | `E` | [10 — Sécurité / RSSI](10-securite-rssi.md) | La solution expose des frontières de confiance ou des données sensibles | Faire examiner menaces, accès et contrôles proportionnés. |
| [06 — Architecture technique](06-architecture-technique.md) | `E` | [12 — Observabilité / RUN](12-observabilite-run-readiness.md) | Des exigences de fiabilité ou de diagnostic influencent la conception | Faire examiner signaux, modes dégradés et exploitabilité. |
| [07 — Intégration / DevOps](07-integration-devops.md) | `T` | [11 — Déploiement / release](11-deploiement-release.md) | Une stratégie de promotion technique contribue à une release | Transmettre artefacts, environnements, contrôles et rollback vérifié. |
| [07 — Intégration / DevOps](07-integration-devops.md) | `R` | [08 — Delivery / implémentation](08-delivery-implementation.md) | L’intégration révèle un défaut d’interface ou de test | Faire requalifier la correction dans le périmètre du travail. |
| [07 — Intégration / DevOps](07-integration-devops.md) | `E` | [09 — QA / validation](09-qa-validation.md) | Les pipelines annoncent un succès de contrôle | Inviter à distinguer contrôle technique, comportement et preuve globale. |
| [08 — Delivery / implémentation](08-delivery-implementation.md) | `T` | [09 — QA / validation](09-qa-validation.md) | Un incrément réalisé requiert une vérification de ses effets | Transmettre changement observé, scénarios, traces et zones inconnues. |
| [08 — Delivery / implémentation](08-delivery-implementation.md) | `A` | [07 — Intégration / DevOps](07-integration-devops.md) | Le changement doit traverser des environnements ou une CI | Recommander une étude d’intégration et de reprise proportionnée. |
| [08 — Delivery / implémentation](08-delivery-implementation.md) | `R` | [06 — Architecture technique](06-architecture-technique.md) | La réalisation révèle un compromis architectural invalidé | Proposer une réévaluation argumentée, sans pivot silencieux. |
| [08 — Delivery / implémentation](08-delivery-implementation.md) | `A` | [13 — PR readiness](13-pr-readiness.md) | Une branche pourrait être soumise à une revue Git | Examiner intégrabilité, base, diff, couverture et réserves. |
| [09 — QA / validation](09-qa-validation.md) | `R` | [08 — Delivery / implémentation](08-delivery-implementation.md) | Une anomalie reproductible pointe vers une implémentation | Proposer correction bornée et tests de non-régression ciblés. |
| [09 — QA / validation](09-qa-validation.md) | `R` | [02 — Conception fonctionnelle](02-conception-fonctionnelle.md) | L’oracle révèle une contradiction ou une lacune du contrat métier | Proposer clarification de la règle propriétaire, pas un test arbitraire. |
| [09 — QA / validation](09-qa-validation.md) | `T` | [11 — Déploiement / release](11-deploiement-release.md) | Les résultats de qualification éclairent une mise à disposition | Fournir preuves, limitations, anomalies et réserves classées. |
| [10 — Sécurité / RSSI](10-securite-rssi.md) | `E` | [06 — Architecture technique](06-architecture-technique.md) | Des menaces ou contrôles affectent des choix techniques | Faire considérer frontières de confiance et compromis de sécurité. |
| [10 — Sécurité / RSSI](10-securite-rssi.md) | `E` | [08 — Delivery / implémentation](08-delivery-implementation.md) | Une réalisation touche des données ou opérations sensibles | Examiner chemins d’abus, contrôle des entrées et privilèges. |
| [10 — Sécurité / RSSI](10-securite-rssi.md) | `E` | [11 — Déploiement / release](11-deploiement-release.md) | Une exposition utilisateur modifie le risque | Éclairer mesures de mitigation et réserves de sécurité. |
| [10 — Sécurité / RSSI](10-securite-rssi.md) | `E` | [01 — Cadrage](01-cadrage.md) | Le risque peut modifier le périmètre ou la valeur du projet | Signaler les conséquences métier et la décision compétente. |
| [11 — Déploiement / release](11-deploiement-release.md) | `T` | [12 — Observabilité / RUN](12-observabilite-run-readiness.md) | Une release nécessite une surveillance opérationnelle ciblée | Transmettre parcours critiques, signaux et fenêtre de suivi. |
| [11 — Déploiement / release](11-deploiement-release.md) | `R` | [09 — QA / validation](09-qa-validation.md) | Une condition de release révèle une preuve insuffisante | Recommander vérification complémentaire, sans GO automatique. |
| [11 — Déploiement / release](11-deploiement-release.md) | `A` | [14 — Post-merge](14-post-merge.md) | Une intégration Git doit être réconciliée après publication | Rappeler la distinction merge / livraison / adoption. |
| [12 — Observabilité / RUN](12-observabilite-run-readiness.md) | `R` | [06 — Architecture technique](06-architecture-technique.md) | Des incidents ou limites d’instrumentation révèlent un défaut de conception | Proposer options de résilience ou d’observabilité. |
| [12 — Observabilité / RUN](12-observabilite-run-readiness.md) | `A` | [11 — Déploiement / release](11-deploiement-release.md) | La capacité de surveillance conditionne la préparation opérationnelle | Proposer scénarios de réaction, alertes et critères de dégradation. |
| [12 — Observabilité / RUN](12-observabilite-run-readiness.md) | `E` | [08 — Delivery / implémentation](08-delivery-implementation.md) | Des erreurs réelles pointent une correction du code | Transmettre symptôme, corrélation et limites du diagnostic. |
| [13 — PR readiness](13-pr-readiness.md) | `T` | [14 — Post-merge](14-post-merge.md) | Une PR est réellement intégrée après revue et autorisations | Transmettre référence du changement pour vérification sur la baseline. |
| [13 — PR readiness](13-pr-readiness.md) | `R` | [08 — Delivery / implémentation](08-delivery-implementation.md) | Le diff n’est pas cohérent ou dépasse le contrat | Proposer correction ou requalification du périmètre. |
| [13 — PR readiness](13-pr-readiness.md) | `A` | [09 — QA / validation](09-qa-validation.md) | Des tests annoncés ne couvrent pas un risque déterminant | Recommander la preuve adaptée avant présentation de Ready. |
| [14 — Post-merge](14-post-merge.md) | `T` | [15 — Capitalisation / REX](15-capitalisation-rex.md) | L’intégration a produit des enseignements réutilisables | Fournir faits Git constatés, réserves et écarts documentés. |
| [14 — Post-merge](14-post-merge.md) | `R` | [08 — Delivery / implémentation](08-delivery-implementation.md) | Le résultat après merge diverge du contrat candidat | Signaler les différences et proposer une correction bornée. |
| [14 — Post-merge](14-post-merge.md) | `R` | [13 — PR readiness](13-pr-readiness.md) | Une anomalie d’intégration révèle une faiblesse de contrôle préalable | Recommander amélioration des contrôles d’intégrabilité. |
| [15 — Capitalisation / REX](15-capitalisation-rex.md) | `A` | [01 — Cadrage](01-cadrage.md) | Un apprentissage change l’appréciation initiale du problème | Proposer un recadrage limité aux faits nouveaux. |
| [15 — Capitalisation / REX](15-capitalisation-rex.md) | `A` | [02 — Conception fonctionnelle](02-conception-fonctionnelle.md) | Une leçon concerne une règle fonctionnelle récurrente | Proposer amélioration du contrat propriétaire sous validation. |
| [15 — Capitalisation / REX](15-capitalisation-rex.md) | `A` | [06 — Architecture technique](06-architecture-technique.md) | Une leçon affecte un compromis technique | Proposer réévaluation argumentée de l’option ou de sa dette. |
| [15 — Capitalisation / REX](15-capitalisation-rex.md) | `A` | [08 — Delivery / implémentation](08-delivery-implementation.md) | Une leçon concerne le processus de réalisation | Proposer une pratique testable dans de futurs travaux, sans doctrine automatique. |

## 3. Exemples de lecture et situations négatives

### Exemple : architecture technique vers DevOps

Le cycle actif reste **Architecture technique**. Nora découvre que les contraintes de déploiement peuvent modifier un choix d’architecture. La matrice lui fournit une relation `A` vers DevOps. Nora propose de préciser environnements, promotions et rollback **dans la conversation courante**, ou suggère un futur cycle dédié si le Pilote y voit une étape cohérente. La proposition ne change ni le CKI actif ni les autorisations.

### Exemple : QA vers Conception fonctionnelle

Une vérification met en évidence un oracle contradictoire. Le lien `R` encourage Nora à examiner le contrat fonctionnel propriétaire. Elle ne déclare ni la règle modifiée, ni le cycle rouvert. La décision de modification et ses effets éventuels restent gouvernés.

### Exemple : éclairage FinOps / GreenOps

En **Architecture technique**, Nora peut analyser coût, consommation et durabilité comme facteurs techniques ou métier utiles. En l’absence de CKI dédié FinOps/GreenOps, elle n’invente ni cycle ni activation de spécialité. Si cette activité devient un objectif autonome, un **nouveau type de cycle + CKI autonome** peut être proposé pour décision.

### Tests négatifs à préserver

- **Aucun cycle de Cadrage dans l’historique :** le CKI Conception fonctionnelle reste utilisable ; Nora demande uniquement le contexte déterminant manquant.
- **Le CKI actif n’a aucun lien vers une spécialité souhaitée :** Nora peut analyser le sujet directement ; la matrice n’est pas une liste blanche de capacités.
- **La matrice suggère PR readiness alors que le Pilote demande une analyse simple :** pas de cycle, PR, merge ou nouvelle gouvernance créée.
- **Un lien suggère QA alors que les preuves font défaut :** Nora expose la limite et propose une vérification ; elle ne présente pas l’objet comme conforme.
- **Le Pilote refuse une transition :** Nora respecte la décision et poursuit un travail cognitif licite sous la trajectoire effectivement retenue.
- **L’ajout d’un seizième CKI :** aucun des quinze contenus n’est invalidé ; les relations nouvelles sont renseignées seulement lorsqu’une valeur réelle est identifiée.

## 4. Propriété, maintenance et trajectoire

**R2 :** le futur contrat fonctionnel *Trajectoire et cycles* définit la correspondance type de cycle → CKI autonome, les transitions gouvernées et la consommation éventuelle d’une relation comme aide cognitive. Cette matrice **n’est pas** un modèle de droits, d’états ni de transitions.

**R3 :** l’UX ne doit pas exposer la matrice entière comme une navigation imposée ; une recommandation naturelle et éventuellement un lien explicable suffisent.

**R4 :** si une représentation technique est nécessaire, la concevoir sans runtime multi-CKI, graphe d’orchestration ou héritage automatique du DoctrinePackage historique. La matrice peut rester une ressource éditoriale.

**R5/R6 :** comparer cas avec/sans guidance sur pertinence des passerelles, détection d’impact et absence de suggestions intempestives ; éprouver les scénarios négatifs, sans déclarer de comportement démontré prématurément.

**Sources :** vision R1 §§2.16–2.19, spécification Nora v0.4, Connaissance v0.1, corpus historique CKC (capitalisation non autorisante), arbitrages de Morris du 2026-11-02.

**Verdict : `MATRICE DE RELATIONS CKI NEXT — D0 CANDIDATE`**. Ni contrat propriétaire de cycles validé, ni implémentation, ni preuve runtime.
