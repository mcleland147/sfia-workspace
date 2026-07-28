# 02 — Registre et matrice de dépendances

## 1. Registre A5.2 (re-qualifié)

| ID | Statut A5.2 | Problème | Domaine | Invariant | Preuves clés |
|----|-------------|----------|---------|-----------|--------------|
| **B5** | `OPEN` | LPS satellite ids non carry-forward | LPS / lifecycle | pas d’invention d’API downstream ; ids satellites non propagés | T-A2 reserves · T-A3 decisionIds partiel · T-A7 doc 04 |
| **R1** | `OPEN` | Atomicité Project↔Cycle absente | consistency | stores séparés ; pas de txn distribuée | T-A2 §failure modes · T-A7 P13/P19 |
| **R-T-A3-1** | `OPEN HARD` | Pas d’API publique Critical acknowledge | authority | Critical reste `proposed` ; Confirm fail-closed | T-A3/T-A4 · SC-07 |
| **R-T-A3-2** | `OPEN HARD` | Atomicité Decision↔LPS/Epistemic résiduelle | consistency | pas de txn unique ; compensation résiduelle | T-A3 B4 · T-A4 Option B |
| **R-M01** | `OPEN` | ClaimEvaluator readiness — closure Morris | claims / gouvernance | readiness ≠ fermeture | T-A6 D3/D5 · F04 |
| **C1** | `RECOMMENDED — NOT VALIDATED` | Evidence status jointure PASS | claims | status join avant PASS | T-A6 DEL-C1 |
| **C2** | `RECOMMENDED — NOT VALIDATED` | Self-review Critical | authority/claims | self-review Critical interdit | D-T-A6-05/06 |
| **C3** | `RECOMMENDED — NOT VALIDATED` | Bornes taille/nombre | perf / sécurité | bornes principles D-T-A6-09 | T-A6 DEL-C3 |
| **C4** | `RECOMMENDED — NOT VALIDATED` | LPS satellite → fusion B5 candidate | LPS | merge tracking vers B5 | T-A6 DEL-C4 |

Aucune réserve n’est fermée, acceptée ou marquée SATISFIED par ce pack.

## 2. Matrice de dépendances / blocage

Légende : **N** = non · **Y** = oui · **C** = candidate / selon F08–F10 · **I** = indirect · **V** = via autre réserve

| Réserve | Domaine | Invariant | Dépend de | Bloque framing | Bloque delivery prep | Bloque delivery | Bloque cutover | Bloque real execution | Bloque T-A6 COMPLETE | Bloque product complete | Bloque production |
|---------|---------|-----------|-----------|----------------|----------------------|-----------------|----------------|------------------------|----------------------|-------------------------|-------------------|
| B5 | LPS | carry-forward satellites | T-A1 API ; C4 | N | C (stratégie doc OK) | C (F08) | Y | I | C (via C4/T6) | C | I |
| R1 | Project↔Cycle | atomicité cross-store | persistence future ; R-T-A3-2 | N | N (stratégie) | Y | Y | Y | N mémoire (bornable) | N immédiat | Y |
| R-T-A3-1 | Critical ack | fail-closed Confirm | T-A2 API ; IAM futur | N | N (design) | C si Critical path | C si activation | **Y HARD** | N mémoire | C large | Y |
| R-T-A3-2 | Decision links | pas de partial orphan | R1 ; outbox/txn futur | N | N (design) | Y | Y | **Y HARD** | N mémoire | N immédiat | Y |
| R-M01 | ClaimEvaluator | closure Morris | C1–C3 ; schema | N | C | C | I | I | **Y** (F04) | Partiel | Y |
| C1 | Evidence join | status PASS | R-M01 ; U-M02 | N | N | Dette | I | I | **Y** (arbitrage) | Partiel | I |
| C2 | Self-review | no self Critical | D-T-A6-05/06 | N | N | Dette | I | I | **Y** | I | I |
| C3 | Bornes | size/count | D-T-A6-09 ; U-M02 | N | N | Dette | I | Y payload réel | **Y** | I | Y |
| C4 | LPS merge | fusion B5 | **B5** | N | V B5 | V B5 | V B5 | I | V B5 | V B5 | I |

### Justifications synthétiques

- **Framing N pour toutes** : pack T-A7 + SC — HARD n’empêchent pas cadrage read-only.
- **Real execution Y pour R-T-A3-1/2 et R1** : SC-07.
- **T-A6 COMPLETE** : F04 exige R-M01 + C1–C4 arbitrés/bornés avant déclaration ; B5 via C4.
- **Delivery/cutover** : F08/F09 encore NOT DECIDED → cellules **C** là où le pack T-A7 dit « candidate ».

## 3. Priorisation A5.2

1. **P0 HARD exécution** : R-T-A3-1, R-T-A3-2
2. **P0 structurante état** : B5 (+ C4), R1
3. **P1 complétude mémoire** : R-M01, C1–C3
4. **Hors A5.2 principal** : U-M02 (dépendance citée)

## 4. Dettes acceptables maintenant

| Dette | Acceptable pour | Non acceptable pour |
|-------|-----------------|---------------------|
| B5/R1 OPEN | framing ; prep documentaire | delivery/cutover sans stratégie + stops |
| HARD OPEN | framing ; design | Confirm Critical réel ; exec réelle |
| C1–C4 NOT VALIDATED | framing | déclaration T-A6 COMPLETE |
| R-M01 OPEN | framing ; runtime mémoire observé | claim COMPLETE / fermeture réserve |

## 5. Preuves requises (futures, non produites ici)

- B5 : contrat T-A1 carry-forward + tests adversarial
- R1 / R-T-A3-2 : design txn/outbox/saga **sans** sélection DB
- R-T-A3-1 : spec API ack + identité + audit + anti-replay
- R-M01/C* : bulletin Morris de bornage ou validation
