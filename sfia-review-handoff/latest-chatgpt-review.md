# SFIA Review Pack — FULL — CRITICAL

## 00. Identity

| Field | Value |
| --- | --- |
| Timestamp UTC | 2026-10-22T18:49:12Z |
| Cycle | AKG-M4-A / T-A02 — Critical Review Correction Pass 01 |
| Profile | CRITICAL |
| Branch | `analysis/akg-m4a-ta02-capability-inventory` |
| HEAD | `c48c6a582c10ee3cf6902203d6a4eb01ce3f2139` |
| origin/main | `f44a99b4da84188772b80aca3c9ebe1a3e12617e` |
| Document | `projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/06-m4a-historical-capabilities-inventory.md` (untracked) |
| Document hash-object | `072ef71f57a3f765c5929781b1b78e246ce0a0dc` |
| Prior T-A02 handoff | `e66d5ebceca2823965c79460ea031c3f0e6fcf82` / `544ddbfaa9d9a7f28f35b91da7ad8950b4384d18` |
| Project commit/push | NONE |

## 01. Scope

AUTHORIZED: correct CAP-D1-04, CAP-ER-05, CAP-OPS1-05 + coherence; Full pack; L3 handoff.
NOT AUTHORIZED: runtime mutation; other project files; project push/PR; M4-A CLOSED; T-A01 WT changes.

## 02. Git Review Index

```
 M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio/convergence/architectural-knowledge-governance/m4-rationalization/06-m4a-historical-capabilities-inventory.md
```

| Control | Result |
| --- | --- |
| Branch/HEAD/main | MATCH expected |
| `git diff --no-index --check` exit | `1` (1=new file expected) |
| Trailing whitespace | `NONE` |
| CAP count | 29 |
| T-A01 WT | untouched |

### Diff identity

```
.../06-m4a-historical-capabilities-inventory.md    | 314 +++++++++++++++++++++
 1 file changed, 314 insertions(+)
```

## 03. CORR results

| ID | Preuve | Verdict |
| --- | --- | --- |
| CORR-01 | cancel = logIntakeEvent only; no session table; subcaps (a)(b)(c)(d) | **PASS** |
| CORR-02 | compose ≠ SHADOW ON; empty policy; operator/GO; PARTIAL not COMPLETE | **PASS** |
| CORR-03 | shared module CONFIRMED; Attempt/VSR no pathPolicy import; Product E2E PARTIAL | **PASS** |

## 04. Sources (correction)

Template SFIA; routing §4.3.0a; Build Doctrine R23/R24; G0; OR-13; M4-A 04; PRR 02/04/06/07/09.
Code: `lib/d1/intake/actions.ts` L68–74; `intakeObservability.ts`; `lib/d1/db.ts` tables; `composeExecutionRunD2D3T7ShadowPilot.ts`; `versionedFinOpsT7ShadowPolicySource.ts`; `operateFinOpsT7ShadowRollout.ts`; `ops1/tools/pathPolicy.ts`; `platform/security/pathPolicy.ts`; import scan Attempt/VSR/PA.

## 05. R23/R24 / Fake-Real

R24 NO PRODUCT SEMANTIC IMPACT. Static only. REAL NOT PROVEN. P6 GLOBAL NOT PASSED. v3 NON ADOPTED. Composition ≠ activation.

## 06. Handoff L3

Branch `sfia/review-handoff` · `sfia-review-handoff/latest-chatgpt-review.md`
Preserves prior tip identity `e66d5ebceca2823965c79460ea031c3f0e6fcf82` / `544ddbfaa9d9a7f28f35b91da7ad8950b4384d18` in history.
Message: `docs(review-handoff): AKG-M4-A T-A02 correction pass 01`

## 07. Instruction ChatGPT (§9.1)

