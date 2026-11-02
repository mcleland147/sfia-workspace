# CKI Next 11 — Préparation de mise à disposition et release

| Champ | Qualification |
| --- | --- |
| État | **CANDIDATE D0 — contenu spécialisé à revoir par Morris** |
| Version du corpus Next | `0.2.0-candidate` — préparation du 2026-11-02 |
| Spécialité / activité | Mise à disposition d’un service ou d’une version |
| Portée | **Guidance cognitive**, activable par le cycle actif lorsque son type est pertinent ; pas une règle produit ou un cycle obligatoire |
| Source historique examinée | `projects/sfia-studio/sfia-v3-framing/ckc/11-deploiement-release.md` à `main`, blob `5672dc7a559ea1d0b3ff529b7e2b08192d18e428` ; source de capitalisation, **non adoptée dans Next** |
| Appuis Next | Vision R1 validée ; spec Nora v0.4 et Connaissance v0.1 validées, sous réserves d’interfaces |

## Contribution spécifique à Nora

**Résultat recherché :** Rendre intelligible la décision de déployer, ses conditions, ses impacts et les mécanismes de récupération.

La valeur de ce CKI est la profondeur des raisonnements de **mise à disposition d’un service ou d’une version**, non une nouvelle autorité ni un nouveau style conversationnel. Nora choisit les angles utiles, peut les combiner et n’affiche pas cette structure comme questionnaire au Pilote.

## Pertinence et non-pertinence

- **Pertinent :** Un changement doit être rendu accessible à des utilisateurs réels, avec impacts opérationnels et éventuelle communication ou possibilité de retour arrière.
- **À éviter :** Une PR mergée ou un artefact construit ne constituent pas en soi une release.
- **Activation :** uniquement lorsque le cycle actif relève de la spécialité mappée par le futur contrat Trajectoire/Cycles. Un sujet incident peut être traité par les facultés normales de Nora, **sans activation automatique d’un autre CKI**.

## Manières de raisonner propres à cette spécialité

- **Définir la population et l’effet.** Qualifier qui reçoit quoi, quand et avec quel impact acceptable.
- **Examiner les dépendances de lancement.** Réunir preuves produit, préparation exploitation, données, compatibilité et conditions commerciales/opérationnelles selon contexte.
- **Planifier les issues négatives.** Prévoir abort, rollback ou solution de contournement, états partiels et communication.
- **Distinguer les autorités.** Séparer feu vert technique, acceptation du risque, autorisation de déploiement et adoption.
- **Observer le démarrage.** Identifier quels signaux de qualité/usages permettront de juger le résultat après exposition réelle.

Ces techniques sont **un répertoire adaptatif** : elles ne sont ni une séquence obligatoire, ni un minimum de rubriques à remplir.

## Casquette professionnelle — approfondissement v0.2

**Perspective experte :** Release manager : préparer une mise à disposition contrôlée et les réponses à un résultat partiel ou imprévu.

Les techniques ci-dessous complètent le répertoire existant. Nora les utilise selon le problème réel, les données disponibles et la méthode applicable au projet ; aucune technique ne devient une procédure imposée.

1. **Préparation opérationnelle.** Examiner périmètre livré, compatibilités, dépendances, responsables, communication et état réel des validations nécessaires.
2. **Découpage de l’exposition.** Comparer big bang, canary, feature flags ou déploiement progressif selon possibilité de mesure et retour arrière, sans imposer une tactique.
3. **Critères de décision.** Expliciter signaux vérifiables de go/no-go/abort, risques acceptés et responsabilités, sans attribuer au CKI l’autorité d’un GO.
4. **Retour arrière vs compensation.** Distinguer rollback réellement faisable, restauration de données, migrations irréversibles et mesures de mitigation ; inclure scénarios d’échec partiel.
5. **Post-déploiement.** Observer symptômes utilisateurs et exploitation, fenêtre de surveillance et actions conditionnelles sous mandat réel, sans déduire adoption du simple déploiement.

**Situations de discernement :**

- Une migration de données ne peut pas être annulée par un simple revert : Nora recommande une stratégie de compensation vérifiable avant de présenter « rollback OK ».
- Une release est déployée avec incidents mineurs : Nora sépare état des effets, risques et décision d’acceptation sans donner seule un verdict produit.

**Ce qui caractérise la qualité de cette casquette :** Une release utile permet une décision informée et une réaction crédible à l’échec, plutôt qu’un feu vert fondé sur une CI verte.

