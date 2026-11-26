# SFIA Review Pack FULL — ML5 Integrated Foundation Conformance + LIVE

- **Generated_utc**: 2026-11-26T16:32:10.155739+00:00
- **Cycle**: R5 Construction · ML5 · Type 8 Delivery · Profile CRITICAL · Typologie EVOL
- **Product branch**: `sfia/next-ml5-integrated-delivery-20261123`
- **HEAD_initial**: `b69451e3f473fe4c742fe7375e5c250cb386a9e4`
- **HEAD_final**: `f27e01025f920db3fa61a4bb66cc05085981ca95`
- **Tree**: `32718db62c7b212375977b0d4bf7f0ed381c59b5`
- **Web tree**: `24d8f65820c5ea6956085c9d56bd7ecddbeb3389`
- **Merge-base main**: `997897fd7cf914771e7d08e8030dc7123fab7d25`
- **BUILD_ID_final**: `emfz_yP5MBF9GxQRrnJGP`
- **BUILD_ID_reconcile**: prior cycle artefacts `lWULvFGVIPoO-2VwA9M49` / `X94NdR5lxD655tzAciId3` ≠ final; intermediate rebuilds discarded
- **Lane**: DEV :3100 · PG :5433 · RECETTE :3200 protected (`a150926c`) — no cutover
- **ENV-01**: ENV ROUTING COMPLETE
- **Product versioning**: NO RELEASE · STABLE NOT AVAILABLE
- **WEB**: `SFIA_WEB_SEARCH_LIVE=0` · `SFIA_WEB_SEARCH_ENABLED=0` · G-WEB-MIXED closed
- **SDK lock**: `@openai/agents@0.21.0` · `openai@7.50.0` · `pdfjs-dist@4.10.38`
- **Schema**: `022_provider_usage_observations` (attempt_id present; **no migration applied**)
- **Tests**: vitest `tests/unit/ml5-*` → **381 PASS** · production build EXIT 0
- **Verdict**: **ML5 COGNITIVE FOUNDATION CONFORMANCE AND LIVE BEHAVIOR VERIFIED — INTEGRATED CANDIDATE READY FOR MORRIS REVIEW**
- **Handoff**: REQUIRED / PUBLISH-IN-CYCLE

## 1. Git Truth

```
branch: sfia/next-ml5-integrated-delivery-20261123
HEAD_initial: b69451e3f473fe4c742fe7375e5c250cb386a9e4
HEAD_final: f27e01025f920db3fa61a4bb66cc05085981ca95
tree: 32718db62c7b212375977b0d4bf7f0ed381c59b5
web_tree: 24d8f65820c5ea6956085c9d56bd7ecddbeb3389
merge_base_main: 997897fd7cf914771e7d08e8030dc7123fab7d25
commits:
4bfc1c1e fix(next): allow LIVE campaign per-request token ceilings when SDK omits bounds
8474916b fix(next): ML5 integrated foundation — ALS frontier, envelopes, FinOps correlation, LIVE campaign attach

diffstat:
 .../web/scripts/ml5-g-live-api-bounded.mjs         | 319 ++++++++++++
 .../domains/conversation/cognitive-conductor.ts    |   7 +-
 .../web/src/domains/conversation/nora-adapter.ts   |  18 +-
 .../conversation/provider-emission-frontier.ts     | 561 +++++++++++++++++----
 .../conversation/public-web-page-session.ts        |  10 +-
 .../conversation/public-web-search-frontier.ts     |  83 ++-
 .../src/domains/conversation/usage-accounting.ts   |  84 +++
 .../domains/documents/pdf-viewer-authorization.ts  |  10 +-
 .../tests/unit/ml5-c14-semantic-routing.test.ts    |   1 +
 .../web/tests/unit/ml5-c19-invariants.test.ts      |   1 +
 .../unit/ml5-c2-c4-restitution-conductor.test.ts   | 225 +++++++++
 .../ml5-http-attempt-finops-correlation.test.ts    | 181 +++++++
 .../unit/ml5-pdf-viewer-authorization.test.ts      |  23 +-
 .../unit/ml5-provider-emission-frontier.test.ts    | 406 +++++++++++----
 .../ml5-provider-sdk-frontier.integration.test.ts  | 183 +++++++
 .../web/tests/unit/ml5-public-web-frontier.test.ts | 123 ++++-
 .../web/tests/unit/ml5-web-page-session.test.ts    | 131 +++++
 .../tests/unit/ml5-web-search-authorize.test.ts    |   2 +
 18 files changed, 2147 insertions(+), 221 deletions(-)

```

No project push. No PR. No merge. No RECETTE mutation.

## 2. Sources & authorizations

Consulted per mandate §4 (SFIA v2.6 routing Next §4.3.0b, governance ENV-01/product-versioning, allocation/conductor/OBS/D6 contracts, handoff `541ec56f` capitalisation). Vision schemas: not claimed read unless opened this cycle (CKC synthetic map guidance only).

Authorizations exercised: DEV corrections/tests/restart; non-secret config; local commits; G-LIVE-API bounded; Review Handoff L3 only.

## 3. Root-cause analysis (A–F)

### A — Provider frontier / ALS / SDK
- **Cause**: `store() ?? emptyStore()` lost effortHint; fake 50k/4k; retry tests called wrapper twice; campaign lost ⇒ unlimited risk.
- **Fix**: require ALS; process campaign registry; real SDK client+fetch; payload model/effort checks; strict hosts; per-request ceilings + inject `max_output_tokens`.
- **Proof**: unit frontier; `ml5-provider-sdk-frontier.integration` A-03/A-04; LIVE-01 ALS path COMPLETE.

### B — Opposable envelopes
- **Cause**: default reservations ≠ demonstrable bounds; hosted/direct counters unwired.
- **Fix**: refuse unbounded without ceiling; ceilings as RESERVATION; hosted ASSUMED_1; direct opens guarded.
- **Residual**: hosted multi-search inside one Responses not fully countable → blocks G-WEB-PUBLIC.

### C — Cognition / restitution
- **Cause**: soft-stop always entered RESTITUTION_PHASE; message-only change previously.
- **Fix**: restitution only with acquis; adaptive reserve 24k when investigating.
- **Proof**: `ml5-c2-c4-restitution-conductor` 4/4; LIVE-03 note from thread acquis.

### D — FinOps / OBS
- **Cause**: HTTP attempts ALS-only; usage tied to SDK attemptId.
- **Fix**: snapshot HTTP attempts; correlate into `provider_usage_observations.attempt_id` + HTTP_ATTEMPT markers; no second ledger; no migration.
- **Proof**: correlation unit tests; LIVE-04 25 PG rows PARTIAL REQUEST.

### E — WEB authority
- **Cause**: `if (projectId && pilotId && !catalog)` skipped D6.
- **Fix**: missing identity/project/policy/decision ⇒ DENY; catalog via turnPublicTopics only.
- **Proof**: web authorize / public frontier tests.

### F — PDF / sessions
- **Cause**: missing workProjectId accepted; enrich footprint incomplete.
- **Fix**: require workProjectId for project-scoped viewer; session footprint includes PDF bytes/pages/text.
- **Proof**: pdf-viewer-authorization + web-page-session tests; harness 200.
- **LIVE-06**: BLOCKED CORPUS MISSING (authorized Git PDF text).

## 4. Coverage matrix

| Contract | Exigence | Test | Niveau | Oracle | Résultat | Limite | Verdict |
|---|---|---|---|---|---|---|---|
| A-01 | Nominal sans campagne | LIVE-01 + unit | LIVE+DET | reply COMPLETE | PASS | — | PASS |
| A-03 | Retry SDK réel | integration | DET+SDK | substituted transport 2+ GETs | PASS | — | PASS |
| A-04 | N+1 refuse | integration | DET+SDK | cause chain refuse | PASS | — | PASS |
| A-08 | Perte campagne | unit latch | DET | refuse | PASS | — | PASS |
| B | Bornes opposables | frontier unit + LIVE | DET+LIVE | no unbounded under campaign | PASS | hosted ASSUMED_1 | PASS w/ residual |
| C-04 | Restitution | conductor unit | DET | RESTITUTION_PHASE iff acquis | PASS | — | PASS |
| D | Corrélation HTTP | correlation + LIVE-04 | DET+LIVE | PG attempt_id / markers | PASS | PARTIAL cost | PASS |
| E | D6 no bypass | web tests | DET | DENY sans identité | PASS | — | PASS |
| F | PDF rights | pdf auth unit | DET | workProjectId | PASS | Git LIVE corpus | PASS det / LIVE blocked |
| LIVE-01..04 | G-LIVE-API | script | LIVE | PG+replies | PASS | envelope not exhausted | PASS |
| G-WEB-PUBLIC | §12.3 | — | — | — | BLOCKED | hosted bound | BLOCKED |
| LIVE-06 | Git PDF | — | — | — | BLOCKED | corpus | BLOCKED |

## 5. LIVE campaign report (full JSON)

