# CKI Next — Corpus autonome de spécialisation cognitive (15 spécialités validées en contenu)

| Champ | Valeur |
| --- | --- |
| Nature | **Corpus de contenu spécialisé validé par Morris**, distinct des spécifications fonctionnelles obligatoires de R2 et des preuves de comportement |
| Version | **0.2.0 — VALIDATED CONTENT** · Morris, 2026-11-02 |
| Autorité | **Morris a validé le contenu des 15 CKI et de la matrice le 2026-11-02** ; aucun `IMPLEMENTED`/`BEHAVIOR PROVEN`/`ADOPTED` |
| Base projet | `mcleland147/sfia-workspace` — `main@8751775edc314e8fc7f0855104e5000290be9839` |
| Base documentaire R2 | `sfia/next-r2-functional-specs@de1ee3c5b954b3389d30f3ce4098423ec01c39d3` — Nora v0.4 et Connaissance v0.1 `VALIDATED SPEC` |
| Provenance historique | `projects/sfia-studio/sfia-v3-framing/ckc/` — 15 CKC dont le **contenu historique** est validé pour l'ancien Studio, pas pour Next |
| Statut d'exécution | **N/A — NON IMPLÉMENTÉ** ; aucun effet cognitif Next prouvé |

**Dénomination retenue : CKI = Cycle Knowledge Intelligence.** CKC = *Cycle Knowledge Contract* reste réservé aux sources historiques de l’ancien Studio.

## 1. Décisions et hypothèses à ne pas mélanger

**Retenu en conversation :** Nora reste naturelle et générale ; un CKI doit enrichir la spécialité du cycle actif sans confisquer la conduite, la méthode choisie ou l'autorité du Pilote. On utilise désormais le nom **CKI Next** pour distinguer ce corpus des CKC historiques. Cette appellation ne décide pas d'un objet technique ni d'une migration.

**Décisions de principe acquises :** un type de cycle correspond à un CKI spécialisé autonome ; un seul CKI principal est associé au cycle actif ; le catalogue initial compte quinze types/CKI sans plafond d’extension ; la matrice décrit uniquement des relations de valeur, non contraignantes. **Non décidé à ce stade :** modèle technique d’activation, référence/version, indisponibilité et transitions, qui relèvent de la future spécification du domaine 5.

**Publication du corpus sur la branche candidate R2 uniquement** ; aucune reprise automatique de l'ancienne doctrine, des `ckcId`, `cycleTypeId`, des digests, du DoctrinePackage ou de SFIA v2.6. Les noms des fichiers sont des identifiants éditoriaux de ce corpus, pas des classes de produit.

## 2. Frontières canoniques

| Responsable | Contrat qu'il possède | Le CKI n'en devient pas propriétaire |
| --- | --- | --- |
| Nora — domaine 3 | Compréhension, dialogue, autonomie cognitive bornée et applicabilité contextuelle (RG-CONV, RG-CTX, RG-APP, RG-METH) | Persona, formulation générale, sélection globale de l'intention |
| Connaissance — domaine 4 | Sujets, sources, points ouverts, mémoire utile, provenance et reprise (RG-KNOW) | Journal, historique durable, vérité des sources |
| Trajectoire/Cycles — domaine 5 (à spécifier) | Cycle actif, correspondance de spécialité, appréciation de progression et transition | Ouverture/fermeture, second moteur de cycles |
| Décisions/Gouvernance — domaine 6 (à spécifier) | Arbitrages, décisions applicables, permissions, suspensions, méthode retenue | Nouvelle autorité ou gate créé par le CKI |
| Réalisation / Preuves / Git — domaines 7/8/9 (à spécifier) | Actions effectives, résultats vérifiés, droits Git, identités et concurrence | Exécution, preuve, verdict, merge ou adoption |

## 3. Contrat minimal de contenu d'une spécialisation

Chaque CKI décrit : résultat métier visé, situations pertinentes et contre-exemples, techniques propres à la discipline, signaux concrets, lecture qualitative de maturité, exemples de discernement, produits intellectuels **possibles**, pièges et interfaces R1/R2. Il n'impose **ni mode global ASK/PROPOSE/STOP copié quinze fois**, ni questionnaire fixe, ni format de sortie obligatoire, ni règles juridiques/techniques universelles.

**Un type de cycle = un CKI autonome associé ; un seul CKI principal par cycle effectivement actif**, selon le principe validé par Morris. La présence du CKI n'oblige jamais à ouvrir son cycle et son contenu ne confère aucune autorité. Les autres disciplines restent accessibles à Nora grâce à ses facultés générales, **sans activation d'un deuxième CKI** ; les conditions et états techniques de l'association seront définis au domaine 5.

