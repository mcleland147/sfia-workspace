# SFIA Review Pack — FULL — T-A6 Delivery Framing

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 02:09:22 CEST (+0200) |
| **Cycle** | Delivery — cadrage |
| **Profil** | Critical |
| **Gate** | `GO FRAME T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base** | origin/main @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `b80fa9f4f85e860a7a30005d1acbf9821f4e5e30` |
| **HEAD final** | `c92b49fbc425e5f8d030dd91f6e55c9837d62f25` |
| **Commits locaux** | `79c1a6e` frame T-A6 delivery · `c92b49f` record HEAD |
| **Push projet / PR / merge** | **NON** |
| **Modeled modifié** | **NON** |
| **Runtime modifié** | **NON** |
| **SQL / T-A7 / adapter / exécution** | **ABSENT / NON / ABSENT / ABSENTE** |
| **Décisions D-T-A6-DEL validées** | **aucune** (recommandations seulement) |
| **Niveau** | FULL |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 DELIVERY FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE DELIVERY` |

---

## 1. Truth Check

PASS — branche/HEAD/main/merge-base exacts ; clean hors `.tmp-sfia-review/` ; handoff source blob `2b01908b…` MODELED VALIDATED AFTER CORRECTION.

### Status

```
## framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity
?? .tmp-sfia-review/
```

### Worktrees (extrait)

```
worktree /Users/morris/Projects/sfia-workspace
HEAD bb3c9e29936a925174beb0c1758e8fe887e58bc3
branch refs/heads/delivery/sfia-studio-control-tower-fast-track

worktree /Users/morris/Projects/sfia-codex-pilot
HEAD ec7f397a87381a57b8b0c0efbff8c3e98e9dea03
branch refs/heads/method/codex-operating-model-pilot

worktree /Users/morris/Projects/sfia-task-tracker
HEAD b763a318fb84e23e482ed23a0bd561c1d9e719e6
branch refs/heads/cadrage/task-tracker-light

worktree /Users/morris/Projects/sfia-workspace-cycle-knowledge-contracts
HEAD cae841519ed1d2dd825e6ecb998337cd47b4a1e1
branch refs/heads/method/sfia-cycle-knowledge-contracts

worktree /Users/morris/Projects/sfia-workspace-d1-conversational-convergence
HEAD 7dc6f9fc7e16f13de08a1003b492b0b6e243f05e
branch refs/heads/ux/sfia-studio-d1-conversational-convergence

worktree /Users/morris/Projects/sfia-workspace-d1-platform-integration
HEAD c2d39a7f6881c8d512e48c4b6e9e559ebdf938a9
branch refs/heads/delivery/sfia-studio-d1-shared-platform-integration

worktree /Users/morris/Projects/sfia-workspace-docs-recover
HEAD 1a2fa31fab6343bdd0eab7211febb3bcc5326c33
branch refs/heads/docs/sfia-studio-recover-unmerged-project-docs

worktree /Users/morris/Projects/sfia-workspace-framing-next-increment
HEAD 88fa4658da07156614de270d8172f147535ddbf9
branch refs/heads/framing/sfia-studio-next-product-increment

worktree /Users/morris/Projects/sfia-workspace-main-ckc-postmerge
HEAD b25c20e6eb131cba7dc811697b763fd033f3f652
branch refs/heads/main

worktree /Users/morris/Projects/sfia-workspace-review-handoff-publisher
HEAD 14d58fe95a8f29c3dc1f72c794a64fedbc795bbe
branch refs/heads/tooling/review-handoff-canonical-publisher
```

## 2. Handoff source

- blob `2b01908b04e7762147ad09b5a2598b7ec5ec3678`
- verdict VALIDATED AFTER CORRECTION — DELIVERY FRAMING REQUIRES MORRIS GO

## 3. CKC

`pilots/03-architecture-technique.md` (candidate, executionAuthority=false) — pas de pilote delivery ; fallback conception fonctionnelle.

## 4. Sources

template ; delivery 01–05 ; modeled schemas/docs ; runtime T-A3–T-A5 lecture ; framing T-A5 `05-runtime-framing.md`

## 5. Fichiers

### Créés
- `06-delivery-framing.md`

### Modifiés
- README delivery T-A6

### Supprimés
- aucun

## 6. Synthèse cadrage

- Architecture : `app/lib/oa/evidence-review/**` hex ; memory + fake
- Agrégats : Evidence · ReviewBundle · ClaimEvaluation · MaturityAssessment
- Services : use-cases spécialisés (pas god-orchestrator)
- Ports : 4 repos · PayloadPort fake · AttemptReader RO · AuthorityResolver T-A3 · AuditSink
- Frontières T-A5/T-A6/T-A7 explicites
- Découpage D1→D5 recommandé
- D-T-A6-DEL-01…10 recommandations ; **0 validées**
- R-M01 OPEN (VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS)
- U-M02 OPEN ; fake-only payloads

## 7. Validation documentaire

