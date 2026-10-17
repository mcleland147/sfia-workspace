# Review Pack FULL — MATERIALITY-BLOCK-01 (P6-HQA-FRESH-01)

| Field | Value |
| --- | --- |
| **Horodatage** | 2026-10-17 09:57:29 CEST |
| **Programme** | SFIA Studio — Product Completion / Product Simplification |
| **Milestone** | P6 — Global Integrated Product QA |
| **Campagne** | P6-GLOBAL-INTEGRATED-PRODUCT-QA-01 / **P6-HQA-FRESH-01** |
| **Incident** | MATERIALITY-BLOCK-01 |
| **Cycle type** | 9 — QA / validation |
| **Profil SFIA** | Critical |
| **Typologie** | QA / DIAGNOSTIC / PRODUCT GOVERNANCE |
| **Branche Product** | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| **HEAD** | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| **origin/main** | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| **Worktree** | Dirty Product preserved (M-HD-02 + related); staged empty |
| **Mode** | READ-ONLY diagnostic — no Product fix, no PREPARE retry, no Cursor REAL, no QA write |
| **Verdict Cursor** | **DIAGNOSIS COMPLETE — ROOT CAUSE PROVEN** |

---

## 1. Local Git Truth Check (initial)

| Check | Result |
| --- | --- |
| toplevel | `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016` |
| branch | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| origin/main (local + ls-remote) | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| remote feature tip | `b4c1d862…` (match HEAD) |
| staged | empty |
| dirty fingerprint (porcelain SHA-256) | `1c8005bf124b365a64b25a7260cc088007207dcea3b71c2b5b1987611ba74ff1` |
| Git Truth | **COHERENT** — proceed |

Product dirty set preserved (modified + untracked M-HD-02 / generic mission UI / tests). No clean/stash/reset.

---

## 2. Sources consultées

### Gouvernance / P6 / V3-F05
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` (réf. programme)
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md` — V3-F05 chaîne conv→exec **PARTIAL RUNTIME**
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md` (réf.)
- `projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md`
- `projects/sfia-studio/sfia-v3-framing/30|32|34|35|37` — V3-F05 **VALIDATED** (pack 37); gouvernance exécution / matérialité
- `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md` (dirty local; D-ER-16 tool solicitation)
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`, `…/pilots/04-qa-validation.md`, `prompts/templates/sfia-cycle-execution-template.md` (réf. process)

### Code Product (local dirty runtime)
- `w2/resolveAuthoritativeProductMateriality.ts` — `collectConcreteMissionPaths`, `productContextSufficient`
- `w2/prepareGenericExecutionContractDraft.ts` — `solicitGenericExecutionPrepare`, `buildIntentAnalysisFromSolicitedMission`, MATERIALITY_UNKNOWN gate
- `w2/pendingGenericPrepareOfferStore.ts` — candidates non-authoritative
- `w2/genericPrepareCapabilityEnvelope.ts` — docs_write → generalist envelope
- `lib/oa/execution-contract/domain/executionMateriality.ts` — `assessExecutionMaterialityOrUnknown`
- `lib/nora-cognitive-runtime/productExecutionAgentsTools.ts` — tool `request_generic_execution_prepare`
- `orchestrateTurn.ts` / `f2/orchestrateF2.ts` — solicit / accept-GO paths

### Faits Product persistés (READ-ONLY SQLite)
- Product DB: `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/qa-dbs/product/oa-product.sqlite` (`mode=ro`)
- Nora session: `…/nora-session.sqlite` (`mode=ro`)
- Runtime PID 51329 still listening `:3020` (not mutated by this diagnostic)

---

## 3. Contexte scénario (faits)

