# Review Pack FULL — STUDIO-EXECUTION-ARCH-AUDIT-01

| Field | Value |
| --- | --- |
| **Horodatage** | 2026-10-17 12:05:00 CEST |
| **Audit ID** | `STUDIO-EXECUTION-ARCH-AUDIT-01` |
| **Cycle** | 6 — Architecture technique |
| **Profil** | Critical |
| **Mode** | READ-ONLY |
| **Macro** | `STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01` |
| **Milestone** | P6 — Global Integrated Product QA |
| **Campaign** | `P6-GLOBAL-INTEGRATED-PRODUCT-QA-01` / Human QA `P6-HQA-FRESH-01` |
| **Capacité principale** | V3-F05 — Conversation → décision → exécution |
| **Branche Product** | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| **HEAD** | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| **origin/main** | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| **Handoff précédent** | `b618a536` (materiality regularization pass 02) |
| **Product dirty FP (excl. `.tmp`)** | `ae0f68e69d3733c7f7e76c62bee9a2c6c2063248a26081af76b3ca272bf58a4a` |
| **Dirty FP incl. `.tmp`** | `ffc212da932c7adea6451f9818bea30dd7b51ee671b13c8dcd30d321ead785a6` |
| **Runtime :3020** | PID `20051` — `next dev` from **same candidate app path** (dirty worktree loaded) |
| **Product files modified this cycle** | **ZERO** |
| **Verdict Cursor** | **ARCHITECTURE AUDIT COMPLETE — READY FOR CHATGPT REVIEW** |

---

## A. Executive assessment

**Question directrice :** l’architecture actuelle permet-elle de préparer, inspecter, gouverner, autoriser, exécuter, vérifier et restituer une mission Cursor de manière cohérente avec Studio v3 ?

**Réponse synthétique (preuve-based) :** **Partiellement — NON pour une boucle Product bout-en-bout cohérente aujourd’hui.**

Les briques OA (ExecutionContract T-A4, Attempt T-A5, Decision, Evidence) et les gates d’autorité (Recommendation ≠ HD ≠ Inspection ≠ Confirmation ≠ Authorization ≠ Execution) sont **présentes et largement testées**. Generic PREPARE (G-D4) + résolution documentaire (MATERIALITY-BLOCK-01) peuvent produire un contrat durable avec `MATERIALITY:NON_STRUCTURAL` et `decisionRefs=[]`.

**Contradiction prouvée (P0) :** ce même contrat est **refusé** par le lecteur de continuité gouvernée (`verifyDecisionLineage` exige ≥1 `decisionRef`), alors que Confirm/Authorize G-D4 l’**admettent**. Résultat : surfaces Product branchées sur `readCurrentGovernedExecutionContinuity` (Conversation card, badge, une partie du chemin Execution) ne voient pas comme « active » un contrat pourtant `confirmation_required` en SQLite — tandis que d’autres projections (`deriveGovernedExecutionContinuity` / `resolveProductExecutionContext`) peuvent encore le lister.

L’état HQA-FRESH-01 **observe exactement cette configuration** (section H). Ce n’est pas un incident isolé de matérialité : c’est une **incompatibilité inter-composants** entre règles d’autorité G-D4 et invariant historique de continuité.

Runtime v3 reste **NON ADOPTED**. Aucune correction n’est autorisée par cet audit.

---

## 1. Local Git Truth Check

### Initial / Final (inchangé — READ-ONLY)

| Check | Result |
| --- | --- |
| toplevel | `/Users/morris/Projects/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016` |
| remote | `mcleland147/sfia-workspace` |
| branch | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD local = remote tip | `b4c1d862…` |
| origin/main local = remote | `896ff59c…` |
| staged | vide |
| Product dirty | M-HD + materiality + generic prepare + UI (tracked + untracked) — **préservé** |
| Review Pack | réinitialisé puis réécrit (seul fichier local autorisé hors lecture) |

### Correspondance runtime ↔ code audité

| Preuve | Observation |
| --- | --- |
| `lsof :3020` | `node` PID 20051 |
| `pgrep next dev` | path = `…/sfia-workspace-docs-generic-execution-nora-tool-invocation-20261016/projects/sfia-studio/app/…` |
| Conclusion | Runtime sert le **worktree dirty local** inspecté — **PAS** le seul commit `b4c1d862` sans dirty. Affirmer « HEAD seul » serait faux. |

