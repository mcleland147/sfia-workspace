# SFIA Review Pack FULL — T-A5 Framing Option A

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-25 — Europe/Paris (CEST) |
| **Cycle** | Framing Option A — T-A5 Agent Selection and Execution |
| **Profil** | Critical |
| **Gate** | `GO FRAME T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | `mcleland147/sfia-workspace` |
| **origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **HEAD initial** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **HEAD final** | `f6cb8f39c772c2adf02e93933dbb2ceef096764f` |
| **merge-base** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **Truth Check** | **PASS** |
| **status** | clean tracked ; `?? .tmp-sfia-review/` only |
| **staged** | empty (post-commit) |
| **Push projet** | **NONE** |
| **PR** | **NONE** |
| **Runtime modifié** | **NONE** |
| **Modeled modifié** | **NONE** |
| **T-A5 delivery** | **NONE** |
| **Verdict** | **SFIA STUDIO V3-NATIVE OPTION A T-A5 FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE MODELED OR DELIVERY** |

## Handoff T-A4 source

| Item | Valeur |
|------|--------|
| Branche | `sfia/review-handoff` |
| Fichier | `sfia-review-handoff/latest-chatgpt-review.md` |
| Blob | `e182915952a22676aa1c658c996aaa14fe48f337` |
| Verdict | `SFIA STUDIO V3-NATIVE OPTION A T-A4 POST-MERGE VERIFIED — T-A4 CLOSED — T-A5 FRAMING MAY OPEN` |
| PR #265 | MERGED |

## CKC

| Item | Valeur |
|------|--------|
| Trouvé | oui |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` |
| Statut | candidate |
| executionAuthority | false |
| Limites | guidance only ; ne valide pas ; n’autorise pas agent/exécution |

## T-A5 préexistant

NONE — pas de branche/PR/docs/runtime `t-a5-*` ; mentions ownership/anti-claims seulement ; schema Attempt `0.1.0-oa` existant non runtime.

## Convention branche

Préfixe `framing/` présent dans le dépôt ; slices Option A delivery utilisent `delivery/`. Gate autorise `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution`. Path docs : `t-a5-agent-selection-execution/`.

## Périmètre / hors périmètre

**In :** cadrage docs, options, D-T-A5-01…10, réserves OPEN, commits locaux docs.
**Out :** runtime, modeled edits, agents, Attempt ops, shell/network/Cursor/MCP, SQL, UI, push, PR, merge, T-A0–T-A4 edits, method/prompts/package.

## Frontières

| Tranche | Possède |
|---------|---------|
| T-A4 | gouvernance → confirmed ; cancel pré-exec ; supersession ; CheckAuth |
| T-A5 | SelectAgent ; Start ; Attempt ; executing\|completed\|failed ; Cancel post-start ; RecordResult technique |
| T-A6 | Evidence / Review / Claim / maturity |
| T-A7 | Legacy cutover MethodMode / method/** / OPS1 |

## Objets candidats

- **AgentDescriptor** — registre deny-by-default
- **ExecutionAttempt** — agrégat séparé recommandé (D-01 A)
- **AgentSelectionRecord** — **non** autonome ; events + champs Attempt/contrat

## Lifecycle proposé

Attempt : `running → succeeded|failed|timeout|cancelled`
Contrat T-A5 : `confirmed → executing → completed|failed|cancelled`
Pas planned/starting/blocked durables ; retry = nouvel Attempt.

## Commandes / événements / erreurs

Voir `01-framing.md` §§6–8. Catalog modeled **non modifié**. Erreurs candidates documentées pour futur alignement.

## Sélection agent

| Option | Reco |
|--------|------|
| A capabilities | dérogation Standard/Light |
| B dans contrat | fort impact T-A4 ownership |
| C confirm humaine | **recommandée Critical** |

## Architecture

Persist-then-launch + adaptateur asynchrone direct (mémoire) ; queue/worker = évolution ; **pas** DATABASE SELECTED ; launch-then-persist **rejeté**.

## Autorité

Select/Start = barre contrat (resolver T-A3) ; Cancel elevatable Morris ; RecordResult = adaptateur authentifié ; système ≠ Morris.

## Atomicité / concurrence

OCC + idempotency ; persist-then-launch ; compensation cancel si launch fail ; D-06 : jamais completed spéculatif.

## Stop / kill switch

Refus pré-start fail-closed ; cancel best-effort ; Morris kill ; obsolescence mid-flight → cancel (D-07 B candidate).

## Réserves OPEN

B5, R1, R-T-A3-1..4 — **aucune fermée**. R-T-A3-1/2 prioritaires pour future delivery.

## D-T-A5-01…10 (recommandations candidates)

| ID | Reco |
|----|------|
| 01 | Attempt agrégat séparé |
| 02 | Sélection C (Critical) |
| 03 | Select + Start séparés |
| 04 | Lifecycle minimal running→terminal |
| 05 | Persist-then-launch |
| 06 | rester running + retry Record (pas completed spéculatif) |
| 07 | cancel best-effort si obsolète mid-flight |
| 08 | même barre autorité + Morris cancel |
| 09 | timeout→failed mapping ; retry=new Attempt |
| 10 | T-A5 technique only ; Evidence=T-A6 |

## Fichiers

| Action | Path |
|--------|------|
| Created | `…/t-a5-agent-selection-execution/README.md` |
| Created | `…/t-a5-agent-selection-execution/01-framing.md` |
| Modified | NONE (hors nouveau dossier) |
| Deleted | NONE |

## Diff / commit

| Item | Valeur |
|------|--------|
| Diff stat | 2 files, +634 / −0 |
| Commit | `f6cb8f39c772c2adf02e93933dbb2ceef096764f` — `docs(sfia-studio): frame T-A5 agent selection and execution` |

## Contenu créé

Les fichiers complets sont dans le commit `f6cb8f3` (README + 01-framing). Le cadrage couvre question structurante, frontières, préconditions, modèle, lifecycle, commandes, events, erreurs, options A/B/C, architectures, autorité, atomicité, stops, obs, perf, tests, réserves, D-01…10, anti-claims.

## Anti-claims

Pas T-A5 authorized/delivery/implemented ; pas agent/Attempt/execution enabled ; pas modeled validated T-A5 ; pas DB selected ; pas Option A complete ; réserves OPEN ; pas push/PR/merge.

## Gate suivant

`GO ARBITRATE T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

## Exact verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A5 FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE MODELED OR DELIVERY**
