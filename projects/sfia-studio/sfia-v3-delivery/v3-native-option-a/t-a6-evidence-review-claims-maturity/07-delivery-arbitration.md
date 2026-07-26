# 07 — T-A6 Delivery Arbitration Pack

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A6 — Evidence / ReviewBundle / Claims / Maturity |
| **Cycle** | Arbitrage / delivery (Critical) |
| **Gate** | `GO ARBITRATE T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Base** | `origin/main` @ `b25c20e6eb131cba7dc811697b763fd033f3f652` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a6-evidence-review-claims-maturity` |
| **HEAD initial** | `c92b49fbc425e5f8d030dd91f6e55c9837d62f25` |
| **Horodatage** | 2026-07-26 02:17:58 CEST (+0200) |
| **Source cadrage** | `06-delivery-framing.md` @ `79c1a6e` / HEAD record `c92b49f` |
| **Modeled / runtime** | **NONE** modifié |
| **Push / PR / merge** | **NONE** |
| **Décisions validées nouvelles** | **aucune** |
| **Statut** | **DELIVERY ARBITRATION PACK PREPARED** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A6 DELIVERY ARBITRATION PACK PREPARED — MORRIS DECISIONS REQUIRED` |
| **Gate suivant** | `GO DECIDE T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |

---

## 1. Autorité & CKC

Gate d’arbitrage consommé. Cursor **recommande** ; Morris **décide**. Aucune option n’est APPROVED / VALIDATED / DECIDED dans ce cycle.

| Item | Valeur |
|------|--------|
| Cycle | arbitrage delivery |
| CKC path | `method/sfia-fast-track/documentation/capitalization/cycle-knowledge-contracts/pilots/03-architecture-technique.md` |
| Statut | candidate |
| Usage | experimental cognitive guidance |
| `executionAuthority` | **false** |
| Fallback | `02-conception-fonctionnelle.md` |

---

## 2. Sources

- Handoff framing blob `6f8fb681…` — DELIVERY FRAMING COMPLETED
- Delivery T-A6 01–06 (surtout `06-delivery-framing.md`)
- Décisions modeled D-T-A6-01…12 (`03-decisions.md`)
- Modeled Evidence/RB/Claim/Maturity validés
- Runtime T-A3–T-A5 lecture seule (AuthorityResolver, OCC, AuditSink, barrels)
- Framing T-A5 `05-runtime-framing.md`

---

## 3. Principes non renégociables (hérités)

Evidence indépendante · Attempt source ≠ owner · hybride logique · U-M02 OPEN · aucun vendor · ReviewBundle freeze · Claim/ClaimEvaluation sémantique distinct · PASS/FAIL/NOT_PROVEN/WAIVED · Critical humain · structural Morris · N3 ≠ Morris · self-review interdit · maturity propose→confirm · `autoPromoted=false` · PASS ≠ close reserve · maturity ≠ executionAuthority · pas d’auto next cycle · T-A6 ≠ T-A7 · L0–L3 / L4 gated / L5 out.

---

## 4. Doctrine d’arbitrage

Pour chaque D-T-A6-DEL :

1. reformuler · 2. options distinctes · 3. éliminer incompatibles · 4. analyser valeur/simplicité/dette/Critical/réversibilité/tests/sécu/RGPD/perf/obs/T-A3–5/réserves · 5. **une** recommandation · 6. conséquences · 7. formulation Morris · 8. statut **RECOMMENDED — NOT DECIDED**.

Réponses Morris attendues :

```
D-T-A6-DEL-xx = OPTION X — APPROVED
D-T-A6-DEL-xx = REJECTED — [motif]
D-T-A6-DEL-xx = DEFERRED — [condition]
```

---

## 5. Décisions D-T-A6-DEL-01 … 10

### D-T-A6-DEL-01 — Frontières modules runtime

