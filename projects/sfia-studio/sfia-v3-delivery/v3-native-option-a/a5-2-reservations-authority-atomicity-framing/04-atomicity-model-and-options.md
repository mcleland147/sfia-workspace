# 04 — Modèle d’atomicité et options (A52-D02 / A52-D04)

| Champ | Valeur |
|-------|--------|
| **Réserves** | R1 `OPEN` · R-T-A3-2 `OPEN HARD` |
| **Arbitrages** | A52-D02 · A52-D04 |
| **Persistence** | `NOT SELECTED` |

## 1. Invariants

- Pas de transaction distribuée inventée en mémoire.
- Stores séparés (Project/LPS, Cycle/Epistemic, Decision).
- Fail-closed ports ; compensation locale documentée ; résiduels possibles.
- Mémoire ≠ garantie durable.

## 2. Matrice atomicité

| Flux | Écritures | Invariant | Risque partial failure | État actuel | Option transactionnelle | Compensation | Idempotence | Persistence requise | Acceptable en mémoire | Gate |
|------|-----------|-----------|------------------------|-------------|-------------------------|--------------|-------------|----------------------|----------------------|------|
| Project → Cycle | Project + Cycle | cohérence lien | orphan cycle/project | R1 OPEN ; ordre + rollback partiel | txn logique / outbox futur | rollback cycle si LPS fail | à définir | avant real-exec | **oui borné** | A52-D02 |
| Decision → LPS | Decision + LPS | link decisionIds | orphan decision/LPS | R-T-A3-2 ; compensate supersede | unit of work / outbox | compensate | à définir | avant delivery durable | oui avec résidu | A52-D04 |
| Decision → Epistemic | Decision + Epistemic | link epistemic | orphan | R-T-A3-2 | idem | compensate | à définir | avant delivery durable | oui avec résidu | A52-D04 |
| Confirm Critical → ack | status Critical + audit | ack avant Confirm | Confirm sans ack | fail-closed ; API absente | n/a authority | refuse Confirm | n/a | auth durable | simulation OK | A52-D03 |
| Evidence → ClaimEvaluation | Evidence + Claim | status join | PASS invalide | C1 NOT VALIDATED | contrôles D3 | fail-closed PASS | snapshots | Evidence physique future | fake-only OK | A52-D05 |
| lifecycle → LPS satellites | LPS append fields | carry-forward | perte ids | **B5 OPEN** | évolution contrat T-A1 | n/a | version append | si satellites durables | partiel (`decisionIds`) | A52-D01 |
| rollback / restore | store local | pas d’état fantôme | compensate fail | résiduel HARD | saga contrôlée | oui partielle | clés idempotentes | avant prod | partielle | A52-D04 |
| double-write legacy/v3 | legacy + OA | isolation | split-brain | hors A5.2 principal | hold flags futurs | — | — | cutover | non | T-A7 levels |

**Aucune technologie de base de données n’est sélectionnée.**

## 3. Options A52-D02 (R1)

| Option | Description |
|--------|-------------|
| **A52-D02.1** | Atomicité stricte obligatoire avant delivery |
| **A52-D02.2** | Transaction logique + compensation/idempotence avant delivery ; atomicité durable avant real execution |
| **A52-D02.3** | Cohérence éventuelle bornée acceptée |
| **A52-D02.4** | Autre (preuve adversarial only) |
| **A52-D02.5** | Différer |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **A52-D02.2**

## 4. Options A52-D04 (R-T-A3-2)

| Option | Description |
|--------|-------------|
| **A52-D04.1** | Transaction unique obligatoire |
| **A52-D04.2** | Outbox / unit of work durable |
| **A52-D04.3** | Saga / compensation contrôlée |
| **A52-D04.4** | Mémoire bornée uniquement jusqu’à déclaration T-A6 COMPLETE (puis pattern durable requis avant delivery réelle) |
| **A52-D04.5** | Autre |
| **A52-D04.6** | Différer |

**Recommandation :** `RECOMMENDED — NOT DECIDED` → **A52-D04.4** pour la phase mémoire, **sans** choisir entre .1/.2/.3 maintenant ; exiger un design durable **avant** delivery/real-exec (choix techno hors A5.2).

## 5. Relation R1 ↔ R-T-A3-2

Famille atomicité cross-store. Traiter séparément (A52-D02 vs A52-D04) mais exiger cohérence de stratégie. Ne pas fusionner les réserves.
