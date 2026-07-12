# SFIA — Controlled Delivery Publication Package

**Domaine SFIA** : Delivery Method  
**Cycle** : Controlled Delivery Publication Package  
**Statut** : Package prêt à publier  
**Branche** : `method/controlled-delivery-publication-package`

**Références :** [`controlled-delivery-publication-prep.md`](controlled-delivery-publication-prep.md), [`README.md`](../../../../complementary/controlled-delivery/README.md)

---

## 1. Objectif du package

Ce document prépare le **package final de publication** du standard SFIA Controlled Delivery.

Il **ne publie rien** dans Notion.

Il consolide :

- les fichiers à publier ;
- la structure cible ;
- l'ordre de lecture ;
- les contrôles avant publication ;
- les notes de positionnement ;
- les limites de diffusion.

---

## 2. Destination cible

**Destination recommandée :**

`SFIA Standards / Delivery Method / Controlled Delivery`

**Justification :**

- Controlled Delivery est un standard méthodologique ;
- il structure un mode de delivery ;
- il contient des actifs réutilisables ;
- il dépasse le périmètre du projet Interv360 ;
- il relève davantage d'un standard que d'un simple template.

---

## 3. Structure cible de publication

**Page principale :**

`Controlled Delivery`

**Sous-pages ou sections :**

| Ordre | Élément | Fichier source | Rôle |
|------|---------|----------------|------|
| 1 | `Controlled Delivery Standard` | `controlled-delivery-standard.md` | Standard normatif |
| 2 | `Controlled Delivery Checklist` | `controlled-delivery-checklist.md` | Contrôles opérationnels |
| 3 | `Controlled Delivery Template` | `controlled-delivery-template.md` | Modèle réutilisable |
| 4 | `Controlled Delivery Prompt Family` | `controlled-delivery-prompt-family.md` | Prompts de cycles |
| 5 | `Publication Notes` | `controlled-delivery-publication-prep.md` + ce package | Notes de diffusion |
| 6 | `Reference Case — Interv360 INC-01` | documents Interv360 `04-delivery` | Annexe terrain facultative |

**Ordre de lecture recommandé :** 1 → 4 (normatif), puis 5 (notes), puis 6 (annexe terrain).

---

## 4. Fichiers à publier

| Fichier | Publication | Commentaire |
|--------|-------------|-------------|
| `controlled-delivery-standard.md` | Oui | Document principal |
| `controlled-delivery-checklist.md` | Oui | Support de revue |
| `controlled-delivery-template.md` | Oui | Modèle de cycle |
| `controlled-delivery-prompt-family.md` | Oui | Prompts réutilisables |
| `README.md` | Oui / index | Peut servir d'index ou sommaire |
| `controlled-delivery-publication-prep.md` | Optionnel | Note interne de préparation |
| `controlled-delivery-publication-package.md` | Optionnel | Note interne ou annexe publication |
| `controlled-delivery-publication-checklist.md` | Optionnel | Checklist opérateur publication |
| `controlled-delivery-standard-summary.md` | Non prioritaire | Historique interne |
| `controlled-delivery-standard-hardening-summary.md` | Non prioritaire | Historique interne |

---

## 5. Référence terrain Interv360

**Référence terrain facultative :**

| Document | Usage recommandé |
|----------|------------------|
| [`inc-01-phase-2-rex.md`](../../../../projects/interv360/archive/inc-01-phase-2-rex.md) | Annexe principale REX |
| [`inc-01-demo-script.md`](../../../../projects/interv360/archive/inc-01-demo-script.md) | Exemple de démonstration |
| [`inc-01-controlled-workflow-validation.md`](../../../../projects/interv360/archive/inc-01-controlled-workflow-validation.md) | Exemple de validation |
| [`inc-01-controlled-workflow-skeleton-summary.md`](../../../../projects/interv360/archive/inc-01-controlled-workflow-skeleton-summary.md) | Exemple de summary de livraison |

**Règle :**

Interv360 doit rester un **cas de référence**, pas le cœur normatif du standard.

---

## 6. Message d'ouverture proposé

> Controlled Delivery est un standard SFIA de delivery contrôlé.
>
> Il aide à choisir le bon niveau de contrôle au bon moment : micro-cycles lorsque le sujet est instable, réalisation groupée contrôlée lorsque les règles sont stabilisées.
>
> L'objectif est d'accélérer sans perdre le cadre, en conservant les garde-fous, les preuves, les critères de sortie et la capitalisation.

---

## 7. Notes de positionnement

**Controlled Delivery doit être positionné comme :**

- un standard SFIA ;
- une méthode de delivery adaptatif ;
- un cadre de passage de la décision à la réalisation ;
- un outil de maîtrise du rythme ;
- une méthode capitalisée depuis un retour terrain.

**Controlled Delivery ne doit pas être positionné comme :**

- une méthode agile complète ;
- un framework projet complet ;
- un outil logiciel ;
- une méthode spécifique à Interv360 ;
- un substitut à la sécurité, à l'architecture ou à la gouvernance data.

---

## 8. Contrôles avant publication

Avant publication effective, vérifier :

- [ ] destination validée ;
- [ ] décision explicite de publication donnée ;
- [ ] pas de secrets ;
- [ ] pas de données personnelles ;
- [ ] pas de données client réelles ;
- [ ] liens relatifs cohérents ;
- [ ] terminologie harmonisée ;
- [ ] documents à publier clairement identifiés ;
- [ ] documents historiques non prioritaires exclus ou placés en annexe ;
- [ ] référence Interv360 clairement marquée comme cas terrain.

**Checklist opérationnelle :** [`controlled-delivery-publication-checklist.md`](controlled-delivery-publication-checklist.md)

---

## 9. Hors périmètre

Ce package ne réalise pas :

- publication Notion ;
- synchronisation Notion ;
- modification de `sfia-notion-sync` ;
- push ;
- PR ;
- modification applicative Interv360 ;
- modification du workflow INC-01 ;
- refonte des actifs hardened.

---

## 10. Décision package

**Décision proposée :**

- [x] Package de publication préparé
- [ ] Package incomplet
- [ ] Destination à rediscuter

### Décision

Le package Controlled Delivery est **prêt pour une publication ultérieure**, sous réserve d'une demande explicite et d'un cycle de publication dédié.

---

## 11. Prochaine étape recommandée

Ouvrir un cycle séparé **uniquement après décision explicite :**

`method/controlled-delivery-publish-notion`

**Objectif :**

- publier le standard dans la destination SFIA validée ;
- utiliser la structure cible ;
- vérifier les liens ;
- contrôler le rendu ;
- ne publier que les actifs validés.

**Alternative sans Notion :**

`method/controlled-delivery-index-integration`

**Objectif :**

- intégrer Controlled Delivery dans un index markdown global SFIA ;
- ne pas publier dans Notion.
