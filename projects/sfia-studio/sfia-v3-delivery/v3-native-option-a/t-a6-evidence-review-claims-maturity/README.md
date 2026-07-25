# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Titre cycle** | Evidence, Review, Claims and Maturity |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate arbitrage** | `GO ARBITRATE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` (PR #266 T-A5 merge) |
| **HEAD framing** | `40e92336b3e646f03354c7912c705b1d62b68097` |
| **Modeled / runtime** | **NONE** modifié — pack documentaire uniquement |
| **Push / PR / merge projet** | **NONE** — require Morris GO |
| **Statut pack** | **ARBITRATION PACK PREPARED** |
| **Horodatage** | 2026-07-26 00:43:49 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 ARBITRATION PACK PREPARED — MORRIS DECISIONS REQUIRED` |
| **Gate suivant** | `GO DECIDE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif

Préparer un decision pack fermé D-T-A6-01…12 permettant à Morris de statuer sans ambiguïté sur Evidence, ReviewBundle, ClaimEvaluation, maturité, autorité, stockage logique, automatisation et sorties T-A6.

## Périmètre

- Challenge contradictoire des options du cadrage ;
- Élimination des options incompatibles ;
- Recommandations uniques `RECOMMENDED — NOT DECIDED` ;
- Format de réponse Morris ;
- Traitement candidat des réserves R-T-A6-1…9.

## Hors périmètre

- Validation d’options à la place de Morris ;
- Enrichissement schema / runtime / tests ;
- Choix de technologie de stockage ;
- SQL, API, UI, worker, scheduler ;
- Fermeture de réserves ;
- T-A7 ;
- Push / PR / merge.

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) — cadrage (inchangé ce cycle)
3. [02-arbitration.md](./02-arbitration.md) — **decision pack Morris**

## Décisions validées (nouvelles)

**Aucune.**

Toutes les recommandations D-T-A6 restent `RECOMMENDED — NOT DECIDED` jusqu’à `GO DECIDE T-A6`.

Héritages utiles (non re-votés) : M-OA-07, M-OA-08, T-A5 D10.

## Décisions en attente Morris

| ID | Recommandation candidate |
|----|--------------------------|
| D-T-A6-01 | **C** Evidence entité T-A6 + bindings |
| D-T-A6-02 | **C** Hybride logique |
| D-T-A6-03 | **A+D** Agrégat + freeze |
| D-T-A6-04 | **B** ClaimEvaluation v1 unifié |
| D-T-A6-05 | **D** Matrice type × Critical |
| D-T-A6-06 | Matrice acteurs documentée |
| D-T-A6-07 | **C** Maturity proposée puis confirmée |
| D-T-A6-08 | **D** Réserves bloquent niveaux associés |
| D-T-A6-09 | Principles pack ; tech deferred |
| D-T-A6-10 | Boundary T-A6 / T-A7 |
| D-T-A6-11 | L0–L3 / L4 gated / L5 out |
| D-T-A6-12 | Output contract |

Format de réponse : voir [02-arbitration.md](./02-arbitration.md) §12.

## Réserves

### Existantes (OPEN — inchangées)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD exécution réelle Critical) |
| R-T-A3-2 | **OPEN** (HARD exécution réelle) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** (ClaimEvaluation schema) |
| U-M02 | **OPEN** (stockage Evidence) |

### Candidates (non validées — traitement proposé dans 02)

R-T-A6-1 … R-T-A6-9 — CREATE / MERGE / TRACK AS DEBT recommandés ; **aucune créée** sans Morris.

## Anti-claims

- Pas T-A6 décidé / validé / modeled ready / delivery ready / production ready
- Pas storage vendor choisi / schema ClaimEvaluation créé
- Pas réserves créées ou fermées
- Pas T-A7 / exécution réelle / adapter réel
- Pas push / PR / merge ce cycle

## Modeled de référence (lecture seule)

- `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/08-evidence-review-bundle-maturity-and-debt-model.md`
- `schemas/evidence/evidence.schema.json`
- `schemas/evidence/review-bundle.schema.json`
- `schemas/maturity/maturity-assessment.schema.json`
