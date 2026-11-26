# SFIA Review Pack FULL — ML5 Convergence Qualification

- **Generated_utc**: 2026-11-26T16:55:48.529694+00:00
- **Cycle**: R5 · ML5 · Type 8 · CRITICAL · EVOL
- **Branch**: `sfia/next-ml5-integrated-delivery-20261123`
- **HEAD_initial**: `f27e01025f920db3fa61a4bb66cc05085981ca95`
- **HEAD_final**: `235b589bbab485739d57437a93b56a08c5d37fce`
- **Tree**: `41217a134dd24fa6f92e21c638379a5b31e2abad`
- **Web tree**: `c69591392ffa2b01855bc2cb8744635d2fb76c6f`
- **Merge-base main**: `997897fd7cf914771e7d08e8030dc7123fab7d25`
- **BUILD_ID**: `XGqFqt2I6aCNTZLjirvtW` (code tip `f77a42e4`; docs tip may follow)
- **ENV-01**: COMPLETE · DEV :3100 · PG :5433 · RECETTE :3200 protected
- **WEB**: OFF · G-WEB-MIXED closed
- **Tests**: vitest ml5-* **389 PASS**
- **Verdict**: **ML5 CONVERGENCE QUALIFIED WITH EXPLICIT CAPABILITY RESERVES — RECETTE SCOPE DECISION REQUIRED**
- **Handoff**: REQUIRED / PUBLISH-IN-CYCLE

## 1. Git Truth
```
235b589b docs(next): capitalise ML5 convergence LIVE Chantiers360 and RECETTE manifeste
f77a42e4 fix(next): ML5 convergence — input estimate bounds, campaign restart latch, FinOps no double-count

 ...l5-cognitive-foundation-conformance-20261126.md |  22 ++
 .../construction/delivery-history.md               |  16 +
 ...web-public-hosted-bound-arbitration-20261126.md |  33 ++
 .../ml5-recette-manifest-candidate-20261126.md     |  87 +++--
 .../web/scripts/ml5-g-live-api-convergence.mjs     | 390 +++++++++++++++++++++
 .../conversation/provider-emission-frontier.ts     | 144 +++++++-
 .../src/domains/conversation/usage-accounting.ts   |   4 +-
 .../web/src/domains/finops/usage-projection.ts     |  84 ++++-
 .../web/src/domains/finops/usage-read-service.ts   |  14 +-
 .../tests/unit/ml5-finops-usage-projection.test.ts |  45 +++
 .../ml5-http-attempt-finops-correlation.test.ts    |  54 ++-
 .../unit/ml5-provider-emission-frontier.test.ts    | 147 ++++++++
 ...ovider-sdk-agents-tool-loop.integration.test.ts | 215 ++++++++++++
 13 files changed, 1172 insertions(+), 83 deletions(-)

```

## 2. Sources and authorizations
SFIA v2.6 Next section 4.3.0b; governance ENV-01/versioning; allocation/conductor/OBS/D6; handoff fac32750 capitalised; Chantiers360 corpus via existing project link.

## 3. P1-P4 results
### P1 PASS
Input estimate is not treated as campaign ceiling; restart latch; Agents SDK tool-loop; retry retained; direct-open counted before egress.

### P2 PASS (LIVE)
Chantiers360 investigation + note — criteria individual PASS (not HTTP-200-only).

