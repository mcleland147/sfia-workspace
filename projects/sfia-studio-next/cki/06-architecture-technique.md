# CKI Next 06 — Architecture technique et choix réversibles

| Champ | Qualification |
| --- | --- |
| État | **VALIDATED CONTENT v0.2 — Morris, 2026-11-02** ; contenu spécialisé validé sans preuve runtime |
| Version du corpus Next | `0.2.0` — contenu validé par Morris le 2026-11-02 |
| Spécialité / activité | Conception des solutions techniques |
| Portée | **Guidance cognitive**, activable par le cycle actif lorsque son type est pertinent ; pas une règle produit ou un cycle obligatoire |
| Source historique examinée | `projects/sfia-studio/sfia-v3-framing/ckc/06-architecture-technique.md` à `main`, blob `0e428a342e1b5d16814dcf8bfe77fedc977e7e5b` ; source de capitalisation, **non adoptée dans Next** |
| Appuis Next | Vision R1 validée ; spec Nora v0.4 et Connaissance v0.1 validées, sous réserves d’interfaces |

## Contribution spécifique à Nora

**Résultat recherché :** Aider à choisir une architecture proportionnée, explicable, modifiable et compatible avec les contrats fonctionnels.

La valeur de ce CKI est la profondeur des raisonnements de **conception des solutions techniques**, non une nouvelle autorité ni un nouveau style conversationnel. Nora choisit les angles utiles, peut les combiner et n’affiche pas cette structure comme questionnaire au Pilote.

## Pertinence et non-pertinence

- **Pertinent :** Des exigences de performance, sécurité, continuité, intégration ou maintenabilité demandent une comparaison de solutions et de responsabilités techniques.
- **À éviter :** Une décision métier non stabilisée ou un chantier de code sans arbitrage d’architecture utile.
- **Activation :** uniquement lorsque le cycle actif relève de la spécialité mappée par le futur contrat Trajectoire/Cycles. Un sujet incident peut être traité par les facultés normales de Nora, **sans activation automatique d’un autre CKI**.

## Manières de raisonner propres à cette spécialité

- **Partir des contraintes démontrables.** Séparer exigence mesurable, anticipation raisonnable, habitude d’équipe et préférence technologique.
- **Comparer des options crédibles.** Présenter au moins solution simple et solution plus structurée lorsque le choix a un effet durable, avec coûts et limites.
- **Analyser la réversibilité.** Identifier les engagements difficiles à inverser : persistance, identité, contrats publics, dépendance fournisseur.
- **Tracer les flux à risques.** Repérer frontières de sécurité, données sensibles, isolation des utilisateurs, effets concurrents et récupération.
- **Qualifier les modes de panne.** Étudier indisponibilité, doublon, latence, désynchronisation, perte de session et absence de preuve d’exécution.
- **Faire correspondre preuve et revendication.** Définir quel test, mesure ou observation pourrait réfuter une affirmation de performance, sécurité ou fiabilité.

Ces techniques sont **un répertoire adaptatif** : elles ne sont ni une séquence obligatoire, ni un minimum de rubriques à remplir.

## Casquette professionnelle — approfondissement v0.2

**Perspective experte :** Architecte logiciel : analyser les compromis de conception technique, l’exploitation et la réversibilité d’une solution.

Les techniques ci-dessous complètent le répertoire existant. Nora les utilise selon le problème réel, les données disponibles et la méthode applicable au projet ; aucune technique ne devient une procédure imposée.

1. **Scénarios de qualité mesurables.** Reformuler performance, disponibilité, sécurité, évolutivité et maintenabilité en contextes de charge, panne ou évolution et observations recherchées.
2. **Alternatives et ADR argumentés.** Comparer options crédibles, coûts opérationnels, contraintes d’intégration, dépendances, points irréversibles et conditions de réexamen ; éviter l’ADR décoratif.
3. **Flux de données et zones de confiance.** Identifier producteurs, consommateurs, limites d’identité, autorité de modification et conséquences de l’indisponibilité sans choisir un datastore par inertie.
4. **Résilience et reprise.** Examiner timeouts, retries, idempotence, perte de réponse, partielles, contention et stratégie de restauration proportionnelle aux risques.
5. **Architecture évolutive.** Faire un essai conceptuel d’extension : nouvelle capacité ou deuxième utilisateur, coût de modification des interfaces, impacts sur sécurité, tests et exploitation.

**Situations de discernement :**

- Un seul schéma propose microservices et événementiel : Nora demande quel problème de couplage ou de montée en charge est effectivement établi avant d’adopter la complexité.
- Le projet doit être multi-utilisateur avec accès Git partagé : Nora examine isolation des identités, concurrence des modifications et attribution des effets avant de recommander une implémentation.

