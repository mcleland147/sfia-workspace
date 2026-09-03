# SFIA STUDIO — NORA MW0-MW4-INTEGRATED-REAL-01
# Cumulative Integrated REAL Cognitive Business Chain
# MW0 × MW1 × MW2 × MW3 × MW4

**Timestamp (Europe/Paris):** 2026-09-03 09:40:35 CEST
**Timestamp (UTC):** 2026-09-03T07:40:35Z
**Cycle:** 9 — QA / Validation
**Typology:** RUN
**Profile:** CRITICAL
**Morris GO consumed:** MW0-MW4-INTEGRATED-REAL-01 CUMULATIVE INTEGRATED REAL COGNITIVE BUSINESS CHAIN

**Final verdict:** STOP — INTEGRATED REAL ENVIRONMENT/TOOLING REQUALIFICATION REQUIRED

**Specific blocker:** LIVE budget gate — minimum technically required OpenAI model invocations = **14** > authorized hard maximum **8**.

LIVE executed: **0**

---

## 1. Purpose

Verify current corrected MW4 candidate does not regress the previously proven MW0→MW3 business chain and that MW4 cooperates on the same real product path.

PROOF / REGRESSION only. No product correction. No architecture change. No project Git write.

---

## 2. Local Git Truth Check — PASS

| Field | Value |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-nora-mw4-grounding` |
| Branch | `delivery/sfia-studio-nora-mw4-grounding-durability` |
| HEAD | `deb34943dd85472644c221243cd7c0fd5369614e` |
| origin/main | `deb34943dd85472644c221243cd7c0fd5369614e` |
| MW4 REAL handoff tip | `ab89229b73dba5a4c6b1f92f1d523cc21cfcecb4` |
| MW4 REAL handoff blob | `c7103a1dc5fce7c3df31afe5076a152b849cc960` |
| Historical MW0→MW3 handoff | `39c50895c7b6f1423198d034384e1c37fba8ea03` |
| Dirty candidate | INTENTIONAL (accepted MW4 CORR candidate) |

---

## 3. Candidate fingerprint — matches accepted MW4-REAL-01 — PASS

| Artifact | SHA256 |
|---|---|
| Expected tracked diff (MW4-REAL-01) | `4122c95665df214ee647083ebe5f469bbf727c1d78060559a37dea3fb401804d` |
| Entry tracked diff | `4122c95665df214ee647083ebe5f469bbf727c1d78060559a37dea3fb401804d` |
| Exit tracked diff | `4122c95665df214ee647083ebe5f469bbf727c1d78060559a37dea3fb401804d` |
| Expected manifest (MW4-REAL-01) | `89b8c5b15b14a7f18900307b4f26981160df233d7b25216fd9285983c4bcc7e4` |
| Entry manifest | `89b8c5b15b14a7f18900307b4f26981160df233d7b25216fd9285983c4bcc7e4` |
| Exit manifest | `89b8c5b15b14a7f18900307b4f26981160df233d7b25216fd9285983c4bcc7e4` |

**ENTRY == EXIT == accepted MW4-REAL-01 fingerprint: PASS**

Product modified by campaign: **NO**
Architecture / persistence change: **NO**
Project commit/push/PR/merge: **NO**

---

## 4. Harvest — PASS (not paraphrased)

Historical campaign: `nora-mw0-mw3-business-integrated-real-1788377416280`
Evidence dir harvested: `sfia-workspace-nora-mw0-mw3-chain-real-2/.tmp-sfia-real/mw0-mw3-business-integrated`
Runner pattern: `orchestrateAssistantSend` + Metered/Capturing OpenAI + `history: []` + ProductSqliteSession + OA `registerEvidence`.

Exact user contracts (marker substituted at runtime):

| Turn | Exact semantic contract |
|---|---|
| T1 | `Pour cette conversation de travail, retiens la prémisse temporaire ${marker} : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement à notre analyse : ce n'est ni une HumanDecision, ni une Confirmation, ni une autorisation d'exécution. Confirme ta compréhension sans exécuter d'action.` |
| T2 | `Sans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant toute recommandation aval. Les informations actuelles restent compatibles avec elle et aucun conflit n'est signalé.` |
| T3 | `Une nouvelle information semble maintenant contredire la condition de travail que tu conserves depuis le début. L'unique Evidence disponible pour cette analyse est ev:mw0-mw3-business-a. Analyse le conflit et indique s'il est suffisamment établi pour bloquer honnêtement la suite.` |
| T4 | `Pour l'analyse courante, les deux Evidence concernées sont ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Elles sont incompatibles sur un point local. Ce point ne remet pas en cause la condition de travail initiale que tu conserves depuis le début. Analyse la situation et indique si le parcours cognitif peut continuer.` |
| Historical T5 → planned new T7 | `Pour cette réévaluation, les Evidence pertinentes sont toujours ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Leur contradiction n'est finalement pas locale : elle invalide directement la condition de travail initiale dont dépend toute recommandation aval. Analyse si la suite peut honnêtement continuer.` |