## 4. Catalogue candidat

| # | CKI Next | Problème auquel il apporte une spécialité | Relation au cycle |
| --- | --- | --- | --- |
| 01 | [Cadrage et clarification de l’intention](01-cadrage.md) | Passer d’une demande parfois formulée comme solution à un problème suffisamment compris pour éclairer des options et des arbitrages. | **CKI correspondant**, cycle non obligatoire |
| 02 | [Conception fonctionnelle et cohérence métier](02-conception-fonctionnelle.md) | Obtenir des contrats fonctionnels utilisables pour UX, architecture, développement et qualification sans réinventer la logique métier. | **CKI correspondant**, cycle non obligatoire |
| 03 | [Architecture fonctionnelle et frontières de responsabilité](03-architecture-fonctionnelle.md) | Faire émerger une organisation fonctionnelle cohérente, évolutive et compréhensible, indépendante des choix d’implémentation. | **CKI correspondant**, cycle non obligatoire |
| 04 | [Expérience UX/UI et interaction honnête](04-ux-ui.md) | Rendre les interactions naturelles, lisibles et fiables, particulièrement lorsqu’une décision ou un effet change la réalité du projet. | **CKI correspondant**, cycle non obligatoire |
| 05 | [Découpage du travail et préparation du backlog](05-backlog-user-stories.md) | Construire une séquence de travail à valeur utile, plutôt qu’un inventaire administratif de tâches. | **CKI correspondant**, cycle non obligatoire |
| 06 | [Architecture technique et choix réversibles](06-architecture-technique.md) | Aider à choisir une architecture proportionnée, explicable, modifiable et compatible avec les contrats fonctionnels. | **CKI correspondant**, cycle non obligatoire |
| 07 | [Intégration, environnements et DevOps](07-integration-devops.md) | Obtenir des transferts techniques contrôlables et observables, sans confondre CI verte et autorisation produit. | **CKI correspondant**, cycle non obligatoire |
| 08 | [Réalisation bornée et livraison incrémentale](08-delivery-implementation.md) | Maintenir cohérence des travaux, valeur livrée et preuves, tout en reconnaissant les impacts nouveaux sans dérive silencieuse. | **CKI correspondant**, cycle non obligatoire |
| 09 | [Qualité, validation et verdict fondé sur preuves](09-qa-validation.md) | Produire un jugement de qualité justifiable, honnête sur ses limites et utile au Pilote. | **CKI correspondant**, cycle non obligatoire |
| 10 | [Sécurité, confidentialité et risque résiduel](10-securite-rssi.md) | Aider le Pilote à comprendre menaces, conséquences, contrôles et risque résiduel plutôt qu’une conformité déclarative. | **CKI correspondant**, cycle non obligatoire |
| 11 | [Préparation de mise à disposition et release](11-deploiement-release.md) | Rendre intelligible la décision de déployer, ses conditions, ses impacts et les mécanismes de récupération. | **CKI correspondant**, cycle non obligatoire |
| 12 | [Observabilité et capacité d’exploitation](12-observabilite-run-readiness.md) | Établir que les équipes peuvent observer les symptômes significatifs et réagir utilement sans se noyer dans les alertes. | **CKI correspondant**, cycle non obligatoire |
| 13 | [Préparation à la revue d’intégration Git](13-pr-readiness.md) | Rendre les risques d’intégrabilité visibles avant de solliciter les contrôles et décisions appropriés. | **CKI correspondant**, cycle non obligatoire |
| 14 | [Réconciliation après intégration Git](14-post-merge.md) | Permettre au Pilote de poursuivre avec une vérité Git réconciliée, sans déclarer « terminé » trop tôt. | **CKI correspondant**, cycle non obligatoire |
| 15 | [Capitalisation et apprentissage contrôlé](15-capitalisation-rex.md) | Extraire des apprentissages fiables et actionnables sans transformer une observation en règle officielle. | **CKI correspondant**, cycle non obligatoire |


## 5. Matrice centrale de relations non contraignantes

La [matrice de relations CKI](relations-methodologiques-cki.md) constitue **la seule représentation centrale** des opportunités entre spécialités : `T` transmission des acquis, `A` approfondissement conseillé, `R` retour / requalification et `E` éclairage transversal. Chaque relation est orientée, déclenchée seulement par un besoin réel et accompagnée d'une contribution intellectuelle possible.

