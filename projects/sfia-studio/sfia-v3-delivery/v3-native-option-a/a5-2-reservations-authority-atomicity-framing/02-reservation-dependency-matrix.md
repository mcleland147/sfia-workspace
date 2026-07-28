# 02 — Registre et matrice de dépendances

## 1. Registre A5.2 (après décisions Morris)

| ID | Statut technique | Décision A52 | Problème | Domaine | Invariant | Preuves clés |
|----|------------------|--------------|----------|---------|-----------|--------------|
| **B5** | `OPEN` | A52-D01 `.3` + `STOP BEFORE DELIVERY` | LPS satellite ids non carry-forward | LPS / lifecycle | pas d’invention d’API downstream ; ids satellites non propagés ; **stop avant delivery** tant que non résolue / non acceptée-bornée | T-A2 reserves · T-A3 decisionIds partiel · T-A7 doc 04 |
| **R1** | `OPEN` | A52-D02 `.2` | Atomicité Project↔Cycle absente | consistency | stores séparés ; txn logique + compensation/idempotence avant delivery ; durable avant real-exec | T-A2 §failure modes · T-A7 P13/P19 |
| **R-T-A3-1** | `OPEN HARD` | A52-D03 `.3` puis `.1` avant real Critical | Pas d’API publique Critical acknowledge | authority | Critical reste `proposed` ; Confirm fail-closed ; simulation/read-only maintenant | T-A3/T-A4 · SC-07 |
| **R-T-A3-2** | `OPEN HARD` | A52-D04 `.4` | Atomicité Decision↔LPS/Epistemic résiduelle | consistency | mémoire bornée jusqu’à future déclaration T-A6 COMPLETE mémoire ; pas de résolution durable ici | T-A3 B4 · T-A4 Option B |
| **R-M01** | `OPEN` | A52-D05 `.2 + .4` | ClaimEvaluator readiness — closure Morris | claims / gouvernance | readiness ≠ fermeture ; C1–C3 rattachées ; résolution/acceptation/bornage avant future déclaration T-A6 COMPLETE | T-A6 D3/D5 · F04 |
| **C1** | `RECOMMENDED — NOT VALIDATED` | A52-D05 (via R-M01) | Evidence status jointure PASS | claims | status join avant PASS | T-A6 DEL-C1 |
| **C2** | `RECOMMENDED — NOT VALIDATED` | A52-D05 (via R-M01) | Self-review Critical | authority/claims | self-review Critical interdit | D-T-A6-05/06 |
| **C3** | `RECOMMENDED — NOT VALIDATED` | A52-D05 (via R-M01) | Bornes taille/nombre | perf / sécurité | bornes principles D-T-A6-09 | T-A6 DEL-C3 |
| **C4** | `TRACKING MERGED INTO B5 — NOT VALIDATED` | A52-D01 / A52-D05 | LPS satellite → fusion B5 | LPS | tracking via B5 ; **pas** VALIDATED | T-A6 DEL-C4 |

**Aucune réserve n’est CLOSED, SATISFIED, ni acceptée comme résolue technique par cet enregistrement.**

## 2. Matrice de dépendances / blocage

Légende : **N** = non · **Y** = oui · **C** = candidate / selon F08–F10 · **I** = indirect · **V** = via autre réserve · **S** = stop documentaire A52

| Réserve | Domaine | Invariant | Dépend de | Bloque framing | Bloque delivery prep | Bloque delivery | Bloque cutover | Bloque real execution | Bloque T-A6 COMPLETE | Bloque product complete | Bloque production |
|---------|---------|-----------|-----------|----------------|----------------------|-----------------|----------------|------------------------|----------------------|-------------------------|-------------------|
| B5 | LPS | carry-forward satellites | T-A1 API ; C4 | N | N (stratégie doc OK ; sujet peut rester ouvert) | **S / Y** (STOP BEFORE DELIVERY) | Y | I | C (via C4/T6) | C | I |
| R1 | Project↔Cycle | atomicité cross-store | persistence future ; R-T-A3-2 | N | N (stratégie) | Y | Y | Y | N mémoire (bornable) | N immédiat | Y |
| R-T-A3-1 | Critical ack | fail-closed Confirm | T-A2 API ; IAM futur | N | N (design) | C si Critical path | C si activation | **Y HARD** | N mémoire | C large | Y |
| R-T-A3-2 | Decision links | pas de partial orphan | R1 ; outbox/txn futur | N | N (design) | Y | Y | **Y HARD** | N mémoire | N immédiat | Y |
| R-M01 | ClaimEvaluator | closure Morris | C1–C3 ; schema | N | C | C | I | I | **Y** (F04 + A52-D05.4) | Partiel | Y |
| C1 | Evidence join | status PASS | R-M01 ; U-M02 | N | N | Dette | I | I | **Y** (via R-M01) | Partiel | I |
| C2 | Self-review | no self Critical | D-T-A6-05/06 | N | N | Dette | I | I | **Y** | I | I |
| C3 | Bornes | size/count | D-T-A6-09 ; U-M02 | N | N | Dette | I | Y payload réel | **Y** | I | Y |
| C4 | LPS merge | fusion B5 tracking | **B5** | N | V B5 | V B5 + STOP | V B5 | I | V B5 | V B5 | I |

### Justifications synthétiques

- **Framing N pour toutes** : pack T-A7 + SC — HARD n’empêchent pas cadrage read-only.
- **Real execution Y pour R-T-A3-1/2 et R1** : SC-07 ; A52-D03.3 interdit real Critical maintenant.
- **T-A6 COMPLETE** : F04 + A52-D05.4 exigent R-M01 + C1–C4 résolus/acceptés/bornés avant déclaration ; B5 via C4.
- **Delivery** : A52-D01 impose **STOP BEFORE DELIVERY** pour B5 ; F08/F09 encore NOT DECIDED.
- **Delivery preparation** : sujet B5 peut rester ouvert pendant framing et delivery preparation ; stop = **avant delivery**, pas avant prep.

## 3. Priorisation A5.2 (inchangée)

1. **P0 HARD exécution** : R-T-A3-1, R-T-A3-2
2. **P0 structurante état** : B5 (+ C4), R1
3. **P1 complétude mémoire** : R-M01, C1–C3
4. **Hors A5.2 principal** : U-M02 (dépendance citée)

## 4. Dettes acceptables maintenant

| Dette | Acceptable pour | Non acceptable pour |
|-------|-----------------|---------------------|
| B5/R1 OPEN | framing ; prep documentaire | delivery (B5 STOP) / cutover sans stratégie + stops |
| HARD OPEN | framing ; design ; simulation | Confirm Critical réel ; exec réelle |
| C1–C3 NOT VALIDATED | framing | déclaration T-A6 COMPLETE |
| C4 tracking merged | framing ; registre unifié | claim VALIDATED / CLOSED |
| R-M01 OPEN | framing ; runtime mémoire observé | claim COMPLETE / fermeture réserve |

## 5. Preuves requises (futures, non produites ici)

- B5 : contrat T-A1 carry-forward + tests adversarial **ou** acceptation/bornage Morris avant delivery
- R1 / R-T-A3-2 : design txn/outbox/saga **sans** sélection DB
- R-T-A3-1 : spec API ack + identité + audit + anti-replay (précondition `.1`)
- R-M01/C* : résolution / acceptation explicite / bornage conforme A4.1 avant future déclaration T-A6 COMPLETE