Planned MW4 extension (not executed):

| Turn | Intent |
|---|---|
| T5 | MW1×MW4 cross-turn grounding / “les deux Evidence” + HONESTLY UNBOUND claim provenance |
| T6 | MW2×MW4 real ToolRouter partiality (L100-N/N) on `projects/sfia-studio/` paths |
| T7 | Historical T5 terminal Cognitive STOP after MW4 activity |

Evidence IDs: `ev:mw0-mw3-business-a`, `ev:mw0-mw3-business-b`

---

## 5. Pre-LIVE regression baseline — PASS

| Check | Result |
|---|---|
| Focused MW0→MW4 deterministic | **44 passed \| 1 skipped** (321 passed \| 1 skipped); skipped = `mw0.realCampaign.test.ts` gated |
| typecheck | PASS |
| lint | PASS |
| git diff --check | PASS |
| Full serial | **NOT RUN** — LIVE not authorized after budget gate; no requirement to burn full serial when LIVE cannot start |

---

## 6. LIVE environment (qualified, not executed)

```
credential_source=existing_env.local (categorical)
OPENAI_API_KEY=PRESENT
OPENAI_MODEL=gpt-5.6-luna
OPENAI_REASONING_EFFORT=unset
production_routing_selected=NO
LIVE_EXECUTED=NO
```

Production routing selected: **NO**

---

## 7. LIVE BUDGET GATE — BLOCKER

```json
{
  "gate": "STOP — LIVE BUDGET WOULD NECESSARILY EXCEED AUTHORIZED MAXIMUM",
  "authorizedMaxLiveInvocations": 8,
  "targetBusinessTurns": 7,
  "requiredTopology": ["T1","T2","T3","T4","T5-MW4-grounding","T6-MW4-partiality","T7-MW3-terminal-STOP"],
  "productPath": "orchestrateAssistantSend",
  "invocationsPerBusinessTurn": {
    "intentAnalysis_completeStructured": 1,
    "nativeAgentsF1_openai": 1,
    "total": 2,
    "evidence": "Historical campaign nora-mw0-mw3-business-integrated-real-1788377416280: each turn had exactly 1 ConversationProvider completeStructured (f2_intent_analysis); completeRound=0 because F1 uses native Agents path (CORR-MW2-REAL-02). Native F1 is still a LIVE OpenAI model invocation not on ConversationProvider ledger."
  },
  "minimumTechnicallyRequiredLiveInvocations": 14,
  "historical5TurnEquivalentUnderStrictCount": 10,
  "LIVE_INVOCATION_COUNT": 0,
  "liveExecuted": false,
  "rationale": "GO §9 requires counting every actual OpenAI model invocation and STOP BEFORE LIVE if path necessarily exceeds 8. Harvested product path cannot reduce below 2 invocations/turn without Fake provider, skipping intent, or product modification — all forbidden."
}
```

### Why 14

Each historical `orchestrateAssistantSend` business turn performs:

1. **1×** `completeStructured` (`f2_intent_analysis`) via ConversationProvider — LIVE OpenAI;
2. **1×** native Agents SDK F1 model call — LIVE OpenAI (not on ConversationProvider ledger; `completeRound=0`).

Proven by historical capturingLedger / providerCallLedger for campaign `…1788377416280`: 5 turns → 5 intent calls + 5 native F1 = **10** actual LIVE invocations under this GO’s strict count (historical meteredCalls=5 only counted ConversationProvider).

