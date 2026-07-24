# 01 — Principes d’architecture et frontières

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Base conception** | FD-OA-01…06 **VALIDATED** · commit conception `e22bc243…` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré · Pas coexistence doctrinale |
| **Code / schemas / SQL / infra** | **Interdits** |
| **Document** | `01-architecture-principles-and-boundaries.md` |

## 1. Principes obligatoires (rappel)

1. Doctrine v3 exclusive · 2. Aucune lecture runtime `method/**` · 3. Aucune bascule v2.6 · 4. DoctrinePackage = racine doctrinale · 5. Project = agrégat principal · 6. Project ≠ Cycle · 7. CycleType ≠ CycleInstance · 8. LPS = état fonctionnel central · 9. Conversation dominante · 10. Séparation raisonnement / décision / exécution · 11. CKC cognitif opaque · 12. HumanDecision structurante · 13. ExecutionContract = frontière d’exécution · 14. Agents bornés capacité+autorité · 15. Evidence avant claim · 16. Audit/provenance transverses · 17. Fail-closed · 18. Réversibilité autant que possible · 19. Pas de mutation silencieuse · 20. Maturité distribuée · 21. Continuité legacy isolée (FD-OA-05) · 22. Pas de big-bang imposé.

## 2. Frontières dures

| Dedans Option A | Dehors |
|-----------------|--------|
| Domaines A–H v3-native | OPS1 legacy gelé (produit séparé) |
| DoctrinePackage Studio | `method/sfia-fast-track/**` |
| ExecutionContract structuré | Prompt MD comme SoT |
| CKC package v3 | CKC inventé / formulaire |
| Adaptateur MD optionnel | Contrat natif MD |

## 3. Couches documentaires

Conception (VALIDATED) → **Architecture fonctionnelle (ce pack)** → UX/modeled/AT (futurs) → Delivery.

## 4. Ce que l’AF ne décide pas

Framework · SQL · IAM produit · Figma pixels · découpage microservices · orchestration infra.
