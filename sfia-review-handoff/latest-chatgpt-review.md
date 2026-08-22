# SFIA Studio — Product Completion — W2 Delivery Readiness Qualification — FULL Review Pack

**Timestamp (Europe/Paris):** 2026-08-23 00:57:44 CEST
**Cycle / profile / typology:** 8 — Delivery readiness · CRITICAL · DOC
**Morris GO:** GO MORRIS — START W2 DELIVERY READINESS QUALIFICATION — W2-G1 PREPARATION ONLY — REPO-FIRST — NO CODE — NO DELIVERY — NO REAL
**Scope:** W2 readiness document only · no implementation · no Git transport project · no merge

---

## 1. VERDICT

**W2 READINESS QUALIFIED — MACRO SCOPE + ARCHITECTURE SUFFICIENT — BACKEND-READY / PRODUCT-INCOMPLETE — DELIVERY NOT YET AUTHORIZED — NO STRUCTURAL ARCHITECTURE GAP**

W2-G1 preparation candidate produced locally for ChatGPT source-locked review.

---

## 2. Git Truth

| Item | Value |
|---|---|
| repo | `/Users/morris/Projects/sfia-workspace` |
| branch | `docs/sfia-studio-product-completion-w2-delivery-readiness` |
| HEAD | `bfa60c2d2ec0d828a5bf703e3fcaec3f0bb76197` |
| origin/main | `bfa60c2d2ec0d828a5bf703e3fcaec3f0bb76197` |
| W1 Delivery PR | **#395 MERGED** · merge `ddd39181e9cf823a0d5055eefba7a873940c38c2` · push/main CI **`32589270526` SUCCESS** · **8/8 PASS** |
| W1 roadmap closure PR | **#397 MERGED** · merge `bfa60c2d2ec0d828a5bf703e3fcaec3f0bb76197` |
| new file | `projects/sfia-studio/product-completion/08-product-completion-wave-2-delivery-readiness.md` (430 lines) |
| staged / tracked mods | none (untracked candidate) |
| project commit/push | **NOT PERFORMED** (by design) |

---

## 3. Morris GO consumed

**GO MORRIS — START W2 DELIVERY READINESS QUALIFICATION — W2-G1 PREPARATION ONLY — REPO-FIRST — NO CODE — NO DELIVERY — NO REAL**

Objectives satisfied:
- Verify current Git truth post-W1 closure
- Audit Studio runtime post-W1
- Qualify W2 from validated backlog + runtime
- Produce single W2 readiness document with scope, inventory, classification, gaps, W2-G1/G2/G3 model, decision pack, tracks, critical path, parallelization, exit contracts, file mapping, risks, Fake/Real qualification
- Produce FULL Review Pack
- Publish bounded L3 canonical Review Handoff

Exclusions honored: no code · no runtime changes · no tests · no project staging/commit/push/PR/merge · no W2 Delivery · no REAL.

---

## 4. Executive summary

### W2 macro scope (backlog §9)
**Cognition, trajectoire et décision humaine** — Nora / trajectory / HumanDecision / EC inspect / Phase B start.

### Primary US in scope
US-P1-01 · US-P1-02 · US-P1-03 · US-P1-14 · US-P1-15 · US-P1-16

### W1 substrate received (PR #395)
- Trajectory SQLite durable (backend)
- Confirmation selective durability (backend)
- Epistemic selective SQLite (backend)
- Phase A package-bound CKC + product doctrine pin
- Bounded CKC→Nora seam (US-P0-08 proven)
- HumanDecision SQLite + DecisionBasis domain
- EC SQLite + M3 PREPARE/resolve

### Structuring gap (W2 critical)
**Trajectory durable exists in backend but is NOT wired into F2/product UI.** Dual truth: process-local `proposalStore` vs durable `ProjectTrajectory`. This blocks US-P1-01/02 and is the W2 critical path bottleneck.

### Secondary gaps
- EC inspect progressive disclosure incomplete (US-P1-03)
- Phase B beyond W1 seam (US-P1-14 / DK-08)
- Minimal history projection incomplete (US-P1-15)
- TD-C6-03 AuthorityVerificationReceipt missing (US-P1-16)
- Disclosure drift: `disclosures.ts` still claims trajectory/epistemic/confirmation process-local despite W1 SQLite

### Verdict binaries
| Question | Answer |
|---|---|
| Architecture sufficient? | **YES** |
| Structural architecture gap? | **NO** |
| W2 scope bounded? | **YES** |
| W2 Delivery authorized? | **NO** |
| W2-G2 Morris decision made? | **NO** |
| REAL | **ZERO** |

---

## 5. W2 gate model