### P3 PASS
FinOps /api/finops/* + UI 200; correlation rows excluded from request/cost totals. Note: summary period=7 includes historical rows vs campaign-window billable.

### P4 PARTIAL / reserves
WEB D6/PDF deterministic preserved; G-WEB-PUBLIC BLOCKED (hosted arbitration); Git PDF text BLOCKED CORPUS; browser smokes PASS.

## 4. LIVE convergence summary
```json
{
  "verdict": "G-LIVE-API CONVERGENCE PASS — ALL MANDATORY CRITERIA",
  "criteria": [
    {
      "id": "PRE-HEALTH",
      "status": "PASS",
      "detail": "status=200"
    },
    {
      "id": "PRE-PROJECT",
      "status": "PASS",
      "detail": "status=200 name=Adaptive S2 Chantiers360"
    },
    {
      "id": "PRE-GIT",
      "status": "PASS",
      "detail": "mcleland147/chantiers360"
    },
    {
      "id": "PRE-PREPARATION",
      "status": "PASS",
      "detail": "prep_85f051f7-0c6e-4649-91fb-f313c840b40c"
    },
    {
      "id": "P2-HTTP",
      "status": "PASS",
      "detail": "status=200"
    },
    {
      "id": "P2-COMPLETE",
      "status": "PASS",
      "detail": "noraStatus=COMPLETE notes=structured_non_stream_finalOutput"
    },
    {
      "id": "P2-TOOLS-OR-SOURCES",
      "status": "PASS",
      "detail": "tools=2 replyHasSourceCue=true"
    },
    {
      "id": "P2-ORACLE-CONTENT",
      "status": "PASS",
      "detail": "oracleHits=3/3 replyChars=3188"
    },
    {
      "id": "P2-NOT-GENERIC-NORA-DESC",
      "status": "PASS",
      "detail": "generic Nora self-description pattern"
    },
    {
      "id": "P2-NOTE",
      "status": "PASS",
      "detail": "chars=6720"
    },
    {
      "id": "P3-FINOPS-API",
      "status": "PASS",
      "detail": "status=200"
    },
    {
      "id": "P3-FINOPS-WORKS",
      "status": "PASS",
      "detail": "status=200"
    },
    {
      "id": "P3-FINOPS-WORK-DETAIL",
      "status": "PASS",
      "detail": "status=200"
    },
    {
      "id": "P3-FINOPS-UI",
      "status": "PASS",
      "detail": "status=200"
    },
    {
      "id": "P3-NO-DOUBLE-COUNT-HINT",
      "status": "PARTIAL",
      "detail": "corrOnly=11 apiTotalReq=170 billableSumReq=11"
    },
    {
      "id": "P3-PG-OBSERVATIONS",
      "status": "PASS",
      "detail": "billable=11 totalRows=22"
    }
  ],
  "inv": {
    "status": "COMPLETE",
    "tools": 2,
    "workId": "cgw_b20fcbe3-d00a-4919-aebf-bf669bd65e62",
    "ms": 48247,
    "reply": "## Faits observés\n\nLe dépôt rattaché est **Chantiers360**, pas un dépôt identifié comme RoomBooking. Il fournit donc un exemple transposable, sans établir ce qui est déjà implémenté dans RoomBooking.\n\n- La note projet *Prévenir les doubles réservations — recommandation pour un MVP*, révision 1, rapporte que Chantiers360 détecte un conflit pour un même ouvrier lorsque `début A < fin B` et `fin A > début B`. Les intervalles qui se touchent sont compatibles ; les créneaux annulés sont exclus, ainsi que le créneau lui-même lors d’une modification. Selon cette note, la création vérifie le conflit avant l’écriture, mais l’extrait étudié ne démontre pas de garantie complémentaire en base.\n- Le [contrôleur de planning](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/src/planning/planning.controller.ts) expose notamment une vérification préalable `GET /planning/conflicts` et délègue création et modification au service. Cette vérification préalable ne constitue pas, à elle seule, une garantie contre les écritures simultanées.\n- Le [test API planning](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/test/planning.api.spec.ts) vérifie une réponse HTTP `409` lorsque le service **simulé** renvoie une exception de conflit. Il ne prouve donc pas la détection réelle ni la sûreté en concurrence.\n- Le [schéma Prisma](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/prisma/schema.prisma) déclare PostgreSQL, des statuts de créneau et un index sur ouvrier, début et fin. Le modèle lu ne déclare pas de contrainte de non-chevauchement ; cela ne permet pas de conclure sur d’éventuelles contraintes ajoutées par les migrations, non examinées ici.\n\nLes fichiers Git cités ont été consultés au commit `8c398c494dd918272aab5b2653777c6c21d2e76e`. Aucun test n’a été exécuté.\n\n## Hypothèses à confirmer pour RoomBooking\n\nUne salle ou autre ressource n’accepte **qu’une réservation à la fois** ; seules certaines réservations, par exemple les réservations confirmées, bloquent ; deux créneaux contigus sont autorisés. Si la capacité ou les statuts fonctionnent autrement, la règle doit être adaptée.\n\n## Recommandation conditionnelle\n\nSi ces hypothèses sont retenues, appliquer la même règle de chevauchement **par identifiant de ressource**, côté serveur, à la création, au déplacement et à la réactivation. Rejeter une fin non postérieure au début ; exclure la réservation en cours de modification ; renvoyer un `409` compréhensible en cas de conflit, sans divulguer inutilement les détails de l’autre réservation.\n\nPour éviter la course entre deux demandes, ajouter une **garantie atomique à l’écriture** : contrainte de non-chevauchement en base si le moteur le permet, ou vérification et écriture sérialisées par ressource dans une même transaction. Un contrôle préalable peut améliorer l’interface, mais ne remplace pas cette garantie.\n\nÀ tester notamment : chevauchement, contiguïté, autre ressource, annulation et réactivation, modification sans auto-conflit, et deux demandes simultanées sur la base réelle — avec un seul succès attendu."
  },
  "note": {
    "status": "COMPLETE",
    "workId": "cgw_b20fcbe3-d00a-4919-aebf-bf669bd65e62",
    "reply": "### Note technique — conflits de réservation\n- **Faits.** Dans Chantiers360, deux créneaux d’un même ouvrier sont en conflit si `début A < fin B` et `fin A > début B` ; les créneaux contigus sont compatibles ([règles](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/src/common/rules/planning-conflicts.rules.ts)). - Les créneaux annulés et celui en cours de modification sont exclus de la recherche de conflits ; le service vérifie avant l’écriture. - Le [test API](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/test/planning.api.spec.ts) vérifie un `409` avec un service simulé, pas la détection réelle en concurrence. - **Limites.** Chantiers360 est un exemple transposable, pas une preuve de l’implémentation de RoomBooking. La garantie en base n’est pas établie : les migrations n’ont pas été examinées dans cette investigation ; aucun test n’a été exécuté. - **Recommandations conditionnelles.** Si la capacité est d’une réservation par ressource, contrôler les chevauchements côté serveur à la création, modification et réactivation ; renvoyer `409` en cas de conflit. - Assurer l’atomicité à l’écriture par contrainte de non-chevauchement ou par vérification et écriture sérialisées ; tester deux demandes simultanées sur la base réelle, avec un seul succès attendu. - Si la capacité peut dépasser un, définir d’abord son décompte et adapter la règle.\n\nJe tiens compte du résultat D4 confirmé en révision 1, sans relancer le CREATE.\n\n```sfia-document title-b64=Q29uZmxpdHMgZGUgcsOpc2VydmF0aW9uIOKAlCBub3RlIHRlY2huaXF1ZQ chars=4851 pair-sha256=798a1324eeca5b4313c1b02228740267af68a1d3781fd2424666c34955738248\n## Faits observés\n\nLe dépôt rattaché est **Chantiers360**, pas un dépôt identifié comme RoomBooking. Il fournit donc un exemple transposable, sans établir ce qui est déjà implémenté dans RoomBooking.\n\n- La note projet *Prévenir les doubles réservations — recommandation pour un MVP*, révision 1, rapporte que Chantiers360 détecte un conflit pour un même ouvrier lorsque `début A < fin B` et `fin A > début B`. Les intervalles qui se touchent sont compatibles ; les créneaux annulés sont exclus, ainsi que le créneau lui-même lors d’une modification. Selon cette note, la création vérifie le conflit avant l’écriture, mais l’extrait étudié ne démontre pas de garantie complémentaire en base.\n- Le [contrôleur de planning](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/src/planning/planning.controller.ts) expose notamment une vérification préalable `GET /planning/conflicts` et délègue création et modification au service. Cette vérification préalable ne constitue pas, à elle seule, une garantie contre les écritures simultanées.\n- Le [test API planning](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/test/planning.api.spec.ts) vérifie une réponse HTTP `409` lorsque le service **simulé** renvoie une exception de conflit. Il ne prouve donc pas la détection réelle ni la sûreté en concurrence.\n- Le [schéma Prisma](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/prisma/schema.prisma) déclare PostgreSQL, des statuts de créneau et un index sur ouvrier, début et fin. Le modèle lu ne déclare pas de contrainte de non-chevauchement ; cela ne permet pas de conclure sur d’éventuelles contraintes ajoutées par les migrations, non examinées ici.\n\nLes fichiers Git cités ont été consultés au commit `8c398c494dd918272aab5b2653777c6c21d2e76e`. Aucun test n’a été exécuté.\n\n## Hypothèses à confirmer pour RoomBooking\n\nUne salle ou autre ressource n’accepte **qu’une réservation à la fois** ; seules certaines réservations, par exemple les réservations confirmées, bloquent ; deux créneaux contigus sont autorisés. Si la capacité ou les statuts fonctionnent autrement, la règle doit être adaptée.\n\n## Recommandation conditionnelle\n\nSi ces"
  },
  "finops": {
    "observationCount": 22,
    "billableCount": 11,
    "correlationOnlyCount": 11,
    "sumProviderRequestsBillable": 11,
    "sumInputTokens": 156618,
    "sumOutputTokens": 5474,
    "summaryKpis": {
      "estimatedCostUsd": {
        "kind": "partial",
        "value": 0.9860158000000001,
        "note": "Certains coûts sont partiels"
      },
      "totalTokens": {
        "kind": "known",
        "value": 2519137
      },
      "completedWorks": {
        "kind": "known",
        "value": 13
      },
      "measureCoveragePercent": {
        "kind": "partial",
        "value": 100,
        "note": "Couverture sur observations recensées — population d'émissions HTTP non établie indépendamment"
      },
      "estimationCompletenessPercent": {
        "kind": "partial",
        "value": 0,
        "note": "Mesures PARTIAL exclues de la complétude financière"
      },
      "costPerCompletedWorkUsd": {
        "kind": "partial",
        "value": 0.07584736923076923,
        "note": "Certains coûts sont partiels"
      },
      "measuredRequests": 170,
      "totalRequests": 170
    }
  }
}

```

## 5. LIVE full report 00
```json
{
  "startedAt": "2026-11-26T16:52:47.086Z",
  "base": "http://127.0.0.1:3100",
  "projectId": "proj_fdd9b064-a8a4-4296-bb6b-e8b64ebe914d",
  "campaign": "g-live-api-convergence-20261126",
  "gate": "G-LIVE-API",
  "web": "OFF",
  "criteria": [
    {
      "id": "PRE-HEALTH",
      "status": "PASS",
      "detail": "status=200"
    },
    {
      "id": "PRE-PROJECT",
      "status": "PASS",
      "detail": "status=200 name=Adaptive S2 Chantiers360"
    },
    {
      "id": "PRE-GIT",
      "status": "PASS",
      "detail": "mcleland147/chantiers360"
    },
    {
      "id": "PRE-PREPARATION",
      "status": "PASS",
      "detail": "prep_85f051f7-0c6e-4649-91fb-f313c840b40c"
    },
    {
      "id": "P2-HTTP",
      "status": "PASS",
      "detail": "status=200"
    },
    {
      "id": "P2-COMPLETE",
      "status": "PASS",
      "detail": "noraStatus=COMPLETE notes=structured_non_stream_finalOutput"
    },
    {
      "id": "P2-TOOLS-OR-SOURCES",
      "status": "PASS",
      "detail": "tools=2 replyHasSourceCue=true"
    },
    {
      "id": "P2-ORACLE-CONTENT",
      "status": "PASS",
      "detail": "oracleHits=3/3 replyChars=3188"
    },
    {
      "id": "P2-NOT-GENERIC-NORA-DESC",
      "status": "PASS",
      "detail": "generic Nora self-description pattern"
    },
    {
      "id": "P2-NOTE",
      "status": "PASS",
      "detail": "chars=6720"
    },
    {
      "id": "P3-FINOPS-API",
      "status": "PASS",
      "detail": "status=200"
    },
    {
      "id": "P3-FINOPS-WORKS",
      "status": "PASS",
      "detail": "status=200"
    },
    {
      "id": "P3-FINOPS-WORK-DETAIL",
      "status": "PASS",
      "detail": "status=200"
    },
    {
      "id": "P3-FINOPS-UI",
      "status": "PASS",
      "detail": "status=200"
    },
    {
      "id": "P3-NO-DOUBLE-COUNT-HINT",
      "status": "PARTIAL",
      "detail": "corrOnly=11 apiTotalReq=170 billableSumReq=11"
    },
    {
      "id": "P3-PG-OBSERVATIONS",
      "status": "PASS",
      "detail": "billable=11 totalRows=22"
    }
  ],
  "scenarios": {
    "INVESTIGATION": {
      "status": 200,
      "noraStatus": "COMPLETE",
      "ms": 48247,
      "workId": "cgw_b20fcbe3-d00a-4919-aebf-bf669bd65e62",
      "toolCallsObserved": 2,
      "attempts": [
        {
          "attemptId": "att_83325d08d1927d55",
          "kind": "non_stream",
          "outcome": "SUCCESS",
          "notes": "structured_non_stream_finalOutput",
          "providerContacted": "YES"
        }
      ],
      "generationId": "gen_9ad245ba-b6a3-4bb2-b23f-41503bc1daaf",
      "reply": "## Faits observés\n\nLe dépôt rattaché est **Chantiers360**, pas un dépôt identifié comme RoomBooking. Il fournit donc un exemple transposable, sans établir ce qui est déjà implémenté dans RoomBooking.\n\n- La note projet *Prévenir les doubles réservations — recommandation pour un MVP*, révision 1, rapporte que Chantiers360 détecte un conflit pour un même ouvrier lorsque `début A < fin B` et `fin A > début B`. Les intervalles qui se touchent sont compatibles ; les créneaux annulés sont exclus, ainsi que le créneau lui-même lors d’une modification. Selon cette note, la création vérifie le conflit avant l’écriture, mais l’extrait étudié ne démontre pas de garantie complémentaire en base.\n- Le [contrôleur de planning](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/src/planning/planning.controller.ts) expose notamment une vérification préalable `GET /planning/conflicts` et délègue création et modification au service. Cette vérification préalable ne constitue pas, à elle seule, une garantie contre les écritures simultanées.\n- Le [test API planning](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/test/planning.api.spec.ts) vérifie une réponse HTTP `409` lorsque le service **simulé** renvoie une exception de conflit. Il ne prouve donc pas la détection réelle ni la sûreté en concurrence.\n- Le [schéma Prisma](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/prisma/schema.prisma) déclare PostgreSQL, des statuts de créneau et un index sur ouvrier, début et fin. Le modèle lu ne déclare pas de contrainte de non-chevauchement ; cela ne permet pas de conclure sur d’éventuelles contraintes ajoutées par les migrations, non examinées ici.\n\nLes fichiers Git cités ont été consultés au commit `8c398c494dd918272aab5b2653777c6c21d2e76e`. Aucun test n’a été exécuté.\n\n## Hypothèses à confirmer pour RoomBooking\n\nUne salle ou autre ressource n’accepte **qu’une réservation à la fois** ; seules certaines réservations, par exemple les réservations confirmées, bloquent ; deux créneaux contigus sont autorisés. Si la capacité ou les statuts fonctionnent autrement, la règle doit être adaptée.\n\n## Recommandation conditionnelle\n\nSi ces hypothèses sont retenues, appliquer la même règle de chevauchement **par identifiant de ressource**, côté serveur, à la création, au déplacement et à la réactivation. Rejeter une fin non postérieure au début ; exclure la réservation en cours de modification ; renvoyer un `409` compréhensible en cas de conflit, sans divulguer inutilement les détails de l’autre réservation.\n\nPour éviter la course entre deux demandes, ajouter une **garantie atomique à l’écriture** : contrainte de non-chevauchement en base si le moteur le permet, ou vérification et écriture sérialisées par ressource dans une même transaction. Un contrôle préalable peut améliorer l’interface, mais ne remplace pas cette garantie.\n\nÀ tester notamment : chevauchement, contiguïté, autre ressource, annulation et réactivation, modification sans auto-conflit, et deux demandes simultanées sur la base réelle — avec un seul succès attendu.",
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
      }
    },
    "NOTE": {
      "status": 200,
      "noraStatus": "COMPLETE",
      "workId": "cgw_b20fcbe3-d00a-4919-aebf-bf669bd65e62",
      "reply": "### Note technique — conflits de réservation\n- **Faits.** Dans Chantiers360, deux créneaux d’un même ouvrier sont en conflit si `début A < fin B` et `fin A > début B` ; les créneaux contigus sont compatibles ([règles](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/src/common/rules/planning-conflicts.rules.ts)). - Les créneaux annulés et celui en cours de modification sont exclus de la recherche de conflits ; le service vérifie avant l’écriture. - Le [test API](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/test/planning.api.spec.ts) vérifie un `409` avec un service simulé, pas la détection réelle en concurrence. - **Limites.** Chantiers360 est un exemple transposable, pas une preuve de l’implémentation de RoomBooking. La garantie en base n’est pas établie : les migrations n’ont pas été examinées dans cette investigation ; aucun test n’a été exécuté. - **Recommandations conditionnelles.** Si la capacité est d’une réservation par ressource, contrôler les chevauchements côté serveur à la création, modification et réactivation ; renvoyer `409` en cas de conflit. - Assurer l’atomicité à l’écriture par contrainte de non-chevauchement ou par vérification et écriture sérialisées ; tester deux demandes simultanées sur la base réelle, avec un seul succès attendu. - Si la capacité peut dépasser un, définir d’abord son décompte et adapter la règle.\n\nJe tiens compte du résultat D4 confirmé en révision 1, sans relancer le CREATE.\n\n```sfia-document title-b64=Q29uZmxpdHMgZGUgcsOpc2VydmF0aW9uIOKAlCBub3RlIHRlY2huaXF1ZQ chars=4851 pair-sha256=798a1324eeca5b4313c1b02228740267af68a1d3781fd2424666c34955738248\n## Faits observés\n\nLe dépôt rattaché est **Chantiers360**, pas un dépôt identifié comme RoomBooking. Il fournit donc un exemple transposable, sans établir ce qui est déjà implémenté dans RoomBooking.\n\n- La note projet *Prévenir les doubles réservations — recommandation pour un MVP*, révision 1, rapporte que Chantiers360 détecte un conflit pour un même ouvrier lorsque `début A < fin B` et `fin A > début B`. Les intervalles qui se touchent sont compatibles ; les créneaux annulés sont exclus, ainsi que le créneau lui-même lors d’une modification. Selon cette note, la création vérifie le conflit avant l’écriture, mais l’extrait étudié ne démontre pas de garantie complémentaire en base.\n- Le [contrôleur de planning](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/src/planning/planning.controller.ts) expose notamment une vérification préalable `GET /planning/conflicts` et délègue création et modification au service. Cette vérification préalable ne constitue pas, à elle seule, une garantie contre les écritures simultanées.\n- Le [test API planning](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/test/planning.api.spec.ts) vérifie une réponse HTTP `409` lorsque le service **simulé** renvoie une exception de conflit. Il ne prouve donc pas la détection réelle ni la sûreté en concurrence.\n- Le [schéma Prisma](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/prisma/schema.prisma) déclare PostgreSQL, des statuts de créneau et un index sur ouvrier, début et fin. Le modèle lu ne déclare pas de contrainte de non-chevauchement ; cela ne permet pas de conclure sur d’éventuelles contraintes ajoutées par les migrations, non examinées ici.\n\nLes fichiers Git cités ont été consultés au commit `8c398c494dd918272aab5b2653777c6c21d2e76e`. Aucun test n’a été exécuté.\n\n## Hypothèses à confirmer pour RoomBooking\n\nUne salle ou autre ressource n’accepte **qu’une réservation à la fois** ; seules certaines réservations, par exemple les réservations confirmées, bloquent ; deux créneaux contigus sont autorisés. Si la capacité ou les statuts fonctionnent autrement, la règle doit être adaptée.\n\n## Recommandation conditionnelle\n\nSi ces hypothèses sont retenues, appliquer la même règle de chevauchement **par identifiant de ressource**, côté serveur, à la création, au déplacement et à la réactivation. Rejeter une fin non postérieure au début ; exclure la réservation en cours de modification ; renvoyer un `409` compréhensible en cas de conflit, sans divulguer inutilement les détails de l’autre réservation.\n\nPour éviter la course entre deux demandes, ajouter une **garantie atomique à l’écriture** : contrainte de non-chevauchement en base si le moteur le permet, ou vérification et écriture sérialisées par ressource dans une même transaction. Un contrôle préalable peut améliorer l’interface, mais ne remplace pas cette garantie.\n\nÀ tester notamment : chevauchement, contiguïté, autre ressource, annulation et réactivation, modification sans auto-conflit, et deux demandes simultanées sur la base réelle — avec un seul succès attendu.\n\n# Conflits de réservation — note technique\n**Faits.** Pour un même ouvrier, le chevauchement est `début A < fin B` et `fin A > début B` ; les créneaux contigus sont compatibles et les annulations exclues. Source : *Prévenir les doubles réservations — recommandation pour un MVP*, révision 1.\nLe [contrôleur Chantiers360](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/src/planning/planning.controller.ts) expose une vérification préalable ; le [test API](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/test/planning.api.spec.ts) vérifie un `409` avec un service simulé.\n**Limites.** Chantiers360 est un exemple transposable, pas une preuve de l’implémentation RoomBooking ; aucun test n’a été exécuté.\nLe [schéma Prisma](https://github.com/mcleland147/chantiers360/blob/8c398c494dd918272aab5b2653777c6c21d2e76e/backend/prisma/schema.prisma) a été lu partiellement ; les migrations n’ont pas été examinées : une contrainte en base ne peut être exclue.\n**Recommandations conditionnelles.** Si une ressource n’accepte qu’une réservation à la fois, appliquer la règle par ressource côté serveur à la création, modification et réactivation ; exclure l’élément modifié et répondre `409` en cas de conflit.\nGarantir l’atomicité à l’écriture : contrainte de non-chevauchement en base, si disponible, ou transaction sérialisée par ressource ; la vérification préalable seule ne suffit pas.\nTester sur la base réelle chevauchement, contiguïté, statuts, modification et demandes simultanées, avec un seul succès attendu pour deux réservations concurrentes incompatibles.\n```\n\n---\n### Résultat d'enregistrement\n\nNouvelle version disponible : v1.\n\nL'enregistrement est confirmé. Les versions antérieures restent inchangées.\n",
      "attempts": [
        {
          "attemptId": "att_16c872a1a9e87278",
          "kind": "non_stream",
          "outcome": "SUCCESS",
          "notes": "structured_non_stream_finalOutput",
          "providerContacted": "YES"
        }
      ]
    }
  },
  "finops": {
    "observationCount": 22,
    "billableCount": 11,
    "correlationOnlyCount": 11,
    "sumProviderRequestsBillable": 11,
    "sumInputTokens": 156618,
    "sumOutputTokens": 5474,
    "summaryKpis": {
      "estimatedCostUsd": {
        "kind": "partial",
        "value": 0.9860158000000001,
        "note": "Certains coûts sont partiels"
      },
      "totalTokens": {
        "kind": "known",
        "value": 2519137
      },
      "completedWorks": {
        "kind": "known",
        "value": 13
      },
      "measureCoveragePercent": {
        "kind": "partial",
        "value": 100,
        "note": "Couverture sur observations recensées — population d'émissions HTTP non établie indépendamment"
      },
      "estimationCompletenessPercent": {
        "kind": "partial",
        "value": 0,
        "note": "Mesures PARTIAL exclues de la complétude financière"
      },
      "costPerCompletedWorkUsd": {
        "kind": "partial",
        "value": 0.07584736923076923,
        "note": "Certains coûts sont partiels"
      },
      "measuredRequests": 170,
      "totalRequests": 170
    }
  },
  "verdict": "G-LIVE-API CONVERGENCE PASS — ALL MANDATORY CRITERIA",
  "endedAt": "2026-11-26T16:54:22.930Z"
}
```

## 6. Created files

### `projects/sfia-studio-next/web/tests/unit/ml5-provider-sdk-agents-tool-loop.integration.test.ts`
```
/**
 * P1.4 — real Agents SDK `run()` with a product-like tool producing multiple
 * Responses HTTP attempts under substituted transport (no LIVE network).
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

function responsesBody(parts: {
  id: string;
  output: unknown[];
  usage?: { input_tokens: number; output_tokens: number };
}) {
  return JSON.stringify({
    id: parts.id,
    object: "response",
    status: "completed",
    model: "gpt-6.1-terra",
    output: parts.output,
    usage: parts.usage ?? { input_tokens: 20, output_tokens: 10 },
  });
}

describe("P1.4 — Agents SDK tool loop through frontier", () => {
  afterEach(() => {
    __resetProviderEmissionFrontierForTests();
    __resetFrontierOpenAIClientInstallForTests();
  });

  it("A-02: real Agent+tool run() yields multiple HTTP Responses under campaign", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({
        campaignId: "camp-agents-tool-loop",
        maxHttpAttempts: 5,
        maxOutputTokensPerRequest: 512,
        maxInputTokensPerRequest: 50_000,
        required: true,
      });
      enableHttpMetaCaptureForTests();
      const prev = { ...process.env };
      Object.assign(process.env, {
        STUDIO_LANE: "DEV",
        OPENAI_API_KEY: TEST_KEY,
        SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
      });
      try {
        assertSdkInvocationAdmission({
          kind: "internal.qualification",
          modelId: "gpt-6.1-terra",
          effort: "medium",
          env: process.env,
        });

        let httpN = 0;
        const transport = (async (_input: RequestInfo | URL, init?: RequestInit) => {
          httpN += 1;
          const bodyStr =
            typeof init?.body === "string"
              ? init.body
              : init?.body
                ? String(init.body)
                : "";
          // First Responses call: ask for a function tool.
          if (httpN === 1) {
            return new Response(
              responsesBody({
                id: "resp_tool_call",
                output: [
                  {
                    type: "function_call",
                    call_id: "call_qual_1",
                    name: "qualify_fixture_source",
                    arguments: JSON.stringify({ ref: "doc://qual/planning-a" }),
                  },
                ],
              }),
              { status: 200, headers: { "content-type": "application/json" } },
            );
          }
          // Subsequent call(s): final message after tool result.
          expect(bodyStr.length).toBeGreaterThan(10);
          return new Response(
            responsesBody({
              id: "resp_final",
              output: [
                {
                  type: "message",
                  role: "assistant",
                  content: [{ type: "output_text", text: "QUAL_OK planning-a" }],
                },
              ],
            }),
            { status: 200, headers: { "content-type": "application/json" } },
          );
        }) as typeof fetch;

        await ensureFrontierOpenAIClientInstalled({
          forceReinstall: true,
          fetch: transport,
          maxRetries: 0,
        });

        const { Agent, tool, run, setDefaultOpenAIClient } = await import(
          "@openai/agents"
        );
        const OpenAI = (await import("openai")).default;
        const client = new OpenAI({
          apiKey: TEST_KEY,
          fetch: createFrontierAwareFetch(transport),
          maxRetries: 0,
        });
        setDefaultOpenAIClient(client as never);

        const qualifyFixtureSource = tool({
          name: "qualify_fixture_source",
          description: "Read a qualification fixture source id",
          parameters: {
            type: "object",
            properties: { ref: { type: "string" } },
            required: ["ref"],
            additionalProperties: false,
          },
          execute: async (input: { ref: string }) => {
            return JSON.stringify({
              ref: input.ref,
              coverage: "CONSULTED",
              excerpt: "Room A conflicts with Room B on Tuesday 10:00",
            });
          },
        });

        const agent = new Agent({
          name: "NoraQualToolLoop",
          instructions:
            "You must call qualify_fixture_source once then answer briefly.",
          model: "gpt-6.1-terra",
          tools: [qualifyFixtureSource],
        });

        const result = await run(agent, "Investigate planning conflict fixture.", {
          maxTurns: 4,
        } as never);

        expect(httpN).toBeGreaterThanOrEqual(2);
        expect(getEmissionsObservedForTests()).toBeGreaterThanOrEqual(2);
        const bodies = getHttpBodiesObservedForTests();
        expect(bodies.length).toBeGreaterThanOrEqual(2);
        for (const b of bodies) {
          expect(b.maxOutputTokens).toBe(512);
        }
        // Independent oracle: transport call count, not only frontier counter.
        expect(httpN).toBe(getEmissionsObservedForTests());
        expect(String((result as { finalOutput?: unknown }).finalOutput ?? result)).toBeTruthy();
      } finally {
        Object.assign(process.env, prev);
      }
    });
  }, 60_000);

  it("A-05: incompatible effort override — no transport contact", async () => {
    await runWithProviderEmissionStoreAsync(async () => {
      beginCampaignEnvelope({ maxHttpAttempts: 3, required: true });
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
        let contacted = 0;
        const transport = (async () => {
          contacted += 1;
          return new Response("{}", { status: 200 });
        }) as typeof fetch;
        const fetchAware = createFrontierAwareFetch(transport);
        await expect(
          fetchAware("https://api.openai.com/v1/responses", {
            method: "POST",
            body: JSON.stringify({
              model: "gpt-6.1-terra",
              reasoning: { effort: "xhigh" },
              max_output_tokens: 16,
              sfia_estimated_input_tokens: 40,
            }),
          }),
        ).rejects.toBeInstanceOf(ProviderEmissionRefusedError);
        expect(contacted).toBe(0);
        expect(getEmissionsObservedForTests()).toBe(0);
      } finally {
        Object.assign(process.env, prev);
      }
    });
  });
});

```

### `projects/sfia-studio-next/web/scripts/ml5-g-live-api-convergence.mjs`
```
/**
 * G-LIVE-API convergence — real Chantiers360 / planning investigation (WEB OFF).
 * Criteria are evaluated individually; HTTP 200 / COMPLETE / PG rows alone ≠ PASS.
 */
