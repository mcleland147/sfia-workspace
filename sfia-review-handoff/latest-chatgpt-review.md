# SFIA STUDIO — P6 HUMAN QA — Fresh AtelierNova Campaign Runtime Setup
## Review Pack FULL — CRITICAL

**Horodatage UTC :** 2026-10-18T18:03:56Z
**GO Morris :** Nouvelle campagne Human QA vierge autorisée — rebuild/restart contrôlés localhost:3020. Recovery historique EC ANNULÉ pour cette campagne.
**Macro :** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Chantier :** P6-INTEGRATED-PRODUCT-ARCHITECTURE-RECOVERY
**Milestone :** P6 — Global Integrated Product QA
**Cycle projet :** 9 — QA / validation
**Profil :** CRITICAL
**Typologie :** QA / RUN — CONTROLLED FRESH CAMPAIGN SETUP
**CKC :** pilots/04-qa-validation.md — status candidate — guidance cognitive uniquement — aucune autorité d'exécution

---

## 1. Git Truth

| Champ | Valeur |
|---|---|
| Repository | mcleland147/sfia-workspace |
| Worktree | /Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8 |
| Branche | `delivery/sfia-studio-p6-integrated-architecture-recovery` |
| HEAD | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| origin/main | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| Base | `304e30e8f9d19fad753a76c7a7b89b5b7e34c3f8` |
| Cohérence | HEAD == origin/main == base — OK |
| Staged | vide |
| Candidat Option B | dirty volontaire (non committé) |
| Push Product | aucun |

### git status --short

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.firstCycleLiveProgression.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.arch.virginFirstCycleJourney.d0.test.ts
?? projects/sfia-studio/app/features/project-assistant/f2/conversationWorkflowDiscrimination.ts
?? projects/sfia-studio/app/features/project-assistant/f2/cycleLifecycleConversationCoordinator.ts
?? projects/sfia-studio/app/features/project-assistant/f2/genericExecutionConversationCoordinator.ts
```

Aucun fichier Product versionné modifié par ce cycle QA (hors dirty Option B préexistant). `.env.local` non modifié — overrides processus uniquement.

---

## 2. Sources & Convergence Pre-check

Sources applicables lues : cycle routing/guardrails, P6 QA, Generic Execution architecture, production-runtime-reference 03–08, CKC 04-qa-validation candidate, Review Handoff `d7e03329` blob `0e092579`.

| Item | État |
|---|---|
| Capacité | V3-F05 |
| Milestone | P6 |
| Option B candidate locale | PRÉSENTE (coordinators + orchestrateF2 + same-turn currentness + tests arch) |
| Handoff courant | d7e03329 / 0e092579 — currentness correction |
| Recovery historique EC | ANNULÉ pour cette campagne (non exécuté) |
| P6 GLOBAL PASS | NON ACQUIS |
| Runtime v3 | NON ADOPTED |
| Dette | TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT OPEN |

KEEP : OA / LPS / HD / EC / Nora / Generic PREPARE / Cursor Gateway / Evidence / Auth.
ADAPT : aucun changement Product demandé.
Gap résolu ici : environnement HQA isolé vierge pour nouveau replay Greenfield.

Exit Proof cible : runtime accessible build corrigé + Product/Nora isolés + zéro objet métier initial.

---

## 3. Candidat Option B vérifié

Présence confirmée (pas déduite du seul rapport) :
- `orchestrateF2.ts` + `forceGreenfieldLifecycleRecommendationCognitive`
- `conversationWorkflowDiscrimination.ts` / `cycleLifecycleConversationCoordinator.ts` / `genericExecutionConversationCoordinator.ts`
- `orchestrateTurn.ts` + `queueGenericPrepareForTurnFinalization`
- `prepareGenericExecutionContractDraft.ts` + codes QUEUED / SUPPRESSED
- tests `p6.arch.*` (currentness, cycleLifecycleVsGeneric, virgin, firstCycleLive)

### Tests exécutés (DB isolées temporaires — pas HQA)

```
npx vitest run \
  p6.arch.genericPrepareSameTurnCurrentness.d0.test.ts \
  p6.arch.cycleLifecycleVsGenericPrepare.d0.test.ts \
  p6.arch.virginFirstCycleJourney.d0.test.ts \
  p6.arch.firstCycleLiveProgression.d0.test.ts
