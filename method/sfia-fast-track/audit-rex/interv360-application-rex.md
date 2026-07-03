# Interv360 — REX de l'application actuelle

## 1. Objectif

Ce document formalise le retour d'expérience sur l'application Interv360 après :

- livraison du MVP fonctionnel ;
- release `v0.1.0-mvp` ;
- livraison du Premium Design System ;
- release `v0.2.0-premium-ui` ;
- audit de l'application actuelle ;
- décision d'audit `APPLICATION_SAINE_AVEC_RESERVES`.

L'objectif est de transformer l'expérience Interv360 en enseignements exploitables pour les prochains cycles SFIA.

## 2. Synthèse exécutive

Interv360 est une réussite comme cas de référence SFIA Fast Track :

- le MVP fonctionnel a été livré et tagué ;
- la Premium UI a été livrée, mergée et releasée ;
- les garde-fous backend/API/CI ont été respectés ;
- les tests automatisés ont été maintenus ;
- les décisions post-merge ont été documentées ;
- les limites Figma Make ont été capitalisées ;
- une méthode Figma Design-first a été créée.

Mais le cycle a aussi mis en évidence plusieurs points d'attention :

- une UI premium ne doit pas être ajoutée trop tard sans maquette Design stable ;
- le maintien parallèle premium/legacy crée une dette de lisibilité ;
- les données de présentation UI-only peuvent créer une ambiguïté avec le modèle métier ;
- la documentation doit être consolidée avant lancement d'un nouveau projet.

## 3. Ce qui a bien fonctionné

### 3.1. Le mode SFIA Fast Track

Points positifs :

- cycles courts ;
- périmètre clair ;
- PR uniques lisibles ;
- garde-fous explicites ;
- validation build/tests systématique ;
- post-merge documenté ;
- tags/releases pour jalons significatifs.

### 3.2. Le découpage MVP puis Premium UI

Le découpage a permis de séparer :

- la valeur fonctionnelle ;
- la valeur visuelle ;
- la capitalisation méthode.

Ce séquencement a évité de mélanger trop tôt backend, UI, auth, CRUD et design.

### 3.3. Les garde-fous

Les garde-fous ont évité les dérives :

- pas de CRUD implicite ;
- pas d'auth opportuniste ;
- pas d'export PDF fonctionnel non cadré ;
- pas de modification backend pendant la Premium UI ;
- pas de modification CI ;
- `sfia-notion-sync` non touché ;
- exports Figma non suivis.

### 3.4. La culture de validation

Les validations régulières ont apporté de la confiance :

- build frontend OK ;
- tests frontend maintenus jusqu'à 202/202 ;
- revues visuelles humaines ;
- revues fonctionnelles rapides ;
- vérification des diffs hors scope.

## 4. Ce qui a été difficile

### 4.1. Figma Make comme source initiale

Figma Make a accéléré l'exploration visuelle, mais a créé un écart avec l'implémentation locale.

Difficultés :

- rendu non pixel-perfect ;
- MCP parfois indisponible ;
- Cursor interprétant au lieu de porter fidèlement ;
- stack locale initialement non alignée ;
- nécessité d'ajouter Tailwind v4 et une couche premium isolée après coup.

### 4.2. Le maintien legacy / premium

La coexistence legacy + premium est acceptable pour la démonstration, mais crée une dette :

- confusion possible pour un futur développeur ;
- doublons liste / détail / audit ;
- `App.css` volumineux ;
- nécessité de décider avant prochaine évolution UI : conserver, déprécier ou retirer le legacy.

### 4.3. Données de présentation vs données métier

La Premium UI affiche des références DEM-248x tandis que le MVP métier repose sur `SAV-DEMO-00x`.

Cette solution fonctionne pour la démo, mais devient risquée si l'on ouvre :

- CRUD Nouvelle demande ;
- dashboard backend ;
- API réelle ;
- CRM ;
- export PDF réel.

## 5. Dette créée ou assumée

