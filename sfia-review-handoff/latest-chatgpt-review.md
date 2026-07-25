# FULL Review Pack — T-A6 Framing (Option A)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | 2026-07-26 00:07:31 CEST (+0200) |
| **Cycle** | Cadrage |
| **Profil** | Critical |
| **Gate** | `GO FRAME T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **HEAD final** | `40e92336b3e646f03354c7912c705b1d62b68097` |
| **Commit local** | `docs(sfia-studio): frame T-A6 evidence review and maturity` |
| **Status** | tracked clean after commit ; staged vide ; untracked `.tmp-sfia-review/` only |
| **Worktrees** | tech (T-A6 branch) + main + handoff |
| **Template** | `prompts/templates/sfia-cycle-execution-template.md` |
| **Handoff source** | blob `6482ed9ad6eff2cfe1bb246e78e1d89bf175683d` — T-A5 POST-MERGE VERIFIED |
| **CKC** | `method/.../pilots/01-cadrage.md` — candidate ; experimental cognitive guidance ; `executionAuthority=false` |

## Truth Check

PASS — origin/main exact ; tracked clean ; pas de branche/PR T-A6 préexistante ; handoff post-merge cohérent.

## Sources consultées

- CKC 01-cadrage.md
- modeled README, 01, 02, 03, 05, 06, 07, **08-evidence-review-bundle-maturity-and-debt-model.md**, 09, 10
- schemas Evidence / ReviewBundle / MaturityAssessment
- T-A5 README + framing/materialization/pr-readiness
- réserves B5, R1, R-T-A3-1…4, R-M01, U-M02

## Path modeled Evidence exact

`projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/08-evidence-review-bundle-maturity-and-debt-model.md`

## Périmètre

Deux fichiers delivery T-A6 uniquement. Aucun modeled/runtime/test/package modifié.

## Fichiers

| Action | Path |
|--------|------|
| créé | `.../t-a6-evidence-review-claims-maturity/01-framing.md` |
| créé | `.../t-a6-evidence-review-claims-maturity/README.md` |
| modifié | aucun hors ces créations |
| supprimé | aucun |

## Diff-check

PASS (trailing whitespace corrigé avant commit).

## Décisions validées nouvelles

Aucune.

## Arbitrages

D-T-A6-01…12 préparés — non validés.

## Réserves

B5, R1, R-T-A3-1…4, R-M01, U-M02 OPEN ; R-T-A6-1…9 candidates.

## Anti-claims

Pas T-A6 validé ; pas modeled/delivery/production ready ; pas storage décidé ; pas T-A7 ; pas exec réelle ; pas push/PR/merge ; pas réserves fermées.

## Contenu complet — 01-framing.md

# 01 — Framing T-A6 Evidence, Review, Claims and Maturity

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Cycle** | Framing (Critical) |
| **Gate** | `GO FRAME T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` (PR #266 merge) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Modeled / runtime edits** | **NONE** (cadrage documentaire uniquement) |
| **Horodatage** | 2026-07-26 00:05:48 CEST (+0200) |
| **Statut** | Framing complete — Morris arbitration required |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE MODELED OR DELIVERY` |

---

## 1. Contexte

