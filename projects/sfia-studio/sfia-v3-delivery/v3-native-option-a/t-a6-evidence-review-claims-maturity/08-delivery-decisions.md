# 08 — T-A6 Delivery Decisions Materialization

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Cycle** | Décision / delivery (Critical) |
| **Gate** | `GO DECIDE T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `5cb63d12d91df0260838376cdcc24091dce77827` |
| **Horodatage** | 2026-07-26 02:25:02 CEST (+0200) |
| **Source arbitration** | `07-delivery-arbitration.md` + handoff blob `ccf76472cd698e9843e73e80f81348994002932f` |
| **Modeled / runtime** | **NONE** modifié |
| **Push / PR / merge** | **NONE** |
| **Statut** | **DELIVERY DECISIONS APPROVED BY MORRIS** |
| **Architecture** | **DELIVERY ARCHITECTURE DECIDED — NOT IMPLEMENTED** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 DELIVERY DECISIONS RECORDED — IMPLEMENTATION REQUIRES MORRIS GO` |
| **Gate suivant** | `GO IMPLEMENT T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Autorité

Morris a fourni des choix **explicites** pour D-T-A6-DEL-01…10.

Ce cycle **enregistre** ces décisions dans Git. Il ne les invente pas, ne les élargit pas, et n’ajoute aucune décision supplémentaire (y compris sur les réserves candidates).

| Rôle | Autorité |
|------|----------|
| Morris | décisions D-T-A6-DEL-01…10 |
| Cursor | transcription documentaire fidèle |
| Git | commit local + handoff L3 |

### CKC

| Item | Valeur |
|------|--------|
| Cycle | décision / delivery |
| Path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| `executionAuthority` | **false** |
| Fallback | `02-conception-fonctionnelle.md` |

---

## 2. Décisions héritées (non re-votées)

| ID | Contenu | Source |
|----|---------|--------|
| D-T-A6-01…12 | Evidence / RB / Claim / Maturity / autorité / stockage logique / T-A7 / auto / output | `03-decisions.md` |
| M-OA-07 / M-OA-08 | Evidence ≠ RB ≠ ClaimEvaluation ; `autoPromoted=false` | modeled |
| T-A5 D10 | Evidence/Claim/maturity = T-A6 | T-A5 |

---

## 3. Décisions Morris D-T-A6-DEL-01 … 10

Chaque décision porte le statut **`APPROVED BY MORRIS`**.

### D-T-A6-DEL-01 — Frontière module runtime

**Formulation Morris exacte :**
`D-T-A6-DEL-01 = OPTION A — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- futur runtime T-A6 dans un module unique `app/lib/oa/evidence-review/**` ;
- sous-domaines internes : Evidence · ReviewBundle · ClaimEvaluation · MaturityAssessment ;
- barrel public unique ;
- aucune extension de l’ownership `execution-attempt` ;
- scission future possible, **non** décidée en v1.

**Non validé :** création du module · scission en 4 packages · implémentation.

---

### D-T-A6-DEL-02 — Ownership ClaimEvaluation

**Formulation :**
`D-T-A6-DEL-02 = OPTION A — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- ClaimEvaluation = agrégat autonome ;
- persistence et OCC propres ;
- lien immuable `reviewBundleId` + `reviewBundleVersion` ;
- aucune mutation du ReviewBundle gelé ;
- historique, waiver, dispute, confirmation conservés.

**Non validé :** code repository · schema runtime.

---

### D-T-A6-DEL-03 — Organisation application services

**Formulation :**
`D-T-A6-DEL-03 = OPTION A — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- use cases spécialisés par fichier ;
- alignement conventions T-A5 ;
- regroupements logiques sans façade mutable massive ;
- aucun god-orchestrator ;
- `RecommendNextGate` borné, **lecture seule**.

**Non validé :** fichiers application concrets.

---

### D-T-A6-DEL-04 — Ingestion T-A5

**Formulation :**
`D-T-A6-DEL-04 = OPTION A — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- commande explicite `IngestExecutionAttemptEvidence` ;
- T-A6 lit T-A5 via port read-only ;
- aucune dépendance T-A5 → T-A6 ;
- `ExecutionAttempt.succeeded` ≠ Evidence verified ≠ PASS ;
- ingestion idempotente et auditée ;
- retry T-A5 ne remplace pas silencieusement une Evidence gelée.

**Non validé :** adapter AttemptReader · wiring runtime.

---

### D-T-A6-DEL-05 — Repository et OCC

**Formulation :**
`D-T-A6-DEL-05 = OPTION A — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- `expectedVersion` par agrégat ;
- version monotone ;
- index d’idempotence ;
- conflits explicites : `CONCURRENT_MODIFICATION` · `VERSION_CONFLICT` · `IDEMPOTENCY_CONFLICT` ;
- aucune transaction globale ; aucune absence d’OCC en v1.

**Non validé :** stores mémoire concrets.

---

### D-T-A6-DEL-06 — Invariants cross-aggregate

