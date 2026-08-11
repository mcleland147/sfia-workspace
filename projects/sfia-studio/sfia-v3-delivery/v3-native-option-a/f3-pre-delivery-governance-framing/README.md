# F3 — Pre-Delivery Governance Framing (F08 / B5 / HARD)

| Champ | Valeur |
|-------|--------|
| **Gate Morris consommé** | `GO ADOPT F08 CONTENT + B5 STOP POLICY FOR F3 FIXTURE PATH — SCOPE BOUNDED — NO APP/** — NO REAL — NO HARD CLOSURE` |
| **Demande Morris** | `ok go` — contextualisée exclusivement comme consommation du gate A candidat déjà enregistré (§9) |
| **Date/heure adoption (CEST)** | 2026-08-11 15:32:06 CEST (+0200) |
| **Date/heure adoption (UTC)** | 2026-08-11 13:32:06 UTC |
| **Date/heure cadrage (CEST)** | 2026-08-11 15:14:54 CEST (+0200) |
| **Date/heure cadrage (UTC)** | 2026-08-11 13:14:54 UTC |
| **Cycle / profil** | 15 — Capitalisation · Standard · DOC |
| **Critical** | `NON` |
| **CKC** | `cycle-knowledge-contracts/pilots/01-cadrage.md` · status `candidate` · experimental cognitive guidance · **aucune autorité d'exécution** |
| **Base** | `origin/main` @ `49b61e9d833407a238459d9b011ca0b5b1cc0186` |
| **Branche locale** | `framing/sfia-studio-f3-pre-delivery-governance` |
| **Worktree** | `…/finops-t2-main/.tmp-sfia-review/worktrees/f3-pre-delivery-governance` |
| **Statut** | `F08-O1 + B5 BOUNDED ADOPTED BY MORRIS — NO DELIVERY — NO REAL — NO HARD CLOSURE` |
| **F08** | `DECIDED — ADOPTED BY MORRIS` (O1) · O2/O3/O4 `NOT SELECTED` |
| **B5** | `ADOPTED BY MORRIS — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH (NOT GLOBAL CLOSED)` · global B5 reste `OPEN` · `STOP BEFORE DELIVERY` hors bornage |
| **HARD R-T-A3-1 / R-T-A3-2** | `OPEN HARD` · mapped ≠ closed · **BLOCKS REAL** |
| **Delivery / Delivery preparation** | `NOT AUTHORIZED` |
| **Cursor REAL** | `BLOCKED` |
| **F3-D01…D11** | `DECIDED — ADOPTED BY MORRIS` (préservés exactement) |
| **Gate A** | `CONSUMED` |
| **Gates B / C / D** | `NOT CONSUMED` |
| **Push / PR / merge projet** | **aucun** |
| **Commit projet** | **aucun** (fichier modifié, non commité) |

## 1. Contexte / objectif

