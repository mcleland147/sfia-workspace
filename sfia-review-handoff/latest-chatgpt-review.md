# Cycle 6 Standard — T7 SHADOW Pilot Policy Source Architecture — Review Pack (full)

## 1. Date / heure

- **CEST:** 2026-08-09 04:10:52 CEST
- **UTC:** 2026-08-09 02:10:52 UTC
- Pack repair/finalize after failed shell expansion publish of skeleton (same analysis window).

## 2. Décision Morris interprétée (exacte)

Contexte immédiat reçu : `ok go`

**Résolution stricte appliquée :**

> GO pour ouvrir le sujet structurant : SHADOW PILOT POLICY SOURCE

Autorise : discovery / analyse architecture / comparaison d’options / recommandation / review pack / handoff.

## 3. Limite du GO

**N’autorise PAS :**
sélection automatique d’option · modification code · migration · nouvelle table · seed · policy réelle · choix thresholdAmount/thresholdCode métier · activation SHADOW · mutation rollout · commit/push projet · PR · MONITOR · E1.

Ce cycle traite **A. SOURCE DE POLICY** uniquement.
**B. VALEURS DE POLICY** = hors scope.

## 4. Cycle / profil

- **Cycle:** 6 — Architecture technique
- **Profil:** Standard
- **Nature:** READ-ONLY ARCHITECTURE ANALYSIS
- **CKC:** `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` — candidate 0.1.0 — experimental cognitive guidance — aucune autorité d’exécution
- **Bloc:** FinOps

## 5. Git Truth

| Item | Value |
|------|-------|
| branch | main |
| HEAD | afa12efe692014552eda277a484a71d6b479994e |
| origin/main | afa12efe692014552eda277a484a71d6b479994e |
| tracked | clean |
| staged | none |
| untracked | `.tmp-sfia-review/` only |
| Delivery temporal branch local | ABSENT |
| Delivery temporal branch remote | ABSENT |
| Temporal Dual-Gate | POST-MERGE COMPLETE |
| TEMPORAL MODE DRIFT OFF→SHADOW | CLOSED ON MAIN |
| SHADOW PILOT POLICY SOURCE | NOT SELECTED |
| SHADOW | NOT ACTIVATED |
| Pilote | sfia-studio-ops1 |

## 6. Handoff entrant tip/blob

- tip = `16be5b83f37528c1dcca59ff49ae8997b754cd89`
- blob = `0edd4f1ff6fbf0f9ac519db392ceade7bbeddab8`
- cycle = Cycle 14 Standard — T7 SHADOW Temporal Dual-Gate Post-Merge
- markers HIT: main afa12efe… · CLOSED ON MAIN · R-QA-T7-C08-SCENARIO-01 OPEN MINOR · POLICY SOURCE NOT SELECTED · SHADOW NOT ACTIVATED

## 7. Sources consultées

**Méthode (main):**
- prompts/templates/sfia-cycle-execution-template.md
- method/sfia-fast-track/core/sfia-cycle-routing-guide.md
- method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md
- method/sfia-fast-track/core/sfia-rules-and-guardrails.md
- method/sfia-fast-track/checklists/sfia-validation-checklist.md
- method/sfia-fast-track/documentation/capitalization/sfia-v2/sfia-v2.5-project-cycles-method-candidate.md
- method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md

**Projet (minimum + discovery):**
- composeFinOpsT7ShadowExecutionDeps.ts
- composeExecutionRunD2D3T7ShadowPilot.ts
- evaluateFinOpsEnforcement.ts
- types.enforcement.ts / types.rollout.ts
- composeFinOpsT7Runtime.ts
- postgresFinOpsRolloutStore.ts
- migration 1754600004000_finops-t7-rollout-config.js
- docs 156 / 157 / 158
- OA FinOps T2–T7 stores, T3 alert/threshold types, platform AI env, OPS1, D1, LPS, harness ceilings

## 8. Baseline runtime prouvée

