# SFIA Review Pack FULL — T-A5 Modeled Validation Option A (CORRECTED)

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | `2026-07-25 15:35:16 CEST (+0200)` |
| **Cycle / profil** | Validation Modeled T-A5 — **Critical** — CORRECTED AND VALIDATED |
| **Gate** | `GO VALIDATE T-A5 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Repo** | mcleland147/sfia-workspace |
| **origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **HEAD initial** | `de9cc5d37c7230f7762a39436949972f44ab5a3f` |
| **HEAD final** | `f320208fdf4583035a6d0d49efeb302cec037989` |
| **merge-base** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **Truth Check** | **PASS** |
| **status** | `## framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution...origin/main [ahead 8]
?? .tmp-sfia-review/` |
| **Template** | FULL |
| **Handoff source** | `.tmp-sfia-review/chatgpt-review.md` |
| **CKC** | pilots/01-cadrage.md — candidate ; `executionAuthority=false` ; aucune autorité décisions |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 MODELED CORRECTED AND VALIDATED — RUNTIME FRAMING MAY OPEN WITH MORRIS GO` |
| **Gate suivant** | `GO FRAME T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed**) |
| **Push projet / PR / runtime** | **NONE** |

## Morris decisions D01–D10 (EXACT — validated)

| ID | Decision | Result |
|----|----------|--------|
| D01 | APPROVE A — Attempt separate aggregate | PASS |
| D02 | APPROVE C WITH CONDITION — Critical propose+confirm ; capabilities non-Critical closed | PASS (critical FORBIDDEN with capabilities) |
| D03 | APPROVE A WITH CONDITION — Select≠Start ; TTL | PASS |
| D04 | APPROVE B — lifecycle ; no blocked/starting ; +result_pending | PASS |
| D05 | APPROVE A — persist-then-launch | PASS |
| D06 | APPROVE C — result_pending ; no speculative completed | PASS |
| D07 | APPROVE B+D — stop + cancel best-effort | PASS |
| D08 | APPROVE A WITH CONDITIONS — authority matrix | PASS (catalog matrix) |
| D09 | APPROVE A — timeout→contract failed ; retry new Attempt | PASS |
| D10 | APPROVE A+C — T-A5 technical ; T-A6 Evidence/Claim | PASS |

Reserves B5, R1, R-T-A3-1..4 **OPEN**. R-T-A3-1/2 blockers real execution.

## Findings C1–C4 (proven defects) + corrections

### C1 Schema conditionals — FIXED
Attempt `allOf` hardened: timeout⇒timedOutAt ; failed⇒failedAt+(errorRef|stopReason) with launch-fail exception ; cancelled⇒cancelledAt ; post-launch⇒launchedAt+startedAt ; accepted⇒selection triad ; capabilities⇒non-critical profiles only ; retryIndex⇒retryOfAttemptId ; kept prior Critical/cnf/retryOf/result_pending/succeeded rules.

### C2 Valid examples — FIXED
Added `execution-attempt-launch-fail.valid.json` ; aligned invalids with launchedAt where needed for targeted rejects. Provenance nested 0.1.0-oa OK ; Attempt root 0.2.0-oa.

### C3 Catalog 09 — FIXED
`agentRef?` → `selectedAgentRef?` ; Matrice d'autorité T-A5 ; transitions accepted→failed (launch fail), accepted→cancelled, result_pending cancel note ; forbidden planned/blocked/starting + launch-then-persist + speculative completed.

### C4 Invalid fixtures + narratives — FIXED
15+ new invalids (timeout/failed/cancelled timestamps, running-without-launchedAt, accepted-without-selection, capabilities-*, legacy fields, blocked/starting/planned, ta6-claimId, retry-index-without-retryOf, failed-without-error-or-stop) + 8 narratives (§25 runtime-only).

### C5 Tests — FIXED
Attempt suite 20→28 ; Contract 18 green ; total 38→**46**.

### C6 Docs — FIXED
`04-modeled-validation.md` ; README MODELED CORRECTED AND VALIDATED ; 03 factual conditionals.

## Tests

| Suite | Initial | Final |
|-------|---------|-------|
| execution-attempt-governance.test.mjs | 20 | **28** |
| execution-contract-governance.test.mjs | 18 | **18** |
| **Total** | **38** | **46** PASS / 0 fail |

`git diff --check`: PASS. Runtime/app/method/prompts/package/SQL/UI: untouched.

## Commits (local only — no project push)

```
f320208 docs(sfia-studio): document T-A5 modeled validation
b8b199b test(modeled): cover T-A5 validation correction
6c4f656 fix(modeled): correct T-A5 governance defect
```

SHAs:
```
f320208fdf4583035a6d0d49efeb302cec037989 docs(sfia-studio): document T-A5 modeled validation
b8b199b84999420705a7433fda17eec23611ce0e test(modeled): cover T-A5 validation correction
6c4f6567eca8509a3eebe5331e0e737153e9fa77 fix(modeled): correct T-A5 governance defect
```

## Diff name-status (`de9cc5d37c72..HEAD`)

```
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/03-materialization.md
A	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/04-modeled-validation.md
M	projects/sfia-studio/sfia-v3-delivery/v3-native-option-a/t-a5-agent-selection-execution/README.md
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/09-command-event-error-and-transition-catalog.md
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-adapter-foreign-attempt.narrative.md
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-launch-fail.valid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-launch-then-persist.forbidden.narrative.md
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-morris-displayname-spoof.narrative.md
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-n3-without-canActAsMorris.narrative.md
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-result-pending-no-direct-completed.narrative.md
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-retry-budget-exhausted.narrative.md
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-ttl-expired.narrative.md
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/execution-attempt-wrong-agent-confirmation.narrative.md
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.accepted-without-selection.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.blocked-status.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.cancelled-without-cancelledAt.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.capabilities-on-critical-profile.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.capabilities-without-profile.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.failed-without-error-or-stop.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.failed-without-failedAt.invalid.json
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.human-confirm-running-without-cnf.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.legacy-agentRef.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.legacy-contractId.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.planned-status.invalid.json
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.result-pending-without-ts.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.retry-index-without-retryOf.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.running-without-launchedAt.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.starting-status.invalid.json
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.succeeded-without-result.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.ta6-claimId.invalid.json
A	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/examples/invalid/execution-attempt.timeout-without-timedOutAt.invalid.json
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/schemas/execution/execution-attempt.schema.json
M	projects/sfia-studio/sfia-v3-modeled/v3-native-option-a/tests/execution-attempt-governance.test.mjs
```

## Diffstat

```
.../03-materialization.md                          |  10 +-
 .../04-modeled-validation.md                       | 222 +++++++++++++++++++++
 .../t-a5-agent-selection-execution/README.md       |  24 ++-
 ...9-command-event-error-and-transition-catalog.md |  29 ++-
 ...on-attempt-adapter-foreign-attempt.narrative.md |   5 +
 .../execution-attempt-launch-fail.valid.json       |  32 +++
 ...empt-launch-then-persist.forbidden.narrative.md |   9 +
 ...n-attempt-morris-displayname-spoof.narrative.md |   9 +
 ...-attempt-n3-without-canActAsMorris.narrative.md |   7 +
 ...result-pending-no-direct-completed.narrative.md |   7 +
 ...ion-attempt-retry-budget-exhausted.narrative.md |   7 +
 .../execution-attempt-ttl-expired.narrative.md     |   5 +
 ...n-attempt-wrong-agent-confirmation.narrative.md |   7 +
 ...attempt.accepted-without-selection.invalid.json |  25 +++
 .../execution-attempt.blocked-status.invalid.json  |  28 +++
 ...empt.cancelled-without-cancelledAt.invalid.json |  31 +++
 ...t.capabilities-on-critical-profile.invalid.json |  28 +++
 ...tempt.capabilities-without-profile.invalid.json |  27 +++
 ...tempt.failed-without-error-or-stop.invalid.json |  31 +++
 ...on-attempt.failed-without-failedAt.invalid.json |  32 +++
 ....human-confirm-running-without-cnf.invalid.json |   3 +-
 .../execution-attempt.legacy-agentRef.invalid.json |  28 +++
 ...xecution-attempt.legacy-contractId.invalid.json |  28 +++
 .../execution-attempt.planned-status.invalid.json  |  28 +++
 ...-attempt.result-pending-without-ts.invalid.json |   7 +-
 ...ttempt.retry-index-without-retryOf.invalid.json |  30 +++
 ...attempt.running-without-launchedAt.invalid.json |  29 +++
 .../execution-attempt.starting-status.invalid.json |  28 +++
 ...n-attempt.succeeded-without-result.invalid.json |   5 +
 .../execution-attempt.ta6-claimId.invalid.json     |  29 +++
 ...attempt.timeout-without-timedOutAt.invalid.json |  31 +++
 .../execution/execution-attempt.schema.json        | 168 +++++++++++++++-
 .../tests/execution-attempt-governance.test.mjs    | 205 ++++++++++++++++++-
 33 files changed, 1164 insertions(+), 30 deletions(-)
```

## Key schema allOf (ExecutionAttempt 0.2.0-oa — post-correction)

```json
[
  {
    "if": {
      "properties": {
        "status": {
          "const": "accepted"
        }
      },
      "required": [
        "status"
      ]
    },
    "then": {
      "required": [
        "selectionStrategy",
        "selectionProfile",
        "selectionExpiresAt"
      ],
      "description": "accepted ⇒ selectionStrategy + selectionProfile + selectionExpiresAt (TTL)."
    }
  },
  {
    "if": {
      "properties": {
        "selectionStrategy": {
          "const": "capabilities_deterministic"
        }
      },
      "required": [
        "selectionStrategy"
      ]
    },
    "then": {
      "required": [
        "selectionProfile"
      ],
      "properties": {
        "selectionProfile": {
          "type": "string",
          "enum": [
            "standard",
            "light",
            "capitalization"
          ]
        }
      },
      "description": "capabilities_deterministic ⇒ non-Critical closed profile only (standard|light|capitalization); critical FORBIDDEN (D02)."
    }
  },
  {
    "if": {
      "properties": {
        "status": {
          "const": "result_pending"
        }
      },
      "required": [
        "status"
      ]
    },
    "then": {
      "required": [
        "resultPendingAt"
      ]
    }
  },
  {
    "if": {
      "properties": {
        "status": {
          "const": "succeeded"
        }
      },
      "required": [
        "status"
      ]
    },
    "then": {
      "required": [
        "resultRef",
        "completedAt"
      ],
      "description": "No speculative succeeded without durable resultRef."
    }
  },
  {
    "if": {
      "properties": {
        "status": {
          "const": "timeout"
        }
      },
      "required": [
        "status"
      ]
    },
    "then": {
      "required": [
        "timedOutAt"
      ],
      "description": "timeout ⇒ timedOutAt."
    }
  },
  {
    "if": {
      "properties": {
        "status": {
          "const": "cancelled"
        }
      },
      "required": [
        "status"
      ]
    },
    "then": {
      "required": [
        "cancelledAt"
      ],
      "description": "cancelled ⇒ cancelledAt."
    }
  },
  {
    "if": {
      "properties": {
        "status": {
          "enum": [
            "running",
            "result_pending",
            "succeeded",
            "timeout",
            "cancelled"
          ]
        }
      },
      "required": [
        "status"
      ]
    },
    "then": {
      "required": [
        "launchedAt",
        "startedAt"
      ],
      "description": "Post-launch statuses (excl. launch-fail failed path) ⇒ launchedAt + startedAt."
    }
  },
  {
    "if": {
      "properties": {
        "status": {
          "const": "failed"
        }
      },
      "required": [
        "status"
      ]
    },
    "then": {
      "required": [
        "failedAt"
      ],
      "anyOf": [
        {
          "required": [
            "errorRef"
          ]
        },
        {
          "required": [
            "stopReason"
          ]
        }
      ],
      "oneOf": [
        {
          "description": "Launch-fail path: accepted→failed pre-launch without launchedAt.",
          "not": {
            "required": [
              "launchedAt"
            ]
          },
          "required": [
            "stopReason"
          ],
          "properties": {
            "stopReason": {
              "type": "string",
              "pattern": "^(EXECUTION_LAUNCH_FAILED|EXECUTION_PERSISTENCE_FAILED)([:; ].*)?$"
            }
          }
        },
        {
          "description": "Post-launch failed: require launchedAt + startedAt.",
          "required": [
            "launchedAt",
            "startedAt"
          ]
        }
      ],
      "description": "failed ⇒ failedAt + (errorRef OR stopReason); launch-fail may omit launchedAt iff stopReason is EXECUTION_LAUNCH_FAILED|EXECUTION_PERSISTENCE_FAILED; otherwise launchedAt+startedAt required."
    }
  },
  {
    "if": {
      "properties": {
        "selectionProfile": {
          "const": "critical"
        }
      },
      "required": [
        "selectionProfile"
      ]
    },
    "then": {
      "properties": {
        "selectionStrategy": {
          "const": "human_confirmed_proposal"
        }
      },
      "required": [
        "selectionStrategy"
      ],
      "description": "Critical ⇒ human_confirmed_proposal only (D02)."
    }
  },
  {
    "if": {
      "properties": {
        "selectionStrategy": {
          "const": "human_confirmed_proposal"
        },
        "status": {
          "enum": [
            "running",
            "result_pending",
            "succeeded",
            "failed",
            "timeout",
            "cancelled"
          ]
        }
      },
      "required": [
        "selectionStrategy",
        "status"
      ]
    },
    "then": {
      "required": [
        "agentConfirmationRef"
      ],
      "description": "human_confirmed_proposal beyond accepted ⇒ agentConfirmationRef required at Start+."
    }
  },
  {
    "if": {
      "required": [
        "retryOfAttemptId"
      ]
    },
    "then": {
      "required": [
        "retryIndex",
        "maxRetriesBudget"
      ]
    }
  },
  {
    "if": {
      "required": [
        "retryIndex"
      ]
    },
    "then": {
      "required": [
        "retryOfAttemptId"
      ],
      "description": "retryIndex present ⇒ retryOfAttemptId required."
    }
  }
]
```

## Complete content — 04-modeled-validation.md

# 04 — Modeled Validation T-A5 Agent Selection and Execution

| Champ | Valeur |
|-------|--------|
| **Date/heure/fuseau** | `2026-07-25 15:33:50 CEST (+0200)` |
| **Slice** | T-A5 — Agent Selection and Execution |
| **Cycle** | Modeled validation (Critical) — **CORRECTED AND VALIDATED** |
| **Gate** | `GO VALIDATE T-A5 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base / origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` |
| **HEAD initial** | `de9cc5d37c7230f7762a39436949972f44ab5a3f` |
| **Runtime** | **NONE** |
| **Statut** | **MODELED CORRECTED AND VALIDATED** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 MODELED CORRECTED AND VALIDATED — RUNTIME FRAMING MAY OPEN WITH MORRIS GO` |
| **Gate suivant (non consommé)** | `GO FRAME T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A` |

