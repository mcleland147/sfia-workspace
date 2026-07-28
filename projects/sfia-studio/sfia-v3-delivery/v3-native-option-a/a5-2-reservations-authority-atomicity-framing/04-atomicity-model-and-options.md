# 04 — Modèle d’atomicité et options (A52-D02 / A52-D04)

| Champ | Valeur |
|-------|--------|
| **Réserves** | R1 `OPEN` · R-T-A3-2 `OPEN HARD` |
| **Arbitrages** | A52-D02 · A52-D04 |
| **A52-D02 choix** | `.2` — `DECIDED — ADOPTED BY MORRIS` |
| **A52-D04 choix** | `.4` — `DECIDED — ADOPTED BY MORRIS` |
| **Persistence** | `NOT SELECTED` |
| **Date enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |

## 1. Invariants

- Pas de transaction distribuée inventée en mémoire.
- Stores séparés (Project/LPS, Cycle/Epistemic, Decision).
- Fail-closed ports ; compensation locale documentée ; résiduels possibles.
- Mémoire ≠ garantie durable.
- **Aucune technologie de base de données sélectionnée.**

## 2. Matrice atomicité

| Flux | Écritures | Invariant | Risque partial failure | État actuel | Option transactionnelle | Compensation | Idempotence | Persistence requise | Acceptable en mémoire | Gate |
|------|-----------|-----------|------------------------|-------------|-------------------------|--------------|-------------|----------------------|----------------------|------|
| Project → Cycle | Project + Cycle | cohérence lien | orphan cycle/project | R1 OPEN ; norme A52-D02.2 | txn logique / outbox futur | rollback cycle si LPS fail | obligatoire avant delivery | avant real-exec | **oui borné** | A52-D02 |
| Decision → LPS | Decision + LPS | link decisionIds | orphan decision/LPS | R-T-A3-2 ; A52-D04.4 mémoire | unit of work / outbox futur | compensate | à définir durable | avant delivery durable | oui avec résidu | A52-D04 |
| Decision → Epistemic | Decision + Epistemic | link epistemic | orphan | R-T-A3-2 ; A52-D04.4 | idem | compensate | à définir | avant delivery durable | oui avec résidu | A52-D04 |
| Confirm Critical → ack | status Critical + audit | ack avant Confirm | Confirm sans ack | fail-closed ; API absente ; A52-D03.3 | n/a authority | refuse Confirm | n/a | auth durable | simulation OK | A52-D03 |
| Evidence → ClaimEvaluation | Evidence + Claim | status join | PASS invalide | C1 NOT VALIDATED | contrôles D3 | fail-closed PASS | snapshots | Evidence physique future | fake-only OK | A52-D05 |
| lifecycle → LPS satellites | LPS append fields | carry-forward | perte ids | **B5 OPEN** + STOP before delivery | évolution contrat T-A1 | n/a | version append | si satellites durables | partiel (`decisionIds`) | A52-D01 |
| rollback / restore | store local | pas d’état fantôme | compensate fail | résiduel HARD | saga contrôlée | oui partielle | clés idempotentes | avant prod | partielle | A52-D04 |
| double-write legacy/v3 | legacy + OA | isolation | split-brain | hors A5.2 principal | hold flags futurs | — | — | cutover | non | T-A7 levels |

## 3. A52-D02 (R1) — décidé

| Option | Description |
|--------|-------------|
| **A52-D02.1** | Atomicité stricte obligatoire avant delivery |
| **A52-D02.2** | Transaction logique + compensation/idempotence avant delivery ; atomicité durable avant real execution |
| **A52-D02.3** | Cohérence éventuelle bornée acceptée |
| **A52-D02.4** | Autre (preuve adversarial only) |
| **A52-D02.5** | Différer |

**Décision Morris :** `DECIDED — ADOPTED BY MORRIS` → **A52-D02.2**

### Norme

- transaction logique ;
- compensation ;
- idempotence ;
- gestion des partial failures avant delivery ;
- garantie durable obligatoire avant real execution.

### Non-effets

- R1 reste `OPEN` ;
- aucune DB ou technologie transactionnelle sélectionnée ;
- aucune production autorisée ;
- F10 reste `NOT DECIDED`.

## 4. A52-D04 (R-T-A3-2) — décidé

| Option | Description |
|--------|-------------|
| **A52-D04.1** | Transaction unique obligatoire |
| **A52-D04.2** | Outbox / unit of work durable |
| **A52-D04.3** | Saga / compensation contrôlée |
| **A52-D04.4** | Mémoire bornée uniquement jusqu’à une future déclaration T-A6 COMPLETE mémoire |
| **A52-D04.5** | Autre |
| **A52-D04.6** | Différer |

**Décision Morris :** `DECIDED — ADOPTED BY MORRIS` → **A52-D04.4**

### Norme

- atomicité Decision↔LPS/Epistemic bornée au périmètre mémoire ;
- acceptable uniquement jusqu’à une **future** déclaration T-A6 COMPLETE mémoire ;
- aucune résolution durable ici ;
- aucune exécution réelle ou production ;
- `.4` ≠ déclaration T-A6 COMPLETE maintenant.

### Non-effets

- R-T-A3-2 reste `OPEN HARD` ;
- T-A6 COMPLETE reste `NOT DECLARED` ;
- aucune technologie sélectionnée ;
- F08 / F10 restent `NOT DECIDED`.

## 5. Relation R1 ↔ R-T-A3-2

Famille atomicité cross-store. Traitées séparément (A52-D02 vs A52-D04) avec cohérence de stratégie (mémoire/logique maintenant ; durable avant real-exec). Ne pas fusionner les réserves. Les deux restent ouvertes techniquement.
