# ChatGPT Review Pack — P6-HQA-REC-01 CONTROLLED GIT INTEGRATION

**Level:** FULL
**Cycle type:** 13 — PR readiness
**Typologie v2.4:** INC / EVOL — intégration d'un correctif borné
**Profile:** CRITICAL
**Timestamp (UTC):** 2026-10-09T17:28:50Z
**GO:** GO GIT INTEGRATION — P6-HQA-REC-01 — AUTHORIZED / **CONSUMED**
**GO merge:** NOT AUTHORIZED
**GO REAL:** NOT AUTHORIZED
**Verdict:** DRAFT PR OPEN — CI SUCCESS — READY FOR CHATGPT CRITICAL PR REVIEW
**Statut:** DRAFT PR CANDIDATE (not READY FOR MERGE)

---

## 0. Identity / Git

| Field | Value |
|-------|--------|
| Repository | mcleland147/sfia-workspace |
| Campaign worktree | `/Users/morris/Projects/sfia-workspace` |
| Campaign branch | `qa/sfia-studio-p6-global-integrated-product-qa` |
| Campaign HEAD | `db45e9c4c17cbe35dff543eee0f366af81026c55` (PRESERVED) |
| origin/main (base) | `8581abbf98fc38a78ee05c306c33fc5aa3632d3f` (UNCHANGED — matches expected) |
| Corrective worktree | `/Users/morris/Projects/sfia-wt-p6-hqa-rec01` |
| Corrective branch | `fix/studio-p6-hqa-rec01-qualification-signals` |
| Commit | `de8573bdb6bfa4916c122cf91114f63e8a14c814` |
| Parent | `8581abbf98fc38a78ee05c306c33fc5aa3632d3f` (= origin/main) |
| Remote head | `de8573bdb6bfa4916c122cf91114f63e8a14c814` (match) |
| Reviewed handoff ref | `d7c8a5ae2313367b3e064203af18072762459ad8` |
| Content identity | sha256 source↔applied: prompt `d4a8b9a4…`, test `4494736d…` MATCH |
| Studio :3020 | UP (http 200) — not restarted / not mutated by this cycle |
| Cursor REAL | ON — not modified |

### Isolation rationale

Campaign branch already contains PR #572 history and local C14/tmp/QA artifacts. Corrective branch created from **origin/main** in a **sibling worktree** so Studio campaign worktree and :3020 remain untouched. Only the two reviewed file diffs were applied via patch.

### Preserved on campaign worktree (not in PR)

- `p6-qa-integration-state-and-reserves.md` (C14 M)
- `.tmp-sfia-review/**`, `projects/.tmp-sfia-review/**`
- untracked `p6-campaign` REAL tests
- Product SQLite / Studio runtime

---

## 1. Convergence Pre-check

| Item | State |
|------|--------|
| Capacity | Nora → Rec durable → traj → HD → prepare → START |
| Milestone P6 | NOT PASS; runtime v3 NON ADOPTED |
| Correctif | Prompt ADAPT + tests EXTEND — Critical-reviewed |
| Validator/Schema/F01/LPS | KEEP |
| This cycle exit | Draft PR + CI SUCCESS on exact HEAD |
| Next | ChatGPT Critical PR review → Morris GO merge → post-merge → Human QA REAL retest |

---

## 2. Scope confirmation

| File | Δ |
|------|---|
| `buildProjectSystemPrompt.ts` | +23 / −0 |
| `qualToGovernedCycle.presentation.d0.test.ts` | +62 / −0 |
| **Total** | **2 files, +85 / −0** |

Matches handoff `d7c8a5ae` §§6–7. No third file. No functional change beyond reviewed content.

---

## 3. Validations (corrective worktree)

| Check | Result |
|-------|--------|
| `git apply --check` + apply | OK |
| Content sha256 vs campaign working tree | MATCH |
| `git diff --check` | CLEAN |
| Secrets scan on diff | OK |
| Six-signal contract present in prompt | OK |
| Governance line Recommendation ≠ HD ≠ START | OK |
| `npm test -- __tests__/project-assistant/qualToGovernedCycle.presentation.d0.test.ts` | **22/22 PASS** |
| `npm run typecheck` | **EXECUTED PASS** |
| `eslint` on 2 files | **EXECUTED PASS** |
| REAL / DB / p6-campaign / Playwright | NOT RUN |

---

## 4. Commit / push / PR

| Item | Value |
|------|--------|
| Message | `fix(studio): align Nora NEXT_CYCLE qualification signals` |
| Commits on branch | **1** |
| Push | normal `-u origin HEAD` (no force) |
| PR | **#573** https://github.com/mcleland147/sfia-workspace/pull/573 |
| state | OPEN |
| isDraft | **true** |
| base | main |
| headOid | `de8573bdb6bfa4916c122cf91114f63e8a14c814` |
| files in PR | exactly the two authorized paths |
| merge | **NOT PERFORMED** |

---

## 5. CI on exact HEAD

| Item | Value |
|------|--------|
| Run | https://github.com/mcleland147/sfia-workspace/actions/runs/37965527743 |
| headSha | `de8573bdb6bfa4916c122cf91114f63e8a14c814` |
| Workflow conclusion | **success** |
| Detect SFIA Studio changes | success |
| Build and validate SFIA Studio | success (typecheck, lint, build, vitest, secret scan, whitespace) |
| SFIA Studio Required Gate | success |
| Qualification | **CI SUCCESS ON EXACT HEAD** |

Not confused with PR #572 CI.

---

## 6–7. Complete commit diffs (exploitable)

Full `git show de8573bd -- <two files>`:

```diff
commit de8573bdb6bfa4916c122cf91114f63e8a14c814
Author: Morris Cleland <morris@macbook-air.home>
Date:   Fri Oct 9 19:19:53 2026 +0200

    fix(studio): align Nora NEXT_CYCLE qualification signals

    Co-authored-by: Cursor <cursoragent@cursor.com>

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
diff --git a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
index f00ddf8e..ebc8c0ff 100644
--- a/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
+++ b/projects/sfia-studio/app/features/project-assistant/buildProjectSystemPrompt.ts
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
     "Après avoir répondu : UNDERSTAND → REASON → ANSWER → ORIENT.",

```

---

## 8. Fake / Real Qualification

| | |
|--|--|
| Boundary | Nora Product turn → LR materialization |
| Fake | Prompt contract tests + CI unit suite — PASS |
| REAL | Not retested; finding remains OPEN until Morris REAL GO |
| Claims | Draft PR candidate + CI SUCCESS |
| Forbidden claims | Incident closed, REAL PASS, P6 PASS, v3 ADOPTED, READY FOR MERGE |

---

## 9. Réserves / décisions Morris

1. ChatGPT Critical PR Readiness review of this handoff.
2. **GO merge** — distinct, not granted.
3. Post-merge Human QA REAL retest of Framing / P6-HQA-REC-01 path.
4. Campaign worktree still holds uncommitted local delivery copies of the two files (expected; PR carries the canonical commit).

---

## 10. Verdict

**DRAFT PR OPEN — CI SUCCESS — READY FOR CHATGPT CRITICAL PR REVIEW**

Instruction ChatGPT: Verify PR #573 base/head, atomic commit, exact two-file diffs above, CI run 37965527743 on `de8573bd…`, Draft state, no merge, campaign worktree preserved. Do not authorize merge or declare REAL/P6 PASS.
