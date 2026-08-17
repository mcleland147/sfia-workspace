# SFIA Review Pack — FULL — First REAL product loop (bounded read-only happy path)

## 1. Timestamp (Europe/Paris)

2026-08-17 12:30:57 CEST

## 2. Cycle / profil / typologie

- Cycle projet : **9 — QA / validation**
- Profil SFIA : **Critical**
- Typologie v2.4 : **INC — First REAL bounded validation increment**
- CKC : `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/04-qa-validation.md` — candidate — experimental cognitive guidance — **aucune autorité d’exécution**
- Posture : evidence-based ; Observation / Réserve / Verdict séparés ; pas de claim supérieur à la preuve ; aucun GO implicite

## 3. GO Morris exact consommé

```
GO — FIRST REAL PRODUCT LOOP — BOUNDED READ-ONLY HAPPY PATH
```

Autorise uniquement : OpenAI LIVE nécessaire à cette boucle ; runtime local Studio contrôlé ; `SFIA_STUDIO_CURSOR_REAL=1` uniquement dans ce runtime ; une seule exécution Cursor CLI REAL bounded read-only ; detached worktree technique ; safety journal M4 ; Product DB isolée ; actions UI du scénario pré-autorisé ; FULL review pack ; publication Review Handoff L3 borné.

N’autorise PAS : mutation source/tests/config/doctrine ; Cursor write ; shell demandé à Cursor ; deuxième scénario/retry REAL ; commit/push/PR/merge projet ; cleanup automatique du worktree REAL ; M6 ; UAT ; runtime v3 ADOPTED ; automatisation L5.

## 4–6. Git Truth PRE/POST

| Contrôle | PRE | POST |
|---|---|---|
| branch | `delivery/sfia-studio-pre-m6-ui-option-a` | identique |
| HEAD | `0d33478566627a9bf507d5a06323962d349308ee` | identique |
| origin/main | `0d33478566627a9bf507d5a06323962d349308ee` | identique |
| origin/sfia/review-handoff (parent) | `18f97ea00f6d88f15d80968f39ceaa562bf0cd95` | identique avant ce publish |
| staged | aucun | aucun |
| working tree | DIRTY — candidat Pre-M6 complet | DIRTY préservé (pas de reset/clean/stash/rebase/merge/stage projet) |

Git Truth Check d’entrée : **PASS** (refs attendues). Aucune mutation projet Git (commit/push/PR/merge) dans cette passe.

## 7. Sources consultées

Convergence : `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`, `sfia-studio-convergence-roadmap.md`

Doctrine v3 : 30, 32, 34, 35, 37 (framing pack)

Process : cycle routing, v2.5 cycles method-candidate, CKC 04-qa-validation, chatgpt-cursor operating model, rules-and-guardrails, cycle-execution-template

Handoff parent : `git show origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md` @ `18f97ea00f6d88f15d80968f39ceaa562bf0cd95`

Code REAL relu (sans mutation) : composeStudioProductRealBoundary, resolveBoundedReadOnlyBaseHeadSha, service, selectProductM3ResolutionProfile, prepareAndResolveM3ProductPath, confirmAndExecuteResolvedM3, executeConfirmedBoundedReadOnlyContract, completeBoundedReadOnlyLaunch, ingestEvidenceAndRecommend, postEvidenceNoraAnalysis, rehydrateEvidenceOutcomeFromLps, m4BoundedReadOnlyCursorAgent, studioCursorRealLaunchGateway, nodeCursorProcessRunner, studioGitWorktreeWorkspace, realLaunchSafety, sqliteLaunchSafetyJournal, platform/ai config+provider+openaiProvider

