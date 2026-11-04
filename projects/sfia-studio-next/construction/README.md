# SFIA Studio Next — R5 · Index de construction

**État :** préparation documentaire candidate sur la branche `docs/next-r5-delivery-preparation-20261104` issue de `main@a0b80b9ecd64149ed51f87235ae246e197e66462` ; pas de code Next ni `VALIDATED SPEC` ML1 acquis.

| Référence | Objet | Statut |
|---|---|---|
| [Référence globale R5](reference-delivery-r5.md) | Organisation, sources, macro-lots, gates et traçabilité | Candidate v0.4 |
| [Contrat commun de spécification](contrat-specification-macro-lot.md) | Structure documentaire applicable par capacité, sans template Cursor parallèle | Candidate v0.2 |
| [Qualification ML1](ml1-entree-et-continuite/qualification.md) | Résultat utilisateur, IN/OUT et interfaces | Candidate v0.1 |
| [Spécification technique ML1](ml1-entree-et-continuite/specification-technique.md) | Mécanismes, contrats et paquet de stack recommandé (non adopté) | Candidate v0.3 |
| [Matrice ML1](ml1-entree-et-continuite/matrice-tracabilite.md) | R1/R2/R3/R4 et QA rattachés aux capacités | Candidate v0.3 |
| [Inventaire R2 D1/D2](ml1-entree-et-continuite/inventaire-r2.csv) | 52 RG et 51 PF recensés | Inventaire de sources |
| [Revue technique ML1](ml1-entree-et-continuite/revue-coherence-technique.md) | Corrections documentaires, arbitrages et réserves | Revue v0.1 |

**Sources d'autorité :** [SEF](../governance/SEF.md), [Roadmap](../governance/roadmap.md), [R2](../conception-fonctionnelle/README.md), [R3](../ux-ui/contrat-transposition-figma-code.md), [R4](../architecture-technique/cadrage-r4.md), [ENV-01](../governance/environnements-recette-et-promotions.md). La documentation candidate ne remplace pas ces sources.

**Gates :** publication sur branche ≠ PR ≠ merge ≠ validation du contrat technique ≠ code et tests ≠ promotion runtime. Les autres versions locales sont conservées dans la conversation, non recopiées en doublons Git.

**Versioning produit :** [politique validée Morris en contenu (2026-11-04)](../governance/product-versioning.md), publiée sur cette branche candidate avec son routage Next-only et alignement ENV-01. Applicable sur `main` après gate PR/merge et contrôle post-merge ; aucune version applicative attribuée. Le versioning SFIA v2.6 reste indépendant.