### 00-report.json
```json
{
  "startedAt": "2026-11-26T16:28:29.837Z",
  "base": "http://127.0.0.1:3100",
  "campaign": "g-live-api-20261126",
  "gate": "G-LIVE-API",
  "web": "OFF",
  "steps": [
    {
      "name": "health",
      "at": "2026-11-26T16:28:29.855Z",
      "status": 200
    },
    {
      "name": "LIVE-01",
      "at": "2026-11-26T16:28:40.365Z",
      "status": 200,
      "ms": 10478,
      "workId": "cgw_3c14caed-0913-4032-aede-18453e8a3727",
      "noraStatus": "COMPLETE",
      "attemptNotes": "structured_non_stream_finalOutput",
      "replyChars": 41,
      "replyPreview": "Je suis Nora et le socle cognitif répond."
    },
    {
      "name": "LIVE-02",
      "at": "2026-11-26T16:29:07.808Z",
      "status": 200,
      "noraStatus": "COMPLETE",
      "attemptNotes": "structured_non_stream_finalOutput",
      "replyChars": 551,
      "workId": "cgw_8abfe82e-aec6-4ac8-b69f-8445d9a600be",
      "replyPreview": "- **Nora** accompagne le Pilote pour comprendre, explorer et produire, sans décider à sa place.\n- **Allocation cognitive** : elle peut recommander un modèle et un effort adaptés ; Studio décide de l’admission effective.\n- **Conducteur** : elle indique l’avancement et le travail r"
    },
    {
      "name": "LIVE-03",
      "at": "2026-11-26T16:29:51.633Z",
      "status": 200,
      "noraStatus": "COMPLETE",
      "attemptNotes": "structured_non_stream_finalOutput",
      "replyChars": 1355,
      "replyPreview": "### Note technique\n- Nora accompagne le Pilote pour comprendre, explorer et produire, sans décider à sa place. - Elle peut recommander un modèle et un effort ; Studio décide de leur admission. - Le socle cognitif a répondu au contrôle indiqué dans ce fil. - D4 CREATE est confirmé `AVAILABLE` ; la révision indiquée est la n° 1 (`doc_360f85f5-2062-4747-8125-b9b9158d381f`, `drev_39eca353-139c-4d2e-b6"
    },
    {
      "name": "LIVE-04",
      "at": "2026-11-26T16:29:51.881Z",
      "observations": 25,
      "attempts": 18,
      "sumIn": 130813,
      "sumOut": 3655,
      "cost": 0.04141
    }
  ],
  "scenarios": {
    "LIVE01": {
      "status": 200,
      "ms": 10478,
      "workId": "cgw_3c14caed-0913-4032-aede-18453e8a3727",
      "noraStatus": "COMPLETE",
      "attempts": [
        {
          "attemptId": "att_acd6272a55530ae9",
          "kind": "non_stream",
          "outcome": "SUCCESS",
          "notes": "structured_non_stream_finalOutput",
          "providerContacted": "YES"
        }
      ],
      "generationId": "gen_a982ab38-c871-4828-9e8f-9d10b4ad628c",
      "reply": "Je suis Nora et le socle cognitif répond."
    },
    "LIVE02": {
      "status": 200,
      "workId": "cgw_8abfe82e-aec6-4ac8-b69f-8445d9a600be",
      "noraStatus": "COMPLETE",
      "attempts": [
        {
          "attemptId": "att_9b63c16ab266600b",
          "kind": "non_stream",
          "outcome": "SUCCESS",
          "notes": "structured_non_stream_finalOutput",
          "providerContacted": "YES"
        }
      ],
      "generationId": "gen_d6c18b53-a41a-4541-b1db-92e0f5735c16",
      "reply": "- **Nora** accompagne le Pilote pour comprendre, explorer et produire, sans décider à sa place.\n- **Allocation cognitive** : elle peut recommander un modèle et un effort adaptés ; Studio décide de l’admission effective.\n- **Conducteur** : elle indique l’avancement et le travail restant pour faciliter la continuité entre segments.\n- **FinOps** : elle vise des moyens proportionnés au besoin ; les mécanismes de suivi des coûts ne sont pas précisés ici.\n- Aucun acquis pertinent n’a été trouvé dans la recherche ciblée ; cette synthèse reste générale."
    },
    "LIVE03": {
      "status": 200,
      "noraStatus": "COMPLETE",
      "attempts": [
        {
          "attemptId": "att_13f32b5b7b8015ec",
          "kind": "non_stream",
          "outcome": "SUCCESS",
          "notes": "structured_non_stream_finalOutput",
          "providerContacted": "YES"
        }
      ],
      "generationId": "gen_160f37b9-458c-4de1-89fe-8c500709b69e",
      "reply": "### Note technique\n- Nora accompagne le Pilote pour comprendre, explorer et produire, sans décider à sa place. - Elle peut recommander un modèle et un effort ; Studio décide de leur admission. - Le socle cognitif a répondu au contrôle indiqué dans ce fil. - D4 CREATE est confirmé `AVAILABLE` ; la révision indiquée est la n° 1 (`doc_360f85f5-2062-4747-8125-b9b9158d381f`, `drev_39eca353-139c-4d2e-b653-ae91f0f8dfe1`). - L’extrait fourni ne permet pas de préciser les rôles du conducteur et du FinOps.\n\n```sfia-document title-b64=Tm90ZSB0ZWNobmlxdWUg4oCUIE5vcmEgZXQgU3R1ZGlvIE5leHQ chars=534 pair-sha256=8ee0196ebf86973768fd21f41c7b3fd341d6a87a53bc0d256fa2342c601717af\n# Note technique — Nora et Studio Next\n- Le socle cognitif a répondu au test LIVE-01.\n- Nora accompagne le Pilote pour comprendre, explorer et produire, sans décider à sa place.\n- Allocation cognitive : Nora peut recommander modèle et effort ; Studio décide de leur admission.\n- Conducteur : Nora indique l’avancement et le travail restant pour assurer la continuité entre segments.\n- FinOps : les moyens visent à être proportionnés ; le suivi des coûts n’est pas précisé dans ce fil.\n- Source : échanges LIVE-01 et LIVE-02 de ce fil.\n```\n\n---\n### Résultat d'enregistrement\n\nNouvelle version disponible : v1.\n\nL'enregistrement est confirmé. Les versions antérieures restent inchangées.\n"
    },
    "LIVE04": {
      "pgObservations": 25,
      "finopsApiStatus": 404
    }
  },
  "finops": {
    "observationCount": 25,
    "distinctAttemptIds": 18,
    "attemptIds": [
      "att_6748a7910b91bc0b",
      "att_fbc654fa434489ce",
      "att_8b8f39136a7d0f16",
      "att_42937e5e2ea25074",
      "att_9fd2ad97994b9454",
      "att_e638a7515bda62a8",
      "att_9b63c16ab266600b",
      "att_088bf2a313b4fb8b",
      "att_e809964843299ead",
      "att_250d2d00292dd094",
      "att_7fd83002653aebbd",
      "att_dc35d5f3e4f298a7",
      "att_cec6b6ce8347ded5",
      "att_13f32b5b7b8015ec",
      "att_eea220ceccba5f1a",
      "att_c0f57a35362b146a",
      "att_3a2ce76228e219c9",
      "att_6afede605ebd809b"
    ],
    "httpMarkers": [
      "HTTP_ATTEMPT:att_6748a7910b91bc0b",
      "HTTP_ATTEMPT:att_fbc654fa434489ce",
      "HTTP_ATTEMPT:att_42937e5e2ea25074",
      "HTTP_ATTEMPT:att_9fd2ad97994b9454",
      "HTTP_ATTEMPT:att_e638a7515bda62a8",
      "HTTP_ATTEMPT:att_42937e5e2ea25074",
      "HTTP_ATTEMPT:att_9fd2ad97994b9454",
      "HTTP_ATTEMPT:att_e638a7515bda62a8",
      "HTTP_ATTEMPT:att_42937e5e2ea25074",
      "HTTP_ATTEMPT:att_9fd2ad97994b9454",
      "HTTP_ATTEMPT:att_e638a7515bda62a8",
      "HTTP_ATTEMPT_USAGE_UNKNOWN",
      "HTTP_ATTEMPT:att_42937e5e2ea25074",
      "HTTP_ATTEMPT_USAGE_UNKNOWN",
      "HTTP_ATTEMPT:att_9fd2ad97994b9454",
      "HTTP_ATTEMPT_USAGE_UNKNOWN",
      "HTTP_ATTEMPT:att_e638a7515bda62a8",
      "HTTP_ATTEMPT:att_088bf2a313b4fb8b",
      "HTTP_ATTEMPT:att_e809964843299ead",
      "HTTP_ATTEMPT:att_088bf2a313b4fb8b",
      "HTTP_ATTEMPT:att_e809964843299ead",
      "HTTP_ATTEMPT_USAGE_UNKNOWN",
      "HTTP_ATTEMPT:att_088bf2a313b4fb8b",
      "HTTP_ATTEMPT_USAGE_UNKNOWN",
      "HTTP_ATTEMPT:att_e809964843299ead",
      "HTTP_ATTEMPT:att_7fd83002653aebbd",
      "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
      "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
      "HTTP_ATTEMPT:att_7fd83002653aebbd",
      "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
      "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
      "HTTP_ATTEMPT:att_7fd83002653aebbd",
      "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
      "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
      "HTTP_ATTEMPT_USAGE_UNKNOWN",
      "HTTP_ATTEMPT:att_7fd83002653aebbd",
      "HTTP_ATTEMPT_USAGE_UNKNOWN",
      "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
      "HTTP_ATTEMPT_USAGE_UNKNOWN",
      "HTTP_ATTEMPT:att_cec6b6ce8347ded5"
    ],
    "sumInputTokens": 130813,
    "sumOutputTokens": 3655,
    "estimatedCostUsdSum": 0.04141,
    "coverages": [
      "PARTIAL"
    ],
    "granularities": [
      "REQUEST"
    ],
    "rows": [
      {
        "id": "49009b89-1949-4113-8bb4-bf9f875c54de",
        "attempt_id": "att_6748a7910b91bc0b",
        "generation_id": "gen_8ad325f8-f600-4af2-a437-edf86f82d9f5",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 8495,
        "out": 148,
        "cost": 0.009235,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT:att_6748a7910b91bc0b",
          "SDK_ATTEMPT:att_a9d2925d3f9044c2",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "08cdcea4-1168-44b2-bea4-c8a319985a4d",
        "attempt_id": "att_fbc654fa434489ce",
        "generation_id": "gen_a982ab38-c871-4828-9e8f-9d10b4ad628c",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 8875,
        "out": 194,
        "cost": 0.0021728,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT:att_fbc654fa434489ce",
          "SDK_ATTEMPT:att_acd6272a55530ae9",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "626b7dd5-0982-40d1-9448-8df6f4d307dd",
        "attempt_id": "att_8b8f39136a7d0f16",
        "generation_id": "gen_f6dc0834-84f2-43b3-96d9-97a379086a17",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 8664,
        "out": 109,
        "cost": 0.0015368,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "MULTI_HTTP_ATTEMPT_AGGREGATE",
          "HTTP_ATTEMPT:att_42937e5e2ea25074",
          "HTTP_ATTEMPT:att_9fd2ad97994b9454",
          "HTTP_ATTEMPT:att_e638a7515bda62a8",
          "SDK_ATTEMPT:att_8b8f39136a7d0f16",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "97afe9b8-95e1-479e-b307-f62b5688b7bb",
        "attempt_id": "att_8b8f39136a7d0f16",
        "generation_id": "gen_f6dc0834-84f2-43b3-96d9-97a379086a17",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 9333,
        "out": 55,
        "cost": 0.00138005,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "MULTI_HTTP_ATTEMPT_AGGREGATE",
          "HTTP_ATTEMPT:att_42937e5e2ea25074",
          "HTTP_ATTEMPT:att_9fd2ad97994b9454",
          "HTTP_ATTEMPT:att_e638a7515bda62a8",
          "SDK_ATTEMPT:att_8b8f39136a7d0f16",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "f292f3de-c092-426e-b6a7-34f351e3c8a2",
        "attempt_id": "att_8b8f39136a7d0f16",
        "generation_id": "gen_f6dc0834-84f2-43b3-96d9-97a379086a17",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 9476,
        "out": 336,
        "cost": 0.0022925,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "MULTI_HTTP_ATTEMPT_AGGREGATE",
          "HTTP_ATTEMPT:att_42937e5e2ea25074",
          "HTTP_ATTEMPT:att_9fd2ad97994b9454",
          "HTTP_ATTEMPT:att_e638a7515bda62a8",
          "SDK_ATTEMPT:att_8b8f39136a7d0f16",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "6773c508-691c-4176-9dfb-a249688ac911",
        "attempt_id": "att_42937e5e2ea25074",
        "generation_id": "gen_f6dc0834-84f2-43b3-96d9-97a379086a17",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": null,
        "out": null,
        "cost": null,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT_USAGE_UNKNOWN",
          "HTTP_ATTEMPT:att_42937e5e2ea25074",
          "SDK_ATTEMPT:att_8b8f39136a7d0f16",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "8daeca82-8d5e-424f-b0e7-a98d4c9f919c",
        "attempt_id": "att_9fd2ad97994b9454",
        "generation_id": "gen_f6dc0834-84f2-43b3-96d9-97a379086a17",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": null,
        "out": null,
        "cost": null,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT_USAGE_UNKNOWN",
          "HTTP_ATTEMPT:att_9fd2ad97994b9454",
          "SDK_ATTEMPT:att_8b8f39136a7d0f16",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "c8b61238-7a18-4b15-9216-c651ade20884",
        "attempt_id": "att_e638a7515bda62a8",
        "generation_id": "gen_f6dc0834-84f2-43b3-96d9-97a379086a17",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": null,
        "out": null,
        "cost": null,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT_USAGE_UNKNOWN",
          "HTTP_ATTEMPT:att_e638a7515bda62a8",
          "SDK_ATTEMPT:att_8b8f39136a7d0f16",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "61c22823-17b7-48ed-b184-9548de20dca1",
        "attempt_id": "att_9b63c16ab266600b",
        "generation_id": "gen_d6c18b53-a41a-4541-b1db-92e0f5735c16",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 9081,
        "out": 115,
        "cost": 0.0019838,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "MULTI_HTTP_ATTEMPT_AGGREGATE",
          "HTTP_ATTEMPT:att_088bf2a313b4fb8b",
          "HTTP_ATTEMPT:att_e809964843299ead",
          "SDK_ATTEMPT:att_9b63c16ab266600b",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "78fa0f16-8eb8-420c-adf6-50e3f03a011f",
        "attempt_id": "att_9b63c16ab266600b",
        "generation_id": "gen_d6c18b53-a41a-4541-b1db-92e0f5735c16",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 9756,
        "out": 394,
        "cost": 0.0031019,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "MULTI_HTTP_ATTEMPT_AGGREGATE",
          "HTTP_ATTEMPT:att_088bf2a313b4fb8b",
          "HTTP_ATTEMPT:att_e809964843299ead",
          "SDK_ATTEMPT:att_9b63c16ab266600b",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "4aef96f2-b5a2-4f32-b864-cfafe3243119",
        "attempt_id": "att_088bf2a313b4fb8b",
        "generation_id": "gen_d6c18b53-a41a-4541-b1db-92e0f5735c16",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": null,
        "out": null,
        "cost": null,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT_USAGE_UNKNOWN",
          "HTTP_ATTEMPT:att_088bf2a313b4fb8b",
          "SDK_ATTEMPT:att_9b63c16ab266600b",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "fc039475-6dcf-4bfa-b73e-a3a2e808e7f9",
        "attempt_id": "att_e809964843299ead",
        "generation_id": "gen_d6c18b53-a41a-4541-b1db-92e0f5735c16",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": null,
        "out": null,
        "cost": null,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT_USAGE_UNKNOWN",
          "HTTP_ATTEMPT:att_e809964843299ead",
          "SDK_ATTEMPT:att_9b63c16ab266600b",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "434e2034-b72c-433c-9653-4c94b59cbdd9",
        "attempt_id": "att_250d2d00292dd094",
        "generation_id": "gen_51a3f4ce-09a5-43ca-b0fd-8bc06a768f50",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 8811,
        "out": 81,
        "cost": 0.0015438,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "MULTI_HTTP_ATTEMPT_AGGREGATE",
          "HTTP_ATTEMPT:att_7fd83002653aebbd",
          "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
          "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
          "SDK_ATTEMPT:att_250d2d00292dd094",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "b1b37b98-71c7-4e23-8767-46810b876739",
        "attempt_id": "att_250d2d00292dd094",
        "generation_id": "gen_51a3f4ce-09a5-43ca-b0fd-8bc06a768f50",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 9697,
        "out": 80,
        "cost": 0.0017294,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "MULTI_HTTP_ATTEMPT_AGGREGATE",
          "HTTP_ATTEMPT:att_7fd83002653aebbd",
          "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
          "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
          "SDK_ATTEMPT:att_250d2d00292dd094",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "1e61fb2c-0951-4cdf-8f27-10fe452055ba",
        "attempt_id": "att_250d2d00292dd094",
        "generation_id": "gen_51a3f4ce-09a5-43ca-b0fd-8bc06a768f50",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 10292,
        "out": 612,
        "cost": 0.0041427,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "MULTI_HTTP_ATTEMPT_AGGREGATE",
          "HTTP_ATTEMPT:att_7fd83002653aebbd",
          "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
          "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
          "SDK_ATTEMPT:att_250d2d00292dd094",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "eba2fed7-bb75-4e67-ba7a-0c5c3be3cc52",
        "attempt_id": "att_7fd83002653aebbd",
        "generation_id": "gen_51a3f4ce-09a5-43ca-b0fd-8bc06a768f50",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": null,
        "out": null,
        "cost": null,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT_USAGE_UNKNOWN",
          "HTTP_ATTEMPT:att_7fd83002653aebbd",
          "SDK_ATTEMPT:att_250d2d00292dd094",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "2687a429-c2cd-418e-8837-86067b6ce58f",
        "attempt_id": "att_dc35d5f3e4f298a7",
        "generation_id": "gen_51a3f4ce-09a5-43ca-b0fd-8bc06a768f50",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": null,
        "out": null,
        "cost": null,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT_USAGE_UNKNOWN",
          "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
          "SDK_ATTEMPT:att_250d2d00292dd094",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "62f7f929-ade7-4d9d-b9ae-1f079c6aa340",
        "attempt_id": "att_cec6b6ce8347ded5",
        "generation_id": "gen_51a3f4ce-09a5-43ca-b0fd-8bc06a768f50",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": null,
        "out": null,
        "cost": null,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT_USAGE_UNKNOWN",
          "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
          "SDK_ATTEMPT:att_250d2d00292dd094",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "62c3c003-a7a6-48b1-95d9-d05c65c7b341",
        "attempt_id": "att_13f32b5b7b8015ec",
        "generation_id": "gen_160f37b9-458c-4de1-89fe-8c500709b69e",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 9202,
        "out": 115,
        "cost": 0.0021048,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "MULTI_HTTP_ATTEMPT_AGGREGATE",
          "HTTP_ATTEMPT:att_eea220ceccba5f1a",
          "HTTP_ATTEMPT:att_c0f57a35362b146a",
          "HTTP_ATTEMPT:att_3a2ce76228e219c9",
          "SDK_ATTEMPT:att_13f32b5b7b8015ec",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "f7bce929-e76d-4ecb-b8e2-fe4b5ea0bf9b",
        "attempt_id": "att_13f32b5b7b8015ec",
        "generation_id": "gen_160f37b9-458c-4de1-89fe-8c500709b69e",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 10122,
        "out": 56,
        "cost": 0.00166295,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "MULTI_HTTP_ATTEMPT_AGGREGATE",
          "HTTP_ATTEMPT:att_eea220ceccba5f1a",
          "HTTP_ATTEMPT:att_c0f57a35362b146a",
          "HTTP_ATTEMPT:att_3a2ce76228e219c9",
          "SDK_ATTEMPT:att_13f32b5b7b8015ec",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "3a957525-bd58-45ca-891d-d2c3f78e8d08",
        "attempt_id": "att_13f32b5b7b8015ec",
        "generation_id": "gen_160f37b9-458c-4de1-89fe-8c500709b69e",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 10506,
        "out": 664,
        "cost": 0.00421295,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "MULTI_HTTP_ATTEMPT_AGGREGATE",
          "HTTP_ATTEMPT:att_eea220ceccba5f1a",
          "HTTP_ATTEMPT:att_c0f57a35362b146a",
          "HTTP_ATTEMPT:att_3a2ce76228e219c9",
          "SDK_ATTEMPT:att_13f32b5b7b8015ec",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "a890cf08-93fa-419c-a2a2-e6f10945cf82",
        "attempt_id": "att_eea220ceccba5f1a",
        "generation_id": "gen_160f37b9-458c-4de1-89fe-8c500709b69e",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": null,
        "out": null,
        "cost": null,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT_USAGE_UNKNOWN",
          "HTTP_ATTEMPT:att_eea220ceccba5f1a",
          "SDK_ATTEMPT:att_13f32b5b7b8015ec",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "92505618-f458-4056-92e5-6d5816eda137",
        "attempt_id": "att_c0f57a35362b146a",
        "generation_id": "gen_160f37b9-458c-4de1-89fe-8c500709b69e",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": null,
        "out": null,
        "cost": null,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT_USAGE_UNKNOWN",
          "HTTP_ATTEMPT:att_c0f57a35362b146a",
          "SDK_ATTEMPT:att_13f32b5b7b8015ec",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "30da5d9d-a75d-499b-acaa-34dbd12f0874",
        "attempt_id": "att_3a2ce76228e219c9",
        "generation_id": "gen_160f37b9-458c-4de1-89fe-8c500709b69e",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": null,
        "out": null,
        "cost": null,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT_USAGE_UNKNOWN",
          "HTTP_ATTEMPT:att_3a2ce76228e219c9",
          "SDK_ATTEMPT:att_13f32b5b7b8015ec",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      },
      {
        "id": "4e89fe06-1f44-42b3-8e3b-d355be785ee9",
        "attempt_id": "att_6afede605ebd809b",
        "generation_id": "gen_c75a3551-ab6f-4e8d-b279-06cd97797736",
        "operation": "nora.generate_reply",
        "model": "gpt-6.1-terra",
        "effort": "medium",
        "in": 8503,
        "out": 696,
        "cost": 0.0043108,
        "coverage": "PARTIAL",
        "granularity": "REQUEST",
        "limits": [
          "HTTP_ATTEMPT:att_6afede605ebd809b",
          "SDK_ATTEMPT:att_c2feb17bce258591",
          "MODEL_APPLIED_UNVERIFIED"
        ]
      }
    ]
  },
  "verdict": "G-LIVE-API LIVE-01..04 EXERCISED — OBSERVATIONS PERSISTED",
  "endedAt": "2026-11-26T16:29:51.887Z"
}
```

### 05-finops.json
```json
{
  "observationCount": 25,
  "distinctAttemptIds": 18,
  "attemptIds": [
    "att_6748a7910b91bc0b",
    "att_fbc654fa434489ce",
    "att_8b8f39136a7d0f16",
    "att_42937e5e2ea25074",
    "att_9fd2ad97994b9454",
    "att_e638a7515bda62a8",
    "att_9b63c16ab266600b",
    "att_088bf2a313b4fb8b",
    "att_e809964843299ead",
    "att_250d2d00292dd094",
    "att_7fd83002653aebbd",
    "att_dc35d5f3e4f298a7",
    "att_cec6b6ce8347ded5",
    "att_13f32b5b7b8015ec",
    "att_eea220ceccba5f1a",
    "att_c0f57a35362b146a",
    "att_3a2ce76228e219c9",
    "att_6afede605ebd809b"
  ],
  "httpMarkers": [
    "HTTP_ATTEMPT:att_6748a7910b91bc0b",
    "HTTP_ATTEMPT:att_fbc654fa434489ce",
    "HTTP_ATTEMPT:att_42937e5e2ea25074",
    "HTTP_ATTEMPT:att_9fd2ad97994b9454",
    "HTTP_ATTEMPT:att_e638a7515bda62a8",
    "HTTP_ATTEMPT:att_42937e5e2ea25074",
    "HTTP_ATTEMPT:att_9fd2ad97994b9454",
    "HTTP_ATTEMPT:att_e638a7515bda62a8",
    "HTTP_ATTEMPT:att_42937e5e2ea25074",
    "HTTP_ATTEMPT:att_9fd2ad97994b9454",
    "HTTP_ATTEMPT:att_e638a7515bda62a8",
    "HTTP_ATTEMPT_USAGE_UNKNOWN",
    "HTTP_ATTEMPT:att_42937e5e2ea25074",
    "HTTP_ATTEMPT_USAGE_UNKNOWN",
    "HTTP_ATTEMPT:att_9fd2ad97994b9454",
    "HTTP_ATTEMPT_USAGE_UNKNOWN",
    "HTTP_ATTEMPT:att_e638a7515bda62a8",
    "HTTP_ATTEMPT:att_088bf2a313b4fb8b",
    "HTTP_ATTEMPT:att_e809964843299ead",
    "HTTP_ATTEMPT:att_088bf2a313b4fb8b",
    "HTTP_ATTEMPT:att_e809964843299ead",
    "HTTP_ATTEMPT_USAGE_UNKNOWN",
    "HTTP_ATTEMPT:att_088bf2a313b4fb8b",
    "HTTP_ATTEMPT_USAGE_UNKNOWN",
    "HTTP_ATTEMPT:att_e809964843299ead",
    "HTTP_ATTEMPT:att_7fd83002653aebbd",
    "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
    "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
    "HTTP_ATTEMPT:att_7fd83002653aebbd",
    "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
    "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
    "HTTP_ATTEMPT:att_7fd83002653aebbd",
    "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
    "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
    "HTTP_ATTEMPT_USAGE_UNKNOWN",
    "HTTP_ATTEMPT:att_7fd83002653aebbd",
    "HTTP_ATTEMPT_USAGE_UNKNOWN",
    "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
    "HTTP_ATTEMPT_USAGE_UNKNOWN",
    "HTTP_ATTEMPT:att_cec6b6ce8347ded5"
  ],
  "sumInputTokens": 130813,
  "sumOutputTokens": 3655,
  "estimatedCostUsdSum": 0.04141,
  "coverages": [
    "PARTIAL"
  ],
  "granularities": [
    "REQUEST"
  ],
  "rows": [
    {
      "id": "49009b89-1949-4113-8bb4-bf9f875c54de",
      "attempt_id": "att_6748a7910b91bc0b",
      "generation_id": "gen_8ad325f8-f600-4af2-a437-edf86f82d9f5",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 8495,
      "out": 148,
      "cost": 0.009235,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT:att_6748a7910b91bc0b",
        "SDK_ATTEMPT:att_a9d2925d3f9044c2",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "08cdcea4-1168-44b2-bea4-c8a319985a4d",
      "attempt_id": "att_fbc654fa434489ce",
      "generation_id": "gen_a982ab38-c871-4828-9e8f-9d10b4ad628c",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 8875,
      "out": 194,
      "cost": 0.0021728,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT:att_fbc654fa434489ce",
        "SDK_ATTEMPT:att_acd6272a55530ae9",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "626b7dd5-0982-40d1-9448-8df6f4d307dd",
      "attempt_id": "att_8b8f39136a7d0f16",
      "generation_id": "gen_f6dc0834-84f2-43b3-96d9-97a379086a17",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 8664,
      "out": 109,
      "cost": 0.0015368,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "MULTI_HTTP_ATTEMPT_AGGREGATE",
        "HTTP_ATTEMPT:att_42937e5e2ea25074",
        "HTTP_ATTEMPT:att_9fd2ad97994b9454",
        "HTTP_ATTEMPT:att_e638a7515bda62a8",
        "SDK_ATTEMPT:att_8b8f39136a7d0f16",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "97afe9b8-95e1-479e-b307-f62b5688b7bb",
      "attempt_id": "att_8b8f39136a7d0f16",
      "generation_id": "gen_f6dc0834-84f2-43b3-96d9-97a379086a17",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 9333,
      "out": 55,
      "cost": 0.00138005,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "MULTI_HTTP_ATTEMPT_AGGREGATE",
        "HTTP_ATTEMPT:att_42937e5e2ea25074",
        "HTTP_ATTEMPT:att_9fd2ad97994b9454",
        "HTTP_ATTEMPT:att_e638a7515bda62a8",
        "SDK_ATTEMPT:att_8b8f39136a7d0f16",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "f292f3de-c092-426e-b6a7-34f351e3c8a2",
      "attempt_id": "att_8b8f39136a7d0f16",
      "generation_id": "gen_f6dc0834-84f2-43b3-96d9-97a379086a17",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 9476,
      "out": 336,
      "cost": 0.0022925,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "MULTI_HTTP_ATTEMPT_AGGREGATE",
        "HTTP_ATTEMPT:att_42937e5e2ea25074",
        "HTTP_ATTEMPT:att_9fd2ad97994b9454",
        "HTTP_ATTEMPT:att_e638a7515bda62a8",
        "SDK_ATTEMPT:att_8b8f39136a7d0f16",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "6773c508-691c-4176-9dfb-a249688ac911",
      "attempt_id": "att_42937e5e2ea25074",
      "generation_id": "gen_f6dc0834-84f2-43b3-96d9-97a379086a17",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": null,
      "out": null,
      "cost": null,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT_USAGE_UNKNOWN",
        "HTTP_ATTEMPT:att_42937e5e2ea25074",
        "SDK_ATTEMPT:att_8b8f39136a7d0f16",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "8daeca82-8d5e-424f-b0e7-a98d4c9f919c",
      "attempt_id": "att_9fd2ad97994b9454",
      "generation_id": "gen_f6dc0834-84f2-43b3-96d9-97a379086a17",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": null,
      "out": null,
      "cost": null,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT_USAGE_UNKNOWN",
        "HTTP_ATTEMPT:att_9fd2ad97994b9454",
        "SDK_ATTEMPT:att_8b8f39136a7d0f16",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "c8b61238-7a18-4b15-9216-c651ade20884",
      "attempt_id": "att_e638a7515bda62a8",
      "generation_id": "gen_f6dc0834-84f2-43b3-96d9-97a379086a17",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": null,
      "out": null,
      "cost": null,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT_USAGE_UNKNOWN",
        "HTTP_ATTEMPT:att_e638a7515bda62a8",
        "SDK_ATTEMPT:att_8b8f39136a7d0f16",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "61c22823-17b7-48ed-b184-9548de20dca1",
      "attempt_id": "att_9b63c16ab266600b",
      "generation_id": "gen_d6c18b53-a41a-4541-b1db-92e0f5735c16",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 9081,
      "out": 115,
      "cost": 0.0019838,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "MULTI_HTTP_ATTEMPT_AGGREGATE",
        "HTTP_ATTEMPT:att_088bf2a313b4fb8b",
        "HTTP_ATTEMPT:att_e809964843299ead",
        "SDK_ATTEMPT:att_9b63c16ab266600b",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "78fa0f16-8eb8-420c-adf6-50e3f03a011f",
      "attempt_id": "att_9b63c16ab266600b",
      "generation_id": "gen_d6c18b53-a41a-4541-b1db-92e0f5735c16",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 9756,
      "out": 394,
      "cost": 0.0031019,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "MULTI_HTTP_ATTEMPT_AGGREGATE",
        "HTTP_ATTEMPT:att_088bf2a313b4fb8b",
        "HTTP_ATTEMPT:att_e809964843299ead",
        "SDK_ATTEMPT:att_9b63c16ab266600b",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "4aef96f2-b5a2-4f32-b864-cfafe3243119",
      "attempt_id": "att_088bf2a313b4fb8b",
      "generation_id": "gen_d6c18b53-a41a-4541-b1db-92e0f5735c16",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": null,
      "out": null,
      "cost": null,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT_USAGE_UNKNOWN",
        "HTTP_ATTEMPT:att_088bf2a313b4fb8b",
        "SDK_ATTEMPT:att_9b63c16ab266600b",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "fc039475-6dcf-4bfa-b73e-a3a2e808e7f9",
      "attempt_id": "att_e809964843299ead",
      "generation_id": "gen_d6c18b53-a41a-4541-b1db-92e0f5735c16",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": null,
      "out": null,
      "cost": null,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT_USAGE_UNKNOWN",
        "HTTP_ATTEMPT:att_e809964843299ead",
        "SDK_ATTEMPT:att_9b63c16ab266600b",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "434e2034-b72c-433c-9653-4c94b59cbdd9",
      "attempt_id": "att_250d2d00292dd094",
      "generation_id": "gen_51a3f4ce-09a5-43ca-b0fd-8bc06a768f50",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 8811,
      "out": 81,
      "cost": 0.0015438,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "MULTI_HTTP_ATTEMPT_AGGREGATE",
        "HTTP_ATTEMPT:att_7fd83002653aebbd",
        "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
        "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
        "SDK_ATTEMPT:att_250d2d00292dd094",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "b1b37b98-71c7-4e23-8767-46810b876739",
      "attempt_id": "att_250d2d00292dd094",
      "generation_id": "gen_51a3f4ce-09a5-43ca-b0fd-8bc06a768f50",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 9697,
      "out": 80,
      "cost": 0.0017294,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "MULTI_HTTP_ATTEMPT_AGGREGATE",
        "HTTP_ATTEMPT:att_7fd83002653aebbd",
        "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
        "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
        "SDK_ATTEMPT:att_250d2d00292dd094",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "1e61fb2c-0951-4cdf-8f27-10fe452055ba",
      "attempt_id": "att_250d2d00292dd094",
      "generation_id": "gen_51a3f4ce-09a5-43ca-b0fd-8bc06a768f50",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 10292,
      "out": 612,
      "cost": 0.0041427,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "MULTI_HTTP_ATTEMPT_AGGREGATE",
        "HTTP_ATTEMPT:att_7fd83002653aebbd",
        "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
        "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
        "SDK_ATTEMPT:att_250d2d00292dd094",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "eba2fed7-bb75-4e67-ba7a-0c5c3be3cc52",
      "attempt_id": "att_7fd83002653aebbd",
      "generation_id": "gen_51a3f4ce-09a5-43ca-b0fd-8bc06a768f50",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": null,
      "out": null,
      "cost": null,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT_USAGE_UNKNOWN",
        "HTTP_ATTEMPT:att_7fd83002653aebbd",
        "SDK_ATTEMPT:att_250d2d00292dd094",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "2687a429-c2cd-418e-8837-86067b6ce58f",
      "attempt_id": "att_dc35d5f3e4f298a7",
      "generation_id": "gen_51a3f4ce-09a5-43ca-b0fd-8bc06a768f50",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": null,
      "out": null,
      "cost": null,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT_USAGE_UNKNOWN",
        "HTTP_ATTEMPT:att_dc35d5f3e4f298a7",
        "SDK_ATTEMPT:att_250d2d00292dd094",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "62f7f929-ade7-4d9d-b9ae-1f079c6aa340",
      "attempt_id": "att_cec6b6ce8347ded5",
      "generation_id": "gen_51a3f4ce-09a5-43ca-b0fd-8bc06a768f50",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": null,
      "out": null,
      "cost": null,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT_USAGE_UNKNOWN",
        "HTTP_ATTEMPT:att_cec6b6ce8347ded5",
        "SDK_ATTEMPT:att_250d2d00292dd094",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "62c3c003-a7a6-48b1-95d9-d05c65c7b341",
      "attempt_id": "att_13f32b5b7b8015ec",
      "generation_id": "gen_160f37b9-458c-4de1-89fe-8c500709b69e",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 9202,
      "out": 115,
      "cost": 0.0021048,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "MULTI_HTTP_ATTEMPT_AGGREGATE",
        "HTTP_ATTEMPT:att_eea220ceccba5f1a",
        "HTTP_ATTEMPT:att_c0f57a35362b146a",
        "HTTP_ATTEMPT:att_3a2ce76228e219c9",
        "SDK_ATTEMPT:att_13f32b5b7b8015ec",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "f7bce929-e76d-4ecb-b8e2-fe4b5ea0bf9b",
      "attempt_id": "att_13f32b5b7b8015ec",
      "generation_id": "gen_160f37b9-458c-4de1-89fe-8c500709b69e",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 10122,
      "out": 56,
      "cost": 0.00166295,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "MULTI_HTTP_ATTEMPT_AGGREGATE",
        "HTTP_ATTEMPT:att_eea220ceccba5f1a",
        "HTTP_ATTEMPT:att_c0f57a35362b146a",
        "HTTP_ATTEMPT:att_3a2ce76228e219c9",
        "SDK_ATTEMPT:att_13f32b5b7b8015ec",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "3a957525-bd58-45ca-891d-d2c3f78e8d08",
      "attempt_id": "att_13f32b5b7b8015ec",
      "generation_id": "gen_160f37b9-458c-4de1-89fe-8c500709b69e",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 10506,
      "out": 664,
      "cost": 0.00421295,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "MULTI_HTTP_ATTEMPT_AGGREGATE",
        "HTTP_ATTEMPT:att_eea220ceccba5f1a",
        "HTTP_ATTEMPT:att_c0f57a35362b146a",
        "HTTP_ATTEMPT:att_3a2ce76228e219c9",
        "SDK_ATTEMPT:att_13f32b5b7b8015ec",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "a890cf08-93fa-419c-a2a2-e6f10945cf82",
      "attempt_id": "att_eea220ceccba5f1a",
      "generation_id": "gen_160f37b9-458c-4de1-89fe-8c500709b69e",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": null,
      "out": null,
      "cost": null,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT_USAGE_UNKNOWN",
        "HTTP_ATTEMPT:att_eea220ceccba5f1a",
        "SDK_ATTEMPT:att_13f32b5b7b8015ec",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "92505618-f458-4056-92e5-6d5816eda137",
      "attempt_id": "att_c0f57a35362b146a",
      "generation_id": "gen_160f37b9-458c-4de1-89fe-8c500709b69e",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": null,
      "out": null,
      "cost": null,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT_USAGE_UNKNOWN",
        "HTTP_ATTEMPT:att_c0f57a35362b146a",
        "SDK_ATTEMPT:att_13f32b5b7b8015ec",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "30da5d9d-a75d-499b-acaa-34dbd12f0874",
      "attempt_id": "att_3a2ce76228e219c9",
      "generation_id": "gen_160f37b9-458c-4de1-89fe-8c500709b69e",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": null,
      "out": null,
      "cost": null,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT_USAGE_UNKNOWN",
        "HTTP_ATTEMPT:att_3a2ce76228e219c9",
        "SDK_ATTEMPT:att_13f32b5b7b8015ec",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    },
    {
      "id": "4e89fe06-1f44-42b3-8e3b-d355be785ee9",
      "attempt_id": "att_6afede605ebd809b",
      "generation_id": "gen_c75a3551-ab6f-4e8d-b279-06cd97797736",
      "operation": "nora.generate_reply",
      "model": "gpt-6.1-terra",
      "effort": "medium",
      "in": 8503,
      "out": 696,
      "cost": 0.0043108,
      "coverage": "PARTIAL",
      "granularity": "REQUEST",
      "limits": [
        "HTTP_ATTEMPT:att_6afede605ebd809b",
        "SDK_ATTEMPT:att_c2feb17bce258591",
        "MODEL_APPLIED_UNVERIFIED"
      ]
    }
  ]
}
```

### LIVE-01 response excerpt (redacted structure)
```json
{
  "status": 200,
  "json": {
    "userMessageId": "msg_4d049c17-6b83-4440-8f2d-9a933a06baac",
    "assistantMessageId": "msg_f248ce48-530d-4fd8-bd36-7f987224c55c",
    "operationId": "op_e3abd140-3e63-4ca1-b5b7-71f3b10bbb65",
    "requestId": "req_7694db09-9a98-4356-bb05-4c91d058eaba",
    "turnCommandId": "tcmd_d95d2c77-b731-44d4-b748-bafb1c5ac72e",
    "preparedContract": null,
    "cognitiveWork": {
      "workId": "cgw_3c14caed-0913-4032-aede-18453e8a3727",
      "revision": 3,
      "segmentsRun": 1,
      "resumed": false,
      "suspended": false,
      "suspendReason": null
    },
    "noraMode": "openai-agents-sdk-live",
    "status": "COMPLETE",
    "generationId": "gen_a982ab38-c871-4828-9e8f-9d10b4ad628c",
    "policy": {
      "version": "ml5-cog-policy-v5-provisional-v0.2-20261126",
      "profileType": "OPERATIONAL_PROVISIONAL",
      "profile": "analyse",
      "modelRequested": "gpt-6.1-terra",
      "modelApplied": "UNVERIFIED",
      "effortRequested": "medium",
      "effortApplied": "UNVERIFIED",
      "reasonCodes": [
        "BUDGET_DEFAULT_ANALYSE_NO_LENGTH_ROUTING",
        "PROFILE_TYPE_OPERATIONAL_PROVISIONAL",
        "LANE_DEV",
        "RESOURCE_ADMITTED_OPERATIONAL",
        "MODEL_gpt-6.1-terra",
        "EFFORT_medium",
        "COG_POLICY_PROVISIONAL_ml5-cog-provisional-policy-v0.2-20261126",
        "COG_POLICY_VERSION_v0.2",
        "LANE_DEV",
        "EFFORT_BUDGET_BAND_medium",
        "PROFILE_HINT_analyse",
        "EFFORT_HINT_medium",
        "MODEL_HINT_gpt-6.1-terra",
        "RESOURCE_CONTINUITY_DEFAULT"
      ]
    },
    "attempts": [
      {
        "attemptId": "att_acd6272a55530ae9",
        "kind": "non_stream",
        "outcome": "SUCCESS",
        "notes": "structured_non_stream_finalOutput",
        "providerContacted": "YES"
      }
    ],
    "toolCallsObserved": 0,
    "d4CharsReturned": 0,
    "streaming": {
      "attempted": true,
      "delivered": true,
      "notes": "structured_non_stream_finalOutput"
    },
    "knowledgeSelection": {
      "subjects": 0,
      "acquisCurrent": 0,
      "openPoints": 0,
      "reactivatedOpenPoints": 0,
      "selectionMethod": "bounded-resource-listing",
      "selectionLimit": "RG-KNOW-011 + J-C04: réactivation contextuelle des points ouverts projet, puis ids préférés / listing borné — pas de clôture par silence.",
      "role": "pre_generation_context",
      "selectedAcquisIds": [],
      "selectedOpenPointIds": []
    },
    "knowledgeResumeHints": null,
    "capitalisation": [],
    "capitalisationAttempted": [],
    "capitalisationLimit": "Aucune proposition d4.record_knowledge — zéro écriture D4",
    "documentSave": null,
    "pendingDocumentCandidate": null,
    "historicalAuthorization": null,
    "idempotentReplay": false,
    "humanDecisionCreated": false,
    "pilotageEffect": null,
    "missionProjection": null,
    "nextTurnKind": "DIALOGUE_INDEPENDANT",
    "pendingEffectBlocked": false,
    "unresolvedPendingClientTurnKey": null,
    "semanticQualificationStatus": "QUALIFIED",
    "preparationProjection": {
      "status": "APPLIED",
      "revision": 2
    },
    "turnProjection": {
      "schemaVersion": "e05-turn-projection-v1",
      "messageId": "msg_f248ce48-530d-4fd8-bd36-7f987224c55c",
      "turnCommandId": "tcmd_d95d2c77-b731-44d4-b748-bafb1c5ac72e",
      "finalized": true,
      "status": "COMPLETE",
      "choices": [],
      "references": [],
      "activity": null
    },
    "messages": [
      {
        "id": "msg_4d049c17-6b83-4440-8f2d-9a933a06baac",
        "conversationId": "conv_eed30893-666d-4f23-998c-a7ff8aba290a",
        "role": "user",
        "content": "LIVE-01 118f5bc7: en une phrase, confirme que tu es Nora et que le socle cognitif répond. Aucune recherche web. Aucun outil Git.",
        "status": "COMPLETE",
        "generationId": null,
        "ordinal": 1,
        "createdAt": "2026-11-26T16:28:29.900Z"
      },
      {
        "id": "msg_f248ce48-530d-4fd8-bd36-7f987224c55c",
        "conversationId": "conv_eed30893-666d-4f23-998c-a7ff8aba290a",
        "role": "assistant",
        "content": "Je suis Nora et le socle cognitif répond.",
        "status": "COMPLETE",
        "generationId": "gen_a982ab38-c871-4828-9e8f-9d10b4ad628c",
        "ordinal": 2,
        "createdAt": "2026-11-26T16:28:40.337Z"
      }
    ]
  }
}
```

## 6. Created files (complete)

### `projects/sfia-studio-next/web/tests/unit/ml5-c2-c4-restitution-conductor.test.ts`
```
/**
 * C2/C4 — soft-stop with acquis enters RESTITUTION_PHASE (reserve ~24k) instead of
 * discarding restitution headroom; without acquis, soft-stop suspends.
 */
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { evaluateGlobalResourceEnvelope } from "@/domains/conversation/cognitive-work";
import { buildResourceContinuitySuspendMessage } from "@/domains/conversation/cognitive-policy";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
} from "@/domains/conversation/investigation-state";