---

## 1. Sources

- Morris D01–D10 (`02-arbitration.md`, `03-materialization.md`)
- Attempt schema `0.2.0-oa` ; AgentDescriptor `0.1.0-oa` ; Contract `0.2.0-oa`
- Catalog `09` ; model `07` / `10`
- Gate validate prompt (§20–§29) + Borned corrections C1–C8
- Tests `execution-attempt-governance.test.mjs` + `execution-contract-governance.test.mjs`

---

## 2. Décisions Morris (exact — non réinterprétées)

| ID | Décision | Validation |
|----|----------|------------|
| D01 | Attempt agrégat séparé | **PASS** — schema autonome ; N Attempts / contrat |
| D02 | Critical propose+confirm ; capabilities non-Critical fermé | **PASS** — Critical⇒human_confirmed ; capabilities⇒standard\|light\|capitalization (critical FORBIDDEN) |
| D03 | Select ≠ Start ; TTL | **PASS** — accepted requires selection* ; narrative TTL |
| D04 | lifecycle + no blocked/starting | **PASS** — enum + invalid blocked/starting/planned |
| D05 | persist-then-launch | **PASS** — launchedAt/startedAt post-launch ; narrative forbidden |
| D06 | result_pending ; no speculative completed | **PASS** — conditionals + narrative |
| D07 | stop + cancel best-effort | **PASS** — cancelledAt ; irreversibleEffectsPossible |
| D08 | authority matrix | **PASS** — catalog Matrice d'autorité T-A5 |
| D09 | timeout→contract failed ; retry new Attempt | **PASS** — timedOutAt ; retryOf↔retryIndex |
| D10 | T-A5 technique ; T-A6 Evidence/Claim | **PASS** — claimId rejected ; boundary 07 |

