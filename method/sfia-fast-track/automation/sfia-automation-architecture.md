# SFIA Fast Track — Automation Architecture Vision

## 1. Objectif

Ce document formalise la vision d'automatisation de SFIA.

L'objectif est de transformer SFIA Fast Track :

- d'une méthode assistée par IA ;
- vers une architecture d'orchestration automatisable ;
- capable de produire des applications sur mesure à partir d'un besoin exprimé en self-service.

Vision cible :

> Un utilisateur exprime son besoin dans un formulaire.  
> SFIA qualifie, cadre, conçoit, génère, teste, documente et prépare la livraison d'une application adaptée.

## 2. Constat issu d'Interv360

Le projet Interv360 a permis de valider la méthode :

- cycles courts ;
- PR uniques ;
- garde-fous ;
- build/tests ;
- post-merge documenté ;
- releases ;
- audit ;
- REX ;
- capitalisation.

Mais il a aussi montré une limite importante :

> L'exécution reste trop manuelle.

Les allers-retours suivants sont encore trop nombreux :

- utilisateur → ChatGPT ;
- ChatGPT → Cursor ;
- Cursor → résultat ;
- résultat → ChatGPT ;
- ChatGPT → nouveau prompt ;
- Cursor → commit ;
- GitHub → PR ;
- retour utilisateur ;
- post-merge manuel ;
- documentation manuelle.

Cette boucle fonctionne, mais elle n'est pas encore industrialisable à grande échelle.

## 3. Décision stratégique

SFIA ne doit pas rester uniquement une méthode documentaire.

SFIA doit devenir :

> un système d'orchestration IA pour la création contrôlée d'applications.

Cela signifie que les règles SFIA doivent être converties en :

- workflows ;
- moteurs de décision ;
- prompts standardisés ;
- agents spécialisés ;
- validations automatisées ;
- garde-fous exécutables ;
- templates ;
- pipelines ;
- connecteurs.

## 4. Vision cible self-service

### 4.1. Entrée utilisateur

L'utilisateur renseigne un formulaire :

- problème métier ;
- cible utilisateur ;
- objectifs ;
- fonctionnalités attendues ;
- contraintes ;
- niveau d'ambition UI ;
- besoin d'authentification ;
- besoin de base de données ;
- besoin API ;
- besoin d'intégration externe ;
- besoin reporting/export ;
- volumétrie ;
- criticité ;
- délais ;
- budget ou niveau d'effort souhaité.

### 4.2. Sortie attendue

SFIA produit automatiquement :

- cadrage produit ;
- expression de besoin ;
- périmètre MVP ;
- hors scope ;
- backlog ;
- architecture fonctionnelle ;
- architecture technique ;
- stratégie UI ;
- stratégie data ;
- stratégie tests ;
- maquettes ou brief Figma ;
- prompts Cursor ;
- code ;
- tests ;
- documentation ;
- PR ;
- release notes ;
- plan Notion ;
- REX.

## 5. Architecture cible des moteurs SFIA

### 5.1. Intake Engine

Rôle :

Transformer un formulaire utilisateur en besoin exploitable.

Responsabilités :

- clarifier le problème ;
- identifier les utilisateurs ;
- détecter les ambiguïtés ;
- classer le type de projet ;
- estimer la complexité ;
- produire une première fiche besoin.

Sorties :

- besoin structuré ;
- hypothèses ;
- questions ouvertes ;
- risques initiaux.

### 5.2. Product Framing Engine

Rôle :

Transformer le besoin en cadrage produit.

Responsabilités :

- définir la proposition de valeur ;
- cadrer le MVP ;
- identifier les hors scope ;
- prioriser les fonctionnalités ;
- définir les écrans clés ;
- proposer une trajectoire de livraison.

Sorties :

- product brief ;
- MVP scope ;
- backlog initial ;
- critères de succès.

### 5.3. Architecture Decision Engine

Rôle :

Proposer l'architecture adaptée au projet.

Responsabilités :

- choisir frontend/backend ;
- décider local/API ;
- décider base de données ;
- identifier intégrations ;
- détecter besoins auth ;
- proposer patterns techniques ;
- générer ADR si nécessaire.

Sorties :

- architecture cible ;
- ADR ;
- risques techniques ;
- garde-fous.

### 5.4. UI Design Engine

Rôle :

