# 03 — Living Project State

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
| **Document** | `03-living-project-state-model.md` |
| **FA-OA-01** | LPS agrégat unique ownership C ; panneau = projection |

## Modèle

État courant + versions historiques. Statuts : `active` | `stale` | `conflict` | `superseded`.

Contenu : objective · context · scope · constraints · stakeholders · doctrinePackageRef · ckcResolutionRef · cycle · trajectory · epistemic · decisions · reservations · contradictions · evidence · debt · risks · maturity · nextStep · provenance.

## Invariants

1. Project `active` ⇒ DoctrinePackageRef `resolved`.
2. Mutation persistante ⇒ nouvelle version LPS.
3. Agent d’exécution ne mute pas le LPS directement.
4. Décision structurante ⇒ HumanDecision id.
5. Preuve seule ≠ promotion maturité.
6. `conflict` empêche écrasement silencieux.
7. `uiOwnership` toujours false.

Schema : `schemas/project/living-project-state.schema.json`.
