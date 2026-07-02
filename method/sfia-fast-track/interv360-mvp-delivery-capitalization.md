# SFIA Fast Track — MVP Delivery Capitalization

**Projet source** : Interv360  
**Version source** : `v0.1.0-mvp`  
**Cycle source** : Interv360 MVP Final Roadmap + MVP Release Readiness  
**Mode** : SFIA Fast Track — Capitalisation méthode  
**Branche** : `method/interv360-mvp-delivery-capitalization`  
**Statut** : Cadrage opérationnel

---

## 1. Objectif

Ce document capitalise la méthode utilisée pour transformer Interv360 d'une démonstration produit vers un MVP structuré, industrialisé, validé et tagué.

L'objectif n'est pas de documenter uniquement Interv360, mais d'extraire une méthode SFIA réutilisable pour d'autres cycles produit.

---

## 2. Point de départ observé

Le projet Interv360 disposait initialement :

- d'une démonstration crédible ;
- d'un backend persistant ;
- d'une API stabilisée ;
- d'un frontend connecté ;
- d'un mode local et API ;
- d'un runbook ;
- de tests frontend/backend.

Limite principale :

> le produit était démontrable, mais pas encore structuré comme MVP livrable.

---

## 3. Décision structurante

La bascule méthode a consisté à ne plus raisonner en micro-incréments de démonstration, mais en lots produit exploitables.

Décision :

> un lot = une capacité produit utile, mergée en PR unique, avec post-merge léger.

Cette décision a permis de réduire les cycles administratifs intermédiaires et de concentrer l'effort sur des résultats directement utiles.

---

## 4. Séquence appliquée

La séquence complète a été :

| Étape | Objectif |
|-------|----------|
| Roadmap MVP Final | Définir la cible produit et les lots |
| Lot 1 — Backend Users & Session | Matérialiser les utilisateurs et la session minimale |
| Lot 2 — Audit Trail | Rendre l'historique exploitable |
| Lot 3 — Request Model Finalization | Stabiliser le modèle métier |
| Lot 4 — API Product Hardening | Durcir et clarifier l'API |
| Lot 5 — Product UX Finalization | Finaliser l'expérience MVP |
| Lot 6 — Product Industrialization | Rendre le produit installable/testable |
| Release Readiness | Figer la version MVP |
| Tag Git | Borner officiellement le MVP |

Résultat :

`v0.1.0-mvp`

---

## 5. Pattern SFIA Fast Track observé

Le pattern efficace est :

```text
Décision structurante
→ Roadmap cible
→ Lots produit utiles
→ PR unique par lot
→ Post-merge léger
→ Release readiness
→ Tag MVP
→ Capitalisation méthode
```

Ce pattern évite :

- les PR purement administratives répétées ;
- les micro-cycles sans résultat produit ;
- les synthèses intermédiaires inutiles ;
- les changements de scope non maîtrisés ;
- les lots artificiels après clôture.

---

## 6. Règles de delivery retenues

| Règle | Application |
|-------|-------------|
| Un lot = un résultat utile | Oui |
| Une branche par lot | Oui |
| Une PR par lot | Oui |
| Post-merge léger | Oui |
| Tests obligatoires | Oui |
| Garde-fous explicites | Oui |
| Pas de scope creep | Oui |
| Pas de publication Notion automatique | Oui |
| Pas de modification outils transverses | Oui |
| Pas de Lot 7 automatique | Oui |

---

## 7. Structure type d'un lot produit

Un lot produit efficace contient :

1. objectif ;
2. périmètre ;
3. hors scope ;
4. garde-fous ;
5. incréments internes ;
6. preuves de validation ;
7. préparation PR ;
8. post-merge léger ;
9. impact roadmap.

Le cadrage et le delivery sont regroupés dans le même document lorsque cela accélère sans perdre la traçabilité.

---

## 8. Structure type d'un post-merge léger

Un post-merge léger doit contenir :

- PR mergée ;
- commit merge ;
- branche source ;
- cible ;
- validations post-merge ;
- impact roadmap ;
- limites confirmées ;
- prochaine étape ;
- confirmation des garde-fous.

Il ne doit pas créer un document séparé si le statut peut être intégré au delivery doc.

---

## 9. Structure type d'une release readiness

Une release readiness doit contenir :