- aucun code · modeled/runtime inchangés · pas de vendor choisi · fake-only · Critical/autorité fermés · pas auto-validation/promotion · réserves OPEN · T-A7 non ouvert · pas de placeholder · `git diff --check` PASS

## 8. Gate suivant

`GO ARBITRATE T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

## 9. Verdict exact

`SFIA STUDIO V3-NATIVE OPTION A T-A6 DELIVERY FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE DELIVERY`

---

# ANNEXE A — 06-delivery-framing.md (complet)

# 06 — T-A6 Delivery Framing

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Cycle** | Delivery — cadrage (Critical) |
| **Gate** | `GO FRAME T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `b80fa9f4f85e860a7a30005d1acbf9821f4e5e30` |
| **HEAD final** | `79c1a6e177cdd184da8bdca256dc1cce7ad65e56` |
| **Horodatage** | 2026-07-26 02:06:59 CEST (+0200) |
| **Modeled** | Evidence/RB/Maturity `0.2.0-oa` · ClaimEvaluation `0.1.0-oa` — **VALIDATED AFTER CORRECTION** |
| **Runtime / SQL / API / UI** | **NONE** créé ou modifié |
| **Push / PR / merge projet** | **NONE** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 DELIVERY FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE DELIVERY` |
| **Gate suivant** | `GO ARBITRATE T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Question structurante

> Comment préparer un delivery runtime mémoire T-A6 capable d’ingérer explicitement une sortie T-A5, de gérer Evidence / ReviewBundle / ClaimEvaluation / MaturityAssessment, et de produire des sorties de revue sans faux PASS, sans auto-confirmation Critical, sans auto-promotion de maturité, sans fermeture implicite de réserve, et sans lancer T-A7 ni exécution réelle ?

**Réponse candidate :** module `app/lib/oa/evidence-review/**` miroir hex T-A3–T-A5 ; repositories mémoire + OCC ; `EvidencePayloadPort` fake/metadata-only ; `ExecutionAttemptReader` lecture seule ; use-cases spécialisés ; fail-closed autorité via `AuthorityResolver` T-A3 ; aucune DB/vendor/API/UI/worker.

---

## 2. Sources

| Source | Usage |
|--------|-------|
| Handoff validation blob `2b01908b…` | MODELED VALIDATED AFTER CORRECTION |
| Delivery T-A6 01–05 | décisions D-T-A6-01…12 + materialize/validate |
| Modeled OA 01–12 + schemas Evidence/RB/Claim/Maturity | SoT contrats |
| Runtime T-A3 `app/lib/oa/decision/**` | AuthorityResolver, Confirmation, N3≠Morris |
| Runtime T-A4 `app/lib/oa/execution-contract/**` | OCC, AuditSink, barrel `index.ts` |
| Runtime T-A5 `app/lib/oa/execution-attempt/**` | Attempt reader, resultRef, fake adapters |
| Framing T-A5 `05-runtime-framing.md` | conventions delivery |
| CKC | `pilots/03-architecture-technique.md` (pas de pilote delivery) |

### CKC

| Item | Valeur |
|------|--------|
| Cycle qualifié | delivery — cadrage |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| `executionAuthority` | **false** |
| Fallback | `02-conception-fonctionnelle.md` |
| Limites | ne valide pas l’architecture ; n’autorise pas runtime/implémentation |

---

## 3. Contexte & modeled validé

| Schema | Version | Statut |
|--------|---------|--------|
| Evidence | `0.2.0-oa` | VALIDATED |
| ReviewBundle | `0.2.0-oa` | VALIDATED |
| ClaimEvaluation | `0.1.0-oa` | VALIDATED (R-M01 closure requires Morris) |
| MaturityAssessment | `0.2.0-oa` | VALIDATED |

Décisions non renégociables : D-T-A6-01…12 (voir `03-decisions.md`).

R-M01 : **OPEN** — `VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION`. Ne bloque pas la préparation du framing delivery ; fermeture interdite sans gate Morris distinct.

---

## 4. Objectif delivery v1 (fake-only / mémoire)

Incrément minimal permettant, uniquement en mémoire et adapters fake :

1. Ingestion explicite d’une sortie T-A5 comme Evidence candidate
2. Enregistrement Evidence manuelle ou externe
3. Vérification intégrité / disponibilité Evidence
4. Création et complétion d’un ReviewBundle
5. Freeze ReviewBundle (`ready_for_review`)
6. Start review (`under_review`)
7. Évaluation claim non-Critical déterministe
8. Proposition Critical **sans** auto-confirm
9. Confirmation claim selon autorité
10. NOT_PROVEN / FAIL / WAIVED distincts de PASS
11. Complete / reject review
12. Propose maturity
13. Confirm maturity
14. Bloquer maturity par réserve HARD
15. Sorties T-A6 (refs) **sans** lancer T-A7

### Hors périmètre v1

stockage physique · DB · object storage · vendor cloud · API HTTP · UI · queue · scheduler · worker · observabilité externe · exécution réelle · cutover legacy · DebtItem schema complet · LPS write (B5) · fermeture R-M01/U-M02

