# 11 — Isolation legacy, migration, cutover

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |
| **Document** | `11-legacy-isolation-migration-and-cutover-architecture.md` |

## Isolation OPS1

Option A ≠ OPS1. Pas de doctrine partagée · pas fallback · pas MethodMode · pas double write · pas présentation OPS1 comme v3 · historique read-only seulement si gate Morris · migration via anti-corruption adapter.

## Cutover v2.6 — préconditions (ne rien supprimer ici)

| Élément | Remplacement v3 | Preuve | Gate |
|---------|-----------------|--------|------|
| canonicalPaths | DoctrinePackage registry | tests resolve | Morris |
| sourceLoader | package loader | digest pin | Morris |
| contextResolver | CkcResolver + doctrine | no method/** | Morris |
| sessionContext | OA correlation | no MethodMode | Morris |
| MethodMode | removed from target | UI+API tests | Morris |
| method/** reads | removed | import boundary | Morris |
| badges v2.6 | removed | UI tests | Morris |
| OPS1 contracts hors legacy | ACL only | no cross-call | Morris |

Ordre candidate : T-A0…T-A6 puis T-A7 cutover.
