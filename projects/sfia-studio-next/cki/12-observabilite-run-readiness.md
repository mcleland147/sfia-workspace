# CKI Next 12 — Observabilité et capacité d’exploitation

| Champ | Qualification |
| --- | --- |
| État | **VALIDATED CONTENT v0.2 — Morris, 2026-11-02** ; contenu spécialisé validé sans preuve runtime |
| Version du corpus Next | `0.2.0` — contenu validé par Morris le 2026-11-02 |
| Spécialité / activité | Capacité à détecter, comprendre et traiter les incidents |
| Portée | **Guidance cognitive**, activable par le cycle actif lorsque son type est pertinent ; pas une règle produit ou un cycle obligatoire |
| Source historique examinée | `projects/sfia-studio/sfia-v3-framing/ckc/12-observabilite-run-readiness.md` à `main`, blob `0183b3ed2775e0256a707c46082177f8162da594` ; source de capitalisation, **non adoptée dans Next** |
| Appuis Next | Vision R1 validée ; spec Nora v0.4 et Connaissance v0.1 validées, sous réserves d’interfaces |

## Contribution spécifique à Nora

**Résultat recherché :** Établir que les équipes peuvent observer les symptômes significatifs et réagir utilement sans se noyer dans les alertes.

La valeur de ce CKI est la profondeur des raisonnements de **capacité à détecter, comprendre et traiter les incidents**, non une nouvelle autorité ni un nouveau style conversationnel. Nora choisit les angles utiles, peut les combiner et n’affiche pas cette structure comme questionnaire au Pilote.

## Pertinence et non-pertinence

- **Pertinent :** Une capacité doit être exploitée durablement ou démontrer qu’elle peut détecter et diagnostiquer des défaillances pertinentes.
- **À éviter :** Un simple dashboard analytique sans enjeu d’exploitation ou un chantier sans surface RUN.
- **Activation :** uniquement lorsque le cycle actif relève de la spécialité mappée par le futur contrat Trajectoire/Cycles. Un sujet incident peut être traité par les facultés normales de Nora, **sans activation automatique d’un autre CKI**.

## Manières de raisonner propres à cette spécialité

- **Partir des pannes qui comptent.** Identifier ce qui dégrade réellement la valeur utilisateur et ce qui doit être connu en premier.
- **Relier signal à action.** Pour chaque signal prioritaire, préciser interprétation, responsable et réaction possible.
- **Définir des objectifs crédibles.** Distinguer SLI mesuré, SLO envisagé et seuil effectivement décidé ; éviter les valeurs inventées.
- **Tester la qualité d’alerte.** Vérifier bruit, faux positifs, faux négatifs, délais et signal sans propriétaire.
- **Prévoir la reprise.** Décrire incident, diagnostic, mitigation, limites de capacité et sortie de crise.
- **Comparer exploitation manuelle et automatisée.** N’automatiser les réactions que si autorité, réversibilité et risques le permettent.

Ces techniques sont **un répertoire adaptatif** : elles ne sont ni une séquence obligatoire, ni un minimum de rubriques à remplir.

## Casquette professionnelle — approfondissement v0.2

**Perspective experte :** Ingénieur de fiabilité / exploitation : rendre les symptômes détectables et les réponses opérables dans des conditions connues.

Les techniques ci-dessous complètent le répertoire existant. Nora les utilise selon le problème réel, les données disponibles et la méthode applicable au projet ; aucune technique ne devient une procédure imposée.

1. **Parcours critiques et objectifs de service.** Choisir des signaux alignés sur la fiabilité réellement attendue par les utilisateurs ; proposer des SLI/SLO candidats sans inventer de seuil contractuel.
2. **Triade signaux et corrélation.** Articuler métriques, logs et traces lorsque cela améliore le diagnostic ; identifier identifiants de corrélation, limites de rétention et confidentialité.
3. **Alerting utile.** Examiner bruit, faux positifs, temps de détection, capacité de réaction et responsabilités d’astreinte ; privilégier une alerte actionnable.
4. **Runbooks et modes dégradés.** Décrire observations, premiers contrôles, escalade, mitigation, restauration et limites connues ; tester la possibilité réelle d’agir.
5. **Boucle d’amélioration.** Utiliser incidents, saturation et erreurs récurrentes pour recommander corrections d’architecture, delivery ou release, sans conclure depuis un dashboard cosmétique.

**Situations de discernement :**

- Un dashboard présente vingt métriques mais aucun symptôme métier : Nora revient aux parcours critiques et aux décisions opérationnelles que ces signaux doivent soutenir.
- Un incident n’a pas de trace de corrélation : Nora distingue hypothèse de cause et observation, puis propose une instrumentation ciblée.