Read Git `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
Optional prior: `e66d5ebceca2823965c79460ea031c3f0e6fcf82`.

Perform: **CHATGPT CRITICAL RE-REVIEW — AKG-M4-A / T-A02 CORRECTION PASS 01**.

Verify CORR-01/02/03 independently; 29 CAP retained; no COMPLETE false claims on pathPolicy E2E or FinOps SHADOW ON; no project mutation; M4-A NON CLOSED.

## 08. Verdict target

READY FOR CHATGPT CRITICAL RE-REVIEW — AKG-M4-A / T-A02 CORRECTION PASS 01

## 09. Full corrected document

---
# AKG-M4-A / T-A02 — Inventaire des capacités historiques & couverture fonctionnelle

| Champ | Valeur |
| --- | --- |
| Cycle | **AKG-M4-A / T-A02** — Historical Capability Inventory |
| Correction | **Critical Review Correction Pass 01** (CORR-01…CORR-03) — 2026-10-22 |
| Type / Profil | Cycle 6 — Architecture technique · **Critical** |
| Typologie | DOC / Correction d'analyse architecturale |
| Capacités v3 | V3-F05 / V3-F07 (+ transverses) |
| Baseline analyse | `analysis/akg-m4a-ta02-capability-inventory` @ `c48c6a582c10ee3cf6902203d6a4eb01ce3f2139` |
| `origin/main` | `f44a99b4da84188772b80aca3c9ebe1a3e12617e` |
| PR documentaire | #604 Draft · CI SUCCESS · non mergée |
| Source T-A01 | Handoff immuable `42de13a95c9ca4b103c9192147a4511f4f1df1dd` · blob `5b341ce88b6db868c70dd0f3deb00fc29a2b799a` |
| Handoff T-A02 antérieur | `e66d5ebceca2823965c79460ea031c3f0e6fcf82` · blob `544ddbfaa9d9a7f28f35b91da7ad8950b4384d18` |
| Principe | **OR-13 capability-first** — dépendance ≠ KEEP ; nom ancien ≠ REBUILD |
| Méthode | Analyse **statique** · aucune mutation runtime · **pas de dual-write D1/OA** |
| Statut | **LOCAL CANDIDATE — INVESTIGATION** · Correction Pass 01 · M4-A **NON CLOSED** · options **candidates** |
| Capacités conservées | **29** (aucun doublon retiré) |
| Non-claims | Pas de GO Delivery · pas de retrait · REAL **NOT PROVEN** · P6 GLOBAL **NOT PASSED** · runtime v3 **NON ADOPTED** · G0-A/B **non réouverts** · composition ≠ activation |

> **Autorité AS-IS :** code Git + preuves primaires > PRR > T-A01 (handoff) > ce document. TO-BE / OR-13 **orientent** ; ils ne remplacent pas G0 adopté.

---

## 1. Baseline Git, sources et niveaux de preuve

### 1.1 Git Truth

| Référence | Observé | Qualification |
| --- | --- | --- |
| Worktree T-A02 | `/Users/morris/Projects/sfia-workspace-akg-m4a-ta02-capability-inventory` | CONFIRMED isolé |
| Branche | `analysis/akg-m4a-ta02-capability-inventory` | CONFIRMED |
| HEAD | `c48c6a582c10ee3cf6902203d6a4eb01ce3f2139` | CONFIRMED |
| Worktree T-A01 | Présent, **non modifié** par ce cycle | CONFIRMED |
| T-A01 projet | Non committé sur branche projet ; preuve via handoff | CONFIRMED |

### 1.2 Sources

- SFIA v2.6 template / routing §4.3.0a / operating model / rules / knowledge layer.
- CKC Architecture : **fallback méthode canonique** si CKC non utilisé comme autorité (guidance candidate seulement).
- Build Doctrine · Roadmap B-AKG · G0 decision pack · AKG README · M4 `01`–`04`.
- T-A01 corrigé (handoff `42de13a9…`) — consumers A01–A12, OR-13, anti dual-write.
- PRR 01–04, 06–09 (sections utiles) · doctrine v3 30/32/34/35/37.
- Code tip `c48c6a58…` : `lib/d1`, `lib/ops1`, P0 routes/features, `lib/oa/execution-run`, contreparties Product (`lib/oa/*`, `vertical-slice-runtime`, `project-assistant`, `pre-m6-product-ui`).

### 1.3 Niveaux de preuve

| Tag | Sens |
| --- | --- |
| **CONFIRMED** | Symbole/route/import inspecté dans le tip |
| **PARTIAL** | Preuve incomplète, équivalence comportementale non établie, ou couverture inégale |
| **UNKNOWN** | Hors périmètre statique (runtime REAL, data utilisateur, dynamic imports non exhaustifs) |

Couverture Product : **COMPLETE** / **PARTIAL** / **ABSENT** / **UNKNOWN** — *ABSENT ≠ obligation de développer*.

---

## 2. Méthodologie d'identification des capacités

1. Partir des **surfaces publiques** (exports `actions`/`commands`, routes, orchestrateurs).
2. Croiser avec **consommateurs** T-A01 (routes, features, tests, scripts).
3. Pour chaque capacité : besoin → fournisseur historique → contrepartie Product éventuelle → écart comportemental.
4. Qualifier **valeur cible** (REQUIRED / OPTIONAL / OBSOLETE CANDIDATE / UNKNOWN) vs TO-BE *sans* adopter le TO-BE.
5. Proposer option technique **candidate** seulement (KEEP / HARVEST / CONSOLIDATE / REPLACE / REBUILD / RETIRE LATER).
6. Respecter G0-A/B : OA + Product SQLite = vérité métier Product ; **pas de dual-write** ; remise en cause G0 = arbitrage nouveau.

```mermaid
flowchart LR
  H[Capacité historique observée] --> C{Couverture Product tip?}
  C -->|COMPLETE| K[KEEP capability / ADAPT or RETIRE impl]
  C -->|PARTIAL| P[HARVEST / CONSOLIDATE / COMPLETE]
  C -->|ABSENT| A{Valeur cible?}
  A -->|REQUIRED candidate| R[REPLACE or REBUILD under GO]
  A -->|OBSOLETE / UNKNOWN| O[RETIRE LATER or defer T-A05]
```

*Diagramme **proposé** (méthode), non un graphe d'import observé.*

---

## 3. Inventaire D1 (A03) — Priorité 1

**Fournisseur :** `lib/d1/**`, `features/d1/**`, routes `/nouvelle-demande`, `/workspace`, `/projects/*`.
**Persistance :** `d1.sqlite` (isolée de Truth C).
**Pont Product (T-A01) :** type/option `BoundedAtomicAuditStore` dans VSR — pas de partage Truth C.

| ID | Besoin fonctionnel | Fournisseur historique | Consommateurs (périmètre) | Couverture Product | Preuves | Données / effets | Invariants | Valeur cible | Option tech. | Risque | Statut |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **CAP-D1-01** | Créer un projet (nom, objectif, idempotence, audit events) | `lib/d1/commands.ts` `createProject` L24+ ; `actionCreateProject` | Routes D1 ; `features/d1/NewProjectForm` | **PARTIAL** — OA `CreateProject` + `createProjectRuntimeAction` + `/studio/projects/new` existent ; **modèle ≠** (pas le même schéma/events/methodMode) | D1 commands ; `lib/oa/project/application/createProject.ts` ; `NewProjectIntentionPage.tsx` | Écriture `d1.sqlite` vs Product SQLite | Idempotency D1 vs OA ports | **REQUIRED** (capacité) | **HARVEST** règles utiles / **REPLACE** impl D1 | Divergence IDs ; perte histo | CONFIRMED |
| **CAP-D1-02** | Sélectionner / persister un *MethodMode* et activer DRAFT→ACTIVE | `selectMethodMode` ; `lib/d1/domain.ts` ; methodModeHold | Intake/confirmation D1 | **ABSENT** comme champ métier D1 — Product a *advisory* `methodOrientation` (prompt), **≠** MethodMode durable D1 ; commentaires OA « Does not replace … MethodMode » | `lib/oa/project/index.ts` L5 ; `f2/methodOrientation` | Hold/readiness D1 | Mode avant ACTIVE | **UNKNOWN→OPTIONAL?** (cible TO-BE à arbitrer) | **HARVEST** si besoin gouvernance / sinon **RETIRE LATER** concept D1 | Réintroduire Mode sans GO doctrine | PARTIAL (écart nommé CONFIRMED) |
| **CAP-D1-03** | Lister / lire projets workspace + audit trail projet | `listWorkspaceProjects`, `getProject`, `listProjectAudit` | `/workspace`, `/projects/[id]` | **PARTIAL** — `listProjects`/`getProject` OA + UI studio ; **pas** d'équivalence audit events D1 | commands L200–220 ; VSR list/get | Lectures D1 | Mono-opérateur D1 | **REQUIRED** lecture projet | **REPLACE** vers Truth C | Migration data | CONFIRMED |
| **CAP-D1-04** | Intake conversationnel — **sous-capacités distinctes (CORR-01)** : (a) analyse d'intention ; (b) journalisation clarification ; (c) *demande* d'annulation journalisée ; (d) annulation **effective/persistée** de session | `actionAnalyzeIntent` / `analyzeIntent` ; `actionLogClarificationAnswer` ; `actionCancelIntakeSession` | `/nouvelle-demande` · `IntakeView` | **PARTIAL** pour (a)/(b) vs onboarding `/studio/projects/new` ; **ABSENT** Product pour modèle session intake D1 ; (d) **non démontrée** côté D1 | (a)(b) actions L42–86 ; (c) `actionCancelIntakeSession` L68–74 = `logIntakeEvent("intake_session_cancelled")` puis `{ok:true}` **sans** update store/DB ; `intakeObservability.ts` = `console.info` ; **aucune** table session intake dans `lib/d1/db.ts` (projects/assignments/audit/idempotency/atomic_audit seulement) | Logs structurés process ; **pas** de statut session durable retrouvé | Fake provider possible pour (a) | **REQUIRED** (a) intention→projet ; (c)(d) valeur **UNKNOWN** si seule télémétrie | **CONSOLIDATE/REPLACE** (a) vers onboarding Product ; **ne pas** inventer lifecycle session D1 | Sur-qualifier cancel comme close durable | CONFIRMED (sémantique cancel = log only) |
| **CAP-D1-05** | Context matching (projets existants / scoring) | `lib/d1/context/actions.ts` `actionMatchExistingContext` | Intake UI | **UNKNOWN/ABSENT** — aucune contrepartie Product Spine **retrouvée** dans le tip | context/actions | Lectures D1 | — | **UNKNOWN** | Inventaire T-A05 si REQUIRED | Faux négatif dynamic | PARTIAL |
| **CAP-D1-06** | Confirmation bornée avant mutation (fingerprint, summary, execute) | `lib/d1/confirmation/*` | Intake confirmation panels | **PARTIAL** — Product HD/Confirm/Authorize/SHE sur **EC**, pas sur create D1 | `executeConfirmation.ts` ; W2 SHE paths | Mutations D1 | Fingerprint match | **REQUIRED** (confirmation humaine proportionnée) | **HARVEST** pattern / **REPLACE** sous OA HD | Assimiler ≠ équivalent | CONFIRMED |
| **CAP-D1-07** | Audit atomique borné (idempotency keys) | `BoundedAtomicAuditStore` | VSR option `auditMode=sqlite` ; tests platform | **PARTIAL** — port utile ; packaging D1 non nécessaire | T-A01 A09 ; `boundedAtomicAudit.ts` | Table D1 si activé | Idempotence | **REQUIRED** (audit ops) | **HARVEST** → port Product | Bloque retrait D1 | CONFIRMED |
| **CAP-D1-08** | Operational readiness / method mode hold | `operationalReadiness.ts`, `methodModeHold*` | Internes D1 / tests | **ABSENT** Product Spine **non retrouvé** | fichiers cités | Process/override test | Hold reasons | **UNKNOWN** | Différer | — | PARTIAL |

**Synthèse D1 :** la *capacité* « projet + intake + confirmation » est **REQUIRED** pour Studio ; l'*implémentation* D1/SQLite est **candidate REPLACE** sous G0 (migration non destructive T-A04 — **sans dual-write**). MethodMode D1 n'est **pas** prouvé REQUIRED dans la cible Product actuelle. **CORR-01 :** `actionCancelIntakeSession` = journalisation observability uniquement — **≠** fermeture durable de session.

---

## 4. Inventaire OPS1 (A04) — Priorité 2

**Fournisseur :** `lib/ops1/**`, `features/ops1/Ops1SessionScreen`, route `/ops1/nouvelle-demande`.
**Persistance :** DB OPS1 distincte.
**Couplage Product (T-A01) :** flag `OPS1_CURSOR_REAL` dans safety/DET — **pas** d'import adapter depuis A12.

| ID | Besoin fonctionnel | Fournisseur historique | Consommateurs | Couverture Product | Preuves | Données / effets | Invariants | Valeur cible | Option tech. | Risque | Statut |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **CAP-OPS1-01** | Session OPS1 open/list/get/close/continuation | `ops1CreateSessionAction`… `ops1CloseSessionAction` ; `sessionLifecycle` | Ops1SessionScreen ; e2e ops1-* | **ABSENT** comme modèle session OPS1 — Product = Project + Nora session SQLite + conversation canonique | `lib/ops1/actions.ts` L107+ | OPS1 DB | refuseClosedMutation | **OPTIONAL** (modèle session) | **RETIRE LATER** modèle / **HARVEST** règles lifecycle si utiles | Perte parcours legacy | CONFIRMED |
| **CAP-OPS1-02** | Conversation outillée dans session | `ops1SendMessageAction` ; conversation/service | UI OPS1 | **PARTIAL** — `orchestrateTurn` / Nora / API studio send | actions L252+ ; PA | Journal OPS1 | Live vs fixture config | **REQUIRED** dialogue | **REPLACE** déjà largement Product | Régression outils | CONFIRMED |
| **CAP-OPS1-03** | Action gate (qualify / candidate / gate decision / refuse) | `actionGate.ts` ; actions gate | UI + e2e I3 | **PARTIAL** — F2/W2 readiness, HD, SHE ≠ même machine d'états | actionGate exports ; W2 prepare | OPS1 tables gate | Gate avant exec | **REQUIRED** (admission) | **HARVEST** concepts / **CONSOLIDATE** sous OA | Fausse équivalence | CONFIRMED |
| **CAP-OPS1-04** | Allowlist évaluation persistée | `allowlistService.evaluateAndPersistAllowlist` | Exec path OPS1 | **PARTIAL** — managed repo root + agent allowlists Product **≠** allowlist OPS1 persistée | allowlistService ; managedRepoRootBaseConfig | OPS1 DB | Supersede evaluations | **REQUIRED** (bornage chemins) | **HARVEST/REBUILD** sous ports Product | Trous de couverture | CONFIRMED |
| **CAP-OPS1-05** | Path policy sécurité (CORR-03 — 3 niveaux) | (1) Module partagé `lib/platform/security/pathPolicy.ts` ; (2) wrapper OPS1 `lib/ops1/tools/pathPolicy.ts` re-export ; (3) enforcement sur chemins d'exécution | OPS1 tools/tests ; `platform/repository/gitLocalReadAdapter` + `githubReadAdapter` ; `execution-run/.../platformGitReadAdapter` | **PARTIAL** Product bout-en-bout — **pas COMPLETE** | (1) Extraction/mutualisation **CONFIRMED** ; (2) Consumers module **CONFIRMED** : OPS1, platform repo adapters, ER git adapter, tests platform/ops1 ; (3) **Aucun** import `pathPolicy` **retrouvé** sous `lib/oa/execution-attempt/**` ni `lib/vertical-slice-runtime/**` ni `features/project-assistant/**` (hors redaction/workspaceRoot) — **parité enforcement Attempt/Product Spine NON établie** | Lectures bornées selon caller | Shared decideReadPath/decideGithubRepo | **REQUIRED** (bornage lecture) | **KEEP** platform ; **RETIRE LATER** wrapper OPS1 ; **ne pas** claim parité Product | Fausse COMPLETE | CONFIRMED extraction ; PARTIAL parité |
| **CAP-OPS1-06** | Lancer Cursor REAL/fixture sous flag OPS1 | `cursorExecutionAdapter.runCursorAdapter` ; `OPS1_CURSOR_REAL` | Exec OPS1 ; cross-check Product flags | **PARTIAL** — `StudioCursorRealLaunchGateway` + `SFIA_STUDIO_CURSOR_REAL` ; agents M4 bornés ; **≠** même adapter | adapter L13–230 ; composeStudioProductRealBoundary ; realLaunchSafety | Process spawn / worktree | Fail-closed sans flag ; no fixture fallback REAL | **REQUIRED** (exec bornée) | **HARVEST** protections / **REBUILD** ports uniques (SC-B T-A01) | Double chemin REAL | CONFIRMED |
| **CAP-OPS1-07** | Contrat d'exécution OPS1 + revalidation | `executionContractService` ; `revalidateBeforeExecution` | I5 flow | **PARTIAL** — OA ExecutionContract + inspection attestation + SHE | OPS1 contract service ; OA EC | OPS1 vs Truth C | Revalidate before run | **REQUIRED** | **REPLACE** sous OA EC (G0) | Perte checks OPS1-only | CONFIRMED |
| **CAP-OPS1-08** | Orchestration attempt + post-check | `executionOrchestrator.runExecutionAttempt` ; `postCheckExecution` | I5/I6 | **PARTIAL** — OA ExecutionAttempt + safety journal SQLite/memory | orchestrator ; attempt infra | Attempts OPS1 | — | **REQUIRED** | **CONSOLIDATE** vers Attempt | Écart STOP/FAIL | CONFIRMED |
| **CAP-OPS1-09** | Rapport d'exécution + réinjection chat | `reportService` ; `reportReinjection.generateReportAndReinject` | I6 ; UI | **PARTIAL** — W3C post-evidence loop + synthesis Product ; **≠** reinjection OPS1 prefix | reportReinjection L63–84 ; `w3cPostEvidenceLoop.ts` | OPS1 reports | Honest report | **REQUIRED** restitution | **HARVEST** exigences / **REPLACE** sous evidence/review | Perte timeline unifiée OPS1 | CONFIRMED |
| **CAP-OPS1-10** | SFIA context / instantiate Cursor prompt | `ops1EnsureSfiaContextAction` ; `ops1InstantiateCursorPromptAction` | UI OPS1 | **UNKNOWN/PARTIAL** — doctrine/prompt Product existent sous d'autres modules ; équivalence non prouvée | actions L302–336 | OPS1 sfia/* | — | **UNKNOWN** | T-A02 complément / T-A05 | — | PARTIAL |
| **CAP-OPS1-11** | Outils lecture Git/GitHub bornés | `tools/gitLocalReadAdapter`, `githubReadAdapter`, `toolRouter` | Conversation OPS1 | **PARTIAL** — `lib/oa/git-ports` et outils Nora ; matrice exacte non exhaustive ici | tools/* ; git-ports imports | Lectures | Path policy | **REQUIRED** lecture | **HARVEST/CONSOLIDATE** | Permissions | PARTIAL |

**Avertissement d'équivalence :** allowlist OPS1, gate I3, adapter Cursor et EC OA peuvent **se ressembler** sans offrir les **mêmes** garanties (autorité HD, Truth C, SHE, confinement env). Qualification **PARTIAL** obligatoire jusqu'à matrice T-A05 / tests croisés.

---

## 5. Inventaire P0 (A02) — Priorité 3

**Fournisseur :** `app/page.tsx` → `/synthese` ; `features/{synthese,cycle-actif,decision}` + `Vs*Screen` + fixtures `vertical-slice`.

| ID | Besoin fonctionnel | Fournisseur | Consommateurs | Couverture Product | Preuves | Données / effets | Invariants | Valeur cible | Option tech. | Risque | Statut |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **CAP-P0-01** | Vue synthèse portefeuille/projet | `SyntheseScreen` → `VsSyntheseScreen` + fixture | `/synthese` ; `not-found`→synthese | **ABSENT** comme POC — Product Overview/Lifecycle/Trajectory **PARTIAL** conceptuellement | `app/synthese/page.tsx` pills « fixture · slice-only » | Fixture mémoire démo | Claims anti-MVP explicites | **OBSOLETE CANDIDATE** (POC) | **RETIRE LATER** après redirect | Bookmarks | CONFIRMED |
| **CAP-P0-02** | Vue cycle actif démo | `CycleActifScreen` / `VsCycleActifScreen` | `/cycle-actif` | **PARTIAL** concept — LifecycleSurface Product | page + Vs fixture | Fixture | — | **OBSOLETE CANDIDATE** | **RETIRE LATER** | — | CONFIRMED |
| **CAP-P0-03** | Vue décision / GO visuel fixture | `DecisionScreen` / `VsDecisionScreen` | `/decision` | **PARTIAL** — GovernedConfirmation / SHE / Trajectory **≠** GO visuel fixture | VsDecisionScreen fixture HEAD | Fixture | « GO visuel ≠ GO dev » | **OBSOLETE CANDIDATE** | **RETIRE LATER** ; **HARVEST** disclaimer | Confusion autorité | CONFIRMED |
| **CAP-P0-04** | Entrée site `/` vers expérience Studio | `app/page.tsx` redirect `/synthese` | Navigateur | **ABSENT** vers `/studio` aujourd'hui | page.tsx L1–5 | — | — | **REQUIRED** (accès fluide) | **REPLACE** redirect → `/studio` (GO Delivery) | Casse liens synthese | CONFIRMED |
| **CAP-P0-05** | Harness démo VsDemoRoot / fixtures | `components/vertical-slice/*`, `fixtures/vertical-slice` | P0 screens | **ABSENT** Product | imports Vs* | — | slice-only | **OPTIONAL** tests/demo | **KEEP** si utile harness / sinon retire avec P0 | — | PARTIAL |

---

## 6. Inventaire `oa/execution-run` (A11) — Priorité 4

**Fournisseur :** `lib/oa/execution-run/**` (memory/fixture-first) + `server/` compositions.
**Consommateurs Product Spine (T-A01) :** **aucun branchement** `vertical-slice-runtime/service.ts` **retrouvé**.
**Consommateurs hors spine :** tests dédiés ; FinOps T7 shadow (`composeFinOpsT7ShadowExecutionDeps.ts`, `scripts/finops-t7-shadow-rollout.ts`).

| ID | Besoin fonctionnel | Fournisseur | Consommateurs | Couverture Product Attempt | Preuves | Données / effets | Invariants | Valeur cible | Option tech. | Risque | Statut |
| --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- | --- |
| **CAP-ER-01** | Machine d'états ExecutionRun + transitions | `domain/transitions.ts` | Tests ER ; FinOps shadow | **ABSENT** comme type Run dans Attempt — Attempt a son propre cycle de vie | transitions exports ; attempt domain | Memory | Terminal states | **OPTIONAL** Product ; **REQUIRED?** FinOps | **FREEZE** / **KEEP** shadow | Promotion silencieuse en spine | CONFIRMED |
| **CAP-ER-02** | Policy read-only / sandbox path guards | `domain/policy.ts`, `sandboxContract.ts` | Tests ER | **PARTIAL** — confinement/path Product existent ailleurs ; **pas** preuve d'équivalence | sandboxContract exports | — | Protected paths | **UNKNOWN** harvest | **HARVEST** sélectif possible | Duplication rules | PARTIAL |
| **CAP-ER-03** | Provider boundary validation (untrusted) | `domain/providerBoundary.ts` | Tests ER | **PARTIAL** — gates Product distincts | providerBoundary | — | Validate request/result | **OPTIONAL** | **HARVEST** ou garder en ER | — | PARTIAL |
| **CAP-ER-04** | Evidence honesty / completeness / disclosure | `domain/evidence.ts` | Tests ER | **PARTIAL** — OA evidence-review Product | evidence.ts ; evidence-review | — | Source honest | **REQUIRED** (concept) | **CONSOLIDATE** concepts ≠ merger BC | Double modèle preuve | PARTIAL |
| **CAP-ER-05** | Pilotage FinOps T7 shadow (CORR-02 — couches) | `composeExecutionRunD2D3T7ShadowPilot` ; `composeFinOpsT7ShadowExecutionDeps` ; `operateFinOpsT7ShadowRollout` ; policy source versionnée | Script `finops-t7-shadow-rollout` ; tests FinOps/ER | **ABSENT** Product Spine (inchangé) ; maturité shadow **PARTIAL** (pas COMPLETE opérationnel) | Composition **CONFIRMED** (pilot composer L84–118 ; anti-claims « SHADOW NOT ACTIVATED ») ; policy Git **EMPTY/INERT** (`versionedFinOpsT7ShadowPolicySource` L38–40 `{}`) ; activation SHADOW = operator `apply=true` + GO distinct (`operateFinOpsT7ShadowRollout` header) — **non démontrée** comme active par défaut ; REAL/prod **NOT PROVEN** | Postgres rollout store possible si operator ; memory ER | signal_only en SHADOW path | **OPTIONAL** Product ; utile FinOps si activé sous GO | **KEEP** composition hors spine / **FREEZE** ; activer ≠ composer | Assimiler compose→SHADOW ON | CONFIRMED composition ; activation ABSENT/not default |

**Règle :** ne **pas** ériger `execution-run` en moteur Product alternatif sans décision. Différenciation Attempt (autorité Product / Truth C) vs Run (état technique memory/shadow) = **CONFIRMED** au niveau composition. **CORR-02 :** compositeur T7 shadow **≠** SHADOW activé ; policy versionnée **vide** ; activation sous operator/GO distinct.

---

## 7. Matrice de couverture historique ↔ Product (synthèse)

| Famille | Capacités REQUIRED (cible) | COMPLETE | PARTIAL | ABSENT / UNKNOWN | Lecture OR-13 |
| --- | --- | --- | --- | --- | --- |
| D1 | Création/lecture projet, intake (analyse), confirmation, audit | — | D1-01,03,04(a/b),06,07 | D1-02 Mode? ; D1-04(d) session close durable ; D1-05 ; D1-08 | Préserver capacités ; **REPLACE** îlot D1 ; cancel ≠ close |
| OPS1 | Dialogue, admission, bornage, Cursor, EC/Attempt, rapport | *(aucune COMPLETE bout-en-bout Product)* — extraction pathPolicy **CONFIRMED** mais ≠ COMPLETE couverture | OPS1-02..09,11 ; **OPS1-05** (parité Product) | OPS1-01 session model ; OPS1-10 | Harvest protections ; **ne pas KEEP** adapter par inertie ; pathPolicy partagé ≠ parité Attempt |
| P0 | Accès fluide | — | concepts UX | P0-01..03 POC ; P0-04 redirect | Redirect `/studio` ; RETIRE POC |
| execution-run | Shadow FinOps (si GO) ; éventuellement rules | — | ER-02..04 ; **ER-05** composition/tests (activation non default) | ER-01 dans spine ; ER-05 activation SHADOW default | FREEZE hors spine ; compose ≠ activate |

```mermaid
flowchart TB
  subgraph Hist["Historique"]
    D1[D1 capacities]
    OPS[OPS1 capacities]
    P0[P0 POC]
    ER[execution-run]
  end
  subgraph Prod["Product Runtime tip"]
    STU["/studio + OA + PA + Nora"]
    ATT[ExecutionAttempt + EC + Evidence]
    FIN[FinOps T7 shadow]
  end
  D1 -.->|PARTIAL/REPLACE candidate| STU
  OPS -.->|PARTIAL/HARVEST candidate| ATT
  P0 -.->|RETIRE LATER + redirect| STU
  ER --> FIN
```

*Diagramme **observé/proposé mixte** : arête ER→FinOps **observée** ; autres = **candidates** de couverture.*

---

## 8. Capacités exclusives et divergences comportementales

### 8.1 Exclusives ou quasi-exclusives (périmètre audité)

| Capacité | Pourquoi « exclusive » | Impact |
| --- | --- | --- |
| D1 MethodMode durable + hold/readiness | Product n'expose pas le même agrégat | Ne pas importer silencieusement dans OA |
| D1 intake session lifecycle durable | `actionCancelIntakeSession` log-only ; pas de table session | Ne pas inventer close persistée |
| D1 context matching intake | Non retrouvé Product | Qualifier besoin réel (UNKNOWN) |
| OPS1 session BC + DB | Autre vérité session | Ne pas merger DB |
| OPS1 report reinjection timeline | Préfixe/events OPS1 | Harvest exigences restitution |
| P0 fixture GO visuel | Hors autorité Product | Éviter confusion Pilot |
| execution-run state authority memory | Hors `service.ts` Product | FREEZE |

### 8.2 Divergences même quand les noms se ressemblent

| Sujet | Historique | Product | Équivalence? |
| --- | --- | --- | --- |
| Confirmation | Fingerprint mutation D1 | HD / SHE / Confirm EC | **Non prouvée** |
| Cursor REAL | `OPS1_CURSOR_REAL` + adapter OPS1 | `SFIA_STUDIO_CURSOR_REAL` + gateway Attempt | **Partielle** ; flags couplés |
| Allowlist | Persistée OPS1 par action | Managed repo + agent descriptors | **Non équivalente a priori** |
| Path policy | Wrapper OPS1 → platform module | Platform repo adapters + ER git ; **pas** Attempt/VSR | **Extraction oui ; parité Product Spine non prouvée** |
| Projet create | D1 mono-opérateur + methodMode | OA create + onboarding cognitif | **Partielle** |
| Rapport | generate+reinject OPS1 | Evidence/review + W3C synthesis | **Partielle** |
| FinOps SHADOW | Compositeurs + operator + policy vide | N/A spine | **Composition ≠ activation** |

Fake / DET / REAL : OPS1 et Product ont des chemins Fake/DET ; **REAL Product NOT PROVEN** (global). Aucune nouvelle preuve REAL dans T-A02.

---

## 9. Capacités à préserver vs implémentations candidates

| Préserver (capacité) | Implémentation historique | Orientation candidate |
| --- | --- | --- |
| Créer/lire projet + continuité Truth C | D1 commands/DB | REPLACE → OA/Product SQLite (G0) |
| Intake intention→projet | D1 intake | CONSOLIDATE → onboarding `/studio` |
| Confirmation humaine proportionnée | D1 confirmation | HARVEST pattern → HD/SHE existants |
| Audit borné idempotent | D1 BoundedAtomicAudit | HARVEST port hors `lib/d1` |
| Dialogue + outils lecture | OPS1 conversation/tools | Déjà largement Product ; harvest gaps |
| Bornage chemins / fail-closed REAL | OPS1 allowlist/adapter | HARVEST/REBUILD sous Attempt |
| Restitution post-exécution | OPS1 report | HARVEST → evidence/synthesis |
| Accès URL racine | P0 redirect synthese | REPLACE → `/studio` |
| FinOps shadow composition (si GO active) | execution-run + FinOps composers | KEEP composition hors spine ; activation séparée |

**Ne pas** wrapper D1/OPS1 en façade permanente par défaut (OR-13 / TO-BE).

---

## 10. Scénarios architecturaux (qualitatifs)

| # | Scénario | Bénéfices | Risques | Ancrage |
| --- | --- | --- | --- | --- |
| 1 | Conservation intacte D1/OPS1/P0/ER | Zéro migration | Dette UX multi-générations ; confusion autorité | Contre TO-BE cockpit unique |
| 2 | Extraction sélective (pathPolicy **module** mutualisé ; audit port ; protections Cursor) — **≠** parité enforcement Product déjà acquise | Réduit couplage packaging | Harvest/enforcement incomplet sur Attempt | OR-13 |
| 3 | Consolidation admission/report sous OA | Une autorité | Régression comportementale | G0-A |
| 4 | Reconstruction ciblée (intake Product, frontière Cursor unique) | Cohérence | Coût tests ; flags | SC-A/B T-A01 |
| 5 | Reconstruction globale d'un mécanisme (ex. tout OPS1→new runtime) | Tabula rasa | Hors proportion sans preuve ; risque safety | Seulement si T-A05 montre échec harvest |

**Dual-write D1/OA :** non admissible (G0 / T-A01 CORR-01). Transition = inventaire → lecture histo → migration contrôlée → vérif IDs → bascule.

---

## 11. Limites de preuve et dettes ouvertes

| ID | Limite | Suite |
| --- | --- | --- |
| L1 | Pas d'exécution comportementale / REAL | PRR 09 ; pas de faux COMPLETE |
| L2 | Dynamic imports / configs conditionnelles non exhaustifs | Complément ciblé |
| L3 | Data volume D1/OPS1 utilisateur UNKNOWN | **T-A04** |
| L4 | Séquences temporelles Nora→OA→Cursor | **T-A03** |
| L5 | Matrice OPS1↔Attempt capacité-à-capacité chiffrée/tests croisés | **T-A05** |
| L6 | CAP-D1-05 / CAP-OPS1-10 / MethodMode valeur cible | Arbitrage Pilote |
| L7 | CKC Architecture non autorité | Fallback canonique déclaré |

---

## 12. Recommandations pour T-A03, T-A04, T-A05

1. **T-A03** — Séquences réelles (SHE vs historical vs OPS1 legacy) pour CAP-OPS1-03/06/07/08/09 et PA ; STOP/FAIL/restart.
2. **T-A04** — Matrice stockage D1/OPS1/Truth C/mémoire B/process-local ; plan migration **sans dual-write** pour CAP-D1-01/03/07.
3. **T-A05** — Impact pack formel KEEP/HARVEST/REPLACE/REBUILD par capacité REQUIRED ; tests de non-régression ; décision Pilote MethodMode & context match.
4. Extraire **port audit** (CAP-D1-07) avant tout RETIRE D1.
5. **CAP-OPS1-05 :** retirer le wrapper OPS1 = dette packaging ; **séparément** instruire si Attempt/Product Spine doit consommer `platform/security/pathPolicy` (aujourd'hui **non retrouvé**) — T-A05.
6. Maintenir **FREEZE** execution-run hors spine ; **CAP-ER-05** : ne pas claim SHADOW ON sans GO/operator apply + preuves.
7. P0 : préparer redirect `/`→`/studio` sous GO Delivery distinct ; RETIRE screens après inventaire liens.
8. **CAP-D1-04 :** ne pas migrer une « session intake close » qui n'existe pas comme agrégat durable ; migrer analyse/onboarding.

---

## 13. Conditions de sortie M4-A — encore non satisfaites

| Condition | Après T-A02 |
| --- | --- |
| Consumers (T-A01) | Accepté avec réserves (handoff) — **hors re-litige** |
| Inventaire capacités historiques + couverture | **PARTIELLEMENT SATISFAITE** (ce document LOCAL CANDIDATE) |
| Séquences autorité (T-A03) | **NON** |
| Migration/storage (T-A04) | **NON** |
| Impact pack + reco formelle (T-A05) | **NON** |
| Critical Review alignement (T-A06) | **NON** |
| M4-A CLOSED | **NON** |

---

## 14. Traçabilité / R24

- T-A01 source : handoff `42de13a9…` (immuable) — worktree T-A01 non altéré.
- Handoff T-A02 initial : `e66d5ebc…` / `544ddbfa…` (historique immuable avant Correction Pass 01).
- Un seul livrable projet corrigé : le présent `06-m4a-historical-capabilities-inventory.md` (29 CAP conservées).
- **R24 : NO PRODUCT SEMANTIC IMPACT.**

---

## 15. Matrice de fermeture — Critical Review Correction Pass 01

| ID | Preuve | Verdict |
| --- | --- | --- |
| **CORR-01** | `actionCancelIntakeSession` = `logIntakeEvent` + `{ok:true}` ; pas de table session intake ; distinction (a)(b)(c)(d) dans CAP-D1-04 | **PASS** |
| **CORR-02** | Pilot composer anti-claim SHADOW NOT ACTIVATED ; policy `{}` ; operator apply requis ; CAP-ER-05 PARTIAL / non COMPLETE opérationnel ; hors spine conservé | **PASS** |
| **CORR-03** | Re-export CONFIRMED ; consumers OPS1/platform/ER CONFIRMED ; Attempt/VSR/PA sans import pathPolicy ; couverture Product bout-en-bout **PARTIAL** | **PASS** |

**T-A02** demeure **LOCAL CANDIDATE** jusqu'à Critical Re-Review. **M4-A** demeure **NON CLOSED**.

---

END — `AKG-M4-A / T-A02` — LOCAL CANDIDATE — CORRECTION PASS 01

---

## 10. End

END — T-A02 CORRECTION PASS 01
