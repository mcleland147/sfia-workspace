# Architecture technique — Option A v3-native

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |

## Objectif

Architecture technique cible pour intention → DoctrinePackage → CKC → Project/LPS → décision/N1–N3 → ExecutionContract → Attempt → Evidence/ReviewBundle/Claim → audit, sans implémenter le runtime.

## Index

| # | Fichier |
|---|---------|
| 01 | Principes & boundaries |
| 02 | Composants & containers |
| 03 | DoctrinePackage & knowledge resolution |
| 04 | Project/LPS & persistance |
| 05 | Cycle, trajectoire, décision, confirmation |
| 06 | ExecutionContract, agent, adaptateur |
| 07 | Evidence, Review, Claim, maturité |
| 08 | Commandes, événements, validation, consistency |
| 09 | Sécurité, privacy, authority |
| 10 | Résilience, perf, observabilité, RUN |
| 11 | Legacy isolation, migration, cutover |
| 12 | Delivery slices T-A0–T-A7 & gates |
| 13 | Decision pack AT-OA + ADR candidates |

## Recommandation style (candidate)

**Option C hybride** : modular monolith pour Project/LPS/Decision/Contract + exécution agent/Evidence asynchrone via ports — voir doc 01.

## Verdict

**SFIA STUDIO V3-NATIVE OPTION A TECHNICAL ARCHITECTURE DOCUMENTED — MORRIS VALIDATION REQUIRED**