| Gate | Purpose | State |
|---|---|---|
| W2-G1 | Readiness qualification (this cycle) | **CANDIDATE** |
| W2-G2 | Morris W2 scope/convergence decision | **NOT AUTHORIZED** |
| W2-G3 | Morris W2 Delivery GO | **NOT AUTHORIZED** |
| GO Phase B distinct | US-P1-14 full closure | **NOT AUTHORIZED** |

---

## 6. Decision pack candidates (Morris W2-G2)

| ID | Arbitration | Recommendation |
|---|---|---|
| D-W2-01 | Proposal process-local vs Trajectory durable | Replace or project — avoid prolonged dual truth |
| D-W2-02 | Phase B scope W2 vs W2+W3 | W2 = seam extension + 2-cycle proof; full closure may extend W3 |
| D-W2-03 | TD-C6-03 in W2 | Implement in W2 (US-P1-16 P1) |
| D-W2-04 | studio-projects parallel path | FREEZE — `/studio` canonical |
| D-W2-05 | Live vs fake Phase B sign-off | Live matrix required for US-P1-14 Morris gate |
| D-W2-06 | Disclosure correction timing | Pre-W2-G3 honesty pass (Track E first) |

---

## 7. Tracks and critical path

| Track | Focus |
|---|---|
| A | Trajectory product loop (F2 wire · options UI · HD→decided) |
| B | Read model + minimal history |
| C | EC inspect + governance presentation + TD-C6-03 |
| D | CKC Phase B proof (multi-cycle · live matrix) |
| E | Disclosure honesty sync |

**Critical path:** E → A → C → D (B parallel with A)

---

## 8. Gap register (top)

| Gap | Priority | Blocks W2-G1? |
|---|---|---|
| GAP-W2-01 Trajectory not wired F2/UI | P0 | YES |
| GAP-W2-02 Dual truth Proposal vs Trajectory | P0 | YES |
| GAP-W2-03 HD without trajectory promotion | P0 | YES |
| GAP-W2-04 No trajectory options UI | P0 | YES |
| GAP-W2-10 Disclosure drift | P0 | YES |
| GAP-W2-05 EC inspect incomplete | P1 | NO |
| GAP-W2-06 Phase B incomplete | P1 | PARTIAL |
| GAP-W2-07 History minimal incomplete | P1 | NO |
| GAP-W2-08 TD-C6-03 missing | P1 | NO |

---

## 9. Asset classification (summary)

| Verdict | Examples |
|---|---|
| KEEP | OA backbone · SQLite stack · SqliteTrajectoryRepository · SqliteDecisionRepository |
| COMPLETE (backend) | Trajectory application layer |
| ADAPT | orchestrateF2 · ConversationSurface · disclosures · ckcCognitiveContext |
| REPLACE (W2) | proposalStore (dual truth) |
| FREEZE | studio-projects parallel path |
| HARVEST | ProjectAssistantPanel legacy |
| MISSING | TD-C6-03 AuthorityVerificationReceipt |

---

## 10. Fake / Real qualification

- Phase A CKC + SQLite governance: **REAL**
- F2 intent + CKC cognitive Nora default: **FAKE** (live available)
- US-P1-14 Morris gate should require **live semantic differentiation** across multiple cycle types
- Agent execution: **FIXTURE** (W3 / distinct REAL gate)

---

## 11. W2 exit contracts (future — NOT AUTHORIZED)

1. Options + Recommendation ≠ HD (US-P1-01)
2. HD durable + trajectory decided link (US-P1-02)
3. EC summary→detail→re-inspect (US-P1-03)
4. Phase B differentiated Nora on ≥2 cycle types (US-P1-14 partial OK W2)
5. Minimal history recoverable (US-P1-15)
6. Governance/audit presentation + TD-C6-03 if adopted (US-P1-16)
7. Disclosure honesty aligned post-W1

---

## 12. Anti-claims

- ≠ W2 implemented
- ≠ W2 proven
- ≠ Phase B complete
- ≠ W1 seam = US-P1-14 closure
- ≠ W2-G2 / W2-G3 authorized
- ≠ Delivery authorized
- ≠ REAL authorized
- ≠ runtime v3 ADOPTED

---

## 13. Full readiness document