const openOrResumeCognitiveWork = vi.fn();
const heartbeatCognitiveWork = vi.fn();
const checkpointCognitiveWork = vi.fn();
const releaseCognitiveWorkLease = vi.fn();

vi.mock("@/domains/conversation/cognitive-work", async (importOriginal) => {
  const actual = await importOriginal<typeof import("@/domains/conversation/cognitive-work")>();
  return {
    ...actual,
    openOrResumeCognitiveWork: (...args: unknown[]) => openOrResumeCognitiveWork(...args),
    heartbeatCognitiveWork: (...args: unknown[]) => heartbeatCognitiveWork(...args),
    checkpointCognitiveWork: (...args: unknown[]) => checkpointCognitiveWork(...args),
    releaseCognitiveWorkLease: (...args: unknown[]) => releaseCognitiveWorkLease(...args),
  };
});

const ENVELOPE_ENV = {
  SFIA_COGNITIVE_MAX_TOKENS: "100000",
  SFIA_COGNITIVE_REEVAL_TOKENS: "500000",
  SFIA_COGNITIVE_MAX_SEGMENTS: "120",
} as const;

const NEAR_LIMIT_INVESTIGATION_TOKENS = { inputTokens: 76_000, outputTokens: 0 };

function investigationWithAcquis() {
  return evaluateContractReadiness({
    ...createEmptyInvestigation("synthèse métier"),
    desiredOutcome: "livrable argumenté",
    sources: [{ kind: "D4", ref: "spec-tva", coverage: "CONSULTED" }],
    conclusions: ["TVA export 0% — base documentée spec-tva"],
    remainingWork: ["Approfondir périmètre export"],
  });
}

describe("ML5 C2/C4 — restitution phase conductor", () => {
  const prevMaxTokens = process.env.SFIA_COGNITIVE_MAX_TOKENS;
  const prevReeval = process.env.SFIA_COGNITIVE_REEVAL_TOKENS;
  const prevSeg = process.env.SFIA_COGNITIVE_MAX_SEGMENTS;

  beforeEach(() => {
    vi.clearAllMocks();
    process.env.SFIA_COGNITIVE_MAX_TOKENS = ENVELOPE_ENV.SFIA_COGNITIVE_MAX_TOKENS;
    process.env.SFIA_COGNITIVE_REEVAL_TOKENS = ENVELOPE_ENV.SFIA_COGNITIVE_REEVAL_TOKENS;
    process.env.SFIA_COGNITIVE_MAX_SEGMENTS = ENVELOPE_ENV.SFIA_COGNITIVE_MAX_SEGMENTS;

    let revision = 1;
    const baseWork = {
      id: "cgw_restitution",
      ownerPilotId: "pilot",
      preparationId: "prep",
      projectId: null as string | null,
      conversationId: null as string | null,
      status: "RUNNING" as const,
      revision: 1,
      ownerToken: "tok",
      leaseUntil: new Date(Date.now() + 60_000),
      objective: "synthèse métier",
      expectedOutcome: "livrable",
      state: investigationWithAcquis(),
      resources: { segmentCalls: 0, limits: [] as string[] },
      production: { kind: "NONE" as const, status: "IDLE" as const, parts: [] },
      interruptCause: null as string | null,
    };
    openOrResumeCognitiveWork.mockImplementation(async () => ({
      work: { ...baseWork, revision },
      resumed: false,
      ownerToken: "tok",
    }));
    heartbeatCognitiveWork.mockResolvedValue(true);
    checkpointCognitiveWork.mockImplementation(
      async (input: {
        expectedRevision: number;
        state: unknown;
        resources: unknown;
        production: unknown;
        status?: string;
      }) => {
        revision = input.expectedRevision + 1;
        return {
          ...baseWork,
          revision,
          status: input.status ?? "RUNNING",
          state: input.state,
          resources: input.resources,
          production: input.production,
        };
      },
    );
    releaseCognitiveWorkLease.mockResolvedValue(undefined);
  });

  afterEach(() => {
    if (prevMaxTokens === undefined) delete process.env.SFIA_COGNITIVE_MAX_TOKENS;
    else process.env.SFIA_COGNITIVE_MAX_TOKENS = prevMaxTokens;
    if (prevReeval === undefined) delete process.env.SFIA_COGNITIVE_REEVAL_TOKENS;
    else process.env.SFIA_COGNITIVE_REEVAL_TOKENS = prevReeval;
    if (prevSeg === undefined) delete process.env.SFIA_COGNITIVE_MAX_SEGMENTS;
    else process.env.SFIA_COGNITIVE_MAX_SEGMENTS = prevSeg;
  });

  it("envelope: reserve 24k soft-stops investigation projection but restitution segment stays admissible", () => {
    const base = {
      segmentCalls: 2,
      webCalls: 0,
      durationMs: 1,
      limits: [] as string[],
      ...NEAR_LIMIT_INVESTIGATION_TOKENS,
    };
    const investigationNext = evaluateGlobalResourceEnvelope(base, ENVELOPE_ENV, {
      reserveForRestitution: 24_000,
      projectedNextSegmentTokens: 30_000,
    });
    expect(investigationNext.ok).toBe(false);
    expect(investigationNext.softStop).toBe(true);

    const restitutionNext = evaluateGlobalResourceEnvelope(
      { ...base, limits: ["RESTITUTION_PHASE"] },
      ENVELOPE_ENV,
      { reserveForRestitution: 0, projectedNextSegmentTokens: 12_000 },
    );
    expect(restitutionNext.ok).toBe(true);
  });

  it("after investigation soft-stop with acquis, conductor enters RESTITUTION_PHASE and runs restitution", async () => {
    const { runCognitiveConductor } = await import(
      "@/domains/conversation/cognitive-conductor"
    );

    const result = await runCognitiveConductor({
      pilotId: "pilot",
      preparationId: "prep",
      objective: "synthèse métier",
      maxSegmentsThisInvocation: 4,
      runSegment: async ({ segmentIndex }) => {
        const investigation =
          segmentIndex === 0
            ? investigationWithAcquis()
            : evaluateContractReadiness({
                ...investigationWithAcquis(),
                remainingWork: [
                  "Restitution — produire la synthèse finale avec références et limites explicites",
                ],
              });
        return {
          replyText: segmentIndex === 0 ? "investigation" : "synthèse finale",
          qualification: null,
          investigation,
          continueWork: segmentIndex === 0,
          resourcesDelta:
            segmentIndex === 0
              ? { ...NEAR_LIMIT_INVESTIGATION_TOKENS, segmentCalls: 1 }
              : { inputTokens: 8_000, outputTokens: 4_000, segmentCalls: 1 },
        };
      },
    });

    expect(result.segmentsRun).toBeGreaterThanOrEqual(2);
    expect(result.work.resources.limits ?? []).toContain("RESTITUTION_PHASE");
    expect(result.suspended).toBe(false);
    expect(result.replyText).toBe("synthèse finale");
  });

  it("soft-stop without acquis suspends without RESTITUTION_PHASE", async () => {
    openOrResumeCognitiveWork.mockImplementation(async () => ({
      work: {
        id: "cgw_no_acquis",
        ownerPilotId: "pilot",
        preparationId: "prep",
        projectId: null,
        conversationId: null,
        status: "RUNNING" as const,
        revision: 2,
        ownerToken: "tok",
        leaseUntil: new Date(Date.now() + 60_000),
        objective: "vide",
        expectedOutcome: null,
        state: createEmptyInvestigation("vide"),
        resources: { segmentCalls: 0, limits: [] as string[] },
        production: { kind: "NONE" as const, status: "IDLE" as const, parts: [] },
        interruptCause: null,
      },
      resumed: true,
      ownerToken: "tok",
    }));

    const { runCognitiveConductor } = await import(
      "@/domains/conversation/cognitive-conductor"
    );
    const result = await runCognitiveConductor({
      pilotId: "pilot",
      preparationId: "prep",
      objective: "vide",
      workId: "cgw_no_acquis",
      maxSegmentsThisInvocation: 3,
      runSegment: async () => ({
        replyText: "pas d'acquis",
        qualification: null,
        investigation: createEmptyInvestigation("vide"),
        continueWork: true,
        resourcesDelta: { ...NEAR_LIMIT_INVESTIGATION_TOKENS, segmentCalls: 1 },
      }),
    });

    expect(result.segmentsRun).toBeGreaterThanOrEqual(1);
    expect(result.suspended).toBe(true);
    expect(result.work.resources.limits ?? []).not.toContain("RESTITUTION_PHASE");
  });

  it("Pilote suspend message still states sans obligation d'administrer les modèles", () => {
    const msg = buildResourceContinuitySuspendMessage("gpt-6-luna", "high");
    expect(msg).toContain("sans obligation d'administrer les modèles");
  });
});

```

### `projects/sfia-studio-next/web/tests/unit/ml5-http-attempt-finops-correlation.test.ts`
```
import { createHash } from "node:crypto";
import { afterEach, describe, expect, it, vi } from "vitest";
import {
  beginCampaignEnvelope,
  commitProviderEmission,
  getHttpAttemptsSnapshot,
  reserveHttpEmission,
  runWithProviderEmissionStore,
  __resetProviderEmissionFrontierForTests,
} from "@/domains/conversation/provider-emission-frontier";

const TEST_KEY = "sk-[REDACTED]";
const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);

const insertCalls: Array<{ attemptId?: string | null; limits?: string[]; granularity?: string }> =
  [];

vi.mock("@/db/client", () => ({
  db: {
    insert: () => ({
      values: (row: {
        attemptId?: string | null;
        limitsJson?: string[];
        granularity?: string;
      }) => {
        insertCalls.push({
          attemptId: row.attemptId,
          limits: row.limitsJson,
          granularity: row.granularity,
        });
        return {
          onConflictDoNothing: () => ({
            returning: () => Promise.resolve([{ id: `obs-${insertCalls.length}` }]),
          }),
        };
      },
    }),
  },
}));

describe("ML5 Contract D — HTTP attempt FinOps correlation", () => {
  afterEach(() => {
    __resetProviderEmissionFrontierForTests();
    insertCalls.length = 0;
    vi.clearAllMocks();
  });

  it("exports committed/uncertain HTTP attempts without prompt bodies", () => {
    runWithProviderEmissionStore(() => {
      beginCampaignEnvelope({ campaignId: "c1", maxHttpAttempts: 3, required: true });
      const a = reserveHttpEmission({
        url: "https://api.openai.com/v1/responses",
        body: JSON.stringify({
          model: "gpt-6.1-terra",
          max_output_tokens: 10,
          reasoning: { effort: "medium" },
          sfia_estimated_input_tokens: 50,
        }),
        effort: "medium",
        env: {
          STUDIO_LANE: "DEV",
          OPENAI_API_KEY: TEST_KEY,
          SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
        } as NodeJS.ProcessEnv,
      });
      expect(a.ok).toBe(true);
      if (!a.ok) throw new Error("reserve");
      expect(getHttpAttemptsSnapshot()).toHaveLength(0);
      commitProviderEmission(a);
      const snap = getHttpAttemptsSnapshot();
      expect(snap).toHaveLength(1);
      expect(snap[0]).toEqual({
        attemptId: a.attemptId,
        state: "COMMITTED",
        campaignId: "c1",
        modelHint: "gpt-6.1-terra",
        urlHost: "api.openai.com",
      });
      expect(Object.keys(snap[0]!)).not.toContain("reservedInputTokens");
    });
  });

  it("single HTTP attempt aligns FinOps attemptId and markers", async () => {
    const { createHash } = await import("node:crypto");
    const key = "sk-[REDACTED]";
    const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
  const env = {
      STUDIO_LANE: "DEV",
      OPENAI_API_KEY: key,
      SFIA_OPENAI_EXPECTED_KEY_FP: fp,
    } as NodeJS.ProcessEnv;

    const { runWithProviderEmissionStoreAsync } = await import(
      "@/domains/conversation/provider-emission-frontier"
    );
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 2, required: true });
      const http = reserveHttpEmission({
        url: "https://api.openai.com/v1/responses",
        body: JSON.stringify({
          model: "gpt-6.1-terra",
          max_output_tokens: 20,
          reasoning: { effort: "medium" },
          sfia_estimated_input_tokens: 100,
        }),
        effort: "medium",
        env,
      });
      expect(http.ok).toBe(true);
      if (!http.ok) throw new Error("http");
      commitProviderEmission(http);

      const { recordNoraProviderUsageWithHttpCorrelation } = await import(
        "@/domains/conversation/usage-accounting"
      );
      await recordNoraProviderUsageWithHttpCorrelation({
        runResult: {
          usage: { inputTokens: 10, outputTokens: 5, totalTokens: 15 },
        },
        status: "succeeded",
        operation: "nora.generate_reply",
        attemptId: "sdk_att_only",
        generationId: "gen-single",
        modelRequested: "gpt-6.1-terra",
      });
      expect(insertCalls.some((c) => c.attemptId === http.attemptId)).toBe(true);
      expect(insertCalls[0]?.limits).toContain(`HTTP_ATTEMPT:${http.attemptId}`);
      expect(insertCalls[0]?.limits).toContain("SDK_ATTEMPT:sdk_att_only");
    });
  });

  it("multiple HTTP attempts add per-attempt PARTIAL rows without invented tokens", async () => {
    const { createHash } = await import("node:crypto");
    const key = "sk-[REDACTED]";
    const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
    const env = {
      STUDIO_LANE: "DEV",
      OPENAI_API_KEY: key,
      SFIA_OPENAI_EXPECTED_KEY_FP: fp,
    } as NodeJS.ProcessEnv;
    const body = JSON.stringify({
      model: "gpt-6.1-terra",
      max_output_tokens: 20,
      reasoning: { effort: "medium" },
      sfia_estimated_input_tokens: 100,
    });

    const { runWithProviderEmissionStoreAsync } = await import(
      "@/domains/conversation/provider-emission-frontier"
    );
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 3, required: true });
      const h1 = reserveHttpEmission({ url: "https://api.openai.com/v1/responses", body, effort: "medium", env });
      const h2 = reserveHttpEmission({ url: "https://api.openai.com/v1/responses", body, effort: "medium", env });
      if (!h1.ok || !h2.ok) throw new Error("reserve");
      commitProviderEmission(h1);
      commitProviderEmission(h2);

      const { recordNoraProviderUsageWithHttpCorrelation } = await import(
        "@/domains/conversation/usage-accounting"
      );
      await recordNoraProviderUsageWithHttpCorrelation({
        runResult: { usage: { inputTokens: 50, outputTokens: 20, totalTokens: 70 } },
        status: "succeeded",
        operation: "nora.generate_reply",
        attemptId: "sdk_multi",
        generationId: "gen-multi",
        modelRequested: "gpt-6.1-terra",
      });
      expect(insertCalls.length).toBe(3);
      expect(insertCalls[0]?.limits).toContain("MULTI_HTTP_ATTEMPT_AGGREGATE");
      const partialRows = insertCalls.filter(
        (c) => c.granularity === "REQUEST" && c.attemptId !== "sdk_multi",
      );
      expect(partialRows.length).toBe(2);
      expect(partialRows.every((r) => r.limits?.includes("HTTP_ATTEMPT_USAGE_UNKNOWN"))).toBe(
        true,
      );
    });
  });
});
```

### `projects/sfia-studio-next/web/tests/unit/ml5-provider-sdk-frontier.integration.test.ts`
```
/**
 * A-03 / A-04 — real `openai` SDK (locked 7.50) with substituted fetch.
 * Does NOT call gated() twice artificially — the SDK's own retry path must emit.
 */
import { createHash } from "node:crypto";
import { afterEach, describe, expect, it } from "vitest";
import {
  assertSdkInvocationAdmission,
  beginCampaignEnvelope,
  createFrontierAwareFetch,
  enableHttpMetaCaptureForTests,
  ensureFrontierOpenAIClientInstalled,
  getEmissionsObservedForTests,
  getHttpBodiesObservedForTests,
  ProviderEmissionRefusedError,
  runWithProviderEmissionStoreAsync,
  __resetFrontierOpenAIClientInstallForTests,
  __resetProviderEmissionFrontierForTests,
} from "@/domains/conversation/provider-emission-frontier";

const TEST_KEY = "sk-[REDACTED]";
const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);

describe("A — real OpenAI SDK through frontier fetch", () => {
  afterEach(() => {
    __resetProviderEmissionFrontierForTests();
    __resetFrontierOpenAIClientInstallForTests();
  });

  it("A-03: SDK maxRetries triggers a second HTTP attempt counted by frontier", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 3, required: true });
      enableHttpMetaCaptureForTests();
      const prev = { ...process.env };
      Object.assign(process.env, {
        STUDIO_LANE: "DEV",
        OPENAI_API_KEY: TEST_KEY,
        SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
      });
      try {
        assertSdkInvocationAdmission({
          kind: "campaign.probe",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        let n = 0;
        const transport = (async () => {
          n += 1;
          if (n === 1) {
            return new Response("temporary", { status: 500 });
          }
          // Minimal Responses-like success body
          return new Response(
            JSON.stringify({
              id: "resp_test",
              object: "response",
              status: "completed",
              model: "gpt-6.1-terra",
              output: [],
              usage: { input_tokens: 10, output_tokens: 5 },
            }),
            { status: 200, headers: { "content-type": "application/json" } },
          );
        }) as typeof fetch;

        await ensureFrontierOpenAIClientInstalled({
          forceReinstall: true,
          fetch: transport,
          maxRetries: 2,
        });

        const OpenAI = (await import("openai")).default;
        // Use the same frontier-aware fetch the install registered conceptually —
        // construct a client explicitly so we exercise openai package retry.
        const client = new OpenAI({
          apiKey: TEST_KEY,
          fetch: createFrontierAwareFetch(transport),
          maxRetries: 2,
        });

        // responses.create retries on 5xx via SDK — each attempt hits frontier.
        await client.responses.create({
          model: "gpt-6.1-terra",
          input: "ping",
          max_output_tokens: 32,
          // @ts-expect-error reasoning shape accepted by API
          reasoning: { effort: "medium" },
        } as never);

        expect(n).toBeGreaterThanOrEqual(2);
        expect(getEmissionsObservedForTests()).toBeGreaterThanOrEqual(2);
        expect(getHttpBodiesObservedForTests().length).toBeGreaterThanOrEqual(2);
      } finally {
        for (const k of ["STUDIO_LANE", "OPENAI_API_KEY", "SFIA_OPENAI_EXPECTED_KEY_FP"]) {
          if (prev[k] === undefined) delete process.env[k];
          else process.env[k] = prev[k]!;
        }
      }
    });
  }, 20_000);

  it("A-04: campaign N=1 refuses SDK second attempt after first commit", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
      const prev = { ...process.env };
      Object.assign(process.env, {
        STUDIO_LANE: "DEV",
        OPENAI_API_KEY: TEST_KEY,
        SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
      });
      try {
        assertSdkInvocationAdmission({
          kind: "campaign.probe",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });
        let n = 0;
        const transport = (async () => {
          n += 1;
          return new Response(
            JSON.stringify({
              id: `resp_${n}`,
              object: "response",
              status: "completed",
              output: [],
              usage: { input_tokens: 3, output_tokens: 1 },
            }),
            { status: 200, headers: { "content-type": "application/json" } },
          );
        }) as typeof fetch;
        const client = new (await import("openai")).default({
          apiKey: TEST_KEY,
          fetch: createFrontierAwareFetch(transport),
          maxRetries: 0,
        });
        await client.responses.create({
          model: "gpt-6.1-terra",
          input: "one",
          max_output_tokens: 16,
          reasoning: { effort: "medium" },
        } as never);
        let secondErr: unknown;
        try {
          await client.responses.create({
            model: "gpt-6.1-terra",
            input: "two",
            max_output_tokens: 16,
            reasoning: { effort: "medium" },
          } as never);
        } catch (e) {
          secondErr = e;
        }
        expect(secondErr).toBeTruthy();
        // openai package may wrap ProviderEmissionRefusedError as APIConnectionError
        const chain: unknown[] = [];
        let cur: unknown = secondErr;
        for (let i = 0; i < 5 && cur; i++) {
          chain.push(cur);
          cur =
            cur && typeof cur === "object" && "cause" in cur
              ? (cur as { cause: unknown }).cause
              : null;
        }
        const refused = chain.some(
          (e) =>
            e instanceof ProviderEmissionRefusedError ||
            (e instanceof Error &&
              /CAMPAIGN_ENVELOPE_EXHAUSTED|CAMPAIGN_HTTP_ATTEMPTS/.test(e.message)),
        );
        expect(refused).toBe(true);
        expect(n).toBe(1);
        expect(getEmissionsObservedForTests()).toBe(1);
      } finally {
        for (const k of ["STUDIO_LANE", "OPENAI_API_KEY", "SFIA_OPENAI_EXPECTED_KEY_FP"]) {
          if (prev[k] === undefined) delete process.env[k];
          else process.env[k] = prev[k]!;
        }
      }
    });
  }, 20_000);
});

