# ChatGPT Review Pack — FULL — A5.2 Decision Record PR Readiness

## Meta

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-28 10:04:30 CEST (+0200) |
| **Cycle / profil** | 13 — PR readiness (+9 · 15 · 1 · 3 · 6 · 10) · Critical |
| **Gate consommé** | `GO REVIEW MORRIS A5.2 DECISION RECORD AND PREPARE DOCUMENTARY PR READINESS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Repo** | `mcleland147/sfia-workspace` |
| **Worktree** | `/Users/morris/Projects/sfia-workspace-a5-2-framing` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity` |
| **Base / merge-base** | `9f578ea1677ce65cffb4b05ddf5649a21a5b240c` (`origin/main`) |
| **HEAD** | `bd3608c6220e820cc3fa017422a7564a565a1296` |
| **Parent** | `cd7c00e918c721738e792594bdd22907cf859cf2` |
| **Upstream** | **aucun** |
| **Branche distante projet** | **absente** |
| **Handoff initial** | blob `20f4f801c0dc95e2a3804a759205c8e908f31772` |
| **Template / handoff lus** | pack A5.2 (7 fichiers HEAD) · handoff décision record · workflow `sfia-studio-ci.yml` |
| **Modification projet ce cycle** | **aucune** (read-only) |

## Verdict PR readiness

`A5.2 DOCUMENTARY PR READY — MORRIS DECISION RECORD VERIFIED — TWO COMMITS AND SEVEN-FILE SCOPE COHERENT — NO RESERVE CLOSURE — NO F-DECISION AUTO-CONSUMPTION — T-A7 NOT OPEN — DELIVERY AND CUTOVER NOT AUTHORIZED — PROJECT BRANCH STILL NOT PUSHED`

## Verdicts de contrôle

| Contrôle | Verdict |
|----------|---------|
| Truth Git | PASS |
| Transcription Morris | `MORRIS A5.2 DECISION TRANSCRIPTION EXACT` |
| Cohérence interne | `A5.2 DECISION RECORD INTERNALLY COHERENT` |
| Réserves | `NO RESERVE CLOSURE OVERREACH` |
| Décisions F | `NO F-DECISION AUTO-CONSUMPTION` |
| Guardrails T-A7/delivery | `T-A7 AND DELIVERY GUARDRAILS PRESERVED` |

## Upstream / remote / status

- worktree propre · aucun staged · aucun untracked
- aucune opération Git active
- upstream absent · remote branch projet absente
- `git show --check HEAD` OK
- décision record : 7 fichiers · +360/−156 · pack only
- cumul branche : 7 fichiers · +785 · pack only

## Commits cumulés (`origin/main...HEAD`)

| # | SHA | Message | Objectif |
|---|-----|---------|----------|
| 1 | `cd7c00e918c721738e792594bdd22907cf859cf2` | `docs(sfia-studio): frame A5.2 reservations authority and atomicity` | Créer le pack A5.2 (framing) |
| 2 | `bd3608c6220e820cc3fa017422a7564a565a1296` | `docs(sfia-studio): record Morris A5.2 decisions` | Enregistrer A52-D01…D05 |

**Futur périmètre PR = les deux commits**, pas uniquement le second.

## Diff décision record (`cd7c00e…` → `bd3608c…`)

- 7 fichiers modifiés (M)
- +360 / −156
- aucun fichier hors pack

## Diff cumulé (`origin/main...HEAD`)

