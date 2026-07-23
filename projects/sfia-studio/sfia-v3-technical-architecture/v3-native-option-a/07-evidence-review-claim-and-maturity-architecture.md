# 07 — Evidence, Review, Claim, maturité

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |
| **Document** | `07-evidence-review-claim-and-maturity-architecture.md` |

## Evidence storage (comparaison)

| Option | Usage |
|--------|-------|
| Relationnel | metadata TX |
| Object/file store | blobs volumineux |
| Git | preuve publication, pas blob runtime primaire |
| **Hybride metadata+blob** | **recommandation candidate AT-OA-06** |

Digest obligatoire · secrets interdits · EvidenceRef dans agrégats · freshness · rétention TBD.

## ClaimEvaluator (complète R-M01)

Inputs : claim · subject · requiredEvidence · providedEvidence.
Outputs : accepted|rejected|insufficient · reservations · provenance.
Règles : synthèse≠complete · READY interdit si incomplete · stale signalé.

## Maturity

Service non auto-promoteur ; évaluation explicite + EvidenceRefs.