Required integrated topology = **7** business turns ⇒ **14** LIVE invocations.

Authorized hard maximum = **8**.

Forbidden escape hatches that were **not** used:
- Fake provider;
- skipping intent analysis;
- collapsing turns to hide criteria;
- product code modification;
- raising the budget silently;
- exceeding 8.

---

## 8. Acceptance matrix (as of STOP)

### GIT / CANDIDATE
| Criterion | Result |
|---|---|
| Local Git Truth | PASS |
| origin/main stable | PASS |
| accepted candidate fingerprint entry | PASS |
| candidate entry/exit parity | PASS |
| product modified by campaign | NO |

### MW0–MW4 LIVE / CROSS-WAVE
All LIVE scenario criteria: **NOT EXECUTED** (budget gate).

### REGRESSION LIVE replay
historical MW0→MW3 invariants on current candidate (LIVE): **NOT EXECUTED**

### POST-CHECK (preflight only)
| Criterion | Result |
|---|---|
| focused/cumulative deterministic | PASS (preflight) |
| typecheck | PASS |
| lint | PASS |
| git diff --check | PASS |
| full serial | NOT RUN |

### LIVE
| Field | Value |
|---|---|
| provider (configured) | openai |
| model (configured) | `gpt-5.6-luna` |
| production routing selected | NO |
| LIVE invocation count | **0 / 8** |
| FA | NO |
| TA | NO |

---

## 9. Reserves / debt

| Item | State |
|---|---|
| RA-06 / RA-07 | OPEN / carry |
| MW2-R01/R02/R03 | CARRY |
| R-MW4-REAL-02 scorer negation debt | CARRY (not exercised) |
| **NEW — R-MW0-MW4-INT-BUDGET-01** | Integrated REAL via `orchestrateAssistantSend` requires ≥2 LIVE invocations/turn; 7-turn MW0→MW4 chain needs ≥14 under strict counting. Morris must raise LIVE ceiling, accept ConversationProvider-only counting (weaker), or redesign campaign topology without product changes. |

---

## 10. Anti-claims

- NOT MW4 CLOSED
- NOT READY FOR PROJECT INTEGRATION
- NOT Cognitive Completion PROVEN
- NOT runtime v3 ADOPTED
- NOT production routing SELECTED
- NOT MW5 READY
- NOT MW0×MW1×MW2×MW3×MW4 INTEGRATED REAL PROVEN (LIVE not run)
- LIVE OpenAI = **0**

---

## 11. Morris decision required

Options (minimum):

1. **Raise LIVE ceiling** to ≥14 (or ≥10 if Phase A-only replay first) for this product path under strict counting;
2. **Accept split counting policy** (document ConversationProvider vs native Agents) — weaker than this GO’s §9;
3. **Reduce topology** with explicit Morris waiver of some Phase B turns (would weaken MW4 cumulative proof);
4. **Do not proceed** until a later GO revises budget/topology.

Do NOT implement product changes to collapse intent+F1.

---

## 12. Exploitable artifacts under `.tmp-sfia-review/mw0-mw4-integrated-real-01/`

### `live-budget-gate.json`
```
{
  "gate": "STOP — LIVE BUDGET WOULD NECESSARILY EXCEED AUTHORIZED MAXIMUM",
  "authorizedMaxLiveInvocations": 8,
  "targetBusinessTurns": 7,
  "requiredTopology": ["T1","T2","T3","T4","T5-MW4-grounding","T6-MW4-partiality","T7-MW3-terminal-STOP"],
  "productPath": "orchestrateAssistantSend",
  "invocationsPerBusinessTurn": {
    "intentAnalysis_completeStructured": 1,
    "nativeAgentsF1_openai": 1,
    "total": 2,
    "evidence": "Historical campaign nora-mw0-mw3-business-integrated-real-1788377416280: each turn had exactly 1 ConversationProvider completeStructured (f2_intent_analysis); completeRound=0 because F1 uses native Agents path (CORR-MW2-REAL-02). Native F1 is still a LIVE OpenAI model invocation not on ConversationProvider ledger."
  },
  "minimumTechnicallyRequiredLiveInvocations": 14,
  "historical5TurnEquivalentUnderStrictCount": 10,
  "LIVE_INVOCATION_COUNT": 0,
  "liveExecuted": false,
  "rationale": "GO §9 requires counting every actual OpenAI model invocation and STOP BEFORE LIVE if path necessarily exceeds 8. Harvested product path cannot reduce below 2 invocations/turn without Fake provider, skipping intent, or product modification — all forbidden."
}
```

