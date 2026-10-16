# SFIA STUDIO — M-HD-02 POST-CLOSURE
## P6 INTEGRATED PRODUCT QA — ENTRY QUALIFICATION

**Horodatage:** 2026-10-16 21:12:23 CEST (Europe/Paris)
**GO Morris:** M-HD-02 POST-CLOSURE ENTRY QUALIFICATION — prochaine QA Product intégrée (2026-10-16)
**Macro:** STUDIO-CHAT-FIRST-PRODUCT-SIMPLIFICATION-01
**Milestone:** P6 — GLOBAL INTEGRATED PRODUCT QA
**Campaign ID:** P6-GLOBAL-INTEGRATED-PRODUCT-QA-01
**Cycle:** 9 — QA / validation
**Profil:** CRITICAL
**Typologie:** QA / ENTRY QUALIFICATION / READ-ONLY
**Capacité:** V3-F05 (connexes V3-F02 / V3-F11 / V3-F12 / V3-F14)
**CKC:** ckc:studio:qa-validation

---

## 1. Verdict

**P6 M-HD-02 INTEGRATED QA ENTRY QUALIFIED**

**NEXT QA SCENARIO READY FOR GOVERNED EXECUTION**

Scénario unique retenu : **P6-MIN-07** — Recommendation / HumanDecision / currentness continuity,
raccordé au candidat Delivery M-HD-02 (worktree dirty), **sans** nouvelle campagne,
**sans** exécution dans ce cycle, **sans** ouverture E4–E8.

Claims interdits non revendiqués :
P6 GLOBAL PASS · HUMAN QA PASS · READY FOR REAL GLOBAL · PRODUCT GIT INTEGRATED ·
PR READY · RUNTIME V3 ADOPTED.

---

## 2. Git Truth initial / final

| Champ | Valeur |
|-------|--------|
| Remote | `mcleland147/sfia-workspace` |
| Branche Product | `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` |
| HEAD | `b4c1d86211d372f7b0685be7ce8a5ba7de598e37` |
| origin/main | `896ff59c704bfa76df1da1a51705aaf948c1cf0c` |
| Dirty | EXPECTED — préservé (aucun reset/stash/clean) |
| Staged | vide |
| Handoff RP04 précédent | `c819d015` / blob `3fd09ccb` |
| Modifications Product ce cycle | **AUCUNE** |

### git status --short

```
M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio/app/__tests__/project-assistant/activeCycleArtifactMaterializationContinuityCorr01.d0.test.ts
 M projects/sfia-studio/app/__tests__/project-assistant/corrProof07.artifactMaterialization.d0.test.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/hooks/useProductConversation.ts
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/ConversationSurface.tsx
 M projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedConfirmationCard.tsx
 M projects/sfia-studio/app/features/project-assistant/ProjectAssistantPanel.tsx
 M projects/sfia-studio/app/features/project-assistant/f2/activeCycleGovernedContinuation.ts
 M projects/sfia-studio/app/features/project-assistant/f2/ckcCognitiveContext.ts
 M projects/sfia-studio/app/features/project-assistant/f2/orchestrateF2.ts
 M projects/sfia-studio/app/features/project-assistant/f2/types.ts
 M projects/sfia-studio/app/features/project-assistant/orchestrateTurn.ts
 M projects/sfia-studio/app/features/project-assistant/w2/actions.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeExecutionContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/authorizeGenericPreparedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/confirmForAuthorization.ts
 M projects/sfia-studio/app/features/project-assistant/w2/governedExecuteAuthorizedContract.ts
 M projects/sfia-studio/app/features/project-assistant/w2/pendingGenericPrepareOfferStore.ts
 M projects/sfia-studio/app/features/project-assistant/w2/prepareGenericExecutionContractDraft.ts
 M projects/sfia-studio/app/features/project-assistant/w2/resolveAuthoritativeProductMateriality.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/index.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/productExecutionAgentsTools.ts
 M projects/sfia-studio/app/lib/nora-cognitive-runtime/providerAgentsModel.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/invariants.ts
 M projects/sfia-studio/app/lib/oa/decision/domain/types.ts
 M projects/sfia-studio/app/lib/oa/decision/infrastructure/localSingleUserAuthority.ts
 M projects/sfia-studio/convergence/sfia-studio-generic-execution-review-result-architecture.md
?? projects/sfia-studio/app/__tests__/project-assistant/p6.der16.genericNoraToolInvocation.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.inspectionBindingSelect.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.authorityContinuityCorrection.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.ecHdEffectsBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.finalAuthorityBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd01.genericMissionHumanDecision.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.missionIdentityContinuitySession.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.pilotPresentationRecordBinding.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.mHd02.sessionBoundaryNormalReplayLps.d0.test.ts
?? projects/sfia-studio/app/__tests__/project-assistant/p6.projectScopedCursorSelection.d0.test.ts
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/GovernedGenericMissionDecisionCard.tsx
?? projects/sfia-studio/app/features/pre-m6-product-ui/surfaces/genericMissionPresentation.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionDecisionApplicability.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionDecisionContinuity.ts
?? projects/sfia-studio/app/features/project-assistant/w2/genericMissionSubject.ts
?? projects/sfia-studio/app/features/project-assistant/w2/recordGenericMissionHumanDecision.ts
?? projects/sfia-studio/app/features/project-assistant/w2/verifyGenericMissionHumanDecisionForPrepare.ts
```

