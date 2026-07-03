# SFIA — Controlled Delivery Publication Prep

**Domaine SFIA** : Delivery Method  
**Cycle** : Controlled Delivery Publication Prep  
**Statut** : Préparation diffusion  
**Branche** : `method/controlled-delivery-publication-prep`

---

## 1. Objectif du cycle

Ce cycle prépare la **diffusion** du standard SFIA Controlled Delivery.

Il **ne publie pas** le standard dans Notion.

Il vise à clarifier :

- la destination cible dans l'arborescence SFIA ;
- les actifs à diffuser ;
- les prérequis de publication ;
- les contrôles avant diffusion ;
- les limites de ce qui doit rester en référence terrain.

---

## 2. Actifs concernés

| Actif | Fichier | Statut |
|------|---------|--------|
| Standard | `controlled-delivery-standard.md` | Hardened |
| Checklist | `controlled-delivery-checklist.md` | Hardened |
| Template | `controlled-delivery-template.md` | Hardened |
| Prompt family | `controlled-delivery-prompt-family.md` | Hardened |
| Summary initial | `controlled-delivery-standard-summary.md` | Clôturé |
| Summary hardening | `controlled-delivery-standard-hardening-summary.md` | Clôturé |
| Index dossier | `README.md` | Créé dans ce cycle |

**Emplacement repo :** `method/complementary/controlled-delivery/`

**Alignement arborescence existante :** le dépôt contient aussi `docs/practices/` pour d'autres méthodes SFIA (architecture, BPMN, rôles). Controlled Delivery peut y être référencé depuis l'index méthode global lors d'un cycle de publication ultérieur.

---

## 3. Destination SFIA proposée

**Destination recommandée :**

`SFIA Standards / Delivery Method / Controlled Delivery`

**Justification :**

- le contenu est normatif et réutilisable ;
- il définit une méthode de delivery ;
- il contient un standard, une checklist, un template et une famille de prompts ;
- il ne s'agit pas d'un livrable projet Interv360 ;
- Interv360 reste seulement la référence terrain.

**Alternative possible :**

`SFIA Templates / Delivery / Controlled Delivery`

**Limite de cette alternative :**

- elle réduit le standard à un simple modèle ;
- elle ne reflète pas le caractère méthodologique et normatif du contenu.

**Décision proposée :**

- [x] Cible principale : `SFIA Standards / Delivery Method / Controlled Delivery`
- [ ] Cible alternative : `SFIA Templates / Delivery / Controlled Delivery`
- [ ] Cible à rediscuter

---

## 4. Structure de diffusion proposée

Créer une page ou section principale :

`Controlled Delivery`

Avec les sous-pages ou blocs suivants :

| Élément | Rôle |
|--------|------|
| `Controlled Delivery Standard` | Standard de méthode |
| `Controlled Delivery Checklist` | Checklist opérationnelle |
| `Controlled Delivery Template` | Template réutilisable |
| `Controlled Delivery Prompt Family` | Prompts de cycles |
| `Reference Case — Interv360 INC-01` | Référence terrain facultative |
| `Publication Notes` | Notes de diffusion et limites |

**Ordre de lecture recommandé :**

1. Standard  
2. Checklist  
3. Template  
4. Prompt family  
5. Référence terrain (lien vers REX / demo script, hors contenu normatif principal)

---

## 5. Message d'introduction recommandé

> Controlled Delivery est un standard SFIA de delivery contrôlé.
>
> Il permet d'adapter le niveau de contrôle au niveau de maturité d'un sujet.
>
> La méthode distingue deux rythmes complémentaires : une phase 1 de cadrage fin par micro-cycles lorsque le périmètre est instable, puis une phase 2 de réalisation groupée contrôlée lorsque les règles sont stabilisées.
>
> L'objectif est d'aller plus vite sans perdre le cadre, en conservant les garde-fous, les preuves, les critères de sortie et la capitalisation.

---

## 6. Positionnement

**Controlled Delivery doit être présenté comme :**

- une méthode de delivery adaptatif ;
- un standard SFIA réutilisable ;
- une méthode issue d'un retour terrain ;
- un cadre pour décider quand ralentir et quand accélérer ;
- un moyen de conserver la traçabilité sans surdocumenter.

**Controlled Delivery ne doit pas être présenté comme :**

- une méthode agile complète ;
- un framework projet complet ;
- un outil de développement ;
- une méthode spécifique à Interv360 ;
- une autorisation de coder sans cadrage.

---

## 7. Référence terrain

**Référence terrain proposée :**

`Interv360 INC-01 — Phase 2 REX`

**Documents terrain (annexe, non normatifs) :**

- [`inc-01-phase-2-rex.md`](../../projects/interv360/archive/inc-01-phase-2-rex.md)
- [`inc-01-demo-script.md`](../../projects/interv360/archive/inc-01-demo-script.md)
- [`inc-01-controlled-workflow-validation.md`](../../projects/interv360/archive/inc-01-controlled-workflow-validation.md)

**Usage recommandé :**

- citer Interv360 comme exemple d'origine ;
- éviter de rendre le standard dépendant d'Interv360 ;
- ne pas publier les détails applicatifs internes comme contenu principal ;
- conserver la référence terrain en annexe ou note.

---

## 8. Contrôles avant publication

Avant publication réelle, vérifier :

- [ ] pas de données sensibles ;
- [ ] pas de coordonnées personnelles ;
- [ ] pas de secrets ;
- [ ] pas de dépendance excessive à Interv360 ;
- [ ] liens relatifs cohérents ;
- [ ] terminologie harmonisée (Controlled Delivery, phase 1, phase 2) ;
- [ ] statut des documents clarifié (Draft — Hardened, Clôturé) ;
- [ ] destination SFIA validée ;
- [ ] décision explicite de publication obtenue.

**Contrôle rapide effectué dans ce cycle :** les actifs `method/complementary/controlled-delivery/` ne contiennent pas de secrets, coordonnées personnelles ni données client réelles ; Interv360 est cité comme exemple uniquement.

---

## 9. Hors périmètre de ce cycle

Ce cycle ne fait pas :

- publication Notion ;
- synchronisation Notion ;
- modification de `sfia-notion-sync` ;
- push ;
- PR ;
- modification applicative Interv360 ;
- modification du workflow INC-01 ;
- création d'un package de démo Interv360.

---

## 10. Décision de préparation

**Décision proposée :**

- [x] Préparation diffusion Controlled Delivery réalisée
- [ ] Préparation incomplète
- [ ] Destination à rediscuter

### Décision

La diffusion du standard Controlled Delivery peut être préparée vers :

`SFIA Standards / Delivery Method / Controlled Delivery`

La publication réelle reste conditionnée à un cycle dédié et à une **demande explicite**.

---

## 11. Prochaine étape recommandée

Ouvrir un cycle séparé :

`method/controlled-delivery-publication-package`

**Objectif :**

- préparer le package prêt à publier ;
- consolider les fichiers à publier ;
- produire un index final ;
- vérifier les liens ;
- préparer la structure Notion cible ;
- ne publier que si la demande est explicitement donnée dans un cycle ultérieur.

**Alternative :**

`delivery/interv360-inc-01-final-demo-package`

**Objectif :**

- préparer le package final de démonstration Interv360 INC-01.
