# 02 — Paysage décisionnel T-A7 (post-A5.2)

| Champ | Valeur |
|-------|--------|
| **T-A7** | `NOT OPEN` |
| **Niveaux A–D** | ADOPTED (A1.1) — transitions = gates distincts |
| **Framing T-A7 (pack #280)** | VALIDATED — **≠** T-A7 ouvert |
| **Séquencement** | Option C `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3) — **aucune vague ouverte** |
| **Cadrage complémentaire borné** | autorisable ultérieurement (T-A7-D01=.1) · **pas ouvert** |
| **Ce document** | cartographie mise à jour · **pas** une autorisation d’exécution |

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
| Dette legacy / MethodMode / `method/**` | PARTIAL / MISSING (P03–P09, P24) | N (inventaire OK · D03=.1) | C (F03) | Y | I | F03 · F11 · vague 1 future | AT-11 · UX |
| OPS1 isolation | PARTIAL (P10) | N | C | Y | I | F13 | shared surfaces |
| B5 LPS satellites | `OPEN` + A52-D01 STOP before delivery · D04=.1 | N | N (peut rester ouvert pour *future* prep) | **S/Y** | I | F08 · A52-D01 | T-A1 · C4 |
| R1 Project↔Cycle | `OPEN` · A52-D02 `.2` · D03=.1 | N | N (stratégie) | Y | Y | F08 · F10 | persistence |
| Autorité Critical | R-T-A3-1 `OPEN HARD` · A52-D03 · D03=.1 | N | N (design) | C | **Y HARD** | F09 · F10 · vague 2 | IAM |
| Atomicité Decision links | R-T-A3-2 `OPEN HARD` · A52-D04 · D03=.1 | N | N (design) | Y | **Y HARD** | F08 · F10 · vague 3 | R1 |
| Persistence | `NOT SELECTED` | N | design OK | Y | Y | F10 (calendrier D05) | R1 · U-M02 |
| IAM | `NOT SELECTED` | N | design OK | C | Y | F10 (calendrier D05) | R-T-A3-1/3 |
| F08 réserves avant delivery | contenu `NOT DECIDED` · timing = avant delivery (D05) | N | C | Y | I | F08 bulletin | A52-D01/D02/D04 |
| F09 Critical/cutover | contenu `NOT DECIDED` · timing = avant Critical/cutover (D05) | N | C | C | Y | F09 bulletin | A52-D03 |
| F10 persistence/IAM order | contenu `NOT DECIDED` · timing = avant durable (D05) | N | C | Y | Y | F10 bulletin | A52-D02/D03/D04 |
| R-M01 / C1–C3 | `OPEN` / NOT VALIDATED · A52-D05 · D03=.1 | N | C | C | I | F04 bornage | T-A6 |
| Cutover (niveau D) | `NOT AUTHORIZED` | N | N | N | I | F09 + GO D · vague 5 | legacy + HARD |
| Real Critical execution | `NOT AUTHORIZED` | N | N | N | **Y** | A52-D03 `.1` + F09 | API + IAM |

## 3. Effets A5.2 + T-A7-D0x sur le paysage

- **Autorité** : simulation/read-only maintenant ; `.1` obligatoire avant real Critical (précondition future, pas implémentation).
- **Atomicité** : mémoire/logique maintenant ; durable avant real execution ; R1 et R-T-A3-2 restent ouverts.
- **B5** : tracking C4 fusionné ; **STOP BEFORE DELIVERY** (pas avant delivery preparation) — confirmé T-A7-D04=.1.
- **R-M01/C*** : rattachement + bornage avant future déclaration T-A6 COMPLETE ; F04 UNCHANGED.
- **Séquencement** : Option C adoptée ; vagues 1–5 = gates futurs uniquement.
- **Calendrier F** : D05=.3 · contenu F08/F09/F10 toujours `NOT DECIDED`.
- **Aucune F** consommée automatiquement.

## 4. Ce que ce pack n’autorise pas

- ouvrir T-A7 ;
- ouvrir une vague Option C ;
- entrer en delivery preparation / delivery / cutover ;
- sélectionner persistence ou IAM ;
- déclarer T-A6 ou Option A COMPLETE ;
- fermer une réserve technique ;
- consommer le contenu de F03/F08–F13.