La matrice ne définit **ni précédence**, **ni autorisation**, **ni ordre de cycles**, **ni activation multi-CKI**, **ni catalogue de compétences exclusif**. Un CKI fonctionne même si ses relations sont absentes ; une relation n'est pas une condition de maturité ou de clôture. Les dépendances projet réelles et les GO restent sous les responsabilités propriétaires R2.

Les contenus individuels n'embarquent pas des copies de la matrice. Ils portent un renvoi éditorial unique et leur expertise spécialisée propre. La possibilité d'ajouter une spécialité FinOps/GreenOps ultérieurement ne signifie pas qu'un CKI dédié existe déjà parmi les quinze.

## 6. Revue transversale du corpus

- **Conception fonctionnelle ↔ architecture fonctionnelle :** la première possède les règles et le comportement ; la seconde étudie la distribution des responsabilités. Un diagramme d'architecture ne peut remplacer la règle métier.
- **Nora ↔ Connaissance :** le CKI donne des angles d'investigation ; il ne conserve pas lui-même les faits ni les décisions.
- **Backlog ↔ Réalisation :** une unité de valeur n'ouvre pas de contrat d'exécution ; la réalisation ne modifie pas silencieusement sa portée.
- **DevOps ↔ PR readiness ↔ post-merge ↔ release :** pipeline, intégrabilité, intégration Git et exposition utilisateurs sont quatre réalités différentes. Aucune n'exige automatiquement un cycle spécifique.
- **QA ↔ sécurité ↔ observabilité :** preuve de qualité, risque résiduel et exploitabilité sont des perspectives qui peuvent contribuer aux autres cycles sans devenir des gates CKI.
- **Capitalisation ↔ méthode :** un REX peut proposer une amélioration, mais ne modifie pas la version applicable sans décision gouvernée.
- **Méthode option A :** le choix de méthode applicable est versionné et gouverné ; la guidance CKI ne la remplace pas, ne la force pas et ne la met pas à jour silencieusement.

## 7. Tests de valeur et de non-régression proposés

1. **Aucun cycle actif :** Nora répond et travaille normalement ; aucun CKI arbitraire n'est imposé.
2. **Cycle actif pertinent :** Nora utilise des angles propres à sa spécialité et augmente la qualité de l'analyse sans méta-discours interne.
3. **Digression pendant un cycle :** Nora répond sans basculer CKI ou cycle ; elle préserve le fil principal.
4. **Méthode projet différente :** Nora applique la méthode validée du projet, signale une éventuelle tension avec la guidance sans la remplacer.
5. **Décision/suspension :** le CKI ne change pas l'autorité, ne lève pas un STOP et ne lance aucune exécution.
6. **Connaissance périmée :** Nora demande ou vérifie la donnée déterminante ; le CKI ne transforme pas un souvenir en preuve.
7. **Absence de CKI ou guidance défectueuse :** fonctionnement cognitif maintenu ; limitation explicable, sans forcer un fallback historique.
8. **Évolution de contenu CKI :** nouvelles techniques proposées, revues et versionnées sans réécrire les constats passés ni modifier les obligations produit.
9. **Non-spécialiste / autre type de projet :** ne pas imposer la taxonomie des 15 disciplines issues du développement logiciel à toute mission.
10. **Évaluation empirique de Nora :** mesurer sur scénarios nominaux, ambigus et adversariaux le gain de pertinence, la détection des angles morts, les fausses interruptions et la surcharge conversationnelle.

## 8. Arbitrages de contenu validés et limites d'adoption du corpus

- **A1 — Correspondance VALIDÉE :** 15 types de cycle comme catalogue initial de travail et 15 CKI autonomes associés, extensibles. La pertinence ultérieure d’ajouter, retirer ou réviser un type relève d’une décision produit et ne change pas silencieusement le catalogue.
- **A2 — Activation VALIDÉE au principe :** cycle actif → un seul CKI principal associé. Pas d’activation de CKI secondaire via la matrice ou une digression. Modalités, version et indisponibilité à spécifier domaine 5.
- **A3 — Maturité :** repères qualitatifs par discipline, aucune checklist ou clôture automatique. Définition des conditions de transition dans domaine 5/6.
- **A4 — Méthode :** lorsqu'un projet choisit une méthode, le CKI enrichit son analyse sans imposer une autre méthode. Le contenu de spécialité n'a pas de force normative supérieure.
- **A5 — Portabilité :** le corpus hérité est fortement logiciel ; une autre mission de projet doit fonctionner sans chercher à rentrer artificiellement dans ces 15 catégories.
- **A6 — Preuve :** la valeur des CKI doit être établie en R5/R6 par comparaison et cas d'usage, pas par la longueur du Markdown.