Piloter la stratégie UI.

Responsabilités :

- décider si Figma Design est nécessaire ;
- générer un brief Figma ;
- définir tokens, composants, écrans ;
- préparer mapping Figma → code ;
- choisir stack UI ;
- empêcher le code avant validation design premium.

Sorties :

- UI brief ;
- design system brief ;
- composants attendus ;
- stack UI proposée ;
- checklist Figma Design-first.

### 5.5. Prompt Generation Engine

Rôle :

Générer les prompts Cursor nécessaires.

Responsabilités :

- produire prompts de cycle ;
- produire prompts de validation ;
- produire prompts de PR ;
- produire prompts post-merge ;
- intégrer garde-fous ;
- adapter les prompts au type de cycle.

Sorties :

- prompt cadrage ;
- prompt implémentation ;
- prompt validation ;
- prompt PR ;
- prompt post-merge.

### 5.6. Repository Execution Engine

Rôle :

Exécuter les actions dans le repo.

Responsabilités :

- créer branche ;
- modifier fichiers ;
- lancer build/tests ;
- lire erreurs ;
- proposer corrections ;
- préparer commits ;
- préparer PR ;
- vérifier diff.

Sorties :

- branche ;
- fichiers modifiés ;
- commit ;
- PR prête ;
- rapport d'exécution.

### 5.7. Validation Engine

Rôle :

Contrôler que les garde-fous sont respectés.

Responsabilités :

- vérifier build/tests ;
- vérifier diff hors scope ;
- vérifier absence de backend si cycle UI ;
- vérifier absence auth/CRUD si non demandé ;
- vérifier documentation ;
- vérifier PR body ;
- vérifier statut Git ;
- vérifier couverture minimale.

Sorties :

- rapport validation ;
- go/no-go ;
- corrections nécessaires.

### 5.8. Documentation Engine

Rôle :

Générer et maintenir la documentation.

Responsabilités :

- créer documents de cycle ;
- mettre à jour roadmap ;
- produire audit ;
- produire REX ;
- produire release notes ;
- documenter post-merge ;
- préparer documentation utilisateur.

Sorties :

- docs Markdown ;
- changelog ;
- REX ;
- audit ;
- notes de release.

### 5.9. Notion Publication Engine

Rôle :

Publier dans Notion uniquement après validation.

Responsabilités :

- inventorier documents publiables ;
- exclure docs internes ;
- préparer arborescence Notion ;
- générer plan publication ;
- exécuter sync ;
- vérifier rendu Notion.

Sorties :

- plan Notion ;
- pages publiées ;
- rapport de publication.

### 5.10. Release Engine

Rôle :

Créer tags et releases sur jalons significatifs.

Responsabilités :

- décider si release nécessaire ;
- générer notes ;
- créer tag ;
- créer GitHub Release ;
- vérifier main propre.

Sorties :

- tag ;
- release ;
- release notes.

## 6. Niveaux d'automatisation

### Niveau 0 — Manuel assisté

État actuel observé sur Interv360.

Caractéristiques :

- ChatGPT produit les prompts ;
- Cursor exécute ;
- l'utilisateur copie/colle ;
- GitHub est contrôlé manuellement ;
- validations humaines fréquentes.

### Niveau 1 — Prompts standardisés

Objectif court terme.

Caractéristiques :

- prompts typés par cycle ;
- templates de PR ;
- templates post-merge ;
- checklists ;
- décisions mieux structurées.

### Niveau 2 — Orchestration semi-automatique

Objectif moyen terme.

Caractéristiques :

- formulaire besoin ;
- génération automatique de roadmap ;
- génération prompts Cursor ;
- exécution semi-guidée ;
- validations automatiques ;
- humains uniquement pour go/no-go.

### Niveau 3 — Agentic Delivery

Objectif avancé.

Caractéristiques :

- agents spécialisés ;
- orchestration multi-étapes ;
- création branche/commit/PR automatisée ;
- corrections tests semi-autonomes ;
- documentation automatique ;
- validation humaine sur jalons.

### Niveau 4 — Self-service Application Factory

Vision cible.

Caractéristiques :

- utilisateur décrit son besoin ;
- SFIA génère le produit ;
- design, code, tests, docs et release sont orchestrés ;
- humain intervient sur arbitrages métier et validations sensibles.

## 7. Ce qui doit rester humain