Réserves B5, R1, R-T-A3-1…4 **OPEN**. R-T-A3-1/2 = blockers exécution réelle.

---

## 3. Inventaire / méthodologie

| Artefact | Avant validation | Après correction |
|----------|------------------|------------------|
| Attempt allOf | TTL/result/succeeded/Critical/cnf/retryOf only | + timeout/failed/cancelled timestamps ; launchedAt/startedAt ; accepted selection triad ; capabilities profile ban critical ; retryIndex⇒retryOf ; launch-fail exception |
| Catalog 09 | tokens T-A5 ; `agentRef?` payload | `selectedAgentRef?` ; authority matrix ; accepted→failed launch-fail ; result_pending cancel note |
| Exemples | 10 valid / 8 invalid | 11 valid (+launch-fail) / 23 invalid ; 9 narratives |
| Tests Attempt | 20 | 28 (+ adversarial C1 + narratives + authority matrix) |
| Contract tests | 18 | 18 (green) |

Méthodologie : AJV Draft-07 compile + fixtures + mutation adversarial + catalog phrase asserts + narrative existence (§25 runtime-only).

---

## 4. Résultats schémas

### Breaking change Attempt `0.2.0-oa`

Inchangé comme bump breaking (materialization). Ce cycle **durcit** les conditionnels sans nouveau bump de version (même `0.2.0-oa`).