| Champ | Contenu |
|-------|---------|
| **Décision requise** | Où placer le code runtime T-A6 ? |
| **Options** | **A** module unique `app/lib/oa/evidence-review/**` · **B** quatre modules séparés · **C** étendre `execution-attempt` |
| **Éliminées** | **C** — viole ownership T-A5/T-A6 (D-T-A6-01/10) ; Attempt ne doit pas porter Evidence/Claim |
| **Challenge A vs B** | A : wiring simple, sous-domaines internes, scission future possible. B : testabilité locale mais multi-barrels, dette wiring, contrats publics prématurés |
| **Recommandation** | **A** |
| **Impacts** | barrel `index.ts` unique ; sous-dossiers `domain/{evidence,review-bundle,claim-evaluation,maturity}` |
| **Dette** | module plus large ; mitigée par découpage D1→D5 interne |
| **Risques** | god-module si pas de frontières internes — mitiger par dossiers + use-cases |
| **Réversibilité** | scission B ultérieure possible sans contrat public prématuré |
| **Testabilité** | élevée (comme T-A5) |
| **Dépendances** | DEL-03, DEL-09 |
| **Réserves** | aucune nouvelle |
| **Statut** | **RECOMMENDED — NOT DECIDED** |
| **Formulation Morris** | `D-T-A6-DEL-01 = OPTION A — APPROVED` |

---

### D-T-A6-DEL-02 — Ownership ClaimEvaluation runtime

| Champ | Contenu |
|-------|---------|
| **Décision requise** | ClaimEvaluation est-il un agrégat autonome ? |
| **Options** | **A** agrégat autonome OCC · **B** entité sous ReviewBundle · **C** VO éphémère |
| **Éliminées** | **C** — perte audit/historique/waiver. **B** — risque mutation bundle gelé / concurrence freeze↔confirm (D-T-A6-03) |
| **Recommandation** | **A** |
| **Impacts** | repo dédié ; lien `reviewBundleId`+`version` exacts ; confirm indépendant du freeze |
| **Dette** | 4e repository |
| **Risques** | cross-aggregate (mitigé DEL-06) |
| **Réversibilité** | moyenne |
| **Testabilité** | élevée (Critical isolé) |
| **Dépendances** | DEL-05, DEL-06, D3 |
| **Réserves** | lie R-T-A6-DEL-C1 (Evidence status join) |
| **Statut** | **RECOMMENDED — NOT DECIDED** |
| **Formulation** | `D-T-A6-DEL-02 = OPTION A — APPROVED` |

---

### D-T-A6-DEL-03 — Organisation application services

| Champ | Contenu |
|-------|---------|
| **Décision requise** | Style d’application layer ? |
| **Options** | **A** use-cases fichiers (T-A5) · **B** quatre façades classes · **C** orchestrateur unique |
| **Éliminées** | **C** — god-orchestrator, Critical opaque, non aligné T-A5 |
| **Challenge A vs B** | A aligné Attempt ; regroupements logiques documentaires OK sans façade mutable. B ajoute indirection sans gain v1 |
| **Recommandation** | **A** (structurante **non bloquante** si A/B proches, mais arbitrable) |
| **Impacts** | un fichier par commande ; `RecommendNextGate` lecture seule |
| **Dette** | faible |
| **Risques** | faible |
| **Réversibilité** | haute |
| **Testabilité** | haute |
| **Dépendances** | DEL-01 |
| **Réserves** | — |
| **Statut** | **RECOMMENDED — NOT DECIDED** |
| **Formulation** | `D-T-A6-DEL-03 = OPTION A — APPROVED` |

---

### D-T-A6-DEL-04 — Contrat d’ingestion T-A5

| Champ | Contenu |
|-------|---------|
| **Décision requise** | Comment T-A6 obtient une Evidence depuis Attempt ? |
| **Options** | **A** `IngestExecutionAttemptEvidence` explicite · **B** hook auto `RecordResult` · **C** polling Attempt |
| **Éliminées** | **B** — auto-validation implicite (`succeeded`→Evidence/PASS) ; crée dépendance T-A5→T-A6. **C** — dette, latence, pas d’audit explicite |
| **Invariants** | Attempt source≠owner · T-A6→T-A5 RO only · pas de verified auto · retry ≠ replace Evidence gelée · idempotence+audit |
| **Recommandation** | **A** |
| **Impacts** | port `ExecutionAttemptReader` ; commande D1 |
| **Dette** | faible |
| **Risques** | Critical si B — éliminé |
| **Réversibilité** | haute |
| **Testabilité** | adversarial no-auto-PASS |
| **Dépendances** | DEL-01, D1 |
| **Réserves** | — |
| **Statut** | **RECOMMENDED — NOT DECIDED** |
| **Formulation** | `D-T-A6-DEL-04 = OPTION A — APPROVED` |