```
Résultat : **4 files / 17 tests PASS**

| Commande | Résultat |
|---|---|
| npm run typecheck | PASS |
| npm run lint | PASS |
| git diff --check (candidat) | PASS |

---

## 4. Ancien runtime

| Champ | Valeur |
|---|---|
| Port | 3020 |
| PID vérifié | **8146** next-server (v15.5.20) |
| Parent | 8114 `sh -c npm run preflight:runtime && next start --port 3020` |
| cwd | .../p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/app |
| Product DB ouverte | `.../p6-optionb-fresh-hqa-20261018T153758Z/product/oa-product.sqlite` |
| Attempts actifs | 0 |
| Arrêt | SIGTERM 8146+8114 après identité — port libre en 1s |

### Préservation anciennes DB (métier)

Avant arrêt :
```
captured_utc=2026-10-18T17:59:02Z
old_product_path=/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/product/oa-product.sqlite
old_nora_path=/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/nora/nora-session.sqlite
old_product_size=475136
old_nora_size=147456
old_product_sha256=8d6c1f331341d5545caef8c4ff40658578e1422accd6d6032d12b7039c3ce6da
old_nora_sha256=1120756a1c0b238d80ae51107c022e668fd7d79f87063d7ef7da862d8e4fdfae
old_product_mtime=1792342129
old_nora_mtime=1792342129
/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/nora:
total 384
drwxr-xr-x@ 3 morris  staff      96 Oct 18 18:48 .
drwxr-xr-x@ 6 morris  staff     192 Oct 18 17:37 ..
-rw-r--r--@ 1 morris  staff  147456 Oct 18 18:48 nora-session.sqlite

/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/product:
total 1048
drwxr-xr-x@ 3 morris  staff      96 Oct 18 18:48 .
drwxr-xr-x@ 6 morris  staff     192 Oct 18 17:37 ..
-rw-r--r--@ 1 morris  staff  475136 Oct 18 18:48 oa-product.sqlite

```

Après arrêt :
```
captured_utc=2026-10-18T17:59:11Z
old_product_size=475136
old_nora_size=147456
old_product_sha256=8d6c1f331341d5545caef8c4ff40658578e1422accd6d6032d12b7039c3ce6da
old_nora_sha256=1120756a1c0b238d80ae51107c022e668fd7d79f87063d7ef7da862d8e4fdfae
old_product_mtime=1792342129
old_nora_mtime=1792342129
/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/nora:
total 384
drwxr-xr-x@ 3 morris  staff      96 Oct 18 18:48 .
drwxr-xr-x@ 6 morris  staff     192 Oct 18 17:37 ..
-rw-r--r--@ 1 morris  staff  147456 Oct 18 18:48 nora-session.sqlite

/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T153758Z/product:
total 1048
drwxr-xr-x@ 3 morris  staff      96 Oct 18 18:48 .
drwxr-xr-x@ 6 morris  staff     192 Oct 18 17:37 ..
-rw-r--r--@ 1 morris  staff  475136 Oct 18 18:48 oa-product.sqlite
NOTE: size/mtime/sha may change due to clean SQLite checkpoint/WAL consolidation without business mutation

