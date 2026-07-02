# SFIA Fast Track — MVP Delivery Pattern Template

**Projet** : `[Nom du projet]`  
**Cycle** : MVP Delivery Pattern  
**Mode** : SFIA Fast Track  
**Statut** : Template  
**Version** : `1.0`

---

## 1. Objectif du template

Ce template permet d'appliquer le pattern **SFIA Fast Track MVP Delivery** à un projet devant passer d'une démonstration, d'un prototype ou d'un socle partiel vers un MVP structuré, livrable et validé.

Le principe central est :

> un lot = une capacité produit utile, livrée en PR unique, avec validations et post-merge léger.

---

## 2. Conditions d'utilisation

Utiliser ce pattern lorsque :

- le projet dispose déjà d'un socle fonctionnel ;
- une démonstration ou un prototype existe ;
- l'objectif est de produire un MVP livrable ;
- les risques de scope creep sont importants ;
- il faut garder une cadence rapide ;
- les sujets enterprise ou production-ready ne doivent pas bloquer le MVP.

Ne pas utiliser tel quel lorsque :

- le produit n'a pas encore de socle fonctionnel ;
- l'architecture cible est inconnue ;
- les contraintes réglementaires dominent ;
- le projet doit être production-ready immédiatement ;
- les dépendances externes structurantes ne sont pas maîtrisées ;
- le backlog n'est pas priorisé.

---

## 3. Décision structurante initiale

Décision à poser :

> Le projet sort du mode démonstration / prototype et entre dans un cycle MVP Delivery structuré.

Conséquences :

- ne plus créer de micro-cycles sans résultat produit ;
- regrouper cadrage, delivery et validation dans des lots utiles ;
- éviter les PR documentaires intermédiaires sans valeur directe ;
- préserver la traçabilité minimale ;
- expliciter les garde-fous ;
- préparer une release readiness en fin de cycle.

---

## 4. Roadmap MVP cible

Créer une roadmap cible avec :

| Élément | Contenu attendu |
|---------|-----------------|
| Point de départ | État réel du produit |
| Objectif MVP | Ce que le MVP doit permettre |
| Critères de sortie | Conditions minimales pour considérer le MVP atteint |
| Lots produit | Capacités produit à livrer |
| Hors scope | Sujets explicitement exclus |
| Méthode | Règles SFIA Fast Track |
| Estimation cible | Progression estimée |
| Premier lot | Prochaine branche / prochain cycle |

---

## 5. Découpage recommandé en lots

Adapter les lots au projet.

Structure générique :

| Lot | Objectif | Type |
|-----|----------|------|
| Lot 1 | Fondation produit manquante | Delivery |
| Lot 2 | Traçabilité / historique / audit | Delivery |
| Lot 3 | Modèle métier final | Delivery |
| Lot 4 | API / contrat / robustesse | Delivery |
| Lot 5 | UX MVP / parcours produit | Delivery |
| Lot 6 | Industrialisation MVP | Delivery |
| Release Readiness | Figer la version MVP | Release |

Règle :

> Ne pas créer de Lot 7 automatique.  
> Tout sujet suivant doit être cadré comme un nouveau cycle distinct.

---

## 6. Template d'un lot produit

### 6.1. En-tête

```markdown
# [Projet] — [Nom du lot]

**Projet** : [Nom du projet]  
**Lot** : [Nom du lot]  
**Mode** : SFIA Fast Track — Delivery produit  
**Statut** : En cours  
**Branche** : `[branche]`
```

### 6.2. Objectif

Décrire le résultat utile attendu du lot.

Exemple :

Ce lot vise à livrer [capacité produit], sans ouvrir [hors scope].

### 6.3. Périmètre

À livrer :

- [capacité 1]
- [capacité 2]
- [capacité 3]

### 6.4. Hors scope

Ce lot n'introduit pas :

- [hors scope 1]
- [hors scope 2]
- [hors scope 3]

### 6.5. Garde-fous

Le lot doit préserver :

- [composant existant 1]
- [composant existant 2]
- [composant existant 3]

Le lot ne doit pas modifier :

- [élément sensible 1]
- [élément sensible 2]

### 6.6. Incréments internes

| Incrément | Objectif | Statut |
|-----------|----------|--------|
| [INC-01] | Cadrage opérationnel | À faire |
| [INC-02] | Implémentation principale | À faire |
| [INC-03] | Validations / documentation | À faire |
| [INC-04] | Préparation PR unique | À venir |

### 6.7. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Capacité principale livrée | À valider |
| Tests OK | À valider |
| Documentation mise à jour | À valider |
| Garde-fous respectés | À valider |
| Aucun scope creep | À valider |

### 6.8. Préparation PR

Titre proposé :

`[Titre PR]`

Corps proposé :

```markdown
## Summary
[Résumé du lot]

## What changed
- [changement 1]
- [changement 2]
- [changement 3]

## Validation
- [validation 1]
- [validation 2]

## Guardrails
No [hors scope 1].
No [hors scope 2].
No [hors scope 3].
```

---

## 7. Template post-merge léger

Ajouter au delivery doc du lot :