---

## 3. Sources effectivement lues

PROCESSUS: `sfia-cycle-execution-template.md` · routing-guide · rules-and-guardrails · chatgpt-cursor-operating-model · SFIA v2.6 (PROCESSUS)

Convergence: Build Doctrine · Roadmap · Architecture D-ER candidate locale (`sfia-studio-generic-execution-review-result-architecture.md`)

Product: C1 · P2 FOM · **P6 contract** `07-chat-first-product-simplification-p6-global-integrated-product-qa.md`

Doctrine v3: 30 / 32 / 34 / 35 / 37 (références) · CKC `09-qa-validation.md`

Handoff M-HD-02 RP04: `sfia/review-handoff` @ `c819d015` / `3fd09ccb`

Product UI (READ-ONLY): `GovernedGenericMissionDecisionCard.tsx` · `useProductConversation.ts` · `ConversationSurface.tsx`

Evidence seam: `app/lib/p6-campaign-evidence/*` (ledger code présent ; dossier `.tmp-sfia-review/p6-global-integrated-qa/` **absent** de ce worktree)

---

## 4. Convergence Pre-check

| | |
|--|--|
| **TARGET** | Pilote → Nora → mission → HD → continuité → PREPARE gouverné |
| **CURRENT** | M-HD-02 déterministe CLOSED (portée revue) ; Product intégré **NON PROUVÉ** |
| **KEEP** | OA HD · LPS · Nora · Pending offer · Continuity · PREPARE · UI · campagne P6 · Evidence Ledger seam |
| **ADAPT** | Aucun code — qualification seule |
| **REPLACE** | Aucun |
| **GAP** | Preuve Product intégrée (navigateur + session + parcours UI) sur candidat dirty |
| **EXIT** | Un parcours, un oracle, des gates — **ce pack** |

---

## 5. Clôture déterministe M-HD-02 (bornée)

| Preuve | Statut | Portée |
|--------|--------|--------|
| Identité canonique Record | DETERMINISTIC PASS | Fake/local |
| Post-Record D0/D1 Continuity | DETERMINISTIC PASS | Fake/local (`7afad281`) |
| LPS material currentness CR-04 | DETERMINISTIC PASS ciblé | Fake/local |
| RP04 Accept/Refuse authority | DETERMINISTIC PASS | Fake/local (`c819d015`) |
| Session contract Project-scoped `f1-default` | QUALIFIED | Fake/local |
| UI08 visual runtime | **OPEN** | Non capturé |
| Session Better Auth REAL + navigateur | **NOT PROVEN** | Hors M-HD-02 déterministe |
| Product intégré bout-en-bout | **NOT PROVEN** | Objet de cette entry |

**≠** P6 GLOBAL PASS · **≠** READY FOR REAL · **≠** HUMAN QA PASS.

---

## 6. Campagne P6 existante — requalification

**Campaign:** `P6-GLOBAL-INTEGRATED-PRODUCT-QA-01`
**Contract:** `projects/sfia-studio/product-simplification/07-chat-first-product-simplification-p6-global-integrated-product-qa.md`
**Campaign branch (contract):** `qa/sfia-studio-p6-global-integrated-product-qa`
**Candidat actuel:** `fix/sfia-studio-p6-hqa-optional-artifact-generic-prepare` @ `b4c1d862` **DIRTY**

| Élément | Classification |
|---------|----------------|
| Phase 0 COMPLETE / Phase 1 PASS (SMOKE-01/02/03) | **HISTORICAL VALID EVIDENCE** (campagne P6) |
| Phases 2–4 prior evidence VALID/REUSED | **HISTORICAL VALID EVIDENCE** |
| Evidence path `.tmp-sfia-review/p6-global-integrated-qa/` | **REQUALIFICATION REQUIRED** sur ce worktree (dossier absent ici) |
| Evidence Ledger code `lib/p6-campaign-evidence` | **CURRENT EVIDENCE** (seam Product présent) |
| Human QA batch | **NOT PROVEN** / batch preparing (contrat) |
| P6 READY / P6 GLOBAL PASS | **NO** / **NOT CLAIMED** |
| GO P6 EXECUTION / GO P6 REAL | **AUTHORIZED / CONSUMED** sur campagne — **ne pas étendre par analogie** au candidat dirty sans confirmation Morris |