**Formulation :**
`D-T-A6-DEL-06 = OPTION A — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- contrôles synchrones dans les application services ;
- fail-closed + audit obligatoire ;
- ordre lecture/écriture explicite ;
- retry idempotent ;
- aucune atomicité cross-aggregate prétendue ;
- aucune saga en v1 ;
- Evidence disponible/vérifiée avant PASS ;
- ReviewBundle gelé + version exacte avant ClaimEvaluation ;
- réserve HARD vérifiée avant confirmation de maturité.

**Non validé :** enforcement code · dette C1.

---

### D-T-A6-DEL-07 — Downgrade de maturité

**Formulation :**
`D-T-A6-DEL-07 = OPTION A — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- commande explicite de downgrade ;
- supersession + historique ;
- aucune mutation in-place ;
- aucun downgrade automatique ;
- autorité humaine ; Morris si niveau structurant ;
- maturité ≠ `executionAuthority`.

**Non validé :** use case runtime.

---

### D-T-A6-DEL-08 — Payloads v1

**Formulation :**
`D-T-A6-DEL-08 = OPTION A — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- adapters fake et metadata-only ;
- aucun payload réel persistant ;
- digest et disponibilité simulables ;
- payload jamais exécuté ;
- aucune donnée sensible dans les fixtures ;
- aucun disque, DB, object storage ou vendor ;
- **U-M02 reste OPEN**.

**Non validé :** technologie de stockage · fermeture U-M02.

---

### D-T-A6-DEL-09 — Découpage delivery

**Formulation :**
`D-T-A6-DEL-09 = OPTION A — APPROVED`

**Statut :** APPROVED BY MORRIS

**Découpage validé :**

| Tranche | Contenu |
|---------|---------|
| T-A6-D1 | Evidence core |
| T-A6-D2 | ReviewBundle |
| T-A6-D3 | ClaimEvaluation |
| T-A6-D4 | MaturityAssessment |
| T-A6-D5 | coordination et validation |

**Conséquences validées :**

- séquence D1 → D2 → D3 → D4 → D5 ;
- chaque tranche testable et réversible ;
- stop possible après chaque tranche ;
- aucun big-bang ;
- ClaimEvaluation pas avant règles de freeze ReviewBundle ;
- aucune tranche n’ouvre T-A7.

**Non validé :** lancement D1 · code des tranches.

---

### D-T-A6-DEL-10 — Gate vers implémentation

**Formulation :**
`D-T-A6-DEL-10 = OPTION A — APPROVED`

**Statut :** APPROVED BY MORRIS

**Conséquences validées :**

- arbitrage et décision delivery requis avant implémentation ;
- le présent gate valide les choix delivery ;
- il **ne lance pas** l’implémentation ;
- un nouveau GO Morris est requis pour implémenter ;
- fermeture de R-M01 = gate **séparé** ;
- push, PR et merge restent soumis à leurs propres gates.

**Non validé :** GO IMPLEMENT · fermeture R-M01.

---

## 4. Synthèse des 10 décisions

| ID | Formulation Morris | Statut |
|----|-------------------|--------|
| D-T-A6-DEL-01 | OPTION A — APPROVED | APPROVED BY MORRIS |
| D-T-A6-DEL-02 | OPTION A — APPROVED | APPROVED BY MORRIS |
| D-T-A6-DEL-03 | OPTION A — APPROVED | APPROVED BY MORRIS |
| D-T-A6-DEL-04 | OPTION A — APPROVED | APPROVED BY MORRIS |
| D-T-A6-DEL-05 | OPTION A — APPROVED | APPROVED BY MORRIS |
| D-T-A6-DEL-06 | OPTION A — APPROVED | APPROVED BY MORRIS |
| D-T-A6-DEL-07 | OPTION A — APPROVED | APPROVED BY MORRIS |
| D-T-A6-DEL-08 | OPTION A — APPROVED | APPROVED BY MORRIS |
| D-T-A6-DEL-09 | OPTION A — APPROVED | APPROVED BY MORRIS |
| D-T-A6-DEL-10 | OPTION A — APPROVED | APPROVED BY MORRIS |

**Aucune recommandation additionnelle transformée en décision.**

---

## 5. Architecture delivery désormais décidée

**Statut exact :** `DELIVERY ARCHITECTURE DECIDED — NOT IMPLEMENTED`

| Élément | Décidé |
|---------|--------|
| Module | `app/lib/oa/evidence-review/**` (non créé) |
| Agrégats | Evidence · ReviewBundle · ClaimEvaluation · MaturityAssessment |
| Application | use cases spécialisés par fichier |
| Ports | EvidenceRepository · ReviewBundleRepository · ClaimEvaluationRepository · MaturityAssessmentRepository · EvidencePayloadPort fake · ExecutionAttemptReader RO · AuthorityResolver T-A3 · AuditSink · Clock · IdGenerator |
| Adapters | fake / mémoire uniquement |
| Persistence | mémoire + OCC ; **pas** réelle |
| API / UI / worker | **aucune** |
| T-A7 | **non** lancé |

Ne pas présenter comme IMPLEMENTED / VALIDATED / ADOPTED.

---

## 6. Frontières

| Frontière | Règle décidée |
|-----------|---------------|
| T-A5 → T-A6 | lecture seule via AttemptReader ; ingestion explicite |
| T-A6 → T-A5 | **interdit** en dépendance inverse |
| T-A6 / T-A7 | aucune commande LaunchT-A7 |
| Attempt | source ≠ owner Evidence |
| Freeze | obligatoire avant Claim PASS / CompleteReview |

---

## 7. OCC, idempotence, cross-aggregate

- OCC `expectedVersion` par agrégat
- idempotency keys + index
- erreurs `CONCURRENT_MODIFICATION` · `VERSION_CONFLICT` · `IDEMPOTENCY_CONFLICT`
- invariants cross-aggregate = contrôles synchrones fail-closed (pas de saga v1)

---

## 8. Autorité / Critical / automatisation

| Acteur | Autorisé | Interdit |
|--------|----------|----------|
| Système | proposition ; contrôles bornés | Critical/structural ; fermer réserve ; Morris ; authz exécution |
| Agent T-A5 | source technique | conformité / Claim confirmé |
| N1/N2/N3 | revue selon scope | N3 ≠ Morris |
| Morris | structurants | — |
| Service technique | artefact | juger conformité |

Automatisation : L0–L3 v1 · L4 hors v1 sauf gate · L5 out.
Interdit : auto-confirm Critical/structural · auto-close réserve · auto-promote maturity · auto T-A7 · exécution réelle.

---

## 9. Stratégie de tests future (non exécutée)

Domaine · application · intégration fake · non-régression T-A3–T-A5 + modeled T-A6.
Aucun test créé ce cycle.

---

## 10. Sécurité / RGPD / observabilité

Secrets interdits · payload non exécuté · metadata≠payload · legal hold ≠ effacement · U-M02 OPEN.
Observabilité conceptuelle (AuditSink) — pas de stack.

---

## 11. Réserves existantes (OPEN — inchangées)

| ID | Statut |
|----|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** HARD |
| R-T-A3-2 | **OPEN** HARD |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-M01 | **OPEN** — VALIDATION SATISFIED — CLOSURE REQUIRES MORRIS DECISION |
| U-M02 | **OPEN** |

### R-M01

Ce gate delivery **ne ferme pas** R-M01 · ne vaut pas gate de fermeture · n’empêche pas la préparation future D1 fake-only.
Gate Morris **séparé** requis pour fermeture.

---

## 12. Réserves candidates delivery

Le GO approuve **uniquement** D-T-A6-DEL-01…10.
Il n’approuve **pas** le traitement des candidates.

| ID | Traitement candidat | Statut |
|----|---------------------|--------|
| R-T-A6-DEL-C1 | TRACK AS DEBT | **RECOMMENDED — NOT VALIDATED** |
| R-T-A6-DEL-C2 | TRACK AS DEBT | **RECOMMENDED — NOT VALIDATED** |
| R-T-A6-DEL-C3 | TRACK AS DEBT | **RECOMMENDED — NOT VALIDATED** |
| R-T-A6-DEL-C4 | MERGE INTO B5 | **RECOMMENDED — NOT VALIDATED** |

Aucune CREATE VALIDATED · aucune fusion C4→B5 · aucune fermeture.

---

## 13. Dettes

| Dette | Lien |
|-------|------|
| Implémentation D1–D5 | DEL-09 / gate IMPLEMENT |
| Evidence status join PASS | C1 |
| Self-review runtime | C2 |
| Bornes payload | C3 |
| LPS satellite | C4 / B5 |
| Stockage physique | U-M02 |
| Fermeture R-M01 | gate Morris séparé |

---

## 14. Anti-claims

- Pas IMPLEMENTATION READY / runtime implemented / runtime validated
- Pas delivery complete / production ready
- Pas R-M01 fermée · pas réserves candidates validées · pas U-M02 fermée
- Pas stockage physique décidé · pas vendor
- Pas T-A7 · pas exécution réelle · pas adapter réel
- Pas code / modeled / runtime modifié
- Pas push / PR / merge
- Architecture **DECIDED** ≠ **IMPLEMENTED** ≠ **VALIDATED** ≠ **ADOPTED**

---

## 15. Stop conditions

- Transcrire une décision absente du GO Morris
- Transformer C1–C4 en réserve validée
- Fermer B5/R1/R-T-A3/R-M01/U-M02
- Choisir un vendor
- Créer du code / ouvrir T-A7
- Présenter l’architecture comme implémentée

---

## 16. Gate suivant candidat

`GO IMPLEMENT T-A6 DELIVERY D1 — SFIA STUDIO V3-NATIVE — OPTION A`
(**NOT consumed**)

Périmètre attendu : **T-A6-D1 — Evidence core** uniquement · fake-only · mémoire.
Gate distinct pour fermer R-M01.

---

## 17. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 DELIVERY DECISIONS RECORDED — IMPLEMENTATION REQUIRES MORRIS GO`