1. **resolveShadowPolicy is caller-injected** — required on ComposeFinOpsT7ShadowExecutionDepsInput and ComposeExecutionRunD2D3T7ShadowPilotInput; forwarded into thin adapter; no default.
2. **null = policy absente / inertie / not_configured** — T4 evaluateFinOpsEnforcement returns allow/not_configured without projection access when policy is null.
3. **Aucun resolver production par défaut** — outside tests, only type/injection sites; no `function resolveShadowPolicy`; T4 states no production default resolver.
4. **Policy SHADOW fields only:** thresholdCode + currency + thresholdAmount (FinOpsT7ShadowPolicyInput).
5. **effect n’appartient pas à la source** — adapter forces effect signal_only when wrapping into T4 policy.
6. **SHADOW path never block** — ensureShadowNeverBlocks → shadow_block_forbidden if block surfaces.
7. **Policy resolver failure = fail-open FinOps-side** — catch around resolveShadowPolicy → policy_resolver_failed into T4 failed/finopsSideOnly; adapter outer catch → shadow_adapter_failed; never provider block.
8. **Pilot = sfia-studio-ops1 only** — T7_SHADOW_PILOT_PROJECT_ID; non-pilot → non_pilot_inert.
9. **finops_rollout_config columns:** project_id, mode, revision, updated_at only — migration header: no monetary columns, no IAM/actor fields.
10. **Option C temporal dual-gate indépendante de la policy** — captureEligibility=eligible set after PRE SHADOW mode proven, before resolveShadowPolicy; comment: policy success/failure does not affect temporal eligibility.

No baseline divergence requiring stop.

## 9. Current resolveShadowPolicy contract

```ts
resolveShadowPolicy: (input: EvaluateFinOpsEnforcementInput) =>
  Promise<FinOpsT7ShadowPolicyInput | null> | FinOpsT7ShadowPolicyInput | null

FinOpsT7ShadowPolicyInput = {
  thresholdCode: string
  currency: string
  thresholdAmount: string  // canonical Money scale-8; NOT a product default
}
// effect omitted — adapter forces signal_only
```

Evaluate input fields: projectId, executionRunId, correlationId, occurredAt (no currency on input — currency comes from policy payload).

Path: composeExecutionRunD2D3T7ShadowPilot → composeFinOpsT7ShadowExecutionDeps → (pilot + SHADOW) createFinOpsEnforcementPort → T4 evaluate.

## 10. Discovery — mécanismes de config existants

| ID | Mechanism | Semantic fit for monetary SHADOW policy |
|----|-----------|----------------------------------------|
| C1 | finops_rollout_config (T7 mode store) | WEAK — mode only |
| C2 | Caller-injected resolveShadowPolicy | GOOD contract / ABSENT store |
| C3 | T3 FinOpsThresholdDefinition injection | ABSENT store (same shape, no catalog) |
| C4 | T3 alert / Morris review outcome rows | WEAK — outcome ≠ policy SoT |
| C5 | T4 enforcement projection | ABSENT — no threshold columns |
| C6 | T2 price catalog | WEAK — global rates ≠ project policy |
| C7 | T6 audit journal | ABSENT |
| C8 | Env / platform AI secrets | WEAK/ABSENT — global; no FinOps threshold env |
| C9 | Feature flags (D1/harness) | ABSENT |
| C10 | OA Project / LPS | ABSENT for money |
| C11 | Doctrine packages | ABSENT |
| C12 | D1 SQLite projects | ABSENT |
| C13 | OPS1 SQLite/gates | ABSENT + OA must not import lib/ops1 |
| C14 | Harness FinOps call ceilings | WEAK — POC ceilings ≠ SHADOW period policy |

**Conclusion discovery:** aucune persistence existante ne peut légitimement fournir thresholdCode/currency/thresholdAmount project-scoped pour le pilote. Le contrat d’injection existe; la source n’existe pas encore.

## 11. Invariants non négociables

I1 SHADOW = signal_only · I2 never BLOCK · I3 fail-open · I4 null=inertie · I5 pilot sfia-studio-ops1 · I6 no historical 15/20/25/30 · I7 no monetary value in this cycle · I8 no SHADOW activation · I9 Option C unchanged · I10 no env/global as rollout authority · I11 no silent monetary overload of finops_rollout_config · I12 T4 owns monetary evaluation · I13 T7 owns rollout/mode · I14 policy source ≠ global project identity authority.

## 12. OPTION A — CONFIGURATION VERSIONNÉE / COMPOSITION-OWNED

**Définition (après discovery):** resolver server-side typé, injecté dans resolveShadowPolicy, alimenté par une configuration versionnée dans Git (module typed dédié / constantes project-scoped), hors thin adapter.

Conceptual shape (NON-DECISIONAL EXAMPLE — not implementing):

```ts
if (input.projectId !== T7_SHADOW_PILOT_PROJECT_ID) return null
return PILOT_SHADOW_POLICY_BY_PROJECT[input.projectId] ?? null
// values would be POLICY_CODE_EXAMPLE / CUR / AMOUNT_EXAMPLE — NOT selected here
```

