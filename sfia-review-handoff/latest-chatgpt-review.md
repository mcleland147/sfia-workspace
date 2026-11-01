# ORION-NORA-COHERENCE-CORR-01 — Review Pack FULL

Cycle: `ORION-NORA-COHERENCE-CORR-01`
Campagne: `AKG-M5-L3S2-FRESH-LIVE-QA-01`
Profil: CRITICAL / INC-RUN corrective
Milestone: AKG-M5 L3-S2 OPEN
Capacité: V3-F05
Date: 2026-11-01
Verdict: **ORION-NORA-COHERENCE-CORR-01 LOCAL CORRECTION VERIFIED — READY FOR CHATGPT REVIEW — GIT INTEGRATION PENDING GO MORRIS**

---

## 1. Git Truth

| Item | Value |
|---|---|
| Repository | `mcleland147/sfia-workspace` |
| Baseline `origin/main` | `cd2020c82ecdcdaa073debd6985ee9c113bfba3e` |
| Corrective branch | `feat/akg-m5-l3s2-orion-nora-coherence-corr-01` |
| Corrective tip (local only) | `9bd22f875d01404989a03de5db2c96e396e6d89c` |
| Worktree correction | `/Users/morris/Projects/sfia-workspace-feat-akg-m5-l3s2-orion-nora-coherence-corr-01` |
| Worktree runtime (untouched code) | `/Users/morris/Projects/sfia-workspace-run-akg-m5-l3s2-fresh-live-qa-01` |
| Project push / PR / merge | **NOT DONE** (gate Morris) |
| Cursor REAL | OFF (`SFIA_STUDIO_CURSOR_REAL=0`) |
| OA exclusive | OFF |
| G-REAL | NOT GRANTED |

Non-integrated change at start of cycle: none on main; corrective worktree created from `origin/main`.

---

## 2. Convergence Pre-check

Sources consultées (doctrine / PRR / templates):

- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-build-doctrine.md`
- `projects/sfia-studio/convergence/sfia-studio-convergence-roadmap.md`
- `projects/sfia-studio/product-completion/01-product-completion-cadrage.md`
- `projects/sfia-studio/convergence/architectural-knowledge-governance/m5-product-transformation/05-m5-target-journey-and-trajectory-requalification.md`
- PRR: README, 03, 06, 07, 08, 09
- Doctrine v3 applicable: 33, 34, 35

R23 / R24: obligatoires — R23 exécuté (3 flux) ; R24 impact matrix ci-dessous (pas de publication PRR sans GO Morris).

L3-S2 reste OPEN. Pas de Roadmap alternative. Pas de runtime v3 ADOPTED.

---

## 3. Sources code consultées (R23)

**Flux A — Nora structured output**

- `buildProjectSystemPrompt.ts`
- `noraProductTurnOutputType.ts`
- `noraAdaptivePresentation.ts`
- `providerAgentsModel.ts`
- `runNoraAgentsTurn.ts` / `runNoraCognitiveTurn.ts`
- `orchestrateTurn.ts`

**Flux B — Product lifecycle**

- `materializeFromProductTurn.ts`
- `produceLifecycleRecommendation.ts` / continuity
- `chatFirstFramingContinuity.ts`
- `preCycleCandidateTrajectoryActions.ts`
- `orchestrateF2.ts` (labels)

**Flux C — UX restitution**

- `ConversationSurface.tsx`
- `FramingContinuityCard.tsx`
- `NoraAdaptivePresentationView.tsx`
- `noraAdaptivePresentation.ts` (`resolveAdaptiveAssistantRender`)

---

## 4. R23 architecture (résumé)

```
Pilot utterance
  → Agents structuredOutput { narrative, presentation, conversationGuidance, lifecycleRecommendation? }
  → coherence / Cognitive disposition (may append [CONTRADICTION CANDIDATE] on turn.text)
  → orchestrateTurn: prefer coherent.narrative → composePilotFacing → buildDurable(NAP)
  → Memory B content + presentation_json + studio_control_json
  → FramingContinuity snapshot from CURRENT Rec / candidate / approval (Product only)
  → ConversationSurface: resolveAdaptiveAssistantRender + FramingContinuityCard
