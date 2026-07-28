# A5.2 — Framing réserves, autorité et atomicité

| Champ | Valeur |
|-------|--------|
| **Gate consommé** | `GO FRAME A5.2 T-A7 RESERVATIONS AUTHORITY AND ATOMICITY — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Cycle / profil** | 1 — Cadrage (+3 · 6 · 9 · 10 · 12 · 15) · Critical |
| **Base** | `origin/main` @ `9f578ea1677ce65cffb4b05ddf5649a21a5b240c` (merge PR #280) |
| **Branche locale** | `framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity` |
| **Statut A5.2 framing** | `PREPARED — MORRIS ARBITRATION REQUIRED` |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation** | `NOT AUTHORIZED` |
| **Delivery** | `NOT AUTHORIZED` |
| **Cutover** | `NOT AUTHORIZED` |
| **T-A6 COMPLETE** | `NOT DECLARED` |
| **Option A** | `NOT COMPLETE` |
| **Persistence / IAM / RGPD prod** | persistence `NOT SELECTED` · IAM `NOT SELECTED` · RGPD prod `NOT VALIDATED` |
| **F03 / F08–F13** | `NOT DECIDED` |
| **Push / PR** | **aucun** |

## Objectif

Produire un pack d’arbitrage Morris sur B5, R1, R-T-A3-1, R-T-A3-2, R-M01 et C1–C4 (autorité + atomicité), sans consommer de décision F, sans fermer de réserve, sans ouvrir T-A7.

## Fichiers

| Fichier | Rôle |
|---------|------|
| `01-scope-and-source-truth.md` | Périmètre, sources, vérité Git |
| `02-reservation-dependency-matrix.md` | Registre + dépendances + priorisation |
| `03-authority-model-and-gaps.md` | Autorité / Confirm Critical / A52-D03 |
| `04-atomicity-model-and-options.md` | Atomicité / A52-D02 · A52-D04 |
| `05-r-m01-and-c1-c4-assessment.md` | R-M01 · C1–C4 / A52-D05 |
| `06-morris-arbitration-pack.md` | Bulletins A52-D01…D05 |

## Décisions préparées (non consommées)

| ID | Sujet | Statut |
|----|-------|--------|
| A52-D01 | B5 / carry-forward LPS (+ C4) | `RECOMMENDED — NOT DECIDED` |
| A52-D02 | R1 / Project↔Cycle | `RECOMMENDED — NOT DECIDED` |
| A52-D03 | R-T-A3-1 / Critical acknowledge | `RECOMMENDED — NOT DECIDED` |
| A52-D04 | R-T-A3-2 / Decision↔LPS/Epistemic | `RECOMMENDED — NOT DECIDED` |
| A52-D05 | R-M01 et C1–C4 | `RECOMMENDED — NOT DECIDED` |

## Anti-claims

- framing A5.2 ≠ ouverture T-A7
- recommandation ≠ décision Morris
- `RECOMMENDED — NOT DECIDED` ≠ `ACCEPTED` / `ADOPTED` / fermeture
- définition COMPLETE ≠ déclaration COMPLETE
- A52-D0x ≠ consommation F08/F09/F10
- aucune persistence/IAM sélectionnée
- aucun delivery / cutover autorisé

## Verdict

`SFIA STUDIO A5.2 RESERVATIONS AUTHORITY AND ATOMICITY FRAMING PREPARED — B5 R1 R-T-A3-1 R-T-A3-2 R-M01 AND C1-C4 ASSESSED — AUTHORITY AND ATOMICITY MATRICES PRODUCED — FIVE MORRIS ARBITRATIONS STRUCTURED — NO OPTION AUTO-SELECTED — NO RESERVE CLOSED — F03 AND F08 TO F13 REMAIN NOT DECIDED — PROJECT BRANCH NOT PUSHED — T-A7 NOT OPEN — DELIVERY AND CUTOVER NOT AUTHORIZED — T-A6 NOT DECLARED COMPLETE — OPTION A NOT COMPLETE`

## Gate candidat suivant

`GO REVIEW A5.2 RESERVATIONS AUTHORITY AND ATOMICITY FRAMING — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`
