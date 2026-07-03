# SFIA Fast Track — Architecture Standards

## 1. Objectif

Ce document définit les standards d'architecture SFIA pour les futurs projets.

Il sert à éviter les décisions opportunistes et à clarifier les cycles techniques.

## 2. Principes d'architecture

### 2.1. Architecture cadrée avant code

Avant toute implémentation, documenter :

- périmètre fonctionnel ;
- modèle de données ;
- frontend attendu ;
- backend attendu ;
- API attendue ;
- persistance ;
- intégrations ;
- authentification ;
- tests ;
- hors scope.

### 2.2. Séparation des cycles

Les cycles suivants doivent rester séparés sauf décision explicite :

- UI ;
- backend ;
- API ;
- auth ;
- data ;
- CI ;
- documentation ;
- Notion ;
- release.

### 2.3. ADR si décision structurante

Créer un ADR pour :

- choix de stack ;
- ajout backend ;
- ajout base de données ;
- ajout auth ;
- intégration externe ;
- modification workflow métier ;
- stratégie de déploiement ;
- changement de design system.

## 3. Standards frontend

Pour un frontend :

- stack choisie avant code ;
- structure claire `app`, `domain`, `data`, `ui`, `tests` ou équivalent ;
- composants UI séparés du domaine ;
- données de présentation identifiées ;
- actions hors scope désactivées ;
- tests navigation/interactions ;
- revue visuelle si UI premium.

## 4. Standards UI premium

Pour une UI premium :

- Figma Design validé avant code ;
- tokens définis ;
- composants et variants identifiés ;
- mapping Figma → code documenté ;
- comparaison localhost ;
- pas de création métier implicite ;
- pas de données UI-only ambiguës sans mapping.

## 5. Standards backend/API

Pour backend/API :

- cycle dédié ;
- contrat API documenté ;
- routes listées ;
- modèles documentés ;
- erreurs documentées ;
- tests backend ;
- impacts frontend identifiés ;
- migration ou seed documentée si persistance.

## 6. Standards data

Pour les données :

- distinguer données métier, données seed, données présentation ;
- éviter double référentiel non documenté ;
- documenter les IDs ;
- documenter les mappings ;
- éviter données fictives difficiles à distinguer du réel.

## 7. Standards tests

| Zone | Standards |
|------|-----------|
| Frontend | build + tests + interactions clés |
| Backend | tests routes/services + erreurs |
| API | contrat + tests HTTP si possible |
| UI premium | tests + revue visuelle |
| Docs | diff docs-only + liens cohérents |

## 8. Standards documentation technique

Chaque cycle technique doit produire ou mettre à jour :

- cadrage technique ;
- ADR si décision structurante ;
- tests ;
- limites ;
- hors scope ;
- suite proposée.

## 9. Standards d'automatisation

Les futurs moteurs SFIA doivent pouvoir vérifier automatiquement :

- zones modifiées ;
- présence tests ;
- présence documentation ;
- respect garde-fous ;
- PR body ;
- statut post-merge ;
- absence de modifications interdites.

## 10. Décision

Décision :

> Les standards d'architecture SFIA doivent permettre de produire des applications rapides, mais gouvernées, maintenables et auditables.