```

Invariant: Recommendation CURRENT = Product registered state; Nora proposal = candidate; HumanDecision = Pilot only.

---

## 5. ORION IDs (expurgés)

| Field | Value |
|---|---|
| Project | ORION |
| projectId | `prj:b0883ca8-2411-493d-94ff-e386d176956a` |
| sessionKey | `f1-default` |
| Faulty logicalTurnId | `ltu:0841f5cfa39df31c93798a86b916bcd3` |
| Faulty assistant turn | `pt:81e2e7174dd2c9c3` (seq 3) |
| First-turn logicalTurnId | `ltu:4d989ae220a242c15853b33559662b0f` |
| CURRENT Recommendation | `epi:lr:6b133252883a1013:20261101T073443162Z` |
| CURRENT targetCycleTypeId | `cyc:functional-design` |
| HumanDecisions | **0** |
| Active ExecutionAttempt | **0** |
| Product DB | `…/akg-m5-l3s2-fresh-live-qa-01/product/oa-product.sqlite` |
| Nora session DB | `…/akg-m5-l3s2-fresh-live-qa-01/product/nora-session.sqlite` |
| Snapshot pre-corr | `…/product/snapshots/pre-orion-coherence-corr-01-20261101T084405Z/` |

Secrets / cookies / full sensitive transcript: not published.

---

## 6. Trace du tour fautif (READ-ONLY)

**Pilot (seq 2):** demande la différence Cadrage vs Conception ; observe carte « Cadrage exploratoire » vs prose Conception.

**Model structured (session item seq 9):**

- `narrative`: `""` (vide)
- `conversationGuidance.statement`: courte orientation Conception
- `lifecycleRecommendation`: `null` (réutilisation CURRENT — cohérent)
- `presentation`: comparaison riche + recommendation Conception
- `preCycleRoutingAssessment`: EMIT-compatible / candidate supportable

**Product avant/après tour 2:**

- CURRENT reste `cyc:functional-design` / Conception fonctionnelle
- Aucune nouvelle Recommendation matérialisée
- Aucune HumanDecision

**Memory B content (seq 3):**

- Notice CORR-A1B divergence
- Version structurée (compose presentation)
- Version narrative (= guidance + `[CONTRADICTION CANDIDATE] …`)
- `presentation_json` conserve la présentation structurée
- Persiste après reload (historique non réécrit)

---

## 7. Model vs Product vs UI

| Layer | EXPECTED | OBSERVED (incident) | SOURCE | INVARIANT | ROOT CAUSE? |
|---|---|---|---|---|---|
| A Model structured | Une orientation claire ; LR null OK si CURRENT suffit | Presentation + guidance Conception ; narrative vide ; LR null | session_items / structured_turn2 | Candidate ≠ authority | Partial — contenu model cohérent sur Conception |
| B Product CURRENT | Conception (`cyc:functional-design`) | Conception CURRENT inchangé | oa_epistemic_items | INV-REC-NE-HD | **Not stale** |
| C FramingContinuityCard | Label Product CURRENT | Titre « Cadrage exploratoire » | Card + readFramingContinuity | Card ⇐ Product facts | **YES — catalogLabel null → default Cadrage + suffixe exploratoire** |
| D NAP durable | A1 unique si complementary | Dual version + notice | pilot_transcript content | CORR-A1B / NAP-SINGLE | **YES — `[CONTRADICTION CANDIDATE]` contaminait pilotFacingCore avant classify** |
| E UX jargon | Signal compréhensible | `CONTRADICTION CANDIDATE` dans body | content seq 3 | Pilot-facing honesty | **YES — footer technique exposé** |
| F Reload / Memory B | Même contenu durable | Divergence historique rejouée | transcript RO | Memory B persistence | Persistence OK ; défaut rejoué |

---

## 8. Cause racine démontrée (combinée)

Deux causes techniques indépendantes, **prouvées** (pas présumées) :

1. **FramingContinuityCard / read path**
   En phase `recommendation_ready` sans candidate/approval, `catalogLabel` / `targetCycleTypeId` n’étaient **pas** hydratés depuis la Recommendation CURRENT. Fallback UI → `"Cadrage"` + suffixe hardcodé `" exploratoire"` → contradiction apparente avec Nora/Product Conception.

2. **NAP write path**
   `runNoraCognitiveTurn` append `[CONTRADICTION CANDIDATE] …` sur `turn.text`. Si `narrative === ""`, `orchestrateTurn` ne remplaçait pas par le narrative structuré (falsy). `buildDurableAssistantContentForTurn` classifiait alors un core contaminé → **false divergent** alors que guidance+presentation sont complementary (reproduit en DET).

Product CURRENT n’était pas fautif. Le modèle n’émettait pas deux Recommendations Product contradictoires.

---

## 9. Correctif adopté

### A. Product CURRENT → Framing snapshot
- `projectAssistantReadPreCycleCandidateTrajectoryAction` expose `currentNextCycleRecommendation` (id, targetCycleTypeId, catalogLabel via `getCycleTypeById`, statement).
- `projectAssistantReadFramingContinuityAction` utilise ce fallback quand candidate/approval absents.

### B. Suffixe « exploratoire »
- Uniquement pour Framing/`cyc:framing` / label Cadrage.
- Conception → `Commencer par un « Conception fonctionnelle »` (sans exploratoire).
- Plus de default silencieux vers « Cadrage » si label inconnu.

### C. NAP / disposition
- `stripCognitiveDispositionFooters` avant classify (write + read).
- `orchestrateTurn` préfère `coherentEarly.narrative` même vide.
- Signal candidate → `NORA_CONTRADICTION_CANDIDATE_PILOTE_NOTICE` en Studio control (intelligible), pas jargon brut dans le corps métier.
- Persistance A1 : `durableBuilt.presentation` préféré pour `presentation_json`.

Mécanismes réutilisés : CORR-A1B, NAP-SINGLE-RESPONSE, FramingContinuity existant, selectCurrentLifecycleRecommendations. Pas de second store de recommandations.

---

## 10. Alternatives rejetées

| Alternative | Raison du rejet |
|---|---|
| Forcer toujours Cadrage / toujours Conception | Contredit trajectoire Pilot + CURRENT |
| Effacer / réécrire tour historique ORION | Interdit ; Memory B truth |
| Cacher la notice de divergence sans conserver les sources | Contredit CORR-A1B fail-closed |
| Nouveau store de recommendations UI | Seconde source de vérité |
| Synthétiser HumanDecision pour « aligner » | INV-REC-NE-HD |
| Architecture nouvelle | STOP — hors périmètre |

---

## 11. Invariants préservés

- INV-REC-NE-HD
- CORR-A1B-01 (vrai divergent toujours dual + notice)
- NAP-SINGLE-RESPONSE (A1 unique si admissible)
- R1/R2/R3 complementary/provenance
- Recommendation CURRENT non mutée par prose libre
- Cursor REAL OFF
- Pas de START / cycle auto
- Historique ORION seq 0–3 intact

---

## 12–13. Diff / fichiers

Commit local: `9bd22f875d01404989a03de5db2c96e396e6d89c` (+920 / −26)

**Modifiés**

- `features/project-assistant/f2/chatFirstFramingContinuity.ts`
- `features/project-assistant/preCycleCandidateTrajectoryActions.ts`
- `features/project-assistant/orchestrateTurn.ts`
- `features/pre-m6-product-ui/surfaces/FramingContinuityCard.tsx`
- `lib/nora-cognitive-runtime/noraAdaptivePresentation.ts`
- `lib/nora-cognitive-runtime/noraProductTurnOutputType.ts`
- `__tests__/pre-m6-product-ui/framingContinuityCard.ui.test.tsx`

**Créés**

- `__tests__/nora-cognitive-runtime/orionNoraCoherenceCorr01.d0.test.ts` (T01–T12 + ORION)
- `__tests__/project-assistant/orionNoraCoherenceCorr01.live.test.ts` (LIVE gated)
- `scripts/orion-coherence-corr-01-live-proof.ts` (helper; CSS-limited hors Vitest)

---

## 14. Tests et résultats

### DET

```
orionNoraCoherenceCorr01.d0.test.ts          12 PASS
corrA1b01.secured.d0.test.ts                 14 PASS
framingContinuityCard.ui.test.tsx             4 PASS
chatFirstFramingContinuity.d0.test.ts         7 PASS
noraAdaptivePresentation.d0.test.ts         108 PASS
noraAdaptivePresentation.ui.test.tsx         33 PASS
framingContinuityRehydrate.ui.test.tsx        4 PASS
noraLifecycleRecommendationContinuity.d0    26 PASS
lifecycleRecommendation.finalCorr.d0         10 PASS
lifecycleRecommendation.delivery.d0          14 PASS
```

TypeScript: `tsc --noEmit` PASS
ESLint (fichiers touchés): PASS
`npm run build` (Next 15.5.20): PASS

### Cas T01–T12

Couvert dans `orionNoraCoherenceCorr01.d0.test.ts` (+ assertions card UI).
ORION spécifique: CURRENT Conception + candidate guidance Conception + footer contradiction → A1 ; carte sans Cadrage.

---

## 15. Contre-épreuve LIVE

Préconditions: attempts=0, HD=0, snapshot DB OK, mêmes chemins DB, Cursor REAL=0.

Runtime: stop `47489` ; start corrective WT `:3020` (`96351`) — preflight PASS.

LIVE harness: `ORION_COHERENCE_LIVE=1 vitest run …orionNoraCoherenceCorr01.live.test.ts` → **1 PASS (22.8s)**
presentation: `openai_live` ; model observé: `gpt-6-luna`.

| Check | Result |
|---|---|
| Framing before title | `Commencer par un « Conception fonctionnelle »` |
| Framing after title | same ; same recommendationId |
| New turn content | A1 unique, 2193 chars, comparative préservé |
| Divergence notice | ABSENT |
| CONTRADICTION CANDIDATE jargon | ABSENT |
| Studio notice cohérence | présent (intelligible) |
| Historical seq 3 | intact (divergence historique conservée) |
| HD | toujours 0 |

Preuve:
`…/proofs/orion-nora-coherence-corr-01/live-counterproof.json`
`…/proofs/orion-nora-coherence-corr-01/live-assistant-content.txt`

Browser Studio captures: IDE browser blocked on auth GitHub ; Screen Recording Computer Use non accordé. LIVE validé via seam Product `sendProjectAssistantTurn` + Memory B (pas mock).

---

## 16. Captures navigateur

Non disponibles (auth session / Screen Recording). Preuve LIVE = JSON + transcript Memory B seq 4–5 + card framing API snapshot.

---

## 17. Reload et Memory B

- Tour historique fautif **non réécrit**.
- Nouveau comportement vérifié sur **nouveau** turn explicite (seq 4–5).
- Reload sémantique: mêmes sources durables (content + presentation_json + studio_control) ; CURRENT Rec inchangé.

---

## 18. R24 impact matrix

| DOCUMENT | CURRENT CLAIM | CHANGEMENT PRODUIT | IMPACT R24 | ACTION REQUISE |
|---|---|---|---|---|
| PRR 03 E2E | Chat-first framing + Nora adaptive restitution | Card lit CURRENT ; NAP ignore footers disposition | Comportement E2E clarifié | Sync R24 au Git Integration (GO Morris) |
| PRR 06 Memory B | Durable content + presentation_json | A1 write path moins de faux divergents ; notices Studio | Reload honesty | Sync note « disposition ≠ narrative substance » |
| PRR 07 Authority | Rec ≠ HD ; fail-closed contradictions | Candidate notice non autoritative ; CURRENT inchangé | Aligné | Mention notice Pilote vs jargon |
| PRR 08 QA | NAP / Framing suites | + ORION DET/LIVE suites | Conformance map | Ajouter refs tests au sync |
| PRR 09 Gaps | Cohérence LIVE partielle | Cause prouvée + corr locale | Gap QA-02 réduit pour ce mode | Ne pas clore L3-S2 ; noter LIVE browser auth gap |

**Aucune modification PRR publiée dans ce cycle** (GO Morris requis).

---

## 19. Fake / Real qualification

| Dimension | Qualification |
|---|---|
| DET suites | REAL deterministic code paths (fake provider N/A) |
| LIVE Nora | REAL OpenAI (`openai_live`) |
| Cursor REAL | OFF |
| Browser UX capture | NOT OBTAINED (auth / Screen Recording) |
| Product DB campaign | REAL isolated ORION pair |
| Verdict honesty | LOCAL+LIVE Product seam verified ; browser visual pending optional |

---

## 20. Dettes / réserves

- Browser LIVE capture ORION (session GitHub) non faite.
- Tour historique seq 3 reste divergent en Memory B (attendu ; non réécrit).
- Signal contradiction cognitive encore fréquent en LIVE (notice Studio) — à surveiller ; non bloquant si non exposé en jargon.
- R24 PRR sync pending GO Morris.
- Git Integration pending GO Morris (pas de push branche projet).

---

## 21. Git Review Index

| Ref | SHA / path |
|---|---|
| Baseline main | `cd2020c82ecdcdaa073debd6985ee9c113bfba3e` |
| Corrective commit | `9bd22f875d01404989a03de5db2c96e396e6d89c` |
| Branch | `feat/akg-m5-l3s2-orion-nora-coherence-corr-01` (local) |
| LIVE proof | `…/proofs/orion-nora-coherence-corr-01/` |
| DB snapshot | `…/snapshots/pre-orion-coherence-corr-01-20261101T084405Z/` |

---

## 22. Verdict

**ORION-NORA-COHERENCE-CORR-01**
**LOCAL CORRECTION VERIFIED**
**READY FOR CHATGPT REVIEW**
**GIT INTEGRATION PENDING GO MORRIS**

Ne pas déclarer: L3-S2 COMPLETE ; R-LIVE-EMIT GLOBAL PASS ; G-REAL GRANTED ; runtime v3 ADOPTED.

---

## 23. Suite L3-S2

Trajectoire liée (sans élargir):

1. ChatGPT Review de ce pack
2. GO Morris → Git Integration (push branche / PR bornée)
3. Continuité QA-02 / R-LIVE-EMIT (bornée)
4. EP-S2-08 / R-STOP-BROWSER / R-SRV-RESTART selon gates campagne
5. L3-S2 reste OPEN jusqu’à décision Morris

---

FIN PACK FULL — ORION-NORA-COHERENCE-CORR-01
