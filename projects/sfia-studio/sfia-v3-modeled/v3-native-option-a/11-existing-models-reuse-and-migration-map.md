# 11 — Cartographie actifs existants

| Champ | Valeur |
|-------|--------|
| **Statut** | Modeled **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-modeled/v3-native-option-a` |
| **Gate consommé** | `GO ENRICHISSEMENT MODELED — SFIA STUDIO V3-NATIVE — OPTION A` |
| **UX** | UX-OA-01…12 **VALIDATED** |
| **FA / FD** | FA-OA-01…05 · FD-OA-01…06 **VALIDATED** |
| **schemaVersion** | `0.1.0-oa` |
| **JSON Schema** | Draft-07 |
| **Anti-claims** | Pas MODELED VALIDATED · Pas READY FOR AT/DELIVERY/IMPLEMENTATION · Pas SCHEMAS ADOPTED · Pas DB/RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma** | **Interdits** |
| **Document** | `11-existing-models-reuse-and-migration-map.md` |

| Actif existant | Qualification | Justification |
|----------------|---------------|---------------|
| `sfia-v3-modeled` D1 docs 01–10 | HISTORICAL-ONLY | Slice D1 framing ; baseline v2.6 claims |
| `schemas/project/project.schema.json` (D1) | REPLACE | MethodMode / doctrine v2.6 ; remplacé par OA Project |
| `schemas/decision/human-decision.schema.json` (D1) | REWORK | Pattern utile ; modèle OA distinct (options/authority) |
| `schemas/cycle/*` D1 | ADAPT | Concepts CycleInstance/Trajectory réutilisés sans GuidedSession obligatoire |
| `schemas/review/*` D1 | ADAPT | ReviewBundle élargi Evidence/completeness |
| `schemas/audit/audit-event.schema.json` | ADAPT | Append-only conservé |
| `schemas/common/*` D1 | ADAPT | Identifier/timestamp/actor répliqués en pack OA |
| examples D1 | HISTORICAL-ONLY | Non canoniques D1 |
| OPS1 ExecutionContract runtime | HISTORICAL-ONLY | Legacy gelé FA-OA-04 ; pas coexistence doctrinale |
| OPS1 gate / allowlists / journal | HISTORICAL-ONLY | Audit/historique seulement |
| SQLite Studio structures | HISTORICAL-ONLY | Dette runtime ; pas SoT modeled OA |
| MethodMode | REPLACE | Interdit Option A UX/model |
| sessionContext D1 | ADAPT | Corrélation conversationnelle future |
| validateurs ajv D1 | KEEP | Outil existant ; schemas OA séparés |
| conventions versioning Draft-07 | KEEP | Conservées `0.1.0-oa` |