| Dimension | Assessment |
|-----------|------------|
| Simplicité | GOOD — zero migration; fits existing injection |
| Zéro migration | GOOD |
| Changement policy | requires deploy/PR (Git audit) |
| Audit Git | GOOD — diff = policy change |
| Capacité pilote SHADOW | GOOD — sufficient for one pilot |
| Risque hardcode product | ACCEPTABLE if module separate from thin adapter; REJECT if values land in adapter |
| Trajectoire MONITOR | ACCEPTABLE — may later graduate to durable store when mutation without deploy is needed |
| Réversibilité | GOOD — return null / remove module / revert commit |
| Fail-open | GOOD — preserve null/throw → T4 failed/allow paths |
| Ownership | T4-shaped policy values behind T7 consumption; thin adapter stays effect-forcer only |

**Dette créée:** policy change coupled to release train.
**Dette évitée:** migration, mutation API, premature MONITOR store.

## 13. OPTION B — DEDICATED PROJECT-SCOPED POLICY STORE

**Définition:** persistence PostgreSQL dédiée (table distincte de finops_rollout_config) pour policy FinOps (thresholdCode/currency/thresholdAmount + revision), lue par un resolver injecté.

| Dimension | Assessment |
|-----------|------------|
| Owner | Prefer T4 policy boundary (monetary) with T7 consuming via injection — not T7 mode table |
| Schéma minimal | project_id PK (+ currency only if multi-currency proven — not proven for pilot) |
| Revision/audit | revision + updated_at plausible; no complex historization yet |
| Migration | YES if selected — not authorized this cycle |
| Mutation path futur | controlled upsert (Morris-gated) — not build now |
| Coût/dette | WEAK now — store before values/calibration selected |
| Rollback | delete/row OFF independent of rollout mode — GOOD separation |
| MONITOR fit | GOOD later; premature for single SHADOW pilot |

## 14. OPTION C — REUSE INFRASTRUCTURE EXISTANTE

**Verdict après discovery:** NOT CREDIBLE / ABSENT

Aucun store existant n’a le fit sémantique monétaire project-scoped. Candidats proches:
- C1 rollout (mode) → anti-option X2
- C4 T3 outcomes → wrong SoT
- C8 env → anti-option X1

Ne pas inventer une abstraction générique de configuration.

## 15. Anti-option X1 — ENV / GLOBAL CONFIG DIRECTE

| Question | Answer |
|----------|--------|
| Acceptable? | REJECT for functional policy authority |
| Project-scoped? | NO |
| Audit | WEAK |
| Coupling | deployment/env confusion with rollout authority (I10) |
| Secret vs functional authority | thresholds are product/policy, not secrets |

Acceptable only for secrets (API keys), never as SHADOW threshold SoT.

## 16. Anti-option X2 — EXTEND finops_rollout_config

Historical decision (migration + types + docs 156): table = mode/revision/updatedAt, explicitly no monetary columns.

| Concern | Assessment |
|---------|------------|
| Séparation T7 rollout / T4 policy | violated if monetary columns added |
| Coupling | mode lifecycle ↔ threshold lifecycle fused |
| Rollback ambiguity | OFF mode vs policy absence conflated |
| Simplification réelle? | short-term convenience only |
| Recommendation | REJECT unless a future Morris ADR explicitly overturns T7/T4 separation |

## 17. Anti-option X3 — HARDCODE THRESHOLD DANS LE THIN ADAPTER

REJECT (adapter anti-claim: does NOT select production thresholds).
Thin adapter owns effect forcing + never-block + pilot/mode gating, not policy values.
Hardcode inside adapter would make T7 adapter the monetary SoT — ownership inversion.

## 18. Keying / lifecycle (simplest sufficient)

**Key candidate for pilot:** projectId only — GOOD / sufficient
- Runtime input has no currency; currency is part of policy payload.
- Single pilot sfia-studio-ops1; multi-currency not proven as concurrent SHADOW policies.

**Reject for now (no proven need):**
effective dating · scheduler · TTL · complex historization · multi-tenant abstraction · UI/API mutation · process cache (avoid ALS/Map temporal patterns).

**Absent policy:** null → T4 not_configured (already implemented).

**Change tracing:**
- Option A: Git commit on typed module
- Option B: revision++ + updated_at (if later)

**Rollback:**
- Option A: revert commit / map entry → null; rollout OFF remains independent via T7 store
- Option B: delete/disable row; keep rollout mode separate

