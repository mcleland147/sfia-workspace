# Cycle 6 — Architecture technique — T7 SHADOW Activation Wiring & Pilot Identity — Review Pack (light)

Date/heure : 2026-08-08 17:48:26 CEST / 2026-08-08 15:48:26 UTC

## Objectif

Déterminer, sur preuves repo, la frontière runtime, l’identité projet et les options d’architecture pour une future activation SHADOW — **sans implémenter, sans muter, sans activer**.

## Cycle / profil / GO

- Cycle : **6 — Architecture technique**
- Profil : **Standard**
- CKC : `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` (candidate 0.1.0 — guidance only)
- GO Morris exact : `ok go shadow alors`
- Résolution : **GO SHADOW TRAJECTORY** (ouvre analyse + préparation Delivery ; **ne sélectionne pas** d’option, projectId, MONITOR, E1, T3, T5, T6-ext, calibration, mutation DB)

## Local Git Truth

- Repo : `mcleland147/sfia-workspace`
- Worktree : `…/worktrees/finops-t2-main`
- branch : `main`
- HEAD = origin/main = `503369b10506515e173b5b58986c731ba1b313b8`
- Tracked/staged : clean
- Untracked : `.tmp-sfia-review/` only

## Handoff entrant

- Tip : `5f34b64ba612dcd8e66a305378c92198f2a0edb1`
- Blob : `34cc0f4910f16ecd6f36becd301fc7123e774f25`
- Cycle 9 Dedicated Activation QA **PASS WITH RESERVES**
- SHADOW ENTRY QA SATISFIED · SHADOW NOT ACTIVATED · READY FOR DISTINCT MORRIS SHADOW DECISION
- GO SHADOW : **REÇU maintenant**

## Sources consultées

Template cycle · routing · operating model · rules · checklist · sfia-v2.5 cycles · CKC architecture · publisher · handoff Cycle 9 · doc 156 · T7 types/resolve/port/store/compose · T4 enforcement / T6 composition · execution-run `composeExecutionRunD2D3` / `coordinateExecutionRun` · D1/OPS1 identity · frontier proofs (rg)

## État T7 réel (constats A–D)

| Constat | Preuve | Verdict |
|---------|--------|---------|
| A. Modes OFF/SHADOW/MONITOR/E1_ENFORCED | `types.rollout.ts` | **CONFIRMED** |
| B. SHADOW → evaluateT4=true, signal_only, blockingAllowed=false, requiresT3Sync=false, configured_not_activated | `resolveFinOpsRollout.ts` | **CONFIRMED** |
| C. composeFinOpsT7Runtime expose resolve ; n’expose pas upsert ; pas evaluateBeforeProvider ; pas EnforcementPort ; pas provider ; pas execution-run | `composeFinOpsT7Runtime.ts` | **CONFIRMED** |
| D. Row SHADOW seul ≠ activation | doc 156 + anti-claims + aucun consommateur produit | **CONFIRMED** |

**STOP assumptions : non déclenché.**

## Pourquoi row SHADOW ≠ activation

1. Instruction T7 = représentation architecturale uniquement.
2. Aucun consommateur produit de `resolveProjectRollout`.
3. Aucun `createFinOpsPool` produit ; compositions T6/T7 caller-owned pool only.
4. `composeExecutionRunD2D3` accepte `finops` / `finopsEnforcement` optionnels mais **aucun call site produit** hors tests/docs.
5. Absent deps ⇒ FinOps `disabled` / enforcement inert dans `coordinateExecutionRun`.

## Carte runtime réelle

```text
[Product Studio surfaces: OPS1 / D1 / AI providers]
        │
        │  (today: NO FinOps injection)
        ▼
composeExecutionRunD2D3? ── ABSENT product callers
        │
        ▼
coordinateExecutionRun
  · optional finopsEnforcement.evaluateBeforeProvider  (block only if decision=block;
    soft_signal/allow/failed/throw → continue fail-open)
  · optional finops.capture after success
        │
        ▼
[T7 library — NOT product-wired]
composeFinOpsT7Runtime(pool, nowIso)
  · capture / flushAudit (T6 reuse)
  · resolveProjectRollout → resolveFinOpsRollout
  · recompute/reconcile + T4 refresh wrappers
```

Points clés :