---

### D-T-A6-DEL-05 — Repository et OCC

| Champ | Contenu |
|-------|---------|
| **Décision requise** | Modèle de concurrence ? |
| **Options** | **A** `expectedVersion` par agrégat · **B** lock optimiste global · **C** sans OCC v1 |
| **Éliminées** | **C** — interdit (double freeze/confirm). **B** — couplage artificiel, pas aligné T-A4/T-A5 |
| **Recommandation** | **A** |
| **Impacts** | VERSION_CONFLICT / CONCURRENT_MODIFICATION · idempotency index · versions monotones |
| **Dette** | alignée T-A5 |
| **Risques** | échec partiel cross-aggregate → DEL-06 |
| **Réversibilité** | moyenne |
| **Testabilité** | double freeze / double confirm / retry |
| **Dépendances** | DEL-02, DEL-06 |
| **Réserves** | — |
| **Statut** | **RECOMMENDED — NOT DECIDED** |
| **Formulation** | `D-T-A6-DEL-05 = OPTION A — APPROVED` |

---

### D-T-A6-DEL-06 — Invariants cross-aggregate

| Champ | Contenu |
|-------|---------|
| **Décision requise** | Comment assurer Evidence+RB+Claim+Maturity sans saga ? |
| **Options** | **A** vérifs synchrones application + audit · **B** saga/compensation · **C** atomicité cross-aggregate prétendue |
| **Éliminées** | **C** — mensonge technique. **B** — hors v1 (complexité) sauf justification structurante absente |
| **Précisions A** | ordre lecture RO puis écriture agrégat cible · fail-closed · retry idempotent · pas de compensation magique · Evidence status avant PASS · RB version avant confirm · HARD reserve avant ConfirmMaturity |
| **Recommandation** | **A** |
| **Impacts** | application services lisent plusieurs repos |
| **Dette** | R-T-A6-DEL-C1 (jointure status) tracked |
| **Risques** | fenêtre concurrente — OCC + fail-closed |
| **Réversibilité** | haute (B possible plus tard) |
| **Testabilité** | adversarial unavailable Evidence → no PASS |
| **Dépendances** | DEL-02, DEL-05, DEL-07 |
| **Réserves** | R-T-A6-DEL-C1 |
| **Statut** | **RECOMMENDED — NOT DECIDED** |
| **Formulation** | `D-T-A6-DEL-06 = OPTION A — APPROVED` |

---

### D-T-A6-DEL-07 — Downgrade de maturité

| Champ | Contenu |
|-------|---------|
| **Décision requise** | Comment réagir à Evidence/Claim invalidés ? |
| **Options** | **A** commande explicite + supersession · **B** auto-downgrade · **C** mutation in-place |
| **Éliminées** | **B** et **C** — incompatibles D-T-A6-07 (pas d’auto-promotion/mutation silencieuse) |
| **Recommandation** | **A** |
| **Impacts** | invalidation → recommandation audit ou `DowngradeMaturity` · historique · Morris si structurant · jamais `executionAuthority` |
| **Dette** | faible |
| **Risques** | oubli de downgrade — tests + RecommendNextGate |
| **Réversibilité** | haute |
| **Testabilité** | supersession + downgradeReason |
| **Dépendances** | DEL-06, D4 |
| **Réserves** | — |
| **Statut** | **RECOMMENDED — NOT DECIDED** |
| **Formulation** | `D-T-A6-DEL-07 = OPTION A — APPROVED` |

---

### D-T-A6-DEL-08 — Payloads en v1

| Champ | Contenu |
|-------|---------|
| **Décision requise** | Où vivent les payloads Evidence v1 ? |
| **Options** | **A** fake / metadata-only · **B** disque local · **C** S3/Postgres/fournisseur |
| **Éliminées** | **C** — U-M02 OPEN ; aucun vendor (D-T-A6-09). **B** — hors scope v1 (pas de besoin démontré ; surface sécu) |
| **Recommandation** | **A** |
| **Impacts** | `EvidencePayloadPort` minimal dès D1 (digest/availability fixtures) · payload non exécuté · fixtures sans secrets |
| **Dette** | U-M02 reste ouverte |
| **Risques** | vendor creep — stop condition |
| **Réversibilité** | complète |
| **Testabilité** | FakePayload unavailable/digest |
| **Dépendances** | D1, U-M02 |
| **Réserves** | U-M02 ; R-T-A6-DEL-C3 (bornes) |
| **Statut** | **RECOMMENDED — NOT DECIDED** |
| **Formulation** | `D-T-A6-DEL-08 = OPTION A — APPROVED` |