```

SHA256 Product/Nora **identiques** avant/après stop :
- Product `8d6c1f331341d5545caef8c4ff40658578e1422accd6d6032d12b7039c3ce6da`
- Nora `1120756a1c0b238d80ae51107c022e668fd7d79f87063d7ef7da862d8e4fdfae`

Objets historiques toujours présents (RO) :
- Project `prj:b6a33e10-f2af-4ded-86d8-5686620e8ca0`
- EC `xct:gen-prep:014a9689b6897d85f0ac4326` confirmation_required

Aucune migration / copie / suppression.

---

## 5. Nouvelle campagne

| Champ | Valeur |
|---|---|
| Campaign ID | `p6-optionb-fresh-hqa-20261018T175902Z` |
| Product DB | `.../.sfia-exec/p6-optionb-fresh-hqa-20261018T175902Z/product/oa-product.sqlite` |
| Nora DB | `.../.sfia-exec/p6-optionb-fresh-hqa-20261018T175902Z/nora/nora-session.sqlite` |
| Managed root | `.../.sfia-exec/p6-optionb-fresh-hqa-20261018T175902Z/managed-repos` |
| Logs | `.../.sfia-exec/p6-optionb-fresh-hqa-20261018T175902Z/logs/` |
| Runtime launcher | `.../p6-optionb-fresh-hqa-20261018T175902Z/runtime/launch.sh` + persistent Cursor shell |

Réutilisation de `p6-optionb-fresh-hqa-20261018T153758Z` : **refusée**.
Chemins absolus, distincts, hors D1/OPS1.
Managed clone : `git clone` depuis clone campagne précédente (git objects uniquement — pas de Product OA).

### Configuration LIVE (non sensible)

| Variable | Valeur effective |
|---|---|
| Nora | LIVE OpenAI (secrets existants, non affichés) |
| SFIA_STUDIO_CURSOR_REAL | 1 |
| SFIA_STUDIO_E2E_DETERMINISTIC_CURSOR_BOUNDARY | 0 |
| Auth | REAL GitHub OAuth existant |
| Product/Nora SQLite | REAL — nouveaux chemins |
| RepositoryBinding | server-owned (mcleland147/sfia-workspace) |
| Pilot authority | configuration locale existante |
| Overrides | processus (pas de mutation `.env.local`) |

### Résolution chemins

```
RESOLVED_PRODUCT=/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T175902Z/product/oa-product.sqlite
RESOLVED_NORA=/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T175902Z/nora/nora-session.sqlite
IS_NEW=true
IS_OLD=false

```

### Dépendance technique partagée (qualifiée)

`projects/sfia-studio/.sfia-exec/m4/launch-safety.sqlite` — journal mécanique Gate D / launch-safety, hors OA métier. Aucun Attempt créé. Risque contamination métier : **non** pour cette campagne vierge. Documenté, non STOP.

---

## 6. Build / Preflight / Start

| Étape | Résultat |
|---|---|
| npm run build | PASS |
| BUILD_ID | `BUILD_ID=Fb0Wls1YJefm6jQDesF24` (= `Fb0Wls1YJefm6jQDesF24`) |
| npm run preflight:runtime (env nouvelle campagne) | STUDIO RUNTIME PROFILE READY |
| repository | PASS |
| authority | PASS |
| managedRoot | NEW campaign path |
| cursorReal | READY |
| deterministic⊕REAL | PASS |
| realBoundaryConstructed | false (preflight assert OFF construct) |
| start:skip-preflight | NON utilisé |
| Nouveau PID | **82209** next-server |
| Wrapper | wrapper_pid=82133 utc=2026-10-18T18:01:42Z |
| cwd | delivery worktree `projects/sfia-studio/app` |

Preflight log :
```

> sfia-studio@0.1.0 preflight:runtime
> tsx scripts/studio-runtime-preflight.ts

STUDIO RUNTIME PROFILE READY
- repository: mcleland147/sfia-workspace (PASS)
- authority: PASS
- managedRoot: /Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T175902Z/managed-repos
- managedClone: /Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T175902Z/managed-repos/mcleland147__sfia-workspace
- cursorReal: READY
- deterministic⊕REAL: PASS
- realBoundaryConstructed: false

```

---

## 7. Contrôles HTTP

```
=== HTTP 2026-10-18T18:03:26Z ===
NEW_PID=82209
BUILD_ID=Fb0Wls1YJefm6jQDesF24
82209 82177 01:44 next-server (v15.5.20)
COMMAND   PID   USER   FD   TYPE DEVICE SIZE/OFF      NODE NAME
node    82209 morris  cwd    DIR   1,17      928 108625319 /Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/app
PATH=/login status=200 location:none body_bytes=8460
PATH=/studio status=307 location: /login?error=NO_SESSION&from=%2Fstudio body_bytes=38
PATH=/ status=307 location: /login?error=NO_SESSION&from=%2F body_bytes=32

```

Interprétation :
- `/login` → **200** (page login, non authentifié)
- `/studio` → **307** → `/login?error=NO_SESSION&from=%2Fstudio` (redirect valide — **pas** 200 authentifié)
- `/` → **307** → login NO_SESSION
Aucune simulation de connexion Pilote. Aucun Project créé.

Open files runtime (scoped) :
```
node    82209 morris    1w     REG               1,17      2898           108796438 /Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T175902Z/logs/next-start-3020.log
node    82209 morris    2w     REG               1,17      2898           108796438 /Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T175902Z/logs/next-start-3020.log