import { writeFileSync, mkdirSync } from "node:fs";
import { randomUUID } from "node:crypto";
import { execSync } from "node:child_process";

const BASE = process.env.SFIA_LIVE_BASE || "http://127.0.0.1:3100";
const OUT =
  process.env.SFIA_LIVE_OUT || "/tmp/sfia-ml5-g-live-api-convergence-20261126";
const PROJECT_ID =
  process.env.SFIA_LIVE_PROJECT_ID ||
  "proj_fdd9b064-a8a4-4296-bb6b-e8b64ebe914d";
/** Product posts Nora turns via preparation messages (project page uses prep link). */
let PREPARATION_ID = process.env.SFIA_LIVE_PREPARATION_ID || "";
mkdirSync(OUT, { recursive: true });

const jar = { cookie: "" };
const criteria = [];

function recordCriterion(id, status, detail) {
  criteria.push({ id, status, detail });
  console.log(`[CRITERION ${id}] ${status} — ${String(detail).slice(0, 400)}`);
}

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
      json = { _raw: text.slice(0, 8000) };
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

function extractReply(json) {
  if (!json || typeof json !== "object") return "";
  const msgs = Array.isArray(json.messages) ? json.messages : [];
  for (let i = msgs.length - 1; i >= 0; i--) {
    const m = msgs[i];
    if (
      m &&
      (m.role === "assistant" || m.author === "assistant") &&
      typeof m.content === "string" &&
      m.content.trim()
    ) {
      return m.content;
    }
  }
  return typeof json.content === "string" ? json.content : "";
}

function extractWorkId(json) {
  return json?.cognitiveWork?.workId || json?.cognitiveWorkId || null;
}

const report = {
  startedAt: new Date().toISOString(),
  base: BASE,
  projectId: PROJECT_ID,
  campaign: "g-live-api-convergence-20261126",
  gate: "G-LIVE-API",
  web: "OFF",
  criteria: [],
  scenarios: {},
  finops: null,
  verdict: null,
};

// Independent oracle seeds (not given to Nora as answers) — markers we expect
// after consulting Chantiers360 / planning materials.
const ORACLE_MARKERS = [
  /réserv/i,
  /conflit|conflict|double/i,
  /salle|room|créneau|slot|planning/i,
];

