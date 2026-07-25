# 08 — Evidence, ReviewBundle, maturité, dette

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — matérialisation T-A6 ; validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate T-A6** | `GO MATERIALIZE T-A6 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED** ce cycle) |
| **Décisions** | D-T-A6-01…12 **APPROVED BY MORRIS** |
| **JSON Schema** | Draft-07 |
| **Evidence** | `0.2.0-oa` (breaking vs `0.1.0-oa`) |
| **ReviewBundle** | `0.2.0-oa` (breaking vs `0.1.0-oa`) |
| **ClaimEvaluation** | `0.1.0-oa` (**nouveau** — R-M01 reste OPEN jusqu’à validation) |
| **MaturityAssessment** | `0.2.0-oa` (breaking vs `0.1.0-oa`) |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR DELIVERY · Pas runtime · Pas vendor stockage · Pas T-A7 · Pas exécution réelle |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `08-evidence-review-bundle-maturity-and-debt-model.md` |

---

## Evidence (D-T-A6-01 / D-T-A6-02)

Entité T-A6 indépendante (`ev:`). ExecutionAttempt peut être **source** primaire (`sourceKind=execution_attempt` + `bindings.executionAttemptId`) mais **n’est pas owner**.

### Champs structurants

`schemaVersion` · `evidenceId` · `type` · `source` · `sourceKind` · `producedAt` · `producedBy?` · `status` · `freshness?` · `location?` · `digest?` · `verifiablePayload?` · `classification` · `storageMode` · `availability` · `retentionClass?` · `legalHold?` · `containsSecrets=false` · `bindings` (≥1) · `provenance` (required)

### Status

`expected` · `available` · `verified` · `incomplete` · `stale` · `rejected` · `superseded` · `unavailable`

### Bindings (minProperties 1)

`executionAttemptId` (`xat:`) · `executionContractId` (`xct:`) · `decisionId` · `cycleInstanceId` (`cyc:`) · `projectId` (`prj:`) · `reviewBundleId` (`rb:`)

### Stockage logique (hybride — aucun vendor)

| Mode | Sens |
|------|------|
| `metadata_only` | metadata + refs ; pas de payload revendiqué |
| `internal_payload_ref` | payload logique interne (ref) |
| `external_payload_ref` | payload externe (ref) |

`verifiablePayload=true` **ou** `status=verified` ⇒ `digest` obligatoire. Secrets/tokens interdits dans `location`, `source`, `provenance`. Evidence obligatoire `unavailable` / `stale` / `incomplete` **ne peut pas** supporter un PASS. Une simple valeur `ExecutionAttempt.status` n’est **pas** une Evidence validée.

**U-M02 OPEN** — aucune technologie de stockage choisie.

Commandes : `RegisterEvidence` (enregistre + attache bindings ; absorbe l’intention `AttachEvidence` v1) · `VerifyEvidenceIntegrity`.

---

## ReviewBundle (D-T-A6-03)

Agrégat autonome versionné (`rb:` + `version` OCC). Verdict lié à `reviewBundleId` + `version` exacts.

### Lifecycle v1

`draft` → `ready_for_review` → `under_review` → `accepted` \| `rejected` \| `incomplete` \| `superseded`

- `ready_for_review` ≡ **frozen** en v1 (`frozenAt` requis pour tout statut post-draft).
- Après freeze : Evidence refs et claim refs **immutables** ; correction ⇒ nouvelle version ou nouveau bundle.
- Bundle non gelé **ne peut pas** recevoir de verdict (`accepted`/`rejected` exigent `frozenAt` + `validatedAt` + `reviewer`).
- `synthesisOnly=true` ⇒ `completeness=incomplete` (synthèse seule ≠ bundle complet).
- `accepted` ⇒ `completeness=complete` et `synthesisOnly=false` (schema).
- `status=incomplete` ⇒ `completeness=incomplete` (schema).
- Bundle incomplete ⇒ aucun claim PASS final exigeant complétude (invariant sémantique).

Commandes : `CreateReviewBundle` · `FreezeReviewBundle` · `StartReview` · `RecordFinding` · `CompleteReview` · `ReopenReview`.

---

## ClaimEvaluation (D-T-A6-04 / 05 / 06)

Séparation **sémantique** Claim ≠ ClaimEvaluation ; implémentation physique v1 **unifiée** dans `ClaimEvaluation` (`clm:`). CreateClaim absorbé dans `EvaluateClaim` v1.

### Status

`pending` · `evaluating` · `pass` · `fail` · `not_proven` · `waived` · `disputed`

### Criticality

`non_critical` · `critical` · `structural`

### evaluationMethod

`deterministic` · `assisted` · `human_review`

### Matrice type × criticité (D-T-A6-05)

| Type | Non-Critical | Critical | Structural |
|------|--------------|----------|------------|
| technique déterministe | L3 possible | proposition système + confirmation humaine | Morris |
| conformité / sécurité | humain ou règle bornée | humain autorisé | Morris |
| maturité | proposition système | confirmation humaine | Morris |
| réserve / waiver structurant | n/a | humain autorisé | Morris |

### Autorité (D-T-A6-06)

| Acteur | Autorisé | Interdit |
|--------|----------|----------|
| Système | propose ; contrôles déterministes non-Critical | confirmer Critical ; fermer réserve humaine ; Morris ; authz exécution |
| Agent T-A5 | artefacts / refs techniques | Evidence validée ; Claim confirmé |
| N1 / N2 / N3 | revue selon scope | **N3 ≠ Morris** |
| Morris | claims/maturité/réserves/waivers structurants | — |
| Service / adapter | fournir artefact | juger conformité |

Règles : PASS ⇒ `requiredEvidenceRefs` et `providedEvidenceRefs` non vides (schema) ; PASS impossible si Evidence obligatoire absente/unavailable/stale/incomplete (sémantique) ; NOT_PROVEN ≠ FAIL ; WAIVED ≠ PASS ; self-review Critical interdit ; waiver explicite, motivé, horodaté, autorisé (**≠ system/agent**), **réversible** ; ClaimEvaluation ne mute aucune Evidence ; verdict lié à ReviewBundle gelé (`reviewBundleId` + `reviewBundleVersion`).

Commandes : `EvaluateClaim` · `ConfirmClaimEvaluation` · `RejectClaimEvaluation`.

**R-M01 reste OPEN** jusqu’à validation Morris du schema (matérialisé mais non VALIDATED).

---

## MaturityAssessment (D-T-A6-07 / 08)

Assessment versionné (`mat:`). Proposition puis confirmation. `autoPromoted=false` (const).

### Status

`proposed` · `confirmed` · `rejected` · `superseded` · `blocked`

### Règles

- confirmation humaine explicite (`confirmedBy` ≠ system/agent) ;
- Morris pour niveau structurant ;
- aucune auto-promotion ;
- `blockingReservationRefs` empêche niveau/dimension associée (`blocked` ⇒ ≥1 ref) ;
- PASS ne ferme aucune réserve ; waiver ≠ fermeture ;
- downgrade via **supersession** (`supersedesMaturityAssessmentId` + `downgradeReason`) ;
- aucune moyenne ne masque une dimension bloquante ;
- maturité ≠ autorisation d’exécution ;
- `MODELED` ≠ `IMPLEMENTED` ≠ `ADOPTED`.

Commandes : `ProposeMaturity` · `ConfirmMaturity` · `DowngradeMaturity`.

---

## Dette / réserves de review

Commandes : `RegisterDebt` · `CloseDebt` · `ReopenDebt`. Événement `ReserveMaintainedOpen` quand PASS n’implique pas fermeture.

DebtItem schema **non** créé ce cycle (dette documentaire inchangée : UX-U01 tablet · UX-R01 a11y · MethodMode · OPS1 legacy · etc.).

---

## Frontière T-A6 / T-A7 (D-T-A6-10)

| T-A6 | T-A7 |
|------|------|
| Evidence, ReviewBundle, ClaimEvaluation, MaturityAssessment, findings/dette review, reco de gate | cutover legacy, MethodMode, OPS1, migration chemins historiques, activation opérationnelle globale |

Aucune commande T-A6 ne lance T-A7. Aucun schema T-A7.

---

## Automatisation (D-T-A6-11)

L0 manuelle · L1 intégrité · L2 génération guidée · L3 déterministe non-Critical · L4 gated Morris · L5 **out**.

Interdit : auto-confirm maturity · auto-close reserve · auto-launch cycle · auto-confirm Critical · auto-authorize execution.

---

## Output contract (D-T-A6-12)

**Autorisé :** Evidence refs · ReviewBundle versionné · ClaimEvaluation · MaturityAssessment proposé/confirmé · Debt/Reserve refs · Findings · verdict · reco gate/cycle correctif.

**Interdit :** auto next cycle · mutation Trajectory non autorisée · authz exécution · fermeture implicite réserve · promotion Option A · décision Morris implicite.

Propagation LPS sous **B5 OPEN**.

---

## Stockage logique & sécurité / RGPD (D-T-A6-09)

Metadata canonique interne · payload séparé · digest/CAS · classification obligatoire · rétention par classe · bornes taille/nombre · disponibilité explicite · effacement ≠ legal hold · chiffrement/accès conceptuels · export borné · purge · déduplication · reconstruction.

Aucun secret en clair · aucun token dans location/provenance · aucune Evidence brute dans logs · aucun contenu Evidence exécuté · pas de confiance auto aux métadonnées agent · minimisation · classification PII · refs publiques sans données sensibles.

**U-M02 OPEN.**
