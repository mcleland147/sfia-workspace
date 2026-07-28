# T-A7 Option C — Wave 1 Framing — Legacy and Scope Inventory

| Champ | Valeur |
|-------|--------|
| **Gate inventaire (historique)** | `GO FRAME T-A7 OPTION C WAVE 1 — LEGACY AND SCOPE INVENTORY — … — KEEP T-A7 NOT OPEN` |
| **Gate décisions (consommé)** | `GO RECORD AND INTEGRATE T-A7 OPTION C WAVE 1 DECISIONS — W1-D01=W1-B — … — KEEP T-A7 NOT OPEN` |
| **Date inventaire** | 2026-07-28 14:39:41 CEST (+0200) |
| **Date décisions** | 2026-07-28 18:50:00 CEST (+0200) |
| **Cycle / profil** | 15 — Capitalisation (+1 · 2 · 9 · 13 · 14) · Critical |
| **Base** | `origin/main` @ `7746ea293ed1fe13d7c515ebf9962ebdd9b71a9a` |
| **Branche locale** | `record/sfia-studio-v3-native-option-a-t-a7-wave-1-decisions` |
| **Worktree local** | `sfia-workspace-t-a7-wave-1-decisions` (hors path absolu) |
| **Option C** | `DECIDED — ADOPTED BY MORRIS` (T-A7-D02=.3) — **aucune vague technique ouverte** |
| **Vague 1** | inventaire + **décisions W1-D01…D05 enregistrées** · **pas** de vague technique |
| **W1-B** | `DECIDED — ADOPTED BY MORRIS` |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation / delivery / cutover** | `NOT AUTHORIZED` |
| **F03 / F11 / F13** | contenu `NOT DECIDED` · **gates obligatoires** avant prep technique retrait (W1-D05) |
| **F08 / F09 / F10** | calendrier décidé (T-A7-D05) · contenu `NOT DECIDED` |
| **B5 / R1 / R-M01** | `OPEN` |
| **R-T-A3-1 / R-T-A3-2** | `OPEN HARD` |
| **T-A6 COMPLETE** | `NOT DECLARED` |
| **Option A** | `NOT COMPLETE` |
| **Persistence / IAM / RGPD prod** | `NOT SELECTED` / `NOT SELECTED` / `NOT VALIDATED` |

## Objectif

Inventorier MethodMode, `method/**` et OPS1, puis **enregistrer** les décisions Morris T-A7-W1-D01…D05 **sans** préparation technique, **sans** consommer le contenu F03/F11/F13, et **sans** ouvrir T-A7.

## Périmètre

- inventaire MethodMode / `method/**` / OPS1 (PR #283) ;
- enregistrement W1-D01…D05 · W1-B adopté ;
- séquencement documentaire futur · stops D04/D05 ;
- hors : exécution technique · retrait · isolation code · delivery/cutover.

## Hors périmètre

- modification / suppression `method/**` · OPS1 · runtime · modeled · workflow · tests · CI ;
- plan technique exécutable · préparation technique de retrait ;
- ouverture technique de vague · T-A7 B/C/D ;
- delivery preparation / delivery / cutover ;
- fermeture de réserves · consommation **contenu** F03/F08–F13 ;
- sélection persistence / IAM · déclaration COMPLETE.

## Sources principales

| Source | Rôle |
|--------|------|
| Pack Wave 1 sur main (PR #283) | inventaires + options + bulletin |
| Pack T-A7 next-step (PR #282) | Option C · D01–D05 |
| Pack T-A7 legacy/cutover (PR #280) | P03–P11 · SC · F03/F11/F13 |
| Handoff post-merge PR #283 | preuve integration inventaire |
| Template SFIA cycle | méthode d’exécution |

## Livrables

| Fichier | Rôle |
|---------|------|
| `01`–`05` | Inventaires / dépendances (inchangés ce cycle) |
| `06-removal-and-isolation-options.md` | W1-B adopté |
| `07-validation-rollback-and-stop-conditions.md` | stops D04/D05 · F gates |
| `08-morris-decision-pack.md` | T-A7-W1-D01…D05 **enregistrées** |
| `README.md` | synthèse · verdict · gate suivant |

## Décisions T-A7 (rappel)

| ID | Choix | Statut |
|----|-------|--------|
| T-A7-D01 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D02 | `.3` Option C | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D03 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D04 | `.1` | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-D05 | `.3` | `DECIDED — ADOPTED BY MORRIS` |

## Décisions Wave 1 (ce cycle)

| ID | Choix | Statut |
|----|-------|--------|
| T-A7-W1-D01 | W1-B — inventory + candidate removal plan | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-W1-D02 | actifs : MethodMode D1 · trio `SFIA_CANONICAL_CORE_PATHS` · consumers method | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-W1-D03 | candidats futurs : orphan select · Gate/route DOC ONLY · archives/duplications | `DECIDED — ADOPTED BY MORRIS AS FUTURE REMOVAL CANDIDATES` |
| T-A7-W1-D04 | isolate OPS1 before any removal | `DECIDED — ADOPTED BY MORRIS` |
| T-A7-W1-D05 | decide F03/F11/F13 before any technical removal preparation | `DECIDED — ADOPTED BY MORRIS` |

## Anti-claims

- W1-B adopté ≠ préparation technique autorisée
- plan candidat ≠ retrait autorisé
- actif confirmé ≠ architecture cible / conservation définitive
- candidat au retrait ≠ suppression décidée
- isolation OPS1 décidée ≠ isolation implémentée
- obligation F03/F11/F13 ≠ contenu F décidé
- T-A7 framing / décisions Wave 1 ≠ T-A7 OPEN

## Verdict

`T-A7 OPTION C WAVE 1 MORRIS DECISIONS RECORDED — W1-D01 W1-B ADOPTED — ACTIVE LEGACY BLOCKS CONFIRMED — FUTURE REMOVAL CANDIDATES CONFIRMED WITHOUT AUTHORIZING REMOVAL — OPS1 ISOLATION REQUIRED BEFORE ANY REMOVAL — F03 F11 AND F13 REQUIRED BEFORE ANY TECHNICAL REMOVAL PREPARATION WHILE CONTENT REMAINS NOT DECIDED — NO METHOD OPS1 RUNTIME MODELED OR WORKFLOW MODIFICATION — T-A7 NOT OPEN — DELIVERY PREPARATION DELIVERY AND CUTOVER NOT AUTHORIZED`

## Gate candidat suivant

`GO FRAME T-A7 OPTION C WAVE 1 CANDIDATE REMOVAL PLAN — DOCUMENTARY W1-B SEQUENCES VALIDATIONS ROLLBACK AND GATES ONLY — NO TECHNICAL PREPARATION — NO METHOD OR OPS1 MODIFICATION — NO F03 F11 OR F13 CONTENT CONSUMPTION — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`
