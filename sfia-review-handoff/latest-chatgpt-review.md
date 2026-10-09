# ChatGPT Review Pack — P6-HQA-REC-01 MINIMAL DELIVERY (NORA PROMPT)

**Level:** FULL
**Cycle type:** 8 — Delivery / implémentation
**Typologie v2.4:** INC / EVOL — correction Product bornée
**Profile:** CRITICAL
**Timestamp (UTC):** 2026-10-09T17:12:23Z
**Pack note:** REPUBLISH — FULL test diff restored (ChatGPT blocking reserve: incomplete §7). Product diffs unchanged.
**GO:** GO DELIVERY — OPTION 1 MINIMALE — AUTHORIZED / **CONSUMED**
**GO Git Integration / push / PR / merge projet:** NOT AUTHORIZED
**GO schema / validator / F01:** NOT AUTHORIZED
**GO REAL supplémentaire:** NOT AUTHORIZED
**Verdict:** MINIMAL DELIVERY IMPLEMENTED — DETERMINISTIC VALIDATION PASS — READY FOR CHATGPT CRITICAL REVIEW
**Statut:** LOCAL PRODUCT CANDIDATE (not READY FOR MERGE)
**Prior incomplete handoff:** `e8909f5a6ee2a19f5b5587a7879a5286dceb1527` (superseded by this republish)

---

## 0. Identity / Git Truth

| Field | Value |
|-------|--------|
| Repository | mcleland147/sfia-workspace |
| Branch | `qa/sfia-studio-p6-global-integrated-product-qa` |
| HEAD (pre-delivery, unchanged — no project commit) | `db45e9c4c17cbe35dff543eee0f366af81026c55` |
| origin/main | `8581abbf98fc38a78ee05c306c33fc5aa3632d3f` |
| Investigation handoff ref | `c2cad687a2a18234b119ee14206b51ed103470ce` |
| Target dirt before cycle | **NONE** (targets clean) |
| Product commit this cycle | **NONE** |
| Cursor REAL | ON — not modified |
| Studio :3020 | UP (http 200) — hot-reload risk noted (§11) |

### Preserved local (not this delivery)

| Path | Status |
|------|--------|
| `projects/sfia-studio/product-simplification/p6-qa-integration-state-and-reserves.md` | M (C14) |
| `.tmp-sfia-review/**` | pack rewrite |
| `projects/.tmp-sfia-review/**` | untracked |
| `projects/sfia-studio/app/__tests__/p6-campaign/**` | untracked REAL harness |
| Product DB / :3020 | not mutated / not restarted |

---

## 1. Sources read (contracts verified in Git)

- Investigation handoff `c2cad687` — root cause: prompt guidance gap + schema-null vs validate-require-six.
- `buildProjectSystemPrompt.ts` — FRONTIÈRE QUALIFICATION PRÉ-CYCLE section (pre-edit lacked qualificationSignals).
- Read-only contracts: `noraLifecycleRecommendationOutputType.ts`, `qualificationSignals.ts`, `validateLifecycleRecommendation.ts`, `types.ts` — **NOT MODIFIED**.
- Existing test suite `qualToGovernedCycle.presentation.d0.test.ts` — proper vehicle for prompt contract assertions.

---

## 2. Convergence Pre-check

| Item | State |
|------|--------|
| Capacity | Nora → durable Rec → traj → HD → prepare → START |
| Milestone P6 | NOT PASS; runtime v3 NON ADOPTED |
| Gap treated | Nora may emit NEXT_CYCLE without materializable signals |
| Classification | Prompt ADAPT; Tests EXTEND; Validator/Schema/F01/LPS KEEP |
| Exit this cycle | Prompt + targeted Fake tests |
| Next | ChatGPT Critical → Morris Git Integration GO → Human QA REAL retest |

---

## 3. Finding recall

- Human QA: Framing recommended conversationally; persistence failed with `LR_QUALIFICATION_SIGNALS_INCOMPLETE`.
- Root cause: schema allows `qualificationSignals: null`; validate requires six bools for NEXT_CYCLE; **system prompt omitted signal contract**.
- Validator remains correct fail-closed — not weakened.