- 7 fichiers ajoutés (A)
- +785 / −0
- aucun fichier hors pack
- chemin unique : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/`

## Fichiers / blobs finaux

| Fichier | Blob |
|---------|------|
| `README.md` | `146eb122b898b21b6a8bda3f14d57c8f60253d05` |
| `01-scope-and-source-truth.md` | `884ed9a9940c628a61d91a0b433645434766eeee` |
| `02-reservation-dependency-matrix.md` | `5cadcde061fb3c350ac52a222dc5da7614e4ce2c` |
| `03-authority-model-and-gaps.md` | `87bf876878427964e81a4ffd35b8e0b8beab3a3e` |
| `04-atomicity-model-and-options.md` | `f693709a487d8023b9fa9e7b9afd61b87351c691` |
| `05-r-m01-and-c1-c4-assessment.md` | `1d1b8cf5d3ba50e792ec061a29c9b6575660baeb` |
| `06-morris-arbitration-pack.md` | `0fd1c10a3ef92e1f9ea24634f6394a3ca5dcddda` |

## Choix Morris / décisions A52

| ID | Choix | Statut |
|----|-------|--------|
| A52-D01 | structure `.3` + `STOP BEFORE DELIVERY` | `DECIDED — ADOPTED BY MORRIS` |
| A52-D02 | `.2` | `DECIDED — ADOPTED BY MORRIS` |
| A52-D03 | `.3` puis `.1` avant real Critical | `DECIDED — ADOPTED BY MORRIS` |
| A52-D04 | `.4` | `DECIDED — ADOPTED BY MORRIS` |
| A52-D05 | `.2 + .4` | `DECIDED — ADOPTED BY MORRIS` |

### Fidélité (détail)

- **D01** : C4 tracking→B5 · B5 OPEN · stop avant delivery ≠ prep · F08 NOT DECIDED — OK
- **D02** : txn logique + compensation + idempotence · durable avant real-exec · R1 OPEN · no techno — OK
- **D03** : simulation/read-only · fail-closed · `.1` précondition future · R-T-A3-1 OPEN HARD · IAM NOT SELECTED · no API — OK
- **D04** : mémoire bornée · pas durable · R-T-A3-2 OPEN HARD · T-A6 NOT DECLARED · persistence NOT SELECTED — OK
- **D05** : C1–C3→R-M01 · C4→B5 · bornage avant futur COMPLETE · R-M01 OPEN · C* non VALIDATED · F04 UNCHANGED — OK

`RECOMMENDED — NOT DECIDED` pour A52-D01…D05 : **0 occurrence** (aucune stale).
Bulletin Morris : **rempli**, gate RECORD consommé.

## Réserves

| ID | Statut |
|----|--------|
| B5 | `OPEN` |
| R1 | `OPEN` |
| R-T-A3-1 | `OPEN HARD` |
| R-T-A3-2 | `OPEN HARD` |
| R-M01 | `OPEN` |

Occurrences `CLOSED` / `SATISFIED` / `VALIDATED` / `COMPLETE` / `AUTHORIZED` : uniquement négations, anti-claims, ou conditions futures. **Aucune réserve fermée.**

## C1–C4

| Critère | Statut |
|---------|--------|
| C1–C3 | `RECOMMENDED — NOT VALIDATED` |
| C4 | `TRACKING MERGED INTO B5 — NOT VALIDATED` |

## Décisions F

| F | Statut |
|---|--------|
| F04 | `DECIDED — UNCHANGED` |
| F03 · F08 · F09 · F10 · F11 · F12 · F13 | `NOT DECIDED` |

Préparation documentaire F08 (D01) · F09/F10 (D03) · F10 (D02/D04) · bornage futur F04 (D05) — **sans consommation**.

## T-A6 / Option A / T-A7 / delivery

| Item | Statut |
|------|--------|
| T-A6 COMPLETE | `NOT DECLARED` |
| Option A | `NOT COMPLETE` |
| T-A7 | `NOT OPEN` |
| Delivery preparation | `NOT AUTHORIZED` |
| Delivery | `NOT AUTHORIZED` |
| Cutover | `NOT AUTHORIZED` |
| Persistence | `NOT SELECTED` |
| IAM | `NOT SELECTED` |
| RGPD production | `NOT VALIDATED` |

## Cohérence documentaire

- Gate RECORD identique (README / 01 / 06)
- Date/heure enregistrement identique : `2026-07-28 09:50:54 CEST (+0200)`
- Statuts A52 / réserves / F / T-A7 alignés entre README, 02–06
- Séparation mémoire/durable cohérente (03/04)
- Distinction décision ≠ implémentation ≠ fermeture préservée
- Pas de chemin `/Users/` dans le pack projet
- Pas de secret/token/password

## Findings

| Sévérité | Count | Détail |
|----------|-------|--------|
| Critical | **0** | — |
| Major | **0** | — |
| Minor | **0** | — |

### Observations (non bloquantes)

1. **O-A52-PR01** — Horodatage documentaire d’enregistrement (`09:50:54`) ≠ `AuthorDate` du commit (`09:53:58`) ; écart de traçabilité mineur, non contradictoire.
2. **O-A52-PR02** — Une future PR docs-only sous `projects/sfia-studio/**` déclenchera quand même `Detect` + `Build and validate` + `Required Gate` (install/typecheck/lint/build/tests app) — coût CI attendu, pas un check inventé.
3. **O-A52-PR03** — Aucun workflow dédié Markdown/link validation trouvé ; non inventé.
4. **O-A52-PR04** — Secret scanning ciblé (`git grep` clés privées / AKIA) s’exécute dans le job validate ; couvre le path studio.
5. **O-A52-PR05** — Densités documentaires encore inégales entre fiches (héritage framing) — n’affecte pas la fidélité décisionnelle.

## Risques PR

| Risque | Classe |
|-------|--------|
| Transcription incorrecte | **non bloquant** — vérifiée exacte |
| Fermeture implicite de réserve | **non bloquant** — anti-claims explicites |
| Surinterprétation F08/F09/F10 | **non bloquant** — `NOT DECIDED` + `NO F-DECISION AUTO-CONSUMPTION` |
| Confusion T-A6 COMPLETE | **non bloquant** — `NOT DECLARED` répété ; `.4` ≠ COMPLETE |
| Confusion stop delivery vs prep | **non bloquant** — explicite dans README/01/02/06 |
| Croire T-A7 ouvert | **non bloquant** — `NOT OPEN` partout |
| Conflit avec main | **non bloquant** — base = `origin/main` actuel ; branche 2 commits ahead only |
| Branche locale obsolète | **non bloquant** — HEAD attendu confirmé |
| PR trop large | **non bloquant** — 7 fichiers pack only · 2 commits docs |

Aucun risque **bloquant**.

## Checks attendus (future PR)

| Check | Attendu | Note |
|-------|---------|------|
| Detect SFIA Studio changes | **oui** | path `projects/sfia-studio/**` |
| Build and validate SFIA Studio | **oui** | même si docs-only (O-A52-PR02) |
| SFIA Studio Required Gate | **oui** | agrégat required |
| Secret pattern scan (dans validate) | **oui** | ciblé studio |
| Trailing whitespace check | **oui** | dans validate |
| Markdown/link validation dédié | **non observé** | O-A52-PR03 — ne pas inventer |
| Path scope validation | **via Detect** | `is_studio_path` |

## Titre PR candidat

`docs(sfia-studio): record A5.2 reservations authority and atomicity decisions`

## Description PR candidate

```markdown
## Summary
- Cadre le pack documentaire A5.2 (réserves, autorité, atomicité) pour Option A v3-native.
- Enregistre les décisions Morris A52-D01…D05 exactement comme arbitrées.
- Conserve B5, R1, R-T-A3-1, R-T-A3-2 et R-M01 ouvertes ; C1–C3 non validées ; C4 tracking merged into B5 — not validated.
- Ne consomme aucune décision F (F04 UNCHANGED ; F03/F08–F13 NOT DECIDED).
- N’ouvre pas T-A7 ; n’autorise ni delivery preparation, ni delivery, ni cutover.
- Aucun changement runtime / modeled / workflow / method / OPS1.

## Decisions recorded
- A52-D01 = `.3` + STOP BEFORE DELIVERY
- A52-D02 = `.2`
- A52-D03 = `.3` then `.1` before real Critical
- A52-D04 = `.4`
- A52-D05 = `.2 + .4`

## Scope
- 2 commits on `framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity`
- 7 files under `…/a5-2-reservations-authority-atomicity-framing/` only (+785 cumulative)

## Test plan
- [ ] Confirm CI Detect / Build / Required Gate
- [ ] Confirm no runtime paths changed
- [ ] Confirm PR body anti-claims (T-A7 NOT OPEN ; no F auto-consumption)
```

## Branche projet non poussée

Oui — upstream absent · remote absente · aucun push projet ce cycle.

## Actions non exécutées

- modification pack · commit · amend · rebase · reset
- push branche projet · création PR · merge · modification main
- fermeture réserve · consommation F · COMPLETE · T-A7 OPEN
- delivery/cutover · persistence/IAM · runtime/modeled/workflow/method/OPS1
- Notion/CMP · suppression branche/worktree

## Gate candidat

`GO PUSH A5.2 DECISION RECORD BRANCH AND CREATE DOCUMENTARY PR — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`

---

## Contenu complet des sept fichiers (HEAD)


### Fichier : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/README.md`

```markdown
# A5.2 — Framing réserves, autorité et atomicité

| Champ | Valeur |
|-------|--------|
| **Gate framing (historique)** | `GO FRAME A5.2 T-A7 RESERVATIONS AUTHORITY AND ATOMICITY — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Gate décisions consommé** | `GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |
| **Cycle / profil** | 15 — Capitalisation / enregistrement (+1 · 3 · 6 · 9 · 10 · 13) · Critical |
| **Base** | `origin/main` @ `9f578ea1677ce65cffb4b05ddf5649a21a5b240c` (merge PR #280) |
| **Branche locale** | `framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity` |
| **Statut A5.2** | `MORRIS DECISIONS RECORDED — IMPLEMENTATION AND RESERVE CLOSURE NOT AUTHORIZED` |
| **T-A7** | `NOT OPEN` |
| **Delivery preparation** | `NOT AUTHORIZED` |
| **Delivery** | `NOT AUTHORIZED` |
| **Cutover** | `NOT AUTHORIZED` |
| **T-A6 COMPLETE** | `NOT DECLARED` |
| **Option A** | `NOT COMPLETE` |
| **Persistence / IAM / RGPD prod** | persistence `NOT SELECTED` · IAM `NOT SELECTED` · RGPD prod `NOT VALIDATED` |
| **F04** | `DECIDED — UNCHANGED` |
| **F03 / F08–F13** | `NOT DECIDED` |
| **Push / PR** | **aucun** |

## Objectif

Enregistrer strictement dans le pack documentaire A5.2 les décisions Morris A52-D01…D05, sans fermer de réserve technique, sans consommer de décision F, sans autoriser delivery/cutover, sans ouvrir T-A7.

## Fichiers

| Fichier | Rôle |
|---------|------|
| `01-scope-and-source-truth.md` | Périmètre, sources, vérité Git, gate d’enregistrement |
| `02-reservation-dependency-matrix.md` | Registre + dépendances + décisions A52 liées |
| `03-authority-model-and-gaps.md` | Autorité / Confirm Critical / A52-D03 ADOPTED |
| `04-atomicity-model-and-options.md` | Atomicité / A52-D02 · A52-D04 ADOPTED |
| `05-r-m01-and-c1-c4-assessment.md` | R-M01 · C1–C4 / A52-D05 ADOPTED |
| `06-morris-arbitration-pack.md` | Bulletin Morris exact A52-D01…D05 |

## Décisions Morris enregistrées

| ID | Choix Morris | Statut |
|----|--------------|--------|
| A52-D01 | structure `.3` + borne `STOP BEFORE DELIVERY` | `DECIDED — ADOPTED BY MORRIS` |
| A52-D02 | `.2` | `DECIDED — ADOPTED BY MORRIS` |
| A52-D03 | `.3`, puis `.1` avant toute exécution Critical réelle | `DECIDED — ADOPTED BY MORRIS` |
| A52-D04 | `.4` | `DECIDED — ADOPTED BY MORRIS` |
| A52-D05 | `.2 + .4` | `DECIDED — ADOPTED BY MORRIS` |

## Effets

- Normes décisionnelles A52-D01…D05 adoptées documentairement.
- C4 tracking fusionné dans B5 (suivi) ; C1–C3 rattachées à R-M01 / plan de preuves.
- Simulation/read-only Critical immédiat ; API publique (.1) obligatoire avant real Critical.
- Atomicité mémoire/logique maintenant ; garantie durable obligatoire avant real execution.
- Stop obligatoire avant delivery tant que B5 non résolue / non acceptée-bornée par gate ultérieur.
- Préparation documentaire de F08/F09/F10 — **sans** consommation.

## Non-effets

- B5, R1, R-M01 restent `OPEN` ; R-T-A3-1 / R-T-A3-2 restent `OPEN HARD`.
- C1–C3 restent `RECOMMENDED — NOT VALIDATED` ; C4 = `TRACKING MERGED INTO B5 — NOT VALIDATED`.
- Aucune F consommée automatiquement (`NO F-DECISION AUTO-CONSUMPTION`).
- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE` · T-A7 `NOT OPEN`.
- Delivery preparation / delivery / cutover `NOT AUTHORIZED`.
- Persistence / IAM `NOT SELECTED` · RGPD prod `NOT VALIDATED`.
- Aucune implémentation runtime / modeled / workflow / `method/**` / OPS1.

## Anti-claims

- enregistrement A5.2 ≠ fermeture de réserve
- `DECIDED — ADOPTED BY MORRIS` ≠ `CLOSED` / `SATISFIED` / `VALIDATED`
- A52-D0x ≠ consommation F08/F09/F10
- `.3` autorité ≠ API implémentée
- `.4` mémoire ≠ persistence sélectionnée / T-A6 COMPLETE déclaré
- `STOP BEFORE DELIVERY` ≠ stop avant delivery preparation
- framing préparé ≠ décisions enregistrées (phases distinctes)
- aucun delivery / cutover autorisé

## Verdict

`SFIA STUDIO A5.2 MORRIS DECISIONS RECORDED LOCALLY — A52-D01 THROUGH A52-D05 ADOPTED EXACTLY AS DIRECTED — B5 R1 R-T-A3-1 R-T-A3-2 AND R-M01 REMAIN OPEN — C1-C3 REMAIN NOT VALIDATED AND C4 TRACKING MERGED INTO B5 — NO F-DECISION AUTO-CONSUMPTION — PROJECT BRANCH NOT PUSHED — T-A7 NOT OPEN — DELIVERY AND CUTOVER NOT AUTHORIZED — T-A6 NOT DECLARED COMPLETE — OPTION A NOT COMPLETE`

## Gate candidat suivant

`GO REVIEW MORRIS A5.2 DECISION RECORD AND PREPARE DOCUMENTARY PR READINESS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`

**Statut :** `NOT CONSUMED`
```

### Fichier : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/01-scope-and-source-truth.md`

```markdown
# 01 — Périmètre et vérité des sources

| Champ | Valeur |
|-------|--------|
| **Statut framing (historique)** | `PREPARED — MORRIS ARBITRATION REQUIRED` (commit `cd7c00e…`) |
| **Statut actuel** | `MORRIS DECISIONS RECORDED — IMPLEMENTATION AND RESERVE CLOSURE NOT AUTHORIZED` |
| **Gate décisions** | `GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 09:50:54 CEST (+0200) |
| **Base** | `9f578ea1677ce65cffb4b05ddf5649a21a5b240c` |
| **PR intégrée** | #280 MERGED |
| **Head historique** | `b7a5e827fddb7e80f03a71b3b64ca89271ede0a6` (ancêtre de main) |
| **Post-merge checks** | Detect / Build / Required Gate = **success** (run `30335038884`) |

## 1. Vérité Git

- `origin/main` = merge commit PR #280.
- Pack T-A7 présent (6 fichiers, blobs inchangés).
- Worktree A5.2 créé depuis `origin/main` ; upstream **absent** ; aucun push.
- Framing A5.2 préparé au commit `cd7c00e918c721738e792594bdd22907cf859cf2` (7 fichiers, +581).
- Enregistrement décisions Morris = commit documentaire distinct **sur** ce framing (pas d’amend).

## 2. Périmètre inclus

- B5, R1, R-T-A3-1, R-T-A3-2, R-M01, C1–C4
- modèles d’autorité et d’atomicité
- options d’arbitrage A52-D01…D05
- **transcription documentaire** des choix Morris A52-D01…D05
- relation avec F04 (inchangée) et F08–F10 (préparation uniquement — **non consommées**)

## 3. Périmètre exclu

- delivery preparation / delivery / cutover / ouverture T-A7
- implémentation runtime/modeled/workflow/`method/**`/OPS1
- sélection persistence/IAM/RGPD opérationnelle
- consommation F03/F08–F13
- déclaration T-A6 COMPLETE / Option A COMPLETE
- fermeture ou acceptation implicite de réserve technique
- U-M02 (hors arbitrage principal ; cité comme dépendance)

## 4. Sources consultées (ref = HEAD framing)

| Path | Blob | Statut | Utilité |
|------|------|--------|---------|
| `t-a7-legacy-cutover-framing/README.md` | `4ca57f0f…` | PRESENT | anti-claims, A5.2 trajectoire |
| `…/01-framing-and-scope.md` | `0713d718…` | PRESENT | frontière D-T-A6-10 |
| `…/02-t-a7-cutover-preconditions.md` | `dbf50357…` | PRESENT | P12–P19, stops |
| `…/03-t-a6-and-option-a-completion-criteria.md` | `0714e6fe…` | PRESENT | T6-C10/C11, OA |
| `…/04-reservations-risks-and-stop-conditions.md` | `dc0514ed…` | PRESENT | registre B5/R1/HARD/C* |
| `…/05-morris-decision-pack.md` | `aacef4d7…` | PRESENT | F04 DECIDED ; F08–F13 NOT DECIDED |
| `t-a1-…/03-persistence-consistency-and-failure-modes.md` | `665d63d3…` | PRESENT | LPS store |
| `t-a1-…/04-tests-evidence-and-reserves.md` | `c37af565…` | PRESENT | réserves T-A1 |
| `t-a2-…/03-persistence-consistency-and-failure-modes.md` | `28d0b73a…` | PRESENT | Project↔Cycle, R1 |
| `t-a2-…/04-tests-evidence-and-reserves.md` | `d1918f5b…` | PRESENT | B5/R1 evidence |
| `t-a3-…/03-authority-n2-n3-and-audit.md` | `3e5b62f7…` | PRESENT | N2/N3, audit |
| `t-a3-…/04-supersession-consistency-and-failure-modes.md` | `9b4e0598…` | PRESENT | R-T-A3-1/2 |
| `t-a3-…/05-tests-evidence-and-reserves.md` | `97f37d56…` | PRESENT | réserves HARD |
| `t-a4-…/04-authority-critical-and-supersession.md` | `4870b577…` | PRESENT | Confirm Critical |
| `t-a6-…/03-decisions.md` | `5e8f2f1a…` | PRESENT | D-T-A6-09/10/12 |
| `t-a6-…/20-pr-readiness.md` | `bc38c61f…` | PRESENT | dettes C* |
| `sfia-v3-technical-architecture/…/11-legacy-isolation-migration-and-cutover-architecture.md` | `fc2e410b…` | PRESENT | AT cutover (nom canonique) |
| `…/12-delivery-slices-dependencies-and-technical-gates.md` | `493634be…` | PRESENT | slices / gates |
| `…/13-technical-architecture-validation-and-decision-pack.md` | `b93b7cae…` | PRESENT | outbox / ordre T-A* |
| `v3-native-option-a/23-next-option-a-step-after-t-a6.md` | `e87deff7…` | PRESENT | B5/R1 structurantes |
| docs studio `20`/`23`/`24`/`31`/`33` (POC/framing) | divers | PRESENT | contexte historique ; non décisionnels A5.2 |
| handoff session décision blob `37a101d1…` | `37a101d1…` | PRESENT | bulletin vierge → choix Morris |

### Observation source naming

Les chemins AT-11/AT-13 cités parfois sous d’autres intitulés ; **substituts traçables présents** sous les noms canoniques ci-dessus. **Pas de STOP.**

## 5. Termes

| Terme | Sens A5.2 |
|-------|-----------|
| **OPEN** | réserve non fermée / non résolue techniquement |
| **OPEN HARD** | bloque exécution réelle / Confirm Critical réel / persistence saine |
| **RECOMMENDED — NOT VALIDATED** | recommandation technique T-A6 non validée Morris |
| **DECIDED — ADOPTED BY MORRIS** | choix A52 enregistré ; **≠** fermeture réserve / VALIDATED |
| **TRACKING MERGED INTO B5 — NOT VALIDATED** | C4 suivi via B5 ; **≠** VALIDATED |
| **mémoire** | fake-only / in-memory ; ≠ production |
| **durable** | persistence réelle future ; **NOT SELECTED** |
| **STOP BEFORE DELIVERY** | stop avant delivery (pas avant delivery preparation) |

## 6. Hypothèses (explicites, non décisions nouvelles)

1. Le cadrage read-only reste possible avec HARD OPEN (confirmé pack T-A7).
2. T-A6 COMPLETE mémoire (F04) exige arbitrage/bornage R-M01 + C1–C4 avant déclaration — A52-D05 borne cette future application sans déclarer COMPLETE.
3. F08/F09/F10 restent NOT DECIDED après enregistrement A5.2 jusqu’à bulletin Morris séparé.

## 7. Ambiguïtés / obsolescences

- Matrices delivery/cutover restent **candidate** tant que F08/F09 NOT DECIDED.
- « VALIDATION SATISFIED » côté delivery T-A6 (R-M01 technique) ≠ fermeture réserve.
- Fusion C4→B5 : **adoptée comme tracking** (A52-D01.3) ; C4 **NOT VALIDATED** ; B5 **OPEN**.
```

### Fichier : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/02-reservation-dependency-matrix.md`

```markdown
# 02 — Registre et matrice de dépendances

## 1. Registre A5.2 (après décisions Morris)

| ID | Statut technique | Décision A52 | Problème | Domaine | Invariant | Preuves clés |
|----|------------------|--------------|----------|---------|-----------|--------------|
| **B5** | `OPEN` | A52-D01 `.3` + `STOP BEFORE DELIVERY` | LPS satellite ids non carry-forward | LPS / lifecycle | pas d’invention d’API downstream ; ids satellites non propagés ; **stop avant delivery** tant que non résolue / non acceptée-bornée | T-A2 reserves · T-A3 decisionIds partiel · T-A7 doc 04 |
| **R1** | `OPEN` | A52-D02 `.2` | Atomicité Project↔Cycle absente | consistency | stores séparés ; txn logique + compensation/idempotence avant delivery ; durable avant real-exec | T-A2 §failure modes · T-A7 P13/P19 |
| **R-T-A3-1** | `OPEN HARD` | A52-D03 `.3` puis `.1` avant real Critical | Pas d’API publique Critical acknowledge | authority | Critical reste `proposed` ; Confirm fail-closed ; simulation/read-only maintenant | T-A3/T-A4 · SC-07 |
| **R-T-A3-2** | `OPEN HARD` | A52-D04 `.4` | Atomicité Decision↔LPS/Epistemic résiduelle | consistency | mémoire bornée jusqu’à future déclaration T-A6 COMPLETE mémoire ; pas de résolution durable ici | T-A3 B4 · T-A4 Option B |
| **R-M01** | `OPEN` | A52-D05 `.2 + .4` | ClaimEvaluator readiness — closure Morris | claims / gouvernance | readiness ≠ fermeture ; C1–C3 rattachées ; résolution/acceptation/bornage avant future déclaration T-A6 COMPLETE | T-A6 D3/D5 · F04 |
| **C1** | `RECOMMENDED — NOT VALIDATED` | A52-D05 (via R-M01) | Evidence status jointure PASS | claims | status join avant PASS | T-A6 DEL-C1 |
| **C2** | `RECOMMENDED — NOT VALIDATED` | A52-D05 (via R-M01) | Self-review Critical | authority/claims | self-review Critical interdit | D-T-A6-05/06 |
| **C3** | `RECOMMENDED — NOT VALIDATED` | A52-D05 (via R-M01) | Bornes taille/nombre | perf / sécurité | bornes principles D-T-A6-09 | T-A6 DEL-C3 |
| **C4** | `TRACKING MERGED INTO B5 — NOT VALIDATED` | A52-D01 / A52-D05 | LPS satellite → fusion B5 | LPS | tracking via B5 ; **pas** VALIDATED | T-A6 DEL-C4 |

**Aucune réserve n’est CLOSED, SATISFIED, ni acceptée comme résolue technique par cet enregistrement.**

## 2. Matrice de dépendances / blocage

Légende : **N** = non · **Y** = oui · **C** = candidate / selon F08–F10 · **I** = indirect · **V** = via autre réserve · **S** = stop documentaire A52

| Réserve | Domaine | Invariant | Dépend de | Bloque framing | Bloque delivery prep | Bloque delivery | Bloque cutover | Bloque real execution | Bloque T-A6 COMPLETE | Bloque product complete | Bloque production |
|---------|---------|-----------|-----------|----------------|----------------------|-----------------|----------------|------------------------|----------------------|-------------------------|-------------------|
| B5 | LPS | carry-forward satellites | T-A1 API ; C4 | N | N (stratégie doc OK ; sujet peut rester ouvert) | **S / Y** (STOP BEFORE DELIVERY) | Y | I | C (via C4/T6) | C | I |
| R1 | Project↔Cycle | atomicité cross-store | persistence future ; R-T-A3-2 | N | N (stratégie) | Y | Y | Y | N mémoire (bornable) | N immédiat | Y |
| R-T-A3-1 | Critical ack | fail-closed Confirm | T-A2 API ; IAM futur | N | N (design) | C si Critical path | C si activation | **Y HARD** | N mémoire | C large | Y |
| R-T-A3-2 | Decision links | pas de partial orphan | R1 ; outbox/txn futur | N | N (design) | Y | Y | **Y HARD** | N mémoire | N immédiat | Y |
| R-M01 | ClaimEvaluator | closure Morris | C1–C3 ; schema | N | C | C | I | I | **Y** (F04 + A52-D05.4) | Partiel | Y |
| C1 | Evidence join | status PASS | R-M01 ; U-M02 | N | N | Dette | I | I | **Y** (via R-M01) | Partiel | I |
| C2 | Self-review | no self Critical | D-T-A6-05/06 | N | N | Dette | I | I | **Y** | I | I |
| C3 | Bornes | size/count | D-T-A6-09 ; U-M02 | N | N | Dette | I | Y payload réel | **Y** | I | Y |
| C4 | LPS merge | fusion B5 tracking | **B5** | N | V B5 | V B5 + STOP | V B5 | I | V B5 | V B5 | I |

### Justifications synthétiques

- **Framing N pour toutes** : pack T-A7 + SC — HARD n’empêchent pas cadrage read-only.
- **Real execution Y pour R-T-A3-1/2 et R1** : SC-07 ; A52-D03.3 interdit real Critical maintenant.
- **T-A6 COMPLETE** : F04 + A52-D05.4 exigent R-M01 + C1–C4 résolus/acceptés/bornés avant déclaration ; B5 via C4.
- **Delivery** : A52-D01 impose **STOP BEFORE DELIVERY** pour B5 ; F08/F09 encore NOT DECIDED.
- **Delivery preparation** : sujet B5 peut rester ouvert pendant framing et delivery preparation ; stop = **avant delivery**, pas avant prep.

## 3. Priorisation A5.2 (inchangée)

1. **P0 HARD exécution** : R-T-A3-1, R-T-A3-2
2. **P0 structurante état** : B5 (+ C4), R1
3. **P1 complétude mémoire** : R-M01, C1–C3
4. **Hors A5.2 principal** : U-M02 (dépendance citée)

## 4. Dettes acceptables maintenant

| Dette | Acceptable pour | Non acceptable pour |
|-------|-----------------|---------------------|
| B5/R1 OPEN | framing ; prep documentaire | delivery (B5 STOP) / cutover sans stratégie + stops |
| HARD OPEN | framing ; design ; simulation | Confirm Critical réel ; exec réelle |
| C1–C3 NOT VALIDATED | framing | déclaration T-A6 COMPLETE |
| C4 tracking merged | framing ; registre unifié | claim VALIDATED / CLOSED |
| R-M01 OPEN | framing ; runtime mémoire observé | claim COMPLETE / fermeture réserve |

## 5. Preuves requises (futures, non produites ici)

- B5 : contrat T-A1 carry-forward + tests adversarial **ou** acceptation/bornage Morris avant delivery
- R1 / R-T-A3-2 : design txn/outbox/saga **sans** sélection DB
- R-T-A3-1 : spec API ack + identité + audit + anti-replay (précondition `.1`)
- R-M01/C* : résolution / acceptation explicite / bornage conforme A4.1 avant future déclaration T-A6 COMPLETE
```

### Fichier : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/03-authority-model-and-gaps.md`

```markdown
# 03 — Modèle d’autorité et gaps (A52-D03)

| Champ | Valeur |
|-------|--------|
| **Réserve liée** | R-T-A3-1 `OPEN HARD` |
| **Arbitrage** | A52-D03 |
| **Choix Morris** | `.3`, puis `.1` avant toute exécution Critical réelle |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
| **IAM** | `NOT SELECTED` |
| **Date enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |

## 1. Modèle actuel (sources T-A3 / T-A4)

- Décision / confirmation : contrats N2/N3 + audit.
- Critical cycle : reste `proposed` sans API publique d’acknowledge.
- Confirm Critical : **fail-closed** (`CRITICAL_NOT_ACKNOWLEDGED`) si ack absent.
- Identité : pas d’IAM sélectionné ; acteurs documentaires ≠ auth production.
- Gouvernance Morris : seule autorité pour gates / COMPLETE / fermeture réserves.

## 2. Matrice autorité

| Action | Acteur | Identité requise | Scope d’autorité | Acknowledge requis | Audit requis | Fail-closed | État actuel | Gap | Décision Morris |
|--------|--------|------------------|------------------|--------------------|--------------|-------------|-------------|-----|-----------------|
| Créer décision | agent / opérateur projet | projet | décision locale | non | oui (trace) | ports fail-closed | fondation mémoire | IAM futur | — |
| Valider (non-Critical) | autorité N2/N3 documentée | métier/projet | validation | selon contrat | oui | oui | partiel mémoire | IAM | — |
| Confirm Critical | autorité Critical | **identité forte** | Critical | **oui** | **oui** | **oui** | Confirm refuse si non ack | **API publique absente** | **A52-D03 `.3` maintenant ; `.1` avant real** |
| Lancer cycle | runtime Option A | système + projet | cycle | non | oui | oui | mémoire | auth prod | — |
| Changer statut cycle Critical | service ack | identité + scope | Critical | **oui** | **oui** | oui | **manquant** | R-T-A3-1 | **A52-D03** |
| Écriture LPS | runtime | système | LPS append | non | oui | oui | mémoire | B5 satellites | A52-D01 |
| Écriture Epistemic | runtime | système | epistemic | non | oui | oui | mémoire | atomicité | A52-D04 |
| Rollback / compensation | runtime | système | store local | non | oui | oui | compensation partielle | résiduel HARD | A52-D04 |
| Action réelle | opérateur + système | IAM | real-exec | selon gate | oui | oui | **NOT AUTHORIZED** | R-T-A3-1 + IAM | F09/F10 futurs |
| Cutover | Morris + ops | gouvernance | cutover | gate dédié | oui | oui | **NOT AUTHORIZED** | F09 | — |
| Déclarer COMPLETE | Morris | gouvernance | T-A6 / Option A | gate dédié | oui | oui | **NOT DECLARED** | F04 bornage | — |

### Distinctions d’autorité

| Type | Rôle | A5.2 |
|------|------|------|
| Métier | validation domaine | ne remplace pas Critical ack |
| Projet | cadrage / delivery prep doc | ≠ real-exec |
| Technique | runtime fail-closed | ne crée pas d’API |
| Gouvernance Morris | gates / COMPLETE / réserves | **seule** fermeture |
| Utilisateur | identité future | `NOT SELECTED` |
| Système/service | appels internes | ≠ API publique authentifiée |

## 3. Gap R-T-A3-1 (HARD) — inchangé techniquement

1. Pas d’API publique Critical acknowledge.
2. Pas de preuve d’identité/scope/anti-replay pour ack.
3. Confirm reste fail-closed — **correct** — mais empêche Confirm Critical réel.
4. Service interne non formalisé comme substitut temporaire autorisé.

**R-T-A3-1 reste `OPEN HARD`.** Aucune fermeture. IAM `NOT SELECTED`. Aucune API implémentée.

## 4. Options A52-D03 (historique)

| Option | Description | Dette | Réversibilité |
|--------|-------------|-------|---------------|
| **A52-D03.1** | API publique authentifiée + auditée obligatoire avant tout Confirm Critical réel | implémentation + IAM | haute si feature-flag |
| **A52-D03.2** | Service interne borné temporaire ; **aucune** exécution publique | dette auth publique | moyenne |
| **A52-D03.3** | Maintenir uniquement simulation / read-only / Confirm fail-closed | bloque real Critical | haute |
| **A52-D03.4** | Autre (spec + proof harness sans exposer API) | design-only | haute |
| **A52-D03.5** | Différer l’arbitrage | HARD reste OPEN | — |

## 5. Décision Morris adoptée

`DECIDED — ADOPTED BY MORRIS` → **A52-D03.3** à court terme, avec trajectoire obligatoire vers **A52-D03.1** avant toute exécution Critical réelle.

### Norme

- simulation / read-only uniquement à court terme ;
- aucune exécution Critical réelle autorisée par cet enregistrement ;
- fail-closed obligatoire ;
- API publique authentifiée, autorisée, auditée et anti-replay obligatoire **avant** toute exécution Critical réelle (précondition future `.1` — **pas** une implémentation).

### Non-effets

- R-T-A3-1 n’est **pas** CLOSED ;
- IAM non sélectionné ;
- aucune API implémentée ;
- aucun delivery / cutover ;
- F09 / F10 restent `NOT DECIDED` (préparation seulement).

## 6. Critères minimum futurs pour `.1` (non sélection techno)

- identité de l’acteur
- scope d’autorité Critical
- acknowledge explicite
- audit immuable
- anti-replay
- fail-closed préservé
```

### Fichier : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/04-atomicity-model-and-options.md`

```markdown
# 04 — Modèle d’atomicité et options (A52-D02 / A52-D04)

| Champ | Valeur |
|-------|--------|
| **Réserves** | R1 `OPEN` · R-T-A3-2 `OPEN HARD` |
| **Arbitrages** | A52-D02 · A52-D04 |
| **A52-D02 choix** | `.2` — `DECIDED — ADOPTED BY MORRIS` |
| **A52-D04 choix** | `.4` — `DECIDED — ADOPTED BY MORRIS` |
| **Persistence** | `NOT SELECTED` |
| **Date enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |

## 1. Invariants

- Pas de transaction distribuée inventée en mémoire.
- Stores séparés (Project/LPS, Cycle/Epistemic, Decision).
- Fail-closed ports ; compensation locale documentée ; résiduels possibles.
- Mémoire ≠ garantie durable.
- **Aucune technologie de base de données sélectionnée.**

## 2. Matrice atomicité

| Flux | Écritures | Invariant | Risque partial failure | État actuel | Option transactionnelle | Compensation | Idempotence | Persistence requise | Acceptable en mémoire | Gate |
|------|-----------|-----------|------------------------|-------------|-------------------------|--------------|-------------|----------------------|----------------------|------|
| Project → Cycle | Project + Cycle | cohérence lien | orphan cycle/project | R1 OPEN ; norme A52-D02.2 | txn logique / outbox futur | rollback cycle si LPS fail | obligatoire avant delivery | avant real-exec | **oui borné** | A52-D02 |
| Decision → LPS | Decision + LPS | link decisionIds | orphan decision/LPS | R-T-A3-2 ; A52-D04.4 mémoire | unit of work / outbox futur | compensate | à définir durable | avant delivery durable | oui avec résidu | A52-D04 |
| Decision → Epistemic | Decision + Epistemic | link epistemic | orphan | R-T-A3-2 ; A52-D04.4 | idem | compensate | à définir | avant delivery durable | oui avec résidu | A52-D04 |
| Confirm Critical → ack | status Critical + audit | ack avant Confirm | Confirm sans ack | fail-closed ; API absente ; A52-D03.3 | n/a authority | refuse Confirm | n/a | auth durable | simulation OK | A52-D03 |
| Evidence → ClaimEvaluation | Evidence + Claim | status join | PASS invalide | C1 NOT VALIDATED | contrôles D3 | fail-closed PASS | snapshots | Evidence physique future | fake-only OK | A52-D05 |
| lifecycle → LPS satellites | LPS append fields | carry-forward | perte ids | **B5 OPEN** + STOP before delivery | évolution contrat T-A1 | n/a | version append | si satellites durables | partiel (`decisionIds`) | A52-D01 |
| rollback / restore | store local | pas d’état fantôme | compensate fail | résiduel HARD | saga contrôlée | oui partielle | clés idempotentes | avant prod | partielle | A52-D04 |
| double-write legacy/v3 | legacy + OA | isolation | split-brain | hors A5.2 principal | hold flags futurs | — | — | cutover | non | T-A7 levels |

## 3. A52-D02 (R1) — décidé

| Option | Description |
|--------|-------------|
| **A52-D02.1** | Atomicité stricte obligatoire avant delivery |
| **A52-D02.2** | Transaction logique + compensation/idempotence avant delivery ; atomicité durable avant real execution |
| **A52-D02.3** | Cohérence éventuelle bornée acceptée |
| **A52-D02.4** | Autre (preuve adversarial only) |
| **A52-D02.5** | Différer |

**Décision Morris :** `DECIDED — ADOPTED BY MORRIS` → **A52-D02.2**

### Norme

- transaction logique ;
- compensation ;
- idempotence ;
- gestion des partial failures avant delivery ;
- garantie durable obligatoire avant real execution.

### Non-effets

- R1 reste `OPEN` ;
- aucune DB ou technologie transactionnelle sélectionnée ;
- aucune production autorisée ;
- F10 reste `NOT DECIDED`.

## 4. A52-D04 (R-T-A3-2) — décidé

| Option | Description |
|--------|-------------|
| **A52-D04.1** | Transaction unique obligatoire |
| **A52-D04.2** | Outbox / unit of work durable |
| **A52-D04.3** | Saga / compensation contrôlée |
| **A52-D04.4** | Mémoire bornée uniquement jusqu’à une future déclaration T-A6 COMPLETE mémoire |
| **A52-D04.5** | Autre |
| **A52-D04.6** | Différer |

**Décision Morris :** `DECIDED — ADOPTED BY MORRIS` → **A52-D04.4**

### Norme

- atomicité Decision↔LPS/Epistemic bornée au périmètre mémoire ;
- acceptable uniquement jusqu’à une **future** déclaration T-A6 COMPLETE mémoire ;
- aucune résolution durable ici ;
- aucune exécution réelle ou production ;
- `.4` ≠ déclaration T-A6 COMPLETE maintenant.

### Non-effets

- R-T-A3-2 reste `OPEN HARD` ;
- T-A6 COMPLETE reste `NOT DECLARED` ;
- aucune technologie sélectionnée ;
- F08 / F10 restent `NOT DECIDED`.

## 5. Relation R1 ↔ R-T-A3-2

Famille atomicité cross-store. Traitées séparément (A52-D02 vs A52-D04) avec cohérence de stratégie (mémoire/logique maintenant ; durable avant real-exec). Ne pas fusionner les réserves. Les deux restent ouvertes techniquement.
```

### Fichier : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/05-r-m01-and-c1-c4-assessment.md`

```markdown
# 05 — R-M01 et C1–C4 (A52-D05)

| Champ | Valeur |
|-------|--------|
| **R-M01** | `OPEN` |
| **C1–C3** | `RECOMMENDED — NOT VALIDATED` |
| **C4** | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
| **F04** | `DECIDED — UNCHANGED` |
| **Arbitrage** | A52-D05 |
| **Choix Morris** | `.2 + .4` |
| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
| **T-A6 COMPLETE** | `NOT DECLARED` |
| **Date enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |

## 1. R-M01

- Problème : readiness ClaimEvaluator + closure Morris.
- Preuve technique delivery T-A6 : runtime mémoire / D3–D5 observés ; **fermeture réserve non effectuée**.
- Relation T-A6 COMPLETE : critère F04 — R-M01 doit être résolu / accepté / borné avant déclaration (A52-D05.4).
- Impact product complete : partiel (claims readiness).
- Après A52-D05 : **R-M01 reste OPEN** ; C1–C3 rattachées ; **pas** de VALIDATED automatique.

## 2. C1 — Evidence status jointure PASS

| Item | Valeur |
|------|--------|
| Recommandation actuelle | TRACK AS DEBT ; enforce technique D3 |
| Preuve | fail-closed status join documenté |
| Dette | NOT VALIDATED Morris |
| Rattachement | **R-M01** (A52-D05.2) |
| Statut | `RECOMMENDED — NOT VALIDATED` |
| Impact T-A6 COMPLETE | **oui** — résolution/acceptation/bornage requis (A52-D05.4) |
| Impact delivery/cutover | dette ; pas HARD framing |

## 3. C2 — Self-review Critical

| Item | Valeur |
|------|--------|
| Recommandation | dette runtime vs invariant modeled |
| Preuve | D-T-A6-05/06 |
| Dette | NOT VALIDATED |
| Rattachement | **R-M01** / plan de preuves (A52-D05.2) |
| Statut | `RECOMMENDED — NOT VALIDATED` |
| Impact T-A6 COMPLETE | oui (F04 + A52-D05.4) |
| Delivery/cutover | indirect |

## 4. C3 — Bornes taille/nombre

| Item | Valeur |
|------|--------|
| Recommandation | principles D-T-A6-09 ; enforcement non validé |
| Preuve | pack principles |
| Dette | bloque payload réel |
| Rattachement | **R-M01** / U-M02 / D-T-A6-09 (A52-D05.2) |
| Statut | `RECOMMENDED — NOT VALIDATED` |
| Impact T-A6 COMPLETE | oui |
| Delivery/cutover | payload réel |

## 5. C4 — Fusion B5 tracking

| Item | Valeur |
|------|--------|
| Recommandation historique | MERGE INTO B5 |
| Preuve | T-A6 DEL-C4 |
| Décision | A52-D01.3 + A52-D05.2 — tracking fusionné dans B5 |
| Statut | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
| Rattachement | **B5** |
| Non-effet | C4 n’est **pas** automatiquement VALIDATED ; B5 n’est **pas** CLOSED |

## 6. Options A52-D05 (historique)

| Option | Description |
|--------|-------------|
| **A52-D05.1** | Arbitrer R-M01 et chaque C séparément |
| **A52-D05.2** | Fusionner C1–C4 dans réserves principales lorsque pertinent (C4→B5 ; C1–C3 sous R-M01) |
| **A52-D05.3** | Borner R-M01 pour T-A6 mémoire et reporter C1–C4 |
| **A52-D05.4** | Exiger résolution/acceptation/bornage avant déclaration T-A6 COMPLETE |
| **A52-D05.5** | Custom |
| **A52-D05.6** | Différer |

## 7. Décision Morris adoptée

`DECIDED — ADOPTED BY MORRIS` → combinaison **A52-D05.2 + A52-D05.4**

### Norme

- C4 est rattachée à B5 (tracking) ;
- C1–C3 sont rattachées à R-M01 ou à son plan de preuves ;
- avant toute **future** déclaration T-A6 COMPLETE, R-M01 et C1–C4 doivent être :
  - résolues ;
  - acceptées explicitement ;
  - ou bornées conformément à A4.1.

### Non-effets

- R-M01 reste `OPEN` ;
- C1–C4 ne deviennent **pas** automatiquement VALIDATED ;
- T-A6 COMPLETE reste `NOT DECLARED` ;
- F04 reste `DECIDED — UNCHANGED` ;
- aucune F consommée.

## 8. Anti-création de décisions inutiles

- Ne pas inventer F15+.
- Ne pas consommer F08 pour clôturer R-M01.
- Ne pas déclarer T-A6 COMPLETE.
- A52-D05 borne la future application de F04 — **sans** la consommer ni la modifier.
```

### Fichier : `projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/06-morris-arbitration-pack.md`

```markdown
# 06 — Pack d’arbitrage Morris (A52-D01…D05)

| Champ | Valeur |
|-------|--------|
| **Statut pack** | `MORRIS DECISIONS RECORDED — IMPLEMENTATION AND RESERVE CLOSURE NOT AUTHORIZED` |
| **Gate consommé** | `GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
| **Date/heure/fuseau** | 2026-07-28 09:50:54 CEST (+0200) |
| **Autorité** | Morris Cleland — décisions explicites |
| **F03 / F08–F13** | `NOT DECIDED` |
| **F04** | `DECIDED — UNCHANGED` |
| **Verdict F** | `NO F-DECISION AUTO-CONSUMPTION` |

---

## Bulletin Morris exact

```
A52-D03 = .3, puis .1 avant real Critical
A52-D04 = .4
A52-D02 = .2
A52-D01 = .3 + STOP BEFORE DELIVERY
A52-D05 = .2 + .4
```

Gate normalisé consommé :

```
GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
```

---

## A52-D01 — B5 / carry-forward LPS (+ C4)

**Question :** Comment traiter B5 (LPS satellite ids non carry-forward) et C4 (fusion candidate) ?

| Option | Description | Impact | Dette | Réversibilité |
|--------|-------------|--------|-------|---------------|
| A52-D01.1 | Fermer B5 avant toute delivery preparation | bloque prep LPS write | faible si fix T-A1 | moyenne |
| A52-D01.2 | Accepter temporairement B5 avec compensation + stop avant delivery | prep possible | haute | haute |
| A52-D01.3 | Intégrer C4 dans B5 comme réserve unique de tracking | simplifie registre | tracking only | haute |
| A52-D01.4 | Autre (carry-forward partiel documenté) | — | — | — |
| A52-D01.5 | Différer | B5/C4 restent ouverts | — | — |

**Choix Morris structure :** `.3`

**Choix Morris borne/stop :** `STOP BEFORE DELIVERY`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

### Norme

- C4 est fusionnée dans le suivi de B5 ;
- B5 devient la réserve principale de carry-forward LPS satellite IDs ;
- le sujet peut rester ouvert pendant framing et delivery preparation ;
- STOP obligatoire **avant delivery** tant que B5 n’est pas :
  - résolue ;
  - ou explicitement acceptée/bornée par Morris dans un gate ultérieur.

### Non-effets

- B5 n’est pas CLOSED ;
- C4 n’est pas automatiquement VALIDATED (`TRACKING MERGED INTO B5 — NOT VALIDATED`) ;
- F08 reste `NOT DECIDED` (A52-D01 prépare F08) ;
- delivery n’est pas autorisé ;
- stop ≠ avant delivery preparation.

---

## A52-D02 — R1 / atomicité Project↔Cycle

**Question :** Quel niveau d’atomicité Project↔Cycle avant delivery vs real execution ?

| Option | Description |
|--------|-------------|
| A52-D02.1 | Atomicité stricte avant delivery |
| A52-D02.2 | Txn logique + compensation/idempotence avant delivery ; durable avant real execution |
| A52-D02.3 | Cohérence éventuelle bornée |
| A52-D02.4 | Autre |
| A52-D02.5 | Différer |

**Choix Morris :** `.2`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

### Norme

- transaction logique ; compensation ; idempotence ;
- gestion des partial failures avant delivery ;
- garantie durable obligatoire avant real execution.

### Non-effets

- R1 reste `OPEN` ;
- aucune DB sélectionnée ;
- F10 reste `NOT DECIDED` (préparation).

---

## A52-D03 — R-T-A3-1 / Critical acknowledge

**Question :** Quelle posture d’autorité Critical avant Confirm réel ?

| Option | Description |
|--------|-------------|
| A52-D03.1 | API publique authentifiée + auditée obligatoire avant Confirm Critical réel |
| A52-D03.2 | Service interne borné temporaire ; aucune exécution publique |
| A52-D03.3 | Simulation / read-only ; Confirm fail-closed maintenu |
| A52-D03.4 | Autre |
| A52-D03.5 | Différer |

**Choix Morris :** `.3`, puis `.1` avant toute exécution Critical réelle

**Statut :** `DECIDED — ADOPTED BY MORRIS`

### Norme

- simulation/read-only uniquement à court terme ;
- aucune exécution Critical réelle ;
- fail-closed obligatoire ;
- API publique authentifiée, autorisée, auditée et anti-replay obligatoire avant real Critical (précondition future — **pas** implémentation).

### Non-effets

- R-T-A3-1 reste `OPEN HARD` ;
- IAM `NOT SELECTED` ;
- F09 / F10 restent `NOT DECIDED` (A52-D03 prépare F09/F10).

---

## A52-D04 — R-T-A3-2 / Decision↔LPS/Epistemic

**Question :** Quelle atomicité Decision↔LPS/Epistemic pour mémoire vs durable ?

| Option | Description |
|--------|-------------|
| A52-D04.1 | Transaction unique obligatoire |
| A52-D04.2 | Outbox / unit of work durable |
| A52-D04.3 | Saga / compensation contrôlée |
| A52-D04.4 | Mémoire bornée jusqu’à future déclaration T-A6 COMPLETE mémoire |
| A52-D04.5 | Autre |
| A52-D04.6 | Différer |

**Choix Morris :** `.4`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

### Norme

- atomicité bornée au périmètre mémoire ;
- acceptable uniquement jusqu’à une future déclaration T-A6 COMPLETE mémoire ;
- aucune résolution durable ; aucune exécution réelle/production.

### Non-effets

- R-T-A3-2 reste `OPEN HARD` ;
- T-A6 COMPLETE `NOT DECLARED` ;
- F10 reste `NOT DECIDED` (A52-D02/D04 préparent F10).

---

## A52-D05 — R-M01 et C1–C4

**Question :** Comment arbitrer R-M01 et C1–C4 sans rouvrir F04 ?

| Option | Description |
|--------|-------------|
| A52-D05.1 | Tout séparer |
| A52-D05.2 | Fusionner C* dans réserves principales (C4→B5 ; C1–C3→R-M01) |
| A52-D05.3 | Borner R-M01 mémoire et reporter C1–C4 |
| A52-D05.4 | Exiger résolution/acceptation/bornage avant déclaration T-A6 COMPLETE |
| A52-D05.5 | Custom |
| A52-D05.6 | Différer |

**Choix Morris :** `.2 + .4`

**Statut :** `DECIDED — ADOPTED BY MORRIS`

### Norme

- C4 rattachée à B5 ; C1–C3 rattachées à R-M01 / plan de preuves ;
- avant future déclaration T-A6 COMPLETE : résolution, acceptation explicite, ou bornage conforme A4.1.

### Non-effets

- R-M01 `OPEN` ; C1–C3 `RECOMMENDED — NOT VALIDATED` ; C4 `TRACKING MERGED INTO B5 — NOT VALIDATED` ;
- T-A6 COMPLETE `NOT DECLARED` ;
- F04 `DECIDED — UNCHANGED` (A52-D05 borne la future application de F04).

---

## Matrice F (relation — aucune auto-consommation)

| F | Statut avant | Impact A5.2 | Arbitrage | Statut après |
|---|--------------|-------------|-----------|--------------|
| F03 | NOT DECIDED | hors périmètre | — | `NOT DECIDED` |
| F04 | DECIDED (A4.1) | A52-D05 borne application future | A52-D05 | `DECIDED — UNCHANGED` |
| F08 | NOT DECIDED | A52-D01 prépare critères B5 | A52-D01 | `NOT DECIDED` |
| F09 | NOT DECIDED | A52-D03 prépare Critical | A52-D03 | `NOT DECIDED` |
| F10 | NOT DECIDED | A52-D02/D03/D04 préparent | A52-D02/D03/D04 | `NOT DECIDED` |
| F11 | NOT DECIDED | hors | — | `NOT DECIDED` |
| F12 | NOT DECIDED | hors | — | `NOT DECIDED` |
| F13 | NOT DECIDED | hors | — | `NOT DECIDED` |

**Verdict :** `NO F-DECISION AUTO-CONSUMPTION`

---

## Statuts après décision

| Item | Statut |
|------|--------|
| A52-D01…D05 | `DECIDED — ADOPTED BY MORRIS` |
| B5 | `OPEN` |
| R1 | `OPEN` |
| R-T-A3-1 | `OPEN HARD` |
| R-T-A3-2 | `OPEN HARD` |
| R-M01 | `OPEN` |
| C1–C3 | `RECOMMENDED — NOT VALIDATED` |
| C4 | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
| F04 | `DECIDED — UNCHANGED` |
| F03 / F08–F13 | `NOT DECIDED` |
| T-A6 COMPLETE | `NOT DECLARED` |
| Option A | `NOT COMPLETE` |
| T-A7 | `NOT OPEN` |
| Delivery preparation | `NOT AUTHORIZED` |
| Delivery | `NOT AUTHORIZED` |
| Cutover | `NOT AUTHORIZED` |
| Persistence | `NOT SELECTED` |
| IAM | `NOT SELECTED` |
| RGPD production | `NOT VALIDATED` |

---

## Effets / non-effets (synthèse)

**Effets :** normes A52 adoptées documentairement ; tracking C4→B5 ; C1–C3→R-M01 ; simulation Critical ; atomicité mémoire/logique ; stop avant delivery pour B5 ; préparation F08/F09/F10.

**Non-effets :** aucune réserve CLOSED ; aucune F consommée ; aucun COMPLETE ; T-A7 NOT OPEN ; delivery/cutover NOT AUTHORIZED ; persistence/IAM NOT SELECTED.

---

## Gates futurs (candidats — NOT CONSUMED)

1. `GO REVIEW MORRIS A5.2 DECISION RECORD AND PREPARE DOCUMENTARY PR READINESS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` ← **immédiat**
2. Résolution B5 avant delivery (ou acceptation/bornage Morris)
3. Conception API autorité Critical (précondition `.1`)
4. Architecture durable atomicité/persistence (sans sélection techno ici)
5. Future déclaration T-A6 COMPLETE (après R-M01/C1–C4)

Aucun gate delivery ou cutover ouvert.
```

---

## Diff cumulé complet (`origin/main...HEAD` / `9f578ea…...bd3608c…`)

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/01-scope-and-source-truth.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/01-scope-and-source-truth.md
new file mode 100644
index 0000000..884ed9a
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/01-scope-and-source-truth.md
@@ -0,0 +1,94 @@
+# 01 — Périmètre et vérité des sources
+
+| Champ | Valeur |
+|-------|--------|
+| **Statut framing (historique)** | `PREPARED — MORRIS ARBITRATION REQUIRED` (commit `cd7c00e…`) |
+| **Statut actuel** | `MORRIS DECISIONS RECORDED — IMPLEMENTATION AND RESERVE CLOSURE NOT AUTHORIZED` |
+| **Gate décisions** | `GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date/heure/fuseau** | 2026-07-28 09:50:54 CEST (+0200) |
+| **Base** | `9f578ea1677ce65cffb4b05ddf5649a21a5b240c` |
+| **PR intégrée** | #280 MERGED |
+| **Head historique** | `b7a5e827fddb7e80f03a71b3b64ca89271ede0a6` (ancêtre de main) |
+| **Post-merge checks** | Detect / Build / Required Gate = **success** (run `30335038884`) |
+
+## 1. Vérité Git
+
+- `origin/main` = merge commit PR #280.
+- Pack T-A7 présent (6 fichiers, blobs inchangés).
+- Worktree A5.2 créé depuis `origin/main` ; upstream **absent** ; aucun push.
+- Framing A5.2 préparé au commit `cd7c00e918c721738e792594bdd22907cf859cf2` (7 fichiers, +581).
+- Enregistrement décisions Morris = commit documentaire distinct **sur** ce framing (pas d’amend).
+
+## 2. Périmètre inclus
+
+- B5, R1, R-T-A3-1, R-T-A3-2, R-M01, C1–C4
+- modèles d’autorité et d’atomicité
+- options d’arbitrage A52-D01…D05
+- **transcription documentaire** des choix Morris A52-D01…D05
+- relation avec F04 (inchangée) et F08–F10 (préparation uniquement — **non consommées**)
+
+## 3. Périmètre exclu
+
+- delivery preparation / delivery / cutover / ouverture T-A7
+- implémentation runtime/modeled/workflow/`method/**`/OPS1
+- sélection persistence/IAM/RGPD opérationnelle
+- consommation F03/F08–F13
+- déclaration T-A6 COMPLETE / Option A COMPLETE
+- fermeture ou acceptation implicite de réserve technique
+- U-M02 (hors arbitrage principal ; cité comme dépendance)
+
+## 4. Sources consultées (ref = HEAD framing)
+
+| Path | Blob | Statut | Utilité |
+|------|------|--------|---------|
+| `t-a7-legacy-cutover-framing/README.md` | `4ca57f0f…` | PRESENT | anti-claims, A5.2 trajectoire |
+| `…/01-framing-and-scope.md` | `0713d718…` | PRESENT | frontière D-T-A6-10 |
+| `…/02-t-a7-cutover-preconditions.md` | `dbf50357…` | PRESENT | P12–P19, stops |
+| `…/03-t-a6-and-option-a-completion-criteria.md` | `0714e6fe…` | PRESENT | T6-C10/C11, OA |
+| `…/04-reservations-risks-and-stop-conditions.md` | `dc0514ed…` | PRESENT | registre B5/R1/HARD/C* |
+| `…/05-morris-decision-pack.md` | `aacef4d7…` | PRESENT | F04 DECIDED ; F08–F13 NOT DECIDED |
+| `t-a1-…/03-persistence-consistency-and-failure-modes.md` | `665d63d3…` | PRESENT | LPS store |
+| `t-a1-…/04-tests-evidence-and-reserves.md` | `c37af565…` | PRESENT | réserves T-A1 |
+| `t-a2-…/03-persistence-consistency-and-failure-modes.md` | `28d0b73a…` | PRESENT | Project↔Cycle, R1 |
+| `t-a2-…/04-tests-evidence-and-reserves.md` | `d1918f5b…` | PRESENT | B5/R1 evidence |
+| `t-a3-…/03-authority-n2-n3-and-audit.md` | `3e5b62f7…` | PRESENT | N2/N3, audit |
+| `t-a3-…/04-supersession-consistency-and-failure-modes.md` | `9b4e0598…` | PRESENT | R-T-A3-1/2 |
+| `t-a3-…/05-tests-evidence-and-reserves.md` | `97f37d56…` | PRESENT | réserves HARD |
+| `t-a4-…/04-authority-critical-and-supersession.md` | `4870b577…` | PRESENT | Confirm Critical |
+| `t-a6-…/03-decisions.md` | `5e8f2f1a…` | PRESENT | D-T-A6-09/10/12 |
+| `t-a6-…/20-pr-readiness.md` | `bc38c61f…` | PRESENT | dettes C* |
+| `sfia-v3-technical-architecture/…/11-legacy-isolation-migration-and-cutover-architecture.md` | `fc2e410b…` | PRESENT | AT cutover (nom canonique) |
+| `…/12-delivery-slices-dependencies-and-technical-gates.md` | `493634be…` | PRESENT | slices / gates |
+| `…/13-technical-architecture-validation-and-decision-pack.md` | `b93b7cae…` | PRESENT | outbox / ordre T-A* |
+| `v3-native-option-a/23-next-option-a-step-after-t-a6.md` | `e87deff7…` | PRESENT | B5/R1 structurantes |
+| docs studio `20`/`23`/`24`/`31`/`33` (POC/framing) | divers | PRESENT | contexte historique ; non décisionnels A5.2 |
+| handoff session décision blob `37a101d1…` | `37a101d1…` | PRESENT | bulletin vierge → choix Morris |
+
+### Observation source naming
+
+Les chemins AT-11/AT-13 cités parfois sous d’autres intitulés ; **substituts traçables présents** sous les noms canoniques ci-dessus. **Pas de STOP.**
+
+## 5. Termes
+
+| Terme | Sens A5.2 |
+|-------|-----------|
+| **OPEN** | réserve non fermée / non résolue techniquement |
+| **OPEN HARD** | bloque exécution réelle / Confirm Critical réel / persistence saine |
+| **RECOMMENDED — NOT VALIDATED** | recommandation technique T-A6 non validée Morris |
+| **DECIDED — ADOPTED BY MORRIS** | choix A52 enregistré ; **≠** fermeture réserve / VALIDATED |
+| **TRACKING MERGED INTO B5 — NOT VALIDATED** | C4 suivi via B5 ; **≠** VALIDATED |
+| **mémoire** | fake-only / in-memory ; ≠ production |
+| **durable** | persistence réelle future ; **NOT SELECTED** |
+| **STOP BEFORE DELIVERY** | stop avant delivery (pas avant delivery preparation) |
+
+## 6. Hypothèses (explicites, non décisions nouvelles)
+
+1. Le cadrage read-only reste possible avec HARD OPEN (confirmé pack T-A7).
+2. T-A6 COMPLETE mémoire (F04) exige arbitrage/bornage R-M01 + C1–C4 avant déclaration — A52-D05 borne cette future application sans déclarer COMPLETE.
+3. F08/F09/F10 restent NOT DECIDED après enregistrement A5.2 jusqu’à bulletin Morris séparé.
+
+## 7. Ambiguïtés / obsolescences
+
+- Matrices delivery/cutover restent **candidate** tant que F08/F09 NOT DECIDED.
+- « VALIDATION SATISFIED » côté delivery T-A6 (R-M01 technique) ≠ fermeture réserve.
+- Fusion C4→B5 : **adoptée comme tracking** (A52-D01.3) ; C4 **NOT VALIDATED** ; B5 **OPEN**.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/02-reservation-dependency-matrix.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/02-reservation-dependency-matrix.md
new file mode 100644
index 0000000..5cadcde
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/02-reservation-dependency-matrix.md
@@ -0,0 +1,65 @@
+# 02 — Registre et matrice de dépendances
+
+## 1. Registre A5.2 (après décisions Morris)
+
+| ID | Statut technique | Décision A52 | Problème | Domaine | Invariant | Preuves clés |
+|----|------------------|--------------|----------|---------|-----------|--------------|
+| **B5** | `OPEN` | A52-D01 `.3` + `STOP BEFORE DELIVERY` | LPS satellite ids non carry-forward | LPS / lifecycle | pas d’invention d’API downstream ; ids satellites non propagés ; **stop avant delivery** tant que non résolue / non acceptée-bornée | T-A2 reserves · T-A3 decisionIds partiel · T-A7 doc 04 |
+| **R1** | `OPEN` | A52-D02 `.2` | Atomicité Project↔Cycle absente | consistency | stores séparés ; txn logique + compensation/idempotence avant delivery ; durable avant real-exec | T-A2 §failure modes · T-A7 P13/P19 |
+| **R-T-A3-1** | `OPEN HARD` | A52-D03 `.3` puis `.1` avant real Critical | Pas d’API publique Critical acknowledge | authority | Critical reste `proposed` ; Confirm fail-closed ; simulation/read-only maintenant | T-A3/T-A4 · SC-07 |
+| **R-T-A3-2** | `OPEN HARD` | A52-D04 `.4` | Atomicité Decision↔LPS/Epistemic résiduelle | consistency | mémoire bornée jusqu’à future déclaration T-A6 COMPLETE mémoire ; pas de résolution durable ici | T-A3 B4 · T-A4 Option B |
+| **R-M01** | `OPEN` | A52-D05 `.2 + .4` | ClaimEvaluator readiness — closure Morris | claims / gouvernance | readiness ≠ fermeture ; C1–C3 rattachées ; résolution/acceptation/bornage avant future déclaration T-A6 COMPLETE | T-A6 D3/D5 · F04 |
+| **C1** | `RECOMMENDED — NOT VALIDATED` | A52-D05 (via R-M01) | Evidence status jointure PASS | claims | status join avant PASS | T-A6 DEL-C1 |
+| **C2** | `RECOMMENDED — NOT VALIDATED` | A52-D05 (via R-M01) | Self-review Critical | authority/claims | self-review Critical interdit | D-T-A6-05/06 |
+| **C3** | `RECOMMENDED — NOT VALIDATED` | A52-D05 (via R-M01) | Bornes taille/nombre | perf / sécurité | bornes principles D-T-A6-09 | T-A6 DEL-C3 |
+| **C4** | `TRACKING MERGED INTO B5 — NOT VALIDATED` | A52-D01 / A52-D05 | LPS satellite → fusion B5 | LPS | tracking via B5 ; **pas** VALIDATED | T-A6 DEL-C4 |
+
+**Aucune réserve n’est CLOSED, SATISFIED, ni acceptée comme résolue technique par cet enregistrement.**
+
+## 2. Matrice de dépendances / blocage
+
+Légende : **N** = non · **Y** = oui · **C** = candidate / selon F08–F10 · **I** = indirect · **V** = via autre réserve · **S** = stop documentaire A52
+
+| Réserve | Domaine | Invariant | Dépend de | Bloque framing | Bloque delivery prep | Bloque delivery | Bloque cutover | Bloque real execution | Bloque T-A6 COMPLETE | Bloque product complete | Bloque production |
+|---------|---------|-----------|-----------|----------------|----------------------|-----------------|----------------|------------------------|----------------------|-------------------------|-------------------|
+| B5 | LPS | carry-forward satellites | T-A1 API ; C4 | N | N (stratégie doc OK ; sujet peut rester ouvert) | **S / Y** (STOP BEFORE DELIVERY) | Y | I | C (via C4/T6) | C | I |
+| R1 | Project↔Cycle | atomicité cross-store | persistence future ; R-T-A3-2 | N | N (stratégie) | Y | Y | Y | N mémoire (bornable) | N immédiat | Y |
+| R-T-A3-1 | Critical ack | fail-closed Confirm | T-A2 API ; IAM futur | N | N (design) | C si Critical path | C si activation | **Y HARD** | N mémoire | C large | Y |
+| R-T-A3-2 | Decision links | pas de partial orphan | R1 ; outbox/txn futur | N | N (design) | Y | Y | **Y HARD** | N mémoire | N immédiat | Y |
+| R-M01 | ClaimEvaluator | closure Morris | C1–C3 ; schema | N | C | C | I | I | **Y** (F04 + A52-D05.4) | Partiel | Y |
+| C1 | Evidence join | status PASS | R-M01 ; U-M02 | N | N | Dette | I | I | **Y** (via R-M01) | Partiel | I |
+| C2 | Self-review | no self Critical | D-T-A6-05/06 | N | N | Dette | I | I | **Y** | I | I |
+| C3 | Bornes | size/count | D-T-A6-09 ; U-M02 | N | N | Dette | I | Y payload réel | **Y** | I | Y |
+| C4 | LPS merge | fusion B5 tracking | **B5** | N | V B5 | V B5 + STOP | V B5 | I | V B5 | V B5 | I |
+
+### Justifications synthétiques
+
+- **Framing N pour toutes** : pack T-A7 + SC — HARD n’empêchent pas cadrage read-only.
+- **Real execution Y pour R-T-A3-1/2 et R1** : SC-07 ; A52-D03.3 interdit real Critical maintenant.
+- **T-A6 COMPLETE** : F04 + A52-D05.4 exigent R-M01 + C1–C4 résolus/acceptés/bornés avant déclaration ; B5 via C4.
+- **Delivery** : A52-D01 impose **STOP BEFORE DELIVERY** pour B5 ; F08/F09 encore NOT DECIDED.
+- **Delivery preparation** : sujet B5 peut rester ouvert pendant framing et delivery preparation ; stop = **avant delivery**, pas avant prep.
+
+## 3. Priorisation A5.2 (inchangée)
+
+1. **P0 HARD exécution** : R-T-A3-1, R-T-A3-2
+2. **P0 structurante état** : B5 (+ C4), R1
+3. **P1 complétude mémoire** : R-M01, C1–C3
+4. **Hors A5.2 principal** : U-M02 (dépendance citée)
+
+## 4. Dettes acceptables maintenant
+
+| Dette | Acceptable pour | Non acceptable pour |
+|-------|-----------------|---------------------|
+| B5/R1 OPEN | framing ; prep documentaire | delivery (B5 STOP) / cutover sans stratégie + stops |
+| HARD OPEN | framing ; design ; simulation | Confirm Critical réel ; exec réelle |
+| C1–C3 NOT VALIDATED | framing | déclaration T-A6 COMPLETE |
+| C4 tracking merged | framing ; registre unifié | claim VALIDATED / CLOSED |
+| R-M01 OPEN | framing ; runtime mémoire observé | claim COMPLETE / fermeture réserve |
+
+## 5. Preuves requises (futures, non produites ici)
+
+- B5 : contrat T-A1 carry-forward + tests adversarial **ou** acceptation/bornage Morris avant delivery
+- R1 / R-T-A3-2 : design txn/outbox/saga **sans** sélection DB
+- R-T-A3-1 : spec API ack + identité + audit + anti-replay (précondition `.1`)
+- R-M01/C* : résolution / acceptation explicite / bornage conforme A4.1 avant future déclaration T-A6 COMPLETE
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/03-authority-model-and-gaps.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/03-authority-model-and-gaps.md
new file mode 100644
index 0000000..87bf876
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/03-authority-model-and-gaps.md
@@ -0,0 +1,92 @@
+# 03 — Modèle d’autorité et gaps (A52-D03)
+
+| Champ | Valeur |
+|-------|--------|
+| **Réserve liée** | R-T-A3-1 `OPEN HARD` |
+| **Arbitrage** | A52-D03 |
+| **Choix Morris** | `.3`, puis `.1` avant toute exécution Critical réelle |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+| **IAM** | `NOT SELECTED` |
+| **Date enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |
+
+## 1. Modèle actuel (sources T-A3 / T-A4)
+
+- Décision / confirmation : contrats N2/N3 + audit.
+- Critical cycle : reste `proposed` sans API publique d’acknowledge.
+- Confirm Critical : **fail-closed** (`CRITICAL_NOT_ACKNOWLEDGED`) si ack absent.
+- Identité : pas d’IAM sélectionné ; acteurs documentaires ≠ auth production.
+- Gouvernance Morris : seule autorité pour gates / COMPLETE / fermeture réserves.
+
+## 2. Matrice autorité
+
+| Action | Acteur | Identité requise | Scope d’autorité | Acknowledge requis | Audit requis | Fail-closed | État actuel | Gap | Décision Morris |
+|--------|--------|------------------|------------------|--------------------|--------------|-------------|-------------|-----|-----------------|
+| Créer décision | agent / opérateur projet | projet | décision locale | non | oui (trace) | ports fail-closed | fondation mémoire | IAM futur | — |
+| Valider (non-Critical) | autorité N2/N3 documentée | métier/projet | validation | selon contrat | oui | oui | partiel mémoire | IAM | — |
+| Confirm Critical | autorité Critical | **identité forte** | Critical | **oui** | **oui** | **oui** | Confirm refuse si non ack | **API publique absente** | **A52-D03 `.3` maintenant ; `.1` avant real** |
+| Lancer cycle | runtime Option A | système + projet | cycle | non | oui | oui | mémoire | auth prod | — |
+| Changer statut cycle Critical | service ack | identité + scope | Critical | **oui** | **oui** | oui | **manquant** | R-T-A3-1 | **A52-D03** |
+| Écriture LPS | runtime | système | LPS append | non | oui | oui | mémoire | B5 satellites | A52-D01 |
+| Écriture Epistemic | runtime | système | epistemic | non | oui | oui | mémoire | atomicité | A52-D04 |
+| Rollback / compensation | runtime | système | store local | non | oui | oui | compensation partielle | résiduel HARD | A52-D04 |
+| Action réelle | opérateur + système | IAM | real-exec | selon gate | oui | oui | **NOT AUTHORIZED** | R-T-A3-1 + IAM | F09/F10 futurs |
+| Cutover | Morris + ops | gouvernance | cutover | gate dédié | oui | oui | **NOT AUTHORIZED** | F09 | — |
+| Déclarer COMPLETE | Morris | gouvernance | T-A6 / Option A | gate dédié | oui | oui | **NOT DECLARED** | F04 bornage | — |
+
+### Distinctions d’autorité
+
+| Type | Rôle | A5.2 |
+|------|------|------|
+| Métier | validation domaine | ne remplace pas Critical ack |
+| Projet | cadrage / delivery prep doc | ≠ real-exec |
+| Technique | runtime fail-closed | ne crée pas d’API |
+| Gouvernance Morris | gates / COMPLETE / réserves | **seule** fermeture |
+| Utilisateur | identité future | `NOT SELECTED` |
+| Système/service | appels internes | ≠ API publique authentifiée |
+
+## 3. Gap R-T-A3-1 (HARD) — inchangé techniquement
+
+1. Pas d’API publique Critical acknowledge.
+2. Pas de preuve d’identité/scope/anti-replay pour ack.
+3. Confirm reste fail-closed — **correct** — mais empêche Confirm Critical réel.
+4. Service interne non formalisé comme substitut temporaire autorisé.
+
+**R-T-A3-1 reste `OPEN HARD`.** Aucune fermeture. IAM `NOT SELECTED`. Aucune API implémentée.
+
+## 4. Options A52-D03 (historique)
+
+| Option | Description | Dette | Réversibilité |
+|--------|-------------|-------|---------------|
+| **A52-D03.1** | API publique authentifiée + auditée obligatoire avant tout Confirm Critical réel | implémentation + IAM | haute si feature-flag |
+| **A52-D03.2** | Service interne borné temporaire ; **aucune** exécution publique | dette auth publique | moyenne |
+| **A52-D03.3** | Maintenir uniquement simulation / read-only / Confirm fail-closed | bloque real Critical | haute |
+| **A52-D03.4** | Autre (spec + proof harness sans exposer API) | design-only | haute |
+| **A52-D03.5** | Différer l’arbitrage | HARD reste OPEN | — |
+
+## 5. Décision Morris adoptée
+
+`DECIDED — ADOPTED BY MORRIS` → **A52-D03.3** à court terme, avec trajectoire obligatoire vers **A52-D03.1** avant toute exécution Critical réelle.
+
+### Norme
+
+- simulation / read-only uniquement à court terme ;
+- aucune exécution Critical réelle autorisée par cet enregistrement ;
+- fail-closed obligatoire ;
+- API publique authentifiée, autorisée, auditée et anti-replay obligatoire **avant** toute exécution Critical réelle (précondition future `.1` — **pas** une implémentation).
+
+### Non-effets
+
+- R-T-A3-1 n’est **pas** CLOSED ;
+- IAM non sélectionné ;
+- aucune API implémentée ;
+- aucun delivery / cutover ;
+- F09 / F10 restent `NOT DECIDED` (préparation seulement).
+
+## 6. Critères minimum futurs pour `.1` (non sélection techno)
+
+- identité de l’acteur
+- scope d’autorité Critical
+- acknowledge explicite
+- audit immuable
+- anti-replay
+- fail-closed préservé
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/04-atomicity-model-and-options.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/04-atomicity-model-and-options.md
new file mode 100644
index 0000000..f693709
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/04-atomicity-model-and-options.md
@@ -0,0 +1,90 @@
+# 04 — Modèle d’atomicité et options (A52-D02 / A52-D04)
+
+| Champ | Valeur |
+|-------|--------|
+| **Réserves** | R1 `OPEN` · R-T-A3-2 `OPEN HARD` |
+| **Arbitrages** | A52-D02 · A52-D04 |
+| **A52-D02 choix** | `.2` — `DECIDED — ADOPTED BY MORRIS` |
+| **A52-D04 choix** | `.4` — `DECIDED — ADOPTED BY MORRIS` |
+| **Persistence** | `NOT SELECTED` |
+| **Date enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |
+
+## 1. Invariants
+
+- Pas de transaction distribuée inventée en mémoire.
+- Stores séparés (Project/LPS, Cycle/Epistemic, Decision).
+- Fail-closed ports ; compensation locale documentée ; résiduels possibles.
+- Mémoire ≠ garantie durable.
+- **Aucune technologie de base de données sélectionnée.**
+
+## 2. Matrice atomicité
+
+| Flux | Écritures | Invariant | Risque partial failure | État actuel | Option transactionnelle | Compensation | Idempotence | Persistence requise | Acceptable en mémoire | Gate |
+|------|-----------|-----------|------------------------|-------------|-------------------------|--------------|-------------|----------------------|----------------------|------|
+| Project → Cycle | Project + Cycle | cohérence lien | orphan cycle/project | R1 OPEN ; norme A52-D02.2 | txn logique / outbox futur | rollback cycle si LPS fail | obligatoire avant delivery | avant real-exec | **oui borné** | A52-D02 |
+| Decision → LPS | Decision + LPS | link decisionIds | orphan decision/LPS | R-T-A3-2 ; A52-D04.4 mémoire | unit of work / outbox futur | compensate | à définir durable | avant delivery durable | oui avec résidu | A52-D04 |
+| Decision → Epistemic | Decision + Epistemic | link epistemic | orphan | R-T-A3-2 ; A52-D04.4 | idem | compensate | à définir | avant delivery durable | oui avec résidu | A52-D04 |
+| Confirm Critical → ack | status Critical + audit | ack avant Confirm | Confirm sans ack | fail-closed ; API absente ; A52-D03.3 | n/a authority | refuse Confirm | n/a | auth durable | simulation OK | A52-D03 |
+| Evidence → ClaimEvaluation | Evidence + Claim | status join | PASS invalide | C1 NOT VALIDATED | contrôles D3 | fail-closed PASS | snapshots | Evidence physique future | fake-only OK | A52-D05 |
+| lifecycle → LPS satellites | LPS append fields | carry-forward | perte ids | **B5 OPEN** + STOP before delivery | évolution contrat T-A1 | n/a | version append | si satellites durables | partiel (`decisionIds`) | A52-D01 |
+| rollback / restore | store local | pas d’état fantôme | compensate fail | résiduel HARD | saga contrôlée | oui partielle | clés idempotentes | avant prod | partielle | A52-D04 |
+| double-write legacy/v3 | legacy + OA | isolation | split-brain | hors A5.2 principal | hold flags futurs | — | — | cutover | non | T-A7 levels |
+
+## 3. A52-D02 (R1) — décidé
+
+| Option | Description |
+|--------|-------------|
+| **A52-D02.1** | Atomicité stricte obligatoire avant delivery |
+| **A52-D02.2** | Transaction logique + compensation/idempotence avant delivery ; atomicité durable avant real execution |
+| **A52-D02.3** | Cohérence éventuelle bornée acceptée |
+| **A52-D02.4** | Autre (preuve adversarial only) |
+| **A52-D02.5** | Différer |
+
+**Décision Morris :** `DECIDED — ADOPTED BY MORRIS` → **A52-D02.2**
+
+### Norme
+
+- transaction logique ;
+- compensation ;
+- idempotence ;
+- gestion des partial failures avant delivery ;
+- garantie durable obligatoire avant real execution.
+
+### Non-effets
+
+- R1 reste `OPEN` ;
+- aucune DB ou technologie transactionnelle sélectionnée ;
+- aucune production autorisée ;
+- F10 reste `NOT DECIDED`.
+
+## 4. A52-D04 (R-T-A3-2) — décidé
+
+| Option | Description |
+|--------|-------------|
+| **A52-D04.1** | Transaction unique obligatoire |
+| **A52-D04.2** | Outbox / unit of work durable |
+| **A52-D04.3** | Saga / compensation contrôlée |
+| **A52-D04.4** | Mémoire bornée uniquement jusqu’à une future déclaration T-A6 COMPLETE mémoire |
+| **A52-D04.5** | Autre |
+| **A52-D04.6** | Différer |
+
+**Décision Morris :** `DECIDED — ADOPTED BY MORRIS` → **A52-D04.4**
+
+### Norme
+
+- atomicité Decision↔LPS/Epistemic bornée au périmètre mémoire ;
+- acceptable uniquement jusqu’à une **future** déclaration T-A6 COMPLETE mémoire ;
+- aucune résolution durable ici ;
+- aucune exécution réelle ou production ;
+- `.4` ≠ déclaration T-A6 COMPLETE maintenant.
+
+### Non-effets
+
+- R-T-A3-2 reste `OPEN HARD` ;
+- T-A6 COMPLETE reste `NOT DECLARED` ;
+- aucune technologie sélectionnée ;
+- F08 / F10 restent `NOT DECIDED`.
+
+## 5. Relation R1 ↔ R-T-A3-2
+
+Famille atomicité cross-store. Traitées séparément (A52-D02 vs A52-D04) avec cohérence de stratégie (mémoire/logique maintenant ; durable avant real-exec). Ne pas fusionner les réserves. Les deux restent ouvertes techniquement.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/05-r-m01-and-c1-c4-assessment.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/05-r-m01-and-c1-c4-assessment.md
new file mode 100644
index 0000000..1d1b8cf
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/05-r-m01-and-c1-c4-assessment.md
@@ -0,0 +1,107 @@
+# 05 — R-M01 et C1–C4 (A52-D05)
+
+| Champ | Valeur |
+|-------|--------|
+| **R-M01** | `OPEN` |
+| **C1–C3** | `RECOMMENDED — NOT VALIDATED` |
+| **C4** | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
+| **F04** | `DECIDED — UNCHANGED` |
+| **Arbitrage** | A52-D05 |
+| **Choix Morris** | `.2 + .4` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+| **T-A6 COMPLETE** | `NOT DECLARED` |
+| **Date enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |
+
+## 1. R-M01
+
+- Problème : readiness ClaimEvaluator + closure Morris.
+- Preuve technique delivery T-A6 : runtime mémoire / D3–D5 observés ; **fermeture réserve non effectuée**.
+- Relation T-A6 COMPLETE : critère F04 — R-M01 doit être résolu / accepté / borné avant déclaration (A52-D05.4).
+- Impact product complete : partiel (claims readiness).
+- Après A52-D05 : **R-M01 reste OPEN** ; C1–C3 rattachées ; **pas** de VALIDATED automatique.
+
+## 2. C1 — Evidence status jointure PASS
+
+| Item | Valeur |
+|------|--------|
+| Recommandation actuelle | TRACK AS DEBT ; enforce technique D3 |
+| Preuve | fail-closed status join documenté |
+| Dette | NOT VALIDATED Morris |
+| Rattachement | **R-M01** (A52-D05.2) |
+| Statut | `RECOMMENDED — NOT VALIDATED` |
+| Impact T-A6 COMPLETE | **oui** — résolution/acceptation/bornage requis (A52-D05.4) |
+| Impact delivery/cutover | dette ; pas HARD framing |
+
+## 3. C2 — Self-review Critical
+
+| Item | Valeur |
+|------|--------|
+| Recommandation | dette runtime vs invariant modeled |
+| Preuve | D-T-A6-05/06 |
+| Dette | NOT VALIDATED |
+| Rattachement | **R-M01** / plan de preuves (A52-D05.2) |
+| Statut | `RECOMMENDED — NOT VALIDATED` |
+| Impact T-A6 COMPLETE | oui (F04 + A52-D05.4) |
+| Delivery/cutover | indirect |
+
+## 4. C3 — Bornes taille/nombre
+
+| Item | Valeur |
+|------|--------|
+| Recommandation | principles D-T-A6-09 ; enforcement non validé |
+| Preuve | pack principles |
+| Dette | bloque payload réel |
+| Rattachement | **R-M01** / U-M02 / D-T-A6-09 (A52-D05.2) |
+| Statut | `RECOMMENDED — NOT VALIDATED` |
+| Impact T-A6 COMPLETE | oui |
+| Delivery/cutover | payload réel |
+
+## 5. C4 — Fusion B5 tracking
+
+| Item | Valeur |
+|------|--------|
+| Recommandation historique | MERGE INTO B5 |
+| Preuve | T-A6 DEL-C4 |
+| Décision | A52-D01.3 + A52-D05.2 — tracking fusionné dans B5 |
+| Statut | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
+| Rattachement | **B5** |
+| Non-effet | C4 n’est **pas** automatiquement VALIDATED ; B5 n’est **pas** CLOSED |
+
+## 6. Options A52-D05 (historique)
+
+| Option | Description |
+|--------|-------------|
+| **A52-D05.1** | Arbitrer R-M01 et chaque C séparément |
+| **A52-D05.2** | Fusionner C1–C4 dans réserves principales lorsque pertinent (C4→B5 ; C1–C3 sous R-M01) |
+| **A52-D05.3** | Borner R-M01 pour T-A6 mémoire et reporter C1–C4 |
+| **A52-D05.4** | Exiger résolution/acceptation/bornage avant déclaration T-A6 COMPLETE |
+| **A52-D05.5** | Custom |
+| **A52-D05.6** | Différer |
+
+## 7. Décision Morris adoptée
+
+`DECIDED — ADOPTED BY MORRIS` → combinaison **A52-D05.2 + A52-D05.4**
+
+### Norme
+
+- C4 est rattachée à B5 (tracking) ;
+- C1–C3 sont rattachées à R-M01 ou à son plan de preuves ;
+- avant toute **future** déclaration T-A6 COMPLETE, R-M01 et C1–C4 doivent être :
+  - résolues ;
+  - acceptées explicitement ;
+  - ou bornées conformément à A4.1.
+
+### Non-effets
+
+- R-M01 reste `OPEN` ;
+- C1–C4 ne deviennent **pas** automatiquement VALIDATED ;
+- T-A6 COMPLETE reste `NOT DECLARED` ;
+- F04 reste `DECIDED — UNCHANGED` ;
+- aucune F consommée.
+
+## 8. Anti-création de décisions inutiles
+
+- Ne pas inventer F15+.
+- Ne pas consommer F08 pour clôturer R-M01.
+- Ne pas déclarer T-A6 COMPLETE.
+- A52-D05 borne la future application de F04 — **sans** la consommer ni la modifier.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/06-morris-arbitration-pack.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/06-morris-arbitration-pack.md
new file mode 100644
index 0000000..0fd1c10
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/06-morris-arbitration-pack.md
@@ -0,0 +1,251 @@
+# 06 — Pack d’arbitrage Morris (A52-D01…D05)
+
+| Champ | Valeur |
+|-------|--------|
+| **Statut pack** | `MORRIS DECISIONS RECORDED — IMPLEMENTATION AND RESERVE CLOSURE NOT AUTHORIZED` |
+| **Gate consommé** | `GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date/heure/fuseau** | 2026-07-28 09:50:54 CEST (+0200) |
+| **Autorité** | Morris Cleland — décisions explicites |
+| **F03 / F08–F13** | `NOT DECIDED` |
+| **F04** | `DECIDED — UNCHANGED` |
+| **Verdict F** | `NO F-DECISION AUTO-CONSUMPTION` |
+
+---
+
+## Bulletin Morris exact
+
+```
+A52-D03 = .3, puis .1 avant real Critical
+A52-D04 = .4
+A52-D02 = .2
+A52-D01 = .3 + STOP BEFORE DELIVERY
+A52-D05 = .2 + .4
+```
+
+Gate normalisé consommé :
+
+```
+GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
+```
+
+---
+
+## A52-D01 — B5 / carry-forward LPS (+ C4)
+
+**Question :** Comment traiter B5 (LPS satellite ids non carry-forward) et C4 (fusion candidate) ?
+
+| Option | Description | Impact | Dette | Réversibilité |
+|--------|-------------|--------|-------|---------------|
+| A52-D01.1 | Fermer B5 avant toute delivery preparation | bloque prep LPS write | faible si fix T-A1 | moyenne |
+| A52-D01.2 | Accepter temporairement B5 avec compensation + stop avant delivery | prep possible | haute | haute |
+| A52-D01.3 | Intégrer C4 dans B5 comme réserve unique de tracking | simplifie registre | tracking only | haute |
+| A52-D01.4 | Autre (carry-forward partiel documenté) | — | — | — |
+| A52-D01.5 | Différer | B5/C4 restent ouverts | — | — |
+
+**Choix Morris structure :** `.3`
+
+**Choix Morris borne/stop :** `STOP BEFORE DELIVERY`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+### Norme
+
+- C4 est fusionnée dans le suivi de B5 ;
+- B5 devient la réserve principale de carry-forward LPS satellite IDs ;
+- le sujet peut rester ouvert pendant framing et delivery preparation ;
+- STOP obligatoire **avant delivery** tant que B5 n’est pas :
+  - résolue ;
+  - ou explicitement acceptée/bornée par Morris dans un gate ultérieur.
+
+### Non-effets
+
+- B5 n’est pas CLOSED ;
+- C4 n’est pas automatiquement VALIDATED (`TRACKING MERGED INTO B5 — NOT VALIDATED`) ;
+- F08 reste `NOT DECIDED` (A52-D01 prépare F08) ;
+- delivery n’est pas autorisé ;
+- stop ≠ avant delivery preparation.
+
+---
+
+## A52-D02 — R1 / atomicité Project↔Cycle
+
+**Question :** Quel niveau d’atomicité Project↔Cycle avant delivery vs real execution ?
+
+| Option | Description |
+|--------|-------------|
+| A52-D02.1 | Atomicité stricte avant delivery |
+| A52-D02.2 | Txn logique + compensation/idempotence avant delivery ; durable avant real execution |
+| A52-D02.3 | Cohérence éventuelle bornée |
+| A52-D02.4 | Autre |
+| A52-D02.5 | Différer |
+
+**Choix Morris :** `.2`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+### Norme
+
+- transaction logique ; compensation ; idempotence ;
+- gestion des partial failures avant delivery ;
+- garantie durable obligatoire avant real execution.
+
+### Non-effets
+
+- R1 reste `OPEN` ;
+- aucune DB sélectionnée ;
+- F10 reste `NOT DECIDED` (préparation).
+
+---
+
+## A52-D03 — R-T-A3-1 / Critical acknowledge
+
+**Question :** Quelle posture d’autorité Critical avant Confirm réel ?
+
+| Option | Description |
+|--------|-------------|
+| A52-D03.1 | API publique authentifiée + auditée obligatoire avant Confirm Critical réel |
+| A52-D03.2 | Service interne borné temporaire ; aucune exécution publique |
+| A52-D03.3 | Simulation / read-only ; Confirm fail-closed maintenu |
+| A52-D03.4 | Autre |
+| A52-D03.5 | Différer |
+
+**Choix Morris :** `.3`, puis `.1` avant toute exécution Critical réelle
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+### Norme
+
+- simulation/read-only uniquement à court terme ;
+- aucune exécution Critical réelle ;
+- fail-closed obligatoire ;
+- API publique authentifiée, autorisée, auditée et anti-replay obligatoire avant real Critical (précondition future — **pas** implémentation).
+
+### Non-effets
+
+- R-T-A3-1 reste `OPEN HARD` ;
+- IAM `NOT SELECTED` ;
+- F09 / F10 restent `NOT DECIDED` (A52-D03 prépare F09/F10).
+
+---
+
+## A52-D04 — R-T-A3-2 / Decision↔LPS/Epistemic
+
+**Question :** Quelle atomicité Decision↔LPS/Epistemic pour mémoire vs durable ?
+
+| Option | Description |
+|--------|-------------|
+| A52-D04.1 | Transaction unique obligatoire |
+| A52-D04.2 | Outbox / unit of work durable |
+| A52-D04.3 | Saga / compensation contrôlée |
+| A52-D04.4 | Mémoire bornée jusqu’à future déclaration T-A6 COMPLETE mémoire |
+| A52-D04.5 | Autre |
+| A52-D04.6 | Différer |
+
+**Choix Morris :** `.4`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+### Norme
+
+- atomicité bornée au périmètre mémoire ;
+- acceptable uniquement jusqu’à une future déclaration T-A6 COMPLETE mémoire ;
+- aucune résolution durable ; aucune exécution réelle/production.
+
+### Non-effets
+
+- R-T-A3-2 reste `OPEN HARD` ;
+- T-A6 COMPLETE `NOT DECLARED` ;
+- F10 reste `NOT DECIDED` (A52-D02/D04 préparent F10).
+
+---
+
+## A52-D05 — R-M01 et C1–C4
+
+**Question :** Comment arbitrer R-M01 et C1–C4 sans rouvrir F04 ?
+
+| Option | Description |
+|--------|-------------|
+| A52-D05.1 | Tout séparer |
+| A52-D05.2 | Fusionner C* dans réserves principales (C4→B5 ; C1–C3→R-M01) |
+| A52-D05.3 | Borner R-M01 mémoire et reporter C1–C4 |
+| A52-D05.4 | Exiger résolution/acceptation/bornage avant déclaration T-A6 COMPLETE |
+| A52-D05.5 | Custom |
+| A52-D05.6 | Différer |
+
+**Choix Morris :** `.2 + .4`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+### Norme
+
+- C4 rattachée à B5 ; C1–C3 rattachées à R-M01 / plan de preuves ;
+- avant future déclaration T-A6 COMPLETE : résolution, acceptation explicite, ou bornage conforme A4.1.
+
+### Non-effets
+
+- R-M01 `OPEN` ; C1–C3 `RECOMMENDED — NOT VALIDATED` ; C4 `TRACKING MERGED INTO B5 — NOT VALIDATED` ;
+- T-A6 COMPLETE `NOT DECLARED` ;
+- F04 `DECIDED — UNCHANGED` (A52-D05 borne la future application de F04).
+
+---
+
+## Matrice F (relation — aucune auto-consommation)
+
+| F | Statut avant | Impact A5.2 | Arbitrage | Statut après |
+|---|--------------|-------------|-----------|--------------|
+| F03 | NOT DECIDED | hors périmètre | — | `NOT DECIDED` |
+| F04 | DECIDED (A4.1) | A52-D05 borne application future | A52-D05 | `DECIDED — UNCHANGED` |
+| F08 | NOT DECIDED | A52-D01 prépare critères B5 | A52-D01 | `NOT DECIDED` |
+| F09 | NOT DECIDED | A52-D03 prépare Critical | A52-D03 | `NOT DECIDED` |
+| F10 | NOT DECIDED | A52-D02/D03/D04 préparent | A52-D02/D03/D04 | `NOT DECIDED` |
+| F11 | NOT DECIDED | hors | — | `NOT DECIDED` |
+| F12 | NOT DECIDED | hors | — | `NOT DECIDED` |
+| F13 | NOT DECIDED | hors | — | `NOT DECIDED` |
+
+**Verdict :** `NO F-DECISION AUTO-CONSUMPTION`
+
+---
+
+## Statuts après décision
+
+| Item | Statut |
+|------|--------|
+| A52-D01…D05 | `DECIDED — ADOPTED BY MORRIS` |
+| B5 | `OPEN` |
+| R1 | `OPEN` |
+| R-T-A3-1 | `OPEN HARD` |
+| R-T-A3-2 | `OPEN HARD` |
+| R-M01 | `OPEN` |
+| C1–C3 | `RECOMMENDED — NOT VALIDATED` |
+| C4 | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
+| F04 | `DECIDED — UNCHANGED` |
+| F03 / F08–F13 | `NOT DECIDED` |
+| T-A6 COMPLETE | `NOT DECLARED` |
+| Option A | `NOT COMPLETE` |
+| T-A7 | `NOT OPEN` |
+| Delivery preparation | `NOT AUTHORIZED` |
+| Delivery | `NOT AUTHORIZED` |
+| Cutover | `NOT AUTHORIZED` |
+| Persistence | `NOT SELECTED` |
+| IAM | `NOT SELECTED` |
+| RGPD production | `NOT VALIDATED` |
+
+---
+
+## Effets / non-effets (synthèse)
+
+**Effets :** normes A52 adoptées documentairement ; tracking C4→B5 ; C1–C3→R-M01 ; simulation Critical ; atomicité mémoire/logique ; stop avant delivery pour B5 ; préparation F08/F09/F10.
+
+**Non-effets :** aucune réserve CLOSED ; aucune F consommée ; aucun COMPLETE ; T-A7 NOT OPEN ; delivery/cutover NOT AUTHORIZED ; persistence/IAM NOT SELECTED.
+
+---
+
+## Gates futurs (candidats — NOT CONSUMED)
+
+1. `GO REVIEW MORRIS A5.2 DECISION RECORD AND PREPARE DOCUMENTARY PR READINESS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` ← **immédiat**
+2. Résolution B5 avant delivery (ou acceptation/bornage Morris)
+3. Conception API autorité Critical (précondition `.1`)
+4. Architecture durable atomicité/persistence (sans sélection techno ici)
+5. Future déclaration T-A6 COMPLETE (après R-M01/C1–C4)
+
+Aucun gate delivery ou cutover ouvert.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/README.md
new file mode 100644
index 0000000..146eb12
--- /dev/null
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/README.md
@@ -0,0 +1,86 @@
+# A5.2 — Framing réserves, autorité et atomicité
+
+| Champ | Valeur |
+|-------|--------|
+| **Gate framing (historique)** | `GO FRAME A5.2 T-A7 RESERVATIONS AUTHORITY AND ATOMICITY — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Gate décisions consommé** | `GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date/heure/fuseau enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |
+| **Cycle / profil** | 15 — Capitalisation / enregistrement (+1 · 3 · 6 · 9 · 10 · 13) · Critical |
+| **Base** | `origin/main` @ `9f578ea1677ce65cffb4b05ddf5649a21a5b240c` (merge PR #280) |
+| **Branche locale** | `framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity` |
+| **Statut A5.2** | `MORRIS DECISIONS RECORDED — IMPLEMENTATION AND RESERVE CLOSURE NOT AUTHORIZED` |
+| **T-A7** | `NOT OPEN` |
+| **Delivery preparation** | `NOT AUTHORIZED` |
+| **Delivery** | `NOT AUTHORIZED` |
+| **Cutover** | `NOT AUTHORIZED` |
+| **T-A6 COMPLETE** | `NOT DECLARED` |
+| **Option A** | `NOT COMPLETE` |
+| **Persistence / IAM / RGPD prod** | persistence `NOT SELECTED` · IAM `NOT SELECTED` · RGPD prod `NOT VALIDATED` |
+| **F04** | `DECIDED — UNCHANGED` |
+| **F03 / F08–F13** | `NOT DECIDED` |
+| **Push / PR** | **aucun** |
+
+## Objectif
+
+Enregistrer strictement dans le pack documentaire A5.2 les décisions Morris A52-D01…D05, sans fermer de réserve technique, sans consommer de décision F, sans autoriser delivery/cutover, sans ouvrir T-A7.
+
+## Fichiers
+
+| Fichier | Rôle |
+|---------|------|
+| `01-scope-and-source-truth.md` | Périmètre, sources, vérité Git, gate d’enregistrement |
+| `02-reservation-dependency-matrix.md` | Registre + dépendances + décisions A52 liées |
+| `03-authority-model-and-gaps.md` | Autorité / Confirm Critical / A52-D03 ADOPTED |
+| `04-atomicity-model-and-options.md` | Atomicité / A52-D02 · A52-D04 ADOPTED |
+| `05-r-m01-and-c1-c4-assessment.md` | R-M01 · C1–C4 / A52-D05 ADOPTED |
+| `06-morris-arbitration-pack.md` | Bulletin Morris exact A52-D01…D05 |
+
+## Décisions Morris enregistrées
+
+| ID | Choix Morris | Statut |
+|----|--------------|--------|
+| A52-D01 | structure `.3` + borne `STOP BEFORE DELIVERY` | `DECIDED — ADOPTED BY MORRIS` |
+| A52-D02 | `.2` | `DECIDED — ADOPTED BY MORRIS` |
+| A52-D03 | `.3`, puis `.1` avant toute exécution Critical réelle | `DECIDED — ADOPTED BY MORRIS` |
+| A52-D04 | `.4` | `DECIDED — ADOPTED BY MORRIS` |
+| A52-D05 | `.2 + .4` | `DECIDED — ADOPTED BY MORRIS` |
+
+## Effets
+
+- Normes décisionnelles A52-D01…D05 adoptées documentairement.
+- C4 tracking fusionné dans B5 (suivi) ; C1–C3 rattachées à R-M01 / plan de preuves.
+- Simulation/read-only Critical immédiat ; API publique (.1) obligatoire avant real Critical.
+- Atomicité mémoire/logique maintenant ; garantie durable obligatoire avant real execution.
+- Stop obligatoire avant delivery tant que B5 non résolue / non acceptée-bornée par gate ultérieur.
+- Préparation documentaire de F08/F09/F10 — **sans** consommation.
+
+## Non-effets
+
+- B5, R1, R-M01 restent `OPEN` ; R-T-A3-1 / R-T-A3-2 restent `OPEN HARD`.
+- C1–C3 restent `RECOMMENDED — NOT VALIDATED` ; C4 = `TRACKING MERGED INTO B5 — NOT VALIDATED`.
+- Aucune F consommée automatiquement (`NO F-DECISION AUTO-CONSUMPTION`).
+- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE` · T-A7 `NOT OPEN`.
+- Delivery preparation / delivery / cutover `NOT AUTHORIZED`.
+- Persistence / IAM `NOT SELECTED` · RGPD prod `NOT VALIDATED`.
+- Aucune implémentation runtime / modeled / workflow / `method/**` / OPS1.
+
+## Anti-claims
+
+- enregistrement A5.2 ≠ fermeture de réserve
+- `DECIDED — ADOPTED BY MORRIS` ≠ `CLOSED` / `SATISFIED` / `VALIDATED`
+- A52-D0x ≠ consommation F08/F09/F10
+- `.3` autorité ≠ API implémentée
+- `.4` mémoire ≠ persistence sélectionnée / T-A6 COMPLETE déclaré
+- `STOP BEFORE DELIVERY` ≠ stop avant delivery preparation
+- framing préparé ≠ décisions enregistrées (phases distinctes)
+- aucun delivery / cutover autorisé
+
+## Verdict
+
+`SFIA STUDIO A5.2 MORRIS DECISIONS RECORDED LOCALLY — A52-D01 THROUGH A52-D05 ADOPTED EXACTLY AS DIRECTED — B5 R1 R-T-A3-1 R-T-A3-2 AND R-M01 REMAIN OPEN — C1-C3 REMAIN NOT VALIDATED AND C4 TRACKING MERGED INTO B5 — NO F-DECISION AUTO-CONSUMPTION — PROJECT BRANCH NOT PUSHED — T-A7 NOT OPEN — DELIVERY AND CUTOVER NOT AUTHORIZED — T-A6 NOT DECLARED COMPLETE — OPTION A NOT COMPLETE`
+
+## Gate candidat suivant
+
+`GO REVIEW MORRIS A5.2 DECISION RECORD AND PREPARE DOCUMENTARY PR READINESS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`
+
+**Statut :** `NOT CONSUMED`
```

---

## Diff décision record complet (`cd7c00e…` → `bd3608c…`)

```diff
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/01-scope-and-source-truth.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/01-scope-and-source-truth.md
index 9713b0b..884ed9a 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/01-scope-and-source-truth.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/01-scope-and-source-truth.md
@@ -2,7 +2,10 @@
 
 | Champ | Valeur |
 |-------|--------|
-| **Statut** | `PREPARED — MORRIS ARBITRATION REQUIRED` |
+| **Statut framing (historique)** | `PREPARED — MORRIS ARBITRATION REQUIRED` (commit `cd7c00e…`) |
+| **Statut actuel** | `MORRIS DECISIONS RECORDED — IMPLEMENTATION AND RESERVE CLOSURE NOT AUTHORIZED` |
+| **Gate décisions** | `GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date/heure/fuseau** | 2026-07-28 09:50:54 CEST (+0200) |
 | **Base** | `9f578ea1677ce65cffb4b05ddf5649a21a5b240c` |
 | **PR intégrée** | #280 MERGED |
 | **Head historique** | `b7a5e827fddb7e80f03a71b3b64ca89271ede0a6` (ancêtre de main) |
@@ -13,13 +16,16 @@
 - `origin/main` = merge commit PR #280.
 - Pack T-A7 présent (6 fichiers, blobs inchangés).
 - Worktree A5.2 créé depuis `origin/main` ; upstream **absent** ; aucun push.
+- Framing A5.2 préparé au commit `cd7c00e918c721738e792594bdd22907cf859cf2` (7 fichiers, +581).
+- Enregistrement décisions Morris = commit documentaire distinct **sur** ce framing (pas d’amend).
 
 ## 2. Périmètre inclus
 
 - B5, R1, R-T-A3-1, R-T-A3-2, R-M01, C1–C4
 - modèles d’autorité et d’atomicité
 - options d’arbitrage A52-D01…D05
-- relation avec F04 (inchangée) et F08–F10 (préparation uniquement)
+- **transcription documentaire** des choix Morris A52-D01…D05
+- relation avec F04 (inchangée) et F08–F10 (préparation uniquement — **non consommées**)
 
 ## 3. Périmètre exclu
 
@@ -28,10 +34,10 @@
 - sélection persistence/IAM/RGPD opérationnelle
 - consommation F03/F08–F13
 - déclaration T-A6 COMPLETE / Option A COMPLETE
-- fermeture ou acceptation implicite de réserve
+- fermeture ou acceptation implicite de réserve technique
 - U-M02 (hors arbitrage principal ; cité comme dépendance)
 
-## 4. Sources consultées (ref = HEAD)
+## 4. Sources consultées (ref = HEAD framing)
 
 | Path | Blob | Statut | Utilité |
 |------|------|--------|---------|
@@ -56,6 +62,7 @@
 | `…/13-technical-architecture-validation-and-decision-pack.md` | `b93b7cae…` | PRESENT | outbox / ordre T-A* |
 | `v3-native-option-a/23-next-option-a-step-after-t-a6.md` | `e87deff7…` | PRESENT | B5/R1 structurantes |
 | docs studio `20`/`23`/`24`/`31`/`33` (POC/framing) | divers | PRESENT | contexte historique ; non décisionnels A5.2 |
+| handoff session décision blob `37a101d1…` | `37a101d1…` | PRESENT | bulletin vierge → choix Morris |
 
 ### Observation source naming
 
@@ -65,21 +72,23 @@ Les chemins AT-11/AT-13 cités parfois sous d’autres intitulés ; **substituts
 
 | Terme | Sens A5.2 |
 |-------|-----------|
-| **OPEN** | réserve non arbitrée / non bornée formellement |
+| **OPEN** | réserve non fermée / non résolue techniquement |
 | **OPEN HARD** | bloque exécution réelle / Confirm Critical réel / persistence saine |
 | **RECOMMENDED — NOT VALIDATED** | recommandation technique T-A6 non validée Morris |
-| **RECOMMENDED — NOT DECIDED** | recommandation A5.2 ; **pas** une décision |
+| **DECIDED — ADOPTED BY MORRIS** | choix A52 enregistré ; **≠** fermeture réserve / VALIDATED |
+| **TRACKING MERGED INTO B5 — NOT VALIDATED** | C4 suivi via B5 ; **≠** VALIDATED |
 | **mémoire** | fake-only / in-memory ; ≠ production |
 | **durable** | persistence réelle future ; **NOT SELECTED** |
+| **STOP BEFORE DELIVERY** | stop avant delivery (pas avant delivery preparation) |
 
-## 6. Hypothèses (explicites, non décisions)
+## 6. Hypothèses (explicites, non décisions nouvelles)
 
 1. Le cadrage read-only reste possible avec HARD OPEN (confirmé pack T-A7).
-2. T-A6 COMPLETE mémoire (F04) exige arbitrage/bornage R-M01 + C1–C4 avant déclaration, pas avant ce framing.
-3. F08/F09/F10 resteront NOT DECIDED après A5.2 jusqu’à bulletin Morris séparé.
+2. T-A6 COMPLETE mémoire (F04) exige arbitrage/bornage R-M01 + C1–C4 avant déclaration — A52-D05 borne cette future application sans déclarer COMPLETE.
+3. F08/F09/F10 restent NOT DECIDED après enregistrement A5.2 jusqu’à bulletin Morris séparé.
 
 ## 7. Ambiguïtés / obsolescences
 
 - Matrices delivery/cutover restent **candidate** tant que F08/F09 NOT DECIDED.
 - « VALIDATION SATISFIED » côté delivery T-A6 (R-M01 technique) ≠ fermeture réserve.
-- Fusion C4→B5 recommandée historiquement, **jamais validée** Morris.
+- Fusion C4→B5 : **adoptée comme tracking** (A52-D01.3) ; C4 **NOT VALIDATED** ; B5 **OPEN**.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/02-reservation-dependency-matrix.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/02-reservation-dependency-matrix.md
index 60cc3f4..5cadcde 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/02-reservation-dependency-matrix.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/02-reservation-dependency-matrix.md
@@ -1,45 +1,46 @@
 # 02 — Registre et matrice de dépendances
 
-## 1. Registre A5.2 (re-qualifié)
-
-| ID | Statut A5.2 | Problème | Domaine | Invariant | Preuves clés |
-|----|-------------|----------|---------|-----------|--------------|
-| **B5** | `OPEN` | LPS satellite ids non carry-forward | LPS / lifecycle | pas d’invention d’API downstream ; ids satellites non propagés | T-A2 reserves · T-A3 decisionIds partiel · T-A7 doc 04 |
-| **R1** | `OPEN` | Atomicité Project↔Cycle absente | consistency | stores séparés ; pas de txn distribuée | T-A2 §failure modes · T-A7 P13/P19 |
-| **R-T-A3-1** | `OPEN HARD` | Pas d’API publique Critical acknowledge | authority | Critical reste `proposed` ; Confirm fail-closed | T-A3/T-A4 · SC-07 |
-| **R-T-A3-2** | `OPEN HARD` | Atomicité Decision↔LPS/Epistemic résiduelle | consistency | pas de txn unique ; compensation résiduelle | T-A3 B4 · T-A4 Option B |
-| **R-M01** | `OPEN` | ClaimEvaluator readiness — closure Morris | claims / gouvernance | readiness ≠ fermeture | T-A6 D3/D5 · F04 |
-| **C1** | `RECOMMENDED — NOT VALIDATED` | Evidence status jointure PASS | claims | status join avant PASS | T-A6 DEL-C1 |
-| **C2** | `RECOMMENDED — NOT VALIDATED` | Self-review Critical | authority/claims | self-review Critical interdit | D-T-A6-05/06 |
-| **C3** | `RECOMMENDED — NOT VALIDATED` | Bornes taille/nombre | perf / sécurité | bornes principles D-T-A6-09 | T-A6 DEL-C3 |
-| **C4** | `RECOMMENDED — NOT VALIDATED` | LPS satellite → fusion B5 candidate | LPS | merge tracking vers B5 | T-A6 DEL-C4 |
-
-Aucune réserve n’est fermée, acceptée ou marquée SATISFIED par ce pack.
+## 1. Registre A5.2 (après décisions Morris)
+
+| ID | Statut technique | Décision A52 | Problème | Domaine | Invariant | Preuves clés |
+|----|------------------|--------------|----------|---------|-----------|--------------|
+| **B5** | `OPEN` | A52-D01 `.3` + `STOP BEFORE DELIVERY` | LPS satellite ids non carry-forward | LPS / lifecycle | pas d’invention d’API downstream ; ids satellites non propagés ; **stop avant delivery** tant que non résolue / non acceptée-bornée | T-A2 reserves · T-A3 decisionIds partiel · T-A7 doc 04 |
+| **R1** | `OPEN` | A52-D02 `.2` | Atomicité Project↔Cycle absente | consistency | stores séparés ; txn logique + compensation/idempotence avant delivery ; durable avant real-exec | T-A2 §failure modes · T-A7 P13/P19 |
+| **R-T-A3-1** | `OPEN HARD` | A52-D03 `.3` puis `.1` avant real Critical | Pas d’API publique Critical acknowledge | authority | Critical reste `proposed` ; Confirm fail-closed ; simulation/read-only maintenant | T-A3/T-A4 · SC-07 |
+| **R-T-A3-2** | `OPEN HARD` | A52-D04 `.4` | Atomicité Decision↔LPS/Epistemic résiduelle | consistency | mémoire bornée jusqu’à future déclaration T-A6 COMPLETE mémoire ; pas de résolution durable ici | T-A3 B4 · T-A4 Option B |
+| **R-M01** | `OPEN` | A52-D05 `.2 + .4` | ClaimEvaluator readiness — closure Morris | claims / gouvernance | readiness ≠ fermeture ; C1–C3 rattachées ; résolution/acceptation/bornage avant future déclaration T-A6 COMPLETE | T-A6 D3/D5 · F04 |
+| **C1** | `RECOMMENDED — NOT VALIDATED` | A52-D05 (via R-M01) | Evidence status jointure PASS | claims | status join avant PASS | T-A6 DEL-C1 |
+| **C2** | `RECOMMENDED — NOT VALIDATED` | A52-D05 (via R-M01) | Self-review Critical | authority/claims | self-review Critical interdit | D-T-A6-05/06 |
+| **C3** | `RECOMMENDED — NOT VALIDATED` | A52-D05 (via R-M01) | Bornes taille/nombre | perf / sécurité | bornes principles D-T-A6-09 | T-A6 DEL-C3 |
+| **C4** | `TRACKING MERGED INTO B5 — NOT VALIDATED` | A52-D01 / A52-D05 | LPS satellite → fusion B5 | LPS | tracking via B5 ; **pas** VALIDATED | T-A6 DEL-C4 |
+
+**Aucune réserve n’est CLOSED, SATISFIED, ni acceptée comme résolue technique par cet enregistrement.**
 
 ## 2. Matrice de dépendances / blocage
 
-Légende : **N** = non · **Y** = oui · **C** = candidate / selon F08–F10 · **I** = indirect · **V** = via autre réserve
+Légende : **N** = non · **Y** = oui · **C** = candidate / selon F08–F10 · **I** = indirect · **V** = via autre réserve · **S** = stop documentaire A52
 
 | Réserve | Domaine | Invariant | Dépend de | Bloque framing | Bloque delivery prep | Bloque delivery | Bloque cutover | Bloque real execution | Bloque T-A6 COMPLETE | Bloque product complete | Bloque production |
 |---------|---------|-----------|-----------|----------------|----------------------|-----------------|----------------|------------------------|----------------------|-------------------------|-------------------|
-| B5 | LPS | carry-forward satellites | T-A1 API ; C4 | N | C (stratégie doc OK) | C (F08) | Y | I | C (via C4/T6) | C | I |
+| B5 | LPS | carry-forward satellites | T-A1 API ; C4 | N | N (stratégie doc OK ; sujet peut rester ouvert) | **S / Y** (STOP BEFORE DELIVERY) | Y | I | C (via C4/T6) | C | I |
 | R1 | Project↔Cycle | atomicité cross-store | persistence future ; R-T-A3-2 | N | N (stratégie) | Y | Y | Y | N mémoire (bornable) | N immédiat | Y |
 | R-T-A3-1 | Critical ack | fail-closed Confirm | T-A2 API ; IAM futur | N | N (design) | C si Critical path | C si activation | **Y HARD** | N mémoire | C large | Y |
 | R-T-A3-2 | Decision links | pas de partial orphan | R1 ; outbox/txn futur | N | N (design) | Y | Y | **Y HARD** | N mémoire | N immédiat | Y |
-| R-M01 | ClaimEvaluator | closure Morris | C1–C3 ; schema | N | C | C | I | I | **Y** (F04) | Partiel | Y |
-| C1 | Evidence join | status PASS | R-M01 ; U-M02 | N | N | Dette | I | I | **Y** (arbitrage) | Partiel | I |
+| R-M01 | ClaimEvaluator | closure Morris | C1–C3 ; schema | N | C | C | I | I | **Y** (F04 + A52-D05.4) | Partiel | Y |
+| C1 | Evidence join | status PASS | R-M01 ; U-M02 | N | N | Dette | I | I | **Y** (via R-M01) | Partiel | I |
 | C2 | Self-review | no self Critical | D-T-A6-05/06 | N | N | Dette | I | I | **Y** | I | I |
 | C3 | Bornes | size/count | D-T-A6-09 ; U-M02 | N | N | Dette | I | Y payload réel | **Y** | I | Y |
-| C4 | LPS merge | fusion B5 | **B5** | N | V B5 | V B5 | V B5 | I | V B5 | V B5 | I |
+| C4 | LPS merge | fusion B5 tracking | **B5** | N | V B5 | V B5 + STOP | V B5 | I | V B5 | V B5 | I |
 
 ### Justifications synthétiques
 
 - **Framing N pour toutes** : pack T-A7 + SC — HARD n’empêchent pas cadrage read-only.
-- **Real execution Y pour R-T-A3-1/2 et R1** : SC-07.
-- **T-A6 COMPLETE** : F04 exige R-M01 + C1–C4 arbitrés/bornés avant déclaration ; B5 via C4.
-- **Delivery/cutover** : F08/F09 encore NOT DECIDED → cellules **C** là où le pack T-A7 dit « candidate ».
+- **Real execution Y pour R-T-A3-1/2 et R1** : SC-07 ; A52-D03.3 interdit real Critical maintenant.
+- **T-A6 COMPLETE** : F04 + A52-D05.4 exigent R-M01 + C1–C4 résolus/acceptés/bornés avant déclaration ; B5 via C4.
+- **Delivery** : A52-D01 impose **STOP BEFORE DELIVERY** pour B5 ; F08/F09 encore NOT DECIDED.
+- **Delivery preparation** : sujet B5 peut rester ouvert pendant framing et delivery preparation ; stop = **avant delivery**, pas avant prep.
 
-## 3. Priorisation A5.2
+## 3. Priorisation A5.2 (inchangée)
 
 1. **P0 HARD exécution** : R-T-A3-1, R-T-A3-2
 2. **P0 structurante état** : B5 (+ C4), R1
@@ -50,14 +51,15 @@ Légende : **N** = non · **Y** = oui · **C** = candidate / selon F08–F10 ·
 
 | Dette | Acceptable pour | Non acceptable pour |
 |-------|-----------------|---------------------|
-| B5/R1 OPEN | framing ; prep documentaire | delivery/cutover sans stratégie + stops |
-| HARD OPEN | framing ; design | Confirm Critical réel ; exec réelle |
-| C1–C4 NOT VALIDATED | framing | déclaration T-A6 COMPLETE |
+| B5/R1 OPEN | framing ; prep documentaire | delivery (B5 STOP) / cutover sans stratégie + stops |
+| HARD OPEN | framing ; design ; simulation | Confirm Critical réel ; exec réelle |
+| C1–C3 NOT VALIDATED | framing | déclaration T-A6 COMPLETE |
+| C4 tracking merged | framing ; registre unifié | claim VALIDATED / CLOSED |
 | R-M01 OPEN | framing ; runtime mémoire observé | claim COMPLETE / fermeture réserve |
 
 ## 5. Preuves requises (futures, non produites ici)
 
-- B5 : contrat T-A1 carry-forward + tests adversarial
+- B5 : contrat T-A1 carry-forward + tests adversarial **ou** acceptation/bornage Morris avant delivery
 - R1 / R-T-A3-2 : design txn/outbox/saga **sans** sélection DB
-- R-T-A3-1 : spec API ack + identité + audit + anti-replay
-- R-M01/C* : bulletin Morris de bornage ou validation
+- R-T-A3-1 : spec API ack + identité + audit + anti-replay (précondition `.1`)
+- R-M01/C* : résolution / acceptation explicite / bornage conforme A4.1 avant future déclaration T-A6 COMPLETE
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/03-authority-model-and-gaps.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/03-authority-model-and-gaps.md
index 6e66ee9..87bf876 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/03-authority-model-and-gaps.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/03-authority-model-and-gaps.md
@@ -4,7 +4,10 @@
 |-------|--------|
 | **Réserve liée** | R-T-A3-1 `OPEN HARD` |
 | **Arbitrage** | A52-D03 |
-| **Statut** | `RECOMMENDED — NOT DECIDED` |
+| **Choix Morris** | `.3`, puis `.1` avant toute exécution Critical réelle |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+| **IAM** | `NOT SELECTED` |
+| **Date enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |
 
 ## 1. Modèle actuel (sources T-A3 / T-A4)
 
@@ -20,7 +23,7 @@
 |--------|--------|------------------|------------------|--------------------|--------------|-------------|-------------|-----|-----------------|
 | Créer décision | agent / opérateur projet | projet | décision locale | non | oui (trace) | ports fail-closed | fondation mémoire | IAM futur | — |
 | Valider (non-Critical) | autorité N2/N3 documentée | métier/projet | validation | selon contrat | oui | oui | partiel mémoire | IAM | — |
-| Confirm Critical | autorité Critical | **identité forte** | Critical | **oui** | **oui** | **oui** | Confirm refuse si non ack | **API publique absente** | **A52-D03** |
+| Confirm Critical | autorité Critical | **identité forte** | Critical | **oui** | **oui** | **oui** | Confirm refuse si non ack | **API publique absente** | **A52-D03 `.3` maintenant ; `.1` avant real** |
 | Lancer cycle | runtime Option A | système + projet | cycle | non | oui | oui | mémoire | auth prod | — |
 | Changer statut cycle Critical | service ack | identité + scope | Critical | **oui** | **oui** | oui | **manquant** | R-T-A3-1 | **A52-D03** |
 | Écriture LPS | runtime | système | LPS append | non | oui | oui | mémoire | B5 satellites | A52-D01 |
@@ -41,14 +44,16 @@
 | Utilisateur | identité future | `NOT SELECTED` |
 | Système/service | appels internes | ≠ API publique authentifiée |
 
-## 3. Gap R-T-A3-1 (HARD)
+## 3. Gap R-T-A3-1 (HARD) — inchangé techniquement
 
 1. Pas d’API publique Critical acknowledge.
 2. Pas de preuve d’identité/scope/anti-replay pour ack.
 3. Confirm reste fail-closed — **correct** — mais empêche Confirm Critical réel.
 4. Service interne non formalisé comme substitut temporaire autorisé.
 
-## 4. Options A52-D03
+**R-T-A3-1 reste `OPEN HARD`.** Aucune fermeture. IAM `NOT SELECTED`. Aucune API implémentée.
+
+## 4. Options A52-D03 (historique)
 
 | Option | Description | Dette | Réversibilité |
 |--------|-------------|-------|---------------|
@@ -58,13 +63,26 @@
 | **A52-D03.4** | Autre (spec + proof harness sans exposer API) | design-only | haute |
 | **A52-D03.5** | Différer l’arbitrage | HARD reste OPEN | — |
 
-## 5. Recommandation
+## 5. Décision Morris adoptée
+
+`DECIDED — ADOPTED BY MORRIS` → **A52-D03.3** à court terme, avec trajectoire obligatoire vers **A52-D03.1** avant toute exécution Critical réelle.
+
+### Norme
+
+- simulation / read-only uniquement à court terme ;
+- aucune exécution Critical réelle autorisée par cet enregistrement ;
+- fail-closed obligatoire ;
+- API publique authentifiée, autorisée, auditée et anti-replay obligatoire **avant** toute exécution Critical réelle (précondition future `.1` — **pas** une implémentation).
 
-`RECOMMENDED — NOT DECIDED` → **A52-D03.3** pour l’immédiat, avec trajectoire documentée vers **A52-D03.1** avant tout Confirm Critical réel / real execution.
+### Non-effets
 
-Justification : minimum maintenant ; conserve fail-closed ; n’ouvre pas T-A7 ; n’autorise pas delivery ; n’implique aucune sélection IAM.
+- R-T-A3-1 n’est **pas** CLOSED ;
+- IAM non sélectionné ;
+- aucune API implémentée ;
+- aucun delivery / cutover ;
+- F09 / F10 restent `NOT DECIDED` (préparation seulement).
 
-## 6. Critères minimum futurs (non sélection techno)
+## 6. Critères minimum futurs pour `.1` (non sélection techno)
 
 - identité de l’acteur
 - scope d’autorité Critical
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/04-atomicity-model-and-options.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/04-atomicity-model-and-options.md
index 7a53877..f693709 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/04-atomicity-model-and-options.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/04-atomicity-model-and-options.md
@@ -4,7 +4,10 @@
 |-------|--------|
 | **Réserves** | R1 `OPEN` · R-T-A3-2 `OPEN HARD` |
 | **Arbitrages** | A52-D02 · A52-D04 |
+| **A52-D02 choix** | `.2` — `DECIDED — ADOPTED BY MORRIS` |
+| **A52-D04 choix** | `.4` — `DECIDED — ADOPTED BY MORRIS` |
 | **Persistence** | `NOT SELECTED` |
+| **Date enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |
 
 ## 1. Invariants
 
@@ -12,23 +15,22 @@
 - Stores séparés (Project/LPS, Cycle/Epistemic, Decision).
 - Fail-closed ports ; compensation locale documentée ; résiduels possibles.
 - Mémoire ≠ garantie durable.
+- **Aucune technologie de base de données sélectionnée.**
 
 ## 2. Matrice atomicité
 
 | Flux | Écritures | Invariant | Risque partial failure | État actuel | Option transactionnelle | Compensation | Idempotence | Persistence requise | Acceptable en mémoire | Gate |
 |------|-----------|-----------|------------------------|-------------|-------------------------|--------------|-------------|----------------------|----------------------|------|
-| Project → Cycle | Project + Cycle | cohérence lien | orphan cycle/project | R1 OPEN ; ordre + rollback partiel | txn logique / outbox futur | rollback cycle si LPS fail | à définir | avant real-exec | **oui borné** | A52-D02 |
-| Decision → LPS | Decision + LPS | link decisionIds | orphan decision/LPS | R-T-A3-2 ; compensate supersede | unit of work / outbox | compensate | à définir | avant delivery durable | oui avec résidu | A52-D04 |
-| Decision → Epistemic | Decision + Epistemic | link epistemic | orphan | R-T-A3-2 | idem | compensate | à définir | avant delivery durable | oui avec résidu | A52-D04 |
-| Confirm Critical → ack | status Critical + audit | ack avant Confirm | Confirm sans ack | fail-closed ; API absente | n/a authority | refuse Confirm | n/a | auth durable | simulation OK | A52-D03 |
+| Project → Cycle | Project + Cycle | cohérence lien | orphan cycle/project | R1 OPEN ; norme A52-D02.2 | txn logique / outbox futur | rollback cycle si LPS fail | obligatoire avant delivery | avant real-exec | **oui borné** | A52-D02 |
+| Decision → LPS | Decision + LPS | link decisionIds | orphan decision/LPS | R-T-A3-2 ; A52-D04.4 mémoire | unit of work / outbox futur | compensate | à définir durable | avant delivery durable | oui avec résidu | A52-D04 |
+| Decision → Epistemic | Decision + Epistemic | link epistemic | orphan | R-T-A3-2 ; A52-D04.4 | idem | compensate | à définir | avant delivery durable | oui avec résidu | A52-D04 |
+| Confirm Critical → ack | status Critical + audit | ack avant Confirm | Confirm sans ack | fail-closed ; API absente ; A52-D03.3 | n/a authority | refuse Confirm | n/a | auth durable | simulation OK | A52-D03 |
 | Evidence → ClaimEvaluation | Evidence + Claim | status join | PASS invalide | C1 NOT VALIDATED | contrôles D3 | fail-closed PASS | snapshots | Evidence physique future | fake-only OK | A52-D05 |
-| lifecycle → LPS satellites | LPS append fields | carry-forward | perte ids | **B5 OPEN** | évolution contrat T-A1 | n/a | version append | si satellites durables | partiel (`decisionIds`) | A52-D01 |
+| lifecycle → LPS satellites | LPS append fields | carry-forward | perte ids | **B5 OPEN** + STOP before delivery | évolution contrat T-A1 | n/a | version append | si satellites durables | partiel (`decisionIds`) | A52-D01 |
 | rollback / restore | store local | pas d’état fantôme | compensate fail | résiduel HARD | saga contrôlée | oui partielle | clés idempotentes | avant prod | partielle | A52-D04 |
 | double-write legacy/v3 | legacy + OA | isolation | split-brain | hors A5.2 principal | hold flags futurs | — | — | cutover | non | T-A7 levels |
 
-**Aucune technologie de base de données n’est sélectionnée.**
-
-## 3. Options A52-D02 (R1)
+## 3. A52-D02 (R1) — décidé
 
 | Option | Description |
 |--------|-------------|
@@ -38,21 +40,51 @@
 | **A52-D02.4** | Autre (preuve adversarial only) |
 | **A52-D02.5** | Différer |
 
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **A52-D02.2**
+**Décision Morris :** `DECIDED — ADOPTED BY MORRIS` → **A52-D02.2**
+
+### Norme
+
+- transaction logique ;
+- compensation ;
+- idempotence ;
+- gestion des partial failures avant delivery ;
+- garantie durable obligatoire avant real execution.
+
+### Non-effets
+
+- R1 reste `OPEN` ;
+- aucune DB ou technologie transactionnelle sélectionnée ;
+- aucune production autorisée ;
+- F10 reste `NOT DECIDED`.
 
-## 4. Options A52-D04 (R-T-A3-2)
+## 4. A52-D04 (R-T-A3-2) — décidé
 
 | Option | Description |
 |--------|-------------|
 | **A52-D04.1** | Transaction unique obligatoire |
 | **A52-D04.2** | Outbox / unit of work durable |
 | **A52-D04.3** | Saga / compensation contrôlée |
-| **A52-D04.4** | Mémoire bornée uniquement jusqu’à déclaration T-A6 COMPLETE (puis pattern durable requis avant delivery réelle) |
+| **A52-D04.4** | Mémoire bornée uniquement jusqu’à une future déclaration T-A6 COMPLETE mémoire |
 | **A52-D04.5** | Autre |
 | **A52-D04.6** | Différer |
 
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **A52-D04.4** pour la phase mémoire, **sans** choisir entre .1/.2/.3 maintenant ; exiger un design durable **avant** delivery/real-exec (choix techno hors A5.2).
+**Décision Morris :** `DECIDED — ADOPTED BY MORRIS` → **A52-D04.4**
+
+### Norme
+
+- atomicité Decision↔LPS/Epistemic bornée au périmètre mémoire ;
+- acceptable uniquement jusqu’à une **future** déclaration T-A6 COMPLETE mémoire ;
+- aucune résolution durable ici ;
+- aucune exécution réelle ou production ;
+- `.4` ≠ déclaration T-A6 COMPLETE maintenant.
+
+### Non-effets
+
+- R-T-A3-2 reste `OPEN HARD` ;
+- T-A6 COMPLETE reste `NOT DECLARED` ;
+- aucune technologie sélectionnée ;
+- F08 / F10 restent `NOT DECIDED`.
 
 ## 5. Relation R1 ↔ R-T-A3-2
 
-Famille atomicité cross-store. Traiter séparément (A52-D02 vs A52-D04) mais exiger cohérence de stratégie. Ne pas fusionner les réserves.
+Famille atomicité cross-store. Traitées séparément (A52-D02 vs A52-D04) avec cohérence de stratégie (mémoire/logique maintenant ; durable avant real-exec). Ne pas fusionner les réserves. Les deux restent ouvertes techniquement.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/05-r-m01-and-c1-c4-assessment.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/05-r-m01-and-c1-c4-assessment.md
index 059e058..1d1b8cf 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/05-r-m01-and-c1-c4-assessment.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/05-r-m01-and-c1-c4-assessment.md
@@ -3,17 +3,22 @@
 | Champ | Valeur |
 |-------|--------|
 | **R-M01** | `OPEN` |
-| **C1–C4** | `RECOMMENDED — NOT VALIDATED` |
-| **F04** | `DECIDED — UNCHANGED` (A4.1) |
+| **C1–C3** | `RECOMMENDED — NOT VALIDATED` |
+| **C4** | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
+| **F04** | `DECIDED — UNCHANGED` |
 | **Arbitrage** | A52-D05 |
+| **Choix Morris** | `.2 + .4` |
+| **Statut** | `DECIDED — ADOPTED BY MORRIS` |
+| **T-A6 COMPLETE** | `NOT DECLARED` |
+| **Date enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |
 
 ## 1. R-M01
 
 - Problème : readiness ClaimEvaluator + closure Morris.
 - Preuve technique delivery T-A6 : runtime mémoire / D3–D5 observés ; **fermeture réserve non effectuée**.
-- Relation T-A6 COMPLETE : critère F04 — R-M01 doit être arbitré ou borné avant déclaration.
+- Relation T-A6 COMPLETE : critère F04 — R-M01 doit être résolu / accepté / borné avant déclaration (A52-D05.4).
 - Impact product complete : partiel (claims readiness).
-- Nécessité dans A5.2 : **oui** pour préparer bornage ; **non** pour fermer.
+- Après A52-D05 : **R-M01 reste OPEN** ; C1–C3 rattachées ; **pas** de VALIDATED automatique.
 
 ## 2. C1 — Evidence status jointure PASS
 
@@ -22,9 +27,9 @@
 | Recommandation actuelle | TRACK AS DEBT ; enforce technique D3 |
 | Preuve | fail-closed status join documenté |
 | Dette | NOT VALIDATED Morris |
-| Rattachement | R-M01 |
-| Maintenant ? | borner pour T-A6 COMPLETE ; pas fermer ici |
-| Impact T-A6 COMPLETE | **oui** (arbitrage requis) |
+| Rattachement | **R-M01** (A52-D05.2) |
+| Statut | `RECOMMENDED — NOT VALIDATED` |
+| Impact T-A6 COMPLETE | **oui** — résolution/acceptation/bornage requis (A52-D05.4) |
 | Impact delivery/cutover | dette ; pas HARD framing |
 
 ## 3. C2 — Self-review Critical
@@ -34,9 +39,9 @@
 | Recommandation | dette runtime vs invariant modeled |
 | Preuve | D-T-A6-05/06 |
 | Dette | NOT VALIDATED |
-| Rattachement | authority claims |
-| Maintenant ? | borner / reporter avec critère |
-| Impact T-A6 COMPLETE | oui (F04) |
+| Rattachement | **R-M01** / plan de preuves (A52-D05.2) |
+| Statut | `RECOMMENDED — NOT VALIDATED` |
+| Impact T-A6 COMPLETE | oui (F04 + A52-D05.4) |
 | Delivery/cutover | indirect |
 
 ## 4. C3 — Bornes taille/nombre
@@ -46,42 +51,57 @@
 | Recommandation | principles D-T-A6-09 ; enforcement non validé |
 | Preuve | pack principles |
 | Dette | bloque payload réel |
-| Rattachement | U-M02 / D-T-A6-09 |
-| Maintenant ? | borner pour mémoire ; exiger avant payload réel |
+| Rattachement | **R-M01** / U-M02 / D-T-A6-09 (A52-D05.2) |
+| Statut | `RECOMMENDED — NOT VALIDATED` |
 | Impact T-A6 COMPLETE | oui |
 | Delivery/cutover | payload réel |
 
-## 5. C4 — Fusion B5 candidate
+## 5. C4 — Fusion B5 tracking
 
 | Item | Valeur |
 |------|--------|
 | Recommandation historique | MERGE INTO B5 |
 | Preuve | T-A6 DEL-C4 |
-| Dette | fusion **non validée** |
+| Décision | A52-D01.3 + A52-D05.2 — tracking fusionné dans B5 |
+| Statut | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
 | Rattachement | **B5** |
-| Maintenant ? | **traiter via A52-D01** (éviter double décision) |
-| Impact | via B5 |
+| Non-effet | C4 n’est **pas** automatiquement VALIDATED ; B5 n’est **pas** CLOSED |
 
-## 6. Options A52-D05
+## 6. Options A52-D05 (historique)
 
 | Option | Description |
 |--------|-------------|
 | **A52-D05.1** | Arbitrer R-M01 et chaque C séparément |
 | **A52-D05.2** | Fusionner C1–C4 dans réserves principales lorsque pertinent (C4→B5 ; C1–C3 sous R-M01) |
 | **A52-D05.3** | Borner R-M01 pour T-A6 mémoire et reporter C1–C4 |
-| **A52-D05.4** | Exiger résolution avant déclaration T-A6 COMPLETE |
+| **A52-D05.4** | Exiger résolution/acceptation/bornage avant déclaration T-A6 COMPLETE |
 | **A52-D05.5** | Custom |
 | **A52-D05.6** | Différer |
 
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → combinaison **A52-D05.2 + A52-D05.4** :
+## 7. Décision Morris adoptée
 
-- rattacher **C4 → B5** (A52-D01) ;
-- traiter **C1–C3** comme dettes de **R-M01** ;
-- exiger arbitrage/bornage **avant déclaration** T-A6 COMPLETE ;
-- **ne pas** fermer ni valider ici.
+`DECIDED — ADOPTED BY MORRIS` → combinaison **A52-D05.2 + A52-D05.4**
 
-## 7. Anti-création de décisions inutiles
+### Norme
+
+- C4 est rattachée à B5 (tracking) ;
+- C1–C3 sont rattachées à R-M01 ou à son plan de preuves ;
+- avant toute **future** déclaration T-A6 COMPLETE, R-M01 et C1–C4 doivent être :
+  - résolues ;
+  - acceptées explicitement ;
+  - ou bornées conformément à A4.1.
+
+### Non-effets
+
+- R-M01 reste `OPEN` ;
+- C1–C4 ne deviennent **pas** automatiquement VALIDATED ;
+- T-A6 COMPLETE reste `NOT DECLARED` ;
+- F04 reste `DECIDED — UNCHANGED` ;
+- aucune F consommée.
+
+## 8. Anti-création de décisions inutiles
 
 - Ne pas inventer F15+.
 - Ne pas consommer F08 pour clôturer R-M01.
 - Ne pas déclarer T-A6 COMPLETE.
+- A52-D05 borne la future application de F04 — **sans** la consommer ni la modifier.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/06-morris-arbitration-pack.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/06-morris-arbitration-pack.md
index 6eeb374..0fd1c10 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/06-morris-arbitration-pack.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/06-morris-arbitration-pack.md
@@ -2,10 +2,31 @@
 
 | Champ | Valeur |
 |-------|--------|
-| **Statut pack** | `PREPARED — MORRIS ARBITRATION REQUIRED` |
-| **Aucune option auto-sélectionnée** | oui |
-| **F03 / F08–F13 après A5.2** | `NOT DECIDED` |
+| **Statut pack** | `MORRIS DECISIONS RECORDED — IMPLEMENTATION AND RESERVE CLOSURE NOT AUTHORIZED` |
+| **Gate consommé** | `GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date/heure/fuseau** | 2026-07-28 09:50:54 CEST (+0200) |
+| **Autorité** | Morris Cleland — décisions explicites |
+| **F03 / F08–F13** | `NOT DECIDED` |
 | **F04** | `DECIDED — UNCHANGED` |
+| **Verdict F** | `NO F-DECISION AUTO-CONSUMPTION` |
+
+---
+
+## Bulletin Morris exact
+
+```
+A52-D03 = .3, puis .1 avant real Critical
+A52-D04 = .4
+A52-D02 = .2
+A52-D01 = .3 + STOP BEFORE DELIVERY
+A52-D05 = .2 + .4
+```
+
+Gate normalisé consommé :
+
+```
+GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
+```
 
 ---
 
@@ -21,13 +42,28 @@
 | A52-D01.4 | Autre (carry-forward partiel documenté) | — | — | — |
 | A52-D01.5 | Différer | B5/C4 restent ouverts | — | — |
 
-**Recommandation ChatGPT/Cursor :** `RECOMMENDED — NOT DECIDED` → **A52-D01.3** + stops delivery (esprit A52-D01.2 sans « acceptation » formelle) : unifier le tracking C4→B5 ; garder **B5 OPEN** ; exiger stratégie/preuve avant delivery ; **aucune fermeture**.
+**Choix Morris structure :** `.3`
+
+**Choix Morris borne/stop :** `STOP BEFORE DELIVERY`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
 
-**Risques :** confusion fusion tracking ≠ fix T-A1 ; claim implicite de fermeture.
+### Norme
 
-**Fichiers touchés ultérieurement (estimés) :** contrats T-A1 LPS · tests adversarial · registres réserves.
+- C4 est fusionnée dans le suivi de B5 ;
+- B5 devient la réserve principale de carry-forward LPS satellite IDs ;
+- le sujet peut rester ouvert pendant framing et delivery preparation ;
+- STOP obligatoire **avant delivery** tant que B5 n’est pas :
+  - résolue ;
+  - ou explicitement acceptée/bornée par Morris dans un gate ultérieur.
 
-**Gate nécessaire :** bulletin Morris A52-D01 (distinct).
+### Non-effets
+
+- B5 n’est pas CLOSED ;
+- C4 n’est pas automatiquement VALIDATED (`TRACKING MERGED INTO B5 — NOT VALIDATED`) ;
+- F08 reste `NOT DECIDED` (A52-D01 prépare F08) ;
+- delivery n’est pas autorisé ;
+- stop ≠ avant delivery preparation.
 
 ---
 
@@ -43,11 +79,21 @@
 | A52-D02.4 | Autre |
 | A52-D02.5 | Différer |
 
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **A52-D02.2**
+**Choix Morris :** `.2`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+### Norme
+
+- transaction logique ; compensation ; idempotence ;
+- gestion des partial failures avant delivery ;
+- garantie durable obligatoire avant real execution.
 
-**Risques :** sous-estimer orphans ; sélection techno prématurée (interdit ici).
+### Non-effets
 
-**Gate :** bulletin Morris A52-D02 · lien F10 futur.
+- R1 reste `OPEN` ;
+- aucune DB sélectionnée ;
+- F10 reste `NOT DECIDED` (préparation).
 
 ---
 
@@ -63,11 +109,22 @@
 | A52-D03.4 | Autre |
 | A52-D03.5 | Différer |
 
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **A52-D03.3** maintenant ; trajectoire **A52-D03.1** avant real Critical.
+**Choix Morris :** `.3`, puis `.1` avant toute exécution Critical réelle
 
-**Risques :** service interne pris pour API publique ; IAM implicite.
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
 
-**Gate :** bulletin Morris A52-D03 · lien F09/F10.
+### Norme
+
+- simulation/read-only uniquement à court terme ;
+- aucune exécution Critical réelle ;
+- fail-closed obligatoire ;
+- API publique authentifiée, autorisée, auditée et anti-replay obligatoire avant real Critical (précondition future — **pas** implémentation).
+
+### Non-effets
+
+- R-T-A3-1 reste `OPEN HARD` ;
+- IAM `NOT SELECTED` ;
+- F09 / F10 restent `NOT DECIDED` (A52-D03 prépare F09/F10).
 
 ---
 
@@ -80,15 +137,25 @@
 | A52-D04.1 | Transaction unique obligatoire |
 | A52-D04.2 | Outbox / unit of work durable |
 | A52-D04.3 | Saga / compensation contrôlée |
-| A52-D04.4 | Mémoire bornée jusqu’à T-A6 COMPLETE déclaré ; pattern durable requis avant delivery réelle |
+| A52-D04.4 | Mémoire bornée jusqu’à future déclaration T-A6 COMPLETE mémoire |
 | A52-D04.5 | Autre |
 | A52-D04.6 | Différer |
 
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **A52-D04.4** (sans choisir .1/.2/.3).
+**Choix Morris :** `.4`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
 
-**Risques :** mémoire présentée comme durable ; oubli résiduel HARD.
+### Norme
 
-**Gate :** bulletin Morris A52-D04 · lien F08/F10.
+- atomicité bornée au périmètre mémoire ;
+- acceptable uniquement jusqu’à une future déclaration T-A6 COMPLETE mémoire ;
+- aucune résolution durable ; aucune exécution réelle/production.
+
+### Non-effets
+
+- R-T-A3-2 reste `OPEN HARD` ;
+- T-A6 COMPLETE `NOT DECLARED` ;
+- F10 reste `NOT DECIDED` (A52-D02/D04 préparent F10).
 
 ---
 
@@ -101,51 +168,84 @@
 | A52-D05.1 | Tout séparer |
 | A52-D05.2 | Fusionner C* dans réserves principales (C4→B5 ; C1–C3→R-M01) |
 | A52-D05.3 | Borner R-M01 mémoire et reporter C1–C4 |
-| A52-D05.4 | Exiger résolution/bornage avant déclaration T-A6 COMPLETE |
+| A52-D05.4 | Exiger résolution/acceptation/bornage avant déclaration T-A6 COMPLETE |
 | A52-D05.5 | Custom |
 | A52-D05.6 | Différer |
 
-**Recommandation :** `RECOMMENDED — NOT DECIDED` → **A52-D05.2 + A52-D05.4**
+**Choix Morris :** `.2 + .4`
+
+**Statut :** `DECIDED — ADOPTED BY MORRIS`
+
+### Norme
 
-**Risques :** fermeture implicite ; confusion validation technique ≠ closure.
+- C4 rattachée à B5 ; C1–C3 rattachées à R-M01 / plan de preuves ;
+- avant future déclaration T-A6 COMPLETE : résolution, acceptation explicite, ou bornage conforme A4.1.
 
-**Gate :** bulletin Morris A52-D05 · **ne consomme pas** F08.
+### Non-effets
+
+- R-M01 `OPEN` ; C1–C3 `RECOMMENDED — NOT VALIDATED` ; C4 `TRACKING MERGED INTO B5 — NOT VALIDATED` ;
+- T-A6 COMPLETE `NOT DECLARED` ;
+- F04 `DECIDED — UNCHANGED` (A52-D05 borne la future application de F04).
 
 ---
 
-## Matrice F (relation)
+## Matrice F (relation — aucune auto-consommation)
 
-| F | Statut avant | Impact A5.2 | Arbitrage préparé | Statut après |
-|---|--------------|-------------|-------------------|--------------|
+| F | Statut avant | Impact A5.2 | Arbitrage | Statut après |
+|---|--------------|-------------|-----------|--------------|
 | F03 | NOT DECIDED | hors périmètre | — | `NOT DECIDED` |
-| F04 | DECIDED (A4.1) | bornage R-M01/C* pour déclaration future | A52-D05 | `DECIDED — UNCHANGED` |
-| F08 | NOT DECIDED | prépare critères réserves avant delivery | A52-D01/D02/D04 | `NOT DECIDED` |
-| F09 | NOT DECIDED | prépare Critical/cutover | A52-D03 | `NOT DECIDED` |
-| F10 | NOT DECIDED | prépare persistence/IAM order | A52-D02/D04 | `NOT DECIDED` |
-| F11 | NOT DECIDED | hors sauf dépendance constatée | — | `NOT DECIDED` |
+| F04 | DECIDED (A4.1) | A52-D05 borne application future | A52-D05 | `DECIDED — UNCHANGED` |
+| F08 | NOT DECIDED | A52-D01 prépare critères B5 | A52-D01 | `NOT DECIDED` |
+| F09 | NOT DECIDED | A52-D03 prépare Critical | A52-D03 | `NOT DECIDED` |
+| F10 | NOT DECIDED | A52-D02/D03/D04 préparent | A52-D02/D03/D04 | `NOT DECIDED` |
+| F11 | NOT DECIDED | hors | — | `NOT DECIDED` |
 | F12 | NOT DECIDED | hors | — | `NOT DECIDED` |
 | F13 | NOT DECIDED | hors | — | `NOT DECIDED` |
 
+**Verdict :** `NO F-DECISION AUTO-CONSUMPTION`
+
 ---
 
-## Bulletin Morris vierge
+## Statuts après décision
+
+| Item | Statut |
+|------|--------|
+| A52-D01…D05 | `DECIDED — ADOPTED BY MORRIS` |
+| B5 | `OPEN` |
+| R1 | `OPEN` |
+| R-T-A3-1 | `OPEN HARD` |
+| R-T-A3-2 | `OPEN HARD` |
+| R-M01 | `OPEN` |
+| C1–C3 | `RECOMMENDED — NOT VALIDATED` |
+| C4 | `TRACKING MERGED INTO B5 — NOT VALIDATED` |
+| F04 | `DECIDED — UNCHANGED` |
+| F03 / F08–F13 | `NOT DECIDED` |
+| T-A6 COMPLETE | `NOT DECLARED` |
+| Option A | `NOT COMPLETE` |
+| T-A7 | `NOT OPEN` |
+| Delivery preparation | `NOT AUTHORIZED` |
+| Delivery | `NOT AUTHORIZED` |
+| Cutover | `NOT AUTHORIZED` |
+| Persistence | `NOT SELECTED` |
+| IAM | `NOT SELECTED` |
+| RGPD production | `NOT VALIDATED` |
 
-```
-GO DECIDE A5.2 ARBITRATIONS — A52-D01=… — A52-D02=… — A52-D03=… — A52-D04=… — A52-D05=… — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN
-```
+---
+
+## Effets / non-effets (synthèse)
 
-- Remplacer `…` par options choisies.
-- Interdit : delivery, cutover, ouverture T-A7, fermeture implicite, consommation F automatique.
-- Statut actuel de ce GO : **NOT CONSUMED / NOT DRAFTED AS DECISION**.
+**Effets :** normes A52 adoptées documentairement ; tracking C4→B5 ; C1–C3→R-M01 ; simulation Critical ; atomicité mémoire/logique ; stop avant delivery pour B5 ; préparation F08/F09/F10.
+
+**Non-effets :** aucune réserve CLOSED ; aucune F consommée ; aucun COMPLETE ; T-A7 NOT OPEN ; delivery/cutover NOT AUTHORIZED ; persistence/IAM NOT SELECTED.
 
 ---
 
-## Synthèse recommandations (non décisionnelles)
+## Gates futurs (candidats — NOT CONSUMED)
+
+1. `GO REVIEW MORRIS A5.2 DECISION RECORD AND PREPARE DOCUMENTARY PR READINESS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` ← **immédiat**
+2. Résolution B5 avant delivery (ou acceptation/bornage Morris)
+3. Conception API autorité Critical (précondition `.1`)
+4. Architecture durable atomicité/persistence (sans sélection techno ici)
+5. Future déclaration T-A6 COMPLETE (après R-M01/C1–C4)
 
-| ID | Option recommandée | Label |
-|----|--------------------|-------|
-| A52-D01 | .3 (+ stops delivery) | `RECOMMENDED — NOT DECIDED` |
-| A52-D02 | .2 | `RECOMMENDED — NOT DECIDED` |
-| A52-D03 | .3 (→.1 avant real Critical) | `RECOMMENDED — NOT DECIDED` |
-| A52-D04 | .4 | `RECOMMENDED — NOT DECIDED` |
-| A52-D05 | .2 + .4 | `RECOMMENDED — NOT DECIDED` |
+Aucun gate delivery ou cutover ouvert.
diff --git a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/README.md b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/README.md
index 8d612c0..146eb12 100644
--- a/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/README.md
+++ b/projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/a5-2-reservations-authority-atomicity-framing/README.md
@@ -2,11 +2,13 @@
 
 | Champ | Valeur |
 |-------|--------|
-| **Gate consommé** | `GO FRAME A5.2 T-A7 RESERVATIONS AUTHORITY AND ATOMICITY — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
-| **Cycle / profil** | 1 — Cadrage (+3 · 6 · 9 · 10 · 12 · 15) · Critical |
+| **Gate framing (historique)** | `GO FRAME A5.2 T-A7 RESERVATIONS AUTHORITY AND ATOMICITY — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Gate décisions consommé** | `GO RECORD MORRIS A5.2 DECISIONS — A52-D01=.3+STOP-BEFORE-DELIVERY — A52-D02=.2 — A52-D03=.3-THEN-.1-BEFORE-REAL-CRITICAL — A52-D04=.4 — A52-D05=.2+.4 — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN` |
+| **Date/heure/fuseau enregistrement** | 2026-07-28 09:50:54 CEST (+0200) |
+| **Cycle / profil** | 15 — Capitalisation / enregistrement (+1 · 3 · 6 · 9 · 10 · 13) · Critical |
 | **Base** | `origin/main` @ `9f578ea1677ce65cffb4b05ddf5649a21a5b240c` (merge PR #280) |
 | **Branche locale** | `framing/sfia-studio-v3-native-option-a-a5-2-reservations-authority-atomicity` |
-| **Statut A5.2 framing** | `PREPARED — MORRIS ARBITRATION REQUIRED` |
+| **Statut A5.2** | `MORRIS DECISIONS RECORDED — IMPLEMENTATION AND RESERVE CLOSURE NOT AUTHORIZED` |
 | **T-A7** | `NOT OPEN` |
 | **Delivery preparation** | `NOT AUTHORIZED` |
 | **Delivery** | `NOT AUTHORIZED` |
@@ -14,50 +16,71 @@
 | **T-A6 COMPLETE** | `NOT DECLARED` |
 | **Option A** | `NOT COMPLETE` |
 | **Persistence / IAM / RGPD prod** | persistence `NOT SELECTED` · IAM `NOT SELECTED` · RGPD prod `NOT VALIDATED` |
+| **F04** | `DECIDED — UNCHANGED` |
 | **F03 / F08–F13** | `NOT DECIDED` |
 | **Push / PR** | **aucun** |
 
 ## Objectif
 
-Produire un pack d’arbitrage Morris sur B5, R1, R-T-A3-1, R-T-A3-2, R-M01 et C1–C4 (autorité + atomicité), sans consommer de décision F, sans fermer de réserve, sans ouvrir T-A7.
+Enregistrer strictement dans le pack documentaire A5.2 les décisions Morris A52-D01…D05, sans fermer de réserve technique, sans consommer de décision F, sans autoriser delivery/cutover, sans ouvrir T-A7.
 
 ## Fichiers
 
 | Fichier | Rôle |
 |---------|------|
-| `01-scope-and-source-truth.md` | Périmètre, sources, vérité Git |
-| `02-reservation-dependency-matrix.md` | Registre + dépendances + priorisation |
-| `03-authority-model-and-gaps.md` | Autorité / Confirm Critical / A52-D03 |
-| `04-atomicity-model-and-options.md` | Atomicité / A52-D02 · A52-D04 |
-| `05-r-m01-and-c1-c4-assessment.md` | R-M01 · C1–C4 / A52-D05 |
-| `06-morris-arbitration-pack.md` | Bulletins A52-D01…D05 |
-
-## Décisions préparées (non consommées)
-
-| ID | Sujet | Statut |
-|----|-------|--------|
-| A52-D01 | B5 / carry-forward LPS (+ C4) | `RECOMMENDED — NOT DECIDED` |
-| A52-D02 | R1 / Project↔Cycle | `RECOMMENDED — NOT DECIDED` |
-| A52-D03 | R-T-A3-1 / Critical acknowledge | `RECOMMENDED — NOT DECIDED` |
-| A52-D04 | R-T-A3-2 / Decision↔LPS/Epistemic | `RECOMMENDED — NOT DECIDED` |
-| A52-D05 | R-M01 et C1–C4 | `RECOMMENDED — NOT DECIDED` |
+| `01-scope-and-source-truth.md` | Périmètre, sources, vérité Git, gate d’enregistrement |
+| `02-reservation-dependency-matrix.md` | Registre + dépendances + décisions A52 liées |
+| `03-authority-model-and-gaps.md` | Autorité / Confirm Critical / A52-D03 ADOPTED |
+| `04-atomicity-model-and-options.md` | Atomicité / A52-D02 · A52-D04 ADOPTED |
+| `05-r-m01-and-c1-c4-assessment.md` | R-M01 · C1–C4 / A52-D05 ADOPTED |
+| `06-morris-arbitration-pack.md` | Bulletin Morris exact A52-D01…D05 |
+
+## Décisions Morris enregistrées
+
+| ID | Choix Morris | Statut |
+|----|--------------|--------|
+| A52-D01 | structure `.3` + borne `STOP BEFORE DELIVERY` | `DECIDED — ADOPTED BY MORRIS` |
+| A52-D02 | `.2` | `DECIDED — ADOPTED BY MORRIS` |
+| A52-D03 | `.3`, puis `.1` avant toute exécution Critical réelle | `DECIDED — ADOPTED BY MORRIS` |
+| A52-D04 | `.4` | `DECIDED — ADOPTED BY MORRIS` |
+| A52-D05 | `.2 + .4` | `DECIDED — ADOPTED BY MORRIS` |
+
+## Effets
+
+- Normes décisionnelles A52-D01…D05 adoptées documentairement.
+- C4 tracking fusionné dans B5 (suivi) ; C1–C3 rattachées à R-M01 / plan de preuves.
+- Simulation/read-only Critical immédiat ; API publique (.1) obligatoire avant real Critical.
+- Atomicité mémoire/logique maintenant ; garantie durable obligatoire avant real execution.
+- Stop obligatoire avant delivery tant que B5 non résolue / non acceptée-bornée par gate ultérieur.
+- Préparation documentaire de F08/F09/F10 — **sans** consommation.
+
+## Non-effets
+
+- B5, R1, R-M01 restent `OPEN` ; R-T-A3-1 / R-T-A3-2 restent `OPEN HARD`.
+- C1–C3 restent `RECOMMENDED — NOT VALIDATED` ; C4 = `TRACKING MERGED INTO B5 — NOT VALIDATED`.
+- Aucune F consommée automatiquement (`NO F-DECISION AUTO-CONSUMPTION`).
+- T-A6 COMPLETE `NOT DECLARED` · Option A `NOT COMPLETE` · T-A7 `NOT OPEN`.
+- Delivery preparation / delivery / cutover `NOT AUTHORIZED`.
+- Persistence / IAM `NOT SELECTED` · RGPD prod `NOT VALIDATED`.
+- Aucune implémentation runtime / modeled / workflow / `method/**` / OPS1.
 
 ## Anti-claims
 
-- framing A5.2 ≠ ouverture T-A7
-- recommandation ≠ décision Morris
-- `RECOMMENDED — NOT DECIDED` ≠ `ACCEPTED` / `ADOPTED` / fermeture
-- définition COMPLETE ≠ déclaration COMPLETE
+- enregistrement A5.2 ≠ fermeture de réserve
+- `DECIDED — ADOPTED BY MORRIS` ≠ `CLOSED` / `SATISFIED` / `VALIDATED`
 - A52-D0x ≠ consommation F08/F09/F10
-- aucune persistence/IAM sélectionnée
+- `.3` autorité ≠ API implémentée
+- `.4` mémoire ≠ persistence sélectionnée / T-A6 COMPLETE déclaré
+- `STOP BEFORE DELIVERY` ≠ stop avant delivery preparation
+- framing préparé ≠ décisions enregistrées (phases distinctes)
 - aucun delivery / cutover autorisé
 
 ## Verdict
 
-`SFIA STUDIO A5.2 RESERVATIONS AUTHORITY AND ATOMICITY FRAMING PREPARED — B5 R1 R-T-A3-1 R-T-A3-2 R-M01 AND C1-C4 ASSESSED — AUTHORITY AND ATOMICITY MATRICES PRODUCED — FIVE MORRIS ARBITRATIONS STRUCTURED — NO OPTION AUTO-SELECTED — NO RESERVE CLOSED — F03 AND F08 TO F13 REMAIN NOT DECIDED — PROJECT BRANCH NOT PUSHED — T-A7 NOT OPEN — DELIVERY AND CUTOVER NOT AUTHORIZED — T-A6 NOT DECLARED COMPLETE — OPTION A NOT COMPLETE`
+`SFIA STUDIO A5.2 MORRIS DECISIONS RECORDED LOCALLY — A52-D01 THROUGH A52-D05 ADOPTED EXACTLY AS DIRECTED — B5 R1 R-T-A3-1 R-T-A3-2 AND R-M01 REMAIN OPEN — C1-C3 REMAIN NOT VALIDATED AND C4 TRACKING MERGED INTO B5 — NO F-DECISION AUTO-CONSUMPTION — PROJECT BRANCH NOT PUSHED — T-A7 NOT OPEN — DELIVERY AND CUTOVER NOT AUTHORIZED — T-A6 NOT DECLARED COMPLETE — OPTION A NOT COMPLETE`
 
 ## Gate candidat suivant
 
-`GO REVIEW A5.2 RESERVATIONS AUTHORITY AND ATOMICITY FRAMING — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`
+`GO REVIEW MORRIS A5.2 DECISION RECORD AND PREPARE DOCUMENTARY PR READINESS — SFIA STUDIO V3-NATIVE — NO DELIVERY OR CUTOVER — KEEP T-A7 NOT OPEN`
 
 **Statut :** `NOT CONSUMED`
```