### `harvest-mapping.json`
```
{
  "historicalHandoff": "39c50895c7b6f1423198d034384e1c37fba8ea03",
  "historicalCampaignId": "nora-mw0-mw3-business-integrated-real-1788377416280",
  "historicalEvidenceDir": "/Users/morris/Projects/sfia-workspace-nora-mw0-mw3-chain-real-2/.tmp-sfia-real/mw0-mw3-business-integrated",
  "mw4RealHandoff": "ab89229b73dba5a4c6b1f92f1d523cc21cfcecb4",
  "userTurnsHarvested": {
    "T1": "Pour cette conversation de travail, retiens la prémisse temporaire ${marker} : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. ...",
    "T2": "Sans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant toute recommandation aval. ...",
    "T3": "... L'unique Evidence disponible pour cette analyse est ev:mw0-mw3-business-a. ...",
    "T4": "... ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. ... point local ... peut continuer.",
    "historicalT5_deferred_to_new_T7": "... invalide directement la condition de travail initiale ... peut honnêtement continuer."
  },
  "evidenceIds": ["ev:mw0-mw3-business-a", "ev:mw0-mw3-business-b"],
  "entryPath": "orchestrateAssistantSend + Metered/Capturing OpenAI + history:[] + ProductSqliteSession + OA registerEvidence",
  "plannedExtension": {
    "T5": "MW1×MW4 cross-turn grounding / les deux Evidence + unbound claim provenance",
    "T6": "MW2×MW4 ToolRouter partiality L100-N/N on decideReadPath-allowed paths",
    "T7": "historical T5 terminal Cognitive STOP after MW4 activity"
  },
  "status": "HARVESTED — NOT EXECUTED due to LIVE budget gate"
}
```

### `live-env-qualification.txt`
```
credential_source=existing_env.local (categorical)
OPENAI_API_KEY=PRESENT
OPENAI_MODEL=gpt-5.6-luna
OPENAI_REASONING_EFFORT=unset
production_routing_selected=NO
LIVE_EXECUTED=NO
```

### `entry-product.diff.sha256`
```
4122c95665df214ee647083ebe5f469bbf727c1d78060559a37dea3fb401804d
```

### `exit-product.diff.sha256`
```
4122c95665df214ee647083ebe5f469bbf727c1d78060559a37dea3fb401804d
```

### `entry-candidate-manifest.sha256`
```
89b8c5b15b14a7f18900307b4f26981160df233d7b25216fd9285983c4bcc7e4
```

### `exit-candidate-manifest.sha256`
```
89b8c5b15b14a7f18900307b4f26981160df233d7b25216fd9285983c4bcc7e4
```

### `preflight-summary.txt`
```
focused=Test Files  44 passed | 1 skipped (45)
      Tests  321 passed | 1 skipped (322)
typecheck=PASS
lint=PASS
git_diff_check=PASS
LIVE_EXECUTED=NO
```