---

## 4. Six-signal contract (D-GF-START-01) — unchanged server-side

Required for durable NEXT_CYCLE:

`structuralChange`, `securityImpact`, `architectureImpact`, `dataImpact`, `irreversible`, `lowRiskBounded`

Never invent false / Light-by-default / reverse-map labels. Null/incomplete → persist refuse (validator KEEP).

---

## 5. Correction description

Added section `=== QUALIFICATION SIGNALS (D-GF-START-01 …) ===` inside existing pre-cycle → recommendation frontier:

- **CAS A:** prepareable NEXT_CYCLE → complete six-bool object (never null); cycle-owned unknowns ≠ omit signals ≠ artificial questionnaire; Framing need not be finished; no Light/Critical invent.
- **CAS B:** if signals not honestly qualifiable → do not invent; do not emit durable-looking NEXT_CYCLE; `lifecycleRecommendation = null` + useful narrative + targeted clarification only if routing/risk/profile/gate changes.
- **CAS C:** FINALIZE may null signals.
- **CAS D:** CURRENT continuity preserved.
- Governance line: Recommendation ≠ HD ≠ prepare ≠ START ≠ execution.

**Not changed:** schema, validator, materialization, F01, persistence, LPS, F2, UI.

---

## 6. Diff — `buildProjectSystemPrompt.ts`

```diff
@@ -156,10 +156,33 @@ export function buildProjectSystemPrompt(
         .join(", ") +
       ".",
     "targetCycleTypeId seulement s'il est supportable (jamais inventé ; jamais forcé cyc:framing).",
+    "",
+    "=== QUALIFICATION SIGNALS (D-GF-START-01 — même tour que lifecycleRecommendation) ===",
+    "Six booléens explicites, chacun évalué honnêtement (jamais omis ni rempli par commodité) :",
+    "structuralChange, securityImpact, architectureImpact, dataImpact, irreversible, lowRiskBounded.",
+    "CAS A — NEXT_CYCLE préparable / supportable :",
+    "Si tu émets lifecycleRecommendation NEXT_CYCLE destinée à être matérialisable,",
+    "qualificationSignals DOIT être l'objet complet des six booléens (jamais null).",
+    "Qualifie chaque signal selon le contexte projet et les effets envisagés du cycle recommandé.",
+    "Les inconnues qui appartiennent normalement au cycle (ex. Cadrage exploratoire) NE justifient PAS",
+    "un questionnaire pré-cycle artificiel NI l'omission des six signaux.",
+    "Une qualification explicite des signaux N'EXIGE PAS que le Cadrage soit déjà réalisé.",
+    "Ne choisis PAS Light / lowRiskBounded=true par défaut. Ne neutralise PAS Critical artificiellement.",
+    "Ne présente PAS la Recommendation comme trajectoire préparée, CycleInstance créé, ou START.",
+    "CAS B — signaux non qualifiables honnêtement :",
+    "Ne invente PAS de valeurs (pas de false/true par défaut pour forcer une persistance).",
+    "Ne produis PAS un NEXT_CYCLE présenté comme durablement matérialisable sans les six signaux.",
+    "lifecycleRecommendation = null ; conserve une narrative utile ; explicite l'incertitude sans jargon ;",
+    "clarification ciblée seulement si elle change réellement routage, risque, profil ou gate.",
+    "CAS C — FINALIZE_CURRENT_CYCLE : qualificationSignals peut être null (ignoré à la matérialisation).",
+    "CAS D — Recommendation CURRENT applicable : ne pas réémettre uniquement pour un nouveau message",
+    "(continuité conversationGuidance) ; les règles ci-dessus s'appliquent à toute NOUVELLE émission NEXT_CYCLE.",
+    "",
     "Ne dis PAS « je ne peux pas l'enregistrer dans Studio » si le chemin structured Recommendation est disponible.",
     "Si tu émets lifecycleRecommendation : le serveur peut la matérialiser ; ne prétends jamais qu'elle est",
     "enregistrée si tu n'as pas de confirmation produit ; ne crée pas de CycleInstance / HD / START.",
     "Une Recommendation CURRENT réutilisée reste une Recommendation — jamais une HumanDecision ni un cycle lancé.",
+    "Recommendation ≠ HumanDecision ≠ préparation de trajectoire ≠ START ≠ exécution.",
     "",
     "=== CONTINUATION CONVERSATIONNELLE (conversationGuidance — même tour) ===",
```