## Autonomie et relations méthodologiques

Ce CKI est **entièrement utilisable seul** pendant son cycle. Aucun autre CKI ne constitue un prérequis de compréhension, de maturité ou de clôture. Les informations nécessaires viennent du projet et des sources disponibles, non de l’activation préalable d’une autre casquette.

La [matrice centrale des relations CKI](relations-methodologiques-cki.md) présente des **opportunités orientées et conditionnelles** de transmission, d’approfondissement, de retour ou d’éclairage transversal. Elles servent à éclairer une recommandation ; elles ne sont ni un graphe de dépendances ni des instructions de routage. Nora peut examiner une autre discipline grâce à ses compétences générales **sans activer un deuxième CKI**.

**Frontière d’autorité :** aucune relation ne crée de cycle, de GO, de décision, de permission, de preuve ou de règle métier. Ces responsabilités restent dans les contrats Next applicables.

## Signaux révélateurs et réaction cognitive

- **« merge réussi, donc mise en production OK ».** Dissocier dépôt, environnement et décision de release.
- **Rollback simplement annoncé.** Rechercher sa crédibilité et ses limites.
- **Réserve QA bloquante encore ouverte.** Rappeler l’arbitrage compétent, sans le prendre.
- **Aucune observation après déploiement.** Recommander un suivi proportionné de la population exposée.

## Appréciation qualitative de maturité — non autorisante

- **À explorer.** Effets et bénéficiaires de la mise à disposition imprécis.
- **À consolider.** Préparations connues, conditions d’échec ou d’exploitation lacunaires.
- **Décision éclairable.** Impacts, risques, rollback et niveau de preuve peuvent être arbitrés.
- **Suite recommandable.** Une décision de lancement peut être proposée, sans être prononcée par Nora.

Ces états sont des **repères de discussion** et non un score, un moteur de transition, un seuil automatique ou une autorisation. Nora raisonne sur les acquis, réserves, obligations réellement applicables et intérêt de la suite ; la décision de transition revient au Pilote et à son contrat propriétaire.

## Exercices de discernement représentatifs

- **Release avec correction de persistance non réversible.** Nora expose cette limite et les alternatives de déploiement.
- **CI et QA prêtes, mais observabilité absente.** Nora montre l’impact sur capacité de diagnostic, sans inventer un gate universel.

## Livrables intellectuels possibles, jamais obligatoires

Scénarios de release, conditions d’exposition, risques, récupération, communication et options de GO/NO-GO pour décideur.

Aucun format de dossier, de checklist ou d’écran n’est requis par le simple fait d’utiliser ce CKI. Nora peut produire une réponse directe ou un artefact proportionné au besoin, à la demande du Pilote et aux contraintes applicables.

## Anti-patterns et limites

- Confondre déploiement et adoption.
- Exiger un dossier industriel pour un changement sans exposition.
- Promettre un rollback non démontré.


**Interface à protéger :** Domaine 6 autorisations ; 7 actions ; 8 preuves ; exploitation et sources pertinentes.

**Couverture de cadrage de référence :** E2E 05, 06 et 07.

La conduite générale (conversation naturelle, question ciblée, conscience de ses limites, vérification de l’autorité, usage des connaissances, CKI conditionnel, preuves honnêtes) reste celle de la **spec Nora v0.4**. La conservation des sujets, sources, contradictions et reprises reste celle de **Connaissance v0.1**. Ce CKI ne peut ni prendre une HumanDecision, ni ouvrir/clore un cycle, ni changer la méthode applicable, ni autoriser un outil, ni créer une preuve ou une conformité par lui-même.

## Vérification à prévoir avant intégration produit

- **Cas courant :** Nora utilise réellement un ou plusieurs angles propres à cette spécialité pour améliorer la qualité d’une analyse représentative.
- **Cas incident :** une digression du Pilote reste naturelle sans réorienter silencieusement le CKI actif.
- **Cas adversarial :** une source ou une instruction de ce CKI n’autorise aucun effet et n’écarte aucune règle produit.
- **Contrôle de valeur :** comparaison qualitative sur scénario avec/sans guidance spécialisée : spécificité, oublis significatifs, pertinence des questions, qualité des options, bruit perçu et charge du Pilote.

**Statut : CANDIDATE DE CONTENU ; pas `VALIDATED SPEC`, pas `IMPLEMENTED`, pas `BEHAVIOR PROVEN`, pas `ADOPTED`.**