---

## 5. Principes non renégociables (rappel)

- Evidence = entité T-A6 ; Attempt source ≠ owner
- metadata + digest internes ; stockage logique hybride ; **U-M02 OPEN** ; aucun vendor
- ReviewBundle autonome versionné ; freeze avant verdict ; `ready_for_review` ≡ frozen v1
- Claim ≠ ClaimEvaluation sémantiquement ; unifié physiquement v1
- PASS / FAIL / NOT_PROVEN / WAIVED distincts
- Critical → humain autorisé ; structural → Morris ; N3 ≠ Morris ; self-review Critical interdit
- Maturity propose→confirm ; `autoPromoted=false` ; PASS ≠ fermeture réserve
- Maturity ≠ executionAuthority ; MODELED ≠ IMPLEMENTED ≠ ADOPTED
- Pas d’auto next cycle ; T-A6 ne lance pas T-A7
- L0–L3 défaut ; L4 gated ; L5 out

---

## 6. Architecture candidate

```
[Actor / System] → T-A6 commands (RegisterEvidence … ConfirmMaturity …)
                         │
                         ▼
              evidence-review application use-cases
                         │
     ┌───────────┬───────┼────────┬────────────┬──────────────┐
     ▼           ▼       ▼        ▼            ▼              ▼
 EvidenceRepo  RBRepo  ClaimRepo MaturityRepo PayloadPort  AttemptReader
 (memory)      (memory)(memory)  (memory)     (fake/meta)  (T-A5 RO)
     │
     ▼
 AuthorityResolver (T-A3) · Clock · IdGenerator · AuditSink (memory)
```

**Pas** de bus d’événements domaine (convention OA = AuditSink journal only).

### Modules candidats (paths — **ne pas créer** ce cycle)

Convention T-A3–T-A5 : barrel `index.ts`.

```
app/lib/oa/evidence-review/
  index.ts
  domain/
    evidence/{types,errors,invariants}.ts
    review-bundle/{types,errors,invariants}.ts
    claim-evaluation/{types,errors,invariants}.ts
    maturity/{types,errors,invariants}.ts
    shared/{authority,criticality,bindings}.ts
  application/
    registerEvidence.ts
    ingestExecutionAttemptEvidence.ts
    verifyEvidenceIntegrity.ts
    markEvidenceUnavailable.ts
    createReviewBundle.ts
    attachEvidenceToReviewBundle.ts
    freezeReviewBundle.ts
    startReview.ts
    evaluateClaim.ts
    confirmClaimEvaluation.ts
    rejectClaimEvaluation.ts
    recordWaiver.ts
    recordFinding.ts
    completeReview.ts
    reopenReview.ts
    proposeMaturity.ts
    confirmMaturity.ts
    downgradeMaturity.ts
    registerDebt.ts
    recommendNextGate.ts
  ports/
    evidenceRepository.ts
    reviewBundleRepository.ts
    claimEvaluationRepository.ts
    maturityAssessmentRepository.ts
    evidencePayloadPort.ts
    executionAttemptReader.ts
    evidenceReviewAudit.ts
  infrastructure/
    memoryEvidenceStore.ts
    memoryEvidenceRepository.ts
    memoryReviewBundleRepository.ts
    memoryClaimEvaluationRepository.ts
    memoryMaturityAssessmentRepository.ts
    fakeEvidencePayloadAdapter.ts
    fakeExecutionAttemptReader.ts
    observability.ts
```

| Élément | Décision candidate |
|---------|-------------------|
| Modules nouveaux | `evidence-review/**` uniquement |
| Réutilisés | `decision` AuthorityResolver ; Clock/Id doctrine ; lecture Attempt via port |
| Interdits | modifier T-A3/T-A4/T-A5 ownership ; method/prompts ; modeled sans GO |
| API publique | `createInMemoryEvidenceReviewServices` / `createTestEvidenceReviewServices` |
| Dépendances | T-A6 → T-A5 reader (sens unique) ; **jamais** T-A5 → T-A6 |

---

## 7. Agrégats & transactions

| Agrégat / entité | Ownership | OCC | Notes |
|------------------|-----------|-----|-------|
| Evidence | entité indépendante | version | Attempt non-owner |
| ReviewBundle | agrégat principal revue | version | freeze snapshot refs |
| ClaimEvaluation | agrégat autonome v1 | version | lie `rbId`+`rbVersion` |
| MaturityAssessment | agrégat autonome | version | propose→confirm ; supersession |
| Finding / Waiver | VOs / entités sous RB ou Claim | — | pas d’owner Attempt |
| Debt/Reserve refs | refs string | — | DebtItem schema hors v1 |

**Recommandation :** coordination via application services + IDs + OCC ; **aucune** transaction distribuée implicite.

| Invariant | Localisation |
|-----------|--------------|
| Evidence bindings ≥1 ; digest si verifiable | domaine Evidence |
| freeze / accepted⇒complete | domaine ReviewBundle |
| PASS required+provided non vides ; Critical confirm | domaine Claim + application AuthorityResolver |
| Evidence status available/verified pour PASS | **application** (lecture EvidenceRepo) — cross-aggregate |
| Maturity blocked by HARD reserve | domaine Maturity + application |
| Attempt immutabilité | T-A5 ; T-A6 lecture seule |

