/** Recorded Increment E Morris CLOSE_SLICE artifact (read-only UI). */
export const incrementEClosureArtifact = {
  "uiStatus": "CLOSED_WITH_RESERVATIONS",
  "gatesConsumed": [
    "G-INCREMENT-E-FINAL-DECISION",
    "G-INCREMENT-E-CLOSE-SLICE",
    "G-INCREMENT-E-CYCLE-SUMMARY-CORRECTION"
  ],
  "gatesStillClosed": [
    "G-INCREMENT-E-STAGE",
    "G-INCREMENT-E-COMMIT",
    "G-INCREMENT-E-PUSH",
    "G-INCREMENT-E-PR",
    "G-INCREMENT-E-MERGE",
    "G-BRANCH-DELETE",
    "G-MVP-CLAIM",
    "G-PRODUCTION-CLAIM"
  ],
  "candidateSnapshot": {
    "verdictId": "verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386",
    "analysisRequestId": "anl-inc-e-live-retry-1784535443853",
    "status": "PARTIALLY_PROVED",
    "candidateOnly": true,
    "closureAuthorized": false,
    "morrisDecisionRequired": true,
    "proven": [
      "Increment D Cursor sandbox SUCCEEDED",
      "PR #233 merged to main a766eb3",
      "remoteGitWrites=0",
      "tests passed per pack: harnessPassed, appPassed, e2ePassed",
      "security check passed per pack: secretsScanPassed",
      "reportCompleteness and reviewPackCompleteness marked complete"
    ],
    "notProven": [
      "MVP readiness",
      "production readiness",
      "industrialised status",
      "Studio complete status",
      "Increment E completion",
      "Morris final decision"
    ],
    "gaps": [
      "No Morris decision recorded in the pack",
      "No evidenceReferences beyond pack sourceReferences were provided in the user pack payload",
      "Increment E work evidence is not present; pack evidence is for Increment D"
    ],
    "risks": [
      "Pack states closureAuthorized=false, so completion/closure cannot be inferred",
      "Candidate proof only; a higher-level decision is still required",
      "Remote Git writes were zero, so no evidence of remote write activity"
    ],
    "reservations": [
      "Sandbox Markdown proof succeeded",
      "Remote Git writes: 0",
      "Candidate proof only — Morris decision required",
      "Increment E / GPT analysis not authorized at D time"
    ],
    "evidenceReferences": [
      "cursor-execution-report",
      "increment-d-sandbox-proof",
      "pr-233-merge"
    ],
    "finOps": {
      "inputTokens": 989,
      "outputTokens": 449,
      "totalTokens": 1438,
      "estimatedCostEur": 0.001054,
      "callNumber": 1,
      "costIsEstimate": true,
      "phase": "analyse"
    }
  },
  "decision": {
    "schemaVersion": "morris-final-decision-1.0.0",
    "decisionId": "dec-inc-e-close-e68a8f96-b155-4117-86be-1ec798bd1e21",
    "verdictId": "verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386",
    "requestId": "req-inc-d-live-1784528437254",
    "correlationId": "corr-inc-d-live-1784528437254",
    "decidedBy": "Morris",
    "decidedAt": "2026-07-20T08:47:24.672742Z",
    "action": "CLOSE_SLICE",
    "rationale": "Le vertical slice POC A–E est techniquement démontré avec réserves. La clôture valide le parcours de preuve et la séparation des autorités, sans constituer un claim MVP, production-ready ou industrialisation.",
    "acceptedReservations": [
      "preuve POC locale",
      "remote=0/network=none ne constitue pas une sandbox OS forte",
      "une première observation GPT a été rejetée fail-closed avant correctif",
      "deux appels GPT live ont été consommés au total",
      "cursorMode fixture reste un champ de schéma S1 distinct du mode réel",
      "absence de CI GitHub obligatoire documentée sur certains incréments",
      "code Increment E encore non versionné"
    ],
    "unresolvedReservations": [
      "industrialisation",
      "sandbox système forte",
      "stratégie CI complète",
      "limites FinOps définitives",
      "validation MVP",
      "production readiness"
    ],
    "consequences": [
      "Autoriser la génération du CycleSummary",
      "Passer le vertical slice à CLOSED_WITH_RESERVATIONS",
      "Fermer le cycle fonctionnel A–E",
      "Conserver staging/commit/push/PR/merge sous gates séparés"
    ],
    "requiresNewGo": false,
    "closureAuthorized": true,
    "candidateClaimsAccepted": false,
    "mvpClaim": false,
    "productionReadyClaim": false
  },
  "summary": {
    "schemaVersion": "cycle-summary-1.0.0",
    "summaryId": "sum-inc-e-3ae7de0e-5667-47e4-b1c8-05b5f4bca91b",
    "previousSummaryId": "sum-inc-e-da024baf-87ff-4be7-ab33-e7203528330c",
    "requestId": "req-inc-d-live-1784528437254",
    "correlationId": "corr-inc-d-live-1784528437254",
    "verdictId": "verdict-inc-e-ea0c5de3-481d-48b0-b545-baa4314a9386",
    "decisionId": "dec-inc-e-close-e68a8f96-b155-4117-86be-1ec798bd1e21",
    "finalStatus": "CLOSED_WITH_RESERVATIONS",
    "morrisDecisionRecorded": true,
    "closureAuthorized": true,
    "markdownArtifact": "output.md",
    "executionEvidence": "exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c",
    "proven": [
      "Parcours A→E cohérent",
      "Quatre routes P0 conservées",
      "Studio reste un cockpit dérivé",
      "Harness reste l’autorité technique",
      "GPT produit uniquement des candidats",
      "Morris reste l’autorité de décision",
      "Qualification GPT réelle bornée",
      "Cursor réel exécuté après GO revalidé",
      "Analyse GPT réelle bornée",
      "Contrôles fail-closed fonctionnels",
      "Aucun retry automatique",
      "FinOps séparé",
      "Preuves et IDs corrélés",
      "Décision finale humaine",
      "Clôture slice-only",
      "Increment E completion (clôture fonctionnelle CLOSE_SLICE)",
      "Morris final decision enregistrée",
      "Increment D Cursor sandbox SUCCEEDED",
      "PR #233 merged to main a766eb3",
      "remoteGitWrites=0",
      "tests passed per pack: harnessPassed, appPassed, e2ePassed",
      "security check passed per pack: secretsScanPassed",
      "reportCompleteness and reviewPackCompleteness marked complete"
    ],
    "notProven": [
      "Environnement production",
      "Sandbox OS/réseau forte",
      "Fonctionnement multi-projet",
      "Orchestration industrielle",
      "Disponibilité et résilience de service",
      "Sécurité homologuée",
      "Scalabilité",
      "CI/CD complète",
      "MVP produit",
      "production readiness",
      "industrialisation",
      "Studio complete status",
      "MVP readiness",
      "industrialised status"
    ],
    "gaps": [
      "No evidenceReferences beyond pack sourceReferences were provided in the user pack payload",
      "Increment E work evidence is not present; pack evidence is for Increment D"
    ],
    "risks": [
      "Remote Git writes were zero, so no evidence of remote write activity"
    ],
    "reservations": [
      "industrialisation",
      "sandbox système forte",
      "stratégie CI complète",
      "limites FinOps définitives",
      "validation MVP",
      "production readiness"
    ],
    "unresolvedReservations": [
      "industrialisation",
      "sandbox système forte",
      "stratégie CI complète",
      "limites FinOps définitives",
      "validation MVP",
      "production readiness"
    ],
    "acceptedReservations": [
      "preuve POC locale",
      "remote=0/network=none ne constitue pas une sandbox OS forte",
      "une première observation GPT a été rejetée fail-closed avant correctif",
      "deux appels GPT live ont été consommés au total",
      "cursorMode fixture reste un champ de schéma S1 distinct du mode réel",
      "absence de CI GitHub obligatoire documentée sur certains incréments",
      "code Increment E encore non versionné"
    ],
    "resolvedByMorrisDecision": [
      "Morris final decision enregistrée",
      "Clôture fonctionnelle autorisée",
      "CycleSummary autorisé",
      "Vertical slice passé à CLOSED_WITH_RESERVATIONS",
      "Attente de décision Morris levée",
      "Aucune transformation en claim MVP ou production"
    ],
    "candidateSnapshot": {
      "status": "PARTIALLY_PROVED",
      "candidateOnly": true,
      "closureAuthorized": false,
      "morrisDecisionRequired": true,
      "notProven": [
        "MVP readiness",
        "production readiness",
        "industrialised status",
        "Studio complete status",
        "Increment E completion",
        "Morris final decision"
      ],
      "gaps": [
        "No Morris decision recorded in the pack",
        "No evidenceReferences beyond pack sourceReferences were provided in the user pack payload",
        "Increment E work evidence is not present; pack evidence is for Increment D"
      ],
      "risks": [
        "Pack states closureAuthorized=false, so completion/closure cannot be inferred",
        "Candidate proof only; a higher-level decision is still required",
        "Remote Git writes were zero, so no evidence of remote write activity"
      ],
      "reservations": [
        "Sandbox Markdown proof succeeded",
        "Remote Git writes: 0",
        "Candidate proof only — Morris decision required",
        "Increment E / GPT analysis not authorized at D time"
      ]
    },
    "historicalAnalysisContext": [
      "Le verdict GPT était candidat uniquement (candidateOnly=true)",
      "Au moment de l’analyse, MorrisFinalDecision n’existait pas",
      "closureAuthorized était false dans le candidat",
      "morrisDecisionRequired était true dans le candidat",
      "Statut candidat historique: PARTIALLY_PROVED"
    ],
    "finalState": {
      "finalStatus": "CLOSED_WITH_RESERVATIONS",
      "morrisDecisionRecorded": true,
      "closureAuthorized": true,
      "action": "CLOSE_SLICE",
      "awaitingMorrisDecision": false
    },
    "qualificationFinOps": {
      "calls": 0,
      "note": "qualification counter separate from analysis — unchanged by CLOSE_SLICE"
    },
    "analysisFinOps": {
      "calls": 1,
      "note": "analysis phase only — no new GPT call on CLOSE_SLICE"
    },
    "timestamps": {
      "decidedAt": "2026-07-20T08:47:24.672742Z",
      "summarizedAt": "2026-07-20T08:55:30.162Z"
    },
    "traceability": {
      "analysisRequestId": "anl-inc-e-live-retry-1784535443853",
      "executionId": "exec-inc-d-c9f0bec1-5755-40d5-8284-ad6b05597b7c",
      "contractId": "ctr-inc-d-live-001",
      "packHash": "c22e03ce555c1af37fc251d2399c618a3a7fabe803bde12de76123a73b9eeb1f",
      "increments": [
        "A",
        "B",
        "C",
        "D",
        "E"
      ],
      "trajectory": {
        "A": "Cockpit statique et mapping des dix états sur quatre vues",
        "B": "Liaison Studio ↔ harness en mode fixture, contrats, gates, journal et preuves",
        "C": "Qualification GPT réelle bornée, fail-closed et FinOps visible",
        "D": "Exécution Cursor réelle contrôlée dans une sandbox mono-fichier, STOP, timeout et rapport",
        "E": "Analyse GPT réelle du paquet de preuves, verdict candidat, décision finale Morris et clôture slice-only"
      }
    },
    "scope": "current-vertical-slice-only",
    "mvpClaim": false,
    "productionReadyClaim": false
  },
  "noGitAction": true,
  "noNewGptCall": true,
  "totalLiveGptCalls": 2,
  "cycleSummaryCorrection": true,
  "previousSummaryId": "sum-inc-e-da024baf-87ff-4be7-ab33-e7203528330c"
} as const;
