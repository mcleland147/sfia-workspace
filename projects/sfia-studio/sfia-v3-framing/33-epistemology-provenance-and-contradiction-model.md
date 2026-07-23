# 33 — Épistémologie, provenance et contradictions

| Métadonnée | Valeur |
|------------|--------|
| **Statut** | Doctrine SFIA Studio v3 **validée par Morris** · merge `main` en attente |
| **Fondations** | **V3-F04 · V3-F08 validées** (D-V3-01) |
| **Doctrine produit Studio** | **SFIA v3 exclusive** |
| **Maturité fondations** | **VALIDATED** (doctrine) |
| **Anti-claims** | Phrase utilisateur ≠ décision · Recommandation ≠ exécution |
| **Document** | `33-epistemology-provenance-and-contradiction-model.md` |

---

## 1. V3-F04 — Épistémologie explicite (VALIDATED)

| Type | Définition | Source typique | Autorité | Transition | Persistance | UX | Preuve | Anti-claim |
|------|------------|----------------|----------|------------|-------------|-----|--------|------------|
| Observation | Fait constaté | Git, runtime, humain | Faible→moyenne | → Fact si corroboré | Oui | Tag Observation | Capture / log | ≠ Décision |
| Fact | Observation corroborée | Multi-sources | Moyenne | — | Oui | Tag Fact | Digests | ≠ GO |
| Hypothesis | Supposition à valider | GPT / humain | Aucune | → Fact / retirée | Oui (statut) | Tag + Valider/Corriger | — | ≠ Décision |
| Option | Choix possible | GPT / humain | Aucune | → sélection | Oui | Carte Option | — | ≠ Décision |
| Recommendation | Proposition non exécutable | GPT | Aucune | → Decision si validée | Oui | Tag Recommandation | Justification | ≠ exécution |
| HumanDecision | Acte explicite Morris/humain | Humain | **Haute** | — | **Oui** | Tag Décision + historique | Gate + confirmation | — |
| Reserve | Limitation connue | Audit / QA | Moyenne | Levée documentée | Oui | Tag Réserve | — | ≠ blocage seul |
| Risk | Menace plausible | Analyse | Moyenne | Mitigation / acceptation | Oui | Tag Risque | — | ≠ fait |
| Evidence | Preuve référencée | Git / test / capture | Haute si vérifiable | — | Lien | Liste preuves | Path/digest | — |
| Claim | Affirmation de maturité/statut | Document / UI | Selon preuve | — | Trace | Discret | Preuve obligatoire | Claim sans preuve interdit |

### Règles cardinales

1. Une phrase utilisateur **ne devient pas** automatiquement une HumanDecision.
2. Une Recommendation **reste** une Recommendation.
3. Une Option **≠** Décision.
4. Contradiction → signalement (`V3-F08`) avant claim.
5. Alignement CC-D05 : labels texte, pas couleur seule.
6. Une source v2.6 historique **n'est pas** un Fact de doctrine Studio active.

## 2. Provenance (lien V3-F07)

Chaque item épistémique porte : origin (gpt|human|system|git|runtime) · status · sourceRefs · updatedAt · authorityLevel.

## 3. V3-F08 — Détection des contradictions (VALIDATED)

### Catégories

| Code | Catégorie |
|------|-----------|
| C-SRC | source contre source |
| C-DEC-IMP | décision contre implémentation |
| C-DOC-RT | doctrine contre runtime |
| C-SCOPE | périmètre contre action |
| C-REC-EV | recommandation contre preuve |
| C-MAT-CLAIM | maturité contre claim |
| C-TRAJ-DEP | trajectoire contre dépendance |

### Attributs

sévérité (info / warning / blocking) · sources · objet impacté · blocante? · action · gate · réserve.

### Effets

- blocking → Stop Condition Engine (`34`) ;
- warning → réserve visible ;
- info → trace audit.

**Cas particulier D-V3-03 :** toute tentative de charger v2.6 comme doctrine Studio active est une contradiction **C-DOC-RT** / gouvernance → stop.

## 4. Maturité

V3-F04 / F08 : **VALIDATED** (doctrine) · schemas : non créés.