---

## 7. Diff — `qualToGovernedCycle.presentation.d0.test.ts` (COMPLETE)

New test: `P6-HQA-REC-01 — prompt contracts six qualificationSignals for prepareable NEXT_CYCLE`

Covers T1–T7 (keys present; NEXT_CYCLE never-null object; no invention; incomplete → no artificial durable NEXT_CYCLE; cycle-owned unknowns; governance; FINALIZE null + CURRENT continuity).

Full `git diff` from working tree vs HEAD `db45e9c4` (exploitable independently — no worktree dependency):

```diff
diff --git a/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts b/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
index dcc35203..64caa7d9 100644
--- a/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
+++ b/projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts
@@ -80,6 +80,68 @@ describe("qual-to-governed-cycle — prompt + presentation contracts", () => {
     expect(prompt).toMatch(/ne peux pas l'enregistrer dans Studio/);
   });

+  it("P6-HQA-REC-01 — prompt contracts six qualificationSignals for prepareable NEXT_CYCLE", () => {
+    const prompt = buildProjectSystemPrompt(baseProject);
+
+    // T1 — six signal keys exposed
+    for (const key of [
+      "structuralChange",
+      "securityImpact",
+      "architectureImpact",
+      "dataImpact",
+      "irreversible",
+      "lowRiskBounded",
+    ] as const) {
+      expect(prompt).toContain(key);
+    }
+
+    // T2 — prepareable NEXT_CYCLE requires complete object (never null)
+    expect(prompt).toMatch(/QUALIFICATION SIGNALS \(D-GF-START-01/);
+    expect(prompt).toMatch(
+      /NEXT_CYCLE préparable[\s\S]*qualificationSignals DOIT être l'objet complet des six booléens \(jamais null\)/,
+    );
+
+    // T3 — no invention / no Light-by-default / no artificial Critical neutralization
+    expect(prompt).toMatch(/Ne invente PAS de valeurs/);
+    expect(prompt).toMatch(
+      /Ne choisis PAS Light \/ lowRiskBounded=true par défaut/,
+    );
+    expect(prompt).toMatch(/Ne neutralise PAS Critical artificiellement/);
+
+    // T4 — incomplete qualification must not become artificially durable NEXT_CYCLE
+    expect(prompt).toMatch(
+      /Ne produis PAS un NEXT_CYCLE présenté comme durablement matérialisable sans les six signaux/,
+    );
+    expect(prompt).toMatch(
+      /signaux non qualifiables[\s\S]*lifecycleRecommendation = null/,
+    );
+
+    // T5 — cycle-owned unknowns (e.g. exploratory Framing) ≠ extra pre-cycle questionnaire
+    //     and ≠ omitting the six signals
+    expect(prompt).toMatch(
+      /inconnues qui appartiennent normalement au cycle[\s\S]*NE justifient PAS[\s\S]*questionnaire pré-cycle artificiel/,
+    );
+    expect(prompt).toMatch(
+      /qualification explicite des signaux N'EXIGE PAS que le Cadrage soit déjà réalisé/,
+    );
+
+    // T6 — governance: Recommendation ≠ HD / prepare / START / execution
+    expect(prompt).toMatch(
+      /Recommendation ≠ HumanDecision ≠ préparation de trajectoire ≠ START ≠ exécution/,
+    );
+    expect(prompt).toMatch(
+      /ne crée pas de CycleInstance \/ HD \/ START/,
+    );
+
+    // T7 — FINALIZE may null signals; CURRENT continuity preserved
+    expect(prompt).toMatch(
+      /FINALIZE_CURRENT_CYCLE : qualificationSignals peut être null/,
+    );
+    expect(prompt).toMatch(
+      /Recommendation CURRENT applicable : ne pas réémettre uniquement pour un nouveau message/,
+    );
+  });
+
   it("intent analysis treats lifecycle formalization as informative effect", () => {
     expect(ANALYSIS_SYSTEM).toMatch(/Formalise maintenant dans Studio/);
     expect(ANALYSIS_SYSTEM).toMatch(
```

