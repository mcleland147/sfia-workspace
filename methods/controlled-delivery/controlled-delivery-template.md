# SFIA — Controlled Delivery Template

**Projet** : `<project-name>`  
**Incrément** : `<increment-name>`  
**Cycle** : `<cycle-name>`  
**Statut** : `<draft|decision|implementation|validation|closed>`  
**Branche** : `<branch-name>`

**Référence** : [`controlled-delivery-standard.md`](controlled-delivery-standard.md)

---

## 1. Contexte

Décrire le contexte du cycle (projet, incrément, historique des cycles précédents).

---

## 2. Objectif

Décrire l'objectif précis du cycle.

---

## 3. Phase concernée

- [ ] Phase 1 — Cadrage fin
- [ ] Phase 2 — Réalisation groupée contrôlée
- [ ] Validation
- [ ] Capitalisation
- [ ] Hardening / publication (méthode)

---

## 4. Hypothèses

Lister les hypothèses sur lesquelles repose le cycle (ex. mono-utilisateur, données fictives, pas de backend).

---

## 5. Risques

| Risque | Gravité | Mitigation |
|--------|---------|------------|
| `<risk>` | Faible / Moyenne / Haute | `<mitigation>` |

---

## 6. Périmètre autorisé

Lister ce qui est explicitement autorisé.

---

## 7. Hors périmètre

Lister ce qui est explicitement interdit.

---

## 8. Données manipulées

| Donnée | Type | Autorisée | Commentaire |
|-------|------|-----------|-------------|
| `<data>` | `<type>` | Oui / Non | `<comment>` |

---

## 9. Actions ou transitions

| Source | Action | Cible | Autorisée |
|--------|--------|-------|-----------|
| `<source>` | `<action>` | `<target>` | Oui / Non |

---

## 10. Garde-fous

### Fonctionnels

`<liste>`

### Techniques

`<liste>`

### Data

`<liste>`

### UX

`<liste>`

### Delivery

`<liste>`

---

## 11. Preuves attendues

| Preuve | Comment la produire |
|--------|---------------------|
| Build OK | `npm run build` ou équivalent |
| Tests OK | Suite de tests ciblée |
| Reset / rollback | Scénario de test ou démo |
| Garde-fous | Grep, revue, checklist |
| Limites | Section dédiée dans summary |

---

## 12. Signaux de passage phase 2

Cocher si le cycle acte un passage en phase 2 :

- [ ] Périmètre stabilisé
- [ ] Data cadrée
- [ ] Interdits écrits
- [ ] Lot cohérent identifié
- [ ] Reset / rollback prévu
- [ ] Tests définis
- [ ] Risque accepté et nommé

---

## 13. Tests attendus

Lister les tests minimaux attendus.

---

## 14. Reset / rollback

Décrire le mécanisme de retour arrière.

---

## 15. Résultat obtenu

À compléter en fin de cycle :

- livrables produits ;
- comportement livré ;
- écarts par rapport au plan.

---

## 16. Capitalisation

À compléter si le cycle produit des enseignements :

- ce qui doit être réutilisé ;
- ce qui doit être mis à jour dans le standard SFIA ;
- prochain cycle méthode ou projet.

---

## 17. Critères de clôture

- [ ] Build OK (si applicable)
- [ ] Tests OK (si applicable)
- [ ] Garde-fous vérifiés
- [ ] Documentation mise à jour
- [ ] Limites explicitées
- [ ] Décision de clôture formalisée

---

## 18. Décision

Décision du cycle.

---

## 19. Prochaine étape

Décrire le prochain cycle recommandé.