```
Aucun fichier campagne `p6-optionb-fresh-hqa-20261018T153758Z` ouvert par le nouveau PID.

---

## 8. Inventaire zéro état

```
inventory_utc=2026-10-18T18:03:26Z
product_db_state=NOT_INITIALIZED_FILE_ABSENT
business_objects=ZERO_BY_ABSENCE
nora_db_state=NOT_INITIALIZED_FILE_ABSENT
nora_transcripts=ZERO_BY_ABSENCE
product_path=/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T175902Z/product/oa-product.sqlite
nora_path=/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T175902Z/nora/nora-session.sqlite
managed=/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/p6-optionb-fresh-hqa-20261018T175902Z/managed-repos
shared_technical_launch_safety=/Users/morris/Projects/sfia-workspace-p6-arch-recovery-delivery-304e30e8/projects/sfia-studio/.sfia-exec/m4/launch-safety.sqlite
note_launch_safety=mechanical_GateD_token_store_shared_under_sfia-exec_m4_not_product_OA_no_Attempt_created
old_product_sha=8d6c1f331341d5545caef8c4ff40658578e1422accd6d6032d12b7039c3ce6da
old_nora_sha=1120756a1c0b238d80ae51107c022e668fd7d79f87063d7ef7da862d8e4fdfae
expected_old_product=8d6c1f331341d5545caef8c4ff40658578e1422accd6d6032d12b7039c3ce6da
expected_old_nora=1120756a1c0b238d80ae51107c022e668fd7d79f87063d7ef7da862d8e4fdfae
old_project_still_present=prj:b6a33e10-f2af-4ded-86d8-5686620e8ca0
old_ec_still_present=xct:gen-prep:014a9689b6897d85f0ac4326
resolved_product_is_new=true
preflight_managed_root_in_start_log=NEW_CAMPAIGN
attempts_created=0
projects_created_by_cursor=0

```

Qualification :
- Product DB : **NOT_INITIALIZED_FILE_ABSENT** → objets métier = zéro par absence
- Nora Session DB : **NOT_INITIALIZED_FILE_ABSENT** → transcripts = zéro par absence (création au premier tour attendue)
- Tables techniques absentes ≠ UNKNOWN présenté comme ZERO
- Aucun ancien projectId / EC dans la nouvelle campagne
- Aucun Attempt / Confirmation / Evidence créé par Cursor

---

## 9. Fake / Real

| Frontière | Mode |
|---|---|
| Runtime HQA | REAL config (Nora LIVE, OAuth REAL, SQLite REAL, Cursor REAL flag ON, DET OFF) |
| Tests candidat | Fake Nora boundary / DB temp uniquement |
| Cursor REAL Execute | NON lancé |
| Product actions | AUCUNE (interdit) |

Claims autorisés : ENVIRONMENT READY (isolation + build + readiness).
Claims interdits : P6 PASS ; READY FOR REAL EXECUTION ; RUNTIME V3 ADOPTED ; no-write closed.

---

## 10. Réserves / dette / gates

- Dette OPEN : TOOL-FIRST-REAL-NOWRITE-ENFORCEMENT
- launch-safety.sqlite partagé sous `.sfia-exec/m4` (technique)
- `.env.local` conserve encore les chemins anciens pour les shells non overridés — le processus :3020 utilise les overrides campagne
- Product/Nora DB fichiers absents jusqu'à première action Morris (normal)
- Recovery EC historique non traité (annulé) — gaps éventuels non clôturés

Gates Morris restants :
1. Review ChatGPT de ce handoff
2. Création manuelle AtelierNova depuis l'UI
3. Replay Human QA chaîne complète
4. Qualification REAL / no-write séparée

---

## 11. Verdict

**P6 HUMAN QA — FRESH ATELIERNOVA ENVIRONMENT READY — AWAITING MORRIS PROJECT CREATION.**

READY = ENVIRONMENT READY uniquement.
≠ P6 PASS ≠ READY FOR REAL EXECUTION ≠ RUNTIME V3 ADOPTED.

Instruction ChatGPT : lire ce handoff ; vérifier build corrigé, isolation, anciennes DB préservées (SHA), Product vide/non initialisé, Nora LIVE + Cursor REAL configurés + DET OFF, 0 Attempt, aucune Product action anticipée. Si confirmé, guider Morris vers création manuelle AtelierNova — ne pas commencer au Cadrage.

FIN — GO MORRIS FRESH HUMAN QA SETUP CONSUMED.
