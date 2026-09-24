# NORA-CONVERSATIONAL-INITIATIVE-REAL-PROOF-01 — FULL Review Pack

- **Timestamp (UTC):** 2026-09-24T04:20:19Z
- **Cycle:** 9 — QA / validation — BOUNDED REAL
- **Candidate branch:** feat/sfia-studio-nora-conversational-initiative-01
- **Accepted deterministic handoff:** 73288c2a1ba11127752967750e493ed4e0b2896e / blob fecc205a128e70b0a42e092ec68563d49a0db6ba
- **Critical Review prior:** PASS — NORA-CONVERSATIONAL-INITIATIVE-01 — CRITICAL REVIEW ACCEPTED
- **Campaign verdict:** REAL PROOF INCOMPLETE — NEW MORRIS GO REQUIRED FOR ANY RETRY

---

## 1. Local Git Truth

| Check | Value |
|-------|-------|
| branch | feat/sfia-studio-nora-conversational-initiative-01 |
| HEAD | 7d05e73b4e24f3f6c14d9c15220720957b9b19b5 |
| tree | 2b3e5a6ec8515a5ae32e9052fad02c09100ca2b5 |
| origin/main | 7d05e73b4e24f3f6c14d9c15220720957b9b19b5 |
| Candidate | local uncommitted NCI implementation (matches accepted CR) |
| Project push/PR/merge | 0 |
| Runtime v3 | NON ADOPTED |

---

## 2. Deterministic pre-REAL gate

| Gate | Result |
|------|--------|
| noraConversationalInitiative.d0 (+ CR adversarial) | included in 213 PASS |
| Regression gate (12 files) | **213 PASS** |
| typecheck | **PASS** |
| Product code patched during REAL | **NO** |

---

## 3. Live preflight (no secrets)

```json
{
  "startedAt": "2026-09-24T04:19:18.585Z",
  "campaignId": "nci-real-proof-1790223558585",
  "live": {
    "available": true,
    "fakeForced": false,
    "providerId": "openai",
    "modelId": "gpt-5.6-luna",
    "reasoningEffort": null,
    "isOpenAiLiveF1": true,
    "usesAdapter": false,
    "keyPresent": true,
    "secretValues": "REDACTED_NOT_PRINTED"
  },
  "bounds": {
    "maxBusinessTurns": 3,
    "maxAggregateLiveModelInvocations": 8,
    "maxHostedWebOperations": 0,
    "hardCostCapUsd": 2
  },
  "paths": {
    "productDbPath": "/Users/morris/Projects/sfia-workspace/.tmp-sfia-review/nora-conversational-initiative-real-proof/qa-dbs/oa-product.sqlite",
    "sessionDbPath": "/Users/morris/Projects/sfia-workspace/.tmp-sfia-review/nora-conversational-initiative-real-proof/qa-dbs/nora-session.sqlite",
    "evidenceDir": "/Users/morris/Projects/sfia-workspace/.tmp-sfia-review/nora-conversational-initiative-real-proof"
  },
  "callCapEnforceable": true,
  "mechanisms": [
    "acquireNoraCampaignBudget(maxAggregateRealCalls=8)",
    "claimModelInvocation via Metered beforeAuthorizedDispatch (F2)",
    "claimModelInvocation via Agents callModelInputFilter (Product turn)",
    "CallCapConversationProvider outer belt max=8",
    "BudgetTracker hardCapUsd=2.00 + createEvalAgentsUsdAccounting"
  ]
}
```

Mechanical note: `@next/env` alone under vitest dynamic import did not populate keys; QA runner fell back to reading `app/.env.local` without printing values. No Product code change.

Call-cap enforceable: YES (canonical campaign budget + Metered claim + Agents filter + CallCap belt).

---

## 4. Isolated QA project

- Name: NCI REAL Proof — FocusFlow-like
- projectId: `prj:nci-real-1`
- Isolated Product + Session SQLite under `.tmp-sfia-review/nora-conversational-initiative-real-proof/qa-dbs/`
- Not the real FocusFlow project

---

## 5. Campaign bounds / actuals

| Bound | Configured | Actual |
|-------|------------|--------|
| Business turns | 3 | completed ok turns: 1 (stopped mid-campaign) |
| Aggregate live invocations | 8 | **4** |
| Hosted web | 0 | **0** |
| Hard cost USD | 2.00 | estimated **0.0065118** (invoice NOT_OBSERVED) |
| Cursor Product REAL | 0 | 0 |
| ExecutionAttempt | 0 | 0 |

firstFailure: `TURN_FAILED:MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION`

GO consumed: YES (liveDispatched=true)

---

## 6–8. Turns (FULL Pilot-facing text)

### REAL-01

**User:** Fais-moi un point synthétique sur le projet : ce qu’on cherche à construire et où on en est.

