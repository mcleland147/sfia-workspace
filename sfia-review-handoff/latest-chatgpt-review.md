# ChatGPT Review Pack — FULL
## Cycle 6 — Architecture technique — EXECUTION WINDOW + OBSERVATION POLICY

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-08-17 15:45:01 CEST (+0200) |
| **Niveau** | FULL |
| **Cycle** | 6 — Architecture technique |
| **Profil SFIA** | Critical |
| **Typologie v2.4** | EVOL / architecture technique bornée Pre-M6 |
| **CKC** | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` blob `1c35b8065c311c43422c7b0684128db89e0f4593` — candidate 0.1.0 — experimental cognitive guidance — **aucune autorité d’exécution** |
| **Gate consommé** | `GO MORRIS — ARCHITECTURE TECHNIQUE EXECUTION WINDOW + OBSERVATION POLICY` |
| **Repo** | `mcleland147/sfia-workspace` |
| **Branche candidat** | `delivery/sfia-studio-pre-m6-ui-option-a` |
| **HEAD** | `0d33478566627a9bf507d5a06323962d349308ee` |
| **origin/main** | `a3ac418f3bc2ebb006cbc58f902f13629871014d` |
| **origin/sfia/review-handoff (entrée)** | `1f6c92495a3a2f61b17d18e354babd35cbdf18bf` |
| **Parent REAL blob** | `8e7160be47123f2b8c8e36e15879883522c6d835` |
| **Posture** | ZERO REAL — ANALYSIS / DESIGN ONLY — NO DELIVERY |
| **Verdict** | **READY FOR MORRIS ARCHITECTURE DECISION** |

Cursor recommande. Cursor **ne décide pas**. Aucun claim `ARCHITECTURE ADOPTED`.

---

## 1. Timestamp Europe/Paris

2026-08-17 15:45:01 CEST (+0200)

---

## 2–4. Cycle / profil / typologie / GO Morris

Cycle 6 — Architecture technique. Profil Critical. Typologie EVOL / architecture technique bornée Pre-M6.

Justification Critical (GO) : le chantier touche la gouvernance ExecutionContract, le lifecycle ExecutionAttempt, la frontière Cursor REAL, le timeout process, l’observation async, la preuve terminale, l’Evidence pipeline, et le comportement d’exécutions pouvant durer de quelques minutes à potentiellement une heure.

**GO Morris interprété — ce que ce cycle décide de poser, pas d’adopter :**

Le GO autorise uniquement l’architecture permettant de définir :

- A. une politique générique de durée maximale des exécutions Cursor ;
- B. une politique générique d’observation du **même** ExecutionAttempt ;
- C. leur articulation ExecutionContract / ExecutionAttempt / RealExecutionLaunchPort / ProcessRunner / UI ;
- D. la trajectoire Delivery puis nouvelle preuve REAL.

**Ce GO ne décide PAS :**

- les valeurs définitives 5 / 15 / 30 / 60 minutes ;
- le nom final d’un champ de schéma ;
- une formule précise de polling ;
- une architecture worker / queue / scheduler ;
- une mutation de persistence ;
- une modification du runtime ;
- une nouvelle preuve REAL.

ZERO REAL. Aucune implémentation sous couvert d’architecture (CKC).

---

## 5. Local Git Truth (mesuré, non inventé)

Commandes exécutées : `git fetch origin main sfia/review-handoff` (cycle) ; `git branch --show-current` ; `git rev-parse HEAD` ; `git rev-parse origin/main` ; `git rev-parse origin/sfia/review-handoff` ; `git status --short` ; `git diff --cached --name-status` ; `git worktree list --porcelain`.

Aucune commande `reset` / `clean` / `stash` / `rebase` / `merge` / `cherry-pick` / checkout destructif.

| Mesure | Valeur |
|--------|--------|
| Branche | `delivery/sfia-studio-pre-m6-ui-option-a` |
| HEAD | `0d33478566627a9bf507d5a06323962d349308ee` |
| origin/main | `a3ac418f3bc2ebb006cbc58f902f13629871014d` — **match attendu** |
| origin/sfia/review-handoff | `1f6c92495a3a2f61b17d18e354babd35cbdf18bf` — **match attendu** |
| Staged | vide (`git diff --cached --name-status` = 0 lignes) |
| Dirty working tree | **88** lignes `git status --short` : **50** `M` + **38** `??` |
| `origin/main..HEAD` | vide — le HEAD candidat n’apporte **aucun** commit projet non présent dans main |
| `HEAD..origin/main` | 2 commits method only (PR #360) : `085828e` docs fake-real progressive proof ; `a3ac418` merge PR #360 |
| `projects/sfia-studio/app/**` vs origin/main | **0 fichiers** — pas de divergence applicative Studio post-contexte |
| CKC blob origin/main | `1c35b8065c311c43422c7b0684128db89e0f4593` — **match attendu** |
| Parent handoff blob | `8e7160be47123f2b8c8e36e15879883522c6d835` |

**ARCHITECTURE INPUT STATE :** non divergé. Pas de STOP « CHATGPT REQUALIFICATION REQUIRED ».

Candidat Pre-M6 Option A : **dirty**, issu d’une longue trajectoire locale. Les changements Option A sont dans le working tree, pas dans HEAD. Ce cycle **n’a muté aucun** fichier sous `projects/sfia-studio/app/**`. Écritures limitées à `.tmp-sfia-review/**`.

Worktree candidat :

```
worktree …/sfia-studio-m4-real-off
HEAD 0d33478566627a9bf507d5a06323962d349308ee
branch refs/heads/delivery/sfia-studio-pre-m6-ui-option-a
```

Handoff publisher WT (non muté avant publish L3) :

```
worktree /Users/morris/Projects/sfia-workspace/sfia-review-handoff
HEAD 1f6c92495a3a2f61b17d18e354babd35cbdf18bf
branch refs/heads/sfia/review-handoff
```

Worktrees REAL historiques **présents, non nettoyés, non repris** :

- `…/m4-worktrees/wt-xat_m3_m3-res_dec_f2_453ff36a-ac4b-459c-9d75-6f3-7dda85f19447a529bfe21555` (FIRST REAL historique)
- `…/m4-worktrees/wt-xat_m3_m3-res_dec_f2_4a36c225-56e5-4654-bfbe-b86-67bf74b58c5f1b2fceb4eb6b` (Cycle 9 re-proof)

---

## 6. Sources lues (origin/main + inspection locale sans mutation)

**Processus :**

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- CKC pilots `03-architecture-technique.md` (blob ci-dessus)
- `method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md` §4.6
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`

**Convergence :**

- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`

**Doctrine produit (30–37, nécessaires) :**

- `projects/sfia-studio/sfia-v3-framing/34-agent-capabilities-reversibility-and-execution-governance.md` (V3-F11 / V3-F12)
- `projects/sfia-studio/sfia-v3-framing/35-artifact-evidence-debt-and-controlled-learning.md` (V3-F14 / V3-F15 / V3-F10)

**Code inspecté, non modifié :**

- ExecutionContract : `domain/types.ts`, `invariants.ts`, `semanticFingerprint.ts`, SQLite `payload_json`, schema modeled `execution-contract.schema.json` 0.2.0-oa
- ExecutionAttempt : `domain/types.ts`, `application/attemptPolicy.ts`, `application/triggerAttemptTimeout.ts`
- REAL : `ports/realExecutionLaunchPort.ts`, `infrastructure/studioCursorRealLaunchGateway.ts`, `infrastructure/nodeCursorProcessRunner.ts`
- Orchestration : `executeConfirmedBoundedReadOnlyContract.ts`, `completeBoundedReadOnlyLaunch.ts`, `confirmAndExecuteResolvedM3.ts`, `composeStudioProductRealBoundary.ts`, `boundedReadOnlyM3ResolutionProfile.ts`
- UI : `useProductConversation.ts`, `ConversationSurface.tsx`, `ProjectAssistantPanel.tsx`, `presentationLabels.ts`
- Tests : T-R3-ASYNC (`preM6.realProductWiringResidual.test.ts`), deterministic Cursor boundary, `runningAttemptRefresh.ui.test.tsx`, Playwright Option A deterministic

---

## 7. Latest REAL handoff (entrée Cycle 6)

Lu : `origin/sfia/review-handoff:sfia-review-handoff/latest-chatgpt-review.md`

| Champ | Valeur |
|-------|--------|
| Cycle | 9 — QA / validation |
| Objet | NEW BOUNDED REAL PRODUCT LOOP RE-PROOF |
| Verdict | **INCOMPLETE — REAL PROCESS TERMINAL STATE NOT REACHED WITHIN BOUNDED CAMPAIGN** |

**Points factuels conservés (ne pas terminaliser, ne pas relancer) :**

- fresh Project `prj:a8b8eed8-b8d1-43f3-bd9e-306046797f61`
- fresh Attempt `xat:m3:m3-res:dec:f2:4a36c225-56e5-4654-bfbe-b86e3fc5ba4b`
- one N3 Confirmation ; one Gate D `gd:m3:m3-res:dec:f2:4a36c225-56e5-4654-bfbe-b86e3fc5ba4b`
- CREATED=1 ; LAUNCHED=1 ; processRef unique `pid:36552`
- Cursor REAL spawn ACK observé
- same-Attempt UI continuation fonctionnelle (`Actualiser le résultat`)
- trois refresh sur le **même** Attempt, consommés quasi immédiatement (~200 ms)
- process Cursor ensuite observé NOT_ALIVE côté OS
- Product DB restée `running`
- terminal `exitCode` / stdout / `M4_READ_ONLY_OK` **non consommé**
- Evidence / ReviewBundle absents ; Nora L2 absente
- **END-TO-END REAL NOT PROVEN**

Attempt historique FIRST REAL **jamais repris** : `xat:m3:m3-res:dec:f2:453ff36a-ac4b-459c-9d75-6f366676db96`.

Le « maximum 3 refresh » est un **borne de campagne / opérateur**, pas un invariant produit. C’est un des faits que cette architecture doit **FREEZE** comme pseudo-garde-fou.

---

## 8. Convergence Pre-check

Triggered : **OUI**

| Capacité | Rôle |
|----------|------|
| V3-F11 AgentCapability | principale |
| V3-F12 Action / Execution governance | principale |
| V3-F05 conversation → décision → exécution → preuve → état | e2e supportée, **NON COMPLETE** |
| V3-F14 completeness / Evidence | associée |
| V3-F15 maturity / anti-claims | associée |
| V3-F10 dette | associée si dette temporaire identifiée |

Milestone : **PRE-M6**. État : **NON COMPLETE**. Runtime v3 : **NON ADOPTED**.

**KEEP :** ExecutionContract natif ; ExecutionAttempt ; one-launch ; Confirmation / Gate D ; processRef ; RealExecutionLaunchPort ; ProcessRunner `invoke` séparé de `observe` / `awaitCompletion` ; same-Attempt continuation ; UI running ; Evidence pipeline ; deterministic boundary comme substitution **externe** de test.

**ADAPT :** propriété / source du timeout ; propagation de la durée vers la frontière REAL ; modèle d’observation du même Attempt ; règles deadline / terminal / timeout ; orchestration / UI nécessaires.

**FREEZE :** règle de campagne « maximum 3 refresh » comme pseudo-garde-fou produit ; 60 secondes comme hypothèse universelle de durée ; toute logique spécifique au README / à la preuve REAL comme architecture cible.

**NE PAS décider REPLACE / COMPLETE** avant GO Morris d’adoption. Gap : Execution Window + Observation Policy génériques **non encore formalisées** (ce pack). Trajectoire : REAL re-proof INCOMPLETE → **ce Cycle 6** → décision Morris → Cycle 8 Delivery éventuel → deterministic QA → nouveau GO Morris REAL éventuel → end-to-end REAL re-proof. **Aucune architecture parallèle.**

---

## 9. Current architecture facts (code vérifié)

### 9.1 ExecutionContract — pas de fenêtre first-class

`ExecutionContract` (`schemaVersion` `0.2.0-oa`) porte : action, target, scope, constraints, stopConditions, evidenceRequirements, reversibility, requiredAuthority, semanticFingerprint, etc.

**Absent :** `executionWindow`, `maxDurationMs`, `executionDeadlinePolicy`, `timeoutPolicy`, classe d’exécution.

Le modeled schema `execution-contract.schema.json` n’a **aucun** champ timeout/window (`additionalProperties: false`). Persistence SQLite = `payload_json` du contrat entier : un futur champ domaine peut entrer dans le JSON **sans** nouvelle colonne SQL, mais **avec** impact fingerprint + schema modeled + invariants.

`durationMs` dans les use-cases T-A4 est la **durée de la commande** (build/validate/confirm), pas une fenêtre d’exécution Cursor.

`semanticFingerprint` matérialise les champs d’intention d’exécution (action/target/scope/constraints/stopConditions/…). Une fenêtre ou classe d’exécution **devient execution-significant** si elle change le droit de tuer / la deadline. Elle devrait donc entrer dans le fingerprint **si** elle est first-class sur le contrat. Nom de champ **non figé**.

### 9.2 ExecutionAttempt — timeout domaine 30 min, commande explicite

`DEFAULT_ATTEMPT_POLICY.attemptTimeoutMs = 30 * 60 * 1000` (30 minutes).

`TriggerAttemptTimeout` : **pas** de scheduler / worker / queue. Deadline = `startedAt + policy.attemptTimeoutMs`. Avant deadline → refuse `TIMEOUT_NOT_REACHED`. Après → Attempt `timeout`, contract `failed`. Idempotent. Auto-safety bornée, jamais Morris-équivalent, jamais cancel.

L’Attempt **ne stocke pas** `processRef`. Le processRef vit sur le journal de safety (`LAUNCHED` frontier). `completeBoundedReadOnlyLaunch` relit cette frontier puis appelle `observe`.

### 9.3 RealLaunchRequest — pas de timeout contractuel

`RealLaunchRequest` : attemptId, executionContractId, version, semanticFingerprint, selectedAgentRef, adapterRef, correlationId, baseHeadSha, action/target/scope optionnels.

**Pas de `timeoutMs`.** La durée n’est pas propagée depuis le contrat jusqu’à la requête de launch.

### 9.4 ProcessRunner — timeoutMs obligatoire à invoke

`ProcessRunnerInvokeInput.timeoutMs: number` (requis). `NodeCursorProcessRunner` pose un `setTimeout` qui SIGTERM le child après `input.timeoutMs`, marque `timedOut=true`, puis `close` termine l’observation.

`observe(processRef)` : snapshot **in-memory** ou `null` si absent du registry.

`awaitCompletion(processRef)` : Promise close du process **in-memory**, ou `null`.

### 9.5 Gateway — default technique 60 000 ms = root cause 60s

`StudioCursorRealLaunchGateway` :

```
this.timeoutMs = options.defaultTimeoutMs ?? 60_000;
```

puis `runner.invoke({ … timeoutMs: this.timeoutMs })`.

`composeStudioProductRealBoundary` instancie le gateway **sans** `defaultTimeoutMs` → **60s**.

Le chemin deterministic (`composeDeterministicCursorBoundary`) **substitue** gateway + runner ; il n’utilise pas ce default 60s. Parité Fake/Real aujourd’hui **cassée sur la durée** : REAL tue à 60s ; deterministic termine selon un **compteur d’observe** (`pendingObserveLimit`, défaut 2).

### 9.6 Orchestration — observe non bloquant + forge +31 min

`completeBoundedReadOnlyLaunch` :

1. Relit frontier LAUNCHED / processRef (fail-closed).
2. `observe()` d’abord.
3. Si pending (`realProcessInvoked && !timedOut && exitCode === null`) → retourne **`running`** sans Evidence. **N’attend pas.**
4. Si `observe` null → `awaitCompletion` (bloquant jusqu’à close **si** le registry a encore l’entrée).
5. Si `observation.timedOut === true` → appelle `triggerAttemptTimeout` avec `nowIso = startedAt + 31 minutes` pour **forcer** le deadline domaine 30 min, même si le process a été tué à 60s.

Ce `+ 31 * 60 * 1000` est une **couture de deux horloges désynchronisées**. Ce n’est pas une policy. Un Delivery futur doit la supprimer si une horloge unique est adoptée. Dupliqué conceptuellement dans `e2eOptionATerminalAttempt.ts`.

`executeConfirmedBoundedReadOnlyContract` : si Attempt `running` sans `resultRef`, appelle `completeBoundedReadOnlyLaunch`. Same-Attempt, pas de nouveau launch. Evidence uniquement si `succeeded` + `resultRef`.

### 9.7 UI — manuel uniquement

Label `BOUNDED_RUNNING_REFRESH_ACTION = "Actualiser le résultat"`. `refreshResolvedM3RunningAttempt()` ré-invoque le **même** chemin canonique M3 (`invokeCanonicalResolvedM3Path`). Pas de `setInterval` produit. Pas de worker. Campagne « 3 refresh » **absente du code produit**.

### 9.8 Process-local registry

`NodeCursorProcessRunner.processes = Map<string, TrackedProcess>` — commentaire explicite : *Single process-local observation registry — not Evidence, not durable.*

Si Next reste vivant : observe/awaitCompletion voient le PID, stdout/stderr cap 64 KiB, timedOut, exitCode.

Si Next redémarre : Map vide → `observe`/`awaitCompletion` retournent `null` → aujourd’hui fail-closed `REAL_COMPLETION_OBSERVATION_REQUIRED` alors que l’Attempt produit peut rester `running` (fait Cycle 9 : OS NOT_ALIVE + DB running).

### 9.9 Profil bounded read-only

`boundedReadOnlyM3ResolutionProfile()` : action/target/scope/constraints/stopConditions. **Aucune durée.** StopConditions actuelles = autorité / stale / Gate D / boundary disabled — pas `EXECUTION_TIMEOUT`.

---

## 10. Timeout current ownership (root cause 60s)

| Couche | Owner actuel | Valeur | Rôle |
|--------|--------------|--------|------|
| ExecutionContract | **aucun** | — | n’exprime pas la fenêtre |
| AttemptPolicy | T-A5 policy serveur | **30 min** | deadline **domaine** via commande explicite |
| RealLaunchRequest | **aucun** | — | ne transporte pas la durée |
| StudioCursorRealLaunchGateway | adapter default | **60 000 ms** si non injecté | **tue le process Cursor** |
| composeStudioProductRealBoundary | n’injecte pas | hérite 60s | composition REAL |
| ProcessRunner | enforce only | `input.timeoutMs` | SIGTERM |
| completeBoundedReadOnlyLaunch | couture | `startedAt+31min` forgé | aligne artificiellement domaine 30 min sur timedOut process |
| UI / campagne | opérateur | 3 refresh | **pas** un timeout |

**Root cause identifiée :** le kill process à ~60s est un **default technique d’adapter** (`defaultTimeoutMs ?? 60_000`), pas une politique de contrat, pas AttemptPolicy 30 min, pas une durée moyenne attendue de la tâche README.

**Ownership actuel du timeout process = adapter/gateway. Ownership actuel du timeout domaine = AttemptPolicy 30 min. Les deux divergents.** C’est le défaut d’architecture à corriger par ADAPT, pas par un troisième timeout parallèle.

---

## 11. Question A — Execution Window Policy

### OPTION A — FIRST-CLASS CONTRACT WINDOW

Le contrat porte explicitement une limite (noms candidats **non imposés** : `executionWindow`, `maxDurationMs`, `executionDeadlinePolicy`, `timeoutPolicy`).

Le runtime **dérive** : `startedAt`, `deadlineAt`, remaining, `ProcessRunner.timeoutMs`, schedule d’observation.

| Critère | Évaluation |
|---------|------------|
| Source de vérité | Contrat (intention gouvernée) |
| Explicabilité | Haute — la limite est dans l’objet confirmé |
| Auditabilité | Haute — fingerprint + payload_json |
| Extensibilité | Chaque contrat peut une durée différente ; risque de zoo de millisecondes |
| Schema impact | Breaking modeled 0.2.0-oa (`additionalProperties: false`) — bump ou champ ajouté required/optional |
| Fingerprint impact | **Oui** si execution-significant (recommandé) |
| Persistence | `payload_json` : pas de colonne SQL obligatoire ; mapper/types/invariants **oui** |
| Backward compatibility | Contrats existants sans champ : default policy serveur **fail-closed ou classe default explicite** — à décider |
| Couplage adapter | Faible si l’adapter n’invente plus |
| Fake/Real divergence | Faible si les deux lisent le même champ résolu |
| Réversibilité | Moyenne — retirer un champ fingerprinté = supersession |
| Complexité delivery | Moyenne |
| Dette | Defaults pour l’historique ; schema bump |

### OPTION B — EXECUTION PROFILE / CLASS

Le contrat référence une classe gouvernée (`short` / `standard` / `long` / `extended` — **noms non figés**). Une policy serveur résout classe → durée.

| Critère | Évaluation |
|---------|------------|
| Source de vérité | Classe sur le contrat + table de policy serveur |
| Explicabilité | Haute pour l’humain (« standard ») ; la ms est dérivée |
| Auditabilité | Classe fingerprintée ; **valeur résolue doit être journalisée** au launch (sinon la table peut changer sous un contrat confirmé) |
| Extensibilité | Ajouter une classe sans changer chaque contrat ; changer la table **change le comportement des contrats déjà confirmés** sauf si la résolution est **snapshotée** à confirm/start |
| Schema | Plus petit (enum) |
| Fingerprint | Classe oui ; table non (d’où snapshot) |
| Persistence | Enum dans payload_json + snapshot `resolvedMaxDurationMs` possible sur Attempt/journal — **pas encore présent** |
| Backward compatibility | Classe default pour bounded M3 |
| Couplage adapter | Faible |
| Fake/Real | Bon si même resolver |
| Réversibilité | Haute pour les ms ; moyenne pour l’enum |
| Complexité | Moyenne — il faut figer la résolution au start |
| Dette | Table de policy vs contrats immutables |

**Point dur Option B :** sans snapshot de la durée résolue à `StartExecution`, une modification ultérieure de la table réécrit silencieusement la deadline de contrats déjà confirmés. L’architecture cible doit **snapshoter** la durée effective au start (journal + Attempt technique), pas relire une table live.

### OPTION C — ADAPTER-LEVEL POLICY (état de fait actuel)

Le gateway choisit encore la durée (aujourd’hui : 60s default). Évaluée **honnêtement** comme option, **rejetée comme cible**.

| Critère | Évaluation |
|---------|------------|
| Source de vérité | Adapter / composition |
| Explicabilité | Faible — invisible au contrat confirmé |
| Auditabilité | Faible |
| Extensibilité | Chaque adapter invente |
| Schema / fingerprint | Nuls — **c’est le problème** |
| Couplage adapter | **Maximal** |
| Fake/Real divergence | **Déjà observée** (60s REAL vs compteur observe deterministic) |
| Réversibilité | On peut cesser d’inventer — c’est exactement l’ADAPT |
| Dette | Politique métier hors contrat |

Risque : la politique **sort du contrat métier**. Confirmation N3 / Gate D ne portent plus la limite réelle du process. Incompatible V3-F12.

### OPTION H — HYBRIDE (intention contrat + résolution serveur + adapter enforce)

- Contrat : classe **et/ou** limite d’intention (sans imposer le nom).
- Policy serveur : résout → `resolvedMaxDurationMs`, clamp cap global, **snapshot au start**.
- Adapter / ProcessRunner : **enforce only** — refuse d’inventer un default si la valeur résolue est absente (fail-closed, comme les adapters execution-run git/AI le font déjà pour `timeoutMs`).

C’est l’articulation qui préserve KEEP (contrat natif, port, runner) et ADAPT (ownership).

---

## 12. Question B — Timeout classes / values (proposition challengeable, NON figée)

**Ne pas confondre timeout autorisé et durée moyenne attendue.** Une tâche autorisée 60 minutes **peut** terminer en 20 secondes. La fenêtre autorise ; l’observation détecte.

| Classe candidate | Horizon | Familles de tâches (hypothèse) | Trop court | Trop long |
|------------------|---------|--------------------------------|------------|-----------|
| short | **5 min** | inspect borné, ping README, `M4_READ_ONLY_OK` attendu | kill Cursor encore en bootstrap | rare pour ce profil |
| standard | **15 min** | inspect repo local typical Pre-M6 | sous-estime un index/cold start Cursor | opérateur attend trop si la tâche est un ping |
| long | **30 min** | aligné **AttemptPolicy actuelle** ; analyses plus larges | — | process zombie / worktree occupé |
| extended | **60 min** | parcours large, futurs contrats plus lourds | — | ressource, recovery, UX d’attente |

**Cap global de sécurité (proposition, non adoptée) :** 60 minutes en Pre-M6 pour Cursor REAL bounded. Au-delà = **nouveau contrat** + autorité explicite (N3/Morris selon criticité), jamais un default adapter, jamais un retry implicite.

**Exception plus longue :** supersession vers un contrat `extended+` / classe exceptionnelle, Confirmation/Gate D **nouveaux**, Attempt **nouveau**. Pas un allongement du même Attempt.

**Default bounded read-only M3 (à décider par Morris, pas par Cursor) :** 15 min **ou** 30 min. 5 min est un plancher plausible pour le ping README **si** l’observation est rapide. **60s n’est pas une classe.**

Risque « trop court » = exactement l’échec Cycle 9 si Cursor dépasse la fenêtre avant stdout. Risque « trop long » = SIGTERM tardif, registry mémoire, worktrees, confusion opérateur — **pas** un argument pour tuer à 60s.

---

## 13. Question C — Observation Policy générique

Invariants : EXECUTION ≠ OBSERVATION. 0..N observes du **même** Attempt/processRef. Une observe ne consomme pas de GO, ne crée pas d’Attempt, ne relance pas Cursor, ne recrée pas Confirmation/Gate D, ne change pas le scope. Garde-fou = **nombre de LAUNCH**, pas un nombre de refresh.

La formule doit être **indépendante des millisecondes exactes** : elle prend `window` et produit un schedule. Tests déterministes injectent une fenêtre courte.

### OPTION O1 — PROPORTIONAL FIXED INTERVAL

`interval = clamp(window × 0.10, 15s, 120s)` — **exemple conceptuel uniquement**.

Première observe au launch (déjà vraie aujourd’hui), puis cadence fixe, observe forcée à deadline.

**Avantage :** simple, testable. **Inconvénient :** sur fenêtre 15–60 min, une tâche de 20s n’est détectée qu’à 90–120s (lag 70–100s). Contredit l’exigence « 30s ne doit pas attendre 5 ou 20 minutes » **en esprit** (ici ~2 min, pas 20, mais déjà trop pour un ping).

### OPTION O2 — ADAPTIVE BACKOFF

Probes rapides puis espacement, plafond lié à la fenêtre, observe forcée à deadline.

Exemple conceptuel utilisé pour la matrice : t=0, 5s, 15s, 30s, puis doublement borné par `maxCadence = clamp(window × 0.05, 30s, 180s)`.

**Avantage :** 20s détecté ~30s **sur toutes les fenêtres**. **Inconvénient :** plus d’états ; sur 60 min le cadence max 3 min laisse un lag jusqu’à ~1m30–3 min en régime ; formule plus difficile à expliquer.

### OPTION O3 — HYBRID (early probes fixes + cadence proportionnelle)

Early : 5s, 15s, 30s, 60s (indépendant de la fenêtre). Ensuite `interval = clamp(window × 0.10, 30s, 120s)`. Deadline forcée.

**Avantage :** ping 20–60s vu vite ; 30–60 min sans polling agressif. **Inconvénient :** deux régimes à documenter ; le palier 60s+interval peut laisser ~1–2 min de lag sur les milieux de fenêtre.

**O3 n’est pas adoptée automatiquement.** Elle est la famille la plus compatible avec les deux exigences contradictoires (court vs long) **sans worker**.

Aucune option n’introduit « 3 refresh ».

---

## 14. Simulations 5 / 15 / 30 / 60 (même formule par famille)

Convention : t=0 = launch ACK + première observe (déjà dans `completeBoundedReadOnlyLaunch`). Détection = premier tick `≥ fin réelle`. Si fin réelle `≥ window` → **DEADLINE_TIMEOUT** (process autorisé tué / Attempt `timeout`), pas « succès à 8 min sur une fenêtre 5 min ».

Formules = **illustrations challengeables**, pas un contrat d’implémentation.

### 14.1 O1 — interval = clamp(window×0.10, 15s, 120s)

| Window | Interval | Schedule (extrait) | n ticks jusqu’à deadline |
|--------|----------|--------------------|--------------------------|
| 5 min | 30s | 0, 30s, 1m … 5m | 11 |
| 15 min | 90s | 0, 1m30s, 3m … 15m | 11 |
| 30 min | 120s | 0, 2m, 4m … 30m | 16 |
| 60 min | 120s (cap) | 0, 2m, 4m … 60m | 31 |

| Window | Fin 20s | Fin 2m | Fin 8m | Fin 20m | Fin 45m | Juste avant deadline |
|--------|---------|--------|--------|---------|---------|----------------------|
| 5 min | detect 30s, lag 10s, obs≈2 | detect 2m, lag 0, obs≈5 | DEADLINE 5m, obs≈11 | DEADLINE | DEADLINE | detect 5m, lag 5s, obs≈11 |
| 15 min | detect 1m30s, **lag 1m10s**, obs≈2 | detect 3m, lag 1m, obs≈3 | detect 9m, lag 1m, obs≈7 | DEADLINE 15m | DEADLINE | detect 15m, lag 5s |
| 30 min | detect 2m, **lag 1m40s**, obs≈2 | detect 2m, lag 0 | detect 8m, lag 0 | detect 20m, lag 0 | DEADLINE 30m | detect 30m, lag 5s |
| 60 min | detect 2m, **lag 1m40s**, obs≈2 | detect 2m, lag 0 | detect 8m, lag 0 | detect 20m, lag 0 | detect 46m, lag 1m, obs≈24 | detect 60m, lag 5s |

**Verdict O1 :** même formule OK mathématiquement ; **échoue l’exigence court-sur-long** (20s → jusqu’à 1m40 de silence).

### 14.2 O2 — early 5/15/30s + backoff borné

| Window | maxCadence | n ticks |
|--------|------------|---------|
| 5 min | 30s | 13 |
| 15 min | 45s | 24 |
| 30 min | 90s | 24 |
| 60 min | 180s | 25 |

| Window | Fin 20s | Fin 2m | Fin 8m | Fin 20m | Fin 45m | Juste avant |
|--------|---------|--------|--------|---------|---------|-------------|
| 5 min | 30s / lag 10s / obs≈4 | 2m / 0 | DEADLINE 5m | DEADLINE | DEADLINE | 5m / 5s |
| 15 min | 30s / lag 10s / obs≈4 | 2m / 0 | 8m / 0 | DEADLINE | DEADLINE | 15m / 5s |
| 30 min | 30s / lag 10s / obs≈4 | 3m / lag 1m | 9m / lag 1m | 21m / lag 1m | DEADLINE | 30m / 5s |
| 60 min | 30s / lag 10s / obs≈4 | 3m30 / lag 1m30 | 9m30 / lag 1m30 | 21m30 / lag 1m30 | 45m30 / lag 30s | 60m / 5s |

**Verdict O2 :** 20s détecté à 30s **sur toutes les fenêtres**. Plus de ticks en 15 min (cadence encore serrée). En 60 min, lag milieu de course ~1m30.

### 14.3 O3 — early 5/15/30/60s + interval proportionnel cap 30–120s

| Window | later interval | n ticks |
|--------|----------------|---------|
| 5 min | 30s | 13 |
| 15 min | 90s | 15 |
| 30 min | 120s | 20 |
| 60 min | 120s | 35 |

| Window | Fin 20s | Fin 2m | Fin 8m | Fin 20m | Fin 45m | Juste avant |
|--------|---------|--------|--------|---------|---------|-------------|
| 5 min | 30s / lag 10s / obs≈4 | 2m / 0 | DEADLINE | DEADLINE | DEADLINE | 5m / 5s |
| 15 min | 30s / lag 10s / obs≈4 | 2m30 / lag 30s | 8m30 / lag 30s | DEADLINE | DEADLINE | 15m / 5s |
| 30 min | 30s / lag 10s / obs≈4 | 3m / lag 1m | 9m / lag 1m | 21m / lag 1m | DEADLINE | 30m / 5s |
| 60 min | 30s / lag 10s / obs≈4 | 3m / lag 1m | 9m / lag 1m | 21m / lag 1m | 45m / lag 0 | 60m / 5s |

**Verdict O3 :** même formule pour 5/15/30/60 ; ping 20s → ~10s de lag partout ; 45 min sur 60 min détecté sans attendre la deadline ; pas de boucle agressive (35 ticks / heure au pire avec cap 2 min — **si** la page reste ouverte). Ce n’est **pas** 3 refresh.

Polling agressif évité : pas de loop 200 ms (échec campagne Cycle 9 = opérateur, pas produit). Minimum early 5s.

---

## 15. Question D — Manual vs auto observation

| Option | UX | Charge | Page fermée | Reconnexion / refresh navigateur | Server restart | Registry process-local | Durable state |
|--------|----|--------|-------------|----------------------------------|----------------|------------------------|---------------|
| **A. Manuel uniquement** (état actuel) | Opérateur doit cliquer ; ping 20s invisible tant que personne n’observe | Minimale | Attempt reste `running` en DB | Rehydrate running + bouton | observe→null ; DB running | OK si Next vit **et** quelqu’un clique avant kill 60s actuel | Attempt/contrat persistés ; process non |
| **B. Auto UI tant que la page est ouverte** + manuel possible | Ping visible sans spam ; manuel reste pour reconnexion | Bornée par le schedule (O2/O3) **sur 1 onglet** | Plus d’auto ; Attempt running ; reprise à la réouverture | Auto reprend si `canRefresh` ; pas de nouveau launch | même trou registry | Identique A sur restart | Identique A |
| **C. Mécanisme minimal existant** | Réutiliser `refreshResolvedM3RunningAttempt` / même path F3 — **timer UI** qui appelle **la même** fonction. Pas de nouveau port. Pas de worker | Comme B | Comme B | Comme B | Comme B | Comme B | Comme B |

**Recommandation (Cursor, non décidée) :** **B via C** — timer UI page-ouverte qui invoque le chemin canonique existant `refreshResolvedM3RunningAttempt` / `completeBoundedReadOnlyLaunch`, plus le bouton manuel. **Pas** de worker / queue / scheduler serveur. Compatible chemin critique actuel (KEEP orchestration).

Ne pas bloquer `awaitCompletion` dans la requête HTTP de refresh (aujourd’hui observe-first retourne `running` — **KEEP**). L’auto-observe = série d’`observe()` courts, pas un await process de 60 min dans Next.

---

## 16. Question E — Process-local registry / long-running

**Ce que ça permet :** lier PID, stdout/stderr capés, timedOut, exitCode **tant que le process Node/Next qui a spawn est vivant**. C’est suffisant pour un happy path Pre-M6 **sur une campagne** où Next reste up.

**Next vivant :** observe voit RUNNING puis terminal ; SIGTERM de fenêtre peut marquer timedOut ; Evidence path peut s’enclencher au prochain tick.

**Next redémarre :** registry perdu. PID OS peut encore vivre **ou** déjà mort. Produit Attempt peut rester `running`. C’est le résidu Cycle 9 (OS NOT_ALIVE + DB running) **amplifié** par l’absence d’observation après coup.

**Timeout d’exécution ≠ recovery :**

- Timeout = deadline gouvernée → kill + Attempt `timeout` + contract `failed`.
- Recovery = « comment rattacher un PID après recycle serveur ». **Autre problème.**

**Est-ce que ça BLOQUE le prochain bounded REAL happy path ?** **NON**, sous conditions :

1. Next de campagne reste vivant pendant toute la fenêtre ;
2. observation (manuel ou auto page-ouverte) continue jusqu’à terminal **ou** deadline ;
3. on ne dépend plus d’un kill 60s ni d’un cap « 3 refresh ».

**N’ouvre pas** worker / queue / daemon / orchestrateur distribué / persistence de process. Classer **dette future / V3-F10** :

- nom : durable process observation across server recycle
- condition d’entrée : besoin d’exécutions qui survivent un restart Next **ou** multi-instance
- hors Pre-M6 immédiat

---

## 17. Question F — Terminal / deadline semantics

États conceptuels :

```
RUNNING
  → observed RUNNING (même Attempt, même processRef, 0..N)
  → terminal SUCCESS (exitCode 0, !timedOut) → RecordExecutionResult → Evidence
  ou terminal FAILURE (exit non 0) → RecordExecutionFailure, pas d’Evidence
  ou deadline atteinte → timeout handling
```

**Qui décide que la deadline est atteinte ?** Le runtime d’orchestration évalué contre `startedAt + resolvedMaxDurationMs` (Clock injecté, comme `TriggerAttemptTimeout` aujourd’hui). **Pas** l’UI. **Pas** un nombre de refresh. **Pas** l’adapter seul.

**Qui tue le process ?** ProcessRunner (SIGTERM) **uniquement** avec `timeoutMs = resolved window` reçu à invoke. Adapter n’invente pas.

**Comment `timedOut` se propage :** `RealProcessObservation.timedOut` → `completeBoundedReadOnlyLaunch` → `TriggerAttemptTimeout` **avec l’horloge réelle** (plus de forge +31 min) **ou** `RecordExecutionFailure` `EXECUTION_TIMEOUT` si la commande timeout domaine refuse encore — ce second chemin doit **disparaître** une fois les horloges unifiées.

**Attempt terminal :** `timeout` | `succeeded` | `failed` | `cancelled`. Timeout ≠ retry.

**Contract terminal :** T-A5 `failed` sur timeout (déjà le cas) ; `completed` seulement via résultat succeeded + Evidence path existant.

**Evidence :** uniquement succès observé (KEEP). Timeout / failure → pas d’Evidence candidate (déjà disclosed Cycle 9 / T-R3-TIMEOUT).

**Nora / LPS :** reçoivent l’outcome via le pipeline F3 existant (`toNoraObservationFacts` seulement si facts non null = terminal observé). Timeout : extra disclosure, pas L2 succès.

**Timeout ≠ retry.** Retry = **nouvelle** décision, **nouveau** Attempt, Confirmation/Gate D selon contrat, **nouveau** launch. Budget `maxRetriesBudget` AttemptPolicy **n’est pas** un relaunch automatique Cursor REAL.

---

## 18. Fake / Real parity (R21)

Policy déterministe future = **même** ExecutionContract, **même** ExecutionAttempt, **même** deadline semantics, **même** observation orchestration, **même** Evidence pipeline.

Seule la frontière process Cursor peut être fake (`composeDeterministicCursorBoundary`, mutex avec `SFIA_STUDIO_CURSOR_REAL=1`).

Le double déterministe **doit pouvoir simuler** : rapide ; running sur plusieurs observes ; terminal succès ; timeout ; failure. Aujourd’hui : surtout **compteur d’observe**. Delivery devra étendre le double pour **honorer la fenêtre résolue** (timeout simulé) sans créer un second chemin produit.

REAL-shaped deterministic reste **DETERMINISTIC PROVEN**, jamais REAL proven.

---

## 19. Delivery impact map (fichiers existants seulement)

Aucune fabrication de fichier absent. Distinguer MUST / MAY / SHOULD NOT **si** l’option recommandée (ARCH-WOP-1) est adoptée. Pas d’implémentation maintenant.

### MUST CHANGE (ADAPT)

- `projects/sfia-studio/app/lib/oa/execution-contract/domain/types.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/domain/invariants.ts`
- `projects/sfia-studio/app/lib/oa/execution-contract/domain/semanticFingerprint.ts`
- `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-contract.schema.json`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/attemptPolicy.ts` (aligner `attemptTimeoutMs` sur fenêtre résolue / snapshot)
- `projects/sfia-studio/app/lib/oa/execution-attempt/ports/realExecutionLaunchPort.ts` (`RealLaunchRequest` doit transporter la durée **résolue**, pas inventée)
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/studioCursorRealLaunchGateway.ts` (**supprimer le default 60s** ; fail-closed si timeout absent)
- `projects/sfia-studio/app/lib/vertical-slice-runtime/composeStudioProductRealBoundary.ts` (ne plus omettre la durée)
- `projects/sfia-studio/app/features/project-assistant/f3/completeBoundedReadOnlyLaunch.ts` (horloge unique ; retirer forge +31 min ; deadline)
- `projects/sfia-studio/app/features/project-assistant/f3/executeConfirmedBoundedReadOnlyContract.ts` (si passage de fenêtre/snapshot)
- `projects/sfia-studio/app/features/project-assistant/f3/boundedReadOnlyM3ResolutionProfile.ts` (classe/fenêtre d’intention du profil bounded)
- `projects/sfia-studio/app/lib/vertical-slice-runtime/deterministicExternalLaunchBoundary.ts` (simuler timeout / running multi-observe **selon la même sémantique**)
- Tests existants : `preM6.realProductWiringResidual.test.ts` (T-R3-TIMEOUT / T-R3-ASYNC), `deterministicCursorBoundary.test.ts`, `runningAttemptRefresh.ui.test.tsx`, `e2e/studio-option-a-deterministic-cursor-boundary.spec.ts`, `lifecycleFoundation.test.ts` / `qaAdversarialValidation.test.ts` (AttemptPolicy)
- `projects/sfia-studio/app/features/project-assistant/f3/e2eOptionATerminalAttempt.ts` (même forge +31 min)

### MAY CHANGE

- `projects/sfia-studio/app/lib/oa/execution-contract/application/buildExecutionContract.ts` (et validate/confirm si champ nouveau)
- `projects/sfia-studio/app/lib/oa/execution-contract/infrastructure/sqlite/sqliteExecutionContractRepository.ts` (payload_json — souvent **pas** de migration SQL)
- `projects/sfia-studio/app/lib/oa/execution-attempt/domain/types.ts` (snapshot `resolvedMaxDurationMs` / `deadlineAt` **si** Morris veut l’Attempt comme lieu du snapshot plutôt que le seul journal)
- `projects/sfia-studio/app/lib/oa/execution-attempt/infrastructure/nodeCursorProcessRunner.ts` (souvent **SHOULD NOT** changer le mécanisme SIGTERM ; seulement la **valeur** reçue)
- `projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts`
- `projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx`
- `projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx`
- `projects/sfia-studio/app/features/project-assistant/presentationLabels.ts` (si copy deadline)
- `projects/sfia-studio/app/features/project-assistant/f3/confirmAndExecuteResolvedM3.ts`
- `projects/sfia-studio/app/lib/oa/execution-attempt/application/triggerAttemptTimeout.ts` (peut rester ; la policy injectée change)
- Playwright Option A / fixtures deterministic
- `projects/sfia-studio/app/__tests__/oa/execution-contract/*` si fingerprint/schema

### SHOULD NOT CHANGE

- one-launch / Gate D / Confirmation N3 / safety journal modèle LAUNCHED
- `ProcessRunner` split invoke vs observe vs awaitCompletion
- Evidence pipeline ingest (hors faits timeout déjà fail-closed)
- mutex DETERMINISTIC vs REAL
- Roadmap / Build Doctrine / doctrine v3 (hors périmètre)
- worker / queue / nouvelle persistence process
- runtime v3
- Attempts historiques / worktrees REAL

**Migrations SQL :** non requises **si** le champ vit dans `payload_json`. Une migration **n’est pas** le premier levier. Schema modeled 0.2.0-oa `additionalProperties: false` **est** un levier MUST.

---

## 20. Compatibilité candidat Pre-M6

Le backbone M1→M5 (contrat, attempt, Gate D, spawn-ACK, same-Attempt refresh, Evidence) **se conserve**. Introduction = **ADAPT** timeout ownership + observation schedule + une horloge. Pas de rewrite. Pas d’architecture parallèle. Pas de REPLACE du RealExecutionLaunchPort.

Delivery éventuel s’applique sur le working tree dirty existant **sans** reset. Scope Delivery (si Morris adopte) = policy + propagation + UI timer page-ouverte + tests deterministic — **pas** M6, **pas** REAL automatique.

---

## 21. Debt / recovery / exit

| Dette | Type | Bloque next REAL happy path ? | Condition d’entrée future |
|-------|------|-------------------------------|---------------------------|
| Process registry in-memory | V3-F10 / durabilité | **Non** si Next reste up pendant la fenêtre | Restart / multi-instance |
| Forge `nowIso +31min` | couture horloges | Non fonctionnellement ; **oui** pour la vérité timeout | Dès Delivery window |
| Default gateway 60s | adapter policy leak | **Oui** pour tout Cursor >60s | Dès Delivery |
| Deterministic observe-count vs wall-clock | R21 | Non pour REAL ; **oui** pour QA timeout | Dès Delivery tests |
| Campagne 3 refresh | opérateur | Oui comme borne artificielle de preuve | FREEZE comme produit ; lever en campagne |
| Durable PID reattach | capacité future | Non immédiat | chantier dédié, GO séparé |

Exit : décision Morris ADOPT/REJECT/AMEND. Arrêt si GO stack/worker demandé sans NFR — CKC anti astronaut.

---

## 22. NFR / résilience / observabilité / exploitation (CKC)

| Dimension | ARCH-WOP-1 (hybride + O3 + auto page-ouverte) | ARCH-WOP-2 (maxDurationMs first-class + O1 + manuel) |
|-----------|-----------------------------------------------|------------------------------------------------------|
| NFR latence de détection | ping ~10–30s | ping jusqu’à 2 min sur longues fenêtres |
| Résilience | deadline unique ; SIGTERM aligné | deadline unique possible mais UX plus fragile |
| Observabilité | journaliser classe, resolvedMs, deadlineAt, n° observe, timedOut | journaliser maxDurationMs |
| Exploitation | 1 onglet, 1 Next process ; pas de queue | idem, charge plus faible (pas d’auto) |
| Sécurité | cap global ; fail-closed adapter | cap dans le champ ; risque zoo de ms |
| Coût | Delivery moyen | Delivery un peu plus simple, dette UX |

---

## 23. Architectures end-to-end (≥2, cohérentes)

### ARCH-WOP-1 — Hybride gouverné + observation hybride + auto page-ouverte + une horloge

**Description.** Le contrat exprime une **classe d’exécution** (intention). La policy serveur résout et **snapshot** `resolvedMaxDurationMs` au StartExecution. Adapter/ProcessRunner **enforce** cette valeur uniquement. Observation famille **O3** (early probes + cadence proportionnelle), **indépendante** des ms exactes. UI : auto tant que la page est ouverte, bouton manuel conservé. `TriggerAttemptTimeout` reste une commande explicite **sans** worker ; sa policy = la fenêtre snapshotée. Evidence inchangée (succès seulement).

**Flux.**

1. PREPARE M3 bounded profile inclut la classe (default à décider).
2. Confirm + Gate D + **un** launch (KEEP).
3. Gateway reçoit `timeoutMs` résolu via RealLaunchRequest ; spawn ACK ; processRef journalisé.
4. Première observe → souvent `running`.
5. UI schedule O3 appelle le **même** refresh canonique jusqu’à terminal ou deadline.
6. ProcessRunner SIGTERM à deadline si encore vivant.
7. Observe voit timedOut ou exitCode → Attempt terminal → Evidence ssi succès.
8. Timeout ≠ retry.

**Composants / responsabilités.**

- ExecutionContract : classe (fingerprint).
- ExecutionWindowPolicy (serveur, **à ajouter seulement en Delivery** — aujourd’hui absente ; ne pas prétendre qu’elle existe) : resolve + clamp cap.
- ExecutionAttempt / journal : snapshot durée + startedAt.
- RealLaunchRequest : transporte resolved timeout.
- Gateway : enforce, **pas** de default 60s.
- ProcessRunner : SIGTERM(timeoutMs).
- F3 completeBoundedReadOnlyLaunch : observe-first KEEP ; timeout path sans forge.
- UI : timer page-ouverte + manuel.
- Deterministic boundary : même sémantique.

**Avantages.** Politique dans le contrat ; adapter idiot ; ping rapide ; longues fenêtres sans 60s ; Fake/Real alignables ; réversible (revenir à manuel = ôter le timer) ; pas de worker.

**Inconvénients.** Schema/fingerprint ; snapshot obligatoire ; timer UI ne voit rien page fermée ; registry mémoire inchangé.

**Dette.** Recovery restart. Noms de classe. Valeurs 5/15/30/60 non figées.

**Risque.** Sur-paramétrer la formule O3 en Delivery. Mitigé : Delivery borne « early probes + clamp », tests table-driven, **pas** de magic 3.

**Réversibilité.** Haute pour l’auto-UI. Moyenne pour le champ contrat (supersession). Adapter default 60s ne doit **pas** revenir.

**Complexité.** Moyenne. Compatible candidat dirty.

**Impact preuves.** Prochaine preuve deterministic doit montrer : running multi-observe **sans** relaunch ; terminal ; timeout simulé. REAL ultérieur : Next up pendant la fenêtre ; **pas** de cap 3 refresh campagne comme stop ; observer jusqu’à terminal/deadline.

**Fake/Real.** Un chemin produit.

### ARCH-WOP-2 — First-class maxDurationMs + O1 + manuel only

**Description.** Le contrat porte une durée numérique first-class. Observation O1 proportionnelle. Pas d’auto UI. Une horloge quand même (gateway sans 60s default ; AttemptPolicy = cette durée). Evidence identique.

**Flux.** Comme WOP-1 sans timer UI et avec cadence O1. L’opérateur clique `Actualiser le résultat` ; le schedule O1 n’est qu’une **contrainte de tests / doc**, pas un moteur, **sauf** si on l’implémente côté serveur — ce qui reviendrait à un poller (refusé). Donc en pratique WOP-2 **manuel** = la détection dépend du clic humain. La matrice O1 décrit le **pire cas si** un poller O1 existait ; **sans poller**, une tâche de 20s n’est vue **que** quand l’humain clique.

**Avantages.** Schéma plus direct (un nombre). Moins de moving parts UI. Delivery plus petit.

**Inconvénients.** Ré-échec Cycle 9 possible si l’humain clique 3 fois trop tôt **ou** pas assez longtemps — sauf si la campagne cesse d’être bornée à 3. Ping invisible. Zoo de millisecondes dans les contrats. Fingerprint cassant à chaque changement de durée.

**Dette.** UX observation. Toujours registry mémoire.

**Risque.** Reproduire « 60s » sous un autre nombre figé dans le contrat sans policy de classes.

**Réversibilité.** Champ numérique coûteux à retirer.

**Complexité.** Plus faible en code UI, plus faible en fidélité opérationnelle.

**Impact preuves.** REAL dépend encore d’un opérateur patient. Ne résout pas « 20s ne doit pas attendre 20 min » **sans** auto-observe.

**Fake/Real.** Un chemin, mais tests d’observation moins riches.

### ARCH-WOP-C (non cible) — rester adapter-level

Évaluée §11 Option C. **Ne constitue pas** une architecture d’arrivée. Conserverait Fake/Real divergents et le kill 60s.

---

## 24. Recommandation (Cursor ; Morris décide)

**OPTION RECOMMANDÉE :** ARCH-WOP-1 (hybride classe+snapshot+enforce ; observation famille O3 ; auto UI page-ouverte + manuel ; une horloge ; pas de worker ; registry process-local accepté pour le prochain happy path).

**POURQUOI :**

- replace la fuite de politique 60s **sans** REPLACE du backbone ;
- garde ExecutionContract comme lieu d’intention (V3-F12) ;
- empêche l’adapter d’inventer (aligné execution-run fail-closed `timeoutMs`) ;
- O3 est la seule famille simulée qui détecte ~20s **et** tient 60 min avec la **même** formule ;
- l’auto page-ouverte est le mécanisme **minimal** déjà compatible (`refreshResolvedM3RunningAttempt`) ;
- le registry mémoire **ne bloque pas** un REAL borné si Next reste vivant ;
- recovery durable est nommé comme dette, pas comme chantier caché.

**Ce que Cursor ne fige pas :** noms de champs, ms exactes, coefficients O3, cap global.

---

## 25. Décisions Morris requises (atomiques, aucune déjà prise)

| ID | Décision | Notes |
|----|----------|-------|
| **D-EXEC-TIME-01** | Lieu de l’intention de fenêtre : classe sur contrat (WOP-1) **vs** maxDurationMs first-class (WOP-2) **vs** hybride classe+override numérique | Pas le nom exact |
| **D-EXEC-TIME-02** | Snapshot de la durée résolue au StartExecution : **obligatoire** oui/non | Recommandé oui si classe |
| **D-EXEC-TIME-03** | Catalog de classes candidate short/standard/long/extended : **adopter comme catalogue** ou amender | Valeurs 5/15/30/60 **non** gelées ici |
| **D-EXEC-TIME-04** | Default bounded read-only M3 : 15 min **ou** 30 min **ou** autre | 60s exclu |
| **D-EXEC-TIME-05** | Cap global Pre-M6 (candidate 60 min) + exception = nouveau contrat seulement | |
| **D-EXEC-TIME-06** | Famille d’observation : O1 / O2 / O3 | Recommandé O3 ; formule non gelée |
| **D-EXEC-TIME-07** | Observation runtime : manuel only **vs** auto page-ouverte + manuel | Recommandé auto+manuel |
| **D-EXEC-TIME-08** | Unifier horloge process SIGTERM = AttemptPolicy = fenêtre snapshotée ; retirer forge +31 min en Delivery | Recommandé oui |
| **D-EXEC-TIME-09** | Registry process-local : **acceptable** pour next REAL happy path **vs** bloquer jusqu’à recovery durable | Recommandé acceptable + dette nommée |
| **D-EXEC-TIME-10** | Scope Delivery Cycle 8 **si** adoption : window+observe+deadline+tests deterministic **seulement** — pas worker, pas REAL automatique, pas Roadmap | |

---

## 26. Anti-claims

- **ARCHITECTURE ADOPTED** — faux ; attente GO Morris ADOPT/REJECT/AMEND
- Scalable to 1M / Sécurisé / Prod ready / Zéro dette
- Pre-M6 COMPLETE / M6 / runtime v3 ADOPTED
- END-TO-END REAL PROVEN / READY FOR REAL
- Valeurs 5/15/30/60 **adoptées**
- Formule de polling **adoptée**
- Worker/queue **décidés**
- Recovery durable **livrée**
- Attempts historiques terminalisés

CKC anti-claims respectés : pas « architecture validée » ; pas « scalable 1M » ; pas « sécurisé » ; pas « prêt prod » ; pas « zéro dette ».

---

## 27. Verdict Cycle 6

**READY FOR MORRIS ARCHITECTURE DECISION**

Critères PASS Architecture :

- [x] état actuel vérifié dans le code
- [x] root cause 60s identifiée (gateway `defaultTimeoutMs ?? 60_000`)
- [x] ownership timeout qualifié (adapter vs AttemptPolicy 30 min vs contrat absent)
- [x] ≥2 options Execution Window (A, B, C, H)
- [x] ≥2 options Observation (O1, O2, O3)
- [x] matrice 5/15/30/60 produite
- [x] invariants one-launch préservés
- [x] manual vs auto qualifié
- [x] registry process-local qualifié
- [x] impacts Delivery identifiés (fichiers existants)
- [x] Fake/Real parity traitée
- [x] dette/recovery séparée du besoin immédiat
- [x] recommandation claire
- [x] décisions Morris explicites
- [x] aucun code produit modifié
- [x] ZERO REAL

Aucun claim ARCHITECTURE ADOPTED.

---

## 28. Exact next gate (non consommé)

```
MORRIS —
ADOPT / REJECT / AMEND
EXECUTION WINDOW + OBSERVATION POLICY ARCHITECTURE
```

Aucune Delivery automatique. Après une éventuelle adoption : **nouveau GO Morris** requis pour Cycle 8 Delivery.

STOP : pas d’implémentation, pas de REAL, pas de mutation Roadmap, pas de PR projet, pas de gate Delivery consommé.