---

## 2. Sources consultées

### Canoniques (lues / skimmées avec invariants extraits)

- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md` (A3 loop, R13–R15, Fake≠path)
- `projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md` (D-ER-16…18)
- `projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md`
- `projects/sfia-studio/sfia-v3-framing/30`–`37` (HD/LPS/capability/evidence/héritage ; runtime v3 NON ADOPTED)
- Handoff tip `b618a536:sfia-review-handoff/latest-chatgpt-review.md` (Pass 02 materiality)

### Code (inspecté)

- `lib/oa/execution-contract/` (42 fichiers) ; `execution-attempt/` (90) ; `decision/` (31) ; `evidence-review/` ; `git-ports/`
- `features/project-assistant/f2/` (25) ; `w2/` (75) ; `orchestrateTurn.ts` ; `nora-cognitive-runtime/`
- `features/pre-m6-product-ui/` — Execution / Conversation / confirmation / mission HD / presentation
- Tests clés : `p6.gD4.*`, `p6.hqa.materialityBlock01.*`, `p6.mHd01/02.*`, `p6.der16.*`, `ecRehydrationContinuity.*`, `p6.rCi01.*`, `w3aGovernedExecute.*`

### Données / UX

- HQA SQLite `oa-product.sqlite` en `mode=ro&immutable=1` (section H)
- Figma file `m4g8j0gNbEzfIuH6S9AZJF` frames `150:532` (BEFORE/READY) et `150:29` (AFTER/TERMINÉE) via MCP metadata
- Runtime browser capture **NON** réalisée ce cycle (limite : pas d’action Product ; preuve visuelle = Figma + code presentation)

### Méthode / CKC

- Publisher `scripts/sfia/publish-review-handoff.sh` (L3 borné)
- CKC architecture technique : **candidate / experimental** — non traité comme baseline

---

## B. Inventaire exhaustif (couches)

### B1. OA ExecutionContract (T-A4) — KEEP core

| Module | Rôle |
| --- | --- |
| `build/validate/confirm/cancel/supersede` | Machine d’états draft→…→confirmed |
| `checkExecutionAuthorization` | Authorization sans launch |
| `recordContractInspection` | Attestation (pas d’autorité) |
| `executionMateriality` | G-D4 empty-refs ↔ NON_STRUCTURAL |
| `semanticFingerprint` / inspection FP | Intégrité Confirm/Auth |
| Memory + SQLite services | Dual persistence |

### B2. OA ExecutionAttempt (T-A5) — KEEP core

Select → Start (Gate D) → running → terminal → Evidence ingest → verify → ReviewBundle → advance completion. **Attempt success ≠ Evidence verified ≠ Product SUCCESS.**

### B3. Decision / Confirmation — KEEP core + ADAPT Product binding

`recordHumanDecision`, Confirmation request/grant/consume, `localSingleUserAuthority`. Soft note `assertRecommendationIsNotDecision` (no-op return).

### B4. Product prepare/govern (W2/F2) — ACTIVE concurrent circuits

| Circuit | Statut | Notes |
| --- | --- | --- |
| **Generic PREPARE (G-D4)** | ACTIF | `prepareGenericExecutionContractDraft` ; peut `decisionRefs=[]` |
| **Documentary WHERE bind** | ACTIF (sous-routine) | `resolveGenericPrepareDocumentaryTarget` — pas un moteur parallèle |
| **Artifact governed continuation (ACGC)** | ACTIF | `resolveActiveCycleGovernedContinuation` ; HD Artifact / optional documentary escape |
| **W2 / W3-A HD-bound prepare** | ACTIF | toujours `decisionRefs=[decisionId]` |
| **F3 / M3** | ACTIF (lab + recovery) | HD-bound ; fixture paths |
| **Mission HD channel (M-HD)** | ACTIF dirty | seal/record/verify séparés de EC continuity |
| **pendingGenericPrepareOfferStore** | ACTIF process-local | perdu au restart |
| **Legacy Confirm Case A** | TRANSITOIRE | non-empty refs sans stamp MATERIALITY |

### B5. UI Product

| Surface | Rôle |
| --- | --- |
| `ExecutionSurface` | Inspect→Confirm→Authorize→Reconcile execute |
| `GovernedConfirmationCard` | Conversation — gated on continuity **active** |
| `GovernedGenericMissionDecisionCard` | Mission HD (dirty) |
| `pilotExecutionPresentation` | Placeholders work items |
| Context rail | ProjectContextSummary + Lifecycle + LPS + Trajectory + Journal |
| Legacy F2/F3 authority in Conversation | **OFF** Product (`exposeLegacyAuthorityPath=false`) |

### B6. Counts audités

| Couche | Fichiers / frontières |
| --- | --- |
| EC | 42 |
| Attempt | 90 |
| W2 | 75 |
| F2 | 25 |
| Circuits concurrent | 6 |
| Invariants T01–T18 | 18 |
| Incohérences I1–I11 + dérivés | 14 registres |
| Tests theme-map | ~64 fichiers project-assistant + suites OA |

---

## C. Graphes

### C1. Graphe fonctionnel (cible Product chat-first)

```
Pilote ⇄ Nora (solicit PREPARE only)
  → pending offer / seal (mission)
  → [si structural] HumanDecision mission
  → Generic PREPARE → ExecutionContract (durable)
  → Inspection attestation
  → Confirmation (si required)
  → Authorization (Check — no launch)
  → ExecutionAttempt + Cursor REAL/fixture
  → Observation / Evidence / ReviewBundle
  → LPS / Trajectory update
  → Restitution Nora → décision suivante