T-A5 (PR #266) a intégré sur `main` la fondation runtime mémoire `ExecutionAttempt` (Select/Start/Cancel/Record/Retry/Timeout) avec adapters Test/NoOp uniquement. T-A5 produit des **résultats techniques** et des **références** (`resultRef` / `errorRef`). Il ne produit ni Evidence validée, ni Claim, ni maturité.

T-A6 doit cadrer la chaîne permettant de collecter, relier, qualifier et faire revoir des preuves examinables, puis de **proposer** un état de claim et de maturité — sans fabriquer de preuve, sans transformer une évaluation système en décision humaine, et sans autoriser implicitement une nouvelle exécution.

Ce document est **arbitrable**. Aucune option n’est validée. Aucun schema, runtime, SQL, API ou UI n’est implémenté dans ce cycle.

### Question structurante

> Comment SFIA Studio peut-il collecter, relier, qualifier et faire revoir les preuves issues d’une exécution T-A5, puis calculer ou proposer un état de claim et de maturité, sans fabriquer de preuve, sans transformer une évaluation système en décision humaine et sans autoriser implicitement une nouvelle exécution ?

### Héritage T-A1 → T-A5 (contraintes dures)

| Règle | Source |
|-------|--------|
| Project / LPS portent des refs satellites (`evidenceIds`, `reviewBundleIds`, `debtItemIds`, `maturityAssessmentId`) | modeled 03 ; B5 OPEN |
| Cycle / Trajectory / Epistemic : `EvidenceRef` est un type épistémique ; contradiction `blocking` stoppe | modeled 05 |
| Decision / Confirmation / Authority : séparés d’Evidence ; maturité dans la matrice d’autorité | modeled 06 |
| T-A4 Contract jusqu’à `confirmed` ; T-A5 possède Attempt et post-start | modeled 07 ; T-A4/T-A5 |
| T-A5 = technique only ; Evidence / Claim / maturity = **T-A6** (Morris D10) | T-A5 D10 ; modeled 07 |
| Attempt n’embarque pas `claimId` / `partial` | Attempt `0.2.0-oa` |
| Evidence ≠ ReviewBundle ≠ ClaimEvaluation | modeled 01 / 08 ; M-OA-07 |
| Synthèse seule ≠ bundle complet ; pas de promotion auto de maturité | modeled 08 |
| Secrets interdits en clair dans Evidence | modeled 08 / 10 |
| R-T-A3-1 / R-T-A3-2 HARD pour exécution réelle | T-A5 post-merge |
| Test/NoOp only ; aucune surface d’exécution réelle dans T-A5 | runtime T-A5 |

### Modeled déjà présent (non modifié ce cycle)

| Objet | Schema | Prefix | Notes |
|-------|--------|--------|-------|
| Evidence | `schemas/evidence/evidence.schema.json` `0.1.0-oa` | `ev:` | status / freshness / links / digest |
| ReviewBundle | `schemas/evidence/review-bundle.schema.json` `0.1.0-oa` | `rb:` | completeness / synthesisOnly |
| MaturityAssessment | `schemas/maturity/maturity-assessment.schema.json` `0.1.0-oa` | `mat:` (exemple) | `autoPromoted: false` |
| ClaimEvaluation | **absent** | `clm:` (doc 02) | réserve R-M01 |
| DebtItem | **absent** | `debt:` | listé modeled 08 ; pas de schema |
| EvidenceRequirement | nommé doc 02 | — | pas de schema |

Path exact doc Evidence : `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/08-evidence-review-bundle-maturity-and-debt-model.md`.

### CKC

| Item | Valeur |
|------|--------|
| Trouvé | **oui** |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/01-cadrage.md` |
| Statut | **candidate** |
| Usage | experimental cognitive guidance |
| `executionAuthority` | **false** |
| Fallback | non requis |
| Limites | ne valide aucune option T-A6 ; n’ouvre pas de Cycle runtime ; ne remplace pas Morris ; n’autorise aucune exécution réelle |

---

## 2. Frontière T-A5 → T-A6

### 2.1 T-A5 produit

- `ExecutionAttempt` (agrégat séparée) et statut technique ;
- `resultRef` / `errorRef` (références techniques bornées) ;
- timestamps, provenance technique, correlation / idempotency ;
- audit technique append-only (refs, jamais payloads) ;
- `selectedAgentRef`, adapter fake id, contract version binding ;
- données strictement nécessaires à l’interprétation ultérieure.

### 2.2 T-A5 ne produit pas

- Evidence validée / ReviewBundle final ;
- Claim / ClaimEvaluation ;
- maturité validée ;
- conformité métier / acceptation humaine ;
- autorisation de poursuivre une trajectoire ;
- fermeture de réserve ;
- adapter réel / exécution réelle.

### 2.3 T-A6 candidat possède (à arbitrer)

| Responsabilité | Notes |
|----------------|-------|
| Collecte / référencement d’Evidence | depuis Attempt / Contract / artefacts |
| Intégrité et provenance | digest, source, freshness |
| Constitution ReviewBundle | ensemble versionné soumis à revue |
| Orchestration bornée de revue | start / findings / complete / reopen |
| Claims et ClaimEvaluation | proposition vs confirmation |
| MaturityAssessment | proposal / confirm / downgrade |
| Dette et réserves | enregistrer / maintenir OPEN / fermer sous autorité |
| Traçabilité | audit sans secrets |
| Séparation machine / humain | système propose ; humain décide |
| Verdict de revue | pass / fail / not_proven / waived / disputed |

### 2.4 Hors périmètre T-A6

- T-A7 legacy cutover / MethodMode / OPS1 ;
- exécution réelle / adapter réel ;
- SQL choisi, API, UI, worker, scheduler ;
- fermeture B5 / R1 / R-T-A3-* ;
- validation d’options (ce cycle) ;
- ouverture automatique du cycle suivant.

---

## 3. Définitions épistémiques (candidates)

Toutes les définitions ci-dessous sont **candidates** pour arbitrage. Elles s’alignent sur modeled 08 / 01 sans les valider comme runtime.

### 3.1 Observation

Fait constaté, directement rattaché à une source identifiable.
**Owner candidat :** Reviewer / système de capture (selon type).
**Immutabilité :** observation enregistrée ne se réécrit pas ; correction = nouvelle observation.
**Automatisation :** capture possible ; jugement de pertinence souvent humain.
**Anti-claim :** une observation n’est pas une Evidence validée ni un Claim.

### 3.2 Evidence

Objet ou référence vérifiable supportant une observation ou un claim (`ev:`).
**Owner candidat :** domaine H / T-A6.
**Lifecycle candidat (modeled existant) :** `expected | available | verified | incomplete | stale | rejected | superseded`.
**Versioning :** `0.1.0-oa` ; digest optionnel.
**Autorité création :** système (référencement technique) ou humain (attestation).
**Autorité validation :** humain ou règle déterministe explicite — jamais l’agent T-A5 auteur.
**Anti-claims :** secrets interdits en clair ; location = référence ; synthèse ≠ Evidence complète ; Attempt.status ≠ Evidence.

### 3.3 Finding

Écart ou constat qualifié issu d’une revue.
**Owner candidat :** ReviewBundle / Reviewer.
**Relation :** Finding référence Evidence / Claim ; ne remplace pas Decision.
**Anti-claim :** Finding ≠ ClaimEvaluation ≠ Decision Morris.

### 3.4 Claim

Proposition vérifiable affirmant qu’une propriété est satisfaite.
**Types candidats :** technique ; conformité ; qualité ; sécurité ; maturité-support.
**Interdit :** claim décisionnel qui se substitue à une Decision humaine.
**Owner création candidat :** système (proposition) ou reviewer.
**Owner validation :** humain N≥ selon Critical ; Morris pour claims structurants.
**Anti-claim :** Claim ≠ Evidence ; Claim ≠ PASS automatique.

### 3.5 ClaimEvaluation

Évaluation d’un Claim à partir d’Evidence et de règles explicites (`clm:`).
**Schema :** absent (R-M01 OPEN).
**Lifecycle candidat :** `pending | evaluating | pass | fail | not_proven | waived | disputed`.
**Règle :** `PASS` impossible si Evidence obligatoire absente ; `NOT_PROVEN` ≠ `FAIL` ; `WAIVED` ≠ `PASS`.
**Anti-claim :** ClaimEvaluation ne mute pas Evidence ; système peut proposer, confirmation humaine selon type/Critical.

### 3.6 ReviewBundle

Ensemble versionné des éléments soumis à une revue (`rb:`).
**Lifecycle candidat (modeled) :** `draft | ready_for_review | accepted | rejected | superseded` (+ gel / under_review / reopened à arbitrer).
**Règle :** `synthesisOnly: true` ⇒ completeness `incomplete` ; bundle incomplete ⇒ pas de claim READY.
**Anti-claim :** merge Git ≠ ReviewBundle accepted ; synthèse seule ≠ bundle complet.

### 3.7 Maturity

État synthétique dérivé de claims et décisions explicites — **jamais une preuve en soi**.
**Niveaux modeled :** `DOCUMENTED | VALIDATED | MODELED | IMPLEMENTED | ADOPTED`.
**Status :** `proposed | accepted | rejected | superseded` (+ `downgraded` candidat).
**`autoPromoted: false` const.**
**Anti-claims :** MODELED ⇏ IMPLEMENTED ; maturité ≠ autorisation d’exécution ; pas de moyenne trompeuse.

### 3.8 Debt / Reserve

Écart connu, risque, limite ou condition non satisfaite, conservé indépendamment d’un résultat positif.
**DebtItem** (`debt:`) : dette produit/technique.
**Reserve** : condition structurante (B5, R1, R-T-A3-*, R-M01, U-M02…).
**Fermeture :** autorité humaine explicite ; **système ne ferme aucune réserve structurante**.
**Anti-claim :** verdict review positif ≠ fermeture de réserve.

### 3.9 Decision

Arbitrage humain explicite (`dec:` / Confirmation `cnf:`).
**Ne doit jamais** être créé implicitement par une Evidence, une ClaimEvaluation automatique ou une MaturityAssessment.
**Relation T-A6 :** une review peut **recommander** une Decision ; elle ne la crée pas.

---

## 4. Questions structurantes (Q1–Q10)

Chaque question présente des **options candidates**. Aucune n’est validée.

### Q1 — Evidence : copie ou référence

| Option | Description | Forces | Risques |
|--------|-------------|--------|---------|
| **A — Références immuables** | `location` + digest vers artefacts externes | volumétrie basse ; portabilité | indisponibilité externe ; R-T-A3-2 |
| **B — Snapshot interne** | copie content-addressed | intégrité / disponibilité | coût ; PII ; rétention |
| **C — Hybride** | metadata + digest obligatoires ; payload optionnel selon classification | flexibilité | complexité ; U-M02 |

**Recommandation candidate :** **C** — metadata/digest toujours ; payload interne seulement si classification l’exige.
**Dette :** U-M02 storage. **Réversible :** oui avant delivery. **Gate :** D-T-A6-02.

### Q2 — Granularité Evidence

Bindings explicites candidats (multi-liens via `links` / EvidenceBinding) :

- Attempt (`xat:`) — **primaire** pour résultats T-A5 ;
- ExecutionContract (`xct:`) ;
- Claim / ReviewBundle ;
- Cycle / Decision (optionnel).

**Interdit candidat :** Evidence globale orpheline sans binding.
**Recommandation candidate :** binding Attempt obligatoire pour Evidence issue d’exécution ; multi-binding explicite autorisé.
**Gate :** D-T-A6-01.

### Q3 — ReviewBundle

| Option | Description |
|--------|-------------|
| **A** | Agrégat autonome gelé (ownership H) |
| **B** | Projection versionnée depuis LPS |
| **C** | Liste de références sans gel |
| **D** | Snapshot gelé au StartReview |

**Recommandation candidate :** **A+D** — agrégat autonome ; freeze explicite avant verdict ; supersession = nouvel id ; reopen = nouvelle review ou version.
**Gate :** D-T-A6-03.

### Q4 — Claim

Séparer :

- claim technique (ex. Attempt succeeded + refs présentes) ;
- claim conformité / qualité / sécurité ;
- claim support de maturité ;
- **claim décisionnel interdit**.

**Création :** système peut proposer ; humain peut créer.
**Validation :** selon Critical et type (Q5 / Q9).
**Gate :** D-T-A6-04.

### Q5 — ClaimEvaluation

| Option | Usage candidat |
|--------|----------------|
| **A** Auto déterministe | claims techniques non-Critical à règles fermées |
| **B** Système assisté + confirmation humaine | défaut |
| **C** Revue humaine obligatoire | Critical / sécurité / maturité ADOPTED |
| **D** Stratégie par type × Critical | matrice |

**Recommandation candidate :** **D** avec règle : système **propose** ; confirmation humaine pour Critical et tout claim impactant maturité ≥ VALIDATED.
**Gate :** D-T-A6-05 / D-T-A6-06.

### Q6 — Maturité

| Aspect | Proposition candidate |
|--------|----------------------|
| Nature | **proposée** puis **confirmée** ; jamais auto |
| Calcul | dérivé de ClaimEvaluations + réserves ; downgrade possible |
| Seuils | explicites par niveau ; pas de moyenne |
| NOT_PROVEN | bloque promotion ; ≠ FAIL |
| Réserves bloquantes | incompatibles avec niveau final correspondant |
| Morris | confirme niveaux structurants / ADOPTED |

**Gate :** D-T-A6-07 / D-T-A6-08.

### Q7 — Dette et réserves

- Verdict positif **maintient** réserves OPEN ;
- Distinguer : dette / risque / réserve / waiver / finding ;
- Fermeture : N≥ / Morris selon criticité ;
- Propagation LPS / Cycle / Trajectory via refs (contrainte B5) ;
- Waiver explicite, jamais silencieux.

### Q8 — Revue

| Aspect | Proposition candidate |
|--------|----------------------|
| Déclencheur | commande StartReview sur bundle frozen |
| Reviewer | humain N≥ ; système = contrôles L1/L3 seulement |
| Séparation | auteur Attempt / agent ≠ reviewer du claim Critical |
| Verdicts | accepted / rejected / incomplete / reopen |
| Immutabilité | résultat de revue versionné ; correction = nouvelle review |

### Q9 — Autorité (matrice fermée candidate)

| Acteur | Peut | Ne peut pas |
|--------|------|-------------|
| Système | référencer Evidence ; proposer claims/évaluations/maturité ; contrôles déterministes | se déclarer Morris ; fermer réserve structurante ; valider Critical sans règle ; promouvoir Option A ; autoriser exécution ; muter Evidence source |
| Agent T-A5 | produire resultRef technique | créer Evidence validée / Claim accepté |
| Reviewer N1/N2/N3 | revue selon scope | usurper Morris ; réécrire historique |
| Morris | Critical / réserves / maturité structurante | — |
| Adapter / service | fournir artefacts | juger conformité |

### Q10 — Transition de trajectoire

T-A6 peut **produire** :

- refs LPS (`evidenceIds`, `reviewBundleIds`, `maturityAssessmentId`, `debtItemIds`) — sous réserve B5 ;
- événements de revue / maturité ;
- **recommandation** de prochain gate / correction cycle.

T-A6 **ne lance pas** automatiquement un cycle suivant.
**Gate :** D-T-A6-12.

---

## 5. Objets candidats et simplification

| Objet | Nature candidate | ID | Justification | Alternative plus simple |
|-------|------------------|----|---------------|-------------------------|
| Evidence | entité / VO lié | `ev:` | schema existant | — |
| EvidenceSource | VO | — | classifier origine | string `source` suffit v1 |
| EvidenceBinding | VO | — | multi-liens | `links` schema existant |
| ReviewBundle | **agrégat** | `rb:` | ownership H | — |
| ReviewScope | VO | — | bornage revue | champs sur bundle |
| Finding | entité | `fnd:`? | écarts | event + note |
| Claim | entité | ? | proposition | fusionner dans ClaimEvaluation v1 |
| ClaimEvaluation | entité | `clm:` | R-M01 | — |
| MaturityAssessment | entité | `mat:` | schema existant | — |
| DebtRecord | entité | `debt:` | LPS | — |
| ReviewDecision | projection | — | pointer Decision | utiliser Decision T-A3 |

**Challenge réduction :** v1 candidate = **Evidence + ReviewBundle + ClaimEvaluation + MaturityAssessment + DebtRecord** (5). EvidenceSource/Binding/Finding/Claim séparés = enrichissement ultérieur. Finding peut rester événement + payload borné.

**Agrégats candidats v1 :** ReviewBundle (H) ; ClaimEvaluation (si schema) ; Evidence peut rester entité référencée plutôt qu’agrégat racine (aligné modeled 01).

---

## 6. Lifecycles candidats

### 6.1 Evidence (modeled + challenge)

`expected → available → verified` ; branches `incomplete | stale | rejected | superseded`.
**Challenge :** ne pas confondre `available` (disponibilité) et `verified` (intégrité/acceptabilité).
**Non validé.**

### 6.2 ReviewBundle

Modeled : `draft | ready_for_review | accepted | rejected | superseded`.
**Extension candidate :** `frozen` (avant review) ; `under_review` ; `reopened`.
Alternative : `ready_for_review` = frozen.

### 6.3 ClaimEvaluation

`pending → evaluating → {pass | fail | not_proven | waived | disputed}`.
Terminal disputé peut rouvrir.

### 6.4 MaturityAssessment

Modeled status : `proposed | accepted | rejected | superseded`.
**Extension candidate :** `downgraded` (événement + nouvel assessment superseding).

---

## 7. Commandes et événements candidats

### 7.1 Commandes (à qualifier / dédoublonner)

| Commande | Owner | Autorité | Idempotence | Notes |
|----------|-------|----------|-------------|-------|
| RegisterEvidence | T-A6 | système/humain | oui (digest/id) | vs catalog AttachEvidence |
| AttachEvidence | T-A6 | système | oui | binding Attempt/Contract |
| VerifyEvidenceIntegrity | T-A6 | système | oui | digest check |
| CreateReviewBundle | T-A6 | N≥ / système | non | draft |
| FreezeReviewBundle | T-A6 | N≥ | oui | gel avant verdict |
| StartReview | T-A6 | reviewer | oui | |
| RecordFinding | T-A6 | reviewer | append | |
| CreateClaim | T-A6 | système/humain | non | proposition |
| EvaluateClaim | T-A6 | système/humain | bornée | catalog 09 |
| ConfirmClaimEvaluation | T-A6 | N≥ / Morris | oui | |
| RejectClaimEvaluation | T-A6 | N≥ / Morris | oui | |
| CompleteReview | T-A6 | reviewer | oui | |
| ReopenReview | T-A6 | N≥ / Morris | non | nouvelle version |
| ProposeMaturity | T-A6 | système | oui | autoPromoted false |
| ConfirmMaturity | T-A6 | N≥ / Morris | oui | |
| DowngradeMaturity | T-A6 | N≥ / Morris | non | |
| RegisterDebt / CloseDebt / ReopenDebt | T-A6 | N≥ / Morris close | — | système n’auto-close pas réserve |
| GetReviewBundle / ListEvidence / GetClaimEvaluation | T-A6 | lecture | oui | |

**Simplification candidate :** fusionner Register+Attach ; fusionner CreateClaim dans EvaluateClaim(propose).

### 7.2 Événements candidats

EvidenceRegistered · EvidenceIntegrityVerified · EvidenceRejected · ReviewBundleFrozen · ReviewStarted · FindingRecorded · ClaimCreated · ClaimEvaluationProposed · ClaimEvaluationConfirmed · ClaimEvaluationRejected · ReviewCompleted · ReviewReopened · MaturityProposed · MaturityConfirmed · MaturityDowngraded · DebtRegistered · DebtClosed · ReserveMaintainedOpen.

**Audit :** refs only — jamais secret, token, payload Evidence brut, Confirmation complète.

---

## 8. Invariants candidats

| ID | Invariant | Risque | Owner | Test futur | Réserve | Morris |
|----|-----------|--------|-------|------------|---------|--------|
| I01 | Evidence liée à source identifiable | orpheline | T-A6 | schema+runtime | — | non |
| I02 | Digest/intégrité quand applicable | falsification | T-A6 | VerifyIntegrity | U-M02 | D-T-A6-02 |
| I03 | Provenance obligatoire | audit | T-A6 | schema | — | non |
| I04 | Pas d’Evidence fabriquée depuis un claim seul | fausse assurance | T-A6 | adversarial | — | oui |
| I05 | ReviewBundle gelé avant verdict | drift | T-A6 | Freeze | — | D-T-A6-03 |
| I06 | Verdict référence version exacte du bundle | non-reproductibilité | T-A6 | CompleteReview | — | non |
| I07 | ClaimEvaluation ne mute pas Evidence | intégrité | T-A6 | mutation test | — | non |
| I08 | PASS impossible si Evidence obligatoire absente | faux PASS | T-A6 | EvaluateClaim | — | oui |
| I09 | NOT_PROVEN ≠ FAIL | sémantique | T-A6 | enum | R-M01 | oui |
| I10 | WAIVED ≠ PASS | waiver silencieux | T-A6 | enum+audit | — | oui |
| I11 | Réserve bloquante incompatible maturity finale | inflation | T-A6 | Propose/Confirm | B5/R-T-A3 | oui |
| I12 | Système ne ferme aucune réserve humaine | usurpation | T-A6 | CloseDebt authz | — | oui |
| I13 | Reviewer ne réécrit pas l’historique | anti-tamper | T-A6 | OCC/version | — | non |
| I14 | Correction ⇒ nouvelle version / review | immutabilité | T-A6 | Reopen | — | non |
| I15 | Maturity downgrade possible | honesty | T-A6 | Downgrade | — | D-T-A6-07 |
| I16 | Maturity ≠ autorisation d’exécution | élévation | T-A6 | anti-claim | R-T-A3 | oui |
| I17 | Résultat T-A5 ≠ Evidence validée sans ingestion | confusion | T-A6 | Attach | — | oui |
| I18 | Pas de donnée sensible complète dans logs/refs publiques | RGPD/secret | T-A6 | audit scan | — | non |

---

## 9. Autorité, Critical, séparation humain/système

- Critical review / claims / maturité ≥ VALIDATED : confirmation humaine explicite.
- Agent T-A5 et système d’évaluation : **conflit d’intérêts** → ne valident pas leurs propres claims Critical.
- Morris : réserves structurantes, ADOPTED, overrides.
- N3 ≠ Morris (héritage T-A3/T-A5).
- Aucun auto-ack, auto-promote, auto-close.

---

## 10. Sécurité, RGPD, données

### Classification candidate

| Classe | Exemples | Traitement candidat |
|--------|----------|---------------------|
| Public technique | attemptId, status, digests | refs OK |
| Interne | logs techniques non PII | rétention bornée |
| Sensible / PII | captures UI, noms, emails | minimisation ; pas dans logs |
| Secret | tokens, credentials | **interdit** dans Evidence claire |

### Interdictions candidates

- secret dans URL / location ;
- Evidence brute dans audit log ;
- token dans provenance ;
- exécution de contenu Evidence ;
- rendu HTML non assaini ;
- confiance automatique aux métadonnées agent ;
- export ReviewBundle sans contrôle d’accès.

### RGPD

Droit d’effacement vs legal hold ; anonymisation ; rétention par classe ; accès reviewer minimisé.

---

## 11. Stockage et volumétrie (non décidé)

| Dimension | Options candidates | Lien réserve |
|-----------|-------------------|--------------|
| Metadata vs payload | SQL/metadata + object store | U-M02 |
| Content-addressed | digest = adresse | U-M02 |
| Références externes | A (Q1) | R-T-A3-2 |
| Max size / count | bornes par Attempt/Claim/Bundle | volumétrie LPS |
| Déduplication | par digest | — |
| Indisponibilité | status `unavailable` / `stale` | — |

**Aucune technologie validée.**

---

## 12. Automatisation et niveaux SFIA

| Niveau | Actions candidates T-A6 |
|--------|-------------------------|
| L0 | revue manuelle assistée |
| L1 | contrôles auto (intégrité, présence refs) |
| L2 | génération guidée bundle/claims |
| L3 | évaluation déterministe bornée non-Critical |
| L4 | orchestration sous gates Morris |
| L5 | **hors cible** Option A |

**Stop conditions :** Evidence obligatoire absente ; bundle non gelé ; self-review Critical ; réserve bloquante ; R-T-A3-1/2 si chemin exec réelle ; PII/secret détecté.

**Règle :** aucune automatisation ne transforme une proposition de maturité en décision validée.

---

## 13. Risques et réserves

### 13.1 Réserves existantes (OPEN — non fermées)

| ID | Statut | Impact T-A6 |
|----|--------|-------------|
| B5 | OPEN | LPS satellite ids (evidenceIds…) |
| R1 | OPEN | atomicité cross-store |
| R-T-A3-1 | OPEN HARD exec réelle | Critical ack |
| R-T-A3-2 | OPEN HARD exec réelle | durabilité Evidence/Attempt |
| R-T-A3-3 | OPEN | authority registry mémoire |
| R-T-A3-4 | OPEN | mapping AUTHORITY_SCOPE_MISMATCH |
| R-M01 | OPEN | ClaimEvaluation schema |
| U-M02 | OPEN | stockage Evidence blobs |

### 13.2 Réserves / risques **candidates** (non validées)

| ID candidat | Risque | Prob. | Impact | Mitigation candidate | Blocker T-A6 framing | Blocker exec réelle |
|-------------|--------|-------|--------|----------------------|----------------------|---------------------|
| R-T-A6-1 | Evidence falsifiée / mutable | M | H | digest + freeze | non | oui si exec |
| R-T-A6-2 | Bundle non gelé avant verdict | M | H | Freeze obligatoire | non | — |
| R-T-A6-3 | Self-review / auto-validation | M | H | séparation auteur/reviewer | non | oui Critical |
| R-T-A6-4 | NOT_PROVEN traité comme PASS | M | H | enum + tests | non | — |
| R-T-A6-5 | Maturity inflation | M | H | réserves bloquantes | non | — |
| R-T-A6-6 | Waiver silencieux | L | H | WAIVED explicite | non | — |
| R-T-A6-7 | PII/secret dans Evidence | M | H | classification + scan | non | — |
| R-T-A6-8 | Volumétrie / rétention | M | M | bornes + U-M02 | non | — |
| R-T-A6-9 | Divergence modeled/runtime | M | M | gates materialize | non | — |

---

## 14. Arbitrages Morris préparés (D-T-A6)

| ID | Question | Options | Reco candidate | Dette | Réversible | Gate |
|----|----------|---------|----------------|-------|------------|------|
| D-T-A6-01 | Ownership / nature Evidence | entité liée Attempt vs agrégat | entité + bindings Attempt primaires | — | oui | ARBITRATE |
| D-T-A6-02 | Copie / référence / hybride | A/B/C | **C** hybride | U-M02 | oui | ARBITRATE |
| D-T-A6-03 | Agrégat ReviewBundle | A/B/C/D | **A+D** autonome + freeze | — | oui | ARBITRATE |
| D-T-A6-04 | Claim vs ClaimEvaluation | séparés / fusion v1 | séparés sémantiquement ; schema ClaimEvaluation prioritaire (R-M01) | R-M01 | oui | ARBITRATE |
| D-T-A6-05 | Règles Critical | A–D Q5 | **D** matrice type×Critical | — | partiel | ARBITRATE |
| D-T-A6-06 | Autorité confirmation | N-levels / Morris | N≥ + Morris structurants | — | non | ARBITRATE |
| D-T-A6-07 | Modèle maturity | calculé/proposé/confirmé | proposé puis confirmé ; downgrade | — | partiel | ARBITRATE |
| D-T-A6-08 | Réserves dans maturity | ignore / bloquent / affichent | **bloquent** niveau correspondant | B5 | non | ARBITRATE |
| D-T-A6-09 | Stockage / rétention | tech candidates | **non choisi** ; cadrer bornes | U-M02 | oui | ARBITRATE |
| D-T-A6-10 | Frontière T-A6 / T-A7 | cutover hors T-A6 | T-A7 hors scope | — | oui | ARBITRATE |
| D-T-A6-11 | Automatisation L0–L5 | bornes | L0–L3 défaut ; L4 sous gates ; L5 hors | — | oui | ARBITRATE |
| D-T-A6-12 | Sortie T-A6 | artifacts + reco gate | refs LPS + review verdict ; **pas** auto next cycle | B5 | oui | ARBITRATE |

**Aucune option validée dans ce document.**

---

## 15. Recommandations candidates (synthèse)

1. Partir des schemas Evidence / ReviewBundle / Maturity déjà présents ; enrichir ClaimEvaluation (R-M01) avant delivery.
2. Ingestion explicite Attempt → Evidence (I17) ; jamais Attempt.status comme Evidence.
3. Freeze ReviewBundle avant tout verdict.
4. Système propose ; humain confirme Critical et maturité.
5. Réserves OPEN restent OPEN malgré PASS.
6. Hybride stockage (D-T-A6-02) sans choisir vendor.
7. T-A7 et exécution réelle hors scope.

---

## 16. Décisions validées nouvelles

**Aucune.**
Décisions héritées utiles (non re-votées ici) : M-OA-07 séparation Evidence/ReviewBundle/ClaimEvaluation ; M-OA-08 maturité sans auto-promote ; T-A5 D10 Evidence/Claim = T-A6.

---

## 17. Stop conditions (cadrage / futur delivery)

- Tentative de valider une option sans Morris ;
- Modification modeled/runtime dans un cycle cadrage ;
- Fermeture de réserve ;
- Traitement NOT_PROVEN comme PASS ;
- Auto-promotion maturité ;
- Surface d’exécution réelle ;
- Ouverture T-A7 implicite ;
- Evidence sans binding ;
- Bundle non gelé avant verdict.

---

## 18. Anti-claims

- T-A6 **non** validé ;
- modeled **non** enrichi / **non** ready delivery ;
- storage Evidence **non** décidé ;
- maturity model **non** validé runtime ;
- automatisation **non** autorisée au-delà du cadrage ;
- T-A7 **non** ouvert ;
- Option A **non** complète ;
- production ready **non** ;
- exécution réelle **non** autorisée ;
- réserves **non** fermées ;
- push / PR / merge **non** autorisés par ce cycle.

---

## 19. Gate suivant candidat

`GO ARBITRATE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A`
(**NOT consumed**)

---

## 20. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE MODELED OR DELIVERY`

## Contenu complet — README.md

# T-A6 — Evidence, Review, Claims and Maturity (Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Titre cycle** | Evidence, Review, Claims and Maturity |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **Base / origin/main** | `b25c20e6eb131cba7dc811697b763fd033f3f652` (PR #266 T-A5 merge) |
| **Modeled / runtime** | **NONE** modifié — cadrage documentaire uniquement |
| **Push / PR / merge projet** | **NONE** — require Morris GO |
| **Statut pack** | **FRAMING COMPLETED** |
| **Horodatage** | 2026-07-26 00:05:48 CEST (+0200) |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE MODELED OR DELIVERY` |
| **Gate suivant** | `GO ARBITRATE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

## Objectif

Cadrer la frontière fonctionnelle et architecturale permettant de transformer les résultats techniques T-A5 en éléments de preuve examinables (Evidence, ReviewBundle, ClaimEvaluation, maturité, dette), sans confondre résultat technique, preuve, claim, décision humaine et autorisation d’exécution.

## Périmètre

- Définitions épistémiques candidates ;
- Frontière T-A5 → T-A6 ;
- Objets / lifecycles / commandes / événements candidats ;
- Invariants, autorité, sécurité/RGPD, stockage/volumétrie ;
- Automatisation L0–L5 bornée ;
- Risques et réserves (existantes + candidates) ;
- Arbitrages Morris D-T-A6-01…12.

## Hors périmètre

- Enrichissement schema / runtime / tests ;
- SQL, API, UI, worker, scheduler ;
- Adapter réel / exécution réelle ;
- Validation d’options ;
- Fermeture de réserves ;
- T-A7 ;
- Push / PR / merge.

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) — cadrage complet arbitrable

