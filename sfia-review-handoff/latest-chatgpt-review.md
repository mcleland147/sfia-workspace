# SFIA Studio — Review Pack FULL — Audit récupération workspace principal

**Date/heure :** 2026-07-19 02:27:28 CEST
**Niveau :** FULL
**Cycle :** 1 — Cadrage / audit de récupération locale
**Profil :** Critical
**Typologie :** CAPA / DOC
**Verdict :** WORKSPACE AUDIT COMPLETE — MORRIS RECOVERY DECISION REQUIRED

### Review Handoff Git
**required** — branche `sfia/review-handoff` — `sfia-review-handoff/latest-chatgpt-review.md`
Message : `docs: publish functional architecture workspace recovery audit`

### Garantie
Aucune modification de fichier projet, aucun staging, aucun commit projet, aucun stash/reset/clean/checkout, aucune branche/worktree créée, aucun delivery.

---

## 1. Identité Git

| Champ | Valeur |
|---|---|
| Repo | `/Users/morris/Projects/sfia-workspace` |
| Branche | `project/sfia-studio-functional-architecture` |
| HEAD | `4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3` |
| origin/main | `ff5e3f6e5849f89b992274fbf2b6a33aa15654d9` |
| merge-base(HEAD, origin/main) | `4f4e7cf…` (= HEAD) |
| origin/main...HEAD | **8** commits sur main non dans HEAD · **0** commit branch unique |
| Staged | aucun |
| Modified tracked | **6** |
| Untracked (entrées git status) | **10** racines / **45** fichiers listés par `ls-files` / **51** après expansion |