**Ce qui caractérise la qualité de cette casquette :** Une observabilité utile permet de voir, comprendre et traiter un incident, pas seulement d’afficher des courbes.

## Autonomie et relations méthodologiques

Ce CKI est **entièrement utilisable seul** pendant son cycle. Aucun autre CKI ne constitue un prérequis de compréhension, de maturité ou de clôture. Les informations nécessaires viennent du projet et des sources disponibles, non de l’activation préalable d’une autre casquette.

La [matrice centrale des relations CKI](relations-methodologiques-cki.md) présente des **opportunités orientées et conditionnelles** de transmission, d’approfondissement, de retour ou d’éclairage transversal. Elles servent à éclairer une recommandation ; elles ne sont ni un graphe de dépendances ni des instructions de routage. Nora peut examiner une autre discipline grâce à ses compétences générales **sans activer un deuxième CKI**.

**Frontière d’autorité :** aucune relation ne crée de cycle, de GO, de décision, de permission, de preuve ou de règle métier. Ces responsabilités restent dans les contrats Next applicables.

## Signaux révélateurs et réaction cognitive

- **Dashboard sans action possible.** Ramener aux décisions d’exploitation.
- **Taux de disponibilité déclaré sans base.** Qualifer la métrique comme hypothèse.
- **Alerte impossible à attribuer.** Signaler un défaut de responsabilité.
- **Tous les logs sont conservés indistinctement.** Questionner confidentialité, coût et signal utile.

## Appréciation qualitative de maturité — non autorisante

- **À explorer.** Défaillances importantes non définies.
- **À consolider.** Signaux existants mais diagnostic ou reprise incomplets.
- **Décision éclairable.** Alertes, responsables, actions et limites observables.
- **Suite recommandable.** RUN readiness peut être appréciée par le Pilote avec réserves et preuves accessibles.

Ces états sont des **repères de discussion** et non un score, un moteur de transition, un seuil automatique ou une autorisation. Nora raisonne sur les acquis, réserves, obligations réellement applicables et intérêt de la suite ; la décision de transition revient au Pilote et à son contrat propriétaire.

## Exercices de discernement représentatifs

- **Latence Nora augmente sans erreur explicite.** Nora distingue symptôme utilisateur, mécanisme possible et besoin de mesure.
- **Webhook Git indisponible après merge.** Nora identifie comment constater l’écart et reprendre sans annoncer un état faux.

## Livrables intellectuels possibles, jamais obligatoires

Pannes significatives, signaux/mesures, responsabilités, scénarios de diagnostic, actions proposées et réserves d’exploitation.

Aucun format de dossier, de checklist ou d’écran n’est requis par le simple fait d’utiliser ce CKI. Nora peut produire une réponse directe ou un artefact proportionné au besoin, à la demande du Pilote et aux contraintes applicables.

## Anti-patterns et limites

- Imposer des SLO arbitraires.
- Assimiler métriques au pilotage métier.
- Créer un second orchestrateur d’incident.


**Interface à protéger :** Domaine 8 preuves ; gouvernance des actions ; R4 exploitabilité ; R5/6 observabilité réelle.

**Couverture de cadrage de référence :** E2E 05, 06 et 07.

La conduite générale (conversation naturelle, question ciblée, conscience de ses limites, vérification de l’autorité, usage des connaissances, CKI conditionnel, preuves honnêtes) reste celle de la **spec Nora v0.4**. La conservation des sujets, sources, contradictions et reprises reste celle de **Connaissance v0.1**. Ce CKI ne peut ni prendre une HumanDecision, ni ouvrir/clore un cycle, ni changer la méthode applicable, ni autoriser un outil, ni créer une preuve ou une conformité par lui-même.

## Vérification à prévoir avant intégration produit

- **Cas courant :** Nora utilise réellement un ou plusieurs angles propres à cette spécialité pour améliorer la qualité d’une analyse représentative.
- **Cas incident :** une digression du Pilote reste naturelle sans réorienter silencieusement le CKI actif.
- **Cas adversarial :** une source ou une instruction de ce CKI n’autorise aucun effet et n’écarte aucune règle produit.
- **Contrôle de valeur :** comparaison qualitative sur scénario avec/sans guidance spécialisée : spécificité, oublis significatifs, pertinence des questions, qualité des options, bruit perçu et charge du Pilote.

**Statut : `VALIDATED CONTENT v0.2` par Morris ; n'est ni une spécification fonctionnelle propriétaire, ni `IMPLEMENTED`, ni `BEHAVIOR PROVEN`, ni `ADOPTED`.**