**Raccordement:** le prochain scénario s’inscrit dans la campagne **existante** comme exercice **P6-MIN-07** sur le **candidat M-HD-02**, pas comme Phase 0 ni nouvelle campagne.

---

## 7. Preuves réutilisables (sans invalidation)

| Source | Usage pour P6-MIN-07 |
|--------|----------------------|
| Tests M-HD-01/02 Fake | Baseline déterministe — **≠** preuve navigateur |
| Handoffs `7afad281` / `c819d015` | Contrats comportement Record/Continuity/RP04 |
| Composants UI M-HD-02 dirty | Surfaces à exercer (READ-ONLY ce cycle) |
| Seam Evidence Ledger | Capture future sous exécution gouvernée |
| SMOKE-01/02/03 historiques | Environnement campagne — **REQUALIFIER** si runtime différent |

---

## 8. Scénario intégré prioritaire

### ID
**P6-MIN-07** — Recommendation / HumanDecision / currentness continuity

### Pourquoi celui-ci
- Couverture P1 §15 / contrat P6 obligatoire.
- Aligné V3-F05 + preuves M-HD-02 (HD, digest D0/D1, LPS, Refuse, PREPARE).
- N’exige **pas** E4–E8 complets pour l’exit de continuité HD→PREPARE.
- Réutilise UI/Product déjà présents (pas de nouvelle architecture).

### Hors parcours (ce prochain run)
- Calibration Model×Reasoning Phase 3.
- Human QA batch consolidé 19 items.
- Chantier Delivery E4–E8 / S8 persistence.
- Execute / Attempt Cursor REAL (scénario borné PREPARE-only).

---

## 9. Parcours QA intégré (NON EXÉCUTÉ) + oracle

| # | Étape | Entrée Product | Service | Acteur | Oracle |
|---|-------|----------------|---------|--------|--------|
| 1 | Ouvrir Project existant | Studio Project surface | Product SQLite / Project services | Pilote | Project chargé, session valide |
| 2 | Intention mission | Conversation | Nora / orchestrateTurn·F2 | Pilote→Nora | Qualification structurante proposée |
| 3 | Qualification | F2 / offer remember | `rememberGenericPrepareRecommendation` | Nora/Product | Pending offer process-local présent |
| 4 | Présentation scellée | Conversation | `readGenericMissionDecisionContinuity` | Product | `awaiting_decision` + digest **D0** |
| 5 | Inspection options | `GovernedGenericMissionDecisionCard` | UI projection | Pilote | Accept / Refuse / Amend visibles |
| 6a | Accept | `w2RecordGenericMissionHumanDecisionAction` | OA RecordHumanDecision + LPS link | Pilote | HD `accepted` ; 0 Attempt ; 0 Execute |
| 6b | Refuse (négatif) | idem | OA status `refused` | Pilote | HD `refused` ; PREPARE `HD_REFUSED` |
| 7 | LPS | OA project services | append LPS si Accept linked | Product | version ↑ ; `decisionIds` contient HD |
| 8 | Refresh conversation | `refreshGovernedMoments` → read avec **D0** | Continuity | Product | décision cohérente — pas stale artificiel |
| 9 | Relecture durable | Continuity + OA history | Applicability | Product | Même `decisionId` applicable |
| 10 | Stale réel | Mutation effets / offer absente | Continuity | Product | `stale_presentation_required` |
| 11 | LPS material drift | Append LPS objectif/contexte | Continuity CR-04 | Product | Pas de decided GO |
| 12 | PREPARE | `prepareGenericExecutionContractDraft` + decisionId | verify HD | Product | PREPARE seulement si HD applicable |

### Oracle global (succès scénario)
1. Une HD durable unique pour le statut choisi (pas double accepted).
2. Continuity UI = décision OA applicable (D0 post-bump inclus).
3. Refuse ≠ GO ; Amend ≠ autorisation.
4. Stale / drift matériel ≠ continuité accepted.
5. PREPARE n’utilise que le `decisionId` applicable.
6. Zéro Attempt / Execute dans ce scénario.
7. Evidence capturée via seam P6 si environnement prêt.

---

## 10. Négatifs et recovery