**Cache:** not needed for Option A (in-memory constants).

## 19. Source vs value — séparation vérifiée

| | This cycle |
|--|------------|
| Source architecture | analyzed + recommendation only |
| thresholdAmount réel | NOT SELECTED |
| currency opérationnelle | NOT SELECTED |
| thresholdCode métier | NOT SELECTED |
| 15/20/25/30 | FORBIDDEN / not adopted |

Examples if needed later: POLICY_CODE_EXAMPLE / CUR / AMOUNT_EXAMPLE = NON-DECISIONAL EXAMPLE only.

## 20. Comparison matrix

| Criterion | A Composition-owned | B Dedicated store | C Reuse existing | X1 Env | X2 Extend rollout | X3 Hardcode adapter |
|-----------|---------------------|-------------------|------------------|--------|-------------------|---------------------|
| Simplicité | GOOD | WEAK | REJECT/ABSENT | WEAK | ACCEPTABLE short-term | WEAK |
| Ownership T4/T7 | GOOD | GOOD (if T4-shaped) | — | WEAK | REJECT | REJECT |
| Project scoping | GOOD | GOOD | — | REJECT | GOOD | WEAK |
| Auditabilité | GOOD (Git) | GOOD (revision) | — | WEAK | ACCEPTABLE | WEAK |
| Réversibilité | GOOD | ACCEPTABLE | — | ACCEPTABLE | WEAK | WEAK |
| Fail-open | GOOD | GOOD | — | WEAK | GOOD | WEAK |
| Testabilité | GOOD | ACCEPTABLE | — | WEAK | ACCEPTABLE | WEAK |
| Runtime/DB impact | GOOD (0 DB) | ACCEPTABLE (1 read) | — | GOOD | ACCEPTABLE | GOOD |
| Mutation surface future | WEAK (deploy) | GOOD | — | WEAK | WEAK | REJECT |
| Migration | GOOD (NO) | WEAK (YES) | — | NO | YES | NO |
| Coupling | GOOD | ACCEPTABLE | — | REJECT | REJECT | REJECT |
| Dette immédiate | GOOD | WEAK | — | WEAK | WEAK | REJECT |
| Dette future | ACCEPTABLE | GOOD for MONITOR | — | WEAK | WEAK | REJECT |
| Compat SHADOW | GOOD | GOOD | — | WEAK | ACCEPTABLE | WEAK |
| Compat MONITOR traj. | ACCEPTABLE | GOOD | — | REJECT | WEAK | REJECT |
| Config hygiene | GOOD | GOOD | — | WEAK | WEAK | REJECT |
| Operational burden | GOOD | WEAK | — | WEAK | WEAK | WEAK |

## 21. Challenge SFIA — réponses

1. **Utile maintenant?** OUI — activation SHADOW est bloquée conceptuellement par POLICY SOURCE NOT SELECTED; architecture doit borner la source avant Delivery de valeurs.
2. **Moins de dette pour UN pilote SHADOW?** Option A.
3. **Nouvelle table nécessaire avant SHADOW?** NON — pas prouvée; values not even selected.
4. **Config versionnée suffit-elle?** OUI à cette étape (one pilot, signal_only, rare change).
5. **Réutiliser rollout_config = mauvais ownership?** OUI — fusionne T7 mode et T4 monetary policy (X2 REJECT).
6. **Abstraction générique config = sur-design?** OUI — Option C ABSENT; inventer un config framework serait dette.
7. **Plus facile à retirer?** Option A (delete module / return null).
8. **Rollback OFF sans coupler policy/rollout?** A and B both can — keep policy resolution independent of finops_rollout_config mode writes. X2 harms this.
9. **Morris-gated absolument?** Sélection de l’option source; puis (cycle distinct) valeurs policy; puis (cycle distinct) activation SHADOW mode write.

## 22. Recommendation

### OPTION RECOMMENDED — A (CONFIGURATION VERSIONNÉE / COMPOSITION-OWNED)

**Justification factuelle:**
- Injection contract already exists and is the only production consumption surface.
- Discovery found no suitable durable monetary store to reuse.
- One pilot (sfia-studio-ops1), SHADOW signal_only, no proven need for runtime mutation without deploy.
- Zero migration; preserves I11/I12/I13; easiest reverse.
- Option C ABSENT; Option B is MONITOR-shaped premature debt.

**Suffisante maintenant:** yes for making a future SHADOW activation resolvable once Morris selects values in a later cycle.

