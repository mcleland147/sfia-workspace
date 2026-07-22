# 07 — Slice D1 CycleReviewBundle model

## Règle

**MODIFIED CONTENT MUST BE RESOLVABLE AND VERIFIED**

Chaque ref : source · path/objectId · digest · accessibilityStatus · resolveCheck · verifyCheck · redaction · immutability.

## Structure

- ReviewManifest  
- ContextSnapshotReference  
- DeliverableReferences[]  
- ValidationResults  
- DecisionRequests[]  
- Reserves[]  
- HumanVerdict  
- AuditReferences[]  

## Lifecycle

DRAFT → SEALED → EXPORTED? → ARCHIVED

Sous baseline v2.6 : export Markdown handoff encore requis pour cycles Cursor ; pour D1 modeled, export optionnel tant que pas d’exécution Cursor.

## Contrôles par référence

| Contrôle | Exigence |
|----------|----------|
| Resolve | path ou objectId accessible depuis source déclarée |
| Verify | digest sha256 correspond au contenu résolu |
| Accessibility | `resolved` \| `missing` \| `redacted` \| `external-placeholder` |
| Redaction | pas de secret / PII dans bundle exporté |
| Immutability | après SEALED, payload + refs figés ; seul état → EXPORTED/ARCHIVED |

Schémas : `schemas/review/*` · exemple : `examples/cycle-review-bundle.example.json`.
