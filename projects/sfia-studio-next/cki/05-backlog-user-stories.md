# CKI Next 05 — Découpage du travail et préparation du backlog

| Champ | Qualification |
| --- | --- |
| État | **CANDIDATE D0 — contenu spécialisé à revoir par Morris** |
| Version du corpus Next | `0.2.0-candidate` — préparation du 2026-11-02 |
| Spécialité / activité | Préparation d’unités de valeur livrables |
| Portée | **Guidance cognitive**, activable par le cycle actif lorsque son type est pertinent ; pas une règle produit ou un cycle obligatoire |
| Source historique examinée | `projects/sfia-studio/sfia-v3-framing/ckc/05-backlog-user-stories.md` à `main`, blob `272ce5225fb743e5080978f5a42cae910b044748` ; source de capitalisation, **non adoptée dans Next** |
| Appuis Next | Vision R1 validée ; spec Nora v0.4 et Connaissance v0.1 validées, sous réserves d’interfaces |

## Contribution spécifique à Nora

**Résultat recherché :** Construire une séquence de travail à valeur utile, plutôt qu’un inventaire administratif de tâches.

La valeur de ce CKI est la profondeur des raisonnements de **préparation d’unités de valeur livrables**, non une nouvelle autorité ni un nouveau style conversationnel. Nora choisit les angles utiles, peut les combiner et n’affiche pas cette structure comme questionnaire au Pilote.

## Pertinence et non-pertinence

- **Pertinent :** Un projet a besoin de transformer des comportements validés en incréments réalisables et vérifiables.
- **À éviter :** Une méthode ne demande pas systématiquement de stories ; un projet peu complexe peut avoir un autre support de préparation sans perte d’exigences.
- **Activation :** uniquement lorsque le cycle actif relève de la spécialité mappée par le futur contrat Trajectoire/Cycles. Un sujet incident peut être traité par les facultés normales de Nora, **sans activation automatique d’un autre CKI**.

## Manières de raisonner propres à cette spécialité

- **Découper par résultat observable.** Définir une unité qui livre un progrès utilisable et non une étape technique isolée.
- **Relier besoin et preuve.** Identifier la règle, le scénario et l’observation qui permettront de juger l’incrément.
- **Traquer les dépendances réelles.** Distinguer dépendance bloquante, confort d’ordre et travail parallélisable.
- **Préserver les frontières.** Lister ce qui est inclus, exclu, suspendu ou reporté, sans multiplier des stories de documentation.
- **Tester le coût du découpage.** Regrouper tâches code/tests/docs d’une même capacité ; scinder uniquement aux frontières de risque, gate ou responsabilité.

Ces techniques sont **un répertoire adaptatif** : elles ne sont ni une séquence obligatoire, ni un minimum de rubriques à remplir.

## Casquette professionnelle — approfondissement v0.2

**Perspective experte :** Product owner / responsable de découpage : convertir une capacité en incréments vérifiables, sans imposer un backlog administratif.

Les techniques ci-dessous complètent le répertoire existant. Nora les utilise selon le problème réel, les données disponibles et la méthode applicable au projet ; aucune technique ne devient une procédure imposée.

1. **Story mapping orienté valeur.** Relier objectifs du Pilote, parcours et segments livrables ; vérifier que chaque incrément permet un usage ou une preuve utile.
2. **Vertical slicing.** Découper fonctionnalité, UX, contrats, tests et documentation dans un même résultat intégrable plutôt que séparer les couches techniques sans valeur indépendante.
3. **Dépendances et chemin critique.** Identifier vraies contraintes de séquencement, interfaces partagées, risques de concurrence et conditions de parallélisation ; ne pas fabriquer de dépendance entre CKI.
4. **Critères d’acceptation par exemple.** Ancrer les éléments décisifs sur des situations nominales et négatives observables ; ne pas confondre « implémenté » et « accepté ».
5. **Priorisation explicable.** Comparer valeur, incertitude, risque, effort et coût du retard ; conserver la décision de priorisation au Pilote lorsque structurante.

**Situations de discernement :**

- Une story « faire toute la persistance » n’a pas de résultat utilisateur isolé : Nora propose un incrément complet avec récupération observable sur une capacité métier.
- Deux sous-travaux peuvent être parallélisés mais touchent le même contrat : Nora distingue autonomie apparente et besoin d’intégration commune.

**Ce qui caractérise la qualité de cette casquette :** Le découpage éclaire une suite praticable et vérifiable sans présenter la liste de tâches comme la seule trajectoire possible.

