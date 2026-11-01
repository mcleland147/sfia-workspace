# SFIA Studio Next — Convention de nommage produit

| Champ | Valeur |
| --- | --- |
| Statut | **VALIDATED BY MORRIS — 2026-11-01** — contenu de la convention candidate approuvé explicitement en conversation |
| Périmètre | Capacités, domaines, modèles, composants, services, fichiers, tests, interfaces, documentation, UX |
| Jalon | R0-B : principe de cohérence ; R1/R2 : vocabulaire métier ; R4 : conventions techniques/architecture |
| Autorité de validation | **Morris — validation explicite consommée le 2026-11-01** |

## Principe fondateur

**Un élément permanent du produit est nommé par sa responsabilité métier ou technique durable, jamais par le cycle, l'ancienne version, le chantier, l'expérience, la personne ou le chemin de migration qui l'a créé.**

La reconstruction est l'occasion de redéfinir le vocabulaire avant d'écrire le code. Les noms doivent rester intelligibles quand le chantier qui les a introduits est terminé.

## Règles validées

1. **Ubiquitous language :** un concept = un nom canonique ; synonymes/alias documentés et évités dans les contrats publics.
2. **Noms métier stables :** distinguer capacité, orchestration, décision, contrat, tentative et preuve par leur véritable fonction.
3. **Séparer produit et travaux :** IDs de macro-lot, R0/R1, tests ponctuels et noms de branches appartiennent à la traçabilité Git, pas au nom des modules permanents.
4. **Aucune nomenclature historique par défaut :** éviter les nouveaux symboles de type `F2`, `P6`, `M4`, `VSR`, `D1`, `OPS1`, `legacy`, `pre-m6`, `temp`, `new` dans l'architecture cible ; ces termes peuvent seulement désigner les archives, les imports/transitions avec exit ou les tests de régression historique nécessaires.
5. **Nommer par responsabilité observable :** `ExecutionContract` plutôt que `GenericPreparePayloadV2` ; `ProjectConversation` plutôt que `F2DefaultSession`. **Exemples illustratifs, pas décisions de modèles ou de classes.**
6. **Lisibilité et sobriété :** pas d'abréviations obscures ni de suffixes `Manager`, `Helper`, `Processor`, `Core` s'ils masquent une responsabilité.
7. **Conventions à figer en R4 :** langue du code, fichiers/modules, interfaces API, nomenclature DB, versionnement et compatibilité client — sans décider arbitrairement ces conventions en R0.
8. **Noms UX indépendants du code :** termes accessibles pour le Pilote ; la traduction UI ne doit pas masquer les frontières d'autorité.
9. **Naming review dans le macro-lot :** les noms publics et concepts exposés sont relus avec l'architecture et les tests ; pas de cycle documentaire autonome pour chaque renommage.
10. **Changement de nom = changement potentiellement transversal :** identifier impacts sur API, DB, sérialisation, UI, tests, preuves, migrations et compatibilité avant modification.
11. **Pas de réutilisation inertielle :** le nom d'une capacité ancienne n'est pas adopté automatiquement si sa responsabilité a changé.
12. **Seuil de décision :** un nom de composant ordinaire est validé dans la revue du macro-lot ; un changement de vocabulaire métier structurant ou de contrat public sollicite un arbitrage Morris.

## Vocabulaire d'amorçage à qualifier en R1/R2 (PAS un modèle adopté)

- **Pilote** : acteur humain qui arbitre et autorise.
- **Nora** : copilote qui analyse, recommande, planifie, coordonne et interprète.
- **Project**, **LivingProjectState**, **ProjectTrajectory** : concepts métier à confirmer et spécifier.
- **Recommendation**, **HumanDecision** : objets épistémiques et d'autorité distincts.
- **ExecutionContract**, **ExecutionAttempt**, **Evidence**, **ReviewBundle** : engagement, exécution et preuve ; périmètres contractuels à concevoir.
- **ToolCapability** : capacité d'outil exposée sous permissions/effets contrôlés — exemple de famille, pas nom définitif.

## Revues et critères d'acceptation

- Les composants essentiels ont un **nom défini par leur responsabilité** et retrouvé dans la spécification.
- Le même concept n'a pas plusieurs noms divergents dans code/API/docs/UX sans justification de présentation.
- Aucun nom technique de jalon historique n'est introduit dans le **nouveau code permanent**.
- Les références historiques restent traçables dans `capitalisation/` avec leur provenance Git.
- Une exception est enregistrée avec justification, portée et condition de sortie.
- La convention est enrichie au besoin **dans le macro-lot de conception / delivery concerné**, pas sous micro-cycles de nomenclature.

**Décision consommée (2026-11-01) :** Morris valide expressément la convention candidate présente sur la branche R0-B, **sans demander de modification de son contenu**. Les règles 1–12 et le principe fondateur deviennent la norme de nommage de construction **Studio Next**. Les noms de modèles cités sont des **exemples non contraignants**, et le vocabulaire d'amorçage reste à qualifier en R1/R2. La validation ne modifie pas le texte du SEF v0.2 ni la doctrine produit v3.