| Fait | Valeur | Preuve |
| --- | --- | --- |
| Projet | Organisation des bénévoles | `oa_projects.title` |
| projectId | `prj:8048462e-04e3-42c3-a640-9dad70b6c42a` | DB |
| Cycle C1 | `cyc:trj-8f5488e7f575408f6bc7c413` (`cyc:framing`, **active**) | DB |
| repositoryBinding.identity | `mcleland147/sfia-workspace` | project payload |
| repositoryBinding.pathRoot | `projects/organisation-des-benevoles` | project payload |
| LPS version | 22 | `oa_lps` |
| ExecutionContract count | **0** | DB |
| ExecutionAttempt count | **0** | DB |
| HumanDecision (mission générique) | **0** (seul HD = trajectory approval) | DB |
| UI / transcript | « Matérialité indéterminée — contexte Product insuffisant ou contradiction… » | `pilot_transcript_turns` seq 39, 41 |
| Tool result | `MATERIALITY_UNKNOWN` | `session_items` seq 6 |

Intention Pilote (transcript): document de cadrage version de travail sur Git, examiner avant validation, préparer ≠ exécuter.

---

## 4. Chemin de reproduction (établi)

```
Pilot intent (documentary framing on Git)
  → Nora REAL tool request_generic_execution_prepare
       args: objective + expectedOutcome + narrative scope + contextNotes
       (NO targetPath / scopeIn / artifactFileName / requiredCapabilities)
  → orchestrateTurn.solicitPrepare
  → solicitGenericExecutionPrepare({ mission })
  → buildIntentAnalysisFromSolicitedMission
       executionIntent = null
       scope = narrative string with spaces, no "/"
  → prepareGenericExecutionContractDraft
  → resolveAuthoritativeProductMateriality
       collectConcreteMissionPaths → []
       structural.basis = no_concrete_mission_paths_fail_closed
       productContextSufficient = false
  → assessExecutionMaterialityOrUnknown → materiality=unknown
       reasonCodes=["product_context_insufficient"]
  → PREPARE returns MATERIALITY_UNKNOWN BEFORE BuildExecutionContract
  → rememberGenericPrepareRecommendation (empty scopeIn offer)
  → later F2 accept ("D'accord…", "ok, vas-y") rebuilds from same empty-path offer
       → same MATERIALITY_UNKNOWN (EC still 0)
```

### Premier garde-fou bloquant

`prepareGenericExecutionContractDraft` @ lines ~616–638:

- `hdRequired` true because `materiality.humanDecisionRequired` (UNKNOWN)
- `decisionId` absent
- returns `code: "MATERIALITY_UNKNOWN"` with the exact UI message

No `BuildExecutionContract` reached.

---

## 5. Valeurs Product pertinentes (instance HQA-FRESH-01)

| Champ | Valeur observée / dérivée | Confiance |
| --- | --- | --- |
| Tool objective | Document de cadrage dans le dépôt Git… | PROVEN (session args) |
| Tool expectedOutcome | Document lisible… emplacement documentaire approprié… | PROVEN |
| Tool scope | Narrative FR; **"Chemin précis à déterminer après inspection du dépôt"**; spaces; no `/` | PROVEN |
| executionIntent | `null` (mission solicit path) | PROVEN (code + path) |
| intentKind / targetPath / artifactFileName / scopeIn / expectedOutputs (paths) | absent | PROVEN |
| requiredCapabilities | absent → envelope default generalist | PROVEN |
| collectConcreteMissionPaths | `[]` | PROVEN (replay of push rules on captured scope) |
| liveReadOk | expected true (active LPS/cycle; runtime up) | HIGH (binding+LPS present; live path not re-invoked in-process) |
| repositoryBinding | identity + pathRoot present | PROVEN |
| pathsOutsidePathRoot | n/a (no concrete paths) | PROVEN |
| structuralTruthBasis | `no_concrete_mission_paths_fail_closed` | PROVEN (code when paths empty) |
| cycleTruthBasis | would be `active_cycle_anchored_matches_requested` if sufficient context | HIGH |
| authorityEnvelopeBasis | `paths_within_path_root_and_generalist_capability_only` even with empty paths | PROVEN (code) |
| productContextSufficient | **false** (requires `concretePaths.length > 0` + non-mutation bases) | PROVEN |
| assessment.materiality | `unknown` | PROVEN (tool result + assessExecutionMaterialityOrUnknown) |
| assessment.reasonCodes | `["product_context_insufficient"]` | PROVEN (code path) |

