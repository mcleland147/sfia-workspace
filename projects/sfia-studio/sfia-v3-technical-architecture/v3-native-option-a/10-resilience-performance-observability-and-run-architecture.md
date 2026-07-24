# 10 — Résilience, performance, observabilité, RUN

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |
| **Document** | `10-resilience-performance-observability-and-run-architecture.md` |

## Résilience (fail-closed défaut)

Doctrine/CKC unavailable · LPS conflict · repo/Evidence/agent down · timeout · partial exec · audit write fail · schema/semantic fail · stale.
Retry/backoff bornés · pas fail-open sur décision/autorité/contrat/preuve.

## Performance (budgets candidats UX — non SLA)

Conversation first paint · LPS read/write · streaming · doctrine/CKC resolve · confirmation · exec start · Evidence upload · ReviewBundle build.
Chiffres à mesurer en delivery ; alertes futures.

## Observabilité

Logs structurés (correlationId, projectId, cycleInstanceId, contractId, attemptId, errorCode, actor).
Metrics : latences, conflits, doctrine/CKC fails, confirmations expirées, agent fails, Evidence/Review incomplete, claims rejected, retries.
Traces : conversation→décision→contrat→attempt→preuve→claim.
Audit ≠ logs ops · redaction.

## RUN conceptuel

Health/readiness · dependency status · schema compatibility · DoctrinePackage availability · backup/restore · retention · diagnostics · replay/reconciliation · feature flags bornés · rollback logique. Runbooks complets hors cycle.

## DevOps conceptuel

Validate schemas+semantic · contract tests · migrations versionnées futures · secrets · artifacts · supply chain · progressive rollout · rollback · **aucun pipeline modifié ici**.