```markdown
---
## [N]. Statut merge

| Élément | Valeur |
|---------|--------|
| PR | #[numéro] — [lien] |
| Source | `[branche source]` |
| Cible | `main` |
| Méthode | Merge commit GitHub PR |
| Commit merge | `[commit]` |
| Main synchronisée | OK |
| Validations post-merge | OK |
| Garde-fous | OK |

### Décision post-merge

Le lot `[nom du lot]` est mergé dans `main`.

Résultat :

- [résultat 1]
- [résultat 2]
- [résultat 3]

Préservé :

- [élément préservé 1]
- [élément préservé 2]

Limites confirmées :

- [limite 1]
- [limite 2]

### Prochaine étape

[Prochain lot / prochain cycle / décision]
```

Règle :

Ne pas créer de document merge séparé si le statut peut être intégré au delivery doc.

---

## 8. Template release readiness

Créer un document :

`[projet]/07-delivery/mvp-release-readiness.md`

Structure :

```markdown
# [Projet] — MVP Release Readiness

**Projet** : [Nom du projet]  
**Cycle** : MVP Release Readiness  
**Mode** : SFIA Fast Track — Release readiness contrôlée  
**Statut** : En cours  
**Branche** : `[branche]`

---

## 1. Objectif

Figer `[Nom du projet]` comme MVP livrable.

---

## 2. Positionnement

Ce cycle démarre après clôture des lots MVP.

Décision :

> Le cycle MVP Delivery est clos.  
> Le présent cycle est un cycle release readiness, pas un nouveau lot produit.

---

## 3. Version cible

Version proposée :

`v0.1.0-mvp`

---

## 4. Checklist Go / No-Go

| Domaine | Critère Go | Statut |
|---------|------------|--------|
| Roadmap | Lots MVP mergés | À valider |
| Build | Build OK | À valider |
| Tests | Tests OK | À valider |
| Documentation | README/runbook OK | À valider |
| Garde-fous | Aucun scope critique introduit | À valider |

---

## 5. Release notes

### Summary

[Résumé de la release]

### Highlights

- [highlight 1]
- [highlight 2]

### Scope assumé

Cette release est un MVP.  
Elle n'est pas une version production enterprise.

---

## 6. Limites connues

| Domaine | Limite connue |
|---------|---------------|
| Auth | [limite] |
| Données | [limite] |
| Déploiement | [limite] |

---

## 7. Décision tag / release

| Élément | Décision |
|---------|----------|
| Tag Git | Après merge depuis `main` |
| GitHub Release | À confirmer |
```

---

## 9. Template de checklist Go / No-Go

| Domaine | Critère | Go | No-Go |
|---------|---------|-----|-------|
| Build | Build projet OK | OK | Échec build |
| Tests | Tests automatisés OK | OK | Tests KO |
| Documentation | README / runbook exploitables | OK | Absents ou obsolètes |
| Scope | Aucun scope critique non prévu | OK | Scope creep |
| Garde-fous | Hors scope respecté | OK | Hors scope introduit |
| Release | Version cible confirmée | OK | Version non décidée |

Décision :

| Décision | Condition |
|----------|-----------|
| Go MVP | Tous les contrôles critiques sont OK |
| Go avec réserve | Réserves mineures uniquement |
| No-Go | Build/test KO ou garde-fou critique violé |

---

## 10. Garde-fous standard

Adapter selon le projet.

Garde-fous fréquents :

- pas d'auth réelle non prévue ;
- pas de token non prévu ;
- pas d'OAuth/JWT/SSO non prévu ;
- pas de CRM non prévu ;
- pas de données réelles non prévues ;
- pas de CRUD complet non prévu ;
- pas de nouveau statut non prévu ;
- pas de déploiement cloud complet non prévu ;
- pas de Docker obligatoire non prévu ;
- pas de CI/CD lourde non prévue ;
- pas de refonte UX non prévue ;
- pas de design/Figma non demandé ;
- pas de publication externe non demandée ;
- pas de modification d'outils transverses non demandée.

---

## 11. Commandes de validation type

Adapter aux scripts du projet.

```bash
# Frontend
npm run build
npm run test

# Backend
npm run build
npm run test

# Git
git status --short
git diff --stat
```

---

## 12. Création du tag MVP

Créer le tag uniquement après merge de la release readiness dans `main`.

```bash
git switch main
git pull --ff-only
git tag -a v0.1.0-mvp -m "[Projet] MVP release readiness"
git push origin v0.1.0-mvp
```

Règle :

Ne jamais taguer une branche non mergée.

---

## 13. Anti-patterns à éviter

Éviter :

- créer un Lot 7 automatique ;
- ouvrir cloud/auth/CRM sans cycle distinct ;
- multiplier les PR documentaires sans valeur ;
- taguer avant merge ;
- confondre MVP readiness et production readiness ;
- sur-documenter chaque micro-étape ;
- modifier des outils transverses par opportunisme ;
- ajouter un scope fonctionnel pendant la release readiness.

---

## 14. Résultat attendu

À la fin du pattern :

- roadmap MVP définie ;
- lots MVP mergés ;
- release readiness clôturée ;
- validations OK ;
- tag MVP créé depuis `main` ;
- prochains sujets cadrés séparément ;
- méthode capitalisée.