1. Entrée serveur FinOps produit : **ABSENT** (frontier library-only).
2. Source projectId FinOps : ce que le futur caller passera (execution context / autre) — **non unifié**.
3. Pool lifecycle produit : **ABSENT**.
4. Composition FinOps réelle aujourd’hui : tests only.
5. Point d’appel possible de resolve : avant evaluateBeforeProvider / avant capture.
6. Point T4 sans effet : `createFinOpsEnforcementPort` + policy `signal_only` → `soft_signal` (INTERNAL ONLY, non durable).
7. Audit : T6 append-only capture events ; **pas** de read/observer bus SHADOW.
8. Erreur : fail-open déjà dans resolver + coordinator enforcement catch.
9. Rollback : upsert mode OFF ou delete row → default_off (prouvé QA Cycle 9).

## Carte project identity

| Modèle | Identifiant | Persist | Lien FinOps |
|--------|-------------|---------|-------------|
| OA Project | `prj:${uuid}` | memory repo | free-text `project_id` possible si passé |
| D1 | `proj-${uuid}` ; workspace `ws-studio-default` | SQLite d1_projects | **non câblé FinOps** |
| OPS1 | `sfia-studio-ops1` (project key) | sessions | **non câblé FinOps** |
| ExecutionContext | caller `projectId` | memory runs | hooks prêts si composed |
| FinOps tables | text `project_id` | Postgres | aucune FK vers OA/D1 |

**Canonical FinOps projectId pour « SFIA Studio » : ABSENT.**

## Cibles pilotes

Aucun projectId ne peut être proposé comme cible SHADOW sans invention.

Candidats **observés** (clés existantes, **non validées** FinOps) :

| Candidat | Nature | FinOps events? | Verdict |
|----------|--------|----------------|---------|
| `sfia-studio-ops1` | OPS1 project key | non prouvés | **not selectable without Morris + wiring identity** |
| `ws-studio-default` | D1 workspace id | workspace ≠ project FinOps | **ineligible as FinOps projectId** |
| `prj:campus360-oa` | fixture/docs | test/demo | **not a live pilot proof** |
| random `prj:…` / `proj-…` | runtime-created | depends on future capture | **requires Morris target decision** |

```text
SHADOW PILOT TARGET NOT IDENTIFIED —
MORRIS TARGET DECISION REQUIRED
```

## Question centrale — où consommer resolveProjectRollout ?

Pour que SHADOW soit **utile** tout en restant signal-only / non-bloquant / fail-open / project-scoped / réversible :

la consommation doit vivre sur le **chemin d’exécution produit qui appellera** `coordinateExecutionRun` (ou un composeur équivalent), **après** composition T7 et **avant** provider si évaluation T4 est requise (`evaluateT4=true`).

Sans ce consommateur, un row SHADOW reste inert configuration.

## OPTIONS

### OPTION A — Inline wiring sur frontière execution-run (recommandée)

**Idée :** Réutiliser les hooks déjà présents :

- `composeExecutionRunD2D3({ finops, finopsEnforcement })`
- `coordinateExecutionRun` : `soft_signal` / allow / failed → continue ; **seul** `block` interrompt

**Wiring futur :**

1. Composer produit (nouveau ou existant à découvrir/créer au Delivery) appelle `composeFinOpsT7Runtime`.
2. Pour chaque run : `instruction = await resolveProjectRollout(projectId)`.
3. Si OFF / fail_open_off : ne pas injecter enforcement (inert) ; capture optionnelle selon décision Delivery (OFF = comportement inchangé préféré = pas de capture forcée).
4. Si SHADOW : construire `FinOpsEnforcementPort` **uniquement** avec effect `signal_only` (jamais `enforce`) ; injecter ; `blockingAllowed` respecté → pas de `block`.
5. Capture T6 via `finops` injecté après succès AI.
6. Fail-open : exception resolve/evaluate → continuer exécution.
7. Signal : s’appuyer sur `soft_signal` interne + éventuellement audit/log dédié SHADOW (à cadrer Delivery ; soft_signal non durable aujourd’hui).

