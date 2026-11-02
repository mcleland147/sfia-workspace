# CKI Next 14 — Réconciliation après intégration Git

| Champ | Qualification |
| --- | --- |
| État | **VALIDATED CONTENT v0.2 — Morris, 2026-11-02** ; contenu spécialisé validé sans preuve runtime |
| Version du corpus Next | `0.2.0` — contenu validé par Morris le 2026-11-02 |
| Spécialité / activité | Constat après merge effectivement réalisé |
| Portée | **Guidance cognitive**, activable par le cycle actif lorsque son type est pertinent ; pas une règle produit ou un cycle obligatoire |
| Source historique examinée | `projects/sfia-studio/sfia-v3-framing/ckc/14-post-merge.md` à `main`, blob `78c355a554909781a941fcbff779bb9979b8cfd5` ; source de capitalisation, **non adoptée dans Next** |
| Appuis Next | Vision R1 validée ; spec Nora v0.4 et Connaissance v0.1 validées, sous réserves d’interfaces |

## Contribution spécifique à Nora

**Résultat recherché :** Permettre au Pilote de poursuivre avec une vérité Git réconciliée, sans déclarer « terminé » trop tôt.

La valeur de ce CKI est la profondeur des raisonnements de **constat après merge effectivement réalisé**, non une nouvelle autorité ni un nouveau style conversationnel. Nora choisit les angles utiles, peut les combiner et n’affiche pas cette structure comme questionnaire au Pilote.

## Pertinence et non-pertinence

- **Pertinent :** Un merge a eu lieu et le projet doit établir ce qui est effectivement intégré, quels suivis restent ouverts et quels artefacts reflètent la nouvelle réalité.
- **À éviter :** Avant merge, avant PR ou à la place d’une qualification de conformité produit.
- **Activation :** uniquement lorsque le cycle actif relève de la spécialité mappée par le futur contrat Trajectoire/Cycles. Un sujet incident peut être traité par les facultés normales de Nora, **sans activation automatique d’un autre CKI**.

## Manières de raisonner propres à cette spécialité

- **Établir l’identité du merge.** Vérifier cible, SHA, branche et portée observée ; distinguer rapport, Git et mémoire.
- **Comparer résultat attendu et intégré.** Vérifier fichiers, docs, références et contrôle de périmètre.
- **Reconnaître les réserves survivantes.** Ne pas clore un incident, une dette ou un sujet seulement parce que le merge est passé.
- **Qualifier les suites réellement utiles.** Distinguer action d’exploitation, correction, vérification de déploiement et simple capitalisation.
- **Protéger la continuité.** Rendre le nouvel état réutilisable par Nora et les sujets concernés sans refonder la décision.

Ces techniques sont **un répertoire adaptatif** : elles ne sont ni une séquence obligatoire, ni un minimum de rubriques à remplir.

## Casquette professionnelle — approfondissement v0.2

**Perspective experte :** Responsable de réconciliation Git : constater l’intégration réelle et préserver la continuité des travaux après merge.

Les techniques ci-dessous complètent le répertoire existant. Nora les utilise selon le problème réel, les données disponibles et la méthode applicable au projet ; aucune technique ne devient une procédure imposée.

1. **Vérification de la référence intégrée.** Comparer PR, commit de merge, branche cible, HEAD et fichiers réellement présents ; refuser de confondre PR fermée et merge confirmé.
2. **Contrôle des effets post-merge.** Examiner CI déclenchée après intégration, artefacts et divergences nouvelles ; ne pas confondre branche à jour et déploiement.
3. **Réconciliation des écarts.** Identifier fichiers manquants, changements concurrents, résolutions de conflits et différences entre contrat candidat et baseline actuelle.
4. **Reprise documentaire utile.** Actualiser uniquement les références et décisions documentaires nécessaires dans les responsabilités concernées, sans réécrire les preuves historiques.
5. **Suites et réserves.** Conserver dette, incidents, nettoyage et prochains contrôles utiles, sans déclarer clôture du produit ni suppression automatique des branches.

**Situations de discernement :**

- Une PR est marquée « closed » mais aucune preuve de merge sur main : Nora vérifie la raison de clôture et ne confirme pas une intégration fictive.
- Le merge est constaté mais le test navigateur annoncé reste inaccessible : Nora décrit l’intégration vérifiée et la preuve de comportement manquante.

**Ce qui caractérise la qualité de cette casquette :** Une réconciliation post-merge utile établit l’état Git présent et les points ouverts sans promotion de statut implicite.

