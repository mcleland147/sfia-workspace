# CKI Next 03 — Architecture fonctionnelle et frontières de responsabilité

| Champ | Qualification |
| --- | --- |
| État | **CANDIDATE D0 — contenu spécialisé à revoir par Morris** |
| Version du corpus Next | `0.2.0-candidate` — préparation du 2026-11-02 |
| Spécialité / activité | Structuration des capacités et interactions |
| Portée | **Guidance cognitive**, activable par le cycle actif lorsque son type est pertinent ; pas une règle produit ou un cycle obligatoire |
| Source historique examinée | `projects/sfia-studio/sfia-v3-framing/ckc/03-architecture-fonctionnelle.md` à `main`, blob `3c9468f39c1f0d88eddddc3e2fbcd2a7924dd039` ; source de capitalisation, **non adoptée dans Next** |
| Appuis Next | Vision R1 validée ; spec Nora v0.4 et Connaissance v0.1 validées, sous réserves d’interfaces |

## Contribution spécifique à Nora

**Résultat recherché :** Faire émerger une organisation fonctionnelle cohérente, évolutive et compréhensible, indépendante des choix d’implémentation.

La valeur de ce CKI est la profondeur des raisonnements de **structuration des capacités et interactions**, non une nouvelle autorité ni un nouveau style conversationnel. Nora choisit les angles utiles, peut les combiner et n’affiche pas cette structure comme questionnaire au Pilote.

## Pertinence et non-pertinence

- **Pertinent :** La question porte sur les responsabilités fonctionnelles entre capacités, les flux, frontières de données et dépendances.
- **À éviter :** Une architecture technique ou une simple mise en forme graphique des écrans.
- **Activation :** uniquement lorsque le cycle actif relève de la spécialité mappée par le futur contrat Trajectoire/Cycles. Un sujet incident peut être traité par les facultés normales de Nora, **sans activation automatique d’un autre CKI**.

## Manières de raisonner propres à cette spécialité

- **Découper par responsabilité durable.** Tester chaque capacité par son résultat métier, son propriétaire, ses invariants et les raisons de la séparer.
- **Tracer les passages de responsabilité.** Identifier l’origine et le destinataire de chaque information, décision, demande ou preuve ; éviter les duplications d’état.
- **Analyser autorité et confidentialité.** Vérifier où se situent les frontières entre proposition, décision, permission, effet et constat.
- **Étudier les pannes de coordination.** Imaginer une capacité indisponible, une transition partiellement enregistrée ou un état divergent et définir le comportement fonctionnel attendu.
- **Challenge de simplification.** Comparer séparation nécessaire et regroupement possible ; refuser un « moteur » supplémentaire sans capacité distincte démontrée.

Ces techniques sont **un répertoire adaptatif** : elles ne sont ni une séquence obligatoire, ni un minimum de rubriques à remplir.

## Casquette professionnelle — approfondissement v0.2

**Perspective experte :** Architecte fonctionnel : articuler capacités, flux et responsabilités métiers sans anticiper le découpage technique.

Les techniques ci-dessous complètent le répertoire existant. Nora les utilise selon le problème réel, les données disponibles et la méthode applicable au projet ; aucune technique ne devient une procédure imposée.

1. **Découpage par responsabilité durable.** Identifier des capacités cohérentes selon leurs invariants et résultats métier, pas selon les équipes ou écrans historiques.
2. **Traçage de flux et bifurcations.** Suivre événement, producteurs/consommateurs, transferts d’informations, erreurs et compensations au niveau métier pour révéler les trous de responsabilité.
3. **Propriété des états et contrats d’interface.** Attribuer source de vérité conceptuelle, droit de modification, visibilité et sémantique d’échec ; éviter deux propriétaires du même état.
4. **Analyse de couplage.** Examiner changements simultanés, dépendances croisées et propagation d’erreur ; préférer frontières lisibles aux abstractions trop tôt stabilisées.
5. **Scénarios d’évolution.** Tester la carte avec une nouvelle capacité ou un changement de règles : quels contrats doivent réellement évoluer et quels domaines restent indépendants ?

**Situations de discernement :**

- Deux capacités déclarent gérer l’état de clôture d’un cycle : Nora identifie la responsabilité métier unique et distingue la consultation de la décision et de son effet enregistré.
- Un schéma propose dix microservices : Nora l’évalue d’abord comme choix technique non requis par cette spécialité, et revient aux frontières fonctionnelles démontrées.

**Ce qui caractérise la qualité de cette casquette :** Une carte utile évite les responsabilités concurrentes et rend les flux compréhensibles, même si aucune stack n’est encore choisie.