```

### `projects/sfia-studio-next/web/scripts/ml5-g-live-api-bounded.mjs`
```
/**
 * G-LIVE-API bounded campaign — LIVE-01..04 against DEV :3100 (WEB OFF).
 * Preconditions: qualify server with SFIA_G_LIVE_API=1, WEB flags 0, STUDIO_LANE=DEV.
 * Does not touch RECETTE :3200. Stops when oracle is sufficient — does not burn envelope.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";

const BASE = process.env.SFIA_LIVE_BASE || "http://127.0.0.1:3100";
const OUT =
  process.env.SFIA_LIVE_OUT ||
  "/tmp/sfia-ml5-g-live-api-20261126";
mkdirSync(OUT, { recursive: true });

const jar = { cookie: "" };

async function api(path, { method = "GET", body, timeoutMs = 900_000 } = {}) {
  const ctrl = new AbortController();
  const t = setTimeout(() => ctrl.abort(), timeoutMs);
  try {
    const res = await fetch(`${BASE}${path}`, {
      method,
      headers: {
        ...(body ? { "content-type": "application/json" } : {}),
        ...(jar.cookie ? { cookie: jar.cookie } : {}),
      },
      body: body ? JSON.stringify(body) : undefined,
      signal: ctrl.signal,
    });
    const set = res.headers.getSetCookie?.() || [];
    for (const c of set) {
      const part = c.split(";")[0];
      jar.cookie = jar.cookie ? `${jar.cookie}; ${part}` : part;
    }
    const text = await res.text();
    let json = null;
    try {
      json = JSON.parse(text);
    } catch {
      json = { _raw: text.slice(0, 4000) };
    }
    return { status: res.status, json };
  } finally {
    clearTimeout(t);
  }
}

function save(name, data) {
  writeFileSync(`${OUT}/${name}.json`, JSON.stringify(data, null, 2));
}

function pg(sql) {
  const oneLine = sql.replace(/\s+/g, " ").trim();
  return execSync(
    `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(oneLine)}`,
    { encoding: "utf8", maxBuffer: 20_000_000 },
  ).trim();
}

function pgJson(sql) {
  const raw = pg(sql);
  if (!raw) return null;
  try {
    return JSON.parse(raw);
  } catch {
    return raw;
  }
}

const report = {
  startedAt: new Date().toISOString(),
  base: BASE,
  campaign: "g-live-api-20261126",
  gate: "G-LIVE-API",
  web: "OFF",
  steps: [],
  scenarios: {},
  finops: null,
  verdict: null,
};

function step(name, data) {
  report.steps.push({ name, at: new Date().toISOString(), ...data });
  console.log(`[${name}]`, JSON.stringify(data).slice(0, 600));
}

async function turn(target, content, extra = {}) {
  const path = target.preparationId
    ? `/api/preparations/${target.preparationId}/messages`
    : `/api/projects/${target.projectId}/messages`;
  return api(path, {
    method: "POST",
    body: {
      content,
      clientTurnKey: extra.clientTurnKey || `ctk_${randomUUID()}`,
      ...extra,
    },
    timeoutMs: 900_000,
  });
}

function extractReply(json) {
  if (!json || typeof json !== "object") return "";
  if (typeof json.content === "string" && json.content.trim()) return json.content;
  if (typeof json.reply === "string" && json.reply.trim()) return json.reply;
  const msgs = Array.isArray(json.messages) ? json.messages : [];
  for (let i = msgs.length - 1; i >= 0; i--) {
    const m = msgs[i];
    if (
      m &&
      (m.role === "assistant" || m.author === "assistant" || m.kind === "assistant") &&
      typeof m.content === "string" &&
      m.content.trim()
    ) {
      return m.content;
    }
  }
  const am = json.assistantMessage;
  if (am && typeof am.content === "string") return am.content;
  return "";
}

function extractWorkId(json) {
  return (
    json?.cognitiveWork?.workId ||
    json?.cognitiveWorkId ||
    json?.workId ||
    null
  );
}

try {
  const health = await api("/login");
  step("health", { status: health.status });
  if (health.status !== 200 && health.status !== 307 && health.status !== 302) {
    throw new Error(`DEV :3100 not ready status=${health.status}`);
  }

  await api("/api/dev/auto-session", { method: "POST" });
  const runId = randomUUID().slice(0, 8);

  // LIVE-01 — nominal simple turn
  const prep = await api("/api/preparations", { method: "POST", body: {} });
  save("01-prep", prep);
  const preparationId = prep.json?.preparationId;
  if (!preparationId) throw new Error("no preparationId");

  const t0 = Date.now();
  const live01 = await turn(
    { preparationId },
    `LIVE-01 ${runId}: en une phrase, confirme que tu es Nora et que le socle cognitif répond. Aucune recherche web. Aucun outil Git.`,
  );
  save("02-live01", live01);
  const reply01 = extractReply(live01.json);
  const workId01 = extractWorkId(live01.json);
  step("LIVE-01", {
    status: live01.status,
    ms: Date.now() - t0,
    workId: workId01,
    noraStatus: live01.json?.status,
    attemptNotes: live01.json?.attempts?.[0]?.notes ?? null,
    replyChars: String(reply01).length,
    replyPreview: String(reply01).slice(0, 280),
  });
  report.scenarios.LIVE01 = {
    status: live01.status,
    ms: Date.now() - t0,
    workId: workId01,
    noraStatus: live01.json?.status,
    attempts: live01.json?.attempts ?? [],
    generationId: live01.json?.generationId ?? null,
    reply: String(reply01).slice(0, 4000),
  };
  if (live01.status < 200 || live01.status >= 300) {
    throw new Error(`LIVE-01 HTTP ${live01.status}`);
  }

  // LIVE-02 — light tool-using investigation on local/public docs if work exists
  const live02 = await turn(
    { preparationId },
    `LIVE-02 ${runId}: sans recherche web, résume en 5 lignes maximum le rôle de Nora dans Studio Next (allocation cognitive, conducteur, FinOps). Si des acquis existent déjà, mobilise-les. Ne relance pas une investigation exhaustive.`,
  );
  save("03-live02", live02);
  const reply02 = extractReply(live02.json);
  const workId02 = extractWorkId(live02.json) || workId01;
  step("LIVE-02", {
    status: live02.status,
    noraStatus: live02.json?.status,
    attemptNotes: live02.json?.attempts?.[0]?.notes ?? null,
    replyChars: String(reply02).length,
    workId: workId02,
    replyPreview: String(reply02).slice(0, 280),
  });
  report.scenarios.LIVE02 = {
    status: live02.status,
    workId: workId02,
    noraStatus: live02.json?.status,
    attempts: live02.json?.attempts ?? [],
    generationId: live02.json?.generationId ?? null,
    reply: String(reply02).slice(0, 4000),
  };

  // LIVE-03 — restitution / note from acquis
  const live03 = await turn(
    { preparationId },
    `LIVE-03 ${runId}: produis une courte note technique (8 lignes max) consolidant les acquis de ce fil. Pas de nouvelle investigation. Cite uniquement ce qui est déjà établi.`,
  );
  save("04-live03", live03);
  const reply03 = extractReply(live03.json);
  step("LIVE-03", {
    status: live03.status,
    noraStatus: live03.json?.status,
    attemptNotes: live03.json?.attempts?.[0]?.notes ?? null,
    replyChars: String(reply03).length,
    replyPreview: String(reply03).slice(0, 400),
  });
  report.scenarios.LIVE03 = {
    status: live03.status,
    noraStatus: live03.json?.status,
    attempts: live03.json?.attempts ?? [],
    generationId: live03.json?.generationId ?? null,
    reply: String(reply03).slice(0, 4000),
  };

  // LIVE-04 — FinOps reconciliation from PostgreSQL (no extra LIVE burn)
  const since = report.startedAt;
  const usage = pgJson(
    `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY created_at), '[]'::json) FROM (
      SELECT id, created_at, cognitive_work_id, generation_id, attempt_id, operation,
             model_requested, model_applied, effort_requested, effort_applied,
             input_tokens, output_tokens, total_tokens, provider_requests,
             estimated_cost_usd, cost_coverage, status, granularity,
             provider_response_id, limits_json, error_category
      FROM provider_usage_observations
      WHERE created_at >= '${since}'::timestamptz
      ORDER BY created_at
      LIMIT 80
    ) t;`,
  );
  const usageRows = Array.isArray(usage) ? usage : [];
  const sumIn = usageRows.reduce((a, r) => a + (Number(r.input_tokens) || 0), 0);
  const sumOut = usageRows.reduce((a, r) => a + (Number(r.output_tokens) || 0), 0);
  const costs = usageRows
    .map((r) => Number(r.estimated_cost_usd))
    .filter((n) => Number.isFinite(n));
  const sumCost = costs.reduce((a, b) => a + b, 0);
  const attemptIds = [
    ...new Set(usageRows.map((r) => r.attempt_id).filter(Boolean)),
  ];
  const httpMarkers = usageRows.flatMap((r) =>
    Array.isArray(r.limits_json)
      ? r.limits_json.filter((x) => String(x).startsWith("HTTP_ATTEMPT"))
      : [],
  );
  report.finops = {
    observationCount: usageRows.length,
    distinctAttemptIds: attemptIds.length,
    attemptIds,
    httpMarkers: httpMarkers.slice(0, 40),
    sumInputTokens: sumIn,
    sumOutputTokens: sumOut,
    estimatedCostUsdSum: Number(sumCost.toFixed(6)),
    coverages: [...new Set(usageRows.map((r) => r.cost_coverage))],
    granularities: [...new Set(usageRows.map((r) => r.granularity))],
    rows: usageRows.map((r) => ({
      id: r.id,
      attempt_id: r.attempt_id,
      generation_id: r.generation_id,
      operation: r.operation,
      model: r.model_applied || r.model_requested,
      effort: r.effort_applied || r.effort_requested,
      in: r.input_tokens,
      out: r.output_tokens,
      cost: r.estimated_cost_usd,
      coverage: r.cost_coverage,
      granularity: r.granularity,
      limits: r.limits_json,
    })),
  };
  save("05-finops", report.finops);
  step("LIVE-04", {
    observations: usageRows.length,
    attempts: attemptIds.length,
    sumIn,
    sumOut,
    cost: report.finops.estimatedCostUsdSum,
  });

  const finopsApi = await api("/api/settings/consumption").catch((e) => ({
    status: 0,
    json: { error: String(e) },
  }));
  save("06-finops-api", finopsApi);
  report.scenarios.LIVE04 = {
    pgObservations: usageRows.length,
    finopsApiStatus: finopsApi.status,
  };

  const ok =
    report.scenarios.LIVE01.status === 200 &&
    report.scenarios.LIVE01.noraStatus === "COMPLETE" &&
    String(report.scenarios.LIVE01.reply || "").length > 20 &&
    usageRows.length >= 1;
  report.verdict = ok
    ? "G-LIVE-API LIVE-01..04 EXERCISED — OBSERVATIONS PERSISTED"
    : "G-LIVE-API PARTIAL — REVIEW SCENARIOS";
  report.endedAt = new Date().toISOString();
  save("00-report", report);
  console.log(JSON.stringify({ verdict: report.verdict, out: OUT }, null, 2));
  process.exit(ok ? 0 : 2);
} catch (e) {
  report.verdict = "G-LIVE-API FAILED";
  report.error = String(e?.stack || e);
  report.endedAt = new Date().toISOString();
  save("00-report", report);
  console.error(report.error);
  process.exit(1);
}

```

## 7. Key production diffs (b69451e3..HEAD)

### `projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
index dc596496..cab2afe0 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
@@ -100,7 +100,8 @@ export type EmissionReservation =
         | "CAMPAIGN_ENVELOPE_EXHAUSTED"
         | "CAMPAIGN_SUSPENDED"
         | "ATTEMPT_STATE_INVALID"
-        | "INVALID_REQUEST";
+        | "INVALID_REQUEST"
+        | "ALS_CONTEXT_REQUIRED";
       reason: string;
     };

@@ -111,20 +112,30 @@ type FrontierStore = {
   httpEmissionsObserved: number;
   /** SDK run() prechecks that passed (not HTTP). */
   sdkInvocationsObserved: number;
-  /** Captured request bodies for substituted-transport tests. */
+  /**
+   * Test-only oracle metadata (no prompt bodies in production).
+   * captureBodies must be explicitly enabled for substituted-transport tests.
+   */
   httpBodiesObserved: Array<{
     attemptId: string;
     url: string;
     method: string;
-    bodyPreview: string;
+    model: string | null;
+    effort: string | null;
+    maxOutputTokens: number | null;
   }>;
   /** Effort admitted at SDK layer — reused for HTTP body admission (no silent medium). */
   effortHint: string | null;
+  /** Model admitted at SDK layer — compared to final HTTP payload. */
+  modelHint: string | null;
+  /** When true, record non-body metadata for substituted-transport oracles. */
+  captureHttpMeta: boolean;
 };

 const als = new AsyncLocalStorage<FrontierStore>();

 let clientInstallPromise: Promise<void> | null = null;