Échec partiel : écriture atomique **par agrégat** ; si étape 2 échoue après étape 1, pas de compensation magique — audit + erreur ; retry idempotent.

---

## 8. Application services

| Service (regroupement logique) | Use-cases | Fusion ? |
|--------------------------------|-----------|----------|
| EvidenceApplicationService | Register, IngestAttempt, Verify, MarkUnavailable | Oui ⊂ fichiers use-case |
| ReviewApplicationService | Create, Attach, Freeze, Start, Finding, Complete, Reopen | Split use-cases **préféré** |
| ClaimEvaluationApplicationService | Evaluate, Confirm, Reject, Waiver | Split |
| MaturityApplicationService | Propose, Confirm, Downgrade | Split |
| Orchestration | RecommendNextGate seulement | **Pas** de god-orchestrator |

**Anti-surarchitecture :** pas d’EventPublisher ; pas de double AuthorityPort ; pas de LaunchT-A7.

---

## 9. Ports

| Port | Responsabilité |
|------|----------------|
| `EvidenceRepository` | getById, create, update(expectedVersion), exists, listByProject/Bundle (minimal) |
| `ReviewBundleRepository` | idem + listByProject |
| `ClaimEvaluationRepository` | idem + listByBundle(version) |
| `MaturityAssessmentRepository` | idem + listByProject/subject |
| `EvidencePayloadPort` | getDigest/availability/metadata-only ; **jamais** exécuter payload |
| `ExecutionAttemptReader` | getAttempt(id) RO — status, resultRef, contractId, timestamps |
| `Clock` / `IdGenerator` | injectés (doctrine) |
| `AuthorityResolver` | réutiliser T-A3 (N3 ≠ Morris ; canActAsMorris) |
| `AuditSink` | append journal mémoire |

Erreurs ports : `NOT_FOUND` · `VERSION_CONFLICT` / `CONCURRENT_MODIFICATION` · `IDEMPOTENCY_CONFLICT`.

---

## 10. Adapters v1 (fake-only)

| Adapter | Rôle |
|---------|------|
| Memory*Repository | OCC + idempotency index |
| `FakeEvidencePayloadAdapter` | metadata-only / digest fixture ; unavailable simulation |
| `FakeExecutionAttemptReader` | fixtures Attempt succeeded/failed/running |
| Memory AuditSink | journal |
| Clock/Id déterministes | tests |

**Interdit :** Postgres, S3, Supabase, disque productif, réseau, shell, queue, worker, scheduler, adapter exécution réel.

---

## 11. Frontière T-A5 / T-A6

| Règle | Détail |
|-------|--------|
| T-A5 expose | `resultRef` / status technique / Attempt id |
| T-A6 ingère | commande explicite `IngestExecutionAttemptEvidence` |
| Interdit | `succeeded` → Evidence `verified` auto ; Attempt → PASS auto |
| Attempt | immutable depuis T-A6 |
| Binding | `bindings.executionAttemptId` + provenance |
| Digest/availability | visibles ; absents ⇒ pas PASS |
| Adapter T-A5 | ne confirme aucun claim |
| Retry T-A5 | ne remplace pas Evidence déjà gelée dans un bundle (nouvelle Evidence + nouveau freeze) |
| Dépendance | T-A6 → T-A5 reader ; **interdit** T-A5 → T-A6 |

### Frontière T-A6 / T-A7

T-A6 : Evidence, Review, Claims, Maturity, findings, reco gate.
T-A7 : cutover legacy, MethodMode, OPS1, activation globale.
**Aucune** commande `LaunchT-A7`. Erreur `T_A7_AUTO_LAUNCH_FORBIDDEN`.

---

## 12. Persistence abstraite

### Contrats repository (sans technologie)

```
getById(id) → entity | null
create(entity) → void          # version = 1
update(entity, expectedVersion) → void | VERSION_CONFLICT
exists(id) → boolean
findByIdempotencyKey(key) → entity | null
list*(filtres stricts) → entity[]
```

### Séparation Evidence

| Couche | Contenu |
|--------|---------|
| metadata | type, source, classification, status, bindings, retention, legalHold |
| payload | via `EvidencePayloadPort` ref uniquement |
| digest | sha256 canonique quand verifiable |
| provenance | required |
| lifecycle | status/availability/freshness |

**U-M02 OPEN** — aucun choix Postgres/S3/disque/fournisseur.

---

## 13. Cas d’usage (minimum)

Pour chaque cas : commande · acteur · autorité · préconditions · agrégat · ports · événements · erreurs · idempotence · concurrence · résultat · tests.