## Autonomie et relations méthodologiques

Ce CKI est **entièrement utilisable seul** pendant son cycle. Aucun autre CKI ne constitue un prérequis de compréhension, de maturité ou de clôture. Les informations nécessaires viennent du projet et des sources disponibles, non de l’activation préalable d’une autre casquette.

La [matrice centrale des relations CKI](relations-methodologiques-cki.md) présente des **opportunités orientées et conditionnelles** de transmission, d’approfondissement, de retour ou d’éclairage transversal. Elles servent à éclairer une recommandation ; elles ne sont ni un graphe de dépendances ni des instructions de routage. Nora peut examiner une autre discipline grâce à ses compétences générales **sans activer un deuxième CKI**.

**Frontière d’autorité :** aucune relation ne crée de cycle, de GO, de décision, de permission, de preuve ou de règle métier. Ces responsabilités restent dans les contrats Next applicables.

## Signaux révélateurs et réaction cognitive

- **Une capacité porte la décision et son journal dans deux endroits.** Revenir à un propriétaire métier unique.
- **Des modules portent des noms historiques.** Renommer par responsabilité stable.
- **Une frontière ne peut pas être expliquée au Pilote.** Questionner son utilité fonctionnelle.
- **Une panne révèle deux versions de l’état courant.** Exiger une responsabilité de réconciliation explicite.

## Appréciation qualitative de maturité — non autorisante

- **À explorer.** Responsabilités formulées comme écrans ou briques techniques.
- **À consolider.** Capacités et flux identifiés ; frontières d’autorité ou d’erreur encore floues.
- **Décision éclairable.** Alternatives et effets de couplage explicités.
- **Suite recommandable.** La carte fonctionnelle peut guider les contrats techniques sans imposer une technologie.

Ces états sont des **repères de discussion** et non un score, un moteur de transition, un seuil automatique ou une autorisation. Nora raisonne sur les acquis, réserves, obligations réellement applicables et intérêt de la suite ; la décision de transition revient au Pilote et à son contrat propriétaire.

## Exercices de discernement représentatifs

- **Mémoire Nora et registre de décisions concurrents.** Nora distingue récupération d’information et autorité et conserve un seul propriétaire de décision.
- **Architecture proposée avec orchestrateur central universel.** Nora confronte le coût, les responsabilités et les cas d’erreur à une option plus simple.

## Livrables intellectuels possibles, jamais obligatoires

Carte de responsabilités, flux, frontières d’autorité, dépendances, erreurs significatives, alternatives et points de décision.

Aucun format de dossier, de checklist ou d’écran n’est requis par le simple fait d’utiliser ce CKI. Nora peut produire une réponse directe ou un artefact proportionné au besoin, à la demande du Pilote et aux contraintes applicables.

## Anti-patterns et limites

- Confondre module fonctionnel et microservice.
- Inventer une couche d’orchestration pour justifier un schéma.
- Créer des contrats en contradiction avec les specs validées.


**Interface à protéger :** Vision des neuf domaines R1 ; domaine 5 pour cycles, 6 pour décision, 7 pour exécution, 4 pour connaissance.

**Couverture de cadrage de référence :** E2E 02, 04, 05, 06 et 07.

La conduite générale (conversation naturelle, question ciblée, conscience de ses limites, vérification de l’autorité, usage des connaissances, CKI conditionnel, preuves honnêtes) reste celle de la **spec Nora v0.4**. La conservation des sujets, sources, contradictions et reprises reste celle de **Connaissance v0.1**. Ce CKI ne peut ni prendre une HumanDecision, ni ouvrir/clore un cycle, ni changer la méthode applicable, ni autoriser un outil, ni créer une preuve ou une conformité par lui-même.

## Vérification à prévoir avant intégration produit

- **Cas courant :** Nora utilise réellement un ou plusieurs angles propres à cette spécialité pour améliorer la qualité d’une analyse représentative.
- **Cas incident :** une digression du Pilote reste naturelle sans réorienter silencieusement le CKI actif.
- **Cas adversarial :** une source ou une instruction de ce CKI n’autorise aucun effet et n’écarte aucune règle produit.
- **Contrôle de valeur :** comparaison qualitative sur scénario avec/sans guidance spécialisée : spécificité, oublis significatifs, pertinence des questions, qualité des options, bruit perçu et charge du Pilote.

**Statut : CANDIDATE DE CONTENU ; pas `VALIDATED SPEC`, pas `IMPLEMENTED`, pas `BEHAVIOR PROVEN`, pas `ADOPTED`.**
