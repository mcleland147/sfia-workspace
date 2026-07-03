# SFIA — Controlled Delivery Index Integration

**Domaine SFIA** : Delivery Method  
**Cycle** : Controlled Delivery Index Integration  
**Statut** : Intégration index markdown  
**Branche** : `method/controlled-delivery-index-integration`

---

## 1. Objectif du cycle

Ce cycle intègre **Controlled Delivery** dans la navigation markdown locale du repo.

Il **ne publie rien** dans Notion.

L'objectif est de rendre le standard visible et accessible dans l'écosystème SFIA local avant toute publication externe.

---

## 2. Contexte

Le standard Controlled Delivery dispose désormais :

- d'un standard hardened ;
- d'une checklist ;
- d'un template ;
- d'une famille de prompts ;
- d'un README de dossier ;
- d'un package de publication ;
- d'une checklist de publication ;
- d'un summary de package.

La publication Notion reste conditionnée à une **demande explicite**.

**Référence :** [`controlled-delivery-publication-package-summary.md`](controlled-delivery-publication-package-summary.md)

---

## 3. Intégration réalisée

| Action | Fichier | Détail |
|--------|---------|--------|
| Création | `method/complementary/README.md` | Index local des méthodes complémentaires au niveau repo |
| Création | `controlled-delivery-index-integration.md` | Ce document |
| Mise à jour | `docs/practices/README.md` | Entrée de renvoi vers `method/complementary/controlled-delivery/` |

**Fichiers volontairement non modifiés :**

- actifs hardened Controlled Delivery (`standard`, `checklist`, `template`, `prompt-family`) ;
- `projects/interv360/**` ;
- `sfia-notion-sync` / `tools/cmp-001` ;
- `README.md` racine (pas de refonte de la structure workspace) ;
- `docs/README.md` ;
- `docs/standards/README.md`.

**Décision de périmètre :** cas B (création de `method/complementary/README.md`) + entrée discrète dans l'index pratiques existant `docs/practices/README.md`, sans refonte du README racine.

---

## 4. Entrée Controlled Delivery

Entrée ajoutée ou confirmée :

| Méthode | Domaine | Statut | Description |
|---------|---------|--------|-------------|
| Controlled Delivery | Delivery Method | Draft — Hardened / Publication package ready | Méthode de delivery contrôlé combinant phase 1 de cadrage fin et phase 2 de réalisation groupée contrôlée |

**Liens de navigation :**

- [`method/complementary/README.md`](../README.md)
- [`controlled-delivery/README.md`](README.md)

---

## 5. Destination cible rappelée

**Destination SFIA proposée :**

`SFIA Standards / Delivery Method / Controlled Delivery`

Cette intégration markdown **ne vaut pas** publication Notion.

---

## 6. Garde-fous respectés

Le cycle n'a pas créé :

- publication Notion ;
- synchronisation Notion ;
- modification `sfia-notion-sync` ;
- push ;
- PR ;
- modification applicative Interv360 ;
- modification du workflow INC-01 ;
- refonte des actifs hardened.

---

## 7. Décision

**Décision proposée :**

- [x] Controlled Delivery intégré dans l'index markdown local
- [ ] Intégration à compléter
- [ ] Intégration à reprendre

### Décision

Controlled Delivery est désormais **référencé dans la navigation markdown locale** du repo.

Le standard reste prêt pour une publication ultérieure, sous réserve d'une demande explicite.

---

## 8. Prochaine étape recommandée

Deux options restent possibles.

### Option A — Publication Notion

**Cycle :**

`method/controlled-delivery-publish-notion`

**Condition :**

Uniquement après **demande explicite** de publication.

### Option B — Final demo package Interv360

**Cycle :**

`delivery/interv360-inc-01-final-demo-package`

**Objectif :**

Préparer un package final de démonstration Interv360 INC-01.

**Recommandation :**

Si la priorité est la visibilité produit, ouvrir **Option B**. Si la priorité est la diffusion méthode, attendre une décision explicite pour **Option A**.