### Interprétation
La branche FA est **entièrement contenue** dans l’historique de `origin/main` (merge-base = HEAD). Main est en avance (UX #215 + architecture technique #216 + merges). **Tout le travail local à arbitrer est non commité** (WT dirty).

### Worktrees
```
/Users/morris/Projects/sfia-workspace                      4f4e7cf [project/sfia-studio-functional-architecture]
/Users/morris/Projects/sfia-codex-pilot                    ec7f397 [method/codex-operating-model-pilot]
/Users/morris/Projects/sfia-task-tracker                   b763a31 [cadrage/task-tracker-light]
/Users/morris/Projects/sfia-workspace-ux-reconciliation    7bdabdc [project/sfia-studio-ux-ui-reconciliation]
/Users/morris/Projects/sfia-workspace/sfia-review-handoff  c6c7ec2 [sfia/review-handoff]
```

### Status --short
```
M projects/campus360/README.md
 M projects/sfia-studio/07-product-trajectory-and-decision-pack.md
 M projects/sfia-studio/11-functional-architecture.md
 M projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
 M projects/sfia-studio/13-functional-architecture-decision-pack.md
 M projects/sfia-studio/README.md
?? .sfia/
?? .tmp-sfia-review/
?? projects/campus360/04-detailed-framing.md
?? projects/campus360/05-mvp-increment-trajectory.md
?? projects/campus360/06-governance-and-stakeholders.md
?? projects/campus360/07-risks-dependencies-and-gates.md
?? projects/sfia-studio/14-ux-ui-contract.md
?? projects/sfia-studio/15-ux-ui-flows-and-screens.md
?? projects/sfia-studio/16-ux-ui-decision-pack.md
?? sfia-review-handoff/
```

### Log (extrait)
```
4f4e7cf (HEAD -> project/sfia-studio-functional-architecture, origin/project/sfia-studio-functional-architecture) docs: sync SFIA Studio PR 213 post-merge integration
0b61d72 docs: finalize SFIA Studio functional architecture post-merge state
33d61e3 docs: sync SFIA Studio functional architecture post-merge state
72cab80 docs: finalize SFIA Studio architecture PR wording
cf8ddaf docs: align SFIA Studio architecture PR status
2153258 docs: add validated SFIA Studio functional architecture
e9d8193 Merge pull request #210 from mcleland147/project/sfia-studio-functional-design
cf64fdd (origin/project/sfia-studio-functional-design, project/sfia-studio-functional-design) docs(sfia-studio): synchronize functional design post-merge status
fdade59 Merge pull request #209 from mcleland147/project/sfia-studio-functional-design
99eaeaa docs(sfia-studio): add validated functional design
8f5e8a8 Merge pull request #208 from mcleland147/project/sfia-studio-pre-framing
18c6427 (origin/project/sfia-studio-pre-framing, project/sfia-studio-pre-framing) docs(sfia-studio): finalize post-merge documentation
```

---

## 2. Comptages

| Périmètre | Fichiers |
|---|---|
| review temporaire | 35 |
| SFIA Studio | 8 |
| Campus360 | 5 |
| runtime MCP | 2 |
| handoff | 1 |

| Classe | Nb |
|---|---|
| A | 0 |
| B | 5 |
| C | 2 |
| D | 6 |
| E | 34 |
| F | 3 |
| G | 1 |
| H | 0 |

---

## 3. Inventaire exhaustif + classification

| Chemin | Statut | Taille | Périmètre | vs HEAD | vs main | Classe | Confiance | Action candidate | Gate |
|---|---|---|---|---|---|---|---|---|---|
| `.sfia/mcp/logs/bridge-audit.jsonl` | ?? | 10815 | runtime MCP | absent | absent | **E** | fort | Ne pas versionner ; suppression candidate + éventuel .gitignore futur (hors cycle) | GO nettoyage .sfia |
| `.sfia/mcp/logs/runner-audit.jsonl` | ?? | 9602 | runtime MCP | absent | absent | **E** | fort | Ne pas versionner ; suppression candidate + éventuel .gitignore futur (hors cycle) | GO nettoyage .sfia |
| `.tmp-sfia-review/_final_post_merge_sync.py` | ?? | 34751 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/_gen_pd08_pack.py` | ?? | 10816 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/build-pd-06a-chatgpt-review.sh` | ?? | 15704 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/build-pd-07a-chatgpt-review.sh` | ?? | 14612 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/chatgpt-review.md` | ?? | 6844 | review temporaire | absent | absent | **E** | fort | Écrasement normal ; non commit projet | — |
| `.tmp-sfia-review/classify-lot-e1-residuals.py` | ?? | 13159 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/d1-manifest.json` | ?? | 10015 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/d1-ref-files-edited.json` | ?? | 5956 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/d2-manifest.json` | ?? | 11810 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/d2-ref-files-edited.json` | ?? | 14362 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/d3-manifest.json` | ?? | 13319 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/d3-ref-files-edited.json` | ?? | 5708 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/execute-lot-e1.py` | ?? | 14412 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/generate-e2-identity-correction-pack.py` | ?? | 3085 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/generate-e2-report.py` | ?? | 8882 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/generate-e2-review-pack.py` | ?? | 4985 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/generate-lot-e-closure-pack.py` | ?? | 3663 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/generate-lot-f-review-pack.py` | ?? | 4225 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/global-capitalization-rename-references.md` | ?? | 3053 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/lot-0-archive-remaining-manifest.json` | ?? | 19598 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/lot-a-manifest.md` | ?? | 1674 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/lot-c-manifest.json` | ?? | 9565 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/lot-d-manifest.json` | ?? | 252295 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/lot-d-stats.json` | ?? | 45362 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/lot-e-manifest.json` | ?? | 104296 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/lot-e-stats.json` | ?? | 2357 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/lot-e1-execution-log.json` | ?? | 65701 | review temporaire | absent | absent | **F** | moyen | Archiver hors repo puis supprimer, ou purge directe | GO archive vs purge |
| `.tmp-sfia-review/lot-e1-residual-classification.json` | ?? | 62285 | review temporaire | absent | absent | **F** | moyen | Archiver hors repo puis supprimer, ou purge directe | GO archive vs purge |
| `.tmp-sfia-review/lot-e2-validation.json` | ?? | 29613 | review temporaire | absent | absent | **F** | moyen | Archiver hors repo puis supprimer, ou purge directe | GO archive vs purge |
| `.tmp-sfia-review/lot-f-manifest.json` | ?? | 2770 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/pd-08-pr-readiness.diff` | ?? | 24748 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/pd-08b-full.diff` | ?? | 19171 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/pd-08b1-full.diff` | ?? | 24748 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/qualify-lot-e.py` | ?? | 19708 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `.tmp-sfia-review/validate-lot-e2.py` | ?? | 11734 | review temporaire | absent | absent | **E** | moyen | Suppression candidate après GO (option archive locale) | GO nettoyage .tmp |
| `projects/campus360/04-detailed-framing.md` | ?? | 15380 | Campus360 | absent | absent | **B** | fort | Versionner lot autonome Campus360 | GO commit/PR Campus360 distinct |
| `projects/campus360/05-mvp-increment-trajectory.md` | ?? | 10861 | Campus360 | absent | absent | **B** | fort | Versionner lot autonome Campus360 | GO commit/PR Campus360 distinct |
| `projects/campus360/06-governance-and-stakeholders.md` | ?? | 7546 | Campus360 | absent | absent | **B** | fort | Versionner lot autonome Campus360 | GO commit/PR Campus360 distinct |
| `projects/campus360/07-risks-dependencies-and-gates.md` | ?? | 8144 | Campus360 | absent | absent | **B** | fort | Versionner lot autonome Campus360 | GO commit/PR Campus360 distinct |
| `projects/campus360/README.md` | M | 6070 | Campus360 | divergent | divergent | **B** | fort | Conserver dans branche dédiée Campus360 | GO branche/lot Campus360 |
| `projects/sfia-studio/07-product-trajectory-and-decision-pack.md` | M | 21398 | SFIA Studio | divergent | divergent | **D** | fort | Ne pas versionner ; discard après GO nettoyage | GO suppression locale |
| `projects/sfia-studio/11-functional-architecture.md` | M | 15181 | SFIA Studio | divergent | divergent | **C** | moyen | Extraire/diffuser en lot sync 11 (ou confirmer discard si sync volontairement reportée) | GO extraction OU discard |
| `projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md` | M | 13944 | SFIA Studio | divergent | divergent | **C** | moyen | Lot sync 11/12 ou discard | GO extraction OU discard |
| `projects/sfia-studio/13-functional-architecture-decision-pack.md` | M | 15726 | SFIA Studio | divergent | divergent | **D** | fort | Discard après GO | GO suppression locale |
| `projects/sfia-studio/14-ux-ui-contract.md` | ?? | 15217 | SFIA Studio | absent | divergent | **D** | fort | Discard — ne pas écraser main | GO suppression locale |
| `projects/sfia-studio/15-ux-ui-flows-and-screens.md` | ?? | 15528 | SFIA Studio | absent | divergent | **D** | fort | Discard — ne pas écraser main | GO suppression locale |
| `projects/sfia-studio/16-ux-ui-decision-pack.md` | ?? | 8218 | SFIA Studio | absent | divergent | **D** | fort | Discard — ne pas écraser main | GO suppression locale |
| `projects/sfia-studio/README.md` | M | 20881 | SFIA Studio | divergent | divergent | **D** | fort | Discard après GO | GO suppression locale |
| `sfia-review-handoff/sfia-review-handoff/latest-chatgpt-review.md` | ?? | 6844 | handoff | absent | absent | **G** | fort | Ne PAS supprimer comme untracked ; traiter nesting worktree séparément | GO hygiène worktree (déplacer hors principal?) |

---

## 4. Justifications par fichier

### `projects/sfia-studio/07-product-trajectory-and-decision-pack.md`
- Classe **D** (fort)
- État intermédiaire « UX lancé / option ouverte » ; main a Option B clôturée + delivery/tech (#215/#216). Pas de fait unique non absorbé.
- Action : Ne pas versionner ; discard après GO nettoyage
- Gate : GO suppression locale

### `projects/sfia-studio/README.md`
- Classe **D** (fort)
- Statut local `ux-ui-contract-in-progress` obsolète vs main `ux-ui-closed` + archi technique validée.
- Action : Discard après GO
- Gate : GO suppression locale

### `projects/sfia-studio/13-functional-architecture-decision-pack.md`
- Classe **D** (fort)
- AF-CAND-11B local = UX lancé (pas clôturé) ; main = UX clôturé Option B + delivery autorisé. Local dépassé.
- Action : Discard après GO
- Gate : GO suppression locale

### `projects/sfia-studio/11-functional-architecture.md`
- Classe **C** (moyen)
- Main 11 conserve encore AF-CAND-11B NON DÉCIDÉE / base #213 ; WT local aligne #214 + 11B VALIDÉE (UX). Fragment potentiellement utile pour sync future de 11 — ne pas merger tel quel (main 13 déjà plus avancé).
- Action : Extraire/diffuser en lot sync 11 (ou confirmer discard si sync volontairement reportée)
- Gate : GO extraction OU discard

### `projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md`
- Classe **C** (moyen)
- Seules métadonnées base/PR #214 ; main encore @ #213. Alignement cosmétique utile ou absorbable dans sync 11/12.
- Action : Lot sync 11/12 ou discard
- Gate : GO extraction OU discard

### `projects/sfia-studio/14-ux-ui-contract.md`
- Classe **D** (fort)
- Candidats pré-Figma (`ux-ui-contract-in-progress`, Figma pending, sans node IDs / Option B). Main a versions Option B clôturées validées (#215).
- Action : Discard — ne pas écraser main
- Gate : GO suppression locale

### `projects/sfia-studio/15-ux-ui-flows-and-screens.md`
- Classe **D** (fort)
- Candidats pré-Figma (`ux-ui-contract-in-progress`, Figma pending, sans node IDs / Option B). Main a versions Option B clôturées validées (#215).
- Action : Discard — ne pas écraser main
- Gate : GO suppression locale

### `projects/sfia-studio/16-ux-ui-decision-pack.md`
- Classe **D** (fort)
- Candidats pré-Figma (`ux-ui-contract-in-progress`, Figma pending, sans node IDs / Option B). Main a versions Option B clôturées validées (#215).
- Action : Discard — ne pas écraser main
- Gate : GO suppression locale

### `projects/campus360/README.md`
- Classe **B** (fort)
- README local `detailed-framing-in-progress` ; main encore pré-cadrage. Unique et cohérent avec 04–07.
- Action : Conserver dans branche dédiée Campus360
- Gate : GO branche/lot Campus360

### `projects/campus360/04-detailed-framing.md`
- Classe **B** (fort)
- Absent de main ; lot cadrage détaillé draft non validé Morris ; cohérent entre eux ; métadonnée branche `project/campus360-detailed-framing`.
- Action : Versionner lot autonome Campus360
- Gate : GO commit/PR Campus360 distinct

### `projects/campus360/05-mvp-increment-trajectory.md`
- Classe **B** (fort)
- Absent de main ; lot cadrage détaillé draft non validé Morris ; cohérent entre eux ; métadonnée branche `project/campus360-detailed-framing`.
- Action : Versionner lot autonome Campus360
- Gate : GO commit/PR Campus360 distinct

### `projects/campus360/06-governance-and-stakeholders.md`
- Classe **B** (fort)
- Absent de main ; lot cadrage détaillé draft non validé Morris ; cohérent entre eux ; métadonnée branche `project/campus360-detailed-framing`.
- Action : Versionner lot autonome Campus360
- Gate : GO commit/PR Campus360 distinct

### `projects/campus360/07-risks-dependencies-and-gates.md`
- Classe **B** (fort)
- Absent de main ; lot cadrage détaillé draft non validé Morris ; cohérent entre eux ; métadonnée branche `project/campus360-detailed-framing`.
- Action : Versionner lot autonome Campus360
- Gate : GO commit/PR Campus360 distinct

### `.sfia/mcp/logs/bridge-audit.jsonl`
- Classe **E** (fort)
- Logs runtime MCP locaux (audit). Non secrets évidents ; non baseline. node_modules .sfia déjà ignorés ; jsonl non ignorés = dette ignore.
- Action : Ne pas versionner ; suppression candidate + éventuel .gitignore futur (hors cycle)
- Gate : GO nettoyage .sfia

### `.sfia/mcp/logs/runner-audit.jsonl`
- Classe **E** (fort)
- Logs runtime MCP locaux (audit). Non secrets évidents ; non baseline. node_modules .sfia déjà ignorés ; jsonl non ignorés = dette ignore.
- Action : Ne pas versionner ; suppression candidate + éventuel .gitignore futur (hors cycle)
- Gate : GO nettoyage .sfia

### `sfia-review-handoff/sfia-review-handoff/latest-chatgpt-review.md`
- Classe **G** (fort)
- Pas une copie orpheline : worktree Git imbriqué `sfia/review-handoff` sous le principal. Apparaît ?? par nesting. Contenu = branche handoff active.
- Action : Ne PAS supprimer comme untracked ; traiter nesting worktree séparément
- Gate : GO hygiène worktree (déplacer hors principal?)

### `.tmp-sfia-review/_final_post_merge_sync.py`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/_gen_pd08_pack.py`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/build-pd-06a-chatgpt-review.sh`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/build-pd-07a-chatgpt-review.sh`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/classify-lot-e1-residuals.py`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/execute-lot-e1.py`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/generate-e2-identity-correction-pack.py`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/generate-e2-report.py`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/generate-e2-review-pack.py`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/generate-lot-e-closure-pack.py`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/generate-lot-f-review-pack.py`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/qualify-lot-e.py`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/validate-lot-e2.py`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/d1-manifest.json`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/d1-ref-files-edited.json`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/d2-manifest.json`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/d2-ref-files-edited.json`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/d3-manifest.json`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/d3-ref-files-edited.json`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/lot-0-archive-remaining-manifest.json`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/lot-a-manifest.md`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/lot-c-manifest.json`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/lot-d-manifest.json`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/lot-d-stats.json`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/lot-e-manifest.json`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/lot-e-stats.json`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/lot-f-manifest.json`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/global-capitalization-rename-references.md`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/pd-08-pr-readiness.diff`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/pd-08b-full.diff`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/pd-08b1-full.diff`
- Classe **E** (moyen)
- Artefact/script/manifest de cycles capitalisation/PD antérieurs ; reproductible ou déjà reflété dans Git méthode/docs.
- Action : Suppression candidate après GO (option archive locale)
- Gate : GO nettoyage .tmp

### `.tmp-sfia-review/lot-e1-execution-log.json`
- Classe **F** (moyen)
- Preuve/exécution lot E — archivage local optionnel avant purge.
- Action : Archiver hors repo puis supprimer, ou purge directe
- Gate : GO archive vs purge

### `.tmp-sfia-review/lot-e1-residual-classification.json`
- Classe **F** (moyen)
- Preuve/exécution lot E — archivage local optionnel avant purge.
- Action : Archiver hors repo puis supprimer, ou purge directe
- Gate : GO archive vs purge

### `.tmp-sfia-review/lot-e2-validation.json`
- Classe **F** (moyen)
- Preuve/exécution lot E — archivage local optionnel avant purge.
- Action : Archiver hors repo puis supprimer, ou purge directe
- Gate : GO archive vs purge

### `.tmp-sfia-review/chatgpt-review.md`
- Classe **E** (fort)
- Review pack local courant (sera remplacé par cet audit) ; non versionné par design.
- Action : Écrasement normal ; non commit projet
- Gate : —


---

## 5. Analyse SFIA Studio

### 5.1 Tracked modifiés
État local = **lancement UX documentaire** post-#214 (`ux-ui-contract-in-progress`, AF-CAND-11B VALIDÉE comme UX lancé, option/Figma ouverts).
`origin/main` = **UX Option B clôturée** (#215) + **architecture technique validée** (#216).

| Fichier | Verdict |
|---|---|
| 07, README, 13 | **D** — intermédiaire obsolète vs main |
| 11, 12 | **C** — petits deltas #214 / 11B encore absents de main 11/12 (main 11 dit encore NON DÉCIDÉE) |

### 5.2 Untracked 14/15/16 locaux
Pré-Figma / Figma pending / sans Option B / sans node IDs `19:2`… — **obsolètes** vs main Option B. Classe **D**.

Extrait local 14 (début) :
```markdown
# SFIA Studio — Contrat UX/UI

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `14-ux-ui-contract.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Critical |
| **Typologie** | DOC / UX — conception UX/UI fonctionnelle et visuelle |
| **Baseline méthode** | SFIA v2.6 (**Option C méthode** — D-VAL-6) |
| **Base Git** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
| **Branche UX proposée** | `project/sfia-studio-ux-ui` — **non créée** (GO Morris distinct requis) |
| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** @ `4f4e7cf…`) |
| **Statut** | `ux-ui-contract-in-progress` — contrat documentaire **préparé** ; validation visuelle Figma **pending** |
| **Autorité** | Morris (L0) |
| **AF-CAND-11A** | **VALIDÉE** — trajectoire recommandée UX/UI → tech → POC → MVP |
| **AF-CAND-11B** | **VALIDÉE** — Morris — prochain cycle = **UX/UI** |
| **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur candidat |
| **Figma** | MCP **disponible** ; fichier cible **absent** ; **aucune** modification distante |
| **D-VAL-12 / D-VAL-13** | **Aucune** |

> **Question UX centrale :** Comment permettre à Morris de piloter simplement un cycle SFIA, comprendre l’état réel du repository, examiner les preuves, prendre une décision explicite et déléguer une exécution bornée, **sans** créer une seconde vérité ni un GO implicite ?

> Ce document est un **contrat UX/UI documentaire**. Il ne constitue **pas** une validation visuelle forte. Aucun verdict READY visuel sans preuve Figma validée ou capture runtime ultérieure.

---

## 1. Périmètre et hors périmètre

| Couvre | Ne couvre pas |
|--------|---------------|
| Rôles, besoins, IA, parcours, écrans candidats | Code, composants techniques, stack |
| Contrat visuel documentaire (grille, états, sémantique) | Fichier Figma distant (sans GO) |
| Accessibilité WCAG 2.2 AA **cible** | Implémentation runtime |
| Gates, confirmations, anti-GO-implicite | Architecture technique / API / BDD |
| Options UX-A / UX-B / hybride **candidates** | Sélection définitive d’option (GO Morris) |
| Plan Figma proposé | Création / édition Figma distante |
| Séparation Studio / orchestrateur / Cursor | POC, MVP, DevOps, L5 |

---

## 2. Décisions consommées (non modifiées dans le fond)

| Décision | État |
|----------|------|
| AF-Option C | VALIDÉE — Studio = surface humaine ; orchestrateur déterministe **candidat** séparé |
| Cursor | Ex
```

Extrait local 15 (début) :
```markdown
# SFIA Studio — Parcours UX/UI, écrans et matrices

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `15-ux-ui-flows-and-screens.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Critical |
| **Base Git** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
| **Statut** | `ux-ui-contract-in-progress` |
| **Companion** | [`14-ux-ui-contract.md`](./14-ux-ui-contract.md) · [`16-ux-ui-decision-pack.md`](./16-ux-ui-decision-pack.md) |
| **Figma** | Aucune frame distante — inventaire documentaire |

> Inventaire **borné** et parcours **vérifiables**. Aucune option UX n’est sélectionnée ici. Priorités P0/P1/P2 = candidats à challenger, pas baseline figée.

---

## 1. Matrice de navigation (espaces → écrans)

| Espace | Écrans associés | Priorité |
|--------|-----------------|----------|
| Accueil / portefeuille | UX-S01 | P0 |
| Espace projet | UX-S02 | P0 |
| État Git | UX-S04 | P0 |
| Cycle actif | UX-S03 | P0 |
| Trajectoire | UX-S02 (section) / UX-S05 | P1 |
| Décisions / gates | UX-S05 · UX-S09 | P0 |
| Exécutions Cursor | UX-S06 · UX-S07 | P0 |
| Review / preuves | UX-S08 | P0 |
| Historique / audit | UX-S10 | P0 |
| Paramètres | UX-S11 | P2 |

---

## 2. Phase 3 — Parcours prioritaires (10)

### P-01 — Ouvrir un projet et comprendre son état

| Champ | Contenu |
|-------|---------|
| Préconditions | Repo accessible ; projet listé sous `projects/` |
| Déclencheur | Clic projet dans UX-S01 |
| Étapes | Ouvrir → charger README/`07` → afficher Git Truth Strip → montrer cycle / trajectoire / décisions ouvertes |
| Décisions humaines | Aucune obligatoire |
| Données lues | README, `07`, `git status`, `origin/main` |
| Données écrites | Aucune (ou préférence UI locale reconstructible) |
| Confirmation | Non |
| Erreurs | Projet absent ; Git fail |
| Stop | Base divergente non affichable |
| Résultat Git | Aucun changement ; observation vérifiable |

### P-02 — Sélectionner le prochain cycle

| Champ | Contenu |
|-------|---------|
| Préconditions | A
```

Extrait local 16 (début) :
```markdown
# SFIA Studio — Decision pack UX/UI

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `16-ux-ui-decision-pack.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Critical |
| **Base Git** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
| **Statut** | `ux-ui-contract-in-progress` |
| **AF-CAND-11B** | **VALIDÉE** — prochain cycle = UX/UI |
| **AF-CAND-11A** | **VALIDÉE** — trajectoire recommandée appliquée |
| **Sélection option UX** | **NON DÉCIDÉE** — candidates ci-dessous |
| **Figma distant** | **Aucune modification** |
| **D-VAL-12 / D-VAL-13** | **Aucune** |
| **Clôture architecture** | **NON PRONONCÉE** |

> Ce pack propose des **options et arbitrages candidats**. Aucune option UX n’est promue au rang de décision sans GO Morris explicite.

---

## 1. Décisions déjà actées (consommées)

| ID | Décision | État |
|----|----------|------|
| AF-Option C | Studio / orchestrateur séparés | VALIDÉE |
| AF-CAND-11A | Recommandation UX/UI puis tech puis POC puis MVP | VALIDÉE |
| AF-CAND-11B | Sélection prochain cycle = **UX/UI** | **VALIDÉE** (Morris — ce cycle) |
| Git vérité | Seule vérité durable | VALIDÉE |
| GO explicite | Borné, révocable, traçable | VALIDÉE |

---

## 2. Options UX (distinctes)

### Option UX-A — Cockpit dense orienté gouvernance

| Champ | Contenu |
|-------|---------|
| Structure | Dashboard dense : tables Git, gates, preuves en vue principale |
| Navigation | Latérale + strip Git permanent ; peu de wizards |
| Forces | Efficacité expert ; tout l’état critique visible ; aligné AF-Option C |
| Limites | Surcharge cognitive ; courbe d’apprentissage |
| Dette | Design system dense ; nombreux états à maintenir |
| Risques | UX-R05 surcharge ; erreurs de clic si densité mal gérée |
| Compatibilité AF-Option C | Forte — surface de pilotage explicite |
| Compatibilité Git vérité | Forte — Git Truth Strip central |
| Accessibilité | Possible AA si densité maîtrisée ; focus order critique |
| Impact POC | POC plus riche mais p
```

### 5.3 Diffs utiles vs HEAD (tracked)

#### 11-functional-architecture.md
```diff
diff --git a/projects/sfia-studio/11-functional-architecture.md b/projects/sfia-studio/11-functional-architecture.md
index adea160..75046c1 100644
--- a/projects/sfia-studio/11-functional-architecture.md
+++ b/projects/sfia-studio/11-functional-architecture.md
@@ -8,17 +8,17 @@
 | **Profil** | Critical |
 | **Typologie** | DOC — EVOL produit |
 | **Baseline** | SFIA v2.6 (**Option C méthode** validée — D-VAL-6) |
-| **Base Git** | `origin/main` @ `19302836b45d49f19698c624e99f2d68afa7b290` |
-| **Branche travail** | `project/sfia-studio-functional-architecture` (**conservée** @ `0b61d728…`) |
-| **Commit / merge** | head #211 `72cab80…` ; merge #211 `84e4863…` ; sync #212 `cb870544…` ; finalisation `0b61d728…` ; merge #213 `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **Base Git** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
+| **Branche travail** | `project/sfia-studio-functional-architecture` (**conservée** @ `4f4e7cf…`) |
+| **Commit / merge** | … finalisation `0b61d728…` ; merge #213 `19302836…` ; trace `4f4e7cf…` ; merge #214 `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **Statut** | `functional-architecture-post-merge-integrated` |
 | **Autorité** | Morris (L0) |
 | **Entrée** | Conception validée `08`–`10` (inchangée) |
 | **Architecture** | **VALIDÉE** et **INTÉGRÉE** sur `main` — **AF-Option C** VALIDÉE |
-| **Décisions** | AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; aucune D-VAL-12 ; acceptation #211 **VALIDÉE** |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** |
+| **Décisions** | AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **VALIDÉE** (UX/UI) ; aucune D-VAL-12 ; acceptation #211 **VALIDÉE** |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** ; [#214](https://github.com/mcleland147/sfia-workspace/pull/214) trace **MERGED** |
 
-> Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`) — **acceptée/régularisée** Morris 2026-07-18. Sync #212 + finalisation #213 **INTÉGRÉES** (`19302836…`). **Pas** d’architecture technique, stack, API, BDD, service, package, Figma, backlog, POC ou MVP. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode. Clôture formelle **non prononcée**.
+> Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** (PR #211) — **acceptée/régularisée** Morris 2026-07-18. Sync #212 + finalisation #213 + trace #214 **INTÉGRÉES** (`5f1eb908…`). **Pas** d’architecture technique. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode. Clôture formelle **non prononcée**.
 
 ---
 
@@ -370,4 +370,4 @@ Ces vues préparent un futur UX/UI **sans** maquette ni Figma.
 
 ---
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — clôture NON PRONONCÉE — AF-Option C VALIDÉE — AF-CAND-11B NON DÉCIDÉE — Critical — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211–#214) — AF-CAND-11B VALIDÉE (UX/UI) — clôture architecture NON PRONONCÉE — AF-Option C VALIDÉE — Critical — Morris décide.*

```

#### 12-functional-architecture-flows-and-boundaries.md
```diff
diff --git a/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md b/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
index 7e2ed7c..b1c86cb 100644
--- a/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
+++ b/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
@@ -5,8 +5,8 @@
 | **Document** | `12-functional-architecture-flows-and-boundaries.md` |
 | **Statut** | `functional-architecture-post-merge-integrated` |
 | **Cycle** | Architecture fonctionnelle — Critical |
-| **Base** | `19302836b45d49f19698c624e99f2d68afa7b290` |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** (`19302836…`) |
+| **Base** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** ; [#214](https://github.com/mcleland147/sfia-workspace/pull/214) trace **MERGED** (`5f1eb908…`) |
 | **Complète** | [11-functional-architecture.md](./11-functional-architecture.md) |
 
 > Flux **AF-*** candidats. Ne remplacent pas F1–F12 validés ; ils les **structurent** architecturalement.
@@ -389,4 +389,4 @@ Voir document 11 §§9–10 et BR-001…025. Gates séparés : commit, push, PR,
 
 ---
 
-*Flux architecture VALIDÉS et INTÉGRÉS (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — Morris décide AF-CAND-11B / clôture.*
+*Flux architecture VALIDÉS et INTÉGRÉS (#211) — sync #212 + finalisation #213 + trace #214 INTÉGRÉES (`5f1eb908…`) — Morris décide AF-CAND-11B / clôture.*

```

#### 13-functional-architecture-decision-pack.md
```diff
diff --git a/projects/sfia-studio/13-functional-architecture-decision-pack.md b/projects/sfia-studio/13-functional-architecture-decision-pack.md
index 5d14684..3fc1d23 100644
--- a/projects/sfia-studio/13-functional-architecture-decision-pack.md
+++ b/projects/sfia-studio/13-functional-architecture-decision-pack.md
@@ -6,7 +6,7 @@
 | **Statut** | `functional-architecture-post-merge-integrated` |
 | **Cycle** | 3 — Architecture fonctionnelle — sous-cycle amendements Morris |
 | **Profil** | Critical |
-| **Base / main** | `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **Base / main** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **Commit head PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
 | **Merge #211** | `84e48636bb78808774b51f67329167f8e9749a6b` |
 | **Acceptation #211** | **VALIDÉE** — Morris — 2026-07-18 (sans D-VAL-12) |
@@ -14,7 +14,9 @@
 | **Merge #212** | `cb87054423ed80905f633e86d907eee1709611b2` |
 | **Commit finalisation #213** | `0b61d72874a7075bdb174490dc9aa739e79e7024` |
 | **Merge #213** | `19302836b45d49f19698c624e99f2d68afa7b290` |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** |
+| **Commit trace #214** | `4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3` |
+| **Merge #214** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** ; [#214](https://github.com/mcleland147/sfia-workspace/pull/214) trace **MERGED** |
 | **Complète** | [11](./11-functional-architecture.md) · [12](./12-functional-architecture-flows-and-boundaries.md) |
 
 > **AF-CAND-*** = décisions locales au cycle d’architecture. **≠ D-VAL**. Aucune D-VAL-12.
@@ -142,7 +144,7 @@ Justification : préserve INV-12 / BR-019 / BR-025 ; évite fusion Studio/décid
 | AF-CAND-09 | Preuve / audit : journal ≠ preuve Git ≠ verdict ≠ décision | **VALIDÉE** | Observabilité | ≠ outil APM |
 | AF-CAND-10 | Option d’architecture = **AF-Option C** | **VALIDÉE** | Orientation | ≠ validation tech |
 | AF-CAND-11A | Trajectoire recommandée après architecture fonctionnelle (voir §6.1) | **VALIDÉE** (recommandation uniquement) | Oriente la séquence | Ne lance aucun cycle |
-| AF-CAND-11B | Sélection effective du prochain cycle | **NON DÉCIDÉE / À SÉLECTIONNER** | — | Nouveau GO Morris requis |
+| AF-CAND-11B | Sélection effective du prochain cycle | **VALIDÉE** — UX/UI | Morris — cycle 4 | Option UX / Figma / clôture arch. = GO distincts |
 | AF-CAND-12 | Aucune D-VAL-12 ; AF-CAND ≠ D-VAL | **VALIDÉE** | Gouvernance | — |
 
 ### 6.1 AF-CAND-11A — Trajectoire recommandée (VALIDÉE)
@@ -158,7 +160,7 @@ Après validation et intégration documentaire de l’architecture fonctionnelle
 
 **Effets :** oriente la séquence ; prépare le futur cycle UX/UI ; **ne lance** aucun cycle ; **ne valide** aucune architecture technique ; **ne définit** ni POC ni MVP.
 
-### 6.2 AF-CAND-11B — Sélection du prochain cycle (NON DÉCIDÉE)
+### 6.2 AF-CAND-11B — Sélection du prochain cycle (**VALIDÉE** — UX/UI)
 
 La sélection effective du prochain cycle reste une décision Morris **distincte**.
 
@@ -240,7 +242,7 @@ Voir document 12 §9 — couverture complète via AF-01…AF-15.
 | 11 | AF-12 |
 | 12 | FB-12, **AF-Option C** |
 | 13 | AF-06/10 |
-| 14 | AF-CAND-* ; AF-CAND-11B non décidée |
+| 14 | AF-CAND-* ; AF-CAND-11B VALIDÉE (UX/UI) ; option UX ouverte |
 
 ### AC-01…08 / RF-01…07
 
@@ -258,10 +260,10 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 **Réserves :** Pas de tech ; pas de D-VAL-12 ; Runtime candidat ; cycle suivant non sélectionné.
 **Questions Morris restantes :**
 1. Clôturez-vous formellement le cycle architecture ?
-2. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via 11A, ou autre ?
+2. Sélectionnez-vous l’option UX (A/B/H) et autorisez-vous Figma / branche UX (GO distincts) ?
 3. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
 4. Quel niveau d’architecture minimale avant POC ?
-5. Autorisez-vous une trace documentaire post-#213 éventuelle ?
+5. Autorisez-vous une trace documentaire post-#214 éventuelle ?
 
 ---
 
@@ -271,12 +273,13 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 |------|--------|
 | Validation AF-Option C | **FAIT** |
 | Validation AF-CAND-01…10, 11A, 12 | **FAIT** |
-| AF-CAND-11B sélection cycle | **OUVERT** |
+| AF-CAND-11B sélection cycle | **VALIDÉE** — UX/UI |
 | Versionnement architecture | **FAIT** |
 | Intégration PR #211 sur `main` | **FAIT Git** (`84e4863…`) |
 | Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 |
 | Sync post-merge PR #212 | **INTÉGRÉE** — `cb870544…` |
 | Finalisation post-merge PR #213 | **INTÉGRÉE** — `19302836…` |
+| Trace post-merge PR #214 | **INTÉGRÉE** — `5f1eb908…` |
 | Clôture formelle cycle architecture | **Non** — **non prononcée** |
 | Lancement UX/UI / tech / POC / MVP | **Non** |
 
@@ -290,7 +293,7 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 | FB-01…12 | Services créés |
 | AF-CAND-01…10, 11A, 12 | D-VAL-12 |
 | AF-CAND-11A (trajectoire) | Cycle suivant lancé |
-| AF-CAND-11B | Toujours **non décidée** |
+| AF-CAND-11B | **VALIDÉE** — UX/UI |
 
 ---
 
@@ -298,18 +301,18 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 
 **Recommandation (AF-CAND-11A VALIDÉE) :** UX/UI fonctionnelle et visuelle en premier, puis architecture technique, POC borné, MVP après retour POC.
 
-**Sélection (AF-CAND-11B) :** **NON DÉCIDÉE**. Aucun cycle lancé. Nouveau GO Morris requis.
+**Sélection (AF-CAND-11B) :** **VALIDÉE** — cycle UX/UI lancé. Option UX / Figma / clôture architecture = GO distincts.
 
 ---
 
 ## 12. Verdict
 
-**Architecture fonctionnelle VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-post-merge-integrated` — PR #211 **MERGED** (`84e4863…`) et **acceptée/régularisée** (Morris — 2026-07-18). Sync #212 **INTÉGRÉE** (`cb870544…`). Finalisation #213 **INTÉGRÉE** (`19302836…`).
+**Architecture fonctionnelle VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-post-merge-integrated` — PR #211 **MERGED** et **acceptée/régularisée**. Sync #212 **INTÉGRÉE**. Finalisation #213 **INTÉGRÉE** (`19302836…`). Trace #214 **INTÉGRÉE** (`5f1eb908…`).
 
 Validé : AF-Option C ; AF-CAND-01…10 ; AF-CAND-11A ; AF-CAND-12 ; acceptation #211.
-Non décidé : AF-CAND-11B ; clôture formelle.
+Non décidé : option UX ; Figma ; branche UX ; clôture formelle architecture.
 Aucune D-VAL-12. Baseline `08`–`10` intacte. Aucun cycle suivant lancé. Clôture formelle **non prononcée**.
 
 ---
 
-*Pack AF validé et intégré — Critical — sync #212 + finalisation #213 intégrées — Morris décide AF-CAND-11B / clôture.*
+*Pack AF validé et intégré — Critical — AF-CAND-11B VALIDÉE (UX/UI) — Morris décide option UX / Figma / clôture architecture.*

```

#### 07-product-trajectory-and-decision-pack.md
```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 6d25f39..f790a6a 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -7,12 +7,12 @@
 | **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
 | **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | `functional-architecture-post-merge-integrated` ; conception `functional-design-integrated` sur `main` ; cycle 2 **clôturé** |
-| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; acceptation #211 **VALIDÉE** |
+| **Statut** | `ux-ui-contract-in-progress` ; architecture `functional-architecture-post-merge-integrated` ; conception `functional-design-integrated` ; cycle 2 **clôturé** |
+| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; **AF-CAND-11B VALIDÉE** (UX/UI) ; acceptation #211 **VALIDÉE** ; option UX **non sélectionnée** |
 | **Destinataire** | Morris |
-| **Source de vérité** | Git `main` @ `19302836b45d49f19698c624e99f2d68afa7b290` — cadrage + conception + architecture + sync + finalisation **intégrés** |
+| **Source de vérité** | Git `main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` — cadrage + conception + architecture + sync + finalisation + trace **intégrés** |
 
-> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`). Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`). Finalisation documentaire **INTÉGRÉE** (PR #213 / `19302836…`). Acceptation/régularisation #211 **VALIDÉE** (Morris — 2026-07-18). Clôture formelle **non prononcée**. **Pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
+> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception + architecture **VALIDÉES** et **INTÉGRÉES**. Trace #214 **INTÉGRÉE** (`5f1eb908…`). **AF-CAND-11B VALIDÉE** — cycle 4 UX/UI **lancé** (contrat `14`–`16`). Clôture formelle architecture **non prononcée**. Option UX **non sélectionnée**. **Pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
 
 ---
 
@@ -36,18 +36,20 @@
 | Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-post-merge-integrated` |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
+| AF-CAND-11B | **VALIDÉE** — cycle UX/UI **lancé** |
 | D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
 | Versionnement architecture | Commit initial `2153258…` / head `72cab80…` / sync `33d61e3…` |
 | Intégration architecture sur `main` | **Réalisée** — PR #211 **MERGED** ; merge `84e4863…` |
 | Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
 | Sync post-merge (#212) | **INTÉGRÉE** — merge `cb870544…` |
 | Finalisation post-merge (#213) | **INTÉGRÉE** — merge `19302836…` ; commit `0b61d728…` |
+| Trace post-merge (#214) | **INTÉGRÉE** — merge `5f1eb908…` ; commit `4f4e7cf…` |
 | Clôture formelle cycle architecture | **NON PRONONCÉE** |
-| Prochain cycle après architecture | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (11A) |
-| Branches | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |
+| Cycle UX/UI après architecture | **LANCÉ** (AF-CAND-11B VALIDÉE ; AF-CAND-11A appliquée) — contrat `14`–`16` |
+| Option UX / Figma / branche UX | **OUVERTS** — non sélectionnés / non créés |
+| Branches | `functional-design` / `pre-framing` / `functional-architecture` **conservées** ; `project/sfia-studio-ux-ui` **non créée** |
 
-> Merges #207 / #209/#210 : historiques. Merge #211 (`84e4863…`) : architecture **intégrée** + acceptée/régularisée Morris 2026-07-18 (sans D-VAL-12 ; sans réécriture rétroactive). Merge #212 (`cb870544…`) : sync **intégrée**. Merge #213 (`19302836…`) : finalisation documentaire **intégrée** — ne prononce ni clôture formelle, ni AF-CAND-11B, ni suppression de branches.
+> Merges #211–#214 : architecture + sync + finalisation + trace **intégrées**. AF-CAND-11B **VALIDÉE** (UX/UI). Ne prononce ni clôture formelle architecture, ni option UX, ni Figma distant, ni suppression de branches.
 
 ### Trace factuelle — cycle 2 (conception fonctionnelle)
 
@@ -124,8 +126,8 @@ Pré-cadrage                         ← terminé historiquement
   → merge PR #207                   ← fait Git vérifié (ec21074) — régularisé D-VAL-11
   → synchronisation post-merge      ← **VALIDÉE** — cadrage documentaire clôturé
   → conception fonctionnelle        ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — **CLÔTURÉE**
-  → architecture fonctionnelle      ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — sync #212 **intégrée** (`cb870544…`) — finalisation #213 **intégrée** (`19302836…`) — clôture formelle **ouverte** — AF-CAND-11B **ouverte**
-  → UX/UI (recommandé AF-CAND-11A)  ← **non sélectionnée** (AF-CAND-11B)
+  → architecture fonctionnelle      ← **VALIDÉE** + **INTÉGRÉE** (#211–#214 / `5f1eb908…`) — clôture formelle **ouverte**
+  → UX/UI                          ← **LANCÉ** (AF-CAND-11B VALIDÉE ; AF-CAND-11A) — contrat `14`–`16`
   → architecture technique candidate
   → définition du POC
   → POC de faisabilité (lot multi-cycle)
@@ -149,8 +151,9 @@ Pré-cadrage                         ← terminé historiquement
 - Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`) — **acceptée/régularisée** Morris 2026-07-18.
 - Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`).
 - Finalisation documentaire **INTÉGRÉE** (PR #213 / `19302836…`).
+- Trace post-merge **INTÉGRÉE** (PR #214 / `5f1eb908…`).
 - **AF-CAND-11A** oriente UX/UI puis tech puis POC puis MVP — **sans lancer**.
-- **AF-CAND-11B** : sélection cycle suivant **NON DÉCIDÉE**.
+- **AF-CAND-11B** : **VALIDÉE** — cycle UX/UI lancé ; option UX / Figma **ouverts**.
 - Conception fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main`.
 - Clôture formelle architecture **non prononcée**.
 