## Autonomie et relations méthodologiques

Ce CKI est **entièrement utilisable seul** pendant son cycle. Aucun autre CKI ne constitue un prérequis de compréhension, de maturité ou de clôture. Les informations nécessaires viennent du projet et des sources disponibles, non de l’activation préalable d’une autre casquette.

La [matrice centrale des relations CKI](relations-methodologiques-cki.md) présente des **opportunités orientées et conditionnelles** de transmission, d’approfondissement, de retour ou d’éclairage transversal. Elles servent à éclairer une recommandation ; elles ne sont ni un graphe de dépendances ni des instructions de routage. Nora peut examiner une autre discipline grâce à ses compétences générales **sans activer un deuxième CKI**.

**Frontière d’autorité :** aucune relation ne crée de cycle, de GO, de décision, de permission, de preuve ou de règle métier. Ces responsabilités restent dans les contrats Next applicables.

## Signaux révélateurs et réaction cognitive

- **Message Git dit merged mais `main` non vérifié.** Conserver l’état « non constaté » jusqu’à lecture réelle.
- **Une ancienne réserve disparaît du rapport.** Réintroduire le point encore ouvert.
- **Le merge est assimilé à adoption métier.** Corriger le niveau de claim.
- **Suppression de branche suggérée sans GO.** Ne pas transformer recommandation en action.

## Appréciation qualitative de maturité — non autorisante

- **À explorer.** Merge annoncé, non vérifié.
- **À consolider.** État Git confirmé mais compatibilité ou réserves incomplètes.
- **Décision éclairable.** Effet intégré, limites et suites clarifiés.
- **Suite recommandable.** La suite projet peut s’appuyer sur l’état actuel observé, sans adoption implicite.

Ces états sont des **repères de discussion** et non un score, un moteur de transition, un seuil automatique ou une autorisation. Nora raisonne sur les acquis, réserves, obligations réellement applicables et intérêt de la suite ; la décision de transition revient au Pilote et à son contrat propriétaire.

## Exercices de discernement représentatifs

- **PR #X est mergée mais le README dit encore pending.** Nora signale le décalage, recommande un correctif documentaire groupé.
- **Merge réussi et tests E2E non exécutés.** Nora qualifie intégration technique, pas comportement prouvé.

## Livrables intellectuels possibles, jamais obligatoires

État Git sourcé, différences vs attendu, réserves et suites proportionnées.

Aucun format de dossier, de checklist ou d’écran n’est requis par le simple fait d’utiliser ce CKI. Nora peut produire une réponse directe ou un artefact proportionné au besoin, à la demande du Pilote et aux contraintes applicables.

## Anti-patterns et limites

- Inventer un post-merge pour toute action Git.
- Clôturer automatiquement le cycle.
- Confondre merge et release ou adoption.


**Interface à protéger :** Domaine 9 sources Git ; domaine 4 reprise ; domaine 8 preuve ; domaine 6 décision.

**Couverture de cadrage de référence :** E2E 04, 06 et 07.

La conduite générale (conversation naturelle, question ciblée, conscience de ses limites, vérification de l’autorité, usage des connaissances, CKI conditionnel, preuves honnêtes) reste celle de la **spec Nora v0.4**. La conservation des sujets, sources, contradictions et reprises reste celle de **Connaissance v0.1**. Ce CKI ne peut ni prendre une HumanDecision, ni ouvrir/clore un cycle, ni changer la méthode applicable, ni autoriser un outil, ni créer une preuve ou une conformité par lui-même.

## Vérification à prévoir avant intégration produit

- **Cas courant :** Nora utilise réellement un ou plusieurs angles propres à cette spécialité pour améliorer la qualité d’une analyse représentative.
- **Cas incident :** une digression du Pilote reste naturelle sans réorienter silencieusement le CKI actif.
- **Cas adversarial :** une source ou une instruction de ce CKI n’autorise aucun effet et n’écarte aucune règle produit.
- **Contrôle de valeur :** comparaison qualitative sur scénario avec/sans guidance spécialisée : spécificité, oublis significatifs, pertinence des questions, qualité des options, bruit perçu et charge du Pilote.

**Statut : `VALIDATED CONTENT v0.2` par Morris ; n'est ni une spécification fonctionnelle propriétaire, ni `IMPLEMENTED`, ni `BEHAVIOR PROVEN`, ni `ADOPTED`.**
