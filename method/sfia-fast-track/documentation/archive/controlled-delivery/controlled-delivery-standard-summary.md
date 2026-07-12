# SFIA — Controlled Delivery Standard Summary

**Domaine SFIA** : Delivery Method  
**Cycle** : Controlled Delivery Standard  
**Statut** : Clôturé  
**Branche** : `method/controlled-delivery-standard`

---

## 1. Objectif du cycle

Ce cycle a capitalisé le retour d'expérience **Interv360 INC-01 phase 2** en standard SFIA réutilisable.

L'objectif était de formaliser une méthode de delivery contrôlé permettant d'articuler deux rythmes complémentaires :

- phase 1 : cadrage fin par micro-cycles ;
- phase 2 : réalisation groupée contrôlée lorsque les règles sont stabilisées.

---

## 2. Origine de la méthode

La méthode est issue du REX Interv360 INC-01 phase 2.

**Source :** [`inc-01-phase-2-rex.md`](../../../../projects/interv360/archive/inc-01-phase-2-rex.md)

Le REX a démontré que :

- les micro-cycles sont utiles pour sécuriser un périmètre instable ;
- la réalisation groupée devient pertinente lorsque les règles sont claires ;
- les garde-fous peuvent être conservés même en accélérant ;
- la valeur produit devient plus visible en phase 2 ;
- la documentation doit rester utile sans ralentir excessivement le delivery.

**Commit applicatif méthode :** `36afa73` — `docs: add controlled delivery standard`

---

## 3. Actifs créés

| Fichier | Rôle |
|---------|------|
| `method/complementary/controlled-delivery/controlled-delivery-standard.md` | Standard SFIA de delivery contrôlé |
| `method/complementary/controlled-delivery/controlled-delivery-checklist.md` | Checklists phase 1, phase 2, réalisation, validation et capitalisation |
| `method/complementary/controlled-delivery/controlled-delivery-template.md` | Template réutilisable pour les futurs cycles |
| `method/complementary/controlled-delivery/controlled-delivery-prompt-family.md` | Famille de prompts pour industrialiser les cycles |

---

## 4. Principe central

Le principe central formalisé est :

> Adapter le niveau de contrôle au niveau de maturité du sujet.

Cela signifie :

- rester en micro-cycles lorsque le périmètre, les données ou les actions sont instables ;
- passer en réalisation groupée lorsque les règles, les interdits, les garde-fous et les tests sont stabilisés.

---

## 5. Phase 1 — Cadrage fin

La phase 1 est adaptée lorsque le sujet est encore incertain.

Elle permet de sécuriser :

- le go / no-go ;
- les choix techniques ;
- le cadrage data ;
- les objets métier ;
- les interdits ;
- les vues readonly ;
- le reset ou rollback ;
- les premières transitions candidates ;
- les garde-fous.

---

## 6. Phase 2 — Réalisation groupée contrôlée

La phase 2 est adaptée lorsque les règles sont suffisamment stabilisées.

Elle permet :

- d'implémenter un lot fonctionnel cohérent ;
- d'accélérer le delivery ;
- de renforcer les tests ;
- de conserver les garde-fous ;
- de produire une valeur plus visible ;
- de documenter la clôture sans surdocumenter chaque micro-évolution.

---

## 7. Critères de passage phase 1 → phase 2

Le standard définit les critères suivants :

| Critère | Attendu |
|--------|---------|
| Périmètre fonctionnel | Clarifié |
| Objets métier | Identifiés |
| Données | Cadrées |
| Interdits | Écrits |
| Garde-fous techniques | Écrits |
| Parcours readonly ou équivalent | Présent ou non nécessaire |
| Première action ou flux nominal | Décidé |
| Reset / rollback | Prévu |
| Tests | Définis |
| Risque de dérive | Acceptable |

---

## 8. Apport SFIA

Le cycle confirme que SFIA peut être utilisée comme **cadre de delivery adaptatif**.

Elle sert à :

- décider ;
- cadrer ;
- accélérer ;
- contrôler ;
- valider ;
- capitaliser.

La valeur principale n'est pas seulement dans les livrables produits, mais dans la capacité à choisir le bon niveau de contrôle au bon moment.

---

## 9. Décision de clôture

**Décision proposée :**

- [x] Cycle Controlled Delivery Standard clôturé
- [ ] Cycle à compléter
- [ ] Cycle à reprendre

### Décision

Le cycle `method/controlled-delivery-standard` est **clôturé avec succès**.

Les premiers actifs de méthode Controlled Delivery sont disponibles et peuvent être réutilisés pour d'autres incréments Interv360 ou d'autres projets pilotés avec SFIA.

---

## 10. Prochaine étape recommandée

Ouvrir un cycle séparé :

`method/controlled-delivery-standard-hardening`

**Objectif :**

- relire le standard comme actif SFIA durable ;
- améliorer le wording ;
- vérifier la cohérence avec l'arborescence SFIA ;
- préparer une éventuelle publication Notion ultérieure ;
- ne pas publier dans Notion dans ce cycle.

**Alternative :**

`delivery/interv360-inc-01-final-demo-package`

**Objectif :**

- préparer un package final de démonstration Interv360 INC-01 ;
- regrouper script, validation, REX et limites ;
- préparer une présentation.

**Recommandation :**

Ouvrir ensuite `method/controlled-delivery-standard-hardening` pour stabiliser le standard avant toute publication ou diffusion.