| Aspect | Contenu |
|--------|---------|
| Composant modifié futur | Product composer execution-run + éventuel thin adapter T7→EnforcementPort |
| Point de wiring | `composeExecutionRunD2D3` options + `coordinateExecutionRun` pre-provider |
| Source projectId | `ExecutionContext.projectId` (doit = rollout row) |
| OFF | no enforcement inject / no block |
| SHADOW | signal_only evaluateBeforeProvider ; never block |
| T4 | projection existante via evaluateFinOpsEnforcement |
| Audit | T6 capture events ; soft_signal non durable (limite) |
| Erreur | fail-open continue |
| Rollback | DB row → OFF / delete ; redeploy OFF composer flags |
| Observabilité | partielle (soft_signal internal) — besoin sink explicite |
| Coût / dette | moyen ; touche frontière structurante |
| Sécurité | pas de block ; pas upsert API ; project-scoped |
| Blast radius | **élevé** (execution-run / provider gate) |
| Testabilité | bonne (hooks déjà testés) |
| Réversibilité | haute si feature gated + OFF default |
| Fichiers potentiels | `composeExecutionRunD2D3.ts`, `coordinateExecutionRun.ts` (minimal), **nouveau** adapter product compose, tests execution-run+finops |

**Profil Delivery recommandé : Critical** (frontière runtime structurante + provider boundary).

### OPTION B — Observation post-capture / post-refresh seulement (sans pre-provider)

**Idée :** Ne pas brancher `finopsEnforcement` pre-provider. Après capture réussie (+ optionnel `recomputeAggregatesAndRefresh`), résoudre rollout ; si SHADOW, évaluer T4 en lecture seule et écrire un signal/audit dédié ; **jamais** influencer le résultat provider (déjà terminé).

| Aspect | Contenu |
|--------|---------|
| Composant | post-success hook près de capture / refresh wrappers |
| Point | après AI success ; hors evaluateBeforeProvider |
| OFF | no-op |
| SHADOW | observe-after-fact |
| T4 | evaluate lecture seule |
| Audit | nécessite sink durable (aujourd’hui partiel) |
| Blast radius | **plus bas** (pas de gate provider) |
| Limite | ne couvre pas « signal avant provider » ; SHADOW plus faible vs contrat evaluateT4 intent |
| Profil Delivery | Standard→Critical léger selon surface d’accroche |

**Utile comme mitigation de risque**, mais **moins fidèle** à une observation de gate.

### OPTION C — Async / scheduler / worker

**REJETÉE** pour SHADOW v1 : aucune infra cron/worker FinOps ; T2 explicitement on-demand ; pas d’API lecture audit. Créer un scheduler serait invention hors repo.

### OPTION D (structurelle, complementary) — Thin adapter factory

Nouveau module (Delivery) : `buildShadowAwareFinopsDeps(t7, projectId)` → `{ finops?, finopsEnforcement? }` strictement :

- SHADOW ⇒ signal_only port only
- OFF ⇒ undefined enforcement
- never MONITOR/E1 paths in this Delivery

Réduit la dette dans `coordinateExecutionRun` (REUSE > rewrite). Peut accompagner A ou B.

## Comparatif

| Critère | A pre-provider | B post-capture | C scheduler |
|---------|----------------|----------------|-------------|
| Fidélité SHADOW (evaluateT4) | Haute | Moyenne | N/A |
| Non-blocage | Oui (signal_only) | Oui | — |
| Blast radius | Élevé | Moyen | — |
| Infra existante | Hooks execution-run | Capture hooks | Absente |
| Recommandation | **Oui (primaire)** | Alternative conservative | Rejetée |

## Recommandation (PROPOSÉE — NON VALIDÉE)

```text
RECOMMEND OPTION A (execution-run pre-provider signal_only gated by T7)
+ thin adapter factory (Option D structural)
OPTION B retained as conservative fallback if Morris rejects Critical execution-run touch
OPTION C rejected
PILOT TARGET: MORRIS DECISION REQUIRED (do not invent projectId)
```

Aucune option n’est validée sans décision Morris.

## Impacts fichiers futurs (si Option A sélectionnée)

**Modifier (probables) :**

- `projects/sfia-studio/app/lib/oa/execution-run/server/composeExecutionRunD2D3.ts` (ou composeur produit appelant)
- éventuellement `coordinateExecutionRun.ts` seulement si besoin d’observer soft_signal (préférer zéro changement si soft_signal déjà fail-open)

**Créer :**

- thin product composer / adapter T7→deps FinOps
- tests : SHADOW never block · OFF inert · fail-open · project isolation · no MONITOR/E1 path

**Migrations :** NON (table rollout existe)

**Config prod :** NON (pas de flag global)

**Dépendances :** NON attendues

## Profil Delivery futur

- Cycle : **8 — Delivery / implémentation**
- Profil recommandé si Option A : **Critical**
- Justification : modification frontière execution-run / provider gate
- Profil non validé automatiquement par Morris

## QA nécessaire après Delivery