| Commande | Acteur / autorité | Préconditions | Agrégat | L | Erreurs typiques |
|----------|-------------------|---------------|---------|---|------------------|
| `RegisterEvidence` | système/humain | ≥1 binding ; no secret | Evidence | L1–L2 | EVIDENCE_* |
| `IngestExecutionAttemptEvidence` | système borné | Attempt exists ; binding xat: | Evidence | L2 | EVIDENCE_* ; ATTEMPT_NOT_FOUND |
| `VerifyEvidenceIntegrity` | système L1 | digest si verifiable | Evidence | L1 | EVIDENCE_DIGEST_* ; UNAVAILABLE |
| `MarkEvidenceUnavailable` | système/humain | — | Evidence | L1 | — |
| `CreateReviewBundle` | N≥ | projectId | RB | L2 | STATE_CONFLICT |
| `AttachEvidenceToReviewBundle` | N≥ | draft only | RB | L2 | REVIEW_BUNDLE_NOT_FROZEN (si frozen) |
| `FreezeReviewBundle` | N≥ | draft | RB | L2 | REVIEW_BUNDLE_INCOMPLETE |
| `StartReview` | reviewer | frozen | RB | L0–L1 | REVIEW_BUNDLE_NOT_FROZEN |
| `EvaluateClaim` | système propose | RB frozen + version | Claim | L2–L3 | CLAIM_* ; VERSION_MISMATCH |
| `ConfirmClaimEvaluation` | humain/Morris | Critical/structural rules | Claim | L0 | CLAIM_SELF_REVIEW_* ; AUTHORITY_* |
| `RejectClaimEvaluation` | reviewer | evaluating | Claim | L0 | AUTHORITY_* |
| `RecordWaiver` | humain/Morris | ≠ system/agent | Claim | L0 | WAIVER_AUTHORITY_REQUIRED |
| `RecordFinding` | reviewer | under_review | RB | L0 | NOT_FROZEN |
| `CompleteReview` | reviewer | under_review | RB | L0 | INCOMPLETE ; NOT_FROZEN |
| `ReopenReview` | N≥/Morris | terminal | RB | L0 | → new version / superseded |
| `ProposeMaturity` | système | claims/evidence | Maturity | L2 | BLOCKED_BY_RESERVATION |
| `ConfirmMaturity` | humain/Morris | proposed ; no HARD | Maturity | L0 | CONFIRMATION_* ; AUTO_PROMOTION_FORBIDDEN |
| `DowngradeMaturity` | humain/Morris | invalidation | Maturity | L0 | DOWNGRADE_REQUIRED |
| `RegisterDebt` | humain | — | refs | L0 | — |
| `RecommendNextGate` | système | lecture seule | — | L1 | **pas** auto-launch |

Idempotence : `idempotencyKey` sur commandes mutantes (pattern T-A5).
Concurrence : OCC `expectedVersion` ; `CONCURRENT_MODIFICATION` / `VERSION_CONFLICT`.

---

## 14. ReviewBundle (runtime)

- draft mutable sous OCC
- freeze atomique du snapshot logique (evidenceRefs + claimEvaluationRefs)
- `ready_for_review` ≡ frozen v1 (`frozenAt`)
- refs immutables après freeze
- ClaimEvaluation porte `reviewBundleId` + `reviewBundleVersion` exacts
- correction post-freeze ⇒ nouvelle version / nouveau bundle
- `accepted` ⇒ complete ∧ ¬synthesisOnly
- `incomplete` status ⇒ completeness incomplete
- reopen sans mutation historique (supersession)

Tests concurrence : double freeze ; attach après freeze ; complete sans freeze.

---

## 15. ClaimEvaluation (runtime)

| Invariant | Où |
|-----------|-----|
| requiredEvidenceRefs non vides pour PASS | domaine |
| provided Evidence existantes + available/verified | application (EvidenceRepo) |
| RB gelé + version match | application (RBRepo) |
| Critical ⇒ human ; ≠ system/agent ; ≠ self-review | domaine + AuthorityResolver |
| structural ⇒ Morris (`canActAsMorris`) | AuthorityResolver |
| WAIVED ≠ PASS ; waiver ≠ system/agent | domaine |
| Claim ne mute aucune Evidence | application (pas d’update Evidence) |

---

## 16. MaturityAssessment (runtime)

- propose → confirm ; `autoPromoted=false` const enforcement
- sources : claimEvaluationRefs + reviewBundleRefs
- HARD `blockingReservationRefs` ⇒ `blocked` / refuse confirm
- waiver ≠ close reserve
- invalidation Evidence/Claim ⇒ recommandation ou `DowngradeMaturity` explicite (supersession) — **jamais** mutation silencieuse
- **interdit** d’alimenter `executionAuthority`

---

## 17. Matrice autorité delivery