Le contrat fonctionnel F3 est **décidé** (F3-D01…D11 ADOPTED BY MORRIS, PR #331 / merge `49b61e9…`). Cela ferme le *decision set* fonctionnel ; cela **n'autorise pas** Delivery, Delivery preparation, mutation `app/**`, ni Cursor REAL.

Cycle 9 (validation conception) a classé la trajectoire inbound « bounded native fixture integration » immédiate comme **MAJOR** : elle sur-revendiquait Delivery avant satisfaction calendrier **F08** (T-A7-D05=.3 · avant delivery) tandis que **B5** reste `OPEN` · `STOP BEFORE DELIVERY` au plan global.

Le cadrage Cycle 1 a préparé options F08, candidate B5 Stop Policy, mapping HARD, slice FIXTURE-first candidat, et gates A–D.

**Objectif de cette capitalisation (gate A) :** adopter documentairement :

1. **F08-O1** — Minimal fixture vertical slice — `DECIDED — ADOPTED BY MORRIS` (contenu fonctionnel O1 inchangé) ;
2. **B5 Stop Policy** — matrice + invariants — `ADOPTED BY MORRIS — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH (NOT GLOBAL CLOSED)` ;
3. marquer O2/O3/O4 comme **NOT SELECTED** / historiques ;
4. consommer **uniquement** le gate A ; laisser B/C/D **NOT CONSUMED**.

**Ce GO n'autorise pas** Delivery, Delivery preparation, mutation `app/**`, Cursor REAL, fermeture HARD, ni claim `B5 CLOSED` global. Aucune mutation applicative.

## 2. Source truth

| Source | SHA / blob | Rôle |
|--------|------------|------|
| `origin/main` / framing HEAD | `49b61e9d833407a238459d9b011ca0b5b1cc0186` | baseline |
| Package F3 decisions | `2eab59e00658f335fbe0743878648826580b9c8d` | commit doc |
| `f3-functional-design-decisions/README.md` | blob `9f15731a9b5d4e2abc949824d329cd5ee6dd428f` | D01–D11 ADOPTED · framing gate A préparé |
| Ce framing (pré-adoption blob) | `49b487604d0950dd0a8b9311e04152791c67be03` | Cycle 1 cadrage F08/B5 options |
| Inbound handoff tip `origin/sfia/review-handoff` | `402dfc84c31539c773633a2d88424aa04f324032` | Cycle 1 cadrage F3 pre-delivery |
| Inbound handoff blob | `5bc00bdc5f5dee86f26884a51a6213d109c77430` | verified tip unchanged |
| `t-a7-technical-readiness-framing/README.md` | @ main tip | HARD REDUCED≠CLOSED · B5/R1/R-M01 OPEN · Delivery NOT AUTHORIZED |
| `…/06-holds-and-stop-conditions.md` | blob `6f0ec64c5b94e0eff95f22c1631a74359a397de4` | A52-B5 STOP · SC-07 · holds |
| `…/20-hard-ta6-…foundation-lot.md` | @ main tip | R-T-A3-1…4 OPEN HARD · reduced evidence |
| `t-a7-next-decision-step-framing/03-open-reserves-and-gates.md` | blob `769ebb115e5be7164ff1367b9dace3f9948093e6` | F08 timing avant delivery · contenu was NOT DECIDED |
| `a5-2-…/README.md` | blob `146eb122b898b21b6a8bda3f14d57c8f60253d05` | A52-D01…D05 · STOP BEFORE DELIVERY |
| `a5-2-…/02-reservation-dependency-matrix.md` | @ main tip | HARD blocks real · framing OK |
| `a5-2-…/03-authority-model-and-gaps.md` | @ main tip | R-T-A3-1 gap · Confirm fail-closed |
| F2 `recordDecision.ts` / `types.ts` | @ main tip | `executionPerformed:false` · GO = prepare eligibility |
| T-A4 / T-A5 / T-A6 `app/lib/oa/{execution-contract,execution-attempt,evidence-review}` | EXISTS foundations · **NOT WIRED** to Assistant | authority chain D03 |
| Template | `prompts/templates/sfia-cycle-execution-template.md` v2.6 baseline | structure |
| CKC Cadrage | `…/pilots/01-cadrage.md` candidate | guidance only |

### Path conflict check

Siblings sous `v3-native-option-a/` : `f3-functional-design-decisions/`, packs T-A*, A5.2, vertical-slice*, CI docs. **Aucun** autre pack F08/B5 pre-delivery concurrent. Location **conservée**.

## 3. Current state

| Sujet | Status | Notes |
|-------|--------|-------|
| **F3-D01…D11** | `DECIDED — ADOPTED BY MORRIS` | préservés exactement · pas réinterprétés |
| **F08 content** | `DECIDED — ADOPTED BY MORRIS` (O1) | O2/O3/O4 `NOT SELECTED` · calendrier avant delivery conservé |
| **B5 (F3 fixture path)** | `ADOPTED BY MORRIS — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH (NOT GLOBAL CLOSED)` | matrice + invariants adoptés pour ce path |
| **B5 (global)** | `OPEN` · `STOP BEFORE DELIVERY` | hors bornage F3 fixture · ≠ CLOSED |
| **R-T-A3-1** | `OPEN HARD` | Confirm Critical fail-closed · **BLOCKS REAL** |
| **R-T-A3-2** | `OPEN HARD` | atomicité durable résiduelle · **BLOCKS REAL** |
| **R1** | `OPEN` | Project↔Cycle atomicity |
| **R-M01** | `OPEN` | claims readiness |
| **R-Process-Local** | ACCEPTED LIMITATION | insuffisant REAL (D07) |
| **IAM** | `NOT_SELECTED` | |
| **Product persistence** | `NOT_SELECTED` | local bounded ≠ product SELECTED |
| **Delivery / Delivery prep** | `NOT AUTHORIZED` | gate B `NOT CONSUMED` |
| **Cursor REAL** | `BLOCKED` · NO-GO NOW (D11) | adapter real MISSING · HARD OPEN |
| **Fixture Delivery `app/**`** | `NOT AUTHORIZED` | = Delivery (V-T01) · gate B requis |
| **T-A6 COMPLETE** | `NOT DECLARED` | |
| **Option A** | `NOT COMPLETE` | |
| **Assistant→T-A4/5/6 wiring** | `NOT WIRED` | |

## 4. F08 — DECIDED — ADOPTED BY MORRIS (O1)

F08 = arbitrage **contenu / timing / granularité** des réserves avant Delivery (calendrier déjà : **avant delivery**). Gate A adopte **F08-O1** uniquement.

### F08-O1 — Minimal fixture vertical slice (`DECIDED — ADOPTED BY MORRIS`)

| Dimension | Contenu |
|-----------|---------|
| **Moment** | Après adoption Morris F08/B5 (gate A) · **avant** tout `app/**` |
| **Objectif** | Première preuve Studio→prepare→Attempt **FIXTURE**→Evidence→reinjection, sans REAL |
| **Granularité** | Un seul scénario borné (ex. F3-S01+S08) · Test/NoOp adapter explicite |
| **Frontières** | In : wire Assistant→T-A4/5/6 + fixture adapter + reinjection read-only. Out : REAL · Git writes · IAM · persistence produit · F4 |
| **Entrée** | F3-D01…D11 ADOPTED · F08/B5 adoptés pour ce scope · B5 policy acceptée/bornée · Delivery GO dédié (gate B) |
| **Sortie** | AC-F3 fixture applicables verts · Evidence incomplete ≠ READY · no REAL path |
| **Evidence** | Attempt fixture · ReviewBundle · reinjection · anti-claims REAL |
| **Dépendances** | Foundations T-A4/5/6 EXISTS · OPS1 harvest patterns · B5 policy |
| **Réserves** | HARD restent OPEN · ne bloquent pas *framing* fixture ; bloquent REAL |
| **Impact B5** | Exige acceptation/bornage B5 pour *ce* Delivery fixture · B5 global peut rester OPEN hors scope |
| **Impact HARD** | Aucune fermeture · REAL toujours bloqué |
| **Fixture-only** | **OUI** — mode explicite · no silent fallback |
| **Prépare REAL sans l'autoriser** | OUI (contrat, evidence, reinjection) · REAL = gate D séparé |
| **Valeur** | Vertical slice utile minimal · réduit risque trajectoire |
| **Risque / dette** | Wiring partiel ; dette REAL/authority reportée (acceptable) |

### F08-O2 — Documentary-only F08 bulletin (no Delivery yet) — `NOT SELECTED` (historique)

| Dimension | Contenu |
|-----------|---------|
| **Moment** | Immédiatement après ce framing |
| **Objectif** | Bulletin F08 formel (checklist réserves) **sans** GO Delivery |
| **Granularité** | Doc-only · zéro `app/**` |
| **Frontières** | In : F08 text. Out : tout runtime |
| **Valeur** | Formalise calendrier/contenu |
| **Risque / dette** | **Pas de preuve runtime** · retarde vertical slice · risque rejouer framing |
| **Impact B5/HARD** | Neutre · B5/HARD inchangés |
| **Fixture-only / prépare REAL** | N/A runtime |

### F08-O3 — Fixture + partial HARD mitigation in same lot — `NOT SELECTED` (historique)

| Dimension | Contenu |
|-----------|---------|
| **Moment** | Même GO Delivery |
| **Objectif** | Fixture slice **et** mitigation R-T-A3-1/2 partielle |
| **Granularité** | Large · multi-objectifs |
| **Valeur** | Avance REAL track |
| **Risque / dette** | Scope creep · mélange Delivery fixture et HARD · Critical/IAM pressure |
| **Impact B5** | Complexifie bornage |
| **Impact HARD** | Tente réduction — **≠ closure** ; risque sur-revendication |
| **Fixture-only** | Menacé (pression REAL) |
| **Prépare REAL** | Oui mais **trop tôt** sans gate A/B séparés |

### F08-O4 — Defer fixture until HARD/B5 globally closed — `NOT SELECTED` (historique)

| Dimension | Contenu |
|-----------|---------|
| **Moment** | Après fermeture HARD + B5 globale |
| **Objectif** | Aucun Delivery tant que réserves P0 non closes |
| **Valeur** | Max fail-closed |
| **Risque / dette** | Bloque apprentissage fixture · contredit T-A7-D03/D04 (framing/design OK avec HARD open) · V-T03 |
| **Impact B5/HARD** | Sur-bloque fixture alors que sources permettent fixture-path séparé de REAL |
| **Fixture-only** | N/A (pas de slice) |

### Décision F08

```
DECIDED — ADOPTED BY MORRIS
F08-O1 — Minimal fixture vertical slice (fixture-first)
O2 / O3 / O4 — NOT SELECTED (historical)
```

**Challenge (conservé) :** Utile maintenant ? Oui — corrige MAJOR trajectory. Dette ? Wiring partiel acceptée. Plus simple ? O2 plus simple mais sans preuve. Repo-first ? Oui (foundations EXIST). Automatisable ? Non — gate Morris A puis B. Architecture durable ? Non requise. Fixture avant REAL ? Oui. Réduit risque ? Oui vs O3/O4.

**Statut : `F08-O1 DECIDED — ADOPTED BY MORRIS` · O2/O3/O4 `NOT SELECTED`.**

## 5. B5 Stop Policy — `ADOPTED BY MORRIS — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH (NOT GLOBAL CLOSED)`

Hérite A52-D01 `.3` + `STOP BEFORE DELIVERY`. Statut ici :

`ADOPTED BY MORRIS — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH (NOT GLOBAL CLOSED)` — **pas** `B5 CLOSED` global.

### Question centrale B5

> À quel moment SFIA Studio peut-il demander à un agent d'exécuter ?

**Réponse adoptée fail-closed (bornée F3 fixture path) :** uniquement après (1) ExecutionContract natif préparé depuis F2 éligible, (2) confirmation Morris **exacte** liée à l’identité immutable du contrat (D02) pour tout path REAL, (3) mode REAL|FIXTURE **explicite**, (4) GO Delivery applicable consommé pour le path, (5) autorité process-local **encore valide** (restart → fail closed · D07), (6) agent/adapter sélectionné sans fallback silencieux (D05). Conversation, proposal, ou F2 GO **seuls** ne suffisent **jamais**.

### Matrice de transitions (intent → next gate)

| Transition | Autorité | Entrée | STOP | Effet autorisé | Effet interdit | Preuve |
|------------|----------|--------|------|----------------|----------------|--------|
| User intent → F2 qualification | Studio + user | intent in scope | scope hors F2 / MethodMode hold | qualifier | launch agent | qualification record |
| Qualification → Proposal | Studio F2 | eligibility rules | stale / drift | ProposalDto | ExecutionAttempt | proposal id + snapshot |
| Proposal → Morris decision | Morris | proposal reviewable | hostile client claim | GO / GO_WITH_RESERVES / NO_GO / AMEND | auto-exec | DecisionDto · `executionPerformed:false` |
| Morris decision → ExecutionContract | Studio prepare (D01) | GO/GO_WR + `readyForNextGatedStep` | NO_GO / AMEND / stale / B5 Delivery without acceptation | **PREPARE** contract | Attempt / agent call | contract id/version/digest |
| ExecutionContract → confirmation | Morris (D02 REAL; fixture path per future GO) | contract identity exacte | digest mismatch / restart lost auth | confirm bind | silent confirm from chat | confirmation record |
| Confirmation → ExecutionAttempt | Delivery GO + B5 bornage + mode explicit | confirmed + mode FIXTURE\|REAL | REAL without HARD/auth ; fixture without Delivery GO ; B5 STOP | create Attempt | auto-retry ; REAL if blocked | Attempt id · mode label |
| Attempt → Agent call | selectedAgentRef + adapter | Attempt authorized | missing adapter / silent fallback | call labeled mode | REAL↔FIXTURE fallback ; Git remote | adapter invocation evidence |
| Agent → Evidence | T-A6 | Attempt terminal | incomplete presented as READY | Evidence artifacts | claim READY if incomplete | evidence set |
| Evidence → ReviewBundle | T-A6 | evidence linked | orphan evidence | ReviewBundle | Morris decision auto | bundle links Contract/Attempt |
| ReviewBundle → Reinjection | Studio Assistant | bundle reviewable | reinjection triggers exec | contextual display | consume gate / relaunch | reinjection view |
| Reinjection → Recommend next gate | Studio/Nora (D10) | post-reinjection | recommendation as decision | recommend only | execute / decide | recommendation record |

### Invariants fail-closed (minimum)

- conversation seule ≠ autorité
- proposal seule ≠ autorité
- F2 GO ≠ ExecutionAttempt
- ExecutionContract préparé ≠ launch
- confirmation Morris exacte liée au contrat (D02) pour REAL
- aucune reconstruction d’autorité depuis conversation après restart (D07)
- REAL / FIXTURE explicites · **no silent fallback** (D05)
- **no auto retry** · retry = nouvel Attempt (D08)
- **no auto Git write** (D06)
- evidence obligatoire avant claim completion (D09)
- recommandation suivante **non executive** (D10)
- B5 STOP BEFORE DELIVERY tant que non résolue / non acceptée-bornée par gate Morris

### Décision B5

```
ADOPTED BY MORRIS — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH (NOT GLOBAL CLOSED)
Transition matrix + invariants above = B5 Stop Policy for F3 fixture path;
global B5 remains OPEN — NOT CLOSED.
Delivery / app/** still require gate B (NOT CONSUMED).
```

**Challenge (conservé) :** Utile ? Oui — opérationnalise A52-B5 pour F3. Dette ? Doc policy ≠ runtime enforce jusqu’à Delivery. Plus simple ? Liste invariants seule — insuffisante pour transitions. Repo-first ? Aligne D01–D11 + A52. Gate Morris ? **Oui (A — consommé)**. Architecture durable ? Non. Fixture avant REAL ? Oui. Réduit risque ? Oui (bloque launch prématuré).

**Statut : `ADOPTED BY MORRIS — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH (NOT GLOBAL CLOSED)` · global B5 `OPEN` ≠ CLOSED.**

## 6. HARD mapping — R-T-A3-1 / R-T-A3-2

### R-T-A3-1

| Champ | Contenu |
|-------|---------|
| **Problème** | Confirm Critical / autorité d’exécution réelle sans API publique authentifiée + auditée ; Confirm reste fail-closed (`CRITICAL_NOT_ACKNOWLEDGED`) |
| **Source** | A5.2 `03-authority-model-and-gaps.md` · A52-D03 `.3` puis `.1` avant real Critical · readiness `20` · SC-07 / TR-S-08 |
| **Impact** | Bloque **REAL** / Critical real ; IAM `NOT_SELECTED` |
| **Déjà réduit** | Simulation/read-only ; fail-closed préservé ; foundation lot local (reduced ≠ closed) |
| **Non résolu** | API publique ack · identité forte · anti-replay · IAM |
| **Bloque REAL** | **OUI** |
| **Bloque fixture-only framing / future fixture Delivery** | **NON** pour framing (T-A7-D03=.1) ; fixture Delivery reste soumis B5/F08/GO — HARD n’interdit pas *par elle-même* un path FIXTURE explicite non-Critical |
| **Preuve fermeture future** | API `.1` + audit + anti-replay + gate Morris HARD · **≠** ce cycle |
| **Verdict** | `OPEN HARD — BLOCKS REAL` · `OPEN HARD — DOES NOT BLOCK FIXTURE-ONLY FRAMING` |

### R-T-A3-2

| Champ | Contenu |
|-------|---------|
| **Problème** | Atomicité durable Decision↔LPS/Epistemic / Option B residual ; simulation/mémoire insuffisante pour real execution |
| **Source** | A5.2 matrix · A52-D04 `.4` · readiness `20` · lié R1 |
| **Impact** | Bloque **REAL** ; partial orphan risk sur chemins durables |
| **Déjà réduit** | Mémoire/logique bornée ; audits locaux ; B5/R1 further reduced but OPEN |
| **Non résolu** | Garantie durable · product persistence SELECTED · txn/outbox si requis |
| **Bloque REAL** | **OUI** |
| **Bloque fixture-only framing** | **NON** (framing/design OK) ; fixture Delivery borné possible sous B5 — sans claim persistence durable |
| **Preuve fermeture future** | Déclaration atomicité durable + preuves · T-A6 COMPLETE mémoire si requis · gate Morris |
| **Verdict** | `OPEN HARD — BLOCKS REAL` · `OPEN HARD — DOES NOT BLOCK FIXTURE-ONLY FRAMING` |

**Ne jamais transformer REDUCED → CLOSED.** Aucune HARD fermée ici. Gate A **n’implique aucune** fermeture HARD.

## 7. Autorité / source-of-truth matrix

| Acteur / objet | Rôle | Autorité | Source de vérité | Mutation | Décision | Validité | Fail-closed |
|----------------|------|----------|------------------|----------|----------|----------|-------------|
| **Morris** | décideur | gates · REAL confirm · F08/B5 | bulletins Git / GO | via gates | **oui** | jusqu’au prochain GO | pas d’auto-adopt |
| **Studio / Assistant** | UX + orchestration | prepare / display / recommend | F2 + native OA when wired | UI state · prepare only | **non** (reco ≠ decision) | session / store | restart ≠ rebuild exec auth |
| **F2 Proposal** | qualification artifact | eligibility prepare | ProposalDto + snapshot | F2 only | non | stale rules | drift → refuse |
| **F2 Decision** | Morris record | GO = prepare-only | DecisionDto · `executionPerformed:false` | recordDecision | Morris already | bound to proposal | never launches |
| **ExecutionContract (T-A4)** | scope/governance | native contract authority | contract id/version/digest | prepare/update per ports | non launch | digest bind | mismatch STOP |
| **ExecutionAttempt (T-A5)** | technical try | launch under GO+confirm+mode | Attempt id · mode | create/terminal | non Morris | one-shot · retry=new | no auto-retry |
| **Agent / Cursor** | executor | capability ≠ authority | adapter evidence | worktree effects under allowlist | **never Morris** | Attempt bound | missing REAL → fail closed |
| **Git** | repo truth | human gates for write | commits / branches | **no auto write in F3** | N/A | SHA | deny remote Git in F3 |
| **Evidence (T-A6)** | proofs | completeness authority T-A6 | evidence artifacts | append per Attempt | non READY claim alone | linked Attempt | incomplete ≠ READY |
| **ReviewBundle (T-A6)** | review package | reviewability | bundle links | assemble | non executive | linked triad | orphan STOP |

IAM / product persistence : **NOT_SELECTED** — non arbitrés ici.

## 8. Vertical slice candidat (NOT AUTHORIZED)

### Scénario examiné

```
Studio Project → Assistant → Proposition validée (F2)
  → prepare ExecutionContract (D01)
  → confirmation exacte (identité contrat)
  → ExecutionAttempt mode=FIXTURE explicite
  → Evidence → ReviewBundle → réinjection Workspace
  → RecommendNextGate (non executive)
```

### Classification

```
F08-O1 ADOPTED — DELIVERY STILL NOT AUTHORIZED
FIXTURE-first bounded vertical slice (aligns F08-O1)
Requires gate B before any app/** mutation
```

### Pourquoi FIXTURE-first avant REAL

1. D11 / Cycle 9 : REAL **BLOCKED** (HARD · B5 · wiring · authority).
2. D05 : REAL/FIXTURE distincts · no silent fallback — fixture prouve la chaîne sans lever HARD.
3. V-T01 : `app/**` = Delivery → exige F08 + B5 bornage + GO Delivery dédié — **gate B NOT CONSUMED**.
4. Foundations T-A4/5/6 EXISTS ; Assistant NOT WIRED — premier lot = wire + Test adapter.
5. Process-local insuffisant pour REAL (D07) — fixture évite faux claim d’autorité durable.

**Ne pas coder. Ne pas autoriser Cursor REAL. Ne pas muter `app/**` ici.**

**Challenge :** Utile ? Oui. Dette ? Adapter fixture + wiring. Plus simple ? Doc-only O2 — moins de preuve. Repo-first ? Oui. Gate ? A (consommé) puis B. Architecture durable ? Non. Fixture avant REAL ? **Oui**. Réduit risque ? Oui vs REAL-first / O3.

## 9. Gates Morris suivants

| ID | Gate candidat | Statut |
|----|---------------|--------|
| **A** | `GO ADOPT F08 CONTENT + B5 STOP POLICY FOR F3 FIXTURE PATH — SCOPE BOUNDED — NO APP/** — NO REAL — NO HARD CLOSURE` | `CONSUMED` |
| **B** | `GO DELIVERY — F3 NATIVE FIXTURE VERTICAL SLICE — ASSISTANT→T-A4/T-A5/T-A6 + FIXTURE ADAPTER ONLY — NO CURSOR REAL — NO AUTO GIT WRITE` | `NOT CONSUMED` |
| **C** | `GO FRAME OR REDUCE HARD R-T-A3-1 / R-T-A3-2 FOR FUTURE REAL PATH — NO REAL EXECUTION — NO IAM/PERSISTENCE AUTO-SELECT` | `NOT CONSUMED` |
| **D** | `GO CURSOR REAL PILOT F3 — EXACT CONTRACT CONFIRMATION — HARD/AUTHORITY PREREQUISITES SATISFIED — DISTINCT FROM FIXTURE` | `NOT CONSUMED` |

Ordre restant (reco ≠ decision) : **B → QA fixture → C (as needed) → D**.

## 10. Anti-claims

Cette adoption **ne signifie PAS** :

- F08-O1 adopted ≠ Delivery authorized
- F08-O1 adopted ≠ Cursor REAL
- B5 bounded acceptance ≠ B5 CLOSED global
- B5 adopted for F3 fixture path ≠ Delivery / `app/**` authorized
- Gate A consumed ≠ Gate B/C/D consumed
- framing complete ≠ HARD closed
- HARD mapped ≠ HARD closed
- HARD REDUCED ≠ CLOSED
- process-local ≠ durable authority
- ExecutionContract prepared ≠ ExecutionAttempt authorized
- Evidence model ≠ execution proof
- OPS1 capability proof ≠ Studio production authority
- Git source of truth ≠ Git automatic writer
- next gate recommended ≠ gate consumed
- F3-D01…D11 ADOPTED ≠ Delivery authorized
- T-A4/5/6 EXISTS ≠ Assistant wired
- Option A complete · T-A6 COMPLETE · IAM/persistence SELECTED · F4 open · production ready

### Challenge synthèse

| Reco / décision | Utile maintenant | Dette | Plus simple | Repo-first | Auto vs humain | Gate | Évite archi durable | Fixture avant REAL | Réduit risque |
|-----------------|------------------|-------|-------------|------------|----------------|------|---------------------|--------------------|---------------|
| F08-O1 **ADOPTED** | Y | wiring partiel | O2 sans preuve | Y | humain | A✓ + B | Y | Y | Y |
| B5 matrix **ADOPTED bounded** | Y | enforce runtime ultérieur | invariants seuls | Y | humain | A✓ | Y | Y | Y |
| FIXTURE slice | Y | adapter | none useful | Y | humain | B | Y | Y | Y |
| Gates B–D | Y | sequencing | merge gates — pire | Y | humain | — | Y | Y | Y |

## 11. Effets / non-effets

### Effets

- **F08-O1** `DECIDED — ADOPTED BY MORRIS` · contenu fonctionnel O1 préservé
- **F08-O2/O3/O4** `NOT SELECTED` (historiques)
- **B5 Stop Policy** `ADOPTED BY MORRIS — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH (NOT GLOBAL CLOSED)` · matrice inchangée sémantiquement
- HARD R-T-A3-1/2 mappées · restent **OPEN HARD — BLOCKS REAL**
- Slice FIXTURE-first aligné O1 · Delivery **NOT AUTHORIZED**
- Gate **A CONSUMED** · Gates B/C/D **NOT CONSUMED**
- D01–D11 préservés exactement

### Non-effets

- Aucune mutation `app/**` · aucun Cursor REAL · aucun OpenAI live
- Delivery / Delivery preparation **NOT AUTHORIZED**
- B5 global **NOT CLOSED** · HARD **OPEN** · R1 / R-M01 **OPEN**
- IAM / persistence NOT_SELECTED
- Aucun commit / push / PR / merge projet

## 12. Verdict

```
F3 F08 CONTENT + B5 STOP POLICY ADOPTED FOR F3 FIXTURE PATH —
F08-O1 DECIDED — ADOPTED BY MORRIS —
F08-O2 / O3 / O4 NOT SELECTED —
B5 ADOPTED BY MORRIS — BOUNDED ACCEPTANCE FOR F3 FIXTURE PATH (NOT GLOBAL CLOSED) —
HARD R-T-A3-1 / R-T-A3-2 REMAIN OPEN HARD — BLOCKS REAL —
GATE A CONSUMED —
GATES B / C / D NOT CONSUMED —
DELIVERY NOT AUTHORIZED —
NO APP/** —
CURSOR REAL BLOCKED —
NO HARD CLOSURE —
NO GLOBAL B5 CLOSED CLAIM —
NO ARCHITECTURE PIVOT —
READY FOR CHATGPT REVIEW
```

*(Handoff remote verification is a cycle-pack concern; this README alone does not claim handoff published.)*
