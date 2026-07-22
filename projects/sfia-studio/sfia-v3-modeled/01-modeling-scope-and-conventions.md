# 01 — Scope and modeling conventions

| Champ | Valeur |
|-------|--------|
| BCDI | BCDI-D1-PROJECT-FRAMING-MODEL |
| JSON Schema | **Draft-07** (ajv@6.15.0 local — Draft 2020-12 non supporté sans nouvelle dépendance) |

## 1. Périmètre inclus

Project framing : WorkspaceReference → Project → Trajectory → CycleInstance cadrage → GuidedSession → ContextSnapshot → DecisionRequest/Gate/HumanDecision → TransitionProposal → CycleReviewBundle → AuditEvents.

## 2. Hors périmètre (placeholders only)

ActionCandidate, ExecutionContract, Cursor execution, Evidence technique, ReleaseReview, CapitalizationReview, D2/D3.

## 3. Conventions

- `$id` : `https://sfia.local/schemas/v3-modeled/<area>/<name>.schema.json`
- `schemaVersion` : `0.1.0-d1` sur objets instance
- `additionalProperties`: false sauf `payload` events (documenté)
- IDs : string pattern `^[a-z][a-z0-9-]*-[a-z0-9-]+$` ou UUID v4 selon objet
- Dates : `date-time` RFC3339
- `doctrineVersion` : string (ex. `SFIA-v2.6` baseline ; `SFIA-v3.0-candidate` claim)
- `definitionDigests` : map path→sha256
- Exemples **non canoniques**
- TypeScript **non SoT**
- Propriétés `candidate*` marquées dans docs si incertitude

## 4. Canonicalité

| Format | Rôle |
|--------|------|
| Markdown (framing + modeled docs) | Pourquoi |
| JSON Schema + instances defs | Quoi (candidates) |
| SQL logique (doc 04) | État futur |
| examples/*.json | Illustrations |

## 5. Outils validation

ajv@6 dans `projects/sfia-studio/app/node_modules` — aucune install, aucun package.json modifié.