---

## 8. Validations executed

| Check | Result |
|-------|--------|
| `npm test -- __tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts` | **PASS** — 22/22 (1 file), ~1.83s |
| `git diff --check` on two targets | **CLEAN** |
| `git diff --stat` targets | 2 files, +85 / −0 |
| Scope (product code vs preserved) | Only the two authorized files + preserved locals/pack |
| Typecheck / lint full | Not required; not run (scope-bounded) |
| REAL / OpenAI / p6-campaign / DB reset / e2e | **NOT RUN** |
| Schema / validator / F01 files | **UNTOUCHED** (`git diff` confirms) |

### What Fake tests prove

- Prompt text contains the six-signal contract and CAS A–D / governance lines.

### What Fake tests do NOT prove

- Provider compliance in REAL OpenAI turns.
- Durable Recommendation persistence in Product.
- F01 START / P6 PASS / end-to-end Human QA recovery.

---

## 9. Fake / Real Qualification

| | |
|--|--|
| Boundary | Nora structured Product turn → LR materialization |
| Fake this cycle | Prompt contract assertions — PASS |
| REAL | Not authorized; prior FAIL OBSERVED remains until retest |
| Parity | To revalidate after Git Integration + Morris REAL GO |
| Realism gaps | Model may still emit null; instruction non-compliance; variability |

---

## 10. CURRENT / FINALIZE effects

| Path | Prompt change |
|------|----------------|
| FINALIZE | Explicit CAS C — null still allowed |
| CURRENT reuse | Explicit CAS D — no re-emit per message |
| NEXT_CYCLE prepareable | CAS A — six bools required in structured output |
| Incomplete honesty | CAS B — null LR, not invented signals |

Server validator behavior unchanged.

---

## 11. Runtime / hot reload

- Studio `next dev` on `:3020` was **UP** (HTTP 200) during edit.
- Editing `buildProjectSystemPrompt.ts` may hot-reload into the running process.
- **Not** a Human QA revalidation. No REAL call issued by this cycle.
- No DB write / restart / campaign harness.
- Reserve: if Morris chatted mid-delivery, next turn may use new prompt — do not claim incident closed.

---

## 12. Files touched

| File | Role |
|------|------|
| `projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts` | Prompt contract ADAPT |
| `projects/sfia-studio/app/__tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts` | Deterministic EXTEND |
| `.tmp-sfia-review/chatgpt-review.md` | This pack |
| `sfia-review-handoff/latest-chatgpt-review.md` | Handoff L3 only |

---

## 13. Invariants preserved

- No invented server-side signal defaults.
- Validator / schema / F01 / persistence / LPS unchanged.
- Recommendation ≠ HD ≠ prepare ≠ START.
- No auto-HD / auto-START / auto CycleInstance.
- No project commit / push / PR / merge.

---

## 14. Limits / reserves / debt

- RAW provider payload still not observed historically.
- Prompt-only Option 1 may be insufficient if REAL Nora still ignores instructions → then Option 2 (Morris), not auto-escalated here.
- Exit next: Critical ChatGPT review → Git Integration GO → Human QA REAL on failed Framing path.
- Debt: none new; no parallel qualification system.

---

## 15. Décisions Morris restantes

1. ChatGPT Critical review of this handoff.
2. GO Git Integration (commit/push/PR) — **not** granted by this GO.
3. GO REAL retest of P6-HQA-REC-01 path after integration.

---

## 16. Verdict

**MINIMAL DELIVERY IMPLEMENTED — DETERMINISTIC VALIDATION PASS — READY FOR CHATGPT CRITICAL REVIEW**

Instruction ChatGPT: Read this handoff at the remote SHA. Verify exactly two product files, six-signal contract, no invented values, no validator/schema/F01 change, Fake≠REAL limits, and that REAL retest remains required before declaring the incident closed.
