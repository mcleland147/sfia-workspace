# 01 — Principes techniques et boundaries

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |
| **Document** | `01-technical-principles-and-target-boundaries.md` |

## Principes (20+)

Doctrine v3 exclusive · DoctrinePackage autorité · pas de lecture runtime `method/**` · pas fallback v2.6 · pas MethodMode · Project ≠ Cycle · LPS versionné ownership C · Decision ≠ Confirmation · ExecutionContract natif · MD Cursor = adaptateur · capability ≠ authority · Evidence avant claim · ReviewBundle ≠ synthèse · fail-closed · audit/provenance · immutabilité post-confirm · idempotence · pas d’écrasement silencieux · OPS1 isolé · évolution progressive · modularité sans microservices prématurés · techno justifiée.

## Options de style

| Option | Description | Coût | Dette | RUN | Réversibilité |
|--------|-------------|------|-------|-----|---------------|
| **A Modular monolith** | Modules A–H, store partagé ownership logique, events in-process | Bas–moyen | Extraction future | Simple | Haute |
| **B Services distribués P0** | Services + stores + broker | Élevé | Transactions distribuées | Complexe | Faible |
| **C Hybride** | Monolithe cœur + ports async agent/Evidence | Moyen | Frontières propres | Modéré | Haute |

**Recommandation candidate (AT-OA-02) : Option C.**
Utile maintenant : oui (aligne SQLite/monolithe actuel). Microservices P0 non justifiés. Pas de broker externe P0. Extraction future possible via ports.

## Trust boundaries

UI/BFF · Application core · Domain · Infrastructure · Agent providers · Evidence blob store · Legacy OPS1 (ACL anti-corruption).
