# SFIA STUDIO NEXT — Review Pack FULL — ML4D Sas Nora R1/R2 consolidation

## REVIEW PACK REPUBLISHED — R1/R2 CORRECTED

## Git Truth

| Champ | Valeur |
| --- | --- |
| Repo | mcleland147/sfia-workspace |
| Branche | feat/next-ml4d-sas-nora-convergence-20261116 |
| HEAD candidat |  |
| Parent |  (6798219f C1–C4) |
| Tree web |  |
| origin/main |  |
| Build DEV |  |
| Package | 0.0.0-dev |
| Handoff précédent |  |
| RECETTE | gelée  /  @ :3200 |
| Push produit | AUCUN |
| Classe | PATCH candidat compatible · NO RELEASE · STABLE NOT AVAILABLE |

## Causes exactes R1 / R2

### R1 — Intention durable écrasable après initialisation

Avant : .
Le renommage (nameRaw renseigné) était protégé, mais un tour ordinaire sans rename
avec  injectait encore  dans l'intention, puis le merge
remplaçait l'intention antérieure.

Correction :  ne devient intention que si
(aucune intention antérieure sur la préparation). Sinon  seul.
Service : .

### R2 — Omission de clarifications confondue avec []

Avant : Zod  normalisait l'absence de propriété en , puis
 clôturait le courant.

Correction :  **optional** sans default ; draft porte
 ; merge conserve  si omission ;
 explicite clôture toujours. UNAVAILABLE → draft null.

## Contrats de données

1.  renseigné → mise à jour sourcée ; vide → pas de mutation d'intention établie.
2.  non vide = courant connu ;  = réévaluation vide fiable ; **absent** = non réévalué.
3. Compatibilité anciennes enveloppes sans  / projections v1 : pas de crash.
4. Aucune migration DB ; schéma qualification compatible (optionalité champ).

## Fichiers modifiés

-
-
-
-
-
-
-
-
-
-
-

Total fichiers : **11**

## Diffs complets























## Tests discriminants

| Id | Résultat |
| --- | --- |
| R1-A init | PASS |
| R1-B ordinary | PASS |
| R1-C rename | PASS |
| R1-D reorient | PASS |
| R1-E UNAVAILABLE | PASS |
| R1-F legacy | PASS |
| R2-A explicit list | PASS |
| R2-B explicit [] | PASS |
| R2-C omission QUALIFIED | PASS |
| R2-D UNAVAILABLE | PASS |
| R2-E NEEDS_CLARIFICATION omit | PASS |
| R2-F rename after resolve | PASS |
| R2-G reopen | PASS |
| R2-H [] vs omit | PASS |

Preuve R2-C : enveloppe brute **sans** propriété  → après Zod
(pas ) → merge conserve Question A.

Preuve R1-B : intention préexistante +  + goal local → intention inchangée.

## Suites

| Suite | Résultat |
| --- | --- |
| UNIT | PASS **419** |
| PG integration | PASS **484** (29 files) |
| BROWSER FAKE ml4d-sas-nora-projection | PASS **5** (T1→T7 enrichi R1-B/R2-C) |
| next build | PASS |
| next lint | PASS (warnings préexistants hors  corrigé) |
| Nora LIVE | **NOT PROVEN** |
| Morris UX | **PENDING** |

## Manifeste candidat RECETTE (non déployé)

- source_sha:
- parent:
- tree_web:
- build_dev:
- schema: 013 present — aucune migration
- previous_recette:  /
- go_recette: **REQUIS** (mandat distinct)

## Réserves

- Nora LIVE non prouvée sur ce candidat.
- Morris UX PENDING ; GO RECETTE non donné.
- C3/C4 hors mandat (conservés du cycle précédent).
- Gate C OPEN ; STABLE NOT AVAILABLE ; ML5 non autorisé.
- LIVE : Nora doit renseigner  quand elle réévalue ; omission = non-réévaluation.

## Verdict

**READY WITH RESERVES — R1/R2 CORRECTED**