### Règles `collectConcreteMissionPaths` (l.56–79)

A candidate is kept only if trimmed, **no spaces**, and (`/` present OR file extension). Narrative scope fails all three filters → empty WHERE.

### `productContextSufficient` (l.294–300)

Requires `liveOk && concretePaths.length > 0 && structural.basis === "live_lps_ok_concrete_non_protected_paths_only" && …`. Empty paths alone force false.

---

## 6. Classification des causes (A–F)

| Id | Hypothèse | Statut |
| --- | --- | --- |
| **A** | Périmètre documentaire / chemins concrets absents | **PROVEN — cause racine primaire** |
| B | repositoryBinding insuffisant | **ÉCARTÉE** (identity + pathRoot présents) |
| C | Chemin hors pathRoot | **ÉCARTÉE** (aucun chemin concret) |
| D | Capacité hors enveloppe | **ÉCARTÉE** (pas de caps élevées; default generalist) |
| E | Contradiction / autre motif facts | **ÉCARTÉE** pour cette instance (`contradictionCandidate` null; reason = product_context_insufficient) |
| F | Combinaison | **PARTIEL** — A est nécessaire et suffisant pour UNKNOWN; gap structurel secondaire = Product ne compose pas de destination documentaire autoritaire sous pathRoot (commentaires D-PC-09 / Pass 02 @ prepareGeneric ~703–707) |

---

## 7. Hypothèses distantes — confirmées / écartées

| Hypothèse handoff distant | Verdict local |
| --- | --- |
| resolveAuthoritativeProductMateriality exige contexte Product suffisant | **CONFIRMÉE** |
| collectConcreteMissionPaths extrait chemins de l'intention | **CONFIRMÉE** |
| Absence de chemins → productContextSufficient=false | **CONFIRMÉE** |
| assessExecutionMaterialityOrUnknown → UNKNOWN | **CONFIRMÉE** |
| prepare bloque avant BuildExecutionContract | **CONFIRMÉE** (EC=0) |
| Destination documentaire non résolue systématiquement par Generic PREPARE | **CONFIRMÉE** (code + instance: Nora deferral + no server compose) |

---

## 8. Qualification du garde-fou / gaps

| Dimension | Qualification | Confiance |
| --- | --- | --- |
| Comportement sécurité | **Conforme fail-closed** — refuse NON_STRUCTURAL / PREPARE sans WHERE enforceable | HIGH |
| Gap qualification Product | **OUI** — mission métier documentaire qualifiée en langage naturel, mais le canal solicit ne peut pas (et ne compose pas) un WHERE borné sous `pathRoot` | HIGH |
| Gap UX / Nora restitution | **OUI** — message opaque (« contexte Product insuffisant ou contradiction ») ne dit pas « chemin concret manquant / destination non résolue »; Nora a même déclaré que le chemin serait déterminé après inspection | HIGH |
| Anomalie de code (bug logique) | **NON** pour le fail-closed UNKNOWN; **dette de conception** sur résolution destination documentaire + schéma outil sans champs path | HIGH |

Lien V3-F05: la chaîne conversation→PREPARE fonctionne jusqu'à la qualification materiality; le blocage est une **exigence WHERE Product**, pas une panne Cursor REAL.

---

## 9. Impact HQA-FRESH-01

- Préparation EC **bloquée** → aucun contrat inspectable → pas d'autorisation → pas d'Execute Cursor REAL.
- Cycle C1 reste actif (conforme).
- Campagne ne peut pas prouver la boucle PREPARE→inspect→authorize pour mission documentaire tant que WHERE n'est pas borné.
- Cookies/auth et CURSOR_REAL=1 ne sont **pas** la cause de cet incident.

