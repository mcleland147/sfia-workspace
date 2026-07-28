# 02 — Paysage décisionnel T-A7 (post-A5.2)

| Champ | Valeur |
|-------|--------|
| **T-A7** | `NOT OPEN` |
| **Niveaux A–D** | ADOPTED (A1.1) — transitions = gates distincts |
| **Framing T-A7 (pack #280)** | VALIDATED — **≠** T-A7 ouvert |
| **Ce document** | cartographie · **pas** une décision |

## 1. Niveaux T-A7 (rappel)

| Niveau | Contenu | Statut maintenant |
|--------|---------|-------------------|
| A. Framing | définition · préconditions · critères · aucune modif runtime | pack VALIDATED · **T-A7 NOT OPEN** |
| B. Delivery preparation | backlog · AT · plan · tests candidats · aucun cutover | `NOT AUTHORIZED` |
| C. Delivery | code/frontières · hold flags · migration progressive | `NOT AUTHORIZED` |
| D. Cutover | retrait/désactivation · preuves · rollback · GO dédié | `NOT AUTHORIZED` |

## 2. Sujets ouverts

Légende effets : **N** = non · **Y** = oui · **C** = candidate / selon F · **I** = indirect · **S** = stop documentaire A52

| Sujet | Statut actuel | Framing | Delivery prep | Delivery | Real Critical | Gate Morris | Dépendances |
|-------|---------------|---------|---------------|----------|---------------|-------------|-------------|
| Dette legacy / MethodMode / `method/**` | PARTIAL / MISSING (P03–P09, P24) | N (inventaire OK) | C (F03) | Y | I | F03 · F11 | AT-11 · UX |
| OPS1 isolation | PARTIAL (P10) | N | C | Y | I | F13 | shared surfaces |
| B5 LPS satellites | `OPEN` + A52-D01 STOP before delivery | N | N (sujet peut rester ouvert) | **S/Y** | I | F08 · A52-D01 | T-A1 · C4 |
| R1 Project↔Cycle | `OPEN` · A52-D02 `.2` | N | N (stratégie) | Y | Y | F08 · F10 | persistence |
| Autorité Critical | R-T-A3-1 `OPEN HARD` · A52-D03 `.3`→`.1` | N | N (design) | C | **Y HARD** | F09 · F10 | IAM |
| Atomicité Decision links | R-T-A3-2 `OPEN HARD` · A52-D04 `.4` | N | N (design) | Y | **Y HARD** | F08 · F10 | R1 |
| Persistence | `NOT SELECTED` | N | design OK | Y | Y | F10 | R1 · U-M02 |
| IAM | `NOT SELECTED` | N | design OK | C | Y | F10 | R-T-A3-1/3 |
| F08 réserves avant delivery | `NOT DECIDED` | N | C | Y | I | F08 | A52-D01/D02/D04 |
| F09 Critical/cutover | `NOT DECIDED` | N | C | C | Y | F09 | A52-D03 |
| F10 persistence/IAM order | `NOT DECIDED` | N | C | Y | Y | F10 | A52-D02/D03/D04 |
| R-M01 / C1–C3 | `OPEN` / NOT VALIDATED · A52-D05 | N | C | C | I | F04 bornage | T-A6 |
| Cutover (niveau D) | `NOT AUTHORIZED` | N | N | N | I | F09 + GO D | legacy + HARD |
| Real Critical execution | `NOT AUTHORIZED` | N | N | N | **Y** | A52-D03 `.1` + F09 | API + IAM |

## 3. Effets A5.2 sur le paysage

- **Autorité** : simulation/read-only maintenant ; `.1` obligatoire avant real Critical (précondition future, pas implémentation).
- **Atomicité** : mémoire/logique maintenant ; durable avant real execution ; R1 et R-T-A3-2 restent ouverts.
- **B5** : tracking C4 fusionné ; **STOP BEFORE DELIVERY** (pas avant delivery preparation).
- **R-M01/C*** : rattachement + bornage avant future déclaration T-A6 COMPLETE ; F04 UNCHANGED.
- **Aucune F** consommée automatiquement.

## 4. Ce que ce pack n’autorise pas

- ouvrir T-A7 ;
- entrer en delivery preparation / delivery / cutover ;
- sélectionner persistence ou IAM ;
- déclarer T-A6 ou Option A COMPLETE ;
- fermer une réserve technique.