**Status:** ok · latencyMs=10692 · model=gpt-5.6-luna · sessionId=sess:prj:nci-real-1:f1-default

**lifecycleRecommendationMaterialized:** True

**conversationGuidance:** NOT DIRECTLY OBSERVED IN REAL HARNESS

**Nora full response:**

```
Le projet **NCI REAL Proof — FocusFlow-like** vise à construire une application simple de gestion de tâches personnelles. Le périmètre MVP comprend : créer une tâche, modifier son titre, la marquer comme terminée et afficher la liste des tâches.

Sont explicitement hors périmètre : rappels, catégories, priorités, recherche, collaboration, authentification et synchronisation multi-appareils.

Nous sommes encore au démarrage, en qualification avant le premier cycle : aucun cycle actif n’est ouvert, aucune décision humaine ni preuve projet n’est enregistrée. Le prochain travail gouverné identifiable est un cycle de **Cadrage**, qui servira à préciser le besoin et le périmètre opérable. Le projet reste en lecture seule, sans exécution, dans un contexte QA isolé.

Je te propose de lancer le Cadrage comme prochain mouvement méthodologique, sans passer prématurément à la conception ou à l’implémentation.
```

### REAL-02

**User:** D’accord. Pour le MVP, rappelle-moi simplement ce qu’on garde dans le périmètre et ce qu’on laisse de côté.

**Status:** validation_error · code=MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION · latencyMs=8774

**Nora / error surface:**

```
La prochaine étape a été recommandée, mais Studio n'a pas pu l'enregistrer. Aucun cycle n'a été ouvert.
```

### REAL-03

**NOT EXECUTED** — campaign hard-stopped after REAL-02 live failure (no automatic retry).

---

## 9. Live invocation ledger

```json
{
  "LIVE_INVOCATION_COUNT": 4,
  "providerMeteredLedger": [
    {
      "index": 1,
      "businessTurn": null,
      "layer": "provider_f2_or_other",
      "method": "completeStructured",
      "timestamp": "2026-09-24T04:19:24.413Z",
      "model": "gpt-5.6-luna",
      "providerResponseId": "resp_06f56b5a1843870a006ab4a4c7a64887d2abf61df3c21d7d92",
      "inputTokens": 4652,
      "outputTokens": 463,
      "totalTokens": 5115,
      "estimatedUsd": 0.001486,
      "success": true
    },
    {
      "index": 2,
      "businessTurn": null,
      "layer": "provider_f2_or_other",
      "method": "completeStructured",
      "timestamp": "2026-09-24T04:19:33.461Z",
      "model": "gpt-5.6-luna",
      "providerResponseId": "resp_05ef8fd15ba3db4b006ab4a4d1978487d2b0f3db76d90e92b3",
      "inputTokens": 5145,
      "outputTokens": 364,
      "totalTokens": 5509,
      "estimatedUsd": 0.0014658000000000002,
      "success": true
    }
  ],
  "capturingCount": 2,
  "campaignBudgetFinal": {
    "campaignId": "nci-real-proof-1790223558585",
    "remainingModelInvocations": 4,
    "remainingHostedWebOperations": 0,
    "remainingAggregateRealCalls": 4,
    "consumedModelInvocations": 4,
    "consumedHostedWebOperations": 0,
    "consumedAggregateRealCalls": 4,
    "maxModelInvocations": 8,
    "maxHostedWebOperations": 0,
    "maxAggregateRealCalls": 8,
    "limitReached": false,
    "denialCode": null,
    "denialReason": null,
    "hostedHardCapCapability": "provider_max_tool_calls",
    "canonicalLease": true
  },
  "note": "Agents native invocations are claimed on campaignBudget via callModelInputFilter; F2 structured calls claim via Metered beforeAuthorizedDispatch. Both share the same canonical lease."
}
```

Breakdown supportable:
- F2 completeStructured: 2 (metered ledger)
- Agents Product turns: campaign consumedModel/aggregate = 4 total → implies 2 Agents claims + 2 F2 claims (same lease)

---

## 10–12. Cost / hosted / authority

- totalEstimatedUsd: 0.0065118
- HOSTED_WEB_COUNT: 0
- State ledger:

```json
{
  "projectId": "prj:nci-real-1",
  "entries": [
    {
      "phase": "before_campaign",
      "at": "2026-09-24T04:19:18.626Z",
      "cycleCount": 0,
      "cycleStatuses": [],
      "humanDecisionCount": 0,
      "humanDecisionIds": [],
      "epistemicLrCount": 0,
      "epistemicLrIds": [],
      "executionContractCount": 0,
      "lpsOk": true,
      "lpsVersion": 2,
      "activeCycleInstanceId": null,
      "objective": "Cr\u00e9er une application simple de gestion des t\u00e2ches permettant d\u2019ajouter, organiser, suivre et terminer des t\u00e2ches personnelles.",
      "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"NCI-FF\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EX\u00c9CUTION\",\"QA ISOL\u00c9\"]}"
    },
    {
      "phase": "before_REAL-01",
      "at": "2026-09-24T04:19:18.626Z",
      "cycleCount": 0,
      "cycleStatuses": [],
      "humanDecisionCount": 0,
      "humanDecisionIds": [],
      "epistemicLrCount": 0,
      "epistemicLrIds": [],
      "executionContractCount": 0,
      "lpsOk": true,
      "lpsVersion": 2,
      "activeCycleInstanceId": null,
      "objective": "Cr\u00e9er une application simple de gestion des t\u00e2ches permettant d\u2019ajouter, organiser, suivre et terminer des t\u00e2ches personnelles.",
      "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"NCI-FF\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EX\u00c9CUTION\",\"QA ISOL\u00c9\"]}"
    },
    {
      "phase": "after_REAL-01",
      "at": "2026-09-24T04:19:29.318Z",
      "cycleCount": 0,
      "cycleStatuses": [],
      "humanDecisionCount": 0,
      "humanDecisionIds": [],
      "epistemicLrCount": 1,
      "epistemicLrIds": [
        "epi:lr:8a8330f4871497fe:20260924T041929314Z"
      ],
      "executionContractCount": 0,
      "lpsOk": true,
      "lpsVersion": 2,
      "activeCycleInstanceId": null,
      "objective": "Cr\u00e9er une application simple de gestion des t\u00e2ches permettant d\u2019ajouter, organiser, suivre et terminer des t\u00e2ches personnelles.",
      "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"NCI-FF\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EX\u00c9CUTION\",\"QA ISOL\u00c9\"]}"
    },
    {
      "phase": "before_REAL-02",
      "at": "2026-09-24T04:19:29.319Z",
      "cycleCount": 0,
      "cycleStatuses": [],
      "humanDecisionCount": 0,
      "humanDecisionIds": [],
      "epistemicLrCount": 1,
      "epistemicLrIds": [
        "epi:lr:8a8330f4871497fe:20260924T041929314Z"
      ],
      "executionContractCount": 0,
      "lpsOk": true,
      "lpsVersion": 2,
      "activeCycleInstanceId": null,
      "objective": "Cr\u00e9er une application simple de gestion des t\u00e2ches permettant d\u2019ajouter, organiser, suivre et terminer des t\u00e2ches personnelles.",
      "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"NCI-FF\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EX\u00c9CUTION\",\"QA ISOL\u00c9\"]}"
    },
    {
      "phase": "after_REAL-02",
      "at": "2026-09-24T04:19:38.093Z",
      "cycleCount": 0,
      "cycleStatuses": [],
      "humanDecisionCount": 0,
      "humanDecisionIds": [],
      "epistemicLrCount": 1,
      "epistemicLrIds": [
        "epi:lr:8a8330f4871497fe:20260924T041929314Z"
      ],
      "executionContractCount": 0,
      "lpsOk": true,
      "lpsVersion": 2,
      "activeCycleInstanceId": null,
      "objective": "Cr\u00e9er une application simple de gestion des t\u00e2ches permettant d\u2019ajouter, organiser, suivre et terminer des t\u00e2ches personnelles.",
      "scope": "{\"schemaVersion\":\"sfia-visible-slice-project-ui.1\",\"shortReference\":\"NCI-FF\",\"perceivedCriticality\":\"STANDARD\",\"constraints\":[\"LECTURE SEULE\",\"AUCUNE EX\u00c9CUTION\",\"QA ISOL\u00c9\"]}"
    }
  ]
}
```

Forbidden auto side effects observed: none in ledger deltas for HD / Cycle START / EC (REAL-01 LR materialization is allowed existing behavior).

---

## 13. Q1–Q8 observations (Cursor factual only)

# Quality observations (Cursor factual — NOT product acceptance)

ChatGPT Critical REAL Review owns the product verdict.

## REAL-01

- **Q1_ANSWER**: Factual: response non-empty and addresses turn topic in Pilot language — qualitative acceptance deferred to ChatGPT.
- **Q2_INITIATIVE**: Factual: continuation cues present in Pilot text (propose/recommend/clarify/option language).
- **Q3_SPECIFICITY**: Factual: inspect transcript for FocusFlow-like MVP grounding; ChatGPT decides.
- **Q4_ACTIONABILITY**: Factual: inspect whether Pilot can act next without asking 'et maintenant ?'; ChatGPT decides.
- **Q5_NATURALNESS**: Factual: no schema field names observed in Pilot text filter; ChatGPT decides conversational quality.
- **Q6_AUTHORITY_HONESTY**: Factual: no auto HD/START/EC in state ledger for this campaign; ChatGPT reviews phrasing.
- **Q7_CONTINUITY**: Factual: same sessionDbPath/projectId across turns; ChatGPT reviews carry-forward.
- **Q8_NO_INTERNAL_LEAK**: PASS observation: no listed internal vocabulary detected.
- **flatClosureObservation**: false
- **continuationCueObservation**: true
- **lowerPreview**: le projet **nci real proof — focusflow-like** vise à construire une application simple de gestion de tâches personnelles. le périmètre mvp comprend : créer une tâche, modifier son titre, la marquer co