```markdown
# SFIA Studio — Product Completion — Wave 2 — Delivery Readiness Qualification

| Champ | Valeur |
|---|---|
| **Projet** | SFIA Studio — Product Completion |
| **Cycle** | 8 — Delivery / implémentation — **QUALIFICATION / READINESS ONLY** |
| **Profil SFIA** | CRITICAL |
| **Typologie** | DOC |
| **Vague** | **W2 — Cognition, trajectoire et décision humaine** |
| **Base Git** | `origin/main` @ `bfa60c2d2ec0d828a5bf703e3fcaec3f0bb76197` |
| **Branche analyse** | `docs/sfia-studio-product-completion-w2-delivery-readiness` *(W2 readiness candidate · ≠ main until merge)* |
| **GO Morris consommé (backlog)** | **VALIDATE SFIA STUDIO PRODUCT COMPLETION CYCLE 5** — W2 backlog scope authoritative · **NO DELIVERY AUTHORIZED BY BACKLOG VALIDATION** |
| **GO Morris consommé (W1 closure)** | **G3 W1 Delivery CONSUMED / SATISFIED** — PR **#395** merge `ddd39181…` · **8/8 exit contracts PASS** · push/main CI **`32589270526` SUCCESS** |
| **GO Morris consommé (readiness Cursor)** | **QUALIFICATION READINESS W2 — W2-G1 PREPARATION ONLY** — analyse repo-first · aucune implémentation · aucune Delivery · aucun REAL |
| **Verdict ChatGPT (review finale)** | **PENDING** — candidat local pour revue |
| **Statut** | **LOCAL W2 READINESS CANDIDATE — NOT INTEGRATED — W2-G1 NOT AUTHORIZED — DELIVERY NOT AUTHORIZED — REAL ZERO** |
| **Runtime v3** | **NON ADOPTED** |
| **Delivery** | **NON AUTORISÉE** |
| **REAL** | **ZERO** |

## Anti-affirmations

- **≠** W2 implémentée · **≠** W2 prouvée · **≠** READY FOR DELIVERY · **≠** Phase B complète · **≠** REAL · **≠** runtime v3 ADOPTED.
- W1 **CLOSED / INTEGRATED ON MAIN** (PR #395) · **≠** autorisation automatique W2.
- W1 bounded seam (US-P0-08) **≠** US-P1-14 Phase B closure · `consumed=true` resolver **≠** preuve sémantique Nora complète.
- Trajectory/Confirmation SQLite W1 **≠** boucle produit trajectoire/options/HD W2 câblée.
- Ce document **≠** Morris W2 GO · **≠** W2 Delivery GO.

---

## 1. Métadonnées / Git truth

| Field | Value |
|---|---|
| repo | `mcleland147/sfia-workspace` |
| pwd | `/Users/morris/Projects/sfia-workspace` |
| branch | `docs/sfia-studio-product-completion-w2-delivery-readiness` |
| HEAD | `bfa60c2d2ec0d828a5bf703e3fcaec3f0bb76197` |
| origin/main | `bfa60c2d2ec0d828a5bf703e3fcaec3f0bb76197` |
| W1 Delivery PR | **#395 MERGED** · merge `ddd39181e9cf823a0d5055eefba7a873940c38c2` · push/main CI **`32589270526` SUCCESS** · **8/8 PASS** |
| W1 roadmap closure PR | **#397 MERGED** · merge `bfa60c2d2ec0d828a5bf703e3fcaec3f0bb76197` |
| backlog on main | `05-product-completion-backlog-user-stories.md` — **INTEGRATED ON MAIN** |
| W1 readiness on main | `07-product-completion-wave-1-delivery-readiness.md` — **INTEGRATED ON MAIN** |
| W2 readiness | `08-product-completion-wave-2-delivery-readiness.md` — **LOCAL CANDIDATE** |
| qualification timestamp | 2026-08-23 00:56:53 CEST (+0200) |

---

## 2. Décisions Morris consommées

| Décision | Effet readiness W2 |
|---|---|
| Backlog Cycle 5 **VALIDÉ** Morris | Scope W2 authoritative depuis backlog · US-P1-01…03 · 14…16 · REQ-07/09/17/20/24 |
| W1 Delivery **CONSUMED** (G3) | Substrat durable disponible : Trajectory SQLite · Confirmation selective · Phase A · bounded seam |
| **NO DELIVERY** par validation backlog | Ce document ne autorise pas Delivery W2 |
| C6 **CLOS** Morris | TD-C6-01…06 = implement-only · TD-C6-03 optional W1 · **requis W2 pour US-P1-16** |
| D01/D02/D05 **ADOPTED** | Direction Phase A suffisante · DK-01/02 restent gaps implémentation résiduels |
| runtime v3 **NON ADOPTED** | Hors scope W2 |
| REAL | Gate Morris **distinct** · **ZERO** · hors W2 qualification delivery |
| W2 entry | **CANDIDATE / NOT AUTHORIZED** — qualification distincte requise avant tout GO |

---

## 3. Hiérarchie des sources

| Priorité | Sources |
|---|---|
| 1 — Backlog validé | `05-product-completion-backlog-user-stories.md` — W2 §9 macro-vague |
| 2 — W1 readiness + exit proof | `07-product-completion-wave-1-delivery-readiness.md` · PR #395 evidence |
| 3 — Produit / architecture | C1 · C2 · UX · FA · C6 delta · DP↔CKC qualification |
| 4 — Runtime Git | `projects/sfia-studio/app/**` @ `bfa60c2d2ec0d828a5bf703e3fcaec3f0bb76197` |
| 5 — Roadmap convergence | `convergence/sfia-studio-convergence-roadmap.md` — NEXT = W2 entry qualification |
| 6 — v3 framing | Contradiction-check only |

---

## 4. Capacité / outcome produit W2

**Résultat utilisateur W2 (backlog §9) :** le Pilote peut **voir des options de trajectoire et une recommandation Nora distinctes de sa décision**, **enregistrer un HumanDecision structurant lié à la trajectoire**, **inspecter un ExecutionContract avant autorisation**, et bénéficier d'une **consommation CKC Phase B** au-delà du seam W1 — **sans** closure exécution/evidence E2E (W3) ni Product Experience closure (W4).

**Outcomes C1 servis (cible W2) :** O-02 (chemin réel) · O-03 (Nora informé CKC — Phase B start) · O-04 (Rec ≠ HD ≠ Confirmation) · O-05 (EC inspectable) · prérequis O-10.

**Lot cohérent ?** **OUI avec condition** — la boucle trajectoire→recommandation→décision→préparation EC doit être câblée produit ; sinon risque de « backend-ready / UI-thin » avec dual truth Proposal process-local vs Trajectory durable.

---

## 5. Scope W2 exact

### Inclus (P1 W2-primary + enablers)

| ID | Scope W2 |
|---|---|
| US-P1-01 | Options trajectoire + Recommendation ≠ HD |
| US-P1-02 | HumanDecision structurante tracée + liaison trajectoire |
| US-P1-03 | EC inspectable progressive disclosure |
| US-P1-14 | CKC Phase B — consommation sémantique Nora *(start W2 · closure partielle W3 possible)* |
| US-P1-15 | Historique minimal Project / Cycle |
| US-P1-16 | Vérité gouvernance / audit intelligible |
| REQ-07 | HumanDecision / DecisionBasis closure produit |
| REQ-09 | EC native + inspect + parité |
| REQ-17 | Historique minimal |
| REQ-20 | Gouvernance / audit transverse présentation |
| REQ-24 | CKC Phase B semantic proof |
| TD-C6-03 | AuthorityVerificationReceipt *(enabler US-P1-16)* |
| TD-C6-06 | Pointeur trajectoire courante explicite *(produit)* |

### Explicitement hors W2 (W3/W4)

| Reste | Vague |
|---|---|
| US-P1-04…07 exécution/evidence/boucle | W3 |
| US-P0-07 closure E2E recovery/replan | W3 |
| US-P1-10/13 PE closure · A11Y baseline | W4 |
| REAL agent execution | gated séparément |
| runtime v3 adoption | gate Morris distinct |

### Frontière W1 → W2 (reçu de W1)

W2 **reçoit** de W1 :
- Trajectory SQLite durable (TD-C6-01/06 backend)
- Confirmation selective durability (TD-C6-02/05 backend)
- Epistemic selective SQLite (TD-C6-04 backend)
- Phase A package-bound CKC + product doctrine pin
- Bounded seam CKC→Nora (US-P0-08)
- HumanDecision SQLite + DecisionBasis domain
- EC SQLite + M3 PREPARE/resolve

W2 **ne doit pas** re-ouvrir :
- C6 architecture decisions
- G2 package identity (`pkg:sfia-studio-doctrine-v3@1.0.0`)
- W1 exit contracts (8/8 PASS)

---

## 6. Inventaire état repo courant (post-W1)

### DoctrinePackage / CKC

| Élément | État post-W1 |
|---|---|
| `pkg:sfia-studio-doctrine-v3@1.0.0` | **MATERIALIZED** — `registry.json` + package dir on main |
| `productCkcIndex` | **IMPLEMENTED** — package-internal index |
| `ckcQualificationResolver.ts` | **ADAPT** — product-native primary · method manifest fallback residual (DK-01/02) |
| `qualifyCycleWithCkc.ts` | **KEEP** — orchestrateur unique |
| Phase A proof | **PROVEN** — tests `productCkcQualification.test.ts` |
| Phase B seam | **PARTIAL** — `ckcCognitiveContext.ts` + `w1CkcSemanticSeam.test.ts` · ≠ catalogue complet |

### Product SQLite (M1–M5 + W1 extensions)

| Domaine | SQLite ? | État W2-relevant |
|---|---|---|
| Project / LPS | **OUI** | **KEEP** — restart-safe |
| CycleInstance | **OUI** | **KEEP** |
| HumanDecision | **OUI** | **KEEP** — F2 `recordDecision.ts` wired · **pas liaison trajectoire** |
| ExecutionContract | **OUI** | **KEEP** — summary UI partial |
| ExecutionAttempt / Evidence | **OUI** | W3 scope |
| **Trajectory** | **OUI** (W1) | **KEEP backend** · **NOT wired F2/UI** |
| **Epistemic** | **OUI** selective (W1) | **KEEP backend** · **NOT wired options/rec** |
| **Confirmation** | **OUI** selective (W1) | **KEEP** · UI copy still says process-local |

### F2 / Cognition pipeline

| Élément | État |
|---|---|
| `orchestrateF2.ts` | Qualify → cycle/LPS → proposal · **ADAPT** — must wire trajectory |
| `proposalStore.ts` | **Process-local** · **REPLACE/COMPLEMENT** for durable trajectory model |
| `ckcCognitiveContext.ts` | Bounded seam · **ADAPT** for Phase B |
| `recordDecision.ts` | HD durable on GO · **ADAPT** — trajectory promotion missing |
| Conversation / proposals | **Process-local** — disclosed honestly except stale trajectory/confirmation copy |

### UI product path

| Route / surface | État W2 |
|---|---|
| `/studio/*` → `pre-m6-product-ui` | **KEEP** — canonical W2 product path |
| `ConversationSurface.tsx` | Rec/HD labels · EC summary · **ADAPT** for trajectory options + inspect flow |
| `HistorySurface.tsx` | Anchors only · **ADAPT** for US-P1-15 |
| `studio-projects/*` | **FREEZE** — parallel legacy · not W2 canonical |
| `getProjectRuntimeAction` | **ADAPT** — missing trajectory/decisions/attempts projection |

### Disclosure honesty (W2-G1 blocker)

| Surface | Problème |
|---|---|
| `disclosures.ts:36` | Claims Trajectory/Epistemic Memory process-local — **contradicts W1 SQLite** |
| Conversation UI | Confirmation process-local copy — **contradicts W1 durable granted+** |
| `RecoverySurface.tsx` | Mixed — some durable claims, inconsistent with disclosures |

---

## 7. Classification des actifs W2

| # | Actif | Verdict | Notes W2 |
|---|---|---|---|
| 1 | OA Native backbone | **KEEP** | Ports/use-cases pattern |
| 2 | Product SQLite stack | **KEEP** | W1 extended · extend projections only |
| 3 | `SqliteTrajectoryRepository` | **KEEP** | Backend complete · wire product |
| 4 | Trajectory application layer | **COMPLETE** (backend) | `proposeTrajectoryVersion` etc. · not in F2 |
| 5 | `SqliteDecisionRepository` | **KEEP** | HD durable |
| 6 | `SqliteConfirmationRepository` | **KEEP** | W1 selective durability |
| 7 | `SqliteEpistemicRepository` | **KEEP** | Selective materialization rules |
| 8 | `orchestrateF2.ts` | **ADAPT** | Central W2 integration point |
| 9 | `proposalStore.ts` | **REPLACE** (W2) | Conflicts with durable trajectory/options |
| 10 | `ckcCognitiveContext.ts` | **ADAPT** | Phase B extension |
| 11 | `ckcQualificationResolver.ts` | **ADAPT** | Remove method fallback (DK-01/02) |
| 12 | `pre-m6-product-ui` | **KEEP / ADAPT** | Canonical product shell |
| 13 | `ConversationSurface.tsx` | **ADAPT** | Trajectory options · EC inspect state machine |
| 14 | `HistorySurface.tsx` | **ADAPT** | Minimal history timeline |
| 15 | `presentationLabels.ts` | **ADAPT** | Audit/governance copy |
| 16 | `disclosures.ts` | **ADAPT** | Sync W1 durability truth |
| 17 | `vertical-slice-runtime/service.ts` | **KEEP / ADAPT** | Extend runtime DTO |
| 18 | `studio-projects/*` | **FREEZE** | Non-canonical parallel |
| 19 | `ProjectAssistantPanel.tsx` | **HARVEST** | Legacy · tests only |
| 20 | `fakeProvider.ts` | **KEEP** | Qualification/demo · ≠ REAL |
| 21 | TD-C6-03 receipt | **COMPLETE** | **MISSING** — no implementation |
| 22 | Method `CKC_REFERENCE_MANIFEST` | **REPLACE** | DK-02 residual |

---

## 8. Registre des écarts W2

| Gap ID | Description | US/REQ | Priorité | Bloque W2-G1 ? | Bloque Delivery ? |
|---|---|---|---|---|---|
| GAP-W2-01 | Trajectory durable non câblée F2/UI | US-P1-01/02 · TD-C6-06 | P0 | **OUI** | **OUI** |
| GAP-W2-02 | Dual truth Proposal process-local vs Trajectory | US-P1-01/02 | P0 | **OUI** | **OUI** |
| GAP-W2-03 | HD sans promotion trajectoire decided | US-P1-02 · REQ-07 | P0 | **OUI** | **OUI** |
| GAP-W2-04 | Options trajectoire absentes UI (SC-04) | US-P1-01 | P0 | **OUI** | **OUI** |
| GAP-W2-05 | EC inspect progressive disclosure incomplet | US-P1-03 · REQ-09 | P1 | NON | **OUI** |
| GAP-W2-06 | Phase B ≠ W1 seam — multi-cycle proof | US-P1-14 · REQ-24 · DK-08 | P1 | PARTIEL | **OUI** (US-P1-14) |
| GAP-W2-07 | Historique minimal incomplet | US-P1-15 · REQ-17 | P1 | NON | **OUI** |
| GAP-W2-08 | TD-C6-03 AuthorityVerificationReceipt absent | US-P1-16 · REQ-20 | P1 | NON | **OUI** (US-P1-16) |
| GAP-W2-09 | Gouvernance/audit presentation thin | US-P1-16 · REQ-20 | P1 | NON | **OUI** |
| GAP-W2-10 | Disclosure drift trajectory/confirmation | transverse | P0 | **OUI** | **OUI** (honesty) |
| GAP-W2-11 | Runtime projection gap (no trajectory in DTO) | US-P1-15/16 | P1 | NON | **OUI** |
| GAP-W2-12 | Method manifest fallback residual | DK-01/02 | P2 | NON | PARTIEL |
| GAP-W2-13 | W2 readiness doc not on main | governance | P0 | **OUI** | NON (pre-G1) |
| GAP-W2-14 | Live Phase B semantic proof matrix | US-P1-14 | P1 | NON | **OUI** (Morris gate) |

---

## 9. Modèle de gates W2

| Gate | But | État |
|---|---|---|
| **W2-G1** | W2 Delivery Readiness Qualification — scope · architecture · gaps · tracks · exit proof model | **IN PROGRESS** (this document) |
| **W2-G2** | Morris W2 scope / convergence decision — autorise ou borne la Delivery W2 | **NOT AUTHORIZED** |
| **W2-G3** | Morris W2 Delivery GO — umbrella tracks · implémentation autorisée | **NOT AUTHORIZED** |
| **GO Phase B distinct** | US-P1-14 full semantic closure | **NOT AUTHORIZED** — distinct de W2-G3 slice possible |

**Règle :** W1 G3 satisfied **≠** W2-G2 automatic · W2-G1 qualified **≠** W2-G3 Delivery authorized.

---

## 10. Decision pack candidates (Morris W2-G2)

| # | Arbitrage | Options | Recommandation readiness |
|---|---|---|---|
| D-W2-01 | Proposal process-local vs Trajectory durable | A) Remplacer proposal par trajectory versions · B) Projection proposal→trajectory draft · C) Dual path temporaire | **A ou B** — C risque dual truth prolongé |
| D-W2-02 | Phase B scope dans W2 vs W2+W3 split | A) W2 = seam extension + 2-cycle proof · B) W2 = full US-P1-14 closure | **A** — aligné backlog W2–W3 pour US-P1-14 |
| D-W2-03 | TD-C6-03 dans W2-G3 ou defer | A) Implement receipt W2 · B) Defer W3 | **A** — US-P1-16 P1 W2 |
| D-W2-04 | `studio-projects` parallel path | A) FREEZE strict · B) Port features back | **A FREEZE** — `/studio` canonical |
| D-W2-05 | Live vs fake for Phase B sign-off | A) Fake sufficient for W2-G3 · B) Live matrix required for US-P1-14 Morris gate | **B** for US-P1-14 · fake OK for other W2 tracks |
| D-W2-06 | Disclosure correction timing | A) Pre-W2-G3 honesty pass · B) With Track A | **A** — W2-G1 convergence trust |

---

## 11. Tracks W2

| Track | Stories / TE | Dépendances | Parallelizable |
|---|---|---|---|
| **A — Trajectory product loop** | US-P1-01 · US-P1-02 · TD-C6-06 | W1 trajectory backend | **∥ B, E** |
| **B — Read model + history** | US-P1-15 · REQ-17 | Runtime DTO extension | **∥ A, C, E** |
| **C — EC inspect + authority presentation** | US-P1-03 · US-P1-08 · US-P1-16 · TD-C6-03 | US-P0-05 order | **∥ B** after A partial |
| **D — CKC Phase B proof** | US-P1-14 · REQ-24 · DK-08 | Phase A stable · Track A context | After A stable |
| **E — Disclosure honesty** | transverse | None | **∥ all** — **first** |

### Critical path

```
E (honesty) → A (trajectory wire) → A3 (HD→decided) → C (EC inspect) → D (Phase B proof)
                     ↘ B (history projection) ↗
```

**Bottleneck structurant :** GAP-W2-01/02 — trajectory not in product loop.

---

## 12. Parallélisation

| Phase | Tracks | Rationale |
|---|---|---|
| Phase 0 | E | Fix disclosure drift — low risk · high trust |
| Phase 1 | A ∥ B | Trajectory wire + runtime projection independent backend |
| Phase 2 | C | EC inspect needs decided trajectory context |
| Phase 3 | D | Phase B proof needs stable qualify→trajectory→Nora path |
| Continuous | Tests + UX wireframe alignment (SC-04/05/06) | |

---

## 13. Exit contracts W2 (future — NOT AUTHORIZED)

W2 est **CLOSED** lorsque, sur **`/studio/*`** avec Product SQLite durable path, un scénario reproductible démontre :

1. **Options + Recommendation** — options trajectoire visibles · Recommendation badge distinct · pas de GO implicite (US-P1-01)
2. **HumanDecision structurante** — HD durable avec DecisionBasis · liaison trajectoire decided (US-P1-02)
3. **EC inspectable** — résumé → détail → re-inspect après amend matériel (US-P1-03)
4. **Phase B start** — comportement Nora différencié sur ≥2 cycle types qualifiés · attributable CKC · ≠ `consumed=true` seul (US-P1-14 partial acceptable W2 · full closure may extend W3)
5. **Historique minimal** — cycles · décisions · attempts/outcomes · ancres evidence récupérables (US-P1-15)
6. **Gouvernance lisible** — états bloqués expliqués · receipt ≠ autorité en présentation · TD-C6-03 si Morris adopts D-W2-03-A (US-P1-16)
7. **Disclosure honesty** — trajectory/confirmation durability aligned with runtime (GAP-W2-10 closed)

**Technical SUCCESS alone ≠ W2 exit.** UAT slice required per backlog §9.

---

## 14. Future file mapping (indicatif — NOT AUTHORIZED)

| Area | Primary files |
|---|---|
| F2 trajectory wire | `features/project-assistant/f2/orchestrateF2.ts`, `recordDecision.ts`, `types.ts` |
| Proposal→trajectory | `features/project-assistant/f2/proposalStore.ts` (replace/complement) |
| Phase B | `features/project-assistant/f2/ckcCognitiveContext.ts` |
| Runtime projection | `lib/vertical-slice-runtime/service.ts`, `types.ts`, `actions.ts` |
| UI trajectory/options | `features/pre-m6-product-ui/surfaces/ConversationSurface.tsx` |
| UI history | `features/pre-m6-product-ui/surfaces/HistorySurface.tsx` |
| UI EC inspect | `ConversationSurface.tsx`, `presentationLabels.ts` |
| Disclosures | `lib/vertical-slice-runtime/disclosures.ts` |
| TD-C6-03 | `lib/oa/decision/**` (new receipt type + presentation) |
| Tests | `__tests__/project-assistant/w2*.test.ts`, `w1CkcSemanticSeam.test.ts` (extend) |

---

## 15. Risques / dettes / stops

| ID | Risque | Mitigation |
|---|---|---|
| R-W2-01 | Dual truth Proposal vs Trajectory confuses Pilote | D-W2-01 decision before W2-G3 |
| R-W2-02 | Premature Phase B sign-off from W1 seam | Separate GO Phase B gate · live proof matrix |
| R-W2-03 | Disclosure drift erodes trust | Track E first · gate W2 exit #7 |
| R-W2-04 | Parallel `studio-projects` diverges | FREEZE · single canonical `/studio` |
| R-W2-05 | Backend-ready UI-thin false progress | Exit contracts require UI proof not repo-only |
| R-W2-06 | AMEND complexity (SHOULD-05) | Defer AMEND loop depth · GO/NO_GO first |

**STOP conditions :**
- Any W2 Delivery without Morris W2-G3 GO
- Claiming US-P1-14 closed on fake-only proof without Morris approval
- Pulling W3 execution/evidence into W2 scope
- REAL execution without distinct Morris gate

---

## 16. Fake / Real qualification W2

| Layer | Default | Real when | W2 impact |
|---|---|---|---|
| Catalog/signal qualification | **REAL** | Always deterministic | Trustworthy cycle type |
| Phase A CKC resolution | **REAL** | Product package pin | W1 proven |
| Phase A method fallback | method-candidate | Index miss | DK-01/02 — reduce in W2 |
| F2 intent analysis | **FAKE**/LIVE | Provider env | Affects clarification path |
| CKC cognitive Nora | **FAKE** default | OpenAI live | W1 seam proven fake · US-P1-14 needs live matrix |
| Trajectory/HD/EC/Confirmation | **REAL** SQLite | Product path | Durable governance |
| Agent execution | **FIXTURE** | `SFIA_STUDIO_CURSOR_REAL` gated | W3 scope |