| Action | Système | Agent T-A5 | N1/N2/N3 | Morris | Service technique |
|--------|---------|------------|----------|--------|-------------------|
| enregistrer Evidence candidate | borné | source technique | oui | oui | source artefact |
| vérifier intégrité technique | oui | non décisionnel | oui | oui | borné |
| proposer claim | oui | non | oui | oui | non |
| confirmer non-Critical | règle fermée L3 | non | selon scope | oui | non |
| confirmer Critical | **non** | **non** | humain autorisé | oui | **non** |
| confirmer structural | **non** | **non** | **non** (N3≠Morris) | **oui** | **non** |
| confirmer maturité structurante | **non** | **non** | **non** | **oui** | **non** |
| fermer réserve structurante | **non** | **non** | **non** | **oui** | **non** |
| lancer T-A7 | **non** | **non** | **non** | gate séparé | **non** |

Réutilise `AuthorityResolver` T-A3 : `canActAsMorris` serveur ; displayName spoof refusé.

---

## 18. Automatisation

| Niveau | Usage T-A6 v1 |
|--------|----------------|
| L0 | Confirm Critical/structural ; CompleteReview ; ConfirmMaturity |
| L1 | VerifyEvidenceIntegrity ; RecommendNextGate (lecture) |
| L2 | Register/Ingest Evidence ; Create/Freeze RB ; Propose claim/maturity |
| L3 | EvaluateClaim non-Critical deterministic borné |
| L4 | hors v1 sauf gate Morris explicite |
| L5 | **out** |

Pour L3 : déterministe · réversible via supersession · autorité documentée · idempotent · audit · stop si Evidence unavailable · rayon = ClaimEvaluation seul.

---

## 19. Erreurs candidates

Alignées catalogue modeled + conventions T-A5 (`detailCode` + mapping modeled) :

`EVIDENCE_SOURCE_REQUIRED` · `EVIDENCE_BINDING_REQUIRED` · `EVIDENCE_DIGEST_REQUIRED` · `EVIDENCE_UNAVAILABLE` · `EVIDENCE_SECRET_FORBIDDEN` · `REVIEW_BUNDLE_NOT_FROZEN` · `REVIEW_BUNDLE_INCOMPLETE` · `REVIEW_BUNDLE_VERSION_MISMATCH` · `CLAIM_EVIDENCE_MISSING` · `CLAIM_NOT_PROVEN` · `CLAIM_SELF_REVIEW_FORBIDDEN` · `CLAIM_CONFIRMATION_REQUIRED` · `CLAIM_AUTHORITY_MISMATCH` · `WAIVER_AUTHORITY_REQUIRED` · `MATURITY_BLOCKED_BY_RESERVATION` · `MATURITY_CONFIRMATION_REQUIRED` · `MATURITY_AUTO_PROMOTION_FORBIDDEN` · `MATURITY_DOWNGRADE_REQUIRED` · `T_A7_AUTO_LAUNCH_FORBIDDEN` · `CONCURRENT_MODIFICATION` · `VERSION_CONFLICT` · `IDEMPOTENCY_CONFLICT` · `ATTEMPT_NOT_FOUND` (reader)

Messages safe : jamais payload/secret/Evidence brute.

---

## 20. Stratégie de tests delivery

### Domaine
transitions Evidence/RB/Claim/Maturity · freeze · Critical · réserves · autoPromoted=false · versioning

### Application
happy paths · refus · idempotence · OCC · authority mismatch · payload unavailable · self-review · incomplete accepted refuse

### Intégration fake
T-A5 resultRef → Evidence candidate (pas verified auto) · RB→Claim · Claim→Maturity proposal · HARD reserve block · aucun auto T-A7

### Non-régression
suites `app/__tests__/oa/**` T-A3/T-A4/T-A5 · modeled T-A6 AJV (73)

Couverture : comportementale des invariants Critical ; pas de % arbitraire.

---

## 21. Sécurité / RGPD

- validation refs / prefixes
- rejet secrets (`containsSecrets=false` ; scan)
- payload **non exécuté**
- redaction logs ; metadata only in audit
- classification obligatoire
- accès conceptuel (AuthorityResolver) — pas d’IAM produit
- metadata ≠ payload
- legal hold ≠ effacement
- minimisation ; bornes taille/nombre (policy)
- timeouts lecture payload fake
- provenance non fiable tant que non `verified`

---

## 22. Observabilité (conceptuelle)

Événements audit : EvidenceRegistered · EvidenceVerified · EvidenceUnavailable · ReviewBundleFrozen · ReviewStarted · ClaimProposed · ClaimConfirmed · ClaimRejected · ReviewCompleted · MaturityProposed · MaturityConfirmed · MaturityDowngraded · ReservationBlocked · AuthorityRejected · IdempotencyConflict

Métriques candidates (pas de stack) : Evidence/bundle · unavailable/stale · incomplete bundles · time-to-freeze · time-to-review · NOT_PROVEN · Critical confirms · authority rejections · maturity downgrade · HARD blocks

---

## 23. Découpage delivery recommandé

| Tranche | Contenu | Testable | Réversible |
|---------|---------|----------|------------|
| **T-A6-D1** Evidence core | domaine Evidence · repos · Ingest/Register/Verify · fake payload · AttemptReader | oui | oui |
| **T-A6-D2** ReviewBundle | agrégat · freeze · OCC · attach draft · Start/Complete | oui | oui |
| **T-A6-D3** ClaimEvaluation | Evaluate/Confirm/Reject/Waiver · autorité · PASS rules | oui | oui |
| **T-A6-D4** MaturityAssessment | Propose/Confirm/Downgrade · reserves | oui | oui |
| **T-A6-D5** Coordination | RecommendNextGate · fake E2E · non-régression · docs | oui | oui |

