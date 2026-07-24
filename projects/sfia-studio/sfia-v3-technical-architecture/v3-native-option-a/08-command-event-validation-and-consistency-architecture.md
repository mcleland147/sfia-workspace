# 08 — Commandes, événements, validation, consistency

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |
| **Document** | `08-command-event-validation-and-consistency-architecture.md` |

## Validation à 2 niveaux

1. **Structurelle** — SchemaValidationPort (ajv Draft-07, schemas `0.1.0-oa` — non adoptés runtime tant que gate delivery)
2. **Sémantique** — SemanticValidationPort / policies domaine (ClaimEvaluator, confirmation expiry, immutabilité contrat, timeout≠success, Morris pour structurant, maturité)

Pas de moteur règles externe P0.

## Événements

| Catégorie | P0 | Futur |
|-----------|----|-------|
| Domaine / application | in-process + journal | outbox TX |
| Intégration | minimal | queue durable si besoin prouvé |
| Audit | append-only séparé | idempotent |

Ordering local par aggregateId · correlationId · retry idempotent · dead-letter futur. **Pas de broker externe P0** (ADR-OA-05).

## Consistency boundaries (extrait)

Create Project+LPS0 · LPS mutate (new version) · Decision record · Confirmation grant/consume · Contract confirm · Attempt create/result · Evidence attach · Review finalize · Claim evaluate · Maturity · Replan.
Chacune : optimistic lock · event · compensation limitée · fail-closed.