**Bottom line :** W2 qualification/demo viable on **fake Nora + real SQLite + real Phase A** for Tracks A/B/C/E · **US-P1-14 Morris gate** should require **live semantic differentiation** across multiple cycle types.

---

## 17. Frontière handoff W3

W3 reçoit :
- US-P1-04…07 execution/evidence loop
- US-P0-07 recovery E2E closure
- US-P1-14 full Phase B closure (if split from W2)
- O-06/O-07/O-08/O-11/O-12 outcomes

W2 **ne doit pas** :
- Claim execution/evidence E2E closed
- Claim recovery/replan E2E closed
- Pull REAL agent execution

---

## 18. Verdict readiness

### Réponses binaires obligatoires

| Question | Réponse |
|---|---|
| W1 substrate sufficient for W2 ? | **OUI** |
| Nouvelle architecture requise ? | **NON** |
| Moteur parallèle requis ? | **NON** |
| Trajectory backend ready ? | **OUI** |
| Trajectory product-wired ? | **NON** |
| HD domain ready ? | **OUI** |
| HD trajectory-linked ? | **NON** |
| Phase A ready ? | **OUI** |
| Phase B complete ? | **NON** |
| W1 seam sufficient for US-P1-14 ? | **NON** |
| EC inspect UI started ? | **PARTIEL** |
| History minimal UI ? | **PARTIEL** |
| TD-C6-03 implemented ? | **NON** |
| Disclosure honest post-W1 ? | **NON** |
| W2 scope sufficiently bounded ? | **OUI** |
| Structural architecture gap ? | **NON** |
| W2-G1 readiness qualified ? | **OUI** (candidate) |
| W2-G2 Morris decision made ? | **NON** |
| W2 Delivery GO recommended now ? | **NON** |