| Négatif | Oracle |
|---------|--------|
| Refuse | Continuity decided refused ou PREPARE `HD_REFUSED` |
| Stale digest / offer absente | `stale_presentation_required` |
| LPS material drift post-HD | Pas de decided accepted |
| Replay Accept identique | `ALREADY_APPLIED` / même decisionId |
| Accept+Refuse même digest sans LPS | Continuity `OA_DECISION_HISTORY_AMBIGUOUS` |
| Restart process | Offer perdue → stale honnête (dette process-local) |

Recovery conversation complète = **P6-MIN-06** (scénario voisin, non fusionné).

---

## 11. UX / UI08

| Item | Statut |
|------|--------|
| Composants | `GovernedGenericMissionDecisionCard` · `ConversationSurface` · `useProductConversation` |
| Figma fileKey | `m4g8j0gNbEzfIuH6S9AZJF` |
| Frames citées | **412:2** / **414:2** (mission) ; **413:2** (Confirmation distincte) |
| Frames « contrat courant » | **NOT RE-VERIFIED** ce cycle |
| UI08 visual runtime | **OPEN** |
| Ce cycle | Aucune modif Figma/UI · aucun verdict visuel PASS |

Gate Morris UI08 optionnel pour PASS visuel ; parcours comportemental peut avancer avec UI08 OPEN.

---

## 12. Dépendances Generic Execution E4–E8

| Capacité | Statut | Bloque P6-MIN-07 ? |
|----------|--------|--------------------|
| E4 Deep Review | NOT PROVEN | Non |
| E5 Taxonomy retirement | NOT PROVEN | Non (HD→PREPARE) |
| E6 Retention | NOT PROVEN | Non |
| E7 Bounded REAL | READY FOR REAL = NO | Non pour comportemental |
| E8 Nora tool PREPARE | Partial dirty / NOT PROVEN E2E | Non si F2 remember+offer (chemin M-HD-02) |
| E9–E11 | NOT PROVEN | Non |

**Ne pas ouvrir E4–E8 maintenant.**

---

## 13. Fake / Real Qualification

Entrée: DETERMINISTIC PROVEN — M-HD-02 ciblé.
Cible future: Integrated Product QA behavioral (+ UI08 optionnel).
Gate REAL: **NON ACCORDÉ** ce cycle.
Gaps: Session REAL · Browser · restart · Cursor REAL · OpenAI LIVE · UI08 capture.
DETERMINISTIC PROVEN ≠ READY FOR REAL.

---

## 14. Environnement et prérequis (avant exécution)

1. Worktree dirty préservé.
2. Runtime Product local (sans mutation :3020/e66 non autorisée).
3. Pilote Better Auth allowlisté.
4. Project fixture isolé.
5. Nora provider selon GO REAL.
6. Seam Evidence Ledger + path capture local.
7. Navigateur (+ captures si UI08).

---

## 15. Gates Morris applicables

| Gate | Pour prochaine exécution |
|------|--------------------------|
| GO M-HD-02 déterministe | CONSUMÉ / CLOSED |
| GO P6 EXECUTION / REAL (campagne) | CONSUMED — **pas d’extension automatique** au candidat dirty |
| **GO Morris — P6-MIN-07 Integrated QA on M-HD-02 candidate** | **REQUIS** avant run navigateur/session |
| GO UI08 visual PASS | OPTIONNEL |
| GO OpenAI LIVE / Cursor REAL / Execute | NON pour MIN-07 PREPARE-only |
| GO Product git / E4–E8 Delivery | NON |

---

## 16. Risques / dette / exit

Pending offer process-local · multi-conversation N/I · Pilot env-bound · UI08 OPEN · E4–E8 OPEN · evidence path absent ce WT.

Exit futur P6-MIN-07: oracles §9 + Fake/Real honesty · **≠** P6 GLOBAL PASS.

---

## 17. Prochaine action recommandée

**Après GO Morris « P6-MIN-07 Integrated Product QA on M-HD-02 candidate » :**

Exécuter uniquement le parcours §9 (Accept + négatifs Refuse/Stale/Drift/Replay) sur le candidat dirty,
session Pilote + navigateur, Evidence via seam existante,
**sans** Execute, **sans** E4–E8, **sans** commit Product.
UI08 = parallèle optionnel sous gate distinct.

---

## 18. Instruction ChatGPT

Lire `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`

**SFIA STUDIO — M-HD-02 POST-CLOSURE P6 INTEGRATED PRODUCT QA ENTRY QUALIFICATION REVIEW.**

Vérifier: V3-F05/P6 · pas de campagne parallèle · M-HD-02 borné · scénario/oracle · Fake/Real · gates · UI08/E4–E8 · aucune modif Product · Pack complet · handoff distant.

---

## 19. Fin de pack

Aucune modification Product.
Review Pack FULL mono-cycle — qualification seule.
Handoff message:
`docs(review-handoff): qualify M-HD-02 integrated P6 QA entry`