### `historical-campaign-summary.json`
```
{
  "campaignId": "nora-mw0-mw3-business-integrated-real-1788377416280",
  "sha256": "f6674ddb4f19c98f9f79354b844b3d61a8902804a5a1ff6bba4f3cefc8159066",
  "verdict": "MW0×MW1×MW2×MW3 INTEGRATED REAL BUSINESS CHAIN PROVEN AT MW3 SCOPE — READY FOR CHATGPT CHAIN REVIEW",
  "chainFailure": null,
  "trajectory": [
    "NONE",
    "NONE",
    "CANDIDATE",
    "EVIDENCE_BACKED_CONTINUE",
    "EVIDENCE_BACKED_COGNITIVE_STOP"
  ],
  "cumulativeUsd": 0.0066857999999999996,
  "scorecard": [
    {
      "id": "BC-01",
      "pass": true,
      "detail": "projectId=prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590"
    },
    {
      "id": "BC-02",
      "pass": true,
      "detail": "sessionIds=sess:prj:1ce5461c-d0f1-4e16-8fac-07a3fd6c0590:f1-default"
    },
    {
      "id": "BC-03",
      "pass": true,
      "detail": "history=[] every turn"
    },
    {
      "id": "BC-04",
      "pass": true,
      "detail": "T1 premise durable in Memory B"
    },
    {
      "id": "BC-05",
      "pass": true,
      "detail": "T2 recalls Gate-Kappa without repetition; recalls=true"
    },
    {
      "id": "BC-06",
      "pass": true,
      "detail": "T1/T2 no false contradiction"
    },
    {
      "id": "BC-07",
      "pass": true,
      "detail": "CWP all turns"
    },
    {
      "id": "BC-08",
      "pass": true,
      "detail": "COGNITIVE_STRATEGY_SELECTED all F1"
    },
    {
      "id": "BC-09",
      "pass": true,
      "detail": "T3/T4/T5 not dishonest Routine/low"
    },
    {
      "id": "BC-10",
      "pass": true,
      "detail": "MW2 strategy observed separately; disposition from Studio MW3 policy on current-turn candidate+OA Evidence"
    },
    {
      "id": "BC-11",
      "pass": true,
      "detail": "T3 disposition=candidate"
    },
    {
      "id": "BC-12",
      "pass": true,
      "detail": "T4 disposition=evidence_backed"
    },
    {
      "id": "BC-13",
      "pass": true,
      "detail": "T4 local continue"
    },
    {
      "id": "BC-14",
      "pass": true,
      "detail": "T5 disposition=evidence_backed"
    },
    {
      "id": "BC-15",
      "pass": true,
      "detail": "T5 Cognitive STOP"
    },
    {
      "id": "BC-16",
      "pass": true,
      "detail": "STOP ≠ technical failure"
    },
    {
      "id": "BC-17",
      "pass": true,
      "detail": "STOP ≠ SUCCESS"
    },
    {
      "id": "BC-18",
      "pass": true,
      "detail": "Evidence/Source project-scoped"
    },
    {
      "id": "BC-19",
      "pass": true,
      "detail": "no invented Evidence promoted"
    },
    {
      "id": "BC-20",
      "pass": true,
      "detail": "no silent Truth C mutation"
    },
    {
      "id": "BC-21",
      "pass": true,
      "detail": "native OpenAI F1"
    },
    {
      "id": "BC-22",
      "pass": true,
      "detail": "no Fake/script path"
    },
    {
      "id": "BC-23",
      "pass": true,
      "detail": "budget.cumulativeUsd=0.0066857999999999996; meteredCalls=5"
    },
    {
      "id": "BC-24",
      "pass": true,
      "detail": "preflight green; post-regression recorded after campaign"
    },
    {
      "id": "BC-25",
      "pass": true,
      "detail": "MW4-S01 cross-turn Evidence durability NOT TESTED; T4/T5 explicitly supply A+B"
    }
  ]
}```



### Harvested exactUserContent from historical turn JSON

#### T1
```text
Pour cette conversation de travail, retiens la prémisse temporaire PREMISE-MW3-BUSINESS-ae78731b : avant toute recommandation d'exécution, Gate-Kappa doit rester valide. Cette prémisse sert uniquement à notre analyse : ce n'est ni une HumanDecision, ni une Confirmation, ni une autorisation d'exécution. Confirme ta compréhension sans exécuter d'action.
```

#### T2
```text
Sans que je reformule la prémisse de travail précédente, rappelle précisément la condition qui doit rester vraie avant toute recommandation aval. Les informations actuelles restent compatibles avec elle et aucun conflit n'est signalé.
```

#### T3
```text
Une nouvelle information semble maintenant contredire la condition de travail que tu conserves depuis le début. L'unique Evidence disponible pour cette analyse est ev:mw0-mw3-business-a. Analyse le conflit et indique s'il est suffisamment établi pour bloquer honnêtement la suite.
```

#### T4
```text
Pour l'analyse courante, les deux Evidence concernées sont ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Elles sont incompatibles sur un point local. Ce point ne remet pas en cause la condition de travail initiale que tu conserves depuis le début. Analyse la situation et indique si le parcours cognitif peut continuer.
```

