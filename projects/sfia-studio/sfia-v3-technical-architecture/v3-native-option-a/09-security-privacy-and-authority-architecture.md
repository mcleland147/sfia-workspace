# 09 — Sécurité, privacy, authority

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture technique **candidate** — validation Morris requise |
| **Pack** | `sfia-v3-technical-architecture/v3-native-option-a` |
| **Gate consommé** | `GO ARCHITECTURE TECHNIQUE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Modeled** | M-OA-01…12 **VALIDATED** |
| **UX / FA / FD** | UX-OA · FA-OA · FD-OA **VALIDATED** |
| **Anti-claims** | Pas ARCHITECTURE VALIDATED · Pas READY FOR DELIVERY · Pas READY FOR IMPLEMENTATION · Pas DATABASE SELECTED · Pas SCHEMAS ADOPTED · Pas RUNTIME MIGRATED · Pas V2.6 REMOVED · Pas OPTION A IMPLEMENTED |
| **Code / SQL / Figma / delivery** | **Interdits** |
| **Document** | `09-security-privacy-and-authority-architecture.md` |

## Trust boundaries

Browser → App/BFF → Domain → Repos → Agent provider → Evidence store · Legacy OPS1 isolé.

## Contrôles

Authn boundary (fournisseur **non choisi**) · Authz + capability + authority · least privilege · PEP sur commandes · N1–N3 · protected paths · secrets hors Evidence · redaction logs · PII minimisée · audit append-only · anti-bypass · isolation project · supply-chain DoctrinePackage digest · agent sandboxing conceptuel.

## RGPD (questions ouvertes)

Catégories : conversation, décisions, Evidence, logs, acteurs.
Finalité Studio · minimisation · durée/rétention TBD juridique · suppression/anonymisation/export · pas de politique validée inventée.
