# 04 — Project / LPS et persistance

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |
| **Document** | `04-project-lps-and-persistence-architecture.md` |

## Comparaison stratégies LPS

| Stratégie | Complexité | Audit | Concurrence | Requête | Dette |
|-----------|------------|-------|-------------|---------|-------|
| Snapshot-only | Basse | Faible | Optimistic OK | Simple | Historique pauvre |
| Event sourcing complet | Haute | Excellent | Plus dur | Rebuild | Compétences |
| **Snapshot + event journal** | Moyenne | Fort | Optimistic + append | Bon | Recommandé |
| Document store seul | Moyenne | Moyen | Conflict doc | Flexible | Dual modèle |
| Relationnel seul | Moyenne | Moyen | TX locales | Fort | Mapping |

**Recommandation candidate (AT-OA-04) : snapshot LPS versionné + journal d’événements/audit append-only** (outbox in-process P0). Store relationnel local existant (SQLite) **candidat** pour metadata ; pas DATABASE SELECTED final.

## Exigences

Version optimiste · pas mutation silencieuse · Project stable · LPS versionné · projection UX · stale/conflict · replan · provenance.

## Volumétrie (hypothèses non validées)

| Hypothèse | Ordre de grandeur candidat |
|-----------|----------------------------|
| Projects actifs | dizaines → centaines |
| Mutations LPS / jour / project | < 50 |
| Profondeur historique retenue | 50–200 versions (rétention TBD) |
| Taille snapshot LPS | < 256 KB typique |
| Epistemic items / project | < 200 |
| Preuves metadata | < 500 refs |

**Inconnues U-M01** : volumes réels. Seuils : snapshot >1MB ou mutations >1k/j ⇒ revoir partitioning/event strategy.