### AgentDescriptor `0.1.0-oa`

Inchangé ; docs-first ; not a live registry.

### Attempt conditionnels (C1)

- `accepted` ⇒ `selectionStrategy` + `selectionProfile` + `selectionExpiresAt`
- `capabilities_deterministic` ⇒ profile ∈ {standard, light, capitalization} (**critical FORBIDDEN**)
- `timeout` ⇒ `timedOutAt`
- `cancelled` ⇒ `cancelledAt`
- `failed` ⇒ `failedAt` + (`errorRef` OR `stopReason`) ; launch-fail sans `launchedAt` si `stopReason` ∈ EXECUTION_LAUNCH_FAILED\|EXECUTION_PERSISTENCE_FAILED ; sinon `launchedAt`+`startedAt`
- post-launch `{running,result_pending,succeeded,timeout,cancelled}` ⇒ `launchedAt`+`startedAt`
- `result_pending` ⇒ `resultPendingAt` ; `succeeded` ⇒ `resultRef`+`completedAt`
- Critical ⇒ `human_confirmed_proposal` ; human_confirmed beyond accepted ⇒ `agentConfirmationRef`
- `retryOfAttemptId` ⇒ `retryIndex`+`maxRetriesBudget` ; `retryIndex` ⇒ `retryOfAttemptId`

Provenance nested `schemaVersion` `0.1.0-oa` OK. Root Attempt `0.2.0-oa`.

---

## 5. Sélection / TTL / lifecycle / mappings

- Critical : human_confirmed_proposal + agentConfirmationRef at Start+
- Non-Critical : capabilities_deterministic (standard|light|capitalization)
- TTL : selectionExpiresAt ; Start refuse if expired (narrative)
- Lifecycle : accepted → running → terminals ; running → result_pending → succeeded|failed ; accepted→failed (launch-fail) ; accepted→cancelled
- Mapping : accepted→confirmed ; running→executing ; result_pending→**stays executing** ; succeeded→completed ; failed/timeout→failed ; cancelled→cancelled

---

## 6. Persist / result_pending / autorité / timeout / retry / concurrence / obsolescence / cancel / T-A5↔T-A6