```

### C2. Graphe technique / dépendances (autorité)

```
Nora tools ──solicit──► F2 solicitGenericExecutionPrepare
                            │
                            ▼
              prepareGenericExecutionContractDraft
                 │ documentary WHERE │ materiality │ optional HD verify
                 ▼
              OA Build/Validate ──stamp──► MATERIALITY:* + decisionRefs
                 │
     ┌───────────┼──────────────────────────────┐
     ▼           ▼                              ▼
 Confirm     Continuity reader              Derive projection
 (G-D4 OK []) (FAIL if [])                  (peut voir EC sans lineage HD)
     │                                           │
     ▼                                           ▼
 Authorize                              ExecutionSurface presentation
     │                                           │
     ▼                                           ▼
 Attempt/Start                          Conversation GovernedConfirmationCard
                                        (requires continuity.kind=active)
```

**Frontière d’autorité cassée :** Confirm/Auth vs Continuity reader sur `decisionRefs=[]`.

---

## D. Matrice des contrats inter-composants (extraits critiques)

| Producteur | Consommateur | Schema / champ | Invariant | Validation | Persistance |
| --- | --- | --- | --- | --- | --- |
| `prepareGeneric…` | OA EC | `decisionRefs` may `[]` | G-D4 non-structural | stamp `MATERIALITY:NON_STRUCTURAL` | SQLite EC |
| `assertDecisionRefsAdmissibleForConfirm` | Confirm/Auth | empty OK iff stamp+recompute NS | fail-closed stamp mismatch | `executionMateriality.ts:157-206` | — |
| `verifyDecisionLineage` | Continuity UI | refs.length≥1 | **toujours** | `readCurrent…:139-143` | — |
| `resolveProductExecutionContext` | Derive projection | `decisionId` null si [] | listing EC OK | `resolve…:174-177` | — |
| Inspection | Confirm | inspectionSufficient | Confirm sans auth | attestation FP | journal |
| Confirmation consume | Authorize | status=consumed | Option B residual risk | CheckAuthorization | SQLite |
| Attempt | Evidence | lineage project+EC | success≠verified | ingest/verify | SQLite |
| Nora tool | PREPARE only | no Attempt | D-ER-16 | tool forces `executionAttemptCreated:false` | — |

---

## E. Registre des incohérences

### I1 — G-D4 empty decisionRefs vs continuity (P0)

| | |
| --- | --- |
| **Source** | Code + HQA DB |
| **Mécanisme** | PREPARE/Confirm admettent `[]` ; `verifyDecisionLineage` refuse |
| **Producteur** | `prepareGenericExecutionContractDraft.ts:710,942` + `executionMateriality.ts:205-206` |
| **Consommateur** | `readCurrentGovernedExecutionContinuity.ts:139-143` → Conversation/ProjectWorkspace continuity cards |
| **Preuve** | HQA: `xct:gen-prep:5f13e66c…` status=`confirmation_required`, `decisionRefs=[]`, constraints contain `MATERIALITY:NON_STRUCTURAL` + `PREPARE_WITHOUT_SYSTEMATIC_HD` |
| **Impact** | Contrat durable « À confirmer » invisible / non actionnable via canal continuity ; UX split |
| **Détection actuelle** | Test `ecRehydrationContinuity` G5 **encode le refus** comme attendu — ne détecte pas l’incompatibilité G-D4 |
| **Risque** | Pilote bloqué ou guidé vers mauvaise surface ; faux sentiment de « contrat prêt » |
| **Statut** | **PROUVÉ** |
| **Correction possible** | Harmoniser : (A) continuity admet G-D4 empty+stamp+CURRENT ; ou (B) Generic PREPARE non-structural lie toujours une HD légère ; ou (C) canal UI dédié sans continuity reader — **arbitrage Morris** |
| **Test nécessaire** | Cross-boundary : prepare G-D4 → `readCurrent…` must return `active` XOR Product UI must not claim confirmation_required via other path |
| **Gate** | Morris D1 |

### I2 — Affichage « À confirmer » vs continuité refusée (P0)

| | |
| --- | --- |
| **Source** | Dual readers |
| **Mécanisme** | `deriveGovernedExecutionContinuity` / context peut exposer status EC ; `readCurrent…` fail/none |
| **Preuve** | Code paths ProjectWorkspacePage badge uses **both** derive + read ; Conversation card requires `kind==="active"` |
| **Impact** | États contradictoires entre onglets / messages Nora |
| **Statut** | **PROUVÉ mécaniquement** ; observation UI runtime exacte = GAP (pas de capture ce cycle) |

### I3 — Placeholder work item (P1)

| | |
| --- | --- |
| **Source** | `pilotExecutionPresentation.ts:191-204` |
| **Mécanisme** | Si `reviewItemSummaries` vide → label fixe « Action prévue dans la portée du contrat » |
| **Impact** | Mission documentaire détaillée (objective/path) absente de la liste « CE QUI VA ÊTRE FAIT » malgré EC inputs riches |
| **HQA** | `resolvedAuthoritativeTargetPath=projects/organisation-des-benevoles/01-cadrage/note-de-cadrage.md` présent en payload ; objective JSON extract vide sur champ testé — **perte présentation** |
| **Statut** | **PROUVÉ** (code) ; corrélation HQA forte |

### I4 — Message « Execution contract input is invalid » puis contrat préparé (P1)

| | |
| --- | --- |
| **Source** | `execution-contract/domain/errors.ts` → `CONTRACT_INVALID` |
| **Mécanisme** | Échec Validate/Build antérieur ou path parallèle ; Nora peut narrer l’erreur puis un retry réussit |
| **Preuve** | Chaîne d’erreur canonique existante ; **pas** de corrélation log HQA forcée ce cycle (rg logs incomplets) |
| **Statut** | **PARTIEL** — mécanisme possible ; séquence HQA exacte NOT FULLY OBSERVED |

### I5 — Confirmer sans présentation complète (P1)

| | |
| --- | --- |
| **Source** | CTA gating `inspectionSufficient` ; disclosure partielle sur Conversation vs Trajectory fingerprint |
| **Risque** | Confirm activable après inspect minimal sans restitution mission/WHERE complète (I3) |
| **Statut** | **RISQUE PROUVÉ par composition** (I3 + gating) |

### I6 — Inspection vs preuve de lecture Pilote (P1)

| | |
| --- | --- |
| **Source** | `recordContractInspection` grantsAuthority=false ; sufficiency = FP binding |
| **Gap** | Pas de preuve UX « Pilote a lu objective/path » — seulement attestation technique |
| **Statut** | **GAP doctrine/UX** |

### I7 — Rail contexte hérité (P2)

| | |
| --- | --- |
| **Figma** | Panneau « CONTEXTE DU PROJET » unique (Cycle/Focus/Currentness/Trajectory/Attention/Synthèse) — **utile** |
| **Runtime** | Empile Lifecycle + LPS + Trajectory embedded + Journal + Routing — densité > Figma |
| **Classification** | Context panel **KEEP** ; composants empilés **ADAPT/HARVEST** (pas suppression globale) |

### I8 — Destination documentaire vs opération CREATE/UPDATE (P1)

| | |
| --- | --- |
| **Source** | Documentary bind résout WHERE ; action canonique `studio.cursor.generalist.execute` |
| **Gap** | Qualification CREATE vs UPDATE du fichier cible pas toujours exposée au Pilote |
| **HQA** | `documentaryTargetResolution=resolved_product` + path `.md` |
| **Statut** | **PARTIEL** |

### I9 — Worktree dirty vs Git vs runtime (P1)

| | |
| --- | --- |
| **Preuve** | Runtime = dirty local ; HEAD distant sans dirty ; HQA DB séparée |
| **Risque** | Divergence preuve / reproduction / handoff |
| **Statut** | **PROUVÉ** (process path) |

### I10 — der16 E12/R5 / M-HD drift (P2)

| | |
| --- | --- |
| **Source** | Dirty M-HD + tests `p6.der16.*` / `p6.mHd01/02.*` non commités |
| **Statut** | Préexistant ; hors scope correction ; **note de dette** |

### I11 — Couverture frontières insuffisante (P0 pour QA)

| | |
| --- | --- |
| **Preuve** | `p6.gD4` prouve prepare→authorize avec `[]` **sans** assert `readCurrent… kind=active` ; `ecRehydration` G5 prouve refus `[]` comme feature |
| **Pourquoi les tests passent** | Chaque suite valide **sa** frontière isolée ; aucune suite n’assert la **conjonction** G-D4∩Continuity∩Conversation card∩ExecutionSurface |
| **Statut** | **PROUVÉ** |

### I12 (dérivé) — Offer store process-local (P1)

Perte au restart ; reprise mission HD / offer fragile vs EC durable SQLite.

### I13 (dérivé) — Materiality non re-checkée à Authorize si refs non-vides seulement (P2)

`CheckExecutionAuthorization` freshness HD loop quand refs non-empty ; empty path dépend du stamp Confirm antérieur.

### I14 (dérivé) — Recommendation≠Decision soft (P2)

`assertRecommendationIsNotDecision` no-op.

---

## F. Matrice d’héritage (recommandations — NON décisions)

| Actif | Classification | Justification |
| --- | --- | --- |
| OA EC / Attempt / Decision / Evidence | **KEEP** | Cœur v3-compatible ; gates durs |
| G-D4 materiality stamps | **KEEP + ADAPT** | Intention Product valide ; adapter continuity |
| `verifyDecisionLineage` empty-reject | **ADAPT** | Invariant historique incompatible G-D4 |
| Documentary WHERE resolver | **KEEP / COMPLETE** | Réutiliser ; pas de moteur parallèle |
| Mission HD channel (M-HD dirty) | **COMPLETE / ADAPT** | Utile structural ; clarifier rapport à empty-refs |
| pending offer store | **ADAPT** | Durabilité session/restart |
| ACGC Artifact continuation | **KEEP** | Distinct ; escape documentary OK |
| W3-A / F3 HD-bound | **KEEP** (lab/recovery) ; Product chat-first = Generic | Ne pas fusionner artificiellement |
| Legacy Confirm Case A | **FREEZE → RETIRE LATER** | Compat ; borner |
| TrajectorySurface full authority | **HARVEST** vers ExecutionSurface | Éviter double oracle |
| Context rail stack | **ADAPT** vers Figma Context | Ne pas DELETE panel |
| `pilotExecutionPresentation` placeholder | **ADAPT** | Projeter objective/path EC |
| Runtime v3 package | **FREEZE** | NON ADOPTED |
| Fake provider / fixture adapters | **KEEP** | Fake≠second Product path (doctrine) |

**REPLACE** : aucune brique recommandée en REPLACE total sans arbitrage Morris. Toute option REPLACE devrait d’abord essayer ADAPT continuity↔G-D4.

---

## G. Matrice de couverture des tests

| Frontière A→B | Unit | Intégr. | Parcours | Gouvernance | REAL | Trou |
| --- | --- | --- | --- | --- | --- | --- |
| Nora tool → PREPARE | der16 | der16 | PARTIEL | oui | GAP | narration erreur I4 |
| Documentary WHERE → materiality | hqa.materialityBlock01 | oui | — | — | GAP HQA | CREATE/UPDATE Pilote |
| G-D4 prepare `[]` → Confirm/Auth | gD4 | gD4 | — | oui | GAP | **pas de continuity** |
| G-D4 `[]` → `readCurrent` active | — | **ABSENT** (inverse G5) | — | — | — | **I11 P0** |
| Continuity → ConfirmationCard | UI tests partiels | — | — | — | GAP | empty-refs |
| Inspect → Confirm | inspectionBinding / gD4 | oui | — | oui | GAP | lecture Pilote I6 |
| Authorize → Attempt | projectScopedCursor / w3a | oui | — | oui | activation evidence only | — |
| Attempt → Evidence → LPS | OA evidence-review / postExecution | oui | PARTIEL | oui | GAP | — |
| Figma BEFORE/AFTER ↔ runtime | — | — | — | — | — | **ABSENT** pixel |
| Fresh vs historical project | — | PARTIEL | HQA data RO | — | — | fixture≠HQA |

**Réponse obligatoire — pourquoi tests verts + parcours réel cassé :**
Les suites déterministes **ne croisent pas** G-D4 empty-refs avec le reader de continuité Product ni avec la card Conversation. Le test de continuité traite `[]` comme échec attendu (héritage HD-bound), tandis que G-D4 traite `[]` comme succès attendu — **deux vérités locales incompatibles**, aucune red-flag globale.

---

## H. Analyse des données historiques (HQA-FRESH-01) — READ-ONLY

DB : `.tmp-sfia-review/p6-global-integrated-qa/hqa-fresh-01/qa-dbs/product/oa-product.sqlite`
Accès : `sqlite3 file:…?mode=ro&immutable=1` — **aucune écriture**.

| Table | Count |
| --- | --- |
| `oa_execution_contracts` | 1 |
| `oa_human_decisions` | 1 |
| `oa_execution_attempts` | 0 |
| `oa_confirmations` | 0 |

**Contrat courant :**

| Champ | Valeur observée |
| --- | --- |
| id | `xct:gen-prep:5f13e66cc5cdea80d5544e54` |
| status | `confirmation_required` |
| version | 2 |
| decisionRefs | `[]` |
| action/target | `studio.cursor.generalist.execute` / `.workspace` |
| constraints | contient `MATERIALITY:NON_STRUCTURAL`, `PREPARE_WITHOUT_SYSTEMATIC_HD`, `NO_ATTEMPT_AT_PREPARE`, … |
| resolved path | `projects/organisation-des-benevoles/01-cadrage/note-de-cadrage.md` |
| documentaryTargetResolution | `resolved_product` |
| project / cycle | `prj:8048462e-…` / `cyc:trj-8f5488e7…` |

**HD présente :** `dec:gf-trj:66c1d627-…` — **trajectory approval**, status `accepted` — **non liée** au contrat (`decisionRefs=[]`). Ce n’est pas une Generic Mission HD.

**Conclusion données :** anomalies I1/I2/I3 **sensibles au design de code**, pas seulement à un historique corrompu. Le projet HQA est un **témoin fidèle** de G-D4 non-structural + continuity HD-bound.

WAL : fichiers présents sans `-wal` listés au snapshot ; lecture immutable utilisée.

---

## I. Comparaison Figma / runtime

| Frame Figma | État Product | Composant React | Source données | Action | Gap |
| --- | --- | --- | --- | --- | --- |
| `150:532` BEFORE/READY 1440×1024 | PRE_EXEC ready / confirm | `ExecutionSurface` + presentation | derive + read continuity | Exécuter / Confirmer | Work rows Figma = liste concrète ; runtime placeholder I3 ; chip « Prête » vs `confirmation_required` HQA |
| `150:29` AFTER/TERMINÉE | POST_EVIDENCE | même surface terminal | evidence/review | Revenir conversation | Non observé HQA (0 attempts) |
| Project Context `150:682` | always | rail stack (multi) | LPS/lifecycle/trajectory | shortcuts | **Figma = 1 panneau** ; runtime densifie — ADAPT pas DELETE |
| Mission proposée / HD | Conversation | `GovernedGenericMissionDecisionCard` | mission continuity | Accept/Refuse/Amend | Dirty M-HD ; frames Figma mission **à confirmer** avant remplacement visuel |
| Contrat à confirmer | Conversation card | `GovernedConfirmationCard` | **readCurrent active only** | Inspect/Confirm | **Cassé pour G-D4 []** |

**Preuve visuelle runtime :** NON CAPTURÉE ce cycle (READ-ONLY, pas d’action). Limite déclarée.

---

## J. Options de convergence

### Option 1 — Harmoniser continuity sur G-D4 (ADAPT continuity)

- `verifyDecisionLineage` accepte `[]` ssi stamp `MATERIALITY:NON_STRUCTURAL` + CURRENT revalidation (même règle Confirm)
- UI unique sur continuity
- **Coût** moyen ; **risque** moyen (régression HD-bound) ; **dette** faible si tests croisés
- Exit : G-D4 prepare→continuity active→Confirm card→Authorize déterministe + HQA replay

### Option 2 — Interdire empty-refs Product (ADAPT prepare)

- Toujours lier une HD (mission ou « accept prepare ») même non-structural
- Continuity historique inchangée
- **Coût** moyen-élevé (M-HD obligatoire) ; **risque** friction Pilote ; contredit intention G-D4 « without systematic HD »
- Exit : zéro EC Product avec `[]` ; tests gD4 réécrits

### Option 3 — Dual-canal explicite (COMPLETE UI)

- Canal A HD-bound ; Canal B non-structural sans continuity reader
- **Coût** élevé ; **risque** confusion Pilote / dette double oracle — **déconseillé** sauf transition courte FREEZE

**Recommandation argumentée (non décision) :** **Option 1** maximise la réutilisation G-D4 + documentary WHERE déjà livrés, minimise un second moteur, et cible le trou de test I11. Option 2 reste viable si Morris préfère « toute exécution a une HD ».

---

## K. Risques / dette / exit

| ID | Sévérité | Dette | Exit |
| --- | --- | --- | --- |
| I1/I2/I11 | P0 | Continuité vs G-D4 | Test croisé + règle unique + HQA re-proof sans Execute auto |
| I3/I5/I6 | P1 | Presentation / inspection honesty | Projection objective+path ; disclosure Confirm |
| I8/I12 | P1 | Opération + offer durability | Clarifier CREATE/UPDATE ; durabiliser offer |
| I7/I10/I14 | P2 | Rail / M-HD dirty / soft reco | ADAPT UI ; commit M-HD séparé ; durcir reco≠HD |
| I9 | P1 | Dirty runtime | Commit/regularize Product avant REAL preuve normative |

---

## L. Critical path (pour boucle utilisable — pas autorisé ici)

1. Arbitrage Morris D1 (Option 1 vs 2)
2. Implémentation ADAPT + tests croisés G-D4∩Continuity∩UI
3. Projection work items depuis EC inputs (I3)
4. Re-proof HQA-FRESH-01 inspect→confirm **sans** Execute jusqu’à GO Morris
5. Ensuite seulement REAL Execute si gates OK

---

## M. Décisions Morris (liste fermée)

| ID | Décision | Pourquoi |
| --- | --- | --- |
| **D1** | Empty `decisionRefs` G-D4 : **admettre en continuity** OU **interdire en Product prepare** | Débloque I1/I2/I11 |
| **D2** | Mission HD (M-HD dirty) : **intégrer / committer** vs **geler** vs **retirer** | Dette I10 + structural path |
| **D3** | Surface d’autorité Product unique : Execution tab vs Conversation confirm vs Trajectory | Évite double oracle |
| **D4** | Rail contexte : **conserver panneau** + plan ADAPT densité | I7 / Figma |
| **D5** | Reprise HQA-FRESH-01 : **continuer projet** vs **nouveau virgin** après correction | Données actuelles = témoin I1 |
| **D6** | Autoriser cycle correctif Product (commit) | Dirty ≠ preuve normative |

Aucune de ces décisions n’est consommée par cet audit.

---

## N. Séquencement proposé

1. ChatGPT review de ce pack (SHA distant)
2. Morris D1 (+ D3)
3. Cycle Delivery ADAPT (tests croisés d’abord)
4. UI honesty I3/I5
5. HQA re-proof gated
6. D2/D4 en parallèle non bloquant
7. REAL Execute seulement après GO explicite

Capacité suivante roadmap : diagnostic causal transversal **puis** correction autorisée — **pas** reprise HQA auto.

---

## O. Verdict d’audit

| Dimension | Évaluation |
| --- | --- |
| Capacité actuelle | Préparer (oui) ; matérialité documentaire (oui, dirty) ; gouverner Confirm/Auth OA (oui) ; **restituer/continuer Product de façon cohérente (NON pour G-D4 [])** ; exécuter REAL (infra présente, HQA 0 attempt) |
| Compatibilité Studio v3 | Invariants doctrinaux largement encodés ; **boucle F05 non fermée UX/continuité** ; runtime v3 NON ADOPTED |
| Fake/Real | AUDIT EVIDENCE STATIC/RO — REAL BOUNDARY PROVEN **non** réclamé |
| Couverture audit | Graphe EC/Attempt/Decision/W2/F2/UI/tests/HQA RO/Figma metadata — **COMPLETE pour verdict architecture** ; captures runtime Pilote = réserve |

### Invariants T01–T18 (synthèse)

| ID | Confiance | Gap |
| --- | --- | --- |
| T01 Project/cycle | HIGH | — |
| T02 Mission=intent | MED | presentation loss I3 |
| T03 Materiality | HIGH (code+HQA stamp) | Authorize recheck edge I13 |
| T04 Scope | MED | CREATE/UPDATE I8 |
| T05 Capabilities | HIGH | — |
| T06 HD structurante | MED | G-D4 sans HD vs continuity |
| T07 PREPARE≠EXEC | HIGH | — |
| T08 Inspection=contrat présenté | MED | I5/I6 |
| T09 Confirm version | HIGH | — |
| T10 Auth état courant | HIGH | — |
| T11 Refusé non actionnable | **LOW** | I1/I2 contradiction affichage |
| T12 Résultat in scope | MED | 0 attempt HQA |
| T13 Evidence liaison | HIGH (code) | REAL GAP |
| T14 Git distinct | HIGH | — |
| T15 Nora restitution | MED | I4 partial |
| T16 Session resume | LOW | offer store I12 |
| T17 Legacy no bypass | MED | Case A freeze |
| T18 Tests frontières | **LOW** | I11 |

---

## Preuves positives

- Séparation PREPARE ≠ AUTHORIZE ≠ EXECUTE encodée (D-ER-16…18, der16, gD4 Q09/Q15).
- Documentary WHERE Product-owned avant materiality (Pass 01/02 + module local).
- OA state machines T-A4/T-A5 fermées et testées.
- Figma Execution BEFORE/AFTER confirmés (1440×1024, Context panel présent).
- HQA DB lisible RO ; 0 Attempt (pas d’Execute furtif).

## Preuves négatives

- Continuity refuse `decisionRefs=[]` (`readCurrent…:139-143`).
- HQA contrat G-D4 exact avec `[]` + `confirmation_required`.
- Test G5 continuity **exige** l’échec sur `[]`.
- Placeholder work items masque la mission.

## Hypothèses non résolues

- Séquence exacte du message Nora `CONTRACT_INVALID` sur HQA (I4) — logs non corrélés exhaustivement.
- Pixel-parity Figma vs runtime — pas de screenshot browser.
- Comportement exact badge Execution quand derive dit confirmation_required et read échoue — non capturé UI.

## Réserves

- Audit sur **dirty worktree** + HEAD `b4c1d862` : conclusions Product runtime incluent M-HD/materiality dirty.
- CKC non baseline.
- Aucune capture navigateur actionnée.
- Classifications ≠ décisions Morris.

## Confirmation zéro modification Product

Aucun fichier sous `projects/sfia-studio/**` modifié par ce cycle.
HQA SQLite non mutée (lecture immutable).
Seul `.tmp-sfia-review/chatgpt-review.md` réécrit.

## Fake/Real qualification

| Frontière | Niveau ce cycle |
| --- | --- |
| Nora/OpenAI | NOT RE-PROVEN |
| EC / continuity | STATIC PROVEN (code+DB) |
| Cursor gateway | NOT INVOKED |
| Evidence/Git | STATIC code only |
| Browser HQA | NOT CAPTURED |
| Human QA | STATE OBSERVED RO |

**Verdict :** ARCHITECTURE AUDIT COMPLETE — READY FOR CHATGPT REVIEW
