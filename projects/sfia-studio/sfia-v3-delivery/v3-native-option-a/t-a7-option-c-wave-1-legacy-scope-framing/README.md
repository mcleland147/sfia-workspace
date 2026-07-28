# T-A7 Option C — Wave 1 Framing — Legacy and Scope Inventory

| Champ | Valeur |
|-------|--------|
| **Gate consommé** | `GO FRAME T-A7 OPTION C WAVE 1 — LEGACY AND SCOPE INVENTORY — READ-ONLY DOCUMENTARY FRAMING — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 14:39:41 CEST (+0200) |
| **Cycle / profil** | 2 — Cadrage (+3 · 6 · 9 · 10 · 15) · Critical |
| **Base** | `origin/main` @ `7a3e512f562f480c345a12a744806aa4f2ef625b` |
| **Branche locale** | `framing/sfia-studio-v3-native-option-a-t-a7-wave-1-legacy-scope` |
| **Worktree local** | `sfia-workspace-t-a7-wave-1-legacy-scope` (hors path absolu) |
| **Option C** | `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3) — **aucune vague technique ouverte** |
| **Vague 1** | **cadrage documentaire uniquement** (inventaire) |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
| **F03 / F11 / F13** | `NOT DECIDED` (préparés, non consommés) |
| **F08 / F09 / F10** | calendrier décidé (T-A7-D05) · contenu `NOT DECIDED` |
| **B5 / R1 / R-M01** | `OPEN` |
| **R-T-A3-1 / R-T-A3-2** | `OPEN HARD` |
| **T-A6 COMPLETE** | `NOT DECLARED` |
| **Option A** | `NOT COMPLETE` |
| **Persistence / IAM / RGPD prod** | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |
| **Push / PR** | **aucun** |
| **Enrichissement post-inventaire** | subagents MethodMode / `method/**` / OPS1 — preuves `canonicalPaths` · dual enum · orphan select · CT/D1 coupling |

## Objectif

Produire un inventaire documentaire exploitable de MethodMode, de `method/**`, d’OPS1 et de leurs dépendances, afin de préparer les arbitrages futurs F03 / F11 / F13 **sans** modifier ces composants et **sans** ouvrir T-A7.

## Périmètre

- inventaire MethodMode (runtime D1, UI, tests, docs) ;
- inventaire `method/**` (structure, consommateurs, candidats) ;
- inventaire OPS1 (docs, runtime `app/lib/ops1`, allowlist, ACL/frontières) ;
- carte de dépendances et frontières de scope T-A7 ;
- options W1-A/B/C · validations / rollback / stops ;
- bulletin Morris T-A7-W1-D01…D05 (`MORRIS DECISION REQUIRED`).

## Hors périmètre

- modification / suppression `method/**` · OPS1 · runtime · modeled · workflow · tests applicatifs · CI ;
- ouverture technique de vague · T-A7 B/C/D ;
- delivery preparation / delivery / cutover ;
- fermeture de réserves · consommation F03/F08–F13 ;
- sélection persistence / IAM · déclaration COMPLETE.

## Sources principales

| Source | Rôle |
|--------|------|
| Pack T-A7 next-step (PR #282) | Option C · D01–D05 · vague 1 = legacy/périmètre |
| Pack T-A7 legacy/cutover (PR #280) | P03–P11 · SC-02…SC-05 · F03/F11/F13 |
| Code `app/lib/d1` · `app/features/d1` | MethodMode ACTIVE |
| Code `app/lib/ops1` · `app/features/ops1` | OPS1 ACTIVE + allowlist `method/` |
| Arbre `method/` | méthode Fast Track + complementary |
| Template SFIA cycle | méthode d’exécution |

## Livrables

| Fichier | Rôle |
|---------|------|
| `01-source-truth-and-scope.md` | Base Git · recherches · in/out scope |
| `02-methodmode-inventory.md` | Inventaire MethodMode |
| `03-method-directory-inventory.md` | Inventaire `method/**` |
| `04-ops1-boundary-assessment.md` | OPS1 frontières |
| `05-dependency-map.md` | Carte de dépendances |
| `06-removal-and-isolation-options.md` | Options W1-A/B/C |
| `07-validation-rollback-and-stop-conditions.md` | Preuves · stops |
| `08-morris-decision-pack.md` | T-A7-W1-D01…D05 |

## Décisions existantes (rappel)

| ID | Choix | Statut |
|----|-------|--------|
| T-A7-D01 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D02 | `.3` Option C | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D03 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D04 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D05 | `.3` | `DECIDED — ADOPTED BY MORRIS` |

## Décisions futures (ce pack)

T-A7-W1-D01…D05 — toutes `MORRIS DECISION REQUIRED` — **aucune présélection**.

## Anti-claims

- cadrage de vague ≠ vague technique ouverte
- inventaire ≠ autorisation de retrait
- candidat au retrait ≠ décision de suppression
- référence trouvée ≠ usage actif
- absence de référence ≠ preuve de non-usage
- Option C adoptée ≠ exécution lancée
- F préparée ≠ F consommée
- rollback documenté ≠ rollback validé
- T-A7 framing ≠ T-A7 OPEN

## Verdict

`T-A7 OPTION C WAVE 1 LEGACY AND SCOPE FRAMING COMPLETED — METHODMODE METHOD DIRECTORY AND OPS1 INVENTORIED — DEPENDENCIES AND FUTURE REMOVAL OPTIONS DOCUMENTED — MORRIS DECISIONS PREPARED WITHOUT PRESELECTION — F03 F11 AND F13 REMAIN NOT DECIDED — TECHNICAL RESERVES REMAIN OPEN — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH NOT PUSHED`

## Gate candidat suivant

`GO REVIEW AND INTEGRATE T-A7 OPTION C WAVE 1 LEGACY SCOPE FRAMING — ACCELERATED DOCUMENTARY CHAIN — PUSH PR MERGE IF CHECKS PASS — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`