- persist-then-launch only ; launch-then-persist forbidden (catalog + narrative)
- result_pending : no speculative contract completed
- Authority matrix Select/Start/Cancel métier / Emergency Morris / auto-safety / Record / Retry
- N3 ≠ Morris ; spoof displayName refused (narrative)
- timeout Attempt → contract failed ; retry = new Attempt + budget
- Concurrency / double Start : runtime (narrative + catalog EXECUTION_ALREADY_ACTIVE)
- Mid-flight obsolescence / cancel best-effort : cancelledAt ; irreversibleEffectsPossible
- T-A5 technical only ; Evidence/Claim/maturity = T-A6 (`claimId` additionalProperties fail)

---

## 7. Commandes / événements / erreurs / transitions

Voir catalog 09 section T-A5. Corrections validation :

- payload `selectedAgentRef?` (legacy `agentRef?` retiré)
- Matrice d'autorité T-A5 ajoutée
- Transitions : `accepted`→`failed` (launch fail) ; `accepted`→`cancelled` ; `result_pending`→`cancelled` (policy) ; forbidden planned/blocked/starting ; anti launch-then-persist ; no speculative completed from result_pending

---

## 8. Exemples

**Valides (11) :** accepted, running, result_pending, succeeded, failed, timeout, cancelled, retry, critical-selection, noncritical-capabilities, **launch-fail**.

**Invalids (23) :** additionalProperties, bad-schema-version, partial, missing-required, succeeded-without-result, result-pending-without-ts, critical-capabilities, human-confirm-running-without-cnf, timeout-without-timedOutAt, failed-without-failedAt, cancelled-without-cancelledAt, running-without-launchedAt, accepted-without-selection, capabilities-on-critical-profile, capabilities-without-profile, legacy-contractId, legacy-agentRef, blocked/starting/planned-status, ta6-claimId, retry-index-without-retryOf, failed-without-error-or-stop.

**Narratives (9) :** selection-expired, ttl-expired, morris-displayname-spoof, n3-without-canActAsMorris, wrong-agent-confirmation, launch-then-persist.forbidden, adapter-foreign-attempt, result-pending-no-direct-completed, retry-budget-exhausted.

---

## 9. Tests

| Suite | Initial | Final |
|-------|---------|-------|
| execution-attempt-governance.test.mjs | 20 | **28** |
| execution-contract-governance.test.mjs | 18 | **18** |
| **Total** | **38** | **46** PASS / 0 fail |

`git diff --check` : PASS.

---

## 10. Analyse adversariale (§25)

| # | Cas | Couverture |
|---|-----|------------|
| 1 | spoof Morris | narrative + catalog |
| 2 | N3 sans canActAsMorris | narrative |
| 3 | Critical capabilities | invalid + adversarial mutate |
| 4 | Critical sans confirmation | human-confirm-running-without-cnf |
| 5–6 | wrong agent/version confirm | narrative |
| 7 | TTL expiré | narratives |
| 8 | double Start | catalog EXECUTION_ALREADY_ACTIVE (runtime) |
| 9 | launch-then-persist | narrative + launchedAt rules |
| 10 | result_pending→completed | narrative + succeeded requires resultRef |
| 11 | succeeded sans resultRef | invalid + adversarial |
| 12–13 | retry same / budget | retry rules + narrative |
| 14–15 | foreign adapter / dup result | narrative (runtime) |
| 16–17 | contract/decision superseded | catalog/runtime |
| 18–19 | emergency / auto-safety | authority matrix |
| 20 | Evidence/Claim inject | ta6-claimId + mutate |
| 21–22 | additionalProperties / old schemaVersion | fixtures |
| 23–25 | legacy fields / partial / blocked\|starting\|planned | fixtures + adversarial |

---

## 11. Défauts trouvés / corrections

| ID | Défaut | Correction |
|----|--------|------------|
| **C1** | Conditionnels timestamps / selection / launch-fail / retryIndex incomplets | allOf étendu sur Attempt schema |
| **C2** | Fixtures à aligner | launch-fail valid ; invalids enrichis ; launchedAt sur invalids ciblés |
| **C3** | `agentRef?` ; authority matrix absente ; transitions launch-fail | catalog 09 |
| **C4** | Invalids / narratives manquants | 15+ invalids + 8 narratives |
| **C5** | Couverture adversariale insuffisante | +8 tests ; INVALID list complète |
| **C6** | Doc validation absente | ce fichier + README/03 |

---