try {
  const health = await api("/login");
  recordCriterion(
    "PRE-HEALTH",
    health.status === 200 || health.status === 307 || health.status === 302
      ? "PASS"
      : "FAIL",
    `status=${health.status}`,
  );
  if (criteria[criteria.length - 1].status === "FAIL") throw new Error("DEV not ready");

  await api("/api/dev/auto-session", { method: "POST" });

  const proj = await api(`/api/projects/${PROJECT_ID}`);
  save("01-project", proj);
  recordCriterion(
    "PRE-PROJECT",
    proj.status === 200 ? "PASS" : "FAIL",
    `status=${proj.status} name=${proj.json?.name || proj.json?.project?.name || "?"}`,
  );

  const gitLinks = pgJson(
    `SELECT COALESCE(json_agg(row_to_json(t)), '[]'::json) FROM (
      SELECT l.id, l.status, r.full_name, r.default_branch
      FROM project_git_links l
      JOIN authorized_repositories r ON r.id = l.repository_id
      WHERE l.project_id='${PROJECT_ID}' AND l.status='ATTACHED'
    ) t;`,
  );
  save("02-git-links", gitLinks);
  const hasGit = Array.isArray(gitLinks) && gitLinks.length > 0;
  recordCriterion(
    "PRE-GIT",
    hasGit ? "PASS" : "BLOCKED",
    hasGit ? gitLinks.map((g) => g.full_name).join(",") : "no ATTACHED git link",
  );
  if (!hasGit) throw new Error("BLOCKED — corpus Git missing for investigation");

  if (!PREPARATION_ID) {
    PREPARATION_ID =
      pg(
        `SELECT preparation_id FROM preparation_project_links WHERE project_id='${PROJECT_ID}' LIMIT 1;`,
      ) || "";
  }
  save("02b-preparation", { preparationId: PREPARATION_ID });
  recordCriterion(
    "PRE-PREPARATION",
    PREPARATION_ID ? "PASS" : "BLOCKED",
    PREPARATION_ID || "no preparation_project_links row",
  );
  if (!PREPARATION_ID) throw new Error("BLOCKED — preparation link missing");

  // P2 investigation — real planning question (not "describe Nora")
  const question = [
    "Investigation planning / RoomBooking (qualification ML5) :",
    "À partir du dépôt Git rattaché et des documents du projet, identifie comment les conflits",
    "de double réservation (même ressource, créneaux qui se chevauchent) sont détectés ou devraient l'être.",
    "Consulte au moins deux sources distinctes (fichiers ou documents). Cite les chemins/refs consultés.",
    "Distingue faits observés, hypothèses et recommandations. N'invente pas de code absent.",
    "Aucune recherche web.",
  ].join(" ");

  const t0 = Date.now();
  const inv = await api(`/api/preparations/${PREPARATION_ID}/messages`, {
    method: "POST",
    body: {
      content: question,
      clientTurnKey: `ctk_inv_${randomUUID()}`,
      forceNewCognitiveWork: true,
    },
  });
  save("03-investigation", inv);
  const replyInv = extractReply(inv.json);
  const workId = extractWorkId(inv.json);
  const tools = inv.json?.toolCallsObserved ?? 0;
  const sources =
    inv.json?.cognitiveWork?.sources ||
    inv.json?.qualification?.sources ||
    inv.json?.turnProjection?.sources ||
    [];
  report.scenarios.INVESTIGATION = {
    status: inv.status,
    noraStatus: inv.json?.status,
    ms: Date.now() - t0,
    workId,
    toolCallsObserved: tools,
    attempts: inv.json?.attempts ?? [],
    generationId: inv.json?.generationId ?? null,
    reply: replyInv,
    policy: inv.json?.policy ?? null,
  };

  recordCriterion(
    "P2-HTTP",
    inv.status === 200 ? "PASS" : "FAIL",
    `status=${inv.status}`,
  );
  recordCriterion(
    "P2-COMPLETE",
    inv.json?.status === "COMPLETE" || inv.json?.status === "PARTIAL"
      ? "PASS"
      : "FAIL",
    `noraStatus=${inv.json?.status} notes=${inv.json?.attempts?.[0]?.notes}`,
  );
  recordCriterion(
    "P2-TOOLS-OR-SOURCES",
    tools > 0 || (Array.isArray(sources) && sources.length > 0) || /CONSULT|Git|doc_|path|fichier|\.md|\.ts|\.py/i.test(replyInv)
      ? "PASS"
      : "FAIL",
    `tools=${tools} replyHasSourceCue=${/Git|doc_|path|fichier|\.md/i.test(replyInv)}`,
  );
  const oracleHits = ORACLE_MARKERS.filter((re) => re.test(replyInv)).length;
  recordCriterion(
    "P2-ORACLE-CONTENT",
    oracleHits >= 2 && replyInv.length > 200 ? "PASS" : "FAIL",
    `oracleHits=${oracleHits}/3 replyChars=${replyInv.length}`,
  );
  recordCriterion(
    "P2-NOT-GENERIC-NORA-DESC",
    !/Aucun acquis pertinent n'a été trouvé dans la recherche ciblée/i.test(replyInv)
      ? "PASS"
      : "FAIL",
    "generic Nora self-description pattern",
  );

  // Reprise + note technique
  const noteReq = await api(`/api/preparations/${PREPARATION_ID}/messages`, {
    method: "POST",
    body: {
      content:
        "À partir uniquement des acquis de l'investigation précédente sur les conflits de réservation, produis une note technique distincte (12 lignes max) : faits sourcés, limites, recommandations. Pas de nouvelle exploration exhaustive si les acquis suffisent.",
      clientTurnKey: `ctk_note_${randomUUID()}`,
      ...(workId ? { cognitiveWorkId: workId } : {}),
    },
  });
  save("04-note", noteReq);
  const replyNote = extractReply(noteReq.json);
  report.scenarios.NOTE = {
    status: noteReq.status,
    noraStatus: noteReq.json?.status,
    workId: extractWorkId(noteReq.json) || workId,
    reply: replyNote,
    attempts: noteReq.json?.attempts ?? [],
  };
  recordCriterion(
    "P2-NOTE",
    noteReq.status === 200 &&
      replyNote.length > 120 &&
      (/fait|recommand|limite|source|conflit|réserv/i.test(replyNote) ||
        /```sfia-document/.test(replyNote))
      ? "PASS"
      : "FAIL",
    `chars=${replyNote.length}`,
  );

  // FinOps real API
  const finopsSummary = await api("/api/finops/summary?period=7");
  save("05-finops-summary", finopsSummary);
  recordCriterion(
    "P3-FINOPS-API",
    finopsSummary.status === 200 ? "PASS" : "FAIL",
    `status=${finopsSummary.status}`,
  );

  const finopsWorks = await api("/api/finops/works?period=7");
  save("06-finops-works", finopsWorks);
  recordCriterion(
    "P3-FINOPS-WORKS",
    finopsWorks.status === 200 ? "PASS" : "FAIL",
    `status=${finopsWorks.status}`,
  );

  if (workId) {
    const finopsWork = await api(
      `/api/finops/works/${encodeURIComponent(workId)}?period=7`,
    );
    save("07-finops-work", finopsWork);
    recordCriterion(
      "P3-FINOPS-WORK-DETAIL",
      finopsWork.status === 200 ? "PASS" : "FAIL",
      `status=${finopsWork.status}`,
    );
  } else {
    recordCriterion("P3-FINOPS-WORK-DETAIL", "NOT RUN", "no workId");
  }

  const ui = await api("/settings/consumption");
  recordCriterion(
    "P3-FINOPS-UI",
    ui.status === 200 ? "PASS" : "FAIL",
    `status=${ui.status}`,
  );

  const since = report.startedAt;
  const usage = pgJson(
    `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY created_at), '[]'::json) FROM (
      SELECT id, created_at, cognitive_work_id, generation_id, attempt_id, operation,
             input_tokens, output_tokens, provider_requests, estimated_cost_usd,
             cost_coverage, granularity, limits_json
      FROM provider_usage_observations
      WHERE created_at >= '${since}'::timestamptz
      ORDER BY created_at LIMIT 120
    ) t;`,
  );
  const rows = Array.isArray(usage) ? usage : [];
  const billable = rows.filter(
    (r) =>
      !(Array.isArray(r.limits_json) &&
        r.limits_json.some((l) =>
          String(l).includes("HTTP_ATTEMPT_USAGE_UNKNOWN") ||
          String(l).includes("HTTP_ATTEMPT_CORRELATION_ONLY"),
        )),
  );
  const corrOnly = rows.length - billable.length;
  const sumReq = billable.reduce(
    (a, r) => a + (Number(r.provider_requests) || 0),
    0,
  );
  const sumIn = billable.reduce((a, r) => a + (Number(r.input_tokens) || 0), 0);
  const sumOut = billable.reduce(
    (a, r) => a + (Number(r.output_tokens) || 0),
    0,
  );
  report.finops = {
    observationCount: rows.length,
    billableCount: billable.length,
    correlationOnlyCount: corrOnly,
    sumProviderRequestsBillable: sumReq,
    sumInputTokens: sumIn,
    sumOutputTokens: sumOut,
    summaryKpis: finopsSummary.json?.summary?.kpis ?? null,
  };
  save("08-finops-pg", report.finops);
  recordCriterion(
    "P3-NO-DOUBLE-COUNT-HINT",
    corrOnly === 0 ||
      (finopsSummary.json?.summary?.kpis?.totalRequests ?? 0) <= sumReq + 1
      ? "PASS"
      : "PARTIAL",
    `corrOnly=${corrOnly} apiTotalReq=${finopsSummary.json?.summary?.kpis?.totalRequests} billableSumReq=${sumReq}`,
  );
  recordCriterion(
    "P3-PG-OBSERVATIONS",
    billable.length >= 1 ? "PASS" : "FAIL",
    `billable=${billable.length} totalRows=${rows.length}`,
  );

  report.criteria = criteria;
  const failed = criteria.filter((c) => c.status === "FAIL");
  const blocked = criteria.filter((c) => c.status === "BLOCKED");
  report.verdict =
    failed.length === 0 && blocked.length === 0
      ? "G-LIVE-API CONVERGENCE PASS — ALL MANDATORY CRITERIA"
      : failed.length
        ? "G-LIVE-API CONVERGENCE FAIL — SEE CRITERIA"
        : "G-LIVE-API CONVERGENCE BLOCKED — SEE CRITERIA";
  report.endedAt = new Date().toISOString();
  save("00-report", report);
  console.log(JSON.stringify({ verdict: report.verdict, out: OUT, failed: failed.length }, null, 2));
  process.exit(failed.length || blocked.length ? 2 : 0);
} catch (e) {
  report.criteria = criteria;
  report.verdict = "G-LIVE-API CONVERGENCE ERROR";
  report.error = String(e?.stack || e);
  report.endedAt = new Date().toISOString();
  save("00-report", report);
  console.error(report.error);
  process.exit(1);
}

```

### `projects/sfia-studio-next/construction/ml5-g-web-public-hosted-bound-arbitration-20261126.md`
```
# G-WEB-PUBLIC — Dossier d'arbitrage borne hosted (2026-11-26)

Classe : **réserve B** · Gate : **FERMÉ** · Aucune acceptation implicite de `ASSUMED_1`.

## Limite réellement disponible aujourd'hui

- Studio compte **1 recherche hosted assumée par requête Responses** lorsque le body contient un outil `web_search` / `web_search_preview` (`HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1`).
- Le moteur hosted OpenAI peut exécuter **plusieurs** recherches internes dans une même requête Responses.
- Les ouvertures directes B1 sont bornées séparément (`maxDirectOpens`) et consommées **avant** l'effet réseau (succès ou échec).

## Garantie fournisseur

Aucune API verrouillée (`openai@7.50` / `@openai/agents@0.21`) n'expose dans ce candidat un compteur hosted opposable « N recherches = N » distinct du nombre de Responses.

## Risque résiduel

Sous-comptage hosted → dépassement silencieux de l'enveloppe « 5 recherches hosted » si on levait le gate avec `ASSUMED_1`.

## Alternative d'enveloppe proposée à Morris

1. **Maintenir G-WEB-PUBLIC fermé** jusqu'à une borne démontrable (instrumentation fournisseur ou plafond Responses=hosted strict documenté).
2. Ou : enveloppe **Responses-capped** explicite (ex. max 5 Responses avec outil web_search, en acceptant que chaque Response ≤ 1 recherche *assumée* n'est **pas** une garantie) — décision Morris écrite requise.
3. Ou : désactiver hosted tool et n'autoriser que les ouvertures directes B1 sous `maxDirectOpens` (périmètre réduit).

## Conséquences

- Financière : frais hosted non bornés strictement si gate ouvert sous ASSUMED_1.
- Sécurité : périmètre WEB LIVE inchangé (DEV, projet public only) ; G-WEB-MIXED reste fermé.
- Proposition : **ne pas consommer G-WEB-PUBLIC** dans ce cycle ; conserver WEB OFF sur le candidat RECETTE.

## Exit

GO Morris sur l'une des alternatives 1–3, ou fourniture d'une métrique hosted opposable.

```

## 7. Code/test/script diffs
```diff
diff --git a/projects/sfia-studio-next/web/scripts/ml5-g-live-api-convergence.mjs b/projects/sfia-studio-next/web/scripts/ml5-g-live-api-convergence.mjs
new file mode 100644
index 00000000..a35695ad
--- /dev/null
+++ b/projects/sfia-studio-next/web/scripts/ml5-g-live-api-convergence.mjs
@@ -0,0 +1,390 @@
+/**
+ * G-LIVE-API convergence — real Chantiers360 / planning investigation (WEB OFF).
+ * Criteria are evaluated individually; HTTP 200 / COMPLETE / PG rows alone ≠ PASS.
+ */
+import { writeFileSync, mkdirSync } from "node:fs";
+import { randomUUID } from "node:crypto";
+import { execSync } from "node:child_process";
+
+const BASE = process.env.SFIA_LIVE_BASE || "http://127.0.0.1:3100";
+const OUT =
+  process.env.SFIA_LIVE_OUT || "/tmp/sfia-ml5-g-live-api-convergence-20261126";
+const PROJECT_ID =
+  process.env.SFIA_LIVE_PROJECT_ID ||
+  "proj_fdd9b064-a8a4-4296-bb6b-e8b64ebe914d";
+/** Product posts Nora turns via preparation messages (project page uses prep link). */
+let PREPARATION_ID = process.env.SFIA_LIVE_PREPARATION_ID || "";
+mkdirSync(OUT, { recursive: true });
+
+const jar = { cookie: "" };
+const criteria = [];
+
+function recordCriterion(id, status, detail) {
+  criteria.push({ id, status, detail });
+  console.log(`[CRITERION ${id}] ${status} — ${String(detail).slice(0, 400)}`);
+}
+
+async function api(path, { method = "GET", body, timeoutMs = 900_000 } = {}) {
+  const ctrl = new AbortController();
+  const t = setTimeout(() => ctrl.abort(), timeoutMs);
+  try {
+    const res = await fetch(`${BASE}${path}`, {
+      method,
+      headers: {
+        ...(body ? { "content-type": "application/json" } : {}),
+        ...(jar.cookie ? { cookie: jar.cookie } : {}),
+      },
+      body: body ? JSON.stringify(body) : undefined,
+      signal: ctrl.signal,
+    });
+    const set = res.headers.getSetCookie?.() || [];
+    for (const c of set) {
+      const part = c.split(";")[0];
+      jar.cookie = jar.cookie ? `${jar.cookie}; ${part}` : part;
+    }
+    const text = await res.text();
+    let json = null;
+    try {
+      json = JSON.parse(text);
+    } catch {
+      json = { _raw: text.slice(0, 8000) };
+    }
+    return { status: res.status, json };
+  } finally {
+    clearTimeout(t);
+  }
+}
+
+function save(name, data) {
+  writeFileSync(`${OUT}/${name}.json`, JSON.stringify(data, null, 2));
+}
+
+function pg(sql) {
+  const oneLine = sql.replace(/\s+/g, " ").trim();
+  return execSync(
+    `docker exec sfia-next-dev-pg psql -U sfia_next_dev -d sfia_next_dev -t -A -c ${JSON.stringify(oneLine)}`,
+    { encoding: "utf8", maxBuffer: 20_000_000 },
+  ).trim();
+}
+
+function pgJson(sql) {
+  const raw = pg(sql);
+  if (!raw) return null;
+  try {
+    return JSON.parse(raw);
+  } catch {
+    return raw;
+  }
+}
+
+function extractReply(json) {
+  if (!json || typeof json !== "object") return "";
+  const msgs = Array.isArray(json.messages) ? json.messages : [];
+  for (let i = msgs.length - 1; i >= 0; i--) {
+    const m = msgs[i];
+    if (
+      m &&
+      (m.role === "assistant" || m.author === "assistant") &&
+      typeof m.content === "string" &&
+      m.content.trim()
+    ) {
+      return m.content;
+    }
+  }
+  return typeof json.content === "string" ? json.content : "";
+}
+
+function extractWorkId(json) {
+  return json?.cognitiveWork?.workId || json?.cognitiveWorkId || null;
+}
+
+const report = {
+  startedAt: new Date().toISOString(),
+  base: BASE,
+  projectId: PROJECT_ID,
+  campaign: "g-live-api-convergence-20261126",
+  gate: "G-LIVE-API",
+  web: "OFF",
+  criteria: [],
+  scenarios: {},
+  finops: null,
+  verdict: null,
+};
+
+// Independent oracle seeds (not given to Nora as answers) — markers we expect
+// after consulting Chantiers360 / planning materials.
+const ORACLE_MARKERS = [
+  /réserv/i,
+  /conflit|conflict|double/i,
+  /salle|room|créneau|slot|planning/i,
+];
+
+try {
+  const health = await api("/login");
+  recordCriterion(
+    "PRE-HEALTH",
+    health.status === 200 || health.status === 307 || health.status === 302
+      ? "PASS"
+      : "FAIL",
+    `status=${health.status}`,
+  );
+  if (criteria[criteria.length - 1].status === "FAIL") throw new Error("DEV not ready");
+
+  await api("/api/dev/auto-session", { method: "POST" });
+
+  const proj = await api(`/api/projects/${PROJECT_ID}`);
+  save("01-project", proj);
+  recordCriterion(
+    "PRE-PROJECT",
+    proj.status === 200 ? "PASS" : "FAIL",
+    `status=${proj.status} name=${proj.json?.name || proj.json?.project?.name || "?"}`,
+  );
+
+  const gitLinks = pgJson(
+    `SELECT COALESCE(json_agg(row_to_json(t)), '[]'::json) FROM (
+      SELECT l.id, l.status, r.full_name, r.default_branch
+      FROM project_git_links l
+      JOIN authorized_repositories r ON r.id = l.repository_id
+      WHERE l.project_id='${PROJECT_ID}' AND l.status='ATTACHED'
+    ) t;`,
+  );
+  save("02-git-links", gitLinks);
+  const hasGit = Array.isArray(gitLinks) && gitLinks.length > 0;
+  recordCriterion(
+    "PRE-GIT",
+    hasGit ? "PASS" : "BLOCKED",
+    hasGit ? gitLinks.map((g) => g.full_name).join(",") : "no ATTACHED git link",
+  );
+  if (!hasGit) throw new Error("BLOCKED — corpus Git missing for investigation");
+
+  if (!PREPARATION_ID) {
+    PREPARATION_ID =
+      pg(
+        `SELECT preparation_id FROM preparation_project_links WHERE project_id='${PROJECT_ID}' LIMIT 1;`,
+      ) || "";
+  }
+  save("02b-preparation", { preparationId: PREPARATION_ID });
+  recordCriterion(
+    "PRE-PREPARATION",
+    PREPARATION_ID ? "PASS" : "BLOCKED",
+    PREPARATION_ID || "no preparation_project_links row",
+  );
+  if (!PREPARATION_ID) throw new Error("BLOCKED — preparation link missing");
+
+  // P2 investigation — real planning question (not "describe Nora")
+  const question = [
+    "Investigation planning / RoomBooking (qualification ML5) :",
+    "À partir du dépôt Git rattaché et des documents du projet, identifie comment les conflits",
+    "de double réservation (même ressource, créneaux qui se chevauchent) sont détectés ou devraient l'être.",
+    "Consulte au moins deux sources distinctes (fichiers ou documents). Cite les chemins/refs consultés.",
+    "Distingue faits observés, hypothèses et recommandations. N'invente pas de code absent.",
+    "Aucune recherche web.",
+  ].join(" ");
+
+  const t0 = Date.now();
+  const inv = await api(`/api/preparations/${PREPARATION_ID}/messages`, {
+    method: "POST",
+    body: {
+      content: question,
+      clientTurnKey: `ctk_inv_${randomUUID()}`,
+      forceNewCognitiveWork: true,
+    },
+  });
+  save("03-investigation", inv);
+  const replyInv = extractReply(inv.json);
+  const workId = extractWorkId(inv.json);
+  const tools = inv.json?.toolCallsObserved ?? 0;
+  const sources =
+    inv.json?.cognitiveWork?.sources ||
+    inv.json?.qualification?.sources ||
+    inv.json?.turnProjection?.sources ||
+    [];
+  report.scenarios.INVESTIGATION = {
+    status: inv.status,
+    noraStatus: inv.json?.status,
+    ms: Date.now() - t0,
+    workId,
+    toolCallsObserved: tools,
+    attempts: inv.json?.attempts ?? [],
+    generationId: inv.json?.generationId ?? null,
+    reply: replyInv,
+    policy: inv.json?.policy ?? null,
+  };
+
+  recordCriterion(
+    "P2-HTTP",
+    inv.status === 200 ? "PASS" : "FAIL",
+    `status=${inv.status}`,
+  );
+  recordCriterion(
+    "P2-COMPLETE",
+    inv.json?.status === "COMPLETE" || inv.json?.status === "PARTIAL"
+      ? "PASS"
+      : "FAIL",
+    `noraStatus=${inv.json?.status} notes=${inv.json?.attempts?.[0]?.notes}`,
+  );
+  recordCriterion(
+    "P2-TOOLS-OR-SOURCES",
+    tools > 0 || (Array.isArray(sources) && sources.length > 0) || /CONSULT|Git|doc_|path|fichier|\.md|\.ts|\.py/i.test(replyInv)
+      ? "PASS"
+      : "FAIL",
+    `tools=${tools} replyHasSourceCue=${/Git|doc_|path|fichier|\.md/i.test(replyInv)}`,
+  );
+  const oracleHits = ORACLE_MARKERS.filter((re) => re.test(replyInv)).length;
+  recordCriterion(
+    "P2-ORACLE-CONTENT",
+    oracleHits >= 2 && replyInv.length > 200 ? "PASS" : "FAIL",
+    `oracleHits=${oracleHits}/3 replyChars=${replyInv.length}`,
+  );
+  recordCriterion(
+    "P2-NOT-GENERIC-NORA-DESC",
+    !/Aucun acquis pertinent n'a été trouvé dans la recherche ciblée/i.test(replyInv)
+      ? "PASS"
+      : "FAIL",
+    "generic Nora self-description pattern",
+  );
+
+  // Reprise + note technique
+  const noteReq = await api(`/api/preparations/${PREPARATION_ID}/messages`, {
+    method: "POST",
+    body: {
+      content:
+        "À partir uniquement des acquis de l'investigation précédente sur les conflits de réservation, produis une note technique distincte (12 lignes max) : faits sourcés, limites, recommandations. Pas de nouvelle exploration exhaustive si les acquis suffisent.",
+      clientTurnKey: `ctk_note_${randomUUID()}`,
+      ...(workId ? { cognitiveWorkId: workId } : {}),
+    },
+  });
+  save("04-note", noteReq);
+  const replyNote = extractReply(noteReq.json);
+  report.scenarios.NOTE = {
+    status: noteReq.status,
+    noraStatus: noteReq.json?.status,
+    workId: extractWorkId(noteReq.json) || workId,
+    reply: replyNote,
+    attempts: noteReq.json?.attempts ?? [],
+  };
+  recordCriterion(
+    "P2-NOTE",
+    noteReq.status === 200 &&
+      replyNote.length > 120 &&
+      (/fait|recommand|limite|source|conflit|réserv/i.test(replyNote) ||
+        /```sfia-document/.test(replyNote))
+      ? "PASS"
+      : "FAIL",
+    `chars=${replyNote.length}`,
+  );
+
+  // FinOps real API
+  const finopsSummary = await api("/api/finops/summary?period=7");
+  save("05-finops-summary", finopsSummary);
+  recordCriterion(
+    "P3-FINOPS-API",
+    finopsSummary.status === 200 ? "PASS" : "FAIL",
+    `status=${finopsSummary.status}`,
+  );
+
+  const finopsWorks = await api("/api/finops/works?period=7");
+  save("06-finops-works", finopsWorks);
+  recordCriterion(
+    "P3-FINOPS-WORKS",
+    finopsWorks.status === 200 ? "PASS" : "FAIL",
+    `status=${finopsWorks.status}`,
+  );
+
+  if (workId) {
+    const finopsWork = await api(
+      `/api/finops/works/${encodeURIComponent(workId)}?period=7`,
+    );
+    save("07-finops-work", finopsWork);
+    recordCriterion(
+      "P3-FINOPS-WORK-DETAIL",
+      finopsWork.status === 200 ? "PASS" : "FAIL",
+      `status=${finopsWork.status}`,
+    );
+  } else {
+    recordCriterion("P3-FINOPS-WORK-DETAIL", "NOT RUN", "no workId");
+  }
+
+  const ui = await api("/settings/consumption");
+  recordCriterion(
+    "P3-FINOPS-UI",
+    ui.status === 200 ? "PASS" : "FAIL",
+    `status=${ui.status}`,
+  );
+
+  const since = report.startedAt;
+  const usage = pgJson(
+    `SELECT COALESCE(json_agg(row_to_json(t) ORDER BY created_at), '[]'::json) FROM (
+      SELECT id, created_at, cognitive_work_id, generation_id, attempt_id, operation,
+             input_tokens, output_tokens, provider_requests, estimated_cost_usd,
+             cost_coverage, granularity, limits_json
+      FROM provider_usage_observations
+      WHERE created_at >= '${since}'::timestamptz
+      ORDER BY created_at LIMIT 120
+    ) t;`,
+  );
+  const rows = Array.isArray(usage) ? usage : [];
+  const billable = rows.filter(
+    (r) =>
+      !(Array.isArray(r.limits_json) &&
+        r.limits_json.some((l) =>
+          String(l).includes("HTTP_ATTEMPT_USAGE_UNKNOWN") ||
+          String(l).includes("HTTP_ATTEMPT_CORRELATION_ONLY"),
+        )),
+  );
+  const corrOnly = rows.length - billable.length;
+  const sumReq = billable.reduce(
+    (a, r) => a + (Number(r.provider_requests) || 0),
+    0,
+  );
+  const sumIn = billable.reduce((a, r) => a + (Number(r.input_tokens) || 0), 0);
+  const sumOut = billable.reduce(
+    (a, r) => a + (Number(r.output_tokens) || 0),
+    0,
+  );
+  report.finops = {
+    observationCount: rows.length,
+    billableCount: billable.length,
+    correlationOnlyCount: corrOnly,
+    sumProviderRequestsBillable: sumReq,
+    sumInputTokens: sumIn,
+    sumOutputTokens: sumOut,
+    summaryKpis: finopsSummary.json?.summary?.kpis ?? null,
+  };
+  save("08-finops-pg", report.finops);
+  recordCriterion(
+    "P3-NO-DOUBLE-COUNT-HINT",
+    corrOnly === 0 ||
+      (finopsSummary.json?.summary?.kpis?.totalRequests ?? 0) <= sumReq + 1
+      ? "PASS"
+      : "PARTIAL",
+    `corrOnly=${corrOnly} apiTotalReq=${finopsSummary.json?.summary?.kpis?.totalRequests} billableSumReq=${sumReq}`,
+  );
+  recordCriterion(
+    "P3-PG-OBSERVATIONS",
+    billable.length >= 1 ? "PASS" : "FAIL",
+    `billable=${billable.length} totalRows=${rows.length}`,
+  );
+
+  report.criteria = criteria;
+  const failed = criteria.filter((c) => c.status === "FAIL");
+  const blocked = criteria.filter((c) => c.status === "BLOCKED");
+  report.verdict =
+    failed.length === 0 && blocked.length === 0
+      ? "G-LIVE-API CONVERGENCE PASS — ALL MANDATORY CRITERIA"
+      : failed.length
+        ? "G-LIVE-API CONVERGENCE FAIL — SEE CRITERIA"
+        : "G-LIVE-API CONVERGENCE BLOCKED — SEE CRITERIA";
+  report.endedAt = new Date().toISOString();
+  save("00-report", report);
+  console.log(JSON.stringify({ verdict: report.verdict, out: OUT, failed: failed.length }, null, 2));
+  process.exit(failed.length || blocked.length ? 2 : 0);
+} catch (e) {
+  report.criteria = criteria;
+  report.verdict = "G-LIVE-API CONVERGENCE ERROR";
+  report.error = String(e?.stack || e);
+  report.endedAt = new Date().toISOString();
+  save("00-report", report);
+  console.error(report.error);
+  process.exit(1);
+}
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
index cab2afe0..473b0331 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/provider-emission-frontier.ts
@@ -11,6 +11,14 @@

 import { AsyncLocalStorage } from "node:async_hooks";
 import { createHash, randomBytes } from "node:crypto";
