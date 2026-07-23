# SFIA Review Pack — PR readiness CKC candidate routing

## Niveau
FULL

## Métadonnées

| Champ | Valeur |
|-------|--------|
| Date/heure | 2026-07-23 11:35:08 CEST (+0200) |
| Cycle | PR readiness (cycle 13) + Validation documentaire + Publication Git + Création PR |
| Profil | Critical |
| Gate Morris | `GO PR — CKC CANDIDATE ROUTING` |
| Worktree | /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts |
| Branche | `method/sfia-cycle-knowledge-contracts` |
| HEAD | `cae841519ed1d2dd825e6ecb998337cd47b4a1e1` |
| Base / origin/main | `499c6b3540d8c3fae776736dc3fba29938048bfd` |
| merge-base | = origin/main |
| Remote SHA | `cae841519ed1d2dd825e6ecb998337cd47b4a1e1` (vérifié) |
| PR | [#258](https://github.com/mcleland147/sfia-workspace/pull/258) |
| Base/head PR | `main` ← `method/sfia-cycle-knowledge-contracts` |
| Merge | **non exécuté** |
| UX HEAD | `2888b7e1c8643236c1ecee1fd8f01aa227ddc3cc` **inchangé** |

## Verdict

**CKC CANDIDATE ROUTING PR CREATED — MORRIS MERGE DECISION REQUIRED**

## Gate suivant

`GO MERGE — CKC CANDIDATE ROUTING` (**non consommé**)

---

## Local Git Truth Check

- 2026-07-23 11:34:21 CEST
- HEAD attendu `cae8415…` confirmé
- origin/main inchangé ; merge-base = origin/main
- staged vide ; untracked = `.tmp-sfia-review/` seulement
- remote branch absente avant push ; créée au push
- aucune PR concurrente
- `git diff --check` PASS
- secrets absents ; lock absent

## CKC PR readiness fallback

```
Cycle Knowledge Contract :
- recherché : oui
- cycle qualifié : 13 PR readiness
- contrat détaillé trouvé : non
- path : N/A
- statut : absent
- fallback : carte synthétique + méthode SFIA v2.6
- usage : experimental cognitive guidance
- autorité : aucune autorité d'exécution
- limites : aucun CKC PR readiness détaillé n'est adopté.
```

## Commits (origin/main..HEAD) — 9

```
cae8415 docs(sfia): fix candidate CKC routing references
8258957 docs(sfia): document CKC routing experiment
24196b3 docs(sfia): validate candidate CKC routing usage
852a05f docs(sfia): integrate CKC guidance into prompt generation
2279907 docs(sfia): route candidate cycle knowledge contracts
709a267 docs(sfia): strip trailing whitespace in cycle knowledge contracts
1d78723 docs(sfia): evaluate cycle knowledge contract model
c83aa45 docs(sfia): add cycle knowledge contract pilots
813ef87 docs(sfia): frame cycle knowledge contracts
```

## Diff stat

```
 .../automation/sfia-prompt-generation-engine.md    |  23 +++
 .../checklists/sfia-validation-checklist.md        |  16 ++
 .../core/sfia-chatgpt-cursor-operating-model.md    |  19 +-
 .../core/sfia-cycle-routing-guide.md               |  38 ++++
 .../sfia-fast-track/core/sfia-knowledge-layer.md   |  25 ++-
 .../00-framing-and-architecture.md                 | 227 +++++++++++++++++++++
 .../01-canonical-model-template.md                 | 188 +++++++++++++++++
 .../02-fifteen-cycles-synthetic-map.md             |  40 ++++
 .../03-pilot-evaluation-report.md                  | 128 ++++++++++++
 .../04-cycle-to-ckc-routing-matrix.md              |  31 +++
 .../05-routing-documentary-tests.md                |  84 ++++++++
 .../cycle-knowledge-contracts/README.md            |  68 ++++++
 .../cycle-knowledge-contracts/pilots/01-cadrage.md | 125 ++++++++++++
 .../pilots/02-conception-fonctionnelle.md          | 122 +++++++++++
 .../pilots/03-architecture-technique.md            | 122 +++++++++++
 .../pilots/04-qa-validation.md                     | 123 +++++++++++
 .../sfia-v2.5-project-cycles-method-candidate.md   |  25 ++-
 prompts/templates/sfia-cycle-execution-template.md |  44 +++-
 18 files changed, 1434 insertions(+), 14 deletions(-)
```

## Fichiers (name-status)

```
M	method/sfia-fast-track/automation/sfia-prompt-generation-engine.md
M	method/sfia-fast-track/checklists/sfia-validation-checklist.md
M	method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
M	method/sfia-fast-track/core/sfia-cycle-routing-guide.md
M	method/sfia-fast-track/core/sfia-knowledge-layer.md
A	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/00-framing-and-architecture.md
A	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/01-canonical-model-template.md
A	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/02-fifteen-cycles-synthetic-map.md
A	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/03-pilot-evaluation-report.md
A	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/04-cycle-to-ckc-routing-matrix.md
A	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/05-routing-documentary-tests.md
A	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/README.md
A	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md
A	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/02-conception-fonctionnelle.md
A	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md
A	method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md
M	method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
M	prompts/templates/sfia-cycle-execution-template.md
```

## Contrôles documentaires

| Contrôle | Résultat |
|----------|----------|
| Statut candidate / non baseline / non adopted | PASS |
| experimental cognitive guidance | PASS |
| Aucune autorité d'exécution | PASS |
| 4 pilotes seulement | PASS |
| 11 cycles fallback | PASS |
| Ordre 4.4.1→4.4.5 | PASS |
| Paths complets existants | PASS |
| Tests 1–9 | PASS |
| git diff --check | PASS |
| Hors périmètre code/UX | PASS |

## Mapping quinze cycles / pilotes

Aligné template §4.1. Pilotes **1 / 2 / 6 / 9**.

## Push

`BRANCH PUSHED — REMOTE SHA VERIFIED` — SHA `cae841519ed1d2dd825e6ecb998337cd47b4a1e1`

## PR

| Champ | Valeur |
|-------|--------|
| Numéro | 258 |
| URL | https://github.com/mcleland147/sfia-workspace/pull/258 |
| Titre | docs(sfia): integrate candidate Cycle Knowledge Contract routing |
| State | OPEN |
| Commits | 9 |
| Files | 18 |
| Checks initiaux | aucun check rollup (vide / CI absente) |
| Mergeable | UNKNOWN au moment de la création |

## Corps de PR (complet)

## Summary

- Introduces the candidate Cycle Knowledge Contract (CKC) model.
- Adds four detailed pilots for cycles **1**, **2**, **6** and **9**.
- Routes CKC consultation through the canonical SFIA entry points.
- Adds fallback behavior for the eleven cycles without a detailed CKC.
- Preserves **SFIA v2.6** as the operational baseline.
- Keeps CKCs explicitly **candidate** and **non-executive**.

## Why

The name of a project cycle alone does not fully define the cognitive posture, analysis dimensions, maturity signals, reliability criteria and anti-claims expected from GPT.

The CKC model provides controlled cognitive guidance without replacing:

- the Cycle Routing Guide ;
- the Prompt Generation Engine ;
- the Cursor execution template ;
- the Validation Checklist ;
- Morris decisions.

## Main changes

### CKC candidate assets

- Framework, template, fifteen-cycle map and pilot evaluation.
- Four pilots:
  - Cadrage ;
  - Conception fonctionnelle ;
  - Architecture technique ;
  - QA / validation.
- Cycle → CKC routing matrix with full repository paths.
- Documentary routing tests 1–9.

### Canonical candidate routing integration

- Cycle Routing Guide (§4.4.5, after §4.4.4) ;
- execution template (Repo-informed pre-check + instantiation fiche) ;
- Prompt Generation Engine ;
- Knowledge Layer ;
- Operating Model ;
- Validation Checklist ;
- fifteen-cycle method reference (`sfia-v2.5-project-cycles-method-candidate.md`).

### Structural consistency

- Heading order restored: 4.4.1 → 4.4.2 → 4.4.3 → 4.4.4 → 4.4.5 ;
- abbreviated `…/` paths replaced by full repo paths in operational entry points ;
- cross-references verified.

## Governance

- CKCs remain `method-candidate`.
- **No** baseline promotion.
- **No** SFIA version change.
- **No** execution authority.
- Morris remains the decision authority.
- Cursor remains bounded by generated execution prompts.
- Eleven cycles use documented fallback ; no CKC is invented.
- Status labels required: `candidate` · `non baseline` · `non adopted` · `experimental cognitive guidance`.

## Validation

- Fifteen-cycle mapping aligned with template §4.1.
- Pilot mapping confirmed: **1 / 2 / 6 / 9**.
- Routing section order corrected.
- Repository paths made explicit and verified on disk.
- Documentary routing tests 1–9 pass.
- `git diff --check` passes.
- UX/UI branch and documents **87/88** remain unchanged.
- No application code changed.

## Risks and reserves

- CKCs are not yet generalized to fifteen detailed contracts.
- Their definitive operational location remains undecided.
- Adoption and baseline promotion require separate Morris decisions.
- The candidate routing becomes operational only after merge.

## Out of scope

- Application code.
- SFIA Studio UX/UI.
- Eleven additional detailed CKCs.
- Baseline promotion.
- SFIA version change.
- Merge and branch cleanup.

## Requested decision

Review and decide whether the candidate CKC routing experiment can be merged while preserving its **candidate** status.


Made with [Cursor](https://cursor.com)

## Risques / réserves / dette

- Généralisation 15 CKC non faite
- Emplacement opérationnel définitif non décidé
- Promotion baseline = décision Morris séparée
- Routage candidat opérationnel seulement après merge

## Actions non exécutées

Merge · suppression branche · force push · code · UX · baseline · 11 CKC · v3.0

## UX/UI

HEAD `2888b7e…` confirmé inchangé.

## Fin review pack FULL

Verdict: CKC CANDIDATE ROUTING PR CREATED — MORRIS MERGE DECISION REQUIRED