**Dette créée:** policy value changes require Git/deploy.
**Dette évitée:** migration, mutation API, conflating rollout table, generic config framework.

**Limitations:** not ideal if Morris later requires frequent threshold edits without release; re-evaluate then toward B.

**Futur point de réévaluation:** before MONITOR / when calibration demands frequent non-deploy mutation / when multi-project policies appear.

**Impact Delivery (if later selected):** see §25.
**Migration if selected:** NO.

> RECOMMENDATION ONLY — MORRIS DECISION REQUIRED
>
> Ne pas lire ceci comme SELECTED / VALIDATED / ADOPTED / APPROVED.

## 23. Alternative acceptable

OPTION B — Dedicated project-scoped policy store — acceptable if Morris explicitly prioritizes durable mutable policy before first SHADOW, accepting migration + Critical-leaning Delivery. Still not extending finops_rollout_config.

## 24. Options rejected

| Option | Reason |
|--------|--------|
| C Reuse existing | ABSENT / no semantic fit |
| X1 Env/global | not project-scoped; I10; weak audit |
| X2 Extend rollout_config | violates T7/T4 separation; historical no-monetary-columns |
| X3 Hardcode in thin adapter | adapter must not own policy values |

## 25. Delivery impact (Option A only — NOT implementing)

| Item | Estimate |
|------|----------|
| Cycle probable | 8 Delivery (or small wiring Delivery) after Morris selects source=A AND separately selects values (values still Morris-gated) |
| Profil probable | Standard if only typed module + inject wiring + tests; discuss Critical only if combined with SHADOW mode activation or Neon/prod mutation |
| Fichiers probablement touchés | new small server module under app/lib/oa/finops/... (policy resolver); composeExecutionRunD2D3T7ShadowPilot or higher composer call-site to inject resolver; unit tests; possibly doc execution md |
| Nouveau fichier probable | YES (typed policy module / resolver) |
| Migration | NO |
| Tests | unit (null/non-pilot/pilot resolve; never 15/20/25/30); reuse wiring integration with injected resolver |
| QA dédiée | probable Standard QA if values+wiring; Critical if activation SHADOW coupled |

## 26. Migration impact

- Recommended Option A: NO migration
- Alternative B: YES migration (new table) — not in this cycle

## 27. QA impact

- This architecture cycle: no QA execution required beyond analysis integrity
- Future Delivery of A: prove resolver injection, null inertia, fail-open, pilot scope, no historical thresholds, Option C unchanged, SHADOW still not activated unless separate GO

## 28. Reserves (conservées)

- R-QA-T7-C08-SCENARIO-01 = OPEN MINOR
- SHADOW PILOT POLICY SOURCE = NOT SELECTED (recommendation ≠ selection)
- R-T4-T3-SYNC-01 = OPEN BEFORE MONITOR
- R-PR-T2-API-01 = OPEN MINOR
- Calibration réelle = REQUIRED BEFORE MONITOR
- T6-ext = NOT AUTHORIZED
- Product IAM = NOT_SELECTED
- T5 = OUT OF SCOPE
- MONITOR / E1 = NOT AUTHORIZED
- TEMPORAL MODE DRIFT = CLOSED ON MAIN

## 29. Project mutation

NO

## 30. Policy source selected

NO — recommendation only

## 31. Policy values selected

NO

## 32. SHADOW

NOT ACTIVATED

## 33. Next Morris gate

Morris must decide explicitly:

1. Accept / reject / alternate Option A as policy source architecture
2. Separately (later): select policy values (code/currency/amount) — non-decisional placeholders forbidden as product
3. Separately (later): GO SHADOW activation (rollout mode write) after source+values resolvable

Sujet structurant reste ouvert jusqu’à décision Morris sur la source.

## 34. Verdict unique

```text
T7 SHADOW PILOT POLICY SOURCE ARCHITECTURE COMPLETE —
CYCLE 6 STANDARD —
CURRENT INJECTED POLICY CONTRACT VERIFIED —
SOURCE / VALUE SEPARATION VERIFIED —
OPTIONS COMPARED —
OPTION A (COMPOSITION-OWNED / VERSIONED CONFIG) RECOMMENDED —
RECOMMENDATION ONLY —
POLICY SOURCE NOT SELECTED —
POLICY VALUES NOT SELECTED —
NO PROJECT MUTATION —
SHADOW NOT ACTIVATED —
MORRIS DECISION REQUIRED —
HANDOFF REMOTE VERIFIED
```
