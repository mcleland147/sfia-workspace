# 03 — Réserves ouvertes et gates

| Champ | Valeur |
|-------|--------|
| **Nature** | matrice candidate · **pas** une décision |
| **T-A7** | `NOT OPEN` |
| **Aucune réserve fermée ici** | oui |

## 1. Matrice réserves / gates

Légende : **N** = non · **Y** = oui · **C** = candidate · **I** = indirect · **S** = stop A52

| Réserve / sujet | Peut rester ouvert pendant framing | Bloque ouverture framing | Bloque delivery prep | Bloque delivery | Bloque cutover | Bloque real Critical | F nécessaire | Morris nécessaire |
|-----------------|------------------------------------|--------------------------|----------------------|-----------------|----------------|----------------------|---------------|-------------------|
| B5 | **Y** | N | N (stratégie) | **S/Y** (STOP BEFORE DELIVERY) | Y | I | F08 | A52-D01 suivi / F08 |
| R1 | Y | N | N | Y | Y | Y | F08 · F10 | stratégie durable |
| R-T-A3-1 HARD | Y (simu OK) | N | N (design) | C | C | **Y** | F09 · F10 | API `.1` avant real |
| R-T-A3-2 HARD | Y (mémoire OK) | N | N (design) | Y | Y | **Y** | F08 · F10 | pattern durable |
| R-M01 | Y | N | C | C | I | I | F04 bornage | A52-D05.4 |
| C1–C3 | Y | N | N | Dette | I | I | via R-M01 | A52-D05 |
| C4 tracking | Y (via B5) | N | via B5 | via B5 | via B5 | I | via B5 | A52-D01 |
| Legacy / MethodMode / `method/**` | Y (inventaire) | N | C | Y | Y | I | F03 · F11 | inventaire/plan |
| OPS1 | Y | N | C | Y | Y | I | F13 | ACL |
| Persistence | Y (NOT SELECTED) | N | design OK | Y | Y | Y | F10 | SELECTED futur |
| IAM | Y (NOT SELECTED) | N | design OK | C | C | Y | F10 | SELECTED futur |
| F08 | NOT DECIDED | N | C | Y | Y | I | — | oui avant delivery |
| F09 | NOT DECIDED | N | C | C | Y | Y | — | oui avant Critical/cutover |
| F10 | NOT DECIDED | N | C | Y | Y | Y | — | oui avant durable/IAM |

### Lecture normative

- **Framing** : aucune réserve HARD n’empêche un cadrage read-only (confirmé T-A7 doc 04 + A5.2).
- **Delivery preparation** : peut coexister avec B5 OPEN (A52-D01) ; stratégies documentaires OK.
- **Delivery** : STOP B5 ; F08 candidat ; HARD / R1 bloquants selon chemin.
- **Real Critical** : A52-D03 `.1` + fail-closed + IAM — **interdit maintenant**.
- **Cutover** : niveau D · F09 · legacy/OPS1 — **interdit maintenant**.

## 2. Décisions F (relation — aucune auto-consommation)

| F | Statut | Relation à ce framing |
|---|--------|------------------------|
| F04 | `DECIDED — UNCHANGED` | A52-D05 borne application future |
| F03 | `NOT DECIDED` | legacy / MethodMode |
| F08 | `NOT DECIDED` | réserves avant delivery |
| F09 | `NOT DECIDED` | Critical / cutover |
| F10 | `NOT DECIDED` | persistence / IAM order |
| F11–F13 | `NOT DECIDED` | UX / gouvernance / OPS1 |

`NO F-DECISION AUTO-CONSUMPTION`

## 3. Anti-claims

- matrice ≠ fermeture
- « peut rester ouvert pendant framing » ≠ « résolu »
- « bloque delivery » ≠ « delivery autorisé ailleurs »
- T-A7 reste `NOT OPEN`