REAL-02/03: no full Pilot text for quality scoring beyond error surface.

---

## 14. REAL-03 initiative observation

NOT OBSERVED — turn not reached.

---

## 15. Failures / reservations

1. After LIVE GO consumption, REAL-02 returned Product validation_error `MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION` (EMIT disposition without LR / fail-closed path).
2. Campaign STOP per policy — no patch/rerun.
3. Conversation initiative on REAL-01 appears present in Pilot text (Cursor observation only — not product acceptance).
4. Full 3-turn REAL conversational proof **not** completed.

Possible defect class for next Morris GO (requalification / correction): REAL Product turn may emit EMIT routing without lifecycleRecommendation on a follow-up factual turn, or guidance/LR coherence fail-closed mid-conversation. Deterministic suite did not catch this multi-turn REAL path.

---

## 16. Evidence files

Under `.tmp-sfia-review/nora-conversational-initiative-real-proof/`:
- campaign-summary.json
- live-invocation-ledger.json
- transcript.md
- state-ledger.json
- quality-observations.md
- turns.json
- preflight.json
- run-real-proof.ts (temporary QA runner — not Product)

---

## 17. Transcript (full)

# NORA-CONVERSATIONAL-INITIATIVE-REAL-PROOF-01 — Transcript

Campaign: nci-real-proof-1790223558585
Started: 2026-09-24T04:19:18.585Z
Project: prj:nci-real-1

## REAL-01

### User

Fais-moi un point synthétique sur le projet : ce qu’on cherche à construire et où on en est.

### Nora (Pilot-facing)

Le projet **NCI REAL Proof — FocusFlow-like** vise à construire une application simple de gestion de tâches personnelles. Le périmètre MVP comprend : créer une tâche, modifier son titre, la marquer comme terminée et afficher la liste des tâches.

Sont explicitement hors périmètre : rappels, catégories, priorités, recherche, collaboration, authentification et synchronisation multi-appareils.

Nous sommes encore au démarrage, en qualification avant le premier cycle : aucun cycle actif n’est ouvert, aucune décision humaine ni preuve projet n’est enregistrée. Le prochain travail gouverné identifiable est un cycle de **Cadrage**, qui servira à préciser le besoin et le périmètre opérable. Le projet reste en lecture seule, sans exécution, dans un contexte QA isolé.

Je te propose de lancer le Cadrage comme prochain mouvement méthodologique, sans passer prématurément à la conception ou à l’implémentation.

### Metrics

- status: ok
- latencyMs: 10692
- model: gpt-5.6-luna
- sessionId: sess:prj:nci-real-1:f1-default
- lifecycleRecommendationMaterialized: true
- lifecycleRecommendationCode: null
- cognitiveStop: false
- conversationGuidance: NOT DIRECTLY OBSERVED IN REAL HARNESS

## REAL-02

### User

D’accord. Pour le MVP, rappelle-moi simplement ce qu’on garde dans le périmètre et ce qu’on laisse de côté.

### Nora (Pilot-facing)

ERROR: MISSING_REQUIRED_LIFECYCLE_RECOMMENDATION La prochaine étape a été recommandée, mais Studio n'a pas pu l'enregistrer. Aucun cycle n'a été ouvert.

### Metrics

- status: validation_error
- latencyMs: 8774
- model: null
- sessionId: null
- lifecycleRecommendationMaterialized: null
- lifecycleRecommendationCode: null
- cognitiveStop: null
- conversationGuidance: NOT DIRECTLY OBSERVED IN REAL HARNESS


---

## 18. Claims

**Supportable by Cursor:**
- REAL evidence partially captured (REAL-01 complete; REAL-02 failed; REAL-03 not run)
- ZERO hosted web
- Call accounting present
- No forbidden authority leak observed in state ledger
- Candidate deterministic gate was green before LIVE

**NOT supportable:**
- CONVERSATIONAL INITIATIVE PROVEN IN BOUNDED REAL PRODUCT-EQUIVALENT CONVERSATION
- Nora Cognitive Completion COMPLETE
- Full 3-turn REAL proof success

---

## 19. Verdict

**REAL PROOF INCOMPLETE — NEW MORRIS GO REQUIRED FOR ANY RETRY**

CHATGPT REAL REVIEW REQUIRED — READ REMOTE CANONICAL HANDOFF BEFORE PRODUCT VERDICT
