# Decision Record — R1 : sortie formelle du cadrage produit

| Champ | Valeur |
| --- | --- |
| Décideur | **Morris** |
| Date | **2026-11-02** (Europe/Paris) |
| Périmètre | **SFIA Studio Next — R1 cadrage produit** |
| Statut | **R1 CLOSED BY MORRIS — WITH CARRIED RESERVES** |
| Autorisation explicite | GO conversationnel de **sortie R1 avec réserves**, suivi du GO pour **commit documentaire → PR → contrôles → merge Git** dans l'ordre ; préparation puis démarrage de R2 **après intégration Git vérifiée** |
| Référence de décision | `cadrage/vision-produit.md` §§2.29–2.38 ; `governance/roadmap.md` ; SEF v0.2 §8 |
| Limites | N'autorise **ni** une adoption runtime, **ni** un pivot d'architecture, **ni** le chargement de la doctrine historique comme autorité Next, **ni** l'exécution technique non contractée |

## 1. Résultat de la revue formelle et décision

**GO de sortie R1 avec réserves reportées.** Morris confirme la validation du cadrage, au terme de la revue des six critères candidats et de la revue complémentaire méthodologique. Les critères sont tenus **au niveau du cadrage documentaire**, non au niveau d'une spécification, d'une implémentation ou de preuves d'exécution :

1. Vision Pilote/Nora, responsabilités et **neuf domaines IN/OUT** validés (§2.29).
2. **Sept scénarios E2E** et exceptions significatives validés (§§2.30–2.36).
3. Séparation explicite cognition, mémoire/connaissance, décision du Pilote, autorisation d'effets, exécution et preuves.
4. Dépendances, risques et suites R2–R6 identifiés en revue transversale (§2.37).
5. **Quatre axes méthodologiques pour R2** tracés et approuvés comme **exigences à qualifier**, sans choix de mécanisme (§2.38).
6. Relecture et cohérence documentaire Git sur branche candidate avant intégration ; **PR, CI, merge et preuves post-merge contrôlés séparément**.

**Ce GO décide la sortie du jalon R1 ; il ne prouve pas l'intégration Git de la décision.** Jusqu'à relecture post-merge de `main`, les actes documentaires restent des commits candidats.

## 2. Réserves reportées et propriétaires de qualification

| Réserve / risque | Jalon attendu | Condition / contrôle |
| --- | --- | --- |
| **Méthode applicable, DoctrinePackage éventuel et instructions de Nora** | **R2**, puis R4–R6 | Définir responsabilités et contrats, comparer option package vs simplicité, vérifier provenance/autorité/protection contre les sources non fiables. |
| **Reprise des acquis v2.6 et évolution gouvernée de méthode** | **R2**, puis R4–R6 | Matrice sélective KEEP/ADAPT/EXCLUDE ; pas de copie, promotion automatique ou double doctrine produit. |
| **Continuité projet, identité et autorité persistante** | **R2/R4**, preuves R5–R6 | Conserver les décisions/suspensions applicables après les reprises ; mémoire non autorisante. |
| **Isolation Cursor CLI / Git multi-Pilotes et concurrence** | **R2/R4**, preuves R5–R6 | Distinguer identité Studio, accès source et identité exécuteur ; aucun droit implicite ni écrasement silencieux. |
| **Traçabilité, interruptions, preuves et conformité réelle** | **R2–R6** | Distinguer déclaration, observation, vérification, acceptation et adoption ; pas de LIVE/REAL inventé. |
| **UX / restitution adaptative et capacité des sources** | **R2–R4**, preuves R5–R6 | Interactivité sans autorité parallèle, sources et liens réels, coût/latence et limitations explicités. |

Ces réserves sont **non bloquantes pour la clôture du cadrage**, mais leurs contrôles deviennent des **obligations de qualification aux jalons applicables**. Elles ne valent pas `VALIDATED SPEC`, `IMPLEMENTED`, `BEHAVIOR PROVEN` ou `ADOPTED`.

## 3. Autorisations Git et frontières

- **Autorisé par Morris dans le même échange :** formaliser cette décision et synchroniser Vision/Roadmap/README dans **`projects/sfia-studio-next/`**, effectuer les commits sur la branche R1 existante, créer la PR vers `main`, vérifier son diff et ses gates CI, procéder au merge si les contrôles applicables sont satisfaits, puis vérifier la réalité sur `main`.
- **Interdits hors GO distinct :** modifier `projects/sfia-studio/`, `method/`, `prompts/`, les protections, la stack, les moteurs historiques ou les décisions doctrinales, supprimer des branches, forcer un merge, contourner les checks, déclarer une adoption produit.
- **Ordre :** commit(s) documentaire(s) → PR → revue des fichiers et CI/gates → merge → vérification post-merge des SHA/paths et statut du jalon → **démarrage de R2 sur la baseline intégrée** dans le périmètre fonctionnel autorisé.
- **Condition d'arrêt :** revue incomplète, CI requise échouée, branche modifiée, absence de permission ou impossibilité d'établir la base → **STOP**, résultat honnête et nouvel arbitrage si nécessaire.

## 4. Portée du prochain jalon

**R2 — conception fonctionnelle :** traduire la vision en responsabilités, contrats, décisions, états, erreurs, continuité et critères d'acceptation. Traiter les quatre qualifications du §2.38 comme un **ensemble cohérent**, sans moteur supplémentaire par défaut. La sortie R1 **ne rend pas les spécifications R2 adoptées** et n'anticipe pas les choix UX R3, architecture R4 ni les preuves R5/R6.

**Maturité réelle au moment du GO :** **R1 CLOSED BY MORRIS (decision)** ; **Git merge/post-merge : À PROUVER** ; **R2 : NOT STARTED jusqu'à intégration vérifiée** ; **SFIA Studio Next : N/A — NON IMPLÉMENTÉ**.
