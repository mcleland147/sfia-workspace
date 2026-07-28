# 03 — Réserves ouvertes et gates

| Champ | Valeur |
|-------|--------|
| **Nature** | matrice alignée T-A7-D03=.1 · T-A7-D04=.1 · T-A7-D05=.3 · **pas** une fermeture |
| **Séquencement** | Option C adoptée · **aucune vague ouverte** |
| **T-A7** | `NOT OPEN` |
| **Aucune réserve fermée ici** | oui |

## 1. Matrice réserves / gates

Légende : **N** = non · **Y** = oui · **C** = candidate · **I** = indirect · **S** = stop A52

| Réserve / sujet | Peut rester ouvert pendant framing | Bloque ouverture framing | Bloque delivery prep | Bloque delivery | Bloque cutover | Bloque real Critical | F nécessaire | Morris nécessaire |
|-----------------|------------------------------------|--------------------------|----------------------|-----------------|----------------|----------------------|---------------|-------------------|
| B5 | **Y** (D03=.1) | N | N (D04=.1 · stratégie) | **S/Y** (STOP BEFORE DELIVERY) | Y | I | F08 | A52-D01 suivi / F08 |
| R1 | Y (D03=.1) | N | N | Y | Y | Y | F08 · F10 | stratégie durable |
| R-T-A3-1 HARD | Y (simu OK · D03=.1) | N | N (design · D04=.1) | C | C | **Y** | F09 · F10 | API `.1` avant real |
| R-T-A3-2 HARD | Y (mémoire OK · D03=.1) | N | N (design · D04=.1) | Y | Y | **Y** | F08 · F10 | pattern durable |
| R-M01 | Y (D03=.1) | N | C | C | I | I | F04 bornage | A52-D05.4 |
| C1–C3 | Y | N | N | Dette | I | I | via R-M01 | A52-D05 |
| C4 tracking | Y (via B5) | N | via B5 | via B5 | via B5 | I | via B5 | A52-D01 |
| Legacy / MethodMode / `method/**` | Y (inventaire · D03=.1) | N | C | Y | Y | I | F03 · F11 | inventaire/plan · vague 1 |
| OPS1 | Y | N | C | Y | Y | I | F13 | ACL |
| Persistence | Y (NOT SELECTED · D03=.1) | N | design OK | Y | Y | Y | F10 | SELECTED futur |
| IAM | Y (NOT SELECTED · D03=.1) | N | design OK | C | C | Y | F10 | SELECTED futur |
| F08 | contenu NOT DECIDED · timing = avant delivery (D05) | N | C | Y | Y | I | — | bulletin F08 |
| F09 | contenu NOT DECIDED · timing = avant Critical/cutover (D05) | N | C | C | Y | Y | — | bulletin F09 |
| F10 | contenu NOT DECIDED · timing = avant durable/IAM (D05) | N | C | Y | Y | Y | — | bulletin F10 |

### Lecture normative

- **Framing** : aucune réserve HARD n’empêche un cadrage read-only (T-A7-D03=.1 · T-A7 doc 04 + A5.2).
- **Delivery preparation** : HARD/B5 ne bloquent pas *par elles-mêmes* une *future* prep documentaire (T-A7-D04=.1) ; prep reste `NOT AUTHORIZED` maintenant.
- **Delivery** : STOP B5 ; F08 à arbitrer avant delivery (calendrier D05) ; HARD / R1 bloquants selon chemin.
- **Real Critical** : A52-D03 `.1` + fail-closed + IAM + F09 — **interdit maintenant**.
- **Cutover** : niveau D · F09 · legacy/OPS1 — **interdit maintenant**.
- **Option C** : vagues futures uniquement · aucune ouverte.

## 2. Décisions F (relation — aucune auto-consommation de contenu)

| F | Statut contenu | Calendrier (T-A7-D05=.3) | Relation |
|---|----------------|--------------------------|----------|
| F04 | `DECIDED — UNCHANGED` | — | A52-D05 borne application future |
| F03 | `NOT DECIDED` | vague 1 / inventaire | legacy / MethodMode |
| F08 | `NOT DECIDED` | **avant delivery** | réserves avant delivery |
| F09 | `NOT DECIDED` | **avant real Critical / cutover** | Critical / cutover |
| F10 | `NOT DECIDED` | **avant persistence/IAM durable** | persistence / IAM order |
| F11–F13 | `NOT DECIDED` | selon vagues | UX / gouvernance / OPS1 |

`NO F-DECISION CONTENT AUTO-CONSUMPTION` — seul le **calendrier** F08/F09/F10 est adopté (D05).

## 3. Anti-claims

- matrice ≠ fermeture
- « peut rester ouvert pendant framing » ≠ « résolu »
- « ne bloque pas delivery prep » ≠ « delivery prep AUTHORIZED »
- calendrier F adopté ≠ contenu F `DECIDED`
- Option C adoptée ≠ vague ouverte
- T-A7 reste `NOT OPEN`
