# Interv360 — Demo Presentation Feedback

**Projet** : Interv360  
**Cycle** : Demo Presentation Feedback  
**Mode** : SFIA Fast Delivery documentaire  
**Statut** : Feedback humain collecté  
**Branche** : `delivery/interv360-demo-presentation-feedback`  
**Base** : `main` @ `992c008`

Références :

- Préparation revue : [`demo-presentation-review.md`](./demo-presentation-review.md)
- Revue technique : [`demo-feedback-review.md`](./demo-feedback-review.md)

---

## 1. Objectif

Ce cycle formalise le feedback humain réel reçu après présentation/revue du démonstrateur Interv360.

L'objectif est de confirmer les irritants réellement observés et de décider si un polish UX est justifié.

Ce cycle ne modifie pas le produit.

---

## 2. Point de départ

Le cycle précédent `demo-presentation-review` avait préparé :

- une trame de présentation ;
- une grille de feedback humain ;
- une liste d'irritants à confirmer ;
- une décision ouverte sur le polish UX.

Aucun feedback humain n'avait alors été inventé.

Ce cycle complète cette étape avec un retour réel collecté hors repo après présentation/revue.

---

## 3. Synthèse du feedback humain

Le retour est exploitable et suffisant pour trancher sur la suite.

### Grille de feedback

| Zone | Retour | Décision |
|------|--------|----------|
| Compréhension globale | Oui, clair | OK — pas de changement structurel |
| Longueur page / scroll | Un peu gênant — souhait d'une vue par page | Irritant confirmé — prioritaire |
| Readiness | Oui, utile | Conserver |
| Scénario guidé | Oui, utile | Conserver |
| Workflow / transitions | Oui, compréhensibles | Conserver |
| Labels Batch / INC-01 | Non gênants | Non confirmé comme irritant |
| Mode API | Mentionner seulement — montrer quand complètement prêt | Pas de démo API live pour l'instant |

---

## 4. Bilan des irritants

| Irritant identifié précédemment | Verdict | Décision |
|--------------------------------|---------|----------|
| Page longue / scroll | Confirmé — forte irritation | À traiter en priorité |
| Readiness + script vs mode API | Confirmé faible | Alignement documentaire à prévoir, non urgent |
| Labels Batch / INC | Non confirmé | Ne pas traiter maintenant |
| Scénario non synchronisé workflow | Non confirmé — fonctionnement compréhensible | Ne pas traiter maintenant |

---

## 5. Points positifs confirmés

- Objectif et fil SAV clairs.
- Readiness utile pour présenter.
- Scénario guidé utile pour structurer la démonstration.
- Workflow nominal lisible sans formation préalable.
- Transitions compréhensibles.
- La démo locale est suffisante pour une présentation standard.

---

## 6. Décision polish

Un polish UX mineur est recommandé.

Le polish doit être strictement centré sur un seul sujet :

> Réduire le scroll via une vue par page ou une navigation par écran.

### Décision

- [x] Polish UX mineur recommandé
- [ ] Correction prioritaire large nécessaire
- [ ] Aucun polish nécessaire
- [ ] Nouvelle revue nécessaire avant décision

---

## 7. Périmètre recommandé du polish

**Cycle recommandé :** `delivery/interv360-demo-polish`

**Objectif strict :**

- introduire une vue par page ou navigation par écran ;
- réduire le scroll ;
- améliorer la lisibilité en présentation ;
- conserver readiness ;
- conserver scénario guidé ;
- conserver workflow nominal ;
- conserver mode local par défaut.

---

## 8. Hors scope immédiat

Ne pas traiter dans le polish immédiat :

- polish large du mode API ;
- démonstration API live ;
- correction des labels Batch / INC ;
- synchronisation automatique scénario ↔ workflow ;
- refonte globale UI ;
- nouveau parcours métier ;
- nouveau statut ;
- CRM ;
- authentification ;
- données réelles.

---

## 9. Mise à jour documentaire optionnelle

Un cycle documentaire léger pourra être ouvert plus tard :

`delivery/interv360-demo-presentation-package-update`

**Objectif éventuel :**

- aligner le script et le package de présentation sur la décision :
  - mode API à mentionner ;
  - mode API à ne pas montrer en live pour l'instant.

Ce cycle n'est pas prioritaire par rapport au polish ciblé.

---

## 10. Décision SFIA

Le feedback humain confirme qu'un polish est pertinent, mais uniquement sur un irritant prioritaire.

La bonne séquence est donc :

1. tracer le feedback humain ;
2. merger ce feedback dans `main` ;
3. ouvrir ensuite un cycle polish ciblé ;
4. refuser tout élargissement du polish tant qu'il n'est pas justifié par feedback.

Cette approche évite un polish sur hypothèse et conserve la logique Fast Delivery.

---

## 11. Validation

| Contrôle | Résultat |
|----------|----------|
| Feedback humain tracé | OK |
| Irritant prioritaire confirmé | OK — page longue / scroll |
| Décision polish argumentée | OK |
| Code frontend modifié | Non |
| Backend modifié | Non |
| Nouveau scope métier | Non |
| Polish réalisé | Non |
| Frontend build | OK |
| Frontend tests | OK — 77 tests |
| Backend build | OK |
| Backend tests | OK — 18 tests |
| Données réelles introduites | Non |
| DB SQL introduite | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |
