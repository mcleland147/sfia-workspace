# 03 — DoctrinePackage et résolution knowledge

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |
| **Document** | `03-doctrine-package-and-knowledge-resolution-architecture.md` |

## Autorité

DoctrinePackageManifest pin digest `sha256:` = racine d’autorité runtime Option A.

## Flux

publish (hors runtime) → registry → DoctrinePackageResolverPort → pin Ref sur Project/LPS → fail-closed si unresolved/stale/invalid.

## Cache / freshness

Cache lecture seule avec invalidation par digest/version. Freshness signalée ; stale bloque mutation structurante.

## CKC

CkcResolverPort : detailed | synthetic | absent. Fallback **intra-v3 only**. `executionAuthority=false`. Absent ≠ invention.

## Rôle Git

Source de **publication**/preuve possible ; **pas** datastore runtime obligatoire. Path local ≠ ID métier.

## Interdits

`method/**` · fallback v2.6 · DoctrinePackage implicite · MethodMode.