@@ -188,21 +191,21 @@ Pré-cadrage                         ← terminé historiquement
 | Profil | Critical |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **NON DÉCIDÉE** |
+| AF-CAND-11B | **VALIDÉE** — UX/UI |
 | D10 | FB-11 → AF-01 / AF-15 → FR-024 / FR-025 |
 | Branche | `project/sfia-studio-functional-architecture` — **conservée** |
-| Commits / merges | head #211 `72cab80…` ; merge #211 `84e4863…` ; sync `33d61e3…` ; merge #212 `cb870544…` ; finalisation `0b61d728…` ; merge #213 `19302836…` |
-| Intégration | Architecture **Oui** (#211) ; sync **Oui** (#212) ; finalisation **Oui** (#213) |
+| Commits / merges | … finalisation `0b61d728…` ; merge #213 `19302836…` ; trace `4f4e7cf…` ; merge #214 `5f1eb908…` |
+| Intégration | Architecture **Oui** (#211) ; sync **Oui** (#212) ; finalisation **Oui** (#213) ; trace **Oui** (#214) |
 | Acceptation #211 | **VALIDÉE** Morris 2026-07-18 (sans D-VAL-12) |
-| Ne lance pas | Architecture technique ; UX/UI ; stack ; POC ; MVP ; code ; clôture auto ; AF-CAND-11B |
+| Ne lance pas | Architecture technique ; stack ; POC ; MVP ; code ; clôture auto architecture |
 
 ### 4.3 UX/UI
 
 | Champ | Contenu |
 |-------|---------|
-| Statut | **Recommandé** (AF-CAND-11A) — **non sélectionné** (AF-CAND-11B) |
-| Déclencheur | GO Morris sur AF-CAND-11B |
-| Pourquoi pas maintenant | Sélection cycle non décidée ; Figma non lancé |
+| Statut | **Lancé** (AF-CAND-11B VALIDÉE ; AF-CAND-11A) — option UX **ouverte** ; contrat `14`–`16` |
+| Déclencheur | GO Morris AF-CAND-11B reçu ; GO distincts pour option / Figma / branche |
+| Pourquoi Figma pending | Fichier cible absent ; aucun GO modification distante |
 
 ### 4.4 Architecture technique
 
@@ -235,8 +238,11 @@ Pré-cadrage                         ← terminé historiquement
 | D-NEXT-2i2 | Acceptation/régularisation documentaire #211 | Morris | **VALIDÉE** — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
 | D-NEXT-2i3 | Sync post-merge PR #212 | Observation Git | **MERGED** (`cb870544…`) — sync **intégrée** |
 | D-NEXT-2i4 | Finalisation post-merge PR #213 | Observation Git | **MERGED** (`19302836…`) — finalisation **intégrée** |
+| D-NEXT-2i5 | Trace post-merge PR #214 | Observation Git | **MERGED** (`5f1eb908…`) — trace **intégrée** |
 | D-NEXT-2j | Clôture formelle cycle architecture | Morris | **Non** — **non prononcée** |
-| D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **Non sélectionné** |
+| D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **VALIDÉE** — UX/UI lancé |
+| D-NEXT-2g1 | Sélection option UX (A/B/H) | Morris | **Non sélectionné** |
+| D-NEXT-2g2 | Branche UX / fichier Figma | Morris | **Non créés** — GO distinct |
 | D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
 | D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
 | D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception clôturée ; architecture fonctionnelle validée sur le fond ; suite **non sélectionnée** |
@@ -279,11 +285,11 @@ Pré-cadrage                         ← terminé historiquement
 
 **Conception fonctionnelle bornée** (Option 1 de séquencement post-cadrage) a été **sélectionnée, produite, VALIDÉE et INTÉGRÉE** (PR #209 / #210).
 
-**Architecture fonctionnelle Critical** : **VALIDÉE** et **INTÉGRÉE** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; PR #211 **MERGED** (`84e4863…`) et **acceptée/régularisée** (Morris — 2026-07-18). Sync #212 **INTÉGRÉE** (`cb870544…`). Finalisation #213 **INTÉGRÉE** (`19302836…`).
+**Architecture fonctionnelle Critical** : **VALIDÉE** et **INTÉGRÉE** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; PR #211 **MERGED** et **acceptée/régularisée**. Sync #212 **INTÉGRÉE**. Finalisation #213 **INTÉGRÉE** (`19302836…`). Trace #214 **INTÉGRÉE** (`5f1eb908…`).
 
 **AF-CAND-11A (VALIDÉE — recommandation) :** UX/UI → architecture technique → POC borné → MVP après retour POC.
 
-**AF-CAND-11B :** **NON DÉCIDÉE** — aucun cycle suivant lancé. Nouveau GO Morris requis.
+**AF-CAND-11B :** **VALIDÉE** — cycle 4 UX/UI **lancé**. Option UX / Figma / branche UX = **nouveaux GO**. Clôture architecture = **GO distinct**.
 
 Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n’est lancé ici. Clôture formelle architecture **non prononcée**.
 
@@ -301,18 +307,18 @@ Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** et **INTÉGRÉE** (`84e4863…`). Sync #212 + finalisation #213 : **INTÉGRÉES** (`19302836…`). Acceptation #211 : **VALIDÉE**. AF-CAND-11B : **non décidée**.
+Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** et **INTÉGRÉE**. Sync #212 + finalisation #213 + trace #214 : **INTÉGRÉES** (`5f1eb908…`). Acceptation #211 : **VALIDÉE**. AF-CAND-11B : **VALIDÉE** (UX/UI).
 
 ---
 
 ## 8. Questions Morris
 
-1. Clôturez-vous formellement le cycle architecture ?
-2. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via AF-CAND-11A, ou autre ?
-3. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
-4. Quel niveau d’architecture minimale avant POC ?
-5. Quelles priorités NFR avant le POC ?
-6. Autorisez-vous une trace documentaire post-#213 éventuelle (commit/push/PR) ?
+1. Sélectionnez-vous l’option UX **A**, **B** ou **H** ?
+2. Validez-vous les frames 1440×1024 et 1280×832 ?
+3. Autorisez-vous branche `project/sfia-studio-ux-ui` et/ou fichier Figma ?
+4. Clôturez-vous formellement le cycle architecture (décision **distincte**) ?
+5. Quel sort pour les branches architecture / conception / pré-cadrage ?
+6. Autorisez-vous le versionnement du contrat UX (+ sync post-#214) ?
 
 ---
 
@@ -332,10 +338,11 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
 | Sync post-merge | **INTÉGRÉE** — `cb870544…` / PR #212 |
 | Finalisation post-merge | **INTÉGRÉE** — `19302836…` / PR #213 |
+| Trace post-merge | **INTÉGRÉE** — `5f1eb908…` / PR #214 |
 | Acceptation #211 | **VALIDÉE** — 2026-07-18 |
 | AF-Option C | **VALIDÉE** |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **NON DÉCIDÉE** |
+| AF-CAND-11B | **VALIDÉE** — UX/UI |
 | Prochain cycle après architecture | **Non sélectionné** |
 
 ---
@@ -354,13 +361,14 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
 | Sync post-merge | **INTÉGRÉE** — `cb870544…` |
 | Finalisation #213 | **INTÉGRÉE** — `19302836…` |
+| Trace #214 | **INTÉGRÉE** — `5f1eb908…` |
 | Acceptation #211 | **VALIDÉE** |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
-| AF-CAND-11B | **NON DÉCIDÉE** |
+| AF-CAND-11B | **VALIDÉE** — UX/UI |
 | Ready for POC / MVP / tech | **Non** |
-| Ready for Morris #213 post-merge review | **Oui** (trace locale) |
+| Ready for Morris UX/UI contract review | **Oui** (documentaire ; Figma pending) |
 
-**Verdict :** `SFIA STUDIO PR #213 POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`
+**Verdict :** `SFIA STUDIO UX/UI DOCUMENTARY CONTRACT READY — VISUAL VALIDATION PENDING`
 
 ---
 
@@ -377,5 +385,8 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | [11-functional-architecture.md](./11-functional-architecture.md) | Architecture — **VALIDÉE** et **INTÉGRÉE** |
 | [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux / frontières — D10 → AF-01 / AF-15 |
 | [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND |
+| [14-ux-ui-contract.md](./14-ux-ui-contract.md) | UX/UI — contrat |
+| [15-ux-ui-flows-and-screens.md](./15-ux-ui-flows-and-screens.md) | UX/UI — parcours / écrans |
+| [16-ux-ui-decision-pack.md](./16-ux-ui-decision-pack.md) | UX/UI — decision pack |
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — clôture NON PRONONCÉE — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211–#214) — cycle 4 UX/UI LANCÉ (AF-CAND-11B) — option UX / Figma OUVERTS — clôture architecture NON PRONONCÉE — Morris décide.*

```

#### README.md (Studio)
```diff
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 1264b2f..0313a61 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,14 +4,15 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `functional-architecture-post-merge-integrated` — Architecture **VALIDÉE** et **INTÉGRÉE** ; sync post-merge **intégrée** (#212) ; finalisation documentaire **intégrée** (#213) ; clôture formelle **non prononcée** |
+| **Statut** | `ux-ui-contract-in-progress` — Cycle 4 UX/UI **lancé** (AF-CAND-11B) ; architecture **VALIDÉE** + **INTÉGRÉE** ; clôture formelle architecture **non prononcée** |
 | **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — post-merge #213 (DOC, Critical) — trace locale |
-| **Typologie cycle** | DOC — post-merge / intégration finale |
-| **Cycle projet** | 3 — Architecture (**VALIDÉE** + **INTÉGRÉE**) ; sync + finalisation **intégrées** ; clôture formelle **ouverte** |
+| **Exécuteur** | Cursor — cycle 4 UX/UI (DOC/UX, Critical) — contrat documentaire local |
+| **Typologie cycle** | DOC / UX — conception UX/UI fonctionnelle et visuelle |
+| **Cycle projet** | 4 — UX/UI (**en cours**) ; cycle 3 architecture **intégrée** ; clôture formelle architecture **ouverte** |
 | **Profil SFIA** | Critical |
-| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** @ `0b61d728…`) |
+| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** @ `4f4e7cf…`) |
+| **Branche UX proposée** | `project/sfia-studio-ux-ui` — **non créée** (GO Morris distinct) |
 | **Commit architecture initial** | `215325858ed493564f6083ec5adc1618008593f6` |
 | **Head final PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
 | **PR architecture** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
@@ -23,18 +24,22 @@
 | **PR finalisation post-merge** | [#213](https://github.com/mcleland147/sfia-workspace/pull/213) — **MERGED** |
 | **Commit finalisation** | `0b61d72874a7075bdb174490dc9aa739e79e7024` |
 | **Merge finalisation** | `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **PR trace post-merge** | [#214](https://github.com/mcleland147/sfia-workspace/pull/214) — **MERGED** |
+| **Commit trace** | `4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3` |
+| **Merge trace** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée à `main`) |
 | **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
 | **Chemin** | `projects/sfia-studio/` |
-| **Base canonique** | `origin/main` @ `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **Base canonique** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
 | **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
 | **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
 | **AF-CAND-01…10, 11A, 12** | **VALIDÉES** — ≠ D-VAL |
-| **AF-CAND-11B** | **NON DÉCIDÉE** — sélection du prochain cycle |
+| **AF-CAND-11B** | **VALIDÉE** — Morris — prochain cycle = **UX/UI** |
 | **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
 | **Architecture fonctionnelle** | **VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`) |
-| **Prochain cycle** | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (AF-CAND-11A) |
+| **Cycle UX/UI** | **Lancé** — contrat `14`–`16` ; option UX **non sélectionnée** ; Figma **pending** |
+| **Prochain après UX** | Non sélectionné (tech / POC / MVP — nouveaux GO) |
 
 ---
 
@@ -54,21 +59,22 @@
 | Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-post-merge-integrated` |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
+| AF-CAND-11B | **VALIDÉE** — cycle UX/UI **lancé** |
 | D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
 | Versionnement architecture | Commit initial `2153258…` / head `72cab80…` / sync `33d61e3…` |
 | Intégration architecture sur `main` | **Réalisée** — PR #211 **MERGED** ; merge `84e4863…` |
 | Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
 | Sync post-merge (#212) | **INTÉGRÉE** — merge `cb870544…` ; commit `33d61e3…` |
 | Finalisation post-merge (#213) | **INTÉGRÉE** — merge `19302836…` ; commit `0b61d728…` |
+| Trace post-merge (#214) | **INTÉGRÉE** — merge `5f1eb908…` ; commit `4f4e7cf…` |
 | Intégration conception sur `main` | **Réalisée** via PR #209 / sync #210 → `e9d8193…` |
 | Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 (sync post-merge) |
 | Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 |
 | Clôture formelle cycle architecture | **NON PRONONCÉE** |
-| Prochain cycle | **Non sélectionné** (AF-CAND-11B) |
-| Branches | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |
+| Cycle UX/UI (AF-CAND-11B) | **LANCÉ** — contrat documentaire `14`–`16` ; option UX / Figma **ouverts** |
+| Branches | `functional-design`, `pre-framing`, `functional-architecture` **conservées** ; UX `project/sfia-studio-ux-ui` **non créée** |
 
-> PR #207 / #209 : historiques. PR #211 : architecture **intégrée** (`84e4863…`) — **fait Git** + acceptée/régularisée Morris 2026-07-18 (sans D-VAL-12 ; sans réécriture rétroactive). PR #212 : sync post-merge **intégrée** (`cb870544…`). PR #213 : finalisation documentaire **intégrée** (`19302836…`). Cette intégration ne prononce ni la clôture formelle du cycle d’architecture fonctionnelle, ni la sélection d’AF-CAND-11B, ni la suppression des branches conservées.
+> PR #207 / #209 : historiques. PR #211–#214 : architecture + sync + finalisation + trace **intégrées** (`5f1eb908…`). AF-CAND-11B **VALIDÉE** (UX/UI). Cette sélection ne prononce ni la clôture formelle du cycle d’architecture, ni une option UX, ni la création Figma/branche, ni la suppression des branches conservées.
 
 ---
 
@@ -140,12 +146,13 @@ Pré-cadrage                    ← terminé historiquement
   → merge PR #207              ← fait Git vérifié (ec21074) — régularisé par D-VAL-11
   → synchronisation post-merge ← **VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé
   → conception fonctionnelle   ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — cycle **CLÔTURÉ**
-  → architecture fonctionnelle ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — sync #212 **intégrée** (`cb870544…`) — finalisation #213 **intégrée** (`19302836…`) — clôture formelle **ouverte** — AF-CAND-11B **ouverte**
-  → UX/UI (recommandé AF-CAND-11A) / architecture technique / POC ← **non sélectionnés** (AF-CAND-11B)
-  → MVP → delivery → industrialisation plateforme
+  → architecture fonctionnelle ← **VALIDÉE** + **INTÉGRÉE** (#211–#214 / `5f1eb908…`) — clôture formelle **ouverte**
+  → UX/UI ← **LANCÉ** (AF-CAND-11B VALIDÉE ; trajectoire AF-CAND-11A) — contrat `14`–`16` ; option / Figma **ouverts**
+  → architecture technique / POC / MVP ← **non lancés**
+  → delivery → industrialisation plateforme
 ```
 
-Aucune stack / architecture **technique** validée. Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE** sur `main` (AF-Option C ; AF-CAND-01…10, 11A, 12). Cycle suivant **non sélectionné**. POC / MVP non lancés. Clôture formelle architecture **non automatique**.
+Aucune stack / architecture **technique** validée. Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE**. Cycle 4 UX/UI **en cours** (documentaire). POC / MVP non lancés. Clôture formelle architecture **non automatique**.
 
 ---
 
@@ -189,7 +196,17 @@ Aucune stack / architecture **technique** validée. Architecture **fonctionnelle
 | [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF-01…15 et frontières (D10 → AF-01 / AF-15) |
 | [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option A/B/C ; AF-CAND |
 
-> Statut `functional-architecture-post-merge-integrated`. **AF-Option C VALIDÉE** (≠ Option C méthode). AF-CAND-01…10, 11A, 12 **VALIDÉES**. AF-CAND-11B **NON DÉCIDÉE**. Aucune D-VAL-12. PR #211 **MERGED** + acceptée. PR #212 **MERGED**. PR #213 **MERGED** — finalisation sur `main` (`19302836…`). Clôture formelle **non prononcée**.
+> Statut architecture `functional-architecture-post-merge-integrated` (historique d’intégration). **AF-Option C VALIDÉE**. AF-CAND-01…10, 11A, 12 **VALIDÉES**. AF-CAND-11B **VALIDÉE** (UX/UI). Aucune D-VAL-12. PR #211–#214 **MERGED**. Clôture formelle architecture **non prononcée**.
+
+### UX/UI — en cours (cycle 4)
+
+| Document | Rôle |
+|----------|------|
+| [14-ux-ui-contract.md](./14-ux-ui-contract.md) | Principes, IA, contrat visuel, accessibilité, plan Figma |
+| [15-ux-ui-flows-and-screens.md](./15-ux-ui-flows-and-screens.md) | Parcours, écrans, matrices |
+| [16-ux-ui-decision-pack.md](./16-ux-ui-decision-pack.md) | Options UX-A/B/H, UX-CAND, questions Morris |
+
+> Statut `ux-ui-contract-in-progress`. Option UX **non sélectionnée**. Figma distant **non modifié**. Branche UX **non créée**. Aucun verdict visuel fort.
 
 ---
 
@@ -201,6 +218,8 @@ Le cycle 2 (conception fonctionnelle / finalisation) est en profil **Critical**
 
 Le cycle d’architecture fonctionnelle est en profil **Critical** : responsabilités Morris/GPT/Cursor/Git/orchestrateur candidat ; gates et preuves ; frontières empêchant une seconde vérité ou une architecture technique implicite.
 
+Le cycle 4 UX/UI est en profil **Critical** : plateforme métier ; visibilité des gates/preuves ; Git comme vérité ; séparation Studio/orchestrateur ; anti-GO-implicite ; accessibilité/sécurité/RGPD dès le contrat ; aucun verdict visuel fort sans Figma/runtime.
+
 ---
 
 ## 5. Principes de gouvernance
@@ -274,7 +293,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | AF-Option C (Studio / orchestrateur séparés) | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10 | **VALIDÉES** |
 | AF-CAND-11A (trajectoire recommandée) | **VALIDÉE** (recommandation uniquement) |
-| AF-CAND-11B (sélection prochain cycle) | **NON DÉCIDÉE** |
+| AF-CAND-11B (sélection prochain cycle) | **VALIDÉE** — UX/UI |
 | AF-CAND-12 (pas de D-VAL-12) | **VALIDÉE** |
 | D10 → AF-01 / AF-15 | **VALIDÉE** (amendement traçabilité) |
 
@@ -282,24 +301,28 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 | Décision | Statut |
 |----------|--------|
-| AF-CAND-11B — sélection / lancement prochain cycle | **NON DÉCIDÉE** — UX/UI recommandé via 11A |
+| AF-CAND-11B — sélection / lancement prochain cycle | **VALIDÉE** — UX/UI lancé |
+| Option UX (A/B/H) | **NON SÉLECTIONNÉE** |
+| Figma / branche UX | **OUVERTS** — non créés |
 | Acceptation / régularisation documentaire du merge #211 | **Ouverte** — fait Git tracé ; pas de D-VAL auto |
-| Commit / push / PR sync (#212) + finalisation (#213) | **Réalisés et intégrés** — trace post-#213 locale éventuelle **non versionnée** ici |
+| Commit / push / PR sync (#212) + finalisation (#213) + trace (#214) | **Réalisés et intégrés** — trace post-#214 éventuelle **non versionnée** ici |
 | Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches | Conservées ; décisions distinctes |
 | Contenu POC / définition MVP | Non pris |
 | Stack / architecture technique | Non pris |
 
-> Conception : intégrée (PR #209 / #210). Architecture : **intégrée** (PR #211 / `84e4863…`) — acceptée/régularisée Morris 2026-07-18. Sync #212 + finalisation #213 : **intégrées** (`cb870544…` / `19302836…`). Aucune réinterprétation rétroactive ; aucune D-VAL-12.
+> Conception : intégrée (PR #209 / #210). Architecture : **intégrée** (PR #211) — acceptée/régularisée. Sync #212 + finalisation #213 + trace #214 : **intégrées** (`5f1eb908…`). Aucune réinterprétation rétroactive ; aucune D-VAL-12.
 
 ---
 
 ## 8. Prochaine décision
 
-1. Revue ChatGPT du handoff **post-merge #213**.
-2. Clôture formelle du cycle architecture (**non prononcée**).
-3. **AF-CAND-11B** — sélection du prochain cycle (**non décidée** ; UX/UI recommandé).
-4. Sort des branches (`pre-framing` / `functional-design` / `functional-architecture`).
+1. Revue ChatGPT du handoff **cycle 4 UX/UI**.
+2. Sélection option UX (A / B / H) et frames 1440×1024 / 1280×832.
+3. GO branche `project/sfia-studio-ux-ui` et/ou fichier Figma (distincts).
+4. Clôture formelle du cycle architecture (**non prononcée** — distincte).
+5. Sort des branches (`pre-framing` / `functional-design` / `functional-architecture`).
+6. Versionnement docs UX (+ sync post-#214 éventuelle).
 5. Sort des branches (décisions distinctes — suppression interdite ici).
 
 **Verdict documentaire :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`
@@ -316,12 +339,13 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Conception fonctionnelle validée | **`08`–`10`** sur **`main`** — baseline **inchangée** |
 | Architecture fonctionnelle validée + intégrée | **`11`–`13`** sur **`main`** (`84e4863…` / PR #211) |
 | Sync post-merge intégrée | PR #212 / `cb870544…` |
-| Finalisation post-merge intégrée | PR #213 / `19302836…` — statut `functional-architecture-post-merge-integrated` |
+| Finalisation post-merge intégrée | PR #213 / `19302836…` |
+| Trace post-merge intégrée | PR #214 / `5f1eb908…` — statut `functional-architecture-post-merge-integrated` |
 | Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
 | Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
 
-> `main` @ `19302836…` est la source de vérité du **cadrage**, de la **conception**, de l’**architecture**, de la **sync post-merge** et de la **finalisation documentaire** intégrées. Toute trace post-#213 éventuelle = **locale** jusqu’à GO versionnement.
+> `main` @ `5f1eb908…` est la source de vérité du **cadrage**, de la **conception**, de l’**architecture**, de la **sync**, de la **finalisation** et de la **trace post-merge** intégrées. Toute trace post-#214 éventuelle = **locale** jusqu’à GO versionnement.
 
 ---
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — clôture NON PRONONCÉE — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211–#214) — cycle 4 UX/UI LANCÉ (AF-CAND-11B) — option UX / Figma OUVERTS — clôture architecture NON PRONONCÉE — Option C méthode préservée — Morris décide.*

```

---

## 6. Analyse Campus360

Sur main : uniquement `01`–`03` + README pré-cadrage.
Local : README modifié + `04`–`07` untracked — lot **cadrage détaillé** draft (`detailed-framing-in-progress`), non validé Morris, cohérent, métadonnée branche `project/campus360-detailed-framing` (branche locale existe, remote opportunity-framing seulement pour l’historique).

**À ne pas supprimer :** 04–07 + README local.

### Diff README vs HEAD
```diff
diff --git a/projects/campus360/README.md b/projects/campus360/README.md
index c924aed..66597b5 100644
--- a/projects/campus360/README.md
+++ b/projects/campus360/README.md
@@ -4,15 +4,16 @@
 |------------|--------|
 | **Identité** | Campus360 — plateforme fictive nationale de gestion de campus et de services |
 | **Nom** | **Campus360** — **validé Morris (G4)** — 17 juillet 2026 |
-| **Statut** | `pre-framing-closed` / `awaiting-pr-readiness` |
+| **Statut** | `detailed-framing-in-progress` |
 | **Baseline méthode** | **SFIA v2.6** (baseline opérationnelle officielle) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — clôture pré-cadrage (Cycle 1) |
+| **Exécuteur** | Cursor — Cycle 1 cadrage détaillé (DOC, Critical) |
 | **Typologie cycle** | DOC |
-| **Cycle projet** | 1 — Cadrage (sous-angle : formalisation finale G2/G3, clôture pré-cadrage, préparation PR readiness) |
+| **Cycle projet** | 1 — Cadrage (sous-angle : **cadrage détaillé**) |
 | **Profil SFIA** | Critical |
-| **Branche** | `project/campus360-opportunity-framing` |
+| **Branche** | `project/campus360-detailed-framing` |
 | **Chemin** | `projects/campus360/` |
+| **Pré-cadrage** | **Mergé** via PR #206 (`ec7f397`) |
 
 ---
 
@@ -34,24 +35,33 @@ Cible produit validée (G2 — **VALIDÉ AVEC RÉSERVE**) :
 > Le périmètre MVP final reste **intégralement maintenu**.
 > Sa réalisation devra être **découpée en incréments proportionnés**, chacun assorti de **critères de sortie intermédiaires**, **sans réduction implicite** de la cible MVP finale.
 
-Cette réserve est une règle de **trajectoire et de delivery**. Elle **ne rouvre pas** le périmètre G2.
+**Campus360 n’est pas un véhicule de promotion SFIA 3.0.**
 
-**Campus360 n’est pas un véhicule de promotion SFIA 3.0.** Il applique SFIA v2.6 telle qu’officialisée.
-
-**Distinction critique :** la cible **fonctionnelle** nationale multi-campus **n’implique aucune** architecture technique distribuée, multi-région, stack ou fournisseur d’identité réel décidés à ce stade.
+**Distinction critique :** national multi-campus = cible **fonctionnelle** — **aucune** architecture distribuée, multi-région, stack ou IdP réel décidé à ce stade.
 
 ---
 
-## 2. Documents du socle de pré-cadrage
+## 2. Navigation documentaire
+
+### Pré-cadrage (mergé PR #206)
+
+| Document | Rôle |
+|----------|------|
+| [README.md](./README.md) | Identité, statut, navigation |
+| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité, vision, populations, domaines |
+| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Hypothèse couverture 15 cycles |
+| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack de clôture pré-cadrage |
+
+### Cadrage détaillé (en cours — draft)
 
 | Document | Rôle |
 |----------|------|
-| [README.md](./README.md) | Identité, statut, gates, navigation, règles de séparation |
-| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité, vision, populations, domaines, risques |
-| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Hypothèse de couverture des 15 cycles + transverses |
-| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack de clôture — décisions Morris & gates |
+| [04-detailed-framing.md](./04-detailed-framing.md) | Cadrage détaillé produit / périmètre / contraintes |
+| [05-mvp-increment-trajectory.md](./05-mvp-increment-trajectory.md) | Trajectoire incrémentale (réserve G2) |
+| [06-governance-and-stakeholders.md](./06-governance-and-stakeholders.md) | Gouvernance et parties prenantes |
+| [07-risks-dependencies-and-gates.md](./07-risks-dependencies-and-gates.md) | Risques, dépendances, gates DF proposés |
 
-Aucun autre document projet n’est créé dans cette itération. **Aucun document de cadrage détaillé.**
+> **Cadrage détaillé ≠ conception / architecture / backlog / UX / code.**
 
 ---
 
@@ -59,30 +69,24 @@ Aucun autre document projet n’est créé dans cette itération. **Aucun docume
 
 | Élément | État |
 |---------|------|
-| Pré-cadrage / opportunité | **CLÔTURÉ** |
-| Cadrage détaillé | **Autorisé (G3)** — **non démarré** |
-| Conception / architecture / UX / delivery | Hors périmètre de cette exécution |
-| Commit branche projet (G5) | **Autorisé / exécuté** dans cette exécution |
-| Push branche projet (G6) | **Autorisé / exécuté** dans cette exécution |
-| Création PR (G7) | **EN ATTENTE** — cycle **13 — PR readiness** |
-
-> **Règle G3 :** le cadrage détaillé est **autorisé** mais **ne démarre** qu’après clôture du pré-cadrage, commit conforme, push de la branche, cycle PR readiness, création et traitement de la PR, puis décision de suite. **Cette exécution ne démarre pas le cadrage détaillé.**
+| Pré-cadrage | **CLÔTURÉ** — mergé PR #206 |
+| G3 | **VALIDÉ** — cadrage détaillé **démarré** par décision Morris `GO — DETAILED FRAMING CAMPUS360` |
+| Cadrage détaillé | **`detailed-framing-in-progress`** — draft local, **non commité** |
+| Conception / architecture / backlog / delivery | **Non démarrés** |
+| Commit / push / PR (cette branche) | **Interdits** sans nouveau GO Morris |
 
 ---
 
-## 4. Statut des gates Morris
-
-| Gate | Objet | Statut |
-|------|-------|--------|
-| **G1** | Campus360 comme projet étalon | **VALIDÉ** — 17 juillet 2026 |
-| **G2** | Périmètre MVP | **VALIDÉ AVEC RÉSERVE** — 17 juillet 2026 |
-| **G3** | Passage au cadrage détaillé | **VALIDÉ** — 17 juillet 2026 *(démarrage différé — voir §3)* |
-| **G4** | Nom Campus360 | **VALIDÉ** — 17 juillet 2026 |
-| **G5** | Commit branche projet | **EXÉCUTÉ** *(cette exécution)* |
-| **G6** | Push branche projet | **EXÉCUTÉ** *(cette exécution)* |
-| **G7** | Création PR | **EN ATTENTE** — cycle **PR readiness** |
+## 4. Statut des gates (rappel)
 
-Détail : voir [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md).
+| Gate | Statut |
+|------|--------|
+| G1 | **VALIDÉ** |
+| G2 | **VALIDÉ AVEC RÉSERVE** |
+| G3 | **VALIDÉ** — cadrage détaillé démarré |
+| G4 | **VALIDÉ** |
+| G5–G7 (pré-cadrage) | **EXÉCUTÉS** (PR #206 mergée) |
+| Gates DF-G* | **Proposés** — voir `07-…` — non validés |
 
 ---
 
@@ -90,29 +94,25 @@ Détail : voir [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.
 
 | Volet | Contenu retenu |
 |-------|----------------|
-| **Échelle** | National multi-campus dès la première cible ; admin nationale et locale ; données rattachées à un campus ; pilotage consolidé national |
-| **Fonctionnel** | Identité / rôles / habilitations ; catalogue ; réservation d’espaces ; notifications simples ; pilotage local et national ; exceptions ; intégration identité structurante |
+| **Échelle** | National multi-campus ; admin nationale et locale |
+| **Fonctionnel** | Identité / rôles ; catalogue ; réservation ; notifications ; pilotage local/national ; exceptions ; identité structurante |
 | **Populations (5)** | Étudiant ; personnel ; gestionnaire de campus ; administrateur national ; support / RUN |
-| **Support / RUN** | Borné — **pas** d’ITSM / CMDB / centre de support avancé |
-| **Identité** | Contrat + fournisseur **fictif** + simulation **complète** — **aucune** connexion réelle |
-| **RGPD** | Majeurs uniquement ; données minimales ; pas de DPIA dans ce cycle |
-| **Sortie MVP** | Fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN readiness |
-| **Réserve** | Incréments proportionnés + critères intermédiaires — **cible MVP finale inchangée** |
+| **Support / RUN** | Borné — pas d’ITSM / CMDB |
+| **Identité** | Fournisseur fictif + simulation complète — aucune connexion réelle |
+| **RGPD** | Majeurs ; données minimales |
+| **Sortie MVP** | Fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN |
+| **Réserve** | Incréments proportionnés — cible finale inchangée |
 
 ---
 
-## 6. Hors périmètre (cette exécution)
+## 6. Hors périmètre (cadrage détaillé)
 
-- Contenu de cadrage détaillé (malgré G3 validé — démarrage différé)
-- Code, stack, architecture technique détaillée
-- Backlog, user stories, UX/UI, Figma
-- Fournisseur d’identité réel
-- Logement, paiement réel, restauration complète, IoT
-- ITSM / CMDB / centre de support avancé
-- DPIA complète
-- Architecture distribuée / multi-région technique
+- Conception fonctionnelle détaillée, architecture, backlog, user stories
+- UX/UI, Figma, wireframes
+- Code, stack, IdP réel
+- DPIA complète, threat model complet, runbooks complets
+- Commit / push / PR / merge de `project/campus360-detailed-framing`
 - Modification SFIA / SFIA 3.0
-- Création de PR / merge (G7)
 
 ---
 
@@ -120,26 +120,28 @@ Détail : voir [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.
 
 | Niveau | Source |
 |--------|--------|
-| **Méthode** | Git `main` — documents SFIA v2.6 canoniques |
-| **Décisions structurantes** | Morris (G1–G7) |
-| **Projet Campus360** | Documents versionnés sous `projects/campus360/` |
+| **Méthode** | Git `main` — SFIA v2.6 |
+| **Décisions structurantes** | Morris |
+| **Projet** | `projects/campus360/` (pré-cadrage sur `main` ; cadrage détaillé en draft branche locale) |
 
 ---
 
-## 8. Règle de séparation projet / méthode / capitalisation
+## 8. Séparation projet / méthode / capitalisation
 
-| Couche | Contenu autorisé | Contenu interdit |
-|--------|------------------|------------------|
-| **Projet produit** | Vision, périmètre G2, hypothèses, trajectoire Campus360 | Modification des documents SFIA canoniques |
-| **Actifs réutilisables** | Patterns observés *ultérieurement* | Promotion implicite en standard méthode |
-| **Observations méthodologiques** | Limites, frictions (REX projet) | Doctrine SFIA nouvelle |
-| **Capitalisation SFIA** | Cycle CAPA dédié + GO Morris | Relancer SFIA 3.0 via Campus360 |
-
-> Un apprentissage issu de Campus360 ne devient standard SFIA que via un **cycle de capitalisation** explicite, avec gate Morris.
+| Couche | Autorisé | Interdit |
+|--------|----------|----------|
+| Projet | Cadrage Campus360 | Modifier SFIA canonique |
+| Observations | REX / handoff | Doctrine implicite |
+| Capitalisation SFIA | Cycle CAPA + GO Morris | SFIA 3.0 via Campus360 |
 
 ---
 
-## 9. Prochaine étape
+## 9. Décision suivante
+
+**Revue Morris du cadrage détaillé** (docs `04`–`07` + handoff) :
 
-Cycle **13 — PR readiness** (G7), puis décision de suite après traitement de la PR.
-Le **cadrage détaillé** (toujours Cycle 1) ne démarre qu’après cette chaîne.
+- valider le fond ;
+- valider ou amender la trajectoire incrémentale ;
+- valider ou amender les gates DF ;
+- décider commit/push/PR ;
+- désigner le prochain cycle (recommandation : conception fonctionnelle).

```

### Contenu complet 04
```markdown
# Campus360 — Cadrage détaillé

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 |
| **Document** | `04-detailed-framing.md` |
| **Cycle** | 1 — Cadrage (sous-angle : cadrage détaillé) |
| **Profil** | Critical |
| **Typologie** | DOC |
| **Baseline** | SFIA v2.6 |
| **Branche** | `project/campus360-detailed-framing` |
| **Autorité** | Morris (L0) |
| **Statut** | `draft` — revue Morris requise |
| **Pré-cadrage** | Mergé PR #206 — `ec7f397` |

> Ce document **cadre** le produit et sa trajectoire. Il **ne** conçoit **pas** la solution, **ne** choisit **pas** d’architecture, **ne** produit **pas** de backlog.

---

## 1. Résumé exécutif

Campus360 est le projet étalon SFIA v2.6 (G1), nommé officiellement (G4), au périmètre MVP national multi-campus validé avec réserve incrémentale (G2). Le cadrage détaillé est démarré par décision Morris (`GO — DETAILED FRAMING CAMPUS360`) après merge de la PR #206.

Ce cadrage transforme le pré-cadrage en cadre exploitable : objectifs, périmètre, populations, capacités, contraintes transverses, principes de découpage, critères de succès, et décisions encore dues à Morris.

**Verdict documentaire proposé :** `DETAILED FRAMING DRAFT COMPLETE — MORRIS REVIEW REQUIRED`.

---

## 2. Rappel des décisions G1–G4 et réserve G2

| Gate | Statut | Contenu |
|------|--------|---------|
| **G1** | VALIDÉ | Campus360 = projet étalon SFIA v2.6 |
| **G2** | VALIDÉ AVEC RÉSERVE | Périmètre MVP national multi-campus (voir §8) |
| **G3** | VALIDÉ | Cadrage détaillé autorisé — **démarré** dans cette exécution |
| **G4** | VALIDÉ | Nom officiel Campus360 |
| G5–G7 (pré-cadrage) | EXÉCUTÉS | Commit, push, PR #206, merge |

**Réserve G2 (texte exact) :**

> Le périmètre MVP final reste intégralement maintenu.
> Sa réalisation devra être découpée en incréments proportionnés, chacun assorti de critères de sortie intermédiaires, sans réduction implicite de la cible MVP finale.

**Nature :** règle de trajectoire et de delivery — ne rouvre pas le périmètre — non bloquante.

---

## 3. Problème et opportunité

### Problème

Dans un réseau national multi-campus, les services du quotidien (catalogue, réservation d’espaces, notifications, pilotage) sont fragmentés ; les identités et habilitations ne sont pas unifiées entre campus et niveau national ; l’intégration identité est absente ou partielle ; la conformité et l’exploitation restent peu industrialisées.

### Opportunité

Fournir une plateforme unifiée fictive permettant de découvrir, réserver et piloter les services campus sous identité et habilitations multi-niveaux, à l’échelle nationale multi-campus, avec support/RUN borné et intégration identité simulée complète — terrain d’épreuve durable pour SFIA v2.6.

---

## 4. Objectifs du projet

1. Démontrer un MVP national multi-campus cohérent pour cinq populations.
2. Exercer identité, catalogue, réservation, notifications, pilotage local/national, exceptions, identité simulée complète, support/RUN borné.
3. Satisfaire les critères de sortie G2 (fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN readiness).
4. Respecter la réserve G2 via une trajectoire incrémentale proportionnée.
5. Séparer clairement projet, méthode et capitalisation SFIA.

---

## 5. Résultats attendus

| Résultat | Description |
|----------|-------------|
| Produit MVP | Cible G2 intégralement démontrable en sortie |
| Trajectoire | Incréments avec critères intermédiaires (voir `05-…`) |
| Gouvernance | Rôles, RACI, gates DF (voir `06-…` et `07-…`) |
| Preuves | Chaîne documentaire + preuves runtime ultérieures par cycle |
| Apprentissage SFIA | Observations projet — capitalisation méthode seulement via CAPA + GO Morris |

---

## 6. Non-objectifs

- Remplacer Chantiers360 ou Interv360.
- Promouvoir SFIA 3.0 ou modifier la méthode dans ce cycle.
- Livrer un SI campus « complet » (logement, resto, paiement, IoT, ITSM).
- Connecter un fournisseur d’identité réel au MVP.
- Produire dans ce cycle : conception détaillée, architecture, backlog, UX/Figma, code.

---

## 7. Périmètre inclus (G2 — inchangé)

- Cible **nationale multi-campus** ; admin nationale et locale ; données rattachées à un campus ; habilitations multi-niveaux ; pilotage consolidé national.
- Identité, rôles, habilitations.
- Catalogue de services.
- Réservation d’espaces.
- Notifications simples.
- Pilotage local et national.
- Gestion des exceptions.
- Intégration identité **simulée complète** (création, MAJ, désactivation, doublons, idempotence, erreurs, reprises, désynchronisations, traçabilité, supervision) — fournisseur **fictif**.
- Support / RUN **borné** (incidents de service, disponibilité, diagnostic N1, traçabilité, erreurs d’intégration, reprise bornée).
- Utilisateurs **majeurs** ; données personnelles **minimales**.
- Critères de sortie : fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN readiness.

---

## 8. Périmètre exclu

| Exclu | Note |
|-------|------|
| Logement, restauration complète, paiement réel, IoT / contrôle d’accès physique | Hors MVP |
| ITSM complet, CMDB, centre de support avancé | Hors MVP |
| Fournisseur / protocole d’identité **réel** | Hors MVP |
| Architecture distribuée / multi-région technique, stack | Non décidé |
| DPIA complète | Hors ce cycle de cadrage |
| Conception / architecture / backlog / UX-Figma / code | Cycles ultérieurs |

---

## 9. Cinq populations et responsabilités fonctionnelles

| Population | Responsabilités fonctionnelles MVP |
|------------|-------------------------------------|
| **Étudiant** | Consulter catalogue ; réserver espaces ; recevoir notifications ; gérer ses réservations dans les limites de rôle |
| **Personnel** | Idem étudiant + usages métier campus selon habilitations |
| **Gestionnaire de campus** | Administrer services/espaces locaux ; traiter exceptions ; piloter occupation locale |
| **Administrateur national** | Gouverner multi-campus ; habilitations ; pilotage consolidé ; supervision transverse |
| **Support / RUN** | Consulter incidents de service ; statut disponibilité ; diagnostic N1 ; traçabilité ; erreurs d’intégration ; reprise bornée |

**Règle :** les cinq sont dans le périmètre ; les cinq doivent être couvertes en **sortie MVP** ; la couverture peut être **progressive** par incrément (réserve G2).

---

## 10. Capacités métier attendues

1. Authentifier et autoriser (population × campus × niveau national).
2. Rattacher les données à un campus ; gérer plusieurs campus nativement.
3. Publier / découvrir un catalogue de services.
4. Réserver un espace (disponibilité, conflits, statuts).
5. Notifier simplement les acteurs concernés.
6. Piloter localement et nationalement (occupation, exceptions, consolidation).
7. Intégrer l’identité via simulation complète — sans connexion réelle.
8. Opérer le support/RUN borné défini en G2.

---

## 11. Parcours métier à cadrer ultérieurement (conception / UX)

| ID | Parcours | Populations principales |
|----|----------|-------------------------|
| P1 | Authentification et sélection de contexte campus | Toutes |
| P2 | Découverte catalogue | Étudiant, personnel |
| P3 | Réservation d’espace (création → confirmation → modification/annulation) | Étudiant, personnel, gestionnaire |
| P4 | Traitement d’exception (conflit, indisponibilité) | Gestionnaire, admin national |
| P5 | Pilotage local | Gestionnaire |
| P6 | Pilotage consolidé national | Administrateur national |
| P7 | Supervision flux identité simulés (erreur, reprise, désync) | Support/RUN, admin |
| P8 | Incident de service / disponibilité (N1) | Support/RUN |

Ces parcours sont des **cibles de conception/UX futures**, pas des specs d’écran.

---

## 12. Contraintes fonctionnelles

- Données métier rattachées à un campus.
- Habilitations multi-niveaux (campus / national) sans confusion de privilèges.
- Réservations soumises à règles de disponibilité et de conflit.
- Notifications simples (pas de plateforme marketing).
- Exceptions visibles et traitables par les rôles adéquats.
- Simulation identité : couverture complète des cas G2, y compris non-happy-path.

---

## 13. Contraintes réglementaires et transverses

### RGPD

| Élément | Cadrage |
|---------|---------|
| **Populations données** | Majeurs uniquement |
| **Catégories** | Identité minimale ; rattachement campus ; rôles/habilitations ; réservation ; logs techniques/sécurité nécessaires |
| **Finalités** | Fourniture des services campus MVP ; sécurité ; exploitation bornée |
| **Minimisation** | Pas de santé, logement, paiement réel, mineurs, responsables légaux |
| **Responsabilité** | Rôle DPO fictif + product owner fictif (voir `06-…`) |
| **Futur** | Registre des traitements ; éventuelle DPIA si élargissement ou risque élevé |
| **Déclencheurs DPIA (futurs)** | Introduction de mineurs ; données sensibles ; profilage ; nouveau traitement à risque élevé |

### Accessibilité

| Élément | Cadrage |
|---------|---------|
| **Populations** | Les cinq, avec attention usagers en situation de handicap |
| **Objectif** | Exigence d’accessibilité numérique pour parcours MVP |
| **Preuves futures** | Contrôles UX + QA (critère de sortie G2) |
| **Référentiel** | **À arbitrer Morris** (option candidate : alignement type RGAA / WCAG — non décidé) |

### Performance

| Élément | Cadrage |
|---------|---------|
| **Usages critiques** | Auth, catalogue, réservation, pilotage |
| **Pics** | Rentrée, examens, événements campus |
| **Attentes** | Temps de réponse « acceptables » à qualifier en conception/archi/QA — **pas de SLA chiffré ici** |
| **Preuves** | Tests de performance = critère sortie MVP |

### Sécurité

| Élément | Cadrage |
|---------|---------|
| Habilitations multi-niveaux | Séparation campus / national |
| Journalisation | Accès sensibles, flux identité |
| Intégrité flux identité | Erreurs, reprises, désynchronisations tracées |
| Futur | Analyse de risques / threat model en cycle sécurité |

### Release / RUN

| Élément | Cadrage |
|---------|---------|
| Release | Pilote démontrable + rollback testable |
| RUN | Logs, métriques, alertes minimales ; procédures RUN minimales ; support borné |
| Non-objectifs | ITSM/CMDB |

---

## 14. Hypothèses

| ID | Hypothèse | Statut |
|----|----------|--------|
| H-DF-01 | Quatre incréments suffisent pour respecter la réserve G2 sans réduire le MVP | Proposition — à valider Morris |
| H-DF-02 | La simulation identité peut être outillée progressivement (happy path puis non-happy-path) | Hypothèse |
| H-DF-03 | Le support/RUN borné peut être démontré sans ITSM | Hypothèse |
| H-DF-04 | Un référentiel d’accessibilité unique sera choisi avant UX Critical | Hypothèse |
| H-DF-05 | Les parcours P1–P8 couvrent le cœur MVP pour conception/UX | Hypothèse |

---

## 15. Dépendances

| Dépendance | Type | Commentaire |
|------------|------|-------------|
| Décisions G1–G4 / réserve G2 | Interne | Socle non négociable sans nouvelle décision Morris |
| Simulation identité | Structurante | Bloque une partie des preuves intégration/RUN |
| Choix référentiel accessibilité | Morris | Avant UX/QA accessibilité |
| Cycles conception → … → release | Méthode | Ordre non rigide ; déclencheurs réels |
| Aucun IdP réel | Externe fictif | Fournisseur fictif uniquement |

---

## 16. Principes de découpage incrémental

1. Chaque incrément apporte une **valeur démontrable**.
2. Aucun incrément ne **réduit** la cible MVP finale.
3. Les critères **intermédiaires** ≠ critères **finaux** G2.
4. Populations et capacités progressives, couverture **complète en sortie**.
5. Dépendances maîtrisées ; réversibilité relative ; risque proportionné.
6. Testabilité et observabilité dès que pertinent.
7. Pas de découpage par couche technique pure ; pas de micro-incréments artificiels.

Détail : `05-mvp-increment-trajectory.md`.

---

## 17. Résultats attendus par incrément (haut niveau)

| Incrément | Résultat attendu (haut niveau) |
|-----------|--------------------------------|
| **INC-01** | Socle identité multi-campus + catalogue opérable |
| **INC-02** | Réservation + notifications + exceptions |
| **INC-03** | Pilotage local et national |
| **INC-04** | Identité simulée complète + support/RUN borné + contribution aux critères transverses de sortie |

---

## 18. Critères de succès projet

1. Cible G2 démontrée sans réduction.
2. Cinq populations couvertes en sortie.
3. Trajectoire incrémentale exécutée avec critères intermédiaires tracés.
4. Séparation projet / méthode respectée.
5. Aucune promotion SFIA 3.0.
6. Gates Morris respectés avant conception, architecture, backlog, release.

---

## 19. Critères de sortie du cadrage détaillé

Le cadrage détaillé peut être considéré **complet** (après GO Morris) lorsque :

1. Les documents `04`–`07` + README sont cohérents avec G2/réserve.
2. La trajectoire incrémentale est **acceptée** ou **réorientée** explicitement.
3. Les gates DF proposés sont **acceptés, amendés ou rejetés**.
4. Les arbitrages listés §20 sont tranchés ou reportés avec traçabilité.
5. Aucune architecture/stack/backlog n’a été smuggled.
6. La suite de cycles candidats est claire.

---

## 20. Décisions Morris encore nécessaires

| ID | Décision | Urgence |
|----|----------|---------|
| DM-DF-01 | Valider le cadrage détaillé (`04`–`07`) | Immédiate (revue) |
| DM-DF-02 | Valider ou amender la trajectoire INC-01…04 | Immédiate |
| DM-DF-03 | Valider / amender les gates DF-G* | Immédiate |
| DM-DF-04 | Autoriser commit / push / PR de cette branche | Après validation fond |
| DM-DF-05 | Choisir le prochain cycle (conception vs autre) | Après DM-DF-01/02 |
| DM-DF-06 | Arbitrer référentiel accessibilité | Avant UX Critical |
| DM-DF-07 | Cleanup branche pré-cadrage (optionnel) | Indépendant |

---

## 21. Cycles suivants candidats

| Priorité pressentie | Cycle | Condition |
|---------------------|-------|-----------|
| 1 | Conception fonctionnelle | Après validation cadrage + GO |
| 2 | Architecture fonctionnelle | Si complexité flux le justifie |
| 3 | UX/UI | Après conception ; accessibilité activée |
| 4 | Backlog / user stories | Découpage INC → stories |
| … | Technique, DevOps, sécurité, QA, release, RUN | Selon déclencheurs |

Aucun cycle n’est lancé automatiquement.

---

## 22. Actions interdites avant gates

- Conception détaillée, architecture, backlog, UX/Figma, code.
- Choix de stack ou d’IdP réel.
- Réduction du MVP ou exclusion d’une population.
- Commit / push / PR / merge de cette branche sans GO Morris.
- Modification de la méthode SFIA.

---

## 23. Verdict documentaire

```text
DETAILED FRAMING DRAFT COMPLETE — MORRIS REVIEW REQUIRED
```

**Observation :** le cadrage est prêt pour revue.
**Recommandation :** valider `04`–`07` puis enchaîner sur conception fonctionnelle.
**Décision :** réservée à Morris.

```

### Contenu complet 05
```markdown
# Campus360 — Trajectoire incrémentale MVP

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 |
| **Document** | `05-mvp-increment-trajectory.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | Proposition — **non validée** Morris |
| **Objet** | Satisfaire la réserve G2 sans réduire le MVP |

> Ce document définit une **trajectoire de cadrage** à haut niveau.
> Ce n’est **pas** un backlog, **pas** des user stories, **pas** un plan d’architecture.

---

## 1. Principes de découpage

1. **Non-réduction** : la cible MVP G2 reste intégrale en sortie.
2. **Valeur démontrable** à chaque incrément.
3. **Progressivité** des populations et capacités — couverture complète en fin de trajectoire.
4. **Dépendances maîtrisées** : pas d’incrément « orphelin ».
5. **Réversibilité relative** : éviter les paris techniques irréversibles (aucune stack imposée ici).
6. **Risque proportionné** : cas complexes identité/RUN en fin de trajectoire, pas exclus.
7. **Testabilité / observabilité** : chaque incrément doit pouvoir être prouvé.
8. **Pas de découpage couche technique** (front/back/infra) comme logique principale.
9. **Pas de micro-incréments** artificiels.
10. Critères **intermédiaires** ≠ critères **finaux** G2.

---

## 2. Critères de cohérence d’un incrément

| Critère | Question |
|---------|----------|
| Valeur démontrable | Que peut-on montrer à Morris / acteurs fictifs ? |
| Dépendances maîtrisées | Les prérequis sont-ils livrés ou simulés explicitement ? |
| Réversibilité | Peut-on ajuster sans dettes structurantes non gated ? |
| Risque proportionné | Le risque est-il justifié par la valeur ? |
| Testabilité | Existe-t-il des preuves fonctionnelles envisageables ? |
| Observabilité | Dispose-t-on de signaux minimaux si pertinent ? |
| Non-réduction MVP | Contribue-t-on à la cible finale sans la rogner ? |

---

## 3. Proposition d’incréments (recommandation)

**Nombre proposé : 4** — découle de l’analyse (socle → métier cœur → pilotage → durcissement identité/RUN).

| ID | Nom | Intention |
|----|-----|-----------|
| **INC-01** | Socle identité multi-campus & catalogue | Fonder le contexte national multi-campus et l’accès aux services |
| **INC-02** | Réservation, notifications & exceptions | Délivrer le parcours métier cœur |
| **INC-03** | Pilotage local & national | Exploiter la valeur multi-niveaux et multi-campus |
| **INC-04** | Identité simulée complète & support/RUN borné | Couvrir non-happy-path identité + exploitation bornée |

---

## 4. Détail des incréments

### INC-01 — Socle identité multi-campus & catalogue

| Champ | Contenu |
|-------|---------|
| **Objectifs** | Authentification/autorisation de base ; rattachement campus ; catalogue publiable/consultable ; skeleton multi-campus |
| **Populations (progressif)** | Étudiant, personnel (consultation) ; gestionnaire & admin national (publication/admin légère) ; support/RUN (accès lecture minimal / présence rôle) |
| **Capacités** | Cap. 1–3 (authZ de base, multi-campus, catalogue) |
| **Hors cet incrément** | Réservation ; notifications métier ; pilotage consolidé ; non-happy-path identité complets ; RUN incidents |
| **Critères intermédiaires** | Au moins 2 campus fictifs ; 4 rôles opérationnels démontrés ; catalogue consultable ; aucune connexion IdP réelle |
| **Contribution à la cible finale** | Socle indispensable à toutes les capacités G2 |
| **Gate Morris pressenti** | DF-G4 (GO INC-01) — voir `07-…` |

### INC-02 — Réservation, notifications & exceptions

| Champ | Contenu |
|-------|---------|
| **Objectifs** | Parcours réservation bout-en-bout ; notifications simples ; gestion d’exceptions |
| **Populations** | Étudiant & personnel (réserver) ; gestionnaire (exceptions/espaces) ; admin national (visibilité) ; support (lecture erreurs métier si exposées) |
| **Capacités** | Cap. 4–6 (réservation, notifications, exceptions ; amorces pilotage local) |
| **Dépendance** | INC-01 |
| **Hors cet incrément** | Pilotage national consolidé complet ; simulation identité non-happy-path complète ; RUN N1 complet |
| **Critères intermédiaires** | Création/modification/annulation réservation ; notification émise ; au moins un type d’exception traité ; tests fonctionnels du parcours P3/P4 amorçables |
| **Contribution** | Cœur de valeur usager |
| **Gate** | DF-G5 |

### INC-03 — Pilotage local & national

| Champ | Contenu |
|-------|---------|
| **Objectifs** | Vues de pilotage local et consolidé national ; démonstration habilitations multi-niveaux sur données multi-campus |
| **Populations** | Gestionnaire (local) ; administrateur national (consolidé) ; autres populations en consultation selon droits |
| **Capacités** | Cap. 6 approfondie (pilotage) |
| **Dépendance** | INC-01, INC-02 |
| **Hors cet incrément** | BI avancée ; ITSM ; identité non-happy-path complète |
| **Critères intermédiaires** | Indicateurs d’occupation/exceptions locaux ; vue consolidée ≥2 campus ; séparation des privilèges campus/national prouvée |
| **Contribution** | Différenciation étalon vs projets bornés |
| **Gate** | DF-G6 |

### INC-04 — Identité simulée complète & support/RUN borné

| Champ | Contenu |
|-------|---------|
| **Objectifs** | Couvrir le contrat d’intégration identité **complet** (cas G2) ; activer support/RUN borné ; préparer release/RUN readiness |
| **Populations** | Support/RUN pleinement exercé ; admin national ; impacts sur toutes les populations via sync identité |
| **Capacités** | Cap. 7–8 (identité simulée complète, support/RUN borné) |
| **Dépendance** | INC-01…03 (contexte métier pour donner sens aux flux) |
| **Hors cet incrément** | IdP réel ; ITSM/CMDB ; runbooks encyclopédiques |
| **Critères intermédiaires** | Scénarios : création/MAJ/désactivation, doublons, idempotence, erreur, reprise, désync, traçabilité, supervision ; incident de service + disponibilité + diagnostic N1 démontrables ; contribution explicite aux critères sortie sécurité/intégration/RUN/release |
| **Contribution** | Clôture des exigences G2 différenciantes |
| **Gate** | DF-G7 |

---

## 5. Matrice populations × incréments

| Population | INC-01 | INC-02 | INC-03 | INC-04 | Sortie MVP |
|------------|--------|--------|--------|--------|------------|
| Étudiant | Consult. | **Cœur** | Consult. | Impact sync | **Couverte** |
| Personnel | Consult. | **Cœur** | Consult. | Impact sync | **Couverte** |
| Gestionnaire campus | Admin légère | **Exceptions** | **Pilotage local** | Support collab. | **Couverte** |
| Admin national | Admin légère | Visibilité | **Pilotage national** | Supervision | **Couverte** |
| Support / RUN | Présence rôle | Lecture | Lecture | **Cœur** | **Couverte** |

Aucune population n’est exclue définitivement.

---

## 6. Matrice capacités × incréments

| Capacité | INC-01 | INC-02 | INC-03 | INC-04 |
|----------|--------|--------|--------|--------|
| AuthZ / multi-campus | **Base** | Étendu | Étendu | Durci (sync) |
| Catalogue | **Oui** | — | — | — |
| Réservation | — | **Oui** | — | — |
| Notifications | — | **Oui** | — | — |
| Exceptions | — | **Oui** | Suivi | — |
| Pilotage local/national | Amorcé | Amorcé | **Oui** | — |
| Identité simulée complète | Happy path minimal | — | — | **Complet** |
| Support/RUN borné | Stub rôle | — | — | **Oui** |

---

## 7. Dépendances entre incréments

```text
INC-01 → INC-02 → INC-03
                ↘
                 INC-04 (après INC-02 au minimum ; recommandé après INC-03)
```

**Règle :** INC-04 ne doit pas précéder le métier cœur (sinon simulation sans valeur métier). INC-03 peut être allégé si Morris priorise INC-04 plus tôt — **option B** ci-dessous.

---

## 8. Critères intermédiaires vs finaux

| Niveau | Rôle |
|--------|------|
| **Intermédiaire (par INC)** | Autoriser la clôture d’un incrément et le passage au suivant |
| **Final (G2)** | Déclarer le MVP atteint — liste des 12 critères de sortie du pré-cadrage |

Les critères intermédiaires **ne remplacent jamais** les critères finaux.

### Critères de non-régression

- Chaque nouvel INC doit préserver les parcours validés des INC précédents.
- Les habilitations déjà démontrées ne doivent pas régresser.
- Les campus fictifs et rattachements restent cohérents.

---

## 9. Éléments explicitement différés (hors MVP / hors trajectoire)

- Logement, resto complète, paiement réel, IoT.
- ITSM / CMDB / centre de support avancé.
- IdP réel / protocole définitif.
- Stack, architecture distribuée, multi-région technique.
- Incréments post-MVP (EVOL) : événements complets, etc.

---

## 10. Gates Morris entre incréments (propositions)

| Gate | Objet |
|------|-------|
| DF-G4 | GO démarrage / clôture INC-01 |
| DF-G5 | GO INC-02 |
| DF-G6 | GO INC-03 |
| DF-G7 | GO INC-04 |
| DF-G8 | GO déclaration sortie MVP (critères finaux) |

Détail et preuves : `07-risks-dependencies-and-gates.md`.
Ces gates sont des **propositions**, pas des décisions validées.

---

## 11. Risques de découpage

| Risque | Mitigation |
|--------|------------|
| Réduire le MVP « pour aller plus vite » | Réserve G2 ; revue DF-G* |
| Reporter indéfiniment Support/RUN | INC-04 obligatoire avant sortie MVP |
| Faire INC-04 trop tôt | Dépendance métier INC-02+ |
| Sur-découper (>4) | Recommandation 4 ; option C seulement si Morris l’exige |
| Architecture implicite via découpage | Interdiction stack/archi dans ce doc |

---

## 12. Options alternatives

| Option | Description | Forces | Faiblesses |
|--------|-------------|--------|------------|
| **A — 4 INC (recommandée)** | Socle → métier → pilotage → identité/RUN | Équilibre valeur / risque ; 5 pops couvertes | INC-04 dense |
| **B — 3 INC** | Fusion pilotage dans INC-02 ; INC-03 = identité/RUN | Plus court | Charge INC métier trop lourde ; risque de qualité |
| **C — 4 INC avec identité non-happy-path partagée INC-02/04** | Amorcer erreurs identité dès INC-02 | Risque identité plus tôt | Complexité précoce, moins de valeur usager |

---

## 13. Recommandation (non décision)

**Recommandation :** adopter l’**option A (4 incréments INC-01…04)** comme trajectoire de référence pour la suite (conception, backlog).

**Justification :** respecte la réserve G2 ; conserve les cinq populations ; place le métier cœur tôt ; reporte le durcissement identité/RUN sans l’exclure ; évite le sur-découpage.

**Décision attendue Morris :** DM-DF-02 — valider, amender ou choisir B/C.

```

### Contenu complet 06
```markdown
# Campus360 — Gouvernance et parties prenantes

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 |
| **Document** | `06-governance-and-stakeholders.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | Proposition de gouvernance — **non validée** Morris |
| **Autorité ultime** | Morris (L0) |

> Acteurs **fictifs par rôle**. Aucune personne réelle inventée.

---

## 1. Autorité de décision

| Niveau | Acteur | Pouvoir |
|--------|--------|---------|
| **L0** | **Morris** | GO/NO-GO structurants ; scope ; gates DF ; commit/push/PR/merge ; cycles suivants ; capitalisation méthode |
| L1 fictif | Product Owner Campus360 | Priorisation produit dans le cadre G2 ; préparation des arbitrages Morris |
| L2 fictifs | Responsables domaine / transverse | Propositions, preuves, exécution bornée |
| Exécution | Cursor / ChatGPT | Analyse et exécution bornée — **non décideurs** |

---

## 2. Acteurs projet fictifs nécessaires

| Rôle fictif | Mission |
|-------------|---------|
| **Product Owner (PO)** | Valeur MVP, trajectoire INC, arbitrages produit préparés |
| **Responsable métier campus** | Besoins gestionnaire / usagers campus |
| **Responsable national** | Cohérence multi-campus, pilotage consolidé |
| **Responsable identité / intégration** | Contrat simulation identité, cas non-happy-path |
| **RSSI fictif** | Exigences sécurité, habilitations, journaux |
| **DPO fictif** | Minimisation, majeurs-only, déclencheurs DPIA |
| **Référent accessibilité** | Objectifs et preuves accessibilité |
| **Responsable RUN / release** | Support borné, observabilité minimale, rollback |
| **QA Lead fictif** | Stratégie de preuves (sans plan détaillé ici) |
| **SFIA Method Observer** | Observations méthode — sans promotion baseline |

---

## 3. Représentation des cinq populations

| Population | Représentant fictif | Mode |
|------------|---------------------|------|
| Étudiant | Groupe usagers étudiants (fictif) | Besoins consultation via PO / métier campus |
| Personnel | Groupe usagers personnels (fictif) | Idem |
| Gestionnaire de campus | Responsable métier campus | Direct |
| Administrateur national | Responsable national | Direct |
| Support / RUN | Responsable RUN / release | Direct |

---

## 4. Matrice RACI (synthèse)

Légende : **R** Responsible · **A** Accountable · **C** Consulted · **I** Informed

| Décision / activité | Morris | PO | Métier campus | National | Identité | RSSI | DPO | Access. | RUN/Release | QA |
|---------------------|--------|-----|---------------|----------|----------|------|-----|---------|-------------|-----|
| Scope MVP G2 | **A** | C | C | C | C | C | C | C | C | I |
| Trajectoire INC | **A** | R | C | C | C | C | I | I | C | C |
| GO cycle suivant | **A** | R | C | C | C | C | C | C | C | C |
| Commit / PR / merge | **A** | R | I | I | I | I | I | I | I | I |
| Exigences sécurité | A* | C | I | C | C | **R** | C | I | C | C |
| Exigences RGPD | A* | C | I | I | C | C | **R** | I | I | I |
| Accessibilité | A* | C | C | I | I | I | I | **R** | I | C |
| Simulation identité | A* | C | I | C | **R** | C | C | I | C | C |
| RUN readiness | A* | C | I | I | C | C | I | I | **R** | C |
| Capitalisation SFIA | **A** | I | I | I | I | I | I | I | I | I |

\* Morris reste A sur tout arbitrage structurant ; R opérationnel préparé par le rôle métier/transverse.

---

## 5. Gouvernance nationale / campus

| Niveau | Responsabilités |
|--------|-----------------|
| **National** | Règles d’habilitation transverses ; catalogue de politiques ; pilotage consolidé ; arbitrage inter-campus |
| **Campus** | Exploitation locale des services/espaces ; exceptions locales ; qualité de service locale |
| **Règle** | Une donnée métier est rattachée à un campus ; le national voit/consolide selon habilitation — sans effacer la responsabilité locale |

---

## 6. Responsabilités par domaine

### Produit

- PO : cohérence MVP, non-réduction G2, préparation gates DF.
- Métier campus / national : validation métier des parcours cadrés.

### Sécurité / RGPD / accessibilité

- RSSI : modèle d’habilitation, journaux, exigences d’analyse future.
- DPO : minimisation, majeurs-only, registre futur, déclencheurs DPIA.
- Accessibilité : objectifs, preuves UX/QA, options de référentiel pour Morris.

### Intégration identité

- Responsable identité : couverture simulation complète ; traçabilité ; pas d’IdP réel au MVP.

### RUN / release

- Responsable RUN/release : support borné ; logs/métriques/alertes minimales ; rollback testable ; pas d’ITSM.

---

## 7. Instances

| Instance | Objet | Fréquence indicative |
|----------|-------|----------------------|
| **Arbitrage Morris** | Gates DF, scope, cycles, Git | À chaque jalon structurant |
| **Comité produit fictif** | Alignement PO / métiers / transverses | Par incrément (préparation) |
| **Revue transverse** | Sécurité, RGPD, accessibilité, RUN | Avant GO INC à risque (surtout INC-04) |
| **Validation de preuves** | QA / démonstrations | Clôture d’INC |

Pas de calendrier figé (pas de dates imposées).

---

## 8. Règles d’escalade

1. Tout risque de **réduction du MVP** → escalade immédiate Morris.
2. Tout besoin d’**architecture / stack / IdP réel** → stop + gate Morris.
3. Désaccord national vs campus sur habilitations → arbitrage Morris.
4. Élargissement hors G2 (logement, paiement, ITSM…) → NO-GO sauf nouvelle décision.
5. Friction méthodologique SFIA → observation documentée ; CAPA seulement avec GO Morris.

---

## 9. Décisions réservées à Morris

- Validation du cadrage détaillé et de la trajectoire INC.
- Activation des cycles suivants.
- GO commit / push / PR / merge.
- Choix référentiel accessibilité (si plusieurs options).
- Toute décision d’architecture / stack / fournisseur réel.
- Promotion d’un apprentissage en standard SFIA.
- Cleanup de branches.
- Réouverture ou amendement de G2.

---

## 10. Décisions délégables (dans le cadre G2)

- Rédaction de specs de conception **après** GO cycle.
- Priorisation fine **intra-incrément** (sans sortir du scope INC).
- Choix de formulations documentaires non structurantes.
- Organisation des revues fictives de préparation.

Toute délégation cesse dès qu’un gate DF est requis.

---

## 11. Preuves attendues par type de gate (haut niveau)

| Type de gate | Preuves typiques |
|--------------|------------------|
| Validation cadrage | Docs `04`–`07` cohérents ; revue ChatGPT/handoff |
| GO INC | Objectifs INC ; critères intermédiaires ; dépendances OK ; démo ou preuves QA selon maturité |
| GO cycle suivant | Brief cycle ; hors périmètre ; profil justifié |
| GO release | Release notes ; rollback testé ; RUN readiness minimale |
| GO sortie MVP | Matrice des 12 critères G2 ; non-régression ; 5 populations |

Détail numéroté : `07-risks-dependencies-and-gates.md`.

---

## 12. Séparation projet / méthode / capitalisation

| Couche | Contenu | Autorité |
|--------|---------|----------|
| **Projet** | Campus360 sous `projects/campus360/` | Morris + rôles fictifs |
| **Méthode SFIA** | Documents canoniques v2.6 | Morris via CAPA |
| **Observations** | REX dans handoff / docs projet | Non binding |
| **Capitalisation** | Standards réutilisables | Cycle CAPA + GO Morris uniquement |

Campus360 **n’est pas** un véhicule SFIA 3.0.

```

### Contenu complet 07
```markdown
# Campus360 — Risques, dépendances et gates

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | Campus360 |
| **Document** | `07-risks-dependencies-and-gates.md` |
| **Cycle** | 1 — Cadrage (cadrage détaillé) |
| **Profil** | Critical |
| **Baseline** | SFIA v2.6 |
| **Statut** | Proposition — gates DF **non validés** Morris |
| **Série de gates** | DF-G1 … DF-G12 (nouvelle série, distincte de G1–G7 pré-cadrage) |

---

## 1. Registre des risques

| ID | Catégorie | Risque | Impact | Mitigation | Rôle |
|----|-----------|--------|--------|------------|------|
| R01 | Produit | Perte de clarté sur la valeur usager (catalogue/réservation) | Élevé | INC-02 tôt ; démos parcours | PO |
| R02 | Périmètre | Réduction implicite du MVP | Critique | Réserve G2 ; gates DF ; stop conditions | Morris / PO |
| R03 | Périmètre | Scope creep (logement, paiement, ITSM) | Élevé | Hors MVP explicite | PO / Morris |
| R04 | Multi-campus | Confusion responsabilité campus/national | Élevé | Règles rattachement ; RACI | National / campus |
| R05 | Habilitation | Élévation de privilèges cross-campus | Critique | Séparation niveaux ; preuves INC-03/sécurité | RSSI |
| R06 | Identité | Simulation incomplète (happy path only) | Élevé | INC-04 obligatoire avant sortie | Identité |
| R07 | Identité | Glissement vers IdP réel | Élevé | Interdiction MVP ; gate | Morris |
| R08 | RGPD | Introduction de mineurs ou données excessives | Critique | Majeurs-only ; minimisation ; DPO | DPO |
| R09 | Accessibilité | Report indéfini des preuves | Moyen | Critère sortie G2 ; gate avant UX | Access. / QA |
| R10 | Performance | Sous-estimation des pics multi-campus | Moyen | Cadrage pics ; tests futurs | QA / Archi future |
| R11 | Sécurité | Journaux insuffisants sur flux sensibles | Élevé | Exigences dès conception ; cycle sécurité | RSSI |
| R12 | Release/RUN | Release sans rollback testé | Élevé | Critère G2 ; DF-G12 | RUN/Release |
| R13 | RUN | Dérive vers ITSM | Moyen | Périmètre borné support | RUN |
| R14 | Découpage | Trop d’incréments / micro-découpage | Moyen | Plafond raisonnable (reco 4) | PO |
| R15 | Découpage | INC-04 trop tardif → dette identité | Moyen | Ne pas clôturer MVP sans INC-04 | PO |
| R16 | Méthode | Confusion projet / capitalisation SFIA | Moyen | Séparation ; CAPA gated | Method observer |
| R17 | Méthode | Forçage des 15 cycles | Moyen | Activation par déclencheur | PO / Morris |
| R18 | Gouvernance | Démarrage conception sans GO | Élevé | DF-G8 | Morris |

---

## 2. Dépendances

### Internes

| Dépendance | De → Vers |
|------------|-----------|
| Pré-cadrage G1–G4 / réserve | Socle de ce cadrage |
| INC-01 | INC-02, 03, 04 |
| INC-02 | INC-03, 04 |
| Docs `04`–`07` | Revue Morris avant cycles suivants |
| Simulation identité | Preuves intégration, sécurité, RUN |

### Externes fictives

| Dépendance | Nature |
|------------|--------|
| Fournisseur d’identité **fictif** | Contrat + simulation — pas de connexion réelle |
| Campus fictifs (données) | Jeux de données multi-campus |
| Aucun SI académique réel | Hors MVP |

---

## 3. Hypothèses à valider

| ID | Hypothèse | Validation pressentie |
|----|-----------|----------------------|
| HA-01 | 4 INC suffisent | Revue Morris DM-DF-02 |
| HA-02 | Accessibilité prouvable sans choix immédiat du référentiel | Avant UX : DM-DF-06 |
| HA-03 | Support borné suffisant vs attentes « nationales » | Revue INC-04 |
| HA-04 | Performance testable sans SLA chiffré précoce | Cycle perf/QA |

---

## 4. Signaux d’alerte

- Demande d’exclure une population « pour simplifier ».
- Demande d’IdP réel « juste pour démarrer ».
- Apparition de modules hors G2 dans un brief INC.
- Stories techniques sans valeur métier (découpage couche).
- Absence de critères intermédiaires dans un GO INC.
- Confusion entre critère intermédiaire et sortie MVP.
- Proposition de modifier SFIA « via Campus360 ».

---

## 5. Gates Morris proposés (série DF)

> **Proposition de gouvernance** — à valider / amender / rejeter par Morris.
> Ne remplacent pas G1–G7 historiques ; les complètent pour la suite.

| Gate | Objet | Preuves attendues | Statut |
|------|-------|-------------------|--------|
| **DF-G1** | Validation du cadrage détaillé (`04`–`07` + README) | Handoff FULL ; cohérence G2/réserve | **À valider** |
| **DF-G2** | Validation trajectoire INC-01…04 (ou alternative) | Doc `05` ; matrice pops/capacités | **À valider** |
| **DF-G3** | Validation gates DF et RACI | Docs `06`–`07` | **À valider** |
| **DF-G4** | GO INC-01 | Objectifs ; critères intermédiaires ; hors scope | Proposition |
| **DF-G5** | GO INC-02 | Dépendance INC-01 ; parcours réservation | Proposition |
| **DF-G6** | GO INC-03 | Pilotage local/national ; habilitations | Proposition |
| **DF-G7** | GO INC-04 | Plan simulation complète + RUN borné | Proposition |
| **DF-G8** | GO cycle conception fonctionnelle | Brief cycle ; hors périmètre | Proposition |
| **DF-G9** | GO architecture fonctionnelle (si déclenchée) | Justification complexité | Proposition |
| **DF-G10** | GO UX/UI (+ accessibilité cadrée) | Parcours ; option référentiel tranchée ou reportée | Proposition |
| **DF-G11** | GO backlog / architecture technique / DevOps (selon cycle) | Périmètre INC ; pas de stack smuggled sans gate dédié | Proposition |
| **DF-G12** | GO release pilote / RUN readiness / sortie MVP | Critères G2 ; rollback ; 5 pops | Proposition |

**Git (hors série DF mais rappelés) :** commit / push / PR de `project/campus360-detailed-framing` = décisions Morris **séparées**, non autorisées dans l’exécution courante.

---

## 6. Stop conditions

STOP et escalade Morris si :

1. Réduction du MVP ou exclusion d’une population.
2. Nécessité de choisir une architecture / stack / IdP réel pour continuer.
3. Contradiction avec G1–G4 / réserve G2.
4. Demande de modifier la méthode SFIA.
5. Scope impossible à fermer.
6. Trajectoire nécessitant un découpage artificiel non justifiable.
7. Action Git distante projet sans GO.

---

## 7. Critères de passage vers les cycles suivants

| Cycle cible | Prérequis de passage |
|-------------|----------------------|
| **Conception fonctionnelle** | DF-G1/G2 (ou équivalent validé) ; DF-G8 |
| **Architecture fonctionnelle** | Spec fonctionnelle ; complexité multi-domaines justifiée ; DF-G9 |
| **UX/UI** | Parcours priorisés ; accessibilité cadrée ; DF-G10 ; pas de Figma sans GO source |
| **Backlog / user stories** | Conception (± UX) ; trajectoire INC acceptée ; DF-G11 partiel |
| **Architecture technique** | Arbitrages fonctionnels ; gate stack dédié si irréversible |
| **Intégration / DevOps** | Besoin pipeline/env réel ; contrat identité simulé |
| **QA** | Stories/critères ; profil selon risque (Critical probable en sortie MVP) |
| **Sécurité** | Surfaces authZ/identité ; pas de threat model avant cycle dédié |
| **Release** | Artefacts ; rollback ; DF-G12 partiel |
| **RUN readiness** | Observabilité minimale ; support borné ; DF-G12 |

---

## 8. Lien avec les blocs transverses

| Bloc | Risques liés | Gate / cycle |
|------|--------------|--------------|
| RGPD | R08 | Conception, sécurité, QA ; DPIA si déclencheur |
| Accessibilité | R09 | UX, QA ; DM-DF-06 |
| Performance | R10 | Archi, QA, observabilité |
| Sécurité | R05, R11 | Sécurité, INC-03/04 |
| Intégration | R06, R07 | DevOps, INC-04 |
| Release/RUN | R12, R13 | Release, RUN, INC-04 |

---

## 9. Décisions Morris attendues (immédiat)

1. **DF-G1** — valider le cadrage détaillé.
2. **DF-G2** — valider la trajectoire (option A recommandée).
3. **DF-G3** — valider la série de gates DF.
4. Autoriser ou non commit/push/PR de la branche `project/campus360-detailed-framing`.
5. Désigner le prochain cycle (recommandation : conception fonctionnelle).

---

## 10. Verdict

Registre et gates **prêts pour arbitrage Morris**.
Aucune auto-validation des gates DF dans cette exécution.

```

### Contenu complet README local
```markdown
# Campus360

| Métadonnée | Valeur |
|------------|--------|
| **Identité** | Campus360 — plateforme fictive nationale de gestion de campus et de services |
| **Nom** | **Campus360** — **validé Morris (G4)** — 17 juillet 2026 |
| **Statut** | `detailed-framing-in-progress` |
| **Baseline méthode** | **SFIA v2.6** (baseline opérationnelle officielle) |
| **Autorité** | Morris (L0) |
| **Exécuteur** | Cursor — Cycle 1 cadrage détaillé (DOC, Critical) |
| **Typologie cycle** | DOC |
| **Cycle projet** | 1 — Cadrage (sous-angle : **cadrage détaillé**) |
| **Profil SFIA** | Critical |
| **Branche** | `project/campus360-detailed-framing` |
| **Chemin** | `projects/campus360/` |
| **Pré-cadrage** | **Mergé** via PR #206 (`ec7f397`) |

---

## 1. Finalité du projet

Campus360 est le **projet produit fictif étalon** validé par Morris (G1) pour appliquer et éprouver la baseline opérationnelle **SFIA v2.6** sur une trajectoire plus substantielle que Chantiers360 et Interv360.

Cible produit validée (G2 — **VALIDÉ AVEC RÉSERVE**) :

- **échelle nationale multi-campus** dès le MVP ;
- **cinq populations** et habilitations multi-niveaux ;
- noyau fonctionnel (identité, catalogue, réservation, notifications) + pilotage local/national + intégration identité **simulée complète** ;
- support / RUN **borné** ;
- RGPD allégé (**majeurs uniquement**) ;
- critères de sortie MVP renforcés (fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN).

### Réserve G2 (règle de trajectoire — non bloquante)

> Le périmètre MVP final reste **intégralement maintenu**.
> Sa réalisation devra être **découpée en incréments proportionnés**, chacun assorti de **critères de sortie intermédiaires**, **sans réduction implicite** de la cible MVP finale.

**Campus360 n’est pas un véhicule de promotion SFIA 3.0.**

**Distinction critique :** national multi-campus = cible **fonctionnelle** — **aucune** architecture distribuée, multi-région, stack ou IdP réel décidé à ce stade.

---

## 2. Navigation documentaire

### Pré-cadrage (mergé PR #206)

| Document | Rôle |
|----------|------|
| [README.md](./README.md) | Identité, statut, navigation |
| [01-opportunity-and-vision.md](./01-opportunity-and-vision.md) | Opportunité, vision, populations, domaines |
| [02-sfia-cycle-coverage-hypothesis.md](./02-sfia-cycle-coverage-hypothesis.md) | Hypothèse couverture 15 cycles |
| [03-pre-framing-decision-pack.md](./03-pre-framing-decision-pack.md) | Decision pack de clôture pré-cadrage |

### Cadrage détaillé (en cours — draft)

| Document | Rôle |
|----------|------|
| [04-detailed-framing.md](./04-detailed-framing.md) | Cadrage détaillé produit / périmètre / contraintes |
| [05-mvp-increment-trajectory.md](./05-mvp-increment-trajectory.md) | Trajectoire incrémentale (réserve G2) |
| [06-governance-and-stakeholders.md](./06-governance-and-stakeholders.md) | Gouvernance et parties prenantes |
| [07-risks-dependencies-and-gates.md](./07-risks-dependencies-and-gates.md) | Risques, dépendances, gates DF proposés |

> **Cadrage détaillé ≠ conception / architecture / backlog / UX / code.**

---

## 3. État courant

| Élément | État |
|---------|------|
| Pré-cadrage | **CLÔTURÉ** — mergé PR #206 |
| G3 | **VALIDÉ** — cadrage détaillé **démarré** par décision Morris `GO — DETAILED FRAMING CAMPUS360` |
| Cadrage détaillé | **`detailed-framing-in-progress`** — draft local, **non commité** |
| Conception / architecture / backlog / delivery | **Non démarrés** |
| Commit / push / PR (cette branche) | **Interdits** sans nouveau GO Morris |

---

## 4. Statut des gates (rappel)

| Gate | Statut |
|------|--------|
| G1 | **VALIDÉ** |
| G2 | **VALIDÉ AVEC RÉSERVE** |
| G3 | **VALIDÉ** — cadrage détaillé démarré |
| G4 | **VALIDÉ** |
| G5–G7 (pré-cadrage) | **EXÉCUTÉS** (PR #206 mergée) |
| Gates DF-G* | **Proposés** — voir `07-…` — non validés |

---

## 5. Résumé du périmètre MVP (G2 validé)

| Volet | Contenu retenu |
|-------|----------------|
| **Échelle** | National multi-campus ; admin nationale et locale |
| **Fonctionnel** | Identité / rôles ; catalogue ; réservation ; notifications ; pilotage local/national ; exceptions ; identité structurante |
| **Populations (5)** | Étudiant ; personnel ; gestionnaire de campus ; administrateur national ; support / RUN |
| **Support / RUN** | Borné — pas d’ITSM / CMDB |
| **Identité** | Fournisseur fictif + simulation complète — aucune connexion réelle |
| **RGPD** | Majeurs ; données minimales |
| **Sortie MVP** | Fonctionnel, intégration, QA, sécurité, accessibilité, performance, release, RUN |
| **Réserve** | Incréments proportionnés — cible finale inchangée |

---

## 6. Hors périmètre (cadrage détaillé)

- Conception fonctionnelle détaillée, architecture, backlog, user stories
- UX/UI, Figma, wireframes
- Code, stack, IdP réel
- DPIA complète, threat model complet, runbooks complets
- Commit / push / PR / merge de `project/campus360-detailed-framing`
- Modification SFIA / SFIA 3.0

---

## 7. Source de vérité

| Niveau | Source |
|--------|--------|
| **Méthode** | Git `main` — SFIA v2.6 |
| **Décisions structurantes** | Morris |
| **Projet** | `projects/campus360/` (pré-cadrage sur `main` ; cadrage détaillé en draft branche locale) |

---

## 8. Séparation projet / méthode / capitalisation

| Couche | Autorisé | Interdit |
|--------|----------|----------|
| Projet | Cadrage Campus360 | Modifier SFIA canonique |
| Observations | REX / handoff | Doctrine implicite |
| Capitalisation SFIA | Cycle CAPA + GO Morris | SFIA 3.0 via Campus360 |

---

## 9. Décision suivante

**Revue Morris du cadrage détaillé** (docs `04`–`07` + handoff) :

- valider le fond ;
- valider ou amender la trajectoire incrémentale ;
- valider ou amender les gates DF ;
- décider commit/push/PR ;
- désigner le prochain cycle (recommandation : conception fonctionnelle).

```

---

## 7. Analyse `.tmp-sfia-review`

35 fichiers : scripts Python/shell, manifests lots A–F/E1/E2, diffs PD-08, review packs.
Majorité **E** (temporaire/reproductible). Preuves lot E1/E2 → **F** (archive optionnelle).
`chatgpt-review.md` = pack courant (**E** opérationnel).

Aucun secret évident (scan `api_key|password|Bearer|sk-` : hits sur champs JSON `status`/`task` uniquement, pas de credentials).

---

## 8. Analyse `.sfia`

Untracked non ignorés : 2 logs jsonl (bridge/runner).
Ignorés : `node_modules`, runner/server/gates, autres logs `.log`.
Classe **E** + dette **G** (logs jsonl non couverts par ignore).
Ne pas versionner. Ne pas toucher `.gitignore` dans ce cycle.

---

## 9. Analyse `sfia-review-handoff/` local

Worktree **imbriqué** dans le principal (`gitdir: .../.git/worktrees/sfia-review-handoff`).
Apparait comme `??` — **anomalie de nesting**, pas une copie orpheline.
Classe **G**. Ne pas `rm -rf` comme untracked.

---

## 10. Lots de traitement proposés

| Lot | Fichiers | Objectif | Risque | Branche candidate | Ordre |
|---|---|---|---|---|---|
| L1 Campus360 | README + 04–07 | Préserver cadrage détaillé | Perte si purge aveugle | `project/campus360-detailed-framing` | 1 |
| L2 Sync FA mineure | 11 (+12 optionnel) | Aligner métadonnées #214/11B sur main si souhaité | Confusion avec main 13 déjà à jour | branche sync courte depuis main | 2 |
| L3 Studio obsolète | 07,13,README M + 14/15/16 ?? | Purge locale | Faible si confirmé D | — | 3 |
| L4 `.tmp` | 35 fichiers | Purge/archive | Faible | archive locale optionnelle | 4 |
| L5 `.sfia` logs | 2 jsonl | Purge + hygiène ignore future | Faible | — | 5 |
| L6 Handoff nesting | worktree path | Déplacer worktree hors principal (futur) | Confusion status | — | 6 |

---

## 11. Options Morris

### Option 1 — Récupération prudente par lots (recommandée, non validée)
1. Extraire L1 Campus360 sur branche dédiée depuis `origin/main` (ou checkout propre worktree) puis commit/PR.
2. Décider L2 (sync 11/12) ou discard.
3. Purger L3–L5 après GO.
4. Reporter L6.
**Avantages :** zéro perte Campus360 ; principal nettoyable ; delivery débloquable.  
**Risques :** plusieurs GO. **Coût :** moyen. **Réversibilité :** haute. **Impact delivery :** débloque via worktree/main propre.

### Option 2 — Archivage local puis nettoyage
Tar contrôlé du WT dirty → reset/clean **uniquement après GO** → réinjection lots utiles.  
**Avantages :** filet de sécurité. **Risques :** archive oubliée ; process plus lourd.

### Option 3 — Conservation minimale
Ne garder que Campus360 04–07 (+ README) ; tout le reste purge. Sync 11 discard.  
**Avantages :** rapide. **Risques :** abandon sync 11. **Coût :** faible.

---

## 12. Fichiers à ne surtout pas supprimer

- `projects/campus360/04`…`07` + README local
- Worktree `sfia-review-handoff/` (imbrication)
- (Sur main, déjà versionnés) Studio 14–19 — ne pas écraser avec locaux D

## 13. Suppressions candidates (après GO)

- Studio locaux D : 07/13/README M, 14/15/16 ??
- `.tmp-sfia-review/**` (sauf archive F si choisie)
- `.sfia/mcp/logs/*.jsonl`

---

## 14. Décisions Morris requises

1. Choisir Option 1 / 2 / 3 (ou variante).
2. GO lot Campus360 (branche + commit + PR distincts).
3. GO sur L2 : sync 11/12 **ou** discard.
4. GO purge L3–L5.
5. GO futur hygiène nesting handoff.
6. GO reprise delivery (worktree depuis `origin/main` recommandé) **après** principal propre ou via worktree sans toucher le dirty.

---

## 15. Instruction ChatGPT

Lire `sfia-review-handoff/latest-chatgpt-review.md`.

Vérifier inventaire 51 fichiers, classes A–H, lots, options, absence de modification locale, verdict.

---

## 16. Verdict

**WORKSPACE AUDIT COMPLETE — MORRIS RECOVERY DECISION REQUIRED**
