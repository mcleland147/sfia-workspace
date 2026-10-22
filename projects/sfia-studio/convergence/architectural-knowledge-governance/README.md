# SFIA Studio — Architectural Knowledge & Construction Governance (AKG)

| Champ | Valeur |
| --- | --- |
| Portée | Construction / connaissance architecturale de **SFIA Studio uniquement** |
| Version | **V0.1 documentaire candidate**, sur branche dédiée |
| Base de lecture | `main` @ `1c2d5ecdac3241ac4ef9d45dea68509f761e2f8b` — 2026-10-22 |
| Autorisation Pilote | GO **documentaire borné V0.1** le 2026-10-22 |
| Non-claims | **AKG-M4 FORMAL START non consommé**, aucun delivery, aucune architecture cible formellement adoptée, runtime v3 NON ADOPTED |

## Point d'entrée AKG

Les acquis AKG-M0 à M3 sont répartis entre la Build Doctrine, la Roadmap, la PRR et les preuves Git. Cet index **n'est pas une seconde source de vérité** : il rend ces sources navigables et introduit les livrables préparatoires de M4.

| Jalon | Contenu et maturité bornée | Source |
| --- | --- | --- |
| **M0 — Methodological Foundation** | R23/R24, clôture méthodologique | [Build Doctrine](../sfia-studio-convergence-build-doctrine.md), [Roadmap B-AKG](../sfia-studio-convergence-roadmap.md) |
| **M1 — System Inventory** | Inventaire système borné et réserves | [PRR 01](../../production-runtime-reference/01-system-runtime-overview.md), [02](../../production-runtime-reference/02-runtime-object-catalog.md), [03](../../production-runtime-reference/03-end-to-end-flow-catalog.md), [Roadmap](../sfia-studio-convergence-roadmap.md) |
| **M2 — Architecture Understanding** | Responsabilités, dépendances, frontières d'autorité | [PRR 03](../../production-runtime-reference/03-end-to-end-flow-catalog.md), [04](../../production-runtime-reference/04-dependency-impact-map.md), [07](../../production-runtime-reference/07-authority-invariants-and-failure-modes.md), [09](../../production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md) |
| **M3 — Reference Consolidation** | Living PRR consolidée au périmètre borné, réserves gouvernées | [PRR README](../../production-runtime-reference/README.md), [08](../../production-runtime-reference/08-test-proof-and-conformance-map.md), [09](../../production-runtime-reference/09-known-gaps-reserves-and-current-boundaries.md) |
| **M4 — Rationalization Assessment** | **NON DÉMARRÉ FORMELLEMENT** ; documents de réflexion V0.1 autorisés | [AS-IS](m4-rationalization/01-current-architecture-as-is.md), [TO-BE](m4-rationalization/02-target-architecture-to-be.md), [registre](m4-rationalization/03-orientations-and-gap-register.md) |

## Livrables AKG-M4 (V0.1)

1. **[01 — AS-IS](m4-rationalization/01-current-architecture-as-is.md)** : **deux niveaux dans un document** — vue pédagogique A intégrale + cartographie technique B, *dérivées* de Git/PRR. La PRR demeure **le** référentiel documentaire du CURRENT.
2. **[02 — TO-BE](m4-rationalization/02-target-architecture-to-be.md)** : **deux niveaux dans un document** — vision pédagogique B intégrale + schémas cible et responsabilités détaillées, sous réserve d'arbitrage formel et de compatibilité avec la doctrine v3.
3. **[03 — Orientations et écarts](m4-rationalization/03-orientations-and-gap-register.md)** : intentions confirmées en conversation, hypothèses, écarts, risques et décisions encore à consommer.

## Mode de consultation dans les futurs travaux

**Source routing (proportionné) :** code Git courant + preuves primaires → Build Doctrine → Roadmap → doctrine v3 applicable → volumes PRR pertinents → **si architecture cible/rationalisation/transformation touchée : index AKG + TO-BE + registre**, et AS-IS si utile. Jamais un chargement exhaustif obligatoire pour toute petite correction Studio.

Ce rattachement est prévu dans [Cycle Routing Guide §4.3.0a](../../../../method/sfia-fast-track/core/sfia-cycle-routing-guide.md) et [Knowledge Layer — Documentation Routing Matrix](../../../../method/sfia-fast-track/core/sfia-knowledge-layer.md).

## Gouvernance et statut des sources

- **Vérité du CURRENT :** Git et preuves primaires > PRR descriptive > AS-IS résumé.
- **Cible :** doctrine v3 adoptée + orientations explicitement qualifiées du TO-BE ; contradiction = écart à arbitrer, jamais changement silencieux de doctrine.
- **Décision :** orientation de discussion ≠ GO formel AKG-M4 ≠ adoption architecturale ≠ autorisation d'éditer le produit.
- **Continuité R23/R24 :** tout changement comportemental futur doit réévaluer et synchroniser la PRR applicable.
- **Hors scope V0.1 :** code, tests REAL, schémas SQLite, routes, suppressions, migrations, autorisation M5, merge main.

Chaque document doit expliciter sa version, son statut et ses preuves ; le registre constitue l'historique des évolutions et des arbitrages, sans recopier l'inventaire PRR.