#### T5
```text
Pour cette réévaluation, les Evidence pertinentes sont toujours ev:mw0-mw3-business-a et ev:mw0-mw3-business-b. Leur contradiction n'est finalement pas locale : elle invalide directement la condition de travail initiale dont dépend toute recommandation aval. Analyse si la suite peut honnêtement continuer.
```

### Historical per-turn providerCalls (ConversationProvider only)
```json
[
  {
    "turnId": "T1",
    "providerCalls": [
      {
        "method": "completeStructured",
        "schemaName": "f2_intent_analysis"
      }
    ],
    "completeRoundCalls": 0,
    "isOpenAiLiveF1": true
  },
  {
    "turnId": "T2",
    "providerCalls": [
      {
        "method": "completeStructured",
        "schemaName": "f2_intent_analysis"
      }
    ],
    "completeRoundCalls": 0,
    "isOpenAiLiveF1": true
  },
  {
    "turnId": "T3",
    "providerCalls": [
      {
        "method": "completeStructured",
        "schemaName": "f2_intent_analysis"
      }
    ],
    "completeRoundCalls": 0,
    "isOpenAiLiveF1": true
  },
  {
    "turnId": "T4",
    "providerCalls": [
      {
        "method": "completeStructured",
        "schemaName": "f2_intent_analysis"
      }
    ],
    "completeRoundCalls": 0,
    "isOpenAiLiveF1": true
  },
  {
    "turnId": "T5",
    "providerCalls": [
      {
        "method": "completeStructured",
        "schemaName": "f2_intent_analysis"
      }
    ],
    "completeRoundCalls": 0,
    "isOpenAiLiveF1": true
  }
]
```

### Preflight focused suite tail
```text
 ✓ __tests__/nora-cognitive-runtime/mw2.corr02.nativeLiveBoundary.d0.test.ts (7 tests) 8ms
 ✓ __tests__/nora-cognitive-runtime/mw4.corr01f.timestamp.d0.test.ts (2 tests) 5ms
 ✓ __tests__/nora-cognitive-runtime/mw3.turn.wiring.d0.test.ts (2 tests) 7ms
 ✓ __tests__/nora-cognitive-runtime/mw4.s02.recovery.narrative.d0.test.ts (4 tests) 7ms
 ✓ __tests__/nora-cognitive-runtime/mw2.s01.cwpPolicy.d0.test.ts (25 tests) 4ms
 ✓ __tests__/nora-cognitive-runtime/mw3.s01.s02.dispositionStop.d0.test.ts (16 tests) 3ms
 ✓ __tests__/nora-eval/mw3.disposition.eval.test.ts (3 tests) 2ms
 ✓ __tests__/nora-eval/mw0.providerInjection.test.ts (2 tests) 2ms
 ✓ __tests__/nora-cognitive-runtime/mw4.s03.partiality.d0.test.ts (9 tests) 2ms
 ✓ __tests__/nora-eval/mw0.corr08.secretResolutionPortability.test.ts (7 tests) 2ms
 ✓ __tests__/nora-cognitive-runtime/mw4.corr01d.claimProvenance.d0.test.ts (3 tests) 1ms
 ↓ __tests__/nora-eval/mw0.realCampaign.test.ts (1 test | 1 skipped)
 ✓ __tests__/project-assistant/mw3.correction.panel.ux.d0.test.tsx (3 tests) 37ms
 ✓ __tests__/project-assistant/mw3.cognitiveStop.panel.ux.d0.test.tsx (2 tests) 29ms

 Test Files  44 passed | 1 skipped (45)
      Tests  321 passed | 1 skipped (322)
   Start at  09:37:35
   Duration  16.57s (transform 828ms, setup 716ms, collect 8.23s, tests 3.69s, environment 338ms, prepare 855ms)

```

---

## 13. Final verdict

**STOP — INTEGRATED REAL ENVIRONMENT/TOOLING REQUALIFICATION REQUIRED**

Subtype: **LIVE BUDGET GATE** (minimum 14 actual OpenAI model invocations required; hard max 8).

No LIVE calls executed. Candidate untouched. No product patch.

Next: Morris requalifies LIVE budget / topology / counting policy before any MW0→MW4 integrated REAL execution.