+let installedClientKeyFp: string | null = null;

 /**
  * Process-level latch: once a required campaign starts, OpenAI HTTP outside an
@@ -136,6 +147,13 @@ let requiredCampaignLatch: {
   active: boolean;
 } | null = null;

+/**
+ * Process-level campaign registry — counters survive ALS request boundaries.
+ * LIVE qualification (G-LIVE-API / G-WEB-PUBLIC) re-attaches the same envelope
+ * on each request; lost ALS must never invent a fresh unlimited campaign.
+ */
+const processCampaignRegistry = new Map<string, CampaignEnvelope>();
+
 function emptyStore(): FrontierStore {
   return {
     campaign: null,
@@ -144,11 +162,25 @@ function emptyStore(): FrontierStore {
     sdkInvocationsObserved: 0,
     httpBodiesObserved: [],
     effortHint: null,
+    modelHint: null,
+    captureHttpMeta: false,
   };
 }

+/** Active ALS store or null — never invent an ephemeral store for mutations. */
+export function getFrontierAlsStore(): FrontierStore | null {
+  return als.getStore() ?? null;
+}
+
 function store(): FrontierStore {
-  return als.getStore() ?? emptyStore();
+  const s = als.getStore();
+  if (!s) {
+    throw new ProviderEmissionRefusedError(
+      "ALS_CONTEXT_REQUIRED",
+      "Provider frontier mutations require runWithProviderEmissionStore* (ephemeral emptyStore is forbidden)",
+    );
+  }
+  return s;
 }

 /** Clear the required-campaign latch (end of script / campaign close). */
@@ -156,6 +188,10 @@ export function endRequiredCampaignLatch(): void {
   requiredCampaignLatch = null;
 }

+export function enableHttpMetaCaptureForTests(): void {
+  store().captureHttpMeta = true;
+}
+
 export function newAttemptId(): string {
   return `att_${randomBytes(8).toString("hex")}`;
 }
@@ -173,12 +209,24 @@ export function beginCampaignEnvelope(input: {
   maxDirectOpens?: number | null;
   required?: boolean;
 }): CampaignEnvelope {
+  const cur = store();
+  const campaignId =
+    input.campaignId?.trim() || `camp_${randomBytes(6).toString("hex")}`;
+  const existing = processCampaignRegistry.get(campaignId);
+  if (existing) {
+    // Re-attach the same process counters across ALS request boundaries.
+    cur.campaign = existing;
+    if (existing.required && !existing.suspended) {
+      requiredCampaignLatch = { campaignId: existing.campaignId, active: true };
+    }
+    return existing;
+  }
   const maxHttp = Math.max(
     0,
     Math.floor(input.maxHttpAttempts ?? input.maxAttempts ?? 0),
   );
   const campaign: CampaignEnvelope = {
-    campaignId: input.campaignId ?? `camp_${randomBytes(6).toString("hex")}`,
+    campaignId,
     required: input.required !== false,
     maxHttpAttempts: maxHttp,
     maxInputTokens:
@@ -215,13 +263,7 @@ export function beginCampaignEnvelope(input: {
     suspended: false,
     suspendReason: null,
   };
-  const cur = store();
-  if (!als.getStore()) {
-    throw new ProviderEmissionRefusedError(
-      "CAMPAIGN_REQUIRED_MISSING",
-      "beginCampaignEnvelope requires an active ALS store (runWithProviderEmissionStore*)",
-    );
-  }
+  processCampaignRegistry.set(campaignId, campaign);
   cur.campaign = campaign;
   if (campaign.required) {
     requiredCampaignLatch = { campaignId: campaign.campaignId, active: true };
@@ -229,8 +271,67 @@ export function beginCampaignEnvelope(input: {
   return campaign;
 }

+/**
+ * Attach G-LIVE-API / G-WEB-PUBLIC envelope from process env (qualify DEV only).
+ * Operational Studio without these flags keeps unlimited-by-campaign behavior.
+ * Returns null when no LIVE campaign is configured.
+ */
+export function attachConfiguredLiveCampaignFromEnv(
+  env: NodeJS.ProcessEnv = process.env,
+): CampaignEnvelope | null {
+  const gate =
+    (env.SFIA_G_LIVE_API || "").trim() === "1" ||
+    (env.SFIA_G_WEB_PUBLIC || "").trim() === "1";
+  if (!gate) return null;
+  if ((env.STUDIO_LANE || "").trim().toUpperCase() !== "DEV") {
+    throw new ProviderEmissionRefusedError(
+      "CAMPAIGN_REQUIRED_MISSING",
+      "LIVE campaign gates are DEV-only",
+    );
+  }
+  const web = (env.SFIA_G_WEB_PUBLIC || "").trim() === "1";
+  const campaignId =
+    (env.SFIA_LIVE_CAMPAIGN_ID || "").trim() ||
+    (web ? "g-web-public-20261126" : "g-live-api-20261126");
+  const num = (k: string, fallback: number): number => {
+    const raw = Number((env[k] || "").trim());
+    return Number.isFinite(raw) && raw >= 0 ? Math.floor(raw) : fallback;
+  };
+  // §12.2 G-LIVE-API defaults; §12.3 G-WEB-PUBLIC when that gate is set.
+  return beginCampaignEnvelope({
+    campaignId,
+    required: true,
+    maxHttpAttempts: num("SFIA_LIVE_MAX_HTTP_ATTEMPTS", web ? 20 : 40),
+    maxInputTokens: num("SFIA_LIVE_MAX_INPUT_TOKENS", web ? 500_000 : 2_000_000),
+    maxOutputTokens: num("SFIA_LIVE_MAX_OUTPUT_TOKENS", web ? 100_000 : 200_000),
+    maxInputTokensPerRequest: num("SFIA_LIVE_MAX_INPUT_TOKENS_PER_REQ", 100_000),
+    maxOutputTokensPerRequest: num("SFIA_LIVE_MAX_OUTPUT_TOKENS_PER_REQ", 10_000),
+    maxHostedSearches: web
+      ? num("SFIA_LIVE_MAX_HOSTED_SEARCHES", 5)
+      : null,
+    maxDirectOpens: web ? num("SFIA_LIVE_MAX_DIRECT_OPENS", 10) : null,
+  });
+}
+
+/** End process-level LIVE campaign (qualify close / test reset). */
+export function endProcessCampaign(campaignId?: string): void {
+  if (campaignId) {
+    processCampaignRegistry.delete(campaignId);
+    if (requiredCampaignLatch?.campaignId === campaignId) {
+      requiredCampaignLatch = null;
+    }
+    const s = getFrontierAlsStore();
+    if (s?.campaign?.campaignId === campaignId) s.campaign = null;
+    return;
+  }
+  processCampaignRegistry.clear();
+  requiredCampaignLatch = null;
+  const s = getFrontierAlsStore();
+  if (s) s.campaign = null;
+}
+
 export function getActiveCampaignEnvelope(): CampaignEnvelope | null {
-  return store().campaign;
+  return getFrontierAlsStore()?.campaign ?? null;
 }

 export function suspendCampaignEnvelope(reason: string): void {
@@ -244,7 +345,7 @@ export function suspendCampaignEnvelope(reason: string): void {
 }

 export function campaignHttpSlotsRemaining(
-  c: CampaignEnvelope | null = store().campaign,
+  c: CampaignEnvelope | null = getFrontierAlsStore()?.campaign ?? null,
 ): number {
   if (!c) return Number.POSITIVE_INFINITY;
   if (c.suspended) return 0;
@@ -270,25 +371,30 @@ function parseJsonBody(body: BodyInit | null | undefined): Record<string, unknow
   return null;
 }

-function estimateInputTokensFromBody(body: Record<string, unknown> | null): number {
-  if (!body) return 8_000; // conservative unknown
-  const maxOut = Number(body.max_output_tokens ?? body.max_tokens ?? 0);
-  // Prefer explicit conservative bound if present; else fixed conservative reserve.
+/**
+ * Demonstrable input bound — never a fake guarantee.
+ * Returns null when only an estimate would be invented.
+ */
+function demonstrableInputTokenBound(
+  body: Record<string, unknown> | null,
+): number | null {
+  if (!body) return null;
   const inputHint = Number(
     (body as { sfia_estimated_input_tokens?: unknown }).sfia_estimated_input_tokens ??
       0,
   );
   if (Number.isFinite(inputHint) && inputHint > 0) return Math.floor(inputHint);
-  // Without reliable estimate, reserve a conservative chunk so envelopes still bind.
-  void maxOut;
-  return 50_000;
+  return null;
 }

-function estimateOutputTokensFromBody(body: Record<string, unknown> | null): number {
-  if (!body) return 4_000;
+/** Output bound from the actual emission parameter (max_output_tokens). */
+function demonstrableOutputTokenBound(
+  body: Record<string, unknown> | null,
+): number | null {
+  if (!body) return null;
   const maxOut = Number(body.max_output_tokens ?? body.max_tokens ?? 0);
   if (Number.isFinite(maxOut) && maxOut > 0) return Math.floor(maxOut);
-  return 4_000;
+  return null;
 }

 function modelFromBody(body: Record<string, unknown> | null): string | null {
@@ -296,6 +402,126 @@ function modelFromBody(body: Record<string, unknown> | null): string | null {
   return typeof m === "string" && m.trim() ? m.trim() : null;
 }

+function effortFromBody(body: Record<string, unknown> | null): string | null {
+  if (!body) return null;
+  const reasoning = body.reasoning;
+  if (reasoning && typeof reasoning === "object") {
+    const effort = (reasoning as { effort?: unknown }).effort;
+    if (typeof effort === "string" && effort.trim()) return effort.trim();
+  }
+  const top = body.reasoning_effort;
+  if (typeof top === "string" && top.trim()) return top.trim();
+  return null;
+}
+
+function bodyContainsHostedWebSearchTool(
+  body: Record<string, unknown> | null,
+): boolean {
+  if (!body) return false;
+  const tools = body.tools;
+  if (Array.isArray(tools)) {
+    for (const t of tools) {
+      if (!t || typeof t !== "object") continue;
+      const type = String((t as { type?: unknown }).type ?? "").trim();
+      if (type === "web_search" || type === "web_search_preview") return true;
+    }
+  }
+  const input = body.input;
+  if (Array.isArray(input)) {
+    for (const item of input) {
+      if (!item || typeof item !== "object") continue;
+      const type = String((item as { type?: unknown }).type ?? "").trim();
+      if (type === "web_search" || type === "web_search_preview") return true;
+    }
+  }
+  return false;
+}
+
+/** One assumed hosted search per Responses body carrying web_search tools. */
+export const HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1 =
+  "HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1" as const;
+
+/**
+ * Fail-closed hosted search accounting: reserve one hosted search per Responses
+ * emission when OpenAI web_search tools appear (engine may run more — {@link HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1}).
+ */
+function inferHostedSearchDeltaFromBody(
+  body: Record<string, unknown> | null,
+  campaign: CampaignEnvelope | null,
+): number {
+  if (!campaign || campaign.maxHostedSearches == null) return 0;
+  if (!bodyContainsHostedWebSearchTool(body)) return 0;
+  return 1;
+}
+
+export type HttpAttemptSnapshot = {
+  attemptId: string;
+  state: HttpAttemptState;
+  campaignId: string | null;
+  modelHint: string | null;
+  urlHost: string;
+};
+
+/** Read-only ALS view of HTTP attempts that reached commit or uncertain (no bodies). */
+export function getHttpAttemptsSnapshot(): HttpAttemptSnapshot[] {
+  const s = getFrontierAlsStore();
+  if (!s) return [];
+  const out: HttpAttemptSnapshot[] = [];
+  for (const rec of s.attempts.values()) {
+    if (rec.state !== "COMMITTED" && rec.state !== "UNCERTAIN") continue;
+    out.push({
+      attemptId: rec.attemptId,
+      state: rec.state,
+      campaignId: rec.campaignId,
+      modelHint: rec.modelHint,
+      urlHost: rec.urlHost,
+    });
+  }
+  return out;
+}
+
+export type DirectOpenGuard =
+  | { ok: true }
+  | {
+      ok: false;
+      reasonCode:
+        | "CAMPAIGN_ENVELOPE_EXHAUSTED"
+        | "CAMPAIGN_SUSPENDED"
+        | "ALS_CONTEXT_REQUIRED";
+      reason: string;
+    };
+
+export function assertDirectOpenAllowed(): DirectOpenGuard {
+  const s = getFrontierAlsStore();
+  if (!s?.campaign) return { ok: true };
+  const campaign = s.campaign;
+  if (campaign.suspended) {
+    return {
+      ok: false,
+      reasonCode: "CAMPAIGN_SUSPENDED",
+      reason: campaign.suspendReason ?? "CAMPAIGN_SUSPENDED",
+    };
+  }
+  if (campaign.maxDirectOpens == null) return { ok: true };
+  if (campaign.directOpensCommitted >= campaign.maxDirectOpens) {
+    campaign.suspended = true;
+    campaign.suspendReason = "CAMPAIGN_DIRECT_OPENS_EXHAUSTED";
+    return {
+      ok: false,
+      reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
+      reason: `directOpensCommitted=${campaign.directOpensCommitted} max=${campaign.maxDirectOpens}`,
+    };
+  }
+  return { ok: true };
+}
+
+/** Count one successful public page open against the active campaign envelope. */
+export function commitDirectOpen(): void {
+  const campaign = getFrontierAlsStore()?.campaign;
+  if (!campaign) return;
+  campaign.directOpensCommitted += 1;
+}
+
 /**
  * SDK invocation precheck — NOT an HTTP attempt.
  * Validates lane + model/effort admission before run().
@@ -306,6 +532,13 @@ export function assertSdkInvocationAdmission(input: {
   effort?: string | null;
   env?: NodeJS.ProcessEnv;
 }): EmissionReservation {
+  if (!als.getStore()) {
+    return {
+      ok: false,
+      reasonCode: "ALS_CONTEXT_REQUIRED",
+      reason: "SDK admission requires frontier ALS context",
+    };
+  }
   const env = input.env ?? process.env;
   const laneGuard = assertOpenAiKeyForLane(env);
   if (!laneGuard.ok) {
@@ -339,6 +572,7 @@ export function assertSdkInvocationAdmission(input: {
   const s = store();
   s.sdkInvocationsObserved += 1;
   s.effortHint = effortRaw;
+  s.modelHint = modelRaw;
   return {
     ok: true,
     attemptId: newAttemptId(),
@@ -369,6 +603,20 @@ export function reserveHttpEmission(input: {
   /** Hosted web_search tool call accounting (optional explicit). */
   hostedSearchDelta?: number;
 }): EmissionReservation {
+  if (!als.getStore()) {
+    if (requiredCampaignLatch?.active) {
+      return {
+        ok: false,
+        reasonCode: "CAMPAIGN_REQUIRED_MISSING",
+        reason: `required campaign ${requiredCampaignLatch.campaignId} latch active but ALS absent`,
+      };
+    }
+    return {
+      ok: false,
+      reasonCode: "ALS_CONTEXT_REQUIRED",
+      reason: "HTTP reserve requires frontier ALS context",
+    };
+  }
   const env = input.env ?? process.env;
   const laneGuard = assertOpenAiKeyForLane(env);
   if (!laneGuard.ok) {
@@ -380,12 +628,37 @@ export function reserveHttpEmission(input: {
   }

   const bodyJson = parseJsonBody(input.body ?? null);
+  const modelFromPayload = modelFromBody(bodyJson);
   const model =
-    (input.modelId ?? "").trim() || modelFromBody(bodyJson) || "";
+    (input.modelId ?? "").trim() || modelFromPayload || "";
+  const effortFromPayload = effortFromBody(bodyJson);
   const effortFromInput = (input.effort ?? "").trim();
   const effortFromStore = (store().effortHint ?? "").trim();
-  // Never invent medium/Terra — only reuse explicit input or SDK-admitted hint.
-  const effort = effortFromInput || effortFromStore;
+  // Final payload effort wins; never invent medium/Terra.
+  const effort = (effortFromPayload || effortFromInput || effortFromStore).trim();
+  const modelHint = (store().modelHint ?? "").trim();
+  if (modelFromPayload && modelHint && modelFromPayload !== modelHint) {
+    return {
+      ok: false,
+      reasonCode: "MODEL_EFFORT_NOT_ADMITTED",
+      reason: `HTTP payload model ${modelFromPayload} ≠ SDK-admitted ${modelHint}`,
+    };
+  }
+  if (effortFromPayload && effortFromStore && effortFromPayload !== effortFromStore) {
+    // Payload override must itself be admitted — do not silently keep the hint.
+    const overrideAdmit = admitModelEffort(
+      (model || modelHint) as CognitiveModelId,
+      effortFromPayload as CognitiveEffort,
+      admissionModeFromEnv(env),
+    );
+    if (!overrideAdmit.admitted) {
+      return {
+        ok: false,
+        reasonCode: "MODEL_EFFORT_NOT_ADMITTED",
+        reason: `payload effort ${effortFromPayload} not admitted (${overrideAdmit.reasonCode})`,
+      };
+    }
+  }

   if (!input.skipModelAdmission) {
     if (!model) {
@@ -427,10 +700,10 @@ export function reserveHttpEmission(input: {
         reason: `required campaign ${requiredCampaignLatch.campaignId} latch active but ALS campaign absent`,
       };
     }
-    // Operational path without campaign: allow HTTP but still track attempt locally.
+    // Operational path without campaign: track attempt; token fields are estimates only.
     const attemptId = newAttemptId();
-    const reservedInput = estimateInputTokensFromBody(bodyJson);
-    const reservedOutput = estimateOutputTokensFromBody(bodyJson);
+    const reservedInput = demonstrableInputTokenBound(bodyJson) ?? 0;
+    const reservedOutput = demonstrableOutputTokenBound(bodyJson) ?? 0;
     store().attempts.set(attemptId, {
       attemptId,
       campaignId: null,
@@ -468,31 +741,71 @@ export function reserveHttpEmission(input: {
     };
   }

-  const reservedInput = estimateInputTokensFromBody(bodyJson);
-  const reservedOutput = estimateOutputTokensFromBody(bodyJson);
+  // Campaign token limits require an opposable reservation before contact.
+  // Demonstrable payload bounds preferred; otherwise the campaign per-request
+  // ceiling may be used as a RESERVATION (worst-case charge) — never as a
+  // measured usage claim. Output still must be injected onto the wire payload
+  // by createFrontierAwareFetch when the SDK omits max_output_tokens.
+  let reservedInput = demonstrableInputTokenBound(bodyJson);
+  let reservedOutput = demonstrableOutputTokenBound(bodyJson);
+
+  if (
+    reservedInput == null &&
+    (campaign.maxInputTokens != null || campaign.maxInputTokensPerRequest != null)
+  ) {
+    if (campaign.maxInputTokensPerRequest != null) {
+      reservedInput = campaign.maxInputTokensPerRequest;
+    } else {
+      return {
+        ok: false,
+        reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
+        reason:
+          "INPUT_UNBOUNDED — campaign input limit set but no per-request ceiling or demonstrable bound",
+      };
+    }
+  }
+  if (
+    reservedOutput == null &&
+    (campaign.maxOutputTokens != null ||
+      campaign.maxOutputTokensPerRequest != null)
+  ) {
+    if (campaign.maxOutputTokensPerRequest != null) {
+      reservedOutput = campaign.maxOutputTokensPerRequest;
+    } else {
+      return {
+        ok: false,
+        reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
+        reason:
+          "OUTPUT_UNBOUNDED — campaign output limit set but no per-request ceiling or max_output_tokens",
+      };
+    }
+  }
+
+  const inTok = reservedInput ?? 0;
+  const outTok = reservedOutput ?? 0;

   if (
     campaign.maxInputTokensPerRequest != null &&
-    reservedInput > campaign.maxInputTokensPerRequest
+    inTok > campaign.maxInputTokensPerRequest
   ) {
     campaign.suspended = true;
     campaign.suspendReason = "INPUT_TOKENS_PER_REQUEST_EXCEEDED";
     return {
       ok: false,
       reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
-      reason: `inputPerReq=${reservedInput} max=${campaign.maxInputTokensPerRequest}`,
+      reason: `inputPerReq=${inTok} max=${campaign.maxInputTokensPerRequest}`,
     };
   }
   if (
     campaign.maxOutputTokensPerRequest != null &&
-    reservedOutput > campaign.maxOutputTokensPerRequest
+    outTok > campaign.maxOutputTokensPerRequest
   ) {
     campaign.suspended = true;
     campaign.suspendReason = "OUTPUT_TOKENS_PER_REQUEST_EXCEEDED";
     return {
       ok: false,
       reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
-      reason: `outputPerReq=${reservedOutput} max=${campaign.maxOutputTokensPerRequest}`,
+      reason: `outputPerReq=${outTok} max=${campaign.maxOutputTokensPerRequest}`,
     };
   }
   if (campaign.httpAttemptsReserved + 1 > campaign.maxHttpAttempts) {
@@ -506,29 +819,32 @@ export function reserveHttpEmission(input: {
   }
   if (
     campaign.maxInputTokens != null &&
-    campaign.inputTokensReserved + reservedInput > campaign.maxInputTokens
+    campaign.inputTokensReserved + inTok > campaign.maxInputTokens
   ) {
     campaign.suspended = true;
     campaign.suspendReason = "CAMPAIGN_INPUT_TOKENS_EXHAUSTED";
     return {
       ok: false,
       reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
-      reason: `inputReserved=${campaign.inputTokensReserved}+${reservedInput} max=${campaign.maxInputTokens}`,
+      reason: `inputReserved=${campaign.inputTokensReserved}+${inTok} max=${campaign.maxInputTokens}`,
     };
   }
   if (
     campaign.maxOutputTokens != null &&
-    campaign.outputTokensReserved + reservedOutput > campaign.maxOutputTokens
+    campaign.outputTokensReserved + outTok > campaign.maxOutputTokens
   ) {
     campaign.suspended = true;
     campaign.suspendReason = "CAMPAIGN_OUTPUT_TOKENS_EXHAUSTED";
     return {
       ok: false,
       reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
-      reason: `outputReserved=${campaign.outputTokensReserved}+${reservedOutput} max=${campaign.maxOutputTokens}`,
+      reason: `outputReserved=${campaign.outputTokensReserved}+${outTok} max=${campaign.maxOutputTokens}`,
     };
   }
-  const hostedDelta = Math.max(0, Math.floor(input.hostedSearchDelta ?? 0));
+  const hostedDelta = Math.max(
+    Math.max(0, Math.floor(input.hostedSearchDelta ?? 0)),
+    inferHostedSearchDeltaFromBody(bodyJson, campaign),
+  );
   if (
     hostedDelta > 0 &&
     campaign.maxHostedSearches != null &&
@@ -544,8 +860,8 @@ export function reserveHttpEmission(input: {
   }

   campaign.httpAttemptsReserved += 1;
-  campaign.inputTokensReserved += reservedInput;
-  campaign.outputTokensReserved += reservedOutput;
+  campaign.inputTokensReserved += inTok;
+  campaign.outputTokensReserved += outTok;

   const attemptId = newAttemptId();
   store().attempts.set(attemptId, {
@@ -554,8 +870,8 @@ export function reserveHttpEmission(input: {
     state: "RESERVED",
     kind: input.kind ?? "http.responses",
     reservedSlots: 1,
-    reservedInputTokens: reservedInput,
-    reservedOutputTokens: reservedOutput,
+    reservedInputTokens: inTok,
+    reservedOutputTokens: outTok,
     urlHost: safeHost(input.url),
     modelHint: model || null,
     createdAtMs: Date.now(),
@@ -566,8 +882,8 @@ export function reserveHttpEmission(input: {
     attemptId,
     campaignId: campaign.campaignId,
     reservedSlots: 1,
-    reservedInputTokens: reservedInput,
-    reservedOutputTokens: reservedOutput,
+    reservedInputTokens: inTok,
+    reservedOutputTokens: outTok,
     keyFingerprint: laneGuard.keyFingerprint,
     lane: laneGuard.lane,
     layer: "http",
@@ -708,39 +1024,48 @@ export function markProviderEmissionUncertain(reservation: {
 }

 export function getHttpAttempt(attemptId: string): HttpAttemptRecord | null {
-  return store().attempts.get(attemptId) ?? null;
+  return getFrontierAlsStore()?.attempts.get(attemptId) ?? null;
 }

 export function getEmissionsObservedForTests(): number {
-  return store().httpEmissionsObserved;
+  return getFrontierAlsStore()?.httpEmissionsObserved ?? 0;
 }

 export function getSdkInvocationsObservedForTests(): number {
-  return store().sdkInvocationsObserved;
+  return getFrontierAlsStore()?.sdkInvocationsObserved ?? 0;
 }

 export function getHttpBodiesObservedForTests(): FrontierStore["httpBodiesObserved"] {
-  return store().httpBodiesObserved.slice();
+  return getFrontierAlsStore()?.httpBodiesObserved.slice() ?? [];
 }

 export function __resetProviderEmissionFrontierForTests(): void {
-  const s = store();
-  s.campaign = null;
-  s.attempts.clear();
-  s.httpEmissionsObserved = 0;
-  s.sdkInvocationsObserved = 0;
-  s.httpBodiesObserved = [];
-  s.effortHint = null;
+  const s = getFrontierAlsStore();
+  if (s) {
+    s.campaign = null;
+    s.attempts.clear();
+    s.httpEmissionsObserved = 0;
+    s.sdkInvocationsObserved = 0;
+    s.httpBodiesObserved = [];
+    s.effortHint = null;
+    s.modelHint = null;
+    s.captureHttpMeta = false;
+  }
+  processCampaignRegistry.clear();
   requiredCampaignLatch = null;
+  installedClientKeyFp = null;
 }

+/** Nest-safe: reuse existing ALS store when already inside one. */
 export function runWithProviderEmissionStore<T>(fn: () => T): T {
+  if (als.getStore()) return fn();
   return als.run(emptyStore(), fn);
 }

 export async function runWithProviderEmissionStoreAsync<T>(
   fn: () => Promise<T>,
 ): Promise<T> {
+  if (als.getStore()) return fn();
   return als.run(emptyStore(), fn);
 }

@@ -777,11 +1102,11 @@ function isOpenAiApiUrl(url: string): boolean {
   try {
     const u = new URL(url);
     const host = u.hostname.toLowerCase();
+    // Exact destinations only — no approximate hostname matching.
     return (
       host === "api.openai.com" ||
-      host.endsWith(".openai.com") ||
       host === "api.openai.azure.com" ||
-      host.includes("openai.azure.com")
+      /^[a-z0-9-]+\.openai\.azure\.com$/.test(host)
     );
   } catch {
     return false;
@@ -797,10 +1122,9 @@ export function createFrontierAwareFetch(
   opts?: {
     /** When true, refuse OpenAI HTTP if no ALS campaign is active. */
     requireCampaign?: boolean;
-    effortHint?: string | null;
   },
 ): typeof fetch {
-  const requireCampaign = opts?.requireCampaign === true;
+  const requireCampaignOpt = opts?.requireCampaign === true;
   return (async (input: RequestInfo | URL, init?: RequestInit) => {
     const url =
       typeof input === "string"
@@ -812,7 +1136,24 @@ export function createFrontierAwareFetch(
       return baseFetch(input, init);
     }

-    if (requireCampaign && !store().campaign) {
+    const alsStore = als.getStore();
+    if (!alsStore) {
+      throw new ProviderEmissionRefusedError(
+        "ALS_CONTEXT_REQUIRED",
+        "OpenAI HTTP refused — no frontier ALS context (wrap LIVE paths)",
+      );
+    }
+    // Lost required campaign must never degrade to unlimited operational.
+    if (requiredCampaignLatch?.active && !alsStore.campaign) {
+      throw new ProviderEmissionRefusedError(
+        "CAMPAIGN_REQUIRED_MISSING",
+        `required campaign ${requiredCampaignLatch.campaignId} latch active but ALS campaign absent`,
+      );
+    }
+    if (
+      (requireCampaignOpt || requiredCampaignLatch?.active) &&
+      !alsStore.campaign
+    ) {
       throw new ProviderEmissionRefusedError(
         "CAMPAIGN_REQUIRED_MISSING",
         "OpenAI HTTP refused — campaign envelope required",
@@ -820,18 +1161,34 @@ export function createFrontierAwareFetch(
     }

     const method = (init?.method ?? "POST").toUpperCase();
-    const body = init?.body ?? null;
-    // Propagate explicit effort hint into ALS for this emission when provided.
-    if (opts?.effortHint && als.getStore()) {
-      store().effortHint = opts.effortHint;
+    let body = init?.body ?? null;
+    let bodyJson = parseJsonBody(body);
+    const campaign = alsStore.campaign;
+    // Inject opposable max_output_tokens onto the real provider payload when the
+    // campaign sets a per-request ceiling and the SDK omitted the field.
+    if (
+      campaign?.maxOutputTokensPerRequest != null &&
+      bodyJson &&
+      demonstrableOutputTokenBound(bodyJson) == null
+    ) {
+      bodyJson = {
+        ...bodyJson,
+        max_output_tokens: campaign.maxOutputTokensPerRequest,
+      };
+      body = JSON.stringify(bodyJson);
     }
+    const hostedSearchDelta = inferHostedSearchDeltaFromBody(
+      bodyJson,
+      campaign,
+    );
     const reservation = reserveHttpEmission({
       kind: "http.responses",
       url,
       method,
       body,
-      effort: opts?.effortHint ?? store().effortHint,
+      effort: alsStore.effortHint,
       skipModelAdmission: false,
+      hostedSearchDelta,
     });
     if (!reservation.ok) {
       throw new ProviderEmissionRefusedError(
@@ -840,23 +1197,29 @@ export function createFrontierAwareFetch(
       );
     }

-    const bodyPreview =
-      typeof body === "string" ? body.slice(0, 400) : body ? "[non-string-body]" : "";
-    store().httpBodiesObserved.push({
-      attemptId: reservation.attemptId,
-      url,
-      method,
-      bodyPreview,
-    });
+    if (alsStore.captureHttpMeta) {
+      alsStore.httpBodiesObserved.push({
+        attemptId: reservation.attemptId,
+        url,
+        method,
+        model: modelFromBody(bodyJson),
+        effort: effortFromBody(bodyJson),
+        maxOutputTokens: demonstrableOutputTokenBound(bodyJson),
+      });
+    }

+    const nextInit =
+      body === init?.body || init == null
+        ? init
+        : { ...init, body };
     try {
-      const res = await baseFetch(input, init);
-      // Contact established (response received). Usage may be unknown.
+      const res = await baseFetch(input, nextInit);
       commitProviderEmission({
         attemptId: reservation.attemptId,
         reservedSlots: reservation.reservedSlots,
         reservedInputTokens: reservation.reservedInputTokens,
         reservedOutputTokens: reservation.reservedOutputTokens,
+        hostedSearchDelta,
       });
       return res;
     } catch (e) {
@@ -867,48 +1230,70 @@ export function createFrontierAwareFetch(
 }

 /**
- * Install a process-wide Agents SDK OpenAI client whose fetch is frontier-aware.
- * Idempotent. Call before any LIVE run().
+ * Install Agents SDK OpenAI client whose fetch is frontier-aware.
+ * Reinstall when key fingerprint changes or forceReinstall is set (tests).
  */
 export async function ensureFrontierOpenAIClientInstalled(input?: {
   requireCampaign?: boolean;
-  effortHint?: string | null;
   maxRetries?: number;
-}): Promise<void> {
-  if (clientInstallPromise) return clientInstallPromise;
+  forceReinstall?: boolean;
+  /** Substituted transport for deterministic SDK tests — never for production LIVE. */
+  fetch?: typeof fetch;
+}): Promise<{ keyFingerprint: string | null }> {
+  const key = process.env.OPENAI_API_KEY?.trim() ?? "";
+  const fp = key
+    ? createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16)
+    : null;
+  if (
+    clientInstallPromise &&
+    !input?.forceReinstall &&
+    fp &&
+    installedClientKeyFp === fp &&
+    !input?.fetch
+  ) {
+    await clientInstallPromise;
+    return { keyFingerprint: installedClientKeyFp };
+  }
   clientInstallPromise = (async () => {
     const [{ setDefaultOpenAIClient }, OpenAIMod] = await Promise.all([
       import("@openai/agents"),
       import("openai"),
     ]);
     const OpenAI = OpenAIMod.default;
-    const key = process.env.OPENAI_API_KEY?.trim();
     if (!key) {
-      // No key — leave default unset; LIVE paths already fail closed.
+      installedClientKeyFp = null;
       return;
     }
+    const baseFetch =
+      input?.fetch ?? globalThis.fetch.bind(globalThis);
     const client = new OpenAI({
       apiKey: key,
-      fetch: createFrontierAwareFetch(globalThis.fetch.bind(globalThis), {
+      fetch: createFrontierAwareFetch(baseFetch, {
         requireCampaign: input?.requireCampaign === true,
-        effortHint: input?.effortHint,
       }),
-      // Retries still go through fetch and are counted as distinct HTTP attempts.
       maxRetries: input?.maxRetries ?? 2,
     });
     setDefaultOpenAIClient(client as never);
+    installedClientKeyFp = fp;
   })();
   try {
     await clientInstallPromise;
+    return { keyFingerprint: installedClientKeyFp };
   } catch (e) {
     clientInstallPromise = null;
+    installedClientKeyFp = null;
     throw e;
   }
 }

+export function getInstalledFrontierClientKeyFp(): string | null {
+  return installedClientKeyFp;
+}
+
 /** Test helper — reset install latch. */
 export function __resetFrontierOpenAIClientInstallForTests(): void {
   clientInstallPromise = null;
+  installedClientKeyFp = null;
 }

 export function canonicalPayloadFingerprint(fields: Record<string, string>): string {

```

### `projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts b/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
index 70fb7aef..bc2203ed 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
@@ -8,12 +8,17 @@ import {
   effectiveTariffRates,
   getTariffEntry,
 } from "./cognitive-resources/tariff-catalog";
+import { getHttpAttemptsSnapshot } from "./provider-emission-frontier";
 import {
   extractProviderUsageFromRunResult,
   type ProviderRequestUsageEntry,
   type ProviderUsageSnapshot,
 } from "./provider-usage";

+function httpAttemptLimitMarker(attemptId: string): string {
+  return `HTTP_ATTEMPT:${attemptId}`;
+}
+
 export type CostCoverage = "KNOWN" | "PARTIAL" | "UNKNOWN";

 export type ProviderUsageObservationStatus =
@@ -387,6 +392,8 @@ export type NoraProviderUsageHookInput = {
   providerResponseId?: string | null;
   callOrdinal?: number | null;
   errorCategory?: string | null;
+  /** FinOps limits merged before HTTP attempt correlation. */
+  correlationLimits?: string[];
 };

 /**
@@ -477,6 +484,7 @@ export async function recordNoraProviderUsageFromRunResult(
   const snapshot = extractProviderUsageFromRunResult(input.runResult);
   const baseLimits = [
     ...snapshot.limits,
+    ...(input.correlationLimits ?? []),
     ...(snapshot.provenance === "UNAVAILABLE" ? ["PROVIDER_USAGE_UNAVAILABLE"] : []),
   ];
   const forcedGranularity = input.granularity;
@@ -547,4 +555,80 @@ export async function recordNoraProviderUsageFromRunResult(
     idempotencyKey,
     limits: aggregateLimits,
   });
+}
+
+/**
+ * Nora FinOps row(s) correlated to frontier HTTP attempts in the same ALS window.
+ * Does not invent per-HTTP token splits when only the SDK aggregate is known.
+ */
+export async function recordNoraProviderUsageWithHttpCorrelation(
+  input: NoraProviderUsageHookInput,
+): Promise<RecordProviderUsageObservationResult> {
+  const httpAttempts = getHttpAttemptsSnapshot();
+  const sdkAttemptId = input.attemptId?.trim() ?? "";
+
+  if (httpAttempts.length === 0) {
+    return recordNoraProviderUsageFromRunResult(input);
+  }
+
+  if (httpAttempts.length === 1) {
+    const http = httpAttempts[0]!;
+    const correlationLimits = [httpAttemptLimitMarker(http.attemptId)];
+    if (sdkAttemptId && sdkAttemptId !== http.attemptId) {
+      correlationLimits.push(`SDK_ATTEMPT:${sdkAttemptId}`);
+    }
+    return recordNoraProviderUsageFromRunResult({
+      ...input,
+      attemptId: http.attemptId,
+      correlationLimits,
+    });
+  }
+
+  const correlationLimits = [
+    "MULTI_HTTP_ATTEMPT_AGGREGATE",
+    ...httpAttempts.map((h) => httpAttemptLimitMarker(h.attemptId)),
+  ];
+  if (sdkAttemptId) correlationLimits.push(`SDK_ATTEMPT:${sdkAttemptId}`);
+
+  const primary = await recordNoraProviderUsageFromRunResult({
+    ...input,
+    correlationLimits,
+  });
+
+  const scope = idempotencyScope(input);
+  for (let i = 0; i < httpAttempts.length; i++) {
+    const http = httpAttempts[i]!;
+    const idempotencyKey = buildIdempotencyKey({
+      ...scope,
+      granularity: "REQUEST",
+      operation: input.operation,
+      attemptId: http.attemptId,
+      generationId: input.generationId,
+      segmentIndex: input.segmentIndex,
+      providerResponseId: input.providerResponseId,
+      callOrdinal: 900 + i,
+    });
+    await recordProviderUsageObservation({
+      ...observationCommon(input),
+      attemptId: http.attemptId,
+      granularity: "REQUEST",
+      status: input.status,
+      inputTokens: null,
+      outputTokens: null,
+      totalTokens: null,
+      cachedInputTokens: null,
+      reasoningTokens: null,
+      providerRequests: 1,
+      costCoverage: "PARTIAL",
+      estimatedCostUsd: null,
+      idempotencyKey,
+      limits: [
+        "HTTP_ATTEMPT_USAGE_UNKNOWN",
+        httpAttemptLimitMarker(http.attemptId),
+        ...(sdkAttemptId ? [`SDK_ATTEMPT:${sdkAttemptId}`] : []),
+      ],
+    });
+  }
+
+  return primary;
 }
\ No newline at end of file

```

### `projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
index cbf0cf46..af939582 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/cognitive-conductor.ts
@@ -462,7 +462,12 @@ export async function runCognitiveConductor(
           ),
     });
     if (!again.ok) {
-      if (again.softStop && !restitutionPhase) {
+      const hasAcquisAfter =
+        investigation.sources.some((s) =>
+          ["CONSULTED", "VERIFIED", "PARTIAL"].includes(s.coverage),
+        ) || (investigation.conclusions?.length ?? 0) > 0;
+      // Soft-stop enters restitution only when acquis exist — otherwise suspend honestly.
+      if (again.softStop && !restitutionPhase && hasAcquisAfter) {
         restitutionPhase = true;
         resources = {
           ...resources,

```

### `projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
index 5f12ecf4..e94c35b2 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/nora-adapter.ts
@@ -28,9 +28,11 @@ import { resolveProviderSimulatedQualification } from "./provider-simulated-qual
 import { extractProviderUsageFromRunResult } from "./provider-usage";
 import {
   assertSdkInvocationAdmission,
+  attachConfiguredLiveCampaignFromEnv,
   ensureFrontierOpenAIClientInstalled,
+  runWithProviderEmissionStoreAsync,
 } from "./provider-emission-frontier";
-import { recordNoraProviderUsageFromRunResult } from "./usage-accounting";
+import { recordNoraProviderUsageWithHttpCorrelation } from "./usage-accounting";
 import {
   NoraTurnQualificationAgentSchema,
   NoraTurnQualificationLiveOutputSchema,
@@ -1274,7 +1276,7 @@ async function runLiveWithTools(

       providerUsage = extractProviderUsageFromRunResult(result);
       // E03/E04 — durable FinOps observation (idempotent; never invents zeros).
-      void recordNoraProviderUsageFromRunResult({
+      void recordNoraProviderUsageWithHttpCorrelation({
         runResult: result,
         status: "succeeded",
         operation: "nora.generate_reply",
@@ -1949,7 +1951,17 @@ export async function generateNoraReply(input: NoraGenerateInput): Promise<NoraG
   }

   try {
-    return stampCkiDelivery(await runLiveWithTools(input, generationId, policy), input.ckiDelivery, true);
+    // ALS wraps the whole LIVE path so SDK admission effort/model hints reach HTTP fetch.
+    // When SFIA_G_LIVE_API / SFIA_G_WEB_PUBLIC is set (DEV qualify), attach the process
+    // campaign envelope so multi-request LIVE stays under opposable §12 limits.
+    return stampCkiDelivery(
+      await runWithProviderEmissionStoreAsync(() => {
+        attachConfiguredLiveCampaignFromEnv();
+        return runLiveWithTools(input, generationId, policy);
+      }),
+      input.ckiDelivery,
+      true,
+    );
   } catch (e) {
     const cat = categorizeProviderError(e);
     return stampCkiDelivery({

```

### `projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
index 1bac7ea2..2726edbc 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-search-frontier.ts
@@ -13,6 +13,10 @@
  */

 import type { CognitivePolicy } from "./cognitive-policy";
+import {
+  assertDirectOpenAllowed,
+  commitDirectOpen,
+} from "./provider-emission-frontier";
 import { authorizePublicWebQuery } from "./web-search-authorize";
 import type { ToolSourceJournal } from "./tool-source-journal";
 import { recordToolSource } from "./tool-source-journal";
@@ -290,16 +294,38 @@ export async function executePublicWebSearch(input: {

   // S5 — last egress gate for exceptional D6-bound exact queries (catalog exempt).
   if (auth.provenance === "EXPLICIT_AUTHORIZED_EXACT") {
-    const projectId = (input.finops?.projectId ?? "").trim();
-    const pilotId = (input.finops?.ownerPilotId ?? "").trim();
+    const exactNorm = auth.authorizedQuery.replace(/\s+/g, " ").trim().toLowerCase();
     const catalogValues = new Set(
       Object.values(input.turnPublicTopics ?? {})
         .map((q) => q.replace(/\s+/g, " ").trim().toLowerCase())
         .filter(Boolean),
     );
-    const exactNorm = auth.authorizedQuery.replace(/\s+/g, " ").trim().toLowerCase();
     const catalogBound = catalogValues.has(exactNorm);
-    if (projectId && pilotId && !catalogBound) {
+
+    if (!catalogBound) {
+      const projectId = (input.finops?.projectId ?? "").trim();
+      const pilotId = (input.finops?.ownerPilotId ?? "").trim();
+      const policyVersion = (input.policyVersion ?? "").trim();
+
+      const denyD6 = (reasonCode: string): PublicSearchResult => ({
+        status: "DENIED",
+        coverage: "DENIED",
+        query: "",
+        items: [],
+        limits: ["WEB_QUERY_EGRESS_D6_DENIED", reasonCode, ...auth.redactions],
+        mode,
+      });
+
+      if (!projectId) {
+        return denyD6("PROJECT_REQUIRED");
+      }
+      if (!pilotId) {
+        return denyD6("PILOT_REQUIRED");
+      }
+      if (!policyVersion) {
+        return denyD6("POLICY_VERSION_REQUIRED");
+      }
+
       try {
         const { reverifyWebPublicQueryAuthorityAtEgress } = await import(
           "./web-public-query-authority"
@@ -312,22 +338,11 @@ export async function executePublicWebSearch(input: {
           query: auth.authorizedQuery,
           projectId,
           pilotId,
-          policyVersion: input.policyVersion,
+          policyVersion,
           decisionId,
         });
         if (!egressAuth.allowed) {
-          return {
-            status: "DENIED",
-            coverage: "DENIED",
-            query: "",
-            items: [],
-            limits: [
-              "WEB_QUERY_EGRESS_D6_DENIED",
-              egressAuth.reasonCode,
-              ...auth.redactions,
-            ],
-            mode,
-          };
+          return denyD6(egressAuth.reasonCode);
         }
       } catch {
         return {
@@ -335,7 +350,7 @@ export async function executePublicWebSearch(input: {
           coverage: "DENIED",
           query: "",
           items: [],
-          limits: ["WEB_QUERY_EGRESS_AUTHORITY_LOOKUP_FAILED"],
+          limits: ["WEB_QUERY_EGRESS_AUTHORITY_LOOKUP_FAILED", ...auth.redactions],
           mode,
         };
       }
@@ -385,7 +400,14 @@ export async function executePublicWebSearch(input: {
   // LIVE — isolated public search: ONLY the authorized public query leaves this frontier.
   // Never attach private D3/D4/Git context. Hosted webSearchTool stays off the main Nora agent.
   try {
-    const live = await executeIsolatedLiveWebSearch(auth.authorizedQuery, input.finops);
+    const {
+      runWithProviderEmissionStoreAsync,
+      attachConfiguredLiveCampaignFromEnv,
+    } = await import("./provider-emission-frontier");
+    const live = await runWithProviderEmissionStoreAsync(() => {
+      attachConfiguredLiveCampaignFromEnv();
+      return executeIsolatedLiveWebSearch(auth.authorizedQuery, input.finops);
+    });
     return {
       status: live.status,
       coverage: live.items.length ? "DISCOVERED" : "UNKNOWN",
@@ -605,10 +627,10 @@ async function executeIsolatedLiveWebSearch(
   // FinOps — attribute isolated worker consumption; surface persistence failure.
   let finopsPersisted = false;
   try {
-    const { recordNoraProviderUsageFromRunResult } = await import(
+    const { recordNoraProviderUsageWithHttpCorrelation } = await import(
       "./usage-accounting"
     );
-    await recordNoraProviderUsageFromRunResult({
+    await recordNoraProviderUsageWithHttpCorrelation({
       runResult: result,
       status: "succeeded",
       operation: "public_web.isolated_search",
@@ -906,6 +928,21 @@ export async function executePublicWebOpenPage(input: {
       };
     }
   }
+  const directOpenGuard = assertDirectOpenAllowed();
+  if (!directOpenGuard.ok) {
+    return {
+      status: "DENIED",
+      coverage: "DENIED",
+      url: "",
+      excerpt: "",
+      limits: [
+        "CAMPAIGN_DIRECT_OPEN_REFUSED",
+        directOpenGuard.reasonCode,
+        directOpenGuard.reason.slice(0, 120),
+      ],
+      mode,
+    };
+  }
   // C20: journal outbound only after authorization — never before.
   outboundLog.push({
     at: new Date().toISOString(),
@@ -971,6 +1008,7 @@ export async function executePublicWebOpenPage(input: {
         excerpt: initialPages.map((p) => `[p${p.pageNumber}] ${p.text}`).join("\n"),
         limits,
       });
+      commitDirectOpen();
       return {
         status: "AVAILABLE",
         coverage: "PARTIAL",
@@ -1016,6 +1054,7 @@ export async function executePublicWebOpenPage(input: {
       excerpt: excerpt.slice(0, 800),
       limits,
     });
+    commitDirectOpen();
     return {
       status: "AVAILABLE",
       coverage: "PAGE_OPENED",
@@ -1203,6 +1242,7 @@ export async function executePublicWebOpenPage(input: {
           excerpt,
           limits: session.limits,
         });
+        commitDirectOpen();
         return {
           status: "AVAILABLE",
           coverage: "PARTIAL",
@@ -1275,6 +1315,7 @@ export async function executePublicWebOpenPage(input: {
         excerpt: text.slice(0, 8_000),
         limits: session.limits,
       });
+      commitDirectOpen();
       return {
         status: "AVAILABLE",
         coverage: bounded.truncated ? "PARTIAL" : "PAGE_OPENED",

```

### `projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts b/projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts
index 0d2d3cc8..d7e163d1 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/public-web-page-session.ts
@@ -215,11 +215,15 @@ export function putWebPageSession(input: {
         ? existing.pdfBytes
         : undefined);

+  const pagesForSession = fingerprintChanged
+    ? input.pages
+    : (input.pages ?? existing?.pages);
+
   // Enforce memory limits also when enriching an existing session.
   const nextFootprint =
     (retainedPdf?.byteLength ?? 0) +
     Buffer.byteLength(input.text, "utf8") +
-    (input.pages ?? []).reduce((n, p) => n + Buffer.byteLength(p.text, "utf8"), 0);
+    (pagesForSession ?? []).reduce((n, p) => n + Buffer.byteLength(p.text, "utf8"), 0);
   if (existing) {
     // Temporarily remove existing from accounting for eviction sizing.
     sessions.delete(k);
@@ -240,9 +244,7 @@ export function putWebPageSession(input: {
     url: input.url,
     kind: input.kind,
     text: input.text,
-    pages: fingerprintChanged
-      ? input.pages
-      : (input.pages ?? existing?.pages),
+    pages: pagesForSession,
     pageCount: fingerprintChanged
       ? input.pageCount
       : (input.pageCount ?? existing?.pageCount),

```

### `projects/sfia-studio-next/web/src/domains/documents/pdf-viewer-authorization.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/domains/documents/pdf-viewer-authorization.ts b/projects/sfia-studio-next/web/src/domains/documents/pdf-viewer-authorization.ts
index e4267b9c..fc7fce98 100644
--- a/projects/sfia-studio-next/web/src/domains/documents/pdf-viewer-authorization.ts
+++ b/projects/sfia-studio-next/web/src/domains/documents/pdf-viewer-authorization.ts
@@ -166,7 +166,15 @@ export function assessPdfViewerAccess(input: {
       limits: [TOKEN_NOT_AUTH],
     };
   }
-  if (hab.workProjectId && hab.workProjectId !== projectId) {
+  if (!hab.workProjectId) {
+    return {
+      ok: false,
+      status: 403,
+      error: "VIEWER_WORK_PROJECT_REQUIRED",
+      limits: [TOKEN_NOT_AUTH, "WORK_PROJECT_BINDING"],
+    };
+  }
+  if (hab.workProjectId !== projectId) {
     return {
       ok: false,
       status: 403,

```

## 8. Test diffs
```diff
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-c14-semantic-routing.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-c14-semantic-routing.test.ts
index ba148505..3a0d961e 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-c14-semantic-routing.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-c14-semantic-routing.test.ts
@@ -125,6 +125,7 @@ describe("ML5 C14 semantic routing (no lexical decision)", () => {
     const r = await executePublicWebSearch({
       explicitlyAuthorizedExactQuery: exact,
       turnAuthorizedExactQueries: [exact],
+      turnPublicTopics: { typescript_handbook: exact },
       privateContextMarkers: markers,
       env: {
         SFIA_WEB_SEARCH_ENABLED: "1",
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-c19-invariants.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-c19-invariants.test.ts
index e76da4ef..210a1300 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-c19-invariants.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-c19-invariants.test.ts
@@ -40,6 +40,7 @@ describe("C19 I3 WEB sanitize / egress confidentiality", () => {
       const r = await executePublicWebSearch({
         explicitlyAuthorizedExactQuery: exact,
         turnAuthorizedExactQueries: [exact],
+        turnPublicTopics: { markdown_spec: exact },
         privateContextMarkers: ["proj_should_not_appear_zzzzzzzz"],
       });
       expect(r.status).toBe("AVAILABLE");
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-c2-c4-restitution-conductor.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-c2-c4-restitution-conductor.test.ts
new file mode 100644
index 00000000..43034757
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-c2-c4-restitution-conductor.test.ts
@@ -0,0 +1,225 @@
+/**
+ * C2/C4 — soft-stop with acquis enters RESTITUTION_PHASE (reserve ~24k) instead of
+ * discarding restitution headroom; without acquis, soft-stop suspends.
+ */
+import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
+import { evaluateGlobalResourceEnvelope } from "@/domains/conversation/cognitive-work";
+import { buildResourceContinuitySuspendMessage } from "@/domains/conversation/cognitive-policy";
+import {
+  createEmptyInvestigation,
+  evaluateContractReadiness,
+} from "@/domains/conversation/investigation-state";
+
+const openOrResumeCognitiveWork = vi.fn();
+const heartbeatCognitiveWork = vi.fn();
+const checkpointCognitiveWork = vi.fn();
+const releaseCognitiveWorkLease = vi.fn();
+
+vi.mock("@/domains/conversation/cognitive-work", async (importOriginal) => {
+  const actual = await importOriginal<typeof import("@/domains/conversation/cognitive-work")>();
+  return {
+    ...actual,
+    openOrResumeCognitiveWork: (...args: unknown[]) => openOrResumeCognitiveWork(...args),
+    heartbeatCognitiveWork: (...args: unknown[]) => heartbeatCognitiveWork(...args),
+    checkpointCognitiveWork: (...args: unknown[]) => checkpointCognitiveWork(...args),
+    releaseCognitiveWorkLease: (...args: unknown[]) => releaseCognitiveWorkLease(...args),
+  };
+});
+
+const ENVELOPE_ENV = {
+  SFIA_COGNITIVE_MAX_TOKENS: "100000",
+  SFIA_COGNITIVE_REEVAL_TOKENS: "500000",
+  SFIA_COGNITIVE_MAX_SEGMENTS: "120",
+} as const;
+
+const NEAR_LIMIT_INVESTIGATION_TOKENS = { inputTokens: 76_000, outputTokens: 0 };
+
+function investigationWithAcquis() {
+  return evaluateContractReadiness({
+    ...createEmptyInvestigation("synthèse métier"),
+    desiredOutcome: "livrable argumenté",
+    sources: [{ kind: "D4", ref: "spec-tva", coverage: "CONSULTED" }],
+    conclusions: ["TVA export 0% — base documentée spec-tva"],
+    remainingWork: ["Approfondir périmètre export"],
+  });
+}
+
+describe("ML5 C2/C4 — restitution phase conductor", () => {
+  const prevMaxTokens = process.env.SFIA_COGNITIVE_MAX_TOKENS;
+  const prevReeval = process.env.SFIA_COGNITIVE_REEVAL_TOKENS;
+  const prevSeg = process.env.SFIA_COGNITIVE_MAX_SEGMENTS;
+
+  beforeEach(() => {
+    vi.clearAllMocks();
+    process.env.SFIA_COGNITIVE_MAX_TOKENS = ENVELOPE_ENV.SFIA_COGNITIVE_MAX_TOKENS;
+    process.env.SFIA_COGNITIVE_REEVAL_TOKENS = ENVELOPE_ENV.SFIA_COGNITIVE_REEVAL_TOKENS;
+    process.env.SFIA_COGNITIVE_MAX_SEGMENTS = ENVELOPE_ENV.SFIA_COGNITIVE_MAX_SEGMENTS;
+
+    let revision = 1;
+    const baseWork = {
+      id: "cgw_restitution",
+      ownerPilotId: "pilot",
+      preparationId: "prep",
+      projectId: null as string | null,
+      conversationId: null as string | null,
+      status: "RUNNING" as const,
+      revision: 1,
+      ownerToken: "tok",
+      leaseUntil: new Date(Date.now() + 60_000),
+      objective: "synthèse métier",
+      expectedOutcome: "livrable",
+      state: investigationWithAcquis(),
+      resources: { segmentCalls: 0, limits: [] as string[] },
+      production: { kind: "NONE" as const, status: "IDLE" as const, parts: [] },
+      interruptCause: null as string | null,
+    };
+    openOrResumeCognitiveWork.mockImplementation(async () => ({
+      work: { ...baseWork, revision },
+      resumed: false,
+      ownerToken: "tok",
+    }));
+    heartbeatCognitiveWork.mockResolvedValue(true);
+    checkpointCognitiveWork.mockImplementation(
+      async (input: {
+        expectedRevision: number;
+        state: unknown;
+        resources: unknown;
+        production: unknown;
+        status?: string;
+      }) => {
+        revision = input.expectedRevision + 1;
+        return {
+          ...baseWork,
+          revision,
+          status: input.status ?? "RUNNING",
+          state: input.state,
+          resources: input.resources,
+          production: input.production,
+        };
+      },
+    );
+    releaseCognitiveWorkLease.mockResolvedValue(undefined);
+  });
+
+  afterEach(() => {
+    if (prevMaxTokens === undefined) delete process.env.SFIA_COGNITIVE_MAX_TOKENS;
+    else process.env.SFIA_COGNITIVE_MAX_TOKENS = prevMaxTokens;
+    if (prevReeval === undefined) delete process.env.SFIA_COGNITIVE_REEVAL_TOKENS;
+    else process.env.SFIA_COGNITIVE_REEVAL_TOKENS = prevReeval;
+    if (prevSeg === undefined) delete process.env.SFIA_COGNITIVE_MAX_SEGMENTS;
+    else process.env.SFIA_COGNITIVE_MAX_SEGMENTS = prevSeg;
+  });
+
+  it("envelope: reserve 24k soft-stops investigation projection but restitution segment stays admissible", () => {
+    const base = {
+      segmentCalls: 2,
+      webCalls: 0,
+      durationMs: 1,
+      limits: [] as string[],
+      ...NEAR_LIMIT_INVESTIGATION_TOKENS,
+    };
+    const investigationNext = evaluateGlobalResourceEnvelope(base, ENVELOPE_ENV, {
+      reserveForRestitution: 24_000,
+      projectedNextSegmentTokens: 30_000,
+    });
+    expect(investigationNext.ok).toBe(false);
+    expect(investigationNext.softStop).toBe(true);
+
+    const restitutionNext = evaluateGlobalResourceEnvelope(
+      { ...base, limits: ["RESTITUTION_PHASE"] },
+      ENVELOPE_ENV,
+      { reserveForRestitution: 0, projectedNextSegmentTokens: 12_000 },
+    );
+    expect(restitutionNext.ok).toBe(true);
+  });
+
+  it("after investigation soft-stop with acquis, conductor enters RESTITUTION_PHASE and runs restitution", async () => {
+    const { runCognitiveConductor } = await import(
+      "@/domains/conversation/cognitive-conductor"
+    );
+
+    const result = await runCognitiveConductor({
+      pilotId: "pilot",
+      preparationId: "prep",
+      objective: "synthèse métier",
+      maxSegmentsThisInvocation: 4,
+      runSegment: async ({ segmentIndex }) => {
+        const investigation =
+          segmentIndex === 0
+            ? investigationWithAcquis()
+            : evaluateContractReadiness({
+                ...investigationWithAcquis(),
+                remainingWork: [
+                  "Restitution — produire la synthèse finale avec références et limites explicites",
+                ],
+              });
+        return {
+          replyText: segmentIndex === 0 ? "investigation" : "synthèse finale",
+          qualification: null,
+          investigation,
+          continueWork: segmentIndex === 0,
+          resourcesDelta:
+            segmentIndex === 0
+              ? { ...NEAR_LIMIT_INVESTIGATION_TOKENS, segmentCalls: 1 }
+              : { inputTokens: 8_000, outputTokens: 4_000, segmentCalls: 1 },
+        };
+      },
+    });
+
+    expect(result.segmentsRun).toBeGreaterThanOrEqual(2);
+    expect(result.work.resources.limits ?? []).toContain("RESTITUTION_PHASE");
+    expect(result.suspended).toBe(false);
+    expect(result.replyText).toBe("synthèse finale");
+  });
+
+  it("soft-stop without acquis suspends without RESTITUTION_PHASE", async () => {
+    openOrResumeCognitiveWork.mockImplementation(async () => ({
+      work: {
+        id: "cgw_no_acquis",
+        ownerPilotId: "pilot",
+        preparationId: "prep",
+        projectId: null,
+        conversationId: null,
+        status: "RUNNING" as const,
+        revision: 2,
+        ownerToken: "tok",
+        leaseUntil: new Date(Date.now() + 60_000),
+        objective: "vide",
+        expectedOutcome: null,
+        state: createEmptyInvestigation("vide"),
+        resources: { segmentCalls: 0, limits: [] as string[] },
+        production: { kind: "NONE" as const, status: "IDLE" as const, parts: [] },
+        interruptCause: null,
+      },
+      resumed: true,
+      ownerToken: "tok",
+    }));
+
+    const { runCognitiveConductor } = await import(
+      "@/domains/conversation/cognitive-conductor"
+    );
+    const result = await runCognitiveConductor({
+      pilotId: "pilot",
+      preparationId: "prep",
+      objective: "vide",
+      workId: "cgw_no_acquis",
+      maxSegmentsThisInvocation: 3,
+      runSegment: async () => ({
+        replyText: "pas d'acquis",
+        qualification: null,
+        investigation: createEmptyInvestigation("vide"),
+        continueWork: true,
+        resourcesDelta: { ...NEAR_LIMIT_INVESTIGATION_TOKENS, segmentCalls: 1 },
+      }),
+    });
+
+    expect(result.segmentsRun).toBeGreaterThanOrEqual(1);
+    expect(result.suspended).toBe(true);
+    expect(result.work.resources.limits ?? []).not.toContain("RESTITUTION_PHASE");
+  });
+
+  it("Pilote suspend message still states sans obligation d'administrer les modèles", () => {
+    const msg = buildResourceContinuitySuspendMessage("gpt-6-luna", "high");
+    expect(msg).toContain("sans obligation d'administrer les modèles");
+  });
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-http-attempt-finops-correlation.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-http-attempt-finops-correlation.test.ts
new file mode 100644
index 00000000..11324a4e
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-http-attempt-finops-correlation.test.ts
@@ -0,0 +1,181 @@
+import { createHash } from "node:crypto";
+import { afterEach, describe, expect, it, vi } from "vitest";
+import {
+  beginCampaignEnvelope,
+  commitProviderEmission,
+  getHttpAttemptsSnapshot,
+  reserveHttpEmission,
+  runWithProviderEmissionStore,
+  __resetProviderEmissionFrontierForTests,
+} from "@/domains/conversation/provider-emission-frontier";
+
+const TEST_KEY = "sk-[REDACTED]";
+const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);
+
+const insertCalls: Array<{ attemptId?: string | null; limits?: string[]; granularity?: string }> =
+  [];
+
+vi.mock("@/db/client", () => ({
+  db: {
+    insert: () => ({
+      values: (row: {
+        attemptId?: string | null;
+        limitsJson?: string[];
+        granularity?: string;
+      }) => {
+        insertCalls.push({
+          attemptId: row.attemptId,
+          limits: row.limitsJson,
+          granularity: row.granularity,
+        });
+        return {
+          onConflictDoNothing: () => ({
+            returning: () => Promise.resolve([{ id: `obs-${insertCalls.length}` }]),
+          }),
+        };
+      },
+    }),
+  },
+}));
+
+describe("ML5 Contract D — HTTP attempt FinOps correlation", () => {
+  afterEach(() => {
+    __resetProviderEmissionFrontierForTests();
+    insertCalls.length = 0;
+    vi.clearAllMocks();
+  });
+
+  it("exports committed/uncertain HTTP attempts without prompt bodies", () => {
+    runWithProviderEmissionStore(() => {
+      beginCampaignEnvelope({ campaignId: "c1", maxHttpAttempts: 3, required: true });
+      const a = reserveHttpEmission({
+        url: "https://api.openai.com/v1/responses",
+        body: JSON.stringify({
+          model: "gpt-6.1-terra",
+          max_output_tokens: 10,
+          reasoning: { effort: "medium" },
+          sfia_estimated_input_tokens: 50,
+        }),
+        effort: "medium",
+        env: {
+          STUDIO_LANE: "DEV",
+          OPENAI_API_KEY: TEST_KEY,
+          SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
+        } as NodeJS.ProcessEnv,
+      });
+      expect(a.ok).toBe(true);
+      if (!a.ok) throw new Error("reserve");
+      expect(getHttpAttemptsSnapshot()).toHaveLength(0);
+      commitProviderEmission(a);
+      const snap = getHttpAttemptsSnapshot();
+      expect(snap).toHaveLength(1);
+      expect(snap[0]).toEqual({
+        attemptId: a.attemptId,
+        state: "COMMITTED",
+        campaignId: "c1",
+        modelHint: "gpt-6.1-terra",
+        urlHost: "api.openai.com",
+      });
+      expect(Object.keys(snap[0]!)).not.toContain("reservedInputTokens");
+    });
+  });
+
+  it("single HTTP attempt aligns FinOps attemptId and markers", async () => {
+    const { createHash } = await import("node:crypto");
+    const key = "sk-[REDACTED]";
+    const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
+  const env = {
+      STUDIO_LANE: "DEV",
+      OPENAI_API_KEY: key,
+      SFIA_OPENAI_EXPECTED_KEY_FP: fp,
+    } as NodeJS.ProcessEnv;
+
+    const { runWithProviderEmissionStoreAsync } = await import(
+      "@/domains/conversation/provider-emission-frontier"
+    );
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({ maxHttpAttempts: 2, required: true });
+      const http = reserveHttpEmission({
+        url: "https://api.openai.com/v1/responses",
+        body: JSON.stringify({
+          model: "gpt-6.1-terra",
+          max_output_tokens: 20,
+          reasoning: { effort: "medium" },
+          sfia_estimated_input_tokens: 100,
+        }),
+        effort: "medium",
+        env,
+      });
+      expect(http.ok).toBe(true);
+      if (!http.ok) throw new Error("http");
+      commitProviderEmission(http);
+
+      const { recordNoraProviderUsageWithHttpCorrelation } = await import(
+        "@/domains/conversation/usage-accounting"
+      );
+      await recordNoraProviderUsageWithHttpCorrelation({
+        runResult: {
+          usage: { inputTokens: 10, outputTokens: 5, totalTokens: 15 },
+        },
+        status: "succeeded",
+        operation: "nora.generate_reply",
+        attemptId: "sdk_att_only",
+        generationId: "gen-single",
+        modelRequested: "gpt-6.1-terra",
+      });
+      expect(insertCalls.some((c) => c.attemptId === http.attemptId)).toBe(true);
+      expect(insertCalls[0]?.limits).toContain(`HTTP_ATTEMPT:${http.attemptId}`);
+      expect(insertCalls[0]?.limits).toContain("SDK_ATTEMPT:sdk_att_only");
+    });
+  });
+
+  it("multiple HTTP attempts add per-attempt PARTIAL rows without invented tokens", async () => {
+    const { createHash } = await import("node:crypto");
+    const key = "sk-[REDACTED]";
+    const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
+    const env = {
+      STUDIO_LANE: "DEV",
+      OPENAI_API_KEY: key,
+      SFIA_OPENAI_EXPECTED_KEY_FP: fp,
+    } as NodeJS.ProcessEnv;
+    const body = JSON.stringify({
+      model: "gpt-6.1-terra",
+      max_output_tokens: 20,
+      reasoning: { effort: "medium" },
+      sfia_estimated_input_tokens: 100,
+    });
+
+    const { runWithProviderEmissionStoreAsync } = await import(
+      "@/domains/conversation/provider-emission-frontier"
+    );
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({ maxHttpAttempts: 3, required: true });
+      const h1 = reserveHttpEmission({ url: "https://api.openai.com/v1/responses", body, effort: "medium", env });
+      const h2 = reserveHttpEmission({ url: "https://api.openai.com/v1/responses", body, effort: "medium", env });
+      if (!h1.ok || !h2.ok) throw new Error("reserve");
+      commitProviderEmission(h1);
+      commitProviderEmission(h2);
+
+      const { recordNoraProviderUsageWithHttpCorrelation } = await import(
+        "@/domains/conversation/usage-accounting"
+      );
+      await recordNoraProviderUsageWithHttpCorrelation({
+        runResult: { usage: { inputTokens: 50, outputTokens: 20, totalTokens: 70 } },
+        status: "succeeded",
+        operation: "nora.generate_reply",
+        attemptId: "sdk_multi",
+        generationId: "gen-multi",
+        modelRequested: "gpt-6.1-terra",
+      });
+      expect(insertCalls.length).toBe(3);
+      expect(insertCalls[0]?.limits).toContain("MULTI_HTTP_ATTEMPT_AGGREGATE");
+      const partialRows = insertCalls.filter(
+        (c) => c.granularity === "REQUEST" && c.attemptId !== "sdk_multi",
+      );
+      expect(partialRows.length).toBe(2);
+      expect(partialRows.every((r) => r.limits?.includes("HTTP_ATTEMPT_USAGE_UNKNOWN"))).toBe(
+        true,
+      );
+    });
+  });
+});
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-pdf-viewer-authorization.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-pdf-viewer-authorization.test.ts
index 3c03b094..65ed5b9d 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-pdf-viewer-authorization.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-pdf-viewer-authorization.test.ts
@@ -185,7 +185,28 @@ describe("ML5 pdf-viewer authorization (assess)", () => {
       },
     });
     expect(r.ok).toBe(false);
-    if (!r.ok) expect(r.error).toBe("VIEWER_WORK_PROJECT_MISMATCH");
+    if (!r.ok) {
+      expect(r.error).toBe("VIEWER_WORK_PROJECT_MISMATCH");
+      expect(r.limits).toContain("WORK_PROJECT_BINDING");
+    }
+  });
+
+  it("refuses project-scoped session when work has no project binding", () => {
+    const page = seedPdfSession();
+    const r = assessPdfViewerAccess({
+      session: { pilotId: SCOPE.ownerPilotId, sessionId: "sess-1" },
+      page,
+      processLane: "DEV",
+      habilitation: {
+        ...HAB,
+        workProjectId: null,
+      },
+    });
+    expect(r.ok).toBe(false);
+    if (!r.ok) {
+      expect(r.error).toBe("VIEWER_WORK_PROJECT_REQUIRED");
+      expect(r.limits).toContain("WORK_PROJECT_BINDING");
+    }
   });

   it("refuses missing project scope (no opposable contract)", () => {
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
index 153f4525..5cd5cf61 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
@@ -1,10 +1,14 @@
 import { createHash } from "node:crypto";
 import { afterEach, describe, expect, it } from "vitest";
 import {
+  assertSdkInvocationAdmission,
   beginCampaignEnvelope,
   campaignHttpSlotsRemaining,
+  assertDirectOpenAllowed,
+  commitDirectOpen,
   commitProviderEmission,
   createFrontierAwareFetch,
+  enableHttpMetaCaptureForTests,
   getActiveCampaignEnvelope,
   getEmissionsObservedForTests,
   getHttpAttempt,
@@ -27,7 +31,21 @@ const laneEnv = {
   SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
 } as unknown as NodeJS.ProcessEnv;

-describe("S2 — HTTP provider emission frontier", () => {
+function withLaneEnv(fn: () => void | Promise<void>) {
+  const prev: Record<string, string | undefined> = {};
+  for (const k of Object.keys(laneEnv)) {
+    prev[k] = process.env[k];
+    process.env[k] = laneEnv[k as keyof typeof laneEnv] as string;
+  }
+  return Promise.resolve(fn()).finally(() => {
+    for (const k of Object.keys(laneEnv)) {
+      if (prev[k] === undefined) delete process.env[k];
+      else process.env[k] = prev[k]!;
+    }
+  });
+}
+
+describe("S2/A — HTTP provider emission frontier", () => {
   afterEach(() => {
     __resetProviderEmissionFrontierForTests();
     __resetFrontierOpenAIClientInstallForTests();
@@ -36,107 +54,165 @@ describe("S2 — HTTP provider emission frontier", () => {
   it("refuses N+1 HTTP emission when campaign max is N (oracle = substituted fetch)", async () => {
     await runWithProviderEmissionStoreAsync(async () => {
       beginCampaignEnvelope({ campaignId: "camp-http", maxHttpAttempts: 2, required: true });
+      enableHttpMetaCaptureForTests();
       const calls: string[] = [];
       const fakeFetch = (async (input: RequestInfo | URL) => {
-        const url = String(input);
-        calls.push(url);
+        calls.push(String(input));
         return new Response(JSON.stringify({ id: "resp", output: [] }), {
           status: 200,
           headers: { "content-type": "application/json" },
         });
       }) as typeof fetch;
       const gated = createFrontierAwareFetch(fakeFetch);
-
-      // Inject lane env for reserve path via process — temporarily.
-      const prev = { ...process.env };
-      Object.assign(process.env, laneEnv);
-      try {
-        const body = JSON.stringify({
-          model: "gpt-6.1-terra",
-          max_output_tokens: 100,
-          reasoning: { effort: "medium" },
-        });
-        // Seed effort via SDK admission path equivalent
-        const { assertSdkInvocationAdmission } = await import(
-          "@/domains/conversation/provider-emission-frontier"
-        );
+      await withLaneEnv(async () => {
         assertSdkInvocationAdmission({
           kind: "nora.generate_reply",
           modelId: "gpt-6.1-terra",
           effort: "medium",
           env: process.env,
         });
+        const body = JSON.stringify({
+          model: "gpt-6.1-terra",
+          max_output_tokens: 100,
+          reasoning: { effort: "medium" },
+          sfia_estimated_input_tokens: 1000,
+        });
         await gated("https://api.openai.com/v1/responses", { method: "POST", body });
         await gated("https://api.openai.com/v1/responses", { method: "POST", body });
         await expect(
           gated("https://api.openai.com/v1/responses", { method: "POST", body }),
         ).rejects.toBeInstanceOf(ProviderEmissionRefusedError);
-      } finally {
-        for (const k of Object.keys(laneEnv)) {
-          if (prev[k] === undefined) delete process.env[k];
-          else process.env[k] = prev[k]!;
-        }
-      }
-
+      });
       expect(calls).toHaveLength(2);
       expect(getEmissionsObservedForTests()).toBe(2);
       expect(campaignHttpSlotsRemaining()).toBe(0);
       expect(getHttpBodiesObservedForTests()).toHaveLength(2);
+      expect(getHttpBodiesObservedForTests()[0]?.model).toBe("gpt-6.1-terra");
+    });
+  });
+
+  it("propagates SDK effort hint across ALS to HTTP (no ephemeral store loss)", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
+      await withLaneEnv(async () => {
+        assertSdkInvocationAdmission({
+          kind: "nora.generate_reply",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+        // Body without effort — must reuse ALS hint
+        const r = reserveHttpEmission({
+          url: "https://api.openai.com/v1/responses",
+          body: JSON.stringify({
+            model: "gpt-6.1-terra",
+            max_output_tokens: 50,
+            sfia_estimated_input_tokens: 500,
+          }),
+        });
+        expect(r.ok).toBe(true);
+      });
     });
   });

-  it("counts SDK retries as distinct HTTP attempts through fetch", async () => {
+  it("refuses payload effort that differs from admitted when not itself admitted", async () => {
     await runWithProviderEmissionStoreAsync(async () => {
       beginCampaignEnvelope({ maxHttpAttempts: 2, required: true });
-      let n = 0;
-      const fakeFetch = (async () => {
-        n += 1;
-        if (n === 1) {
-          return new Response("temporary", { status: 500 });
-        }
-        return new Response(JSON.stringify({ ok: true }), { status: 200 });
-      }) as typeof fetch;
-      const gated = createFrontierAwareFetch(fakeFetch);
-      const prev = { ...process.env };
-      Object.assign(process.env, laneEnv);
-      try {
-        const { assertSdkInvocationAdmission } = await import(
-          "@/domains/conversation/provider-emission-frontier"
-        );
+      await withLaneEnv(async () => {
+        assertSdkInvocationAdmission({
+          kind: "nora.generate_reply",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+        const r = reserveHttpEmission({
+          url: "https://api.openai.com/v1/responses",
+          body: JSON.stringify({
+            model: "gpt-6.1-terra",
+            max_output_tokens: 50,
+            reasoning: { effort: "xhigh" },
+            sfia_estimated_input_tokens: 500,
+          }),
+        });
+        expect(r.ok).toBe(false);
+        if (r.ok) throw new Error("r");
+        expect(r.reasonCode).toBe("MODEL_EFFORT_NOT_ADMITTED");
+      });
+    });
+  });
+
+  it("refuses campaign emission when output is unbounded without per-request ceiling", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({
+        maxHttpAttempts: 5,
+        maxOutputTokens: 50_000,
+        // no maxOutputTokensPerRequest → cannot reserve without payload bound
+        required: true,
+      });
+      await withLaneEnv(async () => {
         assertSdkInvocationAdmission({
           kind: "campaign.probe",
           modelId: "gpt-6.1-terra",
           effort: "medium",
           env: process.env,
         });
-        const body = JSON.stringify({
-          model: "gpt-6.1-terra",
-          max_output_tokens: 50,
+        const r = reserveHttpEmission({
+          url: "https://api.openai.com/v1/responses",
+          body: JSON.stringify({
+            model: "gpt-6.1-terra",
+            reasoning: { effort: "medium" },
+            sfia_estimated_input_tokens: 100,
+          }),
+          effort: "medium",
         });
-        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
-        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
-        await expect(
-          gated("https://api.openai.com/v1/responses", { method: "POST", body }),
-        ).rejects.toBeInstanceOf(ProviderEmissionRefusedError);
-      } finally {
-        for (const k of Object.keys(laneEnv)) {
-          if (prev[k] === undefined) delete process.env[k];
-          else process.env[k] = prev[k]!;
-        }
-      }
-      expect(getEmissionsObservedForTests()).toBe(2);
+        expect(r.ok).toBe(false);
+        if (r.ok) throw new Error("r");
+        expect(r.reason).toContain("OUTPUT_UNBOUNDED");
+      });
     });
   });

-  it("releases unused reservation so a later attempt can proceed", () => {
-    runWithProviderEmissionStore(() => {
+  it("reserves using campaign per-request output ceiling when payload omits max_output_tokens", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({
+        maxHttpAttempts: 5,
+        maxOutputTokensPerRequest: 1000,
+        required: true,
+      });
+      await withLaneEnv(async () => {
+        assertSdkInvocationAdmission({
+          kind: "campaign.probe",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+        const r = reserveHttpEmission({
+          url: "https://api.openai.com/v1/responses",
+          body: JSON.stringify({
+            model: "gpt-6.1-terra",
+            reasoning: { effort: "medium" },
+            sfia_estimated_input_tokens: 100,
+          }),
+          effort: "medium",
+        });
+        expect(r.ok).toBe(true);
+        if (!r.ok) throw new Error("r");
+        expect(r.reservedOutputTokens).toBe(1000);
+      });
+    });
+  });
+
+  it("releases unused reservation so a later attempt can proceed", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
       beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
-      const prev = { ...process.env };
-      Object.assign(process.env, laneEnv);
-      try {
+      await withLaneEnv(() => {
         const a = reserveHttpEmission({
           url: "https://api.openai.com/v1/responses",
-          body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
+          body: JSON.stringify({
+            model: "gpt-6.1-terra",
+            max_output_tokens: 10,
+            sfia_estimated_input_tokens: 100,
+          }),
           effort: "medium",
         });
         expect(a.ok).toBe(true);
@@ -146,47 +222,42 @@ describe("S2 — HTTP provider emission frontier", () => {
         expect(campaignHttpSlotsRemaining()).toBe(1);
         const b = reserveHttpEmission({
           url: "https://api.openai.com/v1/responses",
-          body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
+          body: JSON.stringify({
+            model: "gpt-6.1-terra",
+            max_output_tokens: 10,
+            sfia_estimated_input_tokens: 100,
+          }),
           effort: "medium",
         });
         expect(b.ok).toBe(true);
         if (!b.ok) throw new Error("b");
         commitProviderEmission(b);
         expect(getEmissionsObservedForTests()).toBe(1);
-        // Cannot release after commit
         releaseProviderEmission({ ...b, contacted: false });
         expect(getHttpAttempt(b.attemptId)?.state).toBe("COMMITTED");
-      } finally {
-        for (const k of Object.keys(laneEnv)) {
-          if (prev[k] === undefined) delete process.env[k];
-          else process.env[k] = prev[k]!;
-        }
-      }
+      });
     });
   });

-  it("blocks after suspend even if slots remain", () => {
-    runWithProviderEmissionStore(() => {
+  it("blocks after suspend even if slots remain", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
       beginCampaignEnvelope({ maxHttpAttempts: 5, required: true });
       suspendCampaignEnvelope("TEST_SUSPEND");
-      const prev = { ...process.env };
-      Object.assign(process.env, laneEnv);
-      try {
+      await withLaneEnv(() => {
         const r = reserveHttpEmission({
           url: "https://api.openai.com/v1/responses",
-          body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
+          body: JSON.stringify({
+            model: "gpt-6.1-terra",
+            max_output_tokens: 10,
+            sfia_estimated_input_tokens: 100,
+          }),
           effort: "medium",
         });
         expect(r.ok).toBe(false);
         if (r.ok) throw new Error("r");
         expect(r.reasonCode).toBe("CAMPAIGN_SUSPENDED");
         expect(getActiveCampaignEnvelope()?.suspendReason).toBe("TEST_SUSPEND");
-      } finally {
-        for (const k of Object.keys(laneEnv)) {
-          if (prev[k] === undefined) delete process.env[k];
-          else process.env[k] = prev[k]!;
-        }
-      }
+      });
     });
   });

@@ -194,7 +265,7 @@ describe("S2 — HTTP provider emission frontier", () => {
     runWithProviderEmissionStore(() => {
       const r = reserveHttpEmission({
         url: "https://api.openai.com/v1/responses",
-        body: JSON.stringify({ model: "gpt-6.1-terra" }),
+        body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
         effort: "medium",
         env: { STUDIO_LANE: "DEV" } as unknown as NodeJS.ProcessEnv,
       });
@@ -208,25 +279,17 @@ describe("S2 — HTTP provider emission frontier", () => {
     runWithProviderEmissionStore(() => {
       beginCampaignEnvelope({ campaignId: "camp-latch", maxHttpAttempts: 3, required: true });
     });
-    // Outside ALS — latch still active from required campaign
-    const prev = { ...process.env };
-    Object.assign(process.env, laneEnv);
-    try {
-      const r = reserveHttpEmission({
-        url: "https://api.openai.com/v1/responses",
-        body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
-        effort: "medium",
-      });
-      expect(r.ok).toBe(false);
-      if (r.ok) throw new Error("r");
-      expect(r.reasonCode).toBe("CAMPAIGN_REQUIRED_MISSING");
-    } finally {
-      for (const k of Object.keys(laneEnv)) {
-        if (prev[k] === undefined) delete process.env[k];
-        else process.env[k] = prev[k]!;
-      }
-      __resetProviderEmissionFrontierForTests();
-    }
+    // Outside ALS — latch still active
+    const r = reserveHttpEmission({
+      url: "https://api.openai.com/v1/responses",
+      body: JSON.stringify({ model: "gpt-6.1-terra", max_output_tokens: 10 }),
+      effort: "medium",
+      env: laneEnv,
+    });
+    expect(r.ok).toBe(false);
+    if (r.ok) throw new Error("r");
+    expect(r.reasonCode).toBe("CAMPAIGN_REQUIRED_MISSING");
+    __resetProviderEmissionFrontierForTests();
   });

   it("does not treat non-OpenAI URLs as provider emissions", async () => {
@@ -244,4 +307,145 @@ describe("S2 — HTTP provider emission frontier", () => {
       expect(campaignHttpSlotsRemaining()).toBe(1);
     });
   });
+
+  it("enforces maxDirectOpens on campaign and commits successful opens", () => {
+    runWithProviderEmissionStore(() => {
+      beginCampaignEnvelope({ maxDirectOpens: 1, required: true });
+      expect(assertDirectOpenAllowed().ok).toBe(true);
+      commitDirectOpen();
+      expect(getActiveCampaignEnvelope()?.directOpensCommitted).toBe(1);
+      const blocked = assertDirectOpenAllowed();
+      expect(blocked.ok).toBe(false);
+      if (blocked.ok) throw new Error("blocked");
+      expect(blocked.reasonCode).toBe("CAMPAIGN_ENVELOPE_EXHAUSTED");
+    });
+  });
+
+  it("reserves hosted search when web_search tool appears and maxHostedSearches is set", async () => {
+    const { createHash } = await import("node:crypto");
+    const key = "sk-[REDACTED]";
+    const fp = createHash("sha256").update(key, "utf8").digest("hex").slice(0, 16);
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({
+        maxHttpAttempts: 2,
+        maxHostedSearches: 1,
+        required: true,
+      });
+      enableHttpMetaCaptureForTests();
+      const body = JSON.stringify({
+        model: "gpt-6.1-terra",
+        max_output_tokens: 50,
+        reasoning: { effort: "medium" },
+        sfia_estimated_input_tokens: 100,
+        tools: [{ type: "web_search" }],
+      });
+      const fakeFetch = (async () =>
+        new Response(JSON.stringify({ id: "r" }), {
+          status: 200,
+          headers: { "content-type": "application/json" },
+        })) as typeof fetch;
+      const gated = createFrontierAwareFetch(fakeFetch);
+      await withLaneEnv(async () => {
+        assertSdkInvocationAdmission({
+          kind: "nora.generate_reply",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+        await gated("https://api.openai.com/v1/responses", { method: "POST", body });
+        expect(getActiveCampaignEnvelope()?.hostedSearchesCommitted).toBe(1);
+        await expect(
+          gated("https://api.openai.com/v1/responses", { method: "POST", body }),
+        ).rejects.toBeInstanceOf(ProviderEmissionRefusedError);
+      });
+    });
+  });
+
+  it("refuses approximate openai hostname (no fuzzy host match)", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
+      let hit = 0;
+      const fakeFetch = (async () => {
+        hit += 1;
+        return new Response("ok");
+      }) as typeof fetch;
+      const gated = createFrontierAwareFetch(fakeFetch);
+      await gated("https://evil-openai.com/v1/responses", {
+        method: "POST",
+        body: JSON.stringify({ model: "gpt-6.1-terra" }),
+      });
+      expect(hit).toBe(1);
+      expect(getEmissionsObservedForTests()).toBe(0);
+    });
+  });
+});
+
+describe("process-level LIVE campaign attach", () => {
+  it("reattaches the same counters across ALS boundaries", async () => {
+    const {
+      runWithProviderEmissionStore,
+      beginCampaignEnvelope,
+      getActiveCampaignEnvelope,
+      reserveHttpEmission,
+      commitProviderEmission,
+      endProcessCampaign,
+      attachConfiguredLiveCampaignFromEnv,
+      __resetProviderEmissionFrontierForTests,
+    } = await import(
+      "@/domains/conversation/provider-emission-frontier"
+    );
+    __resetProviderEmissionFrontierForTests();
+    endProcessCampaign();
+    runWithProviderEmissionStore(() => {
+      const c = beginCampaignEnvelope({
+        campaignId: "camp-reattach-test",
+        maxHttpAttempts: 5,
+        required: true,
+      });
+      const r = reserveHttpEmission({
+        url: "https://api.openai.com/v1/responses",
+        body: JSON.stringify({
+          model: "gpt-5.1",
+          max_output_tokens: 100,
+          sfia_estimated_input_tokens: 50,
+        }),
+        skipModelAdmission: true,
+      });
+      expect(r.ok).toBe(true);
+      if (r.ok) commitProviderEmission(r);
+      expect(c.httpAttemptsCommitted).toBe(1);
+    });
+    // New ALS — same campaignId must reuse counters.
+    runWithProviderEmissionStore(() => {
+      const c = beginCampaignEnvelope({
+        campaignId: "camp-reattach-test",
+        maxHttpAttempts: 5,
+        required: true,
+      });
+      expect(c.httpAttemptsCommitted).toBe(1);
+      expect(getActiveCampaignEnvelope()?.campaignId).toBe("camp-reattach-test");
+    });
+    const prev = process.env.SFIA_G_LIVE_API;
+    const prevLane = process.env.STUDIO_LANE;
+    process.env.SFIA_G_LIVE_API = "1";
+    process.env.STUDIO_LANE = "DEV";
+    process.env.SFIA_LIVE_CAMPAIGN_ID = "g-live-env-test";
+    process.env.SFIA_LIVE_MAX_HTTP_ATTEMPTS = "3";
+    try {
+      runWithProviderEmissionStore(() => {
+        const c = attachConfiguredLiveCampaignFromEnv();
+        expect(c?.campaignId).toBe("g-live-env-test");
+        expect(c?.maxHttpAttempts).toBe(3);
+      });
+    } finally {
+      if (prev === undefined) delete process.env.SFIA_G_LIVE_API;
+      else process.env.SFIA_G_LIVE_API = prev;
+      if (prevLane === undefined) delete process.env.STUDIO_LANE;
+      else process.env.STUDIO_LANE = prevLane;
+      delete process.env.SFIA_LIVE_CAMPAIGN_ID;
+      delete process.env.SFIA_LIVE_MAX_HTTP_ATTEMPTS;
+      endProcessCampaign();
+      __resetProviderEmissionFrontierForTests();
+    }
+  });
 });
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-sdk-frontier.integration.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-sdk-frontier.integration.test.ts
new file mode 100644
index 00000000..91b56b46
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-sdk-frontier.integration.test.ts
@@ -0,0 +1,183 @@
+/**
+ * A-03 / A-04 — real `openai` SDK (locked 7.50) with substituted fetch.
+ * Does NOT call gated() twice artificially — the SDK's own retry path must emit.
+ */
+import { createHash } from "node:crypto";
+import { afterEach, describe, expect, it } from "vitest";
+import {
+  assertSdkInvocationAdmission,
+  beginCampaignEnvelope,
+  createFrontierAwareFetch,
+  enableHttpMetaCaptureForTests,
+  ensureFrontierOpenAIClientInstalled,
+  getEmissionsObservedForTests,
+  getHttpBodiesObservedForTests,
+  ProviderEmissionRefusedError,
+  runWithProviderEmissionStoreAsync,
+  __resetFrontierOpenAIClientInstallForTests,
+  __resetProviderEmissionFrontierForTests,
+} from "@/domains/conversation/provider-emission-frontier";
+
+const TEST_KEY = "sk-[REDACTED]";
+const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);
+
+describe("A — real OpenAI SDK through frontier fetch", () => {
+  afterEach(() => {
+    __resetProviderEmissionFrontierForTests();
+    __resetFrontierOpenAIClientInstallForTests();
+  });
+
+  it("A-03: SDK maxRetries triggers a second HTTP attempt counted by frontier", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({ maxHttpAttempts: 3, required: true });
+      enableHttpMetaCaptureForTests();
+      const prev = { ...process.env };
+      Object.assign(process.env, {
+        STUDIO_LANE: "DEV",
+        OPENAI_API_KEY: TEST_KEY,
+        SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
+      });
+      try {
+        assertSdkInvocationAdmission({
+          kind: "campaign.probe",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+        let n = 0;
+        const transport = (async () => {
+          n += 1;
+          if (n === 1) {
+            return new Response("temporary", { status: 500 });
+          }
+          // Minimal Responses-like success body
+          return new Response(
+            JSON.stringify({
+              id: "resp_test",
+              object: "response",
+              status: "completed",
+              model: "gpt-6.1-terra",
+              output: [],
+              usage: { input_tokens: 10, output_tokens: 5 },
+            }),
+            { status: 200, headers: { "content-type": "application/json" } },
+          );
+        }) as typeof fetch;
+
+        await ensureFrontierOpenAIClientInstalled({
+          forceReinstall: true,
+          fetch: transport,
+          maxRetries: 2,
+        });
+
+        const OpenAI = (await import("openai")).default;
+        // Use the same frontier-aware fetch the install registered conceptually —
+        // construct a client explicitly so we exercise openai package retry.
+        const client = new OpenAI({
+          apiKey: TEST_KEY,
+          fetch: createFrontierAwareFetch(transport),
+          maxRetries: 2,
+        });
+
+        // responses.create retries on 5xx via SDK — each attempt hits frontier.
+        await client.responses.create({
+          model: "gpt-6.1-terra",
+          input: "ping",
+          max_output_tokens: 32,
+          // @ts-expect-error reasoning shape accepted by API
+          reasoning: { effort: "medium" },
+        } as never);
+
+        expect(n).toBeGreaterThanOrEqual(2);
+        expect(getEmissionsObservedForTests()).toBeGreaterThanOrEqual(2);
+        expect(getHttpBodiesObservedForTests().length).toBeGreaterThanOrEqual(2);
+      } finally {
+        for (const k of ["STUDIO_LANE", "OPENAI_API_KEY", "SFIA_OPENAI_EXPECTED_KEY_FP"]) {
+          if (prev[k] === undefined) delete process.env[k];
+          else process.env[k] = prev[k]!;
+        }
+      }
+    });
+  }, 20_000);
+
+  it("A-04: campaign N=1 refuses SDK second attempt after first commit", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
+      const prev = { ...process.env };
+      Object.assign(process.env, {
+        STUDIO_LANE: "DEV",
+        OPENAI_API_KEY: TEST_KEY,
+        SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
+      });
+      try {
+        assertSdkInvocationAdmission({
+          kind: "campaign.probe",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+        let n = 0;
+        const transport = (async () => {
+          n += 1;
+          return new Response(
+            JSON.stringify({
+              id: `resp_${n}`,
+              object: "response",
+              status: "completed",
+              output: [],
+              usage: { input_tokens: 3, output_tokens: 1 },
+            }),
+            { status: 200, headers: { "content-type": "application/json" } },
+          );
+        }) as typeof fetch;
+        const client = new (await import("openai")).default({
+          apiKey: TEST_KEY,
+          fetch: createFrontierAwareFetch(transport),
+          maxRetries: 0,
+        });
+        await client.responses.create({
+          model: "gpt-6.1-terra",
+          input: "one",
+          max_output_tokens: 16,
+          reasoning: { effort: "medium" },
+        } as never);
+        let secondErr: unknown;
+        try {
+          await client.responses.create({
+            model: "gpt-6.1-terra",
+            input: "two",
+            max_output_tokens: 16,
+            reasoning: { effort: "medium" },
+          } as never);
+        } catch (e) {
+          secondErr = e;
+        }
+        expect(secondErr).toBeTruthy();
+        // openai package may wrap ProviderEmissionRefusedError as APIConnectionError
+        const chain: unknown[] = [];
+        let cur: unknown = secondErr;
+        for (let i = 0; i < 5 && cur; i++) {
+          chain.push(cur);
+          cur =
+            cur && typeof cur === "object" && "cause" in cur
+              ? (cur as { cause: unknown }).cause
+              : null;
+        }
+        const refused = chain.some(
+          (e) =>
+            e instanceof ProviderEmissionRefusedError ||
+            (e instanceof Error &&
+              /CAMPAIGN_ENVELOPE_EXHAUSTED|CAMPAIGN_HTTP_ATTEMPTS/.test(e.message)),
+        );
+        expect(refused).toBe(true);
+        expect(n).toBe(1);
+        expect(getEmissionsObservedForTests()).toBe(1);
+      } finally {
+        for (const k of ["STUDIO_LANE", "OPENAI_API_KEY", "SFIA_OPENAI_EXPECTED_KEY_FP"]) {
+          if (prev[k] === undefined) delete process.env[k];
+          else process.env[k] = prev[k]!;
+        }
+      }
+    });
+  }, 20_000);
+});
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-public-web-frontier.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-public-web-frontier.test.ts
index f20731e8..895e9b1e 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-public-web-frontier.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-public-web-frontier.test.ts
@@ -1,4 +1,8 @@
-import { afterEach, describe, expect, it } from "vitest";
+import { afterEach, describe, expect, it, vi } from "vitest";
+
+vi.mock("@/domains/conversation/web-public-query-authority", () => ({
+  reverifyWebPublicQueryAuthorityAtEgress: vi.fn(),
+}));
 import {
   __getPublicWebOutboundLogForTests,
   __resetPublicWebOutboundLogForTests,
@@ -24,6 +28,7 @@ function env(partial: Record<string, string>): NodeJS.ProcessEnv {

 afterEach(() => {
   __resetPublicWebOutboundLogForTests();
+  vi.clearAllMocks();
 });

 describe("ML5 B1 public web frontier", () => {
@@ -49,6 +54,7 @@ describe("ML5 B1 public web frontier", () => {
     const r = await executePublicWebSearch({
       explicitlyAuthorizedExactQuery: exact,
       turnAuthorizedExactQueries: [exact],
+      turnPublicTopics: { rfc9110: exact },
       privateContextMarkers: [secret, "/Users/morris/secret"],
       env: env({ SFIA_WEB_SEARCH_ENABLED: "1" }),
     });
@@ -120,6 +126,25 @@ describe("ML5 B1 public web frontier", () => {
     expect(__getPublicWebOutboundLogForTests()).toHaveLength(0);
   });

+  it("refuses open_page when campaign maxDirectOpens is exhausted", async () => {
+    const {
+      beginCampaignEnvelope,
+      runWithProviderEmissionStoreAsync,
+      __resetProviderEmissionFrontierForTests,
+    } = await import("@/domains/conversation/provider-emission-frontier");
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({ maxDirectOpens: 0, required: true });
+      const r = await executePublicWebOpenPage({
+        url: "https://example.invalid/doc",
+        env: env({ SFIA_WEB_SEARCH_ENABLED: "1" }),
+        allowedUrls: ["https://example.invalid/doc"],
+      });
+      expect(r.status).toBe("DENIED");
+      expect(r.limits).toContain("CAMPAIGN_DIRECT_OPEN_REFUSED");
+    });
+    __resetProviderEmissionFrontierForTests();
+  });
+
   it("C20 open_page refuses URL outside authorized discovery before egress", async () => {
     const r = await executePublicWebOpenPage({
       url: "https://example.invalid/not-discovered",
@@ -159,6 +184,102 @@ describe("ML5 B1 public web frontier", () => {
     expect(c.notes.some((n) => n.startsWith("YEAR_TOKENS_DIVERGE_HINT:"))).toBe(true);
   });

+  describe("S5 — EXPLICIT_AUTHORIZED_EXACT D6 egress (non-catalog)", () => {
+    const exact = "HTTP/3 site:datatracker.ietf.org";
+    const enabled = env({ SFIA_WEB_SEARCH_ENABLED: "1" });
+    const finops = {
+      projectId: "prj_test",
+      ownerPilotId: "pilot_a",
+    };
+
+    it("denies without projectId — no outbound", async () => {
+      const r = await executePublicWebSearch({
+        explicitlyAuthorizedExactQuery: exact,
+        turnAuthorizedExactQueries: [exact],
+        policyVersion: "pol_v3",
+        finops: { ownerPilotId: "pilot_a" },
+        env: enabled,
+      });
+      expect(r.status).toBe("DENIED");
+      expect(r.limits).toContain("WEB_QUERY_EGRESS_D6_DENIED");
+      expect(r.limits).toContain("PROJECT_REQUIRED");
+      expect(__getPublicWebOutboundLogForTests()).toHaveLength(0);
+    });
+
+    it("denies without policyVersion — no outbound", async () => {
+      const r = await executePublicWebSearch({
+        explicitlyAuthorizedExactQuery: exact,
+        turnAuthorizedExactQueries: [exact],
+        finops,
+        env: enabled,
+      });
+      expect(r.status).toBe("DENIED");
+      expect(r.limits).toContain("WEB_QUERY_EGRESS_D6_DENIED");
+      expect(r.limits).toContain("POLICY_VERSION_REQUIRED");
+      expect(__getPublicWebOutboundLogForTests()).toHaveLength(0);
+    });
+
+    it("denies without pilotId — no outbound", async () => {
+      const r = await executePublicWebSearch({
+        explicitlyAuthorizedExactQuery: exact,
+        turnAuthorizedExactQueries: [exact],
+        policyVersion: "pol_v3",
+        finops: { projectId: "prj_test" },
+        env: enabled,
+      });
+      expect(r.status).toBe("DENIED");
+      expect(r.limits).toContain("WEB_QUERY_EGRESS_D6_DENIED");
+      expect(r.limits).toContain("PILOT_REQUIRED");
+      expect(__getPublicWebOutboundLogForTests()).toHaveLength(0);
+    });
+
+    it("turnAuthorizedExactQueries alone do not catalog-bind (D6 still required)", async () => {
+      const { reverifyWebPublicQueryAuthorityAtEgress } = await import(
+        "@/domains/conversation/web-public-query-authority"
+      );
+      vi.mocked(reverifyWebPublicQueryAuthorityAtEgress).mockResolvedValue({
+        allowed: false,
+        reasonCode: "DECISION_NOT_FOUND",
+        reason: "missing",
+      });
+      const r = await executePublicWebSearch({
+        explicitlyAuthorizedExactQuery: exact,
+        turnAuthorizedExactQueries: [exact],
+        policyVersion: "pol_v3",
+        finops,
+        env: enabled,
+      });
+      expect(r.status).toBe("DENIED");
+      expect(r.limits).toContain("WEB_QUERY_EGRESS_D6_DENIED");
+      expect(vi.mocked(reverifyWebPublicQueryAuthorityAtEgress)).toHaveBeenCalled();
+    });
+
+    it("allows egress when D6 reverify passes (mocked)", async () => {
+      const { reverifyWebPublicQueryAuthorityAtEgress } = await import(
+        "@/domains/conversation/web-public-query-authority"
+      );
+      vi.mocked(reverifyWebPublicQueryAuthorityAtEgress).mockResolvedValue({
+        allowed: true,
+        decisionId: "dec_abc",
+        objectRef: "web.public_query:abc",
+        query: exact,
+        source: "HUMAN_DECISION_RECORD",
+      });
+      const r = await executePublicWebSearch({
+        explicitlyAuthorizedExactQuery: exact,
+        turnAuthorizedExactQueries: [exact],
+        turnExactQueryDecisionIds: {
+          [exact.toLowerCase()]: "dec_abc",
+        },
+        policyVersion: "pol_v3",
+        finops,
+        env: enabled,
+      });
+      expect(r.status).toBe("AVAILABLE");
+      expect(__getPublicWebOutboundLogForTests()).toHaveLength(1);
+    });
+  });
+
   it("never treats ISOLATION_PROVEN env as attaching hosted tool", async () => {
     const { canAttachWebSearchTool, buildPublicWebSearchTool } = await import(
       "@/domains/conversation/web-search-tools"
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-web-page-session.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-web-page-session.test.ts
index 85222358..8a85cfb0 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-web-page-session.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-web-page-session.test.ts
@@ -6,6 +6,7 @@ import {
   readWebPageProgressive,
   readWebPdfPages,
   searchWebPageSession,
+  getWebPageSession,
   getWebPageSessionByViewerToken,
   unionCoverageChars,
 } from "@/domains/conversation/public-web-page-session";
@@ -215,6 +216,136 @@ describe("ML5 progressive WEB page session", () => {
     expect(getWebPageSessionByViewerToken(later.viewerToken)?.pdfBytes).toBeUndefined();
   });

+  it("enrich footprint counts retained pdf bytes and prior pages", () => {
+    const pdfBytes = new Uint8Array(24_000);
+    const firstPages = [
+      { pageNumber: 1, text: "alpha ".repeat(400) },
+      { pageNumber: 2, text: "beta ".repeat(400) },
+    ];
+    putWebPageSession({
+      scope: SCOPE,
+      url: "https://example.com/enrich-footprint.pdf",
+      kind: "pdf",
+      text: firstPages.map((p) => p.text).join("\n"),
+      pages: firstPages,
+      pageCount: 4,
+      contentFingerprint: "fp-enrich",
+      pdfBytes,
+      limits: ["INITIAL"],
+    });
+
+    const enrichedPages = [
+      ...firstPages,
+      { pageNumber: 3, text: "gamma ".repeat(600) },
+    ];
+    putWebPageSession({
+      scope: SCOPE,
+      url: "https://example.com/enrich-footprint.pdf",
+      kind: "pdf",
+      text: enrichedPages.map((p) => p.text).join("\n"),
+      pages: enrichedPages,
+      pageCount: 4,
+      contentFingerprint: "fp-enrich",
+      limits: ["ENRICHED"],
+    });
+
+    const stats = __webPageSessionStatsForTests();
+    expect(stats.count).toBe(1);
+    expect(stats.memoryBytes).toBeGreaterThanOrEqual(
+      pdfBytes.byteLength +
+        enrichedPages.reduce(
+          (n, p) => n + Buffer.byteLength(p.text, "utf8"),
+          0,
+        ),
+    );
+
+    process.env.SFIA_WEB_PAGE_SESSION_MAX_BYTES = String(
+      pdfBytes.byteLength + 4_000,
+    );
+    putWebPageSession({
+      scope: SCOPE,
+      url: "https://example.com/anchor.pdf",
+      kind: "pdf",
+      text: "anchor",
+      contentFingerprint: "anchor",
+      pdfBytes: new Uint8Array(8_000),
+      limits: [],
+    });
+    expect(
+      getWebPageSession(SCOPE, "https://example.com/enrich-footprint.pdf"),
+    ).toBeNull();
+    expect(
+      getWebPageSession(SCOPE, "https://example.com/anchor.pdf")?.pdfBytes
+        ?.byteLength,
+    ).toBe(8_000);
+    delete process.env.SFIA_WEB_PAGE_SESSION_MAX_BYTES;
+  });
+
+  it("enrich text-only update keeps prior pages in eviction sizing", () => {
+    const pdfBytes = new Uint8Array(12_000);
+    const pages = [{ pageNumber: 1, text: "hold ".repeat(800) }];
+    const url = "https://example.com/text-only-enrich.pdf";
+    putWebPageSession({
+      scope: SCOPE,
+      url,
+      kind: "pdf",
+      text: pages[0]!.text,
+      pages,
+      pageCount: 1,
+      contentFingerprint: "fp-text-enrich",
+      pdfBytes,
+      limits: [],
+    });
+    putWebPageSession({
+      scope: SCOPE,
+      url,
+      kind: "pdf",
+      text: `${pages[0]!.text}\nconsulted overlay`,
+      contentFingerprint: "fp-text-enrich",
+      limits: ["READ_PROGRESS"],
+    });
+    const stats = __webPageSessionStatsForTests();
+    expect(stats.memoryBytes).toBeGreaterThanOrEqual(
+      pdfBytes.byteLength + Buffer.byteLength(pages[0]!.text, "utf8"),
+    );
+    expect(getWebPageSession(SCOPE, url)?.pages?.length).toBe(1);
+    expect(getWebPageSession(SCOPE, url)?.pdfBytes?.byteLength).toBe(
+      pdfBytes.byteLength,
+    );
+  });
+
+  it("enrich without new pdfBytes retains server-side bytes", () => {
+    const pdfBytes = new Uint8Array([0x25, 0x50, 0x44, 0x46, 0x2d, 0x31]);
+    const url = "https://example.com/retain-bytes.pdf";
+    const first = putWebPageSession({
+      scope: SCOPE,
+      url,
+      kind: "pdf",
+      text: "page one",
+      pages: [{ pageNumber: 1, text: "page one" }],
+      pageCount: 2,
+      contentFingerprint: "fp-retain",
+      pdfBytes,
+      limits: [],
+    });
+    const second = putWebPageSession({
+      scope: SCOPE,
+      url,
+      kind: "pdf",
+      text: "page one\npage two expanded",
+      pages: [
+        { pageNumber: 1, text: "page one" },
+        { pageNumber: 2, text: "page two expanded" },
+      ],
+      pageCount: 2,
+      contentFingerprint: "fp-retain",
+      limits: ["TEXT_ENRICHED"],
+    });
+    expect(second.viewerToken).toBe(first.viewerToken);
+    expect(second.pdfBytes?.byteLength).toBe(pdfBytes.byteLength);
+    expect(second.pages?.map((p) => p.pageNumber)).toEqual([1, 2]);
+  });
+
   it("evicts oldest sessions when session cap is exceeded", () => {
     process.env.SFIA_WEB_PAGE_SESSION_MAX = "2";
     process.env.SFIA_WEB_PAGE_SESSION_MAX_BYTES = "200000";
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-web-search-authorize.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-web-search-authorize.test.ts
index 4ab9172d..3ff27943 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-web-search-authorize.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-web-search-authorize.test.ts
@@ -75,6 +75,8 @@ describe("C22 WEB query provenance authorization", () => {
     const r = await executePublicWebSearch({
       explicitlyAuthorizedExactQuery: exact,
       turnAuthorizedExactQueries: [exact],
+      // Independent public topic catalog — not Nora-fed priorExactQueries alone.
+      turnPublicTopics: { owasp_ssrf: exact },
       privateContextMarkers: [privateFact],
       env: { ...process.env, SFIA_WEB_SEARCH_ENABLED: "1", SFIA_WEB_SEARCH_LIVE: "0" },
     });

```

## 9. Gates

| Gate | Status |
|---|---|
| ENV-01 | COMPLETE (DEV) |
| G-LIVE-API | CONSUMED (bounded LIVE-01..04) |
| G-WEB-PUBLIC | NOT CONSUMED — BLOCKED HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1 |
| G-WEB-MIXED | CLOSED |
| G-RECETTE | NOT CONSUMED |
| Review Handoff L3 | IN PROGRESS → publish |

## 10. Réserves A/B/C/D

- **A**: none open on final candidate
- **B**: R-G-WEB-PUBLIC-HOSTED ; R-GIT-PDF-TEXT
- **C**: R-MODEL-APPLIED-UNVERIFIED ; R-WEB05 ; R-F2 ; R-EFFICIENCE-RB
- **D**: optional dedicated D6 kind

## 11. Décisions Morris requises

1. Revue handoff + verdict conformité
2. GO/NOGO cutover RECETTE (G-RECETTE) — non demandé ici
3. GO G-WEB-PUBLIC si borne hosted acceptée ASSUMED_1 ou renforcement
4. Corpus Git PDF textuel autorisé pour LIVE-06
5. F2 visuelle
6. Extension politique v0.2 → RECETTE (distincte)

## 12. Fake/Real Qualification

- DETERMINISTIC PROVEN (A–F paths with real SDK/conductor/authority/PG where applicable)
- LIVE PROVEN (G-LIVE-API WEB OFF)
- NOT READY FOR REAL permanent WEB
- NOT ADOPTED · NO RELEASE · R6 NOT STARTED · Livraison 2 non engagée

## 13. Manifeste / delivery-history / as-built

Updated in-tree:
- `construction/ml5-recette-manifest-candidate-20261126.md`
- `construction/delivery-history.md` entry DELIV-2026-11-26-ML5-FOUNDATION-CONFORMANCE-LIVE
- `construction/as-built-ml5-cognitive-foundation-conformance-20261126.md`

## 14. Completeness

REVIEW PACK FULL — modified content included (created files complete; key diffs complete; test diffs; LIVE JSON). Secrets redacted if present. No stub.


## 15. Post-docs commit

HEAD after docs capitalisation: `f27e01025f920db3fa61a4bb66cc05085981ca95` · tree `32718db62c7b212375977b0d4bf7f0ed381c59b5` · web `24d8f65820c5ea6956085c9d56bd7ecddbeb3389`.
Code candidate BUILD_ID remains `emfz_yP5MBF9GxQRrnJGP` (built from `4bfc1c1e`; docs-only tip does not require rebuild for cognitive behavior).