### Verdict scale

## **W2 READINESS QUALIFIED — MACRO SCOPE + ARCHITECTURE SUFFICIENT — BACKEND-READY / PRODUCT-INCOMPLETE — DELIVERY NOT YET AUTHORIZED — NO STRUCTURAL ARCHITECTURE GAP**

Architecture et macro scope W2 **qualifiés** · substrat W1 **réutilisable** · gap structurant = **trajectory product loop + disclosure honesty** · **pas** d'architecture parallèle · **W2-G1 candidate** · **W2-G2/W2-G3 NOT AUTHORIZED** · **DELIVERY NOT AUTHORIZED** · **REAL ZERO**.

### Blockers before W2-G2 Morris decision

1. **This document Git integration** — W2 readiness on main
2. **ChatGPT review** — source-locked qualification review
3. **Morris W2-G2** — consume decision pack D-W2-01…06

### Blockers before W2-G3 Delivery GO

1. **W2-G2 Morris scope decision**
2. **GAP-W2-01…04** — trajectory product loop
3. **GAP-W2-10** — disclosure honesty
4. **Runtime gaps** per adopted W2 tracks · exit contracts 1–7

---

*Qualifié 2026-08-23 00:56:53 CEST (+0200) · W2-G1 preparation only · W1 CLOSED PR #395 · W2 NOT AUTHORIZED · NO Delivery · NO REAL · runtime v3 NON ADOPTED.*
```

---

## 14. Review instructions for ChatGPT

1. Verify W2 scope matches backlog §9 and W1 handoff §23 inverse boundary.
2. Challenge dual-truth Proposal vs Trajectory analysis — is D-W2-01 recommendation sufficient?
3. Confirm Phase B partial vs full split aligns with DK-08 and US-P1-14 wording.
4. Check disclosure drift evidence (`disclosures.ts:36`).
5. Validate gate model W2-G1/G2/G3 does not collapse into automatic W2 Delivery after W1.
6. Confirm NO DELIVERY / NO REAL / NO CODE claims are consistent throughout.

**Expected review outcome:** W2 READINESS QUALIFIED or targeted corrections R1…Rn — **NOT** Delivery authorization.

---

*Generated 2026-08-23 00:57:44 CEST · W2-G1 preparation only · project Git transport NOT performed.*