- version cible ;
- périmètre livré ;
- checklist Go / No-Go ;
- release notes ;
- limites connues ;
- prérequis ;
- commandes de validation ;
- décision tag ;
- décision GitHub Release ;
- PR unique ;
- post-merge ;
- tag depuis `main`.

---

## 10. Garde-fous méthode

Les garde-fous doivent être explicites à chaque cycle.

Pour Interv360, les principaux garde-fous étaient :

- pas d'auth réelle ;
- pas de token ;
- pas d'OAuth/JWT/SSO ;
- pas de CRM ;
- pas de données réelles ;
- pas de CRUD complet ;
- pas de nouveau statut ;
- pas de `STAT-08` ;
- pas de Docker obligatoire ;
- pas de déploiement cloud complet ;
- pas d'arc Figma ;
- pas d'export Figma ;
- pas de Notion non demandé ;
- pas de Controlled Delivery ;
- pas de modification `sfia-notion-sync`.

---

## 11. Indicateurs de réussite

| Indicateur | Résultat Interv360 |
|------------|-------------------|
| Roadmap cible | Définie |
| Lots MVP | 6/6 mergés |
| Release readiness | Clôturée |
| Tests frontend | 191 |
| Tests backend | 125 |
| CI minimale | Présente |
| Tag Git | `v0.1.0-mvp` |
| GitHub Release | Reportée |
| MVP estimé | 96–98% |

---

## 12. Ce qui a bien fonctionné

Points forts :

- découpage par capacités produit ;
- PR unique par lot ;
- post-merge léger ;
- décisions courtes mais tracées ;
- garde-fous très explicites ;
- absence de Lot 7 automatique ;
- tag final depuis `main` ;
- release readiness avant tag ;
- capitalisation après clôture.

---

## 13. Points d'attention

Points à surveiller pour réutilisation :

- éviter de sur-documenter chaque micro-étape ;
- ne pas créer de nouveaux lots par inertie ;
- ne pas confondre release readiness et production readiness ;
- ne pas taguer avant merge ;
- ne pas ouvrir cloud/auth/CRM sans cycle distinct ;
- ne pas modifier les outils transverses sans demande explicite.

---

## 14. Modèle réutilisable

Pour un futur projet, le modèle recommandé est :

1. Roadmap produit cible
2. Lots produit exploitables
3. Delivery doc unique par lot
4. PR unique par lot
5. Post-merge léger
6. Release readiness
7. Tag depuis `main`
8. Capitalisation méthode

---

## 15. Quand utiliser ce pattern

Utiliser ce pattern lorsque :

- une démo doit devenir un MVP ;
- le produit est déjà partiellement fonctionnel ;
- il faut stabiliser sans ouvrir immédiatement les sujets enterprise ;
- l'objectif est d'obtenir une version livrable ;
- les risques de scope creep sont élevés ;
- il faut garder une cadence rapide.

---

## 16. Quand ne pas utiliser ce pattern

Ne pas utiliser tel quel lorsque :

- le produit n'a pas encore de socle fonctionnel ;
- l'architecture cible n'est pas comprise ;
- les exigences réglementaires sont prioritaires ;
- le système doit être production-ready immédiatement ;
- les dépendances externes sont dominantes ;
- le backlog n'est pas encore priorisé.

---

## 17. Décision de capitalisation

La méthode SFIA Fast Track — MVP Delivery est validée comme pattern réutilisable.

Nom recommandé :

**SFIA Fast Track MVP Delivery Pattern**

Usage recommandé :

- transformation démo → MVP ;
- finalisation produit ;
- livraison locale / pré-cloud ;
- cadrage rapide avec garde-fous ;
- release readiness documentaire ;
- tag MVP.

---

## 18. Template réutilisable

Le template réutilisable du pattern est disponible ici :

`templates/mvp-delivery-pattern-template.md`

Il permet d'appliquer le pattern **SFIA Fast Track MVP Delivery** à un autre projet sans repartir de zéro.

Contenu du template :

- conditions d'utilisation ;
- décision structurante initiale ;
- roadmap MVP cible ;
- structure type d'un lot produit ;
- post-merge léger ;
- release readiness ;
- checklist Go / No-Go ;
- garde-fous standard ;
- commandes de validation ;
- création du tag MVP ;
- anti-patterns.

---

## 19. Prochaine étape

Préparer la PR unique de capitalisation méthode.

La PR devra inclure :

- la capitalisation Interv360 ;
- le template réutilisable ;
- la confirmation qu'aucun produit Interv360 n'a été modifié.