- Dedicated wiring QA : SHADOW never BLOCK · OFF unchanged · fail-open · no provider refuse · rollback OFF
- Pas de GO MONITOR/E1
- Activation pilote (Cycle 11) **après** QA PASS + cible projectId Morris

## Trajectoire après décision Morris

```text
A. Architecture (ce cycle)
→ B. Delivery wiring (Cycle 8, après sélection option + target)
→ C. QA wiring
→ D. Activation pilote SHADOW (Cycle 11 release) — distinct GO
→ E. Observation (Cycle 12)
```

Ne pas fusionner B+C+D+E.

## Rollback architecture

1. Config : upsert OFF ou delete row → default_off (prouvé QA).
2. Code : retirer injection finopsEnforcement / feature gate OFF.
3. Pas de migration down requise pour rollback mode.

## Sécurité / observabilité / dette

- Sécurité : pas d’API upsert produit ; pas d’enforce ; project-scoped ; secrets hors scope.
- Observabilité : gap — `soft_signal` INTERNAL ONLY non durable ; Delivery doit définir sink minimal (audit/log) sans T6-ext.
- Dette : adapter thin + composition product ; éviter double composition FinOps (réutiliser `composeFinOpsT7Runtime`).

## Réserves (inchangées)

- R-T4-PROJECTION-REFRESH-01 : CLOSED — wiring only
- R-T6-RUNTIME-COMPOSITION-01 : CLOSED ON MAIN
- R-T4-T3-SYNC-01 : OPEN — BEFORE MONITOR
- R-PR-T2-API-01 : OPEN MINOR
- Calibration réelle : REQUIRED BEFORE MONITOR — NOT EXECUTED
- T6-ext : NOT AUTHORIZED
- Product IAM : NOT_SELECTED
- T5 : hors scope SHADOW

## Anti-claims

- SHADOW NOT YET ACTIVATED
- FOUNDATION ALONE CANNOT ACTIVATE SHADOW
- NO MONITOR / E1
- NO implementation this cycle
- Recommendation ≠ Morris validation

## Décisions Morris restantes

1. Sélectionner OPTION A / B (fallback) / autre.
2. Sélectionner **pilot projectId** (ou déclarer création contrôlée) — **requis**.
3. Autoriser profil Critical Delivery si Option A.
4. Après Delivery+QA : GO Activation pilote distinct.

## Review pack content coverage

- project created/modified : N/A
- synthesis only : **no** (frontier proofs + source paths)
- verdict pack : **complete**

## Verdict unique

```
T7 SHADOW ACTIVATION ARCHITECTURE READY WITH TARGET RESERVE —
GO SHADOW TRAJECTORY RECEIVED —
SHADOW NOT YET ACTIVATED —
CURRENT FOUNDATION ALONE CANNOT ACTIVATE SHADOW —
AUTHORITATIVE RUNTIME FRONTIER IDENTIFIED —
(execution-run optional hooks; product consumer ABSENT) —
PROJECT IDENTITY SOURCE IDENTIFIED —
(multi-model; FinOps canonical ABSENT) —
PILOT TARGET NOT IDENTIFIED —
MORRIS TARGET DECISION REQUIRED —
OPTIONS COMPARED —
RECOMMEND OPTION A (+ thin adapter) — NOT VALIDATED —
OPTION B CONSERVATIVE FALLBACK —
OPTION C SCHEDULER REJECTED —
ROLLBACK OFF PATH DEFINED —
R-T4-PROJECTION-REFRESH-01 CLOSED — WIRING ONLY —
R-T6-RUNTIME-COMPOSITION-01 CLOSED ON MAIN —
R-T4-T3-SYNC-01 OPEN — BEFORE MONITOR —
MONITOR NOT AUTHORIZED —
E1 NOT AUTHORIZED —
READY FOR MORRIS ARCHITECTURE SELECTION —
HANDOFF REMOTE VERIFIED
```

## Review Handoff Git (contenu destiné à publication)

- Mode : publish-in-cycle
- Source : `.tmp-sfia-review/chatgpt-review.md`
- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Commit message prévu : `docs(review-handoff): publish T7 shadow activation architecture`
- Publisher : `scripts/sfia/publish-review-handoff.sh`
- Remote BEFORE : tip `5f34b64ba612dcd8e66a305378c92198f2a0edb1` / blob `34cc0f4910f16ecd6f36becd301fc7123e774f25`
- Final remote tip/blob verified externally after publication; see Cursor final report and Git remote verification.