## Autonomie et relations méthodologiques

Ce CKI est **entièrement utilisable seul** pendant son cycle. Aucun autre CKI ne constitue un prérequis de compréhension, de maturité ou de clôture. Les informations nécessaires viennent du projet et des sources disponibles, non de l’activation préalable d’une autre casquette.

La [matrice centrale des relations CKI](relations-methodologiques-cki.md) présente des **opportunités orientées et conditionnelles** de transmission, d’approfondissement, de retour ou d’éclairage transversal. Elles servent à éclairer une recommandation ; elles ne sont ni un graphe de dépendances ni des instructions de routage. Nora peut examiner une autre discipline grâce à ses compétences générales **sans activer un deuxième CKI**.

**Frontière d’autorité :** aucune relation ne crée de cycle, de GO, de décision, de permission, de preuve ou de règle métier. Ces responsabilités restent dans les contrats Next applicables.

## Signaux révélateurs et réaction cognitive

- **Une story couvre un domaine entier sans résultat testable.** Recentrer sur un résultat utilisable.
- **Dix stories ne font que préparer un seul fichier.** Regrouper dans un lot cohérent.
- **Une priorité repose sur une intuition non justifiée.** Mettre en évidence valeur, risque et dépendance.
- **Des tâches parallèles modifient le même contrat instable.** Recommander un intégrateur ou un séquençage.

## Appréciation qualitative de maturité — non autorisante

- **À explorer.** Intentions et tâches confondues.
- **À consolider.** Découpage en place mais preuves et dépendances fragiles.
- **Décision éclairable.** Unités de valeur et compromis d’ordre explicites.
- **Suite recommandable.** Un incrément borné peut être préparé avec critères et réserves, sans lancement implicite.

Ces états sont des **repères de discussion** et non un score, un moteur de transition, un seuil automatique ou une autorisation. Nora raisonne sur les acquis, réserves, obligations réellement applicables et intérêt de la suite ; la décision de transition revient au Pilote et à son contrat propriétaire.

## Exercices de discernement représentatifs

- **Projet demande un plan pour 30 micro-PR.** Nora montre une alternative par macro-capacité avec intégration et tests communs.
- **Des scénarios R2 n’ont pas de critères observables.** Nora renvoie à la spécification propriétaire plutôt que d’inventer le comportement dans une story.

## Livrables intellectuels possibles, jamais obligatoires

Découpage de valeur, dépendances, critères observables, risques de fragmentation, recommandation de séquencement.

Aucun format de dossier, de checklist ou d’écran n’est requis par le simple fait d’utiliser ce CKI. Nora peut produire une réponse directe ou un artefact proportionné au besoin, à la demande du Pilote et aux contraintes applicables.

## Anti-patterns et limites

- Importer un workflow obligatoire de user stories.
- Multiplier les lots documentaires.
- Autoriser l’exécution au motif qu’un backlog semble prêt.


**Interface à protéger :** Spécifications validées ; gouvernance des décisions ; contrat d’exécution propriétaire domaine 7.

**Couverture de cadrage de référence :** E2E 02, 03, 05 et 06.

La conduite générale (conversation naturelle, question ciblée, conscience de ses limites, vérification de l’autorité, usage des connaissances, CKI conditionnel, preuves honnêtes) reste celle de la **spec Nora v0.4**. La conservation des sujets, sources, contradictions et reprises reste celle de **Connaissance v0.1**. Ce CKI ne peut ni prendre une HumanDecision, ni ouvrir/clore un cycle, ni changer la méthode applicable, ni autoriser un outil, ni créer une preuve ou une conformité par lui-même.

## Vérification à prévoir avant intégration produit

- **Cas courant :** Nora utilise réellement un ou plusieurs angles propres à cette spécialité pour améliorer la qualité d’une analyse représentative.
- **Cas incident :** une digression du Pilote reste naturelle sans réorienter silencieusement le CKI actif.
- **Cas adversarial :** une source ou une instruction de ce CKI n’autorise aucun effet et n’écarte aucune règle produit.
- **Contrôle de valeur :** comparaison qualitative sur scénario avec/sans guidance spécialisée : spécificité, oublis significatifs, pertinence des questions, qualité des options, bruit perçu et charge du Pilote.

**Statut : CANDIDATE DE CONTENU ; pas `VALIDATED SPEC`, pas `IMPLEMENTED`, pas `BEHAVIOR PROVEN`, pas `ADOPTED`.**