## Décisions validées (nouvelles)

**Aucune.**

Héritages utiles (non re-votés) : M-OA-07, M-OA-08, T-A5 D10 (Evidence/Claim = T-A6).

## Arbitrages ouverts

D-T-A6-01 … D-T-A6-12 — voir [01-framing.md](./01-framing.md) §14.

## Réserves

### Existantes (OPEN)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (HARD exécution réelle Critical) |
| R-T-A3-2 | **OPEN** (HARD exécution réelle) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** (ClaimEvaluation schema) |
| U-M02 | **OPEN** (stockage Evidence) |

### Candidates (non validées)

R-T-A6-1 … R-T-A6-9 — voir [01-framing.md](./01-framing.md) §13.2.

## Anti-claims

- Pas T-A6 validé / modeled ready / delivery ready / production ready
- Pas storage décidé / maturity runtime validée / automatisation autorisée
- Pas T-A7 ouvert / Option A complète / exécution réelle
- Pas réserves fermées / push / PR / merge ce cycle

## Modeled de référence (lecture seule)

- `projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/08-evidence-review-bundle-maturity-and-debt-model.md`
- `schemas/evidence/evidence.schema.json`
- `schemas/evidence/review-bundle.schema.json`
- `schemas/maturity/maturity-assessment.schema.json`

## Bornes cycle

- Push projet : **NON**
- PR : **NON**
- Merge : **NON**
- Modeled modifié : **NON**
- Runtime modifié : **NON**
- T-A7 ouvert : **NON**
- Adapter réel : **absent**
- Exécution réelle : **absente**

## Working tree final

Branche T-A6 @ `40e92336b3e646f03354c7912c705b1d62b68097` ; tracked clean ; `?? .tmp-sfia-review/`

## Verdict exact

SFIA STUDIO V3-NATIVE OPTION A T-A6 FRAMING COMPLETED — MORRIS ARBITRATION REQUIRED BEFORE MODELED OR DELIVERY

## Gate suivant (non consommé)

`GO ARBITRATE T-A6 — SFIA STUDIO V3-NATIVE — OPTION A`