**Challenge :** D1–D4 séquentiel réduit le risque faux PASS (Claims après freeze). Fusion D2+D3 possible mais augmente surface Critical. **Recommandation unique : D1→D2→D3→D4→D5.**

Hors v1 : DebtItem schema · LPS write · payload réel · L4 orchestration.

---

## 24. Arbitrages delivery D-T-A6-DEL-01…10

Aucune option **validée** ce cycle — recommandations seulement.

### D-T-A6-DEL-01 — Frontières modules runtime

| Options | A: un module `evidence-review` | B: 4 modules séparés | C: étendre `execution-attempt` |
|---------|--------------------------------|----------------------|--------------------------------|
| **Reco** | **A** | — | interdit (ownership) |
| Impacts | cohérence T-A5 ; barrel unique | sur-découpage | pollution T-A5 |
| Dette | sous-dossiers domaine | multi-wiring | critique |
| Réversible | oui | oui | non |
| Morris | **oui** (structurant module) |

### D-T-A6-DEL-02 — Ownership ClaimEvaluation runtime

| Options | A: agrégat autonome OCC | B: entité sous ReviewBundle | C: VO éphémère |
|---------|-------------------------|-----------------------------|---------------|
| **Reco** | **A** | — | — |
| Impacts | concurrence Claim vs freeze | mutate RB post-freeze risque | perte audit |
| Morris | **oui** |

### D-T-A6-DEL-03 — Organisation application services

| Options | A: use-cases fichiers (T-A5) | B: 4 facades classes | C: orchestrateur unique |
|---------|------------------------------|----------------------|-------------------------|
| **Reco** | **A** | — | anti-pattern |
| Morris | recommandé non bloquant |

### D-T-A6-DEL-04 — Contrat ingestion T-A5

| Options | A: `IngestExecutionAttemptEvidence` explicite | B: hook auto RecordResult | C: polling |
|---------|-----------------------------------------------|---------------------------|-----------|
| **Reco** | **A** | interdit (auto-validation) | dette |
| Morris | **oui** |

### D-T-A6-DEL-05 — Repository & OCC

| Options | A: expectedVersion par agrégat (T-A5) | B: optimistic lock global | C: sans OCC v1 |
|---------|---------------------------------------|---------------------------|----------------|
| **Reco** | **A** | — | interdit |
| Morris | recommandé (alignement T-A5) |

### D-T-A6-DEL-06 — Invariants cross-aggregate

| Options | A: vérifs synchrones application | B: saga/compensation | C: prétendre atomique |
|---------|----------------------------------|----------------------|-----------------------|
| **Reco** | **A** + audit | hors v1 | interdit |
| Morris | **oui** (fail-closed) |

### D-T-A6-DEL-07 — Downgrade maturity

| Options | A: commande explicite + supersession | B: auto-downgrade | C: mutation in-place |
|---------|--------------------------------------|-------------------|----------------------|
| **Reco** | **A** | interdit | interdit |
| Morris | **oui** |

### D-T-A6-DEL-08 — Payloads v1

| Options | A: fake/metadata-only only | B: disque local | C: choisir S3/Postgres |
|---------|----------------------------|-----------------|------------------------|
| **Reco** | **A** ; U-M02 OPEN | hors scope | **interdit** |
| Morris | **oui** (confirmer fake-only) |

### D-T-A6-DEL-09 — Découpage increments

| Options | A: D1→D5 ci-dessus | B: big-bang | C: Claims avant Freeze |
|---------|--------------------|-------------|------------------------|
| **Reco** | **A** | risque Critical | faux PASS risk |
| Morris | **oui** |

### D-T-A6-DEL-10 — Gate vers implémentation

| Options | A: après ARBITRATE+DECIDE delivery | B: GO IMPLEMENT direct | C: fusion close R-M01 |
|---------|------------------------------------|------------------------|----------------------|
| **Reco** | **A** | — | **non** — gate R-M01 distinct |
| Morris | **oui** |

---

## 25. Réserves

### Existantes (OPEN — inchangées)

| ID | Statut |
|----|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** HARD exécution réelle Critical |
| R-T-A3-2 | **OPEN** HARD exécution réelle |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** — VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION |
| U-M02 | **OPEN** |

R-T-A6-1…9 : risques/invariants/dettes — **pas** CREATE VALIDATED.

### Réserves delivery candidates (non créées / non validées)

| ID candidat | Thème |
|-------------|-------|
| R-T-A6-DEL-C1 | jointure Evidence status pour PASS (cross-aggregate) |
| R-T-A6-DEL-C2 | self-review runtime enforcement |
| R-T-A6-DEL-C3 | bornes taille/nombre payload |
| R-T-A6-DEL-C4 | LPS satellite propagation (lié B5) |