---

### D-T-A6-DEL-09 — Découpage des incréments

| Champ | Contenu |
|-------|---------|
| **Décision requise** | Ordre des tranches delivery ? |
| **Options** | **A** D1→D2→D3→D4→D5 · **B** big-bang · **C** Claims avant freeze RB |
| **Éliminées** | **C** — faux PASS possible sans freeze (D-T-A6-03). **B** — surface Critical maximale, stop difficile |
| **Recommandation** | **A** |
| **Découpage** | D1 Evidence · D2 ReviewBundle · D3 ClaimEvaluation · D4 Maturity · D5 coordination/E2E/non-régression |
| **Impacts** | stop après chaque tranche · faux PASS impossible avant D2 |
| **Dette** | wiring progressif acceptable |
| **Risques** | faible vs B |
| **Réversibilité** | haute par tranche |
| **Testabilité** | par tranche |
| **Dépendances** | DEL-01…08 |
| **Réserves** | — |
| **Statut** | **RECOMMENDED — NOT DECIDED** |
| **Formulation** | `D-T-A6-DEL-09 = OPTION A — APPROVED` |

---

### D-T-A6-DEL-10 — Gate vers implémentation

| Champ | Contenu |
|-------|---------|
| **Décision requise** | Quand autoriser le code runtime T-A6 ? |
| **Options** | **A** ARBITRATE puis **DECIDE** delivery avant implement · **B** GO IMPLEMENT direct · **C** fusion fermeture R-M01 |
| **Éliminées** | **C** — R-M01 gate Morris **distinct**. **B** — saute décisions DEL structurantes |
| **Recommandation** | **A** |
| **Impacts** | gate suivant `GO DECIDE T-A6 DELIVERY` ; puis gate implement séparé ; push/PR/merge gates séparés ; fake-only |
| **Dette** | process |
| **Risques** | fusion R-M01 — éliminé |
| **Réversibilité** | n/a |
| **Testabilité** | n/a |
| **Dépendances** | R-M01 |
| **Réserves** | R-M01 OPEN |
| **Statut** | **RECOMMENDED — NOT DECIDED** |
| **Formulation** | `D-T-A6-DEL-10 = OPTION A — APPROVED` |

---

## 6. Synthèse recommandations (GO groupé candidat — non présumé)

| ID | Reco | Formulation exacte |
|----|------|-------------------|
| D-T-A6-DEL-01 | A | `D-T-A6-DEL-01 = OPTION A — APPROVED` |
| D-T-A6-DEL-02 | A | `D-T-A6-DEL-02 = OPTION A — APPROVED` |
| D-T-A6-DEL-03 | A | `D-T-A6-DEL-03 = OPTION A — APPROVED` |
| D-T-A6-DEL-04 | A | `D-T-A6-DEL-04 = OPTION A — APPROVED` |
| D-T-A6-DEL-05 | A | `D-T-A6-DEL-05 = OPTION A — APPROVED` |
| D-T-A6-DEL-06 | A | `D-T-A6-DEL-06 = OPTION A — APPROVED` |
| D-T-A6-DEL-07 | A | `D-T-A6-DEL-07 = OPTION A — APPROVED` |
| D-T-A6-DEL-08 | A | `D-T-A6-DEL-08 = OPTION A — APPROVED` |
| D-T-A6-DEL-09 | A | `D-T-A6-DEL-09 = OPTION A — APPROVED` |
| D-T-A6-DEL-10 | A | `D-T-A6-DEL-10 = OPTION A — APPROVED` |

**Toutes : RECOMMENDED — NOT DECIDED.** Morris peut APPROVE / REJECT / DEFER individuellement ou grouper.

---

## 7. Matrice de cohérence globale