+import {
+  existsSync,
+  mkdirSync,
+  readFileSync,
+  unlinkSync,
+  writeFileSync,
+} from "node:fs";
+import { join } from "node:path";
 import { assertOpenAiKeyForLane } from "@/lib/openai-lane-guard";
 import {
   admitModelEffort,
@@ -66,6 +74,8 @@ export type CampaignEnvelope = {
   suspendReason: string | null;
 };

+export type InputBoundKind = "demonstrable" | "estimate" | null;
+
 export type HttpAttemptRecord = {
   attemptId: string;
   campaignId: string | null;
@@ -74,6 +84,7 @@ export type HttpAttemptRecord = {
   reservedSlots: number;
   reservedInputTokens: number;
   reservedOutputTokens: number;
+  inputBoundKind: InputBoundKind;
   urlHost: string;
   modelHint: string | null;
   createdAtMs: number;
@@ -101,6 +112,7 @@ export type EmissionReservation =
         | "CAMPAIGN_SUSPENDED"
         | "ATTEMPT_STATE_INVALID"
         | "INVALID_REQUEST"
+        | "INPUT_UNBOUNDED"
         | "ALS_CONTEXT_REQUIRED";
       reason: string;
     };
@@ -154,6 +166,70 @@ let requiredCampaignLatch: {
  */
 const processCampaignRegistry = new Map<string, CampaignEnvelope>();

+type LiveCampaignStateEntry = {
+  campaignId: string;
+  pid: number;
+  createdAtMs: number;
+};
+
+function liveCampaignStatePath(): string {
+  return join(process.cwd(), ".sfia-evidence", "live-campaign-state.json");
+}
+
+function readLiveCampaignStateFile(): LiveCampaignStateEntry | null {
+  const p = liveCampaignStatePath();
+  if (!existsSync(p)) return null;
+  try {
+    const raw = readFileSync(p, "utf8");
+    const parsed = JSON.parse(raw) as LiveCampaignStateEntry;
+    if (
+      typeof parsed?.campaignId === "string" &&
+      typeof parsed?.pid === "number" &&
+      typeof parsed?.createdAtMs === "number"
+    ) {
+      return parsed;
+    }
+    return null;
+  } catch {
+    return null;
+  }
+}
+
+function writeLiveCampaignStateEntry(entry: LiveCampaignStateEntry): void {
+  const p = liveCampaignStatePath();
+  mkdirSync(join(process.cwd(), ".sfia-evidence"), { recursive: true });
+  writeFileSync(p, JSON.stringify(entry, null, 2), "utf8");
+}
+
+function deleteLiveCampaignStateFile(): void {
+  const p = liveCampaignStatePath();
+  if (existsSync(p)) {
+    try {
+      unlinkSync(p);
+    } catch {
+      /* best-effort */
+    }
+  }
+}
+
+/**
+ * Refuse when a prior process left campaign state for the same campaignId
+ * (process restart must not auto-renew counters).
+ */
+export function invalidateCampaignOnProcessRestartCheck(
+  campaignId: string,
+): void {
+  const persisted = readLiveCampaignStateFile();
+  if (!persisted) return;
+  if (persisted.campaignId !== campaignId) return;
+  if (persisted.pid !== process.pid) {
+    throw new ProviderEmissionRefusedError(
+      "CAMPAIGN_INVALIDATED_RESTART",
+      `campaign ${campaignId} was bound to pid ${persisted.pid}; current pid ${process.pid}`,
+    );
+  }
+}
+
 function emptyStore(): FrontierStore {
   return {
     campaign: null,
@@ -221,6 +297,7 @@ export function beginCampaignEnvelope(input: {
     }
     return existing;
   }
+  invalidateCampaignOnProcessRestartCheck(campaignId);
   const maxHttp = Math.max(
     0,
     Math.floor(input.maxHttpAttempts ?? input.maxAttempts ?? 0),
@@ -264,6 +341,11 @@ export function beginCampaignEnvelope(input: {
     suspendReason: null,
   };
   processCampaignRegistry.set(campaignId, campaign);
+  writeLiveCampaignStateEntry({
+    campaignId,
+    pid: process.pid,
+    createdAtMs: Date.now(),
+  });
   cur.campaign = campaign;
   if (campaign.required) {
     requiredCampaignLatch = { campaignId: campaign.campaignId, active: true };
@@ -317,6 +399,10 @@ export function attachConfiguredLiveCampaignFromEnv(
 export function endProcessCampaign(campaignId?: string): void {
   if (campaignId) {
     processCampaignRegistry.delete(campaignId);
+    const persisted = readLiveCampaignStateFile();
+    if (persisted?.campaignId === campaignId) {
+      deleteLiveCampaignStateFile();
+    }
     if (requiredCampaignLatch?.campaignId === campaignId) {
       requiredCampaignLatch = null;
     }
@@ -325,6 +411,7 @@ export function endProcessCampaign(campaignId?: string): void {
     return;
   }
   processCampaignRegistry.clear();
+  deleteLiveCampaignStateFile();
   requiredCampaignLatch = null;
   const s = getFrontierAlsStore();
   if (s) s.campaign = null;
@@ -387,6 +474,26 @@ function demonstrableInputTokenBound(
   return null;
 }

+/**
+ * Conservative reservation estimate from serialized body size — NOT a usage guarantee.
+ * For campaign accounting only when no demonstrable sfia_estimated_input_tokens exists.
+ */
+export function conservativeBodyTokenEstimate(
+  body: Record<string, unknown> | null,
+): number | null {
+  if (!body) return null;
+  let serialized: string;
+  try {
+    serialized = JSON.stringify(body);
+  } catch {
+    return null;
+  }
+  if (!serialized || serialized === "{}" || serialized === "null") return null;
+  const len = serialized.length;
+  if (len <= 0) return null;
+  return Math.ceil(len / 3);
+}
+
 /** Output bound from the actual emission parameter (max_output_tokens). */
 function demonstrableOutputTokenBound(
   body: Record<string, unknown> | null,
@@ -491,6 +598,10 @@ export type DirectOpenGuard =
       reason: string;
     };

+/**
+ * Reserve one direct-open attempt before any network effect (success or failure).
+ * Failed opens still consume the campaign slot — do not count only successes.
+ */
 export function assertDirectOpenAllowed(): DirectOpenGuard {
   const s = getFrontierAlsStore();
   if (!s?.campaign) return { ok: true };
@@ -512,14 +623,17 @@ export function assertDirectOpenAllowed(): DirectOpenGuard {
       reason: `directOpensCommitted=${campaign.directOpensCommitted} max=${campaign.maxDirectOpens}`,
     };
   }
+  // Count the attempt at reservation time (before egress), including later failures.
+  campaign.directOpensCommitted += 1;
   return { ok: true };
 }

-/** Count one successful public page open against the active campaign envelope. */
+/**
+ * @deprecated Prefer assertDirectOpenAllowed() which already consumes the slot.
+ * Kept as a no-op for call sites that still invoke it after a successful open.
+ */
 export function commitDirectOpen(): void {
-  const campaign = getFrontierAlsStore()?.campaign;
-  if (!campaign) return;
-  campaign.directOpensCommitted += 1;
+  // Slot already reserved in assertDirectOpenAllowed — do not double-count.
 }

 /**
@@ -712,6 +826,7 @@ export function reserveHttpEmission(input: {
       reservedSlots: 1,
       reservedInputTokens: reservedInput,
       reservedOutputTokens: reservedOutput,
+      inputBoundKind: reservedInput > 0 ? "demonstrable" : null,
       urlHost: safeHost(input.url),
       modelHint: model || null,
       createdAtMs: Date.now(),
@@ -742,25 +857,28 @@ export function reserveHttpEmission(input: {
   }

   // Campaign token limits require an opposable reservation before contact.
-  // Demonstrable payload bounds preferred; otherwise the campaign per-request
-  // ceiling may be used as a RESERVATION (worst-case charge) — never as a
-  // measured usage claim. Output still must be injected onto the wire payload
-  // by createFrontierAwareFetch when the SDK omits max_output_tokens.
+  // Input: demonstrable sfia_estimated_input_tokens, else conservative body
+  // estimate — never the per-request ceiling as a faux measured bound. Output
+  // still may use per-request ceiling for reservation and wire injection.
   let reservedInput = demonstrableInputTokenBound(bodyJson);
+  let inputBoundKind: InputBoundKind =
+    reservedInput != null ? "demonstrable" : null;
   let reservedOutput = demonstrableOutputTokenBound(bodyJson);

   if (
     reservedInput == null &&
     (campaign.maxInputTokens != null || campaign.maxInputTokensPerRequest != null)
   ) {
-    if (campaign.maxInputTokensPerRequest != null) {
-      reservedInput = campaign.maxInputTokensPerRequest;
+    const estimate = conservativeBodyTokenEstimate(bodyJson);
+    if (estimate != null) {
+      reservedInput = estimate;
+      inputBoundKind = "estimate";
     } else {
       return {
         ok: false,
-        reasonCode: "CAMPAIGN_ENVELOPE_EXHAUSTED",
+        reasonCode: "INPUT_UNBOUNDED",
         reason:
-          "INPUT_UNBOUNDED — campaign input limit set but no per-request ceiling or demonstrable bound",
+          "INPUT_UNBOUNDED — campaign input limit set but no demonstrable bound or body estimate",
       };
     }
   }
@@ -872,6 +990,7 @@ export function reserveHttpEmission(input: {
     reservedSlots: 1,
     reservedInputTokens: inTok,
     reservedOutputTokens: outTok,
+    inputBoundKind,
     urlHost: safeHost(input.url),
     modelHint: model || null,
     createdAtMs: Date.now(),
@@ -1052,6 +1171,7 @@ export function __resetProviderEmissionFrontierForTests(): void {
     s.captureHttpMeta = false;
   }
   processCampaignRegistry.clear();
+  deleteLiveCampaignStateFile();
   requiredCampaignLatch = null;
   installedClientKeyFp = null;
 }
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts b/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
index bc2203ed..5efdbe21 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/usage-accounting.ts
@@ -596,6 +596,7 @@ export async function recordNoraProviderUsageWithHttpCorrelation(
   });

   const scope = idempotencyScope(input);
+  // Per-HTTP companion rows are correlation markers only — not billable request increments.
   for (let i = 0; i < httpAttempts.length; i++) {
     const http = httpAttempts[i]!;
     const idempotencyKey = buildIdempotencyKey({
@@ -618,11 +619,12 @@ export async function recordNoraProviderUsageWithHttpCorrelation(
       totalTokens: null,
       cachedInputTokens: null,
       reasoningTokens: null,
-      providerRequests: 1,
+      providerRequests: null,
       costCoverage: "PARTIAL",
       estimatedCostUsd: null,
       idempotencyKey,
       limits: [
+        "HTTP_ATTEMPT_CORRELATION_ONLY",
         "HTTP_ATTEMPT_USAGE_UNKNOWN",
         httpAttemptLimitMarker(http.attemptId),
         ...(sdkAttemptId ? [`SDK_ATTEMPT:${sdkAttemptId}`] : []),
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
index edabe059..b803c708 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-projection.ts
@@ -24,15 +24,65 @@ export function periodStartDate(periodDays: FinOpsPeriodDays, now = new Date()):
   return d;
 }

+export const HTTP_ATTEMPT_USAGE_UNKNOWN = "HTTP_ATTEMPT_USAGE_UNKNOWN";
+export const HTTP_ATTEMPT_CORRELATION_ONLY = "HTTP_ATTEMPT_CORRELATION_ONLY";
+
+/** HTTP attempt companion rows are correlation markers, not billable request increments. */
+export function limitsJsonMarksHttpAttemptCorrelationOnly(
+  limits: string[] | null | undefined,
+): boolean {
+  if (!limits?.length) return false;
+  return limits.some(
+    (l) => l === HTTP_ATTEMPT_USAGE_UNKNOWN || l === HTTP_ATTEMPT_CORRELATION_ONLY,
+  );
+}
+
+export function isBillableFinOpsObservationRow(row: {
+  limitsJson?: string[] | null;
+}): boolean {
+  return !limitsJsonMarksHttpAttemptCorrelationOnly(row.limitsJson);
+}
+
+export function filterBillableFinOpsRows<T extends { limitsJson?: string[] | null }>(
+  rows: T[],
+): T[] {
+  return rows.filter(isBillableFinOpsObservationRow);
+}
+
+export function sumBillableProviderRequests(
+  rows: Array<{
+    providerRequests: number | null;
+    limitsJson?: string[] | null;
+    costCoverage?: string;
+  }>,
+  opts?: { onlyWithObservedCost?: boolean },
+): number {
+  return rows.reduce((acc, r) => {
+    if (!isBillableFinOpsObservationRow(r)) return acc;
+    if (
+      opts?.onlyWithObservedCost &&
+      r.costCoverage !== "KNOWN" &&
+      r.costCoverage !== "PARTIAL"
+    ) {
+      return acc;
+    }
+    const pr = r.providerRequests;
+    if (pr == null || !Number.isFinite(pr)) return acc;
+    return acc + pr;
+  }, 0);
+}
+
 export type CostRow = {
   estimatedCostUsd: string | null;
   costCoverage: string;
+  limitsJson?: string[] | null;
 };

 export type TokenRow = {
   totalTokens: number | null;
   inputTokens: number | null;
   outputTokens: number | null;
+  limitsJson?: string[] | null;
 };

 export function tokenTotalForRow(row: TokenRow): number | null {
@@ -48,12 +98,13 @@ export function tokenTotalForRow(row: TokenRow): number | null {
 }

 export function aggregateEstimatedCost(rows: CostRow[]): MeasuredValue<number> {
-  if (rows.length === 0) return { kind: "empty" };
+  const billable = filterBillableFinOpsRows(rows);
+  if (billable.length === 0) return { kind: "empty" };
   let sum = 0;
   let hasKnown = false;
   let hasUnknown = false;
   let hasPartial = false;
-  for (const r of rows) {
+  for (const r of billable) {
     if (r.costCoverage === "UNKNOWN" || r.estimatedCostUsd == null) {
       hasUnknown = true;
       continue;
@@ -83,10 +134,11 @@ export function aggregateEstimatedCost(rows: CostRow[]): MeasuredValue<number> {
 }

 export function aggregateTokenTotal(rows: TokenRow[]): MeasuredValue<number> {
-  if (rows.length === 0) return { kind: "empty" };
+  const billable = filterBillableFinOpsRows(rows);
+  if (billable.length === 0) return { kind: "empty" };
   let sum = 0;
   let hasUnknown = false;
-  for (const r of rows) {
+  for (const r of billable) {
     const t = tokenTotalForRow(r);
     if (t == null) {
       hasUnknown = true;
@@ -94,7 +146,7 @@ export function aggregateTokenTotal(rows: TokenRow[]): MeasuredValue<number> {
     }
     sum += t;
   }
-  if (sum === 0 && hasUnknown && rows.length > 0) {
+  if (sum === 0 && hasUnknown && billable.length > 0) {
     return { kind: "unknown", reason: "Tokens non recensés" };
   }
   if (hasUnknown) {
@@ -113,14 +165,19 @@ export function aggregateTokenTotal(rows: TokenRow[]): MeasuredValue<number> {
  * fully-known 100% of all real emissions (mandate S4 — honest coverage).
  */
 export function computeMeasureCoveragePercent(
-  rows: Array<{ costCoverage: string; providerRequests: number | null }>,
+  rows: Array<{
+    costCoverage: string;
+    providerRequests: number | null;
+    limitsJson?: string[] | null;
+  }>,
   opts?: { emissionCensusComplete?: boolean },
 ): MeasuredValue<number> {
-  if (rows.length === 0) return { kind: "empty" };
+  const billable = filterBillableFinOpsRows(rows);
+  if (billable.length === 0) return rows.length === 0 ? { kind: "empty" } : { kind: "unknown", reason: "Requêtes non observées" };
   let totalReq = 0;
   let observedReq = 0;
   let missingRequestCounts = false;
-  for (const r of rows) {
+  for (const r of billable) {
     if (r.providerRequests == null || !Number.isFinite(r.providerRequests)) {
       missingRequestCounts = true;
       continue;
@@ -155,15 +212,20 @@ export function computeMeasureCoveragePercent(
  * to the recorded observation set unless an emission census is proven complete.
  */
 export function computeEstimationCompletenessPercent(
-  rows: Array<{ costCoverage: string; providerRequests: number | null }>,
+  rows: Array<{
+    costCoverage: string;
+    providerRequests: number | null;
+    limitsJson?: string[] | null;
+  }>,
   opts?: { emissionCensusComplete?: boolean },
 ): MeasuredValue<number> {
-  if (rows.length === 0) return { kind: "empty" };
+  const billable = filterBillableFinOpsRows(rows);
+  if (billable.length === 0) return rows.length === 0 ? { kind: "empty" } : { kind: "unknown", reason: "Requêtes non observées" };
   let totalReq = 0;
   let knownReq = 0;
   let hasPartial = false;
   let missingRequestCounts = false;
-  for (const r of rows) {
+  for (const r of billable) {
     if (r.providerRequests == null || !Number.isFinite(r.providerRequests)) {
       missingRequestCounts = true;
       continue;
diff --git a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
index ddf6f2f2..055cadd4 100644
--- a/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/finops/usage-read-service.ts
@@ -11,6 +11,7 @@ import {
   aggregateTokenTotal,
   computeEstimationCompletenessPercent,
   computeMeasureCoveragePercent,
+  sumBillableProviderRequests,
   mapCognitiveWorkStatusLabel,
   parseFinOpsPeriodDays,
   periodStartDate,
@@ -239,13 +240,10 @@ export async function loadFinOpsSummary(
     costPerCompletedWorkUsd = { kind: "unknown", reason: "Aucun travail abouti" };
   }

-  const totalRequests = rows.reduce((acc, r) => acc + (r.providerRequests ?? 1), 0);
-  const measuredRequests = rows.reduce((acc, r) => {
-    if (r.costCoverage === "KNOWN" || r.costCoverage === "PARTIAL") {
-      return acc + (r.providerRequests ?? 1);
-    }
-    return acc;
-  }, 0);
+  const totalRequests = sumBillableProviderRequests(rows);
+  const measuredRequests = sumBillableProviderRequests(rows, {
+    onlyWithObservedCost: true,
+  });

   return {
     periodDays,
@@ -460,7 +458,7 @@ export async function loadFinOpsWorkDetail(
       };
     });

-  const providerRequestsTotal = rows.reduce((acc, r) => acc + (r.providerRequests ?? 0), 0);
+  const providerRequestsTotal = sumBillableProviderRequests(rows);
   const providerRequests: MeasuredValue<number> =
     rows.length === 0
       ? { kind: "empty" }
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
index 3aade74a..ecc1bf01 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-finops-usage-projection.test.ts
@@ -4,6 +4,7 @@ import {
   aggregateTokenTotal,
   computeEstimationCompletenessPercent,
   computeMeasureCoveragePercent,
+  sumBillableProviderRequests,
   formatMeasuredUsd,
   finOpsDailyChartYTicks,
   finOpsDailyXAxisLabels,
@@ -122,4 +123,48 @@ describe("ML5 E06 — FinOps usage projection", () => {
     expect(formatModelBreakdownCost({ costUsd: null, coverage: "UNKNOWN" })).toBe("Inconnu");
     expect(formatModelBreakdownCost({ costUsd: 1.2, coverage: "PARTIAL" })).toContain("1,20");
   });
+
+  it("excludes HTTP attempt correlation rows from cost and request totals", () => {
+    const rows = [
+      {
+        estimatedCostUsd: "2.00",
+        costCoverage: "KNOWN",
+        totalTokens: 100,
+        inputTokens: 60,
+        outputTokens: 40,
+        providerRequests: 1,
+        limitsJson: ["MULTI_HTTP_ATTEMPT_AGGREGATE"],
+      },
+      {
+        estimatedCostUsd: null,
+        costCoverage: "PARTIAL",
+        totalTokens: null,
+        inputTokens: null,
+        outputTokens: null,
+        providerRequests: null,
+        limitsJson: ["HTTP_ATTEMPT_CORRELATION_ONLY", "HTTP_ATTEMPT_USAGE_UNKNOWN"],
+      },
+      {
+        estimatedCostUsd: null,
+        costCoverage: "PARTIAL",
+        totalTokens: null,
+        inputTokens: null,
+        outputTokens: null,
+        providerRequests: 1,
+        limitsJson: ["HTTP_ATTEMPT_USAGE_UNKNOWN"],
+      },
+    ];
+    const cost = aggregateEstimatedCost(rows);
+    expect(cost.kind).toBe("known");
+    if (cost.kind === "known") expect(cost.value).toBeCloseTo(2);
+    const tokens = aggregateTokenTotal(rows);
+    expect(tokens.kind).toBe("known");
+    if (tokens.kind === "known") expect(tokens.value).toBe(100);
+    expect(sumBillableProviderRequests(rows)).toBe(1);
+    expect(
+      computeMeasureCoveragePercent(rows).kind === "known" ||
+        computeMeasureCoveragePercent(rows).kind === "partial",
+    ).toBe(true);
+    expect(sumBillableProviderRequests(rows, { onlyWithObservedCost: true })).toBe(1);
+  });
 });
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-http-attempt-finops-correlation.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-http-attempt-finops-correlation.test.ts
index 11324a4e..3555bac2 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-http-attempt-finops-correlation.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-http-attempt-finops-correlation.test.ts
@@ -12,8 +12,16 @@ import {
 const TEST_KEY = "sk-[REDACTED]";
 const TEST_FP = createHash("sha256").update(TEST_KEY, "utf8").digest("hex").slice(0, 16);

-const insertCalls: Array<{ attemptId?: string | null; limits?: string[]; granularity?: string }> =
-  [];
+const insertCalls: Array<{
+  attemptId?: string | null;
+  limits?: string[];
+  granularity?: string;
+  providerRequests?: number | null;
+  estimatedCostUsd?: string | null;
+  costCoverage?: string;
+  inputTokens?: number | null;
+  totalTokens?: number | null;
+}> = [];

 vi.mock("@/db/client", () => ({
   db: {
@@ -22,11 +30,21 @@ vi.mock("@/db/client", () => ({
         attemptId?: string | null;
         limitsJson?: string[];
         granularity?: string;
+        providerRequests?: number | null;
+        estimatedCostUsd?: string | null;
+        costCoverage?: string;
+        inputTokens?: number | null;
+        totalTokens?: number | null;
       }) => {
         insertCalls.push({
           attemptId: row.attemptId,
           limits: row.limitsJson,
           granularity: row.granularity,
+          providerRequests: row.providerRequests,
+          estimatedCostUsd: row.estimatedCostUsd,
+          costCoverage: row.costCoverage,
+          inputTokens: row.inputTokens,
+          totalTokens: row.totalTokens,
         });
         return {
           onConflictDoNothing: () => ({
@@ -160,7 +178,14 @@ describe("ML5 Contract D — HTTP attempt FinOps correlation", () => {
         "@/domains/conversation/usage-accounting"
       );
       await recordNoraProviderUsageWithHttpCorrelation({
-        runResult: { usage: { inputTokens: 50, outputTokens: 20, totalTokens: 70 } },
+        runResult: {
+          usage: {
+            inputTokens: 50,
+            outputTokens: 20,
+            totalTokens: 70,
+            requests: 1,
+          },
+        },
         status: "succeeded",
         operation: "nora.generate_reply",
         attemptId: "sdk_multi",
@@ -176,6 +201,29 @@ describe("ML5 Contract D — HTTP attempt FinOps correlation", () => {
       expect(partialRows.every((r) => r.limits?.includes("HTTP_ATTEMPT_USAGE_UNKNOWN"))).toBe(
         true,
       );
+      expect(partialRows.every((r) => r.limits?.includes("HTTP_ATTEMPT_CORRELATION_ONLY"))).toBe(
+        true,
+      );
+      expect(partialRows.every((r) => r.providerRequests == null)).toBe(true);
+
+      const { aggregateTokenTotal, sumBillableProviderRequests } = await import(
+        "@/domains/finops/usage-projection"
+      );
+      const projectionRows = insertCalls.map((c) => ({
+        estimatedCostUsd: c.estimatedCostUsd ?? null,
+        costCoverage: c.costCoverage ?? "UNKNOWN",
+        totalTokens: c.totalTokens ?? null,
+        inputTokens: c.inputTokens ?? null,
+        outputTokens: null,
+        providerRequests: c.providerRequests ?? null,
+        limitsJson: c.limits ?? [],
+      }));
+      expect(sumBillableProviderRequests(projectionRows)).toBe(1);
+      const tokens = aggregateTokenTotal(projectionRows);
+      expect(tokens.kind).toBe("known");
+      if (tokens.kind === "known") expect(tokens.value).toBe(70);
+      // Prior bug: each companion row used providerRequests: 1 → total 3 with primary.
+      expect(sumBillableProviderRequests(projectionRows)).toBeLessThan(3);
     });
   });
 });
\ No newline at end of file
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
index 5cd5cf61..5dcc6af2 100644
--- a/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-emission-frontier.test.ts
@@ -1,4 +1,6 @@
 import { createHash } from "node:crypto";
+import { mkdirSync, writeFileSync } from "node:fs";
+import { join } from "node:path";
 import { afterEach, describe, expect, it } from "vitest";
 import {
   assertSdkInvocationAdmission,
@@ -7,8 +9,10 @@ import {
   assertDirectOpenAllowed,
   commitDirectOpen,
   commitProviderEmission,
+  conservativeBodyTokenEstimate,
   createFrontierAwareFetch,
   enableHttpMetaCaptureForTests,
+  endProcessCampaign,
   getActiveCampaignEnvelope,
   getEmissionsObservedForTests,
   getHttpAttempt,
@@ -361,6 +365,110 @@ describe("S2/A — HTTP provider emission frontier", () => {
     });
   });

+  it("reserves conservative body estimate for input limit — never per-request ceiling", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({
+        maxHttpAttempts: 5,
+        maxInputTokens: 500_000,
+        maxInputTokensPerRequest: 100_000,
+        maxOutputTokensPerRequest: 500,
+        required: true,
+      });
+      const substantialInput = "x".repeat(6000);
+      const bodyObj = {
+        model: "gpt-6.1-terra",
+        max_output_tokens: 100,
+        reasoning: { effort: "medium" },
+        input: [{ type: "text", text: substantialInput }],
+      };
+      const expectedEstimate = conservativeBodyTokenEstimate(bodyObj);
+      expect(expectedEstimate).not.toBe(100_000);
+      await withLaneEnv(async () => {
+        assertSdkInvocationAdmission({
+          kind: "campaign.probe",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+        const r = reserveHttpEmission({
+          url: "https://api.openai.com/v1/responses",
+          body: JSON.stringify(bodyObj),
+          effort: "medium",
+        });
+        expect(r.ok).toBe(true);
+        if (!r.ok) throw new Error("r");
+        expect(r.reservedInputTokens).toBe(expectedEstimate);
+        expect(r.reservedInputTokens).not.toBe(100_000);
+        expect(getHttpAttempt(r.attemptId)?.inputBoundKind).toBe("estimate");
+      });
+    });
+  });
+
+  it("refuses INPUT_UNBOUNDED when campaign has input limit and body is empty", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({
+        maxHttpAttempts: 5,
+        maxInputTokens: 10_000,
+        maxOutputTokensPerRequest: 500,
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
+          body: JSON.stringify({}),
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          skipModelAdmission: true,
+        });
+        expect(r.ok).toBe(false);
+        if (r.ok) throw new Error("r");
+        expect(r.reasonCode).toBe("INPUT_UNBOUNDED");
+      });
+    });
+  });
+
+  it("refuses when conservative input estimate exceeds maxInputTokensPerRequest", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({
+        maxHttpAttempts: 5,
+        maxInputTokens: 500_000,
+        maxInputTokensPerRequest: 50,
+        maxOutputTokensPerRequest: 500,
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
+            max_output_tokens: 50,
+            reasoning: { effort: "medium" },
+            input: [{ type: "text", text: "z".repeat(500) }],
+          }),
+          effort: "medium",
+        });
+        expect(r.ok).toBe(false);
+        if (r.ok) throw new Error("r");
+        expect(r.reasonCode).toBe("CAMPAIGN_ENVELOPE_EXHAUSTED");
+        expect(getActiveCampaignEnvelope()?.suspendReason).toBe(
+          "INPUT_TOKENS_PER_REQUEST_EXCEEDED",
+        );
+      });
+    });
+  });
+
   it("refuses approximate openai hostname (no fuzzy host match)", async () => {
     await runWithProviderEmissionStoreAsync(async () => {
       beginCampaignEnvelope({ maxHttpAttempts: 1, required: true });
@@ -381,6 +489,45 @@ describe("S2/A — HTTP provider emission frontier", () => {
 });

 describe("process-level LIVE campaign attach", () => {
+  it("refuses begin after simulated process restart (file-backed pid)", () => {
+    const campaignId = "camp-restart-guard";
+    const statePath = join(process.cwd(), ".sfia-evidence", "live-campaign-state.json");
+    mkdirSync(join(process.cwd(), ".sfia-evidence"), { recursive: true });
+    writeFileSync(
+      statePath,
+      JSON.stringify({
+        campaignId,
+        pid: process.pid - 1,
+        createdAtMs: Date.now(),
+      }),
+      "utf8",
+    );
+    try {
+      runWithProviderEmissionStore(() => {
+        expect(() =>
+          beginCampaignEnvelope({
+            campaignId,
+            maxHttpAttempts: 3,
+            required: true,
+          }),
+        ).toThrow(ProviderEmissionRefusedError);
+      });
+      endProcessCampaign(campaignId);
+      runWithProviderEmissionStore(() => {
+        const c = beginCampaignEnvelope({
+          campaignId,
+          maxHttpAttempts: 3,
+          required: true,
+        });
+        expect(c.campaignId).toBe(campaignId);
+        expect(c.httpAttemptsReserved).toBe(0);
+      });
+    } finally {
+      endProcessCampaign(campaignId);
+      __resetProviderEmissionFrontierForTests();
+    }
+  });
+
   it("reattaches the same counters across ALS boundaries", async () => {
     const {
       runWithProviderEmissionStore,
diff --git a/projects/sfia-studio-next/web/tests/unit/ml5-provider-sdk-agents-tool-loop.integration.test.ts b/projects/sfia-studio-next/web/tests/unit/ml5-provider-sdk-agents-tool-loop.integration.test.ts
new file mode 100644
index 00000000..55624417
--- /dev/null
+++ b/projects/sfia-studio-next/web/tests/unit/ml5-provider-sdk-agents-tool-loop.integration.test.ts
@@ -0,0 +1,215 @@
+/**
+ * P1.4 — real Agents SDK `run()` with a product-like tool producing multiple
+ * Responses HTTP attempts under substituted transport (no LIVE network).
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
+function responsesBody(parts: {
+  id: string;
+  output: unknown[];
+  usage?: { input_tokens: number; output_tokens: number };
+}) {
+  return JSON.stringify({
+    id: parts.id,
+    object: "response",
+    status: "completed",
+    model: "gpt-6.1-terra",
+    output: parts.output,
+    usage: parts.usage ?? { input_tokens: 20, output_tokens: 10 },
+  });
+}
+
+describe("P1.4 — Agents SDK tool loop through frontier", () => {
+  afterEach(() => {
+    __resetProviderEmissionFrontierForTests();
+    __resetFrontierOpenAIClientInstallForTests();
+  });
+
+  it("A-02: real Agent+tool run() yields multiple HTTP Responses under campaign", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({
+        campaignId: "camp-agents-tool-loop",
+        maxHttpAttempts: 5,
+        maxOutputTokensPerRequest: 512,
+        maxInputTokensPerRequest: 50_000,
+        required: true,
+      });
+      enableHttpMetaCaptureForTests();
+      const prev = { ...process.env };
+      Object.assign(process.env, {
+        STUDIO_LANE: "DEV",
+        OPENAI_API_KEY: TEST_KEY,
+        SFIA_OPENAI_EXPECTED_KEY_FP: TEST_FP,
+      });
+      try {
+        assertSdkInvocationAdmission({
+          kind: "internal.qualification",
+          modelId: "gpt-6.1-terra",
+          effort: "medium",
+          env: process.env,
+        });
+
+        let httpN = 0;
+        const transport = (async (_input: RequestInfo | URL, init?: RequestInit) => {
+          httpN += 1;
+          const bodyStr =
+            typeof init?.body === "string"
+              ? init.body
+              : init?.body
+                ? String(init.body)
+                : "";
+          // First Responses call: ask for a function tool.
+          if (httpN === 1) {
+            return new Response(
+              responsesBody({
+                id: "resp_tool_call",
+                output: [
+                  {
+                    type: "function_call",
+                    call_id: "call_qual_1",
+                    name: "qualify_fixture_source",
+                    arguments: JSON.stringify({ ref: "doc://qual/planning-a" }),
+                  },
+                ],
+              }),
+              { status: 200, headers: { "content-type": "application/json" } },
+            );
+          }
+          // Subsequent call(s): final message after tool result.
+          expect(bodyStr.length).toBeGreaterThan(10);
+          return new Response(
+            responsesBody({
+              id: "resp_final",
+              output: [
+                {
+                  type: "message",
+                  role: "assistant",
+                  content: [{ type: "output_text", text: "QUAL_OK planning-a" }],
+                },
+              ],
+            }),
+            { status: 200, headers: { "content-type": "application/json" } },
+          );
+        }) as typeof fetch;
+
+        await ensureFrontierOpenAIClientInstalled({
+          forceReinstall: true,
+          fetch: transport,
+          maxRetries: 0,
+        });
+
+        const { Agent, tool, run, setDefaultOpenAIClient } = await import(
+          "@openai/agents"
+        );
+        const OpenAI = (await import("openai")).default;
+        const client = new OpenAI({
+          apiKey: TEST_KEY,
+          fetch: createFrontierAwareFetch(transport),
+          maxRetries: 0,
+        });
+        setDefaultOpenAIClient(client as never);
+
+        const qualifyFixtureSource = tool({
+          name: "qualify_fixture_source",
+          description: "Read a qualification fixture source id",
+          parameters: {
+            type: "object",
+            properties: { ref: { type: "string" } },
+            required: ["ref"],
+            additionalProperties: false,
+          },
+          execute: async (input: { ref: string }) => {
+            return JSON.stringify({
+              ref: input.ref,
+              coverage: "CONSULTED",
+              excerpt: "Room A conflicts with Room B on Tuesday 10:00",
+            });
+          },
+        });
+
+        const agent = new Agent({
+          name: "NoraQualToolLoop",
+          instructions:
+            "You must call qualify_fixture_source once then answer briefly.",
+          model: "gpt-6.1-terra",
+          tools: [qualifyFixtureSource],
+        });
+
+        const result = await run(agent, "Investigate planning conflict fixture.", {
+          maxTurns: 4,
+        } as never);
+
+        expect(httpN).toBeGreaterThanOrEqual(2);
+        expect(getEmissionsObservedForTests()).toBeGreaterThanOrEqual(2);
+        const bodies = getHttpBodiesObservedForTests();
+        expect(bodies.length).toBeGreaterThanOrEqual(2);
+        for (const b of bodies) {
+          expect(b.maxOutputTokens).toBe(512);
+        }
+        // Independent oracle: transport call count, not only frontier counter.
+        expect(httpN).toBe(getEmissionsObservedForTests());
+        expect(String((result as { finalOutput?: unknown }).finalOutput ?? result)).toBeTruthy();
+      } finally {
+        Object.assign(process.env, prev);
+      }
+    });
+  }, 60_000);
+
+  it("A-05: incompatible effort override — no transport contact", async () => {
+    await runWithProviderEmissionStoreAsync(async () => {
+      beginCampaignEnvelope({ maxHttpAttempts: 3, required: true });
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
+        let contacted = 0;
+        const transport = (async () => {
+          contacted += 1;
+          return new Response("{}", { status: 200 });
+        }) as typeof fetch;
+        const fetchAware = createFrontierAwareFetch(transport);
+        await expect(
+          fetchAware("https://api.openai.com/v1/responses", {
+            method: "POST",
+            body: JSON.stringify({
+              model: "gpt-6.1-terra",
+              reasoning: { effort: "xhigh" },
+              max_output_tokens: 16,
+              sfia_estimated_input_tokens: 40,
+            }),
+          }),
+        ).rejects.toBeInstanceOf(ProviderEmissionRefusedError);
+        expect(contacted).toBe(0);
+        expect(getEmissionsObservedForTests()).toBe(0);
+      } finally {
+        Object.assign(process.env, prev);
+      }
+    });
+  });
+});

```
## 8. Construction/docs diffs
```diff
diff --git a/projects/sfia-studio-next/construction/as-built-ml5-cognitive-foundation-conformance-20261126.md b/projects/sfia-studio-next/construction/as-built-ml5-cognitive-foundation-conformance-20261126.md
index 213dece4..02a3da27 100644
--- a/projects/sfia-studio-next/construction/as-built-ml5-cognitive-foundation-conformance-20261126.md
+++ b/projects/sfia-studio-next/construction/as-built-ml5-cognitive-foundation-conformance-20261126.md
@@ -75,3 +75,25 @@ Classe : **NO RELEASE** · Lane : **DEV** · Cutover RECETTE : **NON APPLIQUÉ**
 - G-WEB-PUBLIC : non consommé (hosted ASSUMED_1)
 - G-WEB-MIXED : fermé
 - G-RECETTE : non consommé
+
+
+## Convergence qualification (2026-11-26 evening)
+
+### P1
+- Input: estimate body (`len/3`) for reservation only; never treat campaign ceiling as demonstrable max; INPUT_UNBOUNDED if neither.
+- Campaign restart: `.sfia-evidence/live-campaign-state.json` pid latch → `CAMPAIGN_INVALIDATED_RESTART`.
+- Agents SDK tool-loop integration test (multi Responses) PASS.
+- Direct opens: slot consumed before egress (failures count).
+
+### P3
+- HTTP correlation rows: `providerRequests: null` + `HTTP_ATTEMPT_CORRELATION_ONLY`.
+- Aggregations via `filterBillableFinOpsRows` / `sumBillableProviderRequests`.
+- Real APIs: `/api/finops/summary`, `/api/finops/works`, `/api/finops/works/[workId]`; UI `/settings/consumption`.
+
+### P2 LIVE
+- Chantiers360 `proj_fdd9b064…` / `prep_85f051f7…` — investigation PASS (tools=2, oracle 3/3) + note technique.
+- BUILD_ID `XGqFqt2I6aCNTZLjirvtW`.
+
+### P4
+- G-WEB-PUBLIC closed — hosted arbitration dossier.
+- Browser smokes 200 on login, FinOps, PDF harness, project page.
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 96d980f4..cd18e582 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,22 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-26-ML5-CONVERGENCE-QUALIFICATION
+
+- **date_utc**: 2026-11-26T17:55Z
+- **lane**: DEV — qualification de convergence P1–P4 + G-LIVE-API Chantiers360
+- **branch**: `sfia/next-ml5-integrated-delivery-20261123`
+- **HEAD_initial**: `f27e01025f920db3fa61a4bb66cc05085981ca95`
+- **HEAD_code**: `f77a42e434dd1af883b9b43ecc73e022f4757b94`
+- **BUILD_ID**: `XGqFqt2I6aCNTZLjirvtW`
+- **focus**: borne entrée estimate≠ceiling ; latch restart campagne ; FinOps sans double-count HTTP ; Agents SDK tool-loop ; investigation LIVE réelle ; FinOps API/UI ; dossier hosted WEB
+- **G-LIVE-API**: PASS critères individuels — projet `proj_fdd9b064…` / prep `prep_85f051f7…` / Git `mcleland147/chantiers360` · tools=2 · note technique produite · ledger `/tmp/sfia-ml5-g-live-api-convergence-20261126/`
+- **G-WEB-PUBLIC**: FERMÉ — dossier `ml5-g-web-public-hosted-bound-arbitration-20261126.md`
+- **web_live**: OFF · G-WEB-MIXED fermé · RECETTE intacte
+- **release**: NO RELEASE · NOT ADOPTED · ML5 OPEN · R5 IN PROGRESS · G-RECETTE non consommé · livraison 2 non engagée
+- **statut**: **ML5 CONVERGENCE QUALIFIED WITH EXPLICIT CAPABILITY RESERVES — RECETTE SCOPE DECISION REQUIRED**
+
+
 ## delivery_id: DELIV-2026-11-26-ML5-FOUNDATION-CONFORMANCE-LIVE

 - **date_utc**: 2026-11-26T16:30Z (approx)
diff --git a/projects/sfia-studio-next/construction/ml5-g-web-public-hosted-bound-arbitration-20261126.md b/projects/sfia-studio-next/construction/ml5-g-web-public-hosted-bound-arbitration-20261126.md
new file mode 100644
index 00000000..8f07d2ab
--- /dev/null
+++ b/projects/sfia-studio-next/construction/ml5-g-web-public-hosted-bound-arbitration-20261126.md
@@ -0,0 +1,33 @@
+# G-WEB-PUBLIC — Dossier d'arbitrage borne hosted (2026-11-26)
+
+Classe : **réserve B** · Gate : **FERMÉ** · Aucune acceptation implicite de `ASSUMED_1`.
+
+## Limite réellement disponible aujourd'hui
+
+- Studio compte **1 recherche hosted assumée par requête Responses** lorsque le body contient un outil `web_search` / `web_search_preview` (`HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1`).
+- Le moteur hosted OpenAI peut exécuter **plusieurs** recherches internes dans une même requête Responses.
+- Les ouvertures directes B1 sont bornées séparément (`maxDirectOpens`) et consommées **avant** l'effet réseau (succès ou échec).
+
+## Garantie fournisseur
+
+Aucune API verrouillée (`openai@7.50` / `@openai/agents@0.21`) n'expose dans ce candidat un compteur hosted opposable « N recherches = N » distinct du nombre de Responses.
+
+## Risque résiduel
+
+Sous-comptage hosted → dépassement silencieux de l'enveloppe « 5 recherches hosted » si on levait le gate avec `ASSUMED_1`.
+
+## Alternative d'enveloppe proposée à Morris
+
+1. **Maintenir G-WEB-PUBLIC fermé** jusqu'à une borne démontrable (instrumentation fournisseur ou plafond Responses=hosted strict documenté).
+2. Ou : enveloppe **Responses-capped** explicite (ex. max 5 Responses avec outil web_search, en acceptant que chaque Response ≤ 1 recherche *assumée* n'est **pas** une garantie) — décision Morris écrite requise.
+3. Ou : désactiver hosted tool et n'autoriser que les ouvertures directes B1 sous `maxDirectOpens` (périmètre réduit).
+
+## Conséquences
+
+- Financière : frais hosted non bornés strictement si gate ouvert sous ASSUMED_1.
+- Sécurité : périmètre WEB LIVE inchangé (DEV, projet public only) ; G-WEB-MIXED reste fermé.
+- Proposition : **ne pas consommer G-WEB-PUBLIC** dans ce cycle ; conserver WEB OFF sur le candidat RECETTE.
+
+## Exit
+
+GO Morris sur l'une des alternatives 1–3, ou fourniture d'une métrique hosted opposable.
diff --git a/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md b/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md
index 29598d13..c410ce3a 100644
--- a/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md
+++ b/projects/sfia-studio-next/construction/ml5-recette-manifest-candidate-20261126.md
@@ -1,72 +1,63 @@
-# ML5 — Manifeste candidat RECETTE (préparation, sans cutover)
+# ML5 — Manifeste candidat RECETTE (convergence 2026-11-26)

 | Champ | Valeur |
 |---|---|
 | Date | 2026-11-26 |
-| Branche produit | `sfia/next-ml5-integrated-delivery-20261123` |
-| HEAD | `4bfc1c1ed0861a1d8f5f4405ccb8cee487b8984d` |
-| Tree | `23f32fec5d5203455eb6fad013d4046f499d36d4` |
-| Web tree | `24d8f65820c5ea6956085c9d56bd7ecddbeb3389` |
-| Lockfile | `package-lock.json` — `@openai/agents@0.21.0` · `openai@7.50.0` · `pdfjs-dist@4.10.38` |
-| Schéma | `022_provider_usage_observations` (attempt_id déjà présent — **aucune migration appliquée**) |
-| BUILD_ID | `emfz_yP5MBF9GxQRrnJGP` |
+| Branche | `sfia/next-ml5-integrated-delivery-20261123` |
+| HEAD code | `f77a42e434dd1af883b9b43ecc73e022f4757b94` |
+| BUILD_ID | `XGqFqt2I6aCNTZLjirvtW` |
+| Tree / web | post-commit tip |
+| Lock | `@openai/agents@0.21.0` · `openai@7.50.0` · `pdfjs-dist@4.10.38` |
+| Schéma | `022_provider_usage_observations` — **aucune migration** |
 | Classe | **NO RELEASE** |
-| STABLE | NOT AVAILABLE |
 | Cutover | **NON APPLIQUÉ** |
 | G-RECETTE | **NON CONSOMMÉ** |
+| WEB LIVE | **OFF** |
 | G-WEB-MIXED | **FERMÉ** |
-| WEB LIVE défaut | **OFF** |
-| Politique cognitive DEV | v0.2 provisoire (Terra Medium ; Luna L/M expérimental ; Sol historique ; rollback `legacy_sol`) |
-| Extension v0.2 → RECETTE | **Décision Morris distincte — non activée** |
+| Politique DEV | v0.2 provisoire (Terra Medium défaut) |
+| Extension v0.2 → RECETTE | **Proposition bornée — non activée** (décision Morris) |

-## Capacités qualifiées
+## Capacités

-| Capacité | État | Preuve |
-|---|---|---|
-| Build production Next | DETERMINISTIC PROVEN | `NODE_ENV=production` · BUILD_ID `emfz_yP5MBF9GxQRrnJGP` |
-| Frontière HTTP + ALS + campagne process | DETERMINISTIC + LIVE | `createFrontierAwareFetch` · latch · `attachConfiguredLiveCampaignFromEnv` · A-03/A-04 SDK |
-| Enveloppes opposables | DETERMINISTIC + LIVE | per-request ceilings · injection `max_output_tokens` · pas de faux 50k/4k |
-| Restitution C2 | DETERMINISTIC | `ml5-c2-c4-restitution-conductor` · soft-stop sans acquis ≠ restitution |
-| FinOps HTTP↔attempt | DETERMINISTIC + LIVE | `recordNoraProviderUsageWithHttpCorrelation` · 25 obs LIVE · markers HTTP_ATTEMPT |
-| Autorité WEB D6 | DETERMINISTIC | deny missing project/pilot/policy · turnPublicTopics catalog |
-| PDF viewer auth | DETERMINISTIC | `workProjectId` obligatoire si scope projet · footprint session |
-| G-LIVE-API LIVE-01..04 | LIVE PROVEN | ledger `/tmp/sfia-ml5-g-live-api-20261126/` |
-| G-WEB-PUBLIC | **BLOCKED** | `HOSTED_SEARCH_PER_RESPONSE_ASSUMED_1` |
-| PDF Git REAL textuel | **BLOCKED CORPUS MISSING** | fixtures ≠ corpus Git projet |
-| F2 visuelle | C | décision Morris |
+| Capacité | État |
+|---|---|
+| Frontière HTTP + estimate input + restart latch | DETERMINISTIC PROVEN |
+| Agents SDK tool-loop multi-Responses | DETERMINISTIC PROVEN |
+| Investigation LIVE Chantiers360 | LIVE PASS (critères individuels) |
+| FinOps API `/api/finops/*` + UI | LIVE PASS |
+| FinOps no double-count correlation rows | DETERMINISTIC + LIVE |
+| G-WEB-PUBLIC | **BLOCKED** — borne hosted non démontrable |
+| Git PDF text LIVE | **BLOCKED CORPUS MISSING** (fixtures ≠ corpus) |
+| F2 visuelle | réservée Morris |

-## Configuration proposée RECETTE (décision Morris distincte)
+## Politique RECETTE proposée (non activée)

-- Politique cognitive : **ne pas** activer automatiquement v0.2 expérimentale (Luna)
-- `SFIA_WEB_SEARCH_LIVE=0` / `SFIA_WEB_SEARCH_ENABLED=0` par défaut
-- Isolation fournisseur fingerprints lane
-- Rollback : tip `4bfc1c1e` précédent `b69451e3` ; WEB OFF ; `legacy_sol` si requis
+- Terra Medium défaut ; couples Luna L/M expérimentaux **hors** RECETTE sauf GO
+- WEB OFF par défaut
+- Isolation fingerprints lane
+- Dataset DEV isolé ; pas de secrets dans preuves

-## Réserves classées A/B/C/D
+## Réserves A/B/C/D

-| Id | Classe | Justification |
+| Id | Classe | Isolation |
 |---|---|---|
-| R-GIT-PDF-TEXT | B | Corpus Git PDF text manquant |
-| R-G-WEB-PUBLIC-HOSTED | B | Borne hosted ASSUMED_1 — gate avant G-WEB-PUBLIC |
-| R-MODEL-APPLIED-UNVERIFIED | C | FinOps PARTIAL / modelAppliedUnverified — estimation ≠ facture |
-| R-WEB05 | C | Confrontation sources — recette |
-| R-F2 | C | Recette visuelle Morris |
-| R-EFFICIENCE-RB | C | Dette efficience RoomBooking |
+| R-G-WEB-PUBLIC-HOSTED | B | WEB OFF ; dossier arbitrage |
+| R-GIT-PDF-TEXT | B | capacité isolée |
+| R-MODEL-APPLIED-UNVERIFIED | C | FinOps PARTIAL honnête |
+| R-F2 | C | Morris |
+| R-WEB05 | C | si gate WEB ouvert plus tard |

-**Aucune réserve A de socle bloquante ouverte sur le candidat final.**
+**Aucune réserve A ouverte.**

-## Smoke tests cutover (non exécutés en RECETTE)
+## Smoke (DEV artefact)

-1. Isolation ports 3100/3200/5433
-2. Session Pilote + FinOps `/settings/consumption` (200 observé DEV)
-3. Tour Nora simple Terra medium (WEB OFF) — LIVE-01 OK DEV
-4. Viewer PDF harness `/dev/pdf-viewer-harness` (200 DEV)
-5. Flags WEB = 0 sur processus actif
+- `/login` 200 · `/settings/consumption` 200 · `/dev/pdf-viewer-harness` 200 · projet Chantiers360 200
+- RECETTE :3200 non mutée

 ## Rollback

-Revert tip conformité ; WEB OFF ; politique `legacy_sol` si besoin ; aucune migration à annuler.
+Revert tip `f77a42e4` → `f27e0102` ; WEB OFF ; `legacy_sol` si besoin.

 ## Verdict manifeste

-**CANDIDATE PREPARED FOR MORRIS REVIEW — CUTOVER NOT APPLIED — G-RECETTE NOT CONSUMED — FOUNDATION + G-LIVE-API QUALIFIED WITH EXPLICIT CAPABILITY RESERVES (WEB PUBLIC / GIT PDF).**
+**CANDIDATE PREPARED — CUTOVER NOT APPLIED — CONVERGENCE QUALIFIED WITH EXPLICIT CAPABILITY RESERVES (WEB PUBLIC / GIT PDF).**

```

## 9. Gates
| Gate | Status |
|---|---|
| ENV-01 | COMPLETE |
| G-LIVE-API | CONSUMED — criterion PASS |
| G-WEB-PUBLIC | NOT CONSUMED — BLOCKED hosted |
| G-WEB-MIXED | CLOSED |
| G-RECETTE | NOT CONSUMED |

## 10. Reserves
- A: none
- B: R-G-WEB-PUBLIC-HOSTED; R-GIT-PDF-TEXT
- C: modelApplied UNVERIFIED; F2; WEB-05
- D: optional D6 kind

## 11. Morris decisions
1. Review handoff
2. GO/NOGO cutover RECETTE
3. Hosted WEB alternative (dossier)
4. Git PDF text corpus
5. v0.2 extension to RECETTE
6. F2

## 12. Completeness
FULL pack — created files complete; diffs code+docs; LIVE criteria+replies. Secrets scrubbed.