## 12. Réserves / blockers

| Reserve | Status | Modeled | Runtime | Exec réelle |
|---------|--------|---------|---------|-------------|
| B5 | OPEN | non-blocker | soft | soft |
| R1 | OPEN | soft | soft | hard |
| R-T-A3-1 | OPEN | non-blocker doc | soft | **HARD blocker** Critical réel |
| R-T-A3-2 | OPEN | soft | soft | **HARD blocker** |
| R-T-A3-3 | OPEN | — | soft | soft |
| R-T-A3-4 | OPEN | catalog | soft | soft |

**Blockers modeled :** none remaining for validation gate.
**Blockers runtime :** framing gate not consumed.
**Blockers exécution réelle :** R-T-A3-1/2 OPEN.

---

## 13. Fichiers (ce cycle validation)

**Créés :** `04-modeled-validation.md` ; `execution-attempt-launch-fail.valid.json` ; invalids C4 ; narratives §25.

**Modifiés :** Attempt schema ; catalog 09 ; tests Attempt ; invalids ciblés ; README ; `03-materialization.md` (factual conditionals).

**Interdits non touchés :** `app/**`, method, prompts, package/lockfiles, SQL, UI, runtime.

---

## 14. Anti-claims

- Pas T-A5 RUNTIME / DELIVERY READY / IMPLEMENTED
- Pas agent selected opérationnel / Attempt opérationnel / exécution lancée
- Pas DATABASE SELECTED / réserves CLOSED
- Pas push branche projet / PR / merge
- Pas `GO FRAME T-A5 RUNTIME` consommé
- Système ≠ Morris ; N3 ≠ Morris

---

## 15. Verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A5 MODELED CORRECTED AND VALIDATED — RUNTIME FRAMING MAY OPEN WITH MORRIS GO**

Gate suivant (non consommé) : `GO FRAME T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A`


## Complete content — README.md (T-A5 pack)

# T-A5 — Agent Selection and Execution (Framing Option A)

