# 08 — Isolation legacy et architecture de transition

| Champ | Valeur |
|-------|--------|
| **Statut** | Architecture fonctionnelle **candidate** — validation Morris requise |
| **Pack** | `v3-native-option-a/functional-architecture` |
| **Gate** | `GO ARCHITECTURE FONCTIONNELLE — SFIA STUDIO V3-NATIVE — OPTION A` |
| **Anti-claims** | Pas ARCHITECTURE APPROVED · Pas READY FOR MODELED/DELIVERY · Pas runtime migré |
| **Document** | `08-legacy-isolation-and-transition-architecture.md` |
| **Décision** | FD-OA-05 VALIDATED |

## 1. Séparation

```text
OPS1 legacy gelé  ≠  Option A v3-native (unique cible refondation)
```

| Propriété | OPS1 legacy | Option A |
|-----------|-------------|----------|
| Évolution fonctionnelle | **Interdite** | Autorisée par cycles v3 |
| Doctrine | figée historique (peut encore lire method/ **dans legacy only**) | DoctrinePackage v3 only |
| Partage doctrine avec A | **Non** | — |
| Fallback A→OPS1 doctrine | **Non** | — |
| Présenté comme implémentation v3 | **Non** | cible |
| 2ᵉ cible produit | **Non** | unique |

## 2. Isolation fonctionnelle

- Pas de DoctrinePackage partagé.
- Pas de LPS partagé.
- Pas d’ExecutionContract croisé.
- UI : navigation legacy distincte / non présentée comme Studio v3.
- Données MethodMode : hors modèle A ; migration ultérieure (U-OA-03).

## 3. Transition progressive (sans coexistence doctrinale)

1. Livrer Option A sur chemin neuf.
2. Garder OPS1 gelé pour continuité opérationnelle temporaire.
3. Remplacer usages par A quand preuves prêtes.
4. Retirer lecture method/ du **chemin A** dès composants B prêts (ARB-V3-04).
5. Décommissionner legacy par GO distinct.

## 4. Anti-claims transition

« Dual-run » ≠ dual-doctrine.
Legacy disponible ≠ v3 implemented.