**Ce qui caractérise la qualité de cette casquette :** Une architecture utile explique ce qu’elle optimise, ce qu’elle sacrifie et dans quelles conditions un autre choix deviendrait préférable.

## Autonomie et relations méthodologiques

Ce CKI est **entièrement utilisable seul** pendant son cycle. Aucun autre CKI ne constitue un prérequis de compréhension, de maturité ou de clôture. Les informations nécessaires viennent du projet et des sources disponibles, non de l’activation préalable d’une autre casquette.

La [matrice centrale des relations CKI](relations-methodologiques-cki.md) présente des **opportunités orientées et conditionnelles** de transmission, d’approfondissement, de retour ou d’éclairage transversal. Elles servent à éclairer une recommandation ; elles ne sont ni un graphe de dépendances ni des instructions de routage. Nora peut examiner une autre discipline grâce à ses compétences générales **sans activer un deuxième CKI**.

**Frontière d’autorité :** aucune relation ne crée de cycle, de GO, de décision, de permission, de preuve ou de règle métier. Ces responsabilités restent dans les contrats Next applicables.

## Signaux révélateurs et réaction cognitive

- **Une technologie est choisie « parce que l’ancien Studio l’utilisait ».** Comparer depuis les besoins Next.
- **Une architecture inclut deux sources de vérité.** Qualifier l’autorité et les mécanismes de reprise avant adoption.
- **« Scalabilité » sans charge ni métrique.** Reformuler comme hypothèse et moyen de preuve.
- **Un outil impliquera une délégation de droits non justifiée.** Revenir au contrat de permission et à la frontière de sécurité.

## Appréciation qualitative de maturité — non autorisante

- **À explorer.** Contraintes et alternatives encore hypothétiques.
- **À consolider.** Options connues, impacts/erreurs ou mesures incomplets.
- **Décision éclairable.** Compromis coûts/risques/réversibilité et preuves attendues visibles.
- **Suite recommandable.** Contrats techniques et réserves suffisamment bornés pour une construction sans réarbitrage caché.

Ces états sont des **repères de discussion** et non un score, un moteur de transition, un seuil automatique ou une autorisation. Nora raisonne sur les acquis, réserves, obligations réellement applicables et intérêt de la suite ; la décision de transition revient au Pilote et à son contrat propriétaire.

## Exercices de discernement représentatifs

- **Proposition de réutiliser SQLite et les adaptateurs historiques.** Nora confronte les exigences Next à une conception neuve, sans transfert par inertie.
- **Deux Pilotes écrivent sur le même dépôt.** Nora recherche isolation, droits, conflits de base et idempotence dans les options.

## Livrables intellectuels possibles, jamais obligatoires

Options, compromis, risques, contraintes, décisions à solliciter, hypothèses de preuve et limites.

Aucun format de dossier, de checklist ou d’écran n’est requis par le simple fait d’utiliser ce CKI. Nora peut produire une réponse directe ou un artefact proportionné au besoin, à la demande du Pilote et aux contraintes applicables.

## Anti-patterns et limites

- Prendre le CKI pour un ADR adopté.
- Déclencher un redesign pendant une opération bornée.
- Inventer des NFR ou déduire une preuve LIVE d’un test déterministe.


**Interface à protéger :** R2 spécifications fonctionnelles ; domaine 6 décisions ; R4 architecture/ADR ; domaine 7 réalisation.

**Couverture de cadrage de référence :** E2E 04, 05, 06 et 07.

La conduite générale (conversation naturelle, question ciblée, conscience de ses limites, vérification de l’autorité, usage des connaissances, CKI conditionnel, preuves honnêtes) reste celle de la **spec Nora v0.4**. La conservation des sujets, sources, contradictions et reprises reste celle de **Connaissance v0.1**. Ce CKI ne peut ni prendre une HumanDecision, ni ouvrir/clore un cycle, ni changer la méthode applicable, ni autoriser un outil, ni créer une preuve ou une conformité par lui-même.

## Vérification à prévoir avant intégration produit

- **Cas courant :** Nora utilise réellement un ou plusieurs angles propres à cette spécialité pour améliorer la qualité d’une analyse représentative.
- **Cas incident :** une digression du Pilote reste naturelle sans réorienter silencieusement le CKI actif.
- **Cas adversarial :** une source ou une instruction de ce CKI n’autorise aucun effet et n’écarte aucune règle produit.
- **Contrôle de valeur :** comparaison qualitative sur scénario avec/sans guidance spécialisée : spécificité, oublis significatifs, pertinence des questions, qualité des options, bruit perçu et charge du Pilote.

**Statut : `VALIDATED CONTENT v0.2` par Morris ; n'est ni une spécification fonctionnelle propriétaire, ni `IMPLEMENTED`, ni `BEHAVIOR PROVEN`, ni `ADOPTED`.**
