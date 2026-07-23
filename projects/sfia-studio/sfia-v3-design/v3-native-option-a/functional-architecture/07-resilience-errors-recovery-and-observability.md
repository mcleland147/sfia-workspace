# 07 — Résilience, reprise et observabilité

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `07-resilience-errors-recovery-and-observability.md` |

## 1. Stratégies par cas

| Cas | Stratégie | Dette/preuve |
|-----|-----------|--------------|
| DoctrinePackage indisponible | **stop** DOCTRINE_UNRESOLVED | pas fallback v2.6 |
| Contexte stale | refresh resolve · sinon stop | audit |
| CKC absent | synthetic intra-v3 · sinon CKC_UNAVAILABLE | FD-OA-04 |
| Contradiction ouverte | gate E · pas contrat | réserve LPS |
| Conflit version LPS | stop STATE_CONFLICT · reconcile | — |
| Confirmation expirée | renew CONFIRMATION_REQUIRED | — |
| Agent indisponible | cancel/retry autre agent capable | debt éventuelle |
| Capability/authority deny | refuse · escalate | — |
| Timeout / fail exec | failed + evidence · retry seulement si idempotent | pas rollback magique |
| Succès partiel | failed\|completed borné + réserve · compensation si prouvée | debt |
| Résultat sans preuve | EVIDENCE_INCOMPLETE | block completed claim |
| ReviewBundle incomplet | refuse closure claim | — |
| Replan required | Trajectory candidate + décision | F09 |

## 2. Observabilité — identifiants

correlationId · projectId · cycleInstanceId · doctrinePackageRef · ckcResolutionRef · lpsVersion · trajectoryVersion · decisionId · confirmationId · executionContractId · executionAttemptId · evidenceId · reviewBundleId · actor · timestamp · status · errorCode · provenance

## 3. Vues fonctionnelles

journal conversationnel (A) · décisionnel (E) · exécution (F/G) · preuve (H) · historique LPS (C) · trajectoire (D) · maturité (C/H)