---

## 10. Correction minimale recommandée (NON IMPLÉMENTÉE)

**Option préférentielle (Product-owned WHERE):**
1. Pour missions documentaires génériques sous Generic PREPARE, résoudre une **destination autoritaire** sous `repositoryBinding.pathRoot` (ex. convention framing artifact path / Pilot-selected path), puis l'injecter dans `scopeIn` / materiality facts **avant** `assessExecutionMaterialityOrUnknown`.
2. Ne pas traiter les propositions Nora comme autorité Git (conserver D-PC-09).
3. Clarifier le message MATERIALITY_UNKNOWN avec reasonCodes machine (`no_concrete_mission_paths`, …).

**Alternatives bornées:**
- Étendre le schéma outil avec `scopeIn[]` / `targetPath` / `artifactFileName` **candidats**, toujours soumis à pathRoot + protected-path.
- Exiger clarification Pilote explicite du chemin avant PREPARE (UX), sans inventer de path.

**Impacts / régressions possibles:**
- Faux NON_STRUCTURAL si destination inventée hors intention Pilote.
- Contournement involontaire de protected-path si composition trop large.
- Divergence F2 offer vs tool solicit si une seule voie résout le path.

**Gate Morris requis:** GO explicite avant implémentation; tests de non-régression listés §11; pas de GO REAL Execute dans le correctif PREPARE.

---

## 11. Tests futurs recommandés (ne pas exécuter maintenant)

1. Paid documentary mission with concrete `scopeIn` under pathRoot → PREPARE ok / non_structural or structural+HD as designed.
2. Missing path (narrative only) → MATERIALITY_UNKNOWN + reason `product_context_insufficient` / basis `no_concrete_mission_paths_fail_closed`.
3. Path outside pathRoot → authority envelope expanded / UNKNOWN or structural refusal (current policy).
4. Protected path in scope → structural / Morris gate path.
5. Live Product context unavailable → fail-closed UNKNOWN / PRODUCT_CONTEXT_UNAVAILABLE.

---

## 12. Réserves

- `liveReadOk` / bases exactes de l'appel in-process n'ont pas été rejoués via API mutante; reconstruction déterministe à partir du code + args tool capturés + binding DB.
- Process-local `pendingGenericPrepareOffer` non inspectable après coup (mémoire process); comportement accept-GO déduit du code + EC=0 + messages identiques.
- Code local dirty peut différer des blobs distants — diagnostic ancré sur **runtime local dirty** qui sert HQA-FRESH-01 (PID 51329).

---

## 13. Décisions Morris requises

1. Accepter cause racine **A** (WHERE concret absent) comme **PROVEN**.
2. Choisir voie de correction (compose Product destination vs clarification path vs tool schema) sous GO séparé.
3. Autoriser ou non reprise HQA-FRESH-01 après correctif (mêmes DB virgin/dirty campaign rules).
4. Aucun Execute REAL tant que EC inspectable + HD/authorize gates non franchis.

**Instruction ChatGPT:** relire ce handoff canonique avant tout verdict de correction.

---

## 14. Conditions de reprise HQA-FRESH-01

Reprise possible seulement après décision Morris + correctif/clarification WHERE, **sans**:
- mutation silencieuse de matérialité;
- contournement MATERIALITY_UNKNOWN;
- Execute Cursor sans EC autorisé.

Preuve de reprise attendue: EC préparé inspectable; message non-UNKNOWN; C1 toujours actif; Attempt=0 jusqu'à GO Execute séparé.

---

## 15. État préservé

| Item | Status |
| --- | --- |
| Fichiers Product créés/modifiés par ce cycle | **aucun** (seul `.tmp-sfia-review/chatgpt-review.md`) |
| Mutation SQLite QA | **aucune** (RO only) |
| Préparation / exécution Product | **aucune** nouvelle |
| Verdict | **DIAGNOSIS COMPLETE — ROOT CAUSE PROVEN** |