| Champ | Valeur |
|-------|--------|
| **Slice** | T-A5 — Agent adapter / Attempt / timeout (AT `12-delivery-slices…`) |
| **Titre cycle** | Agent Selection and Execution |
| **Profil** | Critical |
| **Gate framing** | `GO FRAME T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate arbitration** | `GO ARBITRATE T-A5 — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate materialize** | `GO MATERIALIZE T-A5 ARBITRATIONS — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Gate modeled validate** | `GO VALIDATE T-A5 MODELED — SFIA STUDIO V3-NATIVE — OPTION A` (**CONSUMED**) |
| **Branche** | `framing/sfia-studio-v3-native-option-a-t-a5-agent-selection-execution` |
| **Base / origin/main** | `6bfef83971f4d71bc83c12dabad87366447120a7` (T-A4 PR #265 merge) |
| **Runtime `app/lib/oa/**`** | **NONE** (interdit) |
| **Modeled schemas / catalogues** | Attempt `0.2.0-oa` + AgentDescriptor `0.1.0-oa` — **MODELED CORRECTED AND VALIDATED** |
| **Push / PR / merge** | **NONE** (projet) |
| **Statut pack** | **MODELED CORRECTED AND VALIDATED** |
| **Verdict** | `SFIA STUDIO V3-NATIVE OPTION A T-A5 MODELED CORRECTED AND VALIDATED — RUNTIME FRAMING MAY OPEN WITH MORRIS GO` |
| **Gate suivant** | `GO FRAME T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A` (**NOT consumed / NOT presumed**) |

## Objectif

Cadrer, arbitrer, matérialiser, puis **valider** (avec corrections Borned) les décisions Morris T-A5 (agent, Attempt, exécution) en modeled + docs — **sans** runtime, agent opérationnel, Attempt exécutable, shell, réseau, Cursor/MCP, SQL, UI.

## Périmètre

- Framing (`01-framing.md`)
- Arbitration (`02-arbitration.md`) — décisions Morris **APPROVED**
- Materialization (`03-materialization.md`) — schemas / catalogs / exemples / tests
- Modeled validation (`04-modeled-validation.md`) — **CORRECTED AND VALIDATED**
- Réserves héritées maintenues OPEN
- Commits locaux + handoff review

## Hors périmètre

- Runtime T-A5 / delivery exécutable
- Push branche projet, PR, merge
- Fermeture de réserves
- Cutover SFIA v2.6 / MethodMode / OPS1
- Evidence / Claim / maturité (T-A6)

## Sources

- Décisions Morris D01–D10 (voir ci-dessous et `03-materialization.md` / `04-modeled-validation.md`)
- Modeled 07/09 ; Attempt `0.2.0-oa` ; ExecutionContract `0.2.0-oa`
- Runtime T-A4 `execution-contract/**` (lecture seule)
- CKC cadrage pilot (candidate, `executionAuthority=false`)

## Livrables

1. [README.md](./README.md) (ce fichier)
2. [01-framing.md](./01-framing.md) — cadrage
3. [02-arbitration.md](./02-arbitration.md) — pack d’arbitrage + **APPROVED BY MORRIS**
4. [03-materialization.md](./03-materialization.md) — matérialisation
5. [04-modeled-validation.md](./04-modeled-validation.md) — **validation modeled + corrections**

## Réserves (héritées — OPEN)

| Reserve | Status |
|---------|--------|
| B5 | **OPEN** |
| R1 | **OPEN** |
| R-T-A3-1 | **OPEN** (blocker exécution réelle Critical) |
| R-T-A3-2 | **OPEN** (blocker exécution réelle) |
| R-T-A3-3 | **OPEN** |
| R-T-A3-4 | **OPEN** |
| R-T-A4-1/2/3 | resolved-by-modeled (non fermées globalement) |

## Décisions Morris (APPROVED — materialization + validation)

| ID | Approval |
|----|----------|
| D01 | APPROVE A — Attempt separate aggregate |
| D02 | APPROVE C WITH CONDITION — Critical: system propose + human confirm; Option A capabilities only non-Critical closed profile |
| D03 | APPROVE A WITH CONDITION — Select and Start separate; TTL + revalidate at Start |
| D04 | APPROVE B — accepted → running → terminals ; + result_pending ; no blocked/starting durable |
| D05 | APPROVE A — persist-then-launch ; launch-then-persist forbidden |
| D06 | APPROVE C — result_pending ; no speculative completed |
| D07 | APPROVE B+D — stop conditions + cancel best-effort ; no implicit business rollback |
| D08 | APPROVE A WITH CONDITIONS — authority matrix ; Morris emergency ; auto-safety bounded ; RecordResult adapter-bound ; system never Morris |
| D09 | APPROVE A — timeout → contract failed ; retry = new Attempt + retryOf + budget + auth |
| D10 | APPROVE A+C — T-A5 technical only ; Evidence/Claim/maturity = T-A6 |

Détail : [03-materialization.md](./03-materialization.md) · validation : [04-modeled-validation.md](./04-modeled-validation.md) · marquage : [02-arbitration.md](./02-arbitration.md).

## Anti-claims

- Pas T-A5 **AUTHORIZED** runtime / **DELIVERY READY** / **IMPLEMENTED**
- Pas agent **selected** opérationnel / Attempt **operational** / execution **enabled**
- Pas DATABASE SELECTED / réserves **CLOSED**
- Pas Option A **complete**
- Pas push / PR / merge / force-push projet ce cycle
- Pas `GO FRAME T-A5 RUNTIME` consommé


## Authority / lifecycle / anti-claims (summary)

- Select/Start/Cancel métier / Emergency Morris / auto-safety / Record adapter-bound / Retry
- N3 ≠ Morris ; displayName spoof refused ; system ≠ Morris
- persist-then-launch only ; launch-then-persist forbidden
- result_pending stays contract executing ; no speculative completed
- T-A5 technical only ; Evidence/Claim/maturity = T-A6
- No project push / PR / merge / runtime / operational Attempt

## Exact verdict

**SFIA STUDIO V3-NATIVE OPTION A T-A5 MODELED CORRECTED AND VALIDATED — RUNTIME FRAMING MAY OPEN WITH MORRIS GO**

Gate next NOT consumed: `GO FRAME T-A5 RUNTIME — SFIA STUDIO V3-NATIVE — OPTION A`
