# 07 — ExecutionContract, Attempt et agents

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
| **Document** | `07-execution-contract-attempt-and-agent-model.md` |

## ExecutionContract (F)

Statuts : draft → proposed → validated → confirmation_required → confirmed → executing → completed|failed|cancelled|superseded.
Invariants : MD Cursor = export G seulement · adaptateur ne mute pas · caps+authority+stops obligatoires · immutable après confirm · completed ⇒ résultats+preuves min · retry ⇒ Attempt distinct.

## ExecutionAttempt

Statuses : running · succeeded · failed · timeout · cancelled · partial.
timeout ≠ succès · partial ≠ completed par défaut.

## AgentCapability vs AgentAuthority

capability ≠ authority · manque = stop (`CAPABILITY_MISSING` / `AUTHORITY_DENIED`) · agent ne redéfinit pas le contrat.