| Question | Réponse d’arbitrage |
|----------|---------------------|
| Module unique + 4 repos dette excessive ? | Non en v1 — pattern T-A5 multi-ports dans un module |
| Claim autonome complique D3 ? | Coût repo acceptable vs risque freeze mutation (B) |
| D1→D5 le plus simple ? | Oui vs big-bang ; Claims avant freeze éliminé |
| RecommendNextGate lecture seule ? | **Oui** — pas d’auto next cycle / T-A7 |
| Façade publique unique ? | Barrel `createInMemoryEvidenceReviewServices` utile ; pas de façade mutable massive |
| EvidencePayload dès D1 ? | **Oui** minimal metadata-only (DEL-08 A) ; pas de disque |

**Contradiction détectée :** aucune entre les dix reco A.

---

## 8. Architecture cible candidate (si Morris APPROVE A×10)

```
app/lib/oa/evidence-review/**  (module unique)
  use-cases fichiers
  Evidence · RB · ClaimEvaluation · Maturity (OCC chacun)
  ExecutionAttemptReader RO
  EvidencePayloadPort fake
  AuthorityResolver T-A3
  AuditSink memory
```

Ingestion explicite · fake-only · D1→D5 · pas T-A7.

---

## 9. Autorité / Critical / automatisation / tests / sécu / obs

Inchangés vs `06-delivery-framing.md` §17–22 — rappel :

- Critical : humain ; structural : Morris ; N3 ≠ Morris
- L0–L3 v1 ; L4 gated ; L5 out
- Tests domaine/application/fake/non-régression
- Secrets interdits ; payload non exécuté ; U-M02 OPEN
- Audit conceptuel ; pas de stack obs

---

## 10. Réserves existantes (OPEN)

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

R-T-A6-1…9 : risques/dettes — pas CREATE VALIDATED.

### R-M01

Schema ClaimEvaluation validé. Fermeture **non** automatique. `GO DECIDE T-A6 DELIVERY` **ne ferme pas** R-M01. Gate Morris **séparé** requis.

---

## 11. Réserves delivery candidates (NOT VALIDATED)

| ID | Risque | Doublon ? | Reco traitement | Owner | Fermeture | Blocker delivery? | Blocker exéc. réelle? |
|----|--------|-----------|-----------------|-------|-----------|-------------------|------------------------|
| R-T-A6-DEL-C1 | Evidence status join pour PASS | partiel R-T-A6 sémantique | **TRACK AS DEBT** (enforce in D3 app) | T-A6 D3 | tests adversarial PASS+unavailable | non si tests | non |
| R-T-A6-DEL-C2 | self-review runtime | narrative modeled | **TRACK AS DEBT** | T-A6 D3 | tests CLAIM_SELF_REVIEW | non si tests | non |
| R-T-A6-DEL-C3 | bornes taille/nombre | D-T-A6-09 | **TRACK AS DEBT** / policy D1 | T-A6 D1 | policy constants + tests | non (fake) | oui si payload réel |
| R-T-A6-DEL-C4 | LPS satellite | **B5** | **MERGE INTO EXISTING** → B5 | LPS/B5 | B5 closure | oui write LPS | selon B5 |

**Aucune CREATE VALIDATED.** Aucune fermeture.

---

## 12. Décisions validées nouvelles

**Aucune.**

---

## 13. Anti-claims

- Pas DELIVERY ARBITRATED / décisions VALIDATED
- Pas IMPLEMENTATION READY / runtime ready / production ready
- Pas R-M01 / U-M02 / B5 / R1 / R-T-A3-* fermées
- Pas vendor / stockage choisi
- Pas code / modeled / runtime modifié
- Pas T-A7 / exécution réelle / adapter réel
- Pas push / PR / merge

---

## 14. Stop conditions

Stop DECIDE/implement si : reco présentée comme APPROVED sans Morris · vendor · auto Critical · auto T-A7 · R-M01 fermée sans gate · code hors fake-only · dépendance T-A5→T-A6.

---

## 15. Gate suivant

`GO DECIDE T-A6 DELIVERY — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**)

Consommable uniquement avec choix Morris explicites D-T-A6-DEL-01…10.

Gate distinct pour fermer R-M01.

---

## 16. Verdict

`SFIA STUDIO V3-NATIVE OPTION A T-A6 DELIVERY ARBITRATION PACK PREPARED — MORRIS DECISIONS REQUIRED`