Même avec automatisation, certains points doivent rester validés humainement :

- problème métier ;
- proposition de valeur ;
- validation Figma Design ;
- arbitrages fonctionnels ;
- choix d'architecture sensibles ;
- sécurité/auth ;
- accès données réelles ;
- publication externe ;
- merge final ;
- release publique ;
- mise en production.

## 8. Garde-fous exécutables

Les garde-fous SFIA doivent devenir contrôlables automatiquement :

| Garde-fou | Contrôle automatisable |
|-----------|------------------------|
| Pas de backend dans cycle UI | `git diff` sur backend |
| Pas de CI modifiée | `git diff` sur `.github/workflows` |
| Pas de `sfia-notion-sync` | `git diff` ciblé |
| Pas d'exports Figma suivis | `git status` |
| Build obligatoire | commande build |
| Tests obligatoires | commande tests |
| PR body obligatoire | vérification fichier |
| Post-merge obligatoire | section statut merge |
| Pas d'auth implicite | détection fichiers auth/tokens |
| Pas de CRUD implicite | détection routes/forms/mutations |

## 9. Modèle de formulaire cible

Le formulaire self-service doit collecter au minimum :

### Produit

- nom du projet ;
- problème métier ;
- utilisateurs ;
- objectifs ;
- irritants actuels ;
- valeur attendue.

### Fonctionnel

- fonctionnalités principales ;
- données manipulées ;
- workflows ;
- rôles ;
- règles métier ;
- exports ;
- intégrations.

### Technique

- web/mobile/API ;
- base de données ;
- auth ;
- hébergement ;
- volumétrie ;
- sécurité ;
- contraintes SI.

### UI/UX

- niveau design ;
- besoin Figma Design ;
- charte ;
- écrans clés ;
- responsive ;
- accessibilité ;
- inspiration visuelle.

### Livraison

- MVP attendu ;
- priorité ;
- délai ;
- niveau de documentation ;
- besoin Notion ;
- besoin release.

## 10. MVP de la plateforme SFIA

Le premier MVP de la plateforme SFIA ne doit pas générer une application complète en autonomie.

Il doit d'abord automatiser :

1. formulaire besoin ;
2. cadrage produit ;
3. roadmap cycles ;
4. génération prompts Cursor ;
5. génération PR body ;
6. génération documentation ;
7. checklists de validation ;
8. préparation release notes.

Objectif MVP :

> Réduire les allers-retours humains sans supprimer les validations importantes.

## 11. Trajectoire de réalisation

### Étape 1 — Formaliser les workflows

- cycles types ;
- transitions ;
- go/no-go ;
- templates ;
- checklists.

### Étape 2 — Construire le formulaire intake

- structure besoin ;
- scoring complexité ;
- classification projet.

### Étape 3 — Générer automatiquement les livrables méthode

- cadrage ;
- backlog ;
- roadmap ;
- prompts ;
- PR body.

### Étape 4 — Brancher le repo

- création branche ;
- exécution tests ;
- validation diff ;
- rapport.

### Étape 5 — Brancher design / Notion / release

- Figma Design ;
- publication Notion ;
- release GitHub.

## 12. Risques

| Risque | Impact | Mitigation |
|--------|--------|------------|
| Automatiser trop tôt | Génération incohérente | Commencer par automatiser docs/prompts |
| Supprimer trop d'humain | Mauvais arbitrages | Garder go/no-go humain |
| Mélanger périmètres | Dérive de projet | Cycle = objectif |
| Générer du code non maintenable | Dette technique | Validation Engine |
| Publier trop tôt | Documentation incohérente | Notion plan obligatoire |
| Design approximatif | Mauvaise adoption | Figma Design-first |

## 13. Décision

SFIA doit évoluer en deux dimensions :

1. **méthode de livraison contrôlée** ;
2. **architecture d'orchestration automatisable**.

Décision :

> L'objectif long terme de SFIA est de devenir une application factory assistée par IA, capable de transformer un besoin utilisateur structuré en application livrable, testée, documentée et gouvernée.

## 14. Suites

À intégrer dans les prochains chantiers :

- Chantier 4 — inclure l'inventaire des documents nécessaires à l'automatisation ;
- Chantier 5 — formaliser les règles exécutables, workflows, checklists et templates ;
- nouveau projet — tester progressivement l'approche semi-automatisée.