---

## 26. Risques

| Risque | Mitigation cadrage |
|--------|-------------------|
| Faux PASS | D3 après D2 freeze ; vérif Evidence status |
| Auto Critical | AuthorityResolver + tests adversariaux |
| Auto-maturity | autoPromoted=false + Confirm explicite |
| Vendor creep | DEL-08 fake-only ; U-M02 |
| T-A7 leak | pas de commande ; erreur dédiée |
| Mutation Attempt | reader RO only |

---

## 27. Stop conditions (futur delivery)

Stop implémentation si : vendor choisi · R-T-A3-1/2 levés sans Morris · auto-confirm Critical · auto T-A7 · écriture Attempt · SQL · UI · fermeture réserve implicite · R-M01 fermée sans gate · exécution réelle.

---

## 28. Review pack futur (cycle implémentation)

Attendu FULL : Truth Check · diff runtime borné `evidence-review/**` · tests domaine/application/fake · non-régression T-A3–T-A5 · modeled inchangé · secret scan · anti-claims · handoff L3.

---

## 29. Anti-claims

- Pas DELIVERY READY / implementation ready / runtime ready / production ready
- Pas R-M01 / U-M02 / B5 / R1 / R-T-A3-* fermées
- Pas vendor / stockage physique décidé
- Pas T-A7 / exécution réelle / adapter réel
- Pas code créé ce cycle
- Pas push / PR / merge
- **Aucune** décision D-T-A6-DEL validée — recommandations seulement

---

## 30. Gate suivant

`GO ARBITRATE T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

Gate distinct requis pour fermer R-M01.

---

## 31. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 DELIVERY FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE DELIVERY`

---

# ANNEXE B — README delivery (complet)

# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Titre cycle** | Evidence, Review, Claims and Maturity |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A6` (**CONSUMED**) |
| **Gate arbitrage** | `GO ARBITRATE T-A6` (**CONSUMED**) |
| **Gate décision** | `GO DECIDE T-A6` (**CONSUMED**) |
| **Gate materialize** | `GO MATERIALIZE T-A6 MODELED` (**CONSUMED**) |
| **Gate validate** | `GO VALIDATE T-A6 MODELED` (**CONSUMED**) |
| **Gate delivery framing** | `GO FRAME T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Modeled** | Evidence/RB/Maturity `0.2.0-oa` · ClaimEvaluation `0.1.0-oa` — **VALIDATED AFTER CORRECTION** |
| **Runtime** | **NONE** modifié / créé |
| **Push / PR / merge projet** | **NONE** |
| **Statut pack** | **DELIVERY FRAMING PREPARED** |
| **Horodatage delivery framing** | 2026-07-26 02:06:59 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 DELIVERY FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE DELIVERY` |
| **Gate suivant** | `GO ARBITRATE T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif (ce cycle)

Cadrer le futur delivery runtime mémoire T-A6 (fake-only) — **sans** implémentation, SQL, vendor, ni T-A7.

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md)
3. [02-arbitration.md](./02-arbitration.md)
4. [03-decisions.md](./03-decisions.md)
5. [04-modeled-materialization.md](./04-modeled-materialization.md)
6. [05-modeled-validation.md](./05-modeled-validation.md)
7. [06-delivery-framing.md](./06-delivery-framing.md) — **cadrage delivery**

## Modeled validé

| Schema | Version |
|--------|---------|
| Evidence | `0.2.0-oa` |
| ReviewBundle | `0.2.0-oa` |
| ClaimEvaluation | `0.1.0-oa` |
| MaturityAssessment | `0.2.0-oa` |

## Arbitrages delivery

D-T-A6-DEL-01…10 préparés dans [06-delivery-framing.md](./06-delivery-framing.md) — **recommandations uniquement** ; aucune option validée.

## Réserves (OPEN — inchangées)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD) |
| R-T-A3-2 | **OPEN** (HARD) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** — VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION |
| U-M02 | **OPEN** |

## Anti-claims

- Pas DELIVERY READY / implementation ready / runtime ready
- Pas R-M01 fermée / U-M02 fermée / vendor
- Pas code / runtime / modeled modifié ce cycle
- Pas T-A7 / exécution réelle / adapter réel
- Pas push / PR / merge

## Hors périmètre delivery framing

Implémentation · SQL · API · UI · stockage physique · T-A7 · exécution réelle

---

# ANNEXE C — Anti-claims checklist

- [x] Modeled non modifié
- [x] Runtime non modifié
- [x] SQL absent
- [x] T-A7 non ouvert
- [x] Adapter réel absent
- [x] Exécution réelle absente
- [x] Push/PR/merge non exécutés
- [x] Réserves non fermées
- [x] R-M01 non fermée
- [x] U-M02 OPEN
- [x] Aucune décision DEL validée
- [x] Review pack FULL avec contenus complets

## Verdict final

`SFIA STUDIO V3-NATIVE OPTION A T-A6 DELIVERY FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE DELIVERY`