UI : e2e selectors (lecture seule), playwright.config (non utilisé pour démarrer le runtime — webServer forcerait FakeProvider), features/pre-m6-product-ui/**, actions.ts

## 8. Convergence qualification

Capacité principale visée : **V3-F05** conversation → décision → exécution → preuve → état, avec V3-F02/F11/F12/F14/F15.

Milestone : **PRE-M6**. Cette passe devait **COMPLETER** la première preuve réelle de la chaîne bounded read-only.

**Observation :** la chaîne a été exercée jusqu’au spawn-ACK REAL (Gate D consommé, 1 CREATED, 1 LAUNCHED, processRef, worktree isolé). Elle **n’a pas** atteint Evidence → Nora post-Evidence → LPS/reload de bout en bout, parce que le premier appel produit a rendu Attempt=`running` (CAS B) et l’UI Option A masque alors le bouton Confirmer (`canConfirmResolvedM3 = f3M3Resolved && !f3Execute`).

**Pas M6. Pas runtime v3 ADOPTED.**

## 9–10. Final C9 candidate identity + manifests

| Item | Valeur |
|---|---|
| Final C9 candidate-post.manifest SHA256 | `a396bf199111dac671f0cf6f7751a99449840330c14c76d57c00901d13c91873` |
| Fichiers | 979 |
| Vérification path+hash vs working tree | 0 missing, 0 mismatch |
| first-real candidate-pre.manifest SHA256 | `a396bf199111dac671f0cf6f7751a99449840330c14c76d57c00901d13c91873` |
| first-real candidate-post.manifest SHA256 | `a396bf199111dac671f0cf6f7751a99449840330c14c76d57c00901d13c91873` |
| pre == post byte-identical | **oui** |
| source/test/config drift | **0** |

## 11. Canonical Product DB PRE/POST

Path : `projects/sfia-studio/.sfia-exec/product/oa-product.sqlite`

| | exists | bytes | mtime | SHA256 |
|---|---|---|---|---|
| PRE | yes | 4792320 | 2026-08-17T09:08:47.096675+02:00 | `766405130d750cc0cf28595f7e95f77cdc510361c71cd1966ea3ac7c0ecd6ebd` |
| POST | yes | 4792320 | 2026-08-17T09:08:47.096675+02:00 | `766405130d750cc0cf28595f7e95f77cdc510361c71cd1966ea3ac7c0ecd6ebd` |

**Canonical Product DB unchanged.** Pollution historique C8 non nettoyée (interdit).

## 12. Isolated Product DB

Path absolu :

`/Users/morris/Projects/sfia-workspace-t-a7-lot1-post-merge/.tmp-sfia-review/worktrees/finops-t2-main/.tmp-sfia-review/worktrees/sfia-studio-m4-real-off/.tmp-sfia-review/first-real-product-loop/runtime/real-product.sqlite`

POST : exists=yes, bytes=253952, sha256=`39b45c8938179aceb80d029a7e211f670318fc2e3f54b17a8ed8b42ff78a2a0b`

## 13. Live runtime env NON SECRET

- cwd : `projects/sfia-studio/app`
- listen : `http://127.0.0.1:3020`
- npm pid : 70518 ; next-server pid : 70546
- `SFIA_STUDIO_PRODUCT_DB_PATH` = isolated real-product.sqlite (absolu)
- `SFIA_STUDIO_M3_LOCAL_MORRIS_AUTHORITY=1`
- `SFIA_STUDIO_CURSOR_REAL=1` (scoped to this process)
- `OPS1_CONVERSATION_PROVIDER` **ABSENT**
- `OPS1_CURSOR_REAL` **ABSENT**
- `SFIA_STUDIO_E2E_QA_CONTROL` **ABSENT**
- Playwright `webServer` **non utilisé** (il forcerait FakeProvider)

Runtime **arrêté** après la tentative (PID Next stoppé ; port 3020 libre ; pid Cursor 74486 absent).

## 14. Fake provider OFF

`OPS1_FAKE_FORCED=no`. `resolveConversationProvider()` n’a pas été forcé fake. Aucun marker `__F2_*`. Aucun `/api/e2e/option-a-qa-scenario`.

## 15. OpenAI config availability NON SECRET

Chargé depuis la config locale déjà présente :

`/Users/morris/Projects/sfia-workspace/projects/sfia-studio/app/.env.local`

(non copiée dans le worktree produit)

```
OPENAI_API_KEY_PRESENT=yes
OPENAI_MODEL_PRESENT=yes
OPENAI_MODEL=gpt-5-mini
OPS1_FAKE_FORCED=no
```

Clé : présente, non placeholder E2E (`sk-e2e-fake-not-a-real-key`), prefix kind `sk-proj`, length 164. **Valeur jamais loggée ni copiée dans ce pack.**

## 16. Cursor executable

Résolu (même priorité que le gateway, sans smoke launch préalable) :

`/Applications/Cursor.app/Contents/Resources/app/bin/cursor` — présent, executable.

## 17–18. Project inputs + ID

Créé via UI `/studio/projects/new` (après un premier submit opérateur à vide dû à hydratation — voir 99-operator-error.png ; **aucun Cursor lancé à ce moment**).

- Nom : `First REAL bounded read-only proof`
- Intention : Vérifier, via le chemin Studio gouverné, que Cursor peut lire uniquement le README.md à la racine d’un workspace Git isolé en lecture seule, sans modifier ni créer de fichier, sans commande Shell et sans action Git d’écriture.
- Précisions : Preuve unique FIRST REAL. Action autorisée : lecture seule bornée du README.md racine. Aucun changement de code, aucun commit, aucun push, aucune PR, aucun merge.
- Project ID : `prj:23a0418c-146e-4647-bcfa-7bfdcacf8022`
- URL : `http://127.0.0.1:3020/studio/projects/prj%3A23a0418c-146e-4647-bcfa-7bfdcacf8022`

## 19. Initial OpenAI/Nora evidence

**Observation (LIVE, pas Fake) :**

- Premier send (création) : `POST ... 200 in 22336ms` puis événements CKC `cyc:qa-validation` / profile Critical.
- Second send (reprise process-local après restart opérateur, **même Project**, avant Cursor) : `POST ... 200 in 20608ms` puis CKC profile Light.
- Aucun `[TEST/FAKE]`, aucun `__F2_*`.
- UI Option A n’expose pas `providerResponseId` / usage tokens / `providerId=openai` dans le DOM (pill = « Nora / Recommande — la décision vous appartient » ; le chip « Mode live » n’est affiché que si indisponible).
- **Ne pas inventer de providerResponseId.**
- Preuve live objectivement observable : latence ~20s, config live, fake OFF, texte non marker-seeded.

## 20. Proposal facts (second send — celui qui a reçu le GO)

- Status : `DECISION_REQUIRED`
- Reformulation : preuve réelle bornée que Cursor ne peut lire que README.md racine d’un workspace Git isolé en lecture seule, aucune écriture, aucune commande Shell.
- Scope : lecture seule README.md racine ; traces/audit ; exclut écriture, autres fichiers, shell.
- Hors périmètre : modifier le code ; créer/modifier fichiers ; shell ; git write (commit/push/PR/merge) ; autres fichiers ; repos non isolés.
- Compatible avec le GO Morris pré-autorisé : **oui** (read-only inspection README ; hors-scope = mutations).

## 21. HumanDecision / DecisionBasis

- Decision ID : `dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96`
- Kind : GO
- Status : accepted
- Actor : `actor:local-morris-m3`
- DecisionBasis.sourceType : `proposal`
- DecisionBasis.sourceRef : `prop:f2:d552d14c-843e-43be-9f93-9b51bdcac36b`
- DecisionBasis.sourceDigest : `f396a934bf07c49ec4a0eca260448fb14db26e5d60f9c355a4e8ba7e42c0db36`
- LPS version au GO : v4 active (v1 create → v2 première Nora → v3 seconde Nora → v4 HumanDecision)
- Cette action **matérialise** le GO Morris déjà reçu ; ce n’est pas une nouvelle décision autonome Cursor.

## 22–25. ExecutionContract + Confirmation

Successor UI avant Confirmation :

- ID : `xct:m3-res:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96`
- version UI : 2 (puis confirm → executing version 4 en DB)
- status UI : `confirmation_required`
- action : `cursor.read_only.inspect`
- target : `workspace.isolated.read`
- scope : `studio.m4.real_off`
- requiredCapabilities : `["cap:cursor.read_only"]`
- constraints : BOUNDED READ-ONLY ; CURSOR CLI REAL PROFILE ; GATE D REQUIRED ; NO GIT WRITE ; NO GITHUB WRITE ; NO CLIENT COMMAND ; NO WILDCARD
- semantic fingerprint : `0492e73d21bb1d829d4d09ead63123e53fd8cbe148ce2cf41c4fea1cfd3939ef`
- `inputs.baseHeadSha` : `0d33478566627a9bf507d5a06323962d349308ee` (**server-side pin exact**)
- aucun UNRESOLVED, aucun wildcard, aucune command/workspace/adapter client

Confirmation : bouton UI `f3-confirm-execute-button` unique. Niveau produit **N3** (`confirmAndExecuteResolvedM3` identities). Confirmation process-local (G-UX-09).

Original PREPARE : `xct:m3:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96` (superseded).

## 26–32. Gate D / Attempt / launch

- grant_id : `gd:m3:m3-res:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96`
- grant status : **consumed** (issued_at=consumed_at `2026-08-17T10:28:08.238Z`)
- Attempt ID : `xat:m3:m3-res:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96`
- Attempt status durable : **running** (jamais terminalisé)
- agent : `agt:m4.cursor.bounded_readonly`
- adapter (journal LAUNCHED + audit) : `adp:m4-cursor-cli-real`
- processRef : `pid:74486`
- CREATED count : **1**
- LAUNCHED count : **1**
- launch count : **1**
- retries REAL : **0**
- second Attempt : **0**

Audit Next : `oa.execution_attempt.started` durationMs=496, newStatus=running, adapterId=`adp:m4-cursor-cli-real`.

## 33–35. Worktree

Path :

`projects/sfia-studio/.sfia-exec/m4-worktrees/wt-xat_m3_m3-res_dec_f2_453ff36a-ac4b-459c-9d75-6f3-7dda85f19447a529bfe21555`

| | HEAD | status porcelain |
|---|---|---|
| after create / after fail | `0d33478566627a9bf507d5a06323962d349308ee` | vide |

README.md sha256 : `c12f9dcf93fe7f47ca7770f6cb7320ded27308b72f0117bdbd72c264d227e871`

**TEMPORARY WITH EXIT — FIRST REAL WORKTREE** — cleanup subject to subsequent reviewed trajectory. **Non supprimé.**

Git invariant read-only (HEAD+porcelain) : **préservé**.

## 36–38. Process observation

| Champ | Observation |
|---|---|
| realProcessInvoked | **true** au spawn-ACK (journal LAUNCHED + audit started) |
| processRef | `pid:74486` |
| timedOut | **non observé terminalement** (pas d’awaitCompletion produit) |
| exitCode | **non observé terminalement** |
| duration | StartExecution 496ms jusqu’ACK ; pid absent ~2s après ACK côté opérateur |
| stdout | **non récupérable** sans seconde invocation produit (runner process-local) |
| stderr | **non récupérable** de même |
| M4_READ_ONLY_OK | **non prouvé** |
| M4_READ_ONLY_UNAVAILABLE | **non observé** |

Le process Cursor de CET Attempt n’était plus vivant au post-state. Aucun child Cursor attribuable n’était actif avant stop Next.

**Limite shell telemetry :** instruction ask-mode fixe + sandbox + worktree git-clean prouvent des *effets* bornés git, mais l’absence de Shell interne Cursor n’est pas indépendamment observable (pas de télémétrie outil exposée). **Ne pas inventer cette preuve.**

## 39–44. Evidence / Nora post / LPS / reload

- Evidence ID : **absent** (aucune ligne `oa_evidence`) — conforme au design R3 : pas d’Evidence success avant terminal
- ReviewBundle ID : **absent**
- post-Evidence OpenAI/Nora : **non appelé**
- Recommendation authority flags : **non produits**
- LPS après GO : décision présente ; `evidenceIds=[]` ; `reviewBundleIds=[]`
- History : décision/contrat visibles selon projections ; Attempt running non terminal
- Reload/rehydrate Evidence : **non exécuté** (arrêt après FAIL continuation)

G-UX-09 : Conversation/Proposal/Confirmation process-local — observé (reprise projet a nécessité un second send Nora pour réafficher la gate).

## 45. Screenshots

Sous `.tmp-sfia-review/first-real-product-loop/screenshots/`

| file | sha256 | preuve |
|---|---|---|
| 01-project-created.png | `1e507c38e3e46748725373d1dafc6cdf362a9128451eb3488cd1e5591208c9af` | projet |
| 02-live-nora-proposal.png | `499e1dd8b15251a7e151c41f5a94e9ba91f37cc5be6df857c3058d9309ec62ef` | proposal live |
| 03-human-decision-go.png | `e802b52a901555277dd15e05a5ff6bcbdc7d78a0411f4c3aab45ce23dac4149a` | GO |
| 04-bounded-contract.png | `fbcdbc2efe3203b0edca9c704e848491c2f80de033d7363f10c248699a9ee506` | contract exact |
| 05-real-attempt-running-or-terminal.png | `7c2971707679fc845a0086783c3119fbb15126731ba3de1b7f750ac53b73c451` | Attempt running |
| 99-operator-error.png | `fe3b01e7d663edb07d5fb2477e643e6c16ccfd7ea92c0eaeaacd548f8c564902` | 1er submit UI vide (hydratation) — pre-Cursor |

06/07/08 (Evidence / post-Nora / reload) : **non capturés** — états non atteints.

Les captures prouvent l’état runtime. Elles ne prouvent pas Figma pixel-perfect, production ready, ni runtime v3 ADOPTED.

## 46–48. Mutations

- source/test/config mutation : **0**
- canonical Product DB mutation : **0**
- project commit/push/PR/merge : **0**
- staged : **0**

## 49. Worktree temporary debt / exit

TEMPORARY WITH EXIT — FIRST REAL WORKTREE. Conservé. Pas de cleanup dans cette passe.

## 50. Shell-observability reserve

**KEEP RESERVE.** Fixed ask-mode instruction + sandbox + clean worktree git status. Internal tool-level shell absence not independently observable.

## 51. Reserves (severity)

| ID | Sévérité | Statut |
|---|---|---|
| REAL async continuation not reachable from Option A UI after spawn-ACK (`f3Execute` cache le Confirm) | **BLOCKING** for full loop proof | OPEN — cause du FAIL |
| Terminal process observation (exit/stdout/`M4_READ_ONLY_OK`) not in Product DB | **BLOCKING** for PASS taxonomy | OPEN |
| Evidence / ReviewBundle / post-Evidence Nora / LPS evidence ids | **BLOCKING** for PASS taxonomy | NOT REACHED |
| G-UX-08 AMEND deferred | inherited | OPEN/DEFERRED |
| G-UX-09 Conversation/Proposal/Confirmation process-local | inherited KEEP | confirmed |
| G-UX-11 | SATISFIED CANDIDATE (Final C9) — **not CLOSED** | unchanged |
| `studio.m4.real_off` naming | inherited KEEP | unchanged |
| Historical C8 canonical DB pollution | inherited — do not clean | unchanged |
| Temporary REAL worktree | KEEP WITH EXIT | new |
| Shell/tool telemetry observability | KEEP | new/confirmed |
| Option A UI does not expose OpenAI providerResponseId/usage | non-blocking documentation | new |
| Operator first empty submit (hydration) | non-blocking campaign | closed by operator fix, pre-Cursor |

Toute réserve bloquante reste bloquante.

## 52. Claims / anti-claims

**Claim autorisé ici :** aucune promotion PASS. Claim factuel : *first REAL spawn-ACK on the governed bounded read-only path was observed (one Attempt, one launch), but the full product loop is not proven.*

**Interdit :**
- FULL REAL PRODUCT LOOP PROVEN FOR BOUNDED READ-ONLY HAPPY PATH
- production ready
- write Cursor validated
- arbitrary repo read validated
- shell execution validated
- multi-agent validated
- UAT ready
- M6 authorized
- runtime v3 ADOPTED
- global v3 adopted
- L5 authorized
- Pre-M6 COMPLETE
- G-UX-11 CLOSED

Maturité à conserver :

`M1→M5 FUNCTIONAL BACKBONE VALIDATED UNDER DETERMINISTIC QA, WITH SELECTIVE REAL BOUNDARY PROOFS; FULL REAL PRODUCT LOOP NOT YET PROVEN.`

## 53. Verdict

```
FAIL —
FIRST REAL PRODUCT LOOP INCOMPLETE AFTER REAL LAUNCH
ONE REAL ATTEMPT OBSERVED
FULL BOUNDED READ-ONLY PRODUCT LOOP NOT PROVEN
NO RETRY PERFORMED
```

Cause déterministe produit/UI (pas un retry) :

```
FAIL — REAL ASYNC CONTINUATION NOT REACHABLE FROM PRODUCT UI
```

CAS B observé : premier `confirmAndExecuteResolvedM3` → Attempt=`running` (spawn-ACK). `completeBoundedReadOnlyLaunch` a rendu `running` via `observe()` pending. Le bouton Confirmer disparaît (`!f3Execute`). Aucune autre action UI existante ne reprend le même Attempt sans contourner le produit (pas d’appel server action direct, pas de second Attempt, pas de retry REAL).

## 54. Exact next Morris gate

**MORRIS — PRE-M6 STATUS / NEXT TRAJECTORY DECISION** après revue ChatGPT de ce handoff.

Ne pas exécuter : M6, seconde exécution REAL, cleanup worktree, commit/push projet.

## 55. Campaign artifacts / log excerpts redacted

- `.tmp-sfia-review/first-real-product-loop/**`
- `.tmp-sfia-review/chatgpt-review.md` (ce pack)
- runtime log redacted : `.tmp-sfia-review/first-real-product-loop/runtime/next-live.log.redacted.txt`
- safety journal : `projects/sfia-studio/.sfia-exec/m4/launch-safety.sqlite`
- isolated DB : path ci-dessus
- Next excerpt (no secrets) :

```
POST /studio/projects/prj%3A23a0418c-146e-4647-bcfa-7bfdcacf8022 200 in 22336ms
POST /studio/projects/prj%3A23a0418c-146e-4647-bcfa-7bfdcacf8022 200 in 20608ms
oa.execution_attempt.agent_selected selectedAgentRef=agt:m4.cursor.bounded_readonly
oa.execution_attempt.started adapterId=adp:m4-cursor-cli-real newStatus=running durationMs=496
```

Aucun OPENAI_API_KEY / auth header dans ce pack.

---

## Instruction ChatGPT

Lire obligatoirement :

`origin/sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

Vérifier indépendamment : Final C9 identity ; OpenAI LIVE (latence + config, pas de responseId inventé) ; HumanDecision/Contract exacts ; safety journal 1 CREATED + 1 LAUNCHED ; one Attempt / one launch ; processRef ; worktree cleanliness ; **absence** Evidence/RB/post-Nora ; source drift 0 ; canonical DB invariant ; redacted logs ; réserve bloquante UI continuation.

Ne pas valider depuis le résumé terminal seul.
