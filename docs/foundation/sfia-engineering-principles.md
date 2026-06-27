---
source: Notion / SFIA Architecture
status: reference
sync: manual-export
---

# SFIA Engineering Principles

## Préambule

La SFIA est une plateforme d'ingénierie dont l'objectif est de transformer une idée en un produit, un composant ou une solution de manière structurée, traçable et réutilisable.

Ces principes constituent le cadre de référence de tous les projets réalisés avec la SFIA.

# 1. Les besoins réels avant les idées

La SFIA évolue uniquement pour répondre à un besoin identifié sur un projet réel.

Aucune fonctionnalité n'est développée "au cas où".

# 2. Une seule tâche à la fois

Chaque chantier possède un objectif clair.

Un chantier est terminé avant d'en ouvrir un autre.

# 3. Concevoir avant de développer

Toute implémentation est précédée d'une phase de conception.

L'architecture guide le développement, jamais l'inverse.

# 4. La simplicité est une exigence

La solution la plus simple répondant au besoin est privilégiée.

Chaque nouvelle complexité doit être justifiée.

# 5. Les composants sont autonomes

Chaque composant possède son propre cycle de vie :
- Conception
- Développement
- Tests
- Documentation
- Version
- Clôture

# 6. Les décisions sont tracées

Toute décision structurante est documentée dans un ADR.

Aucune décision importante ne repose uniquement sur les échanges.

# 7. Le référentiel est la source de vérité

Notion constitue le référentiel officiel de la plateforme.

Toute documentation durable y est centralisée.

# 8. Le code appartient au dépôt Git

Le code, les scripts et les versions sont gérés exclusivement dans Git.

Le référentiel documentaire ne remplace jamais le dépôt de code.

# 9. Chaque amélioration est mesurable

Une amélioration doit apporter au moins un des bénéfices suivants :
- simplification ;
- robustesse ;
- réutilisabilité ;
- gain de temps ;
- réduction du risque.

# 10. Tester avant de publier

Aucune version n'est publiée sans validation.

Les tests sont considérés comme faisant partie intégrante du composant.

# 11. Industrialiser ce qui est récurrent

Une tâche répétitive est automatisée uniquement lorsqu'elle devient suffisamment fréquente pour justifier son coût de développement.

# 12. Le référentiel évolue en continu

La SFIA n'est jamais considérée comme figée.

Les retours d'expérience, les projets et les expérimentations alimentent son évolution de manière continue.

# 13. Les outils ont des responsabilités claires

- ChatGPT : conception, architecture, analyse et aide à la décision.
- Cursor : développement et implémentation.
- Notion : référentiel de connaissance et gouvernance.
- Git : gestion du code source et des versions.

Chaque outil possède un rôle précis et complémentaire.

# 14. Construire pour être réutilisé

Tout artefact produit dans la SFIA doit pouvoir être réutilisé dans un autre projet avec un minimum d'adaptation.

# 15. La plateforme sert les projets

La SFIA n'est pas une finalité.

Sa raison d'être est de permettre de concevoir, développer et maintenir des projets de meilleure qualité, plus rapidement et avec une gouvernance cohérente.