| Dette | Type | Gravité | Assumée ? | Commentaire |
|-------|------|---------|-----------|-------------|
| Double couche UI premium / legacy | Maintenabilité | Moyenne | Oui | À traiter avant nouvelle UI majeure |
| Mapping DEM-248x / SAV-DEMO-00x | Architecture | Moyenne | Oui | À cadrer avant CRUD/API |
| `App.css` volumineux | Technique | Moyenne | Oui | À réduire si retrait legacy |
| Pas d'E2E navigateur | Qualité | Faible à moyenne | Oui | Tests unitaires/intégration suffisants pour MVP |
| Pas d'auth réelle | Fonctionnel | Attendu | Oui | Hors scope MVP |
| Export PDF désactivé | Fonctionnel | Attendu | Oui | Hors scope MVP |

## 6. Enseignements méthode

### 6.1. Ne pas coder trop tôt l'UI premium

Une UI premium doit partir de vraies maquettes Figma Design.

Règle retenue :

> Figma Design validé d'abord, stack frontend définie ensuite, Cursor après.

### 6.2. Les PR uniques fonctionnent bien

Les PR uniques par cycle sont efficaces si :

- le périmètre est clair ;
- les garde-fous sont explicites ;
- les validations sont répétées ;
- le post-merge est documenté.

### 6.3. L'audit avant nouveau cycle est nécessaire

L'audit a permis d'identifier les réserves avant d'ouvrir un nouveau projet.

Règle retenue :

> Aucun nouveau cycle produit majeur sans audit de l'état réel.

## 7. Impact sur SFIA

Interv360 devient un cas de référence pour :

- Fast Track MVP ;
- Premium UI ;
- Figma Design-first ;
- PR + post-merge ;
- release jalon ;
- audit avant nouvelle phase ;
- consolidation documentaire.

## 8. Recommandations pour le prochain projet

### 8.1. Avant cadrage produit

- définir le problème métier ;
- identifier les utilisateurs ;
- cadrer la proposition de valeur ;
- choisir les écrans clés ;
- définir le niveau d'ambition UI.

### 8.2. Avant design

- utiliser Figma Design, pas seulement Make ;
- définir tokens, composants, variants ;
- prévoir responsive et états ;
- valider visuellement avant code.

### 8.3. Avant développement Cursor

- choisir la stack ;
- préparer le mapping composants ;
- fixer les garde-fous ;
- définir les tests attendus ;
- interdire les comportements hors scope.

### 8.4. Avant release

- build OK ;
- tests OK ;
- revue visuelle ;
- revue fonctionnelle ;
- documentation à jour ;
- post-merge prévu.

## 9. Décisions pour la suite

Avant tout nouveau projet :

1. terminer la capitalisation SFIA globale ;
2. réaliser la revue documentaire complète ;
3. préparer la mise à jour Notion ;
4. améliorer les règles et standards SFIA ;
5. ouvrir ensuite seulement le nouveau projet.

## 10. Statut

Ce REX clôture le Chantier 2 — REX de l'application actuelle.

Décision :

> Le REX confirme que l'application Interv360 est un cas de référence SFIA Fast Track, avec des réserves connues et assumées avant tout nouveau cycle produit.

---

## 11. Statut de merge

La PR REX de l'application actuelle a été mergée dans `main`.

| Élément | Valeur |
|---------|--------|
| PR | #78 — docs: add Interv360 application REX |
| Branche source | `consolidation/interv360-application-rex` |
| Branche cible | `main` |
| Commit d'intégration | `fed8dc2` |
| Statut | Mergé |
| Type | Documentation REX |
| Code Interv360 | Non modifié |
| Backend / API / CI | Inchangés |
| `sfia-notion-sync` | Non modifié |
| Exports Figma | Non suivis |

Décision :

> Le Chantier 2 — REX de l'application actuelle est intégré à `main`. La consolidation peut passer au Chantier 3 — Capitalisation SFIA globale.