## 9. Qualité de spécialisation : enrichissement v0.2

Chaque CKI reçoit une **casquette professionnelle détaillée**, avec cinq méthodes expertes supplémentaires, deux situations de discernement et un critère de qualité propre. Ces apports ne prescrivent ni personnalité, ni rôle d'autorité, ni séquence d'actions, ni obligation documentaire. Les spécialités transversales sont mobilisables comme connaissances de Nora ; elles ne nécessitent pas une composition dynamique des CKI.

**Revue de non-duplication :** les cinq méthodes et situations enrichissent le *comment analyser la discipline* ; les règles de dialogue et applicabilité restent dans Nora v0.4, les sujets et la provenance dans Connaissance v0.1, les cycles et décisions dans leurs propriétaires futurs. Si un contenu CKI ressemble à une règle normative, il doit être requalifié dans la spec propriétaire plutôt que copié.

**Validation de valeur différée :** cas nominaux, contradictoires, digressions, domaine associé indisponible et sources trompeuses ; observer capacité à mieux raisonner, absence d'interruptions inutiles et absence de privilège indu.

## 10. Trajectoire R2 à R6

- **R2 :** transcrire les principes de correspondance/activation validés, revoir les 15 contenus et la matrice, rédiger le contrat fonctionnel propriétaire de trajectoire/cycles et contrôler les interfaces aux deux specs déjà validées.
- **R3 :** expérience de la conduite du cycle et propositions de Nora, sans affichage forcé du CKI.
- **R4 :** définir seulement à ce moment le référencement, le chargement, la version courante, les cas indisponibles et les protections contre l'injection. Aucun package historique imposé.
- **R5 :** construire et tester le comportement selon un macro-lot cohérent.
- **R6 :** constater la valeur et les limites en conditions déclarées ; `ADOPTED` exclusivement sur décision compétente et preuves.

## 11. Références

- Vision R1 : `projects/sfia-studio-next/cadrage/vision-produit.md`, notamment §2.17 sur le CKC comme guide de cycle, sans rôle de gate, et §2.18 sur la maturité proactive.
- Nora v0.4 : `projects/sfia-studio-next/conception-fonctionnelle/contexte-et-conduite-gouvernee-de-nora.md`, `VALIDATED SPEC`, 46 règles, 23 scénarios.
- Connaissance v0.1 : `projects/sfia-studio-next/conception-fonctionnelle/connaissance-sujets-et-continuite-du-projet.md`, `VALIDATED SPEC`, 15 règles, 10 scénarios.
- CKC historiques : `projects/sfia-studio/sfia-v3-framing/ckc/` et son `README.md`, corpus 15/15 validé pour le contexte de l'ancien Studio, sans preuve de consommation runtime Nora.
- SEF v0.2 : `projects/sfia-studio-next/governance/SEF.md` ; Roadmap : `projects/sfia-studio-next/governance/roadmap.md` ; décisions : `governance/decisions/`.

**Statut de contenu mis à jour : 15 CKI Next v0.2 + matrice centrale — `VALIDATED CONTENT` par Morris le 2026-11-02.** Cette validation porte sur la pertinence professionnelle des contenus ; ni `VALIDATED SPEC` propriétaire supplémentaire, ni implémentation, qualité cognitive prouvée, `ADOPTED`, PR ou merge ne sont induits.


## 12. Revue CKI R2 — 2026-11-02

[Examen des quinze spécialités et cinquante relations](../conception-fonctionnelle/revue-de-coherence-des-cki.md) : pas de contradiction normative bloquante identifiée. **Statut de contenu actualisé après la revue : `VALIDATED CONTENT v0.2` par Morris (2026-11-02)** ; distinct de D5 `VALIDATED SPEC` et sans preuve runtime ni ADOPTED.


## 13. Validation du contenu spécialisé — Morris, 2026-11-02

Morris a relu et validé explicitement **les quinze fiches spécialisées CKI et la matrice de cinquante relations**. Leur statut passe à `VALIDATED CONTENT v0.2`. L'association reste sous D5, les décisions et permissions sous D6, les preuves sous D8. La valeur cognitive et les comportements seront éprouvés en R5/R6. Cette validation documentaire ne déclenche ni PR, ni merge, ni R3.
